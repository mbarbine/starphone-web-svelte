'use client';

import Image from 'next/image';
import Script from 'next/script';
import { useState, useEffect } from 'react';
import styles from './gallery.module.css';

// Images that need 90-degree rotation (taken in portrait but stored as landscape)
const imageFiles = [
  { file: "First-day-Darwin-from-canada-public-phone.JPG", caption: "First Day - Darwin from Canada", rotate: true },
  { file: "Post-IFT3-We-didn_t-think-it-would-survive.JPG", caption: "Post IFT3 - We Didn't Think It Would Survive", rotate: true },
  { file: "Public-Phone-First-Calls-October-23.JPG", caption: "First Calls - October 2023", rotate: true },
  { file: "And-they-kept-coming-october2023.JPG", caption: "People Kept Coming", rotate: true },
  { file: "FEMA-June-2024.JPG", caption: "FEMA Visit - June 2024", rotate: true },
  { file: "Starphone-Team-NPS-Shendandoah-Public-Phone.JPG", caption: "Team at Shenandoah NPS", rotate: true },
  { file: "Public-Phone-Standing-Oct-2023.JPG", caption: "Standing Proud - October 2023", rotate: true },
  { file: "Public-Phone-Build-11-October-2023.JPG", caption: "Build Day 11", rotate: true },
  { file: "Completed-Prototype-Michael-Phone.jpg", caption: "Completed Prototype", rotate: true },
  { file: "Public-Phone-as-of-october-2024.JPEG", caption: "Latest Version - October 2024", rotate: true },
  { file: "Cardboard-Build-22.JPG", caption: "Cardboard Prototyping", rotate: true },
  { file: "Laser-Cut-Panels.JPG", caption: "Precision Laser Cut Panels", rotate: true },
  { file: "environment-sensors.JPG", caption: "Environmental Sensors", rotate: true },
  { file: "Starphone-Sensors.jpg", caption: "IoT Sensor Array", rotate: true },
  { file: "day-2-darwin.JPG", caption: "Day 2 with Darwin", rotate: true },
  { file: "more-people-november-2023.JPG", caption: "Growing Interest", rotate: true },
  { file: "first-day-Public-Phone.JPG", caption: "First Public Phone Day", rotate: true },
  { file: "Completed-Prototype-Michael-Phone-June2024.jpg", caption: "June 2024 Prototype", rotate: false },
];

const videoEmbed = {
  url: "https://www.youtube.com/embed/vApSEgEnqQY",
  title: "Starphone - It's Ringing!",
  caption: "Watch our first successful call at Starbase"
};

const basePath = "/making-of-starphone/";
const pdfFile = "/making-of-starphone/Starphone-Design-Drawings.pdf";

function generateAltText(filename: string) {
  return filename
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());
}

export default function GalleryPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (scriptLoaded && typeof window !== 'undefined' && (window as any).givebutter) {
      setTimeout(() => {
        if ((window as any).givebutter) {
          (window as any).givebutter.init();
        }
      }, 100);
    }
  }, [scriptLoaded]);

  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const openPDF = () => {
    window.open(pdfFile, '_blank');
  };

  return (
    <>
      <Script 
        src="https://givebutter.com/js/widget.js" 
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Starphone Gallery</h1>
          <p className={styles.subtitle}>Journey from concept to reality</p>
        </div>

        <section className={styles.videoSection}>
          <h2>📹 Featured Video</h2>
          <p className={styles.videoDescription}>{videoEmbed.caption}</p>
          <div className={styles.youtubeContainer}>
            <iframe
              width="100%"
              height="100%"
              src={videoEmbed.url}
              title={videoEmbed.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={styles.youtubeEmbed}
            ></iframe>
          </div>
        </section>

        <section className={styles.imageGallery}>
          <h2>📸 Photo Gallery</h2>
          <div className={styles.masonryGrid}>
            {imageFiles.map((item, index) => (
              <div 
                key={item.file} 
                className={`${styles.galleryItem} ${item.rotate ? styles.rotatedContainer : ''}`}
                onClick={() => setLightboxImage(basePath + item.file)}
                data-rotate={item.rotate}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={basePath + item.file}
                    alt={item.caption}
                    width={item.rotate ? 400 : 300}
                    height={item.rotate ? 300 : 400}
                    loading={index < 8 ? 'eager' : 'lazy'}
                    className={`${styles.galleryImage} ${item.rotate ? styles.rotatedImage : ''}`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className={styles.imageOverlay}>
                  <p>{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.pdfSection}>
          <h2>📐 Technical Drawings</h2>
          <p className={styles.pdfDescription}>Detailed design specifications and technical documentation</p>
          
          <div className={styles.pdfWrapper}>
            <div className={styles.pdfControls}>
              <a 
                href={pdfFile} 
                download="Starphone-Design-Drawings.pdf"
                className={styles.downloadButton}
              >
                📥 Download PDF
              </a>
              <a 
                href={pdfFile} 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.openButton}
              >
                🔗 Open Full Screen
              </a>
              <button 
                className={styles.zoomButton}
                onClick={() => {
                  const viewer = document.getElementById('pdf-viewer');
                  if (viewer) {
                    viewer.requestFullscreen?.();
                  }
                }}
              >
                🔍 Fullscreen View
              </button>
            </div>
            
            <div className={styles.pdfViewerWrapper} id="pdf-viewer">
              <div className={styles.pdfToolbar}>
                <span className={styles.pdfTitle}>📄 Starphone Design Drawings</span>
                <span className={styles.pdfHint}>Scroll to navigate • Pinch to zoom</span>
              </div>
              <div className={styles.pdfContainer}>
                {!isMobile ? (
                  <iframe
                    src={`${pdfFile}#view=FitH&toolbar=1&navpanes=1`}
                    width="100%"
                    height="900"
                    title="Starphone Design Drawings"
                    className={styles.pdfFrame}
                    style={{ border: 'none' }}
                  />
                ) : (
                  <div className={styles.pdfMobileView}>
                    <div className={styles.pdfMobileIcon}>📄</div>
                    <h3>Technical Drawings</h3>
                    <p>For the best viewing experience on mobile, download the PDF or open in a new tab.</p>
                    <div className={styles.pdfMobileActions}>
                      <a 
                        href={pdfFile} 
                        download="Starphone-Design-Drawings.pdf"
                        className={styles.pdfMobileButton}
                      >
                        📥 Download
                      </a>
                      <a 
                        href={pdfFile} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.pdfMobileButton}
                      >
                        🔗 Open PDF
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

      <section className={styles.donateSection}>
          <h2>💝 Support Our Mission</h2>
          <p className={styles.donateText}>Help us build resilient communication for extreme environments</p>
          <div 
            className={styles.donateWidget}
            dangerouslySetInnerHTML={{
              __html: '<givebutter-widget id="LYxbKj"></givebutter-widget>'
            }} 
          />
        </section>
      </div>

      {lightboxImage && (
        <div className={styles.lightbox} onClick={() => setLightboxImage(null)}>
          <div className={styles.lightboxContent}>
            <button className={styles.closeButton} onClick={() => setLightboxImage(null)}>
              ✕
            </button>
            <Image
              src={lightboxImage}
              alt="Gallery image"
              width={1200}
              height={900}
              className={styles.lightboxImage}
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
