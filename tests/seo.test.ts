import { test, expect } from '@playwright/test';

const origin = 'https://www.thestarphone.com';
const aliasHost = 'starphone.platphormnews.com';
const alias = { Host: aliasHost };
const pages = ['', '/how-it-works', '/history', '/support', '/about', '/press', '/gallery', '/contact', '/docs']
  .map(slug => '/en' + slug);
const canonicalTags = (html: string) => [...html.matchAll(/<link\s+rel="canonical"\s+href="([^"]+)"\s*\/?>/gi)].map(match => match[1]);

for (const path of pages) {
  test(`${path} has one page-specific canonical on both hosts`, async ({ request }) => {
    for (const headers of [{}, alias]) {
      const response = await request.get(path, { headers, maxRedirects: 0 });
      expect(response.status()).toBe(200);
      const html = await response.text();
      expect(canonicalTags(html)).toEqual([origin + path]);
      expect(html).toContain(`property="og:url" content="${origin + path}"`);
    }
  });
}

test('sitemap is complete, stable across hosts, and advertised in robots.txt', async ({ request }) => {
  for (const headers of [{}, alias]) {
    const response = await request.get('/sitemap.xml', { headers, maxRedirects: 0 });
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/xml');
    const xml = await response.text();
    const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
    expect(urls.sort()).toEqual([...pages, '/api/docs'].map(path => origin + path).sort());

    const robots = await request.get('/robots.txt', { headers, maxRedirects: 0 });
    expect(robots.status()).toBe(200);
    const text = await robots.text();
    expect(text.match(/^Sitemap: .+$/gm)).toEqual([`Sitemap: ${origin}/sitemap.xml`]);
    expect(text).toContain('User-Agent: GPTBot');
    expect(text).toContain('User-Agent: Bingbot');
  }
});

test('machine-readable docs keep their API and advertise the canonical URL', async ({ request }) => {
  for (const headers of [{}, alias]) {
    const response = await request.get('/api/docs', { headers, maxRedirects: 0 });
    expect(response.status()).toBe(200);
    expect(response.headers().link).toBe(`<${origin}/api/docs>; rel="canonical"`);
    const body = await response.json();
    expect(body.ok).toBe(true);
    expect(body.data.endpoints.mcp).toBe('/api/mcp');
    expect(body.data.openapi).toBe(`https://${aliasHost}/openapi.yaml`);
  }
});

test('legacy page redirects and agent discovery remain available on the alias', async ({ request }) => {
  for (const [path, destination] of [['/', '/en'], ['/about', '/en/about']]) {
    const response = await request.get(path, { headers: alias, maxRedirects: 0 });
    expect(response.status()).toBe(307);
    expect(new URL(response.headers().location, origin).pathname).toBe(destination);
  }

  const text = await request.get('/llms.txt', { headers: alias, maxRedirects: 0 });
  expect(text.status()).toBe(200);
  expect(await text.text()).toContain(`https://${aliasHost}/openapi.yaml`);

  const index = await request.get('/sitemap-index.xml', { headers: alias, maxRedirects: 0 });
  expect(index.status()).toBe(200);
  expect(await index.text()).toContain(`<loc>${origin}/sitemap.xml</loc>`);
});
