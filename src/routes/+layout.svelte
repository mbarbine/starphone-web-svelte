<!-- src/routes/+layout.svelte -->
<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores'; // Corrected import
	import { onMount } from 'svelte';
	import { webVitals } from '$lib/vitals';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/global.css';

	/** @type {import('./$types').LayoutServerData} */
	export let data;

	$: if (browser && data?.analyticsId) {
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId: data.analyticsId
		});
	}

	// Integrate Vercel Analytics
	import { inject } from '@vercel/analytics';
	if (browser) {
		inject();
	}
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	/* You can remove the inline styles since we've moved them to global.css */
</style>
