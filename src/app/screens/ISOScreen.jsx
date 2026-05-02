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

const isoTypes = [
  { icon: "🏆", title: "ISO 9001:2015", tag: "Most Popular", desc: "Quality Management System — the world's most recognized quality standard for all industries." },
  { icon: "🌿", title: "ISO 14001:2015", tag: "Environment", desc: "Environmental Management System for organizations committed to reducing environmental impact." },
  { icon: "🦺", title: "ISO 45001:2018", tag: "Safety", desc: "Occupational Health & Safety Management System to prevent workplace injuries and illness." },
  { icon: "🔒", title: "ISO 27001:2022", tag: "IT Security", desc: "Information Security Management System for organizations handling sensitive data." },
  { icon: "🍽️", title: "ISO 22000:2018", tag: "Food Safety", desc: "Food Safety Management System for the entire food supply chain." },
  { icon: "💉", title: "ISO 13485:2016", tag: "Medical Devices", desc: "Quality Management System specifically for medical device manufacturers and suppliers." },
];

const steps = [
  { step: "01", title: "Gap Analysis", desc: "We assess your current processes against ISO requirements and identify areas for improvement.", icon: "📊" },
  { step: "02", title: "Documentation", desc: "We help create all required policies, procedures, and quality manuals to ISO standards.", icon: "📄" },
  { step: "03", title: "Implementation", desc: "Your team implements the documented processes. We provide training and support throughout.", icon: "⚙️" },
  { step: "04", title: "Internal Audit", desc: "We conduct an internal audit to verify readiness before the external certification audit.", icon: "🔍" },
  { step: "05", title: "Certification Audit", desc: "Accredited certification body conducts Stage 1 and Stage 2 audits.", icon: "📋" },
  { step: "06", title: "Certificate Issued", desc: "ISO certificate issued. Valid for 3 years with annual surveillance audits.", icon: "🏅" },
];

const faqs = [
  { q: "Is ISO certification mandatory in India?", a: "ISO certification is generally voluntary but is increasingly required for government tenders, international contracts, and export compliance. Some sectors have mandatory requirements." },
  { q: "How long does ISO certification take?", a: "Typically 2–4 months depending on your organization's size, existing processes, and the standard being pursued. We help expedite the process." },
  { q: "How long is an ISO certificate valid?", a: "ISO certificates are valid for 3 years with annual surveillance audits in year 1 and year 2, and a recertification audit in year 3." },
  { q: "Can a small business get ISO certified?", a: "Absolutely. ISO standards are designed to be scalable and apply to organizations of all sizes — from single-person businesses to large corporations." },
];

const infoItems = [
  { label: "Standards Covered", value: "ISO 9001, 14001, 45001 & more" },
  { label: "Recognition", value: "Global (170+ Countries)" },
  { label: "Validity", value: "3 Years + Annual Audit" },
  { label: "Processing Time", value: "2–4 Months" },
  { label: "Applicable To", value: "All Industries & Sizes" },
];

export default function ISOScreen() {
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

        .sec-pad { padding: 88px 24px; }
        @media (max-width: 768px) { .sec-pad { padding: 56px 16px !important; } }

        .section-label { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: ${C.primary}; margin-bottom: 12px; display: block; }

        .type-card { background: #fff; border-radius: 16px; padding: 28px; border: 1.5px solid ${C.border}; transition: all 0.25s; cursor: default; }
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
                <span style={{ color: C.primary, fontSize: 11, fontWeight: 600, letterSpacing: "0.06em" }}>INTERNATIONAL STANDARDS</span>
              </div>

              <h1 style={{ fontFamily: C.serif, fontSize: "clamp(2rem,4vw,3.4rem)", color: "#fff", margin: "0 0 20px", fontWeight: 800, lineHeight: 1.15 }}>
                ISO Certification<br />for All Industries
              </h1>

              <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 16, lineHeight: 1.8, maxWidth: 520, marginBottom: 32 }}>
                Globally recognized quality, environment, safety, and information security standards.
                We manage the complete ISO certification journey — from gap analysis to final certification.
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
                  Which ISO Do I Need? →
                </button>
              </div>
            </div>

            {/* Info Card */}
            <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: 20, padding: 28, border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(10px)" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.primary, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>Quick Info</div>
              {infoItems.map((item, i) => (
                <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: i < infoItems.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{item.label}</span>
                  <span style={{ fontSize: 13, color: "#fff", fontWeight: 600 }}>{item.value}</span>
                </div>
              ))}
              <button
                onClick={() => window.location.href = "/contact"}
                style={{ width: "100%", marginTop: 24, padding: 13, backgroundColor: C.primary, color: "#fff", fontWeight: 700, borderRadius: 10, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans }}
              >
                Start ISO Certification →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ISO TYPES SECTION */}
      <section className="sec-pad" style={{ background: C.offWhite }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">ISO STANDARDS</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.navy, fontWeight: 800, marginBottom: 14 }}>
              ISO Standards We Cover
            </h2>
            <p style={{ color: C.mutedText, maxWidth: 480, margin: "0 auto", lineHeight: 1.7, fontSize: 15 }}>
              Choose the right ISO standard for your business goals and industry requirements.
            </p>
          </div>

          <div className="types-grid">
            {isoTypes.map((t) => (
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
            <span className="section-label">CERTIFICATION PROCESS</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.navy, fontWeight: 800 }}>ISO Certification Process</h2>
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

      {/* FAQ SECTION */}
      <section className="sec-pad" style={{ background: C.offWhite }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">COMMON QUESTIONS</span>
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
          alt="Get ISO Certified"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(249,115,22,0.93) 0%, rgba(234,88,12,0.88) 100%)" }} />

        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.6rem)", color: "#fff", marginBottom: 16, fontWeight: 800 }}>
            Get ISO Certified Today
          </h2>
          <p style={{ color: "rgba(255,255,255,0.88)", marginBottom: 36, lineHeight: 1.7, fontSize: 15 }}>
            Join thousands of businesses across India that trust us for smooth ISO certification.
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