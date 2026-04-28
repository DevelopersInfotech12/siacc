import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const C = {
  forest: "#1B4332", forestMid: "#2D6A4F", forestLight: "#40916C",
  mint: "#95D5B2", mintLight: "#D8F3DC", gold: "#D4A017",
  offWhite: "#F7FAF8", charcoal: "#1A1A2E", gray: "#6B7280", white: "#ffffff",
  serif: "'Playfair Display', Georgia, serif", sans: "'DM Sans', system-ui, sans-serif",
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
  { step: "01", title: "Eligibility Check", desc: "We verify if your business falls under EPR obligations based on your product category and annual turnover." },
  { step: "02", title: "Target Setting", desc: "Help you set collection and recycling targets as per CPCB norms for your product category." },
  { step: "03", title: "Application Filing", desc: "We prepare and file the complete EPR registration application on the CPCB portal." },
  { step: "04", title: "PRO Tie-Up", desc: "We connect you with empanelled Producer Responsibility Organizations (PROs) for waste collection." },
  { step: "05", title: "Certificate Issuance", desc: "CPCB reviews and issues your EPR registration certificate. We follow up actively." },
  { step: "06", title: "Annual Compliance", desc: "We assist with annual EPR returns, target fulfilment tracking, and renewal filings." },
];

const documents = [
  "Company registration certificate (CIN/LLPIN)", "GST Registration Certificate",
  "Authorized signatory details & KYC documents", "Product details & annual sales volume",
  "List of products and their HS codes", "Import-Export Code (for importers)",
  "Details of existing waste management arrangements", "Board resolution (for companies)",
];

const faqs = [
  { q: "Who needs EPR Registration?", a: "Any producer, importer, or brand owner (PIBOs) dealing in electronics, plastic packaging, batteries, tyres, or used oil in India must register under EPR." },
  { q: "What is the penalty for non-compliance?", a: "CPCB can impose penalties, cancel import licenses, and initiate legal proceedings. Penalties can go up to ₹1 lakh per day of non-compliance." },
  { q: "What is a PRO and do I need one?", a: "A Producer Responsibility Organization (PRO) helps you fulfill your EPR collection targets. Most businesses need to tie up with a CPCB-empanelled PRO." },
  { q: "How often do I need to file EPR returns?", a: "Annual returns are mandatory. You must report your collection, recycling and disposal data to CPCB every financial year." },
];

export default function EPRScreen() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: C.offWhite, fontFamily: C.sans }}>
      <Navbar />

      {/* Hero */}
      <section style={{ backgroundColor: C.forest, padding: "80px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(149,213,178,0.15)", transform: "translate(30%,-30%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 48, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: C.forestMid, border: `1px solid ${C.forestLight}`, borderRadius: 999, padding: "5px 14px", marginBottom: 20 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: C.mint, display: "inline-block" }} />
                <span style={{ color: C.mint, fontSize: 11, fontWeight: 600, letterSpacing: "0.08em" }}>Extended Producer Responsibility</span>
              </div>
              <h1 style={{ fontFamily: C.serif, fontSize: "clamp(2rem,4vw,3.2rem)", color: C.white, margin: "0 0 20px", fontWeight: 700, lineHeight: 1.2 }}>
                EPR Registration<br />under CPCB Norms
              </h1>
              <p style={{ color: "#b7e4c7", fontSize: 16, lineHeight: 1.8, maxWidth: 560, marginBottom: 32 }}>
                Mandatory for producers, importers and brand owners of electronics, plastic packaging, batteries, tyres and oils. We handle your complete EPR compliance — from registration to annual returns.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button onClick={() => window.location.href = "/contact"} style={{ padding: "13px 28px", backgroundColor: C.mint, color: C.forest, fontWeight: 700, borderRadius: 12, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans }}>Get Free Consultation</button>
                <button onClick={() => window.location.href = "/contact"} style={{ padding: "13px 28px", border: `1px solid ${C.forestLight}`, color: C.mint, borderRadius: 12, background: "transparent", fontSize: 14, cursor: "pointer", fontFamily: C.sans }}>Check EPR Applicability →</button>
              </div>
            </div>
            <div style={{ backgroundColor: C.forestMid, borderRadius: 16, padding: 24, border: `1px solid ${C.forestLight}` }}>
              {[{ label: "Governing Body", value: "CPCB / MoEFCC" }, { label: "Applicable To", value: "Producers, Importers, Brand Owners" }, { label: "Validity", value: "Annual (Renewable)" }, { label: "Processing Time", value: "3–6 Weeks" }, { label: "Penalty for Default", value: "Up to ₹1L / day" }].map((item) => (
                <div key={item.label} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid rgba(149,213,178,0.2)" }}>
                  <span style={{ fontSize: 13, color: C.mint, opacity: 0.8 }}>{item.label}</span>
                  <span style={{ fontSize: 13, color: C.white, fontWeight: 600 }}>{item.value}</span>
                </div>
              ))}
              <button onClick={() => window.location.href = "/contact"} style={{ width: "100%", marginTop: 20, padding: 13, backgroundColor: C.mint, color: C.forest, fontWeight: 700, borderRadius: 10, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans }}>Start EPR Registration →</button>
            </div>
          </div>
        </div>
      </section>

      {/* EPR Types */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: C.forestLight, letterSpacing: "0.12em", textTransform: "uppercase" }}>EPR Categories</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.forest, marginTop: 12, fontWeight: 700 }}>Which EPR Registration Do You Need?</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 }}>
            {eprTypes.map((t) => (
              <div key={t.title} style={{ backgroundColor: C.white, borderRadius: 16, padding: 28, border: `1px solid ${C.mintLight}`, transition: "all 0.25s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.mint; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(27,67,50,0.10)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.mintLight; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                  <div style={{ width: 48, height: 48, backgroundColor: C.mintLight, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{t.icon}</div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                    <span style={{ fontSize: 10, fontWeight: 600, backgroundColor: "#FEF3C7", color: "#92400E", padding: "3px 10px", borderRadius: 999 }}>{t.tag}</span>
                    <span style={{ fontSize: 10, color: C.forestLight, fontWeight: 600 }}>{t.authority}</span>
                  </div>
                </div>
                <h3 style={{ fontFamily: C.serif, fontSize: 17, color: C.forest, marginBottom: 10, fontWeight: 600 }}>{t.title}</h3>
                <p style={{ fontSize: 13, color: C.gray, lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ backgroundColor: C.mintLight, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: C.forestLight, letterSpacing: "0.12em", textTransform: "uppercase" }}>How We Do It</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.forest, marginTop: 12, fontWeight: 700 }}>EPR Registration Process</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
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

      {/* Documents */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: C.forestLight, letterSpacing: "0.12em", textTransform: "uppercase" }}>Required Documents</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.forest, marginTop: 12, fontWeight: 700 }}>Documents Checklist</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
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

      {/* FAQs */}
      <section style={{ backgroundColor: C.mintLight, padding: "64px 24px" }}>
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

      {/* CTA */}
      <section style={{ backgroundColor: C.forest, padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.white, marginBottom: 16, fontWeight: 700 }}>Stay Compliant with EPR Norms</h2>
          <p style={{ color: C.mint, marginBottom: 32, lineHeight: 1.7, fontSize: 15 }}>Get your EPR registration done before facing penalties. Talk to our experts for free.</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
            <button onClick={() => window.location.href = "/contact"} style={{ padding: "14px 32px", backgroundColor: C.mint, color: C.forest, fontWeight: 700, borderRadius: 12, border: "none", fontSize: 14, cursor: "pointer" }}>Get Free Consultation</button>
            <a href="tel:+919876543210" style={{ padding: "14px 32px", border: `1px solid ${C.mint}`, color: C.mint, borderRadius: 12, textDecoration: "none", fontSize: 14 }}>📞 +91 98765 43210</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}