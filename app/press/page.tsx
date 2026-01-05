export default function PressPage() {
  return (
    <div className="container" style={{ padding: '2rem' }}>
      <h1>Press & Media</h1>
      <section>
        <h2>Press Releases</h2>
        <p>Stay updated with the latest news about Starphone.</p>
        <div style={{ marginTop: '2rem' }}>
          <div className="press-item" style={{ marginBottom: '2rem' }}>
            <h3>Starphone Launches Revolutionary Communication Platform</h3>
            <p className="date">2024</p>
            <p>Starphone announces the launch of its secure public communication platform designed for extreme environments.</p>
          </div>
        </div>
      </section>
      
      <section style={{ marginTop: '3rem' }}>
        <h2>Media Contact</h2>
        <p>For press inquiries, please contact: <a href="mailto:press@thestarphone.com">press@thestarphone.com</a></p>
      </section>
    </div>
  );
}
