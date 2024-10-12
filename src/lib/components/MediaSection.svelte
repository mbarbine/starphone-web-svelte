<script>
    export let mediaItems = [];
  
    // You can also fetch mediaItems via props or API calls
  </script>
  
  <section class="section section-media">
    <div class="container">
      <h2>Media Gallery</h2>
      <div class="media-grid">
        {#each mediaItems as item}
          {#if item.type === 'image'}
            <div class="media-item">
              <img src={item.src} alt={item.alt} />
            </div>
          {:else if item.type === 'video'}
            <div class="media-item">
              <video controls>
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </section>
  
  <style>
    .section-media {
      background-color: var(--background-dark);
      padding: 60px 0;
    }
  
    .section-media h2 {
      color: var(--lcars-blue);
      text-align: center;
      margin-bottom: 40px;
    }
  
    .media-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
  
    .media-item {
      flex: 1 1 calc(33.333% - 20px);
      box-sizing: border-box;
    }
  
    .media-item img, .media-item video {
      width: 100%;
      border-radius: 8px;
    }
  
    @media (max-width: 768px) {
      .media-item {
        flex: 1 1 calc(50% - 20px);
      }
    }
  
    @media (max-width: 480px) {
      .media-item {
        flex: 1 1 100%;
      }
    }
  </style>
  