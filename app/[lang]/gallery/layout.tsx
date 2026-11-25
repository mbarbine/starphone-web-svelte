import { pageMetadata } from '../../site-urls';

export const metadata = pageMetadata('gallery', {
  title: 'Gallery | Starphone Journey & Behind the Scenes',
  description: 'Explore photos and videos from Starphone\'s journey. See our booth designs, prototypes, testing phases, and the evolution of our public communication system.',
  openGraph: {
    title: 'Gallery | Starphone Journey & Behind the Scenes',
    description: 'Behind the scenes photos and videos of Starphone\'s development journey.',
  },
});

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
