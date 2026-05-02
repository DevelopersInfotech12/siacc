import Link from "next/link";
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

const bisTypes = [
  { icon: "🔖", title: "BIS ISI Mark",        tag: "Manufacturing",        desc: "Mandatory for 370+ product categories including steel, cement, electrical goods, and more sold in India." },
  { icon: "📱", title: "BIS CRS Registration", tag: "Electronics",          desc: "Compulsory Registration Scheme for 70+ electronic & IT products like laptops, mobiles, LED lights, chargers." },
  { icon: "🌍", title: "BIS Scheme-X",         tag: "Foreign Manufacturers", desc: "Specially designed for overseas manufacturers who want to sell BIS-certified products directly in India." },
  { icon: "💍", title: "BIS Hallmarking",      tag: "Jewellery",            desc: "Mandatory gold and silver hallmarking certification under BIS for all jewellers across India." },
  { icon: "🌿", title: "ECO Mark",             tag: "Environment",          desc: "Eco-friendly product certification for manufacturers committed to environmental standards." },
  { icon: "🏭", title: "FMCS Certification",   tag: "Industrial",           desc: "Foreign Manufacturers Certification Scheme for industrial products from overseas companies." },
];

const documents = [
  "Product Test Report from BIS-recognized lab",
  "Factory / Premises details & address proof",
  "Product specification / technical drawings",
  "Applicant company registration documents",
  "Authorized signatory details & KYC",
  "Import-Export Code (for CRS / Scheme-X)",
  "Factory layout plan (for ISI Mark)",
  "Quality Manual (for ISI Mark applicants)",
];

const steps = [
  { step: "01", title: "Product Assessment",      desc: "We identify the exact BIS scheme applicable to your product and the relevant Indian Standard (IS) number.", icon: "🔍" },
  { step: "02", title: "Lab Testing",             desc: "Product samples are tested at a BIS-recognized lab. We coordinate with labs to get results quickly.", icon: "🧪" },
  { step: "03", title: "Document Filing",         desc: "Complete application with test reports and all required documents is filed with BIS on your behalf.", icon: "📤" },
  { step: "04", title: "Factory Inspection",      desc: "For ISI Mark, BIS auditors inspect your manufacturing unit. We help you prepare thoroughly.", icon: "🔎" },
  { step: "05", title: "Grant of License",        desc: "BIS reviews and approves your application. License / Registration Certificate is issued.", icon: "🎓" },
  { step: "06", title: "Post-Certification Support", desc: "We assist with renewal, surveillance audits, and any compliance queries after certification.", icon: "🛡️" },
];

const faqs = [
  { q: "Which products require BIS CRS registration?", a: "70+ products including mobile phones, laptops, tablets, LED lights, power banks, chargers, set-top boxes, smart watches, and more require mandatory CRS registration." },
  { q: "How long does BIS CRS registration take?", a: "Typically 4–8 weeks if all documents are in order and lab test reports are available. We help expedite the process." },
  { q: "Can a foreign company apply for BIS certification?", a: "Yes, through BIS Scheme-X or the Foreign Manufacturers Certification Scheme (FMCS). An Indian Authorized Representative (IAR) is required." },
  { q: "What happens if I sell products without BIS certification?", a: "Products sold without mandatory BIS certification can be seized, and the company faces heavy penalties and import bans under the BIS Act, 2016." },
  { q: "Is BIS certification valid permanently?", a: "No. ISI Mark licenses are valid for 1–2 years and must be renewed. CRS registrations are valid for 2 years." },
];

const infoItems = [
  { label: "Applicable Products", value: "370+ Categories" },
  { label: "Governing Body",      value: "Bureau of Indian Standards" },
  { label: "Validity",            value: "1–2 Years (Renewable)" },
  { label: "Typical Timeline",    value: "4–12 Weeks" },
  { label: "Our Success Rate",    value: "98%" },
];

const statsStrip = [
  { value: "370+",  label: "Product Categories", icon: "📋" },
  { value: "4–12",  label: "Weeks Timeline",      icon: "⚡" },
  { value: "Free",  label: "Initial Consultation", icon: "🆓" },
  { value: "98%",   label: "Success Rate",         icon: "✅" },
];

export default function BISScreen() {
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

        /* ── Hero — light cream ── */
        .bis-hero-wrap {
          background:${T.cream}; border-bottom:1px solid ${T.border};
          position:relative; overflow:hidden;
        }
        .bis-hero-wrap::before {
          content:''; position:absolute; top:-100px; right:-140px;
          width:500px; height:500px;
          background:radial-gradient(circle, rgba(30,136,200,0.11) 0%, transparent 70%);
          border-radius:50%; pointer-events:none;
        }
        .hero-grid { display:grid; grid-template-columns:1fr 340px; gap:48px; align-items:center; }
        @media(max-width:960px){ .hero-grid { grid-template-columns:1fr; } .hero-right { display:none; } }

        /* ── Stats strip ── */
        .stats-strip { display:grid; grid-template-columns:repeat(4,1fr); }
        @media(max-width:640px){ .stats-strip { grid-template-columns:repeat(2,1fr); } }

        /* ── Types grid ── */
        .types-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:16px; }
        @media(max-width:640px){ .types-grid { grid-template-columns:1fr; } }
        .type-card {
          background:${T.white}; border-radius:10px; padding:28px;
          border:1px solid ${T.border}; transition:all 0.25s;
        }
        .type-card:hover { border-color:${T.teal}; transform:translateY(-3px); box-shadow:0 12px 32px rgba(30,136,200,0.09); }

        /* ── Steps grid ── */
        .steps-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:16px; }
        @media(max-width:600px){ .steps-grid { grid-template-columns:1fr; } }

        /* ── Docs grid ── */
        .docs-grid { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        @media(max-width:640px){ .docs-grid { grid-template-columns:1fr; } }

        /* ── FAQ card ── */
        .faq-card {
          background:${T.white}; border-radius:10px; padding:22px 24px;
          border:1px solid ${T.border}; transition:border-color 0.2s; margin-bottom:12px;
        }
        .faq-card:hover { border-color:${T.teal}; }

        /* ── CTA split ── */
        .cta-split { display:grid; grid-template-columns:1fr auto; gap:40px; align-items:center; }
        @media(max-width:720px){ .cta-split { grid-template-columns:1fr; gap:28px; } }

        .sec { padding:clamp(64px,8vw,104px) clamp(16px,5vw,56px); }
        .inner { max-width:1280px; margin:0 auto; }
      `}</style>

      <Navbar />

      {/* ── HERO — light cream ── */}
      <section className="bis-hero-wrap">
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(56px,8vw,96px) clamp(16px,4vw,56px)" }}>
          <div className="hero-grid">

            {/* Left */}
            <div>
              <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:T.tealLight, borderRadius:4, padding:"5px 14px", marginBottom:24 }}>
                <span style={{ width:7, height:7, borderRadius:"50%", background:T.teal, display:"inline-block" }} />
                <span style={{ fontFamily:T.sans, fontSize:10.5, fontWeight:700, color:T.teal, letterSpacing:"0.12em", textTransform:"uppercase" }}>Bureau of Indian Standards</span>
              </div>

              <h1 style={{ fontFamily:T.serif, fontSize:"clamp(2rem,3.8vw,3.4rem)", color:T.slate, fontWeight:700, lineHeight:1.08, marginBottom:10, letterSpacing:"-0.01em" }}>
                BIS Certification<br />for Indian Market Entry
              </h1>

              <p style={{ fontFamily:T.sans, fontSize:12, fontWeight:600, color:T.tealMid, marginBottom:20, letterSpacing:"0.05em", textTransform:"uppercase" }}>
                ISI Mark · CRS Registration · Scheme-X · Hallmarking
              </p>

              <p style={{ fontFamily:T.sans, fontSize:"clamp(13.5px,1.4vw,15px)", color:T.muted, lineHeight:1.9, marginBottom:32, maxWidth:480 }}>
                Mandatory quality certification by the Bureau of Indian Standards. Whether you need ISI Mark, CRS Registration, or Scheme-X for foreign manufacturers — we handle it all end-to-end.
              </p>

              <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:28 }}>
                <button onClick={() => window.location.href="/contact"}
                  style={{ padding:"13px 32px", fontFamily:T.sans, fontSize:13.5, fontWeight:600, letterSpacing:"0.02em", border:"none", borderRadius:6, cursor:"pointer", background:T.orange, color:"#fff", boxShadow:"0 4px 16px rgba(10,104,104,0.22)", transition:"all 0.22s" }}
                  onMouseEnter={e => { e.currentTarget.style.background=T.teal; e.currentTarget.style.transform="translateY(-1px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background=T.orange; e.currentTarget.style.transform="translateY(0)"; }}>
                  Get Free Consultation
                </button>
                <button onClick={() => window.location.href="/contact"}
                  style={{ padding:"12px 28px", fontFamily:T.sans, fontSize:13.5, fontWeight:600, letterSpacing:"0.02em", borderRadius:6, cursor:"pointer", border:`1.5px solid ${T.border}`, color:T.white, background:T.orange, transition:"all 0.22s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor=T.teal; e.currentTarget.style.color=T.teal; e.currentTarget.style.background="transparent"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor=T.border; e.currentTarget.style.color=T.white; e.currentTarget.style.background=T.orange; }}>
                  Download Checklist →
                </button>
              </div>

              <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {["✓ Free Consultation", "✓ 4–12 Wk Timeline", "✓ 98% Success Rate", "✓ Pan-India"].map(b => (
                  <span key={b} style={{ padding:"6px 14px", border:`1px solid ${T.border}`, borderRadius:4, fontSize:12, color:T.muted, background:T.white, fontFamily:T.sans, fontWeight:500 }}>{b}</span>
                ))}
              </div>
            </div>

            {/* Right — light info card matching HomeScreen mini-stat style */}
            <div className="hero-right">
              <div style={{ background:T.white, border:`1px solid ${T.border}`, borderRadius:10, padding:28, boxShadow:"0 4px 20px rgba(0,0,0,0.05)" }}>
                <div className="sl-row"><div className="sl-line" /><span className="sl-text">Quick Info</span></div>
                {infoItems.map((item, i) => (
                  <div key={item.label} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 0", borderBottom: i < infoItems.length - 1 ? `1px solid ${T.border}` : "none" }}>
                    <span style={{ fontFamily:T.sans, fontSize:13, color:T.muted }}>{item.label}</span>
                    <span style={{ fontFamily:T.sans, fontSize:13, color:T.slate, fontWeight:600, textAlign:"right", maxWidth:"55%" }}>{item.value}</span>
                  </div>
                ))}
                <button onClick={() => window.location.href="/contact"}
                  style={{ width:"100%", marginTop:22, padding:13, background:T.orange, color:"#fff", fontWeight:600, borderRadius:6, border:"none", fontFamily:T.sans, fontSize:14, cursor:"pointer", transition:"background 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.background=T.teal}
                  onMouseLeave={e => e.currentTarget.style.background=T.orange}>
                  Start Application →
                </button>
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

      {/* ── BIS TYPES — cream ── */}
      <section className="sec" style={{ background:T.cream }}>
        <div className="inner">
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <div style={{ display:"flex", justifyContent:"center", marginBottom:16 }}>
              <div className="sl-row"><div className="sl-line" /><span className="sl-text">Types of BIS Certification</span></div>
            </div>
            <h2 style={{ fontFamily:T.serif, fontSize:"clamp(2rem,3.2vw,2.9rem)", color:T.slate, fontWeight:700, letterSpacing:"-0.01em", marginBottom:14 }}>Which BIS Certification Do You Need?</h2>
            <p style={{ fontFamily:T.sans, color:T.muted, maxWidth:480, margin:"0 auto", lineHeight:1.75, fontSize:15 }}>Different products require different BIS certifications. Here's what applies to your category.</p>
          </div>
          <div className="types-grid">
            {bisTypes.map((t, i) => (
              <div key={t.title} className="type-card">
                <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:16 }}>
                  <div style={{ width:52, height:52, background:T.tealLight, borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", fontSize:24 }}>{t.icon}</div>
                  <span style={{ fontFamily:T.sans, fontSize:10, fontWeight:700, background: i%2===0 ? T.tealLight : T.amberLight, color: i%2===0 ? T.tealMid : T.amberDark, padding:"3px 10px", borderRadius:3, letterSpacing:"0.06em" }}>{t.tag}</span>
                </div>
                <h3 style={{ fontFamily:T.serif, fontSize:17, color:T.slate, marginBottom:10, fontWeight:600 }}>{t.title}</h3>
                <p style={{ fontFamily:T.sans, fontSize:13, color:T.muted, lineHeight:1.75, margin:0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS — white ── */}
      <section className="sec" style={{ background:T.white }}>
        <div className="inner">
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <div style={{ display:"flex", justifyContent:"center", marginBottom:16 }}>
              <div className="sl-row"><div className="sl-line" /><span className="sl-text">Step by Step</span></div>
            </div>
            <h2 style={{ fontFamily:T.serif, fontSize:"clamp(2rem,3.2vw,2.9rem)", color:T.slate, fontWeight:700, letterSpacing:"-0.01em", marginBottom:14 }}>BIS Certification Process</h2>
          </div>

          {/* Process banner — teal tint overlay */}
          <div style={{ position:"relative", borderRadius:10, overflow:"hidden", marginBottom:36, height:170 }}>
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80&fit=crop" alt="BIS process" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 40%" }} />
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right, rgba(14,128,128,0.88) 0%, rgba(30,136,200,0.60) 55%, rgba(235,245,251,0.25) 100%)" }} />
            <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", padding:"0 40px" }}>
              <div>
                <div style={{ fontFamily:T.serif, fontSize:"clamp(1.1rem,2vw,1.4rem)", color:"#fff", fontWeight:700, marginBottom:6 }}>End-to-End BIS Compliance</div>
                <p style={{ fontFamily:T.sans, color:"rgba(255,255,255,0.78)", fontSize:13 }}>Lab coordination, application filing, and follow-up — all managed by our experts.</p>
              </div>
            </div>
          </div>

          <div className="steps-grid">
            {steps.map((s, i) => (
              <div key={s.step} style={{ background:T.white, borderRadius:10, padding:24, border:`1px solid ${T.border}`, display:"flex", gap:16, alignItems:"flex-start", transition:"all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor=T.teal; e.currentTarget.style.boxShadow="0 8px 24px rgba(30,136,200,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor=T.border; e.currentTarget.style.boxShadow="none"; }}>
                <div style={{ width:48, height:48, borderRadius:9, background:T.tealLight, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:20 }}>{s.icon}</div>
                <div>
                  <div style={{ fontFamily:T.sans, fontSize:10.5, fontWeight:700, color:T.teal, letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:4 }}>Step {s.step}</div>
                  <h3 style={{ fontFamily:T.serif, fontSize:15, color:T.slate, marginBottom:6, fontWeight:600 }}>{s.title}</h3>
                  <p style={{ fontFamily:T.sans, fontSize:13, color:T.muted, lineHeight:1.7, margin:0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOCUMENTS — dark image + teal overlay (intentional contrast section) ── */}
      <section style={{ position:"relative", overflow:"hidden" }} className="sec">
        <img src="https://images.unsplash.com/photo-1568219557405-376e23e4f7cf?w=1600&q=80&fit=crop" alt="Documents" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover" }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg, rgba(13,27,42,0.96) 0%, rgba(14,128,128,0.88) 100%)" }} />
        <div style={{ maxWidth:900, margin:"0 auto", position:"relative", zIndex:1 }}>
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <div style={{ display:"flex", justifyContent:"center", marginBottom:16 }}>
              <div className="sl-row"><div className="sl-line" style={{ background:"rgba(255,255,255,0.5)" }} /><span className="sl-text" style={{ color:"rgba(255,255,255,0.75)" }}>What You Need</span></div>
            </div>
            <h2 style={{ fontFamily:T.serif, fontSize:"clamp(2rem,3.2vw,2.9rem)", color:"#fff", fontWeight:700, letterSpacing:"-0.01em" }}>Documents Required</h2>
          </div>
          <div className="docs-grid">
            {documents.map((doc, i) => (
              <div key={i} style={{ background:"rgba(255,255,255,0.07)", borderRadius:8, padding:"16px 20px", border:"1px solid rgba(255,255,255,0.12)", display:"flex", alignItems:"center", gap:12, backdropFilter:"blur(4px)" }}>
                <div style={{ width:28, height:28, borderRadius:"50%", background:T.teal, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <span style={{ color:"#fff", fontSize:12, fontWeight:800 }}>✓</span>
                </div>
                <span style={{ fontFamily:T.sans, fontSize:13, color:"rgba(255,255,255,0.85)" }}>{doc}</span>
              </div>
            ))}
          </div>
          <p style={{ textAlign:"center", marginTop:24, fontFamily:T.sans, fontSize:13, color:"rgba(255,255,255,0.50)" }}>
            Not sure if you have everything?{" "}
            <button onClick={() => window.location.href="/contact"} style={{ color:T.teal, fontWeight:600, background:"none", border:"none", cursor:"pointer", fontFamily:T.sans, fontSize:13 }}>
              Contact us for a free document checklist →
            </button>
          </p>
        </div>
      </section>

      {/* ── FAQs — cream ── */}
      <section className="sec" style={{ background:T.cream }}>
        <div style={{ maxWidth:800, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <div style={{ display:"flex", justifyContent:"center", marginBottom:16 }}>
              <div className="sl-row"><div className="sl-line" /><span className="sl-text">Common Questions</span></div>
            </div>
            <h2 style={{ fontFamily:T.serif, fontSize:"clamp(2rem,3.2vw,2.9rem)", color:T.slate, fontWeight:700, letterSpacing:"-0.01em" }}>BIS Certification FAQs</h2>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            {faqs.map(faq => (
              <div key={faq.q} className="faq-card">
                <div style={{ display:"flex", gap:14, marginBottom:10 }}>
                  <div style={{ width:28, height:28, borderRadius:"50%", background:T.tealLight, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontWeight:700, fontSize:12, color:T.teal }}>Q</div>
                  <div style={{ fontFamily:T.serif, fontSize:15, color:T.slate, fontWeight:600, paddingTop:4 }}>{faq.q}</div>
                </div>
                <div style={{ display:"flex", gap:14 }}>
                  <div style={{ width:28, height:28, borderRadius:"50%", background:T.amberLight, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontWeight:700, fontSize:12, color:T.amber }}>A</div>
                  <div style={{ fontFamily:T.sans, fontSize:13, color:T.muted, lineHeight:1.8, paddingTop:4 }}>{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND — exact HomeScreen pattern ── */}
      <section style={{ background:T.ctaBand, borderTop:`1px solid ${T.ctaBandBorder}`, borderBottom:`1px solid ${T.ctaBandBorder}`, padding:"80px clamp(16px,5vw,56px)" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div className="cta-split">
            <div>
              <div className="sl-row" style={{ marginBottom:20 }}><div className="sl-line" /><span className="sl-text">Start Today</span></div>
              <h2 style={{ fontFamily:T.serif, fontSize:"clamp(1.9rem,3.2vw,2.9rem)", color:T.slate, fontWeight:700, lineHeight:1.1, letterSpacing:"-0.01em", marginBottom:14 }}>
                Ready to Get<br />BIS Certified?
              </h2>
              <p style={{ fontFamily:T.sans, color:T.muted, fontSize:14.5, lineHeight:1.8 }}>
                Our BIS specialists will assess your product and give you a clear roadmap — for free.<br />Free consultation. Clear timeline. Transparent pricing.
              </p>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:12, flexShrink:0 }}>
              <button onClick={() => window.location.href="/contact"}
                style={{ padding:"14px 36px", fontFamily:T.sans, fontSize:14, fontWeight:600, border:"none", borderRadius:6, cursor:"pointer", background:T.orange, color:"#fff", whiteSpace:"nowrap", transition:"background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background=T.teal}
                onMouseLeave={e => e.currentTarget.style.background=T.orange}>
                Get Free Consultation
              </button>
              <a href="tel:+919540190334"
                style={{ padding:"13px 28px", border:`1.5px solid ${T.border}`, borderRadius:6, fontFamily:T.sans, fontSize:14, fontWeight:500, color:T.slate, display:"flex", alignItems:"center", justifyContent:"center", gap:8, whiteSpace:"nowrap", background:T.white, transition:"border-color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor=T.teal}
                onMouseLeave={e => e.currentTarget.style.borderColor=T.border}>
                📞 +91-9540190334
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}