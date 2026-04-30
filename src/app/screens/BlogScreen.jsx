"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const C = {
  primary: "#F97316",
  primaryDark: "#EA6A0A",
  primaryLight: "#FFF3E8",
  blue: "#0891B2",
  blueLight: "#ECFEFF",
  navy: "#0C2340",
  bodyText: "#374151",
  mutedText: "#6B7280",
  border: "#E5E7EB",
  white: "#FFFFFF",
  offWhite: "#F9FAFB",
  serif: "'Playfair Display', Georgia, serif",
  sans: "'DM Sans', system-ui, sans-serif",
};

const featured = {
  tag: "BIS Update", date: "April 20, 2025",
  title: "BIS Conformity Assessment Amendment Regulations 2026 — What Manufacturers Must Know",
  excerpt: "The Bureau of Indian Standards has released major amendments to its Conformity Assessment Regulations. Here's a complete breakdown of what's changed, who is affected, and the new timelines businesses must comply with.",
  readTime: "8 min read",
  img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80&fit=crop",
};

const posts = [
  { tag: "EPR", date: "April 15, 2025", title: "EPR Registration for E-Waste: Complete Guide for Importers in 2025", excerpt: "Everything you need to know about EPR registration for electronic products — applicability, process, timelines, and common mistakes to avoid.", readTime: "6 min read", img: "https://images.unsplash.com/photo-1532996122724-e3c0a0e3e5d3?w=500&q=80&fit=crop" },
  { tag: "WPC", date: "April 10, 2025", title: "WPC-ETA Approval for IoT Devices: New Requirements Under Saralsanchar Portal", excerpt: "The WPC Wing has updated its approval process. We break down the new Saralsanchar portal workflow for wireless and IoT device importers.", readTime: "5 min read", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80&fit=crop" },
  { tag: "ISO", date: "April 5, 2025", title: "ISO 9001:2015 vs ISO 9001:2025 — What's Changing and How to Prepare", excerpt: "ISO is revising the 9001 standard. Here's what the upcoming changes mean for certified organizations and those planning to get certified.", readTime: "7 min read", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80&fit=crop" },
  { tag: "TEC", date: "March 28, 2025", title: "MTCTE Certification: Complete Product List and Updated Timelines for 2025", excerpt: "The list of products requiring mandatory TEC/MTCTE certification has been expanded. Check if your product is now included.", readTime: "5 min read", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80&fit=crop" },
  { tag: "BEE", date: "March 20, 2025", title: "BEE Star Rating: New Minimum Energy Performance Standards for ACs and Refrigerators", excerpt: "BEE has revised its energy performance standards for air conditioners and refrigerators effective April 2025.", readTime: "4 min read", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80&fit=crop" },
  { tag: "LMPC", date: "March 12, 2025", title: "LMPC Compliance for E-Commerce Sellers: MRP Labelling Rules You Can't Ignore", excerpt: "E-commerce platforms are now strictly enforcing LMPC labelling compliance. A complete guide for online sellers and brand owners.", readTime: "5 min read", img: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=500&q=80&fit=crop" },
  { tag: "BIS", date: "March 5, 2025", title: "BIS CRS Registration: 12 New Product Categories Added for Mandatory Compliance", excerpt: "BIS has added 12 new electronic product categories to the Compulsory Registration Scheme. Check if your product is now covered.", readTime: "4 min read", img: "https://images.unsplash.com/photo-1581092921461-39d9a338b0cb?w=500&q=80&fit=crop" },
  { tag: "CDSCO", date: "Feb 25, 2025", title: "Medical Device Registration under MDR 2017: Step-by-Step Process for Importers", excerpt: "A comprehensive guide to registering medical devices in India under the Medical Devices Rules 2017 — from classification to certificate.", readTime: "9 min read", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80&fit=crop" },
];

const categories = ["All", "BIS", "EPR", "WPC", "TEC", "BEE", "LMPC", "ISO", "CDSCO"];

const tagColors = {
  BIS:   { bg: "#FFF3E8", text: "#EA6A0A" },
  EPR:   { bg: "#DCFCE7", text: "#166534" },
  WPC:   { bg: "#DBEAFE", text: "#1e40af" },
  TEC:   { bg: "#EDE9FE", text: "#5b21b6" },
  BEE:   { bg: "#FEF3C7", text: "#92400e" },
  LMPC:  { bg: "#FFE4E6", text: "#9f1239" },
  ISO:   { bg: "#ECFEFF", text: "#0891B2" },
  CDSCO: { bg: "#FDF2F8", text: "#9d174d" },
};

const heroStats = [
  { value: "150+", label: "Articles Published", icon: "📝" },
  { value: "Weekly", label: "Update Frequency", icon: "📅" },
  { value: "10+", label: "Compliance Topics", icon: "📋" },
  { value: "Free", label: "Always", icon: "🎁" },
];

export default function BlogScreen() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? posts : posts.filter(p => p.tag === activeCategory);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: C.white, fontFamily: C.sans, color: C.bodyText }}>
      <style>{`
        * { box-sizing: border-box; }

        .blog-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
        @media (max-width: 900px) { .blog-hero-grid { grid-template-columns: 1fr; } .hero-right { display: none; } }

        .stat-card { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.18); border-radius: 14px; padding: 18px 20px; backdrop-filter: blur(6px); }

        .post-card { background:#fff; border-radius:16px; border:1.5px solid ${C.border}; overflow:hidden; cursor:pointer; transition:all 0.25s ease; display:flex; flex-direction:column; }
        .post-card:hover { border-color:${C.primary}; transform:translateY(-4px); box-shadow:0 16px 40px rgba(249,115,22,0.12); }

        .posts-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px,1fr)); gap: 24px; }
        @media (max-width: 600px) { .posts-grid { grid-template-columns: 1fr; } }

        .cat-btn { padding:7px 18px; border-radius:999px; font-size:13px; font-weight:500; border:1.5px solid ${C.border}; background:transparent; color:${C.mutedText}; cursor:pointer; white-space:nowrap; font-family:${C.sans}; transition:all 0.2s; }
        .cat-btn:hover { border-color:${C.primary}; color:${C.primary}; }
        .cat-btn.active { background:${C.primary}; border-color:${C.primary}; color:#fff; }

        .section-label { font-size:11px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:${C.primary}; margin-bottom:12px; display:block; }

        .sec-pad { padding: 80px 24px; }
        @media (max-width: 768px) { .sec-pad { padding: 56px 16px !important; } }
      `}</style>

      <Navbar />

      {/* ── HERO — full bleed image ── */}
      <section style={{ position: "relative", minHeight: "70vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1800&q=85&fit=crop"
          alt="Compliance blog"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,35,64,0.90) 55%, rgba(12,35,64,0.55) 100%)" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 40px", width: "100%", position: "relative", zIndex: 2 }}>
          <div className="blog-hero-grid">

            {/* Left */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(249,115,22,0.2)", border: "1px solid rgba(249,115,22,0.4)", borderRadius: 999, padding: "6px 16px", marginBottom: 20 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: C.primary, display: "inline-block" }} />
                <span style={{ color: C.primary, fontSize: 11, fontWeight: 600, letterSpacing: "0.06em" }}>Compliance Insights</span>
              </div>
              <h1 style={{ fontFamily: C.serif, fontSize: "clamp(2rem,4vw,3.4rem)", color: "#fff", margin: "0 0 18px", fontWeight: 800, lineHeight: 1.15 }}>
                Regulatory Updates &<br />Certification Guides
              </h1>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 500 }}>
                Stay ahead of India's ever-changing regulatory landscape. Expert insights on BIS, EPR, WPC, TEC, ISO and more — written by practitioners, not generalists.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button
                  onClick={() => document.getElementById("posts-section").scrollIntoView({ behavior: "smooth" })}
                  style={{ padding: "13px 28px", backgroundColor: C.primary, color: "#fff", fontWeight: 700, borderRadius: 12, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans, boxShadow: "0 4px 16px rgba(249,115,22,0.4)" }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = C.primaryDark}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = C.primary}
                >Browse Articles ↓</button>
                <button
                  onClick={() => document.getElementById("newsletter-section").scrollIntoView({ behavior: "smooth" })}
                  style={{ padding: "13px 24px", border: "1.5px solid rgba(255,255,255,0.3)", color: "#fff", borderRadius: 12, background: "rgba(255,255,255,0.08)", fontSize: 14, cursor: "pointer", fontFamily: C.sans }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.primary; e.currentTarget.style.color = C.primary; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#fff"; }}
                >Subscribe Free →</button>
              </div>
            </div>

            {/* Right — stats */}
            <div className="hero-right">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
                {heroStats.map((s) => (
                  <div key={s.label} className="stat-card">
                    <div style={{ fontSize: 22, marginBottom: 6 }}>{s.icon}</div>
                    <div style={{ fontFamily: C.serif, fontSize: 24, color: C.primary, fontWeight: 800, marginBottom: 4 }}>{s.value}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
              {/* Topics */}
              <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, padding: "18px 20px", backdropFilter: "blur(6px)" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: C.primary, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Topics Covered</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {["BIS", "EPR", "WPC", "TEC", "BEE", "LMPC", "ISO", "CDSCO", "QCO", "FSSAI"].map((t) => (
                    <span key={t} style={{ padding: "4px 12px", borderRadius: 999, fontSize: 11, fontWeight: 600, background: "rgba(249,115,22,0.15)", color: C.primary, border: "1px solid rgba(249,115,22,0.25)" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTERS ── */}
      <section style={{ backgroundColor: C.white, borderBottom: `1px solid ${C.border}`, padding: "0 24px", position: "sticky", top: 68, zIndex: 10, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", gap: 8, overflowX: "auto", padding: "14px 0" }}>
          {categories.map((cat) => (
            <button key={cat} className={`cat-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── POSTS ── */}
      <section id="posts-section" className="sec-pad" style={{ background: C.offWhite }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          {/* Featured post — with image */}
          {activeCategory === "All" && (
            <div style={{ borderRadius: 20, overflow: "hidden", marginBottom: 48, display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 320, border: `1.5px solid ${C.border}`, boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
              {/* Image side */}
              <div style={{ position: "relative", minHeight: 280 }}>
                <img src={featured.img} alt={featured.title}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent, rgba(12,35,64,0.3))" }} />
                <div style={{ position: "absolute", top: 20, left: 20 }}>
                  <span style={{ fontSize: 10, fontWeight: 800, backgroundColor: C.primary, color: "#fff", padding: "4px 14px", borderRadius: 999 }}>FEATURED</span>
                </div>
              </div>
              {/* Content side */}
              <div style={{ padding: "36px 40px", backgroundColor: C.navy, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", gap: 10, marginBottom: 16, alignItems: "center" }}>
                  <span style={{ fontSize: 10, fontWeight: 700, backgroundColor: "rgba(249,115,22,0.2)", color: C.primary, padding: "3px 12px", borderRadius: 999, border: "1px solid rgba(249,115,22,0.3)" }}>{featured.tag}</span>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{featured.date}</span>
                </div>
                <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.2rem,2vw,1.6rem)", color: "#fff", marginBottom: 14, fontWeight: 800, lineHeight: 1.3 }}>{featured.title}</h2>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: 24 }}>{featured.excerpt}</p>
                <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                  <button style={{ padding: "10px 24px", backgroundColor: C.primary, color: "#fff", fontWeight: 700, borderRadius: 10, border: "none", fontSize: 13, cursor: "pointer", fontFamily: C.sans, boxShadow: "0 4px 12px rgba(249,115,22,0.35)" }}>
                    Read Full Article →
                  </button>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>⏱ {featured.readTime}</span>
                </div>
              </div>
            </div>
          )}

          {/* Section heading */}
          <div style={{ marginBottom: 28 }}>
            <span className="section-label">{activeCategory === "All" ? "Latest Articles" : `${activeCategory} Articles`}</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.4rem,2.5vw,2rem)", color: C.navy, fontWeight: 800 }}>
              {activeCategory === "All" ? "All Compliance Guides" : `${activeCategory} Compliance Guides`}
            </h2>
          </div>

          {/* Post grid */}
          <div className="posts-grid">
            {filtered.map((post) => {
              const tc = tagColors[post.tag] || { bg: C.primaryLight, text: C.primary };
              return (
                <div key={post.title} className="post-card">
                  {/* Post image */}
                  <div style={{ position: "relative", height: 180, overflow: "hidden" }}>
                    <img src={post.img} alt={post.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s ease" }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                    />
                    <div style={{ position: "absolute", top: 14, left: 14 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, backgroundColor: tc.bg, color: tc.text, padding: "4px 12px", borderRadius: 999 }}>{post.tag}</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div style={{ padding: "22px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: 11, color: C.mutedText, marginBottom: 10 }}>{post.date}</div>
                    <h3 style={{ fontFamily: C.serif, fontSize: 16, color: C.navy, marginBottom: 10, fontWeight: 700, lineHeight: 1.4, flex: 1 }}>{post.title}</h3>
                    <p style={{ fontSize: 13, color: C.mutedText, lineHeight: 1.65, marginBottom: 16 }}>{post.excerpt}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 14, borderTop: `1px solid ${C.border}` }}>
                      <span style={{ fontSize: 12, color: C.mutedText }}>⏱ {post.readTime}</span>
                      <button style={{ fontSize: 13, color: C.primary, fontWeight: 700, background: "none", border: "none", cursor: "pointer", fontFamily: C.sans }}>Read More →</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load more */}
          <div style={{ textAlign: "center", marginTop: 52 }}>
            <button
              style={{ padding: "13px 40px", border: `2px solid ${C.navy}`, color: C.navy, borderRadius: 12, background: "transparent", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: C.sans }}
              onMouseEnter={(e) => { e.currentTarget.style.background = C.navy; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.navy; }}
            >Load More Articles</button>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER — with image bg ── */}
      <section id="newsletter-section" style={{ position: "relative", padding: "80px 24px", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80&fit=crop"
          alt="Newsletter"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(12,35,64,0.94) 0%, rgba(12,35,64,0.88) 100%)" }} />
        <div style={{ maxWidth: 580, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.primary, display: "block", marginBottom: 14 }}>Stay Informed</span>
          <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "#fff", marginBottom: 12, fontWeight: 800 }}>
            Get Regulatory Updates in Your Inbox
          </h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", marginBottom: 32, lineHeight: 1.7 }}>
            New QCO notifications, BIS updates, EPR changes — delivered weekly. No spam, ever.
          </p>
          <div style={{ display: "flex", gap: 10, maxWidth: 460, margin: "0 auto" }}>
            <input type="email" placeholder="Your email address"
              style={{ flex: 1, padding: "13px 18px", border: `1.5px solid rgba(255,255,255,0.2)`, borderRadius: 10, fontSize: 14, outline: "none", fontFamily: C.sans, backgroundColor: "rgba(255,255,255,0.1)", color: "#fff", backdropFilter: "blur(4px)" }} />
            <button
              style={{ padding: "13px 24px", backgroundColor: C.primary, color: "#fff", fontWeight: 700, borderRadius: 10, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans, whiteSpace: "nowrap", boxShadow: "0 4px 14px rgba(249,115,22,0.4)" }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = C.primaryDark}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = C.primary}
            >Subscribe →</button>
          </div>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 14 }}>Join 5,000+ professionals. Unsubscribe anytime.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}