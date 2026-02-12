import styles from './SiteHeader.module.css';
import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="mb-6" id="header">
      {/* Skip Link for Accessibility */}
      <a href="#main" className={`uHiddenVisually ${styles.skipLink}`}>
        Skip to main content
      </a>

      {/* Logo Section */}
      <div className={styles.headerWrapper}>
        <div className={styles.navContainer}>
          <Link href="/" title="82Electrical" className={styles.logoLink}>
            <span 
              className={`${styles.logoImage} uPaddingSmall`} 
              aria-label="82Electrical"
            ></span>
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className={styles.siteNav}>
        <ul className={styles.menuList}>
          <li>
            <Link className={`${styles.navLink} bodyBoldLight`} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={`${styles.navLink} bodyBoldLight`} href="/projects">
              Previous work
            </Link>
          </li>
          <li>
            <Link className={`${styles.navLink} bodyBoldLight`} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Background */}
      <div className={styles.hero} />
    </header>
  );
}
