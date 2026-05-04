'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from './ImageSlider.module.css';

const images = [
  { src: '/promo.png', title: 'Our Services' },
  { src: '/logo.jpeg', title: 'Professional Accounting' },
  { src: '/tax-agent.jpg', title: 'Registered Tax Agent' },
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.sliderSection}>
      <div className="container">
        <div className={styles.carouselContainer}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className={styles.slideWrapper}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <img 
                src={images[index].src} 
                alt={images[index].title} 
                className={styles.mainImage}
              />
              <div className={styles.caption}>
                <h3>{images[index].title}</h3>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className={styles.dots}>
            {images.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === index ? styles.activeDot : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
