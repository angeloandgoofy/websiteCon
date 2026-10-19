import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import styles from "./ContactSection.module.css";
import Seo from "../Seo/Seo";
import { SITE } from "../../constants/site";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_CONFIGURED = Boolean(
  EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY
);

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
  message: "",
  honeypot: "",
};

function ContactSection() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = "Name is required";
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      nextErrors.phone = "Phone is required";
    } else if (!/^\+?\d{10,15}$/.test(formData.phone.replace(/\D/g, ""))) {
      nextErrors.phone = "Please enter a valid phone number (10-15 digits)";
    }
    if (formData.zipcode && !/^\d{5}(-\d{4})?$/.test(formData.zipcode)) {
      nextErrors.zipcode = "Please enter a valid US ZIP code";
    }
    if (formData.honeypot) nextErrors.honeypot = "Spam detected";

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      document.getElementById(Object.keys(nextErrors)[0])?.focus();
      return;
    }

    if (!EMAILJS_CONFIGURED) {
      setErrors({
        form: "The contact form is not connected for this deployment. Please try again later.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zipcode: formData.zipcode,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      setFormData(INITIAL_FORM);
      formRef.current?.focus();
    } catch (error) {
      console.error("EmailJS error:", error);
      setErrors({ form: "We couldn't send your message. Please try again shortly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <Seo
        title={`Contact | ${SITE.name}`}
        description={`Contact ${SITE.name} about home remodeling or general contracting across ${SITE.areaText}. Call ${SITE.phoneDisplay} or send a project inquiry online.`}
        path="/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: `Contact ${SITE.name}`,
          url: `${SITE.url}/contact`,
        }}
      />
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <h1>Contact</h1>
          <h2>What to expect during your in-home consultation</h2>
          <p>
            Reach {SITE.name} for remodeling across {SITE.areaText}. At your
            consultation we will cover:
          </p>
          <ul>
            <li>Your remodeling goals</li>
            <li>Design options for kitchens, bathrooms, or full-home renovations</li>
            <li>Timeline and cost estimates</li>
          </ul>
          <p>
            Ready to start? <Link to="/services">Explore our services</Link> or call{" "}
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>.
          </p>
        </div>

        {isSubmitted ? (
          <div className={styles.successMessage} role="status">
            <h2>Thank you</h2>
            <p>Your message has been sent. We will follow up about your project soon.</p>
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className={styles.submitButton}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={styles.form}
            ref={formRef}
            tabIndex={-1}
            noValidate
          >
            {errors.form ? (
              <span className={styles.errorMessage} role="alert">
                {errors.form}
              </span>
            ) : null}

            {[
              ["name", "Name", "text", true],
              ["email", "Email", "email", true],
              ["phone", "Phone", "tel", true],
              ["address", "Home address", "text", false],
            ].map(([id, label, type, required]) => (
              <div className={styles.formGroup} key={id}>
                <label htmlFor={id}>
                  {label}
                  {required ? <span aria-hidden="true"> *</span> : null}
                </label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  value={formData[id]}
                  onChange={handleChange}
                  className={errors[id] ? styles.inputError : ""}
                  required={required}
                  aria-invalid={Boolean(errors[id])}
                />
                {errors[id] ? (
                  <span className={styles.errorMessage} role="alert">
                    {errors[id]}
                  </span>
                ) : null}
              </div>
            ))}

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="city">City</label>
                <input id="city" name="city" value={formData.city} onChange={handleChange} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="state">State</label>
                <input id="state" name="state" value={formData.state} onChange={handleChange} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="zipcode">Zip code</label>
                <input
                  id="zipcode"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleChange}
                  className={errors.zipcode ? styles.inputError : ""}
                  aria-invalid={Boolean(errors.zipcode)}
                />
                {errors.zipcode ? (
                  <span className={styles.errorMessage} role="alert">
                    {errors.zipcode}
                  </span>
                ) : null}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
              />
            </div>

            <div className={styles.honeypot}>
              <label htmlFor="honeypot">Leave this field empty</label>
              <input
                id="honeypot"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default ContactSection;
