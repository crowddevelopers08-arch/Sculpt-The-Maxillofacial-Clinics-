import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { CheckCircle2 } from "lucide-react";

export default function SurgeryThankYouPage() {
  return (
    <>
      <Script id="google-ads-surgery-conversion" strategy="afterInteractive">
        {`gtag('event', 'conversion', {'send_to': 'AW-11327193954/ZKRcCPSJypccEOKGnZkq'});`}
      </Script>

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

        <div className="thankyou-shell">
          <div className="thankyou-card glass-card">
            <div className="thankyou-icon">
              <CheckCircle2 className="surgery-icon thankyou-svg-icon" strokeWidth={1.5} />
            </div>

            <span className="eyebrow">Consultation Requested</span>

            <h1 className="thankyou-title">
              Thank You for <br />
              <span className="text-gradient italic">Reaching Out</span>
            </h1>

            <p className="thankyou-copy">
              Your consultation request has been received. Dr. Priyanka Raj&apos;s
              team will review your details and contact you within{" "}
              <strong>24 hours</strong> to schedule your appointment.
            </p>

            <div className="thankyou-steps">
              <div className="ty-step">
                <span className="ty-step-num">01</span>
                <div>
                  <strong>Confirmation Call</strong>
                  <p>Our team will call to confirm your preferred time slot.</p>
                </div>
              </div>
              <div className="ty-step">
                <span className="ty-step-num">02</span>
                <div>
                  <strong>Pre-Consultation Form</strong>
                  <p>You&apos;ll receive a short form to help us prepare for your visit.</p>
                </div>
              </div>
              <div className="ty-step">
                <span className="ty-step-num">03</span>
                <div>
                  <strong>Meet Dr. Raj</strong>
                  <p>A focused, one-on-one surgical consultation tailored to you.</p>
                </div>
              </div>
            </div>

            <Link href="/surgery" className="btn-primary ty-back-btn">
              <span className="btn-label">Back to Home</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
