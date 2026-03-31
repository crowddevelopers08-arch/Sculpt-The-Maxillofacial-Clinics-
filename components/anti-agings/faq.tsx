"use client"

import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What concerns can anti-aging treatments help with?",
    answer: "These treatments are designed to address fine lines, expression lines, facial volume loss, tired appearance, and early signs of ageing while maintaining a natural look.",
  },
  {
    id: 2,
    question: "Will my face look unnatural or overdone?",
    answer: "No. At Sculpt, the focus is on subtle enhancement. The goal is to help you look fresher and more balanced, not different or artificial.",
  },
  {
    id: 3,
    question: "How do I know which treatment is right for me?",
    answer: "Every face ages differently. During your consultation, Dr. Priyanka Raj will assess your facial structure, skin condition, and concerns to recommend a personalised treatment plan.",
  },
  {
    id: 4,
    question: "Are these treatments painful?",
    answer: "Most patients find them comfortable. The procedures are minimally invasive and performed with care to ensure a smooth experience.",
  },
  {
    id: 5,
    question: "How long does the treatment take?",
    answer: "Sessions are usually quick and can be completed within a short clinic visit, depending on the number of areas treated.",
  },
  {
    id: 6,
    question: "Is there any downtime?",
    answer: "There is minimal to no downtime. Most patients can resume their daily activities soon after the procedure.",
  },
  {
    id: 7,
    question: "When will I start seeing results?",
    answer: "Some improvements can be noticed early, while full results gradually settle over a few days depending on the treatment.",
  },
  {
    id: 8,
    question: "How long do the results last?",
    answer: "The duration varies based on the treatment type, area treated, and individual factors. Your doctor will guide you on what to expect for your case.",
  },
  {
    id: 9,
    question: "Can I combine multiple treatments?",
    answer: "Yes. In many cases, a combination approach provides better and more balanced results, especially when addressing both lines and volume loss.",
  },
  {
    id: 10,
    question: "At what age should I consider anti-aging treatments?",
    answer: "There is no fixed age. Some people start early for prevention, while others begin when visible signs of ageing start to bother them.",
  },
  {
    id: 11,
    question: "Are these treatments suitable for men?",
    answer: "Yes. Anti-aging treatments are customised for both men and women based on facial features and desired outcomes.",
  },
  {
    id: 12,
    question: "Is a consultation necessary before treatment?",
    answer: "Yes. A proper consultation is important to assess your suitability, understand your goals, and create a safe, personalised treatment plan.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);
  const [showAll, setShowAll] = useState(false);

  const left = faqs.slice(0, 6);
  const right = faqs.slice(6, 12);
  const mobileFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section id="faqs"
      className="w-full max-sm:py-6 py-20 px-4"
      style={{
        background: "linear-gradient(160deg, var(--aa-surface, #ffffff) 0%, var(--aa-surface-soft, #f8f7f2) 50%, var(--aa-surface-tint, #f4eee0) 100%)",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center max-sm:mb-5 mb-14">
          <span
            className="inline-block mb-4 px-5 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase"
            style={{ background: "rgba(201,149,0,0.1)", color: "var(--aa-primary, #c99500)" }}
          >
            Got Questions?
          </span>
          <h2
            className="text-4xl font-extrabold leading-tight max-w-3xl mx-auto"
            style={{ color: "var(--aa-heading, #1F1F1F)" }}
          >
            Questions Patients Commonly Ask About{" "}
            <span style={{ color: "var(--aa-primary, #c99500)" }}>Anti-Aging Treatments</span>
          </h2>
          <p className="mt-4 text-base" style={{ color: "var(--aa-body, #333333)" }}>
            Clear, honest answers to help you make the right decision.
          </p>
        </div>

        {/* Mobile FAQ list — single column, 5 shown initially */}
        <div className="flex flex-col gap-4 mb-6 md:hidden">
          {mobileFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="cursor-pointer rounded-2xl overflow-hidden"
                style={{
                  background: isOpen ? "#ffffff" : "rgba(255,255,255,0.65)",
                  boxShadow: isOpen ? "0 8px 32px rgba(201,149,0,0.14)" : "0 2px 12px rgba(201,149,0,0.06)",
                  border: isOpen ? "1.5px solid var(--aa-border, #e5d8b5)" : "1.5px solid transparent",
                  transition: "all 0.3s ease",
                }}
              >
                <div className="flex items-center justify-between gap-4 px-6 py-5">
                  <div className="flex items-center">
                    <p className="text-sm font-semibold leading-snug" style={{ color: isOpen ? "var(--aa-heading, #1F1F1F)" : "var(--aa-heading-soft, #3A3A3A)" }}>
                      {faq.question}
                    </p>
                  </div>
                  <span
                    className="flex-shrink-0 flex items-center justify-center rounded-full"
                    style={{
                      width: 32,
                      height: 32,
                      background: isOpen ? "var(--aa-primary, #c99500)" : "rgba(201,149,0,0.09)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                      <path d="M12 7v10" stroke={isOpen ? "#fff" : "var(--aa-primary, #c99500)"} strokeWidth="2.2" strokeLinecap="round" style={{ opacity: isOpen ? 0 : 1, transition: "opacity 0.2s ease" }} />
                      <path d="M7 12h10" stroke={isOpen ? "#fff" : "var(--aa-primary, #c99500)"} strokeWidth="2.2" strokeLinecap="round" />
                    </svg>
                  </span>
                </div>
                <div style={{ maxHeight: isOpen ? 200 : 0, overflow: "hidden", transition: "max-height 0.35s ease" }}>
                  <div className="px-6 pb-5">
                    <div className="w-10 mb-3" style={{ height: 2, background: "linear-gradient(90deg, var(--aa-primary, #c99500), var(--aa-accent-soft, #c99500))" }} />
                    <p className="text-sm leading-relaxed" style={{ color: "var(--aa-body, #333333)" }}>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Read More / Read Less button — mobile only */}
        <div className="flex justify-center mb-10 md:hidden">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-xl"
            style={{
              background: "linear-gradient(90deg, var(--aa-primary, #c99500) 0%, var(--aa-primary-dark, #c99500) 100%)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {showAll ? "Read Less" : "Read More"}
            <svg viewBox="0 0 24 24" fill="none" width="16" height="16"
              style={{ transform: showAll ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}>
              <path d="M6 9l6 6 6-6" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Two-column FAQ grid — desktop only */}
        <div className="hidden md:grid md:grid-cols-2 gap-4 mb-16">
          {[left, right].map((col, ci) => (
            <div key={ci} className="flex flex-col gap-4">
              {col.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="cursor-pointer rounded-2xl overflow-hidden"
                    style={{
                      background: isOpen ? "#ffffff" : "rgba(255,255,255,0.65)",
                      boxShadow: isOpen
                        ? "0 8px 32px rgba(201,149,0,0.14)"
                        : "0 2px 12px rgba(201,149,0,0.06)",
                      border: isOpen ? "1.5px solid var(--aa-border, #e5d8b5)" : "1.5px solid transparent",
                      transition: "all 0.3s ease",
                    }}
                    >
                      {/* Question row */}
                    <div className="flex items-center justify-between gap-4 px-6 py-5">
                      <div className="flex items-center">
                        <p
                          className="text-sm font-semibold leading-snug"
                          style={{ color: isOpen ? "var(--aa-heading, #1F1F1F)" : "var(--aa-heading-soft, #3A3A3A)" }}
                        >
                          {faq.question}
                        </p>
                      </div>
                      <span
                        className="flex-shrink-0 flex items-center justify-center rounded-full"
                        style={{
                          width: 32,
                          height: 32,
                          background: isOpen ? "var(--aa-primary, #c99500)" : "rgba(201,149,0,0.09)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          width="14"
                          height="14"
                          style={{
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.3s ease",
                          }}
                        >
                          <path d="M12 7v10" stroke={isOpen ? "#fff" : "var(--aa-primary, #c99500)"} strokeWidth="2.2" strokeLinecap="round" style={{ opacity: isOpen ? 0 : 1, transition: "opacity 0.2s ease" }} />
                          <path d="M7 12h10" stroke={isOpen ? "#fff" : "var(--aa-primary, #c99500)"} strokeWidth="2.2" strokeLinecap="round" />
                        </svg>
                      </span>
                    </div>

                    {/* Answer */}
                    <div
                      style={{
                        maxHeight: isOpen ? 200 : 0,
                        overflow: "hidden",
                        transition: "max-height 0.35s ease",
                      }}
                    >
                      <div
                        className="px-6 pb-5"
                        style={{ paddingLeft: "calc(1.5rem + 36px + 1rem)" }}
                      >
                        <div className="w-10 mb-3" style={{ height: 2, background: "linear-gradient(90deg, var(--aa-primary, #c99500), var(--aa-accent-soft, #c99500))" }} />
                        <p className="text-sm leading-relaxed" style={{ color: "var(--aa-body, #333333)" }}>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* CTA Banner — desktop grid ends above, mobile list ends above */}
        {/* CTA Banner */}
        <div
          className="relative overflow-hidden rounded-3xl px-6 py-8 sm:px-10 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: "linear-gradient(120deg, var(--aa-heading, #1F1F1F) 0%, var(--aa-primary, #c99500) 60%, var(--aa-accent, #c99500) 100%)",
          }}
        >
          {/* Decorative circles */}
          <div
            className="absolute"
            style={{
              top: -40, right: 160,
              width: 180, height: 180,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.06)",
            }}
          />
          <div
            className="absolute"
            style={{
              bottom: -30, right: 60,
              width: 120, height: 120,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.08)",
            }}
          />

          <div className="relative z-10 flex flex-col justify-center items-center">
            <p className="text-white text-2xl font-extrabold leading-snug mb-1">
              Still have questions?
            </p>
            <p className="text-base font-medium" style={{ color: "#d8c089" }}>
              Talk to our expert and get clarity before you decide.
            </p>
          </div>

          <button
            className="relative z-10 w-full md:w-auto flex-shrink-0 font-bold rounded-xl px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-base text-center"
            style={{
              background: "linear-gradient(90deg, var(--aa-surface-soft, #c99500) 0%, var(--aa-surface-soft, #c99500) 100%)",
              color: "#000",
              boxShadow: "0 6px 24px rgba(0,0,0,0.18)",
              letterSpacing: "0.02em",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Book a Free Consultation
          </button>
        </div>

      </div>
    </section>
  );
}





