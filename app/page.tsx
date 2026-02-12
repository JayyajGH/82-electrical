import styles from './page.module.css';
import Image from "next/image";

export default function Home() {
  return (
      <main className="wrapper">
      <section className="u-margin-bottom--large">
        <h2 className={`${styles.sectionHeading} heading1`}>About us</h2>
        <div className={styles.centeredText}>
          <p className={styles.aboutText}>Offering domestic electrical services for Bristol and surrounding areas. From it's beginnings
  in 2017 we have focused on delivering high quality, long lasting electrical installations both
  on the surface and underneath. Designing, installing and fault finding most aspects of
  electrical systems in the home. Always using products that are well tested to be long lasting
  and efficient.</p>
          <p className={styles.aboutText}>We try to keep things as simple as possible for our clients and always endeavour to be willing
  to help in any way we can. Building systems that are future-proof and are designed around
  our clients' long term needs as well as their short term ones. We take pride in providing safe
  and reliable installations that are well suited for their intended purpose and are always happy
  to help find solutions should any problems arise.</p>
          <p className={styles.aboutText}>Hopefully this gives you some idea of our ethos as a company so please feel free to get in
  touch via our "contact us" section if you have any specific queries and we will be happy to
  answer them if we can.</p>
          <p>Many thanks for stopping by and we look forward to hearing from you soon.</p>
        </div>
      </section>
      <section className="u-margin-bottom--large">
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
            <p>Whether an installation has reached the end of its life of is no longer fit for purpose a full rewire is sometimes necessary and we can help</p>
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
            <p>Faults are a pain, so call us and we can start by giving advice over the phone, but if needed can often be there the same day to find a solution</p>
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
            <p>Superb lighting installations, indoors and out</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
