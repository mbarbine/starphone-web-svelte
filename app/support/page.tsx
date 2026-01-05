'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function SupportPage() {
  const [sensorData, setSensorData] = useState<any>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    fetch('/api/sensor-data')
      .then(res => res.json())
      .then(data => setSensorData(data))
      .catch(err => console.error('Failed to load sensor data:', err));
  }, []);

  useEffect(() => {
    if (scriptLoaded && typeof window !== 'undefined' && (window as any).givebutter) {
      // Force Givebutter widgets to initialize
      setTimeout(() => {
        if ((window as any).givebutter) {
          (window as any).givebutter.init();
        }
      }, 100);
    }
  }, [scriptLoaded]);

  return (
    <>
      <Script 
        src="https://givebutter.com/js/widget.js" 
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />
      
      <div className="container" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#000494' }}>Support Starphone</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: '#5a5a5a' }}>
          Help us build the future of secure, reliable public communication
        </p>

        {/* Support Options */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#000494' }}>Ways to Support</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ background: '#f5f6fa', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #FFB30F' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#000494' }}>💝 Patreon</h3>
              <p style={{ marginBottom: '1.5rem', color: '#5a5a5a' }}>
                Become a patron and get exclusive updates, behind-the-scenes content, and early access to new features.
              </p>
              <a 
                href="https://www.patreon.com/4029452/join" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: 'inline-block',
                  padding: '0.75rem 1.5rem',
                  background: '#FF424D',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
              >
                Join on Patreon
              </a>
            </div>

            <div style={{ background: '#f5f6fa', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #000494' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#000494' }}>💻 GitHub</h3>
              <p style={{ marginBottom: '1.5rem', color: '#5a5a5a' }}>
                Check out our open-source projects, contribute code, or report issues to help improve Starphone.
              </p>
              <a 
                href="https://github.com/ph3ar" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: 'inline-block',
                  padding: '0.75rem 1.5rem',
                  background: '#000494',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
              >
                View on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Givebutter Widgets */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#000494' }}>One-Time Donations</h2>
          <p style={{ marginBottom: '2rem', color: '#5a5a5a' }}>
            Support specific aspects of our mission with a one-time contribution
          </p>
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div 
              style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              dangerouslySetInnerHTML={{ __html: '<givebutter-widget id="LxxMGL"></givebutter-widget>' }}
            />
            <div 
              style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              dangerouslySetInnerHTML={{ __html: '<givebutter-widget id="LYxbKj"></givebutter-widget>' }}
            />
            <div 
              style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              dangerouslySetInnerHTML={{ __html: '<givebutter-widget id="jb63Pj"></givebutter-widget>' }}
            />
          </div>
        </section>

        {/* Technical Support Section */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#000494' }}>Technical Support</h2>
          <p style={{ marginBottom: '1rem', color: '#5a5a5a' }}>Need help? Our support team is here to assist you.</p>
          <div style={{ background: '#f5f6fa', padding: '2rem', borderRadius: '12px' }}>
            <p style={{ marginBottom: '0.5rem' }}>
              <strong>Phone:</strong> <a href="tel:+1-540-671-1261" style={{ color: '#006494', textDecoration: 'none' }}>+1-540-671-1261</a>
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:michael@barbineworldwide.com" style={{ color: '#006494', textDecoration: 'none' }}>michael@barbineworldwide.com</a>
            </p>
          </div>
        </section>

        {/* System Status */}
        {sensorData && (
          <section>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#000494' }}>System Status</h2>
            <div style={{ background: '#f5f6fa', padding: '2rem', borderRadius: '12px' }}>
              <p style={{ marginBottom: '0.75rem' }}><strong>Temperature:</strong> {sensorData.temperature?.toFixed(1)}°C</p>
              <p style={{ marginBottom: '0.75rem' }}><strong>Humidity:</strong> {sensorData.humidity?.toFixed(1)}%</p>
              <p style={{ marginBottom: '0.75rem' }}><strong>Pressure:</strong> {sensorData.pressure?.toFixed(1)} hPa</p>
              <p><strong>Last Updated:</strong> {new Date(sensorData.timestamp).toLocaleString()}</p>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
