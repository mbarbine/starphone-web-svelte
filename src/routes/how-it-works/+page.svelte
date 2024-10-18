<script>
    import VideoEmbed from '$lib/components/VideoEmbed.svelte';
    import '../lib/styles/global.css';
</script>

<!-- How It Works Page -->
<section class="how-it-works-hero">
    <div class="hero-content">
        <h1>How Starphone Works</h1>
        <p>Explore the cutting-edge technology that powers Starphone, ensuring reliable communication in the most remote and extreme environments.</p>
    </div>
</section>

<!-- How It Works Section -->
<section class="how-it-works section">
    <div class="container">
        <h2>Core Technologies</h2>
        <div class="technology-grid">
            <!-- Starlink -->
            <div class="technology-item">
                <h3>Starlink for Satellite Connectivity</h3>
                <p>Starphone uses Starlink’s satellite network to provide fast, reliable internet in remote locations, ensuring constant communication no matter where you are.</p>
            </div>

            <!-- LTE / 5G / T-Mobile Edge -->
            <div class="technology-item">
                <h3>LTE & 5G Cellular Networks</h3>
                <p>Switch between LTE, 5G, and T-Mobile’s edge networks for seamless coverage and data access when satellite isn’t available.</p>
            </div>

            <!-- Solar Panel -->
            <div class="technology-item">
                <h3>Solar Power & Battery Management</h3>
                <p>With solar panels powering Starphone, it remains operational in remote locations. The battery management system ensures efficient power storage and use.</p>
            </div>

            <!-- Transfer Switch -->
            <div class="technology-item">
                <h3>Transfer Switch for Power Cutover</h3>
                <p>Our automatic transfer switch seamlessly switches between power systems, ensuring that Starphone stays online even if one power source fails.</p>
            </div>

            <!-- IoT Sensors -->
            <div class="technology-item">
                <h3>IoT Sensors for Monitoring</h3>
                <p>Starphone includes IoT sensors to monitor system health, environmental conditions, and power usage, enabling remote monitoring and management.</p>
            </div>

            <!-- Remote Monitoring -->
            <div class="technology-item">
                <h3>Remote Monitoring & Alerts</h3>
                <p>Receive alerts and system status updates via SMS or cellular network, ensuring you always stay informed about Starphone’s operational state.</p>
            </div>
        </div>
    </div>
</section>

<!-- Booth Section -->
<section class="booth-section section">
    <div class="container">
        <h2>The Starphone Booth</h2>
        <p>The Starphone booth is built for durability and extreme environments. Taking inspiration from the Cybertruck, the booth is constructed from 12-gauge stainless steel using advanced manufacturing processes.</p>
        <div class="booth-details-grid">
            <div class="booth-item">
                <h3>Material & Design</h3>
                <p>The booth is made from 12-gauge stainless steel for strength and weather resistance, drawing design inspiration from the Cybertruck’s advanced manufacturing techniques.</p>
            </div>
            <div class="booth-item">
                <h3>Interior Cooling</h3>
                <p>We use Dynamat and reflective barriers inside the booth to maintain a cool interior. A vent system with a HEPA filter ensures clean air circulation, keeping the booth cool and dust-free.</p>
            </div>
            <div class="booth-item">
                <h3>Prototype in Action</h3>
                <p>Check out the design schematics in our gallery for a closer look at the first pass of the completed booth prototype. More updates are coming as testing continues.</p>
            </div>
        </div>
    </div>
</section>

<!-- Phone Box Section -->
<section class="phone-box-section section">
    <div class="container">
        <h2>The Waterproof Phone Box</h2>
        <p>The interior phone box is designed to be waterproof, protecting the phone and other sensitive components from environmental elements.</p>
        <div class="phone-box-details-grid">
            <div class="phone-box-item">
                <h3>Waterproof Construction</h3>
                <p>The phone box is engineered with water-tight seals to keep it completely waterproof, ensuring durability and protection in the harshest conditions.</p>
            </div>
            <div class="phone-box-item">
                <h3>Rotary Phone Testing</h3>
                <p>Because we love retro design, we’re testing the system with a classic rotary phone. The Starphone system is adaptable to various input devices for future-proofing communication methods.</p>
            </div>
        </div>
    </div>
</section>

<!-- Call to Action Section -->
<section class="call-to-action section">
    <div class="container">
        <h2>Learn More About Starphone</h2>
        <p>Discover how Starphone can revolutionize communication and remote monitoring in the most challenging environments.</p>
        <a href="/support" class="button">Support Us</a>
    </div>
</section>

<style>
    /* How It Works Hero Section */
    .how-it-works-hero {
        background-color: var(--color-primary-dark);
        color: var(--color-button-text);
        text-align: center;
        padding: 80px 20px;
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

    /* Section Styling */
    .section {
        padding: 60px 20px;
        background-color: var(--color-background);
        color: var(--color-text);
    }

    .section h2 {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 40px;
        color: var(--color-primary);
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
    }

    /* Technology and Booth Section Grids */
    .technology-grid, .booth-details-grid, .phone-box-details-grid {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 30px;
    }

    .technology-item, .booth-item, .phone-box-item {
        flex: 1;
        background-color: var(--color-secondary);
        padding: 20px;
        border-radius: 10px;
        text-align: center;
        min-width: 250px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .technology-item h3, .booth-item h3, .phone-box-item h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
        color: var(--color-primary-dark);
    }

    .technology-item p, .booth-item p, .phone-box-item p {
        font-size: 1rem;
        color: var(--color-text-light);
    }

    /* Call to Action Section */
    .call-to-action {
        background-color: var(--color-primary);
        color: white;
        text-align: center;
        padding: 60px 20px;
    }

    .call-to-action h2 {
        font-size: 2rem;
        margin-bottom: 20px;
    }

    .call-to-action p {
        font-size: 1.2rem;
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

    /* Responsive Design */
    @media (max-width: 768px) {
        .technology-grid, .booth-details-grid, .phone-box-details-grid {
            flex-direction: column;
        }

        .call-to-action {
            padding: 40px 20px;
        }
    }
</style>
