<script>
    import VideoEmbed from '$lib/components/VideoEmbed.svelte';
    import TeamMemberCard from '$lib/components/TeamMemberCard.svelte';
    import '../../lib/styles/global.css';  // Ensure this path is correct based on your folder structure
    export let pageData;
</script>

<!-- Hero Section -->
<section class="about-hero">
    <div class="hero-content">
        <h1>Welcome to the Future of Communication</h1>
        <p>Starphone is designed to provide secure, reliable communication even in the harshest environments. This is more than just a phone—it’s a new era of public communication.</p>
    </div>
</section>

<!-- Origin Section: PH3AR Story -->
<section class="about-origin section">
    <div class="container">
        <h2>From PH3AR to Starphone</h2>
        <p>
            Michael Barbine founded **PH3AR** in 2001 to unite creators, learners, and innovators in a collaborative space for exploring technology and creativity. 
            PH3AR has been the catalyst that brought **Starphone** to life—designed for secure communication in remote and extreme environments.
        </p>
        <div class="timeline">
            <div class="timeline-item">
                <h3>2001</h3>
                <p>Michael Barbine launches PH3AR, a community for creators and innovators.</p>
            </div>
            <div class="timeline-item">
                <h3>2021</h3>
                <p>The concept of Starphone begins, focusing on creating a public communication device for extreme environments.</p>
            </div>
            <div class="timeline-item">
                <h3>2023</h3>
                <p>Starphone’s first prototype successfully integrates a Faraday cage and hybrid network technology.</p>
            </div>
        </div>
    </div>
</section>

<!-- Technology Section: Starphone Features -->
<section class="about-technology section">
    <div class="container">
        <h2>The Technology Behind Starphone</h2>
        <div class="tech-features">
            <div class="tech-item">
                <h3>Faraday Cage Protection</h3>
                <p>Starphone’s outer shell ensures secure communication by blocking electromagnetic interference, even in high-EMI environments.</p>
            </div>
            <div class="tech-item">
                <h3>Hybrid Network</h3>
                <p>Switches seamlessly between satellite, cellular, and VoIP networks to ensure constant connectivity, regardless of location.</p>
            </div>
            <div class="tech-item">
                <h3>Space-Grade Engineering</h3>
                <p>With radiation-resistant components and solar-powered autonomy, Starphone is built for the most extreme environments, from disaster zones to space.</p>
            </div>
        </div>
    </div>
</section>

<!-- Community Section: PH3AR -->
<section class="about-community section">
    <div class="container">
        <h2>PH3AR: Community & Collaboration</h2>
        <p>
            **PH3AR** is a growing community of technologists, engineers, and dreamers working together to build impactful solutions. Starphone is one of our flagship projects, embodying the spirit of collaboration and innovation that defines PH3AR.
        </p>
        <div class="community-grid">
            <div class="community-quote">
                <blockquote>
                    "PH3AR isn’t just a lab. It’s a place where ideas come alive, and Starphone is a testament to that innovation."
                </blockquote>
                <cite>— PH3AR Member</cite>
            </div>
            <div class="community-logo">
                <img src="/images/nova-labs-logo.png" alt="Nova Labs Logo" />
                <p>In collaboration with Nova Labs</p>
            </div>
        </div>

        <!-- PH3AR Video Embed -->
        <VideoEmbed videoUrl="https://www.youtube.com/embed/Srobkj3P7EQ" />
    </div>
</section>

<!-- Team Section: Meet the Team -->
<section class="about-team section">
    <div class="container">
        <h2>The Team Behind Starphone</h2>
        <div class="team-grid">
            <TeamMemberCard name="Aurora Borealis" role="Lead Engineer" description="Visionary behind Starphone’s innovative technology." />
            <TeamMemberCard name="Thundercat 1" role="Creative Director" description="Crafts the artistic vision of Starphone, blending retro and modern aesthetics." />
            <TeamMemberCard name="Thundercat 2" role="UX Designer" description="Designs a user-friendly and enjoyable experience for all Starphone users." />
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
    /* Enhanced Hero Section */
    .about-hero {
        background-color: #003366; /* Darker background for better contrast */
        color: #ffffff;
        text-align: center;
        padding: 100px 0;
        background-image: url('/images/starphone-hero-bg.jpg'); /* Updated background image */
        background-size: cover;
        background-position: center;
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
        background-color: #f9f9f9;
        color: #333;
    }

    .about-technology .tech-features {
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }

    .tech-item {
        flex: 1;
        text-align: center;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .timeline {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        margin-top: 40px;
    }

    .timeline-item {
        flex: 1;
        text-align: center;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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
        background-color: #003366;
        text-align: center;
        color: #ffffff;
        padding: 60px 20px;
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
        background-color: #ffb30f;
        color: #333;
        padding: 12px 24px;
        border-radius: 8px;
        text-decoration: none;
        transition: background-color 0.3s ease;
    }

    .call-to-action .button:hover {
        background-color: #ff9a00;
    }
</style>
