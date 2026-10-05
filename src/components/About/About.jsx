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
            <h1 style={{ fontSize: '2rem', color: 'white'}}>ROSSI BROTHERS CONTRACTING</h1>
              Over 12 Years of Excellence in Home Remodeling
          </p>
          <p className={styles.description}>
            
            Rossi Brothers Contracting is a trusted, family-owned general contracting and home remodeling company serving homeowners throughout Maine, New Hampshire, Massachusetts, and New York. Operated by three brothers, we bring more than 12 years of hands-on remodeling experience to every project.
            We specialize in kitchen remodeling, bathroom renovations, whole-home remodeling, flooring, interior and exterior painting, electrical, plumbing, HVAC, and complete home improvement projects.
            Our commitment is simple: quality workmanship, honest communication, dependable service, and attention to detail. Whether you are planning a kitchen renovation, bathroom remodel, home renovation, or complete property improvement, our experienced team works closely with you from start to finish to deliver professional craftsmanship and reliable results.
            At Rossi Brothers Contracting, we believe every successful remodeling project begins with trust. We take pride in treating every home with care, providing dependable service, and helping homeowners turn their ideas into beautiful, functional spaces.
            Rossi Brothers Contracting — trusted craftsmanship, reliable service, and quality home remodeling.
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
