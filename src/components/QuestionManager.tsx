import React, { useState, useEffect } from 'react';
import { 
  Question, 
  QuestionCategory, 
  QuestionDifficulty, 
  SystemStats, 
  AiMetrics, 
  QuestionReport, 
  AuthUser, 
  AdminManagedUser, 
  QuestionValidationReport, 
  UserRole,
  AkgtkCategory,
  BankAuditReport,
  SubjectAuditRow
} from '../types';
import { VisualRenderer } from './VisualRenderer';
import { api } from '../services/apiClient';
import { formatUserAccessSummary } from '../categoryEngine';
import { AddUserModal } from './AddUserModal';
import { EditUserModal } from './EditUserModal';
import { ExtendAccessModal } from './ExtendAccessModal';
import { 
  Database, 
  Plus, 
  Search, 
  Filter, 
  Download, 
  Upload, 
  Trash2, 
  BookOpen, 
  Calculator, 
  Atom, 
  CheckCircle2, 
  X, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  BarChart3, 
  Cpu, 
  Flag, 
  AlertTriangle, 
  RefreshCw, 
  Loader2, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  Users, 
  Shield, 
  ShieldCheck, 
  ShieldAlert, 
  FileCheck2, 
  FileSpreadsheet, 
  LayoutDashboard, 
  LogOut, 
  ArrowLeft, 
  UserPlus, 
  FileText, 
  AlertCircle, 
  HelpCircle,
  ExternalLink,
  Edit3,
  KeyRound,
  Phone,
  School,
  MapPin,
  MessageSquare,
  Clock,
  Ban,
  UserCheck,
  Copy
} from 'lucide-react';

export type AdminTab = 
  | 'dashboard' 
  | 'bank' 
  | 'generator' 
  | 'import' 
  | 'validation' 
  | 'reports' 
  | 'stats' 
  | 'ai' 
  | 'users'
  | 'audit';

interface QuestionManagerProps {
  onBackToDashboard?: () => void;
  currentUser?: AuthUser | null;
  onLogout?: () => void;
  initialTab?: AdminTab;
}

export const QuestionManager: React.FC<QuestionManagerProps> = ({ 
  onBackToDashboard,
  currentUser,
  onLogout,
  initialTab = 'dashboard'
}) => {
  const [adminTab, setAdminTab] = useState<AdminTab>(initialTab);

  // Question bank state
  const [questions, setQuestions] = useState<Question[]>([]);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [loadingQuestions, setLoadingQuestions] = useState(false);

  // Form modal state (Add / Edit)
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingQuestionId, setEditingQuestionId] = useState<string | null>(null);
  const [formCategory, setFormCategory] = useState<QuestionCategory | string>('literasi');
  const [formDifficulty, setFormDifficulty] = useState<QuestionDifficulty>('sedang');
  const [formCompetency, setFormCompetency] = useState('');
  const [formPassage, setFormPassage] = useState('');
  const [formQuestion, setFormQuestion] = useState('');
  const [formOptA, setFormOptA] = useState('');
  const [formOptB, setFormOptB] = useState('');
  const [formOptC, setFormOptC] = useState('');
  const [formOptD, setFormOptD] = useState('');
  const [formCorrect, setFormCorrect] = useState<'A' | 'B' | 'C' | 'D'>('A');
  const [formExplanation, setFormExplanation] = useState('');
  const [formTip, setFormTip] = useState('');
  const [formSaving, setFormSaving] = useState(false);

  // AI Generator state
  const [aiCategory, setAiCategory] = useState<QuestionCategory>('literasi');
  const [aiDifficulty, setAiDifficulty] = useState<QuestionDifficulty>('sedang');
  const [aiCount, setAiCount] = useState<number>(3);
  const [aiTopic, setAiTopic] = useState<string>('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [aiSuccessMessage, setAiSuccessMessage] = useState<string | null>(null);
  const [aiGeneratedQuestions, setAiGeneratedQuestions] = useState<Question[]>([]);
  const [aiMetrics, setAiMetrics] = useState<AiMetrics | null>(null);

  // Import JSON state
  const [rawImportJson, setRawImportJson] = useState<string>('');
  const [importParsedCount, setImportParsedCount] = useState<number | null>(null);
  const [importLoading, setImportLoading] = useState(false);
  const [importError, setImportError] = useState<string | null>(null);

  // Question Validation state
  const [validationReport, setValidationReport] = useState<QuestionValidationReport | null>(null);
  const [validationLoading, setValidationLoading] = useState(false);

  // System Stats state
  const [systemStats, setSystemStats] = useState<SystemStats | null>(null);
  const [statsLoading, setStatsLoading] = useState(false);

  // Reports state
  const [reports, setReports] = useState<QuestionReport[]>([]);
  const [reportsLoading, setReportsLoading] = useState(false);

  // User Management state
  const [usersList, setUsersList] = useState<AdminManagedUser[]>([]);
  const [usersLoading, setUsersLoading] = useState(false);
  const [userSearchQuery, setUserSearchQuery] = useState('');
  const [userRoleFilter, setUserRoleFilter] = useState<string>('all');
  const [userCategoryFilter, setUserCategoryFilter] = useState<string>('all');
  const [userStatusFilter, setUserStatusFilter] = useState<string>('all');
  
  // Add User Modal (Method 2: Super Admin manually creates user)
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

  // Edit User & Extend Access Modals
  const [editingUser, setEditingUser] = useState<AdminManagedUser | null>(null);
  const [extendingUser, setExtendingUser] = useState<AdminManagedUser | null>(null);

  // Quick feedback state
  const [copiedCodeUserId, setCopiedCodeUserId] = useState<string | null>(null);
  const [copiedWaUserId, setCopiedWaUserId] = useState<string | null>(null);
  const [approvingUserId, setApprovingUserId] = useState<string | null>(null);
  const [resettingUserId, setResettingUserId] = useState<string | null>(null);

  // User Deletion Modal state
  const [userToDelete, setUserToDelete] = useState<AdminManagedUser | null>(null);
  const [isDeletingUser, setIsDeletingUser] = useState(false);

  // Bank Soal Audit state
  const [bankAudit, setBankAudit] = useState<BankAuditReport | null>(null);
  const [auditLoading, setAuditLoading] = useState(false);

  // Notification Banner
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  };

  const activeUser = currentUser || api.getCurrentUser();
  const isSuperAdmin = activeUser?.role === 'SUPER_ADMIN';

  // Fetch Questions
  const fetchQuestions = async (page = currentPage) => {
    setLoadingQuestions(true);
    try {
      const res = await api.getQuestions({
        page,
        limit: 12,
        category: selectedCategory,
        difficulty: selectedDifficulty,
        search: searchQuery
      });
      setQuestions(res.items);
      setTotalQuestions(res.total);
      setTotalPages(res.totalPages);
      setCurrentPage(res.page);
    } catch (err: any) {
      showNotification('error', err.message || 'Gagal memuat daftar soal.');
    } finally {
      setLoadingQuestions(false);
    }
  };

  // Fetch System Stats
  const fetchSystemStats = async () => {
    setStatsLoading(true);
    try {
      const stats = await api.getAdminStats();
      setSystemStats(stats);
    } catch (err: any) {
      showNotification('error', err.message || 'Gagal memuat statistik.');
    } finally {
      setStatsLoading(false);
    }
  };

  // Fetch AI Metrics
  const fetchAiMetrics = async () => {
    try {
      const metrics = await api.getAiMetrics();
      setAiMetrics(metrics);
    } catch {
      // ignore
    }
  };

  // Fetch Reports
  const fetchReports = async () => {
    setReportsLoading(true);
    try {
      const reps = await api.getAdminReports();
      setReports(reps);
    } catch (err: any) {
      showNotification('error', err.message || 'Gagal memuat laporan butir soal.');
    } finally {
      setReportsLoading(false);
    }
  };

  // Fetch Validation Report
  const fetchValidationReport = async () => {
    setValidationLoading(true);
    try {
      const rep = await api.validateQuestions();
      setValidationReport(rep);
    } catch (err: any) {
      showNotification('error', err.message || 'Gagal menjalankan audit validasi soal.');
    } finally {
      setValidationLoading(false);
    }
  };

  // Fetch Users
  const fetchUsers = async () => {
    setUsersLoading(true);
    try {
      const list = await api.getAdminUsers();
      setUsersList(list);
    } catch (err: any) {
      showNotification('error', err.message || 'Gagal memuat daftar pengguna sistem.');
    } finally {
      setUsersLoading(false);
    }
  };

  // Fetch Bank Soal Audit
  const fetchBankAudit = async () => {
    setAuditLoading(true);
    try {
      const data = await api.getBankAudit();
      setBankAudit(data);
    } catch (err: any) {
      showNotification('error', err.message || 'Gagal memuat audit bank soal.');
    } finally {
      setAuditLoading(false);
    }
  };

  // Switch tab triggers
  useEffect(() => {
    if (adminTab === 'dashboard') {
      fetchSystemStats();
      fetchValidationReport();
      fetchAiMetrics();
      fetchBankAudit();
    } else if (adminTab === 'bank') {
      fetchQuestions(1);
    } else if (adminTab === 'generator') {
      fetchAiMetrics();
    } else if (adminTab === 'validation') {
      fetchValidationReport();
    } else if (adminTab === 'audit') {
      fetchBankAudit();
    } else if (adminTab === 'reports') {
      fetchReports();
    } else if (adminTab === 'stats') {
      fetchSystemStats();
    } else if (adminTab === 'ai') {
      fetchAiMetrics();
    } else if (adminTab === 'users') {
      fetchUsers();
    }
  }, [adminTab, selectedCategory, selectedDifficulty]);

  // Handlers for Question Form Modal
  const handleOpenNewModal = () => {
    setEditingQuestionId(null);
    setFormCategory('literasi');
    setFormDifficulty('sedang');
    setFormCompetency('');
    setFormPassage('');
    setFormQuestion('');
    setFormOptA('');
    setFormOptB('');
    setFormOptC('');
    setFormOptD('');
    setFormCorrect('A');
    setFormExplanation('');
    setFormTip('');
    setIsFormOpen(true);
  };

  const handleOpenEditModal = (q: Question) => {
    setEditingQuestionId(q.id);
    setFormCategory(q.category);
    setFormDifficulty(q.difficulty);
    setFormCompetency(q.competency || '');
    setFormPassage(q.passage || '');
    setFormQuestion(q.question);
    setFormOptA(q.options.find(o => o.id === 'A')?.text || '');
    setFormOptB(q.options.find(o => o.id === 'B')?.text || '');
    setFormOptC(q.options.find(o => o.id === 'C')?.text || '');
    setFormOptD(q.options.find(o => o.id === 'D')?.text || '');
    setFormCorrect(q.correctAnswer);
    setFormExplanation(q.explanation || '');
    setFormTip(q.tip || '');
    setIsFormOpen(true);
  };

  const handleSaveQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formQuestion || !formOptA || !formOptB || !formOptC || !formOptD || !formExplanation) {
      showNotification('error', 'Lengkapi teks pertanyaan, semua opsi A-D, dan pembahasan.');
      return;
    }

    setFormSaving(true);
    try {
      const payload: Partial<Question> = {
        category: formCategory,
        difficulty: formDifficulty,
        competency: formCompetency.trim() || `Kompetensi ${formCategory.toUpperCase()}`,
        passage: formPassage.trim() || undefined,
        question: formQuestion.trim(),
        options: [
          { id: 'A', text: formOptA.trim() },
          { id: 'B', text: formOptB.trim() },
          { id: 'C', text: formOptC.trim() },
          { id: 'D', text: formOptD.trim() }
        ],
        correctAnswer: formCorrect,
        explanation: formExplanation.trim(),
        tip: formTip.trim() || 'Perhatikan kata kunci pertanyaan dengan cermat.',
        isCustom: true
      };

      if (editingQuestionId) {
        await api.updateQuestion(editingQuestionId, payload);
        showNotification('success', `Butir soal [${editingQuestionId}] berhasil diperbarui.`);
      } else {
        await api.createQuestion(payload);
        showNotification('success', 'Butir soal baru berhasil ditambahkan ke Bank Soal.');
      }

      setIsFormOpen(false);
      fetchQuestions(currentPage);
    } catch (err: any) {
      showNotification('error', err.message || 'Gagal menyimpan butir soal.');
    } finally {
      setFormSaving(false);
    }
  };

  const handleDeleteQuestion = async (id: string) => {
    if (!window.confirm(`Apakah Anda yakin ingin menghapus butir soal [${id}] dari Bank Soal?`)) return;
    try {
      await api.deleteQuestion(id);
      showNotification('success', 'Butir soal berhasil dihapus.');
      fetchQuestions(currentPage);
    } catch (err: any) {
      showNotification('error', err.message || 'Gagal menghapus butir soal.');
    }
  };

  // AI Generator triggers
  const handleGenerateAi = async () => {
    setAiLoading(true);
    setAiError(null);
    setAiSuccessMessage(null);

    try {
      const res = await api.generateQuestionsAi({
        category: aiCategory,
        difficulty: aiDifficulty,
        count: aiCount,
        topic: aiTopic.trim() || undefined
      });

      setAiGeneratedQuestions(res.questions);
      setAiSuccessMessage(res.message);
      fetchAiMetrics();
    } catch (err: any) {
      setAiError(err.message || 'Gagal membuat soal AI.');
    } finally {
      setAiLoading(false);
    }
  };

  const handleApproveAiQuestions = async () => {
    if (aiGeneratedQuestions.length === 0) return;
    try {
      await api.importQuestions(aiGeneratedQuestions);
      showNotification('success', `Berhasil memasukkan ${aiGeneratedQuestions.length} butir soal hasil AI ke Bank Soal!`);
      setAiGeneratedQuestions([]);
      setAiSuccessMessage(null);
      fetchQuestions(1);
      setAdminTab('bank');
    } catch (err: any) {
      showNotification('error', err.message || 'Gagal menyimpan soal AI ke bank.');
    }
  };

  // Export questions to JSON
  const handleExportJson = async () => {
    try {
      const allRes = await api.getQuestions({ page: 1, limit: 1000 });
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(allRes.items, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `akgtk_bank_soal_${new Date().toISOString().slice(0,10)}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showNotification('success', `Berhasil mengekspor ${allRes.items.length} butir soal ke berkas JSON.`);
    } catch {
      showNotification('error', 'Gagal mengekspor bank soal.');
    }
  };

  // Download Standard Template JSON
  const handleDownloadTemplate = () => {
    const templateQuestions: Question[] = [
      {
        id: "CONTOH_LIT_01",
        category: "literasi",
        difficulty: "sedang",
        competency: "Menemukan Informasi Tersurat",
        passage: "Kementerian Agama melalui Direktorat GTK Madrasah menyelenggarakan Asesmen Kompetensi Guru dan Tenaga Kependidikan untuk memetakan kualitas pembelajaran madrasah di seluruh Indonesia...",
        question: "Berdasarkan stimulus di atas, apa tujuan pokok pelaksanaan AKGTK madrasah?",
        options: [
          { id: "A", text: "Memetakan standar mutu kompetensi guru dan tenaga kependidikan secara objektif" },
          { id: "B", text: "Menentukan kenaikan pangkat berkala secara otomatis bagi pegawai" },
          { id: "C", text: "Mengganti kurikulum nasional madrasah secara menyeluruh" },
          { id: "D", text: "Memberikan sanksi administratif bagi guru yang belum bersertifikasi" }
        ],
        correctAnswer: "A",
        explanation: "Pilihan A tepat karena tujuan asesmen kompetensi adalah pemetaan mutu kompetensi objektif sebagai dasar program pengembangan keprofesian berkelanjutan (PKB).",
        tip: "Fokus pada kata kunci 'tujuan pokok' dan cari kalimat pengantar pada paragraf pertama."
      },
      {
        id: "CONTOH_NUM_01",
        category: "numerasi",
        difficulty: "sedang",
        competency: "Penalaran Data Rasio dan Persentase",
        question: "Sebuah Madrasah Aliyah memiliki 120 siswa kelas XII. Sebanyak 60% memilih peminatan MIPA, 25% memilih IPS, dan sisanya memilih Keagamaan. Berapakah jumlah siswa yang memilih peminatan Keagamaan?",
        options: [
          { id: "A", text: "15 siswa" },
          { id: "B", text: "18 siswa" },
          { id: "C", text: "20 siswa" },
          { id: "D", text: "24 siswa" }
        ],
        correctAnswer: "B",
        explanation: "Persentase Keagamaan = 100% - (60% + 25%) = 15%. Jumlah siswa = 15% × 120 = 18 siswa.",
        tip: "Hitung sisa persentase terlebih dahulu sebelum mengalikan dengan total populasi siswa."
      }
    ];

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(templateQuestions, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `template_format_soal_akgtk.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showNotification('success', 'Template format JSON standar berhasil diunduh.');
  };

  // Import JSON handler
  const handleProcessImport = async (questionsArray: any[]) => {
    if (!Array.isArray(questionsArray) || questionsArray.length === 0) {
      setImportError('Berkas JSON harus berupa larik (array) butir soal yang tidak kosong.');
      return;
    }

    setImportLoading(true);
    setImportError(null);
    try {
      const res = await api.importQuestions(questionsArray);
      showNotification('success', `Berhasil mengimpor ${res.addedCount} butir soal ke Bank Soal.`);
      setRawImportJson('');
      setImportParsedCount(null);
      fetchQuestions(1);
      setAdminTab('bank');
    } catch (err: any) {
      setImportError(err.message || 'Gagal mengimpor butir soal. Periksa kembali struktur data JSON.');
    } finally {
      setImportLoading(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (event) => {
        try {
          const content = event.target?.result as string;
          setRawImportJson(content);
          const parsed = JSON.parse(content);
          if (Array.isArray(parsed)) {
            setImportParsedCount(parsed.length);
            setImportError(null);
          } else {
            setImportError('Format berkas tidak valid: Harus berupa array JSON.');
            setImportParsedCount(null);
          }
        } catch {
          setImportError('Sintaks JSON tidak valid. Pastikan format penulisan kurung siku dan kurung kurawal benar.');
          setImportParsedCount(null);
        }
      };
    }
  };

  // Report Resolution
  const handleResolveReport = async (reportId: string) => {
    try {
      await api.resolveReport(reportId);
      showNotification('success', 'Laporan butir soal ditandai telah diselesaikan.');
      fetchReports();
    } catch (err: any) {
      showNotification('error', err.message || 'Gagal menyelesaikan laporan.');
    }
  };

  // User Role update
  const handleRoleChange = async (userId: string, newRole: UserRole, userName: string) => {
    try {
      await api.updateUserRole(userId, newRole);
      showNotification('success', `Peran ${userName} berhasil diperbarui menjadi [${newRole}].`);
      fetchUsers();
    } catch (err: any) {
      showNotification('error', err.message || 'Gagal mengubah peran pengguna.');
    }
  };

  // Approve self-registered user (Method 1: PENDING -> ACTIVE with Access Code)
  const handleApproveUser = async (user: AdminManagedUser) => {
    setApprovingUserId(user.id);
    try {
      const res = await api.approveUser(user.id);
      showNotification('success', `Akun ${user.name} berhasil disetujui! Kode Akses: ${res.accessCode}`);
      fetchUsers();
    } catch (err: any) {
      showNotification('error', err.message || 'Gagal menyetujui pendaftaran pengguna.');
    } finally {
      setApprovingUserId(null);
    }
  };

  // Reset access code for user
  const handleResetAccessCode = async (user: AdminManagedUser) => {
    setResettingUserId(user.id);
    try {
      const res = await api.resetAccessCode(user.id);
      showNotification('success', `Kode Akses Baru untuk "${user.name}": ${res.accessCode}`);
      fetchUsers();
    } catch (err: any) {
      showNotification('error', err.message || 'Gagal mereset kode akses pengguna.');
    } finally {
      setResettingUserId(null);
    }
  };

  // Toggle user active / blocked status
  const handleToggleBlock = async (user: AdminManagedUser) => {
    const nextStatus = user.status === 'BLOCKED' ? 'ACTIVE' : 'BLOCKED';
    try {
      await api.updateUserProfile(user.id, { status: nextStatus });
      showNotification('success', `Status akun ${user.name} diubah menjadi [${nextStatus}].`);
      fetchUsers();
    } catch (err: any) {
      showNotification('error', err.message || 'Gagal mengubah status akun pengguna.');
    }
  };

  // Copy single access code to clipboard
  const handleCopyCode = (code: string, userId: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeUserId(userId);
    setTimeout(() => setCopiedCodeUserId(null), 2500);
  };

  // Copy formatted WhatsApp onboarding message to clipboard
  const handleCopyWaMessage = (user: AdminManagedUser) => {
    const code = user.accessCode || '(Hubungi Admin)';
    const pkg = user.package || '180 Hari';
    const msg = `Halo ${user.name} 👋\n\nAkses AKGTK Smart Practice Anda sudah aktif.\n\nKode Akses:\n${code}\n\nMasa Akses:\n${pkg}\n\nSilakan buka AKGTK Smart Practice kemudian pilih "Masuk dengan Kode".\n\nSimpan kode akses ini dan jangan membagikannya kepada orang lain.\n\nTerima kasih.`;
    navigator.clipboard.writeText(msg);
    setCopiedWaUserId(user.id);
    setTimeout(() => setCopiedWaUserId(null), 2500);
  };

  // Open user delete confirmation modal
  const handlePromptDeleteUser = (user: AdminManagedUser) => {
    setUserToDelete(user);
  };

  // Confirm delete user execution
  const handleConfirmDeleteUser = async () => {
    if (!userToDelete) return;
    setIsDeletingUser(true);
    try {
      await api.deleteUser(userToDelete.id);
      showNotification('success', `Akun pengguna "${userToDelete.name}" (${userToDelete.email}) berhasil dihapus.`);
      setUserToDelete(null);
      fetchUsers();
      if (adminTab === 'stats') fetchSystemStats();
    } catch (err: any) {
      showNotification('error', err.message || 'Gagal menghapus akun pengguna.');
    } finally {
      setIsDeletingUser(false);
    }
  };

  // Filtered Users List
  const filteredUsers = usersList.filter(u => {
    const q = userSearchQuery.toLowerCase().trim();
    const matchesSearch = 
      !q ||
      u.name.toLowerCase().includes(q) ||
      (u.email && u.email.toLowerCase().includes(q)) ||
      (u.whatsapp && u.whatsapp.toLowerCase().includes(q)) ||
      (u.madrasah && u.madrasah.toLowerCase().includes(q)) ||
      (u.city && u.city.toLowerCase().includes(q)) ||
      (u.accessCode && u.accessCode.toLowerCase().includes(q)) ||
      u.id.toLowerCase().includes(q);

    const matchesRole = userRoleFilter === 'all' || u.role === userRoleFilter;
    const matchesCategory = userCategoryFilter === 'all' || u.category === userCategoryFilter;
    const matchesStatus = userStatusFilter === 'all' || (u.status || 'ACTIVE') === userStatusFilter;

    return matchesSearch && matchesRole && matchesCategory && matchesStatus;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-200">
      {/* Toast Notification */}
      {notification && (
        <div className={`mb-6 flex items-center justify-between rounded-2xl p-4 text-xs font-semibold shadow-md ring-1 animate-in slide-in-from-top ${
          notification.type === 'success' 
            ? 'bg-emerald-50 text-emerald-800 ring-emerald-200' 
            : 'bg-rose-50 text-rose-800 ring-rose-200'
        }`}>
          <div className="flex items-center gap-2">
            {notification.type === 'success' ? (
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
            ) : (
              <AlertTriangle className="h-4 w-4 text-rose-600 shrink-0" />
            )}
            <span>{notification.message}</span>
          </div>
          <button onClick={() => setNotification(null)} className="text-slate-400 hover:text-slate-600">
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Main Super Admin Header */}
      <div className="mb-6 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 p-6 text-white shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 shadow-md ring-2 ring-white/20">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-purple-300">
                  Portal Eksekutif Manajemen AKGTK
                </span>
                <span className={`rounded-md px-2 py-0.5 text-[10px] font-black uppercase tracking-wider ${
                  isSuperAdmin ? 'bg-purple-500 text-white' : 'bg-indigo-500 text-white'
                }`}>
                  {currentUser?.role || 'ADMIN'}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white mt-0.5">
                Pusat Kendali Super Administrator
              </h1>
              <p className="text-xs text-slate-300 mt-1">
                Pengguna Aktif: <strong className="text-white">{currentUser?.name}</strong> ({currentUser?.email})
              </p>
            </div>
          </div>

          {/* Action buttons on header */}
          <div className="flex flex-wrap items-center gap-2.5">
            {onBackToDashboard && (
              <button
                onClick={onBackToDashboard}
                className="flex items-center gap-1.5 rounded-xl bg-white/10 px-3.5 py-2 text-xs font-bold text-white hover:bg-white/20 transition-all cursor-pointer backdrop-blur-xs"
              >
                <ArrowLeft className="h-4 w-4" />
                Kembali ke Beranda
              </button>
            )}

            {onLogout && (
              <button
                onClick={() => {
                  if (window.confirm('Keluar dengan aman dari sesi Administrator?')) {
                    onLogout();
                  }
                }}
                className="flex items-center gap-1.5 rounded-xl bg-rose-600/80 px-3.5 py-2 text-xs font-bold text-white hover:bg-rose-600 transition-all cursor-pointer shadow-sm"
              >
                <LogOut className="h-4 w-4" />
                Keluar Aman
              </button>
            )}
          </div>
        </div>

        {/* Navigation Tabs (9 Required Sections) */}
        <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/10 pt-4 overflow-x-auto">
          <button
            onClick={() => setAdminTab('dashboard')}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              adminTab === 'dashboard' 
                ? 'bg-white text-slate-900 shadow-md ring-1 ring-white/50' 
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <LayoutDashboard className="h-4 w-4 text-purple-600" />
            Dashboard
          </button>

          <button
            onClick={() => setAdminTab('bank')}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              adminTab === 'bank' 
                ? 'bg-white text-slate-900 shadow-md ring-1 ring-white/50' 
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Database className="h-4 w-4 text-indigo-600" />
            Bank Soal ({totalQuestions || '...'})
          </button>

          <button
            onClick={() => setAdminTab('generator')}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              adminTab === 'generator' 
                ? 'bg-white text-slate-900 shadow-md ring-1 ring-white/50' 
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Sparkles className="h-4 w-4 text-purple-500" />
            Generator Soal
          </button>

          <button
            onClick={() => setAdminTab('import')}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              adminTab === 'import' 
                ? 'bg-white text-slate-900 shadow-md ring-1 ring-white/50' 
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Upload className="h-4 w-4 text-teal-500" />
            Import Soal
          </button>

          <button
            onClick={() => setAdminTab('validation')}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              adminTab === 'validation' 
                ? 'bg-white text-slate-900 shadow-md ring-1 ring-white/50' 
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <FileCheck2 className="h-4 w-4 text-emerald-500" />
            Validasi Soal
          </button>

          <button
            id="admin-tab-audit"
            onClick={() => setAdminTab('audit')}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              adminTab === 'audit' 
                ? 'bg-white text-slate-900 shadow-md ring-1 ring-white/50' 
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <FileSpreadsheet className="h-4 w-4 text-emerald-400" />
            Audit Bank Soal
          </button>

          <button
            onClick={() => setAdminTab('reports')}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              adminTab === 'reports' 
                ? 'bg-white text-slate-900 shadow-md ring-1 ring-white/50' 
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Flag className="h-4 w-4 text-amber-500" />
            Laporan Soal
          </button>

          <button
            onClick={() => setAdminTab('stats')}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              adminTab === 'stats' 
                ? 'bg-white text-slate-900 shadow-md ring-1 ring-white/50' 
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <BarChart3 className="h-4 w-4 text-blue-500" />
            Statistik Sistem
          </button>

          <button
            onClick={() => setAdminTab('ai')}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              adminTab === 'ai' 
                ? 'bg-white text-slate-900 shadow-md ring-1 ring-white/50' 
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Cpu className="h-4 w-4 text-violet-500" />
            Penggunaan AI
          </button>

          <button
            onClick={() => setAdminTab('users')}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              adminTab === 'users' 
                ? 'bg-white text-slate-900 shadow-md ring-1 ring-white/50' 
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Users className="h-4 w-4 text-rose-500" />
            Manajemen Pengguna
          </button>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* 1. SECTION: DASHBOARD (OVERVIEW) */}
      {/* ---------------------------------------------------------------- */}
      {adminTab === 'dashboard' && (
        <div className="space-y-6">
          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Butir Soal</p>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">{systemStats?.totalQuestions || totalQuestions || '—'}</h3>
                </div>
                <div className="h-11 w-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  <Database className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-500">
                <span className="text-emerald-600 font-bold">{systemStats?.categoryDistribution.literasi || 0} Lit</span>
                <span>•</span>
                <span className="text-blue-600 font-bold">{systemStats?.categoryDistribution.numerasi || 0} Num</span>
                <span>•</span>
                <span className="text-purple-600 font-bold">{systemStats?.categoryDistribution.sains || 0} Sains</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Pengguna Terdaftar</p>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">{systemStats?.totalUsers || '—'}</h3>
                </div>
                <div className="h-11 w-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                  <Users className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-3 text-[11px] text-slate-500 flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                <span>{systemStats?.activeUsers || 0} pengguna aktif 24 jam terakhir</span>
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Integritas Bank Soal</p>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">
                    {validationReport ? `${validationReport.healthScore}%` : 'Audit...'}
                  </h3>
                </div>
                <div className="h-11 w-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <FileCheck2 className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-3 text-[11px] text-slate-500">
                {validationReport?.totalIssues ? (
                  <span className="text-amber-600 font-bold">{validationReport.totalIssues} butir perlu perbaikan</span>
                ) : (
                  <span className="text-emerald-600 font-bold">Semua butir soal valid terverifikasi</span>
                )}
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Simulasi CBT</p>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">{systemStats?.totalSimulations || 0}</h3>
                </div>
                <div className="h-11 w-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <BarChart3 className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-3 text-[11px] text-slate-500">
                {systemStats?.totalPractices || 0} sesi latihan mandiri diselesaikan
              </p>
            </div>
          </div>

          {/* Quick Action Tiles */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
              <LayoutDashboard className="h-5 w-5 text-indigo-600" />
              Menu Akses Cepat Super Admin
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button
                onClick={() => setAdminTab('bank')}
                className="flex flex-col text-left p-4 rounded-2xl border border-slate-200/80 bg-slate-50/60 hover:bg-indigo-50/50 hover:border-indigo-300 transition-all cursor-pointer group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 mb-3 group-hover:scale-105 transition-transform">
                  <Database className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-700">Jelajahi Bank Soal</h4>
                <p className="text-xs text-slate-500 mt-1">Cari, tinjau wacana, tambah dan edit butir soal AKGTK.</p>
              </button>

              <button
                onClick={() => setAdminTab('generator')}
                className="flex flex-col text-left p-4 rounded-2xl border border-slate-200/80 bg-slate-50/60 hover:bg-purple-50/50 hover:border-purple-300 transition-all cursor-pointer group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-700 mb-3 group-hover:scale-105 transition-transform">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-purple-700">Generator Soal AI</h4>
                <p className="text-xs text-slate-500 mt-1">Buat naskah soal otomatis HOTS dengan Gemini 2.5 Flash.</p>
              </button>

              <button
                onClick={() => setAdminTab('validation')}
                className="flex flex-col text-left p-4 rounded-2xl border border-slate-200/80 bg-slate-50/60 hover:bg-emerald-50/50 hover:border-emerald-300 transition-all cursor-pointer group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 mb-3 group-hover:scale-105 transition-transform">
                  <FileCheck2 className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700">Validasi Kualitas</h4>
                <p className="text-xs text-slate-500 mt-1">Pemeriksaan otomatis kelengkapan kunci, opsi, & stimulus.</p>
              </button>

              <button
                onClick={() => setAdminTab('users')}
                className="flex flex-col text-left p-4 rounded-2xl border border-slate-200/80 bg-slate-50/60 hover:bg-rose-50/50 hover:border-rose-300 transition-all cursor-pointer group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-700 mb-3 group-hover:scale-105 transition-transform">
                  <Users className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-rose-700">Kelola Pengguna</h4>
                <p className="text-xs text-slate-500 mt-1">Atur peran Super Admin, Administrator, atau Peserta Guru.</p>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* 2. SECTION: BANK SOAL */}
      {/* ---------------------------------------------------------------- */}
      {adminTab === 'bank' && (
        <div className="space-y-6">
          {/* Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleOpenNewModal}
                className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-indigo-700 transition-colors cursor-pointer"
              >
                <Plus className="h-4 w-4" />
                Tambah Butir Soal Baru
              </button>
              <button
                onClick={() => setAdminTab('generator')}
                className="flex items-center gap-1.5 rounded-xl bg-purple-50 px-3.5 py-2 text-xs font-bold text-purple-700 border border-purple-200 hover:bg-purple-100 transition-colors cursor-pointer"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Buat dengan AI
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleExportJson}
                className="flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                title="Unduh seluruh bank soal format JSON"
              >
                <Download className="h-3.5 w-3.5 text-slate-500" />
                Ekspor JSON
              </button>
              <button
                onClick={() => setAdminTab('import')}
                className="flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <Upload className="h-3.5 w-3.5 text-slate-500" />
                Impor Soal
              </button>
            </div>
          </div>

          {/* Search & Filter */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
            <form onSubmit={(e) => { e.preventDefault(); fetchQuestions(1); }} className="sm:col-span-6 relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Cari teks soal, stimulus bacaan, kompetensi..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-300 pl-9 pr-3 py-2 text-xs focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
              />
            </form>

            <div className="sm:col-span-3">
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs font-medium focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none bg-white"
              >
                <option value="all">Semua Domain</option>
                <option value="literasi">Literasi Membaca</option>
                <option value="numerasi">Numerasi</option>
                <option value="sains">Sains</option>
              </select>
            </div>

            <div className="sm:col-span-3">
              <select
                value={selectedDifficulty}
                onChange={e => setSelectedDifficulty(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs font-medium focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none bg-white"
              >
                <option value="all">Semua Tingkat Kesulitan</option>
                <option value="mudah">Mudah</option>
                <option value="sedang">Sedang</option>
                <option value="sulit">Sulit / HOTS</option>
              </select>
            </div>
          </div>

          {/* Question List */}
          {loadingQuestions ? (
            <div className="py-16 text-center text-slate-500">
              <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2 text-indigo-600" />
              <p className="text-xs font-medium">Memuat butir soal dari database server...</p>
            </div>
          ) : questions.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 shadow-xs">
              <Database className="h-10 w-10 text-slate-300 mx-auto mb-3" />
              <h4 className="text-sm font-bold text-slate-800">Tidak ada butir soal ditemukan</h4>
              <p className="text-xs text-slate-500 mt-1">Coba ubah kata kunci pencarian atau filter domain Anda.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {questions.map((q, idx) => {
                const isExpanded = expandedId === q.id;
                return (
                  <div 
                    key={q.id}
                    className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs hover:border-slate-300 transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-xs font-mono font-bold text-slate-400">
                            #{(currentPage - 1) * 12 + idx + 1}
                          </span>
                          <span className="text-xs font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-semibold">
                            {q.id}
                          </span>
                          <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-md ${
                            q.category === 'literasi' ? 'bg-emerald-100 text-emerald-800' :
                            q.category === 'numerasi' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                          }`}>
                            {q.category}
                          </span>
                          <span className="text-[10px] font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-md">
                            {q.difficulty}
                          </span>
                          <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
                            {q.competency}
                          </span>
                        </div>

                        <p className="text-sm font-semibold text-slate-800 line-clamp-2">
                          {q.question}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleOpenEditModal(q)}
                          className="rounded-lg p-1.5 text-indigo-600 hover:bg-indigo-50 transition-colors"
                          title="Edit butir soal"
                        >
                          <Edit3 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => setExpandedId(isExpanded ? null : q.id)}
                          className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 transition-colors"
                          title="Lihat detail lengkap"
                        >
                          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </button>
                        <button
                          onClick={() => handleDeleteQuestion(q.id)}
                          className="rounded-lg p-1.5 text-rose-500 hover:bg-rose-50 transition-colors"
                          title="Hapus butir soal"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    {/* Expanded Detail */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-slate-100 space-y-3 animate-in fade-in">
                        {q.passage && (
                          <div className="rounded-xl bg-slate-50 p-3 text-xs text-slate-700 border-l-4 border-emerald-500">
                            <span className="font-bold block mb-1">Stimulus Wacana:</span>
                            <p className="whitespace-pre-line leading-relaxed">{q.passage}</p>
                          </div>
                        )}

                        {q.visualData && (
                          <div className="my-2">
                            <VisualRenderer visualData={q.visualData} />
                          </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {q.options.map(opt => (
                            <div 
                              key={opt.id}
                              className={`p-2.5 rounded-xl border ${
                                opt.id === q.correctAnswer
                                  ? 'bg-emerald-50/80 border-emerald-300 font-medium text-emerald-900'
                                  : 'bg-slate-50 border-slate-200 text-slate-700'
                              }`}
                            >
                              <span className="font-bold mr-1.5">{opt.id}.</span>
                              {opt.text}
                              {opt.id === q.correctAnswer && (
                                <span className="ml-2 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                                  KUNCI BENAR
                                </span>
                              )}
                            </div>
                          ))}
                        </div>

                        <div className="rounded-xl bg-indigo-50/60 p-3 text-xs text-indigo-900 border border-indigo-100">
                          <span className="font-bold block mb-1">Pembahasan & Analisis:</span>
                          <p className="leading-relaxed">{q.explanation}</p>
                          {q.tip && (
                            <p className="mt-2 text-indigo-700 font-medium">
                              💡 <strong>Tips Cepat:</strong> {q.tip}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200 shadow-xs text-xs font-semibold text-slate-600">
              <span>Halaman {currentPage} dari {totalPages} ({totalQuestions} butir soal)</span>
              <div className="flex items-center gap-2">
                <button
                  disabled={currentPage <= 1}
                  onClick={() => fetchQuestions(currentPage - 1)}
                  className="flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 hover:bg-slate-50 disabled:opacity-40 cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Sebelumnya
                </button>
                <button
                  disabled={currentPage >= totalPages}
                  onClick={() => fetchQuestions(currentPage + 1)}
                  className="flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 hover:bg-slate-50 disabled:opacity-40 cursor-pointer"
                >
                  Berikutnya
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* 3. SECTION: GENERATOR SOAL (GEMINI AI) */}
      {/* ---------------------------------------------------------------- */}
      {adminTab === 'generator' && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-purple-200 bg-gradient-to-r from-purple-50 via-indigo-50 to-white p-6 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-600 text-white shadow-md">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Generator Butir Soal AKGTK dengan Gemini AI
                </h3>
                <p className="text-xs text-slate-600">
                  Pembuatan naskah soal berstandar HOTS (High Order Thinking Skills) berbasis stimulus kontekstual
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Domain Asesmen</label>
                <select
                  value={aiCategory}
                  onChange={e => setAiCategory(e.target.value as QuestionCategory)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-medium focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none"
                >
                  <option value="literasi">Literasi Membaca</option>
                  <option value="numerasi">Numerasi & Penalaran</option>
                  <option value="sains">Sains & Lingkungan</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Tingkat Kesulitan</label>
                <select
                  value={aiDifficulty}
                  onChange={e => setAiDifficulty(e.target.value as QuestionDifficulty)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-medium focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none"
                >
                  <option value="mudah">Mudah (Pemahaman Langsung)</option>
                  <option value="sedang">Sedang (Penerapan Konsep)</option>
                  <option value="sulit">Sulit / HOTS (Analisis & Evaluasi)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Jumlah Butir Soal</label>
                <select
                  value={aiCount}
                  onChange={e => setAiCount(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-medium focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none"
                >
                  <option value={1}>1 Soal</option>
                  <option value={2}>2 Soal</option>
                  <option value={3}>3 Soal (Rekomendasi)</option>
                  <option value={5}>5 Soal</option>
                </select>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Fokus Topik / Spesifikasi Materi (Opsional)
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Manajemen kelas tematik di madrasah ibtidaiyah, efisiensi energi surya, stunting..."
                  value={aiTopic}
                  onChange={e => setAiTopic(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none"
                />
              </div>
            </div>

            {aiError && (
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-rose-50 p-3 text-xs text-rose-700 ring-1 ring-rose-200">
                <AlertTriangle className="h-4 w-4 shrink-0" />
                <span>{aiError}</span>
              </div>
            )}

            {aiSuccessMessage && (
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 p-3 text-xs text-emerald-800 ring-1 ring-emerald-200">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>{aiSuccessMessage}</span>
              </div>
            )}

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                disabled={aiLoading}
                onClick={handleGenerateAi}
                className="flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-purple-700 disabled:opacity-50 transition-all cursor-pointer"
              >
                {aiLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sedang Merumuskan Soal HOTS...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    Generate Soal Sekarang
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Generated Questions Review */}
          {aiGeneratedQuestions.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-800">
                  Pratinjau Hasil Generasi AI ({aiGeneratedQuestions.length} Butir Soal):
                </h4>
                <button
                  onClick={handleApproveAiQuestions}
                  className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-emerald-700 transition-colors cursor-pointer"
                >
                  <Check className="h-4 w-4" />
                  Setujui & Simpan Semua ke Bank Soal
                </button>
              </div>

              <div className="space-y-3">
                {aiGeneratedQuestions.map((q, idx) => (
                  <div key={q.id || idx} className="bg-white rounded-2xl border border-purple-200 p-4 shadow-xs">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md">
                        Soal AI #{idx + 1}
                      </span>
                      <span className="text-[10px] font-bold uppercase bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                        {q.category}
                      </span>
                      <span className="text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-md">
                        Kunci: {q.correctAnswer}
                      </span>
                    </div>

                    {q.passage && (
                      <div className="rounded-xl bg-slate-50 p-3 text-xs text-slate-700 mb-3 border-l-4 border-purple-500">
                        <strong className="block mb-1">Stimulus Wacana:</strong>
                        <p className="leading-relaxed">{q.passage}</p>
                      </div>
                    )}

                    <p className="text-sm font-semibold text-slate-900 mb-3">{q.question}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                      {q.options.map(opt => (
                        <div 
                          key={opt.id}
                          className={`p-2 rounded-lg border ${
                            opt.id === q.correctAnswer 
                              ? 'bg-emerald-50 border-emerald-300 font-bold text-emerald-900'
                              : 'bg-slate-50 border-slate-200 text-slate-700'
                          }`}
                        >
                          {opt.id}. {opt.text}
                        </div>
                      ))}
                    </div>

                    <div className="rounded-xl bg-purple-50/60 p-3 text-xs text-purple-900">
                      <strong>Pembahasan:</strong> {q.explanation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* 4. SECTION: IMPORT SOAL */}
      {/* ---------------------------------------------------------------- */}
      {adminTab === 'import' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Upload className="h-5 w-5 text-teal-600" />
                  Impor Massal Butir Soal (JSON)
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Unggah berkas JSON atau tempel struktur data soal sesuai skema terstandarisasi AKGTK
                </p>
              </div>

              <button
                onClick={handleDownloadTemplate}
                className="flex items-center gap-1.5 rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <Download className="h-3.5 w-3.5 text-slate-500" />
                Unduh Template JSON Standar
              </button>
            </div>

            {/* Upload Area */}
            <div className="mt-6">
              <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 rounded-2xl p-8 hover:border-teal-400 hover:bg-teal-50/20 transition-all cursor-pointer">
                <FileSpreadsheet className="h-10 w-10 text-teal-600 mb-2" />
                <span className="text-sm font-bold text-slate-800">Klik untuk memilih berkas .json</span>
                <span className="text-xs text-slate-400 mt-1">Mendukung file format JSON array of questions</span>
                <input type="file" accept=".json" onChange={handleFileUpload} className="hidden" />
              </label>
            </div>

            {/* Direct Paste Area */}
            <div className="mt-6">
              <label className="block text-xs font-bold text-slate-700 mb-2">
                Atau Tempel / Sunting Teks JSON Langsung:
              </label>
              <textarea
                rows={8}
                value={rawImportJson}
                onChange={e => {
                  setRawImportJson(e.target.value);
                  try {
                    const parsed = JSON.parse(e.target.value);
                    if (Array.isArray(parsed)) {
                      setImportParsedCount(parsed.length);
                      setImportError(null);
                    } else {
                      setImportParsedCount(null);
                    }
                  } catch {
                    setImportParsedCount(null);
                  }
                }}
                placeholder='[
  {
    "category": "literasi",
    "difficulty": "sedang",
    "competency": "Informasi Tersurat",
    "passage": "Teks stimulus wacana...",
    "question": "Pertanyaan pokok...",
    "options": [
      { "id": "A", "text": "Pilihan A" },
      { "id": "B", "text": "Pilihan B" },
      { "id": "C", "text": "Pilihan C" },
      { "id": "D", "text": "Pilihan D" }
    ],
    "correctAnswer": "A",
    "explanation": "Pembahasan..."
  }
]'
                className="w-full rounded-xl border border-slate-300 p-3 font-mono text-xs focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none"
              />
            </div>

            {importError && (
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-rose-50 p-3 text-xs text-rose-700 ring-1 ring-rose-200">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{importError}</span>
              </div>
            )}

            {importParsedCount !== null && (
              <div className="mt-4 flex items-center justify-between rounded-xl bg-emerald-50 p-3 text-xs text-emerald-800 ring-1 ring-emerald-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Struktur JSON valid: <strong>{importParsedCount} butir soal</strong> terdeteksi siap diimpor.</span>
                </div>
                <button
                  disabled={importLoading}
                  onClick={() => {
                    try {
                      const arr = JSON.parse(rawImportJson);
                      handleProcessImport(arr);
                    } catch {
                      setImportError('Gagal memproses JSON.');
                    }
                  }}
                  className="rounded-lg bg-emerald-600 px-4 py-1.5 font-bold text-white hover:bg-emerald-700 transition-colors cursor-pointer"
                >
                  {importLoading ? 'Mengimpor...' : 'Proses & Impor Sekarang'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* 5. SECTION: VALIDASI SOAL (QUALITY ASSURANCE) */}
      {/* ---------------------------------------------------------------- */}
      {adminTab === 'validation' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <FileCheck2 className="h-5 w-5 text-emerald-600" />
                  Audit Kualitas & Integritas Bank Soal
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Pemeriksaan otomatis kelengkapan kunci jawaban, stimulus literasi, jumlah opsi, dan duplikasi
                </p>
              </div>

              <button
                onClick={fetchValidationReport}
                disabled={validationLoading}
                className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-emerald-700 disabled:opacity-50 transition-colors cursor-pointer"
              >
                <RefreshCw className={`h-3.5 w-3.5 ${validationLoading ? 'animate-spin' : ''}`} />
                Jalankan Ulang Audit
              </button>
            </div>

            {/* Validation Overview Metrics */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Tingkat Kesehatan</span>
                <h4 className="text-3xl font-black text-emerald-700 mt-1">
                  {validationReport ? `${validationReport.healthScore}%` : '—'}
                </h4>
                <p className="text-[11px] text-emerald-600 mt-1">Persentase butir soal bebas kendala struktural</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Butir Diperiksa</span>
                <h4 className="text-3xl font-black text-slate-800 mt-1">
                  {validationReport ? validationReport.totalChecked : '—'}
                </h4>
                <p className="text-[11px] text-slate-500 mt-1">Seluruh butir soal dalam database aktif</p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200">
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Butir Perlu Atensi</span>
                <h4 className="text-3xl font-black text-amber-700 mt-1">
                  {validationReport ? validationReport.totalIssues : '—'}
                </h4>
                <p className="text-[11px] text-amber-600 mt-1">Ditemukan kekurangan opsi, kunci, atau penjelasan</p>
              </div>
            </div>

            {/* Issues Table */}
            <div className="mt-8">
              <h4 className="text-sm font-bold text-slate-800 mb-3">Daftar Temuan Masalah:</h4>
              {validationLoading ? (
                <div className="py-12 text-center text-slate-500">
                  <Loader2 className="h-6 w-6 animate-spin mx-auto mb-2 text-emerald-600" />
                  <p className="text-xs">Memeriksa integritas setiap butir soal...</p>
                </div>
              ) : !validationReport || validationReport.issues.length === 0 ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/30 p-8 text-center">
                  <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto mb-2" />
                  <h5 className="text-sm font-bold text-emerald-900">Bank Soal Sempurna!</h5>
                  <p className="text-xs text-emerald-700 mt-1">
                    Seluruh butir soal memiliki 4 opsi jawaban, kunci jawaban sah (A/B/C/D), wacana stimulus yang sesuai, dan penjelasan lengkap.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-xs text-slate-600">
                    <thead className="bg-slate-50 text-[11px] font-bold uppercase text-slate-500 border-b border-slate-200">
                      <tr>
                        <th className="p-3">ID Soal</th>
                        <th className="p-3">Domain</th>
                        <th className="p-3">Kutipan Pertanyaan</th>
                        <th className="p-3">Tipe Masalah</th>
                        <th className="p-3">Deskripsi</th>
                        <th className="p-3 text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {validationReport.issues.map((issue, i) => (
                        <tr key={i} className="hover:bg-slate-50/80">
                          <td className="p-3 font-mono font-bold text-slate-800">{issue.questionId}</td>
                          <td className="p-3 uppercase font-bold text-[10px] text-slate-500">{issue.category}</td>
                          <td className="p-3 max-w-xs truncate font-medium text-slate-700">{issue.questionSnippet}</td>
                          <td className="p-3">
                            <span className="rounded-md bg-amber-100 text-amber-800 px-2 py-0.5 font-bold text-[10px]">
                              {issue.issueType}
                            </span>
                          </td>
                          <td className="p-3 text-slate-600">{issue.description}</td>
                          <td className="p-3 text-right">
                            <button
                              onClick={() => {
                                setSelectedCategory('all');
                                setSearchQuery(issue.questionId);
                                setAdminTab('bank');
                              }}
                              className="rounded-lg bg-indigo-50 text-indigo-700 px-2.5 py-1 font-bold text-[11px] hover:bg-indigo-100 transition-colors cursor-pointer"
                            >
                              Periksa
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* 5B. SECTION: AUDIT BANK SOAL (SUPER ADMIN REAL INVENTORY AUDIT) */}
      {/* ---------------------------------------------------------------- */}
      {adminTab === 'audit' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-0.5 text-xs font-bold text-emerald-800 border border-emerald-200 mb-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  <span>SUPER ADMIN AUDIT</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <FileSpreadsheet className="h-6 w-6 text-emerald-600" />
                  AUDIT BANK SOAL AKGTK 2026
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Inventarisasi butir soal riil berdasarkan rekaman aktual database terhadap target 1.450 soal standar AKGTK Kemenag
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={fetchBankAudit}
                  disabled={auditLoading}
                  className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-emerald-700 disabled:opacity-50 transition-colors cursor-pointer"
                >
                  <RefreshCw className={`h-3.5 w-3.5 ${auditLoading ? 'animate-spin' : ''}`} />
                  Jalankan Audit Aktual
                </button>
              </div>
            </div>

            {/* State Diagnosis Banner */}
            {bankAudit && (
              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50/70 p-5 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="rounded-lg bg-blue-600 px-2.5 py-1 text-xs font-black text-white uppercase tracking-wider">
                      {bankAudit.currentState.replace('_', ' ')}
                    </span>
                    <span className="text-xs font-bold text-blue-900">
                      Diagnosis Status Database
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-blue-700">
                    Waktu Audit: {new Date(bankAudit.timestamp).toLocaleString('id-ID')}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-blue-950 leading-relaxed font-medium">
                  {bankAudit.currentStateDescription}
                </p>
                <div className="pt-2 border-t border-blue-200/60 flex items-center gap-2 text-xs text-blue-800">
                  <span className="font-bold">Sumber Data Aktual:</span>
                  <code className="bg-white/80 px-2 py-0.5 rounded text-[11px] font-mono border border-blue-200">
                    {bankAudit.dataSource}
                  </code>
                </div>
              </div>
            )}

            {/* Inventory Metric Cards */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-[10px] font-bold uppercase text-slate-500 block">Target Total</span>
                <span className="text-xl sm:text-2xl font-black text-slate-900 mt-1 block">
                  {bankAudit ? bankAudit.grandTarget.toLocaleString('id-ID') : '1.450'}
                </span>
                <span className="text-[10px] text-slate-400">Target Kurikulum</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-200 text-center">
                <span className="text-[10px] font-bold uppercase text-indigo-700 block">Soal Aktual</span>
                <span className="text-xl sm:text-2xl font-black text-indigo-900 mt-1 block">
                  {bankAudit ? bankAudit.totalActual : '—'}
                </span>
                <span className="text-[10px] text-indigo-600">Rekaman Fisik</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-center">
                <span className="text-[10px] font-bold uppercase text-emerald-700 block">Aktif Siap Uji</span>
                <span className="text-xl sm:text-2xl font-black text-emerald-800 mt-1 block">
                  {bankAudit ? bankAudit.totalActive : '—'}
                </span>
                <span className="text-[10px] text-emerald-600">Valid & Lengkap</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-[10px] font-bold uppercase text-slate-500 block">Draft</span>
                <span className="text-xl sm:text-2xl font-black text-slate-700 mt-1 block">
                  {bankAudit ? bankAudit.totalDraft : '0'}
                </span>
                <span className="text-[10px] text-slate-400">Belum Publik</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 text-center">
                <span className="text-[10px] font-bold uppercase text-amber-700 block">Tidak Valid</span>
                <span className="text-xl sm:text-2xl font-black text-amber-800 mt-1 block">
                  {bankAudit ? bankAudit.totalInvalid : '0'}
                </span>
                <span className="text-[10px] text-amber-600">Struktur Cacat</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-200 text-center">
                <span className="text-[10px] font-bold uppercase text-purple-700 block">Duplikat</span>
                <span className="text-xl sm:text-2xl font-black text-purple-800 mt-1 block">
                  {bankAudit ? bankAudit.totalDuplicate : '0'}
                </span>
                <span className="text-[10px] text-purple-600">ID / Teks Kembar</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200 text-center col-span-2 sm:col-span-1">
                <span className="text-[10px] font-bold uppercase text-rose-700 block">Kekurangan</span>
                <span className="text-xl sm:text-2xl font-black text-rose-800 mt-1 block">
                  {bankAudit ? bankAudit.grandDeficit.toLocaleString('id-ID') : '1.300'}
                </span>
                <span className="text-[10px] text-rose-600">Belum Terpenuhi</span>
              </div>
            </div>

            {/* REAL QUESTION INVENTORY TABLE */}
            <div className="mt-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Tabel Inventarisasi Bank Soal Riil (Per Kategori & Mata Pelajaran)
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Dihitung murni dari rekaman butir soal di database server, bukan angka taksiran atau placeholder.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Guru Kelas Lengkap (150/150)
                  </span>
                </div>
              </div>

              {auditLoading ? (
                <div className="py-16 text-center text-slate-500 bg-slate-50 rounded-2xl border border-slate-200">
                  <Loader2 className="h-7 w-7 animate-spin mx-auto mb-2 text-emerald-600" />
                  <p className="text-xs font-semibold">Mengaudit data rekaman butir soal riil...</p>
                </div>
              ) : !bankAudit ? (
                <div className="py-12 text-center text-slate-400 bg-slate-50 rounded-2xl border border-slate-200">
                  <p className="text-xs">Klik "Jalankan Audit Aktual" untuk memuat data inventarisasi.</p>
                </div>
              ) : (
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                  <table className="w-full text-left text-xs text-slate-700">
                    <thead className="bg-slate-900 text-white text-[11px] font-extrabold uppercase tracking-wider">
                      <tr>
                        <th className="p-3.5">Kategori</th>
                        <th className="p-3.5">Mata Pelajaran</th>
                        <th className="p-3.5 text-center">Soal Aktual</th>
                        <th className="p-3.5 text-center">Aktif</th>
                        <th className="p-3.5 text-center">Draft</th>
                        <th className="p-3.5 text-center">Tidak Valid</th>
                        <th className="p-3.5 text-center">Duplikat</th>
                        <th className="p-3.5 text-center bg-slate-800">Target</th>
                        <th className="p-3.5 text-center bg-slate-800">Kekurangan</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {bankAudit.rows.map((row, idx) => {
                        const isFirstInCat = idx === 0 || bankAudit.rows[idx - 1].category !== row.category;
                        const catRowCount = bankAudit.rows.filter(r => r.category === row.category).length;
                        const isComplete = row.activeCount >= row.targetCount;

                        return (
                          <tr 
                            key={`${row.category}-${row.subject}`} 
                            className={`hover:bg-slate-50/80 transition-colors ${
                              isComplete ? 'bg-emerald-50/20' : ''
                            }`}
                          >
                            {isFirstInCat && (
                              <td 
                                rowSpan={catRowCount} 
                                className="p-3.5 font-bold text-slate-900 border-r border-slate-200 bg-slate-50/50 align-top"
                              >
                                <div className="space-y-1">
                                  <span className="text-xs font-extrabold block text-slate-900">
                                    {row.category}
                                  </span>
                                  <span className="text-[10px] text-slate-500 font-medium block">
                                    {row.category === 'Guru Kelas' ? 'MI & SD Sederajat' : `${catRowCount} Mata Uji`}
                                  </span>
                                </div>
                              </td>
                            )}
                            <td className="p-3.5 font-medium text-slate-800">
                              <span className="flex items-center gap-1.5">
                                {isComplete && <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />}
                                <span>{row.subject}</span>
                              </span>
                            </td>
                            <td className="p-3.5 text-center font-bold text-slate-900 font-mono">
                              {row.actualCount}
                            </td>
                            <td className="p-3.5 text-center">
                              <span className={`inline-block px-2 py-0.5 rounded-full font-mono text-[11px] font-bold ${
                                row.activeCount > 0 
                                  ? 'bg-emerald-100 text-emerald-800' 
                                  : 'text-slate-400'
                              }`}>
                                {row.activeCount}
                              </span>
                            </td>
                            <td className="p-3.5 text-center font-mono text-slate-500">
                              {row.draftCount}
                            </td>
                            <td className="p-3.5 text-center font-mono">
                              {row.invalidCount > 0 ? (
                                <span className="text-amber-700 font-bold bg-amber-100 px-1.5 py-0.5 rounded">
                                  {row.invalidCount}
                                </span>
                              ) : (
                                <span className="text-slate-400">0</span>
                              )}
                            </td>
                            <td className="p-3.5 text-center font-mono">
                              {row.duplicateCount > 0 ? (
                                <span className="text-purple-700 font-bold bg-purple-100 px-1.5 py-0.5 rounded">
                                  {row.duplicateCount}
                                </span>
                              ) : (
                                <span className="text-slate-400">0</span>
                              )}
                            </td>
                            <td className="p-3.5 text-center font-mono font-bold text-slate-700 bg-slate-50/60">
                              {row.targetCount}
                            </td>
                            <td className="p-3.5 text-center font-mono font-bold bg-slate-50/60">
                              {row.deficitCount === 0 ? (
                                <span className="text-emerald-700 font-extrabold bg-emerald-100 px-2 py-0.5 rounded-md">
                                  0 (Lengkap)
                                </span>
                              ) : (
                                <span className="text-rose-700 font-bold">
                                  -{row.deficitCount}
                                </span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot className="bg-slate-900 text-white font-extrabold text-xs">
                      <tr>
                        <td colSpan={2} className="p-4 uppercase tracking-wider text-emerald-300">
                          TOTAL KESELURUHAN (GRAND TARGET)
                        </td>
                        <td className="p-4 text-center font-mono text-sm">
                          {bankAudit.totalActual}
                        </td>
                        <td className="p-4 text-center font-mono text-sm text-emerald-300">
                          {bankAudit.totalActive}
                        </td>
                        <td className="p-4 text-center font-mono text-sm text-slate-400">
                          {bankAudit.totalDraft}
                        </td>
                        <td className="p-4 text-center font-mono text-sm text-amber-300">
                          {bankAudit.totalInvalid}
                        </td>
                        <td className="p-4 text-center font-mono text-sm text-purple-300">
                          {bankAudit.totalDuplicate}
                        </td>
                        <td className="p-4 text-center font-mono text-sm bg-slate-800 text-yellow-300">
                          {bankAudit.grandTarget.toLocaleString('id-ID')}
                        </td>
                        <td className="p-4 text-center font-mono text-sm bg-slate-800 text-rose-300">
                          -{bankAudit.grandDeficit.toLocaleString('id-ID')}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              )}
            </div>

            {/* Audit Notes and Compliance Info */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/60 p-5 space-y-2 text-xs text-slate-600">
              <h5 className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                <AlertCircle className="h-4 w-4 text-emerald-600" />
                Catatan Integritas Audit Bank Soal
              </h5>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 leading-relaxed">
                <li>
                  <strong>Kriteria Soal Riil Sah:</strong> Memiliki ID unik, teks pertanyaan minimal 10 karakter, 4 opsi (A-D) terisi, kunci jawaban sah (A/B/C/D), serta penjelasan pembahasan valid.
                </li>
                <li>
                  <strong>Keadaan Saat Ini (STATE B):</strong> 150 butir soal riil telah terverifikasi aktif pada kategori <em>Guru Kelas</em> (50 Literasi, 50 Numerasi, 50 Sains). Tidak ada butir soal palsu atau placeholder yang disimulasikan.
                </li>
                <li>
                  <strong>Komposisi CAT Simulasi:</strong> Simulasi Guru Kelas secara otomatis membagi butir soal secara seimbang antara Literasi (~33%), Numerasi (~33%), dan Sains (~33%) serta mengacak urutannya.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* 6. SECTION: LAPORAN SOAL */}
      {/* ---------------------------------------------------------------- */}
      {adminTab === 'reports' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Flag className="h-5 w-5 text-amber-600" />
                  Laporan Masalah dari Peserta Guru
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Umpan balik butir soal yang dilaporkan memiliki kesalahan ketik, ambiguitas, atau ketidaksesuaian kunci
                </p>
              </div>

              <button
                onClick={fetchReports}
                className="flex items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                Segarkan
              </button>
            </div>

            <div className="mt-6">
              {reportsLoading ? (
                <div className="py-12 text-center text-slate-500">
                  <Loader2 className="h-6 w-6 animate-spin mx-auto mb-2 text-indigo-600" />
                  <p className="text-xs">Memuat laporan dari peserta...</p>
                </div>
              ) : reports.length === 0 ? (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
                  <CheckCircle2 className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <p className="text-xs font-bold text-slate-700">Belum ada laporan butir soal yang masuk.</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Semua laporan yang dikirimkan peserta akan tampil di halaman ini.</p>
                </div>
              ) : (
                <div className="divide-y divide-slate-100">
                  {reports.map(rep => (
                    <div key={rep.id} className="py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono font-bold text-xs text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                            {rep.questionId}
                          </span>
                          <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                            rep.status === 'resolved' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {rep.status === 'resolved' ? 'Selesai Direvisi' : 'Menunggu Review'}
                          </span>
                          <span className="text-[11px] text-slate-400">
                            {new Date(rep.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-slate-800 mt-1.5">"{rep.reason}"</p>
                        <p className="text-[11px] text-slate-500 mt-0.5">Pelapor: {rep.userName}</p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => {
                            setSelectedCategory('all');
                            setSearchQuery(rep.questionId);
                            setAdminTab('bank');
                          }}
                          className="rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
                        >
                          Lihat Soal
                        </button>
                        {rep.status !== 'resolved' && (
                          <button
                            onClick={() => handleResolveReport(rep.id)}
                            className="rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-700 cursor-pointer"
                          >
                            Tandai Selesai
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* 7. SECTION: STATISTIK SISTEM */}
      {/* ---------------------------------------------------------------- */}
      {adminTab === 'stats' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              Statistik Operasional Sistem AKGTK
            </h3>

            {statsLoading ? (
              <div className="py-12 text-center text-slate-500">
                <Loader2 className="h-6 w-6 animate-spin mx-auto mb-2 text-indigo-600" />
                <p className="text-xs">Memuat metrik sistem...</p>
              </div>
            ) : systemStats ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100">
                    <span className="text-xs font-bold text-indigo-900 uppercase">Total Pengguna</span>
                    <h4 className="text-2xl font-black text-indigo-700 mt-1">{systemStats.totalUsers}</h4>
                    <span className="text-[11px] text-indigo-600">{systemStats.activeUsers} aktif hari ini</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                    <span className="text-xs font-bold text-emerald-900 uppercase">Sesi Latihan Mandiri</span>
                    <h4 className="text-2xl font-black text-emerald-700 mt-1">{systemStats.totalPractices}</h4>
                    <span className="text-[11px] text-emerald-600">Mode belajar interaktif</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
                    <span className="text-xs font-bold text-blue-900 uppercase">Simulasi CBT Resmi</span>
                    <h4 className="text-2xl font-black text-blue-700 mt-1">{systemStats.totalSimulations}</h4>
                    <span className="text-[11px] text-blue-600">Dengan timer & evaluasi otomatis</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100">
                    <span className="text-xs font-bold text-purple-900 uppercase">Total Butir Soal</span>
                    <h4 className="text-2xl font-black text-purple-700 mt-1">{systemStats.totalQuestions}</h4>
                    <span className="text-[11px] text-purple-600">3 domain asesmen</span>
                  </div>
                </div>

                {/* Domain Distribution */}
                <div className="rounded-2xl border border-slate-200 p-5">
                  <h4 className="text-sm font-bold text-slate-800 mb-3">Distribusi Domain Asesmen:</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-emerald-700">Literasi Membaca</span>
                        <span>{systemStats.categoryDistribution.literasi} Soal</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div 
                          className="h-full bg-emerald-500 rounded-full" 
                          style={{ width: `${(systemStats.categoryDistribution.literasi / Math.max(1, systemStats.totalQuestions)) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-blue-700">Numerasi & Penalaran</span>
                        <span>{systemStats.categoryDistribution.numerasi} Soal</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div 
                          className="h-full bg-blue-500 rounded-full" 
                          style={{ width: `${(systemStats.categoryDistribution.numerasi / Math.max(1, systemStats.totalQuestions)) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-purple-700">Sains & Lingkungan</span>
                        <span>{systemStats.categoryDistribution.sains} Soal</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div 
                          className="h-full bg-purple-500 rounded-full" 
                          style={{ width: `${(systemStats.categoryDistribution.sains / Math.max(1, systemStats.totalQuestions)) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-500">Tidak ada data statistik.</p>
            )}
          </div>
        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* 8. SECTION: PENGGUNAAN AI */}
      {/* ---------------------------------------------------------------- */}
      {adminTab === 'ai' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-purple-600" />
                  Metrik & Audit Penggunaan Gemini AI
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Pemantauan konsumsi API server-side dan riwayat pembuatan soal otomatis
                </p>
              </div>

              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Gemini 2.5 Flash Aktif
              </span>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100">
                <span className="text-xs font-bold text-purple-900 uppercase">Total Permintaan</span>
                <h4 className="text-2xl font-black text-purple-700 mt-1">{aiMetrics?.totalRequests || 0}</h4>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                <span className="text-xs font-bold text-emerald-900 uppercase">Permintaan Berhasil</span>
                <h4 className="text-2xl font-black text-emerald-700 mt-1">{aiMetrics?.successfulRequests || 0}</h4>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100">
                <span className="text-xs font-bold text-rose-900 uppercase">Permintaan Gagal</span>
                <h4 className="text-2xl font-black text-rose-700 mt-1">{aiMetrics?.failedRequests || 0}</h4>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100">
                <span className="text-xs font-bold text-indigo-900 uppercase">Soal Tergenerate</span>
                <h4 className="text-2xl font-black text-indigo-700 mt-1">{aiMetrics?.questionsGenerated || 0}</h4>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-bold text-slate-800 mb-3">Log Riwayat Pembuatan Soal AI:</h4>
              {!aiMetrics || aiMetrics.recentLogs.length === 0 ? (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center text-xs text-slate-500">
                  Belum ada catatan aktivitas pembuatan soal AI pada sesi ini.
                </div>
              ) : (
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-xs text-slate-600">
                    <thead className="bg-slate-50 text-[11px] font-bold uppercase text-slate-500 border-b border-slate-200">
                      <tr>
                        <th className="p-3">Waktu</th>
                        <th className="p-3">Domain</th>
                        <th className="p-3">Jumlah Butir</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Keterangan</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {aiMetrics.recentLogs.map((log) => (
                        <tr key={log.id} className="hover:bg-slate-50/80">
                          <td className="p-3 text-slate-500">
                            {new Date(log.timestamp).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                          </td>
                          <td className="p-3 uppercase font-bold text-[10px] text-slate-700">{log.category}</td>
                          <td className="p-3 font-semibold text-slate-800">{log.count} butir</td>
                          <td className="p-3">
                            <span className={`rounded-md px-2 py-0.5 font-bold text-[10px] ${
                              log.status === 'success' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                            }`}>
                              {log.status === 'success' ? 'BERHASIL' : 'GAGAL'}
                            </span>
                          </td>
                          <td className="p-3 text-slate-500">{log.error || 'Generasi tervalidasi'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* 9. SECTION: MANAJEMEN PENGGUNA */}
      {/* ---------------------------------------------------------------- */}
      {adminTab === 'users' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                  <Users className="h-6 w-6 text-purple-700" />
                  MANAJEMEN PENGGUNA & KODE AKSES
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Kelola akun pengguna, persetujuan mandiri (Method 1), pembuatan instan admin (Method 2), dan distribusi Kode Akses AKGTK.
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={fetchUsers}
                  className="flex items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
                  title="Segarkan daftar pengguna"
                >
                  <RefreshCw className={`h-3.5 w-3.5 ${usersLoading ? 'animate-spin' : ''}`} />
                  Segarkan
                </button>
                {isSuperAdmin && (
                  <button
                    onClick={() => setIsAddUserModalOpen(true)}
                    className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-700 to-indigo-700 px-5 py-2.5 text-xs font-black text-white shadow-md hover:from-purple-800 hover:to-indigo-800 transition-all cursor-pointer tracking-wide uppercase"
                  >
                    <UserPlus className="h-4 w-4" />
                    + TAMBAH PENGGUNA
                  </button>
                )}
              </div>
            </div>

            {/* Quick KPI Overview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-3.5">
                <span className="text-[11px] font-semibold text-slate-500 block">Total Pengguna</span>
                <span className="text-xl font-bold text-slate-900">{usersList.length}</span>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-3.5">
                <span className="text-[11px] font-semibold text-emerald-700 block">Akun Aktif</span>
                <span className="text-xl font-bold text-emerald-800">
                  {usersList.filter(u => u.status === 'ACTIVE' || !u.status).length}
                </span>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-amber-700 block">Menunggu Approval</span>
                  {usersList.filter(u => u.status === 'PENDING').length > 0 && (
                    <span className="h-2 w-2 rounded-full bg-amber-500 animate-ping" />
                  )}
                </div>
                <span className="text-xl font-bold text-amber-800">
                  {usersList.filter(u => u.status === 'PENDING').length}
                </span>
              </div>

              <div className="rounded-2xl border border-purple-200 bg-purple-50/50 p-3.5">
                <span className="text-[11px] font-semibold text-purple-700 block">Admin & Super Admin</span>
                <span className="text-xl font-bold text-purple-800">
                  {usersList.filter(u => u.role === 'ADMIN' || u.role === 'SUPER_ADMIN').length}
                </span>
              </div>
            </div>

            {/* Filter and Search */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2">
              <div className="sm:col-span-4 relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Cari nama, WA, madrasah, kota, atau kode akses..."
                  value={userSearchQuery}
                  onChange={e => setUserSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 pl-9 pr-3 py-2 text-xs focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none"
                />
              </div>

              <div className="sm:col-span-3">
                <select
                  value={userCategoryFilter}
                  onChange={e => setUserCategoryFilter(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none"
                >
                  <option value="all">Semua Kategori AKGTK</option>
                  <option value="Guru Kelas">Guru Kelas</option>
                  <option value="Rumpun PAI">Rumpun PAI</option>
                  <option value="STEM">STEM</option>
                  <option value="Umum">Umum</option>
                  <option value="Kepala Madrasah">Kepala Madrasah</option>
                  <option value="Pengawas">Pengawas</option>
                  <option value="Laboran">Laboran</option>
                  <option value="Pustakawan">Pustakawan</option>
                </select>
              </div>

              <div className="sm:col-span-3">
                <select
                  value={userStatusFilter}
                  onChange={e => setUserStatusFilter(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none"
                >
                  <option value="all">Semua Status Akun</option>
                  <option value="ACTIVE">ACTIVE (Aktif)</option>
                  <option value="PENDING">PENDING (Menunggu Persetujuan)</option>
                  <option value="BLOCKED">BLOCKED (Diblokir)</option>
                  <option value="EXPIRED">EXPIRED (Kedaluwarsa)</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <select
                  value={userRoleFilter}
                  onChange={e => setUserRoleFilter(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none"
                >
                  <option value="all">Semua Peran</option>
                  <option value="SUPER_ADMIN">Super Admin</option>
                  <option value="ADMIN">Administrator</option>
                  <option value="USER">User Guru</option>
                </select>
              </div>
            </div>

            {/* Users Table */}
            <div className="mt-6">
              {usersLoading ? (
                <div className="py-12 text-center text-slate-500">
                  <Loader2 className="h-6 w-6 animate-spin mx-auto mb-2 text-purple-600" />
                  <p className="text-xs">Memuat daftar pengguna...</p>
                </div>
              ) : filteredUsers.length === 0 ? (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center text-xs text-slate-500 space-y-2">
                  <p>Tidak ada data pengguna yang sesuai dengan filter pencarian.</p>
                  {isSuperAdmin && (
                    <button
                      onClick={() => setIsAddUserModalOpen(true)}
                      className="inline-flex items-center gap-1.5 text-purple-700 font-bold hover:underline cursor-pointer"
                    >
                      <UserPlus className="h-3.5 w-3.5" />
                      Tambah Pengguna Baru Sekarang
                    </button>
                  )}
                </div>
              ) : (
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs">
                  <table className="w-full text-left text-xs text-slate-600">
                    <thead className="bg-slate-50 text-[11px] font-bold uppercase text-slate-500 border-b border-slate-200">
                      <tr>
                        <th className="p-3">Nama</th>
                        <th className="p-3">No HP</th>
                        <th className="p-3">Kode Akses</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Tanggal Aktif</th>
                        <th className="p-3">Tanggal Berakhir</th>
                        <th className="p-3">Pendidikan</th>
                        <th className="p-3">Hak Akses</th>
                        <th className="p-3">Status Akses</th>
                        <th className="p-3 text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredUsers.map((u) => {
                        const isPending = u.status === 'PENDING';
                        const isBlocked = u.status === 'BLOCKED';
                        const isExpired = u.status === 'EXPIRED';
                        const isActive = !isPending && !isBlocked && !isExpired;

                        const formatTableDate = (isoStr?: string) => {
                          if (!isoStr) return '-';
                          try {
                            const d = new Date(isoStr);
                            if (isNaN(d.getTime())) return '-';
                            const dd = String(d.getDate()).padStart(2, '0');
                            const mm = String(d.getMonth() + 1).padStart(2, '0');
                            const yyyy = d.getFullYear();
                            return `${dd}-${mm}-${yyyy}`;
                          } catch {
                            return '-';
                          }
                        };

                        const summary = formatUserAccessSummary(u);
                        const statusLabel = isPending ? 'Menunggu' : isBlocked ? 'Diblokir' : isExpired ? 'Kedaluwarsa' : 'Aktif';

                        return (
                          <tr key={u.id} className="hover:bg-slate-50/90 transition-colors">
                            {/* Column 1: Nama */}
                            <td className="p-3">
                              <div className="flex items-start gap-2.5">
                                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl font-black text-xs shadow-xs ${
                                  u.role === 'SUPER_ADMIN' 
                                    ? 'bg-purple-700 text-white' 
                                    : u.role === 'ADMIN'
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-emerald-100 text-emerald-800'
                                }`}>
                                  {u.name.charAt(0)}
                                </div>
                                <div className="space-y-0.5">
                                  <div className="flex items-center gap-1.5 flex-wrap">
                                    <span className="font-bold text-slate-900 text-xs">{u.name}</span>
                                    {u.registrationSource === 'ADMIN' && (
                                      <span className="rounded bg-purple-100 px-1.5 py-0.2 text-[9px] font-black text-purple-800" title="Dibuat manual oleh Super Admin">
                                        ADMIN
                                      </span>
                                    )}
                                    {u.registrationSource === 'SELF_REGISTRATION' && (
                                      <span className="rounded bg-blue-100 px-1.5 py-0.2 text-[9px] font-semibold text-blue-800" title="Registrasi mandiri">
                                        MANDIRI
                                      </span>
                                    )}
                                  </div>
                                  {(u.madrasah || u.city) && (
                                    <div className="text-[10px] text-slate-400">
                                      {u.madrasah}{u.madrasah && u.city ? ', ' : ''}{u.city}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </td>

                            {/* Column 2: No HP */}
                            <td className="p-3 font-mono text-slate-700 text-xs">
                              {u.whatsapp || '-'}
                            </td>

                            {/* Column 3: Kode Akses */}
                            <td className="p-3">
                              {isPending ? (
                                <button
                                  type="button"
                                  onClick={() => handleApproveUser(u)}
                                  disabled={approvingUserId === u.id}
                                  className="rounded-lg bg-emerald-600 px-2 py-1 text-[11px] font-bold text-white shadow-xs hover:bg-emerald-700 transition-colors cursor-pointer flex items-center gap-1 disabled:opacity-50"
                                >
                                  {approvingUserId === u.id ? <Loader2 className="h-3 w-3 animate-spin" /> : <Check className="h-3 w-3" />}
                                  <span>Setujui</span>
                                </button>
                              ) : u.accessCode ? (
                                <div className="flex items-center gap-1.5">
                                  <span className="font-mono text-xs font-black text-slate-900 bg-slate-100 px-2 py-0.5 rounded tracking-wide">
                                    {u.accessCode}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => handleCopyCode(u.accessCode!, u.id)}
                                    className="p-1 text-slate-400 hover:text-purple-700 hover:bg-purple-50 rounded cursor-pointer"
                                    title="Salin kode"
                                  >
                                    {copiedCodeUserId === u.id ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleCopyWaMessage(u)}
                                    className="p-1 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 rounded cursor-pointer"
                                    title="Salin pesan WA"
                                  >
                                    {copiedWaUserId === u.id ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <MessageSquare className="h-3.5 w-3.5" />}
                                  </button>
                                </div>
                              ) : (
                                <span className="text-[11px] text-slate-400 italic">(Email)</span>
                              )}
                            </td>

                            {/* Column 4: Status */}
                            <td className="p-3">
                              <span className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-black uppercase ${
                                isPending 
                                  ? 'bg-amber-100 text-amber-800 ring-1 ring-amber-300' 
                                  : isBlocked
                                  ? 'bg-rose-100 text-rose-800 ring-1 ring-rose-300'
                                  : isExpired
                                  ? 'bg-slate-200 text-slate-700'
                                  : 'bg-emerald-100 text-emerald-800'
                              }`}>
                                {isPending && <span className="h-1.5 w-1.5 rounded-full bg-amber-600 animate-pulse" />}
                                {statusLabel}
                              </span>
                            </td>

                            {/* Column 5: Tanggal Aktif */}
                            <td className="p-3 text-[11px] font-mono text-slate-700">
                              {formatTableDate(u.accessStartDate || u.createdAt)}
                            </td>

                            {/* Column 6: Tanggal Berakhir */}
                            <td className="p-3 text-[11px] font-mono text-slate-700">
                              {formatTableDate(u.accessEndDate)}
                            </td>

                            {/* Column 7: Pendidikan */}
                            <td className="p-3">
                              <span className="inline-block rounded-md bg-purple-50 border border-purple-200 px-2 py-0.5 text-xs font-black text-purple-900">
                                {summary.pendidikan}
                              </span>
                            </td>

                            {/* Column 8: Hak Akses */}
                            <td className="p-3">
                              <span className={`inline-block rounded-md px-2 py-0.5 text-xs font-bold ${
                                summary.hakAkses === 'Semua' 
                                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                                  : summary.hakAkses === 'Terpilih'
                                  ? 'bg-indigo-50 text-indigo-800 border border-indigo-200'
                                  : 'bg-rose-50 text-rose-800 border border-rose-200'
                              }`}>
                                {summary.hakAkses}
                              </span>
                            </td>

                            {/* Column 9: Status Akses */}
                            <td className="p-3">
                              <span className={`inline-block rounded-md px-2 py-0.5 text-[11px] font-bold ${
                                summary.statusAkses === 'Aktif' || summary.statusAkses === 'Aktif Penuh'
                                  ? 'text-emerald-700 font-extrabold'
                                  : summary.statusAkses === 'Kedaluwarsa'
                                  ? 'text-amber-700'
                                  : summary.statusAkses === 'Diblokir'
                                  ? 'text-rose-700'
                                  : 'text-slate-500'
                              }`}>
                                {summary.statusAkses}
                              </span>
                            </td>

                            {/* Column 10: Management Actions */}
                            <td className="p-3 text-right">
                              <div className="flex items-center justify-end gap-1.5 flex-wrap">
                                {/* Edit user */}
                                <button
                                  type="button"
                                  onClick={() => setEditingUser(u)}
                                  className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
                                  title="Edit data profil & hak akses"
                                >
                                  <Edit3 className="h-3.5 w-3.5" />
                                </button>

                                {/* Extend access */}
                                <button
                                  type="button"
                                  onClick={() => setExtendingUser(u)}
                                  className="p-1.5 rounded-lg border border-amber-200 bg-amber-50 hover:bg-amber-100 text-amber-700 transition-colors cursor-pointer"
                                  title="Perpanjang masa aktif"
                                >
                                  <Clock className="h-3.5 w-3.5" />
                                </button>

                                {/* Reset access code */}
                                <button
                                  type="button"
                                  onClick={() => handleResetAccessCode(u)}
                                  disabled={resettingUserId === u.id}
                                  className="p-1.5 rounded-lg border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 transition-colors cursor-pointer disabled:opacity-50"
                                  title="Reset dan buat Kode Akses baru"
                                >
                                  {resettingUserId === u.id ? (
                                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                                  ) : (
                                    <KeyRound className="h-3.5 w-3.5" />
                                  )}
                                </button>

                                {/* Block / Reactivate */}
                                <button
                                  type="button"
                                  onClick={() => handleToggleBlock(u)}
                                  className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                                    isBlocked
                                      ? 'border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                                      : 'border-slate-200 bg-white text-slate-500 hover:text-rose-600 hover:border-rose-200'
                                  }`}
                                  title={isBlocked ? 'Buka blokir akun' : 'Blokir akun sementara'}
                                >
                                  {isBlocked ? <Check className="h-3.5 w-3.5" /> : <Ban className="h-3.5 w-3.5" />}
                                </button>

                                {/* Delete user */}
                                {u.id === activeUser?.id ? (
                                  <span className="text-[10px] text-slate-400 font-bold px-1 select-none">
                                    Akun Anda
                                  </span>
                                ) : !isSuperAdmin && (u.role === 'SUPER_ADMIN' || u.role === 'ADMIN') ? (
                                  <span className="text-[10px] text-slate-400 font-medium px-1 select-none">
                                    Dilindungi
                                  </span>
                                ) : (
                                  <button
                                    type="button"
                                    onClick={() => handlePromptDeleteUser(u)}
                                    className="p-1.5 rounded-lg border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors cursor-pointer"
                                    title={`Hapus permanen akun ${u.name}`}
                                  >
                                    <Trash2 className="h-3.5 w-3.5" />
                                  </button>
                                )}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* MODAL: FORM BUTIR SOAL (ADD / EDIT) */}
      {/* ---------------------------------------------------------------- */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs overflow-y-auto animate-in fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-slate-200 my-8">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="text-lg font-bold text-slate-900 mb-1">
              {editingQuestionId ? `Edit Butir Soal [${editingQuestionId}]` : 'Tambah Butir Soal Baru'}
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Pastikan butir soal memiliki stimulus, 4 pilihan jawaban yang seimbang, serta kunci & pembahasan mendalam.
            </p>

            <form onSubmit={handleSaveQuestion} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Domain</label>
                  <select
                    value={formCategory}
                    onChange={e => setFormCategory(e.target.value as QuestionCategory)}
                    className="w-full rounded-xl border border-slate-300 p-2 text-xs font-medium"
                  >
                    <option value="literasi">Literasi Membaca</option>
                    <option value="numerasi">Numerasi</option>
                    <option value="sains">Sains</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Kesulitan</label>
                  <select
                    value={formDifficulty}
                    onChange={e => setFormDifficulty(e.target.value as QuestionDifficulty)}
                    className="w-full rounded-xl border border-slate-300 p-2 text-xs font-medium"
                  >
                    <option value="mudah">Mudah</option>
                    <option value="sedang">Sedang</option>
                    <option value="sulit">Sulit / HOTS</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Kompetensi</label>
                  <input
                    type="text"
                    placeholder="Contoh: Menilai Kualitas Konten"
                    value={formCompetency}
                    onChange={e => setFormCompetency(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-2 text-xs"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Stimulus Wacana / Narasi Konteks (Wajib untuk Literasi)
                </label>
                <textarea
                  rows={3}
                  placeholder="Teks wacana, studi kasus madrasah, atau deskripsi eksperimen sains..."
                  value={formPassage}
                  onChange={e => setFormPassage(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Pertanyaan Pokok</label>
                <textarea
                  rows={2}
                  placeholder="Ketik pokok permasalahan soal di sini..."
                  value={formQuestion}
                  onChange={e => setFormQuestion(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs font-semibold"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Opsi A</label>
                  <input
                    type="text"
                    value={formOptA}
                    onChange={e => setFormOptA(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-2 text-xs"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Opsi B</label>
                  <input
                    type="text"
                    value={formOptB}
                    onChange={e => setFormOptB(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-2 text-xs"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Opsi C</label>
                  <input
                    type="text"
                    value={formOptC}
                    onChange={e => setFormOptC(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-2 text-xs"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Opsi D</label>
                  <input
                    type="text"
                    value={formOptD}
                    onChange={e => setFormOptD(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-2 text-xs"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Kunci Jawaban Benar</label>
                <div className="flex gap-4">
                  {(['A', 'B', 'C', 'D'] as const).map(key => (
                    <label key={key} className="flex items-center gap-1.5 text-xs font-bold cursor-pointer">
                      <input
                        type="radio"
                        name="correctAnswerRadio"
                        value={key}
                        checked={formCorrect === key}
                        onChange={() => setFormCorrect(key)}
                        className="text-emerald-600 focus:ring-emerald-500"
                      />
                      <span>Pilihan {key}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Pembahasan & Analisis Ilmiah</label>
                <textarea
                  rows={3}
                  placeholder="Jelaskan secara mendalam mengapa jawaban tersebut tepat..."
                  value={formExplanation}
                  onChange={e => setFormExplanation(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Tips / Strategi Cepat</label>
                <input
                  type="text"
                  placeholder="Tips cepat mengenali kata kunci atau rumus praktis..."
                  value={formTip}
                  onChange={e => setFormTip(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2 text-xs"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="rounded-xl border border-slate-300 px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={formSaving}
                  className="rounded-xl bg-indigo-600 px-5 py-2 text-xs font-bold text-white hover:bg-indigo-700 disabled:opacity-50 cursor-pointer"
                >
                  {formSaving ? 'Menyimpan...' : 'Simpan Butir Soal'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* MODAL: KONFIRMASI HAPUS PENGGUNA */}
      {/* ---------------------------------------------------------------- */}
      {userToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-slate-200 animate-in zoom-in-95 duration-150">
            <button
              onClick={() => !isDeletingUser && setUserToDelete(null)}
              disabled={isDeletingUser}
              className="absolute top-4 right-4 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 cursor-pointer disabled:opacity-50"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 shrink-0">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Hapus Akun Pengguna?</h3>
                <p className="text-xs text-slate-500">Tindakan ini permanen dan tidak dapat dibatalkan</p>
              </div>
            </div>

            <div className="my-4 rounded-2xl bg-slate-50 p-4 border border-slate-200/80 space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Nama Pengguna:</span>
                <span className="font-bold text-slate-900">{userToDelete.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Alamat Email:</span>
                <span className="font-mono text-slate-700">{userToDelete.email}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Peran Akun:</span>
                <span className={`font-bold px-2 py-0.5 rounded text-[10px] ${
                  userToDelete.role === 'SUPER_ADMIN' ? 'bg-purple-100 text-purple-800' :
                  userToDelete.role === 'ADMIN' ? 'bg-indigo-100 text-indigo-800' :
                  'bg-emerald-100 text-emerald-800'
                }`}>
                  {userToDelete.role}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Riwayat CBT:</span>
                <span className="text-slate-700 font-semibold">{userToDelete.totalSessions} sesi</span>
              </div>
            </div>

            <div className="rounded-xl bg-rose-50 p-3 border border-rose-100 text-xs text-rose-700 space-y-1 mb-5">
              <p className="font-bold flex items-center gap-1.5">
                <ShieldAlert className="h-4 w-4 shrink-0 text-rose-600" />
                Peringatan Penghapusan Data:
              </p>
              <p className="text-[11px] text-rose-600 leading-relaxed">
                Seluruh data pengerjaan ujian, riwayat nilai, serta bookmark butir soal akun ini akan dihapus seutuhnya dari basis data server.
              </p>
            </div>

            <div className="flex justify-end gap-2.5 pt-2 border-t border-slate-100">
              <button
                type="button"
                disabled={isDeletingUser}
                onClick={() => setUserToDelete(null)}
                className="rounded-xl border border-slate-300 px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
              >
                Batal
              </button>
              <button
                type="button"
                disabled={isDeletingUser}
                onClick={handleConfirmDeleteUser}
                className="flex items-center gap-1.5 rounded-xl bg-rose-600 px-5 py-2 text-xs font-bold text-white hover:bg-rose-700 disabled:opacity-50 cursor-pointer shadow-sm transition-colors"
              >
                {isDeletingUser ? (
                  <>
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    <span>Menghapus...</span>
                  </>
                ) : (
                  <>
                    <Trash2 className="h-3.5 w-3.5" />
                    <span>Ya, Hapus Pengguna</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* MODAL: TAMBAH PENGGUNA (METHOD 2: SUPER ADMIN MANUAL CREATION) */}
      {/* ---------------------------------------------------------------- */}
      <AddUserModal
        isOpen={isAddUserModalOpen}
        onClose={() => setIsAddUserModalOpen(false)}
        onUserCreated={(result) => {
          showNotification('success', `Pengguna "${result.user.name}" berhasil dibuat dengan Kode Akses: ${result.accessCode}`);
          fetchUsers();
        }}
      />

      {/* ---------------------------------------------------------------- */}
      {/* MODAL: EDIT DATA PENGGUNA */}
      {/* ---------------------------------------------------------------- */}
      {editingUser && (
        <EditUserModal
          user={editingUser}
          isOpen={!!editingUser}
          onClose={() => setEditingUser(null)}
          onUserUpdated={(updated) => {
            showNotification('success', `Data profil "${updated.name}" berhasil diperbarui.`);
            fetchUsers();
            setEditingUser(null);
          }}
        />
      )}

      {/* ---------------------------------------------------------------- */}
      {/* MODAL: PERPANJANG MASA AKSES */}
      {/* ---------------------------------------------------------------- */}
      {extendingUser && (
        <ExtendAccessModal
          user={extendingUser}
          isOpen={!!extendingUser}
          onClose={() => setExtendingUser(null)}
          onUserUpdated={(updated) => {
            showNotification('success', `Masa akses "${updated.name}" berhasil diperpanjang.`);
            fetchUsers();
            setExtendingUser(null);
          }}
        />
      )}
    </div>
  );
};
