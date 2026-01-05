'use client';

import { useEffect, useState } from 'react';

export default function SupportPage() {
  const [sensorData, setSensorData] = useState<any>(null);

  useEffect(() => {
    fetch('/api/sensor-data')
      .then(res => res.json())
      .then(data => setSensorData(data))
      .catch(err => console.error('Failed to load sensor data:', err));
  }, []);

  return (
    <div className="container" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-primary-dark, #000494)' }}>Support Starphone</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: 'var(--color-text-secondary, #5a5a5a)' }}>
        Help us build the future of secure, reliable public communication
      </p>

      {/* Main Donate CTA */}
      <section style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <div 
          style={{ 
            background: 'linear-gradient(135deg, var(--color-primary, #006494) 0%, var(--color-primary-dark, #000494) 100%)', 
            padding: '4rem 2rem', 
            borderRadius: '24px', 
            boxShadow: 'var(--box-shadow-elevated, 0 12px 40px rgba(0,0,0,0.2))',
          }}
        >
          <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1rem' }}>🚀 Support Our Mission</h2>
          <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Your contribution helps us build and deploy secure communication infrastructure for communities everywhere.
          </p>
          <a 
            href="https://givebutter.com/ph3ar"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#FFB30F',
              color: '#000494',
              padding: '1.25rem 3rem',
              borderRadius: '50px',
              fontSize: '1.3rem',
              fontWeight: '700',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(255, 179, 15, 0.4)',
              transition: 'all 0.3s ease',
            }}
          >
            💝 Donate Now
          </a>
        </div>
      </section>

      {/* Support Options */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-primary-dark, #000494)' }}>Other Ways to Support</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <div style={{ background: 'var(--color-surface, #f5f6fa)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #FFB30F' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary-dark, #000494)' }}>💝 Patreon</h3>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-secondary, #5a5a5a)' }}>
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

          <div style={{ background: 'var(--color-surface, #f5f6fa)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #000494' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary-dark, #000494)' }}>💻 GitHub</h3>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-secondary, #5a5a5a)' }}>
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

      {/* Technical Support Section */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-primary-dark, #000494)' }}>Technical Support</h2>
        <p style={{ marginBottom: '1rem', color: 'var(--color-text-secondary, #5a5a5a)' }}>Need help? Our support team is here to assist you.</p>
        <div style={{ background: 'var(--color-surface, #f5f6fa)', padding: '2rem', borderRadius: '12px' }}>
          <p style={{ marginBottom: '0.5rem', color: 'var(--color-text, inherit)' }}>
            <strong>Phone:</strong> <a href="tel:+1-540-671-1261" style={{ color: 'var(--color-primary, #006494)', textDecoration: 'none' }}>+1-540-671-1261</a>
          </p>
          <p style={{ color: 'var(--color-text, inherit)' }}>
            <strong>Email:</strong> <a href="mailto:michael@barbineworldwide.com" style={{ color: 'var(--color-primary, #006494)', textDecoration: 'none' }}>michael@barbineworldwide.com</a>
          </p>
        </div>
      </section>

      {/* System Status */}
      {sensorData && (
        <section>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-primary-dark, #000494)' }}>System Status</h2>
          <div style={{ background: 'var(--color-surface, #f5f6fa)', padding: '2rem', borderRadius: '12px' }}>
            <p style={{ marginBottom: '0.75rem', color: 'var(--color-text, inherit)' }}><strong>Temperature:</strong> {sensorData.temperature?.toFixed(1)}°C</p>
            <p style={{ marginBottom: '0.75rem', color: 'var(--color-text, inherit)' }}><strong>Humidity:</strong> {sensorData.humidity?.toFixed(1)}%</p>
            <p style={{ marginBottom: '0.75rem', color: 'var(--color-text, inherit)' }}><strong>Pressure:</strong> {sensorData.pressure?.toFixed(1)} hPa</p>
            <p style={{ color: 'var(--color-text, inherit)' }}><strong>Last Updated:</strong> {new Date(sensorData.timestamp).toLocaleString()}</p>
          </div>
        </section>
      )}
    </div>
  );
}
