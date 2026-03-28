import { surgeryProcessSteps } from "../surgery-data";
import { SurgeryMaterialIcon, SurgerySectionEyebrow } from "../surgery-shared";

export function SurgeryProcessSection() {
  return (
    <section className="section" id="surgery-process">
      <div className="shell">
        <div className="center-heading reveal">
          <SurgerySectionEyebrow>The Journey</SurgerySectionEyebrow>
          <h2>
            Your Surgical Journey <br />
            <span className="accent italic">Step by Step</span>
          </h2>
        </div>
        <div className="steps-grid reveal">
          {surgeryProcessSteps.map((step, index) => (
            <article className="step-card" key={step.title}>
              <div className="step-number">{index + 1}</div>
              <div className="step-content">
                <div className="icon-box">
                  <SurgeryMaterialIcon name={step.icon} />
                </div>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
