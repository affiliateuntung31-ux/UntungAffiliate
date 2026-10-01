import React, { useState, useEffect } from 'react';
import { SessionResult, UserStats } from '../types';
import { 
  History, 
  CheckCircle2, 
  XCircle, 
  Calendar, 
  Timer, 
  BookOpen, 
  ArrowRight, 
  Loader2,
  ChevronRight
} from 'lucide-react';
import { api } from '../services/apiClient';

interface HistoryViewProps {
  onSelectResult: (result: SessionResult) => void;
  onStartNewSession: () => void;
}

export const HistoryView: React.FC<HistoryViewProps> = ({
  onSelectResult,
  onStartNewSession
}) => {
  const [history, setHistory] = useState<SessionResult[]>([]);
  const [stats, setStats] = useState<UserStats>({
    totalSessions: 0,
    totalQuestionsAnswered: 0,
    totalCorrect: 0,
    totalIncorrect: 0,
    averageScore: 0,
    strongestCategory: '-',
    weakestCategory: '-'
  });
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadingDetailId, setLoadingDetailId] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function loadInitial() {
      setLoading(true);
      try {
        const [statsData, histData] = await Promise.all([
          api.getUserStats(),
          api.getUserHistory(1, 10)
        ]);
        if (isMounted) {
          setStats(statsData);
          setHistory(histData.items);
          setTotalPages(histData.totalPages);
          setPage(1);
        }
      } catch (err) {
        console.warn('Error loading history:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadInitial();
    return () => { isMounted = false; };
  }, []);

  const handleLoadMore = async () => {
    if (page >= totalPages || loadingMore) return;
    setLoadingMore(true);
    try {
      const nextPage = page + 1;
      const res = await api.getUserHistory(nextPage, 10);
      setHistory(prev => [...prev, ...res.items]);
      setPage(nextPage);
    } catch {
      // ignore
    } finally {
      setLoadingMore(false);
    }
  };

  const handleItemClick = async (item: SessionResult) => {
    setLoadingDetailId(item.id);
    try {
      // Fetch full result with snapshot questions
      const full = await api.getResultDetail(item.id);
      onSelectResult(full);
    } catch {
      // Fallback
      onSelectResult(item);
    } finally {
      setLoadingDetailId(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/70 pb-20 pt-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
              <History className="h-6 w-6 text-emerald-600" />
              <span>Riwayat Latihan & Evaluasi Saya</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Data terisolasi khusus untuk akun Anda • Pantau progres capaian kompetensi pedagogik dan profesional AKGTK
            </p>
          </div>

          <button
            onClick={onStartNewSession}
            className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700 shadow-sm transition-all cursor-pointer"
          >
            <span>Mulai Latihan Baru</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Aggregate Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
            <span className="text-xs font-semibold text-slate-500 block">Total Sesi Selesai</span>
            <span className="text-2xl font-extrabold text-slate-900 mt-1 block">{stats.totalSessions}</span>
            <span className="text-[11px] text-slate-400">Sesi Latihan & CBT</span>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
            <span className="text-xs font-semibold text-slate-500 block">Rata-Rata Nilai</span>
            <span className="text-2xl font-extrabold text-emerald-600 mt-1 block">
              {stats.averageScore} <span className="text-xs text-slate-400 font-normal">/ 100</span>
            </span>
            <span className="text-[11px] text-emerald-600 font-medium">Skor kumulatif</span>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
            <span className="text-xs font-semibold text-slate-500 block">Soal Terjawab</span>
            <span className="text-2xl font-extrabold text-indigo-600 mt-1 block">{stats.totalQuestionsAnswered}</span>
            <span className="text-[11px] text-slate-400 font-medium">
              Benar: {stats.totalCorrect} ({stats.totalQuestionsAnswered > 0 ? Math.round((stats.totalCorrect / stats.totalQuestionsAnswered) * 100) : 0}%)
            </span>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
            <span className="text-xs font-semibold text-slate-500 block">Domain Terkuat</span>
            <span className="text-lg font-extrabold text-slate-900 mt-1 block truncate">{stats.strongestCategory}</span>
            <span className="text-[11px] text-slate-400">Akurasi tertinggi</span>
          </div>
        </div>

        {/* Session List */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
            Daftar Riwayat Sesi
          </h3>

          {loading ? (
            <div className="p-12 text-center">
              <Loader2 className="h-8 w-8 animate-spin text-emerald-600 mx-auto mb-2" />
              <p className="text-xs font-semibold text-slate-500">Memuat riwayat belajar Anda...</p>
            </div>
          ) : history.length === 0 ? (
            <div className="p-12 text-center">
              <History className="h-10 w-10 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-bold text-slate-700">Belum Ada Riwayat Sesi</p>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                Anda belum menyelesaikan latihan atau simulasi CBT. Mulailah latihan pertama Anda sekarang untuk melihat rekaman skor di sini.
              </p>
              <button
                onClick={onStartNewSession}
                className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700"
              >
                Mulai Sesi Sekarang
              </button>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {history.map(item => (
                <div
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 hover:bg-slate-50/80 px-2 rounded-xl transition-colors cursor-pointer group"
                >
                  <div className="flex items-start sm:items-center gap-3.5">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
                      item.mode === 'simulation' ? 'bg-indigo-50 text-indigo-600' : 'bg-emerald-50 text-emerald-600'
                    }`}>
                      {item.mode === 'simulation' ? <Timer className="h-5 w-5" /> : <BookOpen className="h-5 w-5" />}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`rounded-md px-2 py-0.5 text-[10px] font-extrabold uppercase ${
                          item.mode === 'simulation' ? 'bg-indigo-100 text-indigo-800' : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {item.mode === 'simulation' ? 'Simulasi CBT' : 'Latihan Mandiri'}
                        </span>
                        <span className="text-xs font-bold text-slate-700 uppercase">
                          {item.category}
                        </span>
                      </div>

                      <div className="mt-1 flex items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(item.date).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                        <span>•</span>
                        <span>{item.total} Soal</span>
                        <span>•</span>
                        <span className="text-emerald-600 font-semibold">{item.correct} Benar</span>
                        <span>•</span>
                        <span className="text-rose-500 font-semibold">{item.incorrect} Salah</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4">
                    <div className="text-right">
                      <div className="flex items-baseline justify-end gap-1">
                        <span className="text-2xl font-extrabold text-slate-900">{item.score}</span>
                        <span className="text-xs text-slate-400 font-normal">/ 100</span>
                      </div>
                      <span className={`text-[10px] font-bold ${
                        item.score >= 80 ? 'text-emerald-600' : item.score >= 65 ? 'text-blue-600' : 'text-amber-600'
                      }`}>
                        {item.score >= 80 ? 'Sangat Baik' : item.score >= 65 ? 'Memenuhi Standar' : 'Perlu Penguatan'}
                      </span>
                    </div>

                    <div className="rounded-lg p-1.5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all">
                      {loadingDetailId === item.id ? (
                        <Loader2 className="h-5 w-5 animate-spin text-emerald-600" />
                      ) : (
                        <ChevronRight className="h-5 w-5" />
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {page < totalPages && (
                <div className="pt-4 text-center">
                  <button
                    onClick={handleLoadMore}
                    disabled={loadingMore}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
                  >
                    {loadingMore ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : null}
                    Muat Riwayat Lebih Banyak
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
