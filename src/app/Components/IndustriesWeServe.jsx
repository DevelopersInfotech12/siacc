"use client";
import { useRef, useEffect } from "react";

/* ══════════════════════════════════════════════
   THEME TOKENS
══════════════════════════════════════════════ */
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
const industries = [
  { icon: "💻", name: "Electronics & IT",         sub: "BIS CRS, ISI, WPC" },
  { icon: "📡", name: "Telecom & IoT",             sub: "TEC, WPC-ETA, BIS" },
  { icon: "💊", name: "Pharmaceuticals",           sub: "CDSCO, GMP, WHO" },
  { icon: "🛒", name: "FMCG & Packaged Goods",     sub: "FSSAI, BIS, Legal Metrology" },
  { icon: "🚗", name: "Automotive",                sub: "AIS, CMVR, BIS" },
  { icon: "🏥", name: "Medical Devices",           sub: "CDSCO MDR, ISO 13485" },
  { icon: "👕", name: "Textiles",                  sub: "BIS, GOTS, Oeko-Tex" },
  { icon: "🍽️", name: "Food & Beverages",         sub: "FSSAI, APEDA, AGMARK" },
  { icon: "⚗️", name: "Chemicals",                sub: "BIS, REACH, GHS" },
  { icon: "🏗️", name: "Construction",             sub: "BIS, BEE, Green Rating" },
  { icon: "🧸", name: "Toys & Furniture",          sub: "BIS, IS 9873, BIFMA" },
  { icon: "⚡", name: "Energy & Power",            sub: "BEE, BIS, MNRE" },
];

/* ══════════════════════════════════════════════
   SUB-COMPONENTS
══════════════════════════════════════════════ */
function SectionLabel({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
      <div style={{ width: 24, height: 1.5, background: T.teal }} />
      <span style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.teal }}>
        {children}
      </span>
    </div>
  );
}

function IndustryCard({ item }) {
  return (
    <div
      className="ind-card"
      style={{
        background: T.white,
        border: `1px solid ${T.border}`,
        borderRadius: 10,
        padding: "20px 18px",
        display: "flex",
        alignItems: "center",
        gap: 14,
        cursor: "default",
        transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <div className="ind-icon" style={{
        width: 38, height: 38, borderRadius: 8,
        background: T.tealLight,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 17, flexShrink: 0,
        transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
      }}>
        {item.icon}
      </div>
      <div>
        <div style={{ fontFamily: T.sans, fontSize: 15, fontWeight: 600, color: T.paradark, lineHeight: 1.3 }}>
          {item.name}
        </div>
        <div style={{ fontFamily: T.sans, fontSize: 11, color: T.para, marginTop: 2 }}>
          {item.sub}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════════ */
export default function IndustriesWeServe() {
  const headerRef = useReveal();
  const gridRef = useReveal({ stagger: true, baseDelay: 50 });

  return (
    <section style={{
      background: T.tealLight,
      borderTop: "1px solid #C8DEDE",
      borderBottom: "1px solid #C8DEDE",
      padding: "clamp(64px,8vw,104px) clamp(16px,5vw,56px)",
    }}>
      <style>{`
        .ind-card:hover {
          border-color: ${T.teal} !important;
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(30,136,200,0.10);
        }
        .ind-card:hover .ind-icon {
          background: ${T.teal} !important;
        }
        .ind-view-all:hover { color: ${T.titleblue} !important; }
        @media(max-width:900px){ .ind-grid{ grid-template-columns: repeat(3,1fr) !important; } }
        @media(max-width:640px){ .ind-grid{ grid-template-columns: repeat(2,1fr) !important; } }
        @media(max-width:380px){ .ind-grid{ grid-template-columns: 1fr !important; } }
        @media(max-width:700px){ .ind-header{ flex-direction: column !important; align-items: flex-start !important; } }
      `}</style>

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* ── Header row ── */}
        <div
          className="ind-header reveal"
          ref={headerRef}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 24,
            marginBottom: 44,
            flexWrap: "wrap",
          }}
        >
          <div>
            <SectionLabel>Industries We Serve</SectionLabel>
            <h2 style={{
              fontFamily: T.serif,
              fontSize: "clamp(1.8rem,3vw,2.6rem)",
              fontWeight: 700,
              color: T.titleblue,
              letterSpacing: "-0.01em",
              marginBottom: 8,
              lineHeight: 1.1,
            }}>
              Trusted Across Every Sector
            </h2>
            <p style={{
              fontFamily: T.sans,
              fontSize: 15,
              color: T.para,
              lineHeight: 1.7,
              maxWidth: 500,
            }}>
              From consumer electronics to medical devices — we navigate India's most complex regulatory frameworks across all major industries.
            </p>
          </div>
          <a
            href="/services"
            className="ind-view-all"
            style={{
              fontFamily: T.sans,
              fontSize: 13,
              color: T.teal,
              fontWeight: 600,
              textDecoration: "none",
              whiteSpace: "nowrap",
              paddingBottom: 4,
              transition: "color 0.2s",
            }}
          >
            View all services →
          </a>
        </div>

        {/* ── Grid ── */}
        <div
          className="ind-grid"
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 12,
          }}
        >
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