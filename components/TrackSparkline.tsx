'use client';
import * as React from 'react';
import { getElevation } from '@/data/elevations';

export default function TrackSparkline({ slug }: { slug: string }) {
  const ds = getElevation(slug);
  if (!ds) return null;
  const W = 160, H = 40, pad = 4;
  const minY = Math.min(...ds.y), maxY = Math.max(...ds.y);
  const sx = (v:number)=> pad + (v/ds.length)*(W - pad*2);
  const sy = (v:number)=> pad + (1-(v-minY)/Math.max(1,maxY-minY))*(H - pad*2);
  const d = ds.x.map((xi, i)=>`${i===0?'M':'L'} ${sx(xi)},${sy(ds.y[i])}`).join(' ');

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-40 h-10">
      <path d={d} stroke="#60a5fa" strokeWidth="2" fill="none" />
    </svg>
  );
}