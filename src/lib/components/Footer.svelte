<footer>
    <div class="container">
        <p>&copy; {new Date().getFullYear()} Starphone Project</p>
        <p>Visit <a href="https://ph3ar.com" target="_blank" rel="noopener noreferrer">PH3AR</a> to explore more</p>
        <div class="social-icons">
            <a href="https://github.com/ph3ar" target="_blank" rel="noopener noreferrer">
                <img src="/icons/github.png" alt="GitHub" />
            </a>
            <a href="https://slack.com/ph3ar" target="_blank" rel="noopener noreferrer">
                <img src="/icons/slack.png" alt="Slack" />
            </a>
            <a href="https://ph3ar.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/ph3ar-logo.png" alt="PH3AR" />
            </a>
            <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/starphone-icon.png" alt="Starphone" />
            </a>
        </div>
    </div>
</footer>

<style>
    :root {
        --color-primary: #006494; /* Medium Blue */
        --color-secondary: #FFB30F; /* Gold */
        --color-text-light: #f0f0f5;
        --color-header-footer-bg: #00274d; /* Dark Navy */
        --color-header-footer-text: #ffffff;
        --color-footer-border: var(--color-primary);
        --transition-speed: 0.3s;
    }

    footer {
        background-color: var(--color-header-footer-bg);
        color: var(--color-header-footer-text);
        padding: 30px 20px;
        text-align: center;
        border-top: 4px solid var(--color-footer-border);
        font-family: 'Montserrat', sans-serif;
    }

    footer p {
        margin: 0 0 10px;
        font-size: 1rem;
    }

    footer a {
        color: var(--color-header-footer-text);
        font-weight: bold;
        margin: 0 10px;
        text-decoration: none;
        transition: color var(--transition-speed);
    }

    footer a:hover {
        color: var(--color-secondary); /* Gold hover effect */
    }

    .social-icons {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    .social-icons img {
        width: 30px;
        height: 30px;
        transition: transform var(--transition-speed), opacity var(--transition-speed);
    }

    .social-icons img:hover {
        transform: scale(1.2);
        opacity: 0.8;
    }

    @media (max-width: 768px) {
        .social-icons img {
            width: 25px;
            height: 25px;
        }
    }

    @media (max-width: 480px) {
        footer p {
            font-size: 0.9rem;
        }

        .social-icons img {
            width: 22px;
            height: 22px;
        }
    }
</style>
