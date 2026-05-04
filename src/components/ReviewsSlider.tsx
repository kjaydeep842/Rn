'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ReviewsSlider.module.css';

const reviews = [
  {
    id: 1,
    name: "Suresh Loganathan",
    rating: 5,
    text: "Prompt, flexible, and very attentive. They provide genuine personal service, take the time to understand our specific needs, and offer clear advice. Highly recommend.",
    initials: "SL"
  },
  {
    id: 2,
    name: "Sarah Miller",
    rating: 5,
    text: "Excellent service! They made my tax return process so smooth and stress-free. Very professional team and they explain everything clearly.",
    initials: "SM"
  },
  {
    id: 3,
    name: "James Wilson",
    rating: 5,
    text: "The best accounting firm I've worked with in Kilburn. They've helped my business grow with their strategic financial advice. Truly experts in their field.",
    initials: "JW"
  },
  {
    id: 4,
    name: "Emma Thompson",
    rating: 4,
    text: "Very reliable and humble staff. They helped me with complex financial needs that other firms couldn't handle. Great experience overall.",
    initials: "ET"
  }
];

const ReviewsSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <section className={styles.reviewsSection} id="reviews">
      <div className="container">
        <div className={styles.titleWrapper}>
          <span className={styles.subtitle}>Testimonials</span>
          <h2 className={styles.title}>What Our Clients Say</h2>
        </div>

        <div className={styles.sliderContainer}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 }
              }}
              className={styles.cardWrapper}
            >
              <div className={styles.quoteIcon}>"</div>
              
              <div className={styles.stars}>
                {[...Array(reviews[index].rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              <p className={styles.reviewText}>{reviews[index].text}</p>

              <div className={styles.authorInfo}>
                <div className={styles.avatar}>{reviews[index].initials}</div>
                <div>
                  <div className={styles.authorName}>{reviews[index].name}</div>
                  <div className={styles.authorTitle}>Verified Customer</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className={styles.navigation}>
            <button className={styles.navBtn} onClick={prevSlide} aria-label="Previous review">
              ←
            </button>
            <div className={styles.dots}>
              {reviews.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === index ? styles.activeDot : ''}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button className={styles.navBtn} onClick={nextSlide} aria-label="Next review">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSlider;
