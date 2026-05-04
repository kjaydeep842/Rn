'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import styles from './Hero.module.css';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.bgWrapper}>
        <div className={styles.bgImage}></div>
      </div>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className={styles.logoWrapper}>
            <img src="/logo.jpeg" alt="R&N Nexus Logo" className={styles.heroLogo} />
            <img src="/tax-agent.jpg" alt="Registered Tax Agent" className={styles.heroBadge} />
          </motion.div>
          <motion.h1 className={styles.title} variants={itemVariants}>
            Expert Tax & Accounting <br />
            <span>For Your Peace of Mind</span>
          </motion.h1>
          <motion.p className={styles.subtitle} variants={itemVariants}>
            Professional taxation services, bookkeeping, and business advisory tailored for individuals and small businesses. 
            Registered Tax Agents you can trust.
          </motion.p>
          <motion.div className={styles.actions} variants={itemVariants}>
            <Link href="/services" className="btn btn-secondary">
              Our Services
            </Link>
            <Link href="/contact" className="btn btn-primary" style={{ marginLeft: '1rem' }}>
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
