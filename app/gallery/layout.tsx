import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Starphone Journey & Behind the Scenes',
  description: 'Explore photos and videos from Starphone\'s journey. See our booth designs, prototypes, testing phases, and the evolution of our public communication system.',
  openGraph: {
    title: 'Gallery | Starphone Journey & Behind the Scenes',
    description: 'Behind the scenes photos and videos of Starphone\'s development journey.',
    url: 'https://www.thestarphone.com/gallery',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
