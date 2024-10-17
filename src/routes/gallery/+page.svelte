<script>
    // PDF and images in the gallery
    const pdfFile = "/making-of-starphone/Starphone-Design-Drawings.pdf";

    // Media (images and videos) to display in the gallery
    const mediaFiles = [
        { type: 'image', file: "Public-Phone-First-Calls-October-23.JPG" },
        { type: 'image', file: "Public-Phone-Standing-Oct-2023.JPG" },
        { type: 'image', file: "Public-phone-day-5.JPG" },
        { type: 'image', file: "Starphone-Original-Booth-Drawing2.JPG" },
        { type: 'image', file: "Starphone-Original-Drawing.JPG" },
        { type: 'image', file: "Starphone-Sensors.PNG" },
        { type: 'image', file: "Starphone-Sensors.jpg" },
        { type: 'image', file: "public-phone-end-of-day-2.JPG" },
        { type: 'image', file: "And-they-kept-coming-october2023.JPG" },
        { type: 'image', file: "Booth-Design-Sketches(1).jpg" },
        { type: 'image', file: "Cardboard-Assembly-12.JPG" },
        { type: 'image', file: "Cardboard-Assembly1.JPG" },
        { type: 'image', file: "Cardboard-Build-22(1).JPG" },
        { type: 'image', file: "Cardboard-Build-22.JPG" },
        { type: 'image', file: "Completed-Prototype-Michael-Phone-June2024.jpg" },
        { type: 'image', file: "Completed-Prototype-Michael-Phone.jpg" },
        { type: 'image', file: "FEMA-June-2024.JPG" },
        { type: 'image', file: "First-day-Darwin-from-canada-public-phone.JPG" },
        { type: 'image', file: "John-calling-his-son-from-publicphone.PNG" },
        { type: 'image', file: "Laser-Cut-Panels.JPG" },
        { type: 'image', file: "Post-IFT3-We-didn_t-think-it-would-survive.JPG" },
        { type: 'image', file: "Public-Phone-Build-11-October-2023.JPG" },
        { type: 'image', file: "Public-Phone-as-of-october-2024.JPEG" },
        { type: 'image', file: "Public-phone-day-5.JPG" },
        { type: 'image', file: "iot-environment-sensor-for-booth.jpg" },
        { type: 'image', file: "john-calling-from-publicphone-november-2023.PNG" },
        { type: 'image', file: "more-people-november-2023.JPG" },
        { type: 'image', file: "october-2024-publicphone.JPEG" },
        { type: 'image', file: "october-2024-publicphone(1).JPEG" },
        { type: 'image', file: "public-phone-end-of-day-2.JPG" },
        { type: 'image', file: "Starphone-Team-NPS-Shendandoah-Public-Phone.JPG" },
        { type: 'video', file: "Cardboard-Build-2.MOV" },
        { type: 'video', file: "Cutting-By-Hand-Nope-Patrick.MOV" },
        { type: 'video', file: "Public-Phone-1.MP4" },
        { type: 'video', file: "Windy-at-starbase.MP4" },
        { type: 'video', file: "First-Piece-Of-Booth.MOV" },
        { type: 'video', file: "Starphone-Booth-Piece-2.MOV" },
        { type: 'video', file: "Tmobile-Carrior-Device.MOV" }
    ];

    // Base path for the media files
    const basePath = "/making-of-starphone/";
</script>

<!-- PDF Viewer Section -->
<section class="pdf-section">
    <h2>Starphone Design Drawings</h2>
    <iframe src={pdfFile} width="100%" height="600px" title="Starphone Design Drawings"></iframe>
</section>

<!-- Image and Video Gallery Section -->
<section class="media-gallery">
    <h2>Gallery Images and Videos</h2>
    <div class="media-grid">
        {#each mediaFiles as media}
            <div class="media-item">
                {#if media.type === 'image'}
                    <img src={basePath + media.file} alt={media.file} loading="lazy" />
                {:else if media.type === 'video'}
                    <video controls>
                        <source src={basePath + media.file} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                {/if}
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
    .media-gallery {
        margin-top: 40px;
        text-align: center;
    }

    .media-gallery h2 {
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
