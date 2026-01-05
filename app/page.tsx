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
              From Earth to space, Starphone delivers reliable public communication in the most extreme environments where traditional systems fail.
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

      {/* Hero Video Section */}
      <section className={styles.heroVideo}>
        <div className={styles.container}>
          <div className={styles.videoWrapper}>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className={styles.featuredVideo}
              poster="/images/starphone-hero-square.png"
            >
              <source src="/making-of-starphone/itsringing.mov" type="video/quicktime" />
              <source src="/making-of-starphone/itsringing.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className={styles.videoCaption}>
              <h3>📞 It&apos;s Ringing!</h3>
              <p>Watch our first successful call at Starbase</p>
            </div>
          </div>
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
          <h2>Join the Communication Revolution</h2>
          <p>Be part of the future of secure, reliable public communication infrastructure.</p>
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

