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
            <div className={styles.heroBadge}>🛸 BUILDING THE FUTURE</div>
            <h1 className={styles.heroTitle}>
              The Phone Booth
              <br />
              <span className={styles.heroAccent}>of Tomorrow</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Imagine a phone that works ANYWHERE—in the desert, on a mountain, even in SPACE! 🚀 We&apos;re building super-powered communication booths that use satellites, mesh networks, AI, and solar power. When everything else fails, Starphone stays connected.
            </p>
            <div className={styles.heroActions}>
              <Link href="/gallery" className={styles.ctaPrimary}>
                🎬 See It In Action
              </Link>
              <Link href="/how-it-works" className={styles.ctaSecondary}>
                🔧 How It Works
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/images/starphone-booth-sketch.svg"
            alt="Starphone booth variant isometric design"
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
          <h2 className={styles.sectionTitle}>⚡ Super Powers ⚡</h2>
          <p className={styles.sectionSubtitle}>
            What makes Starphone awesome?
          </p>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🛰️</div>
              <h3>Satellite Link</h3>
              <p>Connects to satellites orbiting Earth! When cell towers fail, we bounce signals off SPACE. 🌍→🛰️→📱</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🕸️</div>
              <h3>Mesh Network Magic</h3>
              <p>Booths talk to each other like a web! Data hops from booth to booth until it reaches you. No towers needed!</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🤖</div>
              <h3>AI Brain Inside</h3>
              <p>Machine learning picks the best signal path in milliseconds. Smarter than your average phone booth!</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>☀️</div>
              <h3>Solar Powered</h3>
              <p>Runs on sunlight! No plugs, no wires—just pure solar energy keeping you connected anywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing & Story Section */}
      <section className={styles.showcase}>
        <div className={styles.container}>
          <div className={styles.showcaseGrid}>
            <div className={styles.showcaseContent}>
              <h2>🏗️ Manufacturing & Story</h2>
              <p>
                From humble sketches to industrial-grade manufacturing, the Starphone journey is one of relentless innovation.
                Our booths are designed for modularity and durability, capable of withstanding extreme temperatures and radiation.
              </p>
              <p>
                We leverage <a href="https://gridnet.ai" target="_blank" rel="noopener noreferrer" className={styles.link}>Gridnet.ai</a> for decentralized connectivity optimization and <a href="https://npaas.platphormnews.com" target="_blank" rel="noopener noreferrer" className={styles.link}>NPaaS</a> (News Platform as a Service) for real-time information dissemination in crisis zones.
              </p>
            </div>
            <div className={styles.showcaseImage}>
               <Image
                src="/images/starphone-booth-sketch.svg"
                alt="Starphone booth manufacturing sketch"
                width={600}
                height={450}
                className={styles.showcaseImg}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Space Data Centers Section */}
      <section className={styles.features}>
        <div className={styles.container}>
            <h2 className={styles.sectionTitle}>🚀 Data Centers in Space</h2>
            <p className={styles.sectionSubtitle}>The Next Frontier of Computing</p>
            <div className={styles.featureGrid}>
                <div className={styles.featureCard}>
                    <div className={styles.featureIcon}>🌌</div>
                    <h3>Orbital Computing</h3>
                    <p>
                        Processing data in orbit reduces latency for satellite communications and Earth observation.
                        Read more about <a href="https://www.datacenterknowledge.com/edge-computing/data-centers-in-space-the-next-frontier" target="_blank" rel="noopener noreferrer" className={styles.link}>Data Centers in Space</a>.
                    </p>
                </div>
                <div className={styles.featureCard}>
                    <div className={styles.featureIcon}>❄️</div>
                    <h3>Natural Cooling</h3>
                    <p>The vacuum of space provides infinite cooling capacity, reducing the energy footprint of high-performance computing clusters.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>6G</div>
              <div className={styles.statLabel}>Ready 📡</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>☢️</div>
              <div className={styles.statLabel}>Backup Power</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>🧠</div>
              <div className={styles.statLabel}>ML Powered</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>🌌</div>
              <div className={styles.statLabel}>Space Ready</div>
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
              <h2>🔥 Battle-Tested Tech</h2>
              <p>
                We&apos;ve tested Starphone in WILD places—next to SpaceX rockets, in dusty deserts, through crazy storms! When other phones say &quot;No Signal,&quot; ours keeps working.
              </p>
              <ul className={styles.showcaseList}>
                <li>🌪️ Survives any weather</li>
                <li>🔄 Multiple backup connections</li>
                <li>☀️ Powers itself with the sun</li>
                <li>📊 Sensors track everything</li>
              </ul>
              <Link href="/how-it-works" className={styles.ctaLink}>
                🔬 Nerd Out On The Tech →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>🚀 Join the Mission!</h2>
          <p>
            We&apos;re building something BIG. Starphone isn&apos;t just a project—it&apos;s a mission to connect EVERYONE, EVERYWHERE. Help us make it real!
          </p>
          <div className={styles.ctaActions}>
            <Link href="/support" className={styles.ctaPrimary}>
              💪 Help Us Build It
            </Link>
            <Link href="/about" className={styles.ctaSecondary}>
              👥 Meet The Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
