import React from "react";
import { Link } from "react-router-dom";
import "./css/Main.css";

export default function VideoProduction() {
  return (
    <div className="service-page">

      {/* HERO */}
     

      

      {/* STATS */}
      <section className="section">
        <div className="grid">
          <div className="card"><h2>500+</h2><p>Videos Created</p></div>
          <div className="card"><h2>3x</h2><p>Engagement Boost</p></div>
          <div className="card"><h2>95%</h2><p>Client Satisfaction</p></div>
          <div className="card"><h2>4K</h2><p>High Quality Output</p></div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>Best Video Production Company in Pune</h2>
        <p className="section-text">
          From brand films to social media content, we produce cinematic videos
          that connect with your audience. Our team handles everything from
          concept to final editing, ensuring high-impact storytelling.
        </p>
      </section>

      {/* FEATURES */}
      <section className="grid-section">
        <div className="grid">

          <div className="card">
            <h3>🎬 Brand Videos</h3>
            <p>Professional videos that showcase your brand story.</p>
          </div>

          <div className="card">
            <h3>📱 Social Media Content</h3>
            <p>Reels, shorts, and viral content for Instagram & YouTube.</p>
          </div>

          <div className="card">
            <h3>🎯 Ad Video Production</h3>
            <p>High-converting video ads for marketing campaigns.</p>
          </div>

          <div className="card">
            <h3>✨ Motion Graphics</h3>
            <p>Animations and visual effects to enhance storytelling.</p>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <h2>Our Production Process</h2>
        <div className="grid">

          <div className="card">
            <h3>1. Planning</h3>
            <p>Concept creation and script development.</p>
          </div>

          <div className="card">
            <h3>2. Shooting</h3>
            <p>Professional filming with high-end equipment.</p>
          </div>

          <div className="card">
            <h3>3. Editing</h3>
            <p>Video editing, color grading, and sound design.</p>
          </div>

          <div className="card">
            <h3>4. Delivery</h3>
            <p>Final optimized video ready for all platforms.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Create Stunning Videos?</h2>
        <p>Bring your ideas to life with professional video production.</p>

        <Link to="/contact">
          <button className="btn-primary">Start Now</button>
        </Link>
      </section>

    </div>
  );
}