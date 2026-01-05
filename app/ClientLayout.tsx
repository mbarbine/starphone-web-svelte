'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingDonateButton from '@/components/FloatingDonateButton';
import dynamic from 'next/dynamic';
import { ThemeProvider } from './contexts/ThemeContext';
import { ReactNode } from 'react';

const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), {
  ssr: false,
});

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingDonateButton />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}
