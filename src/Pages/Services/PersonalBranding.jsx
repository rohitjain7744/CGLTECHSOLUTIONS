import React from "react";
import { Link } from "react-router-dom";
import "./css/Main.css";

export default function PersonalBranding() {
  return (
    <div className="service-page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Personal Branding Services</h1>
          <p>
            Build a powerful personal brand that attracts opportunities,
            grows your audience, and positions you as an industry leader.
          </p>

          <Link to="/contact">
            <button className="btn-primary">Get Started</button>
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Personal Branding"
          />
        </div>
      </section>

      {/* STATS (NEW 🔥) */}
      <section className="section">
        <div className="grid">
          <div className="card"><h2>10x</h2><p>Profile Growth</p></div>
          <div className="card"><h2>5x</h2><p>Engagement Boost</p></div>
          <div className="card"><h2>3x</h2><p>Lead Generation</p></div>
          <div className="card"><h2>100+</h2><p>Brands Built</p></div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>Best Personal Branding Services in Pune</h2>
        <p className="section-text">
          We help entrepreneurs, creators, and professionals build a strong
          online presence. From LinkedIn to Instagram, we craft your identity,
          content strategy, and growth plan to make you stand out.
        </p>
      </section>

      {/* FEATURES */}
      <section className="grid-section">
        <div className="grid">

          <div className="card">
            <h3>👤 Profile Optimization</h3>
            <p>Enhance LinkedIn, Instagram, and social profiles professionally.</p>
          </div>

          <div className="card">
            <h3>✍️ Content Strategy</h3>
            <p>Create engaging content that builds authority and trust.</p>
          </div>

          <div className="card">
            <h3>🎨 Visual Branding</h3>
            <p>Design logos, banners, and consistent brand identity.</p>
          </div>

          <div className="card">
            <h3>📈 Audience Growth</h3>
            <p>Grow followers organically and generate inbound leads.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Build Your Personal Brand Today</h2>
        <p>Stand out, get noticed, and grow your influence online.</p>

        <Link to="/contact">
          <button className="btn-primary">Book Free Consultation</button>
        </Link>
      </section>

    </div>
  );
}