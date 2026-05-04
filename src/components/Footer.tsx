'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <motion.footer 
      className={styles.footer}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <img src="/logo.jpeg" alt="R&N Nexus Tax & Accounting Logo" className={styles.footerLogo} />
            </div>
            <p className={styles.tagline}>
              Professional, reliable, and expert taxation services for you and your business.
            </p>
          </div>
          
          <div className={styles.links}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className={styles.contact}>
            <h4>Contact Info</h4>
            <p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=R+%26+N+Nexus+Tax+%26+Accounting+Unit+1%2F543+Churchill+Rd+Kilburn+SA+5084+Australia" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.mapLink}
              >
                📍 Unit 1/543 Churchill Rd, Kilburn SA 5084, Australia
              </a>
            </p>
            <p>Phone: (08) 8349 6225</p>
            <p>Mobile: 0424 790 994</p>
            <p>Email: nexustaxationservices@gmail.com</p>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Nexus Tax & Accounting. All rights reserved.</p>
          <div className={styles.badges}>
            <span className={styles.badge}>IPA Member</span>
            <img src="/tax-agent.jpg" alt="Registered Tax Agent" className={styles.smallBadge} />
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
