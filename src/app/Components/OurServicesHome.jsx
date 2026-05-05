"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

const services = [
  {
    id: "bis-crs-isi",
    title: "BIS CRS & ISI Certification",
    desc: "Mandatory certification for 70+ electronics under CRS and 370+ categories under ISI including steel, cement, electrical goods and LPG cylinders.",
    img: "/images/bis.png",
    href: "/bis",
    tag: "BIS",
    accent: "#1E88C8",
  },
  {
    id: "wpc-eta",
    title: "WPC-ETA Approval",
    desc: "Mandatory for all wireless, Bluetooth, Wi-Fi, Zigbee and RF devices imported or sold in India. Filed via the Saralsanchar portal.",
    img: "/images/wpc.png",
    href: "/wpc",
    tag: "WPC",
    accent: "#1567A0",
  },
  {
    id: "testing",
    title: "Testing & Certification",
    desc: "End-to-end lab testing for product safety, EMC, RF and chemical analysis. 50+ NABL / BIS / TEC accredited partner labs across India.",
    img: "/images/testing.png",
    href: "/testing",
    tag: "Testing",
    accent: "#1E88C8",
  },
  {
    id: "bee",
    title: "BEE Certification",
    desc: "Mandatory BEE star labelling for ACs, refrigerators, washing machines, geysers and fans. Both voluntary and mandatory schemes covered.",
    img: "/images/bee.png",
    href: "/bee",
    tag: "BEE",
    accent: "#F97316",
  },
  {
    id: "iso",
    title: "ISO Certification",
    desc: "ISO 9001, 14001, 45001, 27001, 22000 and more. Globally recognized standards required for government tenders, exports and enterprise contracts.",
    img: "/images/iso.png",
    href: "/iso",
    tag: "ISO",
    accent: "#1567A0",
  },
  {
    id: "epr",
    title: "EPR Registration",
    desc: "Mandatory for producers, importers and brand owners of e-waste, plastic, batteries and tyres under CPCB guidelines. Full compliance support.",
    img: "/images/erp.png",
    href: "/epr",
    tag: "EPR",
    accent: "#F97316",
  },
  {
    id: "tec-mtcte",
    title: "TEC / MTCTE Certification",
    desc: "Mandatory TEC certification for telecom equipment under MTCTE. Covers routers, switches, modems and all telecom network products.",
    img: "/images/tec.png",
    href: "/tec",
    tag: "TEC",
    accent: "#1E88C8",
  },
  {
    id: "lmpc",
    title: "LMPC Registration",
    desc: "Legal Metrology Packaged Commodity registration for importers and manufacturers. Ensures compliance with weight, measure and labelling rules.",
    img: "/images/LMPC.png",
    href: "/lmpc",
    tag: "LMPC",
    accent: "#1567A0",
  },
  {
    id: "cdsco",
    title: "CDSCO / Drug License",
    desc: "CDSCO registration and drug license for medical devices, pharmaceuticals and cosmetics. Covers import, manufacture and sale approvals.",
    img: "/images/cdsco.png",
    href: "/cdsco",
    tag: "CDSCO",
    accent: "#F97316",
  },
];

const CARDS_VISIBLE = 3;
const CARD_WIDTH = 320;
const CARD_GAP = 28;
const STEP = CARD_WIDTH + CARD_GAP;

export default function OurServicesHome() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const autoRef = useRef(null);

  const maxIndex = services.length - CARDS_VISIBLE;

  const goTo = useCallback(
    (index) => {
      if (animating) return;
      const clamped = Math.max(0, Math.min(index, maxIndex));
      if (clamped === current) return;
      setAnimating(true);
      setCurrent(clamped);
      setTimeout(() => setAnimating(false), 480);
    },
    [animating, current, maxIndex]
  );

  const startAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCurrent((c) => (c + 1 > maxIndex ? 0 : c + 1));
    }, 3800);
  }, [maxIndex]);

  useEffect(() => {
    startAuto();
    return () => clearInterval(autoRef.current);
  }, [startAuto]);

  const handlePrev = () => { goTo(current - 1); startAuto(); };
  const handleNext = () => { goTo(current + 1); startAuto(); };
  const handleDot  = (i) => { goTo(i); startAuto(); };

  const translateX = -(current * STEP);

  return (
    <section style={{
      background: "linear-gradient(160deg, #f0f7ff 0%, #f4f8fc 50%, #eaf3fb 100%)",
      fontFamily: "'Outfit', system-ui, sans-serif",
      padding: "80px 0 88px",
      overflow: "hidden",
      position: "relative",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');

        /* ── Background decorative shapes ── */
        .oss-bg-circle1 {
          position: absolute; top: -120px; right: -80px;
          width: 420px; height: 420px; border-radius: 50%;
          background: radial-gradient(circle, rgba(30,136,200,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .oss-bg-circle2 {
          position: absolute; bottom: -60px; left: -100px;
          width: 360px; height: 360px; border-radius: 50%;
          background: radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .oss-bg-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(30,136,200,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(30,136,200,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        /* ── Header label ── */
        .oss-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 6px 18px; border-radius: 999px;
          background: rgba(30,136,200,0.08);
          border: 1px solid rgba(30,136,200,0.18);
          margin-bottom: 20px;
        }
        .oss-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #1E88C8; flex-shrink: 0;
          box-shadow: 0 0 0 3px rgba(30,136,200,0.2);
        }
        .oss-eyebrow-text {
          font-size: 11px; font-weight: 700; color: #1E88C8;
          letter-spacing: 0.14em; text-transform: uppercase;
        }

        /* ── Card ── */
        .oss-card {
          flex-shrink: 0;
          width: ${CARD_WIDTH}px;
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(30,136,200,0.1);
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s ease, border-color 0.3s ease;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 24px rgba(13,27,42,0.06), 0 1px 4px rgba(13,27,42,0.04);
          position: relative;
        }
        .oss-card:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 24px 64px rgba(30,136,200,0.18), 0 4px 16px rgba(13,27,42,0.08);
          border-color: rgba(30,136,200,0.3);
        }

        /* ── Image area ── */
        .oss-card-img-wrap {
          position: relative;
          height: 210px;
          flex-shrink: 0;
          overflow: hidden;
        }
        .oss-card-img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform 0.5s cubic-bezier(.22,1,.36,1);
        }
        .oss-card:hover .oss-card-img { transform: scale(1.08); }

        /* rich dark gradient */
        .oss-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to top,
            rgba(5,20,45,0.82) 0%,
            rgba(5,20,45,0.3) 45%,
            rgba(5,20,45,0.05) 100%
          );
        }

        /* diagonal shine on hover */
        .oss-card-shine {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%);
          opacity: 0; transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .oss-card:hover .oss-card-shine { opacity: 1; }

        /* ── Tag badge on image ── */
        .oss-tag {
          position: absolute; top: 14px; left: 14px;
          padding: 4px 12px; border-radius: 6px;
          font-size: 10px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #fff;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.25);
        }

        /* ── Watermark ── */
        .oss-logo-mark {
          position: absolute; top: 12px; right: 14px;
          display: flex; align-items: center; gap: 5px; opacity: 0.75;
          transition: opacity 0.2s;
        }
        .oss-card:hover .oss-logo-mark { opacity: 1; }
        .oss-logo-mark svg { width: 18px; height: 18px; }
        .oss-logo-mark span {
          font-size: 8.5px; font-weight: 700; color: #fff;
          letter-spacing: 0.05em; line-height: 1.3; text-transform: uppercase;
        }

        /* ── Title overlay on image ── */
        .oss-img-title {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 18px 18px 16px;
          font-size: 16px; font-weight: 600; color: #fff;
          font-family: 'Outfit', system-ui, sans-serif;
          line-height: 1.3;
          text-shadow: 0 1px 8px rgba(0,0,0,0.4);
        }

        /* ── Card body ── */
        .oss-card-body {
          padding: 20px 22px 24px;
          flex: 1; display: flex; flex-direction: column;
          position: relative;
        }

        /* thin top accent line */
        .oss-card-body::before {
          content: '';
          position: absolute; top: 0; left: 22px; right: 22px;
          height: 1px; background: linear-gradient(90deg, transparent, rgba(30,136,200,0.15), transparent);
        }

        .oss-card-title {
          font-size: 16.5px; font-weight: 600; color: #0D1B2A;
          margin: 0 0 10px;
          font-family: 'Outfit', system-ui, sans-serif;
          line-height: 1.35;
          transition: color 0.2s;
        }
        .oss-card:hover .oss-card-title { color: #1E88C8; }

        .oss-card-desc {
          font-size: 13.5px; color: #64748b;
          line-height: 1.7; margin: 0 0 20px; flex: 1; font-weight: 400;
        }

        /* ── Footer row: button + arrow ── */
        .oss-card-footer {
          display: flex; align-items: center; justify-content: space-between;
          gap: 12px; margin-top: auto;
        }

        .oss-btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 10px 20px;
          background: #F97316; color: #fff;
          font-size: 11.5px; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          border: none; border-radius: 8px; cursor: pointer;
          font-family: 'Outfit', system-ui, sans-serif;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 14px rgba(249,115,22,0.28);
        }
        .oss-btn:hover {
          background: #ea6a0a; transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(249,115,22,0.38);
        }
        .oss-btn svg { width: 12px; height: 12px; flex-shrink: 0; }

        /* ── Small circular link icon ── */
        .oss-link-icon {
          width: 36px; height: 36px; border-radius: 50%;
          border: 1.5px solid rgba(30,136,200,0.2);
          background: rgba(30,136,200,0.05);
          display: flex; align-items: center; justify-content: center;
          color: #1E88C8; flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .oss-card:hover .oss-link-icon {
          background: #1E88C8; border-color: #1E88C8; color: #fff;
          transform: rotate(45deg);
        }

        /* ── Nav arrows ── */
        .oss-arrow {
          width: 46px; height: 46px; border-radius: 50%;
          border: 1.5px solid rgba(30,136,200,0.3);
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(8px);
          color: #1E88C8; display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, border-color 0.2s,
                      transform 0.2s, box-shadow 0.2s;
          flex-shrink: 0;
          box-shadow: 0 2px 12px rgba(30,136,200,0.1);
        }
        .oss-arrow:hover:not(:disabled) {
          background: #1E88C8; color: #fff; border-color: #1E88C8;
          transform: scale(1.08);
          box-shadow: 0 6px 20px rgba(30,136,200,0.3);
        }
        .oss-arrow:disabled { opacity: 0.25; cursor: default; }

        /* ── Dots ── */
        .oss-dot {
          height: 4px; border-radius: 999px;
          background: rgba(30,136,200,0.2);
          border: none; cursor: pointer;
          transition: background 0.28s, width 0.28s; padding: 0;
        }
        .oss-dot.active { background: #1E88C8; }

        /* ── Card entry animation ── */
        @keyframes oss-rise {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .oss-card { animation: oss-rise 0.5s cubic-bezier(.22,1,.36,1) both; }
      `}</style>

      {/* Background decoration */}
      <div className="oss-bg-grid" />
      <div className="oss-bg-circle1" />
      <div className="oss-bg-circle2" />

      {/* ── Header ── */}
      <div style={{ textAlign: "center", padding: "0 24px 52px", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
          <div className="oss-eyebrow">
            <span className="oss-eyebrow-dot" />
            <span className="oss-eyebrow-text">What We Offer</span>
          </div>
        </div>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(36px, 5vw, 52px)",
          fontWeight: 700,
          color: "#0a6daa",
          margin: "0 0 6px",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
        }}>
          Our Services
        </h2>

        {/* Underline accent */}
        <div style={{ display: "flex", justifyContent: "center", gap: 6, margin: "14px auto 20px" }}>
          <div style={{ width: 32, height: 3, borderRadius: 99, background: "#F97316" }} />
          <div style={{ width: 8,  height: 3, borderRadius: 99, background: "#1E88C8" }} />
          <div style={{ width: 4,  height: 3, borderRadius: 99, background: "rgba(30,136,200,0.3)" }} />
        </div>

        <p style={{
          fontSize: 16, color: "rgba(0,0,0,0.6)",
          maxWidth: 580, margin: "0 auto",
          lineHeight: 1.8, fontWeight: 400,
          fontFamily: "'Outfit', system-ui, sans-serif",
        }}>
          At Siacc Services, we offer a complete range of certification and compliance services tailored to
          meet the needs of manufacturers, importers, and brand owners.
        </p>
      </div>

      {/* ── Slider wrapper ── */}
      <div style={{
        maxWidth: CARDS_VISIBLE * CARD_WIDTH + (CARDS_VISIBLE - 1) * CARD_GAP + 120,
        margin: "0 auto",
        padding: "0 60px",
        position: "relative",
      }}>
        {/* Viewport */}
        <div style={{ overflow: "hidden", borderRadius: 12, padding: "12px 0 16px" }}>
          {/* Track */}
          <div style={{
            display: "flex",
            gap: CARD_GAP,
            transform: `translateX(${translateX}px)`,
            transition: "transform 0.48s cubic-bezier(0.4, 0, 0.2, 1)",
          }}>
            {services.map((s, idx) => (
              <div
                key={s.id}
                className="oss-card"
                style={{ animationDelay: `${idx * 0.06}s` }}
                onMouseEnter={() => setHoveredCard(s.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => router.push(s.href)}
              >
                {/* Image */}
                <div className="oss-card-img-wrap">
                  <img src={s.img} alt={s.title} className="oss-card-img" loading="lazy" />
                  <div className="oss-img-overlay" />
                  <div className="oss-card-shine" />

                  {/* Tag badge */}
                  <div className="oss-tag" style={{ background: `${s.accent}cc` }}>
                    {s.tag}
                  </div>

                  {/* Watermark */}
                  <div className="oss-logo-mark">
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="10,2 18,7 18,13 10,18 2,13 2,7" stroke="#fff" strokeWidth="1.5" fill="none" />
                      <text x="10" y="13" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="700">SS</text>
                    </svg>
                    <span>SS Global<br />Services</span>
                  </div>

                  {/* Title over image */}
                  <div className="oss-img-title">{s.title}</div>
                </div>

                {/* Body */}
                <div className="oss-card-body">
                  <h3 className="oss-card-title">{s.title}</h3>
                  <p className="oss-card-desc">{s.desc}</p>
                  <div className="oss-card-footer">
                    <button
                      className="oss-btn"
                      onClick={(e) => { e.stopPropagation(); router.push(s.href); }}
                    >
                      Read More
                      <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <div className="oss-link-icon">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prev arrow */}
        <button
          className="oss-arrow"
          onClick={handlePrev}
          disabled={current === 0}
          aria-label="Previous"
          style={{ position: "absolute", left: 0, top: "45%", transform: "translateY(-50%)" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Next arrow */}
        <button
          className="oss-arrow"
          onClick={handleNext}
          disabled={current === maxIndex}
          aria-label="Next"
          style={{ position: "absolute", right: 0, top: "45%", transform: "translateY(-50%)" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* ── Dot indicators ── */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 6, marginTop: 36 }}>
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            className={`oss-dot${current === i ? " active" : ""}`}
            style={{ width: current === i ? 28 : 10 }}
            onClick={() => handleDot(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Slide counter ── */}
      <div style={{ textAlign: "center", marginTop: 16 }}>
        <span style={{
          fontFamily: "'Outfit', system-ui, sans-serif",
          fontSize: 12, fontWeight: 600, color: "rgba(30,136,200,0.6)",
          letterSpacing: "0.08em",
        }}>
          {String(current + 1).padStart(2, "0")} / {String(maxIndex + 1).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}