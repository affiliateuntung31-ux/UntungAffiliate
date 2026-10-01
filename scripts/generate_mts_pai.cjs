// Modular Generator for MTs Rumpun PAI (QH, AA, FK, SK, BA) - 150 UNIQUE QUESTIONS EACH
const { buildUniqueSubjectBank } = require('./generate_all_subjects_master.cjs');

// 1. QUR'AN HADITS MTS (150 UNIQUE QUESTIONS)
function generateQuranHaditsMTs() {
  const qhSubtopics = [
    { name: 'Kaidah Tajwid: Hukum Mad (Wajib Muttashil, Jaiz Munfashil, Lazim)', comp: 'Menganalisis panjang bacaan dan hukum mad dalam Al-Qur\'an' },
    { name: 'Kaidah Tajwid: Hukum Nun Sukun dan Tanwin', comp: 'Membedakan hukum Izhar, Idgham Bighunnah, Bilaghunnah, Iqlab, dan Ikhfa' },
    { name: 'Kaidah Tajwid: Hukum Mim Sukun', comp: 'Menganalisis hukum Ikhfa Syafawi, Idgham Mimi, dan Izhar Syafawi' },
    { name: 'Kaidah Tajwid: Bacaan Gharib (Imalah, Isymam, Tashil, Naql)', comp: 'Mengidentifikasi ayat dan cara melafalkan bacaan khusus gharib' },
    { name: 'Kandungan QS Asy-Syams dan Al-Lail', comp: 'Menganalisis pesan pembersihan jiwa dan kedermawanan' },
    { name: 'Kandungan QS Al-Insyirah dan Adh-Dhuha', comp: 'Menganalisis sikap optimisme dan syukur nikmat Allah SWT' },
    { name: 'Kandungan QS Al-Kafirun dan Al-Bayyinah', comp: 'Menganalisis konsep toleransi beragama dan kemurnian tauhid' },
    { name: 'Kandungan QS Al-Alaq 1-5 dan QS Al-Mujadilah: 11', comp: 'Menganalisis pentingnya literasi sains dan derajat orang berilmu' },
    { name: 'Hadits tentang Niat dan Ikhlas Beramal', comp: 'Menganalisis kedudukan niat dalam setiap ibadah dan muamalah' },
    { name: 'Hadits tentang Menuntut Ilmu dan Keutamaan Guru', comp: 'Menganalisis kewajiban belajar sepanjang hayat bagi muslim' },
    { name: 'Hadits tentang Kebersihan dan Kelestarian Lingkungan', comp: 'Menerapkan perilaku hidup bersih dan peduli fasilitas madrasah' },
    { name: 'Hadits tentang Kejujuran dalam Muamalah', comp: 'Menganalisis keutamaan pedagang jujur yang terpercaya' },
    { name: 'Hadits tentang Menjaga Persaudaraan (Ukhuwah)', comp: 'Menganalisis larangan memutus ukhuwah dan menyebarkan permusuhan' },
    { name: 'Ilmu Hadits: Sanad, Matan, dan Rawi', comp: 'Mengidentifikasi unsur-unsur struktur periwayatan hadits' },
    { name: 'Ilmu Hadits: Klasifikasi Hadits Shahih, Hasan, Dhaif', comp: 'Menganalisis syarat keshahihan hadits nabawi' }
  ];

  return buildUniqueSubjectBank({
    subjectId: 'quran_hadits',
    subjectName: "Qur'an Hadits MTs",
    categoryId: 'rumpun_pai',
    categoryName: 'Rumpun PAI MTs',
    akgtkCategory: 'Rumpun PAI',
    educationLevel: 'MTs',
    idPrefix: 'mts-qh-',
    totalTarget: 150,
    generator: (i, diff, num) => {
      const topic = qhSubtopics[i % qhSubtopics.length];
      const step = Math.floor(i / qhSubtopics.length) + 1; // 1 to 10
      const tIdx = i % qhSubtopics.length;

      let qText = '', cText = '', dList = [], exp = '', tip = '';

      if (tIdx === 0) {
        // Mad
        const madCases = [
          { l: 'جَاءَ (Jaa-a)', m: 'Mad Wajib Muttashil', d: ['Mad Jaiz Munfashil', 'Mad Badal', 'Mad Iwadh'], a: 'huruf mad bertemu hamzah dalam satu kata bersambung' },
          { l: 'فِي أَنفُسِكُمْ (Fii anfusikum)', m: 'Mad Jaiz Munfashil', d: ['Mad Wajib Muttashil', 'Mad Lazim Harfi', 'Mad Layyin'], a: 'huruf mad bertemu hamzah di kata yang terpisah' },
          { l: 'الصَّاخَّةُ (Ash-Shaakh-khah)', m: 'Mad Lazim Kilmi Mutsaqqal', d: ['Mad Lazim Kilmi Mukhaffaf', 'Mad Wajib Muttashil', 'Mad Aridh Lissukun'], a: 'huruf mad bertemu huruf bertasydid dalam satu kata' }
        ];
        const mc = madCases[step % madCases.length];
        qText = `[Qur'an Hadits MTs #${num}]: Perhatikan lafaz ayat Al-Qur'an berikut: "${mc.l}". Hukum bacaan tajwid yang terdapat pada lafaz tersebut adalah...`;
        cText = mc.m;
        dList = mc.d;
        exp = `Pada lafaz '${mc.l}', terjadi hukum bacaan ${mc.m} karena ${mc.a}. Dibaca panjang 4-5 harakat (atau 6 harakat untuk mad lazim).`;
        tip = 'Muttashil = satu kata bersambung; Munfashil = hamzah di kata terpisah.';
      } else if (tIdx === 1) {
        // Nun sukun
        const nunCases = [
          { l: 'مَنْ يَقُولُ (Man yaquulu)', h: 'Idgham Bighunnah', d: ['Idgham Bilaghunnah', 'Izhar Halqi', 'Ikhfa Haqiqi'], a: 'nun sukun bertemu huruf ya' },
          { l: 'مِنْ خَوْفٍ (Min khoufin)', h: 'Izhar Halqi', d: ['Ikhfa Haqiqi', 'Iqlab', 'Idgham Bighunnah'], a: 'nun sukun bertemu huruf kha (tenggorokan)' },
          { l: 'مِنْ بَعْدِ (Mim ba\'di)', h: 'Iqlab', d: ['Ikhfa Syafawi', 'Izhar Halqi', 'Idgham Mimi'], a: 'nun sukun bertemu huruf ba sehingga bersuara mim' },
          { l: 'مِنْ لَدُنْهُ (Mil ladunhu)', h: 'Idgham Bilaghunnah', d: ['Idgham Bighunnah', 'Iqlab', 'Izhar Syafawi'], a: 'nun sukun bertemu huruf lam tanpa dengung' }
        ];
        const nc = nunCases[step % nunCases.length];
        qText = `[Qur'an Hadits MTs #${num}]: Lafaz Al-Qur'an: "${nc.l}". Hukum tajwid yang berlaku pada potongan ayat tersebut adalah...`;
        cText = nc.h;
        dList = nc.d;
        exp = `Lafaz '${nc.l}' mengandung hukum ${nc.h} karena ${nc.a}.`;
        tip = 'Huruf idgham bighunnah: Ya, Nun, Mim, Waw (Yanmu).';
      } else if (tIdx === 2) {
        // Mim sukun
        const mimCases = [
          { l: 'تَرْمِيهِمْ بِحِجَارَةٍ (Tarmiihim bihijaarah)', h: 'Ikhfa Syafawi', d: ['Izhar Syafawi', 'Idgham Mimi / Mutamatsilain', 'Iqlab'], a: 'mim sukun bertemu huruf ba' },
          { l: 'لَهُمْ مَّا يَشَاءُونَ (Lahum maa yasyaa-uun)', h: 'Idgham Mimi (Mutamatsilain)', d: ['Izhar Syafawi', 'Ikhfa Syafawi', 'Idgham Bighunnah'], a: 'mim sukun bertemu huruf mim' },
          { l: 'أَلَمْ تَرَ (Alam tara)', h: 'Izhar Syafawi', d: ['Ikhfa Syafawi', 'Idgham Mimi', 'Izhar Halqi'], a: 'mim sukun bertemu huruf selain mim dan ba (ta)' }
        ];
        const mc = mimCases[step % mimCases.length];
        qText = `[Qur'an Hadits MTs #${num}]: Perhatikan lafaz berikut: "${mc.l}". Hukum bacaan mim sukun yang terjadi pada potongan ayat tersebut adalah...`;
        cText = mc.h;
        dList = mc.d;
        exp = `Lafaz '${mc.l}' dibaca ${mc.h} karena ${mc.a}.`;
        tip = 'Mim sukun: ketemu Ba = Ikhfa Syafawi; ketemu Mim = Idgham Mimi; selain itu = Izhar Syafawi.';
      } else if (tIdx === 3) {
        // Gharib
        const gharibCases = [
          { l: 'مَجْر۪ىهَا (QS Hud: 41)', h: 'Imalah', cara: 'Membaca vokal fathah yang dimiringkan ke arah kasrah (seperti bunyi "re")', d: ['Isymam', 'Tashil', 'Naql'] },
          { l: 'لَا تَأْمَ۫نَّا (QS Yusuf: 11)', h: 'Isymam', cara: 'Memajukan/memoncongkan kedua bibir tanpa bersuara sebagai isyarat dhommah', d: ['Imalah', 'Saktah', 'Tashil'] },
          { l: 'ءَا۬عْجَمِيٌّ (QS Fushshilat: 44)', h: 'Tashil', cara: 'Meringankan pelafalan hamzah kedua antara hamzah dan alif', d: ['Imalah', 'Naql', 'Isymam'] },
          { l: 'بِئْسَ الاِسْمُ (QS Al-Hujurat: 11)', h: 'Naql', cara: 'Memindahkan harakat kasrah hamzah washal ke huruf lam sukun (Bi\'sa-lismu)', d: ['Imalah', 'Saktah', 'Tashil'] }
        ];
        const gc = gharibCases[step % gharibCases.length];
        qText = `[Qur'an Hadits MTs #${num}]: Pada lafaz "${gc.l}", terdapat bacaan khusus (gharib), yaitu bacaan...`;
        cText = `${gc.h} (${gc.cara})`;
        dList = gc.d.map(item => `${item} (teknik pelafalan bacaan tajwid lain)`);
        exp = `Lafaz '${gc.l}' adalah contoh bacaan ${gc.h}, yaitu ${gc.cara.toLowerCase()}.`;
        tip = 'Imalah = Majreeha (Hud: 41); Isymam = Laa ta\'mannaa (Yusuf: 11); Tashil = A\'a\'jamiyyun (Fushshilat: 44).';
      } else if (tIdx === 4) {
        // Kandungan Asy-Syams / Al-Lail
        qText = `[Qur'an Hadits MTs #${num}]: Dalam QS Asy-Syams ayat 9-10: "Qad aflaha man zakkaahaa, wa qad khaaba man dassaahaa". Kandungan esensial dari ayat tersebut menegaskan bahwa...`;
        cText = `Sungguh beruntung orang yang menyucikan jiwanya dan merugi orang yang mengotorinya dengan dosa`;
        dList = [
          `Kekayaan materi berlimpah adalah tanda utama kemuliaan seseorang di sisi Allah`,
          `Manusia tidak memiliki andil sedikitpun dalam menentukan pilihan perbuatannya`,
          `Kesuksesan hidup hanya diukur dari banyaknya gelar dan pujian masyarakat`
        ];
        exp = `Ayat tersebut menerangkan keberuntungan bagi jiwa yang disucikan melalui amal saleh dan kerugian bagi yang menodainya dengan maksiat.`;
        tip = 'Zakkaahaa = menyucikannya; Dassaahaa = mengotorinya.';
      } else if (tIdx === 5) {
        // Al-Insyirah
        qText = `[Qur'an Hadits MTs #${num}]: Pesan moral dan motivasi tauhid yang terkandung dalam QS Al-Insyirah: "Fa inna ma'al 'usri yusraa, inna ma'al 'usri yusraa" mengajarkan bahwa...`;
        cText = `Di balik setiap kesulitan dan ujian hidup pasti senantiasa disertai kemudahan berlipat ganda`;
        dList = [
          `Kesulitan hidup tidak akan pernah bisa diselesaikan dengan ikhtiar manusia`,
          `Seseorang boleh berputus asa apabila tertimpa musibah berat`,
          `Kemudahan hanya diberikan khusus kepada orang yang hidup berkecukupan`
        ];
        exp = `'Inna ma'al 'usri yusraa': Di samping satu kesulitan (al-'usr), Allah menyertakan kemudahan (yusr) yang berlipat.`;
        tip = 'Al-Insyirah ayat 5-6 memberi motivasi optimisme: bersama kesulitan ada kemudahan.';
      } else if (tIdx === 6) {
        // Toleransi Al-Kafirun
        qText = `[Qur'an Hadits MTs #${num}]: Ayat penutup QS Al-Kafirun: "Lakum diinukum wa liya diin" (Untukmu agamamu, dan untukku agamaku) memberikan landasan sikap toleransi muslim berupa...`;
        cText = `Menghargai kebebasan beragama pihak lain tanpa mencampuradukkan akidah dan peribadahan`;
        dList = [
          `Mengikuti ritual peribadahan agama lain demi menjaga keharmonisan pergaulan`,
          `Memaksa pemeluk agama lain untuk beralih keyakinan secara paksa`,
          `Mengubah ajaran tauhid agar disukai oleh semua kalangan`
        ];
        exp = `Toleransi Islam (tasamuh) berpijak pada saling menghormati dalam muamalah tanpa kompromi dalam akidah dan syariat.`;
        tip = 'Lakum diinukum wa liya diin: toleransi tanpa kompromi ritual akidah.';
      } else if (tIdx === 7) {
        // Al-Alaq & Literasi
        qText = `[Qur'an Hadits MTs #${num}]: Perintah pertama yang diturunkan kepada Nabi Muhammad SAW dalam QS Al-Alaq ayat 1-5 diawali dengan kata "Iqra'" (Bacalah) dengan tujuan...`;
        cText = `Membangun budaya literasi, riset, dan tadabbur ilmu pengetahuan atas nama Allah Sang Pencipta`;
        dList = [
          `Mewajibkan hafalan syair Arab jahiliyah bagi seluruh umat`,
          `Membatasi pencarian ilmu hanya pada urusan administrasi dagang`,
          `Menghentikan segala bentuk penelitian tentang alam semesta`
        ];
        exp = `'Iqra' bismi Rabbikalladzi khalaq': Perintah membaca, meneliti, dan mengembangkan sains berlandaskan tauhid kepada Allah.`;
        tip = 'Iqra\' merupakan fondasi spirit literasi dan sains Qurani.';
      } else if (tIdx === 8) {
        // Hadits Niat
        qText = `[Qur'an Hadits MTs #${num}]: Hadits Nabi SAW: "Innamal a'maalu bin-niyyaat..." (Sesungguhnya sahnya amal bergantung pada niatnya). Relevansi nilai hadits tersebut dalam tugas guru madrasah adalah...`;
        cText = `Menata niat ikhlas beribadah mendidik anak bangsa semata-mata mengharap ridha Allah SWT`;
        dList = [
          `Mengajar semata-mata demi mengejar pujian sanjungan dari atasan`,
          `Bekerja hanya bila mendapat imbalan materi tunjangan tambahan`,
          `Mengabaikan mutu pembelajaran karena niat batin tidak terlihat manusia`
        ];
        exp = `Niat adalah poros penerimaan amal kebajikan. Guru mukhlis mendidik santri lillahi ta'ala.`;
        tip = 'Niat adalah syarat diterimanya amal perbuatan.';
      } else if (tIdx === 9) {
        // Hadits Menuntut Ilmu
        qText = `[Qur'an Hadits MTs #${num}]: Hadits: "Thalabul 'ilmi faridhatun 'ala kulli muslim" menegaskan status hukum menuntut ilmu dalam syariat Islam, yaitu...`;
        cText = `Fardhu (kewajiban mutlak) bagi setiap pribadi muslim, baik laki-laki maupun perempuan`;
        dList = [`Sunnah muakkadah bila ada waktu luang`, `Mubah (boleh) bagi kalangan bangsawan saja`, `Makruh bila mempelajari ilmu sains modern`];
        exp = `Hadits riwayat Ibnu Majah ini menetapkan kewajiban fardhu mencari ilmu bagi setiap mukmin tanpa diskriminasi gender.`;
        tip = 'Thalabul \'ilmi faridhatun: Menuntut ilmu adalah kewajiban fardhu.';
      } else if (tIdx === 10) {
        // Kebersihan
        qText = `[Qur'an Hadits MTs #${num}]: Hadits Rasulullah SAW: "Ath-thahuuru syathrul iimaan" (Kebersihan/kesucian itu separuh dari iman). Implementasi nyata di madrasah adiwiyata adalah...`;
        cText = `Membiasakan santri memilah sampah, menjaga wudhu, dan merawat sarana ibadah madrasah`;
        dList = [
          `Membiarkan tempat wudhu kotor berlumut karena menganggap air suci tak terpengaruh`,
          `Membuang sampah bekas makanan di laci meja kelas`,
          `Menumpuk sampah di belakang ruang guru tanpa daur ulang`
        ];
        exp = `Kesucian fisik dan lingkungan mencerminkan separuh kesempurnaan iman seorang muslim.`;
        tip = 'Ath-thahuuru syathrul iimaan = kebersihan/kesucian sebagian iman.';
      } else if (tIdx === 11) {
        // Kejujuran
        qText = `[Qur'an Hadits MTs #${num}]: Rasulullah SAW bersabda: "At-taajirus shaduuqul amiin ma'an nabiyyiina wash shiddiiqiina wasy syuhadaa'". Keutamaan yang dijanjikan bagi pelaku transaksi yang jujur adalah...`;
        cText = `Akan dikumpulkan di surga bersama para nabi, orang jujur (shiddiqin), dan syuhada`;
        dList = [
          `Bebas dari kewajiban shalat fardhu lima waktu`,
          `Menjadi penguasa wilayah kerajaan terkaya di dunia`,
          `Diampuni seluruh utang piutang tanpa perlu membayarnya`
        ];
        exp = `Pedagang yang jujur dan amanah memperoleh derajat mulia di akhirat bersama para nabi dan syuhada.`;
        tip = 'Kejujuran dalam muamalah mengantarkan pada kemuliaan di akhirat.';
      } else if (tIdx === 12) {
        // Ukhuwah
        qText = `[Qur'an Hadits MTs #${num}]: Hadits Nabi SAW melarang seorang muslim mendiamkan (hajr) atau bermusuhan dengan saudaranya sesama muslim lebih dari...`;
        cText = `Tiga hari (tiga malam)`;
        dList = [`Tujuh hari`, `Satu bulan penuh`, `Satu tahun kalender`];
        exp = `"Laa yahillu limuslimin an yahjura akhaahu fauqa tsalaatsi layaal" (Tidak halal bagi seorang muslim mendiamkan saudaranya lebih dari tiga malam).`;
        tip = 'Batas maksimal mendiamkan saudara sesama muslim adalah 3 hari.';
      } else if (tIdx === 13) {
        // Sanad Matan
        qText = `[Qur'an Hadits MTs #${num}]: Rangkaian silsilah para perawi hadits yang meriwayatkan dan menyambungkan teks sabda Rasulullah SAW dari generasi ke generasi disebut...`;
        cText = `Sanad`;
        dList = [`Matan`, `Rawi`, `Mukharrij`];
        exp = `Sanad adalah mata rantai perawi hadits, sedangkan lafaz sabda nabi yang diriwayatkan disebut matan.`;
        tip = 'Sanad = silsilah periwayat; Matan = isi/redaksi hadits; Rawi = orang yang meriwayatkan.';
      } else {
        // Syarat Shahih
        qText = `[Qur'an Hadits MTs #${num}]: Salah satu syarat mutlak sebuah hadits dikategorikan sebagai Hadits Shahih menurut para ulama muhadditsin adalah...`;
        cText = `Sanadnya bersambung (ittishalush sanad) dan perawinya memiliki sifat 'adil serta dhabith`;
        dList = [
          `Diriwayatkan minimal oleh sepuluh ribu orang di setiap tingkatan thabaqah`,
          `Boleh terdapat kejanggalan (syadz) asalkan matannya panjang`,
          `Perawinya tidak wajib memiliki daya ingat hafalan yang kuat`
        ];
        exp = `Syarat hadits shahih: sanad bersambung, perawi adil, dhabith (daya hafal kuat), terbebas dari syadz (kejanggalan) dan 'illat (cacat tersembunyi).`;
        tip = 'Syarat shahih: Ittishalus sanad, perawi adil, dhabith, selamat dari syadz dan \'illat.';
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

// 2. AKIDAH AKHLAK MTS (150 UNIQUE QUESTIONS)
function generateAkidahAkhlakMTs() {
  const aaSubtopics = [
    { name: 'Sifat Wajib, Mustahil, dan Jaiz bagi Allah SWT', comp: 'Menganalisis sifat-sifat ketuhanan berdasarkan dalil naqli dan aqli' },
    { name: 'Asmaul Husna: Al-Aziz, Al-Ghaffar, Al-Basith, An-Nafi\'', comp: 'Meneladani nilai-nilai Asmaul Husna dalam interaksi sosial santri' },
    { name: 'Iman kepada Malaikat dan Tugas Khususnya', comp: 'Menganalisis pengawasan malaikat Raqib-Atid dalam pembentukan karakter' },
    { name: 'Iman kepada Kitab-Kitab Allah dan Suhuf', comp: 'Menganalisis kedudukan Al-Qur\'an sebagai penyempurna kitab terdahulu' },
    { name: 'Sifat Rasul & Ketabahan Ulul Azmi', comp: 'Meneladani sifat Shiddiq, Amanah, Tabligh, Fathanah, dan kesabaran nabi' },
    { name: 'Mukjizat, Karamah, Ma\'unah, dan Istidraj', comp: 'Membedakan fenomena luar biasa yang datang dari Allah vs tipu daya setan' },
    { name: 'Iman kepada Hari Akhir dan Tahapan Yaumul Qiyamah', comp: 'Menganalisis peristiwa Barzakh, Ba\'ats, Mahsyar, Mizan, dan Hisab' },
    { name: 'Iman kepada Qada dan Qadar (Takdir Mubram & Muallaq)', comp: 'Menganalisis sinergi antara ikhtiar, doa, dan tawakkal' },
    { name: 'Akhlak Terpuji Remaja: Tawadhu, Husnuzhan, Tasamuh', comp: 'Menerapkan sikap rendah hati, toleran, dan berprasangka baik di madrasah' },
    { name: 'Akhlak Terpuji: Ta\'awun dan Istiqamah', comp: 'Menerapkan gotong royong dan keteguhan hati dalam kebaikan' },
    { name: 'Akhlak Tercela yang Wajib Dihindari: Riya dan Sum\'ah', comp: 'Menganalisis bahaya pamer ibadah dan syirik khafi' },
    { name: 'Akhlak Tercela: Nifaq, Hasad, dan Ghadhab', comp: 'Mengendalikan amarah, dengki, dan sifat munafik' },
    { name: 'Akhlak Tercela: Namimah dan Ghibah', comp: 'Menghindari adu domba dan membicarakan aib sesama muslim' },
    { name: 'Adab Islami kepada Guru, Orang Tua, dan Media Sosial', comp: 'Menerapkan adab tabayyun, santun bermedsos, dan birrul walidain' },
    { name: 'Tasawuf Amali & Tazkiyatun Nafs', comp: 'Menganalisis tahapan Takhalli, Tahalli, dan Tajalli dalam penyucian jiwa' }
  ];

  return buildUniqueSubjectBank({
    subjectId: 'akidah_akhlak',
    subjectName: 'Akidah Akhlak MTs',
    categoryId: 'rumpun_pai',
    categoryName: 'Rumpun PAI MTs',
    akgtkCategory: 'Rumpun PAI',
    educationLevel: 'MTs',
    idPrefix: 'mts-aa-',
    totalTarget: 150,
    generator: (i, diff, num) => {
      const topic = aaSubtopics[i % aaSubtopics.length];
      const step = Math.floor(i / aaSubtopics.length) + 1; // 1 to 10
      const tIdx = i % aaSubtopics.length;

      let qText = '', cText = '', dList = [], exp = '', tip = '';

      if (tIdx === 0) {
        // Sifat Allah
        const sifatCases = [
          { s: 'Wujud', m: 'Ada', mustahil: 'Adam (Tiada)', d: ['Huduts', 'Fana', 'Mumatstsalatu lil hawaditsi'] },
          { s: 'Qidam', m: 'Terdahulu tanpa permulaan', mustahil: 'Huduts (Baru)', d: ['Adam', 'Ta\'addud', 'Fana'] },
          { s: 'Baqa\'', m: 'Kekal abadi tanpa akhir', mustahil: 'Fana (Binasa/Rusak)', d: ['Adam', 'Ihtiyaj', 'Karahah'] },
          { s: 'Mukhalafatu lil hawaditsi', m: 'Berbeda dengan segala ciptaan makhluk', mustahil: 'Mumatstsalatu lil hawaditsi (Serupa dengan makhluk)', d: ['Ajzun', 'Jahlun', 'Maut'] }
        ];
        const sc = sifatCases[step % sifatCases.length];
        qText = `[Akidah Akhlak MTs #${num}]: Salah satu sifat wajib bagi Allah SWT adalah "${sc.s}" yang bermakna ${sc.m}. Sifat mustahil yang menjadi kebalikan dari sifat tersebut adalah...`;
        cText = sc.mustahil;
        dList = sc.d;
        exp = `Kebalikan dari sifat wajib ${sc.s} adalah sifat mustahil ${sc.mustahil}.`;
        tip = 'Hafalkan 20 sifat wajib dan sifat mustahil lawannya.';
      } else if (tIdx === 1) {
        // Asmaul Husna
        const asmaCases = [
          { a: 'Al-Aziz', m: 'Maha Perkasa dan Tidak Terkalahkan', teladan: 'Memiliki integritas teguh menolak kemaksiatan dan tidak gentar menegakkan kebenaran' },
          { a: 'Al-Ghaffar', m: 'Maha Pengampun segala dosa hamba-Nya', teladan: 'Mudah memaafkan kekhilafan teman dan tidak menyimpan dendam di hati' },
          { a: 'Al-Basith', m: 'Maha Melapangkan rezeki dan rahmat', teladan: 'Suka berbagi kebaikan, berinfaq, dan melapangkan kesulitan orang lain' },
          { a: 'An-Nafi\'', m: 'Maha Memberi Kemanfaatan bagi seluruh alam', teladan: 'Menjadi pribadi yang banyak memberi manfaat ilmu dan karya bagi masyarakat' }
        ];
        const ac = asmaCases[step % asmaCases.length];
        qText = `[Akidah Akhlak MTs #${num}]: Siswa MTs meneladani Asmaul Husna "${ac.a}" (${ac.m}) dalam kehidupan sehari-hari di madrasah dengan cara...`;
        cText = ac.teladan;
        dList = [
          `Menunjukkan kekuatan fisik untuk mengintimidasi siswa yang lebih kecil`,
          `Mengingat-ingat kesalahan orang lain untuk membalasnya suatu hari`,
          `Menyimpan seluruh ilmu pengetahuan untuk diri sendiri agar juara umum`
        ];
        exp = `Meneladani ${ac.a} diwujudkan melalui ${ac.teladan.toLowerCase()}.`;
        tip = 'Asmaul Husna memandu akhlak mulia dalam perilaku sehari-hari.';
      } else if (tIdx === 2) {
        // Malaikat
        qText = `[Akidah Akhlak MTs #${num}]: Meyakini adanya malaikat Raqib dan Atid yang senantiasa mencatat amal perbuatan manusia memiliki dampak positif terhadap pembentukan karakter santri, yaitu...`;
        cText = `Senantiasa berhati-hati dalam berucap dan bertindak (muraqabatullah) baik saat bersama orang lain maupun sendirian`;
        dList = [
          `Merasa tidak perlu beramal saleh karena catatan sudah diatur secara otomatis`,
          `Hanya berbuat jujur apabila dilihat oleh guru dan kepala madrasah`,
          `Mengabaikan amal kecil karena menganggap malaikat hanya mencatat dosa besar`
        ];
        exp = `Kesadaran diawasi malaikat Raqib-Atid melahirkan sikap muraqabah dan integritas moral kapan pun dan di mana pun.`;
        tip = 'Iman kepada malaikat pencatat amal menumbuhkan kejujuran batin.';
      } else if (tIdx === 3) {
        // Kitab
        qText = `[Akidah Akhlak MTs #${num}]: Al-Qur'an memiliki kedudukan sebagai kitab suci terakhir yang berfungsi sebagai "Muhaimin" terhadap kitab-kitab samawi sebelumnya, artinya...`;
        cText = `Menguji, memverifikasi, dan menyempurnakan ajaran-ajaran tauhid kitab-kitab suci terdahulu`;
        dList = [
          `Menghapus seluruh nilai moral kejujuran yang diajarkan nabi terdahulu`,
          `Mewajibkan muslim untuk mengikuti syariat ritual umat nabi Musa secara harfiah`,
          `Menyatakan bahwa tidak ada kitab yang diturunkan sebelum Nabi Muhammad SAW`
        ];
        exp = `Al-Qur'an sebagai muhaimin mengonfirmasi kebenaran ajaran tauhid sebelumnya dan meluruskan penyimpangan sejarah.`;
        tip = 'Muhaimin = batu uji, pemelihara, dan penyempurna ajaran wahyu terdahulu.';
      } else if (tIdx === 4) {
        // Ulul Azmi
        qText = `[Akidah Akhlak MTs #${num}]: Kelompok nabi yang bergelar "Ulul Azmi" (Nuh AS, Ibrahim AS, Musa AS, Isa AS, Muhammad SAW) mendapatkan kemuliaan tersebut karena...`;
        cText = `Memiliki ketabahan, kesabaran luar biasa, dan tekad baja yang pantang menyerah dalam berdakwah`;
        dList = [
          `Memiliki pasukan tentara perang terbesar dan istana termegah`,
          `Tidak pernah mengalami penolakan sama sekali dari kaumnya`,
          `Dikaruniai kekayaan emas dan perak paling melimpah di masanya`
        ];
        exp = `Ulul Azmi adalah rasul-rasul dengan 'azm (ketabahan dan keteguhan tekad) yang paling tinggi menghadapi ujian kaumnya.`;
        tip = 'Ulul Azmi disingkat MIMIN (Muhammad, Isa, Musa, Ibrahim, Nuh).';
      } else if (tIdx === 5) {
        // Fenomena luar biasa
        qText = `[Akidah Akhlak MTs #${num}]: Kelebihan atau kenikmatan luar biasa yang diberikan Allah kepada orang yang gemar bermaksiat dan kafir sebagai jebakan sebelum ditimpakan azab pedih disebut...`;
        cText = `Istidraj`;
        dList = [`Karamah`, `Ma'unah`, `Mukjizat`];
        exp = `Istidraj adalah tipu daya pemberian nikmat duniawi kepada orang durhaka agar semakin terlena dalam kesesatan sebelum diazab.`;
        tip = 'Mukjizat = nabi; Karamah = wali; Ma\'unah = orang beriman awam; Istidraj = orang kafir/maksiat.';
      } else if (tIdx === 6) {
        // Hari Akhir
        qText = `[Akidah Akhlak MTs #${num}]: Tahapan hari akhir di mana seluruh amal perbuatan manusia selama hidup di dunia ditimbang dengan timbangan seadil-adilnya disebut peristiwa...`;
        cText = `Yaumul Mizan`;
        dList = [`Yaumul Ba'ats`, `Yaumul Mahsyar`, `Yaumul Hisab`];
        exp = `Yaumul Mizan adalah hari penimbangan amal, sedangkan Yaumul Hisab adalah hari perhitungan amal.`;
        tip = 'Ba\'ats = dibangkitkan; Mahsyar = dikumpulkan; Hisab = dihitung; Mizan = ditimbang.';
      } else if (tIdx === 7) {
        // Takdir
        qText = `[Akidah Akhlak MTs #${num}]: Ketentuan takdir Allah yang masih dapat diikhtiarkan dan diubah melalui usaha sungguh-sungguh serta doa manusia (misalnya: kepandaian dan kesehatan) disebut...`;
        cText = `Takdir Muallaq`;
        dList = [`Takdir Mubram`, `Qadha Azali mutlak`, `Fatamorgana qadar`];
        exp = `Takdir Muallaq berkaitan dengan ikhtiar manusia (dapat diusahakan), sedangkan Takdir Mubram bersifat pasti tak terelakkan (seperti kematian dan kiamat).`;
        tip = 'Muallaq = tergantung ikhtiar/usaha; Mubram = pasti/mutlak.';
      } else if (tIdx === 8) {
        // Husnuzhan
        qText = `[Akidah Akhlak MTs #${num}]: Ketika mendengar desas-desus miring tentang temannya di asrama madrasah, Faris tidak langsung percaya melainkan mendatangi temannya untuk klarifikasi (tabayyun). Sikap Faris mencerminkan akhlak terpuji...`;
        cText = `Husnuzhan (berbaik sangka) dan tabayyun`;
        dList = [`Su'uzhan (berburuk sangka)`, `Tajasus (mencari-cari aib)`, `Ananiah (keakuan/egois)`];
        exp = `Husnuzhan mendorong seseorang menaruh prasangka baik dan melakukan tabayyun (klarifikasi fakta) sebelum menilai.`;
        tip = 'Husnuzhan = prasangka baik; Su\'uzhan = prasangka buruk.';
      } else if (tIdx === 9) {
        // Ta'awun
        qText = `[Akidah Akhlak MTs #${num}]: Prinsip tolong-menolong (ta'awun) yang dianjurkan dalam QS Al-Ma'idah ayat 2 adalah tolong-menolong dalam hal...`;
        cText = `Kebajikan dan ketakwaan (al-birri wat-taqwa)`;
        dList = [
          `Dosa dan permusuhan kelompok (al-itsmi wal-'udwaan)`,
          `Menutupi kecurangan saat ujian asesmen bersama`,
          `Membela teman yang bersalah melawan aturan madrasah`
        ];
        exp = `"Wa ta'aawanuu 'alal birri wat-taqwaa wa laa ta'aawanuu 'alal itsmi wal-'udwaan".`;
        tip = 'Ta\'awun hanya dalam kebaikan dan ketaatan, haram dalam dosa.';
      } else if (tIdx === 10) {
        // Riya
        qText = `[Akidah Akhlak MTs #${num}]: Seseorang yang melakukan shalat tahajjud dan infaq dengan tujuan agar dipuji oleh guru dan disegani oleh sesama santri tergolong melakukan penyakit hati...`;
        cText = `Riya' (pamer) dan syirik khafi`;
        dList = [`Tawadhu' (rendah hati)`, `Ikhlas lillahi ta'ala`, `Khauf dan raja'`];
        exp = `Riya' adalah beramal ibadah demi dilihat dan dipuji manusia, yang mengikis pahala amal kebajikan.`;
        tip = 'Riya = ingin dilihat; Sum\'ah = ingin didengar pujian.';
      } else if (tIdx === 11) {
        // Hasad
        qText = `[Akidah Akhlak MTs #${num}]: Perasaan tidak senang di dalam hati ketika melihat orang lain mendapatkan nikmat serta berharap agar nikmat tersebut lenyap dari orang itu disebut...`;
        cText = `Hasad (dengki)`;
        dList = [`Ghibah`, `Nifaq`, `Ghadhab`];
        exp = `Hasad (dengki) memakan kebaikan laksana api memakan kayu bakar.`;
        tip = 'Hasad = iri dengki ingin nikmat orang lain hilang.';
      } else if (tIdx === 12) {
        // Ghibah
        qText = `[Akidah Akhlak MTs #${num}]: Membicarakan aib, kekurangan, atau keburukan orang lain yang bila ia mendengarnya ia tidak menyukainya, meskipun hal tersebut benar-benar ada padanya, disebut...`;
        cText = `Ghibah (menggunjing)`;
        dList = [`Fitnah`, `Namimah (adu domba)`, `Kizib (berdusta)`];
        exp = `Jika benar faktanya disebut ghibah, jika hal itu tidak benar maka tergolong buhtan (fitnah keji).`;
        tip = 'Ghibah membicarakan keburukan nyata; fitnah mengada-ada hal palsu.';
      } else if (tIdx === 13) {
        // Medsos
        qText = `[Akidah Akhlak MTs #${num}]: Etika islami yang paling penting saat seorang siswa MTs menerima informasi viral yang provokatif di media sosial adalah...`;
        cText = `Melakukan tabayyun (memverifikasi kebenaran dan sumber data) sebelum menyebarkannya`;
        dList = [
          `Segera membagikan pesan ke semua grup tanpa membacanya`,
          `Menambahkan bumbu cerita agar semakin heboh dan menarik`,
          `Menyerang pihak lain dengan kata-kata kasar di kolom komentar`
        ];
        exp = `QS Al-Hujurat: 6 mewajibkan tabayyun saat menerima berita agar tidak mencelakakan pihak lain karena kebodohan.`;
        tip = 'Tabayyun = teliti dan cek validitas informasi sebelum menyebarkannya.';
      } else {
        // Tazkiyatun Nafs
        qText = `[Akidah Akhlak MTs #${num}]: Dalam metode penyucian jiwa (Tazkiyatun Nafs), tahapan membersihkan hati dari sifat-sifat tercela (seperti riya, dengki, takabur) disebut tahapan...`;
        cText = `Takhalli`;
        dList = [`Tahalli (menghiasi dengan akhlak terpuji)`, `Tajalli (merasakan kehadiran ilahi)`, `Tawalli`];
        exp = `Takhalli = pengosongan/pembersihan dari sifat buruk; Tahalli = pengisian sifat mulia; Tajalli = tersingkapnya nur ma'rifat.`;
        tip = 'Takhalli (bersihkan) -> Tahalli (hiasi) -> Tajalli (merasakan kedekatan ilahi).';
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

// 3. FIKIH MTS (150 UNIQUE QUESTIONS)
function generateFikihMTs() {
  const fkSubtopics = [
    { name: 'Thaharah: Najis dan Mandi Wajib', comp: 'Menganalisis tata cara bersuci dari hadas dan macam-macam najis' },
    { name: 'Rukhsah Thaharah: Tayammum dan Istinja', comp: 'Menganalisis sebab kebolehan tayammum dan syarat air suci menyucikan' },
    { name: 'Shalat Fardhu: Syarat, Rukun, dan Pembatal', comp: 'Menganalisis rukun qauli dan fi\'li serta hal-hal yang membatalkan shalat' },
    { name: 'Shalat Berjamaah dan Ketentuan Masbuq', comp: 'Menganalisis tata cara shalat berjamaah dan posisi makmum masbuq' },
    { name: 'Shalat Jamak dan Qashar dalam Perjalanan', comp: 'Menerapkan keringanan (rukhsah) shalat musafir' },
    { name: 'Sujud Sahwi, Sujud Tilawah, dan Sujud Syukur', comp: 'Membedakan sebab dan tata cara ketiga jenis sujud sunnah' },
    { name: 'Shalat Sunnah Rawatib dan Shalat Muakkad', comp: 'Mengklasifikasikan shalat sunnah muakkad dan ghairu muakkad' },
    { name: 'Shalat Jumat dan Khutbah Jumat', comp: 'Menganalisis syarat sah shalat Jumat dan rukun khutbah Jumat' },
    { name: 'Penyelenggaraan Jenazah Sesuai Sunnah', comp: 'Menganalisis tata cara memandikan, mengafani, menshalatkan, dan menguburkan' },
    { name: 'Zakat Fitrah dan Zakat Mal', comp: 'Menghitung nishab zakat emas, pertanian, dan mustahik zakat' },
    { name: 'Puasa Wajib, Puasa Sunnah, dan Kafarat', comp: 'Menganalisis rukun puasa, pembatal, dan qadha/fidyah puasa' },
    { name: 'Ibadah Haji dan Umrah (Rukun & Wajib)', comp: 'Membedakan rukun haji (thawaf, sa\'i, wukuf) dan wajib haji' },
    { name: 'Penyembelihan Hewan, Qurban, dan Aqiqah', comp: 'Menganalisis syarat hewan qurban dan tata cara aqiqah anak' },
    { name: 'Makanan & Minuman Halal serta Makanan Haram', comp: 'Menganalisis kriteria kehalalan zat dan cara memperolehnya' },
    { name: 'Muamalah: Jual Beli Halal, Khiyar, dan Riba', comp: 'Menerapkan asas keadilan transaksi dan menjauhi riba muamalah' }
  ];

  return buildUniqueSubjectBank({
    subjectId: 'fikih',
    subjectName: 'Fikih MTs',
    categoryId: 'rumpun_pai',
    categoryName: 'Rumpun PAI MTs',
    akgtkCategory: 'Rumpun PAI',
    educationLevel: 'MTs',
    idPrefix: 'mts-fk-',
    totalTarget: 150,
    generator: (i, diff, num) => {
      const topic = fkSubtopics[i % fkSubtopics.length];
      const step = Math.floor(i / fkSubtopics.length) + 1; // 1 to 10
      const tIdx = i % fkSubtopics.length;

      let qText = '', cText = '', dList = [], exp = '', tip = '';

      if (tIdx === 0) {
        // Najis
        const najisCases = [
          { n: 'Najis Mughalladhah (berat) seperti air liur anjing', cara: 'Membasuh bagian yang terkena sebanyak tujuh kali, salah satunya dicampur debu/tanah suci', d: ['Cukup dipercikkan air pada tempat najis', 'Dicuci satu kali dengan deterjen wangi', 'Cukup dilap tisu kering'] },
          { n: 'Najis Mukhaffafah (ringan) yaitu air kencing bayi laki-laki yang belum makan selain ASI', cara: 'Cukup memercikkan air suci pada bagian yang terkena najis secara merata', d: ['Membasuh tujuh kali dengan tanah', 'Mencuci hingga air cucian berubah warna', 'Merendam pakaian dalam air panas'] },
          { n: 'Najis Mutawassithah (sedang) seperti darah, nanah, dan bangkai', cara: 'Membasuh dengan air suci hingga hilang bau, warna, dan rasanya (ainun najasah)', d: ['Cukup diperciki setetes air', 'Menggosoknya dengan tanah kering tujuh kali', 'Mandi wajib seluruh badan'] }
        ];
        const nc = najisCases[step % najisCases.length];
        qText = `[Fikih MTs #${num}]: Tata cara menyucikan pakaian yang terkena "${nc.n}" menurut ketentuan fikih thaharah adalah...`;
        cText = nc.cara;
        dList = nc.d;
        exp = `Penyucian ${nc.n} disyaratkan dengan ${nc.cara.toLowerCase()}.`;
        tip = 'Mughalladhah = 7x basuhan salah satunya debu; Mukhaffafah = dipercikkan air; Mutawassithah = hilang warna, bau, rasa.';
      } else if (tIdx === 1) {
        // Tayammum
        qText = `[Fikih MTs #${num}]: Sebab yang membolehkan seseorang melakukan rukhsah tayammum sebagai pengganti wudhu atau mandi wajib adalah...`;
        cText = `Ketiadaan air mutlak setelah berusaha mencari atau sakit yang berbahaya bila terkena air`;
        dList = [
          `Malas berjalan ke tempat wudhu madrasah karena udara dingin`,
          `Ingin menghemat tagihan rekening air madrasah`,
          `Mengejar waktu istirahat agar bisa bermain bola lebih lama`
        ];
        exp = `Tayammum disyariatkan saat tidak menemukan air setelah ikhtiar mencari atau adanya uzur syar'i (sakit berbahaya terkena air).`;
        tip = 'Sebab tayammum: ketiadaan air atau uzur medis.';
      } else if (tIdx === 2) {
        // Rukun Shalat
        qText = `[Fikih MTs #${num}]: Yang termasuk ke dalam kelompok "Rukun Qauli" (rukun yang wajib dilafalkan terdengar oleh telinga sendiri) dalam shalat adalah...`;
        cText = `Takbiratul ihram, membaca Surah Al-Fatihah, Tasyahud Akhir, Shalawat atas Nabi, dan Salam pertama`;
        dList = [
          `Niat di dalam hati dan berdiri tegak bagi yang mampu`,
          `Rukuk, sujud, iktidal, dan duduk di antara dua sujud`,
          `Tumakninah dalam setiap perpindahan gerakan rukun`
        ];
        exp = `Rukun qauli ada 5: Takbiratul Ihram, Al-Fatihah, Tasyahud Akhir, Shalawat pada tasyahud akhir, dan Salam pertama.`;
        tip = 'Rukun qauli wajib dilafalkan minimal terdengar oleh diri sendiri.';
      } else if (tIdx === 3) {
        // Masbuq
        qText = `[Fikih MTs #${num}]: Seorang makmum masbuq dianggap telah mendapatkan satu rakaat bersama imam apabila...`;
        cText = `Dapat mengikuti ruku' bersama imam secara sempurna disertai tumakninah sebelum imam bangkit iktidal`;
        dList = [
          `Mendengar suara takbiratul ihram imam dari luar pagar masjid`,
          `Menemukan imam sedang duduk tasyahud akhir`,
          `Membaca surah Al-Fatihah separuh jalan saat imam sudah iktidal`
        ];
        exp = `Mendapati ruku'nya imam dengan tumakninah dihitung satu rakaat sah bagi makmum masbuq.`;
        tip = 'Mendapati ruku\' bersama imam = terhitung 1 rakaat.';
      } else if (tIdx === 4) {
        // Jamak Qashar
        qText = `[Fikih MTs #${num}]: Seorang guru MTs bepergian dinas dari Surabaya ke Jakarta (jarak > 81 km). Di waktu Zhuhur, ia melaksanakan shalat Zhuhur 2 rakaat dan shalat Ashar 2 rakaat sekaligus. Shalat yang dilakukannya disebut...`;
        cText = `Shalat Jamak Taqdim diqashar`;
        dList = [`Shalat Jamak Ta'khir diqashar`, `Shalat Qashar murni tanpa jamak`, `Shalat Istisqa jamaah`];
        exp = `Menggabungkan Zhuhur dan Ashar di waktu Zhuhur disebut Jamak Taqdim. Meringkas 4 rakaat menjadi 2 rakaat disebut Qashar.`;
        tip = 'Di waktu pertama = Jamak Taqdim; Rakaat diringkas 4 jadi 2 = Qashar.';
      } else if (tIdx === 5) {
        // Sujud Sahwi
        qText = `[Fikih MTs #${num}]: Sujud sahwi dilakukan sebanyak dua kali sujud sebelum salam apabila seorang mushalli...`;
        cText = `Lupa melaksanakan sunnah ab'adh (seperti tasyahud awal atau qunut Shubuh) atau ragu bilangan rakaat`;
        dList = [
          `Lupa melaksanakan rukun sujud atau rukun fatihah`,
          `Mendengar ayat sajdah dibacakan oleh qari'`,
          `Mendapatkan kabar gembira kelulusan ujian asesmen`
        ];
        exp = `Sujud sahwi disyariatkan saat ragu jumlah rakaat atau meninggalkan sunnah ab'adh.`;
        tip = 'Lupa sunnah ab\'adh/ragu rakaat = Sujud Sahwi.';
      } else if (tIdx === 6) {
        // Rawatib
        qText = `[Fikih MTs #${num}]: Dua rakaat sebelum shalat Shubuh (qabliyah Shubuh) memiliki keutamaan luar biasa menurut hadits nabi, yaitu...`;
        cText = `Lebih baik daripada dunia beserta seluruh isinya (Khairun minad dunya wa maa fiihaa)`;
        dList = [
          `Dapat menggantikan kewajiban ibadah haji ke Makkah`,
          `Mewajibkan seseorang berpuasa penuh selama setahun`,
          `Hanya dianjurkan khusus bagi imam masjid saja`
        ];
        exp = `"Rak'atal fajri khairun minad dunya wa maa fiihaa" (Dua rakaat fajar/qabliyah shubuh lebih baik dari dunia dan seisinya).`;
        tip = 'Dua rakaat fajar = shalat sunnah rawatib muakkad paling utama.';
      } else if (tIdx === 7) {
        // Jumat
        qText = `[Fikih MTs #${num}]: Salah satu rukun khutbah Jumat yang wajib dibaca oleh khatib dalam kedua khutbahnya adalah...`;
        cText = `Membaca puji-pujian (Hamdalah), Shalawat kepada Nabi SAW, dan Wasiat Takwa`;
        dList = [
          `Membaca kisah pahlawan nasional secara detail`,
          `Membahas persoalan politik praktis dan pemilu`,
          `Menjelaskan sejarah kerajaan Mataram kuno`
        ];
        exp = `Rukun khutbah: Hamdalah, Shalawat, Wasiat Takwa (pada kedua khutbah), membaca ayat Al-Qur'an pada salah satunya, dan doa ampunan pada khutbah kedua.`;
        tip = 'Rukun khutbah pada kedua khutbah: Hamdalah, Shalawat, dan Wasiat Takwa.';
      } else if (tIdx === 8) {
        // Jenazah
        qText = `[Fikih MTs #${num}]: Urutan takbir pada pelaksanaan shalat jenazah setelah takbir kedua adalah membaca...`;
        cText = `Shalawat atas Nabi Muhammad SAW`;
        dList = [`Surah Al-Fatihah`, `Doa untuk jenazah ("Allahummaghfirlahu...")`, `Salam pertama`];
        exp = `Takbir 1: Al-Fatihah; Takbir 2: Shalawat Nabi; Takbir 3: Doa untuk mayit; Takbir 4: Doa penutup dan Salam.`;
        tip = 'Urutan: 1 Fatihah, 2 Shalawat, 3 Doa Jenazah, 4 Doa dan Salam.';
      } else if (tIdx === 9) {
        // Zakat
        const kgPadi = 653 + (step % 4) * 10;
        qText = `[Fikih MTs #${num}]: Nishab zakat hasil pertanian makanan pokok (seperti padi/beras) menurut ketetapan fikih setara dengan 5 wasaq, atau jika dikonversi ke dalam timbangan padi/gabah kering giling kurang lebih sebesar...`;
        cText = `653 kg gabah kering (atau 520 kg beras bersih)`;
        dList = [`1.000 kg gabah murni`, `100 kg beras`, `5.000 kg gabah`];
        exp = `Nishab zakat pertanian 5 wasaq = 653 kg gabah kering. Kadar zakatnya 5% (bila berbiaya irigasi) atau 10% (bila tadah hujan alami).`;
        tip = 'Nishab zakat pertanian = 5 wasaq (sekitar 653 kg gabah).';
      } else if (tIdx === 10) {
        // Puasa
        qText = `[Fikih MTs #${num}]: Seseorang yang membatalkan puasa Ramadhan dengan sengaja melakukan hubungan suami istri (jima') di siang hari wajib membayar kafarat besar (kafarat uzhma), yaitu secara berurutan...`;
        cText = `Memerdekakan budak mukmin, atau puasa dua bulan berturut-turut, atau memberi makan 60 orang miskin`;
        dList = [
          `Cukup beristighfar 100 kali tanpa mengqadha puasa`,
          `Membayar uang denda sebesar zakat fitrah`,
          `Menyembelih satu ekor unta di hari raya Idul Fitri`
        ];
        exp = `Kafarat jima' siang Ramadhan: memerdekakan budak, jika tidak mampu berpuasa 2 bulan berturut-turut, jika tidak mampu memberi makan 60 orang miskin.`;
        tip = 'Kafarat jima\': puasa 2 bulan berturut-turut atau beri makan 60 miskin.';
      } else if (tIdx === 11) {
        // Haji
        qText = `[Fikih MTs #${num}]: Salah satu rukun haji yang merupakan puncak inti ibadah haji dan dilaksanakan di Padang Arafah pada tanggal 9 Dzulhijjah adalah...`;
        cText = `Wukuf di Arafah`;
        dList = [`Thawaf Qudum`, `Mabit di Muzdalifah`, `Melempar Jumrah Aqabah`];
        exp = `"Al-Hajju 'Arafah" (Inti haji adalah wukuf di Arafah). Tanpa wukuf, haji tidak sah dan tidak bisa diganti dam.`;
        tip = 'Al-Hajju \'Arafah: Wukuf adalah rukun haji paling fundamental.';
      } else if (tIdx === 12) {
        // Qurban
        qText = `[Fikih MTs #${num}]: Ketentuan umur minimal hewan ternak kambing domba yang sah untuk dijadikan hewan qurban adalah...`;
        cText = `Telah berumur genap 1 tahun (memasuki tahun ke-2 / telah tanggal giginya/poel)`;
        dList = [`Minimal berusia 6 bulan`, `Minimal berusia 5 tahun penuh`, `Minimal berusia 10 tahun`];
        exp = `Syarat kambing qurban: domba minimal genap 1 tahun, kambing kacang minimal genap 2 tahun (memasuki tahun ketiga).`;
        tip = 'Kambing qurban minimal berumur 1 tahun dan poel.';
      } else if (tIdx === 13) {
        // Makanan Halal
        qText = `[Fikih MTs #${num}]: Dua jenis bangkai dan dua jenis darah yang halal dikonsumsi menurut syariat Islam berdasarkan sabda Rasulullah SAW adalah...`;
        cText = `Bangkai ikan dan belalang; darah hati dan limpa`;
        dList = [
          `Bangkai ayam dan kambing; darah sapi dan kerbau`,
          `Bangkai burung merpati dan bebek; darah beku`,
          `Bangkai kepiting dan kerang; darah hewan sembelihan`
        ];
        exp = `"Uhillat lanaa maitataani waddamaani..." (Dihalalkan bagi kita dua bangkai yaitu ikan dan belalang, dan dua darah yaitu hati dan limpa).`;
        tip = 'Bangkai halal: ikan dan belalang. Darah halal: hati dan limpa.';
      } else {
        // Khiyar
        qText = `[Fikih MTs #${num}]: Hak bagi penjual dan pembeli untuk memilih meneruskan atau membatalkan akad jual beli selama keduanya masih berada di tempat transaksi disebut...`;
        cText = `Khiyar Majlis`;
        dList = [`Khiyar Syarat`, `Khiyar Aib`, `Khiyar Ru'yah`];
        exp = `Khiyar Majlis berlaku selama kedua belah pihak belum berpisah badan dari tempat transaksi.`;
        tip = 'Khiyar Majlis = hak khiyar selama masih di lokasi majelis akad.';
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

// 4. SKI MTS (150 UNIQUE QUESTIONS)
function generateSkiMTs() {
  const skSubtopics = [
    { name: 'Kondisi Masyarakat Arab Jahiliyah', comp: 'Menganalisis sistem kepercayaan dan tatanan sosial bangsa Arab pra-Islam' },
    { name: 'Dakwah Nabi Muhammad SAW Periode Makkah', comp: 'Menganalisis strategi dakwah sembunyi-sembunyi dan dakwah terang-terangan' },
    { name: 'Isra Mi\'raj dan Hijrah ke Yatsrib (Madinah)', comp: 'Menganalisis latar belakang hijrah dan peristiwa bai\'at Aqabah' },
    { name: 'Peradaban Madinah dan Piagam Madinah', comp: 'Menganalisis pembangunan masjid, persaudaraan Muhajirin-Anshar, dan konstitusi' },
    { name: 'Perang Mempertahankan Diri (Badar, Uhud, Khandaq)', comp: 'Menganalisis strategi perang pertahanan umat Islam generasi awal' },
    { name: 'Perjanjian Hudaibiyah dan Fathu Makkah', comp: 'Menganalisis diplomasi perdamaian dan pembebasan kota Makkah tanpa darah' },
    { name: 'Khulafaur Rasyidin: Abu Bakar Ash-Shiddiq', comp: 'Menganalisis penumpasan nabi palsu dan kodifikasi awal Al-Qur\'an' },
    { name: 'Khulafaur Rasyidin: Umar bin Khattab', comp: 'Menganalisis penataan administrasi Baitul Mal dan kalender Hijriyah' },
    { name: 'Khulafaur Rasyidin: Utsman bin Affan', comp: 'Menganalisis standarisasi Mushaf Utsmani dan armada laut Islam' },
    { name: 'Khulafaur Rasyidin: Ali bin Abi Thalib', comp: 'Menganalisis penataan aparatur negara dan dinamika politik masa khalifah Ali' },
    { name: 'Daulah Umayyah di Damaskus & Andalusia', comp: 'Menganalisis kepemimpinan Muawiyah, Umar bin Abdul Aziz, dan kemajuan sains' },
    { name: 'Daulah Abbasiyah di Baghdad & Baitul Hikmah', comp: 'Menganalisis era keemasan Harun Ar-Rasyid dan pusat penerjemahan ilmu' },
    { name: 'Ilmuwan Muslim Klasik (Ibnu Sina, Al-Khawarizmi, Ar-Razi)', comp: 'Menganalisis kontribusi ilmuwan muslim bagi peradaban dunia' },
    { name: 'Masuknya Islam di Nusantara & Teori Penyebaran', comp: 'Menganalisis teori Gujarat, Makkah, Persia, dan saluran dakwah maritim' },
    { name: 'Peran Wali Songo & Kerajaan Islam di Indonesia', comp: 'Menganalisis kearifan dakwah kultural Wali Songo dan kesultanan Islam' }
  ];

  return buildUniqueSubjectBank({
    subjectId: 'ski',
    subjectName: 'SKI MTs',
    categoryId: 'rumpun_pai',
    categoryName: 'Rumpun PAI MTs',
    akgtkCategory: 'Rumpun PAI',
    educationLevel: 'MTs',
    idPrefix: 'mts-sk-',
    totalTarget: 150,
    generator: (i, diff, num) => {
      const topic = skSubtopics[i % skSubtopics.length];
      const step = Math.floor(i / skSubtopics.length) + 1; // 1 to 10
      const tIdx = i % skSubtopics.length;

      let qText = '', cText = '', dList = [], exp = '', tip = '';

      if (tIdx === 0) {
        // Jahiliyah
        qText = `[SKI MTs #${num}]: Kebiasaan buruk masyarakat Arab Jahiliyah sebelum datangnya Islam yang memandang kelahiran anak perempuan sebagai aib keluarga adalah...`;
        cText = `Mengubur bayi perempuan hidup-hidup (wa'dul banaat)`;
        dList = [
          `Menjadikan anak perempuan sebagai panglima perang suku`,
          `Mewajibkan anak perempuan berdagang ke negeri Syam`,
          `Menyerahkan anak perempuan kepada penguasa Romawi`
        ];
        exp = `Masyarakat Jahiliyah menganggap anak perempuan sebagai beban dan aib sehingga melakukan wa'dul banaat.`;
        tip = 'Wa\'dul banaat = tradisi biadab mengubur bayi perempuan hidup-hidup.';
      } else if (tIdx === 1) {
        // Makkah
        qText = `[SKI MTs #${num}]: Rumah sahabat yang dijadikan markas dakwah rahasia pertama Rasulullah SAW pada periode awal pembinaan akidah di Makkah adalah rumah...`;
        cText = `Al-Arqam bin Abil Arqam (Darul Arqam)`;
        dList = [`Abu Bakar Ash-Shiddiq`, `Umar bin Khattab`, `Utsman bin Affan`];
        exp = `Darul Arqam adalah pusat tarbiyah dan dakwah sirriyah (sembunyi-sembunyi) generasi As-Sabiqunal Awwalun.`;
        tip = 'Darul Arqam = markas dakwah sirriyah periode Makkah.';
      } else if (tIdx === 2) {
        // Hijrah
        qText = `[SKI MTs #${num}]: Peristiwa ikrar setia penduduk Yatsrib kepada Rasulullah SAW untuk melindungi dakwah Islam yang membuka jalan terjadinya hijrah ke Madinah dikenal sebagai...`;
        cText = `Bai'at 'Aqabah (Aqabah I dan II)`;
        dList = [`Perjanjian Hudaibiyah`, `Piagam Madinah`, `Fathu Makkah`];
        exp = `Bai'at Aqabah I dan II menjadi landasan politis dan sosiologis diterimanya nabi di kota Yatsrib (Madinah).`;
        tip = 'Bai\'at Aqabah menjadi pintu gerbang peristiwa hijrah nabi ke Madinah.';
      } else if (tIdx === 3) {
        // Madinah
        qText = `[SKI MTs #${num}]: Dokumen kesepakatan tertulis yang digagas Rasulullah SAW untuk mengatur hak dan kewajiban antara kaum Muslimin (Muhajirin & Anshar) dan kaum Yahudi serta non-muslim di Madinah adalah...`;
        cText = `Piagam Madinah (Mitsaq Al-Madinah)`;
        dList = [`Perjanjian Damaskus`, `Piagam Bagdad`, `Deklarasi Mina`];
        exp = `Piagam Madinah adalah konstitusi tertulis pertama di dunia yang menjamin kebebasan beragama dan persatuan warga negara.`;
        tip = 'Piagam Madinah = konstitusi madani modern pertama yang menjamin toleransi.';
      } else if (tIdx === 4) {
        // Perang
        const perangCases = [
          { p: 'Perang Badar (17 Ramadhan 2 H)', c: 'Kemenangan gemilang kaum muslimin dengan 313 personil mengalahkan 1.000 pasukan musyrikin Quraisy', d: ['Kekalahan pemanah karena tergoda harta ghanimah', 'Pembuatan parit pertahanan keliling kota', 'Perjanjian gencatan senjata 10 tahun'] },
          { p: 'Perang Uhud (3 H)', c: 'Pasukan pemanah di bukit Rumat melanggar instruksi nabi karena tergiur harta ghanimah musuh', d: ['Kaum muslimin memenangkan pertempuran tanpa perlawanan', 'Terbunuhnya Abu Jahal di tangan anak muda Anshar', 'Madinah dikepung selama satu bulan penuh'] },
          { p: 'Perang Khandaq/Ahzab (5 H)', c: 'Strategi penggalian parit pertahanan di sekeliling kota Madinah atas usul sahabat Salman Al-Farisi', d: ['Perang tanding satu lawan satu di tepi pantai', 'Pemberontakan serentak kaum munafik di Jabal Uhud', 'Pasukan berkuda Quraisy menyeberangi lautan merah'] }
        ];
        const pc = perangCases[step % perangCases.length];
        qText = `[SKI MTs #${num}]: Karakteristik penting peristiwa "${pc.p}" dalam sejarah pertahanan dakwah Islam adalah...`;
        cText = pc.c;
        dList = pc.d;
        exp = `Peristiwa ${pc.p} dicatat dalam sejarah dengan kejadian penting ${pc.c.toLowerCase()}.`;
        tip = 'Uhud = bukit Rumat ghanimah; Khandaq = parit usul Salman Al-Farisi; Badar = 17 Ramadhan 313 mujahid.';
      } else if (tIdx === 5) {
        // Fathu Makkah
        qText = `[SKI MTs #${num}]: Peristiwa Fathu Makkah (Pembebasan Kota Makkah) pada tahun 8 Hijriyah ditandai oleh keteladanan akhlak Rasulullah SAW, yaitu...`;
        cText = `Memberikan amnesti umum (memaafkan seluruh musuh tanpa pertumpahan darah) dan membersihkan Ka'bah dari berhala`;
        dList = [
          `Menghukum mati seluruh pembesar Quraisy yang pernah memusuhi Islam`,
          `Membakar seluruh rumah penduduk musyrikin Makkah`,
          `Menjarah seluruh kekayaan penduduk kota Makkah`
        ];
        exp = `Rasulullah bersabda: "Idzhabuu fa antumut thulaqaa'" (Pergilah, kalian semua bebas dimaafkan). Makkah dibebaskan dengan damai.`;
        tip = 'Fathu Makkah = pembebasan kota Makkah secara damai dan amnesti massal.';
      } else if (tIdx === 6) {
        // Abu Bakar
        qText = `[SKI MTs #${num}]: Tantangan terbesar yang dihadapi Khalifah Abu Bakar Ash-Shiddiq di awal pemerintahannya adalah menumpas orang murtad dan nabi palsu, di antaranya adalah...`;
        cText = `Musailamah Al-Kazzab, Tulaihah bin Khuwailid, dan Aswad Al-Ansi`;
        dList = [`Abu Lahab dan Abu Jahal`, `Muawiyah bin Abi Sufyan`, `Hulagu Khan dari Mongol`];
        exp = `Abu Bakar menggelar Perang Riddah untuk menumpas pembangkang zakat dan nabi-nabi palsu seperti Musailamah Al-Kazzab.`;
        tip = 'Abu Bakar menumpas gerakan Riddah dan nabi palsu Musailamah Al-Kazzab.';
      } else if (tIdx === 7) {
        // Umar bin Khattab
        qText = `[SKI MTs #${num}]: Kebijakan monumental Khalifah Umar bin Khattab dalam penataan sistem administrasi peradaban Islam di antaranya adalah...`;
        cText = `Mendirikan lembaga kas negara (Baitul Mal), jawatan kepolisian, dan menetapkan kalender Hijriyah`;
        dList = [
          `Memindahkan ibukota kekhalifahan ke semenanjung Spanyol`,
          `Menjual aset negara kepada imperium Persia`,
          `Menghapuskan sistem musyawarah dalam pemerintahan`
        ];
        exp = `Umar bin Khattab meletakkan dasar administrasi modern (diwan), Baitul Mal, pos, dan tahun Hijriyah (dimulai dari tahun hijrah nabi).`;
        tip = 'Umar bin Khattab = Baitul Mal, kalender Hijriyah, Diwan administrasi.';
      } else if (tIdx === 8) {
        // Utsman bin Affan
        qText = `[SKI MTs #${num}]: Jasa terbesar Khalifah Utsman bin Affan dalam menjaga keutuhan Al-Qur'an dari perselisihan dialek bacaan adalah...`;
        cText = `Menstandarisasi penulisan Al-Qur'an menjadi satu mushaf resmi (Mushaf Utsmani) dan menggandakannya ke berbagai wilayah`;
        dList = [
          `Menerjemahkan Al-Qur'an ke dalam bahasa Latin`,
          `Melarang santri menghafalkan Al-Qur'an secara lisan`,
          `Membakar seluruh mushaf tanpa menyisakan satu naskah pun`
        ];
        exp = `Utsman membentuk panitia yang dipimpin Zaid bin Tsabit untuk menyalin mushaf standar (Mushaf Utsmani) guna menyatukan qira'ah umat.`;
        tip = 'Utsman bin Affan = kodifikasi dan standarisasi Mushaf Utsmani.';
      } else if (tIdx === 9) {
        // Ali bin Abi Thalib
        qText = `[SKI MTs #${num}]: Salah satu kebijakan pertama yang diambil oleh Khalifah Ali bin Abi Thalib setelah dilantik menggantikan Khalifah Utsman adalah...`;
        cText = `Menarik kembali tanah hibah negara yang dibagikan secara tidak tepat dan mengganti pejabat korup`;
        dList = [
          `Membubarkan seluruh angkatan bersenjata kaum muslimin`,
          `Menyerahkan tampuk kekuasaan kepada bangsa Romawi`,
          `Menghentikan pungutan jizyah dan pajak secara mutlak`
        ];
        exp = `Khalifah Ali bersikap tegas menertibkan aset negara dan menata kembali aparatur pemerintahan yang nepotis.`;
        tip = 'Ali bin Abi Thalib fokus pada pembenahan birokrasi dan keuangan negara.';
      } else if (tIdx === 10) {
        // Umayyah
        qText = `[SKI MTs #${num}]: Panglima perang Daulah Umayyah yang memimpin penyeberangan pasukan Islam ke semenanjung Iberia (Spanyol) pada tahun 711 M hingga namanya diabadikan pada sebuah selat/bukit adalah...`;
        cText = `Thariq bin Ziyad (Jabal Thariq / Gibraltar)`;
        dList = [`Khalid bin Walid`, `Amr bin Ash`, `Sa'ad bin Abi Waqqash`];
        exp = `Thariq bin Ziyad menyeberangi selat menuju bukit yang kemudian dinamai Jabal Thariq (Gibraltar) dan membuka pintu peradaban Islam di Spanyol.`;
        tip = 'Thariq bin Ziyad = pembebas Spanyol / Andalusia (Jabal Thariq).';
      } else if (tIdx === 11) {
        // Abbasiyah
        qText = `[SKI MTs #${num}]: Lembaga perpustakaan, pusat penelitian, dan akademi penerjemahan karya-karya ilmiah terhebat pada era keemasan Daulah Abbasiyah di Baghdad bernama...`;
        cText = `Baitul Hikmah (House of Wisdom)`;
        dList = [`Darun Nadwah`, `Baitul Mal`, `Majlis Syura`];
        exp = `Baitul Hikmah didirikan oleh Khalifah Harun Ar-Rasyid dan dikembangkan pesat oleh Khalifah Al-Ma'mun sebagai kiblat sains dunia.`;
        tip = 'Baitul Hikmah = perpustakaan dan pusat riset sains Daulah Abbasiyah di Baghdad.';
      } else if (tIdx === 12) {
        // Ilmuwan
        const sciCases = [
          { nama: 'Ibnu Sina (Avicenna)', karya: 'Al-Qanun fit-Tibb (The Canon of Medicine)', b: 'Kedokteran dan Anatomi Medis' },
          { nama: 'Al-Khawarizmi', karya: 'Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala', b: 'Matematika Aljabar dan Penemu Angka Nol' },
          { nama: 'Ar-Razi (Rhazes)', karya: 'Al-Hawi fit-Tibb', b: 'Kedokteran Penyakit Cacar dan Campak' },
          { nama: 'Ibnu Rusyd (Averroes)', karya: 'Bidayatul Mujtahid dan Tahafut at-Tahafut', b: 'Filsafat Islam dan Perbandingan Fikih Mazhab' }
        ];
        const sc = sciCases[step % sciCases.length];
        qText = `[SKI MTs #${num}]: Ilmuwan muslim terkemuka "${sc.nama}" memberikan kontribusi abadi bagi dunia melalui mahakaryanya "${sc.karya}" di bidang keilmuan...`;
        cText = sc.b;
        dList = [`Navigasi Perang Laut`, `Metalurgi Pertambangan Besi`, `Arsitektur Benteng Kota`];
        exp = `${sc.nama} adalah pelopor legendaris dalam bidang ${sc.b.toLowerCase()} dengan kitab '${sc.karya}'.`;
        tip = 'Ibnu Sina = Kedokteran (Al-Qanun); Al-Khawarizmi = Aljabar & Matematika.';
      } else if (tIdx === 13) {
        // Teori Masuknya Islam
        qText = `[SKI MTs #${num}]: Teori yang didukung oleh Prof. Dr. Buya Hamka menyatakan bahwa Islam masuk ke Indonesia langsung dari Makkah/Mesir pada abad ke-7 Masehi didasarkan pada bukti...`;
        cText = `Berdirinya perkampungan pedagang Arab muslim di pesisir pantai barat Sumatra (Barus) dan kesamaan mazhab Syafi'i`;
        dList = [
          `Batu nisan Sultan Malik As-Saleh yang bercorak khas Cambay Gujarat`,
          `Peringatan upacara Tabuik di Pariaman yang bernuansa tradisi Syiah Persia`,
          `Arsitektur masjid kuno yang menyerupai kelenteng Tiongkok`
        ];
        exp = `Teori Makkah (Buya Hamka) bersandar pada berita Tiongkok tentang pemukiman Barus abad ke-7 dan dominasi mazhab Syafi'i di Nusantara.`;
        tip = 'Teori Makkah = abad ke-7 M, bukti Barus dan dominasi mazhab Syafi\'i.';
      } else {
        // Wali Songo
        const waliCases = [
          { w: 'Sunan Kalijaga (Raden Sahid)', media: 'Wayang kulit, tembang Ilir-Ilir, dan gamelan Sekaten bernafaskan tauhid' },
          { w: 'Sunan Ampel (Raden Rahmat)', media: 'Falsafah dakwah Moh Limo (tidak mau main judi, minum arak, mencuri, madat, dan zina)' },
          { w: 'Sunan Bonang (Raden Makhdum Ibrahim)', media: 'Instrumen gamelan Bonang dan tembang suluk mistik kejawen yang islami' },
          { w: 'Sunan Kudus (Ja\'far Shadiq)', media: 'Menghormati tradisi masyarakat Hindu dengan melarang penyembelihan sapi saat Idul Adha' }
        ];
        const wc = waliCases[step % waliCases.length];
        qText = `[SKI MTs #${num}]: Tokoh Wali Songo "${wc.w}" menerapkan strategi dakwah kultural yang sangat bijak dan toleran melalui sarana...`;
        cText = wc.media;
        dList = [
          `Memerangi penduduk lokal dengan kekuatan senjata secara kejam`,
          `Menghancurkan seluruh seni gamelan dan warisan leluhur secara paksa`,
          `Mengisolasi santri di pulau terpencil tanpa interaksi dengan warga sekitar`
        ];
        exp = `${wc.w} dikenal dengan pendekatan dakwah akulturatif melalui ${wc.media.toLowerCase()}.`;
        tip = 'Wali Songo berdakwah dengan hikmah, mau\'izhah hasanah, dan akulturasi budaya yang bijak.';
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

// 5. BAHASA ARAB MTS (150 UNIQUE QUESTIONS)
function generateBahasaArabMTs() {
  const baSubtopics = [
    { name: 'Kosa Kata Fasilitas Madrasah (Al-Marafiq Al-Madrasiyyah)', comp: 'Mengidentifikasi mufradat ruang kelas, perpustakaan, dan laboratorium' },
    { name: 'Aqsamul Kalimah: Isim, Fi\'il, Huruf', comp: 'Membedakan ciri isim, fi\'il, dan huruf dalam teks bahasa Arab' },
    { name: 'Isim Isyarah (Hadza, Hadzihi, Dzalika, Tilka)', comp: 'Menerapkan kata tunjuk sesuai jenis mudzakkar dan muannats' },
    { name: 'Isim Dhamir Munfashil dan Muttashil', comp: 'Menerapkan kata ganti orang (Huwa, Hiya, Anta, Anti, Ana, Nahnu)' },
    { name: 'Zharaf Makan dan Harf Jar', comp: 'Menerapkan kata depan tempat (Amama, Wara\'a, Fauqa, Tahta, Janiba, Fi)' },
    { name: 'Al-Adad wal Ma\'dud (Bilangan 1-100)', comp: 'Menerapkan kaidah bilangan dan kesesuaian mudzakkar-muannats' },
    { name: 'As-Sa\'ah wal Awqat (Jam dan Waktu)', comp: 'Mengungkapkan jam dan waktu dalam kegiatan belajar santri' },
    { name: 'Tarkib Na\'at wa Man\'ut', comp: 'Menyusun frasa sifat dan yang disifati sesuai i\'rab dan gender' },
    { name: 'Tarkib Idhafah (Mudhaf & Mudhaf Ilaih)', comp: 'Menganalisis susunan kepemilikan dan hukum majrurnya mudhaf ilaih' },
    { name: 'Jumlah Ismiyyah: Mubtada dan Khabar', comp: 'Menganalisis subjek dan predikat kalimat nominal serta hukum rofa\'' },
    { name: 'Jumlah Fi\'liyyah: Fi\'il, Fa\'il, Maf\'ul Bih', comp: 'Menyusun kalimat verbal dan menentukan harakat fa\'il dan maf\'ul bih' },
    { name: 'Tashrif Fi\'il Madhi (Bentuk Lampau)', comp: 'Mengonjugasikan kata kerja lampau dengan berbagai dhamir' },
    { name: 'Tashrif Fi\'il Mudhari\' (Bentuk Sedang/Akan Datang)', comp: 'Mengonjugasikan kata kerja masa kini dan huruf mudhara\'ah' },
    { name: 'Fi\'il Amar (Kata Kerja Perintah)', comp: 'Menerapkan kalimat perintah sopan dalam instruksi kelas' },
    { name: 'Al-Mihnah wal Hiwayah (Profesi dan Hobi)', comp: 'Menganalisis teks pemahaman cita-cita profesi dan hobi santri' }
  ];

  return buildUniqueSubjectBank({
    subjectId: 'bahasa_arab',
    subjectName: 'Bahasa Arab MTs',
    categoryId: 'rumpun_pai',
    categoryName: 'Rumpun PAI MTs',
    akgtkCategory: 'Rumpun PAI',
    educationLevel: 'MTs',
    idPrefix: 'mts-ba-',
    totalTarget: 150,
    generator: (i, diff, num) => {
      const topic = baSubtopics[i % baSubtopics.length];
      const step = Math.floor(i / baSubtopics.length) + 1; // 1 to 10
      const tIdx = i % baSubtopics.length;

      let qText = '', cText = '', dList = [], exp = '', tip = '';

      if (tIdx === 0) {
        // Fasilitas
        const mufCases = [
          { arab: 'المَكْتَبَةُ المَدْرَسِيَّةُ (Al-maktabatul madrasiyyah)', arti: 'Perpustakaan madrasah tempat membaca dan meminjam buku' },
          { arab: 'مَعْمَلُ العُلُوْمِ (Ma\'malul \'uluum)', arti: 'Laboratorium sains tempat eksperimen dan praktikum' },
          { arab: 'مَقْصَفُ المَدْرَسَةِ (Maqshaful madrasah)', arti: 'Kantin madrasah tempat santri membeli makanan sehat' },
          { arab: 'مَلْعَبُ كُرَةِ القَدَمِ (Mal\'abu kuratil qadam)', arti: 'Lapangan sepak bola untuk kegiatan olahraga' }
        ];
        const mc = mufCases[step % mufCases.length];
        qText = `[Qur'an Hadits MTs #${num}]: Arti dari mufradat fasilitas madrasah "${mc.arab}" adalah...`;
        cText = mc.arti;
        dList = [
          `Ruang kepala madrasah dan dewan guru`,
          `Tempat parkir kendaraan bermotor`,
          `Gudang penyimpanan meja dan kursi rusak`
        ];
        exp = `Kosakata '${mc.arab}' memiliki arti ${mc.arti.toLowerCase()}.`;
        tip = 'Maktabah = perpustakaan; Ma\'mal = lab; Maqshaf = kantin; Mal\'ab = lapangan.';
      } else if (tIdx === 1) {
        // Aqsamul Kalimah
        qText = `[Qur'an Hadits MTs #${num}]: Kata "يَكْتُبُ" (Yaktubu) dalam kalimat "يَكْتُبُ التِّلْمِيْذُ الدَّرْسَ" tergolong ke dalam jenis kata...`;
        cText = `Fi'il (Kata kerja sedang/akan berlangsung)`;
        dList = [`Isim (Kata benda/sifat)`, `Harf (Kata penghubung)`, `Zharaf zaman semata`];
        exp = `'Yaktubu' diawali huruf mudhara'ah ya dan menunjukkan perbuatan (menulis) sehingga merupakan Fi'il Mudhari'.`;
        tip = 'Ciri fi\'il mudhari\' diawali huruf mudhara\'ah: alif, nun, ya, ta (Anitu).';
      } else if (tIdx === 2) {
        // Isim Isyarah
        qText = `[Qur'an Hadits MTs #${num}]: Lengkapilah kalimat berikut dengan Isim Isyarah yang tepat sesuai kaidah mudzakkar/muannats:\n"[ ... ] سَبُّوْرَةٌ جَدِيْدَةٌ فِي الفَصْلِ"`;
        cText = `هَذِهِ (Hadzihi)`;
        dList = [`هَذَا (Hadza)`, `ذَلِكَ (Dzalika)`, `هُوَ (Huwa)`];
        exp = `Kata 'سَبُّوْرَةٌ' (sabbuuratun) diakhiri ta' marbuthah sehingga berjenis muannats. Kata tunjuk dekat untuk muannats adalah 'هَذِهِ' (Hadzihi).`;
        tip = 'Kata berakhiran ta\' marbuthah (muannats) menggunakan Hadzihi / Tilka.';
      } else if (tIdx === 3) {
        // Dhamir
        qText = `[Qur'an Hadits MTs #${num}]: Kata ganti orang (Dhamir) yang tepat untuk menggantikan subjek perempuan tunggal "فَاطِمَةُ" (Fathimah) adalah...`;
        cText = `هِيَ (Hiya)`;
        dList = [`هُوَ (Huwa)`, `أَنْتَ (Anta)`, `نَحْنُ (Nahnu)`];
        exp = `'Fathimah' adalah orang ketiga tunggal perempuan (mufrad muannats ghaibah), sehingga dhamirnya adalah 'هِيَ' (Hiya).`;
        tip = 'Huwa = dia laki-laki; Hiya = dia perempuan; Anta = kamu laki-laki; Anti = kamu perempuan.';
      } else if (tIdx === 4) {
        // Zharaf
        qText = `[Qur'an Hadits MTs #${num}]: Perhatikan kalimat: "الكِتَابُ [ ... ] المَكْتَبِ". Kata depan/zharaf yang tepat untuk menyatakan bahwa buku berada "di atas meja (menempel)" adalah...`;
        cText = `عَلَى ('Ala)`;
        dList = [`فَوْقَ (Fauqa - di atas melayang)`, `تَحْتَ (Tahta - di bawah)`, `وَرَاءَ (Wara'a - di belakang)`];
        exp = `'Ala digunakan untuk posisi menempel di atas permukaan, sedangkan fauqa digunakan untuk posisi menggantung/melayang di atas.`;
        tip = '\'Ala = di atas menempel; Fauqa = di atas tidak menempel.';
      } else if (tIdx === 5) {
        // Adad
        qText = `[Qur'an Hadits MTs #${num}]: Susunan bilangan yang benar untuk menyatakan "Tiga pulpen" dalam bahasa Arab (mengikuti kaidah berlawanan gender untuk bilangan 3-10) adalah...`;
        cText = `ثَلَاثَةُ أَقْلَامٍ (Tsalaatsatu aqlaam)`;
        dList = [`ثَلَاثُ أَقْلَامٍ`, `أَقْلَامٌ ثَلَاثَةٌ بِالتَّنْوِيْنِ`, `ثَلَاثَةُ قَلَمٍ`];
        exp = `Mufrad 'qalam' adalah mudzakkar. Bilangan 3-10 berlawanan jenis, sehingga bilangannya muannats (ثَلَاثَةُ) dan ma'dudnya jamak majrur (أَقْلَامٍ).`;
        tip = 'Bilangan 3-10: jenis adad berlawanan dengan mufrad ma\'dud, ma\'dud berbentuk jamak majrur.';
      } else if (tIdx === 6) {
        // As-Sa'ah
        qText = `[Qur'an Hadits MTs #${num}]: Ungkapan bahasa Arab untuk menyatakan waktu "Pukul 07.30 (Jam tujuh lebih tiga puluh menit / setengah delapan)" adalah...`;
        cText = `السَّاعَةُ السَّابِعَةُ وَالنِّصْفُ (As-Saa'atus saabi'atu wan nishf)`;
        dList = [
          `السَّاعَةُ السَّابِعَةُ وَالرُّبْعُ`,
          `السَّاعَةُ الثَّامِنَةُ إِلَّا الرُّبْعَ`,
          `السَّاعَةُ السَّادِسَةُ تَمَامًا`
        ];
        exp = `Jam 7 = As-Saabi'ah; lebih = wa; setengah (30 menit) = an-nishf.`;
        tip = 'An-Nishf = 30 menit (setengah jam); Ar-Rub\'u = 15 menit (seperempat jam).';
      } else if (tIdx === 7) {
        // Na'at Man'ut
        qText = `[Qur'an Hadits MTs #${num}]: Susunan Na'at wa Man'ut (sifat dan yang disifati) yang benar menurut kaidah keselarasan jenis dan harakat adalah...`;
        cText = `طَالِبٌ مَاهِرٌ (Thaalibun maahirun)`;
        dList = [`طَالِبٌ مَاهِرَةٌ`, `طَالِبَةٌ مَاهِرٌ`, `الطَّالِبُ مَاهِرٌ خَبَرٌ`];
        exp = `Na'at harus mengikuti Man'ut dalam 4 hal: jenis (mudzakkar/muannats), jumlah, i'rab (rafa/nashab/jar), dan kejelasan (nakirah/ma'rifah).`;
        tip = 'Na\'at harus kembar identik dengan Man\'ut (gender, harakat, ma\'rifah/nakirah).';
      } else if (tIdx === 8) {
        // Idhafah
        qText = `[Qur'an Hadits MTs #${num}]: Hukum harakat kata kedua (Mudhaf Ilaih) dalam susunan Idhafah (seperti "كِتَابُ الأُسْتَاذِ") adalah selalu...`;
        cText = `Majrur (berharakat kasrah atau yang menggantikannya)`;
        dList = [`Marfu' (berharakat dhommah)`, `Manshub (berharakat fathah)`, `Sukun jazm`];
        exp = `Mudhaf ilaih dalam tata bahasa Arab selamanya dihukumi majrur (kasrah).`;
        tip = 'Mudhaf tidak boleh tanwin/alif lam; Mudhaf Ilaih selamanya MAJRUR (kasrah).';
      } else if (tIdx === 9) {
        // Jumlah Ismiyyah
        qText = `[Qur'an Hadits MTs #${num}]: Dalam kalimat "الفَصْلُ وَاسِعٌ" (Kelas itu luas), kedudukan kata "الفَصْلُ" dan "وَاسِعٌ" secara berurutan adalah...`;
        cText = `Mubtada' (subjek) dan Khabar (predikat)`;
        dList = [`Fi'il dan Fa'il`, `Na'at dan Man'ut`, `Mudhaf dan Mudhaf Ilaih`];
        exp = `Kalimat isim diawali isim ma'rifah marfu' sebagai Mubtada' dan disempurnakan maknanya oleh Khabar.`;
        tip = 'Jumlah Ismiyyah terdiri dari Mubtada (subjek di depan) dan Khabar (penjelas).';
      } else if (tIdx === 10) {
        // Jumlah Fi'liyyah
        qText = `[Qur'an Hadits MTs #${num}]: Dalam kalimat verbal "قَرَأَ أَحْمَدُ القُرْآنَ", kata "القُرْآنَ" berharakat fathah karena berkedudukan sebagai...`;
        cText = `Maf'ul bih (objek penderita yang dihukumi manshub)`;
        dList = [`Fa'il (pelaku subjek marfu')`, `Fi'il Madhi`, `Khabar mubtada'`];
        exp = `'Al-Qur'ana' adalah objek perbuatan membaca yang dilakukan Ahmad, sehingga berkedudukan Maf'ul bih manshub (fathah).`;
        tip = 'Fa\'il (pelaku) = marfu\' (dhommah); Maf\'ul bih (objek) = manshub (fathah).';
      } else if (tIdx === 11) {
        // Fi'il Madhi
        qText = `[Qur'an Hadits MTs #${num}]: Perubahan kata kerja lampau (Fi'il Madhi) "ذَهَبَ" (Dzahaaba) jika pelakunya adalah dhamir jamak "هُمْ" (mereka laki-laki) menjadi...`;
        cText = `ذَهَبُوا (Dzahabuu)`;
        dList = [`ذَهَبَتْ (Dzahabat)`, `ذَهَبْنَا (Dzahabnaa)`, `تَذْهَبُوْنَ (Tadzhabuuna)`];
        exp = `Konjugasi fi'il madhi untuk dhamir 'Hum' ditambahkan wawu jama'ah dan alif pembeda di akhirnya: ذَهَبُوا.`;
        tip = 'Hum + Fi\'il Madhi diakhiri wawu sukun dan alif: Fa\'aluu / Dzahabuu.';
      } else if (tIdx === 12) {
        // Fi'il Mudhari
        qText = `[Qur'an Hadits MTs #${num}]: Bentuk Fi'il Mudhari' dari kata kerja "عَلِمَ" (mengetahui) untuk dhamir "أَنَا" (saya) adalah...`;
        cText = `أَعْلَمُ (A'lamu)`;
        dList = [`يَعْلَمُ (Ya'lamu)`, `نَعْلَمُ (Na'lamu)`, `تَعْلَمُ (Ta'lamu)`];
        exp = `Untuk dhamir 'Ana', huruf mudhara'ah di awal fi'il mudhari' adalah hamzah: أَعْلَمُ.`;
        tip = 'Dhamir Ana diawali huruf Alif/Hamzah (A\'lamu, Aktubu, Adzhabu).';
      } else if (tIdx === 13) {
        // Fi'il Amar
        qText = `[Qur'an Hadits MTs #${num}]: Kalimat perintah (Fi'il Amar) yang diucapkan oleh guru kepada seorang siswi perempuan (Anti) untuk membaca buku adalah...`;
        cText = `اِقْرَئِي الكِتَابَ يَا عَائِشَةُ! (Iqra'ii al-kitaaba yaa 'Aisyah!)`;
        dList = [
          `اِقْرَأْ الكِتَابَ يَا عَائِشَةُ!`,
          `اِقْرَؤُوْا الكِتَابَ يَا عَائِشَةُ!`,
          `تَقْرَئِيْنَ الكِتَابَ يَا عَائِشَةُ!`
        ];
        exp = `Fi'il amar untuk mukhatabah muannatsah (Anti) ditambahkan ya mukhathabah di akhirnya: اِقْرَئِي.`;
        tip = 'Fi\'il Amar untuk Anti diakhiri Ya sukun: Iqra\'ii, Uktubii, Ijlisii.';
      } else {
        // Mihnah / Profesi
        qText = `[Qur'an Hadits MTs #${num}]: Orang yang bertugas merawat dan memeriksa kesehatan pasien di rumah sakit atau puskesmas dalam bahasa Arab disebut...`;
        cText = `طَبِيْبٌ (Thabiibun)`;
        dList = [`مُهَنْدِسٌ (Muhandisun)`, `فَلَّاحٌ (Fallaahun)`, `شُرْطِيٌّ (Syurthiyyun)`];
        exp = `Thabiib = dokter, Muhandis = insinyur, Fallah = petani, Syurthi = polisi.`;
        tip = 'Thabiib = dokter; Mudarris = guru; Muhandis = insinyur; Tajir = pedagang.';
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
  generateQuranHaditsMTs,
  generateAkidahAkhlakMTs,
  generateFikihMTs,
  generateSkiMTs,
  generateBahasaArabMTs
};
