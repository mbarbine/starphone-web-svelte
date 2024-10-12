<!-- src/lib/components/VideoPlayer.svelte -->
<script>
	export let videos = [];
</script>

<div class="video-gallery">
	{#each videos as video}
		<div class="video-item">
			<video controls>
				<source src={video.src} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	{/each}
</div>

<style>
	.video-gallery {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.video-item video {
		width: 100%;
		height: auto;
	}
</style>
