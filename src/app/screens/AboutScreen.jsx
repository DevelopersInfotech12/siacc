"use client";
import Link from "next/link";
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

const team = [
  { name: "Vikram Anand", role: "Founder & CEO", exp: "22 years in regulatory compliance", initial: "V" },
  { name: "Sneha Kapoor", role: "Head – BIS Division", exp: "14 years in BIS certification", initial: "S" },
  { name: "Rohit Verma", role: "Head – EPR & Environment", exp: "12 years in waste management compliance", initial: "R" },
  { name: "Anjali Mehta", role: "Head – International Affairs", exp: "10 years in global product compliance", initial: "A" },
];

const values = [
  { icon: "🎯", title: "Accuracy First", desc: "Every application we file is meticulously reviewed. We don't cut corners — ever." },
  { icon: "🤝", title: "Client Partnership", desc: "We treat your business as our own. Your compliance success is our reputation." },
  { icon: "🔍", title: "Transparency", desc: "Clear timelines, honest pricing, and regular updates at every stage of your certification." },
  { icon: "⚡", title: "Speed Without Compromise", desc: "Fast doesn't mean sloppy. We move quickly while maintaining the highest quality standards." },
];

const heroHighlights = [
  { number: "BIS", label: "ISI Mark & CRS Certified" },
  { number: "EPR", label: "E-Waste & Plastic Compliance" },
  { number: "WPC", label: "Wireless Product Approvals" },
  { number: "ISO", label: "International Standards" },
];

export default function AboutScreen() {
  const router = useRouter();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: C.white, fontFamily: C.sans, color: C.bodyText }}>
      <style>{`
        * { box-sizing: border-box; }

        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr; } .hero-right { display: none; } }

        .stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 0; }
        @media (max-width: 640px) { .stats-grid { grid-template-columns: repeat(2,1fr); } }

        .story-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        @media (max-width: 900px) { .story-grid { grid-template-columns: 1fr; gap: 40px; } }

        .values-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px,1fr)); gap: 20px; }

        .team-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px,1fr)); gap: 20px; }

        .highlight-card { background:rgba(249,115,22,0.08); border:1px solid rgba(249,115,22,0.2); border-radius:14px; padding:22px 18px; transition:background 0.2s; }
        .highlight-card:hover { background:rgba(249,115,22,0.14); }

        .value-card { background:#fff; border-radius:16px; padding:28px; border:1.5px solid ${C.border}; transition:all 0.2s; }
        .value-card:hover { border-color:${C.primary}; box-shadow:0 8px 24px rgba(249,115,22,0.10); transform:translateY(-2px); }

        .mission-card { background:#fff; border-radius:16px; padding:24px 28px; border:1.5px solid ${C.border}; display:flex; gap:16px; align-items:flex-start; transition:all 0.2s; }
        .mission-card:hover { border-color:${C.blue}; box-shadow:0 6px 20px rgba(8,145,178,0.08); }

        .team-card { background:#fff; border-radius:16px; padding:28px; border:1.5px solid ${C.border}; display:flex; gap:16px; align-items:flex-start; transition:all 0.2s; }
        .team-card:hover { border-color:${C.primary}; box-shadow:0 8px 24px rgba(249,115,22,0.10); }

        .sec-pad { padding: 88px 24px; }
        @media (max-width: 768px) { .sec-pad { padding: 56px 16px !important; } }

        .section-label { font-size:11px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:${C.primary}; margin-bottom:12px; display:block; }
      `}</style>

      <Navbar />

      {/* ── HERO — full bleed image ── */}
      <section style={{ position: "relative", minHeight: "72vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1800&q=85&fit=crop"
          alt="SIACC compliance team"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,35,64,0.88) 50%, rgba(12,35,64,0.5) 100%)" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 40px", width: "100%", position: "relative", zIndex: 2 }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 36 }}>
            <button onClick={() => router.push("/")} style={{ color: C.primary, fontSize: 13, background: "none", border: "none", cursor: "pointer", fontFamily: C.sans }}>Home</button>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>/</span>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>About Us</span>
          </div>

          <div className="hero-grid">
            {/* Left */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(249,115,22,0.2)", border: "1px solid rgba(249,115,22,0.4)", borderRadius: 999, padding: "6px 16px", marginBottom: 20 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: C.primary, display: "inline-block" }} />
                <span style={{ color: C.primary, fontSize: 11, fontWeight: 600, letterSpacing: "0.06em" }}>About SIACC India</span>
              </div>
              <h1 style={{ fontFamily: C.serif, fontSize: "clamp(2rem,4vw,3.4rem)", color: "#fff", marginBottom: 20, fontWeight: 800, lineHeight: 1.15 }}>
                12 Years of Simplifying<br />Indian Compliance
              </h1>
              <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 16, lineHeight: 1.8, maxWidth: 520, marginBottom: 32 }}>
                We started SIACC with one belief — no business should lose market access due to complex regulatory paperwork. Today, we are India's most trusted certification consultancy, having served 10,000+ clients across 25+ countries.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button onClick={() => router.push("/contact")}
                  style={{ padding: "13px 28px", backgroundColor: C.primary, color: "#fff", borderRadius: 12, border: "none", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: C.sans, boxShadow: "0 4px 16px rgba(249,115,22,0.4)" }}>
                  Free Consultation →
                </button>
                <button onClick={() => router.push("/services")}
                  style={{ padding: "13px 24px", border: "1.5px solid rgba(255,255,255,0.3)", color: "#fff", borderRadius: 12, background: "rgba(255,255,255,0.08)", fontSize: 14, cursor: "pointer", fontFamily: C.sans, backdropFilter: "blur(4px)" }}>
                  Our Services
                </button>
              </div>
            </div>

            {/* Right — highlights */}
            <div className="hero-right">
              <p style={{ fontSize: 11, fontWeight: 700, color: C.primary, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>What We Certify</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
                {heroHighlights.map((h) => (
                  <div key={h.number} className="highlight-card">
                    <div style={{ fontFamily: C.serif, fontSize: 22, color: C.primary, fontWeight: 800, marginBottom: 6 }}>{h.number}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{h.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, padding: "18px 22px", display: "flex", alignItems: "center", gap: 14, backdropFilter: "blur(6px)" }}>
                <div style={{ fontSize: 32, flexShrink: 0 }}>🏆</div>
                <div>
                  <div style={{ fontFamily: C.serif, fontSize: 15, color: "#fff", fontWeight: 700, marginBottom: 4 }}>India's Most Trusted</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>Rated #1 compliance consultancy by 10,000+ manufacturers & importers since 2011.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ background: C.navy }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div key={s.label} style={{ textAlign: "center", padding: "28px 16px", borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <div style={{ fontSize: 20, marginBottom: 6 }}>{s.icon}</div>
                <div style={{ fontFamily: C.serif, fontSize: "clamp(1.6rem,2.5vw,2.2rem)", color: C.primary, fontWeight: 800 }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY + MISSION ── */}
      <section className="sec-pad" style={{ background: C.offWhite }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="story-grid">
            {/* Image side */}
            <div style={{ position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80&fit=crop"
                alt="Compliance experts working"
                style={{ width: "100%", borderRadius: 20, height: 460, objectFit: "cover", display: "block" }}
              />
              {/* Floating card */}
              <div style={{ position: "absolute", bottom: -28, right: -28, background: C.white, borderRadius: 16, padding: "20px 28px", boxShadow: "0 16px 48px rgba(0,0,0,0.12)", border: `2px solid ${C.primaryLight}` }}>
                <div style={{ fontFamily: C.serif, fontSize: 34, color: C.primary, fontWeight: 800, lineHeight: 1 }}>10K+</div>
                <div style={{ fontSize: 13, color: C.mutedText, marginTop: 4 }}>Happy Clients Served</div>
              </div>
              {/* Year badge */}
              <div style={{ position: "absolute", top: 24, left: 24, background: C.primary, borderRadius: 12, padding: "10px 18px", boxShadow: "0 4px 16px rgba(249,115,22,0.35)" }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#fff", letterSpacing: "0.08em" }}>EST. 2011</div>
              </div>
            </div>

            {/* Text side */}
            <div>
              <span className="section-label">Our Story</span>
              <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.navy, marginBottom: 20, fontWeight: 800, lineHeight: 1.2 }}>
                Built by Compliance Experts, for Businesses
              </h2>
              <p style={{ fontSize: 15, color: C.mutedText, lineHeight: 1.8, marginBottom: 16 }}>
                In 2011, our founder Vikram Anand — after spending over a decade navigating India's complex regulatory maze — saw how countless manufacturers and importers were losing months and lakhs of rupees due to the lack of reliable certification guidance.
              </p>
              <p style={{ fontSize: 15, color: C.mutedText, lineHeight: 1.8, marginBottom: 32 }}>
                He founded SIACC to bridge that gap. What started as a three-person office in Connaught Place has grown into a 100+ strong team of regulatory experts, lawyers, and certification specialists serving clients from startups to Fortune 500 companies.
              </p>

              {/* Mission / Vision cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { icon: "🎯", title: "Our Mission", text: "To make Indian regulatory compliance accessible, affordable, and stress-free for every business — from local startups to global enterprises entering India." },
                  { icon: "🔭", title: "Our Vision", text: "To be Asia's most trusted compliance partner, known for speed, accuracy, and the genuine care we bring to every client relationship." },
                  { icon: "⭐", title: "Our Promise", text: "No hidden fees. No unnecessary delays. No failed applications. If we take your case, we see it through — guaranteed." },
                ].map((card) => (
                  <div key={card.title} className="mission-card">
                    <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: C.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{card.icon}</div>
                    <div>
                      <h3 style={{ fontFamily: C.serif, fontSize: 16, color: C.navy, marginBottom: 6, fontWeight: 700 }}>{card.title}</h3>
                      <p style={{ fontSize: 13, color: C.mutedText, lineHeight: 1.7, margin: 0 }}>{card.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="sec-pad" style={{ background: C.white }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">What We Stand For</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.navy, fontWeight: 800 }}>Our Core Values</h2>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="value-card">
                <div style={{ width: 52, height: 52, borderRadius: 14, backgroundColor: C.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ fontFamily: C.serif, fontSize: 17, color: C.navy, marginBottom: 10, fontWeight: 700 }}>{v.title}</h3>
                <p style={{ fontSize: 13, color: C.mutedText, lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE — with image bg ── */}
      <section style={{ position: "relative", overflow: "hidden" }} className="sec-pad">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80&fit=crop"
          alt="Company growth"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(12,35,64,0.93)" }} />

        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.primary, marginBottom: 12, display: "block" }}>Our Journey</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: "#fff", fontWeight: 800 }}>Milestones That Define Us</h2>
          </div>

          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", left: 88, top: 0, bottom: 0, width: 2, background: "rgba(249,115,22,0.3)" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {timeline.map((item) => (
                <div key={item.year} style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>
                  {/* Year */}
                  <div style={{ width: 80, flexShrink: 0, textAlign: "right" }}>
                    <span style={{ display: "inline-block", padding: "4px 12px", backgroundColor: C.primary, color: "#fff", fontSize: 12, fontWeight: 800, borderRadius: 999 }}>{item.year}</span>
                  </div>
                  {/* Dot */}
                  <div style={{ width: 16, height: 16, borderRadius: "50%", backgroundColor: C.primary, border: "3px solid #fff", flexShrink: 0, marginTop: 4, position: "relative", zIndex: 1 }} />
                  {/* Card */}
                  <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: 14, padding: "20px 24px", border: "1px solid rgba(255,255,255,0.12)", flex: 1, backdropFilter: "blur(6px)" }}>
                    <h3 style={{ fontFamily: C.serif, fontSize: 16, color: "#fff", marginBottom: 8, fontWeight: 700 }}>{item.title}</h3>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="sec-pad" style={{ background: C.offWhite }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">Leadership</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.navy, fontWeight: 800 }}>Meet Our Leadership Team</h2>
          </div>

          {/* Team image banner */}
          <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", marginBottom: 36, height: 200 }}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80&fit=crop"
              alt="SIACC team"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 45%" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,35,64,0.85) 0%, rgba(12,35,64,0.4) 60%, transparent 100%)" }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 44px" }}>
              <div>
                <div style={{ fontFamily: C.serif, fontSize: "clamp(1.2rem,2vw,1.6rem)", color: "#fff", fontWeight: 800, marginBottom: 6 }}>100+ Experts. One Goal.</div>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>Every specialist dedicated to getting your certification done right.</p>
              </div>
            </div>
          </div>

          <div className="team-grid">
            {team.map((member) => (
              <div key={member.name} className="team-card">
                <div style={{ width: 54, height: 54, borderRadius: "50%", backgroundColor: C.primaryLight, border: `2px solid ${C.primary}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: C.serif, color: C.primary, fontWeight: 800, fontSize: 20, flexShrink: 0 }}>
                  {member.initial}
                </div>
                <div>
                  <div style={{ fontFamily: C.serif, fontSize: 16, color: C.navy, fontWeight: 700, marginBottom: 4 }}>{member.name}</div>
                  <div style={{ fontSize: 12, color: C.primary, marginBottom: 6, fontWeight: 700 }}>{member.role}</div>
                  <div style={{ fontSize: 12, color: C.mutedText }}>{member.exp}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER — with image ── */}
      <section style={{ position: "relative", padding: "80px 24px", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80&fit=crop"
          alt="Ready to work together"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(249,115,22,0.92) 0%, rgba(234,88,12,0.88) 100%)" }} />
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.6rem)", color: "#fff", marginBottom: 16, fontWeight: 800 }}>Ready to Work With India's Best?</h2>
          <p style={{ color: "rgba(255,255,255,0.88)", marginBottom: 36, lineHeight: 1.7, fontSize: 15 }}>Join 10,000+ businesses who trust SIACC for their compliance needs.</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
            <button onClick={() => router.push("/contact")}
              style={{ padding: "14px 36px", backgroundColor: "#fff", color: C.primary, fontWeight: 800, borderRadius: 12, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans, boxShadow: "0 6px 20px rgba(0,0,0,0.15)" }}>
              Get Free Consultation
            </button>
            <button onClick={() => router.push("/services")}
              style={{ padding: "14px 32px", border: "2px solid rgba(255,255,255,0.6)", color: "#fff", borderRadius: 12, background: "transparent", fontSize: 14, cursor: "pointer", fontFamily: C.sans }}>
              View Our Services →
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}