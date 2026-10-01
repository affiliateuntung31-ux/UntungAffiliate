import React from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  Timer, 
  BarChart3, 
  Shuffle, 
  TrendingUp, 
  Smartphone, 
  KeyRound, 
  ExternalLink, 
  ShieldCheck, 
  Users, 
  Calculator, 
  Atom, 
  Layers, 
  ArrowRight,
  HelpCircle,
  Clock,
  Award,
  CreditCard
} from 'lucide-react';
import { LYNK_CHECKOUT_URL, redirectToCheckout } from '../constants';

interface PublicLandingProps {
  onOpenCodeLogin: () => void;
  onOpenAdminLogin: () => void;
}

export const PublicLanding: React.FC<PublicLandingProps> = ({
  onOpenCodeLogin,
  onOpenAdminLogin
}) => {
  const featureList = [
    {
      icon: <BookOpen className="h-5 w-5 text-emerald-600" />,
      title: 'Bank Soal Latihan',
      desc: 'Ratusan butir soal HOTS terstandar (Literasi, Numerasi, Sains) yang dirancang khusus sesuai kisi-kisi AKGTK Kemenag.'
    },
    {
      icon: <CheckCircle2 className="h-5 w-5 text-teal-600" />,
      title: 'Pembahasan Jawaban',
      desc: 'Pembahasan mendalam dan rasionalisasi kunci jawaban per butir soal untuk memperkuat pemahaman konsep.'
    },
    {
      icon: <Timer className="h-5 w-5 text-indigo-600" />,
      title: 'Simulasi AKGTK',
      desc: 'Antarmuka Computer Based Test (CBT) dengan penghitung waktu riil, navigasi soal, dan suasana ujian sesungguhnya.'
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-blue-600" />,
      title: 'Analisis Hasil',
      desc: 'Evaluasi skor diagnostik instan yang memetakan domain terkuat dan materi yang perlu diperdalam.'
    },
    {
      icon: <Shuffle className="h-5 w-5 text-amber-600" />,
      title: 'Latihan Acak',
      desc: 'Penyajian soal dan opsi pilihan diacak otomatis di setiap sesi sehingga Anda dapat berlatih berulang kali tanpa menghafal urutan.'
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-purple-600" />,
      title: 'Progress Belajar',
      desc: 'Riwayat skor kumulatif, bank soal remedial untuk butir yang keliru, dan penanda soal penting tersimpan rapi.'
    },
    {
      icon: <Smartphone className="h-5 w-5 text-rose-600" />,
      title: 'Bisa Diakses di HP & Laptop',
      desc: 'Platform web responsif yang nyaman dibuka di smartphone Android, iOS, tablet, laptop, maupun komputer kantor.'
    }
  ];

  const categories = [
    { name: 'Guru Kelas', desc: 'MI & SD sederajat (Literasi, Numerasi, Sains)' },
    { name: 'Rumpun PAI', desc: 'Akidah Akhlak, Fikih, SKI, Al-Quran Hadis' },
    { name: 'STEM', desc: 'Matematika Terapan & IPA Terpadu' },
    { name: 'Umum', desc: 'Bahasa Indonesia, Bahasa Inggris & Sosial Humaniora' },
    { name: 'Kepala Madrasah', desc: 'Manajerial, Supervisi Guru & Kewirausahaan' },
    { name: 'Pengawas', desc: 'Supervisi Akademik & Manajerial Madrasah' },
    { name: 'Laboran', desc: 'Pengelolaan Laboratorium IPA & Komputer' },
    { name: 'Pustakawan', desc: 'Layanan Perpustakaan & Manajemen Koleksi Digital' }
  ];

  const steps = [
    {
      num: '1',
      title: 'Klik "Dapatkan Akses"',
      desc: 'Pilih paket latihan AKGTK yang sesuai dengan kebutuhan persiapan Anda.'
    },
    {
      num: '2',
      title: 'Selesaikan Pemesanan melalui Lynk',
      desc: 'Lakukan pembayaran secara instan dan aman via QRIS, Virtual Account, atau E-Wallet di Lynk.'
    },
    {
      num: '3',
      title: 'Ikuti Petunjuk untuk Mendapatkan Kode Akses',
      desc: 'Kode Akses resmi (format: AKGTK-XXXXXX) akan segera diberikan setelah pembayaran terkonfirmasi.'
    },
    {
      num: '4',
      title: 'Kembali ke AKGTK Smart Practice',
      desc: 'Buka kembali website platform AKGTK Smart Practice di perangkat HP atau laptop Anda.'
    },
    {
      num: '5',
      title: 'Pilih "Masuk dengan Kode Akses"',
      desc: 'Klik tombol Masuk dengan Kode Akses di menu atas atau halaman utama.'
    },
    {
      num: '6',
      title: 'Masukkan Kode dan Mulai Latihan',
      desc: 'Ketikkan kode akses unik Anda dan seluruh materi simulasi CBT siap dikerjakan tanpa batas.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/70 pb-20 pt-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* HERO SECTION */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 p-6 sm:p-12 text-white shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-bold text-emerald-300 ring-1 ring-emerald-500/30">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Persiapan Asesmen Kompetensi Guru Kemenag 2026</span>
            </div>

            <div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                AKGTK <span className="text-emerald-400">SMART</span> PRACTICE 2026
              </h1>
              <p className="mt-2 text-lg sm:text-xl font-medium text-emerald-200">
                "Latihan lebih terarah untuk persiapan AKGTK Madrasah."
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Tingkatkan kesiapan menghadapi AKGTK Kemenag dengan bank soal penalaran HOTS, simulasi waktu nyata berstandar CBT, dan pembahasan komprehensif untuk mendongkrak kompetensi guru dan tenaga kependidikan madrasah.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href={LYNK_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-xs sm:text-sm font-extrabold text-slate-950 hover:bg-emerald-400 active:scale-95 shadow-lg shadow-emerald-500/30 transition-all cursor-pointer"
              >
                <ExternalLink className="h-4 w-4" />
                <span>DAPATKAN AKSES</span>
              </a>

              <button
                onClick={onOpenCodeLogin}
                className="flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3.5 text-xs sm:text-sm font-bold text-white hover:bg-white/20 ring-1 ring-white/20 active:scale-95 transition-all cursor-pointer"
              >
                <KeyRound className="h-4 w-4 text-emerald-400" />
                <span>SUDAH PUNYA KODE AKSES</span>
              </button>

              <a
                href={LYNK_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-950/40 px-5 py-3 text-xs sm:text-sm font-semibold text-emerald-200 hover:bg-emerald-900/60 transition-all cursor-pointer"
              >
                <span>Mulai Latihan →</span>
              </a>
            </div>
          </div>

          {/* Decorative gradients */}
          <div className="absolute -right-16 -bottom-16 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
          <div className="absolute right-20 top-8 h-64 w-64 rounded-full bg-teal-500/10 blur-2xl pointer-events-none" />
        </div>

        {/* FITUR UNGGULAN (FEATURE CARDS) */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-8 space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Fitur Utama Platform
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Fitur Lengkap Belajar & Simulasi
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Didesain khusus untuk memberikan pengalaman berlatih yang efektif, terstruktur, dan terukur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {featureList.map((f, idx) => (
              <div 
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200 group-hover:bg-emerald-50 group-hover:ring-emerald-200 transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors flex items-center gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    {f.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* KATEGORI AKGTK YANG TERSEDIA */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-5">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Cakupan Uji
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                Kategori & Jenjang AKGTK
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Materi disesuaikan dengan standar kompetensi masing-masing formasi pendidik dan tenaga kependidikan.
              </p>
            </div>

            <a
              href={LYNK_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700 transition-colors cursor-pointer self-start sm:self-auto"
            >
              <span>Daftar / Beli Akses</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {categories.map((cat, idx) => (
              <div 
                key={idx}
                className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 hover:bg-emerald-50/40 hover:border-emerald-200 transition-colors"
              >
                <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  {cat.name}
                </p>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CARA MENDAPATKAN AKSES (SECTION 15) */}
        <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/50 p-6 sm:p-10 shadow-sm">
          <div className="text-center max-w-md mx-auto mb-8 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
              Panduan Pembelian
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Cara Mendapatkan Akses
            </h3>
            <p className="text-xs text-slate-600">
              Proses aktivasi mudah, cepat, dan otomatis dalam hitungan menit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((st) => (
              <div 
                key={st.num}
                className="relative rounded-2xl border border-emerald-100 bg-white p-5 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-600 text-white font-extrabold text-xs shadow-xs">
                    {st.num}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{st.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={LYNK_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-8 py-3.5 text-xs sm:text-sm font-extrabold text-white hover:bg-emerald-700 shadow-md shadow-emerald-600/20 active:scale-95 transition-all cursor-pointer"
            >
              <ExternalLink className="h-4 w-4" />
              <span>DAPATKAN AKSES SEKARANG</span>
            </a>
          </div>
        </div>

        {/* FINAL CALL TO ACTION (SECTION 9) */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 to-emerald-950 p-8 sm:p-12 text-center text-white shadow-xl space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Siap Mulai Persiapan AKGTK?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            Bergabunglah dengan ratusan guru madrasah lainnya untuk meningkatkan kompetensi pedagogik, profesional, dan penguasaan soal HOTS.
          </p>

          <div className="pt-2 flex flex-col items-center gap-3">
            <a
              href={LYNK_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-emerald-500 px-8 py-4 text-sm font-extrabold text-slate-950 hover:bg-emerald-400 active:scale-95 shadow-lg shadow-emerald-500/25 transition-all cursor-pointer inline-block"
            >
              DAPATKAN AKSES
            </a>

            <div className="text-xs text-slate-400 flex flex-col sm:flex-row items-center gap-1.5 pt-1">
              <span>Sudah membeli akses?</span>
              <button
                onClick={onOpenCodeLogin}
                className="font-bold text-emerald-400 hover:text-emerald-300 hover:underline cursor-pointer"
              >
                MASUK DENGAN KODE AKSES →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
