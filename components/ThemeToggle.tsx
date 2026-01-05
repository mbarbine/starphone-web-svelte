'use client';

import { useTheme } from '@/app/contexts/ThemeContext';
import { useEasterEgg } from '@/app/contexts/EasterEggContext';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { registerThemeToggleTap } = useEasterEgg();

  const handleClick = () => {
    // Register tap for mobile easter egg (5 taps to trigger)
    registerThemeToggleTap();
    // Also toggle theme as normal
    toggleTheme();
  };

  return (
    <button
      onClick={handleClick}
      className={styles.themeToggle}
      aria-label={`Switch to ${theme === 'future' ? 'legacy' : 'future'} theme`}
      title={`Switch to ${theme === 'future' ? 'Legacy 2024' : 'Future 2026'} Mode`}
      suppressHydrationWarning
    >
      <span className={styles.toggleIcon}>
        {theme === 'future' ? '🕰️' : '🚀'}
      </span>
      <span className={styles.toggleText}>
        {theme === 'future' ? '2024' : '2026'}
      </span>
    </button>
  );
}
