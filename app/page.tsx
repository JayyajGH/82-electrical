import styles from './page.module.css';
import Image from "next/image";

const CONTENT = {
  about: [
    "Offering domestic electrical services for Bristol and surrounding areas. Since our beginnings in 2017, we have focused on delivering high-quality, long-lasting electrical installations—both on the surface and underneath. We design, install, and fault-find most aspects of electrical systems in the home, always using products that are rigorously tested for efficiency and durability.",
    "We aim to keep things as simple as possible for our clients and always endeavour to be helpful in any way we can. By building systems that are future-proof, we design around your long-term needs as well as your short-term ones. We take great pride in providing safe, reliable installations that are perfectly suited for their purpose, and we are always happy to find solutions should any problems arise.",
    "Please feel free to get in touch via our 'Contact Us' section with any specific queries, and we will be happy to answer them for you.",
  ],
  services: [
    {
      title: "Rewires",
      icon: "/images/bulb.svg",
      text: "Whether your current installation has reached the end of its life or is simply no longer fit for purpose, a full rewire is often the safest path forward and our team is here to help.",
    },
    {
      title: "Fault finding",
      icon: "/images/bulb.svg",
      text: "Electrical faults are a major pain, so call us for immediate advice over the phone; if the issue persists, we can usually be there the same day to find a safe, permanent solution.",
    },
    {
      title: "Lighting",
      icon: "/images/bulb.svg",
      text: "Whether you’re looking to brighten up a dark kitchen or transform your garden with outdoor LEDs, our superb installations ensure your space is perfectly lit and energy efficient.",
    },
  ],
};

export default function Home() {
  return (
    <main className="wrapper">
      {/* About Section */}
      <section className="mb-12">
        <h2 className={`${styles.sectionHeading} heading1`}>About us</h2>
        <div className={styles.centeredText}>
          {CONTENT.about.map((paragraph, index) => (
            <p key={index} className={styles.aboutText}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-12">
        <h2 className={`${styles.sectionHeading} heading1`}>What we do</h2>
        <ul className={styles.serviceList}>
          {CONTENT.services.map((service, index) => (
            <li key={index} className={styles.serviceItem}>
              <Image
                src={service.icon}
                alt=""
                className={styles.itemIcon}
                width={200}
                height={200}
              />
              <h2 className={`${styles.iconHeading} heading3`}>{service.title}</h2>
              <p className={styles.iconText}>{service.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
