'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import styles from './FloatingDonateButton.module.css';

export default function FloatingDonateButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (isExpanded && scriptLoaded && typeof window !== 'undefined') {
      // Force Givebutter widget to initialize
      const loadGivebutterWidget = () => {
        if ((window as any).givebutter) {
          (window as any).givebutter.init();
        }
      };
      
      // Small delay to ensure DOM is ready
      setTimeout(loadGivebutterWidget, 100);
    }
  }, [isExpanded, scriptLoaded]);

  return (
    <>
      <Script
        src="https://givebutter.com/js/widget.js"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
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
