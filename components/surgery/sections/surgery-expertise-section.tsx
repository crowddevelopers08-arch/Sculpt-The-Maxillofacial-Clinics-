import Image from "next/image";
import { surgeryExpertHighlights } from "../surgery-data";
import { SurgeryMaterialIcon, SurgeryPrimaryButton, SurgerySectionEyebrow } from "../surgery-shared";

export function SurgeryExpertiseSection() {
  return (
    <section className="section section-surface" id="surgery-expertise">
      <div className="shell">
        <div className="expertise-panel glass-card">
          <div className="expertise-portrait reveal">
            <Image
              src="/a628a650-edbf-4750-a79d-190c50af80a6.png"
              alt="Dr. Priyanka Raj"
              fill
              className="portrait-image"
            />
            <div className="portrait-overlay" />
            <div className="portrait-copy reveal delay-2">
              <h3>
                Dr. Priyanka <span className="accent italic">Raj</span>
              </h3>
              <p>MDS Maxillofacial Surgery Specialist</p>
            </div>
          </div>

          <div className="expertise-content reveal delay-1">
            <div>
              <SurgerySectionEyebrow>Medical Authority</SurgerySectionEyebrow>
              <h2>
                Led by a Maxillofacial <br />
                <span className="accent">Surgical Specialist</span>
              </h2>
              <p className="section-copy">
                Unlike general cosmetic approaches, maxillofacial expertise
                focuses on the foundation of the face, bone and structure,
                ensuring long-lasting and anatomically correct results.
              </p>
            </div>
            <div className="highlight-list">
              {surgeryExpertHighlights.map((item, index) => (
                <div className="highlight-row" key={item}>
                  <div className="highlight-main">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item}</strong>
                  </div>
                  <SurgeryMaterialIcon name="arrow_outward" />
                </div>
              ))}
            </div>
            <SurgeryPrimaryButton className="wide-on-mobile">
              Book a Consultation with the Expert
            </SurgeryPrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
