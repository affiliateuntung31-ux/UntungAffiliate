import React from 'react';
import { Lock, Sparkles, ExternalLink, KeyRound, X } from 'lucide-react';
import { LYNK_CHECKOUT_URL, redirectToCheckout } from '../constants';

interface MemberAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCodeLogin: () => void;
  title?: string;
  message?: string;
  reason?: string;
}

export const MemberAccessModal: React.FC<MemberAccessModalProps> = ({
  isOpen,
  onClose,
  onOpenCodeLogin,
  title = 'AKSES KHUSUS MEMBER',
  message,
  reason
}) => {
  const displayMessage = reason || message || 'Untuk mulai mengerjakan latihan dan simulasi AKGTK, silakan dapatkan akses terlebih dahulu.';
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-3xl bg-white p-6 sm:p-8 shadow-2xl ring-1 ring-slate-200 text-center">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors cursor-pointer"
          title="Tutup"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Lock Icon */}
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-600/20 ring-4 ring-emerald-50">
          <Lock className="h-7 w-7" />
        </div>

        {/* Title & Message */}
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-800 border border-emerald-200 mb-2">
          <Sparkles className="h-3 w-3 text-emerald-600" />
          Materi & Soal Terproteksi
        </span>

        <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900">
          {title}
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
          {displayMessage}
        </p>

        {/* Action Buttons */}
        <div className="mt-6 space-y-3">
          <a
            href={LYNK_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-emerald-700 active:scale-98 transition-all cursor-pointer"
          >
            <ExternalLink className="h-4 w-4" />
            <span>DAPATKAN AKSES</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onOpenCodeLogin();
            }}
            className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white py-2.5 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-all cursor-pointer"
          >
            <KeyRound className="h-4 w-4 text-emerald-600" />
            <span>SUDAH PUNYA KODE AKSES</span>
          </button>
        </div>

        {/* Info footer */}
        <p className="mt-5 text-[11px] text-slate-400">
          Dapatkan kode akses instan setelah menyelesaikan pemesanan melalui Lynk.
        </p>
      </div>
    </div>
  );
};
