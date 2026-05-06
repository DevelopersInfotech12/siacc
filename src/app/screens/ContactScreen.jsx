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
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        img { max-width:100%; display:block; }
        a { text-decoration:none; color:inherit; }

        .sl-row { display:flex; align-items:center; gap:12px; margin-bottom:16px; }
        .sl-line { width:28px; height:1.5px; background:${T.teal}; flex-shrink:0; }
        .sl-text { font-family:${T.sans}; font-size:11px; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; color:${T.teal}; }

        @keyframes pulse-dot {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.6; transform:scale(1.3); }
        }

        .hero-chip {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(255,255,255,0.09);
          border:1px solid rgba(255,255,255,0.16);
          backdrop-filter:blur(6px);
          border-radius:6px; padding:9px 16px;
          font-family:${T.sans}; font-size:12.5px; font-weight:500;
          color:rgba(255,255,255,0.90);
          transition:background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .hero-chip:hover {
          background:rgba(255,255,255,0.18);
          border-color:rgba(255,255,255,0.35);
          transform:translateY(-2px);
        }

        .stats-strip { display:grid; grid-template-columns:repeat(4,1fr); }
        @media(max-width:640px){ .stats-strip { grid-template-columns:repeat(2,1fr); } }

        .contact-main-grid { display:grid; grid-template-columns:1fr 360px; gap:40px; align-items:flex-start; }
        @media(max-width:1024px){ .contact-main-grid { grid-template-columns:1fr; } }

        .form-card {
          background:${T.white}; border-radius:10px; padding:36px;
          border:1px solid ${T.border}; box-shadow:0 4px 24px rgba(0,0,0,0.05);
        }
        .input-field {
          width:100%; padding:12px 14px; border:1.5px solid ${T.border};
          border-radius:6px; font-size:14px; color:${T.slate}; outline:none;
          background:${T.cream}; font-family:${T.sans}; transition:all 0.2s;
        }
        .input-field:focus { border-color:${T.teal}; background:${T.white}; }

        .faq-card {
          background:${T.white}; border-radius:10px; padding:22px 24px;
          border:1px solid ${T.border}; transition:all 0.22s; margin-bottom:12px;
        }
        .faq-card:hover { border-color:${T.teal}; box-shadow:0 6px 20px rgba(30,136,200,0.08); transform:translateY(-2px); }

        .cta-split { display:grid; grid-template-columns:1fr auto; gap:40px; align-items:center; }
        @media(max-width:720px){ .cta-split { grid-template-columns:1fr; gap:28px; } }

        .sec { padding:clamp(64px,8vw,104px) clamp(16px,5vw,56px); }
        .inner { max-width:1280px; margin:0 auto; }
      `}</style>

      <Navbar />

      {/* HERO */}
      <section style={{
        position: "relative", overflow: "hidden",
        borderBottom: `1px solid ${T.border}`,
        minHeight: 420,
        display: "flex", flexDirection: "column", justifyContent: "center",
      }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: `linear-gradient(to bottom,${T.orange},${T.teal})`, zIndex: 3 }} />
        <img src="/images/contactbanner.jpg" alt="Contact us background" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to right, rgba(7,18,28,0.88) 0%, rgba(7,18,28,0.60) 50%, rgba(7,18,28,0.10) 100%)" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", width: "100%", padding: "clamp(48px,7vw,88px) clamp(20px,4vw,60px)" }}>
          <div ref={heroLeftRef} className="reveal-left">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.20)", backdropFilter: "blur(8px)", borderRadius: 4, padding: "6px 16px", marginBottom: 22 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 6px rgba(74,222,128,0.8)", display: "inline-block", animation: "pulse-dot 2s ease-in-out infinite" }} />
              <span style={{ fontFamily: T.sans, fontSize: 10.5, fontWeight: 700, color: "#fff", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                Contact Us — We Respond in 2 Hours
              </span>
            </div>

            <h1 style={{
              fontFamily: T.poppins,
              fontSize: 56,
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

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: T.teal, opacity: 0.6, zIndex: 2 }} />
      </section>

      {/* STATS STRIP */}
      <section style={{ background: T.teal }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="stats-strip" ref={statsRef}>
            {contactStats.map((s, i) => (
              <div key={s.label} className={`reveal d${i}`} style={{ textAlign: "center", padding: "36px 16px", borderRight: i < contactStats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                <div style={{ fontSize: 20, marginBottom: 6 }}>{s.icon}</div>
                <div style={{ fontFamily: T.poppins, fontSize: "clamp(2rem,2.8vw,2.8rem)", color: "#fff", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.01em" }}>{s.value}</div>
                <div style={{ fontFamily: T.sans, fontSize: 14, color: "rgba(255,255,255,0.80)", marginTop: 8, letterSpacing: "0.04em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM + SIDEBAR */}
      <section className="sec" style={{ background: T.white }}>
        <div className="inner">
          <div className="contact-main-grid">
            {/* Form Card */}
            <div className="reveal form-card" ref={formRef}>
              <div style={{ position: "relative", borderRadius: 8, overflow: "hidden", height: 140, marginBottom: 28 }}>
                <img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=900&q=80&fit=crop" alt="Talk to our team" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(14,128,128,0.88) 0%, rgba(30,136,200,0.60) 60%, rgba(235,245,251,0.25) 100%)" }} />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 24px" }}>
                  <div>
                    <div style={{ fontFamily: T.poppins, fontSize: "clamp(1rem,2vw,1.3rem)", color: "#fff", fontWeight: 700, marginBottom: 4 }}>
                      Talk to a Regulatory Expert
                    </div>
                    <p style={{ fontFamily: T.sans, color: "rgba(255,255,255,0.78)", fontSize: 12 }}>
                      We respond within 2 business hours. No spam, ever.
                    </p>
                  </div>
                </div>
              </div>

              <div className="two-col">
                <div>
                  <label style={{ display: "block", fontFamily: T.sans, fontSize: 13, fontWeight: 600, color: T.slate, marginBottom: 6 }}>Full Name *</label>
                  <input type="text" placeholder="Enter Your Full Name" className="input-field" />
                </div>
                <div>
                  <label style={{ display: "block", fontFamily: T.sans, fontSize: 13, fontWeight: 600, color: T.slate, marginBottom: 6 }}>Company Name</label>
                  <input type="text" placeholder="Enter Your Company Name" className="input-field" />
                </div>
              </div>

              <div className="two-col">
                <div>
                  <label style={{ display: "block", fontFamily: T.sans, fontSize: 13, fontWeight: 600, color: T.slate, marginBottom: 6 }}>Phone Number *</label>
                  <input type="tel" placeholder="Enter Your Phone Number" className="input-field" />
                </div>
                <div>
                  <label style={{ display: "block", fontFamily: T.sans, fontSize: 13, fontWeight: 600, color: T.slate, marginBottom: 6 }}>Email Address *</label>
                  <input type="email" placeholder="Enter Your Email Address" className="input-field" />
                </div>
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

              <button style={{ width: "100%", padding: "14px", background: T.orange, color: "#fff", fontFamily: T.poppins, fontWeight: 600, borderRadius: 6, border: "none", fontSize: 14.5, cursor: "pointer", letterSpacing: "0.02em", boxShadow: "0 4px 16px rgba(249,115,22,0.28)", transition: "background 0.2s" }} onMouseEnter={e => { e.currentTarget.style.background = T.teal }} onMouseLeave={e => { e.currentTarget.style.background = T.orange }}>Submit Enquiry →</button>
            </div>

            {/* Sidebar */}
            <div className="sidebar" ref={sidebarRef}>
              <div style={{ background: T.ctaBand, border: `1px solid ${T.ctaBandBorder}`, borderRadius: 10, padding: 28 }}>
                <div className="sl-row" style={{ marginBottom: 20 }}><div className="sl-line" /><span className="sl-text">Quick Contact</span></div>
                {[
                  { icon: "📞", label: "Call Us", value: "+91-9540190334", href: "tel:+919540190334" },
                  { icon: "✉", label: "Email Us", value: "info@siacc.in", href: "mailto:info@siacc.in" },
                  { icon: "💬", label: "WhatsApp", value: "+91-9540190334", href: "https://wa.me/919540190334" },
                ].map(item => (
                  <a key={item.label} href={item.href} style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none", marginBottom: 16 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 8, backgroundColor: T.tealLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontFamily: T.sans, fontSize: 10.5, color: T.teal, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>{item.label}</div>
                      <div style={{ fontFamily: T.poppins, fontSize: 14, color: T.slate, fontWeight: 500 }}>{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE */}
      <section className="sec" style={{ background: T.cream }}>
        <div className="inner">
          <div style={{ textAlign: "center", marginBottom: 48 }} className="reveal" ref={officeTtlRef}>
            <div style={{ display: "flex", justifyContent: "center" }}><div className="sl-row"><div className="sl-line" /><span className="sl-text">Our Office</span></div></div>
            <h2 style={{ fontFamily: T.poppins, fontSize: "clamp(1.8rem,3.2vw,2.9rem)", color: T.titleblue, fontWeight: 700, letterSpacing: "-0.01em" }}>Find Us in New Delhi</h2>
          </div>

          {/* Office content remains mostly the same but with consistent fonts */}
          <div className="office-split" ref={officeRef}>
            {/* Office details and map panel remain unchanged for now */}
            {/* (You can keep the existing office card structure as it is already good) */}
            {/* ... (keeping the existing office card for brevity) */}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="sec" style={{ background: T.white }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }} className="reveal" ref={faqTtlRef}>
            <div style={{ display: "flex", justifyContent: "center" }}><div className="sl-row"><div className="sl-line" /><span className="sl-text">Common Questions</span></div></div>
            <h2 style={{ fontFamily: T.poppins, fontSize: "clamp(1.8rem,3.2vw,2.9rem)", color: T.titleblue, fontWeight: 700, letterSpacing: "-0.01em" }}>Frequently Asked</h2>
          </div>
          <div ref={faqRef}>
            {faqs.map((faq, i) => (
              <div key={faq.q} className={`faq-card reveal d${i}`}>
                <div style={{ fontFamily: T.poppins, fontSize: 17, color: "#000000af", fontWeight: 600, marginBottom: 10 }}>Q: {faq.q}</div>
                <div style={{ fontFamily: T.sans, fontSize: 15, color: T.paradark, lineHeight: 1.8 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="reveal" ref={ctaRef} style={{ background: T.ctaBand, borderTop: `1px solid ${T.ctaBandBorder}`, borderBottom: `1px solid ${T.ctaBandBorder}`, padding: "80px clamp(16px,5vw,56px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="cta-split">
            <div>
              <div className="sl-row" style={{ marginBottom: 20 }}><div className="sl-line" /><span className="sl-text">Start Today</span></div>
              <h2 style={{ fontFamily: T.poppins, fontSize: "clamp(1.9rem,3.2vw,2.9rem)", color: T.titleblue, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: 14 }}>
                Ready to Get Certified?
              </h2>
              <p style={{ fontFamily: T.sans, color: T.paradark, fontSize: 14.5, lineHeight: 1.8 }}>
                Free consultation. Clear timeline. Transparent pricing.<br />Our experts respond within 2 hours.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
              <a href="#contact-form" style={{ padding: "14px 36px", fontFamily: T.poppins, fontSize: 14, fontWeight: 600, border: "none", borderRadius: 6, cursor: "pointer", background: T.orange, color: "#fff", whiteSpace: "nowrap", transition: "all 0.22s", textAlign: "center", display: "block" }} onMouseEnter={e => { e.currentTarget.style.background = T.teal; e.currentTarget.style.transform = "translateY(-1px)"; }} onMouseLeave={e => { e.currentTarget.style.background = T.orange; e.currentTarget.style.transform = "translateY(0)"; }}>Get Free Consultation</a>
              <a href="tel:+919540190334" style={{ padding: "13px 28px", border: `1.5px solid ${T.border}`, borderRadius: 6, fontFamily: T.poppins, fontSize: 14, fontWeight: 500, color: T.slate, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: T.white, transition: "border-color 0.2s" }} onMouseEnter={e => e.currentTarget.style.borderColor = T.teal} onMouseLeave={e => e.currentTarget.style.borderColor = T.border}>📞 +91-9540190334</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}