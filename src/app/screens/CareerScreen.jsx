"use client";
import { useRouter } from "next/navigation";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const C = {
  primary: "#F97316", primaryDark: "#EA6A0A", primaryLight: "#FFF3E8",
  blue: "#0891B2", blueLight: "#ECFEFF", navy: "#0C2340",
  bodyText: "#374151", mutedText: "#6B7280", border: "#E5E7EB",
  white: "#FFFFFF", offWhite: "#F9FAFB",
  serif: "'Playfair Display', Georgia, serif", sans: "'DM Sans', system-ui, sans-serif",
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
  "Full-time":  { bg: C.primaryLight, text: C.primaryDark },
  "Internship": { bg: "#FEF3C7",      text: "#92400e" },
};

const stats = [
  { value: "100+", label: "Team Members",   icon: "👥" },
  { value: "4",    label: "Office Locations", icon: "🏢" },
  { value: "6",    label: "Open Positions",  icon: "📋" },
  { value: "12+",  label: "Years Building",  icon: "🏆" },
];

export default function CareerScreen() {
  const router = useRouter();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: C.white, fontFamily: C.sans, color: C.bodyText }}>
      <style>{`
        * { box-sizing: border-box; }

        .section-label { font-size:11px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:${C.primary}; margin-bottom:12px; display:block; }

        /* Hero */
        .hero-overlay { position:absolute; inset:0; background:linear-gradient(to right, rgba(12,35,64,0.90) 50%, rgba(12,35,64,0.45) 100%); }
        .hero-badge { position:absolute; top:24px; right:24px; z-index:3; background:rgba(255,255,255,0.12); backdrop-filter:blur(10px); border:1px solid rgba(255,255,255,0.2); border-radius:14px; padding:10px 16px; display:flex; gap:12px; flex-wrap:wrap; }
        @media(max-width:560px){ .hero-badge { display:none; } }
        .hero-content { max-width:600px; }
        .hero-cta-row { display:flex; flex-wrap:wrap; gap:14px; margin-bottom:36px; }
        .hero-trust-row { display:flex; flex-wrap:wrap; gap:10px; }
        .scroll-indicator { position:absolute; bottom:24px; left:50%; transform:translateX(-50%); z-index:3; display:flex; flex-direction:column; align-items:center; gap:6px; }
        @media(max-width:480px){ .scroll-indicator { display:none; } }

        /* Stats */
        .stats-strip { display:grid; grid-template-columns:repeat(4,1fr); }
        @media(max-width:640px){ .stats-strip { grid-template-columns:repeat(2,1fr); } }

        /* Life at SIACC */
        .about-grid { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; }
        @media(max-width:860px){ .about-grid { grid-template-columns:1fr; gap:40px; } }
        .floating-stat-card { position:absolute; bottom:-20px; right:-10px; background:#fff; border-radius:16px; padding:20px 24px; box-shadow:0 16px 48px rgba(0,0,0,0.12); border:2px solid ${C.primaryLight}; }
        @media(max-width:860px){ .floating-stat-card { bottom:-16px; right:0; } }
        .mini-stats-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:32px; }
        @media(max-width:420px){ .mini-stats-grid { grid-template-columns:1fr; } }

        /* Perks */
        .perks-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        @media(max-width:900px){ .perks-grid { grid-template-columns:repeat(2,1fr); } }
        @media(max-width:540px){ .perks-grid { grid-template-columns:1fr; } }
        .perk-card { background:#fff; border-radius:16px; padding:28px; border:1.5px solid #F3F4F6; transition:all 0.2s; }
        .perk-card:hover { border-color:${C.primary}; box-shadow:0 8px 24px rgba(249,115,22,0.10); transform:translateY(-2px); }

        /* Job cards */
        .job-card { background:#fff; border-radius:16px; padding:24px; border:1.5px solid #F3F4F6; display:grid; grid-template-columns:1fr auto; gap:20px; align-items:center; transition:all 0.25s ease; }
        .job-card:hover { border-color:${C.primary}; box-shadow:0 8px 28px rgba(249,115,22,0.12); }
        @media(max-width:640px){ .job-card { grid-template-columns:1fr; gap:16px; padding:20px; } }
        .job-meta { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:10px; align-items:center; }

        /* CTA section */
        .cta-btn-row { display:flex; flex-wrap:wrap; justify-content:center; gap:16px; }

        /* Section padding */
        .sec-pad { padding:88px 24px; }
        @media(max-width:768px){ .sec-pad { padding:56px 16px !important; } }

        /* Banner image */
        .perks-banner { position:relative; border-radius:20px; overflow:hidden; margin-bottom:52px; height:220px; }
        @media(max-width:560px){ .perks-banner { height:160px; margin-bottom:32px; } }
        .perks-banner-text { position:absolute; inset:0; display:flex; align-items:center; padding:0 32px; }
        @media(max-width:480px){ .perks-banner-text { padding:0 20px; } }

        /* General */
        img { max-width:100%; }
      `}</style>

      <Navbar />

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "88vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1800&q=85&fit=crop"
          alt="SIACC team at work"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div className="hero-overlay" />

        {/* Floating badge */}
        <div className="hero-badge">
          {["100+ Team", "4 Offices", "6 Openings"].map(b => (
            <span key={b} style={{ fontSize: 11, fontWeight: 700, color: C.primary }}>{b}</span>
          ))}
        </div>

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(40px,8vw,80px) clamp(16px,4vw,40px)", width: "100%", position: "relative", zIndex: 2 }}>
          <div className="hero-content">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(249,115,22,0.2)", border: "1px solid rgba(249,115,22,0.4)", borderRadius: 999, padding: "6px 16px", marginBottom: 24 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: C.primary, display: "inline-block" }} />
              <span style={{ color: C.primary, fontSize: 12, fontWeight: 600 }}>We're Hiring — Join Our Team</span>
            </div>

            <h1 style={{ fontFamily: C.serif, fontSize: "clamp(2rem,5vw,4.2rem)", color: "#fff", lineHeight: 1.12, marginBottom: 20, fontWeight: 800 }}>
              Build Your Career in India's{" "}
              <span style={{ color: C.primary }}>Fastest-Growing</span>{" "}
              Compliance Industry
            </h1>

            <p style={{ fontSize: "clamp(14px,2vw,17px)", lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 36, maxWidth: 520 }}>
              Join a team of 100+ regulatory experts helping businesses navigate India's complex compliance landscape. We're hiring across all levels and domains.
            </p>

            <div className="hero-cta-row">
              <button
                onClick={() => { const el = document.getElementById("openings"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
                style={{ padding: "14px 32px", backgroundColor: C.primary, color: "#fff", fontWeight: 700, borderRadius: 12, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans, boxShadow: "0 6px 20px rgba(249,115,22,0.45)" }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = C.primaryDark}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = C.primary}
              >View Open Positions</button>
              <button
                onClick={() => router.push("/contact")}
                style={{ padding: "14px 28px", border: "2px solid rgba(255,255,255,0.4)", color: "#fff", borderRadius: 12, background: "rgba(255,255,255,0.08)", fontSize: 14, cursor: "pointer", fontWeight: 600, fontFamily: C.sans, backdropFilter: "blur(4px)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.primary; e.currentTarget.style.color = C.primary; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; e.currentTarget.style.color = "#fff"; }}
              >Send Your Resume →</button>
            </div>

            <div className="hero-trust-row">
              {["✓ Fast Growth", "✓ Hybrid Work", "✓ Competitive Pay", "✓ Expert Team"].map(b => (
                <span key={b} style={{ padding: "6px 14px", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 999, fontSize: 12, color: "rgba(255,255,255,0.85)", background: "rgba(255,255,255,0.08)" }}>{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(255,255,255,0), rgba(249,115,22,0.8))" }} />
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Scroll</span>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ background: C.navy }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="stats-strip">
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

      {/* ── LIFE AT SIACC ── */}
      <section className="sec-pad" style={{ background: C.offWhite }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="about-grid">
            {/* Image */}
            <div style={{ position: "relative", marginBottom: 24 }}>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80&fit=crop"
                alt="Team collaborating"
                style={{ width: "100%", borderRadius: 20, height: "clamp(260px,40vw,400px)", objectFit: "cover", display: "block" }}
              />
              <div className="floating-stat-card">
                <div style={{ fontFamily: C.serif, fontSize: 34, color: C.primary, fontWeight: 800, lineHeight: 1 }}>100+</div>
                <div style={{ fontSize: 13, color: C.mutedText, marginTop: 4 }}>Experts on the Team</div>
              </div>
              <div style={{ position: "absolute", top: 20, left: 20, background: C.primary, borderRadius: 12, padding: "10px 18px" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: "0.06em" }}>Since 2011</div>
              </div>
            </div>

            {/* Text */}
            <div style={{ paddingTop: 8 }}>
              <span className="section-label">Life at SIACC</span>
              <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.6rem,3vw,2.6rem)", color: C.navy, fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}>
                A Place Where Experts Grow
              </h2>
              <p style={{ fontSize: 15, color: C.mutedText, lineHeight: 1.8, marginBottom: 14 }}>
                At SIACC, every team member works on real, high-impact client mandates from day one. You're not a cog in a machine — you're a trusted advisor to manufacturers and importers navigating India's regulatory system.
              </p>
              <p style={{ fontSize: 15, color: C.mutedText, lineHeight: 1.8, marginBottom: 28 }}>
                We invest in our people through training, mentorship, and clear career progression. Many of our division heads started here as freshers and analysts.
              </p>
              <div className="mini-stats-grid">
                {[{ n: "12+", l: "Years in Business" }, { n: "50+", l: "Regulatory Domains" }, { n: "4", l: "Office Locations" }, { n: "98%", l: "Client Success Rate" }].map(s => (
                  <div key={s.l} style={{ padding: "16px 20px", background: "#fff", borderRadius: 12, border: `1.5px solid ${C.border}` }}>
                    <div style={{ fontFamily: C.serif, fontSize: 22, color: C.primary, fontWeight: 800 }}>{s.n}</div>
                    <div style={{ fontSize: 12, color: C.mutedText, marginTop: 2 }}>{s.l}</div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => router.push("/about")}
                style={{ padding: "13px 28px", backgroundColor: C.navy, color: "#fff", borderRadius: 12, border: "none", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: C.sans }}
              >Learn About SIACC →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── PERKS ── */}
      <section className="sec-pad" style={{ background: C.white }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="perks-banner">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&q=80&fit=crop"
              alt="Office culture"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,35,64,0.85) 0%, rgba(12,35,64,0.4) 60%, transparent 100%)" }} />
            <div className="perks-banner-text">
              <div>
                <span className="section-label">Why You'll Love Working Here</span>
                <div style={{ fontFamily: C.serif, fontSize: "clamp(1.2rem,2.5vw,2rem)", color: "#fff", fontWeight: 800, marginBottom: 6 }}>
                  Benefits Built Around You
                </div>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14 }}>Flexible, rewarding, and meaningful work — from day one.</p>
              </div>
            </div>
          </div>

          <div className="perks-grid">
            {perks.map(p => (
              <div key={p.title} className="perk-card">
                <div style={{ width: 48, height: 48, borderRadius: 14, backgroundColor: C.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 16 }}>{p.icon}</div>
                <h3 style={{ fontFamily: C.serif, fontSize: 16, color: C.navy, marginBottom: 8, fontWeight: 700 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: C.mutedText, lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS ── */}
      <section id="openings" className="sec-pad" style={{ background: C.offWhite }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">We're Hiring</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.8rem,3vw,2.6rem)", color: C.navy, fontWeight: 800, marginBottom: 14 }}>Open Positions</h2>
            <p style={{ color: C.mutedText, maxWidth: 460, margin: "0 auto", lineHeight: 1.7, fontSize: 15 }}>
              Explore current openings across our divisions. All roles come with mentorship, growth paths, and a collaborative team culture.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {openings.map(job => {
              const tc = typeColors[job.type] || { bg: C.primaryLight, text: C.primaryDark };
              return (
                <div key={job.title} className="job-card">
                  <div>
                    <div className="job-meta">
                      <span style={{ fontSize: 10, fontWeight: 700, backgroundColor: tc.bg, color: tc.text, padding: "3px 10px", borderRadius: 999 }}>{job.type}</span>
                      <span style={{ fontSize: 11, color: C.mutedText, backgroundColor: C.white, padding: "3px 10px", borderRadius: 999, border: `1px solid ${C.border}` }}>{job.dept}</span>
                      <span style={{ fontSize: 11, color: C.mutedText }}>📍 {job.location}</span>
                      <span style={{ fontSize: 11, color: C.mutedText }}>💼 {job.exp}</span>
                    </div>
                    <h3 style={{ fontFamily: C.serif, fontSize: "clamp(15px,2vw,18px)", color: C.navy, marginBottom: 10, fontWeight: 700 }}>{job.title}</h3>
                    <p style={{ fontSize: 13, color: C.mutedText, lineHeight: 1.65, margin: 0 }}>{job.desc}</p>
                  </div>
                  <button
                    onClick={() => router.push("/contact")}
                    style={{ padding: "12px 24px", backgroundColor: C.primary, color: C.white, fontWeight: 700, borderRadius: 10, border: "none", fontSize: 13, cursor: "pointer", fontFamily: C.sans, whiteSpace: "nowrap", boxShadow: "0 4px 14px rgba(249,115,22,0.3)" }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = C.primaryDark}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = C.primary}
                  >Apply Now →</button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ position: "relative", padding: "clamp(56px,8vw,88px) 24px", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80&fit=crop"
          alt="Send your application"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(249,115,22,0.93) 0%, rgba(234,88,12,0.88) 100%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.6rem,3vw,2.8rem)", color: "#fff", marginBottom: 16, fontWeight: 800 }}>
            Don't See the Right Role?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.88)", marginBottom: 36, lineHeight: 1.7, fontSize: "clamp(14px,2vw,16px)" }}>
            We're always looking for talented people. Send us your resume and we'll reach out when there's a fit — across any of our divisions.
          </p>
          <div className="cta-btn-row">
            <button
              onClick={() => router.push("/contact")}
              style={{ padding: "14px 36px", backgroundColor: "#fff", color: C.primary, fontWeight: 800, borderRadius: 12, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans, boxShadow: "0 6px 24px rgba(0,0,0,0.15)" }}
            >Send Spontaneous Application →</button>
            <a
              href="mailto:info@siacc.co.in"
              style={{ padding: "14px 28px", border: "2px solid rgba(255,255,255,0.6)", color: "#fff", borderRadius: 12, textDecoration: "none", fontSize: 14, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8 }}
            >✉️ info@siacc.co.in</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}