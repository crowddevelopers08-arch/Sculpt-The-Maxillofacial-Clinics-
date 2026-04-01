import Image from "next/image";
import { surgeryProcedures } from "../surgery-data";
import { SurgeryMaterialIcon, SurgeryOutlineButton, SurgerySectionEyebrow } from "../surgery-shared";


export function SurgeryProceduresSection() {
  return (
    <section className="section section-surface" id="surgery-procedures">
      <div className="section-aura" />
      <div className="shell relative-layer">
        <div className="section-header reveal">
          <div>
            <SurgerySectionEyebrow>The Surgical Suite</SurgerySectionEyebrow>
            <h2>
              Surgical Solutions Designed for <br />
              <span className="accent italic">Facial Balance</span>
            </h2>
          </div>
          <SurgeryOutlineButton className="button-with-icon" modal>
            Talk to a Specialist <SurgeryMaterialIcon name="arrow_forward" />
          </SurgeryOutlineButton>
        </div>

        <div className="procedures-grid">
          {surgeryProcedures.map((procedure, index) => (
            <article
              className={`glass-card procedure-card reveal delay-${index + 1}`}
              key={procedure.title}
            >
              <div className="procedure-card-image">
                <Image
                  src={procedure.image}
                  alt={procedure.title}
                  fill
                  className="card-procedure-img"
                />
              </div>
              <div className="card-top">
                <h3>{procedure.title}</h3>
                <p>{procedure.description}</p>
              </div>
              <a href="#surgery-results" className="card-link">
                View Case Studies <span className="card-line" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
