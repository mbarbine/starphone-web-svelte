<script>
  import { onMount } from 'svelte';
  
  let loading = true;
  let error = null;
  
  onMount(async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/service-worker.js');
        console.log('Service Worker registered:', registration);
      } catch (err) {
        console.error('Service Worker registration failed:', err);
        error = err.message;
      }
    }
    loading = false;
  });
</script>

<svelte:head>
  <link rel="manifest" href="/manifest.json" />
  <meta name="theme-color" content="#0066cc" />
  <link rel="apple-touch-icon" href="/favicon.png" />
</svelte:head>

{#if loading}
  <div class="pwa-loader">
    <p>Initializing...</p>
  </div>
{:else if error}
  <div class="pwa-error">
    <p>⚠️ Offline mode unavailable: {error}</p>
  </div>
{/if}

<style>
  .pwa-loader, .pwa-error {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 1rem;
    border-radius: 8px;
    font-size: 0.9rem;
    z-index: 9999;
    animation: fadeIn 0.3s ease-in;
  }
  
  .pwa-error {
    background: rgba(239, 68, 68, 0.9);
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
