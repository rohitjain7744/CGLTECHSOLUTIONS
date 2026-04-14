import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import Hero from "./Hero.jsx";
import OurServices from "../../components/OurService/OurService.jsx";


export default function Services() {
  const services = [
    {
      title: "Web Development",
      slug: "web",
      desc: "We build high-performance websites that are fast, scalable, and designed to convert visitors into customers.",
      icon: "🌐",
      features: [
        "Responsive Design",
        "SEO Friendly Structure",
        "Fast Loading Speed",
        "Modern UI/UX",
      ],
    },
    {
      title: "SEO Optimization",
      slug: "seo",
      desc: "Rank higher on Google and drive organic traffic with data-driven SEO strategies.",
      icon: "📈",
      features: [
        "Keyword Research",
        "On-page SEO",
        "Technical SEO",
        "Monthly Reports",
      ],
    },
    {
      title: "Social Media Marketing",
      slug: "smm",
      desc: "Build brand awareness and engage your audience across platforms like Instagram & Facebook.",
      icon: "📱",
      features: [
        "Content Strategy",
        "Post Design",
        "Ad Campaigns",
        "Analytics Tracking",
      ],
    },
    {
      title: "Google Ads / SEM",
      slug: "sem",
      desc: "Run high-converting ad campaigns to generate leads and maximize ROI.",
      icon: "💰",
      features: [
        "Search Ads",
        "Display Ads",
        "Remarketing",
        "Conversion Tracking",
      ],
    },
    {
      title: "App Development",
      slug: "app",
      desc: "We develop powerful mobile apps with modern UI and high performance.",
      icon: "📲",
      features: [
        "Android & iOS Apps",
        "UI/UX Design",
        "API Integration",
        "Maintenance Support",
      ],
    },
    {
      title: "ERP Solutions",
      slug: "erp",
      desc: "Streamline operations with custom ERP systems tailored to your business.",
      icon: "⚙️",
      features: [
        "Inventory Management",
        "Billing System",
        "HR Management",
        "Custom Modules",
      ],
    },
  ];

  return (
    <section className="services-page">

      {/* HERO */}
      <Hero />

      <OurServices/>

      {/* CTA */}
      <div className="services-cta">
        <h2>Need a Custom Solution?</h2>
        <p>Let’s build something amazing together 🚀</p>

        <div className="cta-buttons">
          <Link to="/contact" className="btn primary">
            Get Started
          </Link>

          <Link to="/contact" className="btn secondary">
            Contact Us
          </Link>
        </div>
      </div>

    </section>
  );
}