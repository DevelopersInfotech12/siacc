"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const C = {
  primary:      "#F97316",
  primaryDark:  "#EA6A0A",
  primaryLight: "#FFF3E8",
  primaryBorder:"#FED7AA",
  navy:         "#0C2340",
  bodyText:     "#374151",
  mutedText:    "#6B7280",
  border:       "#E5E7EB",
  white:        "#FFFFFF",
  offWhite:     "#F9FAFB",
  serif:        "'Playfair Display', Georgia, serif",
  sans:         "'DM Sans', system-ui, sans-serif",
};

const slides = [
  {
    id:       "bis-crs",
    tag:      "BIS — CRS",
    tagShort: "Electronics",
    title:    "BIS CRS Registration",
    subtitle: "Compulsory Registration Scheme",
    desc:     "Mandatory certification for 70+ electronic & IT products — laptops, mobiles, LED lights, chargers, power banks, and more sold in India.",
    icon:     "📱",
    href:     "/bis",
    stat1:    { value: "70+",   label: "Product Categories" },
    stat2:    { value: "4–8 wk", label: "Typical Timeline" },
    accentBg: "#FFF3E8",
    accentBorder: "#FED7AA",
    img: "https://images.unsplash.com/photo-1581092921461-39d9a338b0cb?w=900&q=85&fit=crop",
  },
  {
    id:       "bis-isi",
    tag:      "BIS — ISI",
    tagShort: "Manufacturing",
    title:    "BIS ISI Mark Certification",
    subtitle: "Quality Assurance for Indian Market",
    desc:     "Mandatory ISI Mark for 370+ product categories including steel, cement, electrical goods, LPG cylinders, and packaged drinking water.",
    icon:     "🔖",
    href:     "/bis",
    stat1:    { value: "370+",  label: "Product Categories" },
    stat2:    { value: "8–12 wk", label: "Typical Timeline" },
    accentBg: "#FFF3E8",
    accentBorder: "#FED7AA",
    img: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=900&q=85&fit=crop",
  },
  {
    id:       "wpc",
    tag:      "WPC — ETA",
    tagShort: "Wireless",
    title:    "WPC-ETA Approval",
    subtitle: "Wireless Planning & Coordination Wing",
    desc:     "Mandatory Equipment Type Approval for all wireless, Bluetooth, Wi-Fi, Zigbee, and RF devices imported or sold in India.",
    icon:     "📡",
    href:     "/wpc",
    stat1:    { value: "5 yrs",  label: "Approval Validity" },
    stat2:    { value: "4–8 wk", label: "Typical Timeline" },
    accentBg: "#EFF6FF",
    accentBorder: "#BFDBFE",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=85&fit=crop",
  },
  {
    id:       "testing",
    tag:      "Testing",
    tagShort: "Lab Testing",
    title:    "Testing & Certification",
    subtitle: "NABL / BIS / TEC / WPC Accredited Labs",
    desc:     "End-to-end lab testing coordination for all Indian regulatory certifications — product safety, EMC, RF, chemical, and environmental testing.",
    icon:     "🔬",
    href:     "/testing",
    stat1:    { value: "50+",   label: "Lab Partners" },
    stat2:    { value: "1–8 wk", label: "Turnaround" },
    accentBg: "#F0FDF4",
    accentBorder: "#BBF7D0",
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=85&fit=crop",
  },
  {
    id:       "bee",
    tag:      "BEE",
    tagShort: "Energy",
    title:    "BEE Star Rating",
    subtitle: "Bureau of Energy Efficiency",
    desc:     "Mandatory star labelling for ACs, refrigerators, washing machines, geysers, fans, and other energy-consuming appliances sold in India.",
    icon:     "⚡",
    href:     "/bee",
    stat1:    { value: "20+",   label: "Product Categories" },
    stat2:    { value: "4–6 wk", label: "Typical Timeline" },
    accentBg: "#FFFBEB",
    accentBorder: "#FDE68A",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85&fit=crop",
  },
  {
    id:       "iso",
    tag:      "ISO",
    tagShort: "International",
    title:    "ISO Certification",
    subtitle: "International Organization for Standardization",
    desc:     "Globally recognized certifications — ISO 9001, 14001, 45001, 27001, 22000 and more. Valid in 170+ countries, required for tenders and exports.",
    icon:     "🌐",
    href:     "/iso",
    stat1:    { value: "3 yrs",  label: "Certificate Validity" },
    stat2:    { value: "2–4 mo", label: "Typical Timeline" },
    accentBg: "#ECFEFF",
    accentBorder: "#A5F3FC",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=85&fit=crop",
  },
];

export default function HeroSlider() {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next"); // "next" | "prev"
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  const goTo = (index, dir = "next") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setActive(index);
      setAnimating(false);
    }, 380);
  };

  const next = () => goTo((active + 1) % slides.length, "next");
  const prev = () => goTo((active - 1 + slides.length) % slides.length, "prev");

  // Auto-play
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, 4500);
    return () => clearInterval(intervalRef.current);
  }, [active, paused]);

  const slide = slides[active];

  return (
    <section
      style={{ background: C.offWhite, borderBottom: `1px solid ${C.border}`, overflow: "hidden", position: "relative" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <style>{`
        * { box-sizing: border-box; }
        img { max-width: 100%; }

        .hs-grid { display:grid; grid-template-columns:1fr 1fr; min-height:580px; }
        @media(max-width:900px){ .hs-grid { grid-template-columns:1fr; min-height:auto; } }

        .hs-image-col { position:relative; overflow:hidden; min-height:300px; }
        @media(max-width:900px){ .hs-image-col { order:-1; min-height:240px; max-height:300px; } }

        .hs-content { padding:clamp(32px,6vw,64px) clamp(20px,4vw,56px); display:flex; flex-direction:column; justify-content:center; }

        .hs-tag { display:inline-flex; align-items:center; gap:8px; border-radius:999px; padding:6px 16px; font-size:12px; font-weight:700; margin-bottom:18px; }
        .hs-title { font-family:${C.serif}; font-size:clamp(1.6rem,3.5vw,2.8rem); color:${C.navy}; font-weight:900; line-height:1.15; margin-bottom:8px; }
        .hs-subtitle { font-size:13px; font-weight:600; color:${C.primary}; letter-spacing:0.04em; margin-bottom:16px; }
        .hs-desc { font-size:clamp(13px,1.5vw,15px); color:${C.mutedText}; line-height:1.8; margin-bottom:28px; max-width:480px; }
        .hs-stats { display:flex; gap:24px; margin-bottom:28px; flex-wrap:wrap; }
        .hs-stat { padding:12px 20px; background:${C.white}; border-radius:12px; border:1.5px solid ${C.border}; }
        .hs-btns { display:flex; gap:12px; flex-wrap:wrap; }

        .hs-nav { display:flex; align-items:center; gap:16px; padding:16px clamp(20px,4vw,56px); border-top:1px solid ${C.border}; background:${C.white}; }
        .hs-dot-row { display:flex; gap:8px; flex:1; flex-wrap:wrap; }
        .hs-dot { height:4px; border-radius:999px; cursor:pointer; border:none; transition:all 0.35s ease; background:${C.border}; }
        .hs-dot.active { background:${C.primary}; }

        .hs-arrows { display:flex; gap:8px; }
        .hs-arrow { width:38px; height:38px; border-radius:10px; border:1.5px solid ${C.border}; background:${C.white}; cursor:pointer; display:flex; align-items:center; justify-content:center; font-size:16px; transition:all 0.2s; color:${C.navy}; }
        .hs-arrow:hover { border-color:${C.primary}; background:${C.primaryLight}; color:${C.primary}; }

        .hs-slide-count { font-size:12px; color:${C.mutedText}; font-family:${C.sans}; white-space:nowrap; }

        /* Pill tabs */
        .hs-tabs { display:flex; gap:8px; overflow-x:auto; padding:14px clamp(16px,4vw,40px); border-bottom:1px solid ${C.border}; background:${C.white}; scrollbar-width:none; }
        .hs-tabs::-webkit-scrollbar { display:none; }
        .hs-tab { padding:7px 16px; border-radius:999px; border:1.5px solid ${C.border}; background:transparent; font-size:12px; font-weight:600; cursor:pointer; font-family:${C.sans}; color:${C.mutedText}; transition:all 0.2s; white-space:nowrap; flex-shrink:0; }
        .hs-tab.active { background:${C.primary}; border-color:${C.primary}; color:#fff; }
        .hs-tab:hover:not(.active) { border-color:${C.primary}; color:${C.primary}; }

        /* Slide animation */
        .hs-slide-content { transition:opacity 0.35s ease, transform 0.35s ease; }
        .hs-slide-content.exit-next  { opacity:0; transform:translateX(-32px); }
        .hs-slide-content.exit-prev  { opacity:0; transform:translateX(32px); }
        .hs-slide-content.enter      { opacity:1; transform:translateX(0); }
        .hs-img-wrap { transition:opacity 0.4s ease; }
        .hs-img-wrap.fading          { opacity:0; }
        .hs-img-wrap.visible         { opacity:1; }

        /* Progress bar */
        @keyframes hs-progress { from { width:0% } to { width:100% } }
        .hs-progress-bar { height:3px; background:${C.primary}; border-radius:999px; animation: hs-progress 4.5s linear; }
      `}</style>

      {/* ── Service tab pills ── */}
      <div className="hs-tabs">
        {slides.map((s, i) => (
          <button
            key={s.id}
            className={`hs-tab ${i === active ? "active" : ""}`}
            onClick={() => goTo(i, i > active ? "next" : "prev")}
          >
            {s.icon} {s.tag}
          </button>
        ))}
      </div>

      {/* ── Main slide area ── */}
      <div className="hs-grid">

        {/* Left — content */}
        <div className="hs-content">
          <div
            className={`hs-slide-content ${animating ? (direction === "next" ? "exit-next" : "exit-prev") : "enter"}`}
          >
            {/* Tag */}
            <div className="hs-tag" style={{ background: slide.accentBg, border: `1.5px solid ${slide.accentBorder}`, color: C.navy }}>
              <span>{slide.icon}</span>
              <span>{slide.tag}</span>
              <span style={{ padding: "2px 8px", background: C.primary, color: "#fff", borderRadius: 999, fontSize: 10, fontWeight: 700 }}>{slide.tagShort}</span>
            </div>

            {/* Title */}
            <h1 className="hs-title">{slide.title}</h1>
            <p className="hs-subtitle">{slide.subtitle}</p>
            <p className="hs-desc">{slide.desc}</p>

            {/* Stats */}
            <div className="hs-stats">
              <div className="hs-stat">
                <div style={{ fontFamily: C.serif, fontSize: 20, color: C.primary, fontWeight: 900, lineHeight: 1 }}>{slide.stat1.value}</div>
                <div style={{ fontSize: 11, color: C.mutedText, marginTop: 3 }}>{slide.stat1.label}</div>
              </div>
              <div className="hs-stat">
                <div style={{ fontFamily: C.serif, fontSize: 20, color: C.navy, fontWeight: 900, lineHeight: 1 }}>{slide.stat2.value}</div>
                <div style={{ fontSize: 11, color: C.mutedText, marginTop: 3 }}>{slide.stat2.label}</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="hs-btns">
              <button
                onClick={() => router.push("/contact")}
                style={{ padding: "13px 28px", backgroundColor: C.primary, color: "#fff", fontWeight: 700, borderRadius: 12, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans, boxShadow: "0 6px 20px rgba(249,115,22,0.32)" }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = C.primaryDark}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = C.primary}
              >Get Free Consultation</button>
              <button
                onClick={() => router.push(slide.href)}
                style={{ padding: "13px 22px", border: `2px solid ${C.navy}`, color: C.navy, borderRadius: 12, background: "transparent", fontSize: 14, cursor: "pointer", fontWeight: 700, fontFamily: C.sans }}
                onMouseEnter={e => { e.currentTarget.style.background = C.navy; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.navy; }}
              >Learn More →</button>
            </div>
          </div>
        </div>

        {/* Right — image */}
        <div className="hs-image-col">
          <img
            key={slide.id}
            src={slide.img}
            alt={slide.title}
            className={`hs-img-wrap ${animating ? "fading" : "visible"}`}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", position: "absolute", inset: 0 }}
          />
          {/* Light gradient on left edge to blend with content */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(249,250,251,0.15) 0%, transparent 30%)" }} />
          {/* Floating service badge */}
          <div style={{
            position: "absolute", top: 24, right: 24,
            background: "rgba(255,255,255,0.95)", borderRadius: 14, padding: "12px 18px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)", border: `1.5px solid ${slide.accentBorder}`,
            backdropFilter: "blur(8px)"
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: C.mutedText, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Service</div>
            <div style={{ fontFamily: C.serif, fontSize: 16, color: C.navy, fontWeight: 900 }}>{slide.tag}</div>
          </div>
          {/* Slide number */}
          <div style={{ position: "absolute", bottom: 20, right: 24, background: "rgba(255,255,255,0.90)", borderRadius: 10, padding: "6px 14px", fontSize: 12, fontWeight: 700, color: C.navy, backdropFilter: "blur(6px)" }}>
            {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </div>
        </div>

      </div>

      {/* ── Bottom nav bar ── */}
      <div className="hs-nav">
        {/* Progress dots */}
        <div className="hs-dot-row">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hs-dot ${i === active ? "active" : ""}`}
              style={{ width: i === active ? 32 : 16 }}
              onClick={() => goTo(i, i > active ? "next" : "prev")}
            />
          ))}
        </div>

        {/* Slide label */}
        <span className="hs-slide-count">{slide.tag} — {slide.tagShort}</span>

        {/* Arrow controls */}
        <div className="hs-arrows">
          <button className="hs-arrow" onClick={prev}>←</button>
          <button className="hs-arrow" onClick={next}>→</button>
        </div>
      </div>

      {/* ── Auto-play progress bar (resets on each slide) ── */}
      {!paused && (
        <div style={{ height: 3, background: C.border }}>
          <div key={`${active}-${paused}`} className="hs-progress-bar" />
        </div>
      )}
    </section>
  );
}