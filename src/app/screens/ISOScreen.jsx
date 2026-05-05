import { useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const T = {
  teal: "#1E88C8", tealDark: "#074D4D", tealMid: "#0E8080", titleblue: "#0a6daa",para:"#080000b0", paradark:"#080000c4",
  tealLight: "#EBF5F5", tealGhost: "#F4FAFA",
  amber: "#C8780A", amberLight: "#FEF3DC", amberDark: "#9A5C06",
  slate: "#0D1B2A", slateMid: "#1C3144",
  body: "#2D3748", muted: "#718096", subtle: "#A0AEC0",
  border: "#E8E3DA", borderLight: "#F0ECE5",
  white: "#FFFFFF", cream: "#FAF8F4", creamMid: "#F3EFE8",
  ctaBand: "#EBF5FB", ctaBandBorder: "#C8DFF0",
  orange: "#F97316", orangeDark: "#EA6A0A",
  serif: "'Cormorant Garamond', 'Georgia', serif",
  sans: "'Outfit', 'system-ui', sans-serif",
};

function useReveal(opts = {}) {
  const { threshold = 0.15, stagger = false, baseDelay = 90, once = true } = opts;
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      if (stagger) {
        Array.from(el.children).forEach((child, i) => {
          child.style.transitionDelay = i * baseDelay + "ms";
          child.classList.add("revealed");
        });
      } else { el.classList.add("revealed"); }
      if (once) obs.unobserve(el);
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, stagger, baseDelay, once]);
  return ref;
}

const isoTypes = [
  { icon: "🏆", title: "ISO 9001:2015",  tag: "Most Popular",    desc: "Quality Management System — the world's most recognized quality standard for all industries." },
  { icon: "🌿", title: "ISO 14001:2015", tag: "Environment",     desc: "Environmental Management System for organizations committed to reducing environmental impact." },
  { icon: "🦺", title: "ISO 45001:2018", tag: "Safety",          desc: "Occupational Health & Safety Management System to prevent workplace injuries and illness." },
  { icon: "🔒", title: "ISO 27001:2022", tag: "IT Security",     desc: "Information Security Management System for organizations handling sensitive data." },
  { icon: "🍽️", title: "ISO 22000:2018", tag: "Food Safety",    desc: "Food Safety Management System for the entire food supply chain." },
  { icon: "💉", title: "ISO 13485:2016", tag: "Medical Devices", desc: "Quality Management System specifically for medical device manufacturers and suppliers." },
];

const steps = [
  { step: "01", title: "Gap Analysis",        desc: "We assess your current processes against ISO requirements and identify areas for improvement.", icon: "📊" },
  { step: "02", title: "Documentation",       desc: "We help create all required policies, procedures, and quality manuals to ISO standards.", icon: "📄" },
  { step: "03", title: "Implementation",      desc: "Your team implements the documented processes. We provide training and support throughout.", icon: "⚙️" },
  { step: "04", title: "Internal Audit",      desc: "We conduct an internal audit to verify readiness before the external certification audit.", icon: "🔍" },
  { step: "05", title: "Certification Audit", desc: "Accredited certification body conducts Stage 1 and Stage 2 audits.", icon: "📋" },
  { step: "06", title: "Certificate Issued",  desc: "ISO certificate issued. Valid for 3 years with annual surveillance audits.", icon: "🏅" },
];

const faqs = [
  { q: "Is ISO certification mandatory in India?",  a: "ISO certification is generally voluntary but is increasingly required for government tenders, international contracts, and export compliance. Some sectors have mandatory requirements." },
  { q: "How long does ISO certification take?",     a: "Typically 2–4 months depending on your organization's size, existing processes, and the standard being pursued. We help expedite the process." },
  { q: "How long is an ISO certificate valid?",     a: "ISO certificates are valid for 3 years with annual surveillance audits in year 1 and year 2, and a recertification audit in year 3." },
  { q: "Can a small business get ISO certified?",   a: "Absolutely. ISO standards are designed to be scalable and apply to organizations of all sizes — from single-person businesses to large corporations." },
];

const infoItems = [
  { label: "Standards Covered", value: "ISO 9001, 14001, 45001 & more" },
  { label: "Recognition",       value: "Global (170+ Countries)" },
  { label: "Validity",          value: "3 Years + Annual Audit" },
  { label: "Processing Time",   value: "2–4 Months" },
  { label: "Applicable To",     value: "All Industries & Sizes" },
];

const statsStrip = [
  { value: "3 yrs", label: "Certificate Validity", icon: "📅" },
  { value: "2–4",   label: "Months Timeline",      icon: "⚡" },
  { value: "Free",  label: "Initial Consultation", icon: "🆓" },
  { value: "98%",   label: "Success Rate",         icon: "✅" },
];

const heroChips = [
  { icon: "🏆", label: "ISO 9001" },
  { icon: "🌿", label: "ISO 14001" },
  { icon: "🦺", label: "ISO 45001" },
  { icon: "🔒", label: "ISO 27001" },
  { icon: "✅", label: "98% Success Rate" },
];

export default function ISOScreen() {
  const heroLeftRef  = useReveal();
  const overviewRef  = useReveal();
  const infoCardRef  = useReveal();
  const statsRef     = useReveal({ stagger: true, baseDelay: 100 });
  const typesTtlRef  = useReveal();
  const typesRef     = useReveal({ stagger: true, baseDelay: 80 });
  const procTtlRef   = useReveal();
  const bannerRef    = useReveal({ threshold: 0.1 });
  const stepsRef     = useReveal({ stagger: true, baseDelay: 80 });
  const faqTtlRef    = useReveal();
  const faqRef       = useReveal({ stagger: true, baseDelay: 80 });
  const ctaRef       = useReveal();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: T.white, fontFamily: T.sans, color: T.body }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        img { max-width:100%; display:block; }
        a { text-decoration:none; color:inherit; }

        .sl-row { display:flex; align-items:center; gap:12px; margin-bottom:16px; }
        .sl-line { width:28px; height:1.5px; background:${T.teal}; flex-shrink:0; }
        .sl-text { font-family:${T.sans}; font-size:11px; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; color:${T.teal}; }

        @keyframes pulse-dot {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.6; transform:scale(1.3); }
        }

        .hero-chip {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(255,255,255,0.09);
          border:1px solid rgba(255,255,255,0.16);
          backdrop-filter:blur(6px);
          border-radius:6px; padding:9px 16px;
          font-family:${T.sans}; font-size:12.5px; font-weight:500;
          color:rgba(255,255,255,0.90);
          transition:background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .hero-chip:hover {
          background:rgba(255,255,255,0.18);
          border-color:rgba(255,255,255,0.35);
          transform:translateY(-2px);
        }

        .overview-grid { display:grid; grid-template-columns:1fr 360px; gap:48px; align-items:flex-start; }
        @media(max-width:960px){ .overview-grid { grid-template-columns:1fr; } }

        .stats-strip { display:grid; grid-template-columns:repeat(4,1fr); }
        @media(max-width:640px){ .stats-strip { grid-template-columns:repeat(2,1fr); } }

        .types-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:16px; }
        @media(max-width:640px){ .types-grid { grid-template-columns:1fr; } }
        .type-card {
          background:${T.white}; border-radius:10px; padding:28px;
          border:1px solid ${T.border}; transition:all 0.25s;
        }
        .type-card:hover { border-color:${T.teal}; transform:translateY(-3px); box-shadow:0 12px 32px rgba(30,136,200,0.09); }

        .steps-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:16px; }
        @media(max-width:600px){ .steps-grid { grid-template-columns:1fr; } }

        .faq-card {
          background:${T.white}; border-radius:10px; padding:22px 24px;
          border:1px solid ${T.border}; transition:border-color 0.2s; margin-bottom:12px;
        }
        .faq-card:hover { border-color:${T.teal}; }

        .cta-split { display:grid; grid-template-columns:1fr auto; gap:40px; align-items:center; }
        @media(max-width:720px){ .cta-split { grid-template-columns:1fr; gap:28px; } }

        .sec { padding:clamp(64px,8vw,104px) clamp(16px,5vw,56px); }
        .inner { max-width:1280px; margin:0 auto; }
      `}</style>

      <Navbar />

      {/* ══════════════════════════════════════
          HERO — full-bleed image
      ══════════════════════════════════════ */}
      <section style={{
        position: "relative", overflow: "hidden",
        borderBottom: `1px solid ${T.border}`,
        minHeight: 420,
        display: "flex", flexDirection: "column", justifyContent: "center",
      }}>
        {/* Left accent bar */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 4,
          background: `linear-gradient(to bottom, ${T.orange}, ${T.teal})`,
          zIndex: 3,
        }} />

        {/* Hero image */}
        <img
          src="/images/iso.png"
          alt="ISO Certification"
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center 40%", zIndex: 0,
          }}
        />

        {/* Dark overlay */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(to right, rgba(7,18,28,0.88) 0%, rgba(7,18,28,0.60) 50%, rgba(7,18,28,0.10) 100%)",
        }} />

        {/* Content */}
        <div style={{
          position: "relative", zIndex: 2,
          maxWidth: 1280, margin: "0 auto", width: "100%",
          padding: "clamp(48px,7vw,88px) clamp(20px,4vw,60px)",
        }}>
          <div ref={heroLeftRef} className="reveal-left">

            {/* Badge pill */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.20)",
              backdropFilter: "blur(8px)",
              borderRadius: 4, padding: "6px 16px", marginBottom: 22,
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: "50%",
                background: "#4ade80",
                boxShadow: "0 0 6px rgba(74,222,128,0.8)",
                display: "inline-block",
                animation: "pulse-dot 2s ease-in-out infinite",
              }} />
              <span style={{
                fontFamily: T.sans, fontSize: 10.5, fontWeight: 700,
                color: "#fff", letterSpacing: "0.14em", textTransform: "uppercase",
              }}>
                International Standards — Certified Consultants
              </span>
            </div>

            {/* Heading */}
            <h1 style={{
              fontFamily: T.serif,
              fontSize: "clamp(2.6rem,5.2vw,4.2rem)",
              fontWeight: 700, lineHeight: 1.04,
              marginBottom: 20, letterSpacing: "-0.01em",
              color: "#fff", maxWidth: 640,
            }}>
              ISO Certification for{" "}
              <span style={{ color: T.orange }}>All Industries</span>
            </h1>

            {/* Chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 32 }}>
              {heroChips.map(chip => (
                <span key={chip.label} className="hero-chip">
                  <span style={{ fontSize: 15 }}>{chip.icon}</span>
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom teal line */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: 3, background: T.teal, opacity: 0.6, zIndex: 2,
        }} />
      </section>

      {/* ══════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════ */}
      <section style={{ background: T.teal }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="stats-strip" ref={statsRef}>
            {statsStrip.map((s, i) => (
              <div key={s.label} className={`reveal d${i}`} style={{ textAlign: "center", padding: "36px 16px", borderRight: i < statsStrip.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                <div style={{ fontSize: 20, marginBottom: 6 }}>{s.icon}</div>
                <div style={{ fontFamily: T.serif, fontSize: "clamp(2rem,2.8vw,2.8rem)", color: "#fff", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.01em" }}>{s.value}</div>
                <div style={{ fontFamily: T.sans, fontSize: 14, color: "rgba(255,255,255,0.80)", marginTop: 8, letterSpacing: "0.04em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          OVERVIEW — old hero content moved here
      ══════════════════════════════════════ */}
      <section className="sec" style={{ background: T.cream }}>
        <div className="inner">
          <div className="overview-grid">

            {/* Left — text + image + CTAs */}
            <div className="reveal-left" ref={overviewRef}>
              <div className="sl-row"><div className="sl-line" /><span className="sl-text">International Standards</span></div>
              <h2 style={{ fontFamily: T.serif, fontSize: "clamp(2rem,3.2vw,2.9rem)", color: T.titleblue, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: 16 }}>
                End-to-End ISO Compliance, Handled for You
              </h2>
              <p style={{ fontFamily: T.sans, fontSize: 15.5, color: T.para, lineHeight: 1.9, marginBottom: 16, textAlign: "justify" }}>
                Globally recognized quality, environment, safety, and information security standards. We manage the complete ISO certification journey — from gap analysis to final certification.
              </p>
              <p style={{ fontFamily: T.sans, fontSize: 15.5, color: T.para, lineHeight: 1.9, marginBottom: 32, textAlign: "justify" }}>
                Our ISO specialists handle documentation, implementation support, internal audits, and liaison with accredited certification bodies — so you can focus on running your business.
              </p>

              {/* Embedded image banner */}
              <div style={{ position: "relative", borderRadius: 10, overflow: "hidden", marginBottom: 32, height: 220 }}>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80&fit=crop"
                  alt="ISO compliance team"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(14,128,128,0.78) 0%, rgba(30,136,200,0.45) 60%, rgba(235,245,251,0.15) 100%)" }} />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 28px" }}>
                  <div>
                    <div style={{ fontFamily: T.serif, fontSize: "clamp(1rem,2vw,1.3rem)", color: "#fff", fontWeight: 700, marginBottom: 4 }}>
                      Trusted by Businesses Across India
                    </div>
                    <p style={{ fontFamily: T.sans, color: "rgba(255,255,255,0.80)", fontSize: 12.5 }}>
                      ISO 9001 · 14001 · 45001 · 27001 · 22000 · 13485
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
                <button
                  onClick={() => window.location.href = "/contact"}
                  style={{ padding: "13px 32px", fontFamily: T.sans, fontSize: 13.5, fontWeight: 600, border: "none", borderRadius: 6, cursor: "pointer", background: T.orange, color: "#fff", boxShadow: "0 4px 16px rgba(10,104,104,0.22)", transition: "all 0.22s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = T.teal; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = T.orange; e.currentTarget.style.transform = "translateY(0)"; }}>
                  Get Free Consultation
                </button>
                <button
                  onClick={() => window.location.href = "/contact"}
                  style={{ padding: "12px 28px", fontFamily: T.sans, fontSize: 13.5, fontWeight: 600, borderRadius: 6, cursor: "pointer", border: `1.5px solid ${T.border}`, color: T.white, background: T.orange, transition: "all 0.22s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = T.teal; e.currentTarget.style.color = T.teal; e.currentTarget.style.background = "transparent"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.white; e.currentTarget.style.background = T.orange; }}>
                  Which ISO Do I Need? →
                </button>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["✓ Free Consultation", "✓ 2–4 Month Timeline", "✓ 98% Success Rate", "✓ All Industries"].map(b => (
                  <span key={b} style={{ padding: "6px 14px", border: `1px solid ${T.border}`, borderRadius: 4, fontSize: 12, color: T.muted, background: T.white, fontFamily: T.sans, fontWeight: 500 }}>{b}</span>
                ))}
              </div>
            </div>

            {/* Right — sticky info card */}
            <div className="reveal-right" ref={infoCardRef}>
              <div style={{ background: T.white, border: `1px solid ${T.border}`, borderRadius: 10, padding: 28, boxShadow: "0 4px 20px rgba(0,0,0,0.05)", position: "sticky", top: 100 }}>
                <div className="sl-row"><div className="sl-line" /><span className="sl-text">Quick Info</span></div>
                {infoItems.map((item, i) => (
                  <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: i < infoItems.length - 1 ? `1px solid ${T.border}` : "none" }}>
                    <span style={{ fontFamily: T.sans, fontSize: 13, color: T.muted }}>{item.label}</span>
                    <span style={{ fontFamily: T.sans, fontSize: 13, color: T.slate, fontWeight: 600, textAlign: "right", maxWidth: "55%" }}>{item.value}</span>
                  </div>
                ))}
                <button
                  onClick={() => window.location.href = "/contact"}
                  style={{ width: "100%", marginTop: 22, padding: 13, background: T.orange, color: "#fff", fontWeight: 600, borderRadius: 6, border: "none", fontFamily: T.sans, fontSize: 14, cursor: "pointer", transition: "background 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.background = T.teal}
                  onMouseLeave={e => e.currentTarget.style.background = T.orange}>
                  Start ISO Certification →
                </button>

                {/* Contact strip */}
                <div style={{ marginTop: 16, paddingTop: 16, borderTop: `1px solid ${T.border}`, display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { icon: "📞", label: "Call Us",   value: "+91-9540190334", href: "tel:+919540190334" },
                    { icon: "✉",  label: "Email Us",  value: "info@siacc.in",  href: "mailto:info@siacc.in" },
                  ].map(item => (
                    <a key={item.label} href={item.href} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                      <div style={{ width: 36, height: 36, borderRadius: 7, backgroundColor: T.tealLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0 }}>{item.icon}</div>
                      <div>
                        <div style={{ fontFamily: T.sans, fontSize: 10, color: T.teal, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>{item.label}</div>
                        <div style={{ fontFamily: T.sans, fontSize: 13, color: T.slate, fontWeight: 500, marginTop: 1 }}>{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ISO TYPES
      ══════════════════════════════════════ */}
      <section className="sec" style={{ background: T.white }}>
        <div className="inner">
          <div style={{ textAlign: "center", marginBottom: 52 }} className="reveal" ref={typesTtlRef}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="sl-row"><div className="sl-line" /><span className="sl-text">ISO Standards</span></div>
            </div>
            <h2 style={{ fontFamily: T.serif, fontSize: "clamp(2rem,3.2vw,2.9rem)", color: T.titleblue, fontWeight: 700, letterSpacing: "-0.01em", marginBottom: 14 }}>ISO Standards We Cover</h2>
            <p style={{ fontFamily: T.sans, color: T.para, maxWidth: 480, margin: "0 auto", lineHeight: 1.75, fontSize: 16 }}>Choose the right ISO standard for your business goals and industry requirements.</p>
          </div>
          <div className="types-grid" ref={typesRef}>
            {isoTypes.map((t, i) => (
              <div key={t.title} className={`type-card reveal d${i % 6}`}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                  <div style={{ width: 52, height: 52, background: T.tealLight, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{t.icon}</div>
                  <span style={{ fontFamily: T.sans, fontSize: 10, fontWeight: 700, background: i % 2 === 0 ? T.tealLight : T.amberLight, color: i % 2 === 0 ? T.tealMid : T.amberDark, padding: "3px 10px", borderRadius: 3, letterSpacing: "0.06em" }}>{t.tag}</span>
                </div>
                <h3 style={{ fontFamily: T.serif, fontSize: 19, color: T.paradark, marginBottom: 10, fontWeight: 600 }}>{t.title}</h3>
                <p style={{ fontFamily: T.sans, fontSize: 15, color: T.para, lineHeight: 1.6, margin: 0, textAlign: "justify" }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROCESS
      ══════════════════════════════════════ */}
      <section className="sec" style={{ background: T.cream }}>
        <div className="inner">
          <div style={{ textAlign: "center", marginBottom: 52 }} className="reveal" ref={procTtlRef}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="sl-row"><div className="sl-line" /><span className="sl-text">Step by Step</span></div>
            </div>
            <h2 style={{ fontFamily: T.serif, fontSize: "clamp(2rem,3.2vw,2.9rem)", color: T.titleblue, fontWeight: 700, letterSpacing: "-0.01em", marginBottom: 14 }}>ISO Certification Process</h2>
          </div>

          <div className="reveal-scale" ref={bannerRef} style={{ position: "relative", borderRadius: 10, overflow: "hidden", marginBottom: 36, height: 170 }}>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=80&fit=crop" alt="ISO process" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(14,128,128,0.88) 0%, rgba(30,136,200,0.60) 55%, rgba(235,245,251,0.25) 100%)" }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 40px" }}>
              <div>
                <div style={{ fontFamily: T.serif, fontSize: "clamp(1.1rem,2vw,1.4rem)", color: "#fff", fontWeight: 700, marginBottom: 6 }}>End-to-End ISO Compliance</div>
                <p style={{ fontFamily: T.sans, color: "rgba(255,255,255,0.78)", fontSize: 13 }}>From gap analysis and documentation to certification audit and beyond.</p>
              </div>
            </div>
          </div>

          <div className="steps-grid" ref={stepsRef}>
            {steps.map((s, i) => (
              <div key={s.step} className={`reveal d${i % 6}`} style={{ background: T.white, borderRadius: 10, padding: 24, border: `1px solid ${T.border}`, display: "flex", gap: 16, alignItems: "flex-start", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = T.teal; e.currentTarget.style.boxShadow = "0 8px 24px rgba(30,136,200,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ width: 48, height: 48, borderRadius: 9, background: T.tealLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 20 }}>{s.icon}</div>
                <div>
                  <div style={{ fontFamily: T.sans, fontSize: 10.5, fontWeight: 700, color: T.teal, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 4 }}>Step {s.step}</div>
                  <h3 style={{ fontFamily: T.serif, fontSize: 19, color: T.paradark, marginBottom: 6, fontWeight: 600 }}>{s.title}</h3>
                  <p style={{ fontFamily: T.sans, fontSize: 15, color: T.para, lineHeight: 1.7, margin: 0, textAlign: "justify" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQs
      ══════════════════════════════════════ */}
      <section className="sec" style={{ background: T.white }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }} className="reveal" ref={faqTtlRef}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="sl-row"><div className="sl-line" /><span className="sl-text">Common Questions</span></div>
            </div>
            <h2 style={{ fontFamily: T.serif, fontSize: "clamp(2rem,3.2vw,2.9rem)", color: T.titleblue, fontWeight: 700, letterSpacing: "-0.01em" }}>ISO Certification FAQs</h2>
          </div>
          <div ref={faqRef}>
            {faqs.map((faq, i) => (
              <div key={faq.q} className={`faq-card reveal d${i}`}>
                <div style={{ display: "flex", gap: 14, marginBottom: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: T.tealLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontWeight: 700, fontSize: 12, color: T.teal }}>Q</div>
                  <div style={{ fontFamily: T.serif, fontSize: 20, color: T.paradark, fontWeight: 600, paddingTop: 4 }}>{faq.q}</div>
                </div>
                <div style={{ display: "flex", gap: 14 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: T.amberLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontWeight: 700, fontSize: 12, color: T.amber }}>A</div>
                  <div style={{ fontFamily: T.sans, fontSize: 15, color: T.para, lineHeight: 1.8, paddingTop: 4 }}>{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA BAND
      ══════════════════════════════════════ */}
      <section className="reveal" ref={ctaRef} style={{ background: T.ctaBand, borderTop: `1px solid ${T.ctaBandBorder}`, borderBottom: `1px solid ${T.ctaBandBorder}`, padding: "80px clamp(16px,5vw,56px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="cta-split">
            <div>
              <div className="sl-row" style={{ marginBottom: 20 }}><div className="sl-line" /><span className="sl-text">Start Today</span></div>
              <h2 style={{ fontFamily: T.serif, fontSize: "clamp(1.9rem,3.2vw,2.9rem)", color: T.titleblue, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: 14 }}>
                Get ISO Certified Today
              </h2>
              <p style={{ fontFamily: T.sans, color: T.para, fontSize: 14.5, lineHeight: 1.8 }}>
                Join thousands of businesses across India that trust us for smooth ISO certification.<br />Free consultation. Clear timeline. Transparent pricing.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
              <button
                onClick={() => window.location.href = "/contact"}
                style={{ padding: "14px 36px", fontFamily: T.sans, fontSize: 14, fontWeight: 600, border: "none", borderRadius: 6, cursor: "pointer", background: T.orange, color: "#fff", whiteSpace: "nowrap", transition: "all 0.22s" }}
                onMouseEnter={e => { e.currentTarget.style.background = T.teal; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = T.orange; e.currentTarget.style.transform = "translateY(0)"; }}>
                Get Free Consultation
              </button>
              <a href="tel:+919540190334" style={{ padding: "13px 28px", border: `1.5px solid ${T.border}`, borderRadius: 6, fontFamily: T.sans, fontSize: 14, fontWeight: 500, color: T.slate, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, whiteSpace: "nowrap", background: T.white, transition: "border-color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = T.teal}
                onMouseLeave={e => e.currentTarget.style.borderColor = T.border}>
                📞 +91-9540190334
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}