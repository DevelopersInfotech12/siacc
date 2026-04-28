import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const C = {
  forest: "#1B4332", forestMid: "#2D6A4F", forestLight: "#40916C",
  mint: "#95D5B2", mintLight: "#D8F3DC", gold: "#D4A017",
  offWhite: "#F7FAF8", charcoal: "#1A1A2E", gray: "#6B7280", white: "#ffffff",
  serif: "'Playfair Display', Georgia, serif", sans: "'DM Sans', system-ui, sans-serif",
};

const featured = {
  tag: "BIS Update", date: "April 20, 2025",
  title: "BIS Conformity Assessment Amendment Regulations 2026 — What Manufacturers Must Know",
  excerpt: "The Bureau of Indian Standards has released major amendments to its Conformity Assessment Regulations. Here's a complete breakdown of what's changed, who is affected, and the new timelines businesses must comply with.",
  readTime: "8 min read",
};

const posts = [
  { tag: "EPR", date: "April 15, 2025", title: "EPR Registration for E-Waste: Complete Guide for Importers in 2025", excerpt: "Everything you need to know about EPR registration for electronic products — applicability, process, timelines, and common mistakes to avoid.", readTime: "6 min read" },
  { tag: "WPC", date: "April 10, 2025", title: "WPC-ETA Approval for IoT Devices: New Requirements Under Saralsanchar Portal", excerpt: "The WPC Wing has updated its approval process. We break down the new Saralsanchar portal workflow for wireless and IoT device importers.", readTime: "5 min read" },
  { tag: "ISO", date: "April 5, 2025", title: "ISO 9001:2015 vs ISO 9001:2025 — What's Changing and How to Prepare", excerpt: "ISO is revising the 9001 standard. Here's what the upcoming changes mean for certified organizations and those planning to get certified.", readTime: "7 min read" },
  { tag: "TEC", date: "March 28, 2025", title: "MTCTE Certification: Complete Product List and Updated Timelines for 2025", excerpt: "The list of products requiring mandatory TEC/MTCTE certification has been expanded. Check if your product is now included.", readTime: "5 min read" },
  { tag: "BEE", date: "March 20, 2025", title: "BEE Star Rating: New Minimum Energy Performance Standards for ACs and Refrigerators", excerpt: "BEE has revised its energy performance standards for air conditioners and refrigerators effective April 2025. What this means for manufacturers.", readTime: "4 min read" },
  { tag: "LMPC", date: "March 12, 2025", title: "LMPC Compliance for E-Commerce Sellers: MRP Labelling Rules You Can't Ignore", excerpt: "E-commerce platforms are now strictly enforcing LMPC labelling compliance. A complete guide for online sellers and brand owners.", readTime: "5 min read" },
  { tag: "BIS", date: "March 5, 2025", title: "BIS CRS Registration: 12 New Product Categories Added for Mandatory Compliance", excerpt: "BIS has added 12 new electronic product categories to the Compulsory Registration Scheme. Check if your product is now covered.", readTime: "4 min read" },
  { tag: "CDSCO", date: "Feb 25, 2025", title: "Medical Device Registration under MDR 2017: Step-by-Step Process for Importers", excerpt: "A comprehensive guide to registering medical devices in India under the Medical Devices Rules 2017 — from classification to certificate.", readTime: "9 min read" },
];

const categories = ["All", "BIS", "EPR", "WPC", "TEC", "BEE", "LMPC", "ISO", "CDSCO"];

const tagColors = {
  BIS: { bg: "#D8F3DC", text: "#1B4332" },
  EPR: { bg: "#DCFCE7", text: "#166534" },
  WPC: { bg: "#DBEAFE", text: "#1e40af" },
  TEC: { bg: "#EDE9FE", text: "#5b21b6" },
  BEE: { bg: "#FEF3C7", text: "#92400e" },
  LMPC: { bg: "#FFE4E6", text: "#9f1239" },
  ISO: { bg: "#F0FDF4", text: "#15803d" },
  CDSCO: { bg: "#FDF2F8", text: "#9d174d" },
};

const heroStats = [
  { value: "150+", label: "Articles Published" },
  { value: "Weekly", label: "Update Frequency" },
  { value: "10+", label: "Compliance Topics" },
  { value: "Free", label: "Always" },
];

export default function BlogScreen() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: C.offWhite, fontFamily: C.sans }}>

      <style>{`
        .blog-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .blog-hero-grid { grid-template-columns: 1fr; gap: 36px; }
          .blog-hero-right { display: none; }
        }
        .blog-hero-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 20px;
        }
        .blog-hero-stat-card {
          background: rgba(149, 213, 178, 0.10);
          border: 1px solid rgba(149, 213, 178, 0.22);
          border-radius: 14px;
          padding: 18px 20px;
        }
        .blog-hero-topics {
          background: rgba(149, 213, 178, 0.08);
          border: 1px solid rgba(149, 213, 178, 0.2);
          border-radius: 14px;
          padding: 18px 20px;
        }
        .blog-hero-topic-pill {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          margin: 4px 4px 0 0;
        }
      `}</style>

      <Navbar />

      {/* ── HERO ── */}
      <section style={{ backgroundColor: C.forest, padding: "80px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(149,213,178,0.12)", transform: "translate(30%,-30%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: "45%", width: 280, height: 280, borderRadius: "50%", border: "1px solid rgba(149,213,178,0.07)", transform: "translateY(40%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="blog-hero-grid">

            {/* LEFT */}
            <div>
              <span style={{ fontSize: 11, fontWeight: 600, color: C.mint, letterSpacing: "0.12em", textTransform: "uppercase" }}>Compliance Insights</span>
              <h1 style={{ fontFamily: C.serif, fontSize: "clamp(2rem,4vw,3.2rem)", color: C.white, margin: "12px 0 16px", fontWeight: 700, lineHeight: 1.2 }}>
                Regulatory Updates &<br />Certification Guides
              </h1>
              <p style={{ color: "#b7e4c7", fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
                Stay ahead of India's ever-changing regulatory landscape. Expert insights on BIS, EPR, WPC, TEC, ISO and more — written by practitioners, not generalists.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button style={{ padding: "12px 28px", backgroundColor: C.mint, color: C.forest, fontWeight: 700, borderRadius: 12, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans }}>
                  Browse Articles ↓
                </button>
                <button style={{ padding: "12px 28px", border: "1.5px solid rgba(149,213,178,0.35)", color: C.mintLight, borderRadius: 12, background: "transparent", fontSize: 14, cursor: "pointer", fontFamily: C.sans }}>
                  Subscribe Free →
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="blog-hero-right">
              {/* Stats grid */}
              <div className="blog-hero-stats">
                {heroStats.map((s) => (
                  <div key={s.label} className="blog-hero-stat-card">
                    <div style={{ fontFamily: C.serif, fontSize: 26, color: C.mint, fontWeight: 700, marginBottom: 4 }}>{s.value}</div>
                    <div style={{ fontSize: 12, color: "#b7e4c7" }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Topics covered */}
              <div className="blog-hero-topics">
                <div style={{ fontSize: 11, fontWeight: 600, color: C.mint, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Topics Covered</div>
                <div>
                  {Object.entries(tagColors).map(([tag, colors]) => (
                    <span key={tag} className="blog-hero-topic-pill" style={{ backgroundColor: "rgba(149,213,178,0.12)", color: C.mint, border: "1px solid rgba(149,213,178,0.2)" }}>
                      {tag}
                    </span>
                  ))}
                  <span className="blog-hero-topic-pill" style={{ backgroundColor: "rgba(149,213,178,0.12)", color: C.mint, border: "1px solid rgba(149,213,178,0.2)" }}>
                    FSSAI
                  </span>
                  <span className="blog-hero-topic-pill" style={{ backgroundColor: "rgba(149,213,178,0.12)", color: C.mint, border: "1px solid rgba(149,213,178,0.2)" }}>
                    QCO
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTERS ── */}
      <section style={{ backgroundColor: C.white, borderBottom: `1px solid ${C.mintLight}`, padding: "0 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", gap: 4, overflowX: "auto", padding: "16px 0" }}>
          {categories.map((cat) => (
            <button key={cat}
              style={{ padding: "7px 18px", borderRadius: 999, fontSize: 13, fontWeight: 500, border: `1px solid ${cat === "All" ? C.forest : C.mintLight}`, backgroundColor: cat === "All" ? C.forest : "transparent", color: cat === "All" ? C.white : C.gray, cursor: "pointer", whiteSpace: "nowrap", fontFamily: C.sans }}
            >{cat}</button>
          ))}
        </div>
      </section>

      {/* ── POSTS ── */}
      <section style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          {/* Featured post */}
          <div style={{ backgroundColor: C.forest, borderRadius: 20, padding: "40px 48px", marginBottom: 48, display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", gap: 12, marginBottom: 16, alignItems: "center" }}>
                <span style={{ fontSize: 10, fontWeight: 700, backgroundColor: C.mint, color: C.forest, padding: "3px 12px", borderRadius: 999 }}>FEATURED</span>
                <span style={{ fontSize: 10, fontWeight: 600, backgroundColor: C.forestMid, color: C.mint, padding: "3px 12px", borderRadius: 999 }}>{featured.tag}</span>
                <span style={{ fontSize: 12, color: C.mint, opacity: 0.7 }}>{featured.date}</span>
              </div>
              <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.4rem,2.5vw,1.9rem)", color: C.white, marginBottom: 16, fontWeight: 700, lineHeight: 1.3 }}>{featured.title}</h2>
              <p style={{ fontSize: 14, color: "#b7e4c7", lineHeight: 1.75, marginBottom: 20, maxWidth: 600 }}>{featured.excerpt}</p>
              <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                <button style={{ padding: "10px 24px", backgroundColor: C.mint, color: C.forest, fontWeight: 700, borderRadius: 10, border: "none", fontSize: 13, cursor: "pointer", fontFamily: C.sans }}>Read Full Article →</button>
                <span style={{ fontSize: 12, color: C.mint, opacity: 0.7 }}>⏱ {featured.readTime}</span>
              </div>
            </div>
            <div style={{ width: 80, height: 80, borderRadius: 20, backgroundColor: C.forestMid, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 36 }}>📋</div>
          </div>

          {/* Post grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(340px,1fr))", gap: 24 }}>
            {posts.map((post) => {
              const tc = tagColors[post.tag] || { bg: C.mintLight, text: C.forest };
              return (
                <div key={post.title}
                  style={{ backgroundColor: C.white, borderRadius: 16, border: `1px solid ${C.mintLight}`, overflow: "hidden", cursor: "pointer", transition: "all 0.25s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.mint; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(27,67,50,0.10)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.mintLight; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ backgroundColor: C.mintLight, height: 6 }} />
                  <div style={{ padding: 24 }}>
                    <div style={{ display: "flex", gap: 10, marginBottom: 14, alignItems: "center" }}>
                      <span style={{ fontSize: 10, fontWeight: 700, backgroundColor: tc.bg, color: tc.text, padding: "3px 10px", borderRadius: 999 }}>{post.tag}</span>
                      <span style={{ fontSize: 11, color: C.gray }}>{post.date}</span>
                    </div>
                    <h3 style={{ fontFamily: C.serif, fontSize: 16, color: C.charcoal, marginBottom: 12, fontWeight: 600, lineHeight: 1.4 }}>{post.title}</h3>
                    <p style={{ fontSize: 13, color: C.gray, lineHeight: 1.65, marginBottom: 20 }}>{post.excerpt}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16, borderTop: `1px solid ${C.mintLight}` }}>
                      <span style={{ fontSize: 12, color: C.gray }}>⏱ {post.readTime}</span>
                      <button style={{ fontSize: 12, color: C.forestLight, fontWeight: 600, background: "none", border: "none", cursor: "pointer", fontFamily: C.sans }}>Read More →</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load more */}
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <button style={{ padding: "13px 40px", border: `1.5px solid ${C.forest}`, color: C.forest, borderRadius: 12, background: "transparent", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: C.sans }}>
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section style={{ backgroundColor: C.mintLight, padding: "64px 24px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: C.forestLight, letterSpacing: "0.12em", textTransform: "uppercase" }}>Stay Informed</span>
          <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.6rem,3vw,2.2rem)", color: C.forest, marginTop: 12, marginBottom: 12, fontWeight: 700 }}>Get Regulatory Updates in Your Inbox</h2>
          <p style={{ fontSize: 14, color: C.gray, marginBottom: 28 }}>New QCO notifications, BIS updates, EPR changes — delivered weekly. No spam.</p>
          <div style={{ display: "flex", gap: 10, maxWidth: 440, margin: "0 auto" }}>
            <input type="email" placeholder="Your email address" style={{ flex: 1, padding: "12px 16px", border: `1px solid ${C.mint}`, borderRadius: 10, fontSize: 14, outline: "none", fontFamily: C.sans, backgroundColor: C.white }} />
            <button style={{ padding: "12px 24px", backgroundColor: C.forest, color: C.white, fontWeight: 700, borderRadius: 10, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans, whiteSpace: "nowrap" }}>Subscribe →</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}