'use client';
import { useState } from 'react';

export default function ContactForm({ compact = false }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const services = ['BIS CRS/ISI Certification', 'EPR Registration', 'WPC ETA Approval', 'TEC/MTCTE Approval', 'BEE Registration', 'LMPC Registration', 'CDSCO Registration', 'ISO Certification', 'Other'];

  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  const inputStyle = {
    width: '100%', padding: '13px 16px', borderRadius: '10px',
    border: '1.5px solid #E2E8F0', fontSize: '14px', fontFamily: 'Inter, sans-serif',
    backgroundColor: '#FFFFFF', color: '#1E293B', outline: 'none',
    transition: 'border-color 0.2s', boxSizing: 'border-box',
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '48px 24px' }}>
        <div style={{ fontSize: '64px', marginBottom: '16px' }}>✅</div>
        <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: '800', fontSize: '24px', color: '#0A1628', marginBottom: '12px' }}>Thank You!</h3>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#64748B' }}>Our expert will contact you within 2 business hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: compact ? '1fr' : '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: '600', color: '#1E293B', display: 'block', marginBottom: '6px' }}>Full Name *</label>
          <input required style={inputStyle} placeholder="Your full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} onFocus={e => e.target.style.borderColor = '#0EA5E9'} onBlur={e => e.target.style.borderColor = '#E2E8F0'} />
        </div>
        <div>
          <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: '600', color: '#1E293B', display: 'block', marginBottom: '6px' }}>Phone Number *</label>
          <input required type="tel" style={inputStyle} placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} onFocus={e => e.target.style.borderColor = '#0EA5E9'} onBlur={e => e.target.style.borderColor = '#E2E8F0'} />
        </div>
      </div>

      <div>
        <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: '600', color: '#1E293B', display: 'block', marginBottom: '6px' }}>Email Address *</label>
        <input required type="email" style={inputStyle} placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} onFocus={e => e.target.style.borderColor = '#0EA5E9'} onBlur={e => e.target.style.borderColor = '#E2E8F0'} />
      </div>

      <div>
        <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: '600', color: '#1E293B', display: 'block', marginBottom: '6px' }}>Service Required</label>
        <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
          <option value="">Select a service...</option>
          {services.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: '600', color: '#1E293B', display: 'block', marginBottom: '6px' }}>Message</label>
        <textarea style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }} placeholder="Tell us about your product and requirements..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} onFocus={e => e.target.style.borderColor = '#0EA5E9'} onBlur={e => e.target.style.borderColor = '#E2E8F0'} />
      </div>

      <button type="submit" style={{
        backgroundColor: '#0A1628', color: '#FFFFFF', padding: '15px', borderRadius: '12px',
        fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '15px', border: 'none',
        cursor: 'pointer', transition: 'all 0.2s', letterSpacing: '0.3px',
      }}
      onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1E3A5F'}
      onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0A1628'}
      >Send Enquiry →</button>

      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#94A3B8', textAlign: 'center' }}>🔒 Your data is 100% secure and never shared with third parties.</p>
    </form>
  );
}