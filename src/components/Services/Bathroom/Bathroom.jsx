import React, { useState, useRef, useEffect } from 'react';
import styles from './Bathroom.module.css';
import main2 from '../../../assets/main2.webp';

const Bathroom = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
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

  const features = [
    {
      title: 'Custom Design',
      description: 'Personalized bathroom layouts that match your style and needs'
    },
    {
      title: 'Quality Materials',
      description: 'Premium fixtures, tiles, and materials from trusted brands'
    },
    {
      title: 'Expert Installation',
      description: 'Professional installation by certified craftsmen'
    },
    {
      title: 'Timely Completion',
      description: 'Project completion within agreed timeframes'
    }
  ];

  const galleryData = [
    {
      id: 1,
      image: main2,
      title: "Modern Master Bathroom",
      description: "Luxurious master bathroom featuring marble countertops and dual vanity"
    },
    {
      id: 2,
      image: "/api/placeholder/1200/800",
      title: "Spa-Inspired Design",
      description: "Elegant freestanding tub with custom tile work and ambient lighting"
    },
    {
      id: 3,
      image: "/api/placeholder/1200/800",
      title: "Contemporary Suite",
      description: "Sleek walk-in shower with premium fixtures and glass enclosure"
    },
    {
      id: 4,
      image: "/api/placeholder/1200/800",
      title: "Traditional Elegance",
      description: "Classic bathroom design with modern amenities and custom cabinetry"
    }
  ];

  const [activeImage, setActiveImage] = useState(0);

  const handlePrevClick = () => {
    setActiveImage((prev) => (prev === 0 ? galleryData.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setActiveImage((prev) => (prev === galleryData.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <section id="service1" ref={sectionRef} className={styles.section}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.content}>
            <h2 className={styles.title}>Luxury Bathroom Remodeling</h2>
            <p className={styles.subtitle}>Transform Your Space into a Personal Sanctuary</p>
            
            <div className={styles.description}>
            <p>
                Experience the perfect blend of luxury and functionality with our custom bathroom 
                remodeling services. From elegant master bathrooms to space-efficient powder rooms, 
                we bring your vision to life with exceptional craftsmanship and attention to detail.
            </p>
        </div>
        <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
                <div 
                key={feature.title} 
                className={styles.featureCard}
                style={{ animationDelay: `${index * 0.2}s` }}
                >
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
                </div>
            ))}
        </div>
            
        <div className={styles.gallery}>
            <div className={styles.imageContainer}>
                <img
                src={galleryData[activeImage].image}
                alt={galleryData[activeImage].title}
                className={styles.mainImage}
                />
                <button 
                className={`${styles.navButton} ${styles.prevButton}`}
                onClick={handlePrevClick}
                aria-label="Previous image"
                >
                ‹
                </button>
                <button 
                className={`${styles.navButton} ${styles.nextButton}`}
                onClick={handleNextClick}
                aria-label="Next image"
                >
                ›
                </button>
            </div>
            <div className={styles.thumbnailContainer}>
                {galleryData.map((item, index) => (
                <img
                    key={item.id}
                    src={item.image}
                    alt={item.title}
                    className={`${styles.thumbnail} ${activeImage === index ? styles.activeThumbnail : ''}`}
                />
                ))}
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Bathroom;