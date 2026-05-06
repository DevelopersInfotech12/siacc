"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../animations.css";

const T = {
  teal:"#1E88C8",tealDark:"#074D4D",tealMid:"#0E8080",titleblue:"#0a6daa", para:"#080000b0", paradark:"#080000c4",
  tealLight:"#EBF5F5",amber:"#C8780A",amberLight:"#FEF3DC",amberDark:"#9A5C06",
  slate:"#0D1B2A",body:"#2D3748",muted:"#718096",subtle:"#A0AEC0",
  border:"#E8E3DA",borderLight:"#F0ECE5",white:"#FFFFFF",cream:"#FAF8F4",
  ctaBand:"#EBF5FB",ctaBandBorder:"#C8DFF0",orange:"#F97316",
  serif:"'Cormorant Garamond','Georgia',serif",sans:"'Outfit','system-ui',sans-serif",
  poppins:"'Poppins','system-ui',sans-serif",
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

const types=[
  {icon:"🔬",title:"Product Safety Testing",tag:"Mandatory",desc:"Safety and performance testing for consumer electronics, electrical appliances, and industrial products as per Indian standards."},
  {icon:"📡",title:"EMC / RF Testing",tag:"Wireless Devices",desc:"Electromagnetic Compatibility and Radio Frequency testing for wireless, Bluetooth, Wi-Fi, and IoT devices."},
  {icon:"⚗️",title:"Chemical & Material Testing",tag:"FMCG / Pharma",desc:"Lab testing for chemicals, raw materials, food products, and pharmaceutical formulations for compliance and safety."},
  {icon:"🏗️",title:"Mechanical & Structural Testing",tag:"Industrial",desc:"Strength, durability, and structural integrity testing for construction materials, industrial components, and machinery."},
  {icon:"🌿",title:"Environmental Testing",tag:"Sustainability",desc:"RoHS, REACH, and environmental compliance testing for electronics, plastics, and consumer goods."},
  {icon:"🧴",title:"Consumer Product Testing",tag:"Retail",desc:"Comprehensive testing for toys, cosmetics, textiles, footwear, and packaged food products."}
];
const steps=[
  {step:"01",title:"Product Scoping",desc:"We identify the applicable standards, regulatory requirements, and specific test parameters for your product.",icon:"🔍"},
  {step:"02",title:"Lab Selection",desc:"We recommend and coordinate with the right NABL/BIS accredited lab based on your product and certification need.",icon:"🏛️"},
  {step:"03",title:"Sample Submission",desc:"We guide you on sample preparation and coordinate submission of samples to the testing laboratory.",icon:"📦"},
  {step:"04",title:"Testing & Monitoring",desc:"We actively track your test progress, coordinate with lab engineers, and get any clarifications resolved quickly.",icon:"⏱️"},
  {step:"05",title:"Report Review",desc:"We review the test report for completeness and accuracy before it is used for certification applications.",icon:"📋"},
  {step:"06",title:"Certification Filing",desc:"Approved test reports are used to file for the required certification — BIS, WPC, TEC, BEE, or others.",icon:"🎓"}
];
const docs=["Product technical datasheet / specifications","Product samples (as per lab requirements)","User manual / product brochure","Circuit diagram / block diagram (if applicable)","Company registration & KYC documents","Previous test reports (if any)","Applicable Indian Standard (IS) number","Authorized signatory letter"];
const faqs=[
  {q:"Which lab should I use for BIS CRS certification?",a:"You must use a BIS-recognized lab for CRS registration. We maintain partnerships with multiple BIS-recognized labs across India and help coordinate the fastest turnaround."},
  {q:"How many product samples are needed for testing?",a:"The number of samples varies by product and standard — typically 3 to 10 units. We advise you on exact requirements based on your specific product and applicable standard."},
  {q:"Can I use a foreign test report for Indian certifications?",a:"In some cases, yes. BIS CRS and certain TEC/WPC approvals accept test reports from internationally accredited labs (ILAC-MRA members). We can assess if your existing report qualifies."},
  {q:"How long does product testing take?",a:"Testing timelines vary: 1-2 weeks for simple consumer products, 3-6 weeks for electronics with EMC testing, and up to 8-12 weeks for complex telecom equipment."},
  {q:"What happens if my product fails the test?",a:"We help you identify the root cause of failure, recommend design or compliance fixes, and coordinate re-testing. Our team has experience guiding products through failure remediation."}
];
const infoItems=[{label:"Lab Type",value:"NABL / BIS / TEC / WPC"},{label:"Standards",value:"IS, IEC, EN, IEEE & more"},{label:"Turnaround",value:"1–12 Weeks (product-based)"},{label:"Reports Valid For",value:"BIS, WPC, TEC, BEE filings"},{label:"Our Success Rate",value:"98%"}];
const statsStrip=[{value:"50+",label:"Accredited Labs",icon:"🏛️"},{value:"1–12",label:"Weeks Turnaround",icon:"⚡"},{value:"Free",label:"Initial Consultation",icon:"🆓"},{value:"98%",label:"Success Rate",icon:"✅"}];

const heroChips=[
  {icon:"🔬",label:"Product Safety Testing"},
  {icon:"📡",label:"EMC / RF Testing"},
  {icon:"⚗️",label:"Chemical Testing"},
  {icon:"🌿",label:"Environmental Testing"},
  {icon:"✅",label:"98% Success Rate"},
];

const css=`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  img{max-width:100%;display:block;} a{text-decoration:none;color:inherit;}
  .sl-row{display:flex;align-items:center;gap:12px;margin-bottom:16px;}
  .sl-line{width:28px;height:1.5px;background:#1E88C8;flex-shrink:0;}
  .sl-text{font-family:'Outfit','system-ui',sans-serif;font-size:11px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#1E88C8;}

  @keyframes pulse-dot {
    0%,100%{opacity:1;transform:scale(1);}
    50%{opacity:0.6;transform:scale(1.3);}
  }

  .hero-chip{
    display:inline-flex;align-items:center;gap:8px;
    background:rgba(255,255,255,0.09);
    border:1px solid rgba(255,255,255,0.16);
    backdrop-filter:blur(6px);
    border-radius:6px;padding:9px 16px;
    font-family:'Outfit','system-ui',sans-serif;font-size:12.5px;font-weight:500;
    color:rgba(255,255,255,0.90);
    transition:background 0.2s,border-color 0.2s,transform 0.2s;
  }
  .hero-chip:hover{
    background:rgba(255,255,255,0.18);
    border-color:rgba(255,255,255,0.35);
    transform:translateY(-2px);
  }

  .overview-grid{display:grid;grid-template-columns:1fr 360px;gap:48px;align-items:flex-start;}
  @media(max-width:960px){.overview-grid{grid-template-columns:1fr;}}

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

export default function TestingScreen() {
  const router=useRouter();
  const heroLeftRef =useReveal();
  const overviewRef =useReveal();
  const infoCardRef =useReveal();
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

  return (
    <div style={{minHeight:"100vh",backgroundColor:T.white,fontFamily:T.sans,color:T.body}}>
      <style>{css}</style>
      <Navbar />

      {/* ══ HERO ══ */}
      <section style={{
        position:"relative",overflow:"hidden",
        borderBottom:`1px solid ${T.border}`,
        minHeight:420,
        display:"flex",flexDirection:"column",justifyContent:"center",
      }}>
        <div style={{position:"absolute",left:0,top:0,bottom:0,width:4,background:`linear-gradient(to bottom,${T.orange},${T.teal})`,zIndex:3}}/>
        <img src="/images/testing.png" alt="Product Testing" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 40%",zIndex:0}}/>
        <div style={{position:"absolute",inset:0,zIndex:1,background:"linear-gradient(to right,rgba(7,18,28,0.88) 0%,rgba(7,18,28,0.60) 50%,rgba(7,18,28,0.10) 100%)"}}/>
        <div style={{position:"relative",zIndex:2,maxWidth:1280,margin:"0 auto",width:"100%",padding:"clamp(48px,7vw,88px) clamp(20px,4vw,60px)"}}>
          <div ref={heroLeftRef} className="reveal-left">
            <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,255,255,0.10)",border:"1px solid rgba(255,255,255,0.20)",backdropFilter:"blur(8px)",borderRadius:4,padding:"6px 16px",marginBottom:22}}>
              <span style={{width:7,height:7,borderRadius:"50%",background:"#4ade80",boxShadow:"0 0 6px rgba(74,222,128,0.8)",display:"inline-block",animation:"pulse-dot 2s ease-in-out infinite"}}/>
              <span style={{fontFamily:T.sans,fontSize:10.5,fontWeight:700,color:"#fff",letterSpacing:"0.14em",textTransform:"uppercase"}}>
                NABL / BIS / TEC / WPC Accredited Labs — Certified Consultants
              </span>
            </div>
            <h1 style={{
              fontFamily:T.poppins,
              fontSize:56,
              fontWeight:700,lineHeight:1.04,
              marginBottom:20,letterSpacing:"-0.01em",
              color:"#fff",maxWidth:640,
            }}>
              Product Testing &amp;{" "}
              <span style={{color:T.orange}}>Certification Support</span>
            </h1>
            <div style={{display:"flex",flexWrap:"wrap",gap:10,marginTop:32}}>
              {heroChips.map(chip=>(
                <span key={chip.label} className="hero-chip">
                  <span style={{fontSize:15}}>{chip.icon}</span>{chip.label}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div style={{position:"absolute",bottom:0,left:0,right:0,height:3,background:T.teal,opacity:0.6,zIndex:2}}/>
      </section>

      {/* ══ STATS STRIP ══ */}
      <section style={{background:T.teal}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <div className="stats-strip" ref={statsRef}>
            {statsStrip.map((s,i)=>(
              <div key={s.label} className={`reveal d${i}`} style={{textAlign:"center",padding:"36px 16px",borderRight:i<statsStrip.length-1?"1px solid rgba(255,255,255,0.07)":"none"}}>
                <div style={{fontSize:20,marginBottom:6}}>{s.icon}</div>
                <div style={{fontFamily:T.poppins,fontSize:"clamp(2rem,2.8vw,2.8rem)",color:"#fff",fontWeight:700,lineHeight:1,letterSpacing:"-0.01em"}}>{s.value}</div>
                <div style={{fontFamily:T.sans,fontSize:14,color:"rgba(255,255,255,0.80)",marginTop:8,letterSpacing:"0.04em"}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OVERVIEW ══ */}
      <section className="sec" style={{background:T.cream}}>
        <div className="inner">
          <div className="overview-grid">

            {/* Left */}
            <div className="reveal-left" ref={overviewRef}>
              <div className="sl-row"><div className="sl-line"/><span className="sl-text">NABL / BIS / TEC / WPC Accredited Labs</span></div>
              <h2 style={{fontFamily:T.poppins,fontSize:40,color:T.titleblue,fontWeight:700,lineHeight:1.1,letterSpacing:"-0.01em",marginBottom:16}}>
                End-to-End Lab Testing Coordination
              </h2>
              <p style={{fontFamily:T.sans,fontSize:12,fontWeight:600,color:T.tealMid,marginBottom:16,letterSpacing:"0.05em",textTransform:"uppercase"}}>Lab Coordination · Report Review · Certification Filing</p>
              <p style={{fontFamily:T.sans,fontSize:15.5,color:T.para,lineHeight:1.9,marginBottom:16,textAlign:"justify"}}>
                End-to-end lab testing coordination for all Indian regulatory certifications. We identify the right lab, manage sample submission, track progress, and review reports — so your certification isn't delayed by testing.
              </p>
              <p style={{fontFamily:T.sans,fontSize:15.5,color:T.para,lineHeight:1.9,marginBottom:32,textAlign:"justify"}}>
                Our testing specialists work with 50+ NABL, BIS, TEC, and WPC accredited labs across India, ensuring your test reports meet every certification requirement.
              </p>
              <div style={{display:"flex",gap:12,flexWrap:"wrap",marginBottom:28}}>
                <button onClick={()=>router.push("/contact")}
                  style={{padding:"13px 32px",fontFamily:T.sans,fontSize:13.5,fontWeight:600,letterSpacing:"0.02em",border:"none",borderRadius:6,cursor:"pointer",background:T.orange,color:"#fff",boxShadow:"0 4px 16px rgba(10,104,104,0.22)",transition:"all 0.22s"}}
                  onMouseEnter={e=>{e.currentTarget.style.background=T.teal;e.currentTarget.style.transform="translateY(-1px)";}}
                  onMouseLeave={e=>{e.currentTarget.style.background=T.orange;e.currentTarget.style.transform="translateY(0)";}}>Get Free Consultation</button>
                <button onClick={()=>router.push("/contact")}
                  style={{padding:"12px 28px",fontFamily:T.sans,fontSize:13.5,fontWeight:600,borderRadius:6,cursor:"pointer",border:`1.5px solid ${T.border}`,color:T.slate,background:"transparent",transition:"all 0.22s"}}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=T.teal;e.currentTarget.style.color=T.teal;}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor=T.border;e.currentTarget.style.color=T.slate;}}>Check Testing Requirements →</button>
              </div>
              <div style={{position:"relative",borderRadius:10,overflow:"hidden",height:220}}>
                <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80&fit=crop" alt="Testing lab" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 40%"}}/>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(to right,rgba(14,128,128,0.78) 0%,rgba(30,136,200,0.45) 60%,rgba(235,245,251,0.15) 100%)"}}/>
                <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",padding:"0 28px"}}>
                  <div>
                    <div style={{fontFamily:T.poppins,fontSize:"clamp(1rem,2vw,1.3rem)",color:"#fff",fontWeight:700,marginBottom:4}}>50+ Accredited Lab Partners</div>
                    <p style={{fontFamily:T.sans,color:"rgba(255,255,255,0.80)",fontSize:12.5}}>NABL · BIS · TEC · WPC · BEE Accredited Labs Pan-India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — info card */}
            <div className="reveal-right" ref={infoCardRef}>
              <div style={{background:T.white,border:`1px solid ${T.border}`,borderRadius:10,padding:28,boxShadow:"0 4px 20px rgba(0,0,0,0.05)",position:"sticky",top:100}}>
                <div className="sl-row"><div className="sl-line"/><span className="sl-text">Quick Info</span></div>
                {infoItems.map((item,i)=>(
                  <div key={item.label} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0",borderBottom:i<infoItems.length-1?`1px solid ${T.border}`:"none"}}>
                    <span style={{fontFamily:T.sans,fontSize:13,color:T.muted}}>{item.label}</span>
                    <span style={{fontFamily:T.poppins,fontSize:13,color:T.slate,fontWeight:600,textAlign:"right",maxWidth:"55%"}}>{item.value}</span>
                  </div>
                ))}
                <button
                  onClick={()=>router.push("/contact")}
                  style={{width:"100%",marginTop:22,padding:13,background:T.orange,color:"#fff",fontWeight:600,borderRadius:6,border:"none",fontFamily:T.poppins,fontSize:14,cursor:"pointer",transition:"background 0.2s"}}
                  onMouseEnter={e=>e.currentTarget.style.background=T.teal}
                  onMouseLeave={e=>e.currentTarget.style.background=T.orange}>Start Application →</button>
                <div style={{marginTop:16,paddingTop:16,borderTop:`1px solid ${T.border}`,display:"flex",flexDirection:"column",gap:10}}>
                  {[
                    {icon:"📞",label:"Call Us",value:"+91-9540190334",href:"tel:+919540190334"},
                    {icon:"✉",label:"Email Us",value:"info@siacc.in",href:"mailto:info@siacc.in"},
                  ].map(item=>(
                    <a key={item.label} href={item.href} style={{display:"flex",alignItems:"center",gap:10,textDecoration:"none"}}>
                      <div style={{width:36,height:36,borderRadius:7,backgroundColor:T.tealLight,display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,flexShrink:0}}>{item.icon}</div>
                      <div>
                        <div style={{fontFamily:T.sans,fontSize:10,color:T.teal,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em"}}>{item.label}</div>
                        <div style={{fontFamily:T.poppins,fontSize:13,color:T.slate,fontWeight:500,marginTop:1}}>{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ TYPES ══ */}
      <section className="sec" style={{background:T.white}}>
        <div className="inner">
          <div style={{textAlign:"center",marginBottom:52}} className="reveal" ref={typesTtlRef}>
            <div style={{display:"flex",justifyContent:"center"}}><div className="sl-row"><div className="sl-line"/><span className="sl-text">Testing Categories</span></div></div>
            <h2 style={{fontFamily:T.poppins,fontSize:"clamp(2rem,3.2vw,2.9rem)",color:T.titleblue,fontWeight:700,letterSpacing:"-0.01em",marginBottom:14}}>What Type of Testing Do You Need?</h2>
            <p style={{fontFamily:T.sans,color:T.para,maxWidth:480,margin:"0 auto",lineHeight:1.75,fontSize:16}}>We coordinate with accredited labs across India for all product categories and regulatory frameworks.</p>
          </div>
          <div className="types-grid" ref={typesRef}>
            {types.map((t,i)=>(
              <div key={t.title} className={`type-card reveal d${i%6}`}>
                <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:16}}>
                  <div style={{width:52,height:52,background:T.tealLight,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24}}>{t.icon}</div>
                  <span style={{fontFamily:T.sans,fontSize:10,fontWeight:700,background:i%2===0?T.tealLight:T.amberLight,color:i%2===0?T.tealMid:T.amberDark,padding:"3px 10px",borderRadius:3,letterSpacing:"0.06em"}}>{t.tag}</span>
                </div>
                <h3 style={{fontFamily:T.poppins,fontSize:17,color:T.titleblue,marginBottom:10,fontWeight:600}}>{t.title}</h3>
                <p style={{fontSize:15,color:T.para,margin:0,fontWeight:500,textAlign:"justify"}}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS ══ */}
      <section className="sec" style={{background:T.cream}}>
        <div className="inner">
          <div style={{textAlign:"center",marginBottom:52}} className="reveal" ref={procTtlRef}>
            <div style={{display:"flex",justifyContent:"center"}}><div className="sl-row"><div className="sl-line"/><span className="sl-text">Step by Step</span></div></div>
            <h2 style={{fontFamily:T.poppins,fontSize:"clamp(2rem,3.2vw,2.9rem)",color:T.titleblue,fontWeight:700,letterSpacing:"-0.01em",marginBottom:14}}>Testing Coordination Process</h2>
          </div>
          <div className="reveal-scale" ref={bannerRef} style={{position:"relative",borderRadius:10,overflow:"hidden",marginBottom:36,height:170}}>
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=80&fit=crop" alt="process" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 40%"}}/>
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to right,rgba(14,128,128,0.88) 0%,rgba(30,136,200,0.60) 55%,rgba(235,245,251,0.25) 100%)"}}/>
            <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",padding:"0 40px"}}>
              <div>
                <div style={{fontFamily:T.poppins,fontSize:"clamp(1.1rem,2vw,1.4rem)",color:"#fff",fontWeight:700,marginBottom:6}}>From Lab Coordination to Certification</div>
                <p style={{fontFamily:T.sans,color:"rgba(255,255,255,0.78)",fontSize:13}}>We manage the entire testing journey so you can focus on your business.</p>
              </div>
            </div>
          </div>
          <div className="steps-grid" ref={stepsRef}>
            {steps.map((s,i)=>(
              <div key={s.step} className={`step-card reveal d${i%6}`}>
                <div style={{width:48,height:48,borderRadius:9,background:T.tealLight,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:20}}>{s.icon}</div>
                <div>
                  <div style={{fontFamily:T.sans,fontSize:10.5,fontWeight:700,color:T.teal,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:4}}>Step {s.step}</div>
                  <h3 style={{fontFamily:T.poppins,fontSize:19,color:T.slate,marginBottom:6,fontWeight:600}}>{s.title}</h3>
                  <p style={{fontFamily:T.sans,fontSize:15,color:T.paradark,lineHeight:1.7,margin:0,textAlign:"justify"}}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DOCUMENTS ══ */}
      <section style={{position:"relative",overflow:"hidden"}} className="sec">
        <img src="https://images.unsplash.com/photo-1568219557405-376e23e4f7cf?w=1600&q=80&fit=crop" alt="docs" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg,rgba(13,27,42,0.96) 0%,rgba(14,128,128,0.88) 100%)"}}/>
        <div style={{maxWidth:900,margin:"0 auto",position:"relative",zIndex:1}}>
          <div style={{textAlign:"center",marginBottom:48}} className="reveal" ref={docsTtlRef}>
            <div style={{display:"flex",justifyContent:"center"}}><div className="sl-row"><div className="sl-line" style={{background:"rgba(255,255,255,0.5)"}}/><span className="sl-text" style={{color:"rgba(255,255,255,0.75)"}}>What You Need</span></div></div>
            <h2 style={{fontFamily:T.poppins,fontSize:"clamp(2rem,3.2vw,2.9rem)",color:"#fff",fontWeight:700,letterSpacing:"-0.01em"}}>Documents Required</h2>
          </div>
          <div className="docs-grid" ref={docsRef}>
            {docs.map((doc,i)=>(
              <div key={i} className={`reveal d${i%4}`} style={{background:"rgba(255,255,255,0.07)",borderRadius:8,padding:"16px 20px",border:"1px solid rgba(255,255,255,0.12)",display:"flex",alignItems:"center",gap:12,backdropFilter:"blur(4px)",transition:"background 0.2s"}}
                onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,0.12)"}
                onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,0.07)"}>
                <div style={{width:28,height:28,borderRadius:"50%",background:T.teal,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><span style={{color:"#fff",fontSize:12,fontWeight:800}}>✓</span></div>
                <span style={{fontFamily:T.sans,fontSize:15,color:"rgba(255,255,255,0.85)"}}>{doc}</span>
              </div>
            ))}
          </div>
          <p style={{textAlign:"center",marginTop:24,fontFamily:T.sans,fontSize:13,color:"rgba(255,255,255,0.50)"}}>Not sure if you have everything?{" "}<button onClick={()=>router.push("/contact")} style={{color:T.teal,fontWeight:600,background:"none",border:"none",cursor:"pointer",fontFamily:T.poppins,fontSize:13}}>Contact us for a free checklist →</button></p>
        </div>
      </section>

      {/* ══ FAQS ══ */}
      <section className="sec" style={{background:T.cream}}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}} className="reveal" ref={faqTtlRef}>
            <div style={{display:"flex",justifyContent:"center"}}><div className="sl-row"><div className="sl-line"/><span className="sl-text">Common Questions</span></div></div>
            <h2 style={{fontFamily:T.poppins,fontSize:"clamp(2rem,3.2vw,2.9rem)",color:T.titleblue,fontWeight:700,letterSpacing:"-0.01em"}}>Testing FAQs</h2>
          </div>
          <div ref={faqRef}>
            {faqs.map((faq,i)=>(
              <div key={faq.q} className={`faq-card reveal d${i}`}>
                <div style={{display:"flex",gap:14,marginBottom:10}}>
                  <div style={{width:28,height:28,borderRadius:"50%",background:T.tealLight,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontWeight:700,fontSize:12,color:T.teal}}>Q</div>
                  <div style={{fontFamily:T.poppins,fontSize:17,color:"#000000",fontWeight:600,paddingTop:4}}>{faq.q}</div>
                </div>
                <div style={{display:"flex",gap:14}}>
                  <div style={{width:28,height:28,borderRadius:"50%",background:T.amberLight,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontWeight:700,fontSize:12,color:T.amber}}>A</div>
                  <div style={{fontFamily:T.sans,fontSize:15,color:T.paradark,lineHeight:1.8,paddingTop:4}}>{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="reveal" ref={ctaRef} style={{background:T.ctaBand,borderTop:`1px solid ${T.ctaBandBorder}`,borderBottom:`1px solid ${T.ctaBandBorder}`,padding:"80px clamp(16px,5vw,56px)"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div className="cta-split">
            <div>
              <div className="sl-row" style={{marginBottom:20}}><div className="sl-line"/><span className="sl-text">Start Today</span></div>
              <h2 style={{fontFamily:T.poppins,fontSize:"clamp(1.9rem,3.2vw,2.9rem)",color:T.titleblue,fontWeight:700,lineHeight:1.1,letterSpacing:"-0.01em",marginBottom:14}}>Start Your Product Testing Today</h2>
              <p style={{fontFamily:T.sans,color:T.paradark,fontSize:14.5,lineHeight:1.8}}>Don't let lab delays slow down your certification. Let our experts coordinate the entire testing process.<br/>Free consultation. Clear timeline. Transparent pricing.</p>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:12,flexShrink:0}}>
              <button onClick={()=>router.push("/contact")}
                style={{padding:"14px 36px",fontFamily:T.poppins,fontSize:14,fontWeight:600,border:"none",borderRadius:6,cursor:"pointer",background:T.orange,color:"#fff",whiteSpace:"nowrap",transition:"all 0.22s"}}
                onMouseEnter={e=>{e.currentTarget.style.background=T.teal;e.currentTarget.style.transform="translateY(-1px)";}}
                onMouseLeave={e=>{e.currentTarget.style.background=T.orange;e.currentTarget.style.transform="translateY(0)";}}>Get Free Consultation</button>
              <a href="tel:+919540190334"
                style={{padding:"13px 28px",border:`1.5px solid ${T.border}`,borderRadius:6,fontFamily:T.poppins,fontSize:14,fontWeight:500,color:T.slate,display:"flex",alignItems:"center",justifyContent:"center",gap:8,background:T.white,transition:"border-color 0.2s"}}
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