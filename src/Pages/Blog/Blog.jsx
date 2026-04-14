import React, { useState, useMemo } from "react";
import "./Blog.css";

const CATEGORIES = [
  { id: "all", label: "All Articles" },
  { id: "seo", label: "SEO" },
  { id: "sem", label: "Google Ads" },
  { id: "smm", label: "Social Media" },
  { id: "webdev", label: "Web Dev" },
  { id: "branding", label: "Branding" },
  { id: "ai", label: "AI & Chatbots" },
  { id: "video", label: "Video" },
  { id: "whatsapp", label: "WhatsApp" },
];

const TAGS = ["#SEO2025","#GoogleAds","#AIMarketing","#WebDesign","#PersonalBranding","#WhatsAppAPI","#ContentMarketing","#VideoMarketing","#ERPSolutions","#React","#Conversion","#PuneBusiness"];

const FEATURED = {
  cat: "seo", emoji: "🚀",
  bg: "linear-gradient(135deg,#1a003a,#2d0058,#3b0080)",
  label: "SEO · 12 min read",
  title: "10 SEO Strategies That Will Dominate Google Rankings in 2025",
  excerpt: "Google's algorithm has evolved dramatically. We break down the exact strategies our team uses to push clients to page one — including E-E-A-T optimisation, AI-generated content handling, and topical authority mapping.",
  avatar: "RK", author: "Rahul Kulkarni", date: "Apr 10, 2025", time: "12 min read",
};

const ALL_POSTS = [
  { id:1, cat:"sem",      emoji:"🎯", bg:"linear-gradient(135deg,#1a1a00,#3d2800,#5a3a00)", tc:"#fbbf24", catLabel:"Google Ads · SEM",     title:"How to Get 5x ROAS on Google Ads: A Complete 2025 Guide",                          excerpt:"Stop burning budget. Learn the exact bid strategies, audience layering, and ad copy formulas that deliver consistent 5x returns.",   avatar:"PR", author:"Priya Rane",      date:"Mar 28, 2025", time:"9 min"  },
  { id:2, cat:"smm",      emoji:"📱", bg:"linear-gradient(135deg,#1a0030,#3d0060,#6b21a8)", tc:"#c084fc", catLabel:"Social Media Marketing",  title:"Instagram Algorithm 2025: What Actually Works for Reach & Growth",                  excerpt:"The algorithm shifted — again. Here's how to crack reach, Reels distribution, and convert followers into paying customers.",       avatar:"SJ", author:"Sneha Joshi",     date:"Mar 20, 2025", time:"7 min"  },
  { id:3, cat:"ai",       emoji:"🧠", bg:"linear-gradient(135deg,#000a2a,#001a50,#1e3a8a)", tc:"#60a5fa", catLabel:"AI & Chatbots",            title:"AI Chatbots vs. Live Support: Which Converts Better in 2025?",                      excerpt:"We tested 3 months of data from 12 clients. The results on response time, conversion rate, and satisfaction will surprise you.",   avatar:"AM", author:"Amit Mehta",      date:"Mar 15, 2025", time:"10 min" },
  { id:4, cat:"webdev",   emoji:"⚡", bg:"linear-gradient(135deg,#001a20,#003040,#0e4f6e)", tc:"#22d3ee", catLabel:"Web Development",          title:"Why Your Website Speed is Killing Your Conversions (And How to Fix It)",            excerpt:"A 1-second delay costs you 7% in conversions. Here's how to audit Core Web Vitals and make your website blazing fast in 2025.",  avatar:"VD", author:"Vikram Desai",    date:"Mar 8, 2025",  time:"8 min"  },
  { id:5, cat:"branding", emoji:"👤", bg:"linear-gradient(135deg,#1a000d,#3d001a,#7c0030)", tc:"#f472b6", catLabel:"Personal Branding",        title:"Build a LinkedIn Personal Brand that Generates Inbound Leads Every Week",           excerpt:"Our 90-day LinkedIn framework helped 3 founders go from 500 to 20K+ followers. Here's the exact content and engagement playbook.", avatar:"NP", author:"Neha Patil",      date:"Feb 28, 2025", time:"11 min" },
  { id:6, cat:"whatsapp", emoji:"💬", bg:"linear-gradient(135deg,#001a0a,#003018,#065f46)", tc:"#34d399", catLabel:"WhatsApp API",              title:"WhatsApp Marketing Automation: Generate ₹10L in Sales on Autopilot",               excerpt:"How one restaurant chain used WhatsApp broadcast + cart automation to generate ₹10 lakh in revenue in just 30 days.",             avatar:"RK", author:"Rahul Kulkarni",  date:"Feb 18, 2025", time:"6 min"  },
  { id:7, cat:"video",    emoji:"🎬", bg:"linear-gradient(135deg,#1a0000,#3a0010,#7f1d1d)", tc:"#f87171", catLabel:"Video Production",          title:"Short-Form Video Strategy: How Reels & Shorts Drive B2B Leads in 2025",            excerpt:"Short-form video isn't just for B2C. Repurpose one long video into 12 pieces of content that fill your pipeline.",               avatar:"SP", author:"Siddharth Patil", date:"Feb 10, 2025", time:"8 min"  },
  { id:8, cat:"seo",      emoji:"🔍", bg:"linear-gradient(135deg,#001800,#003000,#166534)", tc:"#4ade80", catLabel:"SEO",                       title:"Local SEO Mastery: Rank #1 on Google Maps for Your Pune Business",                  excerpt:"A step-by-step local SEO playbook for Pune businesses — GMB optimisation, local citation building, and review strategy.",        avatar:"PR", author:"Priya Rane",      date:"Jan 30, 2025", time:"9 min"  },
  { id:9, cat:"ai",       emoji:"🤖", bg:"linear-gradient(135deg,#0d001a,#1e0035,#4c1d95)", tc:"#a78bfa", catLabel:"AI & Automation",           title:"GPT-4 for Business: 15 Real Use Cases That Save 20+ Hours Per Week",               excerpt:"How to embed AI into your marketing, support, and operations workflows for massive time and cost savings.",                        avatar:"AM", author:"Amit Mehta",      date:"Jan 22, 2025", time:"13 min" },
  { id:10,cat:"branding", emoji:"✨", bg:"linear-gradient(135deg,#1a001a,#3a0050,#6d28d9)", tc:"#c4b5fd", catLabel:"Personal Branding",        title:"The 7-Step Framework to Build a ₹1 Crore Personal Brand Online",                   excerpt:"How top founders monetise expertise through digital channels, speaking, and consulting.",                                         avatar:"NP", author:"Neha Patil",      date:"Jan 12, 2025", time:"10 min" },
  { id:11,cat:"webdev",   emoji:"🛒", bg:"linear-gradient(135deg,#001a18,#003830,#134e4a)", tc:"#2dd4bf", catLabel:"E-commerce",                title:"Shopify vs WooCommerce in 2025: Which Platform Wins for Indian Businesses?",        excerpt:"A head-to-head comparison with real client data on costs, features, SEO, and support to guide your choice.",                     avatar:"VD", author:"Vikram Desai",    date:"Jan 5, 2025",  time:"11 min" },
  { id:12,cat:"sem",      emoji:"💰", bg:"linear-gradient(135deg,#1a1000,#3a2800,#78350f)", tc:"#fbbf24", catLabel:"SEM",                       title:"Why Your Google Ads Are Failing: 12 Common Mistakes & How to Fix Them",            excerpt:"Most businesses waste 40% of their ad budget on these fixable mistakes. Here's how to diagnose and fix every one.",              avatar:"PR", author:"Priya Rane",      date:"Dec 28, 2024", time:"9 min"  },
];

const VISIBLE_INIT = 9;

export default function Blog() {
  const [activeCat, setActiveCat] = useState("all");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(VISIBLE_INIT);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return ALL_POSTS.filter(p => {
      const catMatch = activeCat === "all" || p.cat === activeCat;
      const qMatch = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.catLabel.toLowerCase().includes(q);
      return catMatch && qMatch;
    });
  }, [activeCat, search]);

  const showFeatured = activeCat === "all" || activeCat === FEATURED.cat;
  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <section className="blog-section">
      <div className="b-orb b-orb-1" /><div className="b-orb b-orb-2" /><div className="b-orb b-orb-3" />
      <div className="b-grid" />

      {/* Hero */}
      <div className="blog-hero">
        <div className="b-badge"><span className="b-dot" />Knowledge Hub</div>
        <h1 className="blog-title">Insights, Strategies & Digital Trends</h1>
        <p className="blog-sub">Expert articles on digital marketing, web development, branding, and technology — curated by the CGI Crafters team.</p>

        <div className="search-wrap">
          <input className="search-input" type="text" placeholder="Search articles, topics, strategies..."
            value={search} onChange={e => { setSearch(e.target.value); setVisibleCount(VISIBLE_INIT); }} />
          <span className="search-icon">🔍</span>
        </div>

        <div className="cat-row">
          {CATEGORIES.map(c => (
            <div key={c.id} className={`cat-pill ${activeCat === c.id ? "active" : ""}`}
              onClick={() => { setActiveCat(c.id); setVisibleCount(VISIBLE_INIT); }}>{c.label}</div>
          ))}
        </div>
      </div>

      <div className="blog-inner">

        {/* Featured */}
        {showFeatured && !search && (
          <div className="featured-card">
            <div className="featured-img" style={{ background: FEATURED.bg }}>
              <span style={{ fontSize: 80, position: "relative", zIndex: 1 }}>{FEATURED.emoji}</span>
            </div>
            <div className="featured-body">
              <div className="f-featured-tag">✦ Featured</div>
              <div className="f-cat">{FEATURED.label}</div>
              <div className="f-gold-bar" />
              <h2 className="f-title">{FEATURED.title}</h2>
              <p className="f-excerpt">{FEATURED.excerpt}</p>
              <div className="f-meta">
                <div className="f-avatar">{FEATURED.avatar}</div>
                <div>
                  <div className="f-author-name">{FEATURED.author}</div>
                  <div style={{ display: "flex", gap: 10, marginTop: 2 }}>
                    <span className="f-date">{FEATURED.date}</span>
                    <span className="f-read-time">⏱ {FEATURED.time}</span>
                  </div>
                </div>
              </div>
              <div className="read-more">Read Full Article <span>→</span></div>
            </div>
          </div>
        )}

        {/* Tags */}
        {activeCat === "all" && !search && (
          <div className="tags-row">
            {TAGS.map((t, i) => (
              <span key={t} className="tag-chip" style={{ animationDelay: `${i * 0.3}s` }}>{t}</span>
            ))}
          </div>
        )}

        {/* Cards */}
        <div className="cards-grid">
          {visible.map((p, i) => (
            <div key={p.id} className="blog-card" style={{ animationDelay: `${i * 0.06}s` }}>
              <div className="card-img" style={{ background: p.bg }}>
                <span>{p.emoji}</span>
                <div className="card-cat-tag" style={{ "--tc": p.tc }}>{p.catLabel.split(" · ")[0]}</div>
              </div>
              <div className="card-body">
                <div className="c-cat">{p.catLabel}</div>
                <div className="c-gold-bar" />
                <h3 className="c-title">{p.title}</h3>
                <p className="c-excerpt">{p.excerpt}</p>
                <div className="c-meta">
                  <div className="c-author">
                    <div className="c-avatar">{p.avatar}</div>
                    <div><div className="c-name">{p.author}</div><div className="c-date">{p.date}</div></div>
                  </div>
                  <span className="c-read">{p.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            <div style={{ fontFamily: "'Cinzel',serif", color: "#fde68a", fontSize: 18, marginBottom: 8 }}>No Articles Found</div>
            <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 13.5 }}>Try a different keyword or browse all categories.</div>
          </div>
        )}

        {hasMore && (
          <div className="load-more-wrap">
            <button className="load-more-btn" onClick={() => setVisibleCount(v => v + 6)}>Load More Articles ✦</button>
          </div>
        )}

        {/* Newsletter */}
        <div className="newsletter">
          <div>
            <div className="nl-title">📬 Never Miss an Insight</div>
            <p className="nl-sub">Join 5,000+ marketers getting weekly digital growth tips, case studies, and industry news — straight to your inbox.</p>
          </div>
          <div className="nl-form">
            <input className="nl-input" type="email" placeholder="your@email.com" />
            <button className="nl-btn">Subscribe Free ✦</button>
          </div>
        </div>

      </div>
    </section>
  );
}