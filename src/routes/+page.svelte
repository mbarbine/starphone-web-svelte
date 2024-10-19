<script>
    import VideoEmbed from '$lib/components/VideoEmbed.svelte';
    import TeamMemberCard from '$lib/components/TeamMemberCard.svelte';
    import '../lib/styles/global.css';
    
    // Data loaded from +page.js
    export let data;
    
    // Ensure timeline and team are initialized with default values to avoid undefined errors
    const { timeline = [], team = [] } = data;
</script>

<!-- Enhanced Hero Section -->
<section class="history-hero">
    <div class="hero-content">
        <h1>Welcome to Starphone</h1>
        <p>Starphone is designed to provide secure, reliable communication even in the harshest environments. This is more than just a phone—it’s a new era of public communication.</p>
    </div>
    <div class="givebutter-donate">
        <givebutter-widget id="LYxbKj"></givebutter-widget>
        <script async src="https://widgets.givebutter.com/latest.umd.cjs?acct=dOQ0XbCHnxsv4qWo&p=other"></script>
    </div>
</section>

<!-- Enhanced Origin Section -->
<section class="history-timeline section">
    <div class="container">
        <h2>Our Journey: From PH3AR to Starphone</h2>
        <p>Starphone was born from PH3AR, a community-driven initiative focused on pushing the boundaries of technology. Our mission? To develop solutions that enhance human communication in the most challenging environments.</p>
        <div class="timeline">
            {#each timeline as event}
                <div class="timeline-item">
                    <h3>{event.date}</h3>
                    <p>{event.description}</p>
                </div>
            {/each}
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
                <p>Radiation-resistant components and solar-powered autonomy allow Starphone to operate in extreme environments.</p>
            </div>
        </div>
    </div>
</section>

<!-- Enhanced Team Section -->
<section class="about-community section">
    <div class="container">
        <h2>The Team Behind Starphone</h2>
        <div class="team-grid">
            {#each team as member}
                <TeamMemberCard name={member.name} role={member.role} description={member.description} />
            {/each}
        </div>
    </div>
</section>

<!-- Video Embed Section -->
<section class="video-section">
    <div class="container">
        <h2>Learn About the PH3AR community</h2>
        <VideoEmbed videoUrl="https://www.youtube.com/embed/Srobkj3P7EQ" />
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
    /* Hero Section */
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
    .about-community .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 20px;
    }

    /* Call to Action Section */
    .call-to-action {
        background-color: var(--color-primary);
        text-align: center;
        color: var(--color-button-text);
    }

    .call-to-action h2, .video-section h2 {
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

    /* Video Section */
    .video-section {
        text-align: center;
        padding: 60px 0;
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
