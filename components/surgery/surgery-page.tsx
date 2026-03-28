"use client";

import Image from "next/image";
import { SurgeryHeroSection } from "./sections/surgery-hero-section";
import { SurgeryPhilosophySection } from "./sections/surgery-philosophy-section";
import { SurgeryProceduresSection } from "./sections/surgery-procedures-section";
import { SurgerySurgicalApproachSection } from "./sections/surgery-surgical-approach-section";
import { SurgeryExpertiseSection } from "./sections/surgery-expertise-section";
import { SurgeryProcessSection } from "./sections/surgery-process-section";
import { SurgeryResultsSection } from "./sections/surgery-results-section";
import { SurgeryTrustSection } from "./sections/surgery-trust-section";
import { SurgeryFaqSection } from "./sections/surgery-faq-section";
import { SurgeryCtaSection } from "./sections/surgery-cta-section";
import { SurgerySiteFooter } from "./sections/surgery-site-footer";
import { SurgeryConsultationModal } from "./surgery-consultation-modal";

function openSurgeryModal() {
  window.dispatchEvent(new Event("openConsultationModal"));
}

function SurgeryTopNav() {
  return (
    <nav className="top-nav">
      <div className="shell nav-inner">
        <div className="brand">
          <Image
            src="/bglogo.png"
            alt="Sculpt The Maxillofacial Clinic"
            width={130}
            height={44}
            className="nav-logo"
            priority
          />
        </div>
        <div className="nav-links">
          <a href="#surgery-procedures">Procedures</a>
          <a href="#surgery-expertise">Expertise</a>
          <a href="#surgery-process">Process</a>
          <a href="#surgery-results">Results</a>
          <a href="#surgery-faq">FAQ</a>
        </div>
        <input type="checkbox" id="surgery-nav-toggle" className="nav-toggle-input" />
        <label htmlFor="surgery-nav-toggle" className="nav-hamburger" aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </label>
        <button className="btn-primary nav-cta" onClick={openSurgeryModal}>
          <span className="btn-label">Consultation</span>
        </button>
      </div>
      <div className="mobile-menu">
        <a href="#surgery-procedures">Procedures</a>
        <a href="#surgery-expertise">Expertise</a>
        <a href="#surgery-process">Process</a>
        <a href="#surgery-results">Results</a>
        <a href="#surgery-faq">FAQ</a>
        <button className="btn-primary mobile-cta-btn" onClick={openSurgeryModal}>
          <span className="btn-label">Book Consultation</span>
        </button>
      </div>
    </nav>
  );
}

export function SurgeryPage() {
  return (
    <main className="atelier-page">
      <SurgeryTopNav />
      <SurgeryHeroSection />
      <SurgeryPhilosophySection />
      <SurgeryProceduresSection />
      <SurgerySurgicalApproachSection />
      <SurgeryExpertiseSection />
      <SurgeryProcessSection />
      <SurgeryResultsSection />
      <SurgeryTrustSection />
      <SurgeryFaqSection />
      <SurgeryCtaSection />
      <SurgerySiteFooter />
      <SurgeryConsultationModal />
    </main>
  );
}
