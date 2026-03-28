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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB62LYjQpe7kYUrIt0rPX0GrAKQ3UxeFwM_nbQjq0FgZVbRIOvuapWFCv2HYNparfYstT48T-O0L_-N0R8t7rrC-U8s7c7psb5z2LdDD4SRnpEGI409MJIx9PJ9usgYPbPTQ0Lab_9zP_DQeHASQAGPCjMu6_x9blBOlrMK1VvdqFu95v0rDuhN9wCTUCXR2BJUlmyeXQgMbISXKsAEfq2oWUrH6eyBc0b2wA2IB379xVl4S9VdeLTXaSvhpZj-gPTOosZFikcNqdA"
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
