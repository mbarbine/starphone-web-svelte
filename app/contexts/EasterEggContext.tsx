'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

interface EasterEggContextType {
  isDialerOpen: boolean;
  openDialer: () => void;
  closeDialer: () => void;
  registerThemeToggleTap: () => void;
}

const EasterEggContext = createContext<EasterEggContextType | undefined>(undefined);

const SECRET_CODE = 'PH3AR';
const TAP_COUNT_REQUIRED = 5;
const TAP_TIMEOUT = 2000; // Reset tap count after 2 seconds of inactivity

export function EasterEggProvider({ children }: { children: ReactNode }) {
  const [isDialerOpen, setIsDialerOpen] = useState(false);
  const [keySequence, setKeySequence] = useState('');
  const [tapCount, setTapCount] = useState(0);
  const [lastTapTime, setLastTapTime] = useState(0);

  // Keyboard listener for "PH3AR"
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      const key = e.key.toUpperCase();
      const newSequence = keySequence + key;
      
      // Check if the new sequence could be the start of SECRET_CODE
      if (SECRET_CODE.startsWith(newSequence)) {
        setKeySequence(newSequence);
        
        // Check if complete
        if (newSequence === SECRET_CODE) {
          setIsDialerOpen(true);
          setKeySequence('');
        }
      } else {
        // Reset and check if this key starts the sequence
        if (SECRET_CODE.startsWith(key)) {
          setKeySequence(key);
        } else {
          setKeySequence('');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keySequence]);

  // Reset key sequence after timeout
  useEffect(() => {
    if (keySequence) {
      const timeout = setTimeout(() => {
        setKeySequence('');
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [keySequence]);

  // Register theme toggle tap (for mobile)
  const registerThemeToggleTap = useCallback(() => {
    const now = Date.now();
    
    // Reset if too much time has passed
    if (now - lastTapTime > TAP_TIMEOUT) {
      setTapCount(1);
    } else {
      setTapCount(prev => {
        const newCount = prev + 1;
        if (newCount >= TAP_COUNT_REQUIRED) {
          // Trigger easter egg!
          setTimeout(() => setIsDialerOpen(true), 100);
          return 0;
        }
        return newCount;
      });
    }
    
    setLastTapTime(now);
  }, [lastTapTime]);

  const openDialer = useCallback(() => {
    setIsDialerOpen(true);
  }, []);

  const closeDialer = useCallback(() => {
    setIsDialerOpen(false);
  }, []);

  return (
    <EasterEggContext.Provider value={{ isDialerOpen, openDialer, closeDialer, registerThemeToggleTap }}>
      {children}
    </EasterEggContext.Provider>
  );
}

export function useEasterEgg() {
  const context = useContext(EasterEggContext);
  if (context === undefined) {
    throw new Error('useEasterEgg must be used within an EasterEggProvider');
  }
  return context;
}
