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
		background-color: #101820;
		padding: 20px;
		color: #f0f0f5;
		position: sticky;
		top: 0;
		z-index: 1000;
	}

	header h1 a {
		color: #f0f0f5;
		font-size: 2rem;
		text-transform: uppercase;
	}

	header nav a {
		margin-right: 15px;
		color: #f0f0f5;
		text-transform: uppercase;
		transition: color 0.3s ease;
	}

	header nav a:hover {
		color: #f0a500;
	}
</style>
