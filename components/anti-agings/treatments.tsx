"use client"

import { useState } from "react";


const values = [
  {
    id: 1,
    icon: <img src="/icon2.png" alt="icon1" className="w-6 h-6" />,
    title: "Personal Consultation",
    description:
      "We begin with a one-to-one consultation to understand your ageing concerns, facial structure, medical history, and aesthetic goals.",
  },
  {
    id: 2,
    icon: <img src="/icon1.png" alt="icon2" className="w-6 h-6" />,
    title: "Facial Assesment",
    description:
      "Dr. Priyanka Raj evaluates movement lines, skin quality, facial proportions, and areas of volume loss to recommend the most suitable non-surgical approach.",
  },
  {
    id: 3,
    icon: <img src="/icon4.png" alt="icon3" className="w-6 h-6" />,
    title: "Personal Treatment Plan",
    description:
      "Your plan may include line-relaxing treatment, contour-support treatment, skin rejuvenation support, or a combination approach depending on what your face truly needs.",
  },
  {
    id: 4,
    icon: <img src="/icon5.png" alt="icon4" className="w-6 h-6" />,
    title: "Procedure Session",
    description:
      "The treatment is performed in-clinic with precision and care. Most sessions are quick, minimally invasive, and planned for maximum comfort.",
  },
  {
    id: 5,
    icon: <img src="/icon3.png" alt="icon5" className="w-6 h-6" />,
    title: "Aftercare & Follow-up",
    description:
      "You receive post-treatment guidance and follow-up support to ensure your results settle beautifully and naturally. ",
  },
];

export default function OurValues() {
  const [active, setActive] = useState(1);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="treatments" className="bg-white flex flex-col items-center justify-center max-sm:py-5 py-10 px-4">
      {/* Title */}
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-10 max-sm:mb-5 lg:mb-20 text-center max-w-4xl"
        style={{ color: "var(--aa-heading, #1F1F1F)", fontFamily: "Georgia, serif" }}
      >
        Experience our significally designed 5-step process for safe & effective anti-aging treatments
      </h2>

      {/* First Row - 3 Cards */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 max-sm:gap-3 w-full max-w-7xl mb-8 lg:mb-12">
        {values.slice(0, 3).map((val, idx) => {
          const isMiddle = idx === 1;
          const isHovered = hoveredCard === val.id;

          if (isMiddle) {
            // Middle card
            return (
              <div
                key={val.id}
                className="relative lg:-mt-[100px]"
                style={{ zIndex: 10 }}
                onMouseEnter={() => setHoveredCard(val.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className="relative flex flex-col items-center text-center cursor-pointer w-full lg:w-[400px]"
                  style={{
                    minHeight: "240px",
                    borderRadius: "20px",
                    background: "#ffffff",
                    boxShadow: "0 8px 40px 0 rgba(201,149,0,0.13), 0 2px 8px 0 rgba(0,0,0,0.07)",
                    border: "1px solid var(--aa-surface-soft, #f8f7f2)",
                    padding: "0",
                    overflow: "visible",
                  }}
                  onClick={() => setActive(val.id)}
                >
                  {/* Title pill at top */}
                  <div
                    className="absolute flex items-center gap-3 px-6 py-3 transition-all duration-300"
                    style={{
                      top: 24,
                      left: "50%",
                      transform: isHovered ? "translateX(-50%) scale(1.05)" : "translateX(-50%) scale(1)",
                      width: "calc(100% - 32px)",
                      borderRadius: "14px",
                      background: isHovered
                        ? "linear-gradient(90deg, var(--aa-accent-soft, #c99500) 0%, var(--aa-accent, #c99500) 100%)"
                        : "transparent",
                      zIndex: 2,
                      minWidth: "180px",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      transformOrigin: "center",
                    }}
                  >
                    <div
                      className="flex items-center justify-center transition-all duration-300"
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: "50%",
                        background: isHovered ? "rgba(255,255,255,0.22)" : "transparent",
                        transform: isHovered ? "scale(1.1)" : "scale(1)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <div style={{
                        color: isHovered ? "white" : "var(--aa-heading, #1F1F1F)",
                        transition: "all 0.3s ease",
                      }}>
                        {val.icon}
                      </div>
                    </div>
                    <span
                      className="text-lg font-bold transition-all duration-300"
                      style={{
                        color: isHovered ? "#ffffff" : "var(--aa-heading, #1F1F1F)",
                        whiteSpace: "nowrap",
                        transform: isHovered ? "scale(1.1)" : "scale(1)",
                        display: "inline-block",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {val.title}
                    </span>
                  </div>

                  {/* Card body text */}
                  <div
                    className="flex flex-col items-center justify-end h-full px-7 text-center"
                    style={{ paddingTop: "110px", paddingBottom: "32px" }}
                  >
                    <p className="text-sm leading-relaxed" style={{ color: "var(--aa-body, #333333)" }}>
                      {val.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          }

          // First & Third cards
          return (
            <div
              key={val.id}
              className="relative cursor-pointer w-full lg:w-[400px]"
              style={{
                minHeight: "240px",
                borderRadius: "20px",
                background: "#ffffff",
                boxShadow: "0 4px 24px 0 rgba(201,149,0,0.08), 0 1px 4px 0 rgba(0,0,0,0.05)",
                border: "1px solid var(--aa-surface-soft, #f8f7f2)",
                padding: "0",
                overflow: "visible",
              }}
              onClick={() => setActive(val.id)}
              onMouseEnter={() => setHoveredCard(val.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Title pill at top */}
              <div
                className="absolute flex items-center gap-3 px-6 py-3 transition-all duration-300"
                style={{
                  top: 24,
                  left: "50%",
                  transform: isHovered ? "translateX(-50%) scale(1.05)" : "translateX(-50%) scale(1)",
                  width: "calc(100% - 32px)",
                  borderRadius: "14px",
                  background: isHovered
                    ? "linear-gradient(90deg, var(--aa-accent-soft, #c99500) 0%, var(--aa-accent, #c99500) 100%)"
                    : "transparent",
                  zIndex: 2,
                  minWidth: "180px",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  transformOrigin: "center",
                }}
              >
                <div
                  className="flex items-center justify-center transition-all duration-300"
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: isHovered ? "rgba(255,255,255,0.22)" : "transparent",
                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div style={{
                    color: isHovered ? "white" : "var(--aa-heading, #1F1F1F)",
                    transition: "all 0.3s ease",
                  }}>
                    {val.icon}
                  </div>
                </div>
                <span
                  className="text-lg font-bold transition-all duration-300"
                  style={{
                    color: isHovered ? "#ffffff" : "var(--aa-heading, #1F1F1F)",
                    whiteSpace: "nowrap",
                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                    display: "inline-block",
                    transition: "all 0.3s ease",
                  }}
                >
                  {val.title}
                </span>
              </div>

              {/* Card body text */}
              <div
                className="flex flex-col items-center justify-end h-full px-7 text-center"
                style={{ paddingTop: "110px", paddingBottom: "32px" }}
              >
                <p className="text-sm leading-relaxed" style={{ color: "var(--aa-body, #333333)" }}>
                  {val.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Second Row - 2 Cards */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full max-w-4xl mb-8 lg:mb-12">
        {values.slice(3, 5).map((val) => {
          const isHovered = hoveredCard === val.id;

          return (
            <div
              key={val.id}
              className="relative cursor-pointer w-full lg:w-[400px]"
              style={{
                minHeight: "240px",
                borderRadius: "20px",
                background: "#ffffff",
                boxShadow: "0 4px 24px 0 rgba(201,149,0,0.08), 0 1px 4px 0 rgba(0,0,0,0.05)",
                border: "1px solid var(--aa-surface-soft, #f8f7f2)",
                padding: "0",
                overflow: "visible",
              }}
              onClick={() => setActive(val.id)}
              onMouseEnter={() => setHoveredCard(val.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Title pill at top */}
              <div
                className="absolute flex items-center gap-3 px-6 py-3 transition-all duration-300"
                style={{
                  top: 24,
                  left: "50%",
                  transform: isHovered ? "translateX(-50%) scale(1.05)" : "translateX(-50%) scale(1)",
                  width: "calc(100% - 32px)",
                  borderRadius: "14px",
                  background: isHovered
                    ? "linear-gradient(90deg, var(--aa-accent-soft, #c99500) 0%, var(--aa-accent, #c99500) 100%)"
                    : "transparent",
                  zIndex: 2,
                  minWidth: "180px",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  transformOrigin: "center",
                }}
              >
                <div
                  className="flex items-center justify-center transition-all duration-300"
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: isHovered ? "rgba(255,255,255,0.22)" : "transparent",
                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div style={{
                    color: isHovered ? "white" : "var(--aa-heading, #1F1F1F)",
                    transition: "all 0.3s ease",
                  }}>
                    {val.icon}
                  </div>
                </div>
                <span
                  className="text-lg font-bold transition-all duration-300"
                  style={{
                    color: isHovered ? "#ffffff" : "var(--aa-heading, #1F1F1F)",
                    whiteSpace: "nowrap",
                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                    display: "inline-block",
                    transition: "all 0.3s ease",
                  }}
                >
                  {val.title}
                </span>
              </div>

              {/* Card body text */}
              <div
                className="flex flex-col items-center justify-end h-full px-7 text-center"
                style={{ paddingTop: "110px", paddingBottom: "32px" }}
              >
                <p className="text-sm leading-relaxed" style={{ color: "var(--aa-body, #333333)" }}>
                  {val.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Button */}
      <button
        className="px-5 py-3 sm:px-8 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        style={{
          background: "linear-gradient(90deg, var(--aa-primary, #c99500) 0%, var(--aa-primary-dark, #c99500) 100%)",
          boxShadow: "0 4px 16px rgba(201,149,0,0.25)",
        }}
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
      >
        Schedule your Consultation
      </button>
    </section>
  );
}




