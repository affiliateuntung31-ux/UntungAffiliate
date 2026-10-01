// Master Generator for All AKGTK Curriculum Subjects (150 Questions Each)
// Enforces 100% Unique Question Content with Zero Duplicates.

function createQuestion({
  id,
  educationLevel,
  categoryId,
  category,
  akgtkCategory,
  subjectId,
  subject,
  subtopic,
  competency,
  passage,
  question,
  optionA,
  optionB,
  optionC,
  optionD,
  correctAnswer,
  explanation,
  tip,
  difficulty
}) {
  return {
    id,
    educationLevel,
    categoryId,
    category,
    akgtkCategory,
    subjectId,
    subject,
    subtopic,
    competency,
    passage: passage || undefined,
    question,
    optionA,
    optionB,
    optionC,
    optionD,
    options: [
      { id: 'A', text: optionA },
      { id: 'B', text: optionB },
      { id: 'C', text: optionC },
      { id: 'D', text: optionD }
    ],
    correctAnswer,
    explanation,
    tip: tip || 'Perhatikan kata kunci dan konsep esensial pada stimulus soal.',
    difficulty,
    status: 'ACTIVE',
    source: 'Kisi-Kisi Resmi AKGTK Kemenag RI 2026'
  };
}

/**
 * Builds exactly 150 unique questions for a subject.
 * Guarantees that every single question statement is 100% unique (throws on duplicate).
 */
function buildUniqueSubjectBank({
  subjectId,
  subjectName,
  categoryId,
  categoryName,
  akgtkCategory,
  educationLevel,
  idPrefix,
  totalTarget = 150,
  generator // (index: 0..149, difficulty: 'mudah'|'sedang'|'sulit', num: 1..150) => QuestionObj
}) {
  const questions = [];
  const seenTexts = new Set();

  for (let i = 0; i < totalTarget; i++) {
    // Standard AKGTK distribution: 30 mudah (0-29), 90 sedang (30-119), 30 sulit (120-149)
    const difficulty = i < 30 ? 'mudah' : (i < 120 ? 'sedang' : 'sulit');
    const num = i + 1;
    const padded = String(num).padStart(3, '0');
    const id = `${idPrefix}${padded}`;

    const built = generator(i, difficulty, num);

    // Strict duplicate check
    const fullCheckText = ((built.passage || '') + ' ' + built.question).trim().toLowerCase().replace(/\s+/g, ' ');
    if (seenTexts.has(fullCheckText)) {
      throw new Error(`[DUPLICATE DETECTED] Subject ${subjectId}, question index ${i+1}: "${built.question.slice(0, 60)}..."`);
    }
    seenTexts.add(fullCheckText);

    // Dynamic answer placement support
    let optA = '', optB = '', optC = '', optD = '';
    let correct = 'A';

    if (built.correctText && Array.isArray(built.distractors) && built.distractors.length === 3) {
      const pos = i % 4; // 0 -> A, 1 -> B, 2 -> C, 3 -> D
      const allOpts = [...built.distractors];
      allOpts.splice(pos, 0, built.correctText);
      optA = allOpts[0];
      optB = allOpts[1];
      optC = allOpts[2];
      optD = allOpts[3];
      correct = ['A', 'B', 'C', 'D'][pos];
    } else if (built.options) {
      optA = built.options.A || built.optionA || '';
      optB = built.options.B || built.optionB || '';
      optC = built.options.C || built.optionC || '';
      optD = built.options.D || built.optionD || '';
      correct = built.correctAnswer || 'A';
    } else {
      optA = built.optionA || '';
      optB = built.optionB || '';
      optC = built.optionC || '';
      optD = built.optionD || '';
      correct = built.correctAnswer || 'A';
    }

    questions.push(createQuestion({
      id,
      educationLevel,
      categoryId,
      category: categoryId,
      akgtkCategory,
      subjectId,
      subject: subjectName,
      subtopic: built.subtopic,
      competency: built.competency,
      passage: built.passage,
      question: built.question,
      optionA: optA,
      optionB: optB,
      optionC: optC,
      optionD: optD,
      correctAnswer: correct,
      explanation: built.explanation,
      tip: built.tip,
      difficulty
    }));
  }

  return questions;
}

module.exports = {
  createQuestion,
  buildUniqueSubjectBank,
  buildSubjectBank: buildUniqueSubjectBank // alias for backwards compatibility
};
