// Comprehensive MI Question Generator grounded directly in official AKG MI references
import fs from 'fs';
import path from 'path';

// Function to generate the 150 questions per subject with exact difficulty: 30 mudah, 90 sedang, 30 sulit
export function generateSubjectQuestions(subjectId, subjectName, topicTemplates) {
  const questions = [];
  let idCounter = 1;

  // We want 150 questions: 30 mudah, 90 sedang, 30 sulit
  // Generate across the templates
  const totalCount = 150;
  for (let i = 0; i < totalCount; i++) {
    const template = topicTemplates[i % topicTemplates.length];
    const difficulty = i < 30 ? 'mudah' : (i < 120 ? 'sedang' : 'sulit');
    const indexSuffix = Math.floor(i / topicTemplates.length) + 1;
    
    const qObj = template.build(indexSuffix, difficulty, i + 1);
    
    const paddedId = String(idCounter).padStart(3, '0');
    const idPrefix = subjectId === 'pedagogik' ? 'PD' : (subjectId === 'literasi' ? 'LT' : (subjectId === 'numerasi' ? 'NM' : 'SN'));
    
    questions.push({
      id: `${idPrefix}${paddedId}`,
      educationLevel: 'MI',
      categoryId: 'guru_kelas',
      category: 'guru_kelas',
      akgtkCategory: 'Guru Kelas',
      subjectId: subjectId,
      subject: subjectName,
      subtopic: qObj.subtopic,
      competency: qObj.competency,
      passage: qObj.passage || undefined,
      visualData: qObj.visualData || undefined,
      question: qObj.question,
      optionA: qObj.options.A,
      optionB: qObj.options.B,
      optionC: qObj.options.C,
      optionD: qObj.options.D,
      options: [
        { id: 'A', text: qObj.options.A },
        { id: 'B', text: qObj.options.B },
        { id: 'C', text: qObj.options.C },
        { id: 'D', text: qObj.options.D }
      ],
      correctAnswer: qObj.correctAnswer,
      explanation: qObj.explanation,
      tip: qObj.tip,
      difficulty,
      status: 'ACTIVE',
      source: 'Kisi-Kisi Resmi AKG Guru MI Kemenag 2026'
    });
    
    idCounter++;
  }
  
  return questions;
}
