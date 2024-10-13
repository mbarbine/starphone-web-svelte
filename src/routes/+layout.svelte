<!-- src/routes/+layout.svelte -->

<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { browser } from '$app/environment';
    import { inject } from '@vercel/analytics';
    import { MetaTags } from 'svelte-meta-tags';
    import { fade, slide } from 'svelte/transition';

    // Inject Vercel Analytics only in the browser
    if (browser) inject();
</script>

<!-- SEO Meta Tags -->
<MetaTags
    title="Starphone - Public Communication"
    description="Starphone provides public communication solutions in extreme environments."
/>

<!-- App layout with smooth transitions -->
<div class="app">
    <Header title="Starphone" />

    <main>
        <!-- Add smooth transitions between pages -->
        <div in:fade={{ duration: 300 }} out:slide={{ duration: 500 }}>
            <slot />
        </div>
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
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
    }

    /* Media query for better responsiveness */
    @media (max-width: 768px) {
        main {
            padding: 1rem;
        }
    }
</style>
