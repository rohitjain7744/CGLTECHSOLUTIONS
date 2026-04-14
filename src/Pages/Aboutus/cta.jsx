import React from "react";
import "./OurMission.css";

export default function CTA() {
  return (
    <section className="cta">

      {/* Glow */}
      <div className="cta-glow"></div>

      <div className="cta-container">

        <h2>Ready to Grow Your Business?</h2>

        <p>
          Let’s build something amazing together. We help brands scale faster
          with powerful digital strategies and high-performance solutions.
        </p>

        <div className="cta-buttons">
          <button className="btn primary">Get Started 🚀</button>
          <button className="btn secondary">View Portfolio</button>
        </div>

      </div>
    </section>
  );
}