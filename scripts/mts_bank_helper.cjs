// Helper to generate 150 genuinely unique questions for any MTs subject
// Each item (0..149) has distinct sentences, distinct terms, distinct options

const { createQuestion } = require('./generate_all_subjects_master.cjs');

function buildDynamicSubjectBank({
  subjectId,
  subjectName,
  categoryId,
  akgtkCategory,
  educationLevel = 'MTs',
  idPrefix,
  items // array of exactly 150 distinct definitions or generator function
}) {
  const questions = [];
  const seenTexts = new Set();

  for (let i = 0; i < 150; i++) {
    const num = i + 1;
    const padded = String(num).padStart(3, '0');
    const id = `${idPrefix}${padded}`;
    const diff = i < 30 ? 'mudah' : (i < 120 ? 'sedang' : 'sulit');

    const item = items(i, diff, num);
    const norm = item.question.trim().toLowerCase().replace(/\s+/g, ' ');
    if (seenTexts.has(norm)) {
      throw new Error(`Duplicate in ${subjectId}: "${item.question.slice(0, 50)}"`);
    }
    seenTexts.add(norm);

    // Distribute correct answer across A, B, C, D
    const pos = i % 4;
    const opts = [...item.distractors];
    opts.splice(pos, 0, item.correct);
    const correctLetter = ['A', 'B', 'C', 'D'][pos];

    questions.push(createQuestion({
      id,
      educationLevel,
      categoryId,
      category: categoryId,
      akgtkCategory,
      subjectId,
      subject: subjectName,
      subtopic: item.subtopic,
      competency: item.competency,
      passage: item.passage,
      question: item.question,
      optionA: opts[0],
      optionB: opts[1],
      optionC: opts[2],
      optionD: opts[3],
      correctAnswer: correctLetter,
      explanation: item.explanation,
      tip: item.tip || 'Perhatikan konsep esensial pada butir soal.',
      difficulty: diff
    }));
  }

  return questions;
}

module.exports = {
  buildDynamicSubjectBank
};
