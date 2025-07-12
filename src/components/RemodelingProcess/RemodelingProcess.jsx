import React from 'react';
import styles from './RemodelingProcess.module.css';
import { NavLink } from "react-router-dom";

function RemodelingProcess() {
    const steps = [
        {
            number: 1,
            title: "Free In-Home Design Consultation",
            icon: "🏠"
        },
        {
            number: 2,
            title: "Custom Design & Planning",
            icon: "📐"
        },
        {
            number: 3,
            title: "Professional Installation",
            icon: "🛠️"
        },
        {
            number: 4,
            title: "Quality Assurance & Support",
            icon: "✓"
        }
    ];

    return (
        <section className={styles.remodelingProcessSection}>
            <div className={styles.sectionHeader}>
                <h2>Our Remodeling Process</h2>
                <p className={styles.subtitle}>
                    A proven approach to bringing your vision to life
                </p>
            </div>

            <div className={styles.stepsContainer}>
                {steps.map((step, index) => (
                    <div 
                        key={step.number} 
                        className={`${styles.step} ${styles.fadeIn}`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        <div className={styles.stepContent}>
                            <div className={styles.iconWrapper}>
                                <span className={styles.icon}>{step.icon}</span>
                                <div className={styles.stepNumber}>
                                    <span>{step.number}</span>
                                </div>
                            </div>
                            
                            <div className={styles.stepInfo}>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                            </div>
                        </div>
                        
                        {index < steps.length - 1 && (
                            <div className={styles.connector}>
                                <div className={styles.line}></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default RemodelingProcess;