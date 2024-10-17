<script>
    import VideoEmbed from '../lib/components/VideoEmbed.svelte';
    import MediaGallery from '../lib/components/MediaSection.svelte'; // Assuming this component displays the gallery/media
    import '../lib/styles/global.css'; // Importing your global CSS here
    let sections;

    onMount(() => {
        sections = document.querySelectorAll(".section");
        window.addEventListener("scroll", animateOnScroll);
    });

    function animateOnScroll() {
        const revealPoint = 150;
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - revealPoint) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    }
</script>

<!-- Hero Section -->
<section class="hero">
    <div class="hero-content">
        <img src="/images/starphone-main-logo-color.png" alt="Starphone Logo" class="hero-logo">
        <h1>Starphone</h1>
        <p class="hero-text">
            The future of public communication is here. Space-grade, Faraday-protected, and powered by hybrid networks. Join us on this journey to revolutionize how the world connects.
        </p>
        <a href="/about" class="cta-button">Learn More</a>
    </div>
</section>

<!-- About Starphone Section -->
<section class="section section-about">
    <div class="container">
        <h2>About Starphone</h2>
        <p>
            Starphone is an open-source initiative aimed at revolutionizing public communication. We’re creating a device that will stand the test of time, combining cutting-edge technology with a bold vision for the future of secure, reliable communication.
        </p>
        <a href="/about" class="button">Discover More</a>
    </div>
</section>

<!-- Support Starphone Section with GiveButter Widget -->
<section class="section section-support">
    <div class="container">
        <h2>Support Starphone</h2>
        <p>
            Be part of something revolutionary. By supporting Starphone, you’re helping us create a new future for public communication. Your contributions make a real difference.
        </p>
        <div class="givebutter-donate">
            <givebutter-widget id="LYxbKj"></givebutter-widget>
            <script async src="https://widgets.givebutter.com/latest.umd.cjs?acct=dOQ0XbCHnxsv4qWo&p=other"></script>
        </div>
    </div>
</section>

<!-- In the News Section -->
<section class="section section-press">
    <div class="container">
        <h2>In the News</h2>
        <p>Check out the latest media coverage of Starphone.</p>
        <a href="/press" class="button">View Press Articles</a>
    </div>
</section>

<!-- Follow Us Section with Social Media Links -->
<section class="section section-media">
    <div class="container">
        <h2>Follow Us</h2>
        <p>Stay updated with the latest from Starphone by following us on social media.</p>
        <div class="social-icons">
            <a href="https://x.com/Starphone" target="_blank">
                <img src="/icons/x.png" alt="X">
            </a>
            <a href="https://instagram.com/starphoneofficial" target="_blank">
                <img src="/icons/instragram.png" alt="Instagram">
            </a>
            <a href="https://github.com/Starphone" target="_blank">
                <img src="/icons/github.png" alt="GitHub">
            </a>
            <a href="https://slack.com/Starphone" target="_blank">
                <img src="/icons/slack.png" alt="Slack">
            </a>
        </div>
    </div>
</section>

<!-- Making of Starphone Section using MediaGallery Component -->
<section class="section section-making-of">
    <div class="container">
        <h2>Making of Starphone</h2>
        <p>Explore the journey and behind-the-scenes moments in building Starphone. From design sketches to the first prototypes, here’s how it all came together.</p>
        <MediaGallery mediaFolder="/making-of-starphone" />
    </div>
</section>

<!-- Footer Section -->
<footer>
    <div class="footer-content">
        <p>&copy; 2024 Starphone. All rights reserved.</p>
    </div>
</footer>

<style>
    /* General Styles */
    .hero {
        background: url('/images/starphone-bw-hero-bg.png') center/cover no-repeat;
        color: #fff;
        padding: 100px 20px;
        text-align: center;
        position: relative;
    }

    .hero-content {
        max-width: 800px;
        margin: 0 auto;
        background: rgba(0, 0, 0, 0.6); /* Dark overlay for better text contrast */
        padding: 40px;
        border-radius: 8px;
    }

    .hero-logo {
        width: 250px;
        margin-bottom: 30px;
    }

    .cta-button {
        background-color: #ffb30f;
        color: #000;
        padding: 16px 32px;
        border-radius: 8px;
        font-weight: bold;
        text-decoration: none;
        transition: background-color 0.3s;
    }

    .cta-button:hover {
        background-color: #ff9a00;
    }

    /* Section Styles */
    .section {
        padding: 80px 20px;
    }

    .section h2 {
        font-size: 2.5rem;
        margin-bottom: 30px;
        color: #333;
    }

    .button {
        background-color: #0070f3;
        color: white;
        padding: 12px 24px;
        border-radius: 5px;
        text-decoration: none;
        font-weight: bold;
    }

    .button:hover {
        background-color: #005bb5;
    }

    /* Social Media Icons */
    .social-icons {
        display: flex;
        gap: 30px;
        justify-content: center;
    }

    .social-icons img {
        width: 50px;
        transition: transform 0.3s ease;
    }

    .social-icons img:hover {
        transform: scale(1.1);
    }

    /* Support Section */
    .givebutter-donate {
        margin-top: 20px;
    }

    /* Footer */
    footer {
        background-color: #333;
        color: #fff;
        padding: 20px;
        text-align: center;
    }
</style>
