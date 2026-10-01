const fs = require('fs');
const path = require('path');
const { generateEnglishMTs, generateEnglishMA } = require('./generate_english_master.cjs');

console.log('[ENGLISH UPDATE] Generating enhanced English questions for MTs and MA...');
const mtsEnglish = generateEnglishMTs();
const maEnglish = generateEnglishMA();

console.log(`[ENGLISH UPDATE] Generated ${mtsEnglish.length} MTs questions and ${maEnglish.length} MA questions.`);

// 1. Update mtsQuestions.ts
const mtsFile = path.join(__dirname, '../src/data/mtsQuestions.ts');
let mtsData = [];
if (fs.existsSync(mtsFile)) {
  const content = fs.readFileSync(mtsFile, 'utf-8');
  const startIdx = content.indexOf('= [');
  const endIdx = content.lastIndexOf('];');
  if (startIdx >= 0 && endIdx >= 0) {
    const jsonStr = content.substring(startIdx + 2, endIdx + 1);
    mtsData = JSON.parse(jsonStr);
  }
}

// Replace English questions in MTs
mtsData = mtsData.filter(q => q.subjectId !== 'bahasa_inggris' && !q.id.startsWith('MTS-EN-'));
mtsData.push(...mtsEnglish);

fs.writeFileSync(mtsFile, `import { Question } from '../types';\n\nexport const mtsQuestions: Question[] = ${JSON.stringify(mtsData, null, 2)};\n`, 'utf-8');
console.log(`[ENGLISH UPDATE] Updated mtsQuestions.ts. Total items in file: ${mtsData.length}`);

// 2. Update maQuestions.ts
const maFile = path.join(__dirname, '../src/data/maQuestions.ts');
let maData = [];
if (fs.existsSync(maFile)) {
  const content = fs.readFileSync(maFile, 'utf-8');
  const startIdx = content.indexOf('= [');
  const endIdx = content.lastIndexOf('];');
  if (startIdx >= 0 && endIdx >= 0) {
    const jsonStr = content.substring(startIdx + 2, endIdx + 1);
    maData = JSON.parse(jsonStr);
  }
}

// Replace English questions in MA
maData = maData.filter(q => q.subjectId !== 'bahasa_inggris' && !q.id.startsWith('MA-EN-'));
maData.push(...maEnglish);

fs.writeFileSync(maFile, `import { Question } from '../types';\n\nexport const maQuestions: Question[] = ${JSON.stringify(maData, null, 2)};\n`, 'utf-8');
console.log(`[ENGLISH UPDATE] Updated maQuestions.ts. Total items in file: ${maData.length}`);

// 3. Update server_data/db.json
const dbFile = path.join(__dirname, '../server_data/db.json');
let db = { questions: [] };
if (fs.existsSync(dbFile)) {
  db = JSON.parse(fs.readFileSync(dbFile, 'utf-8'));
}

const qMap = new Map();
(db.questions || []).forEach(q => qMap.set(q.id, q));

// Upsert new English questions
mtsEnglish.forEach(q => qMap.set(q.id, q));
maEnglish.forEach(q => qMap.set(q.id, q));

db.questions = Array.from(qMap.values());
fs.writeFileSync(dbFile, JSON.stringify(db, null, 2), 'utf-8');

console.log(`[ENGLISH UPDATE] Successfully updated db.json. Total questions in database: ${db.questions.length}`);

// Check statistics for English
const checkEnglish = db.questions.filter(q => q.subjectId === 'bahasa_inggris' || q.id.includes('-EN-'));
console.log(`[VERIFICATION] English questions in db: ${checkEnglish.length}`);
const countsByLevel = {};
checkEnglish.forEach(q => countsByLevel[q.educationLevel] = (countsByLevel[q.educationLevel] || 0) + 1);
console.log('[VERIFICATION] By Level:', countsByLevel);
console.log('Sample MTs English Question 1:', mtsEnglish[0].question.substring(0, 100) + '...');
console.log('Sample MA English Question 1:', maEnglish[0].question.substring(0, 100) + '...');
