"use client"

import Image from "next/image";

export default function HeroBanner() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "var(--aa-surface, #ffffff)" }}
    >
      {/* ── HERO ── */}
      <div className="flex-1 flex flex-col lg:flex-row items-center px-8 md:px-16 pb-10 lg:pb-0 gap-8 max-sm:gap-3 lg:gap-0">

        {/* ══ LEFT — 60% ══ */} 
        <div className="w-full lg:w-[70%] flex flex-col gap-8 max-sm:gap-4 lg:pl-15 xl:pl-20 py-6 lg:py-0">

          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div
              className="h-px w-10"
              style={{ background: "linear-gradient(90deg,var(--aa-primary, #c99500),transparent)" }}
            />
            <span
              className="text-xs font-bold tracking-[0.18em] uppercase"
              style={{ color: "var(--aa-primary, #c99500)" }}
            >
             Cranio Maxillofacial-Surgeon · Bangalore
            </span>
          </div>

          {/* Headline */}
          <div className="flex flex-col leading-none gap-1">
            <span
              className="font-black italic"
              style={{
                fontSize: "clamp(3rem,5vw,5rem)",
                color: "var(--aa-accent-soft, #c99500)",
                lineHeight: 1,
              }}
            >
              Age Gracefully.
            </span>
            <span
              className="font-black"
              style={{
                fontSize: "clamp(3rem,5vw,5rem)",
                color: "var(--aa-heading, #1F1F1F)",
                lineHeight: 1,
              }}
            >
              Look Stunning.
            </span>
          </div>

          {/* Sub */}
          <p
            className="text-base leading-[1.75]"
            style={{ color: "var(--aa-body, #333333)", maxWidth: "460px" }}
          >
            Clinically proven anti-aging treatments designed around{" "}
            <span className="font-semibold" style={{ color: "var(--aa-heading, #1F1F1F)" }}>
              your skin, your face, your natural beauty
            </span>{" "}
            — supervised every step by a certified Cranio Maxillofacial-Surgeon.
          </p>

          {/* Stats row */}
          <div
            className="flex items-center gap-0 rounded-2xl overflow-hidden border"
            style={{ borderColor: "var(--aa-border, #e5d8b5)", maxWidth: "586px" }}
          >
            {[
              { val: "4.9★", label: "Google" },
              { val: "13+", label: "Yrs Exp" },
              { val: "1000+", label: "Patients" },
              { val: "100%", label: "Cranio Maxillofacial-Surgeon" },
            ].map((s, i) => (
              <div
                key={s.label}
                className="flex-1 flex flex-col items-center py-3.5 px-2"
                style={{
                  backgroundColor: i % 2 === 0 ? "white" : "var(--aa-surface-tint, #f4eee0)",
                  borderRight: i < 3 ? "1px solid var(--aa-border, #e5d8b5)" : "none",
                }}
              >
                <span className="font-black text-sm" style={{ color: "var(--aa-primary-dark, #c99500)" }}>{s.val}</span>
                <span className="text-[10px] mt-0.5" style={{ color: "var(--aa-muted, #6b7280)" }}>{s.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              className="group flex items-center gap-2 sm:gap-3 px-5 py-3 sm:px-8 sm:py-4 rounded-2xl text-xs sm:text-sm font-bold text-white transition-all duration-200 hover:shadow-2xl hover:scale-[1.02]"
              style={{
                background: "linear-gradient(90deg, var(--aa-primary, #c99500) 0%, var(--aa-primary-dark, #c99500) 100%)",
                boxShadow: "0 8px 24px rgba(139,108,13,0.38)",
              }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book My Appointment Now
              <span
                className="flex items-center justify-center w-7 h-7 rounded-xl transition-transform group-hover:translate-x-0.5"
                style={{ backgroundColor: "rgba(255,255,255,0.18)" }}
              >
                <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* ══ RIGHT — 40% ══ */}
        <div
          className="relative w-full lg:w-[40%] flex-shrink-0 flex flex-col items-center justify-center"
          
        >
          {/* Soft glow behind arch */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: "420px",
              height: "420px",
              background: "radial-gradient(circle,#f1dfb1 0%,transparent 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              filter: "blur(60px)",
              zIndex: 0,
            }}
          />

          {/* Arch image container */}
          <div
            className="relative overflow-hidden"
            style={{
              width: "clamp(260px,34vw,500px)",
              height: "clamp(380px,46vw,560px)",
              borderRadius: "999px 999px 2.5rem 2.5rem",
              boxShadow: "0 32px 80px rgba(139,108,13,0.22), 0 8px 24px rgba(0,0,0,0.10)",
              zIndex: 1,
            }}
          >
            <Image
              src="/banner.png"
              alt="Anti-aging treatment in Bangalore"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="(max-width: 1024px) 80vw, 400px"
              priority
            />

            {/* Inner shadow overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(139,108,13,0.08) 0%, transparent 40%, rgba(31,31,31,0.50) 100%)",
              }}
            />

            {/* Floating: top-center badge */}
            <div
              className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap"
              style={{
                backgroundColor: "rgba(255,255,255,0.90)",
                backdropFilter: "blur(8px)",
                color: "var(--aa-primary-dark, #c99500)",
                boxShadow: "0 2px 12px rgba(139,108,13,0.15)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: "var(--aa-primary, #c99500)" }}
              />
              Cranio Maxillofacial-Surgeon
            </div>

            {/* Floating: bottom card */}
            <div
              className="absolute bottom-5 left-4 right-4 px-4 py-3 rounded-2xl"
              style={{
                backgroundColor: "rgba(255,255,255,0.13)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-bold text-sm">4.9 / 5 Rating</p>
                  <p className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.60)" }}>
                    500+ Google Reviews
                  </p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 12 12" fill="#F4C430" className="w-3 h-3">
                      <path d="M6 1l1.12 3.45H10.5L7.82 6.6l1.12 3.45L6 8 3.06 10.05l1.12-3.45L1.5 4.45H4.88z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Side stat card — overlapping left edge */}
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1 px-4 py-4 rounded-2xl"
            style={{
              backgroundColor: "white",
              boxShadow: "0 8px 32px rgba(139,108,13,0.12)",
              border: "1px solid var(--aa-border, #e5d8b5)",
              zIndex: 2,
            }}
          >
            <span className="font-black text-2xl leading-none" style={{ color: "var(--aa-primary-dark, #c99500)" }}>1000</span>
            <span className="font-black text-sm leading-none" style={{ color: "var(--aa-accent, #c99500)" }}>+</span>
            <span className="text-[10px] text-center leading-tight" style={{ color: "var(--aa-muted, #6b7280)" }}>Happy<br />Patients</span>
          </div>
        </div>
      </div>
    </section>
  );
}



