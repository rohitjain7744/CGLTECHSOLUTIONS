import React from "react";
import { Link } from "react-router-dom";
import "./css/Main.css";

export default function SEM() {
  return (
    <div className="service-page">

      

      {/* STATS */}
      <section className="section">
        <div className="grid">
          <div className="card"><h2>4x</h2><p>ROI Growth</p></div>
          <div className="card"><h2>60%</h2><p>Lower CPC</p></div>
          <div className="card"><h2>3x</h2><p>More Leads</p></div>
          <div className="card"><h2>200+</h2><p>Campaigns Managed</p></div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>Best Google Ads Company in Pune</h2>
        <p className="section-text">
          Paid search is the fastest way to grow your business online. We create
          data-driven Google Ads campaigns that target the right audience at the
          right time, ensuring maximum ROI and measurable results.
        </p>
      </section>

      {/* FEATURES */}
      <section className="grid-section">
        <div className="grid">

          <div className="card">
            <h3>🔍 Keyword Research</h3>
            <p>Find high-converting keywords that drive targeted traffic.</p>
          </div>

          <div className="card">
            <h3>✍️ Ad Copywriting</h3>
            <p>Create compelling ads that increase clicks and conversions.</p>
          </div>

          <div className="card">
            <h3>🎯 Audience Targeting</h3>
            <p>Reach the right people based on location, behavior, and intent.</p>
          </div>

          <div className="card">
            <h3>📊 ROI Tracking</h3>
            <p>Track every click, lead, and conversion with detailed analytics.</p>
          </div>

        </div>
      </section>

      {/* PROCESS (NEW 🔥) */}
      <section className="section">
        <h2>Our Process</h2>
        <div className="grid">

          <div className="card">
            <h3>1. Research</h3>
            <p>Analyze competitors and identify profitable keywords.</p>
          </div>

          <div className="card">
            <h3>2. Setup</h3>
            <p>Create campaigns with optimized ad groups and targeting.</p>
          </div>

          <div className="card">
            <h3>3. Launch</h3>
            <p>Run campaigns with smart bidding strategies.</p>
          </div>

          <div className="card">
            <h3>4. Optimize</h3>
            <p>Continuously improve performance and scale results.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Dominate Google Search?</h2>
        <p>Get more clicks, leads, and sales with expert SEM strategies.</p>

        <Link to="/contact">
          <button className="btn-primary">Start Campaign</button>
        </Link>
      </section>

    </div>
  );
}