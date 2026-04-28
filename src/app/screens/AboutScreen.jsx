"use client";

import Link from "next/link";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const C = {
  forest: "#1B4332", forestMid: "#2D6A4F", forestLight: "#40916C",
  mint: "#95D5B2", mintLight: "#D8F3DC", gold: "#D4A017",
  offWhite: "#F7FAF8", charcoal: "#1A1A2E", gray: "#6B7280", white: "#ffffff",
  serif: "'Playfair Display', Georgia, serif", sans: "'DM Sans', system-ui, sans-serif",
};

const stats = [
  { value: "2011", label: "Year Founded" },
  { value: "12+", label: "Years of Experience" },
  { value: "10,000+", label: "Clients Served" },
  { value: "98%", label: "Success Rate" },
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
  { number: "FSSAI", label: "Food Safety Registrations" },
  { number: "WPC", label: "Wireless Product Approvals" },
];

export default function AboutScreen() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: C.offWhite, fontFamily: C.sans }}>

      <style>{`
        /* ── STATS ── */
        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        @media (max-width: 640px) {
          .about-stats-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* ── HERO TWO-COLUMN ── */
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; gap: 40px; }
          .hero-right { display: none; }
        }

        /* ── STORY + MISSION ── */
        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .story-grid { grid-template-columns: 1fr; gap: 40px; }
        }

        /* ── VALUES ── */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
        }
        @media (max-width: 600px) {
          .values-grid { grid-template-columns: 1fr; }
        }

        /* ── TIMELINE ── */
        .timeline-item {
          display: flex;
          gap: 32px;
          align-items: flex-start;
          position: relative;
        }
        .timeline-year {
          width: 80px;
          flex-shrink: 0;
          text-align: right;
        }
        .timeline-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background-color: #95D5B2;
          border: 3px solid #1B4332;
          flex-shrink: 0;
          margin-top: 4px;
          position: relative;
          z-index: 1;
        }
        .timeline-line {
          position: absolute;
          left: 80px;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: #D8F3DC;
        }
        @media (max-width: 600px) {
          .timeline-item { gap: 16px; }
          .timeline-year { width: 56px; }
          .timeline-line { left: 56px; }
          .timeline-year span { font-size: 10px !important; padding: 3px 8px !important; }
        }

        /* ── TEAM ── */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }
        @media (max-width: 600px) {
          .team-grid { grid-template-columns: 1fr; }
        }

        /* ── CTA BUTTONS ── */
        .about-cta-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }

        /* ── SECTION PADDING ── */
        .section-pad { padding: 80px 24px; }
        @media (max-width: 768px) {
          .section-pad { padding: 56px 16px; }
        }

        /* ── HERO ── */
        .about-hero { padding: 80px 24px; }
        @media (max-width: 768px) {
          .about-hero { padding: 56px 16px; }
        }

        /* ── HERO RIGHT PANEL ── */
        .hero-highlights-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .hero-highlight-card {
          background: rgba(149, 213, 178, 0.1);
          border: 1px solid rgba(149, 213, 178, 0.25);
          border-radius: 16px;
          padding: 24px 20px;
          transition: background 0.2s;
        }
        .hero-highlight-card:hover {
          background: rgba(149, 213, 178, 0.18);
        }
      `}</style>

      <Navbar />

      {/* ── HERO ── */}
      <section style={{ backgroundColor: C.forest, position: "relative", overflow: "hidden" }} className="about-hero">
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: 0, right: 0, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(149,213,178,0.12)", transform: "translate(30%, -30%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: "40%", width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(149,213,178,0.08)", transform: "translateY(40%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 40 }}>
            <Link href="/" style={{ color: C.mint, fontSize: 13, textDecoration: "none" }}>Home</Link>
            <span style={{ color: C.forestLight, fontSize: 13 }}>/</span>
            <span style={{ color: C.mintLight, fontSize: 13 }}>About Us</span>
          </div>

          {/* Two-column hero layout */}
          <div className="hero-grid">
            {/* LEFT — headline + description */}
            <div>
              <span style={{ fontSize: 11, fontWeight: 600, color: C.mint, letterSpacing: "0.12em", textTransform: "uppercase" }}>About Siacc India</span>
              <h1 style={{ fontFamily: C.serif, fontSize: "clamp(2rem,4vw,3.2rem)", color: C.white, marginTop: 12, marginBottom: 20, fontWeight: 700, lineHeight: 1.2 }}>
                12 Years of Simplifying<br />Indian Compliance
              </h1>
              <p style={{ color: "#b7e4c7", fontSize: 16, lineHeight: 1.8, maxWidth: 520, marginBottom: 32 }}>
                We started Siacc India with one belief — no business should lose market access due to complex regulatory paperwork. Today, we are India's most trusted certification consultancy, having served 10,000+ clients across 25+ countries.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/contact" style={{ display: "inline-block", padding: "13px 28px", backgroundColor: C.mint, color: C.forest, borderRadius: 12, textDecoration: "none", fontSize: 14, fontWeight: 700 }}>
                  Free Consultation →
                </Link>
                <Link href="/services" style={{ display: "inline-block", padding: "13px 28px", border: "1.5px solid rgba(149,213,178,0.4)", color: C.mintLight, borderRadius: 12, textDecoration: "none", fontSize: 14, fontWeight: 500 }}>
                  Our Services
                </Link>
              </div>
            </div>

            {/* RIGHT — service highlights panel */}
            <div className="hero-right">
              <div style={{ marginBottom: 20 }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: C.mint, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>What We Certify</p>
                <div className="hero-highlights-grid">
                  {heroHighlights.map((h) => (
                    <div key={h.number} className="hero-highlight-card">
                      <div style={{ fontFamily: C.serif, fontSize: 22, color: C.mint, fontWeight: 700, marginBottom: 6 }}>{h.number}</div>
                      <div style={{ fontSize: 12, color: "#b7e4c7", lineHeight: 1.5 }}>{h.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust badge */}
              <div style={{ backgroundColor: "rgba(149,213,178,0.08)", border: "1px solid rgba(149,213,178,0.2)", borderRadius: 16, padding: "20px 24px", display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ fontSize: 36, flexShrink: 0 }}>🏆</div>
                <div>
                  <div style={{ fontFamily: C.serif, fontSize: 15, color: C.white, fontWeight: 600, marginBottom: 4 }}>India's Most Trusted</div>
                  <div style={{ fontSize: 12, color: "#95D5B2", opacity: 0.85, lineHeight: 1.6 }}>Rated #1 compliance consultancy by 10,000+ manufacturers & importers since 2011.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ backgroundColor: C.forestMid }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 24px" }}>
          <div className="about-stats-grid">
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: C.serif, fontSize: "clamp(1.8rem,3vw,2.6rem)", color: C.mint, fontWeight: 700 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: C.mintLight, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY + MISSION ── */}
      <section className="section-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="story-grid">
            <div>
              <span style={{ fontSize: 11, fontWeight: 600, color: C.forestLight, letterSpacing: "0.12em", textTransform: "uppercase" }}>Our Story</span>
              <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.forest, marginTop: 12, marginBottom: 20, fontWeight: 700 }}>
                Built by Compliance Experts, for Businesses
              </h2>
              <p style={{ fontSize: 15, color: C.gray, lineHeight: 1.8, marginBottom: 16 }}>
                In 2011, our founder Vikram Anand — after spending over a decade navigating India's complex regulatory maze — saw how countless manufacturers and importers were losing months and lakhs of rupees due to the lack of reliable certification guidance.
              </p>
              <p style={{ fontSize: 15, color: C.gray, lineHeight: 1.8, marginBottom: 28 }}>
                He founded Siacc India to bridge that gap. What started as a three-person office in Connaught Place has grown into a 100+ strong team of regulatory experts, lawyers, and certification specialists serving clients from startups to Fortune 500 companies.
              </p>
              <Link href="/contact" style={{ display: "inline-block", padding: "13px 28px", backgroundColor: C.forest, color: C.white, borderRadius: 12, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>
                Work With Us →
              </Link>
            </div>

            {/* Mission / Vision cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { icon: "🎯", title: "Our Mission", text: "To make Indian regulatory compliance accessible, affordable, and stress-free for every business — from local startups to global enterprises entering India." },
                { icon: "🔭", title: "Our Vision", text: "To be Asia's most trusted compliance partner, known for speed, accuracy, and the genuine care we bring to every client relationship." },
                { icon: "⭐", title: "Our Promise", text: "No hidden fees. No unnecessary delays. No failed applications. If we take your case, we see it through to the certificate — guaranteed." },
              ].map((card) => (
                <div key={card.title} style={{ backgroundColor: C.white, borderRadius: 16, padding: "24px 28px", border: `1px solid ${C.mintLight}`, display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ fontSize: 28, flexShrink: 0, marginTop: 2 }}>{card.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: C.serif, fontSize: 17, color: C.forest, marginBottom: 8, fontWeight: 600 }}>{card.title}</h3>
                    <p style={{ fontSize: 13, color: C.gray, lineHeight: 1.7, margin: 0 }}>{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ backgroundColor: C.mintLight }} className="section-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: C.forestLight, letterSpacing: "0.12em", textTransform: "uppercase" }}>What We Stand For</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.forest, marginTop: 12, fontWeight: 700 }}>Our Core Values</h2>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} style={{ backgroundColor: C.white, borderRadius: 16, padding: 28, border: "1px solid rgba(149,213,178,0.4)" }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ fontFamily: C.serif, fontSize: 17, color: C.forest, marginBottom: 10, fontWeight: 600 }}>{v.title}</h3>
                <p style={{ fontSize: 13, color: C.gray, lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section-pad">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: C.forestLight, letterSpacing: "0.12em", textTransform: "uppercase" }}>Our Journey</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.forest, marginTop: 12, fontWeight: 700 }}>Milestones That Define Us</h2>
          </div>

          <div style={{ position: "relative" }}>
            <div className="timeline-line" />
            <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
              {timeline.map((item) => (
                <div key={item.year} className="timeline-item">
                  <div className="timeline-year">
                    <span style={{ display: "inline-block", padding: "4px 12px", backgroundColor: C.forest, color: C.mint, fontSize: 12, fontWeight: 700, borderRadius: 999 }}>{item.year}</span>
                  </div>
                  <div className="timeline-dot" />
                  <div style={{ backgroundColor: C.white, borderRadius: 14, padding: "20px 24px", border: `1px solid ${C.mintLight}`, flex: 1 }}>
                    <h3 style={{ fontFamily: C.serif, fontSize: 17, color: C.forest, marginBottom: 8, fontWeight: 600 }}>{item.title}</h3>
                    <p style={{ fontSize: 13, color: C.gray, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section style={{ backgroundColor: C.forest }} className="section-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: C.mint, letterSpacing: "0.12em", textTransform: "uppercase" }}>The Experts Behind Siacc</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.white, marginTop: 12, fontWeight: 700 }}>Meet Our Leadership Team</h2>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <div key={member.name} style={{ backgroundColor: C.forestMid, borderRadius: 16, padding: 28, border: `1px solid ${C.forestLight}`, display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", backgroundColor: C.mint, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: C.serif, color: C.forest, fontWeight: 700, fontSize: 20, flexShrink: 0 }}>
                  {member.initial}
                </div>
                <div>
                  <div style={{ fontFamily: C.serif, fontSize: 16, color: C.white, fontWeight: 600, marginBottom: 4 }}>{member.name}</div>
                  <div style={{ fontSize: 12, color: C.mint, marginBottom: 6, fontWeight: 600 }}>{member.role}</div>
                  <div style={{ fontSize: 12, color: "#95D5B2", opacity: 0.75 }}>{member.exp}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: C.mintLight }} className="section-pad">
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.forest, marginBottom: 16, fontWeight: 700 }}>Ready to Work With India's Best?</h2>
          <p style={{ color: C.gray, marginBottom: 32, lineHeight: 1.7, fontSize: 15 }}>Join 10,000+ businesses who trust Siacc India for their compliance needs.</p>
          <div className="about-cta-buttons">
            <Link href="/contact" style={{ padding: "14px 32px", backgroundColor: C.forest, color: C.white, fontWeight: 700, borderRadius: 12, textDecoration: "none", fontSize: 14 }}>Get Free Consultation</Link>
            <Link href="/services" style={{ padding: "14px 32px", border: `1.5px solid ${C.forest}`, color: C.forest, borderRadius: 12, textDecoration: "none", fontSize: 14 }}>View Our Services →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}