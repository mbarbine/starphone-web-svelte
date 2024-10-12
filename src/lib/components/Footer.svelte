<!-- src/lib/components/Footer.svelte -->
<footer>
	<div class="container">
		<p>&copy; {new Date().getFullYear()} <a href="https://thestarphone.com">Starphone.com</a></p>
	</div>
</footer>

<style>
	footer {
		background-color: #222;
		color: #fff;
		padding: 20px 0;
		text-align: center;
	}

	footer a {
		color: #fff;
		text-decoration: none;
	}
</style>
