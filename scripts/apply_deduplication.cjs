const fs = require('fs');
const path = require('path');
const { generateAllMTs } = require('./generate_mts_subjects.cjs');

console.log('=== [1/4] Generating 1,500 Brand New Unique MTs Questions ===');
const newMtsQuestions = generateAllMTs();
console.log(`Generated: ${newMtsQuestions.length} MTs questions.`);

// Verify 0 duplicates in new MTs questions
const mtsTextMap = new Map();
let mtsDupes = 0;
newMtsQuestions.forEach(q => {
  const norm = (q.question || '').trim().toLowerCase().replace(/\s+/g, ' ');
  if (mtsTextMap.has(norm)) mtsDupes++;
  mtsTextMap.set(norm, q.id);
});
console.log(`Verified new MTs duplicate count: ${mtsDupes}`);
if (mtsDupes > 0) {
  throw new Error(`Abort: New MTs still has ${mtsDupes} duplicates!`);
}

// Write src/data/mtsQuestions.ts
const mtsPath = path.join(__dirname, '../src/data/mtsQuestions.ts');
fs.writeFileSync(
  mtsPath,
  `import { Question } from '../types';\n\nexport const mtsQuestions: Question[] = ${JSON.stringify(newMtsQuestions, null, 2)};\n`,
  'utf-8'
);
console.log(`Updated ${mtsPath} with 1,500 unique questions.`);

// Helper function to deduplicate a TypeScript question file
function deduplicateTsFile(filePath, exportName) {
  const fullPath = path.join(__dirname, '..', filePath);
  if (!fs.existsSync(fullPath)) {
    console.log(`File ${filePath} not found, skipping.`);
    return [];
  }

  // Load via tsx or extract json
  // Since files export const <exportName>: Question[] = [...];
  const fileContent = fs.readFileSync(fullPath, 'utf-8');
  const match = fileContent.match(/export const \w+: Question\[\] = ([\s\S]+?);(?:\n|$)/);
  if (!match) {
    console.warn(`Could not match export in ${filePath}`);
    return [];
  }

  let questions;
  try {
    questions = JSON.parse(match[1]);
  } catch (err) {
    console.error(`Error parsing JSON in ${filePath}`, err);
    return [];
  }

  const seen = new Set();
  const uniqueQuestions = [];
  let removedCount = 0;

  for (const q of questions) {
    const norm = (q.question || '').trim().toLowerCase().replace(/\s+/g, ' ');
    if (!norm || seen.has(norm)) {
      removedCount++;
    } else {
      seen.add(norm);
      uniqueQuestions.push(q);
    }
  }

  console.log(`[Deduplicate] ${filePath}: Original=${questions.length}, Unique=${uniqueQuestions.length}, Removed Dupes=${removedCount}`);

  // Write back cleanly
  const newContent = `import { Question } from '../types';\n\nexport const ${exportName}: Question[] = ${JSON.stringify(uniqueQuestions, null, 2)};\n`;
  fs.writeFileSync(fullPath, newContent, 'utf-8');

  return uniqueQuestions;
}

console.log('\n=== [2/4] Deduplicating other data files (removing duplicates without changing legitimate questions) ===');
deduplicateTsFile('src/data/pedagogikQuestions.ts', 'pedagogikQuestions');
deduplicateTsFile('src/data/literacyQuestions.ts', 'literacyQuestions');
deduplicateTsFile('src/data/numeracyQuestions.ts', 'numeracyQuestions');
deduplicateTsFile('src/data/scienceQuestions.ts', 'scienceQuestions');
deduplicateTsFile('src/data/rumpunPaiQuestions.ts', 'rumpunPaiQuestions');
deduplicateTsFile('src/data/tendikQuestions.ts', 'tendikQuestions');
deduplicateTsFile('src/data/maQuestions.ts', 'maQuestions');
deduplicateTsFile('src/data/miEnglishQuestions.ts', 'miEnglishQuestions');

console.log('\n=== [3/4] Updating server_data/db.json ===');
const dbPath = path.join(__dirname, '../server_data/db.json');
if (fs.existsSync(dbPath)) {
  const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
  const originalTotal = (db.questions || []).length;

  // Filter out any MTs questions from db
  const nonMtsQuestions = (db.questions || []).filter(
    q => !(q.educationLevel === 'MTs' || (q.id && q.id.startsWith('mts-')))
  );

  // Deduplicate non-MTs questions in db
  const seenNonMts = new Set();
  const uniqueNonMts = [];
  let nonMtsDupesRemoved = 0;

  for (const q of nonMtsQuestions) {
    const norm = (q.question || '').trim().toLowerCase().replace(/\s+/g, ' ');
    if (!norm || seenNonMts.has(norm)) {
      nonMtsDupesRemoved++;
    } else {
      seenNonMts.add(norm);
      uniqueNonMts.push(q);
    }
  }

  // Combine unique non-MTs + brand new MTs questions
  db.questions = [...uniqueNonMts, ...newMtsQuestions];

  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf-8');
  console.log(`Updated server_data/db.json: Original=${originalTotal}, Non-MTs Dupes Removed=${nonMtsDupesRemoved}, New MTs=${newMtsQuestions.length}, Total Questions Now=${db.questions.length}`);
}

console.log('\n=== [4/4] Verification Audit ===');
const dbAfter = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
const finalSeen = new Map();
let finalDupes = 0;

dbAfter.questions.forEach((q, idx) => {
  const norm = (q.question || '').trim().toLowerCase().replace(/\s+/g, ' ');
  if (finalSeen.has(norm)) {
    finalDupes++;
    console.warn(`[REMAINING DUPE] ${q.id} duplicates ${finalSeen.get(norm)}: "${q.question.slice(0, 50)}..."`);
  } else {
    finalSeen.set(norm, q.id);
  }
});

console.log(`Final Database Audit: Total=${dbAfter.questions.length}, Duplicates=${finalDupes}`);
if (finalDupes === 0) {
  console.log('SUCCESS: All duplicate questions removed and all MTs categories repaired with brand new questions!');
}
