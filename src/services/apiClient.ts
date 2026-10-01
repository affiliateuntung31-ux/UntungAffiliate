import {
  AuthUser,
  Question,
  SessionResult,
  UserStats,
  ActiveSessionData,
  QuestionReport,
  SystemStats,
  AiMetrics,
  PaginatedResult,
  QuestionCategory,
  QuestionDifficulty,
  AdminManagedUser,
  QuestionValidationReport,
  UserRole,
  AkgtkCategory,
  AccessPackage,
  UserAccountStatus,
  CreateManualUserPayload,
  CreatedUserResult,
  BankAuditReport
} from '../types';

const TOKEN_STORAGE_KEY = 'akgtk_auth_token_v2';
const USER_STORAGE_KEY = 'akgtk_auth_user_v2';

class ApiClient {
  private token: string | null = null;
  private currentUser: AuthUser | null = null;
  private isOnlineStatus: boolean = navigator.onLine;
  private onlineListeners: ((online: boolean) => void)[] = [];

  constructor() {
    this.loadAuthFromStorage();
    if (typeof window !== 'undefined') {
      window.addEventListener('online', () => {
        this.isOnlineStatus = true;
        this.notifyOnlineListeners(true);
      });
      window.addEventListener('offline', () => {
        this.isOnlineStatus = false;
        this.notifyOnlineListeners(false);
      });
    }
  }

  public isOnline(): boolean {
    return this.isOnlineStatus;
  }

  public onOnlineChange(callback: (online: boolean) => void) {
    this.onlineListeners.push(callback);
    return () => {
      this.onlineListeners = this.onlineListeners.filter(cb => cb !== callback);
    };
  }

  private notifyOnlineListeners(online: boolean) {
    this.onlineListeners.forEach(cb => cb(online));
  }

  private loadAuthFromStorage() {
    try {
      this.token = localStorage.getItem(TOKEN_STORAGE_KEY);
      const userRaw = localStorage.getItem(USER_STORAGE_KEY);
      if (userRaw) {
        const parsed = JSON.parse(userRaw);
        if (parsed?.isGuest) {
          // Clear legacy guest session so visitor starts as public visitor
          this.token = null;
          this.currentUser = null;
          localStorage.removeItem(TOKEN_STORAGE_KEY);
          localStorage.removeItem(USER_STORAGE_KEY);
        } else {
          this.currentUser = parsed;
        }
      }
    } catch (e) {
      console.warn('Could not read auth from storage', e);
    }
  }

  public setAuth(token: string, user: AuthUser) {
    this.token = token;
    this.currentUser = user;
    try {
      localStorage.setItem(TOKEN_STORAGE_KEY, token);
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    } catch (e) {
      console.warn('Could not persist auth', e);
    }
  }

  public clearAuth() {
    this.token = null;
    this.currentUser = null;
    try {
      localStorage.removeItem(TOKEN_STORAGE_KEY);
      localStorage.removeItem(USER_STORAGE_KEY);
    } catch (e) {
      console.warn('Could not clear auth storage', e);
    }
  }

  public getCurrentUser(): AuthUser | null {
    return this.currentUser;
  }

  public getToken(): string | null {
    return this.token;
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string> || {})
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    try {
      const res = await fetch(endpoint, {
        ...options,
        headers
      });

      if (res.status === 401) {
        // Session expired
        this.clearAuth();
        throw new Error('Sesi Anda telah berakhir. Silakan masuk kembali.');
      }

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Terjadi kendala pada komunikasi server. Silakan coba kembali.');
      }

      return data as T;
    } catch (err: any) {
      if (!this.isOnlineStatus || err.name === 'TypeError' || err.message?.includes('fetch')) {
        throw new Error('Koneksi terputus atau server tidak merespons. Periksa jaringan Anda.');
      }
      throw err;
    }
  }

  // -------------------------------------------------------------
  // AUTH
  // -------------------------------------------------------------

  public async register(name: string, email: string, password: string): Promise<{ token: string; user: AuthUser }> {
    const data = await this.request<{ token: string; user: AuthUser }>('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password })
    });
    this.setAuth(data.token, data.user);
    return data;
  }

  public async login(email: string, password: string): Promise<{ token: string; user: AuthUser }> {
    const data = await this.request<{ token: string; user: AuthUser }>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
    this.setAuth(data.token, data.user);
    return data;
  }

  public async guestLogin(): Promise<{ token: string; user: AuthUser }> {
    const data = await this.request<{ token: string; user: AuthUser }>('/api/auth/guest', {
      method: 'POST'
    });
    this.setAuth(data.token, data.user);
    return data;
  }

  public async getProfile(): Promise<AuthUser | null> {
    if (!this.token) return null;
    try {
      const data = await this.request<{ user: AuthUser }>('/api/auth/me');
      this.currentUser = data.user;
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(data.user));
      return data.user;
    } catch {
      return null;
    }
  }

  public async logout(): Promise<void> {
    try {
      if (this.token) {
        await this.request('/api/auth/logout', { method: 'POST' });
      }
    } catch (e) {
      // Ignore network errors on logout
    } finally {
      this.clearAuth();
    }
  }

  // -------------------------------------------------------------
  // QUESTIONS & SESSIONS
  // -------------------------------------------------------------

  public async getQuestions(params: {
    page?: number;
    limit?: number;
    educationLevel?: string;
    category?: string;
    difficulty?: string;
    search?: string;
  } = {}): Promise<PaginatedResult<Question>> {
    const query = new URLSearchParams();
    if (params.page) query.set('page', params.page.toString());
    if (params.limit) query.set('limit', params.limit.toString());
    if (params.educationLevel) query.set('educationLevel', params.educationLevel);
    if (params.category) query.set('category', params.category);
    if (params.difficulty) query.set('difficulty', params.difficulty);
    if (params.search) query.set('search', params.search);

    return this.request<PaginatedResult<Question>>(`/api/questions?${query.toString()}`);
  }

  public async startSession(options: {
    mode: 'practice' | 'simulation';
    educationLevel?: string;
    category: QuestionCategory | 'campuran' | 'remedial' | string;
    subject?: string;
    difficulty?: QuestionDifficulty | 'all';
    count: number;
  }): Promise<ActiveSessionData> {
    return this.request<ActiveSessionData>('/api/sessions/start', {
      method: 'POST',
      body: JSON.stringify(options)
    });
  }

  public async getActiveSession(): Promise<{ activeSession: ActiveSessionData | null }> {
    return this.request<{ activeSession: ActiveSessionData | null }>('/api/sessions/active');
  }

  public async saveAnswer(sessionId: string, payload: {
    questionId?: string;
    answer?: string;
    isFlagged?: boolean;
    currentIndex?: number;
  }): Promise<{ success: boolean; savedAt: string }> {
    return this.request<{ success: boolean; savedAt: string }>(`/api/sessions/${sessionId}/answer`, {
      method: 'POST',
      body: JSON.stringify(payload)
    });
  }

  public async submitSession(sessionId: string, userAnswers: Record<string, string>): Promise<{
    result: SessionResult;
    duplicateSubmission: boolean;
  }> {
    return this.request<{ result: SessionResult; duplicateSubmission: boolean }>(`/api/sessions/${sessionId}/submit`, {
      method: 'POST',
      body: JSON.stringify({ userAnswers })
    });
  }

  // -------------------------------------------------------------
  // USER STATS, HISTORY & BOOKMARKS
  // -------------------------------------------------------------

  public async getUserStats(): Promise<UserStats> {
    const res = await this.request<{ stats: UserStats }>('/api/user/stats');
    return res.stats;
  }

  public async getUserHistory(page = 1, limit = 10): Promise<PaginatedResult<SessionResult>> {
    return this.request<PaginatedResult<SessionResult>>(`/api/user/history?page=${page}&limit=${limit}`);
  }

  public async getResultDetail(resultId: string): Promise<SessionResult> {
    const res = await this.request<{ result: SessionResult }>(`/api/user/history/${resultId}`);
    return res.result;
  }

  public async getBookmarks(): Promise<string[]> {
    const res = await this.request<{ bookmarks: string[] }>('/api/user/bookmarks');
    return res.bookmarks;
  }

  public async toggleBookmark(questionId: string): Promise<{ isBookmarked: boolean; bookmarks: string[] }> {
    return this.request<{ isBookmarked: boolean; bookmarks: string[] }>('/api/user/bookmarks/toggle', {
      method: 'POST',
      body: JSON.stringify({ questionId })
    });
  }

  public async getWrongQuestions(): Promise<{ wrongQuestionIds: string[]; count: number }> {
    return this.request<{ wrongQuestionIds: string[]; count: number }>('/api/user/wrong-questions');
  }

  public async reportQuestion(questionId: string, reason: string): Promise<{ success: boolean; message: string }> {
    return this.request<{ success: boolean; message: string }>(`/api/questions/${questionId}/report`, {
      method: 'POST',
      body: JSON.stringify({ reason })
    });
  }

  // -------------------------------------------------------------
  // ADMIN APIS
  // -------------------------------------------------------------

  public async getAdminStats(): Promise<SystemStats> {
    const res = await this.request<{ stats: SystemStats }>('/api/admin/stats');
    return res.stats;
  }

  public async getAdminReports(): Promise<QuestionReport[]> {
    const res = await this.request<{ reports: QuestionReport[] }>('/api/admin/reports');
    return res.reports;
  }

  public async resolveReport(reportId: string): Promise<void> {
    await this.request(`/api/admin/reports/${reportId}/resolve`, { method: 'POST' });
  }

  public async createQuestion(question: Partial<Question>): Promise<{ success: boolean; question: Question }> {
    return this.request<{ success: boolean; question: Question }>('/api/admin/questions', {
      method: 'POST',
      body: JSON.stringify(question)
    });
  }

  public async updateQuestion(id: string, question: Partial<Question>): Promise<{ success: boolean; question: Question }> {
    return this.request<{ success: boolean; question: Question }>(`/api/admin/questions/${id}`, {
      method: 'PUT',
      body: JSON.stringify(question)
    });
  }

  public async deleteQuestion(id: string): Promise<{ success: boolean }> {
    return this.request<{ success: boolean }>(`/api/admin/questions/${id}`, {
      method: 'DELETE'
    });
  }

  public async importQuestions(questions: Question[]): Promise<{ success: boolean; addedCount: number }> {
    return this.request<{ success: boolean; addedCount: number }>('/api/admin/questions/import', {
      method: 'POST',
      body: JSON.stringify({ questions })
    });
  }

  public async getAiMetrics(): Promise<AiMetrics> {
    const res = await this.request<{ aiMetrics: AiMetrics }>('/api/admin/ai-usage');
    return res.aiMetrics;
  }

  public async generateQuestionsAi(payload: {
    category: QuestionCategory;
    difficulty: QuestionDifficulty;
    count: number;
    topic?: string;
  }): Promise<{ success: boolean; questions: Question[]; message: string }> {
    return this.request<{ success: boolean; questions: Question[]; message: string }>('/api/admin/generate-questions', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
  }

  public async getAdminUsers(): Promise<AdminManagedUser[]> {
    const res = await this.request<{ users: AdminManagedUser[] }>('/api/admin/users');
    return res.users;
  }

  public async updateUserRole(userId: string, role: UserRole): Promise<{ success: boolean; user: AdminManagedUser }> {
    return this.request<{ success: boolean; user: AdminManagedUser }>(`/api/admin/users/${userId}/role`, {
      method: 'PUT',
      body: JSON.stringify({ role })
    });
  }

  public async deleteUser(userId: string): Promise<{ success: boolean }> {
    return this.request<{ success: boolean }>(`/api/admin/users/${userId}`, {
      method: 'DELETE'
    });
  }

  public async getBankAudit(): Promise<BankAuditReport> {
    const res = await this.request<{ audit: BankAuditReport }>('/api/admin/bank-audit');
    return res.audit;
  }

  public async createAdminUser(data: { name: string; email: string; password: string; role: UserRole }): Promise<{ success: boolean; user: AdminManagedUser }> {
    return this.request<{ success: boolean; user: AdminManagedUser }>('/api/admin/users', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  public async loginWithCode(code: string): Promise<{ token: string; user: AuthUser }> {
    const data = await this.request<{ token: string; user: AuthUser }>('/api/auth/login-code', {
      method: 'POST',
      body: JSON.stringify({ code })
    });
    this.setAuth(data.token, data.user);
    return data;
  }

  public async registerRequest(payload: {
    name: string;
    whatsapp?: string;
    madrasah?: string;
    city?: string;
    category: AkgtkCategory;
    email?: string;
    password?: string;
  }): Promise<{ success: boolean; message: string; userId: string }> {
    return this.request<{ success: boolean; message: string; userId: string }>('/api/auth/register-request', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
  }

  public async createManualUser(payload: CreateManualUserPayload): Promise<CreatedUserResult> {
    return this.request<CreatedUserResult>('/api/admin/users/create-manual', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
  }

  public async approveUser(userId: string, payload?: {
    package?: AccessPackage;
    customStartDate?: string;
    customEndDate?: string;
    accessType?: 'ALL' | 'CUSTOM';
    allowedCategories?: AkgtkCategory[];
    allowedSubjects?: ('literasi' | 'numerasi' | 'sains')[];
  }): Promise<{ success: boolean; message: string; accessCode: string; whatsappMessage: string; user: AdminManagedUser }> {
    return this.request<{ success: boolean; message: string; accessCode: string; whatsappMessage: string; user: AdminManagedUser }>(`/api/admin/users/${userId}/approve`, {
      method: 'POST',
      body: JSON.stringify(payload || {})
    });
  }

  public async extendUserAccess(
    userId: string, 
    daysOrPayload?: number | { days?: number; newEndDate?: string },
    newEndDate?: string
  ): Promise<AdminManagedUser> {
    const payload = typeof daysOrPayload === 'number' 
      ? { days: daysOrPayload, newEndDate } 
      : (daysOrPayload || { days: 180, newEndDate });

    const res = await this.request<{ success: boolean; message: string; accessEndDate: string; user?: AdminManagedUser }>(`/api/admin/users/${userId}/extend`, {
      method: 'POST',
      body: JSON.stringify(payload)
    });
    if (res.user) return res.user;
    const users = await this.getAdminUsers();
    return users.find(u => u.id === userId)!;
  }

  public async resetUserCode(userId: string): Promise<{ success: boolean; message: string; accessCode: string; whatsappMessage: string }> {
    return this.request<{ success: boolean; message: string; accessCode: string; whatsappMessage: string }>(`/api/admin/users/${userId}/reset-code`, {
      method: 'POST'
    });
  }

  public async resetAccessCode(userId: string): Promise<{ success: boolean; message: string; accessCode: string; whatsappMessage: string }> {
    return this.resetUserCode(userId);
  }

  public async toggleBlockUser(userId: string): Promise<{ success: boolean; message: string; status: UserAccountStatus }> {
    return this.request<{ success: boolean; message: string; status: UserAccountStatus }>(`/api/admin/users/${userId}/toggle-block`, {
      method: 'POST'
    });
  }

  public async updateUserProfile(
    userId: string, 
    payload: Partial<CreateManualUserPayload> & { status?: UserAccountStatus; accessPermissions?: any }
  ): Promise<AdminManagedUser> {
    const flatPayload: any = {
      ...payload
    };
    if (payload.accessPermissions) {
      flatPayload.accessType = payload.accessPermissions.accessType;
      flatPayload.allowedCategories = payload.accessPermissions.allowedCategories;
      flatPayload.allowedSubjects = payload.accessPermissions.allowedSubjects;
      flatPayload.educationLevels = payload.accessPermissions.educationLevels;
      flatPayload.accessMode = payload.accessPermissions.accessMode;
      flatPayload.educationAccess = payload.accessPermissions.educationAccess;
    }
    if (payload.educationLevels) flatPayload.educationLevels = payload.educationLevels;
    if (payload.accessMode) flatPayload.accessMode = payload.accessMode;
    if (payload.educationAccess) flatPayload.educationAccess = payload.educationAccess;
    const res = await this.request<{ success: boolean; message: string; user: AdminManagedUser }>(`/api/admin/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(flatPayload)
    });
    return res.user;
  }

  public async updateUser(userId: string, payload: Partial<CreateManualUserPayload>): Promise<{ success: boolean; message: string; user: AdminManagedUser }> {
    return this.request<{ success: boolean; message: string; user: AdminManagedUser }>(`/api/admin/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(payload)
    });
  }

  public async validateQuestions(): Promise<QuestionValidationReport> {
    const res = await this.request<{ report: QuestionValidationReport }>('/api/admin/questions/validate');
    return res.report;
  }
}


export const api = new ApiClient();
