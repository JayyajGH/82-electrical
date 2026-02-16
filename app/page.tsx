import styles from './page.module.css';
import Image from "next/image";

export default function Home() {
  return (
      <main className="wrapper">
      <section className="mb-12">
        <h2 className={`${styles.sectionHeading} heading1`}>About us</h2>
        <div className={styles.centeredText}>
          <p className={styles.aboutText}>Offering domestic electrical services for Bristol and surrounding areas. Since our beginnings in 2017, we have focused on delivering high-quality, long-lasting electrical installations—both on the surface and underneath. We design, install, and fault-find most aspects of electrical systems in the home, always using products that are rigorously tested for efficiency and durability.</p>
          <p className={styles.aboutText}>We aim to keep things as simple as possible for our clients and always endeavour to be helpful in any way we can. By building systems that are future-proof, we design around your long-term needs as well as your short-term ones. We take great pride in providing safe, reliable installations that are perfectly suited for their purpose, and we are always happy to find solutions should any problems arise.</p>
          <p className={styles.aboutText}>Please feel free to get in touch via our "Contact Us" section with any specific queries, and we will be happy to answer them for you.</p>
        </div>
      </section>
      <section className="mb-12">
        <h2 className={`${styles.sectionHeading} heading1`}>What we do</h2>
        <ul className={styles.serviceList}>
          <li className={styles.serviceItem}>
            <Image
              src="/images/bulb.svg"
              alt=""
              className={styles.itemIcon}
              width={200}
              height={200}
            />
            <h2 className={`${styles.iconHeading} heading3`}>Rewires</h2>
            <p>Whether your current installation has reached the end of its life or is simply no longer fit for purpose, a full rewire is often the safest path forward and our team is here to help.</p>
          </li>
          <li className={styles.serviceItem}>
            <Image
              src="/images/bulb.svg"
              alt=""
              className={styles.itemIcon}
              width={200}
              height={200}
            />
            <h2 className={`${styles.iconHeading} heading3`}>Fault finding</h2>
            <p>Electrical faults are a major pain, so call us for immediate advice over the phone; if the issue persists, we can usually be there the same day to find a safe, permanent solution.</p>
          </li>
          <li className={styles.serviceItem}>
            <Image
              src="/images/bulb.svg"
              alt=""
              className={styles.itemIcon}
              width={200}
              height={200}
            />
            <h2 className={`${styles.iconHeading} heading3`}>Lighting</h2>
            <p>Whether you’re looking to brighten up a dark kitchen or transform your garden with outdoor LEDs, our superb installations ensure your space is perfectly lit and energy efficient.</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
