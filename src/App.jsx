import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Seo from "./components/Seo/Seo";
import HomePage from "./pages/HomePage/HomePage";
import ContactSection from "./components/ContactSection/ContactSection";
import GeneralServices from "./components/Services/GeneralSer/GeneralSer";
import { organizationJsonLd } from "./constants/site";

function App() {
  return (
    <BrowserRouter>
      <Seo jsonLd={organizationJsonLd} />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<GeneralServices />} />
          <Route path="/contact" element={<ContactSection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
