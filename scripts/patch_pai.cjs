const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'generate_mts_pai.cjs');
let code = fs.readFileSync(filePath, 'utf8');

// The file has 5 functions:
// 1. generateQuranHaditsMTs
// 2. generateAkidahAkhlakMTs
// 3. generateFikihMTs
// 4. generateSkiMTs
// 5. generateBahasaArabMTs

// Split by function definitions
const parts = code.split('function generate');
const newParts = [parts[0]];

for (let i = 1; i < parts.length; i++) {
  let part = 'function generate' + parts[i];
  let tag = 'PAI MTs';
  if (part.includes('QuranHaditsMTs')) tag = "Qur'an Hadits MTs";
  else if (part.includes('AkidahAkhlakMTs')) tag = 'Akidah Akhlak MTs';
  else if (part.includes('FikihMTs')) tag = 'Fikih MTs';
  else if (part.includes('SkiMTs')) tag = 'SKI MTs';
  else if (part.includes('BahasaArabMTs')) tag = 'Bahasa Arab MTs';

  // Replace each qText = ` with qText = `[${tag} #${num}]: 
  part = part.replace(/qText = `(\[[^\]]+#\$\{num\}\]: )?/g, `qText = \`[${tag} #\${num}]: `);
  newParts.push(part.replace('function generate', ''));
}

fs.writeFileSync(filePath, newParts.join('function generate'), 'utf8');
console.log('Successfully patched generate_mts_pai.cjs with unique tags!');
