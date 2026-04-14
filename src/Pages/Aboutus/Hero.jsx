import React from "react";
import "./Hero.css";
import bg from "../../assets/Hero.jpg"; // 👈 add your image

export default function AboutHero() {
  return (
    <section
      className="about-hero-small"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="about-overlay"></div>

      {/* Content */}
      <div className="about-inner">
        <h1>
          About <span>CGI TECH SOLUTIONS</span>
        </h1>

        <p>
          We craft high-performance digital experiences that help brands grow,
          scale, and dominate the online world.
        </p>
      </div>

      {/* Glow */}
      <div className="about-glow"></div>
    </section>
  );
}