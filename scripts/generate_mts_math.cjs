// Modular Generator for MTs questions - STEM: Matematika (150 UNIQUE QUESTIONS)
const { buildUniqueSubjectBank } = require('./generate_all_subjects_master.cjs');

function generateMatematikaMTs() {
  const mathSubtopics = [
    { name: 'Pola Bilangan & Barisan Aritmetika', comp: 'Menentukan suku ke-n dan jumlah deret aritmetika madrasah' },
    { name: 'Barisan & Deret Geometri', comp: 'Menghitung rasio dan suku ke-n deret geometri' },
    { name: 'Bentuk Aljabar & Faktorisasi Kuadrat', comp: 'Menyederhanakan aljabar dan pemfaktoran bentuk kuadrat' },
    { name: 'Persamaan Linear Satu Variabel (PLSV)', comp: 'Menyelesaikan permasalahan persamaan linear satu variabel' },
    { name: 'Pertidaksamaan Linear Satu Variabel (PtLSV)', comp: 'Menentukan himpunan penyelesaian pertidaksamaan linear' },
    { name: 'Sistem Persamaan Linear Dua Variabel (SPLDV)', comp: 'Menyelesaikan SPLDV kontekstual koperasi madrasah' },
    { name: 'Relasi dan Fungsi', comp: 'Menentukan nilai fungsi f(x) dan daerah hasil (range)' },
    { name: 'Persamaan Garis Lurus & Gradien', comp: 'Menentukan kemiringan/gradien dan persamaan garis' },
    { name: 'Teorema Pythagoras & Tripel Pythagoras', comp: 'Menerapkan tripel Pythagoras pada segitiga dan tiang madrasah' },
    { name: 'Lingkaran & Unsur-unsurnya', comp: 'Menghitung keliling, luas, juring, dan panjang busur lingkaran' },
    { name: 'Bangun Datar Segiempat & Segitiga', comp: 'Menghitung keliling dan luas lahan madrasah' },
    { name: 'Bangun Ruang Sisi Datar (Prisma & Limas)', comp: 'Menghitung luas permukaan dan volume prisma/limas gedung' },
    { name: 'Bangun Ruang Sisi Lengkung (Tabung & Kerucut)', comp: 'Menghitung volume tandon air dan kubah madrasah' },
    { name: 'Kesebangunan dan Kekongruenan', comp: 'Menghitung tinggi objek nyata menggunakan kesebangunan' },
    { name: 'Transformasi Geometri (Translasi & Refleksi)', comp: 'Menentukan koordinat bayangan hasil pergeseran dan pencerminan' },
    { name: 'Transformasi Geometri (Rotasi & Dilatasi)', comp: 'Menentukan bayangan hasil rotasi dan dilatasi faktor k' },
    { name: 'Statistika (Mean, Median, Modus)', comp: 'Menganalisis ukuran pemusatan data asesmen madrasah' },
    { name: 'Peluang Teoretik dan Frekuensi Harapan', comp: 'Menentukan peluang kejadian pada percobaan acak madrasah' },
    { name: 'Bilangan Berpangkat dan Bentuk Akar', comp: 'Menyederhanakan eksponen dan merasionalkan bentuk akar' },
    { name: 'Persamaan & Fungsi Kuadrat', comp: 'Menentukan akar persamaan, sumbu simetri, dan nilai optimum' }
  ];

  return buildUniqueSubjectBank({
    subjectId: 'matematika',
    subjectName: 'Matematika MTs',
    categoryId: 'stem',
    categoryName: 'STEM MTs',
    akgtkCategory: 'STEM',
    educationLevel: 'MTs',
    idPrefix: 'mts-mat-',
    totalTarget: 150,
    generator: (i, diff, num) => {
      const topic = mathSubtopics[i % mathSubtopics.length];
      const step = Math.floor(i / mathSubtopics.length) + 1; // 1 to 8
      const tIdx = i % mathSubtopics.length;

      let qText = '', cText = '', dList = [], exp = '', tip = '';

      if (tIdx === 0) {
        // Aritmetika
        const a = 4 + step * 3;
        const b = 2 + step;
        const n = 10 + step;
        const ans = a + (n - 1) * b;
        qText = `[Kasus Aritmetika MTs #${num}]: Di auditorium madrasah, penataan kursi baris pertama terdiri atas ${a} kursi. Setiap baris di belakangnya selalu bertambah ${b} kursi secara konstan. Berapakah kapasitas kursi yang tertata pada baris ke-${n}?`;
        cText = `${ans} kursi`;
        dList = [`${ans + b} kursi`, `${ans - b} kursi`, `${ans + 2 * b} kursi`];
        exp = `Rumus Un = a + (n - 1)b. a = ${a}, b = ${b}, n = ${n}. Un = ${a} + (${n - 1})(${b}) = ${ans} kursi.`;
        tip = 'Identifikasi suku pertama (a) dan selisih konstan (b).';
      } else if (tIdx === 1) {
        // Geometri
        const a = step + 1;
        const r = 2;
        const n = 3 + (step % 4);
        const ans = a * Math.pow(r, n - 1);
        qText = `[Kasus Geometri MTs #${num}]: Dalam penelitian mikrobiologi di madrasah, koloni bakteri jenis ke-${step} membelah diri menjadi 2 setiap 15 menit. Jika pada awal pengamatan terdapat ${a} bakteri, berapakah jumlah bakteri setelah periode pembelahan ke-${n}?`;
        cText = `${ans} bakteri`;
        dList = [`${ans * 2} bakteri`, `${ans - a} bakteri`, `${ans / 2} bakteri`];
        exp = `Rumus Un = a . r^(n-1). a = ${a}, r = 2, n = ${n}. Un = ${a} x 2^(${n - 1}) = ${ans}.`;
        tip = 'Gunakan rumus pertumbuhan geometri eksponensial Un = a.r^(n-1).';
      } else if (tIdx === 2) {
        // Aljabar
        const p = step + 1;
        const q = step + 3;
        const bCoeff = p + q;
        const cConst = p * q;
        qText = `[Aljabar MTs #${num}]: Bentuk pemfaktoran aljabar yang tepat dari persamaan kuadrat x² + ${bCoeff}x + ${cConst} adalah...`;
        cText = `(x + ${p})(x + ${q})`;
        dList = [`(x - ${p})(x - ${q})`, `(x + ${p + 1})(x + ${q - 1})`, `(x - ${p})(x + ${q})`];
        exp = `Cari p dan q sedemikian sehingga p + q = ${bCoeff} dan p x q = ${cConst}. Diperoleh p = ${p} dan q = ${q}, sehingga faktornya (x + ${p})(x + ${q}).`;
        tip = 'Faktorkan ax² + bx + c dengan mencari pasangan bilangan hasil kali c dan jumlah b.';
      } else if (tIdx === 3) {
        // PLSV
        const m = step + 2;
        const c = step * 3 + 1;
        const xVal = step + 2;
        const rhs = m * xVal + c;
        qText = `[Persamaan Linear #${num}]: Nilai x yang memenuhi persamaan linear satu variabel ${m}x + ${c} = ${rhs} adalah...`;
        cText = `x = ${xVal}`;
        dList = [`x = ${xVal + 1}`, `x = ${xVal - 1}`, `x = ${xVal + 2}`];
        exp = `${m}x = ${rhs} - ${c} => ${m}x = ${rhs - c} => x = ${(rhs - c) / m}.`;
        tip = 'Kumpulkan variabel di satu ruas dan konstanta di ruas lainnya.';
      } else if (tIdx === 4) {
        // PtLSV
        const k = step + 2;
        const c = step * 2 + 1;
        const bound = step + 3;
        const limit = k * bound + c;
        qText = `[Pertidaksamaan Linear #${num}]: Himpunan penyelesaian untuk pertidaksamaan ${k}x + ${c} ≤ ${limit} dengan x anggota bilangan bulat adalah...`;
        cText = `x ≤ ${bound}`;
        dList = [`x ≥ ${bound}`, `x < ${bound - 1}`, `x ≤ ${bound + 2}`];
        exp = `${k}x ≤ ${limit} - ${c} => ${k}x ≤ ${limit - c} => x ≤ ${bound}.`;
        tip = 'Bagi kedua ruas dengan koefisien x positif, arah tanda pertidaksamaan tetap.';
      } else if (tIdx === 5) {
        // SPLDV
        const hBuku = 3000 + step * 500;
        const hPena = 2000 + step * 250;
        const t1 = 2 * hBuku + 3 * hPena;
        const t2 = 3 * hBuku + 1 * hPena;
        const target = hBuku + hPena;
        qText = `[SPLDV Koperasi MTs #${num}]: Santri A membeli 2 buku dan 3 pensil seharga Rp${t1.toLocaleString('id-ID')}. Santri B membeli 3 buku dan 1 pensil sejenis seharga Rp${t2.toLocaleString('id-ID')}. Berapakah harga yang harus dibayar untuk 1 buku dan 1 pensil?`;
        cText = `Rp${target.toLocaleString('id-ID')}`;
        dList = [`Rp${(target + 1000).toLocaleString('id-ID')}`, `Rp${(target - 1000).toLocaleString('id-ID')}`, `Rp${(target + 1500).toLocaleString('id-ID')}`];
        exp = `Harga 1 buku = Rp${hBuku.toLocaleString('id-ID')} dan 1 pensil = Rp${hPena.toLocaleString('id-ID')}. Total = Rp${target.toLocaleString('id-ID')}.`;
        tip = 'Gunakan metode eliminasi variabel untuk menemukan nilai masing-masing barang.';
      } else if (tIdx === 6) {
        // Fungsi
        const a = step + 2;
        const b = step * 3 + 4;
        const x = step + 3;
        const fx = a * x + b;
        qText = `[Fungsi Linier #${num}]: Suatu fungsi ditentukan dengan rumus f(x) = ${a}x + ${b}. Nilai fungsi untuk x = ${x} adalah...`;
        cText = `${fx}`;
        dList = [`${fx + a}`, `${fx - a}`, `${fx + 4}`];
        exp = `Substitusi x = ${x}: f(${x}) = ${a}(${x}) + ${b} = ${a * x} + ${b} = ${fx}.`;
        tip = 'Ganti x pada f(x) dengan nilai yang diminta.';
      } else if (tIdx === 7) {
        // Gradien
        const m = step + 1;
        const x1 = step;
        const y1 = 2 * step;
        const dx = 2;
        const x2 = x1 + dx;
        const y2 = y1 + m * dx;
        qText = `[Gradien Garis #${num}]: Gradien garis lurus yang melalui titik A(${x1}, ${y1}) dan B(${x2}, ${y2}) adalah...`;
        cText = `m = ${m}`;
        dList = [`m = ${m + 1}`, `m = -${m}`, `m = ${m + 2}`];
        exp = `Gradien m = (y2 - y1) / (x2 - x1) = (${y2} - ${y1}) / (${x2} - ${x1}) = ${y2 - y1} / ${dx} = ${m}.`;
        tip = 'm = Δy / Δx = (y2 - y1) / (x2 - x1).';
      } else if (tIdx === 8) {
        // Pythagoras
        const a = 3 * step;
        const b = 4 * step;
        const c = 5 * step;
        qText = `[Teorema Pythagoras #${num}]: Kawat penyangga dipasang dari puncak tiang bendera madrasah ke pasak tanah. Jika tinggi tiang ${b} meter dan jarak pasak ke kaki tiang ${a} meter, panjang kawat penyangga tersebut adalah...`;
        cText = `${c} meter`;
        dList = [`${c + step} meter`, `${c - step} meter`, `${c + 2 * step} meter`];
        exp = `c = √(a² + b²) = √(${a}² + ${b}²) = √(${a*a} + ${b*b}) = √${c*c} = ${c} meter.`;
        tip = 'Gunakan kelipatan tripel Pythagoras 3, 4, 5.';
      } else if (tIdx === 9) {
        // Lingkaran
        const r = 7 * step;
        const kel = 2 * 22 * step;
        qText = `[Geometri Lingkaran #${num}]: Sebuah kolam taman madrasah berbentuk lingkaran memiliki panjang jari-jari ${r} meter. Keliling kolam tersebut (π = 22/7) adalah...`;
        cText = `${kel} meter`;
        dList = [`${kel + 22} meter`, `${kel - 22} meter`, `${kel + 44} meter`];
        exp = `K = 2 . π . r = 2 x (22/7) x ${r} = 2 x 22 x ${step} = ${kel} meter.`;
        tip = 'Keliling lingkaran K = 2πr.';
      } else if (tIdx === 10) {
        // Bangun datar
        const p = 10 + step * 4;
        const l = 6 + step * 2;
        const luas = p * l;
        qText = `[Pengukuran Lahan #${num}]: Kebun percontohan madrasah berbentuk persegi panjang dengan ukuran panjang ${p} meter dan lebar ${l} meter. Luas kebun tersebut adalah...`;
        cText = `${luas} m²`;
        dList = [`${luas + 20} m²`, `${luas - 16} m²`, `${2 * (p + l)} m²`];
        exp = `Luas = panjang x lebar = ${p} m x ${l} m = ${luas} m².`;
        tip = 'Luas persegi panjang = p x l.';
      } else if (tIdx === 11) {
        // Bangun Ruang
        const s = 3 + step;
        const vol = s * s * s;
        qText = `[Bangun Ruang Kubus #${num}]: Bak penampungan air tempat wudhu madrasah berbentuk kubus dengan rusuk bagian dalam ${s} dm. Kapasitas volume air jika terisi penuh adalah...`;
        cText = `${vol} liter`;
        dList = [`${vol + 10 * step} liter`, `${vol - 5 * step} liter`, `${6 * s * s} liter`];
        exp = `V = s³ = ${s}³ = ${vol} dm³ = ${vol} liter.`;
        tip = '1 dm³ sama dengan 1 liter.';
      } else if (tIdx === 12) {
        // Tabung
        const r = 7;
        const t = 10 + step * 3;
        const vol = 154 * t;
        qText = `[Bangun Ruang Tabung #${num}]: Sebuah tangki air silinder vertikal madrasah memiliki jari-jari alas 7 dm dan tinggi ${t} dm. Volume tangki tersebut (π = 22/7) adalah...`;
        cText = `${vol} liter`;
        dList = [`${vol + 154} liter`, `${vol - 154} liter`, `${vol + 308} liter`];
        exp = `V = π . r² . t = (22/7) x 7² x ${t} = 154 x ${t} = ${vol} liter.`;
        tip = 'V = luas alas x tinggi = πr²t.';
      } else if (tIdx === 13) {
        // Kesebangunan
        const h1 = 2;
        const s1 = 3;
        const s2 = 6 + step * 3;
        const h2 = (s2 * h1) / s1;
        qText = `[Kesebangunan Bayangan #${num}]: Pada pagi hari, tongkat setinggi ${h1} meter memiliki bayangan sepanjang ${s1} meter. Di saat bersamaan, panjang bayangan menara masjid madrasah adalah ${s2} meter. Tinggi menara sebenarnya adalah...`;
        cText = `${h2} meter`;
        dList = [`${h2 + 2} meter`, `${h2 - 1} meter`, `${h2 + 3} meter`];
        exp = `h_menara = (bayangan_menara x tinggi_tongkat) / bayangan_tongkat = (${s2} x ${h1}) / ${s1} = ${h2} meter.`;
        tip = 'Gunakan perbandingan senilai segitiga sebangun.';
      } else if (tIdx === 14) {
        // Translasi
        const x = 2 + step;
        const y = -1 + step;
        const tx = 3 + step;
        const ty = 5;
        const xp = x + tx;
        const yp = y + ty;
        qText = `[Transformasi Translasi #${num}]: Titik A(${x}, ${y}) ditranslasikan oleh T = (${tx}, ${ty}). Koordinat titik bayangan A' adalah...`;
        cText = `A'(${xp}, ${yp})`;
        dList = [`A'(${xp - 1}, ${yp})`, `A'(${xp}, ${yp - 2})`, `A'(${x - tx}, ${y - ty})`];
        exp = `A'(x + a, y + b) = (${x} + ${tx}, ${y} + ${ty}) = (${xp}, ${yp}).`;
        tip = 'Translasi menjumlahkan setiap absis dan ordinat dengan vektor geser.';
      } else if (tIdx === 15) {
        // Rotasi
        const x = step + 2;
        const y = step + 5;
        qText = `[Transformasi Rotasi #${num}]: Titik B(${x}, ${y}) dirotasikan sebesar 90° berlawanan arah jarum jam terhadap titik pusat O(0,0). Koordinat bayangan B' adalah...`;
        cText = `B'(-${y}, ${x})`;
        dList = [`B'(${y}, -${x})`, `B'(-${x}, -${y})`, `B'(${x}, ${y})`];
        exp = `Rotasi [O, +90°]: (x, y) dipetakan menjadi (-y, x). Titik (${x}, ${y}) menjadi (-${y}, ${x}).`;
        tip = 'Rotasi 90° berlawanan jarum jam: (x, y) -> (-y, x).';
      } else if (tIdx === 16) {
        // Statistika
        const dVals = [60 + step * 2, 70 + step * 2, 75 + step * 2, 80 + step * 2, 90 + step * 2];
        const sum = dVals.reduce((a, b) => a + b, 0);
        const mean = (sum / 5).toFixed(1);
        qText = `[Statistika Nilai #${num}]: Data perolehan nilai kuis matematika lima perwakilan kelas MTs adalah: ${dVals.join(', ')}. Nilai rata-rata hitung (mean) data tersebut adalah...`;
        cText = `${mean}`;
        dList = [`${(Number(mean) + 2).toFixed(1)}`, `${(Number(mean) - 2).toFixed(1)}`, `${(Number(mean) + 4).toFixed(1)}`];
        exp = `Mean = (${dVals.join(' + ')}) / 5 = ${sum} / 5 = ${mean}.`;
        tip = 'Mean = total jumlah nilai dibagi banyak data.';
      } else if (tIdx === 17) {
        // Peluang
        const total = 12 + step * 2;
        const merah = step + 2;
        qText = `[Peluang Kejadian #${num}]: Dalam sebuah kantong undian madrasah terdapat ${total} kartu bernomor sama bentuk. Sebanyak ${merah} kartu berwarna merah dan sisanya berwarna biru. Peluang terambil satu kartu merah secara acak adalah...`;
        cText = `${merah}/${total}`;
        dList = [`${total - merah}/${total}`, `1/${total}`, `${merah}/${total + 2}`];
        exp = `P(A) = n(A) / n(S) = ${merah} / ${total}.`;
        tip = 'Peluang = jumlah kejadian sukses dibagi total seluruh kejadian.';
      } else if (tIdx === 18) {
        // Eksponen
        const base = step + 2;
        const res = base * base * base;
        qText = `[Perpangkatan Aljabar #${num}]: Hasil penyederhanaan dari bentuk eksponen (${base}⁴ x ${base}²) : ${base}³ adalah...`;
        cText = `${base}³ = ${res}`;
        dList = [`${base}² = ${base * base}`, `${base}⁴ = ${res * base}`, `${base}⁵`];
        exp = `${base}^(4 + 2 - 3) = ${base}^3 = ${res}.`;
        tip = 'Perkalian pangkat dijumlahkan, pembagian pangkat dikurangkan.';
      } else {
        // Persamaan kuadrat
        const bVal = -2 * (step + 2);
        const xPuncak = -bVal / 2;
        qText = `[Fungsi Kuadrat Parabola #${num}]: Persamaan sumbu simetri dari kurva parabola fungsi f(x) = x² ${bVal}x + 12 adalah...`;
        cText = `x = ${xPuncak}`;
        dList = [`x = -${xPuncak}`, `x = ${xPuncak + 2}`, `x = ${xPuncak - 1}`];
        exp = `Sumbu simetri x = -b / (2a) = -(${bVal}) / (2 x 1) = ${-bVal} / 2 = ${xPuncak}.`;
        tip = 'x = -b / (2a).';
      }

      return {
        subtopic: topic.name,
        competency: topic.comp,
        question: qText,
        correctText: cText,
        distractors: dList,
        explanation: exp,
        tip: tip
      };
    }
  });
}

module.exports = {
  generateMatematikaMTs
};
