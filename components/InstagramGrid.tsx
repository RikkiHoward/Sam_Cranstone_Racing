'use client';

import * as React from 'react';
import items from '@/data/instagram.json';
import { SOCIAL } from '@/lib/site';

type IgItem = {
  id: string;
  url: string;
  thumbnail: string; // /instagram/*.jpg
  alt?: string;
  date?: string;
};

export default function InstagramGrid() {
  const posts = (items as IgItem[]).filter(Boolean).slice(0, 12);

  if (!posts.length) return null;

  return (
    <section aria-labelledby="instagram-heading" className="mt-16 md:mt-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
        <div>
          <h2
            id="instagram-heading"
            className="text-2xl md:text-3xl font-orbitron font-bold tracking-tight text-white"
          >
            From Instagram
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Latest moments from the paddock, testing, and race weekends.
          </p>
        </div>
        <a
          href={SOCIAL.instagram}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center self-start sm:self-auto rounded-xl px-4 py-2 text-sm font-semibold
                     bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:opacity-90 transition"
        >
          📷 Follow @samcranstoneracing
        </a>
      </div>

      {/* Responsive Grid */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4"
        role="list"
      >
        {posts.map((p) => (
          <a
            key={p.id}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="group relative aspect-square overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/40"
            aria-label={p.alt || 'Instagram post'}
            role="listitem"
          >
            <img
              src={p.thumbnail}
              alt={p.alt || 'Instagram post'}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              width={800}
              height={800}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,' + btoa(`
                  <svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#1f2937"/>
                    <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="#9ca3af" font-family="Arial" font-size="16">
                      Instagram thumbnail
                    </text>
                  </svg>
                `);
              }}
            />
            {/* Overlay + affordance */}
            <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="pointer-events-none absolute bottom-2 left-2 rounded-md bg-black/60 px-2 py-1 text-[11px] text-white opacity-0 group-hover:opacity-100 transition-opacity">
              View on Instagram →
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}