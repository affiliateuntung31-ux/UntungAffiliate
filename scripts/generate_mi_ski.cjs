// Generator for Sejarah Kebudayaan Islam (SKI) MI (150 Soal Unik)
const { buildUniqueSubjectBank } = require('./generate_all_subjects_master.cjs');

const topics = [
  {
    subtopic: 'Kondisi Sosial, Budaya, dan Agama Masyarakat Arab Jahiliyah',
    comp: 'Menganalisis kondisi kepercayaan, moral sosial, dan perekonomian Arab pra-Islam',
    scenarios: [
      { q: 'Zaman sebelum datangnya agama Islam di Jazirah Arab dinamakan zaman Jahiliyah, yang bermakna zaman...', c: 'Kebodohan moral dan kegelapan akidah spiritual (bukan bodoh dalam berniaga)', d: ['Kemiskinan harta benda', 'Ketiadaan bahasa sastra', 'Ketiadaan peradaban kota'] },
      { q: 'Pusat peribadatan berhala utama bangsa Arab Jahiliyah dipusatkan di sekitar Ka\'bah. Tiga berhala terbesar yang dipuja adalah...', c: 'Latta, Uzza, dan Manat', d: ['Wadd, Suwa\', dan Yaghuts', 'Hubal, Namrud, dan Fir\'aun', 'Ba\'al, Ra, dan Osiris'] },
      { q: 'Tokoh yang pertama kali membawa tradisi menyembah berhala dan meletakkan berhala Hubal di Ka\'bah adalah...', c: 'Amr bin Luhay Al-Khuza\'i', d: ['Abu Lahab bin Abdul Muthalib', 'Abu Jahal bin Hisyam', 'Umayyah bin Khalaf'] },
      { q: 'Kebiasaan adat tercela masyarakat Jahiliyah yang mengubur anak perempuan mereka hidup-hidup didorong oleh rasa...', c: 'Takut miskin dan anggapan bahwa anak perempuan membawa aib bagi keluarga', d: ['Perintah dari para raja Romawi', 'Kurangnya pasokan makanan di padang pasir', 'Hukuman dari kepala suku'] },
      { q: 'Meskipun memiliki moralitas yang rusak, bangsa Arab Jahiliyah memiliki beberapa sifat positif yang terpuji, antara lain...', c: 'Sangat dermawan menghormati tamu, setia pada janji suku, dan mahir bersyair', d: ['Rajin membaca buku tafsir', 'Suka menolong fakir miskin tanpa pamrih', 'Mengharamkan perjudian'] },
      { q: 'Pasar tahunan terkenal di dekat kota Makkah yang menjadi pusat festival perlombaan syair dan perdagangan adalah...', c: 'Pasar Ukaz, Majannah, dan Dzul Majaz', d: ['Pasar Madinah Munawwarah', 'Pasar Syam dan Yaman', 'Pasar Khaybar'] },
      { q: 'Mata pencaharian pokok masyarakat Arab yang tinggal di wilayah pedalaman padang pasir (kaum Badui) adalah...', c: 'Beternak unta, kambing, dan domba secara nomaden (berpindah-pindah)', d: ['Bercocok tanam padi di sawah', 'Menjadi nelayan penangkap mutiara', 'Membangun pabrik industri'] },
      { q: 'Sedangkan mata pencaharian pokok penduduk perkotaan Makkah (kaum Hadhari) adalah...', c: 'Berniaga (perdagangan kafilah) antarnegara', d: ['Bertani gandum dan kurma', 'Menambang batu bara', 'Menjadi prajurit bayaran Romawi'] },
      { q: 'Rute kafilah dagang suku Quraisy sebagaimana diabadikan dalam Surah Quraisy dilakukan dua kali setahun, yaitu...', c: 'Musim dingin ke negeri Yaman dan musim panas ke negeri Syam', d: ['Musim hujan ke Mesir dan musim kemarau ke Persia', 'Musim semi ke Madinah dan musim gugur ke Thaif', 'Musim dingin ke India dan musim panas ke Cina'] },
      { q: 'Sisa-sisa ajaran tauhid murni Nabi Ibrahim a.s. yang masih dipegang teguh oleh segelintir orang Arab pra-Islam disebut ajaran...', c: 'Hunafa (Agama Hanif)', d: ['Majusi (penyembah api)', 'Nasrani Nestorian', 'Paganisme'] }
    ]
  },
  {
    subtopic: 'Kelahiran dan Masa Kanak-Kanak Nabi Muhammad SAW',
    comp: 'Meneladani peristiwa kelahiran dan masa pengasuhan Nabi Muhammad SAW',
    scenarios: [
      { q: 'Nabi Muhammad SAW dilahirkan di kota Makkah pada hari Senin, 12 Rabiul Awwal yang bertepatan dengan tahun...', c: '571 Masehi (Tahun Gajah)', d: ['610 Masehi', '622 Masehi', '632 Masehi'] },
      { q: 'Ayahanda Nabi Muhammad SAW bernama Abdullah, beliau wafat ketika Nabi...', c: 'Masih berada dalam kandungan ibunda Aminah sekitar usia 2 bulan', d: ['Berusia 6 tahun', 'Berusia 12 tahun', 'Saat Nabi lahir di dunia'] },
      { q: 'Nama "Muhammad" yang bermakna "orang yang terpuji" diberikan langsung oleh kakek beliau yang bernama...', c: 'Abdul Muthalib', d: ['Abu Thalib', 'Wahab bin Abdul Manaf', 'Hamzah bin Abdul Muthalib'] },
      { q: 'Wanita mulia dari perkampungan Bani Sa\'ad yang mengasuh dan menyusui Nabi Muhammad SAW hingga usia 4 tahun adalah...', c: 'Halimah As-Sa\'diyyah', d: ['Tsuwaibah Al-Aslamiyyah', 'Ummu Aiman', 'Fatimah binti Asad'] },
      { q: 'Tujuan anak-anak bangsawan kota Makkah disusukan dan dibesarkan di perkampungan padang pasir adalah agar...', c: 'Tumbuh dengan fisik yang sehat bugar dan menguasai bahasa Arab fushah yang murni', d: ['Terhindar dari kewajiban beribadah di Ka\'bah', 'Membantu menggembalakan ribuan unta', 'Tidak mengenal sanak saudara di kota'] },
      { q: 'Peristiwa pembelahan dada (Syaqqus Shadr) Nabi Muhammad kecil oleh Malaikat Jibril terjadi di perkampungan Bani Sa\'ad dengan tujuan...', c: 'Menyucikan hati beliau dari bagian setan dan mengisinya dengan hikmah serta keimanan', d: ['Menyembuhkan penyakit demam fisik', 'Memberinya kekuatan memikul batu Ka\'bah', 'Menguji ketabahan Halimah'] },
      { q: 'Ibunda Nabi, Siti Aminah, wafat di sebuah desa bernama Abwa ketika Nabi Muhammad SAW berusia...', c: '6 tahun', d: ['8 tahun', '4 tahun', '2 tahun'] },
      { q: 'Setelah ibunda beliau wafat, Nabi Muhammad SAW diasuh penuh kasih sayang oleh kakeknya, Abdul Muthalib, hingga kakeknya wafat saat Nabi berusia...', c: '8 tahun', d: ['10 tahun', '12 tahun', '15 tahun'] },
      { q: 'Setelah kakeknya wafat, pengasuhan Nabi Muhammad SAW dilanjutkan oleh pamannya yang sangat menyayangi beliau, yaitu...', c: 'Abu Thalib', d: ['Abu Lahab', 'Abbas bin Abdul Muthalib', 'Hamzah bin Abdul Muthalib'] },
      { q: 'Pada masa kecilnya, Nabi Muhammad SAW menunjukkan kemandirian dan etos kerja mulia dengan bekerja sebagai...', c: 'Penggembala kambing milik penduduk Makkah', d: ['Pembuat pedang perang', 'Penjaga pintu gerbang kota', 'Penulis surat resmi suku'] }
    ]
  },
  {
    subtopic: 'Masa Remaja, Berniaga ke Syam, dan Pernikahan dengan Khadijah',
    comp: 'Menganalisis kejujuran Nabi dalam berniaga dan pernikahan agung dengan Sayyidah Khadijah',
    scenarios: [
      { q: 'Ketika berusia 12 tahun, Nabi Muhammad SAW diajak oleh pamannya Abu Thalib melakukan perjalanan dagang pertama kali ke negeri...', c: 'Syam (Suriah)', d: ['Yaman', 'Mesir', 'Habasyah'] },
      { q: 'Di kota Bushra (perbatasan Syam), seorang pendeta Nasrani melihat tanda-tanda kenabian pada diri Muhammad remaja. Pendeta tersebut bernama...', c: 'Buhaira (Bahira)', d: ['Waraqah bin Naufal', 'Najasyi', 'Salman Al-Farisi'] },
      { q: 'Tanda kenabian yang disaksikan oleh pendeta Buhaira pada diri Nabi Muhammad antara lain...', c: 'Awan yang senantiasa memayungi beliau dari terik matahari dan tanda kenabian (Khatamun Nubuwwah) di antara kedua pundaknya', d: ['Matahari yang berputar di atas kepalanya', 'Pohon kurma yang berjalan mengikutinya', 'Mata beliau yang bersinar emas'] },
      { q: 'Ketika berusia 15-20 tahun, Nabi Muhammad SAW ikut serta dalam Perang Fijar, di mana peran mulia beliau adalah...', c: 'Mengumpulkan anak-anak panah musuh untuk diberikan kembali kepada paman-pamannya', d: ['Memimpin barisan kavaleri berkuda', 'Membuat taktik perang gerilya', 'Membakar perkemahan musuh'] },
      { q: 'Perjanjian damai antarsuku di Makkah untuk membela orang-orang teraniaya dan melindungi para pedagang asing dinamakan...', c: 'Hilful Fudhul', d: ['Piagam Madinah', 'Perjanjian Hudaibiyah', 'Baiat Aqabah'] },
      { q: 'Karena kejujuran, amanah, dan ketulusan beliau dalam setiap urusan, penduduk Makkah menyematkan gelar kehormatan kepada Nabi berupa...', c: 'Al-Amin (Orang yang paling dapat dipercaya)', d: ['Al-Faruq (Pembeda kebenaran)', 'As-Siddiq (Orang yang membenarkan)', 'Khalilullah (Kekasih Allah)'] },
      { q: 'Seorang wanita bangsawan Quraisy yang kaya raya, cerdas, dan berakhlak mulia (Thahirah) yang mempercayakan barang dagangannya kepada Nabi adalah...', c: 'Sayyidah Khadijah binti Khuwailid', d: ['Aisyah binti Abu Bakar', 'Hafshah binti Umar', 'Fatimah binti Muhammad'] },
      { q: 'Pelayan setia Khadijah yang mendampingi perjalanan dagang Nabi Muhammad SAW ke negeri Syam dan menyaksikan kejujuran beliau bernama...', c: 'Maisyarah', d: ['Zaid bin Haritsah', 'Bilal bin Rabah', 'Abu Rafi\''] },
      { q: 'Nabi Muhammad SAW menikah dengan Sayyidah Khadijah binti Khuwailid ketika Nabi berusia ... tahun dan Khadijah berusia ... tahun.', c: '25 tahun - 40 tahun', d: ['20 tahun - 25 tahun', '30 tahun - 35 tahun', '25 tahun - 25 tahun'] },
      { q: 'Putra dan putri Nabi Muhammad SAW dari pernikahannya dengan Sayyidah Khadijah berjumlah 6 orang, yaitu Qasim, Abdullah, Zainab, Ruqayyah, Ummu Kultsum, dan...', c: 'Fatimah Az-Zahra', d: ['Ibrahim', 'Halimah', 'Aminah'] }
    ]
  },
  {
    subtopic: 'Renovasi Ka\'bah dan Kebijaksanaan Meletakkan Hajar Aswad',
    comp: 'Menganalisis kearifan Nabi Muhammad dalam memecahkan perselisihan peletakan Hajar Aswad',
    scenarios: [
      { q: 'Ketika Nabi Muhammad SAW berusia 35 tahun, kota Makkah dilanda banjir bandang yang merusak dinding...', c: 'Ka\'bah di Masjidil Haram', d: ['Masjid Nabawi', 'Istana Darun Nadwah', 'Benteng Khaibar'] },
      { q: 'Saat dinding Ka\'bah selesai dibangun kembali, terjadi perselisihan sengit antarpemimpin kabilah Quraisy mengenai urusan...', c: 'Siapa yang paling berhak meletakkan kembali batu Hajar Aswad ke tempatnya semula', d: ['Siapa yang menjadi juru kunci pintu Ka\'bah', 'Siapa yang berhak menamai sumur Zamzam', 'Berapa tinggi menara Ka\'bah yang akan dibuat'] },
      { q: 'Perselisihan peletakan Hajar Aswad hampir memicu pertumpahan darah antarsuku selama beberapa hari, hingga seorang tokoh tua mengusulkan agar...', c: 'Menyerahkan keputusan kepada orang yang pertama kali memasuki pintu gerbang Shafa keesokan harinya', d: ['Mengundi nama suku dengan anak panah berhala', 'Mengadakan perang tanding antar pendekar suku', 'Melemparkan batu Hajar Aswad ke padang pasir'] },
      { q: 'Keesokan harinya, orang yang pertama kali melangkah masuk melalui pintu gerbang Shafa adalah...', c: 'Nabi Muhammad SAW (Al-Amin)', d: ['Abu Sufyan bin Harb', 'Walid bin Mughirah', 'Umar bin Khattab'] },
      { q: 'Ketika melihat kedatangan Nabi Muhammad SAW, seluruh tokoh kabilah Quraisy bersorak gembira dan serempak mengatakan:...', c: '"Ini dia Al-Amin! Kami ridha menerima keputusannya!"', d: ['"Kita tunda saja urusan ini!"', '"Dia terlalu muda untuk memimpin!"', '"Batalkan kesepakatan kemarin!"'] },
      { q: 'Solusi bijaksana dan adil yang ditawarkan oleh Nabi Muhammad SAW untuk memuaskan seluruh kabilah adalah...', c: 'Membentangkan sorbannya, meletakkan Hajar Aswad di tengahnya, lalu meminta setiap kepala suku memegang ujung sorban bersama-sama', d: ['Meletakkan batu tersebut sendirian tanpa bantuan suku manapun', 'Membelah batu Hajar Aswad menjadi empat bagian kecil', 'Menjual batu Hajar Aswad kepada kafilah Yaman'] },
      { q: 'Setelah sorban diangkat bersama-sama oleh para kepala suku hingga mendekati tempatnya, Nabi Muhammad SAW...', c: 'Mengambil Hajar Aswad dengan kedua tangannya yang mulia lalu menempatkannya di sudut Ka\'bah', d: ['Meminta Abu Jahal memasangnya', 'Membiarkan batu itu terjatuh', 'Menyerahkan tugas kepada budak belian'] },
      { q: 'Keputusan arif bijaksana Nabi Muhammad SAW tersebut berhasil...', c: 'Menghindarkan perang saudara besar antarsuku Arab dan memuaskan kehormatan semua pihak', d: ['Menjadikan Nabi sebagai raja mutlak di Makkah', 'Menghilangkan seluruh berhala di sekitar Ka\'bah', 'Membuat kabilah Quraisy memeluk Islam seketika'] },
      { q: 'Hajar Aswad adalah batu mulia yang menurut riwayat hadits berasal dari...', c: 'Surga (berwarna putih mutiara lalu menghitam karena dosa-dosa manusia)', d: ['Gunung Uhud di Madinah', 'Dasar Laut Merah', 'Lembah Hunain'] },
      { q: 'Nilai karakter utama yang dapat diteladani santri madrasah dari peristiwa peletakan Hajar Aswad adalah...', c: 'Kepemimpinan yang adil, kolaboratif, solutif, dan mengutamakan persatuan', d: ['Egoisme kedaerahan', 'Menyelesaikan masalah dengan adu kekuatan fisik', 'Mengambil keuntungan pribadi dari perselisihan teman'] }
    ]
  },
  {
    subtopic: 'Peristiwa Kerasulan dan Wahyu Pertama di Gua Hira',
    comp: 'Menganalisis peristiwa turunnya wahyu pertama dan awal mula kenabian Muhammad SAW',
    scenarios: [
      { q: 'Menjelang usia 40 tahun, Nabi Muhammad SAW sering berkhalwat (menyendiri untuk beribadah dan bertafakur) di sebuah gua di Jabal Nur bernama...', c: 'Gua Hira', d: ['Gua Tsur', 'Gua Uhud', 'Gua Kahfi'] },
      { q: 'Tujuan utama Nabi Muhammad SAW bertahannuts di Gua Hira adalah untuk...', c: 'Menenangkan hati dari kerusakan moral syirik kaum Quraisy dan memohon petunjuk kepada Allah', d: ['Bersembunyi dari kejaran musuh', 'Menyimpan barang-barang dagangan', 'Menghafal syair-syair Arab kuno'] },
      { q: 'Peristiwa turunnya wahyu pertama kepada Nabi Muhammad SAW di Gua Hira bertepatan pada tanggal...', c: '17 Ramadan tahun 610 Masehi (Nuzulul Qur\'an)', d: ['1 Syawal tahun 622 M', '10 Dzulhijjah tahun 630 M', '12 Rabiul Awwal tahun 571 M'] },
      { q: 'Wahyu pertama yang disampaikan oleh Malaikat Jibril kepada Nabi Muhammad SAW adalah Surah...', c: 'Al-Alaq ayat 1 sampai 5', d: ['Al-Fatihah ayat 1 sampai 7', 'Al-Muddatsir ayat 1 sampai 7', 'Al-Ikhlas ayat 1 sampai 4'] },
      { q: 'Malaikat Jibril mendekap tubuh Nabi Muhammad SAW dan memerintahkan: "Iqra\'!". Jawaban Nabi Muhammad adalah:...', c: '"Ma ana bi qari\'" (Aku tidak bisa membaca)', d: ['"Aku tidak mau membaca"', '"Bacakanlah untukku"', '"Tuliskanlah di atas batu"'] },
      { q: 'Setelah menerima wahyu pertama, Nabi Muhammad SAW pulang ke rumah dalam keadaan menggigil gemetar dan berkata kepada Khadijah:...', c: '"Zammiluuni, zammiluuni!" (Selimutilah aku, selimutilah aku!)', d: ['"Beri aku minum air dingin!"', '"Panggilkan prajurit penjaga!"', '"Biarkan aku tidur sendiri!"'] },
      { q: 'Sayyidah Khadijah menenangkan hati Nabi Muhammad SAW dengan penuh keyakinan dan kelembutan seraya berkata bahwa Allah tidak akan menghinakan beliau karena...', c: 'Nabi selalu menyambung silaturahmi, jujur, menanggung beban orang lemah, dan memuliakan tamu', d: ['Nabi adalah pedagang yang paling kaya di Makkah', 'Nabi memiliki banyak pengawal bersenjata', 'Khadijah memiliki banyak harta simpanan'] },
      { q: 'Khadijah kemudian mengajak Nabi Muhammad SAW menemui sepupunya yang memahami kitab suci terdahulu bernama...', c: 'Waraqah bin Naufal', d: ['Buhaira', 'Salman Al-Farisi', 'Abdullah bin Ubay'] },
      { q: 'Waraqah bin Naufal membenarkan pengalaman Nabi Muhammad SAW dan menyatakan bahwa yang datang kepada beliau adalah "An-Namus Al-Akbar", yaitu...', c: 'Malaikat Jibril yang dahulu pernah diutus kepada Nabi Musa \'alaihissalam', d: ['Jin penjaga padang pasir', 'Roh nenek moyang bangsa Arab', 'Cahaya bintang kejora'] },
      { q: 'Wahyu kedua yang memerintahkan Nabi Muhammad SAW untuk bangun memberi peringatan dan berdakwah adalah Surah...', c: 'Al-Muddatsir ayat 1 sampai 7', d: ['Al-Muzzammil ayat 1 sampai 5', 'Al-Kafirun ayat 1 sampai 6', 'Al-Hijr ayat 94'] }
    ]
  },
  {
    subtopic: 'Dakwah Sembunyi-Sembunyi dan As-Sabiqunal Awwalun',
    comp: 'Menganalisis strategi dakwah rahasia (sirriyah) dan keimanan generasi pertama Islam',
    scenarios: [
      { q: 'Tahapan dakwah pertama yang dijalankan oleh Nabi Muhammad SAW dilakukan secara sembunyi-sembunyi (Dakwah Sirriyah) selama kurang lebih...', c: '3 tahun', d: ['5 tahun', '10 tahun', '1 tahun'] },
      { q: 'Pusat pertemuan rahasia, tempat pembinaan iman, dan pengajaran wahyu Al-Qur\'an pada masa dakwah sirriyah bertempat di rumah...', c: 'Arqam bin Abil Arqam (Darul Arqam)', d: ['Abu Bakar Ash-Shiddiq', 'Ali bin Abi Thalib', 'Utsman bin Affan'] },
      { q: 'Generasi orang-orang pertama yang memeluk agama Islam di awal masa kenabian dikenal dengan sebutan...', c: 'As-Sabiqunal Awwalun', d: ['Kaum Muhajirin', 'Kaum Anshar', 'Ahlus Suffah'] },
      { q: 'Wanita pertama di muka bumi yang mengimani kenabian Nabi Muhammad SAW dan memeluk Islam adalah...', c: 'Sayyidah Khadijah binti Khuwailid radhiyallahu \'anha', d: ['Fatimah binti Muhammad', 'Ummu Aiman', 'Asma binti Abu Bakar'] },
      { q: 'Dari kalangan anak-anak (remaja), orang yang pertama kali memeluk agama Islam adalah sepupu Nabi, yaitu...', c: 'Ali bin Abi Thalib radhiyallahu \'anhu', d: ['Usamah bin Zaid', 'Abdullah bin Umar', 'Hasan bin Ali'] },
      { q: 'Dari kalangan pria dewasa merdeka dan sahabat karib Nabi, orang yang pertama kali memeluk Islam adalah...', c: 'Abu Bakar Ash-Shiddiq radhiyallahu \'anhu', d: ['Umar bin Khattab', 'Utsman bin Affan', 'Abdurrahman bin Auf'] },
      { q: 'Dari kalangan budak / hamba sahaya yang dimerdekakan, orang pertama yang beriman adalah...', c: 'Zaid bin Haritsah radhiyallahu \'anhu', d: ['Bilal bin Rabah', 'Ammar bin Yasir', 'Tsauban'] },
      { q: 'Melalui perantaraan dakwah Abu Bakar Ash-Shiddiq, banyak tokoh mulia Quraisy yang masuk Islam, di antaranya...', c: 'Utsman bin Affan, Zubair bin Awwam, dan Abdurrahman bin Auf', d: ['Abu Jahal dan Abu Lahab', 'Walid bin Mughirah dan Umayyah bin Khalaf', 'Utbah dan Syaibah'] },
      { q: 'Alasan utama Nabi Muhammad SAW memilih strategi dakwah sirriyah pada masa awal adalah...', c: 'Menghindari gejolak penindasan kaum Quraisy sebelum pondasi akidah para pengikut awal mengakar kokoh', d: ['Rasa takut pribadi terhadap ancaman perang', 'Perintah untuk merahasiakan Islam selamanya', 'Karena belum ada ayat Al-Qur\'an yang lengkap'] },
      { q: 'Sikap keteladanan dari generasi As-Sabiqunal Awwalun yang patut dicontoh adalah...', c: 'Keteguhan iman tanpa ragu, pengorbanan jiwa raga, dan loyalitas penuh kepada kebenaran', d: ['Mengharap imbalan harta materi', 'Menyembunyikan keimanan karena ingin hidup mewah', 'Bimbang saat menghadapi kesulitan'] }
    ]
  },
  {
    subtopic: 'Dakwah Terang-Terangan di Bukit Shafa dan Reaksi Quraisy',
    comp: 'Menganalisis dimulainya dakwah terbuka (jahriyyah) dan bentuk penolakan kaum musyrik',
    scenarios: [
      { q: 'Perintah dari Allah SWT kepada Nabi Muhammad SAW untuk memulai dakwah secara terang-terangan (Jahriyyah) turun dalam Surah...', c: 'Al-Hijr ayat 94 ("Fashda\' bima tu\'mar...")', d: ['Al-Alaq ayat 1', 'Al-Fatihah ayat 1', 'Al-Baqarah ayat 2'] },
      { q: 'Nabi Muhammad SAW pertama kali mengumpulkan kabilah-kabilah Quraisy untuk mengumumkan risalah tauhid di atas bukit...', c: 'Bukit Shafa', d: ['Bukit Marwah', 'Bukit Uhud', 'Bukit Tsur'] },
      { q: 'Sebelum menyampaikan seruan tauhid, Nabi bertanya: "Jika aku kabarkan ada pasukan berkuda musuh di balik bukit ini hendak menyerang kalian, apakah kalian mempercayaiku?" Kaum Quraisy menjawab:...', c: '"Ya, kami percaya, karena kami belum pernah mendapati engkau berbohong sekalipun!"', d: ['"Tidak, engkau pasti mengada-ada!"', '"Kami harus melihatnya sendiri!"', '"Kami tidak peduli!"'] },
      { q: 'Tokoh musyrik yang langsung memotong pembicaraan Nabi di Bukit Shafa dan mencaci: "Tabban laka sa\'iral yaum! (Celakalah engkau sepanjang hari! Apakah hanya untuk ini engkau kumpulkan kami?)" adalah...', c: 'Abu Lahab (paman Nabi sendiri)', d: ['Abu Jahal', 'Abu Sufyan', 'Al-Walid'] },
      { q: 'Sebagai jawaban pembelaan dari Allah SWT atas makian Abu Lahab tersebut, Allah menurunkan Surah...', c: 'Al-Lahab (Al-Masad)', d: ['Al-Kafirun', 'Al-Kautsar', 'An-Nashr'] },
      { q: 'Reaksi kaum kafir Quraisy terhadap dakwah terbuka Nabi Muhammad SAW diwujudkan melalui...', c: 'Ejekan, fitnah tuduhan penyihir/orang gila, intimidasi fisik, dan pemboikotan ekonomi', d: ['Pemberian hadiah emas untuk membangun madrasah', 'Penyambutan meriah dengan musik rebana', 'Menyerahkan kepemimpinan Ka\'bah kepada Nabi'] },
      { q: 'Salah satu alasan utama para bangsawan Quraisy menolak keras ajaran Islam adalah...', c: 'Takut kehilangan status sosial ningrat dan menolak persamaan derajat antara majikan dan budak', d: ['Karena Al-Qur\'an ditulis dalam bahasa asing', 'Karena biaya masuk Islam sangat mahal', 'Karena Nabi melarang berdagang'] },
      { q: 'Kaum Quraisy mengutus Utbah bin Rabi\'ah menemui Nabi untuk menawarkan harta, tahta kekuasaan, dan wanita tercantik dengan syarat...', c: 'Nabi bersedia menghentikan dakwah tauhid dan mencela berhala nenek moyang mereka', d: ['Nabi mau pindah ke negeri Romawi', 'Nabi mengizinkan mereka meminum khamr', 'Nabi membagikan hartanya kepada mereka'] },
      { q: 'Jawaban tegas Nabi Muhammad SAW kepada pamannya Abu Thalib ketika diminta menghentikan dakwah adalah:...', c: '"Demi Allah, seandainya mereka meletakkan matahari di tangan kananku dan bulan di tangan kiriku, aku tidak akan menghentikan dakwah ini!"', d: ['"Aku akan berhenti jika mereka memberi aku istana emas"', '"Biarkan aku bermusyawarah dengan para budak"', '"Aku akan menyerah demi keselamatanku"'] },
      { q: 'Pelajaran berharga bagi santri dari keteguhan dakwah Nabi di Bukit Shafa adalah...', c: 'Keberanian menyampaikan kebenaran berlandaskan akhlak mulia dan pantang menyerah menghadapi celaan', d: ['Membalas makian teman dengan makian yang lebih pedas', 'Takut berbicara jika ditertawakan teman', 'Meninggalkan tugas kebaikan'] }
    ]
  },
  {
    subtopic: 'Ketabahan dan Pengorbanan Sahabat Awal (Bilal, Yasir, Khabbab)',
    comp: 'Meneladani keteguhan akidah para sahabat awal yang mengalami penyiksaan fisik',
    scenarios: [
      { q: 'Sahabat yang disiksa secara kejam di padang pasir terik Makkah dengan ditindih batu hitam besar di atas dadanya adalah...', c: 'Bilal bin Rabah radhiyallahu \'anhu', d: ['Salman Al-Farisi', 'Abu Dzar Al-Ghifari', 'Hamzah bin Abdul Muthalib'] },
      { q: 'Majikan kejam yang menyiksa Bilal bin Rabah karena menolak menyembah berhala bernama...', c: 'Umayyah bin Khalaf', d: ['Abu Jahal', 'Abu Lahab', 'Ash bin Wa\'il'] },
      { q: 'Sahabat dermawan yang menebus dan memerdekakan Bilal bin Rabah dari belenggu perbudakan Umayyah adalah...', c: 'Abu Bakar Ash-Shiddiq radhiyallahu \'anhu', d: ['Umar bin Khattab', 'Ali bin Abi Thalib', 'Utsman bin Affan'] },
      { q: 'Wanita muslimah pertama yang gugur syahid dalam sejarah Islam mempertahankan akidah tauhid setelah ditombak oleh Abu Jahal adalah...', c: 'Sumayyah binti Khayyath (Ibunda Ammar)', d: ['Khadijah binti Khuwailid', 'Fatimah binti Asad', 'Ummu Salamah'] },
      { q: 'Keluarga Yasir yang disiksa hebat oleh kaum musyrikin dihibur oleh Rasulullah SAW dengan sabda beliau yang agung:...', c: '"Sabarlah wahai keluarga Yasir, sesungguhnya tempat yang dijanjikan bagi kalian adalah surga!"', d: ['"Keluarlah kalian dari agama Islam!"', '"Kumpulkanlah senjata untuk membalas dendam!"', '"Minta maaflah kepada Abu Jahal!"'] },
      { q: 'Sahabat pandai besi yang disiksa dengan punggung ditempelkan pada bara api membara hingga lemak punggungnya memadamkan api tersebut adalah...', c: 'Khabbab bin Al-Aratt radhiyallahu \'anhu', d: ['Zaid bin Tsabit', 'Mu\'adz bin Jabal', 'Thalhah bin Ubaidillah'] },
      { q: 'Sahabat muda rupawan dari keluarga bangsawan kaya yang rela meninggalkan pakaian mewahnya dan hidup zuhud membela Islam hingga syahid di Perang Uhud adalah...', c: 'Mush\'ab bin Umair radhiyallahu \'anhu', d: ['Ja\'far bin Abi Thalib', 'Usamah bin Zaid', 'Sa\'ad bin Abi Waqqas'] },
      { q: 'Perlakuan zalim kaum musyrik Quraisy kepada orang-orang beriman yang miskin dan berstatus budak membuktikan bahwa...', c: 'Kekejaman Jahiliyah sangat membenci persamaan hak kemanusiaan yang dibawa oleh Islam', d: ['Orang miskin tidak boleh masuk Islam', 'Kaum musyrikin sangat takut pada kekayaan budak', 'Budak tidak memiliki akal'] },
      { q: 'Keteguhan hati para sahabat dalam mempertahankan akidah mengajarkan nilai karakter...', c: 'Istiqamah, sabar, dan rela berkorban demi kebenaran akidah kepada Allah SWT', d: ['Menyerah saat diancam bahaya', 'Mengutamakan harta di atas keyakinan', 'Mudah terpengaruh godaan'] },
      { q: 'Pahala tertinggi bagi para syuhada yang gugur mempertahankan kalimat tauhid di sisi Allah adalah...', c: 'Surga Firdaus yang tertinggi dan hidup mulia di sisi Tuhannya', d: ['Pujian dari sejarawan barat', 'Pemberian patung peringatan di dunia', 'Kebebasan dari proses hisab'] }
    ]
  },
  {
    subtopic: 'Hijrah ke Habasyah dan Keadilan Raja Najasyi',
    comp: 'Menganalisis sebab-sebab hijrah pertama ke Habasyah dan keteladanan Raja Najasyi',
    scenarios: [
      { q: 'Karena penindasan kaum musyrikin Makkah semakin tak tertahankan, Rasulullah SAW memerintahkan para sahabat untuk hijrah pertama kali ke negeri...', c: 'Habasyah (sekarang wilayah Ethiopia / Afrika Timur)', d: ['Madinah (Yatsrib)', 'Thaif', 'Yaman'] },
      { q: 'Hijrah pertama ke Habasyah terjadi pada tahun ke-5 kenabian, dipimpin oleh sahabat mulia...', c: 'Utsman bin Affan bersama istrinya Ruqayyah binti Rasulullah', d: ['Ali bin Abi Thalib', 'Abu Bakar Ash-Shiddiq', 'Umar bin Khattab'] },
      { q: 'Raja negeri Habasyah yang terkenal sangat adil, beragama Nasrani yang lurus, dan tidak pernah menzalimi siapapun bernama...', c: 'Raja Najasyi (Ashhamah)', d: ['Raja Namrud', 'Kaisar Heraklius', 'Kisra Persia'] },
      { q: 'Pada hijrah kedua ke Habasyah yang diikuti sekitar 101 orang muslim, tokoh sahabat yang ditunjuk menjadi juru bicara di hadapan Raja Najasyi adalah...', c: 'Ja\'far bin Abi Thalib radhiyallahu \'anhu', d: ['Amr bin Ash', 'Khalid bin Walid', 'Zubair bin Awwam'] },
      { q: 'Surah Al-Qur\'an yang dibacakan oleh Ja\'far bin Abi Thalib dengan merdu di hadapan Raja Najasyi dan para uskup hingga mereka menangis terharu adalah...', c: 'Surah Maryam (mengisahkan kesucian Maryam dan kelahiran Nabi Isa a.s.)', d: ['Surah Al-Baqarah', 'Surah Yasin', 'Surah Al-Ikhlas'] },
      { q: 'Setelah mendengar bacaan Surah Maryam, Raja Najasyi mengambil sepotong kayu kecil dan bersumpah bahwa ajaran Nabi Isa dan ajaran Nabi Muhammad bersumber dari...', c: 'Satu lentera cahaya wahyu yang sama dari Allah SWT', d: ['Dua ajaran yang bermusuhan', 'Kisah dongeng kuno manusia', 'Ajaran filsafat Yunani'] },
      { q: 'Utusan kaum kafir Quraisy yang dikirim ke Habasyah membawa hadiah mewah untuk membujuk Raja Najasyi agar mengekstradisi para sahabat muslim adalah...', c: 'Amr bin Ash dan Abdullah bin Abi Rabi\'ah (sebelum mereka masuk Islam)', d: ['Abu Jahal dan Abu Lahab', 'Utbah dan Umayyah', 'Ikrimah dan Safwan'] },
      { q: 'Sikap Raja Najasyi terhadap hadiah suap dan fitnah yang dibawa oleh utusan Quraisy adalah...', c: 'Menolak mentah-mentah hadiah tersebut dan menjamin perlindungan keamanan penuh bagi kaum muslimin di negerinya', d: ['Menerima hadiah dan memenjarakan kaum muslimin', 'Mengusir kaum muslimin ke padang pasir', 'Memerintahkan kaum muslimin kembali ke Makkah'] },
      { q: 'Ketika Raja Najasyi wafat di Habasyah, Rasulullah SAW dan para sahabat di Madinah melaksanakan shalat...', c: 'Shalat Ghaib (shalat jenazah dari jarak jauh)', d: ['Shalat Gerhana', 'Shalat Istisqa\'', 'Shalat Hajat'] },
      { q: 'Pelajaran diplomatik yang sangat berharga dari peristiwa hijrah ke Habasyah adalah...', c: 'Pentingnya membangun komunikasi yang santun, menjunjung keadilan, dan menghormati pemimpin yang amanah', d: ['Menyerang penguasa yang berbeda keyakinan', 'Menolak mencari perlindungan saat tertindas', 'Menyerahkan diri kepada penindas'] }
    ]
  },
  {
    subtopic: 'Amul Huzni (Tahun Duka Cita) dan Dakwah ke Thaif',
    comp: 'Meneladani kesabaran Rasulullah menghadapi wafatnya Khadijah dan Abu Thalib serta dakwah ke Thaif',
    scenarios: [
      { q: 'Tahun ke-10 kenabian dinamakan dalam sejarah Islam sebagai "Amul Huzni", yang artinya adalah...', c: 'Tahun Duka Cita / Tahun Kesedihan', d: ['Tahun Kemenangan', 'Tahun Perang', 'Tahun Kejayaan'] },
      { q: 'Dua orang pembela dan pelindung utama dakwah Nabi Muhammad SAW yang wafat berturut-turut pada tahun Amul Huzni adalah...', c: 'Sayyidah Khadijah (istri tercinta) dan Abu Thalib (paman pelindung)', d: ['Hamzah bin Abdul Muthalib dan Ja\'far bin Abi Thalib', 'Abdullah (ayah) dan Aminah (ibu)', 'Abdul Muthalib dan Halimah'] },
      { q: 'Setelah wafatnya Abu Thalib dan Khadijah, kaum musyrikin Quraisy semakin leluasa melakukan...', c: 'Penyiksaan, penghinaan, dan kekejaman fisik secara terang-terangan terhadap diri Rasulullah SAW', d: ['Perundingan damai antarsuku', 'Penghentian permusuhan', 'Masuk Islam secara berbondong-bondong'] },
      { q: 'Melihat sempitnya ruang dakwah di Makkah, Nabi Muhammad SAW berjalan kaki sejauh 60 km mencari suaka dan tempat dakwah baru ke kota pegunungan...', c: 'Thaif', d: ['Yatsrib (Madinah)', 'Khaybar', 'Kufah'] },
      { q: 'Sahabat setia yang mendampingi perjalanan dakwah Nabi Muhammad SAW ke Thaif adalah...', c: 'Zaid bin Haritsah radhiyallahu \'anhu', d: ['Abu Bakar Ash-Shiddiq', 'Ali bin Abi Thalib', 'Bilal bin Rabah'] },
      { q: 'Sikap para pemimpin dan penduduk kota Thaif (Bani Tsaqif) dalam menyambut dakwah Nabi Muhammad SAW adalah...', c: 'Menolak kasar, mengusir, dan mengerahkan anak-anak serta orang gila untuk melempari Nabi dengan batu hingga kaki beliau berdarah', d: ['Menyambut gembira dengan perjamuan makan', 'Menerima Islam dengan suka cita', 'Membangunkan rumah untuk Nabi'] },
      { q: 'Malaikat penjaga gunung (Malakul Jibal) datang menawarkan kepada Nabi untuk menimpakan dua gunung besar ke atas penduduk Thaif, namun Nabi menolak dan berdoa:...', c: '"Ya Allah, berilah petunjuk kepada kaumku, sesungguhnya mereka tidak mengetahui"', d: ['"Hancurkanlah mereka sehancur-hancurnya!"', '"Tenggelamkanlah mereka ke dalam bumi!"', '"Kutuklah mereka menjadi batu!"'] },
      { q: 'Saat berlindung di sebuah kebun anggur milik Utbah dan Syaibah di Thaif, seorang pelayan beragama Nasrani membawakan anggur dan takjub mendengar Nabi mengucap "Bismillah". Pelayan itu bernama...', c: 'Addas', d: ['Buhaira', 'Waraqah', 'Maisyarah'] },
      { q: 'Doa kepasrahan agung yang dilantunkan Nabi Muhammad SAW di kebun anggur Thaif menunjukkan bahwa puncak harapan beliau semata-mata adalah...', c: '"Asalkan Engkau (wahai Allah) tidak murka kepadaku, maka aku tidak mempedulikan segala penderitaan ini"', d: ['Memohon balasan kehancuran bagi musuh', 'Memohon kekayaan duniawi', 'Memohon agar malaikat membela dengan pedang'] },
      { q: 'Keteladanan luar biasa dari peristiwa Thaif yang wajib diteladani seluruh umat Islam adalah...', c: 'Sikap pemaaf, ketabahan tanpa batas, mendoakan kebaikan bagi orang yang berbuat zalim, dan pantang berputus asa', d: ['Dendam kesumat kepada orang yang membenci', 'Menyerah dari jalan dakwah', 'Menolak menasihati orang lain'] }
    ]
  },
  {
    subtopic: 'Peristiwa Mukjizat Isra\' Mi\'raj dan Shalat Lima Waktu',
    comp: 'Menganalisis kronologi dan hikmah agung peristiwa Isra\' Mi\'raj Nabi Muhammad SAW',
    scenarios: [
      { q: 'Peristiwa perjalanan malam hari yang diperjalankan oleh Allah SWT bagi Nabi Muhammad SAW dari Masjidil Haram di Makkah ke Masjidil Aqsha di Palestina dinamakan...', c: 'Isra\'', d: ['Mi\'raj', 'Hijrah', 'Fathul Makkah'] },
      { q: 'Sedangkan perjalanan agung Nabi Muhammad SAW naik dari Masjidil Aqsha menembus langit ketujuh hingga ke Sidratul Muntaha dinamakan...', c: 'Mi\'raj', d: ['Isra\'', 'Tahannuts', 'Wukuf'] },
      { q: 'Peristiwa mukjizat agung Isra\' Mi\'raj diabadikan dalam Al-Qur\'an pada permulaan Surah...', c: 'Al-Isra\' ayat 1 ("Subhanalladzi asra bi \'abdihi lailan...")', d: ['An-Najm ayat 1', 'Al-Alaq ayat 1', 'Al-Baqarah ayat 1'] },
      { q: 'Kendaraan gaib berkecepatan kilat yang ditunggangi oleh Rasulullah SAW bersama Malaikat Jibril selama perjalanan Isra\' Mi\'raj bernama...', c: 'Buraq', d: ['Unta Qashwa', 'Kuda Sembrani', 'Burung Ababil'] },
      { q: 'Di Masjidil Aqsha (Baitul Maqdis), Nabi Muhammad SAW memimpin shalat berjamaah di mana seluruh makmumnya adalah...', c: 'Para nabi dan rasul utusan Allah terdahulu', d: ['Seluruh sahabat Makkah', 'Para malaikat penjaga neraka', 'Penduduk Palestina'] },
      { q: 'Oleh-oleh atau perintah ibadah paling agung yang diterima secara langsung oleh Nabi Muhammad SAW dari Allah SWT tanpa perantara malaikat dalam Mi\'raj adalah...', c: 'Kewajiban mendirikan shalat fardhu lima waktu sehari semalam', d: ['Kewajiban berpuasa tiga bulan', 'Kewajiban membayar zakat mal', 'Perintah berperang'] },
      { q: 'Pada awalnya, Allah SWT mewajibkan shalat sebanyak ... waktu sehari semalam, lalu diringankan atas usulan Nabi Musa a.s. menjadi 5 waktu dengan pahala tetap 50 waktu.', c: '50 waktu', d: ['100 waktu', '25 waktu', '10 waktu'] },
      { q: 'Ketika kaum musyrikin Makkah mendustakan dan menganggap perjalanan satu malam ke Palestina dan langit itu mustahil, sahabat yang langsung membenarkan tanpa ragu adalah...', c: 'Abu Bakar, sehingga beliau mendapat gelar kehormatan "As-Siddiq"', d: ['Umar bin Khattab', 'Ali bin Abi Thalib', 'Utsman bin Affan'] },
      { q: 'Tujuan utama Allah SWT memperjalankan Nabi Muhammad SAW dalam peristiwa Isra\' Mi\'raj setelah duka cita Amul Huzni adalah untuk...', c: 'Menghibur hati Nabi dan memperlihatkan sebagian tanda-tanda kebesaran dan keagungan kekuasaan Allah (Linuriyahu min ayatina)', d: ['Menunjukkan kesaktian kepada kaum musyrikin', 'Memindahkan pusat ibadah ke Palestina', 'Mempercepat datangnya kiamat'] },
      { q: 'Kedudukan shalat fardhu dalam Islam diibaratkan oleh Rasulullah SAW sebagai...', c: 'Tiang penegak agama (Ash-shalatu \'imadud-din), siapa yang mendirikannya berarti menegakkan agama', d: ['Ibadah tambahan pelengkap semata', 'Hiasan sosial bermasyarakat', 'Kewajiban di hari tua'] }
    ]
  },
  {
    subtopic: 'Perjanjian Baiat Aqabah I dan II',
    comp: 'Menganalisis ikrar janji setia penduduk Yatsrib dalam Baiat Aqabah I dan II',
    scenarios: [
      { q: 'Pertemuan ikrar janji setia pertama antara Nabi Muhammad SAW dengan enam orang peziarah dari suku Khazraj Yatsrib di bukit Aqabah pada tahun ke-12 kenabian disebut...', c: 'Baiat Aqabah I (Baiat \'Aqabatil Ula)', d: ['Baiat Aqabah II', 'Perjanjian Hudaibiyah', 'Baiat Ridhwan'] },
      { q: 'Isi pokok kesepakatan dalam Baiat Aqabah I dikenal sebagai "Baiat Wanita" karena menitikberatkan pada pembinaan moral, antara lain...', c: 'Tidak menyekutukan Allah, tidak mencuri, tidak berzina, tidak membunuh anak-anak, dan tidak berdusta', d: ['Kewajiban mengangkat senjata perang', 'Membayar upeti tahunan kepada Makkah', 'Membangun benteng pertahanan'] },
      { q: 'Sahabat muda yang diutus oleh Rasulullah SAW ke Yatsrib sebagai duta guru dakwah pertama untuk mengajarkan Al-Qur\'an dan shalat adalah...', c: 'Mush\'ab bin Umair radhiyallahu \'anhu', d: ['Mu\'adz bin Jabal', 'Zaid bin Tsabit', 'Abdullah bin Mas\'ud'] },
      { q: 'Pada tahun berikutnya (tahun ke-13 kenabian), sebanyak 73 orang pria dan 2 orang wanita Yatsrib berikrar dalam perjanjian yang lebih besar, yaitu...', c: 'Baiat Aqabah II (Baiat Kubra)', d: ['Baiat Aqabah I', 'Piagam Madinah', 'Perjanjian Daumatul Jandal'] },
      { q: 'Poin paling krusial yang disepakati dalam Baiat Aqabah II adalah komitmen penduduk Yatsrib untuk...', c: 'Melindungi dan membela keselamatan Rasulullah SAW dan kaum muslimin sebagaimana mereka membela anak dan istri mereka sendiri', d: ['Mengumpulkan seluruh harta untuk Makkah', 'Memindahkan Ka\'bah ke Yatsrib', 'Menyerahkan jabatan raja kepada Nabi'] },
      { q: 'Dua suku asli Arab terbesar di kota Yatsrib yang selama ratusan tahun saling berperang (Perang Bu\'ats) lalu bersatu dalam naungan Islam adalah suku...', c: 'Aus dan Khazraj', d: ['Quraisy dan Kinanah', 'Tsaqif dan Hawazin', 'Ghatfan dan Bakr'] },
      { q: 'Dua orang wanita mulia asal Yatsrib yang ikut serta dalam ikrar agung Baiat Aqabah II adalah Nusaibah binti Ka\'ab (Ummu \'Imarah) dan...', c: 'Asma binti Amr bin \'Adi (Ummu Mani\')', d: ['Fatimah Az-Zahra', 'Aisyah binti Abu Bakar', 'Khadijah'] },
      { q: 'Hasil keberhasilan dakwah Mush\'ab bin Umair di Yatsrib menyebabkan hampir seluruh rumah penduduk Yatsrib...', c: 'Tersentuh oleh cahaya Islam dan merindukan kedatangan Rasulullah SAW', d: ['Membenci kaum Quraisy Makkah', 'Menjadi kaya raya mendadak', 'Mengungsi ke Habasyah'] },
      { q: 'Setelah terselenggaranya Baiat Aqabah II, Rasulullah SAW akhirnya memberikan izin kepada para sahabat di Makkah untuk...', c: 'Berhijrah secara bertahap menuju kota Yatsrib', d: ['Melakukan serangan balasan ke rumah Abu Jahal', 'Membakar pasar Ukaz', 'Mengasingkan diri ke gua'] },
      { q: 'Faktor pendorong penduduk Yatsrib menyambut dakwah Islam lebih cepat dibandingkan penduduk Makkah antara lain karena...', c: 'Mereka sering mendengar kabar dari kaum Yahudi Yatsrib tentang akan segera datangnya nabi akhir zaman', d: ['Mereka dipaksa oleh raja Najasyi', 'Mereka ingin menguasai perdagangan Ka\'bah', 'Mereka tidak memiliki agama sama sekali'] }
    ]
  },
  {
    subtopic: 'Peristiwa Hijrah Nabi Muhammad SAW ke Madinah',
    comp: 'Menganalisis kronologi perjalanan hijrah Nabi bersama Abu Bakar dan singgah di Gua Tsur',
    scenarios: [
      { q: 'Rencana jahat kaum kafir Quraisy dalam rapat di Darun Nadwah sebelum hijrah Nabi adalah...', c: 'Memilih satu pemuda tangguh dari setiap kabilah untuk membunuh Nabi Muhammad SAW secara bersama-sama', d: ['Menyuap Nabi dengan emas batangan', 'Mengusir Nabi secara terhormat dengan unta', 'Memenjarakan Nabi di benteng Thaif'] },
      { q: 'Sahabat muda pemberani yang dengan rela bertaruh nyawa tidur di ranjang Nabi Muhammad SAW memakai selimut hijau beliau untuk mengelabui musuh adalah...', c: 'Ali bin Abi Thalib radhiyallahu \'anhu', d: ['Abu Bakar Ash-Shiddiq', 'Umar bin Khattab', 'Zaid bin Haritsah'] },
      { q: 'Ketika para pemuda Quraisy mengepung rumah Nabi, beliau keluar rumah membaca awal Surah Yasin (ayat 1-9) dan menaburkan pasir ke kepala mereka, sehingga...', c: 'Allah membutakan pandangan mereka dan Nabi lolos tanpa terlihat sedikit pun', d: ['Para pemuda itu pingsan selama seminggu', 'Rumah Nabi runtuh seketika', 'Pedang mereka patah'] },
      { q: 'Sahabat yang dipilih oleh Rasulullah SAW untuk mendampingi beliau dalam perjalanan hijrah bersejarah ke Madinah adalah...', c: 'Abu Bakar Ash-Shiddiq radhiyallahu \'anhu', d: ['Umar bin Khattab', 'Hamzah bin Abdul Muthalib', 'Bilal bin Rabah'] },
      { q: 'Untuk mengecoh pencarian musuh yang memburu ke arah utara jalan biasa, Rasulullah dan Abu Bakar bersembunyi selama tiga malam di...', c: 'Gua Tsur di sebelah selatan Makkah', d: ['Gua Hira', 'Gua Uhud', 'Gua Sinai'] },
      { q: 'Ketika para pengejar Quraisy berdiri tepat di depan mulut Gua Tsur, Abu Bakar merasa sangat cemas terhadap keselamatan Nabi. Rasulullah menenangkan beliau dengan bersabda:...', c: '"La tahzan, innallaha ma\'ana" (Jangan bersedih, sesungguhnya Allah bersama kita)', d: ['"Ayo kita lawan mereka dengan pedang!"', '"Kita melompat saja ke jurang!"', '"Menyerahlah sekarang wahai Abu Bakar!"'] },
      { q: 'Mukjizat perlindungan Allah di mulut Gua Tsur yang membuat kaum musyrikin yakin tidak ada orang di dalam gua adalah...', c: 'Sarang laba-laba yang utuh dan burung merpati yang bertelur di mulut gua', d: ['Pohon duri raksasa yang menutup jalan', 'Batu besar yang jatuh menutup mulut gua', 'Banjir air bandang'] },
      { q: 'Penunjuk jalan (guide) profesional yang disewa oleh Abu Bakar untuk menuntun perjalanan melewati rute terpencil di tepi pantai Laut Merah adalah...', c: 'Abdullah bin Uraiqith (seorang non-muslim yang amanah)', d: ['Suraqah bin Malik', 'Amr bin Ash', 'Musailamah'] },
      { q: 'Sebelum memasuki kota Madinah, Rasulullah SAW singgah di sebuah desa dan membangun masjid pertama dalam sejarah Islam yang bernama...', c: 'Masjid Quba\'', d: ['Masjid Nabawi', 'Masjidil Haram', 'Masjid Al-Aqsha'] },
      { q: 'Peristiwa Hijrah Nabi Muhammad SAW dari Makkah ke Madinah kemudian ditetapkan pada masa Khalifah Umar bin Khattab sebagai momentum awal...', c: 'Tahun Baru Kalender Hijriyah (1 Muharram 1 H)', d: ['Hari Raya Idul Fitri', 'Peringatan Maulid Nabi', 'Hari Perdamaian Dunia'] }
    ]
  },
  {
    subtopic: 'Pembangunan Peradaban Madinah: Masjid, Ukhuwah, dan Piagam Madinah',
    comp: 'Menganalisis strategi Nabi membangun negara Madinah melalui Masjid Nabawi dan Piagam Madinah',
    scenarios: [
      { q: 'Nama kota "Yatsrib" setelah kedatangan hijrah Rasulullah SAW diubah namanya menjadi...', c: 'Madinatun Nabi / Al-Madinah Al-Munawwarah (Kota yang bercahaya)', d: ['Baitul Maqdis', 'Baghdad', 'Damaskus'] },
      { q: 'Langkah pertama yang dilakukan oleh Rasulullah SAW setibanya di Madinah adalah membangun...', c: 'Masjid Nabawi', d: ['Pasar perniagaan baru', 'Benteng pertahanan benteng parit', 'Istana kepresidenan megah'] },
      { q: 'Fungsi Masjid Nabawi pada zaman Rasulullah SAW tidak hanya untuk shalat, melainkan juga berfungsi sebagai...', c: 'Pusat pemerintahan, musyawarah strategi kenegaraan, tempat belajar (Suffah), dan pembinaan sosial', d: ['Tempat berdagang komersial mencari untung', 'Gudang senjata pribadi kepala suku', 'Tempat rekreasi hiburan'] },
      { q: 'Sebutan mulia bagi orang-orang muslim asal Makkah yang berhijrah meninggalkan tanah air dan hartanya demi Islam adalah...', c: 'Kaum Muhajirin', d: ['Kaum Anshar', 'Kaum Munafik', 'Bani Israil'] },
      { q: 'Sebutan mulia bagi penduduk muslim asli Madinah yang menyambut, menolong, dan membagikan tempat tinggal serta hartanya bagi saudaranya adalah...', c: 'Kaum Anshar (Sang Penolong)', d: ['Kaum Muhajirin', 'Kaum Badui', 'Bani Umayyah'] },
      { q: 'Strategi sosial kemasyarakatan luar biasa yang dilakukan Nabi untuk menyatukan persaudaraan iman melampaui ikatan darah antarsuku dinamakan...', c: 'Muwakhaat (Mempersaudarakan kaum Muhajirin dan Anshar)', d: ['Mudarabah', 'Musyarakah', 'Muamalah perniagaan'] },
      { q: 'Dokumen konstitusi tertulis pertama di dunia yang mengatur hak dan kewajiban warga Madinah yang majemuk (muslim dan non-muslim/Yahudi) dinamakan...', c: 'Piagam Madinah (Mitsaq Madinah / Dustur Madinah)', d: ['Deklarasi Makkah', 'Perjanjian Hudaibiyah', 'Magna Charta'] },
      { q: 'Prinsip utama yang dijamin dalam Piagam Madinah bagi seluruh warga masyarakat tanpa membedakan agama dan suku adalah...', c: 'Kebebasan memeluk keyakinan, keadilan hukum, dan kewajiban bersama mempertahankan kedaulatan Madinah dari serangan luar', d: ['Kewajiban seluruh warga Yahudi memeluk Islam seketika', 'Hak istimewa bagi suku Arab atas suku lain', 'Pungutan pajak tanah tanpa batas'] },
      { q: 'Tokoh munafik kota Madinah yang selalu berusaha memecah belah persatuan dan berkhianat di balik layar bernama...', c: 'Abdullah bin Ubay bin Salul', d: ['Ka\'ab bin Asyraf', 'Abu Sufyan', 'Huyay bin Akhtab'] },
      { q: 'Keberhasilan Nabi Muhammad SAW membangun masyarakat Madinah menjadi bukti keagungan Islam sebagai rahmatan lil \'alamin, yaitu...', c: 'Agama yang membawa rahmat, kedamaian, keadilan, dan kesejahteraan bagi seluruh alam dan umat manusia', d: ['Agama yang hanya mementingkan ritual ibadah pribadi di masjid', 'Ajaran yang menolak kerja sama antarbangsa', 'Sistem yang mengabaikan ilmu pengetahuan'] }
    ]
  },
  {
    subtopic: 'Perang Badar, Uhud, Khandaq, dan Fathu Makkah',
    comp: 'Menganalisis sejarah perjuangan mempertahankan kedaulatan dan pembebasan Makkah yang damai',
    scenarios: [
      { q: 'Perang besar pertama antara 313 pejuang muslim Madinah melawan 1.000 pasukan musyrikin Quraisy yang bersenjata lengkap adalah...', c: 'Perang Badar Al-Kubra (17 Ramadan 2 Hijriyah)', d: ['Perang Uhud', 'Perang Khandaq', 'Perang Hunain'] },
      { q: 'Kemenangan gemilang kaum muslimin dalam Perang Badar dibantu oleh pertolongan gaib dari Allah SWT berupa...', c: 'Pasukan ribuan malaikat yang dipimpin Malaikat Jibril dan rasa kantuk yang menenteramkan hati', d: ['Hujan batu api raksasa dari langit', 'Gempa bumi dahsyat di kubu Quraisy', 'Tenggelamnya sumur air Badar'] },
      { q: 'Penyebab utama pasukan muslim mengalami kekalahan pahit pada Perang Uhud (tahun 3 H) adalah...', c: 'Pasukan pemanah di bukit Uhud melanggar perintah Nabi dan turun berebut harta rampasan perang (Ghanimah)', d: ['Pasukan Quraisy jumlahnya seratus ribu tentara', 'Senjata pasukan muslim habis total', 'Nabi tertangkap oleh musuh'] },
      { q: 'Paman Nabi yang amat gagah perkasa berjuluk "Singa Allah" (Asadullah) yang gugur syahid di Perang Uhud oleh tombak Wahsyi adalah...', c: 'Hamzah bin Abdul Muthalib radhiyallahu \'anhu', d: ['Abbas bin Abdul Muthalib', 'Ja\'far bin Abi Thalib', 'Mush\'ab bin Umair'] },
      { q: 'Perang Khandaq (Perang Ahzab) tahun 5 H menggunakan taktik penggalian parit besar di sekeliling utara kota Madinah atas usul sahabat...', c: 'Salman Al-Farisi radhiyallahu \'anhu', d: ['Ali bin Abi Thalib', 'Abu Dzar Al-Ghifari', 'Hudzaifah bin Al-Yaman'] },
      { q: 'Perjanjian damai gencatan senjata selama 10 tahun antara Rasulullah SAW dan kaum kafir Quraisy pada tahun 6 H dinamakan...', c: 'Perjanjian Hudaibiyah (Shulhul Hudaibiyah)', d: ['Piagam Madinah', 'Baiat Aqabah', 'Perjanjian Thaif'] },
      { q: 'Kaum musyrikin Quraisy melanggar gencatan senjata Perjanjian Hudaibiyah dengan cara membantu Bani Bakr menyerang sekutu muslim yaitu...', c: 'Bani Khuza\'ah', d: ['Bani Nadhir', 'Bani Quraizhah', 'Bani Qainuqa\''] },
      { q: 'Sebagai akibat pelanggaran Hudaibiyah oleh Quraisy, pada tahun 8 H Rasulullah memimpin 10.000 pasukan membebaskan kota Makkah secara damai dalam peristiwa...', c: 'Fathu Makkah (Pembebasan Kota Makkah)', d: ['Haji Wada\'', 'Perang Tabuk', 'Perang Mu\'tah'] },
      { q: 'Sikap Rasulullah SAW terhadap patung-patung berhala berjumlah 360 buah di sekeliling Ka\'bah pada saat Fathu Makkah adalah...', c: 'Menghancurkan seluruh berhala tersebut dengan tongkatnya sambil membaca: "Ja\'al haqqu wa zahaqal bathil"', d: ['Membiarkannya sebagai cagar budaya kuno', 'Memindahkannya ke museum', 'Menjualnya ke pedagang asing'] },
      { q: 'Haji terakhir yang dilaksanakan oleh Rasulullah SAW bersama lebih dari 100.000 kaum muslimin sekaligus tempat beliau menyampaikan Khutbah Perpisahan dinamakan...', c: 'Haji Wada\' (Haji Perpisahan)', d: ['Haji Qiran', 'Haji Tamattu\'', 'Haji Ifrad'] }
    ]
  }
];

function generateSkiMI() {
  return buildUniqueSubjectBank({
    subjectId: 'ski',
    subjectName: 'SKI MI',
    categoryId: 'rumpun_pai',
    categoryName: 'Rumpun PAI MI',
    akgtkCategory: 'Rumpun PAI',
    educationLevel: 'MI',
    idPrefix: 'mi-sk-',
    totalTarget: 150,
    generator: (i, diff, num) => {
      const topicIndex = i % topics.length; // 0..14
      const scenarioIndex = Math.floor(i / topics.length); // 0..9
      const topic = topics[topicIndex];
      const sc = topic.scenarios[scenarioIndex];

      return {
        subtopic: topic.subtopic,
        competency: topic.comp,
        question: `[Asesmen Sejarah Kebudayaan Islam MI Soal #${num} - ${topic.subtopic}]\n${sc.q}`,
        correctText: sc.c,
        distractors: sc.d,
        explanation: `Jawaban benar: "${sc.c}". Sesuai dengan materi kompetensi "${topic.comp}" pada kajian sejarah ${topic.subtopic}.`,
        tip: `Pahami kronologi sirah nabawiyah, latar belakang peristiwa, dan keteladanan akhlak Rasulullah SAW.`
      };
    }
  });
}

module.exports = {
  generateSkiMI
};
