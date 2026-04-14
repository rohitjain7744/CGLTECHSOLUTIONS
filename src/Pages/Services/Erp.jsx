import React from "react";
import { Link } from "react-router-dom";
import "./css/Main.css";

export default function ERP() {
  return (
    <div className="service-page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>ERP Development Solutions</h1>
          <p>
            Streamline your business operations with custom ERP systems that 
            integrate all departments into one powerful platform.
          </p>

         
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="ERP System"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>Best ERP Development Company in Pune</h2>
        <p className="section-text">
          Our ERP solutions help businesses automate workflows, manage resources,
          and improve efficiency. From inventory to HR and finance, we build
          scalable systems that give you complete control and real-time insights.
        </p>
      </section>

      {/* FEATURES */}
      <section className="grid-section">
        <div className="grid">

          <div className="card">
            <h3>Inventory Management</h3>
            <p>Track stock, orders, and supply chain in real time.</p>
          </div>

          <div className="card">
            <h3>HR & Payroll</h3>
            <p>Manage employees, attendance, and salaries easily.</p>
          </div>

          <div className="card">
            <h3>Finance & Accounting</h3>
            <p>Automate billing, expenses, and financial reporting.</p>
          </div>

          <div className="card">
            <h3>CRM Integration</h3>
            <p>Manage leads, customers, and sales pipelines efficiently.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Upgrade Your Business with ERP</h2>
        <p>Automate operations and boost productivity with smart ERP solutions.</p>
        <button className="btn-primary">Book Free Consultation</button>
      </section>

    </div>
  );
}