'use client';

import { useTheme } from '@/app/contexts/ThemeContext';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
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
