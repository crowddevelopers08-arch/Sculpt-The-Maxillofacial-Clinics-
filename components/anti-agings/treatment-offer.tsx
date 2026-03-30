'use client'

import { useState } from "react";

const treatments = [
  {
    id: 1,
    icon: <img src="/iconed.png" alt="" width={28} height={28} style={{ filter: "brightness(0) invert(1)" }} />,
    title: "Wrinkle-Softening Injections",
    description:
      "Relaxes facial muscles to smooth lines and crow's feet, keeping you refreshed yet natural.",
    image: "/Wrinkle-Softening.jpg",
  },
  {
    id: 2,
    icon: <img src="/iconed1.png" alt="" width={28} height={28} style={{ filter: "brightness(0) invert(1)" }} />,
    title: "Volume-Restoring Gel Treatments",
    description:
      "Restores support in cheeks, under‑eyes, jawline, and mouth to reduce hollowness and tiredness.",
    image: "/Volume-Restoring.avif",
  },
  {
    id: 3,
    icon: <img src="/iconed2.png" alt="" width={28} height={28} style={{ filter: "brightness(0) invert(1)" }} />,
    title: "Lip Balance & Definition",
    description:
      "For patients seeking subtle restoration of shape, hydration, and proportion—without an exaggerated look.",
    image: "lips.jpg",
  },
  {
    id: 4,
    icon: <img src="/iconed4.png" alt="" width={28} height={28} style={{ filter: "brightness(0) invert(1)" }} />,
    title: "Full-Face Rejuvenation Planning",
    description:
      "A balanced approach combining line‑softening & facial support for a naturally refreshed look.",
    image: "/Full-Face.avif",
  },
  {
    id: 5,
    icon: <img src="/iconed5.png" alt="" width={28} height={28} style={{ filter: "brightness(0) invert(1)" }} />,
    title: "Skin Rejuvenation Add-On Treatments",
    description:
      "Injectables paired with skin rejuvenation boost texture, glow, and overall quality.",
    image: "/Skin-Rejuvenation.avif",
  },
];

export default function TreatmentsWeOffer() {
  const [activeTab, setActiveTab] = useState(0);
  const current = treatments[activeTab];

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ fontFamily: "Georgia, serif" }}
    >
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1600&q=80"
          alt="background"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(10,10,14,0.84)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-6 py-10 flex flex-col items-center">

        {/* Section label */}
        <p
          className="text-xs uppercase tracking-widest mb-3 font-semibold"
          style={{ color: "var(--aa-accent-soft, #c99500)", letterSpacing: "0.18em" }}
        >
          Treatments We Offer
        </p>

        {/* Main Headline */}
        <h2
          className="text-4xl md:text-5xl font-bold text-white text-center max-sm:mb-6 mb-16"
          style={{ letterSpacing: "0.01em" }}
        >
          Anti-Ageing Treatments We Offer
        </h2>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 w-full">

          {/* ── Left side ── */}
          <div className="flex flex-col items-start w-full md:w-1/2">

            {/* Icon tabs row */}
            <div className="flex flex-row items-center gap-4 max-sm:mb-6 mb-10">
              {treatments.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(idx)}
                  className="flex items-center justify-center rounded-full focus:outline-none"
                  style={{
                    width: 68,
                    height: 68,
                    transition: "all 0.25s ease",
                    background:
                      "linear-gradient(90deg, var(--aa-primary, #c99500) 0%, var(--aa-primary-dark, #c99500) 100%)",
                    boxShadow:
                      activeTab === idx
                        ? "0 0 0 4px rgba(201,149,0,0.38), 0 6px 20px rgba(201,149,0,0.38)"
                        : "0 4px 14px rgba(201,149,0,0.2)",
                    transform: activeTab === idx ? "scale(1.13)" : "scale(1)",
                    opacity: activeTab === idx ? 1 : 0.82,
                  }}
                  aria-label={t.title}
                >
                  {t.icon}
                </button>
              ))}
            </div>

            {/* Active treatment title */}
            <h3
              className="text-xl font-bold text-white max-sm:mb-2 mb-4"
              style={{ letterSpacing: "0.01em" }}
            >
              {current.title}
            </h3>

            {/* Active treatment description */}
            <p
              className="text-sm md:text-base leading-relaxed max-sm:mb-6 mb-10"
              style={{ color: "#c2ab74", maxWidth: 460 }}
            >
              {current.description}
            </p>

            {/* CTA Button */}
            <button
              className="flex items-center gap-2 px-5 py-3 sm:px-7 rounded text-sm font-semibold text-white hover:opacity-90 active:scale-95"
              style={{
                background: "linear-gradient(90deg, var(--aa-primary, #c99500) 0%, var(--aa-primary-dark, #c99500) 100%)",
                boxShadow: "0 4px 18px rgba(201,149,0,0.35)",
                letterSpacing: "0.03em",
                fontSize: "0.97rem",
                transition: "all 0.2s ease",
              }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2" strokeLinecap="round"/>
              </svg>
              Start your Diagnosis Today
            </button>

            {/* Divider */}
            <div
              className="mt-10 w-full"
              style={{ height: "1px", background: "rgba(255,255,255,0.13)" }}
            />
          </div>

          {/* ── Right side — image ── */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src={current.image}
              alt="Anti-ageing skin treatment"
              className="w-full object-cover"
              style={{
                maxWidth: 560,
                height: 300,
                borderRadius: 6,
                display: "block",
                objectPosition: "center top",
              }}
            />
          </div>
        </div>

        {/* Bottom divider */}
        <div
          className="mt-10 max-sm:mt-5 w-full"
          style={{ height: "1px", background: "rgba(255,255,255,0.1)" }}
        />
      </div>
    </section>
  );
}




