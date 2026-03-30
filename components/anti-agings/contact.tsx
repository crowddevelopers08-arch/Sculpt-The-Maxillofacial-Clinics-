"use client"

import { useState } from "react";

export default function BookAppointment() {
  const [reason, setReason] = useState("New Patient Visit");
  const [department, setDepartment] = useState("Obstetrics and Gynecology");

  return (
    <section
      id="contact"
      className="w-full flex items-center justify-center px-4 py-10 lg:px-8 lg:py-14 overflow-x-hidden"
      style={{ background: "#ffffff", fontFamily: "'Segoe UI', sans-serif" }}
    >
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-start gap-8 lg:gap-16">

        {/* ── LEFT: Form ── */}
        <div className="flex flex-col flex-1 w-full lg:max-w-[620px]">

          {/* Heading */}
          <p className="font-bold text-sm mb-1" style={{ color: "var(--aa-primary, #c99500)", letterSpacing: "0.08em" }}>
            BOOK AN
          </p>
          <h2 className="font-extrabold max-sm:mb-4 mb-8 text-3xl lg:text-[42px]" style={{ color: "var(--aa-heading, #1F1F1F)", lineHeight: 1.1 }}>
            Appointment
          </h2>

          {/* Decorative dot */}
          <div className="flex justify-center max-sm:mb-0 mb-6">
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--aa-primary, #c99500)", opacity: 0.5 }} />
          </div>

          {/* Row 1: Name + Phone */}
          <div className="flex flex-col sm:flex-row max-sm:gap-2 gap-5 max-sm:mb-2 mb-6">
            <div className="flex flex-col flex-1">
              <label className="text-sm font-medium mb-2" style={{ color: "#374151" }}>Name</label>
              <input
                type="text"
                placeholder="David John"
                className="w-full outline-none"
                style={{
                  border: "1.5px solid #cbd5e1",
                  borderRadius: 50,
                  padding: "14px 22px",
                  fontSize: "0.95rem",
                  color: "var(--aa-muted, #6b7280)",
                  background: "#fff",
                }}
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-sm font-medium mb-2" style={{ color: "#374151" }}>Phone Number</label>
              <input
                type="text"
                placeholder="(123) 456 – 789"
                className="w-full outline-none"
                style={{
                  border: "1.5px solid #cbd5e1",
                  borderRadius: 50,
                  padding: "14px 22px",
                  fontSize: "0.95rem",
                  color: "var(--aa-muted, #6b7280)",
                  background: "#fff",
                }}
              />
            </div>
          </div>

          {/* Row 2: Medical Record Number (full width) */}
          <div className="flex flex-col max-sm:mb-2 mb-6">
            <label className="text-sm font-medium mb-2" style={{ color: "#374151" }}>Medical Record Number</label>
            <input
              type="text"
              placeholder="123456–7890–0987"
              className="w-full outline-none"
              style={{
                border: "1.5px solid #cbd5e1",
                borderRadius: 50,
                padding: "14px 22px",
                fontSize: "0.95rem",
                color: "var(--aa-muted, #6b7280)",
                background: "#fff",
              }}
            />
          </div>

          {/* Row 3: Preferred Date + Preferred Time */}
          <div className="flex flex-col sm:flex-row gap-5 max-sm:gap-2 max-sm:mb-2 mb-6">
            <div className="flex flex-col flex-1">
              <label className="text-sm font-medium mb-2" style={{ color: "#374151" }}>Preferred Date</label>
              <div
                className="flex items-center gap-3"
                style={{
                  border: "1.5px solid #cbd5e1",
                  borderRadius: 50,
                  padding: "14px 22px",
                }}
              >
                {/* Calendar icon */}
                <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
                  <rect x="2" y="4" width="16" height="14" rx="2" stroke="var(--aa-primary, #c99500)" strokeWidth="1.5"/>
                  <path d="M6 2v4M14 2v4M2 8h16" stroke="var(--aa-primary, #c99500)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span style={{ color: "var(--aa-muted, #6b7280)", fontSize: "0.95rem" }}>August 24, 2023</span>
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-sm font-medium mb-2" style={{ color: "#374151" }}>Preferred Time</label>
              <div
                className="flex items-center gap-3"
                style={{
                  border: "1.5px solid #cbd5e1",
                  borderRadius: 50,
                  padding: "14px 22px",
                }}
              >
                {/* Clock icon */}
                <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
                  <circle cx="10" cy="10" r="8" stroke="var(--aa-primary, #c99500)" strokeWidth="1.5"/>
                  <path d="M10 6v4l3 2" stroke="var(--aa-primary, #c99500)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span style={{ color: "var(--aa-muted, #6b7280)", fontSize: "0.95rem" }}>10:00AM</span>
              </div>
            </div>
          </div>

          {/* Reason for Visit */}
          <div className="flex flex-col mb-5">
            <label className="text-sm font-medium mb-2" style={{ color: "#374151" }}>Reason for Visit</label>
            <div className="flex flex-wrap items-center gap-4 lg:gap-6">
              {["Routine Checkup", "New Patient Visit", "Specific Concern"].map((r) => (
                <label key={r} className="flex items-center gap-2 cursor-pointer" style={{ fontSize: "0.9rem", color: "#374151" }}>
                  <div
                    onClick={() => setReason(r)}
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      border: `2px solid ${reason === r ? "var(--aa-primary, #c99500)" : "#cbd5e1"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      flexShrink: 0,
                    }}
                  >
                    {reason === r && (
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--aa-primary, #c99500)" }} />
                    )}
                  </div>
                  {r}
                </label>
              ))}
            </div>
          </div>
          {/* Submit Button */}
          <div>
            <button
              className="flex items-center gap-3 font-bold text-white"
              style={{
                background: "linear-gradient(90deg, var(--aa-primary, #c99500) 0%, var(--aa-primary-dark, #c99500) 100%)",
                border: "none",
                borderRadius: 50,
                padding: "14px 32px",
                fontSize: "0.97rem",
                cursor: "pointer",
                letterSpacing: "0.02em",
              }}
            >
              Submit
              <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
                <path d="M4 10h12M12 6l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* ── RIGHT: Blob shape + image ── */}
        <div
          className="relative flex-shrink-0 w-full lg:w-[420px]"
          style={{ height: "clamp(300px, 60vw, 560px)" }}
        >
          {/* Large blob background shape */}
          <div
            className="absolute lg:left-[-20px] lg:right-[-40px] lg:top-[20px] lg:bottom-[-20px]"
            style={{
              top: 10,
              left: 0,
              right: 0,
              bottom: -10,
              background: "var(--aa-surface-soft, #f8f7f2)",
              borderRadius: "62% 38% 46% 54% / 60% 44% 56% 40%",
              zIndex: 0,
            }}
          />

          {/* Inner image card — rounded rect */}
          <div
            className="absolute overflow-hidden"
            style={{
              top: 30,
              left: 16,
              right: 16,
              bottom: 30,
              borderRadius: 24,
              background: "#f8f3e3",
              zIndex: 1,
              boxShadow: "0 8px 32px rgba(201,149,0,0.10)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80"
              alt="Doctor"
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

      </div>
    </section>
  );
}




