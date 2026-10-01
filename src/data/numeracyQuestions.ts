import { Question } from '../types';

export const numeracyQuestions: Question[] = [
  {
    "id": "NM001",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "Bilangan & Aritmetika Sosial",
    "competency": "Menyelesaikan masalah kontekstual bilangan bulat, pecahan, persen, dan aritmetika sosial madrasah",
    "question": "Pak Haji Ahmad memperoleh penghasilan bersih dari usaha percetakan sebesar Rp 20.000.000 per bulan. Jika ia menunaikan zakat penghasilan sebesar 2,5%, kemudian separuh dari sisa penghasilannya digunakan untuk biaya kebutuhan rumah tangga, maka uang yang tersisa adalah...",
    "optionA": "Rp 9.500.000",
    "optionB": "Rp 9.750.000",
    "optionC": "Rp 10.000.000",
    "optionD": "Rp 19.500.000",
    "options": [
      {
        "id": "A",
        "text": "Rp 9.500.000"
      },
      {
        "id": "B",
        "text": "Rp 9.750.000"
      },
      {
        "id": "C",
        "text": "Rp 10.000.000"
      },
      {
        "id": "D",
        "text": "Rp 19.500.000"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Zakat = 2,5% x Rp 20.000.000 = Rp 500.000. Sisa setelah zakat = Rp 20.000.000 - Rp 500.000 = Rp 19.500.000. Kebutuhan rumah tangga = 1/2 x Rp 19.500.000 = Rp 9.750.000. Sisa uang = Rp 9.750.000.",
    "tip": "Hitung zakat terlebih dahulu, kurangkan, lalu bagi sisa sesuai pecahan yang ditentukan.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKG Guru MI Kemenag 2026"
  },
  {
    "id": "NM002",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "Bilangan & Aritmetika Sosial",
    "competency": "Menyelesaikan masalah kontekstual bilangan bulat, pecahan, persen, dan aritmetika sosial madrasah",
    "question": "Dalam pembelajaran operasi hitung bilangan bulat, guru menggunakan kartu hitam bertanda (+) bernilai +1 dan kartu putih bertanda (-) bernilai -1. Jika seorang siswa memiliki 5 kartu hitam dan dipasangkan dengan 8 kartu putih, maka nilai bilangan yang terbentuk adalah...",
    "optionA": "+3",
    "optionB": "-3",
    "optionC": "+13",
    "optionD": "-13",
    "options": [
      {
        "id": "A",
        "text": "+3"
      },
      {
        "id": "B",
        "text": "-3"
      },
      {
        "id": "C",
        "text": "+13"
      },
      {
        "id": "D",
        "text": "-13"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Setiap pasang 1 kartu hitam (+1) dan 1 kartu putih (-1) bernilai netral (0). Dari 5 kartu hitam dan 8 kartu putih, terbentuk 5 pasang netral dan tersisa 3 kartu putih (-3). Operasinya: 5 + (-8) = -3.",
    "tip": "Pasangan (+) dan (-) saling meniadakan menjadi nol, sisanya adalah hasil akhir.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKG Guru MI Kemenag 2026"
  },
  {
    "id": "NM003",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "Bilangan & Aritmetika Sosial",
    "competency": "Menyelesaikan masalah kontekstual bilangan bulat, pecahan, persen, dan aritmetika sosial madrasah",
    "question": "Koperasi madrasah membeli 4 lusin buku tulis dengan harga total Rp 144.000. Jika buku tersebut dijual eceran seharga Rp 4.000 per buku, maka persentase keuntungan yang diperoleh koperasi adalah...",
    "optionA": "25%",
    "optionB": "33,33%",
    "optionC": "20%",
    "optionD": "15%",
    "options": [
      {
        "id": "A",
        "text": "25%"
      },
      {
        "id": "B",
        "text": "33,33%"
      },
      {
        "id": "C",
        "text": "20%"
      },
      {
        "id": "D",
        "text": "15%"
      }
    ],
    "correctAnswer": "B",
    "explanation": "4 lusin = 4 x 12 = 48 buku. Modal per buku = Rp 144.000 / 48 = Rp 3.000. Harga jual = Rp 4.000. Untung per buku = Rp 1.000. Persentase untung = (1.000 / 3.000) x 100% = 33,33%.",
    "tip": "Untung = (Harga Jual - Harga Beli) / Harga Beli x 100%.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKG Guru MI Kemenag 2026"
  },
  {
    "id": "NM004",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "FPB & KPK Kontekstual",
    "competency": "Menerapkan konsep faktor persekutuan terbesar dan kelipatan persekutuan terkecil dalam problem solving",
    "question": "Madrasah menerima sumbangan 72 buku Al-Qur'an, 96 buku Fikih, dan 120 buku cerita Islam. Semua buku tersebut akan dibagikan ke beberapa perpustakaan cabang madrasah binaan dengan jumlah dan jenis buku yang sama banyak. Jumlah perpustakaan binaan terbanyak yang dapat menerima paket buku tersebut adalah...",
    "optionA": "12 madrasah",
    "optionB": "24 madrasah",
    "optionC": "36 madrasah",
    "optionD": "48 madrasah",
    "options": [
      {
        "id": "A",
        "text": "12 madrasah"
      },
      {
        "id": "B",
        "text": "24 madrasah"
      },
      {
        "id": "C",
        "text": "36 madrasah"
      },
      {
        "id": "D",
        "text": "48 madrasah"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Mencari pembagian merata terbanyak berarti mencari FPB dari 72, 96, dan 120. Faktorisasi prima: 72 = 2^3 x 3^2; 96 = 2^5 x 3; 120 = 2^3 x 3 x 5. FPB = 2^3 x 3 = 8 x 3 = 24 madrasah.",
    "tip": "Kata kunci \"dibagi sama banyak / paling banyak\" mengindikasikan operasi FPB.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKG Guru MI Kemenag 2026"
  },
  {
    "id": "NM005",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "FPB & KPK Kontekstual",
    "competency": "Menerapkan konsep faktor persekutuan terbesar dan kelipatan persekutuan terkecil dalam problem solving",
    "question": "Tiga lonceng madrasah berdentang pada interval teratur. Lonceng A berdentang setiap 15 menit, lonceng B setiap 20 menit, dan lonceng C setiap 30 menit. Jika ketiga lonceng berdentang bersamaan pada pukul 07.00, maka ketiga lonceng akan berdentang bersamaan kembali pada pukul...",
    "optionA": "07.45",
    "optionB": "08.00",
    "optionC": "08.30",
    "optionD": "09.00",
    "options": [
      {
        "id": "A",
        "text": "07.45"
      },
      {
        "id": "B",
        "text": "08.00"
      },
      {
        "id": "C",
        "text": "08.30"
      },
      {
        "id": "D",
        "text": "09.00"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Peristiwa berulang bersamaan diselesaikan dengan KPK dari 15, 20, dan 30. Faktorisasi prima: 15 = 3 x 5; 20 = 2^2 x 5; 30 = 2 x 3 x 5. KPK = 2^2 x 3 x 5 = 60 menit. Waktu bersamaan = 07.00 + 60 menit = pukul 08.00.",
    "tip": "Kata kunci \"bersama-sama kembali / jadwal serentak\" mengindikasikan operasi KPK.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKG Guru MI Kemenag 2026"
  },
  {
    "id": "NM006",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "Geometri & Pengukuran",
    "competency": "Menghitung volume ruang kubus/balok, kesebangunan bangun datar, dan debit aliran zat cair",
    "question": "Sebuah bak wudhu madrasah berbentuk kubus terisi air setengah bagian sebanyak 256.000 cm³. Panjang rusuk bagian dalam bak wudhu tersebut adalah...",
    "optionA": "60 cm",
    "optionB": "70 cm",
    "optionC": "80 cm",
    "optionD": "90 cm",
    "options": [
      {
        "id": "A",
        "text": "60 cm"
      },
      {
        "id": "B",
        "text": "70 cm"
      },
      {
        "id": "C",
        "text": "80 cm"
      },
      {
        "id": "D",
        "text": "90 cm"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Volume penuh bak = 2 x 256.000 cm³ = 512.000 cm³. Rusuk kubus (r) = akar pangkat tiga dari 512.000 = 80 cm.",
    "tip": "Cari volume total terlebih dahulu, kemudian tarik akar pangkat 3.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKG Guru MI Kemenag 2026"
  },
  {
    "id": "NM007",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "Geometri & Pengukuran",
    "competency": "Menghitung volume ruang kubus/balok, kesebangunan bangun datar, dan debit aliran zat cair",
    "question": "Sebuah bak penampungan air wudhu berkapasitas 3.600 liter dikosongkan untuk dibersihkan menggunakan dua pipa saluran pembuangan. Pipa A memiliki debit 40 liter/menit dan pipa B berdebit 20 liter/menit. Waktu yang dibutuhkan hingga bak kosong sepenuhnya adalah...",
    "optionA": "45 menit",
    "optionB": "60 menit",
    "optionC": "90 menit",
    "optionD": "120 menit",
    "options": [
      {
        "id": "A",
        "text": "45 menit"
      },
      {
        "id": "B",
        "text": "60 menit"
      },
      {
        "id": "C",
        "text": "90 menit"
      },
      {
        "id": "D",
        "text": "120 menit"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Total debit gabungan kedua pipa = 40 + 20 = 60 liter/menit. Waktu pengosongan = Volume / Debit total = 3.600 liter / 60 liter/menit = 60 menit (1 jam).",
    "tip": "Jika dua pipa bekerja bersamaan, jumlahkan debit kedua pipa: Q_total = Q1 + Q2.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKG Guru MI Kemenag 2026"
  },
  {
    "id": "NM008",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "Geometri & Pengukuran",
    "competency": "Menghitung volume ruang kubus/balok, kesebangunan bangun datar, dan debit aliran zat cair",
    "question": "Segitiga ABC sebangun dengan segitiga DEC. Jika panjang AB = 12 cm, DE = 8 cm, dan panjang sisi AC = 15 cm, maka panjang sisi DC adalah...",
    "optionA": "8 cm",
    "optionB": "10 cm",
    "optionC": "12 cm",
    "optionD": "14 cm",
    "options": [
      {
        "id": "A",
        "text": "8 cm"
      },
      {
        "id": "B",
        "text": "10 cm"
      },
      {
        "id": "C",
        "text": "12 cm"
      },
      {
        "id": "D",
        "text": "14 cm"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Perbandingan sisi-sisi bersesuaian pada segitiga sebangun: DE / AB = DC / AC => 8 / 12 = DC / 15 => 2 / 3 = DC / 15 => DC = (2/3) x 15 = 10 cm.",
    "tip": "Gunakan rasio kesebangunan perbandingan sisi bersesuaian.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKG Guru MI Kemenag 2026"
  },
  {
    "id": "NM009",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "Pola Bilangan & Logika Matematika",
    "competency": "Menganalisis barisan aritmetika, pola geometri batang, silogisme, dan kombinatorika jabat tangan",
    "question": "Siswa menyusun batang korek api membentuk barisan segitiga: susunan 1 butuh 3 batang, susunan 2 butuh 5 batang, susunan 3 butuh 7 batang, dan seterusnya. Banyaknya batang korek api yang dibutuhkan untuk membentuk susunan ke-20 adalah...",
    "optionA": "39 batang",
    "optionB": "41 batang",
    "optionC": "43 batang",
    "optionD": "45 batang",
    "options": [
      {
        "id": "A",
        "text": "39 batang"
      },
      {
        "id": "B",
        "text": "41 batang"
      },
      {
        "id": "C",
        "text": "43 batang"
      },
      {
        "id": "D",
        "text": "45 batang"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Barisan aritmetika: suku pertama a = 3, beda b = 2. Rumus suku ke-n: Un = a + (n - 1)b. U20 = 3 + (20 - 1) x 2 = 3 + 19 x 2 = 3 + 38 = 41 batang.",
    "tip": "Un = a + (n - 1)b untuk barisan aritmetika bertingkat satu.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKG Guru MI Kemenag 2026"
  },
  {
    "id": "NM010",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "Pola Bilangan & Logika Matematika",
    "competency": "Menganalisis barisan aritmetika, pola geometri batang, silogisme, dan kombinatorika jabat tangan",
    "question": "Dalam pertemuan silaturahmi guru madrasah yang dihadiri oleh 40 orang guru, setiap guru saling berjabat tangan satu sama lain tepat satu kali. Banyaknya jabat tangan yang terjadi adalah...",
    "optionA": "780 jabat tangan",
    "optionB": "800 jabat tangan",
    "optionC": "820 jabat tangan",
    "optionD": "1.600 jabat tangan",
    "options": [
      {
        "id": "A",
        "text": "780 jabat tangan"
      },
      {
        "id": "B",
        "text": "800 jabat tangan"
      },
      {
        "id": "C",
        "text": "820 jabat tangan"
      },
      {
        "id": "D",
        "text": "1.600 jabat tangan"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kombinasi 2 orang dari 40 orang: C(40, 2) = (40 x 39) / (2 x 1) = 1.560 / 2 = 780 jabat tangan.",
    "tip": "Rumus jabat tangan n orang = n(n - 1) / 2.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKG Guru MI Kemenag 2026"
  },
  {
    "id": "NM011",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "Pola Bilangan & Logika Matematika",
    "competency": "Menganalisis barisan aritmetika, pola geometri batang, silogisme, dan kombinatorika jabat tangan",
    "question": "Diberikan dua premis: Premis 1: Jika guru menguasai literasi digital, maka proses pembelajaran di madrasah berlangsung interaktif. Premis 2: Proses pembelajaran di madrasah tidak berlangsung interaktif. Kesimpulan yang sah berdasarkan kaidah logika modus tollens adalah...",
    "optionA": "Guru menguasai literasi digital",
    "optionB": "Guru tidak menguasai literasi digital",
    "optionC": "Pembelajaran madrasah tetap berjalan baik",
    "optionD": "Siswa belajar mandiri tanpa guru",
    "options": [
      {
        "id": "A",
        "text": "Guru menguasai literasi digital"
      },
      {
        "id": "B",
        "text": "Guru tidak menguasai literasi digital"
      },
      {
        "id": "C",
        "text": "Pembelajaran madrasah tetap berjalan baik"
      },
      {
        "id": "D",
        "text": "Siswa belajar mandiri tanpa guru"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Modus Tollens: Premis 1: p -> q; Premis 2: ~q; Kesimpulan yang sah adalah ~p (Guru tidak menguasai literasi digital).",
    "tip": "Modus Tollens: Jika p maka q; bukan q; maka kesimpulannya bukan p.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKG Guru MI Kemenag 2026"
  },
  {
    "id": "NM012",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "Operasi Pecahan Campuran",
    "competency": "Menyelesaikan operasi hitung pecahan campuran",
    "question": "Ibu memiliki persediaan 2 1/2 kg tepung terigu. Ia membeli lagi 1 3/4 kg untuk membuat kue madrasah. Total tepung terigu ibu sekarang adalah...",
    "optionA": "4 1/4 kg",
    "optionB": "3 3/4 kg",
    "optionC": "4 1/2 kg",
    "optionD": "3 4/6 kg",
    "options": [
      {
        "id": "A",
        "text": "4 1/4 kg"
      },
      {
        "id": "B",
        "text": "3 3/4 kg"
      },
      {
        "id": "C",
        "text": "4 1/2 kg"
      },
      {
        "id": "D",
        "text": "3 4/6 kg"
      }
    ],
    "correctAnswer": "A",
    "explanation": "2 1/2 + 1 3/4 = 2 2/4 + 1 3/4 = 3 5/4 = 4 1/4 kg.",
    "tip": "Perhatikan konsep esensial dan kata kunci pada stimulus soal.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "NM013",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "Keliling Bangun Datar Persegi Panjang",
    "competency": "Menghitung keliling lapangan madrasah",
    "question": "Halaman upacara madrasah berbentuk persegi panjang dengan panjang 25 meter dan lebar 15 meter. Keliling halaman tersebut adalah...",
    "optionA": "40 meter",
    "optionB": "80 meter",
    "optionC": "375 meter",
    "optionD": "100 meter",
    "options": [
      {
        "id": "A",
        "text": "40 meter"
      },
      {
        "id": "B",
        "text": "80 meter"
      },
      {
        "id": "C",
        "text": "375 meter"
      },
      {
        "id": "D",
        "text": "100 meter"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Keliling = 2 x (panjang + lebar) = 2 x (25 + 15) = 2 x 40 = 80 meter.",
    "tip": "Perhatikan konsep esensial dan kata kunci pada stimulus soal.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "NM014",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "Luas Bangun Datar Segitiga",
    "competency": "Menghitung luas bidang segitiga",
    "question": "Sebuah papan nama madrasah berbentuk segitiga siku-siku memiliki panjang alas 12 cm dan tinggi 16 cm. Luas papan nama tersebut adalah...",
    "optionA": "192 cm²",
    "optionB": "48 cm²",
    "optionC": "96 cm²",
    "optionD": "28 cm²",
    "options": [
      {
        "id": "A",
        "text": "192 cm²"
      },
      {
        "id": "B",
        "text": "48 cm²"
      },
      {
        "id": "C",
        "text": "96 cm²"
      },
      {
        "id": "D",
        "text": "28 cm²"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Luas segitiga = 1/2 x alas x tinggi = 1/2 x 12 x 16 = 96 cm².",
    "tip": "Perhatikan konsep esensial dan kata kunci pada stimulus soal.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "NM015",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "Persentase dan Diskon",
    "competency": "Menghitung harga barang setelah diskon",
    "question": "Sebuah tas sekolah di koperasi madrasah berharga Rp120.000. Jika pembeli mendapatkan diskon sebesar 20%, uang yang harus dibayar adalah...",
    "optionA": "Rp100.000",
    "optionB": "Rp24.000",
    "optionC": "Rp90.000",
    "optionD": "Rp96.000",
    "options": [
      {
        "id": "A",
        "text": "Rp100.000"
      },
      {
        "id": "B",
        "text": "Rp24.000"
      },
      {
        "id": "C",
        "text": "Rp90.000"
      },
      {
        "id": "D",
        "text": "Rp96.000"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Diskon = 20% x Rp120.000 = Rp24.000. Harga bayar = Rp120.000 - Rp24.000 = Rp96.000.",
    "tip": "Perhatikan konsep esensial dan kata kunci pada stimulus soal.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "NM016",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "FPB dan KPK",
    "competency": "Menentukan FPB dari dua bilangan dalam pembagian kelompok",
    "question": "Guru MI ingin membagikan 36 buku tulis dan 48 pensil kepada sejumlah siswa berprestasi dengan jumlah yang sama banyak. Jumlah siswa terbanyak yang menerima adalah...",
    "optionA": "12 siswa",
    "optionB": "6 siswa",
    "optionC": "18 siswa",
    "optionD": "24 siswa",
    "options": [
      {
        "id": "A",
        "text": "12 siswa"
      },
      {
        "id": "B",
        "text": "6 siswa"
      },
      {
        "id": "C",
        "text": "18 siswa"
      },
      {
        "id": "D",
        "text": "24 siswa"
      }
    ],
    "correctAnswer": "A",
    "explanation": "FPB dari 36 (2² x 3²) dan 48 (2⁴ x 3) adalah 2² x 3 = 12.",
    "tip": "Perhatikan konsep esensial dan kata kunci pada stimulus soal.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "NM017",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "KPK Waktu Bersamaan",
    "competency": "Menentukan waktu pertemuan berulang menggunakan KPK",
    "question": "Lampu merah menyala setiap 6 detik sekali dan lampu hijau menyala setiap 8 detik sekali. Kedua lampu akan menyala bersamaan setiap...",
    "optionA": "14 detik",
    "optionB": "24 detik",
    "optionC": "48 detik",
    "optionD": "12 detik",
    "options": [
      {
        "id": "A",
        "text": "14 detik"
      },
      {
        "id": "B",
        "text": "24 detik"
      },
      {
        "id": "C",
        "text": "48 detik"
      },
      {
        "id": "D",
        "text": "12 detik"
      }
    ],
    "correctAnswer": "B",
    "explanation": "KPK dari 6 dan 8 adalah 24.",
    "tip": "Perhatikan konsep esensial dan kata kunci pada stimulus soal.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "NM018",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "Volume Kubus",
    "competency": "Menghitung volume wadah kubus",
    "question": "Sebuah bak penampungan air wudhu berbentuk kubus memiliki panjang rusuk bagian dalam 80 cm. Volume bak tersebut dalam liter adalah...",
    "optionA": "64 liter",
    "optionB": "51,2 liter",
    "optionC": "512 liter",
    "optionD": "240 liter",
    "options": [
      {
        "id": "A",
        "text": "64 liter"
      },
      {
        "id": "B",
        "text": "51,2 liter"
      },
      {
        "id": "C",
        "text": "512 liter"
      },
      {
        "id": "D",
        "text": "240 liter"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Volume = 80 x 80 x 80 = 512.000 cm³ = 512 dm³ = 512 liter.",
    "tip": "Perhatikan konsep esensial dan kata kunci pada stimulus soal.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "NM019",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "Perbandingan Senilai",
    "competency": "Menyelesaikan masalah perbandingan senilai",
    "question": "Sebuah mobil antar-jemput siswa madrasah memerlukan 5 liter bensin untuk menempuh jarak 60 km. Bensin yang diperlukan untuk menempuh jarak 180 km adalah...",
    "optionA": "12 liter",
    "optionB": "18 liter",
    "optionC": "20 liter",
    "optionD": "15 liter",
    "options": [
      {
        "id": "A",
        "text": "12 liter"
      },
      {
        "id": "B",
        "text": "18 liter"
      },
      {
        "id": "C",
        "text": "20 liter"
      },
      {
        "id": "D",
        "text": "15 liter"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Konsumsi bensin = 60 / 5 = 12 km/liter. Untuk 180 km = 180 / 12 = 15 liter.",
    "tip": "Perhatikan konsep esensial dan kata kunci pada stimulus soal.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "NM020",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "Rata-Rata (Mean)",
    "competency": "Menghitung nilai rata-rata ulangan",
    "question": "Nilai ulangan matematika lima siswa MI adalah 75, 80, 85, 90, dan 70. Nilai rata-rata dari kelima siswa tersebut adalah...",
    "optionA": "80",
    "optionB": "78",
    "optionC": "82",
    "optionD": "85",
    "options": [
      {
        "id": "A",
        "text": "80"
      },
      {
        "id": "B",
        "text": "78"
      },
      {
        "id": "C",
        "text": "82"
      },
      {
        "id": "D",
        "text": "85"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Rata-rata = (75 + 80 + 85 + 90 + 70) / 5 = 400 / 5 = 80.",
    "tip": "Perhatikan konsep esensial dan kata kunci pada stimulus soal.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "NM021",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "Modus dan Median",
    "competency": "Menentukan modus data tunggal",
    "question": "Data berat badan (dalam kg) delapan siswa MI: 32, 35, 30, 32, 34, 32, 33, 31. Modus dari data tersebut adalah...",
    "optionA": "30 kg",
    "optionB": "32 kg",
    "optionC": "33 kg",
    "optionD": "35 kg",
    "options": [
      {
        "id": "A",
        "text": "30 kg"
      },
      {
        "id": "B",
        "text": "32 kg"
      },
      {
        "id": "C",
        "text": "33 kg"
      },
      {
        "id": "D",
        "text": "35 kg"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Nilai yang paling sering muncul adalah 32 (muncul sebanyak 3 kali).",
    "tip": "Perhatikan konsep esensial dan kata kunci pada stimulus soal.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "NM022",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "Diagram Batang",
    "competency": "Membaca dan menafsirkan data diagram batang",
    "question": "Data peminjaman buku perpustakaan madrasah: Senin 20 buku, Selasa 25 buku, Rabu 30 buku, Kamis 15 buku, Jumat 10 buku. Selisih peminjaman terbanyak dan tersedikit adalah...",
    "optionA": "15 buku",
    "optionB": "25 buku",
    "optionC": "20 buku",
    "optionD": "30 buku",
    "options": [
      {
        "id": "A",
        "text": "15 buku"
      },
      {
        "id": "B",
        "text": "25 buku"
      },
      {
        "id": "C",
        "text": "20 buku"
      },
      {
        "id": "D",
        "text": "30 buku"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Peminjaman terbanyak hari Rabu (30) dan tersedikit hari Jumat (10). Selisih = 30 - 10 = 20 buku.",
    "tip": "Perhatikan konsep esensial dan kata kunci pada stimulus soal.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "NM023",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "Kecepatan dan Waktu",
    "competency": "Menghitung waktu tempuh perjalanan",
    "question": "Ahmad bersepeda ke madrasah menempuh jarak 6 km dengan kecepatan rata-rata 12 km/jam. Waktu tempuh perjalanan Ahmad adalah...",
    "optionA": "20 menit",
    "optionB": "45 menit",
    "optionC": "15 menit",
    "optionD": "30 menit",
    "options": [
      {
        "id": "A",
        "text": "20 menit"
      },
      {
        "id": "B",
        "text": "45 menit"
      },
      {
        "id": "C",
        "text": "15 menit"
      },
      {
        "id": "D",
        "text": "30 menit"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Waktu = Jarak / Kecepatan = 6 / 12 jam = 0,5 jam = 30 menit.",
    "tip": "Perhatikan konsep esensial dan kata kunci pada stimulus soal.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "NM024",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "Debit Air",
    "competency": "Menghitung debit aliran air kran",
    "question": "Sebuah kran air dapat mengisi ember bervolume 18 liter dalam waktu 3 menit. Debit aliran air kran tersebut adalah...",
    "optionA": "6 liter/menit",
    "optionB": "3 liter/menit",
    "optionC": "54 liter/menit",
    "optionD": "9 liter/menit",
    "options": [
      {
        "id": "A",
        "text": "6 liter/menit"
      },
      {
        "id": "B",
        "text": "3 liter/menit"
      },
      {
        "id": "C",
        "text": "54 liter/menit"
      },
      {
        "id": "D",
        "text": "9 liter/menit"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Debit = Volume / Waktu = 18 liter / 3 menit = 6 liter/menit.",
    "tip": "Perhatikan konsep esensial dan kata kunci pada stimulus soal.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "NM025",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "Skala Peta",
    "competency": "Menghitung jarak sebenarnya berdasarkan skala",
    "question": "Jarak antara dua madrasah pada peta adalah 5 cm. Jika skala peta 1 : 100.000, maka jarak sebenarnya di lapangan adalah...",
    "optionA": "50 km",
    "optionB": "5 km",
    "optionC": "0,5 km",
    "optionD": "500 meter",
    "options": [
      {
        "id": "A",
        "text": "50 km"
      },
      {
        "id": "B",
        "text": "5 km"
      },
      {
        "id": "C",
        "text": "0,5 km"
      },
      {
        "id": "D",
        "text": "500 meter"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Jarak sebenarnya = 5 cm x 100.000 = 500.000 cm = 5 km.",
    "tip": "Perhatikan konsep esensial dan kata kunci pada stimulus soal.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "NM026",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "Keliling Lingkaran",
    "competency": "Menghitung keliling roda lingkaran",
    "question": "Sebuah roda sepeda santri memiliki jari-jari 14 cm (π = 22/7). Keliling roda sepeda tersebut adalah...",
    "optionA": "44 cm",
    "optionB": "154 cm",
    "optionC": "88 cm",
    "optionD": "616 cm",
    "options": [
      {
        "id": "A",
        "text": "44 cm"
      },
      {
        "id": "B",
        "text": "154 cm"
      },
      {
        "id": "C",
        "text": "88 cm"
      },
      {
        "id": "D",
        "text": "616 cm"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Keliling = 2 x π x r = 2 x (22/7) x 14 = 88 cm.",
    "tip": "Perhatikan konsep esensial dan kata kunci pada stimulus soal.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "NM027",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "Luas Lingkaran",
    "competency": "Menghitung luas taman lingkaran madrasah",
    "question": "Taman bunga berbentuk lingkaran memiliki diameter 14 meter (jari-jari 7 m, π = 22/7). Luas taman tersebut adalah...",
    "optionA": "44 m²",
    "optionB": "88 m²",
    "optionC": "308 m²",
    "optionD": "154 m²",
    "options": [
      {
        "id": "A",
        "text": "44 m²"
      },
      {
        "id": "B",
        "text": "88 m²"
      },
      {
        "id": "C",
        "text": "308 m²"
      },
      {
        "id": "D",
        "text": "154 m²"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Luas = π x r² = (22/7) x 7 x 7 = 154 m².",
    "tip": "Perhatikan konsep esensial dan kata kunci pada stimulus soal.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "NM028",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "Satuan Waktu",
    "competency": "Mengkonversi satuan waktu jam ke menit",
    "question": "Siswa kelas VI melaksanakan ujian madrasah selama 1 jam 45 menit. Waktu pelaksanaan ujian tersebut setara dengan...",
    "optionA": "105 menit",
    "optionB": "145 menit",
    "optionC": "85 menit",
    "optionD": "95 menit",
    "options": [
      {
        "id": "A",
        "text": "105 menit"
      },
      {
        "id": "B",
        "text": "145 menit"
      },
      {
        "id": "C",
        "text": "85 menit"
      },
      {
        "id": "D",
        "text": "95 menit"
      }
    ],
    "correctAnswer": "A",
    "explanation": "1 jam = 60 menit. 60 + 45 = 105 menit.",
    "tip": "Perhatikan konsep esensial dan kata kunci pada stimulus soal.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "NM029",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "Penjumlahan Bilangan Bulat",
    "competency": "Menyelesaikan operasi hitung bilangan bulat negatif",
    "question": "Suhu di dalam ruang laboratorium dingin adalah -5°C. Karena listrik padam, suhu naik sebesar 8°C. Suhu ruang laboratorium sekarang adalah...",
    "optionA": "-13°C",
    "optionB": "3°C",
    "optionC": "-3°C",
    "optionD": "13°C",
    "options": [
      {
        "id": "A",
        "text": "-13°C"
      },
      {
        "id": "B",
        "text": "3°C"
      },
      {
        "id": "C",
        "text": "-3°C"
      },
      {
        "id": "D",
        "text": "13°C"
      }
    ],
    "correctAnswer": "B",
    "explanation": "-5 + 8 = 3°C.",
    "tip": "Perhatikan konsep esensial dan kata kunci pada stimulus soal.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "NM030",
    "educationLevel": "MI",
    "categoryId": "guru_kelas",
    "category": "guru_kelas",
    "akgtkCategory": "Guru Kelas",
    "subjectId": "numerasi",
    "subject": "Numerasi",
    "subtopic": "Sudut pada Jam Dinding",
    "competency": "Menghitung besar sudut jarum jam",
    "question": "Besar sudut terkecil yang dibentuk oleh kedua jarum jam pada pukul 03.00 tepat adalah...",
    "optionA": "60° (sudut lancip)",
    "optionB": "120° (sudut tumpul)",
    "optionC": "90° (sudut siku-siku)",
    "optionD": "180° (sudut lurus)",
    "options": [
      {
        "id": "A",
        "text": "60° (sudut lancip)"
      },
      {
        "id": "B",
        "text": "120° (sudut tumpul)"
      },
      {
        "id": "C",
        "text": "90° (sudut siku-siku)"
      },
      {
        "id": "D",
        "text": "180° (sudut lurus)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Pada pukul 03.00 jarum panjang di 12 dan pendek di 3: 3 x 30° = 90°.",
    "tip": "Perhatikan konsep esensial dan kata kunci pada stimulus soal.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  }
];
