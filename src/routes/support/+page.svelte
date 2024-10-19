<script>
    export let pageData;
</script>

<section class="support-page">
    <div class="container">
        <h1>Support Starphone and PH3AR</h1>
        <p>
            Starphone is shaping the future of secure public communication for everyone, from cities to space. PH3AR is empowering creators and building impactful projects. Join us in making these visions a reality!
        </p>
         <div class="givebutter-donate">
            <givebutter-widget id="LYxbKj"></givebutter-widget>
            <script async src="https://widgets.givebutter.com/latest.umd.cjs?acct=dOQ0XbCHnxsv4qWo&p=other"></script>
        </div>
        <!-- Support Options -->
        <div class="support-options">
            <h2>How You Can Support</h2>
            <p>
                You can support **PH3AR** to do more, build more, and host more events by becoming a **Patreon** or **GitHub Sponsor**. You can support **Starphone directly** by donating through Givebutter. Your contributions will drive innovation and help us achieve these ambitious goals.
            </p>
                The proof of concept phone is still standing. We've worked hard, learned a lot, and we have had a lot of help! And we need a lot more.
            </p>
            <div class="support-list">
                <!-- Patreon Support -->
                <div class="support-item">
                    <h3>Become a PH3AR Patron</h3>
                    <p>Help us bring more people together, in new and improved ways, in more places, more often!</p>
                    <a href="https://www.patreon.com/bePatron?u=25616382" class="button primary">Join on Patreon</a>
                </div>
                <!-- GitHub Sponsor -->
                <div class="support-item">
                    <h3>Sponsor PH3AR Projects</h3>
                    <p>Directly support PH3AR's growth by sponsoring development.</p>
                    <a href="https://github.com/sponsors/ph3ar" target="_blank" class="button secondary">Sponsor on GitHub</a>
                </div>
                <!-- Givebutter Donation for Starphone -->
                <div class="support-item givebutter">
                    <h3>Make a Donation</h3>
                    <p>Support Starphone’s development with a one-time or recurring donation.</p>
                    <givebutter-widget id="LxxMGL"></givebutter-widget>
                    <script async src="https://widgets.givebutter.com/latest.umd.cjs?acct=dOQ0XbCHnxsv4qWo&p=other"></script>
                    <a href="https://givebutter.com/PH3AR" class="button final-cta">Donate Now</a>
                </div>
            </div>
        </div>

        <!-- Final Call to Action -->
        <div class="final-appeal">
            <h2>Help Shape the Future</h2>
            <p>
                Your support is crucial in building a future where public phones are not relics of the past, but essential tools for global communication.
            </p>
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
        color: #333; /* Adjusted for readability */
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
        background-color: #0070f3;
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
