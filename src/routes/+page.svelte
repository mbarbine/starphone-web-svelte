<script>
    import { onMount } from 'svelte';
    import '../lib/styles/global.css'; // Importing your global CSS here
    let sections;

    // Scroll animation for sections
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
        <h1>Welcome to Starphone</h1>
        <p class="hero-text">
            Revolutionizing public communication with space-grade technology, Faraday protection, and hybrid networks. Join us in reshaping how the world connects.
        </p>
    </div>
</section>

<!-- About Starphone Section -->
<section class="section section-about">
    <div class="container">
        <h2>About Starphone</h2>
        <p>
            Starphone is a visionary, open-source project designed to withstand the harshest conditions while offering secure and reliable communication. Our bold mission blends cutting-edge technology and sustainable design to create the future of public communication.
        </p>
    </div>
</section>

<!-- Support Starphone Section with GiveButter Widget -->
<section class="section section-support">
    <div class="container">
        <h2>Support Starphone</h2>
        <p>
            Help us bring Starphone to the world. Your contributions will shape the future of secure, public communication and enable us to push the limits of technology. Join us in making a lasting impact.
        </p>
        <div class="givebutter-donate">
            <givebutter-widget id="LYxbKj"></givebutter-widget>
            <script async src="https://widgets.givebutter.com/latest.umd.cjs?acct=dOQ0XbCHnxsv4qWo&p=other"></script>
        </div>
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
        color: #ffffff;
        padding: 100px 20px;
        text-align: center;
        position: relative;
    }

    .hero-content {
        max-width: 700px;
        margin: 0 auto;
        background: rgba(0, 0, 0, 0.7); /* Dark overlay for contrast */
        padding: 40px;
        border-radius: 8px;
        text-align: center;
    }

    .hero-logo {
        width: 200px;
        margin-bottom: 20px;
    }

    h1 {
        font-size: 2.5rem;
        margin-bottom: 15px;
        color: #ffffff; /* White text with high contrast */
    }

    .hero-text {
        font-size: 1.3rem;
        color: #f0f0f0; /* Light gray for readability */
        margin-bottom: 20px;
    }

    .section {
        padding: 60px 20px;
    }

    .section h2 {
        font-size: 2rem;
        margin-bottom: 20px;
        color: #222222; /* Darker text for better contrast */
    }

    .section p {
        font-size: 1.1rem;
        color: #333333; /* Dark gray text for readability on a light background */
        line-height: 1.6;
        max-width: 800px;
        margin: 0 auto;
    }

    /* GiveButter Donation Section */
    .givebutter-donate {
        margin-top: 20px;
    }

    /* Footer */
    footer {
        background-color: #1a1a1a;
        color: #ffffff;
        padding: 20px;
        text-align: center;
        margin-top: 40px;
    }

    footer p {
        margin: 0;
        font-size: 1rem;
    }

    /* Responsive Styling */
    @media (max-width: 768px) {
        .hero-content {
            padding: 30px;
        }

        h1 {
            font-size: 2rem;
        }

        .hero-text {
            font-size: 1.1rem;
        }

        .section h2 {
            font-size: 1.8rem;
        }

        .section p {
            font-size: 1rem;
        }
    }
</style>
