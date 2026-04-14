import React from "react";
import { Link } from "react-router-dom";
import "./css/Main.css";

export default function AppDevelopment() {
  return (
    <div className="service-page">

      {/* HERO */}
     

      {/* ABOUT */}
      <section className="section">
        <h2>Best App Development Company in Pune</h2>
        <p className="section-text">
          We create high-performance mobile applications tailored to your business needs.
          From startup MVPs to enterprise apps, our development ensures speed, security,
          and seamless user experience across all devices.
        </p>
      </section>

      {/* FEATURES */}
      <section className="grid-section">
        <div className="grid">

          <div className="card">
            <h3>Android & iOS Apps</h3>
            <p>Build native and cross-platform apps with modern technologies.</p>
          </div>

          <div className="card">
            <h3>UI/UX Design</h3>
            <p>Beautiful and user-friendly designs that improve engagement.</p>
          </div>

          <div className="card">
            <h3>API Integration</h3>
            <p>Integrate payment gateways, APIs, and third-party services.</p>
          </div>

          <div className="card">
            <h3>Secure & Scalable</h3>
            <p>Apps built with strong security and future scalability in mind.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Have an App Idea?</h2>
        <p>Let’s turn your idea into a powerful mobile application.</p>
        <button className="btn-primary">Start Your Project</button>
      </section>

    </div>
  );
}