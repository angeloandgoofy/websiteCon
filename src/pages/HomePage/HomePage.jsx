import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./HomePage.module.css";
import front1 from "../../assets/main.webp";
import front2 from "../../assets/main2.webp";
import About from "../../components/About/About";
import RemodelProcess from "../../components/RemodelingProcess/RemodelingProcess";
import Seo from "../../components/Seo/Seo";
import { SITE } from "../../constants/site";

const HERO_IMAGES = [
  { src: front1, alt: "Custom deck steps and railing built by Rossi Brothers Contracting" },
  { src: front2, alt: "Outdoor deck and covered patio project by Rossi Brothers Contracting" },
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
      <section id="home" className={styles.homeSection} aria-label="Featured contracting work">
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
            <ChevronLeft size={22} aria-hidden="true" />
          </button>
          <button
            type="button"
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={handleNextImage}
            aria-label="Next image"
          >
            <ChevronRight size={22} aria-hidden="true" />
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
            <p className={styles.eyebrow}><span /> ROSSI BROTHERS CONTRACTING</p>
            <h1>Home remodeling.<br />Built to last.</h1>
            <p className={styles.subheading}>
              Home remodeling and general contracting across {SITE.areaText}.
            </p>
            <div className={styles.heroActions}>
              <NavLink to="/contact" className={styles.primaryButton}>
                Plan your project <ArrowRight size={17} aria-hidden="true" />
              </NavLink>
              <NavLink to="/services" className={styles.secondaryButton}>Explore our services</NavLink>
            </div>
          </div>

          <div className={styles.projectNote}>
            <span className={styles.projectNoteIcon}><Check size={16} aria-hidden="true" /></span>
            <span>Residential renovations &amp; contracting</span>
          </div>
        </div>

        <div className={styles.serviceRibbon} aria-label="Our services">
          <span>Home remodeling</span><i aria-hidden="true" />
          <span>General contracting</span><i aria-hidden="true" />
          <span>Serving {SITE.areaText}</span>
        </div>
        <RemodelProcess />
        <About />
      </section>
    </>
  );
}

export default HomePage;
