<script>
  export let className = '';
  export let count = 3;
  export let type = 'card'; // 'card', 'text', 'image', 'list'
</script>

<div class="skeleton-loader {className}">
  {#if type === 'card'}
    {#each Array(count) as _, i}
      <div class="skeleton-card">
        <div class="skeleton-image"></div>
        <div class="skeleton-content">
          <div class="skeleton-title"></div>
          <div class="skeleton-text"></div>
          <div class="skeleton-text short"></div>
        </div>
      </div>
    {/each}
  {:else if type === 'text'}
    {#each Array(count) as _, i}
      <div class="skeleton-text-line"></div>
    {/each}
  {:else if type === 'image'}
    {#each Array(count) as _, i}
      <div class="skeleton-image-block"></div>
    {/each}
  {:else if type === 'list'}
    {#each Array(count) as _, i}
      <div class="skeleton-list-item">
        <div class="skeleton-avatar"></div>
        <div class="skeleton-list-content">
          <div class="skeleton-text"></div>
          <div class="skeleton-text short"></div>
        </div>
      </div>
    {/each}
  {/if}
</div>

<style>
  .skeleton-loader {
    width: 100%;
  }

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }

  .skeleton-card,
  .skeleton-image,
  .skeleton-title,
  .skeleton-text,
  .skeleton-text-line,
  .skeleton-image-block,
  .skeleton-list-item,
  .skeleton-avatar {
    background: linear-gradient(
      90deg,
      #f0f0f0 0px,
      #f8f8f8 40px,
      #f0f0f0 80px
    );
    background-size: 1000px 100%;
    animation: shimmer 1.5s infinite;
  }

  .skeleton-card {
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  .skeleton-image {
    width: 100%;
    height: 200px;
  }

  .skeleton-content {
    padding: 1rem;
  }

  .skeleton-title {
    height: 24px;
    border-radius: 4px;
    margin-bottom: 0.75rem;
    width: 70%;
  }

  .skeleton-text {
    height: 16px;
    border-radius: 4px;
    margin-bottom: 0.5rem;
  }

  .skeleton-text.short {
    width: 50%;
  }

  .skeleton-text-line {
    height: 16px;
    border-radius: 4px;
    margin-bottom: 0.75rem;
  }

  .skeleton-image-block {
    width: 100%;
    height: 300px;
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  .skeleton-list-item {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 0.5rem;
  }

  .skeleton-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .skeleton-list-content {
    flex: 1;
  }

  @media (prefers-color-scheme: dark) {
    .skeleton-card,
    .skeleton-image,
    .skeleton-title,
    .skeleton-text,
    .skeleton-text-line,
    .skeleton-image-block,
    .skeleton-list-item,
    .skeleton-avatar {
      background: linear-gradient(
        90deg,
        #2a2a2a 0px,
        #3a3a3a 40px,
        #2a2a2a 80px
      );
      background-size: 1000px 100%;
    }
  }
</style>
