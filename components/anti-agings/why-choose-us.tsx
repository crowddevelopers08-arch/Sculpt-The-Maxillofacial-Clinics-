"use client"

import { useState } from "react";

const departments = [
  { id: 1, label: "Doctor-led care by\nDr. Priyanka Raj",          icon: "/icons6.png" },
  { id: 2, label: "Personalised anti-aging\nplans for every face",  icon: "/icons1.png" },
  { id: 3, label: "Natural-looking results,\nnever overdone",       icon: "/icons-2.png" },
  { id: 4, label: "Precision treatment for\nlines & volume loss",   icon: "/icons3.png" },
  { id: 5, label: "Minimal downtime,\nmaximum confidence",          icon: "/iocns4.png" },
  { id: 6, label: "Advanced techniques\nwith safety-first care",    icon: "/icons5.png" },
];

export default function Departments() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Desktop constants — untouched
  const BG_HEIGHT  = 350;
  const CARD_HEIGHT = 220;
  const OVERLAP    = 160;
  const CARD_TOP   = BG_HEIGHT - OVERLAP;

  const prev = () => setCurrentIndex((i) => (i === 0 ? departments.length - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i === departments.length - 1 ? 0 : i + 1));

  return (
    <section id="why-us"
      className="w-full flex flex-col items-center justify-center py-10 px-6"
      style={{ background: "var(--aa-surface, #ffffff)", fontFamily: "'Segoe UI', sans-serif" }}
    >

      {/* ══════════════════════════════════════
          DESKTOP layout (lg+) — completely untouched
      ══════════════════════════════════════ */}
      <div className="hidden lg:flex flex-col items-center w-full">
        <div
          className="relative w-full"
          style={{
            maxWidth: 1160,
            height: BG_HEIGHT + (CARD_HEIGHT - OVERLAP) + 40,
          }}
        >
          {/* Blue gradient background */}
          <div
            className="absolute left-0 right-0 top-0 overflow-hidden"
            style={{
              height: BG_HEIGHT,
              borderRadius: 28,
              background: "linear-gradient(130deg, #f3ead1 0%, var(--aa-accent-soft, #c99500) 30%, #ead8a2 60%, #fbf7ea 100%)",
            }}
          >
            <div className="absolute" style={{ top: -60, left: "28%", width: 260, height: 380, background: "rgba(255,255,255,0.13)", transform: "rotate(-18deg)", borderRadius: 60 }} />
            <div className="absolute" style={{ top: 28, right: 120, width: 64, height: 64, borderRadius: "50%", background: "rgba(201,149,0,0.28)" }} />
            <div className="absolute" style={{ top: 84, right: 64, width: 9, height: 9, borderRadius: "50%", background: "var(--aa-primary, #c99500)", opacity: 0.4 }} />
          </div>

          {/* Heading */}
          <h2
            className="absolute left-0 right-0 text-center font-extrabold text-white"
            style={{ top: 48, fontSize: 30, zIndex: 2, letterSpacing: "0.01em", lineHeight: 1.3 }}
          >
            Why We're Bangalore's #1 Choice<br />for Anti-Aging Treatments
          </h2>

          {/* Cards row */}
          <div
            className="absolute left-0 right-0 flex flex-row items-stretch gap-4"
            style={{ top: CARD_TOP, paddingLeft: 40, paddingRight: 40, zIndex: 10 }}
          >
            {departments.map((dept) => {
              const isActive = hovered === dept.id;
              return (
                <div
                  key={dept.id}
                  onMouseEnter={() => setHovered(dept.id)}
                  onMouseLeave={() => setHovered(null)}
                  className="flex flex-col items-center justify-center cursor-pointer"
                  style={{
                    flex: 1,
                    height: CARD_HEIGHT,
                    borderRadius: 20,
                    padding: "28px 16px 24px",
                    background: isActive ? "var(--aa-primary-dark, #c99500)" : "#ffffff",
                    boxShadow: isActive ? "0 12px 36px rgba(201,149,0,0.28)" : "0 4px 24px rgba(201,149,0,0.10)",
                    transition: "all 0.25s ease",
                  }}
                >
                  <div className="mb-4 flex items-center justify-center">
                    <img src={dept.icon} alt="" width={64} height={64} />
                  </div>
                  <p
                    className="text-center font-bold leading-snug"
                    style={{ color: isActive ? "#ffffff" : "var(--aa-heading, #1F1F1F)", fontSize: "0.97rem", transition: "color 0.25s ease" }}
                  >
                    {dept.label.split("\n").map((line, i) => (
                      <span key={i}>{line}{i === 0 && <br />}</span>
                    ))}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Left Arrow */}
          <button
            className="absolute flex items-center justify-center"
            style={{ left: -5, top: CARD_TOP + CARD_HEIGHT / 2, transform: "translateY(-50%)", width: 40, height: 40, borderRadius: 8, background: "linear-gradient(90deg, var(--aa-primary, #c99500) 0%, var(--aa-primary-dark, #c99500) 100%)", boxShadow: "0 2px 12px rgba(201,149,0,0.15)", border: "none", cursor: "pointer", zIndex: 20 }}
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
              <path d="M15 18l-6-6 6-6" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            className="absolute flex items-center justify-center"
            style={{ right: -5, top: CARD_TOP + CARD_HEIGHT / 2, transform: "translateY(-50%)", width: 40, height: 40, borderRadius: 8, background: "linear-gradient(90deg, var(--aa-primary, #c99500) 0%, var(--aa-primary-dark, #c99500) 100%)", boxShadow: "0 2px 12px rgba(201,149,0,0.15)", border: "none", cursor: "pointer", zIndex: 20 }}
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
              <path d="M9 18l6-6-6-6" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════
          MOBILE / TABLET carousel (< lg)
      ══════════════════════════════════════ */}
      <div className="flex flex-col items-center w-full lg:hidden">

        {/* Blue gradient banner with heading */}
        <div
          className="relative w-full overflow-hidden flex flex-col items-center justify-center"
          style={{
            borderRadius: 24,
            background: "linear-gradient(130deg, #f3ead1 0%, var(--aa-accent-soft, #c99500) 30%, #ead8a2 60%, #fbf7ea 100%)",
            padding: "40px 24px 80px",
          }}
        >
          {/* Decorative */}
          <div className="absolute" style={{ top: -30, left: "20%", width: 160, height: 220, background: "rgba(255,255,255,0.13)", transform: "rotate(-18deg)", borderRadius: 40 }} />
          <div className="absolute" style={{ top: 16, right: 40, width: 44, height: 44, borderRadius: "50%", background: "rgba(201,149,0,0.28)" }} />

          <h2
            className="text-center font-extrabold text-white relative z-10"
            style={{ fontSize: 22, lineHeight: 1.35, letterSpacing: "0.01em" }}
          >
            Why We're Bangalore's #1 Choice<br />for Anti-Aging Treatments
          </h2>
        </div>

        {/* Card — pulled up to overlap the banner */}
        <div className="relative w-full flex items-center justify-center" style={{ marginTop: -60, paddingBottom: 8 }}>

          {/* Prev arrow */}
          <button
            onClick={prev}
            className="absolute flex items-center justify-center z-20"
            style={{ left: 0, width: 38, height: 38, borderRadius: 8, background: "linear-gradient(90deg, var(--aa-primary, #c99500) 0%, var(--aa-primary-dark, #c99500) 100%)", boxShadow: "0 2px 12px rgba(201,149,0,0.18)", border: "none", cursor: "pointer" }}
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
              <path d="M15 18l-6-6 6-6" stroke="var(--aa-primary, #c99500)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Active card */}
          <div
            className="flex flex-col items-center justify-center"
            style={{
              width: "calc(100% - 100px)",
              minHeight: 220,
              borderRadius: 20,
              padding: "28px 20px 24px",
              background: "#ffffff",
              boxShadow: "0 8px 32px rgba(201,149,0,0.14)",
              transition: "all 0.3s ease",
            }}
          >
            <div className="mb-4 flex items-center justify-center">
              <img src={departments[currentIndex].icon} alt="" width={64} height={64} />
            </div>
            <p className="text-center font-bold leading-snug" style={{ color: "var(--aa-heading, #1F1F1F)", fontSize: "0.97rem" }}>
              {departments[currentIndex].label.split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </p>
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            className="absolute flex items-center justify-center z-20"
            style={{ right: 0, width: 38, height: 38, borderRadius: 8, background: "linear-gradient(90deg, var(--aa-primary, #c99500) 0%, var(--aa-primary-dark, #c99500) 100%)", boxShadow: "0 2px 12px rgba(201,149,0,0.18)", border: "none", cursor: "pointer" }}
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
              <path d="M9 18l6-6-6-6" stroke="var(--aa-primary, #c99500)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center gap-2 mt-4">
          {departments.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              style={{
                width: i === currentIndex ? 20 : 8,
                height: 8,
                borderRadius: 4,
                background: "linear-gradient(90deg, var(--aa-primary, #c99500) 0%, var(--aa-primary-dark, #c99500) 100%)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CTA Button — shown on all screens */}
      <div className="flex justify-center mt-5">
        <button
          style={{
            background: "linear-gradient(90deg, var(--aa-primary, #c99500) 0%, var(--aa-primary-dark, #c99500) 100%)",
            color: "#fff",
            fontWeight: 700,
            padding: "11px 20px",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 18px rgba(201,149,0,0.35)",
            letterSpacing: "0.02em",
            fontSize: "0.9rem",
          }}
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Book your Consultation
        </button>
      </div>
    </section>
  );
}




