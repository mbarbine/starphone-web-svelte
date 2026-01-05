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
          <h1>Our Journey</h1>
          <p className={styles.heroSubtitle}>From concept to reality</p>
        </div>
      </section>

      <section className={styles.timeline}>
        <div className={styles.container}>
          <div className={styles.timelineTrack}>
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
                <p>Our first public phone booth prototype was built from cardboard and laser-cut panels. The prototype was deployed near SpaceX Starbase and received its first calls, proving the concept works.</p>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>🌪️</div>
              <div className={styles.timelineContent}>
                <h3>2023-2024 - Extreme Testing</h3>
                <p>The booth withstood extreme weather conditions including high winds and harsh environments. We tested at remote locations and gathered valuable real-world data.</p>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>📡</div>
              <div className={styles.timelineContent}>
                <h3>2024 - Enhanced Systems</h3>
                <p>Added IoT environmental sensors, improved network redundancy, and developed enhanced security protocols based on field testing feedback.</p>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>🚀</div>
              <div className={styles.timelineContent}>
                <h3>Present - Innovation Continues</h3>
                <p>Ongoing development of next-generation communication solutions for both terrestrial and space-based applications. The journey continues.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
