import type { Metadata } from 'next';
import styles from './how-it-works.module.css';

export const metadata: Metadata = {
  title: 'How It Works | Starphone Technology',
  description: 'Learn about the technology behind Starphone. Discover our secure communication systems, network architecture, and innovative features.',
  openGraph: {
    title: 'How It Works | Starphone Technology',
    description: 'The technology and innovation powering Starphone communication systems.',
    url: 'https://www.thestarphone.com/how-it-works',
  },
};

export default function HowItWorksPage() {
  return (
    <div className={styles.howItWorksPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>How It Works</h1>
          <p className={styles.heroSubtitle}>The technology behind reliable communication</p>
        </div>
      </section>

      <section className={styles.overview}>
        <div className={styles.container}>
          <h2>Technology Overview</h2>
          <p className={styles.leadText}>
            Starphone utilizes cutting-edge technology to provide secure, reliable communication in the most challenging environments where traditional systems fail.
          </p>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔐</div>
              <h3>End-to-End Encryption</h3>
              <p>All communications are secured with industry-leading encryption protocols, ensuring your conversations remain private and protected from unauthorized access.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔄</div>
              <h3>Network Redundancy</h3>
              <p>Multiple network paths and failover systems ensure connectivity even when primary networks fail or become overloaded.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🌦️</div>
              <h3>Weather Resistant</h3>
              <p>Designed and tested to withstand extreme weather conditions including high winds, rain, and temperature extremes.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📡</div>
              <h3>Satellite Connectivity</h3>
              <p>Low-latency satellite links provide coverage in areas where terrestrial networks are unavailable or unreliable.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>☀️</div>
              <h3>Solar Powered</h3>
              <p>Self-sufficient solar power systems with battery backup ensure 24/7 operation without grid dependence.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3>Real-time Monitoring</h3>
              <p>IoT sensors monitor environmental conditions, system health, and usage patterns for optimal performance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.architecture}>
        <div className={styles.container}>
          <h2>System Architecture</h2>
          <div className={styles.archContent}>
            <div className={styles.archItem}>
              <h3>1. User Interface</h3>
              <p>Intuitive touchscreen interface designed for ease of use even in stressful situations or harsh conditions.</p>
            </div>
            <div className={styles.archItem}>
              <h3>2. Communication Layer</h3>
              <p>Multi-protocol support including VoIP, traditional telephony, and data transmission with automatic failover.</p>
            </div>
            <div className={styles.archItem}>
              <h3>3. Network Infrastructure</h3>
              <p>Hybrid network architecture leveraging cellular, satellite, and mesh networking for maximum reliability.</p>
            </div>
            <div className={styles.archItem}>
              <h3>4. Power Management</h3>
              <p>Intelligent power distribution system optimizing solar generation, battery storage, and consumption.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
