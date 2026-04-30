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
  { name: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer style={{ fontFamily: C.sans, backgroundColor: C.navy }}>

      {/* CTA Band */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "48px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div>
            <h3 style={{ fontFamily: C.serif, fontSize: 26, color: "#fff", marginBottom: 6, fontWeight: 800 }}>Ready to get certified?</h3>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>Talk to our experts today — free consultation, no obligations.</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
            <Link href="/contact" style={{ padding: "12px 28px", backgroundColor: C.primary, color: "#fff", fontWeight: 700, borderRadius: 10, textDecoration: "none", fontSize: 14, boxShadow: "0 4px 12px rgba(249,115,22,0.35)" }}>
              Get Free Consultation
            </Link>
            <a href="tel:+919876543210" style={{ padding: "12px 24px", border: "1.5px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.85)", borderRadius: 10, textDecoration: "none", fontSize: 14 }}>
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "56px 24px 40px", display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr 1.8fr", gap: 48 }}>

        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: C.primary, display: "flex", alignItems: "center", justifyContent: "center" }}>
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
            {[{ icon: "📞", text: "+91 98765 43210", href: "tel:+919876543210" }, { icon: "✉", text: "info@siacc.co.in", href: "mailto:info@siacc.co.in" }].map((item) => (
              <a key={item.text} href={item.href} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.65)", textDecoration: "none" }}
                onMouseEnter={(e) => e.currentTarget.style.color = C.primary}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.65)"}
              >
                <span>{item.icon}</span><span>{item.text}</span>
              </a>
            ))}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
              <span>📍</span><span>12, Connaught Place,<br />New Delhi – 110001</span>
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 style={{ fontFamily: C.serif, fontSize: 17, color: "#fff", marginBottom: 20, fontWeight: 700 }}>Our Services</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {footerServices.map((s) => (
              <Link key={s.name} href={s.href} style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
                onMouseEnter={(e) => e.currentTarget.style.color = C.primary}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
              >→ {s.name}</Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontFamily: C.serif, fontSize: 17, color: "#fff", marginBottom: 20, fontWeight: 700 }}>Quick Links</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {quickLinks.map((l) => (
              <Link key={l.name} href={l.href} style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
                onMouseEnter={(e) => e.currentTarget.style.color = C.primary}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
              >→ {l.name}</Link>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 style={{ fontFamily: C.serif, fontSize: 17, color: "#fff", marginBottom: 12, fontWeight: 700 }}>Stay Updated</h4>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 16, lineHeight: 1.65 }}>
            Get regulatory updates, QCO notifications & compliance alerts.
          </p>
          <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
            <input type="email" placeholder="Your email"
              style={{ flex: 1, padding: "10px 14px", fontSize: 13, backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, color: "#fff", outline: "none", fontFamily: C.sans }} />
            <button style={{ padding: "10px 16px", backgroundColor: C.primary, color: "#fff", fontWeight: 700, borderRadius: 8, border: "none", cursor: "pointer", fontSize: 14 }}>→</button>
          </div>
          <h4 style={{ fontFamily: C.serif, fontSize: 13, color: "#fff", marginBottom: 10, fontWeight: 700 }}>Certified & Recognized By</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["BIS", "EPR", "WPC", "TEC", "ISO", "DPIIT"].map((badge) => (
              <span key={badge} style={{ padding: "4px 12px", fontSize: 11, fontWeight: 700, border: "1px solid rgba(249,115,22,0.4)", color: C.primary, borderRadius: 999, backgroundColor: "rgba(249,115,22,0.08)" }}>{badge}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "18px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>© {new Date().getFullYear()} SIACC — Star India Accreditation. All rights reserved.</span>
          <div style={{ display: "flex", gap: 20 }}>
            <Link href="/privacy" style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Privacy Policy</Link>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
            <Link href="/contact" style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}