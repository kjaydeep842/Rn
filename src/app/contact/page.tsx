import styles from './contact.module.css';

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <header className={styles.header}>
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with Raj Gupta and the team for expert tax and accounting advice.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.info}>
              <h2>Get In Touch</h2>
              <p className={styles.description}>
                We are conveniently located in Kilburn. Feel free to visit us or call to book an appointment.
              </p>
              
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <span className={styles.icon}>📍</span>
                  <div>
                    <h4>Address</h4>
                    <p>Unit 1/543 Churchill Rd, Kilburn SA 5084</p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <span className={styles.icon}>📞</span>
                  <div>
                    <h4>Phone</h4>
                    <p>(08) 8349 6225</p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <span className={styles.icon}>📱</span>
                  <div>
                    <h4>Mobile</h4>
                    <p>0424 790 994</p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <span className={styles.icon}>✉️</span>
                  <div>
                    <h4>Email</h4>
                    <p>nexustaxationservices@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.formContainer}>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <select id="subject">
                    <option>Individual Tax Return</option>
                    <option>Business BAS/GST</option>
                    <option>Bookkeeping Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={5} placeholder="How can we help you?"></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary w-full">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
