"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

/* ── Design tokens ── */
const T = {
  teal: "#1E88C8",
  tealDark: "#1567A0",
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
  cream: "#FAF8F4",
  serif: "'Cormorant Garamond', Georgia, serif",
  sans: "'Outfit', system-ui, sans-serif",
};

const slides = [
  {
    id: "bis-crs-isi",
    tag: "BIS — CRS & ISI",
    title: "BIS CRS & ISI Certification",
    sub: "Compulsory Registration & Quality Mark",
    desc: "Covers 70+ electronic product categories under CRS (mobiles, laptops, LED lights, chargers, power banks) and 370+ categories under ISI (steel, cement, electrical goods, LPG cylinders). Full end-to-end support from lab coordination to license.",
    s1: { v: "440+", l: "Product categories" },
    s2: { v: "4–12 wk", l: "Typical timeline" },
    href: "/bis",
    img: "/images/bisnew.png",
  },
  {
    id: "wpc",
    tag: "WPC — ETA",
    title: "WPC-ETA Approval",
    sub: "Wireless Planning & Coordination",
    desc: "Mandatory for all wireless, Bluetooth, Wi-Fi, Zigbee and RF devices imported or sold in India. Filed via the Saralsanchar portal. We handle documentation, testing coordination and end-to-end follow-up with WPC authorities.",
    s1: { v: "5 yrs", l: "Approval validity" },
    s2: { v: "4–8 wk", l: "Typical timeline" },
    href: "/wpc",
    img: "/images/WPC.png",
  },
  {
    id: "testing",
    tag: "Testing",
    title: "Testing & Certification",
    sub: "NABL / BIS / TEC Accredited Labs",
    desc: "End-to-end lab testing for all certifications — product safety, EMC, RF and chemical analysis. 50+ partner labs across India ensure the fastest turnaround for electronics, textiles, chemicals and food products.",
    s1: { v: "50+", l: "Lab partners" },
    s2: { v: "1–8 wk", l: "Turnaround time" },
    href: "/testing",
    img: "/images/testing.png",
  },
  {
    id: "bee",
    tag: "BEE",
    title: "BEE Star Rating",
    sub: "Bureau of Energy Efficiency",
    desc: "Mandatory star labelling for ACs, refrigerators, washing machines, geysers and fans. Both voluntary and mandatory BEE schemes covered. We manage lab coordination, filing, and certificate renewal end-to-end.",
    s1: { v: "20+", l: "Product categories" },
    s2: { v: "4–6 wk", l: "Typical timeline" },
    href: "/bee",
    img: "/images/BEE.png",
  },
  {
    id: "iso",
    tag: "ISO",
    title: "ISO Certification",
    sub: "International Organization for Standardization",
    desc: "ISO 9001, 14001, 45001, 27001, 22000 and more. Globally recognized standards required for government tenders, exports and enterprise contracts. We handle gap analysis, documentation, audits and certificate issuance.",
    s1: { v: "3 yrs", l: "Certificate validity" },
    s2: { v: "2–4 mo", l: "Typical timeline" },
    href: "/iso",
    img: "/images/ISO.png",
  },
  {
    id: "epr",
    tag: "EPR",
    title: "EPR Registration",
    sub: "Extended Producer Responsibility",
    desc: "Mandatory for producers, importers and brand owners of e-waste, plastic packaging, batteries and tyres under CPCB guidelines. We handle portal registration, PRO empanelment, annual filing and compliance reporting.",
    s1: { v: "4 categories", l: "Waste streams covered" },
    s2: { v: "3–6 wk", l: "Typical timeline" },
    href: "/epr",
    img: "/images/ERP.png",
  },
];

const DURATION = 5500;

export default function HeroSlider() {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const goTo = (idx) => {
    const next = (idx + slides.length) % slides.length;
    if (next === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(next);
      setFading(false);
    }, 320);
  };

  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);

  useEffect(() => {
    clearInterval(timerRef.current);
    if (!paused) timerRef.current = setInterval(() => goTo(active + 1), DURATION);
    return () => clearInterval(timerRef.current);
  }, [active, paused]);

  const s = slides[active];

  return (
    <section
      style={{ background: T.white, borderBottom: `1px solid ${T.border}`, fontFamily: T.sans }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600&display=swap');

        .hs2-tabs { display:flex; overflow-x:auto; scrollbar-width:none; background:${T.offWhite}; border-bottom:1px solid ${T.border}; }
        .hs2-tabs::-webkit-scrollbar { display:none; }
        .hs2-tab {
          padding:13px 20px; font-family:${T.sans}; font-size:12.5px; font-weight:500;
          border:none; border-bottom:2px solid transparent; background:transparent;
          cursor:pointer; white-space:nowrap; color:${T.muted};
          display:flex; align-items:center; gap:7px;
          transition:color 0.2s, border-color 0.2s; letter-spacing:0.01em;
        }
        .hs2-tab.active { color:${T.teal}; border-bottom:2px solid ${T.teal}; }
        .hs2-tab:hover:not(.active) { color:${T.body}; background:${T.white}; }
        .hs2-tab-dot { width:6px; height:6px; border-radius:50%; background:currentColor; opacity:0.5; transition:opacity 0.2s; flex-shrink:0; }
        .hs2-tab.active .hs2-tab-dot { opacity:1; background:${T.teal}; }

        /* ── Main grid: left content | right image ── */
        .hs2-grid { display:grid; grid-template-columns:1fr 1fr; min-height:500px; }
        @media(max-width:860px){ .hs2-grid { grid-template-columns:1fr; } }

        /* ── Left content column ── */
        .hs2-content {
          padding:28px 28px 24px 28px;
          display:flex; flex-direction:column; justify-content:flex-start;
          border-right:1px solid ${T.border};
        }

        /* ── Right image column — full height ── */
        .hs2-img-col { position:relative; overflow:hidden; }
        @media(max-width:860px){ .hs2-img-col { display:none; } }
        .hs2-img { position:absolute; inset:0; width:100%; height:78%; object-fit:cover; object-position:center; display:block; transition:opacity 0.45s ease; }
        .hs2-img-overlay { position:absolute; inset:0; background:linear-gradient(to right, rgba(249,250,251,0.18) 0%, transparent 40%); }

        /* ── Counter badge on image ── */
        .hs2-counter {
          position:absolute; top:20px; right:20px;
          background:rgba(255,255,255,0.95); border:1px solid ${T.border};
          border-radius:8px; padding:7px 14px;
          font-family:${T.sans}; font-size:12px; font-weight:600; color:${T.navy};
          letter-spacing:0.08em; backdrop-filter:blur(8px);
        }

        /* ── Pill ── */
        .hs2-pill { display:inline-flex; align-items:center; gap:7px; padding:5px 13px; border-radius:999px; border:1px solid ${T.tealBorder}; background:${T.tealLight}; margin-bottom:16px; width:fit-content; }
        .hs2-pill-dot { width:6px; height:6px; border-radius:50%; background:${T.teal}; flex-shrink:0; }
        .hs2-pill-text { font-size:11px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:${T.teal}; }

        /* ── Slide typography ── */
        .hs2-title { font-family:${T.serif}; font-size:clamp(1.9rem,3.5vw,3rem); font-weight:600; color:${T.navy}; line-height:1.1; letter-spacing:-0.01em; margin-bottom:6px; }
        .hs2-sub { font-size:11.5px; font-weight:600; color:${T.teal}; letter-spacing:0.09em; text-transform:uppercase; margin-bottom:14px; }
        .hs2-desc { font-size:14px; color:"#020000d0"; line-height:1.85; margin-bottom:22px; max-width:440px; }

        /* ── Stats ── */
        .hs2-stats { display:flex; gap:10px; margin-bottom:22px; flex-wrap:wrap; }
        .hs2-stat { padding:13px 20px; background:${T.offWhite}; border-radius:10px; border:1px solid ${T.border}; }
        .hs2-stat-val { font-family:${T.serif}; font-size:22px; font-weight:600; line-height:1; }
        .hs2-stat-val.accent { color:${T.teal}; }
        .hs2-stat-val.neutral { color:${T.navy}; }
        .hs2-stat-lbl { font-size:11px; color:${T.muted}; margin-top:4px; letter-spacing:0.03em; }

        /* ── Buttons ── */
        .hs2-btn-primary {
          padding:11px 24px; font-family:${T.sans}; font-size:13.5px; font-weight:600;
          border:none; border-radius:8px; cursor:pointer; letter-spacing:0.01em;
          background:${T.orange}; color:#fff;
          box-shadow:0 4px 16px rgba(249,115,22,0.28);
          transition:background 0.2s, transform 0.15s, box-shadow 0.2s;
        }
        .hs2-btn-primary:hover { background:${T.orangeDark}; transform:translateY(-1px); box-shadow:0 6px 22px rgba(249,115,22,0.36); }
        .hs2-btn-outline {
          padding:11px 22px; font-family:${T.sans}; font-size:13.5px; font-weight:600;
          border:1.5px solid ${T.border}; border-radius:8px; cursor:pointer;
          color:${T.navy}; background:"#000000"; letter-spacing:0.01em;
          transition:all 0.2s;
        }
        .hs2-btn-outline:hover { border-color:${T.navy}; background:${T.navy}; color:#fff; }

        /* ── Info panel (now inside left col) ── */
        .hs2-info-panel {
          margin-top:24px;
          padding-top:20px;
          border-top:1px solid ${T.border};
          display:flex; flex-direction:column; gap:12px;
        }

        /* ── Service badge card ── */
        .hs2-service-card {
          background:${T.white};
          border:1px solid ${T.border};
          border-left:3px solid ${T.teal};
          border-radius:8px;
          padding:12px 16px;
          display:flex; align-items:center; justify-content:space-between;
        }

        /* ── Stat cards ── */
        .hs2-stat-cards { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
        .hs2-stat-card {
          background:${T.white};
          border:1px solid ${T.border};
          border-radius:8px;
          padding:12px 16px;
        }

        /* ── Trust badges ── */
        .hs2-trust-row { display:flex; gap:8px; flex-wrap:wrap; }
        .hs2-trust-badge {
          font-family:${T.sans}; font-size:10.5px; font-weight:600;
          color:${T.teal}; background:${T.tealLight};
          border:1px solid ${T.tealBorder};
          border-radius:4px; padding:4px 10px;
        }

        /* ── Bottom nav bar ── */
        .hs2-nav { display:flex; align-items:center; gap:14px; padding:13px clamp(20px,4vw,40px); border-top:1px solid ${T.border}; background:${T.offWhite}; }
        .hs2-dots { display:flex; gap:5px; flex:1; }
        .hs2-dot { height:3px; border-radius:999px; border:none; cursor:pointer; transition:all 0.32s ease; }
        .hs2-dot.active { background:${T.teal}; }
        .hs2-dot:not(.active) { background:${T.border}; }
        .hs2-nav-label { font-size:11.5px; color:${T.subtle}; white-space:nowrap; letter-spacing:0.04em; }
        .hs2-arrow {
          width:32px; height:32px; border-radius:8px;
          border:1px solid ${T.border}; background:${T.white};
          cursor:pointer; display:flex; align-items:center; justify-content:center;
          font-size:14px; color:${T.navy}; transition:all 0.18s;
        }
        .hs2-arrow:hover { border-color:${T.teal}; color:${T.teal}; background:${T.tealLight}; }

        /* ── Progress bar ── */
        .hs2-progress { height:2.5px; background:${T.borderLight}; overflow:hidden; }
        @keyframes hs2-fill { from{width:0%} to{width:100%} }
        .hs2-progress-fill { height:100%; background:${T.teal}; animation:hs2-fill ${DURATION}ms linear; }

        /* ── Animations ── */
        @keyframes hs2-rise { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
        .hs2-animated { animation:hs2-rise 0.42s cubic-bezier(0.22,1,0.36,1) both; }
      `}</style>

      {/* ── Tab row ── */}
      <div className="hs2-tabs">
        {slides.map((sl, i) => (
          <button
            key={sl.id}
            className={`hs2-tab ${i === active ? "active" : ""}`}
            onClick={() => goTo(i)}
          >
            <span className="hs2-tab-dot" />
            {sl.tag}
          </button>
        ))}
      </div>

      {/* ── Main slide area ── */}
      <div className="hs2-grid">

        {/* ── LEFT: full content + info panel ── */}
        <div className="hs2-content">
          <div key={active} className="hs2-animated">

            {/* Pill */}
            <div className="hs2-pill">
              <span className="hs2-pill-dot" />
              <span className="hs2-pill-text">{s.tag}</span>
            </div>

            {/* Title + subtitle */}
            <h1 className="hs2-title">{s.title}</h1>
            <p className="hs2-sub">{s.sub}</p>
            <p className="hs2-desc">{s.desc}</p>

            {/* ── Info panel — fills the blank space below buttons ── */}
            <div className="hs2-info-panel">

              <div className="hs2-service-card">
                <div>
                  <div style={{ fontFamily: T.sans, fontSize: 10, fontWeight: 700, color: T.subtle, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 3 }}>
                    Current Service
                  </div>
                  <div style={{ fontFamily: T.serif, fontSize: 15, fontWeight: 600, color: T.navy }}>
                    {s.title}
                  </div>
                  <div style={{ fontFamily: T.sans, fontSize: 11, color: T.teal, marginTop: 2, fontWeight: 500 }}>
                    {s.sub}
                  </div>
                </div>
                <button className="hs2-btn-outline" onClick={() => router.push(s.href)}
                  style={{ alignSelf: "center", flexShrink: 0, background: T.orange, color: "#fff", border: "none" }}>
                  Learn More →
                </button>
              </div>

              {/* Two stat cards side by side */}
              <div className="hs2-stat-cards">
                {[s.s1, s.s2].map((st, i) => (
                  <div key={i} className="hs2-stat-card" style={{ borderTop: `3px solid ${i === 0 ? T.teal : T.orange}` }}>
                    <div style={{ fontFamily: T.serif, fontSize: 22, fontWeight: 700, color: i === 0 ? T.teal : T.orange, lineHeight: 1 }}>
                      {st.v}
                    </div>
                    <div style={{ fontFamily: T.sans, fontSize: 11, color: T.muted, marginTop: 4 }}>
                      {st.l}
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="hs2-trust-row">
                {["✓ BIS Approved", "✓ NABL Accredited", "✓ Govt. Recognized"].map((badge) => (
                  <span key={badge} className="hs2-trust-badge">{badge}</span>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* ── RIGHT: full-height image only ── */}
        <div className="hs2-img-col">
          <img
            key={active}
            src={s.img}
            alt={s.title}
            className="hs2-img"
            style={{ opacity: fading ? 0 : 1 }}
          />
          <div className="hs2-img-overlay" />
          <div className="hs2-counter">
            {String(active + 1).padStart(2, "0")}
            <span style={{ color: T.subtle, margin: "0 3px" }}>/</span>
            {String(slides.length).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* ── Bottom nav bar ── */}
      <div className="hs2-nav">
        <div className="hs2-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hs2-dot ${i === active ? "active" : ""}`}
              style={{ width: i === active ? 28 : 12 }}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <span className="hs2-nav-label">
          {s.tag} — {s.sub.split(" ").slice(0, 3).join(" ")}
        </span>
        <div style={{ display: "flex", gap: 5 }}>
          <button className="hs2-arrow" onClick={prev}>←</button>
          <button className="hs2-arrow" onClick={next}>→</button>
        </div>
      </div>

      {/* ── Progress bar ── */}
      <div className="hs2-progress">
        {!paused && <div key={`${active}-${paused}`} className="hs2-progress-fill" />}
      </div>
    </section>
  );
}