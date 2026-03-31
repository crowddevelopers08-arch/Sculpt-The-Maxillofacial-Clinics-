"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const surgeryAllImages = [
  "/Before-After-Creatives-02.jpeg",
  "/Before-After-Creatives.jpeg",
  "/BeforeAfterCreatives.jpeg",
];

// ── Eyebrow pill ──────────────────────────────────────────────────────────────
function SurgerySectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-1.5 text-sm font-medium shadow-sm"
      style={{
        borderColor: "var(--aa-border, #e5d8b5)",
        color: "var(--aa-primary, #c99500)",
      }}
    >
      <span
        className="h-2 w-2 rounded-full inline-block"
        style={{ background: "var(--aa-primary, #c99500)" }}
      />
      {children}
    </span>
  );
}

// ── Cycling image frame ───────────────────────────────────────────────────────
function SurgeryCyclingFrame({
  images,
  delay = 0,
}: {
  images: string[];
  delay?: number;
}) {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Delayed start
    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setFading(true);
        setTimeout(() => {
          setCurrent((prev) => (prev + 1) % images.length);
          setFading(false);
        }, 500);
      }, 3500);
    }, delay);

    // Proper cleanup for both timeout AND interval
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images.length, delay]);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-gray-100 shadow-lg aspect-[4/3]">
      {/* Image */}
      <div className="relative w-full h-full">
        <Image
          src={images[current]}
          alt="Patient result"
          fill
          sizes="(max-width: 768px) 90vw, 45vw"
          className={`object-cover transition-opacity duration-500 ${
            fading ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
        {images.map((_, i) => (
          <span
            key={i}
            className={`block rounded-full transition-all duration-300 ${
              i === current ? "w-4 h-2 bg-white" : "w-2 h-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────
export function SurgeryResultsSection() {
  return (
    <section
      id="surgery-results"
      className="w-full bg-white py-16 px-4 sm:px-8 lg:px-20"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT — Content */}
        <div className="flex flex-col gap-6">
          <SurgerySectionEyebrow>The Evidence</SurgerySectionEyebrow>

          <h2
            className="text-4xl md:text-5xl font-black leading-tight"
            style={{ color: "var(--aa-heading, #1F1F1F)" }}
          >
            Real Results. Refreshed <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, var(--aa-primary, #c99500), var(--aa-accent, #c99500))",
              }}
            >
              Appearance. Natural Expressions.
            </span>
          </h2>

          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--aa-body, #333333)" }}
          >
            See how personalised anti-ageing treatments at Sculpt can help
            soften visible lines, restore facial freshness, and create a
            naturally refreshed appearance.
          </p>

          {/* Stats */}
          <div className="flex items-center gap-8 mt-2">
            <div className="flex flex-col gap-1">
              <strong
                className="text-3xl font-black"
                style={{ color: "var(--aa-heading, #1F1F1F)" }}
              >
                2,500+
              </strong>
              <span
                className="text-sm"
                style={{ color: "var(--aa-body, #333333)" }}
              >
                Procedures Completed
              </span>
            </div>
            <div
              className="w-px h-12"
              style={{ background: "var(--aa-border, #e5d8b5)" }}
            />
            <div className="flex flex-col gap-1">
              <strong
                className="text-3xl font-black"
                style={{ color: "var(--aa-heading, #1F1F1F)" }}
              >
                15+
              </strong>
              <span
                className="text-sm"
                style={{ color: "var(--aa-body, #333333)" }}
              >
                Years of Experience
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT — Cycling gallery */}
        <div className="relative w-full">
          {/* Soft aura glow behind the frame */}
          <div
            className="absolute inset-0 -z-10 rounded-3xl blur-3xl opacity-60 scale-90"
            style={{ background: "var(--aa-border, #e5d8b5)" }}
          />
          <SurgeryCyclingFrame images={surgeryAllImages} delay={0} />
        </div>
      </div>
    </section>
  );
}
