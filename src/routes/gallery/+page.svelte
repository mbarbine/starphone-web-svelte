<script>
    // Images to display in the gallery
    const imageFiles = [
        "bus-garden.jpg",
        "first-day-Public-Phone.JPG",
        "first-day-public-phone(1).jpg",
        "Public-Phone-First-Calls-October-23.JPG",
        "Public-Phone-Standing-Oct-2023.JPG",
        "Public-phone-day-5.JPG",
        "public-phone-end-of-day-2.JPG",
        "Starphone-Original-Booth-Drawing2.JPG",
        "Starphone-Original-Drawing.JPG",
        "Completed-Prototype-Michael-Phone.jpg",
        "And-they-kept-coming-october2023.JPG",
        "Booth-Design-Sketches(1).jpg",
        "First-day-Darwin-from-canada-public-phone.JPG",
        "Post-IFT3-We-didn_t-think-it-would-survive.JPG",
        "Public-Phone-Build-11-October-2023.JPG",
        "Public-Phone-as-of-october-2024.JPEG",
        "Public-phone-day-5.JPG",
        "Cardboard-Assembly1.JPG",
        "Cardboard-Build-22.JPG",
        "Laser-Cut-Panels.JPG",
        "FEMA-June-2024.JPG",
        "more-people-november-2023.JPG",
        "october-2024-publicphone.JPEG",
        "october-2024-publicphone(1).JPEG",
        "public-phone-end-of-day-2.JPG",
        "Starphone-Team-NPS-Shendandoah-Public-Phone.JPG",
        "day-2-darwin.JPG",
        "john-calling-from-publicphone-november-2023.PNG",
        "iot-environment-sensor-for-booth.jpg",
        "environment-sensors.JPG",
        "Starphone-Sensors.PNG",
        "Starphone-Sensors.jpg",
    ];

   // PDF and images in the gallery
    const pdfFile = "/making-of-starphone/Starphone-Design-Drawings.pdf";

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
    
    // Function to open image in new tab
    function openImage(src) {
        window.open(src, '_blank');
    }
    
    // Function to toggle fullscreen on video
    function toggleFullscreen(event) {
        const video = event.target;
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    }
    
    // Generate alt text from filename
    function generateAltText(filename) {
        return filename
            .replace(/\.[^/.]+$/, '') // Remove extension
            .replace(/[-_]/g, ' ')     // Replace dashes/underscores with spaces
            .replace(/\b\w/g, l => l.toUpperCase()); // Capitalize words
    }
</script>

<!-- PDF Viewer Section -->
<section class="pdf-section">
    <h2>Starphone Design Drawings</h2>
    <iframe src={pdfFile} width="100%" height="600px" title="Starphone Design Drawings"></iframe>
</section>

<!-- Image Gallery Section -->
<section class="image-gallery">
    <h2>Image Gallery</h2>
    <div class="media-grid" role="list">
        {#each imageFiles as image}
            <div class="media-item" role="listitem">
                <button 
                    class="image-button"
                    onclick={() => openImage(basePath + image)}
                    onkeydown={(e) => e.key === 'Enter' && openImage(basePath + image)}
                    aria-label="Open {generateAltText(image)} in new window"
                >
                    <img 
                        src={basePath + image} 
                        alt={generateAltText(image)} 
                        loading="lazy"
                    />
                </button>
            </div>
        {/each}
    </div>
</section>

<!-- Video Gallery Section -->
<section class="video-gallery">
    <h2>Video Gallery</h2>
    <div class="media-grid" role="list">
        {#each videoFiles as video}
            <div class="media-item" role="listitem">
                <button 
                    class="video-button"
                    onclick={(e) => {
                        e.preventDefault();
                        const videoEl = e.currentTarget.querySelector('video');
                        toggleFullscreen({ target: videoEl });
                    }}
                    onkeydown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            const videoEl = e.currentTarget.querySelector('video');
                            toggleFullscreen({ target: videoEl });
                        }
                    }}
                    aria-label="Play {generateAltText(video)} in fullscreen"
                >
                    <video 
                        controls
                        aria-label={generateAltText(video)}
                    >
                        <source src={basePath + video} type="video/mp4" />
                        <p>Your browser does not support the video tag. <a href={basePath + video} download>Download the video</a> instead.</p>
                    </video>
                </button>
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
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 24px;
        justify-items: center;
        padding: 20px 0;
    }
    
    .media-item {
        width: 100%;
        position: relative;
        overflow: hidden;
        border-radius: var(--border-radius);
        transition: var(--transition-smooth);
    }
    
    .media-item:hover {
        transform: translateY(-4px);
        box-shadow: var(--box-shadow-hover);
    }
    
    .image-button,
    .video-button {
        all: unset;
        display: block;
        width: 100%;
        cursor: pointer;
        position: relative;
        border-radius: var(--border-radius);
        overflow: hidden;
    }
    
    .image-button:focus,
    .video-button:focus {
        outline: 3px solid var(--color-link-hover);
        outline-offset: 2px;
    }
    
    .image-button::after {
        content: '🔍';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2rem;
        opacity: 0;
        transition: var(--transition-smooth);
        pointer-events: none;
    }
    
    .image-button:hover::after,
    .image-button:focus::after {
        opacity: 1;
    }

    .media-item img, .media-item video {
        max-width: 100%;
        width: 100%;
        height: auto;
        display: block;
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        transition: var(--transition-smooth);
    }
    
    .image-button:hover img,
    .image-button:focus img {
        filter: brightness(0.7);
    }
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
