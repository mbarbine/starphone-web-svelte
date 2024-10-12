<!-- src/routes/+layout.svelte -->
<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { browser } from '$app/environment';
	import { inject } from '@vercel/analytics';
	if (browser) inject();
</script>

<div class="app">
	<Header title="Starphone" />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	main {
		flex: 1;
	}
</style>
