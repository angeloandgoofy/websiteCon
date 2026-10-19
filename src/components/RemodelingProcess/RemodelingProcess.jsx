import styles from "./RemodelingProcess.module.css";

const STEPS = [
  { number: 1, title: "Free in-home design consultation", icon: "🏠" },
  { number: 2, title: "Custom design and planning", icon: "📐" },
  { number: 3, title: "Professional installation", icon: "🛠️" },
  { number: 4, title: "Quality assurance and support", icon: "✓" },
];

function RemodelingProcess() {
  return (
    <section className={styles.remodelingProcessSection} aria-labelledby="process-heading">
      <div className={styles.sectionHeader}>
        <h2 id="process-heading">Our Remodeling Process</h2>
        <p className={styles.subtitle}>A proven approach to bringing your vision to life</p>
      </div>

      <ol className={styles.stepsContainer}>
        {STEPS.map((step) => (
          <li key={step.number} className={styles.step}>
            <div className={styles.stepContent}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon} aria-hidden="true">
                  {step.icon}
                </span>
                <span className={styles.stepNumber}>{step.number}</span>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default RemodelingProcess;
