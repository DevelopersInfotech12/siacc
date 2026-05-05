"use client";
import { useState } from "react";

const T = {
  teal:"#1E88C8",tealDark:"#074D4D",tealMid:"#0E8080",titleblue:"#0a6daa",
  tealLight:"#EBF5F5",amber:"#C8780A",amberLight:"#FEF3DC",
  slate:"#0D1B2A",body:"#2D3748",muted:"#718096",
  border:"#E8E3DA",white:"#FFFFFF",cream:"#FAF8F4",
  orange:"#F97316",
  serif:"'Cormorant Garamond','Georgia',serif",
  sans:"'Outfit','system-ui',sans-serif",
};

// ── Our AI review page QR (points to /review)
const AI_QR = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent("https://siacc.vercel.app/review")}&color=074D4D&bgcolor=FAF8F4&margin=10&qzone=2`;

// ── Direct Google review link
const GOOGLE_REVIEW_URL = "https://www.google.com/maps?cid=14804604414707242469";
const GOOGLE_QR = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(GOOGLE_REVIEW_URL)}&color=1a73e8&bgcolor=FAF8F4&margin=10&qzone=2`;
// ↑ This generates a QR for Google review URL
// OR replace GOOGLE_QR with "/google-review-qr.png" if you downloaded
// the official one from business.google.com → Ask for reviews → Download

export default function QRPage() {
  const [copied, setCopied] = useState(false);

  const copyLink = async (link) => {
    await navigator.clipboard?.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{minHeight:"100vh",background:T.cream,fontFamily:T.sans,padding:"40px 16px",display:"flex",flexDirection:"column",alignItems:"center"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}

        @keyframes fadeUp   {from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes shimmer  {0%{background-position:-300% 0}100%{background-position:300% 0}}
        @keyframes pulse    {0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}
        @keyframes spin-slow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}

        .page-card {
          background:${T.white};border-radius:28px;
          max-width:520px;width:100%;
          box-shadow:0 24px 64px rgba(13,27,42,0.10),0 4px 16px rgba(30,136,200,0.06);
          border:1px solid ${T.border};
          animation:fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) both;
          overflow:hidden;
        }

        /* Top accent bar */
        .top-bar {
          height:4px;
          background:linear-gradient(90deg,${T.teal},${T.tealMid},${T.amber},${T.orange},${T.teal});
          background-size:300% 100%;
          animation:shimmer 4s linear infinite;
        }

        /* QR cards */
        .qr-grid {
          display:grid;grid-template-columns:1fr 1fr;gap:20px;
          padding:28px 28px 0;
        }
        @media(max-width:480px){.qr-grid{grid-template-columns:1fr;padding:20px 16px 0;}}

        .qr-card {
          border-radius:20px;padding:22px 18px;
          border:2px solid ${T.border};
          transition:all 0.25s;
          text-align:center;
          cursor:default;
          position:relative;
          overflow:hidden;
        }
        .qr-card.ai-card {
          border-color:#B2DADA;background:${T.tealLight};
        }
        .qr-card.google-card {
          border-color:#BFDBFE;background:#EFF6FF;
        }

        /* QR image wrapper with corner markers */
        .qr-wrap {
          position:relative;display:inline-block;
          margin-bottom:14px;
        }
        .qr-wrap img {
          width:130px;height:130px;border-radius:12px;display:block;
        }
        .corner {
          position:absolute;width:16px;height:16px;
          border-style:solid;
        }
        .corner.tl{top:-4px;left:-4px;border-width:2.5px 0 0 2.5px;border-radius:4px 0 0 0;}
        .corner.tr{top:-4px;right:-4px;border-width:2.5px 2.5px 0 0;border-radius:0 4px 0 0;}
        .corner.bl{bottom:-4px;left:-4px;border-width:0 0 2.5px 2.5px;border-radius:0 0 0 4px;}
        .corner.br{bottom:-4px;right:-4px;border-width:0 2.5px 2.5px 0;border-radius:0 0 4px 0;}

        /* Badge */
        .badge {
          display:inline-flex;align-items:center;gap:5px;
          border-radius:999px;padding:4px 12px;
          font-size:10px;font-weight:700;letter-spacing:0.06em;
          margin-bottom:10px;
        }
        .badge-ai    {background:${T.teal};color:#fff;}
        .badge-google{background:#1a73e8;color:#fff;}

        /* Feature pills */
        .feature-pill {
          display:inline-flex;align-items:center;gap:5px;
          font-size:11px;font-weight:500;
          padding:4px 10px;border-radius:999px;
          margin:3px;
        }
        .pill-ai    {background:rgba(13,110,110,0.12);color:${T.tealDark};}
        .pill-google{background:rgba(26,115,232,0.10);color:#1a73e8;}

        /* OR divider */
        .or-divider {
          display:flex;align-items:center;gap:0;
          flex-direction:column;
          justify-content:center;
        }
        .or-line{flex:1;width:1px;background:${T.border};}
        .or-text{
          width:32px;height:32px;border-radius:50%;
          background:${T.white};border:1.5px solid ${T.border};
          display:flex;align-items:center;justify-content:center;
          font-size:11px;font-weight:700;color:${T.muted};
          flex-shrink:0;margin:8px 0;
        }

        /* Bottom section */
        .bottom-section{padding:24px 28px 32px;}
        @media(max-width:480px){.bottom-section{padding:20px 16px 28px;}}

        /* Link row */
        .link-row {
          display:flex;align-items:center;gap:10px;
          background:${T.cream};border:1.5px solid ${T.border};
          border-radius:10px;padding:11px 14px;
          margin-bottom:12px;cursor:pointer;transition:border-color 0.2s;
        }
        .link-row:hover{border-color:${T.teal};}

        /* Buttons */
        .btn-print{
          width:100%;padding:14px;background:${T.orange};color:#fff;
          border:none;border-radius:12px;font-size:14px;font-weight:700;
          cursor:pointer;font-family:${T.sans};transition:all 0.2s;
          display:flex;align-items:center;justify-content:center;gap:8px;
          margin-top:16px;
        }
        .btn-print:hover{background:#EA6A0A;transform:translateY(-1px);box-shadow:0 6px 20px rgba(249,115,22,0.30);}

        /* How it works */
        .how-row{display:flex;gap:10px;align-items:flex-start;padding:10px 0;border-bottom:1px solid ${T.border};}
        .how-row:last-child{border-bottom:none;}
        .how-num{width:26px;height:26px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;color:#fff;flex-shrink:0;}

        @media print {
          body{background:white;}
          .no-print{display:none!important;}
          .page-card{box-shadow:none;border:2px solid ${T.border};}
        }
      `}</style>

      <div className="page-card">
        {/* Shimmer top bar */}
        <div className="top-bar"/>

        {/* Header */}
        <div style={{padding:"28px 28px 20px",textAlign:"center"}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:8,background:T.tealLight,border:`1px solid #B2DADA`,borderRadius:999,padding:"5px 14px",marginBottom:16}}>
            <span style={{width:7,height:7,borderRadius:"50%",background:T.teal,display:"inline-block"}}/>
            <span style={{fontSize:11,fontWeight:700,color:T.teal,letterSpacing:"0.1em",textTransform:"uppercase"}}>Star India Accreditation</span>
          </div>
          <h1 style={{fontFamily:T.serif,fontSize:"clamp(20px,4vw,26px)",color:T.slate,fontWeight:700,marginBottom:6}}>
            Share Your Experience ⭐
          </h1>
          <p style={{fontSize:13,color:T.muted,lineHeight:1.6}}>
            Choose how you'd like to leave a review
          </p>
        </div>

        {/* ── TWO QR CODES ── */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 36px 1fr",gap:0,padding:"0 24px",alignItems:"stretch"}}>

          {/* LEFT — AI Review Assistant */}
          <div className="qr-card ai-card">
            <div className="badge badge-ai">✨ AI Assisted</div>
            <div className="qr-wrap">
              <span className="corner tl" style={{borderColor:T.teal}}/>
              <span className="corner tr" style={{borderColor:T.teal}}/>
              <span className="corner bl" style={{borderColor:T.teal}}/>
              <span className="corner br" style={{borderColor:T.teal}}/>
              <img src={AI_QR} alt="AI Review QR" />
            </div>
            <div style={{fontFamily:T.serif,fontSize:15,color:T.slate,fontWeight:700,marginBottom:6,lineHeight:1.3}}>
              AI Helps You Write
            </div>
            <p style={{fontSize:11,color:T.muted,lineHeight:1.6,marginBottom:10}}>
              AI generates review suggestions based on your rating
            </p>
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
              {["✨ AI suggestions","⭐ Pick & edit","📋 Auto-copy"].map(f=>(
                <span key={f} className="feature-pill pill-ai">{f}</span>
              ))}
            </div>
          </div>

          {/* OR divider */}
          <div className="or-divider">
            <div className="or-line"/>
            <div className="or-text">OR</div>
            <div className="or-line"/>
          </div>

          {/* RIGHT — Google Direct */}
          <div className="qr-card google-card">
            <div className="badge badge-google">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#fff"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#fff"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#fff"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#fff"/>
              </svg>
              Google Direct
            </div>
            <div className="qr-wrap">
              <span className="corner tl" style={{borderColor:"#1a73e8"}}/>
              <span className="corner tr" style={{borderColor:"#1a73e8"}}/>
              <span className="corner bl" style={{borderColor:"#1a73e8"}}/>
              <span className="corner br" style={{borderColor:"#1a73e8"}}/>
              {/* 
                If you downloaded the official QR from Google Business Profile:
                Replace the img src below with: src="/google-review-qr.png"
                Make sure you put the file in your public/ folder first!
              */}
              <img src={GOOGLE_QR} alt="Google Review QR" />
            </div>
            <div style={{fontFamily:T.serif,fontSize:15,color:T.slate,fontWeight:700,marginBottom:6,lineHeight:1.3}}>
              Review Directly
            </div>
            <p style={{fontSize:11,color:T.muted,lineHeight:1.6,marginBottom:10}}>
              Opens Google review box directly — type and post
            </p>
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
              {["🚀 Instant","📝 Type freely","✅ Direct post"].map(f=>(
                <span key={f} className="feature-pill pill-google">{f}</span>
              ))}
            </div>
          </div>

        </div>

        {/* ── HOW IT WORKS ── */}
        <div className="bottom-section">

          {/* How it works */}
          <div style={{background:T.cream,border:`1px solid ${T.border}`,borderRadius:14,padding:"16px 18px",marginBottom:20}}>
            <div style={{fontSize:11,fontWeight:700,color:T.slate,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:12}}>How it works</div>

            <div className="how-row">
              <div className="how-num" style={{background:T.teal}}>1</div>
              <div>
                <div style={{fontSize:13,fontWeight:600,color:T.slate,marginBottom:2}}>Scan Left QR — AI Assisted</div>
                <div style={{fontSize:12,color:T.muted,lineHeight:1.55}}>AI generates 9 review suggestions → pick one → it gets copied → paste on Google</div>
              </div>
            </div>

            <div className="how-row">
              <div className="how-num" style={{background:"#1a73e8"}}>2</div>
              <div>
                <div style={{fontSize:13,fontWeight:600,color:T.slate,marginBottom:2}}>Scan Right QR — Direct Google</div>
                <div style={{fontSize:12,color:T.muted,lineHeight:1.55}}>Opens Google review page directly → tap stars → type your own review → Post</div>
              </div>
            </div>

          </div>

          {/* Stars */}
          <div style={{display:"flex",justifyContent:"center",gap:4,marginBottom:6}}>
            {[1,2,3,4,5].map(s=><span key={s} style={{fontSize:20,color:"#F59E0B"}}>★</span>)}
          </div>
          <p style={{textAlign:"center",fontSize:12,color:T.muted,marginBottom:20}}>
            10,000+ Happy Clients · 5.0 Rating on Google
          </p>

          {/* Copy links row */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:16}}>
            <div className="link-row" onClick={() => copyLink("https://siacc.vercel.app/review")} style={{flexDirection:"column",alignItems:"flex-start",gap:4}}>
              <div style={{display:"flex",alignItems:"center",gap:6,width:"100%"}}>
                <span style={{fontSize:14}}>✨</span>
                <span style={{fontSize:11,fontWeight:700,color:T.teal}}>AI Review Link</span>
                <span style={{fontSize:10,color:T.muted,marginLeft:"auto"}}>Copy</span>
              </div>
              <span style={{fontSize:10,color:T.muted,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"100%"}}>siacc.vercel.app/review</span>
            </div>
            <div className="link-row" onClick={() => copyLink(GOOGLE_REVIEW_URL)} style={{flexDirection:"column",alignItems:"flex-start",gap:4}}>
              <div style={{display:"flex",alignItems:"center",gap:6,width:"100%"}}>
                <span style={{fontSize:14}}>🌐</span>
                <span style={{fontSize:11,fontWeight:700,color:"#1a73e8"}}>Google Review</span>
                <span style={{fontSize:10,color:T.muted,marginLeft:"auto"}}>Copy</span>
              </div>
              <span style={{fontSize:10,color:T.muted,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"100%"}}>Google Maps Link</span>
            </div>
          </div>

          {copied && (
            <div style={{textAlign:"center",fontSize:12,color:T.teal,fontWeight:600,marginBottom:8,animation:"fadeUp 0.3s ease both"}}>
              ✅ Link copied to clipboard!
            </div>
          )}

          {/* Print button */}
          <button className="btn-print no-print" onClick={() => window.print()}>
            🖨️ Print This QR Card
          </button>

          {/* Footer */}
          <p style={{textAlign:"center",fontSize:11,color:T.muted,marginTop:18}}>
            siacc.vercel.app · info@siacc.co.in · +91-9540190334
          </p>

        </div>
      </div>

      {/* Tip card */}
      <div className="no-print" style={{marginTop:20,maxWidth:520,width:"100%",background:T.tealLight,border:`1px solid #B2DADA`,borderRadius:14,padding:"14px 18px",display:"flex",gap:10,alignItems:"flex-start"}}>
        <span style={{fontSize:18,flexShrink:0}}>💡</span>
        <div>
          <div style={{fontSize:13,color:T.slate,fontWeight:600,marginBottom:3}}>Pro tip — Use Google's Official QR</div>
          <div style={{fontSize:12,color:T.muted,lineHeight:1.65}}>
            Go to <strong>business.google.com</strong> → Ask for reviews → Download QR.<br/>
            Replace <code style={{background:"rgba(0,0,0,0.06)",padding:"1px 5px",borderRadius:4,fontSize:11}}>GOOGLE_QR</code> in QRPage.jsx with <code style={{background:"rgba(0,0,0,0.06)",padding:"1px 5px",borderRadius:4,fontSize:11}}>/google-review-qr.png</code> after placing the file in <code style={{background:"rgba(0,0,0,0.06)",padding:"1px 5px",borderRadius:4,fontSize:11}}>public/</code>
          </div>
        </div>
      </div>
    </div>
  );
}