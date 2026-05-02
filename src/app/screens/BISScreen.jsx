import Link from "next/link";
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
  { step: "01", title: "Product Assessment", desc: "We identify the exact BIS scheme applicable to your product and the relevant Indian Standard (IS) number.", icon: "🔍" },
  { step: "02", title: "Lab Testing", desc: "Product samples are tested at a BIS-recognized lab. We coordinate with labs to get results quickly.", icon: "🧪" },
  { step: "03", title: "Document Filing", desc: "Complete application with test reports and all required documents is filed with BIS on your behalf.", icon: "📤" },
  { step: "04", title: "Factory Inspection", desc: "For ISI Mark, BIS auditors inspect your manufacturing unit. We help you prepare thoroughly.", icon: "🔎" },
  { step: "05", title: "Grant of License", desc: "BIS reviews and approves your application. License / Registration Certificate is issued.", icon: "🎓" },
  { step: "06", title: "Post-Certification Support", desc: "We assist with renewal, surveillance audits, and any compliance queries after certification.", icon: "🛡️" },
];

const faqs = [
  { q: "Which products require BIS CRS registration?", a: "70+ products including mobile phones, laptops, tablets, LED lights, power banks, chargers, set-top boxes, smart watches, and more require mandatory CRS registration." },
  { q: "How long does BIS CRS registration take?", a: "Typically 4–8 weeks if all documents are in order and lab test reports are available. We help expedite the process." },
  { q: "Can a foreign company apply for BIS certification?", a: "Yes, through BIS Scheme-X or the Foreign Manufacturers Certification Scheme (FMCS). An Indian Authorized Representative (IAR) is required." },
  { q: "What happens if I sell products without BIS certification?", a: "Products sold without mandatory BIS certification can be seized, and the company faces heavy penalties and import bans under the BIS Act, 2016." },
  { q: "Is BIS certification valid permanently?", a: "No. ISI Mark licenses are valid for 1–2 years and must be renewed. CRS registrations are valid for 2 years." },
];

const infoItems = [
  { label: "Applicable Products", value: "370+ Categories" },
  { label: "Governing Body", value: "Bureau of Indian Standards" },
  { label: "Validity", value: "1–2 Years (Renewable)" },
  { label: "Typical Timeline", value: "4–12 Weeks" },
  { label: "Our Success Rate", value: "98%" },
];

export default function BISScreen() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: C.white, fontFamily: C.sans, color: C.bodyText }}>

      <style>{`
        * { box-sizing: border-box; }

        /* ── HERO ── */
        .hero-grid { display: grid; grid-template-columns: 1fr 360px; gap: 48px; align-items: center; }
        @media (max-width: 960px) { .hero-grid { grid-template-columns: 1fr; } }

        /* ── TYPES GRID ── */
        .bis-types-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
        @media (max-width: 640px) { .bis-types-grid { grid-template-columns: 1fr; } }

        /* ── STEPS GRID ── */
        .bis-steps-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
        @media (max-width: 600px) { .bis-steps-grid { grid-template-columns: 1fr; } }

        /* ── DOCS GRID ── */
        .bis-docs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        @media (max-width: 640px) { .bis-docs-grid { grid-template-columns: 1fr; } }

        /* ── SECTION PADDING ── */
        .sec-pad { padding: 88px 24px; }
        @media (max-width: 768px) { .sec-pad { padding: 56px 16px !important; } }

        /* ── LABELS ── */
        .section-label { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: ${C.primary}; margin-bottom: 12px; display: block; }

        /* ── TYPE CARD HOVER ── */
        .bis-type-card { background: #fff; border-radius: 16px; padding: 28px; border: 1.5px solid ${C.border}; transition: all 0.25s; cursor: default; }
        .bis-type-card:hover { border-color: ${C.primary}; transform: translateY(-3px); box-shadow: 0 12px 32px rgba(249,115,22,0.10); }

        /* ── FAQ CARD ── */
        .faq-card { background: #fff; border-radius: 14px; padding: 22px 24px; border: 1.5px solid ${C.border}; transition: all 0.2s; }
        .faq-card:hover { border-color: ${C.primary}; }

        /* ── CTA BUTTONS ── */
        .bis-cta-btns { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; }
      `}</style>

      <Navbar />

      {/* ── HERO — full bleed image ── */}
      <section style={{ position: "relative", minHeight: "72vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1800&q=85&fit=crop"
          alt="BIS Certification"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,35,64,0.90) 55%, rgba(12,35,64,0.55) 100%)" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 40px", width: "100%", position: "relative", zIndex: 2 }}>

          <div className="hero-grid">
            {/* Left */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(249,115,22,0.2)", border: "1px solid rgba(249,115,22,0.4)", borderRadius: 999, padding: "6px 16px", marginBottom: 20 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: C.primary, display: "inline-block" }} />
                <span style={{ color: C.primary, fontSize: 11, fontWeight: 600, letterSpacing: "0.06em" }}>Bureau of Indian Standards</span>
              </div>
              <h1 style={{ fontFamily: C.serif, fontSize: "clamp(2rem,4vw,3.4rem)", color: "#fff", margin: "0 0 20px", fontWeight: 800, lineHeight: 1.15 }}>
                BIS Certification<br />for Indian Market Entry
              </h1>
              <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 16, lineHeight: 1.8, maxWidth: 520, marginBottom: 32 }}>
                Mandatory quality certification by the Bureau of Indian Standards. Whether you need ISI Mark, CRS Registration, or Scheme-X for foreign manufacturers — we handle it all end-to-end.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button
                  onClick={() => window.location.href = "/contact"}
                  style={{ padding: "13px 28px", backgroundColor: C.primary, color: "#fff", fontWeight: 700, borderRadius: 12, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans, boxShadow: "0 4px 16px rgba(249,115,22,0.4)" }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = C.primaryDark}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = C.primary}
                >
                  Get Free Consultation
                </button>
                <button
                  onClick={() => window.location.href = "/contact"}
                  style={{ padding: "13px 24px", border: "1.5px solid rgba(255,255,255,0.3)", color: "#fff", borderRadius: 12, background: "rgba(255,255,255,0.08)", fontSize: 14, cursor: "pointer", fontFamily: C.sans }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.primary; e.currentTarget.style.color = C.primary; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#fff"; }}
                >
                  Download Checklist →
                </button>
              </div>
            </div>

            {/* Right — frosted info card */}
            <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: 20, padding: 28, border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(10px)" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.primary, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>Quick Info</div>
              {infoItems.map((item, i) => (
                <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: i < infoItems.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{item.label}</span>
                  <span style={{ fontSize: 13, color: "#fff", fontWeight: 600, textAlign: "right", maxWidth: "55%" }}>{item.value}</span>
                </div>
              ))}
              <button
                onClick={() => window.location.href = "/contact"}
                style={{ width: "100%", marginTop: 24, padding: 13, backgroundColor: C.primary, color: "#fff", fontWeight: 700, borderRadius: 10, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans, boxShadow: "0 4px 12px rgba(249,115,22,0.35)" }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = C.primaryDark}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = C.primary}
              >
                Start Application →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── BIS TYPES ── */}
      <section className="sec-pad" style={{ background: C.offWhite }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">Types of BIS Certification</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.navy, fontWeight: 800, marginBottom: 14 }}>Which BIS Certification Do You Need?</h2>
            <p style={{ color: C.mutedText, maxWidth: 480, margin: "0 auto", lineHeight: 1.7, fontSize: 15 }}>Different products require different BIS certifications. Here's what applies to your category.</p>
          </div>
          <div className="bis-types-grid">
            {bisTypes.map((t) => (
              <div key={t.title} className="bis-type-card">
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                  <div style={{ width: 52, height: 52, backgroundColor: C.primaryLight, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{t.icon}</div>
                  <span style={{ fontSize: 10, fontWeight: 700, backgroundColor: C.blueLight, color: C.blue, padding: "3px 10px", borderRadius: 999 }}>{t.tag}</span>
                </div>
                <h3 style={{ fontFamily: C.serif, fontSize: 17, color: C.navy, marginBottom: 10, fontWeight: 700 }}>{t.title}</h3>
                <p style={{ fontSize: 13, color: C.mutedText, lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS — with banner image ── */}
      <section className="sec-pad" style={{ background: C.white }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">Step by Step</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.navy, fontWeight: 800, marginBottom: 14 }}>BIS Certification Process</h2>
          </div>

          {/* Banner */}
          <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", marginBottom: 36, height: 180 }}>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29ycG9yYXRlJTIwb2ZmaWNlfGVufDB8fDB8fHww"
              alt="BIS certification process"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,35,64,0.88) 0%, rgba(12,35,64,0.4) 60%, transparent 100%)" }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 44px" }}>
              <div>
                <div style={{ fontFamily: C.serif, fontSize: "clamp(1.2rem,2vw,1.5rem)", color: "#fff", fontWeight: 800, marginBottom: 6 }}>End-to-End BIS Compliance</div>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>Lab coordination, application filing, and follow-up — all managed by our experts.</p>
              </div>
            </div>
          </div>

          <div className="bis-steps-grid">
            {steps.map((s) => (
              <div key={s.step} style={{ background: C.white, borderRadius: 16, padding: 24, border: `1.5px solid ${C.border}`, display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 48, height: 48, borderRadius: 13, backgroundColor: C.primaryLight, border: "2px solid #FED7AA", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 20 }}>{s.icon}</div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: C.primary, letterSpacing: "0.1em", marginBottom: 4 }}>STEP {s.step}</div>
                  <h3 style={{ fontFamily: C.serif, fontSize: 15, color: C.navy, marginBottom: 6, fontWeight: 700 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: C.mutedText, lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOCUMENTS — dark image bg ── */}
      <section style={{ position: "relative", overflow: "hidden" }} className="sec-pad">
        <img
          src="https://images.unsplash.com/photo-1568219557405-376e23e4f7cf?w=1600&q=80&fit=crop"
          alt="Documents required"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(12,35,64,0.92)" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.primary, display: "block", marginBottom: 12 }}>What You Need</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: "#fff", fontWeight: 800 }}>Documents Required</h2>
          </div>
          <div className="bis-docs-grid">
            {documents.map((doc, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.07)", borderRadius: 12, padding: "16px 20px", border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", gap: 12, backdropFilter: "blur(4px)" }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: C.primary, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#fff", fontSize: 12, fontWeight: 800 }}>✓</span>
                </div>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.85)" }}>{doc}</span>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 24, fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
            Not sure if you have everything?{" "}
            <button
              onClick={() => window.location.href = "/contact"}
              style={{ color: C.primary, fontWeight: 600, background: "none", border: "none", cursor: "pointer", fontFamily: C.sans, fontSize: 13 }}
            >
              Contact us for a free document checklist →
            </button>
          </p>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="sec-pad" style={{ background: C.offWhite }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">Common Questions</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.2rem)", color: C.navy, fontWeight: 800 }}>BIS Certification FAQs</h2>
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

      {/* ── CTA — orange gradient with image ── */}
      <section style={{ position: "relative", padding: "80px 24px", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80&fit=crop"
          alt="Get BIS certified"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(249,115,22,0.93) 0%, rgba(234,88,12,0.88) 100%)" }} />
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.6rem)", color: "#fff", marginBottom: 16, fontWeight: 800 }}>Ready to Get BIS Certified?</h2>
          <p style={{ color: "rgba(255,255,255,0.88)", marginBottom: 36, lineHeight: 1.7, fontSize: 15 }}>Our BIS specialists will assess your product and give you a clear roadmap — for free.</p>
          <div className="bis-cta-btns">
            <button
              onClick={() => window.location.href = "/contact"}
              style={{ padding: "14px 36px", backgroundColor: "#fff", color: C.primary, fontWeight: 800, borderRadius: 12, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans, boxShadow: "0 6px 20px rgba(0,0,0,0.15)" }}
            >
              Get Free Consultation
            </button>
            <a
              href="tel:+919876543210"
              style={{ padding: "14px 28px", border: "2px solid rgba(255,255,255,0.6)", color: "#fff", borderRadius: 12, textDecoration: "none", fontSize: 14, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8 }}
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