export default function HomePage() {
  return (
    <>
      <section className="history-hero">
        <div className="hero-content">
          <h1>Introducing Starphone</h1>
          <p>
            Starphone is designed to provide secure, reliable communication even in the harshest environments where other systems fall short or fail. Our mission is to connect business, people, and things innovatively, overcoming mobile dead zones due to blackouts, network overloads, or inaccessibility. From Earth to space, we aim to redefine communication.
          </p>
        </div>
      </section>

      <section className="features">
        <h2>Why Starphone?</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <h3>🌐 Global Coverage</h3>
            <p>Connect anywhere, from urban environments to the most remote locations on Earth and beyond.</p>
          </div>
          <div className="feature-item">
            <h3>🔒 Secure Communication</h3>
            <p>End-to-end encryption ensures your conversations remain private and protected.</p>
          </div>
          <div className="feature-item">
            <h3>⚡ Always Reliable</h3>
            <p>Built to withstand extreme conditions and network disruptions.</p>
          </div>
          <div className="feature-item">
            <h3>🚀 Future-Ready</h3>
            <p>Designed for both terrestrial and space-based communication networks.</p>
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <h2>Join the Communication Revolution</h2>
        <p>Be part of the future of secure, reliable public communication.</p>
        <a href="/contact" className="cta-button">
          Get in Touch
        </a>
      </section>
    </>
  );
}
