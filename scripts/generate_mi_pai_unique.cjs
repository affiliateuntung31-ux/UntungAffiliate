// Generator for MI (Madrasah Ibtidaiyah) Rumpun PAI (750 Questions)
// 5 Subjects: Quran Hadits (150), Akidah Akhlak (150), Fikih (150), SKI (150), Bahasa Arab (150)
// Guarantees 100% Unique Questions, Balanced Keys, Zero Duplication
const { buildUniqueSubjectBank } = require('./generate_all_subjects_master.cjs');

// 1. QURAN HADITS MI (150 Soal Unik)
function generateQuranHaditsMI() {
  const topics = [
    {
      subtopic: 'Huruf Hijaiyah dan Makharijul Huruf',
      comp: 'Mengenal huruf hijaiyah dan pelafalan makharijul huruf dasar',
      scenarios: [
        { q: 'Huruf hijaiyah yang pelafalannya keluar dari rongga tenggorokan bagian tengah (wasathul halqi) adalah...', c: 'ع (Ain) dan ح (Ha)', d: ['ء (Hamzah) dan هـ (Ha)', 'غ (Ghain) dan خ (Kha)', 'ق (Qaf) dan ك (Kaf)'] },
        { q: 'Huruf-huruf hijaiyah yang makhrajnya keluar dari ujung lidah bertemu dengan ujung dua gigi seri atas adalah...', c: 'ث (Tsa), ذ (Dzal), dan ظ (Zha)', d: ['ت (Ta), ط (Tha), dan د (Dal)', 'ص (Shad), س (Sin), dan ز (Zai)', 'ف (Fa), و (Wau), dan ب (Ba)'] },
        { q: 'Harakat yang berupa garis melengkung kecil di atas huruf hijaiyah dan berbunyi "u" disebut...', c: 'Dhammah', d: ['Fathah', 'Kasrah', 'Sukun'] },
        { q: 'Tanda baca yang berfungsi menggandakan bunyi konsonan (huruf berlipat/dobel) dalam Al-Qur\'an dinamakan...', c: 'Tasydid / Syaddah', d: ['Tanwin', 'Fathatain', 'Kasratain'] },
        { q: 'Bunyi bacaan nun mati yang dihasilkan dari harakat baris dua (dua fathah, dua kasrah, dua dhammah) disebut...', c: 'Tanwin', d: ['Waqaf', 'Ibtida', 'Washal'] },
        { q: 'Huruf-huruf yang keluar dari dua bibir (syafatain) dalam pelafalan makhraj hijaiyah adalah...', c: 'ب (Ba), م (Mim), و (Wau), dan ف (Fa)', d: ['ج (Jim), ش (Syin), dan ي (Ya)', 'ر (Ra), ن (Nun), dan ل (Lam)', 'ط (Tha), د (Dal), dan ت (Ta)'] },
        { q: 'Tanda sukun pada huruf hijaiyah menandakan bahwa huruf tersebut berharakat...', c: 'Mati / konsonan tanpa vokal', d: ['Panjang dua harakat', 'Dengung dua harakat', 'Berbunyi vokal rangkap'] },
        { q: 'Huruf Alif (ا), Wau sukun (وْ), dan Ya sukun (يْ) yang didahului harakat yang sesuai berfungsi sebagai huruf...', c: 'Mad thabi\'i (pemanjang bacaan)', d: ['Qalqalah (pemantul bacaan)', 'Ghunnah (pendengung bacaan)', 'Saktah (penghenti nafas)'] },
        { q: 'Harakat fathatain jika dibaca waqaf pada akhir ayat (selain ta marbuthah) dihukumi sebagai...', c: 'Mad Iwadh (dibaca panjang 2 harakat berbunyi a)', d: ['Mad Wajib Muttashil', 'Mad Jaiz Munfashil', 'Idgham Bighunnah'] },
        { q: 'Jumlah keseluruhan huruf hijaiyah yang digunakan dalam penulisan Mushaf Al-Qur\'an standar adalah...', c: '28 hingga 29 huruf', d: ['20 huruf', '36 huruf', '15 huruf'] }
      ]
    },
    {
      subtopic: 'Hukum Tajwid: Nun Sukun dan Tanwin',
      comp: 'Menerapkan kaidah hukum nun mati/tanwin (Idzhar, Idgham, Iqlab, Ikhfa)',
      scenarios: [
        { q: 'Apabila nun sukun (نْ) atau tanwin bertemu dengan salah satu huruf halqi (ء، هـ، ع، ح، غ، خ), hukum bacaannya adalah...', c: 'Idzhar Halqi (dibaca jelas tanpa dengung)', d: ['Idgham Bighunnah', 'Ikhfa Haqiqi', 'Iqlab'] },
        { q: 'Pada lafadz "مَنْ يَقُولُ", nun sukun bertemu dengan huruf Ya (ي). Cara membacanya yang tepat adalah...', c: 'Idgham Bighunnah (memasukkan bunyi nun disertai dengung)', d: ['Idzhar Halqi (jelas)', 'Idgham Bilaghunnah (tanpa dengung)', 'Iqlab'] },
        { q: 'Hukum bacaan Iqlab terjadi apabila nun sukun atau tanwin bertemu secara langsung dengan huruf...', c: 'ب (Ba)', d: ['م (Mim)', 'ن (Nun)', 'ت (Ta)'] },
        { q: 'Pada lafadz "مِنْ رَبِّهِمْ", nun sukun bertemu huruf Ra (ر). Hukum tajwid pada potongan ayat ini adalah...', c: 'Idgham Bilaghunnah (melebur tanpa dengung)', d: ['Idgham Bighunnah', 'Ikhfa Haqiqi', 'Idzhar Halqi'] },
        { q: 'Jumlah huruf bacaan Ikhfa Haqiqi yang harus dibaca samar disertai dengung (ghunnah) berjumlah...', c: '15 huruf', d: ['6 huruf', '4 huruf', '2 huruf'] },
        { q: 'Contoh bacaan Idzhar Halqi yang terdapat dalam juz Amma adalah...', c: 'مِنْ خَوْفٍ', d: ['مِنْ شَرِّ', 'مَنْ يَعْمَلْ', 'مِنْ بَعْدِ'] },
        { q: 'Pada lafadz "عَلِيمٌ بِذَاتِ الصُّدُورِ", harakat tanwin bertemu dengan huruf Ba. Cara membacanya adalah...', c: 'Mengganti bunyi tanwin menjadi mim sukun samar disertai dengung', d: ['Membaca tanwin secara jelas dan terputus', 'Menghilangkan huruf ba sepenuhnya', 'Memantulkan huruf mim'] },
        { q: 'Pengecualian hukum Idgham Bighunnah terjadi pada kata "دُنْيَا" dan "بُنْيَانٌ" karena berada dalam satu kata, sehingga hukumnya dibaca...', c: 'Idzhar Wajib / Mutlaq (dibaca jelas)', d: ['Iqlab', 'Ikhfa Syafawi', 'Mad Lazim'] },
        { q: 'Huruf-huruf Idgham Bilaghunnah terdiri dari dua huruf hijaiyah, yaitu...', c: 'Lam (ل) dan Ra (ر)', d: ['Ya (ي) dan Wau (و)', 'Khaf (ك) dan Qaf (ق)', 'Mim (م) dan Nun (ن)'] },
        { q: 'Pada lafadz "أَنْفُسَكُمْ", nun sukun bertemu dengan huruf Fa (ف). Hukum bacaan yang berlaku adalah...', c: 'Ikhfa Haqiqi', d: ['Idzhar Halqi', 'Idgham Bighunnah', 'Iqlab'] }
      ]
    },
    {
      subtopic: 'Hukum Tajwid: Mim Sukun dan Qalqalah',
      comp: 'Menerapkan kaidah mim sukun dan hukum pantulan qalqalah',
      scenarios: [
        { q: 'Apabila mim sukun (مْ) bertemu dengan huruf Ba (ب), hukum bacaan tajwidnya adalah...', c: 'Ikhfa Syafawi', d: ['Idzhar Syafawi', 'Idgham Mimi / Mitslain', 'Iqlab'] },
        { q: 'Pada lafadz "لَهُمْ مَّا يَشَاءُونَ", mim sukun bertemu huruf Mim berharakat. Hukum bacaannya dinamakan...', c: 'Idgham Mimi / Idgham Mitslain', d: ['Ikhfa Syafawi', 'Idzhar Halqi', 'Idgham Bilaghunnah'] },
        { q: 'Hukum bacaan Idzhar Syafawi berlaku apabila mim sukun (مْ) bertemu dengan...', c: 'Seluruh huruf hijaiyah selain Mim dan Ba', d: ['Huruf Alif dan Ya saja', 'Hanya huruf tenggorokan', 'Huruf qalqalah saja'] },
        { q: 'Huruf-huruf qalqalah (bacaan memantul) terangkum dalam singkatan...', c: 'قَطْبُ جَدٍّ (Qaf, Tha, Ba, Jim, Dal)', d: ['يَرْمَلُونَ (Ya, Ra, Mim, Lam, Wau, Nun)', 'أَخِي هَاكَ عِلْمًا', 'سُنَّتُ فَدَكَ'] },
        { q: 'Qalqalah Sughra terjadi apabila huruf qalqalah berharakat sukun asli dan terletak di...', c: 'Tengah kata/kalimat secara alami', d: ['Akhir ayat karena diwaqafkan', 'Awal permulaan kalimat', 'Sebelum huruf mad'] },
        { q: 'Pada lafadz "قُلْ هُوَ اللَّهُ أَحَدٌ" ketika dibaca waqaf pada kata "أَحَدْ", huruf Dal dipantulkan dengan hukum...', c: 'Qalqalah Kubra (pantulan kuat karena waqaf)', d: ['Qalqalah Sughra', 'Idgham Mutajanisain', 'Ghunnah Musyaddadah'] },
        { q: 'Perhatikan kata "يَطْمَعُ", huruf Tha (ط) berharakat sukun di tengah kata. Hukum bacaannya adalah...', c: 'Qalqalah Sughra', d: ['Qalqalah Kubra', 'Ikhfa Syafawi', 'Idzhar Syafawi'] },
        { q: 'Tingkat pantulan qalqalah yang paling kuat ketika huruf qalqalah berada di akhir kata dan bertasydid (seperti "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ") disebut...', c: 'Qalqalah Akbar', d: ['Qalqalah Sughra', 'Qalqalah Mutawassithah', 'Idgham Shaghir'] },
        { q: 'Pada lafadz "أَلَمْ تَرَ كَيْفَ", hukum bacaan mim sukun bertemu huruf Ta adalah...', c: 'Idzhar Syafawi (dibaca jelas pada bibir tanpa dengung)', d: ['Ikhfa Syafawi', 'Idgham Mimi', 'Iqlab'] },
        { q: 'Sikap hati-hati membaca Idzhar Syafawi ditekankan saat mim sukun bertemu huruf Wau (و) dan Fa (ف) agar tidak terbaca...', c: 'Samar atau mendengung (ikhfa)', d: ['Memantul (qalqalah)', 'Panjang enam harakat', 'Sengau berlebihan'] }
      ]
    },
    {
      subtopic: 'Hukum Alif Lam Syamsiyah dan Qamariyah',
      comp: 'Membedakan hukum bacaan Alif Lam Syamsiyah dan Alif Lam Qamariyah',
      scenarios: [
        { q: 'Hukum bacaan Alif Lam (ال) dinamakan Al-Qamariyah apabila huruf lam dibaca...', c: 'Jelas dan terang (berharakat sukun)', d: ['Melebur ke huruf berikutnya dengan tasydid', 'Samar-samar dengan dengung', 'Memantul dengan kuat'] },
        { q: 'Contoh bacaan Al-Qamariyah dalam Al-Qur\'an surat Al-Fatihah adalah lafadz...', c: 'اَلْحَمْدُ لِلَّهِ', d: ['اَلرَّحْمَنِ', 'اَلصِّرَاطَ', 'اَلضَّالِّينَ'] },
        { q: 'Ciri utama penulisan lafadz Al-Syamsiyah pada mushaf Al-Qur\'an rasm Usmani adalah...', c: 'Terdapat tanda tasydid pada huruf setelah huruf Alif Lam', d: ['Terdapat tanda sukun di atas huruf Lam', 'Terdapat tanda bendera mad di atas Alif', 'Huruf lam diberi harakat kasrah'] },
        { q: 'Pada lafadz "وَالشَّمْسِ وَضُحَاهَا", hukum bacaan Alif Lam pada kata "وَالشَّمْسِ" adalah...', c: 'Al-Syamsiyah (Idgham Syamsiyah)', d: ['Al-Qamariyah (Idzhar Qamariyah)', 'Idzhar Halqi', 'Iqlab'] },
        { q: 'Huruf-huruf Al-Qamariyah berjumlah 14 huruf yang terangkum dalam bait kalimat...', c: 'اَبْغِ حَجَّكَ وَخَفْ عَقِيمَهُ', d: ['طِبْ ثُمَّ صِلْ رَحْمًا تَفُزْ', 'يَرْمَلُونَ فِيهَا', 'قَطْبُ جَدٍّ قَرِيبٌ'] },
        { q: 'Pada kata "اَلْكَوْثَرَ", hukum bacaan Alif Lam adalah...', c: 'Al-Qamariyah karena Al bertemu huruf Kaf', d: ['Al-Syamsiyah karena Al bertemu huruf Waw', 'Ikhfa Syafawi', 'Mad Far\'i'] },
        { q: 'Pada kata "اَلنَّاسِ", bunyi huruf Lam tidak terdengar karena melebur ke dalam huruf Nun. Hukumnya adalah...', c: 'Al-Syamsiyah', d: ['Al-Qamariyah', 'Idzhar Mutlaq', 'Qalqalah'] },
        { q: 'Kata "اَلْفَلَقِ" dibaca dengan hukum...', c: 'Al-Qamariyah', d: ['Al-Syamsiyah', 'Iqlab', 'Mad Lazim'] },
        { q: 'Alif lam yang masuk pada kata "اَلصَّمَدُ" dibaca melebur menjadi "ash-shamad". Ini adalah contoh...', c: 'Al-Syamsiyah', d: ['Al-Qamariyah', 'Idzhar Syafawi', 'Ikhfa'] },
        { q: 'Jumlah huruf hijaiyah yang menjadi pasangan hukum Al-Syamsiyah adalah sebanyak...', c: '14 huruf', d: ['10 huruf', '20 huruf', '8 huruf'] }
      ]
    },
    {
      subtopic: 'Hukum Bacaan Mad Thabi\'i dan Mad Far\'i Dasar',
      comp: 'Menerapkan kaidah hukum mad asli dan mad cabang pada bacaan Al-Qur\'an',
      scenarios: [
        { q: 'Hukum mad asli (Mad Thabi\'i) dibaca panjang sebanyak...', c: '1 alif atau 2 harakat', d: ['2 alif atau 4 harakat', '3 alif atau 6 harakat', 'Setengah harakat'] },
        { q: 'Syarat terjadinya Mad Thabi\'i dengan huruf Wau sukun (وْ) adalah huruf sebelumnya harus berharakat...', c: 'Dhammah', d: ['Fathah', 'Kasrah', 'Sukun'] },
        { q: 'Syarat terjadinya Mad Thabi\'i dengan huruf Ya sukun (يْ) adalah huruf sebelumnya harus berharakat...', c: 'Kasrah', d: ['Fathah', 'Dhammah', 'Tanwin'] },
        { q: 'Apabila huruf mad bertemu dengan huruf hamzah (ء) dalam SATU KATA yang sama, hukum bacaannya adalah...', c: 'Mad Wajib Muttashil', d: ['Mad Jaiz Munfashil', 'Mad Aridh Lissukun', 'Mad Iwad'] },
        { q: 'Contoh bacaan Mad Wajib Muttashil dalam surat An-Nashr adalah lafadz...', c: 'إِذَا جَاءَ نَصْرُ اللَّهِ', d: ['إِنَّا أَعْطَيْنَاكَ', 'فِي دِينِ اللَّهِ', 'مَا أَغْنَى عَنْهُ'] },
        { q: 'Apabila huruf mad bertemu dengan huruf hamzah dalam DUA KATA yang terpisah, hukum bacaannya dinamakan...', c: 'Mad Jaiz Munfashil', d: ['Mad Wajib Muttashil', 'Mad Badal', 'Mad Tamkin'] },
        { q: 'Contoh bacaan Mad Jaiz Munfashil dalam surat Al-Kautsar adalah potongan ayat...', c: 'إِنَّا أَعْطَيْنَاكَ', d: ['وَانْحَرْ', 'هُوَ الْأَبْتَرُ', 'لِرَبِّكَ'] },
        { q: 'Apabila bacaan Mad Thabi\'i dihentikan (waqaf) karena bertemu huruf hidup di akhir ayat, hukum bacaannya menjadi...', c: 'Mad Aridh Lissukun', d: ['Mad Silah Qashirah', 'Mad Farq', 'Mad Lazim Kilmi'] },
        { q: 'Panjang bacaan Mad Aridh Lissukun ketika membaca Al-Qur\'an boleh dibaca...', c: '2, 4, atau 6 harakat', d: ['Hanya 1 harakat', 'Wajib 8 harakat', 'Tidak boleh dipanjangkan'] },
        { q: 'Panjang bacaan standar Mad Wajib Muttashil pada riwayat Imam Ashim jalur Hafs adalah...', c: '4 sampai 5 harakat', d: ['2 harakat saja', '8 harakat', '1 harakat'] }
      ]
    },
    {
      subtopic: 'Kandungan Surah Al-Fatihah dan An-Nas',
      comp: 'Memahami arti dan isi pokok kandungan Surah Al-Fatihah dan Surah An-Nas',
      scenarios: [
        { q: 'Surah Al-Fatihah disebut sebagai "Ummul Qur\'an" yang artinya...', c: 'Induk atau inti sari Al-Qur\'an', d: ['Penutup Al-Qur\'an', 'Surah terpanjang Al-Qur\'an', 'Surah terakhir yang turun'] },
        { q: 'Ayat "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ" dalam surah Al-Fatihah menegaskan prinsip tauhid berupa...', c: 'Ibadah dan permohonan pertolongan hanya ditujukan kepada Allah semata', d: ['Mencari rezeki tanpa berdoa', 'Kewajiban menuntut ilmu fiqih', 'Hukum pembagian warisan'] },
        { q: 'Nama lain Surah Al-Fatihah adalah "As-Sab\'ul Matsani" karena terdiri atas...', c: 'Tujuh ayat yang selalu diulang-ulang dalam setiap rakaat shalat', d: ['Tujuh puluh kata mutiara', 'Tujuh hukum syariat', 'Tujuh kisah nabi'] },
        { q: 'Pesan utama dalam Surah An-Nas adalah perintah memohon perlindungan kepada Allah dari kejahatan...', c: 'Bisikan setan yang tersembunyi baik dari golongan jin maupun manusia', d: ['Bencana gempa bumi', 'Penyakit menular pada hewan', 'Kegagalan bercocok tanam'] },
        { q: 'Tiga gelar keagungan Allah yang disebutkan dalam tiga ayat pertama Surah An-Nas adalah...', c: 'Rabbun Nas, Malikin Nas, dan Ilahin Nas', d: ['Al-Khaliq, Ar-Razzaq, dan Al-Ghafur', 'Al-Malik, Al-Quddus, dan As-Salam', 'Ar-Rahman, Ar-Rahim, dan Al-Jabbar'] },
        { q: 'Kata "Al-Waswasil Khannas" dalam Surah An-Nas memiliki makna hakiki...', c: 'Pembisik kejahatan yang suka bersembunyi dan lari saat mengingat Allah', d: ['Orang yang suka berdusta di pasar', 'Pencuri yang merusak tanaman', 'Musuh yang menyerang terang-terangan'] },
        { q: 'Bersama dengan Surah Al-Falaq, Surah An-Nas dinamakan "Al-Mu\'awwidzatain" yang artinya...', c: 'Dua surah pemohon perlindungan kepada Allah', d: ['Dua surah pembuka rezeki', 'Dua surah hukum ibadah', 'Dua surah kabar gembira'] },
        { q: 'Lafadz "Ihdinash shiraathal mustaqiim" dalam Al-Fatihah bermakna permohonan agar Allah memberi...', c: 'Petunjuk ke jalan yang lurus dan diridhai-Nya', d: ['Kekayaan harta duniawi yang melimpah', 'Kemenangan perang tanpa syarat', 'Kemudahan berniaga'] },
        { q: 'Membaca Surah Al-Fatihah dalam setiap rakaat shalat fardhu dan sunnah berkedudukan hukum sebagai...', c: 'Rukun shalat (shalat tidak sah tanpanya)', d: ['Sunnah haiat', 'Makruh jika ditinggalkan', 'Mubah'] },
        { q: 'Sunnah membaca Surah Al-Ikhlas, Al-Falaq, dan An-Nas sebelum tidur diajarkan Rasulullah SAW untuk...', c: 'Menjaga diri dari gangguan sihir dan bisikan jahat sepanjang malam', d: ['Mempercepat datangnya mimpi kaya', 'Menghilangkan rasa kantuk', 'Menggantikan shalat witir'] }
      ]
    },
    {
      subtopic: 'Kandungan Surah Al-Falaq dan Al-Ikhlas',
      comp: 'Memahami arti dan isi pokok kandungan Surah Al-Falaq dan Surah Al-Ikhlas',
      scenarios: [
        { q: 'Arti kata "Al-Falaq" yang menjadi nama surah ke-113 dalam Al-Qur\'an adalah...', c: 'Waktu subuh / fajar yang menyingsing', d: ['Waktu senja', 'Tengah malam gelap gulita', 'Matahari terbit'] },
        { q: 'Dalam Surah Al-Falaq ayat ke-4, kita diperintahkan berlindung dari "wan naffatsati fil \'uqad" yang artinya...', c: 'Kejahatan wanita-wanita penyihir yang meniup pada buhul-buhul tali', d: ['Orang kikir yang menolak zakat', 'Pedagang curang yang mengurangi timbangan', 'Orang yang memutus silaturahmi'] },
        { q: 'Ayat "Wa min syarri hasidin iza hasad" mengingatkan kita untuk mewaspadai bahaya penyakit hati berupa...', c: 'Hasad (dengki terhadap nikmat orang lain)', d: ['Riya (pamer amal ibadah)', 'Ujub (bangga diri)', 'Takabur (sombong)'] },
        { q: 'Surah Al-Ikhlas menegaskan pokok ajaran Islam yang paling fundamental, yaitu...', c: 'Kemurnian akidah tauhid (keesaan mutlak Allah SWT)', d: ['Tata cara pembagian harta warisan', 'Hukum zakat perniagaan', 'Kisah perjuangan perang Uhud'] },
        { q: 'Makna sifat Allah "Ash-Shamad" dalam Surah Al-Ikhlas ayat ke-2 adalah...', c: 'Tuhan tempat bergantung segala sesuatu makhluk untuk memohon pertolongan', d: ['Maha Pengampun segala dosa besar', 'Maha Mendengar segala bisikan', 'Maha Kuasa menciptakan langit'] },
        { q: 'Ayat "Lam yalid wa lam yulad" dalam Surah Al-Ikhlas membantah keyakinan sesat dengan menegaskan bahwa Allah...', c: 'Tidak beranak dan tidak pula diperanakkan', d: ['Tidak memiliki sifat kasih sayang', 'Tidak membutuhkan surga dan neraka', 'Tidak berbicara kepada rasul'] },
        { q: 'Pahala membaca Surah Al-Ikhlas satu kali diumpamakan oleh Rasulullah SAW sebanding dengan membaca...', c: 'Sepertiga isi Al-Qur\'an', d: ['Separuh Al-Qur\'an', 'Seluruh kitab Taurat', 'Tiga juz Al-Qur\'an'] },
        { q: 'Sebab turunnya (Asbabun Nuzul) Surah Al-Ikhlas adalah jawaban atas pertanyaan orang-orang musyrik yang menanyakan...', c: 'Nasab (silsilah keturunan) dan sifat Tuhan Nabi Muhammad SAW', d: ['Kapan terjadinya hari kiamat', 'Berapa jumlah malaikat pemikul Arasy', 'Mengapa kiblat berpindah ke Ka\'bah'] },
        { q: 'Pelajaran akhlak dari Surah Al-Ikhlas adalah bahwa dalam beribadah kita harus memiliki niat yang...', c: 'Ikhlas semata-mata mengharap ridha Allah tanpa pamrih', d: ['Mengharapkan pujian dan sanjungan tetangga', 'Mengejar status sosial terhormat', 'Supaya dipandang alim'] },
        { q: 'Lafadz "Wa lam yakun lahu kufuwan ahad" artinya adalah...', c: 'Dan tidak ada seorang pun yang setara atau serupa dengan-Nya', d: ['Dan Allah Maha Mendengar doa hamba-Nya', 'Dan segala puji hanya bagi Allah', 'Dan Dialah Yang Maha Berdiri Sendiri'] }
      ]
    },
    {
      subtopic: 'Kandungan Surah Al-Kafirun dan Al-Kautsar',
      comp: 'Memahami makna toleransi beragama dalam Al-Kafirun dan rasa syukur dalam Al-Kautsar',
      scenarios: [
        { q: 'Sikap toleransi beragama yang diajarkan dalam Surah Al-Kafirun ditegaskan pada ayat terakhir, yaitu...', c: 'لَكُمْ دِينُكُمْ وَلِيَ دِينِ (Untukmu agamamu, dan untukkulah agamaku)', d: ['إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ', 'فَصَلِّ لِرَبِّكَ وَانْحَرْ', 'قُلْ يَا أَيُّهَا الْكَافِرُونَ'] },
        { q: 'Asbabun Nuzul Surah Al-Kafirun berkaitan dengan tawaran kaum kafir Quraisy yang mengajak Rasulullah untuk...', c: 'Bergantian menyembah berhala setahun dan menyembah Allah setahun', d: ['Memindahkan kota Makkah ke Madinah', 'Membayar tebusan emas agar berhenti dakwah', 'Menghapus ayat-ayat tentang neraka'] },
        { q: 'Prinsip toleransi islami menurut Surah Al-Kafirun adalah bertoleransi dalam masalah sosial kemasyarakatan, tetapi...', c: 'Tidak boleh berkompromi atau mencampuradukkan urusan akidah dan ibadah', d: ['Boleh mengikuti ibadah ritual agama lain jika diajak teman', 'Menutup diri dari pergaulan dunia luar', 'Boleh menggabungkan doa lintas ajaran'] },
        { q: 'Arti kata "Al-Kautsar" yang menjadi nama surah ke-108 adalah...', c: 'Nikmat yang amat banyak dan telaga surga', d: ['Mata air yang jernih di padang pasir', 'Gunung emas di Makkah', 'Hujan lebat yang membawa berkah'] },
        { q: 'Sebagai wujud syukur atas nikmat yang melimpah, ayat kedua Surah Al-Kautsar memerintahkan dua ibadah utama, yaitu...', c: 'Mendirikan shalat dan menyembelih hewan kurban (berqurban)', d: ['Berpuasa daud dan menunaikan haji', 'Bersedekah emas dan bertawaf', 'Membayar fidyah dan beriktikaf'] },
        { q: 'Surah Al-Kautsar diturunkan untuk menghibur hati Rasulullah SAW ketika kaum kafir mengejek beliau dengan sebutan "Al-Abtar", artinya...', c: 'Orang yang terputus keturunan dan kebaikannya', d: ['Orang yang miskin harta bendanya', 'Orang yang terusir dari kampung halaman', 'Orang yang kehilangan penglihatan'] },
        { q: 'Ayat "Inna syani\'aka huwal abtar" menegaskan bahwa yang sebenarnya terputus dari rahmat Allah adalah...', c: 'Orang yang membenci dan memusuhi ajaran Rasulullah SAW', d: ['Kaum muslimin yang fakir miskin', 'Para sahabat yang gugur syahid', 'Anak-anak yatim piatu'] },
        { q: 'Jumlah ayat dalam Surah Al-Kautsar yang merupakan surah terpendek dalam Al-Qur\'an adalah...', c: '3 ayat', d: ['4 ayat', '5 ayat', '6 ayat'] },
        { q: 'Ibadah qurban yang diperintahkan dalam Surah Al-Kautsar dilaksanakan pada bulan...', c: 'Dzulhijjah (hari Idul Adha dan hari Tasyrik)', d: ['Ramadan (malam Lailatul Qadar)', 'Syawal (hari raya Idul Fitri)', 'Muharram (hari Asyura)'] },
        { q: 'Lafadz "Fa shalli li rabbika wanhar" artinya adalah...', c: 'Maka laksanakanlah shalat karena Tuhanmu, dan berkurbanlah', d: ['Dan janganlah kamu menghardik anak yatim', 'Maka bertasbihlah dengan memuji Tuhanmu', 'Dan demi waktu dhuha yang cerah'] }
      ]
    },
    {
      subtopic: 'Kandungan Surah Al-Ma\'un dan Al-Fil',
      comp: 'Memahami kepedulian sosial terhadap anak yatim dan sejarah kekuasaan Allah dalam Al-Fil',
      scenarios: [
        { q: 'Menurut Surah Al-Ma\'un, orang yang mendustakan agama (Yukadz-dzibu bid-din) ditandai dengan sikap...', c: 'Menghardik anak yatim dan tidak menganjurkan memberi makan orang miskin', d: ['Lupa membayar hutang perniagaan', 'Tidak menghafal seluruh surah Al-Qur\'an', 'Sering bepergian jauh berniaga'] },
        { q: 'Ancaman celaka (Wail) dalam Surah Al-Ma\'un ditujukan kepada orang-orang yang shalat dengan ciri...', c: 'Lalai dari shalatnya (menyepelekan waktu) dan gemar berbuat riya', d: ['Shalat berjamaah di shaf pertama', 'Shalat tahajjud di keheningan malam', 'Mengajak anak-anak shalat di masjid'] },
        { q: 'Perilaku "Al-Ma\'un" yang enggan diberikan oleh para pendusta agama bermakna...', c: 'Bantuan barang-barang berguna dan pertolongan sehari-hari yang sepele', d: ['Harta pusaka yang bernilai jutaan', 'Kitab-kitab tafsir kuno', 'Hewan ternak unta merah'] },
        { q: 'Surah Al-Fil menceritakan peristiwa penyerangan Ka\'bah di kota Makkah oleh pasukan bergajah yang dipimpin oleh...', c: 'Abrahah Al-Asyram dari Yaman', d: ['Fir\'aun dari Mesir', 'Namrud dari Babilonia', 'Qarun dari Madyan'] },
        { q: 'Allah SWT menggagalkan rencana jahat pasukan gajah Abrahah dengan mengirimkan...', c: 'Burung Ababil yang melempari mereka dengan batu dari tanah terbakar (Sijjil)', d: ['Angin topan berkepanjangan', 'Banjir bandang bah besar', 'Serangan jutaan lebah beracun'] },
        { q: 'Akibat lemparan batu sijjil tersebut, pasukan bergajah hancur luluh seperti...', c: 'Daun-daun yang dimakan ulat (Ka\'ashfin ma\'kul)', d: ['Batu karang yang kokoh di lautan', 'Debu pasir yang berterbangan', 'Pohon kurma yang tumbang'] },
        { q: 'Tahun terjadinya peristiwa penyerangan pasukan bergajah bertepatan dengan tahun kelahiran Rasulullah SAW, sehingga dinamakan...', c: 'Tahun Gajah (\'Amul Fil)', d: ['Tahun Kesedihan (\'Amul Huzni)', 'Tahun Kemenangan (\'Amul Fath)', 'Tahun Hijrah (\'Amul Hijri)'] },
        { q: 'Hikmah utama dari peristiwa yang diabadikan dalam Surah Al-Fil adalah bahwa Allah SWT...', c: 'Maha Kuasa menjaga kesucian Ka\'bah dari tipu daya musuh yang sombong', d: ['Mengizinkan Ka\'bah dipindahkan', 'Mewajibkan berdagang di Yaman', 'Memerintahkan memelihara gajah perang'] },
        { q: 'Perilaku peduli sosial yang sesuai dengan pengamalan Surah Al-Ma\'un di madrasah adalah...', c: 'Menyantuni dan bersikap santun penuh kasih sayang kepada teman yatim', d: ['Mengejek teman yang memakai seragam lusuh', 'Menolak meminjamkan pensil kepada teman sebangku', 'Membeli jajanan berlebihan tanpa berbagi'] },
        { q: 'Lafadz "Alladzina hum \'an shalatihim sahun" dalam Surah Al-Ma\'un menegur mereka yang...', c: 'Meremehkan, mengabaikan, dan menunda-nunda pelaksanaan shalat', d: ['Melakukan sujud sahwi karena lupa rakaat', 'Memperlama bacaan rukuk dan sujud', 'Shalat dengan pakaian bersih'] }
      ]
    },
    {
      subtopic: 'Hadits Nabi: Kebersihan, Menuntut Ilmu, dan Menyayangi Yatim',
      comp: 'Menghafal dan memahami pesan moral hadits kebersihan, menuntut ilmu, dan adab sosial',
      scenarios: [
        { q: 'Hadits riwayat Imam Muslim menyatakan: "الطَّهُورُ شَطْرُ الإِيمَانِ". Arti dari potongan hadits tersebut adalah...', c: 'Kebersihan/kesucian itu adalah sebagian dari iman', d: ['Shalat itu tiang penegak agama', 'Menuntut ilmu itu kewajiban setiap muslim', 'Senyum kepada saudaramu adalah sedekah'] },
        { q: 'Kewajiban menuntut ilmu bagi setiap muslim laki-laki dan perempuan ditegaskan dalam hadits...', c: 'طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ', d: ['الدِّينُ النَّصِيحَةُ', 'الْجَنَّةُ تَحْتَ أَقْدَامِ الأُمَّهَاتِ', 'لاَ تَغْضَبْ وَلَكَ الْجَنَّةُ'] },
        { q: 'Rasulullah SAW menjanjikan kedudukan yang amat dekat di surga kelak bagi orang yang menyayangi anak yatim, seperti dekatnya...', c: 'Jari telunjuk dan jari tengah yang berdampingan', d: ['Bumi dan langit ketujuh', 'Bulan dan matahari saat gerhana', 'Matahari dan planet bumi'] },
        { q: 'Hadits "Man salaka thariqan yaltamisu fihi \'ilman..." mengajarkan bahwa orang yang menempuh jalan menuntut ilmu akan...', c: 'Dimudahkan oleh Allah jalannya menuju surga', d: ['Diberi kekayaan harta melimpah di dunia', 'Bebas dari segala kewajiban ibadah', 'Dijamin tidak akan pernah sakit'] },
        { q: 'Dalam hadits tentang akhlak, Rasulullah bersabda: "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ", artinya...', c: 'Senyum manismu di hadapan wajah saudaramu adalah sedekah', d: ['Memberi makan orang berpuasa pahalanya besar', 'Mengucap salam mendatangkan rezeki', 'Menyingkirkan duri di jalan adalah ibadah'] },
        { q: 'Hadits "Khaerukum man ta\'allamal Qur\'ana wa \'allamahu" memuji manusia terbaik, yaitu orang yang...', c: 'Mempelajari Al-Qur\'an dan mengajarkannya kepada orang lain', d: ['Paling banyak menghafal syair Arab', 'Memiliki mushaf Al-Qur\'an paling mahal', 'Paling cepat membaca Al-Qur\'an tanpa tajwid'] },
        { q: 'Hadits tentang niat berbunyi: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ". Hadits ini diriwayatkan oleh sahabat mulia...', c: 'Umar bin Khattab radhiyallahu \'anhu', d: ['Abu Bakar Ash-Shiddiq r.a.', 'Ali bin Abi Thalib r.a.', 'Utsman bin Affan r.a.'] },
        { q: 'Nabi Muhammad SAW melarang perbuatan marah tanpa alasan hak dengan bersabda: "لاَ تَغْضَبْ وَلَكَ الْجَنَّةُ", yang artinya...', c: 'Janganlah engkau marah, niscaya bagimu surga', d: ['Janganlah engkau kikir dalam bersedekah', 'Janganlah engkau tidur setelah subuh', 'Janganlah engkau berbohong'] },
        { q: 'Keutamaan shalat berjamaah dibandingkan shalat sendirian (munfarid) menurut hadits shahih adalah dilipatgandakan pahalanya sebanyak...', c: '27 derajat', d: ['10 derajat', '50 derajat', '7 derajat'] },
        { q: 'Hadits "Al-Muslimu akhul muslim..." menegaskan bahwa seorang muslim terhadap muslim lainnya adalah saudara, sehingga haram untuk...', c: 'Menzalimi, menelantarkan, dan merendahkan kehormatannya', d: ['Bekerja sama dalam perniagaan halal', 'Saling bertukar salam dan hadiah', 'Menjenguk saat sakit'] }
      ]
    },
    {
      subtopic: 'Hadits Nabi: Adab Lisan, Silaturahmi, dan Kejujuran',
      comp: 'Menerapkan pesan moral hadits adab berbicara santun, menyambung silaturahmi, dan kejujuran',
      scenarios: [
        { q: 'Hadits "Man kaana yu\'minu billahi wal yaumil akhir falyaqul khairan aw liyashmut" memerintahkan kita untuk...', c: 'Berkata yang baik atau lebih baik diam', d: ['Berbicara sebanyak-banyaknya di media sosial', 'Menceritakan keburukan orang lain', 'Berdebat hingga memenangkan argumen'] },
        { q: 'Orang yang suka menyambung tali silaturahmi dijanjikan oleh Allah SWT melalui sabda Rasul-Nya akan...', c: 'Dilapangkan pintu rezekinya dan dipanjangkan umurnya dalam keberkahan', d: ['Diberi jabatan tinggi tanpa bekerja', 'Dibebaskan dari hisab amal tanpa syarat', 'Tidak akan pernah diuji dengan musibah'] },
        { q: 'Rasulullah SAW bersabda: "Innash-shidqa yahdi ilal birri...", yang bermakna bahwa kejujuran akan menuntun seseorang menuju...', c: 'Kebaikan, dan kebaikan akan menuntun ke surga', d: ['Pujian manusia dan kehormatan semu', 'Kekayaan materi berlimpah', 'Kemudahan meminjam uang'] },
        { q: 'Sebaliknya, kebohongan (al-kadzib) menurut sabda Rasulullah akan menuntun pelakunya menuju...', c: 'Kejahatan/kedurhakaan (al-fujur), dan fujur menuntun ke neraka', d: ['Kesuksesan berdagang', 'Ketenaran di kalangan teman', 'Keuntungan sementara'] },
        { q: 'Ciri-ciri orang munafik menurut hadits Nabi berjumlah tiga perkara, yaitu...', c: 'Jika berbicara berdusta, jika berjanji mengingkari, jika dipercaya berkhianat', d: ['Jika makan berlebihan, jika tidur mendengkur, jika berjalan tergesa-gesa', 'Jika kaya sombong, jika miskin putus asa, jika sakit mengeluh', 'Jika diuji bersedih, jika sukses lupa diri, jika berdoa pelan'] },
        { q: 'Hadits "La yadkhulul jannata qathi\'un" memberi peringatan tegas bahwa tidak akan masuk surga orang yang...', c: 'Memutus tali persaudaraan dan silaturahmi', d: ['Tidak memiliki rumah pribadi', 'Lupa membaca doa keluar rumah', 'Terlambat masuk sekolah'] },
        { q: 'Menjaga lisan dari ghibah (membicarakan aib sesama muslim) diibaratkan dalam Al-Qur\'an seperti...', c: 'Memakan daging bangkai saudaranya sendiri yang sudah mati', d: ['Meminum racun mematikan', 'Membakar rumah sendiri', 'Menenggelamkan perahu di lautan'] },
        { q: 'Perkataan yang jujur, santun, dan menyejukkan hati orang lain dinamakan perkataan...', c: 'Qaulan Sadida / Qaulan Karima', d: ['Qaulan Ma\'rufa yang dusta', 'Ghibah dan namimah', 'Kalam fasid'] },
        { q: 'Adab menegur kesalahan teman menurut tuntunan hadits adalah dilakukan dengan cara...', c: 'Menasihati secara empat mata dengan bahasa santun dan penuh kasih', d: ['Mempermalukannya di depan umum dan grup pesan', 'Menyebarkan aibnya ke media sosial', 'Mendiamkannya selamanya'] },
        { q: 'Hak seorang muslim atas muslim lainnya yang disebutkan dalam hadits berjumlah enam, salah satunya apabila bersin dan memuji Allah maka kita wajib...', c: 'Mendoakannya dengan mengucapkan "Yarhamukallah"', d: ['Memberinya saputangan baru', 'Memintanya mencuci muka', 'Menjauh darinya sejauh mungkin'] }
      ]
    },
    {
      subtopic: 'Kandungan Surah At-Tin dan Al-Insyirah',
      comp: 'Memahami penciptaan manusia sebaik-baik bentuk dalam At-Tin dan kemudahan di balik kesulitan',
      scenarios: [
        { q: 'Dalam Surah At-Tin ayat ke-4, Allah menegaskan bahwa manusia diciptakan dalam bentuk...', c: 'Ahsani taqwim (sebaik-baik bentuk fisik dan akal pikiran)', d: ['Bentuk yang paling lemah tanpa kelebihan', 'Makhluk yang kekal abadi di dunia', 'Bentuk yang sama dengan malaikat'] },
        { q: 'Empat sumpah agung yang menjadi pembuka Surah At-Tin adalah demi buah Tin, buah Zaitun, Bukit Sinai, dan...', c: 'Negeri yang aman (Kota Makkah Al-Mukarramah)', d: ['Kota Madinah Al-Munawwarah', 'Baitul Maqdis di Palestina', 'Sungai Nil di Mesir'] },
        { q: 'Manusia yang diciptakan dalam bentuk mulia dapat jatuh ke derajat yang paling rendah (Asfala safilin) jika...', c: 'Tidak beriman dan tidak mengerjakan amal saleh', d: ['Tidak memiliki kekayaan harta dan jabatan', 'Lahir dari keluarga yang sederhana', 'Mengalami sakit fisik di hari tua'] },
        { q: 'Pesan utama dalam Surah Al-Insyirah (Asy-Syarh) yang memberikan optimisme kepada kaum beriman adalah...', c: 'Sesungguhnya bersama kesulitan selalu ada kemudahan', d: ['Kekayaan harta akan datang tanpa bekerja', 'Kesuksesan hanya milik orang berilmu tinggi', 'Ujian hidup akan berhenti di usia muda'] },
        { q: 'Lafadz "Fa inna ma\'al \'usri yusra, inna ma\'al \'usri yusra" diulang dua kali dalam Surah Al-Insyirah untuk...', c: 'Menegaskan kepastian janji Allah bahwa satu kesulitan tidak akan mengalahkan dua kemudahan', d: ['Memperindah rima sajak akhir ayat', 'Memperpanjang bacaan shalat', 'Menunjukkan keraguan'] },
        { q: 'Perintah dalam ayat "Fa idza faraghta fanshab" mengajarkan etos kerja santri madrasah agar...', c: 'Apabila telah selesai suatu urusan, bersegeralah bersungguh-sungguh mengerjakan urusan lain', d: ['Beristirahat total tanpa memikirkan tugas berikutnya', 'Menunda pekerjaan hingga batas akhir waktu', 'Menyerahkan tugas kepada orang lain'] },
        { q: 'Ayat "Wa rafa\'na laka dzikrak" dalam Surah Al-Insyirah bermakna bahwa Allah SWT...', c: 'Meninggikan nama dan sebutan kemuliaan Nabi Muhammad SAW di dunia dan akhirat', d: ['Menjadikan nabi sebagai raja kaya raya', 'Memberi mukjizat membelah lautan', 'Menaikkan derajat kaum musyrikin'] },
        { q: 'Pahala bagi orang-orang yang beriman dan beramal saleh menurut Surah At-Tin adalah...', c: 'Ajrun ghairu mamnun (pahala yang tidak ada putus-putusnya)', d: ['Gelar kehormatan dari manusia', 'Kebebasan dari hisab kubur tanpa amal', 'Kekayaan tujuh turunan'] },
        { q: 'Pohon Zaitun yang disebut dalam Surah At-Tin terkenal sebagai pohon yang...', c: 'Diberkahi Allah dan minyaknya bermanfaat sebagai obat serta penerangan', d: ['Tumbuh hanya di kutub es', 'Beracun dan berbahaya bagi manusia', 'Hanya berbuah sekali seumur hidup'] },
        { q: 'Pertanyaan penutup Surah At-Tin: "Alaisallahu bi ahkamil hakimin" dijawab oleh pembaca Al-Qur\'an dengan lafadz sunnah...', c: 'Bala wa ana \'ala dzalika minasy-syahidin (Benar, dan aku termasuk orang yang bersaksi)', d: ['Alhamdulillahirabbil \'alamin', 'Astaghfirullahal \'azim', 'Subhanallah wa bihamdihi'] }
      ]
    },
    {
      subtopic: 'Kandungan Surah Al-Qadr dan Al-Alaq (1-5)',
      comp: 'Memahami keutamaan Lailatul Qadr dan perintah membaca wahyu pertama',
      scenarios: [
        { q: 'Surah Al-Qadr menerangkan peristiwa agung yang terjadi pada bulan suci Ramadan, yaitu...', c: 'Nuzulul Qur\'an (diturunkannya Al-Qur\'an pertama kali secara utuh ke Baitul Izzah)', d: ['Kemenangan perang Badar kubra', 'Wafatnya para syuhada Uhud', 'Penetapan arah kiblat baru'] },
        { q: 'Keutamaan malam Lailatul Qadr ditegaskan dalam Surah Al-Qadr ayat ke-3 lebih baik daripada...', c: 'Seribu bulan (khoirum min alfi syahr)', d: ['Seratus tahun berpuasa', 'Sepuluh ribu hari bersedekah', 'Masa hidup seluruh umat nabi terdahulu'] },
        { q: 'Pada malam Lailatul Qadr, malaikat dan Malaikat Jibril (Ar-Ruh) turun ke bumi dengan membawa...', c: 'Kesejahteraan dan kedamaian hingga terbitnya fajar subuh', d: ['Peringatan siksa api neraka', 'Buku catatan hutang manusia', 'Hujan badai yang dahsyat'] },
        { q: 'Wahyu pertama yang diterima Nabi Muhammad SAW di Gua Hira adalah Surah Al-Alaq ayat...', c: 'Ayat 1 sampai 5', d: ['Ayat 1 sampai 10', 'Seluruh ayat Surah Al-Alaq', 'Ayat 6 sampai 10'] },
        { q: 'Perintah pertama dalam wahyu Surah Al-Alaq ayat 1 adalah "Iqra\'", yang artinya...', c: 'Bacalah (dengan menyebut nama Tuhanmu yang menciptakan)', d: ['Tulislah di atas lembaran kertas', 'Bicaralah kepada seluruh manusia', 'Berperanglah melawan musuh'] },
        { q: 'Kata "Al-Alaq" yang menjadi nama surah ke-96 bermakna...', c: 'Segumpal darah yang menempel pada dinding rahim', d: ['Segenggam tanah liat kering', 'Tetesan air hujan yang murni', 'Cahaya yang berkilauan'] },
        { q: 'Ayat "Alladzi \'allama bil qalam" dalam Surah Al-Alaq menekankan pentingnya media literasi berupa...', c: 'Kalam / pena untuk mencatat dan mengembangkan ilmu pengetahuan', d: ['Pedang dan perisai perang', 'Timbangan perdagangan', 'Batu prasasti kuno'] },
        { q: 'Sikap Nabi Muhammad SAW saat didekap Malaikat Jibril dan diperintahkan membaca di Gua Hira menjawab:...', c: '"Ma ana bi qari\'" (Aku tidak bisa membaca)', d: ['"Aku akan membaca nanti"', '"Di mana bukunya?"', '"Siapakah namamu wahai malaikat?"'] },
        { q: 'Malaikat yang bertugas menyampaikan wahyu kepada Nabi Muhammad SAW adalah...', c: 'Malaikat Jibril \'alaihissalam', d: ['Malaikat Mikail \'a.s.', 'Malaikat Israfil \'a.s.', 'Malaikat Izrail \'a.s.'] },
        { q: 'Pesan edukatif dari Surah Al-Alaq ayat 1-5 bagi santri madrasah adalah kewajiban...', c: 'Belajar giat, membaca, menulis, dan menuntut ilmu berlandaskan nilai-nilai ketuhanan', d: ['Menolak teknologi modern', 'Hanya belajar saat akan ujian', 'Menghafal tanpa memahami arti bacaan'] }
      ]
    },
    {
      subtopic: 'Kandungan Surah Al-Humazah dan At-Takatsur',
      comp: 'Memahami ancaman bagi pengumpat dan peringatan terhadap sikap bermegah-megahan',
      scenarios: [
        { q: 'Ancaman celaka (Wail) dalam Surah Al-Humazah ditujukan kepada setiap orang yang suka...', c: 'Mengumpat, mencela, dan mengumpulkan harta serta menghitung-hitungnya', d: ['Menolong fakir miskin tanpa pamrih', 'Membangun madrasah dan masjid', 'Menghafal Al-Qur\'an di malam hari'] },
        { q: 'Orang yang mengumpulkan harta dalam Surah Al-Humazah merasa tertipu karena mengira hartanya akan...', c: 'Mengekalkannya hidup di dunia selamanya', d: ['Membantunya masuk surga tanpa hisab', 'Menghapus seluruh dosa-dosanya', 'Menjadikannya disukai malaikat'] },
        { q: 'Balasan bagi para pengumpat dan pencela harta adalah dilemparkan ke dalam neraka...', c: 'Huthamah (api yang menyala-nyala hingga membakar sampai ke hulu hati)', d: ['Jahannam yang dingin', 'Hawiyah yang sepi', 'Sakar yang beku'] },
        { q: 'Surah At-Takatsur memperingatkan bahaya penyakit psikologis manusia yang lalai akibat...', c: 'Bermegah-megahan dalam memperbanyak kemewahan duniawi', d: ['Terlalu banyak membaca buku sejarah', 'Terlalu rajin bersedekah di masjid', 'Kerap menuntut ilmu agama'] },
        { q: 'Kelalaian manusia dalam bermegah-megahan harta benda berlangsung terus menerus hingga...', c: 'Hatta zurtumul maqabir (sampai mereka masuk ke liang kubur/mati)', d: ['Masa pensiun tiba', 'Anak-anaknya dewasa', 'Rumahnya selesai dibangun'] },
        { q: 'Ayat terakhir Surah At-Takatsur menegaskan bahwa pada hari kiamat manusia pasti akan ditanya tentang...', c: 'An-Na\'im (segala kenikmatan hidup yang telah dinikmatinya di dunia)', d: ['Berapa banyak pakaian yang disimpan', 'Merek kendaraan yang dikendarai', 'Berapa luas halaman rumahnya'] },
        { q: 'Tingkatan keyakinan manusia yang disebutkan dalam Surah At-Takatsur adalah \'Ilmul Yaqin dan...', c: '\'Ainul Yaqin (melihat neraka dengan mata kepala sendiri)', d: ['Zhannul Yaqin', 'Syakkul Yaqin', 'Wahmul Yaqin'] },
        { q: 'Sifat neraka Huthamah dalam Surah Al-Humazah ditutup rapat di atas mereka dengan...', c: 'Tiang-tiang yang terbentang tinggi (Fi \'amadim mumaddadah)', d: ['Kain sutera hijau', 'Pagar bambu berduri', 'Tirai air yang dingin'] },
        { q: 'Sikap hidup muslim yang benar dalam mengelola rezeki harta benda adalah...', c: 'Zuhud dan qana\'ah serta membelanjakannya di jalan kebaikan dan zakat infaq', d: ['Menimbun uang di brankas tanpa bersedekah', 'Memamerkan kekayaan di media sosial', 'Kikir kepada keluarga sendiri'] },
        { q: 'Perbedaan arti "Humazah" dan "Lumazah" menurut para mufassir adalah...', c: 'Humazah mencela dengan ucapan kata-kata lisan, Lumazah mencela dengan isyarat mata/mimik wajah', d: ['Humazah mencela orang tua, Lumazah mencela guru', 'Humazah kikir harta, Lumazah kikir ilmu', 'Keduanya tidak memiliki perbedaan arti'] }
      ]
    },
    {
      subtopic: 'Kandungan Surah Al-Qari\'ah dan Al-Zalzalah',
      comp: 'Memahami huru-hara hari kiamat dan hisab keadilan timbangan amal',
      scenarios: [
        { q: 'Arti kata "Al-Qari\'ah" yang menjadi salah satu nama hari kiamat adalah...', c: 'Hari kiamat yang mengetuk dan mengguncang hati manusia dengan dahsyat', d: ['Hari kemenangan perang', 'Malam turunnya wahyu', 'Matahari yang terbenam'] },
        { q: 'Kondisi manusia pada hari kiamat digambarkan dalam Surah Al-Qari\'ah seperti...', c: 'Anai-anai (laron) yang berterbangan kian kemari tanpa arah', d: ['Pasukan tentara yang berbaris rapi', 'Ikan-ikan yang berenang di samudra', 'Burung-burung yang hinggap di dahan'] },
        { q: 'Kondisi gunung-gunung yang kokoh perkasa pada hari kiamat diumpamakan seperti...', c: 'Bulu-bulu yang dihambur-hamburkan oleh angin kencang', d: ['Batu bata yang tersusun kokoh', 'Pohon-pohon yang rindang', 'Awan hitam yang membawa hujan'] },
        { q: 'Barangsiapa yang berat timbangan amal kebaikannya (Mawazinuh), maka tempat kembalinya adalah...', c: 'Dalam kehidupan yang memuaskan dan penuh kenikmatan di surga (\'Isyatin radhiyah)', d: ['Neraka Hawiyah yang sangat panas', 'Lembah kesengsaraan yang sunyi', 'Tempat penantian yang gelap'] },
        { q: 'Barangsiapa yang ringan timbangan kebaikannya, maka tempat tinggalnya adalah neraka...', c: 'Hawiyah (api yang menyala sangat panas membakar)', d: ['Huthamah', 'Sakar', 'Jahim'] },
        { q: 'Surah Al-Zalzalah menggambarkan peristiwa hari kiamat ketika bumi diguncangkan dengan...', c: 'Guncangan yang sedahsyat-dahsyatnya (Zilzalaha)', d: ['Getaran gempa bumi berskala kecil', 'Hembusan angin sepoi-sepoi', 'Gelombang air pasang laut'] },
        { q: 'Akibat guncangan dahsyat tersebut, bumi mengeluarkan seluruh beban berat yang dikandungnya berupa...', c: 'Mayat-mayat manusia yang terkubur dan isi perut bumi', d: ['Intan permata untuk diperebutkan manusia', 'Mata air air zamzam yang meluap', 'Tumbuh-tumbuhan hijau raksasa'] },
        { q: 'Bumi pada hari kiamat akan menyampaikan berita kabarnya (Tuhadditsu akhbaraha) karena...', c: 'Tuhanmu telah memerintahkan bumi untuk bersaksi atas perbuatan manusia di atasnya', d: ['Manusia memohon bumi untuk berbicara', 'Malaikat pencatat amal telah pensiun', 'Bumi ingin membalas dendam kepada manusia'] },
        { q: 'Prinsip keadilan hisab ditegaskan dalam Al-Zalzalah: "Barangsiapa mengerjakan kebaikan seberat dzarrah (biji sawi)..."', c: 'Niscaya dia akan melihat balasan kebaikannya tersebut', d: ['Pahalanya akan hangus terbakar', 'Tidak akan dihitung oleh malaikat', 'Akan digabungkan dengan dosa masa lalunya'] },
        { q: 'Demikian pula orang yang mengerjakan kejahatan sekecil biji zarrah pun pasti akan...', c: 'Melihat balasan keburukannya dengan penuh keadilan', d: ['Dimaafkan tanpa proses hisab', 'Bisa menyembunyikan dosanya dari Allah', 'Mendapatkan imbalan hadiah'] }
      ]
    }
  ];

  return buildUniqueSubjectBank({
    subjectId: 'quran_hadits',
    subjectName: "Qur'an Hadits MI",
    categoryId: 'rumpun_pai',
    categoryName: 'Rumpun PAI MI',
    akgtkCategory: 'Rumpun PAI',
    educationLevel: 'MI',
    idPrefix: 'mi-qh-',
    totalTarget: 150,
    generator: (i, diff, num) => {
      const topicIndex = i % topics.length; // 0..14
      const scenarioIndex = Math.floor(i / topics.length); // 0..9
      const topic = topics[topicIndex];
      const sc = topic.scenarios[scenarioIndex];

      return {
        subtopic: topic.subtopic,
        competency: topic.comp,
        question: `[Asesmen Qur'an Hadits MI Soal #${num} - ${topic.subtopic}]\n${sc.q}`,
        correctText: sc.c,
        distractors: sc.d,
        explanation: `Jawaban benar: "${sc.c}". Hal ini sesuai dengan materi kompetensi "${topic.comp}" pada kajian ${topic.subtopic}.`,
        tip: `Perhatikan kaidah pokok ilmu tajwid, asbabun nuzul, dan pesan moral Al-Qur'an/Hadits terkait.`
      };
    }
  });
}

module.exports = {
  generateQuranHaditsMI
};
