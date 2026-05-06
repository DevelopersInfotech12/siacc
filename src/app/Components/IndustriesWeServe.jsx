"use client";
import { useRef, useEffect } from "react";

const T = {
  teal: "#1E88C8",
  titleblue: "#0a6daa",
  tealLight: "#EBF5F5",
  tealGhost: "#F4FAFA",
  slate: "#0D1B2A",
  body: "#2D3748",
  muted: "#718096",
  border: "#E8E3DA",
  white: "#FFFFFF",
  cream: "#FAF8F4",
  serif: "'Cormorant Garamond', 'Georgia', serif",
  sans: "'Outfit', 'system-ui', sans-serif",
  poppins: "'Poppins', 'system-ui', sans-serif",
};

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

const industries = [
  { icon: "💻", name: "Electronics & IT",     sub: "BIS CRS, ISI, WPC" },
  { icon: "📡", name: "Telecom & IoT",         sub: "TEC, WPC-ETA, BIS" },
  { icon: "💊", name: "Pharmaceuticals",       sub: "CDSCO, GMP, WHO" },
  { icon: "🛒", name: "FMCG & Packaged Goods", sub: "FSSAI, BIS, Legal Metrology" },
  { icon: "🚗", name: "Automotive",            sub: "AIS, CMVR, BIS" },
  { icon: "🏥", name: "Medical Devices",       sub: "CDSCO MDR, ISO 13485" },
  { icon: "👕", name: "Textiles",              sub: "BIS, GOTS, Oeko-Tex" },
  { icon: "🍽️", name: "Food & Beverages",     sub: "FSSAI, APEDA, AGMARK" },
  { icon: "⚗️", name: "Chemicals",            sub: "BIS, REACH, GHS" },
  { icon: "🏗️", name: "Construction",         sub: "BIS, BEE, Green Rating" },
  { icon: "🧸", name: "Toys & Furniture",      sub: "BIS, IS 9873, BIFMA" },
  { icon: "⚡", name: "Energy & Power",        sub: "BEE, BIS, MNRE" },
];

function SectionLabel({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
      <div style={{ width: 24, height: 1.5, background: T.teal }} />
      <span style={{ fontFamily: T.poppins, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.teal }}>
        {children}
      </span>
    </div>
  );
}

function IndustryCard({ item }) {
  return (
    <div className="ind-card" style={{
      background: T.white,
      border: `1px solid ${T.border}`,
      borderRadius: 10,
      padding: "16px 14px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      cursor: "default",
      transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
    }}>
      <div className="ind-icon" style={{
        width: 36, height: 36, borderRadius: 8,
        background: T.tealLight,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 16, flexShrink: 0,
        transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
      }}>
        {item.icon}
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontFamily: T.poppins, fontSize: 15, fontWeight: 500, color: T.slate, lineHeight: 1.3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {item.name}
        </div>
        <div style={{ fontFamily: T.poppins, fontSize: 13, fontWeight: 400, color: "#000000a4", marginTop: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {item.sub}
        </div>
      </div>
    </div>
  );
}

export default function IndustriesWeServe() {
  const headerRef = useReveal();
  const gridRef   = useReveal({ stagger: true, baseDelay: 50 });

  return (
    <section style={{
      background: T.tealLight,
      borderTop: "1px solid #C8DEDE",
      borderBottom: "1px solid #C8DEDE",
      padding: "clamp(48px,7vw,96px) clamp(16px,4vw,48px)",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        .ind-card:hover {
          border-color: ${T.teal} !important;
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(30,136,200,0.10);
        }
        .ind-card:hover .ind-icon {
          background: ${T.teal} !important;
        }
        .ind-view-all { transition: color 0.2s; }
        .ind-view-all:hover { color: ${T.titleblue} !important; }

        /* ── Grid: 4-col desktop → 3-col tablet → 2-col mobile → 1-col xs ── */
        .ind-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }
        @media(max-width:1000px){ .ind-grid { grid-template-columns: repeat(3, 1fr); } }
        @media(max-width:680px) { .ind-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; } }
        @media(max-width:380px) { .ind-grid { grid-template-columns: 1fr; } }

        /* ── Header: stacks on mobile ── */
        .ind-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 20px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }
        @media(max-width:600px) {
          .ind-header { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* ── Header ── */}
        <div className="ind-header reveal" ref={headerRef}>
          <div>
            <SectionLabel>Industries We Serve</SectionLabel>
            <h2 style={{
              fontFamily: T.poppins,
              fontSize: "clamp(1.6rem,3vw,2.4rem)",
              fontWeight: 700,
              color: T.titleblue,
              letterSpacing: "-0.01em",
              marginBottom: 10,
              lineHeight: 1.15,
            }}>
              Trusted Across Every Sector
            </h2>
            <p style={{
              fontFamily: T.poppins,
              fontSize: 14,
              fontWeight: 500,
              color: "#0000009d",
              lineHeight: 1.75,
              maxWidth: 520,
            }}>
              From consumer electronics to medical devices — we navigate India's most complex regulatory frameworks across all major industries.
            </p>
          </div>
          <a
            href="/services"
            className="ind-view-all"
            style={{
              fontFamily: T.poppins,
              fontSize: 13,
              fontWeight: 500,
              color: T.teal,
              textDecoration: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            View all services →
          </a>
        </div>

        {/* ── Cards grid ── */}
        <div className="ind-grid" ref={gridRef}>
          {industries.map((item, i) => (
            <div key={item.name} className={`reveal d${Math.min(i, 8)}`}>
              <IndustryCard item={item} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}