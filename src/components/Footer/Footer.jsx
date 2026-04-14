import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const SERVICES = [
  { to: "/services/smm",      label: "Social Media Marketing" },
  { to: "/services/sem",      label: "Search Engine Marketing" },
  { to: "/services/branding", label: "Personal Branding" },
  { to: "/services/web",      label: "Web Development" },
  { to: "/services/app",      label: "App Development" },
  { to: "/services/seo",      label: "SEO" },
  { to: "/services/whatsapp", label: "WhatsApp API" },
  { to: "/services/erp",      label: "ERP" },
  { to: "/services/video",    label: "Video Production" },
  { to: "/services/ai",       label: "AI Chatbot" },
];

const QUICK_LINKS = [
  { to: "/",          label: "Home" },
  { to: "/about",     label: "About Us" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/clients",   label: "Our Clients" },
  { to: "/blogs",     label: "Blogs" },
  { to: "/contact",   label: "Contact" },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://instagram.com/cgi_crafters_007",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/permalink.php?story_fbid=pfbid0qca9B9t1eSDZaExumtiWTiaWC8Xpwv3DdaA3AhuyWyc3F8pgBnWtayDbQRmsrBBil&id=61585167306657&rdid=LSh75SDgCHx2wSUL#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@cgi_crafters_007?si=ge6gKCw9tJX9zwKv",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
      </svg>
    ),
  },
];

/* ── Newsletter form ── */
function Newsletter() {
  const [email, setEmail]   = useState("");
  const [status, setStatus] = useState("idle"); // idle | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) { setStatus("error"); return; }
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <form className="newsletter" onSubmit={handleSubmit} noValidate>
      <div className={`newsletter__field ${status === "error" ? "newsletter__field--error" : ""}`}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
          aria-label="Email address"
        />
        <button type="submit" aria-label="Subscribe">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>
      </div>
      {status === "success" && (
        <p className="newsletter__msg newsletter__msg--ok">🎉 Subscribed successfully!</p>
      )}
      {status === "error" && (
        <p className="newsletter__msg newsletter__msg--err">Please enter a valid email.</p>
      )}
    </form>
  );
}

/* ── Intersection observer for reveal ── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("revealed"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function Footer() {
  const footerRef = useReveal();
  const year = new Date().getFullYear();

  return (
    <footer className="footer" ref={footerRef}>

      {/* Top gold accent */}
      <div className="footer__topline" />

      {/* Ambient orb */}
      <div className="footer__orb footer__orb--purple" />
      <div className="footer__orb footer__orb--gold" />

      {/* ── Main grid ── */}
      <div className="footer__grid">

        {/* Col 1 — Brand */}
        <div className="footer__col footer__col--brand">
          <Link to="/" className="footer__logo">
            <span className="footer__logo-cube" />
            <span>CGI <span className="footer__logo-accent"> TECH SOLUTIONS</span></span>
          </Link>
          <p className="footer__tagline">
            High-performing websites &amp; data-driven marketing strategies that transform businesses online.
          </p>
          <div className="footer__socials">
            {SOCIALS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                className="footer__social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div className="footer__col">
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__list">
            {QUICK_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="footer__link">
                  <span className="footer__link-arrow">›</span> {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Services */}
        <div className="footer__col">
          <h3 className="footer__heading">Our Services</h3>
          <ul className="footer__list">
            {SERVICES.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="footer__link">
                  <span className="footer__link-arrow">›</span> {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contact + Newsletter */}
        <div className="footer__col">
          <h3 className="footer__heading">Get In Touch</h3>
          <ul className="footer__contact-list">
            <li>
              <span className="footer__contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.4 10.6 19.79 19.79 0 01.34 2.18 2 2 0 012.33.01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.1 6.1l1.27-.77a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </span>
              <a href="tel:+919307125792" className="footer__link">+91 93071-25792</a>
            </li>
            <li>
              <span className="footer__contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              <a href="mailto:" className="footer__link">cgicrafters007@gmail.com </a>
            </li>
            <li>
              <span className="footer__contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </span>
              <span className="footer__link">Tanishk Pride flat number 308 win no A charoli budruk pune</span>
            </li>
          </ul>

          <h3 className="footer__heading" style={{ marginTop: "1.8rem" }}>Newsletter</h3>
          <p className="footer__newsletter-desc">Get tips, trends &amp; offers directly in your inbox.</p>
          
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copy">
            © {year} <span className="footer__copy-brand">CGI TECH SOLUTIONS</span>. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <Link to="/privacy" className="footer__bottom-link">Privacy Policy</Link>
            <span className="footer__dot">·</span>
            <Link to="/terms"   className="footer__bottom-link">Terms of Service</Link>
            <span className="footer__dot">·</span>
            <Link to="/sitemap" className="footer__bottom-link">Sitemap</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}