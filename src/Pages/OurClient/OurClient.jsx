import React from "react";
import { Link } from "react-router-dom";
import "./OurClient.css";

// import logos
import c1 from "../../assets/img2.jpeg";
import c2 from "../../assets/img3.jpeg";
import c3 from "../../assets/img4.jpeg";
import c4 from "../../assets/img5.jpeg";
import c5 from "../../assets/img6.jpeg";
import c6 from "../../assets/img7.jpeg";
import c7 from "../../assets/img8.jpeg";
import c8 from "../../assets/img9.jpeg";
import c9 from "../../assets/img10.jpeg";
import c10 from "../../assets/img19.jpeg";
import c11 from "../../assets/img20.jpeg";
import c12 from "../../assets/img21.jpeg";
import c13 from "../../assets/img22.jpeg";
import c14 from "../../assets/img23.jpeg";
import c15 from "../../assets/img12.jpeg";


// 🔥 background import FIXED
import bg from "../../assets/social.jpg";

export default function OurClient() {
  const clients = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15];

  return (
    <section className="clients-page">

      {/* 🔥 HERO */}
      <section
        className="clients-hero"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        {/* Overlay */}
        <div className="clients-overlay"></div>

        {/* Content */}
        <div className="clients-content">
          <h1>
            Our Clients <span>That Trust Us</span>
          </h1>

          <p>
            We build strong partnerships, deliver real results, and help brands
            grow with powerful digital strategies.
          </p>

          <div className="hero-buttons">

            <Link to="/contact" className="btn primary">
              Get Started 🚀
            </Link>

            <Link to="/portfolio" className="btn secondary">
              View Portfolio
            </Link>

          </div>
        </div>
      </section>

      {/* 🔥 GRID */}
      <div className="clients-container">
        {clients.map((logo, i) => (
          <div key={i} className="client-card">
            <img src={logo} alt={`client-${i}`} />
          </div>
        ))}
      </div>

    </section>
  );
}