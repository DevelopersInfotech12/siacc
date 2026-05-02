"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// ── EXACT same token palette as HomeScreen ──────────────────────────────────
const T = {
  teal: "#1E88C8",
  tealDark: "#074D4D",
  tealMid: "#0E8080",
  tealLight: "#EBF5F5",
  tealGhost: "#F4FAFA",
  amber: "#C8780A",
  amberLight: "#FEF3DC",
  amberDark: "#9A5C06",
  slate: "#0D1B2A",
  slateMid: "#1C3144",
  body: "#2D3748",
  muted: "#718096",
  subtle: "#A0AEC0",
  border: "#E8E3DA",
  borderLight: "#F0ECE5",
  white: "#FFFFFF",
  cream: "#FAF8F4",
  creamMid: "#F3EFE8",
  serif: "'Cormorant Garamond', 'Georgia', serif",
  sans: "'Outfit', 'system-ui', sans-serif",
  // convenience aliases used by BlogScreen logic
  primary: "#1E88C8",         // was C.primary (orange) → now teal to match HomeScreen CTA
  primaryDark: "#1572A8",
  primaryLight: "#EBF5F5",
  blue: "#1E88C8",
  blueLight: "#EBF5F5",
  navy: "#0D1B2A",            // maps to T.slate
  bodyText: "#2D3748",
  mutedText: "#718096",
  // CTA accent (orange) kept for buttons only
  cta: "#F97316",
  ctaDark: "#EA6A0A",
  ctaLight: "#FFF3E8",
};

const featured = {
  tag: "BIS Update", date: "April 20, 2025",
  title: "BIS Conformity Assessment Amendment Regulations 2026 — What Manufacturers Must Know",
  excerpt: "The Bureau of Indian Standards has released major amendments to its Conformity Assessment Regulations. Here's a complete breakdown of what's changed, who is affected, and the new timelines businesses must comply with.",
  readTime: "8 min read",
  img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80&fit=crop",
};

const posts = [
  { tag: "EPR",   date: "April 15, 2025",  title: "EPR Registration for E-Waste: Complete Guide for Importers in 2025",                   excerpt: "Everything you need to know about EPR registration for electronic products — applicability, process, timelines, and common mistakes to avoid.", readTime: "6 min read", img: "https://images.unsplash.com/photo-1532996122724-e3c0a0e3e5d3?w=500&q=80&fit=crop" },
  { tag: "WPC",   date: "April 10, 2025",  title: "WPC-ETA Approval for IoT Devices: New Requirements Under Saralsanchar Portal",          excerpt: "The WPC Wing has updated its approval process. We break down the new Saralsanchar portal workflow for wireless and IoT device importers.",     readTime: "5 min read", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80&fit=crop" },
  { tag: "ISO",   date: "April 5, 2025",   title: "ISO 9001:2015 vs ISO 9001:2025 — What's Changing and How to Prepare",                  excerpt: "ISO is revising the 9001 standard. Here's what the upcoming changes mean for certified organizations and those planning to get certified.",    readTime: "7 min read", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80&fit=crop" },
  { tag: "TEC",   date: "March 28, 2025",  title: "MTCTE Certification: Complete Product List and Updated Timelines for 2025",              excerpt: "The list of products requiring mandatory TEC/MTCTE certification has been expanded. Check if your product is now included.",                 readTime: "5 min read", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80&fit=crop" },
  { tag: "BEE",   date: "March 20, 2025",  title: "BEE Star Rating: New Minimum Energy Performance Standards for ACs and Refrigerators",   excerpt: "BEE has revised its energy performance standards for air conditioners and refrigerators effective April 2025.",                            readTime: "4 min read", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80&fit=crop" },
  { tag: "LMPC",  date: "March 12, 2025",  title: "LMPC Compliance for E-Commerce Sellers: MRP Labelling Rules You Can't Ignore",          excerpt: "E-commerce platforms are now strictly enforcing LMPC labelling compliance. A complete guide for online sellers and brand owners.",           readTime: "5 min read", img: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=500&q=80&fit=crop" },
  { tag: "BIS",   date: "March 5, 2025",   title: "BIS CRS Registration: 12 New Product Categories Added for Mandatory Compliance",        excerpt: "BIS has added 12 new electronic product categories to the Compulsory Registration Scheme. Check if your product is now covered.",           readTime: "4 min read", img: "https://images.unsplash.com/photo-1581092921461-39d9a338b0cb?w=500&q=80&fit=crop" },
  { tag: "CDSCO", date: "Feb 25, 2025",    title: "Medical Device Registration under MDR 2017: Step-by-Step Process for Importers",        excerpt: "A comprehensive guide to registering medical devices in India under the Medical Devices Rules 2017 — from classification to certificate.",   readTime: "9 min read", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80&fit=crop" },
];

const categories = ["All", "BIS", "EPR", "WPC", "TEC", "BEE", "LMPC", "ISO", "CDSCO"];

// Tag colours updated to harmonise with HomeScreen palette
const tagColors = {
  BIS:   { bg: T.amberLight,   text: T.amberDark },
  EPR:   { bg: "#DCFCE7",      text: "#166534" },
  WPC:   { bg: T.tealLight,    text: T.tealDark },
  TEC:   { bg: "#EDE9FE",      text: "#5b21b6" },
  BEE:   { bg: "#FEF3C7",      text: "#92400e" },
  LMPC:  { bg: "#FFE4E6",      text: "#9f1239" },
  ISO:   { bg: T.tealLight,    text: T.tealMid },
  CDSCO: { bg: "#FDF2F8",      text: "#9d174d" },
};

const heroStats = [
  { value: "150+",   label: "Articles Published",  icon: "📝" },
  { value: "Weekly", label: "Update Frequency",     icon: "📅" },
  { value: "10+",    label: "Compliance Topics",    icon: "📋" },
  { value: "Free",   label: "Always",               icon: "🎁" },
];

export default function BlogScreen() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? posts : posts.filter(p => p.tag === activeCategory);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: T.white, fontFamily: T.sans, color: T.body }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        img { max-width:100%; display:block; }
        a { text-decoration:none; color:inherit; }

        /* ── Hero (light cream + teal, matching HomeScreen) ── */
        .blog-hero-wrap {
          background: ${T.cream};
          border-bottom: 1px solid ${T.border};
          position: relative;
          overflow: hidden;
        }
        /* Subtle teal-tinted decorative blob in top-right */
        .blog-hero-wrap::before {
          content: '';
          position: absolute;
          top: -120px; right: -160px;
          width: 520px; height: 520px;
          background: radial-gradient(circle, rgba(30,136,200,0.10) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .blog-hero-grid { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; }
        @media(max-width:900px){ .blog-hero-grid { grid-template-columns:1fr; gap:36px; } }
        .hero-right { display:block; }
        @media(max-width:900px){ .hero-right { display:none; } }
        .hero-cta-row { display:flex; gap:12px; flex-wrap:wrap; }

        /* Stat cards — light, matching HomeScreen stat tiles */
        .stat-card {
          background: ${T.white};
          border: 1px solid ${T.border};
          border-top: 3px solid ${T.teal};
          border-radius: 8px;
          padding: 18px 20px;
        }
        .stat-cards-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:12px; }

        /* Category filter bar */
        .cat-filter-bar {
          background: ${T.white};
          border-bottom: 1px solid ${T.border};
          padding: 0 24px;
          position: sticky; top: 68px; z-index: 10;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .cat-filter-inner {
          max-width: 1280px; margin: 0 auto;
          display: flex; gap: 8px; overflow-x: auto;
          padding: 14px 0; scrollbar-width: none;
        }
        .cat-filter-inner::-webkit-scrollbar { display: none; }
        @media(max-width:480px){ .cat-filter-bar { padding:0 12px; top:60px; } }

        .cat-btn {
          padding: 7px 16px; border-radius: 999px; font-size: 13px; font-weight: 500;
          border: 1.5px solid ${T.border}; background: transparent; color: ${T.muted};
          cursor: pointer; white-space: nowrap; font-family: ${T.sans}; transition: all 0.2s; flex-shrink: 0;
        }
        .cat-btn:hover { border-color: ${T.teal}; color: ${T.teal}; }
        .cat-btn.active { background: ${T.teal}; border-color: ${T.teal}; color: #fff; }

        /* Featured post */
        .featured-card {
          border-radius: 12px; overflow: hidden; margin-bottom: 48px;
          display: grid; grid-template-columns: 1fr 1fr; min-height: 300px;
          border: 1px solid #C8DFF0;
          box-shadow: 0 8px 32px rgba(30,136,200,0.10);
        }
        @media(max-width:768px){ .featured-card { grid-template-columns:1fr; } .featured-img { min-height:200px; } }
        /* Featured content: light blue matching newsletter/CTA band */
        .featured-content {
          padding: 32px 36px;
          background: #EBF5FB;
          display: flex; flex-direction: column; justify-content: center;
        }
        @media(max-width:480px){ .featured-content { padding:22px 20px; } }

        /* Posts grid */
        .posts-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:20px; }
        @media(max-width:640px){ .posts-grid { grid-template-columns:1fr; } }
        .post-card {
          background: ${T.white}; border-radius: 10px;
          border: 1px solid ${T.border}; overflow: hidden;
          cursor: pointer; transition: all 0.25s ease;
          display: flex; flex-direction: column;
        }
        .post-card:hover {
          border-color: ${T.teal};
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(30,136,200,0.10);
        }

        /* Newsletter */
        .newsletter-input-row { display:flex; gap:10px; max-width:460px; margin:0 auto; }
        @media(max-width:480px){ .newsletter-input-row { flex-direction:column; } .newsletter-input-row button { width:100%; } }

        /* Section label — matching HomeScreen SectionLabel */
        .section-label-row { display:flex; align-items:center; gap:12px; margin-bottom:16px; }
        .section-label-line { width:28px; height:1.5px; background:${T.teal}; }
        .section-label-text {
          font-family: ${T.sans}; font-size: 11px; font-weight: 600;
          letter-spacing: 0.15em; text-transform: uppercase; color: ${T.teal};
        }

        /* Section padding */
        .sec-pad { padding: 80px 24px; }
        @media(max-width:768px){ .sec-pad { padding:52px 16px !important; } }

        /* Topics tag pill */
        .topic-pill {
          padding: 5px 12px; border-radius: 4px; font-size: 11px; font-weight: 600;
          background: ${T.tealLight}; color: ${T.teal};
          border: 1px solid rgba(30,136,200,0.20);
          font-family: ${T.sans}; letter-spacing: 0.04em;
        }
      `}</style>

      <Navbar />

      {/* ── HERO (light cream, matching HomeScreen) ── */}
      <section className="blog-hero-wrap">
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(56px,8vw,96px) clamp(16px,4vw,56px)" }}>
          <div className="blog-hero-grid">

            {/* Left */}
            <div>
              {/* Tag badge — mirrors HomeScreen service tag */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: T.tealLight, borderRadius: 4, padding: "5px 14px", marginBottom: 24,
              }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: T.teal, display: "inline-block" }} />
                <span style={{ fontFamily: T.sans, fontSize: 10.5, fontWeight: 700, color: T.teal, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  Compliance Insights
                </span>
              </div>

              <h1 style={{
                fontFamily: T.serif,
                fontSize: "clamp(2rem,3.8vw,3.4rem)",
                color: T.slate, fontWeight: 700,
                lineHeight: 1.08, marginBottom: 10, letterSpacing: "-0.01em",
              }}>
                Regulatory Updates &amp;<br />Certification Guides
              </h1>

              <p style={{
                fontFamily: T.sans, fontSize: 12, fontWeight: 600,
                color: T.tealMid, marginBottom: 20,
                letterSpacing: "0.05em", textTransform: "uppercase",
              }}>
                BIS · EPR · WPC · TEC · ISO &amp; More
              </p>

              <p style={{
                fontFamily: T.sans, fontSize: "clamp(13.5px,1.4vw,15px)",
                color: T.muted, lineHeight: 1.9, marginBottom: 32, maxWidth: 460,
              }}>
                Stay ahead of India's ever-changing regulatory landscape. Expert insights written by practitioners, not generalists.
              </p>

              <div className="hero-cta-row">
                {/* Primary CTA — orange, same as HomeScreen PrimaryBtn */}
                <button
                  onClick={() => document.getElementById("posts-section").scrollIntoView({ behavior: "smooth" })}
                  style={{
                    padding: "13px 32px", fontFamily: T.sans, fontSize: 13.5, fontWeight: 600,
                    letterSpacing: "0.02em", border: "none", borderRadius: 6, cursor: "pointer",
                    background: "#F97316", color: "#fff",
                    boxShadow: "0 4px 16px rgba(10,104,104,0.22)",
                    transition: "all 0.22s cubic-bezier(0.4,0,0.2,1)",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = T.teal; e.currentTarget.style.boxShadow = "0 8px 28px rgba(10,104,104,0.38)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#F97316"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(10,104,104,0.22)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >Browse Articles ↓</button>

                {/* Secondary CTA — outline, same as HomeScreen OutlineBtn */}
                <button
                  onClick={() => document.getElementById("newsletter-section").scrollIntoView({ behavior: "smooth" })}
                  style={{
                    padding: "12px 28px", fontFamily: T.sans, fontSize: 13.5, fontWeight: 600,
                    letterSpacing: "0.02em", borderRadius: 6, cursor: "pointer",
                    border: `1.5px solid ${T.border}`,
                    color: "#fff", background: "#F97316",
                    transition: "all 0.22s cubic-bezier(0.4,0,0.2,1)",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = T.teal; e.currentTarget.style.color = T.teal; e.currentTarget.style.background = "transparent"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "#F97316"; }}
                >Subscribe Free →</button>
              </div>
            </div>

            {/* Right — stat tiles (light, matching HomeScreen stat mini-cards) */}
            <div className="hero-right">
              <div className="stat-cards-grid">
                {heroStats.map((s, i) => (
                  <div key={s.label} className="stat-card">
                    <div style={{ fontSize: 20, marginBottom: 6 }}>{s.icon}</div>
                    <div style={{
                      fontFamily: T.serif, fontSize: 26,
                      color: i % 2 === 0 ? T.teal : T.amber,
                      fontWeight: 700, lineHeight: 1,
                    }}>{s.value}</div>
                    <div style={{ fontFamily: T.sans, fontSize: 11, color: T.subtle, marginTop: 4, letterSpacing: "0.04em" }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Topics covered tile */}
              <div style={{
                background: T.white, border: `1px solid ${T.border}`,
                borderRadius: 8, padding: "18px 20px",
              }}>
                <div style={{
                  fontFamily: T.sans, fontSize: 10.5, fontWeight: 700,
                  color: T.teal, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12,
                }}>Topics Covered</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {["BIS", "EPR", "WPC", "TEC", "BEE", "LMPC", "ISO", "CDSCO", "QCO", "FSSAI"].map(t => (
                    <span key={t} className="topic-pill">{t}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom accent line — mirrors HomeScreen's slider progress bar row */}
        <div style={{ height: 2, background: T.borderLight }}>
          <div style={{ width: "100%", height: "100%", background: T.teal, opacity: 0.4 }} />
        </div>
      </section>

      {/* ── CATEGORY FILTERS ── */}
      <div className="cat-filter-bar">
        <div className="cat-filter-inner">
          {categories.map(cat => (
            <button key={cat} className={`cat-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}>{cat}</button>
          ))}
        </div>
      </div>

      {/* ── POSTS ── */}
      <section id="posts-section" className="sec-pad" style={{ background: T.cream }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          {/* Featured */}
          {activeCategory === "All" && (
            <div className="featured-card">
              <div className="featured-img" style={{ position: "relative", minHeight: 240 }}>
                <img src={featured.img} alt={featured.title}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, transparent, rgba(13,27,42,0.3))` }} />
                <div style={{ position: "absolute", top: 16, left: 16 }}>
                  <span style={{
                    fontSize: 10, fontWeight: 800, backgroundColor: T.amber, color: "#fff",
                    padding: "4px 14px", borderRadius: 3, letterSpacing: "0.06em",
                    fontFamily: T.sans,
                  }}>FEATURED</span>
                </div>
              </div>
              <div className="featured-content">
                <div style={{ display: "flex", gap: 10, marginBottom: 14, alignItems: "center", flexWrap: "wrap" }}>
                  <span style={{
                    fontFamily: T.sans, fontSize: 10, fontWeight: 700,
                    backgroundColor: T.amberLight, color: T.amberDark,
                    padding: "3px 12px", borderRadius: 3,
                  }}>{featured.tag}</span>
                  <span style={{ fontSize: 12, color: T.muted, fontFamily: T.sans }}>{featured.date}</span>
                </div>
                <h2 style={{
                  fontFamily: T.serif, fontSize: "clamp(1.1rem,2vw,1.6rem)",
                  color: T.slate, marginBottom: 12, fontWeight: 700, lineHeight: 1.3,
                }}>{featured.title}</h2>
                <p style={{ fontFamily: T.sans, fontSize: 13, color: T.muted, lineHeight: 1.75, marginBottom: 20 }}>{featured.excerpt}</p>
                <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                  <button style={{
                    padding: "10px 22px", backgroundColor: "#F97316", color: "#fff",
                    fontWeight: 600, borderRadius: 6, border: "none", fontSize: 13,
                    cursor: "pointer", fontFamily: T.sans,
                    boxShadow: "0 4px 12px rgba(249,115,22,0.35)",
                    transition: "background 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = T.teal}
                    onMouseLeave={e => e.currentTarget.style.background = "#F97316"}
                  >Read Full Article →</button>
                  <span style={{ fontSize: 12, color: T.subtle, fontFamily: T.sans }}>⏱ {featured.readTime}</span>
                </div>
              </div>
            </div>
          )}

          {/* Section heading */}
          <div style={{ marginBottom: 32 }}>
            <div className="section-label-row">
              <div className="section-label-line" />
              <span className="section-label-text">{activeCategory === "All" ? "Latest Articles" : `${activeCategory} Articles`}</span>
            </div>
            <h2 style={{
              fontFamily: T.serif, fontSize: "clamp(1.3rem,2.5vw,2rem)",
              color: T.slate, fontWeight: 700, letterSpacing: "-0.01em",
            }}>
              {activeCategory === "All" ? "All Compliance Guides" : `${activeCategory} Compliance Guides`}
            </h2>
          </div>

          {/* Cards grid */}
          <div className="posts-grid">
            {filtered.map(post => {
              const tc = tagColors[post.tag] || { bg: T.tealLight, text: T.teal };
              return (
                <div key={post.title} className="post-card">
                  <div style={{ position: "relative", height: 180, overflow: "hidden" }}>
                    <img src={post.img} alt={post.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s ease" }}
                      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                    />
                    {/* Light blue overlay on images — matches CTA band colour #EBF5FB */}
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(180deg, rgba(235,245,251,0.18) 0%, rgba(235,245,251,0.42) 100%)",
                      pointerEvents: "none",
                    }} />
                    <div style={{ position: "absolute", top: 14, left: 14 }}>
                      <span style={{
                        fontSize: 10, fontWeight: 700,
                        backgroundColor: tc.bg, color: tc.text,
                        padding: "4px 12px", borderRadius: 3,
                        fontFamily: T.sans, letterSpacing: "0.06em",
                      }}>{post.tag}</span>
                    </div>
                  </div>
                  <div style={{ padding: "20px 22px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ fontFamily: T.sans, fontSize: 11, color: T.subtle, marginBottom: 8 }}>{post.date}</div>
                    <h3 style={{
                      fontFamily: T.serif, fontSize: 16, color: T.slate,
                      marginBottom: 8, fontWeight: 600, lineHeight: 1.35, flex: 1,
                    }}>{post.title}</h3>
                    <p style={{ fontFamily: T.sans, fontSize: 13, color: T.muted, lineHeight: 1.7, marginBottom: 14 }}>{post.excerpt}</p>
                    <div style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      paddingTop: 12, borderTop: `1px solid ${T.border}`,
                    }}>
                      <span style={{ fontFamily: T.sans, fontSize: 12, color: T.subtle }}>⏱ {post.readTime}</span>
                      <button style={{
                        fontFamily: T.sans, fontSize: 12.5, color: T.teal,
                        fontWeight: 600, background: "none", border: "none", cursor: "pointer",
                        letterSpacing: "0.02em",
                      }}>Read More →</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load more */}
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <button
              style={{
                padding: "13px 40px", border: `1.5px solid ${T.border}`,
                color: T.slate, borderRadius: 6, background: "transparent",
                fontFamily: T.sans, fontSize: 13.5, fontWeight: 600, cursor: "pointer",
                transition: "all 0.22s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = T.teal; e.currentTarget.style.color = T.teal; e.currentTarget.style.background = T.tealLight; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.slate; e.currentTarget.style.background = "transparent"; }}
            >Load More Articles</button>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER (matches HomeScreen CTA band exactly) ── */}
      <section
        id="newsletter-section"
        style={{
          background: "#EBF5FB",
          borderTop: "1px solid #C8DFF0",
          borderBottom: "1px solid #C8DFF0",
          padding: "80px clamp(16px,5vw,56px)",
        }}
      >
        <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          {/* Section label */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 28, height: 1.5, background: T.teal }} />
              <span style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.teal }}>Stay Informed</span>
              <div style={{ width: 28, height: 1.5, background: T.teal }} />
            </div>
          </div>

          <h2 style={{
            fontFamily: T.serif, fontSize: "clamp(1.4rem,3vw,2.2rem)",
            color: T.slate, marginBottom: 12, fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1.1,
          }}>
            Get Regulatory Updates<br />in Your Inbox
          </h2>
          <p style={{ fontFamily: T.sans, fontSize: "clamp(13px,2vw,14.5px)", color: T.muted, marginBottom: 32, lineHeight: 1.8 }}>
            New QCO notifications, BIS updates, EPR changes — delivered weekly.<br />No spam, ever.
          </p>

          <div className="newsletter-input-row">
            <input
              type="email" placeholder="Your email address"
              style={{
                flex: 1, padding: "13px 16px",
                border: `1.5px solid ${T.border}`, borderRadius: 6,
                fontFamily: T.sans, fontSize: 14, outline: "none",
                background: T.white, color: T.body, minWidth: 0,
                transition: "border-color 0.2s",
              }}
              onFocus={e => e.currentTarget.style.borderColor = T.teal}
              onBlur={e => e.currentTarget.style.borderColor = T.border}
            />
            <button
              style={{
                padding: "13px 22px", backgroundColor: "#F97316", color: "#fff",
                fontWeight: 600, borderRadius: 6, border: "none",
                fontFamily: T.sans, fontSize: 14, cursor: "pointer",
                whiteSpace: "nowrap", transition: "background 0.2s",
                boxShadow: "0 4px 14px rgba(249,115,22,0.30)",
              }}
              onMouseEnter={e => e.currentTarget.style.background = T.teal}
              onMouseLeave={e => e.currentTarget.style.background = "#F97316"}
            >Subscribe →</button>
          </div>
          <p style={{ fontFamily: T.sans, fontSize: 12, color: T.subtle, marginTop: 14 }}>
            Join 5,000+ professionals. Unsubscribe anytime.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}