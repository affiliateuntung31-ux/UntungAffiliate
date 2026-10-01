// Generator for Akidah Akhlak MI (150 Soal Unik)
const { buildUniqueSubjectBank } = require('./generate_all_subjects_master.cjs');

const topics = [
  {
    subtopic: 'Kalimah Thayyibah: Basmalah, Hamdalah, dan Ta\'awudz',
    comp: 'Menerapkan pelafalan dan keutamaan kalimah thayyibah dalam kehidupan sehari-hari',
    scenarios: [
      { q: 'Sebelum memulai aktivitas belajar, makan, atau membaca Al-Qur\'an, seorang muslim disunnahkan membaca...', c: 'Bismillahir rahmanir rahim', d: ['Alhamdulillahirabbil \'alamin', 'Innalillahi wa inna ilaihi raji\'un', 'La haula wa la quwwata illa billah'] },
      { q: 'Ketika selesai mengerjakan tugas asesmen madrasah atau mendapat nikmat keberhasilan, ungkapan rasa syukur yang dilafadzkan adalah...', c: 'Alhamdulillahirabbil \'alamin', d: ['Astagfirullahal \'adzim', 'Subhanallah', 'Allahu Akbar'] },
      { q: 'Lafadz bacaan ta\'awudz (isti\'adzah) yang dibaca untuk memohon perlindungan dari godaan setan adalah...', c: 'A\'udzu billahi minasy-syaithanir rajim', d: ['Subhanallah wal hamdulillah', 'La ilaha illallah', 'Bismillahi tawakkaltu \'alallah'] },
      { q: 'Kalimah thayyibah Basmalah mengajarkan kepada setiap muslim bahwa segala perbuatan baik harus diniatkan...', c: 'Ikhlas semata-mata karena dan dengan menyebut nama Allah Yang Maha Pengasih lagi Penyayang', d: ['Untuk mendapatkan imbalan uang dari orang tua', 'Supaya dipuji oleh bapak ibu guru', 'Agar terkenal di madrasah'] },
      { q: 'Setiap urusan atau perbuatan baik yang tidak diawali dengan bacaan bismillah menurut hadits Nabi SAW akan...', c: 'Terputus dari nilai keberkahannya', d: ['Dibatalkan oleh malaikat', 'Dikenai sanksi madrasah', 'Menimbulkan rasa kantuk'] },
      { q: 'Arti dari kalimah thayyibah Hamdalah "Alhamdulillahirabbil \'alamin" adalah...', c: 'Segala puji bagi Allah, Tuhan seluruh alam semesta', d: ['Dengan nama Allah Yang Maha Pengasih', 'Maha Suci Allah dari segala kekurangan', 'Tidak ada daya dan upaya selain milik Allah'] },
      { q: 'Waktu yang paling tepat untuk membaca kalimah ta\'awudz adalah...', c: 'Sebelum memulai membaca ayat suci Al-Qur\'an dan saat merasa diganggu bisikan marah', d: ['Setelah selesai makan kenyang', 'Saat mendengar petir menggelegar', 'Saat bangun tidur di pagi hari'] },
      { q: 'Membiasakan lisan mengucap kalimah thayyibah sejak usia dini di madrasah bertujuan untuk...', c: 'Mendekatkan hati kepada Allah dan menghiasi lisan dengan zikir yang berpahala', d: ['Mengurangi waktu belajar sains', 'Menggantikan kewajiban shalat fardhu', 'Mendapatkan nilai rapor instan'] },
      { q: 'Lafadz "Bismillah" disebut juga sebagai kalimah...', c: 'Tasmiyah', d: ['Tahlil', 'Tahmid', 'Takbir'] },
      { q: 'Orang yang senantiasa mengucapkan hamdalah saat memperoleh nikmat sekecil apapun akan...', c: 'Ditambah nikmatnya oleh Allah SWT', d: ['Kehilangan rezeki berikutnya', 'Dijauhi oleh teman-temannya', 'Menjadi sombong'] }
    ]
  },
  {
    subtopic: 'Kalimah Thayyibah: Tasbih, Tahlil, Takbir, dan Hauqalah',
    comp: 'Menerapkan pelafalan zikir tasbih, tahlil, takbir, dan hauqalah pada situasi yang tepat',
    scenarios: [
      { q: 'Ketika melihat pemandangan alam ciptaan Allah yang luar biasa indah atau menyaksikan keajaiban, kalimah zikir yang diucapkan adalah...', c: 'Subhanallah (Maha Suci Allah)', d: ['Innalillahi wa inna ilaihi raji\'un', 'La haula wa la quwwata illa billah', 'Astaghfirullahal \'azim'] },
      { q: 'Kalimah Tahlil yang merupakan inti pokok ajaran tauhid Islam adalah lafadz...', c: 'Laa ilaaha illallah', d: ['Allahu Akbar', 'Subhanallah', 'Alhamdulillah'] },
      { q: 'Ketika mendengar suara guntur menggelegar atau mengagungkan kebesaran Allah SWT dalam shalat, lafadz yang diucapkan adalah...', c: 'Allahu Akbar (Allah Maha Besar)', d: ['Samiallahu liman hamidah', 'Subhana rabbiyal \'ala', 'Bismillah'] },
      { q: 'Lafadz kalimah Hauqalah yang menjadi simpanan perbendaharaan surga berbunyi...', c: 'Laa hawla wa laa quwwata illaa billaahil \'aliyyil \'azhiim', d: ['Hasbunallah wa ni\'mal wakil', 'Rabbana atina fid-dunya hasanah', 'Subhanallahi wa bihamdihi'] },
      { q: 'Arti dari kalimah Hauqalah "La haula wa la quwwata illa billah" adalah...', c: 'Tidak ada daya untuk menjauhi maksiat dan tidak ada kekuatan untuk taat melainkan dengan pertolongan Allah', d: ['Allah Maha Besar dan Maha Mengetahui rahasia langit', 'Segala puji hanya bagi Allah Tuhan semesta alam', 'Maha Suci Engkau wahai Tuhan kami'] },
      { q: 'Kalimah Hauqalah sangat dianjurkan dibaca saat seseorang sedang...', c: 'Menghadapi kesulitan berat, ujian hidup, atau memohon kekuatan dalam berikhtiar', d: ['Mendapat hadiah juara lomba', 'Melihat keindahan bunga mekar', 'Selesai makan kenyang'] },
      { q: 'Kalimah Tahlil "La ilaha illallah" memiliki dua rukun utama yaitu Nafi (peniadaan) dan Itsbat (penetapan). Yang dimaksud Itsbat adalah...', c: 'Menetapkan bahwa hanya Allah satu-satunya Tuhan yang berhak disembah (illallah)', d: ['Meniadakan seluruh tuhan palsu (la ilaha)', 'Menetapkan bahwa malaikat berhak disembah', 'Menolak semua syariat'] },
      { q: 'Ketika Bilal bin Rabah disiksa di padang pasir terik oleh Umayyah bin Khalaf, beliau teguh melafadzkan kalimah tauhid...', c: '"Ahad, Ahad!" (Allah Maha Esa)', d: ['"Aku menyerah!"', '"Bebaskan aku!"', '"Kembalikan hartaku!"'] },
      { q: 'Zikir membaca Subhanallah sebanyak 33 kali, Alhamdulillah 33 kali, dan Allahu Akbar 33 kali disunnahkan dibaca setelah...', c: 'Selesai melaksanakan shalat fardhu lima waktu', d: ['Bangun tidur tengah malam', 'Sebelum masuk ke kamar mandi', 'Setelah berolahraga'] },
      { q: 'Ucapan "Subhanallah" memiliki makna penyucian bahwa Allah SWT...', c: 'Maha Suci dari segala sifat kekurangan, kelemahan, dan sekutu', d: ['Maha Pengampun atas dosa syirik', 'Membutuhkan bantuan para malaikat', 'Sama dengan makhluk-Nya'] }
    ]
  },
  {
    subtopic: 'Kalimah Thayyibah: Tarji\' dan Istighfar',
    comp: 'Menerapkan sikap sabar dengan tarji\' dan rendah hati melalui istighfar',
    scenarios: [
      { q: 'Lafadz kalimah Tarji\' (istirja\') yang disunnahkan dibaca ketika mendengar kabar duka musibah atau kehilangan adalah...', c: 'Inna lillahi wa inna ilaihi raji\'un', d: ['Subhanallah wal hamdulillah', 'Hasbunallahu wa ni\'mal wakil', 'La haula wa la quwwata illa billah'] },
      { q: 'Arti dari kalimah Tarji\' "Inna lillahi wa inna ilaihi raji\'un" adalah...', c: 'Sesungguhnya kami adalah milik Allah dan sesungguhnya hanya kepada-Nya kami akan kembali', d: ['Maha Suci Allah yang telah menciptakan kematian', 'Segala puji bagi Allah atas segala keadaan', 'Ya Allah ampunilah dosaku yang telah lalu'] },
      { q: 'Sikap seorang muslim sejati ketika tertimpa musibah (seperti sakit, kehilangan barang, atau bencana) adalah...', c: 'Bersabar, melafadzkan istirja\', dan berprasangka baik bahwa ada hikmah di balik takdir Allah', d: ['Marah-marah dan menyalahkan takdir Allah', 'Menangis histeris sambil merusak barang', 'Berputus asa dari rahmat Allah'] },
      { q: 'Lafadz istighfar yang paling sederhana untuk memohon ampunan kepada Allah atas dosa dan kekhilafan adalah...', c: 'Astaghfirullahal \'azhim', d: ['Subhanallah wa bihamdihi', 'Allahu Akbar kabira', 'La ilaha illa anta'] },
      { q: 'Nabi Muhammad SAW yang maksum (terpelihara dari dosa) memberi teladan beristighfar dan bertaubat kepada Allah setiap hari sebanyak...', c: 'Lebih dari 70 hingga 100 kali', d: ['Tiga kali saja', 'Hanya di bulan Ramadan', 'Sekali seumur hidup'] },
      { q: 'Manfaat membiasakan membaca istighfar dalam kehidupan sehari-hari antara lain...', c: 'Menghapus dosa, membersihkan hati dari noda hitam, dan membuka pintu kelapangan rezeki', d: ['Mendapatkan kekebalan tubuh tanpa obat', 'Mengetahui masa depan orang lain', 'Menjadi kebal dari rasa lapar'] },
      { q: 'Ketika seorang anak madrasah tanpa sengaja menumpahkan air minum milik temannya, sikap terpuji yang dilakukannya adalah...', c: 'Memohon maaf dengan tulus, membaca istighfar, dan segera membantu membersihkan tumpahan', d: ['Lari meninggalkan kelas agar tidak ketahuan', 'Menuduh teman lain yang menumpahkannya', 'Mengejek temannya yang basah'] },
      { q: 'Sayyidul Istighfar (tuannya doa istighfar) diajarkan Rasulullah SAW, diawali dengan lafadz...', c: '"Allahumma anta Rabbi, la ilaha illa anta, khalaqtani wa ana \'abduka..."', d: ['"Rabbana zhalamna anfusana wa il-lam taghfir lana..."', '"Astaghfirullah wa atubu ilaih"', '"Allahummaghfir li waliwalidayya"'] },
      { q: 'Pahala bagi hamba Allah yang bersabar saat tertimpa musibah dan mengucap istirja\' adalah...', c: 'Mendapat keberkahan, rahmat, petunjuk, dan rumah pujian (Baitul Hamdi) di surga', d: ['Diberi kekayaan emas di dunia secara langsung', 'Bebas dari kewajiban berpuasa', 'Boleh meninggalkan shalat fardhu'] },
      { q: 'Waktu terbaik untuk melafadzkan istighfar dengan khusyuk adalah...', c: 'Pada waktu sahur (sepertiga malam terakhir) dan setelah selesai shalat', d: ['Saat sedang makan siang di kantin', 'Ketika sedang bermain sepak bola', 'Saat menonton hiburan'] }
    ]
  },
  {
    subtopic: 'Asmaul Husna: Ar-Rahman, Ar-Rahim, Al-Malik, dan Al-Quddus',
    comp: 'Mengenal makna dan meneladani sifat Asmaul Husna Ar-Rahman, Ar-Rahim, Al-Malik, Al-Quddus',
    scenarios: [
      { q: 'Jumlah nama-nama indah dan agung bagi Allah (Asmaul Husna) yang termaktub dalam hadits Nabi berjumlah...', c: '99 nama', d: ['25 nama', '114 nama', '66 nama'] },
      { q: 'Asmaul Husna "Ar-Rahman" memiliki makna bahwa Allah Maha...', c: 'Pengasih kepada seluruh makhluk di dunia tanpa terkecuali', d: ['Penyayang khusus kepada orang mukmin di akhirat', 'Maha Raja Penguasa jagad raya', 'Maha Mengetahui segala rahasia'] },
      { q: 'Perbedaan utama antara sifat "Ar-Rahman" dan "Ar-Rahim" adalah...', c: 'Ar-Rahman berlaku bagi semua makhluk di dunia, sedangkan Ar-Rahim khusus kasih sayang bagi kaum beriman di akhirat', d: ['Ar-Rahman untuk manusia, Ar-Rahim untuk malaikat', 'Ar-Rahman di akhirat, Ar-Rahim di dunia', 'Tidak ada perbedaan makna sama sekali'] },
      { q: 'Asmaul Husna "Al-Malik" artinya adalah...', c: 'Maha Merajai / Maha Penguasa mutlak atas seluruh alam semesta', d: ['Maha Suci dari segala aib', 'Maha Menghidupkan makhluk', 'Maha Pengampun segala dosa'] },
      { q: 'Cara seorang siswa MI meneladani sifat "Al-Malik" dalam pergaulan di madrasah adalah...', c: 'Mampu memimpin dan mengendalikan hawa nafsu dari perbuatan tercela dan bersikap adil', d: ['Bersikap otoriter dan suka memerintah teman dengan kasar', 'Merasa dirinya paling hebat di kelas', 'Memaksa teman memberikan uang jajan'] },
      { q: 'Asmaul Husna "Al-Quddus" artinya adalah...', c: 'Maha Suci dari segala kekurangan, cela, dan kelemahan', d: ['Maha Kuasa atas segala takdir', 'Maha Lembut kepada hamba-Nya', 'Maha Memberi rasa aman'] },
      { q: 'Contoh perilaku meneladani Asmaul Husna "Al-Quddus" di lingkungan madrasah adalah...', c: 'Menjaga kesucian hati dari dengki serta menjaga kebersihan pakaian dan ruang kelas', d: ['Membeli barang-barang mewah baru', 'Hanya berteman dengan orang kaya', 'Tidak mau berbicara dengan orang lain'] },
      { q: 'Meneladani sifat "Ar-Rahman" di madrasah diwujudkan melalui perbuatan...', c: 'Menyayangi seluruh teman tanpa membeda-bedakan suku, rupa, atau status sosial', d: ['Memberi contekan jawaban saat ujian', 'Hanya menolong sahabat terdekat saja', 'Memusuhi orang yang berbeda pendapat'] },
      { q: 'Allah SWT menguasai hari pembalasan (Maliki yaumid-din). Hal ini membuktikan bahwa kekuasaan para raja di dunia...', c: 'Bersifat fana (sementara) dan tunduk di bawah kekuasaan mutlak Allah Al-Malik', d: ['Lebih hebat daripada kekuasaan Allah', 'Akan kekal abadi selamanya', 'Tidak akan dimintai pertanggungjawaban'] },
      { q: 'Doa yang diajarkan Rasulullah setelah shalat witir dengan menyebut Asmaul Husna Al-Quddus adalah...', c: 'Subhanal malikil quddus', d: ['Bismillahi tawakkaltu \'alallah', 'La hawla wa la quwwata illa billah', 'Astaghfirullahal \'azim'] }
    ]
  },
  {
    subtopic: 'Asmaul Husna: As-Salam, Al-Mu\'min, Al-Karim, dan Al-Ghaffar',
    comp: 'Mengenal makna dan meneladani sifat As-Salam, Al-Mu\'min, Al-Karim, dan Al-Ghaffar',
    scenarios: [
      { q: 'Asmaul Husna "As-Salam" bermakna bahwa Allah Maha...', c: 'Pemberi Keselamatan dan Kesejahteraan bagi segenap hamba-Nya', d: ['Pemberi Keamanan dari rasa takut', 'Maha Mulia lagi Maha Pemurah', 'Maha Pengampun atas dosa'] },
      { q: 'Meneladani sifat "As-Salam" dalam kehidupan sehari-hari dilakukan dengan cara...', c: 'Menebarkan salam kedamaian dan tidak menyakiti orang lain baik dengan lisan maupun tangan', d: ['Membuat kegaduhan saat teman shalat', 'Menyebarkan rahasia kelemahan teman', 'Memulai pertengkaran di lapangan'] },
      { q: 'Asmaul Husna "Al-Mu\'min" artinya adalah...', c: 'Maha Memberi Rasa Aman dan Menepati Janji', d: ['Maha Kuasa menciptakan malaikat', 'Maha Adil dalam menghukum', 'Maha Melindungi orang miskin'] },
      { q: 'Perilaku meneladani sifat "Al-Mu\'min" bagi seorang santri madrasah adalah...', c: 'Menjadi pribadi yang amanah, dapat dipercaya, dan tidak membuat teman merasa terancam/takut', d: ['Menakut-nakuti teman dengan cerita hantu bohong', 'Melanggar janji kelompok belajar', 'Menyembunyikan tas teman'] },
      { q: 'Asmaul Husna "Al-Karim" bermakna bahwa Allah Maha...', c: 'Mulia dan Maha Dermawan yang memberi tanpa diminta dan tanpa pamrih', d: ['Maha Mengetahui segala rahasia', 'Maha Keras siksaan-Nya', 'Maha Mengawasi seluruh alam'] },
      { q: 'Wujud pengamalan sifat "Al-Karim" di madrasah adalah...', c: 'Gemar berbagi makanan dan menyisihkan uang saku untuk infaq dengan ikhlas', d: ['Menghitung-hitung kebaikan yang pernah diberikan', 'Hanya meminjamkan alat tulis jika diberi imbalan', 'Menolak bersedekah'] },
      { q: 'Asmaul Husna "Al-Ghaffar" artinya adalah...', c: 'Maha Pengampun yang berulang kali menutupi aib dan memaafkan dosa hamba-Nya', d: ['Maha Mendengar segala suara', 'Maha Memperkaya orang beriman', 'Maha Membalas dendam'] },
      { q: 'Sikap meneladani sifat "Al-Ghaffar" ketika teman kita berbuat salah dan meminta maaf adalah...', c: 'Memberi maaf dengan lapang dada dan tidak mendendam atau mengungkit kesalahannya lagi', d: ['Menolak maaf sebelum temannya menangis', 'Membalas perbuatan buruknya dengan yang lebih kejam', 'Menjauhinya selama satu tahun'] },
      { q: 'Nabi bersabda: "Tebarkanlah salam (Afsyus-salam), berikanlah makanan, dan sambunglah silaturahmi, niscaya kamu akan..."', c: 'Masuk surga dengan selamat sejahtera', d: ['Menjadi saudagar kaya raya di dunia', 'Bebas dari semua kewajiban zakat', 'Mendapatkan pujian penguasa'] },
      { q: 'Sifat pemaaf dalam Islam merupakan akhlak mulia yang derajatnya sangat tinggi di sisi Allah, sebagaimana firman-Nya bahwa memaafkan itu...', c: 'Lebih dekat kepada takwa', d: ['Merendahkan harga diri manusia', 'Tanda kelemahan dan kepengecutan', 'Hanya diwajibkan kepada para nabi'] }
    ]
  },
  {
    subtopic: 'Iman kepada Allah dan Rukun Iman',
    comp: 'Memahami rukun iman dan meyakini eksistensi serta keesaan Allah SWT',
    scenarios: [
      { q: 'Jumlah rukun iman yang wajib diyakini dan diamalkan oleh setiap muslim berjumlah...', c: '6 rukun', d: ['5 rukun', '10 rukun', '4 rukun'] },
      { q: 'Urutan rukun iman yang pertama dan menjadi pondasi utama keimanan adalah...', c: 'Iman kepada Allah SWT', d: ['Iman kepada Malaikat', 'Iman kepada Kitab-kitab Allah', 'Iman kepada Hari Akhir'] },
      { q: 'Dalil aqli (bukti logika akal sehat) tentang keberadaan Allah SWT sebagai Pencipta adalah...', c: 'Keteraturan peredaran matahari, bulan, bumi, dan alam semesta yang begitu presisi dan harmonis', d: ['Adanya bangunan megah yang berdiri dengan sendirinya tanpa arsitek', 'Buku ensiklopedia yang tersusun tanpa penulis', 'Mesin jam tangan yang tercipta secara kebetulan'] },
      { q: 'Keyakinan bahwa Allah itu Esa, tidak berbilang, tidak beranak, dan tidak diperanakkan disebut tauhid...', c: 'Uluhiyah dan Asma wa Sifat', d: ['Rububiyah semata', 'Syirik akbar', 'Riddah'] },
      { q: 'Perbuatan menyekutukan Allah dengan sesuatu makhluk lain dalam ibadah dinamakan perbuatan...', c: 'Syirik', d: ['Fasik', 'Kufur nikmat', 'Nifaq'] },
      { q: 'Orang yang menyekutukan Allah SWT dinamakan...', c: 'Musyrik', d: ['Munafik', 'Fasik', 'Murtad'] },
      { q: 'Dosa syirik akbar (menyekutukan Allah) merupakan dosa yang paling besar dan...', c: 'Tidak akan diampuni Allah jika pelakunya meninggal dunia sebelum bertaubat', d: ['Dapat dihapus cukup dengan membayar denda uang', 'Pahalanya sama dengan dosa mencuri', 'Hanya dosa kecil yang dimaafkan'] },
      { q: 'Iman kepada malaikat menempati urutan rukun iman yang ke-...', c: 'Kedua', d: ['Pertama', 'Ketiga', 'Keempat'] },
      { q: 'Sikap orang yang benar-benar beriman kepada Allah SWT (Mukmin sejati) tercermin dalam...', c: 'Melaksanakan seluruh perintah Allah dan menjauhi segala larangan-Nya dengan penuh ketaatan', d: ['Mengaku beriman dengan lisan tetapi tidak mau shalat lima waktu', 'Hanya beribadah saat dilihat oleh guru madrasah', 'Percaya adanya Allah tetapi percaya juga pada ramalan dukun'] },
      { q: 'Tiga tingkatan penghayatan agama Islam yang diajarkan dalam Hadits Jibril adalah...', c: 'Islam, Iman, dan Ihsan', d: ['Syariat, Tarekat, dan Hakikat', 'Wajib, Sunnah, dan Mubah', 'Rukun, Syarat, dan Batal'] }
    ]
  },
  {
    subtopic: 'Iman kepada Malaikat-Malaikat Allah',
    comp: 'Mengenal nama-nama sepuluh malaikat Allah beserta tugas-tugas pokoknya',
    scenarios: [
      { q: 'Malaikat diciptakan oleh Allah SWT dari unsur...', c: 'Cahaya (Nur)', d: ['Api yang menyala (Nar)', 'Tanah liat kering (Tin)', 'Hembusan angin kencang'] },
      { q: 'Sifat utama malaikat yang membedakannya secara mutlak dari manusia dan jin adalah...', c: 'Selalu taat mematuhi perintah Allah dan tidak pernah bermaksiat sedikit pun', d: ['Memiliki nafsu makan, minum, dan berkeluarga', 'Kadang-kadang lupa mencatat amal manusia', 'Membutuhkan tidur untuk istirahat'] },
      { q: 'Malaikat yang bertugas menyampaikan wahyu Allah kepada para nabi dan rasul adalah...', c: 'Malaikat Jibril', d: ['Malaikat Mikail', 'Malaikat Israfil', 'Malaikat Izrail'] },
      { q: 'Malaikat yang bertugas membagi rezeki dari Allah dan menurunkan air hujan ke bumi adalah...', c: 'Malaikat Mikail', d: ['Malaikat Jibril', 'Malaikat Ridwan', 'Malaikat Malik'] },
      { q: 'Malaikat yang bertugas meniup sangkakala (terompet) pada hari kiamat dan hari kebangkitan adalah...', c: 'Malaikat Israfil', d: ['Malaikat Izrail', 'Malaikat Munkar', 'Malaikat Nakir'] },
      { q: 'Malaikat yang bertugas mencabut nyawa seluruh makhluk hidup atas izin Allah SWT adalah...', c: 'Malaikat Izrail (Malakul Maut)', d: ['Malaikat Raqib', 'Malaikat Atid', 'Malaikat Malik'] },
      { q: 'Malaikat yang bertugas mencatat segala amal perbuatan baik manusia adalah...', c: 'Malaikat Raqib', d: ['Malaikat Atid', 'Malaikat Ridwan', 'Malaikat Nakir'] },
      { q: 'Malaikat yang bertugas mencatat segala perbuatan buruk manusia adalah...', c: 'Malaikat Atid', d: ['Malaikat Raqib', 'Malaikat Jibril', 'Malaikat Mikail'] },
      { q: 'Dua malaikat yang bertugas menanyai manusia di dalam alam kubur (barzakh) tentang tuhan, nabi, dan agamanya adalah...', c: 'Malaikat Munkar dan Nakir', d: ['Malaikat Raqib dan Atid', 'Malaikat Malik dan Ridwan', 'Malaikat Jibril dan Mikail'] },
      { q: 'Malaikat penjaga pintu surga dinamakan Malaikat ..., dan penjaga pintu neraka dinamakan Malaikat ...', c: 'Ridwan - Malik', d: ['Malik - Ridwan', 'Jibril - Mikail', 'Raqib - Atid'] }
    ]
  },
  {
    subtopic: 'Iman kepada Kitab-Kitab Allah',
    comp: 'Mengenal empat kitab suci Allah beserta nabi penerimanya dan fungsi Al-Qur\'an',
    scenarios: [
      { q: 'Jumlah kitab suci samawi utama yang wajib diimani keberadaannya oleh umat Islam berjumlah...', c: '4 kitab suci', d: ['5 kitab', '10 kitab', '3 kitab'] },
      { q: 'Kitab Taurat diturunkan oleh Allah SWT dalam bahasa Ibrani kepada Nabi...', c: 'Nabi Musa \'alaihissalam', d: ['Nabi Daud \'a.s.', 'Nabi Isa \'a.s.', 'Nabi Ibrahim \'a.s.'] },
      { q: 'Kitab Zabur yang berisi puji-pujian, doa, dan zikir diturunkan kepada Nabi...', c: 'Nabi Daud \'alaihissalam', d: ['Nabi Musa \'a.s.', 'Nabi Isa \'a.s.', 'Nabi Nuh \'a.s.'] },
      { q: 'Kitab Injil diturunkan oleh Allah SWT kepada Nabi...', c: 'Nabi Isa \'alaihissalam', d: ['Nabi Yahya \'a.s.', 'Nabi Zakariya \'a.s.', 'Nabi Ismail \'a.s.'] },
      { q: 'Kitab suci terakhir yang diturunkan kepada Nabi Muhammad SAW sebagai mukjizat terbesar yang abadi adalah...', c: 'Al-Qur\'an Al-Karim', d: ['Suhuf Ibrahim', 'Kitab Taurat', 'Kitab Zabur'] },
      { q: 'Salah satu fungsi utama Al-Qur\'an terhadap kitab-kitab suci terdahulu adalah sebagai "Al-Muhaimin", artinya...', c: 'Membenarkan, menyempurnakan, dan menjadi batu uji kebenaran syariat terdahulu', d: ['Menghapus seluruh sejarah nabi terdahulu', 'Menyalin ulang kata demi kata kitab kuno', 'Hanya berlaku untuk bangsa Arab saja'] },
      { q: 'Selain kitab suci yang lengkap, Allah juga menurunkan lembaran-lembaran wahyu pendek kepada nabi yang disebut...', c: 'Suhuf', d: ['Mushaf', 'Hadits', 'Diwan'] },
      { q: 'Nabi yang menerima lembaran Suhuf antara lain Nabi Ibrahim a.s. dan Nabi...', c: 'Nabi Musa \'alaihissalam', d: ['Nabi Sulaiman \'a.s.', 'Nabi Yunus \'a.s.', 'Nabi Yusuf \'a.s.'] },
      { q: 'Jaminan kemurnian dan keaslian Al-Qur\'an dari segala perubahan manusia ditegaskan oleh Allah dalam Surah Al-Hijr ayat 9 bahwa Allah sendiri yang akan...', c: 'Menjaga dan memeliharanya hingga akhir zaman', d: ['Menyerahkan perawatannya kepada para raja', 'Mengangkatnya kembali ke langit setiap tahun', 'Mengubah bahasanya sesuai zaman'] },
      { q: 'Nama lain Al-Qur\'an adalah "Al-Furqan", yang memiliki arti...', c: 'Pembeda antara yang benar (haq) dan yang salah (bathil)', d: ['Obat penyembuh penyakit jasmani semata', 'Kumpulan syair puisi indah', 'Kisah pertempuran masa lalu'] }
    ]
  },
  {
    subtopic: 'Iman kepada Nabi, Rasul, dan Ulul Azmi',
    comp: 'Mengenal perbedaan nabi dan rasul serta keteladanan 5 Rasul Ulul Azmi',
    scenarios: [
      { q: 'Perbedaan mendasar antara seorang Nabi dan seorang Rasul menurut akidah Islam adalah...', c: 'Rasul menerima wahyu dan wajib menyampaikannya kepada umatnya, sedangkan Nabi tidak wajib menyampaikan kepada umat', d: ['Nabi memiliki mukjizat, sedangkan Rasul tidak memiliki', 'Rasul boleh berbuat dosa kecil, sedangkan Nabi suci', 'Nabi hidup di zaman purba, Rasul hidup di zaman modern'] },
      { q: 'Jumlah nabi dan rasul yang wajib diketahui dan diimani namanya dalam tradisi madrasah berjumlah...', c: '25 nabi dan rasul', d: ['10 nabi', '50 nabi', '100 nabi'] },
      { q: 'Empat sifat wajib yang mutlak dimiliki oleh seluruh nabi dan rasul utusan Allah adalah...', c: 'Shiddiq (jujur), Amanah (dapat dipercaya), Tabligh (menyampaikan), Fathanah (cerdas)', d: ['Kadzib, Khianat, Kitman, Baladah', 'Kaya, Bangsawan, Rupawan, Perkasa', 'Zuhud, Qanaah, Sabar, Tawakal'] },
      { q: 'Gelar "Ulul Azmi" diberikan oleh Allah SWT kepada lima rasul pilihan yang memiliki keistimewaan...', c: 'Tingkat ketabahan, kesabaran, dan keteguhan hati yang luar biasa dalam memikul risalah dakwah', d: ['Usia paling panjang melebihi seribu tahun', 'Kekayaan harta melimpah ruah', 'Pengikut terbanyak di seluruh dunia'] },
      { q: 'Lima rasul yang termasuk ke dalam kelompok Ulul Azmi disingkat dengan "NIMIM", yaitu...', c: 'Nuh a.s., Ibrahim a.s., Musa a.s., Isa a.s., dan Muhammad SAW', d: ['Nuh a.s., Ismail a.s., Musa a.s., Ishaq a.s., dan Muhammad SAW', 'Nasir, Idris, Musa, Isa, dan Mahmud', 'Nuh, Ilyas, Musa, Isa, dan Muhammad'] },
      { q: 'Mukjizat agung Nabi Ibrahim a.s. saat dibakar hidup-hidup oleh Raja Namrud yang zalim adalah...', c: 'Api yang membakar menjadi dingin dan menyelamatkan beliau atas perintah Allah', d: ['Mengubah tongkat menjadi ular raksasa', 'Menghidupkan orang mati dengan izin Allah', 'Membelah bulan menjadi dua bagian'] },
      { q: 'Mukjizat luar biasa Nabi Musa a.s. saat dikejar oleh Fir\'aun dan bala tentaranya di tepi Laut Merah adalah...', c: 'Memukulkan tongkatnya hingga Laut Merah terbelah menjadi jalan kering', d: ['Mendatangkan burung ababil pembawa batu', 'Membuat bahtera perahu di puncak bukit', 'Bisa berbicara dengan hewan burung'] },
      { q: 'Nabi Nuh a.s. diperintahkan oleh Allah SWT untuk membuat bahtera (kapal besar) untuk menyelamatkan orang beriman dari...', c: 'Banjir bandang air bah yang menenggelamkan kaum kafir durhaka', d: ['Gempa bumi dahsyat di lembah', 'Serangan angin samum panas membara', 'Letusan gunung berapi'] },
      { q: 'Nabi Isa a.s. dianugerahi mukjizat oleh Allah SWT antara lain mampu...', c: 'Menyembuhkan orang buta sejak lahir dan menghidupkan orang mati atas izin Allah', d: ['Membuat pakaian dari besi lunak', 'Mengendalikan angin dan menundukkan jin', 'Memuntahkan air dari sela-sela jari'] },
      { q: 'Nabi Muhammad SAW bergelar "Khatamun Nabiyyin wal Mursalin", yang bermakna...', c: 'Penutup dan penyempurna seluruh nabi dan rasul (tidak ada nabi setelah beliau)', d: ['Pemimpin para raja duniawi', 'Nabi yang hanya diutus untuk bangsa Arab', 'Nabi pertama yang diciptakan Allah'] }
    ]
  },
  {
    subtopic: 'Akhlak Terpuji kepada Orang Tua dan Guru (Birrul Walidain)',
    comp: 'Menerapkan adab berbakti kepada orang tua (birrul walidain) dan menghormati guru madrasah',
    scenarios: [
      { q: 'Istilah dalam Islam untuk perbuatan berbakti, berbuat baik, dan taat kepada kedua orang tua dinamakan...', c: 'Birrul Walidain', d: ['Uququl Walidain', 'Silaturahmi', 'Tazkiyatun Nafs'] },
      { q: 'Lafadz doa memohon ampunan dan kasih sayang untuk kedua orang tua berbunyi...', c: 'Rabbighfir li waliwalidayya warhamhuma kama rabbayani shaghira', d: ['Rabbana atina fid-dunya hasanah', 'Rabbisyrah li shadri wa yassir li amri', 'Rabbana la tuzigh qulubana'] },
      { q: 'Nabi Muhammad SAW menegaskan bahwa ridha Allah SWT bergantung kepada...', c: 'Ridha kedua orang tua, dan murka Allah bergantung kepada murka kedua orang tua', d: ['Banyaknya harta sedekah yang dipamerkan', 'Tingginya nilai ujian sekolah semata', 'Luasnya pergaulan di masyarakat'] },
      { q: 'Larangan membentak orang tua ditegaskan dalam Surah Al-Isra\' ayat 23, di mana kita bahkan dilarang mengucapkan perkataan...', c: '"Ah" / "Cis" / kata-kata penolakan yang merendahkan', d: ['Perkataan salam kedamaian', 'Permohonan doa restu', 'Ucapan terima kasih'] },
      { q: 'Ketika seorang sahabat bertanya kepada Rasulullah SAW: "Siapakah orang yang paling berhak aku pergauli dengan baik?", Rasulullah menjawab:...', c: '"Ibumu", lalu "Ibumu", lalu "Ibumu", kemudian "Ayahmu"', d: ['"Ayahmu", lalu "Ibumu", lalu "Pamanmu"', '"Gurumu", lalu "Ibumu", lalu "Temanmu"', '"Pemimpinmu", lalu "Keluargamu"'] },
      { q: 'Alasan Islam menempatkan ibu pada derajat penghormatan tiga kali lebih tinggi adalah karena...', c: 'Ibu telah mengandung dengan susah payah, melahirkan bertaruh nyawa, dan menyusui penuh kasih sayang', d: ['Ibu bekerja mencari nafkah di luar rumah', 'Ibu selalu membelikan mainan mahal', 'Ibu tidak pernah memarahi anak'] },
      { q: 'Cara menghormati bapak dan ibu guru di lingkungan madrasah antara lain...', c: 'Mengucapkan salam dengan santun, mendengarkan penjelasan di kelas, dan mengerjakan tugas tepat waktu', d: ['Berbicara memotong penjelasan guru', 'Bermain telepon genggam saat pelajaran', 'Mengejek gaya berpakaian guru di belakangnya'] },
      { q: 'Guru sering disebut sebagai "Orang Tua Rohani" bagi peserta didik karena guru berjasa...', c: 'Membimbing akal budi, mengajarkan ilmu agama, dan menuntun akhlak menuju keselamatan akhirat', d: ['Membayar biaya sekolah peserta didik', 'Menyediakan tempat tinggal bagi siswa', 'Menggantikan kewajiban orang tua kandung'] },
      { q: 'Berbakti kepada orang tua yang telah meninggal dunia dapat terus dilakukan dengan cara...', c: 'Mendoakan ampunan bagi mereka, melunasi hutangnya, dan menyambung tali silaturahmi kerabatnya', d: ['Menangisi makamnya siang dan malam', 'Menyimpan pakaian peninggalannya di lemari selamanya', 'Berhenti bersekolah'] },
      { q: 'Hukum mendurhakai kedua orang tua (Uququl Walidain) dalam syariat Islam termasuk...', c: 'Dosa besar yang disegerakan balasannya di dunia sebelum azab di akhirat', d: ['Perbuatan mubah yang dimaafkan', 'Dosa kecil yang gugur dengan berwudhu', 'Makruh yang tidak berdampak apa-apa'] }
    ]
  },
  {
    subtopic: 'Adab Keseharian: Makan, Minum, Berpakaian, dan Bersin',
    comp: 'Menerapkan adab islami dalam makan, minum, berpakaian, dan bersin sesuai sunnah Nabi',
    scenarios: [
      { q: 'Adab makan dan minum yang diajarkan oleh Rasulullah SAW kepada sahabat Umar bin Abi Salamah adalah...', c: '"Sebutlah nama Allah (Bismillah), makanlah dengan tangan kananmu, dan makanlah makanan yang dekat denganmu"', d: ['"Makanlah sambil berjalan cepat dan berbicara keras"', '"Makanlah dengan tangan kiri dan tiuplah kuah panas"', '"Ambillah makanan sebanyak-banyaknya hingga tumpah"'] },
      { q: 'Nabi Muhammad SAW melarang minum air sambil...', c: 'Berdiri dan bernafas di dalam gelas tempat minum', d: ['Duduk dengan tenang di kursi', 'Menggunakan cangkir yang bersih', 'Membaca basmalah di awal minum'] },
      { q: 'Apabila makanan atau minuman masih dalam keadaan sangat panas, sunnah yang diajarkan adalah...', c: 'Menunggunya hingga agak dingin dan tidak meniup-niupnya', d: ['Meniupnya berkali-kali dengan nafas kencang', 'Membuang makanan panas tersebut', 'Mencampurnya dengan air mentah'] },
      { q: 'Tuntunan Islam dalam porsi makan mengajarkan agar perut dibagi menjadi tiga bagian seimbang, yaitu...', c: 'Sepertiga untuk makanan, sepertiga untuk minuman, dan sepertiga untuk udara bernafas', d: ['Dua pertiga untuk makanan padat dan sepertiga untuk minuman manis', 'Penuh seluruhnya dengan makanan lezat', 'Hanya diisi air tanpa makanan'] },
      { q: 'Saat mengenakan pakaian baru atau seragam madrasah, adab sunnah yang dianjurkan adalah mendahulukan...', c: 'Bagian tubuh sebelah kanan sambil membaca doa berpakaian', d: ['Bagian tubuh sebelah kiri tanpa doa', 'Melempar pakaian ke lantai terlebih dahulu', 'Mengenakan celana sambil melompat'] },
      { q: 'Fungsi utama pakaian dalam pandangan ajaran Islam menurut Surah Al-A\'raf ayat 26 adalah untuk...', c: 'Menutup aurat dan sebagai perhiasan kemuliaan takwa', d: ['Memamerkan merek mahal kepada teman madrasah', 'Menarik perhatian lawan jenis secara berlebihan', 'Menunjukkan status sosial yang kaya'] },
      { q: 'Batas aurat laki-laki muslim menurut jumhur ulama fikih adalah...', c: 'Antara pusar hingga lutut', d: ['Seluruh badan kecuali wajah', 'Hanya bagian dada saja', 'Dari leher hingga pergelangan kaki'] },
      { q: 'Batas aurat perempuan muslimah di hadapan orang yang bukan mahram adalah...', c: 'Seluruh tubuh kecuali wajah dan kedua telapak tangan', d: ['Hanya rambut kepala saja', 'Seluruh tubuh tanpa terkecuali', 'Dari pusar hingga lutut'] },
      { q: 'Ketika seorang muslim bersin, sunnah baginya mengucapkan lafadz...', c: 'Alhamdulillah', d: ['Astagfirullah', 'Subhanallah', 'Yarhamukallah'] },
      { q: 'Bagi orang yang mendengar saudaranya bersin dan memuji Allah, sunnah menjawab dengan mendoakan:...', c: 'Yarhamukallah (Semoga Allah merahmatimu)', d: ['Yahdikumullah wa yushlihu balakum', 'Jazakallahu khairan', 'Barakallahu fik'] }
    ]
  },
  {
    subtopic: 'Akhlak Tercela: Menghindari Bohong, Sombong, dan Riya',
    comp: 'Mengenal bahaya akhlak madzmumah (bohong, sombong, riya) dan cara menghindarinya',
    scenarios: [
      { q: 'Sikap menyampaikan informasi yang tidak sesuai dengan kenyataan sebenarnya dinamakan...', c: 'Kadzib (berbohong / dusta)', d: ['Shiddiq (jujur)', 'Amanah (dipercaya)', 'Fathanah (cerdas)'] },
      { q: 'Penyakit hati berupa membanggakan diri sendiri dan memandang rendah atau meremehkan orang lain dinamakan...', c: 'Takabur / Sombong', d: ['Tawadhu (rendah hati)', 'Qanaah (merasa cukup)', 'Tasamuh (toleran)'] },
      { q: 'Nabi SAW mendefinisikan sombong dalam sabdanya sebagai: "Al-Kibru batharul haq wa ghamthun-nas", yang artinya...', c: 'Menolak kebenaran dan meremehkan manusia', d: ['Mengenakan pakaian yang bersih dan rapi', 'Memiliki cita-cita menjadi dokter sukses', 'Belajar sungguh-sungguh untuk meraih juara'] },
      { q: 'Sikap memperlihatkan amal ibadah kepada orang lain agar mendapat sanjungan dan pujian disebut...', c: 'Riya (syirik kecil)', d: ['Ikhlas lillahi ta\'ala', 'Syukur nikmat', 'Husnuzhan'] },
      { q: 'Bahaya utama dari perbuatan riya dalam beribadah (seperti shalat atau bersedekah agar dipuji) adalah...', c: 'Gugurnya pahala amal ibadah tersebut di hadapan Allah SWT', d: ['Mendapatkan uang berlipat ganda', 'Pahalanya bertambah dua kali lipat', 'Shalatnya menjadi lebih sempurna'] },
      { q: 'Penyakit hati berupa rasa tidak senang atau benci melihat orang lain mendapat nikmat serta berharap nikmat itu lenyap disebut...', c: 'Hasad (dengki)', d: ['Ghibah (gosip)', 'Namimah (adu domba)', 'Bakhil (kikir)'] },
      { q: 'Rasulullah SAW mengumpamakan bahaya hasad seperti...', c: 'Api yang memakan kayu bakar hingga habis menjadi abu', d: ['Air jernih yang membasuh kotoran', 'Pohon rindang yang menghasilkan buah manis', 'Matahari yang menerangi bumi'] },
      { q: 'Menceritakan keburukan atau aib sesama muslim di belakangnya yang apabila ia dengar ia tidak menyukainya disebut...', c: 'Ghibah', d: ['Fitnah', 'Namimah', 'Kadzib'] },
      { q: 'Sikap mengadu domba antarteman dengan menyebarkan perkataan provokatif agar terjadi permusuhan dinamakan...', c: 'Namimah', d: ['Ghibah', 'Tasamuh', 'Ta\'awun'] },
      { q: 'Cara yang paling ampuh bagi santri madrasah untuk membersihkan hati dari sifat riya dan sombong adalah...', c: 'Menjaga keikhlasan niat, senantiasa beristighfar, dan menyadari bahwa segala kelebihan adalah titipan Allah', d: ['Memamerkan piagam penghargaan di media sosial', 'Berhenti beribadah sama sekali', 'Selalu merasa diri paling suci'] }
    ]
  },
  {
    subtopic: 'Akhlak Terpuji: Sikap Jujur, Disiplin, dan Tanggung Jawab',
    comp: 'Menerapkan perilaku jujur (shiddiq), disiplin waktu, dan tanggung jawab di madrasah',
    scenarios: [
      { q: 'Seorang siswa MI yang menemukan dompet berisi uang di halaman madrasah dan langsung menyerahkannya kepada guru piket menunjukkan cermin sikap...', c: 'Jujur dan amanah', d: ['Kikir dan pelit', 'Sombong dan riya', 'Ceroboh dan lalai'] },
      { q: 'Perilaku jujur dalam pelaksanaan ujian asesmen madrasah diwujudkan dengan cara...', c: 'Mengerjakan soal sendiri dengan kemampuan mandiri dan tidak mencontek', d: ['Membawa contekan kertas kecil di saku', 'Melihat lembar jawaban teman sebangku', 'Menanyakan kunci jawaban saat guru lengah'] },
      { q: 'Sikap patuh dan taat pada tata tertib madrasah serta membiasakan hadir tepat waktu sebelum bel berbunyi disebut sikap...', c: 'Disiplin', d: ['Pemberani', 'Dermawan', 'Santun'] },
      { q: 'Sikap siap menanggung segala konsekuensi dari perbuatan yang dilakukan dan menyelesaikan kewajiban dengan tuntas dinamakan sikap...', c: 'Tanggung jawab', d: ['Tawakal', 'Qanaah', 'Tasamuh'] },
      { q: 'Nabi Muhammad SAW sejak usia muda terkenal dengan kejujuran dan integritasnya yang luar biasa sehingga diberi gelar oleh penduduk Makkah berupa...', c: 'Al-Amin (Orang yang terpercaya)', d: ['As-Siddiq', 'Al-Faruq', 'Dzun Nurain'] },
      { q: 'Kejujuran seorang pedagang muslim dalam berniaga (tidak menipu timbangan dan tidak menyembunyikan cacat barang) akan...', c: 'Mendatangkan keberkahan rezeki dan dikumpulkan bersama para nabi di surga', d: ['Menyebabkan kerugian bangkrut secara cepat', 'Dijauhi oleh para pembeli', 'Mengurangi modal usaha'] },
      { q: 'Jika seorang siswa secara tidak sengaja mematahkan penggaris milik teman sekelasnya, tindakan bertanggung jawab yang tepat adalah...', c: 'Mengakui kesalahan dengan jujur, meminta maaf, dan mengganti penggaris yang rusak', d: ['Menyembunyikan patahan penggaris di laci teman lain', 'Pura-pura tidak tahu dan menyalahkan orang lain', 'Marah kepada pemilik penggaris'] },
      { q: 'Manfaat utama menjadi pribadi yang jujur di lingkungan madrasah dan masyarakat adalah...', c: 'Mendapat ketenangan hati, dipercaya banyak orang, dan dicintai oleh Allah SWT', d: ['Selalu menjadi juara tanpa harus belajar', 'Bebas dari semua tata tertib sekolah', 'Mendapat hadiah uang setiap hari'] },
      { q: 'Disiplin dalam melaksanakan shalat fardhu di awal waktu merupakan cermin ketaatan yang sangat dicintai oleh...', c: 'Allah SWT dan Rasul-Nya', d: ['Kaum musyrikin', 'Orang-orang munafik', 'Setan dan iblis'] },
      { q: 'Pepatah bijak mengatakan: "Kejujuran adalah mata uang yang berlaku di mana-mana". Maksudnya adalah...', c: 'Nilai kejujuran selalu dihargai tinggi dan mendatangkan keselamatan di mana pun kita berada', d: ['Orang jujur selalu membawa uang koin banyak', 'Kejujuran bisa diperjualbelikan dengan uang', 'Hanya orang kaya yang perlu jujur'] }
    ]
  },
  {
    subtopic: 'Akhlak Terpuji: Sikap Rendah Hati (Tawadhu) dan Pemaaf',
    comp: 'Membiasakan sikap tawadhu, menjauhi kesombongan, dan melapangkan dada memaafkan',
    scenarios: [
      { q: 'Sikap tidak menyombongkan diri meskipun memiliki kelebihan ilmu, ketampanan, atau kekayaan disebut...', c: 'Tawadhu (rendah hati)', d: ['Takabur', 'Ujub', 'Riya'] },
      { q: 'Orang yang bersikap tawadhu karena Allah dijanjikan oleh Rasulullah SAW dalam hadits shahih akan...', c: 'Diangkat derajat kemuliaannya oleh Allah SWT', d: ['Direndahkan dan dihina oleh masyarakat', 'Kehilangan seluruh kekayaannya', 'Menjadi orang yang tertinggal'] },
      { q: 'Contoh nyata sikap tawadhu seorang santri yang berprestasi meraih medali emas olimpiade sains adalah...', c: 'Bersyukur kepada Allah, tetap santun kepada guru, dan bersedia mengajari teman yang kesulitan', d: ['Memamerkan medali ke seluruh kelas dan meremehkan teman yang tidak lolos', 'Menolak berbicara dengan teman yang nilainya rendah', 'Meminta teman melayaninya'] },
      { q: 'Nabi Muhammad SAW memberikan teladan tawadhu dalam kehidupan sehari-hari antara lain dengan...', c: 'Menjahit pakaiannya yang robek sendiri, memerah susu kambing, dan menyapa anak-anak kecil', d: ['Selalu minta diarak dengan pasukan pengawal berkuda megah', 'Mengenakan mahkota emas permata', 'Menolak makan bersama para budak'] },
      { q: 'Lawan kata dari sikap terpuji Tawadhu (rendah hati) adalah...', c: 'Takabur / Kibr (sombong)', d: ['Hasad (dengki)', 'Bakhil (kikir)', 'Ghadhab (pemarah)'] },
      { q: 'Ketika dua orang santri berselisih paham, orang yang paling mulia di sisi Allah adalah orang yang...', c: 'Pertama kali mengucapkan salam dan memulai perdamaian', d: ['Paling keras suaranya saat berdebat', 'Membawa teman sekampung untuk membalas dendam', 'Mendiamkan saudaranya lebih dari tiga hari'] },
      { q: 'Rasulullah SAW melarang sesama muslim mendiamkan (hajr) saudaranya tanpa tegur sapa karena marah melebihi waktu...', c: '3 hari', d: ['7 hari', '1 bulan', '1 tahun'] },
      { q: 'Peristiwa Fathu Makkah (Pembebasan Kota Makkah) menjadi bukti keagungan akhlak pemaaf Rasulullah SAW ketika beliau...', c: 'Memaafkan seluruh penduduk Makkah yang dahulu memusuhi dan menyiksa beliau tanpa membalas dendam', d: ['Memenjarakan seluruh tokoh Quraisy', 'Menyita seluruh rumah penduduk Makkah', 'Menghukum mati musuh-musuh perang'] },
      { q: 'Sifat pemaaf dapat menyehatkan jasmani dan rohani manusia karena dapat...', c: 'Menghilangkan beban dendam di hati dan menumbuhkan kedamaian jiwa', d: ['Membuat seseorang cepat kaya raya', 'Menyebabkan orang lain takut kepada kita', 'Mempercepat pertumbuhan fisik'] },
      { q: 'Ayat Al-Qur\'an menegaskan: "Dan balasan suatu kejahatan adalah kejahatan yang serupa, maka barangsiapa memaafkan dan berbuat baik maka...', c: 'Pahalanya dijamin langsung oleh Allah SWT', d: ['Akan rugi selamanya', 'Akan dianggap lemah oleh musuh', 'Harus membayar denda'] }
    ]
  },
  {
    subtopic: 'Adab Berteman, Bergaul, dan Menjaga Lingkungan',
    comp: 'Menerapkan adab bergaul yang islami, tolong-menolong (ta\'awun), dan memelihara alam sekitar',
    scenarios: [
      { q: 'Sikap saling tolong-menolong dalam kebaikan dan ketakwaan dianjurkan dalam Islam dan dinamakan...', c: 'Ta\'awun', d: ['Tasamuh', 'Takaful', 'Tawazun'] },
      { q: 'Al-Qur\'an Surah Al-Ma\'idah ayat 2 melarang umat Islam saling tolong-menolong dalam urusan...', c: 'Dosa, permusuhan, dan perbuatan maksiat (Al-Itsmi wal \'Udwan)', d: ['Membangun jembatan desa', 'Membersihkan masjid dan madrasah', 'Mengumpulkan donasi bencana alam'] },
      { q: 'Perumpamaan teman yang sholeh menurut hadits Nabi SAW adalah seperti...', c: 'Penjual minyak wangi (membawa aroma harum semerbak)', d: ['Pandai besi yang meniup bara api dan abu panas', 'Serigala di padang gembala', 'Duri yang menusuk kaki'] },
      { q: 'Sebaliknya, berteman dekat dengan orang yang gemar berbuat maksiat diibaratkan seperti...', c: 'Duduk di dekat pandai besi yang dapat membakar pakaian atau mencium bau busuk asap', d: ['Berada di taman bunga yang indah', 'Meminum air zamzam yang sejuk', 'Berlayar di kapal yang nyaman'] },
      { q: 'Menjaga kebersihan madrasah dan tidak merusak fasilitas umum merupakan bagian dari...', c: 'Iman dan akhlak terpuji terhadap lingkungan ciptaan Allah', d: ['Tugas wajib penjaga sekolah semata', 'Hukuman bagi siswa yang melanggar', 'Pemborosan tenaga'] },
      { q: 'Menyingkirkan duri, paku, atau ranting pohon yang menghalangi jalan orang lewat dinilai dalam Islam sebagai...', c: 'Sedekah dan cabang dari keimanan', d: ['Pekerjaan sia-sia yang membuang waktu', 'Tugas dinas kebersihan saja', 'Perbuatan makruh'] },
      { q: 'Rasulullah SAW melarang membuang hajat (air seni/kotoran) di tempat-tempat umum seperti...', c: 'Sumber air yang mengalir, bawah pohon yang rindang untuk berteduh, dan jalan umum', d: ['Toilet tertutup yang memiliki saluran pembuangan', 'Kamar mandi pribadi di rumah', 'Jamban madrasah'] },
      { q: 'Menanam pohon atau tanaman penghijauan (reboisasi) yang buah atau dedaunannya dimakan burung atau manusia dinilai sebagai...', c: 'Sedekah jariyah yang pahalanya mengalir terus bagi penanamnya', d: ['Kerugian modal bertani', 'Perbuatan yang tidak berpahala', 'Kewajiban petani saja'] },
      { q: 'Adab memanggil teman sebaya di madrasah menurut syariat Islam adalah...', c: 'Memanggilnya dengan nama yang baik atau panggilan yang ia sukai, bukan dengan gelar julukan buruk', d: ['Memanggil dengan ejekan fisik atau nama hewan', 'Meneriakkan kelemahannya di depan umum', 'Meniru suaranya dengan nada mengejek'] },
      { q: 'Jika ada tiga orang santri sedang berkumpul bersama, Rasulullah SAW melarang dua orang di antaranya...', c: 'Berbisik-bisik berdua saja tanpa melibatkan orang yang ketiga karena dapat membuatnya sedih', d: ['Membaca Al-Qur\'an bersama-sama', 'Mengerjakan tugas matematika kelompok', 'Makan siang bersama di meja yang sama'] }
    ]
  }
];

function generateAkidahAkhlakMI() {
  return buildUniqueSubjectBank({
    subjectId: 'akidah_akhlak',
    subjectName: 'Akidah Akhlak MI',
    categoryId: 'rumpun_pai',
    categoryName: 'Rumpun PAI MI',
    akgtkCategory: 'Rumpun PAI',
    educationLevel: 'MI',
    idPrefix: 'mi-aa-',
    totalTarget: 150,
    generator: (i, diff, num) => {
      const topicIndex = i % topics.length; // 0..14
      const scenarioIndex = Math.floor(i / topics.length); // 0..9
      const topic = topics[topicIndex];
      const sc = topic.scenarios[scenarioIndex];

      return {
        subtopic: topic.subtopic,
        competency: topic.comp,
        question: `[Asesmen Akidah Akhlak MI Soal #${num} - ${topic.subtopic}]\n${sc.q}`,
        correctText: sc.c,
        distractors: sc.d,
        explanation: `Jawaban benar: "${sc.c}". Sesuai dengan materi kompetensi "${topic.comp}" pada subtopik ${topic.subtopic}.`,
        tip: `Perhatikan dalil naqli Al-Qur'an/Hadits dan pembiasaan adab akhlak terpuji sehari-hari.`
      };
    }
  });
}

module.exports = {
  generateAkidahAkhlakMI
};
