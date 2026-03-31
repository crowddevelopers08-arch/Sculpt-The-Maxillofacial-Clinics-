"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookAppointment() {
  const router = useRouter();
  const [concern, setConcern] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          procedure: concern,
          treatment: concern,
          formName: "anti-aging-form",
          source:
            typeof window !== "undefined"
              ? window.location.href
              : "https://www.sculpttmfc.com/anti-aging",
          consent: true,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || result.details || "Failed to submit form");
      }

      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setConcern("");

      setTimeout(() => {
        router.push("/thank-you-aging");
      }, 1200);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Failed to submit form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full flex items-center justify-center px-4 py-10 lg:px-8 lg:py-14 overflow-x-hidden"
      style={{ background: "#ffffff", fontFamily: "'Segoe UI', sans-serif" }}
    >
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
        <div className="flex flex-col flex-1 w-full lg:max-w-[620px]">
          <p
            className="font-bold text-sm mb-1"
            style={{ color: "var(--aa-primary, #c99500)", letterSpacing: "0.08em" }}
          >
            BOOK AN
          </p>
          <h2
            className="font-extrabold max-sm:mb-4 mb-8 text-3xl lg:text-[42px]"
            style={{ color: "var(--aa-heading, #1F1F1F)", lineHeight: 1.1 }}
          >
            Appointment
          </h2>

          <div className="flex justify-center max-sm:mb-0 mb-6">
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "var(--aa-primary, #c99500)",
                opacity: 0.5,
              }}
            />
          </div>

          <form onSubmit={handleSubmit}>
            {submitSuccess && (
              <div
                className="max-sm:mb-2 mb-6 rounded-2xl px-4 py-3 text-sm font-medium"
                style={{
                  background: "rgba(34, 197, 94, 0.08)",
                  color: "#166534",
                  border: "1px solid rgba(34, 197, 94, 0.18)",
                }}
              >
                Your appointment request has been submitted successfully.
              </div>
            )}

            {submitError && (
              <div
                className="max-sm:mb-2 mb-6 rounded-2xl px-4 py-3 text-sm font-medium"
                style={{
                  background: "rgba(239, 68, 68, 0.08)",
                  color: "#b91c1c",
                  border: "1px solid rgba(239, 68, 68, 0.18)",
                }}
              >
                {submitError}
              </div>
            )}

            <div className="flex flex-col sm:flex-row max-sm:gap-2 gap-5 max-sm:mb-2 mb-6">
              <div className="flex flex-col flex-1">
                <label className="text-sm font-medium mb-2" style={{ color: "#374151" }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full outline-none"
                  style={{
                    border: "1.5px solid #cbd5e1",
                    borderRadius: 14,
                    padding: "14px 16px",
                    fontSize: "0.95rem",
                    color: "#111827",
                    background: "#fff",
                    boxShadow: "0 6px 18px rgba(15,23,42,0.04)",
                  }}
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="text-sm font-medium mb-2" style={{ color: "#374151" }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="w-full outline-none"
                  style={{
                    border: "1.5px solid #cbd5e1",
                    borderRadius: 14,
                    padding: "14px 16px",
                    fontSize: "0.95rem",
                    color: "#111827",
                    background: "#fff",
                    boxShadow: "0 6px 18px rgba(15,23,42,0.04)",
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row max-sm:gap-2 gap-5 max-sm:mb-2 mb-6">
              <div className="flex flex-col flex-1">
                <label className="text-sm font-medium mb-2" style={{ color: "#374151" }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full outline-none"
                  style={{
                    border: "1.5px solid #cbd5e1",
                    borderRadius: 14,
                    padding: "14px 16px",
                    fontSize: "0.95rem",
                    color: "#111827",
                    background: "#fff",
                    boxShadow: "0 6px 18px rgba(15,23,42,0.04)",
                  }}
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="text-sm font-medium mb-2" style={{ color: "#374151" }}>
                  Concern
                </label>
                <div className="relative">
                  <select
                    value={concern}
                    onChange={(e) => setConcern(e.target.value)}
                    className="w-full outline-none appearance-none"
                    required
                    style={{
                      border: "1.5px solid #cbd5e1",
                      borderRadius: 14,
                      padding: "14px 40px 14px 16px",
                      fontSize: "0.95rem",
                      color: concern ? "#374151" : "var(--aa-muted, #6b7280)",
                      background: "#fff",
                      cursor: "pointer",
                      boxShadow: "0 6px 18px rgba(15,23,42,0.04)",
                    }}
                  >
                    <option value="" disabled>
                      Select your concern
                    </option>
                    <option value="Anti-Aging Treatment">Anti-Aging Treatment</option>
                    <option value="Skin Rejuvenation">Skin Rejuvenation</option>
                    <option value="Facial Contouring">Facial Contouring</option>
                    <option value="Wrinkle Reduction">Wrinkle Reduction</option>
                    <option value="Other">Other</option>
                  </select>
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    width="16"
                    height="16"
                    className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                  >
                    <path
                      d="M5 7.5l5 5 5-5"
                      stroke="var(--aa-primary, #c99500)"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col max-sm:mb-2 mb-6">
              <label className="text-sm font-medium mb-2" style={{ color: "#374151" }}>
                Description
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Briefly describe your concern or any additional details..."
                rows={4}
                className="w-full outline-none resize-none"
                style={{
                  border: "1.5px solid #cbd5e1",
                  borderRadius: 16,
                  padding: "14px 16px",
                  fontSize: "0.95rem",
                  color: "#111827",
                  background: "#fff",
                  boxShadow: "0 6px 18px rgba(15,23,42,0.04)",
                }}
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-3 font-bold text-white disabled:opacity-70"
                style={{
                  background:
                    "linear-gradient(90deg, var(--aa-primary, #c99500) 0%, var(--aa-primary-dark, #c99500) 100%)",
                  border: "none",
                  borderRadius: 10,
                  padding: "14px 32px",
                  fontSize: "0.97rem",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  letterSpacing: "0.02em",
                }}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
                <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
                  <path
                    d="M4 10h12M12 6l4 4-4 4"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>

        <div
          className="relative flex-shrink-0 w-full lg:w-[420px]"
          style={{ height: "clamp(300px, 60vw, 560px)" }}
        >
          <div
            className="absolute lg:left-[-20px] lg:right-[-40px] lg:top-[20px] lg:bottom-[-20px]"
            style={{
              top: 10,
              left: 0,
              right: 0,
              bottom: -10,
              background: "var(--aa-surface-soft, #f8f7f2)",
              borderRadius: "62% 38% 46% 54% / 60% 44% 56% 40%",
              zIndex: 0,
            }}
          />

          <div
            className="absolute overflow-hidden"
            style={{
              top: 30,
              left: 16,
              right: 16,
              bottom: 30,
              borderRadius: 24,
              background: "#f8f3e3",
              zIndex: 1,
              boxShadow: "0 8px 32px rgba(201,149,0,0.10)",
            }}
          >
            <img
              src="/before-afte.jpg"
              alt="Anti-aging before and after result"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
