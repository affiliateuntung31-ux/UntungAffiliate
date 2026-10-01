import React, { useState, useEffect } from 'react';
import { QuestionCategory, QuestionDifficulty, EducationLevel } from '../types';
import { 
  BookOpen, 
  Calculator, 
  Atom, 
  Layers, 
  AlertCircle, 
  Play, 
  X, 
  SlidersHorizontal, 
  Flame, 
  Lock, 
  AlertTriangle,
  CheckCircle2,
  Info,
  GraduationCap
} from 'lucide-react';
import { api } from '../services/apiClient';
import { CANONICAL_CATEGORIES, normalizeCategory, findSubjectAcrossCategories, EDUCATION_LEVELS_CONFIG } from '../categoryEngine';

interface PracticeSetupModalProps {
  isOpen: boolean;
  initialMode: 'practice' | 'simulation';
  initialCategory?: QuestionCategory | 'campuran' | 'remedial' | string;
  initialEducationLevel?: EducationLevel;
  initialCatId?: string;
  onClose: () => void;
  onStart: (config: {
    mode: 'practice' | 'simulation';
    category: QuestionCategory | 'campuran' | 'remedial' | string;
    difficulty: QuestionDifficulty | 'all';
    count: number;
    educationLevel?: EducationLevel;
    subject?: string;
  }) => void;
}

export const PracticeSetupModal: React.FC<PracticeSetupModalProps> = ({
  isOpen,
  initialMode,
  initialCategory = 'campuran',
  initialEducationLevel = 'MI',
  initialCatId,
  onClose,
  onStart
}) => {
  const [mode, setMode] = useState<'practice' | 'simulation'>(initialMode);
  const [educationLevel, setEducationLevel] = useState<EducationLevel>(initialEducationLevel);
  const [selectedCatId, setSelectedCatId] = useState<string>('guru_kelas');
  const [category, setCategory] = useState<QuestionCategory | 'campuran' | 'remedial' | string>(initialCategory);
  const [difficulty, setDifficulty] = useState<QuestionDifficulty | 'all'>('all');
  const [count, setCount] = useState<number>(mode === 'simulation' ? 50 : 20);
  const [wrongCount, setWrongCount] = useState<number>(0);

  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      if (initialEducationLevel) {
        setEducationLevel(initialEducationLevel);
      }
      const foundSubj = findSubjectAcrossCategories(initialCategory);
      const norm = normalizeCategory(initialCategory);
      if (foundSubj) {
        setSelectedCatId(initialCatId || foundSubj.category.id);
        setCategory(foundSubj.subject.id);
      } else if (norm) {
        setSelectedCatId(norm.id);
        setCategory(norm.id === 'guru_kelas' ? 'campuran' : (norm.id === 'rumpun_pai' ? 'rumpun_pai' : norm.id));
      } else if (['literasi', 'numerasi', 'sains', 'campuran'].includes(initialCategory)) {
        setSelectedCatId('guru_kelas');
        setCategory(initialCategory);
      } else if (initialCategory === 'remedial') {
        setSelectedCatId('guru_kelas');
        setCategory('remedial');
      } else {
        setSelectedCatId(initialCatId || 'guru_kelas');
        setCategory(initialCategory || 'campuran');
      }
      const isPai = foundSubj?.category.id === 'rumpun_pai' || norm?.id === 'rumpun_pai' || initialCategory === 'rumpun_pai';
      setCount(initialMode === 'simulation' || isPai ? 50 : 20);

      api.getWrongQuestions()
        .then(res => setWrongCount(res.count))
        .catch(() => setWrongCount(0));
    }
  }, [isOpen, initialMode, initialCategory, initialEducationLevel, initialCatId]);

  if (!isOpen) return null;

  const currentCatInfo = CANONICAL_CATEGORIES.find(c => c.id === selectedCatId) || CANONICAL_CATEGORIES[0];
  const isAvailableCategory = true;

  const handleStart = () => {
    onStart({
      mode,
      category,
      difficulty,
      count,
      educationLevel,
      subject: category
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto animate-in fade-in">
      <div className="relative w-full max-w-xl rounded-2xl bg-white shadow-2xl border border-slate-100 overflow-hidden my-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <SlidersHorizontal className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Konfigurasi Sesi Asesmen AKGTK
              </h3>
              <p className="text-xs text-slate-500">Sesuaikan kategori, domain soal, format dan jumlah soal</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-200/60 hover:text-slate-700 transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          {/* Mode Switcher */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Pilih Format Sesi
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setMode('practice');
                  if (count > 20) setCount(10);
                }}
                className={`rounded-xl border p-3.5 text-left transition-all cursor-pointer ${
                  mode === 'practice'
                    ? 'border-emerald-500 bg-emerald-50/60 text-emerald-950 ring-2 ring-emerald-500/20'
                    : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2 font-bold text-sm">
                  <BookOpen className="h-4 w-4 text-emerald-600" />
                  <span>Mode Latihan</span>
                </div>
                <p className="mt-1 text-xs text-slate-500 leading-normal">
                  Pembahasan instan langsung muncul setelah setiap nomor dijawab.
                </p>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMode('simulation');
                  if (count < 10) setCount(20);
                }}
                className={`rounded-xl border p-3.5 text-left transition-all cursor-pointer ${
                  mode === 'simulation'
                    ? 'border-indigo-500 bg-indigo-50/60 text-indigo-950 ring-2 ring-indigo-500/20'
                    : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2 font-bold text-sm">
                  <Flame className="h-4 w-4 text-indigo-600" />
                  <span>Simulasi CBT (CAT)</span>
                </div>
                <p className="mt-1 text-xs text-slate-500 leading-normal">
                  Format ujian resmi dengan countdown waktu riil & evaluasi di akhir.
                </p>
              </button>
            </div>
          </div>

          {/* Education Level Switcher */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                Pilih Jenjang Madrasah
              </label>
              <span className="text-[11px] font-semibold text-slate-500">
                MI / MTs / MA
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'MI', label: 'MI / SD', desc: 'Madrasah Ibtidaiyah' },
                { id: 'MTs', label: 'MTs / SMP', desc: 'Madrasah Tsanawiyah' },
                { id: 'MA', label: 'MA / SMA', desc: 'Madrasah Aliyah' }
              ].map((lvl) => (
                <button
                  key={lvl.id}
                  type="button"
                  onClick={() => setEducationLevel(lvl.id as EducationLevel)}
                  className={`rounded-xl border p-2.5 text-center transition-all cursor-pointer ${
                    educationLevel === lvl.id
                      ? 'border-purple-600 bg-purple-50 text-purple-900 ring-2 ring-purple-500/20 font-bold shadow-xs'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span className="block text-xs font-black">{lvl.label}</span>
                  <span className="block text-[10px] text-slate-500 truncate">{lvl.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* AKGTK Category Selector */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                Pilih Kategori AKGTK
              </label>
              <span className="text-[11px] font-semibold text-slate-500">
                8 Kategori Kurikulum
              </span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {CANONICAL_CATEGORIES.map(cat => {
                const isSelected = selectedCatId === cat.id;
                const isGk = cat.id === 'guru_kelas';
                const isPai = cat.id === 'rumpun_pai';
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setSelectedCatId(cat.id);
                      if (cat.id === 'guru_kelas') {
                        setCategory('campuran');
                      } else if (cat.id === 'rumpun_pai') {
                        setCategory('rumpun_pai');
                      } else {
                        setCategory(cat.id);
                      }
                    }}
                    className={`relative flex flex-col items-start p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/80 ring-2 ring-emerald-600/20'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className={`text-xs font-bold ${isSelected ? 'text-emerald-900' : 'text-slate-800'}`}>
                        {cat.displayName}
                      </span>
                    </div>
                    <span className={`text-[10px] font-medium ${
                      isGk || isPai ? 'text-emerald-700 font-bold' : 'text-slate-400'
                    }`}>
                      {isGk ? '150 Soal Aktif' : isPai ? '750 Soal Aktif' : 'Belum Tersedia'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sub-category / Subject Selection */}
          {selectedCatId === 'guru_kelas' ? (
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Domain Soal Guru Kelas
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setCategory('campuran')}
                  className={`flex flex-col items-start gap-1 rounded-xl border p-3 text-sm font-semibold transition-all cursor-pointer ${
                    category === 'campuran'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-600'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Layers className="h-4 w-4 text-purple-600" />
                    <span>Simulasi Guru Kelas (CAT)</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-normal">
                    Kombinasi Seimbang: Literasi + Numerasi + Sains
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setCategory('literasi')}
                  className={`flex items-center gap-2.5 rounded-xl border p-3 text-sm font-semibold transition-all cursor-pointer ${
                    category === 'literasi'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-600'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <BookOpen className="h-4 w-4 text-emerald-600" />
                  <div>
                    <span className="block">Literasi Membaca</span>
                    <span className="text-[10px] text-slate-400 font-normal">50 Butir Soal</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setCategory('numerasi')}
                  className={`flex items-center gap-2.5 rounded-xl border p-3 text-sm font-semibold transition-all cursor-pointer ${
                    category === 'numerasi'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-600'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <Calculator className="h-4 w-4 text-blue-600" />
                  <div>
                    <span className="block">Numerasi Matematika</span>
                    <span className="text-[10px] text-slate-400 font-normal">50 Butir Soal</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setCategory('sains')}
                  className={`flex items-center gap-2.5 rounded-xl border p-3 text-sm font-semibold transition-all cursor-pointer ${
                    category === 'sains'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-600'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <Atom className="h-4 w-4 text-teal-600" />
                  <div>
                    <span className="block">Sains & Eksperimen</span>
                    <span className="text-[10px] text-slate-400 font-normal">50 Butir Soal</span>
                  </div>
                </button>
              </div>

              {/* Remedial Option if wrong questions exist */}
              {wrongCount > 0 && (
                <button
                  type="button"
                  onClick={() => setCategory('remedial')}
                  className={`mt-2.5 w-full flex items-center justify-between rounded-xl border p-3 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    category === 'remedial'
                      ? 'border-rose-500 bg-rose-50 text-rose-900 ring-1 ring-rose-500'
                      : 'border-rose-200 bg-rose-50/40 text-rose-800 hover:bg-rose-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-rose-600" />
                    <span>Remedial Soal Pernah Salah</span>
                  </div>
                  <span className="rounded-full bg-rose-200 px-2 py-0.5 text-xs font-bold text-rose-900">
                    {wrongCount} Soal Tersimpan
                  </span>
                </button>
              )}
            </div>
          ) : selectedCatId === 'rumpun_pai' ? (
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Mata Pelajaran Rumpun PAI (750 Butir Bank Soal)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setCategory('rumpun_pai')}
                  className={`sm:col-span-2 flex flex-col items-start gap-1 rounded-xl border p-3 text-sm font-semibold transition-all cursor-pointer ${
                    category === 'rumpun_pai'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-600'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Layers className="h-4 w-4 text-emerald-600" />
                    <span>Simulasi Rumpun PAI (CAT Terpadu)</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-normal">
                    Kombinasi 5 Mapel: Qur'an Hadits + Akidah Akhlak + Fikih + SKI + Bahasa Arab
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setCategory('quran_hadits')}
                  className={`flex items-center gap-2.5 rounded-xl border p-3 text-sm font-semibold transition-all cursor-pointer ${
                    category === 'quran_hadits'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-600'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <BookOpen className="h-4 w-4 text-emerald-600" />
                  <div>
                    <span className="block">Qur'an Hadits</span>
                    <span className="text-[10px] text-slate-400 font-normal">Bank 150 Soal • Acak 50</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setCategory('akidah_akhlak')}
                  className={`flex items-center gap-2.5 rounded-xl border p-3 text-sm font-semibold transition-all cursor-pointer ${
                    category === 'akidah_akhlak'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-600'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <CheckCircle2 className="h-4 w-4 text-teal-600" />
                  <div>
                    <span className="block">Akidah Akhlak</span>
                    <span className="text-[10px] text-slate-400 font-normal">Bank 150 Soal • Acak 50</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setCategory('fikih')}
                  className={`flex items-center gap-2.5 rounded-xl border p-3 text-sm font-semibold transition-all cursor-pointer ${
                    category === 'fikih'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-600'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <SlidersHorizontal className="h-4 w-4 text-indigo-600" />
                  <div>
                    <span className="block">Fikih</span>
                    <span className="text-[10px] text-slate-400 font-normal">Bank 150 Soal • Acak 50</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setCategory('ski')}
                  className={`flex items-center gap-2.5 rounded-xl border p-3 text-sm font-semibold transition-all cursor-pointer ${
                    category === 'ski'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-600'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <BookOpen className="h-4 w-4 text-amber-600" />
                  <div>
                    <span className="block">SKI (Sejarah Kebudayaan Islam)</span>
                    <span className="text-[10px] text-slate-400 font-normal">Bank 150 Soal • Acak 50</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setCategory('bahasa_arab')}
                  className={`flex items-center gap-2.5 rounded-xl border p-3 text-sm font-semibold transition-all cursor-pointer ${
                    category === 'bahasa_arab'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-600'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <BookOpen className="h-4 w-4 text-blue-600" />
                  <div>
                    <span className="block">Bahasa Arab</span>
                    <span className="text-[10px] text-slate-400 font-normal">Bank 150 Soal • Acak 50</span>
                  </div>
                </button>
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Mata Pelajaran / Bidang {currentCatInfo.displayName}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentCatInfo.subjects.map((subj) => (
                  <button
                    key={subj.id}
                    type="button"
                    onClick={() => setCategory(subj.id)}
                    className={`flex items-center gap-2.5 rounded-xl border p-3 text-sm font-semibold transition-all cursor-pointer ${
                      category === subj.id
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-600'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <BookOpen className="h-4 w-4 text-emerald-600 shrink-0" />
                    <div className="text-left">
                      <span className="block">{subj.displayName}</span>
                      <span className="text-[10px] text-slate-400 font-normal">Bank 150 Soal • Acak 50</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Difficulty Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Tingkat Kesulitan
            </label>
            <div className="grid grid-cols-4 gap-2">
              {(['all', 'mudah', 'sedang', 'sulit'] as const).map((diff) => (
                <button
                  key={diff}
                  type="button"
                  onClick={() => setDifficulty(diff)}
                  className={`rounded-lg border py-2 text-xs font-bold capitalize transition-all cursor-pointer ${
                    difficulty === diff
                      ? 'border-slate-900 bg-slate-900 text-white'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {diff === 'all' ? 'Semua Level' : diff}
                </button>
              ))}
            </div>
          </div>

          {/* Question Count Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Jumlah Butir Soal (Sesi Ujian)
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[10, 20, 30, 50].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setCount(num)}
                  className={`rounded-lg border py-2 text-xs font-bold transition-all cursor-pointer ${
                    count === num
                      ? 'border-emerald-600 bg-emerald-600 text-white shadow-xs'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {num} Soal
                </button>
              ))}
            </div>
            {mode === 'simulation' && (
              <p className="mt-1.5 text-[11px] text-slate-500">
                *Format resmi: 50 butir soal dipilih secara acak dari bank 150 soal per mapel. Alokasi waktu: {count * 1.5} menit.
              </p>
            )}
          </div>
        </div>

        {/* Action Footer */}
        <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-6 py-4">
          <div>
            {!isAvailableCategory && (
              <span className="text-xs font-semibold text-amber-700 flex items-center gap-1.5">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                Pilih kategori dengan soal aktif
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-200/70 transition-colors cursor-pointer"
            >
              Batal
            </button>
            <button
              id="start-practice-btn"
              type="button"
              disabled={!isAvailableCategory}
              onClick={handleStart}
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-emerald-700 active:scale-95 disabled:opacity-40 disabled:scale-100 transition-all cursor-pointer"
            >
              <Play className="h-4 w-4 fill-white" />
              <span>Mulai Sekarang</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
