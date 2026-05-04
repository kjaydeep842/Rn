'use client';

import { motion } from 'framer-motion';
import styles from './FeaturesSection.module.css';

const features = [
  {
    title: "Expert Knowledge",
    description: "Years of experience in Australian tax law and accounting standards.",
    icon: "🎓"
  },
  {
    title: "Personalized Approach",
    description: "Every client is unique. We tailor our services to your specific financial needs.",
    icon: "🤝"
  },
  {
    title: "Fast Turnaround",
    description: "We value your time. Expect prompt responses and efficient processing.",
    icon: "⚡"
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees. Professional services at competitive, upfront rates.",
    icon: "💰"
  }
];

const FeaturesSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose R&N Nexus?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Delivering excellence in taxation and business advisory with a focus on your success.
          </motion.p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className={styles.icon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
