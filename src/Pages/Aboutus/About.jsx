import React from "react";
import "./About.css";
import Hero from "../Aboutus/Hero.jsx";
import OurMission from "../Aboutus/OurMission.jsx";
import Aboutus from "../../assets/aboutus.png";

export default function AboutPage() {
  return (
    <section className="about-page">
<Hero/>

      {/* 💎 CONTENT SECTION */}
      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-image">
          <img src={Aboutus} alt="about" />
        </div>

        {/* RIGHT TEXT */}
        <div className="about-content">
          <h2>Who We Are</h2>

          <p>
            Established in 2018, CGI TECH SOLUTIONS is a results-driven digital
            marketing company based in Pune. We specialize in creating
            high-performance websites, marketing strategies, and scalable
            digital solutions.
          </p>

          <p>
            Our team focuses on data-driven decisions, creativity, and
            innovation to help businesses grow faster and smarter in the
            digital world.
          </p>

          <div className="about-stats">
            <div>
              <h3>30+</h3>
              <span>Clients</span>
            </div>

            <div>
              <h3>459+</h3>
              <span>Projects</span>
            </div>

            <div>
              <h3>20+</h3>
              <span>Experts</span>
            </div>
          </div>
        </div>

      </div>

      
<OurMission/>
  <section className="vision">

      <div className="vision-container">

        {/* LEFT CARD */}
        <div className="vision-card">
          <div className="card-glow"></div>

          <h3>Our Vision</h3>

          <p>
            To become a global leader in digital innovation by delivering
            impactful solutions that transform businesses and create
            long-term value.
          </p>
        </div>

        {/* RIGHT TEXT */}
        <div className="vision-text">
          <h2>Shaping the Future of Digital Growth</h2>

          <p>
            We envision a future where businesses leverage technology and
            creativity to achieve exponential growth. Our goal is to help
            brands stay ahead of the curve through smart strategies and
            innovative solutions.
          </p>

          <ul>
            <li>🚀 Innovation-driven approach</li>
            <li>📊 Data-focused strategies</li>
            <li>🌍 Global impact mindset</li>
            <li>💡 Continuous improvement</li>
          </ul>
        </div>

      </div>

    </section>
    </section>
    
  );
}