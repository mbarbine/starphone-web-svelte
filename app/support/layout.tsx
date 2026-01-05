import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support Starphone | Donate & Contribute',
  description: 'Support Starphone development through Patreon, GitHub sponsorship, or one-time donations. Help us build the future of resilient communication.',
  openGraph: {
    title: 'Support Starphone | Donate & Contribute',
    description: 'Help us build resilient communication infrastructure for everyone.',
    url: 'https://www.thestarphone.com/support',
  },
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
