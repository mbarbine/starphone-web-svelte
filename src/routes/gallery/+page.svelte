<script>
    // PDF and images in the gallery
    const pdfFile = "/making-of-starphone/Starphone-Design-Drawings.pdf";

    // Images to display in the gallery
    const imageFiles = [
        "Public-Phone-First-Calls-October-23.JPG",
        "Public-Phone-Standing-Oct-2023.JPG",
        "Public-phone-day-5.JPG",
        "Starphone-Original-Booth-Drawing2.JPG",
        "Starphone-Original-Drawing.JPG",
        "Starphone-Sensors.PNG",
        "Starphone-Sensors.jpg",
        "public-phone-end-of-day-2.JPG",
        "And-they-kept-coming-october2023.JPG",
        "Booth-Design-Sketches(1).jpg",
        "Cardboard-Assembly-12.JPG",
        "Cardboard-Assembly1.JPG",
        "Cardboard-Build-22(1).JPG",
        "Cardboard-Build-22.JPG",
        "Completed-Prototype-Michael-Phone-June2024.jpg",
        "Completed-Prototype-Michael-Phone.jpg",
        "FEMA-June-2024.JPG",
        "First-day-Darwin-from-canada-public-phone.JPG",
        "John-calling-his-son-from-publicphone.PNG",
        "Laser-Cut-Panels.JPG",
        "Post-IFT3-We-didn_t-think-it-would-survive.JPG",
        "Public-Phone-Build-11-October-2023.JPG",
        "Public-Phone-as-of-october-2024.JPEG",
        "Public-phone-day-5.JPG",
        "iot-environment-sensor-for-booth.jpg",
        "john-calling-from-publicphone-november-2023.PNG",
        "more-people-november-2023.JPG",
        "october-2024-publicphone.JPEG",
        "october-2024-publicphone(1).JPEG",
        "public-phone-end-of-day-2.JPG",
        "Starphone-Team-NPS-Shendandoah-Public-Phone.JPG",
        "bus-garden.jpg",
        "day-2-darwin.JPG",
        "environment-sensors.JPG",
        "first-day-Public-Phone.JPG",
        "first-day-public-phone(1).jpg",
        "john-calling-from-publicphone-november-2023.PNG"
    ];

    // Videos to display in the gallery
    const videoFiles = [
        "Cardboard-Build-2.MOV",
        "itsringing.mov",
        "Public-Phone-1.MP4",
        "Windy-at-starbase.MP4",
        "First-Piece-Of-Booth.MOV",
        "Starphone-Booth-Piece-2.MOV",
        "Tmobile-Carrior-Device.MOV",
        "later-on-people-are-fascinated.MP4"
    ];

    // Base path for the media files
    const basePath = "/making-of-starphone/";
</script>

<!-- PDF Viewer Section -->
<section class="pdf-section">
    <h2>Starphone Design Drawings</h2>
    <iframe src={pdfFile} width="100%" height="600px" title="Starphone Design Drawings"></iframe>
</section>

<!-- Image Gallery Section -->
<section class="image-gallery">
    <h2>Image Gallery</h2>
    <div class="media-grid">
        {#each imageFiles as image}
            <div class="media-item">
                <img src={basePath + image} alt={image} loading="lazy" onclick="window.open(this.src, '_blank')" />
            </div>
        {/each}
    </div>
</section>

<!-- Video Gallery Section -->
<section class="video-gallery">
    <h2>Video Gallery</h2>
    <div class="media-grid">
        {#each videoFiles as video}
            <div class="media-item">
                <video controls onclick="this.requestFullscreen()">
                    <source src={basePath + video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        {/each}
    </div>
</section>

<!-- GiveButter Donate Widget -->
<section class="givebutter-donate">
    <h2>Support Starphone Project</h2>
    <givebutter-widget id="LYxbKj"></givebutter-widget>
    <script async src="https://widgets.givebutter.com/latest.umd.cjs?acct=dOQ0XbCHnxsv4qWo&p=other"></script>
</section>

<style>
    /* PDF Section Styles */
    .pdf-section {
        margin-bottom: 40px;
        text-align: center;
    }

    .pdf-section h2 {
        font-size: 2rem;
        margin-bottom: 20px;
        color: var(--color-primary);
    }

    /* Gallery Section Styles */
    .image-gallery, .video-gallery {
        margin-top: 40px;
        text-align: center;
    }

    .image-gallery h2, .video-gallery h2 {
        font-size: 2rem;
        margin-bottom: 20px;
        color: var(--color-primary);
    }

    .media-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        justify-items: center;
    }

    .media-item img, .media-item video {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
    }

    .media-item img:hover, .media-item video:hover {
        transform: scale(1.05);
        cursor: pointer;
    }

    .media-item video {
        width: 100%;
        max-height: 300px;
        background-color: black;
    }

    /* GiveButter Donate Widget Styles */
    .givebutter-donate {
        margin-top: 50px;
        text-align: center;
    }

    .givebutter-donate h2 {
        font-size: 2rem;
        margin-bottom: 20px;
        color: var(--color-primary);
    }

    /* Responsive Styles */
    @media (max-width: 768px) {
        .media-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        }

        .pdf-section iframe {
            height: 400px;
        }

        .media-item video {
            max-height: 250px;
        }
    }

    @media (max-width: 480px) {
        .media-grid {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        }

        .pdf-section iframe {
            height: 300px;
        }

        .media-item video {
            max-height: 200px;
        }
    }
</style>
