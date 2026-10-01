// Canonical AKGTK Categories and Subject Engine
// Standardized IDs and Display Names across all 8 AKGTK domains

export interface CanonicalSubject {
  id: string;
  displayName: string;
  aliases: string[];
  targetQuestions: number;
}

export interface CanonicalCategory {
  id: string;
  displayName: string;
  description: string;
  aliases: string[];
  subjects: CanonicalSubject[];
  targetTotal: number;
}

export const CANONICAL_CATEGORIES: CanonicalCategory[] = [
  {
    id: 'guru_kelas',
    displayName: 'Guru Kelas',
    description: 'Kompetensi pedagogik & profesional guru kelas madrasah: Pedagogik, Literasi, Numerasi, dan Sains.',
    aliases: ['guru_kelas', 'guru kelas', 'gurukelas', 'guru-kelas', 'gk', 'campuran'],
    targetTotal: 600,
    subjects: [
      { id: 'pedagogik', displayName: 'Pedagogik', aliases: ['pedagogik', 'kompetensi pedagogik'], targetQuestions: 150 },
      { id: 'literasi', displayName: 'Literasi', aliases: ['literasi', 'membaca', 'literasi membaca'], targetQuestions: 150 },
      { id: 'numerasi', displayName: 'Numerasi', aliases: ['numerasi', 'matematika dasar', 'numerasi data'], targetQuestions: 150 },
      { id: 'sains', displayName: 'Sains', aliases: ['sains', 'eksperimen', 'ipa', 'sains & eksperimen'], targetQuestions: 150 }
    ]
  },
  {
    id: 'rumpun_pai',
    displayName: 'Rumpun PAI',
    description: 'Kompetensi keilmuan rumpun Pendidikan Agama Islam madrasah.',
    aliases: ['rumpun_pai', 'rumpun pai', 'rumpunpai', 'pai', 'pendidikan agama islam'],
    targetTotal: 750,
    subjects: [
      { id: 'quran_hadits', displayName: "Qur'an Hadits", aliases: ["qur'an hadits", 'quran hadits', 'al-quran hadits', 'quran_hadits'], targetQuestions: 150 },
      { id: 'akidah_akhlak', displayName: 'Akidah Akhlak', aliases: ['akidah akhlak', 'aqidah akhlak', 'akidah_akhlak'], targetQuestions: 150 },
      { id: 'fikih', displayName: 'Fikih', aliases: ['fikih', 'fiqih'], targetQuestions: 150 },
      { id: 'ski', displayName: 'SKI', aliases: ['ski', 'sejarah kebudayaan islam'], targetQuestions: 150 },
      { id: 'bahasa_arab', displayName: 'Bahasa Arab', aliases: ['bahasa arab', 'bahasa_arab', 'b. arab'], targetQuestions: 150 }
    ]
  },
  {
    id: 'stem',
    displayName: 'STEM',
    description: 'Sains, Teknologi, Rekayasa, dan Matematika tingkat madrasah.',
    aliases: ['stem', 'sains teknologi matematika'],
    targetTotal: 750,
    subjects: [
      { id: 'matematika', displayName: 'Matematika', aliases: ['matematika', 'matematika murni', 'math'], targetQuestions: 150 },
      { id: 'ipa', displayName: 'IPA', aliases: ['ipa', 'ilmu pengetahuan alam'], targetQuestions: 150 },
      { id: 'fisika', displayName: 'Fisika', aliases: ['fisika', 'physics'], targetQuestions: 150 },
      { id: 'kimia', displayName: 'Kimia', aliases: ['kimia', 'chemistry'], targetQuestions: 150 },
      { id: 'biologi', displayName: 'Biologi', aliases: ['biologi', 'biology'], targetQuestions: 150 }
    ]
  },
  {
    id: 'umum',
    displayName: 'Umum',
    description: 'Mata pelajaran umum madrasah: Bahasa, Sosial, Sains Terapan, dan Humaniora.',
    aliases: ['umum', 'mapel umum', 'mata pelajaran umum'],
    targetTotal: 1050,
    subjects: [
      { id: 'bahasa_indonesia', displayName: 'Bahasa Indonesia', aliases: ['bahasa indonesia', 'b. indonesia', 'bahasa_indonesia', 'bhs indonesia'], targetQuestions: 150 },
      { id: 'bahasa_inggris', displayName: 'Bahasa Inggris', aliases: ['bahasa inggris', 'b. inggris', 'bahasa_inggris', 'bhs inggris', 'english'], targetQuestions: 150 },
      { id: 'ips', displayName: 'IPS', aliases: ['ips', 'ilmu pengetahuan sosial'], targetQuestions: 150 },
      { id: 'ekonomi', displayName: 'Ekonomi', aliases: ['ekonomi', 'economics'], targetQuestions: 150 },
      { id: 'geografi', displayName: 'Geografi', aliases: ['geografi', 'geography'], targetQuestions: 150 },
      { id: 'sosiologi', displayName: 'Sosiologi', aliases: ['sosiologi', 'sociology'], targetQuestions: 150 },
      { id: 'sejarah', displayName: 'Sejarah', aliases: ['sejarah', 'history'], targetQuestions: 150 }
    ]
  },
  {
    id: 'kepala_madrasah',
    displayName: 'Kepala Madrasah',
    description: 'Kompetensi kepemimpinan dan pengelolaan kelembagaan madrasah.',
    aliases: ['kepala_madrasah', 'kepala madrasah', 'kamad', 'kepala'],
    targetTotal: 450,
    subjects: [
      { id: 'manajerial', displayName: 'Manajerial', aliases: ['manajerial', 'kompetensi manajerial'], targetQuestions: 150 },
      { id: 'supervisi', displayName: 'Supervisi', aliases: ['supervisi', 'supervisi guru'], targetQuestions: 150 },
      { id: 'kewirausahaan', displayName: 'Kewirausahaan', aliases: ['kewirausahaan', 'kewirausahaan madrasah', 'entrepreneurship'], targetQuestions: 150 }
    ]
  },
  {
    id: 'pengawas',
    displayName: 'Pengawas',
    description: 'Kompetensi pengawasan akademik dan manajerial pada satuan madrasah binaan.',
    aliases: ['pengawas', 'pengawas madrasah', 'pengawas_madrasah'],
    targetTotal: 600,
    subjects: [
      { id: 'supervisi_akademik', displayName: 'Supervisi Akademik', aliases: ['supervisi akademik', 'supervisi_akademik'], targetQuestions: 150 },
      { id: 'supervisi_manajerial', displayName: 'Supervisi Manajerial', aliases: ['supervisi manajerial', 'supervisi_manajerial'], targetQuestions: 150 },
      { id: 'evaluasi_pendidikan', displayName: 'Evaluasi Pendidikan', aliases: ['evaluasi pendidikan', 'evaluasi_pendidikan'], targetQuestions: 150 },
      { id: 'penelitian_dan_pengembangan', displayName: 'Penelitian dan Pengembangan', aliases: ['penelitian dan pengembangan', 'penelitian_dan_pengembangan', 'litbang', 'r&d'], targetQuestions: 150 }
    ]
  },
  {
    id: 'laboran',
    displayName: 'Laboran',
    description: 'Kompetensi profesional pengelolaan laboratorium madrasah.',
    aliases: ['laboran', 'laboratorium', 'pranata laboratorium'],
    targetTotal: 150,
    subjects: [
      { id: 'profesional', displayName: 'Profesional Laboran', aliases: ['profesional', 'profesional laboran', 'laboran', 'kompetensi profesional laboran'], targetQuestions: 150 }
    ]
  },
  {
    id: 'pustakawan',
    displayName: 'Pustakawan',
    description: 'Kompetensi profesional pengelolaan perpustakaan madrasah.',
    aliases: ['pustakawan', 'perpustakaan', 'tenaga perpustakaan'],
    targetTotal: 150,
    subjects: [
      { id: 'profesional', displayName: 'Profesional Pustakawan', aliases: ['profesional', 'profesional pustakawan', 'pustakawan', 'kompetensi profesional pustakawan'], targetQuestions: 150 }
    ]
  }
];

export const GRAND_TARGET_TOTAL = 6600;

/**
 * Normalizes any category string (display name, slug, alias) to canonical category object
 */
export function normalizeCategory(input?: string | null): CanonicalCategory | undefined {
  if (!input) return undefined;
  const cleaned = input.trim().toLowerCase().replace(/[-_]/g, ' ');
  return CANONICAL_CATEGORIES.find(c => 
    c.id.toLowerCase() === input.trim().toLowerCase() ||
    c.displayName.toLowerCase() === cleaned ||
    c.aliases.some(a => a.toLowerCase() === cleaned || a.toLowerCase() === input.trim().toLowerCase())
  );
}

/**
 * Normalizes a subject within a category
 */
export function normalizeSubject(categoryInput: string, subjectInput?: string | null): CanonicalSubject | undefined {
  const cat = normalizeCategory(categoryInput);
  if (!cat || !subjectInput) return undefined;
  const cleaned = subjectInput.trim().toLowerCase().replace(/[-_]/g, ' ');
  return cat.subjects.find(s =>
    s.id.toLowerCase() === subjectInput.trim().toLowerCase() ||
    s.displayName.toLowerCase() === cleaned ||
    s.aliases.some(a => a.toLowerCase() === cleaned || a.toLowerCase() === subjectInput.trim().toLowerCase())
  );
}

/**
 * Finds a subject across all canonical categories if category is not explicitly known
 */
export function findSubjectAcrossCategories(subjectInput?: string | null): { category: CanonicalCategory; subject: CanonicalSubject } | undefined {
  if (!subjectInput) return undefined;
  const cleaned = subjectInput.trim().toLowerCase().replace(/[-_]/g, ' ');
  for (const cat of CANONICAL_CATEGORIES) {
    const foundSubj = cat.subjects.find(s =>
      s.id.toLowerCase() === subjectInput.trim().toLowerCase() ||
      s.displayName.toLowerCase() === cleaned ||
      s.aliases.some(a => a.toLowerCase() === cleaned || a.toLowerCase() === subjectInput.trim().toLowerCase())
    );
    if (foundSubj) {
      return { category: cat, subject: foundSubj };
    }
  }
  return undefined;
}

export type CategoryAccessStatus = 'AVAILABLE' | 'EMPTY' | 'LOCKED';

/**
 * Conceptually verifies user category permission.
 * If user.accessType === 'ALL', user has permission to ALL 8 AKGTK categories.
 * If user.accessType === 'CUSTOM' / 'SPECIFIC', checks user.allowedCategories explicitly.
 */
export function hasCategoryAccess(
  user: {
    role?: string;
    accessType?: 'ALL' | 'CUSTOM' | string;
    allowedCategories?: string[];
    accessPermissions?: { accessType?: string; allowedCategories?: string[] };
  } | null | undefined,
  categoryIdOrName: string
): boolean {
  if (!user) return false;
  if (user.role === 'SUPER_ADMIN' || user.role === 'ADMIN') return true;

  const accessType = user.accessType || user.accessPermissions?.accessType || 'ALL';
  if (accessType === 'ALL') {
    // Conceptually granted to all valid AKGTK categories
    return true;
  }

  const targetCat = normalizeCategory(categoryIdOrName);
  if (!targetCat) return false;

  const allowedList = user.allowedCategories || user.accessPermissions?.allowedCategories || [];
  return allowedList.some(item => {
    const itemNorm = normalizeCategory(item);
    return itemNorm && itemNorm.id === targetCat.id;
  });
}

/**
 * Determines exact tri-state for UI and validation:
 * LOCKED = user does not have permission
 * AVAILABLE = user has permission and usable questions exist
 * EMPTY = user has permission but question bank has no usable questions
 */
export function evaluateCategoryState(
  user: any,
  categoryIdOrName: string,
  questionCount: number
): {
  status: CategoryAccessStatus;
  hasAccess: boolean;
  questionCount: number;
  message: string;
} {
  const cat = normalizeCategory(categoryIdOrName);
  if (!cat) {
    return { status: 'EMPTY', hasAccess: false, questionCount: 0, message: 'Kategori tidak ditemukan.' };
  }

  const hasAccess = hasCategoryAccess(user, cat.id);
  if (!hasAccess) {
    return {
      status: 'LOCKED',
      hasAccess: false,
      questionCount,
      message: `Akses ditolak: Paket Anda belum mencakup kategori ${cat.displayName}.`
    };
  }

  if (questionCount === 0) {
    return {
      status: 'EMPTY',
      hasAccess: true,
      questionCount: 0,
      message: `Bank soal ${cat.displayName} belum tersedia.`
    };
  }

  return {
    status: 'AVAILABLE',
    hasAccess: true,
    questionCount,
    message: `${questionCount} butir soal aktif tersedia.`
  };
}

// ============================================================================
// EDUCATION LEVEL PERMISSION ENGINE (MI, MTs, MA)
// ============================================================================

export type EducationLevel = 'MI' | 'MTs' | 'MA';
export type LevelAccessMode = 'NONE' | 'SELECTED' | 'ALL';

export interface EducationAccessConfig {
  mode: LevelAccessMode;
  allowedCategories?: string[];
  allowedSubjects?: string[];
}

export type EducationAccessMap = Record<EducationLevel, EducationAccessConfig>;

export interface EducationLevelStructure {
  id: EducationLevel;
  displayName: string;
  isAvailable: boolean; // MI is available (900 questions), MTs & MA are prepared but pending content
  categories: {
    id: string;
    displayName: string;
    subjects: { id: string; displayName: string }[];
  }[];
}

export const EDUCATION_LEVELS_CONFIG: Record<EducationLevel, EducationLevelStructure> = {
  MI: {
    id: 'MI',
    displayName: 'Madrasah Ibtidaiyah (MI)',
    isAvailable: true,
    categories: [
      {
        id: 'guru_kelas',
        displayName: 'GURU KELAS',
        subjects: [
          { id: 'pedagogik', displayName: 'Pedagogik' },
          { id: 'literasi', displayName: 'Literasi' },
          { id: 'numerasi', displayName: 'Numerasi' },
          { id: 'sains', displayName: 'Sains' }
        ]
      },
      {
        id: 'rumpun_pai',
        displayName: 'RUMPUN PAI',
        subjects: [
          { id: 'quran_hadits', displayName: "Qur'an Hadits" },
          { id: 'akidah_akhlak', displayName: 'Akidah Akhlak' },
          { id: 'fikih', displayName: 'Fikih' },
          { id: 'ski', displayName: 'SKI' },
          { id: 'bahasa_arab', displayName: 'Bahasa Arab' }
        ]
      },
      {
        id: 'umum',
        displayName: 'MATA PELAJARAN UMUM & BAHASA MI',
        subjects: [
          { id: 'bahasa_indonesia', displayName: 'Bahasa Indonesia' },
          { id: 'bahasa_inggris', displayName: 'Bahasa Inggris' }
        ]
      }
    ]
  },
  MTs: {
    id: 'MTs',
    displayName: 'Madrasah Tsanawiyah (MTs)',
    isAvailable: true,
    categories: [
      {
        id: 'rumpun_pai',
        displayName: 'RUMPUN PAI MTs',
        subjects: [
          { id: 'quran_hadits', displayName: "Qur'an Hadits" },
          { id: 'akidah_akhlak', displayName: 'Akidah Akhlak' },
          { id: 'fikih', displayName: 'Fikih' },
          { id: 'ski', displayName: 'SKI' },
          { id: 'bahasa_arab', displayName: 'Bahasa Arab' }
        ]
      },
      {
        id: 'stem',
        displayName: 'STEM MTs',
        subjects: [
          { id: 'matematika', displayName: 'Matematika' },
          { id: 'ipa', displayName: 'IPA' }
        ]
      },
      {
        id: 'umum',
        displayName: 'MATA PELAJARAN UMUM MTs',
        subjects: [
          { id: 'bahasa_indonesia', displayName: 'Bahasa Indonesia' },
          { id: 'bahasa_inggris', displayName: 'Bahasa Inggris' },
          { id: 'ips', displayName: 'IPS' }
        ]
      }
    ]
  },
  MA: {
    id: 'MA',
    displayName: 'Madrasah Aliyah (MA)',
    isAvailable: true,
    categories: [
      {
        id: 'rumpun_pai',
        displayName: 'RUMPUN PAI MA',
        subjects: [
          { id: 'quran_hadits', displayName: "Qur'an Hadits" },
          { id: 'akidah_akhlak', displayName: 'Akidah Akhlak' },
          { id: 'fikih', displayName: 'Fikih' },
          { id: 'ski', displayName: 'SKI' },
          { id: 'bahasa_arab', displayName: 'Bahasa Arab' }
        ]
      },
      {
        id: 'stem',
        displayName: 'STEM / MIPA MA',
        subjects: [
          { id: 'matematika', displayName: 'Matematika' },
          { id: 'fisika', displayName: 'Fisika' },
          { id: 'kimia', displayName: 'Kimia' },
          { id: 'biologi', displayName: 'Biologi' }
        ]
      },
      {
        id: 'umum',
        displayName: 'MATA PELAJARAN UMUM & IPS MA',
        subjects: [
          { id: 'bahasa_indonesia', displayName: 'Bahasa Indonesia' },
          { id: 'bahasa_inggris', displayName: 'Bahasa Inggris' },
          { id: 'ekonomi', displayName: 'Ekonomi' },
          { id: 'geografi', displayName: 'Geografi' },
          { id: 'sosiologi', displayName: 'Sosiologi' },
          { id: 'sejarah', displayName: 'Sejarah' }
        ]
      }
    ]
  }
};

/**
 * Standardized permission verification function:
 * canAccess(user, educationLevel, categoryId, subjectId)
 * Returns true or false before any questions or sessions are loaded.
 */
export function canAccess(
  user: {
    role?: string;
    status?: string;
    isGuest?: boolean;
    educationLevels?: EducationLevel[];
    accessMode?: 'NONE' | 'SELECTED' | 'ALL';
    educationAccess?: Record<string, { mode?: string; allowedSubjects?: string[]; allowedCategories?: string[] }>;
    accessType?: 'ALL' | 'CUSTOM' | string;
    allowedCategories?: string[];
    allowedSubjects?: string[];
    accessPermissions?: any;
  } | null | undefined,
  educationLevel: string | undefined | null,
  categoryId?: string | null,
  subjectId?: string | null
): boolean {
  if (!user) return false;
  // Super Admin and Admin have full access
  if (user.role === 'SUPER_ADMIN' || user.role === 'ADMIN') return true;

  // Guests, blocked or expired users cannot access premium question content
  if (user.isGuest || user.status === 'BLOCKED' || user.status === 'EXPIRED') return false;

  // Resolve target education level (normalize to MI, MTs, or MA; defaults to MI)
  const rawLevel = (educationLevel || 'MI').trim().toUpperCase();
  const targetLevel: EducationLevel = rawLevel === 'MTS' ? 'MTs' : (rawLevel === 'MA' ? 'MA' : 'MI');

  // Overall access mode NONE
  const userOverallMode = user.accessMode || user.accessPermissions?.accessMode;
  if (userOverallMode === 'NONE') {
    return false;
  }

  // Check explicit educationAccess map
  const eduMap = user.educationAccess || user.accessPermissions?.educationAccess;
  if (eduMap && eduMap[targetLevel]) {
    const levelConf = eduMap[targetLevel];
    if (levelConf.mode === 'NONE') return false;
    if (levelConf.mode === 'ALL') return true; // True wildcard for this education level!

    // Mode is SELECTED
    // If neither categoryId nor subjectId requested, check if level is accessible
    if (!categoryId && !subjectId) return true;

    const allowedSubjs = (levelConf.allowedSubjects || []).map((s: string) => s.toLowerCase().trim());
    const allowedCats = (levelConf.allowedCategories || []).map((c: string) => c.toLowerCase().trim().replace(/[-_]/g, ' '));

    const normSubj = subjectId ? subjectId.toLowerCase().trim() : undefined;
    const cleanSubj = normSubj ? normSubj.replace(/[-_]/g, ' ') : undefined;
    const normCat = categoryId ? categoryId.toLowerCase().trim() : undefined;
    const cleanCat = normCat ? normCat.replace(/[-_]/g, ' ') : undefined;

    // IF A SPECIFIC SUBJECT IS REQUESTED (subjectId is provided):
    if (normSubj) {
      if (allowedSubjs.includes(normSubj) || (cleanSubj && allowedSubjs.includes(cleanSubj))) {
        return true;
      }
      const found = findSubjectAcrossCategories(normSubj);
      if (found) {
        if (allowedSubjs.includes(found.subject.id) || allowedSubjs.includes(found.subject.displayName.toLowerCase())) {
          return true;
        }
      }
      // If a specific subject is requested and not in allowedSubjs, deny access
      return false;
    }

    // IF ONLY A CATEGORY IS REQUESTED (no specific subject):
    if (normCat) {
      // Direct whole category allowance
      if (allowedCats.includes(normCat) || (cleanCat && allowedCats.includes(cleanCat))) {
        return true;
      }
      // Or check if user has at least one allowed subject in this category
      if (normCat === 'guru_kelas' || normCat === 'campuran') {
        const gkSubjs = ['pedagogik', 'literasi', 'numerasi', 'sains'];
        if (gkSubjs.some(s => allowedSubjs.includes(s))) {
          return true;
        }
      }
      if (normCat === 'rumpun_pai') {
        const paiSubjs = ['quran_hadits', 'akidah_akhlak', 'fikih', 'ski', 'bahasa_arab'];
        if (paiSubjs.some(s => allowedSubjs.includes(s))) {
          return true;
        }
      }
      if (normCat === 'umum') {
        const umumSubjs = ['bahasa_indonesia', 'bahasa_inggris', 'matematika', 'ipa', 'ips'];
        if (umumSubjs.some(s => allowedSubjs.includes(s))) {
          return true;
        }
      }
      if (normCat === 'peminatan') {
        const peminatanSubjs = ['matematika', 'fisika', 'kimia', 'biologi', 'ekonomi', 'geografi', 'sosiologi'];
        if (peminatanSubjs.some(s => allowedSubjs.includes(s))) {
          return true;
        }
      }
      return false;
    }

    return false;
  }

  // Fallback for legacy users without educationAccess map
  const edLevels = user.educationLevels || user.accessPermissions?.educationLevels;
  if (edLevels && edLevels.length > 0 && !edLevels.includes(targetLevel)) {
    return false;
  }

  // Non-MI levels require explicit permission
  if (targetLevel !== 'MI') {
    if (userOverallMode === 'ALL' && edLevels?.includes(targetLevel)) {
      return true;
    }
    return false;
  }

  // Legacy MI fallback
  const legacyType = user.accessType || user.accessPermissions?.accessType || 'ALL';
  if (legacyType === 'ALL' || userOverallMode === 'ALL') {
    return true; // True wildcard for MI
  }

  // Legacy custom check
  const legacyCats = (user.allowedCategories || user.accessPermissions?.allowedCategories || []).map((c: string) => c.toLowerCase().trim().replace(/[-_]/g, ' '));
  const legacySubjs = (user.allowedSubjects || user.accessPermissions?.allowedSubjects || []).map((s: string) => s.toLowerCase().trim());

  if (!categoryId && !subjectId) return true;

  const targetSubj = (subjectId || '').toLowerCase().trim();
  const targetCat = (categoryId || '').toLowerCase().trim().replace(/[-_]/g, ' ');

  if (targetSubj && legacySubjs.includes(targetSubj)) return true;
  if (targetCat && legacyCats.includes(targetCat)) return true;

  return false;
}

/**
 * Generates human-readable visual access summary for user cards and Super Admin tables
 */
export function formatUserAccessSummary(user: {
  role?: string;
  status?: string;
  educationLevels?: EducationLevel[];
  accessMode?: 'NONE' | 'SELECTED' | 'ALL';
  educationAccess?: Record<string, { mode?: string; allowedSubjects?: string[]; allowedCategories?: string[] }>;
  accessType?: 'ALL' | 'CUSTOM' | string;
  allowedCategories?: string[];
  allowedSubjects?: string[];
} | null | undefined): {
  pendidikan: string;
  hakAkses: string;
  statusAkses: string;
  miDetail: string;
  mtsDetail: string;
  maDetail: string;
} {
  if (!user) {
    return {
      pendidikan: '-',
      hakAkses: 'Tidak Ada Akses',
      statusAkses: 'Nonaktif',
      miDetail: 'Tidak Ada Akses',
      mtsDetail: 'Tidak Ada Akses',
      maDetail: 'Tidak Ada Akses'
    };
  }

  if (user.role === 'SUPER_ADMIN' || user.role === 'ADMIN') {
    return {
      pendidikan: 'MI, MTs, MA',
      hakAkses: 'Akses Semua (Admin)',
      statusAkses: 'Aktif Penuh',
      miDetail: 'Semua (Wildcard Admin)',
      mtsDetail: 'Semua (Wildcard Admin)',
      maDetail: 'Semua (Wildcard Admin)'
    };
  }

  const levels: EducationLevel[] = user.educationLevels && user.educationLevels.length > 0 
    ? user.educationLevels 
    : ['MI'];

  const getLevelSummary = (lvl: EducationLevel) => {
    if (!levels.includes(lvl)) return 'Tidak Ada Akses';
    const conf = user.educationAccess?.[lvl];
    if (!conf) {
      if (lvl === 'MI') {
        return (user.accessMode === 'ALL' || user.accessType === 'ALL') ? 'Semua' : `Terpilih (${user.allowedSubjects?.length || 0} mapel)`;
      }
      return user.accessMode === 'ALL' ? 'Semua (Bank Belum Tersedia)' : 'Tidak Ada Akses';
    }
    if (conf.mode === 'NONE') return 'Tidak Ada Akses';
    if (conf.mode === 'ALL') {
      return lvl === 'MI' ? 'Semua' : 'Semua (Bank Belum Tersedia)';
    }
    const count = (conf.allowedSubjects || []).length;
    return `Terpilih (${count} mapel)`;
  };

  const miDetail = getLevelSummary('MI');
  const mtsDetail = getLevelSummary('MTs');
  const maDetail = getLevelSummary('MA');

  // Overall Hak Akses string
  let hakAkses = 'Semua';
  if (user.accessMode === 'NONE') {
    hakAkses = 'Tidak Ada Akses';
  } else if (user.accessMode === 'SELECTED' || user.accessType === 'CUSTOM') {
    hakAkses = 'Terpilih';
  } else if (levels.length === 1 && levels[0] === 'MI' && miDetail.startsWith('Terpilih')) {
    hakAkses = 'Terpilih';
  }

  // Status Akses string
  let statusAkses = 'Aktif';
  if (user.status === 'BLOCKED') statusAkses = 'Diblokir';
  else if (user.status === 'EXPIRED') statusAkses = 'Kedaluwarsa';
  else if (user.status === 'PENDING') statusAkses = 'Menunggu';
  else if (user.accessMode === 'NONE') statusAkses = 'Tidak Ada Akses';

  return {
    pendidikan: levels.join(', '),
    hakAkses,
    statusAkses,
    miDetail,
    mtsDetail,
    maDetail
  };
}
