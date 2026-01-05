import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingDonateButton from '@/components/FloatingDonateButton';
import './globals.css';

export const metadata: Metadata = {
  title: 'Starphone - Secure Public Communication Solutions',
  description: 'Starphone provides secure, reliable public communication solutions for extreme environments, from cities to space. Join the future of communication with Starphone.',
  keywords: ['starphone', 'communication', 'public phone', 'secure communication', 'space communication'],
  authors: [{ name: 'Starphone Team' }],
  creator: 'Starphone',
  publisher: 'Starphone',
  metadataBase: new URL('https://www.thestarphone.com'),
  openGraph: {
    title: 'Starphone - Secure Public Communication Solutions',
    description: 'Explore Starphone\'s cutting-edge public communication technology designed for extreme environments.',
    url: 'https://www.thestarphone.com/',
    siteName: 'Starphone',
    images: [
      {
        url: '/images/starphone-black-small.png',
        width: 1200,
        height: 630,
        alt: 'Starphone',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Starphone - Secure Public Communication Solutions',
    description: 'Join Starphone in revolutionizing public communication with secure, reliable technology for extreme environments.',
    images: ['/images/x.png'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.thestarphone.com/" />
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Starphone',
              url: 'https://www.thestarphone.com/',
              logo: 'https://www.thestarphone.com/images/starphone-bg-color.png',
              sameAs: [
                'https://twitter.com/barbinary',
                'https://github.com/ph3ar',
                'https://www.linkedin.com/in/michaelbarbine',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-540-671-1261',
                contactType: 'Customer Support',
                areaServed: 'Global',
                availableLanguage: ['English'],
              },
              description: 'Starphone provides secure public communication solutions for extreme environments.',
              foundingDate: '2024',
              founders: [
                { '@type': 'Person', name: 'Michael Barbine' },
                { '@type': 'Person', name: 'Patrick Modin' },
              ],
            }),
          }}
        />
      </head>
      <body>
        <div className="app">
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingDonateButton />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
