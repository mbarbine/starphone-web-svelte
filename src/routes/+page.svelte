<script>
    import VideoEmbed from '$lib/components/VideoEmbed.svelte';
    import TeamMemberCard from '$lib/components/TeamMemberCard.svelte';
    import '../lib/styles/global.css';
    export let pageData;
</script>

<!-- Enhanced Hero Section -->
<section class="about-hero">
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
<section class="about-origin section">
    <div class="container">
        <h2>Our Journey: From PH3AR to Starphone</h2>
        <p>Starphone was born from PH3AR, a community-driven initiative focused on pushing the boundaries of technology. Our mission? To develop solutions that enhance human communication in the most challenging environments.</p>
        <div class="timeline">
            <div class="timeline-item">
                <h3>2021</h3>
                <p>PH3AR Visits Starbase for the first time.</p>
            </div>
            <div class="timeline-item">
                <h3>2022</h3>
                <p>Proof of Concept Public Phone at Starbase, TX. Does not survive Starship launch IFT2.</p>
            </div>
            <div class="timeline-item">
                <h3>2023</h3>
                <p>Proof of Concept Public Phone at Starbase, TX. Does not survive Starship launch IFT2.</p>
            </div>
            <div class="timeline-item">
                <h3>2024 Q1</h3>
                <p>Concept for Starphone begins, focused on developing a public communication device for extreme conditions.</p>
            </div>
            <div class="timeline-item">
                <h3>2024 Q2</h3>
                <p>Phone booth design and prototyping begins, focused on building a custom enclosure "booth" for extreme conditions.</p>
            </div>
            <div class="timeline-item">
                <h3>2024 Q3</h3>
                <p>Prototyping continues, improving the Starphone design.</p>
            </div>
        </div>
    </div>
</section>

<!-- Enhanced Technology Section -->
<section class="about-technology section">
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
<section class="about-team section">
    <div class="container">
        <h2>The Team Behind Starphone</h2>
        <div class="team-grid">
            <TeamMemberCard name="Michael" role="Lead Engineer" description="Leads the development and strategic vision of Starphone technology." />
            <TeamMemberCard name="Patrick" role="Resident Genius" description="Blends retro charm with modern innovation in Starphone's design." />
            <TeamMemberCard name="Rashid" role="Manufacturing" description="Heads production to ensure top-tier craftsmanship in every Starphone." />
            <TeamMemberCard name="Stuart" role="Rapid Prototype Elite" description="Spearheads operations to keep prototyping fast and efficient." />
            <TeamMemberCard name="John" role="Marketing" description="Builds awareness and fosters relationships with key communities." />
            <TeamMemberCard name="Kelly" role="Treasurer" description="Manages financial planning for sustainable growth and innovation." />
            <TeamMemberCard name="Darwin" role="Canadian Operations" description="Leads Starphone's expansion into the Canadian market." />
            <TeamMemberCard name="Turk" role="Internetworking Master" description="Architects Starphone's secure and reliable global network infrastructure." />
            <TeamMemberCard name="Kacee" role="Quality Assurance" description="Ensures product quality and reliability at every stage of development." />
            <TeamMemberCard name="John" role="Security" description="" />
            <TeamMemberCard name="Louis" role="Moral Support" description="" />
            <TeamMemberCard name="Michelle" role="Moral Support" description="" />

        </div>
    </div>
</section>

<!-- Video Embed Section -->
<section class="video-section">
    <div class="container">
        <h2>Explore More About Starphone</h2>
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
    /* General Styling */
    .about-hero {
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

    .section {
        padding: 60px 0;
    }

    .about-origin, .about-technology, .about-team, .call-to-action, .video-section {
        background-color: var(--color-background);
        color: var(--color-text);
    }

    .tech-features, .team-grid {
        display: flex;
        justify-content: space-between;
        gap: 30px;
        flex-wrap: wrap;
    }

    .tech-item, .timeline-item {
        flex: 1;
        background-color: var(--color-secondary);
        padding: 20px;
        border-radius: 8px;
        text-align: center;
        box-shadow: var(--box-shadow);
        margin-bottom: 20px;
    }

    /* Team Section */
    .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 20px;
    }

    .team-grid > * {
        background-color: var(--color-secondary);
        padding: 20px;
        border-radius: 8px;
        box-shadow: var(--box-shadow);
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    /* Call to Action Section */
    .call-to-action {
        text-align: center;
        background-color: var(--color-primary);
        color: white;
    }

    .call-to-action h2, .video-section h2 {
        font-size: 2rem;
        margin-bottom: 20px;
    }

    .call-to-action p {
        font-size: 1.1rem;
        margin-bottom: 30px;
    }

    .call-to-action .button {
        background-color: var(--color-secondary);
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        text-decoration: none;
        transition: background-color 0.3s ease;
    }

    .call-to-action .button:hover {
        background-color: var(--color-secondary-dark);
    }

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

        .team-grid, .tech-features, .timeline {
            flex-direction: column;
        }

        .team-grid > * {
            max-width: 100%;
        }

        .call-to-action, .video-section {
            padding: 40px 0;
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
