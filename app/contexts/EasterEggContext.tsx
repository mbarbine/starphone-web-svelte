'use client';

import { createContext, useContext, useState, useEffect, useCallback, useRef, ReactNode } from 'react';

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
  const [tapCount, setTapCount] = useState(0);
  const [lastTapTime, setLastTapTime] = useState(0);
  const keySequenceRef = useRef('');
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Keyboard listener for "PH3AR"
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      // Clear any existing reset timeout
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }

      const key = e.key.toUpperCase();
      const currentSequence = keySequenceRef.current;
      const newSequence = currentSequence + key;
      
      // Check if the new sequence could be the start of SECRET_CODE
      if (SECRET_CODE.startsWith(newSequence)) {
        keySequenceRef.current = newSequence;
        
        // Check if complete
        if (newSequence === SECRET_CODE) {
          setIsDialerOpen(true);
          keySequenceRef.current = '';
        }
      } else {
        // Reset and check if this key starts the sequence
        if (SECRET_CODE.startsWith(key)) {
          keySequenceRef.current = key;
        } else {
          keySequenceRef.current = '';
        }
      }

      // Set timeout to reset sequence after 2 seconds of inactivity
      resetTimeoutRef.current = setTimeout(() => {
        keySequenceRef.current = '';
      }, 2000);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

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
