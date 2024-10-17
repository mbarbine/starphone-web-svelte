<!-- src/routes/about/+page.svelte -->

<script>
    import { onMount, onDestroy } from 'svelte';
    import VideoEmbed from '$lib/components/VideoEmbed.svelte';
    import TeamMemberCard from '$lib/components/TeamMemberCard.svelte';
    import '../../lib/styles/global.css';  // Ensure this path is correct based on your folder structure
    export let pageData;

    let sections;

    // Function to handle scroll animations
    function animateOnScroll() {
        const revealPoint = 150;
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - revealPoint) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    // Load external scripts and add event listeners on mount
    onMount(() => {
        sections = document.querySelectorAll('.section');
        window.addEventListener('scroll', animateOnScroll);

        // Dynamically load the GiveButter script
        const giveButterScript = document.createElement('script');
        giveButterScript.src = 'https://widgets.givebutter.com/latest.umd.cjs?acct=dOQ0XbCHnxsv4qWo&p=other';
        giveButterScript.async = true;
        giveButterScript.onload = () => {
            console.log('GiveButter script loaded successfully');
        };
        giveButterScript.onerror = () => {
            console.error('Failed to load GiveButter script');
        };
        document.body.appendChild(giveButterScript);

        // Initial check in case some sections are already in view
        animateOnScroll();

        // Cleanup function to remove event listeners and scripts
        return () => {
            window.removeEventListener('scroll', animateOnScroll);
            document.body.removeChild(giveButterScript);
        };
    });
</script>

<!-- Hero Section -->
<section class="about-hero section" aria-labelledby="hero-heading">
    <div class="hero-content">
        <img
            src="/images/starphone-main-logo-color.png"
            alt="Starphone Logo"
            class="hero-logo"
            loading="lazy"
        />
        <h1 id="hero-heading">Welcome to the Future of Communication</h1>
        <p>
            Starphone is designed to provide secure, reliable communication even in the harshest environments. This is more than just a phone—it’s a new era of public communication.
        </p>
    </div>
</section>

<!-- Origin Section: PH3AR Story -->
<section class="about-origin section" aria-labelledby="origin-heading">
    <div class="container">
        <h2 id="origin-heading">From PH3AR to Starphone</h2>
        <p>
            Michael Barbine founded <strong>PH3AR</strong> in 2001 to unite creators, learners, and innovators in a collaborative space for exploring technology and creativity.
            PH3AR has been the catalyst that brought <strong>Starphone</strong> to life—designed for secure communication in remote and extreme environments.
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
<section class="about-technology section" aria-labelledby="technology-heading">
    <div class="container">
        <h2 id="technology-heading">The Technology Behind Starphone</h2>
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
<section class="about-community section" aria-labelledby="community-heading">
    <div class="container">
        <h2 id="community-heading">PH3AR: Community &amp; Collaboration</h2>
        <p>
            <strong>PH3AR</strong> is a growing community of technologists, engineers, and dreamers working together to build impactful solutions. Starphone is one of our flagship projects, embodying the spirit of collaboration and innovation that defines PH3AR.
        </p>
        <div class="community-grid">
            <div class="community-quote">
                <blockquote>
                    "PH3AR isn’t just a lab. It’s a place where ideas come alive, and Starphone is a testament to that innovation."
                </blockquote>
                <cite>— PH3AR Member</cite>
            </div>
            <div class="community-logo">
                <img src="/images/PH3AR.png" alt="PH3AR Logo" loading="lazy" />
                <p>In collaboration with Nova Labs</p>
            </div>
        </div>

        <!-- PH3AR Video Embed -->
        <VideoEmbed videoUrl="https://www.youtube.com/embed/Srobkj3P7EQ" />
    </div>
</section>

<!-- Team Section: Meet the Team -->
<section class="about-team section" aria-labelledby="team-heading">
    <div class="container">
        <h2 id="team-heading">The Team Behind Starphone</h2>
        <div class="team-grid">
            <TeamMemberCard 
                name="Aurora Borealis" 
                role="Lead Engineer" 
                description="Visionary behind Starphone’s innovative technology." 
            />
            <TeamMemberCard 
                name="Thundercat 1" 
                role="Creative Director" 
                description="Crafts the artistic vision of Starphone, blending retro and modern aesthetics." 
            />
            <TeamMemberCard 
                name="Thundercat 2" 
                role="UX Designer" 
                description="Designs a user-friendly and enjoyable experience for all Starphone users." 
            />
            <TeamMemberCard 
                name="Grannie May" 
                role="Operations Manager" 
                description="Keeps the project on track with expertise in operations and logistics." 
            />
            <TeamMemberCard 
                name="Kelly" 
                role="Marketing Lead" 
                description="Spreads the word about Starphone, connecting with communities and investors alike." 
            />
        </div>
    </div>
</section>

<!-- GiveButter Donation Section -->
<section class="section section-donate" aria-labelledby="donate-heading">
    <div class="container">
        <h2 id="donate-heading">Support Starphone</h2>
        <p>Your contributions can help us make a real difference. Starphone is a community-driven project, and every donation brings us closer to our vision of secure, public communication for all.</p>
        <div class="givebutter-donate">
            <div id="givebutter-widget-container">
                <givebutter-widget id="LYxbKj"></givebutter-widget>
            </div>
        </div>
    </div>
</section>

<!-- Call to Action Section -->
<section class="call-to-action section" aria-labelledby="cta-heading">
    <div class="container">
        <h2 id="cta-heading">Join the Movement</h2>
        <p>Be a part of something bigger. Whether you're an engineer, designer, or visionary, PH3AR and Starphone are looking for talented people to help shape the future of communication.</p>
        <a href="/support" class="button primary">Support Us</a>
    </div>
</section>

<footer>
    <div class="footer-content">
        <p>&copy; 2024 Starphone. All rights reserved.</p>
    </div>
</footer>

<style>
    /* Scoped Component Styles */

    /* About Hero Section Adjustments */
    .about-hero {
        background: linear-gradient(135deg, var(--color-hero-bg-start) 0%, var(--color-hero-bg-end) 100%);
        color: var(--color-header-footer-text);
        padding: 6rem 1rem;
        text-align: center;
        background-size: cover;
        background-position: center;
    }

    .hero-content {
        max-width: 800px;
        margin: 0 auto;
        background: rgba(0, 0, 0, 0.6); /* Dark overlay for better text contrast */
        padding: 40px;
        border-radius: var(--border-radius);
    }

    .hero-logo {
        width: 250px;
        max-width: 100%;
        margin-bottom: 30px;
    }

    .hero-content h1 {
        font-size: 3.5rem;
        margin-bottom: 20px;
        color: var(--color-header-footer-text);
    }

    .hero-content p {
        font-size: 1.4rem;
        color: var(--color-text-light);
    }

    .cta-button {
        /* Reusing button styles from globals.css */
        /* Adding any specific overrides if necessary */
    }

    /* Section Styles */
    .section {
        padding: 80px 20px;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    .section.active {
        opacity: 1;
        transform: translateY(0);
    }

    .section h2 {
        font-size: var(--font-size-heading2);
        margin-bottom: 20px;
        text-align: center;
        color: var(--color-text);
    }

    .section p {
        font-size: var(--font-size-base);
        max-width: 800px;
        margin: 0 auto 20px;
        text-align: center;
        color: var(--color-text);
    }

    /* Origin Section Specific Styles */
    .about-origin .timeline {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 20px;
        margin-top: 40px;
    }

    .timeline-item {
        flex: 1 1 30%;
        text-align: center;
        background-color: var(--color-light-bg);
        padding: 20px;
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        min-width: 250px;
    }

    .timeline-item h3 {
        color: var(--color-primary-dark);
        margin-bottom: 10px;
    }

    /* Technology Section Specific Styles */
    .about-technology .tech-features {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 30px;
        margin-top: 30px;
    }

    .tech-item {
        flex: 1 1 30%;
        text-align: center;
        background-color: var(--color-light-bg);
        padding: 20px;
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        min-width: 250px;
    }

    .tech-item h3 {
        color: var(--color-primary-dark);
        margin-bottom: 10px;
    }

    /* Community Section Specific Styles */
    .about-community .community-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        margin-top: 40px;
        align-items: center;
        justify-content: center;
    }

    .community-quote {
        flex: 2 1 60%;
    }

    .community-quote blockquote {
        font-style: italic;
        color: var(--color-text-light);
        margin: 0;
    }

    .community-quote cite {
        display: block;
        margin-top: 10px;
        color: var(--color-text-light);
    }

    .community-logo {
        flex: 1 1 35%;
        text-align: center;
    }

    .community-logo img {
        max-width: 100%;
        height: auto;
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
    }

    .community-logo p {
        margin-top: 10px;
        color: var(--color-text);
    }

    /* Team Grid Specific Styles */
    .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        justify-content: center;
        margin-top: 30px;
    }

    /* Donation Section Specific Styles */
    .section-donate {
        background-color: var(--color-light-bg);
        text-align: center;
        padding: 80px 20px;
    }

    .givebutter-donate {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* Call to Action Section Specific Styles */
    .call-to-action {
        background-color: var(--color-primary-dark);
        text-align: center;
        color: var(--color-header-footer-text);
        padding: 60px 20px;
    }

    .call-to-action h2 {
        font-size: var(--font-size-heading2);
        margin-bottom: 20px;
    }

    .call-to-action p {
        font-size: var(--font-size-base);
        margin-bottom: 30px;
    }

    .call-to-action .button {
        background-color: var(--color-secondary);
        color: var(--color-header-footer-text); /* White text */
        padding: 12px 24px;
        border-radius: var(--border-radius);
        text-decoration: none;
        transition: background-color var(--transition-speed) ease;
        font-weight: bold;
    }

    .call-to-action .button:hover {
        background-color: var(--color-secondary-dark);
    }

    /* Footer Specific Styles */
    footer {
        background-color: var(--color-header-footer-bg);
        color: var(--color-header-footer-text);
        padding: 1.5rem 1rem;
        text-align: center;
        font-size: var(--font-size-base);
        border-top: 3px solid var(--color-footer-border);
    }

    footer .footer-content p {
        margin: 0;
    }

    /* Responsive Adjustments */
    @media (max-width: 992px) {
        .about-hero {
            padding: 5rem 1rem;
        }

        .hero-content {
            padding: 30px;
        }

        .hero-logo {
            width: 200px;
        }

        .hero-content h1 {
            font-size: 2.5rem;
        }

        .hero-text {
            font-size: 1.2rem;
        }

        .timeline-item, .tech-item {
            flex: 1 1 45%;
            min-width: 200px;
        }

        .community-grid {
            flex-direction: column;
        }

        .community-quote, .community-logo {
            flex: 1 1 100%;
            text-align: center;
        }

        .team-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        }

        .call-to-action h2 {
            font-size: var(--font-size-heading3);
        }

        .call-to-action p {
            font-size: var(--font-size-small);
        }
    }

    @media (max-width: 576px) {
        .about-hero {
            padding: 4rem 1rem;
        }

        .hero-content {
            padding: 20px;
        }

        .hero-logo {
            width: 150px;
        }

        .hero-content h1 {
            font-size: 2rem;
        }

        .hero-text {
            font-size: 1rem;
        }

        .timeline-item, .tech-item {
            flex: 1 1 100%;
            min-width: 100%;
        }

        .community-grid {
            flex-direction: column;
        }

        .team-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        }

        .call-to-action {
            padding: 40px 20px;
        }

        .call-to-action h2 {
            font-size: var(--font-size-heading4);
        }

        .call-to-action p {
            font-size: var(--font-size-small);
        }

        .call-to-action .button {
            padding: 10px 20px;
            font-size: var(--font-size-small);
        }
    }

    /* Ensure images are responsive and do not overlap */
    img {
        max-width: 100%;
        height: auto;
        display: block;
    }

    /* Timeline Specific Enhancements */
    .timeline {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 20px;
        margin-top: 40px;
    }

    .timeline-item {
        flex: 1 1 30%;
        text-align: center;
        background-color: var(--color-light-bg);
        padding: 20px;
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        min-width: 250px;
    }

    .timeline-item h3 {
        color: var(--color-primary-dark);
        margin-bottom: 10px;
    }

    /* Media Gallery Specific Styles */
    .media-gallery img {
        max-width: 100%;
        height: auto;
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
    }

    /* Fix overlapping issues by ensuring proper stacking context */
    .about-hero, .section {
        position: relative;
        z-index: 1;
    }
</style>
