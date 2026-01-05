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
          <h1>How Starphone Works</h1>
          <p className={styles.heroSubtitle}>Explore the cutting-edge technology that powers Starphone, ensuring reliable communication in the most remote and extreme environments.</p>
        </div>
      </section>

      <section className={styles.overview}>
        <div className={styles.container}>
          <h2>Core Technologies</h2>
          <p className={styles.leadText}>
            Starphone combines multiple cutting-edge technologies to create a resilient, always-available communication system.
          </p>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📡</div>
              <h3>Starlink for Satellite Connectivity</h3>
              <p>Starphone uses Starlink&apos;s satellite network to provide fast, reliable internet in remote locations, ensuring constant communication no matter where you are.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📱</div>
              <h3>LTE & 5G Cellular Networks</h3>
              <p>Switch between LTE, 5G, and T-Mobile&apos;s edge networks for seamless coverage and data access when satellite isn&apos;t available.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>☀️</div>
              <h3>Solar Power & Battery Management</h3>
              <p>With solar panels powering Starphone, it remains operational in remote locations. The battery management system ensures efficient power storage and use.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3>Transfer Switch for Power Cutover</h3>
              <p>Our automatic transfer switch seamlessly switches between power systems, ensuring that Starphone stays online even if one power source fails.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3>IoT Sensors for Monitoring</h3>
              <p>Starphone includes IoT sensors to monitor system health, environmental conditions, and power usage, enabling remote monitoring and management.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔔</div>
              <h3>Remote Monitoring & Alerts</h3>
              <p>Receive alerts and system status updates via SMS or cellular network, ensuring you always stay informed about Starphone&apos;s operational state.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.architecture}>
        <div className={styles.container}>
          <h2>The Starphone Booth</h2>
          <p className={styles.leadText}>
            The Starphone booth is built for durability and extreme environments. Taking inspiration from the Cybertruck, the booth is constructed from 12-gauge stainless steel using advanced manufacturing processes.
          </p>
          <div className={styles.archContent}>
            <div className={styles.archItem}>
              <h3>Material & Design</h3>
              <p>The booth is made from 12-gauge stainless steel for strength and weather resistance, drawing design inspiration from the Cybertruck&apos;s advanced manufacturing techniques.</p>
            </div>
            
            <div className={styles.archItem}>
              <h3>Interior Cooling</h3>
              <p>We use Dynamat and reflective barriers inside the booth to maintain a cool interior. A vent system with a HEPA filter ensures clean air circulation, keeping the booth cool and dust-free.</p>
            </div>
            
            <div className={styles.archItem}>
              <h3>Faraday Cage Protection</h3>
              <p>Starphone&apos;s outer shell blocks electromagnetic interference, ensuring secure communication in high-EMI environments.</p>
            </div>
            
            <div className={styles.archItem}>
              <h3>Waterproof Phone Box</h3>
              <p>The interior phone box is designed to be waterproof, protecting the phone and other sensitive components from environmental elements. The phone box is engineered with water-tight seals to keep it completely waterproof, ensuring durability and protection in the harshest conditions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
