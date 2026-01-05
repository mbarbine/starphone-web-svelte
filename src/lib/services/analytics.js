// Advanced Analytics Integration
// Tracks user behavior, performance metrics, and business KPIs

import { browser } from '$app/environment';

class Analytics {
  constructor() {
    this.events = [];
    this.sessionId = this.generateSessionId();
    this.initialized = false;
  }

  generateSessionId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  init() {
    if (!browser || this.initialized) return;
    
    this.initialized = true;
    
    // Track page views
    this.trackPageView();
    
    // Track performance metrics
    this.trackPerformance();
    
    // Track errors
    this.setupErrorTracking();
    
    // Track engagement
    this.trackEngagement();
  }

  trackEvent(category, action, label, value) {
    const event = {
      category,
      action,
      label,
      value,
      timestamp: new Date().toISOString(),
      sessionId: this.sessionId,
      page: window.location.pathname
    };
    
    this.events.push(event);
    
    // Send to analytics endpoint
    if (browser) {
      this.sendEvent(event);
    }
    
    // Also send to Google Analytics if available
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  }

  async sendEvent(event) {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
      });
    } catch (error) {
      console.error('Analytics error:', error);
    }
  }

  trackPageView() {
    this.trackEvent('pageview', 'view', window.location.pathname);
  }

  trackPerformance() {
    if (!('performance' in window)) return;

    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0];
        
        if (perfData) {
          this.trackEvent('performance', 'load', 'page-load-time', Math.round(perfData.loadEventEnd - perfData.fetchStart));
          this.trackEvent('performance', 'dom-content-loaded', 'dcl-time', Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart));
          this.trackEvent('performance', 'first-paint', 'fp-time', Math.round(perfData.responseStart - perfData.fetchStart));
        }

        // Track Core Web Vitals
        this.trackWebVitals();
      }, 0);
    });
  }

  trackWebVitals() {
    // LCP - Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.trackEvent('web-vitals', 'lcp', 'largest-contentful-paint', Math.round(lastEntry.renderTime || lastEntry.loadTime));
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // FID - First Input Delay
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        this.trackEvent('web-vitals', 'fid', 'first-input-delay', Math.round(entry.processingStart - entry.startTime));
      });
    }).observe({ entryTypes: ['first-input'] });

    // CLS - Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      this.trackEvent('web-vitals', 'cls', 'cumulative-layout-shift', Math.round(clsValue * 1000));
    }).observe({ entryTypes: ['layout-shift'] });
  }

  setupErrorTracking() {
    window.addEventListener('error', (event) => {
      this.trackEvent('error', 'javascript-error', event.message, 0);
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.trackEvent('error', 'unhandled-promise', event.reason, 0);
    });
  }

  trackEngagement() {
    let scrollDepth = 0;
    
    window.addEventListener('scroll', () => {
      const currentDepth = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      
      if (currentDepth > scrollDepth && currentDepth % 25 === 0) {
        scrollDepth = currentDepth;
        this.trackEvent('engagement', 'scroll', `${scrollDepth}%`, scrollDepth);
      }
    });

    // Track time on page
    let startTime = Date.now();
    window.addEventListener('beforeunload', () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      this.trackEvent('engagement', 'time-on-page', window.location.pathname, timeOnPage);
    });

    // Track clicks on important elements
    document.addEventListener('click', (event) => {
      const target = event.target;
      
      // Track button clicks
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        const button = target.tagName === 'BUTTON' ? target : target.closest('button');
        this.trackEvent('engagement', 'button-click', button.textContent.trim() || button.className, 0);
      }
      
      // Track link clicks
      if (target.tagName === 'A' || target.closest('a')) {
        const link = target.tagName === 'A' ? target : target.closest('a');
        this.trackEvent('engagement', 'link-click', link.href, 0);
      }
    });
  }

  // Business KPIs
  trackDonation(amount, method) {
    this.trackEvent('conversion', 'donation', method, amount);
  }

  trackSensorSubmission() {
    this.trackEvent('sensor', 'data-submitted', 'ja4-atlas', 1);
  }

  trackVideoPlay(videoName) {
    this.trackEvent('media', 'video-play', videoName, 0);
  }

  trackImageView(imageName) {
    this.trackEvent('media', 'image-view', imageName, 0);
  }
}

// Export singleton instance
export const analytics = new Analytics();

// Auto-initialize in browser
if (browser) {
  analytics.init();
}
