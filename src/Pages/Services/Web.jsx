import React from "react";
import { Link } from "react-router-dom";
import "./css/Main.css";

export default function WebDevelopment() {
  return (
    <div className="service-page">

     

      {/* STATS */}
      <section className="section">
        <div className="grid">
          <div className="card"><h2>100+</h2><p>Websites Built</p></div>
          <div className="card"><h2>2x</h2><p>Faster Load Speed</p></div>
          <div className="card"><h2>90%</h2><p>Client Satisfaction</p></div>
          <div className="card"><h2>24/7</h2><p>Support</p></div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>Best Web Development Company in Pune</h2>
        <p className="section-text">
          We create responsive, SEO-friendly, and performance-optimized websites
          tailored to your business needs. From landing pages to full-scale web
          applications, we focus on design, speed, and conversion.
        </p>
      </section>

      {/* FEATURES */}
      <section className="grid-section">
        <div className="grid">

          <div className="card">
            <h3>⚡ Fast Performance</h3>
            <p>Optimized websites with lightning-fast loading speed.</p>
          </div>

          <div className="card">
            <h3>📱 Responsive Design</h3>
            <p>Perfect UI across mobile, tablet, and desktop devices.</p>
          </div>

          <div className="card">
            <h3>🔒 Secure Development</h3>
            <p>Built with strong security standards and best practices.</p>
          </div>

          <div className="card">
            <h3>🔗 API Integration</h3>
            <p>Connect payment gateways, CRMs, and third-party tools.</p>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <h2>Our Development Process</h2>
        <div className="grid">

          <div className="card">
            <h3>1. Planning</h3>
            <p>Understand requirements and create project roadmap.</p>
          </div>

          <div className="card">
            <h3>2. Design</h3>
            <p>Create UI/UX wireframes and visual design.</p>
          </div>

          <div className="card">
            <h3>3. Development</h3>
            <p>Build scalable and high-performance website.</p>
          </div>

          <div className="card">
            <h3>4. Launch</h3>
            <p>Deploy, test, and optimize for performance.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Build Your Website?</h2>
        <p>Let’s create a powerful online presence for your business.</p>

        <Link to="/contact">
          <button className="btn-primary">Start Project</button>
        </Link>
      </section>

    </div>
  );
}