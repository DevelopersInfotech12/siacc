"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const T = {
  teal: "#1E88C8",
  tealDark: "#1567A0",
  para: "#080000b0", paradark: "#080000c4",
  tealLight: "#EBF5FB",
  tealBorder: "#B5D4F4",
  orange: "#F97316",
  orangeDark: "#EA6A0A",
  navy: "#0D1B2A",
  body: "#2D3748",
  muted: "#718096",
  subtle: "#A0AEC0",
  border: "#E8E3DA",
  borderLight: "#F0ECE5",
  white: "#FFFFFF",
  offWhite: "#F9FAFB",
  serif: "'Cormorant Garamond', Georgia, serif",
  sans: "'Outfit', system-ui, sans-serif",
};

const slides = [
  {
    id: "bis-crs-isi", tag: "BIS — CRS & ISI", shortTag: "BIS",
    title: "BIS CRS & ISI Certification",
    sub: "Compulsory Registration & Quality Mark",
    desc: "Covers 70+ electronic product categories under CRS (mobiles, laptops, LED lights, chargers, power banks) and 370+ categories under ISI (steel, cement, electrical goods, LPG cylinders). Full end-to-end support from lab coordination to license.",
    s1: { v: "440+", l: "Product categories" }, s2: { v: "4–12 wk", l: "Typical timeline" },
    href: "/bis", img: "/images/bis2.png",
  },
  {
    id: "wpc", tag: "WPC — ETA", shortTag: "WPC",
    title: "WPC-ETA Approval",
    sub: "Wireless Planning & Coordination",
    desc: "Mandatory for all wireless, Bluetooth, Wi-Fi, Zigbee and RF devices imported or sold in India. Filed via the Saralsanchar portal. We handle documentation, testing coordination and end-to-end follow-up with WPC authorities.",
    s1: { v: "5 yrs", l: "Approval validity" }, s2: { v: "4–8 wk", l: "Typical timeline" },
    href: "/wpc", img: "/images/WPC.png",
  },
  {
    id: "testing", tag: "Testing", shortTag: "Testing",
    title: "Testing & Certification",
    sub: "NABL / BIS / TEC Accredited Labs",
    desc: "End-to-end lab testing for all certifications — product safety, EMC, RF and chemical analysis. 50+ partner labs across India ensure the fastest turnaround for electronics, textiles, chemicals and food products.",
    s1: { v: "50+", l: "Lab partners" }, s2: { v: "1–8 wk", l: "Turnaround time" },
    href: "/testing", img: "/images/testing.png",
  },
  {
    id: "bee", tag: "BEE", shortTag: "BEE",
    title: "BEE Star Rating",
    sub: "Bureau of Energy Efficiency",
    desc: "Mandatory star labelling for ACs, refrigerators, washing machines, geysers and fans. Both voluntary and mandatory BEE schemes covered. We manage lab coordination, filing, and certificate renewal end-to-end.",
    s1: { v: "20+", l: "Product categories" }, s2: { v: "4–6 wk", l: "Typical timeline" },
    href: "/bee", img: "/images/bee1.png",
  },
  {
    id: "iso", tag: "ISO", shortTag: "ISO",
    title: "ISO Certification",
    sub: "International Organization for Standardization",
    desc: "ISO 9001, 14001, 45001, 27001, 22000 and more. Globally recognized standards required for government tenders, exports and enterprise contracts. We handle gap analysis, documentation, audits and certificate issuance.",
    s1: { v: "3 yrs", l: "Certificate validity" }, s2: { v: "2–4 mo", l: "Typical timeline" },
    href: "/iso", img: "/images/Iso.png",
  },
  {
    id: "epr", tag: "EPR", shortTag: "EPR",
    title: "EPR Registration",
    sub: "Extended Producer Responsibility",
    desc: "Mandatory for producers, importers and brand owners of e-waste, plastic packaging, batteries and tyres under CPCB guidelines. We handle portal registration, PRO empanelment, annual filing and compliance reporting.",
    s1: { v: "4 categories", l: "Waste streams covered" }, s2: { v: "3–6 wk", l: "Typical timeline" },
    href: "/epr", img: "/images/epr.png",
  },
];

const DURATION = 5500;

export default function HeroSlider() {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const [isXS, setIsXS] = useState(false);

  useEffect(() => {
    function measure() {
      setIsMobile(window.innerWidth <= 860);
      setIsXS(window.innerWidth <= 480);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const goTo = (idx) => {
    const next = (idx + slides.length) % slides.length;
    if (next === active) return;
    setFading(true);
    setTimeout(() => { setActive(next); setFading(false); }, 320);
  };
  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);

  useEffect(() => {
    clearInterval(timerRef.current);
    if (!paused) timerRef.current = setInterval(() => goTo(active + 1), DURATION);
    return () => clearInterval(timerRef.current);
  }, [active, paused]);

  const s = slides[active];
  const IMG_H = isXS ? 180 : 200;

  return (
    <section
      style={{
        background: T.white,
        borderBottom: `1px solid ${T.border}`,
        fontFamily: T.sans,
        /* ✅ FIX: Remove any top spacing */
        margin: 0,
        padding: 0,
        display: "block",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600&display=swap');

        /* ✅ FIX: Ensure no default browser margin bleeds in */
        section { margin: 0 !important; }

        .hs2-tabs { display:flex; overflow:hidden; background:${T.offWhite}; border-bottom:1px solid ${T.border}; margin:0; padding:0; }
        .hs2-tab { padding:13px 20px; font-family:${T.sans}; font-size:12.5px; font-weight:500; border:none; border-bottom:2px solid transparent; background:transparent; cursor:pointer; white-space:nowrap; color:${T.muted}; display:flex; align-items:center; justify-content:flex-start; gap:7px; transition:color 0.2s,border-color 0.2s; flex:0 0 auto; min-width:0; }
        .hs2-tab.active { color:${T.teal}; border-bottom:2px solid ${T.teal}; }
        .hs2-tab:hover:not(.active) { color:${T.body}; background:${T.white}; }
        .hs2-tab-dot { width:6px; height:6px; border-radius:50%; background:currentColor; opacity:0.5; flex-shrink:0; }
        .hs2-tab.active .hs2-tab-dot { opacity:1; background:${T.teal}; }

        @media(max-width:860px) {
          .hs2-tabs { overflow:hidden; }
          .hs2-tab { padding:10px 4px; font-size:10.5px; gap:4px; flex:1; justify-content:center; }
          .hs2-tab-dot { width:5px; height:5px; }
        }

        .hs2-title { font-family:${T.serif}; font-size:clamp(1.5rem,3.5vw,3rem); font-weight:600; color:${T.navy}; line-height:1.1; letter-spacing:-0.01em; margin-bottom:6px; }
        .hs2-sub   { font-size:11.5px; font-weight:600; color:${T.teal}; letter-spacing:0.09em; text-transform:uppercase; margin-bottom:14px; }
        .hs2-desc  { font-size:18px; color:#020000d0; line-height:1.85; max-width:540px; }

        .hs2-pill      { display:inline-flex; align-items:center; gap:7px; padding:5px 13px; border-radius:999px; border:1px solid ${T.tealBorder}; background:${T.tealLight}; margin-bottom:16px; width:fit-content; }
        .hs2-pill-dot  { width:6px; height:6px; border-radius:50%; background:${T.teal}; flex-shrink:0; }
        .hs2-pill-text { font-size:11px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:${T.teal}; }

        .hs2-info-panel   { display:flex; flex-direction:column; gap:12px; border-top:1px solid ${T.border}; }
        .hs2-service-card { background:${T.white}; border:1px solid ${T.border}; border-left:3px solid ${T.teal}; border-radius:8px; padding:12px 16px; display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap; }
        .hs2-stat-cards   { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
        .hs2-stat-card    { background:${T.white}; border:1px solid ${T.border}; border-radius:8px; padding:12px 16px; }
        .hs2-trust-row    { display:flex; gap:8px; flex-wrap:wrap; }
        .hs2-trust-badge  { font-family:${T.sans}; font-size:10.5px; font-weight:600; color:${T.teal}; background:${T.tealLight}; border:1px solid ${T.tealBorder}; border-radius:4px; padding:4px 10px; }

        .hs2-btn-outline  { padding:11px 22px; font-family:${T.sans}; font-size:13.5px; font-weight:600; border:none; border-radius:8px; cursor:pointer; color:#fff; background:${T.orange}; transition:background 0.2s; white-space:nowrap; }
        .hs2-btn-outline:hover { background:${T.orangeDark}; }

        .hs2-img-overlay  { position:absolute; inset:0; background:linear-gradient(to right,rgba(249,250,251,0.18) 0%,transparent 40%); pointer-events:none; }
        .hs2-counter      { position:absolute; top:14px; right:14px; background:rgba(255,255,255,0.95); border:1px solid ${T.border}; border-radius:8px; padding:6px 12px; font-family:${T.sans}; font-size:12px; font-weight:600; color:${T.navy}; letter-spacing:0.08em; z-index:2; }

        .hs2-nav   { display:flex; align-items:center; gap:14px; padding:12px clamp(14px,4vw,40px); border-top:1px solid ${T.border}; background:${T.offWhite}; }
        .hs2-dots  { display:flex; gap:5px; flex:1; }
        .hs2-dot   { height:3px; border-radius:999px; border:none; cursor:pointer; transition:all 0.32s; padding:0; }
        .hs2-dot.active { background:${T.teal}; }
        .hs2-dot:not(.active) { background:${T.border}; }
        .hs2-nav-label { font-size:11.5px; color:${T.subtle}; white-space:nowrap; }
        .hs2-arrow { width:32px; height:32px; border-radius:8px; border:1px solid ${T.border}; background:${T.white}; cursor:pointer; display:flex; align-items:center; justify-content:center; font-size:14px; color:${T.navy}; transition:all 0.18s; flex-shrink:0; }
        .hs2-arrow:hover { border-color:${T.teal}; color:${T.teal}; background:${T.tealLight}; }

        .hs2-progress      { height:2.5px; background:${T.borderLight}; overflow:hidden; }
        @keyframes hs2-fill { from{width:0%} to{width:100%} }
        .hs2-progress-fill { height:100%; background:${T.teal}; animation:hs2-fill ${DURATION}ms linear; }

        @keyframes hs2-rise { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
        .hs2-animated { animation:hs2-rise 0.42s cubic-bezier(0.22,1,0.36,1) both; }

        @media(max-width:400px) { .hs2-nav-label { display:none; } }
      `}</style>

      {/* Tabs */}
      <div className="hs2-tabs">
        {slides.map((sl, i) => (
          <button
            key={sl.id}
            className={`hs2-tab${i === active ? " active" : ""}`}
            onClick={() => goTo(i)}
          >
            <span className="hs2-tab-dot" />
            {isMobile ? sl.shortTag : sl.tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gridTemplateRows: isMobile ? `${IMG_H}px auto` : "auto",
        minHeight: isMobile ? "unset" : "500px",
        /* ✅ FIX: No gap between rows so image sits flush */
        gap: 0,
      }}>

        {/* Content */}
        <div style={{
          order: isMobile ? 2 : 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: isMobile ? (isXS ? "14px 12px 16px" : "16px 14px 20px") : "28px 28px 24px 28px",
          borderRight: isMobile ? "none" : `1px solid ${T.border}`,
          borderTop: isMobile ? `1px solid ${T.border}` : "none",
        }}>
          <div key={active} className="hs2-animated">
            <div className="hs2-pill">
              <span className="hs2-pill-dot" />
              <span className="hs2-pill-text">{s.tag}</span>
            </div>
            <h1 className="hs2-title">{s.title}</h1>
            <p className="hs2-sub">{s.sub}</p>
            <p className="hs2-desc" style={{ fontSize: isMobile ? 13 : 15, textAlign: "justify", marginBottom: isMobile ? 14 : 22 }}>
              {s.desc}
            </p>

            <div className="hs2-info-panel" style={{ marginTop: isMobile ? 14 : 24, paddingTop: isMobile ? 12 : 20 }}>
              <div className="hs2-service-card" style={{ flexDirection: isMobile ? "column" : "row" }}>
                <div>
                  <div style={{ fontFamily: T.sans, fontSize: 10, fontWeight: 700, color: T.subtle, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 3 }}>
                    Current Service
                  </div>
                  <div style={{ fontFamily: T.serif, fontSize: 15, fontWeight: 600, color: T.navy }}>{s.title}</div>
                  <div style={{ fontFamily: T.sans, fontSize: 11, color: T.teal, marginTop: 2, fontWeight: 500 }}>{s.sub}</div>
                </div>
                <button
                  className="hs2-btn-outline"
                  style={{ width: isMobile ? "100%" : "auto" }}
                  onClick={() => router.push(s.href)}
                >
                  Learn More →
                </button>
              </div>

              <div className="hs2-stat-cards">
                {[s.s1, s.s2].map((st, i) => (
                  <div key={i} className="hs2-stat-card" style={{ borderTop: `3px solid ${i === 0 ? T.teal : T.orange}`, padding: isMobile ? "10px 12px" : "12px 16px" }}>
                    <div style={{ fontFamily: T.serif, fontSize: 22, fontWeight: 700, color: i === 0 ? T.teal : T.orange, lineHeight: 1 }}>{st.v}</div>
                    <div style={{ fontFamily: T.sans, fontSize: 11, color: T.muted, marginTop: 4 }}>{st.l}</div>
                  </div>
                ))}
              </div>

              <div className="hs2-trust-row">
                {["✓ BIS Approved", "✓ NABL Accredited", "✓ Govt. Recognized"].map(b => (
                  <span key={b} className="hs2-trust-badge" style={{ fontSize: isMobile ? "9px" : "10.5px" }}>{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Image — ✅ FIX: lineHeight:0 removes inline gap; margin/padding:0 kills any offset */}
        <div style={{
          order: isMobile ? 1 : 2,
          position: "relative",
          overflow: "hidden",
          display: "block",
          visibility: "visible",
          height: isMobile ? `${IMG_H}px` : "auto",
          minHeight: isMobile ? `${IMG_H}px` : "300px",
          lineHeight: 0,
          margin: 0,
          padding: 0,
          marginTop: isMobile ? 0 : "-45px", // ✅ ADD THIS LINE ONLY
        }}>
          <img
            key={active}
            src={s.img}
            alt={s.title}
            style={{
              position: "absolute",
              top: 0, left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
              maxWidth: "none",
              margin: 0,
              padding: 0,
              opacity: fading ? 0 : 1,
              transition: "opacity 0.45s ease",
            }}
          />
          <div className="hs2-img-overlay" />
          <div className="hs2-counter">
            {String(active + 1).padStart(2, "0")}
            <span style={{ color: T.subtle, margin: "0 3px" }}>/</span>
            {String(slides.length).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="hs2-nav">
        <div className="hs2-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hs2-dot${i === active ? " active" : ""}`}
              style={{ width: i === active ? 28 : 12 }}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <span className="hs2-nav-label">{s.tag} — {s.sub.split(" ").slice(0, 3).join(" ")}</span>
        <div style={{ display: "flex", gap: 5 }}>
          <button className="hs2-arrow" onClick={prev}>←</button>
          <button className="hs2-arrow" onClick={next}>→</button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="hs2-progress">
        {!paused && <div key={`${active}-${paused}`} className="hs2-progress-fill" />}
      </div>
    </section>
  );
}