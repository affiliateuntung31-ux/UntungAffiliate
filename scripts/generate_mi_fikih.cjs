// Generator for Fikih MI (150 Soal Unik)
const { buildUniqueSubjectBank } = require('./generate_all_subjects_master.cjs');

const topics = [
  {
    subtopic: 'Thaharah: Macam-Macam Air untuk Bersuci',
    comp: 'Mengidentifikasi pembagian air (mutlak, musta\'mal, musyammas, mutanajis) untuk thaharah',
    scenarios: [
      { q: 'Air yang suci dan dapat mensucikan dari hadas serta najis tanpa makruh disebut air...', c: 'Air Mutlak (air murni)', d: ['Air Musta\'mal', 'Air Musyammas', 'Air Mutanajis'] },
      { q: 'Di bawah ini yang termasuk salah satu dari tujuh macam sumber air mutlak alami adalah...', c: 'Air hujan, air sumur, dan air sungai', d: ['Air kopi manis', 'Air kelapa muda', 'Air sabun cuci'] },
      { q: 'Air mutlak yang terpanaskan oleh sinar matahari langsung dalam bejana logam berkarat (selain emas/perak) dihukumi sebagai air...', c: 'Musyammas (makruh digunakan untuk bersuci badan)', d: ['Mutanajis (haram digunakan)', 'Musta\'mal (tidak mensucikan)', 'Air suci mensucikan tanpa makruh'] },
      { q: 'Air sedikit (kurang dari dua kullah) yang telah digunakan untuk membasuh anggota fardhu wudhu dihukumi sebagai air...', c: 'Musta\'mal (suci zatnya tetapi tidak dapat mensucikan hadas lain)', d: ['Mutanajis', 'Mutlak', 'Musyammas'] },
      { q: 'Air yang terkena kotoran najis dan mengalami perubahan pada bau, rasa, atau warnanya dihukumi sebagai air...', c: 'Mutanajis (haram dan tidak sah untuk bersuci)', d: ['Musta\'mal', 'Mutlak', 'Mubah'] },
      { q: 'Ukuran dua kullah menurut standar ukuran liter air ulama fikih setara dengan kurang lebih...', c: '216 liter (atau bak kubus sisi 60 cm)', d: ['10 liter', '500 liter', '50 liter'] },
      { q: 'Apabila air mencapai dua kullah atau lebih, kejatuhan bangkai lalat kecil yang tidak mengubah warna, bau, dan rasa, maka status air tersebut...', c: 'Tetap suci dan mensucikan', d: ['Menjadi mutanajis seketika', 'Haram diminum', 'Makruh tahrim'] },
      { q: 'Air teh manis atau air kelapa yang suci dan halal diminum tetapi tidak sah digunakan untuk berwudhu disebut air...', c: 'Thahir Ghairu Muthahhir (suci tidak mensucikan)', d: ['Thahir Muthahhir', 'Mutanajis', 'Makruh'] },
      { q: 'Air embun yang menetes di dedaunan dan air salju dingin termasuk dalam kategori air...', c: 'Mutlak yang sah untuk berwudhu dan mandi wajib', d: ['Musta\'mal', 'Musyammas', 'Ghairu muthahhir'] },
      { q: 'Ketika sedang berwudhu di kran madrasah, sikap hemat air yang diajarkan Rasulullah SAW adalah...', c: 'Membuka kran air secukupnya dan tidak berlebih-lebihan mengalirkan air', d: ['Membuka kran sebesar-besarnya agar cepat basah', 'Menyiram seluruh tubuh dengan berember-ember air', 'Membiarkan kran mengalir terus setelah selesai'] }
    ]
  },
  {
    subtopic: 'Macam-Macam Najis dan Cara Mensucikannya',
    comp: 'Membedakan tingkatan najis (Mukhaffafah, Mutawassithah, Mughalladhah) dan tata cara thaharah',
    scenarios: [
      { q: 'Najis yang tergolong paling ringan tingkatannya dalam fikih Islam dinamakan najis...', c: 'Mukhaffafah (najis ringan)', d: ['Mutawassithah (najis sedang)', 'Mughalladhah (najis berat)', 'Najis ma\'fu'] },
      { q: 'Contoh najis Mukhaffafah adalah air kencing bayi laki-laki yang memenuhi syarat...', c: 'Berusia belum genap 2 tahun dan belum mengonsumsi makanan apapun selain ASI', d: ['Sudah makan bubur nasi', 'Berusia 5 tahun', 'Bayi perempuan yang minum susu formula'] },
      { q: 'Cara mensucikan benda atau pakaian yang terkena air seni najis Mukhaffafah cukup dengan...', c: 'Memercikkan air mutlak secara merata pada tempat yang terkena najis hingga basah', d: ['Mencucinya 7 kali dengan tanah', 'Mencucinya dengan air mendidih dan sabun', 'Menjemurnya di terik matahari tanpa air'] },
      { q: 'Najis yang berasal dari jilatan anjing atau babi tergolong dalam kategori najis...', c: 'Mughalladhah (najis berat)', d: ['Mutawassithah', 'Mukhaffafah', 'Najis hukmiyyah'] },
      { q: 'Tata cara mensucikan wadah atau pakaian yang terkena jilatan anjing adalah membasuhnya sebanyak...', c: 'Tujuh kali basuhan air bersih, dan salah satunya dicampur dengan tanah/debu suci', d: ['Tiga kali dengan air mengalir', 'Cukup dilap dengan tisu kering', 'Satu kali dengan sabun wangi'] },
      { q: 'Najis Mutawassithah dibagi menjadi dua macam, yaitu najis...', c: '\'Ainiyyah (terlihat wujud, rasa, atau baunya) dan Hukmiyyah (diyakini ada tapi tak berwujud)', d: ['Mukhaffafah dan Mughalladhah', 'Thahirah dan Fasidah', 'Khabitsah dan Radi\'ah'] },
      { q: 'Contoh najis Mutawassithah yang sering dijumpai dalam kehidupan sehari-hari adalah...', c: 'Kotoran manusia, kotoran hewan, darah, nanah, dan bangkai binatang', d: ['Air liur manusia', 'Keringat orang beriman', 'Bangkai ikan dan belalang'] },
      { q: 'Cara mensucikan najis Mutawassithah \'Ainiyyah adalah dengan membasuhnya menggunakan air mutlak hingga...', c: 'Hilang zat wujudnya, hilang baunya, dan hilang rasanya secara tuntas', d: ['Cukup ditaburi bedak wangi', 'Diangin-anginkan selama semalam', 'Ditutup dengan kain bersih'] },
      { q: 'Bangkai yang suci dan halal dimakan tanpa perlu disembelih menurut syariat Islam adalah...', c: 'Bangkai ikan laut dan bangkai belalang', d: ['Bangkai ayam dan bangkai sapi', 'Bangkai burung merpati', 'Bangkai kambing'] },
      { q: 'Najis yang dimaafkan (Ma\'fu) dalam shalat karena sulit dihindarkan antara lain...', c: 'Darah nyamuk atau bisul yang sedikit dan tidak sengaja tertekan', d: ['Air kencing yang membasahi seluruh celana', 'Kotoran ayam yang menempel di sajadah', 'Jilatan anjing pada sarung'] }
    ]
  },
  {
    subtopic: 'Istinja\' dan Adab di Kamar Mandi',
    comp: 'Menerapkan tata cara istinja\' yang benar dan adab sunnah di kamar mandi',
    scenarios: [
      { q: 'Membersihkan kotoran yang keluar dari dua jalan (qubul dan dubur) menggunakan air atau batu disebut...', c: 'Istinja\'', d: ['Tayammum', 'Ghusl', 'Masah'] },
      { q: 'Benda selain air yang sah digunakan untuk beristinja\' saat tidak menemukan air harus memenuhi syarat...', c: 'Benda padat, suci, kasap/dapat membersihkan, dan tidak dimuliakan (seperti batu atau tisu)', d: ['Tulang sisa makanan dan kotoran kering', 'Kertas bertuliskan ayat Al-Qur\'an', 'Kaca licin dan logam mengkilap'] },
      { q: 'Jumlah minimal batu atau sisi pembersih yang digunakan saat beristinja\' dengan batu adalah sebanyak...', c: 'Tiga buah batu atau tiga kali usapan bersih', d: ['Satu usapan saja', 'Sepuluh kali', 'Tujuh batu besar'] },
      { q: 'Doa masuk kamar mandi diawali dengan memohon perlindungan kepada Allah dari kejahatan setan laki-laki dan setan perempuan, yaitu...', c: 'Allahumma inni a\'udzu bika minal khubutsi wal khaba\'its', d: ['Ghufranaka alhamdulillahil ladzi adzhaba \'annil adza', 'Bismillahi tawakkaltu \'alallah', 'Rabbana atina fid dunya hasanah'] },
      { q: 'Adab melangkah masuk ke dalam kamar mandi / toilet disunnahkan mendahulukan kaki...', c: 'Kaki kiri, dan keluar mendahulukan kaki kanan', d: ['Kaki kanan, dan keluar kaki kiri', 'Kedua kaki secara bersamaan', 'Kaki kanan saat masuk dan keluar'] },
      { q: 'Ketika berada di dalam kamar mandi atau toilet, seorang muslim dilarang untuk...', c: 'Berbicara, bersiul, bernyanyi, dan membawa benda bertuliskan asma Allah/ayat Al-Qur\'an', d: ['Menyiram kotoran dengan air', 'Menutup pintu toilet dengan rapat', 'Membasuh tubuh dengan sabun'] },
      { q: 'Ketika buang hajat di tempat terbuka (lapangan/padang pasir), dilarang menghadap atau membelakangi...', c: 'Arah kiblat (Ka\'bah)', d: ['Arah matahari terbit', 'Arah tiupan angin', 'Arah pegunungan'] },
      { q: 'Doa yang dibaca ketika keluar dari kamar mandi adalah mengucapkan syukur dan memohon ampunan, yaitu...', c: 'Ghufranaka, Alhamdulillahil ladzi adzhaba \'annil adza wa \'afani', d: ['Astaghfirullahal \'azim', 'Subhanallah wal hamdulillah', 'Allahumma barik lana fima razaqtana'] },
      { q: 'Dalam beristinja\', tangan yang digunakan untuk membasuh dan membersihkan kotoran adalah...', c: 'Tangan kiri', d: ['Tangan kanan', 'Kedua tangan secara bergantian', 'Tangan yang paling dominan'] },
      { q: 'Hikmah menjaga adab istinja\' dan kebersihan di kamar mandi adalah menjaga kesucian badan dari...', c: 'Percikan najis air kencing yang menjadi salah satu sebab utama siksa kubur', d: ['Rasa lapar dan haus', 'Kelelahan beraktivitas di siang hari', 'Gangguan flu biasa'] }
    ]
  },
  {
    subtopic: 'Wudhu: Rukun, Syarat, dan Pembatal',
    comp: 'Menganalisis rukun wudhu, syarat sah, sunnah, dan hal-hal yang membatalkan wudhu',
    scenarios: [
      { q: 'Bersuci dari hadas kecil untuk melaksanakan ibadah shalat dan thawaf dinamakan...', c: 'Wudhu', d: ['Mandi wajib', 'Istinja\'', 'Tayamum saja'] },
      { q: 'Jumlah rukun wudhu yang wajib dilaksanakan (apabila tertinggal salah satunya maka wudhu tidak sah) berjumlah...', c: '6 perkara', d: ['4 perkara', '8 perkara', '10 perkara'] },
      { q: 'Urutan rukun wudhu yang benar berdasarkan Surah Al-Ma\'idah ayat 6 adalah...', c: 'Niat, membasuh muka, membasuh kedua tangan hingga siku, mengusap sebagian kepala, membasuh kedua kaki hingga mata kaki, dan tertib', d: ['Membasuh muka, niat, kumur-kumur, membasuh telinga, dan membasuh kaki', 'Niat, mencuci tangan, mengusap telinga, membasuh kaki, dan tertib', 'Membasuh seluruh badan dari kepala hingga ujung kaki'] },
      { q: 'Niat berwudhu wajib dihadirkan di dalam hati secara bersamaan pada saat...', c: 'Pertama kali membasuh bagian muka/wajah', d: ['Mencuci kedua telapak tangan di awal wudhu', 'Berkumur-kumur', 'Mengusap sebagian kepala'] },
      { q: 'Batasan wajah yang wajib dibasuh saat berwudhu secara vertikal (panjang) adalah...', c: 'Dari tempat tumbuhnya rambut kepala normal hingga ke bawah dagu', d: ['Dari dahi hingga hidung saja', 'Dari pelipis mata hingga bibir atas', 'Seluruh kepala hingga pundak'] },
      { q: 'Batasan tangan yang wajib dibasuh air wudhu adalah dari ujung jari jemari sampai dengan...', c: 'Kedua siku tangan (melebihkan sedikit disunnahkan)', d: ['Pergelangan tangan saja', 'Pangkal lengan pundak', 'Telapak tangan saja'] },
      { q: 'Di bawah ini yang tergolong sunnah wudhu (bukan rukun) adalah...', c: 'Membaca basmalah, berkumur-kumur, menghirup air ke hidung, dan mengusap kedua telinga', d: ['Membasuh muka', 'Membasuh kedua kaki hingga mata kaki', 'Niat di dalam hati'] },
      { q: 'Melaksanakan rukun-rukun wudhu secara berurutan dari awal hingga akhir tanpa melompati urutan disebut...', c: 'Tertib', d: ['Muwalat', 'Tath-hir', 'Tasyrik'] },
      { q: 'Perkara berikut ini yang MEMBATALKAN wudhu seseorang adalah...', c: 'Keluarnya sesuatu dari qubul atau dubur (angin/kentut, air kencing, kotoran)', d: ['Makan sepiring nasi goreng hangat', 'Berbicara dengan teman sekelas', 'Memotong kuku tangan yang panjang'] },
      { q: 'Tidur yang TIDAK membatalkan wudhu menurut mazhab Syafi\'i adalah...', c: 'Tidur dalam posisi duduk menetapkan pantat pada lantai/alas duduk', d: ['Tidur berbaring miring di atas kasur', 'Tidur telentang di lantai karpet', 'Tidur tengkurap dengan nyenyak'] }
    ]
  },
  {
    subtopic: 'Tayammum: Sebab, Syarat, dan Tata Cara',
    comp: 'Menerapkan tata cara tayammum sebagai keringanan (rukhsah) pengganti wudhu/mandi',
    scenarios: [
      { q: 'Bersuci menggunakan debu atau tanah yang suci sebagai pengganti wudhu atau mandi wajib dinamakan...', c: 'Tayammum', d: ['Istinja\'', 'Tadarrus', 'Tawassul'] },
      { q: 'Sebab utama yang memperbolehkan seorang muslim bertayammum adalah...', c: 'Ketiadaan air setelah berusaha mencari, atau ada halangan sakit parah jika terkena air', d: ['Merasa malas mengambil air wudhu karena dingin', 'Kran air madrasah airnya mengalir pelan', 'Baju seragam baru disetrika'] },
      { q: 'Media yang sah digunakan untuk bertayammum menurut ketentuan syariat Islam adalah...', c: 'Debu tanah yang suci, kering, dan tidak bercampur kapur atau najis', d: ['Abu rokok dan serbuk kayu gergaji', 'Tepung terigu pembuat kue', 'Pasir pantai yang basah oleh air garam'] },
      { q: 'Jumlah rukun tayammum yang wajib dikerjakan terdiri dari...', c: 'Niat, mengusap muka dengan debu, mengusap kedua tangan hingga siku, dan tertib', d: ['Niat, mengusap muka, mengusap kaki, dan membasuh telinga', 'Niat, membasuh seluruh badan dengan debu, dan berwudhu lagi', 'Membaca doa keluar rumah dan bersujud'] },
      { q: 'Niat dalam tayammum bukan untuk "menghilangkan hadas", melainkan untuk...', c: 'Istibahatas-shalat (memperbolehkan shalat)', d: ['Menghilangkan najis berat', 'Menyucikan pakaian kotor', 'Menggantikan kewajiban puasa'] },
      { q: 'Berapa kali tepukan tangan ke debu yang disunnahkan dalam tata cara tayammum standar?', c: 'Dua kali tepukan (satu untuk muka, satu untuk kedua tangan)', d: ['Empat kali tepukan', 'Tujuh kali tepukan', 'Satu tepukan untuk seluruh tubuh'] },
      { q: 'Satu kali tayammum sah digunakan untuk melaksanakan...', c: 'Satu kali shalat fardhu dan beberapa shalat sunnah', d: ['Lima kali shalat fardhu berturut-turut seharian', 'Shalat fardhu selama satu bulan', 'Seluruh shalat wajib tanpa batas'] },
      { q: 'Hal yang MEMBATALKAN tayammum antara lain adalah...', c: 'Segala hal yang membatalkan wudhu dan melihat/menemukan air mutlak sebelum shalat dimulai', d: ['Mendengar adzan berkumandang', 'Membaca ayat Al-Qur\'an', 'Memakai peci songkok'] },
      { q: 'Seseorang yang sakit dan diperban lukanya, jika tidak boleh terkena air oleh dokter, maka anggota tubuh yang diperban cukup...', c: 'Diusap air di atas perban dan bertayammum untuk anggota yang sakit', d: ['Dibiarkan kotor tanpa shalat', 'Menunggu sembuh baru shalat setahun kemudian', 'Membasahi perban dengan air panas'] },
      { q: 'Rukhsah bertayammum merupakan bukti keindahan syariat Islam yang bersifat...', c: 'Memudahkan dan tidak memberatkan hamba-Nya (Taisir)', d: ['Menyulitkan orang yang sedang bepergian', 'Memaksa hamba beribadah tanpa aturan', 'Hanya berlaku untuk zaman kuno'] }
    ]
  },
  {
    subtopic: 'Shalat Fardhu: Waktu, Syarat Wajib, dan Syarat Sah',
    comp: 'Menganalisis ketentuan shalat lima waktu, syarat sah, dan syarat wajib shalat',
    scenarios: [
      { q: 'Shalat fardhu yang wajib dikerjakan oleh setiap muslim yang mukallaf dalam sehari semalam berjumlah...', c: '5 waktu dengan total 17 rakaat', d: ['3 waktu dengan total 10 rakaat', '7 waktu dengan total 25 rakaat', '4 waktu dengan total 12 rakaat'] },
      { q: 'Di bawah ini yang tergolong SYARAT WAJIB shalat (syarat yang mewajibkan seseorang shalat) adalah...', c: 'Islam, baligh (dewasa), dan berakal sehat', d: ['Menghadap kiblat dan menutup aurat', 'Masuk waktu shalat dan suci dari hadas', 'Berwudhu dengan air sumur'] },
      { q: 'Perbedaan antara "Syarat Wajib" dan "Syarat Sah" shalat adalah...', c: 'Syarat wajib menentukan siapa yang wajib shalat, sedangkan syarat sah menentukan apakah shalat yang dikerjakan diterima/sah', d: ['Syarat wajib dilakukan di dalam shalat, syarat sah di luar shalat', 'Syarat wajib untuk anak-anak, syarat sah untuk orang dewasa', 'Keduanya memiliki arti yang sama persis'] },
      { q: 'Di bawah ini yang tergolong SYARAT SAH shalat adalah...', c: 'Suci dari hadas besar dan kecil, suci badan/pakaian/tempat dari najis, menutup aurat, menghadap kiblat, dan telah masuk waktu', d: ['Berakal sehat dan baligh', 'Membaca niat dan takbiratul ihram', 'Melakukan rukuk dan sujud dengan thuma\'ninah'] },
      { q: 'Arah kiblat bagi umat Islam di seluruh penjuru dunia dalam melaksanakan ibadah shalat mengarah ke...', c: 'Ka\'bah di Masjidil Haram, Makkah Al-Mukarramah', d: ['Masjid Nabawi di Madinah', 'Masjid Al-Aqsha di Palestina', 'Makam para wali di Nusantara'] },
      { q: 'Waktu dimulainya pelaksanaan shalat Dzuhur ditandai dengan...', c: 'Tergelincirnya matahari dari tengah langit ke arah barat (Zawalusy-Syamsi)', d: ['Terbitnya fajar shadiq di ufuk timur', 'Hilangnya mega merah (syafaqul ahmar) di barat', 'Bayangan benda sama panjang dengan aslinya'] },
      { q: 'Waktu shalat Ashar dimulai ketika...', c: 'Bayangan suatu benda melebihi panjang benda aslinya hingga menjelang terbenam matahari', d: ['Matahari tepat berada di atas ubun-ubun', 'Munculnya bintang kejora di langit', 'Matahari mulai terbit sepenggalah'] },
      { q: 'Waktu shalat Maghrib dimulai sejak...', c: 'Terbenamnya seluruh piringan matahari di ufuk barat hingga hilangnya mega merah (syafaq ahmar)', d: ['Tengah malam pukul 24:00', 'Waktu sahur berkumandang', 'Pukul 17:00 sore tepat'] },
      { q: 'Waktu shalat Subuh dimulai sejak terbitnya fajar shadiq sampai dengan...', c: 'Terbitnya piringan matahari (Syuruq) di ufuk timur', d: ['Tergelincirnya matahari di siang hari', 'Tengah hari pukul 12:00', 'Matahari setinggi tombak'] },
      { q: 'Shalat fardhu yang memiliki jumlah rakaat ganjil (tiga rakaat) dalam shalat lima waktu adalah...', c: 'Shalat Maghrib', d: ['Shalat Subuh', 'Shalat Isya', 'Shalat Ashar'] }
    ]
  },
  {
    subtopic: 'Rukun Shalat: Fi\'li, Qauli, Qalbi, dan Pembatal Shalat',
    comp: 'Mengidentifikasi rukun qalbi, qauli, dan fi\'li dalam shalat serta perbuatan pembatalnya',
    scenarios: [
      { q: 'Rukun shalat yang pelaksanaannya dilakukan oleh hati (keyakinan batin) dinamakan rukun...', c: 'Qalbi (seperti niat dan tertib)', d: ['Fi\'li (gerakan badan)', 'Qauli (ucapan lisan)', 'Ma\'nawi'] },
      { q: 'Rukun shalat yang berupa gerakan perbuatan anggota badan secara lahiriah disebut rukun...', c: 'Fi\'li (seperti berdiri, rukuk, i\'tidal, sujud, dan duduk)', d: ['Qauli', 'Qalbi', 'Hukmi'] },
      { q: 'Rukun shalat yang berupa ucapan lisan yang wajib didengar oleh telinga sendiri (minimal lirih) disebut rukun...', c: 'Qauli (seperti takbiratul ihram, Al-Fatihah, tasyahud akhir, shalawat, dan salam pertama)', d: ['Fi\'li', 'Qalbi', 'Rukhsah'] },
      { q: 'Berhenti sejenak sekadar lamanya membaca "Subhanallah" pada saat rukuk, i\'tidal, sujud, dan duduk dinamakan...', c: 'Thuma\'ninah', d: ['Khusyuk', 'Tawadhu', 'Muraja\'ah'] },
      { q: 'Meninggalkan thuma\'ninah dalam rukuk dan sujud (shalat tergesa-gesa seperti ayam mematuk makanan) berakibat...', c: 'Shalatnya batal dan tidak sah', d: ['Mendapat pahala sunnah', 'Shalatnya tetap sah makruh', 'Hanya wajib sujud sahwi'] },
      { q: 'Gerakan takbir pembuka yang menandai dimulainya ibadah shalat dan mengharamkan perkara di luar shalat dinamakan...', c: 'Takbiratul Ihram', d: ['Takbir Intiqal', 'Takbir Hari Raya', 'Takbir Zikir'] },
      { q: 'Perbuatan berikut ini yang secara pasti MEMBATALKAN shalat adalah...', c: 'Berbicara sengaja dengan kata-kata manusia, terbuka aurat, makan minum, atau bergerak tiga kali berturut-turut', d: ['Memejamkan mata saat membaca surah', 'Melirik sedikit tanpa memalingkan dada dari kiblat', 'Menahan bersin'] },
      { q: 'Jika seorang muslim lupa rakaat shalat (ragu apakah sudah 3 atau 4 rakaat), kaidah fikih menuntunnya untuk...', c: 'Mengambil jumlah rakaat yang paling sedikit (yakin 3 rakaat) lalu menambah 1 rakaat dan sujud sahwi', d: ['Mengambil yang paling banyak lalu langsung salam', 'Membatalkan shalat dan pulang', 'Menanyakan kepada makmum di sebelahnya'] },
      { q: 'Bacaan "Tahiyyat" yang wajib dibaca sebagai rukun qauli shalat adalah...', c: 'Tasyahud Akhir (pada rakaat terakhir sebelum salam)', d: ['Tasyahud Awal (pada rakaat kedua shalat 4 rakaat)', 'Doa Iftitah', 'Doa Qunut'] },
      { q: 'Salam yang berkedudukan sebagai rukun shalat dan wajib dilakukan untuk mengakhiri shalat adalah...', c: 'Salam pertama menoleh ke arah kanan', d: ['Salam kedua menoleh ke arah kiri', 'Mengusap wajah dengan kedua tangan', 'Membaca doa sapujagat'] }
    ]
  },
  {
    subtopic: 'Sujud Sahwi, Sujud Tilawah, dan Sujud Syukur',
    comp: 'Membedakan sebab, bacaan, dan tata cara sujud sahwi, sujud tilawah, dan sujud syukur',
    scenarios: [
      { q: 'Sujud yang dilakukan sebanyak dua kali karena lupa meninggalkan sunnah ab\'adh atau ragu jumlah rakaat shalat disebut...', c: 'Sujud Sahwi', d: ['Sujud Tilawah', 'Sujud Syukur', 'Sujud Rukun'] },
      { q: 'Waktu pelaksanaan sujud sahwi menurut mazhab Syafi\'i adalah...', c: 'Di akhir shalat sesudah membaca tasyahud akhir sebelum membaca salam pertama', d: ['Setelah salam pertama', 'Pada saat rakaat pertama', 'Sebelum membaca Al-Fatihah'] },
      { q: 'Bacaan yang disunnahkan saat melakukan sujud sahwi adalah...', c: 'Subhana man la yanamu wa la yashu (Maha Suci Dzat yang tidak tidur dan tidak pernah lupa)', d: ['Subhana rabbiyal a\'la wa bihamdih', 'Rabbighfir li warhamni', 'Allahu Akbar kabira'] },
      { q: 'Sujud yang disunnahkan ketika membaca atau mendengar ayat sajadah di dalam Al-Qur\'an dinamakan...', c: 'Sujud Tilawah', d: ['Sujud Sahwi', 'Sujud Syukur', 'Sujud Thaharah'] },
      { q: 'Jumlah ayat sajadah yang tersebar di dalam mushaf Al-Qur\'an berjumlah...', c: '14 sampai 15 ayat', d: ['30 ayat', '10 ayat', '7 ayat'] },
      { q: 'Sujud yang dilakukan seorang muslim ketika mendapatkan nikmat kejutan yang besar atau terhindar dari marabahaya bencana disebut...', c: 'Sujud Syukur', d: ['Sujud Sahwi', 'Sujud Tilawah', 'Sujud Qashar'] },
      { q: 'Hukum melaksanakan sujud syukur di DALAM shalat fardhu adalah...', c: 'Haram dan membatalkan shalat (sujud syukur hanya boleh dilakukan di luar shalat)', d: ['Sunnah muakkadah', 'Wajib bagi yang mendapat nikmat', 'Mubah'] },
      { q: 'Jumlah sujud yang dilakukan pada sujud tilawah dan sujud syukur masing-masing adalah...', c: 'Satu kali sujud', d: ['Dua kali sujud', 'Tiga kali sujud', 'Empat kali sujud'] },
      { q: 'Contoh perkara sunnah Ab\'adh dalam shalat yang jika tertinggal disunnahkan sujud sahwi adalah...', c: 'Meninggalkan tasyahud awal atau meninggalkan doa qunut pada shalat Subuh', d: ['Meninggalkan doa iftitah', 'Lupa membaca surah pendek', 'Tidak mengangkat tangan saat takbir'] },
      { q: 'Syarat sah pelaksanaan sujud tilawah dan sujud syukur di luar shalat adalah...', c: 'Suci dari hadas dan najis, menutup aurat, dan menghadap kiblat', d: ['Harus didahului shalat dua rakaat', 'Boleh dilakukan tanpa berwudhu', 'Harus bersama imam berjamaah'] }
    ]
  },
  {
    subtopic: 'Shalat Berjamaah dan Pengaturan Shaf',
    comp: 'Menerapkan tata cara shalat berjamaah, kriteria imam, makmum masbuq, dan adab shaf',
    scenarios: [
      { q: 'Shalat yang dikerjakan bersama-sama oleh sekurang-kurangnya dua orang (satu imam dan satu makmum) dinamakan shalat...', c: 'Berjamaah', d: ['Munfarid (sendirian)', 'Khauf', 'Istisqa\''] },
      { q: 'Hukum melaksanakan shalat fardhu lima waktu secara berjamaah bagi kaum laki-laki di masjid adalah...', c: 'Fardhu Kifayah / Sunnah Mu\'akkadah yang sangat dianjurkan', d: ['Fardhu \'Ain bagi semua orang', 'Makruh jika tidak di rumah', 'Mubah'] },
      { q: 'Keutamaan shalat berjamaah dibanding shalat munfarid dilipatgandakan pahalanya sebanyak...', c: '27 derajat', d: ['10 derajat', '50 derajat', '7 derajat'] },
      { q: 'Kriteria utama yang paling berhak dipilih menjadi imam shalat berjamaah adalah orang yang...', c: 'Paling baik bacaan Al-Qur\'annya (tajwid & fasih) serta paling paham ilmu agama dan fikih shalat', d: ['Paling kaya hartanya di desa', 'Paling tua usianya meskipun bacaannya salah', 'Memiliki rumah paling dekat dengan masjid'] },
      { q: 'Seorang makmum yang terlambat datang dan mendapati imam sudah rukuk atau sesudahnya disebut makmum...', c: 'Masbuq', d: ['Muwafiq (makmum yang sempat membaca Fatihah bersama imam)', 'Munfarid', 'Imam badal'] },
      { q: 'Makmum masbuq dianggap MENDAPATKAN satu rakaat bersama imam apabila sempat...', c: 'Rukuk bersama imam dengan thuma\'ninah sebelum imam bangkit i\'tidal', d: ['Sujud kedua bersama imam', 'Duduk tasyahud akhir bersama imam', 'Mendengar salam imam'] },
      { q: 'Apabila imam shalat lupa rakaat atau salah gerakan, cara makmum laki-laki mengingatkan imam adalah dengan...', c: 'Membaca tasbih: "Subhanallah"', d: ['Bertepuk tangan (tashfiq)', 'Menepuk pundak imam', 'Berteriak menyebutkan kesalahan imam'] },
      { q: 'Sedangkan cara makmum wanita mengingatkan imam yang lupa gerakan shalat adalah dengan...', c: 'Tashfiq (menepukkan telapak tangan kanan ke punggung tangan kiri)', d: ['Mengucapkan "Subhanallah" dengan suara keras', 'Batuk buatan', 'Berdeham keras'] },
      { q: 'Pengaturan shaf shalat berjamaah yang benar adalah merapatkan dan meluruskan barisan, di mana shaf di belakang imam diisi oleh...', c: 'Laki-laki dewasa yang berilmu, kemudian anak-anak laki-laki, lalu shaf wanita di bagian belakang', d: ['Anak-anak kecil di depan imam', 'Wanita bercampur dengan laki-laki', 'Barisan renggang selebar satu meter'] },
      { q: 'Jika makmum hanya terdiri dari SATU ORANG laki-laki bersama imam, posisi berdirinya adalah di...', c: 'Sebelah kanan imam agak sedikit mundur ke belakang', d: ['Tepat di belakang imam lurus', 'Sebelah kiri imam sejajar', 'Dua meter di depan imam'] }
    ]
  },
  {
    subtopic: 'Adzan dan Iqamah: Lafadz dan Adab Menjawab',
    comp: 'Mengenal lafadz seruan adzan dan iqamah serta adab sunnah menjawab panggilan shalat',
    scenarios: [
      { q: 'Panggilan seruan agung dengan lafadz khusus untuk memberitahukan masuknya waktu shalat fardhu disebut...', c: 'Adzan', d: ['Iqamah', 'Khutbah', 'Tausiyah'] },
      { q: 'Orang yang mengumandangkan adzan dinamakan...', c: 'Muadzin', d: ['Imam', 'Khatib', 'Makmum'] },
      { q: 'Pemberitahuan bahwa shalat berjamaah akan segera dimulai dan jamaah diminta berdiri merapatkan shaf disebut...', c: 'Iqamah', d: ['Adzan', 'Tahlil', 'Tahmid'] },
      { q: 'Sahabat mulia yang pertama kali diangkat oleh Rasulullah SAW sebagai muadzin dalam sejarah Islam karena suaranya yang merdu dan lantang adalah...', c: 'Bilal bin Rabah radhiyallahu \'anhu', d: ['Abu Bakar Ash-Shiddiq r.a.', 'Ali bin Abi Thalib r.a.', 'Salman Al-Farisi r.a.'] },
      { q: 'Lafadz tambahan khusus yang hanya dikumandangkan pada adzan Subuh sebanyak dua kali adalah...', c: '"Ash-shalatu khairum minan-naum" (Shalat itu lebih baik daripada tidur)', d: ['"Hayya \'alas-salah"', '"Hayya \'alal-falah"', '"Qad qamatish-shalah"'] },
      { q: 'Ketika mendengar muadzin mengumandangkan seruan "Hayya \'alas-shalah" dan "Hayya \'alal-falah", adab sunnah menjawabnya adalah mengucapkan...', c: 'Laa hawla wa laa quwwata illaa billaahil \'aliyyil \'azhiim', d: ['Allahu Akbar Allahu Akbar', 'Shadaqta wa bararta', 'Asyhadu an la ilaha illallah'] },
      { q: 'Jawaban yang disunnahkan saat muadzin adzan Subuh mengucap "Ash-shalatu khairum minan-naum" adalah...', c: 'Shadaqta wa bararta wa ana \'ala dzalika minasy-syahidin', d: ['La haula wa la quwwata illa billah', 'Subhanallah wal hamdulillah', 'Allahu Akbar'] },
      { q: 'Waktu yang sangat mustajab (dikabulkan) untuk berdoa kepada Allah SWT antara lain adalah pada saat...', c: 'Antara adzan dan iqamah berkumandang', d: ['Saat shalat sedang rukuk', 'Saat imam membaca khutbah', 'Ketika sedang makan siang'] },
      { q: 'Setelah adzan selesai berkumandang, disunnahkan membaca shalawat Nabi dan doa setelah adzan yang memohonkan kedudukan wasilah bagi Nabi Muhammad SAW yaitu...', c: 'Allahumma rabba hadzihid-da\'watit-tammah...', d: ['Allahumma barik lana fima razaqtana...', 'Rabbana atina fid-dunya hasanah...', 'Allahumma inni as\'alukal \'afwa wal \'afiyah...'] },
      { q: 'Lafadz dalam iqamah yang berbunyi "Qad qamatish-shalah" memiliki arti...', c: 'Sungguh shalat telah didirikan', d: ['Marilah menuju kemenangan', 'Marilah mendirikan shalat', 'Allah Maha Besar'] }
    ]
  },
  {
    subtopic: 'Shalat Sunnah Rawatib, Dhuha, dan Tahajjud',
    comp: 'Menganalisis ketentuan shalat sunnah rawatib, dhuha, dan tahajjud serta keutamaannya',
    scenarios: [
      { q: 'Shalat sunnah yang waktu pelaksanaannya mengiringi shalat fardhu lima waktu (sebelum atau sesudahnya) dinamakan shalat sunnah...', c: 'Rawatib', d: ['Dhuha', 'Tahajjud', 'Istikharah'] },
      { q: 'Shalat sunnah rawatib yang dikerjakan SEBELUM shalat fardhu disebut shalat sunnah...', c: 'Qabliyah', d: ['Ba\'diyah', 'Mu\'akkad', 'Witir'] },
      { q: 'Shalat sunnah rawatib yang dikerjakan SETELAH shalat fardhu dinamakan shalat sunnah...', c: 'Ba\'diyah', d: ['Qabliyah', 'Dhuha', 'Tahiyyatul masjid'] },
      { q: 'Shalat fardhu yang TIDAK memiliki shalat sunnah Ba\'diyah adalah...', c: 'Shalat Subuh dan Shalat Ashar', d: ['Shalat Dzuhur dan Maghrib', 'Shalat Isya dan Dzuhur', 'Shalat Maghrib dan Isya'] },
      { q: 'Dua rakaat shalat sunnah Qabliyah Subuh (Fajar) memiliki keutamaan luar biasa menurut hadits Nabi SAW, yaitu lebih baik daripada...', c: 'Dunia beserta seluruh isinya (Khairum minad-dunya wa ma fiha)', d: ['Sepuluh ekor unta merah', 'Pahala ibadah haji sepuluh kali', 'Kekayaan raja dunia'] },
      { q: 'Shalat sunnah Dhuha dikerjakan pada pagi hari sejak matahari terbit setinggi tombak (sekitar jam 07:00) hingga...', c: 'Menjelang waktu Dzuhur (matahari tepat di atas kepala)', d: ['Matahari terbenam di ufuk barat', 'Waktu Ashar tiba', 'Tengah malam'] },
      { q: 'Jumlah rakaat shalat sunnah Dhuha paling sedikit adalah 2 rakaat dan dapat dikerjakan hingga...', c: '4, 8, sampai 12 rakaat', d: ['1 rakaat saja', 'Ganjil 3 rakaat', 'Harus 20 rakaat'] },
      { q: 'Shalat sunnah malam yang dikerjakan setelah shalat Isya dan HARUS didahului dengan tidur terlebih dahulu disebut shalat...', c: 'Tahajjud', d: ['Tarawih', 'Witir', 'Tasbih'] },
      { q: 'Waktu yang paling utama (sepertiga malam terakhir) untuk melaksanakan shalat Tahajjud berkisar antara pukul...', c: '01:00 dini hari hingga menjelang waktu Subuh', d: ['Pukul 19:30 malam', 'Pukul 21:00 malam', 'Setelah shalat Subuh'] },
      { q: 'Keutamaan melaksanakan shalat Tahajjud ditegaskan dalam Surah Al-Isra\' ayat 79, yaitu Allah akan mengangkat derajatnya ke...', c: 'Maqaman Mahmuda (tempat terpuji dan mulia)', d: ['Menjadi penguasa bumi', 'Bebas dari segala kesulitan hidup', 'Menjadi kebal senjata'] }
    ]
  },
  {
    subtopic: 'Shalat Sunnah Khusus: Tarawih, Witir, dan Hari Raya',
    comp: 'Menganalisis ketentuan shalat tarawih, witir, dan shalat hari raya Idain',
    scenarios: [
      { q: 'Shalat sunnah malam yang khusus dikerjakan hanya pada malam-malam bulan suci Ramadan dinamakan shalat...', c: 'Tarawih (Qiyamu Ramadan)', d: ['Tahajjud', 'Dhuha', 'Kusuf'] },
      { q: 'Shalat sunnah penutup rangkaian shalat malam yang jumlah rakaatnya selalu ganjil (1, 3, 5 rakaat) dinamakan shalat...', c: 'Witir', d: ['Tarawih', 'Rawatib', 'Tasbih'] },
      { q: 'Pelaksanaan shalat Tarawih disunnahkan dikerjakan dengan cara setiap...', c: 'Dua rakaat salam', d: ['Empat rakaat tanpa tasyahud awal', 'Sepuluh rakaat sekaligus', 'Satu rakaat salam'] },
      { q: 'Shalat sunnah dua rakaat yang dilaksanakan pada tanggal 1 Syawal secara berjamaah di lapangan atau masjid adalah shalat...', c: 'Idul Fitri', d: ['Idul Adha', 'Jumat', 'Istisqa\''] },
      { q: 'Shalat sunnah Idul Adha dilaksanakan pada tanggal...', c: '10 Dzulhijjah', d: ['1 Syawal', '12 Rabiul Awwal', '1 Muharram'] },
      { q: 'Jumlah takbir zawa\'id (takbir tambahan) pada rakaat pertama shalat Id (setelah takbiratul ihram) adalah sebanyak...', c: '7 kali takbir', d: ['5 kali takbir', '3 kali takbir', '10 kali takbir'] },
      { q: 'Jumlah takbir zawa\'id pada rakaat kedua shalat Id (setelah takbir bangkit dari sujud) adalah sebanyak...', c: '5 kali takbir', d: ['7 kali takbir', '3 kali takbir', '4 kali takbir'] },
      { q: 'Di antara dua takbir tambahan pada shalat Id disunnahkan membaca tasbih dan tahmid, yaitu...', c: 'Subhanallah wal hamdulillah wa la ilaha illallah wallahu akbar', d: ['Rabbana atina fid-dunya hasanah', 'Astaghfirullah wa atubu ilaih', 'La hawla wa la quwwata illa billah'] },
      { q: 'Perbedaan urutan antara shalat Idul Fitri/Adha dengan shalat Jumat adalah...', c: 'Pada shalat Id shalat dikerjakan terlebih dahulu baru kemudian khutbah, sedangkan shalat Jumat khutbah dulu baru shalat', d: ['Shalat Id tidak ada khutbah sama sekali', 'Shalat Jumat tidak memakai adzan', 'Shalat Id dikerjakan sendirian'] },
      { q: 'Sunnah yang dianjurkan sebelum berangkat menuju tempat shalat Idul Fitri adalah...', c: 'Makan sedikit kurma/makanan terlebih dahulu sebagai tanda telah berbuka dari puasa Ramadan', d: ['Berpuasa hingga sore hari', 'Membawa hewan sembelihan', 'Menutup pintu rumah rapat-rapat'] }
    ]
  },
  {
    subtopic: 'Keringanan Shalat (Rukhsah): Jamak dan Qashar',
    comp: 'Menerapkan tata cara shalat jamak dan qashar bagi musafir sesuai kaidah syariat',
    scenarios: [
      { q: 'Mengumpulkan dua shalat fardhu dan mengerjakannya dalam satu waktu sekaligus dinamakan shalat...', c: 'Jamak', d: ['Qashar', 'Qadha', 'Munfarid'] },
      { q: 'Meringkas jumlah rakaat shalat fardhu yang empat rakaat (Dzuhur, Ashar, Isya) menjadi dua rakaat disebut shalat...', c: 'Qashar', d: ['Jamak', 'Khauf', 'Fajar'] },
      { q: 'Shalat fardhu yang BOLEH diqashar rakaatnya hanyalah shalat yang berjumlah empat rakaat, yaitu...', c: 'Dzuhur, Ashar, dan Isya', d: ['Maghrib, Isya, dan Subuh', 'Subuh dan Dzuhur saja', 'Semua shalat fardhu'] },
      { q: 'Shalat Subuh dan shalat Maghrib TIDAK BOLEH diqashar karena rakaatnya masing-masing adalah...', c: 'Dua rakaat (Subuh) dan tiga rakaat (Maghrib)', d: ['Empat rakaat', 'Satu rakaat', 'Lima rakaat'] },
      { q: 'Menggabungkan shalat Dzuhur dan Ashar lalu mengerjakannya pada waktu DZUHUR disebut shalat Jamak...', c: 'Taqdim (didahulukan)', d: ['Ta\'khir (diakhirkan)', 'Qashar mutlak', 'I\'adah'] },
      { q: 'Menggabungkan shalat Maghrib dan Isya lalu mengerjakannya pada waktu ISYA disebut shalat Jamak...', c: 'Ta\'khir (diakhirkan)', d: ['Taqdim', 'Istisqa\'', 'Qadha'] },
      { q: 'Jarak minimal perjalanan musafir yang memperbolehkan pelaksanaan shalat qashar menurut ukuran modern adalah sekitar...', c: '81 hingga 85 kilometer (dua marhalah)', d: ['10 kilometer', '5 kilometer', '200 kilometer'] },
      { q: 'Syarat sah musafir boleh mengqashar shalat adalah perjalanannya BUKAN bertujuan untuk...', c: 'Kemaksiatan atau perbuatan dosa', d: ['Menuntut ilmu agama', 'Silaturahmi keluarga', 'Berniaga halal'] },
      { q: 'Dalam shalat Jamak Taqdim antara Dzuhur dan Ashar, urutan pelaksanaannya adalah...', c: 'Mengerjakan shalat Dzuhur terlebih dahulu baru kemudian shalat Ashar', d: ['Boleh shalat Ashar dulu baru Dzuhur', 'Dikerjakan secara bercampur aduk', 'Dilakukan sekaligus dalam 8 rakaat'] },
      { q: 'Jika seorang musafir menjadi makmum shalat di belakang seorang imam yang mukim (penduduk setempat tidak bepergian), maka musafir tersebut...', c: 'Wajib menyempurnakan shalatnya menjadi empat rakaat penuh (tidak boleh mengqashar)', d: ['Boleh salam duluan pada rakaat kedua', 'Shalatnya menjadi batal', 'Boleh duduk menunggu imam selesai'] }
    ]
  },
  {
    subtopic: 'Zakat Fitrah: Syarat, Waktu, Ukuran, dan Mustahik',
    comp: 'Menganalisis ketentuan zakat fitrah, besaran makanan pokok, waktu pembayaran, dan asnaf 8',
    scenarios: [
      { q: 'Zakat yang wajib dikeluarkan oleh setiap muslim pada bulan Ramadan menjelang hari raya Idul Fitri untuk menyucikan jiwa dinamakan zakat...', c: 'Zakat Fitrah (Zakat Nafs)', d: ['Zakat Mal (Harta)', 'Zakat Tijarah (Perniagaan)', 'Zakat Zira\'ah (Pertanian)'] },
      { q: 'Tujuan utama pensyariatan zakat fitrah menurut hadits Rasulullah SAW adalah untuk...', c: 'Menyucikan orang yang berpuasa dari perbuatan sia-sia dan memberi makan orang-orang miskin', d: ['Menambah kas pembangunan gedung madrasah', 'Membayar gaji tentara perang', 'Membeli perhiasan hari raya'] },
      { q: 'Bahan yang dikeluarkan untuk membayar zakat fitrah adalah berupa...', c: 'Makanan pokok yang biasa dikonsumsi penduduk setempat (seperti beras di Indonesia atau gandum/kurma)', d: ['Pakaian seragam baru', 'Uang mainan', 'Buku tulis dan pensil'] },
      { q: 'Kadar ukuran zakat fitrah untuk setiap jiwa (orang) menurut takaran syariat adalah 1 sha\', yang setara dengan...', c: '2,5 kilogram atau 3,5 liter beras', d: ['1 kilogram beras', '10 kilogram beras', '500 gram beras'] },
      { q: 'Waktu AFDHOL (paling utama) untuk mengeluarkan zakat fitrah adalah...', c: 'Pada pagi hari raya Idul Fitri setelah shalat Subuh sebelum pelaksanaan shalat Id', d: ['Pada awal malam pertama bulan Ramadan', 'Pertengahan bulan Sya\'ban', 'Setelah matahari terbenam pada hari raya'] },
      { q: 'Waktu yang DIHARAMKAN mengeluarkan zakat fitrah karena statusnya berubah menjadi sedekah biasa (berdosa) adalah...', c: 'Setelah terbenamnya matahari pada hari raya Idul Fitri (1 Syawal) tanpa uzur syar\'i', d: ['Sebelum shalat Id', 'Dua hari sebelum Idul Fitri', 'Malam hari raya'] },
      { q: 'Orang yang wajib membayarkan zakat fitrah adalah setiap muslim yang pada malam hari raya memiliki...', c: 'Kelebihan makanan pokok untuk kebutuhan dirinya dan keluarganya selama sehari semalam', d: ['Tabungan emas ratusan gram', 'Mobil mewah dan rumah bertingkat', 'Gelar sarjana pendidikan'] },
      { q: 'Golongan orang yang berhak menerima zakat (Mustahik) disebutkan dalam Surah At-Taubah ayat 60 berjumlah...', c: '8 asnaf (golongan)', d: ['4 golongan', '10 golongan', '12 golongan'] },
      { q: 'Delapan asnaf penerima zakat antara lain: fakir, miskin, amil (pengurus zakat), mualaf, riqab (budak), gharimin (orang berhutang), fi sabilillah, dan...', c: 'Ibnu Sabil (musafir kehabisan bekal)', d: ['Orang kaya raya', 'Anak saudagar', 'Guru madrasah yang mampu'] },
      { q: 'Perbedaan antara orang "Fakir" dan orang "Miskin" dalam kajian fikih zakat adalah...', c: 'Orang fakir tidak memiliki penghasilan dan harta sama sekali (sangat kekurangan), sedangkan orang miskin punya penghasilan tapi tidak mencukupi kebutuhan pokoknya', d: ['Fakir lebih kaya daripada miskin', 'Miskin tidak boleh menerima zakat', 'Fakir hanya ada di zaman nabi'] }
    ]
  },
  {
    subtopic: 'Puasa Ramadan: Syarat, Rukun, Sunnah, dan Pembatal',
    comp: 'Menganalisis hukum puasa Ramadan, syarat wajib, rukun, hal yang membatalkan, dan fidyah/qadha',
    scenarios: [
      { q: 'Menahan diri dari makan, minum, dan segala hal yang membatalkan mulai dari terbit fajar shadiq hingga terbenam matahari disertai niat disebut...', c: 'Puasa (Shaum / Shiyam)', d: ['Iktikaf', 'Zuhud', 'Rukhsah'] },
      { q: 'Kewajiban menjalankan ibadah puasa di bulan Ramadan bagi orang-orang yang beriman termaktub dalam Al-Qur\'an Surah...', c: 'Al-Baqarah ayat 183', d: ['Al-Ma\'idah ayat 3', 'Ali \'Imran ayat 102', 'An-Nisa ayat 59'] },
      { q: 'Tujuan utama diwajibkannya ibadah puasa Ramadan adalah agar orang beriman mencapai derajat...', c: 'Takwa kepada Allah SWT (La\'allakum tattaqun)', d: ['Kekayaan harta duniawi', 'Kekuatan fisik seperti atlet', 'Ketenaran di kalangan manusia'] },
      { q: 'Dua rukun puasa yang wajib dipenuhi agar puasa sah adalah...', c: 'Niat pada malam hari sebelum fajar dan menahan diri dari segala yang membatalkan sejak terbit fajar hingga Maghrib', d: ['Makan sahur dan berbuka puasa', 'Shalat tarawih dan iktikaf', 'Mandi keramas dan tadarus'] },
      { q: 'Waktu berniat puasa Ramadan (Tabyitun Niyyah) menurut mazhab Syafi\'i wajib dilakukan pada...', c: 'Malam hari sebelum terbitnya fajar shadiq untuk setiap hari puasa', d: ['Siang hari jam 12:00', 'Setelah berbuka puasa kemarin', 'Cukup sekali di awal tahun'] },
      { q: 'Makan di waktu dini hari sebelum terbit fajar dengan tujuan memperkuat stamina tubuh saat berpuasa dinamakan...', c: 'Sahur', d: ['Iftar', 'Wudhu', 'Walimah'] },
      { q: 'Perkara berikut yang MEMBATALKAN puasa seseorang adalah...', c: 'Memasukkan makanan/minuman secara sengaja ke dalam rongga terbuka, muntah dengan sengaja, dan haid/nifas', d: ['Mandi basah di siang hari untuk menyegarkan badan', 'Menggosok gigi tanpa menelan pasta gigi', 'Lupa makan/minum karena benar-benar tidak ingat sedang puasa'] },
      { q: 'Jika seseorang makan atau minum dalam keadaan BENAR-BENAR LUPA bahwa dirinya sedang berpuasa, maka status puasanya...', c: 'Tetap sah dan wajib melanjutkan puasanya karena itu adalah rezeki dari Allah', d: ['Batal dan wajib membayar kafarat', 'Batal dan wajib mengqadha hari itu', 'Menjadi makruh tahrim'] },
      { q: 'Orang tua renta yang sudah tidak mampu lagi berpuasa diberikan keringanan untuk tidak berpuasa dengan menggantinya membayar...', c: 'Fidyah (memberi makan satu mud bahan pokok per hari kepada fakir miskin)', d: ['Kafarat memerdekakan budak', 'Menyembelih seekor sapi', 'Tidak perlu membayar apapun'] },
      { q: 'Sunnah yang sangat dianjurkan saat waktu berbuka puasa tiba adalah...', c: 'Menyegerakan berbuka (Ta\'jilul ifthar) dengan kurma manis atau air putih serta membaca doa', d: ['Menunda berbuka hingga shalat Maghrib selesai', 'Makan makanan yang sangat pedas', 'Tidur hingga waktu Isya'] }
    ]
  }
];

function generateFikihMI() {
  return buildUniqueSubjectBank({
    subjectId: 'fikih',
    subjectName: 'Fikih MI',
    categoryId: 'rumpun_pai',
    categoryName: 'Rumpun PAI MI',
    akgtkCategory: 'Rumpun PAI',
    educationLevel: 'MI',
    idPrefix: 'mi-fk-',
    totalTarget: 150,
    generator: (i, diff, num) => {
      const topicIndex = i % topics.length; // 0..14
      const scenarioIndex = Math.floor(i / topics.length); // 0..9
      const topic = topics[topicIndex];
      const sc = topic.scenarios[scenarioIndex];

      return {
        subtopic: topic.subtopic,
        competency: topic.comp,
        question: `[Asesmen Fikih Ibadah MI Soal #${num} - ${topic.subtopic}]\n${sc.q}`,
        correctText: sc.c,
        distractors: sc.d,
        explanation: `Jawaban benar: "${sc.c}". Sesuai dengan materi kompetensi "${topic.comp}" pada subtopik fikih ${topic.subtopic}.`,
        tip: `Perhatikan syarat sah, rukun, sunnah, dan pembatal ibadah sesuai kaidah fikih mazhab Syafi'i.`
      };
    }
  });
}

module.exports = {
  generateFikihMI
};
