"use client";
import { useState, useEffect, useRef } from "react";

const T = {
  teal: "#1E88C8", tealDark: "#074D4D", tealMid: "#0E8080", titleblue: "#0a6daa",
  tealLight: "#EBF5F5", amber: "#C8780A", amberLight: "#FEF3DC",
  slate: "#0D1B2A", body: "#2D3748", muted: "#718096", subtle: "#A0AEC0",
  border: "#E8E3DA", white: "#FFFFFF", cream: "#FAF8F4",
  orange: "#F97316",
  serif: "'Cormorant Garamond','Georgia',serif",
  sans: "'Outfit','system-ui',sans-serif",
};

const GOOGLE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJM1qrq6KGDTkR04ZYV7GXm2A";

const STAGE = { RATING: "rating", THINKING: "thinking", SUGGEST: "suggest", EDIT: "edit", DONE: "done" };

const ratingLabels = { 1: "Poor", 2: "Fair", 3: "Good", 4: "Very Good", 5: "Excellent" };
const ratingEmoji  = { 1: "😞", 2: "😐", 3: "🙂", 4: "😊", 5: "🤩" };

async function fetchAISuggestions(rating) {
  const ratingText = ratingLabels[rating];
  const prompt = `You are a review assistant for SIACC (Star India Accreditation), a leading compliance and certification consultancy in India. A customer just rated their experience ${rating}/5 stars (${ratingText}).

Generate exactly 3 short, genuine-sounding Google review suggestions for this rating. Each review should:
- Be 2-3 sentences max
- Sound natural and human (not robotic or overly formal)
- Mention compliance/certification context naturally
- Match the sentiment of ${rating}/5 stars
- Be different from each other in tone and focus

For 4-5 stars: positive experience, mention specific things like speed, expertise, professionalism, communication, or successful certification
For 3 stars: mixed, decent service but room for improvement
For 1-2 stars: constructive criticism, mention what could be better

Return ONLY a JSON array with exactly 3 strings. No other text. Example format:
["Review 1 text here.", "Review 2 text here.", "Review 3 text here."]`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }],
    }),
  });
  const data = await response.json();
  const text = data.content?.[0]?.text || "[]";
  try {
    const clean = text.replace(/```json|```/g, "").trim();
    return JSON.parse(clean);
  } catch {
    return [
      "Great experience with SIACC. The team was professional and knowledgeable throughout the certification process.",
      "SIACC handled our compliance needs efficiently. Would recommend their services to other businesses.",
      "Smooth and transparent process from start to finish. The team kept us informed at every step.",
    ];
  }
}

export default function ReviewPage() {
  const [stage, setStage]       = useState(STAGE.RATING);
  const [rating, setRating]     = useState(0);
  const [hovered, setHovered]   = useState(0);
  const [suggestions, setSuggestions] = useState([]);
  const [selected, setSelected] = useState("");
  const [editText, setEditText] = useState("");
  const [thinkDots, setThinkDots] = useState(1);
  const textRef = useRef(null);

  // Thinking animation dots
  useEffect(() => {
    if (stage !== STAGE.THINKING) return;
    const id = setInterval(() => setThinkDots(d => d === 3 ? 1 : d + 1), 450);
    return () => clearInterval(id);
  }, [stage]);

  const handleStarClick = async (star) => {
    setRating(star);
    setStage(STAGE.THINKING);
    try {
      const sugs = await fetchAISuggestions(star);
      setSuggestions(sugs);
      setStage(STAGE.SUGGEST);
    } catch {
      setSuggestions([
        "SIACC made our BIS certification process completely smooth. Their team was responsive and professional throughout.",
        "Excellent compliance consultancy. Got our certification done faster than expected.",
        "Very knowledgeable team. Guided us step by step and delivered on time.",
      ]);
      setStage(STAGE.SUGGEST);
    }
  };

  const handleSelectSuggestion = (text) => {
    setSelected(text);
    setEditText(text);
    setStage(STAGE.EDIT);
    setTimeout(() => textRef.current?.focus(), 100);
  };

  const handlePostToGoogle = () => {
    // Open Google review with pre-filled text via clipboard
    navigator.clipboard?.writeText(editText || selected);
    window.open(GOOGLE_REVIEW_URL, "_blank");
    setStage(STAGE.DONE);
  };

  const handleSkipToGoogle = () => {
    window.open(GOOGLE_REVIEW_URL, "_blank");
    setStage(STAGE.DONE);
  };

  const reset = () => {
    setStage(STAGE.RATING); setRating(0); setHovered(0);
    setSuggestions([]); setSelected(""); setEditText(""); setThinkDots(1);
  };

  const displayRating = hovered || rating;

  return (
    <div style={{ minHeight: "100vh", background: T.slate, fontFamily: T.sans, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes fadeUp   { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn   { from{opacity:0} to{opacity:1} }
        @keyframes popIn    { 0%{opacity:0;transform:scale(0.85)} 70%{transform:scale(1.04)} 100%{opacity:1;transform:scale(1)} }
        @keyframes shimmer  { 0%{background-position:-300% 0} 100%{background-position:300% 0} }
        @keyframes bounce   { 0%,100%{transform:translateY(0)} 40%{transform:translateY(-8px)} 70%{transform:translateY(-4px)} }
        @keyframes starPop  { 0%{transform:scale(1)} 40%{transform:scale(1.35)} 100%{transform:scale(1)} }
        @keyframes slideIn  { from{opacity:0;transform:translateX(-16px)} to{opacity:1;transform:translateX(0)} }
        @keyframes spin     { to{transform:rotate(360deg)} }
        @keyframes confetti { 0%{opacity:1;transform:translateY(0) rotate(0)} 100%{opacity:0;transform:translateY(-80px) rotate(360deg)} }
        @keyframes glow     { 0%,100%{box-shadow:0 0 20px rgba(30,136,200,0.3)} 50%{box-shadow:0 0 40px rgba(30,136,200,0.6)} }

        .page-shell {
          width: 100%; max-width: 440px; min-height: 100vh;
          display: flex; flex-direction: column;
        }

        /* Header */
        .rev-header {
          background: linear-gradient(135deg, ${T.tealDark} 0%, ${T.tealMid} 60%, ${T.teal} 100%);
          padding: 40px 28px 32px;
          position: relative; overflow: hidden;
          flex-shrink: 0;
        }
        .rev-header::before {
          content: '';
          position: absolute; top: -60px; right: -60px;
          width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
          border-radius: 50%;
        }
        .rev-header::after {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
        }

        /* Body card */
        .rev-body {
          background: ${T.cream};
          flex: 1;
          border-radius: 28px 28px 0 0;
          padding: 32px 24px 40px;
          margin-top: -16px;
          position: relative;
          z-index: 1;
          animation: fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) both;
        }

        /* Stars */
        .star-row { display: flex; gap: 10px; justify-content: center; margin-bottom: 12px; }
        .star-btn {
          background: none; border: none; cursor: pointer; padding: 4px;
          transition: transform 0.15s;
          line-height: 1;
        }
        .star-btn:hover { transform: scale(1.15); }
        .star-btn.active { animation: starPop 0.3s ease both; }

        /* Thinking */
        .thinking-wrap {
          display: flex; flex-direction: column; align-items: center;
          gap: 16px; padding: 32px 0;
          animation: fadeIn 0.4s ease both;
        }
        .think-spinner {
          width: 44px; height: 44px;
          border: 3px solid ${T.tealLight};
          border-top-color: ${T.teal};
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        .ai-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: linear-gradient(135deg, ${T.teal}, ${T.tealMid});
          color: #fff;
          border-radius: 999px;
          padding: 4px 14px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.06em;
        }
        .shimmer-bar {
          height: 14px; border-radius: 7px;
          background: linear-gradient(90deg, ${T.tealLight} 25%, #fff 50%, ${T.tealLight} 75%);
          background-size: 300% 100%;
          animation: shimmer 1.4s linear infinite;
        }

        /* Suggestion cards */
        .sug-card {
          background: ${T.white};
          border: 1.5px solid ${T.border};
          border-radius: 16px;
          padding: 18px 20px;
          cursor: pointer;
          transition: all 0.22s;
          position: relative;
          overflow: hidden;
          animation: slideIn 0.4s cubic-bezier(0.22,1,0.36,1) both;
        }
        .sug-card:hover {
          border-color: ${T.teal};
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(30,136,200,0.12);
        }
        .sug-card::before {
          content: '';
          position: absolute; left: 0; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, ${T.teal}, ${T.tealMid});
          border-radius: 3px 0 0 3px;
          opacity: 0; transition: opacity 0.2s;
        }
        .sug-card:hover::before { opacity: 1; }

        /* Edit textarea */
        .review-textarea {
          width: 100%;
          background: ${T.white};
          border: 1.5px solid ${T.border};
          border-radius: 14px;
          padding: 16px 18px;
          font-size: 14px;
          color: ${T.slate};
          font-family: ${T.sans};
          line-height: 1.75;
          resize: none;
          outline: none;
          transition: border-color 0.2s;
          min-height: 130px;
        }
        .review-textarea:focus { border-color: ${T.teal}; box-shadow: 0 0 0 3px rgba(30,136,200,0.08); }

        /* Buttons */
        .btn-primary {
          width: 100%; padding: 15px;
          background: ${T.orange};
          color: #fff; border: none;
          border-radius: 14px;
          font-size: 15px; font-weight: 700;
          cursor: pointer; font-family: ${T.sans};
          letter-spacing: 0.02em;
          transition: all 0.22s;
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .btn-primary:hover { background: #EA6A0A; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(249,115,22,0.35); }

        .btn-google {
          width: 100%; padding: 15px;
          background: linear-gradient(135deg, #4285F4, #1a73e8);
          color: #fff; border: none;
          border-radius: 14px;
          font-size: 15px; font-weight: 700;
          cursor: pointer; font-family: ${T.sans};
          letter-spacing: 0.02em;
          transition: all 0.22s;
          display: flex; align-items: center; justify-content: center; gap: 10px;
          box-shadow: 0 4px 16px rgba(66,133,244,0.35);
        }
        .btn-google:hover { transform: translateY(-1px); box-shadow: 0 8px 28px rgba(66,133,244,0.45); }

        .btn-ghost {
          width: 100%; padding: 13px;
          background: transparent;
          color: ${T.muted};
          border: 1.5px solid ${T.border};
          border-radius: 14px;
          font-size: 14px; font-weight: 500;
          cursor: pointer; font-family: ${T.sans};
          transition: all 0.2s;
        }
        .btn-ghost:hover { border-color: ${T.teal}; color: ${T.teal}; }

        /* Done screen */
        .done-icon {
          width: 80px; height: 80px;
          background: linear-gradient(135deg, ${T.teal}, ${T.tealMid});
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 36px; margin: 0 auto 20px;
          animation: glow 2s ease-in-out infinite, popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both;
        }

        .char-count { font-size: 11px; color: ${T.muted}; text-align: right; margin-top: 6px; }

        /* Section label */
        .sec-label {
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: ${T.teal}; margin-bottom: 14px;
          display: flex; align-items: center; gap: 8px;
        }
        .sec-label::after { content: ''; flex: 1; height: 1px; background: ${T.tealLight}; }
      `}</style>

      <div className="page-shell">

        {/* ── HEADER ── */}
        <div className="rev-header">
          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Brand */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, border: "1px solid rgba(255,255,255,0.2)" }}>🏅</div>
              <div>
                <div style={{ fontFamily: T.serif, fontSize: 14, color: "#fff", fontWeight: 700, lineHeight: 1 }}>SIACC</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.65)", letterSpacing: "0.06em" }}>Star India Accreditation</div>
              </div>
            </div>

            <h1 style={{ fontFamily: T.serif, fontSize: "clamp(22px,5vw,28px)", color: "#fff", fontWeight: 700, lineHeight: 1.2, marginBottom: 8 }}>
              {stage === STAGE.DONE ? "Thank You! 🎉" : "How was your experience?"}
            </h1>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.70)", lineHeight: 1.6 }}>
              {stage === STAGE.DONE
                ? "Your review helps others make confident compliance decisions."
                : "Your feedback helps us serve you and others better."}
            </p>
          </div>
        </div>

        {/* ── BODY ── */}
        <div className="rev-body">

          {/* ═══ STAGE: RATING ═══ */}
          {stage === STAGE.RATING && (
            <div style={{ animation: "fadeUp 0.4s ease both" }}>
              <div style={{ textAlign: "center", marginBottom: 32 }}>
                <p style={{ fontSize: 13, color: T.muted, marginBottom: 20 }}>Tap a star to rate your experience</p>

                {/* Stars */}
                <div className="star-row">
                  {[1,2,3,4,5].map(star => (
                    <button
                      key={star}
                      className={`star-btn ${rating === star ? "active" : ""}`}
                      onMouseEnter={() => setHovered(star)}
                      onMouseLeave={() => setHovered(0)}
                      onClick={() => handleStarClick(star)}
                      aria-label={`${star} star`}
                    >
                      <span style={{ fontSize: 42, filter: star <= displayRating ? "none" : "grayscale(1) opacity(0.3)", transition: "filter 0.15s, transform 0.15s", display: "block" }}>
                        ★
                      </span>
                    </button>
                  ))}
                </div>

                {displayRating > 0 && (
                  <div style={{ animation: "popIn 0.3s ease both", marginTop: 12 }}>
                    <span style={{ fontSize: 24 }}>{ratingEmoji[displayRating]}</span>
                    <div style={{ fontFamily: T.serif, fontSize: 18, color: T.slate, fontWeight: 600, marginTop: 6 }}>
                      {ratingLabels[displayRating]}
                    </div>
                  </div>
                )}
              </div>

              {/* Quick action for 5 stars */}
              {displayRating === 5 && (
                <div style={{ background: T.tealLight, border: `1px solid #B2DADA`, borderRadius: 14, padding: "16px 18px", marginBottom: 20, animation: "fadeIn 0.4s ease both" }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 20 }}>⭐</span>
                    <div>
                      <div style={{ fontSize: 13, color: T.slate, fontWeight: 600, marginBottom: 3 }}>Loving our service?</div>
                      <div style={{ fontSize: 12, color: T.muted }}>Click a star to continue — our AI will help you write the perfect review in seconds!</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Trust row */}
              <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 28 }}>
                {[{ icon: "🔒", label: "Private" }, { icon: "⚡", label: "30 seconds" }, { icon: "✨", label: "AI assisted" }].map(t => (
                  <div key={t.label} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 18, marginBottom: 4 }}>{t.icon}</div>
                    <div style={{ fontSize: 11, color: T.muted }}>{t.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ═══ STAGE: THINKING ═══ */}
          {stage === STAGE.THINKING && (
            <div className="thinking-wrap">
              {/* Selected rating display */}
              <div style={{ display: "flex", gap: 4 }}>
                {[1,2,3,4,5].map(s => (
                  <span key={s} style={{ fontSize: 24, opacity: s <= rating ? 1 : 0.2, color: "#F59E0B" }}>★</span>
                ))}
              </div>
              <div style={{ fontFamily: T.serif, fontSize: 16, color: T.slate }}>{ratingEmoji[rating]} {ratingLabels[rating]}</div>

              {/* Spinner + AI badge */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                <div className="think-spinner" />
                <div className="ai-badge">✨ AI is thinking{".".repeat(thinkDots)}</div>
              </div>

              <p style={{ fontSize: 13, color: T.muted, textAlign: "center" }}>
                Crafting personalized review<br />suggestions based on your rating
              </p>

              {/* Shimmer preview bars */}
              <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 12 }}>
                {[100, 85, 92].map((w, i) => (
                  <div key={i} style={{ background: T.white, border: `1px solid ${T.border}`, borderRadius: 12, padding: "16px 18px", display: "flex", flexDirection: "column", gap: 8 }}>
                    <div className="shimmer-bar" style={{ width: `${w}%` }} />
                    <div className="shimmer-bar" style={{ width: `${w - 20}%` }} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ═══ STAGE: SUGGEST ═══ */}
          {stage === STAGE.SUGGEST && (
            <div style={{ animation: "fadeUp 0.4s ease both" }}>
              {/* Rating summary */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24, padding: "12px 16px", background: T.white, border: `1px solid ${T.border}`, borderRadius: 12 }}>
                <span style={{ fontSize: 22 }}>{ratingEmoji[rating]}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, color: T.slate, fontWeight: 600 }}>{ratingLabels[rating]} — {rating}/5 stars</div>
                  <div style={{ display: "flex", gap: 2, marginTop: 2 }}>
                    {[1,2,3,4,5].map(s => <span key={s} style={{ fontSize: 14, color: s <= rating ? "#F59E0B" : "#E5E7EB" }}>★</span>)}
                  </div>
                </div>
                <button onClick={reset} style={{ fontSize: 11, color: T.teal, background: "none", border: "none", cursor: "pointer", fontWeight: 600, fontFamily: T.sans }}>Change</button>
              </div>

              {/* AI label */}
              <div className="sec-label">
                <span className="ai-badge" style={{ fontSize: 10 }}>✨ AI</span>
                Choose a suggestion
              </div>

              {/* Suggestions */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                {suggestions.map((sug, i) => (
                  <div
                    key={i}
                    className="sug-card"
                    style={{ animationDelay: `${i * 0.1}s` }}
                    onClick={() => handleSelectSuggestion(sug)}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 10, fontWeight: 700, color: T.teal, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>
                          Suggestion {i + 1}
                        </div>
                        <p style={{ fontSize: 13.5, color: T.body, lineHeight: 1.7, margin: 0 }}>{sug}</p>
                      </div>
                      <div style={{ width: 28, height: 28, borderRadius: 8, background: T.tealLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 14 }}>→</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Write own */}
              <button className="btn-ghost" onClick={() => { setEditText(""); setStage(STAGE.EDIT); setTimeout(() => textRef.current?.focus(), 100); }}>
                ✏️ Write my own review
              </button>

              <button className="btn-ghost" style={{ marginTop: 10, border: "none", fontSize: 12, color: T.muted, padding: "8px" }} onClick={handleSkipToGoogle}>
                Skip and review directly on Google →
              </button>
            </div>
          )}

          {/* ═══ STAGE: EDIT ═══ */}
          {stage === STAGE.EDIT && (
            <div style={{ animation: "fadeUp 0.4s ease both" }}>
              {/* Rating summary */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, padding: "12px 16px", background: T.white, border: `1px solid ${T.border}`, borderRadius: 12 }}>
                <span style={{ fontSize: 20 }}>{ratingEmoji[rating]}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, color: T.slate, fontWeight: 600 }}>{ratingLabels[rating]} — {rating}/5</div>
                  <div style={{ display: "flex", gap: 2, marginTop: 2 }}>
                    {[1,2,3,4,5].map(s => <span key={s} style={{ fontSize: 14, color: s <= rating ? "#F59E0B" : "#E5E7EB" }}>★</span>)}
                  </div>
                </div>
                <button onClick={() => setStage(STAGE.SUGGEST)} style={{ fontSize: 11, color: T.teal, background: "none", border: "none", cursor: "pointer", fontWeight: 600, fontFamily: T.sans }}>← Back</button>
              </div>

              <div className="sec-label">Edit your review</div>

              <textarea
                ref={textRef}
                className="review-textarea"
                value={editText}
                onChange={e => setEditText(e.target.value)}
                placeholder="Write about your experience with SIACC..."
                maxLength={500}
              />
              <div className="char-count">{editText.length}/500</div>

              {/* Info box */}
              <div style={{ background: T.tealLight, border: `1px solid #B2DADA`, borderRadius: 12, padding: "12px 16px", display: "flex", gap: 10, alignItems: "flex-start", margin: "16px 0 20px" }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>💡</span>
                <p style={{ fontSize: 12, color: T.muted, lineHeight: 1.65, margin: 0 }}>
                  Your review will be <strong style={{ color: T.slate }}>copied to clipboard</strong> automatically. Just paste it on Google and hit submit!
                </p>
              </div>

              <button
                className="btn-google"
                onClick={handlePostToGoogle}
                disabled={!editText.trim()}
                style={{ opacity: editText.trim() ? 1 : 0.5, pointerEvents: editText.trim() ? "auto" : "none" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Post Review on Google
              </button>

              <button className="btn-ghost" style={{ marginTop: 10 }} onClick={() => setStage(STAGE.SUGGEST)}>
                ← Back to suggestions
              </button>
            </div>
          )}

          {/* ═══ STAGE: DONE ═══ */}
          {stage === STAGE.DONE && (
            <div style={{ textAlign: "center", animation: "fadeUp 0.5s ease both", paddingTop: 16 }}>
              <div className="done-icon">🎉</div>

              <h2 style={{ fontFamily: T.serif, fontSize: 26, color: T.slate, fontWeight: 700, marginBottom: 10 }}>
                Thank You!
              </h2>
              <p style={{ fontSize: 14, color: T.muted, lineHeight: 1.75, marginBottom: 28 }}>
                Your review helps thousands of businesses trust SIACC for their compliance journey.
              </p>

              {/* Stars */}
              <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 24 }}>
                {[1,2,3,4,5].map(s => (
                  <span key={s} style={{ fontSize: 28, color: s <= rating ? "#F59E0B" : "#E5E7EB", filter: s <= rating ? "drop-shadow(0 2px 4px rgba(245,158,11,0.4))" : "none" }}>★</span>
                ))}
              </div>

              {/* Impact card */}
              <div style={{ background: T.white, border: `1.5px solid ${T.border}`, borderRadius: 16, padding: "20px 24px", marginBottom: 24, textAlign: "left" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: T.teal, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Your impact</div>
                {[
                  { icon: "🤝", text: "Helps businesses find trusted compliance experts" },
                  { icon: "🌟", text: "Builds community trust in Indian regulatory guidance" },
                  { icon: "📈", text: "Supports SIACC's mission to simplify compliance" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", padding: "8px 0", borderBottom: i < 2 ? `1px solid ${T.border}` : "none" }}>
                    <span style={{ fontSize: 16 }}>{item.icon}</span>
                    <span style={{ fontSize: 13, color: T.body }}>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Paste reminder */}
              <div style={{ background: "#FEF3DC", border: `1px solid #F5C94E`, borderRadius: 12, padding: "12px 16px", marginBottom: 24, display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>📋</span>
                <p style={{ fontSize: 12, color: "#92400E", lineHeight: 1.6, margin: 0, textAlign: "left" }}>
                  <strong>Your review was copied!</strong> Just paste it in the Google review box that opened.
                </p>
              </div>

              <button className="btn-primary" onClick={reset}>
                ⭐ Leave Another Review
              </button>

              <p style={{ fontSize: 12, color: T.muted, marginTop: 20 }}>
                siacc.co.in · +91-9540190334
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}