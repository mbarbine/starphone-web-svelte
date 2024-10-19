<script>
    export let pageData;
</script>

<section class="support-page">
    <div class="container">
        <h1>Support Starphone & PH3AR</h1>
        <p>
            Starphone is revolutionizing public communication, making it secure and accessible for all—whether in cities or space. PH3AR, meanwhile, is empowering creators and driving impactful projects. Your support is essential in turning these visions into reality.
        </p>
         <div class="givebutter-donate">
            <givebutter-widget id="LYxbKj"></givebutter-widget>
            <script async src="https://widgets.givebutter.com/latest.umd.cjs?acct=dOQ0XbCHnxsv4qWo&p=other"></script>
        </div>
        <!-- Support Options -->
        <div class="support-options">
            <h2>How You Can Help</h2>
            <p>
                You can support **PH3AR** by becoming a **Patreon** or **GitHub Sponsor** to help us grow and bring people together. Alternatively, you can directly support **Starphone** via Givebutter. Your contributions drive innovation and help us achieve ambitious goals.
            </p>
            <p>
                We've hit a wall. The costs to build a full-size prototype, assemble it, deliver it to Starbase, and test are expensive. We are using this opportunity to drive down the cost of producing a fully functional, free-standing public phone booth.
            </p>
            <p>
                We will learn a lot and make critical improvements. Everything is open-sourced, from designs to software, and we’re sharing what we do and how we do it along the way. Follow us on social media to track our progress!
            </p>
            <div class="support-list">
                <!-- Patreon Support -->
                <div class="support-item">
                    <h3>Become a PH3AR Patron</h3>
                    <p>Help us connect more people, in more places, more often through our events and projects.</p>
                    <a href="https://www.patreon.com/bePatron?u=25616382" class="button primary">Join on Patreon</a>
                </div>
                <!-- GitHub Sponsor -->
                <div class="support-item">
                    <h3>Sponsor PH3AR on GitHub</h3>
                    <p>Support the growth of PH3AR by sponsoring development projects directly on GitHub.</p>
                    <a href="https://github.com/sponsors/ph3ar" target="_blank" class="button secondary">Sponsor on GitHub</a>
                </div>
                <!-- Givebutter Donation for Starphone -->
                <div class="support-item givebutter">
                    <h3>Donate to Starphone</h3>
                    <p>Contribute to the future of public communication with a one-time or recurring donation through Givebutter.</p>
                    <givebutter-widget id="LxxMGL"></givebutter-widget>
                    <script async src="https://widgets.givebutter.com/latest.umd.cjs?acct=dOQ0XbCHnxsv4qWo&p=other"></script>
                    <a href="https://givebutter.com/PH3AR" class="button final-cta">Donate Now</a>
                </div>
            </div>
        </div>

        <!-- Final Call to Action -->
        <div class="final-appeal">
            <h2>Help Us Build the Future</h2>
            <p>
                Your support is crucial to bringing Starphone’s mission to life. With your help, we can reduce the cost of creating a full-sized, free-standing booth and make significant improvements along the way.
            </p>
            <p>Follow us on social media for updates, as we open-source our progress and share our learnings in real-time!</p>
            <a href="https://givebutter.com/PH3AR" class="button final-cta">Donate Now</a>
        </div>
    </div>
</section>

<style>
    /* General Styling */
    .support-page {
        padding: 60px 20px;
        background-color: #f4f7fb;
        text-align: center;
    }

    .support-page h1 {
        color: #0070f3;
        font-size: 2.5rem;
        margin-bottom: 20px;
        font-family: 'Montserrat', sans-serif;
    }

    .support-page p {
        font-size: 1.2rem;
        max-width: 800px;
        margin: 0 auto 40px;
        line-height: 1.6;
        color: #333;
        font-family: 'Roboto', sans-serif;
    }

    /* Support Options */
    .support-options {
        margin-bottom: 60px;
    }

    .support-options h2 {
        font-size: 2rem;
        margin-bottom: 20px;
        color: #0070f3;
    }

    .support-list {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 30px;
    }

    .support-item {
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        max-width: 300px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 250px;
    }

    .support-item h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
        color: #0070f3;
    }

    .support-item p {
        font-size: 1rem;
        margin-bottom: 20px;
        color: #555;
    }

    .givebutter {
        text-align: center;
        padding: 30px;
    }

    /* Buttons */
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
        margin-top: auto;
    }

    .button.primary {
        background-color: #0070f3;
    }

    .button.secondary {
        background-color: #ffb30f;
    }

    .button.final-cta {
        background-color: #ffb30f;
        color: white;
    }

    .button:hover {
        opacity: 0.9;
        transform: scale(1.05);
    }

    /* Final Call to Action */
    .final-appeal {
        background-color: #0070f3;
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
        background-color: #ffb30f;
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
