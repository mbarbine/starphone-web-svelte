<script>
    export let title = "Starphone";
    let menuOpen = false;

    function toggleMenu() {
        menuOpen = !menuOpen;
    }
</script>

<header>
    <div class="container">
        <h1><a href="/">{title}</a></h1>
        <button class="menu-toggle" on:click={toggleMenu}>
            <span>{menuOpen ? 'Close' : 'Menu'}</span>
        </button>
        <nav class:open={menuOpen}>
            <a href="/">Starphone</a>
            <a href="/about">About</a>
            <a href="/support">Support</a>
            <a href="/contact">Contact</a>
            <a href="/history">History</a>
            <a href="/press">Press</a>
        </nav>
    </div>
</header>

<style>
    header {
        background-color: #1c1c1e;
        padding: 15px 20px;
        color: #f0f0f5;
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

    header h1 a {
        color: #f0f0f5;
        font-size: 2rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-decoration: none;
    }

    header nav {
        display: flex;
        gap: 20px;
    }

    header nav a {
        color: #f0f0f5;
        font-weight: bold;
        font-size: 1.1rem;
        text-transform: uppercase;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    header nav a:hover {
        color: #f0a500;
    }

    /* Hide navigation on small screens */
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
        background-color: #1c1c1e;
        padding: 20px;
        text-align: center;
    }

    .menu-toggle {
        background: none;
        border: none;
        color: #f0f0f5;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 10px;
    }

    /* Mobile view */
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
</style>
