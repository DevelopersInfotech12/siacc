"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const C = {
  forest: "#1B4332",
  forestMid: "#2D6A4F",
  forestLight: "#40916C",
  mint: "#95D5B2",
  mintLight: "#D8F3DC",
  white: "#ffffff",
  charcoal: "#1A1A2E",
  serif: "'Playfair Display', Georgia, serif",
  sans: "'DM Sans', system-ui, sans-serif",
};

const serviceDropdownItems = [
  { name: "BIS Certification", href: "/bis" },
  { name: "EPR Registration", href: "/epr" },
  { name: "WPC-ETA Approval", href: "/wpc" },
  { name: "TEC / MTCTE", href: "/tec" },
  { name: "BEE Registration", href: "/bee" },
  { name: "LMPC Registration", href: "/lmpc" },
  { name: "ISO Certification", href: "/iso" },
  { name: "CDSCO / Drug License", href: "/cdsco" },
];

const navItems = [
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
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (href) => {
    setActiveDropdown(null);
    setMobileOpen(false);
    router.push(href);
  };

  const toggleDropdown = (name, e) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <div style={{ fontFamily: C.sans, position: "sticky", top: 0, zIndex: 1000 }}>
      <style>{`
        @media (max-width: 1024px) {
          .mobile-only-burger { display: flex !important; }
          .desktop-nav-links { display: none !important; }
          .desktop-cta-buttons { display: none !important; }
          .desktop-top-bar { display: none !important; }
        }
      `}</style>

      {/* ── TOP INFO BAR — hidden on mobile ── */}
      <div className="desktop-top-bar" style={{ backgroundColor: C.forest, color: C.mintLight, fontSize: 12, padding: "8px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", gap: 24 }}>
          <span>📞 +91 98765 43210</span>
          <span>✉ info@siacc.in</span>
        </div>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <span>Mon–Sat: 9:00 AM – 6:00 PM</span>
          <button
            onClick={() => handleNavClick("/contact")}
            style={{ color: C.mint, background: "none", border: "none", cursor: "pointer", fontWeight: 500, fontSize: 12, fontFamily: C.sans }}
          >
            Free Consultation →
          </button>
        </div>
      </div>

      {/* ── MAIN NAV ── */}
      <nav style={{ backgroundColor: C.white, borderBottom: `1px solid ${C.mintLight}`, boxShadow: scrolled ? "0 4px 20px rgba(27,67,50,0.10)" : "none", transition: "box-shadow 0.3s ease" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>

          {/* Logo */}
          <button
            onClick={() => handleNavClick("/")}
            style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer", flexShrink: 0 }}
          >
            <div style={{ width: 38, height: 38, borderRadius: 10, backgroundColor: C.forest, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: C.mint, fontFamily: C.serif, fontWeight: 700, fontSize: 20 }}>S</span>
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontFamily: C.serif, fontWeight: 700, color: C.forest, fontSize: 20, lineHeight: 1.1 }}>Siacc</div>
              <div style={{ fontSize: 9, color: C.forestLight, letterSpacing: "0.18em", textTransform: "uppercase", lineHeight: 1.2 }}>India</div>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="desktop-nav-links" style={{ display: "flex", alignItems: "center", gap: 2 }}>
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.name} style={{ position: "relative" }} ref={dropdownRef}>
                  <button
                    onClick={(e) => toggleDropdown(item.name, e)}
                    style={{ display: "flex", alignItems: "center", gap: 4, padding: "8px 14px", fontSize: 14, fontWeight: 500, color: C.charcoal, background: "none", border: "none", cursor: "pointer", borderRadius: 8, fontFamily: C.sans }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = C.forest; e.currentTarget.style.backgroundColor = C.mintLight; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = C.charcoal; e.currentTarget.style.backgroundColor = "transparent"; }}
                  >
                    {item.name}
                    <ChevronDown
                      size={14}
                      style={{ color: C.forestLight, transform: activeDropdown === item.name ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
                    />
                  </button>

                  {/* Dropdown */}
                  {activeDropdown === item.name && (
                    <div style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: 8, width: 240, backgroundColor: C.white, borderRadius: 14, boxShadow: "0 16px 48px rgba(27,67,50,0.16)", border: `1px solid ${C.mintLight}`, borderTop: `3px solid ${C.forest}`, padding: "8px 0", zIndex: 200 }}>
                      {serviceDropdownItems.map((d) => (
                        <button
                          key={d.name}
                          onClick={() => handleNavClick(d.href)}
                          style={{ display: "block", width: "100%", textAlign: "left", padding: "10px 20px", fontSize: 13, color: C.charcoal, background: "transparent", border: "none", cursor: "pointer", fontFamily: C.sans }}
                          onMouseEnter={(e) => { e.currentTarget.style.color = C.forest; e.currentTarget.style.backgroundColor = C.mintLight; }}
                          onMouseLeave={(e) => { e.currentTarget.style.color = C.charcoal; e.currentTarget.style.backgroundColor = "transparent"; }}
                        >
                          {d.name}
                        </button>
                      ))}
                      <div style={{ borderTop: `1px solid ${C.mintLight}`, margin: "8px 0", padding: "8px 20px 4px" }}>
                        <button
                          onClick={() => handleNavClick("/services")}
                          style={{ fontSize: 12, color: C.forestLight, fontWeight: 600, background: "none", border: "none", cursor: "pointer", fontFamily: C.sans }}
                        >
                          View All 50+ Services →
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  style={{ padding: "8px 14px", fontSize: 14, fontWeight: 500, color: C.charcoal, background: "none", border: "none", cursor: "pointer", borderRadius: 8, fontFamily: C.sans }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = C.forest; e.currentTarget.style.backgroundColor = C.mintLight; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = C.charcoal; e.currentTarget.style.backgroundColor = "transparent"; }}
                >
                  {item.name}
                </button>
              )
            )}
          </div>

          {/* CTA Buttons — desktop only */}
          <div className="desktop-cta-buttons" style={{ display: "flex", gap: 10, alignItems: "center", flexShrink: 0 }}>
            <button
              onClick={() => handleNavClick("/contact")}
              style={{ fontSize: 13, fontWeight: 600, color: C.forest, border: `1.5px solid ${C.forest}`, padding: "9px 18px", borderRadius: 10, background: "transparent", cursor: "pointer", fontFamily: C.sans }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.mintLight)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              Get Quote
            </button>
            <button
              onClick={() => handleNavClick("/contact")}
              style={{ fontSize: 13, fontWeight: 600, color: C.white, backgroundColor: C.forest, padding: "9px 20px", borderRadius: 10, border: "none", cursor: "pointer", fontFamily: C.sans }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.forestMid)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.forest)}
            >
              Free Consultation
            </button>
          </div>

          {/* Mobile burger — hidden on desktop, visible on mobile only */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ padding: 8, background: "none", border: `1px solid ${C.mintLight}`, borderRadius: 8, cursor: "pointer", display: "none", alignItems: "center", justifyContent: "center" }}
            className="mobile-only-burger"
          >
            {mobileOpen
              ? <X size={20} color={C.forest} />
              : <Menu size={20} color={C.forest} />
            }
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      {mobileOpen && (
        <div style={{ backgroundColor: C.white, borderTop: `3px solid ${C.forest}`, padding: "16px 24px" }}>
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div key={item.name} style={{ marginBottom: 4 }}>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", fontSize: 14, fontWeight: 500, color: C.charcoal, background: "transparent", border: `1px solid ${C.mintLight}`, borderRadius: 8, cursor: "pointer", fontFamily: C.sans, marginBottom: 4 }}
                >
                  {item.name}
                  <ChevronDown size={14} style={{ color: C.forestLight, transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
                </button>
                {mobileServicesOpen && (
                  <div style={{ paddingLeft: 12, marginBottom: 4 }}>
                    {serviceDropdownItems.map((d) => (
                      <button
                        key={d.name}
                        onClick={() => handleNavClick(d.href)}
                        style={{ display: "block", width: "100%", textAlign: "left", padding: "10px 16px", fontSize: 13, color: C.forestMid, background: "transparent", border: "none", cursor: "pointer", fontFamily: C.sans }}
                      >
                        → {d.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                style={{ display: "block", width: "100%", textAlign: "left", padding: "12px 16px", fontSize: 14, fontWeight: 500, color: C.charcoal, background: "transparent", border: `1px solid ${C.mintLight}`, borderRadius: 8, cursor: "pointer", fontFamily: C.sans, marginBottom: 4 }}
              >
                {item.name}
              </button>
            )
          )}
          <button
            onClick={() => handleNavClick("/contact")}
            style={{ display: "block", width: "100%", marginTop: 12, padding: "14px", fontSize: 14, fontWeight: 700, color: C.white, backgroundColor: C.forest, borderRadius: 10, border: "none", cursor: "pointer", fontFamily: C.sans }}
          >
            Free Consultation
          </button>
        </div>
      )}
    </div>
  );
}