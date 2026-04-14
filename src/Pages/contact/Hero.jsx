import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import bg from "../../assets/app.jpg"; // 👉 add your image

export default function ContactHero() {
  return (
    <section
      className="contact-hero"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="contact-overlay"></div>

      {/* Content */}
      <div className="contact-content">
        <h1>
          Get in <span>Touch</span>
        </h1>

        <p>
          Have a project in mind? Let’s connect and build something amazing together.
        </p>

        {/* CTA */}
        <div className="hero-buttons">
          

          <Link to="/portfolio" className="btn secondary">
            View Work
          </Link>
        </div>

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span> / </span>
          <span className="active">Contact</span>
        </div>
      </div>

      {/* Glow */}
      <div className="contact-glow"></div>
    </section>
  );
}