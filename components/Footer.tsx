import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>Starphone</h3>
          <p>Secure public communication for extreme environments</p>
          <p className={styles.ph3arBrand}>
            A <a href="https://www.ph3ar.com/about" target="_blank" rel="noopener noreferrer">PH3AR</a> project
          </p>
        </div>
        
        <div className={styles.section}>
          <h4>Quick Links</h4>
          <nav className={styles.links}>
            <Link href="/about">About</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/support">Support</Link>
          </nav>
        </div>
        
        <div className={styles.section}>
          <h4>Follow & Support Us</h4>
          <div className={styles.social}>
            <a href="https://twitter.com/barbinary" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              𝕏
            </a>
            <a href="https://github.com/ph3ar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/michaelbarbine" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="https://www.patreon.com/4029452/join" target="_blank" rel="noopener noreferrer" aria-label="Patreon" className={styles.patreonLink}>
              Patreon
            </a>
          </div>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Starphone. All rights reserved.</p>
        <p>Contact: <a href="tel:+1-540-671-1261">+1-540-671-1261</a> | <a href="mailto:michael@barbineworldwide.com">michael@barbineworldwide.com</a></p>
      </div>
    </footer>
  );
}
