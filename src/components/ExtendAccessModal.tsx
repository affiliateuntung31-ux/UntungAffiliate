import React, { useState } from 'react';
import { 
  X, 
  Clock, 
  Calendar, 
  Loader2, 
  AlertCircle, 
  Check, 
  ShieldCheck 
} from 'lucide-react';
import { AdminManagedUser } from '../types';
import { api } from '../services/apiClient';

interface ExtendAccessModalProps {
  user: AdminManagedUser;
  isOpen: boolean;
  onClose: () => void;
  onUserUpdated: (updatedUser: AdminManagedUser) => void;
}

export const ExtendAccessModal: React.FC<ExtendAccessModalProps> = ({
  user,
  isOpen,
  onClose,
  onUserUpdated
}) => {
  const [extensionOption, setExtensionOption] = useState<'30' | '180' | '360' | 'custom'>('180');
  const [customDate, setCustomDate] = useState(() => {
    const base = user.accessEndDate ? new Date(user.accessEndDate) : new Date();
    base.setDate(base.getDate() + 180);
    return base.toISOString().split('T')[0];
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentEndFormatted = user.accessEndDate
    ? new Date(user.accessEndDate).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    : 'Belum diatur';

  const handleExtend = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    let days = 180;
    if (extensionOption === '30') days = 30;
    if (extensionOption === '180') days = 180;
    if (extensionOption === '360') days = 360;

    try {
      const updated = await api.extendUserAccess(
        user.id,
        extensionOption === 'custom' ? undefined : days,
        extensionOption === 'custom' ? customDate : undefined
      );
      onUserUpdated(updated);
      onClose();
    } catch (err: any) {
      setError(err.message || 'Gagal memperpanjang masa aktif pengguna.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-slate-200">
        <button
          onClick={onClose}
          disabled={loading}
          className="absolute top-4 right-4 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 cursor-pointer disabled:opacity-50"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Perpanjang Masa Akses</h3>
            <p className="text-xs text-slate-500">{user.name}</p>
          </div>
        </div>

        {error && (
          <div className="mb-4 flex items-start gap-2 rounded-xl bg-rose-50 p-2.5 text-xs text-rose-700">
            <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <div className="rounded-xl bg-slate-50 p-3.5 text-xs border border-slate-200 space-y-1.5 mb-4">
          <div className="flex justify-between">
            <span className="text-slate-500">Masa Berakhir Saat Ini:</span>
            <span className="font-bold text-slate-800">{currentEndFormatted}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Paket Terdaftar:</span>
            <span className="font-semibold text-purple-700">{user.package || '180 Hari'}</span>
          </div>
        </div>

        <form onSubmit={handleExtend} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">
              Pilihan Perpanjangan:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: '30', label: '+30 Hari (1 Bulan)' },
                { id: '180', label: '+180 Hari (6 Bulan)' },
                { id: '360', label: '+360 Hari (1 Tahun)' },
                { id: 'custom', label: 'Tanggal Khusus' }
              ].map(opt => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setExtensionOption(opt.id as any)}
                  className={`rounded-xl py-2 px-3 text-xs font-bold border transition-all cursor-pointer text-left ${
                    extensionOption === opt.id
                      ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-amber-400'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {extensionOption === 'custom' && (
            <div className="pt-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Pilih Tanggal Berakhir Baru:
              </label>
              <input
                type="date"
                value={customDate}
                onChange={e => setCustomDate(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs"
                required
              />
            </div>
          )}

          <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
            <button
              type="button"
              disabled={loading}
              onClick={onClose}
              className="rounded-xl border border-slate-300 px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer disabled:opacity-50"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-1.5 rounded-xl bg-amber-600 px-5 py-2 text-xs font-bold text-white hover:bg-amber-700 disabled:opacity-50 cursor-pointer shadow-sm transition-colors"
            >
              {loading ? (
                <>
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  <span>Menyimpan...</span>
                </>
              ) : (
                <>
                  <Clock className="h-3.5 w-3.5" />
                  <span>Perpanjang Akses</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
