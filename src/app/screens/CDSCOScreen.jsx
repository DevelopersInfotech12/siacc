import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const C = {
  primary: "#F97316",        // Orange
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

const types = [
  { icon: "💊", title: "Drug License", tag: "Pharma", desc: "Manufacturing or import license for pharmaceutical drugs and formulations under Drugs & Cosmetics Act." },
  { icon: "💄", title: "Cosmetic License", tag: "Cosmetics", desc: "Import or manufacturing license for cosmetic products sold in India under CDSCO regulations." },
  { icon: "🔬", title: "Medical Device Registration", tag: "Medical", desc: "Registration for medical devices including Class A, B, C & D devices under MDR 2017." },
  { icon: "📋", title: "CDSCO Import License", tag: "Imports", desc: "Import license for drugs, cosmetics and medical devices under Form 10 / Form 8 procedures." },
  { icon: "🏥", title: "DCGI Approval", tag: "New Drugs", desc: "Approval from Drug Controller General of India for new drugs, biologicals and clinical trials." },
  { icon: "🧪", title: "Clinical Trial Approval", tag: "Research", desc: "CDSCO approval for conducting clinical trials in India for new drugs and medical devices." },
];

const steps = [
  { step: "01", title: "Product Classification", desc: "We classify your drug/device/cosmetic under the appropriate CDSCO category and identify the correct application type.", icon: "📌" },
  { step: "02", title: "Technical Dossier", desc: "Preparation of complete technical dossier as per CDSCO requirements — CTD format for drugs.", icon: "📑" },
  { step: "03", title: "Application Filing", desc: "Complete application filed on the Sugam portal (CDSCO) or physically with the licensing authority.", icon: "📤" },
  { step: "04", title: "Query Response", desc: "CDSCO may raise technical queries. We prepare detailed, accurate responses to avoid delays.", icon: "💬" },
  { step: "05", title: "License / Registration Issued", desc: "CDSCO issues the drug/device license or registration certificate upon successful review.", icon: "✅" },
];

const documents = [
  "Company registration & GST certificate",
  "Product composition & formulation details",
  "GMP certificate / manufacturing license",
  "Clinical/safety data (for new drugs)",
  "Authorized Indian agent details",
  "Site Master File (SMF) for manufacturers",
  "Certificate of Pharmaceutical Product (CoPP)",
  "Stability data and shelf-life information",
];

const faqs = [
  { q: "Is CDSCO approval required for all drugs imported into India?", a: "Yes, all drugs imported into India require either a registration certificate or import license from CDSCO/DCGI. The requirement varies by drug category and whether it's already approved in India." },
  { q: "What is the difference between CDSCO and DCGI?", a: "CDSCO (Central Drugs Standard Control Organization) is the regulatory body. DCGI (Drug Controller General of India) is its head. Approvals for new drugs, clinical trials, and certain imports require DCGI approval." },
  { q: "How long does medical device registration take?", a: "Class A and B devices typically take 30–90 days. Class C and D devices take 3–6 months. We help prepare error-free dossiers to avoid rejection or delays." },
  { q: "Do cosmetics need CDSCO approval?", a: "Yes, cosmetics imported into India require a CDSCO import license. Products like hair dyes, sunscreens, and anti-dandruff shampoos are treated as drugs and need drug license." },
];

const infoItems = [
  { label: "Governing Body", value: "CDSCO / DCGI" },
  { label: "Governing Act", value: "Drugs & Cosmetics Act, 1940" },
  { label: "Device Rules", value: "Medical Devices Rules 2017" },
  { label: "Processing Time", value: "30 Days – 6 Months" },
  { label: "Applicable To", value: "Drugs, Cosmetics & Medical Devices" },
];

export default function CDSCOScreen() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: C.white, fontFamily: C.sans, color: C.bodyText }}>

      <style>{`
        * { box-sizing: border-box; }

        .hero-grid { display: grid; grid-template-columns: 1fr 360px; gap: 48px; align-items: center; }
        @media (max-width: 960px) { .hero-grid { grid-template-columns: 1fr; } }

        .types-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
        @media (max-width: 640px) { .types-grid { grid-template-columns: 1fr; } }

        .steps-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
        @media (max-width: 600px) { .steps-grid { grid-template-columns: 1fr; } }

        .docs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        @media (max-width: 640px) { .docs-grid { grid-template-columns: 1fr; } }

        .sec-pad { padding: 88px 24px; }
        @media (max-width: 768px) { .sec-pad { padding: 56px 16px !important; } }

        .section-label { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: ${C.primary}; margin-bottom: 12px; display: block; }

        .type-card { background: #fff; border-radius: 16px; padding: 28px; border: 1.5px solid ${C.border}; transition: all 0.25s; }
        .type-card:hover { border-color: ${C.primary}; transform: translateY(-3px); box-shadow: 0 12px 32px rgba(249,115,22,0.10); }

        .faq-card { background: #fff; border-radius: 14px; padding: 22px 24px; border: 1.5px solid ${C.border}; transition: all 0.2s; }
        .faq-card:hover { border-color: ${C.primary}; }
      `}</style>

      <Navbar />

      {/* HERO SECTION */}
      <section style={{ position: "relative", minHeight: "72vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1800&q=85&fit=crop" 
          alt="ISO Certification"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,35,64,0.90) 55%, rgba(12,35,64,0.55) 100%)" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 40px", width: "100%", position: "relative", zIndex: 2 }}>
          <div className="hero-grid">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(249,115,22,0.2)", border: "1px solid rgba(249,115,22,0.4)", borderRadius: 999, padding: "6px 16px", marginBottom: 20 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: C.primary, display: "inline-block" }} />
                <span style={{ color: C.primary, fontSize: 11, fontWeight: 600, letterSpacing: "0.06em" }}>CDSCO / DCGI</span>
              </div>

              <h1 style={{ fontFamily: C.serif, fontSize: "clamp(2rem,4vw,3.4rem)", color: "#fff", margin: "0 0 20px", fontWeight: 800, lineHeight: 1.15 }}>
                CDSCO Licensing<br />for Drugs, Devices & Cosmetics
              </h1>

              <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 16, lineHeight: 1.8, maxWidth: 520, marginBottom: 32 }}>
                Regulatory approvals for pharmaceutical drugs, cosmetics, and medical devices under CDSCO / DCGI. 
                We handle technical dossier preparation, Sugam portal filing, and query management.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button
                  onClick={() => window.location.href = "/contact"}
                  style={{ padding: "13px 28px", backgroundColor: C.primary, color: "#fff", fontWeight: 700, borderRadius: 12, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans, boxShadow: "0 4px 16px rgba(249,115,22,0.4)" }}
                >
                  Get Free Consultation
                </button>
                <button
                  onClick={() => window.location.href = "/contact"}
                  style={{ padding: "13px 24px", border: "1.5px solid rgba(255,255,255,0.3)", color: "#fff", borderRadius: 12, background: "rgba(255,255,255,0.08)", fontSize: 14, cursor: "pointer", fontFamily: C.sans }}
                >
                  Check Requirements →
                </button>
              </div>
            </div>

            {/* Info Card */}
            <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: 20, padding: 28, border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(10px)" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.primary, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>Quick Info</div>
              {infoItems.map((item, i) => (
                <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: i < infoItems.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{item.label}</span>
                  <span style={{ fontSize: 13, color: "#fff", fontWeight: 600, textAlign: "right" }}>{item.value}</span>
                </div>
              ))}
              <button
                onClick={() => window.location.href = "/contact"}
                style={{ width: "100%", marginTop: 24, padding: 13, backgroundColor: C.primary, color: "#fff", fontWeight: 700, borderRadius: 10, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans }}
              >
                Start CDSCO Application →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES SECTION */}
      <section className="sec-pad" style={{ background: C.offWhite }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">CDSCO SERVICES</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.navy, fontWeight: 800, marginBottom: 14 }}>
              CDSCO Licensing Services
            </h2>
          </div>

          <div className="types-grid">
            {types.map((t) => (
              <div key={t.title} className="type-card">
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                  <div style={{ width: 52, height: 52, backgroundColor: C.primaryLight, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>
                    {t.icon}
                  </div>
                  <span style={{ fontSize: 10, fontWeight: 700, backgroundColor: C.blueLight, color: C.blue, padding: "3px 10px", borderRadius: 999 }}>
                    {t.tag}
                  </span>
                </div>
                <h3 style={{ fontFamily: C.serif, fontSize: 17, color: C.navy, marginBottom: 10, fontWeight: 700 }}>{t.title}</h3>
                <p style={{ fontSize: 13, color: C.mutedText, lineHeight: 1.7 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="sec-pad" style={{ background: C.white }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">APPLICATION PROCESS</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.navy, fontWeight: 800 }}>CDSCO Application Process</h2>
          </div>

          <div className="steps-grid">
            {steps.map((s) => (
              <div key={s.step} style={{ background: C.white, borderRadius: 16, padding: 24, border: `1.5px solid ${C.border}`, display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 48, height: 48, borderRadius: 13, backgroundColor: C.primaryLight, border: "2px solid #FED7AA", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 20 }}>
                  {s.icon}
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: C.primary, letterSpacing: "0.1em", marginBottom: 4 }}>STEP {s.step}</div>
                  <h3 style={{ fontFamily: C.serif, fontSize: 15, color: C.navy, marginBottom: 6, fontWeight: 700 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: C.mutedText, lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS SECTION */}
      <section className="sec-pad" style={{ position: "relative", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1568219557405-376e23e4f7cf?w=1600&q=80&fit=crop"
          alt="Documents Required"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(12,35,64,0.92)" }} />

        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label" style={{ color: "#fff" }}>REQUIRED DOCUMENTS</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: "#fff", fontWeight: 800 }}>Documents Required</h2>
          </div>

          <div className="docs-grid">
            {documents.map((doc, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.07)", borderRadius: 12, padding: "16px 20px", border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", gap: 12, backdropFilter: "blur(4px)" }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: C.primary, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#fff", fontSize: 12, fontWeight: 800 }}>✓</span>
                </div>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.85)" }}>{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="sec-pad" style={{ background: C.offWhite }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">FAQs</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.2rem)", color: C.navy, fontWeight: 800 }}>Frequently Asked Questions</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {faqs.map((faq) => (
              <div key={faq.q} className="faq-card">
                <div style={{ display: "flex", gap: 14, marginBottom: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: C.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontWeight: 800, fontSize: 12, color: C.primary }}>Q</div>
                  <div style={{ fontFamily: C.serif, fontSize: 15, color: C.navy, fontWeight: 700, paddingTop: 4 }}>{faq.q}</div>
                </div>
                <div style={{ display: "flex", gap: 14 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: C.blueLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontWeight: 800, fontSize: 12, color: C.blue }}>A</div>
                  <div style={{ fontSize: 13, color: C.mutedText, lineHeight: 1.75, paddingTop: 4 }}>{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ position: "relative", padding: "80px 24px", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80&fit=crop"
          alt="CDSCO Compliance"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(249,115,22,0.93) 0%, rgba(234,88,12,0.88) 100%)" }} />

        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.6rem)", color: "#fff", marginBottom: 16, fontWeight: 800 }}>
            Navigate CDSCO with Confidence
          </h2>
          <p style={{ color: "rgba(255,255,255,0.88)", marginBottom: 36, lineHeight: 1.7, fontSize: 15 }}>
            Our regulatory experts will guide you through every step of the CDSCO approval process.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
            <button
              onClick={() => window.location.href = "/contact"}
              style={{ padding: "14px 36px", backgroundColor: "#fff", color: C.primary, fontWeight: 800, borderRadius: 12, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans }}
            >
              Get Free Consultation
            </button>
            <a
              href="tel:+919876543210"
              style={{ padding: "14px 28px", border: "2px solid rgba(255,255,255,0.6)", color: "#fff", borderRadius: 12, textDecoration: "none", fontSize: 14, fontWeight: 600 }}
            >
              📞 +91 98765 43210
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}