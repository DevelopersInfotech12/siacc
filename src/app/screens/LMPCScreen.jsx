import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const C = { forest:"#1B4332",forestMid:"#2D6A4F",forestLight:"#40916C",mint:"#95D5B2",mintLight:"#D8F3DC",offWhite:"#F7FAF8",charcoal:"#1A1A2E",gray:"#6B7280",white:"#ffffff",serif:"'Playfair Display', Georgia, serif",sans:"'DM Sans', system-ui, sans-serif" };
const types = [
  { icon:"📦", title:"LMPC Import License", tag:"Importers", desc:"Mandatory for all importers of pre-packaged goods. Required before goods can be sold in India." },
  { icon:"🏭", title:"LMPC Manufacturer Registration", tag:"Manufacturers", desc:"For Indian manufacturers of pre-packaged commodities under the Packaged Commodities Rules." },
  { icon:"📋", title:"Packaged Commodity Registration", tag:"Brand Owners", desc:"Registration for brand owners and dealers dealing in packaged commodities." },
  { icon:"⚖️", title:"Legal Metrology Certification", tag:"Weights & Measures", desc:"Verification and certification of weighing and measuring instruments under Legal Metrology Act." },
];
const steps = [
  { step:"01", title:"Product Review", desc:"We review your pre-packaged goods and check mandatory declaration requirements under LMPC Rules." },
  { step:"02", title:"Label Compliance Check", desc:"We verify your packaging labels for compliance — MRP, net quantity, manufacturer details, etc." },
  { step:"03", title:"Application Filing", desc:"LMPC registration application filed with the Controller of Legal Metrology of the relevant state." },
  { step:"04", title:"Inspection (if required)", desc:"For some categories, physical inspection of products or factory may be scheduled." },
  { step:"05", title:"License Issued", desc:"LMPC license / registration certificate issued. You can now legally import and sell in India." },
];
const documents = ["Import-Export Code (IEC)","Company registration certificate","GST registration","Product packaging with all declarations","Authorized signatory KYC","Brand authorization letter (if applicable)","List of products with HS codes","Declaration of quantity accuracy"];
const faqs = [
  { q:"Who needs LMPC registration?", a:"All importers, manufacturers, packers, and dealers of pre-packaged goods in India are required to obtain LMPC registration under the Legal Metrology (Packaged Commodities) Rules, 2011." },
  { q:"What must be declared on packaging?", a:"Every pre-packaged product must declare: name of product, manufacturer name/address, net quantity, MRP (all-inclusive), month/year of manufacture, expiry date (if applicable), country of origin (for imports), and customer care details." },
  { q:"What is the penalty for non-compliance?", a:"Selling without LMPC registration or non-compliant packaging can attract penalties up to ₹25,000 for the first offence and ₹50,000 for subsequent offences." },
  { q:"Is LMPC required for all imported goods?", a:"Yes, any imported product that is pre-packaged and sold at retail level in India requires LMPC import license before it can be commercially sold." },
];
export default function LMPCScreen() {
  return (
    <div style={{ minHeight:"100vh", backgroundColor:C.offWhite, fontFamily:C.sans }}>
      <Navbar />
      <section style={{ backgroundColor:C.forest, padding:"80px 24px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:0, right:0, width:400, height:400, borderRadius:"50%", border:"1px solid rgba(149,213,178,0.15)", transform:"translate(30%,-30%)", pointerEvents:"none" }} />
        <div style={{ maxWidth:1280, margin:"0 auto", position:"relative", zIndex:1 }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 340px", gap:48, alignItems:"center" }}>
            <div>
              <div style={{ display:"inline-flex", alignItems:"center", gap:8, backgroundColor:C.forestMid, border:`1px solid ${C.forestLight}`, borderRadius:999, padding:"5px 14px", marginBottom:20 }}>
                <span style={{ width:7, height:7, borderRadius:"50%", backgroundColor:C.mint, display:"inline-block" }} />
                <span style={{ color:C.mint, fontSize:11, fontWeight:600 }}>Legal Metrology Packaged Commodities</span>
              </div>
              <h1 style={{ fontFamily:C.serif, fontSize:"clamp(2rem,4vw,3.2rem)", color:C.white, margin:"0 0 20px", fontWeight:700, lineHeight:1.2 }}>LMPC Registration<br />for Packaged Goods</h1>
              <p style={{ color:"#b7e4c7", fontSize:16, lineHeight:1.8, maxWidth:560, marginBottom:32 }}>Mandatory compliance for all importers and manufacturers of pre-packaged goods sold in India. We handle LMPC registration, label compliance, and ongoing filings.</p>
              <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
                <button onClick={() => window.location.href="/contact"} style={{ padding:"13px 28px", backgroundColor:C.mint, color:C.forest, fontWeight:700, borderRadius:12, border:"none", fontSize:14, cursor:"pointer", fontFamily:C.sans }}>Get Free Consultation</button>
                <button onClick={() => window.location.href="/contact"} style={{ padding:"13px 28px", border:`1px solid ${C.forestLight}`, color:C.mint, borderRadius:12, background:"transparent", fontSize:14, cursor:"pointer", fontFamily:C.sans }}>Check Label Compliance →</button>
              </div>
            </div>
            <div style={{ backgroundColor:C.forestMid, borderRadius:16, padding:24, border:`1px solid ${C.forestLight}` }}>
              {[{label:"Governing Act",value:"Legal Metrology Act, 2009"},{label:"Authority",value:"Controller of Legal Metrology"},{label:"Validity",value:"Annual Renewal"},{label:"Processing Time",value:"2–4 Weeks"},{label:"Applicable To",value:"All Pre-Packaged Goods"}].map(item => (
                <div key={item.label} style={{ display:"flex", justifyContent:"space-between", padding:"12px 0", borderBottom:"1px solid rgba(149,213,178,0.2)" }}>
                  <span style={{ fontSize:13, color:C.mint, opacity:0.8 }}>{item.label}</span>
                  <span style={{ fontSize:13, color:C.white, fontWeight:600 }}>{item.value}</span>
                </div>
              ))}
              <button onClick={() => window.location.href="/contact"} style={{ width:"100%", marginTop:20, padding:13, backgroundColor:C.mint, color:C.forest, fontWeight:700, borderRadius:10, border:"none", fontSize:14, cursor:"pointer", fontFamily:C.sans }}>Start LMPC Registration →</button>
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding:"80px 24px" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:52 }}><h2 style={{ fontFamily:C.serif, fontSize:"clamp(1.7rem,3vw,2.4rem)", color:C.forest, fontWeight:700 }}>LMPC Registration Types</h2></div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:20 }}>
            {types.map(t => (
              <div key={t.title} style={{ backgroundColor:C.white, borderRadius:16, padding:28, border:`1px solid ${C.mintLight}`, transition:"all 0.25s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor=C.mint; e.currentTarget.style.transform="translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor=C.mintLight; e.currentTarget.style.transform="translateY(0)"; }}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:16 }}>
                  <div style={{ width:48, height:48, backgroundColor:C.mintLight, borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22 }}>{t.icon}</div>
                  <span style={{ fontSize:10, fontWeight:600, backgroundColor:C.mintLight, color:C.forest, padding:"3px 10px", borderRadius:999 }}>{t.tag}</span>
                </div>
                <h3 style={{ fontFamily:C.serif, fontSize:17, color:C.forest, marginBottom:10, fontWeight:600 }}>{t.title}</h3>
                <p style={{ fontSize:13, color:C.gray, lineHeight:1.7, margin:0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ backgroundColor:C.mintLight, padding:"80px 24px" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:52 }}><h2 style={{ fontFamily:C.serif, fontSize:"clamp(1.7rem,3vw,2.4rem)", color:C.forest, fontWeight:700 }}>LMPC Registration Process</h2></div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:20 }}>
            {steps.map(s => (
              <div key={s.step} style={{ backgroundColor:C.white, borderRadius:16, padding:24, border:"1px solid rgba(149,213,178,0.4)", display:"flex", gap:16 }}>
                <div style={{ width:44, height:44, borderRadius:12, backgroundColor:C.forest, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <span style={{ fontFamily:C.serif, fontSize:15, color:C.mint, fontWeight:700 }}>{s.step}</span>
                </div>
                <div>
                  <h3 style={{ fontFamily:C.serif, fontSize:15, color:C.forest, marginBottom:8, fontWeight:600 }}>{s.title}</h3>
                  <p style={{ fontSize:13, color:C.gray, lineHeight:1.65, margin:0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding:"80px 24px" }}>
        <div style={{ maxWidth:900, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:40 }}><h2 style={{ fontFamily:C.serif, fontSize:"clamp(1.7rem,3vw,2.4rem)", color:C.forest, fontWeight:700 }}>Documents Required</h2></div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
            {documents.map((doc,i) => (
              <div key={i} style={{ backgroundColor:C.white, borderRadius:12, padding:"16px 20px", border:`1px solid ${C.mintLight}`, display:"flex", alignItems:"center", gap:12 }}>
                <div style={{ width:28, height:28, borderRadius:"50%", backgroundColor:C.mintLight, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}><span style={{ color:C.forest, fontSize:12, fontWeight:700 }}>✓</span></div>
                <span style={{ fontSize:13, color:C.charcoal }}>{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ backgroundColor:C.mintLight, padding:"64px 24px" }}>
        <div style={{ maxWidth:800, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:40 }}><h2 style={{ fontFamily:C.serif, fontSize:"clamp(1.7rem,3vw,2.2rem)", color:C.forest, fontWeight:700 }}>Frequently Asked Questions</h2></div>
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            {faqs.map(faq => (
              <div key={faq.q} style={{ backgroundColor:C.white, borderRadius:14, padding:"22px 24px", border:`1px solid ${C.mint}` }}>
                <div style={{ fontFamily:C.serif, fontSize:15, color:C.forest, marginBottom:10, fontWeight:600 }}>Q: {faq.q}</div>
                <div style={{ fontSize:13, color:C.gray, lineHeight:1.7 }}>A: {faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ backgroundColor:C.forest, padding:"64px 24px" }}>
        <div style={{ maxWidth:760, margin:"0 auto", textAlign:"center" }}>
          <h2 style={{ fontFamily:C.serif, fontSize:"clamp(1.7rem,3vw,2.4rem)", color:C.white, marginBottom:16, fontWeight:700 }}>Get LMPC Compliant Today</h2>
          <p style={{ color:C.mint, marginBottom:32, lineHeight:1.7, fontSize:15 }}>Avoid customs holds and retail violations. Our LMPC team gets you compliant fast.</p>
          <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:16 }}>
            <button onClick={() => window.location.href="/contact"} style={{ padding:"14px 32px", backgroundColor:C.mint, color:C.forest, fontWeight:700, borderRadius:12, border:"none", fontSize:14, cursor:"pointer" }}>Get Free Consultation</button>
            <a href="tel:+919876543210" style={{ padding:"14px 32px", border:`1px solid ${C.mint}`, color:C.mint, borderRadius:12, textDecoration:"none", fontSize:14 }}>📞 +91 98765 43210</a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}