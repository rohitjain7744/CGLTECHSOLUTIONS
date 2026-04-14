import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import bg from "../../assets/hero4.jpg"; // 👉 use your service image

export default function ServiceHero() {
  return (
    <section
      className="service-hero"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="service-overlay"></div>

      {/* Content */}
      <div className="service-content">
        <h1>
          Our <span>Services</span>
        </h1>

        <p>
          We provide powerful digital solutions that help your business grow,
          attract more customers, and achieve measurable results.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <Link to="/contact" className="btn primary">
            Get Started 🚀
          </Link>

          <Link to="/portfolio" className="btn secondary">
            View Portfolio
          </Link>
        </div>

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span> / </span>
          <span className="active">Services</span>
        </div>
      </div>

      {/* Glow */}
      <div className="service-glow"></div>
    </section>
  );
}