<!-- src/lib/components/Footer.svelte -->
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
            <a href="https://arkime.io" target="_blank" rel="noopener noreferrer">
                <img src="/images/arkime.svg" alt="Arkime" />
            </a>
            <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/your-website.svg" alt="Website" />
            </a>
        </div>
    </div>
</footer>

<style>
    footer {
        background-color: #1c1c1e;
        color: #f0f0f5;
        padding: 20px;
        text-align: center;
        border-top: 3px solid #0070f3;
    }

    footer a {
        color: #f0f0f5;
        font-weight: bold;
        margin: 0 10px;
    }

    footer a:hover {
        color: #f0a500;
    }

    .lcars {
        color: #f0a500;
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
</style>
