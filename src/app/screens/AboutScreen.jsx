"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

/* ── Shared token palette (HomeScreen / BlogScreen / CareerScreen / ContactScreen) ── */
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
  ctaBand: "#EBF5FB",
  ctaBandBorder: "#C8DFF0",
  orange: "#F97316",
  orangeDark: "#EA6A0A",
  serif: "'Cormorant Garamond', 'Georgia', serif",
  sans: "'Outfit', 'system-ui', sans-serif",
};

const stats = [
  { value: "2011",   label: "Year Founded",       icon: "📅" },
  { value: "12+",    label: "Years of Experience", icon: "🏆" },
  { value: "10,000+", label: "Clients Served",    icon: "🤝" },
  { value: "98%",    label: "Success Rate",        icon: "✅" },
];

const timeline = [
  { year: "2011", title: "Founded in New Delhi",       desc: "Siacc India was established with a mission to simplify Indian regulatory compliance for businesses of all sizes." },
  { year: "2014", title: "Expanded to BIS Services",   desc: "Launched dedicated BIS ISI Mark & CRS certification services, becoming one of India's first specialized consultancies." },
  { year: "2017", title: "10,000 Clients Milestone",   desc: "Crossed the 10,000 client mark and expanded our team to 80+ certification experts across India." },
  { year: "2020", title: "EPR & Environment Division", desc: "Launched a dedicated EPR division covering E-Waste, Plastic, Battery and Tyre compliance under CPCB norms." },
  { year: "2023", title: "Pan-India Presence",         desc: "Opened offices in Mumbai, Bengaluru & Chennai. Now serving clients in 25+ countries for India market entry." },
];

const values = [
  { icon: "🎯", title: "Accuracy First",          desc: "Every application we file is meticulously reviewed. We don't cut corners — ever." },
  { icon: "🤝", title: "Client Partnership",       desc: "We treat your business as our own. Your compliance success is our reputation." },
  { icon: "🔍", title: "Transparency",             desc: "Clear timelines, honest pricing, and regular updates at every stage of your certification." },
  { icon: "⚡", title: "Speed Without Compromise", desc: "Fast doesn't mean sloppy. We move quickly while maintaining the highest quality standards." },
];

const heroHighlights = [
  { number: "BIS",  label: "CRS & ISI Certification" },
  { number: "WPC",  label: "ETA Approval for Wireless Devices" },
  { number: "TEST", label: "Testing & Product Certification" },
  { number: "ISO",  label: "International ISO Standards" },
];

function SectionLabel({ children, center = false }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, justifyContent: center ? "center" : "flex-start" }}>
      <div style={{ width: 28, height: 1.5, background: T.teal }} />
      <span style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: T.teal }}>{children}</span>
    </div>
  );
}

export default function AboutScreen() {
  const router = useRouter();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: T.white, fontFamily: T.sans, color: T.body }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        img { max-width:100%; display:block; }
        a { text-decoration:none; color:inherit; }

        /* ── HERO — light cream, matching BlogScreen / CareerScreen / ContactScreen ── */
        .about-hero-wrap {
          background: ${T.cream};
          border-bottom: 1px solid ${T.border};
          position: relative; overflow: hidden;
        }
        .about-hero-wrap::before {
          content:''; position:absolute; top:-100px; right:-140px;
          width:500px; height:500px;
          background:radial-gradient(circle, rgba(30,136,200,0.11) 0%, transparent 70%);
          border-radius:50%; pointer-events:none;
        }

        .hero-grid { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; }
        @media(max-width:900px){ .hero-grid { grid-template-columns:1fr; gap:40px; } .hero-right { display:none; } }

        /* Hero right — light tiles matching HomeScreen mini-stat style */
        .highlight-card {
          background: ${T.white};
          border: 1px solid ${T.border};
          border-radius: 8px; padding: 18px 16px;
          transition: all 0.2s;
        }
        .highlight-card:hover { border-color:${T.teal}; box-shadow:0 6px 18px rgba(30,136,200,0.09); transform:translateY(-2px); }

        /* Stats strip */
        .stats-grid { display:grid; grid-template-columns:repeat(4,1fr); }
        @media(max-width:640px){ .stats-grid { grid-template-columns:repeat(2,1fr); } }

        /* Story grid */
        .story-grid { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; }
        @media(max-width:900px){ .story-grid { grid-template-columns:1fr; gap:40px; } }

        /* Values */
        .values-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:16px; }
        .value-card {
          background:${T.white}; border-radius:10px; padding:28px;
          border:1px solid ${T.border}; transition:all 0.25s cubic-bezier(0.4,0,0.2,1);
          position:relative; overflow:hidden;
        }
        .value-card::before { content:''; position:absolute; inset:0; background:${T.tealGhost}; opacity:0; transition:opacity 0.25s; }
        .value-card:hover { border-color:${T.teal}; transform:translateY(-3px); box-shadow:0 12px 32px rgba(10,104,104,0.09); }
        .value-card:hover::before { opacity:1; }
        .value-card > * { position:relative; }

        /* Mission cards */
        .mission-card {
          background:${T.white}; border-radius:10px; padding:20px 24px;
          border:1px solid ${T.border}; display:flex; gap:16px; align-items:flex-start;
          transition:all 0.2s;
        }
        .mission-card:hover { border-color:${T.teal}; box-shadow:0 6px 20px rgba(30,136,200,0.08); }

        /* CTA split */
        .cta-split { display:grid; grid-template-columns:1fr auto; gap:40px; align-items:center; }
        @media(max-width:720px){ .cta-split { grid-template-columns:1fr; gap:28px; } }

        .sec { padding:clamp(64px,8vw,104px) clamp(16px,5vw,56px); }
        .inner { max-width:1280px; margin:0 auto; }
      `}</style>

      <Navbar />

      {/* ── HERO — light cream (same pattern as BlogScreen / CareerScreen / ContactScreen) ── */}
      <section className="about-hero-wrap">
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
                  About SIACC India
                </span>
              </div>

              <h1 style={{
                fontFamily: T.serif,
                fontSize: "clamp(2rem,3.8vw,3.4rem)",
                color: T.slate, fontWeight: 700,
                lineHeight: 1.08, marginBottom: 10, letterSpacing: "-0.01em",
              }}>
                12 Years of Simplifying<br />Indian Compliance
              </h1>

              <p style={{
                fontFamily: T.sans, fontSize: 12, fontWeight: 600,
                color: T.tealMid, marginBottom: 20,
                letterSpacing: "0.05em", textTransform: "uppercase",
              }}>
                Est. 2011 · 10,000+ Clients · 25+ Countries
              </p>

              <p style={{
                fontFamily: T.sans, fontSize: "clamp(13.5px,1.4vw,15px)",
                color: T.muted, lineHeight: 1.9, marginBottom: 32, maxWidth: 480,
              }}>
                We started SIACC with one belief — no business should lose market access due to complex regulatory paperwork. Today, we are India's most trusted certification consultancy, having served 10,000+ clients across 25+ countries.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button
                  onClick={() => router.push("/contact")}
                  style={{
                    padding: "13px 32px", fontFamily: T.sans, fontSize: 13.5, fontWeight: 600,
                    letterSpacing: "0.02em", border: "none", borderRadius: 6, cursor: "pointer",
                    background: T.orange, color: "#fff",
                    boxShadow: "0 4px 16px rgba(10,104,104,0.22)",
                    transition: "all 0.22s cubic-bezier(0.4,0,0.2,1)",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = T.teal; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(10,104,104,0.38)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = T.orange; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(10,104,104,0.22)"; }}
                >Get Free Consultation</button>

                <button
                  onClick={() => router.push("/services")}
                  style={{
                    padding: "12px 28px", fontFamily: T.sans, fontSize: 13.5, fontWeight: 600,
                    letterSpacing: "0.02em", borderRadius: 6, cursor: "pointer",
                    border: `1.5px solid ${T.border}`,
                    color: T.white, background: T.orange,
                    transition: "all 0.22s cubic-bezier(0.4,0,0.2,1)",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = T.teal; e.currentTarget.style.color = T.teal; e.currentTarget.style.background = "transparent"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.white; e.currentTarget.style.background = T.orange; }}
                >Our Services →</button>
              </div>
            </div>

            {/* Right — light highlight tiles (matching HomeScreen mini-stat style) */}
            <div className="hero-right">
              <div style={{ marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 28, height: 1.5, background: T.teal }} />
                  <span style={{ fontFamily: T.sans, fontSize: 10.5, fontWeight: 700, color: T.teal, letterSpacing: "0.12em", textTransform: "uppercase" }}>What We Certify</span>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
                {heroHighlights.map((h, i) => (
                  <div key={h.number} className="highlight-card" style={{ borderTop: `3px solid ${i % 2 === 0 ? T.teal : T.amber}` }}>
                    <div style={{ fontFamily: T.serif, fontSize: 22, color: i % 2 === 0 ? T.teal : T.amber, fontWeight: 700, marginBottom: 6, lineHeight: 1 }}>{h.number}</div>
                    <div style={{ fontFamily: T.sans, fontSize: 12, color: T.muted, lineHeight: 1.5 }}>{h.label}</div>
                  </div>
                ))}
              </div>

              {/* Trust tile */}
              <div style={{
                background: T.white, border: `1px solid ${T.border}`,
                borderRadius: 8, padding: "18px 20px",
                display: "flex", alignItems: "center", gap: 14,
              }}>
                <div style={{ fontSize: 32, flexShrink: 0 }}>🏆</div>
                <div>
                  <div style={{ fontFamily: T.serif, fontSize: 16, color: T.slate, fontWeight: 700, marginBottom: 4 }}>India's Most Trusted</div>
                  <div style={{ fontFamily: T.sans, fontSize: 12, color: T.muted, lineHeight: 1.6 }}>Rated #1 compliance consultancy by 10,000+ manufacturers & importers since 2011.</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom accent line — same as other screens */}
        <div style={{ height: 2, background: T.borderLight }}>
          <div style={{ width: "100%", height: "100%", background: T.teal, opacity: 0.4 }} />
        </div>
      </section>

      {/* ── STATS STRIP — teal bg ── */}
      <section style={{ background: T.teal }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="stats-grid">
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

      {/* ── STORY + MISSION — cream bg ── */}
      <section className="sec" style={{ background: T.cream }}>
        <div className="inner">
          <div className="story-grid">

            {/* Image side */}
            <div style={{ position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80&fit=crop"
                alt="Compliance experts working"
                style={{ width: "100%", borderRadius: 10, height: 460, objectFit: "cover", boxShadow: "0 24px 64px rgba(0,0,0,0.10)" }}
              />
              {/* Floating badge */}
              <div style={{
                position: "absolute", bottom: -16, right: -12,
                background: T.white, borderRadius: 8, padding: "20px 26px",
                boxShadow: "0 16px 48px rgba(0,0,0,0.11)", border: `1px solid ${T.tealLight}`,
              }}>
                <div style={{ fontFamily: T.serif, fontSize: 36, color: T.teal, fontWeight: 700, lineHeight: 1 }}>10K+</div>
                <div style={{ fontFamily: T.sans, fontSize: 11.5, color: T.muted, marginTop: 4 }}>Happy Clients Served</div>
              </div>
              <div style={{ position: "absolute", top: 20, left: 20, background: T.teal, borderRadius: 4, padding: "7px 16px" }}>
                <span style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: "0.1em" }}>EST. 2011</span>
              </div>
            </div>

            {/* Text side */}
            <div>
              <SectionLabel>Our Story</SectionLabel>
              <h2 style={{ fontFamily: T.serif, fontSize: "clamp(2rem,3.2vw,2.9rem)", color: T.slate, marginBottom: 20, fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.01em" }}>
                Built by Compliance Experts,<br />for Businesses
              </h2>
              <p style={{ fontFamily: T.sans, fontSize: 15, color: T.muted, lineHeight: 1.9, marginBottom: 16 }}>
                In 2011, our founder Vikram Anand — after spending over a decade navigating India's complex regulatory maze — saw how countless manufacturers and importers were losing months and lakhs of rupees due to the lack of reliable certification guidance.
              </p>
              <p style={{ fontFamily: T.sans, fontSize: 15, color: T.muted, lineHeight: 1.9, marginBottom: 32 }}>
                He founded SIACC to bridge that gap. What started as a three-person office in Connaught Place has grown into a 100+ strong team of regulatory experts, lawyers, and certification specialists serving clients from startups to Fortune 500 companies.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { icon: "🎯", title: "Our Mission", text: "To make Indian regulatory compliance accessible, affordable, and stress-free for every business — from local startups to global enterprises entering India." },
                  { icon: "🔭", title: "Our Vision",  text: "To be Asia's most trusted compliance partner, known for speed, accuracy, and the genuine care we bring to every client relationship." },
                  { icon: "⭐", title: "Our Promise", text: "No hidden fees. No unnecessary delays. No failed applications. If we take your case, we see it through — guaranteed." },
                ].map(card => (
                  <div key={card.title} className="mission-card">
                    <div style={{ width: 40, height: 40, borderRadius: 9, background: T.tealLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{card.icon}</div>
                    <div>
                      <h3 style={{ fontFamily: T.serif, fontSize: 16, color: T.slate, marginBottom: 5, fontWeight: 600 }}>{card.title}</h3>
                      <p style={{ fontFamily: T.sans, fontSize: 13, color: T.muted, lineHeight: 1.75, margin: 0 }}>{card.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES — white bg ── */}
      <section className="sec" style={{ background: T.white }}>
        <div className="inner">
          <div style={{ textAlign: "center", marginBottom: 35 }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <SectionLabel>What We Stand For</SectionLabel>
            </div>
            <h2 style={{ fontFamily: T.serif, fontSize: "clamp(2rem,3.2vw,2.9rem)", color: T.slate, fontWeight: 700, letterSpacing: "-0.01em" }}>Our Core Values</h2>
          </div>
          <div className="values-grid">
            {values.map(v => (
              <div key={v.title} className="value-card">
                <div style={{ width: 50, height: 50, borderRadius: 10, background: T.tealLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ fontFamily: T.serif, fontSize: 17, color: T.slate, marginBottom: 8, fontWeight: 600 }}>{v.title}</h3>
                <p style={{ fontFamily: T.sans, fontSize: 14, color: T.muted, lineHeight: 1.75, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE — dark photo bg (intentionally kept dark for contrast) ── */}
      <section style={{ position: "relative", overflow: "hidden" }} className="sec">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80&fit=crop"
          alt="Company growth"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* Light blue tint overlay — ties back to palette without full dark */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(13,27,42,0.95) 0%, rgba(14,128,128,0.88) 100%)" }} />

        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
              <SectionLabel>Our Journey</SectionLabel>
            </div>
            <h2 style={{ fontFamily: T.serif, fontSize: "clamp(2rem,3.2vw,2.9rem)", color: "#fff", fontWeight: 700, letterSpacing: "-0.01em" }}>Milestones That Define Us</h2>
          </div>

          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: 88, top: 0, bottom: 0, width: 1.5, background: "rgba(30,136,200,0.40)" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {timeline.map(item => (
                <div key={item.year} style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>
                  <div style={{ width: 80, flexShrink: 0, textAlign: "right" }}>
                    <span style={{
                      display: "inline-block", padding: "4px 12px",
                      background: T.teal, color: "#fff",
                      fontSize: 11, fontWeight: 700, borderRadius: 4,
                      fontFamily: T.sans, letterSpacing: "0.04em",
                    }}>{item.year}</span>
                  </div>
                  <div style={{ width: 14, height: 14, borderRadius: "50%", background: T.teal, border: "2.5px solid #fff", flexShrink: 0, marginTop: 5, position: "relative", zIndex: 1 }} />
                  <div style={{
                    background: "rgba(255,255,255,0.07)", borderRadius: 10, padding: "20px 24px",
                    border: "1px solid rgba(30,136,200,0.22)", flex: 1, backdropFilter: "blur(6px)",
                  }}>
                    <h3 style={{ fontFamily: T.serif, fontSize: 16, color: "#fff", marginBottom: 8, fontWeight: 600 }}>{item.title}</h3>
                    <p style={{ fontFamily: T.sans, fontSize: 14, color: "rgba(255,255,255,0.68)", lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND — exact HomeScreen / ContactScreen / CareerScreen CTA band ── */}
      <section style={{
        background: T.ctaBand,
        borderTop: `1px solid ${T.ctaBandBorder}`,
        borderBottom: `1px solid ${T.ctaBandBorder}`,
        padding: "80px clamp(16px,5vw,56px)",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="cta-split">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 28, height: 1.5, background: T.teal }} />
                <span style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.teal }}>Start Today</span>
              </div>
              <h2 style={{ fontFamily: T.serif, fontSize: "clamp(1.9rem,3.2vw,2.9rem)", color: T.slate, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: 14 }}>
                Ready to Work With<br />India's Best?
              </h2>
              <p style={{ fontFamily: T.sans, color: T.muted, fontSize: 14.5, lineHeight: 1.8 }}>
                Join 10,000+ businesses who trust SIACC for their compliance needs.<br />Free consultation. Clear timeline. Transparent pricing.
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
              >Get Free Consultation</button>

              <button
                onClick={() => router.push("/services")}
                style={{
                  padding: "13px 28px", border: `1.5px solid ${T.border}`,
                  borderRadius: 6, fontFamily: T.sans, fontSize: 14, fontWeight: 500,
                  color: T.slate, background: T.white, whiteSpace: "nowrap",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = T.teal}
                onMouseLeave={e => e.currentTarget.style.borderColor = T.border}
              >View Our Services →</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}