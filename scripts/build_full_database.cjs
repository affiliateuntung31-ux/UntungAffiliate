const fs = require('fs');
const path = require('path');
const { generateAllTendik } = require('./generate_tendik_subjects.cjs');
const { generateAllMTs } = require('./generate_mts_subjects.cjs');
const { generateAllMA } = require('./generate_ma_subjects.cjs');
const { generateAllMIEnglish } = require('./generate_mi_english.cjs');

console.log('[BUILD] Starting full curriculum question generation...');

const tendikQuestions = generateAllTendik();
console.log(`[BUILD] Generated Tendik questions: ${tendikQuestions.length}`);

const mtsQuestions = generateAllMTs();
console.log(`[BUILD] Generated MTs questions: ${mtsQuestions.length}`);

const maQuestions = generateAllMA();
console.log(`[BUILD] Generated MA questions: ${maQuestions.length}`);

const miEnglishQuestions = generateAllMIEnglish();
console.log(`[BUILD] Generated MI English questions: ${miEnglishQuestions.length}`);

// Write typescript export files for src/data/
function writeTsFile(filePath, varName, data) {
  const content = `import { Question } from '../types';\n\nexport const ${varName}: Question[] = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`[BUILD] Wrote ${data.length} items to ${filePath}`);
}

writeTsFile(path.join(__dirname, '../src/data/tendikQuestions.ts'), 'tendikQuestions', tendikQuestions);
writeTsFile(path.join(__dirname, '../src/data/mtsQuestions.ts'), 'mtsQuestions', mtsQuestions);
writeTsFile(path.join(__dirname, '../src/data/maQuestions.ts'), 'maQuestions', maQuestions);
writeTsFile(path.join(__dirname, '../src/data/miEnglishQuestions.ts'), 'miEnglishQuestions', miEnglishQuestions);

// Now update server_data/db.json
const dbPath = path.join(__dirname, '../server_data/db.json');
let db = { users: {}, sessions: {}, results: {}, questions: [] };
if (fs.existsSync(dbPath)) {
  db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
}

const existingQuestions = db.questions || [];
const existingMap = new Map();
existingQuestions.forEach(q => existingMap.set(q.id, q));

// Add new questions
let added = 0;
const newPool = [...tendikQuestions, ...mtsQuestions, ...maQuestions, ...miEnglishQuestions];
for (const q of newPool) {
  if (!existingMap.has(q.id)) {
    existingQuestions.push(q);
    existingMap.set(q.id, q);
    added++;
  } else {
    // Update existing if already there
    const idx = existingQuestions.findIndex(item => item.id === q.id);
    if (idx >= 0) existingQuestions[idx] = q;
  }
}

db.questions = existingQuestions;
fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf-8');

console.log(`[BUILD] Database successfully updated. Total questions in db.json: ${db.questions.length} (added/updated ${added} new questions)`);

// Breakdown statistics
const statsByCat = {};
const statsBySubj = {};
const statsByLevel = {};

db.questions.forEach(q => {
  const cat = q.categoryId || q.category;
  const subj = q.subjectId || q.subject;
  const lvl = q.educationLevel || 'MI';

  statsByCat[cat] = (statsByCat[cat] || 0) + 1;
  statsBySubj[subj] = (statsBySubj[subj] || 0) + 1;
  statsByLevel[lvl] = (statsByLevel[lvl] || 0) + 1;
});

console.log('\n--- QUESTIONS BREAKDOWN BY CATEGORY ---');
console.table(statsByCat);

console.log('\n--- QUESTIONS BREAKDOWN BY LEVEL ---');
console.table(statsByLevel);

console.log('\n--- QUESTIONS BREAKDOWN BY SUBJECT ---');
console.table(statsBySubj);
