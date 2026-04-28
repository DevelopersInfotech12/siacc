"use cient"

import Link from "next/link";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const C = {
  forest: "#1B4332", forestMid: "#2D6A4F", forestLight: "#40916C",
  mint: "#95D5B2", mintLight: "#D8F3DC", gold: "#D4A017",
  offWhite: "#F7FAF8", charcoal: "#1A1A2E", gray: "#6B7280", white: "#ffffff",
  serif: "'Playfair Display', Georgia, serif", sans: "'DM Sans', system-ui, sans-serif",
};

const categories = [
  {
    id: "bis", icon: "🏅", title: "BIS Certification",
    subtitle: "Bureau of Indian Standards",
    color: "#EEF7F0", border: "#B7DFC5",
    href: "/screens/BISScreen",
    desc: "Mandatory quality certification for electronics, consumer goods, and industrial products sold in India.",
    services: [
      { name: "BIS ISI Mark Certification", tag: "Mandatory" },
      { name: "BIS CRS Registration", tag: "Electronics" },
      { name: "BIS Scheme-X Certification", tag: "Foreign Mfr" },
      { name: "BIS Hallmarking for Gold", tag: "Jewellery" },
      { name: "FMCS Mark Certification", tag: "" },
      { name: "ECO Mark Certification", tag: "" },
      { name: "Laboratory Accreditation", tag: "" },
      { name: "WMI Registration", tag: "" },
    ],
  },
  {
    id: "epr", icon: "♻️", title: "EPR Registration",
    subtitle: "Extended Producer Responsibility",
    color: "#EDF7F2", border: "#A8D5BE",
    href: "/screens/EPRScreen",
    desc: "Mandatory registration under CPCB for producers, importers & brand owners managing waste.",
    services: [
      { name: "EPR for E-Waste", tag: "Mandatory" },
      { name: "EPR for Plastic Waste", tag: "Mandatory" },
      { name: "EPR for Battery Waste", tag: "Mandatory" },
      { name: "EPR for Tyre Waste", tag: "" },
      { name: "EPR for Used Oil", tag: "" },
      { name: "CPCB Authorization", tag: "" },
      { name: "No Objection Certificate", tag: "" },
    ],
  },
  {
    id: "wpc", icon: "📡", title: "WPC Approval",
    subtitle: "Wireless Planning & Coordination",
    color: "#EEF5F7", border: "#A8CEDB",
    href: "/screens/WPCScreen",
    desc: "Essential approval for all wireless, Bluetooth, Wi-Fi, and RF devices imported or sold in India.",
    services: [
      { name: "WPC-ETA Approval", tag: "Import" },
      { name: "WPC Import License", tag: "" },
      { name: "DPL / NDPL License", tag: "" },
      { name: "Equipment Type Approval", tag: "" },
    ],
  },
  {
    id: "tec", icon: "📶", title: "TEC / MTCTE",
    subtitle: "Telecom Engineering Centre",
    color: "#F5F0F7", border: "#C9B8DB",
    href: "/screens/TECScreen",
    desc: "Mandatory certification under DoT for all telecom equipment and IoT devices in India.",
    services: [
      { name: "TEC / MTCTE Certification", tag: "Mandatory" },
      { name: "TAC & IMEI Registration", tag: "Mobiles" },
      { name: "IoT Device Certification", tag: "" },
      { name: "Telecom Equipment Approval", tag: "" },
    ],
  },
  {
    id: "bee", icon: "⚡", title: "BEE Registration",
    subtitle: "Bureau of Energy Efficiency",
    color: "#FDF8EE", border: "#E8D5A0",
    href: "/screens/BEEScreen",
    desc: "Mandatory star labelling for energy-consuming appliances sold in India under BEE norms.",
    services: [
      { name: "BEE Star Label Registration", tag: "Mandatory" },
      { name: "Energy Efficiency Certification", tag: "" },
      { name: "Mandatory Star Rating", tag: "" },
      { name: "Voluntary Star Rating", tag: "" },
    ],
  },
  {
    id: "lmpc", icon: "⚖️", title: "LMPC Registration",
    subtitle: "Legal Metrology Packaged Commodities",
    color: "#F7F0EE", border: "#DBCAB8",
    href: "/screens/LMPCScreen",
    desc: "Mandatory compliance for all pre-packaged goods sold in India under Legal Metrology Act.",
    services: [
      { name: "LMPC Import License", tag: "Mandatory" },
      { name: "LMPC Manufacturer Registration", tag: "" },
      { name: "Packaged Commodity Registration", tag: "" },
      { name: "Legal Metrology Certification", tag: "" },
    ],
  },
  {
    id: "iso", icon: "🌐", title: "ISO Certification",
    subtitle: "International Standards Organization",
    color: "#EEF7F5", border: "#A8D5CF",
    href: "/screens/ISOScreen",
    desc: "Globally recognized quality management and environmental standards for all industries.",
    services: [
      { name: "ISO 9001 – Quality Management", tag: "Most Popular" },
      { name: "ISO 14001 – Environment", tag: "" },
      { name: "ISO 45001 – Health & Safety", tag: "" },
      { name: "ISO 27001 – Information Security", tag: "" },
      { name: "ISO 22000 – Food Safety", tag: "" },
      { name: "ISO 13485 – Medical Devices", tag: "" },
    ],
  },
  {
    id: "cdsco", icon: "💊", title: "CDSCO Licensing",
    subtitle: "Central Drugs Standard Control Organization",
    color: "#F7EEF5", border: "#DBB8D5",
    href: "/screens/CDSCOScreen",
    desc: "Regulatory approvals for drugs, cosmetics, and medical devices under CDSCO / DCGI.",
    services: [
      { name: "Drug License", tag: "" },
      { name: "Cosmetic License", tag: "" },
      { name: "Medical Device Registration", tag: "" },
      { name: "CDSCO Import License", tag: "" },
      { name: "DCGI Approval", tag: "" },
    ],
  },
];

const process = [
  { step: "01", title: "Consultation", desc: "Free assessment of your product and applicable certification requirements." },
  { step: "02", title: "Documentation", desc: "Our experts prepare and verify every document needed for your application." },
  { step: "03", title: "Application", desc: "We file the complete, error-free application with the regulatory body." },
  { step: "04", title: "Follow-up", desc: "We actively track and respond to queries until your certificate is issued." },
];

export default function ServicesScreen() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: C.offWhite, fontFamily: C.sans }}>
      <Navbar />

      {/* Hero */}
      <section style={{ backgroundColor: C.forest, padding: "80px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(149,213,178,0.15)", transform: "translate(30%,-30%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <Link href="/" style={{ color: C.mint, fontSize: 13, textDecoration: "none" }}>Home</Link>
            <span style={{ color: C.forestLight, fontSize: 13 }}>/</span>
            <span style={{ color: C.mintLight, fontSize: 13 }}>Services</span>
          </div>
          <span style={{ fontSize: 11, fontWeight: 600, color: C.mint, letterSpacing: "0.12em", textTransform: "uppercase" }}>What We Offer</span>
          <h1 style={{ fontFamily: C.serif, fontSize: "clamp(2rem,4vw,3.2rem)", color: C.white, marginTop: 12, marginBottom: 20, fontWeight: 700, lineHeight: 1.2 }}>
            50+ Certification &<br />Compliance Services
          </h1>
          <p style={{ color: "#b7e4c7", fontSize: 16, lineHeight: 1.8, maxWidth: 580 }}>
            End-to-end regulatory compliance solutions for manufacturers, importers, and brand owners. From BIS and EPR to ISO and CDSCO — we've got every certification covered.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: C.forestMid }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "28px 24px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
          {[{ v: "50+", l: "Services Offered" }, { v: "15+", l: "Regulatory Bodies" }, { v: "10K+", l: "Clients Served" }, { v: "98%", l: "Success Rate" }].map((s) => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: C.serif, fontSize: "clamp(1.6rem,2.5vw,2.2rem)", color: C.mint, fontWeight: 700 }}>{s.v}</div>
              <div style={{ fontSize: 12, color: C.mintLight, marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: C.forestLight, letterSpacing: "0.12em", textTransform: "uppercase" }}>All Services</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.forest, marginTop: 12, fontWeight: 700 }}>Browse by Category</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {categories.map((cat, idx) => (
              <div key={cat.id} style={{ backgroundColor: C.white, borderRadius: 20, border: `1px solid ${C.mintLight}`, overflow: "hidden" }}>
                {/* Category header */}
                <div style={{ backgroundColor: cat.color, padding: "28px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, borderBottom: `1px solid ${cat.border}` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{ width: 56, height: 56, borderRadius: 14, backgroundColor: C.white, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                      {cat.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: C.forestLight, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>{cat.subtitle}</div>
                      <h3 style={{ fontFamily: C.serif, fontSize: 22, color: C.forest, fontWeight: 700, margin: 0 }}>{cat.title}</h3>
                    </div>
                  </div>
                  <div style={{ maxWidth: 420 }}>
                    <p style={{ fontSize: 13, color: C.gray, lineHeight: 1.65, margin: "0 0 12px" }}>{cat.desc}</p>
                    <Link href={cat.href} style={{ display: "inline-block", padding: "9px 20px", backgroundColor: C.forest, color: C.white, borderRadius: 10, textDecoration: "none", fontSize: 13, fontWeight: 600 }}>
                      Learn More →
                    </Link>
                  </div>
                </div>

                {/* Service items */}
                <div style={{ padding: "24px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 12 }}>
                  {cat.services.map((svc) => (
                    <Link key={svc.name} href={cat.href}
                      style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderRadius: 10, border: `1px solid ${C.mintLight}`, textDecoration: "none", backgroundColor: C.offWhite }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.mint; e.currentTarget.style.backgroundColor = C.mintLight; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.mintLight; e.currentTarget.style.backgroundColor = C.offWhite; }}
                    >
                      <span style={{ fontSize: 13, color: C.charcoal, fontWeight: 500 }}>{svc.name}</span>
                      {svc.tag && <span style={{ fontSize: 10, fontWeight: 600, backgroundColor: C.mintLight, color: C.forest, padding: "2px 8px", borderRadius: 999, marginLeft: 8, flexShrink: 0 }}>{svc.tag}</span>}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ backgroundColor: C.mintLight, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: C.forestLight, letterSpacing: "0.12em", textTransform: "uppercase" }}>How We Work</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.forest, marginTop: 12, fontWeight: 700 }}>Simple 4-Step Process</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 24 }}>
            {process.map((p) => (
              <div key={p.step} style={{ textAlign: "center" }}>
                <div style={{ width: 72, height: 72, margin: "0 auto 20px", borderRadius: 18, backgroundColor: C.forest, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(27,67,50,0.2)" }}>
                  <span style={{ fontFamily: C.serif, fontSize: 22, color: C.mint, fontWeight: 700 }}>{p.step}</span>
                </div>
                <h3 style={{ fontFamily: C.serif, fontSize: 17, color: C.forest, marginBottom: 10, fontWeight: 600 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: C.gray, lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: C.forest, padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.7rem,3vw,2.4rem)", color: C.white, marginBottom: 16, fontWeight: 700 }}>Not Sure Which Certification You Need?</h2>
          <p style={{ color: C.mint, marginBottom: 32, lineHeight: 1.7, fontSize: 15 }}>Talk to our experts for free — we'll tell you exactly what's required for your product.</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
            <Link href="/screens/ContactScreen" style={{ padding: "14px 32px", backgroundColor: C.mint, color: C.forest, fontWeight: 700, borderRadius: 12, textDecoration: "none", fontSize: 14 }}>Get Free Consultation</Link>
            <a href="tel:+919876543210" style={{ padding: "14px 32px", border: `1px solid ${C.mint}`, color: C.mint, borderRadius: 12, textDecoration: "none", fontSize: 14 }}>📞 +91 98765 43210</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}