<script>
    import VideoEmbed from '$lib/components/VideoEmbed.svelte';
    import TeamMemberCard from '$lib/components/TeamMemberCard.svelte';
    export let pageData;
</script>

<section class="about-hero">
    <div class="hero-content">
        <h1>Welcome to the Future of Communication</h1>
        <p>Starphone is designed to provide secure, reliable communication even in the harshest environments. This is more than just a phone—it’s a new era of public communication.</p>
    </div>
</section>

<section class="about-origin">
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

<section class="about-technology">
    <div class="container">
        <h2>The Technology Behind Starphone</h2>
        <div class="tech-features">
            <div class="tech-item">
                <img src="/icons/faraday-cage.svg" alt="Faraday Cage" />
                <h3>Faraday Cage Protection</h3>
                <p>Starphone's outer shell blocks electromagnetic interference, ensuring secure communication in high-EMI environments.</p>
            </div>
            <div class="tech-item">
                <img src="/icons/hybrid-network.svg" alt="Hybrid Network" />
                <h3>Hybrid Network System</h3>
                <p>Switch between satellite, cellular, and VoIP networks for constant connectivity.</p>
            </div>
            <div class="tech-item">
                <img src="/icons/space-grade.svg" alt="Space-Grade Engineering" />
                <h3>Space-Grade Engineering</h3>
                <p>Radiation-resistant components and solar-powered autonomy allow Starphone to operate in the most extreme environments.</p>
            </div>
        </div>
    </div>
</section>

<section class="about-community">
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

<section class="about-team">
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

<section class="call-to-action">
    <div class="container">
        <h2>Join the Movement</h2>
        <p>Be a part of something bigger. Whether you're an engineer, designer, or visionary, PH3AR and Starphone are looking for talented people to help shape the future of communication.</p>
        <a href="/support" class="button">Support Us</a>
    </div>
</section>

<style>
    /* Hero Section */
    .about-hero {
        background-image: url('/images/starphone-hero-bg.jpg');
        background-size: cover;
        background-position: center;
        color: white;
        text-align: center;
        padding: 100px 0;
        position: relative;
    }

    .about-hero .hero-content {
        max-width: 800px;
        margin: 0 auto;
        background: rgba(0, 0, 0, 0.6);
        padding: 30px;
        border-radius: 8px;
    }

    .about-hero h1 {
        font-size: 3rem;
        margin-bottom: 20px;
    }

    .about-hero p {
        font-size: 1.2rem;
    }

    /* Timeline */
    .about-origin {
        padding: 60px 0;
        background-color: #f9f9f9;
    }

    .timeline {
        display: flex;
        justify-content: space-between;
        gap: 20px;
    }

    .timeline-item {
        flex: 1;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        text-align: center;
    }

    .timeline-item h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
        color: #0070f3;
    }

    .timeline-item p {
        font-size: 1rem;
        color: #555;
    }

    /* Technology Section */
    .about-technology {
        background-color: #fff;
        padding: 60px 0;
    }

    .tech-features {
        display: flex;
        justify-content: space-between;
        gap: 20px;
    }

    .tech-item {
        flex: 1;
        text-align: center;
    }

    .tech-item img {
        width: 80px;
        margin-bottom: 20px;
    }

    .tech-item h3 {
        font-size: 1.5rem;
        color: #0070f3;
    }

    .tech-item p {
        font-size: 1rem;
        color: #555;
    }

    /* Community Section */
    .about-community {
        background-color: #f0f0f5;
        padding: 60px 0;
    }

    .community-grid {
        display: flex;
        justify-content: space-between;
        gap: 20px;
    }

    .community-quote {
        flex: 2;
    }

    .community-quote blockquote {
        font-size: 1.2rem;
        font-style: italic;
        color: #333;
        margin: 0 0 10px;
    }

    .community-quote cite {
        display: block;
        font-size: 0.9rem;
        color: #555;
    }

    .community-logo {
        flex: 1;
        text-align: center;
    }

    .community-logo img {
        width: 150px;
        margin-bottom: 10px;
    }

    /* Team Section */
    .about-team {
        background-color: #fff;
        padding: 60px 0;
    }

    .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        justify-content: center;
    }

    /* Call to Action */
    .call-to-action {
        text-align: center;
        padding: 60px 0;
        background-color: #0070f3;
        color: white;
    }

    .call-to-action h2 {
        font-size: 2rem;
        margin-bottom: 20px;
    }

    .call-to-action p {
        font-size: 1.2rem;
        margin-bottom: 30px;
    }

    .call-to-action a.button {
        background-color: #fff;
        color: #0070f3;
        padding: 12px 24px;
        border-radius: 4px;
        text-decoration: none;
        font-weight: bold;
    }

    .call-to-action a.button:hover {
        background-color: #f0f0f5;
    }
</style>
