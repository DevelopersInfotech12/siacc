"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import WhyDecisionHome from "../Components/WhyDecisionHome";
import OurServicesHome from "../Components/OurServicesHome";
import "../animations.css";

/* ══════════════════════════════════════════════
   THEME TOKENS
══════════════════════════════════════════════ */
const T = {
  teal: "#1E88C8",
  titleblue: "#0a6daa",
  tealDark: "#074D4D",
  tealMid: "#0E8080",
  tealLight: "#EBF5F5",
  tealGhost: "#F4FAFA",
  amber: "#C8780A",
  amberLight: "#FEF3DC",
  amberDark: "#9A5C06",
  slate: "#0D1B2A",
  slateMid: "#1C3144",
  body: "#2D3748",
  muted: "#718096",
  subtle: "#A0AEC0",
  border: "#E8E3DA",
  borderLight: "#F0ECE5",
  white: "#FFFFFF",
  cream: "#FAF8F4",
  creamMid: "#F3EFE8",
  serif: "'Cormorant Garamond', 'Georgia', serif",
  sans: "'Outfit', 'system-ui', sans-serif",
};

/* ══════════════════════════════════════════════
   useReveal HOOK
══════════════════════════════════════════════ */
function useReveal(opts = {}) {
  const { threshold = 0.15, stagger = false, baseDelay = 90, once = true } = opts;
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      if (stagger) {
        Array.from(el.children).forEach((child, i) => {
          child.style.transitionDelay = i * baseDelay + "ms";
          child.classList.add("revealed");
        });
      } else {
        el.classList.add("revealed");
      }
      if (once) obs.unobserve(el);
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, stagger, baseDelay, once]);
  return ref;
}

/* ══════════════════════════════════════════════
   DATA
══════════════════════════════════════════════ */
const ticker = [
  "BIS Conformity Assessment Amendment Regulations 2026 — Major Update",
  "BIS CRS Registration now mandatory for AR/VR/MR Devices",
  "TEC Launches Reimbursement Scheme for Start-ups & MSMEs",
  "BIS Certification for Furniture Products mandatory from Feb 2026",
  "EPR Registration deadline extended — Check your category now",
];

const sliderServices = [
  { id: "crs", tag: "BIS — CRS", icon: "📱", title: "BIS CRS Registration", sub: "Compulsory Registration Scheme", desc: "Mandatory for 70+ electronic products — mobiles, laptops, LED lights, chargers, power banks. We handle lab coordination, filing & follow-up.", stat1: { v: "70+", l: "Products" }, stat2: { v: "4–8 wk", l: "Timeline" }, href: "/bis", img: "/images/BIS.png" },
  { id: "isi", tag: "BIS — ISI", icon: "🔖", title: "BIS ISI Mark Certification", sub: "Mandatory Quality Certification", desc: "Required for 370+ categories including steel, cement, electrical goods, LPG cylinders. Full end-to-end support from lab to license.", stat1: { v: "370+", l: "Categories" }, stat2: { v: "8–12 wk", l: "Timeline" }, href: "/bis", img: "/images/BIS.png" },
  { id: "wpc", tag: "WPC — ETA", icon: "📡", title: "WPC-ETA Approval", sub: "Wireless Planning & Coordination", desc: "Mandatory for all wireless, Bluetooth, Wi-Fi, Zigbee and RF devices imported into India. We file through Saralsanchar portal.", stat1: { v: "5 yrs", l: "Validity" }, stat2: { v: "4–8 wk", l: "Timeline" }, href: "/wpc", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&q=85&fit=crop" },
  { id: "test", tag: "Testing", icon: "🔬", title: "Testing & Certification", sub: "NABL / BIS / TEC Accredited Labs", desc: "End-to-end lab testing for all certifications — product safety, EMC, RF and chemical. 50+ partner labs across India for fastest results.", stat1: { v: "50+", l: "Labs" }, stat2: { v: "1–8 wk", l: "Turnaround" }, href: "/testing", img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1000&q=85&fit=crop" },
  { id: "bee", tag: "BEE", icon: "⚡", title: "BEE Star Rating", sub: "Bureau of Energy Efficiency", desc: "Mandatory star labelling for ACs, refrigerators, washing machines, geysers and fans. Voluntary and mandatory schemes both covered.", stat1: { v: "20+", l: "Products" }, stat2: { v: "4–6 wk", l: "Timeline" }, href: "/bee", img: "/images/BEE.png" },
  { id: "iso", tag: "ISO", icon: "🌐", title: "ISO Certification", sub: "International Standards Organization", desc: "ISO 9001, 14001, 45001, 27001, 22000 and more. Globally recognized, required for government tenders, exports and enterprise contracts.", stat1: { v: "3 yrs", l: "Validity" }, stat2: { v: "2–4 mo", l: "Timeline" }, href: "/iso", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1000&q=85&fit=crop" },
];

const stats = [
  { v: "12+", l: "Years of Excellence" },
  { v: "10,000+", l: "Certifications Issued" },
  { v: "50+", l: "Services & Domains" },
  { v: "98%", l: "First-Attempt Success" },
];

const whyUs = [
  { icon: "🛡️", title: "Trusted & Experienced", desc: "12+ years and 10,000+ successful certifications across every major Indian regulatory framework." },
  { icon: "⚡", title: "Fast Turnaround", desc: "Dedicated managers and streamlined processes ensure the fastest-possible approval timelines." },
  { icon: "🕐", title: "24 / 7 Expert Support", desc: "Our compliance experts are available round-the-clock via call, WhatsApp, or email." },
  { icon: "💰", title: "Transparent Pricing", desc: "Fixed pricing, no hidden charges, clear milestones from day one." },
  { icon: "📋", title: "End-to-End Service", desc: "From documentation and lab testing to final certificate delivery — we manage everything." },
  { icon: "🏆", title: "98% Success Rate", desc: "Meticulous preparation and regulatory expertise means your application succeeds first time." },
];

const steps = [
  { n: "01", title: "Free Consultation", desc: "We assess your product and advise on the exact certification path needed.", icon: "💬" },
  { n: "02", title: "Documentation", desc: "Our experts prepare every document and lab test required for your file.", icon: "📄" },
  { n: "03", title: "Filing", desc: "We submit the complete, error-free application with the regulatory body.", icon: "📤" },
  { n: "04", title: "Certificate", desc: "We track and follow up until your certificate is issued and delivered.", icon: "🎓" },
];

const testimonials = [
  { name: "Rajesh Mehta", co: "TechImport Pvt. Ltd.", text: "SIACC handled our BIS CRS certification end-to-end. Professional, fast and transparent from day one. Highly recommended.", r: 5 },
  { name: "Priya Sharma", co: "EcoGoods India", text: "EPR registration done within the promised timeline despite the urgency. Their 24/7 availability is genuinely a game-changer.", r: 5 },
  { name: "Arjun Kapoor", co: "Wireless Solutions Ltd.", text: "WPC-ETA was always a black box for us. SIACC made it completely simple. Now we come to them for every new product launch.", r: 5 },
  { name: "Sneha Verma", co: "MediCare Devices Pvt. Ltd.", text: "CDSCO licensing used to terrify us. SIACC's expertise made it completely stress-free. Outstanding team and service.", r: 5 },
];

const industries = [
  "Electronics & IT", "Telecom & IoT", "Pharmaceuticals", "FMCG & Packaged Goods",
  "Automotive", "Medical Devices", "Textiles", "Food & Beverages",
  "Chemicals", "Construction", "Toys & Furniture", "Energy & Power",
];

/* ══════════════════════════════════════════════
   SHARED MICRO-COMPONENTS
══════════════════════════════════════════════ */
function SectionLabel({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      <div style={{ width: 28, height: 1.5, background: T.teal }} />
      <span style={{ fontFamily: T.sans, fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: T.teal }}>{children}</span>
    </div>
  );
}

function PrimaryBtn({ children, onClick, style = {} }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "13px 32px", fontFamily: T.sans, fontSize: 13.5, fontWeight: 600,
        letterSpacing: "0.02em", border: "none", borderRadius: 6, cursor: "pointer",
        background: hov ? T.teal : "#F97316", color: "#fff",
        boxShadow: hov ? `0 8px 28px rgba(10,104,104,0.38)` : `0 4px 16px rgba(10,104,104,0.22)`,
        transform: hov ? "translateY(-1px)" : "translateY(0)",
        transition: "all 0.22s cubic-bezier(0.4,0,0.2,1)",
        ...style,
      }}>
      {children}
    </button>
  );
}

function OutlineBtnTransparent({ children, onClick, style = {} }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "12px 28px", fontFamily: T.sans, fontSize: 13.5, fontWeight: 600,
        letterSpacing: "0.02em", borderRadius: 6, cursor: "pointer",
        border: `1.5px solid ${hov ? T.teal : T.border}`,
        color: "#383737",
        background: hov ? "#F97316" : "transparent",
        transition: "all 0.22s cubic-bezier(0.4,0,0.2,1)",
        display: "inline-flex", alignItems: "center",
        ...style,
      }}>
      {children}
    </button>
  );
}

function OutlineBtn({ children, onClick, style = {}, href }) {
  const [hov, setHov] = useState(false);
  const base = {
    padding: "12px 28px", fontFamily: T.sans, fontSize: 13.5, fontWeight: 600,
    letterSpacing: "0.02em", borderRadius: 6, cursor: "pointer",
    border: `1.5px solid ${hov ? T.teal : T.border}`,
    color: hov ? T.teal : "#ffffff",
    background: hov ? "transparent" : "#F97316",
    transition: "all 0.22s cubic-bezier(0.4,0,0.2,1)",
    textDecoration: "none", display: "inline-flex", alignItems: "center",
    ...style,
  };
  if (href) return <a href={href} style={base} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>{children}</a>;
  return <button onClick={onClick} style={base} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>{children}</button>;
}

/* ══════════════════════════════════════════════
   HERO SLIDER
══════════════════════════════════════════════ */
function HeroSlider() {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [entering, setEntering] = useState(false);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const goTo = (idx) => {
    if (idx === active) return;
    setActive(idx);
    setEntering(true);
    setTimeout(() => setEntering(false), 500);
  };

  useEffect(() => {
    if (paused) { clearInterval(timerRef.current); return; }
    timerRef.current = setInterval(() => goTo((active + 1) % sliderServices.length), 5500);
    return () => clearInterval(timerRef.current);
  }, [active, paused]);

  const s = sliderServices[active];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ background: T.cream, borderBottom: `1px solid ${T.border}` }}
    >
      {/* Service Tab Row */}
      <div style={{ background: T.white, borderBottom: `1px solid ${T.border}`, overflowX: "auto" }}>
        <div style={{ display: "flex", maxWidth: 1380, margin: "0 auto", padding: "0 clamp(16px,4vw,56px)" }}>
          {sliderServices.map((sl, i) => (
            <button key={sl.id} onClick={() => goTo(i)}
              style={{
                padding: "14px 22px", fontFamily: T.sans, fontSize: 12.5, fontWeight: i === active ? 600 : 500,
                border: "none", borderBottom: i === active ? `2px solid ${T.teal}` : "2px solid transparent",
                background: "transparent", color: i === active ? T.teal : T.muted,
                cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.2s", letterSpacing: "0.01em",
              }}>
              {sl.icon} {sl.tag}
            </button>
          ))}
        </div>
      </div>

      {/* Main Slide */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", maxWidth: "100%", overflow: "hidden" }} className="hero-slide-grid">
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(40px,6vw,88px) clamp(24px,5vw,72px)" }}>

          {/* ✅ ANIMATED: text block uses anim-hero-text on slide change */}
          <div key={s.id} className={entering ? "anim-hero-text" : ""}>

            {/* ✅ ANIMATED: tag pill slides in */}
            <div
              className="anim-pill-in"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: T.tealLight, borderRadius: 4, padding: "5px 14px", marginBottom: 24 }}
            >
              <span style={{ fontSize: 13 }}>{s.icon}</span>
              <span style={{ fontFamily: T.sans, fontSize: 10.5, fontWeight: 700, color: T.teal, letterSpacing: "0.12em", textTransform: "uppercase" }}>{s.tag}</span>
            </div>

            <h1 style={{ fontFamily: T.serif, fontSize: "clamp(2rem,3.8vw,3.4rem)", color: T.titleblue, fontWeight: 700, lineHeight: 1.08, marginBottom: 10, letterSpacing: "-0.01em" }}>
              {s.title}
            </h1>
            <p style={{ fontFamily: T.sans, fontSize: 12, fontWeight: 600, color: T.tealMid, marginBottom: 20, letterSpacing: "0.05em", textTransform: "uppercase" }}>{s.sub}</p>
            <p style={{ fontFamily: T.sans, fontSize: 15.5, color: T.muted, lineHeight: 1.9, marginBottom: 32, maxWidth: 460, textAlign: "justify" }}>{s.desc}</p>

            <div style={{ display: "flex", gap: 12, marginBottom: 36, flexWrap: "wrap" }}>
              {[s.stat1, s.stat2].map((st, i) => (
                <div key={i} style={{
                  padding: "14px 24px", background: T.white,
                  border: `1px solid ${T.border}`, borderRadius: 6,
                  borderTop: `3px solid ${i === 0 ? T.teal : T.amber}`,
                }}>
                  <div style={{ fontFamily: T.serif, fontSize: 26, color: i === 0 ? T.teal : T.amber, fontWeight: 700, lineHeight: 1 }}>{st.v}</div>
                  <div style={{ fontFamily: T.sans, fontSize: 13, color: T.subtle, marginTop: 4, letterSpacing: "0.04em" }}>{st.l}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <PrimaryBtn onClick={() => router.push("/contact")}>Get Free Consultation</PrimaryBtn>
              <OutlineBtn onClick={() => router.push(s.href)}>Learn More →</OutlineBtn>
            </div>
          </div>
        </div>

        {/* ✅ ANIMATED: image reveal on slide change */}
        <div style={{ position: "relative", overflow: "hidden", minHeight: 520 }} className="hero-img-col">
          <img
            key={s.id}
            src={s.img}
            alt={s.title}
            className={entering ? "anim-img-reveal" : ""}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, rgba(250,248,244,0.45) 0%, transparent 32%)" }} />

          {/* ✅ ANIMATED: floating card */}
          <div
            className="float-card"
            style={{
              position: "absolute", bottom: 32, left: 32,
              background: "rgba(255,255,255,0.96)", borderRadius: 8, padding: "16px 22px",
              boxShadow: "0 12px 40px rgba(0,0,0,0.10)", border: `1px solid ${T.border}`,
              backdropFilter: "blur(12px)", minWidth: 170,
            }}
          >
            <div style={{ fontFamily: T.sans, fontSize: 10, fontWeight: 700, color: T.subtle, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 5 }}>Current Service</div>
            <div style={{ fontFamily: T.serif, fontSize: 16, color: T.slate, fontWeight: 600 }}>{s.title}</div>
            <div style={{ fontFamily: T.sans, fontSize: 11, color: T.teal, marginTop: 3 }}>{s.sub}</div>
          </div>

          <div style={{
            position: "absolute", top: 28, right: 28, background: "rgba(255,255,255,0.94)",
            borderRadius: 6, padding: "8px 16px", backdropFilter: "blur(8px)",
            fontFamily: T.sans, fontSize: 12, fontWeight: 700, color: T.slate,
            letterSpacing: "0.08em", border: `1px solid ${T.border}`,
          }}>
            {String(active + 1).padStart(2, "0")} <span style={{ color: T.subtle }}>/</span> {String(sliderServices.length).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div style={{ background: T.white, borderTop: `1px solid ${T.border}`, display: "flex", alignItems: "center", gap: 16, padding: "12px clamp(16px,4vw,56px)" }}>
        <div style={{ display: "flex", gap: 5, flex: 1 }}>
          {sliderServices.map((_, i) => (
            <button key={i} onClick={() => goTo(i)}
              style={{
                height: 3, borderRadius: 999, border: "none", cursor: "pointer", transition: "all 0.35s ease",
                background: i === active ? T.teal : T.border, width: i === active ? 36 : 14,
              }} />
          ))}
        </div>
        <span style={{ fontFamily: T.sans, fontSize: 11.5, color: T.subtle, whiteSpace: "nowrap" }}>{s.tag} — {s.sub}</span>
        <div style={{ display: "flex", gap: 6 }}>
          {[["←", active > 0 ? active - 1 : sliderServices.length - 1], ["→", (active + 1) % sliderServices.length]].map(([lbl, idx]) => (
            <NavArrow key={lbl} onClick={() => goTo(idx)}>{lbl}</NavArrow>
          ))}
        </div>
      </div>

      {/* ✅ ANIMATED: progress bar */}
      <div style={{ height: 2, background: T.borderLight }}>
        {!paused && (
          <div key={active} className="anim-progress" style={{ height: "100%", background: T.teal }} />
        )}
      </div>

      <style>{`
        @media(max-width:860px){ .hero-slide-grid{grid-template-columns:1fr!important;} .hero-img-col{display:none!important;} }
      `}</style>
    </div>
  );
}

function NavArrow({ children, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        width: 34, height: 34, borderRadius: 6, border: `1px solid ${hov ? T.teal : T.border}`,
        background: hov ? T.tealLight : T.white, cursor: "pointer", fontSize: 14, color: hov ? T.teal : T.slate,
        fontFamily: T.sans, transition: "all 0.18s",
      }}>
      {children}
    </button>
  );
}

/* ══════════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════════ */
export default function HomeScreen() {
  const router = useRouter();

  /* ── Reveal refs for each section ── */
  const statsRef     = useReveal({ stagger: true, baseDelay: 100 });
  const aboutImgRef  = useReveal();
  const aboutTxtRef  = useReveal();
  const miniStatsRef = useReveal({ stagger: true, baseDelay: 80 });
  const whyIntroRef  = useReveal();
  const whyGridRef   = useReveal({ stagger: true, baseDelay: 80 });
  const stepsRef     = useReveal({ stagger: true, baseDelay: 100 });
  const industriesRef= useReveal({ stagger: true, baseDelay: 50 });
  const testiRef     = useReveal({ stagger: true, baseDelay: 90 });
  const ctaRef       = useReveal();

  return (
    <div style={{ minHeight: "100vh", background: T.white, fontFamily: T.sans, color: T.body }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        img { max-width:100%; display:block; }
        a { text-decoration:none; color:inherit; }
        .sec   { padding: clamp(64px,8vw,104px) clamp(16px,5vw,56px); }
        .inner { max-width:1280px; margin:0 auto; }
        .stats-band  { display:grid; grid-template-columns:repeat(4,1fr); }
        .about-grid  { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; }
        .mini-stats  { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:32px; }
        .svc-grid    { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        .why-grid    { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        .steps-grid  { display:grid; grid-template-columns:repeat(4,1fr); }
        .testi-grid  { display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:20px; }
        .cta-split   { display:grid; grid-template-columns:1fr auto; gap:40px; align-items:center; }
        .why-intro   { display:grid; grid-template-columns:1fr 1fr; gap:72px; align-items:center; margin-bottom:56px; }
        .about-img-wrap { position:relative; }

        /* Hover effects */
        .svc-card { display:block; background:${T.white}; border-radius:10px; padding:28px; border:1px solid ${T.border}; transition:all 0.28s cubic-bezier(0.4,0,0.2,1); cursor:pointer; text-decoration:none; position:relative; overflow:hidden; }
        .svc-card::before { content:''; position:absolute; inset:0; background:${T.tealGhost}; opacity:0; transition:opacity 0.25s; }
        .svc-card::after  { content:''; position:absolute; bottom:0; left:0; height:3px; width:0; background:${T.teal}; transition:width 0.35s cubic-bezier(0.4,0,0.2,1); }
        .svc-card:hover { border-color:${T.teal}; transform:translateY(-5px); box-shadow:0 16px 40px rgba(30,136,200,0.12); }
        .svc-card:hover::before { opacity:1; }
        .svc-card:hover::after  { width:100%; }
        .svc-card > * { position:relative; }
        .svc-icon { width:48px; height:48px; border-radius:10px; background:${T.tealLight}; display:flex; align-items:center; justify-content:center; font-size:22px; margin-bottom:16px; transition:transform 0.3s cubic-bezier(0.34,1.56,0.64,1); }
        .svc-card:hover .svc-icon { transform:scale(1.18) rotate(-4deg); }

        .why-card { background:${T.white}; border-radius:10px; padding:28px; border:1px solid ${T.border}; transition:all 0.25s; position:relative; overflow:hidden; }
        .why-card::before { content:''; position:absolute; top:0; left:0; right:0; height:0; background:linear-gradient(135deg,${T.tealLight},transparent); transition:height 0.35s ease; }
        .why-card:hover { border-color:${T.teal}; box-shadow:0 12px 32px rgba(30,136,200,0.10); transform:translateY(-3px); }
        .why-card:hover::before { height:100%; }
        .why-card > * { position:relative; }
        .why-icon { width:46px; height:46px; border-radius:9px; background:${T.tealLight}; display:flex; align-items:center; justify-content:center; font-size:20px; margin-bottom:16px; transition:all 0.3s cubic-bezier(0.34,1.56,0.64,1); }
        .why-card:hover .why-icon { transform:scale(1.2) rotate(6deg); background:${T.teal}; }

        .step-cell { padding:40px 28px; text-align:center; position:relative; transition:background 0.25s; }
        .step-cell:hover { background:${T.tealLight}; }
        .step-icon { width:56px; height:56px; margin:0 auto 16px; border-radius:12px; background:${T.tealLight}; display:flex; align-items:center; justify-content:center; font-size:24px; transition:all 0.35s cubic-bezier(0.34,1.56,0.64,1); }
        .step-cell:hover .step-icon { transform:scale(1.15) translateY(-4px); background:${T.teal}; }

        .testi-card { background:${T.white}; border-radius:10px; padding:28px; border:1px solid ${T.border}; transition:all 0.25s; position:relative; overflow:hidden; }
        .testi-card::after { content:'"'; position:absolute; top:-10px; right:20px; font-family:${T.serif}; font-size:120px; color:${T.tealLight}; line-height:1; pointer-events:none; transition:color 0.25s; }
        .testi-card:hover { border-color:${T.teal}; box-shadow:0 12px 36px rgba(30,136,200,0.10); transform:translateY(-3px); }
        .testi-card:hover::after { color:rgba(30,136,200,0.12); }

        .ind-pill { padding:9px 20px; border:1px solid ${T.border}; border-radius:4px; font-family:${T.sans}; font-size:13px; color:${T.body}; background:${T.white}; transition:all 0.22s; font-weight:500; cursor:default; }
        .ind-pill:hover { border-color:${T.teal}; color:${T.teal}; background:${T.tealLight}; transform:translateY(-2px); box-shadow:0 4px 12px rgba(30,136,200,0.10); }

        @media(max-width:640px){ .stats-band{grid-template-columns:repeat(2,1fr)} }
        @media(max-width:860px){ .about-grid{grid-template-columns:1fr;gap:48px} .why-intro{grid-template-columns:1fr;gap:36px} }
        @media(max-width:900px){ .svc-grid{grid-template-columns:repeat(2,1fr)} .why-grid{grid-template-columns:repeat(2,1fr)} }
        @media(max-width:560px){ .svc-grid{grid-template-columns:1fr} .testi-grid{grid-template-columns:1fr} }
        @media(max-width:540px){ .why-grid{grid-template-columns:1fr} }
        @media(max-width:860px){ .steps-grid{grid-template-columns:repeat(2,1fr)} }
        @media(max-width:480px){ .steps-grid{grid-template-columns:1fr} .mini-stats{grid-template-columns:1fr} }
        @media(max-width:420px){ .mini-stats{grid-template-columns:1fr} }
        @media(max-width:720px){ .cta-split{grid-template-columns:1fr;gap:28px} }
      `}</style>

      <Navbar />

      {/* ══ NEWS TICKER ══ */}
      <div className="ticker-outer" style={{ background: T.teal, overflow: "hidden", padding: "9px 0", display: "flex", alignItems: "center" }}>
        <div className="anim-badge" style={{ flexShrink: 0, background: "#F97316", color: "#fff", fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", padding: "4px 14px", margin: "0 14px 0 16px", borderRadius: 3, whiteSpace: "nowrap", fontFamily: T.sans }}>
          LIVE UPDATES
        </div>
        <div style={{ overflow: "hidden", flex: 1 }}>
          {/* ✅ ANIMATED: ticker scrolls via CSS class */}
          <div className="anim-ticker" style={{ display: "inline-flex", whiteSpace: "nowrap" }}>
            {[...ticker, ...ticker].map((item, i) => (
              <span key={i} style={{ fontFamily: T.sans, fontSize: 13.5, fontWeight: 500, color: "#fff", padding: "0 48px", display: "inline-flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 9 }}>◆</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ══ HERO SLIDER ══ */}
      <HeroSlider />

      {/* ══ STATS BAND ══ */}
      <div style={{ background: T.teal }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* ✅ ANIMATED: each stat fades up with stagger */}
          <div className="stats-band" ref={statsRef}>
            {stats.map((s, i) => (
              <div key={s.l} className={`stat-cell reveal d${i}`} style={{
                textAlign: "center", padding: "36px 16px",
                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}>
                {/* ✅ ANIMATED: number counts up */}
                <div className="anim-count-up" style={{ fontFamily: T.serif, fontSize: "clamp(2rem,2.8vw,2.8rem)", color: "#fff", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.01em" }}>{s.v}</div>
                <div style={{ fontFamily: T.sans, fontSize: 14, color: "rgba(255,255,255,0.8)", marginTop: 8, letterSpacing: "0.04em" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ ABOUT ══ */}
      <section className="sec" style={{ background: T.cream }}>
        <div className="inner">
          <div className="about-grid">

            {/* ✅ ANIMATED: image slides in from left */}
            <div className="about-img-wrap reveal-left" ref={aboutImgRef}>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=720&q=85&fit=crop"
                alt="SIACC consultants at work"
                style={{ width: "100%", height: "clamp(300px,42vw,480px)", objectFit: "cover", borderRadius: 10, boxShadow: "0 24px 64px rgba(0,0,0,0.10)" }}
              />
              {/* ✅ ANIMATED: floating badge */}
              <div className="float-card" style={{
                position: "absolute", bottom: -16, right: -12,
                background: T.white, borderRadius: 8, padding: "20px 26px",
                boxShadow: "0 16px 48px rgba(0,0,0,0.11)", border: `1px solid ${T.tealLight}`,
              }}>
                <div style={{ fontFamily: T.serif, fontSize: 36, color: T.teal, fontWeight: 700, lineHeight: 1 }}>10K+</div>
                <div style={{ fontFamily: T.sans, fontSize: 13, color: "#000000d7", marginTop: 4 }}>Clients Served</div>
              </div>
              <div style={{ position: "absolute", top: 20, left: 20, background: T.teal, borderRadius: 4, padding: "7px 16px" }}>
                <span style={{ fontFamily: T.sans, fontWeight: 700, fontSize: 13, color: "#000000d7", letterSpacing: "0.1em" }}>SINCE 2011</span>
              </div>
            </div>

            {/* ✅ ANIMATED: text slides in from right */}
            <div className="reveal-right" ref={aboutTxtRef}>
              <SectionLabel>About SIACC</SectionLabel>
              <h2 style={{ fontFamily: T.serif, fontSize: "clamp(2rem,3.2vw,2.9rem)", color: T.titleblue, fontWeight: 700, marginBottom: 20, lineHeight: 1.12, letterSpacing: "-0.01em" }}>
                India's Leading<br />Compliance Consultants
              </h2>
              <p style={{ fontFamily: T.sans, fontSize: 15, color: "#0000009c", lineHeight: 1.9, marginBottom: 14 }}>
                Star India Accreditation (SIACC) is a trusted name with over 12+ years of experience in BIS, EPR, WPC, TEC, BEE and ISO certifications. We deliver fast, reliable, and cost-effective regulatory approvals for Indian and foreign manufacturers and importers.
              </p>
              <p style={{ fontFamily: T.sans, fontSize: 15, color: "#000000ab", lineHeight: 1.9, marginBottom: 32 }}>
                With a deep understanding of Indian regulatory standards, we help businesses achieve full compliance — reducing delays, avoiding penalties, and speeding up market entry.
              </p>

              {/* ✅ ANIMATED: mini stat cards stagger in */}
              <div className="mini-stats" ref={miniStatsRef}>
                {[{ n: "12+", l: "Years Experience" }, { n: "100+", l: "Expert Team" }, { n: "25+", l: "Countries Served" }, { n: "50+", l: "Services Covered" }].map((s, i) => (
                  <div key={s.l} className={`reveal d${i}`} style={{ padding: "16px 20px", background: T.white, borderRadius: 8, border: `1px solid ${T.border}`, borderLeft: `3px solid ${T.teal}` }}>
                    <div style={{ fontFamily: T.serif, fontSize: 26, color: T.teal, fontWeight: 700, lineHeight: 1 }}>{s.n}</div>
                    <div style={{ fontFamily: T.sans, fontSize: 13, color: "#000000d7", marginTop: 4 }}>{s.l}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <PrimaryBtn onClick={() => router.push("/about")}>Our Story →</PrimaryBtn>
                <OutlineBtnTransparent onClick={() => router.push("/contact")}>Free Consultation</OutlineBtnTransparent>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES (external component) ══ */}
      <OurServicesHome />

      {/* ══ WHY DECISION (external component) ══ */}
      <WhyDecisionHome />

      {/* ══ WHY CHOOSE US ══ */}
      <section className="sec" style={{ background: T.cream }}>
        <div className="inner">

          {/* ✅ ANIMATED: intro grid fades up */}
          <div className="why-intro reveal" ref={whyIntroRef}>
            <div>
              <SectionLabel>Why Choose Us</SectionLabel>
              <h2 style={{ fontFamily: T.serif, fontSize: "clamp(2rem,3.2vw,2.9rem)", color: T.titleblue, fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.01em", marginBottom: 18 }}>
                The SIACC Difference
              </h2>
              <p style={{ fontFamily: T.sans, fontSize: 16, color: "#000000a4", lineHeight: 1.7, maxWidth: 430, textAlign: "justify" }}>
                We simplify even the most complex certification processes with reliable service, expert consultation, and dedicated client support — ensuring smooth approvals and complete peace of mind.
              </p>
            </div>
            <div style={{ position: "relative", borderRadius: 10, overflow: "hidden", height: 240 }}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=85&fit=crop"
                alt="SIACC team"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 38%" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,104,104,0.82), rgba(13,27,42,0.70))" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {[{ v: "100+", l: "Experts" }, { v: "50+", l: "Domains" }, { v: "12+", l: "Years" }].map((s, i) => (
                  <div key={s.l} style={{ textAlign: "center", padding: "0 28px", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.15)" : "none" }}>
                    <div style={{ fontFamily: T.serif, fontSize: 32, color: T.amber, fontWeight: 700, lineHeight: 1 }}>{s.v}</div>
                    <div style={{ fontFamily: T.sans, fontSize: 12, color: "rgba(255,255,255,0.72)", marginTop: 6 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ✅ ANIMATED: why cards stagger in */}
          <div className="why-grid" ref={whyGridRef}>
            {whyUs.map((w, i) => (
              <div key={w.title} className={`why-card reveal d${i}`}>
                <div className="why-icon">{w.icon}</div>
                <h3 style={{ fontFamily: T.serif, fontSize: 19, color: T.slate, marginBottom: 8, fontWeight: 600 }}>{w.title}</h3>
                <p style={{ fontFamily: T.sans, fontSize: 14, color: "#000000a1", lineHeight: 1.75 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section className="sec" style={{ background: T.white }}>
        <div className="inner">
          <div style={{ textAlign: "center", marginBottom: 56 }} className="reveal" ref={useReveal()}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 1 }}>
              <SectionLabel>Our Process</SectionLabel>
            </div>
            <h2 style={{ fontFamily: T.serif, fontSize: "clamp(2rem,3.2vw,2.9rem)", color: T.titleblue, fontWeight: 700, letterSpacing: "-0.01em", marginBottom: 12 }}>How It Works</h2>
            <p style={{ fontFamily: T.sans, color: T.muted, maxWidth: 580, margin: "0 auto", lineHeight: 1.75, fontSize: 14.5 }}>
              A simple, transparent 4-step process — from first enquiry to certificate in hand.
            </p>
          </div>

          <div style={{ background: T.cream, borderRadius: 12, border: `1px solid ${T.border}`, overflow: "hidden" }}>
            {/* ✅ ANIMATED: steps stagger in */}
            <div className="steps-grid" ref={stepsRef}>
              {steps.map((s, i) => (
                <div key={s.n} className={`step-cell reveal d${i}`} style={{
                  borderRight: i < steps.length - 1 ? `1px solid ${T.border}` : "none",
                  background: i % 2 === 1 ? T.white : "transparent",
                }}>
                  {i < steps.length - 1 && (
                    <div style={{ position: "absolute", top: 68, right: -1, width: 2, height: 24, background: T.teal, opacity: 0.3 }} />
                  )}
                  {/* ✅ ANIMATED: icon bounces on hover */}
                  <div className="step-icon icon-bounce">{s.icon}</div>
                  <div style={{ fontFamily: T.sans, fontSize: 10.5, fontWeight: 700, color: T.teal, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 10 }}>Step {s.n}</div>
                  <h3 style={{ fontFamily: T.serif, fontSize: 19, color: T.slate, marginBottom: 10, fontWeight: 700 }}>{s.title}</h3>
                  <p style={{ fontFamily: T.sans, fontSize: 15, color: T.muted, lineHeight: 1.75 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ INDUSTRIES ══ */}
      <section className="sec" style={{ background: T.tealLight, borderTop: `1px solid #C8DEDE`, borderBottom: `1px solid #C8DEDE` }}>
        <div className="inner">
          <div style={{ textAlign: "center", marginBottom: 22 }} className="reveal" ref={useReveal()}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <SectionLabel>Industries We Serve</SectionLabel>
            </div>
            <h2 style={{ fontFamily: T.serif, fontSize: "clamp(1.8rem,3vw,2.7rem)", color: T.titleblue, fontWeight: 700, letterSpacing: "-0.01em" }}>
              Trusted Across Every Sector
            </h2>
          </div>

          {/* ✅ ANIMATED: pills stagger in */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }} ref={industriesRef}>
            {industries.map((ind, i) => (
              <span key={ind} className={`ind-pill reveal d${Math.min(i, 8)}`}>{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="sec" style={{ background: T.white }}>
        <div className="inner">
          <div style={{ textAlign: "center", marginBottom: 52 }} className="reveal" ref={useReveal()}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 1 }}>
              <SectionLabel>Client Stories</SectionLabel>
            </div>
            <h2 style={{ fontFamily: T.serif, fontSize: "clamp(2rem,3.2vw,2.9rem)", color: T.titleblue, fontWeight: 700, letterSpacing: "-0.01em" }}>
              Why People Trust SIACC
            </h2>
          </div>

          {/* ✅ ANIMATED: testimonial cards stagger in */}
          <div className="testi-grid" ref={testiRef}>
            {testimonials.map((t, i) => (
              <div key={t.name} className={`testi-card reveal d${i}`}>
                <div style={{ display: "flex", gap: 2, marginBottom: 18 }}>
                  {[...Array(t.r)].map((_, i) => (
                    <span key={i} style={{ color: T.amber, fontSize: 14 }}>★</span>
                  ))}
                </div>
                <p style={{ fontFamily: T.sans, color: T.body, fontSize: 14, lineHeight: 1.85, marginBottom: 24 }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 18, borderTop: `1px solid ${T.border}` }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: "50%", background: "#F97316",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: T.serif, color: "#fff", fontWeight: 700, fontSize: 17, flexShrink: 0,
                  }}>{t.name[0]}</div>
                  <div>
                    <div style={{ fontFamily: T.sans, fontWeight: 600, color: T.slate, fontSize: 13.5 }}>{t.name}</div>
                    <div style={{ fontFamily: T.sans, color: T.muted, fontSize: 12, marginTop: 2 }}>{t.co}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BAND ══ */}
      {/* ✅ ANIMATED: whole CTA fades up */}
      <section
        className="reveal"
        ref={ctaRef}
        style={{ background: "#EBF5FB", borderTop: "1px solid #C8DFF0", borderBottom: "1px solid #C8DFF0", padding: "80px clamp(16px,5vw,56px)" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="cta-split">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 28, height: 1.5, background: T.teal }} />
                <span style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.teal }}>Start Today</span>
              </div>
              <h2 style={{ fontFamily: T.serif, fontSize: "clamp(1.9rem,3.2vw,2.9rem)", color: T.titleblue, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: 14 }}>
                Begin Your Certification<br />Journey with SIACC
              </h2>
              <p style={{ fontFamily: T.sans, color: T.muted, fontSize: 14.5, lineHeight: 1.8 }}>
                Free consultation. Clear timeline. Transparent pricing.<br />Our experts respond within 2 hours.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
              <button
                onClick={() => router.push("/contact")}
                style={{ padding: "14px 36px", fontFamily: T.sans, fontSize: 14, fontWeight: 600, letterSpacing: "0.02em", border: "none", borderRadius: 6, cursor: "pointer", background: "#F97316", color: "#fff", whiteSpace: "nowrap", transition: "background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = T.teal}
                onMouseLeave={e => e.currentTarget.style.background = "#F97316"}
              >
                Get Free Consultation
              </button>
              <a
                href="tel:+919540190334"
                style={{ padding: "13px 28px", border: `1.5px solid ${T.border}`, borderRadius: 6, fontFamily: T.sans, fontSize: 14, fontWeight: 500, color: T.slate, textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, whiteSpace: "nowrap", background: T.white, transition: "border-color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = T.teal}
                onMouseLeave={e => e.currentTarget.style.borderColor = T.border}
              >
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