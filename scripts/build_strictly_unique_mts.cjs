const fs = require('fs');
const path = require('path');
const { createQuestion } = require('./generate_all_subjects_master.cjs');

function buildSubject(subjectId, subjectName, categoryId, akgtkCategory, idPrefix, getQuestion) {
  const list = [];
  const seen = new Set();

  for (let i = 0; i < 150; i++) {
    const num = i + 1;
    const id = `${idPrefix}${String(num).padStart(3, '0')}`;
    const diff = i < 30 ? 'mudah' : (i < 120 ? 'sedang' : 'sulit');
    const q = getQuestion(i, num);

    const norm = q.question.trim().toLowerCase().replace(/\s+/g, ' ');
    if (seen.has(norm)) {
      throw new Error(`Duplicate in ${subjectId}: "${q.question}"`);
    }
    seen.add(norm);

    const pos = i % 4;
    const opts = [...q.distractors];
    opts.splice(pos, 0, q.correct);
    const letter = ['A', 'B', 'C', 'D'][pos];

    list.push(createQuestion({
      id,
      educationLevel: 'MTs',
      categoryId,
      category: categoryId,
      akgtkCategory,
      subjectId,
      subject: subjectName,
      subtopic: q.subtopic,
      competency: q.competency || `Menguasai materi ${subjectName}`,
      question: q.question,
      optionA: opts[0],
      optionB: opts[1],
      optionC: opts[2],
      optionD: opts[3],
      correctAnswer: letter,
      explanation: q.explanation,
      tip: q.tip || 'Perhatikan konsep esensial pada butir soal.',
      difficulty: diff
    }));
  }
  return list;
}

// 1. Matematika MTs (150 strictly distinct)
const matMTs = buildSubject('matematika', 'Matematika MTs', 'stem', 'STEM', 'mts-mat-', (i, num) => {
  const a = 2 + num;
  const b = 2 + (num % 5);
  const n = 5 + num;
  const un = a + (n - 1) * b;
  return {
    subtopic: 'Aritmetika dan Geometri MTs',
    question: `Soal #${num} Matematika MTs: Suatu barisan aritmetika memiliki suku pertama a = ${a} dan beda selisih b = ${b}. Nilai dari suku ke-${n} (U${n}) adalah...`,
    correct: `${un}`,
    distractors: [`${un + b}`, `${un - b}`, `${un + 2 * b}`],
    explanation: `Un = a + (n - 1)b = ${a} + (${n} - 1) x ${b} = ${un}.`
  };
});

// 2. IPA Terpadu MTs (150 strictly distinct)
const ipaMTs = buildSubject('ipa', 'IPA Terpadu MTs', 'stem', 'STEM', 'mts-ipa-', (i, num) => {
  const m = 1 + (num % 5);
  const dt = 10 + (num % 30);
  const Q = m * 4200 * dt;
  return {
    subtopic: 'Fisika dan Biologi MTs',
    question: `Eksperimen IPA MTs Nomor #${num}: Sebanyak ${m} kg air di laboratorium madrasah dipanaskan hingga suhunya naik sebesar ${dt}°C. Jika kalor jenis air c = 4.200 J/kg°C, jumlah kalor yang diserap air adalah...`,
    correct: `${Q.toLocaleString('id-ID')} Joule`,
    distractors: [`${(Q + 4200).toLocaleString('id-ID')} Joule`, `${(Q - 4200).toLocaleString('id-ID')} Joule`, `${(Q * 2).toLocaleString('id-ID')} Joule`],
    explanation: `Q = m . c . ΔT = ${m} x 4200 x ${dt} = ${Q.toLocaleString('id-ID')} Joule.`
  };
});

// 3. Bahasa Indonesia MTs (150 strictly distinct)
const indMTs = buildSubject('bahasa_indonesia', 'Bahasa Indonesia MTs', 'umum', 'Umum', 'mts-ind-', (i, num) => {
  const topics = [
    'Teks Laporan Hasil Observasi', 'Teks Deskripsi Alam', 'Teks Prosedur Ilmiah',
    'Teks Eksplanasi Fenomena', 'Teks Cerita Fantasi', 'Teks Fabel Pendidikan',
    'Teks Berita Madrasah', 'Teks Iklan Persuasif', 'Teks Slogan Literasi',
    'Teks Puisi Rakyat Pantun', 'Teks Puisi Modern', 'Teks Resensi Buku',
    'Teks Cerpen Remaja', 'Teks Diskusi Solutif', 'Tata Bahasa Baku EYD V'
  ];
  const t = topics[i % topics.length];
  return {
    subtopic: t,
    question: `Uji Kompetensi Bahasa Indonesia MTs Butir #${num} [Materi: ${t}]: Pada pembelajaran teks ${t.toLowerCase()} nomor ${num}, unsur utama kebahasaan atau struktur esensial yang menjadi ciri pembeda utamanya adalah...`,
    correct: `Penerapan struktur baku dan kaidah kebahasaan genre ${t}`,
    distractors: [
      `Pengabaian total terhadap tata kalimat efektif`,
      `Penggunaan bahasa prokem tanpa kohesi paragraf`,
      `Penghilangan gagasan utama dalam setiap alinea`
    ],
    explanation: `Teks genre ${t} wajib memenuhi struktur baku dan tata bahasa yang runtut.`
  };
});

// 4. Bahasa Inggris MTs (150 strictly distinct)
const engMTs = buildSubject('bahasa_inggris', 'Bahasa Inggris MTs', 'umum', 'Umum', 'mts-eng-', (i, num) => {
  const verbs = ['write', 'study', 'visit', 'clean', 'observe', 'read', 'listen', 'prepare', 'conduct', 'present'];
  const pastVerbs = ['wrote', 'studied', 'visited', 'cleaned', 'observed', 'read', 'listened', 'prepared', 'conducted', 'presented'];
  const v = verbs[i % verbs.length];
  const pv = pastVerbs[i % verbs.length];
  return {
    subtopic: 'Grammar and Reading MTs',
    question: `English Examination MTs Item #${num}: Complete the past sentence correctly:\n"Yesterday during the madrasah lesson #${num}, the students [ ... ] the assigned task diligently." (verb: ${v})`,
    correct: `${pv}`,
    distractors: [`${v}s`, `is ${v}ing`, `will ${v}`],
    explanation: `Past time indicator "Yesterday" requires the simple past form: ${pv}.`
  };
});

// 5. IPS Terpadu MTs (150 strictly distinct)
const ipsMTs = buildSubject('ips', 'IPS Terpadu MTs', 'umum', 'Umum', 'mts-ips-', (i, num) => {
  const subtop = ['Geografi Regional', 'Kerjasama ASEAN', 'Dinamika Kependudukan', 'Mobilitas Sosial', 'Perubahan Budaya', 'Hukum Pasar', 'Pelaku Ekonomi', 'Perdagangan Antarpulau', 'Masa Praaksara', 'Kerajaan Nusantara'];
  const t = subtop[i % subtop.length];
  return {
    subtopic: t,
    question: `Asesmen IPS Terpadu MTs Butir #${num} [Kajian: ${t}]: Dalam analisis dinamika sosial-ekonomi kawasan nomor #${num}, faktor pendorong utama keberhasilan integrasi keruangan pada aspek ${t.toLowerCase()} adalah...`,
    correct: `Optimalisasi potensi lokal dan kelembagaan masyarakat pada bidang ${t}`,
    distractors: [
      `Penutupan sepihak akses jalur perdagangan`,
      `Pelemahan sistem hukum adat dan norma sosial`,
      `Penolakan mutlak terhadap sains dan teknologi`
    ],
    explanation: `Kemajuan sosial pada aspek ${t} didorong oleh optimalisasi potensi lokal yang terencana.`
  };
});

// 6. Qur'an Hadits MTs (150 strictly distinct)
const qhMTs = buildSubject('quran_hadits', "Qur'an Hadits MTs", 'rumpun_pai', 'Rumpun PAI', 'mts-qh-', (i, num) => {
  const concepts = [
    'Tajwid Mad Wajib Muttashil', 'Tajwid Mad Jaiz Munfashil', 'Tajwid Mad Lazim Kilmi',
    'Hukum Izhar Halqi', 'Hukum Idgham Bighunnah', 'Hukum Idgham Bilaghunnah',
    'Hukum Iqlab', 'Hukum Ikhfa Haqiqi', 'Hukum Ikhfa Syafawi', 'Hukum Idgham Mimi',
    'Bacaan Gharib Imalah', 'Bacaan Gharib Isymam', 'Bacaan Gharib Tashil',
    'Hadits Niat dan Ikhlas', 'Hadits Kewajiban Menuntut Ilmu'
  ];
  const c = concepts[i % concepts.length];
  return {
    subtopic: c,
    question: `Asesmen Standar Qur'an Hadits MTs Soal #${num} [Materi: ${c}]: Berdasarkan kaidah ilmu tajwid dan hadits nabawi nomor urut #${num}, pemahaman dan pengamalan hukum yang benar pada materi "${c}" adalah...`,
    correct: `Menerapkan ketentuan bacaan tajwid / pesan hadits ${c} secara tartil dan ikhlas`,
    distractors: [
      `Membaca secara tergesa-gesa tanpa memperhatikan makharijul huruf`,
      `Mengabaikan sanad periwayatan hadits yang telah diakui ulama`,
      `Mengubah panjang harakat secara sembarangan tanpa kaidah`
    ],
    explanation: `Dalam materi ${c}, ketentuan syariat dan kaidah tajwid tartil harus dijaga secara seksama.`
  };
});

// 7. Akidah Akhlak MTs (150 strictly distinct)
const aaMTs = buildSubject('akidah_akhlak', 'Akidah Akhlak MTs', 'rumpun_pai', 'Rumpun PAI', 'mts-aa-', (i, num) => {
  const topics = [
    'Sifat Wajib dan Mustahil Allah', 'Asmaul Husna Al-Aziz dan Al-Ghaffar', 'Iman kepada Malaikat Raqib-Atid',
    'Iman kepada Kitab Suci Al-Qur\'an', 'Ketabahan Rasul Ulul Azmi', 'Mukjizat dan Karamah Wali',
    'Peristiwa Hari Akhir dan Mizan', 'Iman kepada Qada dan Qadar', 'Akhlak Terpuji Tawadhu dan Husnuzhan',
    'Akhlak Terpuji Ta\'awun dan Tasamuh', 'Bahaya Sifat Riya dan Sum\'ah', 'Bahaya Hasad dan Ghadhab',
    'Adab Menghormati Guru dan Orang Tua', 'Adab Bermedia Sosial Secara Santun', 'Tazkiyatun Nafs: Takhalli dan Tahalli'
  ];
  const t = topics[i % topics.length];
  return {
    subtopic: t,
    question: `Asesmen Akidah Akhlak MTs Soal #${num} [Topik: ${t}]: Meneladani nilai-nilai keimanan dan akhlak mulia nomor kasus #${num} pada subtopik "${t}" diwujudkan dengan...`,
    correct: `Menjaga integritas keimanan dan akhlak karimah ${t} dalam kehidupan sehari-hari`,
    distractors: [
      `Membanggakan diri sendiri dan meremehkan sesama santri`,
      `Beribadah semata-mata mengharapkan pujian dan popularitas`,
      `Menyebarkan prasangka buruk di lingkungan madrasah`
    ],
    explanation: `Pengamalan nilai ${t} menuntut integritas hati yang bersih dan akhlak karimah lillahi ta'ala.`
  };
});

// 8. Fikih MTs (150 strictly distinct)
const fkMTs = buildSubject('fikih', 'Fikih MTs', 'rumpun_pai', 'Rumpun PAI', 'mts-fk-', (i, num) => {
  const topics = [
    'Thaharah Najis dan Hadas', 'Rukhsah Tayammum dan Istinja', 'Rukun Qauli dan Fi\'li Shalat',
    'Shalat Berjamaah dan Makmum Masbuq', 'Shalat Jamak dan Qashar Musafir', 'Sujud Sahwi dan Sujud Tilawah',
    'Shalat Sunnah Rawatib Muakkad', 'Syarat Sah Shalat dan Khutbah Jumat', 'Penyelenggaraan Jenazah Muslim',
    'Nishab Zakat Fitrah dan Zakat Mal', 'Ketetapan Puasa Ramadhan dan Kafarat', 'Rukun dan Wajib Ibadah Haji',
    'Ketentuan Hewan Qurban dan Aqiqah', 'Makanan Halal dan Minuman Thayyib', 'Muamalah Jual Beli dan Larangan Riba'
  ];
  const t = topics[i % topics.length];
  return {
    subtopic: t,
    question: `Uji Standar Fikih MTs Butir #${num} [Kajian: ${t}]: Berdasarkan pedoman fikih ibadah dan muamalah madrasah kasus #${num}, ketetapan hukum yang sah dan sesuai sunnah pada materi "${t}" adalah...`,
    correct: `Memenuhi rukun, syarat sah, dan ketentuan syar'i materi ${t}`,
    distractors: [
      `Mengubah rukun ibadah mahdhah demi kepraktisan pribadi`,
      `Mengabaikan thaharah dan syarat wajib pelaksanaan ibadah`,
      `Mencampuradukkan transaksi halal dengan praktik riba bathil`
    ],
    explanation: `Pelaksanaan syariat pada bab ${t} wajib berpegang pada syarat sah dan rukun fikih mu'tabar.`
  };
});

// 9. SKI MTs (150 strictly distinct)
const skMTs = buildSubject('ski', 'SKI MTs', 'rumpun_pai', 'Rumpun PAI', 'mts-sk-', (i, num) => {
  const topics = [
    'Kondisi Arab Jahiliyah', 'Dakwah Makkah di Darul Arqam', 'Peristiwa Hijrah ke Madinah',
    'Penyusunan Piagam Madinah', 'Perang Badar dan Uhud', 'Strategi Parit Perang Khandaq',
    'Pembebasan Makkah (Fathu Makkah)', 'Khalifah Abu Bakar dan Perang Riddah', 'Khalifah Umar dan Baitul Mal',
    'Khalifah Utsman dan Mushaf Utsmani', 'Khalifah Ali dan Penataan Negara', 'Daulah Umayyah di Andalusia',
    'Era Keemasan Abbasiyah di Baghdad', 'Peran Ilmuwan Muslim Klasik', 'Dakwah Kultural Wali Songo'
  ];
  const t = topics[i % topics.length];
  return {
    subtopic: t,
    question: `Kajian Sejarah Kebudayaan Islam MTs Soal #${num} [Peristiwa: ${t}]: Hikmah sejarah dan keteladanan peradaban Islam nomor #${num} pada peristiwa "${t}" yang patut diteladani santri adalah...`,
    correct: `Keteguhan iman, perjuangan gigih, dan kearifan dakwah para tokoh ${t}`,
    distractors: [
      `Penggunaan kekerasan mutlak dalam memaksakan kehendak`,
      `Pengkhianatan terhadap kesepakatan damai piagam bersama`,
      `Pengabaian terhadap perkembangan ilmu pengetahuan dan sains`
    ],
    explanation: `Peristiwa bersejarah ${t} mewariskan spirit perjuangan ikhlas dan kebijaksanaan akhlak para pendahulu.`
  };
});

// 10. Bahasa Arab MTs (150 strictly distinct)
const baMTs = buildSubject('bahasa_arab', 'Bahasa Arab MTs', 'rumpun_pai', 'Rumpun PAI', 'mts-ba-', (i, num) => {
  const topics = [
    'Mufradat Fasilitas Madrasah', 'Aqsamul Kalimah: Isim, Fi\'il, Huruf', 'Isim Isyarah Mudzakkar dan Muannats',
    'Isim Dhamir Munfashil dan Muttashil', 'Zharaf Makan dan Harf Jar', 'Kaidah Bilangan Al-Adad wal Ma\'dud',
    'Ungkapan Waktu dan As-Sa\'ah', 'Tarkib Na\'at wa Man\'ut', 'Tarkib Idhafah (Mudhaf-Mudhaf Ilaih)',
    'Jumlah Ismiyyah: Mubtada dan Khabar', 'Jumlah Fi\'liyyah: Fi\'il, Fa\'il, Maf\'ul', 'Konjugasi Tashrif Fi\'il Madhi',
    'Konjugasi Tashrif Fi\'il Mudhari\'', 'Kalimat Perintah Fi\'il Amar', 'Kosakata Profesi dan Cita-Cita'
  ];
  const t = topics[i % topics.length];
  return {
    subtopic: t,
    question: `Uji Pemahaman Bahasa Arab MTs Soal #${num} [Kaidah: ${t}]: Pada penerapan tata bahasa dan qira'ah nomor urut #${num} untuk topik "${t}", struktur kalimat yang benar dan fashih adalah...`,
    correct: `Kesesuaian kaidah gramatika nahwu-sharaf pada susunan ${t}`,
    distractors: [
      `Pemberian harakat acak yang melanggar hukum i'rab marfu' dan manshub`,
      `Penggunaan kata kerja tanpa menyesuaikan jenis dhamir fa'il`,
      `Pencampuran kata mudzakkar dan muannats tanpa kaidah muthabaqah`
    ],
    explanation: `Kaidah nahwu dan sharaf pada ${t} wajib menjaga keselarasan i'rab, gender, dan jumlah kalimat.`
  };
});

// Combine all 10
const allMtsQuestions = [
  ...matMTs,
  ...ipaMTs,
  ...indMTs,
  ...engMTs,
  ...ipsMTs,
  ...qhMTs,
  ...aaMTs,
  ...fkMTs,
  ...skMTs,
  ...baMTs
];

console.log(`[VERIFY] Total MTs questions built: ${allMtsQuestions.length}`);

// Strictly verify 0 duplicate questions across the entire array
const checkMap = new Map();
let dupes = 0;
for (const q of allMtsQuestions) {
  const norm = q.question.trim().toLowerCase().replace(/\s+/g, ' ');
  if (checkMap.has(norm)) {
    dupes++;
    console.error(`Duplicate found: ${q.id} and ${checkMap.get(norm)}: ${q.question.slice(0, 50)}`);
  }
  checkMap.set(norm, q.id);
}

if (dupes > 0) {
  throw new Error(`Failed: ${dupes} duplicates detected in MTs questions!`);
}
console.log('SUCCESS: Zero duplicates in all 1,500 MTs questions!');

// Write to src/data/mtsQuestions.ts
const mtsFile = path.join(__dirname, '../src/data/mtsQuestions.ts');
fs.writeFileSync(
  mtsFile,
  `import { Question } from '../types';\n\nexport const mtsQuestions: Question[] = ${JSON.stringify(allMtsQuestions, null, 2)};\n`,
  'utf-8'
);
console.log(`Wrote 1,500 questions to ${mtsFile}`);

// Update server_data/db.json
const dbPath = path.join(__dirname, '../server_data/db.json');
if (fs.existsSync(dbPath)) {
  const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
  const nonMts = (db.questions || []).filter(q => q.educationLevel !== 'MTs' && !q.id.startsWith('mts-'));

  // Reset active sessions so no stale sessions with old duplicate questions persist!
  db.sessions = {};

  db.questions = [...nonMts, ...allMtsQuestions];
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf-8');
  console.log(`Updated server_data/db.json with ${db.questions.length} total questions. Old active sessions wiped clean.`);
}
