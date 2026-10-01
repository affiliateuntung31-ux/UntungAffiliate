import React, { useState } from 'react';
import { 
  GraduationCap, 
  Lock, 
  Mail, 
  User, 
  ShieldCheck, 
  UserCheck, 
  Sparkles, 
  AlertCircle, 
  ArrowRight, 
  HelpCircle, 
  Shield, 
  X,
  CheckCircle2,
  KeyRound,
  Phone,
  School,
  MapPin,
  Send,
  ExternalLink
} from 'lucide-react';
import { api } from '../services/apiClient';
import { AuthUser, AkgtkCategory } from '../types';
import { LYNK_CHECKOUT_URL, redirectToCheckout } from '../constants';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthSuccess: (user: AuthUser, redirectToAdmin?: boolean) => void;
  initialTab?: 'code' | 'login' | 'admin' | 'register' | 'demo';
}

const CATEGORY_OPTIONS: AkgtkCategory[] = [
  'Guru Kelas',
  'Rumpun PAI',
  'STEM',
  'Umum',
  'Kepala Madrasah',
  'Pengawas',
  'Laboran',
  'Pustakawan'
];

export const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose, 
  onAuthSuccess,
  initialTab = 'code'
}) => {
  const [activeTab, setActiveTab] = useState<'code' | 'login' | 'admin' | 'register' | 'demo'>(initialTab);
  
  // Access code login
  const [accessCodeInput, setAccessCodeInput] = useState('');

  // Self-registration state
  const [regName, setRegName] = useState('');
  const [regWhatsapp, setRegWhatsapp] = useState('');
  const [regMadrasah, setRegMadrasah] = useState('');
  const [regCity, setRegCity] = useState('');
  const [regCategory, setRegCategory] = useState<AkgtkCategory>('Guru Kelas');
  const [regSuccessMessage, setRegSuccessMessage] = useState<string | null>(null);

  // Standard user email/pass
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Admin login state
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  // Handle Login with Access Code
  const handleCodeLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accessCodeInput.trim()) {
      setError('Silakan masukkan kode akses Anda.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const { user } = await api.loginWithCode(accessCodeInput.trim());
      const isPrivileged = user.role === 'ADMIN' || user.role === 'SUPER_ADMIN';
      onAuthSuccess(user, isPrivileged);
      onClose();
    } catch (err: any) {
      setError(err.message || 'Kode akses tidak valid atau telah kedaluwarsa.');
    } finally {
      setLoading(false);
    }
  };

  // Handle Self-Registration Request (Method 1: Pending -> Super Admin approval)
  const handleRegisterRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName.trim()) {
      setError('Nama lengkap wajib diisi.');
      return;
    }
    if (!regCategory) {
      setError('Kategori AKGTK wajib dipilih.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await api.registerRequest({
        name: regName.trim(),
        whatsapp: regWhatsapp.trim() || undefined,
        madrasah: regMadrasah.trim() || undefined,
        city: regCity.trim() || undefined,
        category: regCategory
      });
      setRegSuccessMessage(res.message || 'Pendaftaran berhasil dikirim! Menunggu persetujuan Super Admin.');
    } catch (err: any) {
      setError(err.message || 'Gagal mengajukan pendaftaran. Silakan coba kembali.');
    } finally {
      setLoading(false);
    }
  };

  // Handle standard email user login
  const handleUserLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Email dan kata sandi wajib diisi.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const { user } = await api.login(email, password);
      const isPrivileged = user.role === 'ADMIN' || user.role === 'SUPER_ADMIN';
      onAuthSuccess(user, isPrivileged);
      onClose();
    } catch (err: any) {
      setError(err.message || 'Gagal masuk. Silakan periksa kembali email dan kata sandi.');
    } finally {
      setLoading(false);
    }
  };

  // Handle Admin & Super Admin secure login
  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminEmail || !adminPassword) {
      setError('Email dan kata sandi administrator wajib diisi.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const { user } = await api.login(adminEmail, adminPassword);

      // Verify role securely
      if (user.role !== 'ADMIN' && user.role !== 'SUPER_ADMIN') {
        setError('Akses ditolak. Akun ini tidak memiliki hak akses Administrator atau Super Admin.');
        return;
      }

      onAuthSuccess(user, true); // Redirect to /admin
      onClose();
    } catch (err: any) {
      setError(err.message || 'Otentikasi Administrator gagal. Periksa kembali email dan kata sandi Anda.');
    } finally {
      setLoading(false);
    }
  };

  // Demo accounts
  const handleDemoLogin = async (role: 'guru' | 'admin' | 'superadmin' | 'guest') => {
    setLoading(true);
    setError(null);
    try {
      if (role === 'guest') {
        const { user } = await api.guestLogin();
        onAuthSuccess(user, false);
        onClose();
        return;
      }

      let creds = { email: 'guru@madrasah.id', password: 'guru123' };
      if (role === 'admin') creds = { email: 'admin@akgtk.id', password: 'admin123' };
      if (role === 'superadmin') creds = { email: 'superadmin@kemenag.go.id', password: 'super123' };

      const { user } = await api.login(creds.email, creds.password);
      const isPrivileged = user.role === 'ADMIN' || user.role === 'SUPER_ADMIN';
      onAuthSuccess(user, isPrivileged);
      onClose();
    } catch (err: any) {
      setError(err.message || 'Gagal masuk akun demo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-slate-200 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors cursor-pointer"
          title="Tutup"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-5">
          <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl shadow-md text-white ${
            activeTab === 'admin' 
              ? 'bg-gradient-to-tr from-purple-700 via-indigo-700 to-indigo-600 ring-2 ring-purple-400/30' 
              : activeTab === 'code'
              ? 'bg-gradient-to-tr from-emerald-600 via-teal-600 to-teal-500 ring-2 ring-emerald-400/20'
              : 'bg-gradient-to-tr from-emerald-600 to-teal-500'
          }`}>
            {activeTab === 'admin' ? (
              <Shield className="h-6 w-6" />
            ) : activeTab === 'code' ? (
              <KeyRound className="h-6 w-6" />
            ) : (
              <GraduationCap className="h-7 w-7" />
            )}
          </div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            {activeTab === 'admin' 
              ? 'Portal Masuk Administrator' 
              : activeTab === 'code' 
              ? 'Masuk dengan Kode Akses' 
              : activeTab === 'register'
              ? 'Pendaftaran Akses AKGTK'
              : 'Masuk ke AKGTK SMART PRACTICE'}
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            {activeTab === 'admin' 
              ? 'Otentikasi aman khusus Super Admin dan Administrator Pengelola'
              : activeTab === 'code'
              ? 'Masukkan kode akses resmi untuk membuka materi dan bank soal'
              : activeTab === 'register'
              ? 'Isi formulir untuk mendapatkan persetujuan & kode akses dari Super Admin'
              : 'Simpan progres belajar, riwayat simulasi CBT, dan analisis kompetensi'}
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex rounded-xl bg-slate-100 p-1 mb-5 text-xs font-semibold text-slate-600 overflow-x-auto">
          <button
            type="button"
            onClick={() => { setActiveTab('code'); setError(null); setRegSuccessMessage(null); }}
            className={`flex-1 min-w-[75px] rounded-lg py-2 transition-all flex items-center justify-center gap-1 cursor-pointer ${
              activeTab === 'code' ? 'bg-white text-emerald-700 shadow-xs font-bold' : 'hover:text-slate-900'
            }`}
          >
            <KeyRound className="h-3.5 w-3.5" />
            Kode
          </button>
          <button
            type="button"
            onClick={() => { setActiveTab('login'); setError(null); setRegSuccessMessage(null); }}
            className={`flex-1 min-w-[65px] rounded-lg py-2 transition-all cursor-pointer ${
              activeTab === 'login' ? 'bg-white text-emerald-700 shadow-xs font-bold' : 'hover:text-slate-900'
            }`}
          >
            Email
          </button>
          <a
            href={LYNK_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[65px] rounded-lg py-2 transition-all text-emerald-700 hover:text-emerald-900 cursor-pointer flex items-center justify-center gap-1"
            title="Daftar / Beli Akses di Lynk"
          >
            <span>Daftar</span>
            <ExternalLink className="h-3 w-3" />
          </a>
          <button
            type="button"
            onClick={() => { setActiveTab('admin'); setError(null); setRegSuccessMessage(null); }}
            className={`flex-1 min-w-[75px] rounded-lg py-2 transition-all flex items-center justify-center gap-1 cursor-pointer ${
              activeTab === 'admin' ? 'bg-purple-700 text-white shadow-xs font-bold' : 'hover:text-purple-700'
            }`}
          >
            <Shield className="h-3.5 w-3.5" />
            Admin
          </button>
          <button
            type="button"
            onClick={() => { setActiveTab('demo'); setError(null); setRegSuccessMessage(null); }}
            className={`flex-1 min-w-[55px] rounded-lg py-2 transition-all cursor-pointer ${
              activeTab === 'demo' ? 'bg-white text-emerald-700 shadow-xs font-bold' : 'hover:text-slate-900'
            }`}
          >
            Demo
          </button>
        </div>

        {/* Error Notification */}
        {error && (
          <div className="mb-4 flex items-start gap-2 rounded-xl bg-rose-50 p-3 text-xs text-rose-700 ring-1 ring-rose-200">
            <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* TAB 0: LOGIN WITH ACCESS CODE (PRIMARY) */}
        {activeTab === 'code' && (
          <form onSubmit={handleCodeLogin} className="space-y-4">
            <div className="rounded-xl bg-emerald-50/60 p-3 text-xs text-emerald-900 border border-emerald-200">
              <div className="flex items-center gap-2 font-bold mb-1">
                <KeyRound className="h-4 w-4 text-emerald-700" />
                <span>Masuk Cepat dengan Kode Akses</span>
              </div>
              <p className="text-[11px] text-emerald-700 leading-relaxed">
                Gunakan Kode Akses yang diberikan oleh Super Admin atau setelah pendaftaran Anda disetujui.
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Kode Akses AKGTK <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <KeyRound className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={accessCodeInput}
                  onChange={e => setAccessCodeInput(e.target.value.toUpperCase())}
                  placeholder="Contoh: AKGTK-X7P4K9"
                  className="w-full rounded-xl border border-slate-300 pl-10 pr-3 py-2.5 text-sm font-mono tracking-wider uppercase focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                  required
                  autoFocus
                />
              </div>
              <p className="mt-1.5 text-[11px] text-slate-400">
                Format: <strong>AKGTK-XXXXXX</strong> (huruf kapital dan angka)
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white shadow-md hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-400 focus:outline-none disabled:opacity-50 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  <span>Memverifikasi Kode...</span>
                </>
              ) : (
                <>
                  <KeyRound className="h-4 w-4" />
                  <span>Masuk dengan Kode</span>
                </>
              )}
            </button>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Belum punya kode akses?</span>
              <a
                href={LYNK_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-emerald-700 hover:text-emerald-800 cursor-pointer flex items-center gap-1"
              >
                <span>Ajukan Pendaftaran</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </form>
        )}

        {/* TAB 1: REGULAR USER EMAIL LOGIN */}
        {activeTab === 'login' && (
          <form onSubmit={handleUserLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Email Peserta / Guru</label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="nama@madrasah.id"
                  className="w-full rounded-xl border border-slate-300 pl-9 pr-3 py-2 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Kata Sandi</label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-300 pl-9 pr-3 py-2 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-emerald-600 py-2.5 text-sm font-bold text-white shadow-md hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-400 focus:outline-none disabled:opacity-50 transition-all cursor-pointer"
            >
              {loading ? 'Memverifikasi...' : 'Masuk dengan Email'}
            </button>

            {/* Link to Code Login */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Punya Kode Akses AKGTK?</span>
              <button
                type="button"
                onClick={() => { setActiveTab('code'); setError(null); }}
                className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
              >
                <KeyRound className="h-3.5 w-3.5" />
                Masuk dengan Kode →
              </button>
            </div>
          </form>
        )}

        {/* TAB 2: SECURE ADMIN LOGIN */}
        {activeTab === 'admin' && (
          <form onSubmit={handleAdminLogin} className="space-y-4">
            <div className="rounded-xl bg-purple-50 p-3 text-xs text-purple-900 border border-purple-200">
              <div className="flex items-center gap-2 font-bold mb-1">
                <ShieldCheck className="h-4 w-4 text-purple-700" />
                <span>Otentikasi Pengelola Sistem</span>
              </div>
              <p className="text-[11px] text-purple-700 leading-relaxed">
                Super Admin dan Administrator akan otomatis diarahkan ke <strong>/admin</strong> setelah otentikasi berhasil diverifikasi oleh server.
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Email Administrator</label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  type="email"
                  value={adminEmail}
                  onChange={e => setAdminEmail(e.target.value)}
                  placeholder="admin@akgtk.id atau superadmin@kemenag.go.id"
                  className="w-full rounded-xl border border-slate-300 pl-9 pr-3 py-2 text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Kata Sandi Administrator</label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  type="password"
                  value={adminPassword}
                  onChange={e => setAdminPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-300 pl-9 pr-3 py-2 text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-purple-700 py-2.5 text-sm font-bold text-white shadow-md hover:bg-purple-800 focus:ring-2 focus:ring-purple-400 focus:outline-none disabled:opacity-50 transition-all cursor-pointer"
            >
              {loading ? 'Memverifikasi Administrator...' : 'Masuk Panel Admin'}
            </button>
          </form>
        )}

        {/* TAB 3: SELF-REGISTRATION (METHOD 1) */}
        {activeTab === 'register' && (
          <div>
            {regSuccessMessage ? (
              <div className="rounded-2xl bg-emerald-50 p-5 text-center border border-emerald-200 space-y-3">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="text-base font-bold text-emerald-900">Pendaftaran Berhasil Dikirim!</h3>
                <p className="text-xs text-emerald-700 leading-relaxed">
                  {regSuccessMessage}
                </p>
                <div className="rounded-xl bg-white p-3 text-xs text-slate-600 text-left border border-emerald-100 space-y-1">
                  <p className="font-semibold text-slate-800">Langkah Selanjutnya:</p>
                  <p>1. Super Admin akan meninjau dan menyetujui akun Anda.</p>
                  <p>2. Anda akan mendapatkan Kode Akses AKGTK.</p>
                  <p>3. Masuk kembali menggunakan menu <strong>"Masuk dengan Kode"</strong>.</p>
                </div>
                <button
                  type="button"
                  onClick={() => { setActiveTab('code'); setRegSuccessMessage(null); setError(null); }}
                  className="w-full rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 transition-colors cursor-pointer"
                >
                  Buka Menu Masuk dengan Kode
                </button>
              </div>
            ) : (
              <form onSubmit={handleRegisterRequest} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nama Lengkap & Gelar <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      value={regName}
                      onChange={e => setRegName(e.target.value)}
                      placeholder="Contoh: Andika Prasetyo, S.Pd."
                      className="w-full rounded-xl border border-slate-300 pl-9 pr-3 py-2 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Nomor WhatsApp Aktif</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type="tel"
                      value={regWhatsapp}
                      onChange={e => setRegWhatsapp(e.target.value)}
                      placeholder="Contoh: 081234567890"
                      className="w-full rounded-xl border border-slate-300 pl-9 pr-3 py-2 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Asal Madrasah</label>
                    <div className="relative">
                      <School className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
                      <input
                        type="text"
                        value={regMadrasah}
                        onChange={e => setRegMadrasah(e.target.value)}
                        placeholder="Contoh: MIN 1 Sleman"
                        className="w-full rounded-xl border border-slate-300 pl-8 pr-2.5 py-2 text-xs focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Kabupaten/Kota</label>
                    <div className="relative">
                      <MapPin className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
                      <input
                        type="text"
                        value={regCity}
                        onChange={e => setRegCity(e.target.value)}
                        placeholder="Contoh: Sleman"
                        className="w-full rounded-xl border border-slate-300 pl-8 pr-2.5 py-2 text-xs focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Kategori AKGTK <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={regCategory}
                    onChange={e => setRegCategory(e.target.value as AkgtkCategory)}
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                  >
                    {CATEGORY_OPTIONS.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 rounded-xl bg-emerald-600 py-2.5 text-sm font-bold text-white shadow-md hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-400 focus:outline-none disabled:opacity-50 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Mengirim Formulir...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Ajukan Pendaftaran Akses</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        )}

        {/* TAB 4: DEMO ACCESS */}
        {activeTab === 'demo' && (
          <div className="space-y-3">
            <div 
              className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-3.5 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all cursor-pointer group"
              onClick={() => handleDemoLogin('guru')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 group-hover:text-emerald-700">
                      Peserta Guru (Madrasah)
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Latihan mandiri, simulasi CBT, dan evaluasi hasil
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>

            <div 
              className="rounded-xl border border-purple-200 bg-purple-50/40 p-3.5 hover:border-purple-400 hover:bg-purple-50 transition-all cursor-pointer group"
              onClick={() => handleDemoLogin('superadmin')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-200 text-purple-800">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 group-hover:text-purple-800 flex items-center gap-1.5">
                      Super Admin Kemenag RI
                      <span className="text-[9px] bg-purple-700 text-white px-1.5 py-0.5 rounded font-bold">SUPER</span>
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Akses penuh manajemen sistem, bank soal, & pengguna
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>

            <div 
              className="rounded-xl border border-indigo-200 bg-indigo-50/30 p-3.5 hover:border-indigo-400 hover:bg-indigo-50 transition-all cursor-pointer group"
              onClick={() => handleDemoLogin('admin')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 group-hover:text-indigo-700">
                      Administrator Bank Soal
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Kurasi butir soal, AI generator, dan statistik
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 text-center">
              <a
                href={LYNK_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Dapatkan Akses Penuh via Lynk
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        )}

        {/* Disclaimer Footer */}
        <div className="mt-6 rounded-lg bg-slate-50 p-2.5 text-[10px] text-slate-400 text-center leading-tight">
          AKGTK Smart Practice merupakan sarana persiapan mandiri. Akses Administrator dan Super Admin dilindungi enkripsi sesi server.
        </div>
      </div>
    </div>
  );
};
