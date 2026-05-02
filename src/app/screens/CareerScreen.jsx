"use client";
import { useRouter } from "next/navigation";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// ── Exact same token palette as HomeScreen / BlogScreen ─────────────────────
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
  // CTA band exact colours
  ctaBand: "#EBF5FB",
  ctaBandBorder: "#C8DFF0",
  // button accent
  orange: "#F97316",
  orangeDark: "#EA6A0A",
  serif: "'Cormorant Garamond', 'Georgia', serif",
  sans: "'Outfit', 'system-ui', sans-serif",
};

const openings = [
  { title: "Senior BIS Certification Consultant", dept: "BIS Division", location: "New Delhi", type: "Full-time", exp: "5+ Years", desc: "Lead client engagements for BIS ISI Mark and CRS certification projects. Coordinate with labs, manage applications and mentor junior consultants." },
  { title: "EPR Compliance Analyst", dept: "Environment Division", location: "New Delhi / Remote", type: "Full-time", exp: "2–4 Years", desc: "Handle EPR registration and annual compliance for E-Waste, Plastic, Battery and Tyre clients. Coordinate with CPCB and PRO partners." },
  { title: "Regulatory Affairs Executive", dept: "International Affairs", location: "Mumbai", type: "Full-time", exp: "1–3 Years", desc: "Assist overseas clients with market entry compliance — BIS, LMPC, TEC and WPC certifications for foreign manufacturers." },
  { title: "Business Development Manager", dept: "Sales & Growth", location: "Bengaluru / Remote", type: "Full-time", exp: "3–6 Years", desc: "Identify and acquire new clients in electronics, pharma and consumer goods sectors. Build long-term relationships with manufacturers and importers." },
  { title: "Technical Documentation Specialist", dept: "Operations", location: "New Delhi", type: "Full-time", exp: "2–4 Years", desc: "Prepare technical dossiers, compliance documents, and application files for various certifications. Strong writing and research skills required." },
  { title: "Legal & Regulatory Intern", dept: "Legal Team", location: "New Delhi", type: "Internship", exp: "Freshers / Final Year", desc: "Assist the legal team with regulatory research, draft legal notices, and support ongoing certification applications." },
];

const perks = [
  { icon: "🌿", title: "Meaningful Work", desc: "Help businesses navigate India's regulatory landscape. Your work directly enables market access for hundreds of brands." },
  { icon: "📈", title: "Fast Growth", desc: "Performance-based promotions with a clear career ladder. Many of our senior leaders started as junior analysts." },
  { icon: "🧠", title: "Deep Learning", desc: "Work across 50+ regulatory domains. Become a sought-after expert in India's compliance ecosystem." },
  { icon: "🏡", title: "Flexible Work", desc: "Hybrid and remote options for eligible roles. Work-life balance is built into our culture, not just a policy." },
  { icon: "💰", title: "Competitive Pay", desc: "Market-leading salaries, performance bonuses, health insurance, and employee benefits from day one." },
  { icon: "🤝", title: "Great Team", desc: "100+ colleagues who are passionate, collaborative, and recognised experts in their regulatory fields." },
];

const typeColors = {
  "Full-time":  { bg: T.tealLight,   text: T.tealDark },
  "Internship": { bg: T.amberLight,  text: T.amberDark },
};

const stats = [
  { value: "100+", label: "Team Members",    icon: "👥" },
  { value: "4",    label: "Office Locations", icon: "🏢" },
  { value: "6",    label: "Open Positions",   icon: "📋" },
  { value: "12+",  label: "Years Building",   icon: "🏆" },
];

export default function CareerScreen() {
  const router = useRouter();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: T.white, fontFamily: T.sans, color: T.body }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        img { max-width:100%; display:block; }
        a { text-decoration:none; color:inherit; }

        /* ── Section label — matches HomeScreen SectionLabel ── */
        .sl-row { display:flex; align-items:center; gap:12px; margin-bottom:16px; }
        .sl-line { width:28px; height:1.5px; background:${T.teal}; flex-shrink:0; }
        .sl-text { font-family:${T.sans}; font-size:11px; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; color:${T.teal}; }

        /* ── HERO — light cream + teal, same as BlogScreen hero ── */
        .career-hero-wrap {
          background: ${T.cream};
          border-bottom: 1px solid ${T.border};
          position: relative; overflow: hidden;
        }
        /* Decorative radial blob */
        .career-hero-wrap::before {
          content:''; position:absolute; top:-100px; right:-140px;
          width:500px; height:500px;
          background:radial-gradient(circle, rgba(30,136,200,0.11) 0%, transparent 70%);
          border-radius:50%; pointer-events:none;
        }
        .hero-grid { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; }
        @media(max-width:900px){ .hero-grid { grid-template-columns:1fr; gap:40px; } }
        .hero-img-col { border-radius:12px; overflow:hidden; height:clamp(300px,42vw,460px); position:relative; }
        @media(max-width:900px){ .hero-img-col { display:none; } }
        /* Light blue tint overlay on hero image */
        .hero-img-tint {
          position:absolute; inset:0;
          background:linear-gradient(135deg, rgba(235,245,251,0.38) 0%, rgba(30,136,200,0.18) 100%);
        }
        .hero-cta-row { display:flex; flex-wrap:wrap; gap:12px; margin-bottom:32px; }
        .hero-trust-row { display:flex; flex-wrap:wrap; gap:8px; }

        /* ── Stats strip — teal background, matches HomeScreen stats band ── */
        .stats-strip { display:grid; grid-template-columns:repeat(4,1fr); }
        @media(max-width:640px){ .stats-strip { grid-template-columns:repeat(2,1fr); } }

        /* ── Life at SIACC ── */
        .about-grid { display:grid; grid-template-columns:1fr 1fr; gap:72px; align-items:center; }
        @media(max-width:860px){ .about-grid { grid-template-columns:1fr; gap:40px; } }
        .mini-stats-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:32px; }
        @media(max-width:420px){ .mini-stats-grid { grid-template-columns:1fr; } }

        /* ── Perks ── */
        .perks-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        @media(max-width:900px){ .perks-grid { grid-template-columns:repeat(2,1fr); } }
        @media(max-width:540px){ .perks-grid { grid-template-columns:1fr; } }
        .perk-card {
          background:${T.white}; border-radius:10px; padding:28px;
          border:1px solid ${T.border}; transition:all 0.2s;
        }
        .perk-card:hover { border-color:${T.teal}; box-shadow:0 8px 24px rgba(30,136,200,0.08); transform:translateY(-2px); }

        /* ── Job cards ── */
        .job-card {
          background:${T.white}; border-radius:10px; padding:24px 28px;
          border:1px solid ${T.border};
          display:grid; grid-template-columns:1fr auto; gap:20px; align-items:center;
          transition:all 0.25s ease;
        }
        .job-card:hover { border-color:${T.teal}; box-shadow:0 8px 28px rgba(30,136,200,0.09); }
        @media(max-width:640px){ .job-card { grid-template-columns:1fr; gap:16px; padding:20px; } }
        .job-meta { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:10px; align-items:center; }

        /* ── Perks banner ── */
        .perks-banner { position:relative; border-radius:10px; overflow:hidden; margin-bottom:48px; height:200px; }
        @media(max-width:560px){ .perks-banner { height:150px; margin-bottom:32px; } }

        /* ── CTA split — matches HomeScreen CTA band ── */
        .cta-split { display:grid; grid-template-columns:1fr auto; gap:40px; align-items:center; }
        @media(max-width:720px){ .cta-split { grid-template-columns:1fr; gap:28px; } }

        /* Section padding */
        .sec { padding:clamp(64px,8vw,104px) clamp(16px,5vw,56px); }
        .inner { max-width:1280px; margin:0 auto; }

        /* scroll-indicator */
        .scroll-ind { position:absolute; bottom:24px; left:50%; transform:translateX(-50%); z-index:3; display:flex; flex-direction:column; align-items:center; gap:6px; }
        @media(max-width:480px){ .scroll-ind { display:none; } }
      `}</style>

      <Navbar />

      {/* ── HERO (light cream, same as BlogScreen) ── */}
      <section className="career-hero-wrap">
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(56px,8vw,96px) clamp(16px,4vw,56px)" }}>
          <div className="hero-grid">

            {/* Left — text */}
            <div>
              {/* Badge — mirrors HomeScreen service tag */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: T.tealLight, borderRadius: 4, padding: "5px 14px", marginBottom: 24,
              }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: T.teal, display: "inline-block" }} />
                <span style={{ fontFamily: T.sans, fontSize: 10.5, fontWeight: 700, color: T.teal, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  We're Hiring — Join Our Team
                </span>
              </div>

              <h1 style={{
                fontFamily: T.serif,
                fontSize: "clamp(2rem,3.8vw,3.4rem)",
                color: T.slate, fontWeight: 700,
                lineHeight: 1.08, marginBottom: 10, letterSpacing: "-0.01em",
              }}>
                Build Your Career in India's{" "}
                <span style={{ color: T.teal }}>Fastest-Growing</span>{" "}
                Compliance Industry
              </h1>

              <p style={{
                fontFamily: T.sans, fontSize: 12, fontWeight: 600,
                color: T.tealMid, marginBottom: 20,
                letterSpacing: "0.05em", textTransform: "uppercase",
              }}>
                100+ Experts · 4 Offices · 6 Open Positions
              </p>

              <p style={{
                fontFamily: T.sans, fontSize: "clamp(13.5px,1.4vw,15px)",
                color: T.muted, lineHeight: 1.9, marginBottom: 32, maxWidth: 460,
              }}>
                Join a team of regulatory experts helping businesses navigate India's complex compliance landscape. We're hiring across all levels and domains.
              </p>

              {/* CTAs — same as HomeScreen PrimaryBtn / OutlineBtn */}
              <div className="hero-cta-row">
                <button
                  onClick={() => { const el = document.getElementById("openings"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
                  style={{
                    padding: "13px 32px", fontFamily: T.sans, fontSize: 13.5, fontWeight: 600,
                    letterSpacing: "0.02em", border: "none", borderRadius: 6, cursor: "pointer",
                    background: T.orange, color: "#fff",
                    boxShadow: "0 4px 16px rgba(10,104,104,0.22)",
                    transition: "all 0.22s cubic-bezier(0.4,0,0.2,1)",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = T.teal; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(10,104,104,0.38)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = T.orange; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(10,104,104,0.22)"; }}
                >View Open Positions</button>

                <button
                  onClick={() => router.push("/contact")}
                  style={{
                    padding: "12px 28px", fontFamily: T.sans, fontSize: 13.5, fontWeight: 600,
                    letterSpacing: "0.02em", borderRadius: 6, cursor: "pointer",
                    border: `1.5px solid ${T.border}`,
                    color: "#fff", background: T.orange,
                    transition: "all 0.22s cubic-bezier(0.4,0,0.2,1)",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = T.teal; e.currentTarget.style.color = T.teal; e.currentTarget.style.background = "transparent"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = T.orange; }}
                >Send Your Resume →</button>
              </div>

              {/* Trust pills */}
              <div className="hero-trust-row">
                {["✓ Fast Growth", "✓ Hybrid Work", "✓ Competitive Pay", "✓ Expert Team"].map(b => (
                  <span key={b} style={{
                    padding: "6px 14px", border: `1px solid ${T.border}`,
                    borderRadius: 4, fontSize: 12, color: T.muted,
                    background: T.white, fontFamily: T.sans, fontWeight: 500,
                  }}>{b}</span>
                ))}
              </div>
            </div>

            {/* Right — image with light-blue tint overlay + floating card */}
            <div style={{ position: "relative" }}>
              <div className="hero-img-col">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1000&q=85&fit=crop"
                  alt="SIACC team at work"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
                />
                <div className="hero-img-tint" />
                {/* Counter badge on image — matches HomeScreen hero overlay card */}
                <div style={{
                  position: "absolute", bottom: 28, left: 28,
                  background: "rgba(255,255,255,0.97)", borderRadius: 8, padding: "16px 22px",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.10)", border: `1px solid ${T.border}`,
                  backdropFilter: "blur(12px)", minWidth: 160,
                }}>
                  <div style={{ fontFamily: T.sans, fontSize: 10, fontWeight: 700, color: T.subtle, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 5 }}>Open Today</div>
                  <div style={{ fontFamily: T.serif, fontSize: 30, color: T.teal, fontWeight: 700, lineHeight: 1 }}>6</div>
                  <div style={{ fontFamily: T.sans, fontSize: 11, color: T.muted, marginTop: 3 }}>Positions Available</div>
                </div>
                {/* Since badge */}
                <div style={{
                  position: "absolute", top: 24, right: 24,
                  background: T.teal, borderRadius: 4, padding: "7px 16px",
                }}>
                  <span style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: "0.1em" }}>SINCE 2011</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom accent line */}
        <div style={{ height: 2, background: T.borderLight }}>
          <div style={{ width: "100%", height: "100%", background: T.teal, opacity: 0.4 }} />
        </div>
      </section>

      {/* ── STATS STRIP — teal bg, matches HomeScreen stats band ── */}
      <section style={{ background: T.teal }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="stats-strip">
            {stats.map((s, i) => (
              <div key={s.label} style={{
                textAlign: "center", padding: "36px 16px",
                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}>
                <div style={{ fontSize: 20, marginBottom: 6 }}>{s.icon}</div>
                <div style={{ fontFamily: T.serif, fontSize: "clamp(2rem,2.8vw,2.8rem)", color: "#fff", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.01em" }}>{s.value}</div>
                <div style={{ fontFamily: T.sans, fontSize: 12, color: "rgba(255,255,255,0.80)", marginTop: 8, letterSpacing: "0.04em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIFE AT SIACC — cream bg, matches HomeScreen About section ── */}
      <section className="sec" style={{ background: T.cream }}>
        <div className="inner">
          <div className="about-grid">

            {/* Image col */}
            <div style={{ position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80&fit=crop"
                alt="Team collaborating"
                style={{
                  width: "100%", borderRadius: 10,
                  height: "clamp(280px,42vw,440px)", objectFit: "cover",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.09)",
                }}
              />
              {/* Floating stat card — mirrors HomeScreen about section card */}
              <div style={{
                position: "absolute", bottom: -16, right: -12,
                background: T.white, borderRadius: 8, padding: "20px 26px",
                boxShadow: "0 16px 48px rgba(0,0,0,0.11)", border: `1px solid ${T.tealLight}`,
              }}>
                <div style={{ fontFamily: T.serif, fontSize: 36, color: T.teal, fontWeight: 700, lineHeight: 1 }}>100+</div>
                <div style={{ fontFamily: T.sans, fontSize: 11.5, color: T.muted, marginTop: 4 }}>Experts on the Team</div>
              </div>
              {/* Since badge */}
              <div style={{
                position: "absolute", top: 20, left: 20,
                background: T.teal, borderRadius: 4, padding: "7px 16px",
              }}>
                <span style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: "0.1em" }}>SINCE 2011</span>
              </div>
            </div>

            {/* Text col */}
            <div>
              <div className="sl-row"><div className="sl-line" /><span className="sl-text">Life at SIACC</span></div>
              <h2 style={{ fontFamily: T.serif, fontSize: "clamp(2rem,3.2vw,2.9rem)", color: T.slate, fontWeight: 700, marginBottom: 20, lineHeight: 1.12, letterSpacing: "-0.01em" }}>
                A Place Where<br />Experts Grow
              </h2>
              <p style={{ fontFamily: T.sans, fontSize: 15, color: T.muted, lineHeight: 1.9, marginBottom: 14 }}>
                At SIACC, every team member works on real, high-impact client mandates from day one. You're not a cog in a machine — you're a trusted advisor to manufacturers and importers navigating India's regulatory system.
              </p>
              <p style={{ fontFamily: T.sans, fontSize: 15, color: T.muted, lineHeight: 1.9, marginBottom: 32 }}>
                We invest in our people through training, mentorship, and clear career progression. Many of our division heads started here as freshers and analysts.
              </p>
              <div className="mini-stats-grid">
                {[
                  { n: "12+", l: "Years in Business" }, { n: "50+", l: "Regulatory Domains" },
                  { n: "4",   l: "Office Locations" },  { n: "98%", l: "Client Success Rate" },
                ].map((s, i) => (
                  <div key={s.l} style={{
                    padding: "16px 20px", background: T.white,
                    borderRadius: 8, border: `1px solid ${T.border}`,
                    borderLeft: `3px solid ${i % 2 === 0 ? T.teal : T.amber}`,
                  }}>
                    <div style={{ fontFamily: T.serif, fontSize: 26, color: i % 2 === 0 ? T.teal : T.amber, fontWeight: 700, lineHeight: 1 }}>{s.n}</div>
                    <div style={{ fontFamily: T.sans, fontSize: 11.5, color: T.muted, marginTop: 4 }}>{s.l}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button
                  onClick={() => router.push("/about")}
                  style={{
                    padding: "13px 32px", fontFamily: T.sans, fontSize: 13.5, fontWeight: 600,
                    border: "none", borderRadius: 6, cursor: "pointer",
                    background: T.orange, color: "#fff",
                    boxShadow: "0 4px 16px rgba(10,104,104,0.22)",
                    transition: "all 0.22s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = T.teal; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = T.orange; e.currentTarget.style.transform = "translateY(0)"; }}
                >Learn About SIACC →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PERKS — white bg, matches HomeScreen Why Choose Us ── */}
      <section className="sec" style={{ background: T.white }}>
        <div className="inner">

          {/* Banner — light teal tint instead of dark overlay */}
          <div className="perks-banner">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&q=80&fit=crop"
              alt="Office culture"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }}
            />
            {/* Light blue tint — same as ctaBand */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(14,128,128,0.82) 0%, rgba(30,136,200,0.55) 55%, rgba(235,245,251,0.30) 100%)" }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 36px" }}>
              <div>
                <div className="sl-row" style={{ marginBottom: 10 }}><div className="sl-line" style={{ background: "rgba(255,255,255,0.7)" }} /><span className="sl-text" style={{ color: "rgba(255,255,255,0.85)" }}>Why You'll Love Working Here</span></div>
                <div style={{ fontFamily: T.serif, fontSize: "clamp(1.2rem,2.5vw,2rem)", color: "#fff", fontWeight: 700, marginBottom: 4 }}>
                  Benefits Built Around You
                </div>
                <p style={{ fontFamily: T.sans, color: "rgba(255,255,255,0.78)", fontSize: 14 }}>Flexible, rewarding, and meaningful work — from day one.</p>
              </div>
            </div>
          </div>

          <div className="perks-grid">
            {perks.map(p => (
              <div key={p.title} className="perk-card">
                <div style={{
                  width: 46, height: 46, borderRadius: 9,
                  background: T.tealLight, display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: 20, marginBottom: 16,
                }}>{p.icon}</div>
                <h3 style={{ fontFamily: T.serif, fontSize: 17, color: T.slate, marginBottom: 8, fontWeight: 600 }}>{p.title}</h3>
                <p style={{ fontFamily: T.sans, fontSize: 14, color: T.muted, lineHeight: 1.75 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS — cream bg ── */}
      <section id="openings" className="sec" style={{ background: T.cream }}>
        <div className="inner">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
              <div className="sl-row"><div className="sl-line" /><span className="sl-text">We're Hiring</span></div>
            </div>
            <h2 style={{ fontFamily: T.serif, fontSize: "clamp(1.8rem,3.2vw,2.9rem)", color: T.slate, fontWeight: 700, letterSpacing: "-0.01em", marginBottom: 14 }}>Open Positions</h2>
            <p style={{ fontFamily: T.sans, color: T.muted, maxWidth: 460, margin: "0 auto", lineHeight: 1.75, fontSize: 14.5 }}>
              Explore current openings across our divisions. All roles come with mentorship, growth paths, and a collaborative team culture.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {openings.map(job => {
              const tc = typeColors[job.type] || { bg: T.tealLight, text: T.tealDark };
              return (
                <div key={job.title} className="job-card">
                  <div>
                    <div className="job-meta">
                      <span style={{
                        fontFamily: T.sans, fontSize: 10, fontWeight: 700,
                        backgroundColor: tc.bg, color: tc.text,
                        padding: "3px 10px", borderRadius: 3, letterSpacing: "0.06em",
                      }}>{job.type}</span>
                      <span style={{
                        fontFamily: T.sans, fontSize: 11, color: T.muted,
                        backgroundColor: T.white, padding: "3px 10px",
                        borderRadius: 3, border: `1px solid ${T.border}`,
                      }}>{job.dept}</span>
                      <span style={{ fontFamily: T.sans, fontSize: 11, color: T.muted }}>📍 {job.location}</span>
                      <span style={{ fontFamily: T.sans, fontSize: 11, color: T.muted }}>💼 {job.exp}</span>
                    </div>
                    <h3 style={{ fontFamily: T.serif, fontSize: "clamp(15px,2vw,18px)", color: T.slate, marginBottom: 10, fontWeight: 600 }}>{job.title}</h3>
                    <p style={{ fontFamily: T.sans, fontSize: 14, color: T.muted, lineHeight: 1.7 }}>{job.desc}</p>
                  </div>
                  <button
                    onClick={() => router.push("/contact")}
                    style={{
                      padding: "12px 26px", background: T.orange, color: "#fff",
                      fontWeight: 600, borderRadius: 6, border: "none",
                      fontFamily: T.sans, fontSize: 13, cursor: "pointer",
                      whiteSpace: "nowrap", transition: "background 0.2s",
                      boxShadow: "0 4px 14px rgba(249,115,22,0.28)",
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = T.teal}
                    onMouseLeave={e => e.currentTarget.style.background = T.orange}
                  >Apply Now →</button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA BAND — exact same as HomeScreen CTA band ── */}
      <section style={{
        background: "#EBF5FB",
        borderTop: "1px solid #C8DFF0",
        borderBottom: "1px solid #C8DFF0",
        padding: "80px clamp(16px,5vw,56px)",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="cta-split">
            <div>
              <div className="sl-row" style={{ marginBottom: 20 }}><div className="sl-line" /><span className="sl-text">Don't See the Right Role?</span></div>
              <h2 style={{ fontFamily: T.serif, fontSize: "clamp(1.9rem,3.2vw,2.9rem)", color: T.slate, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: 14 }}>
                Send Us Your Resume<br />Anytime
              </h2>
              <p style={{ fontFamily: T.sans, color: T.muted, fontSize: 14.5, lineHeight: 1.8 }}>
                We're always looking for talented people. Send your resume and we'll reach out when there's a fit — across any of our divisions.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
              <button
                onClick={() => router.push("/contact")}
                style={{
                  padding: "14px 36px", fontFamily: T.sans, fontSize: 14, fontWeight: 600,
                  letterSpacing: "0.02em", border: "none", borderRadius: 6, cursor: "pointer",
                  background: T.orange, color: "#fff", whiteSpace: "nowrap",
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = T.teal}
                onMouseLeave={e => e.currentTarget.style.background = T.orange}
              >Send Spontaneous Application</button>
              <a
                href="mailto:info@siacc.co.in"
                style={{
                  padding: "13px 28px", border: `1.5px solid ${T.border}`,
                  borderRadius: 6, fontFamily: T.sans, fontSize: 14, fontWeight: 500,
                  color: T.slate, display: "flex", alignItems: "center",
                  justifyContent: "center", gap: 8, whiteSpace: "nowrap",
                  background: T.white, transition: "border-color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = T.teal}
                onMouseLeave={e => e.currentTarget.style.borderColor = T.border}
              >✉️ info@siacc.co.in</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}