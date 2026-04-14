import React from "react";
import "./css/smm.css";
import Back from "../../assets/social.jpg";
import SMM1 from "../../assets/smm1.jpg";
import sm from  "../../assets/socialmedia.png"

const Smm = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="smm-hero-full"
        style={{
          backgroundImage: `url(${Back})`,
        }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>
            Social Media Marketing <span>That Drives Growth</span>
          </h1>

          <p>
            Build strong connections, grow your audience, and turn engagement
            into real business results with data-driven strategies.
          </p>

          {/* CTA */}
          <div className="hero-buttons">
            <button className="btn primary">Get Started 🚀</button>
            <button className="btn secondary">View Portfolio</button>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="smm-info">

  <div className="smm-info-container">

    {/* LEFT CONTENT */}
    <div className="smm-info-text">

      <h2>
        Social Media Marketing Company in <span>Pune</span>
      </h2>

      <h3>
        Skyrocket Your Engagement with Top Social Media Content Ideas
      </h3>

      <p>
        Looking for a results-driven social media marketing company in Pune? 
        At <strong>RJ Digital</strong>, we don’t just post content — we build 
        brands, grow communities, and generate real results using creative 
        storytelling and smart targeting.
      </p>

      <p>
        As a full-service agency, we handle content creation, paid ads, and 
        influencer marketing while integrating SEO and web strategies to 
        maximize your growth.
      </p>

      <ul className="smm-points">
        <li>✔ Consistent, engaging content</li>
        <li>✔ Targeted ad campaigns</li>
        <li>✔ High-quality visuals & videos</li>
        <li>✔ Real-time analytics & tracking</li>
      </ul>

      <div className="smm-buttons">
        <button className="btn primary">Get Started 🚀</button>
        <button className="btn secondary">View Services</button>
      </div>

    </div>

    {/* RIGHT IMAGE */}
    <div className="smm-info-image">
      <img src={SMM1} alt="Social Media Marketing Pune" />
    </div>

  </div>

</section>

<section className="smm-power">

  {/* TITLE */}
  <div className="smm-power-header">
    <h2>
      Unleash the Power of <span>Social Media Marketing</span>
    </h2>

    <p>
      Drive brand growth, engagement, and real business results with
      strategic and data-driven social media marketing.
    </p>
  </div>

  {/* MAIN CONTENT */}
  <div className="smm-power-container">

    {/* LEFT TEXT */}
    <div className="smm-power-text">
      <p>
        As a leading social media marketing company in Pune, we help businesses
        grow by increasing brand awareness, building strong customer relationships,
        and driving conversions through powerful strategies.
      </p>

      <p>
        Our approach combines creative content, targeted campaigns, and
        real-time analytics to ensure maximum impact and ROI.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="smm-power-image">
      <img src={sm} alt="Social Media Growth" />
    </div>

  </div>

  {/* CARDS */}
  <div className="smm-power-grid">

    <div className="power-card">
      <h3>Increase Brand Visibility</h3>
      <p>
        Boost your brand’s visibility and credibility with strategies that
        position you as an industry leader.
      </p>
    </div>

    <div className="power-card">
      <h3>Strengthen Brand Identity</h3>
      <p>
        Build a strong voice, visual identity, and storytelling approach that
        connects with your audience.
      </p>
    </div>

    <div className="power-card">
      <h3>Foster Trust & Loyalty</h3>
      <p>
        Create meaningful relationships through engagement, trust, and
        authentic communication.
      </p>
    </div>

    <div className="power-card highlight">
      <h3>Boost Traffic & Revenue</h3>
      <p>
        Drive qualified leads, increase conversions, and grow your revenue
        with data-driven campaigns.
      </p>
    </div>

  </div>

</section>

    
    </>
  );
};

export default Smm;