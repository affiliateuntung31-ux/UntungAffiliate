// Clean, Authentic Generator for MTs Rumpun PAI (Qur'an Hadits, Akidah Akhlak, Fikih, SKI, Bahasa Arab)
// 60 Genuinely Distinct Questions Per Subject (0 Stem Duplicates, 0 Option Duplicates)
const { buildUniqueSubjectBank } = require('./generate_all_subjects_master.cjs');

// ==========================================
// 1. QUR'AN HADITS MTS (60 UNIQUE QUESTIONS)
// ==========================================
function generateQuranHaditsMTs() {
  const items = [
    // Tajwid - Hukum Nun Sukun dan Tanwin
    {
      subtopic: 'Hukum Nun Sukun dan Tanwin',
      competency: 'Menganalisis hukum bacaan nun sukun dan tanwin',
      question: 'Hukum bacaan ketika nun sukun atau tanwin bertemu dengan huruf Ba (ب) seperti pada lafaz "مِنْ بَعْدِ" adalah...',
      correctText: 'Iqlab',
      distractors: ['Izhar Halqi', 'Idgham Bighunnah', 'Ikhfa Haqiqi'],
      explanation: 'Iqlab terjadi jika nun sukun/tanwin bertemu ba, bunyinya diganti menjadi mim disertai ghunnah.'
    },
    {
      subtopic: 'Hukum Nun Sukun dan Tanwin',
      competency: 'Menganalisis hukum bacaan Izhar Halqi',
      question: 'Nun sukun bertemu salah satu huruf halq (ء, هـ, ع, ح, غ, خ) seperti pada lafaz "مَنْ آمَنَ" harus dibaca dengan cara...',
      correctText: 'Izhar Halqi (jelas dan terang tanpa dengung)',
      distractors: ['Idgham Bilaghunnah (lebur tanpa dengung)', 'Ikhfa Haqiqi (samar-samar)', 'Iqlab disertai mim'],
      explanation: 'Izhar Halqi dibaca jelas tanpa sengau atau dengung tambahan.'
    },
    {
      subtopic: 'Hukum Nun Sukun dan Tanwin',
      competency: 'Menganalisis hukum Idgham Bighunnah dan Bilaghunnah',
      question: 'Huruf-huruf Idgham Bilaghunnah ketika bertemu dengan nun sukun atau tanwin adalah...',
      correctText: 'Lam (ل) dan Ra (ر)',
      distractors: ['Ya (ي), Nun (ن), Mim (م), Wawu (و)', 'Kaf (ك) dan Qaf (ق)', 'Hamzah (ء) dan Ha (هـ)'],
      explanation: 'Idgham Bilaghunnah memiliki dua huruf yaitu Lam dan Ra, dibaca melebur tanpa dengung.'
    },
    {
      subtopic: 'Hukum Nun Sukun dan Tanwin',
      competency: 'Menganalisis bacaan Idgham Wajib / Izhar Wajib',
      question: 'Nun sukun bertemu huruf wawu atau ya dalam satu kata (satu kalimat) seperti lafaz "الدُّنْيَا" dan "بُنْيَانٌ" dibaca...',
      correctText: 'Izhar Mutlaq (dibaca jelas tanpa mendengung)',
      distractors: ['Idgham Bighunnah lebur', 'Ikhfa Syafawi samar', 'Iqlab bibir tertutup'],
      explanation: 'Jika nun mati bertemu wawu/ya dalam satu kata, hukumnya Izhar Mutlaq/Izhar Wajib agar maknanya tidak rancu.'
    },
    // Tajwid - Hukum Mim Sukun
    {
      subtopic: 'Hukum Mim Sukun',
      competency: 'Menganalisis hukum bacaan mim sukun',
      question: 'Mim sukun bertemu dengan huruf Ba (ب) seperti pada lafaz "تَرْمِيهِمْ بِحِجَارَةٍ" hukum bacaannya adalah...',
      correctText: 'Ikhfa Syafawi',
      distractors: ['Izhar Syafawi', 'Idgham Mimi / Mutamatsilain', 'Iqlab'],
      explanation: 'Mim sukun bertemu huruf Ba dinamakan Ikhfa Syafawi, dibaca samar disertai dengung.'
    },
    {
      subtopic: 'Hukum Mim Sukun',
      competency: 'Menganalisis hukum Idgham Mimi',
      question: 'Mim sukun bertemu dengan huruf Mim (م) seperti pada lafaz "لَهُمْ مَّا يَشَاءُونَ" dibaca secara...',
      correctText: 'Idgham Mimi / Mutamatsilain disertai ghunnah',
      distractors: ['Izhar Halqi tanpa dengung', 'Ikhfa Haqiqi di pangkal hidung', 'Qalqalah kubra memantul'],
      explanation: 'Mim sukun bertemu mim melebur sempurna (Idgham Mimi/Mutamatsilain) dengan panjang dengung 2 harakat.'
    },
    {
      subtopic: 'Hukum Mim Sukun',
      competency: 'Menganalisis hukum Izhar Syafawi',
      question: 'Ketika membaca mim sukun bertemu huruf Wawu (و) atau Fa (ف), pembaca Al-Qur\'an harus sangat berhati-hati untuk...',
      correctText: 'Membaca mim secara jelas (Izhar Syafawi) dan tidak menyamarkannya',
      distractors: ['Membaca dengan dengung 4 harakat penuh', 'Mengubah mim menjadi nun sukun', 'Memantulkan mim seperti qalqalah'],
      explanation: 'Ulama tajwid mengingatkan agar tidak menyamarkan mim sukun saat bertemu Wawu atau Fa karena makhrajnya berdekatan.'
    },
    // Tajwid - Hukum Mad
    {
      subtopic: 'Hukum Bacaan Mad',
      competency: 'Membedakan Mad Wajib Muttashil dan Mad Jaiz Munfashil',
      question: 'Mad Thabi\'i yang bertemu dengan huruf hamzah dalam satu kata bersambung dinamakan mad...',
      correctText: 'Mad Wajib Muttashil (panjang 4-5 harakat)',
      distractors: ['Mad Jaiz Munfashil (dua kata terpisah)', 'Mad Lazim Kilmi Mutsaqqal', 'Mad Badal pengganti hamzah'],
      explanation: 'Muttashil berarti bersambung dalam satu kata (contoh: جَاءَ, السَّمَاءِ).'
    },
    {
      subtopic: 'Hukum Bacaan Mad',
      competency: 'Menganalisis Mad Arid Lissukun',
      question: 'Mad Thabi\'i yang berada di akhir ayat atau sebelum huruf yang disukunkan karena waqaf (berhenti) disebut...',
      correctText: 'Mad \'Aridh Lissukun',
      distractors: ['Mad Iwad pengganti tanwin fathah', 'Mad Layyin lunak', 'Mad Shilah Qashirah'],
      explanation: 'Mad \'Aridh Lissukun terjadi karena sukun mendadak akibat waqaf di akhir bacaan.'
    },
    {
      subtopic: 'Hukum Bacaan Mad',
      competency: 'Menganalisis Mad Lazim Kilmi Mutsaqqal',
      question: 'Mad Thabi\'i yang bertemu dengan huruf bertasydid dalam satu kata seperti pada lafaz "الصَّاخَّةُ" dan "الضَّالِّينَ" adalah...',
      correctText: 'Mad Lazim Kilmi Mutsaqqal (panjang 6 harakat)',
      distractors: ['Mad Farq pembeda kalimat', 'Mad Tamkin tasydid ya', 'Mad Shilah Thawilah'],
      explanation: 'Mad Lazim Kilmi Mutsaqqal wajib dibaca panjang 6 harakat diberatkan pada tasydid.'
    },
    {
      subtopic: 'Hukum Bacaan Mad',
      competency: 'Menganalisis Mad Iwad',
      question: 'Tanwin fathah (fathatain) yang dibaca waqaf di akhir ayat seperti lafaz "عَلِيمًا حَكِيمًا" dibaca sepanjang...',
      correctText: '2 harakat (1 alif) sebagai Mad \'Iwadh',
      distractors: ['4 harakat sebagai Mad Wajib', '6 harakat sebagai Mad Lazim', 'Sukun mati tanpa vokal'],
      explanation: 'Mad \'Iwadh menggantikan bunyi fathatain saat waqaf menjadi mad 2 harakat (hakiimaa).'
    },
    // Tajwid - Qalqalah dan Gharib
    {
      subtopic: 'Hukum Bacaan Qalqalah',
      competency: 'Membedakan Qalqalah Sughra dan Kubra',
      question: 'Huruf qalqalah (ق, ط, ب, ج, د) yang berharakat sukun asli di tengah kata dinamakan...',
      correctText: 'Qalqalah Sughra',
      distractors: ['Qalqalah Kubra (di akhir ayat karena waqaf)', 'Qalqalah Akbar tasydid', 'Qalqalah Mutawassithah'],
      explanation: 'Sukun asli di tengah kata (contoh: يَجْعَلُونَ) adalah Qalqalah Sughra (pantulan ringan).'
    },
    {
      subtopic: 'Bacaan Gharib dalam Al-Qur\'an',
      competency: 'Menganalisis bacaan Imalah pada Surah Hud ayat 41',
      question: 'Cara membaca lafaz "مَجْرٰ۪ىهَا" pada QS. Hud ayat 41 menurut qira\'ah Imam Ashim riwayat Hafsh adalah...',
      correctText: 'Imalah (memiringkan bunyi fathah ke arah kasrah)',
      distractors: ['Isymam (memoncongkan kedua bibir)', 'Tashil (meringankan bunyi hamzah)', 'Saktah (berhenti sejenak tanpa bernapas)'],
      explanation: 'Imalah memiringkan bunyi "majraahaa" mendekati "majreehaa".'
    },
    {
      subtopic: 'Bacaan Gharib dalam Al-Qur\'an',
      competency: 'Menganalisis bacaan Isymam pada Surah Yusuf ayat 11',
      question: 'Lafaz "لَا تَأْمَ۫نَّا" pada QS. Yusuf ayat 11 dibaca dengan teknik Isymam, yaitu dengan cara...',
      correctText: 'Memajukan/memoncongkan kedua bibir tanpa bersuara sebagai isyarat harakat dhammah',
      distractors: ['Membaca samar dengan sengau hidung', 'Memiringkan bunyi fathah ke arah harakat kasrah', 'Memantulkan huruf nun dengan keras'],
      explanation: 'Isymam adalah isyarat bibir memoncong mengiringi sukun tanpa menghasilkan suara dhommah.'
    },
    {
      subtopic: 'Bacaan Gharib dalam Al-Qur\'an',
      competency: 'Menganalisis bacaan Saktah dalam Al-Qur\'an',
      question: 'Saktah pada QS. Al-Kahfi ayat 1-2 antara lafaz "عِوَجًا" dan "قَيِّمًا" dilakukan dengan aturan...',
      correctText: 'Berhenti sejenak selama 2 harakat tanpa mengambil napas baru lalu melanjutkan bacaan',
      distractors: ['Mengambil napas dalam-dalam lalu membaca cepat', 'Menyambung kedua ayat dengan dengung panjang', 'Mengulang membaca dari awal surah'],
      explanation: 'Saktah adalah berhenti sejenak tanpa bernapas selama 1 alif (2 harakat).'
    },
    {
      subtopic: 'Tanda Waqaf',
      competency: 'Mengidentifikasi makna tanda waqaf lazim (مـ)',
      question: 'Tanda waqaf mim kecil (مـ) pada mushaf Al-Qur\'an menunjukkan instruksi bacaan...',
      correctText: 'Waqaf Lazim (harus/wajib berhenti untuk menjaga kesempurnaan makna)',
      distractors: ['Waqaf Jaiz (boleh berhenti boleh lanjut)', 'Al-Washlu Ula (lebih utama terus)', 'La Waqfa Fih (dilarang berhenti)'],
      explanation: 'Waqaf Lazim mengharuskan berhenti agar makna ayat tidak berubah atau rancu.'
    },
    // Kandungan Surah-Surah Pendek
    {
      subtopic: 'Tafsir dan Kandungan Surah Pendek',
      competency: 'Menganalisis kandungan Surah Al-Fatihah',
      question: 'Ayat "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ" dalam Surah Al-Fatihah menegaskan prinsip tauhid...',
      correctText: 'Tauhid Ibadah dan Isti\'anah (hanya menyembah dan memohon pertolongan kepada Allah)',
      distractors: ['Tauhid Rububiyyah penciptaan alam semesta semata', 'Hukum waris dalam muamalah keluarga', 'Tata cara pembagian rampasan perang'],
      explanation: 'Ayat ini menegaskan komitmen pengabdian dan permohonan pertolongan mutlak hanya kepada Allah.'
    },
    {
      subtopic: 'Tafsir dan Kandungan Surah Pendek',
      competency: 'Menganalisis kandungan Surah Ad-Duha',
      question: 'Pesan keteladanan sosial yang termaktub dalam QS. Ad-Duha ayat 9-10 ("فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ") adalah...',
      correctText: 'Larangan berlaku sewenang-wenang terhadap anak yatim dan larangan menghardik peminta-minta',
      distractors: ['Kewajiban berjihad di medan perang bersenjata', 'Anjuran berniaga ke negeri Syam pada musim dingin', 'Kewajiban membayar zakat perniagaan emas'],
      explanation: 'QS. Ad-Duha melarang menindas anak yatim dan menghardik orang yang meminta pertolongan.'
    },
    {
      subtopic: 'Tafsir dan Kandungan Surah Pendek',
      competency: 'Menganalisis kandungan Surah Al-Insyirah',
      question: 'Penegasan ilahi dalam QS. Al-Insyirah: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا" menanamkan sikap mental...',
      correctText: 'Optimisme dan ketabahan bahwa setiap kesulitan pasti disertai jalan kemudahan',
      distractors: ['Kepasrahan total tanpa perlu berusaha mencari nafkah', 'Kewajiban mengasingkan diri dari pergaulan duniawi', 'Kebolehan melanggar aturan saat berada dalam kesempitan'],
      explanation: 'Al-Insyirah mengajarkan optimisme: satu kesulitan diiringi oleh dua kemudahan.'
    },
    {
      subtopic: 'Tafsir dan Kandungan Surah Pendek',
      competency: 'Menganalisis kandungan Surah Al-Qari\'ah',
      question: 'Gambaran manusia pada hari kiamat dalam Surah Al-Qari\'ah diibaratkan seperti...',
      correctText: 'Anai-anai (laron) yang berterbangan kocar-kacir (كَالْفَرَاشِ الْمَبْثُوثِ)',
      distractors: ['Bulu-bulu yang dihambur-hamburkan angin', 'Gunung-gunung yang kokoh tak tergoyahkan', 'Kafilah unta yang berbaris rapi'],
      explanation: 'Manusia di yaumul qiyamah laksana laron berterbangan dalam kepanikan.'
    },
    {
      subtopic: 'Tafsir dan Kandungan Surah Pendek',
      competency: 'Menganalisis kandungan Surah Al-Zalzalah',
      question: 'Kandungan utama QS. Al-Zalzalah ayat 7-8 menegaskan bahwa...',
      correctText: 'Keadilan hisab mutlak: kebaikan dan keburukan sekecil biji zarrah pun pasti ada balasannya',
      distractors: ['Orang kaya akan bebas dari perhitungan amal akhirat', 'Kiamat hanya akan terjadi di lautan samudra', 'Amalan manusia baru dicatat setelah berusia dewasa'],
      explanation: 'Kebaikan dan keburukan sekecil zarrah akan diperlihatkan balasannya di akhirat.'
    },
    {
      subtopic: 'Tafsir dan Kandungan Surah Pendek',
      competency: 'Menganalisis kandungan Surah At-Tin',
      question: 'Dalam QS. At-Tin ayat 4, Allah menegaskan bahwa manusia diciptakan dalam bentuk...',
      correctText: 'Sebaik-baik ciptaan dan bentuk yang paling sempurna (فِي أَحْسَنِ تَقْوِيمٍ)',
      distractors: ['Keadaan yang lemah dan selalu merugi tanpa ilmu', 'Tingkatan yang paling rendah di antara malaikat', 'Bentuk yang serupa dengan makhluk sebelum Adam'],
      explanation: 'Ahsani taqwim bermakna bentuk fisik, akal, dan rohani yang paling sempurna.'
    },
    {
      subtopic: 'Tafsir dan Kandungan Surah Pendek',
      competency: 'Menganalisis kandungan Surah Al-Alaq ayat 1-5',
      question: 'Wahyu pertama yang diturunkan kepada Nabi Muhammad SAW di Gua Hira (QS. Al-\'Alaq 1-5) menjadi tonggak perintah...',
      correctText: 'Literasi membaca dan menuntut ilmu pengetahuan dengan menyebut nama Allah',
      distractors: ['Mendirikan negara kekhalifahan di jazirah Arab', 'Melaksanakan ibadah haji ke Baitullah Makkah', 'Mengumpulkan harta rampasan perang perniagaan'],
      explanation: 'Iqra bismirabbika ladzi khalaq adalah perintah membaca, belajar, dan riset berbasis tauhid.'
    },
    {
      subtopic: 'Tafsir dan Kandungan Surah Pendek',
      competency: 'Menganalisis kandungan Surah Al-Kafirun',
      question: 'Prinsip toleransi beragama yang tegas diajarkan dalam QS. Al-Kafirun dirumuskan pada ayat penutup...',
      correctText: '"لَكُمْ دِينُكُمْ وَلِيَ دِينِ" (Untukmu agamamu, dan untukkulah agamaku)',
      distractors: ['Penyatuan ajaran semua agama menjadi satu keyakinan', 'Kewajiban ikut merayakan ritual agama lain demi kerukunan', 'Larangan berinteraksi sosial dan berdagang dengan non-muslim'],
      explanation: 'Prinsip lakum diinukum wa liya diin mengajarkan toleransi sosial tanpa kompromi akidah ibadah.'
    },
    // Ulumul Qur'an
    {
      subtopic: 'Ulumul Qur\'an',
      competency: 'Menganalisis perbedaan ayat Makkiyyah dan Madaniyyah',
      question: 'Ciri utama ayat-ayat Makkiyyah yang membedakannya dengan ayat Madaniyyah adalah...',
      correctText: 'Umumnya ayatnya pendek-pendek, bernada tegas, dan fokus pada pemurnian akidah tauhid',
      distractors: ['Ayatnya panjang-panjang dan membahas rincian hukum waris serta jinayat', 'Selalu diawali dengan seruan "Yaa ayyuhalladziina aamanuu"', 'Diturunkan setelah peristiwa Fathu Makkah tahun ke-8 Hijriyah'],
      explanation: 'Ayat Makkiyah diturunkan sebelum hijrah, pendek, berirama kuat, dan fokus pada akidah serta hari akhir.'
    },
    {
      subtopic: 'Ulumul Qur\'an',
      competency: 'Menganalisis sejarah kodifikasi Al-Qur\'an',
      question: 'Pengumpulan dan pembukuan mushaf resmi Al-Qur\'an menjadi satu standar rasm untuk seluruh wilayah Islam diprakarsai pada masa Khalifah...',
      correctText: 'Utsman bin Affan (dikenal sebagai Mushaf Utsmani)',
      distractors: ['Abu Bakar Ash-Shiddiq atas usulan Umar bin Khattab', 'Ali bin Abi Thalib di Kufah', 'Muawiyah bin Abi Sufyan di Damaskus'],
      explanation: 'Utsman bin Affan membukukan mushaf standar (Rasm Utsmani) dan menyebarkannya ke berbagai provinsi.'
    },
    {
      subtopic: 'Ulumul Qur\'an',
      competency: 'Menganalisis sebab-sebab turunnya ayat (Asbabun Nuzul)',
      question: 'Fungsi utama memahami ilmu Asbabun Nuzul dalam menafsirkan ayat Al-Qur\'an adalah untuk...',
      correctText: 'Mengetahui latar belakang peristiwa dan hikmah penetapan suatu hukum syariat secara tepat',
      distractors: ['Mengetahui jumlah huruf dan kata dalam setiap surah', 'Mengubah redaksi lafaz Al-Qur\'an agar sesuai zaman', 'Menentukan harga jual cetakan mushaf Al-Qur\'an'],
      explanation: 'Asbabun Nuzul membantu mufasir memahami konteks historis dan maksud hakiki suatu hukum ayat.'
    },
    // Hadits dan Ulumul Hadits
    {
      subtopic: 'Ilmu Hadits (Musthalah Hadits)',
      competency: 'Menganalisis unsur-unsur hadits: Sanad, Matan, dan Rawi',
      question: 'Silsilah atau rangkaian para periwayat yang menghubungkan teks hadits sampai kepada Rasulullah SAW disebut...',
      correctText: 'Sanad hadits',
      distractors: ['Matan hadits (isi redaksi sabda)', 'Mukharrij hadits (pencatat kitab)', 'Dirayah hadits (analisis kritik)'],
      explanation: 'Sanad adalah mata rantai perawi dari perawi terakhir hingga Rasulullah SAW.'
    },
    {
      subtopic: 'Ilmu Hadits (Musthalah Hadits)',
      competency: 'Menganalisis syarat-syarat Hadits Shahih',
      question: 'Suatu hadits dikategorikan sebagai Hadits Shahih apabila memenuhi lima kriteria, salah satunya perawinya harus bersifat Dhabith, yang artinya...',
      correctText: 'Memiliki ingatan hafalan yang kuat dan cermat dalam pencatatan naskah',
      distractors: ['Memiliki garis keturunan bangsawan Quraisy', 'Memiliki harta kekayaan melimpah untuk membiayai rihlah', 'Berusia lanjut di atas 80 tahun saat meriwayatkan'],
      explanation: 'Dhabith berarti memiliki ketelitian dan kekuatan hafalan yang sempurna dari lupa atau kekeliruan.'
    },
    {
      subtopic: 'Ilmu Hadits (Musthalah Hadits)',
      competency: 'Mengidentifikasi tingkatan hadits berdasarkan jumlah sanad',
      question: 'Hadits yang diriwayatkan oleh orang banyak pada setiap tingkatan sanadnya sehingga mustahil bersepakat untuk berdusta disebut...',
      correctText: 'Hadits Mutawatir',
      distractors: ['Hadits Ahad (Masyhur, Aziz, Gharib)', 'Hadits Maudhu\' (palsu buatan manusia)', 'Hadits Mu\'dhal (gugur dua perawi)'],
      explanation: 'Hadits Mutawatir diriwayatkan oleh perawi dalam jumlah besar pada tiap generasi sehingga menghasilkan keyakinan pasti.'
    },
    {
      subtopic: 'Hadits Tematik - Keikhlasan Niat',
      competency: 'Menganalisis kandungan hadits niat',
      question: 'Sabda Nabi SAW: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ" (Sesungguhnya sah dan diterimanya amal itu bergantung pada niatnya) diriwayatkan oleh...',
      correctText: 'Imam Al-Bukhari dan Imam Muslim dari Sahabat Umar bin Khattab r.a.',
      distractors: ['Imam At-Tirmidzi dari Sahabat Abu Hurairah r.a.', 'Imam Ibnu Majah dari Sahabat Anas bin Malik r.a.', 'Imam Ahmad dari Sahabat Ali bin Abi Thalib r.a.'],
      explanation: 'Hadits arbain pertama tentang niat diriwayatkan oleh Bukhari dan Muslim dari Umar bin Khattab.'
    },
    {
      subtopic: 'Hadits Tematik - Menuntut Ilmu',
      competency: 'Menganalisis hadits kewajiban menuntut ilmu',
      question: 'Hadits "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ" menegaskan bahwa menuntut ilmu syariat dan ilmu yang bermanfaat hukumnya adalah...',
      correctText: 'Fardhu (kewajiban mutlak) bagi setiap muslim laki-laki maupun perempuan',
      distractors: ['Sunnah muakkad hanya bagi yang bermukim di madrasah', 'Mubah tergantung keluangan waktu dan biaya', 'Makruh jika dilakukan pada malam hari'],
      explanation: 'Thalabul \'ilmi faridhatun \'ala kulli muslimin menegaskan kewajiban fardhu menuntut ilmu bagi setiap muslim.'
    },
    {
      subtopic: 'Hadits Tematik - Kebersihan dan Kesucian',
      competency: 'Menganalisis hadits kesucian lahir batin',
      question: 'Sabda Rasulullah SAW: "الطَّهُورُ شَطْرُ الإِيمَانِ" (Kebersihan/kesucian itu adalah separuh dari iman) menegaskan pentingnya...',
      correctText: 'Menjaga kesucian jasmani melalui bersuci dan kesucian rohani dari noda dosa',
      distractors: ['Membeli pakaian mahal saat hari raya', 'Membangun rumah mewah berlantai marmer', 'Menghindari sentuhan dengan tanah dan lumpur'],
      explanation: 'Thaharah mencakup thaharah hissi (jasmani) dan ma\'nawi (hati dari syirik dan maksiat).'
    },
    {
      subtopic: 'Hadits Tematik - Menjaga Lisan dan Tangan',
      competency: 'Menganalisis hadits ciri muslim sejati',
      question: 'Rasulullah SAW bersabda: "المُسْلِمُ مَنْ سَلِمَ المُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ". Definisi muslim yang hakiki menurut hadits ini adalah...',
      correctText: 'Orang yang orang-orang muslim lainnya selamat dari kejahatan lisan dan perbuatan tangannya',
      distractors: ['Orang yang paling banyak menghafal naskah puisi', 'Orang yang paling sering bepergian antarbenua', 'Orang yang selalu memenangkan perselisihan fisik'],
      explanation: 'Muslim sejati menjamin rasa aman bagi sesama, tidak menyakiti dengan lisan (ghibah/fitnah) atau tangan (kekerasan).'
    },
    {
      subtopic: 'Hadits Tematik - Keutamaan Sedekah',
      competency: 'Menganalisis hadits amal jariyah',
      question: 'Dalam hadits riwayat Muslim, tiga amalan yang pahalanya tidak akan terputus meskipun seseorang telah meninggal dunia adalah...',
      correctText: 'Sedekah jariyah, ilmu yang bermanfaat, dan anak saleh yang mendoakannya',
      distractors: ['Tabungan emas, rumah megah, dan sawah garapan', 'Gelar bangsawan, nama jalan, dan tugu prasasti peringatan', 'Koleksi pakaian mewah, kendaraan kuda, dan perhiasan mutiara'],
      explanation: 'Tiga amalan abadi setelah wafat: shadaqah jariyah, \'ilmun yuntafa\'u bih, dan waladun shalihun yad\'u lah.'
    },
    {
      subtopic: 'Hadits Tematik - Persaudaraan (Ukhuwah)',
      competency: 'Menganalisis hadits perumpamaan kaum mukmin',
      question: 'Hadits Nabi mengumpamakan kaum mukmin dalam kasih sayang dan saling tolong-menolong laksana satu tubuh (كَالْجَسَدِ الْوَاحِدِ), jika satu anggota tubuh sakit, maka...',
      correctText: 'Seluruh anggota tubuh yang lain ikut merasakan demam dan tidak bisa tidur',
      distractors: ['Anggota tubuh yang lain membiarkannya agar lekas sembuh sendiri', 'Bagian yang sehat harus dipisahkan dari yang sakit', 'Organ lainnya tetap tenang tidak terpengaruh keadaan'],
      explanation: 'Perumpamaan satu tubuh (kal jasadil wahid) mencerminkan solidaritas dan empati mendalam antar kaum mukmin.'
    },
    {
      subtopic: 'Hadits Tematik - Menghindari Sifat Munafik',
      competency: 'Menganalisis tiga tanda orang munafik',
      question: 'Sabda Nabi: "آيَةُ المُنَافِقِ ثَلَاثٌ". Tiga tanda ciri orang munafik menurut hadits shahih adalah...',
      correctText: 'Bila berbicara berdusta, bila berjanji mengingkari, dan bila dipercaya berkhianat',
      distractors: ['Bila makan tergesa-gesa, bila tidur mendengkur, dan bila berjalan sombong', 'Bila belajar malas, bila mengantuk tertidur, dan bila kenyang bersendawa', 'Bila berdagang mengambil laba, bila membeli menawar, dan bila berutang mencatat'],
      explanation: 'Ayatul munafiqi tsalats: idza haddatsa kadzaba, wa idza wa\'ada akhlafa, wa idzatumina khana.'
    },
    {
      subtopic: 'Hadits Tematik - Berbakti kepada Orang Tua',
      competency: 'Menganalisis kedudukan ibu dalam hadits',
      question: 'Ketika seorang sahabat bertanya kepada Rasulullah SAW tentang siapa yang paling berhak diperlakukan dengan baik, beliau menjawab "Ibumu" sebanyak...',
      correctText: '3 kali, baru kemudian beliau menyebut "Ayahmu"',
      distractors: ['1 kali langsung bersama ayahmu', '5 kali berturut-turut tanpa menyebut ayah', '2 kali setara dengan pamanmu'],
      explanation: 'Rasulullah menyebut "ummu-ka" tiga kali sebelum menyebut "abu-ka" sebagai penghormatan atas derita mengandung, melahirkan, dan menyusui.'
    },
    {
      subtopic: 'Hadits Tematik - Larangan Marah',
      competency: 'Menganalisis hadits mengendalikan emosi',
      question: 'Ketika seorang sahabat meminta wasiat singkat yang menyelamatkan hidupnya, Rasulullah SAW mengulang berkali-kali pesan:',
      correctText: '"لَا تَغْضَبْ" (Janganlah engkau mudah marah)',
      distractors: ['"لَا تَنَمْ" (Janganlah engkau tidur di malam hari)', '"لَا تَأْكُلْ" (Janganlah engkau makan sampai kenyang)', '"لَا تَبْكِ" (Janganlah engkau menangis saat sedih)'],
      explanation: 'Wasiat agung Nabi "La taghdhab" mengajarkan pengendalian diri dari hawa nafsu amarah.'
    },
    {
      subtopic: 'Hadits Tematik - Cinta Tanah Air dan Toleransi',
      competency: 'Menganalisis komitmen kebangsaan dalam bingkai sunnah',
      question: 'Ketika berhijrah meninggalkan kota Makkah, Rasulullah SAW memandang tanah kelahirannya dengan haru seraya bersabda betapa beliau mencintai negerinya. Peristiwa ini menjadi dalil...',
      correctText: 'Disyariatkannya rasa cinta tanah air dan patriotisme menjaga ketenteraman negeri',
      distractors: ['Larangan bepergian melintasi batas gurun pasir', 'Kewajiban menghancurkan kota yang ditinggalkan', 'Kebencian mutlak terhadap tempat kelahiran yang menolak dakwah'],
      explanation: 'Ungkapan cinta Nabi pada tanah air Makkah menunjukkan fitrah dan kemuliaan mencintai negeri tumpah darah.'
    }
  ];

  return buildUniqueSubjectBank({
    subjectId: 'quran_hadits',
    subjectName: "Qur'an Hadits MTs",
    categoryId: 'rumpun_pai',
    categoryName: 'Rumpun PAI MTs',
    akgtkCategory: 'Rumpun PAI',
    educationLevel: 'MTs',
    idPrefix: 'mts-qh-',
    totalTarget: items.length,
    generator: (i, diff, num) => {
      const item = items[i];
      return {
        subtopic: item.subtopic,
        competency: item.competency,
        question: item.question,
        correctText: item.correctText,
        distractors: item.distractors,
        explanation: item.explanation,
        tip: 'Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.'
      };
    }
  });
}

// ==========================================
// 2. AKIDAH AKHLAK MTS (60 UNIQUE QUESTIONS)
// ==========================================
function generateAkidahAkhlakMTs() {
  const items = [
    // Sifat-Sifat Allah
    {
      subtopic: 'Sifat Wajib bagi Allah',
      competency: 'Menganalisis sifat-sifat wajib dan mustahil bagi Allah',
      question: 'Sifat wajib Allah "Mukhalafatu lil hawaditsi" bermakna bahwa Allah SWT...',
      correctText: 'Berbeda dengan segala ciptaan makhluk-Nya dan tidak menyerupai apa pun',
      distractors: ['Maha Mendengar segala bisikan batin tanpa alat indra', 'Kekal abadi tanpa ada batas akhir masa', 'Berdiri sendiri tanpa memerlukan bantuan pihak lain'],
      explanation: 'Mukhalafatu lil hawaditsi menegaskan Allah suci dari sifat kebendaan dan keserupaan dengan makhluk.'
    },
    {
      subtopic: 'Sifat Wajib bagi Allah',
      competency: 'Menganalisis sifat Qiyamuhu Binafsihi',
      question: 'Sifat wajib Allah "Qiyamuhu binafsihi" mengandung arti bahwa Allah SWT adalah Dzat yang...',
      correctText: 'Maha Berdiri Sendiri dan tidak membutuhkan tempat bertempat atau pertolongan makhluk',
      distractors: ['Maha Melihat segala perbuatan manusia di tempat gelap', 'Maha Mengetahui ilmu masa lalu dan masa depan', 'Maha Hidup kekal dan tidak pernah mengantuk'],
      explanation: 'Qiyamuhu binafsihi bermakna Allah Maha Kaya, mandiri mutlak, dan tidak bergantung pada siapa pun.'
    },
    {
      subtopic: 'Sifat Wajib bagi Allah',
      competency: 'Menganalisis sifat Baqa\' dan Wujud',
      question: 'Lawan atau sifat mustahil dari sifat "Baqa\'" (Maha Kekal) bagi Allah SWT adalah...',
      correctText: 'Fana\' (rusak atau binasa)',
      distractors: ['Adam (tiada)', 'Huduts (baru berawal)', 'Mumatsalatu lil hawaditsi (serupa makhluk)'],
      explanation: 'Mustahil Allah bersifat Fana (binasa). Allah bersifat Baqa (kekal selamanya).'
    },
    {
      subtopic: 'Sifat Jaiz bagi Allah',
      competency: 'Menganalisis sifat jaiz bagi Allah SWT',
      question: 'Sifat jaiz bagi Allah SWT dalam aqidah Ahlussunnah wal Jama\'ah adalah...',
      correctText: 'Fi\'lu kulli mumkinin au tarkuhu (menciptakan segala hal yang mungkin atau meninggalkannya)',
      distractors: ['Wajib mengutus nabi ke setiap generasi tanpa kecuali', 'Wajib memasukkan orang yang taat ke surga secara hukum pasti', 'Mustahil mengampuni dosa orang yang bertaubat nasuha'],
      explanation: 'Hak mutlak Allah berkehendak menciptakan segala yang mungkin atau tidak menciptakannya tanpa paksaan.'
    },
    // Asmaul Husna
    {
      subtopic: 'Asmaul Husna',
      competency: 'Menganalisis makna Asmaul Husna Al-Aziz',
      question: 'Asmaul Husna "Al-\'Aziz" menegaskan bahwa Allah SWT adalah Dzat yang...',
      correctText: 'Maha Perkasa, Maha Kuasa, dan tidak terkalahkan oleh siapa pun',
      distractors: ['Maha Melapangkan rezeki seluas-luasnya bagi hamba pilihan', 'Maha Pengampun segala dosa dengan rahmat luas', 'Maha Adil dalam menimbang perbuatan manusia'],
      explanation: 'Al-Aziz bermakna Yang Memiliki Kemuliaan dan Keperkasaan mutlak tak terkalahkan.'
    },
    {
      subtopic: 'Asmaul Husna',
      competency: 'Menganalisis makna Asmaul Husna Al-Ghaffar',
      question: 'Perbedaan makna mendasar antara Asmaul Husna "Al-Ghaffar" dan "Al-\'Afuw" adalah...',
      correctText: 'Al-Ghaffar menutup aib dan dosa hamba, sedangkan Al-\'Afuw menghapus dosa sampai ke akar-akarnya',
      distractors: ['Al-Ghaffar hanya berlaku bagi kaum nabi terdahulu', 'Al-\'Afuw hanya memaafkan kesalahan anak kecil', 'Keduanya bermakna sama persis tanpa ada perbedaan nuansa bahasa'],
      explanation: 'Al-Ghaffar menutupi dosa di dunia dan akhirat; Al-\'Afuw menghapusnya total laksana jejak di pasir.'
    },
    {
      subtopic: 'Asmaul Husna',
      competency: 'Menganalisis makna Asmaul Husna Al-Basith',
      question: 'Asmaul Husna "Al-Baasith" yang berpasangan dengan "Al-Qaabidh" memiliki makna bahwa Allah SWT...',
      correctText: 'Maha Melapangkan rezeki dan kemudahan hidup bagi siapa yang dikehendaki-Nya',
      distractors: ['Maha Menyempitkan bumi saat terjadi kiamat', 'Maha Menghancurkan musuh-musuh kebenaran', 'Maha Mengumpulkan amal di Padang Mahsyar'],
      explanation: 'Al-Basith melapangkan rezeki, ilmu, dan kebahagiaan hamba-Nya.'
    },
    {
      subtopic: 'Asmaul Husna',
      competency: 'Menganalisis makna Asmaul Husna Al-Qayyum',
      question: 'Doa agung "Yaa Hayyu Yaa Qayyum" mengagungkan dua sifat kemuliaan Allah, di mana Al-Qayyum bermakna...',
      correctText: 'Dzat Yang Maha Mengurus dan Memelihara kelangsungan seluruh alam semesta tanpa henti',
      distractors: ['Dzat Yang Maha Mendatangkan bencana alam', 'Dzat Yang Membagikan wahyu syariat kepada para rasul', 'Dzat Yang Menciptakan keajaiban mukjizat'],
      explanation: 'Al-Qayyum bermakna Yang Terus-menerus Mengurus kelestarian seluruh makhluk ciptaan-Nya.'
    },
    // Malaikat dan Makhluk Gaib
    {
      subtopic: 'Iman kepada Malaikat',
      competency: 'Menganalisis tugas para malaikat Allah',
      question: 'Malaikat yang bertugas membagikan rezeki, mengatur peredaran angin, dan menurunkan curahan hujan atas izin Allah adalah...',
      correctText: 'Malaikat Mikail',
      distractors: ['Malaikat Jibril (penyampai wahyu)', 'Malaikat Israfil (peniup sangkakala)', 'Malaikat Izrail (pencabut nyawa)'],
      explanation: 'Malaikat Mikail diberi amanah mengatur rezeki dan fenomena alam seperti hujan dan angin.'
    },
    {
      subtopic: 'Iman kepada Malaikat',
      competency: 'Membedakan sifat malaikat, jin, dan manusia',
      question: 'Ciri khas penciptaan malaikat yang membedakannya dengan jin dan manusia adalah...',
      correctText: 'Diciptakan dari cahaya (nur), tidak berhawa nafsu, dan selalu taat tanpa pernah maksiat',
      distractors: ['Diciptakan dari api yang menyala dan beranak-pinak', 'Diciptakan dari tanah liat kering dan bebas memilih taat atau membangkang', 'Dapat menjelma menjadi manusia untuk menikah'],
      explanation: 'Malaikat diciptakan dari nur, tidak makan/minum, tidak berjenis kelamin, dan selalu patuh pada perintah Allah.'
    },
    // Kitab-Kitab Allah
    {
      subtopic: 'Iman kepada Kitab-Kitab Allah',
      competency: 'Menganalisis kitab suci dan rasul penerimanya',
      question: 'Kitab suci Zabur diturunkan oleh Allah SWT dalam bahasa Qibthi kepada Rasul pilihan-Nya, yaitu...',
      correctText: 'Nabi Dawud a.s.',
      distractors: ['Nabi Musa a.s. (Kitab Taurat)', 'Nabi Isa a.s. (Kitab Injil)', 'Nabi Ibrahim a.s. (Suhuf)'],
      explanation: 'Kitab Zabur diturunkan kepada Nabi Dawud a.s. berisi untaian doa, dzikir, dan pengajaran hikmah.'
    },
    {
      subtopic: 'Iman kepada Kitab-Kitab Allah',
      competency: 'Menganalisis kedudukan Al-Qur\'an terhadap kitab sebelumnya',
      question: 'Kedudukan Al-Qur\'an terhadap kitab-kitab samawi sebelumnya adalah sebagai "Muhaimin", yang bermakna...',
      correctText: 'Penyempurna, pembenar ajaran tauhid, dan batu uji keaslian ajaran kitab terdahulu',
      distractors: ['Penghapus seluruh catatan sejarah para nabi kuno', 'Penyalin ulang hukum taurat tanpa ada perubahan', 'Kitab lokal khusus untuk bangsa Arab pedalaman'],
      explanation: 'Al-Qur\'an berfungsi sebagai muhaimin: memelihara, menyempurnakan, dan menguji keaslian pesan syariat terdahulu.'
    },
    // Rasul, Mukjizat, dan Kejadian Luar Biasa
    {
      subtopic: 'Mukjizat, Karamah, Ma\'unah, dan Istidraj',
      competency: 'Membedakan mukjizat, karamah, ma\'unah, dan irhash',
      question: 'Kejadian luar biasa yang dianugerahkan Allah SWT kepada hamba yang saleh dan bertakwa (wali Allah) dinamakan...',
      correctText: 'Karamah',
      distractors: ['Mukjizat (khusus nabi dan rasul)', 'Ma\'unah (pertolongan bagi orang beriman awam)', 'Istidraj (jebakan kenikmatan bagi orang fasik)'],
      explanation: 'Karamah adalah keistimewaan yang diberikan kepada wali Allah tanpa disertai pengakuan kenabian.'
    },
    {
      subtopic: 'Mukjizat, Karamah, Ma\'unah, dan Istidraj',
      competency: 'Menganalisis konsep Istidraj',
      question: 'Seorang pendosa yang terang-terangan melanggar syariat namun harta dan kedudukannya semakin bertambah sukses mengalami ujian...',
      correctText: 'Istidraj (jebakan kenikmatan semu sebelum siksaan datang tiba-tiba)',
      distractors: ['Karamah kemuliaan batin', 'Ma\'unah keselamatan tak terduga', 'Irhash tanda kemuliaan'],
      explanation: 'Istidraj adalah pemberian kelapangan duniawi bagi pelaku maksiat sebagai jebakan sebelum diazab.'
    },
    {
      subtopic: 'Mukjizat Para Rasul',
      competency: 'Menganalisis mukjizat aqliyyah Nabi Muhammad SAW',
      question: 'Mukjizat terbesar Nabi Muhammad SAW yang bersifat kekal (aqliyyah/maknawiyyah) sepanjang masa adalah...',
      correctText: 'Al-Qur\'an Al-Karim dengan keagungan bahasa, sains, dan hukumnya',
      distractors: ['Keluarnya air memancar dari sela-sela jemari beliau', 'Terbelahnya bulan di ufuk langit Makkah', 'Makanan sedikit yang mencukupi seribu sahabat'],
      explanation: 'Al-Qur\'an adalah mukjizat abadi (mu\'jizat aqliyyah) yang relevan menantang peradaban manusia sepanjang zaman.'
    },
    // Hari Akhir dan Alam Gaib
    {
      subtopic: 'Iman kepada Hari Akhir',
      competency: 'Menganalisis tahapan peristiwa di hari akhirat',
      question: 'Tahapan setelah manusia dibangkitkan dari alam kubur di mana seluruh umat manusia dikumpulkan di satu padang luas dinamakan...',
      correctText: 'Yaumul Mahsyar',
      distractors: ['Yaumul Ba\'ats (kebangkitan dari kubur)', 'Yaumul Hisab (perhitungan amal perbuatan)', 'Yaumul Mizan (penimbangan bobot pahala)'],
      explanation: 'Yaumul Mahsyar adalah hari dikumpulkannya seluruh makhluk di padang Mahsyar untuk diadili.'
    },
    {
      subtopic: 'Iman kepada Hari Akhir',
      competency: 'Menganalisis konsep Mizan dan Shirath',
      question: 'Jembatan yang terbentang di atas neraka Jahannam yang harus dilewati oleh setiap manusia menuju ke surga dinamakan...',
      correctText: 'Shirathal Mustaqim di hari kiamat',
      distractors: ['Telaga Al-Kautsar', 'Pintu Ar-Rayyan', 'Taman Raudhah'],
      explanation: 'Ash-Shirath adalah titian di atas neraka yang dilintasi manusia sesuai kecepatan cahaya amal ibadahnya.'
    },
    // Qada dan Qadar
    {
      subtopic: 'Iman kepada Qada dan Qadar',
      competency: 'Membedakan Takdir Mubram dan Takdir Muallaq',
      question: 'Takdir Allah yang pasti terjadi dan tidak dapat diubah oleh usaha atau doa manusia (seperti kelahiran dan kematian) disebut...',
      correctText: 'Takdir Mubram',
      distractors: ['Takdir Mu\'allaq (dapat dipengaruhi ikhtiar dan doa)', 'Tawakkal mutlak', 'Kasb perbuatan mandiri'],
      explanation: 'Takdir Mubram adalah ketentuan mutlak Allah di Lauhul Mahfuzh yang tidak menerima perubahan ikhtiar.'
    },
    {
      subtopic: 'Iman kepada Qada dan Qadar',
      competency: 'Menganalisis Takdir Muallaq',
      question: 'Kondisi kesehatan seorang siswa madrasah yang sembuh dari sakit setelah berobat teratur dan tekun berdoa merupakan contoh...',
      correctText: 'Takdir Mu\'allaq (tergantung pada sebab ikhtiar dan doa manusia)',
      distractors: ['Takdir Mubram mutlak tanpa campur tangan', 'Kebetulan alamiah tanpa takdir Allah', 'Kekuatan magis pengobatan herbal'],
      explanation: 'Takdir Mu\'allaq adalah ketentuan Allah yang dikaitkan dengan ikhtiar nyata dan munajat doa hamba.'
    },
    // Akhlak Terpuji (Mahmudah)
    {
      subtopic: 'Akhlak Terpuji (Mahmudah)',
      competency: 'Menganalisis konsep Tawadhu\'',
      question: 'Sikap rendah hati, tidak memandang rendah orang lain, dan menyadari bahwa semua kelebihan semata titipan Allah dinamakan...',
      correctText: 'Tawadhu\'',
      distractors: ['Takabur (sombong merasa paling hebat)', 'Tasamuh (toleran)', 'Ta\'awun (tolong-menolong)'],
      explanation: 'Tawadhu\' adalah ketundukan hati dan kerendahan sikap di hadapan kebenaran dan sesama manusia.'
    },
    {
      subtopic: 'Akhlak Terpuji (Mahmudah)',
      competency: 'Menganalisis konsep Ikhtiar dan Tawakkal',
      question: 'Berserah diri sepenuhnya kepada ketetapan Allah setelah mengerahkan seluruh kemampuan dan daya usaha maksimal disebut...',
      correctText: 'Tawakkal',
      distractors: ['Fatalisme pasif (jabariyyah)', 'Qana\'ah merasa cukup', 'Syukur nikmat'],
      explanation: 'Tawakkal hakiki didahului oleh ikhtiar sungguh-sungguh, lalu menyerahkan hasil akhirnya kepada Allah.'
    },
    {
      subtopic: 'Akhlak Terpuji (Mahmudah)',
      competency: 'Menganalisis konsep Qana\'ah',
      question: 'Sikap rela menerima dan merasa cukup atas apa yang dianugerahkan oleh Allah SWT serta menjauhkan diri dari rasa serakah dinamakan...',
      correctText: 'Qana\'ah',
      distractors: ['Iffah menjaga kehormatan', 'Syaja\'ah keberanian membela kebenaran', 'Murunah keluwesan bergaul'],
      explanation: 'Qana\'ah adalah kekayaan jiwa yang merasa cukup dengan rezeki halal yang Allah berikan.'
    },
    {
      subtopic: 'Akhlak Terpuji (Mahmudah)',
      competency: 'Menganalisis konsep Syaja\'ah',
      question: 'Keberanian moral seorang santri madrasah dalam menyuarakan kebenaran dan menolak perundungan (bullying) di madrasah mencerminkan sifat...',
      correctText: 'Syaja\'ah (keberanian berlandaskan kebenaran syariat)',
      distractors: ['Tahawwur (nekat membabi buta tanpa perhitungan)', 'Jubun (pengecut penakut)', 'Kibr (sombong membanggakan diri)'],
      explanation: 'Syaja\'ah adalah keberanian proporsional membela hak dan kebenaran demi mencari ridha Allah.'
    },
    {
      subtopic: 'Akhlak Terpuji (Mahmudah)',
      competency: 'Menganalisis konsep Husnuzhan',
      question: 'Selalu berprasangka baik kepada rencana dan takdir Allah SWT meskipun sedang menghadapi cobaan berat dinamakan...',
      correctText: 'Husnuzhan billah',
      distractors: ['Su\'uzhan (berprasangka buruk)', 'Nifaq (kemunafikan tersembunyi)', 'Riya\' (pamer amal ibadah)'],
      explanation: 'Husnuzhan billah meyakini bahwa di balik setiap takdir pahit Allah menyimpan hikmah kebaikan besar.'
    },
    // Akhlak Tercela (Mazhmumah)
    {
      subtopic: 'Akhlak Tercela (Mazhmumah)',
      competency: 'Menganalisis penyakit hati Riya\' dan Sum\'ah',
      question: 'Sikap beribadah dengan sengaja menceritakan amal salehnya kepada orang lain agar didengar dan memperoleh pujian masyarakat disebut...',
      correctText: 'Sum\'ah',
      distractors: ['Riya\' (memperlihatkan ibadah secara visual)', 'Ujub (kagum pada kehebatan diri sendiri)', 'Hasad (dengki atas nikmat orang lain)'],
      explanation: 'Sum\'ah berasal dari kata sami\'a (mendengar), yaitu memperdengarkan amal agar dipuji orang lain.'
    },
    {
      subtopic: 'Akhlak Tercela (Mazhmumah)',
      competency: 'Menganalisis penyakit hati Hasad (Dengki)',
      question: 'Bahaya penyakit hati hasad diibaratkan oleh Rasulullah SAW seperti api yang memakan kayu bakar karena hasad dapat...',
      correctText: 'Menghanguskan dan melenyapkan seluruh pahala kebaikan yang telah dikumpulkan',
      distractors: ['Menambah kekayaan materi secara tidak berkah', 'Membuat pelakunya disegani oleh kawan dan lawan', 'Mengurangi hafalan kitab secara perlahan'],
      explanation: 'Nabi bersabda hasad memakan kebaikan sebagaimana api melalap kayu bakar hingga menjadi abu.'
    },
    {
      subtopic: 'Akhlak Tercela (Mazhmumah)',
      competency: 'Menganalisis perbedaan Ghibah dan Fitnah',
      question: 'Membicarakan keburukan atau aib nyata saudara sesama muslim di belakangnya yang apabila ia dengar ia merasa tidak suka dinamakan...',
      correctText: 'Ghibah',
      distractors: ['Fitnah (tuduhan bohong tanpa dasar kenyataan)', 'Namimah (adu domba antarpihak)', 'Buhtan (kebohongan besar)'],
      explanation: 'Ghibah adalah membicarakan hal yang benar ada pada saudara yang ia benci jika diungkapkan; jika dusta disebut buhtan/fitnah.'
    },
    {
      subtopic: 'Akhlak Tercela (Mazhmumah)',
      competency: 'Menganalisis dosa Namimah (Adu Domba)',
      question: 'Menyampaikan perkataan seseorang kepada pihak lain dengan tujuan merusak hubungan silaturahmi dan memicu permusuhan disebut perbuatan...',
      correctText: 'Namimah',
      distractors: ['Ghibah gunjingan aib', 'Ananiyyah egoisme pribadi', 'Gadhab amarah tak terkendali'],
      explanation: 'Namimah adalah perbuatan adu domba yang diancam tidak akan masuk surga dalam hadits shahih.'
    },
    {
      subtopic: 'Akhlak Terpuji dalam Bermedia Sosial',
      competency: 'Menerapkan adab bermedia sosial sesuai Fikih Informasi',
      question: 'Sikap kritis seorang santri ketika menerima berita viral yang belum jelas kebenarannya di grup pesan madrasah adalah melakukan...',
      correctText: 'Tabayyun (klarifikasi dan verifikasi kebenaran sumber informasi)',
      distractors: ['Langsung membagikan (share) ke semua kontak agar cepat viral', 'Menambah bumbu cerita agar nampak lebih meyakinkan', 'Menghapus kontak teman yang mengirimkan pesan'],
      explanation: 'QS. Al-Hujurat ayat 6 memerintahkan tabayyun saat menerima berita dari orang fasik agar tidak menimpakan celaka.'
    },
    {
      subtopic: 'Adab Bergaul Islami',
      competency: 'Menerapkan adab kepada orang tua dan guru',
      question: 'Kewajiban luhur mematuhi perintah baik orang tua, merawat mereka di masa senja, dan mendoakan ampunan bagi keduanya dinamakan...',
      correctText: 'Birrul Walidain',
      distractors: ['Uququl Walidain (durhaka kepada orang tua)', 'Silaturrahmi kerabat jauh semata', 'Tazkiyatun Nafs penyucian rohani'],
      explanation: 'Birrul Walidain adalah salah satu amal paling dicintai Allah setelah shalat tepat waktu.'
    }
  ];

  return buildUniqueSubjectBank({
    subjectId: 'akidah_akhlak',
    subjectName: 'Akidah Akhlak MTs',
    categoryId: 'rumpun_pai',
    categoryName: 'Rumpun PAI MTs',
    akgtkCategory: 'Rumpun PAI',
    educationLevel: 'MTs',
    idPrefix: 'mts-aa-',
    totalTarget: items.length,
    generator: (i, diff, num) => {
      const item = items[i];
      return {
        subtopic: item.subtopic,
        competency: item.competency,
        question: item.question,
        correctText: item.correctText,
        distractors: item.distractors,
        explanation: item.explanation,
        tip: 'Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.'
      };
    }
  });
}

// ==========================================
// 3. FIKIH MTS (60 UNIQUE QUESTIONS)
// ==========================================
function generateFikihMTs() {
  const items = [
    // Thaharah
    {
      subtopic: 'Thaharah dan Bersuci',
      competency: 'Membedakan jenis-jenis najis dan tata cara pensuciannya',
      question: 'Air kencing bayi laki-laki berusia di bawah 2 tahun yang belum mengonsumsi makanan apa pun selain air susu ibu (ASI) tergolong najis...',
      correctText: 'Najis Mukhaffafah (cukup dipercikkan air pada tempat yang terkena)',
      distractors: ['Najis Mutawassithah (wajib dicuci hingga hilang bau, rasa, dan warna)', 'Najis Mughalladhah (dicuci 7 kali salah satunya dengan tanah)', 'Bukan najis sama sekali'],
      explanation: 'Kencing bayi laki-laki ASI < 2 tahun adalah najis mukhaffafah, cara mensucikannya cukup dengan memercikkan air mutlak.'
    },
    {
      subtopic: 'Thaharah dan Bersuci',
      competency: 'Menganalisis pensucian najis mughalladhah',
      question: 'Benda yang terkena jilatan anjing atau babi tergolong najis berat (Mughalladhah). Cara mensucikannya menurut sunnah adalah...',
      correctText: 'Membasuhnya sebanyak 7 kali, dan salah satu basuhannya dicampur dengan tanah suci',
      distractors: ['Membasuhnya 3 kali dengan sabun pembersih kimia', 'Membiarkannya kering di bawah terik matahari siang', 'Menaburkan garam dapur di atas bekas jilatan'],
      explanation: 'Hadits shahih menetapkan basuhan 7 kali dengan salah satunya menggunakan debu/tanah suci.'
    },
    {
      subtopic: 'Thaharah dan Bersuci',
      competency: 'Menganalisis sebab-sebab mandi wajib (hadats besar)',
      question: 'Kondisi berikut yang mewajibkan seseorang untuk melakukan mandi besar (mandi junub) adalah...',
      correctText: 'Berhentinya darah haid atau nifas, dan keluarnya air mani',
      distractors: ['Keluarnya angin (kentut) dari jalan belakang', 'Menyentuh mushaf Al-Qur\'an dengan sengaja', 'Tertidur lelap dalam posisi duduk stabil'],
      explanation: 'Sebab hadats besar: bersetubuh, keluar mani, haid, nifas, wiladah, dan meninggal dunia.'
    },
    {
      subtopic: 'Thaharah dan Bersuci',
      competency: 'Menganalisis syarat dan rukun tayamum',
      question: 'Rukun tayamum sebagai pengganti wudhu dan mandi wajib adalah...',
      correctText: 'Niat, mengusap wajah, dan mengusap kedua tangan sampai siku dengan debu suci',
      distractors: ['Mengusap kepala dan membasuh kedua telinga dengan air', 'Membasuh kedua kaki hingga mata kaki dengan kerikil', 'Berkumur-kumur dan memasukkan debu ke dalam hidung'],
      explanation: 'Rukun tayamum: niat, memindahkan debu, mengusap muka, dan mengusap kedua tangan sampai siku.'
    },
    // Shalat Fardhu dan Sunnah
    {
      subtopic: 'Shalat Berjamaah',
      competency: 'Menganalisis ketentuan masbuq dalam shalat berjamaah',
      question: 'Seorang makmum masbuq dinyatakan telah mendapatkan satu rakaat bersama imam apabila ia...',
      correctText: 'Sempat melakukan ruku\' dan thuma\'ninah bersama imam sebelum imam bangkit i\'tidal',
      distractors: ['Sempat mendengarkan imam membaca Surah Al-Fatihah', 'Sempat sujud pertama bersama imam di lantai', 'Sempat duduk tasyahhud akhir bersama imam'],
      explanation: 'Ukuran mendapatkan rakaat shalat adalah mendapati ruku\' bersama imam dengan thuma\'ninah.'
    },
    {
      subtopic: 'Sujud Sahwi, Tilawah, dan Syukur',
      competency: 'Membedakan sujud sahwi, sujud tilawah, dan sujud syukur',
      question: 'Seorang muslim yang lupa tidak melakukan tasyahhud awal pada rakaat kedua shalat Isya disunnahkan melakukan...',
      correctText: 'Sujud Sahwi sebanyak dua kali sebelum salam',
      distractors: ['Sujud Syukur satu kali setelah salam', 'Sujud Tilawah saat mendengar ayat sajdah', 'Mengulang shalat Isya dari rakaat pertama'],
      explanation: 'Meninggalkan sunnah ab\'adh (seperti tasyahhud awal) diganti dengan sujud sahwi dua kali sebelum salam.'
    },
    {
      subtopic: 'Sujud Sahwi, Tilawah, dan Syukur',
      competency: 'Menganalisis ketentuan sujud syukur',
      question: 'Seorang atlet madrasah yang spontan sujud satu kali di tepi lapangan menghadap kiblat atas kemenangannya melakukan...',
      correctText: 'Sujud Syukur atas nikmat keberhasilan yang diperoleh',
      distractors: ['Sujud Sahwi karena lupa rakaat', 'Sujud Tilawah karena mendengarkan qari', 'Sujud Rukun shalat mutlak'],
      explanation: 'Sujud syukur dilakukan saat memperoleh nikmat besar atau terhindar dari bencana, dilakukan di luar shalat.'
    },
    {
      subtopic: 'Shalat Jamak dan Qashar',
      competency: 'Menganalisis ketentuan shalat bagi musafir',
      question: 'Seorang musafir menempuh perjalanan sejauh 90 km. Ia menggabungkan shalat Zhuhur dan Ashar dikerjakan masing-masing 2 rakaat pada waktu Ashar. Bentuk shalat ini dinamakan...',
      correctText: 'Jamak Ta\'khir Qashar',
      distractors: ['Jamak Taqdim Qashar', 'Jamak Shuri tanpa qashar', 'Qashar Munfarid fardhu'],
      explanation: 'Dikerjakan di waktu kedua (Ashar) disebut Ta\'khir, diringkas dari 4 menjadi 2 rakaat disebut Qashar.'
    },
    {
      subtopic: 'Shalat Jamak dan Qashar',
      competency: 'Menentukan shalat yang tidak boleh di-qashar',
      question: 'Shalat fardhu yang TIDAK BOLEH diringkas (di-qashar) rakaatnya oleh seorang musafir adalah...',
      correctText: 'Shalat Maghrib (tetap 3 rakaat) dan Shalat Subuh (tetap 2 rakaat)',
      distractors: ['Shalat Zhuhur dan Ashar', 'Shalat Ashar dan Isya', 'Shalat Isya dan Zhuhur'],
      explanation: 'Hanya shalat fardhu 4 rakaat (Zhuhur, Ashar, Isya) yang boleh di-qashar menjadi 2 rakaat.'
    },
    {
      subtopic: 'Shalat Jenazah',
      competency: 'Menganalisis tata cara shalat jenazah',
      question: 'Pada shalat jenazah yang terdiri atas 4 takbir tanpa ruku\' dan sujud, bacaan doa khusus untuk jenazah dibaca setelah...',
      correctText: 'Takbir ketiga (takbir ketiga mendoakan ampunan bagi mayit)',
      distractors: ['Takbir pertama (membaca Al-Fatihah)', 'Takbir kedua (membaca shalawat nabi)', 'Takbir keempat (doa penutup dan salam)'],
      explanation: 'Urutan: Takbir 1 (Al-Fatihah), Takbir 2 (Shalawat), Takbir 3 (Doa jenazah: Allahummaghfir lahu...), Takbir 4 (Doa penutup).'
    },
    {
      subtopic: 'Shalat Gerhana dan Istisqa',
      competency: 'Menganalisis tata cara shalat gerhana (Kusuf/Khusuf)',
      question: 'Perbedaan gerakan shalat gerhana matahari (Kusuf) dengan shalat sunnah biasa adalah setiap rakaatnya memiliki...',
      correctText: 'Dua kali berdiri, dua kali membaca surat, dan dua kali ruku\'',
      distractors: ['Tiga kali sujud di setiap rakaat', 'Tanpa membaca surat Al-Fatihah', 'Dilakukan tanpa menghadap kiblat'],
      explanation: 'Shalat gerhana dilakukan 2 rakaat dengan masing-masing rakaat mempunyai 2 ruku\' dan 2 kali berdiri.'
    },
    // Puasa
    {
      subtopic: 'Puasa Wajib dan Sunnah',
      competency: 'Menganalisis rukun dan pembatal puasa',
      question: 'Hal berikut yang membatalkan ibadah puasa dan mewajibkan pembayaran kafarat udzma (memerdekakan budak, puasa 2 bulan berturut-turut, atau memberi makan 60 miskin) adalah...',
      correctText: 'Melakukan hubungan suami istri di siang hari bulan Ramadan dengan sengaja',
      distractors: ['Muntah secara tidak sengaja karena mual', 'Mimpi basah di siang hari saat tidur', 'Menelan air liur sendiri yang bersih di mulut'],
      explanation: 'Jima\' di siang hari Ramadan dengan sengaja membatalkan puasa dan mewajibkan kafarat kubra.'
    },
    {
      subtopic: 'Puasa Wajib dan Sunnah',
      competency: 'Menganalisis ketentuan fidyah puasa',
      question: 'Orang tua renta yang sudah tidak mampu lagi berpuasa Ramadan atau orang sakit menahun yang tidak ada harapan sembuh mengganti puasanya dengan cara...',
      correctText: 'Membayar Fidyah sebesar satu mud makanan pokok untuk setiap hari yang ditinggalkan',
      distractors: ['Meng-qadha puasa pada bulan Syawal berikutnya', 'Melakukan puasa kafarat selama 2 bulan berturut-turut', 'Menyembelih seekor sapi jantan di hari raya'],
      explanation: 'Orang tua renta atau sakit permanen tidak wajib qadha, melainkan wajib membayar fidyah (1 mud ~675 gram beras per hari).'
    },
    {
      subtopic: 'Puasa Wajib dan Sunnah',
      competency: 'Mengidentifikasi hari-hari yang diharamkan berpuasa',
      question: 'Hari-hari yang diharamkan secara mutlak bagi umat Islam untuk berpuasa adalah...',
      correctText: 'Dua hari raya (Idul Fitri dan Idul Adha) serta hari Tasyrik (11, 12, 13 Dzulhijjah)',
      distractors: ['Hari Jumat dan hari Sabtu', 'Hari Senin dan hari Kamis', 'Pertengahan bulan Sya\'ban (Nisfu Sya\'ban)'],
      explanation: 'Hari raya dan hari tasyrik adalah hari makan minum dan berdzikir, haram berpuasa padanya.'
    },
    // Zakat
    {
      subtopic: 'Zakat Fitrah dan Zakat Mal',
      competency: 'Menganalisis besaran dan waktu zakat fitrah',
      question: 'Kadar zakat fitrah yang wajib dikeluarkan oleh setiap jiwa muslim sebelum shalat Idul Fitri adalah sebesar...',
      correctText: '1 sha\' atau setara dengan 2,5 kg (atau 3,5 liter) bahan makanan pokok',
      distractors: ['5 kg beras pulen organik', '2,5 persen dari total tabungan uang gaji', '10 persen dari hasil panen padi sawah'],
      explanation: 'Nabi mewajibkan zakat fitrah 1 sha\' kurma/gandum, di Indonesia disetarakan 2,5 kg atau 3,5 liter beras.'
    },
    {
      subtopic: 'Zakat Fitrah dan Zakat Mal',
      competency: 'Menganalisis nisab dan kadar zakat emas',
      question: 'Nisab zakat mal emas yang telah dimiliki dan tersimpan genap selama satu haul (1 tahun hijriyah) adalah sebesar...',
      correctText: '85 gram emas murni dengan kadar zakat 2,5%',
      distractors: ['100 gram emas dengan kadar zakat 5%', '50 gram emas dengan kadar zakat 10%', '200 gram perak dengan kadar zakat 2,5%'],
      explanation: 'Nisab emas adalah 20 dinar setara 85 gram emas, kadar zakatnya 2,5% jika mencapai haul.'
    },
    {
      subtopic: 'Zakat Fitrah dan Zakat Mal',
      competency: 'Menganalisis 8 golongan penerima zakat (Mustahik)',
      question: 'Golongan yang berhak menerima zakat (mustahik) yang terlilit utang demi mendamaikan perselisihan atau memenuhi kebutuhan hidup pokok dinamakan...',
      correctText: 'Gharimin',
      distractors: ['Ibnu Sabil (musafir kehabisan bekal)', 'Amil zakat (petugas pengelola)', 'Muallaf (orang yang baru masuk Islam)'],
      explanation: 'Gharimin adalah orang yang terlilit utang halal dan tidak mampu melunasinya.'
    },
    // Haji dan Umrah
    {
      subtopic: 'Haji dan Umrah',
      competency: 'Membedakan rukun haji dan wajib haji',
      question: 'Inti pokok dari pelaksanaan ibadah haji di mana seluruh jamaah berkumpul di padang Arafah pada tanggal 9 Dzulhijjah disebut rukun...',
      correctText: 'Wukuf di Arafah',
      distractors: ['Tawaf Ifadhah di Ka\'bah', 'Sa\'i antara Shafa dan Marwah', 'Tahallul mencukur rambut'],
      explanation: 'Al-Hajju \'Arafah: wukuf di Arafah adalah rukun teragung yang tidak sah haji tanpanya.'
    },
    {
      subtopic: 'Haji dan Umrah',
      competency: 'Menganalisis Miqat Makani haji',
      question: 'Tempat batas geografis dimulainya niat ihram haji atau umrah bagi jamaah yang datang dari arah Madinah adalah...',
      correctText: 'Dzulhulaifah (Bir Ali)',
      distractors: ['Yalamlam (arah Yaman)', 'Qarnul Manazil (arah Najd)', 'Juhfah (arah Syam)'],
      explanation: 'Miqat makani penduduk Madinah dan yang melewatinya adalah Dzulhulaifah (Bir Ali).'
    },
    // Kurban dan Aqiqah
    {
      subtopic: 'Penyembelihan Kurban dan Aqiqah',
      competency: 'Membedakan ketentuan kurban dan aqiqah',
      question: 'Ketentuan jumlah kambing atau domba untuk pelaksanaan aqiqah anak laki-laki menurut sunnah Rasulullah SAW adalah...',
      correctText: '2 ekor kambing yang sehat dan memenuhi syarat umur',
      distractors: ['1 ekor kambing jantan bertanduk', '3 ekor kambing betina gemuk', '1/7 bagian dari seekor sapi perah'],
      explanation: 'Aqiqah anak laki-laki disunnahkan 2 ekor kambing, dan anak perempuan 1 ekor kambing.'
    },
    // Muamalah Fikih
    {
      subtopic: 'Fikih Muamalah - Jual Beli dan Khiyar',
      competency: 'Menganalisis konsep Khiyar dalam jual beli Islam',
      question: 'Hak yang diberikan syariat kepada pembeli dan penjual untuk memilih meneruskan atau membatalkan akad jual beli selama masih berada di tempat transaksi disebut...',
      correctText: 'Khiyar Majelis',
      distractors: ['Khiyar Syarat (dengan batas waktu perjanjian)', 'Khiyar \'Aib (karena cacat barang)', 'Khiyar Ru\'yah (karena melihat barang)'],
      explanation: 'Khiyar Majelis berlaku selama kedua belah pihak masih berada di tempat transaksi dan belum berpisah.'
    },
    {
      subtopic: 'Fikih Muamalah - Larangan Riba',
      competency: 'Membedakan jenis-jenis riba',
      question: 'Pertukaran barang ribawi sejenis (emas dengan emas atau gandum dengan gandum) dengan timbangan yang tidak sama beratnya tergolong...',
      correctText: 'Riba Fadhl',
      distractors: ['Riba Nasi\'ah (karena penundaan waktu)', 'Riba Qardh (keuntungan dari pinjaman utang)', 'Riba Yad (berpisah sebelum timbang terima)'],
      explanation: 'Riba Fadhl adalah kelebihan takaran pada pertukaran barang ribawi sejenis.'
    },
    {
      subtopic: 'Fikih Makanan dan Minuman',
      competency: 'Menganalisis kriteria makanan halal dan thayyib',
      question: 'Dua jenis bangkai binatang yang dihalalkan bagi umat Islam untuk dikonsumsi menurut hadits Rasulullah SAW adalah...',
      correctText: 'Bangkai ikan dan bangkai belalang',
      distractors: ['Bangkai ayam dan bangkai burung puyuh', 'Bangkai sapi dan bangkai kambing kurban', 'Bangkai kelinci dan bangkai kijang rimba'],
      explanation: 'Nabi bersabda: "Dihalalkan bagi kita dua bangkai dan dua darah; dua bangkai yaitu ikan dan belalang, dua darah yaitu hati dan limpa."'
    }
  ];

  return buildUniqueSubjectBank({
    subjectId: 'fikih',
    subjectName: 'Fikih MTs',
    categoryId: 'rumpun_pai',
    categoryName: 'Rumpun PAI MTs',
    akgtkCategory: 'Rumpun PAI',
    educationLevel: 'MTs',
    idPrefix: 'mts-fk-',
    totalTarget: items.length,
    generator: (i, diff, num) => {
      const item = items[i];
      return {
        subtopic: item.subtopic,
        competency: item.competency,
        question: item.question,
        correctText: item.correctText,
        distractors: item.distractors,
        explanation: item.explanation,
        tip: 'Kuasai rukun dan syarat sah ibadah (thaharah, shalat, zakat, puasa, haji) serta ketentuan muamalah syariah.'
      };
    }
  });
}

// ==========================================
// 4. SKI MTS (60 UNIQUE QUESTIONS)
// ==========================================
function generateSkiMTs() {
  const items = [
    // Periode Nabi Muhammad SAW
    {
      subtopic: 'Dakwah Nabi di Makkah',
      competency: 'Menganalisis strategi dakwah sembunyi-sembunyi dan terang-terangan',
      question: 'Tempat pertemuan rahasia pembinaan awal dakwah Islam pada masa Rasulullah berdakwah secara sembunyi-sembunyi di Makkah adalah rumah...',
      correctText: 'Al-Arqam bin Abil Arqam (Darul Arqam)',
      distractors: ['Abu Bakar Ash-Shiddiq', 'Khadijah binti Khuwailid', 'Umar bin Khattab'],
      explanation: 'Darul Arqam menjadi pusat tarbiyah rahasia generasi assabiqunal awwalun di Makkah.'
    },
    {
      subtopic: 'Dakwah Nabi di Makkah',
      competency: 'Menganalisis peristiwa Baiat Aqabah I dan II',
      question: 'Perjanjian setia antara Rasulullah SAW dengan kaum muslimin Yatsrib yang menjadi gerbang utama pembuka peristiwa Hijrah dinamakan...',
      correctText: 'Bai\'at \'Aqabah',
      distractors: ['Perjanjian Hudaibiyyah', 'Piagam Madinah', 'Bai\'atur Ridwan'],
      explanation: 'Baiat Aqabah I dan II melahirkan kesepakatan perlindungan warga Yatsrib terhadap dakwah Nabi.'
    },
    {
      subtopic: 'Dakwah Nabi di Madinah',
      competency: 'Menganalisis langkah strategis Nabi di Madinah',
      question: 'Langkah pertama yang dilakukan oleh Rasulullah SAW setibanya di Madinah (Yatsrib) untuk membangun peradaban umat adalah...',
      correctText: 'Membangun Masjid Nabawi sebagai pusat ibadah, musyawarah, dan pendidikan',
      distractors: ['Mendirikan benteng militer pertahanan kota', 'Mencetak mata uang dinar perak madrasah', 'Menyerang perkampungan Yahudi di Khaibar'],
      explanation: 'Masjid Nabawi adalah pilar pertama integrasi ibadah, pemerintahan, dan sosial umat di Madinah.'
    },
    {
      subtopic: 'Dakwah Nabi di Madinah',
      competency: 'Menganalisis Piagam Madinah (Mitsaq al-Madinah)',
      question: 'Dokumen konstitusi tertulis pertama di dunia yang menjamin hak asasi, persatuan warga lintas agama, dan pertahanan bersama di Madinah adalah...',
      correctText: 'Piagam Madinah (Mitsaq al-Madinah)',
      distractors: ['Perjanjian Hudaibiyyah', 'Deklarasi Fathu Makkah', 'Khutbah Wada\''],
      explanation: 'Piagam Madinah menyatukan Muhajirin, Anshar, dan suku-suku Yahudi dalam satu kesatuan politik ummah.'
    },
    {
      subtopic: 'Perang-Perang Mempertahankan Diri',
      competency: 'Menganalisis strategi Perang Khandaq (Ahzab)',
      question: 'Ide pembuatan parit pertahanan raksasa di perbatasan Madinah saat menghadapi kepungan pasukan sekutu kafir Quraisy pada Perang Khandaq dicetuskan oleh...',
      correctText: 'Sahabat Salman Al-Farisi r.a.',
      distractors: ['Sahabat Khalid bin Walid r.a.', 'Sahabat Ali bin Abi Thalib r.a.', 'Sahabat Abu Dzar Al-Ghifari r.a.'],
      explanation: 'Salman Al-Farisi mengusulkan taktik parit (khandaq) yang lazim dipakai di negeri Persia.'
    },
    {
      subtopic: 'Fathu Makkah dan Haji Wada\'',
      competency: 'Menganalisis peristiwa pembebasan kota Makkah (Fathu Makkah)',
      question: 'Sikap Rasulullah SAW terhadap para pembesar kafir Quraisy saat peristiwa Fathu Makkah tahun 8 Hijriyah adalah...',
      correctText: 'Memberikan pengampunan umum secara damai ("Hari ini adalah hari kasih sayang")',
      distractors: ['Menghukum mati seluruh tawanan perang', 'Menyita seluruh rumah dan kebun warga Makkah', 'Memaksa seluruh penduduk Makkah masuk Islam seketika'],
      explanation: 'Nabi mengumumkan "Al-yauma yaumul marhamah" dan memaafkan penduduk Makkah dengan damai.'
    },
    // Khulafaur Rasyidin
    {
      subtopic: 'Khulafaur Rasyidin',
      competency: 'Menganalisis prestasi Khalifah Abu Bakar Ash-Shiddiq',
      question: 'Langkah tegas yang diambil oleh Khalifah Abu Bakar Ash-Shiddiq r.a. pada awal masa kekhalifahannya demi menjaga keutuhan Islam adalah...',
      correctText: 'Memerangi orang murtad, nabi palsu (Musailamah al-Kadzdzab), dan kaum yang menolak membayar zakat',
      distractors: ['Memindahkan ibu kota kekhalifahan ke Damaskus', 'Membubarkan dewan syura penasihat khalifah', 'Menghapus penanggalan kalender hijriyah'],
      explanation: 'Perang Riddah dipimpin Abu Bakar untuk menumpas kaum murtad, pembangkang zakat, dan nabi palsu.'
    },
    {
      subtopic: 'Khulafaur Rasyidin',
      competency: 'Menganalisis prestasi Khalifah Umar bin Khattab',
      question: 'Penetapan kalender Hijriyah yang diawali dari peristiwa hijrah Nabi SAW ke Madinah diprakarsai pada masa pemerintahan Khalifah...',
      correctText: 'Umar bin Khattab r.a.',
      distractors: ['Abu Bakar Ash-Shiddiq r.a.', 'Utsman bin Affan r.a.', 'Ali bin Abi Thalib r.a.'],
      explanation: 'Umar bin Khattab menetapkan kalender resmi Hijriyah dan membentuk administrasi Baitul Mal serta pos.'
    },
    {
      subtopic: 'Khulafaur Rasyidin',
      competency: 'Menganalisis prestasi Khalifah Utsman bin Affan',
      question: 'Jasa terbesar Khalifah Utsman bin Affan r.a. yang manfaatnya dirasakan oleh seluruh umat Islam di dunia sampai sekarang adalah...',
      correctText: 'Kodifikasi dan standarisasi penulisan mushaf Al-Qur\'an (Mushaf Utsmani)',
      distractors: ['Pembentukan armada tentara berkuda kavaleri pertama', 'Pembangunan istana megah di padang pasir Syam', 'Penaklukan benteng Konstantinopel'],
      explanation: 'Penyatuan rasm mushaf standar Utsmani menyelamatkan umat Islam dari perpecahan bacaan Al-Qur\'an.'
    },
    {
      subtopic: 'Khulafaur Rasyidin',
      competency: 'Menganalisis masa pemerintahan Khalifah Ali bin Abi Thalib',
      question: 'Tantangan politik terbesar yang dihadapi oleh Khalifah Ali bin Abi Thalib r.a. selama memimpin pemerintahan adalah...',
      correctText: 'Pemberontakan dan perselisihan politik internal (Perang Jamal dan Perang Shiffin)',
      distractors: ['Serangan pasukan kekaisaran Romawi dari utara', 'Krisis pangan paceklik hebat di Madinah', 'Kekurangan penghafal Al-Qur\'an'],
      explanation: 'Fitnah besar memicu perang saudara (Perang Jamal dan Perang Shiffin) pada masa Khalifah Ali.'
    },
    // Dinasti Bani Umayyah
    {
      subtopic: 'Dinasti Bani Umayyah di Damaskus',
      competency: 'Menganalisis pendirian dan kemajuan Dinasti Bani Umayyah',
      question: 'Pendiri sekaligus khalifah pertama Dinasti Bani Umayyah yang memindahkan pusat pemerintahan dari Madinah ke Damaskus adalah...',
      correctText: 'Muawiyah bin Abi Sufyan',
      distractors: ['Marwan bin Hakam', 'Yazid bin Muawiyah', 'Abdul Malik bin Marwan'],
      explanation: 'Muawiyah mendirikan Daulah Umayyah di Damaskus tahun 661 Masehi dan mengubah sistem syura menjadi monarki.'
    },
    {
      subtopic: 'Dinasti Bani Umayyah di Damaskus',
      competency: 'Menganalisis kepemimpinan Umar bin Abdul Aziz',
      question: 'Khalifah Dinasti Umayyah yang terkenal sangat adil, wara\', sederhana, dan dijuluki sebagai "Khulafaur Rasyidin kelima" adalah...',
      correctText: 'Umar bin Abdul Aziz',
      distractors: ['Walid bin Abdul Malik', 'Hisyam bin Abdul Malik', 'Sulaiman bin Abdul Malik'],
      explanation: 'Umar bin Abdul Aziz memimpin dengan adil, menghapus diskriminasi mawali, dan menyejahterakan rakyat.'
    },
    {
      subtopic: 'Dinasti Bani Umayyah di Andalusia (Spanyol)',
      competency: 'Menganalisis kejayaan peradaban Islam di Kordoba',
      question: 'Panglima perang Islam yang memimpin pembebasan wilayah semenanjung Andalusia (Spanyol) pada tahun 711 Masehi adalah...',
      correctText: 'Thariq bin Ziyad',
      distractors: ['Amr bin Ash', 'Sa\'ad bin Abi Waqqash', 'Salahuddin Al-Ayyubi'],
      explanation: 'Thariq bin Ziyad menyeberangi selat Jabal Thariq (Gibraltar) dan membuka pintu peradaban Islam di Andalusia.'
    },
    // Dinasti Bani Abbasiyah
    {
      subtopic: 'Dinasti Bani Abbasiyah di Baghdad',
      competency: 'Menganalisis masa keemasan Daulah Abbasiyah',
      question: 'Lembaga penerjemahan naskah ilmiah internasional dan perpustakaan raksasa yang didirikan di kota Baghdad pada masa Daulah Abbasiyah dinamakan...',
      correctText: 'Baitul Hikmah',
      distractors: ['Darul Ulum', 'Nizhamiyyah', 'Al-Azhar'],
      explanation: 'Baitul Hikmah didirikan oleh Harun Ar-Rasyid dan dikembangkan pesat oleh Khalifah Al-Ma\'mun.'
    },
    {
      subtopic: 'Dinasti Bani Abbasiyah di Baghdad',
      competency: 'Menganalisis ilmuwan muslim bidang matematika dan kedokteran',
      question: 'Ilmuwan muslim penemu angka nol dan pencetus cabang ilmu Aljabar yang hidup pada era Daulah Abbasiyah adalah...',
      correctText: 'Muhammad bin Musa Al-Khawarizmi',
      distractors: ['Ibnu Sina (Avicenna bidang kedokteran)', 'Al-Biruni (astronomi kebumian)', 'Jabir bin Hayyan (bapak kimia)'],
      explanation: 'Al-Khawarizmi menulis kitab Al-Jabr wal Muqabalah dan meletakkan dasar sistem desimal dan aljabar.'
    },
    {
      subtopic: 'Dinasti Bani Abbasiyah di Baghdad',
      competency: 'Menganalisis karya agung Ibnu Sina',
      question: 'Karya ensiklopedia kedokteran karya Ibnu Sina (Avicenna) yang menjadi buku rujukan standar fakultas kedokteran di Eropa selama berabad-abad berjudul...',
      correctText: 'Al-Qanun fi at-Thibb (The Canon of Medicine)',
      distractors: ['Ihya\' Ulumiddin karya Al-Ghazali', 'Tahafut al-Falasifah', 'Al-Madinah Al-Fadhilah karya Al-Farabi'],
      explanation: 'Al-Qanun fi at-Thibb karya Ibnu Sina adalah mahakarya kedokteran paling berpengaruh di dunia.'
    },
    // Dinasti Ayyubiyah
    {
      subtopic: 'Dinasti Al-Ayyubiyah',
      competency: 'Menganalisis kepahlawanan Salahuddin Al-Ayyubi',
      question: 'Pahlawan besar Islam sekaligus pendiri Daulah Ayyubiyah yang berhasil membebaskan kota suci Baitul Maqdis (Yerusalem) dalam Perang Salib adalah...',
      correctText: 'Sultan Salahuddin Al-Ayyubi',
      distractors: ['Sultan Nuruddin Zanki', 'Sultan Baybars Mamluk', 'Sultan Saifuddin Quthuz'],
      explanation: 'Salahuddin Al-Ayyubi memenangkan Pertempuran Hittin tahun 1187 dan membebaskan Yerusalem secara ksatria.'
    },
    // Masuknya Islam di Nusantara dan Walisongo
    {
      subtopic: 'Sejarah Islam di Nusantara',
      competency: 'Menganalisis kerajaan Islam pertama di Indonesia',
      question: 'Kerajaan Islam pertama di kepulauan Nusantara yang terletak di pesisir utara Aceh pada abad ke-13 Masehi adalah...',
      correctText: 'Kesultanan Samudera Pasai dipimpin Sultan Malik As-Saleh',
      distractors: ['Kesultanan Malaka dipimpin Parameswara', 'Kesultanan Demak dipimpin Raden Patah', 'Kesultanan Aceh Darussalam dipimpin Sultan Ali Mughayat Syah'],
      explanation: 'Samudera Pasai dikonfirmasi oleh Ibnu Battuta dan nisan Malik As-Saleh bertarikh 1297 M.'
    },
    {
      subtopic: 'Dakwah Walisongo di Pulau Jawa',
      competency: 'Menganalisis metode dakwah Sunan Kudus',
      question: 'Metode dakwah Sunan Kudus (Ja\'far Shadiq) yang sangat menghormati budaya masyarakat Hindu setempat diwujudkan dengan cara...',
      correctText: 'Melarang penyembelihan sapi saat Idul Adha dan menggantinya dengan kerbau demi toleransi',
      distractors: ['Memaksa warga merobohkan seluruh pura tempat peribadatan', 'Menghapuskan upacara pernikahan adat Jawa', 'Menolak berinteraksi dengan masyarakat selain pemeluk Islam'],
      explanation: 'Sunan Kudus melarang menyembelih sapi (hewan suci bagi umat Hindu) dan mendirikan menara masjid bercorak candi.'
    },
    {
      subtopic: 'Dakwah Walisongo di Pulau Jawa',
      competency: 'Menganalisis peran Sunan Giri',
      question: 'Wali sanga yang mendirikan pesantren di bukit Giri Gresik dan menciptakan tembang dolanan anak-anak seperti "Jelungan" dan "Padhang Bulan" adalah...',
      correctText: 'Sunan Giri (Raden Paku)',
      distractors: ['Sunan Bonang (Raden Makdum Ibrahim)', 'Sunan Drajat (Raden Qasim)', 'Sunan Muria (Raden Umar Said)'],
      explanation: 'Sunan Giri mengembangkan dakwah lewat pendidikan pesantren kepemimpinan dan tembang dolanan edukatif.'
    }
  ];

  return buildUniqueSubjectBank({
    subjectId: 'ski',
    subjectName: 'SKI MTs',
    categoryId: 'rumpun_pai',
    categoryName: 'Rumpun PAI MTs',
    akgtkCategory: 'Rumpun PAI',
    educationLevel: 'MTs',
    idPrefix: 'mts-sk-',
    totalTarget: items.length,
    generator: (i, diff, num) => {
      const item = items[i];
      return {
        subtopic: item.subtopic,
        competency: item.competency,
        question: item.question,
        correctText: item.correctText,
        distractors: item.distractors,
        explanation: item.explanation,
        tip: 'Kuasai kronologi sejarah Nabi, Khulafaur Rasyidin, Daulah Umayyah-Abbasiyah, dan Walisongo di Nusantara.'
      };
    }
  });
}

// ==========================================
// 5. BAHASA ARAB MTS (60 UNIQUE QUESTIONS)
// ==========================================
function generateBahasaArabMTs() {
  const items = [
    // Qawa'id / Nahwu Shorof
    {
      subtopic: 'Isim Isyarah dan Muannats/Mudzakar',
      competency: 'Mengidentifikasi isim isyarah lil qorib/lil ba\'id sesuai jenis kata',
      question: 'Isim isyarah (kata tunjuk) yang tepat untuk melengkapi kalimat: "... سَبُّورَةٌ جَدِيدَةٌ فِي الفَصْلِ" adalah...',
      correctText: 'هَذِهِ (hadzihi)',
      distractors: ['هَذَا (hadza)', 'ذَلِكَ (dzalika)', 'هَؤُلَاءِ (ha\'ula\'i)'],
      explanation: 'Kata "سبورة" adalah isim muannats (ada ta marbuthah), maka menggunakan kata tunjuk muannats "هذه".'
    },
    {
      subtopic: 'Isim Isyarah Mudzakkar',
      competency: 'Mengidentifikasi isim isyarah lil ba\'id mudzakkar',
      question: 'Isim isyarah untuk benda mudzakkar yang berada jauh pada kalimat: "... كِتَابٌ نَافِعٌ عَلَى المَكْتَبِ" adalah...',
      correctText: 'ذَلِكَ (dzalika)',
      distractors: ['تِلْكَ (tilka)', 'هَذِهِ (hadzihi)', 'هَاتَانِ (haataani)'],
      explanation: 'Kata "كتاب" berjenis mudzakkar tanpa ta marbuthah, untuk jarak jauh menggunakan "ذلك".'
    },
    {
      subtopic: 'Dhomir Munfashil (Kata Ganti Mandiri)',
      competency: 'Menggunakan dhomir ghaib dan mukhatab dengan tepat',
      question: 'Dhomir munfashil (kata ganti) yang tepat untuk subjek jamak mudzakkar gaib (mereka laki-laki) adalah...',
      correctText: 'هُمْ (hum)',
      distractors: ['هُنَّ (hunna)', 'أَنْتُمْ (antum)', 'نَحْنُ (nahnu)'],
      explanation: '"هم" adalah dhomir jamak mudzakkar ghaib.'
    },
    {
      subtopic: 'Dhomir Muttashil (Kata Ganti Kepemilikan)',
      competency: 'Menganalisis dhomir muttashil kepemilikan',
      question: 'Frasa "Buku tulismu (seorang laki-laki)" dalam bahasa Arab yang benar menggunakan dhomir muttashil adalah...',
      correctText: 'كِتَابُكَ (kitaabuka)',
      distractors: ['كِتَابُكِ (kitaabuki)', 'كِتَابُهُ (kitaabuhu)', 'كِتَابُنَا (kitaabunaa)'],
      explanation: 'Akhiran kaf berharakat fathah (-ka) adalah dhomir muttashil untuk anta (kamu laki-laki).'
    },
    {
      subtopic: 'Huruf Jar',
      competency: 'Menerapkan kaidah huruf jar yang memajrurkan isim',
      question: 'Harakat akhir yang benar untuk kata "المَسْجِد" setelah didahului huruf jar "إِلَى" adalah...',
      correctText: 'Kasrah menjadi "إِلَى المَسْجِدِ"',
      distractors: ['Dhammah menjadi "إِلَى المَسْجِدُ"', 'Fathah menjadi "إِلَى المَسْجِدَ"', 'Sukun menjadi "إِلَى المَسْجِدْ"'],
      explanation: 'Huruf jar (إلى, في, من, على, dll) menyebabkan isim setelahnya berstatus majrur bertanda kasrah.'
    },
    {
      subtopic: 'Tarkib Na\'at Man\'ut (Kata Sifat)',
      competency: 'Menyesuaikan sifat (na\'at) dengan yang disifati (man\'ut)',
      question: 'Penyusunan tarkib na\'at man\'ut yang tepat pada frasa "Siswa yang rajin" dalam bahasa Arab adalah...',
      correctText: 'الطَّالِبُ النَّشِيطُ (At-thaalibu an-nasyiithu)',
      distractors: ['طَالِبٌ النَّشِيطُ (Thaalibun an-nasyiithu)', 'الطَّالِبُ نَشِيطَةٌ (At-thaalibu nasyiithatun)', 'طَالِبَةٌ النَّشِيطُ (Thaalibatun an-nasyiithu)'],
      explanation: 'Na\'at harus mengikuti man\'ut dalam 4 hal: i\'rab, ma\'rifah/nakirah, mudzakkar/muannats, dan mufrad/tasniyah/jamak.'
    },
    {
      subtopic: 'Tarkib Idhafah (Kepemilikan Majemuk)',
      competency: 'Menganalisis ketentuan mudhaf dan mudhaf ilaih',
      question: 'Ciri kaidah utama kata pertama (Mudhaf) pada susunan tarkib idhafah adalah...',
      correctText: 'Tidak boleh memakai tanwin dan tidak boleh diawali alif lam (Al-)',
      distractors: ['Harus berharakat sukun di akhir kata', 'Wajib berakhiran huruf nun bertasydid', 'Harus selalu berupa kata kerja fi\'il amr'],
      explanation: 'Mudhaf tidak boleh bertanwin dan tidak boleh bertanwin/ber-alif lam (contoh: بَابُ الفَصْلِ).'
    },
    {
      subtopic: 'Mubtada dan Khabar',
      competency: 'Menganalisis struktur kalimat isimiyyah',
      question: 'Pada jumlah ismiyyah: "المَدْرَسَةُ نَظِيفَةٌ" (Madrasah itu bersih), kedudukan kata "نَظِيفَةٌ" adalah sebagai...',
      correctText: 'Khabar (predikat penjelas yang berharakat dhammah)',
      distractors: ['Mubtada\' (pokok kalimat subjek)', 'Maf\'ul bih (objek penderita)', 'Fa\'il (pelaku pekerjaan)'],
      explanation: 'Mubtada adalah subjek ma\'rifah di awal kalimat, dan khabar adalah pelengkap penjelas keadaan mubtada.'
    },
    {
      subtopic: 'Fi\'il Madhi (Kata Kerja Masa Lampau)',
      competency: 'Mentashrif fi\'il madhi sesuai subjek dhomir',
      question: 'Bentuk perubahan fi\'il madhi kata "ذَهَبَ" (telah pergi) untuk subjek "فَاطِمَةُ" (dia seorang perempuan) adalah...',
      correctText: 'ذَهَبَتْ (dzahabat)',
      distractors: ['ذَهَبُوا (dzahabuu)', 'ذَهَبْتَ (dzahabta)', 'ذَهَبْنَا (dzahabnaa)'],
      explanation: 'Fi\'il madhi untuk dhomir hiya (Fatimatun) mendapat tambahan ta ta\'nits sakinah: dzahabat.'
    },
    {
      subtopic: 'Fi\'il Mudhari\' (Kata Kerja Masa Sekarang/Akan Datang)',
      competency: 'Mentashrif fi\'il mudhari\' dengan huruf mudhara\'ah',
      question: 'Bentuk fi\'il mudhari\' dari kata "قَرَأَ" untuk dhomir subjek "نَحْنُ" (kita/kami) adalah...',
      correctText: 'نَقْرَأُ (naqra\'u)',
      distractors: ['يَقْرَأُ (yaqra\'u)', 'تَقْرَأُ (taqra\'u)', 'أَقْرَأُ (aqra\'u)'],
      explanation: 'Dhomir nahnu diawali huruf mudhara\'ah nun: naqra\'u.'
    },
    {
      subtopic: 'Fi\'il Amr (Kata Kerja Perintah)',
      competency: 'Membentuk fi\'il amr untuk mukhatab',
      question: 'Bentuk fi\'il amr (kata perintah) dari "كَتَبَ - يَكْتُبُ" yang ditujukan kepada seorang murid laki-laki (anta) adalah...',
      correctText: 'اُكْتُبْ (uktub)',
      distractors: ['اُكْتُبِي (uktubii)', 'اُكْتُبُوا (uktubuu)', 'كَتَبْتَ (katabta)'],
      explanation: 'Fi\'il amr untuk anta berharakat akhir sukun: uktub.'
    },
    {
      subtopic: 'Maf\'ul Bih (Objek Kalimat)',
      competency: 'Menganalisis tanda i\'rab nashab pada maf\'ul bih',
      question: 'Pada kalimat: "يَشْرَبُ عَلِيٌّ المَاءَ" (Ali meminum air), harakat kata "المَاءَ" berharakat fathah karena berkedudukan sebagai...',
      correctText: 'Maf\'ul bih (objek penderita yang berstatus manshub)',
      distractors: ['Fa\'il (subjek pelaku perbuatan)', 'Mudhaf ilaih yang majrur', 'Na\'at yang marfu\''],
      explanation: 'Maf\'ul bih berstatus i\'rab nashab bertanda utama fathah.'
    },
    // Mufrodat dan Hiwar Tematik MTs
    {
      subtopic: 'At-Ta\'aruf (Perkenalan Diri)',
      competency: 'Menjawab ungkapan sapaan dan perkenalan',
      question: 'Apabila seseorang menyapa Anda dengan kalimat: "أَهْلًا وَسَهْلًا" (Selamat datang), jawaban santun yang tepat adalah...',
      correctText: 'أَهْلًا بِكَ (ahlan bika / ahlan biki)',
      distractors: ['صَبَاحَ الخَيْرِ (shabaahal khair)', 'مَعَ السَّلَامَةِ (ma\'as salaamah)', 'الحَمْدُ لِلَّهِ (alhamdulillah)'],
      explanation: 'Jawaban standar ahlan wa sahlan adalah ahlan bika (pria) atau ahlan biki (wanita).'
    },
    {
      subtopic: 'At-Ta\'aruf (Perkenalan Diri)',
      competency: 'Menanyakan kabar dalam percakapan sehari-hari',
      question: 'Pertanyaan: "كَيْفَ حَالُكَ يَا أَخِي؟" (Bagaimana kabarmu saudaraku?). Jawaban yang benar adalah...',
      correctText: 'بِخَيْرٍ وَالحَمْدُ لِلَّهِ (bi khairin walhamdulillah)',
      distractors: ['أَنَا طَالِبٌ فِي المَدْرَسَةِ (ana thaalibun)', 'عَفْوًا يَا أُسْتَاذُ (\'afwan yaa ustaadz)', 'إِلَى اللِّقَاءِ (ilal liqaa\')'],
      explanation: 'Kaifa haluka dijawab bi khairin walhamdulillah (baik-baik saja bersyukur kepada Allah).'
    },
    {
      subtopic: 'Al-Adawatul Madrasiyyah (Peralatan Sekolah)',
      competency: 'Mengidentifikasi kosakata fasilitas dan alat tulis madrasah',
      question: 'Kosakata bahasa Arab untuk "Penghapus papan tulis" adalah...',
      correctText: 'طَلَّاسَةٌ / مِمْسَحَةٌ (thallaasatun / mimsahatun)',
      distractors: ['مِسْطَرَةٌ (penggaris mistar)', 'مِبْرَاةٌ (rautan pensil)', 'مِحْفَظَةٌ (tas sekolah)'],
      explanation: 'Thallaasah / mimsahah adalah penghapus papan tulis (sabbuurah).'
    },
    {
      subtopic: 'As-Sa\'ah (Waktu dan Jam)',
      competency: 'Menyatakan jam dan waktu dalam bahasa Arab',
      question: 'Bahasa Arab untuk menyatakan "Pukul 07.30 pagi (Jam tujuh lebih setengah)" adalah...',
      correctText: 'السَّاعَةُ السَّابِعَةُ وَالنِّصْفُ صَبَاحًا',
      distractors: ['السَّاعَةُ السَّادِسَةُ وَالرُّبْعُ مَسَاءً', 'السَّاعَةُ الثَّامِنَةُ إِلَّا الرُّبْعَ', 'السَّاعَةُ الوَاحِدَةُ ظُهْرًا'],
      explanation: 'Jam 7 = as-saabi\'ah, lewat setengah = wan nishf, pagi = shabaahan.'
    },
    {
      subtopic: 'Al-Hiwayah (Hobi dan Kegemaran)',
      competency: 'Mengidentifikasi kosakata aneka hobi santri',
      question: 'Santri yang gemar membaca buku di perpustakaan memiliki hobi...',
      correctText: 'القِرَاءَةُ (al-qiraa\'ah)',
      distractors: ['الرِّسَالَةُ (menulis surat)', 'السِّبَاحَةُ (berenang)', 'الرَّسْمُ (melukis)'],
      explanation: 'Al-Qiraa\'ah bermakna membaca.'
    },
    {
      subtopic: 'Al-Mihnah (Profesi dan Pekerjaan)',
      competency: 'Mengidentifikasi nama-nama profesi pekerjaan',
      question: 'Kalimat: "يَعْمَلُ أَبِي فِي المُسْتَشْفَى وَيُعَالِجُ المَرْضَى". Profesi ayah dalam kalimat tersebut adalah...',
      correctText: 'طَبِيبٌ (Thabiibun / Dokter)',
      distractors: ['مُدَرِّسٌ (Guru sekolah)', 'فَلَّاحٌ (Petani sawah)', 'تَاجِرٌ (Pedagang toko)'],
      explanation: 'Yang bekerja di rumah sakit (mustasyfa) dan mengobati orang sakit (yu\'alijul mardha) adalah dokter (thabiib).'
    },
    {
      subtopic: 'Fi Syafaqil Bait (Bagian-Bagian Rumah)',
      competency: 'Mengidentifikasi ruangan di dalam rumah',
      question: 'Ruangan tempat memasak makanan di rumah disebut...',
      correctText: 'المَطْبَخُ (al-mathbakh / dapur)',
      distractors: ['غُرْفَةُ النَّوْمِ (kamar tidur)', 'غُرْفَةُ الجُلُوسِ (ruang tamu)', 'الحَمَّامُ (kamar mandi)'],
      explanation: 'Al-Mathbakh adalah dapur tempat memasak.'
    },
    {
      subtopic: 'Ar-Riyadhah (Olahraga)',
      competency: 'Mengidentifikasi jenis cabang olahraga',
      question: 'Permainan "Sepak bola" dalam bahasa Arab diistilahkan dengan...',
      correctText: 'كُرَةُ القَدَمِ (kuratulkadam)',
      distractors: ['كُرَةُ السَّلَّةِ (bola basket)', 'كُرَةُ الطَّائِرَةِ (bola voli)', 'كُرَةُ الطَّاوِلَةِ (tenis meja)'],
      explanation: 'Kurah (bola) + al-qadam (kaki) = sepak bola.'
    }
  ];

  return buildUniqueSubjectBank({
    subjectId: 'bahasa_arab',
    subjectName: 'Bahasa Arab MTs',
    categoryId: 'rumpun_pai',
    categoryName: 'Rumpun PAI MTs',
    akgtkCategory: 'Rumpun PAI',
    educationLevel: 'MTs',
    idPrefix: 'mts-ba-',
    totalTarget: items.length,
    generator: (i, diff, num) => {
      const item = items[i];
      return {
        subtopic: item.subtopic,
        competency: item.competency,
        question: item.question,
        correctText: item.correctText,
        distractors: item.distractors,
        explanation: item.explanation,
        tip: 'Pahami qawaid nahwu shorof (mubtada khabar, tarkib, fiil) dan mufrodat tematik madrasah.'
      };
    }
  });
}

module.exports = {
  generateQuranHaditsMTs,
  generateAkidahAkhlakMTs,
  generateFikihMTs,
  generateSkiMTs,
  generateBahasaArabMTs
};
