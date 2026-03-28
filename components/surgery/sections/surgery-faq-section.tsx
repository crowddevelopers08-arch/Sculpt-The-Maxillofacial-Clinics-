import { surgeryFaqs } from "../surgery-data";
import { SurgeryMaterialIcon, SurgerySectionEyebrow } from "../surgery-shared";

export function SurgeryFaqSection() {
  return (
    <section className="section section-surface" id="surgery-faq">
      <div className="faq-shell">
        <div className="center-heading reveal">
          <SurgerySectionEyebrow>Clarifications</SurgerySectionEyebrow>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-list reveal delay-1">
          {surgeryFaqs.map((faq) => (
            <details className="faq-item glass-card" key={faq.question}>
              <summary>
                <span>{faq.question}</span>
                <span className="faq-icon">
                  <SurgeryMaterialIcon name="expand_more" />
                </span>
              </summary>
              <div className="faq-answer">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
