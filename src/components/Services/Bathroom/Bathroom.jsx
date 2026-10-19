import styles from "./Bathroom.module.css";
import main2 from "../../../assets/main2.webp";
import { useInView } from "../../../hooks/useInView";

const features = [
  {
    title: "Custom design",
    description: "Bathroom layouts that match how you actually use the space.",
  },
  {
    title: "Quality materials",
    description: "Fixtures, tile, and finishes from trusted suppliers.",
  },
  {
    title: "Expert installation",
    description: "Installation by experienced craftsmen.",
  },
  {
    title: "Timely completion",
    description: "Work scheduled and finished within the agreed window.",
  },
];

function Bathroom() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section id="service1" ref={ref} className={styles.section}>
      <div className={`${styles.container} ${isInView ? styles.visible : ""}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Luxury Bathroom Remodeling</h2>
          <p className={styles.subtitle}>Turn the room into a calmer, more useful space.</p>
          <div className={styles.description}>
            <p>
              Custom bathroom remodeling for master baths and powder rooms, with
              careful finishes and practical layouts.
            </p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((feature) => (
              <div key={feature.title} className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
          <div className={styles.gallery}>
            <div className={styles.imageContainer}>
              <img
                src={main2}
                alt="Modern master bathroom remodel"
                className={styles.mainImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bathroom;
