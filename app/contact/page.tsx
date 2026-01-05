import type { Metadata } from 'next';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact Starphone | Get In Touch',
  description: 'Get in touch with the Starphone team. Reach out for partnerships, inquiries, or to learn more about our secure communication solutions.',
  openGraph: {
    title: 'Contact Starphone | Get In Touch',
    description: 'Connect with the Starphone team for inquiries and partnerships.',
    url: 'https://www.thestarphone.com/contact',
  },
};

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Get In Touch</h1>
          <p className={styles.heroSubtitle}>We&apos;d love to hear from you</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2>Contact Information</h2>
              <div className={styles.infoBlock}>
                <div className={styles.icon}>📞</div>
                <div>
                  <h3>Phone</h3>
                  <a href="tel:+1-540-671-1261">+1-540-671-1261</a>
                </div>
              </div>
              <div className={styles.infoBlock}>
                <div className={styles.icon}>✉️</div>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:info@thestarphone.com">info@thestarphone.com</a>
                </div>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <h2>Follow Our Journey</h2>
              <p>Stay updated on our latest developments and innovations</p>
              <div className={styles.socialGrid}>
                <a href="https://twitter.com/barbinary" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                  <span className={styles.socialIcon}>𝕏</span>
                  <span>Twitter</span>
                </a>
                <a href="https://github.com/ph3ar" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                  <span className={styles.socialIcon}>💻</span>
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/michaelbarbine" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                  <span className={styles.socialIcon}>💼</span>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
