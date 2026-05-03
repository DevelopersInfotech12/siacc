"use client";

const stats = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" style={{ display: "block" }}>
        <circle cx="11" cy="10" r="4" fill="#1E88C8" opacity="0.85" />
        <circle cx="21" cy="10" r="4" fill="#1E88C8" opacity="0.5" />
        <path d="M2 26c0-5 4-8 9-8h10c5 0 9 3 9 8" stroke="#1E88C8" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      </svg>
    ),
    value: "12,000+",
    label: "Happy Clients",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" style={{ display: "block" }}>
        <circle cx="16" cy="16" r="13" fill="#1E88C8" opacity="0.12" stroke="#1E88C8" strokeWidth="2" />
        <path d="M10 16l4 4 8-8" stroke="#1E88C8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    value: "1,00,000+",
    label: "Projects Completed",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" style={{ display: "block" }}>
        <circle cx="16" cy="16" r="13" fill="#1E88C8" opacity="0.12" stroke="#1E88C8" strokeWidth="2" />
        <path d="M11 11l10 10M21 11l-10 10" stroke="#1E88C8" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    value: "0%",
    label: "Rejection Rate",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" style={{ display: "block" }}>
        <path d="M16 3C10 3 6 8 6 13c0 8 10 16 10 16s10-8 10-16c0-5-4-10-10-10z" fill="#1E88C8" opacity="0.15" stroke="#1E88C8" strokeWidth="2" />
        <circle cx="16" cy="13" r="3" fill="#1E88C8" />
      </svg>
    ),
    value: "400+",
    label: "Locations Covered",
  },
];

const serif = "'Cormorant Garamond', Georgia, serif";
const sans  = "'Outfit', system-ui, sans-serif";
const teal  = "#1E88C8";
const navy  = "#0D1B2A";
const muted = "#718096";

export default function WhyDecisionHome() {
  return (
    <section
      style={{
        background: "linear-gradient(160deg, #EBF5FB 0%, #F0F7FF 50%, #EBF5FB 100%)",
        padding: "72px 24px",
        fontFamily: sans,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Outfit:wght@400;500;600&display=swap');
        .wdh-card {
          background: #fff;
          border-radius: 16px;
          border: 1px solid rgba(30,136,200,0.10);
          box-shadow: 0 4px 18px rgba(30,136,200,0.07);
          padding: 32px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1 1 0;
          min-width: 0;
          transition: transform 0.22s cubic-bezier(0.4,0,0.2,1), box-shadow 0.22s;
        }
        .wdh-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(30,136,200,0.14);
        }
        .wdh-grid {
          display: flex;
          gap: 16px;
        }
        @media (max-width: 640px) {
          .wdh-grid {
            flex-wrap: wrap;
          }
          .wdh-card {
            flex: 1 1 calc(50% - 8px);
          }
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* ── Heading ── */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <h2 style={{
            fontFamily: serif,
            fontSize: "clamp(2rem, 3.8vw, 3rem)",
            fontWeight: 600,
            color: navy,
            lineHeight: 1.15,
            margin: 0,
          }}>
            Every decision counts,
          </h2>
          <h2 style={{
            fontFamily: serif,
            fontSize: "clamp(2rem, 3.8vw, 3rem)",
            fontWeight: 600,
            color: teal,
            lineHeight: 1.15,
            margin: "4px 0 22px",
          }}>
            Every second matters.
          </h2>

          {/* Decorative triple dash */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <span style={{ display: "inline-block", width: 28, height: 3, borderRadius: 999, background: teal }} />
            <span style={{ display: "inline-block", width: 28, height: 3, borderRadius: 999, background: teal, opacity: 0.4 }} />
            <span style={{ display: "inline-block", width: 28, height: 3, borderRadius: 999, background: teal }} />
          </div>
        </div>

        {/* ── Stat cards ── */}
        <div className="wdh-grid">
          {stats.map((s) => (
            <div key={s.label} className="wdh-card">

              {/* Icon wrapper */}
              <div style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                background: "rgba(30,136,200,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
                flexShrink: 0,
              }}>
                {s.icon}
              </div>

              {/* Value */}
              <div style={{
                fontFamily: serif,
                fontSize: "clamp(1.5rem, 2.4vw, 2.2rem)",
                fontWeight: 700,
                color: teal,
                lineHeight: 1,
                marginBottom: 8,
              }}>
                {s.value}
              </div>

              {/* Label */}
              <div style={{
                fontFamily: sans,
                fontSize: 14,
                fontWeight: 500,
                color: muted,
                lineHeight: 1.4,
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}