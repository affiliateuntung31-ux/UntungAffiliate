import React, { useState } from 'react';
import { 
  X, 
  UserCheck, 
  AlertCircle, 
  Save, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  Eye,
  Layers,
  Phone,
  School,
  MapPin
} from 'lucide-react';
import { 
  AdminManagedUser, 
  AkgtkCategory, 
  AccessPackage, 
  EducationLevel, 
  LevelAccessMode,
  EducationAccessMap
} from '../types';
import { api } from '../services/apiClient';

interface EditUserModalProps {
  user: AdminManagedUser;
  isOpen: boolean;
  onClose: () => void;
  onUserUpdated: (updatedUser: AdminManagedUser) => void;
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

export const EditUserModal: React.FC<EditUserModalProps> = ({
  user,
  isOpen,
  onClose,
  onUserUpdated
}) => {
  // Identity fields
  const [name, setName] = useState(user.name);
  const [whatsapp, setWhatsapp] = useState(user.whatsapp || '');
  const [madrasah, setMadrasah] = useState(user.madrasah || '');
  const [city, setCity] = useState(user.city || '');
  const [category, setCategory] = useState<AkgtkCategory>(user.category || 'Guru Kelas');
  const [accessPackage, setAccessPackage] = useState<AccessPackage>(user.package || '180 Hari');
  const [status, setStatus] = useState<'ACTIVE' | 'BLOCKED'>(
    user.status === 'BLOCKED' ? 'BLOCKED' : 'ACTIVE'
  );

  // Education Levels
  const initialLevels: EducationLevel[] = (user.educationLevels && user.educationLevels.length > 0)
    ? user.educationLevels
    : ['MI'];
  const [selectedLevels, setSelectedLevels] = useState<EducationLevel[]>(initialLevels);

  // Access Mode
  const initialMode: LevelAccessMode = user.accessMode || (user.accessType === 'CUSTOM' ? 'SELECTED' : 'ALL');
  const [accessMode, setAccessMode] = useState<LevelAccessMode>(initialMode);

  // Subjects selection
  const initialMiSubjects: string[] = user.educationAccess?.MI?.allowedSubjects || 
    (user.allowedSubjects && user.allowedSubjects.length > 0 ? user.allowedSubjects : ['pedagogik', 'literasi', 'numerasi', 'sains']);
  const [miSubjects, setMiSubjects] = useState<string[]>(initialMiSubjects);

  const initialMtsSubjects: string[] = user.educationAccess?.MTs?.allowedSubjects || [];
  const [mtsSubjects, setMtsSubjects] = useState<string[]>(initialMtsSubjects);

  const initialMaSubjects: string[] = user.educationAccess?.MA?.allowedSubjects || [];
  const [maSubjects, setMaSubjects] = useState<string[]>(initialMaSubjects);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

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
      setError('Nama pengguna wajib diisi.');
      return;
    }

    if (selectedLevels.length === 0) {
      setError('Pilih minimal 1 jenjang pendidikan (MI / MTs / MA).');
      return;
    }

    setLoading(true);
    setError(null);

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

    try {
      const updated = await api.updateUserProfile(user.id, {
        name: name.trim(),
        whatsapp: whatsapp.trim() || undefined,
        madrasah: madrasah.trim() || undefined,
        city: city.trim() || undefined,
        category,
        package: accessPackage,
        status,
        accessType: accessMode === 'SELECTED' ? 'CUSTOM' : 'ALL',
        allowedCategories: accessMode === 'ALL'
          ? ['Guru Kelas', 'Rumpun PAI', 'STEM', 'Umum', 'Kepala Madrasah', 'Pengawas', 'Laboran', 'Pustakawan']
          : [category],
        allowedSubjects: (accessMode === 'SELECTED' ? miSubjects : ['pedagogik', 'literasi', 'numerasi', 'sains']) as any,
        educationLevels: selectedLevels,
        accessMode,
        educationAccess
      });

      onUserUpdated(updated);
      onClose();
    } catch (err: any) {
      setError(err.message || 'Gagal memperbarui profil pengguna.');
    } finally {
      setLoading(false);
    }
  };

  // Pre-calculate categories active vs locked for the Access Summary
  const gkAllSubjs = [
    { id: 'pedagogik', name: 'Pedagogik' },
    { id: 'literasi', name: 'Literasi' },
    { id: 'numerasi', name: 'Numerasi' },
    { id: 'sains', name: 'Sains' }
  ];

  const paiAllSubjs = [
    { id: 'quran_hadits', name: "Qur'an Hadits" },
    { id: 'akidah_akhlak', name: 'Akidah Akhlak' },
    { id: 'fikih', name: 'Fikih' },
    { id: 'ski', name: 'SKI' },
    { id: 'bahasa_arab', name: 'Bahasa Arab' }
  ];

  const miGkActive = accessMode === 'ALL' ? gkAllSubjs.map(s => s.name) : (accessMode === 'NONE' ? [] : gkAllSubjs.filter(s => miSubjects.includes(s.id)).map(s => s.name));
  const miGkLocked = accessMode === 'ALL' ? [] : (accessMode === 'NONE' ? gkAllSubjs.map(s => s.name) : gkAllSubjs.filter(s => !miSubjects.includes(s.id)).map(s => s.name));

  const miPaiActive = accessMode === 'ALL' ? paiAllSubjs.map(s => s.name) : (accessMode === 'NONE' ? [] : paiAllSubjs.filter(s => miSubjects.includes(s.id)).map(s => s.name));
  const miPaiLocked = accessMode === 'ALL' ? [] : (accessMode === 'NONE' ? paiAllSubjs.map(s => s.name) : paiAllSubjs.filter(s => !miSubjects.includes(s.id)).map(s => s.name));

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

        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
            <UserCheck className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Edit Data & Hak Akses Pengguna
            </h3>
            <p className="text-xs text-slate-500">
              ID: <span className="font-mono font-bold text-slate-700">{user.id}</span> • Riwayat tes & skor tersimpan aman
            </p>
          </div>
        </div>

        {error && (
          <div className="mb-5 flex items-start gap-2 rounded-xl bg-rose-50 p-3 text-xs text-rose-700 border border-rose-200">
            <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 1. IDENTITAS AKUN */}
          <div className="rounded-2xl border border-slate-200 p-4 space-y-3 bg-slate-50/50">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              1. Identitas Akun
            </span>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nama Lengkap & Gelar <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none bg-white font-semibold"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nomor WhatsApp
                </label>
                <div className="relative">
                  <Phone className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
                  <input
                    type="tel"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 pl-8 pr-2.5 py-2 text-xs focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none bg-white"
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
                    className="w-full rounded-xl border border-slate-300 pl-8 pr-2.5 py-2 text-xs focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none bg-white"
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
                    className="w-full rounded-xl border border-slate-300 pl-8 pr-2.5 py-2 text-xs focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none bg-white"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Kategori Utama
                </label>
                <select
                  value={category}
                  onChange={e => setCategory(e.target.value as AkgtkCategory)}
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-800 bg-white focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none"
                >
                  {CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Paket Akses
                </label>
                <select
                  value={accessPackage}
                  onChange={e => setAccessPackage(e.target.value as AccessPackage)}
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-800 bg-white focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none"
                >
                  {PACKAGES.map(pkg => (
                    <option key={pkg} value={pkg}>{pkg}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Status Akun
                </label>
                <select
                  value={status}
                  onChange={e => setStatus(e.target.value as any)}
                  className={`w-full rounded-xl border px-3 py-2 text-xs font-bold outline-none ${
                    status === 'ACTIVE'
                      ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                      : 'border-rose-300 bg-rose-50 text-rose-800'
                  }`}
                >
                  <option value="ACTIVE">Aktif (Bisa Masuk)</option>
                  <option value="BLOCKED">Diblokir (Akses Dinonaktifkan)</option>
                </select>
              </div>
            </div>
          </div>

          {/* 2. HAK AKSES */}
          <div className="rounded-2xl border-2 border-indigo-200 p-4 space-y-4 bg-indigo-50/20">
            <div className="flex items-center justify-between border-b border-indigo-100 pb-2.5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-indigo-700" />
                <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">
                  HAK AKSES
                </h4>
              </div>
              <span className="text-[11px] font-mono font-bold text-slate-600">
                Kode Akses: <strong className="text-indigo-800">{user.accessCode || '-'}</strong>
              </span>
            </div>

            {/* Education Level checkboxes */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">
                Education Level:
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {(['MI', 'MTs', 'MA'] as EducationLevel[]).map(lvl => {
                  const isChecked = selectedLevels.includes(lvl);
                  return (
                    <label
                      key={lvl}
                      className={`flex items-center justify-between p-2.5 rounded-xl border-2 cursor-pointer transition-all select-none ${
                        isChecked
                          ? 'border-indigo-600 bg-indigo-50/90 text-indigo-950 font-bold shadow-xs'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleToggleLevel(lvl)}
                          className="h-4 w-4 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="text-xs font-black">{lvl}</span>
                      </div>
                      {lvl === 'MI' ? (
                        <span className="text-[9px] font-bold text-emerald-700 bg-emerald-100 px-1 py-0.2 rounded">
                          Aktif
                        </span>
                      ) : (
                        <span className="text-[9px] font-semibold text-slate-400 bg-slate-100 px-1 py-0.2 rounded">
                          Disiapkan
                        </span>
                      )}
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Access Mode Radios */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">
                Access Mode:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'NONE', label: 'Tidak Ada Akses' },
                  { id: 'SELECTED', label: 'Akses Terpilih' },
                  { id: 'ALL', label: 'Akses Semua' }
                ].map(item => {
                  const isSelected = accessMode === item.id;
                  return (
                    <label
                      key={item.id}
                      className={`flex items-center gap-2 p-2.5 rounded-xl border-2 cursor-pointer transition-all text-xs font-bold ${
                        isSelected
                          ? 'border-indigo-600 bg-indigo-50/90 text-indigo-950 ring-1 ring-indigo-600/30'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="editAccessMode"
                        value={item.id}
                        checked={isSelected}
                        onChange={() => setAccessMode(item.id as LevelAccessMode)}
                        className="text-indigo-600 focus:ring-indigo-500"
                      />
                      <span>{item.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* If AKSES TERPILIH, show Categories & Subjects */}
            {accessMode === 'SELECTED' && (
              <div className="rounded-xl border border-indigo-200 bg-white p-3.5 space-y-3.5 animate-in fade-in">
                <span className="text-xs font-bold text-indigo-950 uppercase tracking-wide block">
                  Pilih Modul & Mata Pelajaran Spesifik:
                </span>

                {selectedLevels.includes('MI') && (
                  <div className="space-y-3">
                    <span className="rounded bg-indigo-100 px-2 py-0.5 text-[11px] font-black text-indigo-900 inline-block">
                      JENJANG MI
                    </span>

                    {/* Guru Kelas */}
                    <div className="rounded-lg border border-slate-200 p-2.5 bg-slate-50/60">
                      <span className="text-[11px] font-extrabold text-slate-800 block mb-1.5">
                        GURU KELAS
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
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
                              className={`flex items-center gap-1.5 p-1.5 rounded border text-xs cursor-pointer select-none ${
                                checked
                                  ? 'bg-indigo-50 border-indigo-300 font-bold text-indigo-900'
                                  : 'bg-white border-slate-200 text-slate-600'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => toggleSubjectForLevel('MI', sub.id)}
                                className="rounded text-indigo-600 focus:ring-indigo-500"
                              />
                              <span>{sub.label}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    {/* Rumpun PAI */}
                    <div className="rounded-lg border border-slate-200 p-2.5 bg-slate-50/60">
                      <span className="text-[11px] font-extrabold text-slate-800 block mb-1.5">
                        RUMPUN PAI
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
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
                              className={`flex items-center gap-1.5 p-1.5 rounded border text-xs cursor-pointer select-none ${
                                checked
                                  ? 'bg-emerald-50 border-emerald-300 font-bold text-emerald-900'
                                  : 'bg-white border-slate-200 text-slate-600'
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
              </div>
            )}
          </div>

          {/* 3. ACCESS SUMMARY (EXACT SPECIFICATION VISUAL PANEL) */}
          <div className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-4 space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-black uppercase text-slate-700 tracking-wider">
              <Eye className="h-4 w-4 text-purple-700" />
              <span>ACCESS SUMMARY (RINGKASAN HAK AKSES)</span>
            </div>

            <div className="rounded-xl bg-white p-3.5 border border-slate-200 text-xs space-y-2 text-slate-800">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div>
                  <span className="text-slate-400 block text-[10px]">Pendidikan:</span>
                  <span className="font-extrabold text-sm text-purple-900">{selectedLevels.join(', ')}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Mode Akses:</span>
                  <span className={`font-extrabold text-sm ${
                    accessMode === 'ALL' ? 'text-emerald-700' : accessMode === 'SELECTED' ? 'text-purple-700' : 'text-rose-700'
                  }`}>
                    {accessMode === 'ALL' ? 'Akses Semua' : accessMode === 'SELECTED' ? 'Akses Terpilih' : 'Tidak Ada Akses'}
                  </span>
                </div>
              </div>

              {accessMode === 'ALL' && (
                <div className="pt-1">
                  <span className="font-bold text-slate-900 block mb-0.5">Hak Akses:</span>
                  <p className="text-emerald-700 font-medium">
                    Semua modul & mata pelajaran aktif pada jenjang {selectedLevels.join(', ')} (Wildcard penuh).
                  </p>
                </div>
              )}

              {accessMode === 'NONE' && (
                <div className="pt-1">
                  <span className="font-bold text-rose-800 block mb-0.5">Hak Akses:</span>
                  <p className="text-rose-600 font-medium">
                    Tidak ada akses ke modul atau bank soal apa pun.
                  </p>
                </div>
              )}

              {accessMode === 'SELECTED' && (
                <div className="pt-1 space-y-2">
                  <div>
                    <span className="font-bold text-emerald-800 block mb-1">
                      Kategori Aktif:
                    </span>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-700 font-medium pl-1">
                      {miGkActive.length > 0 && (
                        <li>
                          <strong>Guru Kelas:</strong> {miGkActive.join(', ')}
                        </li>
                      )}
                      {miPaiActive.length > 0 && (
                        <li>
                          <strong>Rumpun PAI:</strong> {miPaiActive.join(', ')}
                        </li>
                      )}
                      {miGkActive.length === 0 && miPaiActive.length === 0 && (
                        <li className="text-slate-400 italic">Belum ada mata pelajaran aktif yang dipilih</li>
                      )}
                    </ul>
                  </div>

                  <div>
                    <span className="font-bold text-slate-500 block mb-1">
                      Kategori Terkunci:
                    </span>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-500 pl-1">
                      {miGkLocked.length > 0 && (
                        <li>
                          <strong>Guru Kelas:</strong> {miGkLocked.join(', ')}
                        </li>
                      )}
                      {miPaiLocked.length > 0 && (
                        <li>
                          <strong>Rumpun PAI:</strong> {miPaiLocked.join(', ')}
                        </li>
                      )}
                      {miGkLocked.length === 0 && miPaiLocked.length === 0 && (
                        <li className="text-emerald-600">Tidak ada kategori terkunci pada jenjang MI.</li>
                      )}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="rounded-xl border border-slate-300 px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer disabled:opacity-50"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-2.5 text-xs font-extrabold text-white shadow-md hover:bg-indigo-700 cursor-pointer disabled:opacity-50 transition-all"
            >
              {loading ? (
                <>
                  <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  <span>Menyimpan...</span>
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  <span>Simpan Perubahan</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
