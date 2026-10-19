import { useEffect, useState } from "react";
import styles from "./About.module.css";
import { SITE } from "../../constants/site";
import { useInView } from "../../hooks/useInView";
import aboutImage from "../../assets/main2.webp";

function AboutUs() {
  const { ref, isInView } = useInView(0.3);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    years: 0,
    clients: 0,
  });

  useEffect(() => {
    if (!isInView) return undefined;

    const animateValue = (end, key, duration) => {
      const steps = 60;
      const stepValue = end / steps;
      let current = 0;
      let step = 0;

      const timer = window.setInterval(() => {
        step += 1;
        current += stepValue;
        if (step >= steps) {
          current = end;
          window.clearInterval(timer);
        }
        setAnimatedNumbers((prev) => ({
          ...prev,
          [key]: Math.round(current),
        }));
      }, duration / steps);

      return () => window.clearInterval(timer);
    };

    const clearYears = animateValue(12, "years", 1500);
    const clearClients = animateValue(300, "clients", 2000);
    return () => {
      clearYears();
      clearClients();
    };
  }, [isInView]);

  return (
    <section id="about-us" className={styles.aboutUsSection} ref={ref}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>About Us</h2>
          <p className={styles.subtitle}>Over 12 years of excellence in home remodeling</p>
          <p className={styles.description}>
            At <strong>{SITE.name}</strong>, we
            transform houses into homes you actually want to live in. From
            kitchens and bathrooms to full-home renovations across {SITE.areaText},
            our designers and craftsmen keep the process clear, on schedule, and
            built to last.
          </p>
          <div className={styles.statistics}>
            <div className={styles.stat}>
              <p className={styles.statNumber}>{animatedNumbers.years}+</p>
              <p className={styles.statText}>Years of experience</p>
            </div>
            <div className={styles.stat}>
              <p className={styles.statNumber}>{animatedNumbers.clients}+</p>
              <p className={styles.statText}>Happy clients</p>
            </div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src={aboutImage}
            alt={`${SITE.name} remodeling craftsmanship`}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
