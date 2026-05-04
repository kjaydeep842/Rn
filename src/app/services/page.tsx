import ServiceCard from '@/components/ServiceCard';
import styles from './services.module.css';

export default function ServicesPage() {
  const allServices = [
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
    },
    {
      title: "Tax Planning & Advice",
      description: "Strategic advice to reduce tax liabilities and improve long-term outcomes.",
      icon: "💡"
    },
    {
      title: "Small Business Accounting",
      description: "End-to-end accounting support including reporting, cash flow & compliance.",
      icon: "🏢"
    },
    {
      title: "Xero Setup & Training",
      description: "Seamless Xero accounting software setup with training to help you manage finances efficiently.",
      icon: "☁️"
    },
    {
      title: "Payroll Services",
      description: "Accurate payroll management including superannuation, leave entitlements, and compliance.",
      icon: "👥"
    },
    {
      title: "Business Registration",
      description: "Guidance and support for registering your business, ABN, GST, and company setup.",
      icon: "📝"
    }
  ];

  return (
    <div className={styles.servicesPage}>
      <header className={styles.header}>
        <div className="container">
          <h1>Our Professional Services</h1>
          <p>We provide a wide range of accounting and taxation solutions tailored to your needs.</p>
        </div>
      </header>
      
      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {allServices.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className={styles.cta}>
        <div className="container">
          <h2>Need a custom solution?</h2>
          <p>Get in touch with us to discuss how we can help your specific situation.</p>
          <a href="/contact" className="btn btn-primary">Contact Us Today</a>
        </div>
      </section>
    </div>
  );
}
