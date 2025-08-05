import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import styles from "./ContactSection.module.css";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    message: "",
    honeypot: "", // Added for spam protection
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\+?\d{10,15}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid phone number (10-15 digits)";
    }

    if (formData.zipcode && !/^\d{5}(-\d{4})?$/.test(formData.zipcode)) {
      newErrors.zipcode = "Please enter a valid US ZIP code (e.g., 12345 or 12345-6789)";
    }

    if (formData.honeypot) {
      newErrors.honeypot = "Spam detected";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zipcode: formData.zipcode,
          message: formData.message,
        };

        const response = await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        );

        if (response.status === 200) {
          setIsSubmitted(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            zipcode: "",
            message: "",
            honeypot: "",
          });
          formRef.current.focus(); 
        }
      } catch (error) {
        console.error("EmailJS error:", error);
        setErrors({ form: "Failed to send message. Please try again later." });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
      const firstErrorField = Object.keys(newErrors)[0];
      document.getElementById(firstErrorField)?.focus();
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <Helmet>
        <title>Contact A.R CONSTRUCTION in Bayside, Long Island, Bronx, Manhattan, Boston</title>
        <meta
          name="description"
          content="Contact ROSSI CONSTRUCTION for expert home remodeling services in Bayside, Long Island, Bronx, Manhattan, and Boston. Call (646) 753-3206 or fill out our form for a free consultation."
        />
        <meta
          name="keywords"
          content="contact home remodeling, Bayside remodeling, Long Island remodeling, Bronx remodeling, Manhattan remodeling, Boston remodeling, ROSSI CONSTRUCTION"
        />
        <link rel="canonical" href="https://www.rossiconstruction.com/contact" />
        <meta
          property="og:title"
          content="Contact ROSSI CONSTRUCTION for Home Remodeling"
        />
        <meta
          property="og:description"
          content="Get in touch with ROSSI CONSTRUCTION for kitchen, bathroom, and home renovations in Bayside, Long Island, Bronx, Manhattan, and Boston."
        />
        <meta
          property="og:image"
          content="https://www.rossiconstruction.com/images/contact-page.jpg"
        />
        <meta property="og:url" content="https://www.rossiconstruction.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact ROSSI CONSTRUCTION",
            "description": "Contact form for ROSSI CONSTRUCTION, offering home remodeling services in Bayside, Long Island, Bronx, Manhattan, and Boston.",
            "url": "https://www.rossiconstruction.com/contact"
          }
        `}</script>
      </Helmet>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <h2>Contact</h2>
          <h3>What to Expect During Your In-Home Consultation</h3>
          <p>
            Contact us for expert home remodeling in Bayside, Long Island, Bronx,
            Manhattan, and Boston. We've completed many remodeling projects, so
            we've got it down to a science. Here's what we'll discuss at your
            consultation:
          </p>
          <ul>
            <li>Your remodeling goals</li>
            <li>Design options for kitchens, bathrooms, or full-home renovations</li>
            <li>Timeline and cost estimates</li>
          </ul>
          <p>
            Ready to start? <Link to="/services">Explore our services</Link> or call us at{" "}
            <a href="tel:+16467533206" aria-label="Call ROSSI CONSTRUCTION at (646) 753-3206">
              (646) 753-3206
            </a>.
          </p>
        </div>

        {isSubmitted ? (
          <div className={styles.successMessage} role="alert">
            <h3>Thank You!</h3>
            <p>
              Your message has been sent successfully. We'll get back to you soon
              to discuss your remodeling project.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className={styles.submitButton}
              aria-label="Return to contact form"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={styles.form}
            ref={formRef}
            aria-live="polite"
            tabIndex={-1}
          >
            {errors.form && (
              <span className={styles.errorMessage} role="alert">
                {errors.form}
              </span>
            )}
            <div className={styles.formGroup}>
              <label htmlFor="name">Name <span aria-hidden="true">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? styles.inputError : ""}
                aria-required="true"
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && (
                <span className={styles.errorMessage} role="alert">
                  {errors.name}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? styles.inputError : ""}
                aria-required="true"
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <span className={styles.errorMessage} role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone <span aria-hidden="true">*</span></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? styles.inputError : ""}
                aria-required="true"
                aria-invalid={errors.phone ? "true" : "false"}
              />
              {errors.phone && (
                <span className={styles.errorMessage} role="alert">
                  {errors.phone}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="address">Home Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="zipcode">Zip Code</label>
                <input
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleChange}
                  className={errors.zipcode ? styles.inputError : ""}
                  aria-invalid={errors.zipcode ? "true" : "false"}
                />
                {errors.zipcode && (
                  <span className={styles.errorMessage} role="alert">
                    {errors.zipcode}
                  </span>
                )}
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
              ></textarea>
            </div>

            {/* (hidden from users, visible to bots) */}
            <div className={styles.honeypot}>
              <label htmlFor="honeypot">Leave this field empty</label>
              <input
                type="text"
                id="honeypot"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ""}`}
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default ContactSection;