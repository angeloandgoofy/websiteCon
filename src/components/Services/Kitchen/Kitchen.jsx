 import React, {useState, useRef, useEffect} from 'react';
import styles from './Kitchen.module.css';
import main from '../../../assets/main.webp';

const Kitchen = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );
    if(sectionRef.current){
        observer.observe(sectionRef.current);
    }
    return () => {
        if(sectionRef.current){
            observer.unobserve(sectionRef.current);
        }
    };
    }, []);

    const galleryData = [
    {
        id: 1,
        image: main,
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

    const handleThumbnailClick = (indexed) => {
        setActiveImage(indexed);
    }
    
    const handlePrevClick = () => {
        setActiveImage(activeImage === 0 ? galleryData.length - 1 : activeImage - 1);
    }
    const handleNextClick = () => {
        setActiveImage(activeImage === galleryData.length - 1 ? 0 : activeImage + 1);
    };
    return(
        <section id="service2" ref={sectionRef} className={styles.section}>
            <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Kitchen Renovation</h2>
                    <p className={styles.description}>
                    Elevate your cooking experience with our custom kitchen design and installation services. 
                    From modern layouts to timeless aesthetics, we craft kitchens that combine style, functionality, and innovation—tailored to suit your lifestyle.
                    </p>
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
                            onClick={() => handleThumbnailClick(index)}
                        />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Kitchen;