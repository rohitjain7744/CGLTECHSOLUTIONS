import React from "react";
import { Link } from "react-router-dom";
import "./css/Main.css";

export default function SEO() {
  return (
    <div className="service-page">

      {/* HERO */}
      

      {/* STATS */}
      <section className="section">
        <div className="grid">
          <div className="card"><h2>5x</h2><p>Traffic Growth</p></div>
          <div className="card"><h2>70%</h2><p>Organic Leads</p></div>
          <div className="card"><h2>Top 10</h2><p>Keyword Rankings</p></div>
          <div className="card"><h2>100+</h2><p>Projects Completed</p></div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>Best SEO Company in Pune</h2>
        <p className="section-text">
          Our SEO strategies focus on long-term growth by improving your website’s
          visibility, authority, and rankings. We combine technical SEO, content
          optimization, and link building to deliver consistent results.
        </p>
      </section>

      {/* FEATURES */}
      <section className="grid-section">
        <div className="grid">

          <div className="card">
            <h3>🔍 Keyword Research</h3>
            <p>Identify high-ranking and profitable keywords for your niche.</p>
          </div>

          <div className="card">
            <h3>⚙️ Technical SEO</h3>
            <p>Improve site speed, structure, and indexing performance.</p>
          </div>

          <div className="card">
            <h3>📝 Content Optimization</h3>
            <p>Create SEO-friendly content that ranks and converts.</p>
          </div>

          <div className="card">
            <h3>🔗 Link Building</h3>
            <p>Build high-quality backlinks to increase domain authority.</p>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <h2>Our SEO Process</h2>
        <div className="grid">

          <div className="card">
            <h3>1. Audit</h3>
            <p>Analyze website performance and SEO issues.</p>
          </div>

          <div className="card">
            <h3>2. Strategy</h3>
            <p>Plan keyword targeting and content structure.</p>
          </div>

          <div className="card">
            <h3>3. Optimization</h3>
            <p>Fix on-page, technical, and content issues.</p>
          </div>

          <div className="card">
            <h3>4. Growth</h3>
            <p>Build backlinks and monitor ranking improvements.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Want to Rank #1 on Google?</h2>
        <p>Start your SEO journey and grow your organic traffic today.</p>

        <Link to="/contact">
          <button className="btn-primary">Start SEO Now</button>
        </Link>
      </section>

    </div>
  );
}