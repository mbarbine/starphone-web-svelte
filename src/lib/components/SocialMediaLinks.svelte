<script>
    // You can add more social media platforms as needed
    const socialMedia = [
      { name: 'X', url: 'https://x.com/Starphone', icon: '/icons/x-icon.svg' },
      { name: 'Instagram', url: 'https://instagram.com/Starphone', icon: '/icons/instagram-icon.svg' },
      // Add more social media links here
    ];
  </script>
  
  <section class="social-media">
    <div class="container">
      <h2>Connect with Us</h2>
      <div class="social-icons">
        {#each socialMedia as media}
          <a href={media.url} target="_blank" rel="noopener">
            <img src={media.icon} alt={media.name} />
          </a>
        {/each}
      </div>
    </div>
  </section>
  
  <style>
    .social-media {
      background-color: var(--background-dark);
      padding: 40px 0;
      text-align: center;
    }
  
    .social-media h2 {
      color: var(--lcars-blue);
      margin-bottom: 20px;
    }
  
    .social-icons a {
      margin: 0 10px;
      display: inline-block;
    }
  
    .social-icons img {
      width: 40px;
      height: 40px;
      transition: transform 0.3s;
    }
  
    .social-icons img:hover {
      transform: scale(1.1);
    }
  </style>
  