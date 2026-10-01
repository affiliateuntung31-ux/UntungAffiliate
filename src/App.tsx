import React, { useState, useEffect } from 'react';
import { Question, SessionResult, QuestionCategory, QuestionDifficulty, AuthUser, ActiveSessionData, EducationLevel } from './types';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { PracticeSession } from './components/PracticeSession';
import { SimulationSession } from './components/SimulationSession';
import { ResultView } from './components/ResultView';
import { HistoryView } from './components/HistoryView';
import { QuestionManager } from './components/QuestionManager';
import { PracticeSetupModal } from './components/PracticeSetupModal';
import { AuthModal } from './components/AuthModal';
import { PublicLanding } from './components/PublicLanding';
import { MemberAccessModal } from './components/MemberAccessModal';
import { api } from './services/apiClient';
import { redirectToCheckout } from './constants';
import { canAccess } from './categoryEngine';
import { GraduationCap, ShieldCheck, Play, X, RotateCcw, ShieldAlert } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'dashboard' | 'practice' | 'simulation' | 'history' | 'admin'>('dashboard');
  
  // Auth state
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalInitialTab, setAuthModalInitialTab] = useState<'code' | 'login' | 'admin' | 'register' | 'demo'>('code');
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Security route protection & member access modal
  const [accessDeniedMessage, setAccessDeniedMessage] = useState<string | null>(null);
  const [isMemberAccessModalOpen, setIsMemberAccessModalOpen] = useState(false);
  const [memberAccessReason, setMemberAccessReason] = useState<string | undefined>(undefined);

  // Active session states
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [activeSessionMode, setActiveSessionMode] = useState<'practice' | 'simulation' | null>(null);
  const [activeCategory, setActiveCategory] = useState<QuestionCategory | 'campuran' | string>('campuran');
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const [activeInitialAnswers, setActiveInitialAnswers] = useState<Record<string, string>>({});
  const [activeInitialFlagged, setActiveInitialFlagged] = useState<Record<string, boolean>>({});
  const [activeInitialIndex, setActiveInitialIndex] = useState<number>(0);
  const [activeInitialTimeLeft, setActiveInitialTimeLeft] = useState<number | undefined>(undefined);

  // Unfinished session prompt
  const [pendingActiveSession, setPendingActiveSession] = useState<ActiveSessionData | null>(null);

  // Result state
  const [currentResult, setCurrentResult] = useState<SessionResult | null>(null);

  // Setup modal state
  const [isSetupOpen, setIsSetupOpen] = useState(false);
  const [sessionErrorMessage, setSessionErrorMessage] = useState<string | null>(null);
  const [setupConfig, setSetupConfig] = useState<{
    initialMode: 'practice' | 'simulation';
    initialCategory?: QuestionCategory | 'campuran' | 'remedial' | string;
    educationLevel?: EducationLevel;
    catId?: string;
  }>({
    initialMode: 'practice',
    initialCategory: 'campuran',
    educationLevel: 'MI'
  });

  const checkRouteAccess = (user: AuthUser | null) => {
    const pathname = window.location.pathname;
    const protectedRoutes = ['/latihan', '/simulasi', '/belajar', '/dashboard', '/questions', '/history'];
    const isProtected = protectedRoutes.includes(pathname);
    const isMember = user && !user.isGuest && user.status === 'ACTIVE';
    const hasAdmin = user && (user.role === 'ADMIN' || user.role === 'SUPER_ADMIN');

    if (pathname === '/admin') {
      if (hasAdmin) {
        setCurrentTab('admin');
        setAccessDeniedMessage(null);
      } else {
        window.history.replaceState({}, '', '/');
        setCurrentTab('dashboard');
        setAccessDeniedMessage('Anda tidak memiliki akses ke halaman Admin.');
      }
      return;
    }

    // Check deep routes like /practice/:level/:category/:subject or /simulasi/:level/:category/:subject
    const pathParts = pathname.split('/').filter(Boolean);
    if (pathParts.length >= 2 && ['practice', 'simulation', 'latihan', 'simulasi'].includes(pathParts[0].toLowerCase())) {
      const mode = (pathParts[0].toLowerCase() === 'simulation' || pathParts[0].toLowerCase() === 'simulasi') ? 'simulation' : 'practice';
      const rawLevel = pathParts[1]?.toUpperCase();
      const level = rawLevel === 'MTS' ? 'MTs' : (rawLevel === 'MA' ? 'MA' : 'MI');
      const category = pathParts[2] ? pathParts[2].replace(/-/g, '_') : undefined;
      const subject = pathParts[3] ? pathParts[3].replace(/-/g, '_') : undefined;

      if (!isMember && !hasAdmin) {
        window.history.replaceState({}, '', '/');
        setCurrentTab('dashboard');
        setMemberAccessReason('Untuk mulai mengerjakan latihan dan simulasi AKGTK, silakan dapatkan akses terlebih dahulu.');
        setIsMemberAccessModalOpen(true);
        return;
      }

      const allowed = canAccess(user, level, category, subject);
      if (!allowed) {
        window.history.replaceState({}, '', '/');
        setCurrentTab('dashboard');
        setSessionErrorMessage(`Akses Ditolak: Akun Anda belum memiliki izin untuk mengakses modul ${subject || category || ''} pada jenjang ${level}.`);
        return;
      }

      handleOpenSetup(mode, subject || category || 'campuran');
      return;
    }

    if (isProtected) {
      if (!isMember && !hasAdmin) {
        // Redirect unauthenticated/guest visitor to public information page
        window.history.replaceState({}, '', '/');
        setCurrentTab('dashboard');
        setMemberAccessReason('Untuk mulai mengerjakan latihan dan simulasi AKGTK, silakan dapatkan akses terlebih dahulu.');
        setIsMemberAccessModalOpen(true);
      } else {
        if (pathname === '/history') {
          setCurrentTab('history');
        } else if (pathname === '/latihan' || pathname === '/belajar') {
          handleOpenSetup('practice', 'campuran');
        } else if (pathname === '/simulasi') {
          handleOpenSetup('simulation', 'campuran');
        }
      }
    }
  };

  // Initialize Auth, URL Route Guard & Network listeners
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Load initial user session
    api.getProfile()
      .then(user => {
        if (!user || user.isGuest) {
          // Clear guest or missing session
          setCurrentUser(null);
          checkRouteAccess(null);
        } else {
          setCurrentUser(user);
          checkRouteAccess(user);
          checkForActiveSession();
        }
      })
      .catch(() => {
        setCurrentUser(null);
        checkRouteAccess(null);
      });

    // Listen for browser Back / Forward buttons (popstate)
    const handlePopState = () => {
      const user = api.getCurrentUser();
      checkRouteAccess(user);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const checkForActiveSession = async () => {
    try {
      const res = await api.getActiveSession();
      if (res && res.activeSession && res.activeSession.questions && res.activeSession.questions.length > 0) {
        setPendingActiveSession(res.activeSession);
      }
    } catch {
      // ignore
    }
  };

  const handleResumePendingSession = () => {
    if (!pendingActiveSession) return;
    setActiveSessionId(pendingActiveSession.sessionId);
    setActiveSessionMode(pendingActiveSession.mode);
    setActiveCategory(pendingActiveSession.category);
    setSessionQuestions(pendingActiveSession.questions);
    setActiveInitialAnswers(pendingActiveSession.userAnswers || {});
    setActiveInitialFlagged(pendingActiveSession.flaggedQuestions || {});
    setActiveInitialIndex(pendingActiveSession.currentIndex || 0);
    setActiveInitialTimeLeft(pendingActiveSession.timeLeft || pendingActiveSession.remainingSeconds);
    setPendingActiveSession(null);
    setCurrentResult(null);
  };

  const handleDiscardPendingSession = () => {
    setPendingActiveSession(null);
  };

  // Open setup modal
  const handleOpenSetup = (
    initialMode: 'practice' | 'simulation',
    initialCategory: QuestionCategory | 'campuran' | 'remedial' | string = 'campuran',
    initialEducationLevel?: EducationLevel,
    initialCatId?: string
  ) => {
    const isMember = currentUser && !currentUser.isGuest && currentUser.status === 'ACTIVE';
    const isAdmin = currentUser?.role === 'ADMIN' || currentUser?.role === 'SUPER_ADMIN';

    if (!isMember && !isAdmin) {
      setMemberAccessReason('Untuk mulai mengerjakan latihan dan simulasi AKGTK, silakan dapatkan akses terlebih dahulu.');
      setIsMemberAccessModalOpen(true);
      return;
    }

    if (currentUser?.status === 'EXPIRED') {
      redirectToCheckout();
      return;
    }

    setSetupConfig({ 
      initialMode, 
      initialCategory, 
      educationLevel: initialEducationLevel || 'MI', 
      catId: initialCatId 
    });
    setIsSetupOpen(true);
  };

  // Launch a session with selected parameters via API
  const handleStartSession = async (config: {
    mode: 'practice' | 'simulation';
    category: QuestionCategory | 'campuran' | 'remedial' | string;
    difficulty: QuestionDifficulty | 'all';
    count: number;
    educationLevel?: EducationLevel;
    subject?: string;
  }) => {
    const isMember = currentUser && !currentUser.isGuest && currentUser.status === 'ACTIVE';
    const isAdmin = currentUser?.role === 'ADMIN' || currentUser?.role === 'SUPER_ADMIN';

    if (!isMember && !isAdmin) {
      setIsSetupOpen(false);
      setMemberAccessReason('Untuk mulai mengerjakan latihan dan simulasi AKGTK, silakan dapatkan akses terlebih dahulu.');
      setIsMemberAccessModalOpen(true);
      return;
    }

    if (currentUser?.status === 'EXPIRED') {
      setIsSetupOpen(false);
      redirectToCheckout();
      return;
    }

    setIsSetupOpen(false);
    try {
      const res = await api.startSession({
        mode: config.mode,
        category: config.category,
        difficulty: config.difficulty,
        count: config.count,
        educationLevel: config.educationLevel || setupConfig.educationLevel || 'MI',
        subject: config.subject
      });

      setActiveSessionId(res.sessionId);
      setActiveSessionMode(res.mode);
      setActiveCategory(res.category);
      setSessionQuestions(res.questions);
      setActiveInitialAnswers({});
      setActiveInitialFlagged({});
      setActiveInitialIndex(0);
      setActiveInitialTimeLeft(res.remainingSeconds || res.totalSeconds);
      setCurrentResult(null);
      setPendingActiveSession(null);

      // Clean URL if exiting admin
      if (window.location.pathname === '/admin') {
        window.history.pushState({}, '', '/');
      }
    } catch (err: any) {
      setSessionErrorMessage(err.message || 'Gagal memulai sesi baru.');
    }
  };

  // Quick start from dashboard cards
  const handleQuickStart = (
    category: QuestionCategory | 'campuran' | 'remedial' | string, 
    mode: 'practice' | 'simulation',
    educationLevel?: EducationLevel
  ) => {
    const isMember = currentUser && !currentUser.isGuest && currentUser.status === 'ACTIVE';
    const isAdmin = currentUser?.role === 'ADMIN' || currentUser?.role === 'SUPER_ADMIN';

    if (!isMember && !isAdmin) {
      setMemberAccessReason('Untuk mulai mengerjakan latihan dan simulasi AKGTK, silakan dapatkan akses terlebih dahulu.');
      setIsMemberAccessModalOpen(true);
      return;
    }

    if (currentUser?.status === 'EXPIRED') {
      redirectToCheckout();
      return;
    }

    if (category === 'remedial') {
      handleOpenSetup('practice', 'remedial', educationLevel);
    } else if (category === 'campuran' && mode === 'simulation') {
      handleOpenSetup('simulation', 'campuran', educationLevel);
    } else {
      handleOpenSetup(mode, category, educationLevel);
    }
  };

  // Session completion handler
  const handleSessionComplete = (result: SessionResult) => {
    setCurrentResult(result);
    setActiveSessionMode(null);
    setActiveSessionId(null);
    setPendingActiveSession(null);
  };

  // Premature exit from session
  const handleExitSession = () => {
    setActiveSessionMode(null);
    setActiveSessionId(null);
    setPendingActiveSession(null);
    setCurrentTab('dashboard');
  };

  // Restart identical session
  const handleRestartSession = () => {
    if (!currentResult) return;
    handleStartSession({
      mode: currentResult.mode,
      category: currentResult.category,
      difficulty: 'all',
      count: currentResult.total
    });
  };

  // Start targeted remedial for wrong answers
  const handleStartRemedial = () => {
    handleOpenSetup('practice', 'remedial');
  };

  const handleBackToHome = () => {
    if (window.location.pathname === '/admin') {
      window.history.pushState({}, '', '/');
    }
    setCurrentResult(null);
    setActiveSessionMode(null);
    setActiveSessionId(null);
    setCurrentTab('dashboard');
  };

  const handleLogout = async () => {
    await api.logout();
    setCurrentUser(null);
    window.history.pushState({}, '', '/');
    handleBackToHome();
  };

  const isAdmin = currentUser?.role === 'ADMIN' || currentUser?.role === 'SUPER_ADMIN';
  const isMember = currentUser && !currentUser.isGuest && currentUser.status === 'ACTIVE';

  const handleOpenAuth = (tab: 'code' | 'login' | 'admin' | 'register' | 'demo' = 'code') => {
    setAuthModalInitialTab(tab);
    setIsAuthModalOpen(true);
  };

  const handleAuthSuccess = (user: AuthUser, redirectToAdmin: boolean = false) => {
    setCurrentUser(user);
    setIsAuthModalOpen(false);
    setIsMemberAccessModalOpen(false);
    if (redirectToAdmin && (user.role === 'ADMIN' || user.role === 'SUPER_ADMIN')) {
      window.history.pushState({}, '', '/admin');
      setCurrentTab('admin');
    } else {
      window.history.pushState({}, '', '/');
      setCurrentTab('dashboard');
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
      {/* Navigation Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={(tab) => {
          if (tab === 'admin') {
            if (!isAdmin) {
              window.history.replaceState({}, '', '/');
              setCurrentTab('dashboard');
              setAccessDeniedMessage('Anda tidak memiliki akses ke halaman Admin.');
              return;
            }
            window.history.pushState({}, '', '/admin');
            setCurrentTab('admin');
            setAccessDeniedMessage(null);
            return;
          }

          // Protect practice, simulation, history for non-members
          if (!isMember && !isAdmin && (tab === 'practice' || tab === 'simulation' || tab === 'history')) {
            setMemberAccessReason('Untuk mulai mengerjakan latihan dan simulasi AKGTK, silakan dapatkan akses terlebih dahulu.');
            setIsMemberAccessModalOpen(true);
            return;
          }

          if (window.location.pathname === '/admin') {
            window.history.pushState({}, '', '/');
          }

          setCurrentResult(null);
          setCurrentTab(tab);
          if (tab === 'practice' && !activeSessionMode) {
            handleOpenSetup('practice', 'campuran');
          } else if (tab === 'simulation' && !activeSessionMode) {
            handleOpenSetup('simulation', 'campuran');
          }
        }}
        activeSessionMode={activeSessionMode}
        onExitSession={handleExitSession}
        currentUser={currentUser}
        onOpenAuth={handleOpenAuth}
        onLogout={handleLogout}
        isOnline={isOnline}
        onRequireMemberAccess={() => {
          setMemberAccessReason('Untuk mulai mengerjakan latihan dan simulasi AKGTK, silakan dapatkan akses terlebih dahulu.');
          setIsMemberAccessModalOpen(true);
        }}
      />

      {/* Security Warning Notification */}
      {accessDeniedMessage && (
        <div className="bg-rose-600 text-white px-4 py-2.5 text-xs font-semibold flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2 max-w-6xl mx-auto w-full">
            <ShieldAlert className="h-4 w-4 shrink-0" />
            <span>{accessDeniedMessage}</span>
          </div>
          <button 
            onClick={() => setAccessDeniedMessage(null)}
            className="text-white hover:text-rose-200 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Resumable Session Alert Prompt */}
      {pendingActiveSession && !activeSessionMode && (
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-4 py-3 shadow-md">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 text-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-300 animate-ping" />
              <span>
                Anda memiliki sesi <strong className="uppercase">{pendingActiveSession.mode}</strong> aktif yang belum diselesaikan (Progress: {Object.keys(pendingActiveSession.userAnswers || {}).length}/{pendingActiveSession.questions.length} soal).
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleResumePendingSession}
                className="rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-emerald-800 hover:bg-emerald-50 active:scale-95 transition-all shadow-xs cursor-pointer"
              >
                Lanjutkan Sesi
              </button>
              <button
                onClick={handleDiscardPendingSession}
                className="rounded-lg bg-emerald-800/60 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-emerald-800 active:scale-95 transition-all cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Router */}
      <div className="flex-1">
        {/* If Active Session is running (Guaranteed Member or Admin only) */}
        {activeSessionMode === 'practice' && sessionQuestions.length > 0 && activeSessionId && (
          <PracticeSession
            sessionId={activeSessionId}
            questions={sessionQuestions}
            category={activeCategory}
            initialAnswers={activeInitialAnswers}
            initialIndex={activeInitialIndex}
            onComplete={handleSessionComplete}
            onExit={handleExitSession}
          />
        )}

        {activeSessionMode === 'simulation' && sessionQuestions.length > 0 && activeSessionId && (
          <SimulationSession
            sessionId={activeSessionId}
            questions={sessionQuestions}
            category={activeCategory}
            initialAnswers={activeInitialAnswers}
            initialFlagged={activeInitialFlagged}
            initialIndex={activeInitialIndex}
            initialTimeLeft={activeInitialTimeLeft}
            onComplete={handleSessionComplete}
            onExit={handleExitSession}
          />
        )}

        {/* If Result View is active */}
        {!activeSessionMode && currentResult && (
          <ResultView
            result={currentResult}
            onRestart={handleRestartSession}
            onRemedial={handleStartRemedial}
            onBackToHome={handleBackToHome}
          />
        )}

        {/* Standard Tabs when no session is active */}
        {!activeSessionMode && !currentResult && (
          <>
            {currentTab === 'dashboard' && (
              !currentUser || currentUser.isGuest ? (
                <PublicLanding 
                  onOpenCodeLogin={() => handleOpenAuth('code')}
                  onOpenAdminLogin={() => handleOpenAuth('admin')}
                />
              ) : (
                <Dashboard
                  onStartSession={handleQuickStart}
                  onOpenSetup={handleOpenSetup}
                  onNavigateTab={(tab) => {
                    if (tab === 'admin') {
                      if (!isAdmin) {
                        window.history.replaceState({}, '', '/');
                        setCurrentTab('dashboard');
                        setAccessDeniedMessage('Anda tidak memiliki akses ke halaman Admin.');
                        return;
                      }
                      window.history.pushState({}, '', '/admin');
                      setCurrentTab('admin');
                      setAccessDeniedMessage(null);
                      return;
                    }
                    setCurrentTab(tab);
                    if (tab === 'practice') handleOpenSetup('practice');
                    if (tab === 'simulation') handleOpenSetup('simulation');
                  }}
                  currentUser={currentUser}
                  onOpenAuth={() => handleOpenAuth('code')}
                />
              )
            )}

            {currentTab === 'history' && (
              (!currentUser || currentUser.isGuest) ? (
                <PublicLanding 
                  onOpenCodeLogin={() => handleOpenAuth('code')}
                  onOpenAdminLogin={() => handleOpenAuth('admin')}
                />
              ) : (
                <HistoryView
                  onSelectResult={(res) => setCurrentResult(res)}
                  onStartNewSession={() => handleOpenSetup('practice')}
                />
              )
            )}

            {currentTab === 'admin' && (
              isAdmin ? (
                <QuestionManager 
                  currentUser={currentUser}
                  onLogout={handleLogout}
                  onBackToDashboard={handleBackToHome} 
                />
              ) : (
                !currentUser || currentUser.isGuest ? (
                  <PublicLanding 
                    onOpenCodeLogin={() => handleOpenAuth('code')}
                    onOpenAdminLogin={() => handleOpenAuth('admin')}
                  />
                ) : (
                  <Dashboard
                    onStartSession={handleQuickStart}
                    onOpenSetup={handleOpenSetup}
                    onNavigateTab={setCurrentTab}
                    currentUser={currentUser}
                    onOpenAuth={() => handleOpenAuth('code')}
                  />
                )
              )
            )}

            {/* If user clicks tab practice / simulation while idle */}
            {(currentTab === 'practice' || currentTab === 'simulation') && (
              (!currentUser || currentUser.isGuest) ? (
                <PublicLanding 
                  onOpenCodeLogin={() => handleOpenAuth('code')}
                  onOpenAdminLogin={() => handleOpenAuth('admin')}
                />
              ) : (
                <Dashboard
                  onStartSession={handleQuickStart}
                  onOpenSetup={handleOpenSetup}
                  onNavigateTab={setCurrentTab}
                  currentUser={currentUser}
                  onOpenAuth={() => handleOpenAuth('code')}
                />
              )
            )}
          </>
        )}
      </div>

      {/* Member Access Modal ("AKSES KHUSUS MEMBER") */}
      <MemberAccessModal
        isOpen={isMemberAccessModalOpen}
        onClose={() => setIsMemberAccessModalOpen(false)}
        onOpenCodeLogin={() => {
          setIsMemberAccessModalOpen(false);
          handleOpenAuth('code');
        }}
        reason={memberAccessReason}
      />

      {/* Setup Config Modal */}
      <PracticeSetupModal
        isOpen={isSetupOpen}
        initialMode={setupConfig.initialMode}
        initialCategory={setupConfig.initialCategory}
        initialEducationLevel={setupConfig.educationLevel}
        initialCatId={setupConfig.catId}
        onClose={() => setIsSetupOpen(false)}
        onStart={handleStartSession}
      />

      {/* Authentication Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuthSuccess={handleAuthSuccess}
        initialTab={authModalInitialTab}
      />
      {/* Session Error Notification Modal */}
      {sessionErrorMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-slate-200">
            <button
              onClick={() => setSessionErrorMessage(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600 shrink-0">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Pemberitahuan Sistem
                </h3>
                <p className="text-xs text-slate-500">Informasi pelaksanaan latihan & simulasi</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
              {sessionErrorMessage}
            </p>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setSessionErrorMessage(null)}
                className="rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Mengerti
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
