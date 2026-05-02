"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

/* ── Same design system as HomeScreen ── */
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
};

const stats = [
  { value: "2011", label: "Year Founded", icon: "📅" },
  { value: "12+", label: "Years of Experience", icon: "🏆" },
  { value: "10,000+", label: "Clients Served", icon: "🤝" },
  { value: "98%", label: "Success Rate", icon: "✅" },
];

const timeline = [
  { year: "2011", title: "Founded in New Delhi", desc: "Siacc India was established with a mission to simplify Indian regulatory compliance for businesses of all sizes." },
  { year: "2014", title: "Expanded to BIS Services", desc: "Launched dedicated BIS ISI Mark & CRS certification services, becoming one of India's first specialized consultancies." },
  { year: "2017", title: "10,000 Clients Milestone", desc: "Crossed the 10,000 client mark and expanded our team to 80+ certification experts across India." },
  { year: "2020", title: "EPR & Environment Division", desc: "Launched a dedicated EPR division covering E-Waste, Plastic, Battery and Tyre compliance under CPCB norms." },
  { year: "2023", title: "Pan-India Presence", desc: "Opened offices in Mumbai, Bengaluru & Chennai. Now serving clients in 25+ countries for India market entry." },
];

const values = [
  { icon: "🎯", title: "Accuracy First", desc: "Every application we file is meticulously reviewed. We don't cut corners — ever." },
  { icon: "🤝", title: "Client Partnership", desc: "We treat your business as our own. Your compliance success is our reputation." },
  { icon: "🔍", title: "Transparency", desc: "Clear timelines, honest pricing, and regular updates at every stage of your certification." },
  { icon: "⚡", title: "Speed Without Compromise", desc: "Fast doesn't mean sloppy. We move quickly while maintaining the highest quality standards." },
];

const heroHighlights = [
  { number: "BIS", label: "CRS & ISI Certification" },
  { number: "WPC", label: "ETA Approval for Wireless Devices" },
  { number: "TEST", label: "Testing & Product Certification" },
  { number: "ISO", label: "International ISO Standards" },
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
        *, *::before, *::after { box-sizing: border-box; margin:0; padding:0; }
        img { max-width:100%; display:block; }
        a { text-decoration:none; color:inherit; }

        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr; } .hero-right { display: none; } }

        .stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 0; }
        @media (max-width: 640px) { .stats-grid { grid-template-columns: repeat(2,1fr); } }

        .story-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        @media (max-width: 900px) { .story-grid { grid-template-columns: 1fr; gap: 40px; } }

        .values-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px,1fr)); gap: 20px; }

        .highlight-card {
          background: rgba(235,245,245,0.18);
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 14px; padding: 22px 18px; transition: background 0.2s;
        }
        .highlight-card:hover { background: rgba(235,245,245,0.28); }

        .value-card {
          background: ${T.white}; border-radius: 10px; padding: 28px;
          border: 1px solid ${T.border}; transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
          position: relative; overflow: hidden;
        }
        .value-card::before {
          content:''; position:absolute; inset:0; background:${T.tealGhost};
          opacity:0; transition:opacity 0.25s;
        }
        .value-card:hover { border-color:${T.teal}; transform:translateY(-3px); box-shadow:0 12px 32px rgba(10,104,104,0.09); }
        .value-card:hover::before { opacity:1; }
        .value-card > * { position:relative; }

        .mission-card {
          background: ${T.white}; border-radius: 10px; padding: 20px 24px;
          border: 1px solid ${T.border}; display: flex; gap: 16px; align-items: flex-start;
          transition: all 0.2s;
        }
        .mission-card:hover { border-color: ${T.teal}; box-shadow: 0 6px 20px rgba(30,136,200,0.08); }

        .sec-pad { padding: 88px 24px; }
        @media (max-width: 768px) { .sec-pad { padding: 56px 16px !important; } }
      `}</style>

      <Navbar />

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "72vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1800&q=85&fit=crop"
          alt="SIACC compliance team"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(13,27,42,0.90) 50%, rgba(13,27,42,0.55) 100%)" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 40px", width: "100%", position: "relative", zIndex: 2 }}>
          <div className="hero-grid">
            {/* Left */}
            <div>
              {/* Hero badge — teal style matching home */}
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: T.tealLight, border: `1px solid ${T.teal}`, borderRadius: 4, padding: "5px 14px", marginBottom: 24 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: T.teal, display: "inline-block" }} />
                <span style={{ color: T.teal, fontSize: 10.5, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>About SIACC India</span>
              </div>
              <h1 style={{ fontFamily: T.serif, fontSize: "clamp(2rem,4vw,3.4rem)", color: "#fff", marginBottom: 20, fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.01em" }}>
                12 Years of Simplifying<br />Indian Compliance
              </h1>
              <p style={{ fontFamily: T.sans, color: "rgba(255,255,255,0.75)", fontSize: 15, lineHeight: 1.9, maxWidth: 520, marginBottom: 32 }}>
                We started SIACC with one belief — no business should lose market access due to complex regulatory paperwork. Today, we are India's most trusted certification consultancy, having served 10,000+ clients across 25+ countries.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {/* Primary — orange matching home PrimaryBtn */}
                <button onClick={() => router.push("/contact")}
                  style={{
                    padding: "13px 32px", backgroundColor: "#F97316", color: "#fff",
                    borderRadius: 6, border: "none", fontSize: 13.5, fontWeight: 600,
                    cursor: "pointer", fontFamily: T.sans, letterSpacing: "0.02em",
                    boxShadow: "0 4px 16px rgba(249,115,22,0.32)",
                    transition: "all 0.22s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = T.teal; e.currentTarget.style.boxShadow = "0 8px 28px rgba(10,104,104,0.38)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#F97316"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(249,115,22,0.32)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  Get Free Consultation
                </button>
                {/* Outline — matching home OutlineBtn */}
                <button onClick={() => router.push("/services")}
                  style={{
                    padding: "12px 28px", border: `1.5px solid ${T.border}`,
                    color: T.white, borderRadius: 6, background: "#F97316",
                    fontSize: 13.5, fontWeight: 600, cursor: "pointer",
                    fontFamily: T.sans, letterSpacing: "0.02em", transition: "all 0.22s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = T.teal; e.currentTarget.style.color = T.teal; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#F97316"; e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.white; }}>
                  Our Services →
                </button>
              </div>
            </div>

            {/* Right — highlights */}
            <div className="hero-right">
              <p style={{ fontSize: 11, fontWeight: 700, color: T.teal, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, fontFamily: T.sans }}>What We Certify</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
                {heroHighlights.map((h) => (
                  <div key={h.number} className="highlight-card">
                    <div style={{ fontFamily: T.serif, fontSize: 22, color: T.teal, fontWeight: 700, marginBottom: 6 }}>{h.number}</div>
                    <div style={{ fontSize: 12, fontFamily: T.sans, color: "rgba(255,255,255,0.72)", lineHeight: 1.5 }}>{h.label}</div>
                  </div>
                ))}
              </div>
              <div style={{
                background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 10, padding: "18px 22px", display: "flex", alignItems: "center",
                gap: 14, backdropFilter: "blur(6px)",
              }}>
                <div style={{ fontSize: 32, flexShrink: 0 }}>🏆</div>
                <div>
                  <div style={{ fontFamily: T.serif, fontSize: 15, color: "#fff", fontWeight: 700, marginBottom: 4 }}>India's Most Trusted</div>
                  <div style={{ fontSize: 12, fontFamily: T.sans, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>Rated #1 compliance consultancy by 10,000+ manufacturers & importers since 2011.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP — teal bg matching home stats band ── */}
      <section style={{ background: T.teal }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div key={s.label} style={{
                textAlign: "center", padding: "36px 16px",
                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}>
                <div style={{ fontSize: 20, marginBottom: 6 }}>{s.icon}</div>
                <div style={{ fontFamily: T.serif, fontSize: "clamp(1.6rem,2.5vw,2.2rem)", color: "#ffffff", fontWeight: 700, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: T.sans, fontSize: 12, color: "rgba(255,255,255,0.80)", marginTop: 6, letterSpacing: "0.04em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY + MISSION — cream bg matching home about section ── */}
      <section className="sec-pad" style={{ background: T.cream }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="story-grid">
            {/* Image side */}
            <div style={{ position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80&fit=crop"
                alt="Compliance experts working"
                style={{ width: "100%", borderRadius: 10, height: 460, objectFit: "cover", display: "block", boxShadow: "0 24px 64px rgba(0,0,0,0.10)" }}
              />
              {/* Floating badge — matching home about section */}
              <div style={{
                position: "absolute", bottom: -16, right: -12,
                background: T.white, borderRadius: 8, padding: "20px 26px",
                boxShadow: "0 16px 48px rgba(0,0,0,0.11)", border: `1px solid ${T.tealLight}`,
              }}>
                <div style={{ fontFamily: T.serif, fontSize: 36, color: T.teal, fontWeight: 700, lineHeight: 1 }}>10K+</div>
                <div style={{ fontFamily: T.sans, fontSize: 11.5, color: T.muted, marginTop: 4 }}>Happy Clients Served</div>
              </div>
              {/* Year badge — matching home teal ribbon */}
              <div style={{ position: "absolute", top: 20, left: 20, background: T.teal, borderRadius: 4, padding: "7px 16px" }}>
                <span style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: "0.1em" }}>EST. 2011</span>
              </div>
            </div>

            {/* Text side */}
            <div>
              <SectionLabel>Our Story</SectionLabel>
              <h2 style={{ fontFamily: T.serif, fontSize: "clamp(1.7rem,3vw,2.5rem)", color: T.slate, marginBottom: 20, fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.01em" }}>
                Built by Compliance Experts,<br />for Businesses
              </h2>
              <p style={{ fontFamily: T.sans, fontSize: 15, color: T.muted, lineHeight: 1.9, marginBottom: 16 }}>
                In 2011, our founder Vikram Anand — after spending over a decade navigating India's complex regulatory maze — saw how countless manufacturers and importers were losing months and lakhs of rupees due to the lack of reliable certification guidance.
              </p>
              <p style={{ fontFamily: T.sans, fontSize: 15, color: T.muted, lineHeight: 1.9, marginBottom: 32 }}>
                He founded SIACC to bridge that gap. What started as a three-person office in Connaught Place has grown into a 100+ strong team of regulatory experts, lawyers, and certification specialists serving clients from startups to Fortune 500 companies.
              </p>

              {/* Mission / Vision cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { icon: "🎯", title: "Our Mission", text: "To make Indian regulatory compliance accessible, affordable, and stress-free for every business — from local startups to global enterprises entering India." },
                  { icon: "🔭", title: "Our Vision", text: "To be Asia's most trusted compliance partner, known for speed, accuracy, and the genuine care we bring to every client relationship." },
                  { icon: "⭐", title: "Our Promise", text: "No hidden fees. No unnecessary delays. No failed applications. If we take your case, we see it through — guaranteed." },
                ].map((card) => (
                  <div key={card.title} className="mission-card">
                    <div style={{ width: 40, height: 40, borderRadius: 9, backgroundColor: T.tealLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{card.icon}</div>
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

      {/* ── VALUES — white bg matching home services section ── */}
      <section className="sec-pad" style={{ background: T.white }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
              <SectionLabel>What We Stand For</SectionLabel>
            </div>
            <h2 style={{ fontFamily: T.serif, fontSize: "clamp(1.7rem,3vw,2.5rem)", color: T.slate, fontWeight: 700, letterSpacing: "-0.01em" }}>Our Core Values</h2>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="value-card">
                <div style={{ width: 50, height: 50, borderRadius: 10, backgroundColor: T.tealLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ fontFamily: T.serif, fontSize: 17, color: T.slate, marginBottom: 8, fontWeight: 600 }}>{v.title}</h3>
                <p style={{ fontFamily: T.sans, fontSize: 13, color: T.muted, lineHeight: 1.75, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE — dark bg matching home CTA band slate, but kept image ── */}
      <section style={{ position: "relative", overflow: "hidden" }} className="sec-pad">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80&fit=crop"
          alt="Company growth"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.93)" }} />

        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
              <SectionLabel>Our Journey</SectionLabel>
            </div>
            <h2 style={{ fontFamily: T.serif, fontSize: "clamp(1.7rem,3vw,2.5rem)", color: "#fff", fontWeight: 700, letterSpacing: "-0.01em" }}>Milestones That Define Us</h2>
          </div>

          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", left: 88, top: 0, bottom: 0, width: 1.5, background: `rgba(30,136,200,0.35)` }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {timeline.map((item) => (
                <div key={item.year} style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>
                  {/* Year pill */}
                  <div style={{ width: 80, flexShrink: 0, textAlign: "right" }}>
                    <span style={{
                      display: "inline-block", padding: "4px 12px",
                      backgroundColor: T.teal, color: "#fff",
                      fontSize: 11, fontWeight: 700, borderRadius: 999, fontFamily: T.sans,
                      letterSpacing: "0.04em",
                    }}>{item.year}</span>
                  </div>
                  {/* Dot */}
                  <div style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: T.teal, border: "2.5px solid #fff", flexShrink: 0, marginTop: 5, position: "relative", zIndex: 1 }} />
                  {/* Card */}
                  <div style={{
                    background: "rgba(255,255,255,0.06)", borderRadius: 10, padding: "20px 24px",
                    border: `1px solid rgba(30,136,200,0.20)`, flex: 1, backdropFilter: "blur(6px)",
                  }}>
                    <h3 style={{ fontFamily: T.serif, fontSize: 16, color: "#fff", marginBottom: 8, fontWeight: 600 }}>{item.title}</h3>
                    <p style={{ fontFamily: T.sans, fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND — light blue matching home CTA section ── */}
      <section style={{ background: "#EBF5FB", borderTop: "1px solid #C8DFF0", borderBottom: "1px solid #C8DFF0", padding: "80px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 28, height: 1.5, background: T.teal }} />
              <span style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.teal }}>Start Today</span>
              <div style={{ width: 28, height: 1.5, background: T.teal }} />
            </div>
          </div>
          <h2 style={{ fontFamily: T.serif, fontSize: "clamp(1.7rem,3vw,2.6rem)", color: T.slate, marginBottom: 16, fontWeight: 700, letterSpacing: "-0.01em" }}>
            Ready to Work With India's Best?
          </h2>
          <p style={{ fontFamily: T.sans, color: T.muted, marginBottom: 36, lineHeight: 1.8, fontSize: 15 }}>
            Join 10,000+ businesses who trust SIACC for their compliance needs.<br />Free consultation. Clear timeline. Transparent pricing.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }}>
            {/* Primary orange button */}
            <button onClick={() => router.push("/contact")}
              style={{
                padding: "13px 36px", backgroundColor: "#F97316", color: "#fff",
                fontWeight: 600, borderRadius: 6, border: "none", fontSize: 13.5,
                cursor: "pointer", fontFamily: T.sans, letterSpacing: "0.02em",
                boxShadow: "0 4px 16px rgba(249,115,22,0.28)", transition: "all 0.22s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = T.teal; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#F97316"; e.currentTarget.style.transform = "translateY(0)"; }}>
              Get Free Consultation
            </button>
            {/* Outline teal button */}
            <button onClick={() => router.push("/services")}
              style={{
                padding: "12px 32px", border: `1.5px solid ${T.border}`,
                color: T.white, borderRadius: 6, background: "#F97316",
                fontSize: 13.5, fontWeight: 600, cursor: "pointer",
                fontFamily: T.sans, letterSpacing: "0.02em", transition: "all 0.22s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = T.teal; e.currentTarget.style.color = T.teal; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#F97316"; e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.white; }}>
              View Our Services →
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}