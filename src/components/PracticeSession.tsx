import React, { useState, useEffect } from 'react';
import { Question, SessionResult, QuestionCategory } from '../types';
import { QuestionCard } from './QuestionCard';
import { FeedbackPanel } from './FeedbackPanel';
import { api } from '../services/apiClient';
import { 
  ArrowLeft, 
  CheckCircle2, 
  RotateCcw, 
  AlertTriangle, 
  Bookmark, 
  Flag, 
  Loader2, 
  X,
  Send,
  Check
} from 'lucide-react';

interface PracticeSessionProps {
  sessionId: string;
  questions: Question[];
  category: QuestionCategory | 'campuran' | string;
  initialAnswers?: Record<string, string>;
  initialIndex?: number;
  onComplete: (result: SessionResult) => void;
  onExit: () => void;
}

export const PracticeSession: React.FC<PracticeSessionProps> = ({
  sessionId,
  questions,
  category,
  initialAnswers = {},
  initialIndex = 0,
  onComplete,
  onExit
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>(initialAnswers);
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());
  const [isSubmittingFinal, setIsSubmittingFinal] = useState(false);
  const [showEarlyExitModal, setShowEarlyExitModal] = useState(false);

  // Question report modal state
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [reportReason, setReportReason] = useState('');
  const [reportSending, setReportSending] = useState(false);
  const [reportSuccess, setReportSuccess] = useState(false);

  // Load bookmarks
  useEffect(() => {
    api.getBookmarks().then(b => setBookmarkedIds(new Set(b))).catch(() => {});
  }, []);

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  // Restore if already answered previously in this session
  useEffect(() => {
    if (currentQuestion && userAnswers[currentQuestion.id]) {
      setSelectedOption(userAnswers[currentQuestion.id] as any);
      setIsSubmitted(true);
    } else {
      setSelectedOption(null);
      setIsSubmitted(false);
    }
  }, [currentIndex, currentQuestion, userAnswers]);

  const handleSelectOption = (optId: 'A' | 'B' | 'C' | 'D') => {
    if (isSubmitted) return;
    setSelectedOption(optId);
  };

  const handleCheckAnswer = async () => {
    if (!selectedOption || !currentQuestion) return;
    setIsSubmitted(true);
    const newAnswers = {
      ...userAnswers,
      [currentQuestion.id]: selectedOption
    };
    setUserAnswers(newAnswers);

    // Auto-save to server
    try {
      await api.saveAnswer(sessionId, {
        questionId: currentQuestion.id,
        answer: selectedOption,
        currentIndex
      });
    } catch {
      // ignore
    }
  };

  const handleNext = async () => {
    if (isLastQuestion) {
      setIsSubmittingFinal(true);
      try {
        const finalAnswers = {
          ...userAnswers,
          [currentQuestion.id]: selectedOption || ''
        };
        const { result } = await api.submitSession(sessionId, finalAnswers);
        onComplete(result);
      } catch (err: any) {
        alert(err.message || 'Gagal menyimpan hasil latihan.');
        setIsSubmittingFinal(false);
      }
    } else {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setSelectedOption(null);
      setIsSubmitted(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Save index progress
      api.saveAnswer(sessionId, { currentIndex: nextIdx }).catch(() => {});
    }
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

  const answeredCount = Object.keys(userAnswers).length + (currentQuestion && !userAnswers[currentQuestion.id] && selectedOption ? 1 : 0);
  const unansweredCount = Math.max(0, questions.length - answeredCount);

  const handleEarlyExit = () => {
    setShowEarlyExitModal(true);
  };

  const handleConfirmEarlyExit = async () => {
    if (isSubmittingFinal) return;
    setIsSubmittingFinal(true);
    try {
      const finalAnswers = { ...userAnswers };
      if (currentQuestion && selectedOption) {
        finalAnswers[currentQuestion.id] = selectedOption;
      }
      // Ensure all questions are accounted for (unanswered are empty string)
      for (const q of questions) {
        if (!finalAnswers[q.id]) {
          finalAnswers[q.id] = '';
        }
      }
      const { result } = await api.submitSession(sessionId, finalAnswers);
      setShowEarlyExitModal(false);
      onComplete(result);
    } catch {
      setIsSubmittingFinal(false);
      setShowEarlyExitModal(false);
      onExit();
    }
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
      alert('Gagal mengirim laporan.');
    } finally {
      setReportSending(false);
    }
  };

  const progressPercentage = Math.round(((currentIndex + (isSubmitted ? 1 : 0)) / questions.length) * 100);

  return (
    <div className="min-h-screen bg-slate-50/60 pb-16">
      {/* Top Session Bar */}
      <div className="sticky top-16 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md px-4 py-3 shadow-xs">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={handleEarlyExit}
              className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Selesai Lebih Awal</span>
            </button>
            <div className="h-4 w-[1px] bg-slate-200" />
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Mode Latihan Mandiri
            </span>
          </div>

          <div className="flex items-center gap-3 w-48 sm:w-64">
            <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span className="text-xs font-bold text-slate-600 shrink-0">
              {currentIndex + 1} / {questions.length}
            </span>
          </div>
        </div>
      </div>

      {/* Main Question Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 space-y-6">
        {currentQuestion && (
          <>
            <div className="relative">
              <QuestionCard
                question={currentQuestion}
                index={currentIndex}
                totalQuestions={questions.length}
                selectedOptionId={selectedOption || undefined}
                onSelectOption={handleSelectOption}
                isSubmitted={isSubmitted}
              />

              {/* Toolbar: Bookmark & Report */}
              <div className="mt-2.5 flex items-center justify-between text-xs px-1">
                <button
                  onClick={handleToggleBookmark}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                    bookmarkedIds.has(currentQuestion.id)
                      ? 'bg-emerald-100 text-emerald-800 font-bold'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Bookmark className={`h-3.5 w-3.5 ${bookmarkedIds.has(currentQuestion.id) ? 'fill-emerald-600' : ''}`} />
                  <span>{bookmarkedIds.has(currentQuestion.id) ? 'Disimpan di Favorit' : 'Simpan Butir Ini'}</span>
                </button>

                <button
                  onClick={() => setReportModalOpen(true)}
                  className="flex items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <Flag className="h-3.5 w-3.5" />
                  <span>Laporkan Soal</span>
                </button>
              </div>
            </div>

            {/* Bottom Action / Feedback Area */}
            {!isSubmitted ? (
              <div className="flex justify-end pt-2">
                <button
                  onClick={handleCheckAnswer}
                  disabled={!selectedOption}
                  className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-emerald-700 active:scale-95 disabled:opacity-40 disabled:scale-100 shadow-md transition-all cursor-pointer"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Periksa Jawaban & Pembahasan</span>
                </button>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in duration-300">
                <FeedbackPanel
                  question={currentQuestion}
                  selectedOptionId={selectedOption || 'A'}
                  onNextQuestion={handleNext}
                  isLastQuestion={isLastQuestion}
                />

                {isLastQuestion && isSubmittingFinal && (
                  <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200 text-center text-xs font-bold text-indigo-700 flex items-center justify-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Menyimpan ringkasan latihan ke akun Anda...
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>

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
                <Check className="h-5 w-5 text-emerald-600 shrink-0" />
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
                    placeholder="Contoh: Terdapat salah ketik pada opsi B, atau stimulus kurang lengkap..."
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

      {/* Selesai Lebih Awal Confirmation Modal */}
      {showEarlyExitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-slate-200">
            <button
              onClick={() => !isSubmittingFinal && setShowEarlyExitModal(false)}
              disabled={isSubmittingFinal}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 disabled:opacity-30 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600 shrink-0">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Selesaikan Latihan?
                </h3>
                <p className="text-xs text-slate-500">Konfirmasi pengumpulan sesi latihan mandiri</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
              {unansweredCount > 0
                ? "Masih ada soal yang belum dijawab. Apakah Anda yakin ingin menyelesaikan latihan sekarang?"
                : "Semua soal telah dijawab. Apakah Anda yakin ingin menyelesaikan latihan sekarang?"}
            </p>

            {/* Useful counts */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-center">
                <span className="text-[11px] font-bold text-emerald-700 block">Sudah Dijawab</span>
                <span className="text-xl font-black text-emerald-800">{answeredCount}</span>
                <span className="text-[10px] text-emerald-600 block">dari {questions.length} soal</span>
              </div>
              <div className="rounded-xl bg-amber-50 border border-amber-200 p-3 text-center">
                <span className="text-[11px] font-bold text-amber-700 block">Belum Dijawab</span>
                <span className="text-xl font-black text-amber-800">{unansweredCount}</span>
                <span className="text-[10px] text-amber-600 block">soal tersisa</span>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                disabled={isSubmittingFinal}
                onClick={() => setShowEarlyExitModal(false)}
                className="flex-1 rounded-xl border border-slate-200 bg-white py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-50 transition-colors cursor-pointer"
              >
                BATAL
              </button>
              <button
                type="button"
                disabled={isSubmittingFinal}
                onClick={handleConfirmEarlyExit}
                className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 active:scale-95 disabled:opacity-50 transition-all cursor-pointer shadow-md"
              >
                {isSubmittingFinal ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Menyimpan...</span>
                  </>
                ) : (
                  <span>YA, SELESAIKAN</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
