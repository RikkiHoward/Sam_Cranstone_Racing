// app/tracks/[slug]/page.tsx
// NOTE: SERVER component — do NOT add "use client"

// Build-time JSON imports (paths are from this file to /app/data)
import tracksJson from '../../data/tracks.json';
import racesJson from '../../data/races.json';

import TrackMap from '@/components/TrackMap';
import RaceCard from '@/components/RaceCard';
import MotionWrapper from '@/components/MotionWrapper';
import TrackElevation from '@/components/TrackElevation';
import { getElevation } from '@/data/elevations';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Race } from '@/types/race';

type Track = {
  slug?: string;
  name: string;
  location?: string;
  length_km?: number;
  corners?: number;
  elevation_img?: string;
  map_img?: string;
  sectors?: string[];
  notes?: string;
};

const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const getSlug = (t: Track) => t.slug ?? slugify(t.name);

// ✅ Required for static export
export function generateStaticParams() {
  const tracks = tracksJson as Track[];
  return tracks.map((t) => ({ slug: getSlug(t) }));
}

// Optional but safe for SSG
export const dynamic = 'force-static';
export const revalidate = false;

// Static metadata based on the slug
export function generateMetadata({ params }: { params: { slug: string } }) {
  const tracks = tracksJson as Track[];
  const track = tracks.find((t) => getSlug(t) === params.slug);
  if (!track) return { title: 'Track Not Found | Sam Cranstone' };

  return {
    title: `${track.name} | Sam Cranstone Racing`,
    description: `${track.name} track info, layout, and Sam Cranstone's race history at this ${track.length_km ?? '—'} km circuit${track.location ? ` in ${track.location}` : ''}.`,
    keywords: `${track.name}, ${track.location ?? ''}, racing circuit, track map, motorcycle racing`,
  };
}

export default function TrackPage({ params }: { params: { slug: string } }) {
  const tracks = tracksJson as Track[];
  const track = tracks.find((t) => getSlug(t) === params.slug);
  if (!track) notFound();

  const allRaces = racesJson as Race[];
  const name = track.name.toLowerCase();
  const nameWords = name.split(' ');

  // simple match on first/second word of track name, like your original
  const races = allRaces.filter((r) => {
    const c = r.circuit.toLowerCase();
    return c.includes(nameWords[0]) || (nameWords[1] && c.includes(nameWords[1]));
  });

  // JSON-LD for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: track.name,
    address: track.location ? { '@type': 'PostalAddress', addressLocality: track.location } : undefined,
    description: `${track.length_km ?? '—'}km racing circuit with ${track.corners ?? '—'} corners.${track.notes ? ` ${track.notes}` : ''}`,
    sport: 'Motorcycle Racing',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-20 md:pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <MotionWrapper initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Button asChild variant="ghost" className="text-gray-400 hover:text-white mb-6">
              <Link href="/tracks">
                <ArrowLeft className="mr-2" size={16} />
                Back to Tracks
              </Link>
            </Button>

            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold font-orbitron mb-4">
                <span className="text-white">{track.name}</span>
              </h1>
              {track.location && <p className="text-xl text-gray-400 mb-6">{track.location}</p>}
              {track.notes && <p className="text-gray-300 max-w-3xl mx-auto">{track.notes}</p>}
            </div>

            {/* Interactive map (client component) */}
            <TrackMap track={track} />

            {/* Elevation Profile */}
            <MotionWrapper 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.6 }}
              className="mt-10"
            >
              <TrackElevation 
                slug={getSlug(track)} 
                dataset={getElevation(getSlug(track))} 
              />
            </MotionWrapper>

            {/* Race History */}
            {races.length > 0 && (
              <MotionWrapper initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
                <div className="flex items-center justify-between mb-8 mt-16">
                  <h2 className="text-3xl font-bold text-white font-orbitron">Race History</h2>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-400 hover:border-red-500 hover:text-red-400"
                  >
                    <Link href="/calendar">
                      <Calendar className="mr-2" size={16} />
                      View Full Calendar
                    </Link>
                  </Button>
                </div>

                <div className="space-y-4">
                  {races.map((race, index) => (
                    <RaceCard key={`${race.date}-${index}`} race={race} index={index} />
                  ))}
                </div>
              </MotionWrapper>
            )}
          </MotionWrapper>
        </div>
      </div>
    </>
  );
}
