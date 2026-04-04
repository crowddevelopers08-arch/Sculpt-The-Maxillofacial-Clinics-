import Image from "next/image";
import {
  SurgeryMaterialIcon,
  SurgeryPrimaryButton,
  SurgerySectionEyebrow,
} from "../surgery-shared";

export function SurgeryHeroSection() {
  return (
    <header className="relative w-full bg-[#07070f] overflow-hidden">
      {/* Subtle radial glow behind left content */}
      <div
        className="absolute left-0 top-0 h-full w-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 20% 50%, rgba(201,149,0,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center max-sm:gap-5 gap-10 max-sm:pt-20 lg:py-14">

        {/* ── Left: content ── */}
        <div className="w-full lg:w-[65%] flex flex-col items-start justify-center">

          {/* Eyebrow */}
          <div className="flex items-center lg:pt-10 gap-3 mb-6">
            <span className="block w-8 h-px" style={{ background: "#c99500" }} />
            <SurgerySectionEyebrow>Surgical Excellence Redefined</SurgerySectionEyebrow>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{ letterSpacing: "-0.01em" }}
          >
            Concerned About Your <br />
            <span className="text-gradient">Facial Features?</span>
          </h1>

          {/* Body copy */}
          <p
            className="text-base lg:text-lg mb-8 max-w-lg"
            style={{ color: "#9a8a6a", lineHeight: 1.75, marginBottom:"10px" }}
          >
            Advanced maxillofacial procedures for jawline definition, nose
            reshaping, eye rejuvenation, and facial balance are planned with
            precision and performed safely.
          </p>

          {/* Trust badges */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
            {[
              { icon: "verified",      label: "MDS Maxillofacial Surgeon-Led" },
              { icon: "military_tech", label: "Advanced Surgical Expertise" },
              { icon: "favorite",      label: "Proven Patient Results" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-4 py-2 rounded"
                style={{
                  background: "rgba(201,149,0,0.07)",
                  border: "1px solid rgba(201,149,0,0.2)",
                  color: "#c8b882",
                  fontSize: "0.82rem",
                }}
              >
                <SurgeryMaterialIcon name={item.icon} />
                {item.label}
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="flex items-center gap-6 flex-wrap">
            <SurgeryPrimaryButton>Book My Consultation</SurgeryPrimaryButton>
            <div className="flex items-center gap-3">
              <div
                className="w-px h-10 hidden sm:block"
                style={{ background: "rgba(201,149,0,0.25)" }}
              />
              <div className="flex flex-col">
                <strong className="text-white text-base font-bold">15+ Years</strong>
                <span className="text-xs" style={{ color: "#9a8a6a" }}>Clinical Excellence</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: image ── */}
        <div className="w-full lg:w-[35%] flex items-stretch justify-center py-5 lg:py-16">
          <div
            className="relative w-full rounded-lg overflow-hidden"
            style={{
              minHeight: 460,
              // border: "1px solid rgba(201,149,0,0.28)",
              // background: "#0d0c0b",
              // boxShadow: "0 20px 60px rgba(0,0,0,0.7), 0 0 0 4px rgba(201,149,0,0.05)",
            }}
          >
            {/* Image */}
            <Image
              src="/Banner-4.png"
              alt="Clinic interior"
              fill
              priority
              style={{
                objectFit: "contain",
                objectPosition: "center",
                filter: "grayscale(20%) brightness(0.82) contrast(1.06)",
              }}
            />

            {/* Grain overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 3px)",
              }}
            />

            {/* Bottom fade */}
            <div
              className="absolute bottom-0 left-0 right-0 pointer-events-none"
              style={{
                height: "40%",
                background: "linear-gradient(to top, rgba(7,7,15,0.92) 0%, transparent 100%)",
              }}
            />

            {/* Gold top line */}
            <div
              className="absolute top-0 left-0 right-0 pointer-events-none"
              style={{
                height: 2,
                background: "linear-gradient(90deg, transparent, #c99500 35%, #c99500 65%, transparent)",
              }}
            />

            {/* Corner marks — top left */}
            <div className="absolute top-0 left-0 pointer-events-none">
              <div style={{ width: 28, height: 2, background: "#c99500" }} />
              <div style={{ width: 2, height: 28, background: "#c99500" }} />
            </div>

            {/* Corner marks — bottom right */}
            <div className="absolute bottom-0 right-0 pointer-events-none flex flex-col items-end">
              <div style={{ width: 2, height: 28, background: "rgba(201,149,0,0.4)" }} />
              <div style={{ width: 28, height: 2, background: "rgba(201,149,0,0.4)" }} />
            </div>

            {/* Bottom label */}
            {/* <div className="absolute bottom-0 left-5 right-5 flex items-center justify-between pointer-events-none">
              <div>
                <p
                  className="text-xs uppercase tracking-widest mb-0.1 font-semibold"
                  style={{ color: "#c99500", letterSpacing: "0.14em" }}
                >
                  <SurgerySectionEyebrow>Surgical Excellence Redefined</SurgerySectionEyebrow></p>
              </div>
              <div
                className="flex items-center justify-center rounded"
                style={{
                  width: 36,
                  height: 36,
                  background: "rgba(201,149,0,0.15)",
                  border: "1px solid rgba(201,149,0,0.35)",
                }}
              >
                <SurgeryMaterialIcon name="verified" />
              </div>
            </div> */}
          </div>
        </div>

      </div>
    </header>
  );
}