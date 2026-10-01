import React from 'react';
import { VisualData } from '../types';
import { BarChart3, Table as TableIcon, FileText, Compass } from 'lucide-react';

interface VisualRendererProps {
  visualData?: VisualData;
}

export const VisualRenderer: React.FC<VisualRendererProps> = ({ visualData }) => {
  if (!visualData) return null;

  return (
    <div className="my-5 rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5 shadow-sm transition-all">
      {visualData.title && (
        <div className="mb-3 flex items-center justify-between border-b border-slate-200 pb-2">
          <div className="flex items-center gap-2">
            {visualData.type === 'table' && <TableIcon className="h-4 w-4 text-emerald-600" />}
            {visualData.type === 'barChart' && <BarChart3 className="h-4 w-4 text-blue-600" />}
            {visualData.type === 'notice' && <FileText className="h-4 w-4 text-amber-600" />}
            {visualData.type === 'diagram' && <Compass className="h-4 w-4 text-purple-600" />}
            <span className="font-semibold text-slate-800 text-sm sm:text-base">
              {visualData.title}
            </span>
          </div>
          {visualData.subtitle && (
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              {visualData.subtitle}
            </span>
          )}
        </div>
      )}

      {/* Render Table */}
      {visualData.type === 'table' && visualData.tableData && (
        <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200">
                {visualData.tableData.headers.map((header, idx) => (
                  <th key={idx} className="px-4 py-2.5 font-semibold text-slate-700">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {visualData.tableData.rows.map((row, rIdx) => (
                <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="px-4 py-2.5 text-slate-600 font-medium">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Render Bar Chart */}
      {visualData.type === 'barChart' && visualData.chartData && (
        <div className="space-y-3 bg-white p-4 rounded-lg border border-slate-200">
          {(() => {
            const maxValue = Math.max(...visualData.chartData.map(d => d.value), 1);
            return visualData.chartData.map((item, idx) => {
              const percentage = Math.round((item.value / maxValue) * 100);
              const barColor = item.color || 'bg-blue-600';

              return (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-medium text-slate-600">
                    <span>{item.label}</span>
                    <span className="font-semibold text-slate-900">
                      {item.value} {item.unit || ''}
                    </span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${barColor}`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            });
          })()}
        </div>
      )}

      {/* Render Notice / Announcement */}
      {visualData.type === 'notice' && visualData.noticeData && (
        <div className="rounded-lg border-2 border-dashed border-amber-300 bg-amber-50/60 p-4 text-slate-800">
          {visualData.noticeData.tag && (
            <span className="inline-block rounded bg-amber-200/80 px-2 py-0.5 text-xs font-bold text-amber-900 uppercase tracking-wider mb-2">
              {visualData.noticeData.tag}
            </span>
          )}
          <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
            {visualData.noticeData.title}
          </h4>
          <ul className="space-y-1 text-sm text-slate-700 list-disc list-inside">
            {visualData.noticeData.lines.map((line, idx) => (
              <li key={idx} className="leading-relaxed">{line}</li>
            ))}
          </ul>
          {visualData.noticeData.footer && (
            <p className="mt-3 text-xs italic text-slate-500 border-t border-amber-200 pt-2 text-right">
              {visualData.noticeData.footer}
            </p>
          )}
        </div>
      )}

      {/* Render Diagram */}
      {visualData.type === 'diagram' && (
        <div className="rounded-lg border border-purple-200 bg-purple-50/40 p-4 text-center">
          <p className="text-sm font-medium text-purple-950">{visualData.subtitle || visualData.title}</p>
        </div>
      )}
    </div>
  );
};
