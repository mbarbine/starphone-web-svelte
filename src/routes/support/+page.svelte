<script>
    export let pageData;
</script>

<section class="support-page">
    <div class="container">
        <h1>Support the Revolution in Public Communication</h1>
        <p>
            Starphone isn’t just another gadget—it’s the future of secure, public communication for everyone, everywhere. From bustling cities to the farthest reaches of space, we’re working hard to make communication accessible to all. 
            But we need your help to make it a reality!
        </p>

        <!-- Social Proof: Add testimonials -->
        <div class="testimonials">
            <h2>What People Are Saying</h2>
            <div class="testimonial-grid">
                <div class="testimonial">
                    <p>“Starphone is set to revolutionize how we communicate, ensuring no one is left behind—even on the Moon!”</p>
                    <cite>– Aurora Borealis, Lead Engineer</cite>
                </div>
                <div class="testimonial">
                    <p>“Supporting Starphone means supporting a future where public communication is not only secure but available to everyone.”</p>
                    <cite>– Thundercat 1, Creative Director</cite>
                </div>
            </div>
        </div>

        <!-- Emotional Appeal: Urgency to donate -->
        <div class="emotional-appeal">
            <h2>Your Support Makes a Difference</h2>
            <p>
                By contributing to Starphone, you’re helping to build a future where communication can happen anywhere—from Earth to Mars! 
                <strong>Your donation, big or small, powers the development of this essential technology.</strong>
            </p>
        </div>

        <!-- Donation Options -->
        <h2>How You Can Support Starphone</h2>
        <ul class="support-list">
            <li><strong>Patreon:</strong> Join our community of backers for exclusive behind-the-scenes content. Become a member today!</li>
            <li><strong>GitHub Sponsors:</strong> Sponsor us on GitHub and directly support the Starphone team.</li>
            <li><strong>Givebutter:</strong> Make a one-time or recurring donation through Givebutter and help fund our mission.</li>
            <li><strong>Spread the Word:</strong> Share our project with friends, family, and colleagues. Help us build awareness!</li>
            <li><strong>Contribute:</strong> Are you a developer or engineer? Join our efforts on GitHub and help bring Starphone to life.</li>
        </ul>

        <!-- Donation Buttons and Embeds -->
        <div class="donation-section">
            <div class="donation-buttons">
                <a href="https://www.patreon.com/bePatron?u=25616382" data-patreon-widget-type="become-patron-button" class="button primary">Become a Patron</a>
                <script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
                <a href="https://github.com/sponsors/ph3ar" target="_blank" class="button secondary">Sponsor on GitHub</a>
            </div>

            <!-- GitHub Sponsor Embed -->
            <div class="github-sponsor">
                <iframe src="https://github.com/sponsors/ph3ar/card" title="Sponsor ph3ar" height="225" width="600" style="border: 0;"></iframe>
            </div>

            <!-- Givebutter Embed -->
            <div class="givebutter-donate">
                <givebutter-widget id="LYxbKj"></givebutter-widget>
                <script async src="https://widgets.givebutter.com/latest.umd.cjs?acct=dOQ0XbCHnxsv4qWo&p=other"></script>
            </div>
        </div>

        <!-- Call to Action -->
        <div class="final-appeal">
            <h2>Help Us Shape the Future</h2>
            <p>
                Every contribution brings us closer to a future where public phones aren’t relics of the past, but vital tools of the future—connecting cities, space stations, and beyond. Your support matters!
            </p>
            <a href="https://www.patreon.com/bePatron?u=25616382" class="button final-cta">Donate Now</a>
        </div>
    </div>
</section>

<style>
    /* General Styling */
    .support-page {
        padding: 60px 20px;
        background-color: #121212;
        color: #f0f0f5;
        text-align: center;
    }

    h1, h2 {
        color: #ff3e00;
        font-size: 2.8rem;
        margin-bottom: 20px;
        font-family: 'Montserrat', sans-serif;
    }

    p {
        font-size: 1.2rem;
        max-width: 800px;
        margin: 0 auto 40px;
        line-height: 1.6;
        color: #f0f0f5;
        font-family: 'Roboto', sans-serif;
    }

    /* Testimonials */
    .testimonials {
        margin: 60px 0;
    }

    .testimonials h2 {
        font-size: 2rem;
        color: #ff3e00;
        margin-bottom: 30px;
    }

    .testimonial-grid {
        display: flex;
        gap: 30px;
        justify-content: center;
        flex-wrap: wrap;
    }

    .testimonial {
        background-color: #f0f0f5;
        color: #333;
        padding: 20px;
        border-radius: 10px;
        width: 300px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-align: left;
        transition: transform 0.3s ease;
    }

    .testimonial:hover {
        transform: scale(1.05);
    }

    .testimonial p {
        font-size: 1rem;
        margin-bottom: 10px;
    }

    .testimonial cite {
        font-size: 0.9rem;
        color: #666;
    }

    /* Donation Buttons */
    .donation-buttons {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-bottom: 40px;
    }

    .button {
        padding: 12px 24px;
        border-radius: 6px;
        font-size: 1.1rem;
        color: white;
        text-decoration: none;
        transition: background-color 0.3s ease;
        font-family: 'Montserrat', sans-serif;
    }

    .button.primary {
        background-color: #ff3e00;
    }

    .button.secondary {
        background-color: #4075a6;
    }

    .button:hover {
        opacity: 0.9;
        transform: scale(1.05);
    }

    /* GitHub and Givebutter */
    .github-sponsor, .givebutter-donate {
        margin-bottom: 40px;
    }

    /* Final Call to Action */
    .final-appeal {
        background-color: #f0a500;
        color: #121212;
        padding: 40px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        margin-top: 60px;
    }

    .final-appeal h2 {
        font-size: 2.5rem;
        margin-bottom: 20px;
    }

    .final-appeal p {
        font-size: 1.2rem;
        max-width: 800px;
        margin: 0 auto 30px;
        color: #121212;
    }

    .final-cta {
        background-color: #121212;
        color: #f0f0f5;
        padding: 14px 28px;
        border-radius: 4px;
        text-decoration: none;
        font-weight: bold;
    }

    .final-cta:hover {
        background-color: #333;
        transform: scale(1.05);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        h1, h2 {
            font-size: 2.2rem;
        }

        .testimonial-grid {
            flex-direction: column;
            gap: 20px;
        }

        .donation-buttons {
            flex-direction: column;
        }
    }
</style>
