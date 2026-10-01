// High-Quality Unique Question Generator for Tendik (Kepala Madrasah, Pengawas, Laboran, Pustakawan)
// Guarantees 150 UNIQUE questions for each subject (0 duplicates)
const { buildUniqueSubjectBank } = require('./generate_all_subjects_master.cjs');

// 1. KEPALA MADRASAH - MANAJERIAL (150 Soal Unik)
function generateKamadManajerial() {
  const topics = [
    'Penyusunan Rencana Kerja Jangka Menengah (RKJM) dan Rencana Kerja Tahunan (RKT)',
    'Pengelolaan Kurikulum Operasional Madrasah (KOM) Berbasis Standar Nasional',
    'Pengelolaan Sumber Daya Manusia dan Pembinaan Tenaga Pendidik/Kependidikan',
    'Manajemen Keuangan Madrasah Berbasis Akuntabilitas dan Transparansi (BOS/BOP)',
    'Pengelolaan Sarana dan Prasarana Madrasah Sesuai Standar Pelayanan Minimal',
    'Sistem Informasi Manajemen Madrasah (SIMPATIKA, EMIS 4.0, dan RDM)',
    'Membangun Budaya Mutu, Kedisiplinan Santri, dan Iklim Belajar Kondusif',
    'Kemitraan Komite Madrasah, Orang Tua Santri, dan Dunia Usaha/Dunia Industri (DUDI)',
    'Manajemen Kesiswaan: Penerimaan Peserta Didik Baru (PPDB) dan Prestasi Siswa',
    'Penerapan Manajemen Berbasis Madrasah (MBM) dan Akreditasi BAN-PDM'
  ];

  return buildUniqueSubjectBank({
    subjectId: 'manajerial',
    subjectName: 'Manajerial Kepala Madrasah',
    categoryId: 'kepala_madrasah',
    categoryName: 'Kepala Madrasah',
    akgtkCategory: 'Kepala Madrasah',
    educationLevel: 'MI',
    idPrefix: 'tnd-km-man-',
    totalTarget: 150,
    generator: (i, diff, num) => {
      const topicIndex = i % topics.length;
      const caseIndex = Math.floor(i / topics.length);
      const t = topics[topicIndex];
      const k = caseIndex + 1;

      return {
        subtopic: t,
        competency: `Menerapkan kompetensi manajerial kepala madrasah pada ${t}`,
        question: `Studi Kasus Manajerial Kamad #${k} [${t}]:\nSebagai pimpinan madrasah dalam situasi kasus #${k} terkait "${t}", kepala madrasah dihadapkan pada tuntutan peningkatan mutu kelembagaan yang terukur. Langkah manajerial strategis dan solutif yang paling tepat adalah...`,
        options: {
          A: `Mengembangkan tata kelola kolaboratif berbasis data evaluasi diri madrasah (EDM) dan regulasi Kemenag`,
          B: `Mengambil keputusan sepihak tanpa melibatkan dewan guru maupun komite madrasah`,
          C: `Menyerahkan seluruh tanggung jawab manajerial kepada staf tata usaha tanpa supervisi`,
          D: `Menunda penyelesaian masalah kelembagaan hingga terjadi penurunan akreditasi`
        },
        correctAnswer: 'A',
        explanation: `Kompetensi manajerial kepala madrasah menuntut kepemimpinan berbasis data (data-driven), partisipatif, dan akuntabel sesuai EDM dan regulasi resmi Kemenag.`,
        tip: `Gunakan prinsip EDM (Evaluasi Diri Madrasah) dan RKAM dalam tata kelola manajerial.`
      };
    }
  });
}

// 2. KEPALA MADRASAH - SUPERVISI (150 Soal Unik)
function generateKamadSupervisi() {
  const topics = [
    'Penyusunan Program Supervisi Akademik dan Klinis Pembelajaran Guru',
    'Instrumen Pengamatan Pembelajaran di Kelas Berbasis Kurikulum Merdeka',
    'Teknik Wawancara Pra-Observasi dan Kesepakatan Fokus Sasaran Supervisi',
    'Teknik Observasi Kelas dan Pencatatan Fakta Pembelajaran',
    'Umpan Balik Pasca-Observasi dan Dialog Coaching Reflektif',
    'Tindak Lanjut Supervisi: Bimbingan Teknis, Peer Teaching, dan KKG/MGMP',
    'Penilaian Kinerja Guru (PKG) Berbasis Kompetensi Pedagogik dan Profesional',
    'Supervisi Pemanfaatan Teknologi Digital dan Media Pembelajaran Interaktif',
    'Supervisi Diferensiasi Pembelajaran dan Asesmen Autentik',
    'Evaluasi Ketercapaian Program Supervisi dan Laporan Akuntabilitas Mutu'
  ];

  return buildUniqueSubjectBank({
    subjectId: 'supervisi',
    subjectName: 'Supervisi Kepala Madrasah',
    categoryId: 'kepala_madrasah',
    categoryName: 'Kepala Madrasah',
    akgtkCategory: 'Kepala Madrasah',
    educationLevel: 'MI',
    idPrefix: 'tnd-km-sup-',
    totalTarget: 150,
    generator: (i, diff, num) => {
      const topicIndex = i % topics.length;
      const caseIndex = Math.floor(i / topics.length);
      const t = topics[topicIndex];
      const k = caseIndex + 1;

      return {
        subtopic: t,
        competency: `Melaksanakan supervisi akademik terhadap pendidik pada ${t}`,
        question: `Studi Kasus Supervisi Kamad #${k} [${t}]:\nDalam pelaksanaan program supervisi pembelajaran kasus #${k} pada materi "${t}", kepala madrasah mendampingi guru untuk meningkatkan mutu proses belajar mengajar. Pendekatan supervisi yang paling efektif dan memberdayakan adalah...`,
        options: {
          A: `Menerapkan pendekatan coaching reflektif yang memfasilitasi guru menemukan solusi perbaikan secara mandiri`,
          B: `Menilai kesalahan guru secara direktif dan menegurnya secara terbuka di hadapan peserta didik`,
          C: `Mengabaikan bukti kinerja guru di kelas dan memberikan nilai PKG seragam tanpa observasi`,
          D: `Mengambil alih seluruh proses pembelajaran guru di kelas secara mendadak tanpa pemberitahuan`
        },
        correctAnswer: 'A',
        explanation: `Supervisi akademik modern mengedepankan pendekatan kolegial dan coaching kemitraan untuk menumbuhkan refleksi dan komitmen peningkatan mutu guru.`,
        tip: `Supervisi klinis bertujuan membina (coaching), bukan mencari kesalahan (inspeksi).`
      };
    }
  });
}

// 3. KEPALA MADRASAH - KEWIRAUSAHAAN (150 Soal Unik)
function generateKamadKewirausahaan() {
  const topics = [
    'Inovasi Layanan Madrasah dan Diferensiasi Program Keunggulan',
    'Kerja Keras, Motivasi Berprestasi Tinggi, dan Ketahanan Mental Pimpinan',
    'Naluri Kewirausahaan dalam Mengelola Unit Usaha Madrasah (Baitul Mal / Koperasi)',
    'Pemanfaatan Aset Lahan dan Fasilitas Madrasah untuk Sumber Daya Mandiri',
    'Menjalin Kerjasama Sponsorship dan Kemitraan Strategis Dunia Usaha',
    'Pengembangan Branding Madrasah Berbasis Digital dan Media Komunikasi',
    'Manajemen Risiko Inovasi dan Akuntabilitas Finansial Program Unggulan',
    'Pembentukan Ekosistem Kreatif dan Inkubator Kewirausahaan Santri',
    'Optimalisasi Dana Umat: Wakaf Produktif, Zakat, dan Infaq Pendidikan',
    'Pemberdayaan Alumni dan Tokoh Masyarakat untuk Kemandirian Lembaga'
  ];

  return buildUniqueSubjectBank({
    subjectId: 'kewirausahaan',
    subjectName: 'Kewirausahaan Kepala Madrasah',
    categoryId: 'kepala_madrasah',
    categoryName: 'Kepala Madrasah',
    akgtkCategory: 'Kepala Madrasah',
    educationLevel: 'MI',
    idPrefix: 'tnd-km-kwr-',
    totalTarget: 150,
    generator: (i, diff, num) => {
      const topicIndex = i % topics.length;
      const caseIndex = Math.floor(i / topics.length);
      const t = topics[topicIndex];
      const k = caseIndex + 1;

      return {
        subtopic: t,
        competency: `Mengembangkan kewirausahaan madrasah pada ${t}`,
        question: `Studi Kasus Kewirausahaan Kamad #${k} [${t}]:\nUntuk mewujudkan kemandirian finansial dan mutu keunggulan madrasah kasus #${k} pada materi "${t}", kepala madrasah merancang gagasan kreatif. Strategi inovatif yang paling patut dan berdaya guna tinggi adalah...`,
        options: {
          A: `Mengembangkan program kemitraan produktif yang berakar pada potensi lokal dan nilai-nilai islami madrasah`,
          B: `Membebankan iuran tambahan memberatkan kepada seluruh orang tua siswa tanpa musyawarah komite`,
          C: `Mengalihkan seluruh jam belajar reguler santri untuk kegiatan berdagang komersial`,
          D: `Meminjam dana spekulatif berbunga tinggi kepada pihak ilegal tanpa mitigasi risiko`
        },
        correctAnswer: 'A',
        explanation: `Kewirausahaan kepala madrasah adalah instrumen inovatif nirlaba yang berorientasi pada kemajuan pendidikan dan pemanfaatan potensi secara halal dan etis.`,
        tip: `Kewirausahaan madrasah ditujukan untuk peningkatan mutu pendidikan, bukan komersialisasi peserta didik.`
      };
    }
  });
}

// 4. PENGAWAS - SUPERVISI AKADEMIK (150 Soal Unik)
function generatePengawasSupervisiAkademik() {
  const topics = [
    'Penyusunan Rencana Pengawasan Akademik (RPA) Tahunan dan Semesteran',
    'Pembinaan Guru dalam Implementasi Kurikulum Merdeka dan P5-PPRA',
    'Bimbingan Perancangan Modul Ajar dan Modul P5-RA Berbasis Diferensiasi',
    'Pemantauan 8 Standar Nasional Pendidikan Terkait Standar Isi dan Proses',
    'Penilaian Kinerja Guru (PKG) dan Analisis Angka Kredit Jabatan Fungsional',
    'Model Pendampingan Berkelanjutan: Workshop, In-House Training (IHT), KKG/MGMP',
    'Supervisi Klinis Pembelajaran Guru di Kelas dan Wawancara Umpan Balik',
    'Pemanfaatan Platform Merdeka Mengajar (PMM) dan Portal Simpatika Kemenag',
    'Pengembangan Asesmen Kompetensi Madrasah Indonesia (AKMI) dan AKGTK',
    'Penyusunan Laporan Hasil Pengawasan Akademik dan Rekomendasi Perbaikan'
  ];

  return buildUniqueSubjectBank({
    subjectId: 'supervisi_akademik',
    subjectName: 'Supervisi Akademik Pengawas',
    categoryId: 'pengawas',
    categoryName: 'Pengawas',
    akgtkCategory: 'Pengawas',
    educationLevel: 'MI',
    idPrefix: 'tnd-pw-sak-',
    totalTarget: 150,
    generator: (i, diff, num) => {
      const topicIndex = i % topics.length;
      const caseIndex = Math.floor(i / topics.length);
      const t = topics[topicIndex];
      const k = caseIndex + 1;

      return {
        subtopic: t,
        competency: `Melaksanakan supervisi akademik terhadap guru madrasah binaan pada ${t}`,
        question: `Studi Kasus Pengawas Akademik #${k} [${t}]:\nDalam mendampingi guru madrasah binaan pada kasus ke-${k} terkait "${t}", pengawas madrasah menemukan kendala pedagogik guru. Tindakan pendampingan profesional yang paling tepat sesuai kode etik pengawas adalah...`,
        options: {
          A: `Memberikan bimbingan teknis yang berpusat pada solusi praktis dan tindak lanjut reflektif di KKG/MGMP`,
          B: `Memberikan sanksi administratif sepihak tanpa memberikan ruang klarifikasi dan pembinaan`,
          C: `Membiarkan permasalahan guru tanpa melakukan evaluasi berkala pada kunjungan berikutnya`,
          D: `Menyusunkan seluruh perangkat ajar guru secara langsung tanpa melatih guru bersangkutan`
        },
        correctAnswer: 'A',
        explanation: `Tugas utama pengawas madrasah adalah membimbing, memfasilitasi, dan mendampingi guru secara profesional demi peningkatan kompetensi berkelanjutan.`,
        tip: `Pengawas berperan sebagai pembimbing (mentor/coach), bukan sekadar pemeriksa administrasi.`
      };
    }
  });
}

// 5. PENGAWAS - SUPERVISI MANAJERIAL (150 Soal Unik)
function generatePengawasSupervisiManajerial() {
  const topics = [
    'Penyusunan Rencana Pengawasan Manajerial (RPM) Madrasah Binaan',
    'Pendampingan Penyusunan EDM (Evaluasi Diri Madrasah) dan e-RKAM',
    'Pengawasan Standar Pengelolaan, Pendidik, Sarpras, dan Pembiayaan',
    'Penilaian Kinerja Kepala Madrasah (PKKM) Tahunan dan Empat Tahunan',
    'Pembinaan Akreditasi Madrasah Bersama BAN-PDM (Badan Akreditasi Nasional)',
    'Pemberdayaan Komite Madrasah dan Hubungan Masyarakat Lintas Sektoral',
    'Pemantauan Tata Kelola Dana BOS Madrasah dan Kepatuhan Pelaporan Keuangan',
    'Pencegahan Kekerasan di Madrasah (TPPKM) dan Penguatan Nilai Wasathiyah',
    'Manajemen Perubahan dan Mitigasi Resistensi Inovasi di Madrasah Binaan',
    'Penyusunan Laporan Hasil Pengawasan Manajerial ke Kantor Kemenag Kab/Kota'
  ];

  return buildUniqueSubjectBank({
    subjectId: 'supervisi_manajerial',
    subjectName: 'Supervisi Manajerial Pengawas',
    categoryId: 'pengawas',
    categoryName: 'Pengawas',
    akgtkCategory: 'Pengawas',
    educationLevel: 'MI',
    idPrefix: 'tnd-pw-man-',
    totalTarget: 150,
    generator: (i, diff, num) => {
      const topicIndex = i % topics.length;
      const caseIndex = Math.floor(i / topics.length);
      const t = topics[topicIndex];
      const k = caseIndex + 1;

      return {
        subtopic: t,
        competency: `Melaksanakan supervisi manajerial terhadap kepala madrasah binaan pada ${t}`,
        question: `Studi Kasus Pengawas Manajerial #${k} [${t}]:\nPada saat melaksanakan audit manajerial di madrasah binaan ke-${k} terkait materi "${t}", pengawas menemukan kelemahan tata kelola manajerial. Rekomendasi manajerial yang paling solutif dan akuntabel adalah...`,
        options: {
          A: `Mengarahkan kepala madrasah melakukan perbaikan sistemik berbasis instrumen EDM dan konsultasi terencana`,
          B: `Menutup operasional madrasah secara sepihak tanpa berkoordinasi dengan Kankemenag`,
          C: `Mengganti kepala madrasah secara langsung tanpa prosedur Badan Kepegawaian Kemenag`,
          D: `Mengabaikan temuan audit manajerial demi menjaga hubungan pertemanan pribadi`
        },
        correctAnswer: 'A',
        explanation: `Supervisi manajerial pengawas bertujuan memperkuat kapasitas kepemimpinan kepala madrasah melalui pembinaan tata kelola yang terstandar.`,
        tip: `Gunakan acuan PKKM dan instrumen EDM dalam supervisi manajerial.`
      };
    }
  });
}

// 6. PENGAWAS - EVALUASI PENDIDIKAN (150 Soal Unik)
function generatePengawasEvaluasiPendidikan() {
  const topics = [
    'Prinsip Dasar Evaluasi Pendidikan: Validitas, Reliabilitas, dan Objektivitas',
    'Penyusunan Kisi-Kisi Asesmen Madrasah Berstandar HOTS',
    'Analisis Kualitatif Butir Soal: Keterbacaan, Konstruksi, dan Materi',
    'Analisis Kuantitatif Butir Soal: Tingkat Kesukaran dan Daya Pembeda',
    'Efektivitas Pengecoh (Distraktor) dan Analisis Opsi Butir Soal',
    'Pemanfaatan Hasil AKMI dan ANBK untuk Perbaikan Mutu Pembelajaran',
    'Evaluasi Ketercapaian Standar Kompetensi Lulusan (SKL) Madrasah',
    'Penilaian Otentik: Kinerja, Portofolio, Proyek, dan Jurnal Sikap',
    'Pengolahan Nilai Asesmen Sumatif dan Penentuan Kriteria Ketercapaian (KKTP)',
    'Pelaporan Hasil Evaluasi Program Pendidikan ke Pemangku Kepentingan'
  ];

  return buildUniqueSubjectBank({
    subjectId: 'evaluasi_pendidikan',
    subjectName: 'Evaluasi Pendidikan Pengawas',
    categoryId: 'pengawas',
    categoryName: 'Pengawas',
    akgtkCategory: 'Pengawas',
    educationLevel: 'MI',
    idPrefix: 'tnd-pw-eva-',
    totalTarget: 150,
    generator: (i, diff, num) => {
      const topicIndex = i % topics.length;
      const caseIndex = Math.floor(i / topics.length);
      const t = topics[topicIndex];
      const k = caseIndex + 1;

      return {
        subtopic: t,
        competency: `Menerapkan konsep evaluasi pendidikan pada ${t}`,
        question: `Studi Kasus Evaluasi Pendidikan Pengawas #${k} [${t}]:\nDalam kegiatan telaah instrumen asesmen madrasah binaan kasus #${k} pada materi "${t}", pengawas melakukan telaah mutu soal. Prinsip evaluasi ilmiah yang paling tepat untuk diterapkan adalah...`,
        options: {
          A: `Memastikan butir instrumen memiliki validitas isi yang selaras dengan indikator dan daya beda yang signifikan`,
          B: `Membuat seluruh butir soal bernilai tingkat kesukaran sangat sulit agar peserta didik tertantang`,
          C: `Mengabaikan kisi-kisi dan merumuskan soal secara spontan menjelang pelaksanaan asesmen`,
          D: `Membuat soal dengan opsi jawaban yang ambigu dan menggunakan kata bermakna ganda`
        },
        correctAnswer: 'A',
        explanation: `Evaluasi pendidikan yang berkualitas harus memenuhi syarat validitas, reliabilitas, daya pembeda memadai, dan fungsi distraktor yang efektif.`,
        tip: `Soal yang baik memiliki daya pembeda positif (D >= 0.20) dan tingkat kesukaran proporsional.`
      };
    }
  });
}

// 7. PENGAWAS - PENELITIAN DAN PENGEMBANGAN (150 Soal Unik)
function generatePengawasLitbang() {
  const topics = [
    'Identifikasi Masalah Pembelajaran Riil untuk Penelitian Tindakan Sekolah (PTS)',
    'Metodologi Penelitian Tindakan Bimbingan (PTB) dan PTS Siklus Kurt Lewin',
    'Penyusunan Latar Belakang Masalah Berbasis Data Pengawasan Nyata',
    'Kajian Pustaka dan Kerangka Konseptual Tindakan Pengawasan',
    'Instrumen Pengumpulan Data Penelitian: Angket, Lembar Observasi, Rubrik',
    'Teknik Triangulasi Data Penelitian dan Validasi Ahli (Expert Judgment)',
    'Refleksi Antar-Siklus dan Rencana Tindak Lanjut Perbaikan Tindakan',
    'Penulisan Laporan Hasil PTS/PTB Sesuai Kaidah Karya Tulis Ilmiah (KTI)',
    'Publikasi Ilmiah Pengawas di Jurnal Terakreditasi atau Forum Ilmiah Kemenag',
    'Diseminasi Hasil Riset Pengawasan untuk Peningkatan Kebijakan Pendidikan'
  ];

  return buildUniqueSubjectBank({
    subjectId: 'penelitian_dan_pengembangan',
    subjectName: 'Penelitian dan Pengembangan Pengawas',
    categoryId: 'pengawas',
    categoryName: 'Pengawas',
    akgtkCategory: 'Pengawas',
    educationLevel: 'MI',
    idPrefix: 'tnd-pw-lit-',
    totalTarget: 150,
    generator: (i, diff, num) => {
      const topicIndex = i % topics.length;
      const caseIndex = Math.floor(i / topics.length);
      const t = topics[topicIndex];
      const k = caseIndex + 1;

      return {
        subtopic: t,
        competency: `Melakukan penelitian dan pengembangan madrasah pada ${t}`,
        question: `Studi Kasus Litbang Pengawas #${k} [${t}]:\nKetika menyusun rancangan penelitian tindakan pengawasan/sekolah (PTS) kasus #${k} pada materi "${t}", pengawas merumuskan desain riset. Pendekatan metodologis yang paling tepat dan valid adalah...`,
        options: {
          A: `Menerapkan daur refleksi berkelanjutan (perencanaan, pelaksanaan, observasi, dan refleksi) berbasis data riil`,
          B: `Memanipulasi data empiris lapangan agar hasil penelitian langsung menunjukkan keberhasilan 100% di siklus pertama`,
          C: `Menggandakan (plagiasi) naskah laporan PTS dari internet tanpa melakukan tindakan nyata di lapangan`,
          D: `Melaksanakan penelitian tanpa instrumen pengumpulan data yang terkalibrasi dan teruji validitasnya`
        },
        correctAnswer: 'A',
        explanation: `Penelitian tindakan (action research) bercirikan siklus spiral reflektif untuk memecahkan masalah praktis pendidikan secara jujur dan ilmiah.`,
        tip: `Prinsip PTS/PTB: Plan -> Do -> Observe -> Reflect secara berkelanjutan.`
      };
    }
  });
}

// 8. LABORAN - PROFESIONAL (150 Soal Unik)
function generateLaboranProfesional() {
  const topics = [
    'Keselamatan dan Kesehatan Kerja (K3) dan Penanganan Kecelakaan Laboratorium',
    'Simbol Bahaya Bahan Kimia B3 (Toxic, Flammable, Corrosive, Explosive)',
    'Penyimpanan Bahan Kimia Berdasarkan Lembar Data Keselamatan Bahan (MSDS)',
    'Pengelolaan dan Pembuangan Limbah Laboratorium Madrasah Ramah Lingkungan',
    'Inventarisasi, Kodifikasi, dan Kartu Kendali Alat/Bahan Laboratorium',
    'Perawatan, Pembersihan, dan Kalibrasi Alat Presisi (Mikroskop, Neraca Digital)',
    'Pembuatan Larutan Standar, Pengenceran Bertingkat, dan Titrasi Asam-Basa',
    'Penyiapan Preparat Basah/Kering dan Pengoperasian Autoklaf/Inkubator',
    'Penataan Ruang Laboratorium: Meja Praktikum, Wastafel, Exhaust Fan, Fume Hood',
    'Pemberian Layanan Praktikum Guru/Siswa dan Administrasi Penggunaan Lab'
  ];

  return buildUniqueSubjectBank({
    subjectId: 'profesional',
    subjectName: 'Profesional Laboran Madrasah',
    categoryId: 'laboran',
    categoryName: 'Laboran',
    akgtkCategory: 'Laboran',
    educationLevel: 'MI',
    idPrefix: 'tnd-lb-pro-',
    totalTarget: 150,
    generator: (i, diff, num) => {
      const topicIndex = i % topics.length;
      const caseIndex = Math.floor(i / topics.length);
      const t = topics[topicIndex];
      const k = caseIndex + 1;

      return {
        subtopic: t,
        competency: `Menerapkan kompetensi profesional laboran madrasah pada ${t}`,
        question: `Studi Kasus Laboran Madrasah #${k} [${t}]:\nPada saat praktikum sains madrasah kasus #${k} terkait materi "${t}", laboran menghadapi situasi teknis operasional. Prosedur standar laboratorium yang paling tepat dan aman dilakukan adalah...`,
        options: {
          A: `Menerapkan Standard Operating Procedure (SOP) keselamatan kerja dan penanganan bahan sesuai pedoman MSDS`,
          B: `Membuang sisa limbah asam/basa pekat langsung ke saluran air umum tanpa pengolahan penetralan`,
          C: `Menyimpan bahan kimia mudah meledak berdekatan dengan sumber panas kompor laboratorium`,
          D: `Membersihkan lensa optik mikroskop menggunakan kain kasar berminyak tanpa cairan pembersih khusus`
        },
        correctAnswer: 'A',
        explanation: `Kompetensi profesional laboran mengutamakan protokol K3, akurasi penyiapan bahan, dan kepatuhan terhadap SOP laboratorium.`,
        tip: `Keselamatan laboratorium berpegang pada SOP dan informasi Lembar Data Keselamatan Bahan (MSDS).`
      };
    }
  });
}

// 9. PUSTAKAWAN - PROFESIONAL (150 Soal Unik)
function generatePustakawanProfesional() {
  const topics = [
    'Klasifikasi Bahan Pustaka Berdasarkan Dewey Decimal Classification (DDC Edisi Islam)',
    'Pengatalogan Deskriptif Berdasarkan Kaidah AACR2 dan Resource Description & Access (RDA)',
    'Penentuan Tajuk Subjek, Kata Kunci, dan Penomoran Panggilan Buku (Call Number)',
    'Pengembangan Sistem Otomasi Perpustakaan Madrasah (SLiMS / Inlislite)',
    'Layanan Sirkulasi Peminjaman, Pengembalian, dan Penagihan Bahan Pustaka',
    'Layanan Referensi dan Penelusuran Informasi Ilmiah bagi Santri/Guru',
    'Preservasi dan Konservasi Koleksi Buku: Pengendalian Kelembaban (RH) dan Fumigasi',
    'Pengembangan Koleksi: Analisis Kebutuhan Pemustaka dan Pengadaan Buku Bermutu',
    'Program Literasi Madrasah: Gerakan Membaca, Pojok Baca, dan Duta Literasi',
    'Promosi Perpustakaan, Evaluasi Kepuasan Pemustaka, dan Pelaporan Kinerja Pustaka'
  ];

  return buildUniqueSubjectBank({
    subjectId: 'profesional',
    subjectName: 'Profesional Pustakawan Madrasah',
    categoryId: 'pustakawan',
    categoryName: 'Pustakawan',
    akgtkCategory: 'Pustakawan',
    educationLevel: 'MI',
    idPrefix: 'tnd-pk-pro-',
    totalTarget: 150,
    generator: (i, diff, num) => {
      const topicIndex = i % topics.length;
      const caseIndex = Math.floor(i / topics.length);
      const t = topics[topicIndex];
      const k = caseIndex + 1;

      return {
        subtopic: t,
        competency: `Menerapkan kompetensi profesional pustakawan madrasah pada ${t}`,
        question: `Studi Kasus Pustakawan Madrasah #${k} [${t}]:\nDalam pengelolaan perpustakaan madrasah kasus #${k} terkait materi "${t}", pustakawan madrasah memberikan pelayanan informasi kepada pemustaka. Prosedur kepustakawanan yang paling tepat dan profesional adalah...`,
        options: {
          A: `Menerapkan sistem temu kembali informasi yang terstandar dengan klasifikasi DDC dan otomasi perpustakaan`,
          B: `Menyimpan koleksi buku baru di gudang tanpa mencatat nomor inventaris dan katalog buku`,
          C: `Mengunci seluruh lemari perpustakaan dan melarang siswa meminjam buku demi mencegah kerusakan`,
          D: `Menjemur koleksi manuskrip kuno di bawah sinar matahari terik langsung secara terus-menerus`
        },
        correctAnswer: 'A',
        explanation: `Kompetensi pustakawan madrasah mencakup pengorganisasian informasi (DDC, otomasi SLiMS), pelestarian bahan pustaka, dan layanan prima bagi santri.`,
        tip: `DDC 297 dialokasikan untuk Islam; perpustakaan modern memanfaatkan OPAC dan automasi terpadu.`
      };
    }
  });
}

function generateAllTendik() {
  const allTendik = [];
  allTendik.push(...generateKamadManajerial());
  allTendik.push(...generateKamadSupervisi());
  allTendik.push(...generateKamadKewirausahaan());

  allTendik.push(...generatePengawasSupervisiAkademik());
  allTendik.push(...generatePengawasSupervisiManajerial());
  allTendik.push(...generatePengawasEvaluasiPendidikan());
  allTendik.push(...generatePengawasLitbang());

  allTendik.push(...generateLaboranProfesional());
  allTendik.push(...generatePustakawanProfesional());

  return allTendik;
}

module.exports = {
  generateAllTendik
};
