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
  { icon: "⭐", title: "Mandatory Star Rating", tag: "Mandatory", desc: "Compulsory BEE star labelling for ACs, refrigerators, washing machines, TVs, geysers, and more." },
  { icon: "🌟", title: "Voluntary Star Rating", tag: "Optional", desc: "Optional BEE star label for products not covered under mandatory scheme — builds consumer trust." },
  { icon: "🔌", title: "Energy Efficiency Certification", tag: "All Products", desc: "BEE certification for energy-efficient products for public procurement under government schemes." },
  { icon: "🏭", title: "Bureau of Energy Efficiency", tag: "Compliance", desc: "Complete BEE Act compliance for manufacturers including annual submissions and renewals." },
];

const steps = [
  { step: "01", title: "Product Eligibility", desc: "We check if your product falls under mandatory or voluntary star rating category.", icon: "🔍" },
  { step: "02", title: "Energy Testing", desc: "Product tested at BEE-accredited lab for energy consumption and efficiency parameters.", icon: "🧪" },
  { step: "03", title: "Application Filing", desc: "BEE registration application filed with all test reports on the BEE portal.", icon: "📤" },
  { step: "04", title: "Label Design", desc: "We help design the BEE star label with correct energy consumption values for your product.", icon: "🎨" },
  { step: "05", title: "Registration Issued", desc: "BEE issues the registration number. You can now legally affix the star label.", icon: "🎓" },
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

const infoItems = [
  { label: "Governing Body", value: "Bureau of Energy Efficiency" },
  { label: "Ministry", value: "Power, Govt. of India" },
  { label: "Validity", value: "Annual" },
  { label: "Processing Time", value: "4–8 Weeks" },
  { label: "Applicable To", value: "Home & Commercial Appliances" },
];

export default function BEEScreen() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: C.white, fontFamily: C.sans, color: C.bodyText }}>

      <style>{`
        * { box-sizing: border-box; }

        .hero-grid { display: grid; grid-template-columns: 1fr 360px; gap: 48px; align-items: center; }
        @media (max-width: 960px) { .hero-grid { grid-template-columns: 1fr; } }

        .bee-types-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
        @media (max-width: 600px) { .bee-types-grid { grid-template-columns: 1fr; } }

        .bee-steps-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
        @media (max-width: 600px) { .bee-steps-grid { grid-template-columns: 1fr; } }

        .bee-docs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        @media (max-width: 640px) { .bee-docs-grid { grid-template-columns: 1fr; } }

        .sec-pad { padding: 88px 24px; }
        @media (max-width: 768px) { .sec-pad { padding: 56px 16px !important; } }

        .section-label { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: ${C.primary}; margin-bottom: 12px; display: block; }

        .bee-type-card { background: #fff; border-radius: 16px; padding: 28px; border: 1.5px solid ${C.border}; transition: all 0.25s; cursor: default; }
        .bee-type-card:hover { border-color: ${C.primary}; transform: translateY(-3px); box-shadow: 0 12px 32px rgba(249,115,22,0.10); }

        .faq-card { background: #fff; border-radius: 14px; padding: 22px 24px; border: 1.5px solid ${C.border}; transition: all 0.2s; }
        .faq-card:hover { border-color: ${C.primary}; }

        .bee-cta-btns { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; }
      `}</style>

      <Navbar />

      {/* ── HERO — full bleed image ── */}
      <section style={{ position: "relative", minHeight: "72vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1800&q=85&fit=crop"
          alt="BEE Energy Efficiency"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,35,64,0.90) 55%, rgba(12,35,64,0.55) 100%)" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 40px", width: "100%", position: "relative", zIndex: 2 }}>

          <div className="hero-grid">
            {/* Left */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(249,115,22,0.2)", border: "1px solid rgba(249,115,22,0.4)", borderRadius: 999, padding: "6px 16px", marginBottom: 20 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: C.primary, display: "inline-block" }} />
                <span style={{ color: C.primary, fontSize: 11, fontWeight: 600, letterSpacing: "0.06em" }}>Bureau of Energy Efficiency</span>
              </div>
              <h1 style={{ fontFamily: C.serif, fontSize: "clamp(2rem,4vw,3.4rem)", color: "#fff", margin: "0 0 20px", fontWeight: 800, lineHeight: 1.15 }}>
                BEE Star Rating &<br />Energy Labelling
              </h1>
              <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 16, lineHeight: 1.8, maxWidth: 520, marginBottom: 32 }}>
                Mandatory energy efficiency star labelling for appliances sold in India. We handle BEE registration, lab coordination, and annual compliance end-to-end.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button
                  onClick={() => window.location.href = "/contact"}
                  style={{ padding: "13px 28px", backgroundColor: C.primary, color: "#fff", fontWeight: 700, borderRadius: 12, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans, boxShadow: "0 4px 16px rgba(249,115,22,0.4)" }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = C.primaryDark}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = C.primary}
                >Get Free Consultation</button>
                <button
                  onClick={() => window.location.href = "/contact"}
                  style={{ padding: "13px 24px", border: "1.5px solid rgba(255,255,255,0.3)", color: "#fff", borderRadius: 12, background: "rgba(255,255,255,0.08)", fontSize: 14, cursor: "pointer", fontFamily: C.sans }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.primary; e.currentTarget.style.color = C.primary; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#fff"; }}
                >Check If Mandatory →</button>
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
              >Start BEE Registration →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── REGISTRATION TYPES ── */}
      <section className="sec-pad" style={{ background: C.offWhite }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">Registration Types</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.navy, fontWeight: 800, marginBottom: 14 }}>BEE Registration Types</h2>
            <p style={{ color: C.mutedText, maxWidth: 480, margin: "0 auto", lineHeight: 1.7, fontSize: 15 }}>Different appliances fall under different BEE schemes. Here's what applies to your product.</p>
          </div>
          <div className="bee-types-grid">
            {types.map((t) => (
              <div key={t.title} className="bee-type-card">
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
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.navy, fontWeight: 800, marginBottom: 14 }}>BEE Registration Process</h2>
          </div>

          {/* Banner */}
          <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", marginBottom: 36, height: 180 }}>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29ycG9yYXRlJTIwb2ZmaWNlfGVufDB8fDB8fHww"
              alt="Energy efficiency testing"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,35,64,0.88) 0%, rgba(12,35,64,0.4) 60%, transparent 100%)" }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 44px" }}>
              <div>
                <div style={{ fontFamily: C.serif, fontSize: "clamp(1.2rem,2vw,1.5rem)", color: "#fff", fontWeight: 800, marginBottom: 6 }}>End-to-End BEE Compliance</div>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>Lab coordination, application filing, label design, and annual renewals — all handled by our experts.</p>
              </div>
            </div>
          </div>

          <div className="bee-steps-grid">
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
          <div className="bee-docs-grid">
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
            >Contact us for a free checklist →</button>
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
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
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80&fit=crop"
          alt="Get BEE certified"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(249,115,22,0.93) 0%, rgba(234,88,12,0.88) 100%)" }} />
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.6rem)", color: "#fff", marginBottom: 16, fontWeight: 800 }}>Get BEE Star Rating for Your Product</h2>
          <p style={{ color: "rgba(255,255,255,0.88)", marginBottom: 36, lineHeight: 1.7, fontSize: 15 }}>Our energy compliance team will handle your BEE registration from start to finish.</p>
          <div className="bee-cta-btns">
            <button
              onClick={() => window.location.href = "/contact"}
              style={{ padding: "14px 36px", backgroundColor: "#fff", color: C.primary, fontWeight: 800, borderRadius: 12, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans, boxShadow: "0 6px 20px rgba(0,0,0,0.15)" }}
            >Get Free Consultation</button>
            <a
              href="tel:+919876543210"
              style={{ padding: "14px 28px", border: "2px solid rgba(255,255,255,0.6)", color: "#fff", borderRadius: 12, textDecoration: "none", fontSize: 14, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8 }}
            >📞 +91- 9540190334</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}