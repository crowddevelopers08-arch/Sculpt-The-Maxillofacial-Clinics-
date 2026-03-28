"use client";

import Image from "next/image";

export function SurgerySiteFooter() {
  function openSurgeryModal() {
    window.dispatchEvent(new Event("openConsultationModal"));
  }
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand-block">
          <div className="brand">
            <Image
              src="/bglogo.png"
              alt="Sculpt The Maxillofacial Clinic"
              width={150}
              height={52}
              className="footer-logo"
            />
          </div>
          <p className="footer-copy">
            Premium maxillofacial surgery focused on facial balance, precision,
            and natural-looking outcomes.
          </p>
        </div>

        <div className="footer-column">
          <span className="footer-label">Explore</span>
          <a href="#surgery-procedures">Procedures</a>
          <a href="#surgery-expertise">Expertise</a>
          <a href="#surgery-results">Results</a>
        </div>

        <div className="footer-column">
          <span className="footer-label">Patient Care</span>
          <a href="#surgery-process">Process</a>
          <a href="#surgery-faq">FAQ</a>
          <a href="#">Consultation</a>
        </div>

        <div className="footer-column">
          <span className="footer-label">Contact</span>
          <a href="tel:+919606601166">+91 9606601166</a>
          <a href="mailto:sculptmaxillo.clinic@gmail.com">sculptmaxillo.clinic@gmail.com</a>
          <span className="footer-address">315, Sapthagiri 60 Feet, Health Layout, Chandrashekhara Layout, Annapurneshwari Nagar, Bengaluru, Karnataka 560091</span>
          <button className="btn-primary footer-cta-btn" onClick={openSurgeryModal}>
            <span className="btn-label">Book Consultation</span>
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="shell footer-bottom-inner">
          <p className="footer-copy-text">
            &copy; {new Date().getFullYear()} Sculpt — The Maxillofacial Clinic. All rights reserved.
          </p>
          <p className="footer-tagline">
            Precision. Balance. Natural Results.
          </p>
        </div>
      </div>
    </footer>
  );
}
