import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import tracks from './data/tracks.json';
import races from './data/races.json';

type Track = { slug?: string; name?: string };
type Race = { slug?: string; date: string; circuit: string };

const updated = new Date();

const safe = (s: string) =>
  s.toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

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
    changeFrequency: 'weekly' as const,
    priority: p === '' ? 1 : 0.7,
  }));

  // Track detail pages
  (tracks as Track[]).forEach((t) => {
    const slug = t.slug || (t.name ? safe(t.name) : null);
    if (!slug) return;
    urls.push({
      url: `${SITE_URL}/tracks/${slug}`,
      lastModified: updated,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    });
  });

  // Calendar event pages
  (races as Race[]).forEach((r) => {
    const slug = r.slug || `${r.date}-${safe(r.circuit)}`;
    urls.push({
      url: `${SITE_URL}/calendar/${slug}`,
      lastModified: updated,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    });
  });

  return urls;
}