import React, { useEffect, useRef } from "react";
import "./AboutSection.css";

const services = [
  {
    title: "SEO Optimization",
    desc: "Improve search rankings, increase organic traffic, and generate consistent leads from Google.",
    icon: "📈",
  },
  {
    title: "Social Media Marketing",
    desc: "Build brand awareness and engage your audience across Instagram, Facebook & more.",
    icon: "📱",
  },
  {
    title: "Google Ads / SEM",
    desc: "Run high-converting paid campaigns to drive instant traffic and maximize ROI.",
    icon: "🎯",
  },
  {
    title: "WhatsApp Marketing",
    desc: "Reach customers directly with automation, broadcast campaigns & personalized messaging.",
    icon: "💬",
  },
  {
    title: "ERP Solutions",
    desc: "Streamline business operations with custom ERP systems designed for efficiency.",
    icon: "⚙️",
  },
  {
    title: "App Development",
    desc: "Build scalable Android & iOS apps with modern UI and high performance.",
    icon: "📲",
  },
  {
    title: "Web Development",
    desc: "Create fast, responsive, and SEO-friendly websites that convert visitors into customers.",
    icon: "🌐",
  },
];

export default function AboutSection() {
  const cardsRef   = useRef([]);
  const titleRef   = useRef(null);
  const textRef    = useRef(null);
  const badgeRef   = useRef(null);
  const dividerRef = useRef(null);
  const btnRef     = useRef(null);

  /* ── Scroll reveal ── */
  useEffect(() => {
    const targets = [
      badgeRef.current,
      titleRef.current,
      dividerRef.current,
      textRef.current,
      ...cardsRef.current,
      btnRef.current,
    ].filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ── Per-card 3D tilt (desktop only) ── */
  useEffect(() => {
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    if (isTouchDevice) return;

    const handlers = cardsRef.current.map((card, idx) => {
      if (!card) return null;

      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width  - 0.5;
        const y = (e.clientY - rect.top)  / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateX(${y * -10}deg) rotateY(${x * 10}deg) scale(1.04)`;
        card.style.transition = "transform 0.08s ease-out";
      };

      const onLeave = () => {
        card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
        card.style.transition = "transform 0.55s cubic-bezier(0.23,1,0.32,1)";
      };

      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      return { card, onMove, onLeave };
    });

    return () => {
      handlers.forEach((h) => {
        if (!h) return;
        h.card.removeEventListener("mousemove", h.onMove);
        h.card.removeEventListener("mouseleave", h.onLeave);
      });
    };
  }, []);

  return (
    <section className="about">
      <div className="container">

        {/* Badge */}
        <div style={{ textAlign: "center" }}>
          <span className="about-badge" ref={badgeRef}>Who We Are</span>
        </div>

        {/* Title */}
        <h2 className="about-title" ref={titleRef}>
          Results-driven Digital Marketing<br />Company in Pune
        </h2>

        {/* Divider */}
        <span className="about-divider" ref={dividerRef} />

        {/* Intro */}
        <p className="about-text" ref={textRef}>
          Established in 2018, <span>CGI Crafters</span> helps businesses grow
          with data-driven strategies, modern technology, and creative execution
          that delivers measurable results.
        </p>

        {/* Cards */}
        <div className="services-grid">
          {services.map((svc, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="service-card"
              style={{ "--delay": `${0.08 + i * 0.07}s` }}
            >
              <div className="card-inner">
                <div className="icon">{svc.icon}</div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="about-btn" ref={btnRef}>
          Let's Grow Together 🚀
        </button>

      </div>
    </section>
  );
}