"use client"

import { useState } from "react";

interface Section {
  id: number;
  title: string;
  icon: string;
  content: string[];
}

const sections: Section[] = [
  {
    id: 1,
    title: "Information We Collect",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    content: [
      "Personal identification information such as your name, phone number, and email address when you book a consultation or fill out our contact form.",
      "Health-related information you voluntarily share during consultation booking, including skin concerns, treatment interests, and medical history relevant to aesthetic treatments.",
      "Device and usage data such as IP address, browser type, pages visited, and time spent on our website — collected automatically via cookies and analytics tools.",
      "Communication records including messages, inquiries, or feedback you send us through our website or contact channels.",
    ],
  },
  {
    id: 2,
    title: "How We Use Your Information",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    content: [
      "To schedule and manage your consultation appointments and follow-up communications with Dr. Priyanka Raj and the Sculpt team.",
      "To personalise your experience and provide treatment recommendations relevant to your aesthetic concerns.",
      "To send appointment reminders, post-treatment guidance, and important updates regarding your care.",
      "To improve our website, services, and patient experience based on aggregated usage data and feedback.",
      "To comply with legal and regulatory obligations applicable to aesthetic medical clinics in India.",
    ],
  },
  {
    id: 3,
    title: "Cookies & Tracking",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    content: [
      "We use essential cookies to ensure our website functions correctly and securely.",
      "Analytics cookies help us understand how visitors interact with our website so we can improve content and navigation.",
      "You can control cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.",
      "We do not use cookies to track you across other websites or serve third-party advertisements.",
    ],
  },
  {
    id: 4,
    title: "Sharing of Information",
    icon: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z",
    content: [
      "We do not sell, rent, or trade your personal information to any third parties for marketing purposes.",
      "Your information may be shared with trusted service providers who assist us in operating our website and delivering services — all bound by confidentiality agreements.",
      "We may disclose information if required by law, court order, or regulatory authority.",
      "In the event of a clinic merger or acquisition, patient data will be handled in accordance with this policy and applicable laws.",
    ],
  },
  {
    id: 5,
    title: "Data Security",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    content: [
      "We implement industry-standard security measures including SSL encryption to protect data transmitted through our website.",
      "Access to personal and health-related information is restricted to authorised staff only, on a need-to-know basis.",
      "We regularly review and update our security practices to protect against unauthorised access, alteration, or disclosure.",
      "While we take all reasonable precautions, no method of online data transmission is 100% secure. We encourage you to contact us directly for sensitive communications.",
    ],
  },
  {
    id: 6,
    title: "Your Rights",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    content: [
      "You have the right to access the personal information we hold about you at any time by contacting us.",
      "You may request correction of inaccurate or incomplete information in our records.",
      "You can request deletion of your personal data, subject to any legal obligations we may have to retain certain records.",
      "You may withdraw consent to receive marketing communications at any time by unsubscribing or contacting us directly.",
    ],
  },
  {
    id: 7,
    title: "Children's Privacy",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    content: [
      "Our website and services are intended for adults aged 18 and above.",
      "We do not knowingly collect personal information from individuals under 18 years of age.",
      "If you believe a minor has submitted information to us, please contact us immediately and we will promptly delete it.",
    ],
  },
  {
    id: 8,
    title: "Changes to This Policy",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.",
      "The updated policy will be posted on this page with a revised effective date.",
      "We encourage you to review this policy periodically. Continued use of our website after changes constitutes acceptance of the updated policy.",
    ],
  },
];

interface AccordionCardProps {
  section: Section;
  openId: number | null;
  setOpenId: (id: number | null) => void;
}

const AccordionCard: React.FC<AccordionCardProps> = ({ section, openId, setOpenId }) => {
  const isOpen = openId === section.id;
  return (
    <div
      className="rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: isOpen ? "#ffffff" : "rgba(255,255,255,0.7)",
        border: isOpen ? "1.5px solid var(--aa-border, #e5d8b5)" : "1.5px solid transparent",
        boxShadow: isOpen
          ? "0 8px 32px rgba(201,149,0,0.12)"
          : "0 2px 10px rgba(201,149,0,0.05)",
        transition: "all 0.3s ease",
      }}
      onClick={() => setOpenId(isOpen ? null : section.id)}
    >
      {/* Header row */}
      <div className="flex items-center justify-between gap-4 px-5 sm:px-6 py-5">
        <div className="flex items-center gap-4">
          <div
            className="flex-shrink-0 flex items-center justify-center rounded-xl"
            style={{
              width: 40,
              height: 40,
              background: isOpen
                ? "linear-gradient(135deg, var(--aa-primary, #c99500), var(--aa-accent, #c99500))"
                : "rgba(201,149,0,0.08)",
              transition: "all 0.3s ease",
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke={isOpen ? "#fff" : "var(--aa-primary, #c99500)"} strokeWidth="1.8" width="18" height="18">
              <path d={section.icon} strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--aa-muted, #6b7280)" }}>
              Section {section.id}
            </span>
            <p className="text-sm sm:text-base font-bold leading-snug" style={{ color: isOpen ? "var(--aa-heading, #1F1F1F)" : "var(--aa-heading-soft, #3A3A3A)" }}>
              {section.title}
            </p>
          </div>
        </div>
        <div
          className="flex-shrink-0 flex items-center justify-center rounded-full"
          style={{
            width: 28,
            height: 28,
            background: isOpen ? "var(--aa-primary, #c99500)" : "rgba(201,149,0,0.08)",
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
            <path d="M6 9l6 6 6-6" stroke={isOpen ? "#fff" : "var(--aa-primary, #c99500)"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          maxHeight: isOpen ? 600 : 0,
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <div className="px-5 sm:px-6 pb-6" style={{ paddingLeft: "calc(1.25rem + 40px + 1rem)" }}>
          <div className="w-10 mb-4" style={{ height: 2, background: "linear-gradient(90deg, var(--aa-primary, #c99500), var(--aa-accent-soft, #c99500))" }} />
          <ul className="flex flex-col gap-3">
            {section.content.map((point: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 mt-1.5 rounded-full"
                  style={{ width: 6, height: 6, background: "var(--aa-primary, #c99500)" }}
                />
                <p className="text-sm leading-relaxed" style={{ color: "var(--aa-body, #333333)" }}>
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function PrivacyPolicy() {
  const [openId, setOpenId] = useState<number | null>(null);

  // Split sections into two columns for desktop
  const leftCol: Section[] = sections.filter((_, i) => i % 2 === 0);
  const rightCol: Section[] = sections.filter((_, i) => i % 2 !== 0);

  return (
    <section
      className="w-full min-h-screen py-16 px-4"
      style={{
        background: "linear-gradient(160deg, var(--aa-surface, #ffffff) 0%, var(--aa-surface-soft, #f8f7f2) 60%, var(--aa-surface-tint, #f4eee0) 100%)",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div className="max-w-5xl mx-auto">

        {/* ── Back to Home button ── */}
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-xl"
            style={{
              background: "#ffffff",
              color: "var(--aa-primary, #c99500)",
              border: "1.5px solid var(--aa-border, #e5d8b5)",
              textDecoration: "none",
              boxShadow: "0 2px 10px rgba(201,149,0,0.08)",
              transition: "all 0.2s ease",
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
              <path d="M15 18l-6-6 6-6" stroke="var(--aa-primary, #c99500)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Home
          </a>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full text-sm font-semibold"
            style={{ background: "rgba(201,149,0,0.09)", color: "var(--aa-primary, #c99500)" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--aa-primary, #c99500)" strokeWidth="2" width="15" height="15">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Legal & Privacy
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight" style={{ color: "var(--aa-heading, #1F1F1F)" }}>
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--aa-body, #333333)" }}>
            At <span className="font-semibold" style={{ color: "var(--aa-primary, #c99500)" }}>Sculpt Aesthetic Clinic</span>, we are committed to protecting your personal information and your right to privacy. This policy explains how we collect, use, and safeguard your data.
          </p>

          {/* Effective date */}
          <div
            className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-xl text-xs font-medium"
            style={{ background: "#ffffff", color: "var(--aa-body, #333333)", border: "1px solid #e2e8f0" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--aa-muted, #6b7280)" strokeWidth="2" width="13" height="13">
              <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Effective Date: January 1, 2025 &nbsp;·&nbsp; Last Updated: March 2025
          </div>
        </div>

        {/* Intro card */}
        <div
          className="rounded-2xl p-6 mb-10"
          style={{
            background: "linear-gradient(120deg, var(--aa-heading, #1F1F1F) 0%, var(--aa-primary, #c99500) 100%)",
            boxShadow: "0 8px 32px rgba(201,149,0,0.18)",
          }}
        >
          <p className="text-white text-sm sm:text-base leading-relaxed opacity-90">
            This Privacy Policy applies to all information collected through our website, consultation booking forms, and any related services offered by Sculpt Aesthetic Clinic, Bangalore. By using our website, you agree to the terms outlined in this policy.
          </p>
        </div>

        {/* ── Accordion grid: 2 cols desktop, 1 col mobile ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
          {/* Left column */}
          <div className="flex flex-col gap-3">
            {leftCol.map((section) => (
              <AccordionCard key={section.id} section={section} openId={openId} setOpenId={setOpenId} />
            ))}
          </div>
          {/* Right column */}
          <div className="flex flex-col gap-3">
            {rightCol.map((section) => (
              <AccordionCard key={section.id} section={section} openId={openId} setOpenId={setOpenId} />
            ))}
          </div>
        </div>

        {/* Contact card */}
        <div
          className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{
            background: "#ffffff",
            border: "1.5px solid #e2e8f0",
            boxShadow: "0 4px 24px rgba(201,149,0,0.07)",
          }}
        >
          <div>
            <p className="font-bold text-base mb-1" style={{ color: "var(--aa-heading, #1F1F1F)" }}>
              Questions about this policy?
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--aa-body, #333333)" }}>
              Contact us at{" "}
              <a href="mailto:hello@sculpt.in" style={{ color: "var(--aa-primary, #c99500)", fontWeight: 600 }}>
                hello@sculpt.in
              </a>{" "}
              or visit us at our Bangalore clinic.
            </p>
          </div>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="flex-shrink-0 font-bold text-sm px-6 py-3 rounded-xl"
            style={{
              background: "linear-gradient(90deg, var(--aa-primary, #c99500) 0%, var(--aa-primary-dark, #c99500) 100%)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 16px rgba(201,149,0,0.25)",
              whiteSpace: "nowrap",
            }}
          >
            Contact Us
          </button>
        </div>

        {/* ── Back to Home button — bottom ── */}
        <div className="mt-8 flex justify-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-xl"
            style={{
              background: "#ffffff",
              color: "var(--aa-primary, #c99500)",
              border: "1.5px solid var(--aa-border, #e5d8b5)",
              textDecoration: "none",
              boxShadow: "0 2px 10px rgba(201,149,0,0.08)",
              transition: "all 0.2s ease",
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
              <path d="M15 18l-6-6 6-6" stroke="var(--aa-primary, #c99500)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Home
          </a>
        </div>

      </div>
    </section>
  );
}




