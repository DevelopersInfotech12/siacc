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

const types = [
  { icon: "📶", title: "TEC/MTCTE Certification", tag: "Mandatory", desc: "Mandatory Testing & Certification of Telecom Equipment for all telecom products sold or used in India." },
  { icon: "📱", title: "TAC & IMEI Registration", tag: "Mobile Devices", desc: "Type Allocation Code & IMEI registration for all mobile handsets and devices before launch in India." },
  { icon: "🌐", title: "IoT Device Certification", tag: "IoT", desc: "Certification for Internet of Things devices under MTCTE framework including smart meters, trackers." },
  { icon: "📡", title: "Telecom Equipment Approval", tag: "Telecom", desc: "Approval for telecom network equipment, routers, switches and networking hardware." },
];

const steps = [
  { step: "01", title: "Product Scoping", desc: "We identify applicable TEC standards and testing requirements for your telecom product.", icon: "🔍" },
  { step: "02", title: "Lab Testing", desc: "Product is tested at TEC-designated/empanelled labs for conformity with Indian telecom standards.", icon: "🧪" },
  { step: "03", title: "Application Filing", desc: "Complete MTCTE application filed on TEC portal with test reports and all supporting documents.", icon: "📤" },
  { step: "04", title: "TEC Review", desc: "TEC reviews the application. We respond to any technical queries raised by the authority.", icon: "🔎" },
  { step: "05", title: "Certificate Issued", desc: "TEC issues the MTCTE certificate. Product can now be legally sold/used in India.", icon: "🎓" },
];

const documents = [
  "Product technical datasheet", "Test report from TEC-empanelled lab",
  "Block diagram of the device", "Product photographs",
  "Company registration & KYC", "Authorized signatory letter",
  "User manual in English", "Declaration of conformity",
];

const faqs = [
  { q: "What is MTCTE?", a: "MTCTE stands for Mandatory Testing and Certification of Telecom Equipment. It is a DoT initiative requiring all telecom equipment sold or imported in India to be certified by TEC." },
  { q: "Which products fall under MTCTE?", a: "Products include mobile phones, routers, switches, modems, set-top boxes, GPS devices, IoT equipment, and other telecom/networking hardware." },
  { q: "What is the penalty for selling uncertified telecom equipment?", a: "Selling or importing uncertified telecom equipment can result in seizure, heavy penalties, and suspension of import license." },
  { q: "How long does TEC certification take?", a: "Typically 6–12 weeks depending on product complexity, lab availability, and application completeness." },
];

const infoItems = [
  { label: "Governing Body", value: "TEC, Dept. of Telecom" },
  { label: "Portal", value: "MTCTE Portal (DoT)" },
  { label: "Validity", value: "3 Years" },
  { label: "Processing Time", value: "6–12 Weeks" },
  { label: "Applicable To", value: "All Telecom Equipment" },
];

export default function TECScreen() {
  const router = useRouter();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: C.white, fontFamily: C.sans, color: C.bodyText }}>
      <style>{`
        * { box-sizing: border-box; }
        .hero-grid { display: grid; grid-template-columns: 1fr 360px; gap: 48px; align-items: center; }
        @media (max-width: 960px) { .hero-grid { grid-template-columns: 1fr; } }
        .types-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px,1fr)); gap: 20px; }
        .steps-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px,1fr)); gap: 20px; }
        .docs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        @media (max-width: 600px) { .docs-grid { grid-template-columns: 1fr; } }
        .sec-pad { padding: 88px 24px; }
        @media (max-width: 768px) { .sec-pad { padding: 56px 16px !important; } }
        .section-label { font-size:11px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:${C.primary}; margin-bottom:12px; display:block; }
        .type-card { background:#fff; border-radius:16px; padding:28px; border:1.5px solid ${C.border}; transition:all 0.25s; }
        .type-card:hover { border-color:${C.primary}; transform:translateY(-3px); box-shadow:0 12px 32px rgba(249,115,22,0.10); }
        .faq-card { background:#fff; border-radius:14px; padding:22px 24px; border:1.5px solid ${C.border}; transition:all 0.2s; }
        .faq-card:hover { border-color:${C.primary}; }
      `}</style>

      <Navbar />

      {/* ── HERO — full bleed image ── */}
      <section style={{ position: "relative", minHeight: "72vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1800&q=85&fit=crop"
          alt="Telecom certification"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,35,64,0.90) 55%, rgba(12,35,64,0.55) 100%)" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 40px", width: "100%", position: "relative", zIndex: 2 }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 32 }}>
            <button onClick={() => router.push("/")} style={{ color: C.primary, fontSize: 13, background: "none", border: "none", cursor: "pointer", fontFamily: C.sans }}>Home</button>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>/</span>
            <button onClick={() => router.push("/services")} style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, background: "none", border: "none", cursor: "pointer", fontFamily: C.sans }}>Services</button>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>/</span>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>TEC / MTCTE</span>
          </div>

          <div className="hero-grid">
            {/* Left */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(249,115,22,0.2)", border: "1px solid rgba(249,115,22,0.4)", borderRadius: 999, padding: "6px 16px", marginBottom: 20 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: C.primary, display: "inline-block" }} />
                <span style={{ color: C.primary, fontSize: 11, fontWeight: 600, letterSpacing: "0.06em" }}>Telecom Engineering Centre</span>
              </div>
              <h1 style={{ fontFamily: C.serif, fontSize: "clamp(2rem,4vw,3.4rem)", color: "#fff", margin: "0 0 20px", fontWeight: 800, lineHeight: 1.15 }}>
                TEC / MTCTE Certification<br />for Telecom Products
              </h1>
              <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 16, lineHeight: 1.8, maxWidth: 520, marginBottom: 32 }}>
                Mandatory certification for all telecom and networking equipment sold or imported in India. We manage the complete process — lab coordination, filing and tracking.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button onClick={() => router.push("/contact")}
                  style={{ padding: "13px 28px", backgroundColor: C.primary, color: "#fff", fontWeight: 700, borderRadius: 12, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans, boxShadow: "0 4px 16px rgba(249,115,22,0.4)" }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = C.primaryDark}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = C.primary}
                >Get Free Consultation</button>
                <button onClick={() => router.push("/contact")}
                  style={{ padding: "13px 24px", border: "1.5px solid rgba(255,255,255,0.3)", color: "#fff", borderRadius: 12, background: "rgba(255,255,255,0.08)", fontSize: 14, cursor: "pointer", fontFamily: C.sans }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.primary; e.currentTarget.style.color = C.primary; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#fff"; }}
                >Check Applicability →</button>
              </div>
            </div>

            {/* Right — frosted info card */}
            <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: 20, padding: 28, border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(10px)" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.primary, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>Quick Info</div>
              {infoItems.map((item, i) => (
                <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: i < infoItems.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{item.label}</span>
                  <span style={{ fontSize: 13, color: "#fff", fontWeight: 600 }}>{item.value}</span>
                </div>
              ))}
              <button onClick={() => router.push("/contact")}
                style={{ width: "100%", marginTop: 24, padding: 13, backgroundColor: C.primary, color: "#fff", fontWeight: 700, borderRadius: 10, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans, boxShadow: "0 4px 12px rgba(249,115,22,0.35)" }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = C.primaryDark}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = C.primary}
              >Start TEC Application →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── TYPES ── */}
      <section className="sec-pad" style={{ background: C.offWhite }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">Certification Types</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.navy, fontWeight: 800, marginBottom: 14 }}>TEC Certification Types</h2>
            <p style={{ color: C.mutedText, maxWidth: 480, margin: "0 auto", lineHeight: 1.7, fontSize: 15 }}>Different telecom products require different TEC approvals. Here's what applies to your equipment.</p>
          </div>
          <div className="types-grid">
            {types.map((t) => (
              <div key={t.title} className="type-card">
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
            <span className="section-label">How We Do It</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.navy, fontWeight: 800, marginBottom: 14 }}>Certification Process</h2>
          </div>

          {/* Banner */}
          <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", marginBottom: 36, height: 180 }}>
            <img src="https://images.unsplash.com/photo-1581092921461-39d9a338b0cb?w=1400&q=80&fit=crop"
              alt="Telecom testing lab"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,35,64,0.88) 0%, rgba(12,35,64,0.4) 60%, transparent 100%)" }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 44px" }}>
              <div>
                <div style={{ fontFamily: C.serif, fontSize: "clamp(1.2rem,2vw,1.5rem)", color: "#fff", fontWeight: 800, marginBottom: 6 }}>End-to-End TEC / MTCTE Compliance</div>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>Lab coordination, application filing, and follow-up — all managed by our experts.</p>
              </div>
            </div>
          </div>

          <div className="steps-grid">
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
        <img src="https://images.unsplash.com/photo-1568219557405-376e23e4f7cf?w=1600&q=80&fit=crop"
          alt="Documents required"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(12,35,64,0.92)" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.primary, display: "block", marginBottom: 12 }}>What You Need</span>
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
          <p style={{ textAlign: "center", marginTop: 24, fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
            Not sure if you have everything?{" "}
            <button onClick={() => router.push("/contact")}
              style={{ color: C.primary, fontWeight: 600, background: "none", border: "none", cursor: "pointer", fontFamily: C.sans, fontSize: 13 }}>
              Contact us for a free checklist →
            </button>
          </p>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="sec-pad" style={{ background: C.offWhite }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">Common Questions</span>
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

      {/* ── CTA — orange gradient with image ── */}
      <section style={{ position: "relative", padding: "80px 24px", overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80&fit=crop"
          alt="Get TEC certified"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(249,115,22,0.93) 0%, rgba(234,88,12,0.88) 100%)" }} />
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.6rem)", color: "#fff", marginBottom: 16, fontWeight: 800 }}>Get Your Telecom Product Certified</h2>
          <p style={{ color: "rgba(255,255,255,0.88)", marginBottom: 36, lineHeight: 1.7, fontSize: 15 }}>Our TEC experts will guide you through the entire MTCTE process quickly and accurately.</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
            <button onClick={() => router.push("/contact")}
              style={{ padding: "14px 36px", backgroundColor: "#fff", color: C.primary, fontWeight: 800, borderRadius: 12, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans, boxShadow: "0 6px 20px rgba(0,0,0,0.15)" }}>
              Get Free Consultation
            </button>
            <a href="tel:+919876543210"
              style={{ padding: "14px 28px", border: "2px solid rgba(255,255,255,0.6)", color: "#fff", borderRadius: 12, textDecoration: "none", fontSize: 14, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8 }}>
              📞 +91 98765 43210
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}