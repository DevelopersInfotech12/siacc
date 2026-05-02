import Link from "next/link";

const C = {
  primary: "#F97316",
  primaryLight: "#FFF3E8",
  navy: "#0C2340",
  bodyText: "#374151",
  mutedText: "#6B7280",
  border: "#E5E7EB",
  white: "#FFFFFF",
  offWhite: "#F9FAFB",
  serif: "'Playfair Display', Georgia, serif",
  sans: "'DM Sans', system-ui, sans-serif",
};

const footerServices = [
  { name: "BIS Certification", href: "/bis" },
  { name: "EPR Registration", href: "/epr" },
  { name: "WPC-ETA Approval", href: "/wpc" },
  { name: "TEC / MTCTE", href: "/tec" },
  { name: "BEE Registration", href: "/bee" },
  { name: "LMPC Registration", href: "/lmpc" },
  { name: "ISO Certification", href: "/iso" },
  { name: "CDSCO / Drug License", href: "/cdsco" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "All Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/career" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ fontFamily: C.sans, backgroundColor: C.navy }}>

      <style>{`
        * { box-sizing: border-box; }

        /* CTA band */
        .footer-cta-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
        }
        .footer-cta-btns {
          display: flex;
          gap: 12px;
          flex-shrink: 0;
          flex-wrap: wrap;
        }
        @media (max-width: 640px) {
          .footer-cta-inner { flex-direction: column; align-items: flex-start; }
          .footer-cta-btns { width: 100%; }
          .footer-cta-btns a { flex: 1; text-align: center; }
        }

        /* Main grid */
        .footer-main-grid {
          max-width: 1280px;
          margin: 0 auto;
          padding: 56px 24px 40px;
          display: grid;
          grid-template-columns: 2fr 1.5fr 1fr 1.8fr;
          gap: 48px;
        }
        @media (max-width: 1024px) {
          .footer-main-grid {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }
        }
        @media (max-width: 560px) {
          .footer-main-grid {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 40px 16px 32px;
          }
        }

        /* Newsletter email row */
        .footer-email-row {
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
        }
        @media (max-width: 400px) {
          .footer-email-row { flex-direction: column; }
          .footer-email-row button { width: 100%; padding: 10px; }
        }

        /* Bottom bar */
        .footer-bottom-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          text-align: center;
        }

        /* CTA band padding */
        .footer-cta-pad {
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding: 48px 24px;
        }
        @media (max-width: 560px) {
          .footer-cta-pad { padding: 32px 16px; }
        }

        /* Bottom bar padding */
        .footer-bottom-pad {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 18px 24px;
        }
        @media (max-width: 560px) {
          .footer-bottom-pad { padding: 16px; }
        }
      `}</style>

      {/* ── CTA Band ── */}
      <div className="footer-cta-pad">
        <div className="footer-cta-inner">
          <div>
            <h3 style={{ fontFamily: C.serif, fontSize: "clamp(18px, 3vw, 26px)", color: "#fff", marginBottom: 6, fontWeight: 800 }}>
              Ready to get certified?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, margin: 0 }}>
              Talk to our experts today — free consultation, no obligations.
            </p>
          </div>
          <div className="footer-cta-btns">
            <Link href="/contact"
              style={{ padding: "12px 28px", backgroundColor: C.primary, color: "#fff", fontWeight: 700, borderRadius: 10, textDecoration: "none", fontSize: 14, boxShadow: "0 4px 12px rgba(249,115,22,0.35)", display: "inline-block" }}>
              Get Free Consultation
            </Link>
            <a href="tel:+91-9540190334"
              style={{ padding: "12px 24px", border: "1.5px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.85)", borderRadius: 10, textDecoration: "none", fontSize: 14, display: "inline-block" }}>
              📞 Call Now
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="footer-main-grid">

        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: C.primary, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ color: "#fff", fontFamily: C.serif, fontWeight: 800, fontSize: 20 }}>S</span>
            </div>
            <div>
              <div style={{ fontFamily: C.serif, fontWeight: 800, color: "#fff", fontSize: 20, lineHeight: 1.1 }}>SIACC</div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Star India Accreditation</div>
            </div>
          </div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, marginBottom: 24, maxWidth: 260 }}>
            India's trusted compliance & certification consultancy. 12+ years, 10,000+ clients, 98% success rate.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <a href="tel:+91-9540190334"
              style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.65)", textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.color = C.primary}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.65)"}>
              <span>📞</span><span>+91-9540190334</span>
            </a>
            <a href="mailto:info@siacc.co.in"
              style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.65)", textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.color = C.primary}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.65)"}>
              <span>✉</span><span>info@siacc.co.in</span>
            </a>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
              <span style={{ flexShrink: 0 }}>📍</span>
              <span>House No. 211, Ground Floor, Pocket 9,<br />North West New Delhi – 110086</span>
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 style={{ fontFamily: C.serif, fontSize: 17, color: "#fff", marginBottom: 20, fontWeight: 700 }}>Our Services</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {footerServices.map(s => (
              <Link key={s.name} href={s.href}
                style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
                onMouseEnter={e => e.currentTarget.style.color = C.primary}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}>
                → {s.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontFamily: C.serif, fontSize: 17, color: "#fff", marginBottom: 20, fontWeight: 700 }}>Quick Links</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {quickLinks.map(l => (
              <Link key={l.name} href={l.href}
                style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
                onMouseEnter={e => e.currentTarget.style.color = C.primary}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}>
                → {l.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 style={{ fontFamily: C.serif, fontSize: 17, color: "#fff", marginBottom: 12, fontWeight: 700 }}>Stay Updated</h4>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 16, lineHeight: 1.65 }}>
            Get regulatory updates, QCO notifications & compliance alerts.
          </p>
          <div className="footer-email-row">
            <input
              type="email"
              placeholder="Your email"
              style={{ flex: 1, padding: "10px 14px", fontSize: 13, backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, color: "#fff", outline: "none", fontFamily: C.sans, minWidth: 0 }}
            />
            <button
              style={{ padding: "10px 16px", backgroundColor: C.primary, color: "#fff", fontWeight: 700, borderRadius: 8, border: "none", cursor: "pointer", fontSize: 14, flexShrink: 0 }}>
              →
            </button>
          </div>
          <h4 style={{ fontFamily: C.serif, fontSize: 13, color: "#fff", marginBottom: 10, fontWeight: 700 }}>Certified & Recognized By</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["BIS", "EPR", "WPC", "TEC", "ISO", "DPIIT"].map(badge => (
              <span key={badge}
                style={{ padding: "4px 12px", fontSize: 11, fontWeight: 700, border: "1px solid rgba(249,115,22,0.4)", color: C.primary, borderRadius: 999, backgroundColor: "rgba(249,115,22,0.08)" }}>
                {badge}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* ── Bottom Bar ── */}
      <div className="footer-bottom-pad">
        <div className="footer-bottom-inner">
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
            © {new Date().getFullYear()} SIACC — Star India Accreditation. All rights reserved.
          </span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>|</span>
          <a
            href="https://developersinfotech.in/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: C.primary, textDecoration: "none", fontWeight: 600, fontSize: 12 }}>
            Developed by Developers Infotech Pvt Ltd
          </a>
        </div>
      </div>

    </footer>
  );
}