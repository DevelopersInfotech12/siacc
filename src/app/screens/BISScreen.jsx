"use client";
import { useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../animations.css";

const T = {
  teal:"#1E88C8",tealDark:"#074D4D",tealMid:"#0E8080",titleblue:"#0a6daa",
  tealLight:"#EBF5F5",amber:"#C8780A",amberLight:"#FEF3DC",amberDark:"#9A5C06",
  slate:"#0D1B2A",body:"#2D3748",muted:"#718096",subtle:"#A0AEC0",
  border:"#E8E3DA",borderLight:"#F0ECE5",white:"#FFFFFF",cream:"#FAF8F4",
  ctaBand:"#EBF5FB",ctaBandBorder:"#C8DFF0",orange:"#F97316",
  serif:"'Cormorant Garamond','Georgia',serif",sans:"'Outfit','system-ui',sans-serif",
};

function useReveal(opts={}) {
  const {threshold=0.15,stagger=false,baseDelay=90,once=true}=opts;
  const ref=useRef(null);
  useEffect(()=>{
    const el=ref.current; if(!el) return;
    const obs=new IntersectionObserver(([entry])=>{
      if(!entry.isIntersecting) return;
      if(stagger){
        Array.from(el.children).forEach((child,i)=>{
          child.style.transitionDelay=i*baseDelay+"ms";
          child.classList.add("revealed");
        });
      } else { el.classList.add("revealed"); }
      if(once) obs.unobserve(el);
    },{threshold});
    obs.observe(el);
    return ()=>obs.disconnect();
  },[threshold,stagger,baseDelay,once]);
  return ref;
}

const bisTypes=[
  {icon:"🔖",title:"BIS ISI Mark",        tag:"Manufacturing",        desc:"Mandatory for 370+ product categories including steel, cement, electrical goods, and more sold in India."},
  {icon:"📱",title:"BIS CRS Registration", tag:"Electronics",          desc:"Compulsory Registration Scheme for 70+ electronic & IT products like laptops, mobiles, LED lights, chargers."},
  {icon:"🌍",title:"BIS Scheme-X",         tag:"Foreign Manufacturers", desc:"Specially designed for overseas manufacturers who want to sell BIS-certified products directly in India."},
  {icon:"💍",title:"BIS Hallmarking",      tag:"Jewellery",            desc:"Mandatory gold and silver hallmarking certification under BIS for all jewellers across India."},
  {icon:"🌿",title:"ECO Mark",             tag:"Environment",          desc:"Eco-friendly product certification for manufacturers committed to environmental standards."},
  {icon:"🏭",title:"FMCS Certification",   tag:"Industrial",           desc:"Foreign Manufacturers Certification Scheme for industrial products from overseas companies."},
];
const documents=["Product Test Report from BIS-recognized lab","Factory / Premises details & address proof","Product specification / technical drawings","Applicant company registration documents","Authorized signatory details & KYC","Import-Export Code (for CRS / Scheme-X)","Factory layout plan (for ISI Mark)","Quality Manual (for ISI Mark applicants)"];
const steps=[
  {step:"01",title:"Product Assessment",       desc:"We identify the exact BIS scheme applicable to your product and the relevant Indian Standard (IS) number.",icon:"🔍"},
  {step:"02",title:"Lab Testing",              desc:"Product samples are tested at a BIS-recognized lab. We coordinate with labs to get results quickly.",icon:"🧪"},
  {step:"03",title:"Document Filing",          desc:"Complete application with test reports and all required documents is filed with BIS on your behalf.",icon:"📤"},
  {step:"04",title:"Factory Inspection",       desc:"For ISI Mark, BIS auditors inspect your manufacturing unit. We help you prepare thoroughly.",icon:"🔎"},
  {step:"05",title:"Grant of License",         desc:"BIS reviews and approves your application. License / Registration Certificate is issued.",icon:"🎓"},
  {step:"06",title:"Post-Certification Support",desc:"We assist with renewal, surveillance audits, and any compliance queries after certification.",icon:"🛡️"},
];
const faqs=[
  {q:"Which products require BIS CRS registration?",       a:"70+ products including mobile phones, laptops, tablets, LED lights, power banks, chargers, set-top boxes, smart watches, and more require mandatory CRS registration."},
  {q:"How long does BIS CRS registration take?",           a:"Typically 4–8 weeks if all documents are in order and lab test reports are available. We help expedite the process."},
  {q:"Can a foreign company apply for BIS certification?", a:"Yes, through BIS Scheme-X or the Foreign Manufacturers Certification Scheme (FMCS). An Indian Authorized Representative (IAR) is required."},
  {q:"What happens if I sell products without BIS certification?",a:"Products sold without mandatory BIS certification can be seized, and the company faces heavy penalties and import bans under the BIS Act, 2016."},
  {q:"Is BIS certification valid permanently?",            a:"No. ISI Mark licenses are valid for 1–2 years and must be renewed. CRS registrations are valid for 2 years."},
];
const infoItems=[
  {label:"Applicable Products",value:"370+ Categories"},
  {label:"Governing Body",     value:"Bureau of Indian Standards"},
  {label:"Validity",           value:"1–2 Years (Renewable)"},
  {label:"Typical Timeline",   value:"4–12 Weeks"},
  {label:"Our Success Rate",   value:"98%"},
];
const statsStrip=[
  {value:"370+",label:"Product Categories",  icon:"📋"},
  {value:"4–12",label:"Weeks Timeline",      icon:"⚡"},
  {value:"Free",label:"Initial Consultation",icon:"🆓"},
  {value:"98%", label:"Success Rate",        icon:"✅"},
];

const css=`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  img{max-width:100%;display:block;} a{text-decoration:none;color:inherit;}
  .sl-row{display:flex;align-items:center;gap:12px;margin-bottom:16px;}
  .sl-line{width:28px;height:1.5px;background:#1E88C8;flex-shrink:0;}
  .sl-text{font-family:'Outfit','system-ui',sans-serif;font-size:11px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#1E88C8;}
  .bis-hero-wrap{background:#FAF8F4;border-bottom:1px solid #E8E3DA;position:relative;overflow:hidden;}
  .bis-hero-wrap::before{content:'';position:absolute;top:-100px;right:-140px;width:500px;height:500px;background:radial-gradient(circle,rgba(30,136,200,0.11) 0%,transparent 70%);border-radius:50%;pointer-events:none;animation:heroGlowPulse 6s ease-in-out infinite;}
  .hero-grid{display:grid;grid-template-columns:1fr 340px;gap:48px;align-items:center;}
  @media(max-width:960px){.hero-grid{grid-template-columns:1fr;}.hero-right{display:none;}}
  .stats-strip{display:grid;grid-template-columns:repeat(4,1fr);}
  @media(max-width:640px){.stats-strip{grid-template-columns:repeat(2,1fr);}}
  .types-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;}
  @media(max-width:640px){.types-grid{grid-template-columns:1fr;}}
  .type-card{background:#fff;border-radius:10px;padding:28px;border:1px solid #E8E3DA;transition:all 0.25s;}
  .type-card:hover{border-color:#1E88C8;transform:translateY(-3px);box-shadow:0 12px 32px rgba(30,136,200,0.09);}
  .steps-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;}
  @media(max-width:600px){.steps-grid{grid-template-columns:1fr;}}
  .step-card{background:#fff;border-radius:10px;padding:24px;border:1px solid #E8E3DA;display:flex;gap:16px;align-items:flex-start;transition:all 0.2s;}
  .step-card:hover{border-color:#1E88C8;box-shadow:0 8px 24px rgba(30,136,200,0.08);}
  .docs-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
  @media(max-width:640px){.docs-grid{grid-template-columns:1fr;}}
  .faq-card{background:#fff;border-radius:10px;padding:22px 24px;border:1px solid #E8E3DA;transition:all 0.22s;margin-bottom:12px;}
  .faq-card:hover{border-color:#1E88C8;box-shadow:0 6px 20px rgba(30,136,200,0.08);transform:translateY(-2px);}
  .cta-split{display:grid;grid-template-columns:1fr auto;gap:40px;align-items:center;}
  @media(max-width:720px){.cta-split{grid-template-columns:1fr;gap:28px;}}
  .sec{padding:clamp(64px,8vw,104px) clamp(16px,5vw,56px);}
  .inner{max-width:1280px;margin:0 auto;}
`;

export default function BISScreen() {
  const heroLeftRef =useReveal();
  const heroRightRef=useReveal();
  const statsRef    =useReveal({stagger:true,baseDelay:100});
  const typesTtlRef =useReveal();
  const typesRef    =useReveal({stagger:true,baseDelay:80});
  const procTtlRef  =useReveal();
  const bannerRef   =useReveal({threshold:0.1});
  const stepsRef    =useReveal({stagger:true,baseDelay:80});
  const docsTtlRef  =useReveal();
  const docsRef     =useReveal({stagger:true,baseDelay:70});
  const faqTtlRef   =useReveal();
  const faqRef      =useReveal({stagger:true,baseDelay:80});
  const ctaRef      =useReveal();

  const btn1={padding:"13px 32px",fontFamily:T.sans,fontSize:13.5,fontWeight:600,letterSpacing:"0.02em",border:"none",borderRadius:6,cursor:"pointer",background:T.orange,color:"#fff",boxShadow:"0 4px 16px rgba(10,104,104,0.22)",transition:"all 0.22s"};
  const btn2={padding:"12px 28px",fontFamily:T.sans,fontSize:13.5,fontWeight:600,letterSpacing:"0.02em",borderRadius:6,cursor:"pointer",border:`1.5px solid ${T.border}`,color:T.white,background:T.orange,transition:"all 0.22s"};

  return (
    <div style={{minHeight:"100vh",backgroundColor:T.white,fontFamily:T.sans,color:T.body}}>
      <style>{css}</style>
      <Navbar />

      {/* HERO */}
      <section className="bis-hero-wrap">
        <div style={{maxWidth:1280,margin:"0 auto",padding:"clamp(56px,8vw,96px) clamp(16px,4vw,56px)"}}>
          <div className="hero-grid">
            <div className="reveal-left" ref={heroLeftRef}>
              <div className="anim-pill-in" style={{display:"inline-flex",alignItems:"center",gap:8,background:T.tealLight,borderRadius:4,padding:"5px 14px",marginBottom:24}}>
                <span style={{width:7,height:7,borderRadius:"50%",background:T.teal,display:"inline-block"}}/>
                <span style={{fontFamily:T.sans,fontSize:10.5,fontWeight:700,color:T.teal,letterSpacing:"0.12em",textTransform:"uppercase"}}>Bureau of Indian Standards</span>
              </div>
              <h1 style={{fontFamily:T.serif,fontSize:"clamp(2rem,3.8vw,3.4rem)",color:T.titleblue,fontWeight:700,lineHeight:1.08,marginBottom:10,letterSpacing:"-0.01em"}}>BIS Certification<br/>for Indian Market Entry</h1>
              <p style={{fontFamily:T.sans,fontSize:12,fontWeight:600,color:T.tealMid,marginBottom:20,letterSpacing:"0.05em",textTransform:"uppercase"}}>ISI Mark · CRS Registration · Scheme-X · Hallmarking</p>
              <p style={{fontFamily:T.sans,fontSize:16,color:T.muted,lineHeight:1.9,marginBottom:32,maxWidth:480,textAlign:"justify"}}>Mandatory quality certification by the Bureau of Indian Standards. Whether you need ISI Mark, CRS Registration, or Scheme-X for foreign manufacturers — we handle it all end-to-end.</p>
              <div style={{display:"flex",gap:12,flexWrap:"wrap",marginBottom:28}}>
                <button style={btn1}
                  onMouseEnter={e=>{e.currentTarget.style.background=T.teal;e.currentTarget.style.transform="translateY(-1px)";}}
                  onMouseLeave={e=>{e.currentTarget.style.background=T.orange;e.currentTarget.style.transform="translateY(0)";}}>Get Free Consultation</button>
                <button style={btn2}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=T.teal;e.currentTarget.style.color=T.teal;e.currentTarget.style.background="transparent";}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor=T.border;e.currentTarget.style.color=T.white;e.currentTarget.style.background=T.orange;}}>Download Checklist →</button>
              </div>
              <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                {["✓ Free Consultation","✓ 4–12 Wk Timeline","✓ 98% Success Rate","✓ Pan-India"].map(b=>(
                  <span key={b} style={{padding:"6px 14px",border:`1px solid ${T.border}`,borderRadius:4,fontSize:12,color:T.muted,background:T.white,fontFamily:T.sans,fontWeight:500}}>{b}</span>
                ))}
              </div>
            </div>
            <div className="reveal-right hero-right" ref={heroRightRef}>
              <div style={{background:T.white,border:`1px solid ${T.border}`,borderRadius:10,padding:28,boxShadow:"0 4px 20px rgba(0,0,0,0.05)"}}>
                <div className="sl-row"><div className="sl-line sl-line-anim"/><span className="sl-text">Quick Info</span></div>
                {infoItems.map((item,i)=>(
                  <div key={item.label} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0",borderBottom:i<infoItems.length-1?`1px solid ${T.border}`:"none"}}>
                    <span style={{fontFamily:T.sans,fontSize:13,color:T.muted}}>{item.label}</span>
                    <span style={{fontFamily:T.sans,fontSize:13,color:T.slate,fontWeight:600,textAlign:"right",maxWidth:"55%"}}>{item.value}</span>
                  </div>
                ))}
                <button style={{width:"100%",marginTop:22,padding:13,background:T.orange,color:"#fff",fontWeight:600,borderRadius:6,border:"none",fontFamily:T.sans,fontSize:14,cursor:"pointer",transition:"background 0.2s"}}
                  onMouseEnter={e=>e.currentTarget.style.background=T.teal}
                  onMouseLeave={e=>e.currentTarget.style.background=T.orange}>Start Application →</button>
              </div>
            </div>
          </div>
        </div>
        <div style={{height:2,background:T.borderLight}}><div style={{width:"100%",height:"100%",background:T.teal,opacity:0.4}}/></div>
      </section>

      {/* STATS */}
      <section style={{background:T.teal}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <div className="stats-strip" ref={statsRef}>
            {statsStrip.map((s,i)=>(
              <div key={s.label} className={`reveal d${i}`} style={{textAlign:"center",padding:"36px 16px",borderRight:i<statsStrip.length-1?"1px solid rgba(255,255,255,0.07)":"none"}}>
                <div style={{fontSize:20,marginBottom:6}}>{s.icon}</div>
                <div className="anim-count-up" style={{fontFamily:T.serif,fontSize:"clamp(2rem,2.8vw,2.8rem)",color:"#fff",fontWeight:700,lineHeight:1,letterSpacing:"-0.01em"}}>{s.value}</div>
                <div style={{fontFamily:T.sans,fontSize:14,color:"rgba(255,255,255,0.80)",marginTop:8,letterSpacing:"0.04em"}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section className="sec" style={{background:T.cream}}>
        <div className="inner">
          <div style={{textAlign:"center",marginBottom:52}} className="reveal" ref={typesTtlRef}>
            <div style={{display:"flex",justifyContent:"center"}}><div className="sl-row"><div className="sl-line sl-line-anim"/><span className="sl-text">Types of BIS Certification</span></div></div>
            <h2 style={{fontFamily:T.serif,fontSize:"clamp(2rem,3.2vw,2.9rem)",color:T.titleblue,fontWeight:700,letterSpacing:"-0.01em",marginBottom:14}}>Which BIS Certification Do You Need?</h2>
            <p style={{fontFamily:T.sans,color:T.muted,maxWidth:480,margin:"0 auto",lineHeight:1.75,fontSize:16}}>Different products require different BIS certifications. Here's what applies to your category.</p>
          </div>
          <div className="types-grid" ref={typesRef}>
            {bisTypes.map((t,i)=>(
              <div key={t.title} className={`type-card reveal d${i%6}`}>
                <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:16}}>
                  <div style={{width:52,height:52,background:T.tealLight,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24}}>{t.icon}</div>
                  <span style={{fontFamily:T.sans,fontSize:10,fontWeight:700,background:i%2===0?T.tealLight:T.amberLight,color:i%2===0?T.tealMid:T.amberDark,padding:"3px 10px",borderRadius:3,letterSpacing:"0.06em"}}>{t.tag}</span>
                </div>
                <h3 style={{fontFamily:T.serif,fontSize:17,color:T.slate,marginBottom:10,fontWeight:600}}>{t.title}</h3>
                <p style={{fontFamily:T.sans,fontSize:15,color:T.muted,lineHeight:1.6,margin:0,textAlign:"justify"}}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sec" style={{background:T.white}}>
        <div className="inner">
          <div style={{textAlign:"center",marginBottom:52}} className="reveal" ref={procTtlRef}>
            <div style={{display:"flex",justifyContent:"center"}}><div className="sl-row"><div className="sl-line sl-line-anim"/><span className="sl-text">Step by Step</span></div></div>
            <h2 style={{fontFamily:T.serif,fontSize:"clamp(2rem,3.2vw,2.9rem)",color:T.titleblue,fontWeight:700,letterSpacing:"-0.01em",marginBottom:14}}>BIS Certification Process</h2>
          </div>
          <div className="reveal-scale" ref={bannerRef} style={{position:"relative",borderRadius:10,overflow:"hidden",marginBottom:36,height:170}}>
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80&fit=crop" alt="process" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 40%"}}/>
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to right,rgba(14,128,128,0.88) 0%,rgba(30,136,200,0.60) 55%,rgba(235,245,251,0.25) 100%)"}}/>
            <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",padding:"0 40px"}}>
              <div>
                <div style={{fontFamily:T.serif,fontSize:"clamp(1.1rem,2vw,1.4rem)",color:"#fff",fontWeight:700,marginBottom:6}}>End-to-End BIS Compliance</div>
                <p style={{fontFamily:T.sans,color:"rgba(255,255,255,0.78)",fontSize:13}}>Lab coordination, application filing, and follow-up — all managed by our experts.</p>
              </div>
            </div>
          </div>
          <div className="steps-grid" ref={stepsRef}>
            {steps.map((s,i)=>(
              <div key={s.step} className={`step-card reveal d${i%6}`}>
                <div style={{width:48,height:48,borderRadius:9,background:T.tealLight,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:20}}>{s.icon}</div>
                <div>
                  <div style={{fontFamily:T.sans,fontSize:10.5,fontWeight:700,color:T.teal,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:4}}>Step {s.step}</div>
                  <h3 style={{fontFamily:T.serif,fontSize:17,color:T.slate,marginBottom:6,fontWeight:600}}>{s.title}</h3>
                  <p style={{fontFamily:T.sans,fontSize:15,color:T.muted,lineHeight:1.7,margin:0}}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section style={{position:"relative",overflow:"hidden"}} className="sec">
        <img src="https://images.unsplash.com/photo-1568219557405-376e23e4f7cf?w=1600&q=80&fit=crop" alt="docs" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg,rgba(13,27,42,0.96) 0%,rgba(14,128,128,0.88) 100%)"}}/>
        <div style={{maxWidth:900,margin:"0 auto",position:"relative",zIndex:1}}>
          <div style={{textAlign:"center",marginBottom:48}} className="reveal" ref={docsTtlRef}>
            <div style={{display:"flex",justifyContent:"center"}}><div className="sl-row"><div className="sl-line" style={{background:"rgba(255,255,255,0.5)"}}/><span className="sl-text" style={{color:"rgba(255,255,255,0.75)"}}>What You Need</span></div></div>
            <h2 style={{fontFamily:T.serif,fontSize:"clamp(2rem,3.2vw,2.9rem)",color:"#fff",fontWeight:700,letterSpacing:"-0.01em"}}>Documents Required</h2>
          </div>
          <div className="docs-grid" ref={docsRef}>
            {documents.map((doc,i)=>(
              <div key={i} className={`reveal d${i%4}`} style={{background:"rgba(255,255,255,0.07)",borderRadius:8,padding:"16px 20px",border:"1px solid rgba(255,255,255,0.12)",display:"flex",alignItems:"center",gap:12,backdropFilter:"blur(4px)",transition:"background 0.2s"}}
                onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,0.12)"}
                onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,0.07)"}>
                <div style={{width:28,height:28,borderRadius:"50%",background:T.teal,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><span style={{color:"#fff",fontSize:12,fontWeight:800}}>✓</span></div>
                <span style={{fontFamily:T.sans,fontSize:15,color:"rgba(255,255,255,0.85)"}}>{doc}</span>
              </div>
            ))}
          </div>
          <p style={{textAlign:"center",marginTop:24,fontFamily:T.sans,fontSize:13,color:"rgba(255,255,255,0.50)"}}>Not sure if you have everything?{" "}<button onClick={()=>window.location.href="/contact"} style={{color:T.teal,fontWeight:600,background:"none",border:"none",cursor:"pointer",fontFamily:T.sans,fontSize:13}}>Contact us for a free document checklist →</button></p>
        </div>
      </section>

      {/* FAQS */}
      <section className="sec" style={{background:T.cream}}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}} className="reveal" ref={faqTtlRef}>
            <div style={{display:"flex",justifyContent:"center"}}><div className="sl-row"><div className="sl-line sl-line-anim"/><span className="sl-text">Common Questions</span></div></div>
            <h2 style={{fontFamily:T.serif,fontSize:"clamp(2rem,3.2vw,2.9rem)",color:T.titleblue,fontWeight:700,letterSpacing:"-0.01em"}}>BIS Certification FAQs</h2>
          </div>
          <div ref={faqRef}>
            {faqs.map((faq,i)=>(
              <div key={faq.q} className={`faq-card reveal d${i}`}>
                <div style={{display:"flex",gap:14,marginBottom:10}}>
                  <div style={{width:28,height:28,borderRadius:"50%",background:T.tealLight,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontWeight:700,fontSize:12,color:T.teal}}>Q</div>
                  <div style={{fontFamily:T.serif,fontSize:18,color:T.slate,fontWeight:600,paddingTop:4}}>{faq.q}</div>
                </div>
                <div style={{display:"flex",gap:14}}>
                  <div style={{width:28,height:28,borderRadius:"50%",background:T.amberLight,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontWeight:700,fontSize:12,color:T.amber}}>A</div>
                  <div style={{fontFamily:T.sans,fontSize:15,color:T.muted,lineHeight:1.8,paddingTop:4}}>{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="reveal" ref={ctaRef} style={{background:T.ctaBand,borderTop:`1px solid ${T.ctaBandBorder}`,borderBottom:`1px solid ${T.ctaBandBorder}`,padding:"80px clamp(16px,5vw,56px)"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div className="cta-split">
            <div>
              <div className="sl-row" style={{marginBottom:20}}><div className="sl-line sl-line-anim"/><span className="sl-text">Start Today</span></div>
              <h2 style={{fontFamily:T.serif,fontSize:"clamp(1.9rem,3.2vw,2.9rem)",color:T.titleblue,fontWeight:700,lineHeight:1.1,letterSpacing:"-0.01em",marginBottom:14}}>Ready to Get BIS Certified?</h2>
              <p style={{fontFamily:T.sans,color:T.muted,fontSize:14.5,lineHeight:1.8}}>Our BIS specialists will assess your product and give you a clear roadmap — for free.<br/>Free consultation. Clear timeline. Transparent pricing.</p>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:12,flexShrink:0}}>
              <button onClick={()=>window.location.href="/contact"}
                style={{padding:"14px 36px",fontFamily:T.sans,fontSize:14,fontWeight:600,border:"none",borderRadius:6,cursor:"pointer",background:T.orange,color:"#fff",whiteSpace:"nowrap",transition:"all 0.22s"}}
                onMouseEnter={e=>{e.currentTarget.style.background=T.teal;e.currentTarget.style.transform="translateY(-1px)";}}
                onMouseLeave={e=>{e.currentTarget.style.background=T.orange;e.currentTarget.style.transform="translateY(0)";}}>Get Free Consultation</button>
              <a href="tel:+919540190334" style={{padding:"13px 28px",border:`1.5px solid ${T.border}`,borderRadius:6,fontFamily:T.sans,fontSize:14,fontWeight:500,color:T.slate,display:"flex",alignItems:"center",justifyContent:"center",gap:8,whiteSpace:"nowrap",background:T.white,transition:"border-color 0.2s"}}
                onMouseEnter={e=>e.currentTarget.style.borderColor=T.teal}
                onMouseLeave={e=>e.currentTarget.style.borderColor=T.border}>📞 +91-9540190334</a>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}