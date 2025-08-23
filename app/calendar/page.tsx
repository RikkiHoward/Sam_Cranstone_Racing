'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import RaceCard from '@/components/RaceCard';
import type { Race } from '@/types/race';

// ✅ Import JSON directly (no fetch) — path is from app/calendar/page.tsx to /data
import racesData from '../data/races.json';

// helper to create stable slugs (e.g., "2025-03-15-brands-hatch-gp")
const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export default function CalendarPage() {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed'>('all');

  // enrich races with a slug we can use for /calendar/[slug]
  const races = useMemo(() => {
    return (racesData as Race[]).map((r) => ({
      ...r,
      slug: r.slug ?? `${r.date}-${slugify(r.circuit)}`,
    }));
  }, []);

  const filteredRaces = useMemo(
    () => races.filter((race) => filter === 'all' || race.status === filter),
    [races, filter]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-20 md:pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-6xl font-bold font-orbitron mb-4">
            <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">2025 RACE</span>
            <br />
            <span className="text-white">CALENDAR</span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            Follow my journey through the 2025 season across BMCRC Rookie 1000 and Bemsee MRO championships.
          </p>

          {/* Filter Buttons */}
          <div className="flex gap-4 mb-8">
            {[
              { key: 'all', label: 'All Races' },
              { key: 'upcoming', label: 'Upcoming' },
              { key: 'completed', label: 'Results' },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key as any)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  filter === key ? 'bg-red-500 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Race Cards */}
          <div className="grid gap-6">
            {filteredRaces.map((race, index) => (
              <RaceCard key={race.slug ?? index} race={race} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
