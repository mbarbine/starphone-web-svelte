<!-- src/lib/components/Header.svelte -->
<script>
	// Navigation links can be updated as needed
</script>

<header>
	<div class="container">
		<h1><a href="/">Starphone</a></h1>
		<nav>
			<a href="/">Home</a>
			<a href="/about">About</a>
			<!-- Add more navigation links if needed -->
		</nav>
	</div>
</header>

<style>
	header {
		background-color: #222;
		color: #fff;
		padding: 20px 0;
	}

	header a {
		color: #fff;
		text-decoration: none;
	}

	nav {
		margin-top: 10px;
	}

	nav a {
		margin-right: 15px;
	}
</style>
