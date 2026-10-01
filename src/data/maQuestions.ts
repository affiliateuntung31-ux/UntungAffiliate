import { Question } from '../types';

export const maQuestions: Question[] = [
  {
    "id": "MA-MT-001",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MA",
    "subtopic": "Kalkulus: Turunan dan Integral Fungsi Aljabar",
    "competency": "Menentukan nilai ekstrim fungsi dan luas daerah di bawah kurva",
    "question": "Jika fungsi laba produksi madrasah dinyatakan dengan P(x) = -2x² + 20x - 20 (dalam puluhan ribu rupiah), maka tingkat produksi x yang menghasilkan laba maksimum adalah...",
    "optionA": "x = 5 unit",
    "optionB": "x = 10 unit",
    "optionC": "x = 3 unit",
    "optionD": "x = 9 unit",
    "options": [
      {
        "id": "A",
        "text": "x = 5 unit"
      },
      {
        "id": "B",
        "text": "x = 10 unit"
      },
      {
        "id": "C",
        "text": "x = 3 unit"
      },
      {
        "id": "D",
        "text": "x = 9 unit"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Laba maksimum tercapai saat turunan pertama P'(x) = 0. P'(x) = -4x + 20 = 0 -> 4x = 20 -> x = 5.",
    "tip": "Titik stasioner / maksimum: Turunkan fungsi dan samakan dengan nol (f'(x) = 0).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-MT-002",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MA",
    "subtopic": "Trigonometri dan Matriks",
    "competency": "Menyelesaikan persamaan trigonometri analitik dan invers matriks ordo 2x2",
    "question": "Diketahui matriks transformasi A = [[2, 1], [5, 3]]. Invers dari matriks A (A⁻¹) adalah...",
    "optionA": "[[3, -1], [-5, 2]]",
    "optionB": "[[-3, 1], [5, -2]]",
    "optionC": "[[2, 5], [1, 3]]",
    "optionD": "[[-2, -1], [-5, -3]]",
    "options": [
      {
        "id": "A",
        "text": "[[3, -1], [-5, 2]]"
      },
      {
        "id": "B",
        "text": "[[-3, 1], [5, -2]]"
      },
      {
        "id": "C",
        "text": "[[2, 5], [1, 3]]"
      },
      {
        "id": "D",
        "text": "[[-2, -1], [-5, -3]]"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Determinan det(A) = (2)(3) - (1)(5) = 6 - 5 = 1. Invers A⁻¹ = (1/det) x [[d, -b], [-c, a]] = [[3, -1], [-5, 2]].",
    "tip": "Invers matriks [[a, b], [c, d]] = 1/(ad - bc) x [[d, -b], [-c, a]].",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-MT-003",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MA",
    "subtopic": "Kalkulus: Turunan dan Integral Fungsi Aljabar",
    "competency": "Menentukan nilai ekstrim fungsi dan luas daerah di bawah kurva",
    "question": "Jika fungsi laba produksi madrasah dinyatakan dengan P(x) = -1x² + 14x - 20 (dalam puluhan ribu rupiah), maka tingkat produksi x yang menghasilkan laba maksimum adalah...",
    "optionA": "x = 7 unit",
    "optionB": "x = 14 unit",
    "optionC": "x = 5 unit",
    "optionD": "x = 11 unit",
    "options": [
      {
        "id": "A",
        "text": "x = 7 unit"
      },
      {
        "id": "B",
        "text": "x = 14 unit"
      },
      {
        "id": "C",
        "text": "x = 5 unit"
      },
      {
        "id": "D",
        "text": "x = 11 unit"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Laba maksimum tercapai saat turunan pertama P'(x) = 0. P'(x) = -2x + 14 = 0 -> 2x = 14 -> x = 7.",
    "tip": "Titik stasioner / maksimum: Turunkan fungsi dan samakan dengan nol (f'(x) = 0).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-MT-005",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MA",
    "subtopic": "Kalkulus: Turunan dan Integral Fungsi Aljabar",
    "competency": "Menentukan nilai ekstrim fungsi dan luas daerah di bawah kurva",
    "question": "Jika fungsi laba produksi madrasah dinyatakan dengan P(x) = -3x² + 24x - 20 (dalam puluhan ribu rupiah), maka tingkat produksi x yang menghasilkan laba maksimum adalah...",
    "optionA": "x = 4 unit",
    "optionB": "x = 8 unit",
    "optionC": "x = 2 unit",
    "optionD": "x = 8 unit",
    "options": [
      {
        "id": "A",
        "text": "x = 4 unit"
      },
      {
        "id": "B",
        "text": "x = 8 unit"
      },
      {
        "id": "C",
        "text": "x = 2 unit"
      },
      {
        "id": "D",
        "text": "x = 8 unit"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Laba maksimum tercapai saat turunan pertama P'(x) = 0. P'(x) = -6x + 24 = 0 -> 6x = 24 -> x = 4.",
    "tip": "Titik stasioner / maksimum: Turunkan fungsi dan samakan dengan nol (f'(x) = 0).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-MT-007",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MA",
    "subtopic": "Kalkulus: Turunan dan Integral Fungsi Aljabar",
    "competency": "Menentukan nilai ekstrim fungsi dan luas daerah di bawah kurva",
    "question": "Jika fungsi laba produksi madrasah dinyatakan dengan P(x) = -2x² + 24x - 20 (dalam puluhan ribu rupiah), maka tingkat produksi x yang menghasilkan laba maksimum adalah...",
    "optionA": "x = 6 unit",
    "optionB": "x = 12 unit",
    "optionC": "x = 4 unit",
    "optionD": "x = 10 unit",
    "options": [
      {
        "id": "A",
        "text": "x = 6 unit"
      },
      {
        "id": "B",
        "text": "x = 12 unit"
      },
      {
        "id": "C",
        "text": "x = 4 unit"
      },
      {
        "id": "D",
        "text": "x = 10 unit"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Laba maksimum tercapai saat turunan pertama P'(x) = 0. P'(x) = -4x + 24 = 0 -> 4x = 24 -> x = 6.",
    "tip": "Titik stasioner / maksimum: Turunkan fungsi dan samakan dengan nol (f'(x) = 0).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-MT-009",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MA",
    "subtopic": "Kalkulus: Turunan dan Integral Fungsi Aljabar",
    "competency": "Menentukan nilai ekstrim fungsi dan luas daerah di bawah kurva",
    "question": "Jika fungsi laba produksi madrasah dinyatakan dengan P(x) = -1x² + 16x - 20 (dalam puluhan ribu rupiah), maka tingkat produksi x yang menghasilkan laba maksimum adalah...",
    "optionA": "x = 8 unit",
    "optionB": "x = 16 unit",
    "optionC": "x = 6 unit",
    "optionD": "x = 12 unit",
    "options": [
      {
        "id": "A",
        "text": "x = 8 unit"
      },
      {
        "id": "B",
        "text": "x = 16 unit"
      },
      {
        "id": "C",
        "text": "x = 6 unit"
      },
      {
        "id": "D",
        "text": "x = 12 unit"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Laba maksimum tercapai saat turunan pertama P'(x) = 0. P'(x) = -2x + 16 = 0 -> 2x = 16 -> x = 8.",
    "tip": "Titik stasioner / maksimum: Turunkan fungsi dan samakan dengan nol (f'(x) = 0).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-MT-011",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MA",
    "subtopic": "Kalkulus: Turunan dan Integral Fungsi Aljabar",
    "competency": "Menentukan nilai ekstrim fungsi dan luas daerah di bawah kurva",
    "question": "Jika fungsi laba produksi madrasah dinyatakan dengan P(x) = -3x² + 30x - 20 (dalam puluhan ribu rupiah), maka tingkat produksi x yang menghasilkan laba maksimum adalah...",
    "optionA": "x = 5 unit",
    "optionB": "x = 10 unit",
    "optionC": "x = 3 unit",
    "optionD": "x = 9 unit",
    "options": [
      {
        "id": "A",
        "text": "x = 5 unit"
      },
      {
        "id": "B",
        "text": "x = 10 unit"
      },
      {
        "id": "C",
        "text": "x = 3 unit"
      },
      {
        "id": "D",
        "text": "x = 9 unit"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Laba maksimum tercapai saat turunan pertama P'(x) = 0. P'(x) = -6x + 30 = 0 -> 6x = 30 -> x = 5.",
    "tip": "Titik stasioner / maksimum: Turunkan fungsi dan samakan dengan nol (f'(x) = 0).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-MT-013",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MA",
    "subtopic": "Kalkulus: Turunan dan Integral Fungsi Aljabar",
    "competency": "Menentukan nilai ekstrim fungsi dan luas daerah di bawah kurva",
    "question": "Jika fungsi laba produksi madrasah dinyatakan dengan P(x) = -2x² + 28x - 20 (dalam puluhan ribu rupiah), maka tingkat produksi x yang menghasilkan laba maksimum adalah...",
    "optionA": "x = 7 unit",
    "optionB": "x = 14 unit",
    "optionC": "x = 5 unit",
    "optionD": "x = 11 unit",
    "options": [
      {
        "id": "A",
        "text": "x = 7 unit"
      },
      {
        "id": "B",
        "text": "x = 14 unit"
      },
      {
        "id": "C",
        "text": "x = 5 unit"
      },
      {
        "id": "D",
        "text": "x = 11 unit"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Laba maksimum tercapai saat turunan pertama P'(x) = 0. P'(x) = -4x + 28 = 0 -> 4x = 28 -> x = 7.",
    "tip": "Titik stasioner / maksimum: Turunkan fungsi dan samakan dengan nol (f'(x) = 0).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-MT-015",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MA",
    "subtopic": "Kalkulus: Turunan dan Integral Fungsi Aljabar",
    "competency": "Menentukan nilai ekstrim fungsi dan luas daerah di bawah kurva",
    "question": "Jika fungsi laba produksi madrasah dinyatakan dengan P(x) = -1x² + 8x - 20 (dalam puluhan ribu rupiah), maka tingkat produksi x yang menghasilkan laba maksimum adalah...",
    "optionA": "x = 4 unit",
    "optionB": "x = 8 unit",
    "optionC": "x = 2 unit",
    "optionD": "x = 8 unit",
    "options": [
      {
        "id": "A",
        "text": "x = 4 unit"
      },
      {
        "id": "B",
        "text": "x = 8 unit"
      },
      {
        "id": "C",
        "text": "x = 2 unit"
      },
      {
        "id": "D",
        "text": "x = 8 unit"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Laba maksimum tercapai saat turunan pertama P'(x) = 0. P'(x) = -2x + 8 = 0 -> 2x = 8 -> x = 4.",
    "tip": "Titik stasioner / maksimum: Turunkan fungsi dan samakan dengan nol (f'(x) = 0).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-MT-017",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MA",
    "subtopic": "Kalkulus: Turunan dan Integral Fungsi Aljabar",
    "competency": "Menentukan nilai ekstrim fungsi dan luas daerah di bawah kurva",
    "question": "Jika fungsi laba produksi madrasah dinyatakan dengan P(x) = -3x² + 36x - 20 (dalam puluhan ribu rupiah), maka tingkat produksi x yang menghasilkan laba maksimum adalah...",
    "optionA": "x = 6 unit",
    "optionB": "x = 12 unit",
    "optionC": "x = 4 unit",
    "optionD": "x = 10 unit",
    "options": [
      {
        "id": "A",
        "text": "x = 6 unit"
      },
      {
        "id": "B",
        "text": "x = 12 unit"
      },
      {
        "id": "C",
        "text": "x = 4 unit"
      },
      {
        "id": "D",
        "text": "x = 10 unit"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Laba maksimum tercapai saat turunan pertama P'(x) = 0. P'(x) = -6x + 36 = 0 -> 6x = 36 -> x = 6.",
    "tip": "Titik stasioner / maksimum: Turunkan fungsi dan samakan dengan nol (f'(x) = 0).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-MT-019",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MA",
    "subtopic": "Kalkulus: Turunan dan Integral Fungsi Aljabar",
    "competency": "Menentukan nilai ekstrim fungsi dan luas daerah di bawah kurva",
    "question": "Jika fungsi laba produksi madrasah dinyatakan dengan P(x) = -2x² + 32x - 20 (dalam puluhan ribu rupiah), maka tingkat produksi x yang menghasilkan laba maksimum adalah...",
    "optionA": "x = 8 unit",
    "optionB": "x = 16 unit",
    "optionC": "x = 6 unit",
    "optionD": "x = 12 unit",
    "options": [
      {
        "id": "A",
        "text": "x = 8 unit"
      },
      {
        "id": "B",
        "text": "x = 16 unit"
      },
      {
        "id": "C",
        "text": "x = 6 unit"
      },
      {
        "id": "D",
        "text": "x = 12 unit"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Laba maksimum tercapai saat turunan pertama P'(x) = 0. P'(x) = -4x + 32 = 0 -> 4x = 32 -> x = 8.",
    "tip": "Titik stasioner / maksimum: Turunkan fungsi dan samakan dengan nol (f'(x) = 0).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-MT-021",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MA",
    "subtopic": "Kalkulus: Turunan dan Integral Fungsi Aljabar",
    "competency": "Menentukan nilai ekstrim fungsi dan luas daerah di bawah kurva",
    "question": "Jika fungsi laba produksi madrasah dinyatakan dengan P(x) = -1x² + 10x - 20 (dalam puluhan ribu rupiah), maka tingkat produksi x yang menghasilkan laba maksimum adalah...",
    "optionA": "x = 5 unit",
    "optionB": "x = 10 unit",
    "optionC": "x = 3 unit",
    "optionD": "x = 9 unit",
    "options": [
      {
        "id": "A",
        "text": "x = 5 unit"
      },
      {
        "id": "B",
        "text": "x = 10 unit"
      },
      {
        "id": "C",
        "text": "x = 3 unit"
      },
      {
        "id": "D",
        "text": "x = 9 unit"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Laba maksimum tercapai saat turunan pertama P'(x) = 0. P'(x) = -2x + 10 = 0 -> 2x = 10 -> x = 5.",
    "tip": "Titik stasioner / maksimum: Turunkan fungsi dan samakan dengan nol (f'(x) = 0).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-MT-023",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MA",
    "subtopic": "Kalkulus: Turunan dan Integral Fungsi Aljabar",
    "competency": "Menentukan nilai ekstrim fungsi dan luas daerah di bawah kurva",
    "question": "Jika fungsi laba produksi madrasah dinyatakan dengan P(x) = -3x² + 42x - 20 (dalam puluhan ribu rupiah), maka tingkat produksi x yang menghasilkan laba maksimum adalah...",
    "optionA": "x = 7 unit",
    "optionB": "x = 14 unit",
    "optionC": "x = 5 unit",
    "optionD": "x = 11 unit",
    "options": [
      {
        "id": "A",
        "text": "x = 7 unit"
      },
      {
        "id": "B",
        "text": "x = 14 unit"
      },
      {
        "id": "C",
        "text": "x = 5 unit"
      },
      {
        "id": "D",
        "text": "x = 11 unit"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Laba maksimum tercapai saat turunan pertama P'(x) = 0. P'(x) = -6x + 42 = 0 -> 6x = 42 -> x = 7.",
    "tip": "Titik stasioner / maksimum: Turunkan fungsi dan samakan dengan nol (f'(x) = 0).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-MT-025",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MA",
    "subtopic": "Kalkulus: Turunan dan Integral Fungsi Aljabar",
    "competency": "Menentukan nilai ekstrim fungsi dan luas daerah di bawah kurva",
    "question": "Jika fungsi laba produksi madrasah dinyatakan dengan P(x) = -2x² + 16x - 20 (dalam puluhan ribu rupiah), maka tingkat produksi x yang menghasilkan laba maksimum adalah...",
    "optionA": "x = 4 unit",
    "optionB": "x = 8 unit",
    "optionC": "x = 2 unit",
    "optionD": "x = 8 unit",
    "options": [
      {
        "id": "A",
        "text": "x = 4 unit"
      },
      {
        "id": "B",
        "text": "x = 8 unit"
      },
      {
        "id": "C",
        "text": "x = 2 unit"
      },
      {
        "id": "D",
        "text": "x = 8 unit"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Laba maksimum tercapai saat turunan pertama P'(x) = 0. P'(x) = -4x + 16 = 0 -> 4x = 16 -> x = 4.",
    "tip": "Titik stasioner / maksimum: Turunkan fungsi dan samakan dengan nol (f'(x) = 0).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-MT-027",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MA",
    "subtopic": "Kalkulus: Turunan dan Integral Fungsi Aljabar",
    "competency": "Menentukan nilai ekstrim fungsi dan luas daerah di bawah kurva",
    "question": "Jika fungsi laba produksi madrasah dinyatakan dengan P(x) = -1x² + 12x - 20 (dalam puluhan ribu rupiah), maka tingkat produksi x yang menghasilkan laba maksimum adalah...",
    "optionA": "x = 6 unit",
    "optionB": "x = 12 unit",
    "optionC": "x = 4 unit",
    "optionD": "x = 10 unit",
    "options": [
      {
        "id": "A",
        "text": "x = 6 unit"
      },
      {
        "id": "B",
        "text": "x = 12 unit"
      },
      {
        "id": "C",
        "text": "x = 4 unit"
      },
      {
        "id": "D",
        "text": "x = 10 unit"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Laba maksimum tercapai saat turunan pertama P'(x) = 0. P'(x) = -2x + 12 = 0 -> 2x = 12 -> x = 6.",
    "tip": "Titik stasioner / maksimum: Turunkan fungsi dan samakan dengan nol (f'(x) = 0).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-MT-029",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "matematika",
    "subject": "Matematika MA",
    "subtopic": "Kalkulus: Turunan dan Integral Fungsi Aljabar",
    "competency": "Menentukan nilai ekstrim fungsi dan luas daerah di bawah kurva",
    "question": "Jika fungsi laba produksi madrasah dinyatakan dengan P(x) = -3x² + 48x - 20 (dalam puluhan ribu rupiah), maka tingkat produksi x yang menghasilkan laba maksimum adalah...",
    "optionA": "x = 8 unit",
    "optionB": "x = 16 unit",
    "optionC": "x = 6 unit",
    "optionD": "x = 12 unit",
    "options": [
      {
        "id": "A",
        "text": "x = 8 unit"
      },
      {
        "id": "B",
        "text": "x = 16 unit"
      },
      {
        "id": "C",
        "text": "x = 6 unit"
      },
      {
        "id": "D",
        "text": "x = 12 unit"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Laba maksimum tercapai saat turunan pertama P'(x) = 0. P'(x) = -6x + 48 = 0 -> 6x = 48 -> x = 8.",
    "tip": "Titik stasioner / maksimum: Turunkan fungsi dan samakan dengan nol (f'(x) = 0).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-FS-001",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "fisika",
    "subject": "Fisika MA",
    "subtopic": "Dinamika Rotasi dan Momen Inersia",
    "competency": "Menganalisis hukum kekekalan momentum sudut dan momen gaya (torsi)",
    "question": "Sebuah batang silinder homogen dengan panjang 2 meter dapat berputar bebas pada poros di salah satu ujungnya. Gaya sebesar 11 N diberikan tegak lurus pada ujung batang lainnya. Besar momen gaya (torsi) yang bekerja pada batang adalah...",
    "optionA": "22 N.m",
    "optionB": "44 N.m",
    "optionC": "11 N.m",
    "optionD": "37 N.m",
    "options": [
      {
        "id": "A",
        "text": "22 N.m"
      },
      {
        "id": "B",
        "text": "44 N.m"
      },
      {
        "id": "C",
        "text": "11 N.m"
      },
      {
        "id": "D",
        "text": "37 N.m"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Besar torsi τ = r . F . sin(90°) = 2 m x 11 N x 1 = 22 N.m.",
    "tip": "Torsi τ = r . F . sin(θ). Bila tegak lurus, sin(90°) = 1.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-FS-002",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "fisika",
    "subject": "Fisika MA",
    "subtopic": "Termodinamika dan Siklus Carnot",
    "competency": "Menghitung efisiensi mesin kalor Carnot dan perubahan entropi",
    "question": "Sebuah mesin kalor Carnot bekerja di antara reservoir suhu tinggi T_H = 700 K dan reservoir suhu rendah T_C = 400 K. Efisiensi termal maksimum dari mesin Carnot tersebut adalah...",
    "optionA": "43%",
    "optionB": "28%",
    "optionC": "55%",
    "optionD": "85%",
    "options": [
      {
        "id": "A",
        "text": "43%"
      },
      {
        "id": "B",
        "text": "28%"
      },
      {
        "id": "C",
        "text": "55%"
      },
      {
        "id": "D",
        "text": "85%"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Efisiensi mesin Carnot: η = (1 - T_C / T_H) x 100% = (1 - 400 / 700) x 100% ≈ 43%.",
    "tip": "Pastikan suhu selalu dalam skala Kelvin (K = °C + 273). η = (1 - Tc/Th) x 100%.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-FS-003",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "fisika",
    "subject": "Fisika MA",
    "subtopic": "Dinamika Rotasi dan Momen Inersia",
    "competency": "Menganalisis hukum kekekalan momentum sudut dan momen gaya (torsi)",
    "question": "Sebuah batang silinder homogen dengan panjang 2 meter dapat berputar bebas pada poros di salah satu ujungnya. Gaya sebesar 13 N diberikan tegak lurus pada ujung batang lainnya. Besar momen gaya (torsi) yang bekerja pada batang adalah...",
    "optionA": "26 N.m",
    "optionB": "52 N.m",
    "optionC": "13 N.m",
    "optionD": "41 N.m",
    "options": [
      {
        "id": "A",
        "text": "26 N.m"
      },
      {
        "id": "B",
        "text": "52 N.m"
      },
      {
        "id": "C",
        "text": "13 N.m"
      },
      {
        "id": "D",
        "text": "41 N.m"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Besar torsi τ = r . F . sin(90°) = 2 m x 13 N x 1 = 26 N.m.",
    "tip": "Torsi τ = r . F . sin(θ). Bila tegak lurus, sin(90°) = 1.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-FS-004",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "fisika",
    "subject": "Fisika MA",
    "subtopic": "Termodinamika dan Siklus Carnot",
    "competency": "Menghitung efisiensi mesin kalor Carnot dan perubahan entropi",
    "question": "Sebuah mesin kalor Carnot bekerja di antara reservoir suhu tinggi T_H = 800 K dan reservoir suhu rendah T_C = 350 K. Efisiensi termal maksimum dari mesin Carnot tersebut adalah...",
    "optionA": "56%",
    "optionB": "41%",
    "optionC": "68%",
    "optionD": "85%",
    "options": [
      {
        "id": "A",
        "text": "56%"
      },
      {
        "id": "B",
        "text": "41%"
      },
      {
        "id": "C",
        "text": "68%"
      },
      {
        "id": "D",
        "text": "85%"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Efisiensi mesin Carnot: η = (1 - T_C / T_H) x 100% = (1 - 350 / 800) x 100% ≈ 56%.",
    "tip": "Pastikan suhu selalu dalam skala Kelvin (K = °C + 273). η = (1 - Tc/Th) x 100%.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-FS-005",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "fisika",
    "subject": "Fisika MA",
    "subtopic": "Dinamika Rotasi dan Momen Inersia",
    "competency": "Menganalisis hukum kekekalan momentum sudut dan momen gaya (torsi)",
    "question": "Sebuah batang silinder homogen dengan panjang 2 meter dapat berputar bebas pada poros di salah satu ujungnya. Gaya sebesar 15 N diberikan tegak lurus pada ujung batang lainnya. Besar momen gaya (torsi) yang bekerja pada batang adalah...",
    "optionA": "30 N.m",
    "optionB": "60 N.m",
    "optionC": "15 N.m",
    "optionD": "45 N.m",
    "options": [
      {
        "id": "A",
        "text": "30 N.m"
      },
      {
        "id": "B",
        "text": "60 N.m"
      },
      {
        "id": "C",
        "text": "15 N.m"
      },
      {
        "id": "D",
        "text": "45 N.m"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Besar torsi τ = r . F . sin(90°) = 2 m x 15 N x 1 = 30 N.m.",
    "tip": "Torsi τ = r . F . sin(θ). Bila tegak lurus, sin(90°) = 1.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-FS-006",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "fisika",
    "subject": "Fisika MA",
    "subtopic": "Termodinamika dan Siklus Carnot",
    "competency": "Menghitung efisiensi mesin kalor Carnot dan perubahan entropi",
    "question": "Sebuah mesin kalor Carnot bekerja di antara reservoir suhu tinggi T_H = 650 K dan reservoir suhu rendah T_C = 300 K. Efisiensi termal maksimum dari mesin Carnot tersebut adalah...",
    "optionA": "54%",
    "optionB": "39%",
    "optionC": "66%",
    "optionD": "85%",
    "options": [
      {
        "id": "A",
        "text": "54%"
      },
      {
        "id": "B",
        "text": "39%"
      },
      {
        "id": "C",
        "text": "66%"
      },
      {
        "id": "D",
        "text": "85%"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Efisiensi mesin Carnot: η = (1 - T_C / T_H) x 100% = (1 - 300 / 650) x 100% ≈ 54%.",
    "tip": "Pastikan suhu selalu dalam skala Kelvin (K = °C + 273). η = (1 - Tc/Th) x 100%.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-FS-007",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "fisika",
    "subject": "Fisika MA",
    "subtopic": "Dinamika Rotasi dan Momen Inersia",
    "competency": "Menganalisis hukum kekekalan momentum sudut dan momen gaya (torsi)",
    "question": "Sebuah batang silinder homogen dengan panjang 2 meter dapat berputar bebas pada poros di salah satu ujungnya. Gaya sebesar 17 N diberikan tegak lurus pada ujung batang lainnya. Besar momen gaya (torsi) yang bekerja pada batang adalah...",
    "optionA": "34 N.m",
    "optionB": "68 N.m",
    "optionC": "17 N.m",
    "optionD": "49 N.m",
    "options": [
      {
        "id": "A",
        "text": "34 N.m"
      },
      {
        "id": "B",
        "text": "68 N.m"
      },
      {
        "id": "C",
        "text": "17 N.m"
      },
      {
        "id": "D",
        "text": "49 N.m"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Besar torsi τ = r . F . sin(90°) = 2 m x 17 N x 1 = 34 N.m.",
    "tip": "Torsi τ = r . F . sin(θ). Bila tegak lurus, sin(90°) = 1.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-FS-008",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "fisika",
    "subject": "Fisika MA",
    "subtopic": "Termodinamika dan Siklus Carnot",
    "competency": "Menghitung efisiensi mesin kalor Carnot dan perubahan entropi",
    "question": "Sebuah mesin kalor Carnot bekerja di antara reservoir suhu tinggi T_H = 750 K dan reservoir suhu rendah T_C = 400 K. Efisiensi termal maksimum dari mesin Carnot tersebut adalah...",
    "optionA": "47%",
    "optionB": "32%",
    "optionC": "59%",
    "optionD": "85%",
    "options": [
      {
        "id": "A",
        "text": "47%"
      },
      {
        "id": "B",
        "text": "32%"
      },
      {
        "id": "C",
        "text": "59%"
      },
      {
        "id": "D",
        "text": "85%"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Efisiensi mesin Carnot: η = (1 - T_C / T_H) x 100% = (1 - 400 / 750) x 100% ≈ 47%.",
    "tip": "Pastikan suhu selalu dalam skala Kelvin (K = °C + 273). η = (1 - Tc/Th) x 100%.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-FS-009",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "fisika",
    "subject": "Fisika MA",
    "subtopic": "Dinamika Rotasi dan Momen Inersia",
    "competency": "Menganalisis hukum kekekalan momentum sudut dan momen gaya (torsi)",
    "question": "Sebuah batang silinder homogen dengan panjang 2 meter dapat berputar bebas pada poros di salah satu ujungnya. Gaya sebesar 19 N diberikan tegak lurus pada ujung batang lainnya. Besar momen gaya (torsi) yang bekerja pada batang adalah...",
    "optionA": "38 N.m",
    "optionB": "76 N.m",
    "optionC": "19 N.m",
    "optionD": "53 N.m",
    "options": [
      {
        "id": "A",
        "text": "38 N.m"
      },
      {
        "id": "B",
        "text": "76 N.m"
      },
      {
        "id": "C",
        "text": "19 N.m"
      },
      {
        "id": "D",
        "text": "53 N.m"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Besar torsi τ = r . F . sin(90°) = 2 m x 19 N x 1 = 38 N.m.",
    "tip": "Torsi τ = r . F . sin(θ). Bila tegak lurus, sin(90°) = 1.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-FS-010",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "fisika",
    "subject": "Fisika MA",
    "subtopic": "Termodinamika dan Siklus Carnot",
    "competency": "Menghitung efisiensi mesin kalor Carnot dan perubahan entropi",
    "question": "Sebuah mesin kalor Carnot bekerja di antara reservoir suhu tinggi T_H = 600 K dan reservoir suhu rendah T_C = 350 K. Efisiensi termal maksimum dari mesin Carnot tersebut adalah...",
    "optionA": "42%",
    "optionB": "27%",
    "optionC": "54%",
    "optionD": "85%",
    "options": [
      {
        "id": "A",
        "text": "42%"
      },
      {
        "id": "B",
        "text": "27%"
      },
      {
        "id": "C",
        "text": "54%"
      },
      {
        "id": "D",
        "text": "85%"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Efisiensi mesin Carnot: η = (1 - T_C / T_H) x 100% = (1 - 350 / 600) x 100% ≈ 42%.",
    "tip": "Pastikan suhu selalu dalam skala Kelvin (K = °C + 273). η = (1 - Tc/Th) x 100%.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-FS-012",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "fisika",
    "subject": "Fisika MA",
    "subtopic": "Termodinamika dan Siklus Carnot",
    "competency": "Menghitung efisiensi mesin kalor Carnot dan perubahan entropi",
    "question": "Sebuah mesin kalor Carnot bekerja di antara reservoir suhu tinggi T_H = 700 K dan reservoir suhu rendah T_C = 300 K. Efisiensi termal maksimum dari mesin Carnot tersebut adalah...",
    "optionA": "57%",
    "optionB": "42%",
    "optionC": "69%",
    "optionD": "85%",
    "options": [
      {
        "id": "A",
        "text": "57%"
      },
      {
        "id": "B",
        "text": "42%"
      },
      {
        "id": "C",
        "text": "69%"
      },
      {
        "id": "D",
        "text": "85%"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Efisiensi mesin Carnot: η = (1 - T_C / T_H) x 100% = (1 - 300 / 700) x 100% ≈ 57%.",
    "tip": "Pastikan suhu selalu dalam skala Kelvin (K = °C + 273). η = (1 - Tc/Th) x 100%.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-FS-014",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "fisika",
    "subject": "Fisika MA",
    "subtopic": "Termodinamika dan Siklus Carnot",
    "competency": "Menghitung efisiensi mesin kalor Carnot dan perubahan entropi",
    "question": "Sebuah mesin kalor Carnot bekerja di antara reservoir suhu tinggi T_H = 800 K dan reservoir suhu rendah T_C = 400 K. Efisiensi termal maksimum dari mesin Carnot tersebut adalah...",
    "optionA": "50%",
    "optionB": "35%",
    "optionC": "62%",
    "optionD": "85%",
    "options": [
      {
        "id": "A",
        "text": "50%"
      },
      {
        "id": "B",
        "text": "35%"
      },
      {
        "id": "C",
        "text": "62%"
      },
      {
        "id": "D",
        "text": "85%"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Efisiensi mesin Carnot: η = (1 - T_C / T_H) x 100% = (1 - 400 / 800) x 100% ≈ 50%.",
    "tip": "Pastikan suhu selalu dalam skala Kelvin (K = °C + 273). η = (1 - Tc/Th) x 100%.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-FS-016",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "fisika",
    "subject": "Fisika MA",
    "subtopic": "Termodinamika dan Siklus Carnot",
    "competency": "Menghitung efisiensi mesin kalor Carnot dan perubahan entropi",
    "question": "Sebuah mesin kalor Carnot bekerja di antara reservoir suhu tinggi T_H = 650 K dan reservoir suhu rendah T_C = 350 K. Efisiensi termal maksimum dari mesin Carnot tersebut adalah...",
    "optionA": "46%",
    "optionB": "31%",
    "optionC": "58%",
    "optionD": "85%",
    "options": [
      {
        "id": "A",
        "text": "46%"
      },
      {
        "id": "B",
        "text": "31%"
      },
      {
        "id": "C",
        "text": "58%"
      },
      {
        "id": "D",
        "text": "85%"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Efisiensi mesin Carnot: η = (1 - T_C / T_H) x 100% = (1 - 350 / 650) x 100% ≈ 46%.",
    "tip": "Pastikan suhu selalu dalam skala Kelvin (K = °C + 273). η = (1 - Tc/Th) x 100%.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-FS-018",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "fisika",
    "subject": "Fisika MA",
    "subtopic": "Termodinamika dan Siklus Carnot",
    "competency": "Menghitung efisiensi mesin kalor Carnot dan perubahan entropi",
    "question": "Sebuah mesin kalor Carnot bekerja di antara reservoir suhu tinggi T_H = 750 K dan reservoir suhu rendah T_C = 300 K. Efisiensi termal maksimum dari mesin Carnot tersebut adalah...",
    "optionA": "60%",
    "optionB": "45%",
    "optionC": "72%",
    "optionD": "85%",
    "options": [
      {
        "id": "A",
        "text": "60%"
      },
      {
        "id": "B",
        "text": "45%"
      },
      {
        "id": "C",
        "text": "72%"
      },
      {
        "id": "D",
        "text": "85%"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Efisiensi mesin Carnot: η = (1 - T_C / T_H) x 100% = (1 - 300 / 750) x 100% ≈ 60%.",
    "tip": "Pastikan suhu selalu dalam skala Kelvin (K = °C + 273). η = (1 - Tc/Th) x 100%.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-FS-020",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "fisika",
    "subject": "Fisika MA",
    "subtopic": "Termodinamika dan Siklus Carnot",
    "competency": "Menghitung efisiensi mesin kalor Carnot dan perubahan entropi",
    "question": "Sebuah mesin kalor Carnot bekerja di antara reservoir suhu tinggi T_H = 600 K dan reservoir suhu rendah T_C = 400 K. Efisiensi termal maksimum dari mesin Carnot tersebut adalah...",
    "optionA": "33%",
    "optionB": "18%",
    "optionC": "45%",
    "optionD": "85%",
    "options": [
      {
        "id": "A",
        "text": "33%"
      },
      {
        "id": "B",
        "text": "18%"
      },
      {
        "id": "C",
        "text": "45%"
      },
      {
        "id": "D",
        "text": "85%"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Efisiensi mesin Carnot: η = (1 - T_C / T_H) x 100% = (1 - 400 / 600) x 100% ≈ 33%.",
    "tip": "Pastikan suhu selalu dalam skala Kelvin (K = °C + 273). η = (1 - Tc/Th) x 100%.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-FS-022",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "fisika",
    "subject": "Fisika MA",
    "subtopic": "Termodinamika dan Siklus Carnot",
    "competency": "Menghitung efisiensi mesin kalor Carnot dan perubahan entropi",
    "question": "Sebuah mesin kalor Carnot bekerja di antara reservoir suhu tinggi T_H = 700 K dan reservoir suhu rendah T_C = 350 K. Efisiensi termal maksimum dari mesin Carnot tersebut adalah...",
    "optionA": "50%",
    "optionB": "35%",
    "optionC": "62%",
    "optionD": "85%",
    "options": [
      {
        "id": "A",
        "text": "50%"
      },
      {
        "id": "B",
        "text": "35%"
      },
      {
        "id": "C",
        "text": "62%"
      },
      {
        "id": "D",
        "text": "85%"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Efisiensi mesin Carnot: η = (1 - T_C / T_H) x 100% = (1 - 350 / 700) x 100% ≈ 50%.",
    "tip": "Pastikan suhu selalu dalam skala Kelvin (K = °C + 273). η = (1 - Tc/Th) x 100%.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-FS-024",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "fisika",
    "subject": "Fisika MA",
    "subtopic": "Termodinamika dan Siklus Carnot",
    "competency": "Menghitung efisiensi mesin kalor Carnot dan perubahan entropi",
    "question": "Sebuah mesin kalor Carnot bekerja di antara reservoir suhu tinggi T_H = 800 K dan reservoir suhu rendah T_C = 300 K. Efisiensi termal maksimum dari mesin Carnot tersebut adalah...",
    "optionA": "63%",
    "optionB": "48%",
    "optionC": "75%",
    "optionD": "85%",
    "options": [
      {
        "id": "A",
        "text": "63%"
      },
      {
        "id": "B",
        "text": "48%"
      },
      {
        "id": "C",
        "text": "75%"
      },
      {
        "id": "D",
        "text": "85%"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Efisiensi mesin Carnot: η = (1 - T_C / T_H) x 100% = (1 - 300 / 800) x 100% ≈ 63%.",
    "tip": "Pastikan suhu selalu dalam skala Kelvin (K = °C + 273). η = (1 - Tc/Th) x 100%.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-FS-026",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "fisika",
    "subject": "Fisika MA",
    "subtopic": "Termodinamika dan Siklus Carnot",
    "competency": "Menghitung efisiensi mesin kalor Carnot dan perubahan entropi",
    "question": "Sebuah mesin kalor Carnot bekerja di antara reservoir suhu tinggi T_H = 650 K dan reservoir suhu rendah T_C = 400 K. Efisiensi termal maksimum dari mesin Carnot tersebut adalah...",
    "optionA": "38%",
    "optionB": "23%",
    "optionC": "50%",
    "optionD": "85%",
    "options": [
      {
        "id": "A",
        "text": "38%"
      },
      {
        "id": "B",
        "text": "23%"
      },
      {
        "id": "C",
        "text": "50%"
      },
      {
        "id": "D",
        "text": "85%"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Efisiensi mesin Carnot: η = (1 - T_C / T_H) x 100% = (1 - 400 / 650) x 100% ≈ 38%.",
    "tip": "Pastikan suhu selalu dalam skala Kelvin (K = °C + 273). η = (1 - Tc/Th) x 100%.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-FS-028",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "fisika",
    "subject": "Fisika MA",
    "subtopic": "Termodinamika dan Siklus Carnot",
    "competency": "Menghitung efisiensi mesin kalor Carnot dan perubahan entropi",
    "question": "Sebuah mesin kalor Carnot bekerja di antara reservoir suhu tinggi T_H = 750 K dan reservoir suhu rendah T_C = 350 K. Efisiensi termal maksimum dari mesin Carnot tersebut adalah...",
    "optionA": "53%",
    "optionB": "38%",
    "optionC": "65%",
    "optionD": "85%",
    "options": [
      {
        "id": "A",
        "text": "53%"
      },
      {
        "id": "B",
        "text": "38%"
      },
      {
        "id": "C",
        "text": "65%"
      },
      {
        "id": "D",
        "text": "85%"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Efisiensi mesin Carnot: η = (1 - T_C / T_H) x 100% = (1 - 350 / 750) x 100% ≈ 53%.",
    "tip": "Pastikan suhu selalu dalam skala Kelvin (K = °C + 273). η = (1 - Tc/Th) x 100%.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-FS-030",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "fisika",
    "subject": "Fisika MA",
    "subtopic": "Termodinamika dan Siklus Carnot",
    "competency": "Menghitung efisiensi mesin kalor Carnot dan perubahan entropi",
    "question": "Sebuah mesin kalor Carnot bekerja di antara reservoir suhu tinggi T_H = 600 K dan reservoir suhu rendah T_C = 300 K. Efisiensi termal maksimum dari mesin Carnot tersebut adalah...",
    "optionA": "50%",
    "optionB": "35%",
    "optionC": "62%",
    "optionD": "85%",
    "options": [
      {
        "id": "A",
        "text": "50%"
      },
      {
        "id": "B",
        "text": "35%"
      },
      {
        "id": "C",
        "text": "62%"
      },
      {
        "id": "D",
        "text": "85%"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Efisiensi mesin Carnot: η = (1 - T_C / T_H) x 100% = (1 - 300 / 600) x 100% ≈ 50%.",
    "tip": "Pastikan suhu selalu dalam skala Kelvin (K = °C + 273). η = (1 - Tc/Th) x 100%.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-KM-001",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "kimia",
    "subject": "Kimia MA",
    "subtopic": "Kesetimbangan Asam-Basa dan Larutan Penyangga (Buffer)",
    "competency": "Menghitung pH larutan penyangga asam/basa dan prinsip kerja dalam sistem biologis",
    "question": "Campuran antara 100 mL larutan CH3COOH 0,1 M (Ka = 10⁻⁵) dengan 50 mL larutan NaOH 0,1 M akan membentuk sistem larutan...",
    "optionA": "Penyangga (buffer) asam dengan pH = 5",
    "optionB": "Garam terhidrolisis total bersifat netral (pH = 7)",
    "optionC": "Basa kuat dengan pH = 12",
    "optionD": "Penyangga basa dengan pH = 9",
    "options": [
      {
        "id": "A",
        "text": "Penyangga (buffer) asam dengan pH = 5"
      },
      {
        "id": "B",
        "text": "Garam terhidrolisis total bersifat netral (pH = 7)"
      },
      {
        "id": "C",
        "text": "Basa kuat dengan pH = 12"
      },
      {
        "id": "D",
        "text": "Penyangga basa dengan pH = 9"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Mol CH3COOH = 10 mmol, mol NaOH = 5 mmol. Setelah bereaksi tersisa 5 mmol CH3COOH (asam lemah) dan terbentuk 5 mmol CH3COONa (basa konjugasi). Karena mol asam = mol konjugasi, [H+] = Ka x (mol asam/mol garam) = 10⁻⁵, sehingga pH = 5.",
    "tip": "Jika asam lemah bersisa dan basa kuat habis, terbentuk Larutan Penyangga Asam (Buffer).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-KM-002",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "kimia",
    "subject": "Kimia MA",
    "subtopic": "Elektrokimia: Sel Volta dan Deret Volta",
    "competency": "Menghitung potensial sel standar (E° sel) dan kespontanan reaksi redoks",
    "question": "Diketahui potensial reduksi standar: Zn²⁺ + 2e⁻ -> Zn (E° = -0,76 V) dan Cu²⁺ + 2e⁻ -> Cu (E° = +0,34 V). Besarnya potensial sel standar (E°sel) yang dihasilkan dari pasangan elektroda tersebut adalah...",
    "optionA": "+1,10 Volt (Reaksi berlangsung spontan)",
    "optionB": "-0,42 Volt (Reaksi tidak spontan)",
    "optionC": "+0,42 Volt",
    "optionD": "-1,10 Volt",
    "options": [
      {
        "id": "A",
        "text": "+1,10 Volt (Reaksi berlangsung spontan)"
      },
      {
        "id": "B",
        "text": "-0,42 Volt (Reaksi tidak spontan)"
      },
      {
        "id": "C",
        "text": "+0,42 Volt"
      },
      {
        "id": "D",
        "text": "-1,10 Volt"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Katoda (reduksi, E° lebih besar) = Cu, Anoda (oksidasi, E° lebih kecil) = Zn. E°sel = E°katoda - E°anoda = (+0,34 V) - (-0,76 V) = +1,10 V. Karena E°sel positif, reaksi berlangsung spontan.",
    "tip": "E°sel = E°katoda (besar) - E°anoda (kecil). E°sel positif = Reaksi spontan.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-BL-001",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "biologi",
    "subject": "Biologi MA",
    "subtopic": "Genetika: Sintesis Protein dan Dogma Sentral",
    "competency": "Menganalisis tahapan transkripsi mRNA dan translasi tRNA pada ribosom",
    "question": "Jika rantai DNA template (sense) memiliki urutan basa nitrogen: 3'- TAC - GGC - TTA - ATC - 5', maka urutan kodon pada mRNA hasil transkripsi adalah...",
    "optionA": "5'- AUG - CCG - AAU - UAG - 3'",
    "optionB": "5'- ATG - CCG - AAT - TAG - 3'",
    "optionC": "3'- AUG - CCG - AAU - UAG - 5'",
    "optionD": "5'- UAC - GGC - UUA - AUC - 3'",
    "options": [
      {
        "id": "A",
        "text": "5'- AUG - CCG - AAU - UAG - 3'"
      },
      {
        "id": "B",
        "text": "5'- ATG - CCG - AAT - TAG - 3'"
      },
      {
        "id": "C",
        "text": "3'- AUG - CCG - AAU - UAG - 5'"
      },
      {
        "id": "D",
        "text": "5'- UAC - GGC - UUA - AUC - 3'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Transkripsi mengubah rantai DNA sense 3'->5' menjadi mRNA 5'->3' dengan aturan komplementer: T->A, A->U (RNA mengganti Timin dengan Urasil), C->G, G->C.",
    "tip": "Pada sintesis protein RNA, adenin (A) berpasangan dengan urasil (U), sitosin (C) dengan guanin (G).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-BL-002",
    "educationLevel": "MA",
    "categoryId": "stem",
    "category": "stem",
    "akgtkCategory": "STEM",
    "subjectId": "biologi",
    "subject": "Biologi MA",
    "subtopic": "Metabolisme: Respirasi Aerob dan Glikolisis",
    "competency": "Menjelaskan tahapan glikolisis, dekarboksilasi oksidatif, siklus Krebs, dan fosforilasi oksidatif",
    "question": "Pada tahapan respirasi seluler aerob, pembentukan molekul ATP terbanyak berlangsung melalui mekanisme kemiosmosis pada tahap...",
    "optionA": "Sistem transpor elektron (fosforilasi oksidatif) di krista mitokondria",
    "optionB": "Glikolisis di dalam sitoplasma sel",
    "optionC": "Dekarboksilasi oksidatif asam piruvat",
    "optionD": "Siklus Krebs di matriks mitokondria",
    "options": [
      {
        "id": "A",
        "text": "Sistem transpor elektron (fosforilasi oksidatif) di krista mitokondria"
      },
      {
        "id": "B",
        "text": "Glikolisis di dalam sitoplasma sel"
      },
      {
        "id": "C",
        "text": "Dekarboksilasi oksidatif asam piruvat"
      },
      {
        "id": "D",
        "text": "Siklus Krebs di matriks mitokondria"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Dari 1 molekul glukosa, transpor elektron menghasilkan sekitar 30-34 ATP dari total 36-38 ATP respirasi seluler aerob dengan memanfaatkan gradien proton H+ dan enzim ATP sintase.",
    "tip": "Transpor elektron di krista mitokondria menghasilkan ATP terbanyak (sekitar 34 ATP).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-BI-001",
    "educationLevel": "MA",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_indonesia",
    "subject": "Bahasa Indonesia MA",
    "subtopic": "Teks Editorial dan Opini Kritis",
    "competency": "Menganalisis fakta, opini, dan sikap redaksi terhadap isu aktual kebangsaan/pendidikan",
    "question": "Dalam teks editorial surat kabar nasional mengenai digitalisasi madrasah 3T, kalimat yang tergolong sebagai opini redaksi yang mengandung rekomendasi solusi adalah...",
    "optionA": "Kementerian Agama dan pemerintah daerah semestinya mempercepat subsidi kuota satelit dan penataan jaringan listrik mandiri di madrasah pedalaman.",
    "optionB": "Data menunjukkan sebanyak 1.250 madrasah di wilayah 3T belum memiliki akses internet stabil.",
    "optionC": "Menteri Agama telah meresmikan program madrasah digital pada bulan Januari lalu.",
    "optionD": "Ujian madrasah berbasis komputer pertama kali diujikan pada tahun 2018.",
    "options": [
      {
        "id": "A",
        "text": "Kementerian Agama dan pemerintah daerah semestinya mempercepat subsidi kuota satelit dan penataan jaringan listrik mandiri di madrasah pedalaman."
      },
      {
        "id": "B",
        "text": "Data menunjukkan sebanyak 1.250 madrasah di wilayah 3T belum memiliki akses internet stabil."
      },
      {
        "id": "C",
        "text": "Menteri Agama telah meresmikan program madrasah digital pada bulan Januari lalu."
      },
      {
        "id": "D",
        "text": "Ujian madrasah berbasis komputer pertama kali diujikan pada tahun 2018."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kalimat A memuat kata modalitas saran/rekomendasi (\"semestinya mempercepat\") yang mencerminkan pandangan opini konstruktif redaksi, bukan sekadar data statistik faktual.",
    "tip": "Opini rekomendasi ditandai modalitas: sebaiknya, semestinya, hendaknya, perlu adanya.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-EN-001",
    "educationLevel": "MA",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "bahasa_inggris",
    "subject": "Bahasa Inggris MA",
    "subtopic": "Analytical Exposition and Conditional Clauses",
    "competency": "Identify thesis, arguments, reiteration, and conditional sentences type 2 & 3",
    "question": "Complete the conditional sentence type 3 reflecting an unfulfilled past situation:\n\"If the madrasah debating team ... (prepare) their arguments more thoroughly, they ... (win) the national championship last month.\"",
    "optionA": "had prepared - would have won",
    "optionB": "prepared - would win",
    "optionC": "has prepared - will win",
    "optionD": "had prepared - will have won",
    "options": [
      {
        "id": "A",
        "text": "had prepared - would have won"
      },
      {
        "id": "B",
        "text": "prepared - would win"
      },
      {
        "id": "C",
        "text": "has prepared - will win"
      },
      {
        "id": "D",
        "text": "had prepared - will have won"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Conditional Type 3 expresses hypothetical past conditions: If + Past Perfect (had + V3), result clause: would have + V3.",
    "tip": "Conditional Type 3: If + had + V3, would have + V3 (Past unreal situation).",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-EK-001",
    "educationLevel": "MA",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "ekonomi",
    "subject": "Ekonomi MA",
    "subtopic": "Kebijakan Moneter, Fiskal, dan Inflasi",
    "competency": "Menganalisis instrumen bank sentral (BI) dalam mengendalikan inflasi melalui operasi pasar terbuka",
    "question": "Untuk mengatasi laju inflasi yang melonjak melebihi target tahunan, Bank Indonesia menerapkan kebijakan moneter kontraktif (tight money policy) dengan instrumen...",
    "optionA": "Menaikkan suku bunga acuan (BI-Rate) dan menjual Surat Berharga Negara (SBN) kepada masyarakat",
    "optionB": "Menurunkan tingkat giro wajib minimum (GWM) perbankan komersial",
    "optionC": "Membeli obligasi pemerintah di pasar sekunder secara agresif",
    "optionD": "Mempermudah syarat pemberian kredit modal kerja bagi debitur umum",
    "options": [
      {
        "id": "A",
        "text": "Menaikkan suku bunga acuan (BI-Rate) dan menjual Surat Berharga Negara (SBN) kepada masyarakat"
      },
      {
        "id": "B",
        "text": "Menurunkan tingkat giro wajib minimum (GWM) perbankan komersial"
      },
      {
        "id": "C",
        "text": "Membeli obligasi pemerintah di pasar sekunder secara agresif"
      },
      {
        "id": "D",
        "text": "Mempermudah syarat pemberian kredit modal kerja bagi debitur umum"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kebijakan kontraktif bertujuan mengurangi jumlah uang beredar (JUB) dengan menaikkan suku bunga acuan (menarik simpanan) dan menjual SBN (menyerap likuiditas perbankan).",
    "tip": "Kendalikan inflasi = Kurangi uang beredar: Naikkan suku bunga, jual surat berharga, naikkan cadangan kas.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-GG-001",
    "educationLevel": "MA",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "geografi",
    "subject": "Geografi MA",
    "subtopic": "Penginderaan Jauh dan Sistem Informasi Geografis (SIG)",
    "competency": "Menganalisis unsur interpretasi citra satelit untuk tata guna lahan madrasah/wilayah",
    "question": "Pada citra satelit resolusi tinggi, suatu objek teridentifikasi memiliki bentuk persegi panjang teratur, ukuran seragam, rona cerah, dan berasosiasi dengan lapangan upacara serta tiang bendera. Objek tersebut dapat diinterpretasikan sebagai...",
    "optionA": "Gedung komplek madrasah / sekolah",
    "optionB": "Lahan perkebunan sawit rakyat",
    "optionC": "Kawasan permukiman kumuh bantaran sungai",
    "optionD": "Hutan lindung suaka margasatwa",
    "options": [
      {
        "id": "A",
        "text": "Gedung komplek madrasah / sekolah"
      },
      {
        "id": "B",
        "text": "Lahan perkebunan sawit rakyat"
      },
      {
        "id": "C",
        "text": "Kawasan permukiman kumuh bantaran sungai"
      },
      {
        "id": "D",
        "text": "Hutan lindung suaka margasatwa"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Unsur interpretasi citra: bentuk teratur, asosiasi tiang bendera dan lapangan olahraga/upacara merupakan kunci pengenal spesifik kompleks bangunan pendidikan (sekolah/madrasah).",
    "tip": "Asosiasi lapangan upacara + tiang bendera = Gedung sekolah / madrasah.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-SG-001",
    "educationLevel": "MA",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "sosiologi",
    "subject": "Sosiologi MA",
    "subtopic": "Struktur Sosial, Diferensiasi, dan Konflik",
    "competency": "Menganalisis proses integrasi sosial dan resolusi konflik berlandaskan mediasi",
    "question": "Ketika dua kelompok peserta didik madrasah berselisih paham mengenai penggunaan lapangan madrasah, kepala madrasah memanggil kedua pihak dan bertindak sebagai pihak ketiga yang memberikan saran serta solusi yang bersifat mengikat secara musyawarah mufakat. Bentuk akomodasi konflik tersebut adalah...",
    "optionA": "Mediasi dan rekonsiliasi berbasis kearifan madrasah",
    "optionB": "Koersi dengan paksaan fisik sepihak",
    "optionC": "Ajudikasi di pengadilan negeri pidana",
    "optionD": "Segregasi dengan memisahkan siswa selamanya",
    "options": [
      {
        "id": "A",
        "text": "Mediasi dan rekonsiliasi berbasis kearifan madrasah"
      },
      {
        "id": "B",
        "text": "Koersi dengan paksaan fisik sepihak"
      },
      {
        "id": "C",
        "text": "Ajudikasi di pengadilan negeri pidana"
      },
      {
        "id": "D",
        "text": "Segregasi dengan memisahkan siswa selamanya"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Mediasi adalah penyelesaian sengketa dengan bantuan pihak ketiga netral yang memfasilitasi dialog konstruktif demi tercapainya mufakat bersama.",
    "tip": "Pihak ketiga netral memfasilitasi mufakat = Mediasi.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-SJ-001",
    "educationLevel": "MA",
    "categoryId": "umum",
    "category": "umum",
    "akgtkCategory": "Umum",
    "subjectId": "sejarah",
    "subject": "Sejarah MA",
    "subtopic": "Pergerakan Nasional dan Peran Ulama/Santri",
    "competency": "Menganalisis kontribusi organisasi Islam (Sarekat Islam, Muhammadiyah, NU) dalam pergerakan kemerdekaan",
    "question": "Resolusi Jihad yang difatwakan oleh KH Hasyim Asy'ari pada tanggal 22 Oktober 1945 di Surabaya memiliki signifikansi historis yang sangat besar karena...",
    "optionA": "Mengobarkan semangat heroisme santri dan rakyat untuk mempertahankan kedaulatan RI yang berujung pada pertempuran 10 November di Surabaya",
    "optionB": "Mendorong pembentukan partai tunggal pada masa awal kemerdekaan",
    "optionC": "Menyetujui kembalinya tentara sekutu NICA berkuasa di Indonesia",
    "optionD": "Membatalkan proklamasi kemerdekaan 17 Agustus 1945",
    "options": [
      {
        "id": "A",
        "text": "Mengobarkan semangat heroisme santri dan rakyat untuk mempertahankan kedaulatan RI yang berujung pada pertempuran 10 November di Surabaya"
      },
      {
        "id": "B",
        "text": "Mendorong pembentukan partai tunggal pada masa awal kemerdekaan"
      },
      {
        "id": "C",
        "text": "Menyetujui kembalinya tentara sekutu NICA berkuasa di Indonesia"
      },
      {
        "id": "D",
        "text": "Membatalkan proklamasi kemerdekaan 17 Agustus 1945"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Resolusi Jihad menegaskan bahwa membela tanah air adalah fardhu 'ain, membangkitkan perlawanan semesta santri dan rakyat yang berpuncak pada peristiwa Hari Pahlawan 10 November.",
    "tip": "Resolusi Jihad 22 Oktober 1945 = Titik tolak Hari Santri Nasional dan pemantik pertempuran 10 November.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-QH-001",
    "educationLevel": "MA",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "quran_hadits",
    "subject": "Qur'an Hadits MA",
    "subtopic": "Ulumul Qur'an dan Tafsir Tematik MA",
    "competency": "Menganalisis kaidah asbabun nuzul, munasabah ayat, dan metodologi tafsir maudhu'i",
    "question": "Dalam kajian Ulumul Qur'an tingkat Madrasah Aliyah, keterkaitan atau korelasi makna yang harmonis antara satu ayat dengan ayat sebelumnya dalam satu surat dinamakan ilmu...",
    "optionA": "Munasabatul Qur'an",
    "optionB": "Asbabun Nuzul",
    "optionC": "Gharibul Qur'an",
    "optionD": "Nasikh wal Mansukh",
    "options": [
      {
        "id": "A",
        "text": "Munasabatul Qur'an"
      },
      {
        "id": "B",
        "text": "Asbabun Nuzul"
      },
      {
        "id": "C",
        "text": "Gharibul Qur'an"
      },
      {
        "id": "D",
        "text": "Nasikh wal Mansukh"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Ilmu Munasabah meneliti korelasi, keselarasan, dan keterkaitan logis antara ayat dengan ayat, atau surat dengan surat dalam Al-Qur'an.",
    "tip": "Munasabah = Keterkaitan / korelasi harmonis antarayat atau antarsurat.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-AA-001",
    "educationLevel": "MA",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "akidah_akhlak",
    "subject": "Akidah Akhlak MA",
    "subtopic": "Ilmu Kalam dan Tasawuf Akhlaki MA",
    "competency": "Menganalisis maqamat dalam tasawuf (taubat, wara', zuhud, sabar, tawakal, ridha)",
    "question": "Dalam tradisi tasawuf sunni (amali dan akhlaki), maqam penyerahan segala urusan hasil ikhtiar kepada kehendak Allah SWT setelah berusaha secara maksimal disebut...",
    "optionA": "Tawakal",
    "optionB": "Zuhud",
    "optionC": "Wara'",
    "optionD": "Mahabbah",
    "options": [
      {
        "id": "A",
        "text": "Tawakal"
      },
      {
        "id": "B",
        "text": "Zuhud"
      },
      {
        "id": "C",
        "text": "Wara'"
      },
      {
        "id": "D",
        "text": "Mahabbah"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tawakal adalah menyandarkan hati kepada Allah SWT dalam meraih manfaat dan menolak madharat setelah menjalankan ikhtiar sebab-akibat lahiriah secara optimal.",
    "tip": "Tawakal = Penyerahan hasil akhir kepada Allah setelah ikhtiar optimal.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-FK-001",
    "educationLevel": "MA",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "fikih",
    "subject": "Fikih MA",
    "subtopic": "Ushul Fikih dan Masail Fiqhiyyah MA",
    "competency": "Menerapkan kaidah Ushul Fikih (Ijma', Qiyas, Maslahah Mursalah, Sadduz Zari'ah)",
    "question": "Penetapan hukum larangan mengemudi kendaraan sambil memainkan gawai (smartphone) karena berpotensi besar menimbulkan kecelakaan fatal di jalan raya dianalogikan melalui kaidah ushul fikih...",
    "optionA": "Saddudz Dzari'ah (menutup celah terjadinya kemudaratan yang lebih besar)",
    "optionB": "Istishab (menetapkan hukum asal)",
    "optionC": "Urf Shahih (kebiasaan masyarakat)",
    "optionD": "Syar'u Man Qablana (syariat umat terdahulu)",
    "options": [
      {
        "id": "A",
        "text": "Saddudz Dzari'ah (menutup celah terjadinya kemudaratan yang lebih besar)"
      },
      {
        "id": "B",
        "text": "Istishab (menetapkan hukum asal)"
      },
      {
        "id": "C",
        "text": "Urf Shahih (kebiasaan masyarakat)"
      },
      {
        "id": "D",
        "text": "Syar'u Man Qablana (syariat umat terdahulu)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Saddudz Dzari'ah adalah metode penetapan hukum yang melarang suatu sarana/perbuatan mubah jika nyata-nyata membuka jalan kepada kebinasaan atau mafsadat.",
    "tip": "Saddudz Dzari'ah = Menutup pintu/jalan menuju kemudaratan.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-SK-001",
    "educationLevel": "MA",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "ski",
    "subject": "SKI MA",
    "subtopic": "SKI MA: Peradaban Islam Abbasiyah, Andalusia, dan Modern",
    "competency": "Menganalisis kemajuan Baitul Hikmah Baghdad dan universitas di Andalusia",
    "question": "Lembaga keilmuan Baitul Hikmah yang didirikan oleh Khalifah Harun Ar-Rasyid dan disempurnakan oleh Khalifah Al-Ma'mun di Baghdad menjadi pusat pencerahan dunia karena...",
    "optionA": "Gerakan penerjemahan massal karya sains, filsafat, dan kedokteran dunia kuno yang dipadukan dengan riset empiris ilmuwan muslim",
    "optionB": "Penghancuran seluruh perpustakaan peninggalan Yunani dan Persia",
    "optionC": "Pemusatan riset hanya pada bidang kesastraan fiksi belaka",
    "optionD": "Larangan bagi sarjana non-muslim untuk memasuki lembaga tersebut",
    "options": [
      {
        "id": "A",
        "text": "Gerakan penerjemahan massal karya sains, filsafat, dan kedokteran dunia kuno yang dipadukan dengan riset empiris ilmuwan muslim"
      },
      {
        "id": "B",
        "text": "Penghancuran seluruh perpustakaan peninggalan Yunani dan Persia"
      },
      {
        "id": "C",
        "text": "Pemusatan riset hanya pada bidang kesastraan fiksi belaka"
      },
      {
        "id": "D",
        "text": "Larangan bagi sarjana non-muslim untuk memasuki lembaga tersebut"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Baitul Hikmah menggabungkan perpustakaan, akademi, dan biro penerjemahan yang melahirkan integrasi keilmuan universal seperti Al-Khawarizmi, Ibnu Sina, dan Al-Kindi.",
    "tip": "Baitul Hikmah Baghdad = Puncak gerakan literasi ilmiah dan peradaban emas Islam.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  },
  {
    "id": "MA-BA-001",
    "educationLevel": "MA",
    "categoryId": "rumpun_pai",
    "category": "rumpun_pai",
    "akgtkCategory": "Rumpun PAI",
    "subjectId": "bahasa_arab",
    "subject": "Bahasa Arab MA",
    "subtopic": "Bahasa Arab MA: Balaghah (Bayan, Ma'ani, Badi') dan Teks Sastra",
    "competency": "Menganalisis gaya bahasa majaz, tasybih, kinayah, dan isti'arah dalam teks Arab",
    "question": "Dalam ilmu Balaghah, ungkapan Arab \"رَأَيْتُ أَسَدًا يَخْطُبُ عَلَى المِنْبَرِ\" (Aku melihat singa berkhotbah di atas mimbar) mengandung gaya bahasa...",
    "optionA": "Isti'arah Tashrihiyyah (menyerupakan orator pemberani dengan singa dengan membuang musta'ar lah)",
    "optionB": "Tasybih Mujmal",
    "optionC": "Kinayah 'an Shifah",
    "optionD": "Jinas Taam",
    "options": [
      {
        "id": "A",
        "text": "Isti'arah Tashrihiyyah (menyerupakan orator pemberani dengan singa dengan membuang musta'ar lah)"
      },
      {
        "id": "B",
        "text": "Tasybih Mujmal"
      },
      {
        "id": "C",
        "text": "Kinayah 'an Shifah"
      },
      {
        "id": "D",
        "text": "Jinas Taam"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Isti'arah tashrihiyyah adalah majas perbandingan yang secara tegas menyebutkan lafadz musyabbah bih (singa) dan membuang musyabbah (khathib pemberani) dengan qarinah \"berkhotbah di mimbar\".",
    "tip": "Isti'arah Tashrihiyyah = Menyebutkan lafadz pinjaman (musyabbah bih) secara langsung.",
    "difficulty": "mudah",
    "status": "ACTIVE",
    "source": "Kisi-Kisi Resmi AKGTK Kemenag RI 2026"
  }
];
