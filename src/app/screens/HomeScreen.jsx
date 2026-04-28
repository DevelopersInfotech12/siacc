"use client";
import Link from "next/link";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const stats = [
  { value: "12+", label: "Years of Experience" },
  { value: "10,000+", label: "Happy Clients" },
  { value: "50+", label: "Certifications Covered" },
  { value: "98%", label: "Success Rate" },
  { value: "500+", label: "Products Certified" },
];

const services = [
  { icon: "🏅", title: "BIS Certification", desc: "ISI Mark, CRS, Scheme-X for electronics & consumer products.", href: "/bis", tag: "Most Popular" },
  { icon: "♻️", title: "EPR Registration", desc: "E-Waste, Plastic, Battery, Tyre & Used Oil EPR compliance.", href: "/epr", tag: "Mandatory" },
  { icon: "📡", title: "WPC-ETA Approval", desc: "Wireless, Bluetooth & RF device import approvals.", href: "/wpc", tag: "" },
  { icon: "📶", title: "TEC / MTCTE", desc: "Telecom & IoT product approvals under DoT norms.", href: "/tec", tag: "" },
  { icon: "⚡", title: "BEE Registration", desc: "Energy star labelling & BEE compliance for appliances.", href: "/bee", tag: "" },
  { icon: "⚖️", title: "LMPC Registration", desc: "Legal Metrology compliance for packaged goods importers.", href: "/lmpc", tag: "" },
  { icon: "🌐", title: "ISO Certification", desc: "ISO 9001, 14001, 45001, 27001 and more for all sectors.", href: "/iso", tag: "" },
  { icon: "💊", title: "CDSCO / Drug License", desc: "Medical device, drug & cosmetic license in India.", href: "/cdsco", tag: "" },
];

const whyUs = [
  { icon: "🛡️", title: "Trusted & Experienced", desc: "12+ years of dedicated certification expertise across 50+ regulatory frameworks in India." },
  { icon: "⚡", title: "Fast Turnaround", desc: "Streamlined processes with dedicated managers ensure the fastest possible approvals." },
  { icon: "🕐", title: "24/7 Support", desc: "Round-the-clock assistance from our expert team — always a call or message away." },
  { icon: "💰", title: "Transparent Pricing", desc: "No hidden charges. Fixed pricing with clear timelines from day one." },
  { icon: "📋", title: "End-to-End Service", desc: "From documentation to final certificate — we handle every step for you." },
  { icon: "🏆", title: "98% Success Rate", desc: "Our meticulous process and regulatory expertise delivers results every time." },
  { icon: "🤝", title: "Dedicated Account Manager", desc: "A single point of contact assigned to you for the entire certification journey — no confusion, no delays." },
  { icon: "🔄", title: "Post-Certification Support", desc: "We assist with renewals, amendments, and compliance updates even after your certificate is issued." },
];

const steps = [
  { step: "01", title: "Free Consultation", desc: "Tell us your product & requirements. We assess and advise on the right certification path." },
  { step: "02", title: "Document Preparation", desc: "Our experts guide you through every document and lab test required for your application." },
  { step: "03", title: "Application Filing", desc: "We file the complete application with the regulatory body on your behalf." },
  { step: "04", title: "Certificate Delivery", desc: "We track and follow up until your certificate is issued and delivered to you." },
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
  { name: "Sneha Verma", company: "MediCare Devices Pvt. Ltd.", text: "Getting our CDSCO license felt impossible before we found Siacc. Their expertise and follow-up made the entire process stress-free and swift.", rating: 5 },
];

const C = {
  forest: "#1B4332",
  forestMid: "#2D6A4F",
  forestLight: "#40916C",
  mint: "#95D5B2",
  mintLight: "#D8F3DC",
  gold: "#D4A017",
  offWhite: "#F7FAF8",
  charcoal: "#1A1A2E",
  gray: "#6B7280",
  white: "#ffffff",
  serif: "'Playfair Display', Georgia, serif",
  sans: "'DM Sans', system-ui, sans-serif",
};

export default function HomeScreen() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: C.offWhite, fontFamily: C.sans }}>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 64px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; gap: 40px; }
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr; }
        }

        .whyus-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }
        @media (max-width: 600px) {
          .whyus-grid { grid-template-columns: 1fr; }
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
        }
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr); gap: 36px; }
        }
        @media (max-width: 480px) {
          .steps-grid { grid-template-columns: 1fr; }
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }
        @media (max-width: 600px) {
          .testimonials-grid { grid-template-columns: 1fr; }
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 36px;
        }

        .cta-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }

        .service-card {
          background-color: #ffffff;
          border-radius: 16px;
          padding: 24px;
          border: 1px solid #D8F3DC;
          text-decoration: none;
          display: block;
          transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .service-card:hover {
          border-color: #95D5B2;
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(27,67,50,0.12);
        }

        @media (max-width: 768px) {
          .section-padding { padding: 56px 16px !important; }
          .hero-section { padding: 56px 16px 64px !important; }
        }
      `}</style>

      <Navbar />

      {/* ── HERO ── */}
      <section style={{ backgroundColor: C.forest, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 40, right: 40, width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(149,213,178,0.18)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 110, right: 110, width: 180, height: 180, borderRadius: "50%", border: "1px solid rgba(149,213,178,0.12)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -40, left: 60, width: 240, height: 240, borderRadius: "50%", border: "1px solid rgba(149,213,178,0.12)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px 96px", position: "relative", zIndex: 1 }}>
          <div className="hero-grid">

            {/* Left content */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: C.forestMid, border: `1px solid ${C.forestLight}`, borderRadius: 999, padding: "6px 16px", marginBottom: 24 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: C.mint, display: "inline-block" }} />
                <span style={{ color: C.mint, fontSize: 12, fontWeight: 500, letterSpacing: "0.05em" }}>India's #1 Compliance Consultancy</span>
              </div>

              <h1 style={{ fontFamily: C.serif, fontSize: "clamp(2rem, 4vw, 3.4rem)", color: C.white, lineHeight: 1.2, marginBottom: 20, fontWeight: 700 }}>
                Certifications Made{" "}
                <span style={{ color: C.mint }}>Simple</span>,{" "}
                <em>Fast</em> &amp; Reliable
              </h1>

              <p style={{ color: "#b7e4c7", fontSize: 17, lineHeight: 1.75, marginBottom: 36, maxWidth: 520 }}>
                From BIS and EPR to ISO and CDSCO — we handle every certification your product needs to enter the Indian market legally and confidently.
              </p>

              <div className="hero-buttons">
                <Link href="/contact" style={{ padding: "13px 28px", backgroundColor: C.mint, color: C.forest, fontWeight: 700, borderRadius: 12, textDecoration: "none", fontSize: 14, fontFamily: C.sans }}>
                  Get Free Consultation
                </Link>
                <Link href="/services" style={{ padding: "13px 28px", border: `1px solid ${C.forestLight}`, color: C.mint, borderRadius: 12, textDecoration: "none", fontSize: 14 }}>
                  Explore Services →
                </Link>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {["BIS Authorized", "ISO Certified", "DPIIT Recognized"].map((b) => (
                  <span key={b} style={{ padding: "5px 14px", border: `1px solid ${C.forestLight}`, color: C.mint, borderRadius: 999, fontSize: 12 }}>✓ {b}</span>
                ))}
              </div>
            </div>

            {/* Enquiry card */}
            <div style={{ backgroundColor: C.forestMid, borderRadius: 20, padding: 28, border: `1px solid ${C.forestLight}` }}>
              <div style={{ color: C.mint, fontSize: 12, fontWeight: 600, marginBottom: 18, letterSpacing: "0.08em", textTransform: "uppercase" }}>Quick Enquiry</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[{ type: "text", ph: "Your Full Name" }, { type: "tel", ph: "Phone Number" }, { type: "email", ph: "Email Address" }].map((f) => (
                  <input key={f.ph} type={f.type} placeholder={f.ph} style={{ width: "100%", padding: "12px 16px", backgroundColor: C.forest, border: `1px solid ${C.forestLight}`, borderRadius: 12, color: C.white, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: C.sans }} />
                ))}
                <select style={{ width: "100%", padding: "12px 16px", backgroundColor: C.forest, border: `1px solid ${C.forestLight}`, borderRadius: 12, color: C.mint, fontSize: 14, outline: "none", fontFamily: C.sans }}>
                  <option value="">Select Service Required</option>
                  {services.map((s) => <option key={s.title}>{s.title}</option>)}
                </select>
                <textarea rows={3} placeholder="Brief requirement..." style={{ width: "100%", padding: "12px 16px", backgroundColor: C.forest, border: `1px solid ${C.forestLight}`, borderRadius: 12, color: C.white, fontSize: 14, outline: "none", resize: "none", boxSizing: "border-box", fontFamily: C.sans }} />
                <button style={{ width: "100%", padding: 14, backgroundColor: C.mint, color: C.forest, fontWeight: 700, borderRadius: 12, border: "none", fontSize: 14, cursor: "pointer", fontFamily: C.sans }}>
                  Submit Enquiry →
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ backgroundColor: C.forestMid }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 24px" }}>
          <div className="stats-grid">
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: C.serif, fontSize: "clamp(1.8rem,3vw,2.6rem)", color: C.mint, fontWeight: 700 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: C.mintLight, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: C.forestLight, letterSpacing: "0.12em", textTransform: "uppercase" }}>What We Offer</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.forest, marginTop: 12, marginBottom: 14, fontWeight: 700 }}>Our Certification Services</h2>
            <p style={{ color: C.gray, maxWidth: 540, margin: "0 auto", lineHeight: 1.7, fontSize: 15 }}>Comprehensive compliance solutions for manufacturers, importers, and brand owners across all regulatory frameworks in India.</p>
          </div>

          <div className="services-grid">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="service-card">
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                  <div style={{ width: 48, height: 48, backgroundColor: C.mintLight, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{s.icon}</div>
                  {s.tag && <span style={{ fontSize: 10, fontWeight: 600, backgroundColor: C.mintLight, color: C.forest, padding: "3px 10px", borderRadius: 999 }}>{s.tag}</span>}
                </div>
                <h3 style={{ fontFamily: C.serif, fontSize: 17, color: C.forest, marginBottom: 8, fontWeight: 600 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: C.gray, lineHeight: 1.65, marginBottom: 16 }}>{s.desc}</p>
                <span style={{ color: C.forestLight, fontSize: 12, fontWeight: 600 }}>Learn More →</span>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/services" style={{ display: "inline-block", padding: "14px 32px", backgroundColor: C.forest, color: C.white, borderRadius: 12, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>
              View All 50+ Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ backgroundColor: C.mintLight, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: C.forestLight, letterSpacing: "0.12em", textTransform: "uppercase" }}>Why Siacc</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.forest, marginTop: 12, fontWeight: 700 }}>What Makes Us Different</h2>
          </div>
          <div className="whyus-grid">
            {whyUs.map((w) => (
              <div key={w.title} style={{ backgroundColor: C.white, borderRadius: 16, padding: 28, border: "1px solid rgba(149,213,178,0.5)" }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{w.icon}</div>
                <h3 style={{ fontFamily: C.serif, fontSize: 17, color: C.forest, marginBottom: 10, fontWeight: 600 }}>{w.title}</h3>
                <p style={{ fontSize: 13, color: C.gray, lineHeight: 1.7 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: C.forestLight, letterSpacing: "0.12em", textTransform: "uppercase" }}>Our Process</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.forest, marginTop: 12, fontWeight: 700 }}>How It Works</h2>
            <p style={{ color: C.gray, maxWidth: 420, margin: "12px auto 0", textAlign: "center", lineHeight: 1.7, fontSize: 15 }}>
              A simple, transparent 4-step process from inquiry to certificate.
            </p>
          </div>
          <div className="steps-grid">
            {steps.map((s) => (
              <div key={s.step} style={{ textAlign: "center" }}>
                <div style={{ width: 80, height: 80, margin: "0 auto 20px", borderRadius: 20, backgroundColor: C.forest, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(27,67,50,0.22)" }}>
                  <span style={{ fontFamily: C.serif, fontSize: 24, color: C.mint, fontWeight: 700 }}>{s.step}</span>
                </div>
                <h3 style={{ fontFamily: C.serif, fontSize: 17, color: C.forest, marginBottom: 10, fontWeight: 600 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: C.gray, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section style={{ backgroundColor: C.forest, padding: "64px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: C.mint, letterSpacing: "0.12em", textTransform: "uppercase" }}>Industries We Serve</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.6rem,3vw,2.2rem)", color: C.white, marginTop: 12, fontWeight: 700 }}>Trusted Across Every Sector</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            {industries.map((ind) => (
              <span key={ind} style={{ padding: "10px 20px", border: `1px solid ${C.forestLight}`, color: C.mint, borderRadius: 12, fontSize: 13 }}>{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: C.forestLight, letterSpacing: "0.12em", textTransform: "uppercase" }}>Client Stories</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.forest, marginTop: 12, fontWeight: 700 }}>What Our Clients Say</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div key={t.name} style={{ backgroundColor: C.white, borderRadius: 20, padding: 28, border: `1px solid ${C.mintLight}` }}>
                <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                  {[...Array(t.rating)].map((_, i) => <span key={i} style={{ color: C.gold, fontSize: 16 }}>★</span>)}
                </div>
                <p style={{ color: "#374151", fontSize: 14, lineHeight: 1.75, marginBottom: 24, fontStyle: "italic" }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 42, height: 42, borderRadius: "50%", backgroundColor: C.mintLight, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: C.serif, color: C.forest, fontWeight: 700, fontSize: 16, flexShrink: 0 }}>{t.name[0]}</div>
                  <div>
                    <div style={{ fontWeight: 600, color: C.charcoal, fontSize: 14 }}>{t.name}</div>
                    <div style={{ color: C.forestLight, fontSize: 12 }}>{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ backgroundColor: C.forestMid, padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.white, marginBottom: 16, fontWeight: 700 }}>Start Your Certification Journey Today</h2>
          <p style={{ color: C.mint, marginBottom: 32, lineHeight: 1.7, fontSize: 15 }}>Our experts are ready to help. Get a free consultation and know exactly what you need — at no cost.</p>
          <div className="cta-buttons">
            <Link href="/contact" style={{ padding: "14px 32px", backgroundColor: C.mint, color: C.forest, fontWeight: 700, borderRadius: 12, textDecoration: "none", fontSize: 14 }}>Get Free Consultation</Link>
            <a href="tel:+919876543210" style={{ padding: "14px 32px", border: `1px solid ${C.mint}`, color: C.mint, borderRadius: 12, textDecoration: "none", fontSize: 14 }}>📞 Call: +91 98765 43210</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}