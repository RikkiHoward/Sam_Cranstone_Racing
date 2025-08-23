// ✅ NO 'use client' HERE

import racesJson from '../../data/races.json';
import galleryJson from '../../data/gallery.json';
import type { Race } from '@/types/race';

// keep slugify in server file
const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

export async function generateStaticParams() {
  const races = racesJson as Race[];
  return races.map(r => ({ slug: r.slug ?? `${r.date}-${slugify(r.circuit)}` }));
}

export const dynamic = 'force-static';
export const revalidate = false;

import EventPageClient from '@/components/EventPageClient'; // client wrapper

type GalleryItem = { src: string; alt: string; type: 'image' | 'video'; tags?: string[] };

export default function Page({ params }: { params: { slug: string } }) {
  const races = racesJson as Race[];
  const gallery = (galleryJson as GalleryItem[]) ?? [];

  const getSlug = (r: Race) => r.slug ?? `${r.date}-${slugify(r.circuit)}`;
  const race = races.find(r => getSlug(r) === params.slug) ?? null;

  return <EventPageClient race={race} gallery={gallery} />;
}
