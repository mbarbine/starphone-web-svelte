import { pageMetadata } from '../../site-urls';

export const metadata = pageMetadata('support', {
  title: 'Support Starphone | Donate & Contribute',
  description: 'Support Starphone development through Patreon, GitHub sponsorship, or one-time donations. Help us build the future of resilient communication.',
  openGraph: {
    title: 'Support Starphone | Donate & Contribute',
    description: 'Help us build resilient communication infrastructure for everyone.',
  },
});

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
