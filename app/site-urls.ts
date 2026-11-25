import type { Metadata } from 'next';

export const SITE_ORIGIN = 'https://www.thestarphone.com';
export const SITE_LOCALE = 'en';

export const siteUrl = (path: `/${string}`) => `${SITE_ORIGIN}${path}`;

const defaultOpenGraph: NonNullable<Metadata['openGraph']> = {
  title: 'Starphone - Secure Public Communication Solutions',
  description: 'Solar-powered, satellite-connected phone booths for extreme environments. When everything else fails, Starphone stays connected.',
  siteName: 'Starphone',
  images: [
    {
      url: '/images/starphone-black-small.png',
      width: 1200,
      height: 630,
      alt: 'Starphone - The Phone Booth of Tomorrow',
    },
  ],
  locale: 'en_US',
  type: 'website',
};

export function pageMetadata(slug = '', metadata: Metadata = {}): Metadata {
  const url = siteUrl(slug ? `/${SITE_LOCALE}/${slug}` : `/${SITE_LOCALE}`);
  return {
    ...metadata,
    alternates: { ...metadata.alternates, canonical: url },
    openGraph: { ...defaultOpenGraph, ...metadata.openGraph, url },
  };
}
