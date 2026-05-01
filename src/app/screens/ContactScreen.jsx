"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const C = {
  primary: "#F97316",
  primaryDark: "#EA6A0A",
  primaryLight: "#FFF3E8",
  blue: "#0891B2",
  blueLight: "#ECFEFF",
  navy: "#0C2340",
  bodyText: "#374151",
  mutedText: "#6B7280",
  border: "#E5E7EB",
  white: "#FFFFFF",
  offWhite: "#F9FAFB",
  serif: "'Playfair Display', Georgia, serif",
  sans: "'DM Sans', system-ui, sans-serif",
};

const offices = [
  { city: "New Delhi", address: "House no. - 211, Ground Floor, Pocket 9, North West New Delhi - 110086", phone: "+91-9540190334", email: "delhi@siacc.in", head: "Vikram Anand", hours: "Mon–Sat: 9AM – 6PM" },
];

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
  { value: "2 hrs", label: "Response Time", icon: "⚡" },
  { value: "Free", label: "Initial Consultation", icon: "🆓" },
  { value: "Pan", label: "India Coverage", icon: "🇮🇳" },
  { value: "98%", label: "Success Rate", icon: "✅" },
];

export default function ContactScreen() {
  const router = useRouter();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: C.white, fontFamily: C.sans, color: C.bodyText }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .section-label { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: ${C.primary}; margin-bottom: 12px; display: block; }

        .contact-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        @media (max-width: 900px) { .contact-hero-grid { grid-template-columns: 1fr; gap: 36px; } .contact-hero-right { display: none; } }

        .trust-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

        .stats-strip { display: grid; grid-template-columns: repeat(4, 1fr); }
        @media (max-width: 768px) { .stats-strip { grid-template-columns: repeat(2, 1fr); } }

        .contact-main-grid { display: grid; grid-template-columns: 1fr 380px; gap: 48px; align-items: flex-start; }
        @media (max-width: 1024px) { .contact-main-grid { grid-template-columns: 1fr; } }

        .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
        @media (max-width: 560px) { .two-col { grid-template-columns: 1fr; } }

        .office-split { display: grid; grid-template-columns: 340px 1fr; gap: 24px; align-items: stretch; }
        @media (max-width: 768px) { .office-split { grid-template-columns: 1fr !important; } }

        .input-field { width: 100%; padding: 12px 14px; border: 1.5px solid ${C.border}; border-radius: 10px; font-size: 14px; color: #1A1A2E; outline: none; background: ${C.offWhite}; font-family: ${C.sans}; transition: border-color 0.2s; }
        .input-field:focus { border-color: ${C.primary}; }

        .office-card { background: ${C.white}; border-radius: 16px; padding: 28px; border: 1.5px solid ${C.border}; transition: all 0.25s ease; }
        .office-card:hover { border-color: ${C.primary}; transform: translateY(-3px); box-shadow: 0 12px 32px rgba(249,115,22,0.12); }

        .faq-card { background: ${C.white}; border-radius: 14px; padding: 22px 24px; border: 1.5px solid ${C.border}; transition: border-color 0.2s; margin-bottom: 12px; }
        .faq-card:hover { border-color: ${C.primary}; }

        .img-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(12,35,64,0.88) 50%, rgba(12,35,64,0.45) 100%); }

        @media (max-width: 768px) { .sec-pad { padding: 60px 16px !important; } }
      `}</style>

      <Navbar />

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "480px", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1800&q=85&fit=crop"
          alt="Professional compliance team meeting"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div className="img-overlay" />

        <div style={{ position: "absolute", top: 32, right: 40, zIndex: 3, background: "rgba(255,255,255,0.12)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 14, padding: "12px 20px", display: "flex", gap: 16 }}>
          {["BIS", "EPR", "WPC", "ISO"].map((b) => (
            <span key={b} style={{ fontSize: 11, fontWeight: 700, color: C.primary }}>{b}</span>
          ))}
        </div>

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 40px", width: "100%", position: "relative", zIndex: 2 }}>
          <div className="contact-hero-grid">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(249,115,22,0.2)", border: "1px solid rgba(249,115,22,0.4)", borderRadius: 999, padding: "6px 16px", marginBottom: 24 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: C.primary, display: "inline-block" }} />
                <span style={{ color: C.primary, fontSize: 12, fontWeight: 600 }}>Get In Touch</span>
              </div>

              <h1 style={{ fontFamily: C.serif, fontSize: "clamp(2rem,4vw,3.2rem)", color: "#fff", lineHeight: 1.15, marginBottom: 20, fontWeight: 800 }}>
                Let's Start Your{" "}
                <span style={{ color: C.primary }}>Certification</span>{" "}
                Journey
              </h1>

              <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 36, maxWidth: 480 }}>
                Reach out via the form below, call us, or walk into our New Delhi office. Our experts respond within 2 business hours — free of charge for initial consultations.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 32 }}>
                <a href="#contact-form"
                  style={{ padding: "14px 30px", backgroundColor: C.primary, color: "#fff", fontWeight: 700, borderRadius: 12, textDecoration: "none", fontSize: 14, boxShadow: "0 6px 20px rgba(249,115,22,0.45)" }}>
                  Send a Message ↓
                </a>
                <a href="tel:+919540190334"
                  style={{ padding: "14px 26px", border: "2px solid rgba(255,255,255,0.4)", color: "#fff", borderRadius: 12, textDecoration: "none", fontSize: 14, fontWeight: 600, backdropFilter: "blur(4px)" }}>
                  📞 Call Us Now
                </a>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {["✓ Free Consultation", "✓ 2-Hr Response", "✓ 98% Success Rate", "✓ Pan-India Service"].map((b) => (
                  <span key={b} style={{ padding: "6px 14px", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 999, fontSize: 12, color: "rgba(255,255,255,0.85)", background: "rgba(255,255,255,0.08)" }}>{b}</span>
                ))}
              </div>
            </div>

            <div className="contact-hero-right">
              <p style={{ fontSize: 11, fontWeight: 600, color: C.primary, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Why Contact Us</p>
              <div className="trust-grid">
                {heroTrust.map((t) => (
                  <div key={t.label} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(249,115,22,0.25)", borderRadius: 14, padding: "18px 16px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ fontSize: 22, flexShrink: 0, lineHeight: 1 }}>{t.icon}</div>
                    <div>
                      <div style={{ fontFamily: C.serif, fontSize: 14, color: "#fff", fontWeight: 700, marginBottom: 4 }}>{t.label}</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.68)", lineHeight: 1.55 }}>{t.desc}</div>
                    </div>
                  </div>
                ))}
                <div style={{ gridColumn: "span 2", background: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.3)", borderRadius: 14, padding: "14px 18px", display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ fontSize: 22, flexShrink: 0 }}>🏢</div>
                  <div>
                    <div style={{ fontSize: 13, color: "#fff", fontWeight: 600, marginBottom: 3 }}>Based in New Delhi</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)" }}>North West Delhi · Serving all of India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(255,255,255,0), rgba(249,115,22,0.8))" }} />
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Scroll</span>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ background: C.navy }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="stats-strip">
            {contactStats.map((s, i) => (
              <div key={s.label} style={{ textAlign: "center", padding: "28px 16px", borderRight: i < contactStats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <div style={{ fontSize: 20, marginBottom: 6 }}>{s.icon}</div>
                <div style={{ fontFamily: C.serif, fontSize: "clamp(1.6rem,2.5vw,2.2rem)", color: C.primary, fontWeight: 800 }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTACT SECTION ── */}
      <section id="contact-form" style={{ padding: "88px 24px", background: C.white }} className="sec-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="contact-main-grid">

          {/* Form */}
          <div style={{ backgroundColor: C.white, borderRadius: 20, padding: 40, border: `1.5px solid ${C.border}`, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
            <div style={{ position: "relative", borderRadius: 14, overflow: "hidden", height: 160, marginBottom: 32 }}>
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80&fit=crop"
                alt="Our team collaborating"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,35,64,0.85) 0%, rgba(12,35,64,0.3) 70%)" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 28px" }}>
                <div>
                  <div style={{ fontFamily: C.serif, fontSize: "clamp(1.1rem,2vw,1.5rem)", color: "#fff", fontWeight: 800, marginBottom: 6 }}>Talk to a Regulatory Expert</div>
                  <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 13 }}>We respond within 2 business hours. No spam, ever.</p>
                </div>
              </div>
            </div>

            <div className="two-col">
              {[{ label: "Full Name *", type: "text", placeholder: "Rajesh Mehta" }, { label: "Company Name", type: "text", placeholder: "TechImport Pvt. Ltd." }].map((f) => (
                <div key={f.label}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1A1A2E", marginBottom: 6 }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} className="input-field" />
                </div>
              ))}
            </div>

            <div className="two-col">
              {[{ label: "Phone Number *", type: "tel", placeholder: "Enter phone number" }, { label: "Email Address *", type: "email", placeholder: "Enter email address" }].map((f) => (
                <div key={f.label}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1A1A2E", marginBottom: 6 }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} className="input-field" />
                </div>
              ))}
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1A1A2E", marginBottom: 6 }}>Service Required *</label>
              <select className="input-field">
                <option value="">Select a service</option>
                {services.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1A1A2E", marginBottom: 6 }}>Product / Business Description *</label>
              <textarea rows={4} placeholder="Briefly describe your product and what certification you're looking for..." className="input-field" style={{ resize: "vertical" }} />
            </div>

            <div style={{ marginBottom: 28 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1A1A2E", marginBottom: 6 }}>How did you hear about us?</label>
              <select className="input-field">
                <option value="">Select an option</option>
                {["Google Search", "LinkedIn", "Referral", "Trade Show", "Other"].map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>

            <button
              style={{ width: "100%", padding: "15px", backgroundColor: C.primary, color: C.white, fontWeight: 700, borderRadius: 12, border: "none", fontSize: 15, cursor: "pointer", fontFamily: C.sans, boxShadow: "0 6px 20px rgba(249,115,22,0.35)" }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = C.primaryDark}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = C.primary}>
              Submit Enquiry →
            </button>
            <p style={{ fontSize: 12, color: C.mutedText, textAlign: "center", marginTop: 12 }}>We respond within 2 business hours. No spam, ever.</p>
          </div>

          {/* Right sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

            {/* Quick contact */}
            <div style={{ backgroundColor: C.navy, borderRadius: 16, padding: 28 }}>
              <h3 style={{ fontFamily: C.serif, fontSize: 18, color: C.white, marginBottom: 20, fontWeight: 700 }}>Quick Contact</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { icon: "📞", label: "Call Us", value: "+91-9540190334", href: "tel:+919540190334" },
                  { icon: "✉", label: "Email Us", value: "info@siacc.in", href: "mailto:info@siacc.in" },
                  { icon: "💬", label: "WhatsApp", value: "+91-9540190334", href: "https://wa.me/919540190334" },
                ].map((item) => (
                  <a key={item.label} href={item.href} style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none" }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: "rgba(249,115,22,0.2)", border: "1px solid rgba(249,115,22,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize: 11, color: C.primary, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.label}</div>
                      <div style={{ fontSize: 14, color: C.white, fontWeight: 500, marginTop: 2 }}>{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Business hours */}
            <div style={{ backgroundColor: C.white, borderRadius: 16, padding: 24, border: `1.5px solid ${C.border}` }}>
              <h3 style={{ fontFamily: C.serif, fontSize: 17, color: C.navy, marginBottom: 16, fontWeight: 700 }}>Business Hours</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {[{ day: "Monday – Friday", time: "9:00 AM – 6:00 PM" }, { day: "Saturday", time: "10:00 AM – 4:00 PM" }, { day: "Sunday", time: "Closed" }].map((h) => (
                  <div key={h.day} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, padding: "10px 0", borderBottom: `1px solid ${C.border}` }}>
                    <span style={{ color: C.mutedText }}>{h.day}</span>
                    <span style={{ color: h.time === "Closed" ? "#ef4444" : C.navy, fontWeight: 700 }}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency CTA */}
            <div style={{ position: "relative", borderRadius: 16, overflow: "hidden" }}>
              <img
                src="https://images.unsplash.com/photo-1568219557405-376e23e4f7cf?w=600&q=80&fit=crop"
                alt="Urgent compliance"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(249,115,22,0.95), rgba(234,88,12,0.9))" }} />
              <div style={{ position: "relative", zIndex: 1, padding: 24 }}>
                <div style={{ fontSize: 22, marginBottom: 10 }}>⚡</div>
                <h3 style={{ fontFamily: C.serif, fontSize: 16, color: C.white, marginBottom: 8, fontWeight: 700 }}>Urgent Compliance Need?</h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.88)", lineHeight: 1.65, marginBottom: 18 }}>Facing a regulatory deadline or port hold? We have an emergency response team available 24/7.</p>
                <a href="tel:+919540190334" style={{ display: "block", textAlign: "center", padding: "11px", backgroundColor: C.white, color: C.primary, borderRadius: 10, textDecoration: "none", fontSize: 13, fontWeight: 700 }}>
                  Call Emergency Line →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFICE — single Delhi office with image panel ── */}
      <section style={{ backgroundColor: C.offWhite, padding: "72px 24px" }} className="sec-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">Our Office</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.6rem,3vw,2.4rem)", color: C.navy, fontWeight: 800 }}>Find Us in New Delhi</h2>
          </div>

          <div className="office-split">

            {/* Office Card */}
            <div className="office-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, backgroundColor: C.primaryLight, border: `1.5px solid #FED7AA`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🏢</div>
                  <div>
                    <div style={{ fontFamily: C.serif, fontSize: 20, color: C.navy, fontWeight: 700 }}>New Delhi</div>
                    <div style={{ fontSize: 12, color: C.primary, fontWeight: 600 }}>Regional Office</div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    { icon: "📍", val: "House no. - 211, Ground Floor, Pocket 9, North West New Delhi - 110086" },
                    { icon: "📞", val: "+91-9540190334" },
                    { icon: "✉", val: "delhi@siacc.in" },
                    { icon: "🕐", val: "Mon–Sat: 9AM – 6PM" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, fontSize: 14, alignItems: "flex-start" }}>
                      <span style={{ flexShrink: 0, fontSize: 16 }}>{item.icon}</span>
                      <span style={{ color: C.mutedText, lineHeight: 1.6 }}>{item.val}</span>
                    </div>
                  ))}
                  <div style={{ display: "flex", gap: 12, fontSize: 14 }}>
                    <span style={{ fontSize: 16 }}>👤</span>
                    <span style={{ color: C.mutedText }}>Head: <strong style={{ color: C.navy }}>Vikram Anand</strong></span>
                  </div>
                </div>
              </div>

              {/* CTA buttons */}
              <div style={{ marginTop: 28, paddingTop: 22, borderTop: `1px solid ${C.border}` }}>
                <a href="tel:+919540190334" style={{ display: "block", textAlign: "center", padding: "12px", backgroundColor: C.primary, color: "#fff", borderRadius: 10, textDecoration: "none", fontSize: 14, fontWeight: 700, boxShadow: "0 4px 14px rgba(249,115,22,0.35)", marginBottom: 10 }}>
                  📞 Call This Office
                </a>
                <a href="https://maps.google.com/?q=Pocket+9+North+West+New+Delhi+110086" target="_blank" style={{ display: "block", textAlign: "center", padding: "12px", border: `1.5px solid ${C.border}`, color: C.navy, borderRadius: 10, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>
                  🗺️ Get Directions
                </a>
              </div>
            </div>

            {/* Right — Delhi monument image panel */}
            <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", minHeight: 440 }}>
              {/* Red Fort, Delhi */}
              <img
                src="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=85&fit=crop"
                alt="Red Fort New Delhi"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(12,35,64,0.85) 0%, rgba(12,35,64,0.45) 55%, rgba(249,115,22,0.2) 100%)" }} />

              {/* Content over image */}
              <div style={{ position: "relative", zIndex: 1, padding: 40, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(249,115,22,0.2)", border: "1px solid rgba(249,115,22,0.4)", borderRadius: 999, padding: "6px 16px", marginBottom: 20 }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: C.primary, display: "inline-block" }} />
                    <span style={{ color: C.primary, fontSize: 12, fontWeight: 600 }}>🇮🇳 New Delhi, India</span>
                  </div>

                  <h3 style={{ fontFamily: C.serif, fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "#fff", fontWeight: 800, marginBottom: 14, lineHeight: 1.25 }}>
                    Your Trusted Partner<br />in New Delhi
                  </h3>

                  <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, lineHeight: 1.8, maxWidth: 440 }}>
                    Based in New Delhi, we provide end-to-end regulatory compliance and certification services across India. Visit our office for a free consultation — no appointment needed.
                  </p>
                </div>

                {/* Bottom stat row */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginTop: 36 }}>
                  {[
                    { value: "10,000+", label: "Certifications Filed" },
                    { value: "15+ yrs", label: "Industry Experience" },
                    { value: "98%", label: "Success Rate" },
                  ].map((s) => (
                    <div key={s.label} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, padding: "16px 14px", backdropFilter: "blur(8px)" }}>
                      <div style={{ fontFamily: C.serif, fontSize: "1.4rem", color: C.primary, fontWeight: 800 }}>{s.value}</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", marginTop: 5, lineHeight: 1.4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section style={{ padding: "72px 24px", background: C.white }} className="sec-pad">
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <span className="section-label">Common Questions</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.6rem,3vw,2.4rem)", color: C.navy, fontWeight: 800 }}>Frequently Asked</h2>
          </div>
          {faqs.map((faq) => (
            <div key={faq.q} className="faq-card">
              <div style={{ fontFamily: C.serif, fontSize: 15, color: C.navy, marginBottom: 10, fontWeight: 700 }}>Q: {faq.q}</div>
              <div style={{ fontSize: 14, color: C.mutedText, lineHeight: 1.75 }}>{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ position: "relative", padding: "88px 24px", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80&fit=crop"
          alt="Get certified"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(249,115,22,0.92) 0%, rgba(234,88,12,0.88) 100%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.8rem,3vw,2.8rem)", color: "#fff", marginBottom: 16, fontWeight: 800 }}>
            Ready to Get Certified?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.88)", marginBottom: 40, lineHeight: 1.75, fontSize: 16 }}>
            Our experts are ready to help. Get a free consultation and know exactly what you need — at no cost.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
            <a href="#contact-form"
              style={{ padding: "16px 40px", backgroundColor: "#fff", color: C.primary, fontWeight: 800, borderRadius: 12, fontSize: 15, textDecoration: "none", boxShadow: "0 6px 24px rgba(0,0,0,0.15)" }}>
              Get Free Consultation
            </a>
            <a href="tel:+919540190334"
              style={{ padding: "16px 32px", border: "2px solid rgba(255,255,255,0.6)", color: "#fff", borderRadius: 12, textDecoration: "none", fontSize: 15, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8 }}>
              📞 +91 9540190334
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}