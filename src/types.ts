export type QuestionCategory = 'literasi' | 'numerasi' | 'sains';
export type QuestionDifficulty = 'mudah' | 'sedang' | 'sulit';

export interface Option {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export type VisualType = 'table' | 'barChart' | 'lineChart' | 'diagram' | 'notice';

export interface VisualData {
  type: VisualType;
  title?: string;
  subtitle?: string;
  tableData?: {
    headers: string[];
    rows: (string | number)[][];
  };
  chartData?: {
    label: string;
    value: number;
    color?: string;
    unit?: string;
  }[];
  noticeData?: {
    tag?: string;
    title: string;
    lines: string[];
    footer?: string;
  };
}

export interface Question {
  id: string;
  category: QuestionCategory | string;
  categoryId?: string;
  akgtkCategory?: AkgtkCategory | string;
  subject?: string;
  subjectId?: string;
  subtopic?: string;
  difficulty: QuestionDifficulty;
  competency: string;
  passage?: string;
  question: string;
  options: Option[];
  optionA?: string;
  optionB?: string;
  optionC?: string;
  optionD?: string;
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  whyWrong?: Record<string, string>; // Option ID -> explanation of why this distractor is incorrect
  reasoning?: string; // "Cara Berpikir"
  solutionSteps?: string[]; // Step-by-step for numeracy
  conceptExplanation?: string; // Concept summary for science
  tip: string;
  visualData?: VisualData;
  isCustom?: boolean;
  status?: 'ACTIVE' | 'DRAFT' | 'ARCHIVED' | 'INVALID';
  educationLevel?: EducationLevel | string;
  source?: string;
}

export interface SessionResult {
  id: string;
  date: string;
  mode: 'practice' | 'simulation';
  category: QuestionCategory | 'campuran' | string;
  total: number;
  correct: number;
  incorrect: number;
  unanswered?: number;
  score: number;
  percentage: number;
  difficulty: string;
  categoryBreakdown: Record<string, { total: number; correct: number; percentage: number }>;
  competencyBreakdown: Record<string, { total: number; correct: number; percentage: number }>;
  wrongQuestionIds: string[];
  userAnswers: Record<string, string>; // questionId -> selected Option ID ('A'|'B'|'C'|'D')
  questions: Question[]; // Snapshot of questions used
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
}

export interface Achievement {
  id: string;
  title: string;
  desc: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface UserStats {
  totalSessions: number;
  totalQuestionsAnswered: number;
  totalCorrect: number;
  totalIncorrect: number;
  averageScore: number;
  strongestCategory: string;
  weakestCategory: string;
}

export type UserRole = 'USER' | 'ADMIN' | 'SUPER_ADMIN';

export type AkgtkCategory = 
  | 'Guru Kelas'
  | 'Rumpun PAI'
  | 'STEM'
  | 'Umum'
  | 'Kepala Madrasah'
  | 'Pengawas'
  | 'Laboran'
  | 'Pustakawan';

export type AccessPackage = 'Uji Coba' | '30 Hari' | '180 Hari' | '360 Hari' | 'Custom';

export type UserAccountStatus = 'ACTIVE' | 'PENDING' | 'BLOCKED' | 'EXPIRED';

export type RegistrationSource = 'ADMIN' | 'SELF_REGISTRATION' | 'LYNK' | 'THREADS';

export type EducationLevel = 'MI' | 'MTs' | 'MA';
export type LevelAccessMode = 'NONE' | 'SELECTED' | 'ALL';

export interface EducationAccessConfig {
  mode: LevelAccessMode;
  allowedCategories?: string[];
  allowedSubjects?: string[];
}

export type EducationAccessMap = Record<EducationLevel, EducationAccessConfig>;

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  isGuest?: boolean;
  whatsapp?: string;
  madrasah?: string;
  city?: string;
  category?: AkgtkCategory;
  status?: UserAccountStatus;
  accessCode?: string;
  package?: AccessPackage;
  accessStartDate?: string;
  accessEndDate?: string;
  accessType?: 'ALL' | 'CUSTOM';
  allowedCategories?: AkgtkCategory[];
  allowedSubjects?: ('literasi' | 'numerasi' | 'sains')[];
  educationLevels?: EducationLevel[];
  accessMode?: 'NONE' | 'SELECTED' | 'ALL';
  educationAccess?: EducationAccessMap;
  accessPermissions?: {
    accessType?: 'ALL' | 'CUSTOM';
    allowedCategories?: AkgtkCategory[];
    allowedSubjects?: ('literasi' | 'numerasi' | 'sains')[];
    educationLevels?: EducationLevel[];
    accessMode?: 'NONE' | 'SELECTED' | 'ALL';
    educationAccess?: EducationAccessMap;
  };
  registrationSource?: RegistrationSource;
  createdBy?: string;
  createdAt: string;
}

export interface AdminManagedUser {
  id: string;
  name: string;
  email: string;
  whatsapp?: string;
  madrasah?: string;
  city?: string;
  category?: AkgtkCategory;
  role: UserRole;
  status: UserAccountStatus;
  accessCode?: string;
  package?: AccessPackage;
  accessStartDate?: string;
  accessEndDate?: string;
  accessType?: 'ALL' | 'CUSTOM';
  allowedCategories?: AkgtkCategory[];
  allowedSubjects?: ('literasi' | 'numerasi' | 'sains')[];
  educationLevels?: EducationLevel[];
  accessMode?: 'NONE' | 'SELECTED' | 'ALL';
  educationAccess?: EducationAccessMap;
  accessPermissions?: {
    accessType?: 'ALL' | 'CUSTOM';
    allowedCategories?: AkgtkCategory[];
    allowedSubjects?: ('literasi' | 'numerasi' | 'sains')[];
    educationLevels?: EducationLevel[];
    accessMode?: 'NONE' | 'SELECTED' | 'ALL';
    educationAccess?: EducationAccessMap;
  };
  registrationSource?: RegistrationSource;
  createdBy?: string;
  isGuest?: boolean;
  createdAt: string;
  lastActive: string;
  totalSessions: number;
  averageScore: number;
}

export interface CreateManualUserPayload {
  name: string;
  whatsapp?: string;
  madrasah?: string;
  city?: string;
  category: AkgtkCategory;
  package: AccessPackage;
  customStartDate?: string;
  customEndDate?: string;
  accessType: 'ALL' | 'CUSTOM';
  allowedCategories?: AkgtkCategory[];
  allowedSubjects?: ('literasi' | 'numerasi' | 'sains')[];
  educationLevels?: EducationLevel[];
  accessMode?: 'NONE' | 'SELECTED' | 'ALL';
  educationAccess?: EducationAccessMap;
}

export interface CreatedUserResult {
  user: AdminManagedUser;
  accessCode: string;
  whatsappMessage: string;
}

export interface ActiveSessionData {
  sessionId: string;
  mode: 'practice' | 'simulation';
  category: QuestionCategory | 'campuran';
  questions: Question[];
  userAnswers: Record<string, string>;
  flaggedQuestions: Record<string, boolean>;
  currentIndex: number;
  startedAt: string;
  totalSeconds: number;
  remainingSeconds: number;
  timeLeft?: number;
  lastSavedAt?: string;
}

export interface QuestionReport {
  id: string;
  questionId: string;
  userId: string;
  userName: string;
  reason: string;
  createdAt: string;
  status: 'pending' | 'resolved' | 'dismissed';
}

export interface AiMetrics {
  totalRequests: number;
  successfulRequests: number;
  failedRequests: number;
  questionsGenerated: number;
  lastUsedAt?: string;
  recentLogs: {
    id: string;
    timestamp: string;
    category: QuestionCategory;
    count: number;
    status: 'success' | 'failed';
    error?: string;
  }[];
}

export interface SystemStats {
  totalUsers: number;
  activeUsers: number;
  totalPractices: number;
  totalSimulations: number;
  totalQuestions: number;
  reportedQuestions: number;
  categoryDistribution: {
    literasi: number;
    numerasi: number;
    sains: number;
  };
}

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface QuestionValidationIssue {
  questionId: string;
  category: QuestionCategory;
  questionSnippet: string;
  issueType: 'missing_explanation' | 'invalid_options' | 'invalid_correct_answer' | 'missing_passage' | 'duplicate_text';
  description: string;
}

export interface QuestionValidationReport {
  totalChecked: number;
  healthScore: number;
  totalIssues: number;
  issues: QuestionValidationIssue[];
}

export interface SubjectAuditRow {
  category: string;
  subject: string;
  actualCount: number;
  activeCount: number;
  draftCount: number;
  invalidCount: number;
  duplicateCount: number;
  targetCount: number;
  deficitCount: number;
}

export interface BankAuditReport {
  timestamp: string;
  currentState: 'STATE_A' | 'STATE_B' | 'STATE_C' | 'STATE_D' | 'STATE_E';
  currentStateDescription: string;
  dataSource: string;
  totalActual: number;
  totalActive: number;
  totalDraft: number;
  totalInvalid: number;
  totalDuplicate: number;
  grandTarget: number;
  grandDeficit: number;
  rows: SubjectAuditRow[];
}

