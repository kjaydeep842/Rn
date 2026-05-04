'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import styles from './StatsSection.module.css';

interface StatProps {
  number: number;
  suffix: string;
  label: string;
  delay: number;
}

const AnimatedCounter = ({ number, suffix, label, delay }: StatProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = number;
      const duration = 2; // seconds
      const increment = Math.ceil(end / (duration * 60));
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, number]);

  return (
    <motion.div 
      ref={ref}
      className={styles.statItem}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <div className={styles.number}>
        {count}{suffix}
      </div>
      <div className={styles.label}>{label}</div>
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    { number: 500, suffix: "+", label: "Happy Clients", delay: 0.1 },
    { number: 10, suffix: "+", label: "Years Experience", delay: 0.2 },
    { number: 100, suffix: "%", label: "Audit Protection", delay: 0.3 },
    { number: 15, suffix: "M+", label: "Refunds Maximized", delay: 0.4 },
  ];

  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <AnimatedCounter key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
