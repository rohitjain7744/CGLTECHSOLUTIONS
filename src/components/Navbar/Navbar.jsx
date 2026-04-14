import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const SERVICES = [
  { to: "/services/smm",       label: "Social Media Marketing", icon: "📱" },
  { to: "/services/sem",       label: "Search Engine Marketing", icon: "🔍" },
  { to: "/services/branding",  label: "Personal Branding",       icon: "✨" },
  { to: "/services/web",       label: "Web Development",         icon: "🌐" },
  { to: "/services/app",       label: "App Development",         icon: "📲" },
  { to: "/services/seo",       label: "SEO",                     icon: "📈" },
  { to: "/services/whatsapp",  label: "WhatsApp API",            icon: "💬" },
  { to: "/services/erp",       label: "ERP",                     icon: "⚙️" },
  { to: "/services/video",     label: "Video Production",        icon: "🎬" },
  { to: "/services/ai",        label: "AI Chatbot",              icon: "🤖" },
];

const NAV_LINKS = [
  { to: "/",         label: "Home"        },
  { to: "/about",    label: "About Us"    },
  { to: "/portfolio",label: "Portfolio"   },
  // { to: "/clients",  label: "Our Clients" },
  { to: "/blogs",    label: "Blogs"       },
];

export default function Navbar() {
  const [dropdown, setDropdown]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobile]   = useState(false);
  const [mobileServices, setMS]   = useState(false);
  const [mousePos, setMousePos]   = useState({ x: 0, y: 0 });

  const dropdownRef = useRef(null);
  const headerRef   = useRef(null);
  const location    = useLocation();

  /* ── Scroll glass effect ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close dropdown on outside click ── */
  useEffect(() => {
    const onOut = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setDropdown(false);
    };
    document.addEventListener("mousedown", onOut);
    return () => document.removeEventListener("mousedown", onOut);
  }, []);

  /* ── Close mobile on route change ── */
  useEffect(() => {
    setMobile(false);
    setDropdown(false);
    setMS(false);
  }, [location.pathname]);

  /* ── 3D parallax tilt on navbar ── */
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const onMove = (e) => {
      const { left, width } = el.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 4;
      setMousePos({ x });
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", () => setMousePos({ x: 0 }));
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      <header
        ref={headerRef}
        className={`nav ${scrolled ? "nav--scrolled" : ""} ${mobileOpen ? "nav--open" : ""}`}
        style={{ "--tilt-x": `${mousePos.x}deg` }}
      >
        {/* Gold top accent line */}
        <div className="nav__topline" />

        <div className="nav__inner">

          {/* ── Logo ── */}
          <Link to="/" className="nav__logo">
            <span className="logo__icon">
              <span className="logo__cube" />
            </span>
            <span className="logo__text">
              CGI <span className="logo__accent">TECH SOLUTIONS</span>
            </span>
          </Link>

          {/* ── Desktop Menu ── */}
          <nav className="nav__menu" aria-label="Primary navigation">

            {NAV_LINKS.slice(0, 1).map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`nav__link ${isActive(to) ? "nav__link--active" : ""}`}
              >
                {label}
                <span className="nav__link-bar" />
              </Link>
            ))}

            {/* Services dropdown */}
            <div
              className="nav__dropdown"
              ref={dropdownRef}
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <Link
                to="/services"
                className={`nav__link nav__link--services ${
                  isActive("/services") ? "nav__link--active" : ""
                }`}
                onClick={() => setDropdown(false)}
              >
                Services
                <span className="nav__link-bar" />
              </Link>
              <button
                className={`nav__arrow ${dropdown ? "nav__arrow--open" : ""}`}
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setDropdown((p) => !p); }}
                aria-label="Toggle services menu"
              >
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>

              {/* Mega dropdown */}
              <div className={`dropdown-panel ${dropdown ? "dropdown-panel--open" : ""}`} role="menu">
                <div className="dropdown-panel__header">
                  <span>Our Services</span>
                  <span className="dropdown-panel__count">{SERVICES.length} offerings</span>
                </div>
                <div className="dropdown-panel__grid">
                  {SERVICES.map(({ to, label, icon }) => (
                    <Link
                      key={to}
                      to={to}
                      className="dropdown-item"
                      onClick={() => setDropdown(false)}
                      role="menuitem"
                    >
                      <span className="dropdown-item__icon">{icon}</span>
                      <span className="dropdown-item__label">{label}</span>
                      <span className="dropdown-item__arrow">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {NAV_LINKS.slice(1).map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`nav__link ${isActive(to) ? "nav__link--active" : ""}`}
              >
                {label}
                <span className="nav__link-bar" />
              </Link>
            ))}

            {/* CTA */}
            <Link to="/contact" className="nav__cta">
              <span>Contact US</span>
              <span className="nav__cta-shine" />
            </Link>

          </nav>

          {/* ── Hamburger ── */}
          <button
            className={`nav__burger ${mobileOpen ? "nav__burger--open" : ""}`}
            onClick={() => setMobile((p) => !p)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span /><span /><span />
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        <div className={`nav__mobile ${mobileOpen ? "nav__mobile--open" : ""}`} aria-hidden={!mobileOpen}>
          {NAV_LINKS.slice(0, 1).map(({ to, label }) => (
            <Link key={to} to={to} className="mobile__link">{label}</Link>
          ))}

          {/* Mobile services accordion */}
          <div className="mobile__accordion">
            <button
              className="mobile__link mobile__link--accordion"
              onClick={() => setMS((p) => !p)}
            >
              Services
              <svg
                className={`mobile__chevron ${mobileServices ? "mobile__chevron--open" : ""}`}
                width="12" height="8" viewBox="0 0 12 8" fill="none"
              >
                <path d="M1 1L6 7L11 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>
            <div className={`mobile__services ${mobileServices ? "mobile__services--open" : ""}`}>
              {SERVICES.map(({ to, label, icon }) => (
                <Link key={to} to={to} className="mobile__service-item">
                  <span>{icon}</span> {label}
                </Link>
              ))}
            </div>
          </div>

          {NAV_LINKS.slice(1).map(({ to, label }) => (
            <Link key={to} to={to} className="mobile__link">{label}</Link>
          ))}

          <Link to="/contact" className="mobile__cta">Contact Us→</Link>
        </div>
      </header>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div className="nav__backdrop" onClick={() => setMobile(false)} aria-hidden="true" />
      )}
    </>
  );
}