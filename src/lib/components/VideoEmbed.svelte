<!-- src/lib/components/VideoEmbed.svelte -->
<script>
    export let videoUrl = '';
</script>

<div class="video-embed">
    <iframe 
        width="100%" 
        height="400" 
        src={videoUrl} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
    </iframe>
</div>

<style>
    .video-embed {
        margin-top: 40px;
        text-align: center;
    }

    iframe {
        border-radius: 12px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 768px) {
        iframe {
            height: 250px;
        }
    }
</style>
