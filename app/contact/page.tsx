import styles from './page.module.css';

export default function Contact() {
  return (
    <div className="wrapper">
      <div className={styles.contactContainer}>
        <h2 className="heading1">Contact Us</h2>

        {/* Email Link */}
        <div className={styles.contactItem}>
          <a 
            className={`${styles.contactLink} ${styles.emailLink}`} 
            href="mailto:andrew@82electrical.co.uk"
          >
            andrew@82electrical.co.uk
          </a>
        </div>

        {/* Phone Link */}
        <div className={styles.contactItem}>
          <a 
            className={`${styles.contactLink} ${styles.phoneLink}`} 
            href="tel:+447813408135"
          >
            07813 408135
          </a>
        </div>

        {/* Address Link */}
        <div className={styles.contactItem}>
          <a 
            className={`${styles.contactLink} ${styles.addressLink}`} 
            href="https://goo.gl/maps/w1DEYMjpH37A4bV96" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Ambleside Avenue, Bristol BS10
          </a>
        </div>
        
        {/* Coverage Map */}
        <iframe 
          className={styles.coverageMap} 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d318417.5185058974!2d-2.783116!3d51.428097!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd3c8324a225142f6!2s82%20electrical!5e0!3m2!1sen!2suk!4v1664028702117!5m2!1sen!2suk"
          style={{ border: 0 }} 
          allowFullScreen={true}
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Coverage Area Map"
        ></iframe>
      </div>
    </div>
  );
}