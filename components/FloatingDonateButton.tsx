'use client';

import { useState } from 'react';
import Script from 'next/script';
import styles from './FloatingDonateButton.module.css';

export default function FloatingDonateButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <Script
        src="https://givebutter.com/js/widget.js"
        strategy="lazyOnload"
      />
      
      <div className={styles.floatingButton}>
        {!isExpanded ? (
          <button 
            className={styles.donateButton}
            onClick={() => setIsExpanded(true)}
            aria-label="Support Starphone"
          >
            💝 Donate
          </button>
        ) : (
          <div className={styles.widgetContainer}>
            <button 
              className={styles.closeButton}
              onClick={() => setIsExpanded(false)}
              aria-label="Close donate widget"
            >
              ✕
            </button>
            <div
              dangerouslySetInnerHTML={{
                __html: '<givebutter-widget id="LYxbKj"></givebutter-widget>',
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}
