import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const C = { forest: "#1B4332", forestMid: "#2D6A4F", forestLight: "#40916C", mint: "#95D5B2", mintLight: "#D8F3DC", offWhite: "#F7FAF8", charcoal: "#1A1A2E", gray: "#6B7280", white: "#ffffff", serif: "'Playfair Display', Georgia, serif", sans: "'DM Sans', system-ui, sans-serif" };
const isoTypes = [
  { icon: "🏆", title: "ISO 9001:2015", tag: "Most Popular", desc: "Quality Management System — the world's most recognized quality standard for all industries." },
  { icon: "🌿", title: "ISO 14001:2015", tag: "Environment", desc: "Environmental Management System for organizations committed to reducing environmental impact." },
  { icon: "🦺", title: "ISO 45001:2018", tag: "Safety", desc: "Occupational Health & Safety Management System to prevent workplace injuries and illness." },
  { icon: "🔒", title: "ISO 27001:2022", tag: "IT Security", desc: "Information Security Management System for organizations handling sensitive data." },
  { icon: "🍽️", title: "ISO 22000:2018", tag: "Food Safety", desc: "Food Safety Management System for the entire food supply chain." },
  { icon: "💉", title: "ISO 13485:2016", tag: "Medical Devices", desc: "Quality Management System specifically for medical device manufacturers and suppliers." },
];
const steps = [
  { step: "01", title: "Gap Analysis", desc: "We assess your current processes against ISO requirements and identify areas for improvement." },
  { step: "02", title: "Documentation", desc: "We help create all required policies, procedures, and quality manuals to ISO standards." },
  { step: "03", title: "Implementation", desc: "Your team implements the documented processes. We provide training and support throughout." },
  { step: "04", title: "Internal Audit", desc: "We conduct an internal audit to verify readiness before the external certification audit." },
  { step: "05", title: "Certification Audit", desc: "Accredited certification body conducts Stage 1 and Stage 2 audits." },
  { step: "06", title: "Certificate Issued", desc: "ISO certificate issued. Valid for 3 years with annual surveillance audits." },
];
const faqs = [
  { q: "Is ISO certification mandatory in India?", a: "ISO certification is generally voluntary but is increasingly required for government tenders, international contracts, and export compliance. Some sectors have mandatory requirements." },
  { q: "How long does ISO certification take?", a: "Typically 2–4 months depending on your organization's size, existing processes, and the standard being pursued. We help expedite the process." },
  { q: "How long is an ISO certificate valid?", a: "ISO certificates are valid for 3 years with annual surveillance audits in year 1 and year 2, and a recertification audit in year 3." },
  { q: "Can a small business get ISO certified?", a: "Absolutely. ISO standards are designed to be scalable and apply to organizations of all sizes — from single-person businesses to large corporations." },
];
export default function ISOScreen() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: C.offWhite, fontFamily: C.sans }}>
      <Navbar />
      <section style={{ backgroundColor: C.forest, padding: "80px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(149,213,178,0.15)", transform: "translate(30%,-30%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 48, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: C.forestMid, border: `1px solid ${C.forestLight}`, borderRadius: 999, padding: "5px 14px", marginBottom: 20 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: C.mint, display: "inline-block" }} />
                <span style={{ color: C.mint, fontSize: 11, fontWeight: 600 }}>International Organization for Standardization</span>
              </div>
              <h1 style={{ fontFamily: C.serif, fontSize: "clamp(2rem,4vw,3.2rem)", color: C.white, margin: "0 0 20px", fontWeight: 700, lineHeight: 1.2 }}>ISO Certification<br />for All Industries</h1>
              <p style={{ color: "#b7e4c7", fontSize: 16, lineHeight: 1.8, maxWidth: 560, marginBottom: 32 }}>Globally recognized quality, environment, safety, and information security standards. We manage the complete ISO certification journey — gap analysis, documentation, audits and certification.</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button onClick={() => window.location.href = "/contact"} style={{ padding: "13px 28px", backgroundColor: C.mint, color: C.forest, fontWeight: 700, borderRadius: 12, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans }}>Get Free Consultation</button>
                <button onClick={() => window.location.href = "/contact"} style={{ padding: "13px 28px", border: `1px solid ${C.forestLight}`, color: C.mint, borderRadius: 12, background: "transparent", fontSize: 14, cursor: "pointer", fontFamily: C.sans }}>Which ISO Do I Need? →</button>
              </div>
            </div>
            <div style={{ backgroundColor: C.forestMid, borderRadius: 16, padding: 24, border: `1px solid ${C.forestLight}` }}>
              {[{ label: "Standards Covered", value: "ISO 9001, 14001, 45001 & more" }, { label: "Recognition", value: "Global (170+ Countries)" }, { label: "Validity", value: "3 Years + Annual Audit" }, { label: "Processing Time", value: "2–4 Months" }, { label: "Applicable To", value: "All Industries & Sizes" }].map(item => (
                <div key={item.label} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid rgba(149,213,178,0.2)" }}>
                  <span style={{ fontSize: 13, color: C.mint, opacity: 0.8 }}>{item.label}</span>
                  <span style={{ fontSize: 13, color: C.white, fontWeight: 600 }}>{item.value}</span>
                </div>
              ))}
              <button onClick={() => window.location.href = "/contact"} style={{ width: "100%", marginTop: 20, padding: 13, backgroundColor: C.mint, color: C.forest, fontWeight: 700, borderRadius: 10, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans }}>Start ISO Certification →</button>
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}><h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.forest, fontWeight: 700 }}>ISO Standards We Cover</h2></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 }}>
            {isoTypes.map(t => (
              <div key={t.title} style={{ backgroundColor: C.white, borderRadius: 16, padding: 28, border: `1px solid ${C.mintLight}`, transition: "all 0.25s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.mint; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.mintLight; e.currentTarget.style.transform = "translateY(0)"; }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
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
      <section style={{ backgroundColor: C.mintLight, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}><h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.forest, fontWeight: 700 }}>ISO Certification Process</h2></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
            {steps.map(s => (
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
      <section style={{ backgroundColor: C.mintLight, padding: "64px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}><h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.2rem)", color: C.forest, fontWeight: 700 }}>Frequently Asked Questions</h2></div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {faqs.map(faq => (
              <div key={faq.q} style={{ backgroundColor: C.white, borderRadius: 14, padding: "22px 24px", border: `1px solid ${C.mint}` }}>
                <div style={{ fontFamily: C.serif, fontSize: 15, color: C.forest, marginBottom: 10, fontWeight: 600 }}>Q: {faq.q}</div>
                <div style={{ fontSize: 13, color: C.gray, lineHeight: 1.7 }}>A: {faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: C.forest, padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.white, marginBottom: 16, fontWeight: 700 }}>Get ISO Certified Today</h2>
          <p style={{ color: C.mint, marginBottom: 32, lineHeight: 1.7, fontSize: 15 }}>Join thousands of businesses that trust Siacc for ISO certification across India.</p>
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