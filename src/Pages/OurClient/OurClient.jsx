import React, { useEffect, useRef, useState } from "react";
import "./OurClient.css";
import img2 from "../../assets/img2.jpeg";
/* ══════════════════════════════════════
   CLIENT DATA
   Replace src with your actual logo images
   import logo1 from "./assets/logo1.png"; etc.
══════════════════════════════════════ */
const CLIENTS = [
  { id: 1,  name: "GridPro Ventures",       src: null, initials: "GP",  industry: "Ventures"    },
  { id: 2,  name: "Trueview Security",       src: img2, initials: "TV",  industry: "Security"    },
  { id: 3,  name: "Evolve Energy Group",     src: null, initials: "EE",  industry: "Energy"      },
  { id: 4,  name: "Ruvinsys Global",         src: null, initials: "RG",  industry: "IT"          },
  { id: 5,  name: "Vapco Paints",            src: null, initials: "VP",  industry: "Paints"      },
  { id: 6,  name: "Ruhfus Hydrauliks",       src: null, initials: "RH",  industry: "Engineering" },
  { id: 7,  name: "Rightways Supply",        src: null, initials: "RS",  industry: "Logistics"   },
  { id: 8,  name: "Avyanna Tech",            src: null, initials: "AT",  industry: "Technology"  },
  { id: 9,  name: "Manks Industries",        src: null, initials: "MI",  industry: "Industry"    },
  { id: 10, name: "AutoMech Solutions",      src: null, initials: "AM",  industry: "Auto"        },
  { id: 11, name: "Massmai Group",           src: null, initials: "MG",  industry: "Group"       },
  { id: 12, name: "Diamond Jewels",          src: null, initials: "DJ",  industry: "Jewellery"   },
  { id: 13, name: "TechForge Systems",       src: null, initials: "TF",  industry: "Tech"        },
  { id: 14, name: "NovaBuild Infra",         src: null, initials: "NB",  industry: "Infra"       },
  { id: 15, name: "PurePath Organics",       src: null, initials: "PP",  industry: "Organic"     },
  { id: 16, name: "SkyNet Communications",   src: null, initials: "SN",  industry: "Telecom"     },
  { id: 17, name: "GreenLeaf Agro",          src: null, initials: "GL",  industry: "Agriculture" },
  { id: 18, name: "SwiftCargo Logistics",    src: null, initials: "SC",  industry: "Logistics"   },
  { id: 19, name: "ProHealth Clinics",       src: null, initials: "PH",  industry: "Healthcare"  },
  { id: 20, name: "LuxeStone Interiors",     src: null, initials: "LS",  industry: "Interiors"   },
  { id: 21, name: "BrightMind EdTech",       src: null, initials: "BM",  industry: "Education"   },
  { id: 22, name: "IronClad Security",       src: null, initials: "IC",  industry: "Security"    },
  { id: 23, name: "PeakFit Studios",         src: null, initials: "PF",  industry: "Fitness"     },
  { id: 24, name: "ArcLight Studios",        src: null, initials: "AL",  industry: "Creative"    },
];

/* Infinite marquee rows — split clients into 3 rows */
const ROW1 = CLIENTS.slice(0, 8);
const ROW2 = CLIENTS.slice(8, 16);
const ROW3 = CLIENTS.slice(16, 24);

/* Stats */
const STATS = [
  { num: "200+",  label: "Happy Clients"     },
  { num: "15+",   label: "Industries Served" },
  { num: "6+",    label: "Years of Trust"    },
  { num: "4.9★",  label: "Average Rating"    },
];

/* Industries for filter */
const INDUSTRIES = ["All", "Tech", "Logistics", "Energy", "Security", "Healthcare", "Education", "Interiors", "Fitness", "Creative"];

/* ── Scroll reveal hook ── */
function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("revealed"); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ── Logo Card ── */
function ClientCard({ client, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("revealed"); obs.disconnect(); } },
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
      const x = ((e.clientX - r.left) / r.width  - 0.5) * 14;
      const y = ((e.clientY - r.top)  / r.height - 0.5) * 14;
      el.style.transform = `perspective(700px) rotateX(${-y}deg) rotateY(${x}deg) scale(1.05)`;
      el.style.transition = "transform 0.07s linear";
    };
    const onLeave = () => {
      el.style.transform = "perspective(700px) rotateX(0) rotateY(0) scale(1)";
      el.style.transition = "transform 0.55s cubic-bezier(0.22,1,0.36,1)";
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="client-card"
      style={{ "--stagger": `${(index % 8) * 0.07}s` }}
    >
      <div className="client-card__inner">
        {/* Shimmer sweep */}
        <div className="client-card__shimmer" />

        {/* Logo area */}
        <div className="client-card__logo">
          {client.src ? (
            <img src={client.src} alt={client.name} className="client-card__img" />
          ) : (
            <div className="client-card__initials">{client.initials}</div>
          )}
        </div>

        {/* Name & industry on hover */}
        <div className="client-card__info">
          <div className="client-card__name">{client.name}</div>
          <div className="client-card__industry">{client.industry}</div>
        </div>

        {/* Gold bar */}
        <div className="client-card__bar" />
      </div>
    </div>
  );
}

/* ── Marquee Row ── */
function MarqueeRow({ items, reverse = false, speed = 40 }) {
  const doubled = [...items, ...items]; // duplicate for seamless loop
  return (
    <div className={`marquee-row ${reverse ? "marquee-row--reverse" : ""}`}>
      <div
        className="marquee-track"
        style={{ "--speed": `${speed}s`, "--dir": reverse ? "reverse" : "normal" }}
      >
        {doubled.map((c, i) => (
          <div className="marquee-item" key={`${c.id}-${i}`}>
            <div className="mq-card">
              <div className="mq-card__logo">
                {c.src ? (
                  <img src={c.src} alt={c.name} className="mq-card__img" />
                ) : (
                  <span className="mq-card__initials">{c.initials}</span>
                )}
              </div>
              <span className="mq-card__name">{c.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════ */
export default function OurClients() {
  const [activeIndustry, setActiveIndustry] = useState("All");
  const [search, setSearch] = useState("");

  const heroRef    = useReveal(0.1);
  const statsRef   = useReveal(0.1);
  const gridRef    = useReveal(0.08);
  const marqueeRef = useReveal(0.1);
  const ctaRef     = useReveal(0.1);

  const filtered = CLIENTS.filter((c) => {
    const inInd = activeIndustry === "All" || c.industry === activeIndustry;
    const inQ   = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.industry.toLowerCase().includes(search.toLowerCase());
    return inInd && inQ;
  });

  return (
    <main className="clients-page">

      {/* ── HERO ── */}
      <section className="clients-hero" ref={heroRef}>
        <div className="clients-hero__orb clients-hero__orb--1" />
        <div className="clients-hero__orb clients-hero__orb--2" />
        <div className="clients-hero__orb clients-hero__orb--3" />
        <div className="clients-hero__grid" />

        <div className="clients-hero__content">
          <div className="clients-hero__badge">
            <span className="clients-hero__dot" />
            Trusted By Brands
          </div>
          <h1 className="clients-hero__title">
            <span>Our Proud</span>
            <span className="clients-hero__title--gold">Clients</span>
          </h1>
          <p className="clients-hero__sub">
            200+ businesses across India and globally trust CGI Crafters to grow
            their brand, generate leads, and dominate their markets.
          </p>
        </div>

        <div className="clients-hero__scroll">
          <div className="clients-hero__scroll-line" />
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="clients-stats" ref={statsRef}>
        {STATS.map(({ num, label }) => (
          <div className="clients-stat" key={label}>
            <span className="clients-stat__num">{num}</span>
            <span className="clients-stat__label">{label}</span>
          </div>
        ))}
      </div>

      {/* ── MARQUEE (auto-scroll logos) ── */}
      <div className="clients-marquee-section" ref={marqueeRef}>
        <div className="clients-marquee-label">
          <span className="cml-dot" />
          Trusted by brands across industries
        </div>
        <MarqueeRow items={ROW1} reverse={false} speed={38} />
        <MarqueeRow items={ROW2} reverse={true}  speed={44} />
        <MarqueeRow items={ROW3} reverse={false} speed={36} />
      </div>

      {/* ── FILTER & SEARCH ── */}
      <div className="clients-filter-section">
        <div className="clients-filter-section__inner">

          {/* Search */}
          <div className="clients-search-wrap">
            <input
              type="text"
              className="clients-search"
              placeholder="Search clients or industry..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="clients-search__icon">🔍</span>
          </div>

          {/* Industry filter */}
          <div className="clients-industry-row">
            {INDUSTRIES.map((ind) => (
              <button
                key={ind}
                className={`ci-btn ${activeIndustry === ind ? "ci-btn--active" : ""}`}
                onClick={() => setActiveIndustry(ind)}
              >
                {ind}
                {activeIndustry === ind && <span className="ci-btn__pip" />}
              </button>
            ))}
          </div>

          <div className="clients-count">
            Showing <span>{filtered.length}</span> client{filtered.length !== 1 ? "s" : ""}
            {activeIndustry !== "All" && <> in <strong>{activeIndustry}</strong></>}
          </div>
        </div>
      </div>

      {/* ── LOGO GRID ── */}
      <div className="clients-grid-section" ref={gridRef}>
        <div className="clients-grid">
          {filtered.map((c, i) => (
            <ClientCard key={c.id} client={c} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="clients-empty">
            <div style={{ fontSize: 44, marginBottom: 14 }}>🔍</div>
            <div className="clients-empty__title">No clients found</div>
            <div className="clients-empty__sub">Try a different search or industry filter.</div>
          </div>
        )}
      </div>

      {/* ── TRUST STRIP ── */}
      <div className="trust-strip">
        <div className="trust-strip__inner">
          {["Meta Business Partner","Google Partner","ISO Certified","5★ Rated Agency","Pune's #1 Agency"].map((t) => (
            <div className="trust-item" key={t}>
              <span className="trust-item__dot">✦</span>
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="clients-cta" ref={ctaRef}>
        <div className="clients-cta__orb" />
        <div className="clients-cta__content">
          <div className="clients-cta__badge">
            <span className="clients-hero__dot" />
            Join Our Client Family
          </div>
          <h2 className="clients-cta__title">Be Our Next Success Story</h2>
          <p className="clients-cta__sub">
            Join 200+ brands that trust CGI Crafters to grow their digital presence,
            generate leads, and build lasting market authority.
          </p>
          <div className="clients-cta__btns">
            <a href="/contact" className="btn-primary">Get Free Consultation ✦</a>
            <a href="/portfolio" className="btn-outline">View Our Work →</a>
          </div>
        </div>
      </section>

    </main>
  );
}