import styles from "./RemodelingProcess.module.css";
import { BadgeCheck, House, Hammer, Ruler } from "lucide-react";

const STEPS = [
  { number: 1, title: "In-home consultation", detail: "Talk through your space, priorities, and goals.", Icon: House },
  { number: 2, title: "Design and planning", detail: "Shape the scope, materials, and project schedule.", Icon: Ruler },
  { number: 3, title: "Skilled construction", detail: "Bring the plan to life with care and craftsmanship.", Icon: Hammer },
  { number: 4, title: "Final walkthrough", detail: "Review the completed work together.", Icon: BadgeCheck },
];

function RemodelingProcess() {
  return (
    <section className={styles.remodelingProcessSection} aria-labelledby="process-heading">
      <div className={styles.sectionHeader}>
        <p className={styles.eyebrow}>A clear process</p>
        <h2 id="process-heading">Our Remodeling Process</h2>
        <p className={styles.subtitle}>From the first conversation to the finishing details, know what comes next.</p>
      </div>

      <ol className={styles.stepsContainer}>
        {STEPS.map((step) => (
          <li key={step.number} className={styles.step}>
            <div className={styles.stepContent}>
              <div className={styles.iconWrapper}>
                <step.Icon className={styles.icon} size={25} strokeWidth={1.7} aria-hidden="true" />
                <span className={styles.stepNumber}>{step.number}</span>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDetail}>{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default RemodelingProcess;
