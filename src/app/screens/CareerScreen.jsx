import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const C = {
  forest: "#1B4332", forestMid: "#2D6A4F", forestLight: "#40916C",
  mint: "#95D5B2", mintLight: "#D8F3DC", gold: "#D4A017",
  offWhite: "#F7FAF8", charcoal: "#1A1A2E", gray: "#6B7280", white: "#ffffff",
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
  { icon: "🌿", title: "Meaningful Work", desc: "Help businesses navigate India's regulatory landscape. Your work directly enables market access." },
  { icon: "📈", title: "Fast Growth", desc: "Performance-based promotions. Many of our senior leaders started as junior analysts." },
  { icon: "🧠", title: "Deep Learning", desc: "Work across 50+ regulatory domains. Become an expert in India's compliance ecosystem." },
  { icon: "🏡", title: "Flexible Work", desc: "Hybrid and remote options for eligible roles. Work-life balance is a priority." },
  { icon: "💰", title: "Competitive Pay", desc: "Market-leading salaries, performance bonuses, and employee benefits." },
  { icon: "🤝", title: "Great Team", desc: "100+ colleagues who are passionate, collaborative, and experts in their fields." },
];

const typeColors = { "Full-time": { bg: C.mintLight, text: C.forest }, "Internship": { bg: "#FEF3C7", text: "#92400e" } };

export default function CareerScreen() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: C.offWhite, fontFamily: C.sans }}>
      <Navbar />

      {/* Hero */}
      <section style={{ backgroundColor: C.forest, padding: "80px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(149,213,178,0.15)", transform: "translate(30%,-30%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1, maxWidth: 700 }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: C.mint, letterSpacing: "0.12em", textTransform: "uppercase" }}>Join Our Team</span>
          <h1 style={{ fontFamily: C.serif, fontSize: "clamp(2rem,4vw,3.2rem)", color: C.white, margin: "12px 0 20px", fontWeight: 700, lineHeight: 1.2 }}>Build Your Career in India's Fastest-Growing Compliance Industry</h1>
          <p style={{ color: "#b7e4c7", fontSize: 16, lineHeight: 1.8, maxWidth: 560, marginBottom: 32 }}>Join a team of 100+ regulatory experts helping businesses navigate India's complex compliance landscape. We're hiring across all levels.</p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <div style={{ textAlign: "center", backgroundColor: C.forestMid, borderRadius: 12, padding: "16px 24px", border: `1px solid ${C.forestLight}` }}>
              <div style={{ fontFamily: C.serif, fontSize: 28, color: C.mint, fontWeight: 700 }}>100+</div>
              <div style={{ fontSize: 12, color: C.mintLight }}>Team Members</div>
            </div>
            <div style={{ textAlign: "center", backgroundColor: C.forestMid, borderRadius: 12, padding: "16px 24px", border: `1px solid ${C.forestLight}` }}>
              <div style={{ fontFamily: C.serif, fontSize: 28, color: C.mint, fontWeight: 700 }}>4</div>
              <div style={{ fontSize: 12, color: C.mintLight }}>Office Locations</div>
            </div>
            <div style={{ textAlign: "center", backgroundColor: C.forestMid, borderRadius: 12, padding: "16px 24px", border: `1px solid ${C.forestLight}` }}>
              <div style={{ fontFamily: C.serif, fontSize: 28, color: C.mint, fontWeight: 700 }}>6</div>
              <div style={{ fontSize: 12, color: C.mintLight }}>Open Positions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section style={{ backgroundColor: C.mintLight, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: C.forestLight, letterSpacing: "0.12em", textTransform: "uppercase" }}>Life at Siacc</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.forest, marginTop: 12, fontWeight: 700 }}>Why You'll Love Working Here</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 20 }}>
            {perks.map((p) => (
              <div key={p.title} style={{ backgroundColor: C.white, borderRadius: 16, padding: 28, border: "1px solid rgba(149,213,178,0.5)" }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{p.icon}</div>
                <h3 style={{ fontFamily: C.serif, fontSize: 16, color: C.forest, marginBottom: 8, fontWeight: 600 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: C.gray, lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: C.forestLight, letterSpacing: "0.12em", textTransform: "uppercase" }}>We're Hiring</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.forest, marginTop: 12, fontWeight: 700 }}>Open Positions</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {openings.map((job) => {
              const tc = typeColors[job.type] || { bg: C.mintLight, text: C.forest };
              return (
                <div key={job.title} style={{ backgroundColor: C.white, borderRadius: 16, padding: "28px 32px", border: `1px solid ${C.mintLight}`, display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "center" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.mint; e.currentTarget.style.boxShadow = "0 4px 16px rgba(27,67,50,0.08)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.mintLight; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div>
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 12, alignItems: "center" }}>
                      <span style={{ fontSize: 10, fontWeight: 700, backgroundColor: tc.bg, color: tc.text, padding: "3px 10px", borderRadius: 999 }}>{job.type}</span>
                      <span style={{ fontSize: 11, color: C.gray, backgroundColor: C.offWhite, padding: "3px 10px", borderRadius: 999 }}>{job.dept}</span>
                      <span style={{ fontSize: 11, color: C.gray }}>📍 {job.location}</span>
                      <span style={{ fontSize: 11, color: C.gray }}>💼 {job.exp}</span>
                    </div>
                    <h3 style={{ fontFamily: C.serif, fontSize: 18, color: C.forest, marginBottom: 10, fontWeight: 600 }}>{job.title}</h3>
                    <p style={{ fontSize: 13, color: C.gray, lineHeight: 1.65, margin: 0, maxWidth: 700 }}>{job.desc}</p>
                  </div>
                  <button
                    onClick={() => window.location.href = "/contact"}
                    style={{ padding: "11px 24px", backgroundColor: C.forest, color: C.white, fontWeight: 600, borderRadius: 10, border: "none", fontSize: 13, cursor: "pointer", fontFamily: C.sans, whiteSpace: "nowrap", flexShrink: 0 }}
                  >Apply Now →</button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Spontaneous application */}
      <section style={{ backgroundColor: C.forest, padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.white, marginBottom: 16, fontWeight: 700 }}>Don't See the Right Role?</h2>
          <p style={{ color: C.mint, marginBottom: 32, lineHeight: 1.7, fontSize: 15 }}>We're always looking for talented people. Send us your resume and we'll reach out when there's a fit.</p>
          <button onClick={() => window.location.href = "/contact"} style={{ padding: "14px 32px", backgroundColor: C.mint, color: C.forest, fontWeight: 700, borderRadius: 12, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans }}>
            Send Spontaneous Application →
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}