<script>
    export let title = "Starphone";
    let menuOpen = false;

    function toggleMenu() {
        menuOpen = !menuOpen;
    }
</script>

<header>
    <div class="container">
        <a href="/" class="logo">
            <img src="/icons/starphone-black-small.png" alt="Starphone Logo" class="header-logo" />
        </a>
        <button class="menu-toggle" on:click={toggleMenu}>
            <span>{menuOpen ? 'Close' : 'Menu'}</span>
        </button>
        <nav class:open={menuOpen}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/history">Roadmap</a>
            <a href="/support">Support</a>
            <a href="/contact">Contact</a>
        </nav>
    </div>
</header>

<style>
    /* Global integration and color scheme */
    :root {
        --color-primary: #006494; /* Medium Blue */
        --color-secondary: #FFB30F; /* Gold */
        --color-text-light: #f0f0f5;
        --color-header-footer-bg: #000494; /* Dark Blue */
        --color-header-footer-text: #ffffff;
    }

    header {
        background-color: var(--color-header-footer-bg);
        padding: 15px 20px;
        color: var(--color-header-footer-text);
        position: sticky;
        top: 0;
        z-index: 1000;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }

    header .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
    }

    .logo img {
        height: 50px;
        width: auto;
    }

    header h1 a {
        color: var(--color-header-footer-text);
        font-size: 2rem;
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    header h1 a:hover {
        color: var(--color-secondary); /* Hover color change */
    }

    header nav {
        display: flex;
        gap: 20px;
        font-family: 'Roboto', sans-serif;
    }

    header nav a {
        color: var(--color-header-footer-text);
        font-weight: bold;
        font-size: 1.1rem;
        text-transform: uppercase;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    header nav a:hover {
        color: var(--color-secondary); /* Hover on links */
    }

    .menu-toggle {
        background: none;
        border: none;
        color: var(--color-header-footer-text);
        font-size: 1.1rem;
        cursor: pointer;
        padding: 10px;
        transition: color 0.3s ease;
    }

    .menu-toggle:hover {
        color: var(--color-secondary); /* Menu button hover effect */
    }

    /* Mobile View: Initially hide navigation */
    nav {
        display: none;
    }

    /* Show navigation when open */
    nav.open {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: var(--color-header-footer-bg);
        padding: 20px;
        text-align: center;
    }

    /* Mobile view adjustments */
    @media (max-width: 768px) {
        header nav {
            display: none;
        }

        nav.open {
            display: block;
        }

        header h1 a {
            font-size: 1.8rem;
        }
    }

    /* Responsive Menu */
    @media (max-width: 480px) {
        header h1 a {
            font-size: 1.6rem;
        }

        .menu-toggle {
            font-size: 1rem;
        }

        nav.open {
            padding: 15px;
        }
    }

    .header-logo {
        height: 50px;
        width: auto;
    }
</style>
