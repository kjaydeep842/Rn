'use client';

import Hero from '@/components/Hero';
import TrustLogos from '@/components/TrustLogos';
import ServiceCard from '@/components/ServiceCard';
import StatsSection from '@/components/StatsSection';
import FeaturesSection from '@/components/FeaturesSection';
import ReviewsSlider from '@/components/ReviewsSlider';
import ImageSlider from '@/components/ImageSlider';
import MapSection from '@/components/MapSection';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './page.module.css';

export default function Home() {
  const featuredServices = [
    {
      title: "Individual Tax Returns",
      description: "Accurate, compliant returns designed to maximise your refund with minimal hassle.",
      icon: "👤"
    },
    {
      title: "BAS & GST Services",
      description: "Timely and accurate BAS preparation to keep your business ATO-compliant.",
      icon: "📊"
    },
    {
      title: "Bookkeeping",
      description: "Complete bookkeeping services to keep your financial records clean and up to date.",
      icon: "📚"
    }
  ];

  return (
    <>
      <Hero />
      <TrustLogos />
      
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Key Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Comprehensive financial solutions for individuals and businesses.
            </motion.p>
          </div>
          
          <div className={styles.serviceGrid}>
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </motion.div>
            ))}
          </div>
          
          <div className={styles.sectionActions}>
            <Link href="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <ImageSlider />

      <StatsSection />
      
      <FeaturesSection />

      <ReviewsSlider />

      <MapSection />

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2>Ready to get your taxes sorted?</h2>
            <p>Contact Raj Gupta and the team at Nexus Tax & Accounting today for professional advice.</p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn btn-secondary">
                Book an Appointment
              </Link>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=R+%26+N+Nexus+Tax+%26+Accounting+Unit+1%2F543+Churchill+Rd+Kilburn+SA+5084+Australia" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline-white"
                style={{ marginLeft: '1rem' }}
              >
                Get Directions 📍
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
