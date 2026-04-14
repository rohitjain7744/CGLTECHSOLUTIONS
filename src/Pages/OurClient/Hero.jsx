import React from "react";
import "./Hero.css";
import bg from "../../assets/hero4.jpg"; // add image

export default function ClientsHero() {
  return (
    <section
      className="clients-hero"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="clients-overlay"></div>
d
      {/* Content */}
      <div className="clients-content">
        <h1>
          Trusted by <span>Leading Brands</span>
        </h1>

        <p>
          We partner with ambitious businesses to deliver measurable growth,
          build strong brands, and achieve long-term success.
        </p>

        <div className="hero-buttons">
          <button className="btn primary">Work With Us 🚀</button>
          <button className="btn secondary">View Portfolio</button>
        </div>
      </div>

      {/* Glow */}
      <div className="clients-glow"></div>
    </section>
  );
}