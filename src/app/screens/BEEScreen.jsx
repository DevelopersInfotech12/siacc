import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const C = {
  forest: "#1B4332", forestMid: "#2D6A4F", forestLight: "#40916C",
  mint: "#95D5B2", mintLight: "#D8F3DC", offWhite: "#F7FAF8",
  charcoal: "#1A1A2E", gray: "#6B7280", white: "#ffffff",
  serif: "'Playfair Display', Georgia, serif", sans: "'DM Sans', system-ui, sans-serif",
};

const types = [
  { icon: "⭐", title: "Mandatory Star Rating", tag: "Mandatory", desc: "Compulsory BEE star labelling for ACs, refrigerators, washing machines, TVs, geysers, and more." },
  { icon: "🌟", title: "Voluntary Star Rating", tag: "Optional", desc: "Optional BEE star label for products not covered under mandatory scheme — builds consumer trust." },
  { icon: "🔌", title: "Energy Efficiency Certification", tag: "All Products", desc: "BEE certification for energy-efficient products for public procurement under government schemes." },
  { icon: "🏭", title: "Bureau of Energy Efficiency", tag: "Compliance", desc: "Complete BEE Act compliance for manufacturers including annual submissions and renewals." },
];

const steps = [
  { step: "01", title: "Product Eligibility", desc: "We check if your product falls under mandatory or voluntary star rating category." },
  { step: "02", title: "Energy Testing", desc: "Product tested at BEE-accredited lab for energy consumption and efficiency parameters." },
  { step: "03", title: "Application Filing", desc: "BEE registration application filed with all test reports on the BEE portal." },
  { step: "04", title: "Label Design", desc: "We help design the BEE star label with correct energy consumption values for your product." },
  { step: "05", title: "Registration Issued", desc: "BEE issues the registration number. You can now legally affix the star label." },
];

const documents = [
  "Energy test report from BEE-accredited lab",
  "Product technical specifications",
  "Brand / Model details",
  "Manufacturing unit details",
  "KYC of company & signatory",
  "Annual energy sales data",
  "Label artwork proof",
  "BIS certificate (if applicable)",
];

const faqs = [
  { q: "Which appliances need mandatory BEE star labels?", a: "Air conditioners, refrigerators, ceiling fans, washing machines, LED lamps, distribution transformers, water heaters, and several other categories are under mandatory BEE labelling." },
  { q: "Can I sell appliances without BEE star rating?", a: "For mandatory categories, selling without a BEE star label is illegal and can result in seizure and penalties under the Energy Conservation Act." },
  { q: "How often must BEE registration be renewed?", a: "BEE registrations must be renewed annually. The star rating may change as energy efficiency norms are upgraded periodically." },
  { q: "Does BEE apply to imported products?", a: "Yes, imported products in mandatory categories must also carry the BEE star label before being sold in India." },
];

export default function BEEScreen() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: C.offWhite, fontFamily: C.sans }}>

      <style>{`
        /* ── HERO ── */
        .bee-hero-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .bee-hero-grid { grid-template-columns: 1fr; gap: 36px; }
        }

        /* ── HERO BUTTONS ── */
        .bee-hero-btns {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        /* ── TYPES GRID ── */
        .bee-types-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }
        @media (max-width: 600px) {
          .bee-types-grid { grid-template-columns: 1fr; }
        }

        /* ── STEPS GRID ── */
        .bee-steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }
        @media (max-width: 600px) {
          .bee-steps-grid { grid-template-columns: 1fr; }
        }

        /* ── DOCUMENTS GRID ── */
        .bee-docs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        @media (max-width: 640px) {
          .bee-docs-grid { grid-template-columns: 1fr; }
        }

        /* ── CTA BUTTONS ── */
        .bee-cta-btns {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }

        /* ── TYPE CARD HOVER ── */
        .bee-type-card {
          background-color: #ffffff;
          border-radius: 16px;
          padding: 28px;
          border: 1px solid #D8F3DC;
          transition: border-color 0.25s, transform 0.25s;
        }
        .bee-type-card:hover {
          border-color: #95D5B2;
          transform: translateY(-3px);
        }

        /* ── SECTION PADDING ── */
        .bee-section { padding: 80px 24px; }
        .bee-section-sm { padding: 64px 24px; }
        @media (max-width: 768px) {
          .bee-section { padding: 56px 16px; }
          .bee-section-sm { padding: 48px 16px; }
        }

        /* ── HERO PADDING ── */
        .bee-hero { padding: 80px 24px; }
        @media (max-width: 768px) {
          .bee-hero { padding: 56px 16px; }
        }
      `}</style>

      <Navbar />

      {/* ── HERO ── */}
      <section style={{ backgroundColor: C.forest, position: "relative", overflow: "hidden" }} className="bee-hero">
        <div style={{ position: "absolute", top: 0, right: 0, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(149,213,178,0.15)", transform: "translate(30%,-30%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="bee-hero-grid">

            {/* Left */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: C.forestMid, border: `1px solid ${C.forestLight}`, borderRadius: 999, padding: "5px 14px", marginBottom: 20 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: C.mint, display: "inline-block" }} />
                <span style={{ color: C.mint, fontSize: 11, fontWeight: 600 }}>Bureau of Energy Efficiency</span>
              </div>
              <h1 style={{ fontFamily: C.serif, fontSize: "clamp(2rem,4vw,3.2rem)", color: C.white, margin: "0 0 20px", fontWeight: 700, lineHeight: 1.2 }}>
                BEE Star Rating &<br />Energy Labelling
              </h1>
              <p style={{ color: "#b7e4c7", fontSize: 16, lineHeight: 1.8, maxWidth: 560, marginBottom: 32 }}>
                Mandatory energy efficiency star labelling for appliances sold in India. We handle BEE registration, lab coordination, and annual compliance end-to-end.
              </p>
              <div className="bee-hero-btns">
                <button onClick={() => window.location.href = "/contact"} style={{ padding: "13px 28px", backgroundColor: C.mint, color: C.forest, fontWeight: 700, borderRadius: 12, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans }}>
                  Get Free Consultation
                </button>
                <button onClick={() => window.location.href = "/contact"} style={{ padding: "13px 28px", border: `1px solid ${C.forestLight}`, color: C.mint, borderRadius: 12, background: "transparent", fontSize: 14, cursor: "pointer", fontFamily: C.sans }}>
                  Check If Mandatory →
                </button>
              </div>
            </div>

            {/* Info Card */}
            <div style={{ backgroundColor: C.forestMid, borderRadius: 16, padding: 24, border: `1px solid ${C.forestLight}` }}>
              {[
                { label: "Governing Body", value: "Bureau of Energy Efficiency" },
                { label: "Ministry", value: "Power, Govt. of India" },
                { label: "Validity", value: "Annual" },
                { label: "Processing Time", value: "4–8 Weeks" },
                { label: "Applicable To", value: "Home & Commercial Appliances" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid rgba(149,213,178,0.2)" }}>
                  <span style={{ fontSize: 13, color: C.mint, opacity: 0.8 }}>{item.label}</span>
                  <span style={{ fontSize: 13, color: C.white, fontWeight: 600, textAlign: "right", maxWidth: "55%" }}>{item.value}</span>
                </div>
              ))}
              <button onClick={() => window.location.href = "/contact"} style={{ width: "100%", marginTop: 20, padding: 13, backgroundColor: C.mint, color: C.forest, fontWeight: 700, borderRadius: 10, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans }}>
                Start BEE Registration →
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ── REGISTRATION TYPES ── */}
      <section className="bee-section">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.forest, fontWeight: 700 }}>BEE Registration Types</h2>
          </div>
          <div className="bee-types-grid">
            {types.map((t) => (
              <div key={t.title} className="bee-type-card">
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                  <div style={{ width: 48, height: 48, backgroundColor: C.mintLight, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{t.icon}</div>
                  <span style={{ fontSize: 10, fontWeight: 600, backgroundColor: C.mintLight, color: C.forest, padding: "3px 10px", borderRadius: 999, alignSelf: "flex-start" }}>{t.tag}</span>
                </div>
                <h3 style={{ fontFamily: C.serif, fontSize: 17, color: C.forest, marginBottom: 10, fontWeight: 600 }}>{t.title}</h3>
                <p style={{ fontSize: 13, color: C.gray, lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ backgroundColor: C.mintLight }} className="bee-section">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.forest, fontWeight: 700 }}>BEE Registration Process</h2>
          </div>
          <div className="bee-steps-grid">
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
      <section className="bee-section">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.forest, fontWeight: 700 }}>Documents Required</h2>
          </div>
          <div className="bee-docs-grid">
            {documents.map((doc, i) => (
              <div key={i} style={{ backgroundColor: C.white, borderRadius: 12, padding: "16px 20px", border: `1px solid ${C.mintLight}`, display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: C.mintLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: C.forest, fontSize: 12, fontWeight: 700 }}>✓</span>
                </div>
                <span style={{ fontSize: 13, color: C.charcoal }}>{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ backgroundColor: C.mintLight }} className="bee-section-sm">
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.2rem)", color: C.forest, fontWeight: 700 }}>Frequently Asked Questions</h2>
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
      <section style={{ backgroundColor: C.forest }} className="bee-section-sm">
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.white, marginBottom: 16, fontWeight: 700 }}>Get BEE Star Rating for Your Product</h2>
          <p style={{ color: C.mint, marginBottom: 32, lineHeight: 1.7, fontSize: 15 }}>Our energy compliance team will handle your BEE registration from start to finish.</p>
          <div className="bee-cta-btns">
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