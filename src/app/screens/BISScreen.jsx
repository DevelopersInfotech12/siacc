import Link from "next/link";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const C = {
  forest: "#1B4332", forestMid: "#2D6A4F", forestLight: "#40916C",
  mint: "#95D5B2", mintLight: "#D8F3DC", gold: "#D4A017",
  offWhite: "#F7FAF8", charcoal: "#1A1A2E", gray: "#6B7280", white: "#ffffff",
  serif: "'Playfair Display', Georgia, serif", sans: "'DM Sans', system-ui, sans-serif",
};

const bisTypes = [
  { icon: "🔖", title: "BIS ISI Mark", tag: "Manufacturing", desc: "Mandatory for 370+ product categories including steel, cement, electrical goods, and more sold in India." },
  { icon: "📱", title: "BIS CRS Registration", tag: "Electronics", desc: "Compulsory Registration Scheme for 70+ electronic & IT products like laptops, mobiles, LED lights, chargers." },
  { icon: "🌍", title: "BIS Scheme-X", tag: "Foreign Manufacturers", desc: "Specially designed for overseas manufacturers who want to sell BIS-certified products directly in India." },
  { icon: "💍", title: "BIS Hallmarking", tag: "Jewellery", desc: "Mandatory gold and silver hallmarking certification under BIS for all jewellers across India." },
  { icon: "🌿", title: "ECO Mark", tag: "Environment", desc: "Eco-friendly product certification for manufacturers committed to environmental standards." },
  { icon: "🏭", title: "FMCS Certification", tag: "Industrial", desc: "Foreign Manufacturers Certification Scheme for industrial products from overseas companies." },
];

const documents = [
  "Product Test Report from BIS-recognized lab",
  "Factory / Premises details & address proof",
  "Product specification / technical drawings",
  "Applicant company registration documents",
  "Authorized signatory details & KYC",
  "Import-Export Code (for CRS / Scheme-X)",
  "Factory layout plan (for ISI Mark)",
  "Quality Manual (for ISI Mark applicants)",
];

const steps = [
  { step: "01", title: "Product Assessment", desc: "We identify the exact BIS scheme applicable to your product and the relevant Indian Standard (IS) number." },
  { step: "02", title: "Lab Testing", desc: "Product samples are tested at a BIS-recognized lab. We coordinate with labs to get results quickly." },
  { step: "03", title: "Document Filing", desc: "Complete application with test reports and all required documents is filed with BIS on your behalf." },
  { step: "04", title: "Factory Inspection", desc: "For ISI Mark, BIS auditors inspect your manufacturing unit. We help you prepare thoroughly." },
  { step: "05", title: "Grant of License", desc: "BIS reviews and approves your application. License / Registration Certificate is issued." },
  { step: "06", title: "Post-Certification Support", desc: "We assist with renewal, surveillance audits, and any compliance queries after certification." },
];

const faqs = [
  { q: "Which products require BIS CRS registration?", a: "70+ products including mobile phones, laptops, tablets, LED lights, power banks, chargers, set-top boxes, smart watches, and more require mandatory CRS registration." },
  { q: "How long does BIS CRS registration take?", a: "Typically 4–8 weeks if all documents are in order and lab test reports are available. We help expedite the process." },
  { q: "Can a foreign company apply for BIS certification?", a: "Yes, through BIS Scheme-X or the Foreign Manufacturers Certification Scheme (FMCS). An Indian Authorized Representative (IAR) is required." },
  { q: "What happens if I sell products without BIS certification?", a: "Products sold without mandatory BIS certification can be seized, and the company faces heavy penalties and import bans under the BIS Act, 2016." },
  { q: "Is BIS certification valid permanently?", a: "No. ISI Mark licenses are valid for 1–2 years and must be renewed. CRS registrations are valid for 2 years." },
];

export default function BISScreen() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: C.offWhite, fontFamily: C.sans }}>

      <style>{`
        /* ── HERO ── */
        .bis-hero { padding: 80px 24px; }
        .bis-hero-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 48px;
          align-items: center;
        }
        .bis-hero-btns {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        @media (max-width: 900px) {
          .bis-hero-grid { grid-template-columns: 1fr; gap: 36px; }
        }
        @media (max-width: 768px) {
          .bis-hero { padding: 56px 16px; }
        }

        /* ── INFO CARD VALUE ── */
        .bis-info-value {
          font-size: 13px;
          color: #ffffff;
          font-weight: 600;
          text-align: right;
          max-width: 55%;
        }

        /* ── TYPES GRID ── */
        .bis-types-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }
        @media (max-width: 640px) {
          .bis-types-grid { grid-template-columns: 1fr; }
        }

        /* ── TYPE CARD HOVER ── */
        .bis-type-card {
          background-color: #ffffff;
          border-radius: 16px;
          padding: 28px;
          border: 1px solid #D8F3DC;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
          cursor: default;
        }
        .bis-type-card:hover {
          border-color: #95D5B2;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(27,67,50,0.10);
        }

        /* ── STEPS GRID ── */
        .bis-steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }
        @media (max-width: 600px) {
          .bis-steps-grid { grid-template-columns: 1fr; }
        }

        /* ── DOCS GRID ── */
        .bis-docs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        @media (max-width: 640px) {
          .bis-docs-grid { grid-template-columns: 1fr; }
        }

        /* ── CTA BUTTONS ── */
        .bis-cta-btns {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }

        /* ── SECTION PADDING ── */
        .bis-section { padding: 80px 24px; }
        .bis-section-sm { padding: 64px 24px; }
        @media (max-width: 768px) {
          .bis-section { padding: 56px 16px; }
          .bis-section-sm { padding: 48px 16px; }
        }
      `}</style>

      <Navbar />

      {/* ── HERO ── */}
      <section style={{ backgroundColor: C.forest, position: "relative", overflow: "hidden" }} className="bis-hero">
        <div style={{ position: "absolute", top: 0, right: 0, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(149,213,178,0.15)", transform: "translate(30%,-30%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <button onClick={() => window.history.back()} style={{ color: C.mint, fontSize: 13, background: "none", border: "none", cursor: "pointer", fontFamily: C.sans }}>← Back</button>
            <span style={{ color: C.forestLight, fontSize: 13 }}>/</span>
            <span style={{ color: C.mintLight, fontSize: 13 }}>BIS Certification</span>
          </div>

          <div className="bis-hero-grid">

            {/* Left */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: C.forestMid, border: `1px solid ${C.forestLight}`, borderRadius: 999, padding: "5px 14px", marginBottom: 20 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: C.mint, display: "inline-block" }} />
                <span style={{ color: C.mint, fontSize: 11, fontWeight: 600, letterSpacing: "0.08em" }}>Bureau of Indian Standards</span>
              </div>
              <h1 style={{ fontFamily: C.serif, fontSize: "clamp(2rem,4vw,3.2rem)", color: C.white, marginTop: 0, marginBottom: 20, fontWeight: 700, lineHeight: 1.2 }}>
                BIS Certification<br />for Indian Market Entry
              </h1>
              <p style={{ color: "#b7e4c7", fontSize: 16, lineHeight: 1.8, maxWidth: 560, marginBottom: 32 }}>
                Mandatory quality certification by the Bureau of Indian Standards. Whether you need ISI Mark, CRS Registration, or Scheme-X for foreign manufacturers — we handle it all end-to-end.
              </p>
              <div className="bis-hero-btns">
                <button onClick={() => window.location.href = "/contact"} style={{ padding: "13px 28px", backgroundColor: C.mint, color: C.forest, fontWeight: 700, borderRadius: 12, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans }}>
                  Get Free Consultation
                </button>
                <button onClick={() => window.location.href = "/contact"} style={{ padding: "13px 28px", border: `1px solid ${C.forestLight}`, color: C.mint, borderRadius: 12, background: "transparent", fontSize: 14, cursor: "pointer", fontFamily: C.sans }}>
                  Download Checklist →
                </button>
              </div>
            </div>

            {/* Info Card */}
            <div style={{ backgroundColor: C.forestMid, borderRadius: 16, padding: 24, border: `1px solid ${C.forestLight}` }}>
              {[
                { label: "Applicable Products", value: "370+ Categories" },
                { label: "Governing Body", value: "Bureau of Indian Standards" },
                { label: "Validity", value: "1–2 Years (Renewable)" },
                { label: "Typical Timeline", value: "4–12 Weeks" },
                { label: "Our Success Rate", value: "98%" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: `1px solid rgba(149,213,178,0.2)` }}>
                  <span style={{ fontSize: 13, color: C.mint, opacity: 0.8 }}>{item.label}</span>
                  <span className="bis-info-value">{item.value}</span>
                </div>
              ))}
              <button onClick={() => window.location.href = "/contact"} style={{ width: "100%", marginTop: 20, padding: 13, backgroundColor: C.mint, color: C.forest, fontWeight: 700, borderRadius: 10, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans }}>
                Start Application →
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ── BIS TYPES ── */}
      <section className="bis-section">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: C.forestLight, letterSpacing: "0.12em", textTransform: "uppercase" }}>Types of BIS Certification</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.forest, marginTop: 12, fontWeight: 700 }}>Which BIS Certification Do You Need?</h2>
          </div>
          <div className="bis-types-grid">
            {bisTypes.map((t) => (
              <div key={t.title} className="bis-type-card">
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                  <div style={{ width: 48, height: 48, backgroundColor: C.mintLight, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{t.icon}</div>
                  <span style={{ fontSize: 10, fontWeight: 600, backgroundColor: C.mintLight, color: C.forest, padding: "3px 10px", borderRadius: 999 }}>{t.tag}</span>
                </div>
                <h3 style={{ fontFamily: C.serif, fontSize: 17, color: C.forest, marginBottom: 10, fontWeight: 600 }}>{t.title}</h3>
                <p style={{ fontSize: 13, color: C.gray, lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ backgroundColor: C.mintLight }} className="bis-section">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: C.forestLight, letterSpacing: "0.12em", textTransform: "uppercase" }}>Step by Step</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.forest, marginTop: 12, fontWeight: 700 }}>BIS Certification Process</h2>
          </div>
          <div className="bis-steps-grid">
            {steps.map((s) => (
              <div key={s.step} style={{ backgroundColor: C.white, borderRadius: 16, padding: 24, border: "1px solid rgba(149,213,178,0.4)", display: "flex", gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: C.forest, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontFamily: C.serif, fontSize: 15, color: C.mint, fontWeight: 700 }}>{s.step}</span>
                </div>
                <div>
                  <h3 style={{ fontFamily: C.serif, fontSize: 15, color: C.forest, marginBottom: 8, fontWeight: 600 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: C.gray, lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOCUMENTS ── */}
      <section className="bis-section">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: C.forestLight, letterSpacing: "0.12em", textTransform: "uppercase" }}>What You Need</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.forest, marginTop: 12, fontWeight: 700 }}>Documents Required</h2>
          </div>
          <div className="bis-docs-grid">
            {documents.map((doc, i) => (
              <div key={i} style={{ backgroundColor: C.white, borderRadius: 12, padding: "16px 20px", border: `1px solid ${C.mintLight}`, display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: C.mintLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: C.forest, fontSize: 12, fontWeight: 700 }}>✓</span>
                </div>
                <span style={{ fontSize: 13, color: C.charcoal, lineHeight: 1.5 }}>{doc}</span>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 20, fontSize: 13, color: C.gray }}>
            Not sure if you have everything?{" "}
            <button onClick={() => window.location.href = "/contact"} style={{ color: C.forestLight, fontWeight: 600, background: "none", border: "none", cursor: "pointer", fontFamily: C.sans, fontSize: 13 }}>
              Contact us for a free document checklist →
            </button>
          </p>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section style={{ backgroundColor: C.mintLight }} className="bis-section">
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: C.forestLight, letterSpacing: "0.12em", textTransform: "uppercase" }}>Common Questions</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.forest, marginTop: 12, fontWeight: 700 }}>BIS Certification FAQs</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {faqs.map((faq) => (
              <div key={faq.q} style={{ backgroundColor: C.white, borderRadius: 14, padding: "22px 24px", border: `1px solid ${C.mint}` }}>
                <div style={{ fontFamily: C.serif, fontSize: 15, color: C.forest, marginBottom: 10, fontWeight: 600 }}>Q: {faq.q}</div>
                <div style={{ fontSize: 13, color: C.gray, lineHeight: 1.7 }}>A: {faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: C.forest }} className="bis-section-sm">
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.white, marginBottom: 16, fontWeight: 700 }}>Ready to Get BIS Certified?</h2>
          <p style={{ color: C.mint, marginBottom: 32, lineHeight: 1.7, fontSize: 15 }}>Our BIS specialists will assess your product and give you a clear roadmap — for free.</p>
          <div className="bis-cta-btns">
            <button onClick={() => window.location.href = "/contact"} style={{ padding: "14px 32px", backgroundColor: C.mint, color: C.forest, fontWeight: 700, borderRadius: 12, border: "none", fontSize: 14, cursor: "pointer" }}>
              Get Free Consultation
            </button>
            <a href="tel:+919876543210" style={{ padding: "14px 32px", border: `1px solid ${C.mint}`, color: C.mint, borderRadius: 12, textDecoration: "none", fontSize: 14 }}>
              📞 +91 98765 43210
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}