"use client";
import { useRouter } from "next/navigation";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const C = {
  primary: "#F97316", primaryDark: "#EA6A0A", primaryLight: "#FFF3E8",
  blue: "#0891B2", blueLight: "#ECFEFF", navy: "#0C2340",
  bodyText: "#374151", mutedText: "#6B7280", border: "#E5E7EB",
  white: "#FFFFFF", offWhite: "#F9FAFB",
  serif: "'Playfair Display', Georgia, serif", sans: "'DM Sans', system-ui, sans-serif",
};

const testingTypes = [
  { icon: "🔬", title: "Product Safety Testing", tag: "Mandatory", desc: "Safety and performance testing for consumer electronics, electrical appliances, and industrial products as per Indian & international standards." },
  { icon: "📡", title: "EMC / RF Testing", tag: "Wireless Devices", desc: "Electromagnetic Compatibility and Radio Frequency testing for wireless, Bluetooth, Wi-Fi, and IoT devices." },
  { icon: "⚗️", title: "Chemical & Material Testing", tag: "FMCG / Pharma", desc: "Lab testing for chemicals, raw materials, food products, and pharmaceutical formulations for compliance and safety." },
  { icon: "🏗️", title: "Mechanical & Structural Testing", tag: "Industrial", desc: "Strength, durability, and structural integrity testing for construction materials, industrial components, and machinery." },
  { icon: "🌿", title: "Environmental Testing", tag: "Sustainability", desc: "RoHS, REACH, and environmental compliance testing for electronics, plastics, and consumer goods." },
  { icon: "🧴", title: "Consumer Product Testing", tag: "Retail", desc: "Comprehensive testing for toys, cosmetics, textiles, footwear, and packaged food products." },
];

const steps = [
  { step: "01", title: "Product Scoping", desc: "We identify the applicable standards, regulatory requirements, and specific test parameters for your product.", icon: "🔍" },
  { step: "02", title: "Lab Selection", desc: "We recommend and coordinate with the right NABL/BIS accredited lab based on your product and certification need.", icon: "🏛️" },
  { step: "03", title: "Sample Submission", desc: "We guide you on sample preparation and coordinate submission of samples to the testing laboratory.", icon: "📦" },
  { step: "04", title: "Testing & Monitoring", desc: "We actively track your test progress, coordinate with lab engineers, and get any clarifications resolved quickly.", icon: "⏱️" },
  { step: "05", title: "Report Review", desc: "We review the test report for completeness and accuracy before it's used for certification applications.", icon: "📋" },
  { step: "06", title: "Certification Filing", desc: "Approved test reports are used to file for the required certification — BIS, WPC, TEC, BEE, or others.", icon: "🎓" },
];

const documents = [
  "Product technical datasheet / specifications",
  "Product samples (as per lab requirements)",
  "User manual / product brochure",
  "Circuit diagram / block diagram (if applicable)",
  "Company registration & KYC documents",
  "Previous test reports (if any)",
  "Applicable Indian Standard (IS) number",
  "Authorized signatory letter",
];

const labs = [
  { name: "NABL Accredited Labs", desc: "National Accreditation Board for Testing & Calibration Laboratories — recognized by all Indian regulators." },
  { name: "BIS-Recognized Labs", desc: "Labs specifically approved by Bureau of Indian Standards for ISI Mark and CRS certification testing." },
  { name: "TEC-Empanelled Labs", desc: "Telecom Engineering Centre approved labs for MTCTE and telecom equipment certification." },
  { name: "WPC-Recognized Labs", desc: "Wireless Planning & Coordination Wing authorized labs for RF / EMC testing." },
];

const faqs = [
  { q: "Which lab should I use for BIS CRS certification?", a: "You must use a BIS-recognized lab for CRS registration. We maintain partnerships with multiple BIS-recognized labs across India and help coordinate the fastest turnaround." },
  { q: "How many product samples are needed for testing?", a: "The number of samples varies by product and standard — typically 3 to 10 units. We advise you on exact requirements based on your specific product and applicable standard." },
  { q: "Can I use a foreign test report for Indian certifications?", a: "In some cases, yes. BIS CRS and certain TEC/WPC approvals accept test reports from internationally accredited labs (ILAC-MRA members). We can assess if your existing report qualifies." },
  { q: "How long does product testing take?", a: "Testing timelines vary by product complexity: 1–2 weeks for simple consumer products, 3–6 weeks for electronics with EMC testing, and up to 8–12 weeks for complex telecom equipment." },
  { q: "What happens if my product fails the test?", a: "We help you identify the root cause of failure, recommend design or compliance fixes, and coordinate re-testing. Our team has experience guiding products through failure remediation." },
];

const infoItems = [
  { label: "Lab Type", value: "NABL / BIS / TEC / WPC" },
  { label: "Standards", value: "IS, IEC, EN, IEEE & more" },
  { label: "Turnaround", value: "1–12 Weeks (product-based)" },
  { label: "Reports Valid For", value: "BIS, WPC, TEC, BEE filings" },
  { label: "Our Success Rate", value: "98%" },
];

export default function TestingScreen() {
  const router = useRouter();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: C.white, fontFamily: C.sans, color: C.bodyText }}>
      <style>{`
        * { box-sizing: border-box; }
        .hero-grid { display:grid; grid-template-columns:1fr 360px; gap:48px; align-items:center; }
        @media(max-width:960px) { .hero-grid { grid-template-columns:1fr; } }
        .types-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:20px; }
        .steps-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:20px; }
        .docs-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
        @media(max-width:600px) { .docs-grid { grid-template-columns:1fr; } }
        .labs-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:16px; }
        .sec-pad { padding:88px 24px; }
        @media(max-width:768px) { .sec-pad { padding:56px 16px !important; } }
        .section-label { font-size:11px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:#F97316; margin-bottom:12px; display:block; }
        .type-card { background:#fff; border-radius:16px; padding:28px; border:1.5px solid #E5E7EB; transition:all .25s; }
        .type-card:hover { border-color:#F97316; transform:translateY(-3px); box-shadow:0 12px 32px rgba(249,115,22,.10); }
        .faq-card { background:#fff; border-radius:14px; padding:22px 24px; border:1.5px solid #E5E7EB; transition:all .2s; }
        .faq-card:hover { border-color:#F97316; }
        .lab-card { background:#fff; border-radius:14px; padding:22px 24px; border:1.5px solid #E5E7EB; transition:all .2s; }
        .lab-card:hover { border-color:${C.blue}; box-shadow:0 6px 20px rgba(8,145,178,0.10); }
      `}</style>

      <Navbar />

      {/* ── HERO — full bleed image ── */}
      <section style={{ position: "relative", minHeight: "72vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1800&q=85&fit=crop"
          alt="Product testing laboratory"
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
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>Testing & Certification</span>
          </div>

          <div className="hero-grid">
            {/* Left */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(249,115,22,0.2)", border: "1px solid rgba(249,115,22,0.4)", borderRadius: 999, padding: "6px 16px", marginBottom: 20 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: C.primary, display: "inline-block" }} />
                <span style={{ color: C.primary, fontSize: 11, fontWeight: 600, letterSpacing: "0.06em" }}>NABL / BIS / TEC / WPC Accredited Labs</span>
              </div>
              <h1 style={{ fontFamily: C.serif, fontSize: "clamp(2rem,4vw,3.4rem)", color: "#fff", margin: "0 0 20px", fontWeight: 800, lineHeight: 1.15 }}>
                Product Testing &<br />Certification Support
              </h1>
              <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 16, lineHeight: 1.8, maxWidth: 520, marginBottom: 32 }}>
                End-to-end lab testing coordination for all Indian regulatory certifications. We identify the right lab, manage sample submission, track progress, and review reports — so your certification isn't delayed by testing.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button onClick={() => router.push("/contact")}
                  style={{ padding: "13px 28px", backgroundColor: C.primary, color: "#fff", fontWeight: 700, borderRadius: 12, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans, boxShadow: "0 4px 16px rgba(249,115,22,0.4)" }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = C.primaryDark}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = C.primary}
                >Get Free Consultation</button>
                <button onClick={() => router.push("/contact")}
                  style={{ padding: "13px 24px", border: "1.5px solid rgba(255,255,255,0.3)", color: "#fff", borderRadius: 12, background: "rgba(255,255,255,0.08)", fontSize: 14, cursor: "pointer", fontFamily: C.sans }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.primary; e.currentTarget.style.color = C.primary; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#fff"; }}
                >Check Testing Requirements →</button>
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
              <button onClick={() => router.push("/contact")}
                style={{ width: "100%", marginTop: 24, padding: 13, backgroundColor: C.primary, color: "#fff", fontWeight: 700, borderRadius: 10, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans, boxShadow: "0 4px 12px rgba(249,115,22,0.35)" }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = C.primaryDark}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = C.primary}
              >Start Testing Coordination →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTING TYPES ── */}
      <section className="sec-pad" style={{ background: C.offWhite }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">Testing Categories</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.navy, fontWeight: 800, marginBottom: 14 }}>What Type of Testing Do You Need?</h2>
            <p style={{ color: C.mutedText, maxWidth: 480, margin: "0 auto", lineHeight: 1.7, fontSize: 15 }}>We coordinate with accredited labs across India for all product categories and regulatory frameworks.</p>
          </div>
          <div className="types-grid">
            {testingTypes.map(t => (
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

      {/* ── ACCREDITED LABS ── */}
      <section className="sec-pad" style={{ background: C.white }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">Our Lab Network</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.navy, fontWeight: 800, marginBottom: 14 }}>Accredited Lab Partners</h2>
            <p style={{ color: C.mutedText, maxWidth: 480, margin: "0 auto", lineHeight: 1.7, fontSize: 15 }}>We work with India's leading accredited labs to ensure your test reports are accepted by all regulatory bodies.</p>
          </div>

          {/* Lab banner image */}
          <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", marginBottom: 36, height: 200 }}>
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=80&fit=crop"
              alt="Testing laboratory"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,35,64,0.88) 0%, rgba(12,35,64,0.4) 60%, transparent 100%)" }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 48px" }}>
              <div>
                <div style={{ fontFamily: C.serif, fontSize: "clamp(1.2rem,2vw,1.6rem)", color: "#fff", fontWeight: 800, marginBottom: 8 }}>50+ Accredited Lab Partners Across India</div>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14 }}>NABL, BIS, TEC, and WPC recognized labs — we coordinate with the right one for your product.</p>
              </div>
            </div>
          </div>

          <div className="labs-grid">
            {labs.map((lab, i) => (
              <div key={lab.name} className="lab-card">
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: C.blueLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>🏛️</div>
                  <h3 style={{ fontFamily: C.serif, fontSize: 15, color: C.navy, fontWeight: 700, margin: 0 }}>{lab.name}</h3>
                </div>
                <p style={{ fontSize: 13, color: C.mutedText, lineHeight: 1.7, margin: 0 }}>{lab.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS — with banner image ── */}
      <section className="sec-pad" style={{ background: C.offWhite }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">How We Do It</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.navy, fontWeight: 800, marginBottom: 14 }}>Testing Coordination Process</h2>
          </div>

          {/* Banner */}
          <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", marginBottom: 36, height: 180 }}>
            <img src="https://plus.unsplash.com/premium_photo-1681487178876-a1156952ec60?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Testing process"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,35,64,0.88) 0%, rgba(12,35,64,0.4) 60%, transparent 100%)" }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 44px" }}>
              <div>
                <div style={{ fontFamily: C.serif, fontSize: "clamp(1.2rem,2vw,1.5rem)", color: "#fff", fontWeight: 800, marginBottom: 6 }}>From Lab Coordination to Certification</div>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>We manage the entire testing journey so you can focus on your business.</p>
              </div>
            </div>
          </div>

          <div className="steps-grid">
            {steps.map(s => (
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
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: "#fff", fontWeight: 800 }}>Documents & Information Required</h2>
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
            Not sure what you need?{" "}
            <button onClick={() => router.push("/contact")}
              style={{ color: C.primary, fontWeight: 600, background: "none", border: "none", cursor: "pointer", fontFamily: C.sans, fontSize: 13 }}>
              Contact us for a free testing checklist →
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
            {faqs.map(faq => (
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

      {/* ── CTA — orange gradient ── */}
      <section style={{ position: "relative", padding: "80px 24px", overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80&fit=crop"
          alt="Get testing started"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(249,115,22,0.93) 0%, rgba(234,88,12,0.88) 100%)" }} />
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.6rem)", color: "#fff", marginBottom: 16, fontWeight: 800 }}>Start Your Product Testing Today</h2>
          <p style={{ color: "rgba(255,255,255,0.88)", marginBottom: 36, lineHeight: 1.7, fontSize: 15 }}>Don't let lab delays slow down your certification. Let our experts coordinate the entire testing process for you.</p>
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