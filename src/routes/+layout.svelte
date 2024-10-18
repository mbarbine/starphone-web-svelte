<!-- src/routes/+layout.svelte -->

<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { browser } from '$app/environment';
    import { inject } from '@vercel/analytics';
    import { MetaTags } from 'svelte-meta-tags';
    import { fade, slide } from 'svelte/transition';

    // Import global CSS
    import '/src/lib/styles/global.css';  // Adjust path if necessary

    // Inject Vercel Analytics only in the browser
    if (browser) inject();
</script>

<head>
    <!-- SEO Meta Tags -->
    <MetaTags
        title="Starphone - Secure Public Communication Solutions"
        description="Starphone provides secure, reliable public communication solutions for extreme environments, from cities to space. Join the future of communication with Starphone."
    />

    <!-- Open Graph / Facebook -->
    <meta property="og:title" content="Starphone - Secure Public Communication Solutions" />
    <meta property="og:description" content="Explore Starphone's cutting-edge public communication technology designed for extreme environments. Join the future of global communication." />
    <meta property="og:image" content="/images/starphone-black-small.png" />
    <meta property="og:url" content="https://www.thestarphone.com/" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Starphone" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Starphone - Secure Public Communication Solutions" />
    <meta name="twitter:description" content="Join Starphone in revolutionizing public communication with secure, reliable technology for extreme environments." />
    <meta name="twitter:image" content="/images/x.png" />

    <!-- Canonical Link -->
    <link rel="canonical" href="https://www.thestarphone.com/" />

    <!-- Favicon -->
    <link rel="icon" href="/favicon.ico" type="image/png" />

    <!-- JSON-LD Structured Data for SEO -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Starphone",
      "url": "https://www.thestarphone.com/",
      "logo": "https://www.thestarphone.com/images/starphone-bg-color.png",
      "sameAs": [
        "https://twitter.com/barbinary",
        "https://github.com/ph3ar",
        "https://www.linkedin.com/in/michaelbarbine"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-540-671-1261",
        "contactType": "Customer Support",
        "areaServed": "Global",
        "availableLanguage": ["English"]
      },
      "description": "Starphone provides secure public communication solutions for extreme environments, enabling reliable communication in cities, space, and remote locations.",
      "foundingDate": "2024",
      "founders": [
        {
          "@type": "Person",
          "name": "Michael Barbine"
        },
        {
          "@type": "Person",
          "name": "Patrick Modin"
        }
      ]
    }
    </script>

</head>

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
