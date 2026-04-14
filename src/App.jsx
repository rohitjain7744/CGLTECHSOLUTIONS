import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./Pages/Home/Home";
import About from "./Pages/Aboutus/About";
import Services from "./Pages/Services/Services";
import ContactPage from "./Pages/contact/Contact";
import ServiceDetails from "./Pages/Services/ServiceDetails";
import Portfolio from "./Pages/Portfolio/portfolio";
import OurClient from "./Pages/OurClient/OurClient";
import Blogs from "./Pages/Blog/Blog";

/* 🔥 Scroll To Top */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

/* 🔥 404 PAGE */
function NotFound() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <p>Page Not Found</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <Routes>
        {/* MAIN */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/clients" element={<OurClient />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* 🔥 DYNAMIC SERVICES */}
        <Route path="/services/:type" element={<ServiceDetails />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;