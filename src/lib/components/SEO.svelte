<script>
  import { MetaTags } from 'svelte-meta-tags';
  import { page } from '$app/stores';
  
  export let title = 'Starphone - Secure Public Communication Solutions';
  export let description = 'Starphone provides secure, reliable public communication solutions for extreme environments, from cities to space.';
  export let keywords = 'starphone, public phone, satellite communication, secure communication, emergency communication, rural connectivity';
  export let image = '/images/starphone-bg-color.png';
  export let type = 'website';
  export let author = 'Starphone Team';
  export let canonical = undefined;
  
  $: currentUrl = $page.url.href;
  $: canonicalUrl = canonical || currentUrl;
  
  const siteName = 'Starphone';
  const twitterHandle = '@barbinary';
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content={author} />
  <meta name="robots" content="index, follow" />
  <meta name="language" content="English" />
  <meta name="revisit-after" content="7 days" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content={type} />
  <meta property="og:url" content={currentUrl} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  <meta property="og:site_name" content={siteName} />
  <meta property="og:locale" content="en_US" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={currentUrl} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
  <meta name="twitter:creator" content={twitterHandle} />
  <meta name="twitter:site" content={twitterHandle} />
  
  <!-- Canonical Link -->
  <link rel="canonical" href={canonicalUrl} />
  
  <!-- Additional SEO -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="theme-color" content="#0066cc" />
</svelte:head>
