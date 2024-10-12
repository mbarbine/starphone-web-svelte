<!-- src/lib/components/Header.svelte -->
<script>
    export let title = "Starphone";
</script>

<header>
    <div class="container">
        <h1><a href="/">{title}</a></h1>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/games">Games</a> <!-- Link to Games section -->
        </nav>
    </div>
</header>

<style>
    header {
        background-color: #1c1c1e;
        padding: 20px;
        color: #f0f0f5;
        position: sticky;
        top: 0;
        z-index: 1000;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    header h1 a {
        color: #f0f0f5;
        font-size: 2.5rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        transition: color 0.3s ease;
    }

    header h1 a:hover {
        color: #f0a500;
    }

    header nav {
        margin-top: 15px;
    }

    header nav a {
        margin: 0 15px;
        color: #f0f0f5;
        font-weight: bold;
        font-size: 1rem;
        text-transform: uppercase;
        transition: color 0.3s ease;
    }

    header nav a:hover {
        color: #f0a500;
    }

    @media (max-width: 768px) {
        header nav a {
            margin: 0 10px;
            font-size: 0.9rem;
        }
    }
</style>
