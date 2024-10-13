<footer>
    <div class="container">
        <p>&copy; {new Date().getFullYear()} Starphone Project</p>
        <p>Visit <a href="https://ph3ar.io" target="_blank" rel="noopener noreferrer">PH3AR</a> to explore more</p>
        <p>Designed with <span class="lcars">LCARS</span> inspiration</p>
        <div class="social-icons">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <img src="/images/github.svg" alt="GitHub" />
            </a>
            <a href="https://slack.com/yourworkspace" target="_blank" rel="noopener noreferrer">
                <img src="/images/slack.svg" alt="Slack" />
            </a>
            <a href="https://www.ph3ar.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/arkime.svg" alt="PH3AR" />
            </a>
            <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/your-website.svg" alt="Website" />
            </a>
        </div>
    </div>
</footer>

<style>
    /* Use global variables from globals.css for consistent styling */
    :root {
        --color-primary: #006494; /* Medium Blue */
        --color-secondary: #FFB30F; /* Gold */
        --color-text-light: #f0f0f5;
        --color-header-footer-bg: #000494; /* Dark Blue */
        --color-header-footer-text: #ffffff;
        --color-footer-border: var(--color-primary);
    }

    footer {
        background-color: var(--color-header-footer-bg);
        color: var(--color-header-footer-text);
        padding: 20px;
        text-align: center;
        border-top: 3px solid var(--color-footer-border);
    }

    footer a {
        color: var(--color-header-footer-text);
        font-weight: bold;
        margin: 0 10px;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    footer a:hover {
        color: var(--color-secondary); /* Hover to Gold */
    }

    .lcars {
        color: var(--color-secondary); /* Gold for LCARS reference */
        font-weight: bold;
    }

    .social-icons {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        gap: 15px;
    }

    .social-icons img {
        width: 24px;
        height: 24px;
        transition: transform 0.3s ease;
    }

    .social-icons img:hover {
        transform: scale(1.2);
    }

    @media (max-width: 768px) {
        .social-icons img {
            width: 20px;
            height: 20px;
        }
    }

    @media (max-width: 480px) {
        footer p {
            font-size: 0.9rem;
        }

        .social-icons img {
            width: 18px;
            height: 18px;
        }
    }
</style>
