import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import crypto from 'crypto';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { 
  Question, 
  QuestionCategory, 
  QuestionDifficulty, 
  SessionResult, 
  UserStats, 
  AuthUser, 
  UserRole, 
  QuestionReport, 
  AiMetrics, 
  SystemStats, 
  Option,
  AkgtkCategory,
  AccessPackage,
  UserAccountStatus,
  RegistrationSource,
  SubjectAuditRow,
  BankAuditReport
} from './src/types';
import { pedagogikQuestions } from './src/data/pedagogikQuestions';
import { literacyQuestions } from './src/data/literacyQuestions';
import { numeracyQuestions } from './src/data/numeracyQuestions';
import { scienceQuestions } from './src/data/scienceQuestions';
import { rumpunPaiQuestions } from './src/data/rumpunPaiQuestions';
import { tendikQuestions } from './src/data/tendikQuestions';
import { mtsQuestions } from './src/data/mtsQuestions';
import { maQuestions } from './src/data/maQuestions';
import { miEnglishQuestions } from './src/data/miEnglishQuestions';
import { 
  CANONICAL_CATEGORIES, 
  normalizeCategory, 
  normalizeSubject, 
  findSubjectAcrossCategories,
  hasCategoryAccess,
  canAccess,
  formatUserAccessSummary,
  EDUCATION_LEVELS_CONFIG,
  EducationLevel,
  LevelAccessMode,
  EducationAccessMap,
  GRAND_TARGET_TOTAL 
} from './src/categoryEngine';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Storage directory
const DATA_DIR = path.join(__dirname, 'server_data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const DB_FILE = path.join(DATA_DIR, 'db.json');

// Interface for database structure
interface DatabaseSchema {
  questions: Question[];
  users: Record<string, {
    id: string;
    email: string;
    passwordHash: string;
    name: string;
    role: UserRole;
    isGuest: boolean;
    whatsapp?: string;
    madrasah?: string;
    city?: string;
    category?: AkgtkCategory;
    status?: UserAccountStatus;
    accessCode?: string;
    accessCodeHash?: string;
    package?: AccessPackage;
    accessStartDate?: string;
    accessEndDate?: string;
    accessType?: 'ALL' | 'CUSTOM';
    allowedCategories?: AkgtkCategory[];
    allowedSubjects?: string[];
    educationLevels?: EducationLevel[];
    accessMode?: LevelAccessMode;
    educationAccess?: EducationAccessMap;
    registrationSource?: RegistrationSource;
    createdBy?: string;
    approvedBy?: string;
    approvedAt?: string;
    createdAt: string;
    lastActive: string;
    bookmarks: string[]; // array of questionIds
    wrongQuestions: string[]; // array of questionIds
  }>;
  sessions: Record<string, {
    sessionId: string;
    userId: string;
    mode: 'practice' | 'simulation';
    category: QuestionCategory | 'campuran';
    difficulty: string;
    startedAt: string;
    totalSeconds: number;
    questionIds: string[]; // ordered question IDs
    shuffledOptionsMap?: Record<string, Option[]>; // questionId -> shuffled options
    correctAnswerMap?: Record<string, 'A' | 'B' | 'C' | 'D'>; // questionId -> new correct answer
    userAnswers: Record<string, string>;
    flaggedQuestions: Record<string, boolean>;
    currentIndex: number;
    status: 'active' | 'completed';
    result?: SessionResult;
    completedAt?: string;
    lastSavedAt: string;
  }>;
  userHistory: Record<string, SessionResult[]>; // userId -> SessionResult[]
  tokens: Record<string, { userId: string; expiresAt: number }>; // token -> { userId, expiresAt }
  reports: QuestionReport[];
  aiMetrics: AiMetrics;
  lastBackup: string;
}

// In-memory cache backed by JSON file
let db: DatabaseSchema;

// Helper: Shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Helper: Shuffle options for question
function shuffleQuestionOptions(question: Question): { question: Question; newCorrect: 'A' | 'B' | 'C' | 'D'; newOptions: Option[] } {
  const originalCorrectOption = question.options.find(o => o.id === question.correctAnswer);
  if (!originalCorrectOption) {
    return { question, newCorrect: question.correctAnswer, newOptions: question.options };
  }

  const shuffledOptionsRaw = shuffleArray(question.options);
  const optionLetters: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];

  const oldToNewMap: Record<string, 'A' | 'B' | 'C' | 'D'> = {};
  const newOptions: Option[] = shuffledOptionsRaw.map((opt, index) => {
    const newId = optionLetters[index];
    oldToNewMap[opt.id] = newId;
    return { id: newId, text: opt.text };
  });

  const newCorrectAnswer = oldToNewMap[question.correctAnswer] || 'A';

  let newWhyWrong: Record<string, string> | undefined = undefined;
  if (question.whyWrong) {
    newWhyWrong = {};
    for (const [oldId, reason] of Object.entries(question.whyWrong)) {
      const newId = oldToNewMap[oldId];
      if (newId) newWhyWrong[newId] = reason;
    }
  }

  return {
    question: {
      ...question,
      options: newOptions,
      correctAnswer: newCorrectAnswer,
      whyWrong: newWhyWrong
    },
    newCorrect: newCorrectAnswer,
    newOptions
  };
}

// Helper: Generate unique secure access code
function generateAccessCode(level?: string): string {
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  let code = '';
  for (let i = 0; i < 6; i++) {
    const randomIndex = crypto.randomInt(0, chars.length);
    code += chars[randomIndex];
  }
  const prefix = (level && level.toUpperCase().includes('MI')) ? 'AKG-MI' : 'AKG';
  return `${prefix}-${code}`;
}

function getUniqueAccessCode(level?: string): string {
  let attempts = 0;
  while (attempts < 1000) {
    const code = generateAccessCode(level);
    const existing = db?.users ? Object.values(db.users).find(u => u.accessCode === code) : null;
    if (!existing) return code;
    attempts++;
  }
  const prefix = (level && level.toUpperCase().includes('MI')) ? 'AKG-MI' : 'AKG';
  return `${prefix}-${Date.now().toString(36).toUpperCase().slice(-6)}`;
}

// Helper: Calculate start and expiration dates for package
function calculatePackageDates(pkg: AccessPackage, customStart?: string, customEnd?: string): { startDate: string; endDate: string } {
  const now = new Date();
  const start = customStart ? new Date(customStart) : now;
  let end = new Date(start);

  if (pkg === 'Uji Coba') {
    end.setDate(end.getDate() + 7);
  } else if (pkg === '30 Hari') {
    end.setDate(end.getDate() + 30);
  } else if (pkg === '180 Hari') {
    end.setDate(end.getDate() + 180);
  } else if (pkg === '360 Hari') {
    end.setDate(end.getDate() + 360);
  } else if (pkg === 'Custom' && customEnd) {
    end = new Date(customEnd);
  } else {
    end.setDate(end.getDate() + 180);
  }

  return {
    startDate: start.toISOString(),
    endDate: end.toISOString()
  };
}

// Helper: Generate structured WhatsApp share message
function generateWhatsAppMessage(name: string, accessCode: string, packageName: string): string {
  return `Halo ${name} 👋\n\nAkses AKGTK Smart Practice Anda sudah aktif.\n\nKode Akses:\n${accessCode}\n\nMasa Akses:\n${packageName}\n\nSilakan buka AKGTK Smart Practice kemudian pilih "Masuk dengan Kode".\n\nSimpan kode akses ini dan jangan membagikannya kepada orang lain.\n\nTerima kasih.`;
}

// Load or initialize DB
function initDatabase() {
  if (fs.existsSync(DB_FILE)) {
    try {
      const raw = fs.readFileSync(DB_FILE, 'utf-8');
      db = JSON.parse(raw);
      // Ensure seed questions are merged if missing
      const existingIds = new Set(db.questions.map(q => q.id));
      const allSeeds = [
        ...pedagogikQuestions,
        ...literacyQuestions,
        ...numeracyQuestions,
        ...scienceQuestions,
        ...rumpunPaiQuestions,
        ...tendikQuestions,
        ...mtsQuestions,
        ...maQuestions,
        ...miEnglishQuestions
      ];
      let added = 0;
      for (const q of allSeeds) {
        if (!existingIds.has(q.id)) {
          db.questions.push(q);
          existingIds.add(q.id);
          added++;
        }
      }

      // Normalize questions with akgtkCategory, subject, and status
      let questionsUpdated = false;
      for (const q of db.questions) {
        if (!q.subject) {
          q.subject = q.category === 'numerasi' ? 'Numerasi' : q.category === 'sains' ? 'Sains' : 'Literasi';
          questionsUpdated = true;
        }
        if (!q.akgtkCategory) {
          q.akgtkCategory = 'Guru Kelas';
          questionsUpdated = true;
        }
        if (!q.status) {
          q.status = 'ACTIVE';
          questionsUpdated = true;
        }
      }
      if (added > 0 || questionsUpdated) saveDatabaseSync();

      // Normalize users
      let usersUpdated = false;
      for (const u of Object.values(db.users)) {
        if (!u.status) { u.status = 'ACTIVE'; usersUpdated = true; }
        if (!u.accessCode) { u.accessCode = getUniqueAccessCode(); usersUpdated = true; }
        if (!u.category) { u.category = 'Guru Kelas'; usersUpdated = true; }
        if (!u.package) { u.package = '180 Hari'; usersUpdated = true; }
        if (!u.accessStartDate) { u.accessStartDate = u.createdAt; usersUpdated = true; }
        if (!u.accessEndDate) {
          const d = new Date(u.createdAt);
          d.setDate(d.getDate() + 180);
          u.accessEndDate = d.toISOString();
          usersUpdated = true;
        }
        if (!u.accessType) { u.accessType = 'ALL'; usersUpdated = true; }
        if (!u.allowedCategories) { u.allowedCategories = [u.category || 'Guru Kelas']; usersUpdated = true; }
        if (!u.allowedSubjects) { u.allowedSubjects = ['literasi', 'numerasi', 'sains']; usersUpdated = true; }
        if (!u.registrationSource) { u.registrationSource = 'ADMIN'; usersUpdated = true; }
        if (!u.educationLevels || u.educationLevels.length === 0) {
          u.educationLevels = ['MI'];
          usersUpdated = true;
        }
        if (!u.accessMode) {
          u.accessMode = (u.accessType === 'CUSTOM' ? 'SELECTED' : 'ALL') as LevelAccessMode;
          usersUpdated = true;
        }
        if (!u.educationAccess) {
          const isCustom = u.accessType === 'CUSTOM' || u.accessMode === 'SELECTED';
          u.educationAccess = {
            MI: {
              mode: (isCustom ? 'SELECTED' : 'ALL') as LevelAccessMode,
              allowedCategories: u.allowedCategories || [u.category || 'Guru Kelas'],
              allowedSubjects: u.allowedSubjects || ['literasi', 'numerasi', 'sains']
            },
            MTs: { mode: 'NONE', allowedCategories: [], allowedSubjects: [] },
            MA: { mode: 'NONE', allowedCategories: [], allowedSubjects: [] }
          };
          usersUpdated = true;
        }
      }
      // Ensure test user TEST-ALL-ACCESS exists with ALL categories access (PHASE 2)
      if (!db.users['usr_test_all_access']) {
        db.users['usr_test_all_access'] = {
          id: 'usr_test_all_access',
          name: 'TEST-ALL-ACCESS',
          email: 'test-all-access@akgtk.id',
          passwordHash: 'test1234',
          accessCode: 'TEST-ALL-ACCESS',
          role: 'USER',
          status: 'ACTIVE',
          category: 'Guru Kelas',
          package: '360 Hari',
          accessType: 'ALL',
          allowedCategories: [
            'Guru Kelas',
            'Rumpun PAI',
            'STEM',
            'Umum',
            'Kepala Madrasah',
            'Pengawas',
            'Laboran',
            'Pustakawan'
          ],
          allowedSubjects: ['literasi', 'numerasi', 'sains'],
          educationLevels: ['MI', 'MTs', 'MA'],
          accessMode: 'ALL',
          educationAccess: {
            MI: { mode: 'ALL', allowedCategories: ['guru_kelas', 'rumpun_pai'], allowedSubjects: [] },
            MTs: { mode: 'ALL', allowedCategories: [], allowedSubjects: [] },
            MA: { mode: 'ALL', allowedCategories: [], allowedSubjects: [] }
          },
          isGuest: false,
          createdAt: new Date().toISOString(),
          lastActive: new Date().toISOString(),
          bookmarks: [],
          wrongQuestions: []
        };
        usersUpdated = true;
      }

      // Seed User A: MI = ALL, MTs = NONE, MA = NONE
      if (!db.users['usr_test_user_a']) {
        db.users['usr_test_user_a'] = {
          id: 'usr_test_user_a',
          name: 'User A (MI All)',
          email: 'user-a@akgtk.id',
          passwordHash: 'test1234',
          accessCode: 'TEST-USER-A',
          role: 'USER',
          status: 'ACTIVE',
          category: 'Guru Kelas',
          package: '180 Hari',
          accessStartDate: new Date().toISOString(),
          accessEndDate: new Date(Date.now() + 180 * 86400000).toISOString(),
          educationLevels: ['MI'],
          accessMode: 'ALL',
          educationAccess: {
            MI: { mode: 'ALL', allowedCategories: ['guru_kelas', 'rumpun_pai'], allowedSubjects: [] },
            MTs: { mode: 'NONE', allowedCategories: [], allowedSubjects: [] },
            MA: { mode: 'NONE', allowedCategories: [], allowedSubjects: [] }
          },
          isGuest: false,
          createdAt: new Date().toISOString(),
          lastActive: new Date().toISOString(),
          bookmarks: [],
          wrongQuestions: []
        };
        usersUpdated = true;
      }

      // Seed User B: MI = SELECTED, MTs = NONE, MA = NONE (Literasi, Numerasi, Fikih)
      if (!db.users['usr_test_user_b']) {
        db.users['usr_test_user_b'] = {
          id: 'usr_test_user_b',
          name: 'User B (MI Selected)',
          email: 'user-b@akgtk.id',
          passwordHash: 'test1234',
          accessCode: 'TEST-USER-B',
          role: 'USER',
          status: 'ACTIVE',
          category: 'Guru Kelas',
          package: '180 Hari',
          accessStartDate: new Date().toISOString(),
          accessEndDate: new Date(Date.now() + 180 * 86400000).toISOString(),
          educationLevels: ['MI'],
          accessMode: 'SELECTED',
          educationAccess: {
            MI: { mode: 'SELECTED', allowedCategories: ['guru_kelas', 'rumpun_pai'], allowedSubjects: ['literasi', 'numerasi', 'fikih'] },
            MTs: { mode: 'NONE', allowedCategories: [], allowedSubjects: [] },
            MA: { mode: 'NONE', allowedCategories: [], allowedSubjects: [] }
          },
          allowedSubjects: ['literasi', 'numerasi', 'fikih'],
          isGuest: false,
          createdAt: new Date().toISOString(),
          lastActive: new Date().toISOString(),
          bookmarks: [],
          wrongQuestions: []
        };
        usersUpdated = true;
      }

      // Seed User C: MI = ALL, MTs = ALL, MA = NONE
      if (!db.users['usr_test_user_c']) {
        db.users['usr_test_user_c'] = {
          id: 'usr_test_user_c',
          name: 'User C (MI All + MTs All)',
          email: 'user-c@akgtk.id',
          passwordHash: 'test1234',
          accessCode: 'TEST-USER-C',
          role: 'USER',
          status: 'ACTIVE',
          category: 'Guru Kelas',
          package: '180 Hari',
          accessStartDate: new Date().toISOString(),
          accessEndDate: new Date(Date.now() + 180 * 86400000).toISOString(),
          educationLevels: ['MI', 'MTs'],
          accessMode: 'ALL',
          educationAccess: {
            MI: { mode: 'ALL', allowedCategories: ['guru_kelas', 'rumpun_pai'], allowedSubjects: [] },
            MTs: { mode: 'ALL', allowedCategories: ['rumpun_pai', 'umum'], allowedSubjects: [] },
            MA: { mode: 'NONE', allowedCategories: [], allowedSubjects: [] }
          },
          isGuest: false,
          createdAt: new Date().toISOString(),
          lastActive: new Date().toISOString(),
          bookmarks: [],
          wrongQuestions: []
        };
        usersUpdated = true;
      }

      // Seed User D: MI = ALL, MTs = SELECTED, MA = SELECTED
      if (!db.users['usr_test_user_d']) {
        db.users['usr_test_user_d'] = {
          id: 'usr_test_user_d',
          name: 'User D (MI All + MTs Sel + MA Sel)',
          email: 'user-d@akgtk.id',
          passwordHash: 'test1234',
          accessCode: 'TEST-USER-D',
          role: 'USER',
          status: 'ACTIVE',
          category: 'Guru Kelas',
          package: '180 Hari',
          accessStartDate: new Date().toISOString(),
          accessEndDate: new Date(Date.now() + 180 * 86400000).toISOString(),
          educationLevels: ['MI', 'MTs', 'MA'],
          accessMode: 'SELECTED',
          educationAccess: {
            MI: { mode: 'ALL', allowedCategories: ['guru_kelas', 'rumpun_pai'], allowedSubjects: [] },
            MTs: { mode: 'SELECTED', allowedCategories: ['rumpun_pai'], allowedSubjects: ['quran_hadits', 'akidah_akhlak'] },
            MA: { mode: 'SELECTED', allowedCategories: ['rumpun_pai'], allowedSubjects: ['fikih', 'bahasa_arab'] }
          },
          isGuest: false,
          createdAt: new Date().toISOString(),
          lastActive: new Date().toISOString(),
          bookmarks: [],
          wrongQuestions: []
        };
        usersUpdated = true;
      }

      // Seed User E: MI = NONE, MTs = NONE, MA = ALL
      if (!db.users['usr_test_user_e']) {
        db.users['usr_test_user_e'] = {
          id: 'usr_test_user_e',
          name: 'User E (MA All Only)',
          email: 'user-e@akgtk.id',
          passwordHash: 'test1234',
          accessCode: 'TEST-USER-E',
          role: 'USER',
          status: 'ACTIVE',
          category: 'Rumpun PAI',
          package: '180 Hari',
          accessStartDate: new Date().toISOString(),
          accessEndDate: new Date(Date.now() + 180 * 86400000).toISOString(),
          educationLevels: ['MA'],
          accessMode: 'ALL',
          educationAccess: {
            MI: { mode: 'NONE', allowedCategories: [], allowedSubjects: [] },
            MTs: { mode: 'NONE', allowedCategories: [], allowedSubjects: [] },
            MA: { mode: 'ALL', allowedCategories: ['rumpun_pai', 'peminatan'], allowedSubjects: [] }
          },
          isGuest: false,
          createdAt: new Date().toISOString(),
          lastActive: new Date().toISOString(),
          bookmarks: [],
          wrongQuestions: []
        };
        usersUpdated = true;
      }

      if (usersUpdated) saveDatabaseSync();
      
      // Check if INITIAL_SUPER_ADMIN_EMAIL is set in environment
      if (process.env.INITIAL_SUPER_ADMIN_EMAIL) {
        const targetEmail = process.env.INITIAL_SUPER_ADMIN_EMAIL.trim().toLowerCase();
        const adminUser = Object.values(db.users).find(u => u.email.toLowerCase() === targetEmail);
        if (adminUser && adminUser.role !== 'SUPER_ADMIN') {
          adminUser.role = 'SUPER_ADMIN';
          saveDatabaseSync();
          console.log(`[DB] Promoted ${adminUser.email} to SUPER_ADMIN from INITIAL_SUPER_ADMIN_EMAIL.`);
        }
      }

      console.log(`[DB] Database loaded successfully: ${db.questions.length} questions, ${Object.keys(db.users).length} users`);
      return;
    } catch (err) {
      console.error('[DB] Failed to read db.json, re-initializing...', err);
    }
  }

  // Initial seed
  const allSeeds = [
    ...pedagogikQuestions,
    ...literacyQuestions,
    ...numeracyQuestions,
    ...scienceQuestions,
    ...rumpunPaiQuestions,
    ...tendikQuestions,
    ...mtsQuestions,
    ...maQuestions,
    ...miEnglishQuestions
  ];
  
  db = {
    questions: allSeeds,
    users: {
      'usr_guru_01': {
        id: 'usr_guru_01',
        email: 'guru@madrasah.id',
        passwordHash: 'guru123',
        name: 'Ustadz Ahmad Fauzi, S.Pd.I',
        role: 'USER',
        isGuest: false,
        createdAt: new Date().toISOString(),
        lastActive: new Date().toISOString(),
        bookmarks: [],
        wrongQuestions: []
      },
      'usr_admin_01': {
        id: 'usr_admin_01',
        email: 'admin@akgtk.id',
        passwordHash: 'admin123',
        name: 'Administrator Bank Soal',
        role: 'ADMIN',
        isGuest: false,
        createdAt: new Date().toISOString(),
        lastActive: new Date().toISOString(),
        bookmarks: [],
        wrongQuestions: []
      },
      'usr_super_01': {
        id: 'usr_super_01',
        email: 'superadmin@kemenag.go.id',
        passwordHash: 'super123',
        name: 'Super Admin Kemenag RI',
        role: 'SUPER_ADMIN',
        isGuest: false,
        createdAt: new Date().toISOString(),
        lastActive: new Date().toISOString(),
        bookmarks: [],
        wrongQuestions: []
      }
    },
    sessions: {},
    userHistory: {},
    tokens: {},
    reports: [],
    aiMetrics: {
      totalRequests: 0,
      successfulRequests: 0,
      failedRequests: 0,
      questionsGenerated: 0,
      recentLogs: []
    },
    lastBackup: new Date().toISOString()
  };

  saveDatabaseSync();
  console.log(`[DB] Initialized database with ${allSeeds.length} standard questions and 3 demo accounts.`);
}

// Debounced asynchronous DB save to prevent disk bottleneck
let saveTimeout: NodeJS.Timeout | null = null;
function persistDatabase() {
  if (saveTimeout) clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    try {
      const tempFile = `${DB_FILE}.tmp`;
      fs.writeFileSync(tempFile, JSON.stringify(db, null, 2), 'utf-8');
      fs.renameSync(tempFile, DB_FILE);
    } catch (err) {
      console.error('[DB] Error writing to db.json', err);
    }
  }, 300);
}

function saveDatabaseSync() {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf-8');
  } catch (err) {
    console.error('[DB] Error writing sync db.json', err);
  }
}

initDatabase();

// Clean up expired tokens periodically (every 1 hour)
setInterval(() => {
  const now = Date.now();
  let changed = false;
  for (const [token, data] of Object.entries(db.tokens)) {
    if (data.expiresAt < now) {
      delete db.tokens[token];
      changed = true;
    }
  }
  if (changed) persistDatabase();
}, 3600000);

// Authentication Middleware
interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    name: string;
    role: UserRole;
    isGuest?: boolean;
    whatsapp?: string;
    madrasah?: string;
    city?: string;
    category?: AkgtkCategory;
    status: UserAccountStatus;
    accessCode?: string;
    package?: AccessPackage;
    accessStartDate?: string;
    accessEndDate?: string;
    accessType?: 'ALL' | 'CUSTOM';
    allowedCategories?: AkgtkCategory[];
    allowedSubjects?: string[];
    educationLevels?: EducationLevel[];
    accessMode?: LevelAccessMode;
    educationAccess?: EducationAccessMap;
    registrationSource?: RegistrationSource;
    createdBy?: string;
    createdAt?: string;
  };
}

function authMiddleware(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      error: 'Sesi tidak valid atau telah kedaluwarsa. Silakan masuk kembali.'
    });
  }

  const token = authHeader.split(' ')[1];
  const tokenData = db.tokens[token];

  if (!tokenData || tokenData.expiresAt < Date.now()) {
    if (tokenData) delete db.tokens[token];
    return res.status(401).json({
      error: 'Sesi Anda telah berakhir. Silakan masuk kembali.'
    });
  }

  const user = db.users[tokenData.userId];
  if (!user) {
    return res.status(401).json({
      error: 'Pengguna tidak ditemukan dalam sistem.'
    });
  }

  if (user.status === 'BLOCKED') {
    return res.status(403).json({
      error: 'Akun Anda dinonaktifkan sementara oleh Administrator. Silakan hubungi admin untuk informasi lebih lanjut.'
    });
  }

  user.lastActive = new Date().toISOString();
  req.user = {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    isGuest: user.isGuest,
    whatsapp: user.whatsapp,
    madrasah: user.madrasah,
    city: user.city,
    category: user.category,
    status: user.status || 'ACTIVE',
    accessCode: user.accessCode,
    package: user.package,
    accessStartDate: user.accessStartDate,
    accessEndDate: user.accessEndDate,
    accessType: user.accessType,
    allowedCategories: user.allowedCategories,
    allowedSubjects: user.allowedSubjects,
    educationLevels: user.educationLevels || ['MI'],
    accessMode: user.accessMode || (user.accessType === 'CUSTOM' ? 'SELECTED' : 'ALL'),
    educationAccess: user.educationAccess,
    registrationSource: user.registrationSource,
    createdBy: user.createdBy,
    createdAt: user.createdAt
  };

  next();
}

// Role authorization middlewares
function requireAdmin(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  if (!req.user || (req.user.role !== 'ADMIN' && req.user.role !== 'SUPER_ADMIN')) {
    return res.status(403).json({
      error: 'Akses ditolak. Tindakan ini memerlukan hak akses Administrator.'
    });
  }
  next();
}

function requireSuperAdmin(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  if (!req.user || req.user.role !== 'SUPER_ADMIN') {
    return res.status(403).json({
      error: 'Akses ditolak. Tindakan ini memerlukan hak akses Super Administrator.'
    });
  }
  next();
}

// -------------------------------------------------------------
// AUTH ENDPOINTS
// -------------------------------------------------------------

// POST /api/auth/register
app.post('/api/auth/register', (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
      return res.status(400).json({ error: 'Nama lengkap, email, dan kata sandi wajib diisi.' });
    }

    const emailTrimmed = email.trim().toLowerCase();
    const existing = Object.values(db.users).find(u => u.email.toLowerCase() === emailTrimmed);
    if (existing) {
      return res.status(409).json({ error: 'Email ini sudah terdaftar. Silakan gunakan email lain atau langsung masuk.' });
    }

    const isInitialSuperAdmin = !!process.env.INITIAL_SUPER_ADMIN_EMAIL &&
      emailTrimmed === process.env.INITIAL_SUPER_ADMIN_EMAIL.trim().toLowerCase();

    const userId = `usr_${crypto.randomUUID()}`;
    const newUser = {
      id: userId,
      email: emailTrimmed,
      passwordHash: password,
      name: name.trim(),
      role: (isInitialSuperAdmin ? 'SUPER_ADMIN' : 'USER') as UserRole,
      isGuest: false,
      createdAt: new Date().toISOString(),
      lastActive: new Date().toISOString(),
      bookmarks: [],
      wrongQuestions: []
    };

    db.users[userId] = newUser;

    // Create session token (valid 30 days)
    const token = crypto.randomUUID();
    db.tokens[token] = {
      userId,
      expiresAt: Date.now() + 30 * 24 * 3600 * 1000
    };

    persistDatabase();

    return res.status(201).json({
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        isGuest: false,
        createdAt: newUser.createdAt
      }
    });
  } catch (err) {
    console.error('Register error', err);
    return res.status(500).json({ error: 'Terjadi kesalahan sistem saat mendaftar. Silakan coba kembali.' });
  }
});

// POST /api/auth/login
app.post('/api/auth/login', (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email dan kata sandi harus diisi.' });
    }

    const emailTrimmed = email.trim().toLowerCase();
    const user = Object.values(db.users).find(u => u.email.toLowerCase() === emailTrimmed);

    if (!user || user.passwordHash !== password) {
      return res.status(401).json({ error: 'Email atau kata sandi tidak cocok. Silakan periksa kembali.' });
    }

    user.lastActive = new Date().toISOString();

    const token = crypto.randomUUID();
    db.tokens[token] = {
      userId: user.id,
      expiresAt: Date.now() + 30 * 24 * 3600 * 1000
    };

    persistDatabase();

    return res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        isGuest: user.isGuest,
        whatsapp: user.whatsapp,
        madrasah: user.madrasah,
        city: user.city,
        category: user.category,
        status: user.status,
        accessCode: user.accessCode,
        package: user.package,
        accessStartDate: user.accessStartDate,
        accessEndDate: user.accessEndDate,
        accessType: user.accessType,
        allowedCategories: user.allowedCategories,
        allowedSubjects: user.allowedSubjects,
        educationLevels: user.educationLevels || ['MI'],
        accessMode: user.accessMode || (user.accessType === 'CUSTOM' ? 'SELECTED' : 'ALL'),
        educationAccess: user.educationAccess,
        registrationSource: user.registrationSource,
        createdBy: user.createdBy,
        createdAt: user.createdAt
      }
    });
  } catch (err) {
    console.error('Login error', err);
    return res.status(500).json({ error: 'Terjadi kesalahan sistem saat masuk. Silakan coba kembali.' });
  }
});

// POST /api/auth/login-code (User authentication via Access Code)
app.post('/api/auth/login-code', (req: Request, res: Response) => {
  try {
    const codeInput = req.body.code || req.body.accessCode;
    if (!codeInput || typeof codeInput !== 'string') {
      return res.status(400).json({ error: 'Kode akses harus diisi.' });
    }

    const cleanInput = codeInput.trim().toUpperCase();
    const cleanNormalized = cleanInput.replace(/[^A-Z0-9]/g, '');

    // Match either exact code or without hyphens
    const user = Object.values(db.users).find(u => {
      if (!u.accessCode) return false;
      const uCode = u.accessCode.toUpperCase();
      const uNormalized = uCode.replace(/[^A-Z0-9]/g, '');
      return uCode === cleanInput || uNormalized === cleanNormalized;
    });

    if (!user) {
      return res.status(404).json({ error: 'Kode akses tidak ditemukan. Pastikan Anda memasukkan kode dengan benar (contoh: AKGTK-XXXXXX).' });
    }

    if (user.status === 'BLOCKED') {
      return res.status(403).json({ error: 'Akun Anda dinonaktifkan sementara oleh Administrator. Silakan hubungi admin untuk bantuan.' });
    }

    if (user.status === 'PENDING') {
      return res.status(403).json({ error: 'Pendaftaran Anda sedang menunggu persetujuan Super Admin. Kode akses akan aktif setelah disetujui.' });
    }

    // Check expiration date
    if (user.accessEndDate) {
      const expiry = new Date(user.accessEndDate).getTime();
      if (Date.now() > expiry) {
        user.status = 'EXPIRED';
        persistDatabase();
      }
    }

    user.lastActive = new Date().toISOString();

    const token = crypto.randomUUID();
    db.tokens[token] = {
      userId: user.id,
      expiresAt: Date.now() + 30 * 24 * 3600 * 1000
    };

    persistDatabase();

    return res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        whatsapp: user.whatsapp,
        madrasah: user.madrasah,
        city: user.city,
        category: user.category,
        role: user.role,
        status: user.status,
        accessCode: user.accessCode,
        package: user.package,
        accessStartDate: user.accessStartDate,
        accessEndDate: user.accessEndDate,
        accessType: user.accessType,
        allowedCategories: user.allowedCategories,
        allowedSubjects: user.allowedSubjects,
        educationLevels: user.educationLevels || ['MI'],
        accessMode: user.accessMode || (user.accessType === 'CUSTOM' ? 'SELECTED' : 'ALL'),
        educationAccess: user.educationAccess,
        registrationSource: user.registrationSource,
        createdBy: user.createdBy,
        isGuest: user.isGuest,
        createdAt: user.createdAt
      }
    });
  } catch (err) {
    console.error('Login with code error', err);
    return res.status(500).json({ error: 'Gagal memverifikasi kode akses.' });
  }
});

// POST /api/auth/register-request (Method 1: User self-registration -> PENDING)
app.post('/api/auth/register-request', (req: Request, res: Response) => {
  try {
    const { name, whatsapp, madrasah, city, category, email, password } = req.body;
    if (!name || !name.trim()) {
      return res.status(400).json({ error: 'Nama lengkap wajib diisi.' });
    }
    if (!category) {
      return res.status(400).json({ error: 'Kategori AKGTK wajib dipilih.' });
    }

    const cleanWhatsapp = (whatsapp || '').trim();
    if (cleanWhatsapp) {
      const duplicateWhatsapp = Object.values(db.users).find(u => u.whatsapp && u.whatsapp.trim() === cleanWhatsapp);
      if (duplicateWhatsapp) {
        return res.status(409).json({ error: 'Nomor WhatsApp ini sudah terdaftar. Silakan hubungi admin jika lupa kode akses Anda.' });
      }
    }

    const cleanEmail = (email || '').trim().toLowerCase();
    if (cleanEmail) {
      const duplicateEmail = Object.values(db.users).find(u => u.email.toLowerCase() === cleanEmail);
      if (duplicateEmail) {
        return res.status(409).json({ error: 'Email ini sudah terdaftar. Silakan langsung masuk dengan akun Anda.' });
      }
    }

    const userId = `usr_${crypto.randomUUID()}`;
    const generatedEmail = cleanEmail || `user_${cleanWhatsapp.replace(/\D/g, '') || crypto.randomUUID().slice(0, 8)}@akgtk.id`;

    const newUser = {
      id: userId,
      email: generatedEmail,
      passwordHash: password || 'access_code_only',
      name: name.trim(),
      whatsapp: cleanWhatsapp || undefined,
      madrasah: madrasah ? madrasah.trim() : undefined,
      city: city ? city.trim() : undefined,
      category: category as AkgtkCategory,
      role: 'USER' as UserRole,
      status: 'PENDING' as UserAccountStatus,
      isGuest: false,
      accessType: 'ALL' as const,
      allowedCategories: [category as AkgtkCategory],
      allowedSubjects: ['literasi', 'numerasi', 'sains'] as ('literasi' | 'numerasi' | 'sains')[],
      registrationSource: 'SELF_REGISTRATION' as RegistrationSource,
      createdAt: new Date().toISOString(),
      lastActive: new Date().toISOString(),
      bookmarks: [],
      wrongQuestions: []
    };

    db.users[userId] = newUser;
    persistDatabase();

    return res.status(201).json({
      success: true,
      message: 'Pendaftaran berhasil dikirim! Status Anda saat ini Menunggu Persetujuan Super Admin. Anda akan menerima Kode Akses setelah disetujui.',
      userId
    });
  } catch (err) {
    console.error('Self-registration error', err);
    return res.status(500).json({ error: 'Gagal mengajukan pendaftaran akun.' });
  }
});

// POST /api/auth/guest (Guaranteed completely isolated guest account)
app.post('/api/auth/guest', (req: Request, res: Response) => {
  try {
    const uniqueSuffix = crypto.randomUUID().slice(0, 8);
    const guestId = `guest_${crypto.randomUUID()}`;
    const guestName = `Peserta Tamu #${uniqueSuffix.toUpperCase()}`;
    const guestEmail = `tamu_${uniqueSuffix}@guest.akgtk.id`;

    const guestUser = {
      id: guestId,
      email: guestEmail,
      passwordHash: 'guest',
      name: guestName,
      role: 'USER' as UserRole,
      isGuest: true,
      createdAt: new Date().toISOString(),
      lastActive: new Date().toISOString(),
      bookmarks: [],
      wrongQuestions: []
    };

    db.users[guestId] = guestUser;

    const token = crypto.randomUUID();
    db.tokens[token] = {
      userId: guestId,
      expiresAt: Date.now() + 7 * 24 * 3600 * 1000 // 7 days for guests
    };

    persistDatabase();

    return res.status(201).json({
      token,
      user: {
        id: guestUser.id,
        name: guestUser.name,
        email: guestUser.email,
        role: guestUser.role,
        isGuest: true,
        createdAt: guestUser.createdAt
      }
    });
  } catch (err) {
    console.error('Guest login error', err);
    return res.status(500).json({ error: 'Gagal membuat sesi tamu. Silakan coba kembali.' });
  }
});

// GET /api/auth/me
app.get('/api/auth/me', authMiddleware, (req: AuthenticatedRequest, res: Response) => {
  return res.json({ user: req.user });
});

// POST /api/auth/logout
app.post('/api/auth/logout', authMiddleware, (req: AuthenticatedRequest, res: Response) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    delete db.tokens[token];
    persistDatabase();
  }
  return res.json({ success: true, message: 'Berhasil keluar.' });
});

// -------------------------------------------------------------
// QUESTION BANK (SHARED READ-ONLY FOR USERS)
// -------------------------------------------------------------

// GET /api/questions (Protected - Only for authenticated members or admins)
app.get('/api/questions', authMiddleware, (req: AuthenticatedRequest, res: Response) => {
  try {
    const user = req.user!;
    if (user.isGuest) {
      return res.status(403).json({
        error: 'AKSES KHUSUS MEMBER. Bank soal lengkap hanya dapat diakses oleh member berbayar dengan kode akses aktif.',
        requiresUpgrade: true,
        checkoutUrl: 'https://lynk.id/untungdigitalai/6v6g2lv4xg0j/checkout'
      });
    }
    if (user.status === 'EXPIRED' && user.role !== 'ADMIN' && user.role !== 'SUPER_ADMIN') {
      return res.status(403).json({
        error: 'MASA AKSES ANDA TELAH BERAKHIR. Perpanjang akses untuk kembali menggunakan bank soal.',
        isExpired: true,
        checkoutUrl: 'https://lynk.id/untungdigitalai/6v6g2lv4xg0j/checkout'
      });
    }

    const page = Math.max(1, parseInt(req.query.page as string) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit as string) || 20));
    const educationLevel = ((req.query.educationLevel as string) || 'MI').trim().toUpperCase();
    const targetLevel: EducationLevel = educationLevel === 'MTS' ? 'MTs' : (educationLevel === 'MA' ? 'MA' : 'MI');
    const category = req.query.category as string;
    const difficulty = req.query.difficulty as string;
    const search = (req.query.search as string || '').toLowerCase().trim();

    // Check user permission
    if (category && category !== 'all') {
      const allowed = canAccess(user, targetLevel, category, undefined);
      if (!allowed) {
        return res.status(403).json({
          error: `Akses ditolak: Akun Anda belum memiliki izin untuk modul ${category} pada jenjang ${targetLevel}.`,
          isPermissionDenied: true
        });
      }
    }

    const isSuperAdminOrAdmin = user.role === 'SUPER_ADMIN' || user.role === 'ADMIN';

    let filtered = db.questions.filter(q => {
      // INVALID is never available
      if (q.status === 'INVALID' || q.status === 'ARCHIVED') return false;
      // DRAFT only visible to Super Admin / Admin
      if (!isSuperAdminOrAdmin && (q.status || 'ACTIVE') !== 'ACTIVE') return false;
      // Level check
      const qLevel = q.educationLevel || 'MI';
      if (qLevel !== targetLevel) return false;
      return true;
    });

    if (category && category !== 'all') {
      const normCat = normalizeCategory(category);
      const foundSubj = findSubjectAcrossCategories(category);
      filtered = filtered.filter(q => {
        if (q.category === category || q.categoryId === category) return true;
        if (q.subjectId === category || (q.subject && q.subject.toLowerCase() === category.toLowerCase())) return true;
        if (foundSubj && (q.subjectId === foundSubj.subject.id || (q.subject && q.subject.toLowerCase() === foundSubj.subject.displayName.toLowerCase()))) return true;
        if (normCat && (q.categoryId === normCat.id || q.category === normCat.id)) return true;
        return false;
      });
    }
    if (difficulty && difficulty !== 'all') {
      filtered = filtered.filter(q => q.difficulty === difficulty);
    }
    if (search) {
      filtered = filtered.filter(q => 
        q.question.toLowerCase().includes(search) ||
        (q.passage && q.passage.toLowerCase().includes(search)) ||
        q.competency.toLowerCase().includes(search) ||
        q.id.toLowerCase().includes(search)
      );
    }

    const total = filtered.length;
    const totalPages = Math.ceil(total / limit) || 1;
    const startIndex = (page - 1) * limit;
    const items = filtered.slice(startIndex, startIndex + limit);

    return res.json({
      items,
      total,
      page,
      limit,
      totalPages
    });
  } catch (err) {
    console.error('Fetch questions error', err);
    return res.status(500).json({ error: 'Gagal memuat daftar soal. Silakan coba kembali.' });
  }
});

// -------------------------------------------------------------
// SESSIONS (ISOLATED PER USER & SECURE)
// -------------------------------------------------------------

// POST /api/sessions/start (Start practice or simulation)
const handleStartSessionRequest = (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user!.id;
    let { mode = 'practice', category = 'campuran', difficulty = 'all', count, educationLevel = 'MI', subject } = req.body;
    if (typeof count !== 'number' || count <= 0) {
      count = (mode === 'simulation' || category === 'rumpun_pai' || ['quran_hadits', 'akidah_akhlak', 'fikih', 'ski', 'bahasa_arab'].includes(category)) ? 50 : 10;
    }

    const targetLevel: EducationLevel = (educationLevel?.toUpperCase() === 'MTS' ? 'MTs' : (educationLevel?.toUpperCase() === 'MA' ? 'MA' : 'MI'));

    const userObj = db.users[userId];
    if (userObj) {
      if (userObj.isGuest) {
        return res.status(403).json({
          error: 'AKSES KHUSUS MEMBER. Untuk mulai mengerjakan latihan dan simulasi AKGTK, silakan dapatkan akses terlebih dahulu.',
          requiresUpgrade: true,
          checkoutUrl: 'https://lynk.id/untungdigitalai/6v6g2lv4xg0j/checkout'
        });
      }
      if (userObj.status === 'BLOCKED') {
        return res.status(403).json({ error: 'Akun Anda dinonaktifkan oleh Administrator.' });
      }
      if (userObj.status === 'EXPIRED' || (userObj.accessEndDate && new Date(userObj.accessEndDate).getTime() < Date.now())) {
        userObj.status = 'EXPIRED';
        persistDatabase();
        return res.status(403).json({ 
          error: 'MASA AKSES ANDA TELAH BERAKHIR. Perpanjang akses untuk kembali menggunakan latihan dan simulasi AKGTK.',
          isExpired: true,
          checkoutUrl: 'https://lynk.id/untungdigitalai/6v6g2lv4xg0j/checkout'
        });
      }

      // Check canAccess(user, targetLevel, category, subject)
      if (category !== 'remedial') {
        const normCat = normalizeCategory(category);
        const isGkSubject = ['literasi', 'numerasi', 'sains', 'pedagogik'].includes((category || '').toLowerCase());
        const isPaiSubject = ['quran_hadits', 'akidah_akhlak', 'fikih', 'ski', 'bahasa_arab'].includes((category || '').toLowerCase());
        const foundSubjCat = findSubjectAcrossCategories(category);
        const effectiveCatId = isGkSubject ? 'guru_kelas' : (isPaiSubject ? 'rumpun_pai' : (normCat ? normCat.id : (foundSubjCat ? foundSubjCat.category.id : 'guru_kelas')));
        const effectiveSubjId = subject || (isGkSubject || isPaiSubject ? category.toLowerCase() : (foundSubjCat ? foundSubjCat.subject.id : undefined));

        const allowed = canAccess(userObj, targetLevel, effectiveCatId, effectiveSubjId);
        if (!allowed) {
          const catDisplayName = normCat ? normCat.displayName : (foundSubjCat ? foundSubjCat.category.displayName : (isGkSubject ? 'Guru Kelas' : category));
          return res.status(403).json({
            error: `Akses ditolak: Akun Anda belum memiliki izin untuk modul ${catDisplayName} pada jenjang ${targetLevel}. Hubungi Super Admin untuk memperbarui hak akses.`,
            isPermissionDenied: true
          });
        }
      }
    }

    const isSuperAdminOrAdmin = userObj?.role === 'SUPER_ADMIN' || userObj?.role === 'ADMIN';

    // Check if there is an unfinished active simulation for this user.
    // If starting a simulation, cancel any previous orphaned active session for this user cleanly.
    for (const [sId, sess] of Object.entries(db.sessions)) {
      if (sess.userId === userId && sess.status === 'active' && sess.mode === mode) {
        sess.status = 'completed'; // retire old active session
      }
    }

    // Select questions
    let selectedQuestions: Question[] = [];

    // Strict session deduplication: guarantees 0 duplicate IDs and 0 duplicate stems in any session
    const normalizeSessionStem = (t: string) => (t || '').toLowerCase().replace(/\[[^\]]+\]/g, '').replace(/[^a-z0-9]/g, '').trim();
    const deduplicateSessionPool = (pool: Question[]) => {
      const seenIds = new Set<string>();
      const seenStems = new Set<string>();
      const result: Question[] = [];
      for (const q of pool) {
        if (seenIds.has(q.id)) continue;
        const stem = normalizeSessionStem(q.question);
        if (stem.length > 15 && seenStems.has(stem)) continue;
        seenIds.add(q.id);
        if (stem.length > 15) seenStems.add(stem);
        result.push(q);
      }
      return result;
    };

    // Check if multi-subject CAT/Simulation should be used vs single subject
    const normCat = normalizeCategory(category);
    const isGkSubject = ['literasi', 'numerasi', 'sains'].includes((category || '').toLowerCase());
    const foundSubjCat = findSubjectAcrossCategories(category);
    const isSingleSubject = isGkSubject || !!foundSubjCat;
    const effectiveCat = normCat || (isGkSubject || category === 'campuran' ? CANONICAL_CATEGORIES.find(c => c.id === 'guru_kelas') : undefined);

    if (category === 'remedial') {
      const userObj = db.users[userId];
      const wrongIds = userObj ? userObj.wrongQuestions : [];
      let remPool = db.questions.filter(q => wrongIds.includes(q.id));
      if (remPool.length === 0) remPool = [...db.questions];
      selectedQuestions = shuffleArray(remPool).slice(0, count);
    } else if (!isSingleSubject && (mode === 'simulation' || category === 'campuran' || normCat || !category)) {
      // -------------------------------------------------------------
      // MULTI-SUBJECT CAT SIMULATION ENGINE (PHASE 6)
      // -------------------------------------------------------------
      const catId = effectiveCat ? effectiveCat.id : 'guru_kelas';

      if (catId === 'guru_kelas') {
        // GURU KELAS CAT: Literasi, Numerasi, Sains
        let litPool = db.questions.filter(q => (q.category === 'literasi' || q.subject?.toLowerCase() === 'literasi') && q.status !== 'INVALID' && q.status !== 'ARCHIVED' && (isSuperAdminOrAdmin || (q.status || 'ACTIVE') === 'ACTIVE') && (q.educationLevel || 'MI') === targetLevel);
        let numPool = db.questions.filter(q => (q.category === 'numerasi' || q.subject?.toLowerCase() === 'numerasi') && q.status !== 'INVALID' && q.status !== 'ARCHIVED' && (isSuperAdminOrAdmin || (q.status || 'ACTIVE') === 'ACTIVE') && (q.educationLevel || 'MI') === targetLevel);
        let sciPool = db.questions.filter(q => (q.category === 'sains' || q.subject?.toLowerCase() === 'sains') && q.status !== 'INVALID' && q.status !== 'ARCHIVED' && (isSuperAdminOrAdmin || (q.status || 'ACTIVE') === 'ACTIVE') && (q.educationLevel || 'MI') === targetLevel);

        const basePerSubj = Math.floor(count / 3);
        const remainder = count % 3;
        const countLit = basePerSubj + (remainder > 0 ? 1 : 0);
        const countNum = basePerSubj + (remainder > 1 ? 1 : 0);
        const countSci = basePerSubj;

        // INSUFFICIENT QUESTIONS REQUIREMENT:
        // Never silently replace missing subject questions with another subject!
        if (litPool.length < countLit || numPool.length < countNum || sciPool.length < countSci) {
          return res.status(400).json({
            error: `Bank soal belum mencukupi untuk simulasi ini. Dibutuhkan: Literasi (${countLit}), Numerasi (${countNum}), Sains (${countSci}).`
          });
        }

        // Difficulty filtering if each subject has enough matching items
        if (difficulty && difficulty !== 'all') {
          const diffLit = litPool.filter(q => q.difficulty === difficulty);
          const diffNum = numPool.filter(q => q.difficulty === difficulty);
          const diffSci = sciPool.filter(q => q.difficulty === difficulty);
          if (diffLit.length >= countLit && diffNum.length >= countNum && diffSci.length >= countSci) {
            litPool = diffLit;
            numPool = diffNum;
            sciPool = diffSci;
          }
        }

        const selectedLit = shuffleArray(litPool).slice(0, countLit);
        const selectedNum = shuffleArray(numPool).slice(0, countNum);
        const selectedSci = shuffleArray(sciPool).slice(0, countSci);

        // Combine and shuffle together so subjects are evenly interleaved throughout the exam
        selectedQuestions = shuffleArray([...selectedLit, ...selectedNum, ...selectedSci]);
      } else {
        // OTHER MULTI-SUBJECT / SINGLE SUBJECT CATEGORIES (Rumpun PAI, STEM, Umum, Kamad, Pengawas, Laboran, Pustakawan)
        const targetCat = CANONICAL_CATEGORIES.find(c => c.id === catId);
        if (!targetCat) {
          return res.status(404).json({ error: `Kategori '${category}' tidak ditemukan dalam kurikulum AKGTK.` });
        }

        // Find available questions for this category
        const isTendikDomain = ['kepala_madrasah', 'pengawas', 'laboran', 'pustakawan'].includes(targetCat.id);
        let catQuestions = db.questions.filter(q => {
          if (q.status === 'INVALID' || q.status === 'ARCHIVED') return false;
          if (!isSuperAdminOrAdmin && (q.status || 'ACTIVE') !== 'ACTIVE') return false;
          if (!isTendikDomain && (q.educationLevel || 'MI') !== targetLevel) return false;
          const qCat = normalizeCategory(q.akgtkCategory || (['literasi', 'numerasi', 'sains'].includes(q.category) ? 'Guru Kelas' : (q.categoryId || q.category)));
          return qCat && qCat.id === targetCat.id;
        });

        // Smart fallback: if catQuestions empty for targetLevel, search across all levels
        if (catQuestions.length === 0) {
          catQuestions = db.questions.filter(q => {
            if (q.status === 'INVALID' || q.status === 'ARCHIVED') return false;
            if (!isSuperAdminOrAdmin && (q.status || 'ACTIVE') !== 'ACTIVE') return false;
            const qCat = normalizeCategory(q.akgtkCategory || (['literasi', 'numerasi', 'sains'].includes(q.category) ? 'Guru Kelas' : (q.categoryId || q.category)));
            return qCat && qCat.id === targetCat.id;
          });
        }

        if (catQuestions.length === 0) {
          // EMPTY STATUS (NOT PERMISSION DENIED)
          return res.status(404).json({ 
            error: `Bank soal ${targetCat.displayName} belum tersedia. Tim kurator sedang menyusun butir soal untuk domain ini.`,
            status: 'EMPTY'
          });
        }

        // Check per-subject distribution for multi-subject CAT
        // Only use subjects that actually exist for this level in EDUCATION_LEVELS_CONFIG
        const lvlCfg = EDUCATION_LEVELS_CONFIG[targetLevel];
        const lvlCat = lvlCfg?.categories.find(c => c.id === targetCat.id);
        const activeSubjects = lvlCat ? targetCat.subjects.filter(s => lvlCat.subjects.some(ls => ls.id === s.id)) : targetCat.subjects;
        const subjectsToUse = activeSubjects.length > 0 ? activeSubjects : targetCat.subjects;

        const subjCount = subjectsToUse.length;
        const perSubj = Math.max(1, Math.floor(count / subjCount));
        let collected: Question[] = [];
        let missingSubjs: string[] = [];

        for (const subj of subjectsToUse) {
          const subjPool = catQuestions.filter(q => {
            if (q.subjectId === subj.id) return true;
            const qSubj = normalizeSubject(targetCat.id, q.subject);
            return qSubj && qSubj.id === subj.id;
          });
          if (subjPool.length === 0) {
            missingSubjs.push(subj.displayName);
          } else {
            collected.push(...shuffleArray(subjPool).slice(0, perSubj));
          }
        }

        if (missingSubjs.length > 0 && catQuestions.length < count) {
          return res.status(400).json({
            error: `Bank soal belum mencukupi untuk simulasi ini. Dibutuhkan butir soal untuk mata pelajaran: ${missingSubjs.join(', ')}.`
          });
        }

        if (collected.length < count) {
          const remainingNeeded = count - collected.length;
          const collectedIds = new Set(collected.map(q => q.id));
          const remainingPool = catQuestions.filter(q => !collectedIds.has(q.id));
          collected.push(...shuffleArray(remainingPool).slice(0, remainingNeeded));
        }

        selectedQuestions = shuffleArray(collected).slice(0, count);
      }
    } else {
      // -------------------------------------------------------------
      // SINGLE SUBJECT PRACTICE & TEST MODE
      // -------------------------------------------------------------
      let singlePool = db.questions.filter(q => {
        if (q.status === 'INVALID' || q.status === 'ARCHIVED') return false;
        if (!isSuperAdminOrAdmin && (q.status || 'ACTIVE') !== 'ACTIVE') return false;
        const qIsTendik = ['kepala_madrasah', 'pengawas', 'laboran', 'pustakawan'].includes(q.categoryId || q.category || '') || ['Kepala Madrasah', 'Pengawas', 'Laboran', 'Pustakawan'].includes(q.akgtkCategory || '');
        if (!qIsTendik && (q.educationLevel || 'MI') !== targetLevel) return false;
        if (foundSubjCat) {
          if (q.subjectId === foundSubjCat.subject.id) return true;
          const normSubject = normalizeSubject(foundSubjCat.category.id, q.subject);
          if (normSubject && normSubject.id === foundSubjCat.subject.id) return true;
        }
        if (isGkSubject) {
          const normSubject = normalizeSubject('guru_kelas', q.subject);
          if (normSubject && normSubject.id === (category || '').toLowerCase()) return true;
        }
        if (q.category === category) return true;
        if (q.subject && q.subject.toLowerCase() === category.toLowerCase()) return true;
        if (subject && (q.subjectId === subject || q.subject?.toLowerCase() === subject.toLowerCase())) return true;
        return false;
      });

      // SMART FALLBACK: If singlePool is empty for targetLevel, search across all levels before failing!
      if (singlePool.length === 0) {
        singlePool = db.questions.filter(q => {
          if (q.status === 'INVALID' || q.status === 'ARCHIVED') return false;
          if (!isSuperAdminOrAdmin && (q.status || 'ACTIVE') !== 'ACTIVE') return false;
          if (foundSubjCat) {
            if (q.subjectId === foundSubjCat.subject.id) return true;
            const normSubject = normalizeSubject(foundSubjCat.category.id, q.subject);
            if (normSubject && normSubject.id === foundSubjCat.subject.id) return true;
          }
          if (isGkSubject) {
            const normSubject = normalizeSubject('guru_kelas', q.subject);
            if (normSubject && normSubject.id === (category || '').toLowerCase()) return true;
          }
          if (q.category === category) return true;
          if (q.subject && q.subject.toLowerCase() === category.toLowerCase()) return true;
          if (subject && (q.subjectId === subject || q.subject?.toLowerCase() === subject.toLowerCase())) return true;
          return false;
        });
      }

      if (singlePool.length === 0) {
        const catName = foundSubjCat ? foundSubjCat.subject.displayName : (normCat ? normCat.displayName : category);
        return res.status(404).json({ 
          error: `Bank soal ${catName} belum tersedia. Tim kurator sedang menyusun butir soal untuk mata pelajaran ini.`,
          status: 'EMPTY'
        });
      }

      if (difficulty && difficulty !== 'all') {
        const diffPool = singlePool.filter(q => q.difficulty === difficulty);
        if (diffPool.length >= count) singlePool = diffPool;
      }
      // Pick randomized questions from the available bank (e.g. 50 from 150 bank)
      selectedQuestions = shuffleArray(singlePool).slice(0, count);
    }

    // Explicit uniqueness validation: single session must NEVER contain duplicate questions (by ID or stem)
    selectedQuestions = deduplicateSessionPool(selectedQuestions);

    if (selectedQuestions.length === 0) {
      return res.status(400).json({ error: 'Tidak ada soal yang tersedia untuk kriteria yang dipilih.' });
    }

    // Shuffle options independently for each session and record mapping
    const shuffledOptionsMap: Record<string, Option[]> = {};
    const correctAnswerMap: Record<string, 'A' | 'B' | 'C' | 'D'> = {};
    const processedQuestionsForClient: Question[] = [];

    for (const q of selectedQuestions) {
      const { question: shuffledQ, newCorrect, newOptions } = shuffleQuestionOptions(q);
      shuffledOptionsMap[q.id] = newOptions;
      correctAnswerMap[q.id] = newCorrect;

      if (mode === 'simulation') {
        // SECURITY REQUIREMENT 30: Strip answer key and explanations for active simulation!
        processedQuestionsForClient.push({
          id: shuffledQ.id,
          category: shuffledQ.category,
          categoryId: shuffledQ.categoryId,
          akgtkCategory: shuffledQ.akgtkCategory,
          subject: shuffledQ.subject,
          subjectId: shuffledQ.subjectId,
          subtopic: shuffledQ.subtopic,
          difficulty: shuffledQ.difficulty,
          competency: shuffledQ.competency,
          passage: shuffledQ.passage,
          question: shuffledQ.question,
          options: newOptions,
          correctAnswer: 'A', // Dummy placeholder, real key is securely on server
          explanation: '',
          tip: '',
          visualData: shuffledQ.visualData
        });
      } else {
        // Practice mode includes explanations for instant feedback
        processedQuestionsForClient.push(shuffledQ);
      }
    }

    const sessionId = crypto.randomUUID();
    const totalSeconds = mode === 'simulation' ? selectedQuestions.length * 90 : selectedQuestions.length * 120;

    const newSession = {
      sessionId,
      userId,
      mode: mode as 'practice' | 'simulation',
      category: category as QuestionCategory | 'campuran',
      difficulty: difficulty as string,
      startedAt: new Date().toISOString(),
      totalSeconds,
      questionIds: selectedQuestions.map(q => q.id),
      shuffledOptionsMap,
      correctAnswerMap,
      userAnswers: {},
      flaggedQuestions: {},
      currentIndex: 0,
      status: 'active' as const,
      lastSavedAt: new Date().toISOString()
    };

    db.sessions[sessionId] = newSession;
    persistDatabase();

    return res.status(201).json({
      sessionId,
      mode: newSession.mode,
      category: newSession.category,
      questions: processedQuestionsForClient,
      totalSeconds,
      remainingSeconds: totalSeconds,
      userAnswers: {},
      flaggedQuestions: {},
      currentIndex: 0,
      startedAt: newSession.startedAt
    });
  } catch (err) {
    console.error('Start session error', err);
    return res.status(500).json({ error: 'Gagal memulai sesi. Silakan coba kembali.' });
  }
};

app.post('/api/sessions/start', authMiddleware, handleStartSessionRequest);
app.post('/api/sessions', authMiddleware, handleStartSessionRequest);

// GET /api/sessions/active (Restore session on browser refresh)
app.get('/api/sessions/active', authMiddleware, (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user!.id;

    // Find latest active simulation or practice session
    const active = Object.values(db.sessions)
      .filter(s => s.userId === userId && s.status === 'active')
      .sort((a, b) => new Date(b.startedAt).getTime() - new Date(a.startedAt).getTime())[0];

    if (!active) {
      return res.json({ activeSession: null });
    }

    // Calculate exact remaining time based on server start time
    const elapsedSeconds = Math.floor((Date.now() - new Date(active.startedAt).getTime()) / 1000);
    const remainingSeconds = Math.max(0, active.totalSeconds - elapsedSeconds);

    // Auto-expire simulation if time ran out
    if (active.mode === 'simulation' && remainingSeconds <= 0 && Object.keys(active.userAnswers).length > 0) {
      // Evaluate automatically
      // We can evaluate directly or let client finish
    }

    // Reconstruct question objects
    const questionMap = new Map(db.questions.map(q => [q.id, q]));
    const questionsForClient: Question[] = [];

    for (const qId of active.questionIds) {
      const q = questionMap.get(qId);
      if (!q) continue;

      const options = active.shuffledOptionsMap?.[qId] || q.options;
      const correctAns = active.correctAnswerMap?.[qId] || q.correctAnswer;

      if (active.mode === 'simulation') {
        questionsForClient.push({
          id: q.id,
          category: q.category,
          difficulty: q.difficulty,
          competency: q.competency,
          passage: q.passage,
          question: q.question,
          options,
          correctAnswer: 'A', // Stripped for simulation integrity
          explanation: '',
          tip: '',
          visualData: q.visualData
        });
      } else {
        questionsForClient.push({
          ...q,
          options,
          correctAnswer: correctAns
        });
      }
    }

    return res.json({
      activeSession: {
        sessionId: active.sessionId,
        mode: active.mode,
        category: active.category,
        questions: questionsForClient,
        userAnswers: active.userAnswers,
        flaggedQuestions: active.flaggedQuestions,
        currentIndex: active.currentIndex,
        startedAt: active.startedAt,
        totalSeconds: active.totalSeconds,
        remainingSeconds,
        lastSavedAt: active.lastSavedAt
      }
    });
  } catch (err) {
    console.error('Get active session error', err);
    return res.status(500).json({ error: 'Gagal memulihkan sesi. Silakan coba kembali.' });
  }
});

// POST/PUT /api/sessions/:sessionId/answer (Auto-save answers with user isolation)
const handleSaveAnswer = (req: AuthenticatedRequest, res: Response) => {
  try {
    const { sessionId } = req.params;
    const userId = req.user!.id;
    const { questionId, answer, isFlagged, currentIndex } = req.body;

    const session = db.sessions[sessionId];
    if (!session) {
      return res.status(404).json({ error: 'Sesi latihan tidak ditemukan.' });
    }

    // USER DATA ISOLATION: verify session belongs to authenticated user
    if (session.userId !== userId) {
      return res.status(403).json({ error: 'Anda tidak berhak mengubah data sesi ini.' });
    }

    if (session.status === 'completed') {
      return res.status(400).json({ error: 'Sesi ini sudah dikumpulkan dan tidak dapat diubah lagi.' });
    }

    if (questionId && answer) {
      session.userAnswers[questionId] = answer;
    }
    if (questionId && typeof isFlagged === 'boolean') {
      session.flaggedQuestions[questionId] = isFlagged;
    }
    if (typeof currentIndex === 'number') {
      session.currentIndex = currentIndex;
    }

    session.lastSavedAt = new Date().toISOString();
    persistDatabase();

    return res.json({ success: true, savedAt: session.lastSavedAt });
  } catch (err) {
    console.error('Auto-save answer error', err);
    return res.status(500).json({ error: 'Gagal menyimpan jawaban. Silakan coba kembali.' });
  }
};

app.post('/api/sessions/:sessionId/answer', authMiddleware, handleSaveAnswer);
app.put('/api/sessions/:sessionId/answer', authMiddleware, handleSaveAnswer);

// POST /api/sessions/:sessionId/submit (IDEMPOTENT submission & scoring)
app.post('/api/sessions/:sessionId/submit', authMiddleware, (req: AuthenticatedRequest, res: Response) => {
  try {
    const { sessionId } = req.params;
    const userId = req.user!.id;
    const { userAnswers: clientAnswers } = req.body;

    const session = db.sessions[sessionId];
    if (!session) {
      return res.status(404).json({ error: 'Sesi latihan tidak ditemukan.' });
    }

    // USER DATA ISOLATION: verify ownership
    if (session.userId !== userId) {
      return res.status(403).json({ error: 'Anda tidak berhak mengakses hasil sesi ini.' });
    }

    // REQUIREMENT 29 & 40: IDEMPOTENT SUBMISSION
    // If already completed, return existing result immediately without duplicating!
    if (session.status === 'completed' && session.result) {
      return res.json({ result: session.result, duplicateSubmission: true });
    }

    // Merge any final answers from client
    if (clientAnswers && typeof clientAnswers === 'object') {
      session.userAnswers = { ...session.userAnswers, ...clientAnswers };
    }

    // Calculate score using server authoritative answer keys
    const questionMap = new Map(db.questions.map(q => [q.id, q]));
    const fullQuestionsSnapshot: Question[] = [];

    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    const wrongQuestionIds: string[] = [];
    const categoryBreakdown: Record<string, { total: number; correct: number; percentage: number }> = {};
    const competencyBreakdown: Record<string, { total: number; correct: number; percentage: number }> = {};

    for (const qId of session.questionIds) {
      const q = questionMap.get(qId);
      if (!q) continue;

      const options = session.shuffledOptionsMap?.[qId] || q.options;
      const serverCorrectAnswer = session.correctAnswerMap?.[qId] || q.correctAnswer;

      const fullQ: Question = {
        ...q,
        options,
        correctAnswer: serverCorrectAnswer
      };
      fullQuestionsSnapshot.push(fullQ);

      const userChoice = session.userAnswers[q.id];
      if (!userChoice || userChoice === '' || userChoice === 'UNANSWERED') {
        session.userAnswers[q.id] = 'UNANSWERED';
        unanswered++;
        wrongQuestionIds.push(q.id);
      } else if (userChoice === serverCorrectAnswer) {
        correct++;
      } else {
        incorrect++;
        wrongQuestionIds.push(q.id);
      }

      // Breakdown by category
      if (!categoryBreakdown[q.category]) {
        categoryBreakdown[q.category] = { total: 0, correct: 0, percentage: 0 };
      }
      categoryBreakdown[q.category].total++;
      if (userChoice === serverCorrectAnswer) categoryBreakdown[q.category].correct++;

      // Breakdown by competency
      if (!competencyBreakdown[q.competency]) {
        competencyBreakdown[q.competency] = { total: 0, correct: 0, percentage: 0 };
      }
      competencyBreakdown[q.competency].total++;
      if (userChoice === serverCorrectAnswer) competencyBreakdown[q.competency].correct++;
    }

    // Percentages
    Object.keys(categoryBreakdown).forEach(k => {
      const item = categoryBreakdown[k];
      item.percentage = item.total > 0 ? Math.round((item.correct / item.total) * 100) : 0;
    });

    Object.keys(competencyBreakdown).forEach(k => {
      const item = competencyBreakdown[k];
      item.percentage = item.total > 0 ? Math.round((item.correct / item.total) * 100) : 0;
    });

    const total = session.questionIds.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    const score = percentage;

    // Strengths & Weaknesses
    const strengths: string[] = [];
    const weaknesses: string[] = [];

    Object.entries(competencyBreakdown).forEach(([comp, stats]) => {
      if (stats.percentage >= 75) strengths.push(`${comp} (${stats.percentage}%)`);
      else if (stats.percentage < 60) weaknesses.push(`${comp} (${stats.percentage}%)`);
    });

    // Recommendations
    const recommendations: string[] = [];
    if (percentage >= 85) {
      recommendations.push("Kemampuan Anda sangat unggul dan memenuhi standar kompetensi guru profesional AKGTK.");
      recommendations.push("Pertahankan ritme belajar dengan mencoba simulasi campuran tingkat kesulitan sulit.");
    } else if (percentage >= 70) {
      recommendations.push("Kemampuan Anda sudah baik dan berada di atas rata-rata kompetensi minimum.");
      if (weaknesses.length > 0) {
        recommendations.push(`Fokuskan latihan mandiri pada topik: ${weaknesses.slice(0, 2).join(', ')}.`);
      }
    } else {
      recommendations.push("Perlu penguatan konsep dasar pada materi yang sering mengalami kekeliruan.");
      recommendations.push("Gunakan 'Mode Latihan' untuk mempelajari pembahasan langsung dan tips cepat setiap butir soal.");
      if (weaknesses.length > 0) {
        recommendations.push(`Prioritas remedial: ${weaknesses.slice(0, 3).join(', ')}.`);
      }
    }

    const result: SessionResult = {
      id: `SES_${sessionId.slice(0, 8)}`,
      date: new Date().toISOString(),
      mode: session.mode,
      category: session.category,
      total,
      correct,
      incorrect,
      unanswered,
      score,
      percentage,
      difficulty: session.difficulty,
      categoryBreakdown,
      competencyBreakdown,
      wrongQuestionIds,
      userAnswers: session.userAnswers,
      questions: fullQuestionsSnapshot, // Full questions with explanations returned now!
      strengths,
      weaknesses,
      recommendations
    };

    session.status = 'completed';
    session.completedAt = new Date().toISOString();
    session.result = result;

    // Update user history (scoped to user)
    if (!db.userHistory[userId]) {
      db.userHistory[userId] = [];
    }
    db.userHistory[userId].unshift(result);
    if (db.userHistory[userId].length > 100) db.userHistory[userId].pop();

    // Update user wrong questions bank
    const userObj = db.users[userId];
    if (userObj) {
      const wrongSet = new Set(userObj.wrongQuestions);
      wrongQuestionIds.forEach(id => wrongSet.add(id));
      // Remove questions answered correctly
      fullQuestionsSnapshot
        .filter(q => session.userAnswers[q.id] === q.correctAnswer)
        .forEach(q => wrongSet.delete(q.id));
      userObj.wrongQuestions = Array.from(wrongSet);
    }

    persistDatabase();

    return res.json({ result, duplicateSubmission: false });
  } catch (err) {
    console.error('Submit session error', err);
    return res.status(500).json({ error: 'Gagal mengumpulkan sesi. Silakan coba kembali.' });
  }
});

// -------------------------------------------------------------
// USER DATA & HISTORY (ISOLATED PER USER)
// -------------------------------------------------------------

// GET /api/user/history (Paginated)
app.get('/api/user/history', authMiddleware, (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user!.id;
    const page = Math.max(1, parseInt(req.query.page as string) || 1);
    const limit = Math.min(50, Math.max(1, parseInt(req.query.limit as string) || 10));

    const history = db.userHistory[userId] || [];
    const total = history.length;
    const totalPages = Math.ceil(total / limit) || 1;
    const startIndex = (page - 1) * limit;

    // Lightweight summary projection (omit heavy full questions array for list view)
    const items = history.slice(startIndex, startIndex + limit).map(h => ({
      ...h,
      questions: [] // light for list, full details fetched by ID if selected
    }));

    return res.json({
      items,
      total,
      page,
      limit,
      totalPages
    });
  } catch (err) {
    console.error('Get user history error', err);
    return res.status(500).json({ error: 'Gagal memuat riwayat latihan. Silakan coba kembali.' });
  }
});

// GET /api/user/history/:resultId (Get complete details with full questions)
app.get('/api/user/history/:resultId', authMiddleware, (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user!.id;
    const { resultId } = req.params;

    const history = db.userHistory[userId] || [];
    const result = history.find(h => h.id === resultId);

    if (!result) {
      return res.status(404).json({ error: 'Hasil evaluasi tidak ditemukan.' });
    }

    return res.json({ result });
  } catch (err) {
    console.error('Get result detail error', err);
    return res.status(500).json({ error: 'Gagal memuat detail hasil. Silakan coba kembali.' });
  }
});

// GET /api/user/stats (Lightweight summary)
app.get('/api/user/stats', authMiddleware, (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user!.id;
    const history = db.userHistory[userId] || [];

    if (history.length === 0) {
      return res.json({
        stats: {
          totalSessions: 0,
          totalQuestionsAnswered: 0,
          totalCorrect: 0,
          totalIncorrect: 0,
          averageScore: 0,
          strongestCategory: '-',
          weakestCategory: '-'
        }
      });
    }

    let totalQuestions = 0;
    let totalCorrect = 0;
    let totalIncorrect = 0;
    let scoreSum = 0;

    const categoryScores: Record<string, { total: number; correct: number }> = {
      literasi: { total: 0, correct: 0 },
      numerasi: { total: 0, correct: 0 },
      sains: { total: 0, correct: 0 }
    };

    history.forEach(h => {
      totalQuestions += h.total;
      totalCorrect += h.correct;
      totalIncorrect += h.incorrect;
      scoreSum += h.score;

      Object.entries(h.categoryBreakdown).forEach(([cat, stats]) => {
        if (categoryScores[cat]) {
          categoryScores[cat].total += stats.total;
          categoryScores[cat].correct += stats.correct;
        }
      });
    });

    let bestCat = '-';
    let bestRate = -1;
    let worstCat = '-';
    let worstRate = 999;

    Object.entries(categoryScores).forEach(([cat, data]) => {
      if (data.total > 0) {
        const rate = data.correct / data.total;
        if (rate > bestRate) {
          bestRate = rate;
          bestCat = cat.charAt(0).toUpperCase() + cat.slice(1);
        }
        if (rate < worstRate) {
          worstRate = rate;
          worstCat = cat.charAt(0).toUpperCase() + cat.slice(1);
        }
      }
    });

    const stats: UserStats = {
      totalSessions: history.length,
      totalQuestionsAnswered: totalQuestions,
      totalCorrect,
      totalIncorrect,
      averageScore: Math.round(scoreSum / history.length),
      strongestCategory: bestCat,
      weakestCategory: worstCat
    };

    return res.json({ stats });
  } catch (err) {
    console.error('Get user stats error', err);
    return res.status(500).json({ error: 'Gagal memuat ringkasan statistik. Silakan coba kembali.' });
  }
});

// GET /api/user/bookmarks
app.get('/api/user/bookmarks', authMiddleware, (req: AuthenticatedRequest, res: Response) => {
  const userId = req.user!.id;
  const user = db.users[userId];
  return res.json({ bookmarks: user ? user.bookmarks : [] });
});

// POST /api/user/bookmarks/toggle (or /api/user/bookmarks)
const handleBookmarkToggle = (req: AuthenticatedRequest, res: Response) => {
  const userId = req.user!.id;
  const { questionId } = req.body;
  if (!questionId) return res.status(400).json({ error: 'questionId harus ditentukan.' });

  const user = db.users[userId];
  if (!user) return res.status(404).json({ error: 'Pengguna tidak ditemukan.' });

  const index = user.bookmarks.indexOf(questionId);
  let isBookmarked = false;

  if (index >= 0) {
    user.bookmarks.splice(index, 1);
    isBookmarked = false;
  } else {
    user.bookmarks.push(questionId);
    isBookmarked = true;
  }

  persistDatabase();
  return res.json({ isBookmarked, bookmarks: user.bookmarks });
};

app.post('/api/user/bookmarks/toggle', authMiddleware, handleBookmarkToggle);
app.post('/api/user/bookmarks', authMiddleware, handleBookmarkToggle);

// GET /api/user/wrong-questions
app.get('/api/user/wrong-questions', authMiddleware, (req: AuthenticatedRequest, res: Response) => {
  const userId = req.user!.id;
  const user = db.users[userId];
  const wrongIds = user ? user.wrongQuestions : [];
  return res.json({ wrongQuestionIds: wrongIds, count: wrongIds.length });
});

// POST /api/questions/:id/report (User submits report for typo/error)
app.post('/api/questions/:id/report', authMiddleware, (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { reason } = req.body;
    if (!reason || !reason.trim()) {
      return res.status(400).json({ error: 'Alasan laporan butir soal harus diisi.' });
    }

    const report: QuestionReport = {
      id: `rep_${crypto.randomUUID()}`,
      questionId: id,
      userId: req.user!.id,
      userName: req.user!.name,
      reason: reason.trim(),
      createdAt: new Date().toISOString(),
      status: 'pending'
    };

    db.reports.unshift(report);
    persistDatabase();

    return res.status(201).json({ success: true, message: 'Laporan soal berhasil dikirim kepada Administrator.' });
  } catch (err) {
    return res.status(500).json({ error: 'Gagal mengirim laporan soal.' });
  }
});

// -------------------------------------------------------------
// ADMIN PROTECTED APIS (ADMIN & SUPER_ADMIN ONLY)
// -------------------------------------------------------------

// GET /api/admin/stats
app.get('/api/admin/stats', authMiddleware, requireAdmin, (req: AuthenticatedRequest, res: Response) => {
  try {
    const totalUsers = Object.keys(db.users).length;
    const oneDayAgo = Date.now() - 24 * 3600 * 1000;
    const activeUsers = Object.values(db.users).filter(u => new Date(u.lastActive).getTime() > oneDayAgo).length;

    let totalPractices = 0;
    let totalSimulations = 0;

    Object.values(db.sessions).forEach(s => {
      if (s.mode === 'simulation') totalSimulations++;
      else totalPractices++;
    });

    const categoryDistribution = {
      literasi: db.questions.filter(q => q.category === 'literasi').length,
      numerasi: db.questions.filter(q => q.category === 'numerasi').length,
      sains: db.questions.filter(q => q.category === 'sains').length
    };

    const stats: SystemStats = {
      totalUsers,
      activeUsers,
      totalPractices,
      totalSimulations,
      totalQuestions: db.questions.length,
      reportedQuestions: db.reports.filter(r => r.status === 'pending').length,
      categoryDistribution
    };

    return res.json({ stats });
  } catch (err) {
    return res.status(500).json({ error: 'Gagal memuat statistik sistem.' });
  }
});

// Structure target for Bank Soal AKGTK (1.450 target)
const AUDIT_STRUCTURE: { category: string; subjects: string[] }[] = [
  {
    category: 'Guru Kelas',
    subjects: ['Literasi', 'Numerasi', 'Sains']
  },
  {
    category: 'Rumpun PAI',
    subjects: ['Qur\'an Hadits', 'Akidah Akhlak', 'Fikih', 'SKI', 'Bahasa Arab']
  },
  {
    category: 'STEM',
    subjects: ['Matematika', 'IPA', 'Fisika', 'Kimia']
  },
  {
    category: 'Umum',
    subjects: ['Bahasa Indonesia', 'Bahasa Inggris', 'IPS', 'Biologi', 'Ekonomi', 'Geografi', 'Sosiologi', 'Sejarah']
  },
  {
    category: 'Kepala Madrasah',
    subjects: ['Manajerial', 'Supervisi', 'Kewirausahaan']
  },
  {
    category: 'Pengawas',
    subjects: ['Supervisi Akademik', 'Supervisi Manajerial', 'Evaluasi Pendidikan', 'Penelitian dan Pengembangan']
  },
  {
    category: 'Laboran',
    subjects: ['Profesional']
  },
  {
    category: 'Pustakawan',
    subjects: ['Profesional']
  }
];

// GET /api/admin/bank-audit (Audit Real Question Bank)
app.get('/api/admin/bank-audit', authMiddleware, requireAdmin, (req: AuthenticatedRequest, res: Response) => {
  try {
    const rawQuestions = db.questions || [];
    
    // Evaluate validity and duplicates for all actual records
    const seenIds = new Set<string>();
    const seenTexts = new Set<string>();

    interface EvaluatedQuestion {
      q: Question;
      category: string;
      subject: string;
      isValid: boolean;
      isDuplicate: boolean;
      isDraft: boolean;
      isActive: boolean;
    }

    const evaluated: EvaluatedQuestion[] = [];

    for (const q of rawQuestions) {
      // Determine category & subject
      let cat = q.akgtkCategory || 'Guru Kelas';
      let subj = q.subject || '';

      if (!subj) {
        if (q.category === 'numerasi') subj = 'Numerasi';
        else if (q.category === 'sains') subj = 'Sains';
        else subj = 'Literasi';
      }

      // Check duplicates
      const idKey = (q.id || '').trim().toLowerCase();
      const textKey = (q.question || '').trim().toLowerCase();
      const isDuplicate = (idKey && seenIds.has(idKey)) || (textKey && seenTexts.has(textKey));
      if (idKey) seenIds.add(idKey);
      if (textKey) seenTexts.add(textKey);

      // Check validity per prompt rules:
      // Must contain: unique ID, category, subject, question text, option A-D, valid correct answer, explanation, active status
      const hasId = !!q.id && q.id.trim().length > 0;
      const hasQuestion = !!q.question && q.question.trim().length >= 10;
      const hasOptions = Array.isArray(q.options) && q.options.length === 4 && q.options.every(o => o && o.text && o.text.trim().length > 0);
      const hasValidAnswer = ['A', 'B', 'C', 'D'].includes(q.correctAnswer);
      const hasExplanation = !!q.explanation && q.explanation.trim().length >= 10;

      const isValid = hasId && hasQuestion && hasOptions && hasValidAnswer && hasExplanation;
      const isDraft = q.status === 'DRAFT' || (q as any).isDraft === true;
      const isActive = isValid && !isDuplicate && !isDraft && q.status !== 'ARCHIVED';

      evaluated.push({
        q,
        category: cat,
        subject: subj,
        isValid,
        isDuplicate: !!isDuplicate,
        isDraft,
        isActive
      });
    }

    // Build rows according to EXPECTED QUESTION BANK STRUCTURE
    const rows: SubjectAuditRow[] = [];

    for (const group of AUDIT_STRUCTURE) {
      for (const subj of group.subjects) {
        // Find matching evaluated questions
        const matching = evaluated.filter(e => {
          const matchCat = e.category.toLowerCase() === group.category.toLowerCase() || 
            (group.category === 'Guru Kelas' && ['literasi', 'numerasi', 'sains'].includes(e.subject.toLowerCase()));
          const matchSubj = e.subject.toLowerCase() === subj.toLowerCase();
          return matchCat && matchSubj;
        });

        const actualCount = matching.length;
        const activeCount = matching.filter(m => m.isActive).length;
        const draftCount = matching.filter(m => m.isDraft).length;
        const invalidCount = matching.filter(m => !m.isValid).length;
        const duplicateCount = matching.filter(m => m.isDuplicate).length;
        const targetCount = 50;
        const deficitCount = Math.max(0, targetCount - activeCount);

        rows.push({
          category: group.category,
          subject: subj,
          actualCount,
          activeCount,
          draftCount,
          invalidCount,
          duplicateCount,
          targetCount,
          deficitCount
        });
      }
    }

    const totalActual = rows.reduce((acc, r) => acc + r.actualCount, 0);
    const totalActive = rows.reduce((acc, r) => acc + r.activeCount, 0);
    const totalDraft = rows.reduce((acc, r) => acc + r.draftCount, 0);
    const totalInvalid = rows.reduce((acc, r) => acc + r.invalidCount, 0);
    const totalDuplicate = rows.reduce((acc, r) => acc + r.duplicateCount, 0);
    const grandTarget = 1450;
    const grandDeficit = Math.max(0, grandTarget - totalActive);

    // Determine current state based on real records
    let currentState: 'STATE_A' | 'STATE_B' | 'STATE_C' | 'STATE_D' | 'STATE_E' = 'STATE_B';
    let currentStateDescription = '';

    if (totalActive >= 1450) {
      currentState = 'STATE_A';
      currentStateDescription = 'STATE A: Semua/hampir seluruh 1.450 butir soal target telah tersedia sebagai rekaman data riil.';
    } else if (totalActive > 0) {
      currentState = 'STATE_B';
      currentStateDescription = `STATE B: Hanya sebagian butir soal yang sudah tersedia sebagai data riil aktif (${totalActive} butir pada kategori Guru Kelas: Literasi 50, Numerasi 50, Sains 50). Sebanyak ${grandDeficit} butir soal pada kategori lainnya masih berupa target dan belum ada rekaman data aktualnya di database.`;
    } else {
      currentState = 'STATE_D';
      currentStateDescription = 'STATE D: Belum ada rekaman soal aktual yang tersimpan.';
    }

    const report: BankAuditReport = {
      timestamp: new Date().toISOString(),
      currentState,
      currentStateDescription,
      dataSource: 'Database JSON Server (`server_data/db.json`) dengan initial seed data TypeScript (`src/data/literacyQuestions.ts`, `src/data/numeracyQuestions.ts`, `src/data/scienceQuestions.ts`).',
      totalActual,
      totalActive,
      totalDraft,
      totalInvalid,
      totalDuplicate,
      grandTarget,
      grandDeficit,
      rows
    };

    return res.json({ audit: report });
  } catch (err) {
    console.error('Audit bank soal error:', err);
    return res.status(500).json({ error: 'Gagal menjalankan audit bank soal.' });
  }
});

// GET /api/admin/reports
app.get('/api/admin/reports', authMiddleware, requireAdmin, (req: AuthenticatedRequest, res: Response) => {
  return res.json({ reports: db.reports });
});

// POST /api/admin/reports/:id/resolve
app.post('/api/admin/reports/:id/resolve', authMiddleware, requireAdmin, (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;
  const report = db.reports.find(r => r.id === id);
  if (!report) return res.status(404).json({ error: 'Laporan tidak ditemukan.' });

  report.status = 'resolved';
  persistDatabase();
  return res.json({ success: true, report });
});

// POST /api/admin/questions (Add question)
app.post('/api/admin/questions', authMiddleware, requireAdmin, (req: AuthenticatedRequest, res: Response) => {
  try {
    const q: Question = req.body;
    if (!q.question || !q.options || q.options.length !== 4 || !q.correctAnswer || !q.explanation) {
      return res.status(400).json({ error: 'Lengkapi semua kolom wajib butir soal.' });
    }

    const newQuestion: Question = {
      ...q,
      id: q.id || `CUST_${Date.now()}_${crypto.randomUUID().slice(0, 4)}`,
      isCustom: true
    };

    db.questions.unshift(newQuestion);
    persistDatabase();

    return res.status(201).json({ success: true, question: newQuestion });
  } catch (err) {
    return res.status(500).json({ error: 'Gagal menyimpan butir soal baru.' });
  }
});

// PUT /api/admin/questions/:id (Update question)
app.put('/api/admin/questions/:id', authMiddleware, requireAdmin, (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    const index = db.questions.findIndex(q => q.id === id);
    if (index === -1) return res.status(404).json({ error: 'Butir soal tidak ditemukan.' });

    db.questions[index] = { ...req.body, id };
    persistDatabase();

    return res.json({ success: true, question: db.questions[index] });
  } catch (err) {
    return res.status(500).json({ error: 'Gagal memperbarui butir soal.' });
  }
});

// DELETE /api/admin/questions/:id (Delete question)
app.delete('/api/admin/questions/:id', authMiddleware, requireAdmin, (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    const beforeCount = db.questions.length;
    db.questions = db.questions.filter(q => q.id !== id);

    if (db.questions.length === beforeCount) {
      return res.status(404).json({ error: 'Butir soal tidak ditemukan.' });
    }

    persistDatabase();
    return res.json({ success: true, message: 'Butir soal berhasil dihapus.' });
  } catch (err) {
    return res.status(500).json({ error: 'Gagal menghapus butir soal.' });
  }
});

// POST /api/admin/questions/import (Bulk import)
app.post('/api/admin/questions/import', authMiddleware, requireAdmin, (req: AuthenticatedRequest, res: Response) => {
  try {
    const { questions } = req.body;
    if (!Array.isArray(questions) || questions.length === 0) {
      return res.status(400).json({ error: 'Format JSON harus berupa array butir soal.' });
    }

    let added = 0;
    const existingIds = new Set(db.questions.map(q => q.id));

    for (const q of questions) {
      if (q.question && q.options && q.correctAnswer) {
        const id = q.id && !existingIds.has(q.id) ? q.id : `IMP_${Date.now()}_${crypto.randomUUID().slice(0, 4)}`;
        db.questions.unshift({ ...q, id, isCustom: true });
        existingIds.add(id);
        added++;
      }
    }

    persistDatabase();
    return res.json({ success: true, addedCount: added });
  } catch (err) {
    return res.status(500).json({ error: 'Gagal mengimpor file butir soal.' });
  }
});

// GET /api/admin/ai-usage
app.get('/api/admin/ai-usage', authMiddleware, requireAdmin, (req: AuthenticatedRequest, res: Response) => {
  return res.json({ aiMetrics: db.aiMetrics });
});

// GET /api/admin/users (User management list)
app.get('/api/admin/users', authMiddleware, requireAdmin, (req: AuthenticatedRequest, res: Response) => {
  try {
    const userList = Object.values(db.users).map(u => {
      const history = db.userHistory[u.id] || [];
      const totalScore = history.reduce((acc, h) => acc + h.score, 0);
      const averageScore = history.length > 0 ? Math.round(totalScore / history.length) : 0;

      return {
        id: u.id,
        name: u.name,
        email: u.email,
        whatsapp: u.whatsapp,
        madrasah: u.madrasah,
        city: u.city,
        category: u.category || 'Guru Kelas',
        role: u.role,
        status: u.status || 'ACTIVE',
        accessCode: u.accessCode,
        package: u.package || '180 Hari',
        accessStartDate: u.accessStartDate,
        accessEndDate: u.accessEndDate,
        accessType: u.accessType || 'ALL',
        allowedCategories: u.allowedCategories,
        allowedSubjects: u.allowedSubjects,
        educationLevels: u.educationLevels || ['MI'],
        accessMode: u.accessMode || (u.accessType === 'CUSTOM' ? 'SELECTED' : 'ALL'),
        educationAccess: u.educationAccess,
        registrationSource: u.registrationSource || 'ADMIN',
        createdBy: u.createdBy,
        isGuest: u.isGuest,
        createdAt: u.createdAt,
        lastActive: u.lastActive,
        totalSessions: history.length,
        averageScore
      };
    });

    // Sort by createdAt descending
    userList.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return res.json({ users: userList });
  } catch (err) {
    console.error('Error fetching admin users', err);
    return res.status(500).json({ error: 'Gagal memuat daftar pengguna sistem.' });
  }
});

// POST /api/admin/users/create-manual (Method 2: Super Admin creates user manually with instant ACTIVE code)
app.post('/api/admin/users/create-manual', authMiddleware, requireAdmin, (req: AuthenticatedRequest, res: Response) => {
  try {
    const {
      name,
      whatsapp,
      madrasah,
      city,
      category,
      package: accessPackage,
      customStartDate,
      customEndDate,
      accessType,
      allowedCategories,
      allowedSubjects,
      educationLevels,
      accessMode,
      educationAccess
    } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({ error: 'Nama lengkap pengguna wajib diisi.' });
    }
    if (!category) {
      return res.status(400).json({ error: 'Kategori AKGTK wajib dipilih.' });
    }
    if (!accessPackage) {
      return res.status(400).json({ error: 'Paket akses wajib ditentukan.' });
    }

    const cleanWhatsapp = (whatsapp || '').trim();
    if (cleanWhatsapp) {
      const duplicateWhatsapp = Object.values(db.users).find(u => u.whatsapp && u.whatsapp.trim() === cleanWhatsapp);
      if (duplicateWhatsapp) {
        return res.status(409).json({
          error: `Nomor WhatsApp ${cleanWhatsapp} sudah terdaftar atas nama ${duplicateWhatsapp.name} (Kode Akses: ${duplicateWhatsapp.accessCode || '-'}).`
        });
      }
    }

    const finalEducationLevels: EducationLevel[] = (educationLevels && educationLevels.length > 0)
      ? educationLevels
      : ['MI'];
    const finalAccessMode: LevelAccessMode = accessMode || (accessType === 'CUSTOM' ? 'SELECTED' : 'ALL');
    const finalEducationAccess: EducationAccessMap = educationAccess || {
      MI: {
        mode: finalAccessMode,
        allowedCategories: allowedCategories || [category as AkgtkCategory],
        allowedSubjects: allowedSubjects || ['literasi', 'numerasi', 'sains']
      },
      MTs: { mode: 'NONE', allowedCategories: [], allowedSubjects: [] },
      MA: { mode: 'NONE', allowedCategories: [], allowedSubjects: [] }
    };

    const userId = `usr_${crypto.randomUUID()}`;
    const generatedEmail = `user_${cleanWhatsapp.replace(/\D/g, '') || crypto.randomUUID().slice(0, 8)}@akgtk.id`;
    const accessCode = getUniqueAccessCode(finalEducationLevels[0] || 'MI');
    const { startDate, endDate } = calculatePackageDates(accessPackage, customStartDate, customEndDate);
    const superAdminId = req.user!.id;

    const newUser = {
      id: userId,
      email: generatedEmail,
      passwordHash: 'access_code_only',
      name: name.trim(),
      whatsapp: cleanWhatsapp || undefined,
      madrasah: madrasah ? madrasah.trim() : undefined,
      city: city ? city.trim() : undefined,
      category: category as AkgtkCategory,
      role: 'USER' as UserRole,
      status: 'ACTIVE' as UserAccountStatus,
      accessCode,
      package: accessPackage as AccessPackage,
      accessStartDate: startDate,
      accessEndDate: endDate,
      accessType: (finalAccessMode === 'SELECTED' ? 'CUSTOM' : 'ALL') as 'ALL' | 'CUSTOM',
      allowedCategories: (finalAccessMode === 'SELECTED' && allowedCategories && allowedCategories.length > 0)
        ? allowedCategories
        : [category as AkgtkCategory],
      allowedSubjects: (allowedSubjects && allowedSubjects.length > 0)
        ? allowedSubjects
        : (['literasi', 'numerasi', 'sains'] as ('literasi' | 'numerasi' | 'sains')[]),
      educationLevels: finalEducationLevels,
      accessMode: finalAccessMode,
      educationAccess: finalEducationAccess,
      registrationSource: 'ADMIN' as RegistrationSource,
      createdBy: superAdminId,
      isGuest: false,
      createdAt: new Date().toISOString(),
      lastActive: new Date().toISOString(),
      bookmarks: [],
      wrongQuestions: []
    };

    db.users[userId] = newUser;
    persistDatabase();

    const whatsappMessage = generateWhatsAppMessage(newUser.name, accessCode, accessPackage);

    return res.status(201).json({
      success: true,
      accessCode,
      whatsappMessage,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        whatsapp: newUser.whatsapp,
        madrasah: newUser.madrasah,
        city: newUser.city,
        category: newUser.category,
        role: newUser.role,
        status: newUser.status,
        accessCode: newUser.accessCode,
        package: newUser.package,
        accessStartDate: newUser.accessStartDate,
        accessEndDate: newUser.accessEndDate,
        accessType: newUser.accessType,
        allowedCategories: newUser.allowedCategories,
        allowedSubjects: newUser.allowedSubjects,
        educationLevels: newUser.educationLevels,
        accessMode: newUser.accessMode,
        educationAccess: newUser.educationAccess,
        registrationSource: newUser.registrationSource,
        createdBy: newUser.createdBy,
        isGuest: false,
        createdAt: newUser.createdAt,
        lastActive: newUser.lastActive,
        totalSessions: 0,
        averageScore: 0
      }
    });
  } catch (err) {
    console.error('Create manual user error', err);
    return res.status(500).json({ error: 'Gagal membuat pengguna baru.' });
  }
});

// POST /api/admin/users/:userId/approve (Method 1: Super Admin approves pending user)
app.post('/api/admin/users/:userId/approve', authMiddleware, requireAdmin, (req: AuthenticatedRequest, res: Response) => {
  try {
    const { userId } = req.params;
    const {
      package: accessPackage = '180 Hari',
      customStartDate,
      customEndDate,
      accessType = 'ALL',
      allowedCategories,
      allowedSubjects
    } = req.body;

    const user = db.users[userId];
    if (!user) {
      return res.status(404).json({ error: 'Pengguna tidak ditemukan.' });
    }

    const { startDate, endDate } = calculatePackageDates(accessPackage, customStartDate, customEndDate);
    const accessCode = user.accessCode || getUniqueAccessCode();

    user.status = 'ACTIVE';
    user.accessCode = accessCode;
    user.package = accessPackage as AccessPackage;
    user.accessStartDate = startDate;
    user.accessEndDate = endDate;
    user.accessType = accessType === 'CUSTOM' ? 'CUSTOM' : 'ALL';
    if (accessType === 'CUSTOM' && allowedCategories && allowedCategories.length > 0) {
      user.allowedCategories = allowedCategories;
    } else {
      user.allowedCategories = [user.category || 'Guru Kelas'];
    }
    if (allowedSubjects && allowedSubjects.length > 0) {
      user.allowedSubjects = allowedSubjects;
    } else {
      user.allowedSubjects = ['literasi', 'numerasi', 'sains'];
    }
    user.approvedBy = req.user!.id;
    user.approvedAt = new Date().toISOString();

    persistDatabase();

    const whatsappMessage = generateWhatsAppMessage(user.name, accessCode, accessPackage);

    return res.json({
      success: true,
      message: `Akun ${user.name} berhasil disetujui dan diaktifkan.`,
      accessCode,
      whatsappMessage,
      user
    });
  } catch (err) {
    console.error('Approve user error', err);
    return res.status(500).json({ error: 'Gagal menyetujui akun pengguna.' });
  }
});

// POST /api/admin/users/:userId/extend (Extend user access period)
app.post('/api/admin/users/:userId/extend', authMiddleware, requireAdmin, (req: AuthenticatedRequest, res: Response) => {
  try {
    const { userId } = req.params;
    const { days, newEndDate } = req.body;

    const user = db.users[userId];
    if (!user) {
      return res.status(404).json({ error: 'Pengguna tidak ditemukan.' });
    }

    let end = user.accessEndDate ? new Date(user.accessEndDate) : new Date();
    if (end.getTime() < Date.now()) {
      end = new Date();
    }

    if (newEndDate) {
      end = new Date(newEndDate);
    } else {
      const addDays = Number(days) || 30;
      end.setDate(end.getDate() + addDays);
    }

    user.accessEndDate = end.toISOString();
    if (user.status === 'EXPIRED') {
      user.status = 'ACTIVE';
    }

    persistDatabase();

    const formattedDate = new Date(user.accessEndDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    return res.json({
      success: true,
      message: `Masa aktif ${user.name} berhasil diperpanjang hingga ${formattedDate}.`,
      accessEndDate: user.accessEndDate
    });
  } catch (err) {
    console.error('Extend access error', err);
    return res.status(500).json({ error: 'Gagal memperpanjang masa akses pengguna.' });
  }
});

// POST /api/admin/users/:userId/reset-code (Regenerate new access code)
app.post('/api/admin/users/:userId/reset-code', authMiddleware, requireAdmin, (req: AuthenticatedRequest, res: Response) => {
  try {
    const { userId } = req.params;
    const user = db.users[userId];
    if (!user) {
      return res.status(404).json({ error: 'Pengguna tidak ditemukan.' });
    }

    const newCode = getUniqueAccessCode();
    user.accessCode = newCode;
    persistDatabase();

    const whatsappMessage = generateWhatsAppMessage(user.name, newCode, user.package || '180 Hari');

    return res.json({
      success: true,
      message: `Kode akses untuk ${user.name} berhasil di-reset menjadi ${newCode}.`,
      accessCode: newCode,
      whatsappMessage
    });
  } catch (err) {
    console.error('Reset code error', err);
    return res.status(500).json({ error: 'Gagal mereset kode akses.' });
  }
});

// POST /api/admin/users/:userId/toggle-block (Block or Unblock user)
app.post('/api/admin/users/:userId/toggle-block', authMiddleware, requireAdmin, (req: AuthenticatedRequest, res: Response) => {
  try {
    const { userId } = req.params;
    const user = db.users[userId];
    if (!user) {
      return res.status(404).json({ error: 'Pengguna tidak ditemukan.' });
    }

    if (user.id === req.user!.id) {
      return res.status(400).json({ error: 'Tidak dapat menonaktifkan akun yang sedang aktif Anda gunakan.' });
    }

    user.status = (user.status === 'BLOCKED') ? 'ACTIVE' : 'BLOCKED';
    persistDatabase();

    return res.json({
      success: true,
      message: `Status akun ${user.name} berhasil diubah menjadi [${user.status}].`,
      status: user.status
    });
  } catch (err) {
    console.error('Toggle block error', err);
    return res.status(500).json({ error: 'Gagal mengubah status akun pengguna.' });
  }
});

// PUT /api/admin/users/:userId (Edit user profile: Name, WhatsApp, Madrasah, City, Category, Access Permissions)
// PRESERVES PROGRESS, SCORES, HISTORY, AND INTERNAL USER ID
app.put('/api/admin/users/:userId', authMiddleware, requireAdmin, (req: AuthenticatedRequest, res: Response) => {
  try {
    const { userId } = req.params;
    const {
      name,
      whatsapp,
      madrasah,
      city,
      category,
      package: accessPackage,
      accessType,
      allowedCategories,
      allowedSubjects,
      educationLevels,
      accessMode,
      educationAccess
    } = req.body;

    const user = db.users[userId];
    if (!user) {
      return res.status(404).json({ error: 'Pengguna tidak ditemukan.' });
    }

    if (name && name.trim()) user.name = name.trim();
    if (whatsapp !== undefined) user.whatsapp = whatsapp.trim() || undefined;
    if (madrasah !== undefined) user.madrasah = madrasah.trim() || undefined;
    if (city !== undefined) user.city = city.trim() || undefined;
    if (category) user.category = category as AkgtkCategory;
    if (accessPackage) user.package = accessPackage as AccessPackage;
    if (accessType) user.accessType = accessType;
    if (allowedCategories) user.allowedCategories = allowedCategories;
    if (allowedSubjects) user.allowedSubjects = allowedSubjects;
    if (educationLevels) user.educationLevels = educationLevels;
    if (accessMode) user.accessMode = accessMode;
    if (educationAccess) user.educationAccess = educationAccess;

    // Notice: user.id, userHistory, sessions, bookmarks, wrongQuestions remain completely untouched!
    persistDatabase();

    return res.json({
      success: true,
      message: `Data profil pengguna ${user.name} berhasil diperbarui.`,
      user
    });
  } catch (err) {
    console.error('Update user profile error', err);
    return res.status(500).json({ error: 'Gagal memperbarui profil pengguna.' });
  }
});

// PUT /api/admin/users/:userId/role (Super Admin promotes or demotes user role)
app.put('/api/admin/users/:userId/role', authMiddleware, requireSuperAdmin, (req: AuthenticatedRequest, res: Response) => {
  try {
    const { userId } = req.params;
    const { role } = req.body;

    if (!['USER', 'ADMIN', 'SUPER_ADMIN'].includes(role)) {
      return res.status(400).json({ error: 'Peran pengguna tidak valid. Pilih: USER, ADMIN, atau SUPER_ADMIN.' });
    }

    const targetUser = db.users[userId];
    if (!targetUser) {
      return res.status(404).json({ error: 'Pengguna tidak ditemukan.' });
    }

    // Safety: ensure at least one SUPER_ADMIN remains in the system
    if (targetUser.role === 'SUPER_ADMIN' && role !== 'SUPER_ADMIN') {
      const superAdmins = Object.values(db.users).filter(u => u.role === 'SUPER_ADMIN');
      if (superAdmins.length <= 1) {
        return res.status(400).json({
          error: 'Tidak dapat mencabut hak akses: Sistem wajib memiliki minimal satu Super Admin aktif.'
        });
      }
    }

    targetUser.role = role as UserRole;
    persistDatabase();

    const history = db.userHistory[targetUser.id] || [];
    const totalScore = history.reduce((acc, h) => acc + h.score, 0);
    const averageScore = history.length > 0 ? Math.round(totalScore / history.length) : 0;

    return res.json({
      success: true,
      user: {
        id: targetUser.id,
        name: targetUser.name,
        email: targetUser.email,
        role: targetUser.role,
        isGuest: targetUser.isGuest,
        createdAt: targetUser.createdAt,
        lastActive: targetUser.lastActive,
        totalSessions: history.length,
        averageScore
      },
      message: `Peran pengguna ${targetUser.name} berhasil diperbarui menjadi ${role}.`
    });
  } catch (err) {
    console.error('Update role error', err);
    return res.status(500).json({ error: 'Gagal mengubah peran pengguna.' });
  }
});

// DELETE /api/admin/users/:userId (Super Admin or Admin deletes user)
app.delete('/api/admin/users/:userId', authMiddleware, requireAdmin, (req: AuthenticatedRequest, res: Response) => {
  try {
    const { userId } = req.params;
    const currentAdminId = req.user!.id;
    const currentAdminRole = req.user!.role;

    if (userId === currentAdminId) {
      return res.status(400).json({ error: 'Anda tidak dapat menghapus akun Anda sendiri saat sedang aktif.' });
    }

    const targetUser = db.users[userId];
    if (!targetUser) {
      return res.status(404).json({ error: 'Pengguna tidak ditemukan dalam sistem.' });
    }

    // Role check: If current admin is NOT Super Admin, they cannot delete other ADMIN or SUPER_ADMIN
    if (currentAdminRole !== 'SUPER_ADMIN') {
      if (targetUser.role === 'SUPER_ADMIN' || targetUser.role === 'ADMIN') {
        return res.status(403).json({ error: 'Hanya Super Administrator yang berhak menghapus akun Pengelola/Admin.' });
      }
    }

    if (targetUser.role === 'SUPER_ADMIN') {
      const superAdmins = Object.values(db.users).filter(u => u.role === 'SUPER_ADMIN');
      if (superAdmins.length <= 1) {
        return res.status(400).json({ error: 'Tidak dapat menghapus satu-satunya akun Super Admin pada sistem.' });
      }
    }

    // Remove user, history, sessions, tokens
    delete db.users[userId];
    delete db.userHistory[userId];
    for (const [token, data] of Object.entries(db.tokens)) {
      if (data.userId === userId) delete db.tokens[token];
    }
    for (const [sId, sess] of Object.entries(db.sessions)) {
      if (sess.userId === userId) delete db.sessions[sId];
    }

    persistDatabase();
    return res.json({ success: true, message: `Akun ${targetUser.name} (${targetUser.email}) berhasil dihapus permanen.` });
  } catch (err) {
    console.error('Delete user error', err);
    return res.status(500).json({ error: 'Gagal menghapus pengguna dari sistem.' });
  }
});

// POST /api/admin/users (Create user with specific role from Admin panel)
app.post('/api/admin/users', authMiddleware, requireSuperAdmin, (req: AuthenticatedRequest, res: Response) => {
  try {
    const { name, email, password, role = 'USER' } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Nama lengkap, email, dan kata sandi wajib diisi.' });
    }

    if (!['USER', 'ADMIN', 'SUPER_ADMIN'].includes(role)) {
      return res.status(400).json({ error: 'Peran pengguna tidak valid.' });
    }

    const emailTrimmed = email.trim().toLowerCase();
    const existing = Object.values(db.users).find(u => u.email.toLowerCase() === emailTrimmed);
    if (existing) {
      return res.status(409).json({ error: 'Email sudah digunakan oleh akun lain.' });
    }

    const newUserId = `usr_${crypto.randomUUID()}`;
    const newUser = {
      id: newUserId,
      email: emailTrimmed,
      passwordHash: password,
      name: name.trim(),
      role: role as UserRole,
      isGuest: false,
      createdAt: new Date().toISOString(),
      lastActive: new Date().toISOString(),
      bookmarks: [],
      wrongQuestions: []
    };

    db.users[newUserId] = newUser;
    persistDatabase();

    return res.status(201).json({
      success: true,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        isGuest: false,
        createdAt: newUser.createdAt,
        lastActive: newUser.lastActive,
        totalSessions: 0,
        averageScore: 0
      }
    });
  } catch (err) {
    console.error('Create admin user error', err);
    return res.status(500).json({ error: 'Gagal menambahkan akun pengguna.' });
  }
});

// GET /api/admin/questions/validate (Automated question bank quality check)
app.get('/api/admin/questions/validate', authMiddleware, requireAdmin, (req: AuthenticatedRequest, res: Response) => {
  try {
    const issues: any[] = [];
    const questionTextMap = new Map<string, string[]>();

    db.questions.forEach((q) => {
      const qTextNorm = q.question.trim().toLowerCase();
      if (!questionTextMap.has(qTextNorm)) {
        questionTextMap.set(qTextNorm, []);
      }
      questionTextMap.get(qTextNorm)!.push(q.id);

      // Check explanation
      if (!q.explanation || q.explanation.trim().length < 10) {
        issues.push({
          questionId: q.id,
          category: q.category,
          questionSnippet: q.question.slice(0, 70) + (q.question.length > 70 ? '...' : ''),
          issueType: 'missing_explanation',
          description: 'Pembahasan belum diisi atau terlalu ringkas (< 10 karakter).'
        });
      }

      // Check options
      if (!q.options || q.options.length !== 4) {
        issues.push({
          questionId: q.id,
          category: q.category,
          questionSnippet: q.question.slice(0, 70) + (q.question.length > 70 ? '...' : ''),
          issueType: 'invalid_options',
          description: `Jumlah opsi tidak tepat 4 (terdeteksi: ${q.options ? q.options.length : 0} opsi).`
        });
      }

      // Check correct answer
      if (!['A', 'B', 'C', 'D'].includes(q.correctAnswer)) {
        issues.push({
          questionId: q.id,
          category: q.category,
          questionSnippet: q.question.slice(0, 70) + (q.question.length > 70 ? '...' : ''),
          issueType: 'invalid_correct_answer',
          description: `Kunci jawaban '${q.correctAnswer}' tidak valid (wajib A, B, C, atau D).`
        });
      }

      // Check literacy passage
      if (q.category === 'literasi' && (!q.passage || q.passage.trim().length < 20)) {
        issues.push({
          questionId: q.id,
          category: q.category,
          questionSnippet: q.question.slice(0, 70) + (q.question.length > 70 ? '...' : ''),
          issueType: 'missing_passage',
          description: 'Soal literasi membaca memerlukan teks stimulus/wacana minimal 20 karakter.'
        });
      }
    });

    // Check duplicate texts
    questionTextMap.forEach((ids, text) => {
      if (ids.length > 1) {
        ids.forEach(qId => {
          const q = db.questions.find(item => item.id === qId);
          issues.push({
            questionId: qId,
            category: q ? q.category : 'literasi',
            questionSnippet: text.slice(0, 70) + '...',
            issueType: 'duplicate_text',
            description: `Teks pertanyaan terdeteksi terduplikasi pada butir lain (${ids.join(', ')}).`
          });
        });
      }
    });

    const totalChecked = db.questions.length;
    const questionsWithIssues = new Set(issues.map(i => i.questionId)).size;
    const healthScore = totalChecked > 0 ? Math.max(0, Math.round(((totalChecked - questionsWithIssues) / totalChecked) * 100)) : 100;

    return res.json({
      report: {
        totalChecked,
        healthScore,
        totalIssues: issues.length,
        issues
      }
    });
  } catch (err) {
    console.error('Validation error', err);
    return res.status(500).json({ error: 'Gagal menjalankan validasi bank soal.' });
  }
});


// Mutex lock for AI generation to prevent rapid parallel spamming
let isAiGenerating = false;
let lastAiRequestTime = 0;

// POST /api/admin/generate-questions (AI Generator using Gemini - Server-side only)
app.post('/api/admin/generate-questions', authMiddleware, requireAdmin, async (req: AuthenticatedRequest, res: Response) => {
  const now = Date.now();

  // Rate limiting & mutex lock
  if (isAiGenerating) {
    return res.status(429).json({ error: 'Sedang memproses permintaan pembuatan soal sebelumnya. Harap tunggu hingga selesai.' });
  }

  if (now - lastAiRequestTime < 5000) {
    return res.status(429).json({ error: 'Harap beri jeda 5 detik antar permintaan pembuatan soal.' });
  }

  const { category = 'literasi', difficulty = 'sedang', count = 3, topic = '' } = req.body;
  const requestedCount = Math.min(5, Math.max(1, parseInt(count) || 3));

  if (!process.env.GEMINI_API_KEY) {
    return res.status(503).json({
      error: 'GEMINI_API_KEY belum dikonfigurasi pada environment server. Harap konfigurasi API Key terlebih dahulu.'
    });
  }

  isAiGenerating = true;
  lastAiRequestTime = now;
  db.aiMetrics.totalRequests++;

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const prompt = `Anda adalah tim ahli penyusun naskah soal Asesmen Kompetensi Guru dan Tenaga Kependidikan (AKGTK) Kementerian Agama RI.
Buatkan ${requestedCount} butir soal pilihan ganda HOTS (High Order Thinking Skills) untuk domain: ${category.toUpperCase()}, tingkat kesulitan: ${difficulty.toUpperCase()}${topic ? `, dengan fokus topik: ${topic}` : ''}.

Kriteria wajib:
1. Soal harus berbasis stimulus kasus nyata di madrasah/sekolah atau data faktual (wacana narasi, tabel data, atau eksperimen ilmiah).
2. Pilihan jawaban 4 opsi (A, B, C, D) dengan pengecoh yang logis dan setara panjangnya.
3. Kunci jawaban dan pembahasan mendalam disertai analisis mengapa pilihan lain keliru (whyWrong).
4. Tips praktis penyelesaian cepat soal.

Format output HARUS berupa JSON murni (array of objects) tanpa format markdown pembungkus lain:
[
  {
    "category": "${category}",
    "difficulty": "${difficulty}",
    "competency": "Nama kompetensi spesifik",
    "passage": "Teks stimulus wacana atau konteks kasus nyata...",
    "question": "Pertanyaan pokok...",
    "options": [
      { "id": "A", "text": "Pilihan A" },
      { "id": "B", "text": "Pilihan B" },
      { "id": "C", "text": "Pilihan C" },
      { "id": "D", "text": "Pilihan D" }
    ],
    "correctAnswer": "A",
    "explanation": "Pembahasan ilmiah dan alasan kunci jawaban benar...",
    "whyWrong": {
      "B": "Alasan opsi B salah",
      "C": "Alasan opsi C salah",
      "D": "Alasan opsi D salah"
    },
    "tip": "Tips cepat menyelesaikan soal ini"
  }
]`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json'
      }
    });

    const responseText = response.text || '[]';
    let generated: Question[] = [];

    try {
      generated = JSON.parse(responseText);
    } catch {
      // Fallback clean markdown block if present
      const cleaned = responseText.replace(/```json\s*/g, '').replace(/```\s*$/g, '').trim();
      generated = JSON.parse(cleaned);
    }

    if (!Array.isArray(generated) || generated.length === 0) {
      throw new Error('Format respon AI tidak sesuai.');
    }

    // Assign IDs
    const preparedQuestions = generated.map((q, idx) => ({
      ...q,
      id: `AI_GEN_${Date.now()}_${idx + 1}`,
      isCustom: true
    }));

    db.aiMetrics.successfulRequests++;
    db.aiMetrics.questionsGenerated += preparedQuestions.length;
    db.aiMetrics.lastUsedAt = new Date().toISOString();
    db.aiMetrics.recentLogs.unshift({
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      category: category as QuestionCategory,
      count: preparedQuestions.length,
      status: 'success'
    });
    if (db.aiMetrics.recentLogs.length > 20) db.aiMetrics.recentLogs.pop();

    persistDatabase();

    return res.json({
      success: true,
      questions: preparedQuestions,
      message: `Berhasil membuat ${preparedQuestions.length} butir soal berkualitas tinggi melalui Gemini AI.`
    });
  } catch (err: any) {
    console.error('AI Generation error:', err);
    db.aiMetrics.failedRequests++;
    db.aiMetrics.recentLogs.unshift({
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      category: category as QuestionCategory,
      count: requestedCount,
      status: 'failed',
      error: err?.message || 'Error API Gemini'
    });
    persistDatabase();

    return res.status(500).json({
      error: 'Gagal membuat soal melalui AI. Silakan coba kembali sesaat lagi.'
    });
  } finally {
    isAiGenerating = false;
  }
});

// GET /api/health (Healthcheck & load testing verification)
app.get('/api/health', (req: Request, res: Response) => {
  return res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    totalQuestions: db.questions.length,
    activeSessions: Object.values(db.sessions).filter(s => s.status === 'active').length,
    totalUsers: Object.keys(db.users).length
  });
});

// -------------------------------------------------------------
// STATIC & VITE INTEGRATION
// -------------------------------------------------------------

async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[SERVER] AKGTK Smart Practice server running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch(err => {
  console.error('Failed to start server', err);
});
