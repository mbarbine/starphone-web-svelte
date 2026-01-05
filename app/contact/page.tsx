export default function ContactPage() {
  return (
    <div className="container" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Contact Us</h1>
      <p>Get in touch with the Starphone team</p>

      <div style={{ marginTop: '2rem' }}>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            <strong>Phone:</strong> <a href="tel:+1-540-671-1261">+1-540-671-1261</a>
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:info@thestarphone.com">info@thestarphone.com</a>
          </p>
        </div>

        <div className="social-links" style={{ marginTop: '2rem' }}>
          <h2>Follow Us</h2>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <a href="https://twitter.com/barbinary" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://github.com/ph3ar" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/michaelbarbine" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}
