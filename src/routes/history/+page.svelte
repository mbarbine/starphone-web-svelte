<script>
    import VideoEmbed from '$lib/components/VideoEmbed.svelte';
    import '../../lib/styles/global.css';
</script>

<!-- Enhanced Hero Section -->
<section class="history-hero">
    <div class="hero-content">
        <h1>History & Future of the Telephone</h1>
        <p>Explore the evolution of public communication from the invention of the telephone to the next leap with Starphone.</p>
    </div>
    <div class="givebutter-donate">
        <givebutter-widget id="LYxbKj"></givebutter-widget>
        <script async src="https://widgets.givebutter.com/latest.umd.cjs?acct=dOQ0XbCHnxsv4qWo&p=other"></script>
    </div>
</section>

<!-- Enhanced Timeline Section -->
<section class="history-timeline section">
    <div class="container">
        <h2>The Journey of Public Phone and Starphone</h2>
        <div class="timeline">
            <div class="timeline-item">
                <h3>1876</h3>
                <p>Invention of the Telephone</p>
            </div>
            <div class="timeline-item">
                <h3>1889</h3>
                <p>First Public Telephone Installed in Connecticut</p>
            </div>
            <div class="timeline-item">
                <h3>1900s</h3>
                <p>Expansion of Telephone Networks Worldwide</p>
            </div>
            <div class="timeline-item">
                <h3>1960s</h3>
                <p>Public Telephones Become Common in Cities</p>
            </div>
            <div class="timeline-item">
                <h3>1980s</h3>
                <p>Peak of Public Telephone Usage</p>
            </div>
            <div class="timeline-item">
                <h3>2000s</h3>
                <p>Decline of Public Telephones with Mobile Phones</p>
            </div>
            <div class="timeline-item">
                <h3>2024</h3>
                <p>Introduction of Starphone: The Next Evolution</p>
            </div>
            <div class="timeline-item">
                <h3>2025</h3>
                <p>Starphone Prototype Finalized</p>
            </div>
            <div class="timeline-item">
                <h3>2026</h3>
                <p>Starphone Expands to Major Cities and Rural Areas</p>
            </div>
            <div class="timeline-item">
                <h3>2027</h3>
                <p>Starphone on the Moon</p>
            </div>
            <div class="timeline-item">
                <h3>2028</h3>
                <p>Space Stations Equipped with Starphones</p>
            </div>
            <div class="timeline-item">
                <h3>2030</h3>
                <p>Interplanetary Communication Powered by Starphone</p>
            </div>
        </div>
    </div>
</section>

<!-- Enhanced Technology Section -->
<section class="technology-section section">
    <div class="container">
        <h2>The Technology Behind Starphone</h2>
        <div class="tech-features">
            <div class="tech-item">
                <h3>Faraday Cage Protection</h3>
                <p>Starphone's outer shell blocks electromagnetic interference, ensuring secure communication in high-EMI environments.</p>
            </div>
            <div class="tech-item">
                <h3>Hybrid Network System</h3>
                <p>Switch between satellite, cellular, and VoIP networks for constant connectivity.</p>
            </div>
            <div class="tech-item">
                <h3>Space-Grade Engineering</h3>
                <p>Radiation-resistant components and solar-powered autonomy allow Starphone to operate in the most extreme environments.</p>
            </div>
        </div>
    </div>
</section>

<!-- Enhanced Community Section -->
<section class="about-community section">
    <div class="container">
        <h2>PH3AR: Community & Collaboration</h2>
        <p>PH3AR is a growing community of technologists, engineers, and dreamers who work together to build impactful solutions. Starphone is one of our flagship projects, and it represents the spirit of collaboration and innovation that defines PH3AR.</p>
        <div class="community-grid">
            <div class="community-quote">
                <blockquote>"PH3AR isn’t just a community. It’s a place where ideas come alive, and Starphone is a testament to that innovation."</blockquote>
                <cite>— PH3AR Member</cite>
            </div>
        </div>
    </div>
</section>

<!-- Call to Action Section -->
<section class="call-to-action section">
    <div class="container">
        <h2>Join the Movement</h2>
        <p>Be a part of something bigger. Whether you're an engineer, designer, or visionary, PH3AR and Starphone are looking for talented people to help shape the future of communication.</p>
        <a href="/support" class="button">Support Us</a>
    </div>
</section>

<style>
    /* Enhanced Hero Section */
    .history-hero {
        background-color: var(--color-primary-dark);
        color: var(--color-button-text);
        text-align: center;
        padding: 80px 0;
    }

    .hero-content {
        max-width: 800px;
        margin: 0 auto;
        background: rgba(0, 0, 0, 0.6);
        padding: 20px;
        border-radius: 8px;
    }

    .hero-content h1 {
        font-size: 2.5rem;
        margin-bottom: 20px;
    }

    .hero-content p {
        font-size: 1.2rem;
    }

    /* Section Spacing */
    .section {
        padding: 60px 0;
    }

    /* Timeline Section */
    .history-timeline {
        background-color: var(--color-background);
        color: var(--color-text);
    }

    .timeline {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 20px;
    }

    .timeline-item {
        background-color: var(--color-secondary);
        padding: 20px;
        text-align: center;
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
    }

    .timeline-item h3 {
        color: var(--color-primary-dark);
        margin-bottom: 10px;
    }

    .timeline-item p {
        font-size: 1.1rem;
        color: var(--color-text-dark);
    }

    /* Technology Section */
    .technology-section .tech-features {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        flex-wrap: wrap;
    }

    .tech-item {
        flex: 1;
        text-align: center;
        background-color: var(--color-secondary);
        padding: 20px;
        border-radius: var(--border-radius);
        min-width: 220px;
    }

    .tech-item h3 {
        color: var(--color-primary-dark);
    }

    /* Community Section */
    .about-community .community-grid {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 40px;
    }

    .community-quote {
        text-align: center;
        font-size: 1.3rem;
    }

    .community-quote blockquote {
        font-style: italic;
        color: var(--color-text);
    }

    .community-quote cite {
        display: block;
        margin-top: 10px;
        font-size: 1rem;
        color: var(--color-text-dark);
    }

    /* Call to Action Section */
    .call-to-action {
        background-color: var(--color-primary);
        text-align: center;
        color: var(--color-button-text);
    }

    .call-to-action h2 {
        font-size: 2rem;
        margin-bottom: 20px;
    }

    .call-to-action p {
        font-size: 1rem;
        margin-bottom: 30px;
    }

    .call-to-action .button {
        background-color: var(--color-secondary);
        color: var(--color-button-text);
        padding: 12px 24px;
        border-radius: 8px;
        text-decoration: none;
        transition: background-color var(--transition-speed) ease;
    }

    .call-to-action .button:hover {
        background-color: var(--color-secondary-dark);
    }

    /* Media Queries */
    @media (max-width: 768px) {
        .hero-content h1 {
            font-size: 2rem;
        }

        .hero-content p {
            font-size: 1rem;
        }

        .timeline {
            grid-template-columns: 1fr;
        }

        .tech-features {
            flex-direction: column;
        }
    }

    @media (max-width: 480px) {
        .hero-content h1 {
            font-size: 1.8rem;
        }

        .hero-content p {
            font-size: 0.9rem;
        }

        .call-to-action h2 {
            font-size: 1.8rem;
        }

        .call-to-action p {
            font-size: 0.9rem;
        }
    }
</style>
