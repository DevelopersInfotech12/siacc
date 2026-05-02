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

const stats = [
  { value: "12+", label: "Years Experience", icon: "🏆" },
  { value: "10,000+", label: "Happy Clients", icon: "😊" },
  { value: "50+", label: "Certifications", icon: "📜" },
  { value: "98%", label: "Success Rate", icon: "✅" },
  { value: "500+", label: "Products Certified", icon: "📦" },
];

const services = [
  { icon: "🏅", title: "BIS — CRS Registration", desc: "Compulsory Registration Scheme for electronics & IT products sold in India.", href: "/bis", tag: "Most Popular", tagColor: "#FFF3E8", tagText: "#EA6A0A" },
  { icon: "🔖", title: "BIS — ISI Mark", desc: "Mandatory ISI Mark certification for 370+ product categories including steel, cement & electrical goods.", href: "/bis", tag: "" },
  { icon: "📡", title: "WPC-ETA Approval", desc: "Equipment Type Approval for wireless, Bluetooth & RF devices imported into India.", href: "/wpc", tag: "" },
  { icon: "🧪", title: "Testing & Certification", desc: "End-to-end product testing coordination with BIS & accredited labs for all certification requirements.", href: "/tec", tag: "" },
  { icon: "🌐", title: "ISO Certification", desc: "ISO 9001, 14001, 45001, 27001 and more for organizations of all sizes and sectors.", href: "/iso", tag: "" },
];

const whyUs = [
  { icon: "🛡️", title: "Trusted & Experienced", desc: "12+ years of dedicated certification expertise across 50+ regulatory frameworks in India." },
  { icon: "⚡", title: "Fast Turnaround", desc: "Streamlined processes with dedicated managers ensure the fastest possible approvals." },
  { icon: "🕐", title: "24/7 Support", desc: "Round-the-clock assistance from our expert team — always a call or message away." },
  { icon: "💰", title: "Transparent Pricing", desc: "No hidden charges. Fixed pricing with clear timelines from day one." },
  { icon: "📋", title: "End-to-End Service", desc: "From documentation to final certificate — we handle every step for you." },
  { icon: "🏆", title: "98% Success Rate", desc: "Our meticulous process and regulatory expertise delivers results every time." },
];

const steps = [
  { step: "01", title: "Free Consultation", desc: "Tell us your product & requirements. We assess and advise on the right certification path.", icon: "💬" },
  { step: "02", title: "Document Preparation", desc: "Our experts guide you through every document and lab test required for your application.", icon: "📄" },
  { step: "03", title: "Application Filing", desc: "We file the complete application with the regulatory body on your behalf.", icon: "📤" },
  { step: "04", title: "Certificate Delivery", desc: "We track and follow up until your certificate is issued and delivered to you.", icon: "🎓" },
];

const industries = [
  "Electronics & IT", "Telecom & IoT", "Pharmaceuticals", "FMCG & Packaged Goods",
  "Automotive", "Medical Devices", "Textiles", "Food & Beverages",
  "Chemicals", "Construction", "Toys & Furniture", "Energy & Power",
];

const testimonials = [
  { name: "Rajesh Mehta", company: "TechImport Pvt. Ltd.", text: "Siacc got our BIS CRS certification done in record time. Professional, transparent, and extremely knowledgeable team.", rating: 5 },
  { name: "Priya Sharma", company: "EcoGoods India", text: "We needed EPR registration urgently. Their team was available 24/7, guided us step by step, and delivered within the promised timeline.", rating: 5 },
  { name: "Arjun Kapoor", company: "Wireless Solutions Ltd.", text: "WPC-ETA approval was always a headache — until Siacc. Highly recommend them for any wireless product compliance.", rating: 5 },
  { name: "Sneha Verma", company: "MediCare Devices Pvt. Ltd.", text: "Getting our CDSCO license felt impossible before we found Siacc. Their expertise made the entire process stress-free and swift.", rating: 5 },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: C.white, fontFamily: C.sans, color: C.bodyText }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Services grids ── */
        .services-row1 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 20px;
        }
        @media (max-width: 1024px) { .services-row1 { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px)  { .services-row1 { grid-template-columns: 1fr; } }

        .services-row2 {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 20px;
          align-items: stretch;
        }
        @media (max-width: 1024px) { .services-row2 { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 600px)  { .services-row2 { grid-template-columns: 1fr; } }

        /* hide image card on tablet/mobile to keep layout clean */
        .services-img-card {
          display: block;
        }
        @media (max-width: 1024px) { .services-img-card { display: none; } }

        /* ── Why grid ── */
        .why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        @media (max-width: 900px) { .why-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 540px) { .why-grid { grid-template-columns: 1fr; } }

        /* ── Steps grid ── */
        .steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        @media (max-width: 900px) { .steps-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .steps-grid { grid-template-columns: 1fr; } }

        /* hide step connectors on mobile */
        .step-connector { display: block; }
        @media (max-width: 900px) { .step-connector { display: none; } }

        /* ── Testimonials ── */
        .testi-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; }

        /* ── Stats strip ── */
        .stats-strip { display: grid; grid-template-columns: repeat(5, 1fr); }
        @media (max-width: 768px) { .stats-strip { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 400px) { .stats-strip { grid-template-columns: repeat(2, 1fr); } }

        /* ── About ── */
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        @media (max-width: 860px) { .about-grid { grid-template-columns: 1fr; gap: 40px; } }

        .about-stat-card {
          position: absolute;
          bottom: -24px;
          right: -24px;
        }
        @media (max-width: 860px) {
          .about-stat-card {
            bottom: 12px;
            right: 12px;
          }
        }

        /* ── Hero ── */
        .hero-badge-top {
          position: absolute;
          top: 32px;
          right: 40px;
          z-index: 3;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 14px;
          padding: 12px 20px;
          display: flex;
          gap: 16px;
        }
        @media (max-width: 600px) { .hero-badge-top { display: none; } }

        .hero-cta-row { display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 48px; }
        @media (max-width: 480px) {
          .hero-cta-row { flex-direction: column; }
          .hero-cta-row button, .hero-cta-row a { width: 100%; text-align: center; justify-content: center; }
        }

        .hero-trust-row { display: flex; flex-wrap: wrap; gap: 10px; }

        /* ── CTA section ── */
        .cta-btn-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; }
        @media (max-width: 480px) {
          .cta-btn-row { flex-direction: column; align-items: center; }
          .cta-btn-row button, .cta-btn-row a { width: 100%; max-width: 320px; text-align: center; justify-content: center; }
        }

        /* ── About mini stats ── */
        .about-mini-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 32px; }

        /* ── General ── */
        .svc-card {
          background: #fff; border-radius: 16px; padding: 24px;
          border: 1.5px solid #F3F4F6; text-decoration: none;
          display: flex; flex-direction: column;
          transition: all 0.25s ease;
        }
        .svc-card:hover { border-color: ${C.primary}; transform: translateY(-4px); box-shadow: 0 16px 40px rgba(249,115,22,0.12); }

        .why-card { background:#fff; border-radius:16px; padding:24px; border:1.5px solid #F3F4F6; transition:all 0.2s; }
        .why-card:hover { border-color:${C.blue}; box-shadow:0 8px 24px rgba(8,145,178,0.10); }

        .testi-card { background:#fff; border-radius:16px; padding:28px; border:1.5px solid #F3F4F6; transition:all 0.2s; }
        .testi-card:hover { border-color:${C.primary}; box-shadow:0 8px 24px rgba(249,115,22,0.10); }

        .industry-tag { padding:10px 18px; border:1.5px solid rgba(255,255,255,0.2); border-radius:10px; font-size:13px; color:rgba(255,255,255,0.8); background:rgba(255,255,255,0.08); transition:all 0.2s; cursor:default; }
        .industry-tag:hover { border-color:${C.primary}; color:${C.primary}; background:rgba(249,115,22,0.1); }

        .section-label { font-size:11px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:${C.primary}; margin-bottom:12px; display:block; }

        .img-overlay { position:absolute; inset:0; background:linear-gradient(to right, rgba(12,35,64,0.82) 45%, rgba(12,35,64,0.3) 100%); }
        @media (max-width:768px) { .img-overlay { background:rgba(12,35,64,0.82); } }

        .hero-content { position:relative; z-index:2; max-width:600px; }

        .sec-pad { padding: 88px 24px; }
        @media (max-width: 768px) { .sec-pad { padding: 60px 16px !important; } }

        /* Why banner responsive */
        .why-banner { position:relative; border-radius:20px; overflow:hidden; margin-bottom:40px; height:220px; }
        @media (max-width: 600px) { .why-banner { height: 160px; } }
        .why-banner-text { position:absolute; inset:0; display:flex; align-items:center; padding:0 48px; }
        @media (max-width: 600px) { .why-banner-text { padding: 0 24px; } }
      `}</style>

      <Navbar />

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1800&q=85&fit=crop"
          alt="Professional compliance team"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div className="img-overlay" />

        <div className="hero-badge-top">
          {["BIS", "EPR", "WPC", "ISO"].map((b) => (
            <span key={b} style={{ fontSize: 11, fontWeight: 700, color: C.primary }}>{b}</span>
          ))}
        </div>

        <div style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "80px 20px",
          width: "100%",
          position: "relative",
          zIndex: 2
        }} className="hero-container">
          <div className="hero-content">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(249,115,22,0.2)", border: "1px solid rgba(249,115,22,0.4)", borderRadius: 999, padding: "6px 16px", marginBottom: 24 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: C.primary, display: "inline-block" }} />
              <span style={{ color: C.primary, fontSize: 12, fontWeight: 600 }}>India's #1 Compliance Consultancy</span>
            </div>

            <h1 style={{ fontFamily: C.serif, fontSize: "clamp(2rem, 5vw, 4.2rem)", color: "#fff", lineHeight: 1.12, marginBottom: 22, fontWeight: 800 }}>
              Certifications Made{" "}
              <span style={{ color: C.primary }}>Simple</span>,{" "}
              <em>Fast</em> &amp;{" "}
              <span style={{ color: "#fff" }}>Reliable</span>
            </h1>

            <p style={{ fontSize: "clamp(14px, 2vw, 18px)", lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 40, maxWidth: 520 }}>
              From BIS and EPR to ISO and CDSCO — we handle every certification your product needs to enter the Indian market legally and confidently.
            </p>

            <div className="hero-cta-row">
              <button
                onClick={() => router.push("/contact")}
                style={{ padding: "16px 36px", backgroundColor: C.primary, color: "#fff", fontWeight: 700, borderRadius: 12, border: "none", fontSize: 15, cursor: "pointer", fontFamily: C.sans, boxShadow: "0 6px 20px rgba(249,115,22,0.45)" }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = C.primaryDark}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = C.primary}
              >Get Free Consultation</button>
              <button
                onClick={() => router.push("/services")}
                style={{ padding: "16px 32px", border: "2px solid rgba(255,255,255,0.4)", color: "#fff", borderRadius: 12, background: "rgba(255,255,255,0.08)", fontSize: 15, cursor: "pointer", fontWeight: 600, fontFamily: C.sans, backdropFilter: "blur(4px)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.primary; e.currentTarget.style.color = C.primary; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; e.currentTarget.style.color = "#fff"; }}
              >Explore Services →</button>
            </div>

            <div className="hero-trust-row">
              {["✓ BIS Authorized", "✓ ISO Certified", "✓ DPIIT Recognized", "✓ 10,000+ Clients"].map((b) => (
                <span key={b} style={{ padding: "6px 14px", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 999, fontSize: 12, color: "rgba(255,255,255,0.85)", background: "rgba(255,255,255,0.08)" }}>{b}</span>
              ))}
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
            {stats.map((s, i) => (
              <div key={s.label} style={{ textAlign: "center", padding: "28px 12px", borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <div style={{ fontSize: 20, marginBottom: 6 }}>{s.icon}</div>
                <div style={{ fontFamily: C.serif, fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)", color: C.primary, fontWeight: 800 }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section style={{ padding: "88px 24px", background: C.offWhite }} className="sec-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="about-grid">
            {/* Image */}
            <div style={{ position: "relative", marginBottom: 32 }}>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80&fit=crop"
                alt="Compliance experts at work"
                style={{ width: "100%", borderRadius: 20, height: 400, objectFit: "cover", display: "block" }}
              />
              <div className="about-stat-card" style={{ background: "#fff", borderRadius: 16, padding: "20px 28px", boxShadow: "0 16px 48px rgba(0,0,0,0.12)", border: `2px solid ${C.primaryLight}` }}>
                <div style={{ fontFamily: C.serif, fontSize: 36, color: C.primary, fontWeight: 800, lineHeight: 1 }}>98%</div>
                <div style={{ fontSize: 13, color: C.mutedText, marginTop: 4 }}>Application Success Rate</div>
              </div>
              <div style={{ position: "absolute", top: 24, left: 24, background: C.primary, borderRadius: 12, padding: "10px 18px" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: "0.06em" }}>Since 2011</div>
              </div>
            </div>
            {/* Text */}
            <div style={{ paddingTop: 16 }}>
              <span className="section-label">About SIACC</span>
              <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.6rem, 3vw, 2.6rem)", color: C.navy, fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}>
                India's Most Trusted Compliance Partner
              </h2>
              <p style={{ fontSize: 15, color: C.mutedText, lineHeight: 1.8, marginBottom: 16 }}>
                Founded in 2011, Star India Accreditation (SIACC) has grown into India's most trusted certification consultancy. We've helped over 10,000 businesses — from startups to Fortune 500 companies — navigate India's complex regulatory landscape.
              </p>
              <p style={{ fontSize: 15, color: C.mutedText, lineHeight: 1.8, marginBottom: 28 }}>
                Our team of 100+ regulatory experts covers every certification your product needs — BIS, EPR, WPC, TEC, BEE, LMPC, ISO, CDSCO, and more.
              </p>
              <div className="about-mini-stats">
                {[{ n: "12+", l: "Years of Experience" }, { n: "100+", l: "Expert Team Members" }, { n: "25+", l: "Countries Served" }, { n: "50+", l: "Certifications Covered" }].map((s) => (
                  <div key={s.l} style={{ padding: "16px 20px", background: "#fff", borderRadius: 12, border: `1.5px solid ${C.border}` }}>
                    <div style={{ fontFamily: C.serif, fontSize: 22, color: C.primary, fontWeight: 800 }}>{s.n}</div>
                    <div style={{ fontSize: 12, color: C.mutedText, marginTop: 2 }}>{s.l}</div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => router.push("/about")}
                style={{ padding: "13px 28px", backgroundColor: C.navy, color: "#fff", borderRadius: 12, border: "none", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: C.sans }}
              >Know More About Us →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding: "88px 24px", background: C.white }} className="sec-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label">What We Offer</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.6rem, 3vw, 2.6rem)", color: C.navy, fontWeight: 800, marginBottom: 14 }}>Our Certification Services</h2>
            <p style={{ color: C.mutedText, maxWidth: 520, margin: "0 auto", lineHeight: 1.7, fontSize: 15 }}>
              Comprehensive compliance solutions for manufacturers, importers, and brand owners across all regulatory frameworks in India.
            </p>
          </div>

          {/* Row 1 — 4 cards */}
          <div className="services-row1">
            {services.slice(0, 4).map((s) => (
              <Link key={s.title} href={s.href} className="svc-card">
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                  <div style={{ width: 52, height: 52, backgroundColor: C.primaryLight, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{s.icon}</div>
                  {s.tag && <span style={{ fontSize: 10, fontWeight: 700, backgroundColor: s.tagColor, color: s.tagText, padding: "3px 10px", borderRadius: 999 }}>{s.tag}</span>}
                </div>
                <h3 style={{ fontFamily: C.serif, fontSize: 16, color: C.navy, marginBottom: 8, fontWeight: 700 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: C.mutedText, lineHeight: 1.65, marginBottom: 16, flex: 1 }}>{s.desc}</p>
                <span style={{ color: C.primary, fontSize: 13, fontWeight: 700 }}>Learn More →</span>
              </Link>
            ))}
          </div>

          {/* Row 2 — ISO + image + CTA */}
          <div className="services-row2">
            <Link href={services[4].href} className="svc-card">
              <div style={{ width: 52, height: 52, backgroundColor: C.primaryLight, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 16 }}>
                {services[4].icon}
              </div>
              <h3 style={{ fontFamily: C.serif, fontSize: 16, color: C.navy, marginBottom: 8, fontWeight: 700 }}>{services[4].title}</h3>
              <p style={{ fontSize: 13, color: C.mutedText, lineHeight: 1.65, marginBottom: 16, flex: 1 }}>{services[4].desc}</p>
              <span style={{ color: C.primary, fontSize: 13, fontWeight: 700 }}>Learn More →</span>
            </Link>

            <div className="services-img-card" style={{ borderRadius: 16, overflow: "hidden", position: "relative", minHeight: 200 }}>
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=85&fit=crop"
                alt="Certification compliance"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(12,35,64,0.55) 0%, rgba(12,35,64,0.2) 100%)" }} />
              <div style={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
                <div style={{ fontFamily: C.serif, fontSize: 15, color: "#fff", fontWeight: 700, marginBottom: 4 }}>Certified. Compliant. Confident.</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)" }}>India's most trusted compliance partner since 2011</div>
              </div>
            </div>

            <button
              onClick={() => router.push("/services")}
              style={{ borderRadius: 16, border: `2px dashed ${C.border}`, background: C.offWhite, cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, padding: "28px 20px", transition: "all 0.25s ease", fontFamily: C.sans, minHeight: 200, width: "100%" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.primary; e.currentTarget.style.background = C.primaryLight; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.offWhite; }}
            >
              <div style={{ width: 56, height: 56, borderRadius: "50%", backgroundColor: C.navy, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>📋</div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: C.serif, fontSize: 18, color: C.navy, fontWeight: 800, marginBottom: 6 }}>50+ Services</div>
                <div style={{ fontSize: 13, color: C.mutedText, lineHeight: 1.5, marginBottom: 16 }}>Explore our complete range of compliance & certification solutions</div>
                <span style={{ display: "inline-block", padding: "10px 24px", backgroundColor: C.primary, color: "#fff", borderRadius: 10, fontSize: 13, fontWeight: 700, boxShadow: "0 4px 12px rgba(249,115,22,0.3)" }}>
                  View All Services →
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ padding: "88px 24px", background: C.offWhite }} className="sec-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">Why SIACC</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.6rem, 3vw, 2.6rem)", color: C.navy, fontWeight: 800, marginBottom: 14 }}>What Makes Us Different</h2>
          </div>

          <div className="why-banner">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&q=80&fit=crop"
              alt="Our team collaborating"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,35,64,0.85) 0%, rgba(12,35,64,0.4) 60%, transparent 100%)" }} />
            <div className="why-banner-text">
              <div>
                <div style={{ fontFamily: C.serif, fontSize: "clamp(1.2rem, 2.5vw, 2rem)", color: "#fff", fontWeight: 800, marginBottom: 8 }}>
                  A Team of 100+ Regulatory Experts
                </div>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14 }}>Dedicated specialists for every certification domain — always in your corner.</p>
              </div>
            </div>
          </div>

          <div className="why-grid">
            {whyUs.map((w) => (
              <div key={w.title} className="why-card">
                <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: C.blueLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 14 }}>{w.icon}</div>
                <h3 style={{ fontFamily: C.serif, fontSize: 16, color: C.navy, marginBottom: 8, fontWeight: 700 }}>{w.title}</h3>
                <p style={{ fontSize: 13, color: C.mutedText, lineHeight: 1.7 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "88px 24px", background: C.white }} className="sec-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label">Our Process</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.6rem, 3vw, 2.6rem)", color: C.navy, fontWeight: 800, marginBottom: 14 }}>How It Works</h2>
            <p style={{ color: C.mutedText, maxWidth: 420, margin: "0 auto", lineHeight: 1.7, fontSize: 15 }}>A simple, transparent 4-step process from enquiry to certificate.</p>
          </div>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <div key={s.step} style={{ background: C.white, borderRadius: 16, padding: 28, border: `1.5px solid ${C.border}`, textAlign: "center", position: "relative" }}>
                {i < steps.length - 1 && (
                  <div className="step-connector" style={{ position: "absolute", top: 44, right: -12, width: 24, height: 2, background: C.primary, zIndex: 1 }} />
                )}
                <div style={{ width: 56, height: 56, margin: "0 auto 16px", borderRadius: 16, backgroundColor: C.primaryLight, border: `2px solid #FED7AA`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{s.icon}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: C.primary, letterSpacing: "0.1em", marginBottom: 8 }}>STEP {s.step}</div>
                <h3 style={{ fontFamily: C.serif, fontSize: 17, color: C.navy, marginBottom: 10, fontWeight: 700 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: C.mutedText, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section style={{ position: "relative", padding: "80px 24px", overflow: "hidden" }} className="sec-pad">
        <img
          src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1600&q=80&fit=crop"
          alt="Industries served"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(12,35,64,0.88)" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.primary, marginBottom: 12 }}>Industries We Serve</div>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.4rem, 3vw, 2.4rem)", color: "#fff", fontWeight: 800 }}>Trusted Across Every Sector</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            {industries.map((ind) => (
              <span key={ind} className="industry-tag">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "88px 24px", background: C.offWhite }} className="sec-pad">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label">Client Stories</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.6rem, 3vw, 2.6rem)", color: C.navy, fontWeight: 800 }}>What Our Clients Say</h2>
          </div>
          <div className="testi-grid">
            {testimonials.map((t) => (
              <div key={t.name} className="testi-card">
                <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                  {[...Array(t.rating)].map((_, i) => <span key={i} style={{ color: "#F59E0B", fontSize: 16 }}>★</span>)}
                </div>
                <p style={{ color: C.bodyText, fontSize: 14, lineHeight: 1.8, marginBottom: 24, fontStyle: "italic" }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: C.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: C.serif, color: C.primary, fontWeight: 800, fontSize: 17, flexShrink: 0 }}>{t.name[0]}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: C.navy, fontSize: 14 }}>{t.name}</div>
                    <div style={{ color: C.mutedText, fontSize: 12 }}>{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ position: "relative", padding: "88px 24px", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1568219557405-376e23e4f7cf?w=1600&q=80&fit=crop"
          alt="Get certified"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(249,115,22,0.92) 0%, rgba(234,88,12,0.88) 100%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.6rem, 3vw, 2.8rem)", color: "#fff", marginBottom: 16, fontWeight: 800 }}>
            Start Your Certification Journey Today
          </h2>
          <p style={{ color: "rgba(255,255,255,0.88)", marginBottom: 40, lineHeight: 1.7, fontSize: 16 }}>
            Our experts are ready to help. Get a free consultation and know exactly what you need — at no cost.
          </p>
          <div className="cta-btn-row">
            <button
              onClick={() => router.push("/contact")}
              style={{ padding: "16px 40px", backgroundColor: "#fff", color: C.primary, fontWeight: 800, borderRadius: 12, border: "none", fontSize: 15, cursor: "pointer", fontFamily: C.sans, boxShadow: "0 6px 24px rgba(0,0,0,0.15)" }}
            >Get Free Consultation</button>
            <a
              href="tel:+919540190334"
              style={{ padding: "16px 32px", border: "2px solid rgba(255,255,255,0.6)", color: "#fff", borderRadius: 12, textDecoration: "none", fontSize: 15, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8 }}
            >📞 +91-9540190334</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}