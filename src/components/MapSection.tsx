'use client';

import { motion } from 'framer-motion';
import styles from './MapSection.module.css';

const MapSection = () => {
  const address = "Unit 1/543 Churchill Rd, Kilburn SA 5084, Australia";
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(address)}`;
  
  // Note: Using a standard search URL embed if no API key is provided
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <section className={styles.mapSection}>
      <div className="container">
        <div className={styles.header}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Visit Our Office
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            R & N Nexus Tax & Accounting <br />
            {address}
          </motion.p>
        </div>
        
        <motion.div 
          className={styles.mapContainer}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            title="Google Maps Location"
            width="100%"
            height="450"
            style={{ border: 0 }}
            src={embedUrl}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
