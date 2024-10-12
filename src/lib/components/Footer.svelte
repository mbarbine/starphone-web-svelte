<!-- src/lib/components/Footer.svelte -->
<footer>
	<div class="container">
		<p>&copy; {new Date().getFullYear()} Starphone Project</p>
		<p>Visit <a href="https://ph3ar.io">PH3AR</a> to explore more</p>
		<p>Designed with <span class="lcars">LCARS</span> inspiration</p>
	</div>
</footer>

<style>
	footer {
		background-color: #101820;
		color: #f0f0f5;
		padding: 20px;
		text-align: center;
		border-top: 3px solid #0070f3;
	}

	footer a {
		color: #f0f0f5;
		font-weight: bold;
	}

	footer a:hover {
		color: #0070f3;
	}

	.lcars {
		color: #f0a500;
		font-weight: bold;
	}
</style>
