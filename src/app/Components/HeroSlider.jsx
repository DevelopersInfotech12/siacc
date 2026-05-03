"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

/* ── Design tokens ── */
const T = {
  teal:        "#1E88C8",
  tealDark:    "#1567A0",
  tealLight:   "#EBF5FB",
  tealBorder:  "#B5D4F4",
  orange:      "#F97316",
  orangeDark:  "#EA6A0A",
  navy:        "#0D1B2A",
  body:        "#2D3748",
  muted:       "#718096",
  subtle:      "#A0AEC0",
  border:      "#E8E3DA",
  borderLight: "#F0ECE5",
  white:       "#FFFFFF",
  offWhite:    "#F9FAFB",
  cream:       "#FAF8F4",
  serif:       "'Cormorant Garamond', Georgia, serif",
  sans:        "'Outfit', system-ui, sans-serif",
};

const slides = [
  {
    id:    "bis-crs",
    tag:   "BIS — CRS",
    title: "BIS CRS Registration",
    sub:   "Compulsory Registration Scheme",
    desc:  "Mandatory for 70+ electronic products — mobiles, laptops, LED lights, chargers, power banks. We handle lab coordination, filing & follow-up.",
    s1:    { v: "70+",    l: "Product categories" },
    s2:    { v: "4–8 wk", l: "Typical timeline" },
    href:  "/bis",
    img:   "/images/TEC.png",
  },
  {
    id:    "bis-isi",
    tag:   "BIS — ISI",
    title: "BIS ISI Mark Certification",
    sub:   "Mandatory Quality Certification",
    desc:  "Required for 370+ categories including steel, cement, electrical goods and LPG cylinders. Full end-to-end support from lab to license.",
    s1:    { v: "370+",    l: "Product categories" },
    s2:    { v: "8–12 wk", l: "Typical timeline" },
    href:  "/bis",
    img:   "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=900&q=85&fit=crop",
  },
  {
    id:    "wpc",
    tag:   "WPC — ETA",
    title: "WPC-ETA Approval",
    sub:   "Wireless Planning & Coordination",
    desc:  "Mandatory for all wireless, Bluetooth, Wi-Fi, Zigbee and RF devices imported into India. Filed via the Saralsanchar portal.",
    s1:    { v: "5 yrs",  l: "Approval validity" },
    s2:    { v: "4–8 wk", l: "Typical timeline" },
    href:  "/wpc",
    img:   "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=85&fit=crop",
  },
  {
    id:    "testing",
    tag:   "Testing",
    title: "Testing & Certification",
    sub:   "NABL / BIS / TEC Accredited Labs",
    desc:  "End-to-end lab testing for all certifications — product safety, EMC, RF and chemical. 50+ partner labs across India for fastest results.",
    s1:    { v: "50+",    l: "Lab partners" },
    s2:    { v: "1–8 wk", l: "Turnaround time" },
    href:  "/testing",
    img:   "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=85&fit=crop",
  },
  {
    id:    "bee",
    tag:   "BEE",
    title: "BEE Star Rating",
    sub:   "Bureau of Energy Efficiency",
    desc:  "Mandatory star labelling for ACs, refrigerators, washing machines, geysers and fans. Voluntary and mandatory schemes both covered.",
    s1:    { v: "20+",    l: "Product categories" },
    s2:    { v: "4–6 wk", l: "Typical timeline" },
    href:  "/bee",
    img:   "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85&fit=crop",
  },
  {
    id:    "iso",
    tag:   "ISO",
    title: "ISO Certification",
    sub:   "International Organization for Standardization",
    desc:  "ISO 9001, 14001, 45001, 27001, 22000 and more. Globally recognized, required for government tenders, exports and enterprise contracts.",
    s1:    { v: "3 yrs",  l: "Certificate validity" },
    s2:    { v: "2–4 mo", l: "Typical timeline" },
    href:  "/iso",
    img:   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=85&fit=crop",
  },
];

const DURATION = 5500;

export default function HeroSlider() {
  const router = useRouter();
  const [active, setActive]   = useState(0);
  const [fading, setFading]   = useState(false);
  const [paused, setPaused]   = useState(false);
  const timerRef              = useRef(null);
  const progressRef           = useRef(null);

  /* ── Navigation ── */
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

  /* ── Auto-play ── */
  const restartTimer = () => {
    clearInterval(timerRef.current);
    if (!paused) timerRef.current = setInterval(() => goTo(active + 1), DURATION);
  };

  useEffect(() => {
    restartTimer();
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

        /* ── Tab row ── */
        .hs2-tabs { display:flex; overflow-x:auto; scrollbar-width:none; background:${T.offWhite}; border-bottom:1px solid ${T.border}; }
        .hs2-tabs::-webkit-scrollbar { display:none; }
        .hs2-tab {
          padding:13px 20px; font-family:${T.sans}; font-size:12.5px; font-weight:500;
          border:none; border-bottom:2px solid transparent; background:transparent;
          cursor:pointer; white-space:nowrap; color:${T.muted};
          display:flex; align-items:center; gap:7px;
          transition:color 0.2s, border-color 0.2s;
          letter-spacing:0.01em;
        }
        .hs2-tab.active { color:${T.teal}; border-bottom:2px solid ${T.teal}; }
        .hs2-tab:hover:not(.active) { color:${T.body}; background:${T.white}; }
        .hs2-tab-dot { width:6px; height:6px; border-radius:50%; background:currentColor; opacity:0.5; transition:opacity 0.2s; flex-shrink:0; }
        .hs2-tab.active .hs2-tab-dot { opacity:1; background:${T.teal}; }

        /* ── Main grid ── */
        .hs2-grid { display:grid; grid-template-columns:1fr 1fr; min-height:400px; }
        @media(max-width:860px){ .hs2-grid { grid-template-columns:1fr; } }

        /* ── Content col ── */
        .hs2-content { padding:clamp(36px,5vw,64px) clamp(24px,4vw,56px); display:flex; flex-direction:column; justify-content:center; }

        /* ── Image col ── */
        .hs2-img-col { position:relative; overflow:hidden; min-height:320px; }
        @media(max-width:860px){ .hs2-img-col { display:none; } }
        .hs2-img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center; display:block; transition:opacity 0.45s ease; }
        .hs2-img-overlay { position:absolute; inset:0; background:linear-gradient(to right, rgba(249,250,251,0.22) 0%, transparent 40%); }

        /* ── Pill ── */
        .hs2-pill { display:inline-flex; align-items:center; gap:7px; padding:5px 13px; border-radius:999px; border:1px solid ${T.tealBorder}; background:${T.tealLight}; margin-bottom:18px; width:fit-content; }
        .hs2-pill-dot { width:6px; height:6px; border-radius:50%; background:${T.teal}; flex-shrink:0; }
        .hs2-pill-text { font-size:11px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:${T.teal}; }

        /* ── Slide typography ── */
        .hs2-title { font-family:${T.serif}; font-size:clamp(1.9rem,3.5vw,3rem); font-weight:600; color:${T.navy}; line-height:1.1; letter-spacing:-0.01em; margin-bottom:6px; }
        .hs2-sub { font-size:11.5px; font-weight:600; color:${T.teal}; letter-spacing:0.09em; text-transform:uppercase; margin-bottom:16px; }
        .hs2-desc { font-size:14px; color:${T.muted}; line-height:1.85; margin-bottom:26px; max-width:420px; }

        /* ── Stats ── */
        .hs2-stats { display:flex; gap:10px; margin-bottom:28px; flex-wrap:wrap; }
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
          color:${T.navy}; background:transparent; letter-spacing:0.01em;
          transition:all 0.2s;
        }
        .hs2-btn-outline:hover { border-color:${T.navy}; background:${T.navy}; color:#fff; }

        /* ── Floating badge ── */
        .hs2-badge {
          position:absolute; bottom:24px; left:24px;
          background:rgba(255,255,255,0.97); border:1px solid ${T.border};
          border-radius:10px; padding:14px 18px; min-width:160px;
          box-shadow:0 8px 28px rgba(0,0,0,0.09);
          backdrop-filter:blur(10px);
        }
        .hs2-badge-label { font-size:10px; font-weight:600; color:${T.subtle}; text-transform:uppercase; letter-spacing:0.1em; margin-bottom:5px; }
        .hs2-badge-title { font-family:${T.serif}; font-size:15px; font-weight:600; color:${T.navy}; line-height:1.2; }
        .hs2-badge-sub { font-size:11px; color:${T.teal}; margin-top:3px; font-weight:500; }

        /* ── Counter ── */
        .hs2-counter {
          position:absolute; top:20px; right:20px;
          background:rgba(255,255,255,0.95); border:1px solid ${T.border};
          border-radius:8px; padding:7px 14px;
          font-family:${T.sans}; font-size:12px; font-weight:600; color:${T.navy};
          letter-spacing:0.08em; backdrop-filter:blur(8px);
        }

        /* ── Bottom nav ── */
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

        /* ── Content transition ── */
        .hs2-fade { transition:opacity 0.32s ease; }
        .hs2-fade.hidden { opacity:0; pointer-events:none; }

        /* ── Slide-in animation ── */
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

        {/* Left — content */}
        <div className="hs2-content">
          <div key={active} className="hs2-animated">

            {/* Service pill */}
            <div className="hs2-pill">
              <span className="hs2-pill-dot" />
              <span className="hs2-pill-text">{s.tag}</span>
            </div>

            {/* Title + subtitle */}
            <h1 className="hs2-title">{s.title}</h1>
            <p className="hs2-sub">{s.sub}</p>
            <p className="hs2-desc">{s.desc}</p>

            {/* Stats */}
            <div className="hs2-stats">
              <div className="hs2-stat">
                <div className="hs2-stat-val accent">{s.s1.v}</div>
                <div className="hs2-stat-lbl">{s.s1.l}</div>
              </div>
              <div className="hs2-stat">
                <div className="hs2-stat-val neutral">{s.s2.v}</div>
                <div className="hs2-stat-lbl">{s.s2.l}</div>
              </div>
            </div>

            {/* CTA buttons */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button className="hs2-btn-primary" onClick={() => router.push("/contact")}>
                Get Free Consultation
              </button>
              <button className="hs2-btn-outline" onClick={() => router.push(s.href)}>
                Learn More →
              </button>
            </div>
          </div>
        </div>

        {/* Right — image */}
        <div className="hs2-img-col">
          <img
            key={active}
            src={s.img}
            alt={s.title}
            className="hs2-img"
            style={{ opacity: fading ? 0 : 1 }}
          />
          <div className="hs2-img-overlay" />

          {/* Floating service badge */}
          <div className="hs2-badge">
            <div className="hs2-badge-label">Current service</div>
            <div className="hs2-badge-title">{s.title}</div>
            <div className="hs2-badge-sub">{s.sub}</div>
          </div>

          {/* Slide counter */}
          <div className="hs2-counter">
            {String(active + 1).padStart(2, "0")}
            <span style={{ color: T.subtle, margin: "0 3px" }}>/</span>
            {String(slides.length).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* ── Bottom nav bar ── */}
      <div className="hs2-nav">
        {/* Progress dots */}
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

        {/* Slide label */}
        <span className="hs2-nav-label">
          {s.tag} — {s.sub.split(" ").slice(0, 3).join(" ")}
        </span>

        {/* Arrow controls */}
        <div style={{ display: "flex", gap: 5 }}>
          <button className="hs2-arrow" onClick={prev}>←</button>
          <button className="hs2-arrow" onClick={next}>→</button>
        </div>
      </div>

      {/* ── Auto-play progress bar ── */}
      <div className="hs2-progress">
        {!paused && <div key={`${active}-${paused}`} className="hs2-progress-fill" />}
      </div>
    </section>
  );
}