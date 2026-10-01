import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Timer, 
  History, 
  Database, 
  Menu, 
  X,
  Sparkles,
  User,
  LogOut,
  Shield,
  WifiOff,
  KeyRound,
  ExternalLink
} from 'lucide-react';
import { AuthUser } from '../types';
import { LYNK_CHECKOUT_URL, redirectToCheckout } from '../constants';

interface HeaderProps {
  currentTab: 'dashboard' | 'practice' | 'simulation' | 'history' | 'admin';
  onSelectTab: (tab: 'dashboard' | 'practice' | 'simulation' | 'history' | 'admin') => void;
  activeSessionMode?: 'practice' | 'simulation' | null;
  onExitSession?: () => void;
  currentUser: AuthUser | null;
  onOpenAuth: (initialTab?: 'code' | 'login' | 'admin' | 'register' | 'demo') => void;
  onLogout: () => void;
  isOnline: boolean;
  onRequireMemberAccess?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  activeSessionMode,
  onExitSession,
  currentUser,
  onOpenAuth,
  onLogout,
  isOnline,
  onRequireMemberAccess
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const isAdmin = currentUser?.role === 'ADMIN' || currentUser?.role === 'SUPER_ADMIN';
  const isMember = currentUser && !currentUser.isGuest && currentUser.status === 'ACTIVE';

  const handleNav = (tab: 'dashboard' | 'practice' | 'simulation' | 'history' | 'admin') => {
    // If user is not an active member or admin, protect practice, simulation, and history
    if (!isMember && !isAdmin && (tab === 'practice' || tab === 'simulation' || tab === 'history')) {
      if (onRequireMemberAccess) {
        onRequireMemberAccess();
      } else {
        redirectToCheckout();
      }
      setMobileMenuOpen(false);
      return;
    }

    if (activeSessionMode && onExitSession) {
      const confirmExit = window.confirm('Sesi latihan sedang berjalan. Apakah Anda yakin ingin keluar ke menu lain?');
      if (!confirmExit) return;
      onExitSession();
    }
    onSelectTab(tab);
    setMobileMenuOpen(false);
  };

  const getRoleBadge = (role?: string, isGuest?: boolean) => {
    if (isGuest) {
      return <span className="rounded-md bg-amber-100 px-1.5 py-0.5 text-[10px] font-bold text-amber-800">TAMU</span>;
    }
    if (role === 'SUPER_ADMIN') {
      return <span className="rounded-md bg-purple-100 px-1.5 py-0.5 text-[10px] font-bold text-purple-800">SUPER ADMIN</span>;
    }
    if (role === 'ADMIN') {
      return <span className="rounded-md bg-indigo-100 px-1.5 py-0.5 text-[10px] font-bold text-indigo-800">ADMIN</span>;
    }
    return <span className="rounded-md bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold text-emerald-800">GURU</span>;
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xs">
      {/* Offline Alert Bar */}
      {!isOnline && (
        <div className="bg-amber-500 px-4 py-1 text-center text-xs font-semibold text-white flex items-center justify-center gap-1.5 animate-pulse">
          <WifiOff className="h-3.5 w-3.5" />
          Koneksi terputus. Jawaban Anda disimpan sementara secara lokal dan akan disinkronkan saat koneksi kembali.
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo & Branding */}
          <div 
            className="flex items-center gap-3 cursor-pointer select-none"
            onClick={() => handleNav('dashboard')}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-sm ring-1 ring-emerald-600/20">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900">
                  AKGTK <span className="text-emerald-600">SMART</span> PRACTICE
                </span>
                <span className="hidden sm:inline-flex items-center gap-0.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200/60">
                  <Sparkles className="h-2.5 w-2.5" /> 2026
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 -mt-0.5">
                Latihan Literasi • Numerasi • Sains Kemenag
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              id="nav-dashboard-btn"
              onClick={() => handleNav('dashboard')}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-all cursor-pointer ${
                currentTab === 'dashboard' && !activeSessionMode
                  ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/80'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              Beranda
            </button>

            <button
              id="nav-practice-btn"
              onClick={() => handleNav('practice')}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-all cursor-pointer ${
                currentTab === 'practice' || activeSessionMode === 'practice'
                  ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/80'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <BookOpen className="h-4 w-4 text-emerald-600" />
              Mode Latihan
            </button>

            <button
              id="nav-simulation-btn"
              onClick={() => handleNav('simulation')}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-all cursor-pointer ${
                currentTab === 'simulation' || activeSessionMode === 'simulation'
                  ? 'bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200/80'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Timer className="h-4 w-4 text-indigo-600" />
              Simulasi CBT
            </button>

            <button
              id="nav-history-btn"
              onClick={() => handleNav('history')}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-all cursor-pointer ${
                currentTab === 'history' && !activeSessionMode
                  ? 'bg-slate-100 text-slate-900 font-bold'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <History className="h-4 w-4 text-slate-500" />
              Riwayat
            </button>

            {/* Admin Panel (Only visible to Admin & Super Admin) */}
            {isAdmin && (
              <button
                id="nav-admin-btn"
                onClick={() => handleNav('admin')}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-all cursor-pointer ${
                  currentTab === 'admin' && !activeSessionMode
                    ? 'bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200/80'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Shield className="h-4 w-4 text-indigo-600" />
                Panel Admin
              </button>
            )}
          </nav>

          {/* User Profile & Auth Trigger */}
          <div className="flex items-center gap-2">
            {currentUser ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50/80 py-1.5 px-3 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-600 text-white font-bold text-xs">
                    {currentUser.name.charAt(0)}
                  </div>
                  <div className="text-left hidden sm:block max-w-[130px] truncate">
                    <p className="text-xs font-bold text-slate-800 truncate">{currentUser.name}</p>
                    <div className="flex items-center gap-1">
                      {getRoleBadge(currentUser.role, currentUser.isGuest)}
                    </div>
                  </div>
                </button>

                {/* Dropdown */}
                {userDropdownOpen && (
                  <div 
                    className="absolute right-0 mt-2 w-64 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-200 z-50 animate-in fade-in"
                    onMouseLeave={() => setUserDropdownOpen(false)}
                  >
                    <div className="border-b border-slate-100 pb-2.5 mb-2">
                      <p className="text-xs font-bold text-slate-900 truncate">{currentUser.name}</p>
                      <p className="text-[11px] text-slate-500 truncate">{currentUser.email}</p>
                      <div className="mt-1.5 flex items-center gap-1">
                        {getRoleBadge(currentUser.role, currentUser.isGuest)}
                        {currentUser.isGuest && (
                          <span className="text-[10px] text-amber-600 font-medium">Sesi Terisolasi</span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1">
                      {isAdmin ? (
                        <button
                          onClick={() => {
                            setUserDropdownOpen(false);
                            handleNav('admin');
                          }}
                          className="w-full flex items-center gap-2 rounded-lg px-2.5 py-2 text-left text-xs font-semibold text-indigo-700 bg-indigo-50/60 hover:bg-indigo-100 transition-colors"
                        >
                          <Shield className="h-4 w-4 text-indigo-600" />
                          Buka Panel Admin
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setUserDropdownOpen(false);
                            onOpenAuth('admin');
                          }}
                          className="w-full flex items-center gap-2 rounded-lg px-2.5 py-2 text-left text-xs font-semibold text-purple-700 hover:bg-purple-50 transition-colors"
                        >
                          <Shield className="h-4 w-4 text-purple-600" />
                          Masuk Admin
                        </button>
                      )}

                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          onOpenAuth('login');
                        }}
                        className="w-full flex items-center gap-2 rounded-lg px-2.5 py-2 text-left text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                      >
                        <User className="h-4 w-4 text-slate-400" />
                        Ganti / Masuk Akun Lain
                      </button>

                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          onLogout();
                        }}
                        className="w-full flex items-center gap-2 rounded-lg px-2.5 py-2 text-left text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors"
                      >
                        <LogOut className="h-4 w-4 text-rose-500" />
                        Keluar Aman
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <a
                  href={LYNK_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-2 text-xs font-extrabold text-white shadow-sm hover:bg-emerald-700 transition-all cursor-pointer active:scale-95"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>DAPATKAN AKSES</span>
                </a>

                <button
                  onClick={() => onOpenAuth('code')}
                  className="flex items-center gap-1.5 rounded-xl border border-emerald-300 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition-colors cursor-pointer"
                >
                  <KeyRound className="h-3.5 w-3.5 text-emerald-600" />
                  <span className="hidden sm:inline">Masuk dengan Kode</span>
                  <span className="sm:hidden">Kode</span>
                </button>

                <button
                  onClick={() => onOpenAuth('admin')}
                  className="hidden md:flex items-center gap-1 rounded-xl border border-purple-200 bg-purple-50/60 px-2.5 py-2 text-xs font-bold text-purple-800 hover:bg-purple-100 transition-colors cursor-pointer"
                >
                  <Shield className="h-3.5 w-3.5 text-purple-600" />
                  Admin
                </button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 shadow-lg">
          <div className="space-y-1">
            <button
              onClick={() => handleNav('dashboard')}
              className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium ${
                currentTab === 'dashboard' ? 'bg-emerald-50 text-emerald-700 font-bold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Beranda
            </button>

            <button
              onClick={() => handleNav('practice')}
              className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium ${
                currentTab === 'practice' ? 'bg-emerald-50 text-emerald-700 font-bold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <BookOpen className="h-4 w-4 text-emerald-600" />
              Mode Latihan (Instant Feedback)
            </button>

            <button
              onClick={() => handleNav('simulation')}
              className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium ${
                currentTab === 'simulation' ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Timer className="h-4 w-4 text-indigo-600" />
              Simulasi Ujian CBT
            </button>

            <button
              onClick={() => handleNav('history')}
              className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium ${
                currentTab === 'history' ? 'bg-slate-100 text-slate-900 font-bold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <History className="h-4 w-4 text-slate-500" />
              Riwayat & Analisis
            </button>

            {isAdmin ? (
              <button
                onClick={() => handleNav('admin')}
                className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium ${
                  currentTab === 'admin' ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Shield className="h-4 w-4 text-indigo-600" />
                Panel Admin (Bank Soal & AI)
              </button>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('admin');
                }}
                className="w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-purple-700 hover:bg-purple-50"
              >
                <Shield className="h-4 w-4 text-purple-600" />
                Masuk Admin (Pengelola)
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
