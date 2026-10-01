import { Question } from "../types";

export const mtsQuestions: Question[] = [
  {
    "id": "mts-mat-001",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Pola Bilangan & Barisan Aritmetika",
    "competency": "Menentukan suku ke-n dan jumlah deret aritmetika madrasah",
    "question": "[Kasus Aritmetika MTs #1]: Di auditorium madrasah, penataan kursi baris pertama terdiri atas 7 kursi. Setiap baris di belakangnya selalu bertambah 3 kursi secara konstan. Berapakah kapasitas kursi yang tertata pada baris ke-11?",
    "optionA": "37 kursi",
    "optionB": "40 kursi",
    "optionC": "34 kursi",
    "optionD": "43 kursi",
    "options": [
      {
        "id": "A",
        "text": "37 kursi"
      },
      {
        "id": "B",
        "text": "40 kursi"
      },
      {
        "id": "C",
        "text": "34 kursi"
      },
      {
        "id": "D",
        "text": "43 kursi"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Rumus Un = a + (n - 1)b. a = 7, b = 3, n = 11. Un = 7 + (10)(3) = 37 kursi.",
    "tip": "Identifikasi suku pertama (a) dan selisih konstan (b).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-002",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Barisan & Deret Geometri",
    "competency": "Menghitung rasio dan suku ke-n deret geometri",
    "question": "[Kasus Geometri MTs #2]: Dalam penelitian mikrobiologi di madrasah, koloni bakteri jenis ke-1 membelah diri menjadi 2 setiap 15 menit. Jika pada awal pengamatan terdapat 2 bakteri, berapakah jumlah bakteri setelah periode pembelahan ke-4?",
    "optionA": "32 bakteri",
    "optionB": "16 bakteri",
    "optionC": "14 bakteri",
    "optionD": "8 bakteri",
    "options": [
      {
        "id": "A",
        "text": "32 bakteri"
      },
      {
        "id": "B",
        "text": "16 bakteri"
      },
      {
        "id": "C",
        "text": "14 bakteri"
      },
      {
        "id": "D",
        "text": "8 bakteri"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Rumus Un = a . r^(n-1). a = 2, r = 2, n = 4. Un = 2 x 2^(3) = 16.",
    "tip": "Gunakan rumus pertumbuhan geometri eksponensial Un = a.r^(n-1).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-003",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bentuk Aljabar & Faktorisasi Kuadrat",
    "competency": "Menyederhanakan aljabar dan pemfaktoran bentuk kuadrat",
    "question": "[Aljabar MTs #3]: Bentuk pemfaktoran aljabar yang tepat dari persamaan kuadrat x² + 6x + 8 adalah...",
    "optionA": "(x - 2)(x - 4)",
    "optionB": "(x + 3)(x + 3)",
    "optionC": "(x + 2)(x + 4)",
    "optionD": "(x - 2)(x + 4)",
    "options": [
      {
        "id": "A",
        "text": "(x - 2)(x - 4)"
      },
      {
        "id": "B",
        "text": "(x + 3)(x + 3)"
      },
      {
        "id": "C",
        "text": "(x + 2)(x + 4)"
      },
      {
        "id": "D",
        "text": "(x - 2)(x + 4)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Cari p dan q sedemikian sehingga p + q = 6 dan p x q = 8. Diperoleh p = 2 dan q = 4, sehingga faktornya (x + 2)(x + 4).",
    "tip": "Faktorkan ax² + bx + c dengan mencari pasangan bilangan hasil kali c dan jumlah b.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-004",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Persamaan Linear Satu Variabel (PLSV)",
    "competency": "Menyelesaikan permasalahan persamaan linear satu variabel",
    "question": "[Persamaan Linear #4]: Nilai x yang memenuhi persamaan linear satu variabel 3x + 4 = 13 adalah...",
    "optionA": "x = 4",
    "optionB": "x = 2",
    "optionC": "x = 5",
    "optionD": "x = 3",
    "options": [
      {
        "id": "A",
        "text": "x = 4"
      },
      {
        "id": "B",
        "text": "x = 2"
      },
      {
        "id": "C",
        "text": "x = 5"
      },
      {
        "id": "D",
        "text": "x = 3"
      }
    ],
    "correctAnswer": "D",
    "explanation": "3x = 13 - 4 => 3x = 9 => x = 3.",
    "tip": "Kumpulkan variabel di satu ruas dan konstanta di ruas lainnya.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-005",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Pertidaksamaan Linear Satu Variabel (PtLSV)",
    "competency": "Menentukan himpunan penyelesaian pertidaksamaan linear",
    "question": "[Pertidaksamaan Linear #5]: Himpunan penyelesaian untuk pertidaksamaan 3x + 3 ≤ 15 dengan x anggota bilangan bulat adalah...",
    "optionA": "x ≤ 4",
    "optionB": "x ≥ 4",
    "optionC": "x < 3",
    "optionD": "x ≤ 6",
    "options": [
      {
        "id": "A",
        "text": "x ≤ 4"
      },
      {
        "id": "B",
        "text": "x ≥ 4"
      },
      {
        "id": "C",
        "text": "x < 3"
      },
      {
        "id": "D",
        "text": "x ≤ 6"
      }
    ],
    "correctAnswer": "A",
    "explanation": "3x ≤ 15 - 3 => 3x ≤ 12 => x ≤ 4.",
    "tip": "Bagi kedua ruas dengan koefisien x positif, arah tanda pertidaksamaan tetap.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-006",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Sistem Persamaan Linear Dua Variabel (SPLDV)",
    "competency": "Menyelesaikan SPLDV kontekstual koperasi madrasah",
    "question": "[SPLDV Koperasi MTs #6]: Santri A membeli 2 buku dan 3 pensil seharga Rp13.750. Santri B membeli 3 buku dan 1 pensil sejenis seharga Rp12.750. Berapakah harga yang harus dibayar untuk 1 buku dan 1 pensil?",
    "optionA": "Rp6.750",
    "optionB": "Rp5.750",
    "optionC": "Rp4.750",
    "optionD": "Rp7.250",
    "options": [
      {
        "id": "A",
        "text": "Rp6.750"
      },
      {
        "id": "B",
        "text": "Rp5.750"
      },
      {
        "id": "C",
        "text": "Rp4.750"
      },
      {
        "id": "D",
        "text": "Rp7.250"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Harga 1 buku = Rp3.500 dan 1 pensil = Rp2.250. Total = Rp5.750.",
    "tip": "Gunakan metode eliminasi variabel untuk menemukan nilai masing-masing barang.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-007",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Relasi dan Fungsi",
    "competency": "Menentukan nilai fungsi f(x) dan daerah hasil (range)",
    "question": "[Fungsi Linier #7]: Suatu fungsi ditentukan dengan rumus f(x) = 3x + 7. Nilai fungsi untuk x = 4 adalah...",
    "optionA": "22",
    "optionB": "16",
    "optionC": "19",
    "optionD": "23",
    "options": [
      {
        "id": "A",
        "text": "22"
      },
      {
        "id": "B",
        "text": "16"
      },
      {
        "id": "C",
        "text": "19"
      },
      {
        "id": "D",
        "text": "23"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Substitusi x = 4: f(4) = 3(4) + 7 = 12 + 7 = 19.",
    "tip": "Ganti x pada f(x) dengan nilai yang diminta.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-008",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Persamaan Garis Lurus & Gradien",
    "competency": "Menentukan kemiringan/gradien dan persamaan garis",
    "question": "[Gradien Garis #8]: Gradien garis lurus yang melalui titik A(1, 2) dan B(3, 6) adalah...",
    "optionA": "m = 3",
    "optionB": "m = -2",
    "optionC": "m = 4",
    "optionD": "m = 2",
    "options": [
      {
        "id": "A",
        "text": "m = 3"
      },
      {
        "id": "B",
        "text": "m = -2"
      },
      {
        "id": "C",
        "text": "m = 4"
      },
      {
        "id": "D",
        "text": "m = 2"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Gradien m = (y2 - y1) / (x2 - x1) = (6 - 2) / (3 - 1) = 4 / 2 = 2.",
    "tip": "m = Δy / Δx = (y2 - y1) / (x2 - x1).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-009",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Teorema Pythagoras & Tripel Pythagoras",
    "competency": "Menerapkan tripel Pythagoras pada segitiga dan tiang madrasah",
    "question": "[Teorema Pythagoras #9]: Kawat penyangga dipasang dari puncak tiang bendera madrasah ke pasak tanah. Jika tinggi tiang 4 meter dan jarak pasak ke kaki tiang 3 meter, panjang kawat penyangga tersebut adalah...",
    "optionA": "5 meter",
    "optionB": "6 meter",
    "optionC": "4 meter",
    "optionD": "7 meter",
    "options": [
      {
        "id": "A",
        "text": "5 meter"
      },
      {
        "id": "B",
        "text": "6 meter"
      },
      {
        "id": "C",
        "text": "4 meter"
      },
      {
        "id": "D",
        "text": "7 meter"
      }
    ],
    "correctAnswer": "A",
    "explanation": "c = √(a² + b²) = √(3² + 4²) = √(9 + 16) = √25 = 5 meter.",
    "tip": "Gunakan kelipatan tripel Pythagoras 3, 4, 5.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-010",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Lingkaran & Unsur-unsurnya",
    "competency": "Menghitung keliling, luas, juring, dan panjang busur lingkaran",
    "question": "[Geometri Lingkaran #10]: Sebuah kolam taman madrasah berbentuk lingkaran memiliki panjang jari-jari 7 meter. Keliling kolam tersebut (π = 22/7) adalah...",
    "optionA": "66 meter",
    "optionB": "44 meter",
    "optionC": "22 meter",
    "optionD": "88 meter",
    "options": [
      {
        "id": "A",
        "text": "66 meter"
      },
      {
        "id": "B",
        "text": "44 meter"
      },
      {
        "id": "C",
        "text": "22 meter"
      },
      {
        "id": "D",
        "text": "88 meter"
      }
    ],
    "correctAnswer": "B",
    "explanation": "K = 2 . π . r = 2 x (22/7) x 7 = 2 x 22 x 1 = 44 meter.",
    "tip": "Keliling lingkaran K = 2πr.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-011",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bangun Datar Segiempat & Segitiga",
    "competency": "Menghitung keliling dan luas lahan madrasah",
    "question": "[Pengukuran Lahan #11]: Kebun percontohan madrasah berbentuk persegi panjang dengan ukuran panjang 14 meter dan lebar 8 meter. Luas kebun tersebut adalah...",
    "optionA": "132 m²",
    "optionB": "96 m²",
    "optionC": "112 m²",
    "optionD": "44 m²",
    "options": [
      {
        "id": "A",
        "text": "132 m²"
      },
      {
        "id": "B",
        "text": "96 m²"
      },
      {
        "id": "C",
        "text": "112 m²"
      },
      {
        "id": "D",
        "text": "44 m²"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Luas = panjang x lebar = 14 m x 8 m = 112 m².",
    "tip": "Luas persegi panjang = p x l.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-012",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bangun Ruang Sisi Datar (Prisma & Limas)",
    "competency": "Menghitung luas permukaan dan volume prisma/limas gedung",
    "question": "[Bangun Ruang Kubus #12]: Bak penampungan air tempat wudhu madrasah berbentuk kubus dengan rusuk bagian dalam 4 dm. Kapasitas volume air jika terisi penuh adalah...",
    "optionA": "74 liter",
    "optionB": "59 liter",
    "optionC": "96 liter",
    "optionD": "64 liter",
    "options": [
      {
        "id": "A",
        "text": "74 liter"
      },
      {
        "id": "B",
        "text": "59 liter"
      },
      {
        "id": "C",
        "text": "96 liter"
      },
      {
        "id": "D",
        "text": "64 liter"
      }
    ],
    "correctAnswer": "D",
    "explanation": "V = s³ = 4³ = 64 dm³ = 64 liter.",
    "tip": "1 dm³ sama dengan 1 liter.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-013",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bangun Ruang Sisi Lengkung (Tabung & Kerucut)",
    "competency": "Menghitung volume tandon air dan kubah madrasah",
    "question": "[Bangun Ruang Tabung #13]: Sebuah tangki air silinder vertikal madrasah memiliki jari-jari alas 7 dm dan tinggi 13 dm. Volume tangki tersebut (π = 22/7) adalah...",
    "optionA": "2002 liter",
    "optionB": "2156 liter",
    "optionC": "1848 liter",
    "optionD": "2310 liter",
    "options": [
      {
        "id": "A",
        "text": "2002 liter"
      },
      {
        "id": "B",
        "text": "2156 liter"
      },
      {
        "id": "C",
        "text": "1848 liter"
      },
      {
        "id": "D",
        "text": "2310 liter"
      }
    ],
    "correctAnswer": "A",
    "explanation": "V = π . r² . t = (22/7) x 7² x 13 = 154 x 13 = 2002 liter.",
    "tip": "V = luas alas x tinggi = πr²t.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-014",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Kesebangunan dan Kekongruenan",
    "competency": "Menghitung tinggi objek nyata menggunakan kesebangunan",
    "question": "[Kesebangunan Bayangan #14]: Pada pagi hari, tongkat setinggi 2 meter memiliki bayangan sepanjang 3 meter. Di saat bersamaan, panjang bayangan menara masjid madrasah adalah 9 meter. Tinggi menara sebenarnya adalah...",
    "optionA": "8 meter",
    "optionB": "6 meter",
    "optionC": "5 meter",
    "optionD": "9 meter",
    "options": [
      {
        "id": "A",
        "text": "8 meter"
      },
      {
        "id": "B",
        "text": "6 meter"
      },
      {
        "id": "C",
        "text": "5 meter"
      },
      {
        "id": "D",
        "text": "9 meter"
      }
    ],
    "correctAnswer": "B",
    "explanation": "h_menara = (bayangan_menara x tinggi_tongkat) / bayangan_tongkat = (9 x 2) / 3 = 6 meter.",
    "tip": "Gunakan perbandingan senilai segitiga sebangun.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-015",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Transformasi Geometri (Translasi & Refleksi)",
    "competency": "Menentukan koordinat bayangan hasil pergeseran dan pencerminan",
    "question": "[Transformasi Translasi #15]: Titik A(3, 0) ditranslasikan oleh T = (4, 5). Koordinat titik bayangan A' adalah...",
    "optionA": "A'(6, 5)",
    "optionB": "A'(7, 3)",
    "optionC": "A'(7, 5)",
    "optionD": "A'(-1, -5)",
    "options": [
      {
        "id": "A",
        "text": "A'(6, 5)"
      },
      {
        "id": "B",
        "text": "A'(7, 3)"
      },
      {
        "id": "C",
        "text": "A'(7, 5)"
      },
      {
        "id": "D",
        "text": "A'(-1, -5)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "A'(x + a, y + b) = (3 + 4, 0 + 5) = (7, 5).",
    "tip": "Translasi menjumlahkan setiap absis dan ordinat dengan vektor geser.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-016",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Transformasi Geometri (Rotasi & Dilatasi)",
    "competency": "Menentukan bayangan hasil rotasi dan dilatasi faktor k",
    "question": "[Transformasi Rotasi #16]: Titik B(3, 6) dirotasikan sebesar 90° berlawanan arah jarum jam terhadap titik pusat O(0,0). Koordinat bayangan B' adalah...",
    "optionA": "B'(6, -3)",
    "optionB": "B'(-3, -6)",
    "optionC": "B'(3, 6)",
    "optionD": "B'(-6, 3)",
    "options": [
      {
        "id": "A",
        "text": "B'(6, -3)"
      },
      {
        "id": "B",
        "text": "B'(-3, -6)"
      },
      {
        "id": "C",
        "text": "B'(3, 6)"
      },
      {
        "id": "D",
        "text": "B'(-6, 3)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Rotasi [O, +90°]: (x, y) dipetakan menjadi (-y, x). Titik (3, 6) menjadi (-6, 3).",
    "tip": "Rotasi 90° berlawanan jarum jam: (x, y) -> (-y, x).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-017",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Statistika (Mean, Median, Modus)",
    "competency": "Menganalisis ukuran pemusatan data asesmen madrasah",
    "question": "[Statistika Nilai #17]: Data perolehan nilai kuis matematika lima perwakilan kelas MTs adalah: 62, 72, 77, 82, 92. Nilai rata-rata hitung (mean) data tersebut adalah...",
    "optionA": "77.0",
    "optionB": "79.0",
    "optionC": "75.0",
    "optionD": "81.0",
    "options": [
      {
        "id": "A",
        "text": "77.0"
      },
      {
        "id": "B",
        "text": "79.0"
      },
      {
        "id": "C",
        "text": "75.0"
      },
      {
        "id": "D",
        "text": "81.0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Mean = (62 + 72 + 77 + 82 + 92) / 5 = 385 / 5 = 77.0.",
    "tip": "Mean = total jumlah nilai dibagi banyak data.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-018",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Peluang Teoretik dan Frekuensi Harapan",
    "competency": "Menentukan peluang kejadian pada percobaan acak madrasah",
    "question": "[Peluang Kejadian #18]: Dalam sebuah kantong undian madrasah terdapat 14 kartu bernomor sama bentuk. Sebanyak 3 kartu berwarna merah dan sisanya berwarna biru. Peluang terambil satu kartu merah secara acak adalah...",
    "optionA": "11/14",
    "optionB": "3/14",
    "optionC": "1/14",
    "optionD": "3/16",
    "options": [
      {
        "id": "A",
        "text": "11/14"
      },
      {
        "id": "B",
        "text": "3/14"
      },
      {
        "id": "C",
        "text": "1/14"
      },
      {
        "id": "D",
        "text": "3/16"
      }
    ],
    "correctAnswer": "B",
    "explanation": "P(A) = n(A) / n(S) = 3 / 14.",
    "tip": "Peluang = jumlah kejadian sukses dibagi total seluruh kejadian.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-019",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bilangan Berpangkat dan Bentuk Akar",
    "competency": "Menyederhanakan eksponen dan merasionalkan bentuk akar",
    "question": "[Perpangkatan Aljabar #19]: Hasil penyederhanaan dari bentuk eksponen (3⁴ x 3²) : 3³ adalah...",
    "optionA": "3² = 9",
    "optionB": "3⁴ = 81",
    "optionC": "3³ = 27",
    "optionD": "3⁵",
    "options": [
      {
        "id": "A",
        "text": "3² = 9"
      },
      {
        "id": "B",
        "text": "3⁴ = 81"
      },
      {
        "id": "C",
        "text": "3³ = 27"
      },
      {
        "id": "D",
        "text": "3⁵"
      }
    ],
    "correctAnswer": "C",
    "explanation": "3^(4 + 2 - 3) = 3^3 = 27.",
    "tip": "Perkalian pangkat dijumlahkan, pembagian pangkat dikurangkan.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-020",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Persamaan & Fungsi Kuadrat",
    "competency": "Menentukan akar persamaan, sumbu simetri, dan nilai optimum",
    "question": "[Fungsi Kuadrat Parabola #20]: Persamaan sumbu simetri dari kurva parabola fungsi f(x) = x² -6x + 12 adalah...",
    "optionA": "x = -3",
    "optionB": "x = 5",
    "optionC": "x = 2",
    "optionD": "x = 3",
    "options": [
      {
        "id": "A",
        "text": "x = -3"
      },
      {
        "id": "B",
        "text": "x = 5"
      },
      {
        "id": "C",
        "text": "x = 2"
      },
      {
        "id": "D",
        "text": "x = 3"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Sumbu simetri x = -b / (2a) = -(-6) / (2 x 1) = 6 / 2 = 3.",
    "tip": "x = -b / (2a).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-021",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Pola Bilangan & Barisan Aritmetika",
    "competency": "Menentukan suku ke-n dan jumlah deret aritmetika madrasah",
    "question": "[Kasus Aritmetika MTs #21]: Di auditorium madrasah, penataan kursi baris pertama terdiri atas 10 kursi. Setiap baris di belakangnya selalu bertambah 4 kursi secara konstan. Berapakah kapasitas kursi yang tertata pada baris ke-12?",
    "optionA": "54 kursi",
    "optionB": "58 kursi",
    "optionC": "50 kursi",
    "optionD": "62 kursi",
    "options": [
      {
        "id": "A",
        "text": "54 kursi"
      },
      {
        "id": "B",
        "text": "58 kursi"
      },
      {
        "id": "C",
        "text": "50 kursi"
      },
      {
        "id": "D",
        "text": "62 kursi"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Rumus Un = a + (n - 1)b. a = 10, b = 4, n = 12. Un = 10 + (11)(4) = 54 kursi.",
    "tip": "Identifikasi suku pertama (a) dan selisih konstan (b).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-022",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Barisan & Deret Geometri",
    "competency": "Menghitung rasio dan suku ke-n deret geometri",
    "question": "[Kasus Geometri MTs #22]: Dalam penelitian mikrobiologi di madrasah, koloni bakteri jenis ke-2 membelah diri menjadi 2 setiap 15 menit. Jika pada awal pengamatan terdapat 3 bakteri, berapakah jumlah bakteri setelah periode pembelahan ke-5?",
    "optionA": "96 bakteri",
    "optionB": "48 bakteri",
    "optionC": "45 bakteri",
    "optionD": "24 bakteri",
    "options": [
      {
        "id": "A",
        "text": "96 bakteri"
      },
      {
        "id": "B",
        "text": "48 bakteri"
      },
      {
        "id": "C",
        "text": "45 bakteri"
      },
      {
        "id": "D",
        "text": "24 bakteri"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Rumus Un = a . r^(n-1). a = 3, r = 2, n = 5. Un = 3 x 2^(4) = 48.",
    "tip": "Gunakan rumus pertumbuhan geometri eksponensial Un = a.r^(n-1).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-023",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bentuk Aljabar & Faktorisasi Kuadrat",
    "competency": "Menyederhanakan aljabar dan pemfaktoran bentuk kuadrat",
    "question": "[Aljabar MTs #23]: Bentuk pemfaktoran aljabar yang tepat dari persamaan kuadrat x² + 8x + 15 adalah...",
    "optionA": "(x - 3)(x - 5)",
    "optionB": "(x + 4)(x + 4)",
    "optionC": "(x + 3)(x + 5)",
    "optionD": "(x - 3)(x + 5)",
    "options": [
      {
        "id": "A",
        "text": "(x - 3)(x - 5)"
      },
      {
        "id": "B",
        "text": "(x + 4)(x + 4)"
      },
      {
        "id": "C",
        "text": "(x + 3)(x + 5)"
      },
      {
        "id": "D",
        "text": "(x - 3)(x + 5)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Cari p dan q sedemikian sehingga p + q = 8 dan p x q = 15. Diperoleh p = 3 dan q = 5, sehingga faktornya (x + 3)(x + 5).",
    "tip": "Faktorkan ax² + bx + c dengan mencari pasangan bilangan hasil kali c dan jumlah b.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-024",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Persamaan Linear Satu Variabel (PLSV)",
    "competency": "Menyelesaikan permasalahan persamaan linear satu variabel",
    "question": "[Persamaan Linear #24]: Nilai x yang memenuhi persamaan linear satu variabel 4x + 7 = 23 adalah...",
    "optionA": "x = 5",
    "optionB": "x = 3",
    "optionC": "x = 6",
    "optionD": "x = 4",
    "options": [
      {
        "id": "A",
        "text": "x = 5"
      },
      {
        "id": "B",
        "text": "x = 3"
      },
      {
        "id": "C",
        "text": "x = 6"
      },
      {
        "id": "D",
        "text": "x = 4"
      }
    ],
    "correctAnswer": "D",
    "explanation": "4x = 23 - 7 => 4x = 16 => x = 4.",
    "tip": "Kumpulkan variabel di satu ruas dan konstanta di ruas lainnya.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-025",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Pertidaksamaan Linear Satu Variabel (PtLSV)",
    "competency": "Menentukan himpunan penyelesaian pertidaksamaan linear",
    "question": "[Pertidaksamaan Linear #25]: Himpunan penyelesaian untuk pertidaksamaan 4x + 5 ≤ 25 dengan x anggota bilangan bulat adalah...",
    "optionA": "x ≤ 5",
    "optionB": "x ≥ 5",
    "optionC": "x < 4",
    "optionD": "x ≤ 7",
    "options": [
      {
        "id": "A",
        "text": "x ≤ 5"
      },
      {
        "id": "B",
        "text": "x ≥ 5"
      },
      {
        "id": "C",
        "text": "x < 4"
      },
      {
        "id": "D",
        "text": "x ≤ 7"
      }
    ],
    "correctAnswer": "A",
    "explanation": "4x ≤ 25 - 5 => 4x ≤ 20 => x ≤ 5.",
    "tip": "Bagi kedua ruas dengan koefisien x positif, arah tanda pertidaksamaan tetap.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-026",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Sistem Persamaan Linear Dua Variabel (SPLDV)",
    "competency": "Menyelesaikan SPLDV kontekstual koperasi madrasah",
    "question": "[SPLDV Koperasi MTs #26]: Santri A membeli 2 buku dan 3 pensil seharga Rp15.500. Santri B membeli 3 buku dan 1 pensil sejenis seharga Rp14.500. Berapakah harga yang harus dibayar untuk 1 buku dan 1 pensil?",
    "optionA": "Rp7.500",
    "optionB": "Rp6.500",
    "optionC": "Rp5.500",
    "optionD": "Rp8.000",
    "options": [
      {
        "id": "A",
        "text": "Rp7.500"
      },
      {
        "id": "B",
        "text": "Rp6.500"
      },
      {
        "id": "C",
        "text": "Rp5.500"
      },
      {
        "id": "D",
        "text": "Rp8.000"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Harga 1 buku = Rp4.000 dan 1 pensil = Rp2.500. Total = Rp6.500.",
    "tip": "Gunakan metode eliminasi variabel untuk menemukan nilai masing-masing barang.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-027",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Relasi dan Fungsi",
    "competency": "Menentukan nilai fungsi f(x) dan daerah hasil (range)",
    "question": "[Fungsi Linier #27]: Suatu fungsi ditentukan dengan rumus f(x) = 4x + 10. Nilai fungsi untuk x = 5 adalah...",
    "optionA": "34",
    "optionB": "26",
    "optionC": "30",
    "optionD": "34",
    "options": [
      {
        "id": "A",
        "text": "34"
      },
      {
        "id": "B",
        "text": "26"
      },
      {
        "id": "C",
        "text": "30"
      },
      {
        "id": "D",
        "text": "34"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Substitusi x = 5: f(5) = 4(5) + 10 = 20 + 10 = 30.",
    "tip": "Ganti x pada f(x) dengan nilai yang diminta.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-028",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Persamaan Garis Lurus & Gradien",
    "competency": "Menentukan kemiringan/gradien dan persamaan garis",
    "question": "[Gradien Garis #28]: Gradien garis lurus yang melalui titik A(2, 4) dan B(4, 10) adalah...",
    "optionA": "m = 4",
    "optionB": "m = -3",
    "optionC": "m = 5",
    "optionD": "m = 3",
    "options": [
      {
        "id": "A",
        "text": "m = 4"
      },
      {
        "id": "B",
        "text": "m = -3"
      },
      {
        "id": "C",
        "text": "m = 5"
      },
      {
        "id": "D",
        "text": "m = 3"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Gradien m = (y2 - y1) / (x2 - x1) = (10 - 4) / (4 - 2) = 6 / 2 = 3.",
    "tip": "m = Δy / Δx = (y2 - y1) / (x2 - x1).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-029",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Teorema Pythagoras & Tripel Pythagoras",
    "competency": "Menerapkan tripel Pythagoras pada segitiga dan tiang madrasah",
    "question": "[Teorema Pythagoras #29]: Kawat penyangga dipasang dari puncak tiang bendera madrasah ke pasak tanah. Jika tinggi tiang 8 meter dan jarak pasak ke kaki tiang 6 meter, panjang kawat penyangga tersebut adalah...",
    "optionA": "10 meter",
    "optionB": "12 meter",
    "optionC": "8 meter",
    "optionD": "14 meter",
    "options": [
      {
        "id": "A",
        "text": "10 meter"
      },
      {
        "id": "B",
        "text": "12 meter"
      },
      {
        "id": "C",
        "text": "8 meter"
      },
      {
        "id": "D",
        "text": "14 meter"
      }
    ],
    "correctAnswer": "A",
    "explanation": "c = √(a² + b²) = √(6² + 8²) = √(36 + 64) = √100 = 10 meter.",
    "tip": "Gunakan kelipatan tripel Pythagoras 3, 4, 5.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-030",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Lingkaran & Unsur-unsurnya",
    "competency": "Menghitung keliling, luas, juring, dan panjang busur lingkaran",
    "question": "[Geometri Lingkaran #30]: Sebuah kolam taman madrasah berbentuk lingkaran memiliki panjang jari-jari 14 meter. Keliling kolam tersebut (π = 22/7) adalah...",
    "optionA": "110 meter",
    "optionB": "88 meter",
    "optionC": "66 meter",
    "optionD": "132 meter",
    "options": [
      {
        "id": "A",
        "text": "110 meter"
      },
      {
        "id": "B",
        "text": "88 meter"
      },
      {
        "id": "C",
        "text": "66 meter"
      },
      {
        "id": "D",
        "text": "132 meter"
      }
    ],
    "correctAnswer": "B",
    "explanation": "K = 2 . π . r = 2 x (22/7) x 14 = 2 x 22 x 2 = 88 meter.",
    "tip": "Keliling lingkaran K = 2πr.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-031",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bangun Datar Segiempat & Segitiga",
    "competency": "Menghitung keliling dan luas lahan madrasah",
    "question": "[Pengukuran Lahan #31]: Kebun percontohan madrasah berbentuk persegi panjang dengan ukuran panjang 18 meter dan lebar 10 meter. Luas kebun tersebut adalah...",
    "optionA": "200 m²",
    "optionB": "164 m²",
    "optionC": "180 m²",
    "optionD": "56 m²",
    "options": [
      {
        "id": "A",
        "text": "200 m²"
      },
      {
        "id": "B",
        "text": "164 m²"
      },
      {
        "id": "C",
        "text": "180 m²"
      },
      {
        "id": "D",
        "text": "56 m²"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Luas = panjang x lebar = 18 m x 10 m = 180 m².",
    "tip": "Luas persegi panjang = p x l.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-032",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bangun Ruang Sisi Datar (Prisma & Limas)",
    "competency": "Menghitung luas permukaan dan volume prisma/limas gedung",
    "question": "[Bangun Ruang Kubus #32]: Bak penampungan air tempat wudhu madrasah berbentuk kubus dengan rusuk bagian dalam 5 dm. Kapasitas volume air jika terisi penuh adalah...",
    "optionA": "145 liter",
    "optionB": "115 liter",
    "optionC": "150 liter",
    "optionD": "125 liter",
    "options": [
      {
        "id": "A",
        "text": "145 liter"
      },
      {
        "id": "B",
        "text": "115 liter"
      },
      {
        "id": "C",
        "text": "150 liter"
      },
      {
        "id": "D",
        "text": "125 liter"
      }
    ],
    "correctAnswer": "D",
    "explanation": "V = s³ = 5³ = 125 dm³ = 125 liter.",
    "tip": "1 dm³ sama dengan 1 liter.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-033",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bangun Ruang Sisi Lengkung (Tabung & Kerucut)",
    "competency": "Menghitung volume tandon air dan kubah madrasah",
    "question": "[Bangun Ruang Tabung #33]: Sebuah tangki air silinder vertikal madrasah memiliki jari-jari alas 7 dm dan tinggi 16 dm. Volume tangki tersebut (π = 22/7) adalah...",
    "optionA": "2464 liter",
    "optionB": "2618 liter",
    "optionC": "2310 liter",
    "optionD": "2772 liter",
    "options": [
      {
        "id": "A",
        "text": "2464 liter"
      },
      {
        "id": "B",
        "text": "2618 liter"
      },
      {
        "id": "C",
        "text": "2310 liter"
      },
      {
        "id": "D",
        "text": "2772 liter"
      }
    ],
    "correctAnswer": "A",
    "explanation": "V = π . r² . t = (22/7) x 7² x 16 = 154 x 16 = 2464 liter.",
    "tip": "V = luas alas x tinggi = πr²t.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-034",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Kesebangunan dan Kekongruenan",
    "competency": "Menghitung tinggi objek nyata menggunakan kesebangunan",
    "question": "[Kesebangunan Bayangan #34]: Pada pagi hari, tongkat setinggi 2 meter memiliki bayangan sepanjang 3 meter. Di saat bersamaan, panjang bayangan menara masjid madrasah adalah 12 meter. Tinggi menara sebenarnya adalah...",
    "optionA": "10 meter",
    "optionB": "8 meter",
    "optionC": "7 meter",
    "optionD": "11 meter",
    "options": [
      {
        "id": "A",
        "text": "10 meter"
      },
      {
        "id": "B",
        "text": "8 meter"
      },
      {
        "id": "C",
        "text": "7 meter"
      },
      {
        "id": "D",
        "text": "11 meter"
      }
    ],
    "correctAnswer": "B",
    "explanation": "h_menara = (bayangan_menara x tinggi_tongkat) / bayangan_tongkat = (12 x 2) / 3 = 8 meter.",
    "tip": "Gunakan perbandingan senilai segitiga sebangun.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-035",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Transformasi Geometri (Translasi & Refleksi)",
    "competency": "Menentukan koordinat bayangan hasil pergeseran dan pencerminan",
    "question": "[Transformasi Translasi #35]: Titik A(4, 1) ditranslasikan oleh T = (5, 5). Koordinat titik bayangan A' adalah...",
    "optionA": "A'(8, 6)",
    "optionB": "A'(9, 4)",
    "optionC": "A'(9, 6)",
    "optionD": "A'(-1, -4)",
    "options": [
      {
        "id": "A",
        "text": "A'(8, 6)"
      },
      {
        "id": "B",
        "text": "A'(9, 4)"
      },
      {
        "id": "C",
        "text": "A'(9, 6)"
      },
      {
        "id": "D",
        "text": "A'(-1, -4)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "A'(x + a, y + b) = (4 + 5, 1 + 5) = (9, 6).",
    "tip": "Translasi menjumlahkan setiap absis dan ordinat dengan vektor geser.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-036",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Transformasi Geometri (Rotasi & Dilatasi)",
    "competency": "Menentukan bayangan hasil rotasi dan dilatasi faktor k",
    "question": "[Transformasi Rotasi #36]: Titik B(4, 7) dirotasikan sebesar 90° berlawanan arah jarum jam terhadap titik pusat O(0,0). Koordinat bayangan B' adalah...",
    "optionA": "B'(7, -4)",
    "optionB": "B'(-4, -7)",
    "optionC": "B'(4, 7)",
    "optionD": "B'(-7, 4)",
    "options": [
      {
        "id": "A",
        "text": "B'(7, -4)"
      },
      {
        "id": "B",
        "text": "B'(-4, -7)"
      },
      {
        "id": "C",
        "text": "B'(4, 7)"
      },
      {
        "id": "D",
        "text": "B'(-7, 4)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Rotasi [O, +90°]: (x, y) dipetakan menjadi (-y, x). Titik (4, 7) menjadi (-7, 4).",
    "tip": "Rotasi 90° berlawanan jarum jam: (x, y) -> (-y, x).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-037",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Statistika (Mean, Median, Modus)",
    "competency": "Menganalisis ukuran pemusatan data asesmen madrasah",
    "question": "[Statistika Nilai #37]: Data perolehan nilai kuis matematika lima perwakilan kelas MTs adalah: 64, 74, 79, 84, 94. Nilai rata-rata hitung (mean) data tersebut adalah...",
    "optionA": "79.0",
    "optionB": "81.0",
    "optionC": "77.0",
    "optionD": "83.0",
    "options": [
      {
        "id": "A",
        "text": "79.0"
      },
      {
        "id": "B",
        "text": "81.0"
      },
      {
        "id": "C",
        "text": "77.0"
      },
      {
        "id": "D",
        "text": "83.0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Mean = (64 + 74 + 79 + 84 + 94) / 5 = 395 / 5 = 79.0.",
    "tip": "Mean = total jumlah nilai dibagi banyak data.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-038",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Peluang Teoretik dan Frekuensi Harapan",
    "competency": "Menentukan peluang kejadian pada percobaan acak madrasah",
    "question": "[Peluang Kejadian #38]: Dalam sebuah kantong undian madrasah terdapat 16 kartu bernomor sama bentuk. Sebanyak 4 kartu berwarna merah dan sisanya berwarna biru. Peluang terambil satu kartu merah secara acak adalah...",
    "optionA": "12/16",
    "optionB": "4/16",
    "optionC": "1/16",
    "optionD": "4/18",
    "options": [
      {
        "id": "A",
        "text": "12/16"
      },
      {
        "id": "B",
        "text": "4/16"
      },
      {
        "id": "C",
        "text": "1/16"
      },
      {
        "id": "D",
        "text": "4/18"
      }
    ],
    "correctAnswer": "B",
    "explanation": "P(A) = n(A) / n(S) = 4 / 16.",
    "tip": "Peluang = jumlah kejadian sukses dibagi total seluruh kejadian.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-039",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bilangan Berpangkat dan Bentuk Akar",
    "competency": "Menyederhanakan eksponen dan merasionalkan bentuk akar",
    "question": "[Perpangkatan Aljabar #39]: Hasil penyederhanaan dari bentuk eksponen (4⁴ x 4²) : 4³ adalah...",
    "optionA": "4² = 16",
    "optionB": "4⁴ = 256",
    "optionC": "4³ = 64",
    "optionD": "4⁵",
    "options": [
      {
        "id": "A",
        "text": "4² = 16"
      },
      {
        "id": "B",
        "text": "4⁴ = 256"
      },
      {
        "id": "C",
        "text": "4³ = 64"
      },
      {
        "id": "D",
        "text": "4⁵"
      }
    ],
    "correctAnswer": "C",
    "explanation": "4^(4 + 2 - 3) = 4^3 = 64.",
    "tip": "Perkalian pangkat dijumlahkan, pembagian pangkat dikurangkan.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-040",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Persamaan & Fungsi Kuadrat",
    "competency": "Menentukan akar persamaan, sumbu simetri, dan nilai optimum",
    "question": "[Fungsi Kuadrat Parabola #40]: Persamaan sumbu simetri dari kurva parabola fungsi f(x) = x² -8x + 12 adalah...",
    "optionA": "x = -4",
    "optionB": "x = 6",
    "optionC": "x = 3",
    "optionD": "x = 4",
    "options": [
      {
        "id": "A",
        "text": "x = -4"
      },
      {
        "id": "B",
        "text": "x = 6"
      },
      {
        "id": "C",
        "text": "x = 3"
      },
      {
        "id": "D",
        "text": "x = 4"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Sumbu simetri x = -b / (2a) = -(-8) / (2 x 1) = 8 / 2 = 4.",
    "tip": "x = -b / (2a).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-041",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Pola Bilangan & Barisan Aritmetika",
    "competency": "Menentukan suku ke-n dan jumlah deret aritmetika madrasah",
    "question": "[Kasus Aritmetika MTs #41]: Di auditorium madrasah, penataan kursi baris pertama terdiri atas 13 kursi. Setiap baris di belakangnya selalu bertambah 5 kursi secara konstan. Berapakah kapasitas kursi yang tertata pada baris ke-13?",
    "optionA": "73 kursi",
    "optionB": "78 kursi",
    "optionC": "68 kursi",
    "optionD": "83 kursi",
    "options": [
      {
        "id": "A",
        "text": "73 kursi"
      },
      {
        "id": "B",
        "text": "78 kursi"
      },
      {
        "id": "C",
        "text": "68 kursi"
      },
      {
        "id": "D",
        "text": "83 kursi"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Rumus Un = a + (n - 1)b. a = 13, b = 5, n = 13. Un = 13 + (12)(5) = 73 kursi.",
    "tip": "Identifikasi suku pertama (a) dan selisih konstan (b).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-042",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Barisan & Deret Geometri",
    "competency": "Menghitung rasio dan suku ke-n deret geometri",
    "question": "[Kasus Geometri MTs #42]: Dalam penelitian mikrobiologi di madrasah, koloni bakteri jenis ke-3 membelah diri menjadi 2 setiap 15 menit. Jika pada awal pengamatan terdapat 4 bakteri, berapakah jumlah bakteri setelah periode pembelahan ke-6?",
    "optionA": "256 bakteri",
    "optionB": "128 bakteri",
    "optionC": "124 bakteri",
    "optionD": "64 bakteri",
    "options": [
      {
        "id": "A",
        "text": "256 bakteri"
      },
      {
        "id": "B",
        "text": "128 bakteri"
      },
      {
        "id": "C",
        "text": "124 bakteri"
      },
      {
        "id": "D",
        "text": "64 bakteri"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Rumus Un = a . r^(n-1). a = 4, r = 2, n = 6. Un = 4 x 2^(5) = 128.",
    "tip": "Gunakan rumus pertumbuhan geometri eksponensial Un = a.r^(n-1).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-043",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bentuk Aljabar & Faktorisasi Kuadrat",
    "competency": "Menyederhanakan aljabar dan pemfaktoran bentuk kuadrat",
    "question": "[Aljabar MTs #43]: Bentuk pemfaktoran aljabar yang tepat dari persamaan kuadrat x² + 10x + 24 adalah...",
    "optionA": "(x - 4)(x - 6)",
    "optionB": "(x + 5)(x + 5)",
    "optionC": "(x + 4)(x + 6)",
    "optionD": "(x - 4)(x + 6)",
    "options": [
      {
        "id": "A",
        "text": "(x - 4)(x - 6)"
      },
      {
        "id": "B",
        "text": "(x + 5)(x + 5)"
      },
      {
        "id": "C",
        "text": "(x + 4)(x + 6)"
      },
      {
        "id": "D",
        "text": "(x - 4)(x + 6)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Cari p dan q sedemikian sehingga p + q = 10 dan p x q = 24. Diperoleh p = 4 dan q = 6, sehingga faktornya (x + 4)(x + 6).",
    "tip": "Faktorkan ax² + bx + c dengan mencari pasangan bilangan hasil kali c dan jumlah b.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-044",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Persamaan Linear Satu Variabel (PLSV)",
    "competency": "Menyelesaikan permasalahan persamaan linear satu variabel",
    "question": "[Persamaan Linear #44]: Nilai x yang memenuhi persamaan linear satu variabel 5x + 10 = 35 adalah...",
    "optionA": "x = 6",
    "optionB": "x = 4",
    "optionC": "x = 7",
    "optionD": "x = 5",
    "options": [
      {
        "id": "A",
        "text": "x = 6"
      },
      {
        "id": "B",
        "text": "x = 4"
      },
      {
        "id": "C",
        "text": "x = 7"
      },
      {
        "id": "D",
        "text": "x = 5"
      }
    ],
    "correctAnswer": "D",
    "explanation": "5x = 35 - 10 => 5x = 25 => x = 5.",
    "tip": "Kumpulkan variabel di satu ruas dan konstanta di ruas lainnya.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-045",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Pertidaksamaan Linear Satu Variabel (PtLSV)",
    "competency": "Menentukan himpunan penyelesaian pertidaksamaan linear",
    "question": "[Pertidaksamaan Linear #45]: Himpunan penyelesaian untuk pertidaksamaan 5x + 7 ≤ 37 dengan x anggota bilangan bulat adalah...",
    "optionA": "x ≤ 6",
    "optionB": "x ≥ 6",
    "optionC": "x < 5",
    "optionD": "x ≤ 8",
    "options": [
      {
        "id": "A",
        "text": "x ≤ 6"
      },
      {
        "id": "B",
        "text": "x ≥ 6"
      },
      {
        "id": "C",
        "text": "x < 5"
      },
      {
        "id": "D",
        "text": "x ≤ 8"
      }
    ],
    "correctAnswer": "A",
    "explanation": "5x ≤ 37 - 7 => 5x ≤ 30 => x ≤ 6.",
    "tip": "Bagi kedua ruas dengan koefisien x positif, arah tanda pertidaksamaan tetap.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-046",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Sistem Persamaan Linear Dua Variabel (SPLDV)",
    "competency": "Menyelesaikan SPLDV kontekstual koperasi madrasah",
    "question": "[SPLDV Koperasi MTs #46]: Santri A membeli 2 buku dan 3 pensil seharga Rp17.250. Santri B membeli 3 buku dan 1 pensil sejenis seharga Rp16.250. Berapakah harga yang harus dibayar untuk 1 buku dan 1 pensil?",
    "optionA": "Rp8.250",
    "optionB": "Rp7.250",
    "optionC": "Rp6.250",
    "optionD": "Rp8.750",
    "options": [
      {
        "id": "A",
        "text": "Rp8.250"
      },
      {
        "id": "B",
        "text": "Rp7.250"
      },
      {
        "id": "C",
        "text": "Rp6.250"
      },
      {
        "id": "D",
        "text": "Rp8.750"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Harga 1 buku = Rp4.500 dan 1 pensil = Rp2.750. Total = Rp7.250.",
    "tip": "Gunakan metode eliminasi variabel untuk menemukan nilai masing-masing barang.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-047",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Relasi dan Fungsi",
    "competency": "Menentukan nilai fungsi f(x) dan daerah hasil (range)",
    "question": "[Fungsi Linier #47]: Suatu fungsi ditentukan dengan rumus f(x) = 5x + 13. Nilai fungsi untuk x = 6 adalah...",
    "optionA": "48",
    "optionB": "38",
    "optionC": "43",
    "optionD": "47",
    "options": [
      {
        "id": "A",
        "text": "48"
      },
      {
        "id": "B",
        "text": "38"
      },
      {
        "id": "C",
        "text": "43"
      },
      {
        "id": "D",
        "text": "47"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Substitusi x = 6: f(6) = 5(6) + 13 = 30 + 13 = 43.",
    "tip": "Ganti x pada f(x) dengan nilai yang diminta.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-048",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Persamaan Garis Lurus & Gradien",
    "competency": "Menentukan kemiringan/gradien dan persamaan garis",
    "question": "[Gradien Garis #48]: Gradien garis lurus yang melalui titik A(3, 6) dan B(5, 14) adalah...",
    "optionA": "m = 5",
    "optionB": "m = -4",
    "optionC": "m = 6",
    "optionD": "m = 4",
    "options": [
      {
        "id": "A",
        "text": "m = 5"
      },
      {
        "id": "B",
        "text": "m = -4"
      },
      {
        "id": "C",
        "text": "m = 6"
      },
      {
        "id": "D",
        "text": "m = 4"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Gradien m = (y2 - y1) / (x2 - x1) = (14 - 6) / (5 - 3) = 8 / 2 = 4.",
    "tip": "m = Δy / Δx = (y2 - y1) / (x2 - x1).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-049",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Teorema Pythagoras & Tripel Pythagoras",
    "competency": "Menerapkan tripel Pythagoras pada segitiga dan tiang madrasah",
    "question": "[Teorema Pythagoras #49]: Kawat penyangga dipasang dari puncak tiang bendera madrasah ke pasak tanah. Jika tinggi tiang 12 meter dan jarak pasak ke kaki tiang 9 meter, panjang kawat penyangga tersebut adalah...",
    "optionA": "15 meter",
    "optionB": "18 meter",
    "optionC": "12 meter",
    "optionD": "21 meter",
    "options": [
      {
        "id": "A",
        "text": "15 meter"
      },
      {
        "id": "B",
        "text": "18 meter"
      },
      {
        "id": "C",
        "text": "12 meter"
      },
      {
        "id": "D",
        "text": "21 meter"
      }
    ],
    "correctAnswer": "A",
    "explanation": "c = √(a² + b²) = √(9² + 12²) = √(81 + 144) = √225 = 15 meter.",
    "tip": "Gunakan kelipatan tripel Pythagoras 3, 4, 5.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-050",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Lingkaran & Unsur-unsurnya",
    "competency": "Menghitung keliling, luas, juring, dan panjang busur lingkaran",
    "question": "[Geometri Lingkaran #50]: Sebuah kolam taman madrasah berbentuk lingkaran memiliki panjang jari-jari 21 meter. Keliling kolam tersebut (π = 22/7) adalah...",
    "optionA": "154 meter",
    "optionB": "132 meter",
    "optionC": "110 meter",
    "optionD": "176 meter",
    "options": [
      {
        "id": "A",
        "text": "154 meter"
      },
      {
        "id": "B",
        "text": "132 meter"
      },
      {
        "id": "C",
        "text": "110 meter"
      },
      {
        "id": "D",
        "text": "176 meter"
      }
    ],
    "correctAnswer": "B",
    "explanation": "K = 2 . π . r = 2 x (22/7) x 21 = 2 x 22 x 3 = 132 meter.",
    "tip": "Keliling lingkaran K = 2πr.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-051",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bangun Datar Segiempat & Segitiga",
    "competency": "Menghitung keliling dan luas lahan madrasah",
    "question": "[Pengukuran Lahan #51]: Kebun percontohan madrasah berbentuk persegi panjang dengan ukuran panjang 22 meter dan lebar 12 meter. Luas kebun tersebut adalah...",
    "optionA": "284 m²",
    "optionB": "248 m²",
    "optionC": "264 m²",
    "optionD": "68 m²",
    "options": [
      {
        "id": "A",
        "text": "284 m²"
      },
      {
        "id": "B",
        "text": "248 m²"
      },
      {
        "id": "C",
        "text": "264 m²"
      },
      {
        "id": "D",
        "text": "68 m²"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Luas = panjang x lebar = 22 m x 12 m = 264 m².",
    "tip": "Luas persegi panjang = p x l.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-052",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bangun Ruang Sisi Datar (Prisma & Limas)",
    "competency": "Menghitung luas permukaan dan volume prisma/limas gedung",
    "question": "[Bangun Ruang Kubus #52]: Bak penampungan air tempat wudhu madrasah berbentuk kubus dengan rusuk bagian dalam 6 dm. Kapasitas volume air jika terisi penuh adalah...",
    "optionA": "246 liter",
    "optionB": "201 liter",
    "optionC": "216 liter",
    "optionD": "216 liter",
    "options": [
      {
        "id": "A",
        "text": "246 liter"
      },
      {
        "id": "B",
        "text": "201 liter"
      },
      {
        "id": "C",
        "text": "216 liter"
      },
      {
        "id": "D",
        "text": "216 liter"
      }
    ],
    "correctAnswer": "D",
    "explanation": "V = s³ = 6³ = 216 dm³ = 216 liter.",
    "tip": "1 dm³ sama dengan 1 liter.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-053",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bangun Ruang Sisi Lengkung (Tabung & Kerucut)",
    "competency": "Menghitung volume tandon air dan kubah madrasah",
    "question": "[Bangun Ruang Tabung #53]: Sebuah tangki air silinder vertikal madrasah memiliki jari-jari alas 7 dm dan tinggi 19 dm. Volume tangki tersebut (π = 22/7) adalah...",
    "optionA": "2926 liter",
    "optionB": "3080 liter",
    "optionC": "2772 liter",
    "optionD": "3234 liter",
    "options": [
      {
        "id": "A",
        "text": "2926 liter"
      },
      {
        "id": "B",
        "text": "3080 liter"
      },
      {
        "id": "C",
        "text": "2772 liter"
      },
      {
        "id": "D",
        "text": "3234 liter"
      }
    ],
    "correctAnswer": "A",
    "explanation": "V = π . r² . t = (22/7) x 7² x 19 = 154 x 19 = 2926 liter.",
    "tip": "V = luas alas x tinggi = πr²t.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-054",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Kesebangunan dan Kekongruenan",
    "competency": "Menghitung tinggi objek nyata menggunakan kesebangunan",
    "question": "[Kesebangunan Bayangan #54]: Pada pagi hari, tongkat setinggi 2 meter memiliki bayangan sepanjang 3 meter. Di saat bersamaan, panjang bayangan menara masjid madrasah adalah 15 meter. Tinggi menara sebenarnya adalah...",
    "optionA": "12 meter",
    "optionB": "10 meter",
    "optionC": "9 meter",
    "optionD": "13 meter",
    "options": [
      {
        "id": "A",
        "text": "12 meter"
      },
      {
        "id": "B",
        "text": "10 meter"
      },
      {
        "id": "C",
        "text": "9 meter"
      },
      {
        "id": "D",
        "text": "13 meter"
      }
    ],
    "correctAnswer": "B",
    "explanation": "h_menara = (bayangan_menara x tinggi_tongkat) / bayangan_tongkat = (15 x 2) / 3 = 10 meter.",
    "tip": "Gunakan perbandingan senilai segitiga sebangun.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-055",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Transformasi Geometri (Translasi & Refleksi)",
    "competency": "Menentukan koordinat bayangan hasil pergeseran dan pencerminan",
    "question": "[Transformasi Translasi #55]: Titik A(5, 2) ditranslasikan oleh T = (6, 5). Koordinat titik bayangan A' adalah...",
    "optionA": "A'(10, 7)",
    "optionB": "A'(11, 5)",
    "optionC": "A'(11, 7)",
    "optionD": "A'(-1, -3)",
    "options": [
      {
        "id": "A",
        "text": "A'(10, 7)"
      },
      {
        "id": "B",
        "text": "A'(11, 5)"
      },
      {
        "id": "C",
        "text": "A'(11, 7)"
      },
      {
        "id": "D",
        "text": "A'(-1, -3)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "A'(x + a, y + b) = (5 + 6, 2 + 5) = (11, 7).",
    "tip": "Translasi menjumlahkan setiap absis dan ordinat dengan vektor geser.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-056",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Transformasi Geometri (Rotasi & Dilatasi)",
    "competency": "Menentukan bayangan hasil rotasi dan dilatasi faktor k",
    "question": "[Transformasi Rotasi #56]: Titik B(5, 8) dirotasikan sebesar 90° berlawanan arah jarum jam terhadap titik pusat O(0,0). Koordinat bayangan B' adalah...",
    "optionA": "B'(8, -5)",
    "optionB": "B'(-5, -8)",
    "optionC": "B'(5, 8)",
    "optionD": "B'(-8, 5)",
    "options": [
      {
        "id": "A",
        "text": "B'(8, -5)"
      },
      {
        "id": "B",
        "text": "B'(-5, -8)"
      },
      {
        "id": "C",
        "text": "B'(5, 8)"
      },
      {
        "id": "D",
        "text": "B'(-8, 5)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Rotasi [O, +90°]: (x, y) dipetakan menjadi (-y, x). Titik (5, 8) menjadi (-8, 5).",
    "tip": "Rotasi 90° berlawanan jarum jam: (x, y) -> (-y, x).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-057",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Statistika (Mean, Median, Modus)",
    "competency": "Menganalisis ukuran pemusatan data asesmen madrasah",
    "question": "[Statistika Nilai #57]: Data perolehan nilai kuis matematika lima perwakilan kelas MTs adalah: 66, 76, 81, 86, 96. Nilai rata-rata hitung (mean) data tersebut adalah...",
    "optionA": "81.0",
    "optionB": "83.0",
    "optionC": "79.0",
    "optionD": "85.0",
    "options": [
      {
        "id": "A",
        "text": "81.0"
      },
      {
        "id": "B",
        "text": "83.0"
      },
      {
        "id": "C",
        "text": "79.0"
      },
      {
        "id": "D",
        "text": "85.0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Mean = (66 + 76 + 81 + 86 + 96) / 5 = 405 / 5 = 81.0.",
    "tip": "Mean = total jumlah nilai dibagi banyak data.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-058",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Peluang Teoretik dan Frekuensi Harapan",
    "competency": "Menentukan peluang kejadian pada percobaan acak madrasah",
    "question": "[Peluang Kejadian #58]: Dalam sebuah kantong undian madrasah terdapat 18 kartu bernomor sama bentuk. Sebanyak 5 kartu berwarna merah dan sisanya berwarna biru. Peluang terambil satu kartu merah secara acak adalah...",
    "optionA": "13/18",
    "optionB": "5/18",
    "optionC": "1/18",
    "optionD": "5/20",
    "options": [
      {
        "id": "A",
        "text": "13/18"
      },
      {
        "id": "B",
        "text": "5/18"
      },
      {
        "id": "C",
        "text": "1/18"
      },
      {
        "id": "D",
        "text": "5/20"
      }
    ],
    "correctAnswer": "B",
    "explanation": "P(A) = n(A) / n(S) = 5 / 18.",
    "tip": "Peluang = jumlah kejadian sukses dibagi total seluruh kejadian.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-059",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bilangan Berpangkat dan Bentuk Akar",
    "competency": "Menyederhanakan eksponen dan merasionalkan bentuk akar",
    "question": "[Perpangkatan Aljabar #59]: Hasil penyederhanaan dari bentuk eksponen (5⁴ x 5²) : 5³ adalah...",
    "optionA": "5² = 25",
    "optionB": "5⁴ = 625",
    "optionC": "5³ = 125",
    "optionD": "5⁵",
    "options": [
      {
        "id": "A",
        "text": "5² = 25"
      },
      {
        "id": "B",
        "text": "5⁴ = 625"
      },
      {
        "id": "C",
        "text": "5³ = 125"
      },
      {
        "id": "D",
        "text": "5⁵"
      }
    ],
    "correctAnswer": "C",
    "explanation": "5^(4 + 2 - 3) = 5^3 = 125.",
    "tip": "Perkalian pangkat dijumlahkan, pembagian pangkat dikurangkan.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-060",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Persamaan & Fungsi Kuadrat",
    "competency": "Menentukan akar persamaan, sumbu simetri, dan nilai optimum",
    "question": "[Fungsi Kuadrat Parabola #60]: Persamaan sumbu simetri dari kurva parabola fungsi f(x) = x² -10x + 12 adalah...",
    "optionA": "x = -5",
    "optionB": "x = 7",
    "optionC": "x = 4",
    "optionD": "x = 5",
    "options": [
      {
        "id": "A",
        "text": "x = -5"
      },
      {
        "id": "B",
        "text": "x = 7"
      },
      {
        "id": "C",
        "text": "x = 4"
      },
      {
        "id": "D",
        "text": "x = 5"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Sumbu simetri x = -b / (2a) = -(-10) / (2 x 1) = 10 / 2 = 5.",
    "tip": "x = -b / (2a).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-061",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Pola Bilangan & Barisan Aritmetika",
    "competency": "Menentukan suku ke-n dan jumlah deret aritmetika madrasah",
    "question": "[Kasus Aritmetika MTs #61]: Di auditorium madrasah, penataan kursi baris pertama terdiri atas 16 kursi. Setiap baris di belakangnya selalu bertambah 6 kursi secara konstan. Berapakah kapasitas kursi yang tertata pada baris ke-14?",
    "optionA": "94 kursi",
    "optionB": "100 kursi",
    "optionC": "88 kursi",
    "optionD": "106 kursi",
    "options": [
      {
        "id": "A",
        "text": "94 kursi"
      },
      {
        "id": "B",
        "text": "100 kursi"
      },
      {
        "id": "C",
        "text": "88 kursi"
      },
      {
        "id": "D",
        "text": "106 kursi"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Rumus Un = a + (n - 1)b. a = 16, b = 6, n = 14. Un = 16 + (13)(6) = 94 kursi.",
    "tip": "Identifikasi suku pertama (a) dan selisih konstan (b).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-062",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Barisan & Deret Geometri",
    "competency": "Menghitung rasio dan suku ke-n deret geometri",
    "question": "[Kasus Geometri MTs #62]: Dalam penelitian mikrobiologi di madrasah, koloni bakteri jenis ke-4 membelah diri menjadi 2 setiap 15 menit. Jika pada awal pengamatan terdapat 5 bakteri, berapakah jumlah bakteri setelah periode pembelahan ke-3?",
    "optionA": "40 bakteri",
    "optionB": "20 bakteri",
    "optionC": "15 bakteri",
    "optionD": "10 bakteri",
    "options": [
      {
        "id": "A",
        "text": "40 bakteri"
      },
      {
        "id": "B",
        "text": "20 bakteri"
      },
      {
        "id": "C",
        "text": "15 bakteri"
      },
      {
        "id": "D",
        "text": "10 bakteri"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Rumus Un = a . r^(n-1). a = 5, r = 2, n = 3. Un = 5 x 2^(2) = 20.",
    "tip": "Gunakan rumus pertumbuhan geometri eksponensial Un = a.r^(n-1).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-063",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bentuk Aljabar & Faktorisasi Kuadrat",
    "competency": "Menyederhanakan aljabar dan pemfaktoran bentuk kuadrat",
    "question": "[Aljabar MTs #63]: Bentuk pemfaktoran aljabar yang tepat dari persamaan kuadrat x² + 12x + 35 adalah...",
    "optionA": "(x - 5)(x - 7)",
    "optionB": "(x + 6)(x + 6)",
    "optionC": "(x + 5)(x + 7)",
    "optionD": "(x - 5)(x + 7)",
    "options": [
      {
        "id": "A",
        "text": "(x - 5)(x - 7)"
      },
      {
        "id": "B",
        "text": "(x + 6)(x + 6)"
      },
      {
        "id": "C",
        "text": "(x + 5)(x + 7)"
      },
      {
        "id": "D",
        "text": "(x - 5)(x + 7)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Cari p dan q sedemikian sehingga p + q = 12 dan p x q = 35. Diperoleh p = 5 dan q = 7, sehingga faktornya (x + 5)(x + 7).",
    "tip": "Faktorkan ax² + bx + c dengan mencari pasangan bilangan hasil kali c dan jumlah b.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-064",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Persamaan Linear Satu Variabel (PLSV)",
    "competency": "Menyelesaikan permasalahan persamaan linear satu variabel",
    "question": "[Persamaan Linear #64]: Nilai x yang memenuhi persamaan linear satu variabel 6x + 13 = 49 adalah...",
    "optionA": "x = 7",
    "optionB": "x = 5",
    "optionC": "x = 8",
    "optionD": "x = 6",
    "options": [
      {
        "id": "A",
        "text": "x = 7"
      },
      {
        "id": "B",
        "text": "x = 5"
      },
      {
        "id": "C",
        "text": "x = 8"
      },
      {
        "id": "D",
        "text": "x = 6"
      }
    ],
    "correctAnswer": "D",
    "explanation": "6x = 49 - 13 => 6x = 36 => x = 6.",
    "tip": "Kumpulkan variabel di satu ruas dan konstanta di ruas lainnya.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-065",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Pertidaksamaan Linear Satu Variabel (PtLSV)",
    "competency": "Menentukan himpunan penyelesaian pertidaksamaan linear",
    "question": "[Pertidaksamaan Linear #65]: Himpunan penyelesaian untuk pertidaksamaan 6x + 9 ≤ 51 dengan x anggota bilangan bulat adalah...",
    "optionA": "x ≤ 7",
    "optionB": "x ≥ 7",
    "optionC": "x < 6",
    "optionD": "x ≤ 9",
    "options": [
      {
        "id": "A",
        "text": "x ≤ 7"
      },
      {
        "id": "B",
        "text": "x ≥ 7"
      },
      {
        "id": "C",
        "text": "x < 6"
      },
      {
        "id": "D",
        "text": "x ≤ 9"
      }
    ],
    "correctAnswer": "A",
    "explanation": "6x ≤ 51 - 9 => 6x ≤ 42 => x ≤ 7.",
    "tip": "Bagi kedua ruas dengan koefisien x positif, arah tanda pertidaksamaan tetap.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-066",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Sistem Persamaan Linear Dua Variabel (SPLDV)",
    "competency": "Menyelesaikan SPLDV kontekstual koperasi madrasah",
    "question": "[SPLDV Koperasi MTs #66]: Santri A membeli 2 buku dan 3 pensil seharga Rp19.000. Santri B membeli 3 buku dan 1 pensil sejenis seharga Rp18.000. Berapakah harga yang harus dibayar untuk 1 buku dan 1 pensil?",
    "optionA": "Rp9.000",
    "optionB": "Rp8.000",
    "optionC": "Rp7.000",
    "optionD": "Rp9.500",
    "options": [
      {
        "id": "A",
        "text": "Rp9.000"
      },
      {
        "id": "B",
        "text": "Rp8.000"
      },
      {
        "id": "C",
        "text": "Rp7.000"
      },
      {
        "id": "D",
        "text": "Rp9.500"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Harga 1 buku = Rp5.000 dan 1 pensil = Rp3.000. Total = Rp8.000.",
    "tip": "Gunakan metode eliminasi variabel untuk menemukan nilai masing-masing barang.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-067",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Relasi dan Fungsi",
    "competency": "Menentukan nilai fungsi f(x) dan daerah hasil (range)",
    "question": "[Fungsi Linier #67]: Suatu fungsi ditentukan dengan rumus f(x) = 6x + 16. Nilai fungsi untuk x = 7 adalah...",
    "optionA": "64",
    "optionB": "52",
    "optionC": "58",
    "optionD": "62",
    "options": [
      {
        "id": "A",
        "text": "64"
      },
      {
        "id": "B",
        "text": "52"
      },
      {
        "id": "C",
        "text": "58"
      },
      {
        "id": "D",
        "text": "62"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Substitusi x = 7: f(7) = 6(7) + 16 = 42 + 16 = 58.",
    "tip": "Ganti x pada f(x) dengan nilai yang diminta.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-068",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Persamaan Garis Lurus & Gradien",
    "competency": "Menentukan kemiringan/gradien dan persamaan garis",
    "question": "[Gradien Garis #68]: Gradien garis lurus yang melalui titik A(4, 8) dan B(6, 18) adalah...",
    "optionA": "m = 6",
    "optionB": "m = -5",
    "optionC": "m = 7",
    "optionD": "m = 5",
    "options": [
      {
        "id": "A",
        "text": "m = 6"
      },
      {
        "id": "B",
        "text": "m = -5"
      },
      {
        "id": "C",
        "text": "m = 7"
      },
      {
        "id": "D",
        "text": "m = 5"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Gradien m = (y2 - y1) / (x2 - x1) = (18 - 8) / (6 - 4) = 10 / 2 = 5.",
    "tip": "m = Δy / Δx = (y2 - y1) / (x2 - x1).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-069",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Teorema Pythagoras & Tripel Pythagoras",
    "competency": "Menerapkan tripel Pythagoras pada segitiga dan tiang madrasah",
    "question": "[Teorema Pythagoras #69]: Kawat penyangga dipasang dari puncak tiang bendera madrasah ke pasak tanah. Jika tinggi tiang 16 meter dan jarak pasak ke kaki tiang 12 meter, panjang kawat penyangga tersebut adalah...",
    "optionA": "20 meter",
    "optionB": "24 meter",
    "optionC": "16 meter",
    "optionD": "28 meter",
    "options": [
      {
        "id": "A",
        "text": "20 meter"
      },
      {
        "id": "B",
        "text": "24 meter"
      },
      {
        "id": "C",
        "text": "16 meter"
      },
      {
        "id": "D",
        "text": "28 meter"
      }
    ],
    "correctAnswer": "A",
    "explanation": "c = √(a² + b²) = √(12² + 16²) = √(144 + 256) = √400 = 20 meter.",
    "tip": "Gunakan kelipatan tripel Pythagoras 3, 4, 5.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-070",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Lingkaran & Unsur-unsurnya",
    "competency": "Menghitung keliling, luas, juring, dan panjang busur lingkaran",
    "question": "[Geometri Lingkaran #70]: Sebuah kolam taman madrasah berbentuk lingkaran memiliki panjang jari-jari 28 meter. Keliling kolam tersebut (π = 22/7) adalah...",
    "optionA": "198 meter",
    "optionB": "176 meter",
    "optionC": "154 meter",
    "optionD": "220 meter",
    "options": [
      {
        "id": "A",
        "text": "198 meter"
      },
      {
        "id": "B",
        "text": "176 meter"
      },
      {
        "id": "C",
        "text": "154 meter"
      },
      {
        "id": "D",
        "text": "220 meter"
      }
    ],
    "correctAnswer": "B",
    "explanation": "K = 2 . π . r = 2 x (22/7) x 28 = 2 x 22 x 4 = 176 meter.",
    "tip": "Keliling lingkaran K = 2πr.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-071",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bangun Datar Segiempat & Segitiga",
    "competency": "Menghitung keliling dan luas lahan madrasah",
    "question": "[Pengukuran Lahan #71]: Kebun percontohan madrasah berbentuk persegi panjang dengan ukuran panjang 26 meter dan lebar 14 meter. Luas kebun tersebut adalah...",
    "optionA": "384 m²",
    "optionB": "348 m²",
    "optionC": "364 m²",
    "optionD": "80 m²",
    "options": [
      {
        "id": "A",
        "text": "384 m²"
      },
      {
        "id": "B",
        "text": "348 m²"
      },
      {
        "id": "C",
        "text": "364 m²"
      },
      {
        "id": "D",
        "text": "80 m²"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Luas = panjang x lebar = 26 m x 14 m = 364 m².",
    "tip": "Luas persegi panjang = p x l.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-072",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bangun Ruang Sisi Datar (Prisma & Limas)",
    "competency": "Menghitung luas permukaan dan volume prisma/limas gedung",
    "question": "[Bangun Ruang Kubus #72]: Bak penampungan air tempat wudhu madrasah berbentuk kubus dengan rusuk bagian dalam 7 dm. Kapasitas volume air jika terisi penuh adalah...",
    "optionA": "383 liter",
    "optionB": "323 liter",
    "optionC": "294 liter",
    "optionD": "343 liter",
    "options": [
      {
        "id": "A",
        "text": "383 liter"
      },
      {
        "id": "B",
        "text": "323 liter"
      },
      {
        "id": "C",
        "text": "294 liter"
      },
      {
        "id": "D",
        "text": "343 liter"
      }
    ],
    "correctAnswer": "D",
    "explanation": "V = s³ = 7³ = 343 dm³ = 343 liter.",
    "tip": "1 dm³ sama dengan 1 liter.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-073",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bangun Ruang Sisi Lengkung (Tabung & Kerucut)",
    "competency": "Menghitung volume tandon air dan kubah madrasah",
    "question": "[Bangun Ruang Tabung #73]: Sebuah tangki air silinder vertikal madrasah memiliki jari-jari alas 7 dm dan tinggi 22 dm. Volume tangki tersebut (π = 22/7) adalah...",
    "optionA": "3388 liter",
    "optionB": "3542 liter",
    "optionC": "3234 liter",
    "optionD": "3696 liter",
    "options": [
      {
        "id": "A",
        "text": "3388 liter"
      },
      {
        "id": "B",
        "text": "3542 liter"
      },
      {
        "id": "C",
        "text": "3234 liter"
      },
      {
        "id": "D",
        "text": "3696 liter"
      }
    ],
    "correctAnswer": "A",
    "explanation": "V = π . r² . t = (22/7) x 7² x 22 = 154 x 22 = 3388 liter.",
    "tip": "V = luas alas x tinggi = πr²t.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-074",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Kesebangunan dan Kekongruenan",
    "competency": "Menghitung tinggi objek nyata menggunakan kesebangunan",
    "question": "[Kesebangunan Bayangan #74]: Pada pagi hari, tongkat setinggi 2 meter memiliki bayangan sepanjang 3 meter. Di saat bersamaan, panjang bayangan menara masjid madrasah adalah 18 meter. Tinggi menara sebenarnya adalah...",
    "optionA": "14 meter",
    "optionB": "12 meter",
    "optionC": "11 meter",
    "optionD": "15 meter",
    "options": [
      {
        "id": "A",
        "text": "14 meter"
      },
      {
        "id": "B",
        "text": "12 meter"
      },
      {
        "id": "C",
        "text": "11 meter"
      },
      {
        "id": "D",
        "text": "15 meter"
      }
    ],
    "correctAnswer": "B",
    "explanation": "h_menara = (bayangan_menara x tinggi_tongkat) / bayangan_tongkat = (18 x 2) / 3 = 12 meter.",
    "tip": "Gunakan perbandingan senilai segitiga sebangun.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-075",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Transformasi Geometri (Translasi & Refleksi)",
    "competency": "Menentukan koordinat bayangan hasil pergeseran dan pencerminan",
    "question": "[Transformasi Translasi #75]: Titik A(6, 3) ditranslasikan oleh T = (7, 5). Koordinat titik bayangan A' adalah...",
    "optionA": "A'(12, 8)",
    "optionB": "A'(13, 6)",
    "optionC": "A'(13, 8)",
    "optionD": "A'(-1, -2)",
    "options": [
      {
        "id": "A",
        "text": "A'(12, 8)"
      },
      {
        "id": "B",
        "text": "A'(13, 6)"
      },
      {
        "id": "C",
        "text": "A'(13, 8)"
      },
      {
        "id": "D",
        "text": "A'(-1, -2)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "A'(x + a, y + b) = (6 + 7, 3 + 5) = (13, 8).",
    "tip": "Translasi menjumlahkan setiap absis dan ordinat dengan vektor geser.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-076",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Transformasi Geometri (Rotasi & Dilatasi)",
    "competency": "Menentukan bayangan hasil rotasi dan dilatasi faktor k",
    "question": "[Transformasi Rotasi #76]: Titik B(6, 9) dirotasikan sebesar 90° berlawanan arah jarum jam terhadap titik pusat O(0,0). Koordinat bayangan B' adalah...",
    "optionA": "B'(9, -6)",
    "optionB": "B'(-6, -9)",
    "optionC": "B'(6, 9)",
    "optionD": "B'(-9, 6)",
    "options": [
      {
        "id": "A",
        "text": "B'(9, -6)"
      },
      {
        "id": "B",
        "text": "B'(-6, -9)"
      },
      {
        "id": "C",
        "text": "B'(6, 9)"
      },
      {
        "id": "D",
        "text": "B'(-9, 6)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Rotasi [O, +90°]: (x, y) dipetakan menjadi (-y, x). Titik (6, 9) menjadi (-9, 6).",
    "tip": "Rotasi 90° berlawanan jarum jam: (x, y) -> (-y, x).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-077",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Statistika (Mean, Median, Modus)",
    "competency": "Menganalisis ukuran pemusatan data asesmen madrasah",
    "question": "[Statistika Nilai #77]: Data perolehan nilai kuis matematika lima perwakilan kelas MTs adalah: 68, 78, 83, 88, 98. Nilai rata-rata hitung (mean) data tersebut adalah...",
    "optionA": "83.0",
    "optionB": "85.0",
    "optionC": "81.0",
    "optionD": "87.0",
    "options": [
      {
        "id": "A",
        "text": "83.0"
      },
      {
        "id": "B",
        "text": "85.0"
      },
      {
        "id": "C",
        "text": "81.0"
      },
      {
        "id": "D",
        "text": "87.0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Mean = (68 + 78 + 83 + 88 + 98) / 5 = 415 / 5 = 83.0.",
    "tip": "Mean = total jumlah nilai dibagi banyak data.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-078",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Peluang Teoretik dan Frekuensi Harapan",
    "competency": "Menentukan peluang kejadian pada percobaan acak madrasah",
    "question": "[Peluang Kejadian #78]: Dalam sebuah kantong undian madrasah terdapat 20 kartu bernomor sama bentuk. Sebanyak 6 kartu berwarna merah dan sisanya berwarna biru. Peluang terambil satu kartu merah secara acak adalah...",
    "optionA": "14/20",
    "optionB": "6/20",
    "optionC": "1/20",
    "optionD": "6/22",
    "options": [
      {
        "id": "A",
        "text": "14/20"
      },
      {
        "id": "B",
        "text": "6/20"
      },
      {
        "id": "C",
        "text": "1/20"
      },
      {
        "id": "D",
        "text": "6/22"
      }
    ],
    "correctAnswer": "B",
    "explanation": "P(A) = n(A) / n(S) = 6 / 20.",
    "tip": "Peluang = jumlah kejadian sukses dibagi total seluruh kejadian.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-079",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bilangan Berpangkat dan Bentuk Akar",
    "competency": "Menyederhanakan eksponen dan merasionalkan bentuk akar",
    "question": "[Perpangkatan Aljabar #79]: Hasil penyederhanaan dari bentuk eksponen (6⁴ x 6²) : 6³ adalah...",
    "optionA": "6² = 36",
    "optionB": "6⁴ = 1296",
    "optionC": "6³ = 216",
    "optionD": "6⁵",
    "options": [
      {
        "id": "A",
        "text": "6² = 36"
      },
      {
        "id": "B",
        "text": "6⁴ = 1296"
      },
      {
        "id": "C",
        "text": "6³ = 216"
      },
      {
        "id": "D",
        "text": "6⁵"
      }
    ],
    "correctAnswer": "C",
    "explanation": "6^(4 + 2 - 3) = 6^3 = 216.",
    "tip": "Perkalian pangkat dijumlahkan, pembagian pangkat dikurangkan.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-080",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Persamaan & Fungsi Kuadrat",
    "competency": "Menentukan akar persamaan, sumbu simetri, dan nilai optimum",
    "question": "[Fungsi Kuadrat Parabola #80]: Persamaan sumbu simetri dari kurva parabola fungsi f(x) = x² -12x + 12 adalah...",
    "optionA": "x = -6",
    "optionB": "x = 8",
    "optionC": "x = 5",
    "optionD": "x = 6",
    "options": [
      {
        "id": "A",
        "text": "x = -6"
      },
      {
        "id": "B",
        "text": "x = 8"
      },
      {
        "id": "C",
        "text": "x = 5"
      },
      {
        "id": "D",
        "text": "x = 6"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Sumbu simetri x = -b / (2a) = -(-12) / (2 x 1) = 12 / 2 = 6.",
    "tip": "x = -b / (2a).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-081",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Pola Bilangan & Barisan Aritmetika",
    "competency": "Menentukan suku ke-n dan jumlah deret aritmetika madrasah",
    "question": "[Kasus Aritmetika MTs #81]: Di auditorium madrasah, penataan kursi baris pertama terdiri atas 19 kursi. Setiap baris di belakangnya selalu bertambah 7 kursi secara konstan. Berapakah kapasitas kursi yang tertata pada baris ke-15?",
    "optionA": "117 kursi",
    "optionB": "124 kursi",
    "optionC": "110 kursi",
    "optionD": "131 kursi",
    "options": [
      {
        "id": "A",
        "text": "117 kursi"
      },
      {
        "id": "B",
        "text": "124 kursi"
      },
      {
        "id": "C",
        "text": "110 kursi"
      },
      {
        "id": "D",
        "text": "131 kursi"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Rumus Un = a + (n - 1)b. a = 19, b = 7, n = 15. Un = 19 + (14)(7) = 117 kursi.",
    "tip": "Identifikasi suku pertama (a) dan selisih konstan (b).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-082",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Barisan & Deret Geometri",
    "competency": "Menghitung rasio dan suku ke-n deret geometri",
    "question": "[Kasus Geometri MTs #82]: Dalam penelitian mikrobiologi di madrasah, koloni bakteri jenis ke-5 membelah diri menjadi 2 setiap 15 menit. Jika pada awal pengamatan terdapat 6 bakteri, berapakah jumlah bakteri setelah periode pembelahan ke-4?",
    "optionA": "96 bakteri",
    "optionB": "48 bakteri",
    "optionC": "42 bakteri",
    "optionD": "24 bakteri",
    "options": [
      {
        "id": "A",
        "text": "96 bakteri"
      },
      {
        "id": "B",
        "text": "48 bakteri"
      },
      {
        "id": "C",
        "text": "42 bakteri"
      },
      {
        "id": "D",
        "text": "24 bakteri"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Rumus Un = a . r^(n-1). a = 6, r = 2, n = 4. Un = 6 x 2^(3) = 48.",
    "tip": "Gunakan rumus pertumbuhan geometri eksponensial Un = a.r^(n-1).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-083",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bentuk Aljabar & Faktorisasi Kuadrat",
    "competency": "Menyederhanakan aljabar dan pemfaktoran bentuk kuadrat",
    "question": "[Aljabar MTs #83]: Bentuk pemfaktoran aljabar yang tepat dari persamaan kuadrat x² + 14x + 48 adalah...",
    "optionA": "(x - 6)(x - 8)",
    "optionB": "(x + 7)(x + 7)",
    "optionC": "(x + 6)(x + 8)",
    "optionD": "(x - 6)(x + 8)",
    "options": [
      {
        "id": "A",
        "text": "(x - 6)(x - 8)"
      },
      {
        "id": "B",
        "text": "(x + 7)(x + 7)"
      },
      {
        "id": "C",
        "text": "(x + 6)(x + 8)"
      },
      {
        "id": "D",
        "text": "(x - 6)(x + 8)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Cari p dan q sedemikian sehingga p + q = 14 dan p x q = 48. Diperoleh p = 6 dan q = 8, sehingga faktornya (x + 6)(x + 8).",
    "tip": "Faktorkan ax² + bx + c dengan mencari pasangan bilangan hasil kali c dan jumlah b.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-084",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Persamaan Linear Satu Variabel (PLSV)",
    "competency": "Menyelesaikan permasalahan persamaan linear satu variabel",
    "question": "[Persamaan Linear #84]: Nilai x yang memenuhi persamaan linear satu variabel 7x + 16 = 65 adalah...",
    "optionA": "x = 8",
    "optionB": "x = 6",
    "optionC": "x = 9",
    "optionD": "x = 7",
    "options": [
      {
        "id": "A",
        "text": "x = 8"
      },
      {
        "id": "B",
        "text": "x = 6"
      },
      {
        "id": "C",
        "text": "x = 9"
      },
      {
        "id": "D",
        "text": "x = 7"
      }
    ],
    "correctAnswer": "D",
    "explanation": "7x = 65 - 16 => 7x = 49 => x = 7.",
    "tip": "Kumpulkan variabel di satu ruas dan konstanta di ruas lainnya.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-085",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Pertidaksamaan Linear Satu Variabel (PtLSV)",
    "competency": "Menentukan himpunan penyelesaian pertidaksamaan linear",
    "question": "[Pertidaksamaan Linear #85]: Himpunan penyelesaian untuk pertidaksamaan 7x + 11 ≤ 67 dengan x anggota bilangan bulat adalah...",
    "optionA": "x ≤ 8",
    "optionB": "x ≥ 8",
    "optionC": "x < 7",
    "optionD": "x ≤ 10",
    "options": [
      {
        "id": "A",
        "text": "x ≤ 8"
      },
      {
        "id": "B",
        "text": "x ≥ 8"
      },
      {
        "id": "C",
        "text": "x < 7"
      },
      {
        "id": "D",
        "text": "x ≤ 10"
      }
    ],
    "correctAnswer": "A",
    "explanation": "7x ≤ 67 - 11 => 7x ≤ 56 => x ≤ 8.",
    "tip": "Bagi kedua ruas dengan koefisien x positif, arah tanda pertidaksamaan tetap.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-086",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Sistem Persamaan Linear Dua Variabel (SPLDV)",
    "competency": "Menyelesaikan SPLDV kontekstual koperasi madrasah",
    "question": "[SPLDV Koperasi MTs #86]: Santri A membeli 2 buku dan 3 pensil seharga Rp20.750. Santri B membeli 3 buku dan 1 pensil sejenis seharga Rp19.750. Berapakah harga yang harus dibayar untuk 1 buku dan 1 pensil?",
    "optionA": "Rp9.750",
    "optionB": "Rp8.750",
    "optionC": "Rp7.750",
    "optionD": "Rp10.250",
    "options": [
      {
        "id": "A",
        "text": "Rp9.750"
      },
      {
        "id": "B",
        "text": "Rp8.750"
      },
      {
        "id": "C",
        "text": "Rp7.750"
      },
      {
        "id": "D",
        "text": "Rp10.250"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Harga 1 buku = Rp5.500 dan 1 pensil = Rp3.250. Total = Rp8.750.",
    "tip": "Gunakan metode eliminasi variabel untuk menemukan nilai masing-masing barang.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-087",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Relasi dan Fungsi",
    "competency": "Menentukan nilai fungsi f(x) dan daerah hasil (range)",
    "question": "[Fungsi Linier #87]: Suatu fungsi ditentukan dengan rumus f(x) = 7x + 19. Nilai fungsi untuk x = 8 adalah...",
    "optionA": "82",
    "optionB": "68",
    "optionC": "75",
    "optionD": "79",
    "options": [
      {
        "id": "A",
        "text": "82"
      },
      {
        "id": "B",
        "text": "68"
      },
      {
        "id": "C",
        "text": "75"
      },
      {
        "id": "D",
        "text": "79"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Substitusi x = 8: f(8) = 7(8) + 19 = 56 + 19 = 75.",
    "tip": "Ganti x pada f(x) dengan nilai yang diminta.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-088",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Persamaan Garis Lurus & Gradien",
    "competency": "Menentukan kemiringan/gradien dan persamaan garis",
    "question": "[Gradien Garis #88]: Gradien garis lurus yang melalui titik A(5, 10) dan B(7, 22) adalah...",
    "optionA": "m = 7",
    "optionB": "m = -6",
    "optionC": "m = 8",
    "optionD": "m = 6",
    "options": [
      {
        "id": "A",
        "text": "m = 7"
      },
      {
        "id": "B",
        "text": "m = -6"
      },
      {
        "id": "C",
        "text": "m = 8"
      },
      {
        "id": "D",
        "text": "m = 6"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Gradien m = (y2 - y1) / (x2 - x1) = (22 - 10) / (7 - 5) = 12 / 2 = 6.",
    "tip": "m = Δy / Δx = (y2 - y1) / (x2 - x1).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-089",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Teorema Pythagoras & Tripel Pythagoras",
    "competency": "Menerapkan tripel Pythagoras pada segitiga dan tiang madrasah",
    "question": "[Teorema Pythagoras #89]: Kawat penyangga dipasang dari puncak tiang bendera madrasah ke pasak tanah. Jika tinggi tiang 20 meter dan jarak pasak ke kaki tiang 15 meter, panjang kawat penyangga tersebut adalah...",
    "optionA": "25 meter",
    "optionB": "30 meter",
    "optionC": "20 meter",
    "optionD": "35 meter",
    "options": [
      {
        "id": "A",
        "text": "25 meter"
      },
      {
        "id": "B",
        "text": "30 meter"
      },
      {
        "id": "C",
        "text": "20 meter"
      },
      {
        "id": "D",
        "text": "35 meter"
      }
    ],
    "correctAnswer": "A",
    "explanation": "c = √(a² + b²) = √(15² + 20²) = √(225 + 400) = √625 = 25 meter.",
    "tip": "Gunakan kelipatan tripel Pythagoras 3, 4, 5.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-090",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Lingkaran & Unsur-unsurnya",
    "competency": "Menghitung keliling, luas, juring, dan panjang busur lingkaran",
    "question": "[Geometri Lingkaran #90]: Sebuah kolam taman madrasah berbentuk lingkaran memiliki panjang jari-jari 35 meter. Keliling kolam tersebut (π = 22/7) adalah...",
    "optionA": "242 meter",
    "optionB": "220 meter",
    "optionC": "198 meter",
    "optionD": "264 meter",
    "options": [
      {
        "id": "A",
        "text": "242 meter"
      },
      {
        "id": "B",
        "text": "220 meter"
      },
      {
        "id": "C",
        "text": "198 meter"
      },
      {
        "id": "D",
        "text": "264 meter"
      }
    ],
    "correctAnswer": "B",
    "explanation": "K = 2 . π . r = 2 x (22/7) x 35 = 2 x 22 x 5 = 220 meter.",
    "tip": "Keliling lingkaran K = 2πr.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-091",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bangun Datar Segiempat & Segitiga",
    "competency": "Menghitung keliling dan luas lahan madrasah",
    "question": "[Pengukuran Lahan #91]: Kebun percontohan madrasah berbentuk persegi panjang dengan ukuran panjang 30 meter dan lebar 16 meter. Luas kebun tersebut adalah...",
    "optionA": "500 m²",
    "optionB": "464 m²",
    "optionC": "480 m²",
    "optionD": "92 m²",
    "options": [
      {
        "id": "A",
        "text": "500 m²"
      },
      {
        "id": "B",
        "text": "464 m²"
      },
      {
        "id": "C",
        "text": "480 m²"
      },
      {
        "id": "D",
        "text": "92 m²"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Luas = panjang x lebar = 30 m x 16 m = 480 m².",
    "tip": "Luas persegi panjang = p x l.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-092",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bangun Ruang Sisi Datar (Prisma & Limas)",
    "competency": "Menghitung luas permukaan dan volume prisma/limas gedung",
    "question": "[Bangun Ruang Kubus #92]: Bak penampungan air tempat wudhu madrasah berbentuk kubus dengan rusuk bagian dalam 8 dm. Kapasitas volume air jika terisi penuh adalah...",
    "optionA": "562 liter",
    "optionB": "487 liter",
    "optionC": "384 liter",
    "optionD": "512 liter",
    "options": [
      {
        "id": "A",
        "text": "562 liter"
      },
      {
        "id": "B",
        "text": "487 liter"
      },
      {
        "id": "C",
        "text": "384 liter"
      },
      {
        "id": "D",
        "text": "512 liter"
      }
    ],
    "correctAnswer": "D",
    "explanation": "V = s³ = 8³ = 512 dm³ = 512 liter.",
    "tip": "1 dm³ sama dengan 1 liter.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-093",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bangun Ruang Sisi Lengkung (Tabung & Kerucut)",
    "competency": "Menghitung volume tandon air dan kubah madrasah",
    "question": "[Bangun Ruang Tabung #93]: Sebuah tangki air silinder vertikal madrasah memiliki jari-jari alas 7 dm dan tinggi 25 dm. Volume tangki tersebut (π = 22/7) adalah...",
    "optionA": "3850 liter",
    "optionB": "4004 liter",
    "optionC": "3696 liter",
    "optionD": "4158 liter",
    "options": [
      {
        "id": "A",
        "text": "3850 liter"
      },
      {
        "id": "B",
        "text": "4004 liter"
      },
      {
        "id": "C",
        "text": "3696 liter"
      },
      {
        "id": "D",
        "text": "4158 liter"
      }
    ],
    "correctAnswer": "A",
    "explanation": "V = π . r² . t = (22/7) x 7² x 25 = 154 x 25 = 3850 liter.",
    "tip": "V = luas alas x tinggi = πr²t.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-094",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Kesebangunan dan Kekongruenan",
    "competency": "Menghitung tinggi objek nyata menggunakan kesebangunan",
    "question": "[Kesebangunan Bayangan #94]: Pada pagi hari, tongkat setinggi 2 meter memiliki bayangan sepanjang 3 meter. Di saat bersamaan, panjang bayangan menara masjid madrasah adalah 21 meter. Tinggi menara sebenarnya adalah...",
    "optionA": "16 meter",
    "optionB": "14 meter",
    "optionC": "13 meter",
    "optionD": "17 meter",
    "options": [
      {
        "id": "A",
        "text": "16 meter"
      },
      {
        "id": "B",
        "text": "14 meter"
      },
      {
        "id": "C",
        "text": "13 meter"
      },
      {
        "id": "D",
        "text": "17 meter"
      }
    ],
    "correctAnswer": "B",
    "explanation": "h_menara = (bayangan_menara x tinggi_tongkat) / bayangan_tongkat = (21 x 2) / 3 = 14 meter.",
    "tip": "Gunakan perbandingan senilai segitiga sebangun.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-095",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Transformasi Geometri (Translasi & Refleksi)",
    "competency": "Menentukan koordinat bayangan hasil pergeseran dan pencerminan",
    "question": "[Transformasi Translasi #95]: Titik A(7, 4) ditranslasikan oleh T = (8, 5). Koordinat titik bayangan A' adalah...",
    "optionA": "A'(14, 9)",
    "optionB": "A'(15, 7)",
    "optionC": "A'(15, 9)",
    "optionD": "A'(-1, -1)",
    "options": [
      {
        "id": "A",
        "text": "A'(14, 9)"
      },
      {
        "id": "B",
        "text": "A'(15, 7)"
      },
      {
        "id": "C",
        "text": "A'(15, 9)"
      },
      {
        "id": "D",
        "text": "A'(-1, -1)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "A'(x + a, y + b) = (7 + 8, 4 + 5) = (15, 9).",
    "tip": "Translasi menjumlahkan setiap absis dan ordinat dengan vektor geser.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-096",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Transformasi Geometri (Rotasi & Dilatasi)",
    "competency": "Menentukan bayangan hasil rotasi dan dilatasi faktor k",
    "question": "[Transformasi Rotasi #96]: Titik B(7, 10) dirotasikan sebesar 90° berlawanan arah jarum jam terhadap titik pusat O(0,0). Koordinat bayangan B' adalah...",
    "optionA": "B'(10, -7)",
    "optionB": "B'(-7, -10)",
    "optionC": "B'(7, 10)",
    "optionD": "B'(-10, 7)",
    "options": [
      {
        "id": "A",
        "text": "B'(10, -7)"
      },
      {
        "id": "B",
        "text": "B'(-7, -10)"
      },
      {
        "id": "C",
        "text": "B'(7, 10)"
      },
      {
        "id": "D",
        "text": "B'(-10, 7)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Rotasi [O, +90°]: (x, y) dipetakan menjadi (-y, x). Titik (7, 10) menjadi (-10, 7).",
    "tip": "Rotasi 90° berlawanan jarum jam: (x, y) -> (-y, x).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-097",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Statistika (Mean, Median, Modus)",
    "competency": "Menganalisis ukuran pemusatan data asesmen madrasah",
    "question": "[Statistika Nilai #97]: Data perolehan nilai kuis matematika lima perwakilan kelas MTs adalah: 70, 80, 85, 90, 100. Nilai rata-rata hitung (mean) data tersebut adalah...",
    "optionA": "85.0",
    "optionB": "87.0",
    "optionC": "83.0",
    "optionD": "89.0",
    "options": [
      {
        "id": "A",
        "text": "85.0"
      },
      {
        "id": "B",
        "text": "87.0"
      },
      {
        "id": "C",
        "text": "83.0"
      },
      {
        "id": "D",
        "text": "89.0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Mean = (70 + 80 + 85 + 90 + 100) / 5 = 425 / 5 = 85.0.",
    "tip": "Mean = total jumlah nilai dibagi banyak data.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-098",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Peluang Teoretik dan Frekuensi Harapan",
    "competency": "Menentukan peluang kejadian pada percobaan acak madrasah",
    "question": "[Peluang Kejadian #98]: Dalam sebuah kantong undian madrasah terdapat 22 kartu bernomor sama bentuk. Sebanyak 7 kartu berwarna merah dan sisanya berwarna biru. Peluang terambil satu kartu merah secara acak adalah...",
    "optionA": "15/22",
    "optionB": "7/22",
    "optionC": "1/22",
    "optionD": "7/24",
    "options": [
      {
        "id": "A",
        "text": "15/22"
      },
      {
        "id": "B",
        "text": "7/22"
      },
      {
        "id": "C",
        "text": "1/22"
      },
      {
        "id": "D",
        "text": "7/24"
      }
    ],
    "correctAnswer": "B",
    "explanation": "P(A) = n(A) / n(S) = 7 / 22.",
    "tip": "Peluang = jumlah kejadian sukses dibagi total seluruh kejadian.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-099",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bilangan Berpangkat dan Bentuk Akar",
    "competency": "Menyederhanakan eksponen dan merasionalkan bentuk akar",
    "question": "[Perpangkatan Aljabar #99]: Hasil penyederhanaan dari bentuk eksponen (7⁴ x 7²) : 7³ adalah...",
    "optionA": "7² = 49",
    "optionB": "7⁴ = 2401",
    "optionC": "7³ = 343",
    "optionD": "7⁵",
    "options": [
      {
        "id": "A",
        "text": "7² = 49"
      },
      {
        "id": "B",
        "text": "7⁴ = 2401"
      },
      {
        "id": "C",
        "text": "7³ = 343"
      },
      {
        "id": "D",
        "text": "7⁵"
      }
    ],
    "correctAnswer": "C",
    "explanation": "7^(4 + 2 - 3) = 7^3 = 343.",
    "tip": "Perkalian pangkat dijumlahkan, pembagian pangkat dikurangkan.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-100",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Persamaan & Fungsi Kuadrat",
    "competency": "Menentukan akar persamaan, sumbu simetri, dan nilai optimum",
    "question": "[Fungsi Kuadrat Parabola #100]: Persamaan sumbu simetri dari kurva parabola fungsi f(x) = x² -14x + 12 adalah...",
    "optionA": "x = -7",
    "optionB": "x = 9",
    "optionC": "x = 6",
    "optionD": "x = 7",
    "options": [
      {
        "id": "A",
        "text": "x = -7"
      },
      {
        "id": "B",
        "text": "x = 9"
      },
      {
        "id": "C",
        "text": "x = 6"
      },
      {
        "id": "D",
        "text": "x = 7"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Sumbu simetri x = -b / (2a) = -(-14) / (2 x 1) = 14 / 2 = 7.",
    "tip": "x = -b / (2a).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-101",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Pola Bilangan & Barisan Aritmetika",
    "competency": "Menentukan suku ke-n dan jumlah deret aritmetika madrasah",
    "question": "[Kasus Aritmetika MTs #101]: Di auditorium madrasah, penataan kursi baris pertama terdiri atas 22 kursi. Setiap baris di belakangnya selalu bertambah 8 kursi secara konstan. Berapakah kapasitas kursi yang tertata pada baris ke-16?",
    "optionA": "142 kursi",
    "optionB": "150 kursi",
    "optionC": "134 kursi",
    "optionD": "158 kursi",
    "options": [
      {
        "id": "A",
        "text": "142 kursi"
      },
      {
        "id": "B",
        "text": "150 kursi"
      },
      {
        "id": "C",
        "text": "134 kursi"
      },
      {
        "id": "D",
        "text": "158 kursi"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Rumus Un = a + (n - 1)b. a = 22, b = 8, n = 16. Un = 22 + (15)(8) = 142 kursi.",
    "tip": "Identifikasi suku pertama (a) dan selisih konstan (b).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-102",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Barisan & Deret Geometri",
    "competency": "Menghitung rasio dan suku ke-n deret geometri",
    "question": "[Kasus Geometri MTs #102]: Dalam penelitian mikrobiologi di madrasah, koloni bakteri jenis ke-6 membelah diri menjadi 2 setiap 15 menit. Jika pada awal pengamatan terdapat 7 bakteri, berapakah jumlah bakteri setelah periode pembelahan ke-5?",
    "optionA": "224 bakteri",
    "optionB": "112 bakteri",
    "optionC": "105 bakteri",
    "optionD": "56 bakteri",
    "options": [
      {
        "id": "A",
        "text": "224 bakteri"
      },
      {
        "id": "B",
        "text": "112 bakteri"
      },
      {
        "id": "C",
        "text": "105 bakteri"
      },
      {
        "id": "D",
        "text": "56 bakteri"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Rumus Un = a . r^(n-1). a = 7, r = 2, n = 5. Un = 7 x 2^(4) = 112.",
    "tip": "Gunakan rumus pertumbuhan geometri eksponensial Un = a.r^(n-1).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-103",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bentuk Aljabar & Faktorisasi Kuadrat",
    "competency": "Menyederhanakan aljabar dan pemfaktoran bentuk kuadrat",
    "question": "[Aljabar MTs #103]: Bentuk pemfaktoran aljabar yang tepat dari persamaan kuadrat x² + 16x + 63 adalah...",
    "optionA": "(x - 7)(x - 9)",
    "optionB": "(x + 8)(x + 8)",
    "optionC": "(x + 7)(x + 9)",
    "optionD": "(x - 7)(x + 9)",
    "options": [
      {
        "id": "A",
        "text": "(x - 7)(x - 9)"
      },
      {
        "id": "B",
        "text": "(x + 8)(x + 8)"
      },
      {
        "id": "C",
        "text": "(x + 7)(x + 9)"
      },
      {
        "id": "D",
        "text": "(x - 7)(x + 9)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Cari p dan q sedemikian sehingga p + q = 16 dan p x q = 63. Diperoleh p = 7 dan q = 9, sehingga faktornya (x + 7)(x + 9).",
    "tip": "Faktorkan ax² + bx + c dengan mencari pasangan bilangan hasil kali c dan jumlah b.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-104",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Persamaan Linear Satu Variabel (PLSV)",
    "competency": "Menyelesaikan permasalahan persamaan linear satu variabel",
    "question": "[Persamaan Linear #104]: Nilai x yang memenuhi persamaan linear satu variabel 8x + 19 = 83 adalah...",
    "optionA": "x = 9",
    "optionB": "x = 7",
    "optionC": "x = 10",
    "optionD": "x = 8",
    "options": [
      {
        "id": "A",
        "text": "x = 9"
      },
      {
        "id": "B",
        "text": "x = 7"
      },
      {
        "id": "C",
        "text": "x = 10"
      },
      {
        "id": "D",
        "text": "x = 8"
      }
    ],
    "correctAnswer": "D",
    "explanation": "8x = 83 - 19 => 8x = 64 => x = 8.",
    "tip": "Kumpulkan variabel di satu ruas dan konstanta di ruas lainnya.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-105",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Pertidaksamaan Linear Satu Variabel (PtLSV)",
    "competency": "Menentukan himpunan penyelesaian pertidaksamaan linear",
    "question": "[Pertidaksamaan Linear #105]: Himpunan penyelesaian untuk pertidaksamaan 8x + 13 ≤ 85 dengan x anggota bilangan bulat adalah...",
    "optionA": "x ≤ 9",
    "optionB": "x ≥ 9",
    "optionC": "x < 8",
    "optionD": "x ≤ 11",
    "options": [
      {
        "id": "A",
        "text": "x ≤ 9"
      },
      {
        "id": "B",
        "text": "x ≥ 9"
      },
      {
        "id": "C",
        "text": "x < 8"
      },
      {
        "id": "D",
        "text": "x ≤ 11"
      }
    ],
    "correctAnswer": "A",
    "explanation": "8x ≤ 85 - 13 => 8x ≤ 72 => x ≤ 9.",
    "tip": "Bagi kedua ruas dengan koefisien x positif, arah tanda pertidaksamaan tetap.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-106",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Sistem Persamaan Linear Dua Variabel (SPLDV)",
    "competency": "Menyelesaikan SPLDV kontekstual koperasi madrasah",
    "question": "[SPLDV Koperasi MTs #106]: Santri A membeli 2 buku dan 3 pensil seharga Rp22.500. Santri B membeli 3 buku dan 1 pensil sejenis seharga Rp21.500. Berapakah harga yang harus dibayar untuk 1 buku dan 1 pensil?",
    "optionA": "Rp10.500",
    "optionB": "Rp9.500",
    "optionC": "Rp8.500",
    "optionD": "Rp11.000",
    "options": [
      {
        "id": "A",
        "text": "Rp10.500"
      },
      {
        "id": "B",
        "text": "Rp9.500"
      },
      {
        "id": "C",
        "text": "Rp8.500"
      },
      {
        "id": "D",
        "text": "Rp11.000"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Harga 1 buku = Rp6.000 dan 1 pensil = Rp3.500. Total = Rp9.500.",
    "tip": "Gunakan metode eliminasi variabel untuk menemukan nilai masing-masing barang.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-107",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Relasi dan Fungsi",
    "competency": "Menentukan nilai fungsi f(x) dan daerah hasil (range)",
    "question": "[Fungsi Linier #107]: Suatu fungsi ditentukan dengan rumus f(x) = 8x + 22. Nilai fungsi untuk x = 9 adalah...",
    "optionA": "102",
    "optionB": "86",
    "optionC": "94",
    "optionD": "98",
    "options": [
      {
        "id": "A",
        "text": "102"
      },
      {
        "id": "B",
        "text": "86"
      },
      {
        "id": "C",
        "text": "94"
      },
      {
        "id": "D",
        "text": "98"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Substitusi x = 9: f(9) = 8(9) + 22 = 72 + 22 = 94.",
    "tip": "Ganti x pada f(x) dengan nilai yang diminta.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-108",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Persamaan Garis Lurus & Gradien",
    "competency": "Menentukan kemiringan/gradien dan persamaan garis",
    "question": "[Gradien Garis #108]: Gradien garis lurus yang melalui titik A(6, 12) dan B(8, 26) adalah...",
    "optionA": "m = 8",
    "optionB": "m = -7",
    "optionC": "m = 9",
    "optionD": "m = 7",
    "options": [
      {
        "id": "A",
        "text": "m = 8"
      },
      {
        "id": "B",
        "text": "m = -7"
      },
      {
        "id": "C",
        "text": "m = 9"
      },
      {
        "id": "D",
        "text": "m = 7"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Gradien m = (y2 - y1) / (x2 - x1) = (26 - 12) / (8 - 6) = 14 / 2 = 7.",
    "tip": "m = Δy / Δx = (y2 - y1) / (x2 - x1).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-109",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Teorema Pythagoras & Tripel Pythagoras",
    "competency": "Menerapkan tripel Pythagoras pada segitiga dan tiang madrasah",
    "question": "[Teorema Pythagoras #109]: Kawat penyangga dipasang dari puncak tiang bendera madrasah ke pasak tanah. Jika tinggi tiang 24 meter dan jarak pasak ke kaki tiang 18 meter, panjang kawat penyangga tersebut adalah...",
    "optionA": "30 meter",
    "optionB": "36 meter",
    "optionC": "24 meter",
    "optionD": "42 meter",
    "options": [
      {
        "id": "A",
        "text": "30 meter"
      },
      {
        "id": "B",
        "text": "36 meter"
      },
      {
        "id": "C",
        "text": "24 meter"
      },
      {
        "id": "D",
        "text": "42 meter"
      }
    ],
    "correctAnswer": "A",
    "explanation": "c = √(a² + b²) = √(18² + 24²) = √(324 + 576) = √900 = 30 meter.",
    "tip": "Gunakan kelipatan tripel Pythagoras 3, 4, 5.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-110",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Lingkaran & Unsur-unsurnya",
    "competency": "Menghitung keliling, luas, juring, dan panjang busur lingkaran",
    "question": "[Geometri Lingkaran #110]: Sebuah kolam taman madrasah berbentuk lingkaran memiliki panjang jari-jari 42 meter. Keliling kolam tersebut (π = 22/7) adalah...",
    "optionA": "286 meter",
    "optionB": "264 meter",
    "optionC": "242 meter",
    "optionD": "308 meter",
    "options": [
      {
        "id": "A",
        "text": "286 meter"
      },
      {
        "id": "B",
        "text": "264 meter"
      },
      {
        "id": "C",
        "text": "242 meter"
      },
      {
        "id": "D",
        "text": "308 meter"
      }
    ],
    "correctAnswer": "B",
    "explanation": "K = 2 . π . r = 2 x (22/7) x 42 = 2 x 22 x 6 = 264 meter.",
    "tip": "Keliling lingkaran K = 2πr.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-111",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bangun Datar Segiempat & Segitiga",
    "competency": "Menghitung keliling dan luas lahan madrasah",
    "question": "[Pengukuran Lahan #111]: Kebun percontohan madrasah berbentuk persegi panjang dengan ukuran panjang 34 meter dan lebar 18 meter. Luas kebun tersebut adalah...",
    "optionA": "632 m²",
    "optionB": "596 m²",
    "optionC": "612 m²",
    "optionD": "104 m²",
    "options": [
      {
        "id": "A",
        "text": "632 m²"
      },
      {
        "id": "B",
        "text": "596 m²"
      },
      {
        "id": "C",
        "text": "612 m²"
      },
      {
        "id": "D",
        "text": "104 m²"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Luas = panjang x lebar = 34 m x 18 m = 612 m².",
    "tip": "Luas persegi panjang = p x l.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-112",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bangun Ruang Sisi Datar (Prisma & Limas)",
    "competency": "Menghitung luas permukaan dan volume prisma/limas gedung",
    "question": "[Bangun Ruang Kubus #112]: Bak penampungan air tempat wudhu madrasah berbentuk kubus dengan rusuk bagian dalam 9 dm. Kapasitas volume air jika terisi penuh adalah...",
    "optionA": "789 liter",
    "optionB": "699 liter",
    "optionC": "486 liter",
    "optionD": "729 liter",
    "options": [
      {
        "id": "A",
        "text": "789 liter"
      },
      {
        "id": "B",
        "text": "699 liter"
      },
      {
        "id": "C",
        "text": "486 liter"
      },
      {
        "id": "D",
        "text": "729 liter"
      }
    ],
    "correctAnswer": "D",
    "explanation": "V = s³ = 9³ = 729 dm³ = 729 liter.",
    "tip": "1 dm³ sama dengan 1 liter.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-113",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bangun Ruang Sisi Lengkung (Tabung & Kerucut)",
    "competency": "Menghitung volume tandon air dan kubah madrasah",
    "question": "[Bangun Ruang Tabung #113]: Sebuah tangki air silinder vertikal madrasah memiliki jari-jari alas 7 dm dan tinggi 28 dm. Volume tangki tersebut (π = 22/7) adalah...",
    "optionA": "4312 liter",
    "optionB": "4466 liter",
    "optionC": "4158 liter",
    "optionD": "4620 liter",
    "options": [
      {
        "id": "A",
        "text": "4312 liter"
      },
      {
        "id": "B",
        "text": "4466 liter"
      },
      {
        "id": "C",
        "text": "4158 liter"
      },
      {
        "id": "D",
        "text": "4620 liter"
      }
    ],
    "correctAnswer": "A",
    "explanation": "V = π . r² . t = (22/7) x 7² x 28 = 154 x 28 = 4312 liter.",
    "tip": "V = luas alas x tinggi = πr²t.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-114",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Kesebangunan dan Kekongruenan",
    "competency": "Menghitung tinggi objek nyata menggunakan kesebangunan",
    "question": "[Kesebangunan Bayangan #114]: Pada pagi hari, tongkat setinggi 2 meter memiliki bayangan sepanjang 3 meter. Di saat bersamaan, panjang bayangan menara masjid madrasah adalah 24 meter. Tinggi menara sebenarnya adalah...",
    "optionA": "18 meter",
    "optionB": "16 meter",
    "optionC": "15 meter",
    "optionD": "19 meter",
    "options": [
      {
        "id": "A",
        "text": "18 meter"
      },
      {
        "id": "B",
        "text": "16 meter"
      },
      {
        "id": "C",
        "text": "15 meter"
      },
      {
        "id": "D",
        "text": "19 meter"
      }
    ],
    "correctAnswer": "B",
    "explanation": "h_menara = (bayangan_menara x tinggi_tongkat) / bayangan_tongkat = (24 x 2) / 3 = 16 meter.",
    "tip": "Gunakan perbandingan senilai segitiga sebangun.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-115",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Transformasi Geometri (Translasi & Refleksi)",
    "competency": "Menentukan koordinat bayangan hasil pergeseran dan pencerminan",
    "question": "[Transformasi Translasi #115]: Titik A(8, 5) ditranslasikan oleh T = (9, 5). Koordinat titik bayangan A' adalah...",
    "optionA": "A'(16, 10)",
    "optionB": "A'(17, 8)",
    "optionC": "A'(17, 10)",
    "optionD": "A'(-1, 0)",
    "options": [
      {
        "id": "A",
        "text": "A'(16, 10)"
      },
      {
        "id": "B",
        "text": "A'(17, 8)"
      },
      {
        "id": "C",
        "text": "A'(17, 10)"
      },
      {
        "id": "D",
        "text": "A'(-1, 0)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "A'(x + a, y + b) = (8 + 9, 5 + 5) = (17, 10).",
    "tip": "Translasi menjumlahkan setiap absis dan ordinat dengan vektor geser.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-116",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Transformasi Geometri (Rotasi & Dilatasi)",
    "competency": "Menentukan bayangan hasil rotasi dan dilatasi faktor k",
    "question": "[Transformasi Rotasi #116]: Titik B(8, 11) dirotasikan sebesar 90° berlawanan arah jarum jam terhadap titik pusat O(0,0). Koordinat bayangan B' adalah...",
    "optionA": "B'(11, -8)",
    "optionB": "B'(-8, -11)",
    "optionC": "B'(8, 11)",
    "optionD": "B'(-11, 8)",
    "options": [
      {
        "id": "A",
        "text": "B'(11, -8)"
      },
      {
        "id": "B",
        "text": "B'(-8, -11)"
      },
      {
        "id": "C",
        "text": "B'(8, 11)"
      },
      {
        "id": "D",
        "text": "B'(-11, 8)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Rotasi [O, +90°]: (x, y) dipetakan menjadi (-y, x). Titik (8, 11) menjadi (-11, 8).",
    "tip": "Rotasi 90° berlawanan jarum jam: (x, y) -> (-y, x).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-117",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Statistika (Mean, Median, Modus)",
    "competency": "Menganalisis ukuran pemusatan data asesmen madrasah",
    "question": "[Statistika Nilai #117]: Data perolehan nilai kuis matematika lima perwakilan kelas MTs adalah: 72, 82, 87, 92, 102. Nilai rata-rata hitung (mean) data tersebut adalah...",
    "optionA": "87.0",
    "optionB": "89.0",
    "optionC": "85.0",
    "optionD": "91.0",
    "options": [
      {
        "id": "A",
        "text": "87.0"
      },
      {
        "id": "B",
        "text": "89.0"
      },
      {
        "id": "C",
        "text": "85.0"
      },
      {
        "id": "D",
        "text": "91.0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Mean = (72 + 82 + 87 + 92 + 102) / 5 = 435 / 5 = 87.0.",
    "tip": "Mean = total jumlah nilai dibagi banyak data.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-118",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Peluang Teoretik dan Frekuensi Harapan",
    "competency": "Menentukan peluang kejadian pada percobaan acak madrasah",
    "question": "[Peluang Kejadian #118]: Dalam sebuah kantong undian madrasah terdapat 24 kartu bernomor sama bentuk. Sebanyak 8 kartu berwarna merah dan sisanya berwarna biru. Peluang terambil satu kartu merah secara acak adalah...",
    "optionA": "16/24",
    "optionB": "8/24",
    "optionC": "1/24",
    "optionD": "8/26",
    "options": [
      {
        "id": "A",
        "text": "16/24"
      },
      {
        "id": "B",
        "text": "8/24"
      },
      {
        "id": "C",
        "text": "1/24"
      },
      {
        "id": "D",
        "text": "8/26"
      }
    ],
    "correctAnswer": "B",
    "explanation": "P(A) = n(A) / n(S) = 8 / 24.",
    "tip": "Peluang = jumlah kejadian sukses dibagi total seluruh kejadian.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-119",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bilangan Berpangkat dan Bentuk Akar",
    "competency": "Menyederhanakan eksponen dan merasionalkan bentuk akar",
    "question": "[Perpangkatan Aljabar #119]: Hasil penyederhanaan dari bentuk eksponen (8⁴ x 8²) : 8³ adalah...",
    "optionA": "8² = 64",
    "optionB": "8⁴ = 4096",
    "optionC": "8³ = 512",
    "optionD": "8⁵",
    "options": [
      {
        "id": "A",
        "text": "8² = 64"
      },
      {
        "id": "B",
        "text": "8⁴ = 4096"
      },
      {
        "id": "C",
        "text": "8³ = 512"
      },
      {
        "id": "D",
        "text": "8⁵"
      }
    ],
    "correctAnswer": "C",
    "explanation": "8^(4 + 2 - 3) = 8^3 = 512.",
    "tip": "Perkalian pangkat dijumlahkan, pembagian pangkat dikurangkan.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-120",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Persamaan & Fungsi Kuadrat",
    "competency": "Menentukan akar persamaan, sumbu simetri, dan nilai optimum",
    "question": "[Fungsi Kuadrat Parabola #120]: Persamaan sumbu simetri dari kurva parabola fungsi f(x) = x² -16x + 12 adalah...",
    "optionA": "x = -8",
    "optionB": "x = 10",
    "optionC": "x = 7",
    "optionD": "x = 8",
    "options": [
      {
        "id": "A",
        "text": "x = -8"
      },
      {
        "id": "B",
        "text": "x = 10"
      },
      {
        "id": "C",
        "text": "x = 7"
      },
      {
        "id": "D",
        "text": "x = 8"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Sumbu simetri x = -b / (2a) = -(-16) / (2 x 1) = 16 / 2 = 8.",
    "tip": "x = -b / (2a).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-121",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Pola Bilangan & Barisan Aritmetika",
    "competency": "Menentukan suku ke-n dan jumlah deret aritmetika madrasah",
    "question": "[Kasus Aritmetika MTs #121]: Di auditorium madrasah, penataan kursi baris pertama terdiri atas 25 kursi. Setiap baris di belakangnya selalu bertambah 9 kursi secara konstan. Berapakah kapasitas kursi yang tertata pada baris ke-17?",
    "optionA": "169 kursi",
    "optionB": "178 kursi",
    "optionC": "160 kursi",
    "optionD": "187 kursi",
    "options": [
      {
        "id": "A",
        "text": "169 kursi"
      },
      {
        "id": "B",
        "text": "178 kursi"
      },
      {
        "id": "C",
        "text": "160 kursi"
      },
      {
        "id": "D",
        "text": "187 kursi"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Rumus Un = a + (n - 1)b. a = 25, b = 9, n = 17. Un = 25 + (16)(9) = 169 kursi.",
    "tip": "Identifikasi suku pertama (a) dan selisih konstan (b).",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-122",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Barisan & Deret Geometri",
    "competency": "Menghitung rasio dan suku ke-n deret geometri",
    "question": "[Kasus Geometri MTs #122]: Dalam penelitian mikrobiologi di madrasah, koloni bakteri jenis ke-7 membelah diri menjadi 2 setiap 15 menit. Jika pada awal pengamatan terdapat 8 bakteri, berapakah jumlah bakteri setelah periode pembelahan ke-6?",
    "optionA": "512 bakteri",
    "optionB": "256 bakteri",
    "optionC": "248 bakteri",
    "optionD": "128 bakteri",
    "options": [
      {
        "id": "A",
        "text": "512 bakteri"
      },
      {
        "id": "B",
        "text": "256 bakteri"
      },
      {
        "id": "C",
        "text": "248 bakteri"
      },
      {
        "id": "D",
        "text": "128 bakteri"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Rumus Un = a . r^(n-1). a = 8, r = 2, n = 6. Un = 8 x 2^(5) = 256.",
    "tip": "Gunakan rumus pertumbuhan geometri eksponensial Un = a.r^(n-1).",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-123",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bentuk Aljabar & Faktorisasi Kuadrat",
    "competency": "Menyederhanakan aljabar dan pemfaktoran bentuk kuadrat",
    "question": "[Aljabar MTs #123]: Bentuk pemfaktoran aljabar yang tepat dari persamaan kuadrat x² + 18x + 80 adalah...",
    "optionA": "(x - 8)(x - 10)",
    "optionB": "(x + 9)(x + 9)",
    "optionC": "(x + 8)(x + 10)",
    "optionD": "(x - 8)(x + 10)",
    "options": [
      {
        "id": "A",
        "text": "(x - 8)(x - 10)"
      },
      {
        "id": "B",
        "text": "(x + 9)(x + 9)"
      },
      {
        "id": "C",
        "text": "(x + 8)(x + 10)"
      },
      {
        "id": "D",
        "text": "(x - 8)(x + 10)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Cari p dan q sedemikian sehingga p + q = 18 dan p x q = 80. Diperoleh p = 8 dan q = 10, sehingga faktornya (x + 8)(x + 10).",
    "tip": "Faktorkan ax² + bx + c dengan mencari pasangan bilangan hasil kali c dan jumlah b.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-124",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Persamaan Linear Satu Variabel (PLSV)",
    "competency": "Menyelesaikan permasalahan persamaan linear satu variabel",
    "question": "[Persamaan Linear #124]: Nilai x yang memenuhi persamaan linear satu variabel 9x + 22 = 103 adalah...",
    "optionA": "x = 10",
    "optionB": "x = 8",
    "optionC": "x = 11",
    "optionD": "x = 9",
    "options": [
      {
        "id": "A",
        "text": "x = 10"
      },
      {
        "id": "B",
        "text": "x = 8"
      },
      {
        "id": "C",
        "text": "x = 11"
      },
      {
        "id": "D",
        "text": "x = 9"
      }
    ],
    "correctAnswer": "D",
    "explanation": "9x = 103 - 22 => 9x = 81 => x = 9.",
    "tip": "Kumpulkan variabel di satu ruas dan konstanta di ruas lainnya.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-125",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Pertidaksamaan Linear Satu Variabel (PtLSV)",
    "competency": "Menentukan himpunan penyelesaian pertidaksamaan linear",
    "question": "[Pertidaksamaan Linear #125]: Himpunan penyelesaian untuk pertidaksamaan 9x + 15 ≤ 105 dengan x anggota bilangan bulat adalah...",
    "optionA": "x ≤ 10",
    "optionB": "x ≥ 10",
    "optionC": "x < 9",
    "optionD": "x ≤ 12",
    "options": [
      {
        "id": "A",
        "text": "x ≤ 10"
      },
      {
        "id": "B",
        "text": "x ≥ 10"
      },
      {
        "id": "C",
        "text": "x < 9"
      },
      {
        "id": "D",
        "text": "x ≤ 12"
      }
    ],
    "correctAnswer": "A",
    "explanation": "9x ≤ 105 - 15 => 9x ≤ 90 => x ≤ 10.",
    "tip": "Bagi kedua ruas dengan koefisien x positif, arah tanda pertidaksamaan tetap.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-126",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Sistem Persamaan Linear Dua Variabel (SPLDV)",
    "competency": "Menyelesaikan SPLDV kontekstual koperasi madrasah",
    "question": "[SPLDV Koperasi MTs #126]: Santri A membeli 2 buku dan 3 pensil seharga Rp24.250. Santri B membeli 3 buku dan 1 pensil sejenis seharga Rp23.250. Berapakah harga yang harus dibayar untuk 1 buku dan 1 pensil?",
    "optionA": "Rp11.250",
    "optionB": "Rp10.250",
    "optionC": "Rp9.250",
    "optionD": "Rp11.750",
    "options": [
      {
        "id": "A",
        "text": "Rp11.250"
      },
      {
        "id": "B",
        "text": "Rp10.250"
      },
      {
        "id": "C",
        "text": "Rp9.250"
      },
      {
        "id": "D",
        "text": "Rp11.750"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Harga 1 buku = Rp6.500 dan 1 pensil = Rp3.750. Total = Rp10.250.",
    "tip": "Gunakan metode eliminasi variabel untuk menemukan nilai masing-masing barang.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-127",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Relasi dan Fungsi",
    "competency": "Menentukan nilai fungsi f(x) dan daerah hasil (range)",
    "question": "[Fungsi Linier #127]: Suatu fungsi ditentukan dengan rumus f(x) = 9x + 25. Nilai fungsi untuk x = 10 adalah...",
    "optionA": "124",
    "optionB": "106",
    "optionC": "115",
    "optionD": "119",
    "options": [
      {
        "id": "A",
        "text": "124"
      },
      {
        "id": "B",
        "text": "106"
      },
      {
        "id": "C",
        "text": "115"
      },
      {
        "id": "D",
        "text": "119"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Substitusi x = 10: f(10) = 9(10) + 25 = 90 + 25 = 115.",
    "tip": "Ganti x pada f(x) dengan nilai yang diminta.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-128",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Persamaan Garis Lurus & Gradien",
    "competency": "Menentukan kemiringan/gradien dan persamaan garis",
    "question": "[Gradien Garis #128]: Gradien garis lurus yang melalui titik A(7, 14) dan B(9, 30) adalah...",
    "optionA": "m = 9",
    "optionB": "m = -8",
    "optionC": "m = 10",
    "optionD": "m = 8",
    "options": [
      {
        "id": "A",
        "text": "m = 9"
      },
      {
        "id": "B",
        "text": "m = -8"
      },
      {
        "id": "C",
        "text": "m = 10"
      },
      {
        "id": "D",
        "text": "m = 8"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Gradien m = (y2 - y1) / (x2 - x1) = (30 - 14) / (9 - 7) = 16 / 2 = 8.",
    "tip": "m = Δy / Δx = (y2 - y1) / (x2 - x1).",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-129",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Teorema Pythagoras & Tripel Pythagoras",
    "competency": "Menerapkan tripel Pythagoras pada segitiga dan tiang madrasah",
    "question": "[Teorema Pythagoras #129]: Kawat penyangga dipasang dari puncak tiang bendera madrasah ke pasak tanah. Jika tinggi tiang 28 meter dan jarak pasak ke kaki tiang 21 meter, panjang kawat penyangga tersebut adalah...",
    "optionA": "35 meter",
    "optionB": "42 meter",
    "optionC": "28 meter",
    "optionD": "49 meter",
    "options": [
      {
        "id": "A",
        "text": "35 meter"
      },
      {
        "id": "B",
        "text": "42 meter"
      },
      {
        "id": "C",
        "text": "28 meter"
      },
      {
        "id": "D",
        "text": "49 meter"
      }
    ],
    "correctAnswer": "A",
    "explanation": "c = √(a² + b²) = √(21² + 28²) = √(441 + 784) = √1225 = 35 meter.",
    "tip": "Gunakan kelipatan tripel Pythagoras 3, 4, 5.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-130",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Lingkaran & Unsur-unsurnya",
    "competency": "Menghitung keliling, luas, juring, dan panjang busur lingkaran",
    "question": "[Geometri Lingkaran #130]: Sebuah kolam taman madrasah berbentuk lingkaran memiliki panjang jari-jari 49 meter. Keliling kolam tersebut (π = 22/7) adalah...",
    "optionA": "330 meter",
    "optionB": "308 meter",
    "optionC": "286 meter",
    "optionD": "352 meter",
    "options": [
      {
        "id": "A",
        "text": "330 meter"
      },
      {
        "id": "B",
        "text": "308 meter"
      },
      {
        "id": "C",
        "text": "286 meter"
      },
      {
        "id": "D",
        "text": "352 meter"
      }
    ],
    "correctAnswer": "B",
    "explanation": "K = 2 . π . r = 2 x (22/7) x 49 = 2 x 22 x 7 = 308 meter.",
    "tip": "Keliling lingkaran K = 2πr.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-131",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bangun Datar Segiempat & Segitiga",
    "competency": "Menghitung keliling dan luas lahan madrasah",
    "question": "[Pengukuran Lahan #131]: Kebun percontohan madrasah berbentuk persegi panjang dengan ukuran panjang 38 meter dan lebar 20 meter. Luas kebun tersebut adalah...",
    "optionA": "780 m²",
    "optionB": "744 m²",
    "optionC": "760 m²",
    "optionD": "116 m²",
    "options": [
      {
        "id": "A",
        "text": "780 m²"
      },
      {
        "id": "B",
        "text": "744 m²"
      },
      {
        "id": "C",
        "text": "760 m²"
      },
      {
        "id": "D",
        "text": "116 m²"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Luas = panjang x lebar = 38 m x 20 m = 760 m².",
    "tip": "Luas persegi panjang = p x l.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-132",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bangun Ruang Sisi Datar (Prisma & Limas)",
    "competency": "Menghitung luas permukaan dan volume prisma/limas gedung",
    "question": "[Bangun Ruang Kubus #132]: Bak penampungan air tempat wudhu madrasah berbentuk kubus dengan rusuk bagian dalam 10 dm. Kapasitas volume air jika terisi penuh adalah...",
    "optionA": "1070 liter",
    "optionB": "965 liter",
    "optionC": "600 liter",
    "optionD": "1000 liter",
    "options": [
      {
        "id": "A",
        "text": "1070 liter"
      },
      {
        "id": "B",
        "text": "965 liter"
      },
      {
        "id": "C",
        "text": "600 liter"
      },
      {
        "id": "D",
        "text": "1000 liter"
      }
    ],
    "correctAnswer": "D",
    "explanation": "V = s³ = 10³ = 1000 dm³ = 1000 liter.",
    "tip": "1 dm³ sama dengan 1 liter.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-133",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bangun Ruang Sisi Lengkung (Tabung & Kerucut)",
    "competency": "Menghitung volume tandon air dan kubah madrasah",
    "question": "[Bangun Ruang Tabung #133]: Sebuah tangki air silinder vertikal madrasah memiliki jari-jari alas 7 dm dan tinggi 31 dm. Volume tangki tersebut (π = 22/7) adalah...",
    "optionA": "4774 liter",
    "optionB": "4928 liter",
    "optionC": "4620 liter",
    "optionD": "5082 liter",
    "options": [
      {
        "id": "A",
        "text": "4774 liter"
      },
      {
        "id": "B",
        "text": "4928 liter"
      },
      {
        "id": "C",
        "text": "4620 liter"
      },
      {
        "id": "D",
        "text": "5082 liter"
      }
    ],
    "correctAnswer": "A",
    "explanation": "V = π . r² . t = (22/7) x 7² x 31 = 154 x 31 = 4774 liter.",
    "tip": "V = luas alas x tinggi = πr²t.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-134",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Kesebangunan dan Kekongruenan",
    "competency": "Menghitung tinggi objek nyata menggunakan kesebangunan",
    "question": "[Kesebangunan Bayangan #134]: Pada pagi hari, tongkat setinggi 2 meter memiliki bayangan sepanjang 3 meter. Di saat bersamaan, panjang bayangan menara masjid madrasah adalah 27 meter. Tinggi menara sebenarnya adalah...",
    "optionA": "20 meter",
    "optionB": "18 meter",
    "optionC": "17 meter",
    "optionD": "21 meter",
    "options": [
      {
        "id": "A",
        "text": "20 meter"
      },
      {
        "id": "B",
        "text": "18 meter"
      },
      {
        "id": "C",
        "text": "17 meter"
      },
      {
        "id": "D",
        "text": "21 meter"
      }
    ],
    "correctAnswer": "B",
    "explanation": "h_menara = (bayangan_menara x tinggi_tongkat) / bayangan_tongkat = (27 x 2) / 3 = 18 meter.",
    "tip": "Gunakan perbandingan senilai segitiga sebangun.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-135",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Transformasi Geometri (Translasi & Refleksi)",
    "competency": "Menentukan koordinat bayangan hasil pergeseran dan pencerminan",
    "question": "[Transformasi Translasi #135]: Titik A(9, 6) ditranslasikan oleh T = (10, 5). Koordinat titik bayangan A' adalah...",
    "optionA": "A'(18, 11)",
    "optionB": "A'(19, 9)",
    "optionC": "A'(19, 11)",
    "optionD": "A'(-1, 1)",
    "options": [
      {
        "id": "A",
        "text": "A'(18, 11)"
      },
      {
        "id": "B",
        "text": "A'(19, 9)"
      },
      {
        "id": "C",
        "text": "A'(19, 11)"
      },
      {
        "id": "D",
        "text": "A'(-1, 1)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "A'(x + a, y + b) = (9 + 10, 6 + 5) = (19, 11).",
    "tip": "Translasi menjumlahkan setiap absis dan ordinat dengan vektor geser.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-136",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Transformasi Geometri (Rotasi & Dilatasi)",
    "competency": "Menentukan bayangan hasil rotasi dan dilatasi faktor k",
    "question": "[Transformasi Rotasi #136]: Titik B(9, 12) dirotasikan sebesar 90° berlawanan arah jarum jam terhadap titik pusat O(0,0). Koordinat bayangan B' adalah...",
    "optionA": "B'(12, -9)",
    "optionB": "B'(-9, -12)",
    "optionC": "B'(9, 12)",
    "optionD": "B'(-12, 9)",
    "options": [
      {
        "id": "A",
        "text": "B'(12, -9)"
      },
      {
        "id": "B",
        "text": "B'(-9, -12)"
      },
      {
        "id": "C",
        "text": "B'(9, 12)"
      },
      {
        "id": "D",
        "text": "B'(-12, 9)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Rotasi [O, +90°]: (x, y) dipetakan menjadi (-y, x). Titik (9, 12) menjadi (-12, 9).",
    "tip": "Rotasi 90° berlawanan jarum jam: (x, y) -> (-y, x).",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-137",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Statistika (Mean, Median, Modus)",
    "competency": "Menganalisis ukuran pemusatan data asesmen madrasah",
    "question": "[Statistika Nilai #137]: Data perolehan nilai kuis matematika lima perwakilan kelas MTs adalah: 74, 84, 89, 94, 104. Nilai rata-rata hitung (mean) data tersebut adalah...",
    "optionA": "89.0",
    "optionB": "91.0",
    "optionC": "87.0",
    "optionD": "93.0",
    "options": [
      {
        "id": "A",
        "text": "89.0"
      },
      {
        "id": "B",
        "text": "91.0"
      },
      {
        "id": "C",
        "text": "87.0"
      },
      {
        "id": "D",
        "text": "93.0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Mean = (74 + 84 + 89 + 94 + 104) / 5 = 445 / 5 = 89.0.",
    "tip": "Mean = total jumlah nilai dibagi banyak data.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-138",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Peluang Teoretik dan Frekuensi Harapan",
    "competency": "Menentukan peluang kejadian pada percobaan acak madrasah",
    "question": "[Peluang Kejadian #138]: Dalam sebuah kantong undian madrasah terdapat 26 kartu bernomor sama bentuk. Sebanyak 9 kartu berwarna merah dan sisanya berwarna biru. Peluang terambil satu kartu merah secara acak adalah...",
    "optionA": "17/26",
    "optionB": "9/26",
    "optionC": "1/26",
    "optionD": "9/28",
    "options": [
      {
        "id": "A",
        "text": "17/26"
      },
      {
        "id": "B",
        "text": "9/26"
      },
      {
        "id": "C",
        "text": "1/26"
      },
      {
        "id": "D",
        "text": "9/28"
      }
    ],
    "correctAnswer": "B",
    "explanation": "P(A) = n(A) / n(S) = 9 / 26.",
    "tip": "Peluang = jumlah kejadian sukses dibagi total seluruh kejadian.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-139",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bilangan Berpangkat dan Bentuk Akar",
    "competency": "Menyederhanakan eksponen dan merasionalkan bentuk akar",
    "question": "[Perpangkatan Aljabar #139]: Hasil penyederhanaan dari bentuk eksponen (9⁴ x 9²) : 9³ adalah...",
    "optionA": "9² = 81",
    "optionB": "9⁴ = 6561",
    "optionC": "9³ = 729",
    "optionD": "9⁵",
    "options": [
      {
        "id": "A",
        "text": "9² = 81"
      },
      {
        "id": "B",
        "text": "9⁴ = 6561"
      },
      {
        "id": "C",
        "text": "9³ = 729"
      },
      {
        "id": "D",
        "text": "9⁵"
      }
    ],
    "correctAnswer": "C",
    "explanation": "9^(4 + 2 - 3) = 9^3 = 729.",
    "tip": "Perkalian pangkat dijumlahkan, pembagian pangkat dikurangkan.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-140",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Persamaan & Fungsi Kuadrat",
    "competency": "Menentukan akar persamaan, sumbu simetri, dan nilai optimum",
    "question": "[Fungsi Kuadrat Parabola #140]: Persamaan sumbu simetri dari kurva parabola fungsi f(x) = x² -18x + 12 adalah...",
    "optionA": "x = -9",
    "optionB": "x = 11",
    "optionC": "x = 8",
    "optionD": "x = 9",
    "options": [
      {
        "id": "A",
        "text": "x = -9"
      },
      {
        "id": "B",
        "text": "x = 11"
      },
      {
        "id": "C",
        "text": "x = 8"
      },
      {
        "id": "D",
        "text": "x = 9"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Sumbu simetri x = -b / (2a) = -(-18) / (2 x 1) = 18 / 2 = 9.",
    "tip": "x = -b / (2a).",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-141",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Pola Bilangan & Barisan Aritmetika",
    "competency": "Menentukan suku ke-n dan jumlah deret aritmetika madrasah",
    "question": "[Kasus Aritmetika MTs #141]: Di auditorium madrasah, penataan kursi baris pertama terdiri atas 28 kursi. Setiap baris di belakangnya selalu bertambah 10 kursi secara konstan. Berapakah kapasitas kursi yang tertata pada baris ke-18?",
    "optionA": "198 kursi",
    "optionB": "208 kursi",
    "optionC": "188 kursi",
    "optionD": "218 kursi",
    "options": [
      {
        "id": "A",
        "text": "198 kursi"
      },
      {
        "id": "B",
        "text": "208 kursi"
      },
      {
        "id": "C",
        "text": "188 kursi"
      },
      {
        "id": "D",
        "text": "218 kursi"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Rumus Un = a + (n - 1)b. a = 28, b = 10, n = 18. Un = 28 + (17)(10) = 198 kursi.",
    "tip": "Identifikasi suku pertama (a) dan selisih konstan (b).",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-142",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Barisan & Deret Geometri",
    "competency": "Menghitung rasio dan suku ke-n deret geometri",
    "question": "[Kasus Geometri MTs #142]: Dalam penelitian mikrobiologi di madrasah, koloni bakteri jenis ke-8 membelah diri menjadi 2 setiap 15 menit. Jika pada awal pengamatan terdapat 9 bakteri, berapakah jumlah bakteri setelah periode pembelahan ke-3?",
    "optionA": "72 bakteri",
    "optionB": "36 bakteri",
    "optionC": "27 bakteri",
    "optionD": "18 bakteri",
    "options": [
      {
        "id": "A",
        "text": "72 bakteri"
      },
      {
        "id": "B",
        "text": "36 bakteri"
      },
      {
        "id": "C",
        "text": "27 bakteri"
      },
      {
        "id": "D",
        "text": "18 bakteri"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Rumus Un = a . r^(n-1). a = 9, r = 2, n = 3. Un = 9 x 2^(2) = 36.",
    "tip": "Gunakan rumus pertumbuhan geometri eksponensial Un = a.r^(n-1).",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-143",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Bentuk Aljabar & Faktorisasi Kuadrat",
    "competency": "Menyederhanakan aljabar dan pemfaktoran bentuk kuadrat",
    "question": "[Aljabar MTs #143]: Bentuk pemfaktoran aljabar yang tepat dari persamaan kuadrat x² + 20x + 99 adalah...",
    "optionA": "(x - 9)(x - 11)",
    "optionB": "(x + 10)(x + 10)",
    "optionC": "(x + 9)(x + 11)",
    "optionD": "(x - 9)(x + 11)",
    "options": [
      {
        "id": "A",
        "text": "(x - 9)(x - 11)"
      },
      {
        "id": "B",
        "text": "(x + 10)(x + 10)"
      },
      {
        "id": "C",
        "text": "(x + 9)(x + 11)"
      },
      {
        "id": "D",
        "text": "(x - 9)(x + 11)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Cari p dan q sedemikian sehingga p + q = 20 dan p x q = 99. Diperoleh p = 9 dan q = 11, sehingga faktornya (x + 9)(x + 11).",
    "tip": "Faktorkan ax² + bx + c dengan mencari pasangan bilangan hasil kali c dan jumlah b.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-144",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Persamaan Linear Satu Variabel (PLSV)",
    "competency": "Menyelesaikan permasalahan persamaan linear satu variabel",
    "question": "[Persamaan Linear #144]: Nilai x yang memenuhi persamaan linear satu variabel 10x + 25 = 125 adalah...",
    "optionA": "x = 11",
    "optionB": "x = 9",
    "optionC": "x = 12",
    "optionD": "x = 10",
    "options": [
      {
        "id": "A",
        "text": "x = 11"
      },
      {
        "id": "B",
        "text": "x = 9"
      },
      {
        "id": "C",
        "text": "x = 12"
      },
      {
        "id": "D",
        "text": "x = 10"
      }
    ],
    "correctAnswer": "D",
    "explanation": "10x = 125 - 25 => 10x = 100 => x = 10.",
    "tip": "Kumpulkan variabel di satu ruas dan konstanta di ruas lainnya.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-145",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Pertidaksamaan Linear Satu Variabel (PtLSV)",
    "competency": "Menentukan himpunan penyelesaian pertidaksamaan linear",
    "question": "[Pertidaksamaan Linear #145]: Himpunan penyelesaian untuk pertidaksamaan 10x + 17 ≤ 127 dengan x anggota bilangan bulat adalah...",
    "optionA": "x ≤ 11",
    "optionB": "x ≥ 11",
    "optionC": "x < 10",
    "optionD": "x ≤ 13",
    "options": [
      {
        "id": "A",
        "text": "x ≤ 11"
      },
      {
        "id": "B",
        "text": "x ≥ 11"
      },
      {
        "id": "C",
        "text": "x < 10"
      },
      {
        "id": "D",
        "text": "x ≤ 13"
      }
    ],
    "correctAnswer": "A",
    "explanation": "10x ≤ 127 - 17 => 10x ≤ 110 => x ≤ 11.",
    "tip": "Bagi kedua ruas dengan koefisien x positif, arah tanda pertidaksamaan tetap.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-146",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Sistem Persamaan Linear Dua Variabel (SPLDV)",
    "competency": "Menyelesaikan SPLDV kontekstual koperasi madrasah",
    "question": "[SPLDV Koperasi MTs #146]: Santri A membeli 2 buku dan 3 pensil seharga Rp26.000. Santri B membeli 3 buku dan 1 pensil sejenis seharga Rp25.000. Berapakah harga yang harus dibayar untuk 1 buku dan 1 pensil?",
    "optionA": "Rp12.000",
    "optionB": "Rp11.000",
    "optionC": "Rp10.000",
    "optionD": "Rp12.500",
    "options": [
      {
        "id": "A",
        "text": "Rp12.000"
      },
      {
        "id": "B",
        "text": "Rp11.000"
      },
      {
        "id": "C",
        "text": "Rp10.000"
      },
      {
        "id": "D",
        "text": "Rp12.500"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Harga 1 buku = Rp7.000 dan 1 pensil = Rp4.000. Total = Rp11.000.",
    "tip": "Gunakan metode eliminasi variabel untuk menemukan nilai masing-masing barang.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-147",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Relasi dan Fungsi",
    "competency": "Menentukan nilai fungsi f(x) dan daerah hasil (range)",
    "question": "[Fungsi Linier #147]: Suatu fungsi ditentukan dengan rumus f(x) = 10x + 28. Nilai fungsi untuk x = 11 adalah...",
    "optionA": "148",
    "optionB": "128",
    "optionC": "138",
    "optionD": "142",
    "options": [
      {
        "id": "A",
        "text": "148"
      },
      {
        "id": "B",
        "text": "128"
      },
      {
        "id": "C",
        "text": "138"
      },
      {
        "id": "D",
        "text": "142"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Substitusi x = 11: f(11) = 10(11) + 28 = 110 + 28 = 138.",
    "tip": "Ganti x pada f(x) dengan nilai yang diminta.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-148",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Persamaan Garis Lurus & Gradien",
    "competency": "Menentukan kemiringan/gradien dan persamaan garis",
    "question": "[Gradien Garis #148]: Gradien garis lurus yang melalui titik A(8, 16) dan B(10, 34) adalah...",
    "optionA": "m = 10",
    "optionB": "m = -9",
    "optionC": "m = 11",
    "optionD": "m = 9",
    "options": [
      {
        "id": "A",
        "text": "m = 10"
      },
      {
        "id": "B",
        "text": "m = -9"
      },
      {
        "id": "C",
        "text": "m = 11"
      },
      {
        "id": "D",
        "text": "m = 9"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Gradien m = (y2 - y1) / (x2 - x1) = (34 - 16) / (10 - 8) = 18 / 2 = 9.",
    "tip": "m = Δy / Δx = (y2 - y1) / (x2 - x1).",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-149",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Teorema Pythagoras & Tripel Pythagoras",
    "competency": "Menerapkan tripel Pythagoras pada segitiga dan tiang madrasah",
    "question": "[Teorema Pythagoras #149]: Kawat penyangga dipasang dari puncak tiang bendera madrasah ke pasak tanah. Jika tinggi tiang 32 meter dan jarak pasak ke kaki tiang 24 meter, panjang kawat penyangga tersebut adalah...",
    "optionA": "40 meter",
    "optionB": "48 meter",
    "optionC": "32 meter",
    "optionD": "56 meter",
    "options": [
      {
        "id": "A",
        "text": "40 meter"
      },
      {
        "id": "B",
        "text": "48 meter"
      },
      {
        "id": "C",
        "text": "32 meter"
      },
      {
        "id": "D",
        "text": "56 meter"
      }
    ],
    "correctAnswer": "A",
    "explanation": "c = √(a² + b²) = √(24² + 32²) = √(576 + 1024) = √1600 = 40 meter.",
    "tip": "Gunakan kelipatan tripel Pythagoras 3, 4, 5.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-mat-150",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MTs",
    "subtopic": "Lingkaran & Unsur-unsurnya",
    "competency": "Menghitung keliling, luas, juring, dan panjang busur lingkaran",
    "question": "[Geometri Lingkaran #150]: Sebuah kolam taman madrasah berbentuk lingkaran memiliki panjang jari-jari 56 meter. Keliling kolam tersebut (π = 22/7) adalah...",
    "optionA": "374 meter",
    "optionB": "352 meter",
    "optionC": "330 meter",
    "optionD": "396 meter",
    "options": [
      {
        "id": "A",
        "text": "374 meter"
      },
      {
        "id": "B",
        "text": "352 meter"
      },
      {
        "id": "C",
        "text": "330 meter"
      },
      {
        "id": "D",
        "text": "396 meter"
      }
    ],
    "correctAnswer": "B",
    "explanation": "K = 2 . π . r = 2 x (22/7) x 56 = 2 x 22 x 8 = 352 meter.",
    "tip": "Keliling lingkaran K = 2πr.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-001",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Pengukuran dan Besaran Pokok/Turunan",
    "competency": "Menganalisis hasil pengukuran alat ukur dan satuan SI",
    "question": "Siswa MTs mengukur ketebalan pelat logam uji ke-1 menggunakan jangka sorong. Skala utama tertera angka 3 cm dan garis nonius ke-4 berimpit tepat dengan skala utama. Hasil pengukuran ketebalan pelat tersebut adalah...",
    "optionA": "3.04 cm",
    "optionB": "3.14 cm",
    "optionC": "2.99 cm",
    "optionD": "3.40 cm",
    "options": [
      {
        "id": "A",
        "text": "3.04 cm"
      },
      {
        "id": "B",
        "text": "3.14 cm"
      },
      {
        "id": "C",
        "text": "2.99 cm"
      },
      {
        "id": "D",
        "text": "3.40 cm"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Hasil jangka sorong = skala utama + (garis nonius x 0,01 cm) = 3.04 cm.",
    "tip": "Skala utama + (nonius x 0,01 cm).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-002",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Klasifikasi Materi dan Pemisahan Campuran",
    "competency": "Mengidentifikasi metode pemisahan zat (filtrasi, kromatografi, distilasi)",
    "question": "Pada praktikum kimia madrasah, siswa diminta memisahkan \"kristal garam dari air laut pantai\". Teknik pemisahan campuran yang paling tepat dan efisien adalah...",
    "optionA": "Kondensasi spontan",
    "optionB": "Evaporasi / Kristalisasi penguapan",
    "optionC": "Dekantasi manual tanpa alat",
    "optionD": "Elektrolisis air murni",
    "options": [
      {
        "id": "A",
        "text": "Kondensasi spontan"
      },
      {
        "id": "B",
        "text": "Evaporasi / Kristalisasi penguapan"
      },
      {
        "id": "C",
        "text": "Dekantasi manual tanpa alat"
      },
      {
        "id": "D",
        "text": "Elektrolisis air murni"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Metode pemisahan yang sesuai untuk kristal garam dari air laut pantai adalah Evaporasi / Kristalisasi penguapan.",
    "tip": "Pahami prinsip pemisahan zat: ukuran partikel, titik didih, kelarutan, atau sifat kemagnetan.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-003",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Zat Aditif dan Zat Adiktif",
    "competency": "Mengidentifikasi fungsi pengawet, pewarna, dan bahaya zat adiktif",
    "question": "Pada tabel komposisi bahan pangan kemasan kantin madrasah tertera zat \"Natrium Benzoat\". Peran utama penambahan zat tersebut ke dalam makanan adalah...",
    "optionA": "Pewarna sintetis kuning",
    "optionB": "Penguat rasa daging gurih",
    "optionC": "Mencegah pertumbuhan jamur dan bakteri pembusuk pada produk sirup",
    "optionD": "Pemanis pengganti gula tebu",
    "options": [
      {
        "id": "A",
        "text": "Pewarna sintetis kuning"
      },
      {
        "id": "B",
        "text": "Penguat rasa daging gurih"
      },
      {
        "id": "C",
        "text": "Mencegah pertumbuhan jamur dan bakteri pembusuk pada produk sirup"
      },
      {
        "id": "D",
        "text": "Pemanis pengganti gula tebu"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Zat Natrium Benzoat bertindak sebagai mencegah pertumbuhan jamur dan bakteri pembusuk pada produk sirup.",
    "tip": "Kenali fungsi spesifik pengawet, pemanis, pewarna, dan penyedap rasa.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-004",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Suhu, Pemuaian, dan Kalor",
    "competency": "Menganalisis perpindahan kalor dan penerapan rumus Q = m.c.ΔT",
    "question": "Massa air sebanyak 2 kg bersuhu 20°C dipanaskan oleh pembakar spiritus laboratorium hingga mengalami kenaikan suhu sebesar 16°C. Jika kalor jenis air bernilai 4.200 J/kg°C, jumlah kalor yang diserap air tersebut adalah...",
    "optionA": "138.600 Joule",
    "optionB": "130.200 Joule",
    "optionC": "268.800 Joule",
    "optionD": "134.400 Joule",
    "options": [
      {
        "id": "A",
        "text": "138.600 Joule"
      },
      {
        "id": "B",
        "text": "130.200 Joule"
      },
      {
        "id": "C",
        "text": "268.800 Joule"
      },
      {
        "id": "D",
        "text": "134.400 Joule"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Q = m . c . ΔT = 2 kg x 4.200 J/kg°C x 16°C = 134.400 Joule.",
    "tip": "Q = m.c.ΔT.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-005",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Gerak Lurus (GLB dan GLBB)",
    "competency": "Menganalisis grafik kecepatan terhadap waktu dan gerak lurus berubah beraturan",
    "question": "Sebuah mobil patroli madrasah bergerak lurus dengan kelajuan awal 7 m/s dan dipercepat secara beraturan dengan percepatan konstan 2 m/s² selama selang waktu 3 sekon. Kelajuan akhir mobil tersebut adalah...",
    "optionA": "13 m/s",
    "optionB": "17 m/s",
    "optionC": "10 m/s",
    "optionD": "9 m/s",
    "options": [
      {
        "id": "A",
        "text": "13 m/s"
      },
      {
        "id": "B",
        "text": "17 m/s"
      },
      {
        "id": "C",
        "text": "10 m/s"
      },
      {
        "id": "D",
        "text": "9 m/s"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Vt = Vo + a.t = 7 + (2 x 3) = 13 m/s.",
    "tip": "Rumus GLBB dipercepat: Vt = Vo + at.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-006",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Hukum Newton tentang Gerak",
    "competency": "Menerapkan Hukum I, II, dan III Newton pada aktivitas sehari-hari",
    "question": "Perhatikan fenomena gerak sehari-hari berikut: \"Penumpang bus madrasah terdorong ke depan saat pengemudi mengerem mendadak\". Fenomena fisik tersebut secara tepat membuktikan berlakunya...",
    "optionA": "Hukum II Newton tentang percepatan",
    "optionB": "Hukum I Newton tentang kelembaman (inersia)",
    "optionC": "Hukum III Newton tentang aksi reaksi",
    "optionD": "Hukum Gravitasi Newton",
    "options": [
      {
        "id": "A",
        "text": "Hukum II Newton tentang percepatan"
      },
      {
        "id": "B",
        "text": "Hukum I Newton tentang kelembaman (inersia)"
      },
      {
        "id": "C",
        "text": "Hukum III Newton tentang aksi reaksi"
      },
      {
        "id": "D",
        "text": "Hukum Gravitasi Newton"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fenomena tersebut merupakan aplikasi nyata dari Hukum I Newton tentang kelembaman (inersia).",
    "tip": "Hukum I = inersia; Hukum II = F=ma; Hukum III = aksi reaksi sama besar berlawanan arah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-007",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Usaha, Energi, dan Pesawat Sederhana",
    "competency": "Menghitung keuntungan mekanik tuas, katrol, dan bidang miring",
    "question": "Untuk memindahkan beban seberat 600 N, seorang laboran madrasah menggunakan linggis pengungkit batu. Jika panjang lengan kuasa 3 meter dan panjang lengan beban 1 meter, besar gaya kuasa minimum yang diperlukan adalah...",
    "optionA": "240 N",
    "optionB": "175 N",
    "optionC": "200 N",
    "optionD": "600 N",
    "options": [
      {
        "id": "A",
        "text": "240 N"
      },
      {
        "id": "B",
        "text": "175 N"
      },
      {
        "id": "C",
        "text": "200 N"
      },
      {
        "id": "D",
        "text": "600 N"
      }
    ],
    "correctAnswer": "C",
    "explanation": "W x lb = F x lk => F = (W x lb) / lk = (600 x 1) / 3 = 200 N.",
    "tip": "W x lb = F x lk.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-008",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Tekanan Hidrostatis dan Hukum Archimedes",
    "competency": "Menganalisis gaya angkat zat cair dan kondisi terapung, melayang, tenggelam",
    "question": "Seorang penyelam melakukan observasi biota laut pada kedalaman 3 meter di bawah permukaan laut (massa jenis air laut diasumsikan 1.000 kg/m³, percepatan gravitasi g = 10 m/s²). Tekanan hidrostatis yang dialami penyelam tersebut adalah...",
    "optionA": "40.000 Pa",
    "optionB": "20.000 Pa",
    "optionC": "60.000 Pa",
    "optionD": "30.000 Pa",
    "options": [
      {
        "id": "A",
        "text": "40.000 Pa"
      },
      {
        "id": "B",
        "text": "20.000 Pa"
      },
      {
        "id": "C",
        "text": "60.000 Pa"
      },
      {
        "id": "D",
        "text": "30.000 Pa"
      }
    ],
    "correctAnswer": "D",
    "explanation": "P = ρ . g . h = 1.000 x 10 x 3 = 30000 Pa.",
    "tip": "P = ρgh.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-009",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Getaran, Gelombang, dan Resonansi Bunyi",
    "competency": "Menghitung cepat rambat gelombang v = λ.f dan frekuensi getaran",
    "question": "Pada pengujian osilasi di laboratorium, terukur gelombang transversal pada tali memiliki panjang gelombang 2 meter dan frekuensi osilasi 50 Hz. Cepat rambat gelombang tersebut bernilai...",
    "optionA": "100 m/s",
    "optionB": "120 m/s",
    "optionC": "85 m/s",
    "optionD": "25.0 m/s",
    "options": [
      {
        "id": "A",
        "text": "100 m/s"
      },
      {
        "id": "B",
        "text": "120 m/s"
      },
      {
        "id": "C",
        "text": "85 m/s"
      },
      {
        "id": "D",
        "text": "25.0 m/s"
      }
    ],
    "correctAnswer": "A",
    "explanation": "v = λ . f = 2 x 50 = 100 m/s.",
    "tip": "v = λ x f.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-010",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Cahaya dan Pembentukan Bayangan Cermin/Lensa",
    "competency": "Menganalisis pembentukan bayangan pada cermin cekung dan lup/mikroskop",
    "question": "Sebuah benda lilin diletakkan pada jarak 20 cm di depan cermin cekung rias yang mempunyai jarak titik fokus 12 cm. Jarak bayangan nyata yang terbentuk di depan cermin adalah...",
    "optionA": "36.0 cm",
    "optionB": "30.0 cm",
    "optionC": "25.0 cm",
    "optionD": "24.0 cm",
    "options": [
      {
        "id": "A",
        "text": "36.0 cm"
      },
      {
        "id": "B",
        "text": "30.0 cm"
      },
      {
        "id": "C",
        "text": "25.0 cm"
      },
      {
        "id": "D",
        "text": "24.0 cm"
      }
    ],
    "correctAnswer": "B",
    "explanation": "1/s' = 1/f - 1/s = 1/12 - 1/20 => s' = 30.0 cm.",
    "tip": "1/f = 1/s + 1/s'.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-011",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Listrik Statis dan Hukum Coulomb",
    "competency": "Menganalisis interaksi muatan listrik dan medan listrik",
    "question": "Dua muatan sejenis mula-mula berjarak r tolak-menolak dengan gaya F. Jika jarak antarmuatan dijauhkan menjadi 3 kali semula (3r), gaya tolak Coulomb menjadi...",
    "optionA": "3 F",
    "optionB": "1/3 F",
    "optionC": "1/9 F",
    "optionD": "9 F",
    "options": [
      {
        "id": "A",
        "text": "3 F"
      },
      {
        "id": "B",
        "text": "1/3 F"
      },
      {
        "id": "C",
        "text": "1/9 F"
      },
      {
        "id": "D",
        "text": "9 F"
      }
    ],
    "correctAnswer": "C",
    "explanation": "F berbanding terbalik dengan kuadrat jarak (1/r²). Jarak 3r menghasilkan gaya 1/(3²) = 1/9 F.",
    "tip": "Pahami Hukum Coulomb F = k.q1.q2/r² dan prinsip perpindahan elektron.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-012",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Listrik Dinamis dan Rangkaian Seri-Paralel",
    "competency": "Menghitung hambatan pengganti dan kuat arus menggunakan Hukum Ohm",
    "question": "Pada papan rangkaian praktikum elektronika madrasah, dua lampu paralel masing-masing memiliki resistansi 6 Ω dan 12 Ω dirangkai paralel. Nilai resistansi pengganti dari cabang tersebut adalah...",
    "optionA": "6.0 Ω",
    "optionB": "3.0 Ω",
    "optionC": "18 Ω",
    "optionD": "4.0 Ω",
    "options": [
      {
        "id": "A",
        "text": "6.0 Ω"
      },
      {
        "id": "B",
        "text": "3.0 Ω"
      },
      {
        "id": "C",
        "text": "18 Ω"
      },
      {
        "id": "D",
        "text": "4.0 Ω"
      }
    ],
    "correctAnswer": "D",
    "explanation": "1/Rp = 1/6 + 1/12 => Rp = (6 x 12) / (6 + 12) = 4.0 Ω.",
    "tip": "Rp = (R1 x R2) / (R1 + R2).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-013",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Kemagnetan dan Induksi Elektromagnetik",
    "competency": "Menganalisis cara pembuatan magnet dan prinsip transformator step-up/step-down",
    "question": "Sebuah transformator step-down charger memiliki 1200 lilitan primer dan 300 lilitan sekunder. Jika kumparan primer dihubungkan ke sumber tegangan AC sebesar 240 Volt, maka tegangan sekunder yang dihasilkan adalah...",
    "optionA": "60.0 Volt",
    "optionB": "75.0 Volt",
    "optionC": "50.0 Volt",
    "optionD": "480 Volt",
    "options": [
      {
        "id": "A",
        "text": "60.0 Volt"
      },
      {
        "id": "B",
        "text": "75.0 Volt"
      },
      {
        "id": "C",
        "text": "50.0 Volt"
      },
      {
        "id": "D",
        "text": "480 Volt"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Vs = (Vp x Ns) / Np = (240 x 300) / 1200 = 60.0 Volt.",
    "tip": "Vp / Vs = Np / Ns.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-014",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Tata Surya dan Fenomena Gerhana",
    "competency": "Menganalisis dampak revolusi bumi, fase bulan, dan pasang surut air laut",
    "question": "Dalam studi astronomi dan kebumian, fenomena alam \"Gerhana Matahari Cincin\" disebabkan secara ilmiah oleh...",
    "optionA": "Bulan berada di perigee saat fase purnama",
    "optionB": "Bulan berada pada titik terjauh (apogee) dari bumi saat melintasi garis lurus matahari-bumi",
    "optionC": "Bumi menutupi seluruh piringan matahari",
    "optionD": "Sinar matahari terpantul oleh komet es",
    "options": [
      {
        "id": "A",
        "text": "Bulan berada di perigee saat fase purnama"
      },
      {
        "id": "B",
        "text": "Bulan berada pada titik terjauh (apogee) dari bumi saat melintasi garis lurus matahari-bumi"
      },
      {
        "id": "C",
        "text": "Bumi menutupi seluruh piringan matahari"
      },
      {
        "id": "D",
        "text": "Sinar matahari terpantul oleh komet es"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fenomena Gerhana Matahari Cincin terjadi karena bulan berada pada titik terjauh (apogee) dari bumi saat melintasi garis lurus matahari-bumi.",
    "tip": "Pahami dampak rotasi bumi, revolusi bumi, dan posisi matahari-bulan-bumi.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-015",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Struktur Sel dan Mikroskop",
    "competency": "Membedakan organel sel tumbuhan dan sel hewan serta fungsinya",
    "question": "Pengamatan preparat jaringan tumbuhan di bawah mikroskop laboratorium madrasah menampakkan organel \"Kloroplas\". Fungsi biologis utama organel tersebut adalah...",
    "optionA": "Membelah sel secara mitosis spontan tanpa DNA",
    "optionB": "Mengikat molekul hemoglobin pembawa gas pernapasan",
    "optionC": "Menangkap energi foton matahari untuk reaksi fotolisis fotosintesis tumbuhan",
    "optionD": "Menghasilkan pigmen melanin pelindung ultraviolet",
    "options": [
      {
        "id": "A",
        "text": "Membelah sel secara mitosis spontan tanpa DNA"
      },
      {
        "id": "B",
        "text": "Mengikat molekul hemoglobin pembawa gas pernapasan"
      },
      {
        "id": "C",
        "text": "Menangkap energi foton matahari untuk reaksi fotolisis fotosintesis tumbuhan"
      },
      {
        "id": "D",
        "text": "Menghasilkan pigmen melanin pelindung ultraviolet"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Organel Kloroplas memiliki fungsi esensial yaitu menangkap energi foton matahari untuk reaksi fotolisis fotosintesis tumbuhan.",
    "tip": "Kenali organel khas sel hewan (sentriol, lisosom) dan sel tumbuhan (dinding sel, kloroplas, vakuola besar).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-016",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Sistem Gerak Manusia (Tulang & Sendi)",
    "competency": "Mengidentifikasi jenis sendi diartrosis dan kelainan pada tulang manusia",
    "question": "Dalam materi sistem gerak manusia MTs, konsep biologis \"Sendi Engsel\" didefinisikan secara medis dan anatomis sebagai...",
    "optionA": "Gerakan berputar mengelilingi poros tulang",
    "optionB": "Gerakan bebas ke segala arah seperti gelang panggul",
    "optionC": "Gerakan bergeser antar tulang karpal",
    "optionD": "Hubungan antartulang pada siku dan lutut yang memungkinkan gerakan ke satu arah saja",
    "options": [
      {
        "id": "A",
        "text": "Gerakan berputar mengelilingi poros tulang"
      },
      {
        "id": "B",
        "text": "Gerakan bebas ke segala arah seperti gelang panggul"
      },
      {
        "id": "C",
        "text": "Gerakan bergeser antar tulang karpal"
      },
      {
        "id": "D",
        "text": "Hubungan antartulang pada siku dan lutut yang memungkinkan gerakan ke satu arah saja"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Sendi Engsel adalah hubungan antartulang pada siku dan lutut yang memungkinkan gerakan ke satu arah saja.",
    "tip": "Pahami pembagian sendi diartrosis dan jenis kelainan kelengkungan tulang belakang.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-017",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Sistem Pencernaan dan Enzim Manusia",
    "competency": "Menganalisis kerja enzim pencernaan di lambung dan usus halus",
    "question": "Pada sistem digesti manusia, zat atau enzim \"Tripsin\" yang dihasilkan di Pankreas dan bekerja di usus halus berperan spesifik untuk...",
    "optionA": "Menghidrolisis pepton menjadi asam-asam amino bebas",
    "optionB": "Mengubah amilum pati menjadi glukosa",
    "optionC": "Mengendapkan kasein kalsium susu",
    "optionD": "Mencerna serat selulosa sayuran",
    "options": [
      {
        "id": "A",
        "text": "Menghidrolisis pepton menjadi asam-asam amino bebas"
      },
      {
        "id": "B",
        "text": "Mengubah amilum pati menjadi glukosa"
      },
      {
        "id": "C",
        "text": "Mengendapkan kasein kalsium susu"
      },
      {
        "id": "D",
        "text": "Mencerna serat selulosa sayuran"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tripsin berfungsi menghidrolisis pepton menjadi asam-asam amino bebas.",
    "tip": "Kenali enzim lambung (pepsin, renin, HCl) dan getah pankreas (amilase, tripsin, lipase).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-018",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Sistem Peredaran Darah Manusia",
    "competency": "Menganalisis peredaran darah besar, darah kecil, dan sel-sel darah",
    "question": "Dalam kajian sistem peredaran darah kardiovaskular manusia MTs, konsep \"Sirkulasi Darah Kecil (Pulmonal)\" memiliki deskripsi ilmiah yang tepat yaitu...",
    "optionA": "Bilik kiri jantung -> Aorta -> Seluruh tubuh -> Vena kava -> Serambi kanan",
    "optionB": "Bilik kanan jantung -> Arteri pulmonalis -> Paru-paru -> Vena pulmonalis -> Serambi kiri jantung",
    "optionC": "Serambi kanan -> Paru-paru -> Bilik kiri -> Vena kava",
    "optionD": "Bilik kanan -> Vena kava -> Paru-paru -> Arteri pulmonalis -> Serambi kanan",
    "options": [
      {
        "id": "A",
        "text": "Bilik kiri jantung -> Aorta -> Seluruh tubuh -> Vena kava -> Serambi kanan"
      },
      {
        "id": "B",
        "text": "Bilik kanan jantung -> Arteri pulmonalis -> Paru-paru -> Vena pulmonalis -> Serambi kiri jantung"
      },
      {
        "id": "C",
        "text": "Serambi kanan -> Paru-paru -> Bilik kiri -> Vena kava"
      },
      {
        "id": "D",
        "text": "Bilik kanan -> Vena kava -> Paru-paru -> Arteri pulmonalis -> Serambi kanan"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Sirkulasi Darah Kecil (Pulmonal): Bilik kanan jantung -> Arteri pulmonalis -> Paru-paru -> Vena pulmonalis -> Serambi kiri jantung.",
    "tip": "Kecil: Bilik Kanan -> Paru -> Serambi Kiri; Besar: Bilik Kiri -> Tubuh -> Serambi Kanan.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-019",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Sistem Pernapasan dan Ekskresi (Ginjal)",
    "competency": "Menganalisis tahapan pembentukan urine (filtrasi, reabsorpsi, augmentasi)",
    "question": "Pada fisiologi sistem ekskresi manusia, tahapan proses atau kelainan \"Filtrasi Darah di Glomerulus\" dicirikan oleh...",
    "optionA": "Urine sesungguhnya yang siap dibuang ke ureter",
    "optionB": "Cairan empedu hati pekat",
    "optionC": "Urine primer yang masih mengandung air, glukosa, asam amino, dan garam tanpa protein darah",
    "optionD": "Darah murni yang bebas dari semua jenis ion",
    "options": [
      {
        "id": "A",
        "text": "Urine sesungguhnya yang siap dibuang ke ureter"
      },
      {
        "id": "B",
        "text": "Cairan empedu hati pekat"
      },
      {
        "id": "C",
        "text": "Urine primer yang masih mengandung air, glukosa, asam amino, dan garam tanpa protein darah"
      },
      {
        "id": "D",
        "text": "Darah murni yang bebas dari semua jenis ion"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Filtrasi Darah di Glomerulus ditandai oleh: urine primer yang masih mengandung air, glukosa, asam amino, dan garam tanpa protein darah.",
    "tip": "Filtrasi di glomerulus (urine primer), Reabsorpsi di TKP (urine sekunder), Augmentasi di TKD (urine sesungguhnya).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-020",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Pewarisan Sifat dan Bioteknologi",
    "competency": "Menentukan rasio persilangan monohibrid Mendel dan produk bioteknologi pangan",
    "question": "Dalam ranah bioteknologi dan pewarisan sifat materi IPA MTs, penerapan konsep \"Fermentasi tempe tradisional kedelai\" melibatkan mekanisme...",
    "optionA": "Bakteri Escherichia coli galur non-patogen",
    "optionB": "Khamir Saccharomyces cerevisiae murni",
    "optionC": "Bakteri Acetobacter xylinum air kelapa",
    "optionD": "Jamur Rhizopus oryzae dan Rhizopus oligosporus",
    "options": [
      {
        "id": "A",
        "text": "Bakteri Escherichia coli galur non-patogen"
      },
      {
        "id": "B",
        "text": "Khamir Saccharomyces cerevisiae murni"
      },
      {
        "id": "C",
        "text": "Bakteri Acetobacter xylinum air kelapa"
      },
      {
        "id": "D",
        "text": "Jamur Rhizopus oryzae dan Rhizopus oligosporus"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Fermentasi tempe tradisional kedelai didasarkan pada prinsip jamur rhizopus oryzae dan rhizopus oligosporus.",
    "tip": "Kenali mikroorganisme fermentasi konvensional dan teknik kultur jaringan / DNA rekombinan.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-021",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Pengukuran dan Besaran Pokok/Turunan",
    "competency": "Menganalisis hasil pengukuran alat ukur dan satuan SI",
    "question": "Siswa MTs mengukur ketebalan pelat logam uji ke-2 menggunakan jangka sorong. Skala utama tertera angka 4 cm dan garis nonius ke-7 berimpit tepat dengan skala utama. Hasil pengukuran ketebalan pelat tersebut adalah...",
    "optionA": "4.07 cm",
    "optionB": "4.17 cm",
    "optionC": "4.02 cm",
    "optionD": "4.70 cm",
    "options": [
      {
        "id": "A",
        "text": "4.07 cm"
      },
      {
        "id": "B",
        "text": "4.17 cm"
      },
      {
        "id": "C",
        "text": "4.02 cm"
      },
      {
        "id": "D",
        "text": "4.70 cm"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Hasil jangka sorong = skala utama + (garis nonius x 0,01 cm) = 4.07 cm.",
    "tip": "Skala utama + (nonius x 0,01 cm).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-022",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Klasifikasi Materi dan Pemisahan Campuran",
    "competency": "Mengidentifikasi metode pemisahan zat (filtrasi, kromatografi, distilasi)",
    "question": "Pada praktikum kimia madrasah, siswa diminta memisahkan \"fraksi minyak bumi mentah\". Teknik pemisahan campuran yang paling tepat dan efisien adalah...",
    "optionA": "Filtrasi gravitasi",
    "optionB": "Distilasi bertingkat berdasarkan titik didih",
    "optionC": "Sentrifugasi dingin",
    "optionD": "Sublimasi kristal",
    "options": [
      {
        "id": "A",
        "text": "Filtrasi gravitasi"
      },
      {
        "id": "B",
        "text": "Distilasi bertingkat berdasarkan titik didih"
      },
      {
        "id": "C",
        "text": "Sentrifugasi dingin"
      },
      {
        "id": "D",
        "text": "Sublimasi kristal"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Metode pemisahan yang sesuai untuk fraksi minyak bumi mentah adalah Distilasi bertingkat berdasarkan titik didih.",
    "tip": "Pahami prinsip pemisahan zat: ukuran partikel, titik didih, kelarutan, atau sifat kemagnetan.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-023",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Zat Aditif dan Zat Adiktif",
    "competency": "Mengidentifikasi fungsi pengawet, pewarna, dan bahaya zat adiktif",
    "question": "Pada tabel komposisi bahan pangan kemasan kantin madrasah tertera zat \"Tartrazin Cl 19140\". Peran utama penambahan zat tersebut ke dalam makanan adalah...",
    "optionA": "Pengawet daging kaleng",
    "optionB": "Penambah aroma buah segar",
    "optionC": "Memberikan warna kuning cerah pada makanan olahan",
    "optionD": "Pencegah penggumpalan garam",
    "options": [
      {
        "id": "A",
        "text": "Pengawet daging kaleng"
      },
      {
        "id": "B",
        "text": "Penambah aroma buah segar"
      },
      {
        "id": "C",
        "text": "Memberikan warna kuning cerah pada makanan olahan"
      },
      {
        "id": "D",
        "text": "Pencegah penggumpalan garam"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Zat Tartrazin Cl 19140 bertindak sebagai memberikan warna kuning cerah pada makanan olahan.",
    "tip": "Kenali fungsi spesifik pengawet, pemanis, pewarna, dan penyedap rasa.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-024",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Suhu, Pemuaian, dan Kalor",
    "competency": "Menganalisis perpindahan kalor dan penerapan rumus Q = m.c.ΔT",
    "question": "Massa air sebanyak 3 kg bersuhu 20°C dipanaskan oleh pembakar spiritus laboratorium hingga mengalami kenaikan suhu sebesar 20°C. Jika kalor jenis air bernilai 4.200 J/kg°C, jumlah kalor yang diserap air tersebut adalah...",
    "optionA": "256.200 Joule",
    "optionB": "247.800 Joule",
    "optionC": "504.000 Joule",
    "optionD": "252.000 Joule",
    "options": [
      {
        "id": "A",
        "text": "256.200 Joule"
      },
      {
        "id": "B",
        "text": "247.800 Joule"
      },
      {
        "id": "C",
        "text": "504.000 Joule"
      },
      {
        "id": "D",
        "text": "252.000 Joule"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Q = m . c . ΔT = 3 kg x 4.200 J/kg°C x 20°C = 252.000 Joule.",
    "tip": "Q = m.c.ΔT.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-025",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Gerak Lurus (GLB dan GLBB)",
    "competency": "Menganalisis grafik kecepatan terhadap waktu dan gerak lurus berubah beraturan",
    "question": "Sebuah mobil patroli madrasah bergerak lurus dengan kelajuan awal 10 m/s dan dipercepat secara beraturan dengan percepatan konstan 3 m/s² selama selang waktu 4 sekon. Kelajuan akhir mobil tersebut adalah...",
    "optionA": "22 m/s",
    "optionB": "26 m/s",
    "optionC": "19 m/s",
    "optionD": "13 m/s",
    "options": [
      {
        "id": "A",
        "text": "22 m/s"
      },
      {
        "id": "B",
        "text": "26 m/s"
      },
      {
        "id": "C",
        "text": "19 m/s"
      },
      {
        "id": "D",
        "text": "13 m/s"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Vt = Vo + a.t = 10 + (3 x 4) = 22 m/s.",
    "tip": "Rumus GLBB dipercepat: Vt = Vo + at.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-026",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Hukum Newton tentang Gerak",
    "competency": "Menerapkan Hukum I, II, dan III Newton pada aktivitas sehari-hari",
    "question": "Perhatikan fenomena gerak sehari-hari berikut: \"Mobil mainan bermassa 2 kg yang ditarik gaya 10 N mengalami percepatan lebih besar daripada mobil 5 kg dengan gaya sama\". Fenomena fisik tersebut secara tepat membuktikan berlakunya...",
    "optionA": "Hukum Kekekalan Energi Mekanik",
    "optionB": "Hukum II Newton tentang hubungan gaya, massa, dan percepatan (F = m.a)",
    "optionC": "Hukum I Newton tentang sifat diam",
    "optionD": "Hukum Pascal tentang tekanan",
    "options": [
      {
        "id": "A",
        "text": "Hukum Kekekalan Energi Mekanik"
      },
      {
        "id": "B",
        "text": "Hukum II Newton tentang hubungan gaya, massa, dan percepatan (F = m.a)"
      },
      {
        "id": "C",
        "text": "Hukum I Newton tentang sifat diam"
      },
      {
        "id": "D",
        "text": "Hukum Pascal tentang tekanan"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fenomena tersebut merupakan aplikasi nyata dari Hukum II Newton tentang hubungan gaya, massa, dan percepatan (F = m.a).",
    "tip": "Hukum I = inersia; Hukum II = F=ma; Hukum III = aksi reaksi sama besar berlawanan arah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-027",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Usaha, Energi, dan Pesawat Sederhana",
    "competency": "Menghitung keuntungan mekanik tuas, katrol, dan bidang miring",
    "question": "Untuk memindahkan beban seberat 450 N, seorang laboran madrasah menggunakan tuas pembuka peti kemas. Jika panjang lengan kuasa 4 meter dan panjang lengan beban 1 meter, besar gaya kuasa minimum yang diperlukan adalah...",
    "optionA": "153 N",
    "optionB": "88 N",
    "optionC": "113 N",
    "optionD": "450 N",
    "options": [
      {
        "id": "A",
        "text": "153 N"
      },
      {
        "id": "B",
        "text": "88 N"
      },
      {
        "id": "C",
        "text": "113 N"
      },
      {
        "id": "D",
        "text": "450 N"
      }
    ],
    "correctAnswer": "C",
    "explanation": "W x lb = F x lk => F = (W x lb) / lk = (450 x 1) / 4 = 113 N.",
    "tip": "W x lb = F x lk.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-028",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Tekanan Hidrostatis dan Hukum Archimedes",
    "competency": "Menganalisis gaya angkat zat cair dan kondisi terapung, melayang, tenggelam",
    "question": "Seorang penyelam melakukan observasi biota laut pada kedalaman 5 meter di bawah permukaan laut (massa jenis air laut diasumsikan 1.000 kg/m³, percepatan gravitasi g = 10 m/s²). Tekanan hidrostatis yang dialami penyelam tersebut adalah...",
    "optionA": "60.000 Pa",
    "optionB": "40.000 Pa",
    "optionC": "100.000 Pa",
    "optionD": "50.000 Pa",
    "options": [
      {
        "id": "A",
        "text": "60.000 Pa"
      },
      {
        "id": "B",
        "text": "40.000 Pa"
      },
      {
        "id": "C",
        "text": "100.000 Pa"
      },
      {
        "id": "D",
        "text": "50.000 Pa"
      }
    ],
    "correctAnswer": "D",
    "explanation": "P = ρ . g . h = 1.000 x 10 x 5 = 50000 Pa.",
    "tip": "P = ρgh.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-029",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Getaran, Gelombang, dan Resonansi Bunyi",
    "competency": "Menghitung cepat rambat gelombang v = λ.f dan frekuensi getaran",
    "question": "Pada pengujian osilasi di laboratorium, terukur gelombang permukaan air danau memiliki panjang gelombang 4 meter dan frekuensi osilasi 120 Hz. Cepat rambat gelombang tersebut bernilai...",
    "optionA": "480 m/s",
    "optionB": "500 m/s",
    "optionC": "465 m/s",
    "optionD": "30.0 m/s",
    "options": [
      {
        "id": "A",
        "text": "480 m/s"
      },
      {
        "id": "B",
        "text": "500 m/s"
      },
      {
        "id": "C",
        "text": "465 m/s"
      },
      {
        "id": "D",
        "text": "30.0 m/s"
      }
    ],
    "correctAnswer": "A",
    "explanation": "v = λ . f = 4 x 120 = 480 m/s.",
    "tip": "v = λ x f.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-030",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Cahaya dan Pembentukan Bayangan Cermin/Lensa",
    "competency": "Menganalisis pembentukan bayangan pada cermin cekung dan lup/mikroskop",
    "question": "Sebuah benda lilin diletakkan pada jarak 30 cm di depan cermin cekung laboratorium yang mempunyai jarak titik fokus 15 cm. Jarak bayangan nyata yang terbentuk di depan cermin adalah...",
    "optionA": "36.0 cm",
    "optionB": "30.0 cm",
    "optionC": "25.0 cm",
    "optionD": "30.0 cm",
    "options": [
      {
        "id": "A",
        "text": "36.0 cm"
      },
      {
        "id": "B",
        "text": "30.0 cm"
      },
      {
        "id": "C",
        "text": "25.0 cm"
      },
      {
        "id": "D",
        "text": "30.0 cm"
      }
    ],
    "correctAnswer": "B",
    "explanation": "1/s' = 1/f - 1/s = 1/15 - 1/30 => s' = 30.0 cm.",
    "tip": "1/f = 1/s + 1/s'.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-031",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Listrik Statis dan Hukum Coulomb",
    "competency": "Menganalisis interaksi muatan listrik dan medan listrik",
    "question": "Dua muatan listrik mula-mula tolak-menolak dengan gaya F pada jarak r. Jika jarak antarmuatan didekatkan menjadi 1/2 kali semula (0,5r), maka gaya Coulomb menjadi...",
    "optionA": "2 F",
    "optionB": "1/2 F",
    "optionC": "4 F",
    "optionD": "1/4 F",
    "options": [
      {
        "id": "A",
        "text": "2 F"
      },
      {
        "id": "B",
        "text": "1/2 F"
      },
      {
        "id": "C",
        "text": "4 F"
      },
      {
        "id": "D",
        "text": "1/4 F"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Gaya berbanding terbalik dengan kuadrat jarak: 1/(0,5)² = 1/0,25 = 4 kali F.",
    "tip": "Pahami Hukum Coulomb F = k.q1.q2/r² dan prinsip perpindahan elektron.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-032",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Listrik Dinamis dan Rangkaian Seri-Paralel",
    "competency": "Menghitung hambatan pengganti dan kuat arus menggunakan Hukum Ohm",
    "question": "Pada papan rangkaian praktikum elektronika madrasah, dua resistor identik paralel masing-masing memiliki resistansi 4 Ω dan 4 Ω dirangkai paralel. Nilai resistansi pengganti dari cabang tersebut adalah...",
    "optionA": "4.0 Ω",
    "optionB": "1.0 Ω",
    "optionC": "8 Ω",
    "optionD": "2.0 Ω",
    "options": [
      {
        "id": "A",
        "text": "4.0 Ω"
      },
      {
        "id": "B",
        "text": "1.0 Ω"
      },
      {
        "id": "C",
        "text": "8 Ω"
      },
      {
        "id": "D",
        "text": "2.0 Ω"
      }
    ],
    "correctAnswer": "D",
    "explanation": "1/Rp = 1/4 + 1/4 => Rp = (4 x 4) / (4 + 4) = 2.0 Ω.",
    "tip": "Rp = (R1 x R2) / (R1 + R2).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-033",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Kemagnetan dan Induksi Elektromagnetik",
    "competency": "Menganalisis cara pembuatan magnet dan prinsip transformator step-up/step-down",
    "question": "Sebuah transformator step-down radio memiliki 800 lilitan primer dan 200 lilitan sekunder. Jika kumparan primer dihubungkan ke sumber tegangan AC sebesar 220 Volt, maka tegangan sekunder yang dihasilkan adalah...",
    "optionA": "55.0 Volt",
    "optionB": "70.0 Volt",
    "optionC": "45.0 Volt",
    "optionD": "440 Volt",
    "options": [
      {
        "id": "A",
        "text": "55.0 Volt"
      },
      {
        "id": "B",
        "text": "70.0 Volt"
      },
      {
        "id": "C",
        "text": "45.0 Volt"
      },
      {
        "id": "D",
        "text": "440 Volt"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Vs = (Vp x Ns) / Np = (220 x 200) / 800 = 55.0 Volt.",
    "tip": "Vp / Vs = Np / Ns.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-034",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Tata Surya dan Fenomena Gerhana",
    "competency": "Menganalisis dampak revolusi bumi, fase bulan, dan pasang surut air laut",
    "question": "Dalam studi astronomi dan kebumian, fenomena alam \"Pasang Purnama (Spring Tide)\" disebabkan secara ilmiah oleh...",
    "optionA": "Bulan dan matahari membentuk sudut tegak lurus 90°",
    "optionB": "Gravitasi matahari dan gravitasi bulan saling memperkuat posisi sejajar saat fase bulan baru atau purnama",
    "optionC": "Bulan berada tepat di belakang bayangan inti umbra bumi",
    "optionD": "Rotasi bumi berhenti sesaat di garis khatulistiwa",
    "options": [
      {
        "id": "A",
        "text": "Bulan dan matahari membentuk sudut tegak lurus 90°"
      },
      {
        "id": "B",
        "text": "Gravitasi matahari dan gravitasi bulan saling memperkuat posisi sejajar saat fase bulan baru atau purnama"
      },
      {
        "id": "C",
        "text": "Bulan berada tepat di belakang bayangan inti umbra bumi"
      },
      {
        "id": "D",
        "text": "Rotasi bumi berhenti sesaat di garis khatulistiwa"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fenomena Pasang Purnama (Spring Tide) terjadi karena gravitasi matahari dan gravitasi bulan saling memperkuat posisi sejajar saat fase bulan baru atau purnama.",
    "tip": "Pahami dampak rotasi bumi, revolusi bumi, dan posisi matahari-bulan-bumi.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-035",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Struktur Sel dan Mikroskop",
    "competency": "Membedakan organel sel tumbuhan dan sel hewan serta fungsinya",
    "question": "Pengamatan preparat jaringan tumbuhan di bawah mikroskop laboratorium madrasah menampakkan organel \"Mitokondria\". Fungsi biologis utama organel tersebut adalah...",
    "optionA": "Membelah sel secara mitosis spontan tanpa DNA",
    "optionB": "Mengikat molekul hemoglobin pembawa gas pernapasan",
    "optionC": "Pusat respirasi seluler aerobik yang menghasilkan molekul energi ATP",
    "optionD": "Menghasilkan pigmen melanin pelindung ultraviolet",
    "options": [
      {
        "id": "A",
        "text": "Membelah sel secara mitosis spontan tanpa DNA"
      },
      {
        "id": "B",
        "text": "Mengikat molekul hemoglobin pembawa gas pernapasan"
      },
      {
        "id": "C",
        "text": "Pusat respirasi seluler aerobik yang menghasilkan molekul energi ATP"
      },
      {
        "id": "D",
        "text": "Menghasilkan pigmen melanin pelindung ultraviolet"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Organel Mitokondria memiliki fungsi esensial yaitu pusat respirasi seluler aerobik yang menghasilkan molekul energi atp.",
    "tip": "Kenali organel khas sel hewan (sentriol, lisosom) dan sel tumbuhan (dinding sel, kloroplas, vakuola besar).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-036",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Sistem Gerak Manusia (Tulang & Sendi)",
    "competency": "Mengidentifikasi jenis sendi diartrosis dan kelainan pada tulang manusia",
    "question": "Dalam materi sistem gerak manusia MTs, konsep biologis \"Sendi Peluru\" didefinisikan secara medis dan anatomis sebagai...",
    "optionA": "Gerakan terbatas hanya satu bidang datar",
    "optionB": "Gerakan rotasi kepala memutar",
    "optionC": "Gerakan dua arah seperti pelana kuda",
    "optionD": "Hubungan gelang panggul dengan tulang paha yang memungkinkan gerakan bebas ke segala arah",
    "options": [
      {
        "id": "A",
        "text": "Gerakan terbatas hanya satu bidang datar"
      },
      {
        "id": "B",
        "text": "Gerakan rotasi kepala memutar"
      },
      {
        "id": "C",
        "text": "Gerakan dua arah seperti pelana kuda"
      },
      {
        "id": "D",
        "text": "Hubungan gelang panggul dengan tulang paha yang memungkinkan gerakan bebas ke segala arah"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Sendi Peluru adalah hubungan gelang panggul dengan tulang paha yang memungkinkan gerakan bebas ke segala arah.",
    "tip": "Pahami pembagian sendi diartrosis dan jenis kelainan kelengkungan tulang belakang.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-037",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Sistem Pencernaan dan Enzim Manusia",
    "competency": "Menganalisis kerja enzim pencernaan di lambung dan usus halus",
    "question": "Pada sistem digesti manusia, zat atau enzim \"Amilase / Ptialin\" yang dihasilkan di Kelenjar ludah di rongga mulut berperan spesifik untuk...",
    "optionA": "Memecah karbohidrat amilum menjadi disakarida maltosa",
    "optionB": "Mengubah asam lemak menjadi gliserol",
    "optionC": "Mengaktifkan pepsinogen lambung",
    "optionD": "Membunuh bakteri patogen makanan",
    "options": [
      {
        "id": "A",
        "text": "Memecah karbohidrat amilum menjadi disakarida maltosa"
      },
      {
        "id": "B",
        "text": "Mengubah asam lemak menjadi gliserol"
      },
      {
        "id": "C",
        "text": "Mengaktifkan pepsinogen lambung"
      },
      {
        "id": "D",
        "text": "Membunuh bakteri patogen makanan"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Amilase / Ptialin berfungsi memecah karbohidrat amilum menjadi disakarida maltosa.",
    "tip": "Kenali enzim lambung (pepsin, renin, HCl) dan getah pankreas (amilase, tripsin, lipase).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-038",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Sistem Peredaran Darah Manusia",
    "competency": "Menganalisis peredaran darah besar, darah kecil, dan sel-sel darah",
    "question": "Dalam kajian sistem peredaran darah kardiovaskular manusia MTs, konsep \"Sirkulasi Darah Besar (Sistemik)\" memiliki deskripsi ilmiah yang tepat yaitu...",
    "optionA": "Bilik kanan -> Paru-paru -> Vena pulmonalis -> Serambi kiri",
    "optionB": "Bilik kiri jantung -> Aorta -> Pembuluh arteri seluruh tubuh -> Vena kava -> Serambi kanan jantung",
    "optionC": "Serambi kiri -> Arteri pulmonalis -> Seluruh tubuh -> Bilik kanan",
    "optionD": "Bilik kiri -> Vena pulmonalis -> Seluruh tubuh -> Aorta -> Serambi kanan",
    "options": [
      {
        "id": "A",
        "text": "Bilik kanan -> Paru-paru -> Vena pulmonalis -> Serambi kiri"
      },
      {
        "id": "B",
        "text": "Bilik kiri jantung -> Aorta -> Pembuluh arteri seluruh tubuh -> Vena kava -> Serambi kanan jantung"
      },
      {
        "id": "C",
        "text": "Serambi kiri -> Arteri pulmonalis -> Seluruh tubuh -> Bilik kanan"
      },
      {
        "id": "D",
        "text": "Bilik kiri -> Vena pulmonalis -> Seluruh tubuh -> Aorta -> Serambi kanan"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Sirkulasi Darah Besar (Sistemik): Bilik kiri jantung -> Aorta -> Pembuluh arteri seluruh tubuh -> Vena kava -> Serambi kanan jantung.",
    "tip": "Kecil: Bilik Kanan -> Paru -> Serambi Kiri; Besar: Bilik Kiri -> Tubuh -> Serambi Kanan.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-039",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Sistem Pernapasan dan Ekskresi (Ginjal)",
    "competency": "Menganalisis tahapan pembentukan urine (filtrasi, reabsorpsi, augmentasi)",
    "question": "Pada fisiologi sistem ekskresi manusia, tahapan proses atau kelainan \"Reabsorpsi di Tubulus Kontortus Proksimal (TKP)\" dicirikan oleh...",
    "optionA": "Penyaringan sel-sel darah merah dari plasma",
    "optionB": "Penambahan zat racun sisa metabolisme obat-obatan",
    "optionC": "Penyerapan kembali zat berguna (seperti seluruh glukosa dan asam amino) menghasilkan urine sekunder",
    "optionD": "Pemekatan urine dengan kristal asam urat murni",
    "options": [
      {
        "id": "A",
        "text": "Penyaringan sel-sel darah merah dari plasma"
      },
      {
        "id": "B",
        "text": "Penambahan zat racun sisa metabolisme obat-obatan"
      },
      {
        "id": "C",
        "text": "Penyerapan kembali zat berguna (seperti seluruh glukosa dan asam amino) menghasilkan urine sekunder"
      },
      {
        "id": "D",
        "text": "Pemekatan urine dengan kristal asam urat murni"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Reabsorpsi di Tubulus Kontortus Proksimal (TKP) ditandai oleh: penyerapan kembali zat berguna (seperti seluruh glukosa dan asam amino) menghasilkan urine sekunder.",
    "tip": "Filtrasi di glomerulus (urine primer), Reabsorpsi di TKP (urine sekunder), Augmentasi di TKD (urine sesungguhnya).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-040",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Pewarisan Sifat dan Bioteknologi",
    "competency": "Menentukan rasio persilangan monohibrid Mendel dan produk bioteknologi pangan",
    "question": "Dalam ranah bioteknologi dan pewarisan sifat materi IPA MTs, penerapan konsep \"Fermentasi susu menjadi yoghurt asam\" melibatkan mekanisme...",
    "optionA": "Jamur Aspergillus wentii kedelai",
    "optionB": "Bakteri Bacillus thuringiensis tanaman",
    "optionC": "Jamur Neurospora sitophila oncom",
    "optionD": "Bakteri Lactobacillus bulgaricus dan Streptococcus thermophilus",
    "options": [
      {
        "id": "A",
        "text": "Jamur Aspergillus wentii kedelai"
      },
      {
        "id": "B",
        "text": "Bakteri Bacillus thuringiensis tanaman"
      },
      {
        "id": "C",
        "text": "Jamur Neurospora sitophila oncom"
      },
      {
        "id": "D",
        "text": "Bakteri Lactobacillus bulgaricus dan Streptococcus thermophilus"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Fermentasi susu menjadi yoghurt asam didasarkan pada prinsip bakteri lactobacillus bulgaricus dan streptococcus thermophilus.",
    "tip": "Kenali mikroorganisme fermentasi konvensional dan teknik kultur jaringan / DNA rekombinan.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-041",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Pengukuran dan Besaran Pokok/Turunan",
    "competency": "Menganalisis hasil pengukuran alat ukur dan satuan SI",
    "question": "Siswa MTs mengukur ketebalan pelat logam uji ke-3 menggunakan jangka sorong. Skala utama tertera angka 5 cm dan garis nonius ke-1 berimpit tepat dengan skala utama. Hasil pengukuran ketebalan pelat tersebut adalah...",
    "optionA": "5.01 cm",
    "optionB": "5.11 cm",
    "optionC": "4.96 cm",
    "optionD": "5.10 cm",
    "options": [
      {
        "id": "A",
        "text": "5.01 cm"
      },
      {
        "id": "B",
        "text": "5.11 cm"
      },
      {
        "id": "C",
        "text": "4.96 cm"
      },
      {
        "id": "D",
        "text": "5.10 cm"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Hasil jangka sorong = skala utama + (garis nonius x 0,01 cm) = 5.01 cm.",
    "tip": "Skala utama + (nonius x 0,01 cm).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-042",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Klasifikasi Materi dan Pemisahan Campuran",
    "competency": "Mengidentifikasi metode pemisahan zat (filtrasi, kromatografi, distilasi)",
    "question": "Pada praktikum kimia madrasah, siswa diminta memisahkan \"zat warna pigmen klorofil daun bayam\". Teknik pemisahan campuran yang paling tepat dan efisien adalah...",
    "optionA": "Evaporasi kering",
    "optionB": "Kromatografi kertas berdasarkan kecepatan rambat zat",
    "optionC": "Distilasi uap",
    "optionD": "Kristalisasi garam",
    "options": [
      {
        "id": "A",
        "text": "Evaporasi kering"
      },
      {
        "id": "B",
        "text": "Kromatografi kertas berdasarkan kecepatan rambat zat"
      },
      {
        "id": "C",
        "text": "Distilasi uap"
      },
      {
        "id": "D",
        "text": "Kristalisasi garam"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Metode pemisahan yang sesuai untuk zat warna pigmen klorofil daun bayam adalah Kromatografi kertas berdasarkan kecepatan rambat zat.",
    "tip": "Pahami prinsip pemisahan zat: ukuran partikel, titik didih, kelarutan, atau sifat kemagnetan.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-043",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Zat Aditif dan Zat Adiktif",
    "competency": "Mengidentifikasi fungsi pengawet, pewarna, dan bahaya zat adiktif",
    "question": "Pada tabel komposisi bahan pangan kemasan kantin madrasah tertera zat \"Monosodium Glutamat (MSG)\". Peran utama penambahan zat tersebut ke dalam makanan adalah...",
    "optionA": "Pewarna hijau alami",
    "optionB": "Pengawet manisan buah",
    "optionC": "Mempertegas dan menguatkan cita rasa gurih umami pada masakan",
    "optionD": "Pengembang adonan kue",
    "options": [
      {
        "id": "A",
        "text": "Pewarna hijau alami"
      },
      {
        "id": "B",
        "text": "Pengawet manisan buah"
      },
      {
        "id": "C",
        "text": "Mempertegas dan menguatkan cita rasa gurih umami pada masakan"
      },
      {
        "id": "D",
        "text": "Pengembang adonan kue"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Zat Monosodium Glutamat (MSG) bertindak sebagai mempertegas dan menguatkan cita rasa gurih umami pada masakan.",
    "tip": "Kenali fungsi spesifik pengawet, pemanis, pewarna, dan penyedap rasa.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-044",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Suhu, Pemuaian, dan Kalor",
    "competency": "Menganalisis perpindahan kalor dan penerapan rumus Q = m.c.ΔT",
    "question": "Massa air sebanyak 4 kg bersuhu 20°C dipanaskan oleh pembakar spiritus laboratorium hingga mengalami kenaikan suhu sebesar 24°C. Jika kalor jenis air bernilai 4.200 J/kg°C, jumlah kalor yang diserap air tersebut adalah...",
    "optionA": "407.400 Joule",
    "optionB": "399.000 Joule",
    "optionC": "806.400 Joule",
    "optionD": "403.200 Joule",
    "options": [
      {
        "id": "A",
        "text": "407.400 Joule"
      },
      {
        "id": "B",
        "text": "399.000 Joule"
      },
      {
        "id": "C",
        "text": "806.400 Joule"
      },
      {
        "id": "D",
        "text": "403.200 Joule"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Q = m . c . ΔT = 4 kg x 4.200 J/kg°C x 24°C = 403.200 Joule.",
    "tip": "Q = m.c.ΔT.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-045",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Gerak Lurus (GLB dan GLBB)",
    "competency": "Menganalisis grafik kecepatan terhadap waktu dan gerak lurus berubah beraturan",
    "question": "Sebuah mobil patroli madrasah bergerak lurus dengan kelajuan awal 13 m/s dan dipercepat secara beraturan dengan percepatan konstan 4 m/s² selama selang waktu 5 sekon. Kelajuan akhir mobil tersebut adalah...",
    "optionA": "33 m/s",
    "optionB": "37 m/s",
    "optionC": "30 m/s",
    "optionD": "17 m/s",
    "options": [
      {
        "id": "A",
        "text": "33 m/s"
      },
      {
        "id": "B",
        "text": "37 m/s"
      },
      {
        "id": "C",
        "text": "30 m/s"
      },
      {
        "id": "D",
        "text": "17 m/s"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Vt = Vo + a.t = 13 + (4 x 5) = 33 m/s.",
    "tip": "Rumus GLBB dipercepat: Vt = Vo + at.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-046",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Hukum Newton tentang Gerak",
    "competency": "Menerapkan Hukum I, II, dan III Newton pada aktivitas sehari-hari",
    "question": "Perhatikan fenomena gerak sehari-hari berikut: \"Saat mendayung perahu di danau, air didorong ke belakang sehingga perahu meluncur ke depan\". Fenomena fisik tersebut secara tepat membuktikan berlakunya...",
    "optionA": "Hukum I Newton tentang kelembaman",
    "optionB": "Hukum III Newton tentang gaya aksi dan reaksi (F aksi = - F reaksi)",
    "optionC": "Hukum II Newton tentang resultan gaya",
    "optionD": "Hukum Archimedes fluida",
    "options": [
      {
        "id": "A",
        "text": "Hukum I Newton tentang kelembaman"
      },
      {
        "id": "B",
        "text": "Hukum III Newton tentang gaya aksi dan reaksi (F aksi = - F reaksi)"
      },
      {
        "id": "C",
        "text": "Hukum II Newton tentang resultan gaya"
      },
      {
        "id": "D",
        "text": "Hukum Archimedes fluida"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fenomena tersebut merupakan aplikasi nyata dari Hukum III Newton tentang gaya aksi dan reaksi (F aksi = - F reaksi).",
    "tip": "Hukum I = inersia; Hukum II = F=ma; Hukum III = aksi reaksi sama besar berlawanan arah.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-047",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Usaha, Energi, dan Pesawat Sederhana",
    "competency": "Menghitung keuntungan mekanik tuas, katrol, dan bidang miring",
    "question": "Untuk memindahkan beban seberat 800 N, seorang laboran madrasah menggunakan pengungkit balok kayu madrasah. Jika panjang lengan kuasa 4 meter dan panjang lengan beban 2 meter, besar gaya kuasa minimum yang diperlukan adalah...",
    "optionA": "440 N",
    "optionB": "375 N",
    "optionC": "400 N",
    "optionD": "800 N",
    "options": [
      {
        "id": "A",
        "text": "440 N"
      },
      {
        "id": "B",
        "text": "375 N"
      },
      {
        "id": "C",
        "text": "400 N"
      },
      {
        "id": "D",
        "text": "800 N"
      }
    ],
    "correctAnswer": "C",
    "explanation": "W x lb = F x lk => F = (W x lb) / lk = (800 x 2) / 4 = 400 N.",
    "tip": "W x lb = F x lk.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-048",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Tekanan Hidrostatis dan Hukum Archimedes",
    "competency": "Menganalisis gaya angkat zat cair dan kondisi terapung, melayang, tenggelam",
    "question": "Seorang penyelam melakukan observasi biota laut pada kedalaman 8 meter di bawah permukaan laut (massa jenis air laut diasumsikan 1.000 kg/m³, percepatan gravitasi g = 10 m/s²). Tekanan hidrostatis yang dialami penyelam tersebut adalah...",
    "optionA": "90.000 Pa",
    "optionB": "70.000 Pa",
    "optionC": "160.000 Pa",
    "optionD": "80.000 Pa",
    "options": [
      {
        "id": "A",
        "text": "90.000 Pa"
      },
      {
        "id": "B",
        "text": "70.000 Pa"
      },
      {
        "id": "C",
        "text": "160.000 Pa"
      },
      {
        "id": "D",
        "text": "80.000 Pa"
      }
    ],
    "correctAnswer": "D",
    "explanation": "P = ρ . g . h = 1.000 x 10 x 8 = 80000 Pa.",
    "tip": "P = ρgh.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-049",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Getaran, Gelombang, dan Resonansi Bunyi",
    "competency": "Menghitung cepat rambat gelombang v = λ.f dan frekuensi getaran",
    "question": "Pada pengujian osilasi di laboratorium, terukur gelombang bunyi garpu tala di udara memiliki panjang gelombang 0.5 meter dan frekuensi osilasi 400 Hz. Cepat rambat gelombang tersebut bernilai...",
    "optionA": "200 m/s",
    "optionB": "220 m/s",
    "optionC": "185 m/s",
    "optionD": "800.0 m/s",
    "options": [
      {
        "id": "A",
        "text": "200 m/s"
      },
      {
        "id": "B",
        "text": "220 m/s"
      },
      {
        "id": "C",
        "text": "185 m/s"
      },
      {
        "id": "D",
        "text": "800.0 m/s"
      }
    ],
    "correctAnswer": "A",
    "explanation": "v = λ . f = 0.5 x 400 = 200 m/s.",
    "tip": "v = λ x f.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-050",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Cahaya dan Pembentukan Bayangan Cermin/Lensa",
    "competency": "Menganalisis pembentukan bayangan pada cermin cekung dan lup/mikroskop",
    "question": "Sebuah benda lilin diletakkan pada jarak 25 cm di depan cermin konkaf optika yang mempunyai jarak titik fokus 10 cm. Jarak bayangan nyata yang terbentuk di depan cermin adalah...",
    "optionA": "22.7 cm",
    "optionB": "16.7 cm",
    "optionC": "11.7 cm",
    "optionD": "20.0 cm",
    "options": [
      {
        "id": "A",
        "text": "22.7 cm"
      },
      {
        "id": "B",
        "text": "16.7 cm"
      },
      {
        "id": "C",
        "text": "11.7 cm"
      },
      {
        "id": "D",
        "text": "20.0 cm"
      }
    ],
    "correctAnswer": "B",
    "explanation": "1/s' = 1/f - 1/s = 1/10 - 1/25 => s' = 16.7 cm.",
    "tip": "1/f = 1/s + 1/s'.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-051",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Listrik Statis dan Hukum Coulomb",
    "competency": "Menganalisis interaksi muatan listrik dan medan listrik",
    "question": "Penggaris plastik yang digosokkan ke rambut kering dapat menarik serpihan kertas kecil karena...",
    "optionA": "Penggaris bermuatan positif karena menerima proton dari rambut",
    "optionB": "Rambut kehilangan neutron ke udara",
    "optionC": "Penggaris bermuatan negatif karena menerima perpindahan elektron dari rambut",
    "optionD": "Kertas mengalami induksi magnetik permanen",
    "options": [
      {
        "id": "A",
        "text": "Penggaris bermuatan positif karena menerima proton dari rambut"
      },
      {
        "id": "B",
        "text": "Rambut kehilangan neutron ke udara"
      },
      {
        "id": "C",
        "text": "Penggaris bermuatan negatif karena menerima perpindahan elektron dari rambut"
      },
      {
        "id": "D",
        "text": "Kertas mengalami induksi magnetik permanen"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Elektron berpindah dari rambut ke plastik, menjadikan plastik bermuatan negatif.",
    "tip": "Pahami Hukum Coulomb F = k.q1.q2/r² dan prinsip perpindahan elektron.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-052",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Listrik Dinamis dan Rangkaian Seri-Paralel",
    "competency": "Menghitung hambatan pengganti dan kuat arus menggunakan Hukum Ohm",
    "question": "Pada papan rangkaian praktikum elektronika madrasah, dua pemanas paralel masing-masing memiliki resistansi 10 Ω dan 15 Ω dirangkai paralel. Nilai resistansi pengganti dari cabang tersebut adalah...",
    "optionA": "8.0 Ω",
    "optionB": "5.0 Ω",
    "optionC": "25 Ω",
    "optionD": "6.0 Ω",
    "options": [
      {
        "id": "A",
        "text": "8.0 Ω"
      },
      {
        "id": "B",
        "text": "5.0 Ω"
      },
      {
        "id": "C",
        "text": "25 Ω"
      },
      {
        "id": "D",
        "text": "6.0 Ω"
      }
    ],
    "correctAnswer": "D",
    "explanation": "1/Rp = 1/10 + 1/15 => Rp = (10 x 15) / (10 + 15) = 6.0 Ω.",
    "tip": "Rp = (R1 x R2) / (R1 + R2).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-053",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Kemagnetan dan Induksi Elektromagnetik",
    "competency": "Menganalisis cara pembuatan magnet dan prinsip transformator step-up/step-down",
    "question": "Sebuah transformator step-up inverter memiliki 500 lilitan primer dan 1500 lilitan sekunder. Jika kumparan primer dihubungkan ke sumber tegangan AC sebesar 110 Volt, maka tegangan sekunder yang dihasilkan adalah...",
    "optionA": "330.0 Volt",
    "optionB": "345.0 Volt",
    "optionC": "320.0 Volt",
    "optionD": "220 Volt",
    "options": [
      {
        "id": "A",
        "text": "330.0 Volt"
      },
      {
        "id": "B",
        "text": "345.0 Volt"
      },
      {
        "id": "C",
        "text": "320.0 Volt"
      },
      {
        "id": "D",
        "text": "220 Volt"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Vs = (Vp x Ns) / Np = (110 x 1500) / 500 = 330.0 Volt.",
    "tip": "Vp / Vs = Np / Ns.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-054",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Tata Surya dan Fenomena Gerhana",
    "competency": "Menganalisis dampak revolusi bumi, fase bulan, dan pasang surut air laut",
    "question": "Dalam studi astronomi dan kebumian, fenomena alam \"Gerhana Bulan Total\" disebabkan secara ilmiah oleh...",
    "optionA": "Bulan berada di antara matahari dan bumi di siang hari",
    "optionB": "Seluruh piringan bulan masuk ke dalam wilayah bayangan inti (umbra) bumi",
    "optionC": "Bulan hanya terkena bayangan semu penumbra bumi",
    "optionD": "Bumi melintas di antara sabuk asteroid",
    "options": [
      {
        "id": "A",
        "text": "Bulan berada di antara matahari dan bumi di siang hari"
      },
      {
        "id": "B",
        "text": "Seluruh piringan bulan masuk ke dalam wilayah bayangan inti (umbra) bumi"
      },
      {
        "id": "C",
        "text": "Bulan hanya terkena bayangan semu penumbra bumi"
      },
      {
        "id": "D",
        "text": "Bumi melintas di antara sabuk asteroid"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fenomena Gerhana Bulan Total terjadi karena seluruh piringan bulan masuk ke dalam wilayah bayangan inti (umbra) bumi.",
    "tip": "Pahami dampak rotasi bumi, revolusi bumi, dan posisi matahari-bulan-bumi.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-055",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Struktur Sel dan Mikroskop",
    "competency": "Membedakan organel sel tumbuhan dan sel hewan serta fungsinya",
    "question": "Pengamatan preparat jaringan tumbuhan di bawah mikroskop laboratorium madrasah menampakkan organel \"Aparatus Golgi (Badan Golgi)\". Fungsi biologis utama organel tersebut adalah...",
    "optionA": "Membelah sel secara mitosis spontan tanpa DNA",
    "optionB": "Mengikat molekul hemoglobin pembawa gas pernapasan",
    "optionC": "Modifikasi, penyortiran, dan sekresi glikoprotein serta vesikel sel",
    "optionD": "Menghasilkan pigmen melanin pelindung ultraviolet",
    "options": [
      {
        "id": "A",
        "text": "Membelah sel secara mitosis spontan tanpa DNA"
      },
      {
        "id": "B",
        "text": "Mengikat molekul hemoglobin pembawa gas pernapasan"
      },
      {
        "id": "C",
        "text": "Modifikasi, penyortiran, dan sekresi glikoprotein serta vesikel sel"
      },
      {
        "id": "D",
        "text": "Menghasilkan pigmen melanin pelindung ultraviolet"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Organel Aparatus Golgi (Badan Golgi) memiliki fungsi esensial yaitu modifikasi, penyortiran, dan sekresi glikoprotein serta vesikel sel.",
    "tip": "Kenali organel khas sel hewan (sentriol, lisosom) dan sel tumbuhan (dinding sel, kloroplas, vakuola besar).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-056",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Sistem Gerak Manusia (Tulang & Sendi)",
    "competency": "Mengidentifikasi jenis sendi diartrosis dan kelainan pada tulang manusia",
    "question": "Dalam materi sistem gerak manusia MTs, konsep biologis \"Sendi Putar\" didefinisikan secara medis dan anatomis sebagai...",
    "optionA": "Gerakan menekuk satu arah pada siku",
    "optionB": "Gerakan meluncur pada pergelangan kaki",
    "optionC": "Gerakan mengatup tanpa celah",
    "optionD": "Persendian antara tulang atlas dan tulang pemutar tengkorak yang memungkinkan gerakan rotasi memutar",
    "options": [
      {
        "id": "A",
        "text": "Gerakan menekuk satu arah pada siku"
      },
      {
        "id": "B",
        "text": "Gerakan meluncur pada pergelangan kaki"
      },
      {
        "id": "C",
        "text": "Gerakan mengatup tanpa celah"
      },
      {
        "id": "D",
        "text": "Persendian antara tulang atlas dan tulang pemutar tengkorak yang memungkinkan gerakan rotasi memutar"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Sendi Putar adalah persendian antara tulang atlas dan tulang pemutar tengkorak yang memungkinkan gerakan rotasi memutar.",
    "tip": "Pahami pembagian sendi diartrosis dan jenis kelainan kelengkungan tulang belakang.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-057",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Sistem Pencernaan dan Enzim Manusia",
    "competency": "Menganalisis kerja enzim pencernaan di lambung dan usus halus",
    "question": "Pada sistem digesti manusia, zat atau enzim \"Pepsin\" yang dihasilkan di Kelenjar dinding lambung dalam suasana asam berperan spesifik untuk...",
    "optionA": "Memecah ikatan protein kompleks menjadi molekul pepton",
    "optionB": "Mengemulsikan lemak makanan di usus",
    "optionC": "Mengubah glukosa menjadi glikogen",
    "optionD": "Menetralkan asam chyme dari lambung",
    "options": [
      {
        "id": "A",
        "text": "Memecah ikatan protein kompleks menjadi molekul pepton"
      },
      {
        "id": "B",
        "text": "Mengemulsikan lemak makanan di usus"
      },
      {
        "id": "C",
        "text": "Mengubah glukosa menjadi glikogen"
      },
      {
        "id": "D",
        "text": "Menetralkan asam chyme dari lambung"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Pepsin berfungsi memecah ikatan protein kompleks menjadi molekul pepton.",
    "tip": "Kenali enzim lambung (pepsin, renin, HCl) dan getah pankreas (amilase, tripsin, lipase).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-058",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Sistem Peredaran Darah Manusia",
    "competency": "Menganalisis peredaran darah besar, darah kecil, dan sel-sel darah",
    "question": "Dalam kajian sistem peredaran darah kardiovaskular manusia MTs, konsep \"Fungsi Sel Darah Merah (Eritrosit)\" memiliki deskripsi ilmiah yang tepat yaitu...",
    "optionA": "Memproduksi antibodi untuk melawan infeksi virus",
    "optionB": "Mengikat oksigen melalui pigmen hemoglobin dari paru-paru untuk diedarkan ke seluruh jaringan tubuh",
    "optionC": "Membekukan darah saat terjadi luka terbuka",
    "optionD": "Menelan bakteri patogen melalui gerakan amuboid",
    "options": [
      {
        "id": "A",
        "text": "Memproduksi antibodi untuk melawan infeksi virus"
      },
      {
        "id": "B",
        "text": "Mengikat oksigen melalui pigmen hemoglobin dari paru-paru untuk diedarkan ke seluruh jaringan tubuh"
      },
      {
        "id": "C",
        "text": "Membekukan darah saat terjadi luka terbuka"
      },
      {
        "id": "D",
        "text": "Menelan bakteri patogen melalui gerakan amuboid"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fungsi Sel Darah Merah (Eritrosit): Mengikat oksigen melalui pigmen hemoglobin dari paru-paru untuk diedarkan ke seluruh jaringan tubuh.",
    "tip": "Kecil: Bilik Kanan -> Paru -> Serambi Kiri; Besar: Bilik Kiri -> Tubuh -> Serambi Kanan.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-059",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Sistem Pernapasan dan Ekskresi (Ginjal)",
    "competency": "Menganalisis tahapan pembentukan urine (filtrasi, reabsorpsi, augmentasi)",
    "question": "Pada fisiologi sistem ekskresi manusia, tahapan proses atau kelainan \"Augmentasi di Tubulus Kontortus Distal (TKD)\" dicirikan oleh...",
    "optionA": "Penyaringan protein darah berberat molekul besar",
    "optionB": "Penyerapan kembali 100% glukosa dari filtrat",
    "optionC": "Pengeluaran zat sisa racun dan kelebihan ion H+ atau kalium menghasilkan urine sesungguhnya",
    "optionD": "Pembentukan asam empedu dari bilirubin",
    "options": [
      {
        "id": "A",
        "text": "Penyaringan protein darah berberat molekul besar"
      },
      {
        "id": "B",
        "text": "Penyerapan kembali 100% glukosa dari filtrat"
      },
      {
        "id": "C",
        "text": "Pengeluaran zat sisa racun dan kelebihan ion H+ atau kalium menghasilkan urine sesungguhnya"
      },
      {
        "id": "D",
        "text": "Pembentukan asam empedu dari bilirubin"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Augmentasi di Tubulus Kontortus Distal (TKD) ditandai oleh: pengeluaran zat sisa racun dan kelebihan ion h+ atau kalium menghasilkan urine sesungguhnya.",
    "tip": "Filtrasi di glomerulus (urine primer), Reabsorpsi di TKP (urine sekunder), Augmentasi di TKD (urine sesungguhnya).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-060",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Pewarisan Sifat dan Bioteknologi",
    "competency": "Menentukan rasio persilangan monohibrid Mendel dan produk bioteknologi pangan",
    "question": "Dalam ranah bioteknologi dan pewarisan sifat materi IPA MTs, penerapan konsep \"Pembuatan nata de coco dari air kelapa\" melibatkan mekanisme...",
    "optionA": "Khamir Saccharomyces ellipsoideus",
    "optionB": "Jamur Penicillium notatum penghasil antibiotik",
    "optionC": "Bakteri Lactobacillus casei usus",
    "optionD": "Bakteri Acetobacter xylinum yang membentuk serat selulosa mikro",
    "options": [
      {
        "id": "A",
        "text": "Khamir Saccharomyces ellipsoideus"
      },
      {
        "id": "B",
        "text": "Jamur Penicillium notatum penghasil antibiotik"
      },
      {
        "id": "C",
        "text": "Bakteri Lactobacillus casei usus"
      },
      {
        "id": "D",
        "text": "Bakteri Acetobacter xylinum yang membentuk serat selulosa mikro"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Pembuatan nata de coco dari air kelapa didasarkan pada prinsip bakteri acetobacter xylinum yang membentuk serat selulosa mikro.",
    "tip": "Kenali mikroorganisme fermentasi konvensional dan teknik kultur jaringan / DNA rekombinan.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-061",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Pengukuran dan Besaran Pokok/Turunan",
    "competency": "Menganalisis hasil pengukuran alat ukur dan satuan SI",
    "question": "Siswa MTs mengukur ketebalan pelat logam uji ke-4 menggunakan jangka sorong. Skala utama tertera angka 6 cm dan garis nonius ke-4 berimpit tepat dengan skala utama. Hasil pengukuran ketebalan pelat tersebut adalah...",
    "optionA": "6.04 cm",
    "optionB": "6.14 cm",
    "optionC": "5.99 cm",
    "optionD": "6.40 cm",
    "options": [
      {
        "id": "A",
        "text": "6.04 cm"
      },
      {
        "id": "B",
        "text": "6.14 cm"
      },
      {
        "id": "C",
        "text": "5.99 cm"
      },
      {
        "id": "D",
        "text": "6.40 cm"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Hasil jangka sorong = skala utama + (garis nonius x 0,01 cm) = 6.04 cm.",
    "tip": "Skala utama + (nonius x 0,01 cm).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-062",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Klasifikasi Materi dan Pemisahan Campuran",
    "competency": "Mengidentifikasi metode pemisahan zat (filtrasi, kromatografi, distilasi)",
    "question": "Pada praktikum kimia madrasah, siswa diminta memisahkan \"minyak atsiri dari daun kayu putih segar\". Teknik pemisahan campuran yang paling tepat dan efisien adalah...",
    "optionA": "Kromatografi gas",
    "optionB": "Distilasi uap air",
    "optionC": "Filtrasi saring",
    "optionD": "Sentrifugasi darah",
    "options": [
      {
        "id": "A",
        "text": "Kromatografi gas"
      },
      {
        "id": "B",
        "text": "Distilasi uap air"
      },
      {
        "id": "C",
        "text": "Filtrasi saring"
      },
      {
        "id": "D",
        "text": "Sentrifugasi darah"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Metode pemisahan yang sesuai untuk minyak atsiri dari daun kayu putih segar adalah Distilasi uap air.",
    "tip": "Pahami prinsip pemisahan zat: ukuran partikel, titik didih, kelarutan, atau sifat kemagnetan.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-063",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Zat Aditif dan Zat Adiktif",
    "competency": "Mengidentifikasi fungsi pengawet, pewarna, dan bahaya zat adiktif",
    "question": "Pada tabel komposisi bahan pangan kemasan kantin madrasah tertera zat \"Aspartam\". Peran utama penambahan zat tersebut ke dalam makanan adalah...",
    "optionA": "Pengental kuah makanan",
    "optionB": "Pewarna merah karmin",
    "optionC": "Pemanis buatan berkalori sangat rendah bagi penderita diabetes",
    "optionD": "Antioksidan minyak goreng",
    "options": [
      {
        "id": "A",
        "text": "Pengental kuah makanan"
      },
      {
        "id": "B",
        "text": "Pewarna merah karmin"
      },
      {
        "id": "C",
        "text": "Pemanis buatan berkalori sangat rendah bagi penderita diabetes"
      },
      {
        "id": "D",
        "text": "Antioksidan minyak goreng"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Zat Aspartam bertindak sebagai pemanis buatan berkalori sangat rendah bagi penderita diabetes.",
    "tip": "Kenali fungsi spesifik pengawet, pemanis, pewarna, dan penyedap rasa.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-064",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Suhu, Pemuaian, dan Kalor",
    "competency": "Menganalisis perpindahan kalor dan penerapan rumus Q = m.c.ΔT",
    "question": "Massa air sebanyak 5 kg bersuhu 20°C dipanaskan oleh pembakar spiritus laboratorium hingga mengalami kenaikan suhu sebesar 28°C. Jika kalor jenis air bernilai 4.200 J/kg°C, jumlah kalor yang diserap air tersebut adalah...",
    "optionA": "592.200 Joule",
    "optionB": "583.800 Joule",
    "optionC": "1.176.000 Joule",
    "optionD": "588.000 Joule",
    "options": [
      {
        "id": "A",
        "text": "592.200 Joule"
      },
      {
        "id": "B",
        "text": "583.800 Joule"
      },
      {
        "id": "C",
        "text": "1.176.000 Joule"
      },
      {
        "id": "D",
        "text": "588.000 Joule"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Q = m . c . ΔT = 5 kg x 4.200 J/kg°C x 28°C = 588.000 Joule.",
    "tip": "Q = m.c.ΔT.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-065",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Gerak Lurus (GLB dan GLBB)",
    "competency": "Menganalisis grafik kecepatan terhadap waktu dan gerak lurus berubah beraturan",
    "question": "Sebuah mobil patroli madrasah bergerak lurus dengan kelajuan awal 16 m/s dan dipercepat secara beraturan dengan percepatan konstan 1 m/s² selama selang waktu 6 sekon. Kelajuan akhir mobil tersebut adalah...",
    "optionA": "22 m/s",
    "optionB": "26 m/s",
    "optionC": "19 m/s",
    "optionD": "17 m/s",
    "options": [
      {
        "id": "A",
        "text": "22 m/s"
      },
      {
        "id": "B",
        "text": "26 m/s"
      },
      {
        "id": "C",
        "text": "19 m/s"
      },
      {
        "id": "D",
        "text": "17 m/s"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Vt = Vo + a.t = 16 + (1 x 6) = 22 m/s.",
    "tip": "Rumus GLBB dipercepat: Vt = Vo + at.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-066",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Hukum Newton tentang Gerak",
    "competency": "Menerapkan Hukum I, II, dan III Newton pada aktivitas sehari-hari",
    "question": "Perhatikan fenomena gerak sehari-hari berikut: \"Koin yang diletakkan di atas kertas karton di atas mulut gelas tetap jatuh ke dalam gelas saat kertas disentak cepat\". Fenomena fisik tersebut secara tepat membuktikan berlakunya...",
    "optionA": "Hukum Gravitasi Bumi semata",
    "optionB": "Hukum I Newton (benda cenderung mempertahankan keadaan diamnya)",
    "optionC": "Hukum II Newton percepatan sudut",
    "optionD": "Hukum Termodinamika pertama",
    "options": [
      {
        "id": "A",
        "text": "Hukum Gravitasi Bumi semata"
      },
      {
        "id": "B",
        "text": "Hukum I Newton (benda cenderung mempertahankan keadaan diamnya)"
      },
      {
        "id": "C",
        "text": "Hukum II Newton percepatan sudut"
      },
      {
        "id": "D",
        "text": "Hukum Termodinamika pertama"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fenomena tersebut merupakan aplikasi nyata dari Hukum I Newton (benda cenderung mempertahankan keadaan diamnya).",
    "tip": "Hukum I = inersia; Hukum II = F=ma; Hukum III = aksi reaksi sama besar berlawanan arah.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-067",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Usaha, Energi, dan Pesawat Sederhana",
    "competency": "Menghitung keuntungan mekanik tuas, katrol, dan bidang miring",
    "question": "Untuk memindahkan beban seberat 500 N, seorang laboran madrasah menggunakan alat pemindah drum air. Jika panjang lengan kuasa 5 meter dan panjang lengan beban 1 meter, besar gaya kuasa minimum yang diperlukan adalah...",
    "optionA": "140 N",
    "optionB": "75 N",
    "optionC": "100 N",
    "optionD": "500 N",
    "options": [
      {
        "id": "A",
        "text": "140 N"
      },
      {
        "id": "B",
        "text": "75 N"
      },
      {
        "id": "C",
        "text": "100 N"
      },
      {
        "id": "D",
        "text": "500 N"
      }
    ],
    "correctAnswer": "C",
    "explanation": "W x lb = F x lk => F = (W x lb) / lk = (500 x 1) / 5 = 100 N.",
    "tip": "W x lb = F x lk.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-068",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Tekanan Hidrostatis dan Hukum Archimedes",
    "competency": "Menganalisis gaya angkat zat cair dan kondisi terapung, melayang, tenggelam",
    "question": "Seorang penyelam melakukan observasi biota laut pada kedalaman 12 meter di bawah permukaan laut (massa jenis air laut diasumsikan 1.000 kg/m³, percepatan gravitasi g = 10 m/s²). Tekanan hidrostatis yang dialami penyelam tersebut adalah...",
    "optionA": "130.000 Pa",
    "optionB": "110.000 Pa",
    "optionC": "240.000 Pa",
    "optionD": "120.000 Pa",
    "options": [
      {
        "id": "A",
        "text": "130.000 Pa"
      },
      {
        "id": "B",
        "text": "110.000 Pa"
      },
      {
        "id": "C",
        "text": "240.000 Pa"
      },
      {
        "id": "D",
        "text": "120.000 Pa"
      }
    ],
    "correctAnswer": "D",
    "explanation": "P = ρ . g . h = 1.000 x 10 x 12 = 120000 Pa.",
    "tip": "P = ρgh.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-069",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Getaran, Gelombang, dan Resonansi Bunyi",
    "competency": "Menghitung cepat rambat gelombang v = λ.f dan frekuensi getaran",
    "question": "Pada pengujian osilasi di laboratorium, terukur gelombang seismik gempa ringan memiliki panjang gelombang 5 meter dan frekuensi osilasi 30 Hz. Cepat rambat gelombang tersebut bernilai...",
    "optionA": "150 m/s",
    "optionB": "170 m/s",
    "optionC": "135 m/s",
    "optionD": "6.0 m/s",
    "options": [
      {
        "id": "A",
        "text": "150 m/s"
      },
      {
        "id": "B",
        "text": "170 m/s"
      },
      {
        "id": "C",
        "text": "135 m/s"
      },
      {
        "id": "D",
        "text": "6.0 m/s"
      }
    ],
    "correctAnswer": "A",
    "explanation": "v = λ . f = 5 x 30 = 150 m/s.",
    "tip": "v = λ x f.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-070",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Cahaya dan Pembentukan Bayangan Cermin/Lensa",
    "competency": "Menganalisis pembentukan bayangan pada cermin cekung dan lup/mikroskop",
    "question": "Sebuah benda lilin diletakkan pada jarak 24 cm di depan lensa cembung lup yang mempunyai jarak titik fokus 8 cm. Jarak bayangan nyata yang terbentuk di depan cermin adalah...",
    "optionA": "18.0 cm",
    "optionB": "12.0 cm",
    "optionC": "7.0 cm",
    "optionD": "16.0 cm",
    "options": [
      {
        "id": "A",
        "text": "18.0 cm"
      },
      {
        "id": "B",
        "text": "12.0 cm"
      },
      {
        "id": "C",
        "text": "7.0 cm"
      },
      {
        "id": "D",
        "text": "16.0 cm"
      }
    ],
    "correctAnswer": "B",
    "explanation": "1/s' = 1/f - 1/s = 1/8 - 1/24 => s' = 12.0 cm.",
    "tip": "1/f = 1/s + 1/s'.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-071",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Listrik Statis dan Hukum Coulomb",
    "competency": "Menganalisis interaksi muatan listrik dan medan listrik",
    "question": "Kaca yang digosok dengan kain sutera akan bermuatan positif karena...",
    "optionA": "Proton dari kain sutera berpindah ke kaca",
    "optionB": "Kaca menyerap ion positif dari udara bebas",
    "optionC": "Elektron dari batang kaca berpindah ke kain sutera",
    "optionD": "Kain sutera melepaskan neutron ke kaca",
    "options": [
      {
        "id": "A",
        "text": "Proton dari kain sutera berpindah ke kaca"
      },
      {
        "id": "B",
        "text": "Kaca menyerap ion positif dari udara bebas"
      },
      {
        "id": "C",
        "text": "Elektron dari batang kaca berpindah ke kain sutera"
      },
      {
        "id": "D",
        "text": "Kain sutera melepaskan neutron ke kaca"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kaca melepaskan elektron ke kain sutera sehingga kaca kekurangan elektron (positif).",
    "tip": "Pahami Hukum Coulomb F = k.q1.q2/r² dan prinsip perpindahan elektron.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-072",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Listrik Dinamis dan Rangkaian Seri-Paralel",
    "competency": "Menghitung hambatan pengganti dan kuat arus menggunakan Hukum Ohm",
    "question": "Pada papan rangkaian praktikum elektronika madrasah, dua hambatan geser paralel masing-masing memiliki resistansi 20 Ω dan 30 Ω dirangkai paralel. Nilai resistansi pengganti dari cabang tersebut adalah...",
    "optionA": "14.0 Ω",
    "optionB": "11.0 Ω",
    "optionC": "50 Ω",
    "optionD": "12.0 Ω",
    "options": [
      {
        "id": "A",
        "text": "14.0 Ω"
      },
      {
        "id": "B",
        "text": "11.0 Ω"
      },
      {
        "id": "C",
        "text": "50 Ω"
      },
      {
        "id": "D",
        "text": "12.0 Ω"
      }
    ],
    "correctAnswer": "D",
    "explanation": "1/Rp = 1/20 + 1/30 => Rp = (20 x 30) / (20 + 30) = 12.0 Ω.",
    "tip": "Rp = (R1 x R2) / (R1 + R2).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-073",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Kemagnetan dan Induksi Elektromagnetik",
    "competency": "Menganalisis cara pembuatan magnet dan prinsip transformator step-up/step-down",
    "question": "Sebuah transformator step-down adaptor memiliki 1000 lilitan primer dan 250 lilitan sekunder. Jika kumparan primer dihubungkan ke sumber tegangan AC sebesar 200 Volt, maka tegangan sekunder yang dihasilkan adalah...",
    "optionA": "50.0 Volt",
    "optionB": "65.0 Volt",
    "optionC": "40.0 Volt",
    "optionD": "400 Volt",
    "options": [
      {
        "id": "A",
        "text": "50.0 Volt"
      },
      {
        "id": "B",
        "text": "65.0 Volt"
      },
      {
        "id": "C",
        "text": "40.0 Volt"
      },
      {
        "id": "D",
        "text": "400 Volt"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Vs = (Vp x Ns) / Np = (200 x 250) / 1000 = 50.0 Volt.",
    "tip": "Vp / Vs = Np / Ns.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-074",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Tata Surya dan Fenomena Gerhana",
    "competency": "Menganalisis dampak revolusi bumi, fase bulan, dan pasang surut air laut",
    "question": "Dalam studi astronomi dan kebumian, fenomena alam \"Pergantian empat musim di wilayah subtropis\" disebabkan secara ilmiah oleh...",
    "optionA": "Perbedaan kecepatan rotasi harian bumi di kutub",
    "optionB": "Kemiringan sumbu rotasi bumi 23,5° saat berevolusi mengelilingi matahari",
    "optionC": "Perubahan jarak bumi ke bulan setiap kuartal",
    "optionD": "Pergeseran medan magnet geomagnetik bumi",
    "options": [
      {
        "id": "A",
        "text": "Perbedaan kecepatan rotasi harian bumi di kutub"
      },
      {
        "id": "B",
        "text": "Kemiringan sumbu rotasi bumi 23,5° saat berevolusi mengelilingi matahari"
      },
      {
        "id": "C",
        "text": "Perubahan jarak bumi ke bulan setiap kuartal"
      },
      {
        "id": "D",
        "text": "Pergeseran medan magnet geomagnetik bumi"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fenomena Pergantian empat musim di wilayah subtropis terjadi karena kemiringan sumbu rotasi bumi 23,5° saat berevolusi mengelilingi matahari.",
    "tip": "Pahami dampak rotasi bumi, revolusi bumi, dan posisi matahari-bulan-bumi.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-075",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Struktur Sel dan Mikroskop",
    "competency": "Membedakan organel sel tumbuhan dan sel hewan serta fungsinya",
    "question": "Pengamatan preparat jaringan tumbuhan di bawah mikroskop laboratorium madrasah menampakkan organel \"Lisosom\". Fungsi biologis utama organel tersebut adalah...",
    "optionA": "Membelah sel secara mitosis spontan tanpa DNA",
    "optionB": "Mengikat molekul hemoglobin pembawa gas pernapasan",
    "optionC": "Pencernaan intraseluler senyawa makro dan fagositosis zat asing dengan enzim hidrolitik",
    "optionD": "Menghasilkan pigmen melanin pelindung ultraviolet",
    "options": [
      {
        "id": "A",
        "text": "Membelah sel secara mitosis spontan tanpa DNA"
      },
      {
        "id": "B",
        "text": "Mengikat molekul hemoglobin pembawa gas pernapasan"
      },
      {
        "id": "C",
        "text": "Pencernaan intraseluler senyawa makro dan fagositosis zat asing dengan enzim hidrolitik"
      },
      {
        "id": "D",
        "text": "Menghasilkan pigmen melanin pelindung ultraviolet"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Organel Lisosom memiliki fungsi esensial yaitu pencernaan intraseluler senyawa makro dan fagositosis zat asing dengan enzim hidrolitik.",
    "tip": "Kenali organel khas sel hewan (sentriol, lisosom) dan sel tumbuhan (dinding sel, kloroplas, vakuola besar).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-076",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Sistem Gerak Manusia (Tulang & Sendi)",
    "competency": "Mengidentifikasi jenis sendi diartrosis dan kelainan pada tulang manusia",
    "question": "Dalam materi sistem gerak manusia MTs, konsep biologis \"Sendi Pelana\" didefinisikan secara medis dan anatomis sebagai...",
    "optionA": "Gerakan memutar penuh 360 derajat",
    "optionB": "Gerakan satu arah seperti daun pintu",
    "optionC": "Gerakan membengkokkan tulang selangka",
    "optionD": "Hubungan antara tulang telapak tangan dengan pangkal ibu jari yang memungkinkan gerakan ke dua arah",
    "options": [
      {
        "id": "A",
        "text": "Gerakan memutar penuh 360 derajat"
      },
      {
        "id": "B",
        "text": "Gerakan satu arah seperti daun pintu"
      },
      {
        "id": "C",
        "text": "Gerakan membengkokkan tulang selangka"
      },
      {
        "id": "D",
        "text": "Hubungan antara tulang telapak tangan dengan pangkal ibu jari yang memungkinkan gerakan ke dua arah"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Sendi Pelana adalah hubungan antara tulang telapak tangan dengan pangkal ibu jari yang memungkinkan gerakan ke dua arah.",
    "tip": "Pahami pembagian sendi diartrosis dan jenis kelainan kelengkungan tulang belakang.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-077",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Sistem Pencernaan dan Enzim Manusia",
    "competency": "Menganalisis kerja enzim pencernaan di lambung dan usus halus",
    "question": "Pada sistem digesti manusia, zat atau enzim \"Lipase Pankreas\" yang dihasilkan di Pankreas dan disalurkan ke duodenum berperan spesifik untuk...",
    "optionA": "Menghidrolisis lemak yang telah terkelarut menjadi asam lemak dan gliserol",
    "optionB": "Memecah protein menjadi asam amino",
    "optionC": "Mengikat vitamin B12 di lambung",
    "optionD": "Mengubah maltosa menjadi glukosa murni",
    "options": [
      {
        "id": "A",
        "text": "Menghidrolisis lemak yang telah terkelarut menjadi asam lemak dan gliserol"
      },
      {
        "id": "B",
        "text": "Memecah protein menjadi asam amino"
      },
      {
        "id": "C",
        "text": "Mengikat vitamin B12 di lambung"
      },
      {
        "id": "D",
        "text": "Mengubah maltosa menjadi glukosa murni"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Lipase Pankreas berfungsi menghidrolisis lemak yang telah terkelarut menjadi asam lemak dan gliserol.",
    "tip": "Kenali enzim lambung (pepsin, renin, HCl) dan getah pankreas (amilase, tripsin, lipase).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-078",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Sistem Peredaran Darah Manusia",
    "competency": "Menganalisis peredaran darah besar, darah kecil, dan sel-sel darah",
    "question": "Dalam kajian sistem peredaran darah kardiovaskular manusia MTs, konsep \"Fungsi Keping Darah (Trombosit)\" memiliki deskripsi ilmiah yang tepat yaitu...",
    "optionA": "Mengangkut sari makanan berupa asam amino",
    "optionB": "Menginisiasi proses pembekuan darah dengan melepaskan trombokinase saat terjadi luka robek",
    "optionC": "Mengatur tekanan osmosis plasma darah",
    "optionD": "Menghancurkan eritrosit tua di limpa",
    "options": [
      {
        "id": "A",
        "text": "Mengangkut sari makanan berupa asam amino"
      },
      {
        "id": "B",
        "text": "Menginisiasi proses pembekuan darah dengan melepaskan trombokinase saat terjadi luka robek"
      },
      {
        "id": "C",
        "text": "Mengatur tekanan osmosis plasma darah"
      },
      {
        "id": "D",
        "text": "Menghancurkan eritrosit tua di limpa"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fungsi Keping Darah (Trombosit): Menginisiasi proses pembekuan darah dengan melepaskan trombokinase saat terjadi luka robek.",
    "tip": "Kecil: Bilik Kanan -> Paru -> Serambi Kiri; Besar: Bilik Kiri -> Tubuh -> Serambi Kanan.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-079",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Sistem Pernapasan dan Ekskresi (Ginjal)",
    "competency": "Menganalisis tahapan pembentukan urine (filtrasi, reabsorpsi, augmentasi)",
    "question": "Pada fisiologi sistem ekskresi manusia, tahapan proses atau kelainan \"Kelainan Albuminuria pada Ginjal\" dicirikan oleh...",
    "optionA": "Tingginya kadar gula glukosa dalam urine akibat kekurangan insulin",
    "optionB": "Produksi urine sangat berlimpah karena kekurangan hormon ADH",
    "optionC": "Adanya kandungan molekul protein albumin di dalam urine akibat kerusakan pada glomerulus",
    "optionD": "Penyumbatan saluran ureter oleh endapan batu kalsium oksalat",
    "options": [
      {
        "id": "A",
        "text": "Tingginya kadar gula glukosa dalam urine akibat kekurangan insulin"
      },
      {
        "id": "B",
        "text": "Produksi urine sangat berlimpah karena kekurangan hormon ADH"
      },
      {
        "id": "C",
        "text": "Adanya kandungan molekul protein albumin di dalam urine akibat kerusakan pada glomerulus"
      },
      {
        "id": "D",
        "text": "Penyumbatan saluran ureter oleh endapan batu kalsium oksalat"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kelainan Albuminuria pada Ginjal ditandai oleh: adanya kandungan molekul protein albumin di dalam urine akibat kerusakan pada glomerulus.",
    "tip": "Filtrasi di glomerulus (urine primer), Reabsorpsi di TKP (urine sekunder), Augmentasi di TKD (urine sesungguhnya).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-080",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Pewarisan Sifat dan Bioteknologi",
    "competency": "Menentukan rasio persilangan monohibrid Mendel dan produk bioteknologi pangan",
    "question": "Dalam ranah bioteknologi dan pewarisan sifat materi IPA MTs, penerapan konsep \"Fermentasi tapai singkong manis\" melibatkan mekanisme...",
    "optionA": "Bakteri Clostridium botulinum kaleng",
    "optionB": "Jamur Rhizopus stolonifer pembusuk roti",
    "optionC": "Bakteri Pseudomonas putida pengurai minyak",
    "optionD": "Khamir Saccharomyces cerevisiae yang mengubah pati menjadi alkohol dan gula",
    "options": [
      {
        "id": "A",
        "text": "Bakteri Clostridium botulinum kaleng"
      },
      {
        "id": "B",
        "text": "Jamur Rhizopus stolonifer pembusuk roti"
      },
      {
        "id": "C",
        "text": "Bakteri Pseudomonas putida pengurai minyak"
      },
      {
        "id": "D",
        "text": "Khamir Saccharomyces cerevisiae yang mengubah pati menjadi alkohol dan gula"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Fermentasi tapai singkong manis didasarkan pada prinsip khamir saccharomyces cerevisiae yang mengubah pati menjadi alkohol dan gula.",
    "tip": "Kenali mikroorganisme fermentasi konvensional dan teknik kultur jaringan / DNA rekombinan.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-081",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Pengukuran dan Besaran Pokok/Turunan",
    "competency": "Menganalisis hasil pengukuran alat ukur dan satuan SI",
    "question": "Siswa MTs mengukur ketebalan pelat logam uji ke-5 menggunakan jangka sorong. Skala utama tertera angka 7 cm dan garis nonius ke-7 berimpit tepat dengan skala utama. Hasil pengukuran ketebalan pelat tersebut adalah...",
    "optionA": "7.07 cm",
    "optionB": "7.17 cm",
    "optionC": "7.02 cm",
    "optionD": "7.70 cm",
    "options": [
      {
        "id": "A",
        "text": "7.07 cm"
      },
      {
        "id": "B",
        "text": "7.17 cm"
      },
      {
        "id": "C",
        "text": "7.02 cm"
      },
      {
        "id": "D",
        "text": "7.70 cm"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Hasil jangka sorong = skala utama + (garis nonius x 0,01 cm) = 7.07 cm.",
    "tip": "Skala utama + (nonius x 0,01 cm).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-082",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Klasifikasi Materi dan Pemisahan Campuran",
    "competency": "Mengidentifikasi metode pemisahan zat (filtrasi, kromatografi, distilasi)",
    "question": "Pada praktikum kimia madrasah, siswa diminta memisahkan \"partikel kapur keruh dari suspensi air kapur\". Teknik pemisahan campuran yang paling tepat dan efisien adalah...",
    "optionA": "Sublimasi panas",
    "optionB": "Filtrasi menggunakan kertas saring berpori",
    "optionC": "Destilasi fraksinasi",
    "optionD": "Evaporasi matahari",
    "options": [
      {
        "id": "A",
        "text": "Sublimasi panas"
      },
      {
        "id": "B",
        "text": "Filtrasi menggunakan kertas saring berpori"
      },
      {
        "id": "C",
        "text": "Destilasi fraksinasi"
      },
      {
        "id": "D",
        "text": "Evaporasi matahari"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Metode pemisahan yang sesuai untuk partikel kapur keruh dari suspensi air kapur adalah Filtrasi menggunakan kertas saring berpori.",
    "tip": "Pahami prinsip pemisahan zat: ukuran partikel, titik didih, kelarutan, atau sifat kemagnetan.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-083",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Zat Aditif dan Zat Adiktif",
    "competency": "Mengidentifikasi fungsi pengawet, pewarna, dan bahaya zat adiktif",
    "question": "Pada tabel komposisi bahan pangan kemasan kantin madrasah tertera zat \"Asam Sitrat\". Peran utama penambahan zat tersebut ke dalam makanan adalah...",
    "optionA": "Pewarna biru makanan",
    "optionB": "Penguat aroma vanili",
    "optionC": "Pengatur tingkat keasaman sekaligus memberi cita rasa segar buah",
    "optionD": "Bahan pemutih tepung",
    "options": [
      {
        "id": "A",
        "text": "Pewarna biru makanan"
      },
      {
        "id": "B",
        "text": "Penguat aroma vanili"
      },
      {
        "id": "C",
        "text": "Pengatur tingkat keasaman sekaligus memberi cita rasa segar buah"
      },
      {
        "id": "D",
        "text": "Bahan pemutih tepung"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Zat Asam Sitrat bertindak sebagai pengatur tingkat keasaman sekaligus memberi cita rasa segar buah.",
    "tip": "Kenali fungsi spesifik pengawet, pemanis, pewarna, dan penyedap rasa.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-084",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Suhu, Pemuaian, dan Kalor",
    "competency": "Menganalisis perpindahan kalor dan penerapan rumus Q = m.c.ΔT",
    "question": "Massa air sebanyak 6 kg bersuhu 20°C dipanaskan oleh pembakar spiritus laboratorium hingga mengalami kenaikan suhu sebesar 32°C. Jika kalor jenis air bernilai 4.200 J/kg°C, jumlah kalor yang diserap air tersebut adalah...",
    "optionA": "810.600 Joule",
    "optionB": "802.200 Joule",
    "optionC": "1.612.800 Joule",
    "optionD": "806.400 Joule",
    "options": [
      {
        "id": "A",
        "text": "810.600 Joule"
      },
      {
        "id": "B",
        "text": "802.200 Joule"
      },
      {
        "id": "C",
        "text": "1.612.800 Joule"
      },
      {
        "id": "D",
        "text": "806.400 Joule"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Q = m . c . ΔT = 6 kg x 4.200 J/kg°C x 32°C = 806.400 Joule.",
    "tip": "Q = m.c.ΔT.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-085",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Gerak Lurus (GLB dan GLBB)",
    "competency": "Menganalisis grafik kecepatan terhadap waktu dan gerak lurus berubah beraturan",
    "question": "Sebuah mobil patroli madrasah bergerak lurus dengan kelajuan awal 19 m/s dan dipercepat secara beraturan dengan percepatan konstan 2 m/s² selama selang waktu 7 sekon. Kelajuan akhir mobil tersebut adalah...",
    "optionA": "33 m/s",
    "optionB": "37 m/s",
    "optionC": "30 m/s",
    "optionD": "21 m/s",
    "options": [
      {
        "id": "A",
        "text": "33 m/s"
      },
      {
        "id": "B",
        "text": "37 m/s"
      },
      {
        "id": "C",
        "text": "30 m/s"
      },
      {
        "id": "D",
        "text": "21 m/s"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Vt = Vo + a.t = 19 + (2 x 7) = 33 m/s.",
    "tip": "Rumus GLBB dipercepat: Vt = Vo + at.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-086",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Hukum Newton tentang Gerak",
    "competency": "Menerapkan Hukum I, II, dan III Newton pada aktivitas sehari-hari",
    "question": "Perhatikan fenomena gerak sehari-hari berikut: \"Roket penelitian madrasah meluncur vertikal ke angkasa akibat semburan gas panas berkecepatan tinggi ke arah bawah\". Fenomena fisik tersebut secara tepat membuktikan berlakunya...",
    "optionA": "Hukum I Newton tentang gerak melingkar",
    "optionB": "Hukum III Newton tentang gaya dorong reaksi fluida",
    "optionC": "Hukum Boyle tentang gas ideal",
    "optionD": "Hukum Ohm tentang arus listrik",
    "options": [
      {
        "id": "A",
        "text": "Hukum I Newton tentang gerak melingkar"
      },
      {
        "id": "B",
        "text": "Hukum III Newton tentang gaya dorong reaksi fluida"
      },
      {
        "id": "C",
        "text": "Hukum Boyle tentang gas ideal"
      },
      {
        "id": "D",
        "text": "Hukum Ohm tentang arus listrik"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fenomena tersebut merupakan aplikasi nyata dari Hukum III Newton tentang gaya dorong reaksi fluida.",
    "tip": "Hukum I = inersia; Hukum II = F=ma; Hukum III = aksi reaksi sama besar berlawanan arah.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-087",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Usaha, Energi, dan Pesawat Sederhana",
    "competency": "Menghitung keuntungan mekanik tuas, katrol, dan bidang miring",
    "question": "Untuk memindahkan beban seberat 360 N, seorang laboran madrasah menggunakan tuas pencabut paku berkarat. Jika panjang lengan kuasa 3 meter dan panjang lengan beban 1 meter, besar gaya kuasa minimum yang diperlukan adalah...",
    "optionA": "160 N",
    "optionB": "95 N",
    "optionC": "120 N",
    "optionD": "360 N",
    "options": [
      {
        "id": "A",
        "text": "160 N"
      },
      {
        "id": "B",
        "text": "95 N"
      },
      {
        "id": "C",
        "text": "120 N"
      },
      {
        "id": "D",
        "text": "360 N"
      }
    ],
    "correctAnswer": "C",
    "explanation": "W x lb = F x lk => F = (W x lb) / lk = (360 x 1) / 3 = 120 N.",
    "tip": "W x lb = F x lk.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-088",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Tekanan Hidrostatis dan Hukum Archimedes",
    "competency": "Menganalisis gaya angkat zat cair dan kondisi terapung, melayang, tenggelam",
    "question": "Seorang penyelam melakukan observasi biota laut pada kedalaman 15 meter di bawah permukaan laut (massa jenis air laut diasumsikan 1.000 kg/m³, percepatan gravitasi g = 10 m/s²). Tekanan hidrostatis yang dialami penyelam tersebut adalah...",
    "optionA": "160.000 Pa",
    "optionB": "140.000 Pa",
    "optionC": "300.000 Pa",
    "optionD": "150.000 Pa",
    "options": [
      {
        "id": "A",
        "text": "160.000 Pa"
      },
      {
        "id": "B",
        "text": "140.000 Pa"
      },
      {
        "id": "C",
        "text": "300.000 Pa"
      },
      {
        "id": "D",
        "text": "150.000 Pa"
      }
    ],
    "correctAnswer": "D",
    "explanation": "P = ρ . g . h = 1.000 x 10 x 15 = 150000 Pa.",
    "tip": "P = ρgh.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-089",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Getaran, Gelombang, dan Resonansi Bunyi",
    "competency": "Menghitung cepat rambat gelombang v = λ.f dan frekuensi getaran",
    "question": "Pada pengujian osilasi di laboratorium, terukur gelombang transversal kawat sonometer memiliki panjang gelombang 3 meter dan frekuensi osilasi 80 Hz. Cepat rambat gelombang tersebut bernilai...",
    "optionA": "240 m/s",
    "optionB": "260 m/s",
    "optionC": "225 m/s",
    "optionD": "26.7 m/s",
    "options": [
      {
        "id": "A",
        "text": "240 m/s"
      },
      {
        "id": "B",
        "text": "260 m/s"
      },
      {
        "id": "C",
        "text": "225 m/s"
      },
      {
        "id": "D",
        "text": "26.7 m/s"
      }
    ],
    "correctAnswer": "A",
    "explanation": "v = λ . f = 3 x 80 = 240 m/s.",
    "tip": "v = λ x f.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-090",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Cahaya dan Pembentukan Bayangan Cermin/Lensa",
    "competency": "Menganalisis pembentukan bayangan pada cermin cekung dan lup/mikroskop",
    "question": "Sebuah benda lilin diletakkan pada jarak 40 cm di depan cermin cekung proyektor yang mempunyai jarak titik fokus 20 cm. Jarak bayangan nyata yang terbentuk di depan cermin adalah...",
    "optionA": "46.0 cm",
    "optionB": "40.0 cm",
    "optionC": "35.0 cm",
    "optionD": "40.0 cm",
    "options": [
      {
        "id": "A",
        "text": "46.0 cm"
      },
      {
        "id": "B",
        "text": "40.0 cm"
      },
      {
        "id": "C",
        "text": "35.0 cm"
      },
      {
        "id": "D",
        "text": "40.0 cm"
      }
    ],
    "correctAnswer": "B",
    "explanation": "1/s' = 1/f - 1/s = 1/20 - 1/40 => s' = 40.0 cm.",
    "tip": "1/f = 1/s + 1/s'.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-091",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Listrik Statis dan Hukum Coulomb",
    "competency": "Menganalisis interaksi muatan listrik dan medan listrik",
    "question": "Bagian daun elektroskop yang awalnya kuncup akan mekar saat didekati benda bermuatan listrik karena...",
    "optionA": "Kedua daun elektroskop bermuatan berlawanan sehingga tarik-menarik",
    "optionB": "Adanya kenaikan temperatur pada kepala elektroskop",
    "optionC": "Kedua daun elektroskop memperoleh muatan sejenis sehingga saling tolak-menolak",
    "optionD": "Gaya gravitasi bumi pada elektroskop berkurang",
    "options": [
      {
        "id": "A",
        "text": "Kedua daun elektroskop bermuatan berlawanan sehingga tarik-menarik"
      },
      {
        "id": "B",
        "text": "Adanya kenaikan temperatur pada kepala elektroskop"
      },
      {
        "id": "C",
        "text": "Kedua daun elektroskop memperoleh muatan sejenis sehingga saling tolak-menolak"
      },
      {
        "id": "D",
        "text": "Gaya gravitasi bumi pada elektroskop berkurang"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Muatan sejenis yang berkumpul pada kedua keping daun menyebabkan gaya tolak-menolak.",
    "tip": "Pahami Hukum Coulomb F = k.q1.q2/r² dan prinsip perpindahan elektron.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-092",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Listrik Dinamis dan Rangkaian Seri-Paralel",
    "competency": "Menghitung hambatan pengganti dan kuat arus menggunakan Hukum Ohm",
    "question": "Pada papan rangkaian praktikum elektronika madrasah, dua kumparan kawat paralel masing-masing memiliki resistansi 12 Ω dan 24 Ω dirangkai paralel. Nilai resistansi pengganti dari cabang tersebut adalah...",
    "optionA": "10.0 Ω",
    "optionB": "7.0 Ω",
    "optionC": "36 Ω",
    "optionD": "8.0 Ω",
    "options": [
      {
        "id": "A",
        "text": "10.0 Ω"
      },
      {
        "id": "B",
        "text": "7.0 Ω"
      },
      {
        "id": "C",
        "text": "36 Ω"
      },
      {
        "id": "D",
        "text": "8.0 Ω"
      }
    ],
    "correctAnswer": "D",
    "explanation": "1/Rp = 1/12 + 1/24 => Rp = (12 x 24) / (12 + 24) = 8.0 Ω.",
    "tip": "Rp = (R1 x R2) / (R1 + R2).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-093",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Kemagnetan dan Induksi Elektromagnetik",
    "competency": "Menganalisis cara pembuatan magnet dan prinsip transformator step-up/step-down",
    "question": "Sebuah transformator step-up penaik tegangan memiliki 400 lilitan primer dan 1200 lilitan sekunder. Jika kumparan primer dihubungkan ke sumber tegangan AC sebesar 100 Volt, maka tegangan sekunder yang dihasilkan adalah...",
    "optionA": "300.0 Volt",
    "optionB": "315.0 Volt",
    "optionC": "290.0 Volt",
    "optionD": "200 Volt",
    "options": [
      {
        "id": "A",
        "text": "300.0 Volt"
      },
      {
        "id": "B",
        "text": "315.0 Volt"
      },
      {
        "id": "C",
        "text": "290.0 Volt"
      },
      {
        "id": "D",
        "text": "200 Volt"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Vs = (Vp x Ns) / Np = (100 x 1200) / 400 = 300.0 Volt.",
    "tip": "Vp / Vs = Np / Ns.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-094",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Tata Surya dan Fenomena Gerhana",
    "competency": "Menganalisis dampak revolusi bumi, fase bulan, dan pasang surut air laut",
    "question": "Dalam studi astronomi dan kebumian, fenomena alam \"Pasang Perbani (Neap Tide)\" disebabkan secara ilmiah oleh...",
    "optionA": "Posisi bulan dan matahari berada pada satu garis lurus 180°",
    "optionB": "Posisi bulan, bumi, dan matahari membentuk sudut 90° (tegak lurus) sehingga gaya tarik gravitasi saling mengurangi",
    "optionC": "Gravitasi matahari menarik air laut ke kutub utara",
    "optionD": "Bulan purnama memicu gelombang seismik laut",
    "options": [
      {
        "id": "A",
        "text": "Posisi bulan dan matahari berada pada satu garis lurus 180°"
      },
      {
        "id": "B",
        "text": "Posisi bulan, bumi, dan matahari membentuk sudut 90° (tegak lurus) sehingga gaya tarik gravitasi saling mengurangi"
      },
      {
        "id": "C",
        "text": "Gravitasi matahari menarik air laut ke kutub utara"
      },
      {
        "id": "D",
        "text": "Bulan purnama memicu gelombang seismik laut"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fenomena Pasang Perbani (Neap Tide) terjadi karena posisi bulan, bumi, dan matahari membentuk sudut 90° (tegak lurus) sehingga gaya tarik gravitasi saling mengurangi.",
    "tip": "Pahami dampak rotasi bumi, revolusi bumi, dan posisi matahari-bulan-bumi.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-095",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Struktur Sel dan Mikroskop",
    "competency": "Membedakan organel sel tumbuhan dan sel hewan serta fungsinya",
    "question": "Pengamatan preparat jaringan tumbuhan di bawah mikroskop laboratorium madrasah menampakkan organel \"Ribosom\". Fungsi biologis utama organel tersebut adalah...",
    "optionA": "Membelah sel secara mitosis spontan tanpa DNA",
    "optionB": "Mengikat molekul hemoglobin pembawa gas pernapasan",
    "optionC": "Sintesis rantai polipeptida protein dari instruksi mRNA",
    "optionD": "Menghasilkan pigmen melanin pelindung ultraviolet",
    "options": [
      {
        "id": "A",
        "text": "Membelah sel secara mitosis spontan tanpa DNA"
      },
      {
        "id": "B",
        "text": "Mengikat molekul hemoglobin pembawa gas pernapasan"
      },
      {
        "id": "C",
        "text": "Sintesis rantai polipeptida protein dari instruksi mRNA"
      },
      {
        "id": "D",
        "text": "Menghasilkan pigmen melanin pelindung ultraviolet"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Organel Ribosom memiliki fungsi esensial yaitu sintesis rantai polipeptida protein dari instruksi mrna.",
    "tip": "Kenali organel khas sel hewan (sentriol, lisosom) dan sel tumbuhan (dinding sel, kloroplas, vakuola besar).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-096",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Sistem Gerak Manusia (Tulang & Sendi)",
    "competency": "Mengidentifikasi jenis sendi diartrosis dan kelainan pada tulang manusia",
    "question": "Dalam materi sistem gerak manusia MTs, konsep biologis \"Kelainan Lordosis\" didefinisikan secara medis dan anatomis sebagai...",
    "optionA": "Tulang belakang bengkok ke arah samping kiri/kanan",
    "optionB": "Tulang punggung bungkuk ke arah belakang",
    "optionC": "Pengurangan massa kalsium pada persendian",
    "optionD": "Kondisi ruas tulang belakang melengkung berlebihan ke arah depan di daerah pinggang",
    "options": [
      {
        "id": "A",
        "text": "Tulang belakang bengkok ke arah samping kiri/kanan"
      },
      {
        "id": "B",
        "text": "Tulang punggung bungkuk ke arah belakang"
      },
      {
        "id": "C",
        "text": "Pengurangan massa kalsium pada persendian"
      },
      {
        "id": "D",
        "text": "Kondisi ruas tulang belakang melengkung berlebihan ke arah depan di daerah pinggang"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kelainan Lordosis adalah kondisi ruas tulang belakang melengkung berlebihan ke arah depan di daerah pinggang.",
    "tip": "Pahami pembagian sendi diartrosis dan jenis kelainan kelengkungan tulang belakang.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-097",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Sistem Pencernaan dan Enzim Manusia",
    "competency": "Menganalisis kerja enzim pencernaan di lambung dan usus halus",
    "question": "Pada sistem digesti manusia, zat atau enzim \"Asam Klorida (HCl)\" yang dihasilkan di Sel parietal mukosa lambung berperan spesifik untuk...",
    "optionA": "Menciptakan suasana asam untuk membunuh patogen dan mengaktifkan pepsinogen",
    "optionB": "Menghancurkan batu empedu di hati",
    "optionC": "Mengabsorpsi molekul air pada feses",
    "optionD": "Mengemulsi kolesterol darah",
    "options": [
      {
        "id": "A",
        "text": "Menciptakan suasana asam untuk membunuh patogen dan mengaktifkan pepsinogen"
      },
      {
        "id": "B",
        "text": "Menghancurkan batu empedu di hati"
      },
      {
        "id": "C",
        "text": "Mengabsorpsi molekul air pada feses"
      },
      {
        "id": "D",
        "text": "Mengemulsi kolesterol darah"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Asam Klorida (HCl) berfungsi menciptakan suasana asam untuk membunuh patogen dan mengaktifkan pepsinogen.",
    "tip": "Kenali enzim lambung (pepsin, renin, HCl) dan getah pankreas (amilase, tripsin, lipase).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-098",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Sistem Peredaran Darah Manusia",
    "competency": "Menganalisis peredaran darah besar, darah kecil, dan sel-sel darah",
    "question": "Dalam kajian sistem peredaran darah kardiovaskular manusia MTs, konsep \"Ciri Pembuluh Nadi (Arteri)\" memiliki deskripsi ilmiah yang tepat yaitu...",
    "optionA": "Dinding tipis tidak elastis dengan banyak katup sepanjang pembuluh",
    "optionB": "Dinding pembuluh tebal elastis, membawa darah kaya O2 keluar dari jantung (kecuali arteri pulmonalis), dan denyut terasa",
    "optionC": "Membawa darah masuk kembali ke jantung dengan tekanan lemah",
    "optionD": "Mengalir lambat dan jika terpotong darah hanya menetes",
    "options": [
      {
        "id": "A",
        "text": "Dinding tipis tidak elastis dengan banyak katup sepanjang pembuluh"
      },
      {
        "id": "B",
        "text": "Dinding pembuluh tebal elastis, membawa darah kaya O2 keluar dari jantung (kecuali arteri pulmonalis), dan denyut terasa"
      },
      {
        "id": "C",
        "text": "Membawa darah masuk kembali ke jantung dengan tekanan lemah"
      },
      {
        "id": "D",
        "text": "Mengalir lambat dan jika terpotong darah hanya menetes"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Ciri Pembuluh Nadi (Arteri): Dinding pembuluh tebal elastis, membawa darah kaya O2 keluar dari jantung (kecuali arteri pulmonalis), dan denyut terasa.",
    "tip": "Kecil: Bilik Kanan -> Paru -> Serambi Kiri; Besar: Bilik Kiri -> Tubuh -> Serambi Kanan.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-099",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Sistem Pernapasan dan Ekskresi (Ginjal)",
    "competency": "Menganalisis tahapan pembentukan urine (filtrasi, reabsorpsi, augmentasi)",
    "question": "Pada fisiologi sistem ekskresi manusia, tahapan proses atau kelainan \"Kelainan Diabetes Melitus pada Sistem Ekskresi\" dicirikan oleh...",
    "optionA": "Kerusakan saringan kapsula Bowman oleh infeksi bakteri",
    "optionB": "Keluarnya sel darah merah bersama urine saat berkemih",
    "optionC": "Ditemukannya glukosa di dalam urine karena kekurangan produksi hormon insulin oleh pankreas",
    "optionD": "Ketidakmampuan ginjal menyerap air akibat gagal ginjal kronis",
    "options": [
      {
        "id": "A",
        "text": "Kerusakan saringan kapsula Bowman oleh infeksi bakteri"
      },
      {
        "id": "B",
        "text": "Keluarnya sel darah merah bersama urine saat berkemih"
      },
      {
        "id": "C",
        "text": "Ditemukannya glukosa di dalam urine karena kekurangan produksi hormon insulin oleh pankreas"
      },
      {
        "id": "D",
        "text": "Ketidakmampuan ginjal menyerap air akibat gagal ginjal kronis"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kelainan Diabetes Melitus pada Sistem Ekskresi ditandai oleh: ditemukannya glukosa di dalam urine karena kekurangan produksi hormon insulin oleh pankreas.",
    "tip": "Filtrasi di glomerulus (urine primer), Reabsorpsi di TKP (urine sekunder), Augmentasi di TKD (urine sesungguhnya).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-100",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Pewarisan Sifat dan Bioteknologi",
    "competency": "Menentukan rasio persilangan monohibrid Mendel dan produk bioteknologi pangan",
    "question": "Dalam ranah bioteknologi dan pewarisan sifat materi IPA MTs, penerapan konsep \"Produksi kecap manis tradisional kedelai hitam\" melibatkan mekanisme...",
    "optionA": "Bakteri Acetobacter aceti pembuat cuka",
    "optionB": "Jamur Saccharomyces boulardii suplemen",
    "optionC": "Bakteri Streptococcus mutans plak gigi",
    "optionD": "Jamur Aspergillus oryzae dan Aspergillus wentii",
    "options": [
      {
        "id": "A",
        "text": "Bakteri Acetobacter aceti pembuat cuka"
      },
      {
        "id": "B",
        "text": "Jamur Saccharomyces boulardii suplemen"
      },
      {
        "id": "C",
        "text": "Bakteri Streptococcus mutans plak gigi"
      },
      {
        "id": "D",
        "text": "Jamur Aspergillus oryzae dan Aspergillus wentii"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Produksi kecap manis tradisional kedelai hitam didasarkan pada prinsip jamur aspergillus oryzae dan aspergillus wentii.",
    "tip": "Kenali mikroorganisme fermentasi konvensional dan teknik kultur jaringan / DNA rekombinan.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-101",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Pengukuran dan Besaran Pokok/Turunan",
    "competency": "Menganalisis hasil pengukuran alat ukur dan satuan SI",
    "question": "Siswa MTs mengukur ketebalan pelat logam uji ke-6 menggunakan jangka sorong. Skala utama tertera angka 8 cm dan garis nonius ke-1 berimpit tepat dengan skala utama. Hasil pengukuran ketebalan pelat tersebut adalah...",
    "optionA": "8.01 cm",
    "optionB": "8.11 cm",
    "optionC": "7.96 cm",
    "optionD": "8.10 cm",
    "options": [
      {
        "id": "A",
        "text": "8.01 cm"
      },
      {
        "id": "B",
        "text": "8.11 cm"
      },
      {
        "id": "C",
        "text": "7.96 cm"
      },
      {
        "id": "D",
        "text": "8.10 cm"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Hasil jangka sorong = skala utama + (garis nonius x 0,01 cm) = 8.01 cm.",
    "tip": "Skala utama + (nonius x 0,01 cm).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-102",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Klasifikasi Materi dan Pemisahan Campuran",
    "competency": "Mengidentifikasi metode pemisahan zat (filtrasi, kromatografi, distilasi)",
    "question": "Pada praktikum kimia madrasah, siswa diminta memisahkan \"kristal iodin padat dari campurannya dengan pasir\". Teknik pemisahan campuran yang paling tepat dan efisien adalah...",
    "optionA": "Dekantasi wadah",
    "optionB": "Sublimasi zat padat",
    "optionC": "Kromatografi cair",
    "optionD": "Kristalisasi jenuh",
    "options": [
      {
        "id": "A",
        "text": "Dekantasi wadah"
      },
      {
        "id": "B",
        "text": "Sublimasi zat padat"
      },
      {
        "id": "C",
        "text": "Kromatografi cair"
      },
      {
        "id": "D",
        "text": "Kristalisasi jenuh"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Metode pemisahan yang sesuai untuk kristal iodin padat dari campurannya dengan pasir adalah Sublimasi zat padat.",
    "tip": "Pahami prinsip pemisahan zat: ukuran partikel, titik didih, kelarutan, atau sifat kemagnetan.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-103",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Zat Aditif dan Zat Adiktif",
    "competency": "Mengidentifikasi fungsi pengawet, pewarna, dan bahaya zat adiktif",
    "question": "Pada tabel komposisi bahan pangan kemasan kantin madrasah tertera zat \"Karamel\". Peran utama penambahan zat tersebut ke dalam makanan adalah...",
    "optionA": "Bahan pembasmi mikroba",
    "optionB": "Peningkat kadar protein",
    "optionC": "Pewarna alami cokelat gelap hasil karamelisasi gula",
    "optionD": "Bahan antioksidan",
    "options": [
      {
        "id": "A",
        "text": "Bahan pembasmi mikroba"
      },
      {
        "id": "B",
        "text": "Peningkat kadar protein"
      },
      {
        "id": "C",
        "text": "Pewarna alami cokelat gelap hasil karamelisasi gula"
      },
      {
        "id": "D",
        "text": "Bahan antioksidan"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Zat Karamel bertindak sebagai pewarna alami cokelat gelap hasil karamelisasi gula.",
    "tip": "Kenali fungsi spesifik pengawet, pemanis, pewarna, dan penyedap rasa.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-104",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Suhu, Pemuaian, dan Kalor",
    "competency": "Menganalisis perpindahan kalor dan penerapan rumus Q = m.c.ΔT",
    "question": "Massa air sebanyak 7 kg bersuhu 20°C dipanaskan oleh pembakar spiritus laboratorium hingga mengalami kenaikan suhu sebesar 36°C. Jika kalor jenis air bernilai 4.200 J/kg°C, jumlah kalor yang diserap air tersebut adalah...",
    "optionA": "1.062.600 Joule",
    "optionB": "1.054.200 Joule",
    "optionC": "2.116.800 Joule",
    "optionD": "1.058.400 Joule",
    "options": [
      {
        "id": "A",
        "text": "1.062.600 Joule"
      },
      {
        "id": "B",
        "text": "1.054.200 Joule"
      },
      {
        "id": "C",
        "text": "2.116.800 Joule"
      },
      {
        "id": "D",
        "text": "1.058.400 Joule"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Q = m . c . ΔT = 7 kg x 4.200 J/kg°C x 36°C = 1.058.400 Joule.",
    "tip": "Q = m.c.ΔT.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-105",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Gerak Lurus (GLB dan GLBB)",
    "competency": "Menganalisis grafik kecepatan terhadap waktu dan gerak lurus berubah beraturan",
    "question": "Sebuah mobil patroli madrasah bergerak lurus dengan kelajuan awal 22 m/s dan dipercepat secara beraturan dengan percepatan konstan 3 m/s² selama selang waktu 8 sekon. Kelajuan akhir mobil tersebut adalah...",
    "optionA": "46 m/s",
    "optionB": "50 m/s",
    "optionC": "43 m/s",
    "optionD": "25 m/s",
    "options": [
      {
        "id": "A",
        "text": "46 m/s"
      },
      {
        "id": "B",
        "text": "50 m/s"
      },
      {
        "id": "C",
        "text": "43 m/s"
      },
      {
        "id": "D",
        "text": "25 m/s"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Vt = Vo + a.t = 22 + (3 x 8) = 46 m/s.",
    "tip": "Rumus GLBB dipercepat: Vt = Vo + at.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-106",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Hukum Newton tentang Gerak",
    "competency": "Menerapkan Hukum I, II, dan III Newton pada aktivitas sehari-hari",
    "question": "Perhatikan fenomena gerak sehari-hari berikut: \"Gaya resultan sebesar 30 N bekerja pada benda bermassa 6 kg sehingga menghasilkan percepatan 5 m/s²\". Fenomena fisik tersebut secara tepat membuktikan berlakunya...",
    "optionA": "Hukum I Newton inersia",
    "optionB": "Hukum II Newton (a = ∑F / m)",
    "optionC": "Hukum III Newton aksi reaksi",
    "optionD": "Hukum Kepler pergerakan planet",
    "options": [
      {
        "id": "A",
        "text": "Hukum I Newton inersia"
      },
      {
        "id": "B",
        "text": "Hukum II Newton (a = ∑F / m)"
      },
      {
        "id": "C",
        "text": "Hukum III Newton aksi reaksi"
      },
      {
        "id": "D",
        "text": "Hukum Kepler pergerakan planet"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fenomena tersebut merupakan aplikasi nyata dari Hukum II Newton (a = ∑F / m).",
    "tip": "Hukum I = inersia; Hukum II = F=ma; Hukum III = aksi reaksi sama besar berlawanan arah.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-107",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Usaha, Energi, dan Pesawat Sederhana",
    "competency": "Menghitung keuntungan mekanik tuas, katrol, dan bidang miring",
    "question": "Untuk memindahkan beban seberat 720 N, seorang laboran madrasah menggunakan pengungkit lantai semen. Jika panjang lengan kuasa 4 meter dan panjang lengan beban 1 meter, besar gaya kuasa minimum yang diperlukan adalah...",
    "optionA": "220 N",
    "optionB": "155 N",
    "optionC": "180 N",
    "optionD": "720 N",
    "options": [
      {
        "id": "A",
        "text": "220 N"
      },
      {
        "id": "B",
        "text": "155 N"
      },
      {
        "id": "C",
        "text": "180 N"
      },
      {
        "id": "D",
        "text": "720 N"
      }
    ],
    "correctAnswer": "C",
    "explanation": "W x lb = F x lk => F = (W x lb) / lk = (720 x 1) / 4 = 180 N.",
    "tip": "W x lb = F x lk.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-108",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Tekanan Hidrostatis dan Hukum Archimedes",
    "competency": "Menganalisis gaya angkat zat cair dan kondisi terapung, melayang, tenggelam",
    "question": "Seorang penyelam melakukan observasi biota laut pada kedalaman 20 meter di bawah permukaan laut (massa jenis air laut diasumsikan 1.000 kg/m³, percepatan gravitasi g = 10 m/s²). Tekanan hidrostatis yang dialami penyelam tersebut adalah...",
    "optionA": "210.000 Pa",
    "optionB": "190.000 Pa",
    "optionC": "400.000 Pa",
    "optionD": "200.000 Pa",
    "options": [
      {
        "id": "A",
        "text": "210.000 Pa"
      },
      {
        "id": "B",
        "text": "190.000 Pa"
      },
      {
        "id": "C",
        "text": "400.000 Pa"
      },
      {
        "id": "D",
        "text": "200.000 Pa"
      }
    ],
    "correctAnswer": "D",
    "explanation": "P = ρ . g . h = 1.000 x 10 x 20 = 200000 Pa.",
    "tip": "P = ρgh.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-109",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Getaran, Gelombang, dan Resonansi Bunyi",
    "competency": "Menghitung cepat rambat gelombang v = λ.f dan frekuensi getaran",
    "question": "Pada pengujian osilasi di laboratorium, terukur gelombang bunyi organa tertutup memiliki panjang gelombang 1.5 meter dan frekuensi osilasi 200 Hz. Cepat rambat gelombang tersebut bernilai...",
    "optionA": "300 m/s",
    "optionB": "320 m/s",
    "optionC": "285 m/s",
    "optionD": "133.3 m/s",
    "options": [
      {
        "id": "A",
        "text": "300 m/s"
      },
      {
        "id": "B",
        "text": "320 m/s"
      },
      {
        "id": "C",
        "text": "285 m/s"
      },
      {
        "id": "D",
        "text": "133.3 m/s"
      }
    ],
    "correctAnswer": "A",
    "explanation": "v = λ . f = 1.5 x 200 = 300 m/s.",
    "tip": "v = λ x f.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-110",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Cahaya dan Pembentukan Bayangan Cermin/Lensa",
    "competency": "Menganalisis pembentukan bayangan pada cermin cekung dan lup/mikroskop",
    "question": "Sebuah benda lilin diletakkan pada jarak 36 cm di depan cermin cekung solar konsentrator yang mempunyai jarak titik fokus 18 cm. Jarak bayangan nyata yang terbentuk di depan cermin adalah...",
    "optionA": "42.0 cm",
    "optionB": "36.0 cm",
    "optionC": "31.0 cm",
    "optionD": "36.0 cm",
    "options": [
      {
        "id": "A",
        "text": "42.0 cm"
      },
      {
        "id": "B",
        "text": "36.0 cm"
      },
      {
        "id": "C",
        "text": "31.0 cm"
      },
      {
        "id": "D",
        "text": "36.0 cm"
      }
    ],
    "correctAnswer": "B",
    "explanation": "1/s' = 1/f - 1/s = 1/18 - 1/36 => s' = 36.0 cm.",
    "tip": "1/f = 1/s + 1/s'.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-111",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Listrik Statis dan Hukum Coulomb",
    "competency": "Menganalisis interaksi muatan listrik dan medan listrik",
    "question": "Dua muatan listrik mula-mula tarik-menarik dengan gaya F pada jarak r. Jika jarak antarmuatan diperbesar menjadi 4 kali semula (4r), gaya Coulomb menjadi...",
    "optionA": "1/4 F",
    "optionB": "4 F",
    "optionC": "1/16 F",
    "optionD": "16 F",
    "options": [
      {
        "id": "A",
        "text": "1/4 F"
      },
      {
        "id": "B",
        "text": "4 F"
      },
      {
        "id": "C",
        "text": "1/16 F"
      },
      {
        "id": "D",
        "text": "16 F"
      }
    ],
    "correctAnswer": "C",
    "explanation": "F ~ 1/r² => 1/(4²) = 1/16 F.",
    "tip": "Pahami Hukum Coulomb F = k.q1.q2/r² dan prinsip perpindahan elektron.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-112",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Listrik Dinamis dan Rangkaian Seri-Paralel",
    "competency": "Menghitung hambatan pengganti dan kuat arus menggunakan Hukum Ohm",
    "question": "Pada papan rangkaian praktikum elektronika madrasah, dua resistor cabang paralel masing-masing memiliki resistansi 8 Ω dan 8 Ω dirangkai paralel. Nilai resistansi pengganti dari cabang tersebut adalah...",
    "optionA": "6.0 Ω",
    "optionB": "3.0 Ω",
    "optionC": "16 Ω",
    "optionD": "4.0 Ω",
    "options": [
      {
        "id": "A",
        "text": "6.0 Ω"
      },
      {
        "id": "B",
        "text": "3.0 Ω"
      },
      {
        "id": "C",
        "text": "16 Ω"
      },
      {
        "id": "D",
        "text": "4.0 Ω"
      }
    ],
    "correctAnswer": "D",
    "explanation": "1/Rp = 1/8 + 1/8 => Rp = (8 x 8) / (8 + 8) = 4.0 Ω.",
    "tip": "Rp = (R1 x R2) / (R1 + R2).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-113",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Kemagnetan dan Induksi Elektromagnetik",
    "competency": "Menganalisis cara pembuatan magnet dan prinsip transformator step-up/step-down",
    "question": "Sebuah transformator step-down catu daya memiliki 1500 lilitan primer dan 300 lilitan sekunder. Jika kumparan primer dihubungkan ke sumber tegangan AC sebesar 220 Volt, maka tegangan sekunder yang dihasilkan adalah...",
    "optionA": "44.0 Volt",
    "optionB": "59.0 Volt",
    "optionC": "34.0 Volt",
    "optionD": "440 Volt",
    "options": [
      {
        "id": "A",
        "text": "44.0 Volt"
      },
      {
        "id": "B",
        "text": "59.0 Volt"
      },
      {
        "id": "C",
        "text": "34.0 Volt"
      },
      {
        "id": "D",
        "text": "440 Volt"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Vs = (Vp x Ns) / Np = (220 x 300) / 1500 = 44.0 Volt.",
    "tip": "Vp / Vs = Np / Ns.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-114",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Tata Surya dan Fenomena Gerhana",
    "competency": "Menganalisis dampak revolusi bumi, fase bulan, dan pasang surut air laut",
    "question": "Dalam studi astronomi dan kebumian, fenomena alam \"Gerak semu harian matahari dari timur ke barat\" disebabkan secara ilmiah oleh...",
    "optionA": "Matahari yang beredar mengelilingi galaksi bimasakti",
    "optionB": "Rotasi bumi pada porosnya dari arah barat menuju ke timur",
    "optionC": "Revolusi bumi mengelilingi matahari selama 365 hari",
    "optionD": "Kemiringan sumbu orbit bulan terhadap ekliptika",
    "options": [
      {
        "id": "A",
        "text": "Matahari yang beredar mengelilingi galaksi bimasakti"
      },
      {
        "id": "B",
        "text": "Rotasi bumi pada porosnya dari arah barat menuju ke timur"
      },
      {
        "id": "C",
        "text": "Revolusi bumi mengelilingi matahari selama 365 hari"
      },
      {
        "id": "D",
        "text": "Kemiringan sumbu orbit bulan terhadap ekliptika"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fenomena Gerak semu harian matahari dari timur ke barat terjadi karena rotasi bumi pada porosnya dari arah barat menuju ke timur.",
    "tip": "Pahami dampak rotasi bumi, revolusi bumi, dan posisi matahari-bulan-bumi.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-115",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Struktur Sel dan Mikroskop",
    "competency": "Membedakan organel sel tumbuhan dan sel hewan serta fungsinya",
    "question": "Pengamatan preparat jaringan tumbuhan di bawah mikroskop laboratorium madrasah menampakkan organel \"Dinding Sel dari selulosa\". Fungsi biologis utama organel tersebut adalah...",
    "optionA": "Membelah sel secara mitosis spontan tanpa DNA",
    "optionB": "Mengikat molekul hemoglobin pembawa gas pernapasan",
    "optionC": "Memberikan rigiditas struktural dan mencegah sel tumbuhan pecah akibat turgor",
    "optionD": "Menghasilkan pigmen melanin pelindung ultraviolet",
    "options": [
      {
        "id": "A",
        "text": "Membelah sel secara mitosis spontan tanpa DNA"
      },
      {
        "id": "B",
        "text": "Mengikat molekul hemoglobin pembawa gas pernapasan"
      },
      {
        "id": "C",
        "text": "Memberikan rigiditas struktural dan mencegah sel tumbuhan pecah akibat turgor"
      },
      {
        "id": "D",
        "text": "Menghasilkan pigmen melanin pelindung ultraviolet"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Organel Dinding Sel dari selulosa memiliki fungsi esensial yaitu memberikan rigiditas struktural dan mencegah sel tumbuhan pecah akibat turgor.",
    "tip": "Kenali organel khas sel hewan (sentriol, lisosom) dan sel tumbuhan (dinding sel, kloroplas, vakuola besar).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-116",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Sistem Gerak Manusia (Tulang & Sendi)",
    "competency": "Mengidentifikasi jenis sendi diartrosis dan kelainan pada tulang manusia",
    "question": "Dalam materi sistem gerak manusia MTs, konsep biologis \"Kelainan Kifosis\" didefinisikan secara medis dan anatomis sebagai...",
    "optionA": "Lengkung tulang pinggang ke arah depan",
    "optionB": "Pergeseran cakram sendi lutut",
    "optionC": "Pelemahan ligamen pergelangan tangan",
    "optionD": "Kelainan tulang belakang melengkung berlebihan ke arah belakang sehingga tampak bungkuk",
    "options": [
      {
        "id": "A",
        "text": "Lengkung tulang pinggang ke arah depan"
      },
      {
        "id": "B",
        "text": "Pergeseran cakram sendi lutut"
      },
      {
        "id": "C",
        "text": "Pelemahan ligamen pergelangan tangan"
      },
      {
        "id": "D",
        "text": "Kelainan tulang belakang melengkung berlebihan ke arah belakang sehingga tampak bungkuk"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kelainan Kifosis adalah kelainan tulang belakang melengkung berlebihan ke arah belakang sehingga tampak bungkuk.",
    "tip": "Pahami pembagian sendi diartrosis dan jenis kelainan kelengkungan tulang belakang.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-117",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Sistem Pencernaan dan Enzim Manusia",
    "competency": "Menganalisis kerja enzim pencernaan di lambung dan usus halus",
    "question": "Pada sistem digesti manusia, zat atau enzim \"Cairan Empedu\" yang dihasilkan di Dihasilkan hati dan disimpan di kantung empedu berperan spesifik untuk...",
    "optionA": "Mengemulsi gumpalan lemak menjadi butiran halus agar mudah dihidrolisis lipase",
    "optionB": "Menghidrolisis protein menjadi pepton",
    "optionC": "Menyerap asam amino di ileum",
    "optionD": "Menghentikan sekresi asam lambung",
    "options": [
      {
        "id": "A",
        "text": "Mengemulsi gumpalan lemak menjadi butiran halus agar mudah dihidrolisis lipase"
      },
      {
        "id": "B",
        "text": "Menghidrolisis protein menjadi pepton"
      },
      {
        "id": "C",
        "text": "Menyerap asam amino di ileum"
      },
      {
        "id": "D",
        "text": "Menghentikan sekresi asam lambung"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Cairan Empedu berfungsi mengemulsi gumpalan lemak menjadi butiran halus agar mudah dihidrolisis lipase.",
    "tip": "Kenali enzim lambung (pepsin, renin, HCl) dan getah pankreas (amilase, tripsin, lipase).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-118",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Sistem Peredaran Darah Manusia",
    "competency": "Menganalisis peredaran darah besar, darah kecil, dan sel-sel darah",
    "question": "Dalam kajian sistem peredaran darah kardiovaskular manusia MTs, konsep \"Ciri Pembuluh Balik (Vena)\" memiliki deskripsi ilmiah yang tepat yaitu...",
    "optionA": "Dinding sangat tebal berotot dengan denyutan kuat",
    "optionB": "Dinding tipis kurang elastis, memiliki katup di sepanjang pembuluh, dan membawa darah kembali menuju jantung",
    "optionC": "Membawa darah keluar dari bilik jantung bertekanan tinggi",
    "optionD": "Hanya memiliki satu katup di dekat pangkal jantung",
    "options": [
      {
        "id": "A",
        "text": "Dinding sangat tebal berotot dengan denyutan kuat"
      },
      {
        "id": "B",
        "text": "Dinding tipis kurang elastis, memiliki katup di sepanjang pembuluh, dan membawa darah kembali menuju jantung"
      },
      {
        "id": "C",
        "text": "Membawa darah keluar dari bilik jantung bertekanan tinggi"
      },
      {
        "id": "D",
        "text": "Hanya memiliki satu katup di dekat pangkal jantung"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Ciri Pembuluh Balik (Vena): Dinding tipis kurang elastis, memiliki katup di sepanjang pembuluh, dan membawa darah kembali menuju jantung.",
    "tip": "Kecil: Bilik Kanan -> Paru -> Serambi Kiri; Besar: Bilik Kiri -> Tubuh -> Serambi Kanan.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-119",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Sistem Pernapasan dan Ekskresi (Ginjal)",
    "competency": "Menganalisis tahapan pembentukan urine (filtrasi, reabsorpsi, augmentasi)",
    "question": "Pada fisiologi sistem ekskresi manusia, tahapan proses atau kelainan \"Kelainan Diabetes Insipidus\" dicirikan oleh...",
    "optionA": "Tingginya kadar asam urat dalam darah persendian",
    "optionB": "Kerusakan nefron akibat pengendapan kalsium",
    "optionC": "Kondisi produksi urine yang sangat melimpah encer akibat kekurangan hormon antidiuretik (ADH)",
    "optionD": "Peradangan kandung kemih oleh kuman koliform",
    "options": [
      {
        "id": "A",
        "text": "Tingginya kadar asam urat dalam darah persendian"
      },
      {
        "id": "B",
        "text": "Kerusakan nefron akibat pengendapan kalsium"
      },
      {
        "id": "C",
        "text": "Kondisi produksi urine yang sangat melimpah encer akibat kekurangan hormon antidiuretik (ADH)"
      },
      {
        "id": "D",
        "text": "Peradangan kandung kemih oleh kuman koliform"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kelainan Diabetes Insipidus ditandai oleh: kondisi produksi urine yang sangat melimpah encer akibat kekurangan hormon antidiuretik (adh).",
    "tip": "Filtrasi di glomerulus (urine primer), Reabsorpsi di TKP (urine sekunder), Augmentasi di TKD (urine sesungguhnya).",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-120",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Pewarisan Sifat dan Bioteknologi",
    "competency": "Menentukan rasio persilangan monohibrid Mendel dan produk bioteknologi pangan",
    "question": "Dalam ranah bioteknologi dan pewarisan sifat materi IPA MTs, penerapan konsep \"Bioteknologi modern teknik Rekayasa Genetika (DNA Rekombinan)\" melibatkan mekanisme...",
    "optionA": "Pengembangbiakan tanaman hias melalui stek batang pohon",
    "optionB": "Fermentasi ragi roti secara tertutup dalam ruang hangat",
    "optionC": "Penyilangan dua varietas padi dengan penyerbukan silang buatan",
    "optionD": "Penyisipan gen insulin manusia ke dalam plasmid bakteri Escherichia coli untuk memproduksi hormon insulin murni",
    "options": [
      {
        "id": "A",
        "text": "Pengembangbiakan tanaman hias melalui stek batang pohon"
      },
      {
        "id": "B",
        "text": "Fermentasi ragi roti secara tertutup dalam ruang hangat"
      },
      {
        "id": "C",
        "text": "Penyilangan dua varietas padi dengan penyerbukan silang buatan"
      },
      {
        "id": "D",
        "text": "Penyisipan gen insulin manusia ke dalam plasmid bakteri Escherichia coli untuk memproduksi hormon insulin murni"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Bioteknologi modern teknik Rekayasa Genetika (DNA Rekombinan) didasarkan pada prinsip penyisipan gen insulin manusia ke dalam plasmid bakteri escherichia coli untuk memproduksi hormon insulin murni.",
    "tip": "Kenali mikroorganisme fermentasi konvensional dan teknik kultur jaringan / DNA rekombinan.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-121",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Pengukuran dan Besaran Pokok/Turunan",
    "competency": "Menganalisis hasil pengukuran alat ukur dan satuan SI",
    "question": "Siswa MTs mengukur ketebalan pelat logam uji ke-7 menggunakan jangka sorong. Skala utama tertera angka 9 cm dan garis nonius ke-4 berimpit tepat dengan skala utama. Hasil pengukuran ketebalan pelat tersebut adalah...",
    "optionA": "9.04 cm",
    "optionB": "9.14 cm",
    "optionC": "8.99 cm",
    "optionD": "9.40 cm",
    "options": [
      {
        "id": "A",
        "text": "9.04 cm"
      },
      {
        "id": "B",
        "text": "9.14 cm"
      },
      {
        "id": "C",
        "text": "8.99 cm"
      },
      {
        "id": "D",
        "text": "9.40 cm"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Hasil jangka sorong = skala utama + (garis nonius x 0,01 cm) = 9.04 cm.",
    "tip": "Skala utama + (nonius x 0,01 cm).",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-122",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Klasifikasi Materi dan Pemisahan Campuran",
    "competency": "Mengidentifikasi metode pemisahan zat (filtrasi, kromatografi, distilasi)",
    "question": "Pada praktikum kimia madrasah, siswa diminta memisahkan \"serbuk besi halus yang bercampur dengan pasir silika\". Teknik pemisahan campuran yang paling tepat dan efisien adalah...",
    "optionA": "Penyaringan kasa",
    "optionB": "Pemisahan magnetik menggunakan medan magnet",
    "optionC": "Distilasi bejana",
    "optionD": "Pemanasan api",
    "options": [
      {
        "id": "A",
        "text": "Penyaringan kasa"
      },
      {
        "id": "B",
        "text": "Pemisahan magnetik menggunakan medan magnet"
      },
      {
        "id": "C",
        "text": "Distilasi bejana"
      },
      {
        "id": "D",
        "text": "Pemanasan api"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Metode pemisahan yang sesuai untuk serbuk besi halus yang bercampur dengan pasir silika adalah Pemisahan magnetik menggunakan medan magnet.",
    "tip": "Pahami prinsip pemisahan zat: ukuran partikel, titik didih, kelarutan, atau sifat kemagnetan.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-123",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Zat Aditif dan Zat Adiktif",
    "competency": "Mengidentifikasi fungsi pengawet, pewarna, dan bahaya zat adiktif",
    "question": "Pada tabel komposisi bahan pangan kemasan kantin madrasah tertera zat \"Kurkumin dari rimpang kunyit\". Peran utama penambahan zat tersebut ke dalam makanan adalah...",
    "optionA": "Pemanis tanpa sukrosa",
    "optionB": "Pengental saus sambal",
    "optionC": "Pewarna alami kuning-oranye sekaligus memiliki fungsi antioksidan",
    "optionD": "Bahan pelembut serat daging",
    "options": [
      {
        "id": "A",
        "text": "Pemanis tanpa sukrosa"
      },
      {
        "id": "B",
        "text": "Pengental saus sambal"
      },
      {
        "id": "C",
        "text": "Pewarna alami kuning-oranye sekaligus memiliki fungsi antioksidan"
      },
      {
        "id": "D",
        "text": "Bahan pelembut serat daging"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Zat Kurkumin dari rimpang kunyit bertindak sebagai pewarna alami kuning-oranye sekaligus memiliki fungsi antioksidan.",
    "tip": "Kenali fungsi spesifik pengawet, pemanis, pewarna, dan penyedap rasa.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-124",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Suhu, Pemuaian, dan Kalor",
    "competency": "Menganalisis perpindahan kalor dan penerapan rumus Q = m.c.ΔT",
    "question": "Massa air sebanyak 8 kg bersuhu 20°C dipanaskan oleh pembakar spiritus laboratorium hingga mengalami kenaikan suhu sebesar 40°C. Jika kalor jenis air bernilai 4.200 J/kg°C, jumlah kalor yang diserap air tersebut adalah...",
    "optionA": "1.348.200 Joule",
    "optionB": "1.339.800 Joule",
    "optionC": "2.688.000 Joule",
    "optionD": "1.344.000 Joule",
    "options": [
      {
        "id": "A",
        "text": "1.348.200 Joule"
      },
      {
        "id": "B",
        "text": "1.339.800 Joule"
      },
      {
        "id": "C",
        "text": "2.688.000 Joule"
      },
      {
        "id": "D",
        "text": "1.344.000 Joule"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Q = m . c . ΔT = 8 kg x 4.200 J/kg°C x 40°C = 1.344.000 Joule.",
    "tip": "Q = m.c.ΔT.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-125",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Gerak Lurus (GLB dan GLBB)",
    "competency": "Menganalisis grafik kecepatan terhadap waktu dan gerak lurus berubah beraturan",
    "question": "Sebuah mobil patroli madrasah bergerak lurus dengan kelajuan awal 25 m/s dan dipercepat secara beraturan dengan percepatan konstan 4 m/s² selama selang waktu 9 sekon. Kelajuan akhir mobil tersebut adalah...",
    "optionA": "61 m/s",
    "optionB": "65 m/s",
    "optionC": "58 m/s",
    "optionD": "29 m/s",
    "options": [
      {
        "id": "A",
        "text": "61 m/s"
      },
      {
        "id": "B",
        "text": "65 m/s"
      },
      {
        "id": "C",
        "text": "58 m/s"
      },
      {
        "id": "D",
        "text": "29 m/s"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Vt = Vo + a.t = 25 + (4 x 9) = 61 m/s.",
    "tip": "Rumus GLBB dipercepat: Vt = Vo + at.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-126",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Hukum Newton tentang Gerak",
    "competency": "Menerapkan Hukum I, II, dan III Newton pada aktivitas sehari-hari",
    "question": "Perhatikan fenomena gerak sehari-hari berikut: \"Seorang atlet lompat jauh madrasah terus melayang ke depan sesaat setelah menolakkan kakinya di papan tumpu\". Fenomena fisik tersebut secara tepat membuktikan berlakunya...",
    "optionA": "Hukum Pascal hidrolik",
    "optionB": "Hukum I Newton mempertahankan keadaan gerak lurus",
    "optionC": "Hukum Coulomb gaya listrik",
    "optionD": "Hukum Archimedes daya apung",
    "options": [
      {
        "id": "A",
        "text": "Hukum Pascal hidrolik"
      },
      {
        "id": "B",
        "text": "Hukum I Newton mempertahankan keadaan gerak lurus"
      },
      {
        "id": "C",
        "text": "Hukum Coulomb gaya listrik"
      },
      {
        "id": "D",
        "text": "Hukum Archimedes daya apung"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fenomena tersebut merupakan aplikasi nyata dari Hukum I Newton mempertahankan keadaan gerak lurus.",
    "tip": "Hukum I = inersia; Hukum II = F=ma; Hukum III = aksi reaksi sama besar berlawanan arah.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-127",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Usaha, Energi, dan Pesawat Sederhana",
    "competency": "Menghitung keuntungan mekanik tuas, katrol, dan bidang miring",
    "question": "Untuk memindahkan beban seberat 900 N, seorang laboran madrasah menggunakan alat perata tanah halaman. Jika panjang lengan kuasa 6 meter dan panjang lengan beban 2 meter, besar gaya kuasa minimum yang diperlukan adalah...",
    "optionA": "340 N",
    "optionB": "275 N",
    "optionC": "300 N",
    "optionD": "900 N",
    "options": [
      {
        "id": "A",
        "text": "340 N"
      },
      {
        "id": "B",
        "text": "275 N"
      },
      {
        "id": "C",
        "text": "300 N"
      },
      {
        "id": "D",
        "text": "900 N"
      }
    ],
    "correctAnswer": "C",
    "explanation": "W x lb = F x lk => F = (W x lb) / lk = (900 x 2) / 6 = 300 N.",
    "tip": "W x lb = F x lk.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-128",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Tekanan Hidrostatis dan Hukum Archimedes",
    "competency": "Menganalisis gaya angkat zat cair dan kondisi terapung, melayang, tenggelam",
    "question": "Seorang penyelam melakukan observasi biota laut pada kedalaman 25 meter di bawah permukaan laut (massa jenis air laut diasumsikan 1.000 kg/m³, percepatan gravitasi g = 10 m/s²). Tekanan hidrostatis yang dialami penyelam tersebut adalah...",
    "optionA": "260.000 Pa",
    "optionB": "240.000 Pa",
    "optionC": "500.000 Pa",
    "optionD": "250.000 Pa",
    "options": [
      {
        "id": "A",
        "text": "260.000 Pa"
      },
      {
        "id": "B",
        "text": "240.000 Pa"
      },
      {
        "id": "C",
        "text": "500.000 Pa"
      },
      {
        "id": "D",
        "text": "250.000 Pa"
      }
    ],
    "correctAnswer": "D",
    "explanation": "P = ρ . g . h = 1.000 x 10 x 25 = 250000 Pa.",
    "tip": "P = ρgh.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-129",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Getaran, Gelombang, dan Resonansi Bunyi",
    "competency": "Menghitung cepat rambat gelombang v = λ.f dan frekuensi getaran",
    "question": "Pada pengujian osilasi di laboratorium, terukur gelombang riak kolam air memiliki panjang gelombang 6 meter dan frekuensi osilasi 25 Hz. Cepat rambat gelombang tersebut bernilai...",
    "optionA": "150 m/s",
    "optionB": "170 m/s",
    "optionC": "135 m/s",
    "optionD": "4.2 m/s",
    "options": [
      {
        "id": "A",
        "text": "150 m/s"
      },
      {
        "id": "B",
        "text": "170 m/s"
      },
      {
        "id": "C",
        "text": "135 m/s"
      },
      {
        "id": "D",
        "text": "4.2 m/s"
      }
    ],
    "correctAnswer": "A",
    "explanation": "v = λ . f = 6 x 25 = 150 m/s.",
    "tip": "v = λ x f.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-130",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Cahaya dan Pembentukan Bayangan Cermin/Lensa",
    "competency": "Menganalisis pembentukan bayangan pada cermin cekung dan lup/mikroskop",
    "question": "Sebuah benda lilin diletakkan pada jarak 18 cm di depan lensa objektif mikroskop sederhana yang mempunyai jarak titik fokus 6 cm. Jarak bayangan nyata yang terbentuk di depan cermin adalah...",
    "optionA": "15.0 cm",
    "optionB": "9.0 cm",
    "optionC": "4.0 cm",
    "optionD": "12.0 cm",
    "options": [
      {
        "id": "A",
        "text": "15.0 cm"
      },
      {
        "id": "B",
        "text": "9.0 cm"
      },
      {
        "id": "C",
        "text": "4.0 cm"
      },
      {
        "id": "D",
        "text": "12.0 cm"
      }
    ],
    "correctAnswer": "B",
    "explanation": "1/s' = 1/f - 1/s = 1/6 - 1/18 => s' = 9.0 cm.",
    "tip": "1/f = 1/s + 1/s'.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-131",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Listrik Statis dan Hukum Coulomb",
    "competency": "Menganalisis interaksi muatan listrik dan medan listrik",
    "question": "Alat penangkal petir pada gedung madrasah yang dipasang menjulang tinggi berfungsi untuk...",
    "optionA": "Menolak awan petir agar menjauh dari lingkungan gedung",
    "optionB": "Menyerap energi panas petir menjadi arus listrik cadangan",
    "optionC": "Mengalirkan muatan listrik awan petir secara aman ke dalam tanah (pembumian/grounding)",
    "optionD": "Mengubah petir menjadi gelombang radio frekuensi tinggi",
    "options": [
      {
        "id": "A",
        "text": "Menolak awan petir agar menjauh dari lingkungan gedung"
      },
      {
        "id": "B",
        "text": "Menyerap energi panas petir menjadi arus listrik cadangan"
      },
      {
        "id": "C",
        "text": "Mengalirkan muatan listrik awan petir secara aman ke dalam tanah (pembumian/grounding)"
      },
      {
        "id": "D",
        "text": "Mengubah petir menjadi gelombang radio frekuensi tinggi"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Penangkal petir menyalurkan muatan listrik statis awan langsung ke tanah melalui kawat konduktor.",
    "tip": "Pahami Hukum Coulomb F = k.q1.q2/r² dan prinsip perpindahan elektron.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-132",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Listrik Dinamis dan Rangkaian Seri-Paralel",
    "competency": "Menghitung hambatan pengganti dan kuat arus menggunakan Hukum Ohm",
    "question": "Pada papan rangkaian praktikum elektronika madrasah, dua filamen bohlam paralel masing-masing memiliki resistansi 9 Ω dan 18 Ω dirangkai paralel. Nilai resistansi pengganti dari cabang tersebut adalah...",
    "optionA": "8.0 Ω",
    "optionB": "5.0 Ω",
    "optionC": "27 Ω",
    "optionD": "6.0 Ω",
    "options": [
      {
        "id": "A",
        "text": "8.0 Ω"
      },
      {
        "id": "B",
        "text": "5.0 Ω"
      },
      {
        "id": "C",
        "text": "27 Ω"
      },
      {
        "id": "D",
        "text": "6.0 Ω"
      }
    ],
    "correctAnswer": "D",
    "explanation": "1/Rp = 1/9 + 1/18 => Rp = (9 x 18) / (9 + 18) = 6.0 Ω.",
    "tip": "Rp = (R1 x R2) / (R1 + R2).",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-133",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Kemagnetan dan Induksi Elektromagnetik",
    "competency": "Menganalisis cara pembuatan magnet dan prinsip transformator step-up/step-down",
    "question": "Sebuah transformator step-up transformator pembangkit memiliki 600 lilitan primer dan 1800 lilitan sekunder. Jika kumparan primer dihubungkan ke sumber tegangan AC sebesar 120 Volt, maka tegangan sekunder yang dihasilkan adalah...",
    "optionA": "360.0 Volt",
    "optionB": "375.0 Volt",
    "optionC": "350.0 Volt",
    "optionD": "240 Volt",
    "options": [
      {
        "id": "A",
        "text": "360.0 Volt"
      },
      {
        "id": "B",
        "text": "375.0 Volt"
      },
      {
        "id": "C",
        "text": "350.0 Volt"
      },
      {
        "id": "D",
        "text": "240 Volt"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Vs = (Vp x Ns) / Np = (120 x 1800) / 600 = 360.0 Volt.",
    "tip": "Vp / Vs = Np / Ns.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-134",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Tata Surya dan Fenomena Gerhana",
    "competency": "Menganalisis dampak revolusi bumi, fase bulan, dan pasang surut air laut",
    "question": "Dalam studi astronomi dan kebumian, fenomena alam \"Perbedaan lamanya waktu siang dan malam di belahan bumi utara dan selatan\" disebabkan secara ilmiah oleh...",
    "optionA": "Bentuk bumi yang bulat pepat di ekuator",
    "optionB": "Revolusi bumi mengelilingi matahari dengan posisi poros bumi yang miring 23,5°",
    "optionC": "Fluktuasi intensitas badai radiasi matahari",
    "optionD": "Rotasi bulan yang sinkron dengan rotasi bumi",
    "options": [
      {
        "id": "A",
        "text": "Bentuk bumi yang bulat pepat di ekuator"
      },
      {
        "id": "B",
        "text": "Revolusi bumi mengelilingi matahari dengan posisi poros bumi yang miring 23,5°"
      },
      {
        "id": "C",
        "text": "Fluktuasi intensitas badai radiasi matahari"
      },
      {
        "id": "D",
        "text": "Rotasi bulan yang sinkron dengan rotasi bumi"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fenomena Perbedaan lamanya waktu siang dan malam di belahan bumi utara dan selatan terjadi karena revolusi bumi mengelilingi matahari dengan posisi poros bumi yang miring 23,5°.",
    "tip": "Pahami dampak rotasi bumi, revolusi bumi, dan posisi matahari-bulan-bumi.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-135",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Struktur Sel dan Mikroskop",
    "competency": "Membedakan organel sel tumbuhan dan sel hewan serta fungsinya",
    "question": "Pengamatan preparat jaringan tumbuhan di bawah mikroskop laboratorium madrasah menampakkan organel \"Vakuola Sentral besar\". Fungsi biologis utama organel tersebut adalah...",
    "optionA": "Membelah sel secara mitosis spontan tanpa DNA",
    "optionB": "Mengikat molekul hemoglobin pembawa gas pernapasan",
    "optionC": "Menyimpan metabolit sekunder, pigmen antosianin, dan menjaga turgiditas sel",
    "optionD": "Menghasilkan pigmen melanin pelindung ultraviolet",
    "options": [
      {
        "id": "A",
        "text": "Membelah sel secara mitosis spontan tanpa DNA"
      },
      {
        "id": "B",
        "text": "Mengikat molekul hemoglobin pembawa gas pernapasan"
      },
      {
        "id": "C",
        "text": "Menyimpan metabolit sekunder, pigmen antosianin, dan menjaga turgiditas sel"
      },
      {
        "id": "D",
        "text": "Menghasilkan pigmen melanin pelindung ultraviolet"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Organel Vakuola Sentral besar memiliki fungsi esensial yaitu menyimpan metabolit sekunder, pigmen antosianin, dan menjaga turgiditas sel.",
    "tip": "Kenali organel khas sel hewan (sentriol, lisosom) dan sel tumbuhan (dinding sel, kloroplas, vakuola besar).",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-136",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Sistem Gerak Manusia (Tulang & Sendi)",
    "competency": "Mengidentifikasi jenis sendi diartrosis dan kelainan pada tulang manusia",
    "question": "Dalam materi sistem gerak manusia MTs, konsep biologis \"Kelainan Skoliosis\" didefinisikan secara medis dan anatomis sebagai...",
    "optionA": "Kelainan tulang yang bungkuk ke belakang",
    "optionB": "Tulang leher kaku tidak dapat digerakkan",
    "optionC": "Penumpukan kristal asam urat di jemari",
    "optionD": "Kondisi tulang belakang melengkung secara tidak normal ke arah samping kiri atau kanan membentuk huruf S",
    "options": [
      {
        "id": "A",
        "text": "Kelainan tulang yang bungkuk ke belakang"
      },
      {
        "id": "B",
        "text": "Tulang leher kaku tidak dapat digerakkan"
      },
      {
        "id": "C",
        "text": "Penumpukan kristal asam urat di jemari"
      },
      {
        "id": "D",
        "text": "Kondisi tulang belakang melengkung secara tidak normal ke arah samping kiri atau kanan membentuk huruf S"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kelainan Skoliosis adalah kondisi tulang belakang melengkung secara tidak normal ke arah samping kiri atau kanan membentuk huruf s.",
    "tip": "Pahami pembagian sendi diartrosis dan jenis kelainan kelengkungan tulang belakang.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-137",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Sistem Pencernaan dan Enzim Manusia",
    "competency": "Menganalisis kerja enzim pencernaan di lambung dan usus halus",
    "question": "Pada sistem digesti manusia, zat atau enzim \"Renin\" yang dihasilkan di Dinding lambung mamalia muda berperan spesifik untuk...",
    "optionA": "Mengendapkan protein kasein dari susu agar dapat dicerna lebih lanjut",
    "optionB": "Mengubah sukrosa menjadi fruktosa",
    "optionC": "Membantu penyerapan vitamin larut air",
    "optionD": "Mencegah pembusukan feses",
    "options": [
      {
        "id": "A",
        "text": "Mengendapkan protein kasein dari susu agar dapat dicerna lebih lanjut"
      },
      {
        "id": "B",
        "text": "Mengubah sukrosa menjadi fruktosa"
      },
      {
        "id": "C",
        "text": "Membantu penyerapan vitamin larut air"
      },
      {
        "id": "D",
        "text": "Mencegah pembusukan feses"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Renin berfungsi mengendapkan protein kasein dari susu agar dapat dicerna lebih lanjut.",
    "tip": "Kenali enzim lambung (pepsin, renin, HCl) dan getah pankreas (amilase, tripsin, lipase).",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-138",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Sistem Peredaran Darah Manusia",
    "competency": "Menganalisis peredaran darah besar, darah kecil, dan sel-sel darah",
    "question": "Dalam kajian sistem peredaran darah kardiovaskular manusia MTs, konsep \"Golongan Darah Sistem ABO\" memiliki deskripsi ilmiah yang tepat yaitu...",
    "optionA": "Memiliki aglutinogen B dan antibodi anti-A",
    "optionB": "Seseorang bergolongan darah A memiliki aglutinogen A pada eritrosit dan aglutinin anti-B di dalam plasma darahnya",
    "optionC": "Tidak memiliki aglutinogen sama sekali pada eritrositnya",
    "optionD": "Memiliki aglutinogen A dan aglutinogen B sekaligus tanpa antibodi",
    "options": [
      {
        "id": "A",
        "text": "Memiliki aglutinogen B dan antibodi anti-A"
      },
      {
        "id": "B",
        "text": "Seseorang bergolongan darah A memiliki aglutinogen A pada eritrosit dan aglutinin anti-B di dalam plasma darahnya"
      },
      {
        "id": "C",
        "text": "Tidak memiliki aglutinogen sama sekali pada eritrositnya"
      },
      {
        "id": "D",
        "text": "Memiliki aglutinogen A dan aglutinogen B sekaligus tanpa antibodi"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Golongan Darah Sistem ABO: Seseorang bergolongan darah A memiliki aglutinogen A pada eritrosit dan aglutinin anti-B di dalam plasma darahnya.",
    "tip": "Kecil: Bilik Kanan -> Paru -> Serambi Kiri; Besar: Bilik Kiri -> Tubuh -> Serambi Kanan.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-139",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Sistem Pernapasan dan Ekskresi (Ginjal)",
    "competency": "Menganalisis tahapan pembentukan urine (filtrasi, reabsorpsi, augmentasi)",
    "question": "Pada fisiologi sistem ekskresi manusia, tahapan proses atau kelainan \"Fungsi Organ Hati dalam Ekskresi\" dicirikan oleh...",
    "optionA": "Menyaring darah menghasilkan urine primer",
    "optionB": "Mengeluarkan kelebihan garam mineral lewat pori-pori",
    "optionC": "Merombak sel darah merah yang telah usang menjadi zat warna empedu (bilirubin dan biliverdin)",
    "optionD": "Mengekskresikan gas oksigen hasil metabolisme seluler",
    "options": [
      {
        "id": "A",
        "text": "Menyaring darah menghasilkan urine primer"
      },
      {
        "id": "B",
        "text": "Mengeluarkan kelebihan garam mineral lewat pori-pori"
      },
      {
        "id": "C",
        "text": "Merombak sel darah merah yang telah usang menjadi zat warna empedu (bilirubin dan biliverdin)"
      },
      {
        "id": "D",
        "text": "Mengekskresikan gas oksigen hasil metabolisme seluler"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Fungsi Organ Hati dalam Ekskresi ditandai oleh: merombak sel darah merah yang telah usang menjadi zat warna empedu (bilirubin dan biliverdin).",
    "tip": "Filtrasi di glomerulus (urine primer), Reabsorpsi di TKP (urine sekunder), Augmentasi di TKD (urine sesungguhnya).",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-140",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Pewarisan Sifat dan Bioteknologi",
    "competency": "Menentukan rasio persilangan monohibrid Mendel dan produk bioteknologi pangan",
    "question": "Dalam ranah bioteknologi dan pewarisan sifat materi IPA MTs, penerapan konsep \"Teknik Kultur Jaringan Tanaman (Totipotensi Sel)\" melibatkan mekanisme...",
    "optionA": "Memasukkan inti sel somatis ke dalam sel telur tanpa inti",
    "optionB": "Menggabungkan dua sel tanaman menggunakan fusi protoplas",
    "optionC": "Memproduksi bibit tanaman hanya melalui perkecambahan biji",
    "optionD": "Menumbuhkan eksplan potongan jaringan tumbuhan steril pada medium buatan menjadi tanaman baru utuh",
    "options": [
      {
        "id": "A",
        "text": "Memasukkan inti sel somatis ke dalam sel telur tanpa inti"
      },
      {
        "id": "B",
        "text": "Menggabungkan dua sel tanaman menggunakan fusi protoplas"
      },
      {
        "id": "C",
        "text": "Memproduksi bibit tanaman hanya melalui perkecambahan biji"
      },
      {
        "id": "D",
        "text": "Menumbuhkan eksplan potongan jaringan tumbuhan steril pada medium buatan menjadi tanaman baru utuh"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Teknik Kultur Jaringan Tanaman (Totipotensi Sel) didasarkan pada prinsip menumbuhkan eksplan potongan jaringan tumbuhan steril pada medium buatan menjadi tanaman baru utuh.",
    "tip": "Kenali mikroorganisme fermentasi konvensional dan teknik kultur jaringan / DNA rekombinan.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-141",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Pengukuran dan Besaran Pokok/Turunan",
    "competency": "Menganalisis hasil pengukuran alat ukur dan satuan SI",
    "question": "Siswa MTs mengukur ketebalan pelat logam uji ke-8 menggunakan jangka sorong. Skala utama tertera angka 10 cm dan garis nonius ke-7 berimpit tepat dengan skala utama. Hasil pengukuran ketebalan pelat tersebut adalah...",
    "optionA": "10.07 cm",
    "optionB": "10.17 cm",
    "optionC": "10.02 cm",
    "optionD": "10.70 cm",
    "options": [
      {
        "id": "A",
        "text": "10.07 cm"
      },
      {
        "id": "B",
        "text": "10.17 cm"
      },
      {
        "id": "C",
        "text": "10.02 cm"
      },
      {
        "id": "D",
        "text": "10.70 cm"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Hasil jangka sorong = skala utama + (garis nonius x 0,01 cm) = 10.07 cm.",
    "tip": "Skala utama + (nonius x 0,01 cm).",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-142",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Klasifikasi Materi dan Pemisahan Campuran",
    "competency": "Mengidentifikasi metode pemisahan zat (filtrasi, kromatografi, distilasi)",
    "question": "Pada praktikum kimia madrasah, siswa diminta memisahkan \"endapan sel darah merah dari cairan plasma darah\". Teknik pemisahan campuran yang paling tepat dan efisien adalah...",
    "optionA": "Evaporasi vakum",
    "optionB": "Sentrifugasi dengan putaran kecepatan tinggi",
    "optionC": "Sublimasi dingin",
    "optionD": "Filtrasi kasar",
    "options": [
      {
        "id": "A",
        "text": "Evaporasi vakum"
      },
      {
        "id": "B",
        "text": "Sentrifugasi dengan putaran kecepatan tinggi"
      },
      {
        "id": "C",
        "text": "Sublimasi dingin"
      },
      {
        "id": "D",
        "text": "Filtrasi kasar"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Metode pemisahan yang sesuai untuk endapan sel darah merah dari cairan plasma darah adalah Sentrifugasi dengan putaran kecepatan tinggi.",
    "tip": "Pahami prinsip pemisahan zat: ukuran partikel, titik didih, kelarutan, atau sifat kemagnetan.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-143",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Zat Aditif dan Zat Adiktif",
    "competency": "Mengidentifikasi fungsi pengawet, pewarna, dan bahaya zat adiktif",
    "question": "Pada tabel komposisi bahan pangan kemasan kantin madrasah tertera zat \"Kalium Sorbat\". Peran utama penambahan zat tersebut ke dalam makanan adalah...",
    "optionA": "Pemberi aroma pandan wangi",
    "optionB": "Pewarna merah sintetis",
    "optionC": "Menghambat perkembangbiakan khamir dan kapang pada keju dan sari buah",
    "optionD": "Penyedap rasa kaldu",
    "options": [
      {
        "id": "A",
        "text": "Pemberi aroma pandan wangi"
      },
      {
        "id": "B",
        "text": "Pewarna merah sintetis"
      },
      {
        "id": "C",
        "text": "Menghambat perkembangbiakan khamir dan kapang pada keju dan sari buah"
      },
      {
        "id": "D",
        "text": "Penyedap rasa kaldu"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Zat Kalium Sorbat bertindak sebagai menghambat perkembangbiakan khamir dan kapang pada keju dan sari buah.",
    "tip": "Kenali fungsi spesifik pengawet, pemanis, pewarna, dan penyedap rasa.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-144",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Suhu, Pemuaian, dan Kalor",
    "competency": "Menganalisis perpindahan kalor dan penerapan rumus Q = m.c.ΔT",
    "question": "Massa air sebanyak 9 kg bersuhu 20°C dipanaskan oleh pembakar spiritus laboratorium hingga mengalami kenaikan suhu sebesar 44°C. Jika kalor jenis air bernilai 4.200 J/kg°C, jumlah kalor yang diserap air tersebut adalah...",
    "optionA": "1.667.400 Joule",
    "optionB": "1.659.000 Joule",
    "optionC": "3.326.400 Joule",
    "optionD": "1.663.200 Joule",
    "options": [
      {
        "id": "A",
        "text": "1.667.400 Joule"
      },
      {
        "id": "B",
        "text": "1.659.000 Joule"
      },
      {
        "id": "C",
        "text": "3.326.400 Joule"
      },
      {
        "id": "D",
        "text": "1.663.200 Joule"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Q = m . c . ΔT = 9 kg x 4.200 J/kg°C x 44°C = 1.663.200 Joule.",
    "tip": "Q = m.c.ΔT.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-145",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Gerak Lurus (GLB dan GLBB)",
    "competency": "Menganalisis grafik kecepatan terhadap waktu dan gerak lurus berubah beraturan",
    "question": "Sebuah mobil patroli madrasah bergerak lurus dengan kelajuan awal 28 m/s dan dipercepat secara beraturan dengan percepatan konstan 1 m/s² selama selang waktu 10 sekon. Kelajuan akhir mobil tersebut adalah...",
    "optionA": "38 m/s",
    "optionB": "42 m/s",
    "optionC": "35 m/s",
    "optionD": "29 m/s",
    "options": [
      {
        "id": "A",
        "text": "38 m/s"
      },
      {
        "id": "B",
        "text": "42 m/s"
      },
      {
        "id": "C",
        "text": "35 m/s"
      },
      {
        "id": "D",
        "text": "29 m/s"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Vt = Vo + a.t = 28 + (1 x 10) = 38 m/s.",
    "tip": "Rumus GLBB dipercepat: Vt = Vo + at.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-146",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Hukum Newton tentang Gerak",
    "competency": "Menerapkan Hukum I, II, dan III Newton pada aktivitas sehari-hari",
    "question": "Perhatikan fenomena gerak sehari-hari berikut: \"Tangan perenang menekan air ke belakang dengan kuat agar tubuhnya terdorong meluncur maju di kolam\". Fenomena fisik tersebut secara tepat membuktikan berlakunya...",
    "optionA": "Hukum II Newton gaya sentripetal",
    "optionB": "Hukum III Newton pasangan gaya aksi-reaksi pada dua benda berbeda",
    "optionC": "Hukum I Newton kelembaman mutlak",
    "optionD": "Hukum Hooke elastisitas pegas",
    "options": [
      {
        "id": "A",
        "text": "Hukum II Newton gaya sentripetal"
      },
      {
        "id": "B",
        "text": "Hukum III Newton pasangan gaya aksi-reaksi pada dua benda berbeda"
      },
      {
        "id": "C",
        "text": "Hukum I Newton kelembaman mutlak"
      },
      {
        "id": "D",
        "text": "Hukum Hooke elastisitas pegas"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fenomena tersebut merupakan aplikasi nyata dari Hukum III Newton pasangan gaya aksi-reaksi pada dua benda berbeda.",
    "tip": "Hukum I = inersia; Hukum II = F=ma; Hukum III = aksi reaksi sama besar berlawanan arah.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-147",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Usaha, Energi, dan Pesawat Sederhana",
    "competency": "Menghitung keuntungan mekanik tuas, katrol, dan bidang miring",
    "question": "Untuk memindahkan beban seberat 480 N, seorang laboran madrasah menggunakan pengungkit gerobak pasir. Jika panjang lengan kuasa 4 meter dan panjang lengan beban 2 meter, besar gaya kuasa minimum yang diperlukan adalah...",
    "optionA": "280 N",
    "optionB": "215 N",
    "optionC": "240 N",
    "optionD": "480 N",
    "options": [
      {
        "id": "A",
        "text": "280 N"
      },
      {
        "id": "B",
        "text": "215 N"
      },
      {
        "id": "C",
        "text": "240 N"
      },
      {
        "id": "D",
        "text": "480 N"
      }
    ],
    "correctAnswer": "C",
    "explanation": "W x lb = F x lk => F = (W x lb) / lk = (480 x 2) / 4 = 240 N.",
    "tip": "W x lb = F x lk.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-148",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Tekanan Hidrostatis dan Hukum Archimedes",
    "competency": "Menganalisis gaya angkat zat cair dan kondisi terapung, melayang, tenggelam",
    "question": "Seorang penyelam melakukan observasi biota laut pada kedalaman 30 meter di bawah permukaan laut (massa jenis air laut diasumsikan 1.000 kg/m³, percepatan gravitasi g = 10 m/s²). Tekanan hidrostatis yang dialami penyelam tersebut adalah...",
    "optionA": "310.000 Pa",
    "optionB": "290.000 Pa",
    "optionC": "600.000 Pa",
    "optionD": "300.000 Pa",
    "options": [
      {
        "id": "A",
        "text": "310.000 Pa"
      },
      {
        "id": "B",
        "text": "290.000 Pa"
      },
      {
        "id": "C",
        "text": "600.000 Pa"
      },
      {
        "id": "D",
        "text": "300.000 Pa"
      }
    ],
    "correctAnswer": "D",
    "explanation": "P = ρ . g . h = 1.000 x 10 x 30 = 300000 Pa.",
    "tip": "P = ρgh.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-149",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Getaran, Gelombang, dan Resonansi Bunyi",
    "competency": "Menghitung cepat rambat gelombang v = λ.f dan frekuensi getaran",
    "question": "Pada pengujian osilasi di laboratorium, terukur gelombang mekanik pegas slinki memiliki panjang gelombang 2.5 meter dan frekuensi osilasi 60 Hz. Cepat rambat gelombang tersebut bernilai...",
    "optionA": "150 m/s",
    "optionB": "170 m/s",
    "optionC": "135 m/s",
    "optionD": "24.0 m/s",
    "options": [
      {
        "id": "A",
        "text": "150 m/s"
      },
      {
        "id": "B",
        "text": "170 m/s"
      },
      {
        "id": "C",
        "text": "135 m/s"
      },
      {
        "id": "D",
        "text": "24.0 m/s"
      }
    ],
    "correctAnswer": "A",
    "explanation": "v = λ . f = 2.5 x 60 = 150 m/s.",
    "tip": "v = λ x f.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ipa-150",
    "educationLevel": "MTs",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "ipa",
    "subject": "IPA Terpadu MTs",
    "subtopic": "Cahaya dan Pembentukan Bayangan Cermin/Lensa",
    "competency": "Menganalisis pembentukan bayangan pada cermin cekung dan lup/mikroskop",
    "question": "Sebuah benda lilin diletakkan pada jarak 48 cm di depan cermin cekung reflektor yang mempunyai jarak titik fokus 16 cm. Jarak bayangan nyata yang terbentuk di depan cermin adalah...",
    "optionA": "30.0 cm",
    "optionB": "24.0 cm",
    "optionC": "19.0 cm",
    "optionD": "32.0 cm",
    "options": [
      {
        "id": "A",
        "text": "30.0 cm"
      },
      {
        "id": "B",
        "text": "24.0 cm"
      },
      {
        "id": "C",
        "text": "19.0 cm"
      },
      {
        "id": "D",
        "text": "32.0 cm"
      }
    ],
    "correctAnswer": "B",
    "explanation": "1/s' = 1/f - 1/s = 1/16 - 1/48 => s' = 24.0 cm.",
    "tip": "1/f = 1/s + 1/s'.",
    "difficulty": "sulit",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-001",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Laporan Hasil Observasi",
    "competency": "Menganalisis struktur dan ciri kebahasaan teks LHO",
    "question": "Bagian struktur teks laporan hasil observasi yang memaparkan klasifikasi objek secara umum pada awal paragraf disebut...",
    "optionA": "Pernyataan umum / definisi umum",
    "optionB": "Deskripsi bagian terperinci",
    "optionC": "Deskripsi manfaat praktis",
    "optionD": "Simpulan penutup opsional",
    "options": [
      {
        "id": "A",
        "text": "Pernyataan umum / definisi umum"
      },
      {
        "id": "B",
        "text": "Deskripsi bagian terperinci"
      },
      {
        "id": "C",
        "text": "Deskripsi manfaat praktis"
      },
      {
        "id": "D",
        "text": "Simpulan penutup opsional"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Pernyataan umum berfungsi mengenalkan objek observasi dan klasifikasinya secara ringkas.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-002",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Laporan Hasil Observasi",
    "competency": "Menganalisis struktur dan ciri kebahasaan teks LHO",
    "question": "Dalam teks LHO madrasah mengenai pohon kelapa, kalimat yang mendeskripsikan secara mendalam ciri fisik akar, batang, dan pelepah daun termasuk dalam bagian...",
    "optionA": "Pernyataan klasifikasi",
    "optionB": "Deskripsi bagian",
    "optionC": "Rekomendasi penulis",
    "optionD": "Abstraksi cerita",
    "options": [
      {
        "id": "A",
        "text": "Pernyataan klasifikasi"
      },
      {
        "id": "B",
        "text": "Deskripsi bagian"
      },
      {
        "id": "C",
        "text": "Rekomendasi penulis"
      },
      {
        "id": "D",
        "text": "Abstraksi cerita"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Deskripsi bagian merinci sifat fisik dan karakteristik spesifik objek yang diamati.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-003",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Laporan Hasil Observasi",
    "competency": "Menganalisis struktur dan ciri kebahasaan teks LHO",
    "question": "Kaidah kebahasaan teks LHO ditandai dengan penggunaan kata kerja yang menyatakan keadaan atau hubungan kopula, seperti pada kata...",
    "optionA": "Alangkah, wahai, dan aduh",
    "optionB": "Kemarin, besok, dan lusa",
    "optionC": "Merupakan, adalah, dan termasuk",
    "optionD": "Seandainya, andaikata, dan jikalau",
    "options": [
      {
        "id": "A",
        "text": "Alangkah, wahai, dan aduh"
      },
      {
        "id": "B",
        "text": "Kemarin, besok, dan lusa"
      },
      {
        "id": "C",
        "text": "Merupakan, adalah, dan termasuk"
      },
      {
        "id": "D",
        "text": "Seandainya, andaikata, dan jikalau"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Verba relasional kopulatif (adalah, merupakan) sering digunakan untuk mendefinisikan objek pada teks LHO.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-004",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Deskripsi",
    "competency": "Mengidentifikasi informasi dan pencerapan indra pada teks deskripsi",
    "question": "Perhatikan kalimat: \"Dinding masjid tua itu dipenuhi ukiran kaligrafi kayu jati berpelitur cokelat mengilap.\" Kalimat tersebut melibatkan pencerapan indra...",
    "optionA": "Pendengaran (auditoris)",
    "optionB": "Penciuman (pembau)",
    "optionC": "Perabaan (taktil)",
    "optionD": "Penglihatan (visual)",
    "options": [
      {
        "id": "A",
        "text": "Pendengaran (auditoris)"
      },
      {
        "id": "B",
        "text": "Penciuman (pembau)"
      },
      {
        "id": "C",
        "text": "Perabaan (taktil)"
      },
      {
        "id": "D",
        "text": "Penglihatan (visual)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Ukiran kaligrafi kayu berpelitur cokelat mengilap dinikmati melalui indra penglihatan (mata).",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-005",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Deskripsi",
    "competency": "Mengidentifikasi informasi dan pencerapan indra pada teks deskripsi",
    "question": "Kalimat berikut yang melibatkan pencerapan indra pendengaran secara jelas adalah...",
    "optionA": "Gemercik suara air gemericik di pancuran wudhu terdengar menenangkan hati",
    "optionB": "Hawa sejuk pegunungan menyentuh lembut kulit wajah santri",
    "optionC": "Aroma wangi minyak kasturi semerbak memenuhi saf salat",
    "optionD": "Langit senja di ufuk barat berwarna jingga kemerahan",
    "options": [
      {
        "id": "A",
        "text": "Gemercik suara air gemericik di pancuran wudhu terdengar menenangkan hati"
      },
      {
        "id": "B",
        "text": "Hawa sejuk pegunungan menyentuh lembut kulit wajah santri"
      },
      {
        "id": "C",
        "text": "Aroma wangi minyak kasturi semerbak memenuhi saf salat"
      },
      {
        "id": "D",
        "text": "Langit senja di ufuk barat berwarna jingga kemerahan"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kata \"suara gemericik terdengar\" langsung merujuk pada pencerapan indra pendengaran.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-006",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Deskripsi",
    "competency": "Mengidentifikasi kaidah kebahasaan teks deskripsi",
    "question": "Penggunaan majas personifikasi yang tepat pada teks deskripsi keindahan lingkungan madrasah adalah...",
    "optionA": "Gedung madrasah itu kokoh bak benteng pertahanan yang tak terkalahkan",
    "optionB": "Dedaunan pohon mahoni melambai-lambai riang menyapa para siswa di pagi hari",
    "optionC": "Senyum guru itu seindah mekarnya bunga mawar di taman",
    "optionD": "Suaranya menggelegar membelah angkasa raya",
    "options": [
      {
        "id": "A",
        "text": "Gedung madrasah itu kokoh bak benteng pertahanan yang tak terkalahkan"
      },
      {
        "id": "B",
        "text": "Dedaunan pohon mahoni melambai-lambai riang menyapa para siswa di pagi hari"
      },
      {
        "id": "C",
        "text": "Senyum guru itu seindah mekarnya bunga mawar di taman"
      },
      {
        "id": "D",
        "text": "Suaranya menggelegar membelah angkasa raya"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Personifikasi mengumpamakan benda mati (dedaunan) berperilaku seperti manusia (melambai menyapa).",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-007",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Prosedur",
    "competency": "Menyusun urutan langkah logis dalam teks prosedur",
    "question": "Ciri kebahasaan dominan yang membedakan teks prosedur dengan jenis teks lainnya adalah banyaknya penggunaan kalimat berjenis...",
    "optionA": "Interogatif (pertanyaan reflektif)",
    "optionB": "Deklaratif deskriptif",
    "optionC": "Imperatif (perintah atau instruksi lugas)",
    "optionD": "Narasi fiktif konotatif",
    "options": [
      {
        "id": "A",
        "text": "Interogatif (pertanyaan reflektif)"
      },
      {
        "id": "B",
        "text": "Deklaratif deskriptif"
      },
      {
        "id": "C",
        "text": "Imperatif (perintah atau instruksi lugas)"
      },
      {
        "id": "D",
        "text": "Narasi fiktif konotatif"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Teks prosedur memuat instruksi pengerjaan yang menggunakan kata kerja imperatif (tambahkan, tuang, aduk).",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-008",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Prosedur",
    "competency": "Menyusun urutan langkah logis dalam teks prosedur",
    "question": "Kata penghubung (konjungsi) yang menyatakan urutan waktu bertahap dalam teks prosedur percobaan sains madrasah adalah...",
    "optionA": "Meskipun, kendatipun, dan walaupun",
    "optionB": "Sebab, karena, dan oleh karena itu",
    "optionC": "Seandainya, andaikan, dan bila",
    "optionD": "Pertama, kemudian, selanjutnya, dan akhirnya",
    "options": [
      {
        "id": "A",
        "text": "Meskipun, kendatipun, dan walaupun"
      },
      {
        "id": "B",
        "text": "Sebab, karena, dan oleh karena itu"
      },
      {
        "id": "C",
        "text": "Seandainya, andaikan, dan bila"
      },
      {
        "id": "D",
        "text": "Pertama, kemudian, selanjutnya, dan akhirnya"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Konjungsi temporal menyatakan urutan langkah dari awal hingga akhir.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-009",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Prosedur",
    "competency": "Menganalisis verba material dan tingkah laku teks prosedur",
    "question": "Kalimat petunjuk: \"Teteskanlah 3 tetes larutan iodin ke atas ekstrak daun!\", verba material yang digunakan adalah...",
    "optionA": "Teteskanlah",
    "optionB": "Larutan",
    "optionC": "Ekstrak",
    "optionD": "Ke atas",
    "options": [
      {
        "id": "A",
        "text": "Teteskanlah"
      },
      {
        "id": "B",
        "text": "Larutan"
      },
      {
        "id": "C",
        "text": "Ekstrak"
      },
      {
        "id": "D",
        "text": "Ke atas"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Teteskanlah merupakan kata kerja tindakan fisik (verba material).",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-010",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Cerita Fantasi",
    "competency": "Menelaah alur dan latar lintas waktu cerita fantasi",
    "question": "Ciri khusus dunia imajinatif dalam cerita fantasi yang tidak mungkin dijumpai dalam teks laporan faktual adalah...",
    "optionA": "Penggunaan kalimat bertata bahasa baku",
    "optionB": "Adanya keajaiban tokoh sakti atau lorong penjelajah lintas waktu",
    "optionC": "Kehadiran nama tokoh dan latar tempat",
    "optionD": "Adanya amanat yang mendidik karakter pembaca",
    "options": [
      {
        "id": "A",
        "text": "Penggunaan kalimat bertata bahasa baku"
      },
      {
        "id": "B",
        "text": "Adanya keajaiban tokoh sakti atau lorong penjelajah lintas waktu"
      },
      {
        "id": "C",
        "text": "Kehadiran nama tokoh dan latar tempat"
      },
      {
        "id": "D",
        "text": "Adanya amanat yang mendidik karakter pembaca"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fantasi menghadirkan unsur supranatural, sihir, atau portal lintas ruang-waktu.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-011",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Fabel",
    "competency": "Menganalisis watak dan amanat cerita fabel",
    "question": "Tokoh kancil yang sering digambarkan cerdik tetapi kadang licik dalam fabel Indonesia mewakili tipe penokohan...",
    "optionA": "Tritagonis pembawa kedamaian mutlak",
    "optionB": "Figuran pembantu tanpa dialog",
    "optionC": "Protagonis yang memiliki kelebihan akal pikiran",
    "optionD": "Antagonis tanpa motivasi cerita",
    "options": [
      {
        "id": "A",
        "text": "Tritagonis pembawa kedamaian mutlak"
      },
      {
        "id": "B",
        "text": "Figuran pembantu tanpa dialog"
      },
      {
        "id": "C",
        "text": "Protagonis yang memiliki kelebihan akal pikiran"
      },
      {
        "id": "D",
        "text": "Antagonis tanpa motivasi cerita"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kancil adalah tokoh utama yang menggerakkan alur cerita fabel lewat kecerdikan akalnya.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-012",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Fabel",
    "competency": "Menganalisis struktur fabel",
    "question": "Bagian akhir fabel yang memuat perubahan sikap tokoh dan petuah moral yang disampaikan pengarang disebut...",
    "optionA": "Orientasi pembuka",
    "optionB": "Komplikasi konflik",
    "optionC": "Resolusi penyelesaian",
    "optionD": "Koda",
    "options": [
      {
        "id": "A",
        "text": "Orientasi pembuka"
      },
      {
        "id": "B",
        "text": "Komplikasi konflik"
      },
      {
        "id": "C",
        "text": "Resolusi penyelesaian"
      },
      {
        "id": "D",
        "text": "Koda"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Koda adalah bagian penutup yang berisi pesan moral eksplisit dari pengarang.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-013",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Eksplanasi",
    "competency": "Menelaah hubungan kausalitas dan kronologis dalam teks eksplanasi",
    "question": "Teks eksplanasi ilmiah tentang terjadinya proses pelangi di langit disusun terutama dengan pola pengembangan...",
    "optionA": "Kausalitas (sebab-akibat) dan proses ilmiah",
    "optionB": "Kronologis sejarah peperangan",
    "optionC": "Perbandingan opini politik",
    "optionD": "Deskripsi emosi subjektif pengarang",
    "options": [
      {
        "id": "A",
        "text": "Kausalitas (sebab-akibat) dan proses ilmiah"
      },
      {
        "id": "B",
        "text": "Kronologis sejarah peperangan"
      },
      {
        "id": "C",
        "text": "Perbandingan opini politik"
      },
      {
        "id": "D",
        "text": "Deskripsi emosi subjektif pengarang"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Eksplanasi menjelaskan fenomena alam dengan pola kausalitas (sebab-akibat) proses fisik.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-014",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Eksplanasi",
    "competency": "Menganalisis konjungsi kausalitas teks eksplanasi",
    "question": "Konjungsi yang menunjukkan hubungan hubungan sebab akibat pada teks eksplanasi gempa tektonik adalah...",
    "optionA": "Kemudian dan lantas",
    "optionB": "Oleh karena itu dan akibatnya",
    "optionC": "Sedangkan dan melainkan",
    "optionD": "Meskipun dan walaupun",
    "options": [
      {
        "id": "A",
        "text": "Kemudian dan lantas"
      },
      {
        "id": "B",
        "text": "Oleh karena itu dan akibatnya"
      },
      {
        "id": "C",
        "text": "Sedangkan dan melainkan"
      },
      {
        "id": "D",
        "text": "Meskipun dan walaupun"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Oleh karena itu dan akibatnya menunjukkan hubungan logis kausal.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-015",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Eksplanasi",
    "competency": "Menelaah struktur teks eksplanasi fenomena",
    "question": "Struktur teks eksplanasi yang memuat pernyataan umum mengenai pengenalan fenomena alam atau sosial terletak pada bagian...",
    "optionA": "Deretan penjelas kausal",
    "optionB": "Interpretasi ulasan simpulan",
    "optionC": "Pernyataan umum (identifikasi fenomena)",
    "optionD": "Orientasi tokoh pahlawan",
    "options": [
      {
        "id": "A",
        "text": "Deretan penjelas kausal"
      },
      {
        "id": "B",
        "text": "Interpretasi ulasan simpulan"
      },
      {
        "id": "C",
        "text": "Pernyataan umum (identifikasi fenomena)"
      },
      {
        "id": "D",
        "text": "Orientasi tokoh pahlawan"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Struktur eksplanasi: Identifikasi fenomena (pernyataan umum) -> Proses kejadian -> Ulasan (interpretasi).",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-016",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Berita",
    "competency": "Menganalisis unsur 5W+1H (ADIKSIMBA) dalam teks berita",
    "question": "Dalam sebuah berita madrasah, kalimat \"Kebakaran laboratorium terjadi akibat korsleting listrik pada pukul 02.00 dini hari\" menjawab pertanyaan...",
    "optionA": "Siapa (Who) dan Bagaimana (How)",
    "optionB": "Di mana (Where) dan Siapa (Who)",
    "optionC": "Apa (What) dan Di mana (Where)",
    "optionD": "Mengapa (Why) dan Kapan (When)",
    "options": [
      {
        "id": "A",
        "text": "Siapa (Who) dan Bagaimana (How)"
      },
      {
        "id": "B",
        "text": "Di mana (Where) dan Siapa (Who)"
      },
      {
        "id": "C",
        "text": "Apa (What) dan Di mana (Where)"
      },
      {
        "id": "D",
        "text": "Mengapa (Why) dan Kapan (When)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Korsleting listrik menjawab penyebab (Why) dan pukul 02.00 menjawab waktu kejadian (When).",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-017",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Berita",
    "competency": "Menelaah struktur piramida terbalik teks berita",
    "question": "Bagian naskah berita yang paling penting dan memuat rangkuman inti peristiwa terletak pada...",
    "optionA": "Kepala berita (lead berita)",
    "optionB": "Tubuh berita (body)",
    "optionC": "Ekor berita (tambahan penjelas)",
    "optionD": "Kaki berita pelengkap",
    "options": [
      {
        "id": "A",
        "text": "Kepala berita (lead berita)"
      },
      {
        "id": "B",
        "text": "Tubuh berita (body)"
      },
      {
        "id": "C",
        "text": "Ekor berita (tambahan penjelas)"
      },
      {
        "id": "D",
        "text": "Kaki berita pelengkap"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kepala berita (lead) memuat rangkuman informasi esensial sesuai struktur piramida terbalik.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-018",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Berita",
    "competency": "Mengidentifikasi kaidah kebahasaan teks berita",
    "question": "Kalimat langsung dari narasumber: Kepala Madrasah menyatakan, \"Kami telah menyiapkan bantuan beasiswa prestasi.\" Jika diubah menjadi kalimat tidak langsung yang baku menjadi...",
    "optionA": "Kepala Madrasah mengatakan kalian harus siap menerima beasiswa bantuan.",
    "optionB": "Kepala Madrasah menyatakan bahwa mereka telah menyiapkan bantuan beasiswa prestasi.",
    "optionC": "Kepala Madrasah bertanya mengapa bantuan beasiswa belum disiapkan.",
    "optionD": "Kepala Madrasah memerintahkan beasiswa segera dibagikan tanpa syarat.",
    "options": [
      {
        "id": "A",
        "text": "Kepala Madrasah mengatakan kalian harus siap menerima beasiswa bantuan."
      },
      {
        "id": "B",
        "text": "Kepala Madrasah menyatakan bahwa mereka telah menyiapkan bantuan beasiswa prestasi."
      },
      {
        "id": "C",
        "text": "Kepala Madrasah bertanya mengapa bantuan beasiswa belum disiapkan."
      },
      {
        "id": "D",
        "text": "Kepala Madrasah memerintahkan beasiswa segera dibagikan tanpa syarat."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Pengubahan kalimat langsung ke tak langsung menggunakan konjungsi \"bahwa\" dan penyesuaian sudut pandang pronomina.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-019",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Iklan dan Slogan",
    "competency": "Membedakan karakteristik iklan, slogan, dan poster",
    "question": "Pernyataan singkat yang memuat semboyan motivasi padat makna dan mudah diingat oleh warga madrasah dinamakan...",
    "optionA": "Iklan komersial display",
    "optionB": "Poster plakat pameran",
    "optionC": "Slogan",
    "optionD": "Spanduk pengumuman lelang",
    "options": [
      {
        "id": "A",
        "text": "Iklan komersial display"
      },
      {
        "id": "B",
        "text": "Poster plakat pameran"
      },
      {
        "id": "C",
        "text": "Slogan"
      },
      {
        "id": "D",
        "text": "Spanduk pengumuman lelang"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Slogan adalah perkataan atau kalimat pendek yang menarik dan mudah diingat untuk memberitahukan tujuan atau prinsip.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-020",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Iklan dan Slogan",
    "competency": "Menganalisis bahasa persuasif dalam poster",
    "question": "Kalimat poster lingkungan hidup yang bersifat persuasif dan santun adalah...",
    "optionA": "Dilarang keras menyentuh tanaman bunga ini sama sekali",
    "optionB": "Siapa pun yang mengotori kelas akan dipanggil orang tuanya",
    "optionC": "Sekolah kami memiliki tempat sampah tiga warna",
    "optionD": "Sayangi madrasah kita dengan membuang sampah pada tempatnya",
    "options": [
      {
        "id": "A",
        "text": "Dilarang keras menyentuh tanaman bunga ini sama sekali"
      },
      {
        "id": "B",
        "text": "Siapa pun yang mengotori kelas akan dipanggil orang tuanya"
      },
      {
        "id": "C",
        "text": "Sekolah kami memiliki tempat sampah tiga warna"
      },
      {
        "id": "D",
        "text": "Sayangi madrasah kita dengan membuang sampah pada tempatnya"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Bahasa persuasif mengajak secara santun tanpa ancaman kasar.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-021",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Iklan dan Slogan",
    "competency": "Menganalisis fungsi iklan",
    "question": "Iklan yang disiarkan oleh Kementerian Agama mengenai ajakan moderasi beragama dan toleransi antarumat tergolong jenis...",
    "optionA": "Iklan Layanan Masyarakat (ILM)",
    "optionB": "Iklan niaga komersial",
    "optionC": "Iklan penawaran barang diskon",
    "optionD": "Iklan lowongan kerja swasta",
    "options": [
      {
        "id": "A",
        "text": "Iklan Layanan Masyarakat (ILM)"
      },
      {
        "id": "B",
        "text": "Iklan niaga komersial"
      },
      {
        "id": "C",
        "text": "Iklan penawaran barang diskon"
      },
      {
        "id": "D",
        "text": "Iklan lowongan kerja swasta"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Iklan yang bertujuan mengedukasi masyarakat tanpa motif keuntungan finansial disebut iklan layanan masyarakat.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-022",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Puisi Rakyat",
    "competency": "Menelaah syarat persajakan dan struktur pantun",
    "question": "Syarat bentuk persajakan akhir (rima) pada pantun empat baris tradisional adalah...",
    "optionA": "Bersajak sama a - a - a - a",
    "optionB": "Bersajak silang a - b - a - b",
    "optionC": "Bersajak kembar a - a - b - b",
    "optionD": "Bersajak patah a - b - b - a",
    "options": [
      {
        "id": "A",
        "text": "Bersajak sama a - a - a - a"
      },
      {
        "id": "B",
        "text": "Bersajak silang a - b - a - b"
      },
      {
        "id": "C",
        "text": "Bersajak kembar a - a - b - b"
      },
      {
        "id": "D",
        "text": "Bersajak patah a - b - b - a"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Ciri mutlak pantun: 4 baris, baris 1-2 sampiran, baris 3-4 isi, bersajak a-b-a-b.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-023",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Puisi Rakyat",
    "competency": "Membedakan pantun dan gurindam",
    "question": "Puisi lama dua seuntai yang baris pertamanya berisi syarat/masalah dan baris keduanya memuat jawaban atau akibat disebut...",
    "optionA": "Pantun berkait",
    "optionB": "Syair hikayat",
    "optionC": "Gurindam",
    "optionD": "Talibun enam baris",
    "options": [
      {
        "id": "A",
        "text": "Pantun berkait"
      },
      {
        "id": "B",
        "text": "Syair hikayat"
      },
      {
        "id": "C",
        "text": "Gurindam"
      },
      {
        "id": "D",
        "text": "Talibun enam baris"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Gurindam terdiri atas 2 baris bersajak a-a, baris 1 persoalan/sebab, baris 2 jawaban/akibat.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-024",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Puisi Rakyat",
    "competency": "Menganalisis struktur syair",
    "question": "Ciri khas bentuk syair Melayu klasik yang membedakannya dengan pantun adalah...",
    "optionA": "Memiliki sampiran pada dua baris pertama",
    "optionB": "Bersajak silang a - b - a - b",
    "optionC": "Terdiri atas baris yang jumlah suku katanya bebas tanpa aturan",
    "optionD": "Semua barisnya merupakan isi dan bersajak a - a - a - a",
    "options": [
      {
        "id": "A",
        "text": "Memiliki sampiran pada dua baris pertama"
      },
      {
        "id": "B",
        "text": "Bersajak silang a - b - a - b"
      },
      {
        "id": "C",
        "text": "Terdiri atas baris yang jumlah suku katanya bebas tanpa aturan"
      },
      {
        "id": "D",
        "text": "Semua barisnya merupakan isi dan bersajak a - a - a - a"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Syair tidak memiliki sampiran, semua 4 barisnya merupakan untaian isi bersajak a-a-a-a.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-025",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Puisi Modern",
    "competency": "Menganalisis majas dan diksi konotatif puisi",
    "question": "Perhatikan larik puisi: \"Peluit kereta meraung membelah sunyinya malam.\" Majas yang digunakan oleh penyair adalah...",
    "optionA": "Personifikasi",
    "optionB": "Litotes rendah hati",
    "optionC": "Hiperbola berlebihan",
    "optionD": "Metafora analogis",
    "options": [
      {
        "id": "A",
        "text": "Personifikasi"
      },
      {
        "id": "B",
        "text": "Litotes rendah hati"
      },
      {
        "id": "C",
        "text": "Hiperbola berlebihan"
      },
      {
        "id": "D",
        "text": "Metafora analogis"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Peluit kereta (benda mati) diberi sifat insan yaitu \"meraung\".",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-026",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Puisi Modern",
    "competency": "Menentukan tema dan amanat puisi",
    "question": "Puisi yang mengungkapkan rasa syukur mendalam kepada Allah atas nikmat kesehatan dan ketenangan batin memiliki tema...",
    "optionA": "Kritik sosial masyarakat",
    "optionB": "Ketuhanan (religiusitas)",
    "optionC": "Percintaan remaja madrasah",
    "optionD": "Perjuangan fisik prajurit",
    "options": [
      {
        "id": "A",
        "text": "Kritik sosial masyarakat"
      },
      {
        "id": "B",
        "text": "Ketuhanan (religiusitas)"
      },
      {
        "id": "C",
        "text": "Percintaan remaja madrasah"
      },
      {
        "id": "D",
        "text": "Perjuangan fisik prajurit"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Ungkapan syukur dan ibadah kepada Sang Pencipta masuk dalam tema ketuhanan/religius.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-027",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Puisi Modern",
    "competency": "Menganalisis citraan (imaji) puisi",
    "question": "Larik puisi: \"Tercium aroma tanah basah seusai hujan lebat mengguyur bumi.\" Citraan yang dominan pada bait tersebut adalah citraan...",
    "optionA": "Penglihatan visual",
    "optionB": "Pendengaran auditif",
    "optionC": "Penciuman (pembau)",
    "optionD": "Gerak kinestetik",
    "options": [
      {
        "id": "A",
        "text": "Penglihatan visual"
      },
      {
        "id": "B",
        "text": "Pendengaran auditif"
      },
      {
        "id": "C",
        "text": "Penciuman (pembau)"
      },
      {
        "id": "D",
        "text": "Gerak kinestetik"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kata \"tercium aroma tanah basah\" melibatkan daya rangsang indra penciuman.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-028",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Cerpen",
    "competency": "Menganalisis sudut pandang penceritaan cerpen",
    "question": "Jika pengarang menggunakan kata ganti \"aku\" dan terlibat langsung dalam jalan cerita sebagai tokoh sentral, sudut pandang yang dipakai adalah...",
    "optionA": "Sudut pandang orang pertama tokoh sampingan",
    "optionB": "Sudut pandang orang ketiga serbatahu",
    "optionC": "Sudut pandang orang ketiga pengamat",
    "optionD": "Sudut pandang orang pertama tokoh utama",
    "options": [
      {
        "id": "A",
        "text": "Sudut pandang orang pertama tokoh sampingan"
      },
      {
        "id": "B",
        "text": "Sudut pandang orang ketiga serbatahu"
      },
      {
        "id": "C",
        "text": "Sudut pandang orang ketiga pengamat"
      },
      {
        "id": "D",
        "text": "Sudut pandang orang pertama tokoh utama"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Tokoh \"aku\" yang menjadi fokus utama alur menggunakan sudut pandang orang pertama pelaku utama.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-029",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Cerpen",
    "competency": "Menganalisis alur dan konflik cerpen",
    "question": "Tahapan dalam cerpen ketika masalah antartokoh mencapai titik ketegangan tertinggi dinamakan...",
    "optionA": "Klimaks",
    "optionB": "Orientasi pengenalan",
    "optionC": "Pengungkapan peristiwa awal",
    "optionD": "Peleraian (antiklimaks)",
    "options": [
      {
        "id": "A",
        "text": "Klimaks"
      },
      {
        "id": "B",
        "text": "Orientasi pengenalan"
      },
      {
        "id": "C",
        "text": "Pengungkapan peristiwa awal"
      },
      {
        "id": "D",
        "text": "Peleraian (antiklimaks)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Klimaks adalah puncak ketegangan atau titik balik dalam rangkaian konflik cerita.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-030",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Cerpen",
    "competency": "Mengidentifikasi nilai-nilai kehidupan dalam cerpen",
    "question": "Nilai cerpen yang berkaitan dengan kepatuhan menjalankan syariat agama, beribadah, dan tawakal kepada Tuhan disebut nilai...",
    "optionA": "Sosial kemasyarakatan",
    "optionB": "Religius (keagamaan)",
    "optionC": "Moral budi pekerti umum",
    "optionD": "Budaya adat istiadat",
    "options": [
      {
        "id": "A",
        "text": "Sosial kemasyarakatan"
      },
      {
        "id": "B",
        "text": "Religius (keagamaan)"
      },
      {
        "id": "C",
        "text": "Moral budi pekerti umum"
      },
      {
        "id": "D",
        "text": "Budaya adat istiadat"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Nilai religius berakar pada hubungan manusia dengan Tuhan dan syariat-Nya.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-031",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Tanggapan Kritis",
    "competency": "Menganalisis struktur teks tanggapan santun",
    "question": "Bagian teks tanggapan kritis yang berisi penilaian kelebihan dan kekurangan suatu karya secara objektif dan santun adalah...",
    "optionA": "Konteks pengenalan buku",
    "optionB": "Simpulan rekomendasi pembeli",
    "optionC": "Penilaian / deskripsi kelebihan dan kekurangan",
    "optionD": "Orientasi biodata pengarang",
    "options": [
      {
        "id": "A",
        "text": "Konteks pengenalan buku"
      },
      {
        "id": "B",
        "text": "Simpulan rekomendasi pembeli"
      },
      {
        "id": "C",
        "text": "Penilaian / deskripsi kelebihan dan kekurangan"
      },
      {
        "id": "D",
        "text": "Orientasi biodata pengarang"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Penilaian objektif mengulas kekuatan sekaligus kelemahan karya secara proporsional.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-032",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Resensi Buku",
    "competency": "Menyusun ulasan buku pelajaran",
    "question": "Data identitas fisik buku seperti judul, nama pengarang, penerbit, tahun terbit, dan jumlah halaman dalam teks resensi disebut...",
    "optionA": "Sinopsis ringkasan cerita",
    "optionB": "Penilaian keunggulan buku",
    "optionC": "Kata pengantar redaksi",
    "optionD": "Identitas buku (data bibliografi)",
    "options": [
      {
        "id": "A",
        "text": "Sinopsis ringkasan cerita"
      },
      {
        "id": "B",
        "text": "Penilaian keunggulan buku"
      },
      {
        "id": "C",
        "text": "Kata pengantar redaksi"
      },
      {
        "id": "D",
        "text": "Identitas buku (data bibliografi)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Identitas buku memuat rincian bibliografis karya seperti judul, penulis, penerbit, dan tebal halaman.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-033",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Tata Bahasa & EYD V",
    "competency": "Menerapkan kaidah ejaan bahasa Indonesia yang disempurnakan (EYD V)",
    "question": "Penulisan kata serapan yang sesuai dengan kaidah EYD Edisi V yang baku adalah...",
    "optionA": "Aktivitas, efektivitas, dan konkret",
    "optionB": "Aktifitas, efektipitas, dan konkrit",
    "optionC": "Aktivitas, efektipitas, dan kongkrit",
    "optionD": "Aktifitas, efektivitas, dan kongkrit",
    "options": [
      {
        "id": "A",
        "text": "Aktivitas, efektivitas, dan konkret"
      },
      {
        "id": "B",
        "text": "Aktifitas, efektipitas, dan konkrit"
      },
      {
        "id": "C",
        "text": "Aktivitas, efektipitas, dan kongkrit"
      },
      {
        "id": "D",
        "text": "Aktifitas, efektivitas, dan kongkrit"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Baku: aktivitas (-itas), efektivitas (-itas), konkret (-et).",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-034",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Tata Bahasa & EYD V",
    "competency": "Menerapkan penulisan huruf kapital yang benar",
    "question": "Penulisan huruf kapital yang benar menurut kaidah ejaan resmi terdapat pada kalimat...",
    "optionA": "Pak Ahmad membeli Jeruk Bali dan Pisang Ambon di Pasar Tradisional",
    "optionB": "Pak Ahmad membeli jeruk bali dan pisang ambon di pasar tradisional",
    "optionC": "Pak Ahmad membeli jeruk Bali dan pisang Ambon di pasar Tradisional",
    "optionD": "Pak ahmad membeli Jeruk bali dan Pisang ambon di pasar tradisional",
    "options": [
      {
        "id": "A",
        "text": "Pak Ahmad membeli Jeruk Bali dan Pisang Ambon di Pasar Tradisional"
      },
      {
        "id": "B",
        "text": "Pak Ahmad membeli jeruk bali dan pisang ambon di pasar tradisional"
      },
      {
        "id": "C",
        "text": "Pak Ahmad membeli jeruk Bali dan pisang Ambon di pasar Tradisional"
      },
      {
        "id": "D",
        "text": "Pak ahmad membeli Jeruk bali dan Pisang ambon di pasar tradisional"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Nama jenis buah (jeruk bali, pisang ambon) ditulis huruf kecil karena bukan nama geografis asal produksi.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-035",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Tata Bahasa & EYD V",
    "competency": "Mengidentifikasi kalimat efektif",
    "question": "Kalimat berikut yang memenuhi syarat sebagai kalimat efektif yang hemat kata adalah...",
    "optionA": "Para bapak guru-guru madrasah menghadiri acara lokakarya",
    "optionB": "Guru-guru madrasah saling tolong-menolong satu sama lain",
    "optionC": "Para guru madrasah menghadiri lokakarya kurikulum",
    "optionD": "Demi untuk menyukseskan program madrasah yang unggul",
    "options": [
      {
        "id": "A",
        "text": "Para bapak guru-guru madrasah menghadiri acara lokakarya"
      },
      {
        "id": "B",
        "text": "Guru-guru madrasah saling tolong-menolong satu sama lain"
      },
      {
        "id": "C",
        "text": "Para guru madrasah menghadiri lokakarya kurikulum"
      },
      {
        "id": "D",
        "text": "Demi untuk menyukseskan program madrasah yang unggul"
      }
    ],
    "correctAnswer": "C",
    "explanation": "\"Para guru\" sudah menyatakan jamak tanpa perlu mengulang \"guru-guru\" atau menambah \"bapak\".",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-036",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Tata Bahasa & EYD V",
    "competency": "Menganalisis tanda baca koma dan titik dua",
    "question": "Penggunaan tanda baca titik dua (:) yang tepat menurut EYD V terdapat pada kalimat...",
    "optionA": "Madrasah memerlukan: mikroskop, tabung reaksi, dan pipet ukur.",
    "optionB": "Perlengkapan yang diperlukan antara lain: mikroskop dan pipet.",
    "optionC": "Ibu membeli: gula, garam, dan minyak kelapa.",
    "optionD": "Madrasah memerlukan perlengkapan laboratorium: mikroskop, tabung reaksi, dan pipet ukur.",
    "options": [
      {
        "id": "A",
        "text": "Madrasah memerlukan: mikroskop, tabung reaksi, dan pipet ukur."
      },
      {
        "id": "B",
        "text": "Perlengkapan yang diperlukan antara lain: mikroskop dan pipet."
      },
      {
        "id": "C",
        "text": "Ibu membeli: gula, garam, dan minyak kelapa."
      },
      {
        "id": "D",
        "text": "Madrasah memerlukan perlengkapan laboratorium: mikroskop, tabung reaksi, dan pipet ukur."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Titik dua digunakan pada akhir pernyataan lengkap yang diikuti perincian.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-037",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Diskusi",
    "competency": "Menyusun argumen pro dan kontra dalam teks diskusi",
    "question": "Dalam teks diskusi tentang penggunaan gawai pintar bagi siswa madrasah, bagian yang menguraikan sudut pandang yang mendukung disertai bukti empiris disebut...",
    "optionA": "Argumen mendukung (pro)",
    "optionB": "Argumen menentang (kontra)",
    "optionC": "Isu pengantar masalah",
    "optionD": "Simpulan kompromi",
    "options": [
      {
        "id": "A",
        "text": "Argumen mendukung (pro)"
      },
      {
        "id": "B",
        "text": "Argumen menentang (kontra)"
      },
      {
        "id": "C",
        "text": "Isu pengantar masalah"
      },
      {
        "id": "D",
        "text": "Simpulan kompromi"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Argumen pro menyajikan bukti dan alasan positif yang memperkuat penerimaan isu.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-038",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Pidato Persuasif",
    "competency": "Menganalisis metode dan struktur pidato persuasif",
    "question": "Metode berpidato yang dilakukan tanpa naskah tertulis secara spontan berdasarkan kemampuan ingatan orator disebut metode...",
    "optionA": "Manuskrip (membaca naskah)",
    "optionB": "Impromtu (spontanitas)",
    "optionC": "Memoriter (menghafal teks penuh)",
    "optionD": "Ekstemporan (menyiapkan kerangka garis besar)",
    "options": [
      {
        "id": "A",
        "text": "Manuskrip (membaca naskah)"
      },
      {
        "id": "B",
        "text": "Impromtu (spontanitas)"
      },
      {
        "id": "C",
        "text": "Memoriter (menghafal teks penuh)"
      },
      {
        "id": "D",
        "text": "Ekstemporan (menyiapkan kerangka garis besar)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Impromtu adalah penyampaian pidato serta-merta tanpa persiapan naskah sebelumnya.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-039",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Surat Resmi",
    "competency": "Menganalisis bagian-bagian surat dinas madrasah",
    "question": "Penulisan alamat tujuan surat dinas resmi yang benar dan tidak berlebihan adalah...",
    "optionA": "Kepada Yth. Bapak Kepala Kantor Kementerian Agama Kabupaten Sleman",
    "optionB": "Yth: Kepala Kantor Kementerian Agama Kabupaten Sleman",
    "optionC": "Yth. Kepala Kantor Kementerian Agama Kabupaten Sleman",
    "optionD": "Kepada Yth. Kepala Kantor Kemenag Kabupaten Sleman.",
    "options": [
      {
        "id": "A",
        "text": "Kepada Yth. Bapak Kepala Kantor Kementerian Agama Kabupaten Sleman"
      },
      {
        "id": "B",
        "text": "Yth: Kepala Kantor Kementerian Agama Kabupaten Sleman"
      },
      {
        "id": "C",
        "text": "Yth. Kepala Kantor Kementerian Agama Kabupaten Sleman"
      },
      {
        "id": "D",
        "text": "Kepada Yth. Kepala Kantor Kemenag Kabupaten Sleman."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Tidak menggunakan kata \"Kepada\" di depan \"Yth.\" dan tidak memakai sapaan \"Bapak\" jika sudah ada nama jabatan.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-040",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Semantik Kata",
    "competency": "Membedakan makna denotatif dan konotatif",
    "question": "Kalimat berikut yang menggunakan kata bermakna denotasi (makna lugas/sebenarnya) adalah...",
    "optionA": "Pengusaha konveksi itu terpaksa gulung tikar akibat krisis moneter",
    "optionB": "Dia menjadi kambing hitam dalam perselisihan antarwarga",
    "optionC": "Pejabat itu gemar mencari muka di hadapan atasannya",
    "optionD": "Petani madrasah menggulung tikar pandan setelah selesai menjemur gabah padi",
    "options": [
      {
        "id": "A",
        "text": "Pengusaha konveksi itu terpaksa gulung tikar akibat krisis moneter"
      },
      {
        "id": "B",
        "text": "Dia menjadi kambing hitam dalam perselisihan antarwarga"
      },
      {
        "id": "C",
        "text": "Pejabat itu gemar mencari muka di hadapan atasannya"
      },
      {
        "id": "D",
        "text": "Petani madrasah menggulung tikar pandan setelah selesai menjemur gabah padi"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Menggulung tikar secara denotatif berarti melipat/menggulung alas tikar sungguhan.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-041",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Diksi & Frasa",
    "competency": "Menganalisis hubungan sinonim dan antonim",
    "question": "Pasangan kata berikut yang memiliki hubungan antonim komplementer (berlawanan mutlak) adalah...",
    "optionA": "Hidup >< Mati",
    "optionB": "Besar >< Kecil",
    "optionC": "Panjang >< Pendek",
    "optionD": "Kaya >< Miskin",
    "options": [
      {
        "id": "A",
        "text": "Hidup >< Mati"
      },
      {
        "id": "B",
        "text": "Besar >< Kecil"
      },
      {
        "id": "C",
        "text": "Panjang >< Pendek"
      },
      {
        "id": "D",
        "text": "Kaya >< Miskin"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Hidup dan mati bersifat mutlak/biner: jika tidak hidup pasti mati, tidak ada tingkatan di antaranya.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-042",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Paragraf & Kohesi",
    "competency": "Menentukan ide pokok paragraf deduktif dan induktif",
    "question": "Sebuah paragraf yang kalimat utamanya berada di awal paragraf lalu diikuti oleh kalimat-kalimat penjelas disebut paragraf...",
    "optionA": "Induktif",
    "optionB": "Deduktif",
    "optionC": "Campuran (deduktif-induktif)",
    "optionD": "Naratif deskriptif menyebar",
    "options": [
      {
        "id": "A",
        "text": "Induktif"
      },
      {
        "id": "B",
        "text": "Deduktif"
      },
      {
        "id": "C",
        "text": "Campuran (deduktif-induktif)"
      },
      {
        "id": "D",
        "text": "Naratif deskriptif menyebar"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Deduktif menempatkan gagasan utama di kalimat pertama alinea.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-043",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Paragraf & Kohesi",
    "competency": "Menganalisis kalimat sumbang (inkoheren)",
    "question": "Dalam sebuah paragraf yang membahas pemanfaatan perpustakaan digital madrasah, kalimat yang menyatakan harga bahan pokok di pasar melonjak tergolong kalimat...",
    "optionA": "Kalimat penjelas utama",
    "optionB": "Kalimat simpulan penegas",
    "optionC": "Inkoheren (kalimat sumbang yang merusak kesatuan paragraf)",
    "optionD": "Kalimat topik deduktif",
    "options": [
      {
        "id": "A",
        "text": "Kalimat penjelas utama"
      },
      {
        "id": "B",
        "text": "Kalimat simpulan penegas"
      },
      {
        "id": "C",
        "text": "Inkoheren (kalimat sumbang yang merusak kesatuan paragraf)"
      },
      {
        "id": "D",
        "text": "Kalimat topik deduktif"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kalimat yang menyimpang dari gagasan pokok paragraf disebut kalimat sumbang/inkoheren.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-044",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Cerita Inspiratif",
    "competency": "Menganalisis pesan moral cerita inspiratif",
    "question": "Teks naratif yang menceritakan perjuangan seorang santri tunanetra yang berhasil menghafal 30 juz Al-Qur'an bertujuan utama untuk...",
    "optionA": "Menyajikan data sensus kuantitatif tunanetra",
    "optionB": "Mempromosikan buku hafalan komersial",
    "optionC": "Mengkritik kurikulum tahfiz madrasah",
    "optionD": "Menggugah motivasi empati dan keteladanan pembaca",
    "options": [
      {
        "id": "A",
        "text": "Menyajikan data sensus kuantitatif tunanetra"
      },
      {
        "id": "B",
        "text": "Mempromosikan buku hafalan komersial"
      },
      {
        "id": "C",
        "text": "Mengkritik kurikulum tahfiz madrasah"
      },
      {
        "id": "D",
        "text": "Menggugah motivasi empati dan keteladanan pembaca"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Cerita inspiratif bertujuan membangkitkan semangat pantang menyerah dan keteladanan budi pekerti.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-045",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Gaya Bahasa",
    "competency": "Menganalisis majas litotes",
    "question": "Ungkapan seorang tuan rumah yang kaya: \"Silakan mampir ke gubuk kami yang reot ini,\" menggunakan majas...",
    "optionA": "Litotes (merendahkan diri)",
    "optionB": "Hiperbola (melebih-lebihkan)",
    "optionC": "Ironi (sindiran halus)",
    "optionD": "Sarkasme (makian tajam)",
    "options": [
      {
        "id": "A",
        "text": "Litotes (merendahkan diri)"
      },
      {
        "id": "B",
        "text": "Hiperbola (melebih-lebihkan)"
      },
      {
        "id": "C",
        "text": "Ironi (sindiran halus)"
      },
      {
        "id": "D",
        "text": "Sarkasme (makian tajam)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Litotes adalah gaya bahasa yang menyatakan sesuatu dengan merendahkan keadaan sesungguhnya.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-046",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Gaya Bahasa",
    "competency": "Menganalisis majas metafora",
    "question": "Kalimat: \"Perpustakaan adalah gudang ilmu dan jendela dunia bagi para santri,\" menggunakan majas...",
    "optionA": "Simile dengan kata perumpamaan laksana",
    "optionB": "Metafora (analogi perbandingan langsung)",
    "optionC": "Personifikasi benda bernyawa",
    "optionD": "Asonansi rima vokal",
    "options": [
      {
        "id": "A",
        "text": "Simile dengan kata perumpamaan laksana"
      },
      {
        "id": "B",
        "text": "Metafora (analogi perbandingan langsung)"
      },
      {
        "id": "C",
        "text": "Personifikasi benda bernyawa"
      },
      {
        "id": "D",
        "text": "Asonansi rima vokal"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Metafora membandingkan dua hal secara langsung tanpa konjungsi pembanding (seperti, laksana).",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-047",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Kaidah Kata Depan",
    "competency": "Membedakan penulisan awalan di- dan kata depan di",
    "question": "Penulisan kata depan \"di\" yang tepat menurut kaidah bahasa Indonesia terdapat pada...",
    "optionA": "Buku itu disimpan didalam lemari laboratorium",
    "optionB": "Siswa itu sedang berdiri didepan kelas",
    "optionC": "Buku itu disimpan di dalam lemari laboratorium",
    "optionD": "Pertemuan akan dilaksanakan diruang rapat",
    "options": [
      {
        "id": "A",
        "text": "Buku itu disimpan didalam lemari laboratorium"
      },
      {
        "id": "B",
        "text": "Siswa itu sedang berdiri didepan kelas"
      },
      {
        "id": "C",
        "text": "Buku itu disimpan di dalam lemari laboratorium"
      },
      {
        "id": "D",
        "text": "Pertemuan akan dilaksanakan diruang rapat"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kata depan \"di\" yang menunjukkan tempat arah ditulis terpisah dari kata yang mengikutinya.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-048",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Kaidah Gabungan Kata",
    "competency": "Menerapkan penulisan gabungan kata terikat dan bebas",
    "question": "Penulisan gabungan kata yang benar menurut EYD V adalah...",
    "optionA": "Pasca panen, antar kota, dan sub bagian",
    "optionB": "Pasca-panen, antar-kota, dan sub-bagian",
    "optionC": "Pasca Panen, Antar Kota, dan Sub Bagian",
    "optionD": "Pascapanen, antarkota, dan subbagian",
    "options": [
      {
        "id": "A",
        "text": "Pasca panen, antar kota, dan sub bagian"
      },
      {
        "id": "B",
        "text": "Pasca-panen, antar-kota, dan sub-bagian"
      },
      {
        "id": "C",
        "text": "Pasca Panen, Antar Kota, dan Sub Bagian"
      },
      {
        "id": "D",
        "text": "Pascapanen, antarkota, dan subbagian"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Bentuk terikat seperti pasca-, antar-, sub- ditulis serangkai dengan kata dasar yang mengikutinya.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-049",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Kaidah Kata Baku",
    "competency": "Memilih pasangan kata baku serapan asing",
    "question": "Deretan kata serapan yang seluruhnya baku menurut Kamus Besar Bahasa Indonesia (KBBI) adalah...",
    "optionA": "Kuitansi, ijazah, dan apotek",
    "optionB": "Kwitansi, ijasah, dan apotik",
    "optionC": "Kuitansi, ijasah, dan apotik",
    "optionD": "Kwitansi, ijazah, dan apotek",
    "options": [
      {
        "id": "A",
        "text": "Kuitansi, ijazah, dan apotek"
      },
      {
        "id": "B",
        "text": "Kwitansi, ijasah, dan apotik"
      },
      {
        "id": "C",
        "text": "Kuitansi, ijasah, dan apotik"
      },
      {
        "id": "D",
        "text": "Kwitansi, ijazah, dan apotek"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Bentuk baku dalam KBBI: kuitansi (bukan kwitansi), ijazah (bukan ijasah), apotek (bukan apotik).",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-050",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Membaca Kritis",
    "competency": "Membedakan fakta dan opini dalam teks tajuk rencana",
    "question": "Kalimat berikut yang merupakan fakta yang dapat dibuktikan kebenarannya secara empiris adalah...",
    "optionA": "Penyelenggaraan ujian tahun ini tampaknya berjalan sangat menyenangkan",
    "optionB": "Ujian AKGTK Kemenag diikuti oleh lebih dari 100.000 pendidik madrasah di seluruh Indonesia",
    "optionC": "Pendidik madrasah sebaiknya diberikan tunjangan tambahan yang besar",
    "optionD": "Ujian berbasis komputer terasa jauh lebih mudah daripada ujian kertas",
    "options": [
      {
        "id": "A",
        "text": "Penyelenggaraan ujian tahun ini tampaknya berjalan sangat menyenangkan"
      },
      {
        "id": "B",
        "text": "Ujian AKGTK Kemenag diikuti oleh lebih dari 100.000 pendidik madrasah di seluruh Indonesia"
      },
      {
        "id": "C",
        "text": "Pendidik madrasah sebaiknya diberikan tunjangan tambahan yang besar"
      },
      {
        "id": "D",
        "text": "Ujian berbasis komputer terasa jauh lebih mudah daripada ujian kertas"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Kalimat dengan angka dan data nyata yang dapat diverifikasi merupakan fakta obyektif.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-051",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Struktur Kalimat",
    "competency": "Menganalisis pola kalimat dasar (S-P-O-K)",
    "question": "Kalimat: \"Guru Biologi menerangkan siklus sel di laboratorium madrasah\" memiliki pola gramatikal...",
    "optionA": "Subjek - Predikat - Pelengkap - Keterangan",
    "optionB": "Subjek - Predikat - Keterangan Waktu",
    "optionC": "Subjek - Predikat - Objek - Keterangan Tempat (S-P-O-K)",
    "optionD": "Subjek - Predikat - Objek - Pelengkap",
    "options": [
      {
        "id": "A",
        "text": "Subjek - Predikat - Pelengkap - Keterangan"
      },
      {
        "id": "B",
        "text": "Subjek - Predikat - Keterangan Waktu"
      },
      {
        "id": "C",
        "text": "Subjek - Predikat - Objek - Keterangan Tempat (S-P-O-K)"
      },
      {
        "id": "D",
        "text": "Subjek - Predikat - Objek - Pelengkap"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Guru Biologi (S), menerangkan (P), siklus sel (O), di laboratorium madrasah (K. Tempat).",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-052",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Eksposisi",
    "competency": "Menganalisis tesis, rangkaian argumen, dan penegasan ulang",
    "question": "Bagian pembuka teks eksposisi yang berisi sudut pandang penulis terhadap masalah yang diangkat disebut...",
    "optionA": "Rangkaian argumen pembuktian",
    "optionB": "Penegasan ulang rekomendasi",
    "optionC": "Deskripsi bagian penutup",
    "optionD": "Tesis (pernyataan pendapat awal)",
    "options": [
      {
        "id": "A",
        "text": "Rangkaian argumen pembuktian"
      },
      {
        "id": "B",
        "text": "Penegasan ulang rekomendasi"
      },
      {
        "id": "C",
        "text": "Deskripsi bagian penutup"
      },
      {
        "id": "D",
        "text": "Tesis (pernyataan pendapat awal)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Tesis adalah pengenalan isu dan sikap penulis terhadap topik yang akan dibahas.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-053",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Ulasan",
    "competency": "Mengidentifikasi kata evaluatif dalam teks ulasan novel",
    "question": "Kata-kata berikut yang tergolong diksi evaluatif untuk mengulas novel sastra adalah...",
    "optionA": "Menarik, memukau, mendalam, dan bernilai tinggi",
    "optionB": "Kemarin, besok, setelah itu, dan kemudian",
    "optionC": "Siapa, mengapa, di mana, dan kapan",
    "optionD": "Sehingga, karena, sebab, dan akibatnya",
    "options": [
      {
        "id": "A",
        "text": "Menarik, memukau, mendalam, dan bernilai tinggi"
      },
      {
        "id": "B",
        "text": "Kemarin, besok, setelah itu, dan kemudian"
      },
      {
        "id": "C",
        "text": "Siapa, mengapa, di mana, dan kapan"
      },
      {
        "id": "D",
        "text": "Sehingga, karena, sebab, dan akibatnya"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kata evaluatif memberikan penilaian kualitatif terhadap karya sastra.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-054",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Drama",
    "competency": "Menganalisis kramagung (petunjuk lakuan drama)",
    "question": "Teks dalam naskah drama yang diletakkan dalam tanda kurung untuk memandu gerak fisik atau ekspresi aktor disebut...",
    "optionA": "Prolog pengantar pentas",
    "optionB": "Kramagung (petunjuk lakuan wawancang)",
    "optionC": "Epilog penutup pertunjukan",
    "optionD": "Monolog batin tokoh",
    "options": [
      {
        "id": "A",
        "text": "Prolog pengantar pentas"
      },
      {
        "id": "B",
        "text": "Kramagung (petunjuk lakuan wawancang)"
      },
      {
        "id": "C",
        "text": "Epilog penutup pertunjukan"
      },
      {
        "id": "D",
        "text": "Monolog batin tokoh"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Kramagung adalah petunjuk tindakan fisik, mimik, atau gerak aktor di atas panggung.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-055",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Fonologi & Morfologi",
    "competency": "Menganalisis proses morfofonemik awalan meN-",
    "question": "Penggabungan awalan meN- dengan kata dasar \"kristal\" menghasilkan bentukan kata yang benar yaitu...",
    "optionA": "Menkristal",
    "optionB": "Mengristal",
    "optionC": "Mengkristal",
    "optionD": "Mekristal",
    "options": [
      {
        "id": "A",
        "text": "Menkristal"
      },
      {
        "id": "B",
        "text": "Mengristal"
      },
      {
        "id": "C",
        "text": "Mengkristal"
      },
      {
        "id": "D",
        "text": "Mekristal"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Huruf gugus konsonan /kr/ pada kata kristal tidak luluh saat mendapat prefiks meN- sehingga menjadi mengkristal.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-056",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Fonologi & Morfologi",
    "competency": "Menganalisis peluluhan fonem KTSP",
    "question": "Penggabungan awalan meN- dengan kata dasar \"tiup\" menghasilkan bentuk baku...",
    "optionA": "Mentip",
    "optionB": "Mengtiup",
    "optionC": "Menytiup",
    "optionD": "Meniup",
    "options": [
      {
        "id": "A",
        "text": "Mentip"
      },
      {
        "id": "B",
        "text": "Mengtiup"
      },
      {
        "id": "C",
        "text": "Menytiup"
      },
      {
        "id": "D",
        "text": "Meniup"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Fonem /t/ pada awal kata dasar bersuku dua luluh menjadi /n/ ketika diberi prefiks meN-.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-057",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Diksi Ilmiah",
    "competency": "Mengidentifikasi istilah teknis dalam artikel ilmiah madrasah",
    "question": "Istilah teknis kebahasaan yang bermakna persamaan bunyi vokal pada akhir larik puisi adalah...",
    "optionA": "Asonansi",
    "optionB": "Aliterasi (persamaan konsonan)",
    "optionC": "Sinestesia (pertukaran indra)",
    "optionD": "Pleonasme (pemborosan kata)",
    "options": [
      {
        "id": "A",
        "text": "Asonansi"
      },
      {
        "id": "B",
        "text": "Aliterasi (persamaan konsonan)"
      },
      {
        "id": "C",
        "text": "Sinestesia (pertukaran indra)"
      },
      {
        "id": "D",
        "text": "Pleonasme (pemborosan kata)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Asonansi adalah perulangan bunyi vokal dalam deret kata puisi.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-058",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Sintaksis Kalimat",
    "competency": "Menganalisis kalimat majemuk bertingkat",
    "question": "Kalimat majemuk bertingkat dengan anak kalimat pengganti keterangan waktu terdapat pada...",
    "optionA": "Siswa membaca buku dan guru mencatat daftar presensi kelas",
    "optionB": "Ketika bel istirahat berdentang, para santri segera menuju ke kantin madrasah",
    "optionC": "Dia anak yang pandai, tetapi sifatnya agak pemalu",
    "optionD": "Adik belajar matematika sedangkan kakak mengerjakan tugas fikih",
    "options": [
      {
        "id": "A",
        "text": "Siswa membaca buku dan guru mencatat daftar presensi kelas"
      },
      {
        "id": "B",
        "text": "Ketika bel istirahat berdentang, para santri segera menuju ke kantin madrasah"
      },
      {
        "id": "C",
        "text": "Dia anak yang pandai, tetapi sifatnya agak pemalu"
      },
      {
        "id": "D",
        "text": "Adik belajar matematika sedangkan kakak mengerjakan tugas fikih"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Klausa \"Ketika bel berdentang\" berfungsi sebagai anak kalimat keterangan waktu.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-059",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Semantik Kata",
    "competency": "Menganalisis perubahan makna peyorasi dan ameliorasi",
    "question": "Pergeseran makna kata \"bunting\" menjadi \"hamil\" yang dirasakan lebih sopan dan bernilai rasa tinggi dinamakan proses...",
    "optionA": "Peyorasi",
    "optionB": "Spesialisasi",
    "optionC": "Ameliorasi",
    "optionD": "Generalisasi",
    "options": [
      {
        "id": "A",
        "text": "Peyorasi"
      },
      {
        "id": "B",
        "text": "Spesialisasi"
      },
      {
        "id": "C",
        "text": "Ameliorasi"
      },
      {
        "id": "D",
        "text": "Generalisasi"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Ameliorasi adalah pergeseran makna yang membuat kata menjadi lebih terhormat atau halus.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ind-060",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MTs",
    "subtopic": "Teks Biografi",
    "competency": "Menganalisis struktur orientasi, peristiwa penting, dan reorientasi biografi",
    "question": "Bagian akhir teks biografi tokoh K.H. Hasyim Asy'ari yang memuat pandangan dan simpulan evaluatif penulis disebut...",
    "optionA": "Orientasi latar keluarga",
    "optionB": "Peristiwa kronologis perjuangan",
    "optionC": "Komplikasi permasalahan hukum",
    "optionD": "Reorientasi",
    "options": [
      {
        "id": "A",
        "text": "Orientasi latar keluarga"
      },
      {
        "id": "B",
        "text": "Peristiwa kronologis perjuangan"
      },
      {
        "id": "C",
        "text": "Komplikasi permasalahan hukum"
      },
      {
        "id": "D",
        "text": "Reorientasi"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Reorientasi memuat simpulan dan komentar penutup penulis atas keteladanan tokoh biografi.",
    "tip": "Pahami struktur genre teks, ciri kebahasaan, dan kaidah baku EYD V.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-001",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Classroom Expressions",
    "competency": "Identify communicative purpose of classroom interpersonal expressions",
    "question": "Teacher: \"Attention, please! Before we begin our lesson, please open your English books to page 45.\" What is the main communicative intention of the teacher?",
    "optionA": "To draw students' focus and give instruction",
    "optionB": "To scold students for making too much noise",
    "optionC": "To dismiss the class for a break",
    "optionD": "To check student attendance records",
    "options": [
      {
        "id": "A",
        "text": "To draw students' focus and give instruction"
      },
      {
        "id": "B",
        "text": "To scold students for making too much noise"
      },
      {
        "id": "C",
        "text": "To dismiss the class for a break"
      },
      {
        "id": "D",
        "text": "To check student attendance records"
      }
    ],
    "correctAnswer": "A",
    "explanation": "\"Attention, please\" is used by teachers to request focus from listeners before delivering an instruction.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-002",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Asking for Attention",
    "competency": "Identify responses to interpersonal interactions",
    "question": "Teacher: \"Listen up, everybody! The madrasah science competition will start tomorrow morning.\" Students: \"[ ... ]\". Which response shows attentiveness appropriately?",
    "optionA": "Never mind, you are welcome.",
    "optionB": "Yes, Sir, we are ready to listen.",
    "optionC": "I disagree with your opinion completely.",
    "optionD": "Excuse me, where is the exit door?",
    "options": [
      {
        "id": "A",
        "text": "Never mind, you are welcome."
      },
      {
        "id": "B",
        "text": "Yes, Sir, we are ready to listen."
      },
      {
        "id": "C",
        "text": "I disagree with your opinion completely."
      },
      {
        "id": "D",
        "text": "Excuse me, where is the exit door?"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The students acknowledge the teacher's call for attention with a polite confirmation.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-003",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Checking Understanding",
    "competency": "Identify expressions of checking for understanding",
    "question": "Teacher: \"Have you grasped how to change active voice into passive, Farhan?\" Farhan: \"Yes, Ma'am, it is clear.\" The teacher's phrase is used for...",
    "optionA": "Giving compliment on a student's project",
    "optionB": "Expressing gratitude for help",
    "optionC": "Checking the student's comprehension",
    "optionD": "Asking permission to leave the room",
    "options": [
      {
        "id": "A",
        "text": "Giving compliment on a student's project"
      },
      {
        "id": "B",
        "text": "Expressing gratitude for help"
      },
      {
        "id": "C",
        "text": "Checking the student's comprehension"
      },
      {
        "id": "D",
        "text": "Asking permission to leave the room"
      }
    ],
    "correctAnswer": "C",
    "explanation": "\"Have you grasped...\" asks whether the listener understands the material.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-004",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Compliments and Praise",
    "competency": "Use expressions of praising and complimenting performance",
    "question": "Siti: \"Look at this calligraphy that Ahmad painted!\" Teacher: \"What an exquisite masterpiece!\" The teacher is expressing...",
    "optionA": "An apology for a mistake",
    "optionB": "A warning about hazardous paints",
    "optionC": "A request for financial assistance",
    "optionD": "An admiration and compliment",
    "options": [
      {
        "id": "A",
        "text": "An apology for a mistake"
      },
      {
        "id": "B",
        "text": "A warning about hazardous paints"
      },
      {
        "id": "C",
        "text": "A request for financial assistance"
      },
      {
        "id": "D",
        "text": "An admiration and compliment"
      }
    ],
    "correctAnswer": "D",
    "explanation": "\"What an exquisite masterpiece!\" is an exclamation expressing admiration.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-005",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Asking and Giving Opinions",
    "competency": "Express opinions and arguments politely",
    "question": "Zaid: \"In my opinion, studying in the madrasah library in the morning is very calming.\" Umar: \"I completely agree with you. It helps me concentrate.\" Umar expresses...",
    "optionA": "Agreement with Zaid's viewpoint",
    "optionB": "Disagreement with Zaid's suggestion",
    "optionC": "Doubt about library regulations",
    "optionD": "Refusal to join the study group",
    "options": [
      {
        "id": "A",
        "text": "Agreement with Zaid's viewpoint"
      },
      {
        "id": "B",
        "text": "Disagreement with Zaid's suggestion"
      },
      {
        "id": "C",
        "text": "Doubt about library regulations"
      },
      {
        "id": "D",
        "text": "Refusal to join the study group"
      }
    ],
    "correctAnswer": "A",
    "explanation": "\"I completely agree with you\" clearly denotes agreement.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-006",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Notices and Warnings",
    "competency": "Interpret warning notices in school facilities",
    "question": "Notice in the madrasah lab: \"CAUTION: WEAR CHEMICAL RESISTANT GLOVES AND SAFETY GOGGLES AT ALL TIMES.\" This notice implies that...",
    "optionA": "Students are forbidden from using protective gloves",
    "optionB": "Visitors must protect their hands and eyes from corrosive substances",
    "optionC": "Safety goggles are sold inside the science room",
    "optionD": "Visitors may enter the laboratory without any gear",
    "options": [
      {
        "id": "A",
        "text": "Students are forbidden from using protective gloves"
      },
      {
        "id": "B",
        "text": "Visitors must protect their hands and eyes from corrosive substances"
      },
      {
        "id": "C",
        "text": "Safety goggles are sold inside the science room"
      },
      {
        "id": "D",
        "text": "Visitors may enter the laboratory without any gear"
      }
    ],
    "correctAnswer": "B",
    "explanation": "\"Wear gloves and goggles\" indicates mandatory protective equipment for safety.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-007",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Greeting Cards",
    "competency": "Analyze communicative purpose of greeting cards",
    "question": "A card reads: \"Wishing you a blessed Ramadan filled with peace, prayer, and divine forgiveness.\" What is the sender's primary goal?",
    "optionA": "To invite the recipient to a sporting event",
    "optionB": "To console someone who lost a competition",
    "optionC": "To send religious felicitations on the holy month of Ramadan",
    "optionD": "To announce the launch of a new product",
    "options": [
      {
        "id": "A",
        "text": "To invite the recipient to a sporting event"
      },
      {
        "id": "B",
        "text": "To console someone who lost a competition"
      },
      {
        "id": "C",
        "text": "To send religious felicitations on the holy month of Ramadan"
      },
      {
        "id": "D",
        "text": "To announce the launch of a new product"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The card conveys warm wishes and blessings for Ramadan.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-008",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Invitation Cards",
    "competency": "Analyze information in formal invitations",
    "question": "An invitation letter contains: \"RSVP by October 15th to Mr. Ridwan (08123456789).\" The acronym \"RSVP\" instructs the invited guest to...",
    "optionA": "Bring cash donations to the registration desk",
    "optionB": "Arrive at least two hours before the event starts",
    "optionC": "Send a substitute representative immediately",
    "optionD": "Confirm whether they will attend the event before the deadline",
    "options": [
      {
        "id": "A",
        "text": "Bring cash donations to the registration desk"
      },
      {
        "id": "B",
        "text": "Arrive at least two hours before the event starts"
      },
      {
        "id": "C",
        "text": "Send a substitute representative immediately"
      },
      {
        "id": "D",
        "text": "Confirm whether they will attend the event before the deadline"
      }
    ],
    "correctAnswer": "D",
    "explanation": "RSVP (répondez s'il vous plaît) asks recipients to confirm attendance.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-009",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Announcement",
    "competency": "Identify factual details in public announcements",
    "question": "Announcement: \"All scout troop members are required to gather at the madrasah courtyard on Friday at 3:00 PM in full uniform.\" Who is the target audience?",
    "optionA": "Members of the madrasah scout organization",
    "optionB": "All teachers and laboratory staff",
    "optionC": "Parents of newly enrolled students",
    "optionD": "Kitchen and janitorial personnel",
    "options": [
      {
        "id": "A",
        "text": "Members of the madrasah scout organization"
      },
      {
        "id": "B",
        "text": "All teachers and laboratory staff"
      },
      {
        "id": "C",
        "text": "Parents of newly enrolled students"
      },
      {
        "id": "D",
        "text": "Kitchen and janitorial personnel"
      }
    ],
    "correctAnswer": "A",
    "explanation": "\"All scout troop members\" specifies the intended audience.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-010",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Simple Present Tense",
    "competency": "Apply subject-verb agreement in Simple Present",
    "question": "Complete the sentence: \"Every Friday morning, our madrasah principal [ ... ] the flag ceremony in the main courtyard.\"",
    "optionA": "leading",
    "optionB": "leads",
    "optionC": "lead",
    "optionD": "led",
    "options": [
      {
        "id": "A",
        "text": "leading"
      },
      {
        "id": "B",
        "text": "leads"
      },
      {
        "id": "C",
        "text": "lead"
      },
      {
        "id": "D",
        "text": "led"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Singular third person subject (principal) in Simple Present takes verb + -s: leads.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-011",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Simple Present Tense",
    "competency": "Use negative auxiliary in Simple Present",
    "question": "Complete the sentence: \"The students [ ... ] bring electronic gadgets during final semester examinations.\"",
    "optionA": "does not",
    "optionB": "is not",
    "optionC": "do not",
    "optionD": "are not",
    "options": [
      {
        "id": "A",
        "text": "does not"
      },
      {
        "id": "B",
        "text": "is not"
      },
      {
        "id": "C",
        "text": "do not"
      },
      {
        "id": "D",
        "text": "are not"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Plural subject (the students) uses \"do not\" for Simple Present negation.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-012",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Present Continuous Tense",
    "competency": "Identify actions in progress at the moment of speaking",
    "question": "Look at the sentence: \"Listen! The madrasah choir [ ... ] an Islamic spiritual song right now.\"",
    "optionA": "sings",
    "optionB": "are singing",
    "optionC": "sang",
    "optionD": "is singing",
    "options": [
      {
        "id": "A",
        "text": "sings"
      },
      {
        "id": "B",
        "text": "are singing"
      },
      {
        "id": "C",
        "text": "sang"
      },
      {
        "id": "D",
        "text": "is singing"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Singular collective subject (choir) with time signal \"right now\" uses \"is singing\".",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-013",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Simple Past Tense",
    "competency": "Apply irregular past tense verbs in recount context",
    "question": "Complete the sentence: \"Two weeks ago, our class [ ... ] the national museum in Jakarta for an educational field trip.\"",
    "optionA": "visited",
    "optionB": "visits",
    "optionC": "visiting",
    "optionD": "will visit",
    "options": [
      {
        "id": "A",
        "text": "visited"
      },
      {
        "id": "B",
        "text": "visits"
      },
      {
        "id": "C",
        "text": "visiting"
      },
      {
        "id": "D",
        "text": "will visit"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Time signal \"two weeks ago\" requires past simple verb: visited.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-014",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Simple Past Tense",
    "competency": "Use irregular past verbs correctly",
    "question": "Sentence: \"Last Sunday, Ahmad [ ... ] a beautiful Arabic calligraphy that won the regional trophy.\"",
    "optionA": "draws",
    "optionB": "drew",
    "optionC": "drawing",
    "optionD": "drawn",
    "options": [
      {
        "id": "A",
        "text": "draws"
      },
      {
        "id": "B",
        "text": "drew"
      },
      {
        "id": "C",
        "text": "drawing"
      },
      {
        "id": "D",
        "text": "drawn"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Past tense of draw is drew.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-015",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Past Continuous Tense",
    "competency": "Apply past continuous for interrupted past actions",
    "question": "Sentence: \"While the students [ ... ] the chemistry experiment, the electricity suddenly went out.\"",
    "optionA": "was conducting",
    "optionB": "conducted",
    "optionC": "were conducting",
    "optionD": "are conducting",
    "options": [
      {
        "id": "A",
        "text": "was conducting"
      },
      {
        "id": "B",
        "text": "conducted"
      },
      {
        "id": "C",
        "text": "were conducting"
      },
      {
        "id": "D",
        "text": "are conducting"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Plural subject \"the students\" in past continuous takes \"were conducting\".",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-016",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Degrees of Comparison",
    "competency": "Form comparative degree with adjectives",
    "question": "Sentence: \"Mount Everest is [ ... ] Mount Bromo in East Java.\"",
    "optionA": "the highest",
    "optionB": "more high than",
    "optionC": "as high as",
    "optionD": "higher than",
    "options": [
      {
        "id": "A",
        "text": "the highest"
      },
      {
        "id": "B",
        "text": "more high than"
      },
      {
        "id": "C",
        "text": "as high as"
      },
      {
        "id": "D",
        "text": "higher than"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Short adjective high uses comparative form higher than.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-017",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Degrees of Comparison",
    "competency": "Form superlative degree with long adjectives",
    "question": "Sentence: \"The cheetah is widely known as [ ... ] land animal in the world.\"",
    "optionA": "the fastest",
    "optionB": "faster than",
    "optionC": "more fast",
    "optionD": "the most fast",
    "options": [
      {
        "id": "A",
        "text": "the fastest"
      },
      {
        "id": "B",
        "text": "faster than"
      },
      {
        "id": "C",
        "text": "more fast"
      },
      {
        "id": "D",
        "text": "the most fast"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Superlative of fast is the fastest.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-018",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Degrees of Comparison",
    "competency": "Form superlative of multi-syllable adjectives",
    "question": "Sentence: \"The holy month of Ramadan is considered [ ... ] month in the Islamic calendar.\"",
    "optionA": "more sacred than",
    "optionB": "the most sacred",
    "optionC": "sacredest",
    "optionD": "as sacred",
    "options": [
      {
        "id": "A",
        "text": "more sacred than"
      },
      {
        "id": "B",
        "text": "the most sacred"
      },
      {
        "id": "C",
        "text": "sacredest"
      },
      {
        "id": "D",
        "text": "as sacred"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Two-syllable adjective sacred takes \"the most sacred\".",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-019",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Modals of Ability and Obligation",
    "competency": "Apply modals must, should, and can in context",
    "question": "Sentence: \"According to madrasah regulations, all students [ ... ] attend the morning assembly on time.\"",
    "optionA": "might",
    "optionB": "could",
    "optionC": "must",
    "optionD": "would",
    "options": [
      {
        "id": "A",
        "text": "might"
      },
      {
        "id": "B",
        "text": "could"
      },
      {
        "id": "C",
        "text": "must"
      },
      {
        "id": "D",
        "text": "would"
      }
    ],
    "correctAnswer": "C",
    "explanation": "\"Must\" expresses compulsory school regulation or obligation.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-020",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Modals of Suggestion",
    "competency": "Give suggestions using modal should",
    "question": "Doctor: \"You look exhausted, Salma. You [ ... ] drink plenty of warm water and take rest.\"",
    "optionA": "will",
    "optionB": "may not",
    "optionC": "shall not",
    "optionD": "should",
    "options": [
      {
        "id": "A",
        "text": "will"
      },
      {
        "id": "B",
        "text": "may not"
      },
      {
        "id": "C",
        "text": "shall not"
      },
      {
        "id": "D",
        "text": "should"
      }
    ],
    "correctAnswer": "D",
    "explanation": "\"Should\" is used to offer beneficial medical advice or suggestion.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-021",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Passive Voice",
    "competency": "Transform active sentence into passive voice",
    "question": "Active: \"The headmaster signed the graduation certificates yesterday.\" The correct passive form is...",
    "optionA": "The graduation certificates were signed by the headmaster yesterday.",
    "optionB": "The graduation certificates was signed by the headmaster yesterday.",
    "optionC": "The headmaster was signed by the certificates yesterday.",
    "optionD": "The certificates are signed by the headmaster yesterday.",
    "options": [
      {
        "id": "A",
        "text": "The graduation certificates were signed by the headmaster yesterday."
      },
      {
        "id": "B",
        "text": "The graduation certificates was signed by the headmaster yesterday."
      },
      {
        "id": "C",
        "text": "The headmaster was signed by the certificates yesterday."
      },
      {
        "id": "D",
        "text": "The certificates are signed by the headmaster yesterday."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Plural object (certificates) in Past Passive takes \"were + Verb 3 (signed)\".",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-022",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Passive Voice",
    "competency": "Identify passive voice in simple present",
    "question": "Active: \"Madrasah librarians arrange new reference books on the wooden shelves.\" The correct passive form is...",
    "optionA": "New reference books were arranged on the wooden shelves.",
    "optionB": "New reference books are arranged on the wooden shelves by madrasah librarians.",
    "optionC": "New reference books is arranged by madrasah librarians.",
    "optionD": "The wooden shelves are arranging reference books.",
    "options": [
      {
        "id": "A",
        "text": "New reference books were arranged on the wooden shelves."
      },
      {
        "id": "B",
        "text": "New reference books are arranged on the wooden shelves by madrasah librarians."
      },
      {
        "id": "C",
        "text": "New reference books is arranged by madrasah librarians."
      },
      {
        "id": "D",
        "text": "The wooden shelves are arranging reference books."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Plural object (books) in Present Passive takes \"are + Verb 3 (arranged)\".",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-023",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Recount Text",
    "competency": "Identify social function and structure of recount texts",
    "question": "What is the primary social function of a recount text about a school trip to Yogyakarta?",
    "optionA": "To explain scientific procedures of making batik fabrics",
    "optionB": "To persuade people to purchase tour tickets to Yogyakarta",
    "optionC": "To inform and entertain readers by retelling past personal experiences chronologically",
    "optionD": "To describe the physical dimensions of ancient temples",
    "options": [
      {
        "id": "A",
        "text": "To explain scientific procedures of making batik fabrics"
      },
      {
        "id": "B",
        "text": "To persuade people to purchase tour tickets to Yogyakarta"
      },
      {
        "id": "C",
        "text": "To inform and entertain readers by retelling past personal experiences chronologically"
      },
      {
        "id": "D",
        "text": "To describe the physical dimensions of ancient temples"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Recount text retells past events in temporal sequence for informative or entertaining purposes.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-024",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Narrative Text",
    "competency": "Identify resolution in narrative legends",
    "question": "In a narrative legend about Malin Kundang, what occurs in the resolution stage of the story?",
    "optionA": "Malin Kundang set sail with rich merchants to find wealth",
    "optionB": "Malin Kundang was born in a peaceful fishing village in West Sumatra",
    "optionC": "Malin Kundang bought many trading ships in the harbor",
    "optionD": "Malin Kundang was cursed and turned into stone due to his mother's prayer",
    "options": [
      {
        "id": "A",
        "text": "Malin Kundang set sail with rich merchants to find wealth"
      },
      {
        "id": "B",
        "text": "Malin Kundang was born in a peaceful fishing village in West Sumatra"
      },
      {
        "id": "C",
        "text": "Malin Kundang bought many trading ships in the harbor"
      },
      {
        "id": "D",
        "text": "Malin Kundang was cursed and turned into stone due to his mother's prayer"
      }
    ],
    "correctAnswer": "D",
    "explanation": "The resolution resolves the central conflict, concluding with Malin turning into stone.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-025",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Descriptive Text",
    "competency": "Identify dominant tense in descriptive texts",
    "question": "Which grammatical tense is dominantly employed throughout descriptive texts that depict monuments or tourist destinations?",
    "optionA": "Simple Present Tense",
    "optionB": "Past Continuous Tense",
    "optionC": "Future Perfect Tense",
    "optionD": "Past Perfect Tense",
    "options": [
      {
        "id": "A",
        "text": "Simple Present Tense"
      },
      {
        "id": "B",
        "text": "Past Continuous Tense"
      },
      {
        "id": "C",
        "text": "Future Perfect Tense"
      },
      {
        "id": "D",
        "text": "Past Perfect Tense"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Descriptive texts describe permanent facts and features, using Simple Present Tense.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-026",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Procedure Text",
    "competency": "Identify connectives of sequence in recipe instructions",
    "question": "In a recipe text on how to brew herbal tea, which transitional phrase indicates the penultimate or final step?",
    "optionA": "First, boil two cups of clean water in a kettle.",
    "optionB": "Finally, serve the hot tea in porcelain cups with a slice of lemon.",
    "optionC": "Secondly, crush the fresh ginger roots gently.",
    "optionD": "Before starting, wash all kitchen utensils thoroughly.",
    "options": [
      {
        "id": "A",
        "text": "First, boil two cups of clean water in a kettle."
      },
      {
        "id": "B",
        "text": "Finally, serve the hot tea in porcelain cups with a slice of lemon."
      },
      {
        "id": "C",
        "text": "Secondly, crush the fresh ginger roots gently."
      },
      {
        "id": "D",
        "text": "Before starting, wash all kitchen utensils thoroughly."
      }
    ],
    "correctAnswer": "B",
    "explanation": "\"Finally\" signals the concluding step of a procedure.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-027",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Report Text",
    "competency": "Differentiate report text from descriptive text",
    "question": "A text presenting general scientific facts about whales (mammalian traits, habitat, echolocation) is categorized as...",
    "optionA": "Personal recount text",
    "optionB": "Imaginative fantasy narrative",
    "optionC": "Information Report text",
    "optionD": "Product commercial advertisement",
    "options": [
      {
        "id": "A",
        "text": "Personal recount text"
      },
      {
        "id": "B",
        "text": "Imaginative fantasy narrative"
      },
      {
        "id": "C",
        "text": "Information Report text"
      },
      {
        "id": "D",
        "text": "Product commercial advertisement"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Information reports classify and describe general natural phenomena objectively.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-028",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Conjunctions",
    "competency": "Use causal conjunctions correctly",
    "question": "Complete the sentence: \"Hasan studied diligently every evening; [ ... ], he achieved the highest mathematics score in the exam.\"",
    "optionA": "nevertheless",
    "optionB": "although",
    "optionC": "otherwise",
    "optionD": "consequently / therefore",
    "options": [
      {
        "id": "A",
        "text": "nevertheless"
      },
      {
        "id": "B",
        "text": "although"
      },
      {
        "id": "C",
        "text": "otherwise"
      },
      {
        "id": "D",
        "text": "consequently / therefore"
      }
    ],
    "correctAnswer": "D",
    "explanation": "\"Consequently/therefore\" signals the result of studying diligently.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-029",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Conjunctions of Contrast",
    "competency": "Apply contrasting conjunctions",
    "question": "Complete the sentence: \"[ ... ] it was raining heavily outside, the madrasah students still walked to school enthusiastically.\"",
    "optionA": "Although / Even though",
    "optionB": "Because",
    "optionC": "Since",
    "optionD": "Due to",
    "options": [
      {
        "id": "A",
        "text": "Although / Even though"
      },
      {
        "id": "B",
        "text": "Because"
      },
      {
        "id": "C",
        "text": "Since"
      },
      {
        "id": "D",
        "text": "Due to"
      }
    ],
    "correctAnswer": "A",
    "explanation": "\"Although\" connects contrasting clauses (heavy rain vs walking enthusiastically).",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-030",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Prepositions of Time and Place",
    "competency": "Use prepositions in, on, and at accurately",
    "question": "Sentence: \"The Madrasah English Club meeting will be held [ ... ] Monday morning [ ... ] the multi-purpose auditorium.\"",
    "optionA": "at - on",
    "optionB": "on - in",
    "optionC": "in - at",
    "optionD": "on - at",
    "options": [
      {
        "id": "A",
        "text": "at - on"
      },
      {
        "id": "B",
        "text": "on - in"
      },
      {
        "id": "C",
        "text": "in - at"
      },
      {
        "id": "D",
        "text": "on - at"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Days of the week take \"on\" (on Monday) and enclosed rooms take \"in\" (in the auditorium).",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-031",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Vocabulary in Context",
    "competency": "Determine synonym of academic words",
    "question": "In the passage: \"The teacher appreciated the students' dedication.\" What is the closest synonym of the word \"dedication\"?",
    "optionA": "Neglect and carelessness",
    "optionB": "Hesitation and uncertainty",
    "optionC": "Commitment and hard work",
    "optionD": "Suspicion and doubt",
    "options": [
      {
        "id": "A",
        "text": "Neglect and carelessness"
      },
      {
        "id": "B",
        "text": "Hesitation and uncertainty"
      },
      {
        "id": "C",
        "text": "Commitment and hard work"
      },
      {
        "id": "D",
        "text": "Suspicion and doubt"
      }
    ],
    "correctAnswer": "C",
    "explanation": "\"Dedication\" means devotion and persistent commitment.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-032",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Vocabulary in Context",
    "competency": "Determine antonym of descriptive adjectives",
    "question": "What is the antonym of the word \"generous\" in the story about the compassionate caliph?",
    "optionA": "Kind-hearted",
    "optionB": "Charitable",
    "optionC": "Merciful",
    "optionD": "Stingy / selfish",
    "options": [
      {
        "id": "A",
        "text": "Kind-hearted"
      },
      {
        "id": "B",
        "text": "Charitable"
      },
      {
        "id": "C",
        "text": "Merciful"
      },
      {
        "id": "D",
        "text": "Stingy / selfish"
      }
    ],
    "correctAnswer": "D",
    "explanation": "The opposite of generous (suka memberi) is stingy (kikir/pelit).",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-033",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Reading Comprehension",
    "competency": "Identify the main idea of an expository paragraph",
    "question": "A paragraph describes how regular morning exercise improves blood circulation, boosts brain memory, and reduces student stress. The main idea is...",
    "optionA": "The multifaceted health benefits of morning physical exercise",
    "optionB": "The best schedule for buying running shoes",
    "optionC": "The history of marathon competitions in ancient Greece",
    "optionD": "The financial cost of building sports arenas",
    "options": [
      {
        "id": "A",
        "text": "The multifaceted health benefits of morning physical exercise"
      },
      {
        "id": "B",
        "text": "The best schedule for buying running shoes"
      },
      {
        "id": "C",
        "text": "The history of marathon competitions in ancient Greece"
      },
      {
        "id": "D",
        "text": "The financial cost of building sports arenas"
      }
    ],
    "correctAnswer": "A",
    "explanation": "All sentences elaborate the benefits of morning exercise.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-034",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Reading Comprehension",
    "competency": "Identify explicit factual details in a narrative text",
    "question": "In the story of Sangkuriang, why did Dayang Sumbi wave her magical red scarf at dawn?",
    "optionA": "To welcome foreign merchants arriving at the port",
    "optionB": "To trick the rooster into crowing and make Sangkuriang fail the impossible condition",
    "optionC": "To guide Sangkuriang back home safely in the dark",
    "optionD": "To summon woodland animals to help Sangkuriang build the boat",
    "options": [
      {
        "id": "A",
        "text": "To welcome foreign merchants arriving at the port"
      },
      {
        "id": "B",
        "text": "To trick the rooster into crowing and make Sangkuriang fail the impossible condition"
      },
      {
        "id": "C",
        "text": "To guide Sangkuriang back home safely in the dark"
      },
      {
        "id": "D",
        "text": "To summon woodland animals to help Sangkuriang build the boat"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Dayang Sumbi tricked the spirits into thinking dawn had broken so the boat wouldn't be finished.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-035",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Conditional Sentences",
    "competency": "Apply Conditional Type 1 for real future possibilities",
    "question": "Complete the sentence: \"If we [ ... ] to the madrasah early, we [ ... ] the morning Quran recitation.\"",
    "optionA": "came - will join",
    "optionB": "will come - joined",
    "optionC": "come - will join",
    "optionD": "comes - would join",
    "options": [
      {
        "id": "A",
        "text": "came - will join"
      },
      {
        "id": "B",
        "text": "will come - joined"
      },
      {
        "id": "C",
        "text": "come - will join"
      },
      {
        "id": "D",
        "text": "comes - would join"
      }
    ],
    "correctAnswer": "C",
    "explanation": "First Conditional format: If + Simple Present (come), will + bare infinitive (will join).",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-036",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Question Tags",
    "competency": "Apply appropriate question tags in spoken dialogue",
    "question": "Complete the question tag: \"You have submitted your science assignment to Mr. Anwar, [ ... ]?\"",
    "optionA": "don't you",
    "optionB": "didn't you",
    "optionC": "aren't you",
    "optionD": "haven't you",
    "options": [
      {
        "id": "A",
        "text": "don't you"
      },
      {
        "id": "B",
        "text": "didn't you"
      },
      {
        "id": "C",
        "text": "aren't you"
      },
      {
        "id": "D",
        "text": "haven't you"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Positive present perfect statement with \"have\" takes the negative tag \"haven't you\".",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-037",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Pronouns",
    "competency": "Use possessive adjectives and pronouns correctly",
    "question": "Sentence: \"Fatimah and Aisyah left [ ... ] dictionaries in the language lab, so the teacher asked them to take [ ... ] back.\"",
    "optionA": "their - them",
    "optionB": "them - their",
    "optionC": "they - theirs",
    "optionD": "its - it",
    "options": [
      {
        "id": "A",
        "text": "their - them"
      },
      {
        "id": "B",
        "text": "them - their"
      },
      {
        "id": "C",
        "text": "they - theirs"
      },
      {
        "id": "D",
        "text": "its - it"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Possessive adjective before noun is \"their\", and object pronoun for dictionaries is \"them\".",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-038",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Relative Clauses",
    "competency": "Use relative pronouns who, which, and whose",
    "question": "Sentence: \"The young scientist [ ... ] invention won the silver medal at the madrasah expo was honored by the minister.\"",
    "optionA": "who",
    "optionB": "whose",
    "optionC": "which",
    "optionD": "whom",
    "options": [
      {
        "id": "A",
        "text": "who"
      },
      {
        "id": "B",
        "text": "whose"
      },
      {
        "id": "C",
        "text": "which"
      },
      {
        "id": "D",
        "text": "whom"
      }
    ],
    "correctAnswer": "B",
    "explanation": "\"Whose\" shows possession (whose invention = her/his invention).",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-039",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Short Message",
    "competency": "Infer communicative intention in short text messages",
    "question": "Text message: \"Hi Farhan, please don't forget to bring the projector cable tomorrow. Our group will present first.\" The sender's purpose is...",
    "optionA": "To cancel the presentation schedule",
    "optionB": "To invite Farhan to watch movies after school",
    "optionC": "To remind Farhan about bringing a required presentation device",
    "optionD": "To congratulate Farhan on his speech test",
    "options": [
      {
        "id": "A",
        "text": "To cancel the presentation schedule"
      },
      {
        "id": "B",
        "text": "To invite Farhan to watch movies after school"
      },
      {
        "id": "C",
        "text": "To remind Farhan about bringing a required presentation device"
      },
      {
        "id": "D",
        "text": "To congratulate Farhan on his speech test"
      }
    ],
    "correctAnswer": "C",
    "explanation": "\"Please don't forget to bring...\" explicitly reminds the recipient.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-040",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Job Advertisements",
    "competency": "Extract necessary qualifications from vacancy ads",
    "question": "Ad: \"WANTED: English Teacher for MTs. Requirements: Bachelor's degree in English Education, fluent spoken English, min. 2 years experience.\" A candidate MUST...",
    "optionA": "Be willing to teach without compensation for two years",
    "optionB": "Hold a master's degree in administrative accounting",
    "optionC": "Live within five meters from the school premises",
    "optionD": "Hold an undergraduate English education degree and have teaching experience",
    "options": [
      {
        "id": "A",
        "text": "Be willing to teach without compensation for two years"
      },
      {
        "id": "B",
        "text": "Hold a master's degree in administrative accounting"
      },
      {
        "id": "C",
        "text": "Live within five meters from the school premises"
      },
      {
        "id": "D",
        "text": "Hold an undergraduate English education degree and have teaching experience"
      }
    ],
    "correctAnswer": "D",
    "explanation": "The requirements explicitly specify a Bachelor's degree in English and 2 years experience.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-041",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Narrative Fable",
    "competency": "Extract moral lesson from fables",
    "question": "In the classic fable \"The Tortoise and the Hare\", what core value does the tortoise demonstrate?",
    "optionA": "Persistence, steady focus, and humility overcome arrogant overconfidence",
    "optionB": "Speed and boastfulness are always superior",
    "optionC": "Sleeping during work hours is healthy for runners",
    "optionD": "Cheating during athletic contests is acceptable",
    "options": [
      {
        "id": "A",
        "text": "Persistence, steady focus, and humility overcome arrogant overconfidence"
      },
      {
        "id": "B",
        "text": "Speed and boastfulness are always superior"
      },
      {
        "id": "C",
        "text": "Sleeping during work hours is healthy for runners"
      },
      {
        "id": "D",
        "text": "Cheating during athletic contests is acceptable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The tortoise wins through patient determination while the hare loses to overconfidence.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-042",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Expressions of Sympathy",
    "competency": "Offer appropriate condolence and sympathy",
    "question": "Friend: \"I am really devastated because my grandfather passed away yesterday.\" You: \"[ ... ]\"",
    "optionA": "Congratulations on your great achievement!",
    "optionB": "I am deeply sorry for your loss. May Allah grant you patience and strength.",
    "optionC": "I totally disagree with what you just said.",
    "optionD": "That sounds fantastic, have a wonderful time!",
    "options": [
      {
        "id": "A",
        "text": "Congratulations on your great achievement!"
      },
      {
        "id": "B",
        "text": "I am deeply sorry for your loss. May Allah grant you patience and strength."
      },
      {
        "id": "C",
        "text": "I totally disagree with what you just said."
      },
      {
        "id": "D",
        "text": "That sounds fantastic, have a wonderful time!"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Expressions of condolence comfort the bereaved with sympathy.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-043",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Shopping and Quantity",
    "competency": "Use quantifiers much, many, few, and little",
    "question": "Sentence: \"There is only a [ ... ] olive oil left in the bottle, but we have [ ... ] apples in the fruit basket.\"",
    "optionA": "few - much",
    "optionB": "many - little",
    "optionC": "little - many",
    "optionD": "much - few",
    "options": [
      {
        "id": "A",
        "text": "few - much"
      },
      {
        "id": "B",
        "text": "many - little"
      },
      {
        "id": "C",
        "text": "little - many"
      },
      {
        "id": "D",
        "text": "much - few"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Uncountable noun (oil) takes \"little\", while plural countable noun (apples) takes \"many\".",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-044",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Grammar: Gerunds vs Infinitives",
    "competency": "Identify verbs followed by gerunds",
    "question": "Sentence: \"All madrasah students enjoy [ ... ] English dialogue in pairs during conversation class.\"",
    "optionA": "to practice",
    "optionB": "practiced",
    "optionC": "practice",
    "optionD": "practicing",
    "options": [
      {
        "id": "A",
        "text": "to practice"
      },
      {
        "id": "B",
        "text": "practiced"
      },
      {
        "id": "C",
        "text": "practice"
      },
      {
        "id": "D",
        "text": "practicing"
      }
    ],
    "correctAnswer": "D",
    "explanation": "The verb \"enjoy\" is strictly followed by a gerund (-ing form): enjoy practicing.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-045",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Reading Signs",
    "competency": "Interpret library cautionary signage",
    "question": "Sign in the madrasah reading room: \"SILENCE PLEASE. KINDLY MUTE ALL MOBILE DEVICES.\" What must visitors do?",
    "optionA": "Keep quiet and turn off or silence phone ringtones",
    "optionB": "Play educational audio podcasts at full volume",
    "optionC": "Conduct loud group phone conferences",
    "optionD": "Leave mobile phones on the reception floor",
    "options": [
      {
        "id": "A",
        "text": "Keep quiet and turn off or silence phone ringtones"
      },
      {
        "id": "B",
        "text": "Play educational audio podcasts at full volume"
      },
      {
        "id": "C",
        "text": "Conduct loud group phone conferences"
      },
      {
        "id": "D",
        "text": "Leave mobile phones on the reception floor"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Silence please requires visitors to maintain quietness and silence electronic devices.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-046",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Present Perfect Tense",
    "competency": "Apply Present Perfect for actions completed with present relevance",
    "question": "Complete: \"Mr. Halim [ ... ] at this Islamic boarding school for over ten years, and he loves his students dearly.\"",
    "optionA": "have taught",
    "optionB": "has taught",
    "optionC": "is teaching",
    "optionD": "teaches",
    "options": [
      {
        "id": "A",
        "text": "have taught"
      },
      {
        "id": "B",
        "text": "has taught"
      },
      {
        "id": "C",
        "text": "is teaching"
      },
      {
        "id": "D",
        "text": "teaches"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Singular subject \"Mr. Halim\" with duration \"for over ten years\" takes \"has taught\".",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-047",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Describing People",
    "competency": "Analyze adjectives depicting personality traits",
    "question": "Sentence: \"Ahmad is always willing to share his lunch with needy classmates. He is very [ ... ].\"",
    "optionA": "arrogant and boastful",
    "optionB": "greedy and self-centered",
    "optionC": "generous and benevolent",
    "optionD": "cowardly and timid",
    "options": [
      {
        "id": "A",
        "text": "arrogant and boastful"
      },
      {
        "id": "B",
        "text": "greedy and self-centered"
      },
      {
        "id": "C",
        "text": "generous and benevolent"
      },
      {
        "id": "D",
        "text": "cowardly and timid"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Sharing food with the needy reflects generosity and benevolence.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-048",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Giving Directions",
    "competency": "Understand directional prepositions and imperatives",
    "question": "Direction: \"Walk straight along the hallway, turn left at the laboratory, and the headmaster's office is [ ... ] your right.\"",
    "optionA": "in",
    "optionB": "at",
    "optionC": "above",
    "optionD": "on",
    "options": [
      {
        "id": "A",
        "text": "in"
      },
      {
        "id": "B",
        "text": "at"
      },
      {
        "id": "C",
        "text": "above"
      },
      {
        "id": "D",
        "text": "on"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Side or orientation takes preposition \"on\" (on your right).",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-049",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Comparative Idioms",
    "competency": "Recognize common similes in English literature",
    "question": "Larik simile: \"The santri memorized the chapter rapidly; he is as sharp as a [ ... ].\"",
    "optionA": "needle / tack",
    "optionB": "rock",
    "optionC": "pillow",
    "optionD": "balloon",
    "options": [
      {
        "id": "A",
        "text": "needle / tack"
      },
      {
        "id": "B",
        "text": "rock"
      },
      {
        "id": "C",
        "text": "pillow"
      },
      {
        "id": "D",
        "text": "balloon"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The idiom \"as sharp as a needle/tack\" describes mental sharpness and intellect.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-050",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Future Tense",
    "competency": "Express planned future intentions with be going to",
    "question": "Sentence: \"Look at those dark overcast clouds! It [ ... ] rain in a few minutes.\"",
    "optionA": "will be",
    "optionB": "is going to",
    "optionC": "might have",
    "optionD": "shall not",
    "options": [
      {
        "id": "A",
        "text": "will be"
      },
      {
        "id": "B",
        "text": "is going to"
      },
      {
        "id": "C",
        "text": "might have"
      },
      {
        "id": "D",
        "text": "shall not"
      }
    ],
    "correctAnswer": "B",
    "explanation": "\"Is going to\" is used when present visible evidence indicates an impending event.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-051",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Spelling and Morphology",
    "competency": "Identify correct spelling of plural nouns ending in -y",
    "question": "What is the correct plural form of the noun \"country\" in an international geography text?",
    "optionA": "countrys",
    "optionB": "countreis",
    "optionC": "countries",
    "optionD": "countryies",
    "options": [
      {
        "id": "A",
        "text": "countrys"
      },
      {
        "id": "B",
        "text": "countreis"
      },
      {
        "id": "C",
        "text": "countries"
      },
      {
        "id": "D",
        "text": "countryies"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Consonant + y changes to -ies in plural: country -> countries.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-052",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Invitations",
    "competency": "Politely accept or decline an invitation",
    "question": "Invitation: \"Would you like to come to our madrasah graduation party tonight?\" Decline politely:",
    "optionA": "I don't care about your party at all.",
    "optionB": "No way, that event sounds boring.",
    "optionC": "Why do you ask me such a question?",
    "optionD": "I would love to, but I have a prior family commitment.",
    "options": [
      {
        "id": "A",
        "text": "I don't care about your party at all."
      },
      {
        "id": "B",
        "text": "No way, that event sounds boring."
      },
      {
        "id": "C",
        "text": "Why do you ask me such a question?"
      },
      {
        "id": "D",
        "text": "I would love to, but I have a prior family commitment."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Polite refusal expresses gratitude/desire first (\"I would love to\"), followed by the reason.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-053",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Reading Comprehension",
    "competency": "Identify cause-effect relationships in scientific passages",
    "question": "Text: \"Excessive emission of greenhouse gases traps thermal radiation in the atmosphere, leading to rising global sea levels.\" What directly causes sea levels to rise?",
    "optionA": "Trapped thermal heat in the atmosphere due to greenhouse emissions",
    "optionB": "Decreased industrial manufacturing in polar regions",
    "optionC": "Excessive harvesting of marine algae by fishermen",
    "optionD": "Construction of seawalls along harbor coastlines",
    "options": [
      {
        "id": "A",
        "text": "Trapped thermal heat in the atmosphere due to greenhouse emissions"
      },
      {
        "id": "B",
        "text": "Decreased industrial manufacturing in polar regions"
      },
      {
        "id": "C",
        "text": "Excessive harvesting of marine algae by fishermen"
      },
      {
        "id": "D",
        "text": "Construction of seawalls along harbor coastlines"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The text links trapped thermal radiation to rising sea levels.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-054",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Grammar: Irregular Plurals",
    "competency": "Apply irregular plural forms",
    "question": "Sentence: \"The madrasah dentist examined the [ ... ] of all first-grade students today.\"",
    "optionA": "tooths",
    "optionB": "teeth",
    "optionC": "toothes",
    "optionD": "teethes",
    "options": [
      {
        "id": "A",
        "text": "tooths"
      },
      {
        "id": "B",
        "text": "teeth"
      },
      {
        "id": "C",
        "text": "toothes"
      },
      {
        "id": "D",
        "text": "teethes"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The plural form of tooth is teeth.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-055",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Grammar: Reflexive Pronouns",
    "competency": "Use reflexive pronouns accurately",
    "question": "Sentence: \"The little boy managed to tie his shoelaces by [ ... ] without any assistance.\"",
    "optionA": "itself",
    "optionB": "herself",
    "optionC": "himself",
    "optionD": "themselves",
    "options": [
      {
        "id": "A",
        "text": "itself"
      },
      {
        "id": "B",
        "text": "herself"
      },
      {
        "id": "C",
        "text": "himself"
      },
      {
        "id": "D",
        "text": "themselves"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Singular male subject (boy) takes reflexive pronoun \"himself\".",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-056",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Discourse Markers",
    "competency": "Use discourse markers to summarize an oral presentation",
    "question": "Presentation conclusion: \"[ ... ], digital madrasahs foster engaging and flexible learning for tomorrow's leaders.\"",
    "optionA": "For instance",
    "optionB": "On the other hand",
    "optionC": "First of all",
    "optionD": "In conclusion / To sum up",
    "options": [
      {
        "id": "A",
        "text": "For instance"
      },
      {
        "id": "B",
        "text": "On the other hand"
      },
      {
        "id": "C",
        "text": "First of all"
      },
      {
        "id": "D",
        "text": "In conclusion / To sum up"
      }
    ],
    "correctAnswer": "D",
    "explanation": "\"In conclusion\" signals the final summary of a speech.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-057",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Idiomatic Expressions",
    "competency": "Interpret idiomatic meaning in everyday dialogue",
    "question": "Dialogue: \"Don't give up now, Sarah. Hang in there!\" What does \"Hang in there\" mean?",
    "optionA": "Stay determined and do not lose hope during tough times",
    "optionB": "Hang your clothes in the wardrobe",
    "optionC": "Leave the competition immediately",
    "optionD": "Climb the tree quickly",
    "options": [
      {
        "id": "A",
        "text": "Stay determined and do not lose hope during tough times"
      },
      {
        "id": "B",
        "text": "Hang your clothes in the wardrobe"
      },
      {
        "id": "C",
        "text": "Leave the competition immediately"
      },
      {
        "id": "D",
        "text": "Climb the tree quickly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "\"Hang in there\" is an idiom meaning to persevere and remain hopeful.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-058",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Grammar: Adverbs of Frequency",
    "competency": "Position adverbs of frequency in standard sentences",
    "question": "Identify the grammatically correct word order for the adverb \"always\":",
    "optionA": "Bilal arrives always at the madrasah before 6:30 AM.",
    "optionB": "Bilal always arrives at the madrasah before 6:30 AM.",
    "optionC": "Always Bilal arrives at the madrasah before 6:30 AM.",
    "optionD": "Bilal arrives at the madrasah always before 6:30 AM.",
    "options": [
      {
        "id": "A",
        "text": "Bilal arrives always at the madrasah before 6:30 AM."
      },
      {
        "id": "B",
        "text": "Bilal always arrives at the madrasah before 6:30 AM."
      },
      {
        "id": "C",
        "text": "Always Bilal arrives at the madrasah before 6:30 AM."
      },
      {
        "id": "D",
        "text": "Bilal arrives at the madrasah always before 6:30 AM."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Adverbs of frequency typically go before the main verb: always arrives.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-059",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Reading Comprehension",
    "competency": "Identify reference words (anaphora)",
    "question": "Sentence: \"Dr. Hamka was a prolific author. He published numerous influential books.\" The pronoun \"He\" refers to...",
    "optionA": "The publisher",
    "optionB": "The books",
    "optionC": "Dr. Hamka",
    "optionD": "The readers",
    "options": [
      {
        "id": "A",
        "text": "The publisher"
      },
      {
        "id": "B",
        "text": "The books"
      },
      {
        "id": "C",
        "text": "Dr. Hamka"
      },
      {
        "id": "D",
        "text": "The readers"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The pronoun \"He\" refers back to Dr. Hamka.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-eng-060",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MTs",
    "subtopic": "Writing Skills",
    "competency": "Select appropriate greeting in formal academic correspondence",
    "question": "In a formal scholarship application letter to the university admission committee, the most professional opening salutation is...",
    "optionA": "Hey buddy, what's up?",
    "optionB": "Hi folks, look at my score!",
    "optionC": "Good day, my best pal,",
    "optionD": "Dear Admissions Committee, / Dear Respected Sir or Madam,",
    "options": [
      {
        "id": "A",
        "text": "Hey buddy, what's up?"
      },
      {
        "id": "B",
        "text": "Hi folks, look at my score!"
      },
      {
        "id": "C",
        "text": "Good day, my best pal,"
      },
      {
        "id": "D",
        "text": "Dear Admissions Committee, / Dear Respected Sir or Madam,"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Formal application letters require dignified, standard salutations.",
    "tip": "Focus on contextual meaning, communicative purpose, and grammatical accuracy.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-001",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Letak Astronomis dan Geografis Indonesia",
    "competency": "Menganalisis pengaruh letak astronomis dan geografis wilayah Indonesia",
    "question": "Letak astronomis Indonesia pada 6° LU - 11° LS dan 95° BT - 141° BT menyebabkan Indonesia beriklim tropis dan memiliki...",
    "optionA": "Tiga zona waktu (WIB, WITA, WIT)",
    "optionB": "Empat musim iklim sedang",
    "optionC": "Dua zona iklim gurun subtropis",
    "optionD": "Satu zona waktu tunggal nasional",
    "options": [
      {
        "id": "A",
        "text": "Tiga zona waktu (WIB, WITA, WIT)"
      },
      {
        "id": "B",
        "text": "Empat musim iklim sedang"
      },
      {
        "id": "C",
        "text": "Dua zona iklim gurun subtropis"
      },
      {
        "id": "D",
        "text": "Satu zona waktu tunggal nasional"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Rentang bujur 46° dibagi interval 15° menghasilkan 3 zona waktu: WIB, WITA, dan WIT.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-002",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Geomorfologi dan Vulkanisme",
    "competency": "Menganalisis dampak jalur cincin api (Ring of Fire) bagi Indonesia",
    "question": "Indonesia dilalui oleh dua jalur pegunungan muda dunia, yaitu Sirkum Pasifik dan Sirkum Mediterania. Dampak positif fenomena geologis ini bagi sektor pertanian adalah...",
    "optionA": "Sering terjadinya musim kemarau berkepanjangan",
    "optionB": "Tanah menjadi sangat subur akibat endapan abu vulkanik letusan gunung api",
    "optionC": "Tingginya kadar garam pada air tanah pedesaan",
    "optionD": "Tercapainya kestabilan kerak bumi tanpa gempa",
    "options": [
      {
        "id": "A",
        "text": "Sering terjadinya musim kemarau berkepanjangan"
      },
      {
        "id": "B",
        "text": "Tanah menjadi sangat subur akibat endapan abu vulkanik letusan gunung api"
      },
      {
        "id": "C",
        "text": "Tingginya kadar garam pada air tanah pedesaan"
      },
      {
        "id": "D",
        "text": "Tercapainya kestabilan kerak bumi tanpa gempa"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Abu vulkanik gunung api melapuk menjadi tanah andosol yang sangat kaya hara bagi pertanian.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-003",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Iklim dan Muson",
    "competency": "Menganalisis pergerakan angin muson barat dan timur",
    "question": "Angin muson barat yang bertiup dari benua Asia menuju benua Australia melintasi Samudera Hindia yang luas pada bulan Oktober - April membawa dampak...",
    "optionA": "Terjadinya musim kemarau kering di pulau Jawa",
    "optionB": "Turunnya salju tebal di kawasan khatulistiwa",
    "optionC": "Terjadinya musim penghujan di sebagian besar wilayah Indonesia",
    "optionD": "Keringnya perairan rawa dan danau pedalaman",
    "options": [
      {
        "id": "A",
        "text": "Terjadinya musim kemarau kering di pulau Jawa"
      },
      {
        "id": "B",
        "text": "Turunnya salju tebal di kawasan khatulistiwa"
      },
      {
        "id": "C",
        "text": "Terjadinya musim penghujan di sebagian besar wilayah Indonesia"
      },
      {
        "id": "D",
        "text": "Keringnya perairan rawa dan danau pedalaman"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Muson barat melewati lautan luas sehingga sarat uap air dan memicu musim hujan.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-004",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Flora dan Fauna",
    "competency": "Membedakan tipe fauna Asiatis, Peralihan, dan Australis",
    "question": "Garis khayal Wallace memisahkan persebaran fauna Indonesia tipe Asiatis dengan tipe Peralihan. Contoh satwa endemik tipe Peralihan di Sulawesi adalah...",
    "optionA": "Gajah sumatera, harimau, dan badak bercula satu",
    "optionB": "Cenderawasih, kasuari, dan kanguru pohon",
    "optionC": "Orangutan, bekantan, dan tapir melayu",
    "optionD": "Anoa, babi rusa, dan burung maleo",
    "options": [
      {
        "id": "A",
        "text": "Gajah sumatera, harimau, dan badak bercula satu"
      },
      {
        "id": "B",
        "text": "Cenderawasih, kasuari, dan kanguru pohon"
      },
      {
        "id": "C",
        "text": "Orangutan, bekantan, dan tapir melayu"
      },
      {
        "id": "D",
        "text": "Anoa, babi rusa, dan burung maleo"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Sulawesi adalah zona peralihan dengan fauna khas: anoa, babirusa, dan maleo.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-005",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Dinamika Kependudukan",
    "competency": "Menganalisis faktor pertumbuhan penduduk dan piramida penduduk",
    "question": "Piramida penduduk Indonesia yang berbentuk ekspansif (beralas lebar di bawah dan mengerucut di puncak) menunjukkan bahwa...",
    "optionA": "Proporsi penduduk usia muda (anak-anak) jauh lebih besar daripada usia tua",
    "optionB": "Tingkat kematian bayi sangat tinggi melampaui kelahiran",
    "optionC": "Mayoritas penduduk tergolong usia lanjut non-produktif",
    "optionD": "Angka harapan hidup masyarakat telah melampaui 95 tahun",
    "options": [
      {
        "id": "A",
        "text": "Proporsi penduduk usia muda (anak-anak) jauh lebih besar daripada usia tua"
      },
      {
        "id": "B",
        "text": "Tingkat kematian bayi sangat tinggi melampaui kelahiran"
      },
      {
        "id": "C",
        "text": "Mayoritas penduduk tergolong usia lanjut non-produktif"
      },
      {
        "id": "D",
        "text": "Angka harapan hidup masyarakat telah melampaui 95 tahun"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Bentuk ekspansif mencerminkan angka kelahiran tinggi sehingga kelompok usia muda mendominasi.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-006",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Kawasan ASEAN",
    "competency": "Menganalisis potensi kerja sama dan profil negara ASEAN",
    "question": "Salah satu negara pendiri ASEAN yang dijuluki \"Negeri Gajah Putih\" dan tidak pernah dijajah oleh bangsa kolonial Barat adalah...",
    "optionA": "Filipina",
    "optionB": "Thailand",
    "optionC": "Vietnam",
    "optionD": "Myanmar",
    "options": [
      {
        "id": "A",
        "text": "Filipina"
      },
      {
        "id": "B",
        "text": "Thailand"
      },
      {
        "id": "C",
        "text": "Vietnam"
      },
      {
        "id": "D",
        "text": "Myanmar"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Thailand bertindak sebagai negara penyangga (buffer state) sehingga tidak pernah dijajah bangsa Eropa.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-007",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Kondisi Geografis Benua",
    "competency": "Mengidentifikasi karakteristik bentang alam benua di dunia",
    "question": "Sungai terpanjang di dunia yang mengalir di benua Afrika dan bermuara di Laut Tengah adalah...",
    "optionA": "Sungai Amazon",
    "optionB": "Sungai Yangtze",
    "optionC": "Sungai Nil",
    "optionD": "Sungai Mississippi",
    "options": [
      {
        "id": "A",
        "text": "Sungai Amazon"
      },
      {
        "id": "B",
        "text": "Sungai Yangtze"
      },
      {
        "id": "C",
        "text": "Sungai Nil"
      },
      {
        "id": "D",
        "text": "Sungai Mississippi"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Sungai Nil di Afrika merupakan sungai terpanjang di dunia (~6.650 km).",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-008",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Interaksi Sosial",
    "competency": "Menganalisis bentuk interaksi asosiatif dan disosiatif",
    "question": "Bentuk kerja sama gotong royong antarwarga madrasah dan masyarakat dalam membersihkan saluran irigasi desa tergolong bentuk interaksi...",
    "optionA": "Disosiatif (kontravensi tersembunyi)",
    "optionB": "Konflik persaingan terbuka",
    "optionC": "Asimilasi paksaan sepihak",
    "optionD": "Asosiatif (kooperasi / kerja sama)",
    "options": [
      {
        "id": "A",
        "text": "Disosiatif (kontravensi tersembunyi)"
      },
      {
        "id": "B",
        "text": "Konflik persaingan terbuka"
      },
      {
        "id": "C",
        "text": "Asimilasi paksaan sepihak"
      },
      {
        "id": "D",
        "text": "Asosiatif (kooperasi / kerja sama)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Gotong royong adalah bentuk interaksi asosiatif yang mempersatukan masyarakat.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-009",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Mobilitas Sosial",
    "competency": "Menganalisis jenis mobilitas vertikal dan horizontal",
    "question": "Seorang guru honorer madrasah yang lulus seleksi PPPK dan diangkat menjadi kepala madrasah berprestasi mengalami mobilitas sosial...",
    "optionA": "Vertikal naik (social climbing)",
    "optionB": "Vertikal turun (social sinking)",
    "optionC": "Horizontal antargenerasi",
    "optionD": "Lateral geografis",
    "options": [
      {
        "id": "A",
        "text": "Vertikal naik (social climbing)"
      },
      {
        "id": "B",
        "text": "Vertikal turun (social sinking)"
      },
      {
        "id": "C",
        "text": "Horizontal antargenerasi"
      },
      {
        "id": "D",
        "text": "Lateral geografis"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kenaikan derajat profesi dan status sosial disebut mobilitas vertikal ke atas (social climbing).",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-010",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Pluralitas Masyarakat",
    "competency": "Menganalisis keragaman suku, ras, dan agama dalam bingkai moderasi",
    "question": "Sikap saling menghormati perbedaan tata cara ibadah dan keyakinan antarumat beragama tanpa mencampuradukkan akidah disebut sikap...",
    "optionA": "Etnosentrisme kesukuan",
    "optionB": "Toleransi dan moderasi beragama",
    "optionC": "Primordialisme kedaerahan",
    "optionD": "Chauvinisme sempit",
    "options": [
      {
        "id": "A",
        "text": "Etnosentrisme kesukuan"
      },
      {
        "id": "B",
        "text": "Toleransi dan moderasi beragama"
      },
      {
        "id": "C",
        "text": "Primordialisme kedaerahan"
      },
      {
        "id": "D",
        "text": "Chauvinisme sempit"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Toleransi adalah saling menghargai perbedaan keyakinan tanpa kompromi akidah.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-011",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Konflik dan Integrasi Sosial",
    "competency": "Menganalisis penyelesaian konflik sosial",
    "question": "Penyelesaian sengketa batas tanah antarwarga desa melalui bantuan tokoh adat setempat yang bertindak sebagai penengah tanpa memaksakan keputusan disebut...",
    "optionA": "Arbitrase yang mengikat hukum",
    "optionB": "Koersi melalui kekerasan aparat",
    "optionC": "Mediasi",
    "optionD": "Ajudikasi di meja hijau peradilan",
    "options": [
      {
        "id": "A",
        "text": "Arbitrase yang mengikat hukum"
      },
      {
        "id": "B",
        "text": "Koersi melalui kekerasan aparat"
      },
      {
        "id": "C",
        "text": "Mediasi"
      },
      {
        "id": "D",
        "text": "Ajudikasi di meja hijau peradilan"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Mediasi menggunakan pihak ketiga netral yang berperan sebagai penasihat, bukan pemutus mutlak.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-012",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Perubahan Sosial Budaya",
    "competency": "Menganalisis faktor pendorong dan penghambat perubahan sosial",
    "question": "Sikap masyarakat tradisional yang tertutup dan menganggap kebudayaan luar selalu membawa dampak buruk bagi generasi muda tergolong faktor...",
    "optionA": "Pendorong inovasi teknologi terbarukan",
    "optionB": "Akselerator integrasi globalisasi",
    "optionC": "Pemicu asimilasi kultural",
    "optionD": "Penghambat terjadinya perubahan sosial budaya",
    "options": [
      {
        "id": "A",
        "text": "Pendorong inovasi teknologi terbarukan"
      },
      {
        "id": "B",
        "text": "Akselerator integrasi globalisasi"
      },
      {
        "id": "C",
        "text": "Pemicu asimilasi kultural"
      },
      {
        "id": "D",
        "text": "Penghambat terjadinya perubahan sosial budaya"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Prasangka buruk terhadap hal baru dan keterasingan geografis menghambat perubahan sosial.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-013",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Globalisasi",
    "competency": "Menganalisis dampak globalisasi dalam kehidupan madrasah",
    "question": "Dampak negatif globalisasi di bidang budaya yang ditandai dengan gaya hidup meniru budaya barat secara membabi buta dinamakan...",
    "optionA": "Westernisasi",
    "optionB": "Modernisasi rasional",
    "optionC": "Sekularisme ilmiah",
    "optionD": "Individualisme adaptif",
    "options": [
      {
        "id": "A",
        "text": "Westernisasi"
      },
      {
        "id": "B",
        "text": "Modernisasi rasional"
      },
      {
        "id": "C",
        "text": "Sekularisme ilmiah"
      },
      {
        "id": "D",
        "text": "Individualisme adaptif"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Westernisasi adalah peniruan gaya hidup kebarat-baratan tanpa filter nilai luhur.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-014",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Kelangkaan dan Kebutuhan Manusia",
    "competency": "Menganalisis konsep kelangkaan dan skala prioritas",
    "question": "Masalah ekonomi mendasar yang dialami setiap individu dan bangsa timbul karena...",
    "optionA": "Uang yang beredar di masyarakat terlalu banyak",
    "optionB": "Kebutuhan manusia tidak terbatas sementara alat pemuas kebutuhan jumlahnya terbatas",
    "optionC": "Pemerintah menetapkan harga kebutuhan pokok terlalu rendah",
    "optionD": "Teknologi produksi berkembang melampaui kebutuhan",
    "options": [
      {
        "id": "A",
        "text": "Uang yang beredar di masyarakat terlalu banyak"
      },
      {
        "id": "B",
        "text": "Kebutuhan manusia tidak terbatas sementara alat pemuas kebutuhan jumlahnya terbatas"
      },
      {
        "id": "C",
        "text": "Pemerintah menetapkan harga kebutuhan pokok terlalu rendah"
      },
      {
        "id": "D",
        "text": "Teknologi produksi berkembang melampaui kebutuhan"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Kelangkaan (scarcity) muncul dari kesenjangan kebutuhan tak terbatas vs sumber daya terbatas.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-015",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Prinsip dan Motif Ekonomi",
    "competency": "Membedakan prinsip ekonomi produsen dan konsumen",
    "question": "Pedoman tindakan manusia yang berupaya memperoleh hasil optimal dengan pengorbanan tertentu dinamakan...",
    "optionA": "Motif spekulasi keuntungan liar",
    "optionB": "Hukum ekonomi proteksi",
    "optionC": "Prinsip ekonomi",
    "optionD": "Politik dumping perdagangan",
    "options": [
      {
        "id": "A",
        "text": "Motif spekulasi keuntungan liar"
      },
      {
        "id": "B",
        "text": "Hukum ekonomi proteksi"
      },
      {
        "id": "C",
        "text": "Prinsip ekonomi"
      },
      {
        "id": "D",
        "text": "Politik dumping perdagangan"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Prinsip ekonomi mengedepankan efisiensi: pengorbanan tertentu untuk hasil optimal.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-016",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Permintaan dan Penawaran",
    "competency": "Menganalisis kurva dan hukum permintaan",
    "question": "Menurut Hukum Permintaan, jika harga suatu barang kebutuhan di pasar madrasah mengalami kenaikan, maka jumlah barang yang diminta oleh pembeli akan...",
    "optionA": "Mengalami peningkatan secara berlipat",
    "optionB": "Tetap stabil tidak terpengaruh harga",
    "optionC": "Mencapai titik equilibrium tanpa batas",
    "optionD": "Mengalami penurunan (ceteris paribus)",
    "options": [
      {
        "id": "A",
        "text": "Mengalami peningkatan secara berlipat"
      },
      {
        "id": "B",
        "text": "Tetap stabil tidak terpengaruh harga"
      },
      {
        "id": "C",
        "text": "Mencapai titik equilibrium tanpa batas"
      },
      {
        "id": "D",
        "text": "Mengalami penurunan (ceteris paribus)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Hukum permintaan menyatakan harga dan jumlah permintaan berbanding terbalik.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-017",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Pelaku Ekonomi (Circular Flow)",
    "competency": "Menganalisis peran 4 pelaku ekonomi dalam diagram aliran melingkar",
    "question": "Peran Rumah Tangga Konsumen (RTK) dalam pasar faktor produksi pada diagram arus melingkar adalah sebagai...",
    "optionA": "Penyedia faktor produksi berupa tanah, tenaga kerja, modal, dan kewirausahaan",
    "optionB": "Penghasil barang jadi dan jasa untuk diekspor",
    "optionC": "Pembuat regulasi perpajakan nasional",
    "optionD": "Penyalur subsidi energi bagi industri berat",
    "options": [
      {
        "id": "A",
        "text": "Penyedia faktor produksi berupa tanah, tenaga kerja, modal, dan kewirausahaan"
      },
      {
        "id": "B",
        "text": "Penghasil barang jadi dan jasa untuk diekspor"
      },
      {
        "id": "C",
        "text": "Pembuat regulasi perpajakan nasional"
      },
      {
        "id": "D",
        "text": "Penyalur subsidi energi bagi industri berat"
      }
    ],
    "correctAnswer": "A",
    "explanation": "RTK adalah pemilik sekaligus penyedia faktor produksi yang disewakan ke RTP.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-018",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Lembaga Keuangan dan Bank",
    "competency": "Membedakan fungsi bank sentral dan bank syariah",
    "question": "Prinsip operasional perbankan syariah yang menerapkan sistem bagi hasil pendapatan usaha antara nasabah dan pihak bank dinamakan...",
    "optionA": "Riba fadhl dan maisir",
    "optionB": "Mudharabah dan Musyarakah",
    "optionC": "Gharar dan spekulasi kurs",
    "optionD": "Ijon dan barter tradisional",
    "options": [
      {
        "id": "A",
        "text": "Riba fadhl dan maisir"
      },
      {
        "id": "B",
        "text": "Mudharabah dan Musyarakah"
      },
      {
        "id": "C",
        "text": "Gharar dan spekulasi kurs"
      },
      {
        "id": "D",
        "text": "Ijon dan barter tradisional"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Mudharabah (bagi hasil pengelola-pemodal) dan Musyarakah (kemitraan) adalah akad syariah utama.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-019",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Perdagangan Internasional",
    "competency": "Menganalisis manfaat ekspor dan devisa negara",
    "question": "Kebijakan pemerintah menjual barang komoditas di pasar luar negeri dengan harga yang lebih murah daripada di dalam negeri dinamakan politik...",
    "optionA": "Proteksionisme kuota",
    "optionB": "Tarif bea masuk impor",
    "optionC": "Dumping",
    "optionD": "Subsidi produsen lokal",
    "options": [
      {
        "id": "A",
        "text": "Proteksionisme kuota"
      },
      {
        "id": "B",
        "text": "Tarif bea masuk impor"
      },
      {
        "id": "C",
        "text": "Dumping"
      },
      {
        "id": "D",
        "text": "Subsidi produsen lokal"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Dumping adalah menjual produk lebih murah di luar negeri untuk menguasai pasar internasional.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-020",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Ekonomi Maritim dan Agrikultur",
    "competency": "Menganalisis penguatan ekonomi maritim Indonesia",
    "question": "Kebijakan ekonomi maritim Indonesia difokuskan pada pemanfaatan potensi bahari. Perbedaan mendasar ekonomi kelautan (marine economy) dengan ekonomi maritim (maritime economy) adalah...",
    "optionA": "Ekonomi kelautan hanya berfokus pada wisata pantai pulau terpencil",
    "optionB": "Ekonomi maritim dikelola sepenuhnya oleh nelayan tradisional",
    "optionC": "Ekonomi kelautan melarang adanya penangkapan ikan komersial",
    "optionD": "Ekonomi kelautan mencakup eksploitasi sumber daya laut, sedangkan maritim mencakup navigasi perkapalan dan pelabuhan",
    "options": [
      {
        "id": "A",
        "text": "Ekonomi kelautan hanya berfokus pada wisata pantai pulau terpencil"
      },
      {
        "id": "B",
        "text": "Ekonomi maritim dikelola sepenuhnya oleh nelayan tradisional"
      },
      {
        "id": "C",
        "text": "Ekonomi kelautan melarang adanya penangkapan ikan komersial"
      },
      {
        "id": "D",
        "text": "Ekonomi kelautan mencakup eksploitasi sumber daya laut, sedangkan maritim mencakup navigasi perkapalan dan pelabuhan"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Marine economy berkaitan dengan hasil alam laut, maritime economy mencakup transportasi laut dan industri pelabuhan.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-021",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Zaman Praaksara",
    "competency": "Menganalisis corak kehidupan manusia purba zaman praaksara",
    "question": "Timbunan fosil kulit kerang dan siput purba setinggi bukit di sepanjang pantai timur Sumatera peninggalan zaman mesolitikum dinamakan...",
    "optionA": "Kjokkenmoddinger (sampah dapur pantai)",
    "optionB": "Abris sous roche (gua payung karang)",
    "optionC": "Sarkofagus keranda batu megalit",
    "optionD": "Menhir tugu pemujaan arwah",
    "options": [
      {
        "id": "A",
        "text": "Kjokkenmoddinger (sampah dapur pantai)"
      },
      {
        "id": "B",
        "text": "Abris sous roche (gua payung karang)"
      },
      {
        "id": "C",
        "text": "Sarkofagus keranda batu megalit"
      },
      {
        "id": "D",
        "text": "Menhir tugu pemujaan arwah"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kjokkenmoddinger adalah fosil timbunan sampah dapur kulit kerang zaman Mesolitikum.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-022",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Kerajaan Hindu-Buddha",
    "competency": "Menganalisis peran Kerajaan Sriwijaya sebagai pusat maritim dan agama",
    "question": "Kerajaan maritim bercorak Buddha di Sumatera yang menjadi pusat pengajaran bahasa Sanskerta dan ajaran Buddha internasional pada abad ke-7 adalah...",
    "optionA": "Kerajaan Tarumanegara",
    "optionB": "Kerajaan Sriwijaya",
    "optionC": "Kerajaan Kutai Martadipura",
    "optionD": "Kerajaan Kalingga Ratu Shima",
    "options": [
      {
        "id": "A",
        "text": "Kerajaan Tarumanegara"
      },
      {
        "id": "B",
        "text": "Kerajaan Sriwijaya"
      },
      {
        "id": "C",
        "text": "Kerajaan Kutai Martadipura"
      },
      {
        "id": "D",
        "text": "Kerajaan Kalingga Ratu Shima"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Sriwijaya di Palembang tercatat oleh musafir I-Tsing sebagai pusat studi agama Buddha.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-023",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Kerajaan Hindu-Buddha",
    "competency": "Menganalisis masa kejayaan Kerajaan Majapahit",
    "question": "Sumpah Palapa yang diikrarkan oleh Mahapatih Gajah Mada pada masa pemerintahan Ratu Tribhuwana Tunggadewi bertujuan untuk...",
    "optionA": "Menolak masuknya ajaran agama Islam ke pulau Jawa",
    "optionB": "Membangun candi peribadatan terbesar di Asia Tenggara",
    "optionC": "Menyatukan wilayah kepulauan Nusantara di bawah naungan panji Majapahit",
    "optionD": "Memindahkan pusat pemerintahan kerajaan ke pesisir laut",
    "options": [
      {
        "id": "A",
        "text": "Menolak masuknya ajaran agama Islam ke pulau Jawa"
      },
      {
        "id": "B",
        "text": "Membangun candi peribadatan terbesar di Asia Tenggara"
      },
      {
        "id": "C",
        "text": "Menyatukan wilayah kepulauan Nusantara di bawah naungan panji Majapahit"
      },
      {
        "id": "D",
        "text": "Memindahkan pusat pemerintahan kerajaan ke pesisir laut"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Gajah Mada bersumpah tidak akan menikmati istirahat sebelum menyatukan Nusantara.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-024",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Masuk dan Berkembangnya Islam di Indonesia",
    "competency": "Menganalisis teori masuknya Islam ke Nusantara",
    "question": "Teori Makkah (Arab) yang didukung oleh Buya Hamka menyatakan bahwa Islam masuk ke Nusantara sejak abad ke-7 Masehi dengan bukti...",
    "optionA": "Batu nisan Sultan Malik As-Saleh bertarikh Gujarat India",
    "optionB": "Gaya kaligrafi nisan makam Fatimah binti Maimun di Leran",
    "optionC": "Adanya tradisi perayaan tabot peringatan Asyura di Bengkulu",
    "optionD": "Adanya perkampungan saudagar muslim Arab di Barus (pantai barat Sumatera)",
    "options": [
      {
        "id": "A",
        "text": "Batu nisan Sultan Malik As-Saleh bertarikh Gujarat India"
      },
      {
        "id": "B",
        "text": "Gaya kaligrafi nisan makam Fatimah binti Maimun di Leran"
      },
      {
        "id": "C",
        "text": "Adanya tradisi perayaan tabot peringatan Asyura di Bengkulu"
      },
      {
        "id": "D",
        "text": "Adanya perkampungan saudagar muslim Arab di Barus (pantai barat Sumatera)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Keberadaan permukiman pedagang Arab di Barus sejak abad ke-7 memperkuat Teori Makkah.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-025",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Kesultanan Islam di Nusantara",
    "competency": "Menganalisis peran Kesultanan Demak dalam syiar Islam",
    "question": "Kesultanan Islam pertama di pulau Jawa yang menjadi basis penyebaran dakwah Walisongo adalah...",
    "optionA": "Kesultanan Demak Bintoro dipimpin Raden Patah",
    "optionB": "Kesultanan Pajang dipimpin Sultan Hadiwijaya",
    "optionC": "Kesultanan Cirebon dipimpin Sunan Gunung Jati",
    "optionD": "Kesultanan Banten dipimpin Sultan Ageng Tirtayasa",
    "options": [
      {
        "id": "A",
        "text": "Kesultanan Demak Bintoro dipimpin Raden Patah"
      },
      {
        "id": "B",
        "text": "Kesultanan Pajang dipimpin Sultan Hadiwijaya"
      },
      {
        "id": "C",
        "text": "Kesultanan Cirebon dipimpin Sunan Gunung Jati"
      },
      {
        "id": "D",
        "text": "Kesultanan Banten dipimpin Sultan Ageng Tirtayasa"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Demak didirikan oleh Raden Patah dengan dukungan dewan Walisongo.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-026",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Kedatangan Bangsa Barat (Kolonialisme)",
    "competency": "Menganalisis motivasi Gold, Glory, Gospel dan sistem VOC",
    "question": "Hak-hak istimewa yang diberikan oleh pemerintah kerajaan Belanda kepada kongsi dagang VOC di Hindia Belanda dinamakan hak...",
    "optionA": "Devide et Impera",
    "optionB": "Octrooi (Hak Oktroi)",
    "optionC": "Hak Ekstirpasi rempah",
    "optionD": "Hak Veto parlemen",
    "options": [
      {
        "id": "A",
        "text": "Devide et Impera"
      },
      {
        "id": "B",
        "text": "Octrooi (Hak Oktroi)"
      },
      {
        "id": "C",
        "text": "Hak Ekstirpasi rempah"
      },
      {
        "id": "D",
        "text": "Hak Veto parlemen"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Hak Oktroi memberi kewenangan VOC mencetak uang, memiliki tentara, dan menyatakan perang.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-027",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Perlawanan Terhadap Kolonialisme",
    "competency": "Menganalisis Perang Jawa (Diponegoro)",
    "question": "Penyebab khusus meletusnya Perang Diponegoro (1825 - 1830) di tanah Jawa adalah...",
    "optionA": "Penolakan Belanda membayar upeti tahunan kepada Keraton Yogyakarta",
    "optionB": "Penutupan pelabuhan perdagangan rempah di Semarang oleh prajurit Belanda",
    "optionC": "Pemasangan patok jalan oleh Belanda yang melintasi makam leluhur Pangeran Diponegoro di Tegalrejo",
    "optionD": "Pembubaran paksa laskar santri pengawal pangeran",
    "options": [
      {
        "id": "A",
        "text": "Penolakan Belanda membayar upeti tahunan kepada Keraton Yogyakarta"
      },
      {
        "id": "B",
        "text": "Penutupan pelabuhan perdagangan rempah di Semarang oleh prajurit Belanda"
      },
      {
        "id": "C",
        "text": "Pemasangan patok jalan oleh Belanda yang melintasi makam leluhur Pangeran Diponegoro di Tegalrejo"
      },
      {
        "id": "D",
        "text": "Pembubaran paksa laskar santri pengawal pangeran"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Pematokan tanah makam leluhur tanpa izin memicu perlawanan terbuka Pangeran Diponegoro.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-028",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Sistem Tanam Paksa",
    "competency": "Menganalisis dampak Cultuurstelsel bagi bangsa Indonesia",
    "question": "Pencetus kebijakan Sistem Tanam Paksa (Cultuurstelsel) pada tahun 1830 yang mengakibatkan penderitaan rakyat Indonesia adalah Gubernur Jenderal...",
    "optionA": "Herman Willem Daendels",
    "optionB": "Jan Pieterszoon Coen",
    "optionC": "Thomas Stamford Raffles",
    "optionD": "Johannes van den Bosch",
    "options": [
      {
        "id": "A",
        "text": "Herman Willem Daendels"
      },
      {
        "id": "B",
        "text": "Jan Pieterszoon Coen"
      },
      {
        "id": "C",
        "text": "Thomas Stamford Raffles"
      },
      {
        "id": "D",
        "text": "Johannes van den Bosch"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Van den Bosch memberlakukan Cultuurstelsel tahun 1830 untuk mengisi kas Belanda yang kosong.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-029",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Pergerakan Nasional",
    "competency": "Menganalisis lahirnya organisasi Budi Utomo dan hari Kebangkitan Nasional",
    "question": "Organisasi modern pertama di Indonesia yang didirikan pada 20 Mei 1908 oleh para pelajar STOVIA dipimpin Sutomo atas gagasan dr. Wahidin Sudirohusodo adalah...",
    "optionA": "Budi Utomo",
    "optionB": "Sarekat Dagang Islam",
    "optionC": "Indische Partij",
    "optionD": "Perhimpunan Indonesia",
    "options": [
      {
        "id": "A",
        "text": "Budi Utomo"
      },
      {
        "id": "B",
        "text": "Sarekat Dagang Islam"
      },
      {
        "id": "C",
        "text": "Indische Partij"
      },
      {
        "id": "D",
        "text": "Perhimpunan Indonesia"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Budi Utomo berdiri 20 Mei 1908, diperingati sebagai Hari Kebangkitan Nasional.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-030",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Sumpah Pemuda 1928",
    "competency": "Menganalisis ikrar Sumpah Pemuda bagi persatuan bangsa",
    "question": "Kongres Pemuda II pada tanggal 28 Oktober 1928 di Jakarta melahirkan ikrar monumental Sumpah Pemuda yang menegaskan persatuan...",
    "optionA": "Satu suku, satu agama, dan satu sistem monarki kepulauan",
    "optionB": "Satu tumpah darah, satu bangsa, dan menjunjung bahasa persatuan bahasa Indonesia",
    "optionC": "Satu partai politik tunggal untuk melawan tentara kolonial",
    "optionD": "Satu mata uang nasional dan satu bendera regional",
    "options": [
      {
        "id": "A",
        "text": "Satu suku, satu agama, dan satu sistem monarki kepulauan"
      },
      {
        "id": "B",
        "text": "Satu tumpah darah, satu bangsa, dan menjunjung bahasa persatuan bahasa Indonesia"
      },
      {
        "id": "C",
        "text": "Satu partai politik tunggal untuk melawan tentara kolonial"
      },
      {
        "id": "D",
        "text": "Satu mata uang nasional dan satu bendera regional"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Sumpah Pemuda menegaskan ikrar bertanah air satu, berbangsa satu, dan berbahasa persatuan Indonesia.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-031",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Masa Pendudukan Jepang",
    "competency": "Menganalisis organisasi bentukan Jepang di Indonesia",
    "question": "Organisasi militer sukarela bentukan militer Jepang yang melatih pemuda Indonesia dasar-dasar keprajuritan dan menjadi cikal bakal TNI adalah...",
    "optionA": "Seinendan (barisan pemuda sipil)",
    "optionB": "Keibodan (barisan pembantu polisi)",
    "optionC": "PETA (Pembela Tanah Air)",
    "optionD": "Fujinkai (barisan wanita pembantu)",
    "options": [
      {
        "id": "A",
        "text": "Seinendan (barisan pemuda sipil)"
      },
      {
        "id": "B",
        "text": "Keibodan (barisan pembantu polisi)"
      },
      {
        "id": "C",
        "text": "PETA (Pembela Tanah Air)"
      },
      {
        "id": "D",
        "text": "Fujinkai (barisan wanita pembantu)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "PETA melatih perwira militer pribumi yang kelak mendirikan TNI.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-032",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Proklamasi Kemerdekaan",
    "competency": "Menganalisis peristiwa Rengasdengklok menjelang proklamasi",
    "question": "Tujuan utama golongan pemuda (Sukarni, Chaerul Saleh, Wikana) membawa Ir. Soekarno dan Drs. Mohammad Hatta ke Rengasdengklok pada 16 Agustus 1945 adalah...",
    "optionA": "Memaksa kedua tokoh menandatangani piagam penyerahan kekuasaan kepada Sekutu",
    "optionB": "Menyembunyikan naskah teks proklamasi dari incaran tentara NICA Belanda",
    "optionC": "Membentuk dewan jenderal angkatan bersenjata darurat di Karawang",
    "optionD": "Menjauhkan kedua tokoh dari pengaruh dan intervensi militer Jepang agar segera memproklamasikan kemerdekaan",
    "options": [
      {
        "id": "A",
        "text": "Memaksa kedua tokoh menandatangani piagam penyerahan kekuasaan kepada Sekutu"
      },
      {
        "id": "B",
        "text": "Menyembunyikan naskah teks proklamasi dari incaran tentara NICA Belanda"
      },
      {
        "id": "C",
        "text": "Membentuk dewan jenderal angkatan bersenjata darurat di Karawang"
      },
      {
        "id": "D",
        "text": "Menjauhkan kedua tokoh dari pengaruh dan intervensi militer Jepang agar segera memproklamasikan kemerdekaan"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Peristiwa Rengasdengklok mendesak kemerdekaan murni tanpa campur tangan Jepang.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-033",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Perjuangan Mempertahankan Kemerdekaan",
    "competency": "Menganalisis diplomasi Perjanjian Linggarjati dan Renville",
    "question": "Hasil Perundingan Linggarjati tahun 1947 secara diplomatis mengakui wilayah Republik Indonesia secara de facto mencakup wilayah...",
    "optionA": "Jawa, Sumatera, dan Madura",
    "optionB": "Seluruh bekas wilayah Hindia Belanda dari Sabang sampai Merauke",
    "optionC": "Jawa, Bali, Nusa Tenggara, dan Maluku",
    "optionD": "Sumatera, Kalimantan, dan Sulawesi",
    "options": [
      {
        "id": "A",
        "text": "Jawa, Sumatera, dan Madura"
      },
      {
        "id": "B",
        "text": "Seluruh bekas wilayah Hindia Belanda dari Sabang sampai Merauke"
      },
      {
        "id": "C",
        "text": "Jawa, Bali, Nusa Tenggara, dan Maluku"
      },
      {
        "id": "D",
        "text": "Sumatera, Kalimantan, dan Sulawesi"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Perjanjian Linggarjati hanya mengakui wilayah RI de facto atas Jawa, Sumatera, dan Madura.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-034",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Masa Demokrasi Parlementer",
    "competency": "Menganalisis Konferensi Asia Afrika (KAA) 1955",
    "question": "Konferensi Asia Afrika (KAA) yang diselenggarakan di Bandung pada tahun 1955 berhasil merumuskan deklarasi perdamaian dunia yang dikenal dengan nama...",
    "optionA": "Piagam Jakarta (Jakarta Charter)",
    "optionB": "Dasasila Bandung",
    "optionC": "Deklarasi Djuanda kelautan",
    "optionD": "Maklumat Pemerintah No. X",
    "options": [
      {
        "id": "A",
        "text": "Piagam Jakarta (Jakarta Charter)"
      },
      {
        "id": "B",
        "text": "Dasasila Bandung"
      },
      {
        "id": "C",
        "text": "Deklarasi Djuanda kelautan"
      },
      {
        "id": "D",
        "text": "Maklumat Pemerintah No. X"
      }
    ],
    "correctAnswer": "B",
    "explanation": "KAA 1955 di Gedung Merdeka Bandung menghasilkan 10 prinsip Dasasila Bandung.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-035",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Batas Maritim Indonesia",
    "competency": "Menganalisis arti Deklarasi Djuanda 13 Desember 1957",
    "question": "Deklarasi Djuanda pada 13 Desember 1957 mengubah konsep hukum batas laut teritorial Indonesia dari hukum kolonial menjadi konsep...",
    "optionA": "Laut internasional bebas yang dapat dilayari kapal perang asing tanpa izin",
    "optionB": "Batas laut teritorial sempit sejauh 3 mil dari garis pantai masing-masing pulau",
    "optionC": "Negara kepulauan (Archipelagic State) di mana laut antarpulau adalah pemersatu wilayah utuh NKRI",
    "optionD": "Penetapan zona ekonomi eksklusif 200 mil milik perusahaan multinasional",
    "options": [
      {
        "id": "A",
        "text": "Laut internasional bebas yang dapat dilayari kapal perang asing tanpa izin"
      },
      {
        "id": "B",
        "text": "Batas laut teritorial sempit sejauh 3 mil dari garis pantai masing-masing pulau"
      },
      {
        "id": "C",
        "text": "Negara kepulauan (Archipelagic State) di mana laut antarpulau adalah pemersatu wilayah utuh NKRI"
      },
      {
        "id": "D",
        "text": "Penetapan zona ekonomi eksklusif 200 mil milik perusahaan multinasional"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Deklarasi Djuanda menyatukan seluruh perairan antarpulau menjadi wilayah kedaulatan utuh RI.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-036",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Konflik Sosial Budaya",
    "competency": "Menganalisis stratifikasi sosial terbuka dan tertutup",
    "question": "Sistem pelapisan sosial (stratifikasi) yang memungkinkan seseorang untuk berpindah status ke lapisan atas melalui usaha pendidikan dan kerja keras disebut...",
    "optionA": "Stratifikasi sosial tertutup (kasta)",
    "optionB": "Stratifikasi sosial feodal absolut",
    "optionC": "Sistem pelapisan kasta keagamaan kaku",
    "optionD": "Stratifikasi sosial terbuka",
    "options": [
      {
        "id": "A",
        "text": "Stratifikasi sosial tertutup (kasta)"
      },
      {
        "id": "B",
        "text": "Stratifikasi sosial feodal absolut"
      },
      {
        "id": "C",
        "text": "Sistem pelapisan kasta keagamaan kaku"
      },
      {
        "id": "D",
        "text": "Stratifikasi sosial terbuka"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Stratifikasi terbuka memberi kesempatan mobilitas sosial berdasarkan prestasi (achieved status).",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-037",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Koperasi Sekolah / Madrasah",
    "competency": "Menganalisis peran koperasi madrasah dalam literasi finansial",
    "question": "Soko guru perekonomian Indonesia yang berasaskan kekeluargaan dan gotong royong sebagaimana diamanatkan Pasal 33 UUD 1945 adalah...",
    "optionA": "Koperasi",
    "optionB": "Badan Usaha Milik Swasta (BUMS) multinasional",
    "optionC": "Pasar modal bursa efek",
    "optionD": "Badan penanaman modal asing",
    "options": [
      {
        "id": "A",
        "text": "Koperasi"
      },
      {
        "id": "B",
        "text": "Badan Usaha Milik Swasta (BUMS) multinasional"
      },
      {
        "id": "C",
        "text": "Pasar modal bursa efek"
      },
      {
        "id": "D",
        "text": "Badan penanaman modal asing"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Pasal 33 ayat (1) menegaskan perekonomian disusun sebagai usaha bersama berdasar atas asas kekeluargaan (koperasi).",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-038",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Inflasi dan Kebijakan Moneter",
    "competency": "Menganalisis cara mengatasi inflasi",
    "question": "Untuk mengatasi lonjakan inflasi yang tinggi, Bank Indonesia selaku Bank Sentral dapat menerapkan kebijakan moneter kontraktif, antara lain dengan cara...",
    "optionA": "Mencetak uang kertas baru sebanyak-banyaknya untuk dibagikan",
    "optionB": "Menaikkan suku bunga acuan bank (BI rate) dan menaikkan cadangan kas minimum bank umum",
    "optionC": "Menurunkan tingkat suku bunga simpanan pinjaman serendah mungkin",
    "optionD": "Membeli surat berharga pemerintah dari masyarakat",
    "options": [
      {
        "id": "A",
        "text": "Mencetak uang kertas baru sebanyak-banyaknya untuk dibagikan"
      },
      {
        "id": "B",
        "text": "Menaikkan suku bunga acuan bank (BI rate) dan menaikkan cadangan kas minimum bank umum"
      },
      {
        "id": "C",
        "text": "Menurunkan tingkat suku bunga simpanan pinjaman serendah mungkin"
      },
      {
        "id": "D",
        "text": "Membeli surat berharga pemerintah dari masyarakat"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Menaikkan suku bunga menarik uang dari peredaran ke dalam tabungan sehingga menekan laju inflasi.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-039",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Pajak dan APBN",
    "competency": "Membedakan fungsi pajak bagi pembangunan nasional",
    "question": "Fungsi pajak yang digunakan oleh pemerintah untuk membiayai pembangunan fasilitas umum seperti madrasah, jalan, dan jembatan disebut fungsi...",
    "optionA": "Regulerend (mengatur kebijakan ekonomi)",
    "optionB": "Stabilisasi moneter luar negeri",
    "optionC": "Budgetair (anggaran / penerimaan kas negara)",
    "optionD": "Distribusi selektif konglomerasi",
    "options": [
      {
        "id": "A",
        "text": "Regulerend (mengatur kebijakan ekonomi)"
      },
      {
        "id": "B",
        "text": "Stabilisasi moneter luar negeri"
      },
      {
        "id": "C",
        "text": "Budgetair (anggaran / penerimaan kas negara)"
      },
      {
        "id": "D",
        "text": "Distribusi selektif konglomerasi"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Fungsi budgetair adalah fungsi utama pajak sebagai sumber pendapatan negara membiayai belanja publik.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-040",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Perubahan Iklim Global",
    "competency": "Menganalisis dampak pemanasan global bagi wilayah kepulauan",
    "question": "Dampak pemanasan global (global warming) yang paling mengancam kedaulatan geografis negara kepulauan seperti Indonesia adalah...",
    "optionA": "Menurunnya intensitas sinar matahari di garis khatulistiwa",
    "optionB": "Berhentinya aktivitas gempa tektonik di seluruh sesar aktif",
    "optionC": "Bertambahnya luas daratan benua secara drastis",
    "optionD": "Mencairnya es kutub yang menaikkan permukaan air laut sehingga menenggelamkan pulau-pulau kecil terluar",
    "options": [
      {
        "id": "A",
        "text": "Menurunnya intensitas sinar matahari di garis khatulistiwa"
      },
      {
        "id": "B",
        "text": "Berhentinya aktivitas gempa tektonik di seluruh sesar aktif"
      },
      {
        "id": "C",
        "text": "Bertambahnya luas daratan benua secara drastis"
      },
      {
        "id": "D",
        "text": "Mencairnya es kutub yang menaikkan permukaan air laut sehingga menenggelamkan pulau-pulau kecil terluar"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kenaikan muka air laut akibat pemanasan global mengancam pulau-pulau kecil dan pesisir Indonesia.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-041",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Situs Purbakala Nusantara",
    "competency": "Mengidentifikasi situs manusia purba Sangiran",
    "question": "Situs purbakala di lembah Bengawan Solo Jawa Tengah yang diakui UNESCO sebagai warisan dunia tempat penemuan fosil Pithecanthropus erectus adalah...",
    "optionA": "Situs Sangiran",
    "optionB": "Situs Muara Takus Riau",
    "optionC": "Situs Trowulan Mojokerto",
    "optionD": "Situs Goa Gajah Bali",
    "options": [
      {
        "id": "A",
        "text": "Situs Sangiran"
      },
      {
        "id": "B",
        "text": "Situs Muara Takus Riau"
      },
      {
        "id": "C",
        "text": "Situs Trowulan Mojokerto"
      },
      {
        "id": "D",
        "text": "Situs Goa Gajah Bali"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Sangiran adalah situs paleontologi manusia purba terpenting di dunia.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-042",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Penyebaran Agama di Nusantara",
    "competency": "Menganalisis peran Walisongo dalam akulturasi budaya Islam",
    "question": "Wali sanga yang terkenal menggunakan media seni wayang kulit dan tembang gending macapat sebagai sarana dakwah kultural Islam di tanah Jawa adalah...",
    "optionA": "Sunan Giri",
    "optionB": "Sunan Kalijaga",
    "optionC": "Sunan Ampel",
    "optionD": "Sunan Gresik (Maulana Malik Ibrahim)",
    "options": [
      {
        "id": "A",
        "text": "Sunan Giri"
      },
      {
        "id": "B",
        "text": "Sunan Kalijaga"
      },
      {
        "id": "C",
        "text": "Sunan Ampel"
      },
      {
        "id": "D",
        "text": "Sunan Gresik (Maulana Malik Ibrahim)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Sunan Kalijaga memadukan dakwah Islam dengan kebudayaan lokal seperti wayang kulit dan gamelan.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-043",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Kearifan Lokal Konservasi",
    "competency": "Menganalisis tradisi kearifan lokal konservasi alam",
    "question": "Tradisi adat suku Baduy di Banten yang membagi hutan menjadi hutan tutupan (leuweung titipan) yang tidak boleh dirusak merupakan contoh kearifan lokal dalam...",
    "optionA": "Eksploitasi pertambangan mineral secara modern",
    "optionB": "Perdagangan kayu gelondongan antarpulau",
    "optionC": "Pelestarian dan konservasi sumber daya air dan hutan lindung",
    "optionD": "Pembangunan pemukiman apartemen bertingkat",
    "options": [
      {
        "id": "A",
        "text": "Eksploitasi pertambangan mineral secara modern"
      },
      {
        "id": "B",
        "text": "Perdagangan kayu gelondongan antarpulau"
      },
      {
        "id": "C",
        "text": "Pelestarian dan konservasi sumber daya air dan hutan lindung"
      },
      {
        "id": "D",
        "text": "Pembangunan pemukiman apartemen bertingkat"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Hutan titipan Baduy berfungsi sebagai kawasan resapan air dan pelestarian ekosistem rimba.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-044",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Perdagangan Antarpulau",
    "competency": "Menganalisis faktor pendorong perdagangan antarpulau di Indonesia",
    "question": "Faktor pendorong utama terjadinya arus perdagangan antarpulau (komoditas rempah dari Maluku ditukar beras dari Jawa) adalah...",
    "optionA": "Keseragaman jenis iklim dan tingkat curah hujan",
    "optionB": "Adanya larangan bepergian antardaerah oleh pemerintah pusat",
    "optionC": "Perbedaan sistem mata uang yang dipakai masing-masing pulau",
    "optionD": "Perbedaan potensi sumber daya alam dan keunggulan komparatif masing-masing daerah",
    "options": [
      {
        "id": "A",
        "text": "Keseragaman jenis iklim dan tingkat curah hujan"
      },
      {
        "id": "B",
        "text": "Adanya larangan bepergian antardaerah oleh pemerintah pusat"
      },
      {
        "id": "C",
        "text": "Perbedaan sistem mata uang yang dipakai masing-masing pulau"
      },
      {
        "id": "D",
        "text": "Perbedaan potensi sumber daya alam dan keunggulan komparatif masing-masing daerah"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Perbedaan faktor produksi dan sumber daya alam mendorong terjadinya perdagangan antarpulau.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-045",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Kebijakan Fiskal",
    "competency": "Menganalisis instrumen kebijakan fiskal pemerintah",
    "question": "Instrumen utama yang digunakan pemerintah dalam menjalankan kebijakan fiskal untuk menjaga stabilitas perekonomian makro adalah...",
    "optionA": "Pajak dan pengeluaran belanja negara (APBN)",
    "optionB": "Operasi pasar terbuka sertifikat Bank Indonesia",
    "optionC": "Tingkat suku bunga diskonto antarbank",
    "optionD": "Cadangan kas wajib minimum bank syariah",
    "options": [
      {
        "id": "A",
        "text": "Pajak dan pengeluaran belanja negara (APBN)"
      },
      {
        "id": "B",
        "text": "Operasi pasar terbuka sertifikat Bank Indonesia"
      },
      {
        "id": "C",
        "text": "Tingkat suku bunga diskonto antarbank"
      },
      {
        "id": "D",
        "text": "Cadangan kas wajib minimum bank syariah"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kebijakan fiskal dijalankan pemerintah melalui penerimaan pajak dan alokasi belanja negara (APBN).",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-046",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Masa Orde Baru dan Reformasi",
    "competency": "Menganalisis agenda reformasi 1998 di Indonesia",
    "question": "Salah satu agenda pokok gerakan reformasi mahasiswa dan rakyat pada bulan Mei 1998 adalah...",
    "optionA": "Pemberlakuan kembali sistem demokrasi terpimpin tahun 1959",
    "optionB": "Pemberantasan Korupsi, Kolusi, dan Nepotisme (KKN) serta penegakan supremasi hukum",
    "optionC": "Pembubaran Dewan Perwakilan Rakyat secara sepihak",
    "optionD": "Penutupan hubungan perdagangan dengan semua negara Barat",
    "options": [
      {
        "id": "A",
        "text": "Pemberlakuan kembali sistem demokrasi terpimpin tahun 1959"
      },
      {
        "id": "B",
        "text": "Pemberantasan Korupsi, Kolusi, dan Nepotisme (KKN) serta penegakan supremasi hukum"
      },
      {
        "id": "C",
        "text": "Pembubaran Dewan Perwakilan Rakyat secara sepihak"
      },
      {
        "id": "D",
        "text": "Penutupan hubungan perdagangan dengan semua negara Barat"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Agenda Reformasi 1998 menuntut suksesi kepemimpinan, pemberantasan KKN, dan amandemen UUD 1945.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-047",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Peta dan Pemetaan",
    "competency": "Menghitung skala peta dan jarak sebenarnya",
    "question": "Pada sebuah peta kabupaten madrasah berskala 1 : 250.000, jarak lurus antara dua madrasah pada peta adalah 4 cm. Jarak sebenarnya di lapangan adalah...",
    "optionA": "1 kilometer",
    "optionB": "25 kilometer",
    "optionC": "10 kilometer",
    "optionD": "100 kilometer",
    "options": [
      {
        "id": "A",
        "text": "1 kilometer"
      },
      {
        "id": "B",
        "text": "25 kilometer"
      },
      {
        "id": "C",
        "text": "10 kilometer"
      },
      {
        "id": "D",
        "text": "100 kilometer"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Jarak sebenarnya = 4 cm x 250.000 = 1.000.000 cm = 10 km.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-048",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Penginderaan Jauh dan SIG",
    "competency": "Menganalisis manfaat Sistem Informasi Geografis (SIG)",
    "question": "Manfaat Sistem Informasi Geografis (SIG) bagi penanggulangan bencana alam di Indonesia adalah...",
    "optionA": "Menghentikan terjadinya pergerakan lempeng tektonik bawah laut",
    "optionB": "Menurunkan temperatur kawah gunung api secara instan",
    "optionC": "Mengubah arah pergerakan angin topan di samudra",
    "optionD": "Memetakan zonasi daerah rawan bencana dan menyusun jalur evakuasi pengungsi",
    "options": [
      {
        "id": "A",
        "text": "Menghentikan terjadinya pergerakan lempeng tektonik bawah laut"
      },
      {
        "id": "B",
        "text": "Menurunkan temperatur kawah gunung api secara instan"
      },
      {
        "id": "C",
        "text": "Mengubah arah pergerakan angin topan di samudra"
      },
      {
        "id": "D",
        "text": "Memetakan zonasi daerah rawan bencana dan menyusun jalur evakuasi pengungsi"
      }
    ],
    "correctAnswer": "D",
    "explanation": "SIG memetakan risiko bencana, sebaran korban, dan rute evakuasi secara terintegrasi.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-049",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Kependudukan dan Migrasi",
    "competency": "Membedakan jenis-jenis migrasi penduduk",
    "question": "Perpindahan penduduk dari daerah pedesaan menuju ke kota-kota besar untuk mencari lapangan pekerjaan dinamakan...",
    "optionA": "Urbanisasi",
    "optionB": "Transmigrasi terencana",
    "optionC": "Emigrasi luar negeri",
    "optionD": "Remigrasi kepulangan",
    "options": [
      {
        "id": "A",
        "text": "Urbanisasi"
      },
      {
        "id": "B",
        "text": "Transmigrasi terencana"
      },
      {
        "id": "C",
        "text": "Emigrasi luar negeri"
      },
      {
        "id": "D",
        "text": "Remigrasi kepulangan"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Urbanisasi adalah perpindahan penduduk dari desa ke kota.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-050",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Dampak Revolusi Industri",
    "competency": "Menganalisis pengaruh Revolusi Industri terhadap imperialisme modern",
    "question": "Perkembangan Revolusi Industri di Inggris pada abad ke-18 mendorong imperialisme modern dengan tujuan utama mencari...",
    "optionA": "Tanah pembuangan narapidana politik eropa",
    "optionB": "Bahan baku industri mentah dan pasar pemasaran produk hasil pabrik",
    "optionC": "Tempat penyebaran paham feodalisme monarki",
    "optionD": "Pusat pengkajian naskah kuno timur",
    "options": [
      {
        "id": "A",
        "text": "Tanah pembuangan narapidana politik eropa"
      },
      {
        "id": "B",
        "text": "Bahan baku industri mentah dan pasar pemasaran produk hasil pabrik"
      },
      {
        "id": "C",
        "text": "Tempat penyebaran paham feodalisme monarki"
      },
      {
        "id": "D",
        "text": "Pusat pengkajian naskah kuno timur"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Pabrik-pabrik Eropa membutuhkan bahan mentah dan pasar luas untuk menyerap hasil produksi massal.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-051",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Sistem Kasta Tradisional",
    "competency": "Menganalisis stratifikasi sosial tertutup zaman Hindu-Buddha",
    "question": "Dalam masyarakat Hindu kuno di Nusantara, golongan pendeta, pemuka agama, dan cendekiawan masuk dalam kelompok kasta...",
    "optionA": "Ksatria raja dan bangsawan prajurit",
    "optionB": "Waisya pedagang dan petani",
    "optionC": "Brahmana",
    "optionD": "Sudra pekerja kasar hamba",
    "options": [
      {
        "id": "A",
        "text": "Ksatria raja dan bangsawan prajurit"
      },
      {
        "id": "B",
        "text": "Waisya pedagang dan petani"
      },
      {
        "id": "C",
        "text": "Brahmana"
      },
      {
        "id": "D",
        "text": "Sudra pekerja kasar hamba"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Brahmana adalah kasta pemuka agama dan guru spiritual.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-052",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Hukum Dagang Laut Nusantara",
    "competency": "Menganalisis hukum maritim Kesultanan Gowa-Tallo",
    "question": "Hukum pelayaran dan perniagaan laut terkenal dari Kesultanan Gowa-Tallo di Sulawesi Selatan disusun oleh...",
    "optionA": "Sultan Hasanuddin",
    "optionB": "Aru Palaka",
    "optionC": "Karaeng Matoaya",
    "optionD": "Amanna Gappa",
    "options": [
      {
        "id": "A",
        "text": "Sultan Hasanuddin"
      },
      {
        "id": "B",
        "text": "Aru Palaka"
      },
      {
        "id": "C",
        "text": "Karaeng Matoaya"
      },
      {
        "id": "D",
        "text": "Amanna Gappa"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Hukum pelayaran Amanna Gappa mengatur etika berniaga dan keselamatan kapal Bugis-Makassar.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-053",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Perang Puputan di Bali",
    "competency": "Menganalisis perlawanan kerajaan di Bali terhadap Belanda",
    "question": "Perang habis-habisan sampai titik darah penghabisan melawan tentara penjajah Belanda di Bali dikenal dengan istilah perang...",
    "optionA": "Puputan",
    "optionB": "Gerilya rimba",
    "optionC": "Benteng stelsel",
    "optionD": "Paderi bersaudara",
    "options": [
      {
        "id": "A",
        "text": "Puputan"
      },
      {
        "id": "B",
        "text": "Gerilya rimba"
      },
      {
        "id": "C",
        "text": "Benteng stelsel"
      },
      {
        "id": "D",
        "text": "Paderi bersaudara"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Puputan adalah tradisi perlawanan kehormatan sampai gugur di medan laga membela tanah air.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-054",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Badan Usaha (BUMN, BUMS, Koperasi)",
    "competency": "Menganalisis peran BUMN dalam perekonomian Indonesia",
    "question": "Badan usaha yang seluruh atau sebagian besar modalnya dimiliki oleh negara melalui penyertaan langsung yang berasal dari kekayaan negara yang dipisahkan adalah...",
    "optionA": "Firma persekutuan perdata",
    "optionB": "Badan Usaha Milik Negara (BUMN)",
    "optionC": "Perseroan Terbatas swasta asing",
    "optionD": "Koperasi simpan pinjam desa",
    "options": [
      {
        "id": "A",
        "text": "Firma persekutuan perdata"
      },
      {
        "id": "B",
        "text": "Badan Usaha Milik Negara (BUMN)"
      },
      {
        "id": "C",
        "text": "Perseroan Terbatas swasta asing"
      },
      {
        "id": "D",
        "text": "Koperasi simpan pinjam desa"
      }
    ],
    "correctAnswer": "B",
    "explanation": "BUMN didirikan dengan modal negara untuk mengelola cabang produksi strategis bagi hajat hidup orang banyak.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-055",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Pemberdayaan Komunitas Lokal",
    "competency": "Menganalisis peran ekonomi kreatif di madrasah",
    "question": "Pemberdayaan santri madrasah melalui kerajinan batik ecoprint ramah lingkungan yang memanfaatkan daun-daunan alami di sekitar madrasah tergolong dalam pengembangan...",
    "optionA": "Industri pertambangan ekstraktif berat",
    "optionB": "Monopoli perdagangan bahan kimia berbahaya",
    "optionC": "Ekonomi kreatif berbasis kearifan lokal dan kelestarian alam",
    "optionD": "Perdagangan saham spekulatif pasar modal",
    "options": [
      {
        "id": "A",
        "text": "Industri pertambangan ekstraktif berat"
      },
      {
        "id": "B",
        "text": "Monopoli perdagangan bahan kimia berbahaya"
      },
      {
        "id": "C",
        "text": "Ekonomi kreatif berbasis kearifan lokal dan kelestarian alam"
      },
      {
        "id": "D",
        "text": "Perdagangan saham spekulatif pasar modal"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Ecoprint menggabungkan kreativitas seni, bahan alam terbarukan, dan pemberdayaan komunitas madrasah.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-056",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Konsep Ruang dan Interaksi Antarruang",
    "competency": "Menganalisis konsep interaksi keruangan antarwilayah",
    "question": "Wilayah pegunungan menghasilkan sayuran segar, sedangkan wilayah pesisir menghasilkan ikan laut. Terjadinya pertukaran barang antarkedua wilayah tersebut dipicu oleh kondisi...",
    "optionA": "Intervening opportunity penghambat rute",
    "optionB": "Spatial transferability yang terputus total",
    "optionC": "Zero sum game persaingan sengit",
    "optionD": "Regional complementary (saling melengkapi kebutuhan ruang)",
    "options": [
      {
        "id": "A",
        "text": "Intervening opportunity penghambat rute"
      },
      {
        "id": "B",
        "text": "Spatial transferability yang terputus total"
      },
      {
        "id": "C",
        "text": "Zero sum game persaingan sengit"
      },
      {
        "id": "D",
        "text": "Regional complementary (saling melengkapi kebutuhan ruang)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Saling melengkapi (complementarity) terjadi ketika dua daerah memiliki surplus komoditas yang berbeda.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-057",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Modernisasi Pertanian",
    "competency": "Menganalisis dampak panca usaha tani bagi ketahanan pangan",
    "question": "Penerapan panca usaha tani (pengolahan tanah yang baik, pengairan teratur, pupuk berimbang, bibit unggul, dan pemberantasan hama) bertujuan utama untuk...",
    "optionA": "Meningkatkan produktivitas hasil panen secara intensif demi ketahanan pangan",
    "optionB": "Mengubah seluruh lahan sawah menjadi area industri pabrik",
    "optionC": "Menggantikan tenaga petani manusia dengan teknologi nuklir",
    "optionD": "Membatasi penjualan gabah beras hanya ke luar negeri",
    "options": [
      {
        "id": "A",
        "text": "Meningkatkan produktivitas hasil panen secara intensif demi ketahanan pangan"
      },
      {
        "id": "B",
        "text": "Mengubah seluruh lahan sawah menjadi area industri pabrik"
      },
      {
        "id": "C",
        "text": "Menggantikan tenaga petani manusia dengan teknologi nuklir"
      },
      {
        "id": "D",
        "text": "Membatasi penjualan gabah beras hanya ke luar negeri"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Intensifikasi pertanian panca usaha tani dirancang untuk mendongkrak hasil panen lahan sawah.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-058",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Peranan Wanita dalam Pergerakan Nasional",
    "competency": "Menganalisis Kongres Perempuan Pertama 1928",
    "question": "Kongres Perempuan Indonesia I diselenggarakan di Yogyakarta pada 22-25 Desember 1928. Peristiwa bersejarah ini kini diperingati secara nasional sebagai...",
    "optionA": "Hari Kartini",
    "optionB": "Hari Ibu",
    "optionC": "Hari Kebangkitan Nasional",
    "optionD": "Hari Pahlawan",
    "options": [
      {
        "id": "A",
        "text": "Hari Kartini"
      },
      {
        "id": "B",
        "text": "Hari Ibu"
      },
      {
        "id": "C",
        "text": "Hari Kebangkitan Nasional"
      },
      {
        "id": "D",
        "text": "Hari Pahlawan"
      }
    ],
    "correctAnswer": "B",
    "explanation": "22 Desember ditetapkan sebagai Hari Ibu memperingati Kongres Perempuan Pertama tahun 1928.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-059",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Koperasi Simpan Pinjam",
    "competency": "Menganalisis pembagian Sisa Hasil Usaha (SHU)",
    "question": "Sisa Hasil Usaha (SHU) yang dibagikan kepada anggota koperasi madrasah pada akhir tahun buku dihitung berdasarkan...",
    "optionA": "Tingginya jabatan struktural anggota dalam kepengurusan",
    "optionB": "Jumlah anggota keluarga yang terdaftar di kartu keluarga",
    "optionC": "Besarnya jasa usaha (transaksi belanja) dan jasa modal simpanan masing-masing anggota",
    "optionD": "Lama waktu mengantre di kasir toko madrasah",
    "options": [
      {
        "id": "A",
        "text": "Tingginya jabatan struktural anggota dalam kepengurusan"
      },
      {
        "id": "B",
        "text": "Jumlah anggota keluarga yang terdaftar di kartu keluarga"
      },
      {
        "id": "C",
        "text": "Besarnya jasa usaha (transaksi belanja) dan jasa modal simpanan masing-masing anggota"
      },
      {
        "id": "D",
        "text": "Lama waktu mengantre di kasir toko madrasah"
      }
    ],
    "correctAnswer": "C",
    "explanation": "SHU dibagikan adil sesuai kontribusi partisipasi transaksi dan modal anggota.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ips-060",
    "educationLevel": "MTs",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ips",
    "subject": "IPS Terpadu MTs",
    "subtopic": "Konservasi Lingkungan Hidup",
    "competency": "Menerapkan prinsip pembangunan berkelanjutan (SDGs)",
    "question": "Prinsip pembangunan berkelanjutan (sustainable development) menekankan bahwa pemanfaatan sumber daya alam saat ini harus...",
    "optionA": "Dieksploitasi semaksimal mungkin demi keuntungan cepat hari ini",
    "optionB": "Ditinggalkan sepenuhnya tanpa boleh dimanfaatkan sedikit pun",
    "optionC": "Dialihkan kepemilikannya kepada perusahaan asing raksasa",
    "optionD": "Memenuhi kebutuhan generasi sekarang tanpa mengorbankan hak pemenuhan generasi mendatang",
    "options": [
      {
        "id": "A",
        "text": "Dieksploitasi semaksimal mungkin demi keuntungan cepat hari ini"
      },
      {
        "id": "B",
        "text": "Ditinggalkan sepenuhnya tanpa boleh dimanfaatkan sedikit pun"
      },
      {
        "id": "C",
        "text": "Dialihkan kepemilikannya kepada perusahaan asing raksasa"
      },
      {
        "id": "D",
        "text": "Memenuhi kebutuhan generasi sekarang tanpa mengorbankan hak pemenuhan generasi mendatang"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Pembangunan berkelanjutan menjamin kelestarian sumber daya untuk generasi masa depan.",
    "tip": "Integrasikan konsep keruangan, interaksi sosial, prinsip ekonomi, dan kronologi sejarah Nusantara.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-001",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Hukum Nun Sukun dan Tanwin",
    "competency": "Menganalisis hukum bacaan nun sukun dan tanwin",
    "question": "Hukum bacaan ketika nun sukun atau tanwin bertemu dengan huruf Ba (ب) seperti pada lafaz \"مِنْ بَعْدِ\" adalah...",
    "optionA": "Iqlab",
    "optionB": "Izhar Halqi",
    "optionC": "Idgham Bighunnah",
    "optionD": "Ikhfa Haqiqi",
    "options": [
      {
        "id": "A",
        "text": "Iqlab"
      },
      {
        "id": "B",
        "text": "Izhar Halqi"
      },
      {
        "id": "C",
        "text": "Idgham Bighunnah"
      },
      {
        "id": "D",
        "text": "Ikhfa Haqiqi"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Iqlab terjadi jika nun sukun/tanwin bertemu ba, bunyinya diganti menjadi mim disertai ghunnah.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-002",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Hukum Nun Sukun dan Tanwin",
    "competency": "Menganalisis hukum bacaan Izhar Halqi",
    "question": "Nun sukun bertemu salah satu huruf halq (ء, هـ, ع, ح, غ, خ) seperti pada lafaz \"مَنْ آمَنَ\" harus dibaca dengan cara...",
    "optionA": "Idgham Bilaghunnah (lebur tanpa dengung)",
    "optionB": "Izhar Halqi (jelas dan terang tanpa dengung)",
    "optionC": "Ikhfa Haqiqi (samar-samar)",
    "optionD": "Iqlab disertai mim",
    "options": [
      {
        "id": "A",
        "text": "Idgham Bilaghunnah (lebur tanpa dengung)"
      },
      {
        "id": "B",
        "text": "Izhar Halqi (jelas dan terang tanpa dengung)"
      },
      {
        "id": "C",
        "text": "Ikhfa Haqiqi (samar-samar)"
      },
      {
        "id": "D",
        "text": "Iqlab disertai mim"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Izhar Halqi dibaca jelas tanpa sengau atau dengung tambahan.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-003",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Hukum Nun Sukun dan Tanwin",
    "competency": "Menganalisis hukum Idgham Bighunnah dan Bilaghunnah",
    "question": "Huruf-huruf Idgham Bilaghunnah ketika bertemu dengan nun sukun atau tanwin adalah...",
    "optionA": "Ya (ي), Nun (ن), Mim (م), Wawu (و)",
    "optionB": "Kaf (ك) dan Qaf (ق)",
    "optionC": "Lam (ل) dan Ra (ر)",
    "optionD": "Hamzah (ء) dan Ha (هـ)",
    "options": [
      {
        "id": "A",
        "text": "Ya (ي), Nun (ن), Mim (م), Wawu (و)"
      },
      {
        "id": "B",
        "text": "Kaf (ك) dan Qaf (ق)"
      },
      {
        "id": "C",
        "text": "Lam (ل) dan Ra (ر)"
      },
      {
        "id": "D",
        "text": "Hamzah (ء) dan Ha (هـ)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Idgham Bilaghunnah memiliki dua huruf yaitu Lam dan Ra, dibaca melebur tanpa dengung.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-004",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Hukum Nun Sukun dan Tanwin",
    "competency": "Menganalisis bacaan Idgham Wajib / Izhar Wajib",
    "question": "Nun sukun bertemu huruf wawu atau ya dalam satu kata (satu kalimat) seperti lafaz \"الدُّنْيَا\" dan \"بُنْيَانٌ\" dibaca...",
    "optionA": "Idgham Bighunnah lebur",
    "optionB": "Ikhfa Syafawi samar",
    "optionC": "Iqlab bibir tertutup",
    "optionD": "Izhar Mutlaq (dibaca jelas tanpa mendengung)",
    "options": [
      {
        "id": "A",
        "text": "Idgham Bighunnah lebur"
      },
      {
        "id": "B",
        "text": "Ikhfa Syafawi samar"
      },
      {
        "id": "C",
        "text": "Iqlab bibir tertutup"
      },
      {
        "id": "D",
        "text": "Izhar Mutlaq (dibaca jelas tanpa mendengung)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Jika nun mati bertemu wawu/ya dalam satu kata, hukumnya Izhar Mutlaq/Izhar Wajib agar maknanya tidak rancu.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-005",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Hukum Mim Sukun",
    "competency": "Menganalisis hukum bacaan mim sukun",
    "question": "Mim sukun bertemu dengan huruf Ba (ب) seperti pada lafaz \"تَرْمِيهِمْ بِحِجَارَةٍ\" hukum bacaannya adalah...",
    "optionA": "Ikhfa Syafawi",
    "optionB": "Izhar Syafawi",
    "optionC": "Idgham Mimi / Mutamatsilain",
    "optionD": "Iqlab",
    "options": [
      {
        "id": "A",
        "text": "Ikhfa Syafawi"
      },
      {
        "id": "B",
        "text": "Izhar Syafawi"
      },
      {
        "id": "C",
        "text": "Idgham Mimi / Mutamatsilain"
      },
      {
        "id": "D",
        "text": "Iqlab"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Mim sukun bertemu huruf Ba dinamakan Ikhfa Syafawi, dibaca samar disertai dengung.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-006",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Hukum Mim Sukun",
    "competency": "Menganalisis hukum Idgham Mimi",
    "question": "Mim sukun bertemu dengan huruf Mim (م) seperti pada lafaz \"لَهُمْ مَّا يَشَاءُونَ\" dibaca secara...",
    "optionA": "Izhar Halqi tanpa dengung",
    "optionB": "Idgham Mimi / Mutamatsilain disertai ghunnah",
    "optionC": "Ikhfa Haqiqi di pangkal hidung",
    "optionD": "Qalqalah kubra memantul",
    "options": [
      {
        "id": "A",
        "text": "Izhar Halqi tanpa dengung"
      },
      {
        "id": "B",
        "text": "Idgham Mimi / Mutamatsilain disertai ghunnah"
      },
      {
        "id": "C",
        "text": "Ikhfa Haqiqi di pangkal hidung"
      },
      {
        "id": "D",
        "text": "Qalqalah kubra memantul"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Mim sukun bertemu mim melebur sempurna (Idgham Mimi/Mutamatsilain) dengan panjang dengung 2 harakat.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-007",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Hukum Mim Sukun",
    "competency": "Menganalisis hukum Izhar Syafawi",
    "question": "Ketika membaca mim sukun bertemu huruf Wawu (و) atau Fa (ف), pembaca Al-Qur'an harus sangat berhati-hati untuk...",
    "optionA": "Membaca dengan dengung 4 harakat penuh",
    "optionB": "Mengubah mim menjadi nun sukun",
    "optionC": "Membaca mim secara jelas (Izhar Syafawi) dan tidak menyamarkannya",
    "optionD": "Memantulkan mim seperti qalqalah",
    "options": [
      {
        "id": "A",
        "text": "Membaca dengan dengung 4 harakat penuh"
      },
      {
        "id": "B",
        "text": "Mengubah mim menjadi nun sukun"
      },
      {
        "id": "C",
        "text": "Membaca mim secara jelas (Izhar Syafawi) dan tidak menyamarkannya"
      },
      {
        "id": "D",
        "text": "Memantulkan mim seperti qalqalah"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Ulama tajwid mengingatkan agar tidak menyamarkan mim sukun saat bertemu Wawu atau Fa karena makhrajnya berdekatan.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-008",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Hukum Bacaan Mad",
    "competency": "Membedakan Mad Wajib Muttashil dan Mad Jaiz Munfashil",
    "question": "Mad Thabi'i yang bertemu dengan huruf hamzah dalam satu kata bersambung dinamakan mad...",
    "optionA": "Mad Jaiz Munfashil (dua kata terpisah)",
    "optionB": "Mad Lazim Kilmi Mutsaqqal",
    "optionC": "Mad Badal pengganti hamzah",
    "optionD": "Mad Wajib Muttashil (panjang 4-5 harakat)",
    "options": [
      {
        "id": "A",
        "text": "Mad Jaiz Munfashil (dua kata terpisah)"
      },
      {
        "id": "B",
        "text": "Mad Lazim Kilmi Mutsaqqal"
      },
      {
        "id": "C",
        "text": "Mad Badal pengganti hamzah"
      },
      {
        "id": "D",
        "text": "Mad Wajib Muttashil (panjang 4-5 harakat)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Muttashil berarti bersambung dalam satu kata (contoh: جَاءَ, السَّمَاءِ).",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-009",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Hukum Bacaan Mad",
    "competency": "Menganalisis Mad Arid Lissukun",
    "question": "Mad Thabi'i yang berada di akhir ayat atau sebelum huruf yang disukunkan karena waqaf (berhenti) disebut...",
    "optionA": "Mad 'Aridh Lissukun",
    "optionB": "Mad Iwad pengganti tanwin fathah",
    "optionC": "Mad Layyin lunak",
    "optionD": "Mad Shilah Qashirah",
    "options": [
      {
        "id": "A",
        "text": "Mad 'Aridh Lissukun"
      },
      {
        "id": "B",
        "text": "Mad Iwad pengganti tanwin fathah"
      },
      {
        "id": "C",
        "text": "Mad Layyin lunak"
      },
      {
        "id": "D",
        "text": "Mad Shilah Qashirah"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Mad 'Aridh Lissukun terjadi karena sukun mendadak akibat waqaf di akhir bacaan.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-010",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Hukum Bacaan Mad",
    "competency": "Menganalisis Mad Lazim Kilmi Mutsaqqal",
    "question": "Mad Thabi'i yang bertemu dengan huruf bertasydid dalam satu kata seperti pada lafaz \"الصَّاخَّةُ\" dan \"الضَّالِّينَ\" adalah...",
    "optionA": "Mad Farq pembeda kalimat",
    "optionB": "Mad Lazim Kilmi Mutsaqqal (panjang 6 harakat)",
    "optionC": "Mad Tamkin tasydid ya",
    "optionD": "Mad Shilah Thawilah",
    "options": [
      {
        "id": "A",
        "text": "Mad Farq pembeda kalimat"
      },
      {
        "id": "B",
        "text": "Mad Lazim Kilmi Mutsaqqal (panjang 6 harakat)"
      },
      {
        "id": "C",
        "text": "Mad Tamkin tasydid ya"
      },
      {
        "id": "D",
        "text": "Mad Shilah Thawilah"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Mad Lazim Kilmi Mutsaqqal wajib dibaca panjang 6 harakat diberatkan pada tasydid.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-011",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Hukum Bacaan Mad",
    "competency": "Menganalisis Mad Iwad",
    "question": "Tanwin fathah (fathatain) yang dibaca waqaf di akhir ayat seperti lafaz \"عَلِيمًا حَكِيمًا\" dibaca sepanjang...",
    "optionA": "4 harakat sebagai Mad Wajib",
    "optionB": "6 harakat sebagai Mad Lazim",
    "optionC": "2 harakat (1 alif) sebagai Mad 'Iwadh",
    "optionD": "Sukun mati tanpa vokal",
    "options": [
      {
        "id": "A",
        "text": "4 harakat sebagai Mad Wajib"
      },
      {
        "id": "B",
        "text": "6 harakat sebagai Mad Lazim"
      },
      {
        "id": "C",
        "text": "2 harakat (1 alif) sebagai Mad 'Iwadh"
      },
      {
        "id": "D",
        "text": "Sukun mati tanpa vokal"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Mad 'Iwadh menggantikan bunyi fathatain saat waqaf menjadi mad 2 harakat (hakiimaa).",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-012",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Hukum Bacaan Qalqalah",
    "competency": "Membedakan Qalqalah Sughra dan Kubra",
    "question": "Huruf qalqalah (ق, ط, ب, ج, د) yang berharakat sukun asli di tengah kata dinamakan...",
    "optionA": "Qalqalah Kubra (di akhir ayat karena waqaf)",
    "optionB": "Qalqalah Akbar tasydid",
    "optionC": "Qalqalah Mutawassithah",
    "optionD": "Qalqalah Sughra",
    "options": [
      {
        "id": "A",
        "text": "Qalqalah Kubra (di akhir ayat karena waqaf)"
      },
      {
        "id": "B",
        "text": "Qalqalah Akbar tasydid"
      },
      {
        "id": "C",
        "text": "Qalqalah Mutawassithah"
      },
      {
        "id": "D",
        "text": "Qalqalah Sughra"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Sukun asli di tengah kata (contoh: يَجْعَلُونَ) adalah Qalqalah Sughra (pantulan ringan).",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-013",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Bacaan Gharib dalam Al-Qur'an",
    "competency": "Menganalisis bacaan Imalah pada Surah Hud ayat 41",
    "question": "Cara membaca lafaz \"مَجْرٰ۪ىهَا\" pada QS. Hud ayat 41 menurut qira'ah Imam Ashim riwayat Hafsh adalah...",
    "optionA": "Imalah (memiringkan bunyi fathah ke arah kasrah)",
    "optionB": "Isymam (memoncongkan kedua bibir)",
    "optionC": "Tashil (meringankan bunyi hamzah)",
    "optionD": "Saktah (berhenti sejenak tanpa bernapas)",
    "options": [
      {
        "id": "A",
        "text": "Imalah (memiringkan bunyi fathah ke arah kasrah)"
      },
      {
        "id": "B",
        "text": "Isymam (memoncongkan kedua bibir)"
      },
      {
        "id": "C",
        "text": "Tashil (meringankan bunyi hamzah)"
      },
      {
        "id": "D",
        "text": "Saktah (berhenti sejenak tanpa bernapas)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Imalah memiringkan bunyi \"majraahaa\" mendekati \"majreehaa\".",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-014",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Bacaan Gharib dalam Al-Qur'an",
    "competency": "Menganalisis bacaan Isymam pada Surah Yusuf ayat 11",
    "question": "Lafaz \"لَا تَأْمَ۫نَّا\" pada QS. Yusuf ayat 11 dibaca dengan teknik Isymam, yaitu dengan cara...",
    "optionA": "Membaca samar dengan sengau hidung",
    "optionB": "Memajukan/memoncongkan kedua bibir tanpa bersuara sebagai isyarat harakat dhammah",
    "optionC": "Memiringkan bunyi fathah ke arah harakat kasrah",
    "optionD": "Memantulkan huruf nun dengan keras",
    "options": [
      {
        "id": "A",
        "text": "Membaca samar dengan sengau hidung"
      },
      {
        "id": "B",
        "text": "Memajukan/memoncongkan kedua bibir tanpa bersuara sebagai isyarat harakat dhammah"
      },
      {
        "id": "C",
        "text": "Memiringkan bunyi fathah ke arah harakat kasrah"
      },
      {
        "id": "D",
        "text": "Memantulkan huruf nun dengan keras"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Isymam adalah isyarat bibir memoncong mengiringi sukun tanpa menghasilkan suara dhommah.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-015",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Bacaan Gharib dalam Al-Qur'an",
    "competency": "Menganalisis bacaan Saktah dalam Al-Qur'an",
    "question": "Saktah pada QS. Al-Kahfi ayat 1-2 antara lafaz \"عِوَجًا\" dan \"قَيِّمًا\" dilakukan dengan aturan...",
    "optionA": "Mengambil napas dalam-dalam lalu membaca cepat",
    "optionB": "Menyambung kedua ayat dengan dengung panjang",
    "optionC": "Berhenti sejenak selama 2 harakat tanpa mengambil napas baru lalu melanjutkan bacaan",
    "optionD": "Mengulang membaca dari awal surah",
    "options": [
      {
        "id": "A",
        "text": "Mengambil napas dalam-dalam lalu membaca cepat"
      },
      {
        "id": "B",
        "text": "Menyambung kedua ayat dengan dengung panjang"
      },
      {
        "id": "C",
        "text": "Berhenti sejenak selama 2 harakat tanpa mengambil napas baru lalu melanjutkan bacaan"
      },
      {
        "id": "D",
        "text": "Mengulang membaca dari awal surah"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Saktah adalah berhenti sejenak tanpa bernapas selama 1 alif (2 harakat).",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-016",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Tanda Waqaf",
    "competency": "Mengidentifikasi makna tanda waqaf lazim (مـ)",
    "question": "Tanda waqaf mim kecil (مـ) pada mushaf Al-Qur'an menunjukkan instruksi bacaan...",
    "optionA": "Waqaf Jaiz (boleh berhenti boleh lanjut)",
    "optionB": "Al-Washlu Ula (lebih utama terus)",
    "optionC": "La Waqfa Fih (dilarang berhenti)",
    "optionD": "Waqaf Lazim (harus/wajib berhenti untuk menjaga kesempurnaan makna)",
    "options": [
      {
        "id": "A",
        "text": "Waqaf Jaiz (boleh berhenti boleh lanjut)"
      },
      {
        "id": "B",
        "text": "Al-Washlu Ula (lebih utama terus)"
      },
      {
        "id": "C",
        "text": "La Waqfa Fih (dilarang berhenti)"
      },
      {
        "id": "D",
        "text": "Waqaf Lazim (harus/wajib berhenti untuk menjaga kesempurnaan makna)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Waqaf Lazim mengharuskan berhenti agar makna ayat tidak berubah atau rancu.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-017",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Tafsir dan Kandungan Surah Pendek",
    "competency": "Menganalisis kandungan Surah Al-Fatihah",
    "question": "Ayat \"إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ\" dalam Surah Al-Fatihah menegaskan prinsip tauhid...",
    "optionA": "Tauhid Ibadah dan Isti'anah (hanya menyembah dan memohon pertolongan kepada Allah)",
    "optionB": "Tauhid Rububiyyah penciptaan alam semesta semata",
    "optionC": "Hukum waris dalam muamalah keluarga",
    "optionD": "Tata cara pembagian rampasan perang",
    "options": [
      {
        "id": "A",
        "text": "Tauhid Ibadah dan Isti'anah (hanya menyembah dan memohon pertolongan kepada Allah)"
      },
      {
        "id": "B",
        "text": "Tauhid Rububiyyah penciptaan alam semesta semata"
      },
      {
        "id": "C",
        "text": "Hukum waris dalam muamalah keluarga"
      },
      {
        "id": "D",
        "text": "Tata cara pembagian rampasan perang"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Ayat ini menegaskan komitmen pengabdian dan permohonan pertolongan mutlak hanya kepada Allah.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-018",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Tafsir dan Kandungan Surah Pendek",
    "competency": "Menganalisis kandungan Surah Ad-Duha",
    "question": "Pesan keteladanan sosial yang termaktub dalam QS. Ad-Duha ayat 9-10 (\"فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ\") adalah...",
    "optionA": "Kewajiban berjihad di medan perang bersenjata",
    "optionB": "Larangan berlaku sewenang-wenang terhadap anak yatim dan larangan menghardik peminta-minta",
    "optionC": "Anjuran berniaga ke negeri Syam pada musim dingin",
    "optionD": "Kewajiban membayar zakat perniagaan emas",
    "options": [
      {
        "id": "A",
        "text": "Kewajiban berjihad di medan perang bersenjata"
      },
      {
        "id": "B",
        "text": "Larangan berlaku sewenang-wenang terhadap anak yatim dan larangan menghardik peminta-minta"
      },
      {
        "id": "C",
        "text": "Anjuran berniaga ke negeri Syam pada musim dingin"
      },
      {
        "id": "D",
        "text": "Kewajiban membayar zakat perniagaan emas"
      }
    ],
    "correctAnswer": "B",
    "explanation": "QS. Ad-Duha melarang menindas anak yatim dan menghardik orang yang meminta pertolongan.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-019",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Tafsir dan Kandungan Surah Pendek",
    "competency": "Menganalisis kandungan Surah Al-Insyirah",
    "question": "Penegasan ilahi dalam QS. Al-Insyirah: \"فَإِنَّ مَعَ الْعُسْرِ يُسْرًا\" menanamkan sikap mental...",
    "optionA": "Kepasrahan total tanpa perlu berusaha mencari nafkah",
    "optionB": "Kewajiban mengasingkan diri dari pergaulan duniawi",
    "optionC": "Optimisme dan ketabahan bahwa setiap kesulitan pasti disertai jalan kemudahan",
    "optionD": "Kebolehan melanggar aturan saat berada dalam kesempitan",
    "options": [
      {
        "id": "A",
        "text": "Kepasrahan total tanpa perlu berusaha mencari nafkah"
      },
      {
        "id": "B",
        "text": "Kewajiban mengasingkan diri dari pergaulan duniawi"
      },
      {
        "id": "C",
        "text": "Optimisme dan ketabahan bahwa setiap kesulitan pasti disertai jalan kemudahan"
      },
      {
        "id": "D",
        "text": "Kebolehan melanggar aturan saat berada dalam kesempitan"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Al-Insyirah mengajarkan optimisme: satu kesulitan diiringi oleh dua kemudahan.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-020",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Tafsir dan Kandungan Surah Pendek",
    "competency": "Menganalisis kandungan Surah Al-Qari'ah",
    "question": "Gambaran manusia pada hari kiamat dalam Surah Al-Qari'ah diibaratkan seperti...",
    "optionA": "Bulu-bulu yang dihambur-hamburkan angin",
    "optionB": "Gunung-gunung yang kokoh tak tergoyahkan",
    "optionC": "Kafilah unta yang berbaris rapi",
    "optionD": "Anai-anai (laron) yang berterbangan kocar-kacir (كَالْفَرَاشِ الْمَبْثُوثِ)",
    "options": [
      {
        "id": "A",
        "text": "Bulu-bulu yang dihambur-hamburkan angin"
      },
      {
        "id": "B",
        "text": "Gunung-gunung yang kokoh tak tergoyahkan"
      },
      {
        "id": "C",
        "text": "Kafilah unta yang berbaris rapi"
      },
      {
        "id": "D",
        "text": "Anai-anai (laron) yang berterbangan kocar-kacir (كَالْفَرَاشِ الْمَبْثُوثِ)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Manusia di yaumul qiyamah laksana laron berterbangan dalam kepanikan.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-021",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Tafsir dan Kandungan Surah Pendek",
    "competency": "Menganalisis kandungan Surah Al-Zalzalah",
    "question": "Kandungan utama QS. Al-Zalzalah ayat 7-8 menegaskan bahwa...",
    "optionA": "Keadilan hisab mutlak: kebaikan dan keburukan sekecil biji zarrah pun pasti ada balasannya",
    "optionB": "Orang kaya akan bebas dari perhitungan amal akhirat",
    "optionC": "Kiamat hanya akan terjadi di lautan samudra",
    "optionD": "Amalan manusia baru dicatat setelah berusia dewasa",
    "options": [
      {
        "id": "A",
        "text": "Keadilan hisab mutlak: kebaikan dan keburukan sekecil biji zarrah pun pasti ada balasannya"
      },
      {
        "id": "B",
        "text": "Orang kaya akan bebas dari perhitungan amal akhirat"
      },
      {
        "id": "C",
        "text": "Kiamat hanya akan terjadi di lautan samudra"
      },
      {
        "id": "D",
        "text": "Amalan manusia baru dicatat setelah berusia dewasa"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kebaikan dan keburukan sekecil zarrah akan diperlihatkan balasannya di akhirat.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-022",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Tafsir dan Kandungan Surah Pendek",
    "competency": "Menganalisis kandungan Surah At-Tin",
    "question": "Dalam QS. At-Tin ayat 4, Allah menegaskan bahwa manusia diciptakan dalam bentuk...",
    "optionA": "Keadaan yang lemah dan selalu merugi tanpa ilmu",
    "optionB": "Sebaik-baik ciptaan dan bentuk yang paling sempurna (فِي أَحْسَنِ تَقْوِيمٍ)",
    "optionC": "Tingkatan yang paling rendah di antara malaikat",
    "optionD": "Bentuk yang serupa dengan makhluk sebelum Adam",
    "options": [
      {
        "id": "A",
        "text": "Keadaan yang lemah dan selalu merugi tanpa ilmu"
      },
      {
        "id": "B",
        "text": "Sebaik-baik ciptaan dan bentuk yang paling sempurna (فِي أَحْسَنِ تَقْوِيمٍ)"
      },
      {
        "id": "C",
        "text": "Tingkatan yang paling rendah di antara malaikat"
      },
      {
        "id": "D",
        "text": "Bentuk yang serupa dengan makhluk sebelum Adam"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Ahsani taqwim bermakna bentuk fisik, akal, dan rohani yang paling sempurna.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-023",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Tafsir dan Kandungan Surah Pendek",
    "competency": "Menganalisis kandungan Surah Al-Alaq ayat 1-5",
    "question": "Wahyu pertama yang diturunkan kepada Nabi Muhammad SAW di Gua Hira (QS. Al-'Alaq 1-5) menjadi tonggak perintah...",
    "optionA": "Mendirikan negara kekhalifahan di jazirah Arab",
    "optionB": "Melaksanakan ibadah haji ke Baitullah Makkah",
    "optionC": "Literasi membaca dan menuntut ilmu pengetahuan dengan menyebut nama Allah",
    "optionD": "Mengumpulkan harta rampasan perang perniagaan",
    "options": [
      {
        "id": "A",
        "text": "Mendirikan negara kekhalifahan di jazirah Arab"
      },
      {
        "id": "B",
        "text": "Melaksanakan ibadah haji ke Baitullah Makkah"
      },
      {
        "id": "C",
        "text": "Literasi membaca dan menuntut ilmu pengetahuan dengan menyebut nama Allah"
      },
      {
        "id": "D",
        "text": "Mengumpulkan harta rampasan perang perniagaan"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Iqra bismirabbika ladzi khalaq adalah perintah membaca, belajar, dan riset berbasis tauhid.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-024",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Tafsir dan Kandungan Surah Pendek",
    "competency": "Menganalisis kandungan Surah Al-Kafirun",
    "question": "Prinsip toleransi beragama yang tegas diajarkan dalam QS. Al-Kafirun dirumuskan pada ayat penutup...",
    "optionA": "Penyatuan ajaran semua agama menjadi satu keyakinan",
    "optionB": "Kewajiban ikut merayakan ritual agama lain demi kerukunan",
    "optionC": "Larangan berinteraksi sosial dan berdagang dengan non-muslim",
    "optionD": "\"لَكُمْ دِينُكُمْ وَلِيَ دِينِ\" (Untukmu agamamu, dan untukkulah agamaku)",
    "options": [
      {
        "id": "A",
        "text": "Penyatuan ajaran semua agama menjadi satu keyakinan"
      },
      {
        "id": "B",
        "text": "Kewajiban ikut merayakan ritual agama lain demi kerukunan"
      },
      {
        "id": "C",
        "text": "Larangan berinteraksi sosial dan berdagang dengan non-muslim"
      },
      {
        "id": "D",
        "text": "\"لَكُمْ دِينُكُمْ وَلِيَ دِينِ\" (Untukmu agamamu, dan untukkulah agamaku)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Prinsip lakum diinukum wa liya diin mengajarkan toleransi sosial tanpa kompromi akidah ibadah.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-025",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Ulumul Qur'an",
    "competency": "Menganalisis perbedaan ayat Makkiyyah dan Madaniyyah",
    "question": "Ciri utama ayat-ayat Makkiyyah yang membedakannya dengan ayat Madaniyyah adalah...",
    "optionA": "Umumnya ayatnya pendek-pendek, bernada tegas, dan fokus pada pemurnian akidah tauhid",
    "optionB": "Ayatnya panjang-panjang dan membahas rincian hukum waris serta jinayat",
    "optionC": "Selalu diawali dengan seruan \"Yaa ayyuhalladziina aamanuu\"",
    "optionD": "Diturunkan setelah peristiwa Fathu Makkah tahun ke-8 Hijriyah",
    "options": [
      {
        "id": "A",
        "text": "Umumnya ayatnya pendek-pendek, bernada tegas, dan fokus pada pemurnian akidah tauhid"
      },
      {
        "id": "B",
        "text": "Ayatnya panjang-panjang dan membahas rincian hukum waris serta jinayat"
      },
      {
        "id": "C",
        "text": "Selalu diawali dengan seruan \"Yaa ayyuhalladziina aamanuu\""
      },
      {
        "id": "D",
        "text": "Diturunkan setelah peristiwa Fathu Makkah tahun ke-8 Hijriyah"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Ayat Makkiyah diturunkan sebelum hijrah, pendek, berirama kuat, dan fokus pada akidah serta hari akhir.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-026",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Ulumul Qur'an",
    "competency": "Menganalisis sejarah kodifikasi Al-Qur'an",
    "question": "Pengumpulan dan pembukuan mushaf resmi Al-Qur'an menjadi satu standar rasm untuk seluruh wilayah Islam diprakarsai pada masa Khalifah...",
    "optionA": "Abu Bakar Ash-Shiddiq atas usulan Umar bin Khattab",
    "optionB": "Utsman bin Affan (dikenal sebagai Mushaf Utsmani)",
    "optionC": "Ali bin Abi Thalib di Kufah",
    "optionD": "Muawiyah bin Abi Sufyan di Damaskus",
    "options": [
      {
        "id": "A",
        "text": "Abu Bakar Ash-Shiddiq atas usulan Umar bin Khattab"
      },
      {
        "id": "B",
        "text": "Utsman bin Affan (dikenal sebagai Mushaf Utsmani)"
      },
      {
        "id": "C",
        "text": "Ali bin Abi Thalib di Kufah"
      },
      {
        "id": "D",
        "text": "Muawiyah bin Abi Sufyan di Damaskus"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Utsman bin Affan membukukan mushaf standar (Rasm Utsmani) dan menyebarkannya ke berbagai provinsi.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-027",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Ulumul Qur'an",
    "competency": "Menganalisis sebab-sebab turunnya ayat (Asbabun Nuzul)",
    "question": "Fungsi utama memahami ilmu Asbabun Nuzul dalam menafsirkan ayat Al-Qur'an adalah untuk...",
    "optionA": "Mengetahui jumlah huruf dan kata dalam setiap surah",
    "optionB": "Mengubah redaksi lafaz Al-Qur'an agar sesuai zaman",
    "optionC": "Mengetahui latar belakang peristiwa dan hikmah penetapan suatu hukum syariat secara tepat",
    "optionD": "Menentukan harga jual cetakan mushaf Al-Qur'an",
    "options": [
      {
        "id": "A",
        "text": "Mengetahui jumlah huruf dan kata dalam setiap surah"
      },
      {
        "id": "B",
        "text": "Mengubah redaksi lafaz Al-Qur'an agar sesuai zaman"
      },
      {
        "id": "C",
        "text": "Mengetahui latar belakang peristiwa dan hikmah penetapan suatu hukum syariat secara tepat"
      },
      {
        "id": "D",
        "text": "Menentukan harga jual cetakan mushaf Al-Qur'an"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Asbabun Nuzul membantu mufasir memahami konteks historis dan maksud hakiki suatu hukum ayat.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-028",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Ilmu Hadits (Musthalah Hadits)",
    "competency": "Menganalisis unsur-unsur hadits: Sanad, Matan, dan Rawi",
    "question": "Silsilah atau rangkaian para periwayat yang menghubungkan teks hadits sampai kepada Rasulullah SAW disebut...",
    "optionA": "Matan hadits (isi redaksi sabda)",
    "optionB": "Mukharrij hadits (pencatat kitab)",
    "optionC": "Dirayah hadits (analisis kritik)",
    "optionD": "Sanad hadits",
    "options": [
      {
        "id": "A",
        "text": "Matan hadits (isi redaksi sabda)"
      },
      {
        "id": "B",
        "text": "Mukharrij hadits (pencatat kitab)"
      },
      {
        "id": "C",
        "text": "Dirayah hadits (analisis kritik)"
      },
      {
        "id": "D",
        "text": "Sanad hadits"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Sanad adalah mata rantai perawi dari perawi terakhir hingga Rasulullah SAW.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-029",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Ilmu Hadits (Musthalah Hadits)",
    "competency": "Menganalisis syarat-syarat Hadits Shahih",
    "question": "Suatu hadits dikategorikan sebagai Hadits Shahih apabila memenuhi lima kriteria, salah satunya perawinya harus bersifat Dhabith, yang artinya...",
    "optionA": "Memiliki ingatan hafalan yang kuat dan cermat dalam pencatatan naskah",
    "optionB": "Memiliki garis keturunan bangsawan Quraisy",
    "optionC": "Memiliki harta kekayaan melimpah untuk membiayai rihlah",
    "optionD": "Berusia lanjut di atas 80 tahun saat meriwayatkan",
    "options": [
      {
        "id": "A",
        "text": "Memiliki ingatan hafalan yang kuat dan cermat dalam pencatatan naskah"
      },
      {
        "id": "B",
        "text": "Memiliki garis keturunan bangsawan Quraisy"
      },
      {
        "id": "C",
        "text": "Memiliki harta kekayaan melimpah untuk membiayai rihlah"
      },
      {
        "id": "D",
        "text": "Berusia lanjut di atas 80 tahun saat meriwayatkan"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Dhabith berarti memiliki ketelitian dan kekuatan hafalan yang sempurna dari lupa atau kekeliruan.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-030",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Ilmu Hadits (Musthalah Hadits)",
    "competency": "Mengidentifikasi tingkatan hadits berdasarkan jumlah sanad",
    "question": "Hadits yang diriwayatkan oleh orang banyak pada setiap tingkatan sanadnya sehingga mustahil bersepakat untuk berdusta disebut...",
    "optionA": "Hadits Ahad (Masyhur, Aziz, Gharib)",
    "optionB": "Hadits Mutawatir",
    "optionC": "Hadits Maudhu' (palsu buatan manusia)",
    "optionD": "Hadits Mu'dhal (gugur dua perawi)",
    "options": [
      {
        "id": "A",
        "text": "Hadits Ahad (Masyhur, Aziz, Gharib)"
      },
      {
        "id": "B",
        "text": "Hadits Mutawatir"
      },
      {
        "id": "C",
        "text": "Hadits Maudhu' (palsu buatan manusia)"
      },
      {
        "id": "D",
        "text": "Hadits Mu'dhal (gugur dua perawi)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Hadits Mutawatir diriwayatkan oleh perawi dalam jumlah besar pada tiap generasi sehingga menghasilkan keyakinan pasti.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-031",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Hadits Tematik - Keikhlasan Niat",
    "competency": "Menganalisis kandungan hadits niat",
    "question": "Sabda Nabi SAW: \"إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ\" (Sesungguhnya sah dan diterimanya amal itu bergantung pada niatnya) diriwayatkan oleh...",
    "optionA": "Imam At-Tirmidzi dari Sahabat Abu Hurairah r.a.",
    "optionB": "Imam Ibnu Majah dari Sahabat Anas bin Malik r.a.",
    "optionC": "Imam Al-Bukhari dan Imam Muslim dari Sahabat Umar bin Khattab r.a.",
    "optionD": "Imam Ahmad dari Sahabat Ali bin Abi Thalib r.a.",
    "options": [
      {
        "id": "A",
        "text": "Imam At-Tirmidzi dari Sahabat Abu Hurairah r.a."
      },
      {
        "id": "B",
        "text": "Imam Ibnu Majah dari Sahabat Anas bin Malik r.a."
      },
      {
        "id": "C",
        "text": "Imam Al-Bukhari dan Imam Muslim dari Sahabat Umar bin Khattab r.a."
      },
      {
        "id": "D",
        "text": "Imam Ahmad dari Sahabat Ali bin Abi Thalib r.a."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Hadits arbain pertama tentang niat diriwayatkan oleh Bukhari dan Muslim dari Umar bin Khattab.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-032",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Hadits Tematik - Menuntut Ilmu",
    "competency": "Menganalisis hadits kewajiban menuntut ilmu",
    "question": "Hadits \"طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ\" menegaskan bahwa menuntut ilmu syariat dan ilmu yang bermanfaat hukumnya adalah...",
    "optionA": "Sunnah muakkad hanya bagi yang bermukim di madrasah",
    "optionB": "Mubah tergantung keluangan waktu dan biaya",
    "optionC": "Makruh jika dilakukan pada malam hari",
    "optionD": "Fardhu (kewajiban mutlak) bagi setiap muslim laki-laki maupun perempuan",
    "options": [
      {
        "id": "A",
        "text": "Sunnah muakkad hanya bagi yang bermukim di madrasah"
      },
      {
        "id": "B",
        "text": "Mubah tergantung keluangan waktu dan biaya"
      },
      {
        "id": "C",
        "text": "Makruh jika dilakukan pada malam hari"
      },
      {
        "id": "D",
        "text": "Fardhu (kewajiban mutlak) bagi setiap muslim laki-laki maupun perempuan"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Thalabul 'ilmi faridhatun 'ala kulli muslimin menegaskan kewajiban fardhu menuntut ilmu bagi setiap muslim.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-033",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Hadits Tematik - Kebersihan dan Kesucian",
    "competency": "Menganalisis hadits kesucian lahir batin",
    "question": "Sabda Rasulullah SAW: \"الطَّهُورُ شَطْرُ الإِيمَانِ\" (Kebersihan/kesucian itu adalah separuh dari iman) menegaskan pentingnya...",
    "optionA": "Menjaga kesucian jasmani melalui bersuci dan kesucian rohani dari noda dosa",
    "optionB": "Membeli pakaian mahal saat hari raya",
    "optionC": "Membangun rumah mewah berlantai marmer",
    "optionD": "Menghindari sentuhan dengan tanah dan lumpur",
    "options": [
      {
        "id": "A",
        "text": "Menjaga kesucian jasmani melalui bersuci dan kesucian rohani dari noda dosa"
      },
      {
        "id": "B",
        "text": "Membeli pakaian mahal saat hari raya"
      },
      {
        "id": "C",
        "text": "Membangun rumah mewah berlantai marmer"
      },
      {
        "id": "D",
        "text": "Menghindari sentuhan dengan tanah dan lumpur"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Thaharah mencakup thaharah hissi (jasmani) dan ma'nawi (hati dari syirik dan maksiat).",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-034",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Hadits Tematik - Menjaga Lisan dan Tangan",
    "competency": "Menganalisis hadits ciri muslim sejati",
    "question": "Rasulullah SAW bersabda: \"المُسْلِمُ مَنْ سَلِمَ المُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ\". Definisi muslim yang hakiki menurut hadits ini adalah...",
    "optionA": "Orang yang paling banyak menghafal naskah puisi",
    "optionB": "Orang yang orang-orang muslim lainnya selamat dari kejahatan lisan dan perbuatan tangannya",
    "optionC": "Orang yang paling sering bepergian antarbenua",
    "optionD": "Orang yang selalu memenangkan perselisihan fisik",
    "options": [
      {
        "id": "A",
        "text": "Orang yang paling banyak menghafal naskah puisi"
      },
      {
        "id": "B",
        "text": "Orang yang orang-orang muslim lainnya selamat dari kejahatan lisan dan perbuatan tangannya"
      },
      {
        "id": "C",
        "text": "Orang yang paling sering bepergian antarbenua"
      },
      {
        "id": "D",
        "text": "Orang yang selalu memenangkan perselisihan fisik"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Muslim sejati menjamin rasa aman bagi sesama, tidak menyakiti dengan lisan (ghibah/fitnah) atau tangan (kekerasan).",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-035",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Hadits Tematik - Keutamaan Sedekah",
    "competency": "Menganalisis hadits amal jariyah",
    "question": "Dalam hadits riwayat Muslim, tiga amalan yang pahalanya tidak akan terputus meskipun seseorang telah meninggal dunia adalah...",
    "optionA": "Tabungan emas, rumah megah, dan sawah garapan",
    "optionB": "Gelar bangsawan, nama jalan, dan tugu prasasti peringatan",
    "optionC": "Sedekah jariyah, ilmu yang bermanfaat, dan anak saleh yang mendoakannya",
    "optionD": "Koleksi pakaian mewah, kendaraan kuda, dan perhiasan mutiara",
    "options": [
      {
        "id": "A",
        "text": "Tabungan emas, rumah megah, dan sawah garapan"
      },
      {
        "id": "B",
        "text": "Gelar bangsawan, nama jalan, dan tugu prasasti peringatan"
      },
      {
        "id": "C",
        "text": "Sedekah jariyah, ilmu yang bermanfaat, dan anak saleh yang mendoakannya"
      },
      {
        "id": "D",
        "text": "Koleksi pakaian mewah, kendaraan kuda, dan perhiasan mutiara"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Tiga amalan abadi setelah wafat: shadaqah jariyah, 'ilmun yuntafa'u bih, dan waladun shalihun yad'u lah.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-036",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Hadits Tematik - Persaudaraan (Ukhuwah)",
    "competency": "Menganalisis hadits perumpamaan kaum mukmin",
    "question": "Hadits Nabi mengumpamakan kaum mukmin dalam kasih sayang dan saling tolong-menolong laksana satu tubuh (كَالْجَسَدِ الْوَاحِدِ), jika satu anggota tubuh sakit, maka...",
    "optionA": "Anggota tubuh yang lain membiarkannya agar lekas sembuh sendiri",
    "optionB": "Bagian yang sehat harus dipisahkan dari yang sakit",
    "optionC": "Organ lainnya tetap tenang tidak terpengaruh keadaan",
    "optionD": "Seluruh anggota tubuh yang lain ikut merasakan demam dan tidak bisa tidur",
    "options": [
      {
        "id": "A",
        "text": "Anggota tubuh yang lain membiarkannya agar lekas sembuh sendiri"
      },
      {
        "id": "B",
        "text": "Bagian yang sehat harus dipisahkan dari yang sakit"
      },
      {
        "id": "C",
        "text": "Organ lainnya tetap tenang tidak terpengaruh keadaan"
      },
      {
        "id": "D",
        "text": "Seluruh anggota tubuh yang lain ikut merasakan demam dan tidak bisa tidur"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Perumpamaan satu tubuh (kal jasadil wahid) mencerminkan solidaritas dan empati mendalam antar kaum mukmin.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-037",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Hadits Tematik - Menghindari Sifat Munafik",
    "competency": "Menganalisis tiga tanda orang munafik",
    "question": "Sabda Nabi: \"آيَةُ المُنَافِقِ ثَلَاثٌ\". Tiga tanda ciri orang munafik menurut hadits shahih adalah...",
    "optionA": "Bila berbicara berdusta, bila berjanji mengingkari, dan bila dipercaya berkhianat",
    "optionB": "Bila makan tergesa-gesa, bila tidur mendengkur, dan bila berjalan sombong",
    "optionC": "Bila belajar malas, bila mengantuk tertidur, dan bila kenyang bersendawa",
    "optionD": "Bila berdagang mengambil laba, bila membeli menawar, dan bila berutang mencatat",
    "options": [
      {
        "id": "A",
        "text": "Bila berbicara berdusta, bila berjanji mengingkari, dan bila dipercaya berkhianat"
      },
      {
        "id": "B",
        "text": "Bila makan tergesa-gesa, bila tidur mendengkur, dan bila berjalan sombong"
      },
      {
        "id": "C",
        "text": "Bila belajar malas, bila mengantuk tertidur, dan bila kenyang bersendawa"
      },
      {
        "id": "D",
        "text": "Bila berdagang mengambil laba, bila membeli menawar, dan bila berutang mencatat"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Ayatul munafiqi tsalats: idza haddatsa kadzaba, wa idza wa'ada akhlafa, wa idzatumina khana.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-038",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Hadits Tematik - Berbakti kepada Orang Tua",
    "competency": "Menganalisis kedudukan ibu dalam hadits",
    "question": "Ketika seorang sahabat bertanya kepada Rasulullah SAW tentang siapa yang paling berhak diperlakukan dengan baik, beliau menjawab \"Ibumu\" sebanyak...",
    "optionA": "1 kali langsung bersama ayahmu",
    "optionB": "3 kali, baru kemudian beliau menyebut \"Ayahmu\"",
    "optionC": "5 kali berturut-turut tanpa menyebut ayah",
    "optionD": "2 kali setara dengan pamanmu",
    "options": [
      {
        "id": "A",
        "text": "1 kali langsung bersama ayahmu"
      },
      {
        "id": "B",
        "text": "3 kali, baru kemudian beliau menyebut \"Ayahmu\""
      },
      {
        "id": "C",
        "text": "5 kali berturut-turut tanpa menyebut ayah"
      },
      {
        "id": "D",
        "text": "2 kali setara dengan pamanmu"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Rasulullah menyebut \"ummu-ka\" tiga kali sebelum menyebut \"abu-ka\" sebagai penghormatan atas derita mengandung, melahirkan, dan menyusui.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-039",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Hadits Tematik - Larangan Marah",
    "competency": "Menganalisis hadits mengendalikan emosi",
    "question": "Ketika seorang sahabat meminta wasiat singkat yang menyelamatkan hidupnya, Rasulullah SAW mengulang berkali-kali pesan:",
    "optionA": "\"لَا تَنَمْ\" (Janganlah engkau tidur di malam hari)",
    "optionB": "\"لَا تَأْكُلْ\" (Janganlah engkau makan sampai kenyang)",
    "optionC": "\"لَا تَغْضَبْ\" (Janganlah engkau mudah marah)",
    "optionD": "\"لَا تَبْكِ\" (Janganlah engkau menangis saat sedih)",
    "options": [
      {
        "id": "A",
        "text": "\"لَا تَنَمْ\" (Janganlah engkau tidur di malam hari)"
      },
      {
        "id": "B",
        "text": "\"لَا تَأْكُلْ\" (Janganlah engkau makan sampai kenyang)"
      },
      {
        "id": "C",
        "text": "\"لَا تَغْضَبْ\" (Janganlah engkau mudah marah)"
      },
      {
        "id": "D",
        "text": "\"لَا تَبْكِ\" (Janganlah engkau menangis saat sedih)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Wasiat agung Nabi \"La taghdhab\" mengajarkan pengendalian diri dari hawa nafsu amarah.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-qh-040",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MTs",
    "subtopic": "Hadits Tematik - Cinta Tanah Air dan Toleransi",
    "competency": "Menganalisis komitmen kebangsaan dalam bingkai sunnah",
    "question": "Ketika berhijrah meninggalkan kota Makkah, Rasulullah SAW memandang tanah kelahirannya dengan haru seraya bersabda betapa beliau mencintai negerinya. Peristiwa ini menjadi dalil...",
    "optionA": "Larangan bepergian melintasi batas gurun pasir",
    "optionB": "Kewajiban menghancurkan kota yang ditinggalkan",
    "optionC": "Kebencian mutlak terhadap tempat kelahiran yang menolak dakwah",
    "optionD": "Disyariatkannya rasa cinta tanah air dan patriotisme menjaga ketenteraman negeri",
    "options": [
      {
        "id": "A",
        "text": "Larangan bepergian melintasi batas gurun pasir"
      },
      {
        "id": "B",
        "text": "Kewajiban menghancurkan kota yang ditinggalkan"
      },
      {
        "id": "C",
        "text": "Kebencian mutlak terhadap tempat kelahiran yang menolak dakwah"
      },
      {
        "id": "D",
        "text": "Disyariatkannya rasa cinta tanah air dan patriotisme menjaga ketenteraman negeri"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Ungkapan cinta Nabi pada tanah air Makkah menunjukkan fitrah dan kemuliaan mencintai negeri tumpah darah.",
    "tip": "Kuasai kaidah tajwid, asbabun nuzul surah pendek, dan matan hadits-hadits esensial.",
    "difficulty": "sedang",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-001",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Sifat Wajib bagi Allah",
    "competency": "Menganalisis sifat-sifat wajib dan mustahil bagi Allah",
    "question": "Sifat wajib Allah \"Mukhalafatu lil hawaditsi\" bermakna bahwa Allah SWT...",
    "optionA": "Berbeda dengan segala ciptaan makhluk-Nya dan tidak menyerupai apa pun",
    "optionB": "Maha Mendengar segala bisikan batin tanpa alat indra",
    "optionC": "Kekal abadi tanpa ada batas akhir masa",
    "optionD": "Berdiri sendiri tanpa memerlukan bantuan pihak lain",
    "options": [
      {
        "id": "A",
        "text": "Berbeda dengan segala ciptaan makhluk-Nya dan tidak menyerupai apa pun"
      },
      {
        "id": "B",
        "text": "Maha Mendengar segala bisikan batin tanpa alat indra"
      },
      {
        "id": "C",
        "text": "Kekal abadi tanpa ada batas akhir masa"
      },
      {
        "id": "D",
        "text": "Berdiri sendiri tanpa memerlukan bantuan pihak lain"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Mukhalafatu lil hawaditsi menegaskan Allah suci dari sifat kebendaan dan keserupaan dengan makhluk.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-002",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Sifat Wajib bagi Allah",
    "competency": "Menganalisis sifat Qiyamuhu Binafsihi",
    "question": "Sifat wajib Allah \"Qiyamuhu binafsihi\" mengandung arti bahwa Allah SWT adalah Dzat yang...",
    "optionA": "Maha Melihat segala perbuatan manusia di tempat gelap",
    "optionB": "Maha Berdiri Sendiri dan tidak membutuhkan tempat bertempat atau pertolongan makhluk",
    "optionC": "Maha Mengetahui ilmu masa lalu dan masa depan",
    "optionD": "Maha Hidup kekal dan tidak pernah mengantuk",
    "options": [
      {
        "id": "A",
        "text": "Maha Melihat segala perbuatan manusia di tempat gelap"
      },
      {
        "id": "B",
        "text": "Maha Berdiri Sendiri dan tidak membutuhkan tempat bertempat atau pertolongan makhluk"
      },
      {
        "id": "C",
        "text": "Maha Mengetahui ilmu masa lalu dan masa depan"
      },
      {
        "id": "D",
        "text": "Maha Hidup kekal dan tidak pernah mengantuk"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Qiyamuhu binafsihi bermakna Allah Maha Kaya, mandiri mutlak, dan tidak bergantung pada siapa pun.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-003",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Sifat Wajib bagi Allah",
    "competency": "Menganalisis sifat Baqa' dan Wujud",
    "question": "Lawan atau sifat mustahil dari sifat \"Baqa'\" (Maha Kekal) bagi Allah SWT adalah...",
    "optionA": "Adam (tiada)",
    "optionB": "Huduts (baru berawal)",
    "optionC": "Fana' (rusak atau binasa)",
    "optionD": "Mumatsalatu lil hawaditsi (serupa makhluk)",
    "options": [
      {
        "id": "A",
        "text": "Adam (tiada)"
      },
      {
        "id": "B",
        "text": "Huduts (baru berawal)"
      },
      {
        "id": "C",
        "text": "Fana' (rusak atau binasa)"
      },
      {
        "id": "D",
        "text": "Mumatsalatu lil hawaditsi (serupa makhluk)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Mustahil Allah bersifat Fana (binasa). Allah bersifat Baqa (kekal selamanya).",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-004",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Sifat Jaiz bagi Allah",
    "competency": "Menganalisis sifat jaiz bagi Allah SWT",
    "question": "Sifat jaiz bagi Allah SWT dalam aqidah Ahlussunnah wal Jama'ah adalah...",
    "optionA": "Wajib mengutus nabi ke setiap generasi tanpa kecuali",
    "optionB": "Wajib memasukkan orang yang taat ke surga secara hukum pasti",
    "optionC": "Mustahil mengampuni dosa orang yang bertaubat nasuha",
    "optionD": "Fi'lu kulli mumkinin au tarkuhu (menciptakan segala hal yang mungkin atau meninggalkannya)",
    "options": [
      {
        "id": "A",
        "text": "Wajib mengutus nabi ke setiap generasi tanpa kecuali"
      },
      {
        "id": "B",
        "text": "Wajib memasukkan orang yang taat ke surga secara hukum pasti"
      },
      {
        "id": "C",
        "text": "Mustahil mengampuni dosa orang yang bertaubat nasuha"
      },
      {
        "id": "D",
        "text": "Fi'lu kulli mumkinin au tarkuhu (menciptakan segala hal yang mungkin atau meninggalkannya)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Hak mutlak Allah berkehendak menciptakan segala yang mungkin atau tidak menciptakannya tanpa paksaan.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-005",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Asmaul Husna",
    "competency": "Menganalisis makna Asmaul Husna Al-Aziz",
    "question": "Asmaul Husna \"Al-'Aziz\" menegaskan bahwa Allah SWT adalah Dzat yang...",
    "optionA": "Maha Perkasa, Maha Kuasa, dan tidak terkalahkan oleh siapa pun",
    "optionB": "Maha Melapangkan rezeki seluas-luasnya bagi hamba pilihan",
    "optionC": "Maha Pengampun segala dosa dengan rahmat luas",
    "optionD": "Maha Adil dalam menimbang perbuatan manusia",
    "options": [
      {
        "id": "A",
        "text": "Maha Perkasa, Maha Kuasa, dan tidak terkalahkan oleh siapa pun"
      },
      {
        "id": "B",
        "text": "Maha Melapangkan rezeki seluas-luasnya bagi hamba pilihan"
      },
      {
        "id": "C",
        "text": "Maha Pengampun segala dosa dengan rahmat luas"
      },
      {
        "id": "D",
        "text": "Maha Adil dalam menimbang perbuatan manusia"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Al-Aziz bermakna Yang Memiliki Kemuliaan dan Keperkasaan mutlak tak terkalahkan.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-006",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Asmaul Husna",
    "competency": "Menganalisis makna Asmaul Husna Al-Ghaffar",
    "question": "Perbedaan makna mendasar antara Asmaul Husna \"Al-Ghaffar\" dan \"Al-'Afuw\" adalah...",
    "optionA": "Al-Ghaffar hanya berlaku bagi kaum nabi terdahulu",
    "optionB": "Al-Ghaffar menutup aib dan dosa hamba, sedangkan Al-'Afuw menghapus dosa sampai ke akar-akarnya",
    "optionC": "Al-'Afuw hanya memaafkan kesalahan anak kecil",
    "optionD": "Keduanya bermakna sama persis tanpa ada perbedaan nuansa bahasa",
    "options": [
      {
        "id": "A",
        "text": "Al-Ghaffar hanya berlaku bagi kaum nabi terdahulu"
      },
      {
        "id": "B",
        "text": "Al-Ghaffar menutup aib dan dosa hamba, sedangkan Al-'Afuw menghapus dosa sampai ke akar-akarnya"
      },
      {
        "id": "C",
        "text": "Al-'Afuw hanya memaafkan kesalahan anak kecil"
      },
      {
        "id": "D",
        "text": "Keduanya bermakna sama persis tanpa ada perbedaan nuansa bahasa"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Al-Ghaffar menutupi dosa di dunia dan akhirat; Al-'Afuw menghapusnya total laksana jejak di pasir.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-007",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Asmaul Husna",
    "competency": "Menganalisis makna Asmaul Husna Al-Basith",
    "question": "Asmaul Husna \"Al-Baasith\" yang berpasangan dengan \"Al-Qaabidh\" memiliki makna bahwa Allah SWT...",
    "optionA": "Maha Menyempitkan bumi saat terjadi kiamat",
    "optionB": "Maha Menghancurkan musuh-musuh kebenaran",
    "optionC": "Maha Melapangkan rezeki dan kemudahan hidup bagi siapa yang dikehendaki-Nya",
    "optionD": "Maha Mengumpulkan amal di Padang Mahsyar",
    "options": [
      {
        "id": "A",
        "text": "Maha Menyempitkan bumi saat terjadi kiamat"
      },
      {
        "id": "B",
        "text": "Maha Menghancurkan musuh-musuh kebenaran"
      },
      {
        "id": "C",
        "text": "Maha Melapangkan rezeki dan kemudahan hidup bagi siapa yang dikehendaki-Nya"
      },
      {
        "id": "D",
        "text": "Maha Mengumpulkan amal di Padang Mahsyar"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Al-Basith melapangkan rezeki, ilmu, dan kebahagiaan hamba-Nya.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-008",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Asmaul Husna",
    "competency": "Menganalisis makna Asmaul Husna Al-Qayyum",
    "question": "Doa agung \"Yaa Hayyu Yaa Qayyum\" mengagungkan dua sifat kemuliaan Allah, di mana Al-Qayyum bermakna...",
    "optionA": "Dzat Yang Maha Mendatangkan bencana alam",
    "optionB": "Dzat Yang Membagikan wahyu syariat kepada para rasul",
    "optionC": "Dzat Yang Menciptakan keajaiban mukjizat",
    "optionD": "Dzat Yang Maha Mengurus dan Memelihara kelangsungan seluruh alam semesta tanpa henti",
    "options": [
      {
        "id": "A",
        "text": "Dzat Yang Maha Mendatangkan bencana alam"
      },
      {
        "id": "B",
        "text": "Dzat Yang Membagikan wahyu syariat kepada para rasul"
      },
      {
        "id": "C",
        "text": "Dzat Yang Menciptakan keajaiban mukjizat"
      },
      {
        "id": "D",
        "text": "Dzat Yang Maha Mengurus dan Memelihara kelangsungan seluruh alam semesta tanpa henti"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Al-Qayyum bermakna Yang Terus-menerus Mengurus kelestarian seluruh makhluk ciptaan-Nya.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-009",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Iman kepada Malaikat",
    "competency": "Menganalisis tugas para malaikat Allah",
    "question": "Malaikat yang bertugas membagikan rezeki, mengatur peredaran angin, dan menurunkan curahan hujan atas izin Allah adalah...",
    "optionA": "Malaikat Mikail",
    "optionB": "Malaikat Jibril (penyampai wahyu)",
    "optionC": "Malaikat Israfil (peniup sangkakala)",
    "optionD": "Malaikat Izrail (pencabut nyawa)",
    "options": [
      {
        "id": "A",
        "text": "Malaikat Mikail"
      },
      {
        "id": "B",
        "text": "Malaikat Jibril (penyampai wahyu)"
      },
      {
        "id": "C",
        "text": "Malaikat Israfil (peniup sangkakala)"
      },
      {
        "id": "D",
        "text": "Malaikat Izrail (pencabut nyawa)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Malaikat Mikail diberi amanah mengatur rezeki dan fenomena alam seperti hujan dan angin.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-010",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Iman kepada Malaikat",
    "competency": "Membedakan sifat malaikat, jin, dan manusia",
    "question": "Ciri khas penciptaan malaikat yang membedakannya dengan jin dan manusia adalah...",
    "optionA": "Diciptakan dari api yang menyala dan beranak-pinak",
    "optionB": "Diciptakan dari cahaya (nur), tidak berhawa nafsu, dan selalu taat tanpa pernah maksiat",
    "optionC": "Diciptakan dari tanah liat kering dan bebas memilih taat atau membangkang",
    "optionD": "Dapat menjelma menjadi manusia untuk menikah",
    "options": [
      {
        "id": "A",
        "text": "Diciptakan dari api yang menyala dan beranak-pinak"
      },
      {
        "id": "B",
        "text": "Diciptakan dari cahaya (nur), tidak berhawa nafsu, dan selalu taat tanpa pernah maksiat"
      },
      {
        "id": "C",
        "text": "Diciptakan dari tanah liat kering dan bebas memilih taat atau membangkang"
      },
      {
        "id": "D",
        "text": "Dapat menjelma menjadi manusia untuk menikah"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Malaikat diciptakan dari nur, tidak makan/minum, tidak berjenis kelamin, dan selalu patuh pada perintah Allah.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-011",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Iman kepada Kitab-Kitab Allah",
    "competency": "Menganalisis kitab suci dan rasul penerimanya",
    "question": "Kitab suci Zabur diturunkan oleh Allah SWT dalam bahasa Qibthi kepada Rasul pilihan-Nya, yaitu...",
    "optionA": "Nabi Musa a.s. (Kitab Taurat)",
    "optionB": "Nabi Isa a.s. (Kitab Injil)",
    "optionC": "Nabi Dawud a.s.",
    "optionD": "Nabi Ibrahim a.s. (Suhuf)",
    "options": [
      {
        "id": "A",
        "text": "Nabi Musa a.s. (Kitab Taurat)"
      },
      {
        "id": "B",
        "text": "Nabi Isa a.s. (Kitab Injil)"
      },
      {
        "id": "C",
        "text": "Nabi Dawud a.s."
      },
      {
        "id": "D",
        "text": "Nabi Ibrahim a.s. (Suhuf)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kitab Zabur diturunkan kepada Nabi Dawud a.s. berisi untaian doa, dzikir, dan pengajaran hikmah.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-012",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Iman kepada Kitab-Kitab Allah",
    "competency": "Menganalisis kedudukan Al-Qur'an terhadap kitab sebelumnya",
    "question": "Kedudukan Al-Qur'an terhadap kitab-kitab samawi sebelumnya adalah sebagai \"Muhaimin\", yang bermakna...",
    "optionA": "Penghapus seluruh catatan sejarah para nabi kuno",
    "optionB": "Penyalin ulang hukum taurat tanpa ada perubahan",
    "optionC": "Kitab lokal khusus untuk bangsa Arab pedalaman",
    "optionD": "Penyempurna, pembenar ajaran tauhid, dan batu uji keaslian ajaran kitab terdahulu",
    "options": [
      {
        "id": "A",
        "text": "Penghapus seluruh catatan sejarah para nabi kuno"
      },
      {
        "id": "B",
        "text": "Penyalin ulang hukum taurat tanpa ada perubahan"
      },
      {
        "id": "C",
        "text": "Kitab lokal khusus untuk bangsa Arab pedalaman"
      },
      {
        "id": "D",
        "text": "Penyempurna, pembenar ajaran tauhid, dan batu uji keaslian ajaran kitab terdahulu"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Al-Qur'an berfungsi sebagai muhaimin: memelihara, menyempurnakan, dan menguji keaslian pesan syariat terdahulu.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-013",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Mukjizat, Karamah, Ma'unah, dan Istidraj",
    "competency": "Membedakan mukjizat, karamah, ma'unah, dan irhash",
    "question": "Kejadian luar biasa yang dianugerahkan Allah SWT kepada hamba yang saleh dan bertakwa (wali Allah) dinamakan...",
    "optionA": "Karamah",
    "optionB": "Mukjizat (khusus nabi dan rasul)",
    "optionC": "Ma'unah (pertolongan bagi orang beriman awam)",
    "optionD": "Istidraj (jebakan kenikmatan bagi orang fasik)",
    "options": [
      {
        "id": "A",
        "text": "Karamah"
      },
      {
        "id": "B",
        "text": "Mukjizat (khusus nabi dan rasul)"
      },
      {
        "id": "C",
        "text": "Ma'unah (pertolongan bagi orang beriman awam)"
      },
      {
        "id": "D",
        "text": "Istidraj (jebakan kenikmatan bagi orang fasik)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Karamah adalah keistimewaan yang diberikan kepada wali Allah tanpa disertai pengakuan kenabian.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-014",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Mukjizat, Karamah, Ma'unah, dan Istidraj",
    "competency": "Menganalisis konsep Istidraj",
    "question": "Seorang pendosa yang terang-terangan melanggar syariat namun harta dan kedudukannya semakin bertambah sukses mengalami ujian...",
    "optionA": "Karamah kemuliaan batin",
    "optionB": "Istidraj (jebakan kenikmatan semu sebelum siksaan datang tiba-tiba)",
    "optionC": "Ma'unah keselamatan tak terduga",
    "optionD": "Irhash tanda kemuliaan",
    "options": [
      {
        "id": "A",
        "text": "Karamah kemuliaan batin"
      },
      {
        "id": "B",
        "text": "Istidraj (jebakan kenikmatan semu sebelum siksaan datang tiba-tiba)"
      },
      {
        "id": "C",
        "text": "Ma'unah keselamatan tak terduga"
      },
      {
        "id": "D",
        "text": "Irhash tanda kemuliaan"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Istidraj adalah pemberian kelapangan duniawi bagi pelaku maksiat sebagai jebakan sebelum diazab.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-015",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Mukjizat Para Rasul",
    "competency": "Menganalisis mukjizat aqliyyah Nabi Muhammad SAW",
    "question": "Mukjizat terbesar Nabi Muhammad SAW yang bersifat kekal (aqliyyah/maknawiyyah) sepanjang masa adalah...",
    "optionA": "Keluarnya air memancar dari sela-sela jemari beliau",
    "optionB": "Terbelahnya bulan di ufuk langit Makkah",
    "optionC": "Al-Qur'an Al-Karim dengan keagungan bahasa, sains, dan hukumnya",
    "optionD": "Makanan sedikit yang mencukupi seribu sahabat",
    "options": [
      {
        "id": "A",
        "text": "Keluarnya air memancar dari sela-sela jemari beliau"
      },
      {
        "id": "B",
        "text": "Terbelahnya bulan di ufuk langit Makkah"
      },
      {
        "id": "C",
        "text": "Al-Qur'an Al-Karim dengan keagungan bahasa, sains, dan hukumnya"
      },
      {
        "id": "D",
        "text": "Makanan sedikit yang mencukupi seribu sahabat"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Al-Qur'an adalah mukjizat abadi (mu'jizat aqliyyah) yang relevan menantang peradaban manusia sepanjang zaman.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-016",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Iman kepada Hari Akhir",
    "competency": "Menganalisis tahapan peristiwa di hari akhirat",
    "question": "Tahapan setelah manusia dibangkitkan dari alam kubur di mana seluruh umat manusia dikumpulkan di satu padang luas dinamakan...",
    "optionA": "Yaumul Ba'ats (kebangkitan dari kubur)",
    "optionB": "Yaumul Hisab (perhitungan amal perbuatan)",
    "optionC": "Yaumul Mizan (penimbangan bobot pahala)",
    "optionD": "Yaumul Mahsyar",
    "options": [
      {
        "id": "A",
        "text": "Yaumul Ba'ats (kebangkitan dari kubur)"
      },
      {
        "id": "B",
        "text": "Yaumul Hisab (perhitungan amal perbuatan)"
      },
      {
        "id": "C",
        "text": "Yaumul Mizan (penimbangan bobot pahala)"
      },
      {
        "id": "D",
        "text": "Yaumul Mahsyar"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Yaumul Mahsyar adalah hari dikumpulkannya seluruh makhluk di padang Mahsyar untuk diadili.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-017",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Iman kepada Hari Akhir",
    "competency": "Menganalisis konsep Mizan dan Shirath",
    "question": "Jembatan yang terbentang di atas neraka Jahannam yang harus dilewati oleh setiap manusia menuju ke surga dinamakan...",
    "optionA": "Shirathal Mustaqim di hari kiamat",
    "optionB": "Telaga Al-Kautsar",
    "optionC": "Pintu Ar-Rayyan",
    "optionD": "Taman Raudhah",
    "options": [
      {
        "id": "A",
        "text": "Shirathal Mustaqim di hari kiamat"
      },
      {
        "id": "B",
        "text": "Telaga Al-Kautsar"
      },
      {
        "id": "C",
        "text": "Pintu Ar-Rayyan"
      },
      {
        "id": "D",
        "text": "Taman Raudhah"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Ash-Shirath adalah titian di atas neraka yang dilintasi manusia sesuai kecepatan cahaya amal ibadahnya.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-018",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Iman kepada Qada dan Qadar",
    "competency": "Membedakan Takdir Mubram dan Takdir Muallaq",
    "question": "Takdir Allah yang pasti terjadi dan tidak dapat diubah oleh usaha atau doa manusia (seperti kelahiran dan kematian) disebut...",
    "optionA": "Takdir Mu'allaq (dapat dipengaruhi ikhtiar dan doa)",
    "optionB": "Takdir Mubram",
    "optionC": "Tawakkal mutlak",
    "optionD": "Kasb perbuatan mandiri",
    "options": [
      {
        "id": "A",
        "text": "Takdir Mu'allaq (dapat dipengaruhi ikhtiar dan doa)"
      },
      {
        "id": "B",
        "text": "Takdir Mubram"
      },
      {
        "id": "C",
        "text": "Tawakkal mutlak"
      },
      {
        "id": "D",
        "text": "Kasb perbuatan mandiri"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Takdir Mubram adalah ketentuan mutlak Allah di Lauhul Mahfuzh yang tidak menerima perubahan ikhtiar.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-019",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Iman kepada Qada dan Qadar",
    "competency": "Menganalisis Takdir Muallaq",
    "question": "Kondisi kesehatan seorang siswa madrasah yang sembuh dari sakit setelah berobat teratur dan tekun berdoa merupakan contoh...",
    "optionA": "Takdir Mubram mutlak tanpa campur tangan",
    "optionB": "Kebetulan alamiah tanpa takdir Allah",
    "optionC": "Takdir Mu'allaq (tergantung pada sebab ikhtiar dan doa manusia)",
    "optionD": "Kekuatan magis pengobatan herbal",
    "options": [
      {
        "id": "A",
        "text": "Takdir Mubram mutlak tanpa campur tangan"
      },
      {
        "id": "B",
        "text": "Kebetulan alamiah tanpa takdir Allah"
      },
      {
        "id": "C",
        "text": "Takdir Mu'allaq (tergantung pada sebab ikhtiar dan doa manusia)"
      },
      {
        "id": "D",
        "text": "Kekuatan magis pengobatan herbal"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Takdir Mu'allaq adalah ketentuan Allah yang dikaitkan dengan ikhtiar nyata dan munajat doa hamba.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-020",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Akhlak Terpuji (Mahmudah)",
    "competency": "Menganalisis konsep Tawadhu'",
    "question": "Sikap rendah hati, tidak memandang rendah orang lain, dan menyadari bahwa semua kelebihan semata titipan Allah dinamakan...",
    "optionA": "Takabur (sombong merasa paling hebat)",
    "optionB": "Tasamuh (toleran)",
    "optionC": "Ta'awun (tolong-menolong)",
    "optionD": "Tawadhu'",
    "options": [
      {
        "id": "A",
        "text": "Takabur (sombong merasa paling hebat)"
      },
      {
        "id": "B",
        "text": "Tasamuh (toleran)"
      },
      {
        "id": "C",
        "text": "Ta'awun (tolong-menolong)"
      },
      {
        "id": "D",
        "text": "Tawadhu'"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Tawadhu' adalah ketundukan hati dan kerendahan sikap di hadapan kebenaran dan sesama manusia.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-021",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Akhlak Terpuji (Mahmudah)",
    "competency": "Menganalisis konsep Ikhtiar dan Tawakkal",
    "question": "Berserah diri sepenuhnya kepada ketetapan Allah setelah mengerahkan seluruh kemampuan dan daya usaha maksimal disebut...",
    "optionA": "Tawakkal",
    "optionB": "Fatalisme pasif (jabariyyah)",
    "optionC": "Qana'ah merasa cukup",
    "optionD": "Syukur nikmat",
    "options": [
      {
        "id": "A",
        "text": "Tawakkal"
      },
      {
        "id": "B",
        "text": "Fatalisme pasif (jabariyyah)"
      },
      {
        "id": "C",
        "text": "Qana'ah merasa cukup"
      },
      {
        "id": "D",
        "text": "Syukur nikmat"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tawakkal hakiki didahului oleh ikhtiar sungguh-sungguh, lalu menyerahkan hasil akhirnya kepada Allah.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-022",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Akhlak Terpuji (Mahmudah)",
    "competency": "Menganalisis konsep Qana'ah",
    "question": "Sikap rela menerima dan merasa cukup atas apa yang dianugerahkan oleh Allah SWT serta menjauhkan diri dari rasa serakah dinamakan...",
    "optionA": "Iffah menjaga kehormatan",
    "optionB": "Qana'ah",
    "optionC": "Syaja'ah keberanian membela kebenaran",
    "optionD": "Murunah keluwesan bergaul",
    "options": [
      {
        "id": "A",
        "text": "Iffah menjaga kehormatan"
      },
      {
        "id": "B",
        "text": "Qana'ah"
      },
      {
        "id": "C",
        "text": "Syaja'ah keberanian membela kebenaran"
      },
      {
        "id": "D",
        "text": "Murunah keluwesan bergaul"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Qana'ah adalah kekayaan jiwa yang merasa cukup dengan rezeki halal yang Allah berikan.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-023",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Akhlak Terpuji (Mahmudah)",
    "competency": "Menganalisis konsep Syaja'ah",
    "question": "Keberanian moral seorang santri madrasah dalam menyuarakan kebenaran dan menolak perundungan (bullying) di madrasah mencerminkan sifat...",
    "optionA": "Tahawwur (nekat membabi buta tanpa perhitungan)",
    "optionB": "Jubun (pengecut penakut)",
    "optionC": "Syaja'ah (keberanian berlandaskan kebenaran syariat)",
    "optionD": "Kibr (sombong membanggakan diri)",
    "options": [
      {
        "id": "A",
        "text": "Tahawwur (nekat membabi buta tanpa perhitungan)"
      },
      {
        "id": "B",
        "text": "Jubun (pengecut penakut)"
      },
      {
        "id": "C",
        "text": "Syaja'ah (keberanian berlandaskan kebenaran syariat)"
      },
      {
        "id": "D",
        "text": "Kibr (sombong membanggakan diri)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Syaja'ah adalah keberanian proporsional membela hak dan kebenaran demi mencari ridha Allah.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-024",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Akhlak Terpuji (Mahmudah)",
    "competency": "Menganalisis konsep Husnuzhan",
    "question": "Selalu berprasangka baik kepada rencana dan takdir Allah SWT meskipun sedang menghadapi cobaan berat dinamakan...",
    "optionA": "Su'uzhan (berprasangka buruk)",
    "optionB": "Nifaq (kemunafikan tersembunyi)",
    "optionC": "Riya' (pamer amal ibadah)",
    "optionD": "Husnuzhan billah",
    "options": [
      {
        "id": "A",
        "text": "Su'uzhan (berprasangka buruk)"
      },
      {
        "id": "B",
        "text": "Nifaq (kemunafikan tersembunyi)"
      },
      {
        "id": "C",
        "text": "Riya' (pamer amal ibadah)"
      },
      {
        "id": "D",
        "text": "Husnuzhan billah"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Husnuzhan billah meyakini bahwa di balik setiap takdir pahit Allah menyimpan hikmah kebaikan besar.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-025",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Akhlak Tercela (Mazhmumah)",
    "competency": "Menganalisis penyakit hati Riya' dan Sum'ah",
    "question": "Sikap beribadah dengan sengaja menceritakan amal salehnya kepada orang lain agar didengar dan memperoleh pujian masyarakat disebut...",
    "optionA": "Sum'ah",
    "optionB": "Riya' (memperlihatkan ibadah secara visual)",
    "optionC": "Ujub (kagum pada kehebatan diri sendiri)",
    "optionD": "Hasad (dengki atas nikmat orang lain)",
    "options": [
      {
        "id": "A",
        "text": "Sum'ah"
      },
      {
        "id": "B",
        "text": "Riya' (memperlihatkan ibadah secara visual)"
      },
      {
        "id": "C",
        "text": "Ujub (kagum pada kehebatan diri sendiri)"
      },
      {
        "id": "D",
        "text": "Hasad (dengki atas nikmat orang lain)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Sum'ah berasal dari kata sami'a (mendengar), yaitu memperdengarkan amal agar dipuji orang lain.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-026",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Akhlak Tercela (Mazhmumah)",
    "competency": "Menganalisis penyakit hati Hasad (Dengki)",
    "question": "Bahaya penyakit hati hasad diibaratkan oleh Rasulullah SAW seperti api yang memakan kayu bakar karena hasad dapat...",
    "optionA": "Menambah kekayaan materi secara tidak berkah",
    "optionB": "Menghanguskan dan melenyapkan seluruh pahala kebaikan yang telah dikumpulkan",
    "optionC": "Membuat pelakunya disegani oleh kawan dan lawan",
    "optionD": "Mengurangi hafalan kitab secara perlahan",
    "options": [
      {
        "id": "A",
        "text": "Menambah kekayaan materi secara tidak berkah"
      },
      {
        "id": "B",
        "text": "Menghanguskan dan melenyapkan seluruh pahala kebaikan yang telah dikumpulkan"
      },
      {
        "id": "C",
        "text": "Membuat pelakunya disegani oleh kawan dan lawan"
      },
      {
        "id": "D",
        "text": "Mengurangi hafalan kitab secara perlahan"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Nabi bersabda hasad memakan kebaikan sebagaimana api melalap kayu bakar hingga menjadi abu.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-027",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Akhlak Tercela (Mazhmumah)",
    "competency": "Menganalisis perbedaan Ghibah dan Fitnah",
    "question": "Membicarakan keburukan atau aib nyata saudara sesama muslim di belakangnya yang apabila ia dengar ia merasa tidak suka dinamakan...",
    "optionA": "Fitnah (tuduhan bohong tanpa dasar kenyataan)",
    "optionB": "Namimah (adu domba antarpihak)",
    "optionC": "Ghibah",
    "optionD": "Buhtan (kebohongan besar)",
    "options": [
      {
        "id": "A",
        "text": "Fitnah (tuduhan bohong tanpa dasar kenyataan)"
      },
      {
        "id": "B",
        "text": "Namimah (adu domba antarpihak)"
      },
      {
        "id": "C",
        "text": "Ghibah"
      },
      {
        "id": "D",
        "text": "Buhtan (kebohongan besar)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Ghibah adalah membicarakan hal yang benar ada pada saudara yang ia benci jika diungkapkan; jika dusta disebut buhtan/fitnah.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-028",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Akhlak Tercela (Mazhmumah)",
    "competency": "Menganalisis dosa Namimah (Adu Domba)",
    "question": "Menyampaikan perkataan seseorang kepada pihak lain dengan tujuan merusak hubungan silaturahmi dan memicu permusuhan disebut perbuatan...",
    "optionA": "Ghibah gunjingan aib",
    "optionB": "Ananiyyah egoisme pribadi",
    "optionC": "Gadhab amarah tak terkendali",
    "optionD": "Namimah",
    "options": [
      {
        "id": "A",
        "text": "Ghibah gunjingan aib"
      },
      {
        "id": "B",
        "text": "Ananiyyah egoisme pribadi"
      },
      {
        "id": "C",
        "text": "Gadhab amarah tak terkendali"
      },
      {
        "id": "D",
        "text": "Namimah"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Namimah adalah perbuatan adu domba yang diancam tidak akan masuk surga dalam hadits shahih.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-029",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Akhlak Terpuji dalam Bermedia Sosial",
    "competency": "Menerapkan adab bermedia sosial sesuai Fikih Informasi",
    "question": "Sikap kritis seorang santri ketika menerima berita viral yang belum jelas kebenarannya di grup pesan madrasah adalah melakukan...",
    "optionA": "Tabayyun (klarifikasi dan verifikasi kebenaran sumber informasi)",
    "optionB": "Langsung membagikan (share) ke semua kontak agar cepat viral",
    "optionC": "Menambah bumbu cerita agar nampak lebih meyakinkan",
    "optionD": "Menghapus kontak teman yang mengirimkan pesan",
    "options": [
      {
        "id": "A",
        "text": "Tabayyun (klarifikasi dan verifikasi kebenaran sumber informasi)"
      },
      {
        "id": "B",
        "text": "Langsung membagikan (share) ke semua kontak agar cepat viral"
      },
      {
        "id": "C",
        "text": "Menambah bumbu cerita agar nampak lebih meyakinkan"
      },
      {
        "id": "D",
        "text": "Menghapus kontak teman yang mengirimkan pesan"
      }
    ],
    "correctAnswer": "A",
    "explanation": "QS. Al-Hujurat ayat 6 memerintahkan tabayyun saat menerima berita dari orang fasik agar tidak menimpakan celaka.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-aa-030",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MTs",
    "subtopic": "Adab Bergaul Islami",
    "competency": "Menerapkan adab kepada orang tua dan guru",
    "question": "Kewajiban luhur mematuhi perintah baik orang tua, merawat mereka di masa senja, dan mendoakan ampunan bagi keduanya dinamakan...",
    "optionA": "Uququl Walidain (durhaka kepada orang tua)",
    "optionB": "Birrul Walidain",
    "optionC": "Silaturrahmi kerabat jauh semata",
    "optionD": "Tazkiyatun Nafs penyucian rohani",
    "options": [
      {
        "id": "A",
        "text": "Uququl Walidain (durhaka kepada orang tua)"
      },
      {
        "id": "B",
        "text": "Birrul Walidain"
      },
      {
        "id": "C",
        "text": "Silaturrahmi kerabat jauh semata"
      },
      {
        "id": "D",
        "text": "Tazkiyatun Nafs penyucian rohani"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Birrul Walidain adalah salah satu amal paling dicintai Allah setelah shalat tepat waktu.",
    "tip": "Pahami sifat Allah, rukun iman, pembersihan hati dari mazhmumah, dan adab mahmudah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-fk-001",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "fikih",
    "subject": "Fikih MTs",
    "subtopic": "Thaharah dan Bersuci",
    "competency": "Membedakan jenis-jenis najis dan tata cara pensuciannya",
    "question": "Air kencing bayi laki-laki berusia di bawah 2 tahun yang belum mengonsumsi makanan apa pun selain air susu ibu (ASI) tergolong najis...",
    "optionA": "Najis Mukhaffafah (cukup dipercikkan air pada tempat yang terkena)",
    "optionB": "Najis Mutawassithah (wajib dicuci hingga hilang bau, rasa, dan warna)",
    "optionC": "Najis Mughalladhah (dicuci 7 kali salah satunya dengan tanah)",
    "optionD": "Bukan najis sama sekali",
    "options": [
      {
        "id": "A",
        "text": "Najis Mukhaffafah (cukup dipercikkan air pada tempat yang terkena)"
      },
      {
        "id": "B",
        "text": "Najis Mutawassithah (wajib dicuci hingga hilang bau, rasa, dan warna)"
      },
      {
        "id": "C",
        "text": "Najis Mughalladhah (dicuci 7 kali salah satunya dengan tanah)"
      },
      {
        "id": "D",
        "text": "Bukan najis sama sekali"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kencing bayi laki-laki ASI < 2 tahun adalah najis mukhaffafah, cara mensucikannya cukup dengan memercikkan air mutlak.",
    "tip": "Kuasai rukun dan syarat sah ibadah (thaharah, shalat, zakat, puasa, haji) serta ketentuan muamalah syariah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-fk-002",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "fikih",
    "subject": "Fikih MTs",
    "subtopic": "Thaharah dan Bersuci",
    "competency": "Menganalisis pensucian najis mughalladhah",
    "question": "Benda yang terkena jilatan anjing atau babi tergolong najis berat (Mughalladhah). Cara mensucikannya menurut sunnah adalah...",
    "optionA": "Membasuhnya 3 kali dengan sabun pembersih kimia",
    "optionB": "Membasuhnya sebanyak 7 kali, dan salah satu basuhannya dicampur dengan tanah suci",
    "optionC": "Membiarkannya kering di bawah terik matahari siang",
    "optionD": "Menaburkan garam dapur di atas bekas jilatan",
    "options": [
      {
        "id": "A",
        "text": "Membasuhnya 3 kali dengan sabun pembersih kimia"
      },
      {
        "id": "B",
        "text": "Membasuhnya sebanyak 7 kali, dan salah satu basuhannya dicampur dengan tanah suci"
      },
      {
        "id": "C",
        "text": "Membiarkannya kering di bawah terik matahari siang"
      },
      {
        "id": "D",
        "text": "Menaburkan garam dapur di atas bekas jilatan"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Hadits shahih menetapkan basuhan 7 kali dengan salah satunya menggunakan debu/tanah suci.",
    "tip": "Kuasai rukun dan syarat sah ibadah (thaharah, shalat, zakat, puasa, haji) serta ketentuan muamalah syariah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-fk-003",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "fikih",
    "subject": "Fikih MTs",
    "subtopic": "Thaharah dan Bersuci",
    "competency": "Menganalisis sebab-sebab mandi wajib (hadats besar)",
    "question": "Kondisi berikut yang mewajibkan seseorang untuk melakukan mandi besar (mandi junub) adalah...",
    "optionA": "Keluarnya angin (kentut) dari jalan belakang",
    "optionB": "Menyentuh mushaf Al-Qur'an dengan sengaja",
    "optionC": "Berhentinya darah haid atau nifas, dan keluarnya air mani",
    "optionD": "Tertidur lelap dalam posisi duduk stabil",
    "options": [
      {
        "id": "A",
        "text": "Keluarnya angin (kentut) dari jalan belakang"
      },
      {
        "id": "B",
        "text": "Menyentuh mushaf Al-Qur'an dengan sengaja"
      },
      {
        "id": "C",
        "text": "Berhentinya darah haid atau nifas, dan keluarnya air mani"
      },
      {
        "id": "D",
        "text": "Tertidur lelap dalam posisi duduk stabil"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Sebab hadats besar: bersetubuh, keluar mani, haid, nifas, wiladah, dan meninggal dunia.",
    "tip": "Kuasai rukun dan syarat sah ibadah (thaharah, shalat, zakat, puasa, haji) serta ketentuan muamalah syariah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-fk-004",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "fikih",
    "subject": "Fikih MTs",
    "subtopic": "Thaharah dan Bersuci",
    "competency": "Menganalisis syarat dan rukun tayamum",
    "question": "Rukun tayamum sebagai pengganti wudhu dan mandi wajib adalah...",
    "optionA": "Mengusap kepala dan membasuh kedua telinga dengan air",
    "optionB": "Membasuh kedua kaki hingga mata kaki dengan kerikil",
    "optionC": "Berkumur-kumur dan memasukkan debu ke dalam hidung",
    "optionD": "Niat, mengusap wajah, dan mengusap kedua tangan sampai siku dengan debu suci",
    "options": [
      {
        "id": "A",
        "text": "Mengusap kepala dan membasuh kedua telinga dengan air"
      },
      {
        "id": "B",
        "text": "Membasuh kedua kaki hingga mata kaki dengan kerikil"
      },
      {
        "id": "C",
        "text": "Berkumur-kumur dan memasukkan debu ke dalam hidung"
      },
      {
        "id": "D",
        "text": "Niat, mengusap wajah, dan mengusap kedua tangan sampai siku dengan debu suci"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Rukun tayamum: niat, memindahkan debu, mengusap muka, dan mengusap kedua tangan sampai siku.",
    "tip": "Kuasai rukun dan syarat sah ibadah (thaharah, shalat, zakat, puasa, haji) serta ketentuan muamalah syariah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-fk-005",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "fikih",
    "subject": "Fikih MTs",
    "subtopic": "Shalat Berjamaah",
    "competency": "Menganalisis ketentuan masbuq dalam shalat berjamaah",
    "question": "Seorang makmum masbuq dinyatakan telah mendapatkan satu rakaat bersama imam apabila ia...",
    "optionA": "Sempat melakukan ruku' dan thuma'ninah bersama imam sebelum imam bangkit i'tidal",
    "optionB": "Sempat mendengarkan imam membaca Surah Al-Fatihah",
    "optionC": "Sempat sujud pertama bersama imam di lantai",
    "optionD": "Sempat duduk tasyahhud akhir bersama imam",
    "options": [
      {
        "id": "A",
        "text": "Sempat melakukan ruku' dan thuma'ninah bersama imam sebelum imam bangkit i'tidal"
      },
      {
        "id": "B",
        "text": "Sempat mendengarkan imam membaca Surah Al-Fatihah"
      },
      {
        "id": "C",
        "text": "Sempat sujud pertama bersama imam di lantai"
      },
      {
        "id": "D",
        "text": "Sempat duduk tasyahhud akhir bersama imam"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Ukuran mendapatkan rakaat shalat adalah mendapati ruku' bersama imam dengan thuma'ninah.",
    "tip": "Kuasai rukun dan syarat sah ibadah (thaharah, shalat, zakat, puasa, haji) serta ketentuan muamalah syariah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-fk-006",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "fikih",
    "subject": "Fikih MTs",
    "subtopic": "Sujud Sahwi, Tilawah, dan Syukur",
    "competency": "Membedakan sujud sahwi, sujud tilawah, dan sujud syukur",
    "question": "Seorang muslim yang lupa tidak melakukan tasyahhud awal pada rakaat kedua shalat Isya disunnahkan melakukan...",
    "optionA": "Sujud Syukur satu kali setelah salam",
    "optionB": "Sujud Sahwi sebanyak dua kali sebelum salam",
    "optionC": "Sujud Tilawah saat mendengar ayat sajdah",
    "optionD": "Mengulang shalat Isya dari rakaat pertama",
    "options": [
      {
        "id": "A",
        "text": "Sujud Syukur satu kali setelah salam"
      },
      {
        "id": "B",
        "text": "Sujud Sahwi sebanyak dua kali sebelum salam"
      },
      {
        "id": "C",
        "text": "Sujud Tilawah saat mendengar ayat sajdah"
      },
      {
        "id": "D",
        "text": "Mengulang shalat Isya dari rakaat pertama"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Meninggalkan sunnah ab'adh (seperti tasyahhud awal) diganti dengan sujud sahwi dua kali sebelum salam.",
    "tip": "Kuasai rukun dan syarat sah ibadah (thaharah, shalat, zakat, puasa, haji) serta ketentuan muamalah syariah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-fk-007",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "fikih",
    "subject": "Fikih MTs",
    "subtopic": "Sujud Sahwi, Tilawah, dan Syukur",
    "competency": "Menganalisis ketentuan sujud syukur",
    "question": "Seorang atlet madrasah yang spontan sujud satu kali di tepi lapangan menghadap kiblat atas kemenangannya melakukan...",
    "optionA": "Sujud Sahwi karena lupa rakaat",
    "optionB": "Sujud Tilawah karena mendengarkan qari",
    "optionC": "Sujud Syukur atas nikmat keberhasilan yang diperoleh",
    "optionD": "Sujud Rukun shalat mutlak",
    "options": [
      {
        "id": "A",
        "text": "Sujud Sahwi karena lupa rakaat"
      },
      {
        "id": "B",
        "text": "Sujud Tilawah karena mendengarkan qari"
      },
      {
        "id": "C",
        "text": "Sujud Syukur atas nikmat keberhasilan yang diperoleh"
      },
      {
        "id": "D",
        "text": "Sujud Rukun shalat mutlak"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Sujud syukur dilakukan saat memperoleh nikmat besar atau terhindar dari bencana, dilakukan di luar shalat.",
    "tip": "Kuasai rukun dan syarat sah ibadah (thaharah, shalat, zakat, puasa, haji) serta ketentuan muamalah syariah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-fk-008",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "fikih",
    "subject": "Fikih MTs",
    "subtopic": "Shalat Jamak dan Qashar",
    "competency": "Menganalisis ketentuan shalat bagi musafir",
    "question": "Seorang musafir menempuh perjalanan sejauh 90 km. Ia menggabungkan shalat Zhuhur dan Ashar dikerjakan masing-masing 2 rakaat pada waktu Ashar. Bentuk shalat ini dinamakan...",
    "optionA": "Jamak Taqdim Qashar",
    "optionB": "Jamak Shuri tanpa qashar",
    "optionC": "Qashar Munfarid fardhu",
    "optionD": "Jamak Ta'khir Qashar",
    "options": [
      {
        "id": "A",
        "text": "Jamak Taqdim Qashar"
      },
      {
        "id": "B",
        "text": "Jamak Shuri tanpa qashar"
      },
      {
        "id": "C",
        "text": "Qashar Munfarid fardhu"
      },
      {
        "id": "D",
        "text": "Jamak Ta'khir Qashar"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Dikerjakan di waktu kedua (Ashar) disebut Ta'khir, diringkas dari 4 menjadi 2 rakaat disebut Qashar.",
    "tip": "Kuasai rukun dan syarat sah ibadah (thaharah, shalat, zakat, puasa, haji) serta ketentuan muamalah syariah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-fk-009",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "fikih",
    "subject": "Fikih MTs",
    "subtopic": "Shalat Jamak dan Qashar",
    "competency": "Menentukan shalat yang tidak boleh di-qashar",
    "question": "Shalat fardhu yang TIDAK BOLEH diringkas (di-qashar) rakaatnya oleh seorang musafir adalah...",
    "optionA": "Shalat Maghrib (tetap 3 rakaat) dan Shalat Subuh (tetap 2 rakaat)",
    "optionB": "Shalat Zhuhur dan Ashar",
    "optionC": "Shalat Ashar dan Isya",
    "optionD": "Shalat Isya dan Zhuhur",
    "options": [
      {
        "id": "A",
        "text": "Shalat Maghrib (tetap 3 rakaat) dan Shalat Subuh (tetap 2 rakaat)"
      },
      {
        "id": "B",
        "text": "Shalat Zhuhur dan Ashar"
      },
      {
        "id": "C",
        "text": "Shalat Ashar dan Isya"
      },
      {
        "id": "D",
        "text": "Shalat Isya dan Zhuhur"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Hanya shalat fardhu 4 rakaat (Zhuhur, Ashar, Isya) yang boleh di-qashar menjadi 2 rakaat.",
    "tip": "Kuasai rukun dan syarat sah ibadah (thaharah, shalat, zakat, puasa, haji) serta ketentuan muamalah syariah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-fk-010",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "fikih",
    "subject": "Fikih MTs",
    "subtopic": "Shalat Jenazah",
    "competency": "Menganalisis tata cara shalat jenazah",
    "question": "Pada shalat jenazah yang terdiri atas 4 takbir tanpa ruku' dan sujud, bacaan doa khusus untuk jenazah dibaca setelah...",
    "optionA": "Takbir pertama (membaca Al-Fatihah)",
    "optionB": "Takbir ketiga (takbir ketiga mendoakan ampunan bagi mayit)",
    "optionC": "Takbir kedua (membaca shalawat nabi)",
    "optionD": "Takbir keempat (doa penutup dan salam)",
    "options": [
      {
        "id": "A",
        "text": "Takbir pertama (membaca Al-Fatihah)"
      },
      {
        "id": "B",
        "text": "Takbir ketiga (takbir ketiga mendoakan ampunan bagi mayit)"
      },
      {
        "id": "C",
        "text": "Takbir kedua (membaca shalawat nabi)"
      },
      {
        "id": "D",
        "text": "Takbir keempat (doa penutup dan salam)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Urutan: Takbir 1 (Al-Fatihah), Takbir 2 (Shalawat), Takbir 3 (Doa jenazah: Allahummaghfir lahu...), Takbir 4 (Doa penutup).",
    "tip": "Kuasai rukun dan syarat sah ibadah (thaharah, shalat, zakat, puasa, haji) serta ketentuan muamalah syariah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-fk-011",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "fikih",
    "subject": "Fikih MTs",
    "subtopic": "Shalat Gerhana dan Istisqa",
    "competency": "Menganalisis tata cara shalat gerhana (Kusuf/Khusuf)",
    "question": "Perbedaan gerakan shalat gerhana matahari (Kusuf) dengan shalat sunnah biasa adalah setiap rakaatnya memiliki...",
    "optionA": "Tiga kali sujud di setiap rakaat",
    "optionB": "Tanpa membaca surat Al-Fatihah",
    "optionC": "Dua kali berdiri, dua kali membaca surat, dan dua kali ruku'",
    "optionD": "Dilakukan tanpa menghadap kiblat",
    "options": [
      {
        "id": "A",
        "text": "Tiga kali sujud di setiap rakaat"
      },
      {
        "id": "B",
        "text": "Tanpa membaca surat Al-Fatihah"
      },
      {
        "id": "C",
        "text": "Dua kali berdiri, dua kali membaca surat, dan dua kali ruku'"
      },
      {
        "id": "D",
        "text": "Dilakukan tanpa menghadap kiblat"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Shalat gerhana dilakukan 2 rakaat dengan masing-masing rakaat mempunyai 2 ruku' dan 2 kali berdiri.",
    "tip": "Kuasai rukun dan syarat sah ibadah (thaharah, shalat, zakat, puasa, haji) serta ketentuan muamalah syariah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-fk-012",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "fikih",
    "subject": "Fikih MTs",
    "subtopic": "Puasa Wajib dan Sunnah",
    "competency": "Menganalisis rukun dan pembatal puasa",
    "question": "Hal berikut yang membatalkan ibadah puasa dan mewajibkan pembayaran kafarat udzma (memerdekakan budak, puasa 2 bulan berturut-turut, atau memberi makan 60 miskin) adalah...",
    "optionA": "Muntah secara tidak sengaja karena mual",
    "optionB": "Mimpi basah di siang hari saat tidur",
    "optionC": "Menelan air liur sendiri yang bersih di mulut",
    "optionD": "Melakukan hubungan suami istri di siang hari bulan Ramadan dengan sengaja",
    "options": [
      {
        "id": "A",
        "text": "Muntah secara tidak sengaja karena mual"
      },
      {
        "id": "B",
        "text": "Mimpi basah di siang hari saat tidur"
      },
      {
        "id": "C",
        "text": "Menelan air liur sendiri yang bersih di mulut"
      },
      {
        "id": "D",
        "text": "Melakukan hubungan suami istri di siang hari bulan Ramadan dengan sengaja"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Jima' di siang hari Ramadan dengan sengaja membatalkan puasa dan mewajibkan kafarat kubra.",
    "tip": "Kuasai rukun dan syarat sah ibadah (thaharah, shalat, zakat, puasa, haji) serta ketentuan muamalah syariah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-fk-013",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "fikih",
    "subject": "Fikih MTs",
    "subtopic": "Puasa Wajib dan Sunnah",
    "competency": "Menganalisis ketentuan fidyah puasa",
    "question": "Orang tua renta yang sudah tidak mampu lagi berpuasa Ramadan atau orang sakit menahun yang tidak ada harapan sembuh mengganti puasanya dengan cara...",
    "optionA": "Membayar Fidyah sebesar satu mud makanan pokok untuk setiap hari yang ditinggalkan",
    "optionB": "Meng-qadha puasa pada bulan Syawal berikutnya",
    "optionC": "Melakukan puasa kafarat selama 2 bulan berturut-turut",
    "optionD": "Menyembelih seekor sapi jantan di hari raya",
    "options": [
      {
        "id": "A",
        "text": "Membayar Fidyah sebesar satu mud makanan pokok untuk setiap hari yang ditinggalkan"
      },
      {
        "id": "B",
        "text": "Meng-qadha puasa pada bulan Syawal berikutnya"
      },
      {
        "id": "C",
        "text": "Melakukan puasa kafarat selama 2 bulan berturut-turut"
      },
      {
        "id": "D",
        "text": "Menyembelih seekor sapi jantan di hari raya"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Orang tua renta atau sakit permanen tidak wajib qadha, melainkan wajib membayar fidyah (1 mud ~675 gram beras per hari).",
    "tip": "Kuasai rukun dan syarat sah ibadah (thaharah, shalat, zakat, puasa, haji) serta ketentuan muamalah syariah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-fk-014",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "fikih",
    "subject": "Fikih MTs",
    "subtopic": "Puasa Wajib dan Sunnah",
    "competency": "Mengidentifikasi hari-hari yang diharamkan berpuasa",
    "question": "Hari-hari yang diharamkan secara mutlak bagi umat Islam untuk berpuasa adalah...",
    "optionA": "Hari Jumat dan hari Sabtu",
    "optionB": "Dua hari raya (Idul Fitri dan Idul Adha) serta hari Tasyrik (11, 12, 13 Dzulhijjah)",
    "optionC": "Hari Senin dan hari Kamis",
    "optionD": "Pertengahan bulan Sya'ban (Nisfu Sya'ban)",
    "options": [
      {
        "id": "A",
        "text": "Hari Jumat dan hari Sabtu"
      },
      {
        "id": "B",
        "text": "Dua hari raya (Idul Fitri dan Idul Adha) serta hari Tasyrik (11, 12, 13 Dzulhijjah)"
      },
      {
        "id": "C",
        "text": "Hari Senin dan hari Kamis"
      },
      {
        "id": "D",
        "text": "Pertengahan bulan Sya'ban (Nisfu Sya'ban)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Hari raya dan hari tasyrik adalah hari makan minum dan berdzikir, haram berpuasa padanya.",
    "tip": "Kuasai rukun dan syarat sah ibadah (thaharah, shalat, zakat, puasa, haji) serta ketentuan muamalah syariah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-fk-015",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "fikih",
    "subject": "Fikih MTs",
    "subtopic": "Zakat Fitrah dan Zakat Mal",
    "competency": "Menganalisis besaran dan waktu zakat fitrah",
    "question": "Kadar zakat fitrah yang wajib dikeluarkan oleh setiap jiwa muslim sebelum shalat Idul Fitri adalah sebesar...",
    "optionA": "5 kg beras pulen organik",
    "optionB": "2,5 persen dari total tabungan uang gaji",
    "optionC": "1 sha' atau setara dengan 2,5 kg (atau 3,5 liter) bahan makanan pokok",
    "optionD": "10 persen dari hasil panen padi sawah",
    "options": [
      {
        "id": "A",
        "text": "5 kg beras pulen organik"
      },
      {
        "id": "B",
        "text": "2,5 persen dari total tabungan uang gaji"
      },
      {
        "id": "C",
        "text": "1 sha' atau setara dengan 2,5 kg (atau 3,5 liter) bahan makanan pokok"
      },
      {
        "id": "D",
        "text": "10 persen dari hasil panen padi sawah"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Nabi mewajibkan zakat fitrah 1 sha' kurma/gandum, di Indonesia disetarakan 2,5 kg atau 3,5 liter beras.",
    "tip": "Kuasai rukun dan syarat sah ibadah (thaharah, shalat, zakat, puasa, haji) serta ketentuan muamalah syariah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-fk-016",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "fikih",
    "subject": "Fikih MTs",
    "subtopic": "Zakat Fitrah dan Zakat Mal",
    "competency": "Menganalisis nisab dan kadar zakat emas",
    "question": "Nisab zakat mal emas yang telah dimiliki dan tersimpan genap selama satu haul (1 tahun hijriyah) adalah sebesar...",
    "optionA": "100 gram emas dengan kadar zakat 5%",
    "optionB": "50 gram emas dengan kadar zakat 10%",
    "optionC": "200 gram perak dengan kadar zakat 2,5%",
    "optionD": "85 gram emas murni dengan kadar zakat 2,5%",
    "options": [
      {
        "id": "A",
        "text": "100 gram emas dengan kadar zakat 5%"
      },
      {
        "id": "B",
        "text": "50 gram emas dengan kadar zakat 10%"
      },
      {
        "id": "C",
        "text": "200 gram perak dengan kadar zakat 2,5%"
      },
      {
        "id": "D",
        "text": "85 gram emas murni dengan kadar zakat 2,5%"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Nisab emas adalah 20 dinar setara 85 gram emas, kadar zakatnya 2,5% jika mencapai haul.",
    "tip": "Kuasai rukun dan syarat sah ibadah (thaharah, shalat, zakat, puasa, haji) serta ketentuan muamalah syariah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-fk-017",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "fikih",
    "subject": "Fikih MTs",
    "subtopic": "Zakat Fitrah dan Zakat Mal",
    "competency": "Menganalisis 8 golongan penerima zakat (Mustahik)",
    "question": "Golongan yang berhak menerima zakat (mustahik) yang terlilit utang demi mendamaikan perselisihan atau memenuhi kebutuhan hidup pokok dinamakan...",
    "optionA": "Gharimin",
    "optionB": "Ibnu Sabil (musafir kehabisan bekal)",
    "optionC": "Amil zakat (petugas pengelola)",
    "optionD": "Muallaf (orang yang baru masuk Islam)",
    "options": [
      {
        "id": "A",
        "text": "Gharimin"
      },
      {
        "id": "B",
        "text": "Ibnu Sabil (musafir kehabisan bekal)"
      },
      {
        "id": "C",
        "text": "Amil zakat (petugas pengelola)"
      },
      {
        "id": "D",
        "text": "Muallaf (orang yang baru masuk Islam)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Gharimin adalah orang yang terlilit utang halal dan tidak mampu melunasinya.",
    "tip": "Kuasai rukun dan syarat sah ibadah (thaharah, shalat, zakat, puasa, haji) serta ketentuan muamalah syariah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-fk-018",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "fikih",
    "subject": "Fikih MTs",
    "subtopic": "Haji dan Umrah",
    "competency": "Membedakan rukun haji dan wajib haji",
    "question": "Inti pokok dari pelaksanaan ibadah haji di mana seluruh jamaah berkumpul di padang Arafah pada tanggal 9 Dzulhijjah disebut rukun...",
    "optionA": "Tawaf Ifadhah di Ka'bah",
    "optionB": "Wukuf di Arafah",
    "optionC": "Sa'i antara Shafa dan Marwah",
    "optionD": "Tahallul mencukur rambut",
    "options": [
      {
        "id": "A",
        "text": "Tawaf Ifadhah di Ka'bah"
      },
      {
        "id": "B",
        "text": "Wukuf di Arafah"
      },
      {
        "id": "C",
        "text": "Sa'i antara Shafa dan Marwah"
      },
      {
        "id": "D",
        "text": "Tahallul mencukur rambut"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Al-Hajju 'Arafah: wukuf di Arafah adalah rukun teragung yang tidak sah haji tanpanya.",
    "tip": "Kuasai rukun dan syarat sah ibadah (thaharah, shalat, zakat, puasa, haji) serta ketentuan muamalah syariah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-fk-019",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "fikih",
    "subject": "Fikih MTs",
    "subtopic": "Haji dan Umrah",
    "competency": "Menganalisis Miqat Makani haji",
    "question": "Tempat batas geografis dimulainya niat ihram haji atau umrah bagi jamaah yang datang dari arah Madinah adalah...",
    "optionA": "Yalamlam (arah Yaman)",
    "optionB": "Qarnul Manazil (arah Najd)",
    "optionC": "Dzulhulaifah (Bir Ali)",
    "optionD": "Juhfah (arah Syam)",
    "options": [
      {
        "id": "A",
        "text": "Yalamlam (arah Yaman)"
      },
      {
        "id": "B",
        "text": "Qarnul Manazil (arah Najd)"
      },
      {
        "id": "C",
        "text": "Dzulhulaifah (Bir Ali)"
      },
      {
        "id": "D",
        "text": "Juhfah (arah Syam)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Miqat makani penduduk Madinah dan yang melewatinya adalah Dzulhulaifah (Bir Ali).",
    "tip": "Kuasai rukun dan syarat sah ibadah (thaharah, shalat, zakat, puasa, haji) serta ketentuan muamalah syariah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-fk-020",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "fikih",
    "subject": "Fikih MTs",
    "subtopic": "Penyembelihan Kurban dan Aqiqah",
    "competency": "Membedakan ketentuan kurban dan aqiqah",
    "question": "Ketentuan jumlah kambing atau domba untuk pelaksanaan aqiqah anak laki-laki menurut sunnah Rasulullah SAW adalah...",
    "optionA": "1 ekor kambing jantan bertanduk",
    "optionB": "3 ekor kambing betina gemuk",
    "optionC": "1/7 bagian dari seekor sapi perah",
    "optionD": "2 ekor kambing yang sehat dan memenuhi syarat umur",
    "options": [
      {
        "id": "A",
        "text": "1 ekor kambing jantan bertanduk"
      },
      {
        "id": "B",
        "text": "3 ekor kambing betina gemuk"
      },
      {
        "id": "C",
        "text": "1/7 bagian dari seekor sapi perah"
      },
      {
        "id": "D",
        "text": "2 ekor kambing yang sehat dan memenuhi syarat umur"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Aqiqah anak laki-laki disunnahkan 2 ekor kambing, dan anak perempuan 1 ekor kambing.",
    "tip": "Kuasai rukun dan syarat sah ibadah (thaharah, shalat, zakat, puasa, haji) serta ketentuan muamalah syariah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-fk-021",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "fikih",
    "subject": "Fikih MTs",
    "subtopic": "Fikih Muamalah - Jual Beli dan Khiyar",
    "competency": "Menganalisis konsep Khiyar dalam jual beli Islam",
    "question": "Hak yang diberikan syariat kepada pembeli dan penjual untuk memilih meneruskan atau membatalkan akad jual beli selama masih berada di tempat transaksi disebut...",
    "optionA": "Khiyar Majelis",
    "optionB": "Khiyar Syarat (dengan batas waktu perjanjian)",
    "optionC": "Khiyar 'Aib (karena cacat barang)",
    "optionD": "Khiyar Ru'yah (karena melihat barang)",
    "options": [
      {
        "id": "A",
        "text": "Khiyar Majelis"
      },
      {
        "id": "B",
        "text": "Khiyar Syarat (dengan batas waktu perjanjian)"
      },
      {
        "id": "C",
        "text": "Khiyar 'Aib (karena cacat barang)"
      },
      {
        "id": "D",
        "text": "Khiyar Ru'yah (karena melihat barang)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Khiyar Majelis berlaku selama kedua belah pihak masih berada di tempat transaksi dan belum berpisah.",
    "tip": "Kuasai rukun dan syarat sah ibadah (thaharah, shalat, zakat, puasa, haji) serta ketentuan muamalah syariah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-fk-022",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "fikih",
    "subject": "Fikih MTs",
    "subtopic": "Fikih Muamalah - Larangan Riba",
    "competency": "Membedakan jenis-jenis riba",
    "question": "Pertukaran barang ribawi sejenis (emas dengan emas atau gandum dengan gandum) dengan timbangan yang tidak sama beratnya tergolong...",
    "optionA": "Riba Nasi'ah (karena penundaan waktu)",
    "optionB": "Riba Fadhl",
    "optionC": "Riba Qardh (keuntungan dari pinjaman utang)",
    "optionD": "Riba Yad (berpisah sebelum timbang terima)",
    "options": [
      {
        "id": "A",
        "text": "Riba Nasi'ah (karena penundaan waktu)"
      },
      {
        "id": "B",
        "text": "Riba Fadhl"
      },
      {
        "id": "C",
        "text": "Riba Qardh (keuntungan dari pinjaman utang)"
      },
      {
        "id": "D",
        "text": "Riba Yad (berpisah sebelum timbang terima)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Riba Fadhl adalah kelebihan takaran pada pertukaran barang ribawi sejenis.",
    "tip": "Kuasai rukun dan syarat sah ibadah (thaharah, shalat, zakat, puasa, haji) serta ketentuan muamalah syariah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-fk-023",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "fikih",
    "subject": "Fikih MTs",
    "subtopic": "Fikih Makanan dan Minuman",
    "competency": "Menganalisis kriteria makanan halal dan thayyib",
    "question": "Dua jenis bangkai binatang yang dihalalkan bagi umat Islam untuk dikonsumsi menurut hadits Rasulullah SAW adalah...",
    "optionA": "Bangkai ayam dan bangkai burung puyuh",
    "optionB": "Bangkai sapi dan bangkai kambing kurban",
    "optionC": "Bangkai ikan dan bangkai belalang",
    "optionD": "Bangkai kelinci dan bangkai kijang rimba",
    "options": [
      {
        "id": "A",
        "text": "Bangkai ayam dan bangkai burung puyuh"
      },
      {
        "id": "B",
        "text": "Bangkai sapi dan bangkai kambing kurban"
      },
      {
        "id": "C",
        "text": "Bangkai ikan dan bangkai belalang"
      },
      {
        "id": "D",
        "text": "Bangkai kelinci dan bangkai kijang rimba"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Nabi bersabda: \"Dihalalkan bagi kita dua bangkai dan dua darah; dua bangkai yaitu ikan dan belalang, dua darah yaitu hati dan limpa.\"",
    "tip": "Kuasai rukun dan syarat sah ibadah (thaharah, shalat, zakat, puasa, haji) serta ketentuan muamalah syariah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-sk-001",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "ski",
    "subject": "SKI MTs",
    "subtopic": "Dakwah Nabi di Makkah",
    "competency": "Menganalisis strategi dakwah sembunyi-sembunyi dan terang-terangan",
    "question": "Tempat pertemuan rahasia pembinaan awal dakwah Islam pada masa Rasulullah berdakwah secara sembunyi-sembunyi di Makkah adalah rumah...",
    "optionA": "Al-Arqam bin Abil Arqam (Darul Arqam)",
    "optionB": "Abu Bakar Ash-Shiddiq",
    "optionC": "Khadijah binti Khuwailid",
    "optionD": "Umar bin Khattab",
    "options": [
      {
        "id": "A",
        "text": "Al-Arqam bin Abil Arqam (Darul Arqam)"
      },
      {
        "id": "B",
        "text": "Abu Bakar Ash-Shiddiq"
      },
      {
        "id": "C",
        "text": "Khadijah binti Khuwailid"
      },
      {
        "id": "D",
        "text": "Umar bin Khattab"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Darul Arqam menjadi pusat tarbiyah rahasia generasi assabiqunal awwalun di Makkah.",
    "tip": "Kuasai kronologi sejarah Nabi, Khulafaur Rasyidin, Daulah Umayyah-Abbasiyah, dan Walisongo di Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-sk-002",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "ski",
    "subject": "SKI MTs",
    "subtopic": "Dakwah Nabi di Makkah",
    "competency": "Menganalisis peristiwa Baiat Aqabah I dan II",
    "question": "Perjanjian setia antara Rasulullah SAW dengan kaum muslimin Yatsrib yang menjadi gerbang utama pembuka peristiwa Hijrah dinamakan...",
    "optionA": "Perjanjian Hudaibiyyah",
    "optionB": "Bai'at 'Aqabah",
    "optionC": "Piagam Madinah",
    "optionD": "Bai'atur Ridwan",
    "options": [
      {
        "id": "A",
        "text": "Perjanjian Hudaibiyyah"
      },
      {
        "id": "B",
        "text": "Bai'at 'Aqabah"
      },
      {
        "id": "C",
        "text": "Piagam Madinah"
      },
      {
        "id": "D",
        "text": "Bai'atur Ridwan"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Baiat Aqabah I dan II melahirkan kesepakatan perlindungan warga Yatsrib terhadap dakwah Nabi.",
    "tip": "Kuasai kronologi sejarah Nabi, Khulafaur Rasyidin, Daulah Umayyah-Abbasiyah, dan Walisongo di Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-sk-003",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "ski",
    "subject": "SKI MTs",
    "subtopic": "Dakwah Nabi di Madinah",
    "competency": "Menganalisis langkah strategis Nabi di Madinah",
    "question": "Langkah pertama yang dilakukan oleh Rasulullah SAW setibanya di Madinah (Yatsrib) untuk membangun peradaban umat adalah...",
    "optionA": "Mendirikan benteng militer pertahanan kota",
    "optionB": "Mencetak mata uang dinar perak madrasah",
    "optionC": "Membangun Masjid Nabawi sebagai pusat ibadah, musyawarah, dan pendidikan",
    "optionD": "Menyerang perkampungan Yahudi di Khaibar",
    "options": [
      {
        "id": "A",
        "text": "Mendirikan benteng militer pertahanan kota"
      },
      {
        "id": "B",
        "text": "Mencetak mata uang dinar perak madrasah"
      },
      {
        "id": "C",
        "text": "Membangun Masjid Nabawi sebagai pusat ibadah, musyawarah, dan pendidikan"
      },
      {
        "id": "D",
        "text": "Menyerang perkampungan Yahudi di Khaibar"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Masjid Nabawi adalah pilar pertama integrasi ibadah, pemerintahan, dan sosial umat di Madinah.",
    "tip": "Kuasai kronologi sejarah Nabi, Khulafaur Rasyidin, Daulah Umayyah-Abbasiyah, dan Walisongo di Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-sk-004",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "ski",
    "subject": "SKI MTs",
    "subtopic": "Dakwah Nabi di Madinah",
    "competency": "Menganalisis Piagam Madinah (Mitsaq al-Madinah)",
    "question": "Dokumen konstitusi tertulis pertama di dunia yang menjamin hak asasi, persatuan warga lintas agama, dan pertahanan bersama di Madinah adalah...",
    "optionA": "Perjanjian Hudaibiyyah",
    "optionB": "Deklarasi Fathu Makkah",
    "optionC": "Khutbah Wada'",
    "optionD": "Piagam Madinah (Mitsaq al-Madinah)",
    "options": [
      {
        "id": "A",
        "text": "Perjanjian Hudaibiyyah"
      },
      {
        "id": "B",
        "text": "Deklarasi Fathu Makkah"
      },
      {
        "id": "C",
        "text": "Khutbah Wada'"
      },
      {
        "id": "D",
        "text": "Piagam Madinah (Mitsaq al-Madinah)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Piagam Madinah menyatukan Muhajirin, Anshar, dan suku-suku Yahudi dalam satu kesatuan politik ummah.",
    "tip": "Kuasai kronologi sejarah Nabi, Khulafaur Rasyidin, Daulah Umayyah-Abbasiyah, dan Walisongo di Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-sk-005",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "ski",
    "subject": "SKI MTs",
    "subtopic": "Perang-Perang Mempertahankan Diri",
    "competency": "Menganalisis strategi Perang Khandaq (Ahzab)",
    "question": "Ide pembuatan parit pertahanan raksasa di perbatasan Madinah saat menghadapi kepungan pasukan sekutu kafir Quraisy pada Perang Khandaq dicetuskan oleh...",
    "optionA": "Sahabat Salman Al-Farisi r.a.",
    "optionB": "Sahabat Khalid bin Walid r.a.",
    "optionC": "Sahabat Ali bin Abi Thalib r.a.",
    "optionD": "Sahabat Abu Dzar Al-Ghifari r.a.",
    "options": [
      {
        "id": "A",
        "text": "Sahabat Salman Al-Farisi r.a."
      },
      {
        "id": "B",
        "text": "Sahabat Khalid bin Walid r.a."
      },
      {
        "id": "C",
        "text": "Sahabat Ali bin Abi Thalib r.a."
      },
      {
        "id": "D",
        "text": "Sahabat Abu Dzar Al-Ghifari r.a."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Salman Al-Farisi mengusulkan taktik parit (khandaq) yang lazim dipakai di negeri Persia.",
    "tip": "Kuasai kronologi sejarah Nabi, Khulafaur Rasyidin, Daulah Umayyah-Abbasiyah, dan Walisongo di Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-sk-006",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "ski",
    "subject": "SKI MTs",
    "subtopic": "Fathu Makkah dan Haji Wada'",
    "competency": "Menganalisis peristiwa pembebasan kota Makkah (Fathu Makkah)",
    "question": "Sikap Rasulullah SAW terhadap para pembesar kafir Quraisy saat peristiwa Fathu Makkah tahun 8 Hijriyah adalah...",
    "optionA": "Menghukum mati seluruh tawanan perang",
    "optionB": "Memberikan pengampunan umum secara damai (\"Hari ini adalah hari kasih sayang\")",
    "optionC": "Menyita seluruh rumah dan kebun warga Makkah",
    "optionD": "Memaksa seluruh penduduk Makkah masuk Islam seketika",
    "options": [
      {
        "id": "A",
        "text": "Menghukum mati seluruh tawanan perang"
      },
      {
        "id": "B",
        "text": "Memberikan pengampunan umum secara damai (\"Hari ini adalah hari kasih sayang\")"
      },
      {
        "id": "C",
        "text": "Menyita seluruh rumah dan kebun warga Makkah"
      },
      {
        "id": "D",
        "text": "Memaksa seluruh penduduk Makkah masuk Islam seketika"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Nabi mengumumkan \"Al-yauma yaumul marhamah\" dan memaafkan penduduk Makkah dengan damai.",
    "tip": "Kuasai kronologi sejarah Nabi, Khulafaur Rasyidin, Daulah Umayyah-Abbasiyah, dan Walisongo di Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-sk-007",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "ski",
    "subject": "SKI MTs",
    "subtopic": "Khulafaur Rasyidin",
    "competency": "Menganalisis prestasi Khalifah Abu Bakar Ash-Shiddiq",
    "question": "Langkah tegas yang diambil oleh Khalifah Abu Bakar Ash-Shiddiq r.a. pada awal masa kekhalifahannya demi menjaga keutuhan Islam adalah...",
    "optionA": "Memindahkan ibu kota kekhalifahan ke Damaskus",
    "optionB": "Membubarkan dewan syura penasihat khalifah",
    "optionC": "Memerangi orang murtad, nabi palsu (Musailamah al-Kadzdzab), dan kaum yang menolak membayar zakat",
    "optionD": "Menghapus penanggalan kalender hijriyah",
    "options": [
      {
        "id": "A",
        "text": "Memindahkan ibu kota kekhalifahan ke Damaskus"
      },
      {
        "id": "B",
        "text": "Membubarkan dewan syura penasihat khalifah"
      },
      {
        "id": "C",
        "text": "Memerangi orang murtad, nabi palsu (Musailamah al-Kadzdzab), dan kaum yang menolak membayar zakat"
      },
      {
        "id": "D",
        "text": "Menghapus penanggalan kalender hijriyah"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Perang Riddah dipimpin Abu Bakar untuk menumpas kaum murtad, pembangkang zakat, dan nabi palsu.",
    "tip": "Kuasai kronologi sejarah Nabi, Khulafaur Rasyidin, Daulah Umayyah-Abbasiyah, dan Walisongo di Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-sk-008",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "ski",
    "subject": "SKI MTs",
    "subtopic": "Khulafaur Rasyidin",
    "competency": "Menganalisis prestasi Khalifah Umar bin Khattab",
    "question": "Penetapan kalender Hijriyah yang diawali dari peristiwa hijrah Nabi SAW ke Madinah diprakarsai pada masa pemerintahan Khalifah...",
    "optionA": "Abu Bakar Ash-Shiddiq r.a.",
    "optionB": "Utsman bin Affan r.a.",
    "optionC": "Ali bin Abi Thalib r.a.",
    "optionD": "Umar bin Khattab r.a.",
    "options": [
      {
        "id": "A",
        "text": "Abu Bakar Ash-Shiddiq r.a."
      },
      {
        "id": "B",
        "text": "Utsman bin Affan r.a."
      },
      {
        "id": "C",
        "text": "Ali bin Abi Thalib r.a."
      },
      {
        "id": "D",
        "text": "Umar bin Khattab r.a."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Umar bin Khattab menetapkan kalender resmi Hijriyah dan membentuk administrasi Baitul Mal serta pos.",
    "tip": "Kuasai kronologi sejarah Nabi, Khulafaur Rasyidin, Daulah Umayyah-Abbasiyah, dan Walisongo di Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-sk-009",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "ski",
    "subject": "SKI MTs",
    "subtopic": "Khulafaur Rasyidin",
    "competency": "Menganalisis prestasi Khalifah Utsman bin Affan",
    "question": "Jasa terbesar Khalifah Utsman bin Affan r.a. yang manfaatnya dirasakan oleh seluruh umat Islam di dunia sampai sekarang adalah...",
    "optionA": "Kodifikasi dan standarisasi penulisan mushaf Al-Qur'an (Mushaf Utsmani)",
    "optionB": "Pembentukan armada tentara berkuda kavaleri pertama",
    "optionC": "Pembangunan istana megah di padang pasir Syam",
    "optionD": "Penaklukan benteng Konstantinopel",
    "options": [
      {
        "id": "A",
        "text": "Kodifikasi dan standarisasi penulisan mushaf Al-Qur'an (Mushaf Utsmani)"
      },
      {
        "id": "B",
        "text": "Pembentukan armada tentara berkuda kavaleri pertama"
      },
      {
        "id": "C",
        "text": "Pembangunan istana megah di padang pasir Syam"
      },
      {
        "id": "D",
        "text": "Penaklukan benteng Konstantinopel"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Penyatuan rasm mushaf standar Utsmani menyelamatkan umat Islam dari perpecahan bacaan Al-Qur'an.",
    "tip": "Kuasai kronologi sejarah Nabi, Khulafaur Rasyidin, Daulah Umayyah-Abbasiyah, dan Walisongo di Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-sk-010",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "ski",
    "subject": "SKI MTs",
    "subtopic": "Khulafaur Rasyidin",
    "competency": "Menganalisis masa pemerintahan Khalifah Ali bin Abi Thalib",
    "question": "Tantangan politik terbesar yang dihadapi oleh Khalifah Ali bin Abi Thalib r.a. selama memimpin pemerintahan adalah...",
    "optionA": "Serangan pasukan kekaisaran Romawi dari utara",
    "optionB": "Pemberontakan dan perselisihan politik internal (Perang Jamal dan Perang Shiffin)",
    "optionC": "Krisis pangan paceklik hebat di Madinah",
    "optionD": "Kekurangan penghafal Al-Qur'an",
    "options": [
      {
        "id": "A",
        "text": "Serangan pasukan kekaisaran Romawi dari utara"
      },
      {
        "id": "B",
        "text": "Pemberontakan dan perselisihan politik internal (Perang Jamal dan Perang Shiffin)"
      },
      {
        "id": "C",
        "text": "Krisis pangan paceklik hebat di Madinah"
      },
      {
        "id": "D",
        "text": "Kekurangan penghafal Al-Qur'an"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fitnah besar memicu perang saudara (Perang Jamal dan Perang Shiffin) pada masa Khalifah Ali.",
    "tip": "Kuasai kronologi sejarah Nabi, Khulafaur Rasyidin, Daulah Umayyah-Abbasiyah, dan Walisongo di Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-sk-011",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "ski",
    "subject": "SKI MTs",
    "subtopic": "Dinasti Bani Umayyah di Damaskus",
    "competency": "Menganalisis pendirian dan kemajuan Dinasti Bani Umayyah",
    "question": "Pendiri sekaligus khalifah pertama Dinasti Bani Umayyah yang memindahkan pusat pemerintahan dari Madinah ke Damaskus adalah...",
    "optionA": "Marwan bin Hakam",
    "optionB": "Yazid bin Muawiyah",
    "optionC": "Muawiyah bin Abi Sufyan",
    "optionD": "Abdul Malik bin Marwan",
    "options": [
      {
        "id": "A",
        "text": "Marwan bin Hakam"
      },
      {
        "id": "B",
        "text": "Yazid bin Muawiyah"
      },
      {
        "id": "C",
        "text": "Muawiyah bin Abi Sufyan"
      },
      {
        "id": "D",
        "text": "Abdul Malik bin Marwan"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Muawiyah mendirikan Daulah Umayyah di Damaskus tahun 661 Masehi dan mengubah sistem syura menjadi monarki.",
    "tip": "Kuasai kronologi sejarah Nabi, Khulafaur Rasyidin, Daulah Umayyah-Abbasiyah, dan Walisongo di Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-sk-012",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "ski",
    "subject": "SKI MTs",
    "subtopic": "Dinasti Bani Umayyah di Damaskus",
    "competency": "Menganalisis kepemimpinan Umar bin Abdul Aziz",
    "question": "Khalifah Dinasti Umayyah yang terkenal sangat adil, wara', sederhana, dan dijuluki sebagai \"Khulafaur Rasyidin kelima\" adalah...",
    "optionA": "Walid bin Abdul Malik",
    "optionB": "Hisyam bin Abdul Malik",
    "optionC": "Sulaiman bin Abdul Malik",
    "optionD": "Umar bin Abdul Aziz",
    "options": [
      {
        "id": "A",
        "text": "Walid bin Abdul Malik"
      },
      {
        "id": "B",
        "text": "Hisyam bin Abdul Malik"
      },
      {
        "id": "C",
        "text": "Sulaiman bin Abdul Malik"
      },
      {
        "id": "D",
        "text": "Umar bin Abdul Aziz"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Umar bin Abdul Aziz memimpin dengan adil, menghapus diskriminasi mawali, dan menyejahterakan rakyat.",
    "tip": "Kuasai kronologi sejarah Nabi, Khulafaur Rasyidin, Daulah Umayyah-Abbasiyah, dan Walisongo di Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-sk-013",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "ski",
    "subject": "SKI MTs",
    "subtopic": "Dinasti Bani Umayyah di Andalusia (Spanyol)",
    "competency": "Menganalisis kejayaan peradaban Islam di Kordoba",
    "question": "Panglima perang Islam yang memimpin pembebasan wilayah semenanjung Andalusia (Spanyol) pada tahun 711 Masehi adalah...",
    "optionA": "Thariq bin Ziyad",
    "optionB": "Amr bin Ash",
    "optionC": "Sa'ad bin Abi Waqqash",
    "optionD": "Salahuddin Al-Ayyubi",
    "options": [
      {
        "id": "A",
        "text": "Thariq bin Ziyad"
      },
      {
        "id": "B",
        "text": "Amr bin Ash"
      },
      {
        "id": "C",
        "text": "Sa'ad bin Abi Waqqash"
      },
      {
        "id": "D",
        "text": "Salahuddin Al-Ayyubi"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Thariq bin Ziyad menyeberangi selat Jabal Thariq (Gibraltar) dan membuka pintu peradaban Islam di Andalusia.",
    "tip": "Kuasai kronologi sejarah Nabi, Khulafaur Rasyidin, Daulah Umayyah-Abbasiyah, dan Walisongo di Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-sk-014",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "ski",
    "subject": "SKI MTs",
    "subtopic": "Dinasti Bani Abbasiyah di Baghdad",
    "competency": "Menganalisis masa keemasan Daulah Abbasiyah",
    "question": "Lembaga penerjemahan naskah ilmiah internasional dan perpustakaan raksasa yang didirikan di kota Baghdad pada masa Daulah Abbasiyah dinamakan...",
    "optionA": "Darul Ulum",
    "optionB": "Baitul Hikmah",
    "optionC": "Nizhamiyyah",
    "optionD": "Al-Azhar",
    "options": [
      {
        "id": "A",
        "text": "Darul Ulum"
      },
      {
        "id": "B",
        "text": "Baitul Hikmah"
      },
      {
        "id": "C",
        "text": "Nizhamiyyah"
      },
      {
        "id": "D",
        "text": "Al-Azhar"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Baitul Hikmah didirikan oleh Harun Ar-Rasyid dan dikembangkan pesat oleh Khalifah Al-Ma'mun.",
    "tip": "Kuasai kronologi sejarah Nabi, Khulafaur Rasyidin, Daulah Umayyah-Abbasiyah, dan Walisongo di Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-sk-015",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "ski",
    "subject": "SKI MTs",
    "subtopic": "Dinasti Bani Abbasiyah di Baghdad",
    "competency": "Menganalisis ilmuwan muslim bidang matematika dan kedokteran",
    "question": "Ilmuwan muslim penemu angka nol dan pencetus cabang ilmu Aljabar yang hidup pada era Daulah Abbasiyah adalah...",
    "optionA": "Ibnu Sina (Avicenna bidang kedokteran)",
    "optionB": "Al-Biruni (astronomi kebumian)",
    "optionC": "Muhammad bin Musa Al-Khawarizmi",
    "optionD": "Jabir bin Hayyan (bapak kimia)",
    "options": [
      {
        "id": "A",
        "text": "Ibnu Sina (Avicenna bidang kedokteran)"
      },
      {
        "id": "B",
        "text": "Al-Biruni (astronomi kebumian)"
      },
      {
        "id": "C",
        "text": "Muhammad bin Musa Al-Khawarizmi"
      },
      {
        "id": "D",
        "text": "Jabir bin Hayyan (bapak kimia)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Al-Khawarizmi menulis kitab Al-Jabr wal Muqabalah dan meletakkan dasar sistem desimal dan aljabar.",
    "tip": "Kuasai kronologi sejarah Nabi, Khulafaur Rasyidin, Daulah Umayyah-Abbasiyah, dan Walisongo di Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-sk-016",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "ski",
    "subject": "SKI MTs",
    "subtopic": "Dinasti Bani Abbasiyah di Baghdad",
    "competency": "Menganalisis karya agung Ibnu Sina",
    "question": "Karya ensiklopedia kedokteran karya Ibnu Sina (Avicenna) yang menjadi buku rujukan standar fakultas kedokteran di Eropa selama berabad-abad berjudul...",
    "optionA": "Ihya' Ulumiddin karya Al-Ghazali",
    "optionB": "Tahafut al-Falasifah",
    "optionC": "Al-Madinah Al-Fadhilah karya Al-Farabi",
    "optionD": "Al-Qanun fi at-Thibb (The Canon of Medicine)",
    "options": [
      {
        "id": "A",
        "text": "Ihya' Ulumiddin karya Al-Ghazali"
      },
      {
        "id": "B",
        "text": "Tahafut al-Falasifah"
      },
      {
        "id": "C",
        "text": "Al-Madinah Al-Fadhilah karya Al-Farabi"
      },
      {
        "id": "D",
        "text": "Al-Qanun fi at-Thibb (The Canon of Medicine)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Al-Qanun fi at-Thibb karya Ibnu Sina adalah mahakarya kedokteran paling berpengaruh di dunia.",
    "tip": "Kuasai kronologi sejarah Nabi, Khulafaur Rasyidin, Daulah Umayyah-Abbasiyah, dan Walisongo di Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-sk-017",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "ski",
    "subject": "SKI MTs",
    "subtopic": "Dinasti Al-Ayyubiyah",
    "competency": "Menganalisis kepahlawanan Salahuddin Al-Ayyubi",
    "question": "Pahlawan besar Islam sekaligus pendiri Daulah Ayyubiyah yang berhasil membebaskan kota suci Baitul Maqdis (Yerusalem) dalam Perang Salib adalah...",
    "optionA": "Sultan Salahuddin Al-Ayyubi",
    "optionB": "Sultan Nuruddin Zanki",
    "optionC": "Sultan Baybars Mamluk",
    "optionD": "Sultan Saifuddin Quthuz",
    "options": [
      {
        "id": "A",
        "text": "Sultan Salahuddin Al-Ayyubi"
      },
      {
        "id": "B",
        "text": "Sultan Nuruddin Zanki"
      },
      {
        "id": "C",
        "text": "Sultan Baybars Mamluk"
      },
      {
        "id": "D",
        "text": "Sultan Saifuddin Quthuz"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Salahuddin Al-Ayyubi memenangkan Pertempuran Hittin tahun 1187 dan membebaskan Yerusalem secara ksatria.",
    "tip": "Kuasai kronologi sejarah Nabi, Khulafaur Rasyidin, Daulah Umayyah-Abbasiyah, dan Walisongo di Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-sk-018",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "ski",
    "subject": "SKI MTs",
    "subtopic": "Sejarah Islam di Nusantara",
    "competency": "Menganalisis kerajaan Islam pertama di Indonesia",
    "question": "Kerajaan Islam pertama di kepulauan Nusantara yang terletak di pesisir utara Aceh pada abad ke-13 Masehi adalah...",
    "optionA": "Kesultanan Malaka dipimpin Parameswara",
    "optionB": "Kesultanan Samudera Pasai dipimpin Sultan Malik As-Saleh",
    "optionC": "Kesultanan Demak dipimpin Raden Patah",
    "optionD": "Kesultanan Aceh Darussalam dipimpin Sultan Ali Mughayat Syah",
    "options": [
      {
        "id": "A",
        "text": "Kesultanan Malaka dipimpin Parameswara"
      },
      {
        "id": "B",
        "text": "Kesultanan Samudera Pasai dipimpin Sultan Malik As-Saleh"
      },
      {
        "id": "C",
        "text": "Kesultanan Demak dipimpin Raden Patah"
      },
      {
        "id": "D",
        "text": "Kesultanan Aceh Darussalam dipimpin Sultan Ali Mughayat Syah"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Samudera Pasai dikonfirmasi oleh Ibnu Battuta dan nisan Malik As-Saleh bertarikh 1297 M.",
    "tip": "Kuasai kronologi sejarah Nabi, Khulafaur Rasyidin, Daulah Umayyah-Abbasiyah, dan Walisongo di Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-sk-019",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "ski",
    "subject": "SKI MTs",
    "subtopic": "Dakwah Walisongo di Pulau Jawa",
    "competency": "Menganalisis metode dakwah Sunan Kudus",
    "question": "Metode dakwah Sunan Kudus (Ja'far Shadiq) yang sangat menghormati budaya masyarakat Hindu setempat diwujudkan dengan cara...",
    "optionA": "Memaksa warga merobohkan seluruh pura tempat peribadatan",
    "optionB": "Menghapuskan upacara pernikahan adat Jawa",
    "optionC": "Melarang penyembelihan sapi saat Idul Adha dan menggantinya dengan kerbau demi toleransi",
    "optionD": "Menolak berinteraksi dengan masyarakat selain pemeluk Islam",
    "options": [
      {
        "id": "A",
        "text": "Memaksa warga merobohkan seluruh pura tempat peribadatan"
      },
      {
        "id": "B",
        "text": "Menghapuskan upacara pernikahan adat Jawa"
      },
      {
        "id": "C",
        "text": "Melarang penyembelihan sapi saat Idul Adha dan menggantinya dengan kerbau demi toleransi"
      },
      {
        "id": "D",
        "text": "Menolak berinteraksi dengan masyarakat selain pemeluk Islam"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Sunan Kudus melarang menyembelih sapi (hewan suci bagi umat Hindu) dan mendirikan menara masjid bercorak candi.",
    "tip": "Kuasai kronologi sejarah Nabi, Khulafaur Rasyidin, Daulah Umayyah-Abbasiyah, dan Walisongo di Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-sk-020",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "ski",
    "subject": "SKI MTs",
    "subtopic": "Dakwah Walisongo di Pulau Jawa",
    "competency": "Menganalisis peran Sunan Giri",
    "question": "Wali sanga yang mendirikan pesantren di bukit Giri Gresik dan menciptakan tembang dolanan anak-anak seperti \"Jelungan\" dan \"Padhang Bulan\" adalah...",
    "optionA": "Sunan Bonang (Raden Makdum Ibrahim)",
    "optionB": "Sunan Drajat (Raden Qasim)",
    "optionC": "Sunan Muria (Raden Umar Said)",
    "optionD": "Sunan Giri (Raden Paku)",
    "options": [
      {
        "id": "A",
        "text": "Sunan Bonang (Raden Makdum Ibrahim)"
      },
      {
        "id": "B",
        "text": "Sunan Drajat (Raden Qasim)"
      },
      {
        "id": "C",
        "text": "Sunan Muria (Raden Umar Said)"
      },
      {
        "id": "D",
        "text": "Sunan Giri (Raden Paku)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Sunan Giri mengembangkan dakwah lewat pendidikan pesantren kepemimpinan dan tembang dolanan edukatif.",
    "tip": "Kuasai kronologi sejarah Nabi, Khulafaur Rasyidin, Daulah Umayyah-Abbasiyah, dan Walisongo di Nusantara.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ba-001",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "bahasa_arab",
    "subject": "Bahasa Arab MTs",
    "subtopic": "Isim Isyarah dan Muannats/Mudzakar",
    "competency": "Mengidentifikasi isim isyarah lil qorib/lil ba'id sesuai jenis kata",
    "question": "Isim isyarah (kata tunjuk) yang tepat untuk melengkapi kalimat: \"... سَبُّورَةٌ جَدِيدَةٌ فِي الفَصْلِ\" adalah...",
    "optionA": "هَذِهِ (hadzihi)",
    "optionB": "هَذَا (hadza)",
    "optionC": "ذَلِكَ (dzalika)",
    "optionD": "هَؤُلَاءِ (ha'ula'i)",
    "options": [
      {
        "id": "A",
        "text": "هَذِهِ (hadzihi)"
      },
      {
        "id": "B",
        "text": "هَذَا (hadza)"
      },
      {
        "id": "C",
        "text": "ذَلِكَ (dzalika)"
      },
      {
        "id": "D",
        "text": "هَؤُلَاءِ (ha'ula'i)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kata \"سبورة\" adalah isim muannats (ada ta marbuthah), maka menggunakan kata tunjuk muannats \"هذه\".",
    "tip": "Pahami qawaid nahwu shorof (mubtada khabar, tarkib, fiil) dan mufrodat tematik madrasah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ba-002",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "bahasa_arab",
    "subject": "Bahasa Arab MTs",
    "subtopic": "Isim Isyarah Mudzakkar",
    "competency": "Mengidentifikasi isim isyarah lil ba'id mudzakkar",
    "question": "Isim isyarah untuk benda mudzakkar yang berada jauh pada kalimat: \"... كِتَابٌ نَافِعٌ عَلَى المَكْتَبِ\" adalah...",
    "optionA": "تِلْكَ (tilka)",
    "optionB": "ذَلِكَ (dzalika)",
    "optionC": "هَذِهِ (hadzihi)",
    "optionD": "هَاتَانِ (haataani)",
    "options": [
      {
        "id": "A",
        "text": "تِلْكَ (tilka)"
      },
      {
        "id": "B",
        "text": "ذَلِكَ (dzalika)"
      },
      {
        "id": "C",
        "text": "هَذِهِ (hadzihi)"
      },
      {
        "id": "D",
        "text": "هَاتَانِ (haataani)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Kata \"كتاب\" berjenis mudzakkar tanpa ta marbuthah, untuk jarak jauh menggunakan \"ذلك\".",
    "tip": "Pahami qawaid nahwu shorof (mubtada khabar, tarkib, fiil) dan mufrodat tematik madrasah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ba-003",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "bahasa_arab",
    "subject": "Bahasa Arab MTs",
    "subtopic": "Dhomir Munfashil (Kata Ganti Mandiri)",
    "competency": "Menggunakan dhomir ghaib dan mukhatab dengan tepat",
    "question": "Dhomir munfashil (kata ganti) yang tepat untuk subjek jamak mudzakkar gaib (mereka laki-laki) adalah...",
    "optionA": "هُنَّ (hunna)",
    "optionB": "أَنْتُمْ (antum)",
    "optionC": "هُمْ (hum)",
    "optionD": "نَحْنُ (nahnu)",
    "options": [
      {
        "id": "A",
        "text": "هُنَّ (hunna)"
      },
      {
        "id": "B",
        "text": "أَنْتُمْ (antum)"
      },
      {
        "id": "C",
        "text": "هُمْ (hum)"
      },
      {
        "id": "D",
        "text": "نَحْنُ (nahnu)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "\"هم\" adalah dhomir jamak mudzakkar ghaib.",
    "tip": "Pahami qawaid nahwu shorof (mubtada khabar, tarkib, fiil) dan mufrodat tematik madrasah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ba-004",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "bahasa_arab",
    "subject": "Bahasa Arab MTs",
    "subtopic": "Dhomir Muttashil (Kata Ganti Kepemilikan)",
    "competency": "Menganalisis dhomir muttashil kepemilikan",
    "question": "Frasa \"Buku tulismu (seorang laki-laki)\" dalam bahasa Arab yang benar menggunakan dhomir muttashil adalah...",
    "optionA": "كِتَابُكِ (kitaabuki)",
    "optionB": "كِتَابُهُ (kitaabuhu)",
    "optionC": "كِتَابُنَا (kitaabunaa)",
    "optionD": "كِتَابُكَ (kitaabuka)",
    "options": [
      {
        "id": "A",
        "text": "كِتَابُكِ (kitaabuki)"
      },
      {
        "id": "B",
        "text": "كِتَابُهُ (kitaabuhu)"
      },
      {
        "id": "C",
        "text": "كِتَابُنَا (kitaabunaa)"
      },
      {
        "id": "D",
        "text": "كِتَابُكَ (kitaabuka)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Akhiran kaf berharakat fathah (-ka) adalah dhomir muttashil untuk anta (kamu laki-laki).",
    "tip": "Pahami qawaid nahwu shorof (mubtada khabar, tarkib, fiil) dan mufrodat tematik madrasah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ba-005",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "bahasa_arab",
    "subject": "Bahasa Arab MTs",
    "subtopic": "Huruf Jar",
    "competency": "Menerapkan kaidah huruf jar yang memajrurkan isim",
    "question": "Harakat akhir yang benar untuk kata \"المَسْجِد\" setelah didahului huruf jar \"إِلَى\" adalah...",
    "optionA": "Kasrah menjadi \"إِلَى المَسْجِدِ\"",
    "optionB": "Dhammah menjadi \"إِلَى المَسْجِدُ\"",
    "optionC": "Fathah menjadi \"إِلَى المَسْجِدَ\"",
    "optionD": "Sukun menjadi \"إِلَى المَسْجِدْ\"",
    "options": [
      {
        "id": "A",
        "text": "Kasrah menjadi \"إِلَى المَسْجِدِ\""
      },
      {
        "id": "B",
        "text": "Dhammah menjadi \"إِلَى المَسْجِدُ\""
      },
      {
        "id": "C",
        "text": "Fathah menjadi \"إِلَى المَسْجِدَ\""
      },
      {
        "id": "D",
        "text": "Sukun menjadi \"إِلَى المَسْجِدْ\""
      }
    ],
    "correctAnswer": "A",
    "explanation": "Huruf jar (إلى, في, من, على, dll) menyebabkan isim setelahnya berstatus majrur bertanda kasrah.",
    "tip": "Pahami qawaid nahwu shorof (mubtada khabar, tarkib, fiil) dan mufrodat tematik madrasah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ba-006",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "bahasa_arab",
    "subject": "Bahasa Arab MTs",
    "subtopic": "Tarkib Na'at Man'ut (Kata Sifat)",
    "competency": "Menyesuaikan sifat (na'at) dengan yang disifati (man'ut)",
    "question": "Penyusunan tarkib na'at man'ut yang tepat pada frasa \"Siswa yang rajin\" dalam bahasa Arab adalah...",
    "optionA": "طَالِبٌ النَّشِيطُ (Thaalibun an-nasyiithu)",
    "optionB": "الطَّالِبُ النَّشِيطُ (At-thaalibu an-nasyiithu)",
    "optionC": "الطَّالِبُ نَشِيطَةٌ (At-thaalibu nasyiithatun)",
    "optionD": "طَالِبَةٌ النَّشِيطُ (Thaalibatun an-nasyiithu)",
    "options": [
      {
        "id": "A",
        "text": "طَالِبٌ النَّشِيطُ (Thaalibun an-nasyiithu)"
      },
      {
        "id": "B",
        "text": "الطَّالِبُ النَّشِيطُ (At-thaalibu an-nasyiithu)"
      },
      {
        "id": "C",
        "text": "الطَّالِبُ نَشِيطَةٌ (At-thaalibu nasyiithatun)"
      },
      {
        "id": "D",
        "text": "طَالِبَةٌ النَّشِيطُ (Thaalibatun an-nasyiithu)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Na'at harus mengikuti man'ut dalam 4 hal: i'rab, ma'rifah/nakirah, mudzakkar/muannats, dan mufrad/tasniyah/jamak.",
    "tip": "Pahami qawaid nahwu shorof (mubtada khabar, tarkib, fiil) dan mufrodat tematik madrasah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ba-007",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "bahasa_arab",
    "subject": "Bahasa Arab MTs",
    "subtopic": "Tarkib Idhafah (Kepemilikan Majemuk)",
    "competency": "Menganalisis ketentuan mudhaf dan mudhaf ilaih",
    "question": "Ciri kaidah utama kata pertama (Mudhaf) pada susunan tarkib idhafah adalah...",
    "optionA": "Harus berharakat sukun di akhir kata",
    "optionB": "Wajib berakhiran huruf nun bertasydid",
    "optionC": "Tidak boleh memakai tanwin dan tidak boleh diawali alif lam (Al-)",
    "optionD": "Harus selalu berupa kata kerja fi'il amr",
    "options": [
      {
        "id": "A",
        "text": "Harus berharakat sukun di akhir kata"
      },
      {
        "id": "B",
        "text": "Wajib berakhiran huruf nun bertasydid"
      },
      {
        "id": "C",
        "text": "Tidak boleh memakai tanwin dan tidak boleh diawali alif lam (Al-)"
      },
      {
        "id": "D",
        "text": "Harus selalu berupa kata kerja fi'il amr"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Mudhaf tidak boleh bertanwin dan tidak boleh bertanwin/ber-alif lam (contoh: بَابُ الفَصْلِ).",
    "tip": "Pahami qawaid nahwu shorof (mubtada khabar, tarkib, fiil) dan mufrodat tematik madrasah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ba-008",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "bahasa_arab",
    "subject": "Bahasa Arab MTs",
    "subtopic": "Mubtada dan Khabar",
    "competency": "Menganalisis struktur kalimat isimiyyah",
    "question": "Pada jumlah ismiyyah: \"المَدْرَسَةُ نَظِيفَةٌ\" (Madrasah itu bersih), kedudukan kata \"نَظِيفَةٌ\" adalah sebagai...",
    "optionA": "Mubtada' (pokok kalimat subjek)",
    "optionB": "Maf'ul bih (objek penderita)",
    "optionC": "Fa'il (pelaku pekerjaan)",
    "optionD": "Khabar (predikat penjelas yang berharakat dhammah)",
    "options": [
      {
        "id": "A",
        "text": "Mubtada' (pokok kalimat subjek)"
      },
      {
        "id": "B",
        "text": "Maf'ul bih (objek penderita)"
      },
      {
        "id": "C",
        "text": "Fa'il (pelaku pekerjaan)"
      },
      {
        "id": "D",
        "text": "Khabar (predikat penjelas yang berharakat dhammah)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Mubtada adalah subjek ma'rifah di awal kalimat, dan khabar adalah pelengkap penjelas keadaan mubtada.",
    "tip": "Pahami qawaid nahwu shorof (mubtada khabar, tarkib, fiil) dan mufrodat tematik madrasah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ba-009",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "bahasa_arab",
    "subject": "Bahasa Arab MTs",
    "subtopic": "Fi'il Madhi (Kata Kerja Masa Lampau)",
    "competency": "Mentashrif fi'il madhi sesuai subjek dhomir",
    "question": "Bentuk perubahan fi'il madhi kata \"ذَهَبَ\" (telah pergi) untuk subjek \"فَاطِمَةُ\" (dia seorang perempuan) adalah...",
    "optionA": "ذَهَبَتْ (dzahabat)",
    "optionB": "ذَهَبُوا (dzahabuu)",
    "optionC": "ذَهَبْتَ (dzahabta)",
    "optionD": "ذَهَبْنَا (dzahabnaa)",
    "options": [
      {
        "id": "A",
        "text": "ذَهَبَتْ (dzahabat)"
      },
      {
        "id": "B",
        "text": "ذَهَبُوا (dzahabuu)"
      },
      {
        "id": "C",
        "text": "ذَهَبْتَ (dzahabta)"
      },
      {
        "id": "D",
        "text": "ذَهَبْنَا (dzahabnaa)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Fi'il madhi untuk dhomir hiya (Fatimatun) mendapat tambahan ta ta'nits sakinah: dzahabat.",
    "tip": "Pahami qawaid nahwu shorof (mubtada khabar, tarkib, fiil) dan mufrodat tematik madrasah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ba-010",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "bahasa_arab",
    "subject": "Bahasa Arab MTs",
    "subtopic": "Fi'il Mudhari' (Kata Kerja Masa Sekarang/Akan Datang)",
    "competency": "Mentashrif fi'il mudhari' dengan huruf mudhara'ah",
    "question": "Bentuk fi'il mudhari' dari kata \"قَرَأَ\" untuk dhomir subjek \"نَحْنُ\" (kita/kami) adalah...",
    "optionA": "يَقْرَأُ (yaqra'u)",
    "optionB": "نَقْرَأُ (naqra'u)",
    "optionC": "تَقْرَأُ (taqra'u)",
    "optionD": "أَقْرَأُ (aqra'u)",
    "options": [
      {
        "id": "A",
        "text": "يَقْرَأُ (yaqra'u)"
      },
      {
        "id": "B",
        "text": "نَقْرَأُ (naqra'u)"
      },
      {
        "id": "C",
        "text": "تَقْرَأُ (taqra'u)"
      },
      {
        "id": "D",
        "text": "أَقْرَأُ (aqra'u)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Dhomir nahnu diawali huruf mudhara'ah nun: naqra'u.",
    "tip": "Pahami qawaid nahwu shorof (mubtada khabar, tarkib, fiil) dan mufrodat tematik madrasah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ba-011",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "bahasa_arab",
    "subject": "Bahasa Arab MTs",
    "subtopic": "Fi'il Amr (Kata Kerja Perintah)",
    "competency": "Membentuk fi'il amr untuk mukhatab",
    "question": "Bentuk fi'il amr (kata perintah) dari \"كَتَبَ - يَكْتُبُ\" yang ditujukan kepada seorang murid laki-laki (anta) adalah...",
    "optionA": "اُكْتُبِي (uktubii)",
    "optionB": "اُكْتُبُوا (uktubuu)",
    "optionC": "اُكْتُبْ (uktub)",
    "optionD": "كَتَبْتَ (katabta)",
    "options": [
      {
        "id": "A",
        "text": "اُكْتُبِي (uktubii)"
      },
      {
        "id": "B",
        "text": "اُكْتُبُوا (uktubuu)"
      },
      {
        "id": "C",
        "text": "اُكْتُبْ (uktub)"
      },
      {
        "id": "D",
        "text": "كَتَبْتَ (katabta)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Fi'il amr untuk anta berharakat akhir sukun: uktub.",
    "tip": "Pahami qawaid nahwu shorof (mubtada khabar, tarkib, fiil) dan mufrodat tematik madrasah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ba-012",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "bahasa_arab",
    "subject": "Bahasa Arab MTs",
    "subtopic": "Maf'ul Bih (Objek Kalimat)",
    "competency": "Menganalisis tanda i'rab nashab pada maf'ul bih",
    "question": "Pada kalimat: \"يَشْرَبُ عَلِيٌّ المَاءَ\" (Ali meminum air), harakat kata \"المَاءَ\" berharakat fathah karena berkedudukan sebagai...",
    "optionA": "Fa'il (subjek pelaku perbuatan)",
    "optionB": "Mudhaf ilaih yang majrur",
    "optionC": "Na'at yang marfu'",
    "optionD": "Maf'ul bih (objek penderita yang berstatus manshub)",
    "options": [
      {
        "id": "A",
        "text": "Fa'il (subjek pelaku perbuatan)"
      },
      {
        "id": "B",
        "text": "Mudhaf ilaih yang majrur"
      },
      {
        "id": "C",
        "text": "Na'at yang marfu'"
      },
      {
        "id": "D",
        "text": "Maf'ul bih (objek penderita yang berstatus manshub)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Maf'ul bih berstatus i'rab nashab bertanda utama fathah.",
    "tip": "Pahami qawaid nahwu shorof (mubtada khabar, tarkib, fiil) dan mufrodat tematik madrasah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ba-013",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "bahasa_arab",
    "subject": "Bahasa Arab MTs",
    "subtopic": "At-Ta'aruf (Perkenalan Diri)",
    "competency": "Menjawab ungkapan sapaan dan perkenalan",
    "question": "Apabila seseorang menyapa Anda dengan kalimat: \"أَهْلًا وَسَهْلًا\" (Selamat datang), jawaban santun yang tepat adalah...",
    "optionA": "أَهْلًا بِكَ (ahlan bika / ahlan biki)",
    "optionB": "صَبَاحَ الخَيْرِ (shabaahal khair)",
    "optionC": "مَعَ السَّلَامَةِ (ma'as salaamah)",
    "optionD": "الحَمْدُ لِلَّهِ (alhamdulillah)",
    "options": [
      {
        "id": "A",
        "text": "أَهْلًا بِكَ (ahlan bika / ahlan biki)"
      },
      {
        "id": "B",
        "text": "صَبَاحَ الخَيْرِ (shabaahal khair)"
      },
      {
        "id": "C",
        "text": "مَعَ السَّلَامَةِ (ma'as salaamah)"
      },
      {
        "id": "D",
        "text": "الحَمْدُ لِلَّهِ (alhamdulillah)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Jawaban standar ahlan wa sahlan adalah ahlan bika (pria) atau ahlan biki (wanita).",
    "tip": "Pahami qawaid nahwu shorof (mubtada khabar, tarkib, fiil) dan mufrodat tematik madrasah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ba-014",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "bahasa_arab",
    "subject": "Bahasa Arab MTs",
    "subtopic": "At-Ta'aruf (Perkenalan Diri)",
    "competency": "Menanyakan kabar dalam percakapan sehari-hari",
    "question": "Pertanyaan: \"كَيْفَ حَالُكَ يَا أَخِي؟\" (Bagaimana kabarmu saudaraku?). Jawaban yang benar adalah...",
    "optionA": "أَنَا طَالِبٌ فِي المَدْرَسَةِ (ana thaalibun)",
    "optionB": "بِخَيْرٍ وَالحَمْدُ لِلَّهِ (bi khairin walhamdulillah)",
    "optionC": "عَفْوًا يَا أُسْتَاذُ ('afwan yaa ustaadz)",
    "optionD": "إِلَى اللِّقَاءِ (ilal liqaa')",
    "options": [
      {
        "id": "A",
        "text": "أَنَا طَالِبٌ فِي المَدْرَسَةِ (ana thaalibun)"
      },
      {
        "id": "B",
        "text": "بِخَيْرٍ وَالحَمْدُ لِلَّهِ (bi khairin walhamdulillah)"
      },
      {
        "id": "C",
        "text": "عَفْوًا يَا أُسْتَاذُ ('afwan yaa ustaadz)"
      },
      {
        "id": "D",
        "text": "إِلَى اللِّقَاءِ (ilal liqaa')"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Kaifa haluka dijawab bi khairin walhamdulillah (baik-baik saja bersyukur kepada Allah).",
    "tip": "Pahami qawaid nahwu shorof (mubtada khabar, tarkib, fiil) dan mufrodat tematik madrasah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ba-015",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "bahasa_arab",
    "subject": "Bahasa Arab MTs",
    "subtopic": "Al-Adawatul Madrasiyyah (Peralatan Sekolah)",
    "competency": "Mengidentifikasi kosakata fasilitas dan alat tulis madrasah",
    "question": "Kosakata bahasa Arab untuk \"Penghapus papan tulis\" adalah...",
    "optionA": "مِسْطَرَةٌ (penggaris mistar)",
    "optionB": "مِبْرَاةٌ (rautan pensil)",
    "optionC": "طَلَّاسَةٌ / مِمْسَحَةٌ (thallaasatun / mimsahatun)",
    "optionD": "مِحْفَظَةٌ (tas sekolah)",
    "options": [
      {
        "id": "A",
        "text": "مِسْطَرَةٌ (penggaris mistar)"
      },
      {
        "id": "B",
        "text": "مِبْرَاةٌ (rautan pensil)"
      },
      {
        "id": "C",
        "text": "طَلَّاسَةٌ / مِمْسَحَةٌ (thallaasatun / mimsahatun)"
      },
      {
        "id": "D",
        "text": "مِحْفَظَةٌ (tas sekolah)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Thallaasah / mimsahah adalah penghapus papan tulis (sabbuurah).",
    "tip": "Pahami qawaid nahwu shorof (mubtada khabar, tarkib, fiil) dan mufrodat tematik madrasah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ba-016",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "bahasa_arab",
    "subject": "Bahasa Arab MTs",
    "subtopic": "As-Sa'ah (Waktu dan Jam)",
    "competency": "Menyatakan jam dan waktu dalam bahasa Arab",
    "question": "Bahasa Arab untuk menyatakan \"Pukul 07.30 pagi (Jam tujuh lebih setengah)\" adalah...",
    "optionA": "السَّاعَةُ السَّادِسَةُ وَالرُّبْعُ مَسَاءً",
    "optionB": "السَّاعَةُ الثَّامِنَةُ إِلَّا الرُّبْعَ",
    "optionC": "السَّاعَةُ الوَاحِدَةُ ظُهْرًا",
    "optionD": "السَّاعَةُ السَّابِعَةُ وَالنِّصْفُ صَبَاحًا",
    "options": [
      {
        "id": "A",
        "text": "السَّاعَةُ السَّادِسَةُ وَالرُّبْعُ مَسَاءً"
      },
      {
        "id": "B",
        "text": "السَّاعَةُ الثَّامِنَةُ إِلَّا الرُّبْعَ"
      },
      {
        "id": "C",
        "text": "السَّاعَةُ الوَاحِدَةُ ظُهْرًا"
      },
      {
        "id": "D",
        "text": "السَّاعَةُ السَّابِعَةُ وَالنِّصْفُ صَبَاحًا"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Jam 7 = as-saabi'ah, lewat setengah = wan nishf, pagi = shabaahan.",
    "tip": "Pahami qawaid nahwu shorof (mubtada khabar, tarkib, fiil) dan mufrodat tematik madrasah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ba-017",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "bahasa_arab",
    "subject": "Bahasa Arab MTs",
    "subtopic": "Al-Hiwayah (Hobi dan Kegemaran)",
    "competency": "Mengidentifikasi kosakata aneka hobi santri",
    "question": "Santri yang gemar membaca buku di perpustakaan memiliki hobi...",
    "optionA": "القِرَاءَةُ (al-qiraa'ah)",
    "optionB": "الرِّسَالَةُ (menulis surat)",
    "optionC": "السِّبَاحَةُ (berenang)",
    "optionD": "الرَّسْمُ (melukis)",
    "options": [
      {
        "id": "A",
        "text": "القِرَاءَةُ (al-qiraa'ah)"
      },
      {
        "id": "B",
        "text": "الرِّسَالَةُ (menulis surat)"
      },
      {
        "id": "C",
        "text": "السِّبَاحَةُ (berenang)"
      },
      {
        "id": "D",
        "text": "الرَّسْمُ (melukis)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Al-Qiraa'ah bermakna membaca.",
    "tip": "Pahami qawaid nahwu shorof (mubtada khabar, tarkib, fiil) dan mufrodat tematik madrasah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ba-018",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "bahasa_arab",
    "subject": "Bahasa Arab MTs",
    "subtopic": "Al-Mihnah (Profesi dan Pekerjaan)",
    "competency": "Mengidentifikasi nama-nama profesi pekerjaan",
    "question": "Kalimat: \"يَعْمَلُ أَبِي فِي المُسْتَشْفَى وَيُعَالِجُ المَرْضَى\". Profesi ayah dalam kalimat tersebut adalah...",
    "optionA": "مُدَرِّسٌ (Guru sekolah)",
    "optionB": "طَبِيبٌ (Thabiibun / Dokter)",
    "optionC": "فَلَّاحٌ (Petani sawah)",
    "optionD": "تَاجِرٌ (Pedagang toko)",
    "options": [
      {
        "id": "A",
        "text": "مُدَرِّسٌ (Guru sekolah)"
      },
      {
        "id": "B",
        "text": "طَبِيبٌ (Thabiibun / Dokter)"
      },
      {
        "id": "C",
        "text": "فَلَّاحٌ (Petani sawah)"
      },
      {
        "id": "D",
        "text": "تَاجِرٌ (Pedagang toko)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Yang bekerja di rumah sakit (mustasyfa) dan mengobati orang sakit (yu'alijul mardha) adalah dokter (thabiib).",
    "tip": "Pahami qawaid nahwu shorof (mubtada khabar, tarkib, fiil) dan mufrodat tematik madrasah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ba-019",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "bahasa_arab",
    "subject": "Bahasa Arab MTs",
    "subtopic": "Fi Syafaqil Bait (Bagian-Bagian Rumah)",
    "competency": "Mengidentifikasi ruangan di dalam rumah",
    "question": "Ruangan tempat memasak makanan di rumah disebut...",
    "optionA": "غُرْفَةُ النَّوْمِ (kamar tidur)",
    "optionB": "غُرْفَةُ الجُلُوسِ (ruang tamu)",
    "optionC": "المَطْبَخُ (al-mathbakh / dapur)",
    "optionD": "الحَمَّامُ (kamar mandi)",
    "options": [
      {
        "id": "A",
        "text": "غُرْفَةُ النَّوْمِ (kamar tidur)"
      },
      {
        "id": "B",
        "text": "غُرْفَةُ الجُلُوسِ (ruang tamu)"
      },
      {
        "id": "C",
        "text": "المَطْبَخُ (al-mathbakh / dapur)"
      },
      {
        "id": "D",
        "text": "الحَمَّامُ (kamar mandi)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Al-Mathbakh adalah dapur tempat memasak.",
    "tip": "Pahami qawaid nahwu shorof (mubtada khabar, tarkib, fiil) dan mufrodat tematik madrasah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "mts-ba-020",
    "educationLevel": "MTs",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "bahasa_arab",
    "subject": "Bahasa Arab MTs",
    "subtopic": "Ar-Riyadhah (Olahraga)",
    "competency": "Mengidentifikasi jenis cabang olahraga",
    "question": "Permainan \"Sepak bola\" dalam bahasa Arab diistilahkan dengan...",
    "optionA": "كُرَةُ السَّلَّةِ (bola basket)",
    "optionB": "كُرَةُ الطَّائِرَةِ (bola voli)",
    "optionC": "كُرَةُ الطَّاوِلَةِ (tenis meja)",
    "optionD": "كُرَةُ القَدَمِ (kuratulkadam)",
    "options": [
      {
        "id": "A",
        "text": "كُرَةُ السَّلَّةِ (bola basket)"
      },
      {
        "id": "B",
        "text": "كُرَةُ الطَّائِرَةِ (bola voli)"
      },
      {
        "id": "C",
        "text": "كُرَةُ الطَّاوِلَةِ (tenis meja)"
      },
      {
        "id": "D",
        "text": "كُرَةُ القَدَمِ (kuratulkadam)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kurah (bola) + al-qadam (kaki) = sepak bola.",
    "tip": "Pahami qawaid nahwu shorof (mubtada khabar, tarkib, fiil) dan mufrodat tematik madrasah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  }
];
