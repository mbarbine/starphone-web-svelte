import type { Metadata } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import ClientLayout from '../ClientLayout';
import '../globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Starphone - Secure Public Communication Solutions',
    template: '%s | Starphone',
  },
  description: 'Starphone builds solar-powered, satellite-connected public communication booths for extreme environments — cities, deserts, disaster zones, and space. Always connected when everything else fails.',
  keywords: [
    'starphone', 'public phone booth', 'satellite communication', 'secure communication',
    'space communication', 'mesh network', 'emergency communication', 'solar powered phone',
    'disaster communication', 'off-grid connectivity', 'AI communication', '6G ready',
    'extreme environment communication', 'public communication infrastructure',
  ],
  authors: [
    { name: 'Michael Barbine' },
    { name: 'Patrick Modin' },
  ],
  creator: 'Starphone',
  publisher: 'Starphone',
  metadataBase: new URL('https://starphone.platphormnews.com'),
  alternates: {
    canonical: 'https://starphone.platphormnews.com/',
  },
  openGraph: {
    title: 'Starphone - Secure Public Communication Solutions',
    description: 'Solar-powered, satellite-connected phone booths for extreme environments. When everything else fails, Starphone stays connected.',
    url: 'https://starphone.platphormnews.com/',
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Starphone - Secure Public Communication Solutions',
    description: 'Solar-powered satellite phone booths for extreme environments — built for the future of communication.',
    images: ['/images/x.png'],
    creator: '@barbinary',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
};

export async function generateStaticParams() {
  return [{ lang: 'en' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <head>
        <link rel="canonical" href="https://starphone.platphormnews.com/" />
        <link rel="alternate" href="https://www.thestarphone.com/" hrefLang="en" />
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://starphone.platphormnews.com/#organization',
              name: 'Starphone',
              url: 'https://starphone.platphormnews.com/',
              logo: {
                '@type': 'ImageObject',
                url: 'https://starphone.platphormnews.com/images/starphone-bg-color.png',
                width: 512,
                height: 512,
              },
              sameAs: [
                'https://www.thestarphone.com/',
                'https://twitter.com/barbinary',
                'https://github.com/ph3ar',
                'https://www.linkedin.com/in/michaelbarbine',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'michael@barbvineworldwide.com',
                contactType: 'Customer Support',
                areaServed: 'Global',
                availableLanguage: ['English'],
              },
              description: 'Starphone builds solar-powered, satellite-connected public communication booths designed for extreme environments — from cities to disaster zones to space.',
              foundingDate: '2024',
              founders: [
                { '@type': 'Person', name: 'Michael Barbine', url: 'https://www.linkedin.com/in/michaelbarbine' },
                { '@type': 'Person', name: 'Patrick Modin' },
              ],
              knowsAbout: [
                'Satellite Communication', 'Mesh Networking', 'Solar Energy',
                'Emergency Communication', 'Public Infrastructure', 'Space Technology',
              ],
            }),
          }}
        />
        {/* WebSite JSON-LD for AEO / Answer Engine Optimization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://starphone.platphormnews.com/#website',
              name: 'Starphone',
              url: 'https://starphone.platphormnews.com/',
              description: 'Starphone — solar-powered public communication booths for extreme environments, built with satellite links, mesh networks, and AI.',
              publisher: { '@id': 'https://starphone.platphormnews.com/#organization' },
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://starphone.platphormnews.com/?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        {/* Product JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'Starphone Communication Booth',
              description: 'A solar-powered, satellite-connected public communication booth designed for extreme environments. Features mesh networking, AI signal routing, and multi-backup connectivity.',
              brand: { '@id': 'https://starphone.platphormnews.com/#organization' },
              url: 'https://starphone.platphormnews.com/',
              image: 'https://starphone.platphormnews.com/images/starphone-bg-color.png',
              category: 'Communication Infrastructure',
              offers: {
                '@type': 'Offer',
                availability: 'https://schema.org/PreOrder',
                priceCurrency: 'USD',
                description: 'Contact us for enterprise and government pricing.',
              },
              additionalProperty: [
                { '@type': 'PropertyValue', name: 'Power Source', value: 'Solar' },
                { '@type': 'PropertyValue', name: 'Connectivity', value: 'Satellite + Mesh Network + Cellular' },
                { '@type': 'PropertyValue', name: 'AI Features', value: 'ML-based signal path optimization' },
                { '@type': 'PropertyValue', name: 'Durability', value: 'Extreme environment rated' },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Script 
          src="https://givebutter.com/js/widget.js" 
          strategy="lazyOnload"
        />
        <ClientLayout>
          {children}
        </ClientLayout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
