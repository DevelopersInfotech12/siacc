"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

/* ══════════════════════════════════════════════
   THEME TOKENS (mirrored from HomeScreen)
══════════════════════════════════════════════ */
const T = {
  teal: "#1E88C8",
  titleblue: "#0a6daa",
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
  orange: "#F97316",
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
const steps = [
  {
    n: "01",
    title: "Free Consultation",
    desc: "We assess your product and advise on the exact certification path needed.",
    icon: "💬",
  },
  {
    n: "02",
    title: "Documentation",
    desc: "Our experts prepare every document and lab test required for your file.",
    icon: "📄",
  },
  {
    n: "03",
    title: "Filing",
    desc: "We submit the complete, error-free application with the regulatory body.",
    icon: "📤",
  },
  {
    n: "04",
    title: "Certificate",
    desc: "We track and follow up until your certificate is issued and delivered.",
    icon: "🎓",
  },
];

/* ══════════════════════════════════════════════
   SUB-COMPONENTS
══════════════════════════════════════════════ */
function SectionLabel({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      <div style={{ width: 28, height: 1.5, background: T.teal }} />
      <span
        style={{
          fontFamily: T.sans,
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: T.teal,
        }}
      >
        {children}
      </span>
    </div>
  );
}

function StepCard({ step, index, isLast }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "0 20px",
        flex: 1,
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Connector line (hidden on last) */}
      {!isLast && (
        <div
          style={{
            position: "absolute",
            top: 28,
            left: "calc(50% + 32px)",
            right: "calc(-50% + 32px)",
            height: 2,
            background: T.border,
            zIndex: 0,
          }}
        >
          <div
            style={{
              width: hov ? "100%" : "0%",
              height: "100%",
              background: T.teal,
              transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)",
            }}
          />
        </div>
      )}

      {/* Icon circle */}
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: hov ? T.teal : T.tealLight,
          border: `2px solid ${hov ? T.teal : T.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
          cursor: "default",
          transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
          transform: hov ? "translateY(-4px) scale(1.08)" : "translateY(0) scale(1)",
          boxShadow: hov ? `0 12px 28px rgba(30,136,200,0.22)` : "none",
          position: "relative",
          zIndex: 2,
        }}
      >
        <span style={{ fontSize: 22 }}>{step.icon}</span>

        {/* Step number badge */}
        <div
          style={{
            position: "absolute",
            top: -6,
            right: -6,
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: T.orange,
            color: T.white,
            fontFamily: T.sans,
            fontSize: 10,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `2px solid ${T.white}`,
          }}
        >
          {index + 1}
        </div>
      </div>

      {/* Step label */}
      <div
        style={{
          fontFamily: T.sans,
          fontSize: 10.5,
          fontWeight: 700,
          color: T.teal,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginBottom: 8,
        }}
      >
        Step {step.n}
      </div>

      <h3
        style={{
          fontFamily: T.serif,
          fontSize: 20,
          color: T.slate,
          marginBottom: 10,
          fontWeight: 700,
          lineHeight: 1.2,
        }}
      >
        {step.title}
      </h3>

      <p
        style={{
          fontFamily: T.sans,
          fontSize: 14,
          color: T.muted,
          lineHeight: 1.75,
          maxWidth: 200,
          margin: "0 auto",
        }}
      >
        {step.desc}
      </p>
    </div>
  );
}

/* ══════════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════════ */
export default function HowItWorks() {
  const router = useRouter();
  const stepsRef = useReveal({ stagger: true, baseDelay: 110 });
  const headerRef = useReveal();
  const bottomRef = useReveal();

  return (
    <section
      style={{
        background: T.white,
        padding: "clamp(64px,8vw,104px) clamp(16px,5vw,56px)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
        .hiw-steps-wrap {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 0;
          position: relative;
        }
        .hiw-bottom-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        @media (max-width: 760px) {
          .hiw-steps-wrap {
            flex-direction: column;
            gap: 40px;
            align-items: center;
          }
          .hiw-bottom-card {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* ── Header ── */}
        <div
          className="reveal"
          ref={headerRef}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 4 }}>
            <SectionLabel>Our Process</SectionLabel>
          </div>
          <h2
            style={{
              fontFamily: T.serif,
              fontSize: "clamp(2rem,3.2vw,2.9rem)",
              color: T.titleblue,
              fontWeight: 700,
              letterSpacing: "-0.01em",
              marginBottom: 12,
            }}
          >
            How It Works
          </h2>
          <p
            style={{
              fontFamily: T.sans,
              color: T.muted,
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.75,
              fontSize: 14.5,
            }}
          >
            A simple, transparent 4-step process — from first enquiry to
            certificate in hand.
          </p>
        </div>

        {/* ── Steps ── */}
        <div
          className="hiw-steps-wrap"
          ref={stepsRef}
          style={{ marginBottom: 52 }}
        >
          {steps.map((step, i) => (
            <div
              key={step.n}
              className={`reveal d${i}`}
              style={{ flex: 1, width: "100%" }}
            >
              <StepCard step={step} index={i} isLast={i === steps.length - 1} />
            </div>
          ))}
        </div>

        {/* ── Bottom trust bar ── */}
        <div
          className="reveal"
          ref={bottomRef}
          style={{
            background: T.cream,
            border: `1px solid ${T.border}`,
            borderLeft: `4px solid ${T.teal}`,
            borderRadius: 10,
            padding: "26px 36px",
          }}
        >
          <div className="hiw-bottom-card">
            {/* Left: trust message */}
            <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: T.tealLight,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  flexShrink: 0,
                }}
              >
                ✅
              </div>
              <div>
                <div
                  style={{
                    fontFamily: T.sans,
                    fontSize: 14.5,
                    fontWeight: 600,
                    color: T.slate,
                    marginBottom: 3,
                  }}
                >
                  Most certifications completed in 15–30 days
                </div>
                <div
                  style={{
                    fontFamily: T.sans,
                    fontSize: 13.5,
                    color: T.muted,
                    lineHeight: 1.6,
                  }}
                >
                  Dedicated manager assigned from day one. 98% first-attempt
                  success rate.
                </div>
              </div>
            </div>

            {/* Right: CTA */}
            <div style={{ display: "flex", gap: 10, flexShrink: 0, flexWrap: "wrap" }}>
              <button
                onClick={() => router.push("/contact")}
                onMouseEnter={e => (e.currentTarget.style.background = T.teal)}
                onMouseLeave={e => (e.currentTarget.style.background = T.orange)}
                style={{
                  padding: "13px 30px",
                  fontFamily: T.sans,
                  fontSize: 13.5,
                  fontWeight: 600,
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                  background: T.orange,
                  color: T.white,
                  letterSpacing: "0.02em",
                  transition: "background 0.22s cubic-bezier(0.4,0,0.2,1)",
                  whiteSpace: "nowrap",
                }}
              >
                Get Free Consultation
              </button>
              <a
                href="tel:+919540190334"
                onMouseEnter={e => (e.currentTarget.style.borderColor = T.teal)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = T.border)}
                style={{
                  padding: "12px 22px",
                  fontFamily: T.sans,
                  fontSize: 13.5,
                  fontWeight: 500,
                  border: `1.5px solid ${T.border}`,
                  borderRadius: 6,
                  color: T.slate,
                  background: T.white,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "border-color 0.22s",
                  whiteSpace: "nowrap",
                }}
              >
                📞 +91-9540190334
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}