"use client";

import styles from './SiteHeader.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="mb-6" id="header">
      <a href="#main" className={`uHiddenVisually ${styles.skipLink}`}>
        Skip to main content
      </a>

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

      <nav className={styles.siteNav}>
        <ul className={styles.menuList}>
          <li>
            <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''} bodyBoldLight`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className={`${styles.navLink} ${pathname === '/projects' ? styles.active : ''} bodyBoldLight`}>
              Previous work
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`${styles.navLink} ${pathname === '/contact' ? styles.active : ''} bodyBoldLight`}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.hero} />
    </header>
  );
}
