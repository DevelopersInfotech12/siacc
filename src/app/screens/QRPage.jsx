"use client";
import { useEffect, useRef, useState } from "react";

const T = {
  teal: "#1E88C8", tealDark: "#074D4D", tealMid: "#0E8080", titleblue: "#0a6daa",
  tealLight: "#EBF5F5", amber: "#C8780A", amberLight: "#FEF3DC",
  slate: "#0D1B2A", body: "#2D3748", muted: "#718096",
  border: "#E8E3DA", white: "#FFFFFF", cream: "#FAF8F4",
  orange: "#F97316",
  serif: "'Cormorant Garamond','Georgia',serif",
  sans: "'Outfit','system-ui',sans-serif",
};

// QR code generated via Google Charts API — points to /review
const QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent("https://siacc.co.in/review")}&color=074D4D&bgcolor=FAF8F4&margin=12&qzone=2`;

export default function QRPage() {
  const [copied, setCopied] = useState(false);
  const reviewLink = "https://siacc.co.in/review";

  const copyLink = () => {
    navigator.clipboard?.writeText(reviewLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ minHeight: "100vh", background: T.cream, fontFamily: T.sans, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 20px" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes pulse-ring { 0%{transform:scale(1);opacity:0.6} 100%{transform:scale(1.5);opacity:0} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }

        .qr-card {
          background: ${T.white};
          border-radius: 32px;
          padding: 48px 40px 40px;
          max-width: 420px;
          width: 100%;
          box-shadow: 0 32px 80px rgba(13,27,42,0.12), 0 8px 24px rgba(30,136,200,0.08);
          border: 1px solid ${T.border};
          animation: fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both;
          position: relative;
          overflow: hidden;
        }
        .qr-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, ${T.teal}, ${T.tealMid}, ${T.amber}, ${T.teal});
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }

        .brand-pill {
          display: inline-flex; align-items: center; gap: 8px;
          background: ${T.tealLight}; border: 1px solid #B2DADA;
          border-radius: 999px; padding: 6px 16px;
          margin-bottom: 28px;
        }
        .brand-dot { width: 8px; height: 8px; border-radius: 50%; background: ${T.teal}; }

        .qr-wrap {
          position: relative;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 28px;
          width: 200px; height: 200px;
        }
        .qr-wrap::before, .qr-wrap::after {
          content: '';
          position: absolute;
          border-radius: 20px;
          border: 2px solid ${T.tealLight};
        }
        .qr-wrap::before { inset: -8px; }
        .qr-wrap::after { inset: -16px; opacity: 0.5; }

        .qr-corner {
          position: absolute;
          width: 24px; height: 24px;
          border-color: ${T.teal};
          border-style: solid;
        }
        .qr-corner.tl { top: -20px; left: -20px; border-width: 3px 0 0 3px; border-radius: 4px 0 0 0; }
        .qr-corner.tr { top: -20px; right: -20px; border-width: 3px 3px 0 0; border-radius: 0 4px 0 0; }
        .qr-corner.bl { bottom: -20px; left: -20px; border-width: 0 0 3px 3px; border-radius: 0 0 0 4px; }
        .qr-corner.br { bottom: -20px; right: -20px; border-width: 0 3px 3px 0; border-radius: 0 0 4px 0; }

        .qr-img {
          width: 200px; height: 200px;
          border-radius: 16px;
          display: block;
        }

        .scan-hint {
          display: flex; align-items: center; gap: 8px;
          background: ${T.tealLight}; border-radius: 10px;
          padding: 10px 16px; margin-bottom: 24px;
        }
        .pulse-dot {
          position: relative; width: 10px; height: 10px; flex-shrink: 0;
        }
        .pulse-dot::before {
          content: '';
          position: absolute; inset: 0;
          border-radius: 50%; background: ${T.teal};
        }
        .pulse-dot::after {
          content: '';
          position: absolute; inset: 0;
          border-radius: 50%; border: 2px solid ${T.teal};
          animation: pulse-ring 1.4s ease-out infinite;
        }

        .divider { display: flex; align-items: center; gap: 12px; margin: 20px 0; }
        .divider-line { flex: 1; height: 1px; background: ${T.border}; }

        .link-box {
          background: ${T.cream};
          border: 1.5px solid ${T.border};
          border-radius: 10px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .link-box:hover { border-color: ${T.teal}; }

        .copy-btn {
          padding: 7px 16px;
          background: ${T.teal};
          color: #fff;
          border: none;
          border-radius: 7px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          font-family: ${T.sans};
          flex-shrink: 0;
          transition: background 0.2s;
          white-space: nowrap;
        }
        .copy-btn:hover { background: ${T.tealDark}; }

        .stars-display {
          display: flex; gap: 4px; justify-content: center; margin-bottom: 6px;
        }

        .print-btn {
          width: 100%;
          padding: 14px;
          background: ${T.orange};
          color: #fff;
          border: none;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          font-family: ${T.sans};
          margin-top: 20px;
          transition: all 0.2s;
          letter-spacing: 0.02em;
        }
        .print-btn:hover { background: #EA6A0A; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(249,115,22,0.30); }

        .stat-row {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 10px; margin-top: 20px;
        }
        .stat-item {
          background: ${T.cream};
          border: 1px solid ${T.border};
          border-radius: 10px;
          padding: 12px 8px;
          text-align: center;
        }

        @media print {
          body { background: white; }
          .no-print { display: none !important; }
          .qr-card { box-shadow: none; border: 2px solid ${T.border}; }
        }
      `}</style>

      {/* Main Card */}
      <div className="qr-card">

        {/* Brand pill */}
        <div style={{ textAlign: "center" }}>
          <div className="brand-pill" style={{ marginBottom: 8 }}>
            <span className="brand-dot" />
            <span style={{ fontSize: 11, fontWeight: 700, color: T.teal, letterSpacing: "0.12em", textTransform: "uppercase" }}>Star India Accreditation</span>
          </div>
        </div>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <h1 style={{ fontFamily: T.serif, fontSize: 26, color: T.slate, fontWeight: 700, lineHeight: 1.2, marginBottom: 6 }}>
            Share Your Experience
          </h1>
          <p style={{ fontSize: 13, color: T.muted, lineHeight: 1.6 }}>
            Scan to leave a review and help<br />others trust SIACC
          </p>
        </div>

        {/* Stars */}
        <div className="stars-display">
          {[1,2,3,4,5].map(i => (
            <span key={i} style={{ fontSize: 22, color: "#F59E0B" }}>★</span>
          ))}
        </div>
        <p style={{ textAlign: "center", fontSize: 12, color: T.muted, marginBottom: 24 }}>10,000+ Happy Clients</p>

        {/* QR Code */}
        <div style={{ position: "relative", display: "flex", justifyContent: "center", marginBottom: 20 }}>
          <div className="qr-wrap">
            <span className="qr-corner tl" />
            <span className="qr-corner tr" />
            <span className="qr-corner bl" />
            <span className="qr-corner br" />
            <img
              className="qr-img"
              src={QR_URL}
              alt="Scan to review SIACC"
            />
          </div>
        </div>

        {/* Scan hint */}
        <div className="scan-hint">
          <div className="pulse-dot" />
          <span style={{ fontSize: 12, color: T.tealMid, fontWeight: 500 }}>
            Point your camera at the QR code to open the review page
          </span>
        </div>

        {/* Divider */}
        <div className="divider">
          <div className="divider-line" />
          <span style={{ fontSize: 11, color: T.muted, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>or share link</span>
          <div className="divider-line" />
        </div>

        {/* Link box */}
        <div className="link-box" onClick={copyLink}>
          <span style={{ fontSize: 12, color: T.muted, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            siacc.co.in/review
          </span>
          <button className="copy-btn">
            {copied ? "✓ Copied!" : "Copy"}
          </button>
        </div>

        {/* Stats */}
        <div className="stat-row">
          {[
            { v: "30s", l: "Takes only" },
            { v: "Free", l: "Always" },
            { v: "AI", l: "Assisted" },
          ].map(s => (
            <div key={s.l} className="stat-item">
              <div style={{ fontFamily: T.serif, fontSize: 18, color: T.teal, fontWeight: 700 }}>{s.v}</div>
              <div style={{ fontSize: 11, color: T.muted, marginTop: 2 }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Print button */}
        <button className="print-btn no-print" onClick={() => window.print()}>
          🖨️ Print This QR Card
        </button>

        {/* Footer */}
        <p style={{ textAlign: "center", fontSize: 11, color: T.muted, marginTop: 16 }}>
          siacc.co.in · info@siacc.co.in · +91-9540190334
        </p>
      </div>

      {/* Admin note */}
      <div className="no-print" style={{ marginTop: 24, maxWidth: 420, width: "100%", background: T.tealLight, border: `1px solid #B2DADA`, borderRadius: 12, padding: "14px 18px", display: "flex", gap: 10, alignItems: "flex-start" }}>
        <span style={{ fontSize: 18, flexShrink: 0 }}>💡</span>
        <div>
          <div style={{ fontSize: 13, color: T.slate, fontWeight: 600, marginBottom: 3 }}>Display tip</div>
          <div style={{ fontSize: 12, color: T.muted, lineHeight: 1.6 }}>Print this card and place it on your office reception desk, visiting cards, or invoice footers for maximum scan rate.</div>
        </div>
      </div>
    </div>
  );
}