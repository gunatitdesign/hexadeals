import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';

// simple carousel that rotates through images in public/assets/images
const images = [
  'header-bg.webp',
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className={styles.carousel} aria-label="Featured images">
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`${styles.slide} ${idx === current ? styles.active : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className={styles.controls}>
        <button onClick={() => setCurrent((current - 1 + images.length) % images.length)} aria-label="Previous">
          ‹
        </button>
        <button onClick={() => setCurrent((current + 1) % images.length)} aria-label="Next">
          ›
        </button>
      </div>
    </section>
  );
}
