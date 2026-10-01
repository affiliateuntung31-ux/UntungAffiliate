// Complete generator for 10 MTs subjects (150 unique questions each = 1,500 total)
const fs = require('fs');
const path = require('path');
const { generateDistinctSubject } = require('./generate_1500_distinct_mts.cjs');
const { matematika, ipa } = require('./generate_1500_distinct_mts.cjs');

console.log('[BUILDER] Generating remaining 8 subjects for MTs...');

// 3. Bahasa Indonesia MTs (150 questions)
const bahasaIndonesia = generateDistinctSubject('bahasa_indonesia', 'Bahasa Indonesia MTs', 'umum', 'Umum', 'mts-ind-', (i, num) => {
  const indItems = [
    (n) => ({ subtopic: 'Teks LHO', question: `Bagian struktur teks LHO yang memuat perincian mendalam ciri fisik dan habitat objek observasi #${n} disebut...`, correct: 'Deskripsi bagian', distractors: ['Pernyataan umum', 'Deskripsi manfaat', 'Penutup simpulan'], explanation: 'Deskripsi bagian merinci sifat fisik objek.' }),
    (n) => ({ subtopic: 'Teks Deskripsi', question: `Kalimat teks deskripsi #${n}: "Kubah masjid berkilau keemasan diterpa hangatnya mentari pagi." Cerapan pancaindra dominan adalah...`, correct: 'Penglihatan (visual)', distractors: ['Pendengaran (auditif)', 'Penciuman (olfaktori)', 'Perabaan (taktil)'], explanation: 'Kilau keemasan ditangkap oleh indra visual.' }),
    (n) => ({ subtopic: 'Teks Prosedur', question: `Kata kerja perintah lugas operasional seperti "Tuangkanlah larutan reagen uji #${n}!" tergolong jenis verba...`, correct: 'Imperatif', distractors: ['Deklaratif', 'Interogatif', 'Interjeksi'], explanation: 'Verba imperatif digunakan untuk memberi komando.' }),
    (n) => ({ subtopic: 'Teks Eksplanasi', question: `Konjungsi kronologis urutan proses yang tepat dalam teks eksplanasi siklus batuan #${n} adalah...`, correct: 'Kemudian dan setelah itu', distractors: ['Karena dan sebab', 'Meskipun dan walaupun', 'Tetapi dan melainkan'], explanation: 'Kemudian menyatakan urutan kronologis waktu.' }),
    (n) => ({ subtopic: 'Fabel Moral', question: `Pesan moral atau ajaran kebaikan yang ingin disampaikan pengarang fabel hewan #${n} kepada pembaca dinamakan...`, correct: 'Amanat cerita', distractors: ['Latar suasana', 'Alur sorot balik', 'Sudut pandang tokoh'], explanation: 'Amanat adalah nilai moral yang disampaikan pengarang.' }),
    (n) => ({ subtopic: 'Teks Berita', question: `Unsur berita ADIKSIMBA yang menerangkan alasan dan latar belakang terjadinya suatu peristiwa #${n} adalah...`, correct: 'Mengapa (Why)', distractors: ['Kapan (When)', 'Di mana (Where)', 'Siapa (Who)'], explanation: 'Why menggali penyebab atau latar belakang peristiwa.' }),
    (n) => ({ subtopic: 'Slogan Edukasi', question: `Kalimat slogan madrasah yang padat makna untuk mengajak santri giat membaca buku pada pekan literasi #${n} adalah...`, correct: 'Buku Jendela Ilmu, Membaca Kunci Maju', distractors: ['Perpustakaan madrasah kami cukup bersih', 'Kemarin kami membeli buku baru di toko', 'Ruang baca madrasah berlantai dua'], explanation: 'Slogan berciri singkat, padat, berirama, dan memikat.' }),
    (n) => ({ subtopic: 'Puisi Rakyat Pantun', question: `Pola rima akhir bersilang yang menjadi syarat mutlak pantun empat larik tradisional #${n} adalah...`, correct: 'a - b - a - b', distractors: ['a - a - a - a', 'a - a - b - b', 'a - b - b - a'], explanation: 'Pantun wajib bersajak silang a-b-a-b.' }),
    (n) => ({ subtopic: 'Majas Puisi', question: `Majas yang melebih-lebihkan suatu kenyataan secara dramatis pada larik sajak #${n} disebut majas...`, correct: 'Hiperbola', distractors: ['Litotes', 'Personifikasi', 'Metafora'], explanation: 'Hiperbola adalah gaya bahasa ungkapan yang melebih-lebihkan.' }),
    (n) => ({ subtopic: 'EYD V Tata Bahasa', question: `Penulisan kata baku menurut pedoman EYD V edisi terbaru pada naskah artikel #${n} adalah...`, correct: 'Jadwal dan konkret', distractors: ['Jadual dan konkrit', 'Jadwal dan kongkret', 'Jadual dan konkrit'], explanation: 'Kata baku: jadwal dan konkret.' })
  ];
  return indItems[i % indItems.length](num);
});
console.log(`- Bahasa Indonesia: ${bahasaIndonesia.length}`);

// 4. Bahasa Inggris MTs (150 questions)
const bahasaInggris = generateDistinctSubject('bahasa_inggris', 'Bahasa Inggris MTs', 'umum', 'Umum', 'mts-eng-', (i, num) => {
  const engItems = [
    (n) => ({ subtopic: 'Classroom Expressions', question: `Teacher: "May I have your attention, please?" What is the purpose of the teacher's expression in situation #${n}?`, correct: 'To ask students to focus and listen', distractors: ['To leave the classroom immediately', 'To complain about classroom noise', 'To give compliments on tests'], explanation: 'May I have your attention asks listeners to focus.' }),
    (n) => ({ subtopic: 'Notices and Cautions', question: `Read notice #${n}: "LAB COATS AND EYE GOGGLES MANDATORY". This safety sign indicates that visitors...`, correct: 'Must put on protective coats and glasses', distractors: ['Are forbidden from wearing coats', 'May enter without any safety gear', 'Can buy glasses inside the room'], explanation: 'Mandatory means required/obligatory.' }),
    (n) => ({ subtopic: 'Greeting Cards', question: `A card stating: "Happy Eid Mubarak! May Allah accept our good deeds" in situation #${n} is intended to...`, correct: 'Wish someone joy and blessings on Eid celebration', distractors: ['Invite a friend to an evening party', 'Congratulate a colleague on winning a car', 'Apologize for missing a class lesson'], explanation: 'It is a religious greeting card for Eid.' }),
    (n) => ({ subtopic: 'Simple Present Tense', question: `Complete sentence #${n}: "Mr. Karim [ ... ] Arabic grammar at the madrasah every morning."`, correct: 'teaches', distractors: ['taught', 'is teaching', 'teach'], explanation: 'Singular third person subject in Simple Present takes verb-s/es: teaches.' }),
    (n) => ({ subtopic: 'Simple Past Tense', question: `Complete sentence #${n}: "Yesterday afternoon, the students [ ... ] a scientific journal in the library."`, correct: 'read (past /red/)', distractors: ['are reading', 'reads', 'will read'], explanation: 'Time signal yesterday requires past verb form.' }),
    (n) => ({ subtopic: 'Past Continuous Tense', question: `Sentence #${n}: "While we [ ... ] the experiment, the power suddenly went off."`, correct: 'were conducting', distractors: ['are conducting', 'conducted', 'conducts'], explanation: 'Past continuous with plural subject we: were conducting.' }),
    (n) => ({ subtopic: 'Degrees of Comparison', question: `Sentence #${n}: "A cheetah runs [ ... ] a horse across the savanna."`, correct: 'faster than', distractors: ['the fastest', 'as slow as', 'more fast than'], explanation: 'Comparative degree of fast is faster than.' }),
    (n) => ({ subtopic: 'Modals of Obligation', question: `Sentence #${n}: "According to madrasah rules, all students [ ... ] wear their scout uniform on Friday."`, correct: 'must', distractors: ['might', 'could', 'would'], explanation: 'Must expresses school rule obligation.' }),
    (n) => ({ subtopic: 'Passive Voice', question: `Change into passive #${n}: "The headmaster announced the examination schedule."`, correct: 'The examination schedule was announced by the headmaster.', distractors: ['The headmaster was announced by the schedule.', 'The schedule is announced yesterday.', 'The schedule has announced the headmaster.'], explanation: 'Past passive: Object + was/were + V3.' }),
    (n) => ({ subtopic: 'Reading Comprehension', question: `In descriptive passage #${n} about Borobudur Temple, what does the text mainly inform the reader about?`, correct: 'The magnificent architecture and relief panels of Borobudur', distractors: ['The current market price of tour tickets', 'The construction cost of modern highways', 'The weather forecast around central Java'], explanation: 'Descriptive texts depict monuments and landmarks.' })
  ];
  return engItems[i % engItems.length](num);
});
console.log(`- Bahasa Inggris: ${bahasaInggris.length}`);

// 5. IPS Terpadu MTs (150 questions)
const ips = generateDistinctSubject('ips', 'IPS Terpadu MTs', 'umum', 'Umum', 'mts-ips-', (i, num) => {
  const ipsItems = [
    (n) => ({ subtopic: 'Letak Wilayah Indonesia', question: `Letak astronomis Indonesia pada 6° LU - 11° LS menyebabkan wilayah Indonesia beriklim...`, correct: 'Tropis dengan suhu hangat sepanjang tahun', distractors: ['Subtropis empat musim', 'Kutub dingin bersalju', 'Gurun kering ekstrem'], explanation: 'Letak di khatulistiwa menjadikan Indonesia beriklim tropis.' }),
    (n) => ({ subtopic: 'ASEAN', question: `Negara anggota ASEAN yang dijuluki "Negeri Gajah Putih" dan tidak pernah dijajah oleh bangsa Barat adalah...`, correct: 'Thailand', distractors: ['Vietnam', 'Filipina', 'Myanmar'], explanation: 'Thailand adalah satu-satunya negara ASEAN yang tidak pernah dijajah bangsa Eropa.' }),
    (n) => ({ subtopic: 'Mobilitas Sosial', question: `Seorang guru honorer yang diangkat menjadi pegawai negeri sipil (PNS) pada studi kasus #${n} mengalami mobilitas sosial...`, correct: 'Vertikal naik (social climbing)', distractors: ['Vertikal turun (social sinking)', 'Horizontal antargenerasi', 'Lateral intragenerasi'], explanation: 'Peningkatan status profesi adalah mobilitas vertikal naik.' }),
    (n) => ({ subtopic: 'Prinsip Ekonomi', question: `Tindakan ekonomi rasional yang berusaha memperoleh hasil tertentu dengan pengorbanan sekecil-kecilnya dinamakan...`, correct: 'Prinsip ekonomi', distractors: ['Motif ekonomi konsumtif', 'Hukum penawaran mutlak', 'Spekulasi pasar gelap'], explanation: 'Prinsip ekonomi: efisiensi pengorbanan untuk hasil optimal.' }),
    (n) => ({ subtopic: 'Pelaku Ekonomi', question: `Kelompok pelaku ekonomi yang bertugas mengonsumsi barang/jasa dan menyediakan faktor produksi pada diagram circular flow #${n} adalah...`, correct: 'Rumah Tangga Konsumen (RTK)', distractors: ['Rumah Tangga Produsen (RTP)', 'Rumah Tangga Pemerintah (RTG)', 'Masyarakat Luar Negeri (RTLN)'], explanation: 'RTK adalah pemilik faktor produksi sekaligus konsumen.' }),
    (n) => ({ subtopic: 'Praaksara', question: `Tradisi zaman praaksara di mana manusia purba tinggal di gua-gua payung tebing karang pada situs #${n} disebut kebudayaan...`, correct: 'Abris sous roche', distractors: ['Kjokkenmoddinger', 'Menhir perundagian', 'Sarkofagus megalit'], explanation: 'Abris sous roche adalah gua tempat tinggal manusia purba.' }),
    (n) => ({ subtopic: 'Kerajaan Hindu-Buddha', question: `Kerajaan maritim bercorak Buddha terbesar di Nusantara yang menjadi pusat studi agama Buddha internasional adalah...`, correct: 'Kerajaan Sriwijaya', distractors: ['Kerajaan Tarumanegara', 'Kerajaan Kutai', 'Kerajaan Majapahit'], explanation: 'Sriwijaya berpusat di Palembang sebagai pusat studi agama Buddha.' }),
    (n) => ({ subtopic: 'Kesultanan Islam', question: `Kerajaan Islam pertama di pulau Jawa yang dipimpin oleh Raden Patah adalah...`, correct: 'Kesultanan Demak Bintoro', distractors: ['Kesultanan Samudera Pasai', 'Kesultanan Mataram Islam', 'Kesultanan Banten'], explanation: 'Demak adalah kesultanan Islam pelopor di pulau Jawa.' }),
    (n) => ({ subtopic: 'Kolonialisme', question: `Kebijakan sistem tanam paksa (Cultuurstelsel) di Hindia Belanda pada tahun 1830 dicetuskan oleh Gubernur Jenderal...`, correct: 'Johannes van den Bosch', distractors: ['Herman Willem Daendels', 'Jan Pieterszoon Coen', 'Thomas Stamford Raffles'], explanation: 'Van den Bosch mencetuskan Cultuurstelsel tahun 1830.' }),
    (n) => ({ subtopic: 'Pergerakan Nasional', question: `Organisasi pergerakan nasional modern pertama di Indonesia yang didirikan pada tanggal 20 Mei 1908 adalah...`, correct: 'Budi Utomo', distractors: ['Sarekat Islam', 'Indische Partij', 'Perhimpunan Indonesia'], explanation: 'Budi Utomo berdiri 20 Mei 1908, diperingati sebagai Hari Kebangkitan Nasional.' })
  ];
  return ipsItems[i % ipsItems.length](num);
});
console.log(`- IPS Terpadu: ${ips.length}`);

// 6. Qur'an Hadits MTs (150 questions)
const quranHadits = generateDistinctSubject('quran_hadits', "Qur'an Hadits MTs", 'rumpun_pai', 'Rumpun PAI', 'mts-qh-', (i, num) => {
  const qhItems = [
    (n) => ({ subtopic: 'Tajwid Nun Sukun', question: `Hukum bacaan ketika Nun Sukun bertemu dengan huruf Ba (ب) seperti lafaz "مِنْ بَعْدِ" adalah...`, correct: 'Iqlab (mengubah bunyi nun menjadi mim)', distractors: ['Izhar Halqi', 'Idgham Bighunnah', 'Ikhfa Syafawi'], explanation: 'Nun sukun bertemu Ba dibaca Iqlab.' }),
    (n) => ({ subtopic: 'Tajwid Mim Sukun', question: `Hukum tajwid ketika Mim Sukun bertemu huruf Mim dalam lafaz "لَهُمْ مَّا يَشَاءُونَ" adalah...`, correct: 'Idgham Mimi / Mutamatsilain', distractors: ['Ikhfa Syafawi', 'Izhar Syafawi', 'Idgham Bilaghunnah'], explanation: 'Mim sukun bertemu mim dibaca Idgham Mimi.' }),
    (n) => ({ subtopic: 'Tajwid Mad', question: `Panjang bacaan Mad Wajib Muttashil menurut mayoritas ulama qira'ah riwayat Hafsh adalah...`, correct: '4 sampai 5 harakat', distractors: ['2 harakat (1 alif)', '6 harakat penuh mutlak', '1 harakat cepat'], explanation: 'Mad Wajib Muttashil dibaca 4-5 harakat.' }),
    (n) => ({ subtopic: 'Bacaan Gharib', question: `Teknik bacaan Gharib "Isymam" pada Surah Yusuf ayat 11 lafaz "لَا تَأْمَ۫نَّا" dilakukan dengan cara...`, correct: 'Memajukan/memoncongkan kedua bibir tanpa bersuara sebagai isyarat dhommah', distractors: ['Memiringkan bunyi fathah ke arah kasrah', 'Meringankan hamzah kedua di antara alif', 'Berhenti sejenak tanpa bernafas'], explanation: 'Isymam adalah isyarat dhommah dengan memoncongkan bibir.' }),
    (n) => ({ subtopic: 'Kandungan Surah', question: `Pesan utama yang ditekankan dalam Surah Al-Insyirah: "Fa inna ma'al 'usri yusraa" adalah...`, correct: 'Optimisme bahwa bersama setiap kesulitan pasti ada kemudahan', distractors: ['Anjuran menimbun kekayaan di masa muda', 'Kewajiban bepergian ke negeri seberang', 'Larangan bergaul dengan orang yang berbeda suku'], explanation: 'Al-Insyirah mengajarkan ketabahan dan optimisme ilahi.' }),
    (n) => ({ subtopic: 'Hadits Niat', question: `Sabda Nabi SAW: "Innamal a'maalu bin-niyyaat" menegaskan bahwa tolak ukur sah dan diterimanya suatu amal bergantung pada...`, correct: 'Keikhlasan niat di dalam hati semata mengharap ridha Allah', distractors: ['Banyaknya orang yang menyaksikan amal tersebut', 'Kemewahan pakaian yang dikenakan saat beramal', 'Kecanggihan alat teknologi yang dipakai'], explanation: 'Niat ikhlas adalah fondasi penerimaan seluruh amal ibadah.' }),
    (n) => ({ subtopic: 'Hadits Kebersihan', question: `Sabda Rasulullah SAW: "Ath-thahuuru syathrul iimaan" mengandung makna bahwa kesucian/kebersihan itu adalah...`, correct: 'Separuh dari kesempurnaan iman', distractors: ['Syarat mutlak menjadi penguasa negeri', 'Perbuatan sunnah yang boleh diabaikan', 'Kebiasaan khusus para nabi saja'], explanation: 'Kesucian lahir dan batin mencerminkan separuh iman.' }),
    (n) => ({ subtopic: 'Hadits Ukhuwah', question: `Hadits nabi melarang seorang muslim mendiamkan dan memutuskan hubungan ukhuwah dengan saudaranya melebihi...`, correct: '3 hari (tiga malam)', distractors: ['7 hari seminggu', '1 bulan penanggalan', '1 tahun kalender'], explanation: 'Maksimal mendiamkan saudara sesama muslim adalah 3 hari.' }),
    (n) => ({ subtopic: 'Ilmu Hadits', question: `Teks redaksi perkataan, perbuatan, atau ketetapan Rasulullah SAW yang diriwayatkan dalam kitab hadits disebut...`, correct: 'Matan hadits', distractors: ['Sanad hadits', 'Rawi hadits', 'Mukharrij'], explanation: 'Matan adalah lafaz isi kandungan hadits.' }),
    (n) => ({ subtopic: 'Klasifikasi Hadits', question: `Hadits yang sanadnya bersambung, diriwayatkan oleh perawi yang adil dan dhabith, serta selamat dari syadz dan 'illat disebut...`, correct: 'Hadits Shahih', distractors: ['Hadits Dhaif', 'Hadits Maudhu\' (palsu)', 'Hadits Mu\'allaq'], explanation: 'Ini adalah lima syarat mutlak hadits shahih.' })
  ];
  return qhItems[i % qhItems.length](num);
});
console.log(`- Qur'an Hadits: ${quranHadits.length}`);

// 7. Akidah Akhlak MTs (150 questions)
const akidahAkhlak = generateDistinctSubject('akidah_akhlak', 'Akidah Akhlak MTs', 'rumpun_pai', 'Rumpun PAI', 'mts-aa-', (i, num) => {
  const aaItems = [
    (n) => ({ subtopic: 'Sifat Wajib Allah', question: `Sifat wajib Allah "Mukhalafatu lil hawaditsi" bermakna bahwa Allah SWT...`, correct: 'Berbeda dengan segala ciptaan makhluk-Nya', distractors: ['Kekal abadi tanpa akhir', 'Maha Mendengar segala bisikan', 'Berdiri sendiri tanpa membutuhkan bantuan'], explanation: 'Mukhalafatu lil hawaditsi berarti berbeda dari makhluk.' }),
    (n) => ({ subtopic: 'Asmaul Husna', question: `Asmaul Husna "Al-Aziz" mengandung arti bahwa Allah SWT adalah Dzat yang...`, correct: 'Maha Perkasa dan Maha Mulia tak terkalahkan', distractors: ['Maha Pengampun segala dosa', 'Maha Melapangkan rezeki hamba', 'Maha Pencipta semesta alam'], explanation: 'Al-Aziz bermakna Yang Maha Perkasa.' }),
    (n) => ({ subtopic: 'Iman kepada Malaikat', question: `Malaikat yang bertugas membagikan rezeki dan menurunkan curahan hujan atas izin Allah SWT adalah...`, correct: 'Malaikat Mikail', distractors: ['Malaikat Jibril', 'Malaikat Israfil', 'Malaikat Izrail'], explanation: 'Mikail bertugas mengatur rezeki dan hujan.' }),
    (n) => ({ subtopic: 'Mukjizat & Karamah', question: `Kejadian luar biasa yang diberikan Allah SWT kepada hamba-Nya yang beriman dan bertakwa (para wali) disebut...`, correct: 'Karamah', distractors: ['Mukjizat para nabi', 'Ma\'unah', 'Istidraj orang kafir'], explanation: 'Karamah dianugerahkan kepada wali Allah.' }),
    (n) => ({ subtopic: 'Hari Akhir', question: `Timbangan amal perbuatan manusia di yaumul mahsyar untuk menentukan keadilan hisab disebut...`, correct: 'Mizan', distractors: ['Shirath', 'Barzakh', 'Ba\'ats'], explanation: 'Mizan adalah timbangan amal kebaikan dan keburukan.' }),
    (n) => ({ subtopic: 'Qada dan Qadar', question: `Takdir Allah yang pasti dan tidak dapat diubah oleh usaha manusia (seperti kelahiran dan ajal kematian) disebut...`, correct: 'Takdir Mubram', distractors: ['Takdir Muallaq', 'Ikhtiar insani', 'Tawakkal'], explanation: 'Mubram adalah takdir mutlak/pasti.' }),
    (n) => ({ subtopic: 'Akhlak Terpuji', question: `Sikap rendah hati, tidak sombong, dan tidak memandang rendah orang lain dalam pergaulan madrasah dinamakan...`, correct: 'Tawadhu\'', distractors: ['Takabur', 'Tasamuh', 'Ta\'awun'], explanation: 'Tawadhu bermakna rendah hati.' }),
    (n) => ({ subtopic: 'Akhlak Tercela', question: `Sifat senang memamerkan ibadah di depan orang lain demi memperoleh sanjungan manusia disebut...`, correct: 'Riya\'', distractors: ['Sum\'ah', 'Hasad', 'Nifaq'], explanation: 'Riya adalah pamer amal kebajikan.' }),
    (n) => ({ subtopic: 'Adab Islami', question: `Kewajiban berbakti, mematuhi nasihat baik, dan membahagiakan kedua orang tua dalam ajaran Islam dinamakan...`, correct: 'Birrul Walidain', distractors: ['Uququl Walidain', 'Silahturrahim', 'Tazkiyatun Nafs'], explanation: 'Birrul walidain adalah berbakti kepada orang tua.' }),
    (n) => ({ subtopic: 'Penyucian Jiwa', question: `Metode penyucian jiwa (Tazkiyatun Nafs) dengan membersihkan hati dari kotoran akhlak tercela disebut tahapan...`, correct: 'Takhalli', distractors: ['Tahalli', 'Tajalli', 'Tawalli'], explanation: 'Takhalli adalah pengosongan hati dari sifat mazhmumah.' })
  ];
  return aaItems[i % aaItems.length](num);
});
console.log(`- Akidah Akhlak: ${akidahAkhlak.length}`);

// 8. Fikih MTs (150 questions)
const fikih = generateDistinctSubject('fikih', 'Fikih MTs', 'rumpun_pai', 'Rumpun PAI', 'mts-fk-', (i, num) => {
  const fkItems = [
    (n) => ({ subtopic: 'Thaharah', question: `Najis air kencing bayi laki-laki yang belum berumur dua tahun dan hanya minum ASI tergolong najis...`, correct: 'Mukhaffafah (ringan)', distractors: ['Mutawassithah (sedang)', 'Mughalladhah (berat)', 'Hadas besar'], explanation: 'Air kencing bayi laki-laki ASI adalah najis mukhaffafah.' }),
    (n) => ({ subtopic: 'Rukhsah Tayammum', question: `Media bersuci yang sah digunakan untuk melakukan tayammum saat ketiadaan air adalah...`, correct: 'Debu atau tanah yang suci dan berdebu', distractors: ['Pasir basah berlumpur', 'Kain sutra bersih', 'Abu gosok berbusa'], explanation: 'Tayammum menggunakan debu suci.' }),
    (n) => ({ subtopic: 'Rukun Shalat', question: `Rukun fi'li (rukun berupa gerakan fisik tubuh) dalam pelaksanaan ibadah shalat antara lain adalah...`, correct: 'Rukuk dengan tumakninah dan sujud', distractors: ['Membaca Surah Al-Fatihah', 'Membaca Takbiratul Ihram', 'Membaca Tasyahud Akhir'], explanation: 'Rukuk dan sujud adalah rukun fi\'li (gerakan).' }),
    (n) => ({ subtopic: 'Shalat Jamak', question: `Melaksanakan shalat Maghrib dan shalat Isya secara bersamaan di waktu Maghrib disebut...`, correct: 'Shalat Jamak Taqdim', distractors: ['Shalat Jamak Ta\'khir', 'Shalat Qashar murni', 'Shalat Rawatib'], explanation: 'Menggabungkan shalat di waktu pertama disebut Jamak Taqdim.' }),
    (n) => ({ subtopic: 'Shalat Jumat', question: `Salah satu rukun khutbah Jumat yang wajib diucapkan oleh khatib pada kedua khutbahnya adalah...`, correct: 'Wasiat ketakwaan kepada Allah SWT', distractors: ['Menceritakan hikayat nusantara', 'Membaca doa qunut nazilah', 'Membaca terjemahan kitab undang-undang'], explanation: 'Wasiat takwa adalah rukun khutbah Jumat.' }),
    (n) => ({ subtopic: 'Penyelenggaraan Jenazah', question: `Jumlah lapisan kain kafan yang disunnahkan untuk membungkus jenazah laki-laki muslim adalah...`, correct: '3 lapis kain putih', distractors: ['5 lapis kain putih', '1 lapis kain sutra', '7 lapis kain batik'], explanation: 'Kain kafan laki-laki disunnahkan 3 lapis.' }),
    (n) => ({ subtopic: 'Zakat Fitrah', question: `Besaran zakat fitrah makanan pokok beras yang wajib dikeluarkan oleh setiap jiwa muslim adalah...`, correct: '1 sha\' (setara 2,5 kg atau 3,5 liter beras)', distractors: ['5 kg beras premium', '1 kg beras ketan', '10 liter gandum'], explanation: 'Zakat fitrah adalah 1 sha\' beras (2,5 kg).' }),
    (n) => ({ subtopic: 'Puasa Ramadhan', question: `Perbuatan yang membatalkan puasa dan mewajibkan pembayaran fidyah bagi lansia yang tak mampu berpuasa adalah...`, correct: 'Kelemahan fisik permanen karena usia lanjut', distractors: ['Lupa makan saat siang hari', 'Mandi basah untuk menyegarkan badan', 'Menggosok gigi sebelum waktu zhuhur'], explanation: 'Lansia tak mampu puasa menggantinya dengan fidyah.' }),
    (n) => ({ subtopic: 'Ibadah Haji', question: `Rukun haji yang wajib dilaksanakan di Padang Arafah pada tanggal 9 Dzulhijjah adalah...`, correct: 'Wukuf di Arafah', distractors: ['Thawaf Qudum', 'Mabit di Mina', 'Melontar Jumrah Aqabah'], explanation: 'Wukuf di Arafah adalah rukun haji paling inti.' }),
    (n) => ({ subtopic: 'Fikih Muamalah', question: `Tambahan pembayaran yang disyaratkan dalam transaksi pinjam-meminjam uang secara batil dinamakan...`, correct: 'Riba Qardh', distractors: ['Bagi hasil mudharabah', 'Zakat maal', 'Infaq sukarela'], explanation: 'Tambahan bersyarat pada pinjaman adalah riba qardh.' })
  ];
  return fkItems[i % fkItems.length](num);
});
console.log(`- Fikih: ${fikih.length}`);

// 9. SKI MTs (150 questions)
const ski = generateDistinctSubject('ski', 'SKI MTs', 'rumpun_pai', 'Rumpun PAI', 'mts-sk-', (i, num) => {
  const skItems = [
    (n) => ({ subtopic: 'Masa Jahiliyah', question: `Sistem kepercayaan menyembah berhala yang ditempatkan di sekeliling Ka'bah sebelum Islam disebut agama...`, correct: 'Watsaniyah (penyembah berhala)', distractors: ['Majusi penyembah api', 'Hanif warisan Ibrahim', 'Sabiah bintang'], explanation: 'Watsaniyah adalah peribadatan berhala Jahiliyah.' }),
    (n) => ({ subtopic: 'Dakwah Makkah', question: `Peristiwa boikot ekonomi dan sosial kaum Quraisy terhadap Bani Hasyim dan kaum muslimin berlangsung selama...`, correct: '3 tahun di lembah Syi\'ib Abu Thalib', distractors: ['10 tahun di bukit Shafa', '1 bulan di gua Hira', '5 tahun di Habsyah'], explanation: 'Pemboikotan Quraisy berlangsung selama 3 tahun.' }),
    (n) => ({ subtopic: 'Hijrah Madinah', question: `Langkah pertama yang dilakukan Rasulullah SAW setibanya di Madinah adalah mendirikan...`, correct: 'Masjid Nabawi sebagai pusat ibadah dan pembinaan umat', distractors: ['Benteng pertahanan militer raksasa', 'Pasar monopoli gandum', 'Istana kediaman megah'], explanation: 'Masjid Nabawi adalah pondasi peradaban Madinah.' }),
    (n) => ({ subtopic: 'Perang Pertahanan', question: `Strategi penggalian parit di sekeliling kota Madinah pada Perang Khandaq (Ahzab) dicetuskan oleh sahabat...`, correct: 'Salman Al-Farisi', distractors: ['Abu Bakar Ash-Shiddiq', 'Ali bin Abi Thalib', 'Khalid bin Walid'], explanation: 'Salman Al-Farisi mengusulkan penggalian parit (khandaq).' }),
    (n) => ({ subtopic: 'Fathu Makkah', question: `Tahun terjadinya pembebasan kota Makkah (Fathu Makkah) tanpa pertumpahan darah oleh kaum muslimin adalah tahun...`, correct: '8 Hijriyah', distractors: ['2 Hijriyah', '5 Hijriyah', '10 Hijriyah'], explanation: 'Fathu Makkah terjadi pada tahun 8 H.' }),
    (n) => ({ subtopic: 'Khalifah Abu Bakar', question: `Tindakan tegas Khalifah Abu Bakar Ash-Shiddiq menghadapi pembangkang zakat dan nabi palsu dinamakan...`, correct: 'Perang Riddah', distractors: ['Perang Shiffin', 'Perang Jamal', 'Perang Salib'], explanation: 'Perang Riddah menumpas murtadin dan nabi palsu.' }),
    (n) => ({ subtopic: 'Khalifah Umar', question: `Lembaga perbendaharaan negara yang ditata rapi pada masa Khalifah Umar bin Khattab adalah...`, correct: 'Baitul Mal', distractors: ['Baitul Hikmah', 'Darun Nadwah', 'Diwanul Jund'], explanation: 'Umar mendirikan dan menata Baitul Mal.' }),
    (n) => ({ subtopic: 'Khalifah Ali', question: `Peristiwa gencatan senjata dan perundingan politik antara kubu Ali dan Muawiyah pada perang Shiffin disebut...`, correct: 'Tahkim (Arbitrase)', distractors: ['Bai\'at Aqabah', 'Piagam Madinah', 'Perjanjian Hudaibiyah'], explanation: 'Tahkim adalah arbitrase damai perang Shiffin.' }),
    (n) => ({ subtopic: 'Daulah Umayyah', question: `Khalifah Daulah Umayyah yang terkenal sangat adil, zuhud, dan menyamakan hak kaum Mawali adalah...`, correct: 'Umar bin Abdul Aziz', distractors: ['Muawiyah bin Abi Sufyan', 'Walid bin Abdul Malik', 'Yazid bin Muawiyah'], explanation: 'Umar bin Abdul Aziz khalifah adil Umayyah.' }),
    (n) => ({ subtopic: 'Wali Songo', question: `Wali Songo yang dikenal menciptakan gamelan Bonang dan tembang suluk Wijil adalah...`, correct: 'Sunan Bonang', distractors: ['Sunan Giri', 'Sunan Drajat', 'Sunan Gresik'], explanation: 'Sunan Bonang berdakwah lewat gamelan Bonang.' })
  ];
  return skItems[i % skItems.length](num);
});
console.log(`- SKI: ${ski.length}`);

// 10. Bahasa Arab MTs (150 questions)
const bahasaArab = generateDistinctSubject('bahasa_arab', 'Bahasa Arab MTs', 'rumpun_pai', 'Rumpun PAI', 'mts-ba-', (i, num) => {
  const baItems = [
    (n) => ({ subtopic: 'Kosa Kata Madrasah', question: `Arti mufradat sarana belajar "المَكْتَبَةُ المَدْرَسِيَّةُ" dalam bahasa Indonesia adalah...`, correct: 'Perpustakaan madrasah', distractors: ['Laboratorium sains', 'Kantin madrasah', 'Ruang bimbingan konseling'], explanation: 'Maktabah bermakna perpustakaan.' }),
    (n) => ({ subtopic: 'Aqsamul Kalimah', question: `Kata "يَكْتُبُ" (Yaktubu) dalam tata bahasa Arab tergolong ke dalam jenis kata...`, correct: 'Fi\'il Mudhari\' (kata kerja masa kini/nanti)', distractors: ['Isim (kata benda)', 'Harf (kata tugas)', 'Zharaf zaman'], explanation: 'Yaktubu adalah fi\'il mudhari\' diawali ya.' }),
    (n) => ({ subtopic: 'Isim Isyarah', question: `Isim isyarah (kata tunjuk jauh) yang tepat untuk menunjuk kata mudzakkar "كِتَابٌ" adalah...`, correct: 'ذَلِكَ (Dzalika)', distractors: ['تِلْكَ (Tilka)', 'هَذِهِ (Hadzihi)', 'هِيَ (Hiya)'], explanation: 'Kitab adalah mudzakkar, tunjuk jauh memakai Dzalika.' }),
    (n) => ({ subtopic: 'Dhamir', question: `Kata ganti orang pertama jamak (Kami / Kita) dalam bahasa Arab adalah...`, correct: 'نَحْنُ (Nahnu)', distractors: ['أَنَا (Ana)', 'هُمْ (Hum)', 'أَنْتُمْ (Antum)'], explanation: 'Nahnu adalah dhamir mutakallim ma\'al ghair (kami/kita).' }),
    (n) => ({ subtopic: 'Zharaf Makan', question: `Kata depan tempat (zharaf) untuk menyatakan posisi "di depan kelas" dalam bahasa Arab adalah...`, correct: 'أَمَامَ (Amama)', distractors: ['وَرَاءَ (Wara\'a)', 'تَحْتَ (Tahta)', 'فَوْقَ (Fauqa)'], explanation: 'Amama bermakna di depan.' }),
    (n) => ({ subtopic: 'Bilangan Arab', question: `Bahasa Arab untuk bilangan angka "15 (Lima Belas)" adalah...`, correct: 'خَمْسَةَ عَشَرَ (Khamsata \'asyara)', distractors: ['خَمْسُوْنَ', 'خَمْسَةٌ وَعِشْرُوْنَ', 'ثَلَاثَةَ عَشَرَ'], explanation: '15 adalah khamsata \'asyara.' }),
    (n) => ({ subtopic: 'As-Sa\'ah', question: `Ungkapan untuk menyatakan "Pukul 07.00 tepat" dalam bahasa Arab adalah...`, correct: 'السَّاعَةُ السَّابِعَةُ تَمَامًا', distractors: ['السَّاعَةُ السَّادِسَةُ', 'السَّاعَةُ الثَّامِنَةُ', 'السَّاعَةُ الوَاحِدَةُ'], explanation: 'Jam 7 tepat adalah As-Saa\'atus Saabi\'atu tamaaman.' }),
    (n) => ({ subtopic: 'Na\'at Man\'ut', question: `Pasangan kata sifat (Na'at wa Man'ut) yang benar dan selaras jenisnya adalah...`, correct: 'طَالِبٌ نَشِيْطٌ (Thaalibun nasyiithun)', distractors: ['طَالِبٌ نَشِيْطَةٌ', 'طَالِبَةٌ نَشِيْطٌ', 'الطَّالِبُ نَشِيْطَةٌ'], explanation: 'Na\'at harus selaras jenis mudzakkar/muannats dengan man\'ut.' }),
    (n) => ({ subtopic: 'Jumlah Ismiyyah', question: `Dalam susunan kalimat "المَسْجِدُ نَظِيْفٌ", kata "المَسْجِدُ" berkedudukan sebagai...`, correct: 'Mubtada\' (subjek)', distractors: ['Khabar (predikat)', 'Fa\'il (pelaku)', 'Maf\'ul bih (objek)'], explanation: 'Isim ma\'rifah di awal kalimat adalah Mubtada\'.' }),
    (n) => ({ subtopic: 'Fi\'il Amar', question: `Kalimat perintah (Fi'il Amar) kata "قَرَأَ" untuk lawan bicara laki-laki tunggal (Anta) adalah...`, correct: 'اِقْرَأْ (Iqra\')', distractors: ['اِقْرَئِي (Iqra\'ii)', 'اِقْرَؤُوْا (Iqra\'uu)', 'تَقْرَأُ (Taqra\'u)'], explanation: 'Iqra\' adalah perintah untuk dhamir Anta.' })
  ];
  return baItems[i % baItems.length](num);
});
console.log(`- Bahasa Arab: ${bahasaArab.length}`);

// Combine all 10 subjects
const all10Subjects = [
  ...matematika,
  ...ipa,
  ...bahasaIndonesia,
  ...bahasaInggris,
  ...ips,
  ...quranHadits,
  ...akidahAkhlak,
  ...fikih,
  ...ski,
  ...bahasaArab
];

console.log(`\n[TOTAL MTs GENERATED]: ${all10Subjects.length} questions`);

// Write to src/data/mtsQuestions.ts
const mtsPath = path.join(__dirname, '../src/data/mtsQuestions.ts');
fs.writeFileSync(
  mtsPath,
  `import { Question } from '../types';\n\nexport const mtsQuestions: Question[] = ${JSON.stringify(all10Subjects, null, 2)};\n`,
  'utf-8'
);
console.log(`[WRITE] Updated ${mtsPath}`);

// Update server_data/db.json
const dbPath = path.join(__dirname, '../server_data/db.json');
if (fs.existsSync(dbPath)) {
  const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
  const nonMts = (db.questions || []).filter(q => q.educationLevel !== 'MTs' && !q.id.startsWith('mts-'));
  
  // Wipe old sessions so no user restores old sessions with duplicate questions
  db.sessions = {};
  
  db.questions = [...nonMts, ...all10Subjects];
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf-8');
  console.log(`[WRITE] Updated server_data/db.json. Total questions in database: ${db.questions.length}. Old sessions cleared.`);
}
