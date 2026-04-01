'use client'

import { useState } from "react";

const treatments = [
  {
    id: 1,
    icon: "/iconed.png",
    title: "Fine lines & Wrinkles",
    description:
      "Relaxes facial muscles to smooth lines and crow's feet, keeping you refreshed yet natural.",
    image: "/Wrinkle-Softening.jpg",
  },
  {
    id: 2,
    icon: "/iconed1.png",
    title: "Crows feet",
    description:
      "Restores support in cheeks, under‑eyes, jawline, and mouth to reduce hollowness and tiredness.",
    image: "/woman-with.jpg",
  },
  {
    id: 3,
    icon: "/iconed2.png",
    title: "Fuller lips",
    description:
      "For patients seeking subtle restoration of shape, hydration, and proportion—without an exaggerated look.",
    image: "/lips.jpg",
  },
  {
    id: 4,
    icon: "/iconed4.png",
    title: "Forehead lines & frown lines",
    description:
      "A balanced approach combining line‑softening & facial support for a naturally refreshed look.",
    image: "/Full-Face.avif",
  },
  {
    id: 5,
    icon: "/iconed5.png",
    title: "Loss of facial volume (hollow cheeks, under eyes)",
    description:
      "Injectables paired with skin rejuvenation boost texture, glow, and overall quality.",
    image: "/Skin-Rejuvenation.avif",
  },
];

export default function TreatmentsWeOffer() {
  const [activeTab, setActiveTab] = useState(2);
  const current = treatments[activeTab];

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ fontFamily: "Georgia, serif", background: "#080808" }}
    >
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
          mixBlendMode: "overlay",
          opacity: 0.6,
        }}
      />
      {/* Top vignette glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(201,149,0,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl px-6 py-16 md:py-20 flex flex-col items-center">

        {/* Section label */}
        <p
          className="text-xs uppercase tracking-widest mb-3 font-semibold"
          style={{ color: "#c99500", letterSpacing: "0.18em" }}
        >
          Treatments We Treat
        </p>

        {/* Headline */}
        <h2
          className="text-4xl md:text-5xl font-bold text-white text-center mb-14"
          style={{ letterSpacing: "0.01em" }}
        >
          Aging Concerns that we treat
        </h2>


        {/* ── Five cards — one row ── */}
        <div className="w-full overflow-x-auto pb-3">
          <div
            className="flex gap-4"
            style={{ minWidth: 900 }}
          >
            {treatments.map((t, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(idx)}
                  className="relative flex flex-col text-left focus:outline-none shrink-0"
                  style={{
                    flex: "1 1 0",
                    minWidth: 0,
                    borderRadius: 4,
                    overflow: "hidden",
                    height: 420,
                    border: isActive
                      ? "1px solid rgba(201,149,0,0.55)"
                      : "1px solid rgba(255,255,255,0.06)",
                    boxShadow: isActive
                      ? "0 0 0 3px rgba(201,149,0,0.12), inset 0 0 60px rgba(0,0,0,0.6)"
                      : "inset 0 0 60px rgba(0,0,0,0.5)",
                    background: "#0d0c0b",
                    transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
                    transform: isActive ? "translateY(-5px)" : "translateY(0)",
                  }}
                >
                  {/* Card image — top half */}
                  <div className="relative w-full" style={{ height: 200, flexShrink: 0 }}>
                    <img
                      src={t.image}
                      alt={t.title}
                      className="w-full h-full object-cover object-center"
                      style={{
                        filter: isActive
                          ? "grayscale(30%) contrast(1.1) brightness(0.72)"
                          : "grayscale(65%) contrast(1.05) brightness(0.42)",
                        transition: "filter 0.4s ease",
                      }}
                    />
                    {/* Bottom image fade into card body */}
                    <div
                      className="absolute bottom-0 left-0 right-0"
                      style={{
                        height: 80,
                        background:
                          "linear-gradient(to bottom, transparent, #0d0c0b)",
                      }}
                    />
                    {/* Scratched-overlay strip */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(90deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 4px)",
                        mixBlendMode: "multiply",
                      }}
                    />
                    {/* Active gold top bar */}
                    {isActive && (
                      <div
                        className="absolute top-0 left-0 right-0"
                        style={{
                          height: 3,
                          background:
                            "linear-gradient(90deg, transparent, #c99500 30%, #c99500 70%, transparent)",
                        }}
                      />
                    )}
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 px-5 pt-4 pb-6">
                    {/* Icon */}
                    <div
                      className="flex items-center justify-center mb-4"
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 3,
                        background: isActive
                          ? "rgba(201,149,0,0.18)"
                          : "rgba(255,255,255,0.04)",
                        border: isActive
                          ? "1px solid rgba(201,149,0,0.4)"
                          : "1px solid rgba(255,255,255,0.07)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <img
                        src={t.icon}
                        alt=""
                        width={22}
                        height={22}
                        style={{
                          filter: isActive
                            ? "brightness(0) saturate(100%) invert(73%) sepia(61%) saturate(600%) hue-rotate(5deg)"
                            : "brightness(0) invert(1) opacity(0.35)",
                          transition: "filter 0.3s ease",
                        }}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className="font-bold mb-2 leading-snug"
                      style={{
                        fontSize: "0.93rem",
                        color: isActive ? "#e8d9b0" : "#c8b48a",
                        letterSpacing: "0.01em",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {t.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: "0.78rem",
                        lineHeight: 1.65,
                        color: isActive ? "#8a7a58" : "#8a7a62",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {t.description}
                    </p>
                  </div>

                  {/* Bottom gold line */}
                  <div
                    className="absolute bottom-0 left-0 right-0"
                    style={{
                      height: 2,
                      background: isActive
                        ? "linear-gradient(90deg, transparent, rgba(201,149,0,0.6), transparent)"
                        : "transparent",
                      transition: "background 0.3s ease",
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Active treatment detail + CTA ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 w-full mt-10 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-1 font-semibold"
              style={{ color: "rgba(201,149,0,0.55)", letterSpacing: "0.14em" }}
            >
              Selected
            </p>
            <p
              className="font-bold"
              style={{ color: "#c8b882", fontSize: "1rem" }}
            >
              {current.title}
            </p>
          </div>

          <button
            className="flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold text-white hover:opacity-90 active:scale-95 shrink-0"
            style={{
              background: "linear-gradient(90deg, #c99500 0%, #a87b00 100%)",
              boxShadow: "0 4px 18px rgba(201,149,0,0.3)",
              letterSpacing: "0.03em",
              transition: "all 0.2s ease",
            }}
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" strokeLinecap="round" />
            </svg>
            Start your Diagnosis Today
          </button>
        </div>

        {/* Bottom divider */}
        <div
          className="mt-10 w-full"
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(201,149,0,0.18), transparent)",
          }}
        />
      </div>
    </section>
  );
}
