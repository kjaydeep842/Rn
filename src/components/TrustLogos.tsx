import styles from './TrustLogos.module.css';

const TrustLogos = () => {
  return (
    <section className={styles.trustLogos}>
      <div className={`container ${styles.container}`}>
        <p className={styles.label}>Proudly Associated With</p>
        <div className={styles.logoGrid}>
          <div className={styles.logoItem}>
            <div className={styles.iconPlaceholder}>IPA</div>
            <span>Institute of Public Accountants</span>
          </div>
          <div className={styles.logoItem}>
            <div className={styles.iconPlaceholder}>TAX</div>
            <span>Registered Tax Agent</span>
          </div>
          <div className={styles.logoItem}>
            <div className={styles.iconPlaceholder}>XERO</div>
            <span>Xero Certified Advisor</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;
