const fs = require('fs');
const path = require('path');
const { buildDynamicSubjectBank } = require('./mts_bank_helper.cjs');

// ==========================================
// 1. MATEMATIKA MTS (150 UNIQUE ITEMS)
// ==========================================
function getMatematikaMTs() {
  return buildDynamicSubjectBank({
    subjectId: 'matematika',
    subjectName: 'Matematika MTs',
    categoryId: 'stem',
    akgtkCategory: 'STEM',
    idPrefix: 'mts-mat-',
    items: (i, diff, num) => {
      // 150 distinct mathematical questions
      const idx = i;
      if (idx < 15) {
        // Barisan Aritmetika
        const a = 3 + idx * 2;
        const b = 2 + (idx % 4);
        const n = 10 + idx;
        const un = a + (n - 1) * b;
        return {
          subtopic: 'Barisan dan Deret Aritmetika',
          competency: 'Menentukan suku ke-n barisan bilangan',
          question: `Suku pertama barisan aritmetika adalah ${a} dan bedanya ${b}. Nilai suku ke-${n} (U${n}) dari barisan tersebut adalah...`,
          correct: `${un}`,
          distractors: [`${un + b}`, `${un - b}`, `${un + 2 * b}`],
          explanation: `Un = a + (n - 1)b = ${a} + (${n} - 1)(${b}) = ${un}.`
        };
      } else if (idx < 30) {
        // Deret Geometri
        const a = 2 + (idx % 3);
        const r = 2;
        const n = 4 + (idx % 4);
        const un = a * Math.pow(r, n - 1);
        return {
          subtopic: 'Barisan dan Deret Geometri',
          competency: 'Menentukan suku ke-n barisan geometri',
          question: `Suatu barisan geometri memiliki suku awal a = ${a} dan rasio r = ${r}. Suku ke-${n} dari barisan tersebut adalah...`,
          correct: `${un}`,
          distractors: [`${un * 2}`, `${un + 10}`, `${un / 2}`],
          explanation: `Un = a . r^(n-1) = ${a} . 2^(${n - 1}) = ${un}.`
        };
      } else if (idx < 45) {
        // Aljabar Faktorisasi
        const p = 1 + (idx - 30);
        const q = 3 + (idx % 5);
        const b = p + q;
        const c = p * q;
        return {
          subtopic: 'Faktorisasi Bentuk Aljabar',
          competency: 'Memfaktorkan bentuk persamaan kuadrat',
          question: `Faktorisasi dari bentuk aljabar x² + ${b}x + ${c} adalah...`,
          correct: `(x + ${p})(x + ${q})`,
          distractors: [`(x - ${p})(x - ${q})`, `(x + ${p + 1})(x + ${q - 1})`, `(x - ${p})(x + ${q})`],
          explanation: `Hasil kali ${p} x ${q} = ${c} dan jumlah ${p} + ${q} = ${b}.`
        };
      } else if (idx < 60) {
        // SPLDV
        const xVal = 2 + (idx - 45);
        const yVal = 3 + (idx % 4);
        const eq1 = 2 * xVal + yVal;
        const eq2 = xVal + 3 * yVal;
        return {
          subtopic: 'Sistem Persamaan Linear Dua Variabel',
          competency: 'Menyelesaikan himpunan penyelesaian SPLDV',
          question: `Himpunan penyelesaian dari sistem persamaan 2x + y = ${eq1} dan x + 3y = ${eq2} adalah...`,
          correct: `x = ${xVal}, y = ${yVal}`,
          distractors: [`x = ${xVal + 1}, y = ${yVal - 1}`, `x = ${yVal}, y = ${xVal}`, `x = ${xVal - 1}, y = ${yVal + 2}`],
          explanation: `Eliminasi dan substitusi menghasilkan x = ${xVal} dan y = ${yVal}.`
        };
      } else if (idx < 75) {
        // Pythagoras
        const triples = [
          [3, 4, 5], [5, 12, 13], [6, 8, 10], [7, 24, 25], [8, 15, 17],
          [9, 12, 15], [10, 24, 26], [12, 16, 20], [15, 20, 25], [9, 40, 41],
          [12, 35, 37], [16, 30, 34], [18, 24, 30], [20, 21, 29], [14, 48, 50]
        ];
        const tr = triples[idx - 60];
        return {
          subtopic: 'Teorema Pythagoras',
          competency: 'Menerapkan Teorema Pythagoras pada segitiga siku-siku',
          question: `Segitiga siku-siku memiliki panjang sisi siku-siku ${tr[0]} cm dan ${tr[1]} cm. Panjang sisi miring (hipotenusa) segitiga tersebut adalah...`,
          correct: `${tr[2]} cm`,
          distractors: [`${tr[2] + 2} cm`, `${tr[2] - 1} cm`, `${tr[2] + 4} cm`],
          explanation: `c = √(a² + b²) = √(${tr[0]}² + ${tr[1]}²) = ${tr[2]} cm.`
        };
      } else if (idx < 90) {
        // Lingkaran
        const r = 7 * (1 + (idx - 75));
        const kel = 2 * (22 / 7) * r;
        return {
          subtopic: 'Lingkaran',
          competency: 'Menghitung keliling dan luas lingkaran',
          question: `Keliling lingkaran yang memiliki jari-jari r = ${r} cm (dengan π = 22/7) adalah...`,
          correct: `${kel} cm`,
          distractors: [`${kel + 22} cm`, `${kel - 14} cm`, `${kel * 2} cm`],
          explanation: `Keliling K = 2 . π . r = 2 x (22/7) x ${r} = ${kel} cm.`
        };
      } else if (idx < 105) {
        // Bangun Ruang
        const s = 4 + (idx - 90);
        const vol = s * s * s;
        return {
          subtopic: 'Bangun Ruang Sisi Datar',
          competency: 'Menghitung volume bangun ruang kubus',
          question: `Volume kubus yang memiliki panjang rusuk ${s} cm adalah...`,
          correct: `${vol} cm³`,
          distractors: [`${vol + 20} cm³`, `${vol - 16} cm³`, `${6 * s * s} cm³`],
          explanation: `Volume kubus V = s³ = ${s} x ${s} x ${s} = ${vol} cm³.`
        };
      } else if (idx < 120) {
        // Statistika
        const offset = idx - 105;
        const vals = [70 + offset, 75 + offset, 80 + offset, 85 + offset, 90 + offset];
        const mean = (vals.reduce((a, b) => a + b, 0) / 5).toFixed(1);
        return {
          subtopic: 'Statistika Ukuran Pemusatan',
          competency: 'Menghitung nilai rata-rata (mean)',
          question: `Rata-rata hitung (mean) dari data nilai asesmen: ${vals.join(', ')} adalah...`,
          correct: `${mean}`,
          distractors: [`${(Number(mean) + 2).toFixed(1)}`, `${(Number(mean) - 2).toFixed(1)}`, `${(Number(mean) + 4).toFixed(1)}`],
          explanation: `Mean = jumlah data / banyak data = (${vals.join(' + ')}) / 5 = ${mean}.`
        };
      } else if (idx < 135) {
        // Peluang
        const total = 10 + (idx - 120);
        const merah = 3 + (idx % 4);
        return {
          subtopic: 'Peluang Teoretik',
          competency: 'Menentukan peluang suatu kejadian',
          question: `Sebuah kotak berisi ${total} kelereng, ${merah} di antaranya berwarna hijau dan sisanya putih. Peluang terambil satu kelereng hijau secara acak adalah...`,
          correct: `${merah}/${total}`,
          distractors: [`${total - merah}/${total}`, `1/${total}`, `${merah}/${total + 2}`],
          explanation: `Peluang P = n(A) / n(S) = ${merah} / ${total}.`
        };
      } else {
        // Transformasi Geometri
        const x = 2 + (idx - 135);
        const y = 3 + (idx % 3);
        const tx = 4;
        const ty = -2;
        return {
          subtopic: 'Transformasi Geometri',
          competency: 'Menentukan hasil translasi titik koordinat',
          question: `Titik K(${x}, ${y}) ditranslasikan oleh T = (${tx}, ${ty}). Koordinat titik bayangan K' adalah...`,
          correct: `K'(${x + tx}, ${y + ty})`,
          distractors: [`K'(${x - tx}, ${y - ty})`, `K'(${x + tx + 1}, ${y})`, `K'(${y}, ${x})`],
          explanation: `K'(x + a, y + b) = (${x} + ${tx}, ${y} + (${ty})) = (${x + tx}, ${y + ty}).`
        };
      }
    }
  });
}

console.log('[GEN] Loading base generator for 10 MTs subjects...');
module.exports = {
  getMatematikaMTs
};
