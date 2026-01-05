import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Starphone Journey & Behind the Scenes',
  description: 'Explore photos and videos from Starphone\'s journey. See our booth designs, prototypes, testing phases, and the evolution of our public communication system.',
  openGraph: {
    title: 'Gallery | Starphone Journey & Behind the Scenes',
    description: 'Behind the scenes photos and videos of Starphone\'s development journey.',
    url: 'https://www.thestarphone.com/gallery',
  },
};

'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import styles from './gallery.module.css';

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
  "Cardboard-Assembly1.JPG",
  "Cardboard-Build-22.JPG",
  "Laser-Cut-Panels.JPG",
  "FEMA-June-2024.JPG",
  "more-people-november-2023.JPG",
  "october-2024-publicphone.JPEG",
  "october-2024-publicphone(1).JPEG",
  "Starphone-Team-NPS-Shendandoah-Public-Phone.JPG",
  "day-2-darwin.JPG",
  "john-calling-from-publicphone-november-2023.PNG",
  "iot-environment-sensor-for-booth.jpg",
  "environment-sensors.JPG",
  "Starphone-Sensors.PNG",
  "Starphone-Sensors.jpg",
];

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

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openImage = (src: string) => {
    window.open(src, '_blank');
  };

  const openPDF = () => {
    window.open(pdfFile, '_blank');
  };

  return (
    <div className={styles.container}>
      <section className={styles.pdfSection}>
        <h2>Starphone Design Drawings</h2>
        {!isMobile ? (
          <div className={styles.pdfContainer}>
            <iframe
              src={`${pdfFile}#view=FitH`}
              width="100%"
              height="600px"
              title="Starphone Design Drawings"
              loading="lazy"
            />
          </div>
        ) : (
          <div className={styles.pdfMobile}>
            <p>View the design drawings on your device</p>
            <button className={styles.pdfButton} onClick={openPDF}>
              📄 Open Design Drawings
            </button>
            <a href={pdfFile} download className={styles.pdfDownload}>
              ⬇️ Download PDF
            </a>
          </div>
        )}
      </section>

      <section className={styles.imageGallery}>
        <h2>Image Gallery</h2>
        <div className={styles.mediaGrid}>
          {imageFiles.map((image, index) => (
            <div key={image} className={styles.mediaItem}>
              <button
                className={styles.imageButton}
                onClick={() => openImage(basePath + image)}
                aria-label={`Open ${generateAltText(image)} in new window`}
              >
                <Image
                  src={basePath + image}
                  alt={generateAltText(image)}
                  width={400}
                  height={300}
                  loading={index < 6 ? 'eager' : 'lazy'}
                  className={styles.galleryImage}
                  sizes="(max-width: 480px) 140px, (max-width: 768px) 180px, (max-width: 1024px) 240px, 280px"
                />
                <div className={styles.imageOverlay}>
                  <span className={styles.zoomIcon}>🔍</span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.videoGallery}>
        <h2>Video Gallery</h2>
        <div className={styles.mediaGrid}>
          {videoFiles.map((video) => (
            <div key={video} className={styles.mediaItem}>
              <video controls className={styles.video}>
                <source src={basePath + video} type="video/mp4" />
                <p>
                  Your browser does not support the video tag.{' '}
                  <a href={basePath + video} download>
                    Download the video
                  </a>
                </p>
              </video>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.donateSection}>
        <h2>Support Starphone Project</h2>
        <div id="givebutter-widget" dangerouslySetInnerHTML={{
          __html: `
            <givebutter-widget id="LYxbKj"></givebutter-widget>
            <script async src="https://widgets.givebutter.com/latest.umd.cjs?acct=dOQ0XbCHnxsv4qWo&p=other"></script>
          `
        }} />
      </section>
    </div>
  );
}
