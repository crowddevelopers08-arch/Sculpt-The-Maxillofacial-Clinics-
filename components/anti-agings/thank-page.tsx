'use client'

import React, { useEffect } from "react";

declare function gtag(...args: unknown[]): void;

export default function ThankYou() {
  useEffect(() => {
    gtag('event', 'conversion', { send_to: 'AW-11327193954/8nIoCN_f9ZIcEOKGnZkq' });
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        // background: "linear-gradient(135deg, #1F1F1F 0%, var(--aa-primary-dark, #c99500) 50%, var(--aa-accent, #c99500) 100%)",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >

        {/* Main card */}
        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "50px 40px",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
          }}
        >
          {/* Success icon */}
          <div
            style={{
              width: "100px",
              height: "100px",
              background: "linear-gradient(135deg, #1F1F1F 0%, var(--aa-primary-dark, #c99500) 50%, var(--aa-accent, #c99500) 100%)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 30px",
              boxShadow: "0 10px 25px rgba(201,149,0,0.3)",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              width="50"
              height="50"
            >
              <path
                d="M20 6L9 17L4 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "700",
              color: "var(--aa-heading, #1F1F1F)",
              textAlign: "center",
              marginBottom: "12px",
            }}
          >
            Thank You for Contacting Us!
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "18px",
              color: "#475569",
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            We appreciate you reaching out to us
          </p>

          {/* Divider */}
          <div
            style={{
              height: "1px",
              background: "#e2e8f0",
              margin: "30px 0",
            }}
          />

          {/* Message */}
          <div style={{ marginBottom: "30px" }}>
            <p
              style={{
                fontSize: "16px",
                color: "#334155",
                textAlign: "center",
                lineHeight: "1.6",
                marginBottom: "20px",
              }}
            >
              Your inquiry has been successfully submitted. Our team will review your request and get back to you within <strong style={{ color: "var(--aa-primary, #c99500)" }}>24 hours</strong>.
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#64748b",
                textAlign: "center",
              }}
            >
              A confirmation email has been sent to your registered email address.
            </p>
          </div>

          {/* Divider */}
          <div
            style={{
              height: "1px",
              background: "#e2e8f0",
              margin: "30px 0",
            }}
          />

          {/* What happens next */}
          <div style={{ marginBottom: "40px" }}>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "var(--aa-heading, #1F1F1F)",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              What Happens Next?
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "20px",
              }}
            >
              {[
                { step: "1", title: "Review", desc: "We'll review your request" },
                { step: "2", title: "Contact", desc: "We'll call you within 24h" },
                { step: "3", title: "Solution", desc: "We'll provide the best solution" },
              ].map((item) => (
                <div
                  key={item.step}
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    background: "#f8fafc",
                    borderRadius: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "linear-gradient(135deg, #1F1F1F 0%, var(--aa-primary-dark, #c99500) 50%, var(--aa-accent, #c99500) 100%)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 12px",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    {item.step}
                  </div>
                  <h4
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "var(--aa-heading, #1F1F1F)",
                      marginBottom: "8px",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#64748b",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: "15px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/anti-aging"
              style={{
                background: "linear-gradient(135deg, #1F1F1F 0%, var(--aa-primary-dark, #c99500) 50%, var(--aa-accent, #c99500) 100%)",
                color: "white",
                textDecoration: "none",
                padding: "12px 32px",
                borderRadius: "10px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(201,149,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Back to Home
            </a>
            <a
              href="/contact"
              style={{
                background: "transparent",
                color: "var(--aa-primary, #c99500)",
                textDecoration: "none",
                padding: "12px 32px",
                borderRadius: "10px",
                fontWeight: "600",
                border: "2px solid var(--aa-primary, #c99500)",
                transition: "all 0.3s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--aa-primary, #c99500)";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--aa-primary, #c99500)";
              }}
            >
              Need Help?
            </a>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
            color: "white",
            fontSize: "14px",
          }}
        >
          <p>Need immediate assistance? Call us at <strong>+91 98765 43210</strong></p>
        </div>
      </div>
    </div>
  );
}




