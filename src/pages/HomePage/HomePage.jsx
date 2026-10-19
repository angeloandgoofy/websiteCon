import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./HomePage.module.css";
import front1 from "../../assets/main.webp";
import front2 from "../../assets/main2.webp";
import About from "../../components/About/About";
import RemodelProcess from "../../components/RemodelingProcess/RemodelingProcess";
import Seo from "../../components/Seo/Seo";
import { SITE } from "../../constants/site";

const HERO_IMAGES = [
  { src: front1, alt: "Finished kitchen remodeling by Rossi Brothers Contracting" },
  { src: front2, alt: "Bathroom renovation completed by Rossi Brothers Contracting" },
];

function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToImage = useCallback((index) => {
    setIsTransitioning(true);
    setCurrentImage(index);
    window.setTimeout(() => setIsTransitioning(false), 500);
  }, []);

  const handleNextImage = useCallback(() => {
    goToImage((currentImage + 1) % HERO_IMAGES.length);
  }, [currentImage, goToImage]);

  const handlePrevImage = useCallback(() => {
    goToImage((currentImage - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  }, [currentImage, goToImage]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
      setIsTransitioning(true);
      window.setTimeout(() => setIsTransitioning(false), 500);
    }, 10000);

    return () => window.clearInterval(interval);
  }, []);

  const active = HERO_IMAGES[currentImage];

  return (
    <>
      <Seo
        title={SITE.defaultTitle}
        description={SITE.defaultDescription}
        path="/"
      />
      <section id="home" className={styles.homeSection} aria-label="Featured remodeling work">
        <div className={styles.imageContainer}>
          <img
            src={active.src}
            className={`${styles.home} ${isTransitioning ? styles.transitioning : ""}`}
            alt={active.alt}
            fetchPriority="high"
          />
          <div className={styles.overlay} />

          <button
            type="button"
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={handlePrevImage}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={handleNextImage}
            aria-label="Next image"
          >
            ›
          </button>

          <div className={styles.indicators} role="tablist" aria-label="Hero images">
            {HERO_IMAGES.map((image, index) => (
              <button
                key={image.alt}
                type="button"
                className={`${styles.indicator} ${currentImage === index ? styles.activeIndicator : ""}`}
                onClick={() => goToImage(index)}
                aria-label={`Show ${image.alt}`}
                aria-selected={currentImage === index}
              />
            ))}
          </div>

          <div className={styles.content}>
            <h1>Home Remodeling &amp; General Contracting</h1>
            <p className={styles.subheading}>
              Kitchen, bathroom, and whole-home renovations across {SITE.areaText}.
            </p>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>Schedule your free consultation</p>
          <NavLink to="/contact" className={styles.ctaButton}>
            Contact Us
          </NavLink>
        </div>
        <RemodelProcess />
        <About />
      </section>
    </>
  );
}

export default HomePage;
