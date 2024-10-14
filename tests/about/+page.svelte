<script>
    import VideoEmbed from '$lib/components/VideoEmbed.svelte';
    import TeamMemberCard from '$lib/components/TeamMemberCard.svelte';
    import '../../lib/styles/global.css';  // Ensure this path is correct based on your folder structure
    export let pageData;
</script>

<!-- Enhanced Hero Section -->
<section class="about-hero">
    <div class="hero-content">
        <h1>Welcome to the Future of Communication</h1>
        <p>Starphone is designed to provide secure, reliable communication even in the harshest environments. This is more than just a phone—it’s a new era of public communication.</p>
    </div>
</section>

<!-- Enhanced Origin Section -->
<section class="about-origin section">
    <div class="container">
        <h2>Our Journey: From PH3AR to Starphone</h2>
        <p>
            Starphone was born from PH3AR, a community-driven initiative focused on pushing the boundaries of technology. Our mission? To develop solutions that enhance human communication in the most challenging environments.
        </p>
        <div class="timeline">
            <div class="timeline-item">
                <h3>2019</h3>
                <p>PH3AR founded as a space for innovators and creators to collaborate.</p>
            </div>
            <div class="timeline-item">
                <h3>2021</h3>
                <p>Concept for Starphone begins, focused on developing a public communication device for extreme conditions.</p>
            </div>
            <div class="timeline-item">
                <h3>2023</h3>
                <p>First prototype tested with successful Faraday cage integration and hybrid network capabilities.</p>
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
                <img src="/icons/faraday-cage.png" alt="Faraday Cage" />
                <h3>Faraday Cage Protection</h3>
                <p>Starphone's outer shell blocks electromagnetic interference, ensuring secure communication in high-EMI environments.</p>
            </div>
            <div class="tech-item">
                <img src="/icons/hybrid-network.png" alt="Hybrid Network" />
                <h3>Hybrid Network System</h3>
                <p>Switch between satellite, cellular, and VoIP networks for constant connectivity.</p>
            </div>
            <div class="tech-item">
                <img src="/icons/space-grade.png" alt="Space-Grade Engineering" />
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
        <p>
            PH3AR is a growing community of technologists, engineers, and dreamers who work together to build impactful solutions. Starphone is one of our flagship projects, and it represents the spirit of collaboration and innovation that defines PH3AR.
        </p>
        <div class="community-grid">
            <div class="community-quote">
                <blockquote>
                    "PH3AR isn’t just a lab. It’s a place where ideas come alive, and Starphone is a testament to that innovation."
                </blockquote>
                <cite>— PH3AR Member</cite>
            </div>
            <div class="community-logo">
                <img src="/images/nova-labs-logo.png" alt="Nova Labs" />
                <p>In collaboration with Nova Labs</p>
            </div>
        </div>

        <!-- PH3AR Video Embed -->
        <VideoEmbed videoUrl="https://www.youtube.com/embed/Srobkj3P7EQ" />
    </div>
</section>

<!-- Enhanced Team Section -->
<section class="about-team section">
    <div class="container">
        <h2>The Team Behind Starphone</h2>
        <div class="team-grid">
            <TeamMemberCard name="Aurora Borealis" role="Lead Engineer" description="Visionary behind the Starphone's innovative technology." />
            <TeamMemberCard name="Thundercat 1" role="Creative Director" description="Crafts the artistic vision of Starphone with a blend of retro and modern aesthetics." />
            <TeamMemberCard name="Thundercat 2" role="UX Designer" description="Ensures a user-friendly and enjoyable experience for all Starphone users." />
            <TeamMemberCard name="Grannie May" role="Operations Manager" description="Keeps the project on track with expertise in operations and logistics." />
            <TeamMemberCard name="Kelly" role="Marketing Lead" description="Spreads the word about Starphone, connecting with communities and investors alike." />
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
    /* Enhance the overall design, leveraging global CSS where possible */

    .about-hero {
        background-color: var(--color-primary-dark); /* Dark blue background */
        color: var(--color-button-text);
        text-align: center;
        padding: 100px 0;
    }

    .hero-content {
        max-width: 800px;
        margin: 0 auto;
        background: rgba(0, 0, 0, 0.6);
        padding: 30px;
        border-radius: 8px;
    }

    .hero-content h1 {
        font-size: 3.5rem;
        margin-bottom: 20px;
    }

    .hero-content p {
        font-size: 1.4rem;
    }

    .section {
        padding: 80px 0;
    }

    .about-origin, .about-technology, .about-community, .about-team {
        background-color: var(--color-background);
        color: var(--color-text);
    }

    .about-technology .tech-features {
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }

    .tech-item {
        flex: 1;
        text-align: center;
        background-color: var(--color-secondary);
        padding: 20px;
        border-radius: var(--border-radius);
    }

    .tech-item h3 {
        color: var(--color-primary-dark);
    }

    .timeline {
        display: flex;
        justify-content: space-between;
        gap: 20px;
    }

    .timeline-item {
        flex: 1;
        text-align: center;
        background-color: var(--color-secondary);
        padding: 20px;
        border-radius: 8px;
        box-shadow: var(--box-shadow);
    }

    .community-grid {
        display: flex;
        gap: 20px;
        margin-top: 40px;
    }

    .community-quote {
        flex: 2;
    }

    .community-logo {
        flex: 1;
        text-align: center;
    }

    .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        justify-content: center;
    }

    .call-to-action {
        background-color: var(--color-primary);
        text-align: center;
        color: var(--color-button-text);
    }

    .call-to-action h2 {
        font-size: 2.5rem;
        margin-bottom: 20px;
    }

    .call-to-action p {
        font-size: 1.2rem;
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
</style>
