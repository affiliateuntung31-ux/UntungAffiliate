import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Copy, 
  Check, 
  MessageSquare, 
  UserPlus, 
  Calendar, 
  ShieldCheck, 
  KeyRound, 
  Phone, 
  School, 
  MapPin, 
  Sparkles,
  AlertCircle,
  Lock,
  Layers,
  CheckSquare,
  Square
} from 'lucide-react';
import { 
  AkgtkCategory, 
  AccessPackage, 
  CreatedUserResult, 
  CreateManualUserPayload,
  EducationLevel,
  LevelAccessMode,
  EducationAccessMap
} from '../types';
import { api } from '../services/apiClient';
import { EDUCATION_LEVELS_CONFIG } from '../categoryEngine';

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUserCreated: (result: CreatedUserResult) => void;
}

const CATEGORIES: AkgtkCategory[] = [
  'Guru Kelas',
  'Rumpun PAI',
  'STEM',
  'Umum',
  'Kepala Madrasah',
  'Pengawas',
  'Laboran',
  'Pustakawan'
];

const PACKAGES: AccessPackage[] = [
  'Uji Coba',
  '30 Hari',
  '180 Hari',
  '360 Hari',
  'Custom'
];

export const AddUserModal: React.FC<AddUserModalProps> = ({ 
  isOpen, 
  onClose, 
  onUserCreated 
}) => {
  // 1. Basic User Identity
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [madrasah, setMadrasah] = useState('');
  const [city, setCity] = useState('');
  const [category, setCategory] = useState<AkgtkCategory>('Guru Kelas');
  const [accessPackage, setAccessPackage] = useState<AccessPackage>('180 Hari');
  const [customStartDate, setCustomStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [customEndDate, setCustomEndDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 180);
    return d.toISOString().split('T')[0];
  });

  // 2. Hak Akses (Education Level + Access Mode)
  const [selectedLevels, setSelectedLevels] = useState<EducationLevel[]>(['MI']);
  const [accessMode, setAccessMode] = useState<LevelAccessMode>('ALL');

  // Selected subjects per education level for 'SELECTED' mode
  const [miSubjects, setMiSubjects] = useState<string[]>([
    'pedagogik',
    'literasi',
    'numerasi',
    'sains'
  ]);
  const [mtsSubjects, setMtsSubjects] = useState<string[]>([]);
  const [maSubjects, setMaSubjects] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Success screen state
  const [creationResult, setCreationResult] = useState<CreatedUserResult | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedWa, setCopiedWa] = useState(false);

  if (!isOpen) return null;

  const resetForm = () => {
    setName('');
    setWhatsapp('');
    setMadrasah('');
    setCity('');
    setCategory('Guru Kelas');
    setAccessPackage('180 Hari');
    setSelectedLevels(['MI']);
    setAccessMode('ALL');
    setMiSubjects(['pedagogik', 'literasi', 'numerasi', 'sains']);
    setMtsSubjects([]);
    setMaSubjects([]);
    setError(null);
    setCreationResult(null);
    setCopiedCode(false);
    setCopiedWa(false);
  };

  const handleToggleLevel = (lvl: EducationLevel) => {
    if (selectedLevels.includes(lvl)) {
      if (selectedLevels.length > 1) {
        setSelectedLevels(selectedLevels.filter(l => l !== lvl));
      }
    } else {
      setSelectedLevels([...selectedLevels, lvl]);
    }
  };

  const toggleSubjectForLevel = (lvl: EducationLevel, subjId: string) => {
    if (lvl === 'MI') {
      setMiSubjects(prev => prev.includes(subjId) ? prev.filter(s => s !== subjId) : [...prev, subjId]);
    } else if (lvl === 'MTs') {
      setMtsSubjects(prev => prev.includes(subjId) ? prev.filter(s => s !== subjId) : [...prev, subjId]);
    } else if (lvl === 'MA') {
      setMaSubjects(prev => prev.includes(subjId) ? prev.filter(s => s !== subjId) : [...prev, subjId]);
    }
  };

  const isSubjectSelected = (lvl: EducationLevel, subjId: string) => {
    if (lvl === 'MI') return miSubjects.includes(subjId);
    if (lvl === 'MTs') return mtsSubjects.includes(subjId);
    if (lvl === 'MA') return maSubjects.includes(subjId);
    return false;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Nama lengkap pengguna wajib diisi.');
      return;
    }

    if (selectedLevels.length === 0) {
      setError('Pilih minimal 1 jenjang pendidikan (MI / MTs / MA).');
      return;
    }

    setLoading(true);
    setError(null);

    // Build educationAccess structure
    const educationAccess: EducationAccessMap = {
      MI: {
        mode: selectedLevels.includes('MI') ? accessMode : 'NONE',
        allowedCategories: selectedLevels.includes('MI') && accessMode === 'SELECTED' ? ['guru_kelas', 'rumpun_pai'] : [],
        allowedSubjects: selectedLevels.includes('MI') && accessMode === 'SELECTED' ? miSubjects : []
      },
      MTs: {
        mode: selectedLevels.includes('MTs') ? accessMode : 'NONE',
        allowedCategories: selectedLevels.includes('MTs') && accessMode === 'SELECTED' ? ['rumpun_pai', 'umum'] : [],
        allowedSubjects: selectedLevels.includes('MTs') && accessMode === 'SELECTED' ? mtsSubjects : []
      },
      MA: {
        mode: selectedLevels.includes('MA') ? accessMode : 'NONE',
        allowedCategories: selectedLevels.includes('MA') && accessMode === 'SELECTED' ? ['rumpun_pai', 'peminatan'] : [],
        allowedSubjects: selectedLevels.includes('MA') && accessMode === 'SELECTED' ? maSubjects : []
      }
    };

    const allowedCats: AkgtkCategory[] = accessMode === 'ALL'
      ? ['Guru Kelas', 'Rumpun PAI', 'STEM', 'Umum', 'Kepala Madrasah', 'Pengawas', 'Laboran', 'Pustakawan']
      : [category];

    const payload: CreateManualUserPayload = {
      name: name.trim(),
      whatsapp: whatsapp.trim() || undefined,
      madrasah: madrasah.trim() || undefined,
      city: city.trim() || undefined,
      category,
      package: accessPackage,
      customStartDate: accessPackage === 'Custom' ? customStartDate : undefined,
      customEndDate: accessPackage === 'Custom' ? customEndDate : undefined,
      accessType: accessMode === 'SELECTED' ? 'CUSTOM' : 'ALL',
      allowedCategories: allowedCats,
      allowedSubjects: (accessMode === 'SELECTED' ? miSubjects : ['pedagogik', 'literasi', 'numerasi', 'sains']) as any,
      educationLevels: selectedLevels,
      accessMode,
      educationAccess
    };

    try {
      const result = await api.createManualUser(payload);
      setCreationResult(result);
      onUserCreated(result);
    } catch (err: any) {
      setError(err.message || 'Gagal membuat pengguna baru.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyCode = () => {
    if (!creationResult) return;
    navigator.clipboard.writeText(creationResult.accessCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleCopyWa = () => {
    if (!creationResult) return;
    navigator.clipboard.writeText(creationResult.whatsappMessage);
    setCopiedWa(true);
    setTimeout(() => setCopiedWa(false), 2500);
  };

  const formatDate = (isoString?: string) => {
    if (!isoString) return '-';
    try {
      return new Date(isoString).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    } catch {
      return isoString;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl ring-1 ring-slate-200 max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          disabled={loading}
          className="absolute top-5 right-5 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 cursor-pointer disabled:opacity-50"
        >
          <X className="h-5 w-5" />
        </button>

        {creationResult ? (
          /* ============================================================== */
          /* SUCCESS SCREEN */
          /* ============================================================== */
          <div className="text-center py-2 space-y-6 animate-in zoom-in-95 duration-200">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-600 shadow-inner">
              <CheckCircle2 className="h-10 w-10" />
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200 mb-2">
                <Sparkles className="h-3.5 w-3.5" />
                STATUS: AKTIF SEGERA
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                ✓ PENGGUNA BERHASIL DIBUAT
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Akun telah diaktifkan dengan konfigurasi hak akses spesifik dan siap digunakan.
              </p>
            </div>

            {/* Summary Card */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-left space-y-3">
              <div className="grid grid-cols-2 gap-3 text-xs border-b border-slate-200/80 pb-3">
                <div>
                  <span className="text-slate-400 block text-[11px]">Nama Lengkap</span>
                  <span className="font-bold text-slate-900 text-sm">{creationResult.user.name}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Jenjang & Hak Akses</span>
                  <span className="font-bold text-purple-900 text-sm">
                    {(creationResult.user.educationLevels || ['MI']).join(', ')} • {creationResult.user.accessMode === 'ALL' ? 'Akses Semua' : creationResult.user.accessMode === 'SELECTED' ? 'Akses Terpilih' : 'Tidak Ada Akses'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-xs border-b border-slate-200/80 pb-3">
                <div>
                  <span className="text-slate-400 block text-[11px]">Paket Akses</span>
                  <span className="font-bold text-purple-700">{creationResult.user.package}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Tanggal Mulai</span>
                  <span className="font-medium text-slate-700">{formatDate(creationResult.user.accessStartDate)}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Berakhir</span>
                  <span className="font-medium text-slate-700">{formatDate(creationResult.user.accessEndDate)}</span>
                </div>
              </div>

              {/* Highlighted Access Code */}
              <div className="rounded-xl bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 p-4 text-white text-center shadow-md">
                <span className="text-[11px] font-semibold text-purple-100 uppercase tracking-wider block mb-1">
                  Kode Akses Pengguna
                </span>
                <span className="font-mono text-2xl sm:text-3xl font-black tracking-widest block select-all">
                  {creationResult.accessCode}
                </span>
              </div>
            </div>

            {/* WhatsApp message preview */}
            <div className="rounded-xl bg-emerald-50/70 border border-emerald-200 p-3 text-left">
              <span className="text-[11px] font-bold text-emerald-800 flex items-center gap-1.5 mb-1.5">
                <MessageSquare className="h-3.5 w-3.5" />
                Format Pesan WhatsApp Siap Kirim:
              </span>
              <pre className="text-[11px] text-slate-700 whitespace-pre-wrap font-sans bg-white p-3 rounded-lg border border-emerald-100 leading-relaxed max-h-36 overflow-y-auto">
                {creationResult.whatsappMessage}
              </pre>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              <button
                type="button"
                onClick={handleCopyCode}
                className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 text-xs font-bold text-white shadow-sm hover:bg-black transition-all cursor-pointer"
              >
                {copiedCode ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span>Kode Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>COPY KODE</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleCopyWa}
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 transition-all cursor-pointer"
              >
                {copiedWa ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-200" />
                    <span>Pesan WA Tersalin!</span>
                  </>
                ) : (
                  <>
                    <MessageSquare className="h-4 w-4" />
                    <span>COPY PESAN WHATSAPP</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs">
              <button
                type="button"
                onClick={resetForm}
                className="font-bold text-purple-700 hover:text-purple-900 cursor-pointer flex items-center gap-1"
              >
                <UserPlus className="h-3.5 w-3.5" />
                TAMBAH PENGGUNA LAGI
              </button>
              <button
                type="button"
                onClick={() => { resetForm(); onClose(); }}
                className="rounded-xl border border-slate-300 px-4 py-2 font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                LIHAT PENGGUNA
              </button>
            </div>
          </div>
        ) : (
          /* ============================================================== */
          /* FORM: TAMBAH PENGGUNA BARU */
          /* ============================================================== */
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
                <UserPlus className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  TAMBAH PENGGUNA BARU
                </h3>
                <p className="text-xs text-slate-500">
                  Kontrol hak akses per jenjang (MI, MTs, MA), kategori, dan mata pelajaran
                </p>
              </div>
            </div>

            {error && (
              <div className="mb-5 flex items-start gap-2 rounded-xl bg-rose-50 p-3 text-xs text-rose-700 border border-rose-200">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* 1. INFORMASI IDENTITAS */}
              <div className="rounded-2xl border border-slate-200 p-4 space-y-3 bg-slate-50/50">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  1. Identitas Pengguna
                </span>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nama Lengkap <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Contoh: Andika Prasetyo, S.Pd.I"
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none bg-white font-medium"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      No HP (WhatsApp) <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
                      <input
                        type="tel"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                        placeholder="081234567890"
                        className="w-full rounded-xl border border-slate-300 pl-8 pr-2.5 py-2 text-xs focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none bg-white font-medium"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Asal Madrasah
                    </label>
                    <div className="relative">
                      <School className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
                      <input
                        type="text"
                        value={madrasah}
                        onChange={e => setMadrasah(e.target.value)}
                        placeholder="Contoh: MIN 1 Sleman"
                        className="w-full rounded-xl border border-slate-300 pl-8 pr-2.5 py-2 text-xs focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Kabupaten/Kota
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
                      <input
                        type="text"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        placeholder="Contoh: Sleman"
                        className="w-full rounded-xl border border-slate-300 pl-8 pr-2.5 py-2 text-xs focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none bg-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Kategori AKGTK Utama
                    </label>
                    <select
                      value={category}
                      onChange={e => setCategory(e.target.value as AkgtkCategory)}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-800 bg-white focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none"
                    >
                      {CATEGORIES.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Paket Masa Aktif
                    </label>
                    <select
                      value={accessPackage}
                      onChange={e => setAccessPackage(e.target.value as AccessPackage)}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-800 bg-white focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none"
                    >
                      {PACKAGES.map(pkg => (
                        <option key={pkg} value={pkg}>{pkg}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {accessPackage === 'Custom' && (
                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-200">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Tanggal Mulai
                      </label>
                      <input
                        type="date"
                        value={customStartDate}
                        onChange={e => setCustomStartDate(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 px-3 py-1.5 text-xs bg-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Tanggal Berakhir
                      </label>
                      <input
                        type="date"
                        value={customEndDate}
                        onChange={e => setCustomEndDate(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 px-3 py-1.5 text-xs bg-white"
                        required
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* 2. HAK AKSES (EDUCATION LEVEL + ACCESS MODE) */}
              <div className="rounded-2xl border-2 border-purple-200 p-5 space-y-4 bg-purple-50/20">
                <div className="flex items-center justify-between border-b border-purple-100 pb-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-purple-700" />
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">
                        HAK AKSES
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Atur jenjang madrasah dan mode hak akses pengguna
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800">
                    Kode: AKG-{selectedLevels.includes('MI') ? 'MI' : selectedLevels[0] || 'AKG'}-XXXX
                  </span>
                </div>

                {/* Sub-section A: Education Level Checkboxes */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-2">
                    Education Level:
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {(['MI', 'MTs', 'MA'] as EducationLevel[]).map(lvl => {
                      const isChecked = selectedLevels.includes(lvl);
                      return (
                        <label
                          key={lvl}
                          className={`flex items-center justify-between p-3 rounded-xl border-2 cursor-pointer transition-all select-none ${
                            isChecked
                              ? 'border-purple-600 bg-purple-50/90 text-purple-950 font-bold shadow-xs'
                              : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handleToggleLevel(lvl)}
                              className="h-4 w-4 rounded text-purple-600 focus:ring-purple-500 border-slate-300"
                            />
                            <span className="text-sm font-black">{lvl}</span>
                          </div>
                          {lvl === 'MI' ? (
                            <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded">
                              Aktif
                            </span>
                          ) : (
                            <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-1.5 py-0.2 rounded">
                              Disiapkan
                            </span>
                          )}
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Sub-section B: Access Mode Radio Buttons */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-2">
                    Access Mode:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      { id: 'NONE', label: 'Tidak Ada Akses', desc: 'Hanya melihat dashboard & info' },
                      { id: 'SELECTED', label: 'Akses Terpilih', desc: 'Pilih modul & mapel spesifik' },
                      { id: 'ALL', label: 'Akses Semua', desc: 'Wildcard semua konten jenjang' }
                    ].map(item => {
                      const isSelected = accessMode === item.id;
                      return (
                        <label
                          key={item.id}
                          className={`flex flex-col p-3 rounded-xl border-2 cursor-pointer transition-all ${
                            isSelected
                              ? 'border-purple-600 bg-purple-50/90 text-purple-950 ring-1 ring-purple-600/30'
                              : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-2 font-bold text-xs">
                            <input
                              type="radio"
                              name="accessMode"
                              value={item.id}
                              checked={isSelected}
                              onChange={() => setAccessMode(item.id as LevelAccessMode)}
                              className="text-purple-600 focus:ring-purple-500"
                            />
                            <span>{item.label}</span>
                          </div>
                          <span className="text-[10px] text-slate-500 mt-1 pl-5">
                            {item.desc}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Mode Explanation / Conditional UI */}
                {accessMode === 'NONE' && (
                  <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900 flex items-start gap-2">
                    <Lock className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
                    <div>
                      <span className="font-bold block">Mode: Tidak Ada Akses</span>
                      <span>
                        Pengguna tidak dapat membuka bank soal maupun simulasi. Hanya dapat melihat Dashboard, profil, dan petunjuk memperoleh akses.
                      </span>
                    </div>
                  </div>
                )}

                {accessMode === 'ALL' && (
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-xs text-emerald-900 flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                    <div>
                      <span className="font-bold block">Mode: Akses Semua (Wildcard)</span>
                      <span>
                        Pengguna menerima izin penuh ke <strong>SELURUH</strong> modul dan mata pelajaran aktif yang tersedia pada jenjang yang dicentang ({selectedLevels.join(', ')}).
                      </span>
                    </div>
                  </div>
                )}

                {/* Sub-section C: ACCESS MODE: AKSES TERPILIH */}
                {accessMode === 'SELECTED' && (
                  <div className="rounded-2xl border border-purple-200 bg-white p-4 space-y-4 animate-in fade-in">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <span className="text-xs font-bold text-purple-900 uppercase tracking-wider">
                        Pilih Modul & Mata Pelajaran Spesifik:
                      </span>
                      <span className="text-[11px] text-slate-500">
                        {miSubjects.length + mtsSubjects.length + maSubjects.length} mapel dipilih
                      </span>
                    </div>

                    {/* MI Categories & Subjects */}
                    {selectedLevels.includes('MI') && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="rounded bg-purple-100 px-2 py-0.5 text-xs font-black text-purple-800">
                            JENJANG MI
                          </span>
                          <span className="text-[11px] text-slate-500">Madrasah Ibtidaiyah</span>
                        </div>

                        {/* GURU KELAS */}
                        <div className="rounded-xl border border-slate-200 p-3 bg-slate-50/50">
                          <span className="text-xs font-extrabold text-slate-800 block mb-2">
                            GURU KELAS
                          </span>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {[
                              { id: 'pedagogik', label: 'Pedagogik' },
                              { id: 'literasi', label: 'Literasi' },
                              { id: 'numerasi', label: 'Numerasi' },
                              { id: 'sains', label: 'Sains' }
                            ].map(sub => {
                              const checked = isSubjectSelected('MI', sub.id);
                              return (
                                <label
                                  key={sub.id}
                                  className={`flex items-center gap-2 p-2 rounded-lg border text-xs cursor-pointer select-none transition-all ${
                                    checked
                                      ? 'bg-purple-50 border-purple-300 font-bold text-purple-900'
                                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                                  }`}
                                >
                                  <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={() => toggleSubjectForLevel('MI', sub.id)}
                                    className="rounded text-purple-600 focus:ring-purple-500"
                                  />
                                  <span>{sub.label}</span>
                                </label>
                              );
                            })}
                          </div>
                        </div>

                        {/* RUMPUN PAI */}
                        <div className="rounded-xl border border-slate-200 p-3 bg-slate-50/50">
                          <span className="text-xs font-extrabold text-slate-800 block mb-2">
                            RUMPUN PAI
                          </span>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {[
                              { id: 'quran_hadits', label: "Qur'an Hadits" },
                              { id: 'akidah_akhlak', label: 'Akidah Akhlak' },
                              { id: 'fikih', label: 'Fikih' },
                              { id: 'ski', label: 'SKI' },
                              { id: 'bahasa_arab', label: 'Bahasa Arab' }
                            ].map(sub => {
                              const checked = isSubjectSelected('MI', sub.id);
                              return (
                                <label
                                  key={sub.id}
                                  className={`flex items-center gap-2 p-2 rounded-lg border text-xs cursor-pointer select-none transition-all ${
                                    checked
                                      ? 'bg-emerald-50 border-emerald-300 font-bold text-emerald-900'
                                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                                  }`}
                                >
                                  <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={() => toggleSubjectForLevel('MI', sub.id)}
                                    className="rounded text-emerald-600 focus:ring-emerald-500"
                                  />
                                  <span>{sub.label}</span>
                                </label>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* MTs Categories & Subjects (Prepared architecture) */}
                    {selectedLevels.includes('MTs') && (
                      <div className="space-y-3 pt-2 border-t border-slate-200">
                        <div className="flex items-center gap-2">
                          <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-black text-blue-800">
                            JENJANG MTs
                          </span>
                          <span className="text-[11px] text-slate-500">Madrasah Tsanawiyah (Arsitektur Siap)</span>
                        </div>

                        <div className="rounded-xl border border-slate-200 p-3 bg-slate-50/50">
                          <span className="text-xs font-extrabold text-slate-800 block mb-2">
                            RUMPUN PAI MTs
                          </span>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {[
                              { id: 'quran_hadits', label: "Qur'an Hadits" },
                              { id: 'akidah_akhlak', label: 'Akidah Akhlak' },
                              { id: 'fikih', label: 'Fikih' },
                              { id: 'ski', label: 'SKI' },
                              { id: 'bahasa_arab', label: 'Bahasa Arab' }
                            ].map(sub => (
                              <label
                                key={sub.id}
                                className={`flex items-center gap-2 p-2 rounded-lg border text-xs cursor-pointer select-none ${
                                  isSubjectSelected('MTs', sub.id)
                                    ? 'bg-blue-50 border-blue-300 font-bold text-blue-900'
                                    : 'bg-white border-slate-200 text-slate-600'
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={isSubjectSelected('MTs', sub.id)}
                                  onChange={() => toggleSubjectForLevel('MTs', sub.id)}
                                  className="rounded text-blue-600 focus:ring-blue-500"
                                />
                                <span>{sub.label}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-xl border border-slate-200 p-3 bg-slate-50/50">
                          <span className="text-xs font-extrabold text-slate-800 block mb-2">
                            MATA PELAJARAN UMUM MTs
                          </span>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {[
                              { id: 'bahasa_indonesia', label: 'Bahasa Indonesia' },
                              { id: 'bahasa_inggris', label: 'Bahasa Inggris' },
                              { id: 'matematika', label: 'Matematika' },
                              { id: 'ipa', label: 'IPA' },
                              { id: 'ips', label: 'IPS' }
                            ].map(sub => (
                              <label
                                key={sub.id}
                                className={`flex items-center gap-2 p-2 rounded-lg border text-xs cursor-pointer select-none ${
                                  isSubjectSelected('MTs', sub.id)
                                    ? 'bg-blue-50 border-blue-300 font-bold text-blue-900'
                                    : 'bg-white border-slate-200 text-slate-600'
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={isSubjectSelected('MTs', sub.id)}
                                  onChange={() => toggleSubjectForLevel('MTs', sub.id)}
                                  className="rounded text-blue-600 focus:ring-blue-500"
                                />
                                <span>{sub.label}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* MA Categories & Subjects (Prepared architecture) */}
                    {selectedLevels.includes('MA') && (
                      <div className="space-y-3 pt-2 border-t border-slate-200">
                        <div className="flex items-center gap-2">
                          <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-black text-amber-800">
                            JENJANG MA
                          </span>
                          <span className="text-[11px] text-slate-500">Madrasah Aliyah (Arsitektur Siap)</span>
                        </div>

                        <div className="rounded-xl border border-slate-200 p-3 bg-slate-50/50">
                          <span className="text-xs font-extrabold text-slate-800 block mb-2">
                            RUMPUN PAI MA
                          </span>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {[
                              { id: 'quran_hadits', label: "Qur'an Hadits" },
                              { id: 'akidah_akhlak', label: 'Akidah Akhlak' },
                              { id: 'fikih', label: 'Fikih' },
                              { id: 'ski', label: 'SKI' },
                              { id: 'bahasa_arab', label: 'Bahasa Arab' }
                            ].map(sub => (
                              <label
                                key={sub.id}
                                className={`flex items-center gap-2 p-2 rounded-lg border text-xs cursor-pointer select-none ${
                                  isSubjectSelected('MA', sub.id)
                                    ? 'bg-amber-50 border-amber-300 font-bold text-amber-900'
                                    : 'bg-white border-slate-200 text-slate-600'
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={isSubjectSelected('MA', sub.id)}
                                  onChange={() => toggleSubjectForLevel('MA', sub.id)}
                                  className="rounded text-amber-600 focus:ring-amber-500"
                                />
                                <span>{sub.label}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-xl border border-slate-200 p-3 bg-slate-50/50">
                          <span className="text-xs font-extrabold text-slate-800 block mb-2">
                            PEMINATAN MIPA & IPS MA
                          </span>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {[
                              { id: 'matematika', label: 'Matematika' },
                              { id: 'fisika', label: 'Fisika' },
                              { id: 'kimia', label: 'Kimia' },
                              { id: 'biologi', label: 'Biologi' },
                              { id: 'ekonomi', label: 'Ekonomi' },
                              { id: 'geografi', label: 'Geografi' }
                            ].map(sub => (
                              <label
                                key={sub.id}
                                className={`flex items-center gap-2 p-2 rounded-lg border text-xs cursor-pointer select-none ${
                                  isSubjectSelected('MA', sub.id)
                                    ? 'bg-amber-50 border-amber-300 font-bold text-amber-900'
                                    : 'bg-white border-slate-200 text-slate-600'
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={isSubjectSelected('MA', sub.id)}
                                  onChange={() => toggleSubjectForLevel('MA', sub.id)}
                                  className="rounded text-amber-600 focus:ring-amber-500"
                                />
                                <span>{sub.label}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Submit button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-gradient-to-r from-purple-700 to-indigo-700 py-3.5 text-sm font-black text-white shadow-lg hover:from-purple-800 hover:to-indigo-800 focus:ring-2 focus:ring-purple-400 focus:outline-none disabled:opacity-50 transition-all cursor-pointer flex items-center justify-center gap-2 tracking-wide"
                >
                  {loading ? (
                    <>
                      <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Menyimpan & Men-generate Kode...</span>
                    </>
                  ) : (
                    <>
                      <KeyRound className="h-4 w-4" />
                      <span>BUAT PENGGUNA & GENERATE KODE</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
