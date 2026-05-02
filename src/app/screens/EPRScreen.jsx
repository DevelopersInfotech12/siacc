"use client";
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

const eprTypes = [
  { icon: "💻", title: "EPR for E-Waste", tag: "Mandatory", desc: "For producers, importers & brand owners of electrical & electronic equipment under E-Waste Management Rules, 2022.", authority: "CPCB" },
  { icon: "🧴", title: "EPR for Plastic Waste", tag: "Mandatory", desc: "For producers, importers & brand owners using plastic packaging under Plastic Waste Management Rules.", authority: "CPCB / SPCB" },
  { icon: "🔋", title: "EPR for Battery Waste", tag: "Mandatory", desc: "For manufacturers and importers of batteries — lithium-ion, lead acid, and all battery types.", authority: "CPCB" },
  { icon: "🚗", title: "EPR for Tyre Waste", tag: "Mandatory", desc: "For tyre manufacturers and importers under the Hazardous & Other Wastes Management Rules.", authority: "MoEFCC / CPCB" },
  { icon: "🛢️", title: "EPR for Used Oil", tag: "Mandatory", desc: "For producers and importers of lubricating oils and other petroleum-based products.", authority: "CPCB" },
  { icon: "📄", title: "CPCB Authorization", tag: "Compliance", desc: "General CPCB authorization and No Objection Certificate for waste-related compliance.", authority: "CPCB" },
];

const steps = [
  { step: "01", title: "Eligibility Check", desc: "We verify if your business falls under EPR obligations based on your product category and annual turnover.", icon: "🔍" },
  { step: "02", title: "Target Setting", desc: "Help you set collection and recycling targets as per CPCB norms for your product category.", icon: "🎯" },
  { step: "03", title: "Application Filing", desc: "We prepare and file the complete EPR registration application on the CPCB portal.", icon: "📤" },
  { step: "04", title: "PRO Tie-Up", desc: "We connect you with empanelled Producer Responsibility Organizations (PROs) for waste collection.", icon: "🤝" },
  { step: "05", title: "Certificate Issuance", desc: "CPCB reviews and issues your EPR registration certificate. We follow up actively.", icon: "🎓" },
  { step: "06", title: "Annual Compliance", desc: "We assist with annual EPR returns, target fulfilment tracking, and renewal filings.", icon: "📅" },
];

const documents = [
  "Company registration certificate (CIN/LLPIN)",
  "GST Registration Certificate",
  "Authorized signatory details & KYC documents",
  "Product details & annual sales volume",
  "List of products and their HS codes",
  "Import-Export Code (for importers)",
  "Details of existing waste management arrangements",
  "Board resolution (for companies)",
];

const faqs = [
  { q: "Who needs EPR Registration?", a: "Any producer, importer, or brand owner (PIBOs) dealing in electronics, plastic packaging, batteries, tyres, or used oil in India must register under EPR." },
  { q: "What is the penalty for non-compliance?", a: "CPCB can impose penalties, cancel import licenses, and initiate legal proceedings. Penalties can go up to ₹1 lakh per day of non-compliance." },
  { q: "What is a PRO and do I need one?", a: "A Producer Responsibility Organization (PRO) helps you fulfill your EPR collection targets. Most businesses need to tie up with a CPCB-empanelled PRO." },
  { q: "How often do I need to file EPR returns?", a: "Annual returns are mandatory. You must report your collection, recycling and disposal data to CPCB every financial year." },
];

const infoItems = [
  { label: "Governing Body", value: "CPCB / MoEFCC" },
  { label: "Applicable To", value: "Producers, Importers, Brand Owners" },
  { label: "Validity", value: "Annual (Renewable)" },
  { label: "Processing Time", value: "3–6 Weeks" },
  { label: "Penalty for Default", value: "Up to ₹1L / day" },
];

const heroTrust = [
  { icon: "♻️", label: "All EPR Categories", desc: "E-Waste, Plastic, Battery, Tyres & Oil" },
  { icon: "⚡", label: "3–6 Weeks", desc: "Faster turnaround with our team" },
  { icon: "🆓", label: "Free Consultation", desc: "No charges for initial assessment" },
  { icon: "✅", label: "98% Success Rate", desc: "Across thousands of registrations filed" },
];

const statsStrip = [
  { value: "Annual", label: "Renewal Cycle", icon: "📅" },
  { value: "3–6", label: "Weeks Timeline", icon: "⚡" },
  { value: "Free", label: "Initial Consultation", icon: "🆓" },
  { value: "98%", label: "Success Rate", icon: "✅" },
];

export default function EPRScreen() {
  const router = useRouter();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: C.white, fontFamily: C.sans, color: C.bodyText }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .section-label { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: ${C.primary}; margin-bottom: 12px; display: block; }

        /* Hero */
        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr; gap: 36px; } .hero-right { display: none; } }

        .trust-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

        /* Stats strip */
        .stats-strip { display: grid; grid-template-columns: repeat(4, 1fr); }
        @media (max-width: 768px) { .stats-strip { grid-template-columns: repeat(2, 1fr); } }

        /* Main content grid */
        .main-grid { display: grid; grid-template-columns: 1fr 380px; gap: 48px; align-items: flex-start; }
        @media (max-width: 1024px) { .main-grid { grid-template-columns: 1fr; } }

        /* Types */
        .types-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 40px; }
        @media (max-width: 600px) { .types-grid { grid-template-columns: 1fr; } }

        /* Docs */
        .docs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        @media (max-width: 600px) { .docs-grid { grid-template-columns: 1fr; } }

        /* Info split */
        .info-split { display: grid; grid-template-columns: 340px 1fr; gap: 24px; align-items: stretch; }
        @media (max-width: 768px) { .info-split { grid-template-columns: 1fr !important; } }

        .type-card { background: ${C.white}; border-radius: 16px; padding: 20px; border: 1.5px solid ${C.border}; transition: all 0.25s ease; }
        .type-card:hover { border-color: ${C.primary}; transform: translateY(-3px); box-shadow: 0 12px 32px rgba(249,115,22,0.10); }

        .faq-card { background: ${C.white}; border-radius: 14px; padding: 22px 24px; border: 1.5px solid ${C.border}; transition: border-color 0.2s; margin-bottom: 12px; }
        .faq-card:hover { border-color: ${C.primary}; }

        .img-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(12,35,64,0.88) 50%, rgba(12,35,64,0.45) 100%); }

        @media (max-width: 768px) { .sec-pad { padding: 60px 16px !important; } }
      `}</style>

      <Navbar />

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "480px", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1800&q=85&fit=crop"
          alt="EPR compliance and recycling"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div className="img-overlay" />

        {/* Badge strip top-right */}
        <div style={{ position: "absolute", top: 32, right: 40, zIndex: 3, background: "rgba(255,255,255,0.12)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 14, padding: "12px 20px", display: "flex", gap: 16 }}>
          {["EPR", "CPCB", "MoEFCC", "PIBOs"].map((b) => (
            <span key={b} style={{ fontSize: 11, fontWeight: 700, color: C.primary }}>{b}</span>
          ))}
        </div>

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 40px", width: "100%", position: "relative", zIndex: 2 }}>

          <div className="hero-grid">
            {/* Left */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(249,115,22,0.2)", border: "1px solid rgba(249,115,22,0.4)", borderRadius: 999, padding: "6px 16px", marginBottom: 24 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: C.primary, display: "inline-block" }} />
                <span style={{ color: C.primary, fontSize: 12, fontWeight: 600 }}>Extended Producer Responsibility</span>
              </div>

              <h1 style={{ fontFamily: C.serif, fontSize: "clamp(2rem,4vw,3.2rem)", color: "#fff", lineHeight: 1.15, marginBottom: 20, fontWeight: 800 }}>
                EPR Registration{" "}
                <span style={{ color: C.primary }}>under</span>{" "}
                CPCB Norms
              </h1>

              <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 36, maxWidth: 480 }}>
                Mandatory for producers, importers and brand owners of electronics, plastic packaging, batteries, tyres and oils. We handle your complete EPR compliance — from registration to annual returns.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 32 }}>
                <button
                  onClick={() => router.push("/contact")}
                  style={{ padding: "14px 30px", backgroundColor: C.primary, color: "#fff", fontWeight: 700, borderRadius: 12, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans, boxShadow: "0 6px 20px rgba(249,115,22,0.45)" }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = C.primaryDark}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = C.primary}>
                  Get Free Consultation →
                </button>
                <button
                  onClick={() => router.push("/contact")}
                  style={{ padding: "14px 26px", border: "2px solid rgba(255,255,255,0.4)", color: "#fff", borderRadius: 12, background: "rgba(255,255,255,0.08)", fontSize: 14, cursor: "pointer", fontFamily: C.sans, fontWeight: 600, backdropFilter: "blur(4px)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.primary; e.currentTarget.style.color = C.primary; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; e.currentTarget.style.color = "#fff"; }}>
                  Check EPR Applicability →
                </button>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {["✓ Free Consultation", "✓ 3–6 Wk Turnaround", "✓ 98% Success Rate", "✓ Pan-India Service"].map((b) => (
                  <span key={b} style={{ padding: "6px 14px", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 999, fontSize: 12, color: "rgba(255,255,255,0.85)", background: "rgba(255,255,255,0.08)" }}>{b}</span>
                ))}
              </div>
            </div>

            {/* Right — Trust cards */}
            <div className="hero-right">
              <p style={{ fontSize: 11, fontWeight: 600, color: C.primary, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Why Choose Us</p>
              <div className="trust-grid">
                {heroTrust.map((t) => (
                  <div key={t.label} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(249,115,22,0.25)", borderRadius: 14, padding: "18px 16px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ fontSize: 22, flexShrink: 0, lineHeight: 1 }}>{t.icon}</div>
                    <div>
                      <div style={{ fontFamily: C.serif, fontSize: 14, color: "#fff", fontWeight: 700, marginBottom: 4 }}>{t.label}</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.68)", lineHeight: 1.55 }}>{t.desc}</div>
                    </div>
                  </div>
                ))}
                <div style={{ gridColumn: "span 2", background: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.3)", borderRadius: 14, padding: "14px 18px", display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ fontSize: 22, flexShrink: 0 }}>🏢</div>
                  <div>
                    <div style={{ fontSize: 13, color: "#fff", fontWeight: 600, marginBottom: 3 }}>Based in New Delhi</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)" }}>Serving all of India · CPCB Compliant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(255,255,255,0), rgba(249,115,22,0.8))" }} />
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Scroll</span>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ background: C.navy }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="stats-strip">
            {statsStrip.map((s, i) => (
              <div key={s.label} style={{ textAlign: "center", padding: "28px 16px", borderRight: i < statsStrip.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <div style={{ fontSize: 20, marginBottom: 6 }}>{s.icon}</div>
                <div style={{ fontFamily: C.serif, fontSize: "clamp(1.6rem,2.5vw,2.2rem)", color: C.primary, fontWeight: 800 }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT: Overview + Sidebar ── */}
      <section style={{ padding: "88px 24px", background: C.white }} className="sec-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="main-grid">

          {/* Left — Overview card */}
          <div style={{ backgroundColor: C.white, borderRadius: 20, padding: 40, border: `1.5px solid ${C.border}`, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
            {/* Banner image */}
            <div style={{ position: "relative", borderRadius: 14, overflow: "hidden", height: 160, marginBottom: 32 }}>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29ycG9yYXRlJTIwb2ZmaWNlfGVufDB8fDB8fHww"
                alt="EPR compliance management"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,35,64,0.85) 0%, rgba(12,35,64,0.3) 70%)" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 28px" }}>
                <div>
                  <div style={{ fontFamily: C.serif, fontSize: "clamp(1.1rem,2vw,1.5rem)", color: "#fff", fontWeight: 800, marginBottom: 6 }}>End-to-End EPR Compliance</div>
                  <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 13 }}>From eligibility check to annual returns — we manage every step.</p>
                </div>
              </div>
            </div>

            {/* EPR Types */}
            <span className="section-label">EPR Categories</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.4rem,2vw,1.9rem)", color: C.navy, fontWeight: 800, marginBottom: 8 }}>Which EPR Registration Do You Need?</h2>
            <p style={{ fontSize: 14, color: C.mutedText, lineHeight: 1.7, marginBottom: 28 }}>Different waste categories require different EPR registrations. Here's a breakdown of what applies to your product.</p>

            <div className="types-grid">
              {eprTypes.map((t) => (
                <div key={t.title} className="type-card">
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12 }}>
                    <div style={{ width: 44, height: 44, backgroundColor: C.primaryLight, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{t.icon}</div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, backgroundColor: C.blueLight, color: C.blue, padding: "3px 10px", borderRadius: 999 }}>{t.tag}</span>
                      <span style={{ fontSize: 10, color: C.mutedText, fontWeight: 600 }}>{t.authority}</span>
                    </div>
                  </div>
                  <h3 style={{ fontFamily: C.serif, fontSize: 14, color: C.navy, marginBottom: 8, fontWeight: 700 }}>{t.title}</h3>
                  <p style={{ fontSize: 12, color: C.mutedText, lineHeight: 1.65, margin: 0 }}>{t.desc}</p>
                </div>
              ))}
            </div>

            {/* Process steps */}
            <span className="section-label">How We Do It</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.4rem,2vw,1.9rem)", color: C.navy, fontWeight: 800, marginBottom: 24 }}>EPR Registration Process</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 40 }}>
              {steps.map((s) => (
                <div key={s.step} style={{ background: C.offWhite, borderRadius: 14, padding: "18px 20px", border: `1.5px solid ${C.border}`, display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: C.primaryLight, border: `2px solid #FED7AA`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 18 }}>{s.icon}</div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: C.primary, letterSpacing: "0.1em", marginBottom: 3 }}>STEP {s.step}</div>
                    <h3 style={{ fontFamily: C.serif, fontSize: 14, color: C.navy, marginBottom: 5, fontWeight: 700 }}>{s.title}</h3>
                    <p style={{ fontSize: 13, color: C.mutedText, lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => router.push("/contact")}
              style={{ width: "100%", padding: "15px", backgroundColor: C.primary, color: C.white, fontWeight: 700, borderRadius: 12, border: "none", fontSize: 15, cursor: "pointer", fontFamily: C.sans, boxShadow: "0 6px 20px rgba(249,115,22,0.35)" }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = C.primaryDark}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = C.primary}>
              Start EPR Registration →
            </button>
            <p style={{ fontSize: 12, color: C.mutedText, textAlign: "center", marginTop: 12 }}>We respond within 2 business hours. No spam, ever.</p>
          </div>

          {/* Right sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

            {/* Quick Info */}
            <div style={{ backgroundColor: C.navy, borderRadius: 16, padding: 28 }}>
              <h3 style={{ fontFamily: C.serif, fontSize: 18, color: C.white, marginBottom: 20, fontWeight: 700 }}>Quick Info</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {infoItems.map((item, i) => (
                  <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: i < infoItems.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{item.label}</span>
                    <span style={{ fontSize: 13, color: "#fff", fontWeight: 600 }}>{item.value}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => router.push("/contact")}
                style={{ width: "100%", marginTop: 24, padding: "13px", backgroundColor: C.primary, color: "#fff", fontWeight: 700, borderRadius: 10, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans, boxShadow: "0 4px 12px rgba(249,115,22,0.35)" }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = C.primaryDark}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = C.primary}>
                Get Free Consultation →
              </button>
            </div>

            {/* Documents required */}
            <div style={{ backgroundColor: C.white, borderRadius: 16, padding: 24, border: `1.5px solid ${C.border}` }}>
              <h3 style={{ fontFamily: C.serif, fontSize: 17, color: C.navy, marginBottom: 16, fontWeight: 700 }}>Documents Required</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {documents.map((doc, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: C.mutedText, lineHeight: 1.55 }}>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", backgroundColor: C.primary, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <span style={{ color: "#fff", fontSize: 10, fontWeight: 800 }}>✓</span>
                    </div>
                    {doc}
                  </div>
                ))}
              </div>
              <button
                onClick={() => router.push("/contact")}
                style={{ width: "100%", marginTop: 20, padding: "11px", border: `1.5px solid ${C.primary}`, color: C.primary, borderRadius: 10, background: "transparent", fontSize: 13, cursor: "pointer", fontFamily: C.sans, fontWeight: 700 }}>
                Get Full Checklist →
              </button>
            </div>

            {/* Emergency CTA */}
            <div style={{ position: "relative", borderRadius: 16, overflow: "hidden" }}>
              <img
                src="https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=600&q=80&fit=crop"
                alt="Urgent EPR compliance"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(249,115,22,0.95), rgba(234,88,12,0.9))" }} />
              <div style={{ position: "relative", zIndex: 1, padding: 24 }}>
                <div style={{ fontSize: 22, marginBottom: 10 }}>⚠️</div>
                <h3 style={{ fontFamily: C.serif, fontSize: 16, color: C.white, marginBottom: 8, fontWeight: 700 }}>Facing a CPCB Notice?</h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.88)", lineHeight: 1.65, marginBottom: 18 }}>Received a show-cause notice or compliance deadline? Our emergency team is available to assist with urgent EPR filings.</p>
                <a href="tel:+919876543210" style={{ display: "block", textAlign: "center", padding: "11px", backgroundColor: C.white, color: C.primary, borderRadius: 10, textDecoration: "none", fontSize: 13, fontWeight: 700 }}>
                  Call Emergency Line →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INFO SPLIT ── */}
      <section style={{ backgroundColor: C.offWhite, padding: "72px 24px" }} className="sec-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">About EPR Compliance</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.6rem,3vw,2.4rem)", color: C.navy, fontWeight: 800 }}>Why EPR Registration Matters</h2>
          </div>

          <div className="info-split">
            {/* Info card */}
            <div style={{ background: C.white, borderRadius: 16, padding: 28, border: `1.5px solid ${C.border}`, display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "all 0.25s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.primary; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(249,115,22,0.12)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, backgroundColor: C.primaryLight, border: `1.5px solid #FED7AA`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>♻️</div>
                  <div>
                    <div style={{ fontFamily: C.serif, fontSize: 20, color: C.navy, fontWeight: 700 }}>EPR Overview</div>
                    <div style={{ fontSize: 12, color: C.primary, fontWeight: 600 }}>Mandatory for PIBOs</div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    { icon: "🏛️", val: "Governed by CPCB under Ministry of Environment, Forest & Climate Change" },
                    { icon: "🌐", val: "Filed via CPCB's official EPR portal" },
                    { icon: "📅", val: "Annual renewal and return filing mandatory" },
                    { icon: "⏱️", val: "Typical registration timeline: 3–6 weeks end-to-end" },
                    { icon: "📦", val: "Applies to: E-Waste, Plastic, Batteries, Tyres, Used Oil" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, fontSize: 14, alignItems: "flex-start" }}>
                      <span style={{ flexShrink: 0, fontSize: 16 }}>{item.icon}</span>
                      <span style={{ color: C.mutedText, lineHeight: 1.6 }}>{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ marginTop: 28, paddingTop: 22, borderTop: `1px solid ${C.border}` }}>
                <button
                  onClick={() => router.push("/contact")}
                  style={{ display: "block", width: "100%", textAlign: "center", padding: "12px", backgroundColor: C.primary, color: "#fff", borderRadius: 10, border: "none", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: C.sans, boxShadow: "0 4px 14px rgba(249,115,22,0.35)", marginBottom: 10 }}>
                  ♻️ Start Registration
                </button>
                <a href="tel:+919876543210" style={{ display: "block", textAlign: "center", padding: "12px", border: `1.5px solid ${C.border}`, color: C.navy, borderRadius: 10, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>
                  📞 Call Our Team
                </a>
              </div>
            </div>

            {/* Right image panel */}
            <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", minHeight: 440 }}>
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=85&fit=crop"
                alt="Environmental compliance India"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(12,35,64,0.85) 0%, rgba(12,35,64,0.45) 55%, rgba(249,115,22,0.2) 100%)" }} />

              <div style={{ position: "relative", zIndex: 1, padding: 40, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(249,115,22,0.2)", border: "1px solid rgba(249,115,22,0.4)", borderRadius: 999, padding: "6px 16px", marginBottom: 20 }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: C.primary, display: "inline-block" }} />
                    <span style={{ color: C.primary, fontSize: 12, fontWeight: 600 }}>🇮🇳 CPCB Certified Experts</span>
                  </div>
                  <h3 style={{ fontFamily: C.serif, fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "#fff", fontWeight: 800, marginBottom: 14, lineHeight: 1.25 }}>
                    Stay Compliant with<br />India's EPR Norms
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, lineHeight: 1.8, maxWidth: 440 }}>
                    Every producer, importer and brand owner dealing in specified waste categories must register under EPR. Non-compliance can lead to heavy penalties and legal proceedings. Our team handles the entire process so you can focus on your business.
                  </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginTop: 36 }}>
                  {[
                    { value: "5,000+", label: "Registrations Filed" },
                    { value: "10+ yrs", label: "Industry Experience" },
                    { value: "98%", label: "Success Rate" },
                  ].map((s) => (
                    <div key={s.label} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, padding: "16px 14px", backdropFilter: "blur(8px)" }}>
                      <div style={{ fontFamily: C.serif, fontSize: "1.4rem", color: C.primary, fontWeight: 800 }}>{s.value}</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", marginTop: 5, lineHeight: 1.4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section style={{ padding: "72px 24px", background: C.white }} className="sec-pad">
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <span className="section-label">Common Questions</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.6rem,3vw,2.4rem)", color: C.navy, fontWeight: 800 }}>Frequently Asked</h2>
          </div>
          {faqs.map((faq) => (
            <div key={faq.q} className="faq-card">
              <div style={{ fontFamily: C.serif, fontSize: 15, color: C.navy, marginBottom: 10, fontWeight: 700 }}>Q: {faq.q}</div>
              <div style={{ fontSize: 14, color: C.mutedText, lineHeight: 1.75 }}>{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ position: "relative", padding: "88px 24px", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1497435334941-8c899a9bd7b9?w=1600&q=80&fit=crop"
          alt="EPR compliance call to action"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(249,115,22,0.92) 0%, rgba(234,88,12,0.88) 100%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.8rem,3vw,2.8rem)", color: "#fff", marginBottom: 16, fontWeight: 800 }}>
            Stay Compliant with EPR Norms
          </h2>
          <p style={{ color: "rgba(255,255,255,0.88)", marginBottom: 40, lineHeight: 1.75, fontSize: 16 }}>
            Get your EPR registration done before facing CPCB penalties. Talk to our experts for free.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
            <button
              onClick={() => router.push("/contact")}
              style={{ padding: "16px 40px", backgroundColor: "#fff", color: C.primary, fontWeight: 800, borderRadius: 12, border: "none", fontSize: 15, cursor: "pointer", fontFamily: C.sans, boxShadow: "0 6px 24px rgba(0,0,0,0.15)" }}>
              Get Free Consultation
            </button>
            <a href="tel:+919876543210"
              style={{ padding: "16px 32px", border: "2px solid rgba(255,255,255,0.6)", color: "#fff", borderRadius: 12, textDecoration: "none", fontSize: 15, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8 }}>
              📞 +91- 9540190334
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}