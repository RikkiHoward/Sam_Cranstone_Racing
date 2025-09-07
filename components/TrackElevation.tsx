'use client';

import { useMemo } from 'react';
import type { ElevationDataset } from '@/types/elevation';

type Props = {
  slug: string;
  dataset: ElevationDataset | null;
  className?: string;
};

const padX = 24;   // px
const padY = 28;   // px
const W = 860;     // viewBox width
const H = 260;     // viewBox height

export default function TrackElevation({ slug, dataset, className }: Props) {
  const elevationChart = useMemo(() => {
    if (!dataset) {
      return null;
    }

    const { x, y, length, corners } = dataset;

    // normalize to svg coordinates
    const minY = Math.min(...y);
    const maxY = Math.max(...y);
    const sx = (val: number) => padX + (val / length) * (W - padX * 2);
    const sy = (val: number) => padY + (1 - (val - minY) / Math.max(1, maxY - minY)) * (H - padY * 2);

    // path
    const d = x.map((xi, i) => `${i === 0 ? 'M' : 'L'} ${sx(xi)},${sy(y[i])}`).join(' ');

    return {
      d,
      sx,
      sy,
      x,
      y,
      length,
      corners,
      minY,
      maxY
    };
  }, [dataset]);

  if (!elevationChart) {
    return (
      <div className={`rounded-2xl border border-gray-800 bg-gray-900/50 p-6 ${className ?? ''}`}>
        <h3 className="mb-2 text-lg font-semibold text-white">Elevation Profile</h3>
        <p className="text-gray-400 text-sm">No elevation profile is available for this track yet.</p>
      </div>
    );
  }

  const { d, sx, sy, x, y, length, corners, minY, maxY } = elevationChart;

  return (
    <div className={`rounded-2xl border border-gray-800 bg-gray-900/50 p-6 ${className ?? ''}`}>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Elevation Profile</h3>
        <span className="text-xs text-gray-400">{slug.replace(/-/g, ' ')}</span>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-64">
        {/* grid */}
        <rect x="0" y="0" width={W} height={H} fill="none" />
        <path d={`M ${padX},${H-padY} L ${W-padX},${H-padY}`} stroke="#374151" strokeWidth="1" />
        <path d={`M ${padX},${padY} L ${padX},${H-padY}`} stroke="#374151" strokeWidth="1" />

        {/* area under line */}
        <path
          d={`${d} L ${sx(x[x.length-1])},${H-padY} L ${sx(x[0])},${H-padY} Z`}
          fill="url(#grad)"
          opacity="0.25"
        />
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        {/* main line */}
        <path d={d} stroke="#ef4444" strokeWidth="3" fill="none" />

        {/* corner markers */}
        {corners?.map((c, i) => {
          const cx = sx(c.dist);
          const cy = sy(y[Math.max(0, x.findIndex(v => v >= c.dist))] ?? y[0]);
          return (
            <g key={`${c.name}-${i}`}>
              <line x1={cx} y1={cy} x2={cx} y2={H-padY} stroke="#9ca3af" strokeDasharray="3 3" />
              <circle cx={cx} cy={cy} r="3.5" fill="#f59e0b" />
              <text
                x={cx}
                y={H - padY + 16}
                className="text-[10px] fill-gray-300"
                textAnchor="middle"
              >
                {c.name}
              </text>
            </g>
          );
        })}

        {/* axis labels */}
        <text x={padX} y={padY - 8} className="text-[10px] fill-gray-400">
          Elevation (m): {minY}–{maxY}
        </text>
        <text x={W - padX} y={H - padY + 24} className="text-[10px] fill-gray-400" textAnchor="end">
          Distance (m): 0–{length}
        </text>
      </svg>
    </div>
  );
}