// Modular Generator for MTs Mata Pelajaran Umum: Bahasa Indonesia, Bahasa Inggris, IPS
const { buildUniqueSubjectBank } = require('./generate_all_subjects_master.cjs');

// 1. BAHASA INDONESIA MTS (150 UNIQUE QUESTIONS)
function generateBahasaIndonesiaMTs() {
  const indSubtopics = [
    { name: 'Teks Laporan Hasil Observasi (LHO)', comp: 'Menganalisis struktur dan ciri kebahasaan teks LHO' },
    { name: 'Teks Deskripsi', comp: 'Menganalisis cerapan pancaindra dan majas dalam teks deskripsi' },
    { name: 'Teks Prosedur Kompleks', comp: 'Menganalisis urutan langkah, verba imperatif, dan konjungsi temporal' },
    { name: 'Teks Eksplanasi Fenomena', comp: 'Menganalisis hubungan sebab-akibat (kausalitas) fenomena alam/sosial' },
    { name: 'Teks Cerita Fantasi & Fabel', comp: 'Mengidentifikasi unsur intrinsik (alur, watak, amanat) cerita fantasi/fabel' },
    { name: 'Teks Berita Madrasah', comp: 'Mengidentifikasi unsur 5W+1H (ADIKSIMBA) dan struktur berita' },
    { name: 'Teks Iklan, Slogan, dan Poster', comp: 'Menganalisis kalimat persuasif dan fungsi komunikasi iklan/poster' },
    { name: 'Teks Puisi Rakyat (Pantun & Gurindam)', comp: 'Menganalisis rima, syarat sampiran-isi pantun, dan gurindam' },
    { name: 'Teks Puisi Modern & Majas', comp: 'Menafsirkan makna konotatif, citraan, dan majas dalam puisi' },
    { name: 'Teks Ulasan (Resensi Buku)', comp: 'Menganalisis keunggulan, kelemahan, dan rekomendasi karya tulis' },
    { name: 'Teks Cerpen Remaja', comp: 'Menganalisis konflik batin tokoh dan sudut pandang penceritaan cerpen' },
    { name: 'Teks Diskusi & Gagasan Pro-Kontra', comp: 'Mengidentifikasi argumen pendukung, penentang, dan simpulan jalan tengah' },
    { name: 'Teks Tanggapan Kritis', comp: 'Menyusun tanggapan kritis dengan santun, objektif, dan logis' },
    { name: 'Surat Dinas & Surat Resmi Madrasah', comp: 'Menganalisis bagian-bagian surat dinas dan salam pembuka/penutup baku' },
    { name: 'Kaidah Ejaan (EYD V) & Kalimat Efektif', comp: 'Memperbaiki penulisan huruf kapital, kata baku, dan tanda baca' }
  ];

  return buildUniqueSubjectBank({
    subjectId: 'bahasa_indonesia',
    subjectName: 'Bahasa Indonesia MTs',
    categoryId: 'umum',
    categoryName: 'Umum MTs',
    akgtkCategory: 'Umum',
    educationLevel: 'MTs',
    idPrefix: 'mts-ind-',
    totalTarget: 150,
    generator: (i, diff, num) => {
      const topic = indSubtopics[i % indSubtopics.length];
      const step = Math.floor(i / indSubtopics.length) + 1; // 1 to 10
      const tIdx = i % indSubtopics.length;

      let qText = '', cText = '', dList = [], exp = '', tip = '';

      if (tIdx === 0) {
        // LHO
        const tema = ['hutan konservasi bakau', 'laboratorium apotek hidup', 'pengolahan kompos organik', 'budidaya lebah madu klanceng', 'taman hidrologi madrasah', 'penangkaran kupu-kupu langka', 'instalasi panel surya atap', 'kolam bioflok nila', 'kawasan resapan biopori', 'bank sampah santri'][step - 1];
        qText = `[Teks LHO MTs #${num}]: Bacalah penggalan teks observasi bertema "${tema}":\n"${tema.charAt(0).toUpperCase() + tema.slice(1)} memiliki peranan ekologis yang sangat penting bagi keseimbangan lingkungan madrasah. Ekosistem ini menjadi habitat alami beragam flora dan fauna mikro yang mendukung kelestarian hayati."\nPenggalan paragraf tersebut menduduki bagian struktur...`;
        cText = `Pernyataan umum (definisi dan klasifikasi awal)`;
        dList = [`Deskripsi bagian spesifik organ`, `Deskripsi manfaat ekonomi sampingan`, `Penutup simpulan subjektif`];
        exp = `Pernyataan umum menyajikan batasan definisi, klasifikasi, dan pengenalan umum objek yang diobservasi.`;
        tip = 'Pernyataan umum terletak di awal teks LHO berisi klasifikasi.';
      } else if (tIdx === 1) {
        // Deskripsi
        const objek = ['menara masjid putih yang menjulang megah menembus awan pagi', 'gemericik air terjun buatan di sudut taman yang menyejukkan hati', 'aroma harum semerbak bunga melati yang merebak saat fajar menyingsing', 'permukaan batu marmer serambi yang dingin menusuk telapak kaki'][step % 4];
        const indra = ['penglihatan (visual)', 'pendengaran (auditif)', 'penciuman (olfaktori)', 'perabaan (taktil)'][step % 4];
        qText = `[Teks Deskripsi MTs #${num}]: Perhatikan kalimat: "Di sudut madrasah tampak ${objek}." Kalimat tersebut melibatkan cerapan pancaindra dominan...`;
        cText = `Indra ${indra}`;
        dList = ['Indra pengecap (gustatori)', 'Indra keseimbangan vestibular', 'Indra kinestetik otot'].filter(x => !x.includes(indra)).slice(0, 3);
        exp = `Deskripsi '${objek}' secara langsung merangsang indra ${indra}.`;
        tip = 'Perhatikan kata kunci indra: visual (warna/bentuk), auditif (suara), taktil (suhu/tekstur), olfaktori (aroma).';
      } else if (tIdx === 2) {
        // Prosedur
        const act = ['Bilaslah tabung reaksi dengan akuades steril!', 'Teteskan dua tetes reagen lugol secara perlahan!', 'Panaskan larutan di atas pembakar bunsen dengan hati-hati!', 'Catatlah perubahan warna larutan pada lembar pengamatan!'][step % 4];
        qText = `[Teks Prosedur MTs #${num}]: Kalimat petunjuk operasional laboratorium: "${act}". Bentuk verba imperatif yang menandai kalimat prosedur tersebut adalah...`;
        cText = `Kata kerja tindakan berakhiran partikel penegas perintah (-lah / -kan)`;
        dList = [`Kata benda konkret peralatan lab`, `Kata sifat penggambaran wujud zat`, `Konjungsi penggabung bertingkat`];
        exp = `Verba imperatif ditandai bentuk dasar perintah atau imbuhan -lah/-kan yang menuntut tindakan operasional.`;
        tip = 'Verba imperatif adalah kata kerja perintah (teteskan, bilaslah, amatilah).';
      } else if (tIdx === 3) {
        // Eksplanasi
        qText = `[Teks Eksplanasi MTs #${num}]: Konjungsi kronologis (urutan waktu peristiwa) yang tepat digunakan dalam teks eksplanasi siklus hidrologi air hujan adalah...`;
        cText = `"Uap air naik ke atmosfer, kemudian mengembun menjadi awan tebal."`;
        dList = [
          `"Hujan turun sangat deras karena terjadi perbedaan tekanan udara."`,
          `"Petani bersyukur walaupun sawah mereka sempat tergenang air."`,
          `"Air sungai mengalir jika saluran drainase tidak tersumbat sampah."`
        ];
        exp = `Kata 'kemudian' dan 'setelah itu' adalah konjungsi temporal kronologis (urutan proses waktu).`;
        tip = 'Konjungsi kronologis: lalu, kemudian, setelah itu, selanjutnya.';
      } else if (tIdx === 4) {
        // Fantasi / Fabel
        qText = `[Cerita Fantasi/Fabel #${num}]: Dalam kisah fabel madrasah nomor #${num}, seekor semut kecil berhasil menolong merpati dari bidikan pemburu liar dengan menggigit kaki pemburu. Nilai budi pekerti yang terkandung adalah...`;
        cText = `Kebaikan sekecil apapun akan mendatangkan balasan pertolongan berharga saat kita membutuhkannya`;
        dList = [
          `Makhluk kecil tidak boleh berteman dengan unggas yang bisa terbang tinggi`,
          `Pemburu hewan liar harus diberi hadiah busur panah baru`,
          `Kekuatan fisik besar adalah satu-satunya penentu keselamatan di hutan`
        ];
        exp = `Kisah fabel mengajarkan ketulusan membalas budi dan tolong-menolong tanpa memandang rupa.`;
        tip = 'Amanat fabel selalu mencerminkan nilai etika budi pekerti luhur.';
      } else if (tIdx === 5) {
        // Berita
        qText = `[Teks Jurnalistik MTs #${num}]: Dalam teks berita perhelatan Olimpiade Sains Madrasah, kalimat: "Kegiatan olimpiade dibuka secara resmi di Aula Kemenag pada hari Senin pukul 08.00 WIB" memuat unsur berita...`;
        cText = `Di mana (Where) dan Kapan (When)`;
        dList = [`Siapa (Who) dan Mengapa (Why)`, `Bagaimana (How) semata`, `Apa (What) dan Berapa (How much)`];
        exp = `'Di Aula Kemenag' menerangkan tempat (Where) dan 'hari Senin pukul 08.00 WIB' menerangkan waktu (When).`;
        tip = 'Where = tempat kejadian, When = waktu kejadian.';
      } else if (tIdx === 6) {
        // Slogan / Iklan
        qText = `[Teks Slogan MTs #${num}]: Kalimat slogan yang paling padat makna untuk mengajak santri berhemat energi listrik di lingkungan asrama adalah...`;
        cText = `"Matikan Lampu yang Tak Perlu, Terangi Masa Depan Bumimu"`;
        dList = [
          `"Tagihan rekening listrik madrasah bulan ini mengalami lonjakan cukup tinggi"`,
          `"Kabel instalasi listrik baru saja diperbaiki oleh tukang kemarin sore"`,
          `"Di setiap kamar santri sudah dipasang lampu pijar berkekuatan 20 watt"`
        ];
        exp = `Slogan hemat energi harus persuasif, berima indah, mudah diingat, dan menggugah aksi sadar lingkungan.`;
        tip = 'Slogan berciri singkat, padat, berirama, dan persuasif.';
      } else if (tIdx === 7) {
        // Pantun
        qText = `[Puisi Rakyat Pantun #${num}]: Ciri mutlak dari pantun empat baris tradisional yang membedakannya dari syair adalah...`;
        cText = `Baris 1-2 berupa sampiran pembayang dan baris 3-4 berupa isi dengan rima akhir a-b-a-b`;
        dList = [
          `Seluruh baris 1 sampai 4 adalah isi nasihat bersajak a-a-a-a`,
          `Hanya terdiri dari dua baris yang saling berhubungan sebab-akibat`,
          `Tidak terikat oleh aturan persajakan maupun jumlah suku kata`
        ];
        exp = `Pantun memiliki struktur sampiran (baris 1-2) dan isi (baris 3-4) dengan pola rima silang a-b-a-b.`;
        tip = 'Pantun: sampiran baris 1-2, isi baris 3-4, rima a-b-a-b.';
      } else if (tIdx === 8) {
        // Majas Puisi
        qText = `[Majas Puisi MTs #${num}]: Larik puisi: "Lautan ilmu terhampar luas di lembaran kitab kuning santri." Majas yang digunakan pada penggalan puisi tersebut adalah...`;
        cText = `Majas Metafora (perbandingan langsung tanpa kata pembanding)`;
        dList = [`Majas Litotes (merendahkan diri)`, `Majas Ironi (sindiran halus)`, `Majas Pleonasme (penegasan berlebih)`];
        exp = `'Lautan ilmu' membandingkan kedalaman ilmu dengan luasnya lautan secara langsung (metafora).`;
        tip = 'Metafora = perbandingan analogis langsung tanpa kata "seperti" atau "laksana".';
      } else if (tIdx === 9) {
        // Resensi
        qText = `[Teks Resensi MTs #${num}]: Dalam ulasan sebuah novel religi, kalimat rekomendasi yang santun dan objektif adalah...`;
        cText = `"Buku ini sangat direkomendasikan bagi remaja muslim karena sarat teladan keteguhan iman dan adab pergaulan."`;
        dList = [
          `"Siapapun yang tidak membaca novel ini tergolong orang yang merugi pengetahuannya."`,
          `"Buku ini hanya boleh dibaca oleh kalangan guru yang sudah bersertifikasi dinas."`,
          `"Penerbit wajib menggratiskan seluruh buku ini kepada seluruh madrasah di Indonesia."`
        ];
        exp = `Rekomendasi resensi memberikan saran manfaat membaca karya bagi target pembaca tertentu secara positif.`;
        tip = 'Rekomendasi ulasan menyampaikan sasaran pembaca dan manfaat membaca buku.';
      } else if (tIdx === 10) {
        // Cerpen
        qText = `[Apresiasi Cerpen MTs #${num}]: Kutipan cerpen: "Aku menatap jam dinding tua di kamarku. Suara detiknya seakan menghitung detak rasa bersalahku kepada ibu." Sudut pandang yang digunakan oleh pengarang adalah...`;
        cText = `Sudut pandang orang pertama (tokoh utama "Aku")`;
        dList = [`Sudut pandang orang ketiga serba tahu ("Dia/Ia")`, `Sudut pandang orang ketiga pengamat`, `Sudut pandang orang kedua imperatif ("Kamu")`];
        exp = `Penggunaan kata ganti 'Aku' sebagai pencerita yang terlibat langsung dalam konflik menunjukkan sudut pandang orang pertama.`;
        tip = 'Orang pertama = Aku / Saya; Orang ketiga = Dia / Ia / Nama tokoh.';
      } else if (tIdx === 11) {
        // Diskusi
        qText = `[Teks Diskusi MTs #${num}]: Dalam teks diskusi tentang ekstrakurikuler wajib pramuka, bagian yang merangkum jalan tengah atas silang pendapat disebut...`;
        cText = `Simpulan / Rekomendasi solusi yang menengahi sudut pandang pro dan kontra`;
        dList = [
          `Isu kontroversial pengantar masalah tanpa penjelasan`,
          `Rangkaian argumen penentang yang menyudutkan salah satu pihak`,
          `Rangkaian argumen pendukung tanpa mempertimbangkan kendala`
        ];
        exp = `Simpulan diskusi menyajikan sintesis jalan tengah yang adil mengakomodasi sisi positif kedua argumen.`;
        tip = 'Simpulan diskusi memberikan solusi kompromi yang konstruktif.';
      } else if (tIdx === 12) {
        // Tanggapan Kritis
        qText = `[Tanggapan Kritis MTs #${num}]: Kalimat pujian santun terhadap karya lukis kaligrafi siswa madrasah adalah...`;
        cText = `"Goresan kuas kaligrafi karya Ananda sangat dinamis dengan perpaduan gradasi warna yang selaras dan artistik."`;
        dList = [
          `"Lukisan ini biasa saja, masih jauh lebih bagus karya pelukis profesional di museum."`,
          `"Warna yang digunakan terlalu mencolok mata dan merusak keindahan huruf Arabnya."`,
          `"Karya ini tidak pantas dipajang di dinding galeri madrasah sebelum dirombak total."`
        ];
        exp = `Pujian kritis menyoroti kekuatan estetika dan teknis karya secara santun dan konstruktif.`;
        tip = 'Pujian santun berfokus pada kelebihan estetika karya dengan bahasa apresiatif.';
      } else if (tIdx === 13) {
        // Surat Dinas
        qText = `[Surat Dinas MTs #${num}]: Penulisan tanggal surat dinas resmi madrasah yang benar dan baku tanpa disertai nama kota (karena nama kota sudah ada di kop surat) adalah...`;
        cText = `2 Mei 2026`;
        dList = [`Surabaya, 02-05-2026`, `Tgl. 2 Mei 2026.`, `Surabaya, 2 MEI 2026`];
        exp = `Pada naskah dinas berkop resmi, tanggal ditulis: tanggal (angka tanpa nol di depan), nama bulan (huruf kapital di awal), dan tahun tanpa tanda titik.`;
        tip = 'Tanggal surat resmi: 2 Mei 2026 (tanpa nama kota jika kop surat sudah ada).';
      } else {
        // EYD V
        qText = `[EYD V Tata Bahasa #${num}]: Penulisan gelar akademik dan tanda koma yang baku menurut pedoman EYD V adalah...`;
        cText = `Dr. Muhammad Zaki, M.Pd.I.`;
        dList = [`Dr Muhammad Zaki MPdI`, `Dr, Muhammad Zaki. M,Pd,I`, `DR. Muhammad Zaki M.pd.i`];
        exp = `Gelar kehormatan dan akademik diapit tanda titik di setiap singkatan (Dr., M.Pd.I.) dan dipisahkan tanda koma setelah nama lengkap.`;
        tip = 'Nama, Gelar: Dr. H. Ahmad, M.Pd.';
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

// 2. BAHASA INGGRIS MTS (150 UNIQUE QUESTIONS)
function generateBahasaInggrisMTs() {
  const engSubtopics = [
    { name: 'Interpersonal Dialogues & Greetings', comp: 'Identify appropriate social greetings, gratitude, and apologies' },
    { name: 'Asking & Giving Attention and Opinions', comp: 'Demonstrate expressions of asking for attention and giving opinions' },
    { name: 'Notices, Warnings, and Madrasah Signs', comp: 'Interpret communicative intent of notices and warning signs' },
    { name: 'Greeting Cards & Congratulatory Messages', comp: 'Analyze social function and structural elements of greeting cards' },
    { name: 'Descriptive Text: People & Madrasah Landmarks', comp: 'Analyze specific description and sensory details in descriptive texts' },
    { name: 'Recount Text: Madrasah Events & Study Tour', comp: 'Analyze orientation, chronological sequence, and reorientation' },
    { name: 'Narrative Text: Folktales & Moral Fables', comp: 'Identify complication, conflict resolution, and character moral traits' },
    { name: 'Procedure Text: Recipes & Lab Experiments', comp: 'Analyze goals, tools/materials, and step-by-step imperative instructions' },
    { name: 'Report Text: Natural Wonders & Endangered Species', comp: 'Identify factual classification and scientific description of species' },
    { name: 'Grammar: Simple Present Tense & Habits', comp: 'Apply subject-verb agreement and adverbs of frequency' },
    { name: 'Grammar: Present Continuous & Past Actions', comp: 'Distinguish ongoing activities from completed past actions' },
    { name: 'Grammar: Simple Past Tense (V2 Regular/Irregular)', comp: 'Apply past forms of irregular and regular verbs correctly' },
    { name: 'Grammar: Degrees of Comparison', comp: 'Apply comparative (-er/more) and superlative (-est/most) forms' },
    { name: 'Grammar: Modal Auxiliaries (Must, Should, Can)', comp: 'Express obligation, polite suggestions, and physical ability' },
    { name: 'Grammar: Passive Voice in Present & Past', comp: 'Transform active sentences into appropriate passive constructions' }
  ];

  return buildUniqueSubjectBank({
    subjectId: 'bahasa_inggris',
    subjectName: 'Bahasa Inggris MTs',
    categoryId: 'umum',
    categoryName: 'Umum MTs',
    akgtkCategory: 'Umum',
    educationLevel: 'MTs',
    idPrefix: 'mts-eng-',
    totalTarget: 150,
    generator: (i, diff, num) => {
      const topic = engSubtopics[i % engSubtopics.length];
      const step = Math.floor(i / engSubtopics.length) + 1; // 1 to 10
      const tIdx = i % engSubtopics.length;

      let qText = '', cText = '', dList = [], exp = '', tip = '';

      if (tIdx === 0) {
        // Interpersonal
        qText = `[English Dialogue Context #${num}]:\nTeacher: "Good morning, class! Have you all completed the science report?"\nStudents: "[ ... ], Sir. We are ready to present it."\nThe most natural expression to complete the dialogue is...`;
        cText = `"Yes, good morning, Sir. We have finished it"`;
        dList = [
          `"Good night, Sir. We are going to sleep now"`,
          `"No, we don't like science experiments at all"`,
          `"You are welcome, Sir. Have a nice weekend"`
        ];
        exp = `Response to 'Good morning' is 'Good morning', followed by affirmative confirmation of completing the report.`;
        tip = 'Match greeting response with the time of day and affirmative confirmation.';
      } else if (tIdx === 1) {
        // Attention / Opinion
        qText = `[Classroom Expression #${num}]:\nHeadmaster: "Attention, please! Tomorrow our madrasah will host the National Science Fair."\nWhat is the headmaster doing in the dialogue?`;
        cText = `Asking for the students' attention before making an announcement`;
        dList = [
          `Expressing deep sympathy to the teachers`,
          `Refusing an invitation from another madrasah`,
          `Asking for the students' permission to leave the hall`
        ];
        exp = `'Attention, please!' is a standard phrase used to get everyone's attention.`;
        tip = '"Attention, please" = asking for attention.';
      } else if (tIdx === 2) {
        // Notices
        const places = ['Mosque Sanctuary', 'Computer Lab', 'Madrasah Library', 'Chemistry Laboratory'][step % 4];
        const signs = ['"PLEASE SWITCH OFF MOBILE PHONES DURING PRAYER TIME"', '"DO NOT BRING FOOD OR DRINKS NEAR COMPUTER UNITS"', '"SILENCE PLEASE: RESPECT READERS IN THE STUDY AREA"', '"SAFETY EYEWEAR REQUIRED IN THIS EXPERIMENT ZONE"'][step % 4];
        const intents = ['Turn off cellphones to maintain solemnity of prayers', 'Avoid placing beverages and food near electronic equipment', 'Maintain absolute silence in the study reading zone', 'Wear protective eye goggles before handling chemical substances'][step % 4];
        qText = `[Madrasah Notice Sign #${num}]:\nRead the sign found in the ${places}:\n${signs}\nWhat is the message instructing people to do?`;
        cText = intents;
        dList = ['Disregard all school safety protocols completely', 'Pay a fine before entering the facility', 'Leave all room doors unlocked 24 hours a day'];
        exp = `The notice informs visitors to ${intents.toLowerCase()}.`;
        tip = 'Analyze the imperative action stated on the sign.';
      } else if (tIdx === 3) {
        // Greeting Card
        qText = `[Congratulatory Card #${num}]:\n"To: Umar.\nCongratulations on memorizing 30 Juz of the Holy Qur'an! May Allah bless your journey and inspire others."\nWhat is the purpose of sending this card?`;
        cText = `To congratulate Umar on achieving complete Quranic memorization (Tahfidz)`;
        dList = [
          `To invite Umar to attend a birthday dinner`,
          `To ask Umar to buy new Qur'an copies for the class`,
          `To wish Umar a speedy recovery from sickness`
        ];
        exp = `The card conveys heartfelt congratulations on memorizing the Holy Qur'an.`;
        tip = 'Congratulations on... indicates congratulatory purpose.';
      } else if (tIdx === 4) {
        // Descriptive
        qText = `[Descriptive Passage #${num}]:\n"Our madrasah eco-garden features vibrant orchid beds, clean koi ponds, and towering mahogany trees providing cool shade during break time."\nThe text primarily highlights...`;
        cText = `The scenic physical environment and green features of the madrasah garden`;
        dList = [
          `The historical foundation of the local botanical institute`,
          `The list of rules for buying fish food at the market`,
          `The negative effects of air pollution in industrial cities`
        ];
        exp = `Descriptive texts depict specific sensory attributes and scenery of a place.`;
        tip = 'Look for descriptive adjectives (vibrant, clean, towering, cool).';
      } else if (tIdx === 5) {
        // Recount
        qText = `[Recount Story #${num}]:\n"Last Friday, the Scout troop of MTs Negeri built tents at the pine forest campground. We lit a campfire, recited dhikr together, and participated in orienteering games."\nWhat tense is predominantly used in this excerpt?`;
        cText = `Simple Past Tense (built, lit, recited, participated)`;
        dList = [`Present Continuous Tense`, `Future Perfect Tense`, `Simple Present Tense`];
        exp = `Recount texts consistently use Simple Past Tense verbs to narrate sequential past experiences.`;
        tip = 'Recount text uses Verb 2 (Past Tense).';
      } else if (tIdx === 6) {
        // Narrative
        qText = `[Moral Folktale #${num}]:\nIn the story of "Malin Kundang", Malin denied and humiliated his poor mother after becoming a wealthy merchant. Consequently, he was cursed and turned into stone. What moral message does the story convey?`;
        cText = `Always honor, love, and respect your mother; never be arrogant about your wealth`;
        dList = [
          `Sailing to foreign lands is strictly forbidden for young men`,
          `Merchants should only marry princesses from royal families`,
          `One should never visit coastal beaches during heavy storms`
        ];
        exp = `The story of Malin Kundang teaches piety to parents (birrul walidain) and warns against arrogance.`;
        tip = 'Respecting and loving parents is the core moral lesson of Malin Kundang.';
      } else if (tIdx === 7) {
        // Procedure
        qText = `[Procedure Step #${num}]:\n"Next, pour the warm honey tea into clean cups and serve immediately with fresh mint leaves."\nThe word 'pour' belongs to which grammatical category?`;
        cText = `Imperative Action Verb`;
        dList = [`Adverb of Frequency`, `Possessive Pronoun`, `Comparative Adjective`];
        exp = `'Pour' is an imperative base verb commanding the reader to perform an action.`;
        tip = 'Procedure texts employ imperative verbs (pour, stir, cut, boil).';
      } else if (tIdx === 8) {
        // Report
        qText = `[Scientific Report #${num}]:\n"Rafflesia arnoldii is a famous parasitic plant native to the rainforests of Sumatra and Borneo. It produces the largest individual flower on Earth and emits a strong odor of decaying flesh."\nWhat makes Rafflesia arnoldii distinctive according to the text?`;
        cText = `Its immense flower diameter and distinctive decaying flesh scent`;
        dList = [
          `Its delicious edible fruit harvested by farmers`,
          `Its tall wooden trunk reaching over fifty meters`,
          `Its ability to survive underwater in deep rivers`
        ];
        exp = `The report emphasizes its record size and odor of decaying flesh to attract pollinating flies.`;
        tip = 'Locate factual details directly mentioned in the informative text.';
      } else if (tIdx === 9) {
        // Simple Present
        qText = `[Grammar Agreement #${num}]:\nComplete the sentence:\n"The diligent santri always [ ... ] the dawn prayer (Subuh) in congregation at the madrasah mosque."`;
        cText = `performs`;
        dList = [`performed`, `is performing`, `perform`];
        exp = `Subject 'santri' (singular) + frequency adverb 'always' requires Verb-s/es in Simple Present: 'performs'.`;
        tip = 'Singular third person subject takes Verb-s in Simple Present.';
      } else if (tIdx === 10) {
        // Present Continuous
        qText = `[Grammar Continuous #${num}]:\nLook! The students [ ... ] the scientific equipment in the chemistry lab right now.`;
        cText = `are sterilizing`;
        dList = [`sterilized`, `sterilizes`, `were sterilizing`];
        exp = `'Look!' and 'right now' indicate present ongoing action: Subject plural ('students') + are + V-ing.`;
        tip = 'Signal words: Look!, Listen!, Right now indicate Present Continuous (is/am/are + V-ing).';
      } else if (tIdx === 11) {
        // Simple Past
        qText = `[Grammar Past Form #${num}]:\nLast Saturday, the headmaster [ ... ] an inspiring speech during the flag ceremony.`;
        cText = `gave`;
        dList = [`gives`, `is giving`, `will give`];
        exp = `'Last Saturday' indicates Simple Past. The past form (V2) of 'give' is 'gave'.`;
        tip = 'Time signal "Last Saturday" requires Verb 2.';
      } else if (tIdx === 12) {
        // Comparison
        qText = `[Degrees of Comparison #${num}]:\nA train is [ ... ] a bicycle when traveling between two distant cities.`;
        cText = `much faster than`;
        dList = [`the fastest`, `as slow as`, `more slow than`];
        exp = `Comparing two modes of transport with 1-syllable adjective 'fast' uses comparative 'faster than'.`;
        tip = 'Comparative for 1-syllable: adj-er than.';
      } else if (tIdx === 13) {
        // Modals
        qText = `[Modal Auxiliary #${num}]:\n"You have been coughing badly for three days. You [ ... ] see the madrasah clinic doctor today."`;
        cText = `should`;
        dList = [`might not`, `could not`, `shall not`];
        exp = `'Should' is used to express strong, helpful medical advice or recommendation.`;
        tip = 'Should expresses advice or recommendation.';
      } else {
        // Passive Voice
        qText = `[Passive Voice #${num}]:\nTransform into passive voice: "The librarian neatly arranged the new textbooks this morning."`;
        cText = `"The new textbooks were neatly arranged by the librarian this morning."`;
        dList = [
          `"The new textbooks was neatly arranged by the librarian."`,
          `"The librarian was being arranged by the textbooks."`,
          `"The new textbooks are neatly arrange by the librarian."`
        ];
        exp = `Plural object 'The new textbooks' + were + V3 ('arranged') + by the librarian.`;
        tip = 'Plural past passive: were + V3.';
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

// 3. IPS TERPADU MTS (150 UNIQUE QUESTIONS)
function generateIpsMTs() {
  const ipsSubtopics = [
    { name: 'Letak Geografis & Astronomis Indonesia', comp: 'Menganalisis keuntungan posisi silang strategis dan iklim muson Indonesia' },
    { name: 'Karakteristik Negara-Negara ASEAN', comp: 'Membandingkan profil bentang alam dan potensi ekonomi anggota ASEAN' },
    { name: 'Dinamika Kependudukan & Piramida Penduduk', comp: 'Menganalisis angka beban ketergantungan dan bonus demografi' },
    { name: 'Interaksi Antarruang & Mobilitas Sosial', comp: 'Menganalisis saluran mobilitas vertikal/horizontal dan urbanisasi' },
    { name: 'Perubahan Sosial Budaya & Globalisasi', comp: 'Menganalisis faktor pendorong akulturasi, asimilasi, dan modernisasi' },
    { name: 'Prinsip Ekonomi, Permintaan, dan Penawaran', comp: 'Menganalisis hukum permintaan, kurva harga, dan elastisitas pasar' },
    { name: 'Kegiatan Ekonomi: Produksi, Distribusi, Konsumsi', comp: 'Menganalisis saluran distribusi dan efisiensi faktor produksi' },
    { name: 'Pelaku Ekonomi & Arus Lingkar Kegiatan (Circular Flow)', comp: 'Menganalisis peran RTK, RTP, Pemerintah, dan Masyarakat Luar Negeri' },
    { name: 'Perdagangan Antardaerah dan Internasional', comp: 'Menganalisis keunggulan komparatif, devisa, kuota, dan proteksionisme' },
    { name: 'Ekonomi Maritim & Sektor Agrikultur Indonesia', comp: 'Menganalisis potensi maritim bahari dan redistribusi pendapatan' },
    { name: 'Masa Praaksara di Kepulauan Nusantara', comp: 'Mengidentifikasi ciri kebudayaan Paleolitikum, Neolitikum, dan Perundagian' },
    { name: 'Kerajaan Hindu-Buddha di Indonesia', comp: 'Menganalisis peninggalan prasasti dan jalur maritim Sriwijaya/Majapahit' },
    { name: 'Penyebaran Islam & Teori Masuknya Islam', comp: 'Menganalisis teori Gujarat, Makkah, Persia, dan strategi dakwah Wali Songo' },
    { name: 'Masa Kolonialisme Barat di Indonesia', comp: 'Menganalisis dampak monopoli VOC, kerja rodi, dan tanam paksa (Cultuurstelsel)' },
    { name: 'Pergerakan Nasional Menuju Kemerdekaan', comp: 'Menganalisis peran Budi Utomo, Sumpah Pemuda 1928, dan proklamasi 1945' }
  ];

  return buildUniqueSubjectBank({
    subjectId: 'ips',
    subjectName: 'IPS Terpadu MTs',
    categoryId: 'umum',
    categoryName: 'Umum MTs',
    akgtkCategory: 'Umum',
    educationLevel: 'MTs',
    idPrefix: 'mts-ips-',
    totalTarget: 150,
    generator: (i, diff, num) => {
      const topic = ipsSubtopics[i % ipsSubtopics.length];
      const step = Math.floor(i / ipsSubtopics.length) + 1; // 1 to 10
      const tIdx = i % ipsSubtopics.length;

      let qText = '', cText = '', dList = [], exp = '', tip = '';

      if (tIdx === 0) {
        // Letak Indonesia
        qText = `[Geografi Indonesia Kasus #${num}]: Letak geografis Indonesia di antara Benua Asia dan Benua Australia serta Samudra Hindia dan Samudra Pasifik berdampak pada...`;
        cText = `Posisi silang jalur perdagangan dunia dan bertiupnya angin muson barat serta timur`;
        dList = [
          `Terjadinya pergantian empat musim semi, gugur, dingin, dan panas`,
          `Hilangnya potensi kekayaan bahari perikanan laut nusantara`,
          `Indonesia sepenuhnya terisolasi dari peradaban negara-negara lain`
        ];
        exp = `Posisi silang memberikan keuntungan jalur perdagangan maritim dunia dan sirkulasi angin muson pembawa musim hujan dan kemarau.`;
        tip = 'Posisi silang = keuntungan perdagangan maritim internasional dan angin muson.';
      } else if (tIdx === 1) {
        // ASEAN
        qText = `[Kerjasama Kawasan ASEAN #${num}]: Salah satu faktor utama pendorong lahirnya deklarasi pembentukan ASEAN di Bangkok pada 8 Agustus 1967 adalah...`;
        cText = `Persamaan kepentingan regional untuk menjaga stabilitas perdamaian dan percepatan pertumbuhan ekonomi`;
        dList = [
          `Keinginan membentuk satu mata uang tunggal dan melebur batas negara`,
          `Rencana penaklukan militer bersama terhadap negara di benua lain`,
          `Penyeragaman bahasa nasional seluruh warga Asia Tenggara`
        ];
        exp = `Deklarasi Bangkok 1967 didasari komitmen bersama menjaga stabilitas kawasan, perdamaian, dan kemajuan ekonomi sosial budaya.`;
        tip = 'Tujuan ASEAN: stabilitas perdamaian, kerjasama ekonomi, sosial, dan budaya.';
      } else if (tIdx === 2) {
        // Demografi
        qText = `[Dinamika Kependudukan #${num}]: Piramida penduduk berbentuk kerucut/ekspansif yang menunjukkan sebagian besar penduduk berusia muda (0-14 tahun) mengindikasikan bahwa...`;
        cText = `Angka kelahiran di negara tersebut masih sangat tinggi dibandingkan angka kematian`;
        dList = [
          `Jumlah penduduk lansia jauh melebihi jumlah anak-anak balita`,
          `Tingkat harapan hidup rata-rata penduduk mencapai lebih dari 90 tahun`,
          `Pertumbuhan penduduk telah mengalami penurunan mendekati nol`
        ];
        exp = `Piramida ekspansif (dasar lebar) menunjukkan tingginya angka kelahiran dan potensi ledakan penduduk usia muda.`;
        tip = 'Piramida ekspansif alas lebar = angka kelahiran tinggi.';
      } else if (tIdx === 3) {
        // Mobilitas Sosial
        qText = `[Kajian Sosiologi MTs #${num}]: Perpindahan status sosial seseorang atau kelompok dari kedudukan sosial yang satu ke kedudukan sosial lain yang sederajat tanpa mengubah derajat martabatnya disebut...`;
        cText = `Mobilitas sosial horizontal`;
        dList = [`Mobilitas sosial vertikal naik`, `Mobilitas sosial vertikal turun`, `Mobilitas antargenerasi turun`];
        exp = `Mobilitas horizontal tidak mengubah status/derajat sosial seseorang (misal guru MTs pindah tugas ke madrasah lain tetap sebagai guru).`;
        tip = 'Horizontal = pindah posisi yang setara/sederajat.';
      } else if (tIdx === 4) {
        // Akulturasi
        qText = `[Dinamika Kebudayaan #${num}]: Pembangunan Masjid Menara Kudus yang memiliki menara menyerupai candi Hindu Jawa merupakan wujud nyata proses...`;
        cText = `Akulturasi budaya Islam dan tradisi arsitektur lokal Hindu tanpa menghilangkan fungsi masjid`;
        dList = [
          `Penyimpangan syariat peribadahan masyarakat pesisir pantai`,
          `Penghancuran total terhadap seluruh nilai arsitektur masa lalu`,
          `Asimilasi mutlak yang melenyapkan seluruh ajaran tauhid`
        ];
        exp = `Menara Kudus adalah contoh agung akulturasi harmonis antara kebudayaan Islam dan seni arsitektur Hindu Majapahit.`;
        tip = 'Menara Kudus = akulturasi Islam dan arsitektur Hindu lokal.';
      } else if (tIdx === 5) {
        // Pasar & Harga
        qText = `[Ekonomi Pasar MTs #${num}]: Titik perpotongan antara kurva permintaan dan kurva penawaran di pasar tradisional madrasah menghasilkan...`;
        cText = `Harga keseimbangan pasar (Equilibrium Price) dan jumlah barang seimbang`;
        dList = [`Kerugian mutlak bagi produsen dan pembeli`, `Kelebihan pasokan yang tidak terjual sama sekali`, `Kekurangan barang dagangan secara permanen`];
        exp = `Titik ekuilibrium (Qd = Qs) menentukan harga pasar yang disepakati bersama oleh pembeli dan penjual.`;
        tip = 'Titik potong kurva permintaan dan penawaran = harga keseimbangan (ekuilibrium).';
      } else if (tIdx === 6) {
        // Produksi
        qText = `[Kegiatan Produksi #${num}]: Di antara faktor produksi berikut, yang termasuk ke dalam "Faktor Produksi Asli" adalah...`;
        cText = `Faktor produksi alam (sumber daya alam) dan tenaga kerja manusia`;
        dList = [
          `Faktor produksi modal uang dan mesin pabrik`,
          `Faktor kewirausahaan dan keahlian manajerial`,
          `Faktor teknologi informasi dan sertifikat hak paten`
        ];
        exp = `Faktor produksi asli terdiri dari alam dan tenaga kerja, sedangkan modal dan kewirausahaan merupakan faktor produksi turunan.`;
        tip = 'Faktor produksi asli: Alam dan Tenaga Kerja. Turunan: Modal dan Kewirausahaan.';
      } else if (tIdx === 7) {
        // Peran Pemerintah
        qText = `[Pelaku Ekonomi #${num}]: Peran utama Pemerintah (Rumah Tangga Pemerintah) dalam perekonomian nasional antara lain adalah sebagai...`;
        cText = `Pengatur (regulator), konsumen fasilitas publik, dan produsen barang strategis`;
        dList = [
          `Pesaing dagang yang mematikan usaha kecil mikro masyarakat`,
          `Pemberi pinjaman berbunga tinggi kepada pedagang kecil pasar`,
          `Pihak yang membebaskan monopoli swasta tanpa aturan`
        ];
        exp = `Pemerintah bertindak sebagai regulator hukum ekonomi, konsumen belanja negara, dan produsen kebutuhan pokok rakyat lewat BUMN.`;
        tip = 'Pemerintah = regulator, konsumen, dan produsen barang publik.';
      } else if (tIdx === 8) {
        // Perdagangan Antardaerah
        qText = `[Perdagangan Antarpulau #${num}]: Alasan fundamental terjadinya perdagangan barang antardaerah di Indonesia (misalnya pertukaran beras Jawa dengan rempah Maluku) adalah...`;
        cText = `Perbedaan potensi sumber daya alam dan keunggulan komparatif masing-masing wilayah`;
        dList = [
          `Adanya larangan mengonsumsi hasil bumi lokal di daerah sendiri`,
          `Ketiadaan alat tukar mata uang rupiah di daerah terluar`,
          `Kewajiban seluruh pulau untuk mengimpor makanan dari luar negeri`
        ];
        exp = `Perbedaan anugerah alam dan iklim antarpulau mendorong pertukaran komparatif yang saling melengkapi.`;
        tip = 'Perdagangan antardaerah dipicu perbedaan sumber daya alam dan keunggulan komparatif.';
      } else if (tIdx === 9) {
        // Redistribusi
        qText = `[Pajak & Subsidi #${num}]: Program jaminan kesehatan gratis (BPJS PBI) dan bantuan beasiswa pendidikan madrasah bagi keluarga pra-sejahtera merupakan bentuk...`;
        cText = `Redistribusi pendapatan vertikal dari kelompok mampu kepada kelompok kurang mampu`;
        dList = [`Redistribusi pendapatan horizontal semata`, `Pungutan komersial terselubung pemerintah`, `Kebijakan devaluasi mata uang rupiah`];
        exp = `Redistribusi vertikal menyalurkan penerimaan pajak dari kalangan berpenghasilan tinggi kepada warga kurang mampu lewat jaminan sosial.`;
        tip = 'Redistribusi vertikal: dari yang kaya ke yang miskin lewat pajak dan subsidi.';
      } else if (tIdx === 10) {
        // Praaksara
        qText = `[Zaman Praaksara #${num}]: Tradisi pembuatan bangunan batu-batu besar seperti menhir (tugu batu tempat pemujaan arwah leluhur) dan sarkofagus (peti mati batu) berkembang pada zaman...`;
        cText = `Megalitikum (Zaman Batu Besar)`;
        dList = [`Paleolitikum (Zaman Batu Tua)`, `Mesolitikum (Zaman Batu Madya)`, `Perundagian Logam Awal`];
        exp = `Megalitikum dicirikan oleh peninggalan monumen batu berukuran raksasa seperti menhir, dolmen, punden berundak, dan sarkofagus.`;
        tip = 'Megalitikum = menhir, dolmen, sarkofagus, punden berundak.';
      } else if (tIdx === 11) {
        // Kerajaan Majapahit
        qText = `[Kerajaan Nusantara #${num}]: Ikrar legendaris Mahapatih Gajah Mada untuk menyatukan kepulauan Nusantara di bawah naungan panji Kerajaan Majapahit dikenal sebagai...`;
        cText = `Sumpah Palapa`;
        dList = [`Prasasti Ciaruteun`, `Perjanjian Salatiga`, `Piagam Linggarjati`];
        exp = `Gajah Mada bersumpah tidak akan menikmati buah palapa sebelum berhasil mempersatukan Nusantara di bawah Majapahit.`;
        tip = 'Gajah Mada = Sumpah Palapa (penyatuan Nusantara).';
      } else if (tIdx === 12) {
        // Demak
        qText = `[Kesultanan Islam #${num}]: Kesultanan Islam pertama di Pulau Jawa yang didirikan oleh Raden Patah dengan dukungan dewan Wali Songo pada akhir abad ke-15 adalah...`;
        cText = `Kesultanan Demak Bintoro`;
        dList = [`Kesultanan Mataram Islam`, `Kesultanan Banten`, `Kesultanan Cirebon`];
        exp = `Demak adalah pelopor kesultanan Islam di tanah Jawa setelah runtuhnya hegemoni Majapahit.`;
        tip = 'Kesultanan Islam pertama di Jawa: Demak Bintoro (Raden Patah).';
      } else if (tIdx === 13) {
        // VOC
        qText = `[Kolonialisme VOC #${num}]: Hak-hak istimewa yang diberikan oleh pemerintah kerajaan Belanda kepada kongsi dagang VOC (seperti hak mencetak uang, memelihara angkatan perang, dan membuat perjanjian damai) disebut...`;
        cText = `Hak Oktroi (Octrooi)`;
        dList = [`Hak Veto Monarki`, `Hak Ekstirpasi`, `Hak Pelayaran Hongi`];
        exp = `Hak Oktroi memberikan wewenang VOC bertindak layaknya sebuah negara berdaulat di tanah jajahan.`;
        tip = 'Hak Oktroi = hak istimewa istana Belanda untuk VOC.';
      } else {
        // Tokoh Nasional
        qText = `[Kemerdekaan Indonesia #${num}]: Tiga tokoh bangsa yang merumuskan naskah Proklamasi Kemerdekaan Indonesia di rumah Laksamana Maeda pada dini hari 17 Agustus 1945 adalah...`;
        cText = `Ir. Soekarno, Drs. Mohammad Hatta, dan Mr. Achmad Soebardjo`;
        dList = [
          `Ir. Soekarno, Sutan Sjahrir, dan Tan Malaka`,
          `Drs. Mohammad Hatta, Ki Hajar Dewantara, dan Sayuti Melik`,
          `Mr. Moh. Yamin, Mr. Soepomo, dan Sukarni Kartodiwirjo`
        ];
        exp = `Teks proklamasi disusun oleh Soekarno, Hatta, dan Achmad Soebardjo di ruang makan rumah Laksamana Maeda, lalu diketik oleh Sayuti Melik.`;
        tip = 'Penyusun teks proklamasi: Soekarno, Hatta, Achmad Soebardjo; pengetik: Sayuti Melik.';
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
  generateBahasaIndonesiaMTs,
  generateBahasaInggrisMTs,
  generateIpsMTs
};
