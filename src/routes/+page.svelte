<script>
    import Gallery from '$lib/components/Gallery.svelte';
    import VideoPlayer from '$lib/components/VideoPlayer.svelte';
  
    let images = [
      { src: '/images/photo1.jpg', alt: 'Starphone Booth 1' },
      { src: '/images/photo2.jpg', alt: 'Starphone Booth 2' },
      { src: '/images/photo3.jpg', alt: 'Starphone Booth 3' }
    ];
  
    let videos = [
      { src: '/videos/intro.mp4' }
    ];
  </script>
  
  <section class="hero">
    <div class="container">
      <h2>Starphone: A Revolution in Public Communication</h2>
      <p>The Starphone is a space-grade, Faraday-protected communication device with hybrid network capabilities. Designed for extreme environments, Starphone offers unmatched durability and reliable connectivity for public spaces.</p>
      <button class="button">Learn More</button>
    </div>
  </section>
  
  <section class="gallery-section">
    <div class="container">
      <h3>Photo Gallery</h3>
      <Gallery {images} />
    </div>
  </section>
  
  <section class="video-section">
    <div class="container">
      <h3>Video Gallery</h3>
      <VideoPlayer {videos} />
    </div>
  </section>
  
  <section class="plan">
    <div class="container">
      <h3>Week-by-Week Plan</h3>
      <div class="week">
        <h4>Week 1: Design Scaling and Material Sourcing</h4>
        <p>Scale down the Starphone design to 1/10th of its original size and source necessary materials.</p>
        <ul>
          <li>Collaborate with the design team.</li>
          <li>Source stainless steel sheets and filament for 3D printing.</li>
        </ul>
      </div>
      <!-- Add more weeks as necessary -->
    </div>
  </section>
  
  <style>
    /* Additional styles can be added here if needed */
  </style>
  