import React, { useState, useEffect } from 'react';
import { QuestionCategory, UserStats, AuthUser, EducationLevel } from '../types';
import { 
  BookOpen, 
  Calculator, 
  Atom, 
  Layers, 
  Timer, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  BarChart3, 
  Play, 
  RotateCcw, 
  Lock, 
  Info, 
  X, 
  GraduationCap, 
  ShieldAlert, 
  ChevronRight, 
  Flame, 
  Clock, 
  Briefcase, 
  Search, 
  Building2, 
  Library, 
  Compass, 
  Globe2 
} from 'lucide-react';
import { api } from '../services/apiClient';
import { LYNK_CHECKOUT_URL, redirectToCheckout } from '../constants';
import { 
  CANONICAL_CATEGORIES, 
  canAccess, 
  formatUserAccessSummary, 
  EDUCATION_LEVELS_CONFIG 
} from '../categoryEngine';

interface DashboardProps {
  onStartSession: (category: QuestionCategory | 'campuran' | 'remedial' | string, mode: 'practice' | 'simulation', educationLevel?: EducationLevel) => void;
  onOpenSetup: (initialMode: 'practice' | 'simulation', initialCategory?: QuestionCategory | 'campuran' | string, educationLevel?: EducationLevel, catId?: string) => void;
  onNavigateTab: (tab: 'dashboard' | 'practice' | 'simulation' | 'history' | 'admin') => void;
  currentUser: AuthUser | null;
  onOpenAuth: () => void;
}

export type DashboardViewLevel = 'MI' | 'MTs' | 'MA' | 'TENDIK';

export const Dashboard: React.FC<DashboardProps> = ({
  onStartSession,
  onOpenSetup,
  onNavigateTab,
  currentUser,
  onOpenAuth
}) => {
  const [stats, setStats] = useState<UserStats>({
    totalSessions: 0,
    totalQuestionsAnswered: 0,
    totalCorrect: 0,
    totalIncorrect: 0,
    averageScore: 0,
    strongestCategory: '-',
    weakestCategory: '-'
  });
  const [wrongQuestionCount, setWrongQuestionCount] = useState<number>(0);
  const [selectedEducationLevel, setSelectedEducationLevel] = useState<DashboardViewLevel>('MI');
  const [noticeModal, setNoticeModal] = useState<{
    title: string;
    message: string;
    status: 'LOCKED' | 'EMPTY' | 'NO_ACCESS';
    categoryName?: string;
    level?: string;
  } | null>(null);

  useEffect(() => {
    api.getUserStats().then(setStats).catch(() => {});
    api.getWrongQuestions().then(res => setWrongQuestionCount(res.count)).catch(() => {});
  }, []);

  const isNoAccess = currentUser?.accessMode === 'NONE' || currentUser?.accessPermissions?.accessMode === 'NONE';
  const isExpired = currentUser?.status === 'EXPIRED';

  const handleGuardedAction = (action: () => void) => {
    if (!currentUser) {
      onOpenAuth();
      return;
    }
    if (isNoAccess) {
      setNoticeModal({
        title: 'Status: Tidak Ada Akses Aktif',
        status: 'NO_ACCESS',
        message: 'Akun Anda saat ini belum memiliki hak akses aktif. Silakan hubungi Super Admin untuk menambahkan izin akses.'
      });
      return;
    }
    if (isExpired) {
      redirectToCheckout();
      return;
    }
    action();
  };

  const handleOpenSubjectGuarded = (
    catId: string, 
    subjId: string, 
    mode: 'practice' | 'simulation', 
    subjName: string
  ) => {
    if (isNoAccess) {
      setNoticeModal({
        title: 'Status: Tidak Ada Akses Aktif',
        status: 'NO_ACCESS',
        message: 'Akun Anda saat ini belum memiliki hak akses aktif. Silakan hubungi Super Admin untuk menambahkan izin akses.'
      });
      return;
    }

    const currentLevel = selectedEducationLevel === 'TENDIK' ? 'MI' : selectedEducationLevel;
    const allowed = canAccess(currentUser, currentLevel, catId, subjId);
    if (!allowed) {
      setNoticeModal({
        title: 'Akses Ditolak',
        categoryName: subjName,
        status: 'LOCKED',
        message: `Akun Anda belum memiliki izin akses untuk modul ${subjName} pada ${selectedEducationLevel === 'TENDIK' ? 'kategori Tendik' : 'jenjang ' + selectedEducationLevel}. Hubungi Super Admin untuk menambahkan hak akses.`
      });
      return;
    }

    handleGuardedAction(() => onOpenSetup(mode, subjId, currentLevel as EducationLevel, catId));
  };

  const userSummary = formatUserAccessSummary(currentUser);

  return (
    <div className="min-h-screen bg-slate-50/70 pb-20 pt-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {/* User Welcome Bar */}
        {currentUser ? (
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-700 font-bold text-base">
                {currentUser.name.charAt(0)}
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Selamat Datang Kembali,</p>
                <h3 className="text-sm sm:text-base font-bold text-slate-800">{currentUser.name}</h3>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                Jenjang: <strong>{userSummary.pendidikan}</strong>
              </span>

              <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                currentUser.role === 'SUPER_ADMIN' ? 'bg-purple-100 text-purple-800' :
                currentUser.role === 'ADMIN' ? 'bg-indigo-100 text-indigo-800' :
                isNoAccess ? 'bg-rose-100 text-rose-800 font-extrabold' :
                currentUser.status === 'EXPIRED' ? 'bg-rose-100 text-rose-800 font-extrabold' :
                currentUser.isGuest ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
              }`}>
                {isNoAccess ? 'Tidak Ada Akses Aktif' :
                 currentUser.status === 'EXPIRED' ? 'Masa Akses Berakhir' : 
                 currentUser.isGuest ? 'Sesi Tamu Terisolasi' : 
                 currentUser.role === 'SUPER_ADMIN' ? 'Super Administrator' : 
                 currentUser.role === 'ADMIN' ? 'Administrator' : 
                 `Hak Akses: ${userSummary.hakAkses}`}
              </span>

              {currentUser.accessCode && (
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-purple-50 text-purple-800 border border-purple-200">
                  Kode: {currentUser.accessCode}
                </span>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between bg-purple-50 border border-purple-200 p-4 rounded-2xl">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-purple-600 shrink-0" />
              <div>
                <p className="text-xs font-bold text-purple-900">Masuk untuk Menyimpan Progres Mandiri</p>
                <p className="text-[11px] text-purple-700">Setiap peserta memiliki penyimpanan data hasil simulasi dan analisis diagnostik tersendiri.</p>
              </div>
            </div>
            <button
              onClick={onOpenAuth}
              className="rounded-xl bg-purple-700 px-4 py-2 text-xs font-bold text-white hover:bg-purple-800 transition-colors cursor-pointer"
            >
              Masuk / Buat Akun
            </button>
          </div>
        )}

        {/* NON-ACCESSIBLE USERS BANNER */}
        {isNoAccess && (
          <div className="rounded-3xl border-2 border-rose-300 bg-rose-50/90 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-5 animate-in fade-in">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-600 text-white shadow-md">
                <Lock className="h-6 w-6" />
              </div>
              <div>
                <span className="inline-block rounded-full bg-rose-200 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-rose-900 mb-1">
                  Status: Tidak Ada Akses Aktif
                </span>
                <h3 className="text-base sm:text-lg font-bold text-rose-950">
                  Akses Bank Soal Belum Diaktifkan
                </h3>
                <p className="text-xs text-rose-700 mt-0.5 max-w-xl leading-relaxed">
                  Akun Anda telah terdaftar, namun belum memiliki izin akses ke materi soal atau simulasi. Silakan hubungi Super Admin untuk menambahkan hak akses, atau peroleh paket akses resmi.
                </p>
              </div>
            </div>

            <a
              href={LYNK_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center justify-center gap-2 rounded-2xl bg-rose-600 px-6 py-3 text-xs sm:text-sm font-extrabold text-white shadow-lg hover:bg-rose-700 hover:shadow-rose-600/30 transition-all cursor-pointer"
            >
              <span>Dapatkan Akses Lengkap</span>
            </a>
          </div>
        )}

        {/* EXPIRED BANNER */}
        {isExpired && !isNoAccess && (
          <div className="rounded-3xl border-2 border-rose-300 bg-rose-50/90 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-5 animate-in fade-in">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-600 text-white shadow-md">
                <ShieldAlert className="h-6 w-6" />
              </div>
              <div>
                <span className="inline-block rounded-full bg-rose-200 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-rose-900 mb-1">
                  Masa Akses Telah Berakhir
                </span>
                <h3 className="text-base sm:text-lg font-bold text-rose-950">
                  Perpanjang Akses AKGTK Smart Practice
                </h3>
                <p className="text-xs text-rose-700 mt-0.5 max-w-xl leading-relaxed">
                  Latihan mandiri dan simulasi CAT dinonaktifkan sementara hingga masa aktif diperpanjang.
                </p>
              </div>
            </div>

            <a
              href={LYNK_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center justify-center gap-2 rounded-2xl bg-rose-600 px-6 py-3 text-xs sm:text-sm font-extrabold text-white shadow-lg hover:bg-rose-700 hover:shadow-rose-600/30 transition-all cursor-pointer"
            >
              <span>Perpanjang Akses Sekarang</span>
            </a>
          </div>
        )}

        {/* Overview Stats */}
        {currentUser && !isNoAccess && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs">
              <span className="text-xs font-medium text-slate-500 block">Total Sesi Diselesaikan</span>
              <span className="text-2xl font-black text-slate-900 mt-1 block">{stats.totalSessions}</span>
              <span className="text-[11px] text-slate-400">Latihan & Simulasi</span>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs">
              <span className="text-xs font-medium text-slate-500 block">Soal Terjawab</span>
              <span className="text-2xl font-black text-emerald-600 mt-1 block">{stats.totalQuestionsAnswered}</span>
              <span className="text-[11px] text-slate-400">{stats.totalCorrect} Benar • {stats.totalIncorrect} Salah</span>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs">
              <span className="text-xs font-medium text-slate-500 block">Rata-Rata Nilai</span>
              <span className="text-2xl font-black text-indigo-600 mt-1 block">{stats.averageScore}</span>
              <span className="text-[11px] text-slate-400">Skala 0 - 100</span>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs">
              <span className="text-xs font-medium text-slate-500 block">Kategori Terkuat</span>
              <span className="text-lg font-bold text-slate-800 mt-1 block capitalize truncate">{stats.strongestCategory}</span>
              <span className="text-[11px] text-slate-400">Akurasi tertinggi</span>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* EDUCATION LEVEL SELECTOR TABS (MI, MTS, MA, TENDIK)             */}
        {/* ------------------------------------------------------------- */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-purple-700" />
                Pilih Jenjang & Kelompok AKGTK Kemenag
              </h2>
              <p className="text-xs text-slate-500">
                Bank Soal Lengkap 150 butir per mata pelajaran/bahasan sesuai standar resmi Kemenag RI 2026.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Tab 1: MI */}
            <button
              type="button"
              onClick={() => setSelectedEducationLevel('MI')}
              className={`p-3.5 sm:p-4 rounded-2xl border-2 text-left transition-all cursor-pointer relative ${
                selectedEducationLevel === 'MI'
                  ? 'border-purple-600 bg-white shadow-md ring-2 ring-purple-600/20'
                  : 'border-slate-200 bg-white/70 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-black px-2 py-0.5 rounded bg-purple-100 text-purple-800">
                  JENJANG MI
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  1.350 Soal
                </span>
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm">
                Madrasah Ibtidaiyah
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                Guru Kelas & Rumpun PAI
              </p>
            </button>

            {/* Tab 2: MTs */}
            <button
              type="button"
              onClick={() => setSelectedEducationLevel('MTs')}
              className={`p-3.5 sm:p-4 rounded-2xl border-2 text-left transition-all cursor-pointer relative ${
                selectedEducationLevel === 'MTs'
                  ? 'border-blue-600 bg-white shadow-md ring-2 ring-blue-600/20'
                  : 'border-slate-200 bg-white/70 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-black px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                  JENJANG MTs
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  1.500 Soal
                </span>
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm">
                Madrasah Tsanawiyah
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                PAI, STEM, & Mapel Umum
              </p>
            </button>

            {/* Tab 3: MA */}
            <button
              type="button"
              onClick={() => setSelectedEducationLevel('MA')}
              className={`p-3.5 sm:p-4 rounded-2xl border-2 text-left transition-all cursor-pointer relative ${
                selectedEducationLevel === 'MA'
                  ? 'border-amber-600 bg-white shadow-md ring-2 ring-amber-600/20'
                  : 'border-slate-200 bg-white/70 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-black px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                  JENJANG MA
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  2.250 Soal
                </span>
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm">
                Madrasah Aliyah
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                PAI, MIPA, & Mapel Sosial
              </p>
            </button>

            {/* Tab 4: TENDIK */}
            <button
              type="button"
              onClick={() => setSelectedEducationLevel('TENDIK')}
              className={`p-3.5 sm:p-4 rounded-2xl border-2 text-left transition-all cursor-pointer relative ${
                selectedEducationLevel === 'TENDIK'
                  ? 'border-emerald-600 bg-white shadow-md ring-2 ring-emerald-600/20'
                  : 'border-slate-200 bg-white/70 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-black px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  KEPALA & TENDIK
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  1.350 Soal
                </span>
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm">
                Kepemimpinan & Tendik
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                Kamad, Pengawas, Lab, Pustaka
              </p>
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* CONTENT FOR JENJANG MI                                         */}
        {/* ============================================================== */}
        {selectedEducationLevel === 'MI' && (
          <div className="space-y-8 animate-in fade-in">
            {/* SECTION 1: GURU KELAS MI */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-purple-700 text-white text-xs font-black">
                      GK
                    </span>
                    <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                      Guru Kelas — MI (600 Butir Soal Terstandar)
                    </h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    4 domain utama: Pedagogik (150), Literasi (150), Numerasi (150), Sains (150) berdasar referensi resmi AKG MI.
                  </p>
                </div>
                <span className="self-start sm:self-auto rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-900 border border-purple-200">
                  ✓ 600 Soal Siap Uji
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { id: 'pedagogik', name: 'Pedagogik MI', icon: GraduationCap, desc: 'Teori belajar, TPACK, asesmen autentik, strategi pembelajaran, evaluasi, dan manajemen kelas MI.', color: 'purple' },
                  { id: 'literasi', name: 'Literasi MI', icon: BookOpen, desc: 'Ide pokok, simpulan wacana, informasi tersirat, infografis kontekstual madrasah, dan evaluasi teks.', color: 'emerald' },
                  { id: 'numerasi', name: 'Numerasi MI', icon: Calculator, desc: 'Bilangan kontekstual, geometri ruang, rasio, statistika tabel/grafik, dan peluang MI.', color: 'blue' },
                  { id: 'sains', name: 'Sains MI', icon: Atom, desc: 'Metode ilmiah, variabel eksperimen, ekosistem, energi terbarukan, dan IPA terapan MI.', color: 'indigo' }
                ].map((item) => {
                  const allowed = !isNoAccess && canAccess(currentUser, 'MI', 'guru_kelas', item.id);
                  const Icon = item.icon;
                  return (
                    <div key={item.id} className={`group relative overflow-hidden rounded-2xl border p-5 transition-all ${
                      allowed ? 'border-slate-200 bg-white hover:border-purple-500 hover:shadow-lg' : 'border-slate-200 bg-slate-50/70 opacity-80'
                    }`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${
                          allowed ? 'bg-purple-50 text-purple-700 ring-purple-100 group-hover:scale-105' : 'bg-slate-100 text-slate-400 ring-slate-200'
                        } transition-transform`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${
                          allowed ? 'bg-purple-50 text-purple-800 border-purple-200' : 'bg-slate-100 text-slate-500 border-slate-200'
                        }`}>
                          {allowed ? '150 Soal' : '🔒 Terkunci'}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors uppercase">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                        {item.desc}
                      </p>
                      <div className="mt-5 flex items-center gap-2">
                        <button
                          onClick={() => handleOpenSubjectGuarded('guru_kelas', item.id, 'practice', item.name)}
                          className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold transition-colors cursor-pointer ${
                            allowed ? 'bg-purple-50 text-purple-700 hover:bg-purple-100' : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          <Play className="h-3.5 w-3.5" />
                          Latihan
                        </button>
                        <button
                          onClick={() => handleOpenSubjectGuarded('guru_kelas', item.id, 'simulation', item.name)}
                          className={`flex items-center justify-center rounded-xl p-2 transition-colors cursor-pointer ${
                            allowed ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-slate-100 text-slate-300'
                          }`}
                          title="Simulasi CBT"
                        >
                          <Timer className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Simulasi Guru Kelas CAT */}
              {(() => {
                const allowed = !isNoAccess && canAccess(currentUser, 'MI', 'guru_kelas', undefined);
                return (
                  <div className="rounded-2xl border-2 border-purple-300 bg-gradient-to-r from-purple-50 via-indigo-50 to-white p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-700 text-white shadow-sm">
                        <Layers className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-sm font-extrabold text-slate-900">
                          Simulasi CBT Komprehensif — Guru Kelas MI (50 Soal Acak)
                        </h4>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Format resmi CBT: proporsi seimbang dari bank 600 butir soal (Pedagogik, Literasi, Numerasi, Sains).
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleOpenSubjectGuarded('guru_kelas', 'campuran', 'simulation', 'Simulasi CBT Guru Kelas')}
                      className={`shrink-0 flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                        allowed ? 'bg-purple-700 text-white hover:bg-purple-800 shadow-md' : 'bg-slate-200 text-slate-500'
                      }`}
                    >
                      <Timer className="h-4 w-4" />
                      <span>{allowed ? 'Mulai Simulasi 50 Soal' : '🔒 Akses Terkunci'}</span>
                    </button>
                  </div>
                );
              })()}
            </div>

            {/* SECTION 2: RUMPUN PAI MI */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-600 text-white text-xs font-black">
                      PAI
                    </span>
                    <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                      Rumpun PAI — MI (750 Butir Soal Terstandar)
                    </h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    5 Mapel: Qur'an Hadits, Akidah Akhlak, Fikih, SKI, Bahasa Arab (150 butir per mapel).
                  </p>
                </div>
                <span className="self-start sm:self-auto rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-900 border border-emerald-200">
                  ✓ 750 Soal Siap Uji
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { id: 'quran_hadits', name: "Qur'an Hadits", desc: 'Tafsir ayat tarbiyah, asbabun nuzul, kaidah tajwid, kritik sanad hadits, dan implementasi akhlak qurani.' },
                  { id: 'akidah_akhlak', name: 'Akidah Akhlak', desc: 'Asmaul husna, pembinaan akidah tauhid, akhlak mahmudah, penghindaran mazmumah, dan tasawuf aplikatif.' },
                  { id: 'fikih', name: 'Fikih', desc: 'Ibadah thaharah, shalat, zakat, puasa, haji, muamalah maliyah madrasah, dan fikih kontemporer.' },
                  { id: 'ski', name: 'SKI', desc: 'Sejarah Khulafaur Rasyidin, Daulah Islam klasik, transmisi peradaban ilmu, dan dakwah Islam Nusantara.' },
                  { id: 'bahasa_arab', name: 'Bahasa Arab', desc: 'Qawaid nahwu sharaf, fahmul masmu, qiraah nash, insya muwajjah, dan mufradat komunikatif madrasah.' }
                ].map((item) => {
                  const allowed = !isNoAccess && canAccess(currentUser, 'MI', 'rumpun_pai', item.id);
                  return (
                    <div key={item.id} className={`group relative overflow-hidden rounded-2xl border p-5 transition-all ${
                      allowed ? 'border-slate-200 bg-white hover:border-emerald-500 hover:shadow-lg' : 'border-slate-200 bg-slate-50/70 opacity-80'
                    }`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${
                          allowed ? 'bg-emerald-50 text-emerald-700 ring-emerald-100 group-hover:scale-105' : 'bg-slate-100 text-slate-400 ring-slate-200'
                        } transition-transform`}>
                          <BookOpen className="h-6 w-6" />
                        </div>
                        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${
                          allowed ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-slate-100 text-slate-500 border-slate-200'
                        }`}>
                          {allowed ? '150 Soal' : '🔒 Terkunci'}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                        {item.desc}
                      </p>
                      <div className="mt-5 flex items-center gap-2">
                        <button
                          onClick={() => handleOpenSubjectGuarded('rumpun_pai', item.id, 'practice', item.name)}
                          className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold transition-colors cursor-pointer ${
                            allowed ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100' : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          <Play className="h-3.5 w-3.5" />
                          Latihan
                        </button>
                        <button
                          onClick={() => handleOpenSubjectGuarded('rumpun_pai', item.id, 'simulation', item.name)}
                          className={`flex items-center justify-center rounded-xl p-2 transition-colors cursor-pointer ${
                            allowed ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-slate-100 text-slate-300'
                          }`}
                          title="Simulasi CBT"
                        >
                          <Timer className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}

                {/* Simulasi CAT Terpadu Rumpun PAI */}
                {(() => {
                  const allowed = !isNoAccess && canAccess(currentUser, 'MI', 'rumpun_pai', undefined);
                  return (
                    <div className="group relative overflow-hidden rounded-2xl border-2 border-emerald-300 bg-gradient-to-b from-emerald-50/70 to-white p-5 shadow-xs hover:border-emerald-600 hover:shadow-lg transition-all flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-700 text-white shadow-sm group-hover:scale-105 transition-transform">
                            <Flame className="h-6 w-6" />
                          </div>
                          <span className="rounded-full bg-emerald-700 px-2.5 py-0.5 text-[10px] font-bold text-white">
                            SIMULASI CAT PAI
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                          SIMULASI CBT RUMPUN PAI
                        </h3>
                        <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                          Format CAT Resmi: 50 butir soal proporsional gabungan 5 mapel (10 Qur'an Hadits, 10 Akidah Akhlak, 10 Fikih, 10 SKI, 10 B. Arab).
                        </p>
                      </div>
                      <div className="mt-5">
                        <button
                          onClick={() => handleOpenSubjectGuarded('rumpun_pai', 'rumpun_pai', 'simulation', 'Simulasi CAT Rumpun PAI')}
                          className={`w-full flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold transition-colors cursor-pointer ${
                            allowed ? 'bg-emerald-700 text-white hover:bg-emerald-800 shadow-xs' : 'bg-slate-200 text-slate-400'
                          }`}
                        >
                          <Timer className="h-3.5 w-3.5" />
                          <span>{allowed ? 'Mulai Ujian Terpadu (50 Soal)' : '🔒 Akses Terkunci'}</span>
                        </button>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* SECTION 3: MAPEL UMUM & BAHASA MI */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-600 text-white text-xs font-black">
                      UMUM
                    </span>
                    <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                      Mata Pelajaran Umum & Bahasa — MI (150 Butir Soal)
                    </h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Bahasa Inggris MI: Kosakata dasar, percakapan madrasah, adab islami, dan tata bahasa kontekstual.
                  </p>
                </div>
                <span className="self-start sm:self-auto rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-900 border border-indigo-200">
                  ✓ 150 Soal Siap Uji
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { id: 'bahasa_inggris', name: 'Bahasa Inggris MI', icon: Globe2, desc: 'Greetings, classroom adab, daily vocabulary, telling time, family kinship, and simple descriptive sentences.' }
                ].map((item) => {
                  const allowed = !isNoAccess && canAccess(currentUser, 'MI', 'umum', item.id);
                  const Icon = item.icon;
                  return (
                    <div key={item.id} className={`group relative overflow-hidden rounded-2xl border p-5 transition-all ${
                      allowed ? 'border-slate-200 bg-white hover:border-indigo-500 hover:shadow-lg' : 'border-slate-200 bg-slate-50/70 opacity-80'
                    }`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${
                          allowed ? 'bg-indigo-50 text-indigo-700 ring-indigo-100 group-hover:scale-105' : 'bg-slate-100 text-slate-400 ring-slate-200'
                        } transition-transform`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${
                          allowed ? 'bg-indigo-50 text-indigo-800 border-indigo-200' : 'bg-slate-100 text-slate-500 border-slate-200'
                        }`}>
                          {allowed ? '150 Soal' : '🔒 Terkunci'}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                        {item.desc}
                      </p>
                      <div className="mt-5 flex items-center gap-2">
                        <button
                          onClick={() => handleOpenSubjectGuarded('umum', item.id, 'practice', item.name)}
                          className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold transition-colors cursor-pointer ${
                            allowed ? 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100' : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          <Play className="h-3.5 w-3.5" />
                          Latihan
                        </button>
                        <button
                          onClick={() => handleOpenSubjectGuarded('umum', item.id, 'simulation', item.name)}
                          className={`flex items-center justify-center rounded-xl p-2 transition-colors cursor-pointer ${
                            allowed ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-slate-100 text-slate-300'
                          }`}
                          title="Simulasi CBT"
                        >
                          <Timer className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* CONTENT FOR JENJANG MTS                                        */}
        {/* ============================================================== */}
        {selectedEducationLevel === 'MTs' && (
          <div className="space-y-8 animate-in fade-in">
            {/* SECTION 1: STEM MTS */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-700 text-white text-xs font-black">
                      STEM
                    </span>
                    <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                      STEM — MTs / SMP (300 Butir Soal Terstandar)
                    </h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Matematika MTs (150) dan IPA Terpadu MTs (150) berstandar Kurikulum Merdeka Kemenag.
                  </p>
                </div>
                <span className="self-start sm:self-auto rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-900 border border-blue-200">
                  ✓ 300 Soal Siap Uji
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { id: 'matematika', name: 'Matematika MTs', icon: Calculator, desc: 'Pola bilangan, aljabar, SPLDV, Teorema Pythagoras, geometri ruang, statistika & peluang kontekstual.' },
                  { id: 'ipa', name: 'IPA Terpadu MTs', icon: Atom, desc: 'Sistem peredaran darah, dinamika Hukum Newton, optik geometri, zat & perubahan, dan sistem organisasi kehidupan.' }
                ].map((item) => {
                  const allowed = !isNoAccess && canAccess(currentUser, 'MTs', 'stem', item.id);
                  const Icon = item.icon;
                  return (
                    <div key={item.id} className={`group relative overflow-hidden rounded-2xl border p-5 transition-all ${
                      allowed ? 'border-slate-200 bg-white hover:border-blue-500 hover:shadow-lg' : 'border-slate-200 bg-slate-50/70 opacity-80'
                    }`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${
                          allowed ? 'bg-blue-50 text-blue-700 ring-blue-100 group-hover:scale-105' : 'bg-slate-100 text-slate-400 ring-slate-200'
                        } transition-transform`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${
                          allowed ? 'bg-blue-50 text-blue-800 border-blue-200' : 'bg-slate-100 text-slate-500 border-slate-200'
                        }`}>
                          {allowed ? '150 Soal' : '🔒 Terkunci'}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 line-clamp-2">{item.desc}</p>
                      <div className="mt-5 flex items-center gap-2">
                        <button
                          onClick={() => handleOpenSubjectGuarded('stem', item.id, 'practice', item.name)}
                          className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold transition-colors cursor-pointer ${
                            allowed ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          <Play className="h-3.5 w-3.5" />
                          Latihan
                        </button>
                        <button
                          onClick={() => handleOpenSubjectGuarded('stem', item.id, 'simulation', item.name)}
                          className={`flex items-center justify-center rounded-xl p-2 transition-colors cursor-pointer ${
                            allowed ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-slate-100 text-slate-300'
                          }`}
                          title="Simulasi CBT"
                        >
                          <Timer className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* SECTION 2: MAPEL UMUM MTS */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-700 text-white text-xs font-black">
                      UMUM
                    </span>
                    <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                      Mata Pelajaran Umum — MTs (450 Butir Soal)
                    </h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Bahasa Indonesia MTs (150), Bahasa Inggris MTs (150), IPS Terpadu MTs (150).
                  </p>
                </div>
                <span className="self-start sm:self-auto rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-900 border border-indigo-200">
                  ✓ 450 Soal Siap Uji
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: 'bahasa_indonesia', name: 'Bahasa Indonesia MTs', icon: BookOpen, desc: 'Teks LHO, eksplanasi, ulasan, konjungsi kausalitas, dan kaidah PUEBI/EYD.' },
                  { id: 'bahasa_inggris', name: 'Bahasa Inggris MTs', icon: Globe2, desc: 'Recount text, procedure text, past tense grammar, and conversational notice.' },
                  { id: 'ips', name: 'IPS Terpadu MTs', icon: Compass, desc: 'Interaksi keruangan ASEAN, iklim muson, perubahan sosial budaya, dan ekonomi pasar.' }
                ].map((item) => {
                  const allowed = !isNoAccess && canAccess(currentUser, 'MTs', 'umum', item.id);
                  const Icon = item.icon;
                  return (
                    <div key={item.id} className={`group relative overflow-hidden rounded-2xl border p-5 transition-all ${
                      allowed ? 'border-slate-200 bg-white hover:border-indigo-500 hover:shadow-lg' : 'border-slate-200 bg-slate-50/70 opacity-80'
                    }`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${
                          allowed ? 'bg-indigo-50 text-indigo-700 ring-indigo-100 group-hover:scale-105' : 'bg-slate-100 text-slate-400 ring-slate-200'
                        } transition-transform`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${
                          allowed ? 'bg-indigo-50 text-indigo-800 border-indigo-200' : 'bg-slate-100 text-slate-500 border-slate-200'
                        }`}>
                          {allowed ? '150 Soal' : '🔒 Terkunci'}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 line-clamp-2">{item.desc}</p>
                      <div className="mt-5 flex items-center gap-2">
                        <button
                          onClick={() => handleOpenSubjectGuarded('umum', item.id, 'practice', item.name)}
                          className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold transition-colors cursor-pointer ${
                            allowed ? 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100' : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          <Play className="h-3.5 w-3.5" />
                          Latihan
                        </button>
                        <button
                          onClick={() => handleOpenSubjectGuarded('umum', item.id, 'simulation', item.name)}
                          className={`flex items-center justify-center rounded-xl p-2 transition-colors cursor-pointer ${
                            allowed ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-slate-100 text-slate-300'
                          }`}
                          title="Simulasi CBT"
                        >
                          <Timer className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* SECTION 3: RUMPUN PAI MTS */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-600 text-white text-xs font-black">
                      PAI
                    </span>
                    <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                      Rumpun PAI & Bahasa Arab — MTs (750 Butir Soal)
                    </h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Qur'an Hadits, Akidah Akhlak, Fikih, SKI, dan Bahasa Arab tingkat MTs.
                  </p>
                </div>
                <span className="self-start sm:self-auto rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-900 border border-emerald-200">
                  ✓ 750 Soal Siap Uji
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { id: 'quran_hadits', name: "Qur'an Hadits MTs", desc: 'Kaidah tajwid mad, qalqalah, dan pemahaman ayat-ayat toleransi sosial.' },
                  { id: 'akidah_akhlak', name: 'Akidah Akhlak MTs', desc: 'Asmaul husna Al-Ghaffar, Al-Basith, dan adab pergaulan remaja islami.' },
                  { id: 'fikih', name: 'Fikih MTs', desc: 'Thaharah, sujud sahwi, sujud tilawah, shalat berjamaah, dan puasa.' },
                  { id: 'ski', name: 'SKI MTs', desc: 'Sejarah Khulafaur Rasyidin, Daulah Umayyah, Abbasiyah, dan Ayyubiyah.' },
                  { id: 'bahasa_arab', name: 'Bahasa Arab MTs', desc: 'Tarkib jumlah ismiyyah/filiyyah, naat manut, dan qiraah teks madrasah.' }
                ].map((item) => {
                  const allowed = !isNoAccess && canAccess(currentUser, 'MTs', 'rumpun_pai', item.id);
                  return (
                    <div key={item.id} className={`group relative overflow-hidden rounded-2xl border p-5 transition-all ${
                      allowed ? 'border-slate-200 bg-white hover:border-emerald-500 hover:shadow-lg' : 'border-slate-200 bg-slate-50/70 opacity-80'
                    }`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${
                          allowed ? 'bg-emerald-50 text-emerald-700 ring-emerald-100 group-hover:scale-105' : 'bg-slate-100 text-slate-400 ring-slate-200'
                        } transition-transform`}>
                          <BookOpen className="h-6 w-6" />
                        </div>
                        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${
                          allowed ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-slate-100 text-slate-500 border-slate-200'
                        }`}>
                          {allowed ? '150 Soal' : '🔒 Terkunci'}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 line-clamp-2">{item.desc}</p>
                      <div className="mt-5 flex items-center gap-2">
                        <button
                          onClick={() => handleOpenSubjectGuarded('rumpun_pai', item.id, 'practice', item.name)}
                          className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold transition-colors cursor-pointer ${
                            allowed ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100' : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          <Play className="h-3.5 w-3.5" />
                          Latihan
                        </button>
                        <button
                          onClick={() => handleOpenSubjectGuarded('rumpun_pai', item.id, 'simulation', item.name)}
                          className={`flex items-center justify-center rounded-xl p-2 transition-colors cursor-pointer ${
                            allowed ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-slate-100 text-slate-300'
                          }`}
                          title="Simulasi CBT"
                        >
                          <Timer className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* CONTENT FOR JENJANG MA                                         */}
        {/* ============================================================== */}
        {selectedEducationLevel === 'MA' && (
          <div className="space-y-8 animate-in fade-in">
            {/* SECTION 1: STEM / MIPA MA */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-700 text-white text-xs font-black">
                      MIPA
                    </span>
                    <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                      STEM / Peminatan MIPA — MA (600 Butir Soal)
                    </h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Matematika MA (150), Fisika MA (150), Kimia MA (150), Biologi MA (150).
                  </p>
                </div>
                <span className="self-start sm:self-auto rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-900 border border-blue-200">
                  ✓ 600 Soal Siap Uji
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { id: 'matematika', name: 'Matematika MA', icon: Calculator, desc: 'Turunan & integral aljabar, trigonometri analitik, matriks, dan geometri dimensi tiga.' },
                  { id: 'fisika', name: 'Fisika MA', icon: Atom, desc: 'Dinamika rotasi, momen inersia, termodinamika siklus Carnot, dan gelombang elektromagnetik.' },
                  { id: 'kimia', name: 'Kimia MA', icon: Atom, desc: 'Larutan penyangga (buffer), elektrokimia sel Volta, termokimia, dan kesetimbangan kimia.' },
                  { id: 'biologi', name: 'Biologi MA', icon: BookOpen, desc: 'Dogma sentral sintesis protein, respirasi aerob transpor elektron, dan genetika Mendel.' }
                ].map((item) => {
                  const allowed = !isNoAccess && canAccess(currentUser, 'MA', 'stem', item.id);
                  const Icon = item.icon;
                  return (
                    <div key={item.id} className={`group relative overflow-hidden rounded-2xl border p-5 transition-all ${
                      allowed ? 'border-slate-200 bg-white hover:border-blue-500 hover:shadow-lg' : 'border-slate-200 bg-slate-50/70 opacity-80'
                    }`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${
                          allowed ? 'bg-blue-50 text-blue-700 ring-blue-100 group-hover:scale-105' : 'bg-slate-100 text-slate-400 ring-slate-200'
                        } transition-transform`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${
                          allowed ? 'bg-blue-50 text-blue-800 border-blue-200' : 'bg-slate-100 text-slate-500 border-slate-200'
                        }`}>
                          {allowed ? '150 Soal' : '🔒 Terkunci'}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 line-clamp-2">{item.desc}</p>
                      <div className="mt-5 flex items-center gap-2">
                        <button
                          onClick={() => handleOpenSubjectGuarded('stem', item.id, 'practice', item.name)}
                          className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold transition-colors cursor-pointer ${
                            allowed ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          <Play className="h-3.5 w-3.5" />
                          Latihan
                        </button>
                        <button
                          onClick={() => handleOpenSubjectGuarded('stem', item.id, 'simulation', item.name)}
                          className={`flex items-center justify-center rounded-xl p-2 transition-colors cursor-pointer ${
                            allowed ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-slate-100 text-slate-300'
                          }`}
                          title="Simulasi CBT"
                        >
                          <Timer className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* SECTION 2: MAPEL UMUM & IPS MA */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-amber-700 text-white text-xs font-black">
                      IPS
                    </span>
                    <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                      Mapel Umum & Peminatan IPS — MA (900 Butir Soal)
                    </h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Bahasa Indonesia, Bahasa Inggris, Ekonomi, Geografi, Sosiologi, Sejarah (150 per mapel).
                  </p>
                </div>
                <span className="self-start sm:self-auto rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900 border border-amber-200">
                  ✓ 900 Soal Siap Uji
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { id: 'bahasa_indonesia', name: 'Bahasa Indonesia MA', icon: BookOpen, desc: 'Teks editorial opini kritis, karya ilmiah populer, novel sejarah, dan kaidah EYD V.' },
                  { id: 'bahasa_inggris', name: 'Bahasa Inggris MA', icon: Globe2, desc: 'Analytical exposition, conditional type 3, discussion text, and subjunctive.' },
                  { id: 'ekonomi', name: 'Ekonomi MA', icon: Calculator, desc: 'Kebijakan moneter/fiskal, pengendalian inflasi, pendapatan nasional, dan akuntansi.' },
                  { id: 'geografi', name: 'Geografi MA', icon: Compass, desc: 'Interpretasi penginderaan jauh SIG, litosfer, atmosfer, dan tata guna lahan.' },
                  { id: 'sosiologi', name: 'Sosiologi MA', icon: Briefcase, desc: 'Struktur sosial, resolusi konflik mediasi, integrasi sosial, dan perubahan masyarakat.' },
                  { id: 'sejarah', name: 'Sejarah MA', icon: BookOpen, desc: 'Resolusi Jihad 1945, pergerakan nasional ulama santri, dan sejarah kemerdekaan RI.' }
                ].map((item) => {
                  const allowed = !isNoAccess && canAccess(currentUser, 'MA', 'umum', item.id);
                  const Icon = item.icon;
                  return (
                    <div key={item.id} className={`group relative overflow-hidden rounded-2xl border p-5 transition-all ${
                      allowed ? 'border-slate-200 bg-white hover:border-amber-500 hover:shadow-lg' : 'border-slate-200 bg-slate-50/70 opacity-80'
                    }`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${
                          allowed ? 'bg-amber-50 text-amber-700 ring-amber-100 group-hover:scale-105' : 'bg-slate-100 text-slate-400 ring-slate-200'
                        } transition-transform`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${
                          allowed ? 'bg-amber-50 text-amber-800 border-amber-200' : 'bg-slate-100 text-slate-500 border-slate-200'
                        }`}>
                          {allowed ? '150 Soal' : '🔒 Terkunci'}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 line-clamp-2">{item.desc}</p>
                      <div className="mt-5 flex items-center gap-2">
                        <button
                          onClick={() => handleOpenSubjectGuarded('umum', item.id, 'practice', item.name)}
                          className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold transition-colors cursor-pointer ${
                            allowed ? 'bg-amber-50 text-amber-700 hover:bg-amber-100' : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          <Play className="h-3.5 w-3.5" />
                          Latihan
                        </button>
                        <button
                          onClick={() => handleOpenSubjectGuarded('umum', item.id, 'simulation', item.name)}
                          className={`flex items-center justify-center rounded-xl p-2 transition-colors cursor-pointer ${
                            allowed ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-slate-100 text-slate-300'
                          }`}
                          title="Simulasi CBT"
                        >
                          <Timer className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* SECTION 3: RUMPUN PAI MA */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-600 text-white text-xs font-black">
                      PAI
                    </span>
                    <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                      Rumpun PAI & Bahasa Arab — MA (750 Butir Soal)
                    </h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Ulumul Qur'an, Tasawuf, Ushul Fikih, Peradaban Islam, dan Balaghah Bahasa Arab tingkat MA.
                  </p>
                </div>
                <span className="self-start sm:self-auto rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-900 border border-emerald-200">
                  ✓ 750 Soal Siap Uji
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { id: 'quran_hadits', name: "Qur'an Hadits MA", desc: 'Ulumul Quran, munasabah ayat, kaidah asbabun nuzul, dan tafsir tematik.' },
                  { id: 'akidah_akhlak', name: 'Akidah Akhlak MA', desc: 'Ilmu kalam, maqamat tasawuf akhlaki (tawakal, zuhud), dan pemikiran islam.' },
                  { id: 'fikih', name: 'Fikih MA', desc: 'Ushul fikih, kaidah saddudz dzariah, maslahah mursalah, dan fikih kontemporer.' },
                  { id: 'ski', name: 'SKI MA', desc: 'Peradaban Islam Abbasiyah Baitul Hikmah, peradaban Andalusia, dan era modern.' },
                  { id: 'bahasa_arab', name: 'Bahasa Arab MA', desc: 'Ilmu Balaghah (bayan, maani, badi), isti\'arah tashrihiyyah, dan teks sastra.' }
                ].map((item) => {
                  const allowed = !isNoAccess && canAccess(currentUser, 'MA', 'rumpun_pai', item.id);
                  return (
                    <div key={item.id} className={`group relative overflow-hidden rounded-2xl border p-5 transition-all ${
                      allowed ? 'border-slate-200 bg-white hover:border-emerald-500 hover:shadow-lg' : 'border-slate-200 bg-slate-50/70 opacity-80'
                    }`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${
                          allowed ? 'bg-emerald-50 text-emerald-700 ring-emerald-100 group-hover:scale-105' : 'bg-slate-100 text-slate-400 ring-slate-200'
                        } transition-transform`}>
                          <BookOpen className="h-6 w-6" />
                        </div>
                        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${
                          allowed ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-slate-100 text-slate-500 border-slate-200'
                        }`}>
                          {allowed ? '150 Soal' : '🔒 Terkunci'}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 line-clamp-2">{item.desc}</p>
                      <div className="mt-5 flex items-center gap-2">
                        <button
                          onClick={() => handleOpenSubjectGuarded('rumpun_pai', item.id, 'practice', item.name)}
                          className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold transition-colors cursor-pointer ${
                            allowed ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100' : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          <Play className="h-3.5 w-3.5" />
                          Latihan
                        </button>
                        <button
                          onClick={() => handleOpenSubjectGuarded('rumpun_pai', item.id, 'simulation', item.name)}
                          className={`flex items-center justify-center rounded-xl p-2 transition-colors cursor-pointer ${
                            allowed ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-slate-100 text-slate-300'
                          }`}
                          title="Simulasi CBT"
                        >
                          <Timer className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* CONTENT FOR KEPALA MADRASAH & TENDIK                           */}
        {/* ============================================================== */}
        {selectedEducationLevel === 'TENDIK' && (
          <div className="space-y-8 animate-in fade-in">
            {/* 1. KEPALA MADRASAH */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-purple-700 text-white text-xs font-black">
                      KAMAD
                    </span>
                    <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                      Kepala Madrasah (450 Butir Soal)
                    </h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Manajerial EDM/e-RKAM (150), Supervisi Guru PKG (150), Kewirausahaan Lembaga (150).
                  </p>
                </div>
                <span className="self-start sm:self-auto rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-900 border border-purple-200">
                  ✓ 450 Soal Siap Uji
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: 'manajerial', name: 'Manajerial Kepala Madrasah', icon: Building2, desc: 'Penyusunan EDM, e-RKAM, pengelolaan pendidik dan tenaga kependidikan, serta akuntabilitas BOS.' },
                  { id: 'supervisi', name: 'Supervisi Kepala Madrasah', icon: Search, desc: 'Supervisi klinis, telaah modul ajar kurikulum merdeka, dan pembinaan profesional guru.' },
                  { id: 'kewirausahaan', name: 'Kewirausahaan Madrasah', icon: Briefcase, desc: 'Inovasi madrasah, kemitraan strategis DUDI, unit usaha mandiri, dan etos kerja pantang menyerah.' }
                ].map((item) => {
                  const allowed = !isNoAccess && canAccess(currentUser, 'MI', 'kepala_madrasah', item.id);
                  const Icon = item.icon;
                  return (
                    <div key={item.id} className={`group relative overflow-hidden rounded-2xl border p-5 transition-all ${
                      allowed ? 'border-slate-200 bg-white hover:border-purple-500 hover:shadow-lg' : 'border-slate-200 bg-slate-50/70 opacity-80'
                    }`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${
                          allowed ? 'bg-purple-50 text-purple-700 ring-purple-100 group-hover:scale-105' : 'bg-slate-100 text-slate-400 ring-slate-200'
                        } transition-transform`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${
                          allowed ? 'bg-purple-50 text-purple-800 border-purple-200' : 'bg-slate-100 text-slate-500 border-slate-200'
                        }`}>
                          {allowed ? '150 Soal' : '🔒 Terkunci'}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 line-clamp-2">{item.desc}</p>
                      <div className="mt-5 flex items-center gap-2">
                        <button
                          onClick={() => handleOpenSubjectGuarded('kepala_madrasah', item.id, 'practice', item.name)}
                          className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold transition-colors cursor-pointer ${
                            allowed ? 'bg-purple-50 text-purple-700 hover:bg-purple-100' : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          <Play className="h-3.5 w-3.5" />
                          Latihan
                        </button>
                        <button
                          onClick={() => handleOpenSubjectGuarded('kepala_madrasah', item.id, 'simulation', item.name)}
                          className={`flex items-center justify-center rounded-xl p-2 transition-colors cursor-pointer ${
                            allowed ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-slate-100 text-slate-300'
                          }`}
                          title="Simulasi CBT"
                        >
                          <Timer className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. PENGAWAS MADRASAH */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-teal-700 text-white text-xs font-black">
                      PENGAWAS
                    </span>
                    <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                      Pengawas Madrasah (600 Butir Soal)
                    </h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Supervisi Akademik (150), Supervisi Manajerial (150), Evaluasi Pendidikan (150), Litbang PTS (150).
                  </p>
                </div>
                <span className="self-start sm:self-auto rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-900 border border-teal-200">
                  ✓ 600 Soal Siap Uji
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { id: 'supervisi_akademik', name: 'Supervisi Akademik', icon: Search, desc: 'Pendampingan Kurikulum Merdeka P5-PPRA, teknik coaching model TIRTA, dan modul ajar.' },
                  { id: 'supervisi_manajerial', name: 'Supervisi Manajerial', icon: Building2, desc: 'Pembinaan 8 Standar Nasional Pendidikan (SNP), akreditasi BAN-PDM, dan audit manajerial.' },
                  { id: 'evaluasi_pendidikan', name: 'Evaluasi Pendidikan', icon: BarChart3, desc: 'Analisis rapor mutu madrasah, tindak lanjut asesmen AKMI/AN, dan evaluasi gugus.' },
                  { id: 'penelitian_dan_pengembangan', name: 'Litbang & PTS', icon: Atom, desc: 'Penelitian Tindakan Sekolah (PTS), publikasi ilmiah kepengawasan, dan diseminasi best practice.' }
                ].map((item) => {
                  const allowed = !isNoAccess && canAccess(currentUser, 'MI', 'pengawas', item.id);
                  const Icon = item.icon;
                  return (
                    <div key={item.id} className={`group relative overflow-hidden rounded-2xl border p-5 transition-all ${
                      allowed ? 'border-slate-200 bg-white hover:border-teal-500 hover:shadow-lg' : 'border-slate-200 bg-slate-50/70 opacity-80'
                    }`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${
                          allowed ? 'bg-teal-50 text-teal-700 ring-teal-100 group-hover:scale-105' : 'bg-slate-100 text-slate-400 ring-slate-200'
                        } transition-transform`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${
                          allowed ? 'bg-teal-50 text-teal-800 border-teal-200' : 'bg-slate-100 text-slate-500 border-slate-200'
                        }`}>
                          {allowed ? '150 Soal' : '🔒 Terkunci'}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 line-clamp-2">{item.desc}</p>
                      <div className="mt-5 flex items-center gap-2">
                        <button
                          onClick={() => handleOpenSubjectGuarded('pengawas', item.id, 'practice', item.name)}
                          className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold transition-colors cursor-pointer ${
                            allowed ? 'bg-teal-50 text-teal-700 hover:bg-teal-100' : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          <Play className="h-3.5 w-3.5" />
                          Latihan
                        </button>
                        <button
                          onClick={() => handleOpenSubjectGuarded('pengawas', item.id, 'simulation', item.name)}
                          className={`flex items-center justify-center rounded-xl p-2 transition-colors cursor-pointer ${
                            allowed ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-slate-100 text-slate-300'
                          }`}
                          title="Simulasi CBT"
                        >
                          <Timer className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. LABORAN & PUSTAKAWAN */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-amber-700 text-white text-xs font-black">
                      LAB & PUSTAKA
                    </span>
                    <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                      Laboran & Pustakawan Madrasah (300 Butir Soal)
                    </h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Profesional Laboran K3 (150) dan Profesional Pustakawan DDC (150).
                  </p>
                </div>
                <span className="self-start sm:self-auto rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900 border border-amber-200">
                  ✓ 300 Soal Siap Uji
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { catId: 'laboran', id: 'profesional', name: 'Profesional Laboran Madrasah', icon: Atom, desc: 'Protokol K3, penanganan tumpahan kimia, MSDS/GHS, kalibrasi mikroskop, dan manajemen praktikum sains.' },
                  { catId: 'pustakawan', id: 'profesional', name: 'Profesional Pustakawan Madrasah', icon: Library, desc: 'Klasifikasi DDC 297 keislaman, otomasi SLiMS/Inlislite, preservasi fisik koleksi, dan literasi informasi.' }
                ].map((item) => {
                  const allowed = !isNoAccess && canAccess(currentUser, 'MI', item.catId, item.id);
                  const Icon = item.icon;
                  return (
                    <div key={item.catId} className={`group relative overflow-hidden rounded-2xl border p-5 transition-all ${
                      allowed ? 'border-slate-200 bg-white hover:border-amber-500 hover:shadow-lg' : 'border-slate-200 bg-slate-50/70 opacity-80'
                    }`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${
                          allowed ? 'bg-amber-50 text-amber-700 ring-amber-100 group-hover:scale-105' : 'bg-slate-100 text-slate-400 ring-slate-200'
                        } transition-transform`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${
                          allowed ? 'bg-amber-50 text-amber-800 border-amber-200' : 'bg-slate-100 text-slate-500 border-slate-200'
                        }`}>
                          {allowed ? '150 Soal' : '🔒 Terkunci'}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 line-clamp-2">{item.desc}</p>
                      <div className="mt-5 flex items-center gap-2">
                        <button
                          onClick={() => handleOpenSubjectGuarded(item.catId, item.id, 'practice', item.name)}
                          className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold transition-colors cursor-pointer ${
                            allowed ? 'bg-amber-50 text-amber-700 hover:bg-amber-100' : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          <Play className="h-3.5 w-3.5" />
                          Latihan
                        </button>
                        <button
                          onClick={() => handleOpenSubjectGuarded(item.catId, item.id, 'simulation', item.name)}
                          className={`flex items-center justify-center rounded-xl p-2 transition-colors cursor-pointer ${
                            allowed ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-slate-100 text-slate-300'
                          }`}
                          title="Simulasi CBT"
                        >
                          <Timer className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Remedial & Weakness Section */}
        {wrongQuestionCount > 0 && !isNoAccess && (
          <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white font-bold">
                <RotateCcw className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Bank Soal Keliru / Perlu Remedial ({wrongQuestionCount} Soal)
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Anda memiliki butir soal yang sebelumnya dijawab keliru. Perkuat pemahaman dengan latihan khusus remedial.
                </p>
              </div>
            </div>

            <button
              onClick={() => handleGuardedAction(() => onStartSession('remedial', 'practice'))}
              className="shrink-0 flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-amber-700 shadow-xs transition-all cursor-pointer"
            >
              <Play className="h-3.5 w-3.5" />
              Latihan Soal Keliru
            </button>
          </div>
        )}

        {/* Bottom Actions & Disclaimer */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigateTab('history')}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <BarChart3 className="h-4 w-4 text-slate-500" />
              Riwayat & Evaluasi Nilai
            </button>
          </div>

          <p className="text-[11px] text-slate-400 max-w-md text-left sm:text-right leading-relaxed">
            AKGTK Smart Practice merupakan platform latihan dan simulasi mandiri. Bukan situs resmi AKGTK/Kementerian Agama.
          </p>
        </div>
      </div>

      {/* Info Dialog for Notice / Empty / Locked Category */}
      {noticeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-slate-200">
            <button
              onClick={() => setNoticeModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                noticeModal.status === 'LOCKED' || noticeModal.status === 'NO_ACCESS' 
                  ? 'bg-rose-100 text-rose-600' 
                  : 'bg-amber-100 text-amber-600'
              }`}>
                {noticeModal.status === 'LOCKED' || noticeModal.status === 'NO_ACCESS' ? (
                  <Lock className="h-5 w-5" />
                ) : (
                  <Clock className="h-5 w-5" />
                )}
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {noticeModal.title}
                </h3>
                {noticeModal.categoryName && (
                  <p className="text-xs text-slate-500">
                    Modul: {noticeModal.categoryName}
                  </p>
                )}
                {noticeModal.level && (
                  <p className="text-xs text-slate-500">
                    Jenjang: {noticeModal.level}
                  </p>
                )}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
              {noticeModal.message}
            </p>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setNoticeModal(null)}
                className="rounded-xl bg-slate-900 px-5 py-2 text-xs font-bold text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
