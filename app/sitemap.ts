import { headers } from 'next/headers';
import type { MetadataRoute } from 'next';

export const dynamic = 'force-dynamic';

// Sitemap-only: real per-page last-modified dates (git commit dates of the
// app/[lang]/… pages), refreshed 2026-11-21. Bare paths 307-redirect to /en/*,
// so only the /en/* canonical paths (plus /api/docs) are listed.
const SITEMAP_LASTMOD: Record<string, string> = {
  "/api/docs": "2026-07-20T14:56:30Z",
  "/en": "2026-07-20T14:56:30Z",
  "/en/about": "2026-02-27T16:18:27Z",
  "/en/contact": "2026-02-27T16:18:27Z",
  "/en/docs": "2026-02-26T23:11:32Z",
  "/en/gallery": "2026-04-20T00:39:19Z",
  "/en/history": "2026-02-27T16:18:27Z",
  "/en/how-it-works": "2026-02-27T16:18:27Z",
  "/en/press": "2026-02-27T16:18:27Z",
  "/en/support": "2026-02-26T23:11:32Z",
};

const SITEMAP_PAGES: Array<{ path: string; changeFrequency: 'weekly' | 'monthly'; priority: number }> = [
  { path: '/en', changeFrequency: 'weekly', priority: 1 },
  { path: '/en/how-it-works', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/en/history', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/en/support', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/en/about', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/en/press', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/en/gallery', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/en/contact', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/en/docs', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/api/docs', changeFrequency: 'weekly', priority: 0.6 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers();
  const host = headersList.get('host') ?? 'starphone.platphormnews.com';
  const baseUrl = host.startsWith('localhost') ? `http://${host}` : `https://${host}`;

  return SITEMAP_PAGES.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(SITEMAP_LASTMOD[page.path]),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
