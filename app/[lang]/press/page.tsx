import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './press.module.css';

export const metadata: Metadata = {
  title: 'Press & Media | Starphone in the News',
  description: 'Starphone press coverage, media appearances, and news articles. See where Starphone has been featured and get press resources.',
  openGraph: {
    title: 'Press & Media | Starphone in the News',
    description: 'Starphone press coverage and media resources.',
    url: 'https://starphone.platphormnews.com/press',
  },
};

export default function PressPage() {
  return (
    <div className={styles.pressPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Press & Media</h1>
          <p className={styles.heroSubtitle}>Starphone in the news</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.pressSection}>
            <h2>Recent Coverage</h2>
            
            <div className={styles.pressItem}>
              <div className={styles.pressImage}>
                <Image
                  src="/images/makerfaire.png"
                  alt="Maker Faire Alexandria coverage"
                  width={400}
                  height={300}
                  className={styles.articleImage}
                />
              </div>
              <div className={styles.pressContent}>
                <h3>Tech and gadget-focused MakerFaire coming to Alexandria City High School this weekend</h3>
                <p className={styles.pressDate}>October 16, 2024 • ALXnow</p>
                <p>Starphone showcased at Alexandria&apos;s MakerFaire, demonstrating our innovative public communication booth to the local maker community.</p>
                <a 
                  href="https://www.alxnow.com/2024/10/16/tech-and-gadget-focused-makerfaire-coming-to-alexandria-city-high-school-this-weekend/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.pressLink}
                >
                  Read Full Article →
                </a>
              </div>
            </div>

            <div className={styles.pressItem}>
              <div className={styles.pressContent}>
                <h3>Starphone Launches Revolutionary Communication Platform</h3>
                <p className={styles.pressDate}>2024</p>
                <p>Starphone announces the launch of its secure public communication platform designed for extreme environments, from cities to space.</p>
              </div>
            </div>
          </div>

          <div className={styles.mediaKit}>
            <h2>Media Kit</h2>
            <p>Download logos, images, and press materials for media coverage.</p>
            <div className={styles.mediaLinks}>
              <a href="/images/starphone-main-logo-color.png" download className={styles.downloadButton}>
                📥 Download Logo
              </a>
              <a href="/making-of-starphone/Starphone-Design-Drawings.pdf" download className={styles.downloadButton}>
                📄 Design Drawings
              </a>
            </div>
          </div>

          <div className={styles.contactSection}>
            <h2>Media Contact</h2>
            <p>For press inquiries, interviews, or media requests:</p>
            <div className={styles.contactInfo}>
              <p><strong>Email:</strong> <a href="mailto:michael@barbineworldwide.com">michael@barbineworldwide.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+1-540-671-1261">+1-540-671-1261</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
