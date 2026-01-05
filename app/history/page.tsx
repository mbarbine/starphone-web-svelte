import type { Metadata } from 'next';
import styles from './history.module.css';

export const metadata: Metadata = {
  title: 'History | Starphone Development Journey',
  description: 'Discover the history and evolution of Starphone from initial concept to deployed communication systems. See our milestones and achievements.',
  openGraph: {
    title: 'History | Starphone Development Journey',
    description: 'The story of Starphone\'s journey from concept to reality.',
    url: 'https://www.thestarphone.com/history',
  },
};

export default function HistoryPage() {
  return (
    <div className={styles.historyPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>History & Future of Communication</h1>
          <p className={styles.heroSubtitle}>Explore the evolution of public communication from the invention of the telephone to the next leap with Starphone</p>
        </div>
      </section>

      <section className={styles.timeline}>
        <div className={styles.container}>
          <h2>The Journey of Public Phone and Starphone</h2>
          <div className={styles.timelineTrack}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>📞</div>
              <div className={styles.timelineContent}>
                <h3>1876 - Invention of the Telephone</h3>
                <p>Alexander Graham Bell invents the telephone, revolutionizing human communication forever.</p>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>🏛️</div>
              <div className={styles.timelineContent}>
                <h3>1889 - First Public Telephone</h3>
                <p>First public telephone installed in Connecticut, making communication accessible to everyone.</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>🌍</div>
              <div className={styles.timelineContent}>
                <h3>1900s - Global Expansion</h3>
                <p>Expansion of telephone networks worldwide, connecting continents and cultures.</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>🏙️</div>
              <div className={styles.timelineContent}>
                <h3>1960s - Urban Revolution</h3>
                <p>Public telephones become common in cities, making communication accessible on every street corner.</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>📈</div>
              <div className={styles.timelineContent}>
                <h3>1980s - Peak Usage</h3>
                <p>Peak of public telephone usage as they become essential urban infrastructure.</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>📱</div>
              <div className={styles.timelineContent}>
                <h3>2000s - Mobile Era</h3>
                <p>Decline of public telephones with the rise of mobile phones, but a gap emerges for reliable public infrastructure.</p>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>🎯</div>
              <div className={styles.timelineContent}>
                <h3>2023 - The Vision</h3>
                <p>Starphone was conceived with a bold vision: to revolutionize public communication and make it reliable even in the most extreme environments.</p>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>🔨</div>
              <div className={styles.timelineContent}>
                <h3>October 2023 - First Prototype</h3>
                <p>Our first public phone booth prototype was built from cardboard and laser-cut panels. The prototype was deployed near SpaceX Starbase and received its first calls from visitors including Darwin from Canada, proving the concept works in real-world conditions.</p>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>🌪️</div>
              <div className={styles.timelineContent}>
                <h3>2023-2024 - Extreme Testing</h3>
                <p>The booth withstood extreme weather conditions including high winds near SpaceX launches and harsh Texas weather. Post-IFT3, we didn&apos;t think it would survive, but it did! We tested at remote locations including Shenandoah National Park and gathered valuable real-world data.</p>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>📡</div>
              <div className={styles.timelineContent}>
                <h3>2024 - Enhanced Systems</h3>
                <p>Added IoT environmental sensors, improved network redundancy with Starlink and cellular, and developed enhanced security protocols. Participated in Maker Faire Alexandria and FEMA demonstrations. The stainless steel booth prototype was completed.</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>🚀</div>
              <div className={styles.timelineContent}>
                <h3>2025 - Prototype Finalized</h3>
                <p>Starphone prototype finalized with space-grade engineering and ready for deployment.</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>🌐</div>
              <div className={styles.timelineContent}>
                <h3>2026 - Expansion</h3>
                <p>Starphone expands to major cities and rural areas, providing reliable communication infrastructure.</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>🌙</div>
              <div className={styles.timelineContent}>
                <h3>2027 - Starphone on the Moon</h3>
                <p>First Starphone deployed for lunar communications.</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>🛰️</div>
              <div className={styles.timelineContent}>
                <h3>2028 - Space Stations</h3>
                <p>Space stations equipped with Starphones for reliable crew communication.</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>🪐</div>
              <div className={styles.timelineContent}>
                <h3>2030 - Interplanetary</h3>
                <p>Interplanetary communication powered by Starphone, connecting humanity across the solar system.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PH3AR Community Section */}
      <section className={styles.community}>
        <div className={styles.container}>
          <h2>PH3AR: Community & Collaboration</h2>
          <p className={styles.communityIntro}>
            PH3AR is a growing community of technologists, engineers, geeks, gamers and dreamers who work together and play together. Starphone is one of our flagship projects, and it represents the spirit of collaboration and innovation that defines PH3AR.
          </p>
          <div className={styles.communityQuote}>
            <blockquote>
              &quot;PH3AR isn&apos;t just a community. It&apos;s a place where ideas come alive, and Starphone is a testament to that innovation.&quot;
            </blockquote>
            <cite>— PH3AR Member</cite>
          </div>
          <div className={styles.ctaActions}>
            <a href="https://www.ph3ar.com/about" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              Learn About PH3AR
            </a>
            <a href="/support" className={styles.ctaButtonSecondary}>
              Support the Mission
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
