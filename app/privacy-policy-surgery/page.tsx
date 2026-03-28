import Image from "next/image";
import Link from "next/link";

export default function SurgeryPrivacyPolicyPage() {
  return (
    <main className="standalone-page">
      <div className="standalone-bg" />

      <nav className="standalone-nav">
        <Link href="/surgery">
          <Image
            src="/bglogo.png"
            alt="Sculpt The Maxillofacial Clinic"
            width={130}
            height={44}
            className="nav-logo"
            priority
          />
        </Link>
      </nav>

      <div className="policy-shell">
        <div className="policy-header reveal">
          <span className="eyebrow">Legal</span>
          <h1>
            Privacy <span className="accent">Policy</span>
          </h1>
          <p className="policy-meta">Last updated: March 2025</p>
        </div>

        <div className="policy-body glass-card reveal delay-1">

          <section className="policy-section">
            <h2>1. Informations We Collect</h2>
            <p>
              When you submit a consultation request through our website, we
              collect personal information you voluntarily provide, including:
            </p>
            <ul>
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Any additional details shared in correspondence</li>
            </ul>
            <p>
              We also automatically collect certain technical data such as IP
              address, browser type, and pages visited, through standard web
              analytics tools.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. How We Use Your Information</h2>
            <p>The information we collect is used solely to:</p>
            <ul>
              <li>Schedule and manage your consultation appointment</li>
              <li>Communicate with you regarding your inquiry</li>
              <li>Send appointment reminders or follow-up information</li>
              <li>Improve the functionality and content of our website</li>
            </ul>
            <p>
              We do not use your personal information for unsolicited marketing
              without your explicit consent.
            </p>
          </section>

          <section className="policy-section">
            <h2>3. Data Sharing &amp; Disclosure</h2>
            <p>
              We respect your privacy and do not sell, trade, or rent your
              personal information to third parties. We may share your
              information only in the following circumstances:
            </p>
            <ul>
              <li>
                With trusted service providers who assist in operating our
                website or conducting our business, subject to confidentiality
                agreements
              </li>
              <li>
                When required by law, regulation, or legal process
              </li>
              <li>
                To protect the rights, property, or safety of our clinic, our
                patients, or others
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary
              to fulfil the purposes outlined in this policy, or as required by
              applicable law. Consultation records are maintained in accordance
              with medical records retention standards.
            </p>
          </section>

          <section className="policy-section">
            <h2>5. Cookies &amp; Tracking</h2>
            <p>
              Our website may use cookies and similar tracking technologies to
              enhance your browsing experience and analyse site traffic. You may
              configure your browser to refuse cookies; however, some features
              of the site may not function optimally as a result.
            </p>
          </section>

          <section className="policy-section">
            <h2>6. Security</h2>
            <p>
              We implement appropriate technical and organisational measures to
              safeguard your personal information against unauthorised access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section className="policy-section">
            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data, subject to legal obligations</li>
              <li>Withdraw consent at any time where processing is based on consent</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at the details
              below.
            </p>
          </section>

          <section className="policy-section">
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact:
            </p>
            <div className="policy-contact">
              <strong>Sculpt — The Maxillofacial Clinic</strong>
              <span>Email: <a href="mailto:sculptmaxillo.clinic@gmail.com">sculptmaxillo.clinic@gmail.com</a></span>
              <span>Phone: <a href="tel:+919606601166">+91 9606601166</a></span>
              <span>315, Sapthagiri 60 Feet, Health Layout, Chandrashekhara Layout, Annapurneshwari Nagar, Bengaluru, Karnataka 560091, India</span>
            </div>
          </section>

        </div>

        <div className="policy-footer reveal delay-2">
          <Link href="/surgery" className="btn-outline">
            <span className="btn-label">&#8592; Back to Home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
