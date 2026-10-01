// Modular Generator for MTs IPA Terpadu (150 UNIQUE QUESTIONS)
const { buildUniqueSubjectBank } = require('./generate_all_subjects_master.cjs');

function generateIpaMTs() {
  const ipaSubtopics = [
    { name: 'Pengukuran dan Besaran Pokok/Turunan', comp: 'Menganalisis hasil pengukuran alat ukur dan satuan SI' },
    { name: 'Klasifikasi Materi dan Pemisahan Campuran', comp: 'Mengidentifikasi metode pemisahan zat (filtrasi, kromatografi, distilasi)' },
    { name: 'Zat Aditif dan Zat Adiktif', comp: 'Mengidentifikasi fungsi pengawet, pewarna, dan bahaya zat adiktif' },
    { name: 'Suhu, Pemuaian, dan Kalor', comp: 'Menganalisis perpindahan kalor dan penerapan rumus Q = m.c.ΔT' },
    { name: 'Gerak Lurus (GLB dan GLBB)', comp: 'Menganalisis grafik kecepatan terhadap waktu dan gerak lurus berubah beraturan' },
    { name: 'Hukum Newton tentang Gerak', comp: 'Menerapkan Hukum I, II, dan III Newton pada aktivitas sehari-hari' },
    { name: 'Usaha, Energi, dan Pesawat Sederhana', comp: 'Menghitung keuntungan mekanik tuas, katrol, dan bidang miring' },
    { name: 'Tekanan Hidrostatis dan Hukum Archimedes', comp: 'Menganalisis gaya angkat zat cair dan kondisi terapung, melayang, tenggelam' },
    { name: 'Getaran, Gelombang, dan Resonansi Bunyi', comp: 'Menghitung cepat rambat gelombang v = λ.f dan frekuensi getaran' },
    { name: 'Cahaya dan Pembentukan Bayangan Cermin/Lensa', comp: 'Menganalisis pembentukan bayangan pada cermin cekung dan lup/mikroskop' },
    { name: 'Listrik Statis dan Hukum Coulomb', comp: 'Menganalisis interaksi muatan listrik dan medan listrik' },
    { name: 'Listrik Dinamis dan Rangkaian Seri-Paralel', comp: 'Menghitung hambatan pengganti dan kuat arus menggunakan Hukum Ohm' },
    { name: 'Kemagnetan dan Induksi Elektromagnetik', comp: 'Menganalisis cara pembuatan magnet dan prinsip transformator step-up/step-down' },
    { name: 'Tata Surya dan Fenomena Gerhana', comp: 'Menganalisis dampak revolusi bumi, fase bulan, dan pasang surut air laut' },
    { name: 'Struktur Sel dan Mikroskop', comp: 'Membedakan organel sel tumbuhan dan sel hewan serta fungsinya' },
    { name: 'Sistem Gerak Manusia (Tulang & Sendi)', comp: 'Mengidentifikasi jenis sendi diartrosis dan kelainan pada tulang manusia' },
    { name: 'Sistem Pencernaan dan Enzim Manusia', comp: 'Menganalisis kerja enzim pencernaan di lambung dan usus halus' },
    { name: 'Sistem Peredaran Darah Manusia', comp: 'Menganalisis peredaran darah besar, darah kecil, dan sel-sel darah' },
    { name: 'Sistem Pernapasan dan Ekskresi (Ginjal)', comp: 'Menganalisis tahapan pembentukan urine (filtrasi, reabsorpsi, augmentasi)' },
    { name: 'Pewarisan Sifat dan Bioteknologi', comp: 'Menentukan rasio persilangan monohibrid Mendel dan produk bioteknologi pangan' }
  ];

  return buildUniqueSubjectBank({
    subjectId: 'ipa',
    subjectName: 'IPA Terpadu MTs',
    categoryId: 'stem',
    categoryName: 'STEM MTs',
    akgtkCategory: 'STEM',
    educationLevel: 'MTs',
    idPrefix: 'mts-ipa-',
    totalTarget: 150,
    generator: (i, diff, num) => {
      const topic = ipaSubtopics[i % ipaSubtopics.length];
      const step = Math.floor(i / ipaSubtopics.length) + 1; // 1 to 8
      const tIdx = i % ipaSubtopics.length;

      let qText = '', cText = '', dList = [], exp = '', tip = '';

      if (tIdx === 0) {
        // Pengukuran
        const su = 2 + step;
        const sn = 1 + (step * 3) % 9;
        const hasil = (su + sn * 0.01).toFixed(2);
        qText = `Siswa MTs mengukur ketebalan pelat logam uji ke-${step} menggunakan jangka sorong. Skala utama tertera angka ${su} cm dan garis nonius ke-${sn} berimpit tepat dengan skala utama. Hasil pengukuran ketebalan pelat tersebut adalah...`;
        cText = `${hasil} cm`;
        dList = [`${(Number(hasil) + 0.1).toFixed(2)} cm`, `${(Number(hasil) - 0.05).toFixed(2)} cm`, `${(su + sn * 0.1).toFixed(2)} cm`];
        exp = `Hasil jangka sorong = skala utama + (garis nonius x 0,01 cm) = ${hasil} cm.`;
        tip = 'Skala utama + (nonius x 0,01 cm).';
      } else if (tIdx === 1) {
        // Pemisahan campuran (8 distinct items)
        const zatList = [
          { z: 'kristal garam dari air laut pantai', m: 'Evaporasi / Kristalisasi penguapan', d: ['Kondensasi spontan', 'Dekantasi manual tanpa alat', 'Elektrolisis air murni'] },
          { z: 'fraksi minyak bumi mentah', m: 'Distilasi bertingkat berdasarkan titik didih', d: ['Filtrasi gravitasi', 'Sentrifugasi dingin', 'Sublimasi kristal'] },
          { z: 'zat warna pigmen klorofil daun bayam', m: 'Kromatografi kertas berdasarkan kecepatan rambat zat', d: ['Evaporasi kering', 'Distilasi uap', 'Kristalisasi garam'] },
          { z: 'minyak atsiri dari daun kayu putih segar', m: 'Distilasi uap air', d: ['Kromatografi gas', 'Filtrasi saring', 'Sentrifugasi darah'] },
          { z: 'partikel kapur keruh dari suspensi air kapur', m: 'Filtrasi menggunakan kertas saring berpori', d: ['Sublimasi panas', 'Destilasi fraksinasi', 'Evaporasi matahari'] },
          { z: 'kristal iodin padat dari campurannya dengan pasir', m: 'Sublimasi zat padat', d: ['Dekantasi wadah', 'Kromatografi cair', 'Kristalisasi jenuh'] },
          { z: 'serbuk besi halus yang bercampur dengan pasir silika', m: 'Pemisahan magnetik menggunakan medan magnet', d: ['Penyaringan kasa', 'Distilasi bejana', 'Pemanasan api'] },
          { z: 'endapan sel darah merah dari cairan plasma darah', m: 'Sentrifugasi dengan putaran kecepatan tinggi', d: ['Evaporasi vakum', 'Sublimasi dingin', 'Filtrasi kasar'] }
        ];
        const item = zatList[(step - 1) % zatList.length];
        qText = `Pada praktikum kimia madrasah, siswa diminta memisahkan "${item.z}". Teknik pemisahan campuran yang paling tepat dan efisien adalah...`;
        cText = item.m;
        dList = item.d;
        exp = `Metode pemisahan yang sesuai untuk ${item.z} adalah ${item.m}.`;
        tip = 'Pahami prinsip pemisahan zat: ukuran partikel, titik didih, kelarutan, atau sifat kemagnetan.';
      } else if (tIdx === 2) {
        // Zat aditif (8 distinct items)
        const aditifList = [
          { nama: 'Natrium Benzoat', f: 'Mencegah pertumbuhan jamur dan bakteri pembusuk pada produk sirup', d: ['Pewarna sintetis kuning', 'Penguat rasa daging gurih', 'Pemanis pengganti gula tebu'] },
          { nama: 'Tartrazin Cl 19140', f: 'Memberikan warna kuning cerah pada makanan olahan', d: ['Pengawet daging kaleng', 'Penambah aroma buah segar', 'Pencegah penggumpalan garam'] },
          { nama: 'Monosodium Glutamat (MSG)', f: 'Mempertegas dan menguatkan cita rasa gurih umami pada masakan', d: ['Pewarna hijau alami', 'Pengawet manisan buah', 'Pengembang adonan kue'] },
          { nama: 'Aspartam', f: 'Pemanis buatan berkalori sangat rendah bagi penderita diabetes', d: ['Pengental kuah makanan', 'Pewarna merah karmin', 'Antioksidan minyak goreng'] },
          { nama: 'Asam Sitrat', f: 'Pengatur tingkat keasaman sekaligus memberi cita rasa segar buah', d: ['Pewarna biru makanan', 'Penguat aroma vanili', 'Bahan pemutih tepung'] },
          { nama: 'Karamel', f: 'Pewarna alami cokelat gelap hasil karamelisasi gula', d: ['Bahan pembasmi mikroba', 'Peningkat kadar protein', 'Bahan antioksidan'] },
          { nama: 'Kurkumin dari rimpang kunyit', f: 'Pewarna alami kuning-oranye sekaligus memiliki fungsi antioksidan', d: ['Pemanis tanpa sukrosa', 'Pengental saus sambal', 'Bahan pelembut serat daging'] },
          { nama: 'Kalium Sorbat', f: 'Menghambat perkembangbiakan khamir dan kapang pada keju dan sari buah', d: ['Pemberi aroma pandan wangi', 'Pewarna merah sintetis', 'Penyedap rasa kaldu'] }
        ];
        const ad = aditifList[(step - 1) % aditifList.length];
        qText = `Pada tabel komposisi bahan pangan kemasan kantin madrasah tertera zat "${ad.nama}". Peran utama penambahan zat tersebut ke dalam makanan adalah...`;
        cText = ad.f;
        dList = ad.d;
        exp = `Zat ${ad.nama} bertindak sebagai ${ad.f.toLowerCase()}.`;
        tip = 'Kenali fungsi spesifik pengawet, pemanis, pewarna, dan penyedap rasa.';
      } else if (tIdx === 3) {
        // Kalor
        const m = step + 1;
        const dt = 12 + step * 4;
        const qJ = m * 4200 * dt;
        qText = `Massa air sebanyak ${m} kg bersuhu 20°C dipanaskan oleh pembakar spiritus laboratorium hingga mengalami kenaikan suhu sebesar ${dt}°C. Jika kalor jenis air bernilai 4.200 J/kg°C, jumlah kalor yang diserap air tersebut adalah...`;
        cText = `${qJ.toLocaleString('id-ID')} Joule`;
        dList = [`${(qJ + 4200).toLocaleString('id-ID')} Joule`, `${(qJ - 4200).toLocaleString('id-ID')} Joule`, `${(qJ * 2).toLocaleString('id-ID')} Joule`];
        exp = `Q = m . c . ΔT = ${m} kg x 4.200 J/kg°C x ${dt}°C = ${qJ.toLocaleString('id-ID')} Joule.`;
        tip = 'Q = m.c.ΔT.';
      } else if (tIdx === 4) {
        // GLBB
        const vo = 4 + step * 3;
        const a = 1 + (step % 4);
        const t = 2 + step;
        const vt = vo + a * t;
        qText = `Sebuah mobil patroli madrasah bergerak lurus dengan kelajuan awal ${vo} m/s dan dipercepat secara beraturan dengan percepatan konstan ${a} m/s² selama selang waktu ${t} sekon. Kelajuan akhir mobil tersebut adalah...`;
        cText = `${vt} m/s`;
        dList = [`${vt + 4} m/s`, `${vt - 3} m/s`, `${vo + a} m/s`];
        exp = `Vt = Vo + a.t = ${vo} + (${a} x ${t}) = ${vt} m/s.`;
        tip = 'Rumus GLBB dipercepat: Vt = Vo + at.';
      } else if (tIdx === 5) {
        // Hukum Newton (8 distinct real cases)
        const newtonList = [
          { f: 'Penumpang bus madrasah terdorong ke depan saat pengemudi mengerem mendadak', c: 'Hukum I Newton tentang kelembaman (inersia)', d: ['Hukum II Newton tentang percepatan', 'Hukum III Newton tentang aksi reaksi', 'Hukum Gravitasi Newton'] },
          { f: 'Mobil mainan bermassa 2 kg yang ditarik gaya 10 N mengalami percepatan lebih besar daripada mobil 5 kg dengan gaya sama', c: 'Hukum II Newton tentang hubungan gaya, massa, dan percepatan (F = m.a)', d: ['Hukum Kekekalan Energi Mekanik', 'Hukum I Newton tentang sifat diam', 'Hukum Pascal tentang tekanan'] },
          { f: 'Saat mendayung perahu di danau, air didorong ke belakang sehingga perahu meluncur ke depan', c: 'Hukum III Newton tentang gaya aksi dan reaksi (F aksi = - F reaksi)', d: ['Hukum I Newton tentang kelembaman', 'Hukum II Newton tentang resultan gaya', 'Hukum Archimedes fluida'] },
          { f: 'Koin yang diletakkan di atas kertas karton di atas mulut gelas tetap jatuh ke dalam gelas saat kertas disentak cepat', c: 'Hukum I Newton (benda cenderung mempertahankan keadaan diamnya)', d: ['Hukum Gravitasi Bumi semata', 'Hukum II Newton percepatan sudut', 'Hukum Termodinamika pertama'] },
          { f: 'Roket penelitian madrasah meluncur vertikal ke angkasa akibat semburan gas panas berkecepatan tinggi ke arah bawah', c: 'Hukum III Newton tentang gaya dorong reaksi fluida', d: ['Hukum I Newton tentang gerak melingkar', 'Hukum Boyle tentang gas ideal', 'Hukum Ohm tentang arus listrik'] },
          { f: 'Gaya resultan sebesar 30 N bekerja pada benda bermassa 6 kg sehingga menghasilkan percepatan 5 m/s²', c: 'Hukum II Newton (a = ∑F / m)', d: ['Hukum I Newton inersia', 'Hukum III Newton aksi reaksi', 'Hukum Kepler pergerakan planet'] },
          { f: 'Seorang atlet lompat jauh madrasah terus melayang ke depan sesaat setelah menolakkan kakinya di papan tumpu', c: 'Hukum I Newton mempertahankan keadaan gerak lurus', d: ['Hukum Pascal hidrolik', 'Hukum Coulomb gaya listrik', 'Hukum Archimedes daya apung'] },
          { f: 'Tangan perenang menekan air ke belakang dengan kuat agar tubuhnya terdorong meluncur maju di kolam', c: 'Hukum III Newton pasangan gaya aksi-reaksi pada dua benda berbeda', d: ['Hukum II Newton gaya sentripetal', 'Hukum I Newton kelembaman mutlak', 'Hukum Hooke elastisitas pegas'] }
        ];
        const nItem = newtonList[(step - 1) % newtonList.length];
        qText = `Perhatikan fenomena gerak sehari-hari berikut: "${nItem.f}". Fenomena fisik tersebut secara tepat membuktikan berlakunya...`;
        cText = nItem.c;
        dList = nItem.d;
        exp = `Fenomena tersebut merupakan aplikasi nyata dari ${nItem.c}.`;
        tip = 'Hukum I = inersia; Hukum II = F=ma; Hukum III = aksi reaksi sama besar berlawanan arah.';
      } else if (tIdx === 6) {
        // Pesawat Sederhana (8 distinct problems)
        const tuasData = [
          { w: 600, lk: 3, lb: 1, alat: 'linggis pengungkit batu' },
          { w: 450, lk: 4, lb: 1, alat: 'tuas pembuka peti kemas' },
          { w: 800, lk: 4, lb: 2, alat: 'pengungkit balok kayu madrasah' },
          { w: 500, lk: 5, lb: 1, alat: 'alat pemindah drum air' },
          { w: 360, lk: 3, lb: 1, alat: 'tuas pencabut paku berkarat' },
          { w: 720, lk: 4, lb: 1, alat: 'pengungkit lantai semen' },
          { w: 900, lk: 6, lb: 2, alat: 'alat perata tanah halaman' },
          { w: 480, lk: 4, lb: 2, alat: 'pengungkit gerobak pasir' }
        ];
        const td = tuasData[(step - 1) % tuasData.length];
        const f = (td.w * td.lb) / td.lk;
        qText = `Untuk memindahkan beban seberat ${td.w} N, seorang laboran madrasah menggunakan ${td.alat}. Jika panjang lengan kuasa ${td.lk} meter dan panjang lengan beban ${td.lb} meter, besar gaya kuasa minimum yang diperlukan adalah...`;
        cText = `${f.toFixed(0)} N`;
        dList = [`${(f + 40).toFixed(0)} N`, `${(f - 25).toFixed(0)} N`, `${td.w} N`];
        exp = `W x lb = F x lk => F = (W x lb) / lk = (${td.w} x ${td.lb}) / ${td.lk} = ${f.toFixed(0)} N.`;
        tip = 'W x lb = F x lk.';
      } else if (tIdx === 7) {
        // Tekanan (8 distinct depth/gravity cases)
        const depths = [3, 5, 8, 12, 15, 20, 25, 30];
        const h = depths[(step - 1) % depths.length];
        const rho = 1000;
        const g = 10;
        const p = rho * g * h;
        qText = `Seorang penyelam melakukan observasi biota laut pada kedalaman ${h} meter di bawah permukaan laut (massa jenis air laut diasumsikan 1.000 kg/m³, percepatan gravitasi g = 10 m/s²). Tekanan hidrostatis yang dialami penyelam tersebut adalah...`;
        cText = `${p.toLocaleString('id-ID')} Pa`;
        dList = [`${(p + 10000).toLocaleString('id-ID')} Pa`, `${(p - 10000).toLocaleString('id-ID')} Pa`, `${(p * 2).toLocaleString('id-ID')} Pa`];
        exp = `P = ρ . g . h = 1.000 x 10 x ${h} = ${p} Pa.`;
        tip = 'P = ρgh.';
      } else if (tIdx === 8) {
        // Gelombang (8 distinct wave calculations)
        const waveData = [
          { l: 2, f: 50, jenis: 'gelombang transversal pada tali' },
          { l: 4, f: 120, jenis: 'gelombang permukaan air danau' },
          { l: 0.5, f: 400, jenis: 'gelombang bunyi garpu tala di udara' },
          { l: 5, f: 30, jenis: 'gelombang seismik gempa ringan' },
          { l: 3, f: 80, jenis: 'gelombang transversal kawat sonometer' },
          { l: 1.5, f: 200, jenis: 'gelombang bunyi organa tertutup' },
          { l: 6, f: 25, jenis: 'gelombang riak kolam air' },
          { l: 2.5, f: 60, jenis: 'gelombang mekanik pegas slinki' }
        ];
        const wd = waveData[(step - 1) % waveData.length];
        const v = wd.l * wd.f;
        qText = `Pada pengujian osilasi di laboratorium, terukur ${wd.jenis} memiliki panjang gelombang ${wd.l} meter dan frekuensi osilasi ${wd.f} Hz. Cepat rambat gelombang tersebut bernilai...`;
        cText = `${v} m/s`;
        dList = [`${v + 20} m/s`, `${v - 15} m/s`, `${(wd.f / wd.l).toFixed(1)} m/s`];
        exp = `v = λ . f = ${wd.l} x ${wd.f} = ${v} m/s.`;
        tip = 'v = λ x f.';
      } else if (tIdx === 9) {
        // Optik (8 distinct focus and object distance cases)
        const optikData = [
          { f: 12, s: 20, jenis: 'cermin cekung rias' },
          { f: 15, s: 30, jenis: 'cermin cekung laboratorium' },
          { f: 10, s: 25, jenis: 'cermin konkaf optika' },
          { f: 8, s: 24, jenis: 'lensa cembung lup' },
          { f: 20, s: 40, jenis: 'cermin cekung proyektor' },
          { f: 18, s: 36, jenis: 'cermin cekung solar konsentrator' },
          { f: 6, s: 18, jenis: 'lensa objektif mikroskop sederhana' },
          { f: 16, s: 48, jenis: 'cermin cekung reflektor' }
        ];
        const od = optikData[(step - 1) % optikData.length];
        const sP = (od.s * od.f) / (od.s - od.f);
        qText = `Sebuah benda lilin diletakkan pada jarak ${od.s} cm di depan ${od.jenis} yang mempunyai jarak titik fokus ${od.f} cm. Jarak bayangan nyata yang terbentuk di depan cermin adalah...`;
        cText = `${sP.toFixed(1)} cm`;
        dList = [`${(sP + 6).toFixed(1)} cm`, `${(sP - 5).toFixed(1)} cm`, `${(od.f * 2).toFixed(1)} cm`];
        exp = `1/s' = 1/f - 1/s = 1/${od.f} - 1/${od.s} => s' = ${sP.toFixed(1)} cm.`;
        tip = '1/f = 1/s + 1/s\'.';
      } else if (tIdx === 10) {
        // Listrik Statis (8 distinct electrostatics questions)
        const statisList = [
          { q: 'Dua muatan sejenis mula-mula berjarak r tolak-menolak dengan gaya F. Jika jarak antarmuatan dijauhkan menjadi 3 kali semula (3r), gaya tolak Coulomb menjadi...', c: '1/9 F', d: ['3 F', '1/3 F', '9 F'], exp: 'F berbanding terbalik dengan kuadrat jarak (1/r²). Jarak 3r menghasilkan gaya 1/(3²) = 1/9 F.' },
          { q: 'Dua muatan listrik mula-mula tolak-menolak dengan gaya F pada jarak r. Jika jarak antarmuatan didekatkan menjadi 1/2 kali semula (0,5r), maka gaya Coulomb menjadi...', c: '4 F', d: ['2 F', '1/2 F', '1/4 F'], exp: 'Gaya berbanding terbalik dengan kuadrat jarak: 1/(0,5)² = 1/0,25 = 4 kali F.' },
          { q: 'Penggaris plastik yang digosokkan ke rambut kering dapat menarik serpihan kertas kecil karena...', c: 'Penggaris bermuatan negatif karena menerima perpindahan elektron dari rambut', d: ['Penggaris bermuatan positif karena menerima proton dari rambut', 'Rambut kehilangan neutron ke udara', 'Kertas mengalami induksi magnetik permanen'], exp: 'Elektron berpindah dari rambut ke plastik, menjadikan plastik bermuatan negatif.' },
          { q: 'Kaca yang digosok dengan kain sutera akan bermuatan positif karena...', c: 'Elektron dari batang kaca berpindah ke kain sutera', d: ['Proton dari kain sutera berpindah ke kaca', 'Kaca menyerap ion positif dari udara bebas', 'Kain sutera melepaskan neutron ke kaca'], exp: 'Kaca melepaskan elektron ke kain sutera sehingga kaca kekurangan elektron (positif).' },
          { q: 'Bagian daun elektroskop yang awalnya kuncup akan mekar saat didekati benda bermuatan listrik karena...', c: 'Kedua daun elektroskop memperoleh muatan sejenis sehingga saling tolak-menolak', d: ['Kedua daun elektroskop bermuatan berlawanan sehingga tarik-menarik', 'Adanya kenaikan temperatur pada kepala elektroskop', 'Gaya gravitasi bumi pada elektroskop berkurang'], exp: 'Muatan sejenis yang berkumpul pada kedua keping daun menyebabkan gaya tolak-menolak.' },
          { q: 'Dua muatan listrik mula-mula tarik-menarik dengan gaya F pada jarak r. Jika jarak antarmuatan diperbesar menjadi 4 kali semula (4r), gaya Coulomb menjadi...', c: '1/16 F', d: ['1/4 F', '4 F', '16 F'], exp: 'F ~ 1/r² => 1/(4²) = 1/16 F.' },
          { q: 'Alat penangkal petir pada gedung madrasah yang dipasang menjulang tinggi berfungsi untuk...', c: 'Mengalirkan muatan listrik awan petir secara aman ke dalam tanah (pembumian/grounding)', d: ['Menolak awan petir agar menjauh dari lingkungan gedung', 'Menyerap energi panas petir menjadi arus listrik cadangan', 'Mengubah petir menjadi gelombang radio frekuensi tinggi'], exp: 'Penangkal petir menyalurkan muatan listrik statis awan langsung ke tanah melalui kawat konduktor.' },
          { q: 'Satuan standar internasional (SI) untuk mengukur besarnya muatan listrik adalah...', c: 'Coulomb (C)', d: ['Ampere (A)', 'Volt (V)', 'Ohm (Ω)'], exp: 'Satuan muatan listrik dalam SI adalah Coulomb (C).' }
        ];
        const sItem = statisList[(step - 1) % statisList.length];
        qText = sItem.q;
        cText = sItem.c;
        dList = sItem.d;
        exp = sItem.exp;
        tip = 'Pahami Hukum Coulomb F = k.q1.q2/r² dan prinsip perpindahan elektron.';
      } else if (tIdx === 11) {
        // Listrik Dinamis (8 distinct circuit problems)
        const circData = [
          { r1: 6, r2: 12, jenis: 'dua lampu paralel' },
          { r1: 4, r2: 4, jenis: 'dua resistor identik paralel' },
          { r1: 10, r2: 15, jenis: 'dua pemanas paralel' },
          { r1: 20, r2: 30, jenis: 'dua hambatan geser paralel' },
          { r1: 12, r2: 24, jenis: 'dua kumparan kawat paralel' },
          { r1: 8, r2: 8, jenis: 'dua resistor cabang paralel' },
          { r1: 9, r2: 18, jenis: 'dua filamen bohlam paralel' },
          { r1: 15, r2: 30, jenis: 'dua resistor audio paralel' }
        ];
        const cd = circData[(step - 1) % circData.length];
        const rp = (cd.r1 * cd.r2) / (cd.r1 + cd.r2);
        qText = `Pada papan rangkaian praktikum elektronika madrasah, ${cd.jenis} masing-masing memiliki resistansi ${cd.r1} Ω dan ${cd.r2} Ω dirangkai paralel. Nilai resistansi pengganti dari cabang tersebut adalah...`;
        cText = `${rp.toFixed(1)} Ω`;
        dList = [`${(rp + 2).toFixed(1)} Ω`, `${(rp - 1).toFixed(1)} Ω`, `${cd.r1 + cd.r2} Ω`];
        exp = `1/Rp = 1/${cd.r1} + 1/${cd.r2} => Rp = (${cd.r1} x ${cd.r2}) / (${cd.r1} + ${cd.r2}) = ${rp.toFixed(1)} Ω.`;
        tip = 'Rp = (R1 x R2) / (R1 + R2).';
      } else if (tIdx === 12) {
        // Kemagnetan & Trafo (8 distinct items)
        const trafoList = [
          { np: 1200, ns: 300, vp: 240, tipe: 'step-down charger' },
          { np: 800, ns: 200, vp: 220, tipe: 'step-down radio' },
          { np: 500, ns: 1500, vp: 110, tipe: 'step-up inverter' },
          { np: 1000, ns: 250, vp: 200, tipe: 'step-down adaptor' },
          { np: 400, ns: 1200, vp: 100, tipe: 'step-up penaik tegangan' },
          { np: 1500, ns: 300, vp: 220, tipe: 'step-down catu daya' },
          { np: 600, ns: 1800, vp: 120, tipe: 'step-up transformator pembangkit' },
          { np: 2000, ns: 500, vp: 240, tipe: 'step-down panel surya' }
        ];
        const tf = trafoList[(step - 1) % trafoList.length];
        const vs = (tf.vp * tf.ns) / tf.np;
        qText = `Sebuah transformator ${tf.tipe} memiliki ${tf.np} lilitan primer dan ${tf.ns} lilitan sekunder. Jika kumparan primer dihubungkan ke sumber tegangan AC sebesar ${tf.vp} Volt, maka tegangan sekunder yang dihasilkan adalah...`;
        cText = `${vs.toFixed(1)} Volt`;
        dList = [`${(vs + 15).toFixed(1)} Volt`, `${(vs - 10).toFixed(1)} Volt`, `${tf.vp * 2} Volt`];
        exp = `Vs = (Vp x Ns) / Np = (${tf.vp} x ${tf.ns}) / ${tf.np} = ${vs.toFixed(1)} Volt.`;
        tip = 'Vp / Vs = Np / Ns.';
      } else if (tIdx === 13) {
        // Tata Surya (8 distinct phenomena)
        const astroList = [
          { p: 'Gerhana Matahari Cincin', c: 'Bulan berada pada titik terjauh (apogee) dari bumi saat melintasi garis lurus matahari-bumi', d: ['Bulan berada di perigee saat fase purnama', 'Bumi menutupi seluruh piringan matahari', 'Sinar matahari terpantul oleh komet es'] },
          { p: 'Pasang Purnama (Spring Tide)', c: 'Gravitasi matahari dan gravitasi bulan saling memperkuat posisi sejajar saat fase bulan baru atau purnama', d: ['Bulan dan matahari membentuk sudut tegak lurus 90°', 'Bulan berada tepat di belakang bayangan inti umbra bumi', 'Rotasi bumi berhenti sesaat di garis khatulistiwa'] },
          { p: 'Gerhana Bulan Total', c: 'Seluruh piringan bulan masuk ke dalam wilayah bayangan inti (umbra) bumi', d: ['Bulan berada di antara matahari dan bumi di siang hari', 'Bulan hanya terkena bayangan semu penumbra bumi', 'Bumi melintas di antara sabuk asteroid'] },
          { p: 'Pergantian empat musim di wilayah subtropis', c: 'Kemiringan sumbu rotasi bumi 23,5° saat berevolusi mengelilingi matahari', d: ['Perbedaan kecepatan rotasi harian bumi di kutub', 'Perubahan jarak bumi ke bulan setiap kuartal', 'Pergeseran medan magnet geomagnetik bumi'] },
          { p: 'Pasang Perbani (Neap Tide)', c: 'Posisi bulan, bumi, dan matahari membentuk sudut 90° (tegak lurus) sehingga gaya tarik gravitasi saling mengurangi', d: ['Posisi bulan dan matahari berada pada satu garis lurus 180°', 'Gravitasi matahari menarik air laut ke kutub utara', 'Bulan purnama memicu gelombang seismik laut'] },
          { p: 'Gerak semu harian matahari dari timur ke barat', c: 'Rotasi bumi pada porosnya dari arah barat menuju ke timur', d: ['Matahari yang beredar mengelilingi galaksi bimasakti', 'Revolusi bumi mengelilingi matahari selama 365 hari', 'Kemiringan sumbu orbit bulan terhadap ekliptika'] },
          { p: 'Perbedaan lamanya waktu siang dan malam di belahan bumi utara dan selatan', c: 'Revolusi bumi mengelilingi matahari dengan posisi poros bumi yang miring 23,5°', d: ['Bentuk bumi yang bulat pepat di ekuator', 'Fluktuasi intensitas badai radiasi matahari', 'Rotasi bulan yang sinkron dengan rotasi bumi'] },
          { p: 'Penampakan komet yang ekornya selalu menjauhi matahari', c: 'Tekanan radiasi dan angin matahari (solar wind) yang meniup partikel debu dan gas komet', d: ['Gaya gravitasi planet raksasa Jupiter yang menarik ekor komet', 'Efek Doppler cahaya spektrum inframerah', 'Gesekan komet dengan atmosfer bumi di angkasa'] }
        ];
        const aItem = astroList[(step - 1) % astroList.length];
        qText = `Dalam studi astronomi dan kebumian, fenomena alam "${aItem.p}" disebabkan secara ilmiah oleh...`;
        cText = aItem.c;
        dList = aItem.d;
        exp = `Fenomena ${aItem.p} terjadi karena ${aItem.c.toLowerCase()}.`;
        tip = 'Pahami dampak rotasi bumi, revolusi bumi, dan posisi matahari-bulan-bumi.';
      } else if (tIdx === 14) {
        // Biologi Sel (8 distinct organelles)
        const organelList = [
          { o: 'Kloroplas', f: 'Menangkap energi foton matahari untuk reaksi fotolisis fotosintesis tumbuhan' },
          { o: 'Mitokondria', f: 'Pusat respirasi seluler aerobik yang menghasilkan molekul energi ATP' },
          { o: 'Aparatus Golgi (Badan Golgi)', f: 'Modifikasi, penyortiran, dan sekresi glikoprotein serta vesikel sel' },
          { o: 'Lisosom', f: 'Pencernaan intraseluler senyawa makro dan fagositosis zat asing dengan enzim hidrolitik' },
          { o: 'Ribosom', f: 'Sintesis rantai polipeptida protein dari instruksi mRNA' },
          { o: 'Dinding Sel dari selulosa', f: 'Memberikan rigiditas struktural dan mencegah sel tumbuhan pecah akibat turgor' },
          { o: 'Vakuola Sentral besar', f: 'Menyimpan metabolit sekunder, pigmen antosianin, dan menjaga turgiditas sel' },
          { o: 'Nukleolus di dalam inti sel', f: 'Sintesis RNA ribosom (rRNA) dan perakitan awal subunit ribosom' }
        ];
        const org = organelList[(step - 1) % organelList.length];
        qText = `Pengamatan preparat jaringan tumbuhan di bawah mikroskop laboratorium madrasah menampakkan organel "${org.o}". Fungsi biologis utama organel tersebut adalah...`;
        cText = org.f;
        dList = ['Membelah sel secara mitosis spontan tanpa DNA', 'Mengikat molekul hemoglobin pembawa gas pernapasan', 'Menghasilkan pigmen melanin pelindung ultraviolet'];
        exp = `Organel ${org.o} memiliki fungsi esensial yaitu ${org.f.toLowerCase()}.`;
        tip = 'Kenali organel khas sel hewan (sentriol, lisosom) dan sel tumbuhan (dinding sel, kloroplas, vakuola besar).';
      } else if (tIdx === 15) {
        // Sistem Gerak (8 distinct joints and bone conditions)
        const gerakList = [
          { n: 'Sendi Engsel', d: 'Hubungan antartulang pada siku dan lutut yang memungkinkan gerakan ke satu arah saja', o: ['Gerakan berputar mengelilingi poros tulang', 'Gerakan bebas ke segala arah seperti gelang panggul', 'Gerakan bergeser antar tulang karpal'] },
          { n: 'Sendi Peluru', d: 'Hubungan gelang panggul dengan tulang paha yang memungkinkan gerakan bebas ke segala arah', o: ['Gerakan terbatas hanya satu bidang datar', 'Gerakan rotasi kepala memutar', 'Gerakan dua arah seperti pelana kuda'] },
          { n: 'Sendi Putar', d: 'Persendian antara tulang atlas dan tulang pemutar tengkorak yang memungkinkan gerakan rotasi memutar', o: ['Gerakan menekuk satu arah pada siku', 'Gerakan meluncur pada pergelangan kaki', 'Gerakan mengatup tanpa celah'] },
          { n: 'Sendi Pelana', d: 'Hubungan antara tulang telapak tangan dengan pangkal ibu jari yang memungkinkan gerakan ke dua arah', o: ['Gerakan memutar penuh 360 derajat', 'Gerakan satu arah seperti daun pintu', 'Gerakan membengkokkan tulang selangka'] },
          { n: 'Kelainan Lordosis', d: 'Kondisi ruas tulang belakang melengkung berlebihan ke arah depan di daerah pinggang', o: ['Tulang belakang bengkok ke arah samping kiri/kanan', 'Tulang punggung bungkuk ke arah belakang', 'Pengurangan massa kalsium pada persendian'] },
          { n: 'Kelainan Kifosis', d: 'Kelainan tulang belakang melengkung berlebihan ke arah belakang sehingga tampak bungkuk', o: ['Lengkung tulang pinggang ke arah depan', 'Pergeseran cakram sendi lutut', 'Pelemahan ligamen pergelangan tangan'] },
          { n: 'Kelainan Skoliosis', d: 'Kondisi tulang belakang melengkung secara tidak normal ke arah samping kiri atau kanan membentuk huruf S', o: ['Kelainan tulang yang bungkuk ke belakang', 'Tulang leher kaku tidak dapat digerakkan', 'Penumpukan kristal asam urat di jemari'] },
          { n: 'Osteoporosis', d: 'Penyakit penurunan densitas kepadatan matriks tulang akibat kekurangan kalsium sehingga tulang menjadi rapuh', o: ['Peradangan sendi oleh bakteri patogen', 'Patah tulang akibat cedera benturan', 'Pertumbuhan tulang yang tidak terkendali'] }
        ];
        const gItem = gerakList[(step - 1) % gerakList.length];
        qText = `Dalam materi sistem gerak manusia MTs, konsep biologis "${gItem.n}" didefinisikan secara medis dan anatomis sebagai...`;
        cText = gItem.d;
        dList = gItem.o;
        exp = `${gItem.n} adalah ${gItem.d.toLowerCase()}.`;
        tip = 'Pahami pembagian sendi diartrosis dan jenis kelainan kelengkungan tulang belakang.';
      } else if (tIdx === 16) {
        // Enzim Pencernaan (8 distinct enzymes/organs)
        const enzimList = [
          { e: 'Tripsin', o: 'Pankreas dan bekerja di usus halus', f: 'Menghidrolisis pepton menjadi asam-asam amino bebas', d: ['Mengubah amilum pati menjadi glukosa', 'Mengendapkan kasein kalsium susu', 'Mencerna serat selulosa sayuran'] },
          { e: 'Amilase / Ptialin', o: 'Kelenjar ludah di rongga mulut', f: 'Memecah karbohidrat amilum menjadi disakarida maltosa', d: ['Mengubah asam lemak menjadi gliserol', 'Mengaktifkan pepsinogen lambung', 'Membunuh bakteri patogen makanan'] },
          { e: 'Pepsin', o: 'Kelenjar dinding lambung dalam suasana asam', f: 'Memecah ikatan protein kompleks menjadi molekul pepton', d: ['Mengemulsikan lemak makanan di usus', 'Mengubah glukosa menjadi glikogen', 'Menetralkan asam chyme dari lambung'] },
          { e: 'Lipase Pankreas', o: 'Pankreas dan disalurkan ke duodenum', f: 'Menghidrolisis lemak yang telah terkelarut menjadi asam lemak dan gliserol', d: ['Memecah protein menjadi asam amino', 'Mengikat vitamin B12 di lambung', 'Mengubah maltosa menjadi glukosa murni'] },
          { e: 'Asam Klorida (HCl)', o: 'Sel parietal mukosa lambung', f: 'Menciptakan suasana asam untuk membunuh patogen dan mengaktifkan pepsinogen', d: ['Menghancurkan batu empedu di hati', 'Mengabsorpsi molekul air pada feses', 'Mengemulsi kolesterol darah'] },
          { e: 'Cairan Empedu', o: 'Dihasilkan hati dan disimpan di kantung empedu', f: 'Mengemulsi gumpalan lemak menjadi butiran halus agar mudah dihidrolisis lipase', d: ['Menghidrolisis protein menjadi pepton', 'Menyerap asam amino di ileum', 'Menghentikan sekresi asam lambung'] },
          { e: 'Renin', o: 'Dinding lambung mamalia muda', f: 'Mengendapkan protein kasein dari susu agar dapat dicerna lebih lanjut', d: ['Mengubah sukrosa menjadi fruktosa', 'Membantu penyerapan vitamin larut air', 'Mencegah pembusukan feses'] },
          { e: 'Maltase', o: 'Epitel mukosa dinding usus halus', f: 'Menghidrolisis disakarida maltosa menjadi dua molekul glukosa', d: ['Memecah lemak menjadi asam lemak', 'Mengikat asam amino esensial', 'Memproduksi getah lambung'] }
        ];
        const eItem = enzimList[(step - 1) % enzimList.length];
        qText = `Pada sistem digesti manusia, zat atau enzim "${eItem.e}" yang dihasilkan di ${eItem.o} berperan spesifik untuk...`;
        cText = eItem.f;
        dList = eItem.d;
        exp = `${eItem.e} berfungsi ${eItem.f.toLowerCase()}.`;
        tip = 'Kenali enzim lambung (pepsin, renin, HCl) dan getah pankreas (amilase, tripsin, lipase).';
      } else if (tIdx === 17) {
        // Peredaran Darah (8 distinct cardiovascular concepts)
        const darahList = [
          { t: 'Sirkulasi Darah Kecil (Pulmonal)', r: 'Bilik kanan jantung -> Arteri pulmonalis -> Paru-paru -> Vena pulmonalis -> Serambi kiri jantung', d: ['Bilik kiri jantung -> Aorta -> Seluruh tubuh -> Vena kava -> Serambi kanan', 'Serambi kanan -> Paru-paru -> Bilik kiri -> Vena kava', 'Bilik kanan -> Vena kava -> Paru-paru -> Arteri pulmonalis -> Serambi kanan'] },
          { t: 'Sirkulasi Darah Besar (Sistemik)', r: 'Bilik kiri jantung -> Aorta -> Pembuluh arteri seluruh tubuh -> Vena kava -> Serambi kanan jantung', d: ['Bilik kanan -> Paru-paru -> Vena pulmonalis -> Serambi kiri', 'Serambi kiri -> Arteri pulmonalis -> Seluruh tubuh -> Bilik kanan', 'Bilik kiri -> Vena pulmonalis -> Seluruh tubuh -> Aorta -> Serambi kanan'] },
          { t: 'Fungsi Sel Darah Merah (Eritrosit)', r: 'Mengikat oksigen melalui pigmen hemoglobin dari paru-paru untuk diedarkan ke seluruh jaringan tubuh', d: ['Memproduksi antibodi untuk melawan infeksi virus', 'Membekukan darah saat terjadi luka terbuka', 'Menelan bakteri patogen melalui gerakan amuboid'] },
          { t: 'Fungsi Keping Darah (Trombosit)', r: 'Menginisiasi proses pembekuan darah dengan melepaskan trombokinase saat terjadi luka robek', d: ['Mengangkut sari makanan berupa asam amino', 'Mengatur tekanan osmosis plasma darah', 'Menghancurkan eritrosit tua di limpa'] },
          { t: 'Ciri Pembuluh Nadi (Arteri)', r: 'Dinding pembuluh tebal elastis, membawa darah kaya O2 keluar dari jantung (kecuali arteri pulmonalis), dan denyut terasa', d: ['Dinding tipis tidak elastis dengan banyak katup sepanjang pembuluh', 'Membawa darah masuk kembali ke jantung dengan tekanan lemah', 'Mengalir lambat dan jika terpotong darah hanya menetes'] },
          { t: 'Ciri Pembuluh Balik (Vena)', r: 'Dinding tipis kurang elastis, memiliki katup di sepanjang pembuluh, dan membawa darah kembali menuju jantung', d: ['Dinding sangat tebal berotot dengan denyutan kuat', 'Membawa darah keluar dari bilik jantung bertekanan tinggi', 'Hanya memiliki satu katup di dekat pangkal jantung'] },
          { t: 'Golongan Darah Sistem ABO', r: 'Seseorang bergolongan darah A memiliki aglutinogen A pada eritrosit dan aglutinin anti-B di dalam plasma darahnya', d: ['Memiliki aglutinogen B dan antibodi anti-A', 'Tidak memiliki aglutinogen sama sekali pada eritrositnya', 'Memiliki aglutinogen A dan aglutinogen B sekaligus tanpa antibodi'] },
          { t: 'Kelainan Aterosklerosis', r: 'Penyempitan dan pengerasan pembuluh darah arteri akibat penumpukan plak timbunan lemak (kolesterol)', d: ['Kelebihan sel darah putih akibat kanker sumsum tulang', 'Darah sukar membeku karena kelainan genetis hemofilia', 'Penurunan tekanan darah drastis akibat dehidrasi'] }
        ];
        const dItem = darahList[(step - 1) % darahList.length];
        qText = `Dalam kajian sistem peredaran darah kardiovaskular manusia MTs, konsep "${dItem.t}" memiliki deskripsi ilmiah yang tepat yaitu...`;
        cText = dItem.r;
        dList = dItem.d;
        exp = `${dItem.t}: ${dItem.r}.`;
        tip = 'Kecil: Bilik Kanan -> Paru -> Serambi Kiri; Besar: Bilik Kiri -> Tubuh -> Serambi Kanan.';
      } else if (tIdx === 18) {
        // Ekskresi & Nefron (8 distinct nephron/urinary processes)
        const ekskresiList = [
          { p: 'Filtrasi Darah di Glomerulus', h: 'Urine primer yang masih mengandung air, glukosa, asam amino, dan garam tanpa protein darah', d: ['Urine sesungguhnya yang siap dibuang ke ureter', 'Cairan empedu hati pekat', 'Darah murni yang bebas dari semua jenis ion'] },
          { p: 'Reabsorpsi di Tubulus Kontortus Proksimal (TKP)', h: 'Penyerapan kembali zat berguna (seperti seluruh glukosa dan asam amino) menghasilkan urine sekunder', d: ['Penyaringan sel-sel darah merah dari plasma', 'Penambahan zat racun sisa metabolisme obat-obatan', 'Pemekatan urine dengan kristal asam urat murni'] },
          { p: 'Augmentasi di Tubulus Kontortus Distal (TKD)', h: 'Pengeluaran zat sisa racun dan kelebihan ion H+ atau kalium menghasilkan urine sesungguhnya', d: ['Penyaringan protein darah berberat molekul besar', 'Penyerapan kembali 100% glukosa dari filtrat', 'Pembentukan asam empedu dari bilirubin'] },
          { p: 'Kelainan Albuminuria pada Ginjal', h: 'Adanya kandungan molekul protein albumin di dalam urine akibat kerusakan pada glomerulus', d: ['Tingginya kadar gula glukosa dalam urine akibat kekurangan insulin', 'Produksi urine sangat berlimpah karena kekurangan hormon ADH', 'Penyumbatan saluran ureter oleh endapan batu kalsium oksalat'] },
          { p: 'Kelainan Diabetes Melitus pada Sistem Ekskresi', h: 'Ditemukannya glukosa di dalam urine karena kekurangan produksi hormon insulin oleh pankreas', d: ['Kerusakan saringan kapsula Bowman oleh infeksi bakteri', 'Keluarnya sel darah merah bersama urine saat berkemih', 'Ketidakmampuan ginjal menyerap air akibat gagal ginjal kronis'] },
          { p: 'Kelainan Diabetes Insipidus', h: 'Kondisi produksi urine yang sangat melimpah encer akibat kekurangan hormon antidiuretik (ADH)', d: ['Tingginya kadar asam urat dalam darah persendian', 'Kerusakan nefron akibat pengendapan kalsium', 'Peradangan kandung kemih oleh kuman koliform'] },
          { p: 'Fungsi Organ Hati dalam Ekskresi', h: 'Merombak sel darah merah yang telah usang menjadi zat warna empedu (bilirubin dan biliverdin)', d: ['Menyaring darah menghasilkan urine primer', 'Mengeluarkan kelebihan garam mineral lewat pori-pori', 'Mengekskresikan gas oksigen hasil metabolisme seluler'] },
          { p: 'Fungsi Kelenjar Keringat pada Kulit', h: 'Mengekskresikan keringat berupa air, garam NaCl, dan sedikit urea sekaligus mengatur suhu tubuh', d: ['Menghasilkan hormon insulin untuk metabolisme', 'Menyerap cairan limfa dari jaringan epidermis', 'Membentuk lapisan keratin pelindung mekanis'] }
        ];
        const ekItem = ekskresiList[(step - 1) % ekskresiList.length];
        qText = `Pada fisiologi sistem ekskresi manusia, tahapan proses atau kelainan "${ekItem.p}" dicirikan oleh...`;
        cText = ekItem.h;
        dList = ekItem.d;
        exp = `${ekItem.p} ditandai oleh: ${ekItem.h.toLowerCase()}.`;
        tip = 'Filtrasi di glomerulus (urine primer), Reabsorpsi di TKP (urine sekunder), Augmentasi di TKD (urine sesungguhnya).';
      } else {
        // Bioteknologi & Genetika (8 distinct biotechnology/genetics questions)
        const bioList = [
          { p: 'Fermentasi tempe tradisional kedelai', m: 'Jamur Rhizopus oryzae dan Rhizopus oligosporus', d: ['Bakteri Escherichia coli galur non-patogen', 'Khamir Saccharomyces cerevisiae murni', 'Bakteri Acetobacter xylinum air kelapa'] },
          { p: 'Fermentasi susu menjadi yoghurt asam', m: 'Bakteri Lactobacillus bulgaricus dan Streptococcus thermophilus', d: ['Jamur Aspergillus wentii kedelai', 'Bakteri Bacillus thuringiensis tanaman', 'Jamur Neurospora sitophila oncom'] },
          { p: 'Pembuatan nata de coco dari air kelapa', m: 'Bakteri Acetobacter xylinum yang membentuk serat selulosa mikro', d: ['Khamir Saccharomyces ellipsoideus', 'Jamur Penicillium notatum penghasil antibiotik', 'Bakteri Lactobacillus casei usus'] },
          { p: 'Fermentasi tapai singkong manis', m: 'Khamir Saccharomyces cerevisiae yang mengubah pati menjadi alkohol dan gula', d: ['Bakteri Clostridium botulinum kaleng', 'Jamur Rhizopus stolonifer pembusuk roti', 'Bakteri Pseudomonas putida pengurai minyak'] },
          { p: 'Produksi kecap manis tradisional kedelai hitam', m: 'Jamur Aspergillus oryzae dan Aspergillus wentii', d: ['Bakteri Acetobacter aceti pembuat cuka', 'Jamur Saccharomyces boulardii suplemen', 'Bakteri Streptococcus mutans plak gigi'] },
          { p: 'Bioteknologi modern teknik Rekayasa Genetika (DNA Rekombinan)', m: 'Penyisipan gen insulin manusia ke dalam plasmid bakteri Escherichia coli untuk memproduksi hormon insulin murni', d: ['Pengembangbiakan tanaman hias melalui stek batang pohon', 'Fermentasi ragi roti secara tertutup dalam ruang hangat', 'Penyilangan dua varietas padi dengan penyerbukan silang buatan'] },
          { p: 'Teknik Kultur Jaringan Tanaman (Totipotensi Sel)', m: 'Menumbuhkan eksplan potongan jaringan tumbuhan steril pada medium buatan menjadi tanaman baru utuh', d: ['Memasukkan inti sel somatis ke dalam sel telur tanpa inti', 'Menggabungkan dua sel tanaman menggunakan fusi protoplas', 'Memproduksi bibit tanaman hanya melalui perkecambahan biji'] },
          { p: 'Persilangan monohibrid dominan penuh antara tanaman berbunga merah (MM) dengan putih (mm)', m: 'Rasio fenotip pada keturunan F2 adalah 3 Merah : 1 Putih', d: ['Rasio fenotip F2 adalah 1 Merah : 2 Merah Muda : 1 Putih', 'Semua keturunan F2 berfenotip putih resesif', 'Rasio genotip F2 adalah 9 : 3 : 3 : 1'] }
        ];
        const bItem = bioList[(step - 1) % bioList.length];
        qText = `Dalam ranah bioteknologi dan pewarisan sifat materi IPA MTs, penerapan konsep "${bItem.p}" melibatkan mekanisme...`;
        cText = bItem.m;
        dList = bItem.d;
        exp = `${bItem.p} didasarkan pada prinsip ${bItem.m.toLowerCase()}.`;
        tip = 'Kenali mikroorganisme fermentasi konvensional dan teknik kultur jaringan / DNA rekombinan.';
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
  generateIpaMTs
};
