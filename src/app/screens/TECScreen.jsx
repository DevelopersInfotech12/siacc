import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const C = { forest:"#1B4332",forestMid:"#2D6A4F",forestLight:"#40916C",mint:"#95D5B2",mintLight:"#D8F3DC",offWhite:"#F7FAF8",charcoal:"#1A1A2E",gray:"#6B7280",white:"#ffffff",serif:"'Playfair Display', Georgia, serif",sans:"'DM Sans', system-ui, sans-serif" };

const types = [
  { icon:"📶", title:"TEC/MTCTE Certification", tag:"Mandatory", desc:"Mandatory Testing & Certification of Telecom Equipment for all telecom products sold or used in India." },
  { icon:"📱", title:"TAC & IMEI Registration", tag:"Mobile Devices", desc:"Type Allocation Code & IMEI registration for all mobile handsets and devices before launch in India." },
  { icon:"🌐", title:"IoT Device Certification", tag:"IoT", desc:"Certification for Internet of Things devices under MTCTE framework including smart meters, trackers." },
  { icon:"📡", title:"Telecom Equipment Approval", tag:"Telecom", desc:"Approval for telecom network equipment, routers, switches and networking hardware." },
];

const steps = [
  { step:"01", title:"Product Scoping", desc:"We identify applicable TEC standards and testing requirements for your telecom product." },
  { step:"02", title:"Lab Testing", desc:"Product is tested at TEC-designated/empanelled labs for conformity with Indian telecom standards." },
  { step:"03", title:"Application Filing", desc:"Complete MTCTE application filed on TEC portal with test reports and all supporting documents." },
  { step:"04", title:"TEC Review", desc:"TEC reviews the application. We respond to any technical queries raised by the authority." },
  { step:"05", title:"Certificate Issued", desc:"TEC issues the MTCTE certificate. Product can now be legally sold/used in India." },
];

const documents = ["Product technical datasheet","Test report from TEC-empanelled lab","Block diagram of the device","Product photographs","Company registration & KYC","Authorized signatory letter","User manual in English","Declaration of conformity"];

const faqs = [
  { q:"What is MTCTE?", a:"MTCTE stands for Mandatory Testing and Certification of Telecom Equipment. It is a DoT initiative requiring all telecom equipment sold or imported in India to be certified by TEC." },
  { q:"Which products fall under MTCTE?", a:"Products include mobile phones, routers, switches, modems, set-top boxes, GPS devices, IoT equipment, and other telecom/networking hardware." },
  { q:"What is the penalty for selling uncertified telecom equipment?", a:"Selling or importing uncertified telecom equipment can result in seizure, heavy penalties, and suspension of import license." },
  { q:"How long does TEC certification take?", a:"Typically 6–12 weeks depending on product complexity, lab availability, and application completeness." },
];

export default function TECScreen() {
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
                <span style={{ color:C.mint, fontSize:11, fontWeight:600, letterSpacing:"0.08em" }}>Telecom Engineering Centre</span>
              </div>
              <h1 style={{ fontFamily:C.serif, fontSize:"clamp(2rem,4vw,3.2rem)", color:C.white, margin:"0 0 20px", fontWeight:700, lineHeight:1.2 }}>TEC / MTCTE Certification<br />for Telecom Products</h1>
              <p style={{ color:"#b7e4c7", fontSize:16, lineHeight:1.8, maxWidth:560, marginBottom:32 }}>Mandatory certification for all telecom and networking equipment sold or imported in India. We manage the complete process — lab coordination, filing and tracking.</p>
              <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
                <button onClick={() => window.location.href="/contact"} style={{ padding:"13px 28px", backgroundColor:C.mint, color:C.forest, fontWeight:700, borderRadius:12, border:"none", fontSize:14, cursor:"pointer", fontFamily:C.sans }}>Get Free Consultation</button>
                <button onClick={() => window.location.href="/contact"} style={{ padding:"13px 28px", border:`1px solid ${C.forestLight}`, color:C.mint, borderRadius:12, background:"transparent", fontSize:14, cursor:"pointer", fontFamily:C.sans }}>Check Applicability →</button>
              </div>
            </div>
            <div style={{ backgroundColor:C.forestMid, borderRadius:16, padding:24, border:`1px solid ${C.forestLight}` }}>
              {[{label:"Governing Body",value:"TEC, Dept. of Telecom"},{label:"Portal",value:"MTCTE Portal (DoT)"},{label:"Validity",value:"3 Years"},{label:"Processing Time",value:"6–12 Weeks"},{label:"Applicable To",value:"All Telecom Equipment"}].map(item => (
                <div key={item.label} style={{ display:"flex", justifyContent:"space-between", padding:"12px 0", borderBottom:"1px solid rgba(149,213,178,0.2)" }}>
                  <span style={{ fontSize:13, color:C.mint, opacity:0.8 }}>{item.label}</span>
                  <span style={{ fontSize:13, color:C.white, fontWeight:600 }}>{item.value}</span>
                </div>
              ))}
              <button onClick={() => window.location.href="/contact"} style={{ width:"100%", marginTop:20, padding:13, backgroundColor:C.mint, color:C.forest, fontWeight:700, borderRadius:10, border:"none", fontSize:14, cursor:"pointer", fontFamily:C.sans }}>Start TEC Application →</button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding:"80px 24px" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <h2 style={{ fontFamily:C.serif, fontSize:"clamp(1.7rem,3vw,2.4rem)", color:C.forest, fontWeight:700 }}>TEC Certification Types</h2>
          </div>
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
          <div style={{ textAlign:"center", marginBottom:52 }}><h2 style={{ fontFamily:C.serif, fontSize:"clamp(1.7rem,3vw,2.4rem)", color:C.forest, fontWeight:700 }}>Certification Process</h2></div>
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
          <div style={{ textAlign:"center", marginBottom:52 }}><h2 style={{ fontFamily:C.serif, fontSize:"clamp(1.7rem,3vw,2.4rem)", color:C.forest, fontWeight:700 }}>Documents Required</h2></div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
            {documents.map((doc,i) => (
              <div key={i} style={{ backgroundColor:C.white, borderRadius:12, padding:"16px 20px", border:`1px solid ${C.mintLight}`, display:"flex", alignItems:"center", gap:12 }}>
                <div style={{ width:28, height:28, borderRadius:"50%", backgroundColor:C.mintLight, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <span style={{ color:C.forest, fontSize:12, fontWeight:700 }}>✓</span>
                </div>
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
          <h2 style={{ fontFamily:C.serif, fontSize:"clamp(1.7rem,3vw,2.4rem)", color:C.white, marginBottom:16, fontWeight:700 }}>Get Your Telecom Product Certified</h2>
          <p style={{ color:C.mint, marginBottom:32, lineHeight:1.7, fontSize:15 }}>Our TEC experts will guide you through the entire MTCTE process quickly and accurately.</p>
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