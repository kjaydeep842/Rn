'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav 
      className={styles.navbar}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <img src="/logo.jpeg" alt="R&N Nexus Tax & Accounting Logo" className={styles.logoImage} />
        </Link>

        <button
          className={styles.mobileToggle}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          type="button"
        >
          <span className={styles.hamburger} />
        </button>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
          </li>
          <li>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className={`btn btn-primary ${styles.navBtn}`}
                onClick={() => setMenuOpen(false)}
              >
                Book a Consultation
              </Link>
            </motion.div>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
