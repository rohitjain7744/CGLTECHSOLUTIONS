import React from "react";
import "./OurMission.css";
import CTA from "./cta.jsx";

export default function Mission() {
  const values = [
    {
      title: "Innovation",
      desc: "We constantly explore new ideas and technologies to stay ahead.",
    },
    {
      title: "Transparency",
      desc: "We believe in honest communication and clear processes.",
    },
    {
      title: "Quality",
      desc: "We deliver high-quality solutions that exceed expectations.",
    },
    {
      title: "Growth",
      desc: "Your success is our mission — we grow together.",
    },
  ];

  return (
    <>
      {/* 🔥 MISSION */}
      <section className="mission">
        <div className="mission-container">

          <div className="mission-text">
            <h2>Our Mission</h2>

            <p>
              Our mission is to empower businesses with innovative digital
              solutions that drive measurable growth.
            </p>

            <p>
              We combine creativity, data, and technology to deliver results
              that matter in the modern digital world.
            </p>

            <button className="mission-btn">
              Let’s Work Together 🚀
            </button>
          </div>

          <div className="mission-card">
            <div className="card-glow"></div>

            <h3>Why Choose Us?</h3>

            <ul>
              <li>✔ Results-driven strategies</li>
              <li>✔ Creative & modern design</li>
              <li>✔ Data-backed decisions</li>
              <li>✔ Scalable solutions</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 🔥 VALUES */}
      <section className="values">
        <h2 className="values-title">Our Core Values</h2>

        <div className="values-grid">
          {values.map((val, i) => (
            <div key={i} className="value-card">
              <div className="glow"></div>

              <h3>{val.title}</h3>
              <p>{val.desc}</p>
            </div>
          ))}
        </div>
   
      </section>
     

    </>
    
  );
}