import { Question, QuestionCategory, QuestionDifficulty, SessionResult, UserStats, Option } from '../types';
import { pedagogikQuestions } from './pedagogikQuestions';
import { literacyQuestions } from './literacyQuestions';
import { numeracyQuestions } from './numeracyQuestions';
import { scienceQuestions } from './scienceQuestions';
import { rumpunPaiQuestions } from './rumpunPaiQuestions';
import { tendikQuestions } from './tendikQuestions';
import { mtsQuestions } from './mtsQuestions';
import { maQuestions } from './maQuestions';

const CUSTOM_QUESTIONS_KEY = 'akgtk_custom_questions_v1';
const SESSION_HISTORY_KEY = 'akgtk_session_history_v1';
const WRONG_ANSWERS_KEY = 'akgtk_wrong_answers_v1';

// Get default questions
export function getDefaultQuestions(): Question[] {
  return [
    ...pedagogikQuestions, 
    ...literacyQuestions, 
    ...numeracyQuestions, 
    ...scienceQuestions, 
    ...rumpunPaiQuestions,
    ...tendikQuestions,
    ...mtsQuestions,
    ...maQuestions
  ];
}

// Get custom questions stored by the user/admin
export function getCustomQuestions(): Question[] {
  try {
    if (typeof localStorage === 'undefined') return [];
    const raw = localStorage.getItem(CUSTOM_QUESTIONS_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    return [];
  }
}

// Save a custom question
export function saveCustomQuestion(question: Question): void {
  const existing = getCustomQuestions();
  const index = existing.findIndex(q => q.id === question.id);
  if (index >= 0) {
    existing[index] = { ...question, isCustom: true };
  } else {
    existing.unshift({ ...question, isCustom: true });
  }
  localStorage.setItem(CUSTOM_QUESTIONS_KEY, JSON.stringify(existing));
}

// Delete custom question
export function deleteCustomQuestion(id: string): void {
  const existing = getCustomQuestions().filter(q => q.id !== id);
  localStorage.setItem(CUSTOM_QUESTIONS_KEY, JSON.stringify(existing));
}

// Get combined question pool
export function getAllQuestions(): Question[] {
  const defaults = getDefaultQuestions();
  const custom = getCustomQuestions();
  return [...custom, ...defaults];
}

// Fisher-Yates array shuffle
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Shuffle options for a question and update correctAnswer & whyWrong mapping
export function shuffleQuestionOptions(question: Question): Question {
  const originalCorrectOption = question.options.find(o => o.id === question.correctAnswer);
  if (!originalCorrectOption) return question;

  // Clone and shuffle options array
  const shuffledOptionsRaw = shuffleArray(question.options);
  const optionLetters: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];

  // Map old option IDs to new option IDs
  const oldToNewMap: Record<string, 'A' | 'B' | 'C' | 'D'> = {};
  const newOptions: Option[] = shuffledOptionsRaw.map((opt, index) => {
    const newId = optionLetters[index];
    oldToNewMap[opt.id] = newId;
    return {
      id: newId,
      text: opt.text
    };
  });

  const newCorrectAnswer = oldToNewMap[question.correctAnswer] || 'A';

  // Remap whyWrong if it exists
  let newWhyWrong: Record<string, string> | undefined = undefined;
  if (question.whyWrong) {
    newWhyWrong = {};
    for (const [oldId, reason] of Object.entries(question.whyWrong)) {
      const newId = oldToNewMap[oldId];
      if (newId) {
        newWhyWrong[newId] = reason;
      }
    }
  }

  return {
    ...question,
    options: newOptions,
    correctAnswer: newCorrectAnswer,
    whyWrong: newWhyWrong
  };
}

// Generate randomized question set for a practice or simulation session
export interface QuestionSelectionOptions {
  category: QuestionCategory | 'campuran' | 'remedial';
  difficulty?: QuestionDifficulty | 'all';
  count: number;
  shuffleOptions?: boolean;
}

function deduplicateQuestions(list: Question[]): Question[] {
  const seenIds = new Set<string>();
  const seenStems = new Set<string>();
  const result: Question[] = [];
  for (const q of list) {
    if (seenIds.has(q.id)) continue;
    const stem = (q.question || '').toLowerCase().replace(/\[[^\]]+\]/g, '').replace(/[^a-z0-9]/g, '').trim();
    if (stem.length > 15 && seenStems.has(stem)) continue;
    seenIds.add(q.id);
    if (stem.length > 15) seenStems.add(stem);
    result.push(q);
  }
  return result;
}

export function generateSessionQuestions(options: QuestionSelectionOptions): Question[] {
  let pool = deduplicateQuestions(getAllQuestions());

  if (options.category === 'remedial') {
    const wrongIds = getWrongQuestionIds();
    pool = pool.filter(q => wrongIds.includes(q.id));
    if (pool.length === 0) {
      // Fallback if no wrong questions yet
      pool = deduplicateQuestions(getAllQuestions());
    }
  } else if (options.category !== 'campuran') {
    pool = pool.filter(q => 
      q.category === options.category || 
      q.categoryId === options.category || 
      q.subjectId === options.category || 
      q.subject?.toLowerCase() === (options.category as string).toLowerCase()
    );
  }

  // Filter difficulty if specified
  if (options.difficulty && options.difficulty !== 'all') {
    const diffPool = pool.filter(q => q.difficulty === options.difficulty);
    if (diffPool.length >= options.count) {
      pool = diffPool;
    }
  }

  // If campuran or Guru Kelas, take balanced proportion from each category (Literasi, Numerasi, Sains)
  if (options.category === 'campuran' || (options.category as string) === 'Guru Kelas') {
    const isLit = (q: Question) => q.category === 'literasi' || q.subjectId === 'literasi' || q.subject?.toLowerCase() === 'literasi';
    const isNum = (q: Question) => q.category === 'numerasi' || q.subjectId === 'numerasi' || q.subject?.toLowerCase() === 'numerasi';
    const isSci = (q: Question) => q.category === 'sains' || q.subjectId === 'sains' || q.subject?.toLowerCase() === 'sains';

    const literasiList = shuffleArray(deduplicateQuestions(pool.filter(isLit)));
    const numerasiList = shuffleArray(deduplicateQuestions(pool.filter(isNum)));
    const sainsList = shuffleArray(deduplicateQuestions(pool.filter(isSci)));

    const perCategory = Math.floor(options.count / 3);
    const remainder = options.count % 3;

    const selected = [
      ...literasiList.slice(0, perCategory + (remainder > 0 ? 1 : 0)),
      ...numerasiList.slice(0, perCategory + (remainder > 1 ? 1 : 0)),
      ...sainsList.slice(0, perCategory)
    ];

    pool = deduplicateQuestions(shuffleArray(selected));
  } else {
    // Randomize pool
    pool = deduplicateQuestions(shuffleArray(pool)).slice(0, options.count);
  }

  // Shuffle options if requested (default true)
  const shouldShuffleOptions = options.shuffleOptions ?? true;
  if (shouldShuffleOptions) {
    return pool.map(q => shuffleQuestionOptions(q));
  }

  return pool;
}

// Diagnostic analysis engine
export function evaluateSession(
  mode: 'practice' | 'simulation',
  category: QuestionCategory | 'campuran',
  questions: Question[],
  userAnswers: Record<string, string>,
  difficulty: string = 'Campuran'
): SessionResult {
  let correct = 0;
  const wrongQuestionIds: string[] = [];
  const categoryBreakdown: Record<string, { total: number; correct: number; percentage: number }> = {};
  const competencyBreakdown: Record<string, { total: number; correct: number; percentage: number }> = {};

  questions.forEach(q => {
    const ans = userAnswers[q.id];
    const isCorrect = ans === q.correctAnswer;

    if (isCorrect) {
      correct++;
    } else {
      wrongQuestionIds.push(q.id);
    }

    // Category breakdown
    if (!categoryBreakdown[q.category]) {
      categoryBreakdown[q.category] = { total: 0, correct: 0, percentage: 0 };
    }
    categoryBreakdown[q.category].total++;
    if (isCorrect) categoryBreakdown[q.category].correct++;

    // Competency breakdown
    if (!competencyBreakdown[q.competency]) {
      competencyBreakdown[q.competency] = { total: 0, correct: 0, percentage: 0 };
    }
    competencyBreakdown[q.competency].total++;
    if (isCorrect) competencyBreakdown[q.competency].correct++;
  });

  // Calculate percentages
  Object.keys(categoryBreakdown).forEach(k => {
    const item = categoryBreakdown[k];
    item.percentage = item.total > 0 ? Math.round((item.correct / item.total) * 100) : 0;
  });

  Object.keys(competencyBreakdown).forEach(k => {
    const item = competencyBreakdown[k];
    item.percentage = item.total > 0 ? Math.round((item.correct / item.total) * 100) : 0;
  });

  const total = questions.length;
  const incorrect = total - correct;
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
  // Scaled score out of 100
  const score = percentage;

  // Strengths and weaknesses
  const strengths: string[] = [];
  const weaknesses: string[] = [];

  Object.entries(competencyBreakdown).forEach(([comp, stats]) => {
    if (stats.percentage >= 75) {
      strengths.push(`${comp} (${stats.percentage}%)`);
    } else if (stats.percentage < 60) {
      weaknesses.push(`${comp} (${stats.percentage}%)`);
    }
  });

  // Recommendations
  const recommendations: string[] = [];
  if (percentage >= 85) {
    recommendations.push("Kemampuan Anda sangat unggul dan memenuhi standar kompetensi guru profesional AKGTK.");
    recommendations.push("Pertahankan ritme belajar dengan mencoba simulasi campuran tingkat kesulitan sulit.");
  } else if (percentage >= 70) {
    recommendations.push("Kemampuan Anda sudah baik dan berada di atas rata-rata kompetensi minimum.");
    if (weaknesses.length > 0) {
      recommendations.push(`Fokuskan latihan mandiri pada topik: ${weaknesses.slice(0, 2).join(', ')}.`);
    }
  } else {
    recommendations.push("Perlu penguatan konsep dasar pada materi yang sering mengalami kekeliruan.");
    recommendations.push("Gunakan 'Mode Latihan' untuk mempelajari pembahasan langsung dan tips cepat setiap butir soal.");
    if (weaknesses.length > 0) {
      recommendations.push(`Prioritas remedial: ${weaknesses.slice(0, 3).join(', ')}.`);
    }
  }

  // Update persistent wrong answers bank
  updateWrongAnswersBank(wrongQuestionIds, questions.filter(q => userAnswers[q.id] === q.correctAnswer).map(q => q.id));

  const result: SessionResult = {
    id: `SES_${Date.now()}`,
    date: new Date().toISOString(),
    mode,
    category,
    total,
    correct,
    incorrect,
    score,
    percentage,
    difficulty,
    categoryBreakdown,
    competencyBreakdown,
    wrongQuestionIds,
    userAnswers,
    questions,
    strengths,
    weaknesses,
    recommendations
  };

  saveSessionResult(result);
  return result;
}

// Wrong Answers Bank
export function getWrongQuestionIds(): string[] {
  try {
    const raw = localStorage.getItem(WRONG_ANSWERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function updateWrongAnswersBank(newWrongIds: string[], newlyCorrectIds: string[]): void {
  const current = new Set(getWrongQuestionIds());
  newWrongIds.forEach(id => current.add(id));
  // Remove questions answered correctly now
  newlyCorrectIds.forEach(id => current.delete(id));
  localStorage.setItem(WRONG_ANSWERS_KEY, JSON.stringify(Array.from(current)));
}

// Session History Persistence
export function getSessionHistory(): SessionResult[] {
  try {
    const raw = localStorage.getItem(SESSION_HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveSessionResult(result: SessionResult): void {
  const history = getSessionHistory();
  history.unshift(result);
  // Keep last 50 sessions
  if (history.length > 50) history.pop();
  localStorage.setItem(SESSION_HISTORY_KEY, JSON.stringify(history));
}

export function clearSessionHistory(): void {
  localStorage.removeItem(SESSION_HISTORY_KEY);
  localStorage.removeItem(WRONG_ANSWERS_KEY);
}

// User Stats
export function getUserStats(): UserStats {
  const history = getSessionHistory();
  if (history.length === 0) {
    return {
      totalSessions: 0,
      totalQuestionsAnswered: 0,
      totalCorrect: 0,
      totalIncorrect: 0,
      averageScore: 0,
      strongestCategory: '-',
      weakestCategory: '-'
    };
  }

  let totalQuestions = 0;
  let totalCorrect = 0;
  let totalIncorrect = 0;
  let scoreSum = 0;

  const categoryScores: Record<string, { total: number; correct: number }> = {
    literasi: { total: 0, correct: 0 },
    numerasi: { total: 0, correct: 0 },
    sains: { total: 0, correct: 0 }
  };

  history.forEach(h => {
    totalQuestions += h.total;
    totalCorrect += h.correct;
    totalIncorrect += h.incorrect;
    scoreSum += h.percentage;

    Object.entries(h.categoryBreakdown).forEach(([cat, stats]) => {
      if (categoryScores[cat]) {
        categoryScores[cat].total += stats.total;
        categoryScores[cat].correct += stats.correct;
      }
    });
  });

  let bestCat = '-';
  let bestRate = -1;
  let worstCat = '-';
  let worstRate = 999;

  Object.entries(categoryScores).forEach(([cat, data]) => {
    if (data.total > 0) {
      const rate = data.correct / data.total;
      if (rate > bestRate) {
        bestRate = rate;
        bestCat = cat.charAt(0).toUpperCase() + cat.slice(1);
      }
      if (rate < worstRate) {
        worstRate = rate;
        worstCat = cat.charAt(0).toUpperCase() + cat.slice(1);
      }
    }
  });

  return {
    totalSessions: history.length,
    totalQuestionsAnswered: totalQuestions,
    totalCorrect,
    totalIncorrect,
    averageScore: Math.round(scoreSum / history.length),
    strongestCategory: bestCat,
    weakestCategory: worstCat
  };
}
