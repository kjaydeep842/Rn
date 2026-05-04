'use client';

import { motion, Variants } from 'framer-motion';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <motion.div 
      className={styles.card}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className={styles.iconContainer}>
        {icon || '💼'}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.cardGlow}></div>
    </motion.div>
  );
};

export default ServiceCard;
