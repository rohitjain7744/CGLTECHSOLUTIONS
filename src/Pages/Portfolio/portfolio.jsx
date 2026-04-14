import React, { useEffect, useRef, useState, useCallback } from "react";
import "./portfolio.css";

/* ══════════════════════════════════════
   LOCAL IMAGE & VIDEO IMPORTS
   Replace paths with your actual files
══════════════════════════════════════ */
import img1  from "../../assets/img1.jpeg";
import img2  from "../../assets/img2.jpeg";
import img3  from "../../assets/img3.jpeg";
import img4  from "../../assets/img4.jpeg";
import img5  from "../../assets/img5.jpeg";
import img6  from "../../assets/img6.jpeg";
import img7  from "../../assets/img7.jpeg";
import img8  from "../../assets/img8.jpeg";
import img9  from "../../assets/img9.jpeg";
import img10 from "../../assets/img10.jpeg";
import img11 from "../../assets/img11.jpeg";
import img12 from "../../assets/img12.jpeg";
import img13 from "../../assets/img13.jpeg";
import img14 from "../../assets/img14.jpeg";
import img15 from "../../assets/img15.jpeg";
import img16 from "../../assets/img16.jpeg";
import img17 from "../../assets/img17.jpeg";
import img18 from "../../assets/img18.jpeg";
import img19 from "../../assets/img19.jpeg";
import img20 from "../../assets/img20.jpeg";
import img21 from "../../assets/img21.jpeg";
import img22 from "../../assets/img22.jpeg";
import img23 from "../../assets/img23.jpeg";
import img24 from "../../assets/img24.jpeg";
import img25 from "../../assets/img25.jpeg";
import img26 from "../../assets/img26.jpeg";
import img27 from "../../assets/img27.jpeg";
import img28 from "../../assets/img28.jpeg";
import img29 from "../../assets/img29.jpeg";
import img30 from "../../assets/img30.jpeg";
import img31 from "../../assets/img31.jpeg";

// import img32 from "../../assets/img32.jpeg";

import vid1 from "../../assets/video1.mp4";
import vid2  from "../../assets/video2.mp4";
import vid3  from "../../assets/video3.mp4";
import vid4  from "../../assets/video4.mp4";

import web1 from "../../assets/web1.jpg";
import web2 from "../../assets/web2.jpg";
import web3 from "../../assets/web3.jpg";

import media1 from "../../assets/media1.jpg";
import media2 from "../../assets/media2.jpg";
import media3 from "../../assets/media3.jpg"; 

/* ══════════════════════════════════════
   PORTFOLIO DATA
══════════════════════════════════════ */
const PROJECTS = [
  { id: 1,  type: "image", src: img1,  cat: "logo",  tag: "Branding"   },
  { id: 2,  type: "image", src: img2,  cat: "logo",       tag: "Web Dev"    },
  { id: 3,  type: "image", src: img3,  cat: "logo",       tag: "Social"     },
  { id: 4,  type: "image", src: img4,  cat: "logo",       tag: "SEO"        },
  { id: 5,  type: "image", src: img5,  cat: "logo",       tag: "App Dev"    },
  { id: 6,  type: "image", src: img6,  cat: "logo",       tag: "Google Ads" },
  { id: 7,  type: "image", src: img7,  cat: "logo",       tag: "Web Dev"    },
  { id: 8,  type: "image", src: img8,  cat: "logo",  tag: "WhatsApp"   },
  { id: 9,  type: "video", src: vid1,  cat: "video",     tag: "Video"      },
  { id: 10, type: "image", src: img9,  cat: "logo",  tag: "Branding"   },
  { id: 11, type: "image", src: img10, cat: "logo",       tag: "Web Dev"    },
  { id: 12, type: "image", src: img11, cat: "smm",       tag: "Social"     },
  { id: 13, type: "image", src: img12, cat: "seo",       tag: "SEO"        },
  { id: 14, type: "image", src: img13, cat: "app",       tag: "App Dev"    },
  { id: 15, type: "video", src: vid2,  cat: "video",     tag: "Video"      },
  { id: 16, type: "image", src: img14, cat: "sem",       tag: "Google Ads" },
  { id: 17, type: "image", src: img15, cat: "branding",  tag: "Branding"   },
  { id: 18, type: "image", src: img16, cat: "design",       tag: "ERP"        },
  { id: 19, type: "image", src: img17, cat: "design",       tag: "Web Dev"    },
  { id: 20, type: "image", src: img18, cat: "design",       tag: "Social"     },
  { id: 21, type: "image", src: img19, cat: "design",        tag: "AI Chatbot" },
  { id: 22, type: "image", src: img20, cat: "design",  tag: "WhatsApp"   },
  { id: 23, type: "video", src: vid3,  cat: "video",     tag: "Video"      },
  { id: 24, type: "image", src: img21, cat: "design",  tag: "Branding"   },
  { id: 25, type: "image", src: img22, cat: "design",       tag: "Web Dev"    },
  { id: 26, type: "image", src: img23, cat: "design",       tag: "SEO"        },
  { id: 27, type: "image", src: img24, cat: "app",       tag: "App Dev"    },
  { id: 28, type: "image", src: img25, cat: "sem",       tag: "Google Ads" },
  { id: 29, type: "image", src: img26, cat: "erp",       tag: "ERP"        },
  { id: 30, type: "image", src: img27, cat: "smm",       tag: "Social"     },
  { id: 31, type: "image", src: img28, cat: "ai",        tag: "AI Chatbot" },
  { id: 32, type: "video", src: vid4,  cat: "video",     tag: "Video"      },
  { id: 33, type: "image", src: img29, cat: "branding",  tag: "Branding"   },
  { id: 34, type: "image", src: img30, cat: "web",       tag: "Web Dev"    },
  { id: 35, type: "image", src: img31, cat: "whatsapp",  tag: "WhatsApp"   },
  // { id: 36, type: "image", src: img32, cat: "seo",       tag: "SEO"        },
  {id: 37, type: "image", src: web1,  cat: "web",       tag: "Web Dev"    },
  {id: 38, type: "image", src: web2,  cat: "web",       tag: "Web Dev"    },
  {id: 39, type: "image", src: web3,  cat: "web",       tag: "Web Dev"    },
  {id: 40, type: "image", src: media1,  cat: "social",       tag: "Social"    },
  {id: 41, type: "image", src: media2,  cat: "social",       tag: "Social"    },
  {id: 42, type: "image", src: media3,  cat: "social",       tag: "Social"    },  
];



const CATEGORIES = [
  { key: "all",      label: "All Work"   },
  { key: "design",     label: "Logo Design" },
  {key: "logo",  label:"Our Client"},
   {key: "web", label:"WEBSITE"},
   {key:"social", label:"SOCIAL MEDIA"},
   {key:"video", label:"VIDEO PRODUCTION"},
];

/* ══════════════════════════════════════
   LIGHTBOX
══════════════════════════════════════ */
function Lightbox({ project, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft")  onPrev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div className="lb-overlay" onClick={onClose}>
      <button className="lb-close" onClick={onClose} aria-label="Close">✕</button>
      <button className="lb-nav lb-nav--prev" onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous">‹</button>
      <button className="lb-nav lb-nav--next" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next">›</button>

      <div className="lb-panel" onClick={(e) => e.stopPropagation()}>
        {project.type === "video" ? (
          <video
            className="lb-media"
            src={project.src}
            controls
            autoPlay
            playsInline
          />
        ) : (
          <img className="lb-media" src={project.src} alt={project.tag} />
        )}
        <div className="lb-tag">{project.tag}</div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   PORTFOLIO ITEM
══════════════════════════════════════ */
function PortItem({ project, index, onOpen }) {
  const ref = useRef(null);

  /* Scroll reveal */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* 3D tilt */
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(hover: none)").matches) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width  - 0.5) * 12;
      const y = ((e.clientY - r.top)  / r.height - 0.5) * 12;
      el.style.transform = `perspective(800px) rotateX(${-y}deg) rotateY(${x}deg) scale(1.04)`;
      el.style.transition = "transform 0.06s linear";
    };
    const onLeave = () => {
      el.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale(1)";
      el.style.transition = "transform 0.55s cubic-bezier(0.22,1,0.36,1)";
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  /* video preview on hover */
  const videoRef = useRef(null);
  const handleMouseEnter = () => { if (videoRef.current) videoRef.current.play(); };
  const handleMouseLeave = () => {
    if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
  };

  return (
    <div
      ref={ref}
      className="pitem"
      style={{ "--stagger": `${(index % 12) * 0.055}s` }}
      onClick={() => onOpen(project)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen(project)}
      aria-label={`View ${project.tag} project`}
    >
      {/* Media */}
      <div className="pitem__media">
        {project.type === "video" ? (
          <>
            <video
              ref={videoRef}
              src={project.src}
              className="pitem__video"
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="pitem__play">
              <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </>
        ) : (
          <img src={project.src} alt={project.tag} className="pitem__img" loading="lazy" />
        )}

        {/* Hover overlay */}
        <div className="pitem__overlay">
          <div className="pitem__overlay-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              <line x1="11" y1="8" x2="11" y2="14"/>
              <line x1="8" y1="11" x2="14" y2="11"/>
            </svg>
          </div>
        </div>

        {/* Category tag */}
        <span className="pitem__tag">{project.tag}</span>

        {/* Video badge */}
        {project.type === "video" && <span className="pitem__video-badge">▶ Video</span>}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   MAIN
══════════════════════════════════════ */
export default function Portfolio() {
  const [activeCat, setActiveCat] = useState("all");
  const [lightbox, setLightbox]   = useState(null);
  const [animating, setAnimating] = useState(false);

  const heroRef    = useRef(null);
  const filterRef  = useRef(null);

  /* Hero reveal */
  useEffect(() => {
    [heroRef, filterRef].forEach((r) => {
      if (!r.current) return;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { r.current.classList.add("revealed"); obs.disconnect(); } },
        { threshold: 0.1 }
      );
      obs.observe(r.current);
    });
  }, []);

  const filtered = activeCat === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.cat === activeCat);

  /* Filter with exit-enter animation */
  const handleFilter = useCallback((key) => {
    if (key === activeCat) return;
    setAnimating(true);
    setTimeout(() => { setActiveCat(key); setAnimating(false); }, 260);
  }, [activeCat]);

  /* Lightbox navigation */
  const currentIndex = lightbox ? filtered.findIndex((p) => p.id === lightbox.id) : -1;
  const openNext = useCallback(() => {
    if (currentIndex < filtered.length - 1) setLightbox(filtered[currentIndex + 1]);
  }, [currentIndex, filtered]);
  const openPrev = useCallback(() => {
    if (currentIndex > 0) setLightbox(filtered[currentIndex - 1]);
  }, [currentIndex, filtered]);

  return (
    <main className="port-page">

      {/* ── HERO ── */}
      <section className="port-hero" ref={heroRef}>
        <div className="port-hero__orb port-hero__orb--1" />
        <div className="port-hero__orb port-hero__orb--2" />
        <div className="port-hero__orb port-hero__orb--3" />
        <div className="port-hero__grid" />

        <div className="port-hero__content">
          <div className="port-hero__badge">
            <span className="port-hero__dot" />
            Our Work
          </div>
          <h1 className="port-hero__title">
            <span>CGI Digital</span>
            <span className="port-hero__title--gold">Excellence</span>
          </h1>
          <p className="port-hero__sub">
            30+ projects. Every pixel intentional. Every campaign result-driven.
          </p>
          <div className="port-hero__stats">
            {[["30+","Clients"],["120+","Projects"],["6+","Years"],["4.9★","Rating"]].map(([n, l]) => (
              <div key={l} className="port-hero__stat">
                <span className="port-hero__stat-n">{n}</span>
                <span className="port-hero__stat-l">{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="port-hero__scroll">
          <div className="port-hero__scroll-line" />
        </div>
      </section>

      {/* ── FILTERS ── */}
      <div className="port-filters" ref={filterRef}>
        <div className="port-filters__track">
          {CATEGORIES.map(({ key, label }) => (
            <button
              key={key}
              className={`pf-btn ${activeCat === key ? "pf-btn--active" : ""}`}
              onClick={() => handleFilter(key)}
            >
              {label}
              {activeCat === key && <span className="pf-btn__pip" />}
            </button>
          ))}
        </div>
      </div>

      {/* ── COUNT ── */}
      <div className="port-count">
        <span>{filtered.length}</span> {filtered.length === 1 ? "project" : "projects"}
        {activeCat !== "all" && <> in <strong>{CATEGORIES.find(c => c.key === activeCat)?.label}</strong></>}
      </div>

      {/* ── MASONRY GRID ── */}
      <div className="port-grid-wrap">
        <div className={`port-grid ${animating ? "port-grid--out" : "port-grid--in"}`}>
          {filtered.map((p, i) => (
            <PortItem
              key={p.id}
              project={p}
              index={i}
              onOpen={setLightbox}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="port-empty">
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            <div>No projects in this category yet.</div>
          </div>
        )}
      </div>

      {/* ── CTA ── */}
      <section className="port-cta">
        <div className="port-cta__orb" />
        <h2 className="port-cta__title">Ready to Build Something Great?</h2>
        <p className="port-cta__sub">Let's turn your vision into a powerful digital reality.</p>
        <a href="/contact" className="port-cta__btn">
          Start a Project ✦
        </a>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <Lightbox
          project={lightbox}
          onClose={() => setLightbox(null)}
          onNext={openNext}
          onPrev={openPrev}
        />
      )}
    </main>
  );
}