<script>
    export let title = "Starphone";
</script>

<header>
    <div class="container">
        <h1><a href="/">{title}</a></h1>
        <nav>
            <a href="/">Starphone</a>
            <a href="/about">About</a>
            <a href="/support">Support</a>
            <a href="/contact">Contact</a>
        </nav>
    </div>
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #1c1c1e;
        padding: 20px;
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
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }

    header h1 a {
        color: #f0f0f5;
        font-size: 2rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        transition: color 0.3s ease;
        text-decoration: none;
    }

    header h1 a:hover {
        color: #f0a500;
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
        transition: color 0.3s ease;
        text-decoration: none;
    }

    header nav a:hover {
        color: #f0a500;
    }

    @media (max-width: 768px) {
        header h1 a {
            font-size: 1.8rem;
        }

        header nav a {
            font-size: 1rem;
            margin: 0 10px;
        }
    }

    @media (max-width: 480px) {
        header nav {
            flex-direction: column;
            align-items: flex-start;
        }

        header nav a {
            margin: 5px 0;
        }

        header .container {
            flex-direction: column;
            align-items: flex-start;
        }
    }
</style>
