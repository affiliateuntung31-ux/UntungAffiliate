import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Question, SessionResult, QuestionCategory } from '../types';
import { QuestionCard } from './QuestionCard';
import { api } from '../services/apiClient';
import { 
  Timer, 
  ChevronLeft, 
  ChevronRight, 
  Send, 
  AlertCircle, 
  LayoutGrid, 
  Check, 
  Bookmark,
  X,
  Flag,
  Loader2,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

interface SimulationSessionProps {
  sessionId: string;
  questions: Question[];
  category: QuestionCategory | 'campuran' | string;
  initialAnswers?: Record<string, string>;
  initialFlagged?: Record<string, boolean>;
  initialIndex?: number;
  initialTimeLeft?: number;
  onComplete: (result: SessionResult) => void;
  onExit: () => void;
}

export const SimulationSession: React.FC<SimulationSessionProps> = ({
  sessionId,
  questions,
  category,
  initialAnswers = {},
  initialFlagged = {},
  initialIndex = 0,
  initialTimeLeft,
  onComplete,
  onExit
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>(initialAnswers);
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>(initialFlagged);
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());

  // Timer calculation
  const totalSecondsInitial = initialTimeLeft !== undefined ? initialTimeLeft : questions.length * 90;
  const [timeLeft, setTimeLeft] = useState(totalSecondsInitial);

  // States
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showGridMobile, setShowGridMobile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving' | 'error'>('saved');

  // Question Report Modal
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [reportReason, setReportReason] = useState('');
  const [reportSending, setReportSending] = useState(false);
  const [reportSuccess, setReportSuccess] = useState(false);

  // Load bookmarks
  useEffect(() => {
    api.getBookmarks().then(b => setBookmarkedIds(new Set(b))).catch(() => {});
  }, []);

  // Debounced auto-save ref
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const triggerAutoSave = (qId?: string, ans?: string, flag?: boolean, idx?: number) => {
    setSaveStatus('saving');
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);

    saveTimeoutRef.current = setTimeout(async () => {
      try {
        await api.saveAnswer(sessionId, {
          questionId: qId,
          answer: ans,
          isFlagged: flag,
          currentIndex: idx !== undefined ? idx : currentIndex
        });
        setSaveStatus('saved');
      } catch (e) {
        setSaveStatus('error');
      }
    }, 400);
  };

  // Submit test with double-submit protection
  const handleSubmitTest = useCallback(async () => {
    if (isSubmitting) return; // double submit prevention
    setIsSubmitting(true);

    try {
      const { result } = await api.submitSession(sessionId, userAnswers);
      onComplete(result);
    } catch (err: any) {
      alert(err.message || 'Gagal mengumpulkan lembar jawaban. Silakan coba kembali.');
      setIsSubmitting(false);
    }
  }, [sessionId, userAnswers, isSubmitting, onComplete]);

  // Countdown timer effect
  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmitTest();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, handleSubmitTest]);

  const currentQuestion = questions[currentIndex];

  const handleSelectOption = (optId: 'A' | 'B' | 'C' | 'D') => {
    if (!currentQuestion) return;
    const newAnswers = {
      ...userAnswers,
      [currentQuestion.id]: optId
    };
    setUserAnswers(newAnswers);
    triggerAutoSave(currentQuestion.id, optId, flaggedQuestions[currentQuestion.id], currentIndex);
  };

  const handleToggleFlag = () => {
    if (!currentQuestion) return;
    const newFlagVal = !flaggedQuestions[currentQuestion.id];
    setFlaggedQuestions(prev => ({
      ...prev,
      [currentQuestion.id]: newFlagVal
    }));
    triggerAutoSave(currentQuestion.id, userAnswers[currentQuestion.id], newFlagVal, currentIndex);
  };

  const handleToggleBookmark = async () => {
    if (!currentQuestion) return;
    try {
      const res = await api.toggleBookmark(currentQuestion.id);
      setBookmarkedIds(new Set(res.bookmarks));
    } catch {
      // ignore
    }
  };

  const handleNavigateIndex = (idx: number) => {
    setCurrentIndex(idx);
    triggerAutoSave(undefined, undefined, undefined, idx);
    setShowGridMobile(false);
  };

  const handleSendReport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentQuestion || !reportReason.trim()) return;
    setReportSending(true);
    try {
      await api.reportQuestion(currentQuestion.id, reportReason);
      setReportSuccess(true);
      setTimeout(() => {
        setReportSuccess(false);
        setReportModalOpen(false);
        setReportReason('');
      }, 1500);
    } catch {
      alert('Gagal mengirim laporan soal.');
    } finally {
      setReportSending(false);
    }
  };

  // Format MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const answeredCount = Object.keys(userAnswers).length;
  const isTimeCritical = timeLeft < 300; // < 5 minutes

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Top Bar Navigation */}
      <header className="sticky top-0 z-30 bg-white border-b border-slate-200 px-4 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-indigo-600 px-2 py-1 text-xs font-bold text-white uppercase">
                CBT AKGTK
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                {category === 'campuran' ? 'Simulasi Campuran' : `Domain: ${category.toUpperCase()}`}
              </span>
            </div>

            {/* Auto-save status indicator */}
            <div className="hidden sm:flex items-center gap-1 text-[11px] font-medium text-slate-500 pl-3 border-l border-slate-200">
              {saveStatus === 'saving' && (
                <>
                  <Loader2 className="h-3 w-3 animate-spin text-indigo-500" />
                  <span>Menyimpan...</span>
                </>
              )}
              {saveStatus === 'saved' && (
                <>
                  <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Tersimpan</span>
                </>
              )}
              {saveStatus === 'error' && (
                <>
                  <AlertTriangle className="h-3 w-3 text-amber-500" />
                  <span className="text-amber-700">Tersimpan lokal</span>
                </>
              )}
            </div>
          </div>

          {/* Center / Right: Timer & Submit */}
          <div className="flex items-center gap-3">
            {/* Timer Badge */}
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-sm sm:text-base font-bold transition-colors ${
              isTimeCritical ? 'bg-rose-50 text-rose-600 ring-1 ring-rose-200 animate-pulse' : 'bg-slate-100 text-slate-800'
            }`}>
              <Timer className="h-4 w-4" />
              <span>{formatTime(timeLeft)}</span>
            </div>

            {/* Mobile Grid Toggle */}
            <button
              onClick={() => setShowGridMobile(!showGridMobile)}
              className="md:hidden rounded-lg p-2 text-slate-600 hover:bg-slate-100"
              title="Daftar Soal"
            >
              <LayoutGrid className="h-5 w-5" />
            </button>

            {/* Submit Button */}
            <button
              id="btn-submit-simulation"
              onClick={() => setShowSubmitModal(true)}
              className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold text-white hover:bg-emerald-700 active:scale-95 shadow-xs transition-all cursor-pointer"
            >
              <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>{answeredCount === questions.length ? 'SELESAI' : 'SELESAI LEBIH AWAL'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left / Center: Active Question Display */}
        <div className="md:col-span-8 lg:col-span-9 flex flex-col space-y-4">
          {currentQuestion && (
            <div className="relative">
              <QuestionCard
                question={currentQuestion}
                index={currentIndex}
                totalQuestions={questions.length}
                selectedOptionId={userAnswers[currentQuestion.id] || undefined}
                onSelectOption={handleSelectOption}
                isSimulation={true}
                isFlagged={flaggedQuestions[currentQuestion.id] || false}
                onToggleFlag={handleToggleFlag}
              />

              {/* Action Toolbar for Active Question */}
              <div className="mt-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleToggleFlag}
                    className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 font-bold transition-all cursor-pointer ${
                      flaggedQuestions[currentQuestion.id]
                        ? 'bg-amber-100 text-amber-900 ring-1 ring-amber-300'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <Bookmark className={`h-3.5 w-3.5 ${flaggedQuestions[currentQuestion.id] ? 'fill-amber-500 text-amber-500' : ''}`} />
                    <span>{flaggedQuestions[currentQuestion.id] ? 'Ditandai Ragu-ragu' : 'Tandai Ragu-ragu'}</span>
                  </button>

                  <button
                    onClick={handleToggleBookmark}
                    className={`flex items-center gap-1 rounded-xl px-2.5 py-1.5 font-semibold transition-all cursor-pointer ${
                      bookmarkedIds.has(currentQuestion.id)
                        ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200'
                        : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'
                    }`}
                    title="Simpan untuk dipelajari nanti"
                  >
                    <Check className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Favorit</span>
                  </button>
                </div>

                <button
                  onClick={() => setReportModalOpen(true)}
                  className="flex items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors"
                  title="Laporkan kesalahan ketik atau kunci jawaban"
                >
                  <Flag className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Laporkan Soal</span>
                </button>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200 shadow-xs mt-auto">
            <button
              onClick={() => handleNavigateIndex(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
              className="flex items-center gap-1 rounded-xl border border-slate-300 px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Sebelumnya</span>
            </button>

            <span className="text-xs font-bold text-slate-600">
              Soal {currentIndex + 1} dari {questions.length}
            </span>

            <button
              onClick={() => handleNavigateIndex(Math.min(questions.length - 1, currentIndex + 1))}
              disabled={currentIndex === questions.length - 1}
              className="flex items-center gap-1 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <span>Selanjutnya</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Right Sidebar: CBT Question Palette */}
        <div className={`md:col-span-4 lg:col-span-3 ${showGridMobile ? 'block' : 'hidden md:block'}`}>
          <div className="sticky top-20 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                <LayoutGrid className="h-4 w-4 text-indigo-600" />
                Lembar Nomor Soal
              </h3>
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                {answeredCount}/{questions.length} Dijawab
              </span>
            </div>

            {/* Question Number Palette Grid */}
            <div className="grid grid-cols-5 gap-2 max-h-[360px] overflow-y-auto p-1">
              {questions.map((q, idx) => {
                const isAnswered = !!userAnswers[q.id];
                const isFlagged = !!flaggedQuestions[q.id];
                const isCurrent = currentIndex === idx;

                return (
                  <button
                    key={q.id}
                    onClick={() => handleNavigateIndex(idx)}
                    className={`relative flex h-10 w-full items-center justify-center rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isCurrent
                        ? 'ring-2 ring-indigo-600 ring-offset-2 scale-105 z-10'
                        : 'hover:scale-102'
                    } ${
                      isFlagged
                        ? 'bg-amber-400 text-slate-900 font-extrabold'
                        : isAnswered
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {idx + 1}
                    {isAnswered && !isFlagged && (
                      <span className="absolute bottom-1 right-1 h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="border-t border-slate-100 pt-3 space-y-1.5 text-[11px] text-slate-500">
              <div className="flex items-center gap-2">
                <div className="h-3.5 w-3.5 rounded bg-indigo-600" />
                <span>Sudah Dijawab ({answeredCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3.5 w-3.5 rounded bg-amber-400" />
                <span>Ragu-ragu ({Object.values(flaggedQuestions).filter(Boolean).length})</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3.5 w-3.5 rounded bg-slate-100 border border-slate-300" />
                <span>Belum Dijawab ({questions.length - answeredCount})</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Submit Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-slate-200 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <Send className="h-7 w-7" />
            </div>

            <h3 className="text-lg font-bold text-slate-900">
              {answeredCount === questions.length ? 'Konfirmasi Selesai Ujian' : 'Konfirmasi Selesai Lebih Awal'}
            </h3>

            <p className="mt-2 text-xs text-slate-500 leading-relaxed">
              Anda telah menjawab <strong className="text-slate-900">{answeredCount}</strong> dari{' '}
              <strong className="text-slate-900">{questions.length}</strong> butir soal.
              {answeredCount < questions.length ? (
                <span className="text-rose-600 block mt-1 font-semibold">
                  ⚠️ Masih terdapat {questions.length - answeredCount} butir soal yang belum dijawab. Apakah Anda yakin ingin menyelesaikan sesi lebih awal?
                </span>
              ) : (
                <span className="text-emerald-700 block mt-1 font-semibold">
                  ✓ Seluruh butir soal telah berhasil dijawab lengkap.
                </span>
              )}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <button
                disabled={isSubmitting}
                onClick={() => setShowSubmitModal(false)}
                className="flex-1 rounded-xl border border-slate-300 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Kembali Memeriksa
              </button>
              <button
                disabled={isSubmitting}
                onClick={handleSubmitTest}
                className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 shadow-md transition-colors cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Menyimpan & Menghitung...</span>
                  </>
                ) : (
                  <span>{answeredCount === questions.length ? 'SELESAI' : 'SELESAI LEBIH AWAL'}</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Question Report Modal */}
      {reportModalOpen && currentQuestion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-slate-200">
            <button
              onClick={() => setReportModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
              <Flag className="h-4 w-4 text-amber-500" />
              Laporkan Butir Soal #{currentQuestion.id}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Bantu tim kurator memperbaiki kualitas butir soal bila terdapat typo atau kesalahan data.
            </p>

            {reportSuccess ? (
              <div className="p-4 bg-emerald-50 rounded-xl text-emerald-800 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                Laporan berhasil dikirim kepada Administrator. Terima kasih atas masukan Anda!
              </div>
            ) : (
              <form onSubmit={handleSendReport} className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Detail Masalah / Koreksi
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Contoh: Terdapat salah ketik pada opsi B, atau rumus di stimulus tidak sesuai..."
                    value={reportReason}
                    onChange={e => setReportReason(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                    required
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setReportModalOpen(false)}
                    className="rounded-xl border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    disabled={reportSending}
                    className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-1.5 text-xs font-bold text-white disabled:opacity-50"
                  >
                    {reportSending ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Send className="h-3.5 w-3.5" />}
                    Kirim Laporan
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
