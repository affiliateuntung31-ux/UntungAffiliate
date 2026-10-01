import React from 'react';
import { Question, Option } from '../types';
import { VisualRenderer } from './VisualRenderer';
import { Bookmark, Sparkles, BookOpen, Calculator, Atom } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  index: number;
  totalQuestions: number;
  selectedOptionId?: string;
  onSelectOption: (optionId: 'A' | 'B' | 'C' | 'D') => void;
  isSubmitted?: boolean;
  isSimulation?: boolean;
  isFlagged?: boolean;
  onToggleFlag?: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  index,
  totalQuestions,
  selectedOptionId,
  onSelectOption,
  isSubmitted = false,
  isSimulation = false,
  isFlagged = false,
  onToggleFlag
}) => {
  const getCategoryIcon = () => {
    switch (question.category) {
      case 'literasi':
        return <BookOpen className="h-4 w-4 text-emerald-600" />;
      case 'numerasi':
        return <Calculator className="h-4 w-4 text-blue-600" />;
      case 'sains':
        return <Atom className="h-4 w-4 text-teal-600" />;
    }
  };

  const getDifficultyBadge = () => {
    switch (question.difficulty) {
      case 'mudah':
        return <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 border border-emerald-200">Tingkat: Mudah</span>;
      case 'sedang':
        return <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700 border border-amber-200">Tingkat: Sedang</span>;
      case 'sulit':
        return <span className="rounded-full bg-rose-50 px-2.5 py-0.5 text-xs font-semibold text-rose-700 border border-rose-200">Tingkat: Sulit (HOTS)</span>;
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs">
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="flex h-8 items-center justify-center rounded-lg bg-slate-900 px-3 text-xs font-black text-white">
            SOAL {index + 1} / {totalQuestions}
          </span>
          <div className="flex items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700">
            {getCategoryIcon()}
            <span className="capitalize">{question.category}</span>
          </div>
          {getDifficultyBadge()}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
            Kompetensi: <span className="text-slate-800">{question.competency}</span>
          </span>

          {isSimulation && onToggleFlag && (
            <button
              id={`flag-btn-${question.id}`}
              onClick={onToggleFlag}
              className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                isFlagged
                  ? 'bg-amber-100 text-amber-900 ring-1 ring-amber-300'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
              title="Tandai ragu-ragu untuk diperiksa kembali nanti"
            >
              <Bookmark className={`h-3.5 w-3.5 ${isFlagged ? 'fill-amber-600 text-amber-600' : ''}`} />
              <span>{isFlagged ? 'Ragu-ragu' : 'Tandai Ragu'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Reading Passage (Wacana Stimulus) */}
      {question.passage && (
        <div className="my-5 rounded-xl border border-emerald-100 bg-emerald-50/40 p-4 sm:p-5">
          <div className="mb-2 flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Wacana Stimulus</span>
          </div>
          <div className="text-sm leading-relaxed text-slate-700 whitespace-pre-line font-normal">
            {question.passage}
          </div>
        </div>
      )}

      {/* Visual Data (Tables, Charts, Diagrams) */}
      <VisualRenderer visualData={question.visualData} />

      {/* Question Text */}
      <div className="my-5">
        <p className="text-base sm:text-lg font-semibold leading-relaxed text-slate-900">
          {question.question}
        </p>
      </div>

      {/* Options List */}
      <div className="space-y-3 pt-2">
        {question.options.map((option: Option) => {
          const isSelected = selectedOptionId === option.id;
          const isCorrect = option.id === question.correctAnswer;

          let optionStyle = 'border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50/80';
          let letterStyle = 'bg-slate-100 text-slate-700 border-slate-200';

          if (isSubmitted) {
            if (isCorrect) {
              optionStyle = 'border-emerald-500 bg-emerald-50/70 text-emerald-950 font-semibold ring-1 ring-emerald-500';
              letterStyle = 'bg-emerald-500 text-white border-emerald-500';
            } else if (isSelected && !isCorrect) {
              optionStyle = 'border-rose-400 bg-rose-50/70 text-rose-950 ring-1 ring-rose-400';
              letterStyle = 'bg-rose-500 text-white border-rose-500';
            } else {
              optionStyle = 'border-slate-200 bg-slate-50/40 text-slate-400 opacity-60';
              letterStyle = 'bg-slate-100 text-slate-400 border-slate-200';
            }
          } else if (isSelected) {
            optionStyle = isSimulation
              ? 'border-indigo-600 bg-indigo-50/70 text-indigo-950 ring-2 ring-indigo-600/30'
              : 'border-emerald-600 bg-emerald-50/70 text-emerald-950 ring-2 ring-emerald-600/30';
            letterStyle = isSimulation
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'bg-emerald-600 text-white border-emerald-600';
          }

          return (
            <button
              key={option.id}
              id={`option-${question.id}-${option.id}`}
              disabled={isSubmitted}
              onClick={() => onSelectOption(option.id)}
              className={`w-full flex items-start gap-3.5 rounded-xl border p-3.5 sm:p-4 text-left text-sm sm:text-base transition-all ${optionStyle} ${
                !isSubmitted ? 'cursor-pointer active:scale-[0.99]' : 'cursor-default'
              }`}
            >
              <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border text-xs font-bold mt-0.5 transition-colors ${letterStyle}`}>
                {option.id}
              </span>
              <span className="leading-relaxed pt-0.5">{option.text}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
