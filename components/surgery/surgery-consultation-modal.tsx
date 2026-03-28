"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const SURGERY_TREATMENTS = [
  "Jawline Definition and Contouring",
  "Chin Projection and Balance",
  "Nose Shape and Correction",
  "Eye Rejuvenation (Blepharoplasty)",
] as const;

export function SurgeryConsultationModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("openConsultationModal", handler);
    return () => window.removeEventListener("openConsultationModal", handler);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  async function handleSurgerySubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      treatment: formData.get("treatment") as string,
      formName: "surgery",
      source:
        typeof window !== "undefined"
          ? window.location.href
          : "https://www.sculpttmfc.com/surgery",
      consent: true,
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }

      setLoading(false);
      setOpen(false);
      router.push("/thank-you-surgery");
    } catch (err) {
      setLoading(false);
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (!open) return null;

  return (
    <div
      className="modal-overlay"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Book a Consultation"
    >
      <div
        className="modal-panel"
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={() => setOpen(false)}
          aria-label="Close"
        >
          &#x2715;
        </button>

        <span className="eyebrow">Get in Touch</span>
        <h3 className="modal-title">
          Book Your <span className="accent italic">Consultation</span>
        </h3>
        <p className="modal-sub">
          Share your details and Dr. Priyanka Raj&apos;s team will reach out
          within 24 hours.
        </p>

        <form className="modal-form" onSubmit={handleSurgerySubmit} noValidate>
          <div className="form-field">
            <label htmlFor="surgery-modal-name">Full Name</label>
            <input
              id="surgery-modal-name"
              name="name"
              type="text"
              placeholder="Your full name"
              autoComplete="name"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="surgery-modal-email">Email Address</label>
            <input
              id="surgery-modal-email"
              name="email"
              type="email"
              placeholder="your@email.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="surgery-modal-phone">Phone Number</label>
            <input
              id="surgery-modal-phone"
              name="phone"
              type="tel"
              placeholder="+91 96066 01166"
              autoComplete="tel"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="surgery-modal-treatment">Treatment Interested In</label>
            <select
              id="surgery-modal-treatment"
              name="treatment"
              required
              defaultValue=""
            >
              <option value="" disabled>Select a treatment</option>
              {SURGERY_TREATMENTS.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {error && (
            <p className="modal-error">{error}</p>
          )}

          <button
            type="submit"
            className="btn-primary modal-submit"
            disabled={loading}
          >
            <span className="btn-label">
              {loading ? "Submitting…" : "Book My Consultation"}
            </span>
          </button>
        </form>

        <p className="modal-privacy">
          By submitting, you agree to our{" "}
          <a href="/privacy-policy-surgery" target="_blank" rel="noopener">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
