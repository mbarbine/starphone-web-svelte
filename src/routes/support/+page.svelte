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
    /* Support Page Styling */
    .support-page {
        padding: 60px 20px;
        background-color: var(--color-background);
        color: var(--color-text);
        text-align: center;
    }

    h1, h2 {
        color: var(--color-primary);
        font-size: 2.8rem;
        margin-bottom: 20px;
        font-family: var(--font-secondary);
    }

    p {
        font-size: 1.2rem;
        max-width: 800px;
        margin: 0 auto 40px;
        line-height: 1.6;
        color: var(--color-text-light);
        font-family: var(--font-primary);
    }

    /* Testimonials */
    .testimonials {
        margin: 60px 0;
    }

    .testimonials h2 {
        font-size: 2rem;
        color: var(--color-primary);
        margin-bottom: 30px;
    }

    .testimonial-grid {
        display: flex;
        gap: 30px;
        justify-content: center;
        flex-wrap: wrap;
    }

    .testimonial {
        background-color: var(--color-light);
        color: var(--color-text);
        padding: 20px;
        border-radius: var(--border-radius);
        width: 300px;
        box-shadow: var(--box-shadow);
        text-align: left;
        transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
    }

    .testimonial:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .testimonial p {
        font-size: 1rem;
        margin-bottom: 10px;
    }

    .testimonial cite {
        font-size: 0.9rem;
        color: var(--color-text-light);
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
        border-radius: var(--border-radius);
        font-size: 1.1rem;
        color: white;
        text-decoration: none;
        transition: background-color 0.3s ease, transform 0.3s ease;
        font-family: var(--font-secondary);
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

    /* GitHub and Givebutter */
    .github-sponsor, .givebutter-donate {
        margin-bottom: 40px;
    }

    /* Final Call to Action */
    .final-appeal {
        background-color: var(--color-secondary);
        color: var(--color-text);
        padding: 40px;
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
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
    }

    .final-cta {
        background-color: var(--color-primary);
        color: var(--color-button-text);
        padding: 14px 28px;
        border-radius: var(--border-radius);
        text-decoration: none;
        font-weight: bold;
        transition: background-color 0.3s ease, transform 0.3s ease;
    }

    .final-cta:hover {
        background-color: var(--color-primary-dark);
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
