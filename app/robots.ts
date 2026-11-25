import type { MetadataRoute } from 'next';
import { siteUrl } from './site-urls';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      '*', 'GPTBot', 'ChatGPT-User', 'Claude-Web', 'PerplexityBot',
      'PerplexityUser', 'Google-Extended', 'Copilot-User', 'Bingbot',
    ].map(userAgent => ({ userAgent, allow: '/' })),
    sitemap: siteUrl('/sitemap.xml'),
  };
}
