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

const wpcTypes = [
  { icon: "📡", title: "WPC-ETA Approval", tag: "Import Mandatory", desc: "Equipment Type Approval for importing wireless devices with Bluetooth, Wi-Fi, Zigbee, or RF frequency bands." },
  { icon: "📋", title: "WPC Import License", tag: "Commercial Import", desc: "Required for commercial import of wireless telecom equipment into India under WPC norms." },
  { icon: "📻", title: "DPL / NDPL License", tag: "Possession", desc: "Demonstration Purpose License and Non-Demonstration Purpose License for RF devices." },
  { icon: "🔬", title: "Equipment Type Approval", tag: "Testing", desc: "Type approval for telecom equipment submitted for testing and approval under DoT guidelines." },
];

const steps = [
  { step: "01", title: "Product Assessment", desc: "Identify the frequency bands used by your device and the applicable WPC license type.", icon: "🔍" },
  { step: "02", title: "Lab Testing", desc: "Device samples are sent to WPC-recognized labs for RF/EMC testing and compliance verification.", icon: "🧪" },
  { step: "03", title: "Application Filing", desc: "We file the WPC-ETA application through the Saralsanchar portal on your behalf.", icon: "📤" },
  { step: "04", title: "WPC Review", desc: "WPC Wing of DoT reviews the application. We track and respond to any queries raised.", icon: "🔎" },
  { step: "05", title: "Approval Issued", desc: "WPC issues the Equipment Type Approval certificate valid for import and sale in India.", icon: "🎓" },
];

const documents = [
  "Product technical specifications", "RF test report from recognized lab",
  "Product photographs (all sides)", "User manual / product brochure",
  "Company registration documents", "Authorized representative letter",
  "Import-Export Code (IEC)", "Declaration of conformity",
];

const faqs = [
  { q: "Which devices need WPC-ETA approval?", a: "Any device using unlicensed radio frequency spectrum — including Wi-Fi, Bluetooth, Zigbee, Z-Wave, RFID, GPS modules, and wireless IoT devices — requires WPC-ETA approval before import." },
  { q: "Can I import wireless devices without WPC approval?", a: "No. Importing wireless devices without WPC-ETA is illegal and the shipment will be detained at customs. The importer can also face penalties." },
  { q: "How long is WPC-ETA approval valid?", a: "WPC-ETA approvals are typically valid for 5 years from the date of issue and can be renewed." },
  { q: "Do Indian-manufactured wireless devices also need WPC?", a: "WPC-ETA is primarily for imports. Indian manufacturers need a manufacturing license under WPC rules for licensed spectrum devices." },
];

const infoItems = [
  { label: "Governing Body", value: "WPC Wing, DoT" },
  { label: "Portal", value: "Saralsanchar.gov.in" },
  { label: "Validity", value: "5 Years" },
  { label: "Processing Time", value: "4–8 Weeks" },
  { label: "Applicable To", value: "Wi-Fi, BT, RF Devices" },
];

const heroTrust = [
  { icon: "📡", label: "All RF Devices", desc: "Wi-Fi, Bluetooth, Zigbee, and more" },
  { icon: "⚡", label: "4–8 Weeks", desc: "Faster turnaround with our team" },
  { icon: "🆓", label: "Free Consultation", desc: "No charges for initial assessment" },
  { icon: "✅", label: "98% Success Rate", desc: "Across 10,000+ approvals filed" },
];

const statsStrip = [
  { value: "5 yrs", label: "Approval Validity", icon: "📅" },
  { value: "4–8", label: "Weeks Timeline", icon: "⚡" },
  { value: "Free", label: "Initial Consultation", icon: "🆓" },
  { value: "98%", label: "Success Rate", icon: "✅" },
];

export default function WPCScreen() {
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
        .types-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px,1fr)); gap: 20px; }

        /* Steps */
        .steps-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px,1fr)); gap: 20px; }

        /* Docs */
        .docs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        @media (max-width: 600px) { .docs-grid { grid-template-columns: 1fr; } }

        /* Office split (reused for info split) */
        .info-split { display: grid; grid-template-columns: 340px 1fr; gap: 24px; align-items: stretch; }
        @media (max-width: 768px) { .info-split { grid-template-columns: 1fr !important; } }

        .type-card { background: ${C.white}; border-radius: 16px; padding: 28px; border: 1.5px solid ${C.border}; transition: all 0.25s ease; }
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
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1800&q=85&fit=crop"
          alt="WPC wireless device compliance"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div className="img-overlay" />

        {/* Badge strip top-right */}
        <div style={{ position: "absolute", top: 32, right: 40, zIndex: 3, background: "rgba(255,255,255,0.12)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 14, padding: "12px 20px", display: "flex", gap: 16 }}>
          {["WPC", "ETA", "DoT", "RF"].map((b) => (
            <span key={b} style={{ fontSize: 11, fontWeight: 700, color: C.primary }}>{b}</span>
          ))}
        </div>

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 40px", width: "100%", position: "relative", zIndex: 2 }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
            <button onClick={() => router.push("/")} style={{ color: C.primary, fontSize: 13, background: "none", border: "none", cursor: "pointer", fontFamily: C.sans }}>Home</button>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>/</span>
            <button onClick={() => router.push("/services")} style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, background: "none", border: "none", cursor: "pointer", fontFamily: C.sans }}>Services</button>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>/</span>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>WPC-ETA Approval</span>
          </div>

          <div className="hero-grid">
            {/* Left */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(249,115,22,0.2)", border: "1px solid rgba(249,115,22,0.4)", borderRadius: 999, padding: "6px 16px", marginBottom: 24 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: C.primary, display: "inline-block" }} />
                <span style={{ color: C.primary, fontSize: 12, fontWeight: 600 }}>Wireless Planning & Coordination Wing</span>
              </div>

              <h1 style={{ fontFamily: C.serif, fontSize: "clamp(2rem,4vw,3.2rem)", color: "#fff", lineHeight: 1.15, marginBottom: 20, fontWeight: 800 }}>
                WPC-ETA Approval for{" "}
                <span style={{ color: C.primary }}>Wireless</span>{" "}
                Devices
              </h1>

              <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 36, maxWidth: 480 }}>
                Mandatory Equipment Type Approval for all wireless, Bluetooth, Wi-Fi and RF devices imported into India. We handle the entire process — testing, filing and approval tracking.
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
                  Check Applicability →
                </button>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {["✓ Free Consultation", "✓ 4–8 Wk Turnaround", "✓ 98% Success Rate", "✓ Pan-India Service"].map((b) => (
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
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)" }}>Serving all of India · DoT Compliant</div>
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
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80&fit=crop"
                alt="Wireless device testing"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,35,64,0.85) 0%, rgba(12,35,64,0.3) 70%)" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 28px" }}>
                <div>
                  <div style={{ fontFamily: C.serif, fontSize: "clamp(1.1rem,2vw,1.5rem)", color: "#fff", fontWeight: 800, marginBottom: 6 }}>End-to-End WPC Compliance</div>
                  <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 13 }}>From product assessment to approval certificate — we manage every step.</p>
                </div>
              </div>
            </div>

            {/* WPC Types */}
            <span className="section-label">WPC License Types</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.4rem,2vw,1.9rem)", color: C.navy, fontWeight: 800, marginBottom: 8 }}>Which WPC Approval Do You Need?</h2>
            <p style={{ fontSize: 14, color: C.mutedText, lineHeight: 1.7, marginBottom: 28 }}>Different wireless devices require different WPC approvals. Here's a breakdown of what applies to your product.</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 40 }}>
              {wpcTypes.map((t) => (
                <div key={t.title} className="type-card" style={{ padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12 }}>
                    <div style={{ width: 44, height: 44, backgroundColor: C.primaryLight, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{t.icon}</div>
                    <span style={{ fontSize: 10, fontWeight: 700, backgroundColor: C.blueLight, color: C.blue, padding: "3px 10px", borderRadius: 999 }}>{t.tag}</span>
                  </div>
                  <h3 style={{ fontFamily: C.serif, fontSize: 14, color: C.navy, marginBottom: 8, fontWeight: 700 }}>{t.title}</h3>
                  <p style={{ fontSize: 12, color: C.mutedText, lineHeight: 1.65, margin: 0 }}>{t.desc}</p>
                </div>
              ))}
            </div>

            {/* Process steps */}
            <span className="section-label">How We Do It</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.4rem,2vw,1.9rem)", color: C.navy, fontWeight: 800, marginBottom: 24 }}>WPC Approval Process</h2>

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
              Start WPC Application →
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
                src="https://images.unsplash.com/photo-1568219557405-376e23e4f7cf?w=600&q=80&fit=crop"
                alt="Urgent compliance"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(249,115,22,0.95), rgba(234,88,12,0.9))" }} />
              <div style={{ position: "relative", zIndex: 1, padding: 24 }}>
                <div style={{ fontSize: 22, marginBottom: 10 }}>⚡</div>
                <h3 style={{ fontFamily: C.serif, fontSize: 16, color: C.white, marginBottom: 8, fontWeight: 700 }}>Customs Hold or Deadline?</h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.88)", lineHeight: 1.65, marginBottom: 18 }}>Shipment detained at port? Our emergency team is available 24/7 to assist with urgent WPC approvals.</p>
                <a href="tel:+919540190334" style={{ display: "block", textAlign: "center", padding: "11px", backgroundColor: C.white, color: C.primary, borderRadius: 10, textDecoration: "none", fontSize: 13, fontWeight: 700 }}>
                  Call Emergency Line →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INFO SPLIT — mirror of Contact's Office section ── */}
      <section style={{ backgroundColor: C.offWhite, padding: "72px 24px" }} className="sec-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">About WPC Compliance</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.6rem,3vw,2.4rem)", color: C.navy, fontWeight: 800 }}>Why WPC-ETA Matters</h2>
          </div>

          <div className="info-split">
            {/* Info card */}
            <div style={{ background: C.white, borderRadius: 16, padding: 28, border: `1.5px solid ${C.border}`, display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "all 0.25s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.primary; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(249,115,22,0.12)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, backgroundColor: C.primaryLight, border: `1.5px solid #FED7AA`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>📡</div>
                  <div>
                    <div style={{ fontFamily: C.serif, fontSize: 20, color: C.navy, fontWeight: 700 }}>WPC-ETA Overview</div>
                    <div style={{ fontSize: 12, color: C.primary, fontWeight: 600 }}>Mandatory for Import</div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    { icon: "🏛️", val: "Governed by WPC Wing, Ministry of Communications, DoT" },
                    { icon: "🌐", val: "Filed via Saralsanchar.gov.in portal" },
                    { icon: "📅", val: "Valid for 5 years from the date of issue" },
                    { icon: "⏱️", val: "Typical timeline: 4–8 weeks end-to-end" },
                    { icon: "📱", val: "Applies to: Wi-Fi, Bluetooth, Zigbee, RF, GPS, IoT devices" },
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
                  📋 Start Application
                </button>
                <a href="tel:+919540190334" style={{ display: "block", textAlign: "center", padding: "12px", border: `1.5px solid ${C.border}`, color: C.navy, borderRadius: 10, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>
                  📞 Call Our Team
                </a>
              </div>
            </div>

            {/* Right image panel */}
            <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", minHeight: 440 }}>
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=85&fit=crop"
                alt="Wireless technology India"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(12,35,64,0.85) 0%, rgba(12,35,64,0.45) 55%, rgba(249,115,22,0.2) 100%)" }} />

              <div style={{ position: "relative", zIndex: 1, padding: 40, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(249,115,22,0.2)", border: "1px solid rgba(249,115,22,0.4)", borderRadius: 999, padding: "6px 16px", marginBottom: 20 }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: C.primary, display: "inline-block" }} />
                    <span style={{ color: C.primary, fontSize: 12, fontWeight: 600 }}>🇮🇳 DoT Certified Experts</span>
                  </div>
                  <h3 style={{ fontFamily: C.serif, fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "#fff", fontWeight: 800, marginBottom: 14, lineHeight: 1.25 }}>
                    Import Wireless Devices<br />Legally & Confidently
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, lineHeight: 1.8, maxWidth: 440 }}>
                    Every wireless device entering India requires WPC-ETA approval from the DoT. Without it, your shipment will be held at customs. Our team handles the entire process so you can focus on your business.
                  </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginTop: 36 }}>
                  {[
                    { value: "10,000+", label: "Approvals Filed" },
                    { value: "15+ yrs", label: "Industry Experience" },
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
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80&fit=crop"
          alt="Get WPC approval"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(249,115,22,0.92) 0%, rgba(234,88,12,0.88) 100%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.8rem,3vw,2.8rem)", color: "#fff", marginBottom: 16, fontWeight: 800 }}>
            Import Your Wireless Device Legally
          </h2>
          <p style={{ color: "rgba(255,255,255,0.88)", marginBottom: 40, lineHeight: 1.75, fontSize: 16 }}>
            Don't risk customs detention. Get your WPC-ETA approval handled by experts — fast and accurately.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
            <button
              onClick={() => router.push("/contact")}
              style={{ padding: "16px 40px", backgroundColor: "#fff", color: C.primary, fontWeight: 800, borderRadius: 12, border: "none", fontSize: 15, cursor: "pointer", fontFamily: C.sans, boxShadow: "0 6px 24px rgba(0,0,0,0.15)" }}>
              Get Free Consultation
            </button>
            <a href="tel:+919540190334"
              style={{ padding: "16px 32px", border: "2px solid rgba(255,255,255,0.6)", color: "#fff", borderRadius: 12, textDecoration: "none", fontSize: 15, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8 }}>
              📞 +91 9540190334
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}