import styles from './SiteFooter.module.css';
import SocialIcon from './SocialIcon';

const CONTACT_DETAILS = [
  { label: 'andrew@82electrical.co.uk', href: 'mailto:andrew@82electrical.co.uk' },
  { label: '07813 408135', href: 'tel:+447813408135', aria: 'Phone us on 0 7 8 1 3. 4 0 8. 1 3 5' },
  { label: 'Ambleside Avenue, Bristol BS10', href: 'https://goo.gl/maps/w1DEYMjpH37A4bV96', external: true },
];

const SOCIAL_LINKS = [
  { platform: 'facebook', path: 'https://www.facebook.com/ElectricianforBristol' },
  { platform: 'google', path: 'https://g.co/kgs/8yUWFXC' },
  { platform: 'instagram', path: 'https://instagram.com/ElectricianforBristol' },
];

export default function SiteFooter() {
  return (
    <footer className={styles.footerContainer} id="contact">
      <div className={`${styles.footerContent} wrapper`}>
        
        {/* Contact Information */}
        <div className={`${styles.contactSection} uMarginBottomMedium`}>
          <h2 className={`${styles.heading} heading2`}>Contact Us</h2>
          <address>
            <ul className="listReset">
              {CONTACT_DETAILS.map((item) => (
                <li key={item.label} className="uMarginBottomSmall">
                  <a 
                    className={styles.contactLink} 
                    href={item.href}
                    aria-label={item.aria}
                    {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </address>
        </div>

        {/* Social Media Links */}
        <div className={`${styles.socialSection} uMarginBottomMedium`}>
          <h2 className={`${styles.heading} heading2`}>Social</h2>
          <address>
            <ul className={styles.socialList}>
              {SOCIAL_LINKS.map((social) => (
                <li key={social.platform}>
                  <SocialIcon platform={social.platform} path={social.path} />
                </li>
              ))}
            </ul>
          </address>
        </div>
        
      </div>
    </footer>
  );
}
