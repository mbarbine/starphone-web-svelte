'use client';

import styles from './FloatingDonateButton.module.css';

export default function FloatingDonateButton() {
  return (
    <div className={styles.floatingButton}>
      <a 
        href="https://www.givebutter.com/ph3ar"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.donateButton}
        aria-label="Support Starphone"
      >
        💝 Donate
      </a>
    </div>
  );
}
