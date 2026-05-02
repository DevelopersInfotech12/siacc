"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// ── Shared token palette (HomeScreen / BlogScreen / CareerScreen) ────────────
const T = {
  teal: "#1E88C8",
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

const heroTrust = [
  { icon: "⚡", label: "2-Hour Response", desc: "Guaranteed reply within 2 business hours" },
  { icon: "🆓", label: "Free Consultation", desc: "No charges for initial assessment" },
  { icon: "🇮🇳", label: "Pan-India", desc: "Serving businesses across all Indian states" },
  { icon: "✅", label: "98% Success Rate", desc: "Across 10,000+ certifications filed" },
];

const contactStats = [
  { value: "2 hrs", label: "Response Time",        icon: "⚡" },
  { value: "Free",  label: "Initial Consultation",  icon: "🆓" },
  { value: "Pan",   label: "India Coverage",        icon: "🇮🇳" },
  { value: "98%",   label: "Success Rate",          icon: "✅" },
];

export default function ContactScreen() {
  const router = useRouter();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: T.white, fontFamily: T.sans, color: T.body }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        img { max-width:100%; display:block; }
        a { text-decoration:none; color:inherit; }

        /* ── Section label ── */
        .sl-row { display:flex; align-items:center; gap:12px; margin-bottom:16px; }
        .sl-line { width:28px; height:1.5px; background:${T.teal}; flex-shrink:0; }
        .sl-text { font-family:${T.sans}; font-size:11px; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; color:${T.teal}; }

        /* ── Hero (light cream — same as BlogScreen / CareerScreen) ── */
        .contact-hero-wrap {
          background: ${T.cream};
          border-bottom: 1px solid ${T.border};
          position: relative; overflow: hidden;
        }
        .contact-hero-wrap::before {
          content:''; position:absolute; top:-100px; right:-140px;
          width:500px; height:500px;
          background:radial-gradient(circle, rgba(30,136,200,0.11) 0%, transparent 70%);
          border-radius:50%; pointer-events:none;
        }
        .hero-grid { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; }
        @media(max-width:900px){ .hero-grid { grid-template-columns:1fr; gap:40px; } }
        .hero-right { display:block; }
        @media(max-width:900px){ .hero-right { display:none; } }
        .trust-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
        .hero-cta-row { display:flex; flex-wrap:wrap; gap:12px; margin-bottom:32px; }
        .hero-trust-badges { display:flex; flex-wrap:wrap; gap:8px; }

        /* ── Stats strip ── */
        .stats-strip { display:grid; grid-template-columns:repeat(4,1fr); }
        @media(max-width:640px){ .stats-strip { grid-template-columns:repeat(2,1fr); } }

        /* ── Contact main grid ── */
        .contact-main-grid { display:grid; grid-template-columns:1fr 360px; gap:40px; align-items:flex-start; }
        @media(max-width:1024px){ .contact-main-grid { grid-template-columns:1fr; } }

        /* ── Form card ── */
        .form-card {
          background:${T.white}; border-radius:10px; padding:36px;
          border:1px solid ${T.border};
          box-shadow:0 4px 24px rgba(0,0,0,0.05);
        }
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

        /* ── Sidebar ── */
        .sidebar { display:flex; flex-direction:column; gap:16px; }

        /* ── Office section ── */
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
          transition:border-color 0.2s; margin-bottom:12px;
        }
        .faq-card:hover { border-color:${T.teal}; }

        /* ── CTA band ── */
        .cta-split { display:grid; grid-template-columns:1fr auto; gap:40px; align-items:center; }
        @media(max-width:720px){ .cta-split { grid-template-columns:1fr; gap:28px; } }

        /* Section padding */
        .sec { padding:clamp(64px,8vw,104px) clamp(16px,5vw,56px); }
        .inner { max-width:1280px; margin:0 auto; }
      `}</style>

      <Navbar />

      {/* ── HERO (light cream) ── */}
      <section className="contact-hero-wrap">
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(56px,8vw,96px) clamp(16px,4vw,56px)" }}>
          <div className="hero-grid">

            {/* Left */}
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: T.tealLight, borderRadius: 4, padding: "5px 14px", marginBottom: 24,
              }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: T.teal, display: "inline-block" }} />
                <span style={{ fontFamily: T.sans, fontSize: 10.5, fontWeight: 700, color: T.teal, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  Get In Touch
                </span>
              </div>

              <h1 style={{
                fontFamily: T.serif, fontSize: "clamp(2rem,3.8vw,3.4rem)",
                color: T.slate, fontWeight: 700, lineHeight: 1.08,
                marginBottom: 10, letterSpacing: "-0.01em",
              }}>
                Let's Start Your{" "}
                <span style={{ color: T.teal }}>Certification</span>{" "}
                Journey
              </h1>

              <p style={{
                fontFamily: T.sans, fontSize: 12, fontWeight: 600,
                color: T.tealMid, marginBottom: 20,
                letterSpacing: "0.05em", textTransform: "uppercase",
              }}>
                Free Consultation · 2-Hour Response · Pan-India
              </p>

              <p style={{
                fontFamily: T.sans, fontSize: "clamp(13.5px,1.4vw,15px)",
                color: T.muted, lineHeight: 1.9, marginBottom: 32, maxWidth: 460,
              }}>
                Reach out via the form below, call us, or walk into our New Delhi office. Our experts respond within 2 business hours — free of charge for initial consultations.
              </p>

              <div className="hero-cta-row">
                <a href="#contact-form" style={{
                  padding: "13px 32px", fontFamily: T.sans, fontSize: 13.5, fontWeight: 600,
                  letterSpacing: "0.02em", borderRadius: 6, cursor: "pointer",
                  background: T.orange, color: "#fff", border: "none",
                  boxShadow: "0 4px 16px rgba(10,104,104,0.22)",
                  transition: "all 0.22s cubic-bezier(0.4,0,0.2,1)",
                  display: "inline-block",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = T.teal; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = T.orange; e.currentTarget.style.transform = "translateY(0)"; }}
                >Send a Message ↓</a>

                <a href="tel:+919540190334" style={{
                  padding: "12px 28px", fontFamily: T.sans, fontSize: 13.5, fontWeight: 600,
                  letterSpacing: "0.02em", borderRadius: 6, cursor: "pointer",
                  border: `1.5px solid ${T.border}`,
                  color: "#fff", background: T.orange,
                  transition: "all 0.22s cubic-bezier(0.4,0,0.2,1)",
                  display: "inline-block",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = T.teal; e.currentTarget.style.color = T.teal; e.currentTarget.style.background = "transparent"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = T.orange; }}
                >📞 Call Us Now</a>
              </div>

              <div className="hero-trust-badges">
                {["✓ Free Consultation", "✓ 2-Hr Response", "✓ 98% Success Rate", "✓ Pan-India"].map(b => (
                  <span key={b} style={{
                    padding: "6px 14px", border: `1px solid ${T.border}`,
                    borderRadius: 4, fontSize: 12, color: T.muted,
                    background: T.white, fontFamily: T.sans, fontWeight: 500,
                  }}>{b}</span>
                ))}
              </div>
            </div>

            {/* Right — light stat tiles */}
            <div className="hero-right">
              <div style={{ marginBottom: 12 }}>
                <div className="sl-row"><div className="sl-line" /><span className="sl-text">Why Contact Us</span></div>
              </div>
              <div className="trust-grid">
                {heroTrust.map((t, i) => (
                  <div key={t.label} style={{
                    background: T.white, border: `1px solid ${T.border}`,
                    borderTop: `3px solid ${i % 2 === 0 ? T.teal : T.amber}`,
                    borderRadius: 8, padding: "16px 14px",
                    display: "flex", gap: 10, alignItems: "flex-start",
                  }}>
                    <div style={{ fontSize: 20, flexShrink: 0, lineHeight: 1 }}>{t.icon}</div>
                    <div>
                      <div style={{ fontFamily: T.serif, fontSize: 14, color: T.slate, fontWeight: 600, marginBottom: 3 }}>{t.label}</div>
                      <div style={{ fontFamily: T.sans, fontSize: 11, color: T.muted, lineHeight: 1.5 }}>{t.desc}</div>
                    </div>
                  </div>
                ))}
                {/* Office pill spanning 2 cols */}
                <div style={{
                  gridColumn: "span 2",
                  background: T.tealLight, border: `1px solid ${T.ctaBandBorder}`,
                  borderRadius: 8, padding: "12px 16px",
                  display: "flex", alignItems: "center", gap: 12,
                }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>🏢</span>
                  <div>
                    <div style={{ fontFamily: T.sans, fontSize: 13, color: T.slate, fontWeight: 600, marginBottom: 2 }}>Based in New Delhi</div>
                    <div style={{ fontFamily: T.sans, fontSize: 11, color: T.muted }}>North West Delhi · Serving all of India</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom accent line */}
        <div style={{ height: 2, background: T.borderLight }}>
          <div style={{ width: "100%", height: "100%", background: T.teal, opacity: 0.4 }} />
        </div>
      </section>

      {/* ── STATS STRIP — teal bg ── */}
      <section style={{ background: T.teal }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="stats-strip">
            {contactStats.map((s, i) => (
              <div key={s.label} style={{
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

      {/* ── CONTACT FORM + SIDEBAR ── */}
      <section id="contact-form" className="sec" style={{ background: T.white }}>
        <div className="inner">
          <div className="contact-main-grid">

            {/* Form */}
            <div className="form-card">
              {/* Banner inside form */}
              <div style={{ position: "relative", borderRadius: 8, overflow: "hidden", height: 140, marginBottom: 28 }}>
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80&fit=crop"
                  alt="Our team"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%" }}
                />
                {/* Light blue tint overlay */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(14,128,128,0.85) 0%, rgba(30,136,200,0.55) 60%, rgba(235,245,251,0.30) 100%)" }} />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 24px" }}>
                  <div>
                    <div style={{ fontFamily: T.serif, fontSize: "clamp(1rem,2vw,1.3rem)", color: "#fff", fontWeight: 700, marginBottom: 4 }}>Talk to a Regulatory Expert</div>
                    <p style={{ fontFamily: T.sans, color: "rgba(255,255,255,0.78)", fontSize: 12 }}>We respond within 2 business hours. No spam, ever.</p>
                  </div>
                </div>
              </div>

              <div className="two-col">
                {[{ label: "Full Name *", type: "text", placeholder: "Enter Your Full Name" }, { label: "Company Name", type: "text", placeholder: "Enter Your Company Name" }].map(f => (
                  <div key={f.label}>
                    <label style={{ display: "block", fontFamily: T.sans, fontSize: 13, fontWeight: 600, color: T.slate, marginBottom: 6 }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} className="input-field" />
                  </div>
                ))}
              </div>

              <div className="two-col">
                {[{ label: "Phone Number *", type: "tel", placeholder: "Enter Your Phone Number" }, { label: "Email Address *", type: "email", placeholder: "Enter Your Email Address" }].map(f => (
                  <div key={f.label}>
                    <label style={{ display: "block", fontFamily: T.sans, fontSize: 13, fontWeight: 600, color: T.slate, marginBottom: 6 }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} className="input-field" />
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontFamily: T.sans, fontSize: 13, fontWeight: 600, color: T.slate, marginBottom: 6 }}>Service Required *</label>
                <select className="input-field">
                  <option value="">Select a service</option>
                  {services.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontFamily: T.sans, fontSize: 13, fontWeight: 600, color: T.slate, marginBottom: 6 }}>Product / Business Description *</label>
                <textarea rows={4} placeholder="Briefly describe your product and what certification you're looking for..." className="input-field" style={{ resize: "vertical" }} />
              </div>

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
                  boxShadow: "0 4px 16px rgba(10,104,104,0.22)",
                  transition: "background 0.2s, transform 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = T.teal; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = T.orange; e.currentTarget.style.transform = "translateY(0)"; }}
              >Submit Enquiry →</button>
              <p style={{ fontFamily: T.sans, fontSize: 12, color: T.subtle, textAlign: "center", marginTop: 10 }}>We respond within 2 business hours. No spam, ever.</p>
            </div>

            {/* Sidebar */}
            <div className="sidebar">

              {/* Quick contact — ctaBand light blue */}
              <div style={{ background: T.ctaBand, border: `1px solid ${T.ctaBandBorder}`, borderRadius: 10, padding: 28 }}>
                <div className="sl-row" style={{ marginBottom: 20 }}><div className="sl-line" /><span className="sl-text">Quick Contact</span></div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { icon: "📞", label: "Call Us",   value: "+91-9540190334",  href: "tel:+919540190334" },
                    { icon: "✉",  label: "Email Us",  value: "info@siacc.in",   href: "mailto:info@siacc.in" },
                    { icon: "💬", label: "WhatsApp",  value: "+91-9540190334",  href: "https://wa.me/919540190334" },
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

              {/* Business hours */}
              <div style={{ background: T.white, borderRadius: 10, padding: 24, border: `1px solid ${T.border}` }}>
                <div className="sl-row" style={{ marginBottom: 16 }}><div className="sl-line" /><span className="sl-text">Business Hours</span></div>
                {[
                  { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
                  { day: "Saturday",         time: "10:00 AM – 4:00 PM" },
                  { day: "Sunday",           time: "Closed" },
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

              {/* Urgent CTA — teal gradient instead of orange */}
              <div style={{ position: "relative", borderRadius: 10, overflow: "hidden" }}>
                <img
                  src="https://images.unsplash.com/photo-1568219557405-376e23e4f7cf?w=600&q=80&fit=crop"
                  alt="Urgent"
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

      {/* ── OFFICE — cream bg ── */}
      <section className="sec" style={{ background: T.cream }}>
        <div className="inner">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
              <div className="sl-row"><div className="sl-line" /><span className="sl-text">Our Office</span></div>
            </div>
            <h2 style={{ fontFamily: T.serif, fontSize: "clamp(1.8rem,3.2vw,2.9rem)", color: T.slate, fontWeight: 700, letterSpacing: "-0.01em" }}>Find Us in New Delhi</h2>
          </div>

          <div className="office-split">
            {/* Office card */}
            <div className="office-card">
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
                    { icon: "✉",  val: "delhi@siacc.in" },
                    { icon: "🕐", val: "Mon–Sat: 9AM – 6PM" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <span style={{ flexShrink: 0, fontSize: 16 }}>{item.icon}</span>
                      <span style={{ fontFamily: T.sans, fontSize: 14, color: T.muted, lineHeight: 1.6 }}>{item.val}</span>
                    </div>
                  ))}
                  <div style={{ display: "flex", gap: 12 }}>
                    <span style={{ fontSize: 16 }}>👤</span>
                    <span style={{ fontFamily: T.sans, fontSize: 14, color: T.muted }}>Head: <strong style={{ color: T.slate }}>Vikram Anand</strong></span>
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
                <a href="https://maps.google.com/?q=Pocket+9+North+West+New+Delhi+110086"
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

            {/* Image panel — light blue tint overlay */}
            <div className="office-image-panel">
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
                    { value: "98%",     label: "Success Rate" },
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

      {/* ── FAQs — white bg ── */}
      <section className="sec" style={{ background: T.white }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
              <div className="sl-row"><div className="sl-line" /><span className="sl-text">Common Questions</span></div>
            </div>
            <h2 style={{ fontFamily: T.serif, fontSize: "clamp(1.8rem,3.2vw,2.9rem)", color: T.slate, fontWeight: 700, letterSpacing: "-0.01em" }}>Frequently Asked</h2>
          </div>
          {faqs.map(faq => (
            <div key={faq.q} className="faq-card">
              <div style={{ fontFamily: T.serif, fontSize: 16, color: T.slate, marginBottom: 10, fontWeight: 600 }}>Q: {faq.q}</div>
              <div style={{ fontFamily: T.sans, fontSize: 14, color: T.muted, lineHeight: 1.8 }}>{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BAND — exact HomeScreen CTA band ── */}
      <section style={{
        background: T.ctaBand,
        borderTop: `1px solid ${T.ctaBandBorder}`,
        borderBottom: `1px solid ${T.ctaBandBorder}`,
        padding: "80px clamp(16px,5vw,56px)",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="cta-split">
            <div>
              <div className="sl-row" style={{ marginBottom: 20 }}><div className="sl-line" /><span className="sl-text">Start Today</span></div>
              <h2 style={{ fontFamily: T.serif, fontSize: "clamp(1.9rem,3.2vw,2.9rem)", color: T.slate, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: 14 }}>
                Ready to Get Certified?
              </h2>
              <p style={{ fontFamily: T.sans, color: T.muted, fontSize: 14.5, lineHeight: 1.8 }}>
                Free consultation. Clear timeline. Transparent pricing.<br />Our experts respond within 2 hours.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
              <a href="#contact-form" style={{
                padding: "14px 36px", fontFamily: T.sans, fontSize: 14, fontWeight: 600,
                letterSpacing: "0.02em", border: "none", borderRadius: 6, cursor: "pointer",
                background: T.orange, color: "#fff", whiteSpace: "nowrap",
                transition: "background 0.2s", display: "block", textAlign: "center",
              }}
                onMouseEnter={e => e.currentTarget.style.background = T.teal}
                onMouseLeave={e => e.currentTarget.style.background = T.orange}
              >Get Free Consultation</a>
              <a href="tel:+919540190334" style={{
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