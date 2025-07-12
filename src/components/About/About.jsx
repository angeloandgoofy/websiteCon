import React, { useEffect, useState, useRef } from 'react';
import styles from './About.module.css';

function AboutUs () {
  
  const [animatedNumbers, setAnimatedNumbers] = useState({
    years: 0,
    clients: 0,
  });
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const animateValue = (start, end, key, duration) => {
        const steps = 60;
        const stepValue = (end - start) / steps;
        let current = start;
        
        const timer = setInterval(() => {
          current += stepValue;
          if (current >= end) {
            current = end;
            clearInterval(timer);
          }
          setAnimatedNumbers(prev => ({
            ...prev,
            [key]: Math.round(current),
          }));
        }, duration / steps);
      };

      animateValue(0, 12, 'years', 1500);
      animateValue(0, 300, 'clients', 2000);
    }
  }, [isInView]); 

  return (
    <section id="about-us" className={styles.aboutUsSection} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>About Us</h2>
          <p className={styles.subtitle}>
            Over 12 Years of Excellence in Home Remodeling
          </p>
          <p className={styles.description}>
            At <strong>ROSSI CONSTRUCTION</strong>, we bring over 12 years of expertise to transform your house into the home of your dreams. From kitchens and bathrooms to full-home renovations, our passionate team of skilled designers and craftsmen work closely with you to deliver a seamless and stress-free remodeling experience.
          </p>
          <div className={styles.statistics}>
            <div className={styles.stat}>
              <h3 className={styles.statNumber}>{animatedNumbers.years}+</h3>
              <p className={styles.statText}>Years of Experience</p>
            </div>
            <div className={styles.stat}>
              <h3 className={styles.statNumber}>{animatedNumbers.clients}+</h3>
              <p className={styles.statText}>Happy Clients</p>
            </div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src="/images/remodeling_team.jpg"
            alt="Our Remodeling Team"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
