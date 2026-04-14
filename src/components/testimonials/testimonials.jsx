import React, { useEffect, useRef, useState, useCallback } from "react";
import "./testimonials.css";

const testimonials = [
  {
    name: "Rajesh Kumar", role: "Founder & CEO", company: "TechVision Pune",
    initials: "RK", avatarGrad: "linear-gradient(135deg,rgba(107,33,168,0.6),rgba(45,0,88,0.8))",
    stars: 5,
    text: "CGI Crafters transformed our online presence completely. Within 3 months, our organic traffic doubled and leads from Google increased by 180%. Their SEO team really knows what they're doing.",
  },
  {
    name: "Priya Sharma", role: "Marketing Director", company: "FashionHub India",
    initials: "PS", avatarGrad: "linear-gradient(135deg,rgba(180,83,9,0.6),rgba(107,33,168,0.6))",
    stars: 5,
    text: "Our e-commerce sales jumped 240% after their Google Ads campaign. The ROI was incredible — every rupee we invested came back multiplied. Professional, responsive, and result-oriented team.",
  },
  {
    name: "Amit Mehta", role: "Managing Director", company: "GreenTech Solutions",
    initials: "AM", avatarGrad: "linear-gradient(135deg,rgba(15,110,86,0.6),rgba(45,0,88,0.7))",
    stars: 5,
    text: "The website they built for us is stunning and blazing fast. Our bounce rate dropped by 60% and conversion rate tripled. They understood our vision perfectly and delivered beyond expectations.",
  },
  {
    name: "Sneha Joshi", role: "Owner", company: "Spice & Co. Restaurant",
    initials: "SJ", avatarGrad: "linear-gradient(135deg,rgba(107,33,168,0.5),rgba(180,83,9,0.6))",
    stars: 5,
    text: "Their WhatsApp marketing automation completely changed how we engage customers. We saw a 70% increase in repeat orders within just 6 weeks. The team truly cares about results.",
  },
  {
    name: "Vikram Desai", role: "Co-Founder", company: "RideEasy App",
    initials: "VD", avatarGrad: "linear-gradient(135deg,rgba(9,90,180,0.6),rgba(45,0,88,0.8))",
    stars: 5,
    text: "The mobile app CGI Crafters built has over 10,000 downloads in 2 months. Clean UI, zero crashes, exactly what we envisioned. Their development team is world-class.",
  },
  {
    name: "Neha Patil", role: "Brand Manager", company: "Glow Skincare",
    initials: "NP", avatarGrad: "linear-gradient(135deg,rgba(153,53,86,0.6),rgba(45,0,88,0.7))",
    stars: 5,
    text: "Social media followers grew from 2K to 45K in 4 months! The content strategy CGI Crafters built is exceptional. Engagement is through the roof and we're getting genuine leads daily.",
  },
];

const stats = [
  { id: "s1", target: 200, suffix: "+", label: "Happy Clients",      decimals: false },
  { id: "s2", target: 350, suffix: "+", label: "Projects Delivered", decimals: false },
  { id: "s3", target: 4.9, suffix: "★", label: "Average Rating",     decimals: true  },
  { id: "s4", target: 6,   suffix: "+", label: "Years Experience",   decimals: false },
];

function useVisible(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

function AnimatedCount({ target, suffix, decimals, run }) {
  const [val, setVal] = useState(decimals ? "0.0" : "0");
  useEffect(() => {
    if (!run) return;
    let start = null;
    const dur = 1800;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(decimals ? (target * ease).toFixed(1) : String(Math.round(target * ease)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [run, target, decimals]);
  return <span>{val}{suffix}</span>;
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(3);
  const statsRef = useRef(null);
  const statsVisible = useVisible(statsRef);

  const maxIdx = testimonials.length - visible;

  useEffect(() => {
    const update = () => {
      setVisible(window.innerWidth <= 520 ? 1 : window.innerWidth <= 860 ? 2 : 3);
      setCurrent(0);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c < testimonials.length - visible ? c + 1 : 0));
    }, 4500);
    return () => clearInterval(id);
  }, [visible]);

  const goTo = (idx) => setCurrent(Math.max(0, Math.min(idx, maxIdx)));

  const cardW = () => {
    const card = document.querySelector(".t-card");
    return card ? card.offsetWidth + 21 : 0;
  };

  return (
    <section className="testi-section">
      <div className="t-orb t-orb-1" />
      <div className="t-orb t-orb-2" />

      <div className="testi-inner">
        <div className="testi-header">
          <div className="testi-badge"><span className="t-dot" />Client Stories</div>
          <h2 className="testi-title">What Our Clients Say About Us</h2>
          <p className="testi-sub">
            Real results, real relationships. Here's what our clients have experienced
            working with CGI Crafters.
          </p>
        </div>

        {/* Stats */}
        <div className="stats-row" ref={statsRef}>
          {stats.map((s) => (
            <div className="stat-item" key={s.id}>
              <div className="stat-num">
                <AnimatedCount target={s.target} suffix={s.suffix} decimals={s.decimals} run={statsVisible} />
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div className="carousel-wrap">
          <div className="carousel-track-outer">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${current * (100 / visible)}%)` }}
            >
              {testimonials.map((t, i) => (
                <div
                  className="t-card"
                  key={i}
                  style={{ minWidth: `calc(${100 / visible}% - 14px)` }}
                >
                  <div className="verified-badge">✦ Verified</div>
                  <span className="quote-mark">"</span>
                  <div className="stars">{"★".repeat(t.stars)}</div>
                  <p className="t-text">{t.text}</p>
                  <div className="t-gold-bar" />
                  <div className="t-author">
                    <div className="t-avatar" style={{ background: t.avatarGrad }}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="t-name">{t.name}</div>
                      <div className="t-role">{t.role}</div>
                      <div className="t-company">{t.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-controls">
            <button className="c-btn" onClick={() => goTo(current - 1)} disabled={current === 0}>←</button>
            <div className="dots">
              {Array.from({ length: maxIdx + 1 }, (_, i) => (
                <button key={i} className={`dot ${i === current ? "active" : ""}`} onClick={() => goTo(i)} />
              ))}
            </div>
            <button className="c-btn" onClick={() => goTo(current + 1)} disabled={current === maxIdx}>→</button>
          </div>
        </div>

        {/* CTA */}
        <div className="testi-cta">
          <div>
            <div className="cta-text">Ready to Be Our Next Success Story?</div>
            <div className="cta-sub">Join 200+ businesses that trust CGI Crafters to grow their brand.</div>
          </div>
          <button className="cta-btn">Get Free Consultation ✦</button>
        </div>
      </div>
    </section>
  );
}