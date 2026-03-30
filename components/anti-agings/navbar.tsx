"use client"

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Treatments", href: "#treatments" },
  { label: "About Doctor", href: "#about-doctor" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="w-full sticky top-0 z-50"
      style={{
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(201,149,0,0.08)",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div
        className="max-w-6xl mx-auto px-6 flex items-center justify-between"
        style={{ height: 68 }}
      >
        {/* Left — Logo Image */}
        <a href="#" style={{ textDecoration: "none", flexShrink: 0 }}>
          <img
            src="/logo.png"
            alt="Sculpt Logo"
            style={{
              height: 40,
              width: "auto",
              objectFit: "contain",
              filter: "none",
            }}
          />
        </a>

        {/* Center — Nav links (desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium relative group"
              style={{ color: "var(--aa-heading-soft, #3A3A3A)", textDecoration: "none" }}
            >
              {link.label}
              <span
                className="absolute left-0 -bottom-1 w-0 group-hover:w-full"
                style={{
                  height: 2,
                  background: "linear-gradient(90deg, var(--aa-primary, #c99500), var(--aa-accent, #c99500))",
                  borderRadius: 2,
                  transition: "width 0.25s ease",
                  display: "block",
                }}
              />
            </a>
          ))}
        </nav>

        {/* Right — CTA button (desktop) */}
        <div className="hidden md:flex items-center" style={{ flexShrink: 0 }}>
          <button
            style={{
              background: "linear-gradient(90deg, var(--aa-primary, #c99500) 0%, var(--aa-primary-dark, #c99500) 100%)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.875rem",
              padding: "10px 24px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.02em",
              boxShadow: "0 4px 16px rgba(201,149,0,0.3)",
            }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden flex-col justify-center items-center gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            width: 36,
            height: 36,
            background: "linear-gradient(90deg, var(--aa-primary, #c99500) 0%, var(--aa-primary-dark, #c99500) 100%)",
            border: "none",
            cursor: "pointer",
            borderRadius: 8,
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: i === 1 ? 20 : 26,
                height: 2,
                borderRadius: 2,
                background: "var(--aa-heading, #1F1F1F)",
                transition: "all 0.25s ease",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        style={{
          maxHeight: menuOpen ? 400 : 0,
          overflow: "hidden",
          transition: "max-height 0.35s ease",
          background: "#ffffff",
          borderTop: menuOpen ? "1px solid rgba(201,149,0,0.08)" : "none",
        }}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium"
              style={{ color: "var(--aa-heading-soft, #3A3A3A)", textDecoration: "none" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            style={{
              background: "linear-gradient(90deg, var(--aa-primary, #c99500) 0%, var(--aa-primary-dark, #c99500) 100%)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.875rem",
              padding: "10px 24px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.02em",
              marginTop: 4,
            }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Book Consultation
          </button>
        </div>
      </div>
    </header>
  );
}




