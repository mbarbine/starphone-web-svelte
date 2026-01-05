import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>Starphone</h3>
          <p>Secure public communication for extreme environments</p>
        </div>
        
        <div className={styles.section}>
          <h4>Quick Links</h4>
          <nav className={styles.links}>
            <a href="/about">About</a>
            <a href="/gallery">Gallery</a>
            <a href="/contact">Contact</a>
            <a href="/support">Support</a>
          </nav>
        </div>
        
        <div className={styles.section}>
          <h4>Follow Us</h4>
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
          </div>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Starphone. All rights reserved.</p>
        <p>Contact: <a href="tel:+1-540-671-1261">+1-540-671-1261</a></p>
      </div>
    </footer>
  );
}
