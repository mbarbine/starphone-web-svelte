'use client';

import { useState, useEffect } from 'react';
import styles from './FloatingDonateButton.module.css';

export default function FloatingDonateButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Load Givebutter script once on mount
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://givebutter.com/js/widget.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://givebutter.com/js/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Reinitialize widget when expanded
  useEffect(() => {
    if (isExpanded) {
      const initWidget = () => {
        const gb = (window as any).Givebutter;
        if (gb && typeof gb.init === 'function') {
          gb.init();
        }
      };
      
      // Multiple attempts to ensure it loads
      const t1 = setTimeout(initWidget, 100);
      const t2 = setTimeout(initWidget, 500);
      const t3 = setTimeout(initWidget, 1000);
      
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [isExpanded]);

  return (
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
          <div dangerouslySetInnerHTML={{ __html: '<givebutter-widget id="LYxbKj"></givebutter-widget>' }} />
        </div>
      )}
    </div>
  );
}
