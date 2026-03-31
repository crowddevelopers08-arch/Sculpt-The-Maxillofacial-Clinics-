"use client"

const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

export default function WelcomePatients() {
  return (
    <section
      className="w-full flex items-center justify-center px-6 py-8"
      style={{ background: "var(--aa-surface-soft, #f8f7f2)", fontFamily: "'Segoe UI', sans-serif" }}
    >
      {/* ── Outer container ── */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          maxWidth: 1160,
          borderRadius: 24,
          minHeight: 300,
          background: "linear-gradient(120deg, #1F1F1F 0%, var(--aa-primary-dark, #c99500) 40%, var(--aa-primary, #c99500) 70%, var(--aa-accent, #c99500) 100%)",
        }}
      >

        {/* ── Decorative neural/network lines SVG (bottom-left area) ── */}
        <svg
          className="absolute"
          style={{ bottom: 0, left: 0, width: 420, height: 260, opacity: 0.18, zIndex: 0 }}
          viewBox="0 0 420 260"
          fill="none"
        >
          <line x1="60" y1="260" x2="200" y2="80"  stroke="white" strokeWidth="1"/>
          <line x1="60" y1="260" x2="320" y2="120" stroke="white" strokeWidth="1"/>
          <line x1="60" y1="260" x2="380" y2="200" stroke="white" strokeWidth="1"/>
          <line x1="200" y1="80"  x2="320" y2="120" stroke="white" strokeWidth="1"/>
          <line x1="200" y1="80"  x2="380" y2="200" stroke="white" strokeWidth="1"/>
          <line x1="320" y1="120" x2="380" y2="200" stroke="white" strokeWidth="1"/>
          <line x1="130" y1="260" x2="200" y2="80"  stroke="white" strokeWidth="1"/>
          <line x1="0"   y1="180" x2="200" y2="80"  stroke="white" strokeWidth="1"/>
          <line x1="0"   y1="180" x2="320" y2="120" stroke="white" strokeWidth="1"/>
          <circle cx="60"  cy="260" r="3" fill="white"/>
          <circle cx="200" cy="80"  r="3" fill="white"/>
          <circle cx="320" cy="120" r="3" fill="white"/>
          <circle cx="380" cy="200" r="3" fill="white"/>
          <circle cx="0"   cy="180" r="3" fill="white"/>
          <circle cx="130" cy="260" r="3" fill="white"/>
        </svg>

        {/* ── LEFT: Text content ── */}
        <div
          className="relative flex flex-col justify-center w-full lg:w-[52%] p-8 max-sm:p-4 lg:pt-11 lg:pb-11 lg:pl-12 lg:pr-0"
          style={{
            minHeight: 300,
            zIndex: 2,
          }}
        >
          {/* Label row */}
          <div className="flex items-center justify-center gap-2 mb-4">
            {/* Plus / cross icon */}
            <svg viewBox="0 0 20 20" fill="white" width="16" height="16">
              <path d="M9 2h2v6h6v2h-6v6H9v-6H3V8h6V2z"/>
            </svg>
            <span className="text-white font-semibold text-sm" style={{ letterSpacing: "0.02em" }}>
              Ready to Soften the Signs of Ageing?
            </span>
          </div>

          {/* Main heading */}
          <h2
            className="flex items-center font-extrabold text-white leading-tight mb-5 text-2xl sm:text-3xl lg:text-[40px]"
            style={{ maxWidth: 420 }}
          >
            Ready to Soften the<br />Signs of Ageing?
          </h2>

          {/* Description */}
          <p
            className="text-white mb-8 leading-relaxed w-full lg:max-w-[400px]"
            style={{ fontSize: "0.97rem", opacity: 0.9 }}
          >
            From visible lines to tired-looking features, Sculpt offers doctor-led anti-aging treatments designed to restore freshness, balance, and confidence with natural-looking results.
          </p>

          {/* CTA Button */}
          <div className="flex items-center justify-center">
            <button
              className="flex items-center justify-center gap-2 font-bold text-white"
              style={{
                background: "linear-gradient(90deg, var(--aa-surface-soft, #c99500) 0%, var(--aa-surface-soft, #c99500) 100%)",
                border: "none",
                color: "#000",
                borderRadius: 10,
                padding: "11px 18px",
                fontSize: "0.9rem",
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(201,149,0,0.35)",
                letterSpacing: "0.02em",
              }}
            onClick={scrollToContact}
            >
              Claim your Consultation
              <span
                className="flex items-center justify-center"
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.25)",
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                ↗
              </span>
            </button>
          </div>
        </div>

        {/* ── RIGHT: White curved mask + image ── */}
        <div
          className="hidden lg:block absolute top-0 right-0 bottom-0"
          style={{
            width: "50%",
            zIndex: 1,
            overflow: "hidden",
            borderRadius: "55% 0 0 55% / 50% 0 0 50%",
          }}
        >
          {/* Image fills the entire clipped container */}
          <img
            src="/Dr-Priyanka-Raj.jpg"
            alt="Medical team"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />
        </div>

      </div>
    </section>
  );
}




