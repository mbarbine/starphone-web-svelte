<!-- src/routes/page.svelte -->
<script>
    import { onMount } from 'svelte';
    import TeamMemberCard from '$lib/components/TeamMemberCard.svelte';
    import '../lib/styles/global.css';

    export let data;
    const { timeline = [], team = [] } = data;

    // Autoplay function triggered on iframe load
    function setupIframeAutoplay() {
        const iframe = document.getElementById("beautiful-ai-frame");
        if (iframe) {
            iframe.addEventListener("load", () => {
                try {
                    iframe.contentWindow?.postMessage(
                        JSON.stringify({ event: 'command', func: 'playVideo' }),
                        '*'
                    );
                } catch (err) {
                    console.error("iframe postMessage failed:", err);
                }
            });
        }
    }

    onMount(() => {
        setupIframeAutoplay();
    });
</script>

<!-- Enhanced Hero Section -->
<section class="history-hero">
    <div class="hero-content">
        <h1>Introducing Starphone</h1>
        <p>
            Starphone is designed to provide secure, reliable communication even in the harshest environments where other systems fall short or fail. Our mission is to connect business, people, and things innovatively, overcoming mobile dead zones due to blackouts, network overloads, or inaccessibility. From Earth to space, we aim to redefine communication.
        </p>
        <p>Click the play button below for the slide deck!</p>
    </div>

    <!-- Beautiful.ai Embedded Frame with Autoplay Attempt -->
    <div class="video-frame">
        <iframe
            id="beautiful-ai-frame"
            allow="autoplay; clipboard-write"
            allowfullscreen
            src="https://www.beautiful.ai/embed/-OBWOCKdNj9Kk9FPSGW0?utm_source=beautiful_player&utm_medium=embed&utm_campaign=-OBNOsmZdY0sGRDNXD5H"
            style="border: 1px solid #333; width: 100%; height: 100%;"
        ></iframe>
    </div>
</section>

<!-- Download Section for Starphone Presentation -->
<section class="download-section">
    <h2>Access Starphone Presentation</h2>
    <p>Click the button below to open or download the Starphone presentation.</p>
    <a href="/Starphone-readonly.pptx" class="button">Open Presentation</a>
</section>

<section class="history-hero">
    <div class="hero-content">
        <h1>What is it?</h1>
        <p>Think of it as an evolution of the public telephone booth—a free-standing, self-sustaining cell tower and satellite receiver. Starphones can be deployed anywhere and serve various purposes:</p>
        <ul>
            <li>Permanent outdoor installations</li>
            <li>Large events</li>
            <li>Construction, mining, and marine operations</li>
            <li>Schools, parks, beaches, train stations, airports, and spaceports</li>
            <li>Rural areas, campgrounds, highways, parking lots, and farms</li>
        </ul>
    </div>
</section>

<!-- Enhanced Technology Section -->
<section class="technology-section section">
    <div class="container">
        <h2>The Technology Behind Starphone</h2>
        <div class="tech-features">
            <div class="tech-item">
                <h3>Faraday Cage Protection</h3>
                <p>Starphone’s outer shell blocks electromagnetic interference, ensuring secure communication in high-EMI environments.</p>
            </div>
            <div class="tech-item">
                <h3>Hybrid Network System</h3>
                <p>Switch seamlessly between satellite, cellular, and VoIP networks for constant connectivity.</p>
            </div>
            <div class="tech-item">
                <h3>Space-Grade Engineering</h3>
                <p>Radiation-resistant components and solar-powered autonomy allow Starphone to operate in extreme environments.</p>
            </div>
        </div>
    </div>
</section>

<!-- Enhanced Origin Section -->
<section class="history-timeline section">
    <div class="container">
        <h2>Our Journey: Starphone</h2>
        <p>Starphone was born from PH3AR, a community-driven initiative focused on gaming, making, art’ing, and technology. Our mission? To develop solutions that enhance human communication in the most challenging environments.</p>
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
        padding: 20px;
        border-radius: 8px;
        background: rgba(0, 0, 0, 0.6);
    }

    .hero-content h1 {
        font-size: 2.5rem;
        margin-bottom: 20px;
    }

    .hero-content p {
        font-size: 1.2rem;
    }

    /* Video Frame Styling */
    .video-frame {
        position: relative;
        width: 100%;
        max-width: 800px;
        height: 450px;
        margin: 20px auto;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .video-frame iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    /* Download Section */
    .download-section {
        text-align: center;
        margin-top: 40px;
    }

    .download-section .button {
        padding: 12px 24px;
        background-color: var(--color-secondary);
        color: var(--color-button-text);
        text-decoration: none;
        border-radius: 8px;
        transition: background-color 0.3s;
    }

    .download-section .button:hover {
        background-color: var(--color-secondary-dark);
    }

    /* List Styling */
    .hero-content ul {
        list-style: inside disc;
        padding-left: 0;
        font-size: 1.1rem;
        line-height: 1.6;
        margin: 20px 0;
        text-align: left;
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
