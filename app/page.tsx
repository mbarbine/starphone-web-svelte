import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Secure Communication
              <br />
              <span className={styles.heroAccent}>Anywhere, Anytime</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Built for the edge of civilization and beyond—Starphone keeps the line open when networks fail, power drops, and conditions get extreme.
            </p>
            <div className={styles.heroActions}>
              <Link href="/gallery" className={styles.ctaPrimary}>
                See Our Journey
              </Link>
              <Link href="/contact" className={styles.ctaSecondary}>
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/images/starphone-hero-square.png"
            alt="Starphone communication booth"
            fill
            priority
            className={styles.heroImage}
            sizes="100vw"
            quality={90}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Starphone?</h2>
          <p className={styles.sectionSubtitle}>
            Built for reliability when you need it most
          </p>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🌐</div>
              <h3>Global Coverage</h3>
              <p>Connect anywhere, from urban environments to the most remote locations on Earth and beyond.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔒</div>
              <h3>Secure Communication</h3>
              <p>End-to-end encryption ensures your conversations remain private and protected at all times.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3>Always Reliable</h3>
              <p>Built to withstand extreme conditions, network overloads, and disruptions that stop other systems.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🚀</div>
              <h3>Future-Ready</h3>
              <p>Designed for both terrestrial and space-based communication networks of tomorrow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Availability</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Encrypted</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>∞</div>
              <div className={styles.statLabel}>Possibilities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section with Image */}
      <section className={styles.showcase}>
        <div className={styles.container}>
          <div className={styles.showcaseGrid}>
            <div className={styles.showcaseImage}>
              <Image
                src="/images/MoneyShot.jpg"
                alt="Starphone booth in action"
                width={600}
                height={450}
                className={styles.showcaseImg}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
            </div>
            <div className={styles.showcaseContent}>
              <h2>Tested in Extreme Conditions</h2>
              <p>
                Our communication booths have been deployed and tested in some of the most challenging environments imaginable. From the windy conditions near SpaceX Starbase to remote national parks, Starphone proves reliable when traditional systems fail.
              </p>
              <ul className={styles.showcaseList}>
                <li>✓ Weather-resistant design</li>
                <li>✓ Network redundancy</li>
                <li>✓ Solar-powered options</li>
                <li>✓ Real-time environmental monitoring</li>
              </ul>
              <Link href="/how-it-works" className={styles.ctaLink}>
                Learn How It Works →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Help Build the Future Infrastructure</h2>
          <p>
            Starphone is a long-term mission. Your support keeps prototypes shipping, field tests running, and the system evolving year after year.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/support" className={styles.ctaPrimary}>
              Support Our Mission
            </Link>
            <Link href="/about" className={styles.ctaSecondary}>
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

