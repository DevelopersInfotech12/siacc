import Link from "next/link";

const C = {
  forest: "#1B4332",
  forestMid: "#2D6A4F",
  forestLight: "#40916C",
  mint: "#95D5B2",
  mintLight: "#D8F3DC",
  white: "#ffffff",
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
  { name: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer style={{ fontFamily: C.sans, backgroundColor: C.forest }}>

      {/* CTA Band */}
      <div style={{ backgroundColor: C.forestMid, padding: "48px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div>
            <h3 style={{ fontFamily: C.serif, fontSize: 26, color: C.white, marginBottom: 6, fontWeight: 700 }}>Ready to get certified?</h3>
            <p style={{ color: C.mint, fontSize: 14, margin: 0 }}>Talk to our experts today — free consultation, no obligations.</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
            <Link href="/contact"
              style={{ padding: "12px 24px", backgroundColor: C.mint, color: C.forest, fontWeight: 700, borderRadius: 10, textDecoration: "none", fontSize: 14 }}>
              Get Free Consultation
            </Link>
            <a href="tel:+919876543210"
              style={{ padding: "12px 24px", border: `1.5px solid ${C.mint}`, color: C.mint, borderRadius: 10, textDecoration: "none", fontSize: 14 }}>
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 24px 40px", display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr 1.8fr", gap: 48 }}>

        {/* Brand column */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, backgroundColor: C.mint, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ color: C.forest, fontFamily: C.serif, fontWeight: 700, fontSize: 20 }}>C</span>
            </div>
            <div>
              <div style={{ fontFamily: C.serif, fontWeight: 700, color: C.white, fontSize: 20, lineHeight: 1.1 }}>Siacc</div>
              <div style={{ fontSize: 9, color: C.mint, letterSpacing: "0.18em", textTransform: "uppercase" }}>India</div>
            </div>
          </div>
          <p style={{ fontSize: 14, color: C.mint, lineHeight: 1.75, marginBottom: 24, maxWidth: 260 }}>
            India's trusted compliance & certification consultancy. 12+ years, 10,000+ clients, 98% success rate.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { icon: "📞", text: "+91 98765 43210", href: "tel:+919876543210" },
              { icon: "✉", text: "info@Siacc.in", href: "mailto:info@Siacc.in" },
            ].map((item) => (
              <a key={item.text} href={item.href}
                style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: C.mint, textDecoration: "none" }}>
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </a>
            ))}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: C.mint }}>
              <span>📍</span>
              <span>12, Connaught Place,<br />New Delhi – 110001</span>
            </div>
          </div>
        </div>

        {/* Services column */}
        <div>
          <h4 style={{ fontFamily: C.serif, fontSize: 18, color: C.white, marginBottom: 20, fontWeight: 600 }}>Our Services</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {footerServices.map((s) => (
              <Link key={s.name} href={s.href}
                style={{ fontSize: 13, color: C.mint, textDecoration: "none", display: "block" }}
                onMouseEnter={(e) => e.currentTarget.style.color = C.white}
                onMouseLeave={(e) => e.currentTarget.style.color = C.mint}
              >→ {s.name}</Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontFamily: C.serif, fontSize: 18, color: C.white, marginBottom: 20, fontWeight: 600 }}>Quick Links</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {quickLinks.map((l) => (
              <Link key={l.name} href={l.href}
                style={{ fontSize: 13, color: C.mint, textDecoration: "none", display: "block" }}
                onMouseEnter={(e) => e.currentTarget.style.color = C.white}
                onMouseLeave={(e) => e.currentTarget.style.color = C.mint}
              >→ {l.name}</Link>
            ))}
          </div>
        </div>

        {/* Newsletter + Badges */}
        <div>
          <h4 style={{ fontFamily: C.serif, fontSize: 18, color: C.white, marginBottom: 12, fontWeight: 600 }}>Stay Updated</h4>
          <p style={{ fontSize: 13, color: C.mint, marginBottom: 16, lineHeight: 1.65 }}>
            Get regulatory updates, QCO notifications & compliance alerts.
          </p>
          <div style={{ display: "flex", gap: 8, marginBottom: 28 }}>
            <input
              type="email"
              placeholder="Your email"
              style={{ flex: 1, padding: "10px 14px", fontSize: 13, backgroundColor: C.forestMid, border: `1px solid ${C.forestLight}`, borderRadius: 8, color: C.white, outline: "none", fontFamily: C.sans }}
            />
            <button style={{ padding: "10px 16px", backgroundColor: C.mint, color: C.forest, fontWeight: 700, borderRadius: 8, border: "none", cursor: "pointer", fontSize: 14 }}>→</button>
          </div>

          <h4 style={{ fontFamily: C.serif, fontSize: 14, color: C.white, marginBottom: 12, fontWeight: 600 }}>Certified & Recognized By</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["BIS", "EPR", "WPC", "TEC", "ISO", "DPIIT"].map((badge) => (
              <span key={badge}
                style={{ padding: "4px 12px", fontSize: 11, fontWeight: 600, border: `1px solid ${C.forestLight}`, color: C.mint, borderRadius: 999 }}>
                {badge}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: `1px solid ${C.forestMid}`, padding: "20px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <span style={{ fontSize: 12, color: C.forestLight, textAlign: "center" }}>
            © {new Date().getFullYear()} Siacc India. All rights reserved. | Developed by{" "}
            <a href="https://developersinfotech.in/" target="_blank" rel="noopener noreferrer" className="dev-link" style={{ color: C.mint, textDecoration: "none", fontWeight: 600 }}>Developers Infotech Pvt Ltd</a>
          </span>
        </div>
      </div>

    </footer>
  );
}