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
  { icon: "📦", title: "LMPC Import License", tag: "Importers", desc: "Mandatory for all importers of pre-packaged goods. Required before goods can be sold in India." },
  { icon: "🏭", title: "LMPC Manufacturer Registration", tag: "Manufacturers", desc: "For Indian manufacturers of pre-packaged commodities under the Packaged Commodities Rules." },
  { icon: "📋", title: "Packaged Commodity Registration", tag: "Brand Owners", desc: "Registration for brand owners and dealers dealing in packaged commodities." },
  { icon: "⚖️", title: "Legal Metrology Certification", tag: "Weights & Measures", desc: "Verification and certification of weighing and measuring instruments under Legal Metrology Act." },
];

const steps = [
  { step: "01", title: "Product Review", desc: "We review your pre-packaged goods and check mandatory declaration requirements under LMPC Rules.", icon: "🔍" },
  { step: "02", title: "Label Compliance Check", desc: "We verify your packaging labels for compliance — MRP, net quantity, manufacturer details, etc.", icon: "🏷️" },
  { step: "03", title: "Application Filing", desc: "LMPC registration application filed with the Controller of Legal Metrology of the relevant state.", icon: "📤" },
  { step: "04", title: "Inspection (if required)", desc: "For some categories, physical inspection of products or factory may be scheduled.", icon: "🔎" },
  { step: "05", title: "License Issued", desc: "LMPC license / registration certificate issued. You can now legally import and sell in India.", icon: "✅" },
];

const documents = [
  "Import-Export Code (IEC)",
  "Company registration certificate",
  "GST registration",
  "Product packaging with all declarations",
  "Authorized signatory KYC",
  "Brand authorization letter (if applicable)",
  "List of products with HS codes",
  "Declaration of quantity accuracy",
];

const faqs = [
  { q: "Who needs LMPC registration?", a: "All importers, manufacturers, packers, and dealers of pre-packaged goods in India are required to obtain LMPC registration under the Legal Metrology (Packaged Commodities) Rules, 2011." },
  { q: "What must be declared on packaging?", a: "Every pre-packaged product must declare: name of product, manufacturer name/address, net quantity, MRP (all-inclusive), month/year of manufacture, expiry date (if applicable), country of origin (for imports), and customer care details." },
  { q: "What is the penalty for non-compliance?", a: "Selling without LMPC registration or non-compliant packaging can attract penalties up to ₹25,000 for the first offence and ₹50,000 for subsequent offences." },
  { q: "Is LMPC required for all imported goods?", a: "Yes, any imported product that is pre-packaged and sold at retail level in India requires LMPC import license before it can be commercially sold." },
];

const infoItems = [
  { label: "Governing Act", value: "Legal Metrology Act, 2009" },
  { label: "Authority", value: "Controller of Legal Metrology" },
  { label: "Validity", value: "Annual Renewal" },
  { label: "Processing Time", value: "2–4 Weeks" },
  { label: "Applicable To", value: "All Pre-Packaged Goods" },
];

export default function LMPCScreen() {
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
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1800&q=85&fit=crop"
          alt="LMPC Registration"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,35,64,0.90) 55%, rgba(12,35,64,0.55) 100%)" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 40px", width: "100%", position: "relative", zIndex: 2 }}>
          <div className="hero-grid">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(249,115,22,0.2)", border: "1px solid rgba(249,115,22,0.4)", borderRadius: 999, padding: "6px 16px", marginBottom: 20 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: C.primary, display: "inline-block" }} />
                <span style={{ color: C.primary, fontSize: 11, fontWeight: 600, letterSpacing: "0.06em" }}>Legal Metrology</span>
              </div>

              <h1 style={{ fontFamily: C.serif, fontSize: "clamp(2rem,4vw,3.4rem)", color: "#fff", margin: "0 0 20px", fontWeight: 800, lineHeight: 1.15 }}>
                LMPC Registration<br />for Packaged Goods
              </h1>

              <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 16, lineHeight: 1.8, maxWidth: 520, marginBottom: 32 }}>
                Mandatory compliance for all importers and manufacturers of pre-packaged goods sold in India. We handle LMPC registration, label compliance, and ongoing filings.
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
                  Check Label Compliance →
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
                Start LMPC Registration →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES SECTION */}
      <section className="sec-pad" style={{ background: C.offWhite }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">LMPC REGISTRATION TYPES</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.navy, fontWeight: 800, marginBottom: 14 }}>
              Types of LMPC Registration
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
            <span className="section-label">STEP BY STEP</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.navy, fontWeight: 800 }}>LMPC Registration Process</h2>
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
          alt="Documents"
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
          alt="Get LMPC Compliant"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(249,115,22,0.93) 0%, rgba(234,88,12,0.88) 100%)" }} />

        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.6rem)", color: "#fff", marginBottom: 16, fontWeight: 800 }}>
            Get LMPC Compliant Today
          </h2>
          <p style={{ color: "rgba(255,255,255,0.88)", marginBottom: 36, lineHeight: 1.7, fontSize: 15 }}>
            Avoid customs holds and retail violations. Our Legal Metrology experts will get you compliant quickly.
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
              📞 +91- 9540190334
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}