import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// @ts-expect-error JSON typed at runtime
import tracks from '@/data/tracks.json';
// @ts-expect-error JSON typed at runtime
import races from '@/data/races.json';

const updated = new Date();

const safe = (s: string) =>
  s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [
    '',
    '/calendar',
    '/tracks',
    '/bike',
    '/sponsors',
    '/class',
    '/contact',
    '/gallery',
  ].map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: updated,
    changeFrequency: 'weekly',
    priority: p === '' ? 1 : 0.7,
  }));

  for (const t of tracks as any[]) {
    urls.push({
      url: `${SITE_URL}/tracks/${t.slug || safe(t.name)}`,
      lastModified: updated,
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  for (const r of races as any[]) {
    const slug = r.slug || `${r.date}-${safe(r.circuit)}`;
    urls.push({
      url: `${SITE_URL}/calendar/${slug}`,
      lastModified: updated,
      changeFrequency: 'monthly',
      priority: 0.5,
    });
  }

  return urls;
}