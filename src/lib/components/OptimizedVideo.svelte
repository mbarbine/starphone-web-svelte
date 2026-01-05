<script>
  export let src;
  export let poster = undefined;
  export let width = undefined;
  export let height = undefined;
  export let controls = true;
  export let autoplay = false;
  export let muted = false;
  export let loop = false;
  export let preload = 'metadata';
  export let className = '';
  
  let videoElement;
  let isPlaying = false;
  
  function handlePlay() {
    isPlaying = true;
  }
  
  function handlePause() {
    isPlaying = false;
  }
</script>

<div class="optimized-video-wrapper {className}">
  <video
    bind:this={videoElement}
    {src}
    {poster}
    {width}
    {height}
    {controls}
    {autoplay}
    {muted}
    {loop}
    {preload}
    on:play={handlePlay}
    on:pause={handlePause}
    playsinline
  >
    <source {src} type="video/mp4" />
    <p>Your browser doesn't support HTML5 video. <a href={src}>Download the video</a> instead.</p>
  </video>
</div>

<style>
  .optimized-video-wrapper {
    position: relative;
    width: 100%;
    max-width: 100%;
  }
  
  video {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
  }
</style>
