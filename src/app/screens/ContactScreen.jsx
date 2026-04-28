import Link from "next/link";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const C = {
  forest: "#1B4332", forestMid: "#2D6A4F", forestLight: "#40916C",
  mint: "#95D5B2", mintLight: "#D8F3DC", gold: "#D4A017",
  offWhite: "#F7FAF8", charcoal: "#1A1A2E", gray: "#6B7280", white: "#ffffff",
  serif: "'Playfair Display', Georgia, serif", sans: "'DM Sans', system-ui, sans-serif",
};

const offices = [
  { city: "New Delhi", address: "12, Connaught Place, New Delhi – 110001", phone: "+91 98765 43210", email: "delhi@Siacc.in", head: "Vikram Anand", hours: "Mon–Sat: 9AM – 6PM" },
  { city: "Mumbai", address: "302, Nariman Point, Mumbai – 400021", phone: "+91 98765 43211", email: "mumbai@Siacc.in", head: "Sneha Kapoor", hours: "Mon–Sat: 9AM – 6PM" },
  { city: "Bengaluru", address: "14, MG Road, Bengaluru – 560001", phone: "+91 98765 43212", email: "bangalore@Siacc.in", head: "Rohit Verma", hours: "Mon–Sat: 9AM – 6PM" },
  { city: "Hyderabad", address: "8-2-120, Banjara Hills, Hyderabad – 500034", phone: "+91 98765 43213", email: "hyderabad@Siacc.in", head: "Priya Sharma", hours: "Mon–Sat: 9AM – 6PM" },
];

const services = [
  "BIS Certification", "EPR Registration", "WPC-ETA Approval", "TEC / MTCTE",
  "BEE Registration", "LMPC Registration", "ISO Certification", "CDSCO / Drug License", "Other",
];

const faqs = [
  { q: "How long does BIS certification take?", a: "Typically 4–12 weeks depending on the product category, lab testing schedules, and application completeness. We provide faster timelines for most categories." },
  { q: "Do you handle international clients?", a: "Yes, we serve manufacturers and importers from 25+ countries seeking to enter the Indian market. We provide end-to-end support remotely." },
  { q: "What is the consultation fee?", a: "Our initial consultation is completely free. We assess your requirement and give you a clear cost and timeline breakdown before any commitment." },
  { q: "Can you take over my stalled certification?", a: "Absolutely. We regularly take over applications that are stalled or rejected and successfully bring them to completion." },
];

const heroTrust = [
  { icon: "⚡", label: "2-Hour Response", desc: "Guaranteed reply within 2 business hours" },
  { icon: "🆓", label: "Free Consultation", desc: "No charges for initial assessment" },
  { icon: "🌍", label: "25+ Countries", desc: "We serve international clients remotely" },
  { icon: "✅", label: "98% Success Rate", desc: "Across 10,000+ certifications filed" },
];

export default function ContactScreen() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: C.offWhite, fontFamily: C.sans }}>

      <style>{`
        .contact-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .contact-hero-grid { grid-template-columns: 1fr; gap: 36px; }
          .contact-hero-right { display: none; }
        }
        .contact-trust-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .contact-trust-card {
          background: rgba(149, 213, 178, 0.10);
          border: 1px solid rgba(149, 213, 178, 0.22);
          border-radius: 14px;
          padding: 18px 16px;
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .contact-main-grid {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 48px;
          align-items: flex-start;
        }
        @media (max-width: 1024px) {
          .contact-main-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <Navbar />

      {/* ── HERO ── */}
      <section style={{ backgroundColor: C.forest, padding: "80px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(149,213,178,0.12)", transform: "translate(30%,-30%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: "42%", width: 280, height: 280, borderRadius: "50%", border: "1px solid rgba(149,213,178,0.07)", transform: "translateY(40%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 36 }}>
            <Link href="/" style={{ color: C.mint, fontSize: 13, textDecoration: "none" }}>Home</Link>
            <span style={{ color: C.forestLight, fontSize: 13 }}>/</span>
            <span style={{ color: C.mintLight, fontSize: 13 }}>Contact Us</span>
          </div>

          <div className="contact-hero-grid">

            {/* LEFT */}
            <div>
              <span style={{ fontSize: 11, fontWeight: 600, color: C.mint, letterSpacing: "0.12em", textTransform: "uppercase" }}>Get In Touch</span>
              <h1 style={{ fontFamily: C.serif, fontSize: "clamp(2rem,4vw,3.2rem)", color: C.white, marginTop: 12, marginBottom: 20, fontWeight: 700, lineHeight: 1.2 }}>
                Let's Start Your<br />Certification Journey
              </h1>
              <p style={{ color: "#b7e4c7", fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
                Reach out via the form below, call us, or walk into any of our offices. Our experts respond within 2 business hours — free of charge for initial consultations.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#contact-form" style={{ display: "inline-block", padding: "12px 28px", backgroundColor: C.mint, color: C.forest, fontWeight: 700, borderRadius: 12, textDecoration: "none", fontSize: 14 }}>
                  Send a Message ↓
                </a>
                <a href="tel:+919876543210" style={{ display: "inline-block", padding: "12px 28px", border: "1.5px solid rgba(149,213,178,0.35)", color: C.mintLight, borderRadius: 12, textDecoration: "none", fontSize: 14 }}>
                  📞 Call Us Now
                </a>
              </div>
            </div>

            {/* RIGHT — trust signals */}
            <div className="contact-hero-right">
              <p style={{ fontSize: 11, fontWeight: 600, color: C.mint, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Why Contact Us</p>
              <div className="contact-trust-grid">
                {heroTrust.map((t) => (
                  <div key={t.label} className="contact-trust-card">
                    <div style={{ fontSize: 22, flexShrink: 0, lineHeight: 1 }}>{t.icon}</div>
                    <div>
                      <div style={{ fontFamily: C.serif, fontSize: 14, color: C.white, fontWeight: 600, marginBottom: 4 }}>{t.label}</div>
                      <div style={{ fontSize: 12, color: "#b7e4c7", lineHeight: 1.5 }}>{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office cities strip */}
              <div style={{ marginTop: 14, background: "rgba(149,213,178,0.08)", border: "1px solid rgba(149,213,178,0.18)", borderRadius: 14, padding: "16px 20px", display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ fontSize: 24, flexShrink: 0 }}>🏢</div>
                <div>
                  <div style={{ fontSize: 13, color: C.white, fontWeight: 600, marginBottom: 3 }}>3 Offices Across India</div>
                  <div style={{ fontSize: 12, color: "#b7e4c7" }}>New Delhi &nbsp;·&nbsp; Mumbai &nbsp;·&nbsp; Bengaluru</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── MAIN CONTACT SECTION ── */}
      <section id="contact-form" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="contact-main-grid">

          {/* Form */}
          <div style={{ backgroundColor: C.white, borderRadius: 20, padding: 40, border: `1px solid ${C.mintLight}` }}>
            <h2 style={{ fontFamily: C.serif, fontSize: 24, color: C.forest, marginBottom: 8, fontWeight: 700 }}>Send Us a Message</h2>
            <p style={{ fontSize: 14, color: C.gray, marginBottom: 32, lineHeight: 1.65 }}>Fill in the form and one of our experts will contact you within 2 business hours.</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              {[{ label: "Full Name *", type: "text", placeholder: "Rajesh Mehta" }, { label: "Company Name", type: "text", placeholder: "TechImport Pvt. Ltd." }].map((f) => (
                <div key={f.label}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.charcoal, marginBottom: 6 }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} style={{ width: "100%", padding: "12px 14px", border: `1px solid ${C.mintLight}`, borderRadius: 10, fontSize: 14, color: C.charcoal, outline: "none", boxSizing: "border-box", fontFamily: C.sans, backgroundColor: C.offWhite }} />
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              {[{ label: "Phone Number *", type: "tel", placeholder: "+91 98765 43210" }, { label: "Email Address *", type: "email", placeholder: "rajesh@company.com" }].map((f) => (
                <div key={f.label}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.charcoal, marginBottom: 6 }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} style={{ width: "100%", padding: "12px 14px", border: `1px solid ${C.mintLight}`, borderRadius: 10, fontSize: 14, color: C.charcoal, outline: "none", boxSizing: "border-box", fontFamily: C.sans, backgroundColor: C.offWhite }} />
                </div>
              ))}
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.charcoal, marginBottom: 6 }}>Service Required *</label>
              <select style={{ width: "100%", padding: "12px 14px", border: `1px solid ${C.mintLight}`, borderRadius: 10, fontSize: 14, color: C.charcoal, outline: "none", fontFamily: C.sans, backgroundColor: C.offWhite }}>
                <option value="">Select a service</option>
                {services.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.charcoal, marginBottom: 6 }}>Product / Business Description *</label>
              <textarea rows={4} placeholder="Briefly describe your product and what certification you're looking for..." style={{ width: "100%", padding: "12px 14px", border: `1px solid ${C.mintLight}`, borderRadius: 10, fontSize: 14, color: C.charcoal, outline: "none", resize: "vertical", fontFamily: C.sans, backgroundColor: C.offWhite, boxSizing: "border-box" }} />
            </div>

            <div style={{ marginBottom: 28 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.charcoal, marginBottom: 6 }}>How did you hear about us?</label>
              <select style={{ width: "100%", padding: "12px 14px", border: `1px solid ${C.mintLight}`, borderRadius: 10, fontSize: 14, color: C.charcoal, outline: "none", fontFamily: C.sans, backgroundColor: C.offWhite }}>
                <option value="">Select an option</option>
                {["Google Search", "LinkedIn", "Referral", "Trade Show", "Other"].map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>

            <button style={{ width: "100%", padding: "15px", backgroundColor: C.forest, color: C.white, fontWeight: 700, borderRadius: 12, border: "none", fontSize: 15, cursor: "pointer", fontFamily: C.sans }}>
              Submit Enquiry →
            </button>
            <p style={{ fontSize: 12, color: C.gray, textAlign: "center", marginTop: 12 }}>We respond within 2 business hours. No spam, ever.</p>
          </div>

          {/* Right sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

            {/* Quick contact */}
            <div style={{ backgroundColor: C.forest, borderRadius: 16, padding: 28 }}>
              <h3 style={{ fontFamily: C.serif, fontSize: 18, color: C.white, marginBottom: 20, fontWeight: 600 }}>Quick Contact</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { icon: "📞", label: "Call Us", value: "+91 98765 43210", href: "tel:+919876543210" },
                  { icon: "✉", label: "Email Us", value: "info@Siacc.in", href: "mailto:info@Siacc.in" },
                  { icon: "💬", label: "WhatsApp", value: "+91 98765 43210", href: "https://wa.me/919876543210" },
                ].map((item) => (
                  <a key={item.label} href={item.href} style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none" }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: C.forestMid, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize: 11, color: C.mint, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.label}</div>
                      <div style={{ fontSize: 14, color: C.white, fontWeight: 500 }}>{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Business hours */}
            <div style={{ backgroundColor: C.white, borderRadius: 16, padding: 24, border: `1px solid ${C.mintLight}` }}>
              <h3 style={{ fontFamily: C.serif, fontSize: 17, color: C.forest, marginBottom: 16, fontWeight: 600 }}>Business Hours</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[{ day: "Monday – Friday", time: "9:00 AM – 6:00 PM" }, { day: "Saturday", time: "10:00 AM – 4:00 PM" }, { day: "Sunday", time: "Closed" }].map((h) => (
                  <div key={h.day} style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                    <span style={{ color: C.gray }}>{h.day}</span>
                    <span style={{ color: h.time === "Closed" ? "#ef4444" : C.forest, fontWeight: 600 }}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency */}
            <div style={{ backgroundColor: C.mintLight, borderRadius: 16, padding: 24, border: `1px solid ${C.mint}` }}>
              <div style={{ fontSize: 20, marginBottom: 8 }}>⚡</div>
              <h3 style={{ fontFamily: C.serif, fontSize: 16, color: C.forest, marginBottom: 8, fontWeight: 600 }}>Urgent Compliance Need?</h3>
              <p style={{ fontSize: 13, color: C.gray, lineHeight: 1.65, marginBottom: 16 }}>Facing a regulatory deadline or port hold? We have an emergency response team.</p>
              <a href="tel:+919876543210" style={{ display: "block", textAlign: "center", padding: "10px", backgroundColor: C.forest, color: C.white, borderRadius: 10, textDecoration: "none", fontSize: 13, fontWeight: 600 }}>
                Call Emergency Line
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFICES ── */}
      <section style={{ backgroundColor: C.mintLight, padding: "64px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: C.forestLight, letterSpacing: "0.12em", textTransform: "uppercase" }}>Our Offices</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.6rem,3vw,2.2rem)", color: C.forest, marginTop: 12, fontWeight: 700 }}>Find Us Across India</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 }}>
            {offices.map((office) => (
              <div key={office.city} style={{ backgroundColor: C.white, borderRadius: 16, padding: 28, border: `1px solid ${C.mint}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: C.forest, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🏢</div>
                  <div>
                    <div style={{ fontFamily: C.serif, fontSize: 18, color: C.forest, fontWeight: 700 }}>{office.city}</div>
                    <div style={{ fontSize: 12, color: C.forestLight }}>Regional Office</div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[{ icon: "📍", val: office.address }, { icon: "📞", val: office.phone }, { icon: "✉", val: office.email }, { icon: "🕐", val: office.hours }].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, fontSize: 13 }}>
                      <span style={{ flexShrink: 0 }}>{item.icon}</span>
                      <span style={{ color: C.gray }}>{item.val}</span>
                    </div>
                  ))}
                  <div style={{ display: "flex", gap: 10, fontSize: 13 }}>
                    <span>👤</span>
                    <span style={{ color: C.gray }}>Head: <strong style={{ color: C.forest }}>{office.head}</strong></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: C.forestLight, letterSpacing: "0.12em", textTransform: "uppercase" }}>Common Questions</span>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.6rem,3vw,2.2rem)", color: C.forest, marginTop: 12, fontWeight: 700 }}>Frequently Asked</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {faqs.map((faq) => (
              <div key={faq.q} style={{ backgroundColor: C.white, borderRadius: 14, padding: "22px 24px", border: `1px solid ${C.mintLight}` }}>
                <div style={{ fontFamily: C.serif, fontSize: 15, color: C.forest, marginBottom: 10, fontWeight: 600 }}>Q: {faq.q}</div>
                <div style={{ fontSize: 14, color: C.gray, lineHeight: 1.7 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}