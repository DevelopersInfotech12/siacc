"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

const C = {
  primary: "#F97316",
  primaryDark: "#EA6A0A",
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

const serviceDropdown = [
  { name: "BIS Certification", href: "/bis" },
  { name: "EPR Registration", href: "/epr" },
  { name: "WPC-ETA Approval", href: "/wpc" },
  { name: "TEC / MTCTE", href: "/tec" },
  { name: "BEE Registration", href: "/bee" },
  { name: "LMPC Registration", href: "/lmpc" },
  { name: "ISO Certification", href: "/iso" },
  { name: "CDSCO / Drug License", href: "/cdsco" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/career" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [mobileServices, setMobileServices] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setDropdown(null);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const go = (href) => { setDropdown(null); setMobileOpen(false); router.push(href); };

  return (
    <div style={{ fontFamily: C.sans, position: "sticky", top: 0, zIndex: 1000 }}>
      <style>{`
        .desktop-top-bar, .desktop-nav, .desktop-cta { }
        .mobile-burger { display: none !important; }
        @media (max-width: 1024px) {
          .desktop-top-bar { display: none !important; }
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-burger { display: flex !important; }
        }
      `}</style>

      {/* Top info bar */}
      <div className="desktop-top-bar" style={{ backgroundColor: C.navy, color: "rgba(255,255,255,0.75)", fontSize: 12, padding: "7px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", gap: 24 }}>
          <span>📞 +91 98765 43210</span>
          <span>✉ info@siacc.co.in</span>
        </div>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <span>Mon–Sat: 9:00 AM – 6:00 PM</span>
          <button onClick={() => go("/contact")} style={{ color: C.primary, background: "none", border: "none", cursor: "pointer", fontWeight: 600, fontSize: 12, fontFamily: C.sans }}>
            Free Consultation →
          </button>
        </div>
      </div>

      {/* Main nav */}
      <nav style={{ backgroundColor: C.white, borderBottom: `1px solid ${C.border}`, boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "none", transition: "box-shadow 0.3s ease" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>

          {/* Logo */}
          <button onClick={() => go("/")} style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer", flexShrink: 0 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: C.primary, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontFamily: C.serif, fontWeight: 800, fontSize: 20 }}>S</span>
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontFamily: C.serif, fontWeight: 800, color: C.navy, fontSize: 20, lineHeight: 1.1 }}>SIACC</div>
              <div style={{ fontSize: 9, color: C.mutedText, letterSpacing: "0.18em", textTransform: "uppercase", lineHeight: 1.2 }}>Star India Accreditation</div>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 2 }}>
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.name} ref={dropdownRef} style={{ position: "relative" }}>
                  <button
                    onClick={(e) => { e.preventDefault(); setDropdown(dropdown === link.name ? null : link.name); }}
                    style={{ display: "flex", alignItems: "center", gap: 4, padding: "8px 14px", fontSize: 14, fontWeight: 500, color: C.bodyText, background: "none", border: "none", cursor: "pointer", borderRadius: 8, fontFamily: C.sans }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.primaryLight; e.currentTarget.style.color = C.primary; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = C.bodyText; }}
                  >
                    {link.name}
                    <ChevronDown size={14} style={{ color: C.primary, transform: dropdown === link.name ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }} />
                  </button>
                  {dropdown === link.name && (
                    <div style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: 8, width: 220, backgroundColor: C.white, borderRadius: 14, boxShadow: "0 16px 48px rgba(0,0,0,0.12)", border: `1px solid ${C.border}`, borderTop: `3px solid ${C.primary}`, padding: "8px 0", zIndex: 200 }}>
                      {serviceDropdown.map((d) => (
                        <button key={d.name} onClick={() => go(d.href)}
                          style={{ display: "block", width: "100%", textAlign: "left", padding: "10px 20px", fontSize: 13, color: C.bodyText, background: "transparent", border: "none", cursor: "pointer", fontFamily: C.sans }}
                          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.primaryLight; e.currentTarget.style.color = C.primary; }}
                          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = C.bodyText; }}
                        >{d.name}</button>
                      ))}
                      <div style={{ borderTop: `1px solid ${C.border}`, margin: "6px 0", padding: "8px 20px 4px" }}>
                        <button onClick={() => go("/services")} style={{ fontSize: 12, color: C.primary, fontWeight: 700, background: "none", border: "none", cursor: "pointer", fontFamily: C.sans }}>
                          View All 50+ Services →
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button key={link.name} onClick={() => go(link.href)}
                  style={{ padding: "8px 14px", fontSize: 14, fontWeight: 500, color: C.bodyText, background: "none", border: "none", cursor: "pointer", borderRadius: 8, fontFamily: C.sans }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.primaryLight; e.currentTarget.style.color = C.primary; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = C.bodyText; }}
                >{link.name}</button>
              )
            )}
          </div>

          {/* Desktop CTAs */}
          <div className="desktop-cta" style={{ display: "flex", gap: 10, alignItems: "center", flexShrink: 0 }}>
            <button onClick={() => go("/contact")}
              style={{ fontSize: 13, fontWeight: 600, color: C.navy, border: `1.5px solid ${C.border}`, padding: "9px 18px", borderRadius: 10, background: C.white, cursor: "pointer", fontFamily: C.sans }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.primary; e.currentTarget.style.color = C.primary; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.navy; }}
            >Get Quote</button>
            <button onClick={() => go("/contact")}
              style={{ fontSize: 13, fontWeight: 700, color: "#fff", backgroundColor: C.primary, padding: "9px 20px", borderRadius: 10, border: "none", cursor: "pointer", fontFamily: C.sans, boxShadow: "0 4px 12px rgba(249,115,22,0.3)" }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = C.primaryDark}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = C.primary}
            >Free Consultation</button>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-burger"
            style={{ padding: 8, background: "none", border: `1px solid ${C.border}`, borderRadius: 8, cursor: "pointer", alignItems: "center", justifyContent: "center" }}>
            {mobileOpen ? <X size={20} color={C.navy} /> : <Menu size={20} color={C.navy} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ backgroundColor: C.white, borderTop: `3px solid ${C.primary}`, padding: "16px 24px", boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}>
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.name} style={{ marginBottom: 4 }}>
                <button onClick={() => setMobileServices(!mobileServices)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", fontSize: 14, fontWeight: 500, color: C.navy, background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, cursor: "pointer", fontFamily: C.sans, marginBottom: 4 }}>
                  {link.name}
                  <ChevronDown size={14} style={{ color: C.primary, transform: mobileServices ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }} />
                </button>
                {mobileServices && (
                  <div style={{ paddingLeft: 12 }}>
                    {serviceDropdown.map((d) => (
                      <button key={d.name} onClick={() => go(d.href)}
                        style={{ display: "block", width: "100%", textAlign: "left", padding: "10px 16px", fontSize: 13, color: C.primary, background: "transparent", border: "none", cursor: "pointer", fontFamily: C.sans }}>
                        → {d.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button key={link.name} onClick={() => go(link.href)}
                style={{ display: "block", width: "100%", textAlign: "left", padding: "12px 16px", fontSize: 14, fontWeight: 500, color: C.navy, background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, cursor: "pointer", fontFamily: C.sans, marginBottom: 4 }}>
                {link.name}
              </button>
            )
          )}
          <button onClick={() => go("/contact")}
            style={{ display: "block", width: "100%", marginTop: 12, padding: 13, fontSize: 14, fontWeight: 700, color: "#fff", backgroundColor: C.primary, borderRadius: 10, border: "none", cursor: "pointer", fontFamily: C.sans }}>
            Free Consultation
          </button>
        </div>
      )}
    </div>
  );
}