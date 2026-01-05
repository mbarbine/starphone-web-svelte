export default function AboutPage() {
  return (
    <div className="container" style={{ padding: '2rem' }}>
      <section className="about-hero">
        <h1>About Starphone</h1>
        <p>Revolutionizing communication in extreme environments</p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Starphone is on a mission to provide secure, reliable communication in environments where traditional systems fail. From remote locations on Earth to the challenging conditions of space, we're building the next generation of public communication infrastructure.
        </p>
      </section>

      <section className="team">
        <h2>Our Team</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div className="team-member">
            <h3>Michael Barbine</h3>
            <p>Co-Founder</p>
            <p>Visionary leader driving innovation in communication technology</p>
          </div>
          <div className="team-member">
            <h3>Patrick Modin</h3>
            <p>Co-Founder</p>
            <p>Technical expert ensuring reliability and security</p>
          </div>
        </div>
      </section>
    </div>
  );
}
