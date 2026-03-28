import Image from "next/image";
import { SurgeryMaterialIcon, SurgerySectionEyebrow } from "../surgery-shared";

export function SurgeryPhilosophySection() {
  return (
    <section className="section">
      <div className="shell philosophy-grid">
        <div className="philosophy-media reveal">
          <div className="aura-card" />
          <div className="glass-frame">
            <Image
              src="/sur.png"
              alt="Facial balance concept"
              width={700}
              height={900}
              className="rounded-image tall-image"
              style={{ filter: "none" }}
            />
          </div>
          <div className="badge-card reveal delay-2">
            <SurgeryMaterialIcon name="architecture" />
            <p>
              &quot;The goal is not to change. It is balance, proportion, and
              natural enhancement.&quot;
            </p>
          </div>
        </div>

        <div className="content-stack reveal delay-1">
          <div>
            <SurgerySectionEyebrow>The Philosophy</SurgerySectionEyebrow>
            <h2>
              When Features Feel Out of <br />
              <span className="text-gradient italic">Balance, It Shows</span>
            </h2>
          </div>
          <div className="copy-stack">
            <p>
              A weak chin. A broad or uneven nose. Tired-looking eyes. An
              undefined jawline. These are not just features. They influence how
              your entire face is perceived.
            </p>
            <p>
              At Sculpt The Maxillofacial Clinic, we approach facial aesthetics
              with surgical precision and artistic understanding. Instead of
              focusing on one feature in isolation, we evaluate overall facial
              harmony.
            </p>
            <a href="#surgery-process" className="inline-link">
              <span className="icon-circle">
                <SurgeryMaterialIcon name="arrow_forward" />
              </span>
              <span>Our Clinical Approach</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
