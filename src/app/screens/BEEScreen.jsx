import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

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

const types = [
  { icon: "⭐", title: "Mandatory Star Rating",         tag: "Mandatory",   desc: "Compulsory BEE star labelling for ACs, refrigerators, washing machines, TVs, geysers, and more." },
  { icon: "🌟", title: "Voluntary Star Rating",         tag: "Optional",    desc: "Optional BEE star label for products not covered under mandatory scheme — builds consumer trust." },
  { icon: "🔌", title: "Energy Efficiency Certification", tag: "All Products", desc: "BEE certification for energy-efficient products for public procurement under government schemes." },
  { icon: "🏭", title: "Bureau of Energy Efficiency",  tag: "Compliance",  desc: "Complete BEE Act compliance for manufacturers including annual submissions and renewals." },
];

const steps = [
  { step: "01", title: "Product Eligibility", desc: "We check if your product falls under mandatory or voluntary star rating category.", icon: "🔍" },
  { step: "02", title: "Energy Testing",      desc: "Product tested at BEE-accredited lab for energy consumption and efficiency parameters.", icon: "🧪" },
  { step: "03", title: "Application Filing",  desc: "BEE registration application filed with all test reports on the BEE portal.", icon: "📤" },
  { step: "04", title: "Label Design",        desc: "We help design the BEE star label with correct energy consumption values for your product.", icon: "🎨" },
  { step: "05", title: "Registration Issued", desc: "BEE issues the registration number. You can now legally affix the star label.", icon: "🎓" },
];

const documents = [
  "Energy test report from BEE-accredited lab",
  "Product technical specifications",
  "Brand / Model details",
  "Manufacturing unit details",
  "KYC of company & signatory",
  "Annual energy sales data",
  "Label artwork proof",
  "BIS certificate (if applicable)",
];

const faqs = [
  { q: "Which appliances need mandatory BEE star labels?",  a: "Air conditioners, refrigerators, ceiling fans, washing machines, LED lamps, distribution transformers, water heaters, and several other categories are under mandatory BEE labelling." },
  { q: "Can I sell appliances without BEE star rating?",    a: "For mandatory categories, selling without a BEE star label is illegal and can result in seizure and penalties under the Energy Conservation Act." },
  { q: "How often must BEE registration be renewed?",       a: "BEE registrations must be renewed annually. The star rating may change as energy efficiency norms are upgraded periodically." },
  { q: "Does BEE apply to imported products?",              a: "Yes, imported products in mandatory categories must also carry the BEE star label before being sold in India." },
];

const infoItems = [
  { label: "Governing Body", value: "Bureau of Energy Efficiency" },
  { label: "Ministry",       value: "Power, Govt. of India" },
  { label: "Validity",       value: "Annual" },
  { label: "Processing Time", value: "4–8 Weeks" },
  { label: "Applicable To",  value: "Home & Commercial Appliances" },
];

const statsStrip = [
  { value: "20+",  label: "Product Categories", icon: "📋" },
  { value: "4–8",  label: "Weeks Timeline",      icon: "⚡" },
  { value: "Free", label: "Initial Consultation", icon: "🆓" },
  { value: "98%",  label: "Success Rate",         icon: "✅" },
];

export default function BEEScreen() {
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
        .hero-wrap { background:${T.cream}; border-bottom:1px solid ${T.border}; position:relative; overflow:hidden; }
        .hero-wrap::before { content:''; position:absolute; top:-100px; right:-140px; width:500px; height:500px; background:radial-gradient(circle, rgba(30,136,200,0.11) 0%, transparent 70%); border-radius:50%; pointer-events:none; }
        .hero-grid { display:grid; grid-template-columns:1fr 340px; gap:48px; align-items:center; }
        @media(max-width:960px){ .hero-grid { grid-template-columns:1fr; } .hero-right { display:none; } }
        .stats-strip { display:grid; grid-template-columns:repeat(4,1fr); }
        @media(max-width:640px){ .stats-strip { grid-template-columns:repeat(2,1fr); } }
        .types-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:16px; }
        .steps-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:16px; }
        .docs-grid { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        @media(max-width:640px){ .docs-grid { grid-template-columns:1fr; } }
        .type-card { background:${T.white}; border-radius:10px; padding:28px; border:1px solid ${T.border}; transition:all .25s; }
        .type-card:hover { border-color:${T.teal}; transform:translateY(-3px); box-shadow:0 12px 32px rgba(30,136,200,0.09); }
        .faq-card { background:${T.white}; border-radius:10px; padding:22px 24px; border:1px solid ${T.border}; transition:border-color .2s; margin-bottom:12px; }
        .faq-card:hover { border-color:${T.teal}; }
        .cta-split { display:grid; grid-template-columns:1fr auto; gap:40px; align-items:center; }
        @media(max-width:720px){ .cta-split { grid-template-columns:1fr; gap:28px; } }
        .sec { padding:clamp(64px,8vw,104px) clamp(16px,5vw,56px); }
        .inner { max-width:1280px; margin:0 auto; }
      `}</style>

      <Navbar />

      {/* ── HERO — light cream ── */}
      <section className="hero-wrap">
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"clamp(56px,8vw,96px) clamp(16px,4vw,56px)" }}>
          <div className="hero-grid">
            <div>
              <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:T.tealLight, borderRadius:4, padding:"5px 14px", marginBottom:24 }}>
                <span style={{ width:7, height:7, borderRadius:"50%", background:T.teal, display:"inline-block" }} />
                <span style={{ fontFamily:T.sans, fontSize:10.5, fontWeight:700, color:T.teal, letterSpacing:"0.12em", textTransform:"uppercase" }}>Bureau of Energy Efficiency</span>
              </div>
              <h1 style={{ fontFamily:T.serif, fontSize:"clamp(2rem,3.8vw,3.4rem)", color:T.slate, fontWeight:700, lineHeight:1.08, marginBottom:10, letterSpacing:"-0.01em" }}>
                BEE Star Rating &amp;<br />Energy Labelling
              </h1>
              <p style={{ fontFamily:T.sans, fontSize:12, fontWeight:600, color:T.tealMid, marginBottom:20, letterSpacing:"0.05em", textTransform:"uppercase" }}>
                Mandatory &amp; Voluntary · Annual Renewal · Lab Coordination
              </p>
              <p style={{ fontFamily:T.sans, fontSize:"clamp(13.5px,1.4vw,15px)", color:T.muted, lineHeight:1.9, marginBottom:32, maxWidth:480 }}>
                Mandatory energy efficiency star labelling for appliances sold in India. We handle BEE registration, lab coordination, and annual compliance end-to-end.
              </p>
              <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:28 }}>
                <button onClick={() => window.location.href="/contact"}
                  style={{ padding:"13px 32px", fontFamily:T.sans, fontSize:13.5, fontWeight:600, letterSpacing:"0.02em", border:"none", borderRadius:6, cursor:"pointer", background:T.orange, color:"#fff", boxShadow:"0 4px 16px rgba(10,104,104,0.22)", transition:"all 0.22s" }}
                  onMouseEnter={e => { e.currentTarget.style.background=T.teal; e.currentTarget.style.transform="translateY(-1px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background=T.orange; e.currentTarget.style.transform="translateY(0)"; }}>
                  Get Free Consultation
                </button>
                <button onClick={() => window.location.href="/contact"}
                  style={{ padding:"12px 28px", fontFamily:T.sans, fontSize:13.5, fontWeight:600, borderRadius:6, cursor:"pointer", border:`1.5px solid ${T.border}`, color:T.white, background:T.orange, transition:"all 0.22s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor=T.teal; e.currentTarget.style.color=T.teal; e.currentTarget.style.background="transparent"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor=T.border; e.currentTarget.style.color=T.white; e.currentTarget.style.background=T.orange; }}>
                  Check If Mandatory →
                </button>
              </div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {["✓ Free Consultation", "✓ 4–8 Wk Timeline", "✓ Annual Renewal Support", "✓ Pan-India"].map(b => (
                  <span key={b} style={{ padding:"6px 14px", border:`1px solid ${T.border}`, borderRadius:4, fontSize:12, color:T.muted, background:T.white, fontFamily:T.sans, fontWeight:500 }}>{b}</span>
                ))}
              </div>
            </div>

            {/* Right — light info card */}
            <div className="hero-right">
              <div style={{ background:T.white, border:`1px solid ${T.border}`, borderRadius:10, padding:28, boxShadow:"0 4px 20px rgba(0,0,0,0.05)" }}>
                <div className="sl-row"><div className="sl-line" /><span className="sl-text">Quick Info</span></div>
                {infoItems.map((item, i) => (
                  <div key={item.label} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 0", borderBottom: i < infoItems.length-1 ? `1px solid ${T.border}` : "none" }}>
                    <span style={{ fontFamily:T.sans, fontSize:13, color:T.muted }}>{item.label}</span>
                    <span style={{ fontFamily:T.sans, fontSize:13, color:T.slate, fontWeight:600, textAlign:"right", maxWidth:"55%" }}>{item.value}</span>
                  </div>
                ))}
                <button onClick={() => window.location.href="/contact"}
                  style={{ width:"100%", marginTop:22, padding:13, background:T.orange, color:"#fff", fontWeight:600, borderRadius:6, border:"none", fontFamily:T.sans, fontSize:14, cursor:"pointer", transition:"background 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.background=T.teal}
                  onMouseLeave={e => e.currentTarget.style.background=T.orange}>
                  Start BEE Registration →
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

      {/* ── TYPES — cream ── */}
      <section className="sec" style={{ background:T.cream }}>
        <div className="inner">
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <div style={{ display:"flex", justifyContent:"center", marginBottom:16 }}><div className="sl-row"><div className="sl-line" /><span className="sl-text">Registration Types</span></div></div>
            <h2 style={{ fontFamily:T.serif, fontSize:"clamp(2rem,3.2vw,2.9rem)", color:T.slate, fontWeight:700, letterSpacing:"-0.01em", marginBottom:14 }}>BEE Registration Types</h2>
            <p style={{ fontFamily:T.sans, color:T.muted, maxWidth:480, margin:"0 auto", lineHeight:1.75, fontSize:15 }}>Different appliances fall under different BEE schemes. Here's what applies to your product.</p>
          </div>
          <div className="types-grid">
            {types.map((t, i) => (
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
            <div style={{ display:"flex", justifyContent:"center", marginBottom:16 }}><div className="sl-row"><div className="sl-line" /><span className="sl-text">How We Do It</span></div></div>
            <h2 style={{ fontFamily:T.serif, fontSize:"clamp(2rem,3.2vw,2.9rem)", color:T.slate, fontWeight:700, letterSpacing:"-0.01em", marginBottom:14 }}>BEE Registration Process</h2>
          </div>

          <div style={{ position:"relative", borderRadius:10, overflow:"hidden", marginBottom:36, height:165 }}>
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80&fit=crop" alt="BEE process" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 40%" }} />
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right, rgba(14,128,128,0.88) 0%, rgba(30,136,200,0.55) 55%, rgba(235,245,251,0.25) 100%)" }} />
            <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", padding:"0 40px" }}>
              <div>
                <div style={{ fontFamily:T.serif, fontSize:"clamp(1.1rem,2vw,1.4rem)", color:"#fff", fontWeight:700, marginBottom:6 }}>End-to-End BEE Compliance</div>
                <p style={{ fontFamily:T.sans, color:"rgba(255,255,255,0.78)", fontSize:13 }}>Lab coordination, application filing, label design, and annual renewals — all handled by our experts.</p>
              </div>
            </div>
          </div>

          <div className="steps-grid">
            {steps.map(s => (
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

      {/* ── DOCUMENTS — dark teal overlay ── */}
      <section style={{ position:"relative", overflow:"hidden" }} className="sec">
        <img src="https://images.unsplash.com/photo-1568219557405-376e23e4f7cf?w=1600&q=80&fit=crop" alt="Documents" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover" }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg, rgba(13,27,42,0.96) 0%, rgba(14,128,128,0.88) 100%)" }} />
        <div style={{ maxWidth:900, margin:"0 auto", position:"relative", zIndex:1 }}>
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <div style={{ display:"flex", justifyContent:"center", marginBottom:16 }}><div className="sl-row"><div className="sl-line" style={{ background:"rgba(255,255,255,0.5)" }} /><span className="sl-text" style={{ color:"rgba(255,255,255,0.75)" }}>What You Need</span></div></div>
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
            <button onClick={() => window.location.href="/contact"} style={{ color:T.teal, fontWeight:600, background:"none", border:"none", cursor:"pointer", fontFamily:T.sans, fontSize:13 }}>Contact us for a free checklist →</button>
          </p>
        </div>
      </section>

      {/* ── FAQs — cream ── */}
      <section className="sec" style={{ background:T.cream }}>
        <div style={{ maxWidth:800, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <div style={{ display:"flex", justifyContent:"center", marginBottom:16 }}><div className="sl-row"><div className="sl-line" /><span className="sl-text">Common Questions</span></div></div>
            <h2 style={{ fontFamily:T.serif, fontSize:"clamp(2rem,3.2vw,2.9rem)", color:T.slate, fontWeight:700, letterSpacing:"-0.01em" }}>Frequently Asked Questions</h2>
          </div>
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
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ background:T.ctaBand, borderTop:`1px solid ${T.ctaBandBorder}`, borderBottom:`1px solid ${T.ctaBandBorder}`, padding:"80px clamp(16px,5vw,56px)" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div className="cta-split">
            <div>
              <div className="sl-row" style={{ marginBottom:20 }}><div className="sl-line" /><span className="sl-text">Start Today</span></div>
              <h2 style={{ fontFamily:T.serif, fontSize:"clamp(1.9rem,3.2vw,2.9rem)", color:T.slate, fontWeight:700, lineHeight:1.1, letterSpacing:"-0.01em", marginBottom:14 }}>Get BEE Star Rating<br />for Your Product</h2>
              <p style={{ fontFamily:T.sans, color:T.muted, fontSize:14.5, lineHeight:1.8 }}>Our energy compliance team will handle your BEE registration from start to finish. Free consultation. Clear timeline. Transparent pricing.</p>
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