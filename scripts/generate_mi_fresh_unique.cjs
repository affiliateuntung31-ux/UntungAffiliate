// Script to build clean, distinct, 100% unique question banks for MI
// Removes all duplicate questions and enriches Literasi, Numerasi, Sains, and Pedagogik
const fs = require('fs');
const path = require('path');
const { createQuestion } = require('./generate_all_subjects_master.cjs');

// Normalize helper
const normalize = (t) => (t || '').toLowerCase().replace(/\[[^\]]+\]/g, '').replace(/[^a-z0-9]/g, '').trim();

function getUniqueOnly(list) {
  const seen = new Set();
  const res = [];
  for (const q of list) {
    const norm = normalize(q.question);
    if (!seen.has(norm)) {
      seen.add(norm);
      res.push(q);
    }
  }
  return res;
}

// 1. Fresh Literasi Questions (17 additional unique questions)
const extraLiterasi = [
  {
    subtopic: 'Memahami Teks Narasi Fabel',
    competency: 'Menemukan ide pokok dan pesan moral dalam teks fabel',
    question: 'Dalam fabel "Kancil dan Buaya", pesan moral tersirat yang paling tepat diajarkan kepada siswa MI adalah...',
    correctText: 'Kecerdasan akal budi hendaknya digunakan untuk kebaikan bersama, bukan memperdaya orang lain',
    distractors: ['Kekuatan fisik selalu lebih unggul daripada kecerdasan akal', 'Menghindari pertemuan dengan hewan yang lebih besar di sungai', 'Jangan pernah menolong orang lain yang sedang kesusahan'],
    explanation: 'Fabel kancil mengajarkan pemanfaatan akal secara bijaksana tanpa merugikan sesama.'
  },
  {
    subtopic: 'Teks Prosedur Membuat Makanan',
    competency: 'Menyusun urutan langkah teks prosedur pembuatan makanan sehat',
    question: 'Kutipan teks: "Setelah air mendidih, masukkan potongan wortel dan brokoli. Masaklah selama 3 menit agar vitamin tidak rusak." Kata "agar" berfungsi sebagai...',
    correctText: 'Konjungsi tujuan',
    distractors: ['Konjungsi syarat', 'Konjungsi temporal urutan', 'Konjungsi perlawanan'],
    explanation: 'Kata "agar" dan "supaya" menyatakan tujuan dilakukannya suatu tindakan.'
  },
  {
    subtopic: 'Kosakata Baku KBBI',
    competency: 'Mengidentifikasi penulisan kata baku dalam kalimat',
    question: 'Kalimat berikut yang menggunakan kata baku menurut KBBI adalah...',
    correctText: 'Apotek madrasah menyediakan obat-obatan pertolongan pertama pada kecelakaan',
    distractors: ['Apotik madrasah menyediakan obat-obatan pertolongan pertama', 'Siswa membeli obat di apotik dekat gerbang madrasah', 'Ibu guru menyarankan membeli vitamin di apotik resmi'],
    explanation: 'Bentuk baku adalah apotek, bukan apotik.'
  },
  {
    subtopic: 'Menganalisis Puisi Anak',
    competency: 'Menganalisis makna kiasan dalam bait puisi anak',
    question: 'Bait puisi: "Buku adalah jendela duniaku / tempatku memetik bintang cita-cita". Makna kata "memetik bintang" adalah...',
    correctText: 'Meraih cita-cita setinggi mungkin melalui ilmu pengetahuan',
    distractors: ['Mengambil bintang di langit pada malam hari', 'Menjadi seorang astronaut penerbang roket', 'Membeli teropong bintang berharga mahal'],
    explanation: 'Memetik bintang adalah ungkapan kiasan untuk mewujudkan cita-cita mulia.'
  },
  {
    subtopic: 'Menentukan Kalimat Utama',
    competency: 'Menemukan kalimat utama pada paragraf deduktif',
    question: 'Perhatikan paragraf: "(1) Menjaga kebersihan madrasah adalah tanggung jawab bersama. (2) Siswa membuang sampah pada tempatnya. (3) Guru memberi teladan hidup bersih. (4) Petugas merawat taman sekolah." Kalimat utama paragraf tersebut terletak pada nomor...',
    correctText: '(1)',
    distractors: ['(2)', '(3)', '(4)'],
    explanation: 'Kalimat (1) memuat gagasan pokok umum yang kemudian dijelaskan oleh kalimat (2), (3), dan (4).'
  },
  {
    subtopic: 'Membedakan Fakta dan Opini',
    competency: 'Membedakan pernyataan fakta dan opini dalam bacaan lingkungan',
    question: 'Pernyataan berikut yang tergolong fakta adalah...',
    correctText: 'Madrasah Ibtidaiyah Negeri 1 memiliki 12 ruang kelas dan 1 perpustakaan',
    distractors: ['Halaman madrasah terlihat sangat indah di pagi hari', 'Siswa kelas lima tampak lebih rajin belajar daripada kelas lain', 'Pelajaran matematika adalah pelajaran paling mengasyikkan'],
    explanation: 'Fakta memuat data terukur yang dapat diverifikasi secara objektif.'
  },
  {
    subtopic: 'Menyusun Kalimat Padu',
    competency: 'Menyusun urutan kalimat acak menjadi paragraf padu',
    question: 'Urutan yang tepat agar menjadi paragraf padu: (1) Ia merapikan tempat tidur. (2) Ahmad bangun pagi pukul 04.30 WIB. (3) Setelah itu ia berwudhu untuk shalat subuh. (4) Kemudian ia mandi pagi.',
    correctText: '(2) - (1) - (3) - (4)',
    distractors: ['(1) - (2) - (3) - (4)', '(2) - (3) - (1) - (4)', '(4) - (2) - (1) - (3)'],
    explanation: 'Urutan logis kronologis bangun tidur -> merapikan tempat tidur -> wudhu shalat -> mandi.'
  },
  {
    subtopic: 'Tanda Baca dan Ejaan',
    competency: 'Menerapkan penggunaan tanda koma pada perincian',
    question: 'Penggunaan tanda koma yang benar pada kalimat perincian adalah...',
    correctText: 'Siti membeli pensil, buku gambar, dan penghapus di koperasi madrasah.',
    distractors: ['Siti membeli pensil, buku gambar dan penghapus di koperasi.', 'Siti membeli pensil buku gambar, dan penghapus di koperasi.', 'Siti membeli, pensil, buku gambar, dan penghapus di koperasi.'],
    explanation: 'Tanda koma digunakan sebelum kata penghubung "dan" pada perincian lebih dari dua unsur.'
  },
  {
    subtopic: 'Menentukan Sinonim Kata',
    competency: 'Menentukan sinonim kata dalam konteks kalimat',
    question: 'Dalam kalimat "Santri itu tekun menghafal Al-Qur\'an setiap ba\'da shalat", sinonim kata "tekun" adalah...',
    correctText: 'Rajin dan bersungguh-sungguh',
    distractors: ['Cepat dan tergesa-gesa', 'Santai tanpa beban', 'Pendiam dan tertutup'],
    explanation: 'Tekun bersinonim dengan rajin, ulet, dan bersungguh-sungguh.'
  },
  {
    subtopic: 'Membuat Simpulan Teks',
    competency: 'Menarik simpulan logis dari bacaan nonfiksi',
    question: 'Teks menyatakan bahwa sarapan bergizi meningkatkan daya konsentrasi siswa dalam menerima pelajaran di kelas. Simpulan yang tepat adalah...',
    correctText: 'Siswa yang sarapan sehat cenderung memiliki konsentrasi belajar yang lebih baik',
    distractors: ['Semua siswa wajib membeli sarapan di kantin madrasah', 'Sarapan pagi menjamin kelulusan ujian nasional', 'Siswa yang tidak sarapan pasti tidak bisa membaca'],
    explanation: 'Simpulan merangkum hubungan inti sarapan bergizi dengan daya konsentrasi belajar.'
  },
  {
    subtopic: 'Menentukan Tokoh dan Watak',
    competency: 'Mengidentifikasi watak tokoh cerita rakyat',
    question: 'Dalam cerita "Bawang Merah dan Bawang Putih", watak Bawang Putih yang sabar dan pemaaf tergolong perwatakan...',
    correctText: 'Protagonis',
    distractors: ['Antagonis', 'Tritagonis', 'Figuran pendamping'],
    explanation: 'Protagonis adalah tokoh utama pembawa nilai kebaikan.'
  },
  {
    subtopic: 'Teks Deskripsi Objek',
    competency: 'Menganalisis pencerapan indra pada teks deskripsi ruang kelas',
    question: 'Kalimat: "Lantai keramik putih di ruang kelas MI itu sangat bersih dan berkilau." Pencerapan indra yang digunakan adalah...',
    correctText: 'Indra penglihatan',
    distractors: ['Indra pendengaran', 'Indra perabaan', 'Indra penciuman'],
    explanation: 'Warna putih bersih dan berkilau ditangkap oleh indra mata (penglihatan).'
  },
  {
    subtopic: 'Huruf Kapital pada Nama Geografi',
    competency: 'Menerapkan kaidah huruf kapital nama geografi',
    question: 'Penulisan huruf kapital yang benar pada nama unsur geografis adalah...',
    correctText: 'Sungai Bengawan Solo dan Danau Toba',
    distractors: ['sungai Bengawan Solo dan danau Toba', 'Sungai bengawan solo dan Danau toba', 'sungai bengawan solo dan danau toba'],
    explanation: 'Nama diri geografi diawali huruf kapital pada jenis dan namanya.'
  },
  {
    subtopic: 'Makna Ungkapan / Idiom',
    competency: 'Mengartikan makna ungkapan dalam kalimat',
    question: 'Ungkapan "panjang tangan" dalam kalimat "Anak itu dijauhi temannya karena panjang tangan" bermakna...',
    correctText: 'Suka mencuri barang milik orang lain',
    distractors: ['Suka menolong sesama teman', 'Memiliki tangan yang sangat kuat', 'Gemar berolahraga lempar lembing'],
    explanation: 'Panjang tangan adalah kiasan untuk orang yang gemar mencuri.'
  },
  {
    subtopic: 'Teks Petunjuk Penggunaan',
    competency: 'Menelaah petunjuk penggunaan obat sirup anak',
    question: 'Petunjuk: "Kocok dahulu sebelum diminum. Simpan di tempat sejuk dan terhindar dari sinar matahari langsung." Petunjuk ini bertujuan untuk...',
    correctText: 'Menjaga homogenitas larutan dan efektivitas khasiat obat',
    distractors: ['Mempercepat tanggal kedaluwarsa obat sirup', 'Menghilangkan rasa manis pada obat', 'Mengubah warna obat sirup menjadi bening'],
    explanation: 'Mengocok obat menjaga kestabilan suspensi dan tempat sejuk menjaga senyawa obat.'
  },
  {
    subtopic: 'Paragraf Induktif',
    competency: 'Menganalisis paragraf dengan kalimat utama di akhir',
    question: 'Paragraf yang kalimat utamanya berada di bagian akhir diawali oleh uraian khusus dinamakan paragraf...',
    correctText: 'Induktif',
    distractors: ['Deduktif', 'Campuran', 'Deskriptif bebas'],
    explanation: 'Paragraf induktif menyajikan rincian khusus di awal dan kesimpulan umum di akhir.'
  },
  {
    subtopic: 'Menentukan Latar Cerita',
    competency: 'Menganalisis latar suasana dalam cuplikan cerpen',
    question: 'Kutipan: "Angin kencang menderu, petir menyambar diiringi derai air hujan lebat yang mengguncang atap kelas." Latar suasana yang tergambar adalah...',
    correctText: 'Mencekam dan menegangkan',
    distractors: ['Gembira dan penuh tawa', 'Khidmat dan tenang', 'Haru dan menyentuh hati'],
    explanation: 'Angin kencang, petir menyambar, dan badai menggambarkan suasana mencekam.'
  }
];

// 2. Fresh Numerasi Questions (19 additional unique questions)
const extraNumerasi = [
  {
    subtopic: 'Operasi Pecahan Campuran',
    competency: 'Menyelesaikan operasi hitung pecahan campuran',
    question: 'Ibu memiliki persediaan 2 1/2 kg tepung terigu. Ia membeli lagi 1 3/4 kg untuk membuat kue madrasah. Total tepung terigu ibu sekarang adalah...',
    correctText: '4 1/4 kg',
    distractors: ['3 3/4 kg', '4 1/2 kg', '3 4/6 kg'],
    explanation: '2 1/2 + 1 3/4 = 2 2/4 + 1 3/4 = 3 5/4 = 4 1/4 kg.'
  },
  {
    subtopic: 'Keliling Bangun Datar Persegi Panjang',
    competency: 'Menghitung keliling lapangan madrasah',
    question: 'Halaman upacara madrasah berbentuk persegi panjang dengan panjang 25 meter dan lebar 15 meter. Keliling halaman tersebut adalah...',
    correctText: '80 meter',
    distractors: ['40 meter', '375 meter', '100 meter'],
    explanation: 'Keliling = 2 x (panjang + lebar) = 2 x (25 + 15) = 2 x 40 = 80 meter.'
  },
  {
    subtopic: 'Luas Bangun Datar Segitiga',
    competency: 'Menghitung luas bidang segitiga',
    question: 'Sebuah papan nama madrasah berbentuk segitiga siku-siku memiliki panjang alas 12 cm dan tinggi 16 cm. Luas papan nama tersebut adalah...',
    correctText: '96 cm²',
    distractors: ['192 cm²', '48 cm²', '28 cm²'],
    explanation: 'Luas segitiga = 1/2 x alas x tinggi = 1/2 x 12 x 16 = 96 cm².'
  },
  {
    subtopic: 'Persentase dan Diskon',
    competency: 'Menghitung harga barang setelah diskon',
    question: 'Sebuah tas sekolah di koperasi madrasah berharga Rp120.000. Jika pembeli mendapatkan diskon sebesar 20%, uang yang harus dibayar adalah...',
    correctText: 'Rp96.000',
    distractors: ['Rp100.000', 'Rp24.000', 'Rp90.000'],
    explanation: 'Diskon = 20% x Rp120.000 = Rp24.000. Harga bayar = Rp120.000 - Rp24.000 = Rp96.000.'
  },
  {
    subtopic: 'FPB dan KPK',
    competency: 'Menentukan FPB dari dua bilangan dalam pembagian kelompok',
    question: 'Guru MI ingin membagikan 36 buku tulis dan 48 pensil kepada sejumlah siswa berprestasi dengan jumlah yang sama banyak. Jumlah siswa terbanyak yang menerima adalah...',
    correctText: '12 siswa',
    distractors: ['6 siswa', '18 siswa', '24 siswa'],
    explanation: 'FPB dari 36 (2² x 3²) dan 48 (2⁴ x 3) adalah 2² x 3 = 12.'
  },
  {
    subtopic: 'KPK Waktu Bersamaan',
    competency: 'Menentukan waktu pertemuan berulang menggunakan KPK',
    question: 'Lampu merah menyala setiap 6 detik sekali dan lampu hijau menyala setiap 8 detik sekali. Kedua lampu akan menyala bersamaan setiap...',
    correctText: '24 detik',
    distractors: ['14 detik', '48 detik', '12 detik'],
    explanation: 'KPK dari 6 dan 8 adalah 24.'
  },
  {
    subtopic: 'Volume Kubus',
    competency: 'Menghitung volume wadah kubus',
    question: 'Sebuah bak penampungan air wudhu berbentuk kubus memiliki panjang rusuk bagian dalam 80 cm. Volume bak tersebut dalam liter adalah...',
    correctText: '512 liter',
    distractors: ['64 liter', '51,2 liter', '240 liter'],
    explanation: 'Volume = 80 x 80 x 80 = 512.000 cm³ = 512 dm³ = 512 liter.'
  },
  {
    subtopic: 'Perbandingan Senilai',
    competency: 'Menyelesaikan masalah perbandingan senilai',
    question: 'Sebuah mobil antar-jemput siswa madrasah memerlukan 5 liter bensin untuk menempuh jarak 60 km. Bensin yang diperlukan untuk menempuh jarak 180 km adalah...',
    correctText: '15 liter',
    distractors: ['12 liter', '18 liter', '20 liter'],
    explanation: 'Konsumsi bensin = 60 / 5 = 12 km/liter. Untuk 180 km = 180 / 12 = 15 liter.'
  },
  {
    subtopic: 'Rata-Rata (Mean)',
    competency: 'Menghitung nilai rata-rata ulangan',
    question: 'Nilai ulangan matematika lima siswa MI adalah 75, 80, 85, 90, dan 70. Nilai rata-rata dari kelima siswa tersebut adalah...',
    correctText: '80',
    distractors: ['78', '82', '85'],
    explanation: 'Rata-rata = (75 + 80 + 85 + 90 + 70) / 5 = 400 / 5 = 80.'
  },
  {
    subtopic: 'Modus dan Median',
    competency: 'Menentukan modus data tunggal',
    question: 'Data berat badan (dalam kg) delapan siswa MI: 32, 35, 30, 32, 34, 32, 33, 31. Modus dari data tersebut adalah...',
    correctText: '32 kg',
    distractors: ['30 kg', '33 kg', '35 kg'],
    explanation: 'Nilai yang paling sering muncul adalah 32 (muncul sebanyak 3 kali).'
  },
  {
    subtopic: 'Diagram Batang',
    competency: 'Membaca dan menafsirkan data diagram batang',
    question: 'Data peminjaman buku perpustakaan madrasah: Senin 20 buku, Selasa 25 buku, Rabu 30 buku, Kamis 15 buku, Jumat 10 buku. Selisih peminjaman terbanyak dan tersedikit adalah...',
    correctText: '20 buku',
    distractors: ['15 buku', '25 buku', '30 buku'],
    explanation: 'Peminjaman terbanyak hari Rabu (30) dan tersedikit hari Jumat (10). Selisih = 30 - 10 = 20 buku.'
  },
  {
    subtopic: 'Kecepatan dan Waktu',
    competency: 'Menghitung waktu tempuh perjalanan',
    question: 'Ahmad bersepeda ke madrasah menempuh jarak 6 km dengan kecepatan rata-rata 12 km/jam. Waktu tempuh perjalanan Ahmad adalah...',
    correctText: '30 menit',
    distractors: ['20 menit', '45 menit', '15 menit'],
    explanation: 'Waktu = Jarak / Kecepatan = 6 / 12 jam = 0,5 jam = 30 menit.'
  },
  {
    subtopic: 'Debit Air',
    competency: 'Menghitung debit aliran air kran',
    question: 'Sebuah kran air dapat mengisi ember bervolume 18 liter dalam waktu 3 menit. Debit aliran air kran tersebut adalah...',
    correctText: '6 liter/menit',
    distractors: ['3 liter/menit', '54 liter/menit', '9 liter/menit'],
    explanation: 'Debit = Volume / Waktu = 18 liter / 3 menit = 6 liter/menit.'
  },
  {
    subtopic: 'Skala Peta',
    competency: 'Menghitung jarak sebenarnya berdasarkan skala',
    question: 'Jarak antara dua madrasah pada peta adalah 5 cm. Jika skala peta 1 : 100.000, maka jarak sebenarnya di lapangan adalah...',
    correctText: '5 km',
    distractors: ['50 km', '0,5 km', '500 meter'],
    explanation: 'Jarak sebenarnya = 5 cm x 100.000 = 500.000 cm = 5 km.'
  },
  {
    subtopic: 'Keliling Lingkaran',
    competency: 'Menghitung keliling roda lingkaran',
    question: 'Sebuah roda sepeda santri memiliki jari-jari 14 cm (π = 22/7). Keliling roda sepeda tersebut adalah...',
    correctText: '88 cm',
    distractors: ['44 cm', '154 cm', '616 cm'],
    explanation: 'Keliling = 2 x π x r = 2 x (22/7) x 14 = 88 cm.'
  },
  {
    subtopic: 'Luas Lingkaran',
    competency: 'Menghitung luas taman lingkaran madrasah',
    question: 'Taman bunga berbentuk lingkaran memiliki diameter 14 meter (jari-jari 7 m, π = 22/7). Luas taman tersebut adalah...',
    correctText: '154 m²',
    distractors: ['44 m²', '88 m²', '308 m²'],
    explanation: 'Luas = π x r² = (22/7) x 7 x 7 = 154 m².'
  },
  {
    subtopic: 'Satuan Waktu',
    competency: 'Mengkonversi satuan waktu jam ke menit',
    question: 'Siswa kelas VI melaksanakan ujian madrasah selama 1 jam 45 menit. Waktu pelaksanaan ujian tersebut setara dengan...',
    correctText: '105 menit',
    distractors: ['145 menit', '85 menit', '95 menit'],
    explanation: '1 jam = 60 menit. 60 + 45 = 105 menit.'
  },
  {
    subtopic: 'Penjumlahan Bilangan Bulat',
    competency: 'Menyelesaikan operasi hitung bilangan bulat negatif',
    question: 'Suhu di dalam ruang laboratorium dingin adalah -5°C. Karena listrik padam, suhu naik sebesar 8°C. Suhu ruang laboratorium sekarang adalah...',
    correctText: '3°C',
    distractors: ['-13°C', '-3°C', '13°C'],
    explanation: '-5 + 8 = 3°C.'
  },
  {
    subtopic: 'Sudut pada Jam Dinding',
    competency: 'Menghitung besar sudut jarum jam',
    question: 'Besar sudut terkecil yang dibentuk oleh kedua jarum jam pada pukul 03.00 tepat adalah...',
    correctText: '90° (sudut siku-siku)',
    distractors: ['60° (sudut lancip)', '120° (sudut tumpul)', '180° (sudut lurus)'],
    explanation: 'Pada pukul 03.00 jarum panjang di 12 dan pendek di 3: 3 x 30° = 90°.'
  }
];

// 3. Fresh Sains Questions (17 additional unique questions)
const extraSains = [
  {
    subtopic: 'Rantai Makanan Ekosistem Sawah',
    competency: 'Menganalisis peran organisme dalam rantai makanan ekosistem sawah',
    question: 'Pada rantai makanan sawah: Padi -> Belalang -> Katak -> Ular -> Elang. Jika populasi katak menurun drastis karena diburu, akibat yang langsung terjadi adalah...',
    correctText: 'Populasi belalang meningkat dan hasil panen padi terancam rusak',
    distractors: ['Populasi ular meningkat berlipat ganda', 'Populasi elang bertambah banyak', 'Padi tumbuh subur tanpa hama'],
    explanation: 'Katak adalah predator belalang. Berkurangnya katak memicu ledakan belalang pemakan padi.'
  },
  {
    subtopic: 'Adaptasi Tumbuhan',
    competency: 'Menganalisis bentuk adaptasi kaktus di lingkungan kering (xerofit)',
    question: 'Bentuk daun kaktus yang termodifikasi menjadi duri dan batangnya yang tebal berlapis lilin berfungsi untuk...',
    correctText: 'Mengurangi penguapan air dan menyimpan cadangan air',
    distractors: ['Mempercepat proses fotosintesis di malam hari', 'Menarik serangga penyerbuk dari kejauhan', 'Melindungi kaktus dari tiupan angin kencang'],
    explanation: 'Daun berbentuk duri meminimalkan penguapan dan batang tebal menyimpan air.'
  },
  {
    subtopic: 'Simbiosis Antarmakhluk Hidup',
    competency: 'Membedakan simbiosis mutualisme, komensalisme, dan parasitisme',
    question: 'Hubungan antara tanaman anggrek yang menempel pada batang pohon mangga merupakan contoh simbiosis...',
    correctText: 'Komensalisme (anggrek diuntungkan tempat hidup, pohon mangga tidak dirugikan)',
    distractors: ['Mutualisme (kedua pihak saling menguntungkan)', 'Parasitisme (pohon mangga dirugikan diserap makanannya)', 'Predasi (anggrek memangsa serangga mangga)'],
    explanation: 'Anggrek hanya menempel (epifit) tanpa menyerap nutrisi pohon inang.'
  },
  {
    subtopic: 'Perubahan Wujud Benda',
    competency: 'Menganalisis peristiwa menyublim dalam kehidupan sehari-hari',
    question: 'Kapur barus yang diletakkan di dalam lemari pakaian madrasah lama-kelamaan mengecil dan habis. Perubahan wujud yang terjadi adalah...',
    correctText: 'Menyublim (padat menjadi gas)',
    distractors: ['Mengkristal (gas menjadi padat)', 'Menguap (cair menjadi gas)', 'Mencair (padat menjadi cair)'],
    explanation: 'Kapur barus langsung berubah dari wujud padat ke gas (menyublim).'
  },
  {
    subtopic: 'Perpindahan Kalor',
    competency: 'Menganalisis perpindahan kalor secara konduksi, konveksi, dan radiasi',
    question: 'Ujung sendok logam terasa panas saat digunakan mengaduk teh hangat di gelas. Peristiwa ini merupakan bukti perpindahan kalor secara...',
    correctText: 'Konduksi (hantaran tanpa perpindahan zat perantara)',
    distractors: ['Konveksi (aliran zat cair/gas)', 'Radiasi (pancaran gelombang)', 'Kondensasi uap air'],
    explanation: 'Konduksi adalah hantaran panas melalui benda padat tanpa perpindahan partikel.'
  },
  {
    subtopic: 'Gaya dan Gerak',
    competency: 'Menganalisis pengaruh gaya gesek dalam kehidupan',
    question: 'Permukaan ban sepeda santri dibuat beralur kasar dengan tujuan utama...',
    correctText: 'Memperbesar gaya gesek agar sepeda tidak mudah tergelincir saat direm',
    distractors: ['Memperkecil gaya gesek agar sepeda melaju lebih kencang', 'Mengurangi beban berat sepeda di jalan beraspal', 'Menjadikan ban lebih tahan terhadap panas matahari'],
    explanation: 'Alur ban memperbesar koefisien gesek dengan aspal untuk mencegah slip.'
  },
  {
    subtopic: 'Cahaya dan Penglihatan',
    competency: 'Menganalisis sifat-sifat cahaya merambat lurus dan dapat dibiaskan',
    question: 'Pensil yang dimasukkan ke dalam gelas bening berisi air tampak patah. Fenomena optik ini membuktikan bahwa cahaya memiliki sifat...',
    correctText: 'Dapat dibiaskan (pembiasan cahaya saat merambat melalui dua medium berbeda kerapatan)',
    distractors: ['Dapat dipantulkan secara teratur', 'Merambat lurus di ruang hampa', 'Dapat menembus benda gelap mutlak'],
    explanation: 'Cahaya membelok ketika melintasi medium udara ke air yang berbeda indeks biasnya.'
  },
  {
    subtopic: 'Energi dan Perubahannya',
    competency: 'Menganalisis perubahan energi pada panel surya',
    question: 'Perubahan bentuk energi yang terjadi pada panel surya di atap gedung madrasah adalah...',
    correctText: 'Energi cahaya matahari menjadi energi listrik',
    distractors: ['Energi panas menjadi energi kimia cadangan', 'Energi gerak menjadi energi potensial pegas', 'Energi listrik menjadi energi bunyi suara'],
    explanation: 'Sel fotovoltaik panel surya mengonversi radiasi foton cahaya langsung menjadi arus listrik.'
  },
  {
    subtopic: 'Bunyi dan Resonansi',
    competency: 'Menganalisis perambatan gelombang bunyi',
    question: 'Bunyi lonceng madrasah dapat didengar oleh para siswa di lapangan karena gelombang bunyi...',
    correctText: 'Dapat merambat melalui medium udara',
    distractors: ['Dapat merambat melalui ruang hampa udara tanpa perantara', 'Hanya dapat merambat melalui benda cair air', 'Merambat lebih lambat daripada gerak manusia'],
    explanation: 'Bunyi adalah gelombang mekanik yang memerlukan medium (gas/udara) untuk merambat.'
  },
  {
    subtopic: 'Siklus Air (Hidrologi)',
    competency: 'Menganalisis tahapan kondensasi dan presipitasi dalam siklus air',
    question: 'Proses perubahan uap air di atmosfer menjadi titik-titik air pembentuk awan dalam siklus hidrologi disebut...',
    correctText: 'Kondensasi (pengembunan)',
    distractors: ['Evaporasi (penguapan air laut)', 'Transpirasi (penguapan daun tumbuhan)', 'Infiltrasi (penyerapan air ke dalam tanah)'],
    explanation: 'Kondensasi adalah proses pengembunan uap air menjadi titik air awan.'
  },
  {
    subtopic: 'Sistem Pernapasan Manusia',
    competency: 'Mengidentifikasi tempat pertukaran oksigen dan karbon dioksida',
    question: 'Pertukaran gas oksigen (O2) dan karbon dioksida (CO2) pada sistem pernapasan manusia berlangsung di dalam organ...',
    correctText: 'Alveolus pada paru-paru',
    distractors: ['Bronkus cabang trakea', 'Laring pangkal tenggorokan', 'Trakea bersilia'],
    explanation: 'Alveolus memiliki dinding tipis berkapiler darah tempat difusi gas O2 dan CO2.'
  },
  {
    subtopic: 'Sistem Pencernaan Makanan',
    competency: 'Menganalisis peran enzim pencernaan di rongga mulut',
    question: 'Nasi yang dikunyah lama di dalam mulut akan terasa manis. Hal ini terjadi karena aktivitas enzim...',
    correctText: 'Ptialin (amilase) yang mengubah amilum menjadi maltosa (gula sederhana)',
    distractors: ['Pepsin yang mencerna protein menjadi pepton', 'Renin yang mengendapkan kasein susu', 'Lipase yang memecah lemak menjadi asam lemak'],
    explanation: 'Enzim ptialin air liur memecah karbohidrat menjadi molekul disakarida maltosa.'
  },
  {
    subtopic: 'Sistem Peredaran Darah',
    competency: 'Menganalisis fungsi sel darah putih (leukosit)',
    question: 'Komponen darah manusia yang berfungsi sebagai pertahanan tubuh membasmi kuman penyakit dan bakteri adalah...',
    correctText: 'Sel darah putih (leukosit)',
    distractors: ['Sel darah merah (eritrosit)', 'Keping darah (trombosit)', 'Plasma darah cair'],
    explanation: 'Leukosit berperan dalam sistem imunitas tubuh melalui fagositosis dan antibodi.'
  },
  {
    subtopic: 'Tata Surya dan Planet',
    competency: 'Menganalisis karakteristik planet dalam tata surya',
    question: 'Planet terbesar dalam tata surya kita yang tersusun dari gas hidrogen dan helium serta memiliki banyak satelit alami adalah...',
    correctText: 'Jupiter',
    distractors: ['Mars (planet merah)', 'Saturnus bergelang es', 'Merkurius terdekat matahari'],
    explanation: 'Jupiter adalah planet raksasa gas terbesar di tata surya.'
  },
  {
    subtopic: 'Kelestarian Sumber Daya Alam',
    competency: 'Menganalisis sumber energi terbarukan',
    question: 'Sumber energi ramah lingkungan yang tidak akan habis dan dapat diperbarui secara alami adalah...',
    correctText: 'Angin, sinar matahari, dan aliran air sungai',
    distractors: ['Batu bara, minyak bumi, dan gas alam', 'Bensin, solar, dan avtur minyak bumi', 'Uranium dan batuan tambang tembaga'],
    explanation: 'Matahari, angin, dan air adalah energi terbarukan yang lestari.'
  },
  {
    subtopic: 'Pesawat Sederhana Tuas',
    competency: 'Mengidentifikasi jenis tuas golongan pertama',
    question: 'Alat pemotong kertas atau gunting yang digunakan di madrasah bekerja berdasarkan prinsip tuas jenis ke...',
    correctText: 'Pertama (titik tumpu berada di antara titik beban dan titik kuasa)',
    distractors: ['Kedua (beban di antara tumpu dan kuasa)', 'Ketiga (kuasa di antara tumpu dan beban)', 'Keempat tanpa titik tumpu'],
    explanation: 'Tuas jenis 1 menempatkan titik tumpu di tengah (contoh: gunting, jungkat-jungkit).'
  },
  {
    subtopic: 'Magnet dan Sifatnya',
    competency: 'Menganalisis sifat kutub magnet',
    question: 'Jika kutub utara sebuah magnet batang didekatkan dengan kutub utara magnet batang lainnya, interaksi yang terjadi adalah...',
    correctText: 'Tolak-menolak',
    distractors: ['Tarik-menarik dengan kuat', 'Kedua magnet melekat tanpa celah', 'Magnet kehilangan sifat kemagnetannya'],
    explanation: 'Kutub magnet yang senama tolak-menolak, kutub tidak senama tarik-menarik.'
  }
];

// 4. Fresh Pedagogik Questions (15 additional unique questions)
const extraPedagogik = [
  {
    subtopic: 'Diferensiasi Pembelajaran Kurikulum Merdeka',
    competency: 'Menerapkan pembelajaran berdiferensiasi konten dan proses',
    question: 'Seorang guru MI merancang pembelajaran dengan menyediakan artikel teks bacaan, infografis visual, dan video animasi edukasi. Guru tersebut menerapkan diferensiasi...',
    correctText: 'Diferensiasi Konten (materi ajar disesuaikan profil belajar siswa)',
    distractors: ['Diferensiasi Lingkungan fisik madrasah', 'Diferensiasi Jam pelajaran sekolah', 'Diferensiasi Seragam siswa'],
    explanation: 'Diferensiasi konten memvariasikan cara penyajian materi sesuai gaya belajar auditori, visual, dan kinestetik.'
  },
  {
    subtopic: 'Asesmen Diagnostik Awal',
    competency: 'Melaksanakan asesmen diagnostik kognitif',
    question: 'Tujuan utama dilaksanakannya asesmen diagnostik kognitif di awal tahun ajaran baru madrasah adalah untuk...',
    correctText: 'Memetakan tingkat kesiapan dan pemahaman dasar siswa terhadap materi prasyarat',
    distractors: ['Menentukan rangking prestasi juara umum kelas', 'Memberikan sanksi akademik kepada siswa bernilai rendah', 'Menentukan besaran sumbangan pendidikan madrasah'],
    explanation: 'Asesmen awal memetakan baseline kesiapan belajar siswa untuk penyesuaian rancangan ajar.'
  },
  {
    subtopic: 'Pembelajaran Berbasis Masalah (PBL)',
    competency: 'Menentukan sintaks Problem Based Learning di MI',
    question: 'Langkah pertama (sintaks 1) dalam model pembelajaran Problem Based Learning (PBL) di kelas adalah...',
    correctText: 'Orientasi peserta didik pada masalah nyata dan kontekstual',
    distractors: ['Mengembangkan dan menyajikan hasil karya kelompok', 'Menganalisis dan mengevaluasi proses pemecahan masalah', 'Membagikan lembar tes evaluasi sumatif'],
    explanation: 'PBL diawali dengan menghadapkan siswa pada masalah autentik kontekstual.'
  },
  {
    subtopic: 'Kriteria Ketercapaian Tujuan Pembelajaran (KKTP)',
    competency: 'Menentukan kriteria ketercapaian tujuan pembelajaran',
    question: 'Dalam Kurikulum Merdeka, KKTP dirumuskan oleh pendidik madrasah dengan tujuan utama...',
    correctText: 'Mengetahui apakah siswa telah mencapai kompetensi tujuan pembelajaran yang diharapkan',
    distractors: ['Menggantikan seluruh ujian akhir semester dengan angka tunggal', 'Memaksa semua siswa mendapatkan nilai 100', 'Menyamakan nilai seluruh madrasah di satu provinsi'],
    explanation: 'KKTP adalah indikator deskriptif pencapaian tujuan pembelajaran.'
  },
  {
    subtopic: 'Model Pembelajaran PJBL',
    competency: 'Menerapkan Project Based Learning di madrasah',
    question: 'Karakteristik utama yang membedakan Project Based Learning (PjBL) dengan model lainnya adalah menghasilkan...',
    correctText: 'Produk nyata atau karya proyek yang dipamerkan dalam pameran belajar',
    distractors: ['Hafalan rumus matematika dalam waktu singkat', 'Kumpulan lembar kerja siswa tanpa praktik lapangan', 'Rekaman suara ceramah guru selama satu semester'],
    explanation: 'PjBL menghasilkan artefak produk kontekstual yang dipresentasikan.'
  },
  {
    subtopic: 'Pemanfaatan TPACK dalam Pembelajaran',
    competency: 'Mengintegrasikan teknologi ke dalam materi ajar dan pedagogi',
    question: 'Guru madrasah menggunakan simulasi laboratorium virtual PhET untuk menjelaskan konsep listrik dinamis. Integrasi ini mencerminkan kompetensi...',
    correctText: 'TPACK (Technological Pedagogical Content Knowledge)',
    distractors: ['Kompetensi administratif birokrasi', 'Metode ceramah tradisional klasikal', 'Evaluasi hafalan tertulis murni'],
    explanation: 'TPACK adalah perpaduan penguasaan konten materi, strategi pedagogi, dan teknologi edukasi.'
  },
  {
    subtopic: 'Remedial dan Pengayaan',
    competency: 'Merancang program remedial yang tepat sasaran',
    question: 'Tindakan yang paling tepat dilakukan guru terhadap siswa yang belum mencapai KKTP setelah asesmen sumatif adalah...',
    correctText: 'Memberikan bimbingan remedial khusus pada indikator yang belum dikuasai siswa',
    distractors: ['Meminta siswa mengulang membaca seluruh buku paket secara mandiri', 'Memberikan tes ulang dengan soal yang sama tanpa bimbingan', 'Menurunkan standar KKTP agar seluruh siswa dinyatakan lulus'],
    explanation: 'Remedial menyasar indikator spesifik yang belum tuntas dengan bimbingan tepat.'
  },
  {
    subtopic: 'Profil Pelajar Rahmatan Lil Alamin (P5-PPRA)',
    competency: 'Menanamkan nilai moderasi beragama dalam proyek PPRA',
    question: 'Dimensi keteladanan "Tawassuth" (mengambil jalan tengah / moderat) dalam PPRA di madrasah diwujudkan melalui sikap...',
    correctText: 'Bersikap adil, tidak ekstrem kanan maupun ekstrem kiri, dan mengedepankan musyawarah',
    distractors: ['Menolak pendapat orang lain yang berbeda kelompok', 'Memaksakan kehendak pribadi dalam musyawarah kelas', 'Menjauhi pergaulan dengan teman yang berbeda suku'],
    explanation: 'Tawassuth adalah esensi moderasi beragama: adil, proporsional, dan tidak ekstrem.'
  },
  {
    subtopic: 'Umpan Balik Konstruktif (Feedback)',
    competency: 'Memberikan umpan balik yang efektif bagi perkembangan belajar',
    question: 'Bentuk umpan balik (feedback) guru yang paling efektif untuk mendorong perbaikan tulisan siswa adalah...',
    correctText: 'Menyebutkan bagian tulisan yang sudah baik dan memberi saran konkret perbaikan paragraf',
    distractors: ['Hanya memberi tanda silang merah besar tanpa catatan penjelasan', 'Memberi nilai angka saja tanpa komentar tertulis', 'Membandingkan tulisan siswa tersebut dengan karya temannya di depan kelas'],
    explanation: 'Umpan balik konstruktif menyebutkan capaian positif dan panduan perbaikan yang jelas.'
  },
  {
    subtopic: 'Manajemen Kelas Positif',
    competency: 'Membangun kesepakatan kelas yang partisipatif',
    question: 'Dalam menciptakan iklim kelas yang aman dan suportif, guru bersama siswa menyusun...',
    correctText: 'Keyakinan dan kesepakatan kelas yang disetujui bersama secara positif',
    distractors: ['Daftar hukuman fisik bagi siswa yang terlambat', 'Jadwal pembersihan toilet madrasah sebagai hukuman', 'Aturan rahasia yang tidak diketahui oleh orang tua siswa'],
    explanation: 'Keyakinan kelas yang disepakati bersama membangun disiplin positif berbasis kesadaran diri.'
  },
  {
    subtopic: 'Pertanyaan Pemantik (Essential Question)',
    competency: 'Menyusun pertanyaan pemantik yang merangsang berpikir kritis',
    question: 'Ciri utama pertanyaan pemantik dalam Kurikulum Merdeka adalah...',
    correctText: 'Bersifat terbuka, memicu rasa ingin tahu, dan tidak memiliki jawaban tunggal yang kaku',
    distractors: ['Hanya dapat dijawab dengan kata "ya" atau "tidak"', 'Meminta siswa menghafal tanggal sejarah kemerdekaan', 'Hanya menanyakan definisi istilah kamus'],
    explanation: 'Pertanyaan pemantik memancing eksplorasi mendalam dan pemikiran kritis.'
  },
  {
    subtopic: 'Pendidikan Inklusif di Madrasah',
    competency: 'Memberikan akomodasi bagi peserta didik berkebutuhan khusus',
    question: 'Sikap guru MI terhadap siswa dengan hambatan penglihatan ringan (low vision) di dalam kelas adalah...',
    correctText: 'Menempatkan siswa di baris depan dan menyediakan lembar materi dengan ukuran huruf besar',
    distractors: ['Meminta orang tua memindahkan siswa ke madrasah lain', 'Melarang siswa mengikuti pembelajaran bersama teman-temannya', 'Membiarkan siswa duduk di baris paling belakang'],
    explanation: 'Akomodasi yang wajar (reasonable accommodation) memastikan kesetaraan akses belajar.'
  },
  {
    subtopic: 'Refleksi Pembelajaran Guru',
    competency: 'Melakukan refleksi diri untuk perbaikan kualitas mengajar',
    question: 'Aktivitas refleksi yang dilakukan guru setelah selesai mengajar bertujuan utama untuk...',
    correctText: 'Mengevaluasi keberhasilan strategi mengajar dan merencanakan perbaikan untuk pertemuan berikutnya',
    distractors: ['Mencari-cari kesalahan siswa yang lambat memahami pelajaran', 'Menghitung sisa tunjangan profesi guru', 'Mengisi laporan administratif untuk arsip semata'],
    explanation: 'Refleksi diri adalah kunci continuous professional development (pengembangan keprofesian berkelanjutan).'
  },
  {
    subtopic: 'Teori Belajar Konstruktivisme',
    competency: 'Menerapkan prinsip belajar konstruktivistik di kelas MI',
    question: 'Menurut teori belajar konstruktivisme (Piaget & Vygotsky), peranan guru dalam proses pembelajaran adalah...',
    correctText: 'Fasilitator yang menyediakan pengalaman belajar agar siswa membangun pemahamannya sendiri',
    distractors: ['Satu-satunya sumber informasi tunggal di depan kelas', 'Pemberi ceramah pasif selama jam pelajaran berlangsung', 'Pengawas ujian yang tidak boleh diajak berkomunikasi'],
    explanation: 'Konstruktivisme memandang siswa aktif mengonstruksi pengetahuan dengan fasilitasi guru.'
  },
  {
    subtopic: 'Penilaian Portofolio',
    competency: 'Memanfaatkan portofolio sebagai asesmen autentik',
    question: 'Asesmen portofolio di kelas MI digunakan untuk mendokumentasikan...',
    correctText: 'Kumpulan karya terbaik siswa secara berkala yang menunjukkan perkembangan belajarnya',
    distractors: ['Daftar presensi kehadiran harian siswa', 'Catatan nilai ujian pilihan ganda akhir semester', 'Kuitansi pembayaran infak madrasah'],
    explanation: 'Portofolio adalah kumpulan karya autentik yang memotret progres kompetensi siswa dari waktu ke waktu.'
  }
];

module.exports = {
  getUniqueOnly,
  extraLiterasi,
  extraNumerasi,
  extraSains,
  extraPedagogik
};
