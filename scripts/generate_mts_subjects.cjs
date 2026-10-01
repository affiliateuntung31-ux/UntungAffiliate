// Master Aggregator for MTs Questions
// Generates 100% unique, authentic, non-repeating questions for all 10 MTs subjects
const { generateMatematikaMTs } = require('./generate_mts_math.cjs');
const { generateIpaMTs } = require('./generate_mts_ipa.cjs');
const { generateBahasaIndonesiaMTs, generateBahasaInggrisMTs, generateIpsMTs } = require('./generate_mts_umum_clean.cjs');
const { 
  generateQuranHaditsMTs, 
  generateAkidahAkhlakMTs, 
  generateFikihMTs, 
  generateSkiMTs, 
  generateBahasaArabMTs 
} = require('./generate_mts_pai_clean.cjs');

function generateAllMTs() {
  const allMTs = [];

  console.log('[MTs BUILD] Generating Matematika MTs...');
  allMTs.push(...generateMatematikaMTs());

  console.log('[MTs BUILD] Generating IPA Terpadu MTs...');
  allMTs.push(...generateIpaMTs());

  console.log('[MTs BUILD] Generating Bahasa Indonesia MTs...');
  allMTs.push(...generateBahasaIndonesiaMTs());

  console.log('[MTs BUILD] Generating Bahasa Inggris MTs...');
  allMTs.push(...generateBahasaInggrisMTs());

  console.log('[MTs BUILD] Generating IPS Terpadu MTs...');
  allMTs.push(...generateIpsMTs());

  console.log('[MTs BUILD] Generating Qur\'an Hadits MTs...');
  allMTs.push(...generateQuranHaditsMTs());

  console.log('[MTs BUILD] Generating Akidah Akhlak MTs...');
  allMTs.push(...generateAkidahAkhlakMTs());

  console.log('[MTs BUILD] Generating Fikih MTs...');
  allMTs.push(...generateFikihMTs());

  console.log('[MTs BUILD] Generating SKI MTs...');
  allMTs.push(...generateSkiMTs());

  console.log('[MTs BUILD] Generating Bahasa Arab MTs...');
  allMTs.push(...generateBahasaArabMTs());

  console.log(`[MTs BUILD] Successfully generated ${allMTs.length} total MTs questions.`);
  return allMTs;
}

module.exports = {
  generateAllMTs,
  generateMatematikaMTs,
  generateIpaMTs,
  generateBahasaIndonesiaMTs,
  generateBahasaInggrisMTs,
  generateIpsMTs,
  generateQuranHaditsMTs,
  generateAkidahAkhlakMTs,
  generateFikihMTs,
  generateSkiMTs,
  generateBahasaArabMTs
};
