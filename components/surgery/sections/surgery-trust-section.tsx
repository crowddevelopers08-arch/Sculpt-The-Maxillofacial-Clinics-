import { surgeryTrustPoints } from "../surgery-data";
import { SurgeryMaterialIcon, SurgerySectionEyebrow } from "../surgery-shared";

export function SurgeryTrustSection() {
  return (
    <section className="section">
      <div className="shell">
        <div className="trust-panel glass-card reveal">
          <div className="section-aura" />
          <div className="trust-inner">
            <div className="center-heading">
              <SurgerySectionEyebrow>Why Choose Us</SurgerySectionEyebrow>
              <h2>
                Unmatched Standards for <br />
                Facial Surgery
              </h2>
            </div>
            <div className="trust-grid">
              {surgeryTrustPoints.map((point) => (
                <div className="trust-item" key={point.title}>
                  <h4>
                    <SurgeryMaterialIcon name={point.icon} />
                    {point.title}
                  </h4>
                  <p>{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
