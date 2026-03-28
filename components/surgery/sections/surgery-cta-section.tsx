import { SurgeryOutlineButton, SurgeryPrimaryButton, SurgerySectionEyebrow } from "../surgery-shared";

export function SurgeryCtaSection() {
  return (
    <section className="section cta-section">
      <div className="section-aura pulse-aura" />
      <div className="shell">
        <div className="cta-panel glass-card reveal">
          <SurgerySectionEyebrow>Take the Next Step</SurgerySectionEyebrow>
          <h2>
            Ready to Restore <br />
            <span className="text-gradient italic">Your Facial Harmony?</span>
          </h2>
          <p className="cta-copy">
            Experience the difference of specialized maxillofacial surgery. Book
            your one-on-one surgical consultation with Dr. Priyanka Raj today.
          </p>
          <div className="cta-actions">
            <SurgeryPrimaryButton>Book My Consultation</SurgeryPrimaryButton>
            <a href="#surgery-results">
              <SurgeryOutlineButton>View More Results</SurgeryOutlineButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
