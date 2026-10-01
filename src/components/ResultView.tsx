import React, { useState } from 'react';
import { SessionResult, Question } from '../types';
import { VisualRenderer } from './VisualRenderer';
import { 
  Trophy, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Home, 
  Printer, 
  BookOpen, 
  TrendingUp, 
  AlertTriangle, 
  ChevronDown, 
  ChevronUp,
  Target,
  Sparkles,
  HelpCircle,
  Calculator,
  Atom
} from 'lucide-react';

interface ResultViewProps {
  result: SessionResult;
  onRestart: () => void;
  onRemedial: (wrongQuestions: Question[]) => void;
  onBackToHome: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({
  result,
  onRestart,
  onRemedial,
  onBackToHome
}) => {
  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong' | 'correct'>('all');
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});

  const toggleExpand = (qId: string) => {
    setExpandedQuestions(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const getStatusDetails = (percentage: number) => {
    if (percentage >= 85) {
      return {
        label: 'Sangat Kompeten (Mahir)',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-300',
        desc: 'Pemahaman konsep, penalaran tingkat tinggi (HOTS), dan akurasi Anda sangat istimewa.'
      };
    } else if (percentage >= 70) {
      return {
        label: 'Kompeten (Cakap)',
        color: 'text-blue-700 bg-blue-50 border-blue-300',
        desc: 'Telah melampaui batas kompetensi minimum dengan penguasaan materi yang baik.'
      };
    } else if (percentage >= 55) {
      return {
        label: 'Cukup (Dasar)',
        color: 'text-amber-700 bg-amber-50 border-amber-300',
        desc: 'Memerlukan latihan tambahan pada beberapa indikator kompetensi penalaran.'
      };
    } else {
      return {
        label: 'Perlu Pembinaan Intensif',
        color: 'text-rose-700 bg-rose-50 border-rose-300',
        desc: 'Disarankan mengulang latihan per topik untuk memperkuat fondasi konsep literasi/numerasi/sains.'
      };
    }
  };

  const status = getStatusDetails(result.percentage);

  // Filtered review questions
  const filteredQuestions = result.questions.filter(q => {
    const isCorrect = result.userAnswers[q.id] === q.correctAnswer;
    if (reviewFilter === 'wrong') return !isCorrect;
    if (reviewFilter === 'correct') return isCorrect;
    return true;
  });

  const wrongQuestionsList = result.questions.filter(q => result.userAnswers[q.id] !== q.correctAnswer);

  return (
    <div className="min-h-screen bg-slate-50/70 pb-20 pt-8 print:bg-white print:p-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Top Summary Banner */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-200 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
            <span>Laporan Hasil Evaluasi AKGTK</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {result.mode === 'simulation' ? 'Simulasi CBT AKGTK' : 'Latihan Mandiri AKGTK'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 capitalize">
            Domain: {result.category} • {new Date(result.date).toLocaleDateString('id-ID', { dateStyle: 'full' })}
          </p>

          {/* Big Score Card */}
          <div className="my-7 flex flex-col items-center justify-center">
            <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-tr from-slate-900 to-slate-800 text-white shadow-xl ring-8 ring-slate-100">
              <div>
                <span className="text-4xl sm:text-5xl font-black tracking-tight">{result.score}</span>
                <span className="text-xs block font-bold text-slate-400 mt-0.5">/ 100</span>
              </div>
            </div>

            <div className={`mt-5 inline-block rounded-xl border px-4 py-1.5 text-sm font-bold ${status.color}`}>
              {status.label}
            </div>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-md">
              {status.desc}
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-100 pt-6">
            <div className="p-3 rounded-xl bg-slate-50">
              <span className="text-xs font-semibold text-slate-500 block">Total Soal</span>
              <span className="text-xl font-bold text-slate-900">{result.total}</span>
            </div>
            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-900">
              <span className="text-xs font-semibold text-emerald-700 block">Jawaban Benar</span>
              <span className="text-xl font-bold text-emerald-800">{result.correct}</span>
            </div>
            <div className="p-3 rounded-xl bg-rose-50 text-rose-900">
              <span className="text-xs font-semibold text-rose-700 block">Jawaban Keliru</span>
              <span className="text-xl font-bold text-rose-800">{result.incorrect}</span>
            </div>
            <div className="p-3 rounded-xl bg-amber-50 text-amber-900">
              <span className="text-xs font-semibold text-amber-700 block">Tidak Dijawab</span>
              <span className="text-xl font-bold text-amber-800">{result.unanswered ?? Math.max(0, result.total - (result.correct + result.incorrect))}</span>
            </div>
          </div>

          {/* Action Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-slate-100 print:hidden">
            <button
              onClick={() => {
                const el = document.getElementById('section-pembahasan');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                const all: Record<string, boolean> = {};
                result.questions.forEach(q => { all[q.id] = true; });
                setExpandedQuestions(all);
              }}
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-emerald-700 shadow-md transition-all cursor-pointer"
            >
              <BookOpen className="h-4 w-4" />
              <span>LIHAT PEMBAHASAN</span>
            </button>

            <button
              onClick={onRestart}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-xs transition-all"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Ulangi Sesi Ini</span>
            </button>

            {wrongQuestionsList.length > 0 && (
              <button
                onClick={() => onRemedial(wrongQuestionsList)}
                className="flex items-center gap-1.5 rounded-xl bg-rose-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-rose-700 shadow-sm transition-all"
              >
                <AlertTriangle className="h-4 w-4" />
                <span>Remedial {wrongQuestionsList.length} Soal Salah</span>
              </button>
            )}

            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-xs transition-all"
            >
              <Printer className="h-4 w-4" />
              <span>Cetak Hasil (PDF)</span>
            </button>

            <button
              onClick={onBackToHome}
              className="flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-800 shadow-sm transition-all"
            >
              <Home className="h-4 w-4" />
              <span>Ke Beranda</span>
            </button>
          </div>
        </div>

        {/* Category Breakdown */}
        {Object.keys(result.categoryBreakdown).length > 0 && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Target className="h-5 w-5 text-indigo-600" />
              <span>Capaian Berdasarkan Domain Kompetensi</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {Object.entries(result.categoryBreakdown).map(([cat, stats]) => (
                <div key={cat} className="rounded-xl border border-slate-100 bg-slate-50 p-4 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-600">
                    <span className="capitalize">{cat}</span>
                    <span className="font-extrabold text-slate-900">{stats.percentage}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        stats.percentage >= 70 ? 'bg-emerald-500' : stats.percentage >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                      }`}
                      style={{ width: `${stats.percentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>Benar: {stats.correct} / {stats.total}</span>
                    <span>{stats.percentage >= 70 ? 'Tuntas' : 'Perlu Latihan'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Competency Strengths & Recommendations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Strengths & Weaknesses */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-emerald-600" />
              <span>Diagnosis Kompetensi Guru</span>
            </h3>

            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1.5">
                Kekuatan Utama:
              </span>
              {result.strengths.length > 0 ? (
                <ul className="space-y-1 text-xs sm:text-sm text-slate-700">
                  {result.strengths.map((str, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-slate-500 italic">Belum ada kompetensi dengan akurasi &ge; 75%.</p>
              )}
            </div>

            <div className="pt-2 border-t border-slate-100">
              <span className="text-xs font-bold text-rose-800 uppercase tracking-wider block mb-1.5">
                Area Prioritas Peningkatan:
              </span>
              {result.weaknesses.length > 0 ? (
                <ul className="space-y-1 text-xs sm:text-sm text-slate-700">
                  {result.weaknesses.map((weak, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{weak}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-emerald-600 font-medium">Tidak ada kompetensi kritis di bawah 60%.</p>
              )}
            </div>
          </div>

          {/* Actionable Recommendations */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-amber-500" />
              <span>Rekomendasi Tindak Lanjut</span>
            </h3>

            <div className="space-y-2.5">
              {result.recommendations.map((rec, idx) => (
                <div key={idx} className="flex items-start gap-2.5 rounded-xl bg-amber-50/60 p-3 border border-amber-100 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-200 text-amber-900 text-xs font-bold">
                    {idx + 1}
                  </span>
                  <p>{rec}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Question Review Section */}
        <div id="section-pembahasan" className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-emerald-600" />
                <span>Kunci Jawaban & Pembahasan Lengkap</span>
              </h3>
              <p className="text-xs text-slate-500">Pelajari setiap butir soal dan alasan pengecoh untuk memperdalam konsep</p>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-1.5 rounded-xl bg-slate-100 p-1 print:hidden">
              <button
                onClick={() => setReviewFilter('all')}
                className={`rounded-lg px-3 py-1 text-xs font-bold transition-all ${
                  reviewFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Semua ({result.questions.length})
              </button>
              <button
                onClick={() => setReviewFilter('wrong')}
                className={`rounded-lg px-3 py-1 text-xs font-bold transition-all ${
                  reviewFilter === 'wrong' ? 'bg-white text-rose-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Keliru ({result.incorrect})
              </button>
              <button
                onClick={() => setReviewFilter('correct')}
                className={`rounded-lg px-3 py-1 text-xs font-bold transition-all ${
                  reviewFilter === 'correct' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Benar ({result.correct})
              </button>
            </div>
          </div>

          {/* List of Questions with explanations */}
          <div className="space-y-4">
            {filteredQuestions.map((q, idx) => {
              const userAns = result.userAnswers[q.id];
              const isUnanswered = !userAns || userAns === '' || userAns === 'UNANSWERED';
              const isCorrect = !isUnanswered && userAns === q.correctAnswer;
              const isExpanded = expandedQuestions[q.id] ?? (reviewFilter === 'wrong' || !isCorrect);

              const statusBadge = isCorrect ? (
                <span className="inline-flex items-center gap-1 rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800">
                  ✓ Benar
                </span>
              ) : isUnanswered ? (
                <span className="inline-flex items-center gap-1 rounded-md bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-800">
                  — Tidak dijawab
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-md bg-rose-100 px-2 py-0.5 text-xs font-bold text-rose-800">
                  ✗ Salah
                </span>
              );

              return (
                <div
                  key={q.id}
                  className={`rounded-2xl border transition-all ${
                    isCorrect
                      ? 'border-slate-200 bg-white'
                      : isUnanswered
                      ? 'border-amber-200 bg-amber-50/20'
                      : 'border-rose-200 bg-rose-50/20'
                  }`}
                >
                  <div
                    onClick={() => toggleExpand(q.id)}
                    className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50/80 rounded-2xl select-none"
                  >
                    <div className="flex items-center gap-3">
                      {isCorrect ? (
                        <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0" />
                      ) : isUnanswered ? (
                        <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0" />
                      ) : (
                        <XCircle className="h-6 w-6 text-rose-600 shrink-0" />
                      )}
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-bold text-slate-900">
                            Nomor {idx + 1}
                          </span>
                          {statusBadge}
                          <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600 uppercase">
                            {q.subject || q.category}
                          </span>
                          <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
                            {q.subtopic || q.competency}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-slate-800 line-clamp-1 mt-0.5">
                          {q.question}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs font-medium text-slate-500 hidden sm:inline">
                        Jawaban: <strong className={isCorrect ? 'text-emerald-700' : isUnanswered ? 'text-amber-700' : 'text-rose-600'}>
                          {isUnanswered ? '—' : userAns}
                        </strong> | Kunci: <strong className="text-emerald-700">{q.correctAnswer}</strong>
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-slate-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-slate-400" />
                      )}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="border-t border-slate-100 p-5 space-y-4 text-xs sm:text-sm">
                      {/* Summary Banner for this question */}
                      <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                        <div>
                          <span className="text-slate-500 font-medium">Status: </span>
                          {statusBadge}
                        </div>
                        <div>
                          <span className="text-slate-500 font-medium">Jawaban Anda: </span>
                          <strong className={isCorrect ? 'text-emerald-700' : isUnanswered ? 'text-amber-700' : 'text-rose-600'}>
                            {isUnanswered ? '— Tidak dijawab' : `Opsi ${userAns}`}
                          </strong>
                        </div>
                        <div>
                          <span className="text-slate-500 font-medium">Kunci Jawaban: </span>
                          <strong className="text-emerald-700">Opsi {q.correctAnswer}</strong>
                        </div>
                      </div>

                      {/* Passage */}
                      {q.passage && (
                        <div className="rounded-xl bg-slate-50 p-3.5 text-slate-600 border border-slate-200/70 whitespace-pre-line leading-relaxed">
                          <strong className="block text-slate-800 font-bold mb-1">Wacana:</strong>
                          {q.passage}
                        </div>
                      )}

                      {/* Visual */}
                      <VisualRenderer visualData={q.visualData} />

                      {/* Full question */}
                      <div>
                        <span className="text-xs font-bold text-slate-400 block mb-1">PERTANYAAN:</span>
                        <p className="text-sm font-bold text-slate-900 leading-relaxed">
                          {q.question}
                        </p>
                      </div>

                      {/* Options breakdown */}
                      <div className="space-y-2">
                        {q.options.map(opt => {
                          const isKey = opt.id === q.correctAnswer;
                          const isUserChoice = userAns === opt.id;

                          let style = 'bg-white border-slate-200 text-slate-700';
                          if (isKey) {
                            style = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold';
                          } else if (isUserChoice) {
                            style = 'bg-rose-50 border-rose-400 text-rose-950';
                          }

                          return (
                            <div key={opt.id} className={`flex items-start gap-2.5 rounded-xl border p-3 ${style}`}>
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md font-bold text-xs">
                                {opt.id}
                              </span>
                              <span className="leading-relaxed pt-0.5">{opt.text}</span>
                              {isKey && (
                                <span className="ml-auto shrink-0 rounded bg-emerald-200 px-2 py-0.5 text-[10px] font-bold text-emerald-900">
                                  KUNCI BENAR
                                </span>
                              )}
                              {isUserChoice && !isKey && (
                                <span className="ml-auto shrink-0 rounded bg-rose-200 px-2 py-0.5 text-[10px] font-bold text-rose-900">
                                  PILIHAN ANDA
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Explanation */}
                      <div className="rounded-xl bg-emerald-50/70 p-4 border border-emerald-200 text-emerald-950 space-y-1">
                        <strong className="font-extrabold text-emerald-900 block text-xs tracking-wider uppercase">
                          PEMBAHASAN
                        </strong>
                        <p className="leading-relaxed">{q.explanation}</p>
                      </div>

                      {/* Distractor analysis */}
                      {q.whyWrong && Object.keys(q.whyWrong).length > 0 && (
                        <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 space-y-2">
                          <strong className="font-bold text-slate-800 block text-xs">Analisis Mengapa Pilihan Lain Salah:</strong>
                          {Object.entries(q.whyWrong).map(([optId, reason]) => (
                            <div key={optId} className="text-xs text-slate-600">
                              <span className="font-bold text-rose-600 mr-1.5">Pilihan {optId}:</span>
                              <span>{reason}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tip */}
                      {q.tip && (
                        <div className="rounded-xl bg-amber-50 p-3 text-xs text-amber-950 border border-amber-200">
                          <strong className="font-bold text-amber-900">Tips AKGTK: </strong>
                          {q.tip}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
