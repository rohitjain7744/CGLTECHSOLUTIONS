import React from "react";
import { Link } from "react-router-dom";
import "./css/Main.css";

export default function AIChatbot() {
  return (
    <div className="service-page">

      {/* 🔥 HERO */}
     

      {/* 🔥 ABOUT */}
      <section className="section">

        <h2>Best AI Chatbot Development Services in Pune</h2>
        <div className="divider"></div>

        <p className="section-text">
          AI chatbot development empowers your business to offer instant, intelligent,
          and interactive support across digital platforms. From websites to WhatsApp 
          and apps, chatbots handle queries, capture leads, and improve customer experience.
        </p>

      </section>

      {/* 🔥 FEATURES */}
      <section className="section">

        <h2>Key Features</h2>
        <div className="divider"></div>

        <div className="grid">

          <div className="card">
            <span className="card-icon">🤖</span>
            <h3>Smart Conversations</h3>
            <p>Human-like conversations powered by AI & NLP.</p>
          </div>

          <div className="card">
            <span className="card-icon">📈</span>
            <h3>Lead Generation</h3>
            <p>Automatically capture and qualify leads.</p>
          </div>

          <div className="card">
            <span className="card-icon">🔗</span>
            <h3>CRM Integration</h3>
            <p>Connect with your CRM and tools easily.</p>
          </div>

          <div className="card">
            <span className="card-icon">⏱️</span>
            <h3>24/7 Automation</h3>
            <p>Always available to support your customers.</p>
          </div>

        </div>

      </section>

      {/* 🔥 PROCESS */}
      <section className="section">

        <h2>Our Development Process</h2>
        <div className="divider"></div>

        <div className="grid">

          <div className="process-step">
            <div className="step-number">1</div>
            <div>
              <h4>Strategy</h4>
              <p>Understand your business and chatbot goals.</p>
            </div>
          </div>

          <div className="process-step">
            <div className="step-number">2</div>
            <div>
              <h4>Design</h4>
              <p>Create chatbot flow and conversation logic.</p>
            </div>
          </div>

          <div className="process-step">
            <div className="step-number">3</div>
            <div>
              <h4>Development</h4>
              <p>Build AI-powered chatbot with integrations.</p>
            </div>
          </div>

          <div className="process-step">
            <div className="step-number">4</div>
            <div>
              <h4>Launch</h4>
              <p>Deploy and optimize chatbot performance.</p>
            </div>
          </div>

        </div>

      </section>

      {/* 🔥 CTA */}
      <section className="cta">

        <h2>Ready to Automate Your Business?</h2>

        <p>
          Let’s build an AI chatbot that works for you 24/7.
        </p>

        <Link to="/contact" className="btn-primary">
          Start Now 🚀
        </Link>

      </section>

    </div>
  );
}