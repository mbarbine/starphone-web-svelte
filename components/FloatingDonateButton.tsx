'use client';

import { useState, useEffect, useCallback } from 'react';
import Script from 'next/script';
import styles from './FloatingDonateButton.module.css';

export default function FloatingDonateButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const initGivebutter = useCallback(() => {
    if (typeof window !== 'undefined') {
      // Multiple init strategies for reliability
      const tryInit = () => {
        const gb = (window as any).Givebutter || (window as any).givebutter;
        if (gb) {
          if (typeof gb === 'function') gb();
          if (typeof gb.init === 'function') gb.init();
          if (typeof gb.render === 'function') gb.render();
        }
      };
      // Stagger attempts
      setTimeout(tryInit, 100);
      setTimeout(tryInit, 500);
      setTimeout(tryInit, 1000);
    }
  }, []);

  useEffect(() => {
    if (scriptLoaded) {
      initGivebutter();
    }
  }, [scriptLoaded, initGivebutter]);

  useEffect(() => {
    if (isExpanded && scriptLoaded) {
      initGivebutter();
    }
  }, [isExpanded, scriptLoaded, initGivebutter]);

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
              className={styles.givebutterEmbed}
              dangerouslySetInnerHTML={{ __html: '<givebutter-widget id="LYxbKj"></givebutter-widget>' }} 
            />
          </div>
        )}
      </div>
    </>
  );
}
