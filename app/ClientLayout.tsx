'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingDonateButton from '@/components/FloatingDonateButton';
import dynamic from 'next/dynamic';
import { ThemeProvider } from './contexts/ThemeContext';
import { EasterEggProvider, useEasterEgg } from './contexts/EasterEggContext';
import { ReactNode } from 'react';

const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), {
  ssr: false,
});

const RotaryDialer = dynamic(() => import('@/components/RotaryDialer'), {
  ssr: false,
});

function AppContent({ children }: { children: ReactNode }) {
  const { isDialerOpen, closeDialer } = useEasterEgg();
  
  return (
    <div className="app">
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingDonateButton />
      <ThemeToggle />
      <RotaryDialer isOpen={isDialerOpen} onClose={closeDialer} />
    </div>
  );
}

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <EasterEggProvider>
        <AppContent>{children}</AppContent>
      </EasterEggProvider>
    </ThemeProvider>
  );
}
