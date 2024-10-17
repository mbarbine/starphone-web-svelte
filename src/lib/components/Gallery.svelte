<script>
    import Gallery from '$lib/components/Gallery.svelte';
</script>

<section class="gallery-page">
    <h1>Making of Starphone Gallery</h1>
    <p>Explore the design process and journey of Starphone.</p>

    <!-- Include the Gallery component to display PDF and images -->
    <Gallery />
</section>

<style>
    .gallery-page {
        padding: 40px;
        text-align: center;
        background-color: var(--color-background);
        color: var(--color-text);
    }

    .gallery-page h1 {
        font-size: 2.5rem;
        margin-bottom: 20px;
        color: var(--color-primary);
    }

    .gallery-page p {
        font-size: 1.2rem;
        margin-bottom: 30px;
    }
</style>
