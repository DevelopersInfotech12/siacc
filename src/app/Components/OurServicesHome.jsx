"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

const services = [
  {
    id: "plastic-epr",
    title: "EPR Registration for Plastic Waste",
    desc: "Register for Plastic Waste EPR easily. Comply with CB/CPCB norms and plastic recycling rules.",
    img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80&fit=crop",
    href: "/epr/plastic",
    tag: "EPR",
  },
  {
    id: "battery-epr",
    title: "EPR Registration for Battery Waste",
    desc: "Comply with Battery Waste Management Rules. Get EPR Registration for lithium, lead, and used batteries.",
    img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80&fit=crop",
    href: "/epr/battery",
    tag: "EPR",
  },
  {
    id: "tyre-epr",
    title: "EPR Registration for Tyre Waste",
    desc: "Effortless EPR for End-of-Life Tyres. Ensure MoEFCC compliance and receive CPCB authorization.",
    img: "https://images.unsplash.com/photo-1558618047-f4e90f8591aa?w=800&q=80&fit=crop",
    href: "/epr/tyre",
    tag: "EPR",
  },
  {
    id: "ewaste-epr",
    title: "EPR Registration for E-Waste",
    desc: "Manage electronic waste compliantly. Register under E-Waste Management Rules with CPCB authorization.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&fit=crop",
    href: "/epr/ewaste",
    tag: "EPR",
  },
  {
    id: "bis-crs",
    title: "BIS CRS Registration",
    desc: "Mandatory certification for 70+ electronics — mobiles, laptops, chargers, power banks and more.",
    img: "https://images.unsplash.com/photo-1581092921461-39d9a338b0cb?w=800&q=80&fit=crop",
    href: "/bis",
    tag: "BIS",
  },
  {
    id: "wpc-eta",
    title: "WPC-ETA Approval",
    desc: "Get WPC ETA Approval for wireless devices. Import legally and quickly meet India's RF device norms.",
    img: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=800&q=80&fit=crop",
    href: "/wpc",
    tag: "WPC",
  },
];

const CARDS_VISIBLE = 3;
const CARD_WIDTH = 308;
const CARD_GAP = 24;
const STEP = CARD_WIDTH + CARD_GAP;

export default function OurServicesHome() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const autoRef = useRef(null);

  const maxIndex = services.length - CARDS_VISIBLE; // 0..3

  const goTo = useCallback(
    (index) => {
      if (animating) return;
      const clamped = Math.max(0, Math.min(index, maxIndex));
      if (clamped === current) return;
      setAnimating(true);
      setCurrent(clamped);
      setTimeout(() => setAnimating(false), 420);
    },
    [animating, current, maxIndex]
  );

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  // Auto-play
  useEffect(() => {
    autoRef.current = setInterval(() => {
      setCurrent((c) => {
        const next = c + 1;
        return next > maxIndex ? 0 : next;
      });
    }, 3500);
    return () => clearInterval(autoRef.current);
  }, [maxIndex]);

  const resetAuto = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCurrent((c) => {
        const next = c + 1;
        return next > maxIndex ? 0 : next;
      });
    }, 3500);
  };

  const handlePrev = () => { prev(); resetAuto(); };
  const handleNext = () => { next(); resetAuto(); };
  const handleDot = (i) => { goTo(i); resetAuto(); };

  const translateX = -(current * STEP);

  return (
    <section
      style={{
        background: "#f4f8fc",
        fontFamily: "'Outfit', system-ui, sans-serif",
        padding: "64px 0 72px",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Outfit:wght@400;500;600&display=swap');

        .oss-label-line {
          display: inline-block;
          width: 44px;
          height: 1.5px;
          background: #1E88C8;
          vertical-align: middle;
          margin: 0 10px;
        }

        /* Card */
        .oss-card {
          flex-shrink: 0;
          width: ${CARD_WIDTH}px;
          background: #fff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(0,0,0,0.07);
          border: 1px solid rgba(30,136,200,0.08);
          cursor: pointer;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
          display: flex;
          flex-direction: column;
        }
        .oss-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 36px rgba(30,136,200,0.15);
        }

        /* Image area */
        .oss-card-img-wrap {
          position: relative;
          height: 190px;
          flex-shrink: 0;
          overflow: hidden;
        }
        .oss-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .oss-card:hover .oss-card-img { transform: scale(1.05); }

        /* Dark gradient over image */
        .oss-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(5,25,45,0.72) 0%, rgba(5,25,45,0.18) 55%, transparent 100%);
        }

        /* Logo watermark on image */
        .oss-logo-mark {
          position: absolute;
          top: 10px;
          right: 12px;
          display: flex;
          align-items: center;
          gap: 5px;
          opacity: 0.85;
        }
        .oss-logo-mark svg { width: 18px; height: 18px; }
        .oss-logo-mark span {
          font-size: 9px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.05em;
          line-height: 1.2;
          text-transform: uppercase;
        }

        /* Title on image */
        .oss-img-title {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 14px 16px;
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          font-family: 'Outfit', system-ui, sans-serif;
          text-align: center;
          text-shadow: 0 1px 6px rgba(0,0,0,0.35);
          line-height: 1.3;
        }

        /* Body */
        .oss-card-body {
          padding: 18px 18px 22px;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .oss-card-title {
          font-size: 17px;
          font-weight: 600;
          color: #1E88C8;
          margin: 0 0 10px;
          font-family: 'Outfit', system-ui, sans-serif;
          line-height: 1.35;
        }
        .oss-card-desc {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.65;
          margin: 0 0 18px;
          flex: 1;
          font-weight: 400;
        }

        /* Read More button */
        .oss-btn {
          display: inline-block;
          padding: 10px 28px;
          background: #F97316;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-family: 'Outfit', system-ui, sans-serif;
          transition: background 0.2s, transform 0.15s;
          margin-top: auto;
        }
        .oss-btn:hover { background: #1567A0; transform: translateY(-1px); }

        /* Nav arrow buttons */
        .oss-arrow {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1.5px solid #1E88C8;
          background: #fff;
          color: #1E88C8;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.18s, color 0.18s, opacity 0.18s;
          flex-shrink: 0;
        }
        .oss-arrow:hover:not(:disabled) { background: #1E88C8; color: #fff; }
        .oss-arrow:disabled { opacity: 0.3; cursor: default; }

        /* Dots */
        .oss-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #c8dded;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          padding: 0;
        }
        .oss-dot.active {
          background: #1E88C8;
          transform: scale(1.3);
        }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: "center", padding: "0 24px 44px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
          <span className="oss-label-line" />
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#1E88C8",
              letterSpacing: "0.13em",
              textTransform: "uppercase",
              fontFamily: "'Outfit', system-ui, sans-serif",
            }}
          >
            What We Offer
          </span>
          <span className="oss-label-line" />
        </div>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 44,
            fontWeight: 700,
            color: "#0a6daa",
            margin: "0 0 10px",
            letterSpacing: "-0.01em",
          }}
        >
          Our Services
        </h2>
        <div
          style={{
            width: 44,
            height: 3,
            borderRadius: 99,
            background: "#1E88C8",
            margin: "0 auto 18px",
          }}
        />
        <p
          style={{
            fontSize: 16,
            // color: "#4a5568",
            color: "#000000a4",
            maxWidth: 600,
            margin: "0 auto",
            lineHeight: 1.75,
            fontWeight: 400,
            fontFamily: "'Outfit', system-ui, sans-serif",
          }}
        >
          At Siacc Services, we offer a complete range of certification and compliance services tailored to
          meet the needs of manufacturers, importers, and brand owners. 
        </p>
      </div>

      {/* Slider */}
      <div
        style={{
          maxWidth: CARDS_VISIBLE * CARD_WIDTH + (CARDS_VISIBLE - 1) * CARD_GAP + 96,
          margin: "0 auto",
          padding: "0 48px",
          position: "relative",
        }}
      >
        {/* Viewport */}
        <div style={{ overflow: "hidden", borderRadius: 8 }}>
          {/* Track */}
          <div
            style={{
              display: "flex",
              gap: CARD_GAP,
              transform: `translateX(${translateX}px)`,
              transition: "transform 0.42s cubic-bezier(0.4, 0, 0.2, 1)",
              paddingBottom: 8,
              paddingTop: 8,
            }}
          >
            {services.map((s) => (
              <div
                key={s.id}
                className="oss-card"
                onClick={() => router.push(s.href)}
              >
                {/* Image */}
                <div className="oss-card-img-wrap">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="oss-card-img"
                    loading="lazy"
                  />
                  <div className="oss-img-overlay" />

                  {/* Watermark logo */}
                  <div className="oss-logo-mark">
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="10,2 18,7 18,13 10,18 2,13 2,7" stroke="#fff" strokeWidth="1.5" fill="none" />
                      <text x="10" y="13" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="700">SS</text>
                    </svg>
                    <span>SS Global<br />Services</span>
                  </div>
                </div>

                {/* Body */}
                <div className="oss-card-body ">
                  <h3 className="oss-card-title">{s.title}</h3>
                  <p className="oss-card-desc">{s.desc}</p>
                  <button
                    className="oss-btn "
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(s.href);
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prev arrow — left outside viewport */}
        <button
          className="oss-arrow"
          onClick={handlePrev}
          disabled={current === 0}
          aria-label="Previous"
          style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-60%)" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Next arrow — right outside viewport */}
        <button
          className="oss-arrow"
          onClick={handleNext}
          disabled={current === maxIndex}
          aria-label="Next"
          style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-60%)" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 8,
          marginTop: 28,
        }}
      >
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            className={`oss-dot${current === i ? " active" : ""}`}
            onClick={() => handleDot(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}