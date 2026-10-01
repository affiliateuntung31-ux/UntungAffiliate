import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_FILE = path.join(__dirname, '..', 'server_data', 'db.json');

interface UserRecord {
  id: string;
  email: string;
  passwordHash: string;
  name: string;
  role: 'USER' | 'ADMIN' | 'SUPER_ADMIN';
  isGuest: boolean;
  createdAt: string;
  lastActive: string;
  bookmarks: string[];
  wrongQuestions: string[];
}

interface DatabaseSchema {
  users: Record<string, UserRecord>;
  [key: string]: any;
}

function run() {
  const args = process.argv.slice(2);

  if (!fs.existsSync(DB_FILE)) {
    console.error(`[ERROR] File database tidak ditemukan di: ${DB_FILE}`);
    console.log('Pastikan aplikasi telah dijalankan minimal satu kali terlebih dahulu.');
    process.exit(1);
  }

  let db: DatabaseSchema;
  try {
    const raw = fs.readFileSync(DB_FILE, 'utf-8');
    db = JSON.parse(raw);
  } catch (err) {
    console.error('[ERROR] Gagal membaca berkas database db.json:', err);
    process.exit(1);
  }

  const existingSuperAdmins = Object.values(db.users || {}).filter(u => u.role === 'SUPER_ADMIN');

  if (args.length === 0) {
    console.log('\n======================================================');
    console.log('🔒 AKGTK SMART PRACTICE - SETUP SUPER ADMIN');
    console.log('======================================================\n');
    console.log('Super Admin saat ini yang terdaftar pada sistem:');
    if (existingSuperAdmins.length === 0) {
      console.log('  (Belum ada akun Super Admin)');
    } else {
      existingSuperAdmins.forEach((sa, i) => {
        console.log(`  ${i + 1}. ${sa.name} <${sa.email}> (ID: ${sa.id})`);
      });
    }

    console.log('\nCARA PENGGUNAAN:\n');
    console.log('1. Menjadikan akun terdaftar yang sudah ada sebagai Super Admin:');
    console.log('   npx tsx scripts/setup-super-admin.ts <email>');
    console.log('   Contoh: npx tsx scripts/setup-super-admin.ts diahikaputri6@gmail.com\n');
    console.log('2. Membuat akun Super Admin baru langsung:');
    console.log('   npx tsx scripts/setup-super-admin.ts <email> <kata_sandi> [nama_lengkap]');
    console.log('   Contoh: npx tsx scripts/setup-super-admin.ts diahikaputri6@gmail.com SandiRahasia123 "Diah Ika Putri, M.Pd."\n');
    console.log('======================================================\n');
    return;
  }

  const targetEmail = args[0].trim().toLowerCase();
  const providedPassword = args[1] ? args[1].trim() : null;
  const providedName = args[2] ? args[2].trim() : null;

  // Search for existing user with this email
  const existingEntry = Object.entries(db.users || {}).find(
    ([, u]) => u.email.toLowerCase() === targetEmail
  );

  if (existingEntry) {
    const [userId, user] = existingEntry;
    user.role = 'SUPER_ADMIN';
    user.isGuest = false;
    user.lastActive = new Date().toISOString();
    if (providedPassword) {
      user.passwordHash = providedPassword;
    }
    if (providedName) {
      user.name = providedName;
    }

    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf-8');

    console.log('\n✅ BERHASIL MEMPERBARUI AKUN SUPER ADMIN:');
    console.log(`   - Nama       : ${user.name}`);
    console.log(`   - Email      : ${user.email}`);
    console.log(`   - Peran      : ${user.role}`);
    console.log(`   - Status Sandi: ${providedPassword ? 'Diperbarui dengan sandi baru' : 'Tetap menggunakan sandi akun yang ada'}`);
    console.log(`   - URL Login  : Masuk via tombol "Masuk Admin" pada halaman login.`);
    console.log('======================================================\n');
    return;
  }

  // User does not exist, create new
  if (!providedPassword) {
    console.error(`\n❌ Pengguna dengan email "${targetEmail}" belum terdaftar di aplikasi.`);
    console.log('Untuk membuat akun Super Admin baru dengan email ini, sertakan kata sandi:');
    console.log(`  npx tsx scripts/setup-super-admin.ts ${targetEmail} <kata_sandi> [nama_lengkap]\n`);
    process.exit(1);
  }

  const newId = `usr_${crypto.randomUUID()}`;
  const newName = providedName || `Super Admin (${targetEmail.split('@')[0]})`;

  const newSuperAdmin: UserRecord = {
    id: newId,
    email: targetEmail,
    passwordHash: providedPassword,
    name: newName,
    role: 'SUPER_ADMIN',
    isGuest: false,
    createdAt: new Date().toISOString(),
    lastActive: new Date().toISOString(),
    bookmarks: [],
    wrongQuestions: []
  };

  db.users[newId] = newSuperAdmin;
  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf-8');

  console.log('\n✅ BERHASIL MEMBUAT AKUN SUPER ADMIN BARU:');
  console.log(`   - Nama       : ${newSuperAdmin.name}`);
  console.log(`   - Email      : ${newSuperAdmin.email}`);
  console.log(`   - Peran      : ${newSuperAdmin.role}`);
  console.log(`   - ID         : ${newSuperAdmin.id}`);
  console.log(`   - URL Login  : Buka aplikasi, klik "Masuk / Akun", pilih "Masuk Admin", lalu masuk.`);
  console.log('======================================================\n');
}

run();
