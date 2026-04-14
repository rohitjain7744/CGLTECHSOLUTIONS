import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./OurService.css";

import img1 from "../../assets/seo.jpg";
import img2 from "../../assets/social.jpg";
import img3 from "../../assets/ads.jpg";
import img4 from "../../assets/web.jpg";
import img5 from "../../assets/app.jpg";
import img6 from "../../assets/wp.jpg";

const services = [
  {
    title: "SEO Optimization",
    desc: "Improve rankings and get organic traffic from Google.",
    img: img1,
    to: "/services/seo",
    icon: "📈",
    tag: "Organic Growth",
  },
  {
    title: "Social Media Marketing",
    desc: "Build brand presence and engage your audience.",
    img: img2,
    to: "/services/smm",
    icon: "📱",
    tag: "Brand Awareness",
  },
  {
    title: "Google Ads / SEM",
    desc: "Run high-converting paid campaigns for fast growth.",
    img: img3,
    to: "/services/sem",
    icon: "🔍",
    tag: "Paid Campaigns",
  },
  {
    title: "Web Development",
    desc: "Modern, fast and responsive websites built to convert.",
    img: img4,
    to: "/services/web",
    icon: "🌐",
    tag: "Digital Presence",
  },
  {
    title: "App Development",
    desc: "Scalable mobile apps for Android & iOS.",
    img: img5,
    to: "/services/app",
    icon: "📲",
    tag: "Mobile First",
  },
  {
    title: "WhatsApp Marketing",
    desc: "Reach customers directly with smart automation.",
    img: img6,
    to: "/services/whatsapp",
    icon: "💬",
    tag: "Direct Reach",
  },
];

export default function OurServices() {
  const cardsRef  = useRef([]);
  const sectionRef = useRef(null);

  /* ── Scroll reveal via IntersectionObserver ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    cardsRef.current.forEach((card) => { if (card) observer.observe(card); });
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  /* ── Per-card 3D tilt (desktop only) ── */
  const isTouchDevice = () => window.matchMedia("(hover: none)").matches;

  const handleMouseMove = (e, index) => {
    if (isTouchDevice()) return;
    const card = cardsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotX = ((y / rect.height) - 0.5) * 16;
    const rotY = ((x / rect.width)  - 0.5) * -16;

    card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.04)`;
    card.style.transition = "transform 0.08s ease-out";

    /* Glare effect */
    const glare = card.querySelector(".service-card__glare");
    if (glare) {
      const glareX = (x / rect.width)  * 100;
      const glareY = (y / rect.height) * 100;
      glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(253,230,138,0.14) 0%, transparent 65%)`;
    }
  };

  const handleMouseLeave = (index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
    card.style.transition = "transform 0.55s cubic-bezier(0.23,1,0.32,1)";

    const glare = card.querySelector(".service-card__glare");
    if (glare) glare.style.background = "transparent";
  };

  return (
    <section className="services" ref={sectionRef}>

      {/* Background orbs */}
      <div className="services__orb services__orb--1" />
      <div className="services__orb services__orb--2" />

      {/* Section header */}
      <div className="services__header">
        <span className="services__badge">What We Offer</span>
        <h2 className="services__title">Our Services</h2>
        <p className="services__subtitle">
          End-to-end digital solutions that drive real results for your business.
        </p>
        <div className="services__divider" />
      </div>

      {/* Cards grid */}
      <div className="services-grid">
        {services.map((svc, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="service-card"
            style={{ "--delay": `${i * 0.10}s` }}
            onMouseMove={(e) => handleMouseMove(e, i)}
            onMouseLeave={() => handleMouseLeave(i)}
          >
            {/* Glare layer */}
            <div className="service-card__glare" />

            {/* Image */}
            <div className="service-card__img-wrap">
              <img src={svc.img} alt={svc.title} className="service-card__img" />
              <div className="service-card__img-overlay" />
            </div>

            {/* Content */}
            <div className="service-card__body">
              <div className="service-card__top">
                <span className="service-card__icon">{svc.icon}</span>
                <span className="service-card__tag">{svc.tag}</span>
              </div>
              <h3 className="service-card__title">{svc.title}</h3>
              <p className="service-card__desc">{svc.desc}</p>
            </div>

            {/* CTA */}
            <div className="service-card__footer">
              <Link to={svc.to} className="service-card__cta">
                Learn More
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                  <line x1="4" y1="10" x2="16" y2="10"/>
                  <polyline points="10 4 16 10 10 16"/>
                </svg>
              </Link>
            </div>

            {/* Gold bottom border that grows on hover */}
            <div className="service-card__border" />
          </div>
        ))}
      </div>

      {/* View all CTA */}
      <div className="services__view-all">
        <Link to="/services" className="services__view-btn">
          View All Services
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
            <line x1="4" y1="10" x2="16" y2="10"/>
            <polyline points="10 4 16 10 10 16"/>
          </svg>
        </Link>
      </div>

    </section>
  );
}