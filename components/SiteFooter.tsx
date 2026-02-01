import styles from './SiteFooter.module.css';

export default function SiteFooter() {
  return (
    <footer className={styles.footerContainer} id="contact">
      <div className={`${styles.footerContent} wrapper`}>
        
        {/* Contact Information */}
        <div className={`${styles.contactSection} uMarginBottomMedium`}>
          <h2 className={`${styles.heading} heading2`}>Contact Us</h2>
          <address>
            <ul className="listReset">
              <li className="uMarginBottomSmall">
                <a className={styles.contactLink} href="mailto:andrew@82electrical.co.uk">
                  andrew@82electrical.co.uk
                </a>
              </li>
              <li className="uMarginBottomSmall">
                <a 
                  className={styles.contactLink} 
                  href="tel:+447813408135" 
                  aria-label="Phone us on 0 7 8 1 3. 4 0 8. 1 3 5"
                >
                  07813 408135
                </a>
              </li>
              <li className="uMarginBottomSmall">
                <a 
                  className={styles.contactLink} 
                  href="https://goo.gl/maps/w1DEYMjpH37A4bV96" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Ambleside Avenue, Bristol BS10
                </a>
              </li>
            </ul>
          </address>
        </div>

        {/* Social Media Links */}
        <div className={`${styles.socialSection} uMarginBottomMedium`}>
          <h2 className={`${styles.heading} heading2`}>Social</h2>
          <address>
            <ul className={styles.socialList}>
              <li>
                <a 
                  href="https://www.facebook.com/ElectricianforBristol" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${styles.socialIcon} ${styles.facebook}`} 
                  title="82Electrical on Facebook"
                  aria-label="Facebook"
                />
              </li>
              <li>
                <a 
                  href="https://g.co/kgs/8yUWFXC" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${styles.socialIcon} ${styles.google}`} 
                  title="82Electrical on Google"
                  aria-label="Google"
                />
              </li>
              <li>
                <a 
                  href="https://instagram.com/ElectricianforBristol" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${styles.socialIcon} ${styles.instagram}`} 
                  title="82Electrical on Instagram"
                  aria-label="Instagram"
                />
              </li>
            </ul>
          </address>
        </div>
        
      </div>
    </footer>
  );
}
