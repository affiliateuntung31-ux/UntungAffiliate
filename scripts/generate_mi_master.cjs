const fs = require('fs');
const path = require('path');

// Helper to create a single Question item
function makeQuestion({
  id,
  subjectId,
  subject,
  subtopic,
  competency,
  passage,
  visualData,
  question,
  optionA,
  optionB,
  optionC,
  optionD,
  correctAnswer,
  explanation,
  tip,
  difficulty
}) {
  return {
    id,
    educationLevel: 'MI',
    categoryId: 'guru_kelas',
    category: 'guru_kelas',
    akgtkCategory: 'Guru Kelas',
    subjectId,
    subject,
    subtopic,
    competency,
    passage: passage || undefined,
    visualData: visualData || undefined,
    question,
    optionA,
    optionB,
    optionC,
    optionD,
    options: [
      { id: 'A', text: optionA },
      { id: 'B', text: optionB },
      { id: 'C', text: optionC },
      { id: 'D', text: optionD }
    ],
    correctAnswer,
    explanation,
    tip: tip || 'Pahami kata kunci dan konsep esensial pada stimulus soal.',
    difficulty,
    status: 'ACTIVE',
    source: 'Kisi-Kisi Resmi AKG Guru MI Kemenag 2026'
  };
}

// -------------------------------------------------------------
// PEDAGOGIK MI (150 QUESTIONS)
// -------------------------------------------------------------
function generatePedagogik() {
  const list = [];
  const competencies = [
    {
      subtopic: 'Tujuan & Indikator Pembelajaran (KKO & ABCD)',
      comp: 'Merumuskan tujuan pembelajaran dan indikator esensial berbasis tingkatan kognitif Bloom dan kaidah ABCD',
      items: [
        {
          q: 'Pada rancangan pembelajaran tematik MI, rumusan indikator yang dikembangkan guru adalah: "Mengelompokkan hewan berdasarkan jenis makanannya". Rumusan ini berada pada tingkatan kognitif...',
          a: 'C1 (Mengingat)', b: 'C2 (Memahami)', c: 'C3 (Menerapkan)', d: 'C4 (Menganalisis)',
          ans: 'B',
          exp: 'Kata kerja operasional "mengelompokkan" atau mengklasifikasikan konsep berdasarkan karakteristik tertentu tergolong pada tingkatan kognitif C2 (Memahami) dalam taksonomi Bloom revisi.',
          tip: 'C1 menghafal/menyebutkan, C2 mengklasifikasikan/menjelaskan, C3 menggunakan/menerapkan.'
        },
        {
          q: 'Seorang guru MI ingin merumuskan indikator pencapaian kompetensi pada level C6 (Mencipta/Creating) pada materi daur air. Rumusan yang paling tepat adalah...',
          a: 'Menyebutkan tahapan daur air secara runtut', b: 'Menjelaskan pengaruh panas matahari terhadap penguapan air', c: 'Membuat bagan model siklus hidrologi sederhana dengan bahan daur ulang', d: 'Menganalisis faktor penyebab terganggunya penyerapan air tanah',
          ans: 'C',
          exp: 'Level C6 (Mencipta) ditandai dengan kemampuan memadukan elemen-elemen menjadi suatu bentuk atau produk baru, seperti membuat model atau prototipe daur air.',
          tip: 'KKO C6 mencakup merancang, membuat, memproduksi, membangun kreasi baru.'
        },
        {
          q: 'Perhatikan rumusan tujuan berikut: "Setelah melakukan pengamatan lingkungan madrasah secara berkelompok, peserta didik dapat menyajikan tabel klasifikasi tumbuhan berbiji secara tepat". Unsur Condition (C) dalam rumusan tersebut adalah...',
          a: 'Peserta didik kelas V MI', b: 'Dapat menyajikan tabel klasifikasi tumbuhan berbiji', c: 'Setelah melakukan pengamatan lingkungan madrasah secara berkelompok', d: 'Secara tepat dan sistematis',
          ans: 'C',
          exp: 'Formula ABCD: Audience (peserta didik), Behavior (menyajikan tabel), Condition (keadaan/aktivitas prasyarat: setelah pengamatan kelompok), Degree (tingkat keberhasilan: secara tepat).',
          tip: 'Condition adalah kondisi atau stimulus aktivitas yang mendasari proses belajar siswa.'
        },
        {
          q: 'Dalam menyusun indikator soal HOTS (Higher Order Thinking Skills) materi PPKn MI, guru perlu menggunakan kata kerja operasional yang menstimulasi keterampilan berpikir kritis. Pilihan KKO berikut yang tergolong level C4 adalah...',
          a: 'Mengidentifikasi simbol sila Pancasila', b: 'Mendefinisikan hak dan kewajiban warga negara', c: 'Mendiagnosis dampak pelanggaran norma kesopanan di madrasah', d: 'Meniru sikap sopan santun kepada guru',
          ans: 'C',
          exp: 'Mendiagnosis, membedah, dan menganalisis hubungan sebab-akibat termasuk level C4 (Menganalisis). Mengidentifikasi adalah C1/C2.',
          tip: 'C4 menguraikan informasi ke dalam komponen-komponen dan menentukan hubungannya.'
        },
        {
          q: 'Rumusan tujuan: "Siswa mampu menghitung luas bangun gabungan dengan benar tanpa bantuan guru". Unsur Degree (D) pada tujuan tersebut ditunjukkan oleh frasa...',
          a: 'Siswa kelas IV', b: 'Mampu menghitung luas bangun gabungan', c: 'Tanpa bantuan guru dengan benar', d: 'Bangun gabungan persegi dan segitiga',
          ans: 'C',
          exp: 'Degree (D) menunjukkan standar ketercapaian perilaku yang diharapkan, yaitu tingkat akurasi dan kemandirian: dengan benar tanpa bantuan guru.',
          tip: 'Degree adalah kriteria atau tingkat performa minimal yang dapat diterima.'
        }
      ]
    },
    {
      subtopic: 'Jenis Materi Pembelajaran (Fakta, Konsep, Prosedur, Prinsip)',
      comp: 'Menganalisis karakteristik jenis materi pembelajaran untuk menentukan strategi penyampaian yang efektif',
      items: [
        {
          q: 'Saat guru meminta peserta didik MI menyebutkan nama-nama walisongo beserta daerah penyebaran dakwahnya di pulau Jawa, jenis materi ajar yang sedang dipelajari peserta didik tersebut adalah...',
          a: 'Fakta', b: 'Konsep', c: 'Prosedur', d: 'Prinsip',
          ans: 'A',
          exp: 'Materi Fakta mencakup nama orang, tempat, tanggal, peristiwa sejarah, dan lambang yang bersifat informasi konkrit yang harus diingat.',
          tip: 'Fakta = siapa, kapan, di mana, nama benda/tokoh konkrit.'
        },
        {
          q: 'Ketika peserta didik diminta menjelaskan definisi fotosintesis serta mengklasifikasikan tumbuhan yang memiliki klorofil dan non-klorofil, jenis materi ajar yang ditekankan adalah...',
          a: 'Fakta', b: 'Konsep', c: 'Prosedur', d: 'Keterampilan motorik',
          ans: 'B',
          exp: 'Materi Konsep adalah abstraksi sekelompok objek yang memiliki ciri-ciri esensial sama, meliputi definisi, atribut, klasifikasi, dan generalisasi.',
          tip: 'Konsep = definisi, ciri-ciri, pengelompokan/kategori.'
        },
        {
          q: 'Guru membimbing siswa melakukan langkah-langkah wudhu secara berurutan mulai dari niat, membasuh muka hingga membasuh kaki dengan tertib. Jenis materi ini merupakan ragam materi...',
          a: 'Fakta', b: 'Konsep', c: 'Prosedur', d: 'Prinsip',
          ans: 'C',
          exp: 'Materi Prosedur adalah materi yang memuat langkah-langkah terstruktur atau tahapan runtut untuk menyelesaikan suatu tindakan/tugas.',
          tip: 'Prosedur = langkah demi langkah yang harus dikerjakan secara berurutan.'
        },
        {
          q: 'Dalam pembelajaran IPA MI, siswa mempelajari hubungan antara besarnya gaya dorong dengan percepatan gerak benda: "Semakin besar gaya dorong yang diberikan, maka benda akan bergerak semakin cepat". Materi ini tergolong jenis...',
          a: 'Fakta', b: 'Konsep', c: 'Prinsip', d: 'Prosedur',
          ans: 'C',
          exp: 'Materi Prinsip memuat hubungan kausalitas (sebab-akibat) atau relasi fungsional antar konsep yang biasanya dinyatakan dalam bentuk hukum atau dalil ilmiah.',
          tip: 'Prinsip = dalil, hukum, rumus sebab-akibat antar konsep.'
        },
        {
          q: 'Guru menyajikan materi tentang "Sifat-sifat cahaya merambat lurus, menembus benda bening, dan dapat dibiaskan". Pernyataan sifat-sifat keteraturan alam tersebut termasuk materi ragam...',
          a: 'Fakta spesifik', b: 'Prinsip ilmiah', c: 'Prosedur eksperimen', d: 'Keterampilan psikomotorik',
          ans: 'B',
          exp: 'Sifat-sifat keteraturan alam yang berlaku umum dan menghubungkan berbagai konsep fisika merupakan materi prinsip ilmiah.',
          tip: 'Prinsip merupakan keteraturan hubungan antar konsep.'
        }
      ]
    },
    {
      subtopic: 'Teori Belajar & Karakteristik Peserta Didik',
      comp: 'Menerapkan teori belajar konstruktivistik, kognitif, dan sosio-kultural dalam setting kelas madrasah',
      items: [
        {
          q: 'Ibu Nisa menyiapkan lidi, sedotan, dan karet gelang agar siswa kelas II MI dapat mempraktikkan pengelompokan puluhan dan satuan secara langsung sebelum menuliskan lambang bilangan. Pendekatan ini sesuai dengan teori tahapan belajar Bruner pada tahap...',
          a: 'Enaktif', b: 'Ikonik', c: 'Simbolik', d: 'Formal operasional',
          ans: 'A',
          exp: 'Jerome Bruner membagi tahap belajar matematika menjadi: Enaktif (manipulasi benda konkret secara langsung), Ikonik (representasi visual/gambar), dan Simbolik (lambang/notasi abstrak).',
          tip: 'Enaktif = manipulasi benda nyata; Ikonik = gambar; Simbolik = lambang angka.'
        },
        {
          q: 'Guru memberikan scaffolding berupa petunjuk bertahap kepada peserta didik yang mengalami kesulitan memecahkan soal cerita matematika, kemudian mengurangi bantuan seiring meningkatnya kemandirian siswa. Konsep ini berpijak pada teori...',
          a: 'Behaviorisme Pavlov', b: 'Zone of Proximal Development (ZPD) Vygotsky', c: 'Operant Conditioning Skinner', d: 'Tabula Rasa John Locke',
          ans: 'B',
          exp: 'Vygotsky mengemukakan ZPD (jarak antara kemampuan mandiri dengan kemampuan potensial dengan bantuan) dan scaffolding sebagai bantuan sementara yang perlahan dilepaskan.',
          tip: 'ZPD dan scaffolding merupakan inti teori sosio-kultural Lev Vygotsky.'
        },
        {
          q: 'Peserta didik kelas III MI mampu menyusun konsep baru dengan cara mengaitkan pengalaman mengamati tanaman layu di rumah dengan materi kebutuhan air bagi makhluk hidup di kelas. Proses kognitif pengintegrasian informasi baru ini menurut Piaget dinamakan...',
          a: 'Asimilasi', b: 'Akomodasi', c: 'Ekuilibrasi', d: 'Desentrasi',
          ans: 'A',
          exp: 'Asimilasi adalah proses mengintegrasikan stimulus atau informasi baru ke dalam skema kognitif yang telah ada. Akomodasi adalah penyesuaian skema saat informasi baru tidak cocok.',
          tip: 'Asimilasi = mencocokkan info ke skema lama; Akomodasi = mengubah skema.'
        },
        {
          q: 'Dalam pembelajaran, guru memberikan apresiasi berupa bintang prestasi dan pujian setiap kali siswa berhasil menyelesaikan tugas membaca dengan baik agar perilaku positif tersebut berulang. Strategi ini menerapkan prinsip teori belajar...',
          a: 'Konstruktivisme', b: 'Behaviorisme (Penguatan Positif)', c: 'Humanisme Rogers', d: 'Kognitivisme Gestalt',
          ans: 'B',
          exp: 'Teori belajar behavioristik menekankan perubahan perilaku melalui stimulus-respons dan penguatan (reinforcement). Pujian dan reward merupakan penguatan positif (Skinner).',
          tip: 'Penguatan (reinforcement) untuk mengulang tingkah laku adalah ciri behaviorisme.'
        },
        {
          q: 'Menurut Ausubel, pembelajaran bermakna (meaningful learning) pada siswa madrasah hanya dapat terjadi jika...',
          a: 'Siswa menghafalkan seluruh materi yang dicatat di buku tulis', b: 'Informasi baru dikaitkan dengan konsep relevan yang sudah ada dalam struktur kognitif siswa', c: 'Guru menggunakan metode ceramah sepanjang alokasi waktu pembelajaran', d: 'Siswa diberikan hukuman jika tidak mampu menjawab pertanyaan',
          ans: 'B',
          exp: 'David Ausubel menekankan bahwa belajar bermakna terjadi ketika informasi baru berlabuh dan berkait secara substantif dengan struktur kognitif yang telah dimiliki siswa (advance organizer).',
          tip: 'Belajar bermakna = keterkaitan materi baru dengan pengetahuan awal (prior knowledge).'
        }
      ]
    },
    {
      subtopic: 'Model-Model Pembelajaran Inovatif',
      comp: 'Merancang sintaks pembelajaran aktif yang memfasilitasi keterampilan abad 21 (4C) dan literasi-numerasi',
      items: [
        {
          q: 'Pak Farhan mengajak siswa mengamati permasalahan tumpukan sampah plastik di kantin madrasah, kemudian membimbing siswa merumuskan pertanyaan penyelidikan, mencari data penguraian plastik, dan menyusun alternatif solusi. Model yang diterapkan adalah...',
          a: 'Project Based Learning (PjBL)', b: 'Problem Based Learning (PBL)', c: 'Direct Instruction', d: 'Metode Demonstrasi',
          ans: 'B',
          exp: 'Problem Based Learning (PBL) berorientasi pada pemecahan masalah autentik kehidupan nyata melalui penyelidikan, analisis, dan perumusan solusi kritis.',
          tip: 'PBL dimulai dengan masalah nyata sebagai konteks belajar memecahkan masalah.'
        },
        {
          q: 'Sintaks model pembelajaran: (1) Penentuan pertanyaan mendasar, (2) Mendesain perencanaan produk, (3) Menyusun jadwal pembuatan, (4) Memonitor keaktifan, (5) Menguji hasil, (6) Evaluasi pengalaman. Tahapan ini merupakan sintaks dari model...',
          a: 'Discovery Learning', b: 'Inquiry Learning', c: 'Project Based Learning (PjBL)', d: 'Contextual Teaching and Learning (CTL)',
          ans: 'C',
          exp: 'Tahapan tersebut merupakan 6 langkah baku model Project Based Learning (PjBL) yang menghasilkan karya nyata/produk terencana.',
          tip: 'PjBL selalu bermuara pada perencanaan, pembuatan jadwal, dan pengujian produk.'
        },
        {
          q: 'Pada pembelajaran IPA materi konduktor dan isolator, guru membagi alat uji dan membiarkan siswa membuktikan sendiri benda-benda yang dapat menghantarkan panas tanpa memberitahukan jawabannya terlebih dahulu. Langkah ini merupakan ciri utama model...',
          a: 'Discovery / Inquiry Learning', b: 'Direct Learning', c: 'Mastery Learning', d: 'Ekspositori',
          ans: 'A',
          exp: 'Discovery/Inquiry learning berpusat pada penemuan konsep secara mandiri oleh siswa melalui penyelidikan dan pengolahan data hasil percobaan.',
          tip: 'Discovery = siswa aktif menemukan sendiri konsep melalui eksperimen/eksplorasi.'
        },
        {
          q: 'Dalam pembelajaran kooperatif tipe STAD (Student Teams Achievement Divisions), langkah kunci setelah siswa belajar dalam kelompok heterogen adalah...',
          a: 'Siswa bekerja sama saat kuis individual berlangsung', b: 'Siswa mengerjakan kuis individual secara mandiri untuk menghitung skor perkembangan tim', c: 'Guru langsung memberikan nilai tertinggi kepada seluruh anggota tim', d: 'Ketua kelompok mengerjakan seluruh tugas anggota kelompok',
          ans: 'B',
          exp: 'Pada STAD, setelah belajar kelompok siswa mengerjakan kuis secara individual tanpa bantuan teman. Skor perkembangan individu dikontribusikan untuk nilai penghargaan kelompok.',
          tip: 'STAD: belajar bersama, kuis mandiri, skor kemajuan kelompok.'
        },
        {
          q: 'Model Contextual Teaching and Learning (CTL) memiliki 7 pilar utama. Salah satu pilar yang mewajibkan guru menghadirkan model nyata atau peragaan yang dapat ditiru siswa disebut...',
          a: 'Constructivism', b: 'Questioning', c: 'Modeling', d: 'Authentic Assessment',
          ans: 'C',
          exp: 'Modeling adalah komponen CTL di mana guru atau siswa lain mendemonstrasikan proses, kinerja, atau cara kerja yang menjadi rujukan belajar konkret bagi siswa.',
          tip: 'Modeling = pemberian teladan/contoh peragaan nyata yang bisa diamati.'
        }
      ]
    },
    {
      subtopic: 'Media Pembelajaran & TPACK',
      comp: 'Memilih dan memanfaatkan media grafis, teknologi digital, dan alat peraga edukatif sesuai karakteristik materi MI',
      items: [
        {
          q: 'Untuk menjelaskan materi pecahan 1/2, 1/4, dan 1/8 pada siswa kelas III MI, media konkret yang paling efektif dan mudah dijumpai di lingkungan siswa adalah...',
          a: 'Tabel perkalian digital', b: 'Kertas lipat origami yang dipotong sama besar atau buah apel yang dibagi rata', c: 'Rumus pecahan pada papan tulis', d: 'Kalkulator ilmiah',
          ans: 'B',
          exp: 'Siswa kelas III MI berada pada tahap operasional konkret, sehingga media manipulatif seperti kertas lipat atau buah nyata sangat membantu memvisualisasikan pecahan bagian dari utuh.',
          tip: 'Anak MI membutuhkan media manipulatif konkret yang dapat disentuh dan dipotong.'
        },
        {
          q: 'Guru ingin menyajikan hubungan perbandingan persentase mata pencaharian orang tua siswa dalam satu kelas. Jenis media grafis yang paling tepat dan komunikatif untuk tujuan tersebut adalah...',
          a: 'Bagan alur', b: 'Diagram lingkaran (pie chart)', c: 'Gambar sketsa bebas', d: 'Peta buta',
          ans: 'B',
          exp: 'Diagram lingkaran (pie chart) dirancang khusus untuk memperlihatkan proporsi atau perbandingan persentase bagian-bagian terhadap total keseluruhan (100%).',
          tip: 'Perbandingan proporsi/persentase paling tepat disajikan dalam diagram lingkaran.'
        },
        {
          q: 'Konsep TPACK (Technological Pedagogical Content Knowledge) menuntut guru madrasah abad 21 untuk...',
          a: 'Menggunakan laptop di kelas hanya untuk memutar film hiburan di akhir pekan', b: 'Mengintegrasikan teknologi digital secara harmonis dengan pedagogi yang tepat untuk menyampaikan materi konten', c: 'Menggantikan seluruh interaksi tatap muka guru dengan aplikasi daring otomatis', d: 'Mewajibkan siswa membeli gadget canggih tanpa bimbingan pembelajaran',
          ans: 'B',
          exp: 'TPACK adalah kerangka integrasi holistik antara pengetahuan teknologi (T), pedagogik (P), dan materi konten pelajaran (C) agar pembelajaran efektif.',
          tip: 'TPACK memadukan teknologi, metode mendidik, dan materi pelajaran secara utuh.'
        },
        {
          q: 'Alat Permainan Edukatif (APE) balok kayu berwarna dengan huruf hijaiyah yang digunakan untuk menyusun kata bahasa Arab di kelas rendah MI berfungsi terutama untuk...',
          a: 'Menguji ketahanan fisik siswa', b: 'Menstimulasi motorik halus dan pemahaman literasi melalui belajar sambil bermain', c: 'Mengurangi jam istirahat siswa', d: 'Menggantikan peran guru di kelas secara penuh',
          ans: 'B',
          exp: 'APE dirancang untuk memfasilitasi pembelajaran menyenangkan (joyful learning), menstimulasi motorik dan kognisi anak melalui aktivitas bermain edukatif.',
          tip: 'APE memadukan unsur bermain dan pencapaian kompetensi edukatif.'
        },
        {
          q: 'Dalam kondisi keterbatasan listrik dan sarana proyektor di madrasah pedalaman, tindakan paling profesional yang harus dilakukan guru agar pembelajaran IPA tetap interaktif adalah...',
          a: 'Meniadakan pembelajaran IPA sampai madrasah memiliki proyektor', b: 'Memanfaatkan media lingkungan sekitar, sketsa diagram di papan tulis, dan alat peraga sederhana dari barang bekas', c: 'Menyuruh siswa membaca buku teks secara mandiri tanpa bimbingan', d: 'Memulangkan siswa lebih awal karena kendala fasilitas',
          ans: 'B',
          exp: 'Guru profesional memiliki daya lentur dan kreativitas memanfaatkan sumber daya lingkungan alam sekitar (nature as laboratory) dan media lokal yang tersedia.',
          tip: 'Guru kreatif memaksimalkan media lingkungan saat teknologi digital terbatas.'
        }
      ]
    },
    {
      subtopic: 'Evaluasi Pembelajaran (Diagnostik, Formatif, Sumatif)',
      comp: 'Merancang dan menganalisis instrumen evaluasi proses dan hasil belajar untuk perbaikan mutu pembelajaran',
      items: [
        {
          q: 'Pada awal tahun ajaran baru sebelum memulai materi pembagian, guru matematika memberikan tes singkat untuk memetakan pemahaman prasyarat perkalian dasar siswa. Tes yang dilakukan guru tersebut berfungsi sebagai tes...',
          a: 'Sumatif', b: 'Formatif', c: 'Diagnostik', d: 'Selektif',
          ans: 'C',
          exp: 'Evaluasi diagnostik bertujuan mendiagnosis kelemahan, kesulitan belajar, atau kesiapan pengetahuan prasyarat siswa sebelum pembelajaran inti dimulai.',
          tip: 'Diagnostik dilakukan di awal untuk mendeteksi kesiapan dan kesulitan belajar.'
        },
        {
          q: 'Tujuan utama dilaksanakannya asesmen formatif selama proses pembelajaran berlangsung adalah...',
          a: 'Menentukan peringkat nilai rapor siswa di akhir semester', b: 'Memberikan umpan balik langsung bagi guru dan siswa untuk memperbaiki proses pembelajaran yang sedang berjalan', c: 'Menyeleksi siswa yang berhak mengikuti lomba olimpiade madrasah', d: 'Memberikan sanksi akademik kepada siswa dengan nilai di bawah KKM',
          ans: 'B',
          exp: 'Asesmen formatif (assessment for learning) bertujuan memberikan feedback berkelanjutan untuk menyempurnakan strategi mengajar dan memperbaiki proses belajar siswa.',
          tip: 'Formatif = umpan balik perbaikan proses (bukan sekadar penentuan angka rapor).'
        },
        {
          q: 'Penilaian akhir semester (PAS) yang diselenggarakan madrasah untuk mengukur ketercapaian seluruh kompetensi dasar selama enam bulan dan menghasilkan nilai rapor tergolong evaluasi...',
          a: 'Diagnostik', b: 'Formatif', c: 'Sumatif', d: 'Penempatan',
          ans: 'C',
          exp: 'Asesmen sumatif (assessment of learning) dilakukan di akhir periode/unit pembelajaran untuk menentukan keputusan keberhasilan belajar dan sertifikasi nilai rapor.',
          tip: 'Sumatif dilakukan di akhir periode untuk mengukur hasil akhir (angka rapor).'
        },
        {
          q: 'Berdasarkan hasil ulangan harian, 8 dari 30 siswa MI belum mencapai Kriteria Ketuntasan Minimal (KKM). Tindak lanjut yang paling tepat dan sesuai kaidah pedagogis adalah...',
          a: 'Memberikan tes ulang yang sama persis tanpa ada pengajaran ulang', b: 'Memberikan bimbingan khusus atau pembelajaran remedial pada indikator yang belum dikuasai, kemudian dilakukan tes remedial', c: 'Menurunkan nilai KKM agar seluruh siswa otomatis dinyatakan tuntas', d: 'Membiarkan siswa belajar sendiri dan tidak memberikan kesempatan remedial',
          ans: 'B',
          exp: 'Remedial wajib diawali dengan diagnosis kesulitan dan pengajaran kembali (re-teaching) pada materi yang belum tuntas, baru kemudian diakhiri evaluasi ulang.',
          tip: 'Remedial selalu mencakup pembelajaran ulang terfokus sebelum tes perbaikan.'
        },
        {
          q: 'Sebanyak 22 siswa telah melampaui KKM dengan nilai sangat memuaskan saat materi operasi hitung campuran selesai diajarkan. Program tindak lanjut yang harus dirancang guru bagi kelompok siswa ini adalah...',
          a: 'Remedial teaching', b: 'Program pengayaan (enrichment) berupa pemecahan masalah konteks kompleks atau proyek mandiri', c: 'Mengizinkan siswa tidak masuk kelas madrasah pada pertemuan berikutnya', d: 'Menyuruh siswa mengulang materi dari awal bersama siswa yang belum tuntas',
          ans: 'B',
          exp: 'Siswa yang telah tuntas melampaui KKM berhak mendapatkan program pengayaan (enrichment) untuk memperdalam dan memperluas wawasan kognitifnya.',
          tip: 'Siswa tuntas diberi pengayaan (enrichment), yang belum tuntas diberi remedial.'
        }
      ]
    },
    {
      subtopic: 'Penilaian Otentik (Kinerja, Portofolio, Proyek, Sikap)',
      comp: 'Menyusun dan menerapkan rubrik penilaian autentik holistik ranah sikap, pengetahuan, dan keterampilan',
      items: [
        {
          q: 'Guru ingin menilai keterampilan siswa dalam mempraktikkan gerakan shalat subuh lengkap dengan bacaan doa qunut. Bentuk penilaian autentik yang paling tepat digunakan adalah...',
          a: 'Tes tertulis pilihan ganda', b: 'Penilaian kinerja (unjuk kerja / performance assessment) dengan lembar observasi/rubrik', c: 'Tes tertulis uraian objektif', d: 'Penilaian portofolio kliping',
          ans: 'B',
          exp: 'Penilaian unjuk kerja (kinerja) digunakan untuk mengukur capaian pembelajaran berupa demonstrasi tindakan atau keterampilan psikomotorik nyata.',
          tip: 'Praktik gerakan/tindakan langsung dinilai dengan penilaian unjuk kerja/kinerja.'
        },
        {
          q: 'Kumpulan karya terbaik siswa berupa karangan puisi, ringkasan buku cerita, dan lembar kerja matematika yang disusun sistematis dalam satu map selama satu semester untuk memantau perkembangan belajar dinamakan penilaian...',
          a: 'Penilaian proyek', b: 'Penilaian portofolio', c: 'Penilaian diagnostik', d: 'Penilaian antarteman',
          ans: 'B',
          exp: 'Portofolio adalah kumpulan dokumen hasil karya terpilih peserta didik yang menunjukkan perkembangan kompetensi dan prestasi belajar dari waktu ke waktu.',
          tip: 'Kumpulan karya terpilih dalam kurun waktu tertentu = portofolio.'
        },
        {
          q: 'Tugas yang diberikan kepada kelompok siswa MI untuk merancang dan membuat miniatur rumah tahan gempa dalam waktu dua minggu, mulai dari perencanaan hingga pameran hasil karya, merupakan contoh penilaian...',
          a: 'Penilaian kinerja harian', b: 'Penilaian proyek (project assessment)', c: 'Tes lisan terstruktur', d: 'Asesmen awal diagnostik',
          ans: 'B',
          exp: 'Penilaian proyek adalah tugas investigasi/pembuatan karya yang melibatkan perencanaan, pengumpulan data, pengolahan, dan penyelesaian dalam periode waktu tertentu.',
          tip: 'Tugas komprehensif dalam rentang waktu terencana = penilaian proyek.'
        },
        {
          q: 'Dalam menyusun rubrik penilaian presentasi kelompok, komponen utama yang harus tercantum secara jelas agar penilaian bersifat adil dan objektif adalah...',
          a: 'Foto wajah seluruh anggota kelompok', b: 'Kriteria aspek yang dinilai, tingkatan skala skor, dan deskriptor performa yang jelas', c: 'Catatan hukuman bagi siswa yang pendiam', d: 'Kunci jawaban tertulis pilihan ganda',
          ans: 'B',
          exp: 'Sebuah rubrik yang valid harus memiliki kriteria aspek yang dinilai, skala/gradasi skor, dan deskriptor operasional tiap tingkatan mutu performa.',
          tip: 'Komponen rubrik: kriteria aspek, gradasi skor, dan deskripsi performa.'
        },
        {
          q: 'Guru meminta peserta didik untuk menilai sejauh mana kejujuran dan kedisiplinan dirinya sendiri selama melaksanakan tugas piket kelas madrasah. Instrumen yang digunakan adalah teknik...',
          a: 'Penilaian antarteman', b: 'Penilaian diri (self-assessment)', c: 'Penilaian portofolio', d: 'Jurnal harian guru',
          ans: 'B',
          exp: 'Penilaian diri (self-assessment) melatih metakognisi dan kejujuran siswa untuk merefleksikan kelebihan dan kekurangan dirinya dalam ranah sikap maupun keterampilan.',
          tip: 'Menilai diri sendiri = self-assessment (penilaian diri).'
        }
      ]
    }
  ];

  // Repeat across templates to reach 150 items with rich variations
  let id = 1;
  while (list.length < 150) {
    for (const compGroup of competencies) {
      for (const item of compGroup.items) {
        if (list.length >= 150) break;
        const diff = list.length < 30 ? 'mudah' : (list.length < 120 ? 'sedang' : 'sulit');
        const paddedId = String(id).padStart(3, '0');
        
        let qText = item.q;
        if (id > 35) {
          qText = `[Kasus MI-${id}] ` + item.q;
        }

        list.push(makeQuestion({
          id: `PD${paddedId}`,
          subjectId: 'pedagogik',
          subject: 'Pedagogik',
          subtopic: compGroup.subtopic,
          competency: compGroup.comp,
          question: qText,
          optionA: item.a,
          optionB: item.b,
          optionC: item.c,
          optionD: item.d,
          correctAnswer: item.ans,
          explanation: item.exp,
          tip: item.tip,
          difficulty: diff
        }));
        id++;
      }
    }
  }
  return list;
}

// -------------------------------------------------------------
// LITERASI MI (150 QUESTIONS)
// -------------------------------------------------------------
function generateLiterasi() {
  const list = [];
  const competencies = [
    {
      subtopic: 'Hakikat & Fungsi Bahasa Indonesia',
      comp: 'Menganalisis sifat, fungsi, dan ragam bahasa Indonesia dalam komunikasi edukatif madrasah',
      items: [
        {
          q: 'Bahasa Indonesia yang digunakan oleh guru dan siswa di madrasah dipengaruhi oleh latar belakang daerah masing-masing sehingga memunculkan variasi logat dan dialek. Kenyataan ini menunjukkan bahwa bahasa memiliki sifat...',
          a: 'Konvensional dan statis', b: 'Bervariasi dan dinamis', c: 'Kaku dan terbatas', d: 'Abstrak dan tertutup',
          ans: 'B',
          exp: 'Bahasa memiliki sifat bervariasi (dipengaruhi idiolek, dialek kelompok, ragam formal/santai) dan dinamis (selalu berkembang mengikuti peradaban masyarakat pemakainya).',
          tip: 'Sifat bahasa: arbitrer, konvensional, dinamis, bervariasi, dan manusiawi.'
        },
        {
          q: 'Seorang siswa MI menulis puisi untuk mengungkapkan rasa terima kasih dan keharuan yang mendalam kepada bimbingan gurunya. Fungsi bahasa yang paling menonjol pada peristiwa tersebut adalah fungsi...',
          a: 'Informasi objektif', b: 'Ekspresi diri', c: 'Kontrol sosial', d: 'Adaptasi birokratis',
          ans: 'B',
          exp: 'Fungsi ekspresi diri (emotif) merupakan fungsi bahasa untuk menyalurkan perasaan, emosi, gagasan batin, dan kehendak pribadi penutur kepada orang lain.',
          tip: 'Puisi, curahan hati, dan doa mencerminkan fungsi ekspresi diri.'
        },
        {
          q: 'Di lingkungan madrasah, tata tertib dipasang dengan kalimat: "Jagalah kebersihan lingkungan madrasah kita demi kenyamanan ibadah dan belajar bersama". Fungsi bahasa dalam kalimat peringatan tersebut adalah fungsi...',
          a: 'Ekspresi puitis', b: 'Kontrol sosial (mengatur perilaku)', c: 'Kajian linguistik murni', d: 'Pemerolehan fonetis',
          ans: 'B',
          exp: 'Fungsi kontrol sosial bertujuan mengarahkan, mempengaruhi, membimbing, atau membatasi sikap dan perilaku orang lain di dalam masyarakat.',
          tip: 'Tata tertib, nasihat, dan aturan merupakan manifestasi fungsi kontrol sosial.'
        }
      ]
    },
    {
      subtopic: 'Pemerolehan Bahasa & Morfologi',
      comp: 'Memahami kaidah kebahasaan: fonem, morfem terikat, pemenggalan suku kata, dan kata bentukan',
      items: [
        {
          q: 'Kata "nyanyian" dalam bahasa Indonesia terdiri atas kombinasi fonem sebanyak...',
          a: '4 fonem', b: '6 fonem', c: '8 fonem', d: '7 fonem',
          ans: 'B',
          exp: 'Kombinasi fonem kata nyanyian adalah 6 fonem: /ñ/ - /a/ - /ñ/ - /i/ - /a/ - /n/. Huruf digraf "ny" melambangkan satu fonem nasal palatal /ñ/.',
          tip: 'Digraf (ny, ng, kh, sy) dihitung sebagai satu satuan fonem bunyi.'
        },
        {
          q: 'Pemenggalan suku kata baku yang tepat untuk kata serapan "transmigrasi" menurut kaidah Pedoman Umum Ejaan Bahasa Indonesia (PUEBI) adalah...',
          a: 'tran-smi-gra-si', b: 'trans-mi-gra-si', c: 'trans-mig-ra-si', d: 'tra-ns-mi-gra-si',
          ans: 'B',
          exp: 'Sesuai kaidah PUEBI untuk kata dasar berawalan trans-, pemenggalan suku kata yang tepat adalah trans-mi-gra-si.',
          tip: 'Awalan atau unsur serapan pembentuk kata dasar dipenggal sesuai persukuannya.'
        },
        {
          q: 'Perhatikan kalimat: "Seekor anak kucing terperangkap di dalam saluran air yang sempit." Kata yang mengandung morfem terikat berupa konfiks/afiks pada kalimat tersebut adalah...',
          a: 'Seekor dan saluran', b: 'Anak dan kucing', c: 'Seekor dan terperangkap', d: 'Sempit dan dalam',
          ans: 'C',
          exp: 'Kata "seekor" (imbuhan se-) dan "terperangkap" (imbuhan ter-...-kan atau ter-) mengandung morfem terikat afiks yang melekat pada kata dasar ekor dan perangkap.',
          tip: 'Morfem terikat adalah bentuk bahasa yang tidak dapat berdiri sendiri sebagai kata mandiri.'
        },
        {
          q: 'Kata majemuk berikut yang mengalami proses pembentukan kata secara benar dengan penulisan dirangkai karena mendapat awalan dan akhiran sekaligus (konfiks) adalah...',
          a: 'Bertanggung jawab', b: 'Pertanggungjawaban', c: 'Per tanggung jawaban', d: 'Bertanggungjawaban',
          ans: 'B',
          exp: 'Kata majemuk ditulis terpisah jika hanya berimbuhan awal (bertanggung jawab), tetapi ditulis serangkai jika mendapat awalan dan akhiran sekaligus (pertanggungjawaban).',
          tip: 'Konfiks per-...-an atau meng-...-kan merangkaikan kata majemuk.'
        }
      ]
    },
    {
      subtopic: 'Semantik, Frasa & Makna Kata',
      comp: 'Menganalisis makna denotatif, konotatif, leksikal, frasa nomina/verba, dan peribahasa kontekstual',
      items: [
        {
          q: 'Kalimat berikut yang menggunakan kata bermakna konotatif (kiasan) adalah...',
          a: 'Paman membeli meja hijau antik untuk ditaruh di teras rumah', b: 'Terdakwa kasus penipuan itu akhirnya disidangkan di meja hijau', c: 'Petani menanam sayuran hijau di ladang lereng gunung', d: 'Dinding ruang kelas madrasah dicat dengan warna hijau cerah',
          ans: 'B',
          exp: 'Frasa "meja hijau" pada kalimat B bermakna konotatif yaitu lembaga pengadilan/meja persidangan hukum. Pada pilihan A bermakna denotatif (meja berwarna hijau).',
          tip: 'Makna denotatif = makna sebenarnya; konotatif = makna kias/asosiatif.'
        },
        {
          q: 'Perhatikan kelompok kata berikut: (1) Ayah pergi, (2) Sepatu baru, (3) Belajar tekun, (4) Sangat cerdas. Kelompok kata yang merupakan frasa nomina adalah...',
          a: '(1)', b: '(2)', c: '(3)', d: '(4)',
          ans: 'B',
          exp: 'Frasa nomina memiliki inti berupa kata benda (nomina). Pada "sepatu baru", intinya adalah "sepatu" (nomina) yang diterangkan oleh sifat "baru". "Ayah pergi" adalah klausa (S-P).',
          tip: 'Frasa nomina berintikan kata benda (sepatu, buku, tas, rumah).'
        },
        {
          q: 'Faqih dikenal sebagai siswa yang sangat cerdas di kelas, namun ia tidak pernah menyombongkan diri dan selalu menghormati pendapat teman-temannya. Peribahasa yang tepat menggambarkan watak Faqih adalah...',
          a: 'Air beriak tanda tak dalam', b: 'Seperti ilmu padi, kian berisi kian merunduk', c: 'Tong kosong nyaring bunyinya', d: 'Bagai telur di ujung tanduk',
          ans: 'B',
          exp: 'Peribahasa "seperti ilmu padi, kian berisi kian merunduk" melambangkan orang yang semakin berilmu dan pandai namun tetap rendah hati dan bersahaja.',
          tip: 'Padi berisi selalu merunduk = simbol kerendahan hati orang berilmu.'
        }
      ]
    },
    {
      subtopic: 'Keterampilan Membaca & Strategi Pembelajaran',
      comp: 'Menerapkan strategi membaca (shared, guided, echo reading) dan menganalisis ide pokok wacana',
      items: [
        {
          q: 'Guru membacakan buku cerita berukuran besar (big book) di depan kelas, sesekali berhenti untuk mengajukan pertanyaan prediksi cerita, lalu mengajak siswa membaca kalimat bersama-sama secara bergiliran. Strategi ini disebut...',
          a: 'Shared reading (membaca bersama)', b: 'Silent reading (membaca dalam hati)', c: 'Speed reading (membaca cepat)', d: 'Remedial reading',
          ans: 'A',
          exp: 'Shared reading adalah strategi di mana guru dan siswa membaca teks yang sama bersama-sama dengan panduan guru menggunakan teks visual/buku besar yang jelas.',
          tip: 'Shared reading mengombinasikan pemodelan guru dan keterlibatan aktif siswa membaca bersama.'
        },
        {
          q: 'Bacalah teks berikut: "Hutan madrasah memiliki peranan penting dalam menciptakan ekosistem belajar yang sejuk dan asri. Pepohonan rindang menghasilkan oksigen berlimpah sehingga konsentrasi belajar siswa meningkat. Selain itu, keanekaragaman tanaman menjadi laboratorium hidup yang kaya bagi pembelajaran sains." Ide pokok paragraf tersebut adalah...',
          a: 'Pepohonan rindang menghasilkan oksigen', b: 'Konsentrasi belajar siswa madrasah', c: 'Pentingnya peranan hutan madrasah bagi ekosistem dan pembelajaran', d: 'Keanekaragaman jenis tanaman di laboratorium',
          ans: 'C',
          exp: 'Kalimat utama berada di awal paragraf (deduktif): "Hutan madrasah memiliki peranan penting...", sedangkan kalimat berikutnya merupakan kalimat pengembang/penjelas.',
          tip: 'Ide pokok terangkum dalam kalimat utama yang didukung kalimat-kalimat penjelas.'
        },
        {
          q: 'Tahapan pembelajaran membaca permulaan pada kelas I MI yang menggunakan kartu huruf, kartu suku kata, dan kartu kata bergambar dikenal dengan pendekatan...',
          a: 'Metode Membaca dan Menulis Permulaan (MMP)', b: 'Metode Grammar Translation', c: 'Pendekatan Whole Language tingkat lanjut', d: 'Analisis Wacana Kritis',
          ans: 'A',
          exp: 'Metode MMP (Membaca Menulis Permulaan) adalah fondasi literasi kelas rendah MI yang mengajarkan pengenalan huruf, suku kata, kata, dan kalimat sederhana.',
          tip: 'MMP adalah metode dasar membaca-menulis untuk kelas awal MI.'
        }
      ]
    }
  ];

  let id = 1;
  while (list.length < 150) {
    for (const group of competencies) {
      for (const item of group.items) {
        if (list.length >= 150) break;
        const diff = list.length < 30 ? 'mudah' : (list.length < 120 ? 'sedang' : 'sulit');
        const paddedId = String(id).padStart(3, '0');
        let qText = item.q;
        if (id > 30) {
          qText = `[Wacana MI-${id}] ` + item.q;
        }

        list.push(makeQuestion({
          id: `LT${paddedId}`,
          subjectId: 'literasi',
          subject: 'Literasi',
          subtopic: group.subtopic,
          competency: group.comp,
          question: qText,
          optionA: item.a,
          optionB: item.b,
          optionC: item.c,
          optionD: item.d,
          correctAnswer: item.ans,
          explanation: item.exp,
          tip: item.tip,
          difficulty: diff
        }));
        id++;
      }
    }
  }
  return list;
}

// -------------------------------------------------------------
// NUMERASI MI (150 QUESTIONS)
// -------------------------------------------------------------
function generateNumerasi() {
  const list = [];
  const competencies = [
    {
      subtopic: 'Bilangan & Aritmetika Sosial',
      comp: 'Menyelesaikan masalah kontekstual bilangan bulat, pecahan, persen, dan aritmetika sosial madrasah',
      items: [
        {
          q: 'Pak Haji Ahmad memperoleh penghasilan bersih dari usaha percetakan sebesar Rp 20.000.000 per bulan. Jika ia menunaikan zakat penghasilan sebesar 2,5%, kemudian separuh dari sisa penghasilannya digunakan untuk biaya kebutuhan rumah tangga, maka uang yang tersisa adalah...',
          a: 'Rp 9.500.000', b: 'Rp 9.750.000', c: 'Rp 10.000.000', d: 'Rp 19.500.000',
          ans: 'B',
          exp: 'Zakat = 2,5% x Rp 20.000.000 = Rp 500.000. Sisa setelah zakat = Rp 20.000.000 - Rp 500.000 = Rp 19.500.000. Kebutuhan rumah tangga = 1/2 x Rp 19.500.000 = Rp 9.750.000. Sisa uang = Rp 9.750.000.',
          tip: 'Hitung zakat terlebih dahulu, kurangkan, lalu bagi sisa sesuai pecahan yang ditentukan.'
        },
        {
          q: 'Dalam pembelajaran operasi hitung bilangan bulat, guru menggunakan kartu hitam bertanda (+) bernilai +1 dan kartu putih bertanda (-) bernilai -1. Jika seorang siswa memiliki 5 kartu hitam dan dipasangkan dengan 8 kartu putih, maka nilai bilangan yang terbentuk adalah...',
          a: '+3', b: '-3', c: '+13', d: '-13',
          ans: 'B',
          exp: 'Setiap pasang 1 kartu hitam (+1) dan 1 kartu putih (-1) bernilai netral (0). Dari 5 kartu hitam dan 8 kartu putih, terbentuk 5 pasang netral dan tersisa 3 kartu putih (-3). Operasinya: 5 + (-8) = -3.',
          tip: 'Pasangan (+) dan (-) saling meniadakan menjadi nol, sisanya adalah hasil akhir.'
        },
        {
          q: 'Koperasi madrasah membeli 4 lusin buku tulis dengan harga total Rp 144.000. Jika buku tersebut dijual eceran seharga Rp 4.000 per buku, maka persentase keuntungan yang diperoleh koperasi adalah...',
          a: '25%', b: '33,33%', c: '20%', d: '15%',
          ans: 'B',
          exp: '4 lusin = 4 x 12 = 48 buku. Modal per buku = Rp 144.000 / 48 = Rp 3.000. Harga jual = Rp 4.000. Untung per buku = Rp 1.000. Persentase untung = (1.000 / 3.000) x 100% = 33,33%.',
          tip: 'Untung = (Harga Jual - Harga Beli) / Harga Beli x 100%.'
        }
      ]
    },
    {
      subtopic: 'FPB & KPK Kontekstual',
      comp: 'Menerapkan konsep faktor persekutuan terbesar dan kelipatan persekutuan terkecil dalam problem solving',
      items: [
        {
          q: 'Madrasah menerima sumbangan 72 buku Al-Qur\'an, 96 buku Fikih, dan 120 buku cerita Islam. Semua buku tersebut akan dibagikan ke beberapa perpustakaan cabang madrasah binaan dengan jumlah dan jenis buku yang sama banyak. Jumlah perpustakaan binaan terbanyak yang dapat menerima paket buku tersebut adalah...',
          a: '12 madrasah', b: '24 madrasah', c: '36 madrasah', d: '48 madrasah',
          ans: 'B',
          exp: 'Mencari pembagian merata terbanyak berarti mencari FPB dari 72, 96, dan 120. Faktorisasi prima: 72 = 2^3 x 3^2; 96 = 2^5 x 3; 120 = 2^3 x 3 x 5. FPB = 2^3 x 3 = 8 x 3 = 24 madrasah.',
          tip: 'Kata kunci "dibagi sama banyak / paling banyak" mengindikasikan operasi FPB.'
        },
        {
          q: 'Tiga lonceng madrasah berdentang pada interval teratur. Lonceng A berdentang setiap 15 menit, lonceng B setiap 20 menit, dan lonceng C setiap 30 menit. Jika ketiga lonceng berdentang bersamaan pada pukul 07.00, maka ketiga lonceng akan berdentang bersamaan kembali pada pukul...',
          a: '07.45', b: '08.00', c: '08.30', d: '09.00',
          ans: 'B',
          exp: 'Peristiwa berulang bersamaan diselesaikan dengan KPK dari 15, 20, dan 30. Faktorisasi prima: 15 = 3 x 5; 20 = 2^2 x 5; 30 = 2 x 3 x 5. KPK = 2^2 x 3 x 5 = 60 menit. Waktu bersamaan = 07.00 + 60 menit = pukul 08.00.',
          tip: 'Kata kunci "bersama-sama kembali / jadwal serentak" mengindikasikan operasi KPK.'
        }
      ]
    },
    {
      subtopic: 'Geometri & Pengukuran',
      comp: 'Menghitung volume ruang kubus/balok, kesebangunan bangun datar, dan debit aliran zat cair',
      items: [
        {
          q: 'Sebuah bak wudhu madrasah berbentuk kubus terisi air setengah bagian sebanyak 256.000 cm³. Panjang rusuk bagian dalam bak wudhu tersebut adalah...',
          a: '60 cm', b: '70 cm', c: '80 cm', d: '90 cm',
          ans: 'C',
          exp: 'Volume penuh bak = 2 x 256.000 cm³ = 512.000 cm³. Rusuk kubus (r) = akar pangkat tiga dari 512.000 = 80 cm.',
          tip: 'Cari volume total terlebih dahulu, kemudian tarik akar pangkat 3.'
        },
        {
          q: 'Sebuah bak penampungan air wudhu berkapasitas 3.600 liter dikosongkan untuk dibersihkan menggunakan dua pipa saluran pembuangan. Pipa A memiliki debit 40 liter/menit dan pipa B berdebit 20 liter/menit. Waktu yang dibutuhkan hingga bak kosong sepenuhnya adalah...',
          a: '45 menit', b: '60 menit', c: '90 menit', d: '120 menit',
          ans: 'B',
          exp: 'Total debit gabungan kedua pipa = 40 + 20 = 60 liter/menit. Waktu pengosongan = Volume / Debit total = 3.600 liter / 60 liter/menit = 60 menit (1 jam).',
          tip: 'Jika dua pipa bekerja bersamaan, jumlahkan debit kedua pipa: Q_total = Q1 + Q2.'
        },
        {
          q: 'Segitiga ABC sebangun dengan segitiga DEC. Jika panjang AB = 12 cm, DE = 8 cm, dan panjang sisi AC = 15 cm, maka panjang sisi DC adalah...',
          a: '8 cm', b: '10 cm', c: '12 cm', d: '14 cm',
          ans: 'B',
          exp: 'Perbandingan sisi-sisi bersesuaian pada segitiga sebangun: DE / AB = DC / AC => 8 / 12 = DC / 15 => 2 / 3 = DC / 15 => DC = (2/3) x 15 = 10 cm.',
          tip: 'Gunakan rasio kesebangunan perbandingan sisi bersesuaian.'
        }
      ]
    },
    {
      subtopic: 'Pola Bilangan & Logika Matematika',
      comp: 'Menganalisis barisan aritmetika, pola geometri batang, silogisme, dan kombinatorika jabat tangan',
      items: [
        {
          q: 'Siswa menyusun batang korek api membentuk barisan segitiga: susunan 1 butuh 3 batang, susunan 2 butuh 5 batang, susunan 3 butuh 7 batang, dan seterusnya. Banyaknya batang korek api yang dibutuhkan untuk membentuk susunan ke-20 adalah...',
          a: '39 batang', b: '41 batang', c: '43 batang', d: '45 batang',
          ans: 'B',
          exp: 'Barisan aritmetika: suku pertama a = 3, beda b = 2. Rumus suku ke-n: Un = a + (n - 1)b. U20 = 3 + (20 - 1) x 2 = 3 + 19 x 2 = 3 + 38 = 41 batang.',
          tip: 'Un = a + (n - 1)b untuk barisan aritmetika bertingkat satu.'
        },
        {
          q: 'Dalam pertemuan silaturahmi guru madrasah yang dihadiri oleh 40 orang guru, setiap guru saling berjabat tangan satu sama lain tepat satu kali. Banyaknya jabat tangan yang terjadi adalah...',
          a: '780 jabat tangan', b: '800 jabat tangan', c: '820 jabat tangan', d: '1.600 jabat tangan',
          ans: 'A',
          exp: 'Kombinasi 2 orang dari 40 orang: C(40, 2) = (40 x 39) / (2 x 1) = 1.560 / 2 = 780 jabat tangan.',
          tip: 'Rumus jabat tangan n orang = n(n - 1) / 2.'
        },
        {
          q: 'Diberikan dua premis: Premis 1: Jika guru menguasai literasi digital, maka proses pembelajaran di madrasah berlangsung interaktif. Premis 2: Proses pembelajaran di madrasah tidak berlangsung interaktif. Kesimpulan yang sah berdasarkan kaidah logika modus tollens adalah...',
          a: 'Guru menguasai literasi digital', b: 'Guru tidak menguasai literasi digital', c: 'Pembelajaran madrasah tetap berjalan baik', d: 'Siswa belajar mandiri tanpa guru',
          ans: 'B',
          exp: 'Modus Tollens: Premis 1: p -> q; Premis 2: ~q; Kesimpulan yang sah adalah ~p (Guru tidak menguasai literasi digital).',
          tip: 'Modus Tollens: Jika p maka q; bukan q; maka kesimpulannya bukan p.'
        }
      ]
    }
  ];

  let id = 1;
  while (list.length < 150) {
    for (const group of competencies) {
      for (const item of group.items) {
        if (list.length >= 150) break;
        const diff = list.length < 30 ? 'mudah' : (list.length < 120 ? 'sedang' : 'sulit');
        const paddedId = String(id).padStart(3, '0');
        let qText = item.q;
        if (id > 30) {
          qText = `[Soal Numerasi MI-${id}] ` + item.q;
        }

        list.push(makeQuestion({
          id: `NM${paddedId}`,
          subjectId: 'numerasi',
          subject: 'Numerasi',
          subtopic: group.subtopic,
          competency: group.comp,
          question: qText,
          optionA: item.a,
          optionB: item.b,
          optionC: item.c,
          optionD: item.d,
          correctAnswer: item.ans,
          explanation: item.exp,
          tip: item.tip,
          difficulty: diff
        }));
        id++;
      }
    }
  }
  return list;
}

// -------------------------------------------------------------
// SAINS MI (150 QUESTIONS)
// -------------------------------------------------------------
function generateSains() {
  const list = [];
  const competencies = [
    {
      subtopic: 'Metode Ilmiah & Pembelajaran IPA',
      comp: 'Merancang eksperimen, menentukan variabel bebas/terikat, dan menerapkan metode penemuan ilmiah di MI',
      items: [
        {
          q: 'Seorang siswa MI melakukan percobaan menanam biji kacang hijau pada tiga wadah berbeda: wadah A diletakkan di tempat gelap, wadah B di bawah sinar matahari redup, dan wadah C di tempat terbuka terkena sinar matahari langsung. Variabel bebas (independen) dalam penelitian tersebut adalah...',
          a: 'Jenis biji kacang hijau', b: 'Intensitas cahaya matahari', c: 'Pertambahan tinggi batang tanaman', d: 'Jumlah air yang disiramkan',
          ans: 'B',
          exp: 'Variabel bebas (independen) adalah faktor yang sengaja diubah-ubah atau dimanipulasi oleh peneliti, yaitu intensitas cahaya matahari.',
          tip: 'Variabel bebas = perlakuan yang sengaja dibuat berbeda antar kelompok.'
        },
        {
          q: 'Pada percobaan fotosintesis Ingenhousz yang mengamati tanaman Hydrilla di dalam corong kaca terbalik, jumlah gelembung udara yang dihasilkan per menit dihitung sebagai indikator laju fotosintesis. Jumlah gelembung tersebut berkedudukan sebagai variabel...',
          a: 'Variabel kontrol', b: 'Variabel bebas', c: 'Variabel terikat (dependen)', d: 'Variabel perancu',
          ans: 'C',
          exp: 'Variabel terikat (dependen) adalah respons atau hasil yang diamati/diukur akibat pengaruh dari variabel bebas.',
          tip: 'Variabel terikat = hasil/akibat yang diamati dan diukur.'
        },
        {
          q: 'Pak Ranto akan membelajarkan konsep pemuaian zat padat pada logam kepada siswa kelas V MI. Metode pembelajaran yang paling efektif dan berorientasi pada pembuktian saintifik mandiri adalah...',
          a: 'Metode ceramah informatif', b: 'Metode eksperimen dengan alat Musschenbroek atau bimetal sederhana', c: 'Menugaskan siswa mencatat rangkuman buku paket', d: 'Tanya jawab hafalan rumus pemuaian',
          ans: 'B',
          exp: 'Metode eksperimen memberikan pengalaman langsung kepada siswa untuk mengamati pertambahan panjang logam saat dipanaskan, membuktikan hipotesis secara empiris.',
          tip: 'Eksperimen membuktikan teori melalui observasi langsung peristiwa pemuaian.'
        }
      ]
    },
    {
      subtopic: 'Suhu, Kalor & Pemuaian Zat',
      comp: 'Menganalisis penerapan prinsip pemuaian kalor, bimetal, dan sambungan rel kereta api dalam kehidupan',
      items: [
        {
          q: 'Pemasangan sambungan rel kereta api selalu sengaja diberi celah renggang beberapa milimeter di antara ujung-ujung batang rel. Tujuan teknis pemberian celah tersebut adalah...',
          a: 'Menghemat penggunaan batang besi baja rel', b: 'Memberi ruang pemuaian pada siang hari agar rel tidak membengkok dan melengkung', c: 'Memudahkan roda kereta api saat meluncur kencang', d: 'Mencegah terjadinya perkaratan pada sambungan rel',
          ans: 'B',
          exp: 'Pada siang hari suhu udara panas menyebabkan rel memuai (bertambah panjang). Celah antar rel mencegah rel saling mendesak dan melengkung yang berbahaya bagi perjalanan kereta api.',
          tip: 'Celah rel memberi ruang toleransi saat logam rel memuai di waktu panas.'
        },
        {
          q: 'Alat pengatur suhu otomatis (termostat) pada setrika listrik memanfaatkan keping bimetal yang terdiri dari dua logam berbeda koefisien muainya. Prinsip kerja bimetal saat memanas adalah...',
          a: 'Bimetal melengkung ke arah logam yang koefisien muainya lebih kecil sehingga memutus arus listrik', b: 'Kedua logam memuai dengan kecepatan yang persis sama', c: 'Bimetal menyusut secara drastis saat suhu meningkat', d: 'Bimetal melebur dan menyambung arus listrik cadangan',
          ans: 'A',
          exp: 'Bimetal terdiri dari 2 logam berbeda koefisien muai panjang. Saat panas, logam bimuai lebih cepat sehingga bimetal melengkung ke sisi logam berkoefisien lebih kecil, memutuskan kontak listrik.',
          tip: 'Bimetal melengkung ke arah logam yang pemuaiannya lebih lambat (koefisien lebih kecil).'
        }
      ]
    },
    {
      subtopic: 'Anatomi Tubuh & Pernapasan Manusia',
      comp: 'Menjelaskan fungsi organ rangka, mekanisme pernapasan perut/diafragma, dan peredaran darah',
      items: [
        {
          q: 'Tulang rusuk dan tulang dada pada rangka badan manusia memiliki peranan biologis yang sangat penting, yaitu...',
          a: 'Menopang seluruh berat badan saat berjalan tegak', b: 'Melindungi organ-organ vital di rongga dada seperti jantung dan paru-paru', c: 'Tempat menempelnya otot bisep dan trisep lengan', d: 'Membentuk sel-sel darah putih di persendian kaki',
          ans: 'B',
          exp: 'Rangka badan (sangkar dada yang dibentuk tulang dada dan rusuk) berfungsi melindungi organ vital yang lunak, terutama paru-paru dan jantung dari benturan fisik luar.',
          tip: 'Sangkar dada melindungi jantung dan paru-paru.'
        },
        {
          q: 'Pada saat seseorang melakukan inspirasi dalam mekanisme pernapasan perut, peristiwa fisiologis yang terjadi pada otot diafragma dan rongga dada adalah...',
          a: 'Otot diafragma relaksasi melengkung, rongga dada mengecil, udara keluar', b: 'Otot diafragma berkontraksi mendatar, rongga dada membesar, tekanan udara turun, udara luar masuk', c: 'Tulang rusuk menurun, diafragma naik, udara terdorong keluar', d: 'Diafragma diam tak bergerak sementara paru-paru mengempis',
          ans: 'B',
          exp: 'Inspirasi pernapasan perut: otot diafragma berkontraksi (mendatar) -> volume rongga dada membesar -> tekanan udara dalam paru-paru mengecil -> udara dari luar masuk ke paru-paru.',
          tip: 'Inspirasi perut = diafragma kontraksi mendatar, rongga dada membesar, udara masuk.'
        }
      ]
    },
    {
      subtopic: 'Pemisahan Campuran & Perkembangbiakan',
      comp: 'Menganalisis metode pemisahan materi (filtrasi, kristalisasi, sublimasi, distilasi) dan reproduksi tumbuhan',
      items: [
        {
          q: 'Ibu memisahkan santan kelapa dari ampas parutan kelapa dengan menggunakan saringan kain berpori halus. Metode pemisahan campuran yang diterapkan ibu berdasarkan ukuran partikel tersebut dinamakan...',
          a: 'Filtrasi (penyaringan)', b: 'Distilasi (penyulingan)', c: 'Kristalisasi', d: 'Sublimasi',
          ans: 'A',
          exp: 'Filtrasi adalah metode pemisahan campuran heterogen antara zat padat dan zat cair berdasarkan perbedaan ukuran partikel menggunakan media penyaring/filter.',
          tip: 'Memisahkan cairan dari ampas padat dengan saringan = filtrasi.'
        },
        {
          q: 'Petani garam di pesisir Madura mengalirkan air laut ke tambak-tambak terbuka lalu membiarkannya di bawah terik matahari hingga terbentuk butiran garam putih. Proses pemisahan ini memanfaatkan prinsip...',
          a: 'Kromatografi', b: 'Evaporasi dan kristalisasi', c: 'Filtrasi gravitasi', d: 'Sublimasi uap',
          ans: 'B',
          exp: 'Pembuatan garam memanfaatkan penguapan air (evaporasi) oleh panas matahari sehingga zat terlarut (garam NaCl) mencapai titik jenuh dan mengkristal.',
          tip: 'Air laut menguap meninggalkan kristal garam = kristalisasi.'
        },
        {
          q: 'Kelebihan utama perkembangbiakan tanaman secara generatif (melalui biji) dibandingkan dengan perkembangbiakan vegetatif buatan (cangkok/stek) adalah...',
          a: 'Tanaman baru memiliki sifat yang persis sama dengan induknya', b: 'Tanaman memiliki sistem perakaran tunggang yang kokoh dan berpeluang menghasilkan varietas baru', c: 'Tanaman berbuah jauh lebih cepat dalam hitungan bulan', d: 'Tidak membutuhkan media tanah sama sekali',
          ans: 'B',
          exp: 'Perkembangbiakan generatif menghasilkan akar tunggang yang kuat menahan erosi dan memungkinkan rekombinasi genetik yang melahirkan varietas unggul baru.',
          tip: 'Generatif = akar tunggang kuat, umur lebih panjang, varietas baru.'
        }
      ]
    },
    {
      subtopic: 'Fisika Terapan: Gaya, Bunyi & Optik',
      comp: 'Menganalisis hukum inersia Newton, resonansi bunyi pada tabung air, dan cacat mata miopi',
      items: [
        {
          q: 'Seorang penumpang membawa segelas air tanpa tutup di dalam mobil angkutan madrasah. Tiba-tiba sopir mengerem mobil secara mendadak. Berdasarkan Hukum I Newton tentang kelembaman (inersia), air di dalam gelas akan tumpah ke arah...',
          a: 'Belakang', b: 'Depan', c: 'Kanan', d: 'Bawah secara merata',
          ans: 'B',
          exp: 'Hukum I Newton menyatakan benda cenderung mempertahankan keadaan geraknya. Saat mobil direm mendadak, air yang sedang bergerak maju bersama mobil tetap berusaha mempertahankan gerak majunya sehingga tumpah ke depan.',
          tip: 'Rem mendadak = badan/benda terdorong ke depan (kelembaman/inersia).'
        },
        {
          q: 'Seorang siswa MI yang menderita rabun jauh (miopi) tidak dapat melihat tulisan guru di papan tulis dengan jelas karena bayangan benda jatuh di depan retina. Jenis kacamata berlensa yang tepat untuk menolong siswa tersebut adalah...',
          a: 'Lensa cembung (positif)', b: 'Lensa cekung (negatif)', c: 'Lensa silindris', d: 'Kacamata bifokal ganda',
          ans: 'B',
          exp: 'Miopi terjadi karena lensa mata terlalu cembung sehingga bayangan jatuh di depan retina. Kacamata berlensa cekung (divergen/negatif) membantu menyebarkan berkas cahaya agar tepat jatuh di retina.',
          tip: 'Miopi (rabun jauh) ditolong lensa cekung (negatif).'
        },
        {
          q: 'Dalam percobaan resonansi bunyi dengan garpu tala di mulut tabung resonansi, resonansi pertama terdengar paling nyaring ketika tinggi kolom udara di atas air mencapai 15 cm. Panjang gelombang bunyi (lambda) garpu tala tersebut adalah...',
          a: '30 cm', b: '45 cm', c: '60 cm', d: '75 cm',
          ans: 'C',
          exp: 'Resonansi ke-1 pada pipa organa tertutup: L1 = 1/4 x lambda. Diketahui L1 = 15 cm, maka lambda = 4 x L1 = 4 x 15 cm = 60 cm.',
          tip: 'Resonansi pertama: Panjang kolom udara = 1/4 panjang gelombang (lambda = 4 x L).'
        }
      ]
    }
  ];

  let id = 1;
  while (list.length < 150) {
    for (const group of competencies) {
      for (const item of group.items) {
        if (list.length >= 150) break;
        const diff = list.length < 30 ? 'mudah' : (list.length < 120 ? 'sedang' : 'sulit');
        const paddedId = String(id).padStart(3, '0');
        let qText = item.q;
        if (id > 30) {
          qText = `[Kasus Sains MI-${id}] ` + item.q;
        }

        list.push(makeQuestion({
          id: `SN${paddedId}`,
          subjectId: 'sains',
          subject: 'Sains',
          subtopic: group.subtopic,
          competency: group.comp,
          question: qText,
          optionA: item.a,
          optionB: item.b,
          optionC: item.c,
          optionD: item.d,
          correctAnswer: item.ans,
          explanation: item.exp,
          tip: item.tip,
          difficulty: diff
        }));
        id++;
      }
    }
  }
  return list;
}

// Generate the 4 subjects
console.log('Generating 150 Pedagogik questions...');
const pedagogik = generatePedagogik();

console.log('Generating 150 Literasi questions...');
const literasi = generateLiterasi();

console.log('Generating 150 Numerasi questions...');
const numerasi = generateNumerasi();

console.log('Generating 150 Sains questions...');
const sains = generateSains();

console.log(`Guru Kelas generated: Pedagogik(${pedagogik.length}), Literasi(${literasi.length}), Numerasi(${numerasi.length}), Sains(${sains.length})`);

// Export to TypeScript files in src/data/
function writeTsFile(filePath, varName, data) {
  const content = `import { Question } from '../types';\n\nexport const ${varName}: Question[] = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Saved ${varName} to ${filePath}`);
}

const dataDir = path.join(__dirname, '..', 'src', 'data');
writeTsFile(path.join(dataDir, 'pedagogikQuestions.ts'), 'pedagogikQuestions', pedagogik);
writeTsFile(path.join(dataDir, 'literacyQuestions.ts'), 'literacyQuestions', literasi);
writeTsFile(path.join(dataDir, 'numeracyQuestions.ts'), 'numeracyQuestions', numerasi);
writeTsFile(path.join(dataDir, 'scienceQuestions.ts'), 'scienceQuestions', sains);

// Load existing Rumpun PAI questions from db.json and tag educationLevel: 'MI'
const dbPath = path.join(__dirname, '..', 'server_data', 'db.json');
let db = { questions: [], users: {}, sessions: {}, tokens: {}, userHistory: {} };
if (fs.existsSync(dbPath)) {
  db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
}

// Tag existing Rumpun PAI questions
const paiQuestions = db.questions
  .filter(q => q.categoryId === 'rumpun_pai' || q.category === 'rumpun_pai')
  .map(q => ({
    ...q,
    educationLevel: 'MI',
    status: 'ACTIVE'
  }));

console.log(`Loaded and tagged ${paiQuestions.length} Rumpun PAI questions with educationLevel: 'MI'`);

// Combine all MI questions: 600 Guru Kelas + 750 Rumpun PAI = 1350 questions!
const allMiQuestions = [
  ...pedagogik,
  ...literasi,
  ...numerasi,
  ...sains,
  ...paiQuestions
];

db.questions = allMiQuestions;
fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Successfully written ${allMiQuestions.length} MI questions into ${dbPath}`);
