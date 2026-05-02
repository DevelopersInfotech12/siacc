"use client";
import { useRouter } from "next/navigation";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

/* ── Shared token palette ── */
const T = {
  teal: "#1E88C8", tealDark: "#074D4D", tealMid: "#0E8080",
  tealLight: "#EBF5F5", tealGhost: "#F4FAFA",
  amber: "#C8780A", amberLight: "#FEF3DC", amberDark: "#9A5C06",
  slate: "#0D1B2A", slateMid: "#1C3144",
  body: "#2D3748", muted: "#718096", subtle: "#A0AEC0",
  border: "#E8E3DA", borderLight: "#F0ECE5",
  white: "#FFFFFF", cream: "#FAF8F4", creamMid: "#F3EFE8",
  ctaBand: "#EBF5FB", ctaBandBorder: "#C8DFF0",
  orange: "#F97316", orangeDark: "#EA6A0A",
  serif: "'Cormorant Garamond', 'Georgia', serif",
  sans: "'Outfit', 'system-ui', sans-serif",
};

const wpcTypes = [
  { icon: "📡", title: "WPC-ETA Approval",      tag: "Import Mandatory", desc: "Equipment Type Approval for importing wireless devices with Bluetooth, Wi-Fi, Zigbee, or RF frequency bands." },
  { icon: "📋", title: "WPC Import License",     tag: "Commercial Import", desc: "Required for commercial import of wireless telecom equipment into India under WPC norms." },
  { icon: "📻", title: "DPL / NDPL License",     tag: "Possession",       desc: "Demonstration Purpose License and Non-Demonstration Purpose License for RF devices." },
  { icon: "🔬", title: "Equipment Type Approval", tag: "Testing",         desc: "Type approval for telecom equipment submitted for testing and approval under DoT guidelines." },
];

const steps = [
  { step: "01", title: "Product Assessment", desc: "Identify the frequency bands used by your device and the applicable WPC license type.", icon: "🔍" },
  { step: "02", title: "Lab Testing",        desc: "Device samples are sent to WPC-recognized labs for RF/EMC testing and compliance verification.", icon: "🧪" },
  { step: "03", title: "Application Filing", desc: "We file the WPC-ETA application through the Saralsanchar portal on your behalf.", icon: "📤" },
  { step: "04", title: "WPC Review",         desc: "WPC Wing of DoT reviews the application. We track and respond to any queries raised.", icon: "🔎" },
  { step: "05", title: "Approval Issued",    desc: "WPC issues the Equipment Type Approval certificate valid for import and sale in India.", icon: "🎓" },
];

const documents = [
  "Product technical specifications", "RF test report from recognized lab",
  "Product photographs (all sides)",  "User manual / product brochure",
  "Company registration documents",   "Authorized representative letter",
  "Import-Export Code (IEC)",         "Declaration of conformity",
];

const faqs = [
  { q: "Which devices need WPC-ETA approval?", a: "Any device using unlicensed radio frequency spectrum — including Wi-Fi, Bluetooth, Zigbee, Z-Wave, RFID, GPS modules, and wireless IoT devices — requires WPC-ETA approval before import." },
  { q: "Can I import wireless devices without WPC approval?", a: "No. Importing wireless devices without WPC-ETA is illegal and the shipment will be detained at customs. The importer can also face penalties." },
  { q: "How long is WPC-ETA approval valid?", a: "WPC-ETA approvals are typically valid for 5 years from the date of issue and can be renewed." },
  { q: "Do Indian-manufactured wireless devices also need WPC?", a: "WPC-ETA is primarily for imports. Indian manufacturers need a manufacturing license under WPC rules for licensed spectrum devices." },
];

const infoItems = [
  { label: "Governing Body",   value: "WPC Wing, DoT" },
  { label: "Portal",           value: "Saralsanchar.gov.in" },
  { label: "Validity",         value: "5 Years" },
  { label: "Processing Time",  value: "4–8 Weeks" },
  { label: "Applicable To",    value: "Wi-Fi, BT, RF Devices" },
];

const heroTrust = [
  { icon: "📡", label: "All RF Devices",     desc: "Wi-Fi, Bluetooth, Zigbee, and more" },
  { icon: "⚡", label: "4–8 Weeks",          desc: "Faster turnaround with our team" },
  { icon: "🆓", label: "Free Consultation",  desc: "No charges for initial assessment" },
  { icon: "✅", label: "98% Success Rate",   desc: "Across 10,000+ approvals filed" },
];

const statsStrip = [
  { value: "5 yrs", label: "Approval Validity",    icon: "📅" },
  { value: "4–8",   label: "Weeks Timeline",        icon: "⚡" },
  { value: "Free",  label: "Initial Consultation",  icon: "🆓" },
  { value: "98%",   label: "Success Rate",          icon: "✅" },
];

export default function WPCScreen() {
  const router = useRouter();

  return (
    <div style={{ minHeight:"100vh", backgroundColor:T.white, fontFamily:T.sans, color:T.body }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        img { max-width:100%; display:block; }
        a { text-decoration:none; color:inherit; }

        .sl-row { display:flex; align-items:center; gap:12px; margin-bottom:16px; }
        .sl-line { width:28px; height:1.5px; background:${T.teal}; flex-shrink:0; }
        .sl-text { font-family:${T.sans}; font-size:11px; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; color:${T.teal}; }

        /* ── Hero ── */
        .wpc-hero-wrap {
          background:${T.cream}; border-bottom:1px solid ${T.border};
          position:relative; overflow:hidden;
        }
        .wpc-hero-wrap::before {
          content:''; position:absolute; top:-100px; right:-140px;
          width:500px; height:500px;
          background:radial-gradient(circle, rgba(30,136,200,0.11) 0%, transparent 70%);
          border-radius:50%; pointer-events:none;
        }
        .hero-grid { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; }
        @media(max-width:900px){ .hero-grid { grid-template-columns:1fr; gap:40px; } .hero-right { display:none; } }
        .trust-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; }

        /* ── Stats ── */
        .stats-strip { display:grid; grid-template-columns:repeat(4,1fr); }
        @media(max-width:640px){ .stats-strip { grid-template-columns:repeat(2,1fr); } }

        /* ── Main content grid ── */
        .main-grid { display:grid; grid-template-columns:1fr 360px; gap:40px; align-items:flex-start; }
        @media(max-width:1024px){ .main-grid { grid-template-columns:1fr; } }

        /* ── Types ── */
        .types-2col { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:40px; }
        @media(max-width:640px){ .types-2col { grid-template-columns:1fr; } }
        .type-card {
          background:${T.cream}; border-radius:8px; padding:20px;
          border:1px solid ${T.border}; transition:all 0.2s;
        }
        .type-card:hover { border-color:${T.teal}; background:${T.white}; }

        /* ── Steps ── */
        .step-item {
          background:${T.cream}; border-radius:8px; padding:18px 20px;
          border:1px solid ${T.border}; display:flex; gap:16px; align-items:flex-start;
          transition:border-color 0.2s;
        }
        .step-item:hover { border-color:${T.teal}; }

        /* ── Info split ── */
        .info-split { display:grid; grid-template-columns:340px 1fr; gap:20px; align-items:stretch; }
        @media(max-width:900px){ .info-split { grid-template-columns:1fr; } }

        /* ── FAQ ── */
        .faq-card { background:${T.white}; border-radius:10px; padding:22px 24px; border:1px solid ${T.border}; transition:border-color 0.2s; margin-bottom:12px; }
        .faq-card:hover { border-color:${T.teal}; }

        /* ── CTA split ── */
        .cta-split { display:grid; grid-template-columns:1fr auto; gap:40px; align-items:center; }
        @media(max-width:720px){ .cta-split { grid-template-columns:1fr; gap:28px; } }

        .sec { padding:clamp(64px,8vw,104px) clamp(16px,5vw,56px); }
        .inner { max-width:1280px; margin:0 auto; }
      `}</style>

      <Navbar />

      {/* ── HERO — light cream ── */}
      <section className="wpc-hero-wrap">
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"clamp(56px,8vw,96px) clamp(16px,4vw,56px)" }}>
          <div className="hero-grid">

            {/* Left */}
            <div>
              <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:T.tealLight, borderRadius:4, padding:"5px 14px", marginBottom:24 }}>
                <span style={{ width:7, height:7, borderRadius:"50%", background:T.teal, display:"inline-block" }} />
                <span style={{ fontFamily:T.sans, fontSize:10.5, fontWeight:700, color:T.teal, letterSpacing:"0.12em", textTransform:"uppercase" }}>Wireless Planning &amp; Coordination Wing</span>
              </div>

              <h1 style={{ fontFamily:T.serif, fontSize:"clamp(2rem,3.8vw,3.4rem)", color:T.slate, fontWeight:700, lineHeight:1.08, marginBottom:10, letterSpacing:"-0.01em" }}>
                WPC-ETA Approval for{" "}
                <span style={{ color:T.teal }}>Wireless</span>{" "}
                Devices
              </h1>

              <p style={{ fontFamily:T.sans, fontSize:12, fontWeight:600, color:T.tealMid, marginBottom:20, letterSpacing:"0.05em", textTransform:"uppercase" }}>
                Wi-Fi · Bluetooth · Zigbee · RF · IoT Devices
              </p>

              <p style={{ fontFamily:T.sans, fontSize:"clamp(13.5px,1.4vw,15px)", color:T.muted, lineHeight:1.9, marginBottom:32, maxWidth:480 }}>
                Mandatory Equipment Type Approval for all wireless, Bluetooth, Wi-Fi and RF devices imported into India. We handle the entire process — testing, filing and approval tracking.
              </p>

              <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:28 }}>
                <button onClick={() => router.push("/contact")}
                  style={{ padding:"13px 32px", fontFamily:T.sans, fontSize:13.5, fontWeight:600, letterSpacing:"0.02em", border:"none", borderRadius:6, cursor:"pointer", background:T.orange, color:"#fff", boxShadow:"0 4px 16px rgba(10,104,104,0.22)", transition:"all 0.22s" }}
                  onMouseEnter={e => { e.currentTarget.style.background=T.teal; e.currentTarget.style.transform="translateY(-1px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background=T.orange; e.currentTarget.style.transform="translateY(0)"; }}>
                  Get Free Consultation →
                </button>
                <button onClick={() => router.push("/contact")}
                  style={{ padding:"12px 28px", fontFamily:T.sans, fontSize:13.5, fontWeight:600, borderRadius:6, cursor:"pointer", border:`1.5px solid ${T.border}`, color:T.white, background:T.orange, transition:"all 0.22s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor=T.teal; e.currentTarget.style.color=T.teal; e.currentTarget.style.background="transparent"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor=T.border; e.currentTarget.style.color=T.white; e.currentTarget.style.background=T.orange; }}>
                  Check Applicability →
                </button>
              </div>

              <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {["✓ Free Consultation", "✓ 4–8 Wk Turnaround", "✓ 98% Success Rate", "✓ Pan-India"].map(b => (
                  <span key={b} style={{ padding:"6px 14px", border:`1px solid ${T.border}`, borderRadius:4, fontSize:12, color:T.muted, background:T.white, fontFamily:T.sans, fontWeight:500 }}>{b}</span>
                ))}
              </div>
            </div>

            {/* Right — light trust tiles */}
            <div className="hero-right">
              <div className="sl-row" style={{ marginBottom:14 }}><div className="sl-line" /><span className="sl-text">Why Choose Us</span></div>
              <div className="trust-grid">
                {heroTrust.map((t, i) => (
                  <div key={t.label} style={{ background:T.white, border:`1px solid ${T.border}`, borderTop:`3px solid ${i%2===0 ? T.teal : T.amber}`, borderRadius:8, padding:"16px 14px", display:"flex", gap:10, alignItems:"flex-start" }}>
                    <div style={{ fontSize:20, flexShrink:0, lineHeight:1 }}>{t.icon}</div>
                    <div>
                      <div style={{ fontFamily:T.serif, fontSize:14, color:T.slate, fontWeight:600, marginBottom:3 }}>{t.label}</div>
                      <div style={{ fontFamily:T.sans, fontSize:11, color:T.muted, lineHeight:1.5 }}>{t.desc}</div>
                    </div>
                  </div>
                ))}
                <div style={{ gridColumn:"span 2", background:T.tealLight, border:`1px solid ${T.ctaBandBorder}`, borderRadius:8, padding:"12px 16px", display:"flex", alignItems:"center", gap:12 }}>
                  <span style={{ fontSize:20, flexShrink:0 }}>🏢</span>
                  <div>
                    <div style={{ fontFamily:T.sans, fontSize:13, color:T.slate, fontWeight:600, marginBottom:2 }}>Based in New Delhi</div>
                    <div style={{ fontFamily:T.sans, fontSize:11, color:T.muted }}>Serving all of India · DoT Compliant</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div style={{ height:2, background:T.borderLight }}>
          <div style={{ width:"100%", height:"100%", background:T.teal, opacity:0.4 }} />
        </div>
      </section>

      {/* ── STATS STRIP — teal ── */}
      <section style={{ background:T.teal }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <div className="stats-strip">
            {statsStrip.map((s, i) => (
              <div key={s.label} style={{ textAlign:"center", padding:"36px 16px", borderRight: i < statsStrip.length-1 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                <div style={{ fontSize:20, marginBottom:6 }}>{s.icon}</div>
                <div style={{ fontFamily:T.serif, fontSize:"clamp(2rem,2.8vw,2.8rem)", color:"#fff", fontWeight:700, lineHeight:1, letterSpacing:"-0.01em" }}>{s.value}</div>
                <div style={{ fontFamily:T.sans, fontSize:12, color:"rgba(255,255,255,0.80)", marginTop:8, letterSpacing:"0.04em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT + SIDEBAR — white ── */}
      <section className="sec" style={{ background:T.white }}>
        <div className="inner">
          <div className="main-grid">

            {/* Left — overview card */}
            <div style={{ background:T.white, borderRadius:10, padding:36, border:`1px solid ${T.border}`, boxShadow:"0 4px 24px rgba(0,0,0,0.05)" }}>

              {/* Banner */}
              <div style={{ position:"relative", borderRadius:8, overflow:"hidden", height:150, marginBottom:28 }}>
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80&fit=crop" alt="WPC" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 40%" }} />
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right, rgba(14,128,128,0.88) 0%, rgba(30,136,200,0.55) 60%, rgba(235,245,251,0.25) 100%)" }} />
                <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", padding:"0 24px" }}>
                  <div>
                    <div style={{ fontFamily:T.serif, fontSize:"clamp(1rem,2vw,1.3rem)", color:"#fff", fontWeight:700, marginBottom:4 }}>End-to-End WPC Compliance</div>
                    <p style={{ fontFamily:T.sans, color:"rgba(255,255,255,0.78)", fontSize:12 }}>From product assessment to approval certificate — we manage every step.</p>
                  </div>
                </div>
              </div>

              {/* Types */}
              <div className="sl-row"><div className="sl-line" /><span className="sl-text">WPC License Types</span></div>
              <h2 style={{ fontFamily:T.serif, fontSize:"clamp(1.4rem,2vw,1.9rem)", color:T.slate, fontWeight:700, marginBottom:8 }}>Which WPC Approval Do You Need?</h2>
              <p style={{ fontFamily:T.sans, fontSize:14, color:T.muted, lineHeight:1.75, marginBottom:24 }}>Different wireless devices require different WPC approvals. Here's a breakdown of what applies to your product.</p>

              <div className="types-2col">
                {wpcTypes.map((t, i) => (
                  <div key={t.title} className="type-card">
                    <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:12 }}>
                      <div style={{ width:44, height:44, background:T.tealLight, borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20 }}>{t.icon}</div>
                      <span style={{ fontFamily:T.sans, fontSize:10, fontWeight:700, background: i%2===0 ? T.tealLight : T.amberLight, color: i%2===0 ? T.tealMid : T.amberDark, padding:"3px 10px", borderRadius:3, letterSpacing:"0.06em" }}>{t.tag}</span>
                    </div>
                    <h3 style={{ fontFamily:T.serif, fontSize:14, color:T.slate, marginBottom:8, fontWeight:600 }}>{t.title}</h3>
                    <p style={{ fontFamily:T.sans, fontSize:12, color:T.muted, lineHeight:1.7, margin:0 }}>{t.desc}</p>
                  </div>
                ))}
              </div>

              {/* Steps */}
              <div className="sl-row"><div className="sl-line" /><span className="sl-text">How We Do It</span></div>
              <h2 style={{ fontFamily:T.serif, fontSize:"clamp(1.4rem,2vw,1.9rem)", color:T.slate, fontWeight:700, marginBottom:20 }}>WPC Approval Process</h2>

              <div style={{ display:"flex", flexDirection:"column", gap:12, marginBottom:36 }}>
                {steps.map(s => (
                  <div key={s.step} className="step-item">
                    <div style={{ width:44, height:44, borderRadius:8, background:T.tealLight, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:18 }}>{s.icon}</div>
                    <div>
                      <div style={{ fontFamily:T.sans, fontSize:10.5, fontWeight:700, color:T.teal, letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:3 }}>Step {s.step}</div>
                      <h3 style={{ fontFamily:T.serif, fontSize:14, color:T.slate, marginBottom:5, fontWeight:600 }}>{s.title}</h3>
                      <p style={{ fontFamily:T.sans, fontSize:13, color:T.muted, lineHeight:1.7, margin:0 }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button onClick={() => router.push("/contact")}
                style={{ width:"100%", padding:15, background:T.orange, color:T.white, fontWeight:600, borderRadius:6, border:"none", fontFamily:T.sans, fontSize:14, cursor:"pointer", transition:"background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background=T.teal}
                onMouseLeave={e => e.currentTarget.style.background=T.orange}>
                Start WPC Application →
              </button>
              <p style={{ fontFamily:T.sans, fontSize:12, color:T.subtle, textAlign:"center", marginTop:12 }}>We respond within 2 business hours. No spam, ever.</p>
            </div>

            {/* Right sidebar */}
            <div style={{ display:"flex", flexDirection:"column", gap:16 }}>

              {/* Quick info — ctaBand */}
              <div style={{ background:T.ctaBand, border:`1px solid ${T.ctaBandBorder}`, borderRadius:10, padding:28 }}>
                <div className="sl-row" style={{ marginBottom:20 }}><div className="sl-line" /><span className="sl-text">Quick Info</span></div>
                {infoItems.map((item, i) => (
                  <div key={item.label} style={{ display:"flex", justifyContent:"space-between", padding:"12px 0", borderBottom: i < infoItems.length-1 ? `1px solid ${T.ctaBandBorder}` : "none" }}>
                    <span style={{ fontFamily:T.sans, fontSize:13, color:T.muted }}>{item.label}</span>
                    <span style={{ fontFamily:T.sans, fontSize:13, color:T.slate, fontWeight:600 }}>{item.value}</span>
                  </div>
                ))}
                <button onClick={() => router.push("/contact")}
                  style={{ width:"100%", marginTop:22, padding:13, background:T.orange, color:"#fff", fontWeight:600, borderRadius:6, border:"none", fontFamily:T.sans, fontSize:14, cursor:"pointer", transition:"background 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.background=T.teal}
                  onMouseLeave={e => e.currentTarget.style.background=T.orange}>
                  Get Free Consultation →
                </button>
              </div>

              {/* Documents */}
              <div style={{ background:T.white, borderRadius:10, padding:24, border:`1px solid ${T.border}` }}>
                <div className="sl-row" style={{ marginBottom:16 }}><div className="sl-line" /><span className="sl-text">Documents Required</span></div>
                <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                  {documents.map((doc, i) => (
                    <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:10, fontSize:13, color:T.muted, lineHeight:1.55, fontFamily:T.sans }}>
                      <div style={{ width:22, height:22, borderRadius:"50%", background:T.teal, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1 }}>
                        <span style={{ color:"#fff", fontSize:10, fontWeight:800 }}>✓</span>
                      </div>
                      {doc}
                    </div>
                  ))}
                </div>
                <button onClick={() => router.push("/contact")}
                  style={{ width:"100%", marginTop:20, padding:11, border:`1.5px solid ${T.teal}`, color:T.teal, borderRadius:6, background:"transparent", fontFamily:T.sans, fontSize:13, cursor:"pointer", fontWeight:600, transition:"all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.background=T.teal; e.currentTarget.style.color="#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.color=T.teal; }}>
                  Get Full Checklist →
                </button>
              </div>

              {/* Urgent CTA — teal gradient */}
              <div style={{ position:"relative", borderRadius:10, overflow:"hidden" }}>
                <img src="https://images.unsplash.com/photo-1568219557405-376e23e4f7cf?w=600&q=80&fit=crop" alt="Urgent" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover" }} />
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg, rgba(14,128,128,0.94) 0%, rgba(30,136,200,0.90) 100%)" }} />
                <div style={{ position:"relative", zIndex:1, padding:24 }}>
                  <div style={{ fontSize:22, marginBottom:10 }}>⚡</div>
                  <h3 style={{ fontFamily:T.serif, fontSize:16, color:T.white, marginBottom:8, fontWeight:700 }}>Customs Hold or Deadline?</h3>
                  <p style={{ fontFamily:T.sans, fontSize:13, color:"rgba(255,255,255,0.88)", lineHeight:1.65, marginBottom:18 }}>Shipment detained at port? Our emergency team is available 24/7 to assist with urgent WPC approvals.</p>
                  <a href="tel:+919540190334" style={{ display:"block", textAlign:"center", padding:11, background:T.white, color:T.teal, borderRadius:6, fontFamily:T.sans, fontSize:13, fontWeight:700 }}>Call Emergency Line →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INFO SPLIT — cream ── */}
      <section className="sec" style={{ background:T.cream }}>
        <div className="inner">
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <div style={{ display:"flex", justifyContent:"center", marginBottom:16 }}>
              <div className="sl-row"><div className="sl-line" /><span className="sl-text">About WPC Compliance</span></div>
            </div>
            <h2 style={{ fontFamily:T.serif, fontSize:"clamp(2rem,3.2vw,2.9rem)", color:T.slate, fontWeight:700, letterSpacing:"-0.01em" }}>Why WPC-ETA Matters</h2>
          </div>

          <div className="info-split">
            {/* Info card */}
            <div style={{ background:T.white, borderRadius:10, padding:28, border:`1px solid ${T.border}`, display:"flex", flexDirection:"column", justifyContent:"space-between", transition:"all 0.25s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor=T.teal; e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="0 12px 32px rgba(30,136,200,0.09)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor=T.border; e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}>
              <div>
                <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:24 }}>
                  <div style={{ width:48, height:48, borderRadius:9, background:T.tealLight, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22 }}>📡</div>
                  <div>
                    <div style={{ fontFamily:T.serif, fontSize:20, color:T.slate, fontWeight:700 }}>WPC-ETA Overview</div>
                    <div style={{ fontFamily:T.sans, fontSize:12, color:T.teal, fontWeight:600 }}>Mandatory for Import</div>
                  </div>
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                  {[
                    { icon:"🏛️", val:"Governed by WPC Wing, Ministry of Communications, DoT" },
                    { icon:"🌐", val:"Filed via Saralsanchar.gov.in portal" },
                    { icon:"📅", val:"Valid for 5 years from the date of issue" },
                    { icon:"⏱️", val:"Typical timeline: 4–8 weeks end-to-end" },
                    { icon:"📱", val:"Applies to: Wi-Fi, Bluetooth, Zigbee, RF, GPS, IoT devices" },
                  ].map((item, i) => (
                    <div key={i} style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
                      <span style={{ flexShrink:0, fontSize:16 }}>{item.icon}</span>
                      <span style={{ fontFamily:T.sans, fontSize:14, color:T.muted, lineHeight:1.6 }}>{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ marginTop:28, paddingTop:22, borderTop:`1px solid ${T.border}` }}>
                <button onClick={() => router.push("/contact")}
                  style={{ display:"block", width:"100%", padding:12, background:T.orange, color:"#fff", borderRadius:6, border:"none", fontFamily:T.sans, fontSize:14, fontWeight:600, cursor:"pointer", marginBottom:10, transition:"background 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.background=T.teal}
                  onMouseLeave={e => e.currentTarget.style.background=T.orange}>
                  📋 Start Application
                </button>
                <a href="tel:+919540190334" style={{ display:"block", textAlign:"center", padding:12, border:`1.5px solid ${T.border}`, color:T.slate, borderRadius:6, fontFamily:T.sans, fontSize:14, fontWeight:600, transition:"border-color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor=T.teal}
                  onMouseLeave={e => e.currentTarget.style.borderColor=T.border}>
                  📞 Call Our Team
                </a>
              </div>
            </div>

            {/* Image panel — teal gradient */}
            <div style={{ position:"relative", borderRadius:10, overflow:"hidden", minHeight:400 }}>
              <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=85&fit=crop" alt="Wireless" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover" }} />
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg, rgba(14,128,128,0.88) 0%, rgba(30,136,200,0.60) 55%, rgba(235,245,251,0.25) 100%)" }} />
              <div style={{ position:"relative", zIndex:1, padding:"clamp(24px,4vw,40px)", height:"100%", display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
                <div>
                  <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:T.tealLight, borderRadius:4, padding:"5px 14px", marginBottom:18 }}>
                    <span style={{ fontFamily:T.sans, fontSize:10.5, fontWeight:700, color:T.teal, letterSpacing:"0.12em", textTransform:"uppercase" }}>🇮🇳 DoT Certified Experts</span>
                  </div>
                  <h3 style={{ fontFamily:T.serif, fontSize:"clamp(1.4rem,2.5vw,2rem)", color:"#fff", fontWeight:700, marginBottom:14, lineHeight:1.2 }}>
                    Import Wireless Devices<br />Legally &amp; Confidently
                  </h3>
                  <p style={{ fontFamily:T.sans, color:"rgba(255,255,255,0.80)", fontSize:14, lineHeight:1.8, maxWidth:440 }}>
                    Every wireless device entering India requires WPC-ETA approval from the DoT. Without it, your shipment will be held at customs. Our team handles the entire process so you can focus on your business.
                  </p>
                </div>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12, marginTop:32 }}>
                  {[{ value:"10,000+", label:"Approvals Filed" }, { value:"15+ yrs", label:"Industry Experience" }, { value:"98%", label:"Success Rate" }].map(s => (
                    <div key={s.label} style={{ background:"rgba(255,255,255,0.12)", border:"1px solid rgba(255,255,255,0.18)", borderRadius:8, padding:"14px 12px", backdropFilter:"blur(8px)" }}>
                      <div style={{ fontFamily:T.serif, fontSize:"1.3rem", color:T.amberLight, fontWeight:700 }}>{s.value}</div>
                      <div style={{ fontFamily:T.sans, fontSize:11, color:"rgba(255,255,255,0.70)", marginTop:5, lineHeight:1.4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs — white ── */}
      <section className="sec" style={{ background:T.white }}>
        <div style={{ maxWidth:760, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:44 }}>
            <div style={{ display:"flex", justifyContent:"center", marginBottom:16 }}>
              <div className="sl-row"><div className="sl-line" /><span className="sl-text">Common Questions</span></div>
            </div>
            <h2 style={{ fontFamily:T.serif, fontSize:"clamp(2rem,3.2vw,2.9rem)", color:T.slate, fontWeight:700, letterSpacing:"-0.01em" }}>Frequently Asked</h2>
          </div>
          {faqs.map(faq => (
            <div key={faq.q} className="faq-card">
              <div style={{ fontFamily:T.serif, fontSize:15, color:T.slate, marginBottom:10, fontWeight:600 }}>Q: {faq.q}</div>
              <div style={{ fontFamily:T.sans, fontSize:13, color:T.muted, lineHeight:1.8 }}>{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ background:T.ctaBand, borderTop:`1px solid ${T.ctaBandBorder}`, borderBottom:`1px solid ${T.ctaBandBorder}`, padding:"80px clamp(16px,5vw,56px)" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div className="cta-split">
            <div>
              <div className="sl-row" style={{ marginBottom:20 }}><div className="sl-line" /><span className="sl-text">Start Today</span></div>
              <h2 style={{ fontFamily:T.serif, fontSize:"clamp(1.9rem,3.2vw,2.9rem)", color:T.slate, fontWeight:700, lineHeight:1.1, letterSpacing:"-0.01em", marginBottom:14 }}>
                Import Your Wireless<br />Device Legally
              </h2>
              <p style={{ fontFamily:T.sans, color:T.muted, fontSize:14.5, lineHeight:1.8 }}>
                Don't risk customs detention. Get your WPC-ETA approval handled by experts — fast and accurately.
              </p>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:12, flexShrink:0 }}>
              <button onClick={() => router.push("/contact")}
                style={{ padding:"14px 36px", fontFamily:T.sans, fontSize:14, fontWeight:600, border:"none", borderRadius:6, cursor:"pointer", background:T.orange, color:"#fff", whiteSpace:"nowrap", transition:"background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background=T.teal}
                onMouseLeave={e => e.currentTarget.style.background=T.orange}>
                Get Free Consultation
              </button>
              <a href="tel:+919540190334"
                style={{ padding:"13px 28px", border:`1.5px solid ${T.border}`, borderRadius:6, fontFamily:T.sans, fontSize:14, fontWeight:500, color:T.slate, display:"flex", alignItems:"center", justifyContent:"center", gap:8, whiteSpace:"nowrap", background:T.white, transition:"border-color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor=T.teal}
                onMouseLeave={e => e.currentTarget.style.borderColor=T.border}>
                📞 +91 9540190334
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}