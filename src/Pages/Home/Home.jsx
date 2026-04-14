import { useState, useEffect } from "react";

import Hero from "../../components/Hero/Hero";
import AboutSection from "../../components/AboutSection/AboutSection";
import OurService from "../../components/OurService/OurService";
import ServiceSection from "../../components/OurService/ServicesSection";
import Testimonials from "../../components/testimonials/testimonials";
import Contact from "../../components/ContactUs/Contact";

import img1 from "../../assets/Hero.jpg";
import img2 from "../../assets/hero1.jpg";
import img3 from "../../assets/hero3.jpg";
import img4 from "../../assets/hero4.jpg";

export default function Home() {
  const slides = [
    {
      title: "Build. Grow. Scale.",
      subtitle: "Premium digital experiences.",
      image: img1,
    },
    {
      title: "Next Level Marketing 🔥",
      subtitle: "AI + Creativity = Growth",
      image: img2,
    },
    {
      title: "Transform Your Business Online",
      subtitle:
        "High-performing websites and data-driven marketing strategies",
      image: img3,
    },
    {
      title: "More Leads. More Sales. More Growth.",
      subtitle: "We create strategies that deliver results",
      image: img4,
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Hero {...slides[index]} />
      <AboutSection />
      <OurService />
      <ServiceSection />
      <Testimonials />
      <Contact />
    </>
  );
}