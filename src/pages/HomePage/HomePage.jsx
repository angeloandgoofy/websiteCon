import React, { useState, useEffect } from 'react';
import styles from './HomePage.module.css';
import front1 from '../../assets/main.webp';
import front2 from '../../assets/main2.webp';
import front3 from '../../assets/main3.webp';
import About from "../../components/About/About";
import RemodelProcess from '../../components/RemodelingProcess/RemodelingProcess';
import { NavLink } from "react-router-dom";

function HomePage() {
    const images = [front1, front2, front3];
    const [currentImage, setCurrentImage] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextImage();
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const handleNextImage = () => {
        setIsTransitioning(true);
        setCurrentImage((prev) => (prev + 1) % images.length);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const handlePrevImage = () => {
        setIsTransitioning(true);
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    return (
        <section id="home" className={styles.homeSection}>
            <div className={styles.imageContainer}>
                <img
                    src={images[currentImage]}
                    className={`${styles.home} ${isTransitioning ? styles.transitioning : ''}`}
                    alt='Rossi Construction'
                />
            <div className={styles.overlay} />
                
                <button 
                    className={`${styles.navButton} ${styles.prevButton}`}
                    onClick={handlePrevImage}
                    aria-label="Previous image"
                >
                    ‹
                </button>
                <button 
                    className={`${styles.navButton} ${styles.nextButton}`}
                    onClick={handleNextImage}
                    aria-label="Next image"
                >
                    ›
                </button>

                <div className={styles.indicators}>
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.indicator} ${currentImage === index ? styles.activeIndicator : ''}`}
                            onClick={() => {
                                setIsTransitioning(true);
                                setCurrentImage(index);
                                setTimeout(() => setIsTransitioning(false), 500);
                            }}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>

                <div className={styles.content}>
                    <h1>Effortlessly Beautiful Home Remodeling</h1>
                </div>
            </div>

            <div className={styles.ctaSection}>
                <p className={styles.ctaText}>Schedule Your Free Consultation</p>
                <NavLink
                    to="contact"
                    className={styles.ctaButton}
                  >
                    Contact Us
                  </NavLink>
                
            </div>
            <RemodelProcess/>
            <About/>
        </section>
    );
}

export default HomePage;