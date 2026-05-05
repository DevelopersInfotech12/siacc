"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../animations.css";

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
  ctaBand: "#EBF5FB",
  ctaBandBorder: "#C8DFF0",
  orange: "#F97316",
  orangeDark: "#EA6A0A",
  serif: "'Cormorant Garamond', 'Georgia', serif",
  sans: "'Outfit', 'system-ui', sans-serif",
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

const services = [
  "BIS Certification", "EPR Registration", "WPC-ETA Approval", "TEC / MTCTE",
  "BEE Registration", "LMPC Registration", "ISO Certification", "CDSCO / Drug License", "Other",
];

const faqs = [
  { q: "How long does BIS certification take?", a: "Typically 4–12 weeks depending on the product category, lab testing schedules, and application completeness. We provide faster timelines for most categories." },
  { q: "Do you handle clients across India?", a: "Yes, we serve manufacturers and importers from all states and union territories across India. We provide end-to-end support both in-person and remotely." },
  { q: "What is the consultation fee?", a: "Our initial consultation is completely free. We assess your requirement and give you a clear cost and timeline breakdown before any commitment." },
  { q: "Can you take over my stalled certification?", a: "Absolutely. We regularly take over applications that are stalled or rejected and successfully bring them to completion." },
];

const contactStats = [
  { value: "2 hrs", label: "Response Time", icon: "⚡" },
  { value: "Free", label: "Initial Consultation", icon: "🆓" },
  { value: "Pan", label: "India Coverage", icon: "🇮🇳" },
  { value: "98%", label: "Success Rate", icon: "✅" },
];

export default function ContactScreen() {
  const router = useRouter();

  const heroLeftRef = useReveal();
  const statsRef = useReveal({ stagger: true, baseDelay: 100 });
  const formRef = useReveal();
  const sidebarRef = useReveal({ stagger: true, baseDelay: 100 });
  const officeTtlRef = useReveal();
  const officeRef = useReveal({ stagger: true, baseDelay: 120 });
  const faqTtlRef = useReveal();
  const faqRef = useReveal({ stagger: true, baseDelay: 80 });
  const ctaRef = useReveal();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: T.white, fontFamily: T.sans, color: T.body }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        img { max-width:100%; display:block; }
        a { text-decoration:none; color:inherit; }

        .sl-row { display:flex; align-items:center; gap:12px; margin-bottom:16px; }
        .sl-line { width:28px; height:1.5px; background:${T.teal}; flex-shrink:0; }
        .sl-text { font-family:${T.sans}; font-size:11px; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; color:${T.teal}; }

        /* ── HERO ── */
        .contact-hero-wrap {
          position: relative; overflow: hidden;
          border-bottom: 1px solid ${T.border};
          min-height: 420px;
          display: flex; flex-direction: column; justify-content: center;
        }
        .contact-hero-bg {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover; object-position: center 30%;
          z-index: 0;
        }
        .contact-hero-overlay {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(
            to right,
            rgba(7, 18, 28, 0.88) 0%,
            rgba(7, 18, 28, 0.60) 50%,
            rgba(7, 18, 28, 0.10) 100%
          );
        }

        /* decorative left accent bar */
        .hero-accent-bar {
          position: absolute; left: 0; top: 0; bottom: 0;
          width: 4px;
          background: linear-gradient(to bottom, ${T.orange}, ${T.teal});
          z-index: 3;
        }

        .hero-badge-pill {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.20);
          backdrop-filter: blur(8px);
          border-radius: 4px; padding: 6px 16px; margin-bottom: 22px;
        }
        .hero-badge-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 6px rgba(74,222,128,0.8);
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.6; transform:scale(1.3); }
        }

        .hero-contact-chips {
          display: flex; flex-wrap: wrap; gap: 10px; margin-top: 32px;
        }
        .hero-chip {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.09);
          border: 1px solid rgba(255,255,255,0.16);
          backdrop-filter: blur(6px);
          border-radius: 6px; padding: 9px 16px;
          font-family: ${T.sans}; font-size: 12.5px; font-weight: 500;
          color: rgba(255,255,255,0.90);
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          cursor: default;
          text-decoration: none;
        }
        .hero-chip:hover {
          background: rgba(255,255,255,0.18);
          border-color: rgba(255,255,255,0.35);
          transform: translateY(-2px);
          color: #fff;
        }
        .hero-chip-icon { font-size: 15px; }

        /* ── STATS STRIP ── */
        .stats-strip { display:grid; grid-template-columns:repeat(4,1fr); }
        @media(max-width:640px){ .stats-strip { grid-template-columns:repeat(2,1fr); } }

        /* ── CONTACT MAIN GRID ── */
        .contact-main-grid { display:grid; grid-template-columns:1fr 360px; gap:40px; align-items:flex-start; }
        @media(max-width:1024px){ .contact-main-grid { grid-template-columns:1fr; } }

        .form-card {
          background:${T.white}; border-radius:10px; padding:36px;
          border:1px solid ${T.border};
          box-shadow:0 4px 24px rgba(0,0,0,0.05);
          transition:box-shadow 0.25s;
        }
        .form-card:hover { box-shadow:0 8px 40px rgba(30,136,200,0.08); }
        @media(max-width:480px){ .form-card { padding:20px 16px; } }

        .two-col { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:16px; }
        @media(max-width:540px){ .two-col { grid-template-columns:1fr; } }

        .input-field {
          width:100%; padding:12px 14px;
          border:1.5px solid ${T.border}; border-radius:6px;
          font-size:14px; color:${T.slate}; outline:none;
          background:${T.cream}; font-family:${T.sans};
          transition:border-color 0.2s, background 0.2s;
        }
        .input-field:focus { border-color:${T.teal}; background:${T.white}; }

        .sidebar { display:flex; flex-direction:column; gap:16px; }

        /* ── OFFICE ── */
        .office-split { display:grid; grid-template-columns:340px 1fr; gap:20px; align-items:stretch; }
        @media(max-width:900px){ .office-split { grid-template-columns:1fr; } }
        .office-card {
          background:${T.white}; border-radius:10px; padding:28px;
          border:1px solid ${T.border};
          transition:all 0.25s; display:flex; flex-direction:column; justify-content:space-between;
        }
        .office-card:hover { border-color:${T.teal}; transform:translateY(-3px); box-shadow:0 12px 32px rgba(30,136,200,0.09); }
        .office-image-panel { position:relative; border-radius:10px; overflow:hidden; min-height:380px; }
        @media(max-width:900px){ .office-image-panel { min-height:280px; } }
        .office-stats-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-top:28px; }
        @media(max-width:480px){ .office-stats-grid { grid-template-columns:1fr; gap:10px; margin-top:16px; } }

        /* ── FAQ ── */
        .faq-card {
          background:${T.white}; border-radius:10px; padding:22px 24px;
          border:1px solid ${T.border};
          transition:all 0.22s; margin-bottom:12px;
        }
        .faq-card:hover { border-color:${T.teal}; box-shadow:0 6px 20px rgba(30,136,200,0.08); transform:translateY(-2px); }

        /* ── CTA BAND ── */
        .cta-split { display:grid; grid-template-columns:1fr auto; gap:40px; align-items:center; }
        @media(max-width:720px){ .cta-split { grid-template-columns:1fr; gap:28px; } }

        .sec { padding:clamp(64px,8vw,104px) clamp(16px,5vw,56px); }
        .inner { max-width:1280px; margin:0 auto; }
      `}</style>

      <Navbar />

      {/* ══════════════════════════════════════
          HERO — Contact Us
      ══════════════════════════════════════ */}
      <section className="contact-hero-wrap">

        {/* Left accent bar */}
        <div className="hero-accent-bar" />

        {/* ── NEW hero image: professional contact / customer support ── */}
        <img
          src="/images/contactbanner.jpg"
          alt="Contact us background"
          className="contact-hero-bg"
        />

        {/* Dark gradient overlay — deeper on left for legibility */}
        <div className="contact-hero-overlay" />

        {/* Content */}
        <div style={{
          position: "relative", zIndex: 2,
          maxWidth: 1280, margin: "0 auto", width: "100%",
          padding: "clamp(48px,7vw,88px) clamp(20px,4vw,60px)",
        }}>

          {/* ── Live badge pill ── */}
          <div ref={heroLeftRef} className="reveal-left">
            <div className="hero-badge-pill">
              <span className="hero-badge-dot" />
              <span style={{
                fontFamily: T.sans, fontSize: 10.5, fontWeight: 700,
                color: "#fff", letterSpacing: "0.14em", textTransform: "uppercase",
              }}>
                Contact Us — We Respond in 2 Hours
              </span>
            </div>

            {/* ── Heading ── */}
            <h1 style={{
              fontFamily: T.serif,
              fontSize: "clamp(2.6rem,5.2vw,4.2rem)",
              fontWeight: 700, lineHeight: 1.04,
              marginBottom: 20, letterSpacing: "-0.01em",
              color: "#fff", maxWidth: 640,
            }}>
              We're Here to{" "}
              <span style={{ color: T.orange }}>Help You</span>{" "}
              Succeed
            </h1>
          </div>
        </div>

        {/* Bottom teal accent line */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: T.teal, opacity: 0.6, zIndex: 2 }} />
      </section>

      {/* ══════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════ */}
      <section style={{ background: T.teal }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="stats-strip" ref={statsRef}>
            {contactStats.map((s, i) => (
              <div key={s.label} className={`reveal d${i}`} style={{
                textAlign: "center", padding: "36px 16px",
                borderRight: i < contactStats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}>
                <div style={{ fontSize: 20, marginBottom: 6 }}>{s.icon}</div>
                <div style={{ fontFamily: T.serif, fontSize: "clamp(2rem,2.8vw,2.8rem)", color: "#fff", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.01em" }}>{s.value}</div>
                <div style={{ fontFamily: T.sans, fontSize: 12, color: "rgba(255,255,255,0.80)", marginTop: 8, letterSpacing: "0.04em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT FORM + SIDEBAR
      ══════════════════════════════════════ */}
      <section id="contact-form" className="sec" style={{ background: T.white }}>
        <div className="inner">
          <div className="contact-main-grid">

            {/* ── Form Card ── */}
            <div className="reveal form-card" ref={formRef}>

              {/* Form banner — NEW contact image */}
              <div style={{ position: "relative", borderRadius: 8, overflow: "hidden", height: 140, marginBottom: 28 }}>
                <img
                  src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=900&q=80&fit=crop"
                  alt="Talk to our team"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(14,128,128,0.88) 0%, rgba(30,136,200,0.60) 60%, rgba(235,245,251,0.25) 100%)" }} />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 24px" }}>
                  <div>
                    <div style={{ fontFamily: T.serif, fontSize: "clamp(1rem,2vw,1.3rem)", color: "#fff", fontWeight: 700, marginBottom: 4 }}>
                      Talk to a Regulatory Expert
                    </div>
                    <p style={{ fontFamily: T.sans, color: "rgba(255,255,255,0.78)", fontSize: 12 }}>
                      We respond within 2 business hours. No spam, ever.
                    </p>
                  </div>
                </div>
              </div>

              {/* Name & Company */}
              <div className="two-col">
                {[
                  { label: "Full Name *", type: "text", placeholder: "Enter Your Full Name" },
                  { label: "Company Name", type: "text", placeholder: "Enter Your Company Name" },
                ].map(f => (
                  <div key={f.label}>
                    <label style={{ display: "block", fontFamily: T.sans, fontSize: 13, fontWeight: 600, color: T.slate, marginBottom: 6 }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} className="input-field" />
                  </div>
                ))}
              </div>

              {/* Phone & Email */}
              <div className="two-col">
                {[
                  { label: "Phone Number *", type: "tel", placeholder: "Enter Your Phone Number" },
                  { label: "Email Address *", type: "email", placeholder: "Enter Your Email Address" },
                ].map(f => (
                  <div key={f.label}>
                    <label style={{ display: "block", fontFamily: T.sans, fontSize: 13, fontWeight: 600, color: T.slate, marginBottom: 6 }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} className="input-field" />
                  </div>
                ))}
              </div>

              {/* Service */}
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontFamily: T.sans, fontSize: 13, fontWeight: 600, color: T.slate, marginBottom: 6 }}>Service Required *</label>
                <select className="input-field">
                  <option value="">Select a service</option>
                  {services.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>

              {/* Description */}
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontFamily: T.sans, fontSize: 13, fontWeight: 600, color: T.slate, marginBottom: 6 }}>Product / Business Description *</label>
                <textarea rows={4} placeholder="Briefly describe your product and what certification you're looking for..." className="input-field" style={{ resize: "vertical" }} />
              </div>

              {/* Source */}
              <div style={{ marginBottom: 28 }}>
                <label style={{ display: "block", fontFamily: T.sans, fontSize: 13, fontWeight: 600, color: T.slate, marginBottom: 6 }}>How did you hear about us?</label>
                <select className="input-field">
                  <option value="">Select an option</option>
                  {["Google Search", "LinkedIn", "Referral", "Trade Show", "Other"].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>

              <button
                style={{
                  width: "100%", padding: "14px", background: T.orange, color: T.white,
                  fontFamily: T.sans, fontWeight: 600, borderRadius: 6, border: "none",
                  fontSize: 14.5, cursor: "pointer", letterSpacing: "0.02em",
                  boxShadow: "0 4px 16px rgba(249,115,22,0.28)",
                  transition: "background 0.2s, transform 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = T.teal; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = T.orange; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Submit Enquiry →
              </button>
              <p style={{ fontFamily: T.sans, fontSize: 12, color: T.subtle, textAlign: "center", marginTop: 10 }}>
                We respond within 2 business hours. No spam, ever.
              </p>
            </div>

            {/* ── Sidebar ── */}
            <div className="sidebar" ref={sidebarRef}>

              {/* Quick Contact */}
              <div className="reveal d0" style={{ background: T.ctaBand, border: `1px solid ${T.ctaBandBorder}`, borderRadius: 10, padding: 28 }}>
                <div className="sl-row" style={{ marginBottom: 20 }}><div className="sl-line" /><span className="sl-text">Quick Contact</span></div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { icon: "📞", label: "Call Us", value: "+91-9540190334", href: "tel:+919540190334" },
                    { icon: "✉", label: "Email Us", value: "info@siacc.in", href: "mailto:info@siacc.in" },
                    { icon: "💬", label: "WhatsApp", value: "+91-9540190334", href: "https://wa.me/919540190334" },
                  ].map(item => (
                    <a key={item.label} href={item.href} style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none" }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: 8,
                        backgroundColor: T.tealLight, border: `1px solid ${T.ctaBandBorder}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 18, flexShrink: 0,
                      }}>{item.icon}</div>
                      <div>
                        <div style={{ fontFamily: T.sans, fontSize: 10.5, color: T.teal, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>{item.label}</div>
                        <div style={{ fontFamily: T.sans, fontSize: 14, color: T.slate, fontWeight: 500, marginTop: 2 }}>{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="reveal d1" style={{ background: T.white, borderRadius: 10, padding: 24, border: `1px solid ${T.border}` }}>
                <div className="sl-row" style={{ marginBottom: 16 }}><div className="sl-line" /><span className="sl-text">Business Hours</span></div>
                {[
                  { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
                  { day: "Saturday", time: "10:00 AM – 4:00 PM" },
                  { day: "Sunday", time: "Closed" },
                ].map((h, i, arr) => (
                  <div key={h.day} style={{
                    display: "flex", justifyContent: "space-between",
                    fontFamily: T.sans, fontSize: 13, padding: "10px 0",
                    borderBottom: i < arr.length - 1 ? `1px solid ${T.border}` : "none",
                  }}>
                    <span style={{ color: T.muted }}>{h.day}</span>
                    <span style={{ color: h.time === "Closed" ? "#ef4444" : T.slate, fontWeight: 600 }}>{h.time}</span>
                  </div>
                ))}
              </div>

              {/* Urgent card */}
              <div className="reveal d2" style={{ position: "relative", borderRadius: 10, overflow: "hidden" }}>
                <img
                  src="https://images.unsplash.com/photo-1568219557405-376e23e4f7cf?w=600&q=80&fit=crop"
                  alt="Urgent compliance"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, rgba(14,128,128,0.94) 0%, rgba(30,136,200,0.90) 100%)` }} />
                <div style={{ position: "relative", zIndex: 1, padding: 24 }}>
                  <div style={{ fontSize: 22, marginBottom: 10 }}>⚡</div>
                  <h3 style={{ fontFamily: T.serif, fontSize: 16, color: T.white, marginBottom: 8, fontWeight: 700 }}>Urgent Compliance Need?</h3>
                  <p style={{ fontFamily: T.sans, fontSize: 13, color: "rgba(255,255,255,0.88)", lineHeight: 1.65, marginBottom: 16 }}>
                    Facing a regulatory deadline or port hold? We have an emergency response team available 24/7.
                  </p>
                  <a href="tel:+919540190334" style={{
                    display: "block", textAlign: "center", padding: "11px",
                    backgroundColor: T.white, color: T.teal,
                    borderRadius: 6, fontSize: 13, fontWeight: 700,
                    fontFamily: T.sans,
                  }}>Call Emergency Line →</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          OFFICE
      ══════════════════════════════════════ */}
      <section className="sec" style={{ background: T.cream }}>
        <div className="inner">
          <div style={{ textAlign: "center", marginBottom: 48 }} className="reveal" ref={officeTtlRef}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="sl-row"><div className="sl-line" /><span className="sl-text">Our Office</span></div>
            </div>
            <h2 style={{ fontFamily: T.serif, fontSize: "clamp(1.8rem,3.2vw,2.9rem)", color: T.titleblue, fontWeight: 700, letterSpacing: "-0.01em" }}>
              Find Us in New Delhi
            </h2>
          </div>

          <div className="office-split" ref={officeRef}>
            <div className="reveal d0 office-card">
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 9,
                    background: T.tealLight, display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: 22, flexShrink: 0,
                  }}>🏢</div>
                  <div>
                    <div style={{ fontFamily: T.serif, fontSize: 20, color: T.slate, fontWeight: 700 }}>New Delhi</div>
                    <div style={{ fontFamily: T.sans, fontSize: 12, color: T.teal, fontWeight: 600 }}>Regional Office</div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    { icon: "📍", val: "House no. 211, Ground Floor, Pocket 9, North West New Delhi – 110086" },
                    { icon: "📞", val: "+91-9540190334" },
                    { icon: "✉", val: "info@siacc.in" },
                    { icon: "🕐", val: "Mon–Sat: 9AM – 6PM" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <span style={{ flexShrink: 0, fontSize: 16 }}>{item.icon}</span>
                      <span style={{ fontFamily: T.sans, fontSize: 16, color: T.muted, lineHeight: 1.6, textAlign: "justify" }}>{item.val}</span>
                    </div>
                  ))}
                  <div style={{ display: "flex", gap: 12 }}>
                    <span style={{ fontSize: 16 }}>👤</span>
                    <span style={{ fontFamily: T.sans, fontSize: 14, color: T.muted }}>Head: <strong style={{ color: T.slate }}>Yogesh Jawa</strong></span>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 28, paddingTop: 22, borderTop: `1px solid ${T.border}` }}>
                <a href="tel:+919540190334" style={{
                  display: "block", textAlign: "center", padding: "12px",
                  background: T.orange, color: "#fff", borderRadius: 6,
                  fontFamily: T.sans, fontSize: 14, fontWeight: 600,
                  boxShadow: "0 4px 14px rgba(249,115,22,0.28)", marginBottom: 10,
                  transition: "background 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.background = T.teal}
                  onMouseLeave={e => e.currentTarget.style.background = T.orange}
                >📞 Call This Office</a>
                <a
                  href="https://maps.google.com/?q=Pocket+9+North+West+New+Delhi+110086"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "block", textAlign: "center", padding: "12px",
                    border: `1.5px solid ${T.border}`, color: T.slate, borderRadius: 6,
                    fontFamily: T.sans, fontSize: 14, fontWeight: 600,
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = T.teal}
                  onMouseLeave={e => e.currentTarget.style.borderColor = T.border}
                >🗺️ Get Directions</a>
              </div>
            </div>

            <div className="reveal d1 office-image-panel">
              <img
                src="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=85&fit=crop"
                alt="New Delhi"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(14,128,128,0.85) 0%, rgba(30,136,200,0.55) 55%, rgba(235,245,251,0.25) 100%)" }} />
              <div style={{ position: "relative", zIndex: 1, padding: "clamp(24px,4vw,40px)", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: T.tealLight, borderRadius: 4, padding: "5px 14px", marginBottom: 18,
                  }}>
                    <span style={{ fontFamily: T.sans, fontSize: 10.5, fontWeight: 700, color: T.teal, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                      🇮🇳 New Delhi, India
                    </span>
                  </div>
                  <h3 style={{ fontFamily: T.serif, fontSize: "clamp(1.2rem,2.5vw,2rem)", color: "#fff", fontWeight: 700, marginBottom: 12, lineHeight: 1.2 }}>
                    Your Trusted Partner<br />in New Delhi
                  </h3>
                  <p style={{ fontFamily: T.sans, color: "rgba(255,255,255,0.80)", fontSize: "clamp(12px,1.5vw,14px)", lineHeight: 1.8, maxWidth: 420 }}>
                    Based in New Delhi, we provide end-to-end regulatory compliance and certification services across India. Visit our office for a free consultation.
                  </p>
                </div>
                <div className="office-stats-grid">
                  {[
                    { value: "10,000+", label: "Certifications Filed" },
                    { value: "15+ yrs", label: "Industry Experience" },
                    { value: "98%", label: "Success Rate" },
                  ].map(s => (
                    <div key={s.label} style={{
                      background: "rgba(255,255,255,0.13)", border: "1px solid rgba(255,255,255,0.20)",
                      borderRadius: 8, padding: "14px 12px", backdropFilter: "blur(8px)",
                    }}>
                      <div style={{ fontFamily: T.serif, fontSize: "clamp(1rem,2vw,1.4rem)", color: T.amberLight, fontWeight: 700 }}>{s.value}</div>
                      <div style={{ fontFamily: T.sans, fontSize: 11, color: "rgba(255,255,255,0.72)", marginTop: 4, lineHeight: 1.4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQs
      ══════════════════════════════════════ */}
      <section className="sec" style={{ background: T.white }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }} className="reveal" ref={faqTtlRef}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="sl-row"><div className="sl-line" /><span className="sl-text">Common Questions</span></div>
            </div>
            <h2 style={{ fontFamily: T.serif, fontSize: "clamp(1.8rem,3.2vw,2.9rem)", color: T.titleblue, fontWeight: 700, letterSpacing: "-0.01em" }}>
              Frequently Asked
            </h2>
          </div>
          <div ref={faqRef}>
            {faqs.map((faq, i) => (
              <div key={faq.q} className={`faq-card reveal d${i}`}>
                <div style={{ fontFamily: T.serif, fontSize: 20, color: T.slate, marginBottom: 10, fontWeight: 600 }}>Q: {faq.q}</div>
                <div style={{ fontFamily: T.sans, fontSize: 15, color: T.muted, lineHeight: 1.8 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA BAND
      ══════════════════════════════════════ */}
      <section
        className="reveal"
        ref={ctaRef}
        style={{
          background: T.ctaBand,
          borderTop: `1px solid ${T.ctaBandBorder}`,
          borderBottom: `1px solid ${T.ctaBandBorder}`,
          padding: "80px clamp(16px,5vw,56px)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="cta-split">
            <div>
              <div className="sl-row" style={{ marginBottom: 20 }}><div className="sl-line" /><span className="sl-text">Start Today</span></div>
              <h2 style={{ fontFamily: T.serif, fontSize: "clamp(1.9rem,3.2vw,2.9rem)", color: T.titleblue, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: 14 }}>
                Ready to Get Certified?
              </h2>
              <p style={{ fontFamily: T.sans, color: T.muted, fontSize: 16, lineHeight: 1.8 }}>
                Free consultation. Clear timeline. Transparent pricing.<br />Our experts respond within 2 hours.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
              <a
                href="#contact-form"
                style={{
                  padding: "14px 36px", fontFamily: T.sans, fontSize: 14, fontWeight: 600,
                  letterSpacing: "0.02em", border: "none", borderRadius: 6, cursor: "pointer",
                  background: T.orange, color: "#fff", whiteSpace: "nowrap",
                  transition: "background 0.2s", display: "block", textAlign: "center",
                }}
                onMouseEnter={e => e.currentTarget.style.background = T.teal}
                onMouseLeave={e => e.currentTarget.style.background = T.orange}
              >Get Free Consultation</a>
              <a
                href="tel:+919540190334"
                style={{
                  padding: "13px 28px", border: `1.5px solid ${T.border}`,
                  borderRadius: 6, fontFamily: T.sans, fontSize: 14, fontWeight: 500,
                  color: T.slate, display: "flex", alignItems: "center",
                  justifyContent: "center", gap: 8, whiteSpace: "nowrap",
                  background: T.white, transition: "border-color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = T.teal}
                onMouseLeave={e => e.currentTarget.style.borderColor = T.border}
              >📞 +91-9540190334</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}