import React from "react";
import { Link } from "react-router-dom";
import "./css/Main.css";

export default function WhatsAppAPI() {
  return (
    <div className="service-page">

      {/* HERO */}
    

      {/* STATS */}
      <section className="section">
        <div className="grid">
          <div className="card"><h2>90%</h2><p>Open Rate</p></div>
          <div className="card"><h2>3x</h2><p>Customer Engagement</p></div>
          <div className="card"><h2>24/7</h2><p>Automation</p></div>
          <div className="card"><h2>1000+</h2><p>Messages Delivered</p></div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>Best WhatsApp API Service in Pune</h2>
        <p className="section-text">
          Reach your customers directly on WhatsApp with automated messages,
          chatbots, and personalized campaigns. Our solutions help businesses
          improve communication, increase conversions, and provide instant support.
        </p>
      </section>

      {/* FEATURES */}
      <section className="grid-section">
        <div className="grid">

          <div className="card">
            <h3>💬 Bulk Messaging</h3>
            <p>Send promotional and transactional messages instantly.</p>
          </div>

          <div className="card">
            <h3>🤖 Chatbot Automation</h3>
            <p>Automate replies, FAQs, and customer interactions.</p>
          </div>

          <div className="card">
            <h3>📢 Broadcast Campaigns</h3>
            <p>Run targeted campaigns for better engagement and sales.</p>
          </div>

          <div className="card">
            <h3>🔗 CRM Integration</h3>
            <p>Connect WhatsApp with CRM and track conversations.</p>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <h2>Our Process</h2>
        <div className="grid">

          <div className="card">
            <h3>1. Setup</h3>
            <p>Register and verify your WhatsApp Business API account.</p>
          </div>

          <div className="card">
            <h3>2. Integration</h3>
            <p>Connect WhatsApp with your website, CRM, or system.</p>
          </div>

          <div className="card">
            <h3>3. Automation</h3>
            <p>Build chatbot flows and message templates.</p>
          </div>

          <div className="card">
            <h3>4. Launch</h3>
            <p>Run campaigns and monitor performance analytics.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Turn WhatsApp into Your Sales Machine</h2>
        <p>Engage customers, automate chats, and boost conversions.</p>

        <Link to="/contact">
          <button className="btn-primary">Start Now</button>
        </Link>
      </section>

    </div>
  );
}