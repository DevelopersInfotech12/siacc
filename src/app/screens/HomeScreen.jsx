"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const T = {
  teal: "#1E88C8",
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

const ticker = [
  "BIS Conformity Assessment Amendment Regulations 2026 — Major Update",
  "BIS CRS Registration now mandatory for AR/VR/MR Devices",
  "TEC Launches Reimbursement Scheme for Start-ups & MSMEs",
  "BIS Certification for Furniture Products mandatory from Feb 2026",
  "EPR Registration deadline extended — Check your category now",
];

const sliderServices = [
  { id: "crs", tag: "BIS — CRS", icon: "📱", title: "BIS CRS Registration", sub: "Compulsory Registration Scheme", desc: "Mandatory for 70+ electronic products — mobiles, laptops, LED lights, chargers, power banks. We handle lab coordination, filing & follow-up.", stat1: { v: "70+", l: "Products" }, stat2: { v: "4–8 wk", l: "Timeline" }, href: "/bis", img: "https://images.unsplash.com/photo-1581092921461-39d9a338b0cb?w=1000&q=85&fit=crop" },
  { id: "isi", tag: "BIS — ISI", icon: "🔖", title: "BIS ISI Mark Certification", sub: "Mandatory Quality Certification", desc: "Required for 370+ categories including steel, cement, electrical goods, LPG cylinders. Full end-to-end support from lab to license.", stat1: { v: "370+", l: "Categories" }, stat2: { v: "8–12 wk", l: "Timeline" }, href: "/bis", img: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1000&q=85&fit=crop" },
  { id: "wpc", tag: "WPC — ETA", icon: "📡", title: "WPC-ETA Approval", sub: "Wireless Planning & Coordination", desc: "Mandatory for all wireless, Bluetooth, Wi-Fi, Zigbee and RF devices imported into India. We file through Saralsanchar portal.", stat1: { v: "5 yrs", l: "Validity" }, stat2: { v: "4–8 wk", l: "Timeline" }, href: "/wpc", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&q=85&fit=crop" },
  { id: "test", tag: "Testing", icon: "🔬", title: "Testing & Certification", sub: "NABL / BIS / TEC Accredited Labs", desc: "End-to-end lab testing for all certifications — product safety, EMC, RF and chemical. 50+ partner labs across India for fastest results.", stat1: { v: "50+", l: "Labs" }, stat2: { v: "1–8 wk", l: "Turnaround" }, href: "/testing", img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1000&q=85&fit=crop" },
  { id: "bee", tag: "BEE", icon: "⚡", title: "BEE Star Rating", sub: "Bureau of Energy Efficiency", desc: "Mandatory star labelling for ACs, refrigerators, washing machines, geysers and fans. Voluntary and mandatory schemes both covered.", stat1: { v: "20+", l: "Products" }, stat2: { v: "4–6 wk", l: "Timeline" }, href: "/bee", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=85&fit=crop" },
  { id: "iso", tag: "ISO", icon: "🌐", title: "ISO Certification", sub: "International Standards Organization", desc: "ISO 9001, 14001, 45001, 27001, 22000 and more. Globally recognized, required for government tenders, exports and enterprise contracts.", stat1: { v: "3 yrs", l: "Validity" }, stat2: { v: "2–4 mo", l: "Timeline" }, href: "/iso", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1000&q=85&fit=crop" },
];

const services = [
  { icon: "🏅", title: "BIS Certification", desc: "ISI Mark & CRS registration for electronics and consumer products.", href: "/bis", tag: "Most Popular" },
  { icon: "📡", title: "WPC-ETA Approval", desc: "Wireless, Bluetooth & RF device approvals via Saralsanchar portal.", href: "/wpc", tag: "" },
  { icon: "🔬", title: "Testing & Certification", desc: "Lab testing coordination with NABL & BIS recognized labs.", href: "/testing", tag: "" },
  { icon: "⚡", title: "BEE Registration", desc: "Energy efficiency star labelling for appliances under BEE norms.", href: "/bee", tag: "" },
  { icon: "🌐", title: "ISO Certification", desc: "ISO 9001, 14001, 45001, 27001 & more for all industries.", href: "/iso", tag: "" },
  { icon: "♻️", title: "EPR Registration", desc: "E-Waste, Plastic, Battery & Tyre EPR compliance under CPCB norms.", href: "/epr", tag: "Mandatory" },
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

/* ─── SHARED MICRO-COMPONENTS ─── */
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

function OutlineBtnTransparent({ children, onClick, style = {}, href }) {
  const [hov, setHov] = useState(false);
  const base = {
    padding: "12px 28px", fontFamily: T.sans, fontSize: 13.5, fontWeight: 600,
    letterSpacing: "0.02em", borderRadius: 6, cursor: "pointer",
    border: `1.5px solid ${hov ? T.teal : T.border}`,
    color: "#383737",
    background: hov ? "#F97316" : "transparent",
    transition: "all 0.22s cubic-bezier(0.4,0,0.2,1)",
    textDecoration: "none", display: "inline-flex", alignItems: "center",
    ...style,
  };
  if (href) return <a href={href} style={base} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>{children}</a>;
  return <button onClick={onClick} style={base} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>{children}</button>;
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

/* ─── HERO SLIDER ─── */
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
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      style={{ background: T.cream, borderBottom: `1px solid ${T.border}` }}>

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
          <div key={s.id} style={{ animation: entering ? "fadeSlideUp 0.42s cubic-bezier(0.22,1,0.36,1) both" : "none" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: T.tealLight, borderRadius: 4, padding: "5px 14px", marginBottom: 24 }}>
              <span style={{ fontSize: 13 }}>{s.icon}</span>
              <span style={{ fontFamily: T.sans, fontSize: 10.5, fontWeight: 700, color: T.teal, letterSpacing: "0.12em", textTransform: "uppercase" }}>{s.tag}</span>
            </div>
            <h1 style={{ fontFamily: T.serif, fontSize: "clamp(2rem,3.8vw,3.4rem)", color: T.slate, fontWeight: 700, lineHeight: 1.08, marginBottom: 10, letterSpacing: "-0.01em" }}>
              {s.title}
            </h1>
            <p style={{ fontFamily: T.sans, fontSize: 12, fontWeight: 600, color: T.tealMid, marginBottom: 20, letterSpacing: "0.05em", textTransform: "uppercase" }}>{s.sub}</p>
            <p style={{ fontFamily: T.sans, fontSize: "clamp(13.5px,1.4vw,15px)", color: T.muted, lineHeight: 1.9, marginBottom: 32, maxWidth: 460 }}>{s.desc}</p>
            <div style={{ display: "flex", gap: 12, marginBottom: 36, flexWrap: "wrap" }}>
              {[s.stat1, s.stat2].map((st, i) => (
                <div key={i} style={{
                  padding: "14px 24px", background: T.white,
                  border: `1px solid ${T.border}`, borderRadius: 6,
                  borderTop: `3px solid ${i === 0 ? T.teal : T.amber}`,
                }}>
                  <div style={{ fontFamily: T.serif, fontSize: 26, color: i === 0 ? T.teal : T.amber, fontWeight: 700, lineHeight: 1 }}>{st.v}</div>
                  <div style={{ fontFamily: T.sans, fontSize: 11, color: T.subtle, marginTop: 4, letterSpacing: "0.04em" }}>{st.l}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <PrimaryBtn onClick={() => router.push("/contact")}>Get Free Consultation</PrimaryBtn>
              <OutlineBtn onClick={() => router.push(s.href)}>Learn More →</OutlineBtn>
            </div>
          </div>
        </div>

        <div style={{ position: "relative", overflow: "hidden", minHeight: 520 }} className="hero-img-col">
          <img key={s.id} src={s.img} alt={s.title}
            style={{
              position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center",
              animation: entering ? "imgReveal 0.55s ease both" : "none"
            }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, rgba(250,248,244,0.45) 0%, transparent 32%)" }} />
          <div style={{
            position: "absolute", bottom: 32, left: 32,
            background: "rgba(255,255,255,0.96)", borderRadius: 8, padding: "16px 22px",
            boxShadow: "0 12px 40px rgba(0,0,0,0.10)", border: `1px solid ${T.border}`,
            backdropFilter: "blur(12px)", minWidth: 170,
          }}>
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
                background: i === active ? T.teal : T.border, width: i === active ? 36 : 14
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

      <div style={{ height: 2, background: T.borderLight }}>
        {!paused && <div key={active} style={{ height: "100%", background: T.teal, animation: "sliderProgress 5.5s linear forwards" }} />}
      </div>

      <style>{`
        @keyframes fadeSlideUp  { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        @keyframes imgReveal    { from{opacity:0.5;transform:scale(1.05)} to{opacity:1;transform:scale(1)} }
        @keyframes sliderProgress { from{width:0} to{width:100%} }
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
        fontFamily: T.sans, transition: "all 0.18s"
      }}>
      {children}
    </button>
  );
}

/* ─── MAIN PAGE ─── */
export default function HomeScreen() {
  const router = useRouter();

  return (
    <div style={{ minHeight: "100vh", background: T.white, fontFamily: T.sans, color: T.body }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        img { max-width:100%; display:block; }
        a { text-decoration:none; color:inherit; }
        .ticker-outer { background:${T.teal}; overflow:hidden; padding:9px 0; }
        .ticker-track { display:inline-flex; gap:0; animation:tickerMove 40s linear infinite; white-space:nowrap; }
        .ticker-track:hover { animation-play-state:paused; }
        @keyframes tickerMove { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .sec { padding: clamp(64px,8vw,104px) clamp(16px,5vw,56px); }
        .inner { max-width:1280px; margin:0 auto; }
        .stats-band { display:grid; grid-template-columns:repeat(4,1fr); }
        @media(max-width:640px){ .stats-band{grid-template-columns:repeat(2,1fr);} }
        .about-grid { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; }
        @media(max-width:860px){ .about-grid{grid-template-columns:1fr; gap:48px;} }
        .mini-stats { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:32px; }
        @media(max-width:420px){ .mini-stats{grid-template-columns:1fr;} }
        .svc-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        @media(max-width:900px){ .svc-grid{grid-template-columns:repeat(2,1fr);} }
        @media(max-width:560px){ .svc-grid{grid-template-columns:1fr;} }
        .svc-card {
          display:block; background:${T.white}; border-radius:10px; padding:28px;
          border:1px solid ${T.border}; transition:all 0.25s cubic-bezier(0.4,0,0.2,1);
          cursor:pointer; text-decoration:none; position:relative; overflow:hidden;
        }
        .svc-card::before {
          content:''; position:absolute; inset:0; background:${T.tealGhost};
          opacity:0; transition:opacity 0.25s;
        }
        .svc-card:hover { border-color:${T.teal}; transform:translateY(-3px); box-shadow:0 12px 32px rgba(10,104,104,0.09); }
        .svc-card:hover::before { opacity:1; }
        .svc-card > * { position:relative; }
        .why-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        @media(max-width:900px){ .why-grid{grid-template-columns:repeat(2,1fr);} }
        @media(max-width:540px){ .why-grid{grid-template-columns:1fr;} }
        .why-card {
          background:${T.white}; border-radius:10px; padding:28px; border:1px solid ${T.border};
          transition:all 0.2s; position:relative;
        }
        .why-card:hover { border-color:${T.teal}; box-shadow:0 8px 24px rgba(10,104,104,0.07); transform:translateY(-2px); }
        .steps-grid { display:grid; grid-template-columns:repeat(4,1fr); }
        @media(max-width:860px){ .steps-grid{grid-template-columns:repeat(2,1fr);} }
        @media(max-width:480px){ .steps-grid{grid-template-columns:1fr;} }
        .testi-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:20px; }
        @media(max-width:560px){ .testi-grid{grid-template-columns:1fr;} }
        .testi-card {
          background:${T.white}; border-radius:10px; padding:28px 28px 24px; border:1px solid ${T.border};
          transition:all 0.22s;
        }
        .testi-card:hover { border-color:${T.teal}; box-shadow:0 8px 24px rgba(10,104,104,0.07); }
        .ind-pill {
          padding:9px 20px; border:1px solid ${T.border}; border-radius:4px;
          font-family:${T.sans}; font-size:13px; color:${T.body}; background:${T.white};
          transition:all 0.18s; font-weight:500; letter-spacing:0.01em;
        }
        .ind-pill:hover { border-color:${T.teal}; color:${T.teal}; background:${T.tealLight}; }
        .cta-split { display:grid; grid-template-columns:1fr auto; gap:40px; align-items:center; }
        @media(max-width:720px){ .cta-split{grid-template-columns:1fr; gap:28px;} }
        .about-img-wrap { position:relative; }
        .ruled { width:100%; height:1px; background:${T.border}; }
      `}</style>

      <Navbar />

      {/* NEWS TICKER */}
      <div className="ticker-outer">
        <div className="ticker-track">
          {[...ticker, ...ticker].map((item, i) => (
            <span key={i} style={{ fontFamily: T.sans, fontSize: 14, fontWeight: 500, color: "rgb(255, 255, 255)", padding: "0 48px" }}>
              <span style={{ color: T.amberLight, marginRight: 10 }}>◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* HERO SLIDER */}
      <HeroSlider />

      {/* STATS BAND */}
      <div style={{ background: T.teal }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="stats-band">
            {stats.map((s, i) => (
              <div key={s.l} style={{
                textAlign: "center", padding: "36px 16px",
                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}>
                <div style={{ fontFamily: T.serif, fontSize: "clamp(2rem,2.8vw,2.8rem)", color: "#ffffff", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.01em" }}>{s.v}</div>
                <div style={{ fontFamily: T.sans, fontSize: 12, color: "rgb(255,255,255)", marginTop: 8, letterSpacing: "0.04em" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section className="sec" style={{ background: T.cream }}>
        <div className="inner">
          <div className="about-grid">
            <div className="about-img-wrap">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=720&q=85&fit=crop"
                alt="SIACC consultants at work"
                style={{ width: "100%", height: "clamp(300px,42vw,480px)", objectFit: "cover", borderRadius: 10, boxShadow: "0 24px 64px rgba(0,0,0,0.10)" }} />
              <div style={{
                position: "absolute", bottom: -16, right: -12,
                background: T.white, borderRadius: 8, padding: "20px 26px",
                boxShadow: "0 16px 48px rgba(0,0,0,0.11)", border: `1px solid ${T.tealLight}`,
              }}>
                <div style={{ fontFamily: T.serif, fontSize: 36, color: T.teal, fontWeight: 700, lineHeight: 1 }}>10K+</div>
                <div style={{ fontFamily: T.sans, fontSize: 11.5, color: T.muted, marginTop: 4 }}>Clients Served</div>
              </div>
              <div style={{
                position: "absolute", top: 20, left: 20,
                background: T.teal, borderRadius: 4, padding: "7px 16px",
              }}>
                <span style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: "0.1em" }}>SINCE 2011</span>
              </div>
            </div>

            <div>
              <SectionLabel>About SIACC</SectionLabel>
              <h2 style={{ fontFamily: T.serif, fontSize: "clamp(2rem,3.2vw,2.9rem)", color: T.slate, fontWeight: 700, marginBottom: 20, lineHeight: 1.12, letterSpacing: "-0.01em" }}>
                India's Leading<br />Compliance Consultants
              </h2>
              <p style={{ fontFamily: T.sans, fontSize: 15, color: T.muted, lineHeight: 1.9, marginBottom: 14 }}>
                Star India Accreditation (SIACC) is a trusted name with over 12+ years of experience in BIS, EPR, WPC, TEC, BEE and ISO certifications. We deliver fast, reliable, and cost-effective regulatory approvals for Indian and foreign manufacturers and importers.
              </p>
              <p style={{ fontFamily: T.sans, fontSize: 15, color: T.muted, lineHeight: 1.9, marginBottom: 32 }}>
                With a deep understanding of Indian regulatory standards, we help businesses achieve full compliance — reducing delays, avoiding penalties, and speeding up market entry.
              </p>
              <div className="mini-stats">
                {[{ n: "12+", l: "Years Experience" }, { n: "100+", l: "Expert Team" }, { n: "25+", l: "Countries Served" }, { n: "50+", l: "Services Covered" }].map(s => (
                  <div key={s.l} style={{ padding: "16px 20px", background: T.white, borderRadius: 8, border: `1px solid ${T.border}`, borderLeft: `3px solid ${T.teal}` }}>
                    <div style={{ fontFamily: T.serif, fontSize: 26, color: T.teal, fontWeight: 700, lineHeight: 1 }}>{s.n}</div>
                    <div style={{ fontFamily: T.sans, fontSize: 11.5, color: T.muted, marginTop: 4 }}>{s.l}</div>
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

      {/* SERVICES */}
      <section className="sec" style={{ background: T.white }}>
        <div className="inner">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 52, flexWrap: "wrap", gap: 20 }}>
            <div>
              <SectionLabel>What We Offer</SectionLabel>
              <h2 style={{ fontFamily: T.serif, fontSize: "clamp(2rem,3.2vw,2.9rem)", color: T.slate, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
                Certification Services
              </h2>
            </div>
            <p style={{ fontFamily: T.sans, fontSize: 14.5, color: T.muted, maxWidth: 380, lineHeight: 1.8 }}>
              End-to-end compliance for manufacturers, importers and brand owners across all Indian regulatory frameworks.
            </p>
          </div>

          <div className="svc-grid">
            {services.map(s => (
              <a key={s.title} href={s.href} className="svc-card">
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 18 }}>
                  <div style={{ width: 50, height: 50, borderRadius: 10, background: T.tealLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{s.icon}</div>
                  {s.tag && (
                    <span style={{
                      fontFamily: T.sans, fontSize: 10, fontWeight: 700, letterSpacing: "0.06em",
                      background: s.tag === "Most Popular" ? T.amberLight : "#FEF2F2",
                      color: s.tag === "Most Popular" ? T.amberDark : "#C53030",
                      padding: "3px 10px", borderRadius: 3, textTransform: "uppercase",
                    }}>{s.tag}</span>
                  )}
                </div>
                <h3 style={{ fontFamily: T.serif, fontSize: 17.5, color: T.slate, marginBottom: 8, fontWeight: 600, lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontFamily: T.sans, fontSize: 14, color: T.muted, lineHeight: 1.7, marginBottom: 16 }}>{s.desc}</p>
                <span style={{ fontFamily: T.sans, fontSize: 12.5, color: T.teal, fontWeight: 600, letterSpacing: "0.02em" }}>Learn More →</span>
              </a>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <OutlineBtn onClick={() => router.push("/services")} style={{ padding: "13px 36px" }}>
              View All 50+ Services
            </OutlineBtn>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="sec" style={{ background: T.cream }}>
        <div className="inner">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center", marginBottom: 56 }} className="why-intro">
            <div>
              <SectionLabel>Why Choose Us</SectionLabel>
              <h2 style={{ fontFamily: T.serif, fontSize: "clamp(2rem,3.2vw,2.9rem)", color: T.slate, fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.01em", marginBottom: 18 }}>
                The SIACC<br />Difference
              </h2>
              <p style={{ fontFamily: T.sans, fontSize: 15, color: T.muted, lineHeight: 1.9, maxWidth: 420 }}>
                We simplify even the most complex certification processes with reliable service, expert consultation, and dedicated client support — ensuring smooth approvals and complete peace of mind.
              </p>
            </div>
            <div style={{ position: "relative", borderRadius: 10, overflow: "hidden", height: 240 }}>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=85&fit=crop"
                alt="SIACC team"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 38%" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,104,104,0.82), rgba(13,27,42,0.70))" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: 0 }}>
                {[{ v: "100+", l: "Experts" }, { v: "50+", l: "Domains" }, { v: "12+", l: "Years" }].map((s, i) => (
                  <div key={s.l} style={{ textAlign: "center", padding: "0 28px", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.15)" : "none" }}>
                    <div style={{ fontFamily: T.serif, fontSize: 32, color: T.amber, fontWeight: 700, lineHeight: 1 }}>{s.v}</div>
                    <div style={{ fontFamily: T.sans, fontSize: 12, color: "rgba(255,255,255,0.72)", marginTop: 6 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <style>{`@media(max-width:860px){ .why-intro{grid-template-columns:1fr!important; gap:36px!important;} }`}</style>
          <div className="why-grid">
            {whyUs.map(w => (
              <div key={w.title} className="why-card">
                <div style={{ width: 46, height: 46, borderRadius: 9, background: T.tealLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 16 }}>{w.icon}</div>
                <h3 style={{ fontFamily: T.serif, fontSize: 17, color: T.slate, marginBottom: 8, fontWeight: 600 }}>{w.title}</h3>
                <p style={{ fontFamily: T.sans, fontSize: 14, color: T.muted, lineHeight: 1.75 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="sec" style={{ background: T.white }}>
        <div className="inner">
          {/* ✅ FIX: SectionLabel wrapped in flex-center div */}
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
              <SectionLabel>Our Process</SectionLabel>
            </div>
            <h2 style={{ fontFamily: T.serif, fontSize: "clamp(2rem,3.2vw,2.9rem)", color: T.slate, fontWeight: 700, letterSpacing: "-0.01em", marginBottom: 12 }}>How It Works</h2>
            <p style={{ fontFamily: T.sans, color: T.muted, maxWidth: 380, margin: "0 auto", lineHeight: 1.75, fontSize: 14.5 }}>
              A simple, transparent 4-step process — from first enquiry to certificate in hand.
            </p>
          </div>

          <div style={{ background: T.cream, borderRadius: 12, border: `1px solid ${T.border}`, overflow: "hidden" }}>
            <div className="steps-grid">
              {steps.map((s, i) => (
                <div key={s.n} style={{
                  padding: "40px 32px", textAlign: "center", position: "relative",
                  borderRight: i < steps.length - 1 ? `1px solid ${T.border}` : "none",
                  background: i % 2 === 1 ? T.white : "transparent",
                }}>
                  {i < steps.length - 1 && (
                    <div style={{ position: "absolute", top: 50, right: -8, width: 16, height: 16, borderRadius: "50%", background: T.white, border: `2px solid ${T.teal}`, zIndex: 1 }} />
                  )}
                  <div style={{ width: 54, height: 54, margin: "0 auto 16px", borderRadius: 10, background: T.tealLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{s.icon}</div>
                  <div style={{ fontFamily: T.sans, fontSize: 10.5, fontWeight: 700, color: T.teal, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 10 }}>Step {s.n}</div>
                  <h3 style={{ fontFamily: T.serif, fontSize: 17, color: T.slate, marginBottom: 10, fontWeight: 600 }}>{s.title}</h3>
                  <p style={{ fontFamily: T.sans, fontSize: 14, color: T.muted, lineHeight: 1.75 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="sec" style={{ background: T.tealLight, borderTop: `1px solid #C8DEDE`, borderBottom: `1px solid #C8DEDE` }}>
        <div className="inner">
          {/* ✅ FIX: SectionLabel wrapped in flex-center div */}
          <div style={{ textAlign: "center", marginBottom: 22 }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <SectionLabel>Industries We Serve</SectionLabel>
            </div>
            <h2 style={{ fontFamily: T.serif, fontSize: "clamp(1.8rem,3vw,2.7rem)", color: T.slate, fontWeight: 700, letterSpacing: "-0.01em" }}>
              Trusted Across Every Sector
            </h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
            {industries.map(ind => (
              <span key={ind} className="ind-pill">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sec" style={{ background: T.white }}>
        <div className="inner">
          {/* ✅ FIX: SectionLabel wrapped in flex-center div */}
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 1 }}>
              <SectionLabel>Client Stories</SectionLabel>
            </div>
            <h2 style={{ fontFamily: T.serif, fontSize: "clamp(2rem,3.2vw,2.9rem)", color: T.slate, fontWeight: 700, letterSpacing: "-0.01em" }}>
              Why People Trust SIACC
            </h2>
          </div>
          <div className="testi-grid">
            {testimonials.map(t => (
              <div key={t.name} className="testi-card">
                <div style={{ display: "flex", gap: 2, marginBottom: 18 }}>
                  {[...Array(t.r)].map((_, i) => (
                    <span key={i} style={{ color: T.amber, fontSize: 14 }}>★</span>
                  ))}
                </div>
                <div style={{ fontFamily: T.serif, fontSize: 52, color: T.tealLight, lineHeight: 0.6, marginBottom: 12, userSelect: "none" }}>"</div>
                <p style={{ fontFamily: T.sans, color: T.body, fontSize: 14, lineHeight: 1.85, marginBottom: 24 }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 18, borderTop: `1px solid ${T.border}` }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: "50%", background: T.tealLight,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: T.serif, color: T.teal, fontWeight: 700, fontSize: 17, flexShrink: 0,
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

      {/* ✅ CTA BAND — bg changed from T.slate (dark navy) to light blue #EBF5FB */}
      <section style={{ background: "#EBF5FB", borderTop: "1px solid #C8DFF0", borderBottom: "1px solid #C8DFF0", padding: "80px clamp(16px,5vw,56px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="cta-split">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 28, height: 1.5, background: T.teal }} />
                <span style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.teal }}>Start Today</span>
              </div>
              <h2 style={{ fontFamily: T.serif, fontSize: "clamp(1.9rem,3.2vw,2.9rem)", color: T.slate, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: 14 }}>
                Begin Your Certification<br />Journey with SIACC
              </h2>
              <p style={{ fontFamily: T.sans, color: T.muted, fontSize: 14.5, lineHeight: 1.8 }}>
                Free consultation. Clear timeline. Transparent pricing.<br />Our experts respond within 2 hours.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
              <button onClick={() => router.push("/contact")}
                style={{ padding: "14px 36px", fontFamily: T.sans, fontSize: 14, fontWeight: 600, letterSpacing: "0.02em", border: "none", borderRadius: 6, cursor: "pointer", background: "#F97316", color: "#fff", whiteSpace: "nowrap", transition: "background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = T.teal}
                onMouseLeave={e => e.currentTarget.style.background = "#F97316"}>
                Get Free Consultation
              </button>
              <a href="tel:+919540190334"
                style={{ padding: "13px 28px", border: `1.5px solid ${T.border}`, borderRadius: 6, fontFamily: T.sans, fontSize: 14, fontWeight: 500, color: T.slate, textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, whiteSpace: "nowrap", background: T.white, transition: "border-color 0.2s" }}
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