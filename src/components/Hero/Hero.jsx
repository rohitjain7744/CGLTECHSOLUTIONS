import React, { useEffect, useRef, useState, useCallback } from "react";
import "./Hero.css";

/* ── easing ── */
function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

/* ── animated counter ── */
function animateCount(setter, target, duration = 2400) {
  const start = performance.now();
  function frame(now) {
    const elapsed = Math.min((now - start) / duration, 1);
    setter(Math.round(easeOutExpo(elapsed) * target));
    if (elapsed < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

export default function Hero({ title, subtitle, image, images }) {

  /* ─────────────────────────────────────────
     BUILD SLIDES ARRAY
     Accepts either `images` (array) or `image` (string).
     Falls back to empty — hero shows purple bg colour.
  ───────────────────────────────────────── */
  const slides = Array.isArray(images) && images.length > 0
    ? images
    : typeof image === "string" && image.trim() !== ""
    ? [image]
    : [];

  /* ─────────────────────────────────────────
     SLIDESHOW STATE
     activeSlide : currently visible slide index
     prevSlide   : outgoing slide (gets .prev class for cross-dissolve)
  ───────────────────────────────────────── */
  const [activeSlide,   setActiveSlide]   = useState(0);
  const [prevSlide,     setPrevSlide]     = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  const [loaded,        setLoaded]        = useState(false);
  const timerRef    = useRef(null);
  const transRef    = useRef(null);

  /* Pre-load first image before showing hero */
  useEffect(() => {
    if (slides.length === 0) {
      setLoaded(true);
      return;
    }
    const img = new window.Image();
    img.src     = slides[0];
    img.onload  = () => setLoaded(true);
    img.onerror = () => setLoaded(true); // show even if broken
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* Cross-dissolve slide change */
  const goToSlide = useCallback((next) => {
    if (transitioning) return;
    if (next === activeSlide) return;

    setPrevSlide(activeSlide);   // outgoing slide gets .prev
    setActiveSlide(next);        // incoming slide gets .active
    setTransitioning(true);

    clearTimeout(transRef.current);
    transRef.current = setTimeout(() => {
      setPrevSlide(null);        // remove .prev after dissolve completes
      setTransitioning(false);
    }, 1600);                    // matches CSS transition 1.5s + buffer
  }, [activeSlide, transitioning]);

  /* Auto-advance timer */
  useEffect(() => {
    if (slides.length <= 1) return;

    timerRef.current = setInterval(() => {
      setActiveSlide(prev => {
        const next = (prev + 1) % slides.length;
        // call goToSlide via ref to avoid stale closure
        goToSlideRef.current(next);
        return prev; // goToSlide handles the real state update
      });
    }, 5000);

    return () => clearInterval(timerRef.current);
  }, [slides.length]); // eslint-disable-line react-hooks/exhaustive-deps

  /* Keep a ref to goToSlide so the interval always sees fresh version */
  const goToSlideRef = useRef(goToSlide);
  useEffect(() => { goToSlideRef.current = goToSlide; }, [goToSlide]);

  /* ─────────────────────────────────────────
     COUNTERS — fire when hero enters viewport
  ───────────────────────────────────────── */
  const [clients,   setClients]   = useState(0);
  const [expertise, setExpertise] = useState(0);
  const [projects,  setProjects]  = useState(0);
  const countersRan = useRef(false);
  const sectionRef  = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countersRan.current) {
          countersRan.current = true;
          animateCount(setClients,   30,  2200);
          animateCount(setExpertise, 459, 2800);
          animateCount(setProjects,  20,  2000);
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ─────────────────────────────────────────
     3-D TILT — desktop / mouse only
  ───────────────────────────────────────── */
  const contentRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return; // skip touch devices

    const section = sectionRef.current;
    if (!section) return;

    let rafId = null;

    const onMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const { left, top, width, height } = section.getBoundingClientRect();
        const x = ((e.clientX - left) / width  - 0.5) * 4;
        const y = ((e.clientY - top)  / height - 0.5) * 2.5;
        if (contentRef.current) {
          contentRef.current.style.transform  = `translateZ(20px) rotateY(${x}deg) rotateX(${-y}deg)`;
          contentRef.current.style.transition = "transform 0.08s linear";
        }
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(rafId);
      if (contentRef.current) {
        contentRef.current.style.transform  = "translateZ(0) rotateY(0deg) rotateX(0deg)";
        contentRef.current.style.transition = "transform 1s cubic-bezier(0.22, 1, 0.36, 1)";
      }
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  /* ─────────────────────────────────────────
     RENDER
  ───────────────────────────────────────── */
  return (
    <section
      className={`hero${loaded ? " hero--loaded" : ""}`}
      ref={sectionRef}
      aria-label="Hero section"
    >

      {/* ── Slide images ──
          Each slide renders with its bg image via inline style.
          CSS handles opacity transitions.
          FIX: className uses template literal so "active" / "prev"
          are applied correctly without extra spaces causing issues.
      */}
      {slides.map((src, i) => (
        <div
          key={src + i}
          className={[
            "hero-slide",
            i === activeSlide ? "active" : "",
            i === prevSlide   ? "prev"   : "",
          ].filter(Boolean).join(" ")}
          style={{ backgroundImage: `url(${src})` }}
          aria-hidden="true"
          role="presentation"
        />
      ))}

      {/* ── Dark/purple overlay ── */}
      <div className="overlay" aria-hidden="true" />

      {/* ── Floating cubes ── */}
      <div className="cube cube1" aria-hidden="true" />
      <div className="cube cube2" aria-hidden="true" />
      <div className="cube cube3" aria-hidden="true" />

      {/* ── Main centered content ── */}
      <div className="content" ref={contentRef}>

        <span className="badge">• Welcome to CGI TECH SOLUTIONS</span>

        <h1 className="title">
          {title || "Transform Your\nBusiness Online"}
        </h1>

        <p className="subtitle">
          {subtitle ||
            "High-performing websites and data-driven marketing strategies that turn visitors into loyal customers."}
        </p>

        {/* CTA buttons */}
        <div className="hero-ctas">
          <a href="/contact" className="cta-primary">
            Get Started
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="15"
              height="15"
              aria-hidden="true"
            >
              <line x1="4" y1="10" x2="16" y2="10" />
              <polyline points="10 4 16 10 10 16" />
            </svg>
          </a>
          <a href="/services" className="cta-secondary">Our Services</a>
        </div>

        {/* Stats */}
        
      </div>

      {/* ── Slide navigation dots ── */}
      {slides.length > 1 && (
        <div
          className="slide-dots"
          role="tablist"
          aria-label="Slideshow navigation"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeSlide}
              aria-label={`Slide ${i + 1}`}
              className={i === activeSlide ? "active" : ""}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      )}

    </section>
  );
}