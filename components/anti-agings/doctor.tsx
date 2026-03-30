'use client'

import { useState } from "react";

const MedicalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 12h6M12 9v6" />
    <path d="M3 9h18" />
  </svg>
);

const ToothIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path d="M12 2C9 2 6 4 6 7c0 2 .5 3.5 1 5 .5 1.5 1 3 1 5 0 1.5.5 3 2 3s2-1.5 2-3c0 1.5.5 3 2 3s2-1.5 2-3c0-2 .5-3.5 1-5 .5-1.5 1-3 1-5 0-3-3-5-6-5z" />
  </svg>
);

export default function MedicalAboutSection() {
  return (
    <section id="about-doctor" className="w-full bg-white py-10 px-4 sm:py-14 sm:px-8 lg:py-16 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

        {/* LEFT SECTION - Image Layout */}
        <div className="relative w-full lg:w-1/2 flex-shrink-0" style={{ minHeight: "clamp(300px, 80vw, 480px)" }}>

          {/* Bottom-left image (dental patient) */}
          <div
            className="absolute rounded-2xl overflow-hidden shadow-lg"
            style={{
              width: "52%",
              aspectRatio: "3/4",
              left: "0",
              top: "clamp(20px, 5vw, 40px)",
              zIndex: 1,
            }}
          >
            <img
              src="/Dr-Priyanka-Raj.jpg"
              alt="Dental patient"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top-right image (surgery/procedure) */}
          <div
            className="absolute rounded-2xl overflow-hidden shadow-lg"
            style={{
              width: "57%",
              aspectRatio: "4/3.5",
              right: "0",
              top: "0",
              zIndex: 2,
            }}
          >
            <img
              src="/doctor-clic.JPG"
              alt="Medical procedure"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Pink badge - overlapping both images */}
          <div
            className="absolute rounded-2xl flex flex-col items-start justify-center shadow-md"
            style={{
              background: "var(--aa-border, #e5d8b5)",
              width: "44%",
              bottom: "0",
              left: "38%",
              zIndex: 3,
              minHeight: "clamp(90px, 22vw, 140px)",
              padding: "clamp(10px, 3vw, 20px)",
            }}
          >
            {/* Icon circle */}
            <div
              className="rounded-full flex items-center justify-center mb-2"
              style={{
                background: "#1a1a1a",
                width: "clamp(30px, 7vw, 44px)",
                height: "clamp(30px, 7vw, 44px)",
                color: "white",
                flexShrink: 0,
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: "clamp(12px, 3vw, 20px)", height: "clamp(12px, 3vw, 20px)" }}>
                <rect x="4" y="2" width="14" height="18" rx="2" />
                <path d="M8 6h8M8 10h8M8 14h4" />
                <circle cx="17" cy="17" r="4" fill="#1a1a1a" />
                <path d="M15.5 17h3M17 15.5v3" stroke="white" strokeWidth="1.5" />
              </svg>
            </div>
            <p className="font-bold text-gray-900 leading-tight" style={{ fontSize: "clamp(10px, 2.8vw, 18px)" }}>
              12+ Years Of<br />Experience
            </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">

          {/* Tag */}
          <div
            className="inline-flex items-center gap-2 bg-white border rounded-full px-4 py-1.5 w-fit shadow-sm"
            style={{ borderColor: "var(--aa-border, #e5d8b5)" }}
          >
            <span className="w-2 h-2 rounded-full inline-block" style={{ background: "var(--aa-primary, #c99500)" }}></span>
            <span className="text-sm font-medium" style={{ color: "var(--aa-primary, #c99500)" }}>Meet Our Expert</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight" style={{ color: "var(--aa-heading, #1F1F1F)" }}>
            Dr. Priyanka Raj<br /><span className="text-2xl sm:text-3xl md:text-4xl">(MDS)</span>
          </h2>

          {/* Subtext */}
          <p className="text-base leading-relaxed" style={{ color: "var(--aa-body, #333333)" }}>
            Gold Medalist | Award-Winning Maxillofacial Surgeon | Internationally Published
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--aa-body, #333333)" }}>
            Dr. Priyanka Raj brings specialised expertise in hair restoration and facial aesthetics &amp; anti-aging treatments. She is a University rank holder during her MDS and recipient of the prestigious Gold Medal for excellence in surgery, she combines precision, safety, and artistry to deliver natural-looking results. Every consultation and procedure at Sculpt is personally led or closely supervised by her, ensuring refined outcomes tailored to each face.
          </p>

          {/* CTA Button */}
          <div className="mt-2">
            <button
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-white text-base transition-all duration-200 hover:opacity-90 hover:shadow-md"
              style={{ background: "linear-gradient(90deg, var(--aa-primary, #c99500) 0%, var(--aa-primary-dark, #c99500) 100%)" }}
            >
              I'm Ready to Consult the Best
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}




