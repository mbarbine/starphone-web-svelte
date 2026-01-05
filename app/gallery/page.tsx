'use client';

import Image from 'next/image';
import Script from 'next/script';
import { useState, useEffect } from 'react';
import styles from './gallery.module.css';

const imageFiles = [
  { file: "First-day-Darwin-from-canada-public-phone.JPG", caption: "First Day - Darwin from Canada" },
  { file: "Post-IFT3-We-didn_t-think-it-would-survive.JPG", caption: "Post IFT3 - We Didn't Think It Would Survive" },
  { file: "Public-Phone-First-Calls-October-23.JPG", caption: "First Calls - October 2023" },
  { file: "And-they-kept-coming-october2023.JPG", caption: "People Kept Coming" },
  { file: "FEMA-June-2024.JPG", caption: "FEMA Visit - June 2024" },
  { file: "Starphone-Team-NPS-Shendandoah-Public-Phone.JPG", caption: "Team at Shenandoah NPS" },
  { file: "Public-Phone-Standing-Oct-2023.JPG", caption: "Standing Proud - October 2023" },
  { file: "Public-Phone-Build-11-October-2023.JPG", caption: "Build Day 11" },
  { file: "Completed-Prototype-Michael-Phone.jpg", caption: "Completed Prototype" },
  { file: "Public-Phone-as-of-october-2024.JPEG", caption: "Latest Version - October 2024" },
  { file: "Cardboard-Build-22.JPG", caption: "Cardboard Prototyping" },
  { file: "Laser-Cut-Panels.JPG", caption: "Precision Laser Cut Panels" },
  { file: "environment-sensors.JPG", caption: "Environmental Sensors" },
  { file: "Starphone-Sensors.jpg", caption: "IoT Sensor Array" },
  { file: "day-2-darwin.JPG", caption: "Day 2 with Darwin" },
  { file: "more-people-november-2023.JPG", caption: "Growing Interest" },
  { file: "first-day-Public-Phone.JPG", caption: "First Public Phone Day" },
  { file: "Completed-Prototype-Michael-Phone-June2024.jpg", caption: "June 2024 Prototype" },
];

const videoFiles = [
  { file: "Public-Phone-1.MP4", caption: "Starphone in Action" },
  { file: "itsringing.mov", caption: "It's Ringing!" },
  { file: "later-on-people-are-fascinated.MP4", caption: "People Fascinated" },
];

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
          <h2>📹 Video Highlights</h2>
          <div className={styles.videoGrid}>
            {videoFiles.map((item) => (
              <div key={item.file} className={styles.videoCard}>
                <video 
                  controls 
                  className={styles.video}
                  preload="metadata"
                  playsInline
                  poster="/images/starphone-hero-square.png"
                >
                  <source src={basePath + item.file} type={item.file.toLowerCase().endsWith('.mov') ? 'video/mp4' : 'video/mp4'} />
                  <track kind="captions" />
                  Your browser does not support the video tag.
                </video>
                <p className={styles.mediaCaption}>{item.caption}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.imageGallery}>
          <h2>📸 Photo Gallery</h2>
          <div className={styles.masonryGrid}>
            {imageFiles.map((item, index) => (
              <div 
                key={item.file} 
                className={styles.galleryItem}
                onClick={() => setLightboxImage(basePath + item.file)}
              >
                <Image
                  src={basePath + item.file}
                  alt={item.caption}
                  width={400}
                  height={300}
                  loading={index < 8 ? 'eager' : 'lazy'}
                  className={styles.galleryImage}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
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
          {!isMobile ? (
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
                  🔗 Open in New Tab
                </a>
              </div>
              <div className={styles.pdfContainer}>
                <object
                  data={pdfFile}
                  type="application/pdf"
                  width="100%"
                  height="800px"
                  title="Starphone Design Drawings"
                  className={styles.pdfViewer}
                >
                  <div className={styles.pdfFallback}>
                    <p>Unable to display PDF in browser.</p>
                    <a href={pdfFile} download className={styles.downloadLink}>
                      📥 Download PDF to view
                    </a>
                  </div>
                </object>
              </div>
            </div>
          ) : (
            <div className={styles.pdfMobile}>
              <p>View the complete design documentation</p>
              <button className={styles.pdfButton} onClick={openPDF}>
                📄 Open Design Drawings
              </button>
            </div>
          )}
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
