'use client'

import React from "react";

export default function Navbar() {
  return (
    <nav
      className="w-full flex items-center justify-between px-6 md:px-55 py-4"
      style={{
        background: "#ffffff",
        boxShadow: "0 2px 12px rgba(201,149,0,0.08)",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      {/* ── LEFT: Logo ── */}
      <a href="/" className="flex items-center gap-2" style={{ textDecoration: "none" }}>
        {/* Logo image */}
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            width: 140,
            height: 60,
            borderRadius: 10,
            objectFit: "cover",
            filter: "none",
          }}
        />
      </a>

      {/* ── RIGHT: Phone button ── */}
      <button
        onClick={() => window.location.href = "tel:+919876543210"}
        className="flex items-center gap-2 font-semibold"
        style={{
          background: "linear-gradient(90deg, var(--aa-primary, #c99500) 0%, var(--aa-primary-dark, #c99500) 100%)",
          color: "white",
          border: "none",
          borderRadius: "8px",
          padding: "8px 16px",
          fontSize: "0.97rem",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 2px 8px rgba(201,149,0,0.2)",
        }}
        onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
          const target = e.currentTarget;
          target.style.transform = "translateY(-2px)";
          target.style.boxShadow = "0 4px 12px rgba(201,149,0,0.3)";
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
          const target = e.currentTarget;
          target.style.transform = "translateY(0)";
          target.style.boxShadow = "0 2px 8px rgba(201,149,0,0.2)";
        }}
      >
        {/* Phone icon */}
        <div
          className="flex items-center justify-center"
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.2)",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            width="18"
            height="18"
          >
            <path
              d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="hidden sm:inline">+91 98765 43210</span>
      </button>
    </nav>
  );
}




