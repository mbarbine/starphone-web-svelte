<script>
  export let src;
  export let alt;
  export let width = undefined;
  export let height = undefined;
  export let loading = 'lazy';
  export let fetchpriority = 'auto';
  export let className = '';
  export let sizes = '100vw';
  
  let loaded = false;
  let error = false;
  
  function handleLoad() {
    loaded = true;
  }
  
  function handleError() {
    error = true;
  }
</script>

<div class="optimized-image-wrapper {className}">
  {#if !error}
    <img
      {src}
      {alt}
      {width}
      {height}
      {loading}
      {fetchpriority}
      {sizes}
      on:load={handleLoad}
      on:error={handleError}
      class:loaded
      decoding="async"
    />
  {:else}
    <div class="image-error">
      <p>Image failed to load</p>
    </div>
  {/if}
</div>

<style>
  .optimized-image-wrapper {
    position: relative;
    overflow: hidden;
  }
  
  img {
    max-width: 100%;
    height: auto;
    display: block;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  
  img.loaded {
    opacity: 1;
  }
  
  .image-error {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 200px;
    background: #f5f5f5;
    color: #666;
  }
</style>
