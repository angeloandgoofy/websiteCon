import React from "react";
import { Helmet } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ContactSection from "./components/ContactSection/ContactSection";
import HomePage from "./pages/HomePage/HomePage";
import Links from "./components/Links/Links";
import Bathroom from "./components/Services/Bathroom/Bathroom";
import Kitchen from "./components/Services/Kitchen/Kitchen";
import GeneralServices from "./components/Services/GeneralSer/GeneralSer";

function App() {
  return (
    <Router>
      <Helmet>
        <title>ROSSI CONSTRUCTION - Home Remodeling Experts in Bayside, Long Island, Bronx, Manhattan, Boston</title>
        <meta
          name="description"
          content="Transform your home with ROSSI CONSTRUCTION, trusted experts in kitchen, bathroom, and full-home renovations in Bayside, Long Island, Bronx, Manhattan, and Boston."
        />
        <meta
          name="keywords"
          content="home remodeling, kitchen renovation, bathroom renovation, ROSSI CONSTRUCTION, Bayside renovations, Long Island renovations, Bronx renovations, Manhattan renovations, Boston renovations"
        />
        <meta name="author" content="ROSSI CONSTRUCTION" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.rossiconstruction.com" />
        <meta property="og:title" content="ROSSI CONSTRUCTION - Home Remodeling Experts" />
        <meta
          property="og:description"
          content="Expert kitchen, bathroom, and home renovations in Bayside, Long Island, Bronx, Manhattan, and Boston. Contact ROSSI CONSTRUCTION today!"
        />
        <meta property="og:image" content="https://www.rossiconstruction.com/images/og-image.jpg" />
        <meta property="og:url" content="https://www.rossiconstruction.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ROSSI CONSTRUCTION",
            "address": [
              {
                "@type": "PostalAddress",
                "addressLocality": "Bayside",
                "addressRegion": "NY",
                "addressCountry": "US"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Long Island",
                "addressRegion": "NY",
                "addressCountry": "US"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Bronx",
                "addressRegion": "NY",
                "addressCountry": "US"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Manhattan",
                "addressRegion": "NY",
                "addressCountry": "US"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Boston",
                "addressRegion": "MA",
                "addressCountry": "US"
              }
            ],
            "telephone": "[Your Phone Number]",
            "url": "https://www.rossiconstruction.com",
            "description": "Expert home remodeling services in Bayside, Long Island, Bronx, Manhattan, and Boston, specializing in kitchens, bathrooms, and full-home renovations."
          }
        `}</script>
      </Helmet>
      <Navbar />
      <Links />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bathroom" element={<Bathroom />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/services" element={<GeneralServices />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    </Router>
  );
}

export default App;