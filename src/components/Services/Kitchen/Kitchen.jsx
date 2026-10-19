import styles from "./Kitchen.module.css";
import main from "../../../assets/main.webp";
import { useInView } from "../../../hooks/useInView";

function Kitchen() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section id="service2" ref={ref} className={styles.section}>
      <div className={`${styles.container} ${isInView ? styles.visible : ""}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Kitchen Renovation</h2>
          <p className={styles.description}>
            Custom kitchen design and installation that balances style, storage, and everyday cooking.
          </p>
        </div>
        <div className={styles.gallery}>
          <div className={styles.imageContainer}>
            <img
              src={main}
              alt="Modern kitchen remodel with custom cabinetry"
              className={styles.mainImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Kitchen;
