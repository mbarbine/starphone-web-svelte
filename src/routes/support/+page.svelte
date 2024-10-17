<script>
    export let pageData;
</script>

<section class="support-page">
    <div class="container">
        <h1>Support Starphone</h1>
        <p>
            Starphone is shaping the future of secure public communication for everyone, from cities to space. Join us in making this vision a reality!
        </p>

        <!-- Clear Support Options -->
        <div class="support-options">
            <h2>How You Can Support</h2>
            <div class="support-list">
                <div class="support-item">
                    <h3>Become a Patron</h3>
                    <p>Get exclusive content and behind-the-scenes updates by joining our Patreon community.</p>
                    <a href="https://www.patreon.com/bePatron?u=25616382" class="button primary">Join on Patreon</a>
                </div>
                <div class="support-item">
                    <h3>Sponsor on GitHub</h3>
                    <p>Directly support our development by sponsoring us on GitHub.</p>
                    <a href="https://github.com/sponsors/ph3ar" target="_blank" class="button secondary">Sponsor on GitHub</a>
                </div>
                <div class="support-item">
                    <h3>Make a Donation</h3>
                    <p>One-time or recurring donations can be made via Givebutter to help fund Starphone’s development.</p>
                    <div class="givebutter-donate">
                        <givebutter-widget id="LYxbKj"></givebutter-widget>
                        <script async src="https://widgets.givebutter.com/latest.umd.cjs?acct=dOQ0XbCHnxsv4qWo&p=other"></script>
                    </div>
                </div>
            </div>
        </div>

        <!-- Final Call to Action -->
        <div class="final-appeal">
            <h2>Help Shape the Future</h2>
            <p>
                Every contribution brings us closer to a world where public phones are not relics of the past, but essential tools for the future. Your support is crucial!
            </p>
            <a href="https://www.patreon.com/bePatron?u=25616382" class="button final-cta">Donate Now</a>
        </div>
    </div>
</section>

<style>
    /* Support Page Styling */
    .support-page {
        padding: 60px 20px;
        background-color: var(--color-background);
        color: var(--color-text);
        text-align: center;
    }

    h1 {
        color: var(--color-primary);
        font-size: 2.5rem;
        margin-bottom: 20px;
        font-family: 'Montserrat', sans-serif;
    }

    p {
        font-size: 1.2rem;
        max-width: 800px;
        margin: 0 auto 40px;
        line-height: 1.6;
        color: var(--color-text-light);
        font-family: 'Roboto', sans-serif;
    }

    /* Support Options */
    .support-options {
        margin-bottom: 60px;
    }

    .support-options h2 {
        font-size: 2rem;
        margin-bottom: 40px;
        color: var(--color-primary);
    }

    .support-list {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 30px;
    }

    .support-item {
        background-color: var(--color-light);
        padding: 20px;
        border-radius: 10px;
        max-width: 300px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        text-align: left;
    }

    .support-item h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
        color: var(--color-primary);
    }

    .support-item p {
        font-size: 1rem;
        margin-bottom: 20px;
    }

    .button {
        display: inline-block;
        padding: 12px 24px;
        border-radius: 5px;
        font-size: 1.1rem;
        text-align: center;
        color: white;
        text-decoration: none;
        transition: background-color 0.3s ease, transform 0.3s ease;
        font-family: 'Roboto', sans-serif;
    }

    .button.primary {
        background-color: var(--color-primary);
    }

    .button.secondary {
        background-color: var(--color-secondary);
    }

    .button:hover {
        opacity: 0.9;
        transform: scale(1.05);
    }

    /* Final Call to Action */
    .final-appeal {
        background-color: var(--color-secondary);
        padding: 40px;
        border-radius: 10px;
        margin-top: 60px;
        color: white;
    }

    .final-appeal h2 {
        font-size: 2rem;
        margin-bottom: 20px;
    }

    .final-cta {
        background-color: var(--color-primary);
        padding: 14px 28px;
        border-radius: 5px;
        text-decoration: none;
        font-weight: bold;
        transition: background-color 0.3s ease, transform 0.3s ease;
    }

    .final-cta:hover {
        transform: scale(1.05);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .support-list {
            flex-direction: column;
            gap: 20px;
        }

        .support-item {
            max-width: 100%;
        }
    }
</style>
