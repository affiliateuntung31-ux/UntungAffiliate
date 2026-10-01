// Clean, Authentic Generator for MTs Mata Pelajaran Umum (Bahasa Indonesia, Bahasa Inggris, IPS)
// 60 Genuinely Distinct Questions Per Subject (0 Stem Duplicates, 0 Option Duplicates)
const { buildUniqueSubjectBank } = require('./generate_all_subjects_master.cjs');

// ==========================================
// 1. BAHASA INDONESIA MTS (60 UNIQUE QUESTIONS)
// ==========================================
function generateBahasaIndonesiaMTs() {
  const items = [
    // Teks Laporan Hasil Observasi (LHO)
    {
      subtopic: 'Teks Laporan Hasil Observasi',
      competency: 'Menganalisis struktur dan ciri kebahasaan teks LHO',
      question: 'Bagian struktur teks laporan hasil observasi yang memaparkan klasifikasi objek secara umum pada awal paragraf disebut...',
      correctText: 'Pernyataan umum / definisi umum',
      distractors: ['Deskripsi bagian terperinci', 'Deskripsi manfaat praktis', 'Simpulan penutup opsional'],
      explanation: 'Pernyataan umum berfungsi mengenalkan objek observasi dan klasifikasinya secara ringkas.'
    },
    {
      subtopic: 'Teks Laporan Hasil Observasi',
      competency: 'Menganalisis struktur dan ciri kebahasaan teks LHO',
      question: 'Dalam teks LHO madrasah mengenai pohon kelapa, kalimat yang mendeskripsikan secara mendalam ciri fisik akar, batang, dan pelepah daun termasuk dalam bagian...',
      correctText: 'Deskripsi bagian',
      distractors: ['Pernyataan klasifikasi', 'Rekomendasi penulis', 'Abstraksi cerita'],
      explanation: 'Deskripsi bagian merinci sifat fisik dan karakteristik spesifik objek yang diamati.'
    },
    {
      subtopic: 'Teks Laporan Hasil Observasi',
      competency: 'Menganalisis struktur dan ciri kebahasaan teks LHO',
      question: 'Kaidah kebahasaan teks LHO ditandai dengan penggunaan kata kerja yang menyatakan keadaan atau hubungan kopula, seperti pada kata...',
      correctText: 'Merupakan, adalah, dan termasuk',
      distractors: ['Alangkah, wahai, dan aduh', 'Kemarin, besok, dan lusa', 'Seandainya, andaikata, dan jikalau'],
      explanation: 'Verba relasional kopulatif (adalah, merupakan) sering digunakan untuk mendefinisikan objek pada teks LHO.'
    },
    // Teks Deskripsi
    {
      subtopic: 'Teks Deskripsi',
      competency: 'Mengidentifikasi informasi dan pencerapan indra pada teks deskripsi',
      question: 'Perhatikan kalimat: "Dinding masjid tua itu dipenuhi ukiran kaligrafi kayu jati berpelitur cokelat mengilap." Kalimat tersebut melibatkan pencerapan indra...',
      correctText: 'Penglihatan (visual)',
      distractors: ['Pendengaran (auditoris)', 'Penciuman (pembau)', 'Perabaan (taktil)'],
      explanation: 'Ukiran kaligrafi kayu berpelitur cokelat mengilap dinikmati melalui indra penglihatan (mata).'
    },
    {
      subtopic: 'Teks Deskripsi',
      competency: 'Mengidentifikasi informasi dan pencerapan indra pada teks deskripsi',
      question: 'Kalimat berikut yang melibatkan pencerapan indra pendengaran secara jelas adalah...',
      correctText: 'Gemercik suara air gemericik di pancuran wudhu terdengar menenangkan hati',
      distractors: ['Hawa sejuk pegunungan menyentuh lembut kulit wajah santri', 'Aroma wangi minyak kasturi semerbak memenuhi saf salat', 'Langit senja di ufuk barat berwarna jingga kemerahan'],
      explanation: 'Kata "suara gemericik terdengar" langsung merujuk pada pencerapan indra pendengaran.'
    },
    {
      subtopic: 'Teks Deskripsi',
      competency: 'Mengidentifikasi kaidah kebahasaan teks deskripsi',
      question: 'Penggunaan majas personifikasi yang tepat pada teks deskripsi keindahan lingkungan madrasah adalah...',
      correctText: 'Dedaunan pohon mahoni melambai-lambai riang menyapa para siswa di pagi hari',
      distractors: ['Gedung madrasah itu kokoh bak benteng pertahanan yang tak terkalahkan', 'Senyum guru itu seindah mekarnya bunga mawar di taman', 'Suaranya menggelegar membelah angkasa raya'],
      explanation: 'Personifikasi mengumpamakan benda mati (dedaunan) berperilaku seperti manusia (melambai menyapa).'
    },
    // Teks Prosedur
    {
      subtopic: 'Teks Prosedur',
      competency: 'Menyusun urutan langkah logis dalam teks prosedur',
      question: 'Ciri kebahasaan dominan yang membedakan teks prosedur dengan jenis teks lainnya adalah banyaknya penggunaan kalimat berjenis...',
      correctText: 'Imperatif (perintah atau instruksi lugas)',
      distractors: ['Interogatif (pertanyaan reflektif)', 'Deklaratif deskriptif', 'Narasi fiktif konotatif'],
      explanation: 'Teks prosedur memuat instruksi pengerjaan yang menggunakan kata kerja imperatif (tambahkan, tuang, aduk).'
    },
    {
      subtopic: 'Teks Prosedur',
      competency: 'Menyusun urutan langkah logis dalam teks prosedur',
      question: 'Kata penghubung (konjungsi) yang menyatakan urutan waktu bertahap dalam teks prosedur percobaan sains madrasah adalah...',
      correctText: 'Pertama, kemudian, selanjutnya, dan akhirnya',
      distractors: ['Meskipun, kendatipun, dan walaupun', 'Sebab, karena, dan oleh karena itu', 'Seandainya, andaikan, dan bila'],
      explanation: 'Konjungsi temporal menyatakan urutan langkah dari awal hingga akhir.'
    },
    {
      subtopic: 'Teks Prosedur',
      competency: 'Menganalisis verba material dan tingkah laku teks prosedur',
      question: 'Kalimat petunjuk: "Teteskanlah 3 tetes larutan iodin ke atas ekstrak daun!", verba material yang digunakan adalah...',
      correctText: 'Teteskanlah',
      distractors: ['Larutan', 'Ekstrak', 'Ke atas'],
      explanation: 'Teteskanlah merupakan kata kerja tindakan fisik (verba material).'
    },
    // Teks Narasi Cerita Fantasi & Fabel
    {
      subtopic: 'Teks Cerita Fantasi',
      competency: 'Menelaah alur dan latar lintas waktu cerita fantasi',
      question: 'Ciri khusus dunia imajinatif dalam cerita fantasi yang tidak mungkin dijumpai dalam teks laporan faktual adalah...',
      correctText: 'Adanya keajaiban tokoh sakti atau lorong penjelajah lintas waktu',
      distractors: ['Penggunaan kalimat bertata bahasa baku', 'Kehadiran nama tokoh dan latar tempat', 'Adanya amanat yang mendidik karakter pembaca'],
      explanation: 'Fantasi menghadirkan unsur supranatural, sihir, atau portal lintas ruang-waktu.'
    },
    {
      subtopic: 'Teks Fabel',
      competency: 'Menganalisis watak dan amanat cerita fabel',
      question: 'Tokoh kancil yang sering digambarkan cerdik tetapi kadang licik dalam fabel Indonesia mewakili tipe penokohan...',
      correctText: 'Protagonis yang memiliki kelebihan akal pikiran',
      distractors: ['Tritagonis pembawa kedamaian mutlak', 'Figuran pembantu tanpa dialog', 'Antagonis tanpa motivasi cerita'],
      explanation: 'Kancil adalah tokoh utama yang menggerakkan alur cerita fabel lewat kecerdikan akalnya.'
    },
    {
      subtopic: 'Teks Fabel',
      competency: 'Menganalisis struktur fabel',
      question: 'Bagian akhir fabel yang memuat perubahan sikap tokoh dan petuah moral yang disampaikan pengarang disebut...',
      correctText: 'Koda',
      distractors: ['Orientasi pembuka', 'Komplikasi konflik', 'Resolusi penyelesaian'],
      explanation: 'Koda adalah bagian penutup yang berisi pesan moral eksplisit dari pengarang.'
    },
    // Teks Eksplanasi
    {
      subtopic: 'Teks Eksplanasi',
      competency: 'Menelaah hubungan kausalitas dan kronologis dalam teks eksplanasi',
      question: 'Teks eksplanasi ilmiah tentang terjadinya proses pelangi di langit disusun terutama dengan pola pengembangan...',
      correctText: 'Kausalitas (sebab-akibat) dan proses ilmiah',
      distractors: ['Kronologis sejarah peperangan', 'Perbandingan opini politik', 'Deskripsi emosi subjektif pengarang'],
      explanation: 'Eksplanasi menjelaskan fenomena alam dengan pola kausalitas (sebab-akibat) proses fisik.'
    },
    {
      subtopic: 'Teks Eksplanasi',
      competency: 'Menganalisis konjungsi kausalitas teks eksplanasi',
      question: 'Konjungsi yang menunjukkan hubungan hubungan sebab akibat pada teks eksplanasi gempa tektonik adalah...',
      correctText: 'Oleh karena itu dan akibatnya',
      distractors: ['Kemudian dan lantas', 'Sedangkan dan melainkan', 'Meskipun dan walaupun'],
      explanation: 'Oleh karena itu dan akibatnya menunjukkan hubungan logis kausal.'
    },
    {
      subtopic: 'Teks Eksplanasi',
      competency: 'Menelaah struktur teks eksplanasi fenomena',
      question: 'Struktur teks eksplanasi yang memuat pernyataan umum mengenai pengenalan fenomena alam atau sosial terletak pada bagian...',
      correctText: 'Pernyataan umum (identifikasi fenomena)',
      distractors: ['Deretan penjelas kausal', 'Interpretasi ulasan simpulan', 'Orientasi tokoh pahlawan'],
      explanation: 'Struktur eksplanasi: Identifikasi fenomena (pernyataan umum) -> Proses kejadian -> Ulasan (interpretasi).'
    },
    // Teks Berita
    {
      subtopic: 'Teks Berita',
      competency: 'Menganalisis unsur 5W+1H (ADIKSIMBA) dalam teks berita',
      question: 'Dalam sebuah berita madrasah, kalimat "Kebakaran laboratorium terjadi akibat korsleting listrik pada pukul 02.00 dini hari" menjawab pertanyaan...',
      correctText: 'Mengapa (Why) dan Kapan (When)',
      distractors: ['Siapa (Who) dan Bagaimana (How)', 'Di mana (Where) dan Siapa (Who)', 'Apa (What) dan Di mana (Where)'],
      explanation: 'Korsleting listrik menjawab penyebab (Why) dan pukul 02.00 menjawab waktu kejadian (When).'
    },
    {
      subtopic: 'Teks Berita',
      competency: 'Menelaah struktur piramida terbalik teks berita',
      question: 'Bagian naskah berita yang paling penting dan memuat rangkuman inti peristiwa terletak pada...',
      correctText: 'Kepala berita (lead berita)',
      distractors: ['Tubuh berita (body)', 'Ekor berita (tambahan penjelas)', 'Kaki berita pelengkap'],
      explanation: 'Kepala berita (lead) memuat rangkuman informasi esensial sesuai struktur piramida terbalik.'
    },
    {
      subtopic: 'Teks Berita',
      competency: 'Mengidentifikasi kaidah kebahasaan teks berita',
      question: 'Kalimat langsung dari narasumber: Kepala Madrasah menyatakan, "Kami telah menyiapkan bantuan beasiswa prestasi." Jika diubah menjadi kalimat tidak langsung yang baku menjadi...',
      correctText: 'Kepala Madrasah menyatakan bahwa mereka telah menyiapkan bantuan beasiswa prestasi.',
      distractors: ['Kepala Madrasah mengatakan kalian harus siap menerima beasiswa bantuan.', 'Kepala Madrasah bertanya mengapa bantuan beasiswa belum disiapkan.', 'Kepala Madrasah memerintahkan beasiswa segera dibagikan tanpa syarat.'],
      explanation: 'Pengubahan kalimat langsung ke tak langsung menggunakan konjungsi "bahwa" dan penyesuaian sudut pandang pronomina.'
    },
    // Teks Iklan, Slogan, dan Poster
    {
      subtopic: 'Teks Iklan dan Slogan',
      competency: 'Membedakan karakteristik iklan, slogan, dan poster',
      question: 'Pernyataan singkat yang memuat semboyan motivasi padat makna dan mudah diingat oleh warga madrasah dinamakan...',
      correctText: 'Slogan',
      distractors: ['Iklan komersial display', 'Poster plakat pameran', 'Spanduk pengumuman lelang'],
      explanation: 'Slogan adalah perkataan atau kalimat pendek yang menarik dan mudah diingat untuk memberitahukan tujuan atau prinsip.'
    },
    {
      subtopic: 'Teks Iklan dan Slogan',
      competency: 'Menganalisis bahasa persuasif dalam poster',
      question: 'Kalimat poster lingkungan hidup yang bersifat persuasif dan santun adalah...',
      correctText: 'Sayangi madrasah kita dengan membuang sampah pada tempatnya',
      distractors: ['Dilarang keras menyentuh tanaman bunga ini sama sekali', 'Siapa pun yang mengotori kelas akan dipanggil orang tuanya', 'Sekolah kami memiliki tempat sampah tiga warna'],
      explanation: 'Bahasa persuasif mengajak secara santun tanpa ancaman kasar.'
    },
    {
      subtopic: 'Teks Iklan dan Slogan',
      competency: 'Menganalisis fungsi iklan',
      question: 'Iklan yang disiarkan oleh Kementerian Agama mengenai ajakan moderasi beragama dan toleransi antarumat tergolong jenis...',
      correctText: 'Iklan Layanan Masyarakat (ILM)',
      distractors: ['Iklan niaga komersial', 'Iklan penawaran barang diskon', 'Iklan lowongan kerja swasta'],
      explanation: 'Iklan yang bertujuan mengedukasi masyarakat tanpa motif keuntungan finansial disebut iklan layanan masyarakat.'
    },
    // Puisi Rakyat (Pantun, Gurindam, Syair)
    {
      subtopic: 'Puisi Rakyat',
      competency: 'Menelaah syarat persajakan dan struktur pantun',
      question: 'Syarat bentuk persajakan akhir (rima) pada pantun empat baris tradisional adalah...',
      correctText: 'Bersajak silang a - b - a - b',
      distractors: ['Bersajak sama a - a - a - a', 'Bersajak kembar a - a - b - b', 'Bersajak patah a - b - b - a'],
      explanation: 'Ciri mutlak pantun: 4 baris, baris 1-2 sampiran, baris 3-4 isi, bersajak a-b-a-b.'
    },
    {
      subtopic: 'Puisi Rakyat',
      competency: 'Membedakan pantun dan gurindam',
      question: 'Puisi lama dua seuntai yang baris pertamanya berisi syarat/masalah dan baris keduanya memuat jawaban atau akibat disebut...',
      correctText: 'Gurindam',
      distractors: ['Pantun berkait', 'Syair hikayat', 'Talibun enam baris'],
      explanation: 'Gurindam terdiri atas 2 baris bersajak a-a, baris 1 persoalan/sebab, baris 2 jawaban/akibat.'
    },
    {
      subtopic: 'Puisi Rakyat',
      competency: 'Menganalisis struktur syair',
      question: 'Ciri khas bentuk syair Melayu klasik yang membedakannya dengan pantun adalah...',
      correctText: 'Semua barisnya merupakan isi dan bersajak a - a - a - a',
      distractors: ['Memiliki sampiran pada dua baris pertama', 'Bersajak silang a - b - a - b', 'Terdiri atas baris yang jumlah suku katanya bebas tanpa aturan'],
      explanation: 'Syair tidak memiliki sampiran, semua 4 barisnya merupakan untaian isi bersajak a-a-a-a.'
    },
    // Puisi Modern
    {
      subtopic: 'Puisi Modern',
      competency: 'Menganalisis majas dan diksi konotatif puisi',
      question: 'Perhatikan larik puisi: "Peluit kereta meraung membelah sunyinya malam." Majas yang digunakan oleh penyair adalah...',
      correctText: 'Personifikasi',
      distractors: ['Litotes rendah hati', 'Hiperbola berlebihan', 'Metafora analogis'],
      explanation: 'Peluit kereta (benda mati) diberi sifat insan yaitu "meraung".'
    },
    {
      subtopic: 'Puisi Modern',
      competency: 'Menentukan tema dan amanat puisi',
      question: 'Puisi yang mengungkapkan rasa syukur mendalam kepada Allah atas nikmat kesehatan dan ketenangan batin memiliki tema...',
      correctText: 'Ketuhanan (religiusitas)',
      distractors: ['Kritik sosial masyarakat', 'Percintaan remaja madrasah', 'Perjuangan fisik prajurit'],
      explanation: 'Ungkapan syukur dan ibadah kepada Sang Pencipta masuk dalam tema ketuhanan/religius.'
    },
    {
      subtopic: 'Puisi Modern',
      competency: 'Menganalisis citraan (imaji) puisi',
      question: 'Larik puisi: "Tercium aroma tanah basah seusai hujan lebat mengguyur bumi." Citraan yang dominan pada bait tersebut adalah citraan...',
      correctText: 'Penciuman (pembau)',
      distractors: ['Penglihatan visual', 'Pendengaran auditif', 'Gerak kinestetik'],
      explanation: 'Kata "tercium aroma tanah basah" melibatkan daya rangsang indra penciuman.'
    },
    // Teks Cerpen
    {
      subtopic: 'Teks Cerpen',
      competency: 'Menganalisis sudut pandang penceritaan cerpen',
      question: 'Jika pengarang menggunakan kata ganti "aku" dan terlibat langsung dalam jalan cerita sebagai tokoh sentral, sudut pandang yang dipakai adalah...',
      correctText: 'Sudut pandang orang pertama tokoh utama',
      distractors: ['Sudut pandang orang pertama tokoh sampingan', 'Sudut pandang orang ketiga serbatahu', 'Sudut pandang orang ketiga pengamat'],
      explanation: 'Tokoh "aku" yang menjadi fokus utama alur menggunakan sudut pandang orang pertama pelaku utama.'
    },
    {
      subtopic: 'Teks Cerpen',
      competency: 'Menganalisis alur dan konflik cerpen',
      question: 'Tahapan dalam cerpen ketika masalah antartokoh mencapai titik ketegangan tertinggi dinamakan...',
      correctText: 'Klimaks',
      distractors: ['Orientasi pengenalan', 'Pengungkapan peristiwa awal', 'Peleraian (antiklimaks)'],
      explanation: 'Klimaks adalah puncak ketegangan atau titik balik dalam rangkaian konflik cerita.'
    },
    {
      subtopic: 'Teks Cerpen',
      competency: 'Mengidentifikasi nilai-nilai kehidupan dalam cerpen',
      question: 'Nilai cerpen yang berkaitan dengan kepatuhan menjalankan syariat agama, beribadah, dan tawakal kepada Tuhan disebut nilai...',
      correctText: 'Religius (keagamaan)',
      distractors: ['Sosial kemasyarakatan', 'Moral budi pekerti umum', 'Budaya adat istiadat'],
      explanation: 'Nilai religius berakar pada hubungan manusia dengan Tuhan dan syariat-Nya.'
    },
    // Teks Tanggapan dan Resensi
    {
      subtopic: 'Teks Tanggapan Kritis',
      competency: 'Menganalisis struktur teks tanggapan santun',
      question: 'Bagian teks tanggapan kritis yang berisi penilaian kelebihan dan kekurangan suatu karya secara objektif dan santun adalah...',
      correctText: 'Penilaian / deskripsi kelebihan dan kekurangan',
      distractors: ['Konteks pengenalan buku', 'Simpulan rekomendasi pembeli', 'Orientasi biodata pengarang'],
      explanation: 'Penilaian objektif mengulas kekuatan sekaligus kelemahan karya secara proporsional.'
    },
    {
      subtopic: 'Teks Resensi Buku',
      competency: 'Menyusun ulasan buku pelajaran',
      question: 'Data identitas fisik buku seperti judul, nama pengarang, penerbit, tahun terbit, dan jumlah halaman dalam teks resensi disebut...',
      correctText: 'Identitas buku (data bibliografi)',
      distractors: ['Sinopsis ringkasan cerita', 'Penilaian keunggulan buku', 'Kata pengantar redaksi'],
      explanation: 'Identitas buku memuat rincian bibliografis karya seperti judul, penulis, penerbit, dan tebal halaman.'
    },
    // EYD V dan Tata Bahasa Baku
    {
      subtopic: 'Tata Bahasa & EYD V',
      competency: 'Menerapkan kaidah ejaan bahasa Indonesia yang disempurnakan (EYD V)',
      question: 'Penulisan kata serapan yang sesuai dengan kaidah EYD Edisi V yang baku adalah...',
      correctText: 'Aktivitas, efektivitas, dan konkret',
      distractors: ['Aktifitas, efektipitas, dan konkrit', 'Aktivitas, efektipitas, dan kongkrit', 'Aktifitas, efektivitas, dan kongkrit'],
      explanation: 'Baku: aktivitas (-itas), efektivitas (-itas), konkret (-et).'
    },
    {
      subtopic: 'Tata Bahasa & EYD V',
      competency: 'Menerapkan penulisan huruf kapital yang benar',
      question: 'Penulisan huruf kapital yang benar menurut kaidah ejaan resmi terdapat pada kalimat...',
      correctText: 'Pak Ahmad membeli jeruk bali dan pisang ambon di pasar tradisional',
      distractors: ['Pak Ahmad membeli Jeruk Bali dan Pisang Ambon di Pasar Tradisional', 'Pak Ahmad membeli jeruk Bali dan pisang Ambon di pasar Tradisional', 'Pak ahmad membeli Jeruk bali dan Pisang ambon di pasar tradisional'],
      explanation: 'Nama jenis buah (jeruk bali, pisang ambon) ditulis huruf kecil karena bukan nama geografis asal produksi.'
    },
    {
      subtopic: 'Tata Bahasa & EYD V',
      competency: 'Mengidentifikasi kalimat efektif',
      question: 'Kalimat berikut yang memenuhi syarat sebagai kalimat efektif yang hemat kata adalah...',
      correctText: 'Para guru madrasah menghadiri lokakarya kurikulum',
      distractors: ['Para bapak guru-guru madrasah menghadiri acara lokakarya', 'Guru-guru madrasah saling tolong-menolong satu sama lain', 'Demi untuk menyukseskan program madrasah yang unggul'],
      explanation: '"Para guru" sudah menyatakan jamak tanpa perlu mengulang "guru-guru" atau menambah "bapak".'
    },
    {
      subtopic: 'Tata Bahasa & EYD V',
      competency: 'Menganalisis tanda baca koma dan titik dua',
      question: 'Penggunaan tanda baca titik dua (:) yang tepat menurut EYD V terdapat pada kalimat...',
      correctText: 'Madrasah memerlukan perlengkapan laboratorium: mikroskop, tabung reaksi, dan pipet ukur.',
      distractors: ['Madrasah memerlukan: mikroskop, tabung reaksi, dan pipet ukur.', 'Perlengkapan yang diperlukan antara lain: mikroskop dan pipet.', 'Ibu membeli: gula, garam, dan minyak kelapa.'],
      explanation: 'Titik dua digunakan pada akhir pernyataan lengkap yang diikuti perincian.'
    },
    {
      subtopic: 'Teks Diskusi',
      competency: 'Menyusun argumen pro dan kontra dalam teks diskusi',
      question: 'Dalam teks diskusi tentang penggunaan gawai pintar bagi siswa madrasah, bagian yang menguraikan sudut pandang yang mendukung disertai bukti empiris disebut...',
      correctText: 'Argumen mendukung (pro)',
      distractors: ['Argumen menentang (kontra)', 'Isu pengantar masalah', 'Simpulan kompromi'],
      explanation: 'Argumen pro menyajikan bukti dan alasan positif yang memperkuat penerimaan isu.'
    },
    {
      subtopic: 'Teks Pidato Persuasif',
      competency: 'Menganalisis metode dan struktur pidato persuasif',
      question: 'Metode berpidato yang dilakukan tanpa naskah tertulis secara spontan berdasarkan kemampuan ingatan orator disebut metode...',
      correctText: 'Impromtu (spontanitas)',
      distractors: ['Manuskrip (membaca naskah)', 'Memoriter (menghafal teks penuh)', 'Ekstemporan (menyiapkan kerangka garis besar)'],
      explanation: 'Impromtu adalah penyampaian pidato serta-merta tanpa persiapan naskah sebelumnya.'
    },
    {
      subtopic: 'Teks Surat Resmi',
      competency: 'Menganalisis bagian-bagian surat dinas madrasah',
      question: 'Penulisan alamat tujuan surat dinas resmi yang benar dan tidak berlebihan adalah...',
      correctText: 'Yth. Kepala Kantor Kementerian Agama Kabupaten Sleman',
      distractors: ['Kepada Yth. Bapak Kepala Kantor Kementerian Agama Kabupaten Sleman', 'Yth: Kepala Kantor Kementerian Agama Kabupaten Sleman', 'Kepada Yth. Kepala Kantor Kemenag Kabupaten Sleman.'],
      explanation: 'Tidak menggunakan kata "Kepada" di depan "Yth." dan tidak memakai sapaan "Bapak" jika sudah ada nama jabatan.'
    },
    {
      subtopic: 'Semantik Kata',
      competency: 'Membedakan makna denotatif dan konotatif',
      question: 'Kalimat berikut yang menggunakan kata bermakna denotasi (makna lugas/sebenarnya) adalah...',
      correctText: 'Petani madrasah menggulung tikar pandan setelah selesai menjemur gabah padi',
      distractors: ['Pengusaha konveksi itu terpaksa gulung tikar akibat krisis moneter', 'Dia menjadi kambing hitam dalam perselisihan antarwarga', 'Pejabat itu gemar mencari muka di hadapan atasannya'],
      explanation: 'Menggulung tikar secara denotatif berarti melipat/menggulung alas tikar sungguhan.'
    },
    {
      subtopic: 'Diksi & Frasa',
      competency: 'Menganalisis hubungan sinonim dan antonim',
      question: 'Pasangan kata berikut yang memiliki hubungan antonim komplementer (berlawanan mutlak) adalah...',
      correctText: 'Hidup >< Mati',
      distractors: ['Besar >< Kecil', 'Panjang >< Pendek', 'Kaya >< Miskin'],
      explanation: 'Hidup dan mati bersifat mutlak/biner: jika tidak hidup pasti mati, tidak ada tingkatan di antaranya.'
    },
    {
      subtopic: 'Paragraf & Kohesi',
      competency: 'Menentukan ide pokok paragraf deduktif dan induktif',
      question: 'Sebuah paragraf yang kalimat utamanya berada di awal paragraf lalu diikuti oleh kalimat-kalimat penjelas disebut paragraf...',
      correctText: 'Deduktif',
      distractors: ['Induktif', 'Campuran (deduktif-induktif)', 'Naratif deskriptif menyebar'],
      explanation: 'Deduktif menempatkan gagasan utama di kalimat pertama alinea.'
    },
    {
      subtopic: 'Paragraf & Kohesi',
      competency: 'Menganalisis kalimat sumbang (inkoheren)',
      question: 'Dalam sebuah paragraf yang membahas pemanfaatan perpustakaan digital madrasah, kalimat yang menyatakan harga bahan pokok di pasar melonjak tergolong kalimat...',
      correctText: 'Inkoheren (kalimat sumbang yang merusak kesatuan paragraf)',
      distractors: ['Kalimat penjelas utama', 'Kalimat simpulan penegas', 'Kalimat topik deduktif'],
      explanation: 'Kalimat yang menyimpang dari gagasan pokok paragraf disebut kalimat sumbang/inkoheren.'
    },
    {
      subtopic: 'Teks Cerita Inspiratif',
      competency: 'Menganalisis pesan moral cerita inspiratif',
      question: 'Teks naratif yang menceritakan perjuangan seorang santri tunanetra yang berhasil menghafal 30 juz Al-Qur\'an bertujuan utama untuk...',
      correctText: 'Menggugah motivasi empati dan keteladanan pembaca',
      distractors: ['Menyajikan data sensus kuantitatif tunanetra', 'Mempromosikan buku hafalan komersial', 'Mengkritik kurikulum tahfiz madrasah'],
      explanation: 'Cerita inspiratif bertujuan membangkitkan semangat pantang menyerah dan keteladanan budi pekerti.'
    },
    {
      subtopic: 'Gaya Bahasa',
      competency: 'Menganalisis majas litotes',
      question: 'Ungkapan seorang tuan rumah yang kaya: "Silakan mampir ke gubuk kami yang reot ini," menggunakan majas...',
      correctText: 'Litotes (merendahkan diri)',
      distractors: ['Hiperbola (melebih-lebihkan)', 'Ironi (sindiran halus)', 'Sarkasme (makian tajam)'],
      explanation: 'Litotes adalah gaya bahasa yang menyatakan sesuatu dengan merendahkan keadaan sesungguhnya.'
    },
    {
      subtopic: 'Gaya Bahasa',
      competency: 'Menganalisis majas metafora',
      question: 'Kalimat: "Perpustakaan adalah gudang ilmu dan jendela dunia bagi para santri," menggunakan majas...',
      correctText: 'Metafora (analogi perbandingan langsung)',
      distractors: ['Simile dengan kata perumpamaan laksana', 'Personifikasi benda bernyawa', 'Asonansi rima vokal'],
      explanation: 'Metafora membandingkan dua hal secara langsung tanpa konjungsi pembanding (seperti, laksana).'
    },
    {
      subtopic: 'Kaidah Kata Depan',
      competency: 'Membedakan penulisan awalan di- dan kata depan di',
      question: 'Penulisan kata depan "di" yang tepat menurut kaidah bahasa Indonesia terdapat pada...',
      correctText: 'Buku itu disimpan di dalam lemari laboratorium',
      distractors: ['Buku itu disimpan didalam lemari laboratorium', 'Siswa itu sedang berdiri didepan kelas', 'Pertemuan akan dilaksanakan diruang rapat'],
      explanation: 'Kata depan "di" yang menunjukkan tempat arah ditulis terpisah dari kata yang mengikutinya.'
    },
    {
      subtopic: 'Kaidah Gabungan Kata',
      competency: 'Menerapkan penulisan gabungan kata terikat dan bebas',
      question: 'Penulisan gabungan kata yang benar menurut EYD V adalah...',
      correctText: 'Pascapanen, antarkota, dan subbagian',
      distractors: ['Pasca panen, antar kota, dan sub bagian', 'Pasca-panen, antar-kota, dan sub-bagian', 'Pasca Panen, Antar Kota, dan Sub Bagian'],
      explanation: 'Bentuk terikat seperti pasca-, antar-, sub- ditulis serangkai dengan kata dasar yang mengikutinya.'
    },
    {
      subtopic: 'Kaidah Kata Baku',
      competency: 'Memilih pasangan kata baku serapan asing',
      question: 'Deretan kata serapan yang seluruhnya baku menurut Kamus Besar Bahasa Indonesia (KBBI) adalah...',
      correctText: 'Kuitansi, ijazah, dan apotek',
      distractors: ['Kwitansi, ijasah, dan apotik', 'Kuitansi, ijasah, dan apotik', 'Kwitansi, ijazah, dan apotek'],
      explanation: 'Bentuk baku dalam KBBI: kuitansi (bukan kwitansi), ijazah (bukan ijasah), apotek (bukan apotik).'
    },
    {
      subtopic: 'Membaca Kritis',
      competency: 'Membedakan fakta dan opini dalam teks tajuk rencana',
      question: 'Kalimat berikut yang merupakan fakta yang dapat dibuktikan kebenarannya secara empiris adalah...',
      correctText: 'Ujian AKGTK Kemenag diikuti oleh lebih dari 100.000 pendidik madrasah di seluruh Indonesia',
      distractors: ['Penyelenggaraan ujian tahun ini tampaknya berjalan sangat menyenangkan', 'Pendidik madrasah sebaiknya diberikan tunjangan tambahan yang besar', 'Ujian berbasis komputer terasa jauh lebih mudah daripada ujian kertas'],
      explanation: 'Kalimat dengan angka dan data nyata yang dapat diverifikasi merupakan fakta obyektif.'
    },
    {
      subtopic: 'Struktur Kalimat',
      competency: 'Menganalisis pola kalimat dasar (S-P-O-K)',
      question: 'Kalimat: "Guru Biologi menerangkan siklus sel di laboratorium madrasah" memiliki pola gramatikal...',
      correctText: 'Subjek - Predikat - Objek - Keterangan Tempat (S-P-O-K)',
      distractors: ['Subjek - Predikat - Pelengkap - Keterangan', 'Subjek - Predikat - Keterangan Waktu', 'Subjek - Predikat - Objek - Pelengkap'],
      explanation: 'Guru Biologi (S), menerangkan (P), siklus sel (O), di laboratorium madrasah (K. Tempat).'
    },
    {
      subtopic: 'Teks Eksposisi',
      competency: 'Menganalisis tesis, rangkaian argumen, dan penegasan ulang',
      question: 'Bagian pembuka teks eksposisi yang berisi sudut pandang penulis terhadap masalah yang diangkat disebut...',
      correctText: 'Tesis (pernyataan pendapat awal)',
      distractors: ['Rangkaian argumen pembuktian', 'Penegasan ulang rekomendasi', 'Deskripsi bagian penutup'],
      explanation: 'Tesis adalah pengenalan isu dan sikap penulis terhadap topik yang akan dibahas.'
    },
    {
      subtopic: 'Teks Ulasan',
      competency: 'Mengidentifikasi kata evaluatif dalam teks ulasan novel',
      question: 'Kata-kata berikut yang tergolong diksi evaluatif untuk mengulas novel sastra adalah...',
      correctText: 'Menarik, memukau, mendalam, dan bernilai tinggi',
      distractors: ['Kemarin, besok, setelah itu, dan kemudian', 'Siapa, mengapa, di mana, dan kapan', 'Sehingga, karena, sebab, dan akibatnya'],
      explanation: 'Kata evaluatif memberikan penilaian kualitatif terhadap karya sastra.'
    },
    {
      subtopic: 'Teks Drama',
      competency: 'Menganalisis kramagung (petunjuk lakuan drama)',
      question: 'Teks dalam naskah drama yang diletakkan dalam tanda kurung untuk memandu gerak fisik atau ekspresi aktor disebut...',
      correctText: 'Kramagung (petunjuk lakuan wawancang)',
      distractors: ['Prolog pengantar pentas', 'Epilog penutup pertunjukan', 'Monolog batin tokoh'],
      explanation: 'Kramagung adalah petunjuk tindakan fisik, mimik, atau gerak aktor di atas panggung.'
    },
    {
      subtopic: 'Fonologi & Morfologi',
      competency: 'Menganalisis proses morfofonemik awalan meN-',
      question: 'Penggabungan awalan meN- dengan kata dasar "kristal" menghasilkan bentukan kata yang benar yaitu...',
      correctText: 'Mengkristal',
      distractors: ['Menkristal', 'Mengristal', 'Mekristal'],
      explanation: 'Huruf gugus konsonan /kr/ pada kata kristal tidak luluh saat mendapat prefiks meN- sehingga menjadi mengkristal.'
    },
    {
      subtopic: 'Fonologi & Morfologi',
      competency: 'Menganalisis peluluhan fonem KTSP',
      question: 'Penggabungan awalan meN- dengan kata dasar "tiup" menghasilkan bentuk baku...',
      correctText: 'Meniup',
      distractors: ['Mentip', 'Mengtiup', 'Menytiup'],
      explanation: 'Fonem /t/ pada awal kata dasar bersuku dua luluh menjadi /n/ ketika diberi prefiks meN-.'
    },
    {
      subtopic: 'Diksi Ilmiah',
      competency: 'Mengidentifikasi istilah teknis dalam artikel ilmiah madrasah',
      question: 'Istilah teknis kebahasaan yang bermakna persamaan bunyi vokal pada akhir larik puisi adalah...',
      correctText: 'Asonansi',
      distractors: ['Aliterasi (persamaan konsonan)', 'Sinestesia (pertukaran indra)', 'Pleonasme (pemborosan kata)'],
      explanation: 'Asonansi adalah perulangan bunyi vokal dalam deret kata puisi.'
    },
    {
      subtopic: 'Sintaksis Kalimat',
      competency: 'Menganalisis kalimat majemuk bertingkat',
      question: 'Kalimat majemuk bertingkat dengan anak kalimat pengganti keterangan waktu terdapat pada...',
      correctText: 'Ketika bel istirahat berdentang, para santri segera menuju ke kantin madrasah',
      distractors: ['Siswa membaca buku dan guru mencatat daftar presensi kelas', 'Dia anak yang pandai, tetapi sifatnya agak pemalu', 'Adik belajar matematika sedangkan kakak mengerjakan tugas fikih'],
      explanation: 'Klausa "Ketika bel berdentang" berfungsi sebagai anak kalimat keterangan waktu.'
    },
    {
      subtopic: 'Semantik Kata',
      competency: 'Menganalisis perubahan makna peyorasi dan ameliorasi',
      question: 'Pergeseran makna kata "bunting" menjadi "hamil" yang dirasakan lebih sopan dan bernilai rasa tinggi dinamakan proses...',
      correctText: 'Ameliorasi',
      distractors: ['Peyorasi', 'Spesialisasi', 'Generalisasi'],
      explanation: 'Ameliorasi adalah pergeseran makna yang membuat kata menjadi lebih terhormat atau halus.'
    },
    {
      subtopic: 'Teks Biografi',
      competency: 'Menganalisis struktur orientasi, peristiwa penting, dan reorientasi biografi',
      question: 'Bagian akhir teks biografi tokoh K.H. Hasyim Asy\'ari yang memuat pandangan dan simpulan evaluatif penulis disebut...',
      correctText: 'Reorientasi',
      distractors: ['Orientasi latar keluarga', 'Peristiwa kronologis perjuangan', 'Komplikasi permasalahan hukum'],
      explanation: 'Reorientasi memuat simpulan dan komentar penutup penulis atas keteladanan tokoh biografi.'
    }
  ];

  return buildUniqueSubjectBank({
    subjectId: 'bahasa_indonesia',
    subjectName: 'Bahasa Indonesia MTs',
    categoryId: 'umum',
    categoryName: 'Umum MTs',
    akgtkCategory: 'Umum',
    educationLevel: 'MTs',
    idPrefix: 'mts-ind-',
    totalTarget: 60,
    generator: (i, diff, num) => {
      const item = items[i % items.length];
      return {
        subtopic: item.subtopic,
        competency: item.competency,
        question: item.question,
        correctText: item.correctText,
        distractors: item.distractors,
        explanation: item.explanation,
        tip: 'Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.'
      };
    }
  });
}

// ==========================================
// 2. BAHASA INGGRIS MTS (60 UNIQUE QUESTIONS)
// ==========================================
function generateBahasaInggrisMTs() {
  const items = [
    {
      subtopic: 'Classroom Expressions',
      competency: 'Identify communicative purpose of classroom interpersonal expressions',
      question: 'Teacher: "Attention, please! Before we begin our lesson, please open your English books to page 45." What is the main communicative intention of the teacher?',
      correctText: 'To draw students\' focus and give instruction',
      distractors: ['To scold students for making too much noise', 'To dismiss the class for a break', 'To check student attendance records'],
      explanation: '"Attention, please" is used by teachers to request focus from listeners before delivering an instruction.'
    },
    {
      subtopic: 'Asking for Attention',
      competency: 'Identify responses to interpersonal interactions',
      question: 'Teacher: "Listen up, everybody! The madrasah science competition will start tomorrow morning." Students: "[ ... ]". Which response shows attentiveness appropriately?',
      correctText: 'Yes, Sir, we are ready to listen.',
      distractors: ['Never mind, you are welcome.', 'I disagree with your opinion completely.', 'Excuse me, where is the exit door?'],
      explanation: 'The students acknowledge the teacher\'s call for attention with a polite confirmation.'
    },
    {
      subtopic: 'Checking Understanding',
      competency: 'Identify expressions of checking for understanding',
      question: 'Teacher: "Have you grasped how to change active voice into passive, Farhan?" Farhan: "Yes, Ma\'am, it is clear." The teacher\'s phrase is used for...',
      correctText: 'Checking the student\'s comprehension',
      distractors: ['Giving compliment on a student\'s project', 'Expressing gratitude for help', 'Asking permission to leave the room'],
      explanation: '"Have you grasped..." asks whether the listener understands the material.'
    },
    {
      subtopic: 'Compliments and Praise',
      competency: 'Use expressions of praising and complimenting performance',
      question: 'Siti: "Look at this calligraphy that Ahmad painted!" Teacher: "What an exquisite masterpiece!" The teacher is expressing...',
      correctText: 'An admiration and compliment',
      distractors: ['An apology for a mistake', 'A warning about hazardous paints', 'A request for financial assistance'],
      explanation: '"What an exquisite masterpiece!" is an exclamation expressing admiration.'
    },
    {
      subtopic: 'Asking and Giving Opinions',
      competency: 'Express opinions and arguments politely',
      question: 'Zaid: "In my opinion, studying in the madrasah library in the morning is very calming." Umar: "I completely agree with you. It helps me concentrate." Umar expresses...',
      correctText: 'Agreement with Zaid\'s viewpoint',
      distractors: ['Disagreement with Zaid\'s suggestion', 'Doubt about library regulations', 'Refusal to join the study group'],
      explanation: '"I completely agree with you" clearly denotes agreement.'
    },
    {
      subtopic: 'Notices and Warnings',
      competency: 'Interpret warning notices in school facilities',
      question: 'Notice in the madrasah lab: "CAUTION: WEAR CHEMICAL RESISTANT GLOVES AND SAFETY GOGGLES AT ALL TIMES." This notice implies that...',
      correctText: 'Visitors must protect their hands and eyes from corrosive substances',
      distractors: ['Students are forbidden from using protective gloves', 'Safety goggles are sold inside the science room', 'Visitors may enter the laboratory without any gear'],
      explanation: '"Wear gloves and goggles" indicates mandatory protective equipment for safety.'
    },
    {
      subtopic: 'Greeting Cards',
      competency: 'Analyze communicative purpose of greeting cards',
      question: 'A card reads: "Wishing you a blessed Ramadan filled with peace, prayer, and divine forgiveness." What is the sender\'s primary goal?',
      correctText: 'To send religious felicitations on the holy month of Ramadan',
      distractors: ['To invite the recipient to a sporting event', 'To console someone who lost a competition', 'To announce the launch of a new product'],
      explanation: 'The card conveys warm wishes and blessings for Ramadan.'
    },
    {
      subtopic: 'Invitation Cards',
      competency: 'Analyze information in formal invitations',
      question: 'An invitation letter contains: "RSVP by October 15th to Mr. Ridwan (08123456789)." The acronym "RSVP" instructs the invited guest to...',
      correctText: 'Confirm whether they will attend the event before the deadline',
      distractors: ['Bring cash donations to the registration desk', 'Arrive at least two hours before the event starts', 'Send a substitute representative immediately'],
      explanation: 'RSVP (répondez s\'il vous plaît) asks recipients to confirm attendance.'
    },
    {
      subtopic: 'Announcement',
      competency: 'Identify factual details in public announcements',
      question: 'Announcement: "All scout troop members are required to gather at the madrasah courtyard on Friday at 3:00 PM in full uniform." Who is the target audience?',
      correctText: 'Members of the madrasah scout organization',
      distractors: ['All teachers and laboratory staff', 'Parents of newly enrolled students', 'Kitchen and janitorial personnel'],
      explanation: '"All scout troop members" specifies the intended audience.'
    },
    {
      subtopic: 'Simple Present Tense',
      competency: 'Apply subject-verb agreement in Simple Present',
      question: 'Complete the sentence: "Every Friday morning, our madrasah principal [ ... ] the flag ceremony in the main courtyard."',
      correctText: 'leads',
      distractors: ['leading', 'lead', 'led'],
      explanation: 'Singular third person subject (principal) in Simple Present takes verb + -s: leads.'
    },
    {
      subtopic: 'Simple Present Tense',
      competency: 'Use negative auxiliary in Simple Present',
      question: 'Complete the sentence: "The students [ ... ] bring electronic gadgets during final semester examinations."',
      correctText: 'do not',
      distractors: ['does not', 'is not', 'are not'],
      explanation: 'Plural subject (the students) uses "do not" for Simple Present negation.'
    },
    {
      subtopic: 'Present Continuous Tense',
      competency: 'Identify actions in progress at the moment of speaking',
      question: 'Look at the sentence: "Listen! The madrasah choir [ ... ] an Islamic spiritual song right now."',
      correctText: 'is singing',
      distractors: ['sings', 'are singing', 'sang'],
      explanation: 'Singular collective subject (choir) with time signal "right now" uses "is singing".'
    },
    {
      subtopic: 'Simple Past Tense',
      competency: 'Apply irregular past tense verbs in recount context',
      question: 'Complete the sentence: "Two weeks ago, our class [ ... ] the national museum in Jakarta for an educational field trip."',
      correctText: 'visited',
      distractors: ['visits', 'visiting', 'will visit'],
      explanation: 'Time signal "two weeks ago" requires past simple verb: visited.'
    },
    {
      subtopic: 'Simple Past Tense',
      competency: 'Use irregular past verbs correctly',
      question: 'Sentence: "Last Sunday, Ahmad [ ... ] a beautiful Arabic calligraphy that won the regional trophy."',
      correctText: 'drew',
      distractors: ['draws', 'drawing', 'drawn'],
      explanation: 'Past tense of draw is drew.'
    },
    {
      subtopic: 'Past Continuous Tense',
      competency: 'Apply past continuous for interrupted past actions',
      question: 'Sentence: "While the students [ ... ] the chemistry experiment, the electricity suddenly went out."',
      correctText: 'were conducting',
      distractors: ['was conducting', 'conducted', 'are conducting'],
      explanation: 'Plural subject "the students" in past continuous takes "were conducting".'
    },
    {
      subtopic: 'Degrees of Comparison',
      competency: 'Form comparative degree with adjectives',
      question: 'Sentence: "Mount Everest is [ ... ] Mount Bromo in East Java."',
      correctText: 'higher than',
      distractors: ['the highest', 'more high than', 'as high as'],
      explanation: 'Short adjective high uses comparative form higher than.'
    },
    {
      subtopic: 'Degrees of Comparison',
      competency: 'Form superlative degree with long adjectives',
      question: 'Sentence: "The cheetah is widely known as [ ... ] land animal in the world."',
      correctText: 'the fastest',
      distractors: ['faster than', 'more fast', 'the most fast'],
      explanation: 'Superlative of fast is the fastest.'
    },
    {
      subtopic: 'Degrees of Comparison',
      competency: 'Form superlative of multi-syllable adjectives',
      question: 'Sentence: "The holy month of Ramadan is considered [ ... ] month in the Islamic calendar."',
      correctText: 'the most sacred',
      distractors: ['more sacred than', 'sacredest', 'as sacred'],
      explanation: 'Two-syllable adjective sacred takes "the most sacred".'
    },
    {
      subtopic: 'Modals of Ability and Obligation',
      competency: 'Apply modals must, should, and can in context',
      question: 'Sentence: "According to madrasah regulations, all students [ ... ] attend the morning assembly on time."',
      correctText: 'must',
      distractors: ['might', 'could', 'would'],
      explanation: '"Must" expresses compulsory school regulation or obligation.'
    },
    {
      subtopic: 'Modals of Suggestion',
      competency: 'Give suggestions using modal should',
      question: 'Doctor: "You look exhausted, Salma. You [ ... ] drink plenty of warm water and take rest."',
      correctText: 'should',
      distractors: ['will', 'may not', 'shall not'],
      explanation: '"Should" is used to offer beneficial medical advice or suggestion.'
    },
    {
      subtopic: 'Passive Voice',
      competency: 'Transform active sentence into passive voice',
      question: 'Active: "The headmaster signed the graduation certificates yesterday." The correct passive form is...',
      correctText: 'The graduation certificates were signed by the headmaster yesterday.',
      distractors: ['The graduation certificates was signed by the headmaster yesterday.', 'The headmaster was signed by the certificates yesterday.', 'The certificates are signed by the headmaster yesterday.'],
      explanation: 'Plural object (certificates) in Past Passive takes "were + Verb 3 (signed)".'
    },
    {
      subtopic: 'Passive Voice',
      competency: 'Identify passive voice in simple present',
      question: 'Active: "Madrasah librarians arrange new reference books on the wooden shelves." The correct passive form is...',
      correctText: 'New reference books are arranged on the wooden shelves by madrasah librarians.',
      distractors: ['New reference books were arranged on the wooden shelves.', 'New reference books is arranged by madrasah librarians.', 'The wooden shelves are arranging reference books.'],
      explanation: 'Plural object (books) in Present Passive takes "are + Verb 3 (arranged)".'
    },
    {
      subtopic: 'Recount Text',
      competency: 'Identify social function and structure of recount texts',
      question: 'What is the primary social function of a recount text about a school trip to Yogyakarta?',
      correctText: 'To inform and entertain readers by retelling past personal experiences chronologically',
      distractors: ['To explain scientific procedures of making batik fabrics', 'To persuade people to purchase tour tickets to Yogyakarta', 'To describe the physical dimensions of ancient temples'],
      explanation: 'Recount text retells past events in temporal sequence for informative or entertaining purposes.'
    },
    {
      subtopic: 'Narrative Text',
      competency: 'Identify resolution in narrative legends',
      question: 'In a narrative legend about Malin Kundang, what occurs in the resolution stage of the story?',
      correctText: 'Malin Kundang was cursed and turned into stone due to his mother\'s prayer',
      distractors: ['Malin Kundang set sail with rich merchants to find wealth', 'Malin Kundang was born in a peaceful fishing village in West Sumatra', 'Malin Kundang bought many trading ships in the harbor'],
      explanation: 'The resolution resolves the central conflict, concluding with Malin turning into stone.'
    },
    {
      subtopic: 'Descriptive Text',
      competency: 'Identify dominant tense in descriptive texts',
      question: 'Which grammatical tense is dominantly employed throughout descriptive texts that depict monuments or tourist destinations?',
      correctText: 'Simple Present Tense',
      distractors: ['Past Continuous Tense', 'Future Perfect Tense', 'Past Perfect Tense'],
      explanation: 'Descriptive texts describe permanent facts and features, using Simple Present Tense.'
    },
    {
      subtopic: 'Procedure Text',
      competency: 'Identify connectives of sequence in recipe instructions',
      question: 'In a recipe text on how to brew herbal tea, which transitional phrase indicates the penultimate or final step?',
      correctText: 'Finally, serve the hot tea in porcelain cups with a slice of lemon.',
      distractors: ['First, boil two cups of clean water in a kettle.', 'Secondly, crush the fresh ginger roots gently.', 'Before starting, wash all kitchen utensils thoroughly.'],
      explanation: '"Finally" signals the concluding step of a procedure.'
    },
    {
      subtopic: 'Report Text',
      competency: 'Differentiate report text from descriptive text',
      question: 'A text presenting general scientific facts about whales (mammalian traits, habitat, echolocation) is categorized as...',
      correctText: 'Information Report text',
      distractors: ['Personal recount text', 'Imaginative fantasy narrative', 'Product commercial advertisement'],
      explanation: 'Information reports classify and describe general natural phenomena objectively.'
    },
    {
      subtopic: 'Conjunctions',
      competency: 'Use causal conjunctions correctly',
      question: 'Complete the sentence: "Hasan studied diligently every evening; [ ... ], he achieved the highest mathematics score in the exam."',
      correctText: 'consequently / therefore',
      distractors: ['nevertheless', 'although', 'otherwise'],
      explanation: '"Consequently/therefore" signals the result of studying diligently.'
    },
    {
      subtopic: 'Conjunctions of Contrast',
      competency: 'Apply contrasting conjunctions',
      question: 'Complete the sentence: "[ ... ] it was raining heavily outside, the madrasah students still walked to school enthusiastically."',
      correctText: 'Although / Even though',
      distractors: ['Because', 'Since', 'Due to'],
      explanation: '"Although" connects contrasting clauses (heavy rain vs walking enthusiastically).'
    },
    {
      subtopic: 'Prepositions of Time and Place',
      competency: 'Use prepositions in, on, and at accurately',
      question: 'Sentence: "The Madrasah English Club meeting will be held [ ... ] Monday morning [ ... ] the multi-purpose auditorium."',
      correctText: 'on - in',
      distractors: ['at - on', 'in - at', 'on - at'],
      explanation: 'Days of the week take "on" (on Monday) and enclosed rooms take "in" (in the auditorium).'
    },
    {
      subtopic: 'Vocabulary in Context',
      competency: 'Determine synonym of academic words',
      question: 'In the passage: "The teacher appreciated the students\' dedication." What is the closest synonym of the word "dedication"?',
      correctText: 'Commitment and hard work',
      distractors: ['Neglect and carelessness', 'Hesitation and uncertainty', 'Suspicion and doubt'],
      explanation: '"Dedication" means devotion and persistent commitment.'
    },
    {
      subtopic: 'Vocabulary in Context',
      competency: 'Determine antonym of descriptive adjectives',
      question: 'What is the antonym of the word "generous" in the story about the compassionate caliph?',
      correctText: 'Stingy / selfish',
      distractors: ['Kind-hearted', 'Charitable', 'Merciful'],
      explanation: 'The opposite of generous (suka memberi) is stingy (kikir/pelit).'
    },
    {
      subtopic: 'Reading Comprehension',
      competency: 'Identify the main idea of an expository paragraph',
      question: 'A paragraph describes how regular morning exercise improves blood circulation, boosts brain memory, and reduces student stress. The main idea is...',
      correctText: 'The multifaceted health benefits of morning physical exercise',
      distractors: ['The best schedule for buying running shoes', 'The history of marathon competitions in ancient Greece', 'The financial cost of building sports arenas'],
      explanation: 'All sentences elaborate the benefits of morning exercise.'
    },
    {
      subtopic: 'Reading Comprehension',
      competency: 'Identify explicit factual details in a narrative text',
      question: 'In the story of Sangkuriang, why did Dayang Sumbi wave her magical red scarf at dawn?',
      correctText: 'To trick the rooster into crowing and make Sangkuriang fail the impossible condition',
      distractors: ['To welcome foreign merchants arriving at the port', 'To guide Sangkuriang back home safely in the dark', 'To summon woodland animals to help Sangkuriang build the boat'],
      explanation: 'Dayang Sumbi tricked the spirits into thinking dawn had broken so the boat wouldn\'t be finished.'
    },
    {
      subtopic: 'Conditional Sentences',
      competency: 'Apply Conditional Type 1 for real future possibilities',
      question: 'Complete the sentence: "If we [ ... ] to the madrasah early, we [ ... ] the morning Quran recitation."',
      correctText: 'come - will join',
      distractors: ['came - will join', 'will come - joined', 'comes - would join'],
      explanation: 'First Conditional format: If + Simple Present (come), will + bare infinitive (will join).'
    },
    {
      subtopic: 'Question Tags',
      competency: 'Apply appropriate question tags in spoken dialogue',
      question: 'Complete the question tag: "You have submitted your science assignment to Mr. Anwar, [ ... ]?"',
      correctText: 'haven\'t you',
      distractors: ['don\'t you', 'didn\'t you', 'aren\'t you'],
      explanation: 'Positive present perfect statement with "have" takes the negative tag "haven\'t you".'
    },
    {
      subtopic: 'Pronouns',
      competency: 'Use possessive adjectives and pronouns correctly',
      question: 'Sentence: "Fatimah and Aisyah left [ ... ] dictionaries in the language lab, so the teacher asked them to take [ ... ] back."',
      correctText: 'their - them',
      distractors: ['them - their', 'they - theirs', 'its - it'],
      explanation: 'Possessive adjective before noun is "their", and object pronoun for dictionaries is "them".'
    },
    {
      subtopic: 'Relative Clauses',
      competency: 'Use relative pronouns who, which, and whose',
      question: 'Sentence: "The young scientist [ ... ] invention won the silver medal at the madrasah expo was honored by the minister."',
      correctText: 'whose',
      distractors: ['who', 'which', 'whom'],
      explanation: '"Whose" shows possession (whose invention = her/his invention).'
    },
    {
      subtopic: 'Short Message',
      competency: 'Infer communicative intention in short text messages',
      question: 'Text message: "Hi Farhan, please don\'t forget to bring the projector cable tomorrow. Our group will present first." The sender\'s purpose is...',
      correctText: 'To remind Farhan about bringing a required presentation device',
      distractors: ['To cancel the presentation schedule', 'To invite Farhan to watch movies after school', 'To congratulate Farhan on his speech test'],
      explanation: '"Please don\'t forget to bring..." explicitly reminds the recipient.'
    },
    {
      subtopic: 'Job Advertisements',
      competency: 'Extract necessary qualifications from vacancy ads',
      question: 'Ad: "WANTED: English Teacher for MTs. Requirements: Bachelor\'s degree in English Education, fluent spoken English, min. 2 years experience." A candidate MUST...',
      correctText: 'Hold an undergraduate English education degree and have teaching experience',
      distractors: ['Be willing to teach without compensation for two years', 'Hold a master\'s degree in administrative accounting', 'Live within five meters from the school premises'],
      explanation: 'The requirements explicitly specify a Bachelor\'s degree in English and 2 years experience.'
    },
    {
      subtopic: 'Narrative Fable',
      competency: 'Extract moral lesson from fables',
      question: 'In the classic fable "The Tortoise and the Hare", what core value does the tortoise demonstrate?',
      correctText: 'Persistence, steady focus, and humility overcome arrogant overconfidence',
      distractors: ['Speed and boastfulness are always superior', 'Sleeping during work hours is healthy for runners', 'Cheating during athletic contests is acceptable'],
      explanation: 'The tortoise wins through patient determination while the hare loses to overconfidence.'
    },
    {
      subtopic: 'Expressions of Sympathy',
      competency: 'Offer appropriate condolence and sympathy',
      question: 'Friend: "I am really devastated because my grandfather passed away yesterday." You: "[ ... ]"',
      correctText: 'I am deeply sorry for your loss. May Allah grant you patience and strength.',
      distractors: ['Congratulations on your great achievement!', 'I totally disagree with what you just said.', 'That sounds fantastic, have a wonderful time!'],
      explanation: 'Expressions of condolence comfort the bereaved with sympathy.'
    },
    {
      subtopic: 'Shopping and Quantity',
      competency: 'Use quantifiers much, many, few, and little',
      question: 'Sentence: "There is only a [ ... ] olive oil left in the bottle, but we have [ ... ] apples in the fruit basket."',
      correctText: 'little - many',
      distractors: ['few - much', 'many - little', 'much - few'],
      explanation: 'Uncountable noun (oil) takes "little", while plural countable noun (apples) takes "many".'
    },
    {
      subtopic: 'Grammar: Gerunds vs Infinitives',
      competency: 'Identify verbs followed by gerunds',
      question: 'Sentence: "All madrasah students enjoy [ ... ] English dialogue in pairs during conversation class."',
      correctText: 'practicing',
      distractors: ['to practice', 'practiced', 'practice'],
      explanation: 'The verb "enjoy" is strictly followed by a gerund (-ing form): enjoy practicing.'
    },
    {
      subtopic: 'Reading Signs',
      competency: 'Interpret library cautionary signage',
      question: 'Sign in the madrasah reading room: "SILENCE PLEASE. KINDLY MUTE ALL MOBILE DEVICES." What must visitors do?',
      correctText: 'Keep quiet and turn off or silence phone ringtones',
      distractors: ['Play educational audio podcasts at full volume', 'Conduct loud group phone conferences', 'Leave mobile phones on the reception floor'],
      explanation: 'Silence please requires visitors to maintain quietness and silence electronic devices.'
    },
    {
      subtopic: 'Present Perfect Tense',
      competency: 'Apply Present Perfect for actions completed with present relevance',
      question: 'Complete: "Mr. Halim [ ... ] at this Islamic boarding school for over ten years, and he loves his students dearly."',
      correctText: 'has taught',
      distractors: ['have taught', 'is teaching', 'teaches'],
      explanation: 'Singular subject "Mr. Halim" with duration "for over ten years" takes "has taught".'
    },
    {
      subtopic: 'Describing People',
      competency: 'Analyze adjectives depicting personality traits',
      question: 'Sentence: "Ahmad is always willing to share his lunch with needy classmates. He is very [ ... ]."',
      correctText: 'generous and benevolent',
      distractors: ['arrogant and boastful', 'greedy and self-centered', 'cowardly and timid'],
      explanation: 'Sharing food with the needy reflects generosity and benevolence.'
    },
    {
      subtopic: 'Giving Directions',
      competency: 'Understand directional prepositions and imperatives',
      question: 'Direction: "Walk straight along the hallway, turn left at the laboratory, and the headmaster\'s office is [ ... ] your right."',
      correctText: 'on',
      distractors: ['in', 'at', 'above'],
      explanation: 'Side or orientation takes preposition "on" (on your right).'
    },
    {
      subtopic: 'Comparative Idioms',
      competency: 'Recognize common similes in English literature',
      question: 'Larik simile: "The santri memorized the chapter rapidly; he is as sharp as a [ ... ]."',
      correctText: 'needle / tack',
      distractors: ['rock', 'pillow', 'balloon'],
      explanation: 'The idiom "as sharp as a needle/tack" describes mental sharpness and intellect.'
    },
    {
      subtopic: 'Future Tense',
      competency: 'Express planned future intentions with be going to',
      question: 'Sentence: "Look at those dark overcast clouds! It [ ... ] rain in a few minutes."',
      correctText: 'is going to',
      distractors: ['will be', 'might have', 'shall not'],
      explanation: '"Is going to" is used when present visible evidence indicates an impending event.'
    },
    {
      subtopic: 'Spelling and Morphology',
      competency: 'Identify correct spelling of plural nouns ending in -y',
      question: 'What is the correct plural form of the noun "country" in an international geography text?',
      correctText: 'countries',
      distractors: ['countrys', 'countreis', 'countryies'],
      explanation: 'Consonant + y changes to -ies in plural: country -> countries.'
    },
    {
      subtopic: 'Invitations',
      competency: 'Politely accept or decline an invitation',
      question: 'Invitation: "Would you like to come to our madrasah graduation party tonight?" Decline politely:',
      correctText: 'I would love to, but I have a prior family commitment.',
      distractors: ['I don\'t care about your party at all.', 'No way, that event sounds boring.', 'Why do you ask me such a question?'],
      explanation: 'Polite refusal expresses gratitude/desire first ("I would love to"), followed by the reason.'
    },
    {
      subtopic: 'Reading Comprehension',
      competency: 'Identify cause-effect relationships in scientific passages',
      question: 'Text: "Excessive emission of greenhouse gases traps thermal radiation in the atmosphere, leading to rising global sea levels." What directly causes sea levels to rise?',
      correctText: 'Trapped thermal heat in the atmosphere due to greenhouse emissions',
      distractors: ['Decreased industrial manufacturing in polar regions', 'Excessive harvesting of marine algae by fishermen', 'Construction of seawalls along harbor coastlines'],
      explanation: 'The text links trapped thermal radiation to rising sea levels.'
    },
    {
      subtopic: 'Grammar: Irregular Plurals',
      competency: 'Apply irregular plural forms',
      question: 'Sentence: "The madrasah dentist examined the [ ... ] of all first-grade students today."',
      correctText: 'teeth',
      distractors: ['tooths', 'toothes', 'teethes'],
      explanation: 'The plural form of tooth is teeth.'
    },
    {
      subtopic: 'Grammar: Reflexive Pronouns',
      competency: 'Use reflexive pronouns accurately',
      question: 'Sentence: "The little boy managed to tie his shoelaces by [ ... ] without any assistance."',
      correctText: 'himself',
      distractors: ['itself', 'herself', 'themselves'],
      explanation: 'Singular male subject (boy) takes reflexive pronoun "himself".'
    },
    {
      subtopic: 'Discourse Markers',
      competency: 'Use discourse markers to summarize an oral presentation',
      question: 'Presentation conclusion: "[ ... ], digital madrasahs foster engaging and flexible learning for tomorrow\'s leaders."',
      correctText: 'In conclusion / To sum up',
      distractors: ['For instance', 'On the other hand', 'First of all'],
      explanation: '"In conclusion" signals the final summary of a speech.'
    },
    {
      subtopic: 'Idiomatic Expressions',
      competency: 'Interpret idiomatic meaning in everyday dialogue',
      question: 'Dialogue: "Don\'t give up now, Sarah. Hang in there!" What does "Hang in there" mean?',
      correctText: 'Stay determined and do not lose hope during tough times',
      distractors: ['Hang your clothes in the wardrobe', 'Leave the competition immediately', 'Climb the tree quickly'],
      explanation: '"Hang in there" is an idiom meaning to persevere and remain hopeful.'
    },
    {
      subtopic: 'Grammar: Adverbs of Frequency',
      competency: 'Position adverbs of frequency in standard sentences',
      question: 'Identify the grammatically correct word order for the adverb "always":',
      correctText: 'Bilal always arrives at the madrasah before 6:30 AM.',
      distractors: ['Bilal arrives always at the madrasah before 6:30 AM.', 'Always Bilal arrives at the madrasah before 6:30 AM.', 'Bilal arrives at the madrasah always before 6:30 AM.'],
      explanation: 'Adverbs of frequency typically go before the main verb: always arrives.'
    },
    {
      subtopic: 'Reading Comprehension',
      competency: 'Identify reference words (anaphora)',
      question: 'Sentence: "Dr. Hamka was a prolific author. He published numerous influential books." The pronoun "He" refers to...',
      correctText: 'Dr. Hamka',
      distractors: ['The publisher', 'The books', 'The readers'],
      explanation: 'The pronoun "He" refers back to Dr. Hamka.'
    },
    {
      subtopic: 'Writing Skills',
      competency: 'Select appropriate greeting in formal academic correspondence',
      question: 'In a formal scholarship application letter to the university admission committee, the most professional opening salutation is...',
      correctText: 'Dear Admissions Committee, / Dear Respected Sir or Madam,',
      distractors: ['Hey buddy, what\'s up?', 'Hi folks, look at my score!', 'Good day, my best pal,'],
      explanation: 'Formal application letters require dignified, standard salutations.'
    }
  ];

  return buildUniqueSubjectBank({
    subjectId: 'bahasa_inggris',
    subjectName: 'Bahasa Inggris MTs',
    categoryId: 'umum',
    categoryName: 'Umum MTs',
    akgtkCategory: 'Umum',
    educationLevel: 'MTs',
    idPrefix: 'mts-eng-',
    totalTarget: 60,
    generator: (i, diff, num) => {
      const item = items[i % items.length];
      return {
        subtopic: item.subtopic,
        competency: item.competency,
        question: item.question,
        correctText: item.correctText,
        distractors: item.distractors,
        explanation: item.explanation,
        tip: 'Focus on contextual meaning, communicative purpose, and grammatical accuracy.'
      };
    }
  });
}

// ==========================================
// 3. IPS TERPADU MTS (60 UNIQUE QUESTIONS)
// ==========================================
function generateIpsMTs() {
  const items = [
    // Geografi
    {
      subtopic: 'Letak Astronomis dan Geografis Indonesia',
      competency: 'Menganalisis pengaruh letak astronomis dan geografis wilayah Indonesia',
      question: 'Letak astronomis Indonesia pada 6° LU - 11° LS dan 95° BT - 141° BT menyebabkan Indonesia beriklim tropis dan memiliki...',
      correctText: 'Tiga zona waktu (WIB, WITA, WIT)',
      distractors: ['Empat musim iklim sedang', 'Dua zona iklim gurun subtropis', 'Satu zona waktu tunggal nasional'],
      explanation: 'Rentang bujur 46° dibagi interval 15° menghasilkan 3 zona waktu: WIB, WITA, dan WIT.'
    },
    {
      subtopic: 'Geomorfologi dan Vulkanisme',
      competency: 'Menganalisis dampak jalur cincin api (Ring of Fire) bagi Indonesia',
      question: 'Indonesia dilalui oleh dua jalur pegunungan muda dunia, yaitu Sirkum Pasifik dan Sirkum Mediterania. Dampak positif fenomena geologis ini bagi sektor pertanian adalah...',
      correctText: 'Tanah menjadi sangat subur akibat endapan abu vulkanik letusan gunung api',
      distractors: ['Sering terjadinya musim kemarau berkepanjangan', 'Tingginya kadar garam pada air tanah pedesaan', 'Tercapainya kestabilan kerak bumi tanpa gempa'],
      explanation: 'Abu vulkanik gunung api melapuk menjadi tanah andosol yang sangat kaya hara bagi pertanian.'
    },
    {
      subtopic: 'Iklim dan Muson',
      competency: 'Menganalisis pergerakan angin muson barat dan timur',
      question: 'Angin muson barat yang bertiup dari benua Asia menuju benua Australia melintasi Samudera Hindia yang luas pada bulan Oktober - April membawa dampak...',
      correctText: 'Terjadinya musim penghujan di sebagian besar wilayah Indonesia',
      distractors: ['Terjadinya musim kemarau kering di pulau Jawa', 'Turunnya salju tebal di kawasan khatulistiwa', 'Keringnya perairan rawa dan danau pedalaman'],
      explanation: 'Muson barat melewati lautan luas sehingga sarat uap air dan memicu musim hujan.'
    },
    {
      subtopic: 'Flora dan Fauna',
      competency: 'Membedakan tipe fauna Asiatis, Peralihan, dan Australis',
      question: 'Garis khayal Wallace memisahkan persebaran fauna Indonesia tipe Asiatis dengan tipe Peralihan. Contoh satwa endemik tipe Peralihan di Sulawesi adalah...',
      correctText: 'Anoa, babi rusa, dan burung maleo',
      distractors: ['Gajah sumatera, harimau, dan badak bercula satu', 'Cenderawasih, kasuari, dan kanguru pohon', 'Orangutan, bekantan, dan tapir melayu'],
      explanation: 'Sulawesi adalah zona peralihan dengan fauna khas: anoa, babirusa, dan maleo.'
    },
    {
      subtopic: 'Dinamika Kependudukan',
      competency: 'Menganalisis faktor pertumbuhan penduduk dan piramida penduduk',
      question: 'Piramida penduduk Indonesia yang berbentuk ekspansif (beralas lebar di bawah dan mengerucut di puncak) menunjukkan bahwa...',
      correctText: 'Proporsi penduduk usia muda (anak-anak) jauh lebih besar daripada usia tua',
      distractors: ['Tingkat kematian bayi sangat tinggi melampaui kelahiran', 'Mayoritas penduduk tergolong usia lanjut non-produktif', 'Angka harapan hidup masyarakat telah melampaui 95 tahun'],
      explanation: 'Bentuk ekspansif mencerminkan angka kelahiran tinggi sehingga kelompok usia muda mendominasi.'
    },
    {
      subtopic: 'Kawasan ASEAN',
      competency: 'Menganalisis potensi kerja sama dan profil negara ASEAN',
      question: 'Salah satu negara pendiri ASEAN yang dijuluki "Negeri Gajah Putih" dan tidak pernah dijajah oleh bangsa kolonial Barat adalah...',
      correctText: 'Thailand',
      distractors: ['Filipina', 'Vietnam', 'Myanmar'],
      explanation: 'Thailand bertindak sebagai negara penyangga (buffer state) sehingga tidak pernah dijajah bangsa Eropa.'
    },
    {
      subtopic: 'Kondisi Geografis Benua',
      competency: 'Mengidentifikasi karakteristik bentang alam benua di dunia',
      question: 'Sungai terpanjang di dunia yang mengalir di benua Afrika dan bermuara di Laut Tengah adalah...',
      correctText: 'Sungai Nil',
      distractors: ['Sungai Amazon', 'Sungai Yangtze', 'Sungai Mississippi'],
      explanation: 'Sungai Nil di Afrika merupakan sungai terpanjang di dunia (~6.650 km).'
    },
    // Sosiologi
    {
      subtopic: 'Interaksi Sosial',
      competency: 'Menganalisis bentuk interaksi asosiatif dan disosiatif',
      question: 'Bentuk kerja sama gotong royong antarwarga madrasah dan masyarakat dalam membersihkan saluran irigasi desa tergolong bentuk interaksi...',
      correctText: 'Asosiatif (kooperasi / kerja sama)',
      distractors: ['Disosiatif (kontravensi tersembunyi)', 'Konflik persaingan terbuka', 'Asimilasi paksaan sepihak'],
      explanation: 'Gotong royong adalah bentuk interaksi asosiatif yang mempersatukan masyarakat.'
    },
    {
      subtopic: 'Mobilitas Sosial',
      competency: 'Menganalisis jenis mobilitas vertikal dan horizontal',
      question: 'Seorang guru honorer madrasah yang lulus seleksi PPPK dan diangkat menjadi kepala madrasah berprestasi mengalami mobilitas sosial...',
      correctText: 'Vertikal naik (social climbing)',
      distractors: ['Vertikal turun (social sinking)', 'Horizontal antargenerasi', 'Lateral geografis'],
      explanation: 'Kenaikan derajat profesi dan status sosial disebut mobilitas vertikal ke atas (social climbing).'
    },
    {
      subtopic: 'Pluralitas Masyarakat',
      competency: 'Menganalisis keragaman suku, ras, dan agama dalam bingkai moderasi',
      question: 'Sikap saling menghormati perbedaan tata cara ibadah dan keyakinan antarumat beragama tanpa mencampuradukkan akidah disebut sikap...',
      correctText: 'Toleransi dan moderasi beragama',
      distractors: ['Etnosentrisme kesukuan', 'Primordialisme kedaerahan', 'Chauvinisme sempit'],
      explanation: 'Toleransi adalah saling menghargai perbedaan keyakinan tanpa kompromi akidah.'
    },
    {
      subtopic: 'Konflik dan Integrasi Sosial',
      competency: 'Menganalisis penyelesaian konflik sosial',
      question: 'Penyelesaian sengketa batas tanah antarwarga desa melalui bantuan tokoh adat setempat yang bertindak sebagai penengah tanpa memaksakan keputusan disebut...',
      correctText: 'Mediasi',
      distractors: ['Arbitrase yang mengikat hukum', 'Koersi melalui kekerasan aparat', 'Ajudikasi di meja hijau peradilan'],
      explanation: 'Mediasi menggunakan pihak ketiga netral yang berperan sebagai penasihat, bukan pemutus mutlak.'
    },
    {
      subtopic: 'Perubahan Sosial Budaya',
      competency: 'Menganalisis faktor pendorong dan penghambat perubahan sosial',
      question: 'Sikap masyarakat tradisional yang tertutup dan menganggap kebudayaan luar selalu membawa dampak buruk bagi generasi muda tergolong faktor...',
      correctText: 'Penghambat terjadinya perubahan sosial budaya',
      distractors: ['Pendorong inovasi teknologi terbarukan', 'Akselerator integrasi globalisasi', 'Pemicu asimilasi kultural'],
      explanation: 'Prasangka buruk terhadap hal baru dan keterasingan geografis menghambat perubahan sosial.'
    },
    {
      subtopic: 'Globalisasi',
      competency: 'Menganalisis dampak globalisasi dalam kehidupan madrasah',
      question: 'Dampak negatif globalisasi di bidang budaya yang ditandai dengan gaya hidup meniru budaya barat secara membabi buta dinamakan...',
      correctText: 'Westernisasi',
      distractors: ['Modernisasi rasional', 'Sekularisme ilmiah', 'Individualisme adaptif'],
      explanation: 'Westernisasi adalah peniruan gaya hidup kebarat-baratan tanpa filter nilai luhur.'
    },
    // Ekonomi
    {
      subtopic: 'Kelangkaan dan Kebutuhan Manusia',
      competency: 'Menganalisis konsep kelangkaan dan skala prioritas',
      question: 'Masalah ekonomi mendasar yang dialami setiap individu dan bangsa timbul karena...',
      correctText: 'Kebutuhan manusia tidak terbatas sementara alat pemuas kebutuhan jumlahnya terbatas',
      distractors: ['Uang yang beredar di masyarakat terlalu banyak', 'Pemerintah menetapkan harga kebutuhan pokok terlalu rendah', 'Teknologi produksi berkembang melampaui kebutuhan'],
      explanation: 'Kelangkaan (scarcity) muncul dari kesenjangan kebutuhan tak terbatas vs sumber daya terbatas.'
    },
    {
      subtopic: 'Prinsip dan Motif Ekonomi',
      competency: 'Membedakan prinsip ekonomi produsen dan konsumen',
      question: 'Pedoman tindakan manusia yang berupaya memperoleh hasil optimal dengan pengorbanan tertentu dinamakan...',
      correctText: 'Prinsip ekonomi',
      distractors: ['Motif spekulasi keuntungan liar', 'Hukum ekonomi proteksi', 'Politik dumping perdagangan'],
      explanation: 'Prinsip ekonomi mengedepankan efisiensi: pengorbanan tertentu untuk hasil optimal.'
    },
    {
      subtopic: 'Permintaan dan Penawaran',
      competency: 'Menganalisis kurva dan hukum permintaan',
      question: 'Menurut Hukum Permintaan, jika harga suatu barang kebutuhan di pasar madrasah mengalami kenaikan, maka jumlah barang yang diminta oleh pembeli akan...',
      correctText: 'Mengalami penurunan (ceteris paribus)',
      distractors: ['Mengalami peningkatan secara berlipat', 'Tetap stabil tidak terpengaruh harga', 'Mencapai titik equilibrium tanpa batas'],
      explanation: 'Hukum permintaan menyatakan harga dan jumlah permintaan berbanding terbalik.'
    },
    {
      subtopic: 'Pelaku Ekonomi (Circular Flow)',
      competency: 'Menganalisis peran 4 pelaku ekonomi dalam diagram aliran melingkar',
      question: 'Peran Rumah Tangga Konsumen (RTK) dalam pasar faktor produksi pada diagram arus melingkar adalah sebagai...',
      correctText: 'Penyedia faktor produksi berupa tanah, tenaga kerja, modal, dan kewirausahaan',
      distractors: ['Penghasil barang jadi dan jasa untuk diekspor', 'Pembuat regulasi perpajakan nasional', 'Penyalur subsidi energi bagi industri berat'],
      explanation: 'RTK adalah pemilik sekaligus penyedia faktor produksi yang disewakan ke RTP.'
    },
    {
      subtopic: 'Lembaga Keuangan dan Bank',
      competency: 'Membedakan fungsi bank sentral dan bank syariah',
      question: 'Prinsip operasional perbankan syariah yang menerapkan sistem bagi hasil pendapatan usaha antara nasabah dan pihak bank dinamakan...',
      correctText: 'Mudharabah dan Musyarakah',
      distractors: ['Riba fadhl dan maisir', 'Gharar dan spekulasi kurs', 'Ijon dan barter tradisional'],
      explanation: 'Mudharabah (bagi hasil pengelola-pemodal) dan Musyarakah (kemitraan) adalah akad syariah utama.'
    },
    {
      subtopic: 'Perdagangan Internasional',
      competency: 'Menganalisis manfaat ekspor dan devisa negara',
      question: 'Kebijakan pemerintah menjual barang komoditas di pasar luar negeri dengan harga yang lebih murah daripada di dalam negeri dinamakan politik...',
      correctText: 'Dumping',
      distractors: ['Proteksionisme kuota', 'Tarif bea masuk impor', 'Subsidi produsen lokal'],
      explanation: 'Dumping adalah menjual produk lebih murah di luar negeri untuk menguasai pasar internasional.'
    },
    {
      subtopic: 'Ekonomi Maritim dan Agrikultur',
      competency: 'Menganalisis penguatan ekonomi maritim Indonesia',
      question: 'Kebijakan ekonomi maritim Indonesia difokuskan pada pemanfaatan potensi bahari. Perbedaan mendasar ekonomi kelautan (marine economy) dengan ekonomi maritim (maritime economy) adalah...',
      correctText: 'Ekonomi kelautan mencakup eksploitasi sumber daya laut, sedangkan maritim mencakup navigasi perkapalan dan pelabuhan',
      distractors: ['Ekonomi kelautan hanya berfokus pada wisata pantai pulau terpencil', 'Ekonomi maritim dikelola sepenuhnya oleh nelayan tradisional', 'Ekonomi kelautan melarang adanya penangkapan ikan komersial'],
      explanation: 'Marine economy berkaitan dengan hasil alam laut, maritime economy mencakup transportasi laut dan industri pelabuhan.'
    },
    // Sejarah Indonesia
    {
      subtopic: 'Zaman Praaksara',
      competency: 'Menganalisis corak kehidupan manusia purba zaman praaksara',
      question: 'Timbunan fosil kulit kerang dan siput purba setinggi bukit di sepanjang pantai timur Sumatera peninggalan zaman mesolitikum dinamakan...',
      correctText: 'Kjokkenmoddinger (sampah dapur pantai)',
      distractors: ['Abris sous roche (gua payung karang)', 'Sarkofagus keranda batu megalit', 'Menhir tugu pemujaan arwah'],
      explanation: 'Kjokkenmoddinger adalah fosil timbunan sampah dapur kulit kerang zaman Mesolitikum.'
    },
    {
      subtopic: 'Kerajaan Hindu-Buddha',
      competency: 'Menganalisis peran Kerajaan Sriwijaya sebagai pusat maritim dan agama',
      question: 'Kerajaan maritim bercorak Buddha di Sumatera yang menjadi pusat pengajaran bahasa Sanskerta dan ajaran Buddha internasional pada abad ke-7 adalah...',
      correctText: 'Kerajaan Sriwijaya',
      distractors: ['Kerajaan Tarumanegara', 'Kerajaan Kutai Martadipura', 'Kerajaan Kalingga Ratu Shima'],
      explanation: 'Sriwijaya di Palembang tercatat oleh musafir I-Tsing sebagai pusat studi agama Buddha.'
    },
    {
      subtopic: 'Kerajaan Hindu-Buddha',
      competency: 'Menganalisis masa kejayaan Kerajaan Majapahit',
      question: 'Sumpah Palapa yang diikrarkan oleh Mahapatih Gajah Mada pada masa pemerintahan Ratu Tribhuwana Tunggadewi bertujuan untuk...',
      correctText: 'Menyatukan wilayah kepulauan Nusantara di bawah naungan panji Majapahit',
      distractors: ['Menolak masuknya ajaran agama Islam ke pulau Jawa', 'Membangun candi peribadatan terbesar di Asia Tenggara', 'Memindahkan pusat pemerintahan kerajaan ke pesisir laut'],
      explanation: 'Gajah Mada bersumpah tidak akan menikmati istirahat sebelum menyatukan Nusantara.'
    },
    {
      subtopic: 'Masuk dan Berkembangnya Islam di Indonesia',
      competency: 'Menganalisis teori masuknya Islam ke Nusantara',
      question: 'Teori Makkah (Arab) yang didukung oleh Buya Hamka menyatakan bahwa Islam masuk ke Nusantara sejak abad ke-7 Masehi dengan bukti...',
      correctText: 'Adanya perkampungan saudagar muslim Arab di Barus (pantai barat Sumatera)',
      distractors: ['Batu nisan Sultan Malik As-Saleh bertarikh Gujarat India', 'Gaya kaligrafi nisan makam Fatimah binti Maimun di Leran', 'Adanya tradisi perayaan tabot peringatan Asyura di Bengkulu'],
      explanation: 'Keberadaan permukiman pedagang Arab di Barus sejak abad ke-7 memperkuat Teori Makkah.'
    },
    {
      subtopic: 'Kesultanan Islam di Nusantara',
      competency: 'Menganalisis peran Kesultanan Demak dalam syiar Islam',
      question: 'Kesultanan Islam pertama di pulau Jawa yang menjadi basis penyebaran dakwah Walisongo adalah...',
      correctText: 'Kesultanan Demak Bintoro dipimpin Raden Patah',
      distractors: ['Kesultanan Pajang dipimpin Sultan Hadiwijaya', 'Kesultanan Cirebon dipimpin Sunan Gunung Jati', 'Kesultanan Banten dipimpin Sultan Ageng Tirtayasa'],
      explanation: 'Demak didirikan oleh Raden Patah dengan dukungan dewan Walisongo.'
    },
    {
      subtopic: 'Kedatangan Bangsa Barat (Kolonialisme)',
      competency: 'Menganalisis motivasi Gold, Glory, Gospel dan sistem VOC',
      question: 'Hak-hak istimewa yang diberikan oleh pemerintah kerajaan Belanda kepada kongsi dagang VOC di Hindia Belanda dinamakan hak...',
      correctText: 'Octrooi (Hak Oktroi)',
      distractors: ['Devide et Impera', 'Hak Ekstirpasi rempah', 'Hak Veto parlemen'],
      explanation: 'Hak Oktroi memberi kewenangan VOC mencetak uang, memiliki tentara, dan menyatakan perang.'
    },
    {
      subtopic: 'Perlawanan Terhadap Kolonialisme',
      competency: 'Menganalisis Perang Jawa (Diponegoro)',
      question: 'Penyebab khusus meletusnya Perang Diponegoro (1825 - 1830) di tanah Jawa adalah...',
      correctText: 'Pemasangan patok jalan oleh Belanda yang melintasi makam leluhur Pangeran Diponegoro di Tegalrejo',
      distractors: ['Penolakan Belanda membayar upeti tahunan kepada Keraton Yogyakarta', 'Penutupan pelabuhan perdagangan rempah di Semarang oleh prajurit Belanda', 'Pembubaran paksa laskar santri pengawal pangeran'],
      explanation: 'Pematokan tanah makam leluhur tanpa izin memicu perlawanan terbuka Pangeran Diponegoro.'
    },
    {
      subtopic: 'Sistem Tanam Paksa',
      competency: 'Menganalisis dampak Cultuurstelsel bagi bangsa Indonesia',
      question: 'Pencetus kebijakan Sistem Tanam Paksa (Cultuurstelsel) pada tahun 1830 yang mengakibatkan penderitaan rakyat Indonesia adalah Gubernur Jenderal...',
      correctText: 'Johannes van den Bosch',
      distractors: ['Herman Willem Daendels', 'Jan Pieterszoon Coen', 'Thomas Stamford Raffles'],
      explanation: 'Van den Bosch memberlakukan Cultuurstelsel tahun 1830 untuk mengisi kas Belanda yang kosong.'
    },
    {
      subtopic: 'Pergerakan Nasional',
      competency: 'Menganalisis lahirnya organisasi Budi Utomo dan hari Kebangkitan Nasional',
      question: 'Organisasi modern pertama di Indonesia yang didirikan pada 20 Mei 1908 oleh para pelajar STOVIA dipimpin Sutomo atas gagasan dr. Wahidin Sudirohusodo adalah...',
      correctText: 'Budi Utomo',
      distractors: ['Sarekat Dagang Islam', 'Indische Partij', 'Perhimpunan Indonesia'],
      explanation: 'Budi Utomo berdiri 20 Mei 1908, diperingati sebagai Hari Kebangkitan Nasional.'
    },
    {
      subtopic: 'Sumpah Pemuda 1928',
      competency: 'Menganalisis ikrar Sumpah Pemuda bagi persatuan bangsa',
      question: 'Kongres Pemuda II pada tanggal 28 Oktober 1928 di Jakarta melahirkan ikrar monumental Sumpah Pemuda yang menegaskan persatuan...',
      correctText: 'Satu tumpah darah, satu bangsa, dan menjunjung bahasa persatuan bahasa Indonesia',
      distractors: ['Satu suku, satu agama, dan satu sistem monarki kepulauan', 'Satu partai politik tunggal untuk melawan tentara kolonial', 'Satu mata uang nasional dan satu bendera regional'],
      explanation: 'Sumpah Pemuda menegaskan ikrar bertanah air satu, berbangsa satu, dan berbahasa persatuan Indonesia.'
    },
    {
      subtopic: 'Masa Pendudukan Jepang',
      competency: 'Menganalisis organisasi bentukan Jepang di Indonesia',
      question: 'Organisasi militer sukarela bentukan militer Jepang yang melatih pemuda Indonesia dasar-dasar keprajuritan dan menjadi cikal bakal TNI adalah...',
      correctText: 'PETA (Pembela Tanah Air)',
      distractors: ['Seinendan (barisan pemuda sipil)', 'Keibodan (barisan pembantu polisi)', 'Fujinkai (barisan wanita pembantu)'],
      explanation: 'PETA melatih perwira militer pribumi yang kelak mendirikan TNI.'
    },
    {
      subtopic: 'Proklamasi Kemerdekaan',
      competency: 'Menganalisis peristiwa Rengasdengklok menjelang proklamasi',
      question: 'Tujuan utama golongan pemuda (Sukarni, Chaerul Saleh, Wikana) membawa Ir. Soekarno dan Drs. Mohammad Hatta ke Rengasdengklok pada 16 Agustus 1945 adalah...',
      correctText: 'Menjauhkan kedua tokoh dari pengaruh dan intervensi militer Jepang agar segera memproklamasikan kemerdekaan',
      distractors: ['Memaksa kedua tokoh menandatangani piagam penyerahan kekuasaan kepada Sekutu', 'Menyembunyikan naskah teks proklamasi dari incaran tentara NICA Belanda', 'Membentuk dewan jenderal angkatan bersenjata darurat di Karawang'],
      explanation: 'Peristiwa Rengasdengklok mendesak kemerdekaan murni tanpa campur tangan Jepang.'
    },
    {
      subtopic: 'Perjuangan Mempertahankan Kemerdekaan',
      competency: 'Menganalisis diplomasi Perjanjian Linggarjati dan Renville',
      question: 'Hasil Perundingan Linggarjati tahun 1947 secara diplomatis mengakui wilayah Republik Indonesia secara de facto mencakup wilayah...',
      correctText: 'Jawa, Sumatera, dan Madura',
      distractors: ['Seluruh bekas wilayah Hindia Belanda dari Sabang sampai Merauke', 'Jawa, Bali, Nusa Tenggara, dan Maluku', 'Sumatera, Kalimantan, dan Sulawesi'],
      explanation: 'Perjanjian Linggarjati hanya mengakui wilayah RI de facto atas Jawa, Sumatera, dan Madura.'
    },
    {
      subtopic: 'Masa Demokrasi Parlementer',
      competency: 'Menganalisis Konferensi Asia Afrika (KAA) 1955',
      question: 'Konferensi Asia Afrika (KAA) yang diselenggarakan di Bandung pada tahun 1955 berhasil merumuskan deklarasi perdamaian dunia yang dikenal dengan nama...',
      correctText: 'Dasasila Bandung',
      distractors: ['Piagam Jakarta (Jakarta Charter)', 'Deklarasi Djuanda kelautan', 'Maklumat Pemerintah No. X'],
      explanation: 'KAA 1955 di Gedung Merdeka Bandung menghasilkan 10 prinsip Dasasila Bandung.'
    },
    {
      subtopic: 'Batas Maritim Indonesia',
      competency: 'Menganalisis arti Deklarasi Djuanda 13 Desember 1957',
      question: 'Deklarasi Djuanda pada 13 Desember 1957 mengubah konsep hukum batas laut teritorial Indonesia dari hukum kolonial menjadi konsep...',
      correctText: 'Negara kepulauan (Archipelagic State) di mana laut antarpulau adalah pemersatu wilayah utuh NKRI',
      distractors: ['Laut internasional bebas yang dapat dilayari kapal perang asing tanpa izin', 'Batas laut teritorial sempit sejauh 3 mil dari garis pantai masing-masing pulau', 'Penetapan zona ekonomi eksklusif 200 mil milik perusahaan multinasional'],
      explanation: 'Deklarasi Djuanda menyatukan seluruh perairan antarpulau menjadi wilayah kedaulatan utuh RI.'
    },
    {
      subtopic: 'Konflik Sosial Budaya',
      competency: 'Menganalisis stratifikasi sosial terbuka dan tertutup',
      question: 'Sistem pelapisan sosial (stratifikasi) yang memungkinkan seseorang untuk berpindah status ke lapisan atas melalui usaha pendidikan dan kerja keras disebut...',
      correctText: 'Stratifikasi sosial terbuka',
      distractors: ['Stratifikasi sosial tertutup (kasta)', 'Stratifikasi sosial feodal absolut', 'Sistem pelapisan kasta keagamaan kaku'],
      explanation: 'Stratifikasi terbuka memberi kesempatan mobilitas sosial berdasarkan prestasi (achieved status).'
    },
    {
      subtopic: 'Koperasi Sekolah / Madrasah',
      competency: 'Menganalisis peran koperasi madrasah dalam literasi finansial',
      question: 'Soko guru perekonomian Indonesia yang berasaskan kekeluargaan dan gotong royong sebagaimana diamanatkan Pasal 33 UUD 1945 adalah...',
      correctText: 'Koperasi',
      distractors: ['Badan Usaha Milik Swasta (BUMS) multinasional', 'Pasar modal bursa efek', 'Badan penanaman modal asing'],
      explanation: 'Pasal 33 ayat (1) menegaskan perekonomian disusun sebagai usaha bersama berdasar atas asas kekeluargaan (koperasi).'
    },
    {
      subtopic: 'Inflasi dan Kebijakan Moneter',
      competency: 'Menganalisis cara mengatasi inflasi',
      question: 'Untuk mengatasi lonjakan inflasi yang tinggi, Bank Indonesia selaku Bank Sentral dapat menerapkan kebijakan moneter kontraktif, antara lain dengan cara...',
      correctText: 'Menaikkan suku bunga acuan bank (BI rate) dan menaikkan cadangan kas minimum bank umum',
      distractors: ['Mencetak uang kertas baru sebanyak-banyaknya untuk dibagikan', 'Menurunkan tingkat suku bunga simpanan pinjaman serendah mungkin', 'Membeli surat berharga pemerintah dari masyarakat'],
      explanation: 'Menaikkan suku bunga menarik uang dari peredaran ke dalam tabungan sehingga menekan laju inflasi.'
    },
    {
      subtopic: 'Pajak dan APBN',
      competency: 'Membedakan fungsi pajak bagi pembangunan nasional',
      question: 'Fungsi pajak yang digunakan oleh pemerintah untuk membiayai pembangunan fasilitas umum seperti madrasah, jalan, dan jembatan disebut fungsi...',
      correctText: 'Budgetair (anggaran / penerimaan kas negara)',
      distractors: ['Regulerend (mengatur kebijakan ekonomi)', 'Stabilisasi moneter luar negeri', 'Distribusi selektif konglomerasi'],
      explanation: 'Fungsi budgetair adalah fungsi utama pajak sebagai sumber pendapatan negara membiayai belanja publik.'
    },
    {
      subtopic: 'Perubahan Iklim Global',
      competency: 'Menganalisis dampak pemanasan global bagi wilayah kepulauan',
      question: 'Dampak pemanasan global (global warming) yang paling mengancam kedaulatan geografis negara kepulauan seperti Indonesia adalah...',
      correctText: 'Mencairnya es kutub yang menaikkan permukaan air laut sehingga menenggelamkan pulau-pulau kecil terluar',
      distractors: ['Menurunnya intensitas sinar matahari di garis khatulistiwa', 'Berhentinya aktivitas gempa tektonik di seluruh sesar aktif', 'Bertambahnya luas daratan benua secara drastis'],
      explanation: 'Kenaikan muka air laut akibat pemanasan global mengancam pulau-pulau kecil dan pesisir Indonesia.'
    },
    {
      subtopic: 'Situs Purbakala Nusantara',
      competency: 'Mengidentifikasi situs manusia purba Sangiran',
      question: 'Situs purbakala di lembah Bengawan Solo Jawa Tengah yang diakui UNESCO sebagai warisan dunia tempat penemuan fosil Pithecanthropus erectus adalah...',
      correctText: 'Situs Sangiran',
      distractors: ['Situs Muara Takus Riau', 'Situs Trowulan Mojokerto', 'Situs Goa Gajah Bali'],
      explanation: 'Sangiran adalah situs paleontologi manusia purba terpenting di dunia.'
    },
    {
      subtopic: 'Penyebaran Agama di Nusantara',
      competency: 'Menganalisis peran Walisongo dalam akulturasi budaya Islam',
      question: 'Wali sanga yang terkenal menggunakan media seni wayang kulit dan tembang gending macapat sebagai sarana dakwah kultural Islam di tanah Jawa adalah...',
      correctText: 'Sunan Kalijaga',
      distractors: ['Sunan Giri', 'Sunan Ampel', 'Sunan Gresik (Maulana Malik Ibrahim)'],
      explanation: 'Sunan Kalijaga memadukan dakwah Islam dengan kebudayaan lokal seperti wayang kulit dan gamelan.'
    },
    {
      subtopic: 'Kearifan Lokal Konservasi',
      competency: 'Menganalisis tradisi kearifan lokal konservasi alam',
      question: 'Tradisi adat suku Baduy di Banten yang membagi hutan menjadi hutan tutupan (leuweung titipan) yang tidak boleh dirusak merupakan contoh kearifan lokal dalam...',
      correctText: 'Pelestarian dan konservasi sumber daya air dan hutan lindung',
      distractors: ['Eksploitasi pertambangan mineral secara modern', 'Perdagangan kayu gelondongan antarpulau', 'Pembangunan pemukiman apartemen bertingkat'],
      explanation: 'Hutan titipan Baduy berfungsi sebagai kawasan resapan air dan pelestarian ekosistem rimba.'
    },
    {
      subtopic: 'Perdagangan Antarpulau',
      competency: 'Menganalisis faktor pendorong perdagangan antarpulau di Indonesia',
      question: 'Faktor pendorong utama terjadinya arus perdagangan antarpulau (komoditas rempah dari Maluku ditukar beras dari Jawa) adalah...',
      correctText: 'Perbedaan potensi sumber daya alam dan keunggulan komparatif masing-masing daerah',
      distractors: ['Keseragaman jenis iklim dan tingkat curah hujan', 'Adanya larangan bepergian antardaerah oleh pemerintah pusat', 'Perbedaan sistem mata uang yang dipakai masing-masing pulau'],
      explanation: 'Perbedaan faktor produksi dan sumber daya alam mendorong terjadinya perdagangan antarpulau.'
    },
    {
      subtopic: 'Kebijakan Fiskal',
      competency: 'Menganalisis instrumen kebijakan fiskal pemerintah',
      question: 'Instrumen utama yang digunakan pemerintah dalam menjalankan kebijakan fiskal untuk menjaga stabilitas perekonomian makro adalah...',
      correctText: 'Pajak dan pengeluaran belanja negara (APBN)',
      distractors: ['Operasi pasar terbuka sertifikat Bank Indonesia', 'Tingkat suku bunga diskonto antarbank', 'Cadangan kas wajib minimum bank syariah'],
      explanation: 'Kebijakan fiskal dijalankan pemerintah melalui penerimaan pajak dan alokasi belanja negara (APBN).'
    },
    {
      subtopic: 'Masa Orde Baru dan Reformasi',
      competency: 'Menganalisis agenda reformasi 1998 di Indonesia',
      question: 'Salah satu agenda pokok gerakan reformasi mahasiswa dan rakyat pada bulan Mei 1998 adalah...',
      correctText: 'Pemberantasan Korupsi, Kolusi, dan Nepotisme (KKN) serta penegakan supremasi hukum',
      distractors: ['Pemberlakuan kembali sistem demokrasi terpimpin tahun 1959', 'Pembubaran Dewan Perwakilan Rakyat secara sepihak', 'Penutupan hubungan perdagangan dengan semua negara Barat'],
      explanation: 'Agenda Reformasi 1998 menuntut suksesi kepemimpinan, pemberantasan KKN, dan amandemen UUD 1945.'
    },
    {
      subtopic: 'Peta dan Pemetaan',
      competency: 'Menghitung skala peta dan jarak sebenarnya',
      question: 'Pada sebuah peta kabupaten madrasah berskala 1 : 250.000, jarak lurus antara dua madrasah pada peta adalah 4 cm. Jarak sebenarnya di lapangan adalah...',
      correctText: '10 kilometer',
      distractors: ['1 kilometer', '25 kilometer', '100 kilometer'],
      explanation: 'Jarak sebenarnya = 4 cm x 250.000 = 1.000.000 cm = 10 km.'
    },
    {
      subtopic: 'Penginderaan Jauh dan SIG',
      competency: 'Menganalisis manfaat Sistem Informasi Geografis (SIG)',
      question: 'Manfaat Sistem Informasi Geografis (SIG) bagi penanggulangan bencana alam di Indonesia adalah...',
      correctText: 'Memetakan zonasi daerah rawan bencana dan menyusun jalur evakuasi pengungsi',
      distractors: ['Menghentikan terjadinya pergerakan lempeng tektonik bawah laut', 'Menurunkan temperatur kawah gunung api secara instan', 'Mengubah arah pergerakan angin topan di samudra'],
      explanation: 'SIG memetakan risiko bencana, sebaran korban, dan rute evakuasi secara terintegrasi.'
    },
    {
      subtopic: 'Kependudukan dan Migrasi',
      competency: 'Membedakan jenis-jenis migrasi penduduk',
      question: 'Perpindahan penduduk dari daerah pedesaan menuju ke kota-kota besar untuk mencari lapangan pekerjaan dinamakan...',
      correctText: 'Urbanisasi',
      distractors: ['Transmigrasi terencana', 'Emigrasi luar negeri', 'Remigrasi kepulangan'],
      explanation: 'Urbanisasi adalah perpindahan penduduk dari desa ke kota.'
    },
    {
      subtopic: 'Dampak Revolusi Industri',
      competency: 'Menganalisis pengaruh Revolusi Industri terhadap imperialisme modern',
      question: 'Perkembangan Revolusi Industri di Inggris pada abad ke-18 mendorong imperialisme modern dengan tujuan utama mencari...',
      correctText: 'Bahan baku industri mentah dan pasar pemasaran produk hasil pabrik',
      distractors: ['Tanah pembuangan narapidana politik eropa', 'Tempat penyebaran paham feodalisme monarki', 'Pusat pengkajian naskah kuno timur'],
      explanation: 'Pabrik-pabrik Eropa membutuhkan bahan mentah dan pasar luas untuk menyerap hasil produksi massal.'
    },
    {
      subtopic: 'Sistem Kasta Tradisional',
      competency: 'Menganalisis stratifikasi sosial tertutup zaman Hindu-Buddha',
      question: 'Dalam masyarakat Hindu kuno di Nusantara, golongan pendeta, pemuka agama, dan cendekiawan masuk dalam kelompok kasta...',
      correctText: 'Brahmana',
      distractors: ['Ksatria raja dan bangsawan prajurit', 'Waisya pedagang dan petani', 'Sudra pekerja kasar hamba'],
      explanation: 'Brahmana adalah kasta pemuka agama dan guru spiritual.'
    },
    {
      subtopic: 'Hukum Dagang Laut Nusantara',
      competency: 'Menganalisis hukum maritim Kesultanan Gowa-Tallo',
      question: 'Hukum pelayaran dan perniagaan laut terkenal dari Kesultanan Gowa-Tallo di Sulawesi Selatan disusun oleh...',
      correctText: 'Amanna Gappa',
      distractors: ['Sultan Hasanuddin', 'Aru Palaka', 'Karaeng Matoaya'],
      explanation: 'Hukum pelayaran Amanna Gappa mengatur etika berniaga dan keselamatan kapal Bugis-Makassar.'
    },
    {
      subtopic: 'Perang Puputan di Bali',
      competency: 'Menganalisis perlawanan kerajaan di Bali terhadap Belanda',
      question: 'Perang habis-habisan sampai titik darah penghabisan melawan tentara penjajah Belanda di Bali dikenal dengan istilah perang...',
      correctText: 'Puputan',
      distractors: ['Gerilya rimba', 'Benteng stelsel', 'Paderi bersaudara'],
      explanation: 'Puputan adalah tradisi perlawanan kehormatan sampai gugur di medan laga membela tanah air.'
    },
    {
      subtopic: 'Badan Usaha (BUMN, BUMS, Koperasi)',
      competency: 'Menganalisis peran BUMN dalam perekonomian Indonesia',
      question: 'Badan usaha yang seluruh atau sebagian besar modalnya dimiliki oleh negara melalui penyertaan langsung yang berasal dari kekayaan negara yang dipisahkan adalah...',
      correctText: 'Badan Usaha Milik Negara (BUMN)',
      distractors: ['Firma persekutuan perdata', 'Perseroan Terbatas swasta asing', 'Koperasi simpan pinjam desa'],
      explanation: 'BUMN didirikan dengan modal negara untuk mengelola cabang produksi strategis bagi hajat hidup orang banyak.'
    },
    {
      subtopic: 'Pemberdayaan Komunitas Lokal',
      competency: 'Menganalisis peran ekonomi kreatif di madrasah',
      question: 'Pemberdayaan santri madrasah melalui kerajinan batik ecoprint ramah lingkungan yang memanfaatkan daun-daunan alami di sekitar madrasah tergolong dalam pengembangan...',
      correctText: 'Ekonomi kreatif berbasis kearifan lokal dan kelestarian alam',
      distractors: ['Industri pertambangan ekstraktif berat', 'Monopoli perdagangan bahan kimia berbahaya', 'Perdagangan saham spekulatif pasar modal'],
      explanation: 'Ecoprint menggabungkan kreativitas seni, bahan alam terbarukan, dan pemberdayaan komunitas madrasah.'
    },
    {
      subtopic: 'Konsep Ruang dan Interaksi Antarruang',
      competency: 'Menganalisis konsep interaksi keruangan antarwilayah',
      question: 'Wilayah pegunungan menghasilkan sayuran segar, sedangkan wilayah pesisir menghasilkan ikan laut. Terjadinya pertukaran barang antarkedua wilayah tersebut dipicu oleh kondisi...',
      correctText: 'Regional complementary (saling melengkapi kebutuhan ruang)',
      distractors: ['Intervening opportunity penghambat rute', 'Spatial transferability yang terputus total', 'Zero sum game persaingan sengit'],
      explanation: 'Saling melengkapi (complementarity) terjadi ketika dua daerah memiliki surplus komoditas yang berbeda.'
    },
    {
      subtopic: 'Modernisasi Pertanian',
      competency: 'Menganalisis dampak panca usaha tani bagi ketahanan pangan',
      question: 'Penerapan panca usaha tani (pengolahan tanah yang baik, pengairan teratur, pupuk berimbang, bibit unggul, dan pemberantasan hama) bertujuan utama untuk...',
      correctText: 'Meningkatkan produktivitas hasil panen secara intensif demi ketahanan pangan',
      distractors: ['Mengubah seluruh lahan sawah menjadi area industri pabrik', 'Menggantikan tenaga petani manusia dengan teknologi nuklir', 'Membatasi penjualan gabah beras hanya ke luar negeri'],
      explanation: 'Intensifikasi pertanian panca usaha tani dirancang untuk mendongkrak hasil panen lahan sawah.'
    },
    {
      subtopic: 'Peranan Wanita dalam Pergerakan Nasional',
      competency: 'Menganalisis Kongres Perempuan Pertama 1928',
      question: 'Kongres Perempuan Indonesia I diselenggarakan di Yogyakarta pada 22-25 Desember 1928. Peristiwa bersejarah ini kini diperingati secara nasional sebagai...',
      correctText: 'Hari Ibu',
      distractors: ['Hari Kartini', 'Hari Kebangkitan Nasional', 'Hari Pahlawan'],
      explanation: '22 Desember ditetapkan sebagai Hari Ibu memperingati Kongres Perempuan Pertama tahun 1928.'
    },
    {
      subtopic: 'Koperasi Simpan Pinjam',
      competency: 'Menganalisis pembagian Sisa Hasil Usaha (SHU)',
      question: 'Sisa Hasil Usaha (SHU) yang dibagikan kepada anggota koperasi madrasah pada akhir tahun buku dihitung berdasarkan...',
      correctText: 'Besarnya jasa usaha (transaksi belanja) dan jasa modal simpanan masing-masing anggota',
      distractors: ['Tingginya jabatan struktural anggota dalam kepengurusan', 'Jumlah anggota keluarga yang terdaftar di kartu keluarga', 'Lama waktu mengantre di kasir toko madrasah'],
      explanation: 'SHU dibagikan adil sesuai kontribusi partisipasi transaksi dan modal anggota.'
    },
    {
      subtopic: 'Konservasi Lingkungan Hidup',
      competency: 'Menerapkan prinsip pembangunan berkelanjutan (SDGs)',
      question: 'Prinsip pembangunan berkelanjutan (sustainable development) menekankan bahwa pemanfaatan sumber daya alam saat ini harus...',
      correctText: 'Memenuhi kebutuhan generasi sekarang tanpa mengorbankan hak pemenuhan generasi mendatang',
      distractors: ['Dieksploitasi semaksimal mungkin demi keuntungan cepat hari ini', 'Ditinggalkan sepenuhnya tanpa boleh dimanfaatkan sedikit pun', 'Dialihkan kepemilikannya kepada perusahaan asing raksasa'],
      explanation: 'Pembangunan berkelanjutan menjamin kelestarian sumber daya untuk generasi masa depan.'
    }
  ];

  return buildUniqueSubjectBank({
    subjectId: 'ips',
    subjectName: 'IPS Terpadu MTs',
    categoryId: 'umum',
    categoryName: 'Umum MTs',
    akgtkCategory: 'Umum',
    educationLevel: 'MTs',
    idPrefix: 'mts-ips-',
    totalTarget: 60,
    generator: (i, diff, num) => {
      const item = items[i % items.length];
      return {
        subtopic: item.subtopic,
        competency: item.competency,
        question: item.question,
        correctText: item.correctText,
        distractors: item.distractors,
        explanation: item.explanation,
        tip: 'Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.'
      };
    }
  });
}

module.exports = {
  generateBahasaIndonesiaMTs,
  generateBahasaInggrisMTs,
  generateIpsMTs
};
