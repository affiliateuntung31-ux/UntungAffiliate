import React, { useState } from 'react';
import { Question } from '../types';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Lightbulb, 
  ListOrdered, 
  Atom, 
  BrainCircuit, 
  ChevronDown, 
  ChevronUp,
  ArrowRight
} from 'lucide-react';

interface FeedbackPanelProps {
  question: Question;
  selectedOptionId: string;
  onNextQuestion: () => void;
  isLastQuestion: boolean;
}

export const FeedbackPanel: React.FC<FeedbackPanelProps> = ({
  question,
  selectedOptionId,
  onNextQuestion,
  isLastQuestion
}) => {
  const isCorrect = selectedOptionId === question.correctAnswer;
  const [showDistractors, setShowDistractors] = useState(false);

  return (
    <div className="mt-6 rounded-2xl border transition-all overflow-hidden shadow-md animate-in fade-in duration-300">
      {/* Feedback Banner */}
      <div 
        className={`px-5 py-4 flex items-center justify-between border-b ${
          isCorrect 
            ? 'bg-emerald-500 text-white border-emerald-600' 
            : 'bg-rose-500 text-white border-rose-600'
        }`}
      >
        <div className="flex items-center gap-3">
          {isCorrect ? (
            <CheckCircle2 className="h-7 w-7 text-emerald-100 shrink-0" />
          ) : (
            <XCircle className="h-7 w-7 text-rose-100 shrink-0" />
          )}
          <div>
            <h3 className="text-base sm:text-lg font-bold">
              {isCorrect ? 'Luar Biasa, Jawaban Anda Tepat!' : 'Jawaban Anda Belum Tepat'}
            </h3>
            <p className="text-xs sm:text-sm text-white/90 font-medium">
              Kunci Jawaban yang benar adalah <span className="underline font-extrabold text-white">Pilihan {question.correctAnswer}</span>
            </p>
          </div>
        </div>

        <button
          id="feedback-next-btn"
          onClick={onNextQuestion}
          className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold shadow-sm transition-transform active:scale-95 ${
            isCorrect
              ? 'bg-white text-emerald-800 hover:bg-emerald-50'
              : 'bg-white text-rose-800 hover:bg-rose-50'
          }`}
        >
          <span>{isLastQuestion ? 'Lihat Hasil Latihan' : 'Soal Berikutnya'}</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Detailed Pedagogical Content */}
      <div className="bg-white p-5 sm:p-6 space-y-5 text-slate-800">
        {/* Main Explanation */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
            <Lightbulb className="h-5 w-5 text-amber-500 shrink-0" />
            <span>Pembahasan Mendalam</span>
          </div>
          <div className="rounded-xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-700 border border-slate-200">
            {question.explanation}
          </div>
        </div>

        {/* Numeracy Step-by-Step Solutions */}
        {question.solutionSteps && question.solutionSteps.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
              <ListOrdered className="h-4 w-4 text-blue-600" />
              <span>Langkah-Langkah Perhitungan Sistematis</span>
            </div>
            <div className="rounded-xl bg-blue-50/70 p-4 border border-blue-100 space-y-2">
              {question.solutionSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-blue-950 font-medium">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-200 text-blue-800 text-xs font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Science Concept Explanation */}
        {question.conceptExplanation && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-teal-900 font-bold text-sm">
              <Atom className="h-4 w-4 text-teal-600" />
              <span>Konsep Ilmiah Utama (Sains)</span>
            </div>
            <div className="rounded-xl bg-teal-50/70 p-4 text-sm leading-relaxed text-teal-950 border border-teal-100 font-medium">
              {question.conceptExplanation}
            </div>
          </div>
        )}

        {/* Scientific / Analytical Reasoning (Cara Berpikir) */}
        {question.reasoning && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm">
              <BrainCircuit className="h-4 w-4 text-indigo-600" />
              <span>Alur Penalaran Logis (Mindset AKGTK)</span>
            </div>
            <div className="rounded-xl bg-indigo-50/60 p-4 text-sm leading-relaxed text-indigo-950 border border-indigo-100">
              {question.reasoning}
            </div>
          </div>
        )}

        {/* Distractor Analysis: Mengapa Pilihan Lain Salah */}
        {question.whyWrong && Object.keys(question.whyWrong).length > 0 && (
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 overflow-hidden">
            <button
              onClick={() => setShowDistractors(!showDistractors)}
              className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <div className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-slate-500" />
                <span>Analisis Pengecoh: Mengapa Pilihan Lain Tidak Tepat?</span>
              </div>
              {showDistractors ? (
                <ChevronUp className="h-4 w-4 text-slate-500" />
              ) : (
                <ChevronDown className="h-4 w-4 text-slate-500" />
              )}
            </button>

            {showDistractors && (
              <div className="p-4 pt-2 border-t border-slate-200 space-y-2.5 bg-white text-xs sm:text-sm">
                {Object.entries(question.whyWrong).map(([optId, reason]) => (
                  <div key={optId} className="flex items-start gap-2.5 text-slate-600">
                    <span className="font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200 shrink-0">
                      Pilihan {optId}
                    </span>
                    <span className="leading-relaxed">{reason}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tip Cepat AKGTK */}
        {question.tip && (
          <div className="rounded-xl bg-amber-50/80 p-4 border border-amber-200 text-amber-950 flex items-start gap-3">
            <span className="rounded-lg bg-amber-200 p-1.5 text-amber-900 shrink-0 mt-0.5 font-bold text-xs">
              TIPS
            </span>
            <div className="text-xs sm:text-sm leading-relaxed">
              <strong className="font-semibold text-amber-900">Tips Cepat AKGTK: </strong>
              {question.tip}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
