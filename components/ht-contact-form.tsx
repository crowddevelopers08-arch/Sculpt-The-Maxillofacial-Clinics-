"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { X, Calendar, User, Mail, Phone, MessageSquare, Send } from "lucide-react";

const ContactFormPopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    message: "",
    consent: true
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const colors = {
    primary: "#bc9c24",
    primaryDark: "#8b6c0d",
    primaryLight: "#f4e8c1",
    text: "#333333",
    textLight: "#6b7280",
    white: "#ffffff"
  };

  const services = [
    "Hair Transplant",
    "Beard Transplant",
    "Eyebrow Transplant",
    "GFC Treatment",
    "PRP Therapy",
    "General Consultation"
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const leadData = {
        ...formData,
        formName: "hairtransplant",
        treatment: formData.service,
        date: formData.preferredDate,
        source: window.location.href || "https://www.sculpttmfc.com/hair-transplant",
        consent: true
      };

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        console.log('Form submitted successfully:', result);
        
        // Redirect to thank you page after a brief delay
        setTimeout(() => {
          // Reset form
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            preferredDate: "",
            message: "",
            consent: true
          });
          
          // Close the popup
          onClose();
          
          // Redirect to thank you page
          router.push("/thank-you");
        }, 1500);
      } else {
        throw new Error(result.error || result.details || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  // Hide popup if not open
  if (!isOpen) return null;

  // Get current date for min date restriction
  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      {/* Backdrop - Responsive with safe area for mobile */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Popup Container - Fully responsive */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8">
        <div 
          className="relative bg-white rounded-xl xs:rounded-2xl sm:rounded-3xl shadow-2xl 
                     w-full max-w-[95vw] xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 
                     max-h-[90vh] xs:max-h-[92vh] sm:max-h-[95vh] overflow-y-auto
                     animate-slideUp"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header - Responsive padding and sizing */}
          <div 
            className="sticky top-0 z-10 px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-3 xs:py-4 sm:py-5 
                       rounded-t-xl xs:rounded-t-2xl sm:rounded-t-3xl"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.primary})`
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 xs:gap-2 sm:gap-3">
                <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 
                              bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white">
                    Book Appointment
                  </h2>
                  <p className="text-white/90 text-xs xs:text-sm sm:text-sm hidden xs:block">
                    We'll get back to you soon
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                disabled={submitting}
                className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 
                         bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center 
                         transition-all duration-300 hover:rotate-90 flex-shrink-0 disabled:opacity-50"
                aria-label="Close form"
              >
                <X className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Form - Responsive spacing and sizing */}
          <form onSubmit={handleSubmit} className="p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 space-y-2 xs:space-y-3 sm:space-y-4">
            {/* Success Message */}
            {submitSuccess && (
              <div className="p-2 xs:p-3 sm:p-3 bg-green-50 border border-green-200 rounded-lg 
                            text-green-700 text-xs xs:text-sm sm:text-sm">
                ✅ Appointment request submitted successfully! Redirecting to thank you page...
              </div>
            )}

            {/* Error Message */}
            {submitError && (
              <div className="p-2 xs:p-3 sm:p-3 bg-red-50 border border-red-200 rounded-lg 
                            text-red-700 text-xs xs:text-sm sm:text-sm">
                ❌ {submitError}
              </div>
            )}

            {/* Name Field */}
            <div>
              <label 
                htmlFor="name" 
                className="block text-xs xs:text-sm sm:text-sm font-bold mb-1 xs:mb-1.5 sm:mb-2"
                style={{ color: colors.text }}
              >
                Full Name *
              </label>
              <div className="relative">
                <User 
                  className="absolute left-2 xs:left-3 sm:left-4 top-1/2 -translate-y-1/2 
                            w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" 
                  style={{ color: colors.primary }}
                />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={submitting}
                  className="w-full pl-8 xs:pl-10 sm:pl-12 pr-2 xs:pr-3 sm:pr-4 
                           py-2 xs:py-2.5 sm:py-3 text-xs xs:text-sm sm:text-base 
                           border-2 rounded-lg xs:rounded-xl sm:rounded-xl 
                           focus:outline-none focus:ring-2 transition-all duration-300 
                           disabled:opacity-50"
                  style={{ 
                    borderColor: colors.primaryLight,
                    color: colors.text
                  }}
                  onFocus={(e) => e.target.style.borderColor = colors.primary}
                  onBlur={(e) => e.target.style.borderColor = colors.primary}
                  placeholder="Enter your name"
                />
              </div>
            </div>

            {/* Email and Phone - Responsive Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-3 sm:gap-4 md:gap-5">
              {/* Email */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-xs xs:text-sm sm:text-sm font-bold mb-1 xs:mb-1.5 sm:mb-2"
                  style={{ color: colors.text }}
                >
                  Email *
                </label>
                <div className="relative">
                  <Mail 
                    className="absolute left-2 xs:left-3 sm:left-4 top-1/2 -translate-y-1/2 
                              w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" 
                    style={{ color: colors.primary }}
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={submitting}
                    className="w-full pl-8 xs:pl-10 sm:pl-12 pr-2 xs:pr-3 sm:pr-4 
                             py-2 xs:py-2.5 sm:py-3 text-xs xs:text-sm sm:text-base 
                             border-2 rounded-lg xs:rounded-xl sm:rounded-xl 
                             focus:outline-none focus:ring-2 transition-all duration-300 
                             disabled:opacity-50"
                    style={{ 
                      borderColor: colors.primaryLight,
                      color: colors.text
                    }}
                    onFocus={(e) => e.target.style.borderColor = colors.primary}
                    onBlur={(e) => e.target.style.borderColor = colors.primary}
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label 
                  htmlFor="phone" 
                  className="block text-xs xs:text-sm sm:text-sm font-bold mb-1 xs:mb-1.5 sm:mb-2"
                  style={{ color: colors.text }}
                >
                  Phone *
                </label>
                <div className="relative">
                  <Phone 
                    className="absolute left-2 xs:left-3 sm:left-4 top-1/2 -translate-y-1/2 
                              w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" 
                    style={{ color: colors.primary }}
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={submitting}
                    className="w-full pl-8 xs:pl-10 sm:pl-12 pr-2 xs:pr-3 sm:pr-4 
                             py-2 xs:py-2.5 sm:py-3 text-xs xs:text-sm sm:text-base 
                             border-2 rounded-lg xs:rounded-xl sm:rounded-xl 
                             focus:outline-none focus:ring-2 transition-all duration-300 
                             disabled:opacity-50"
                    style={{ 
                      borderColor: colors.primaryLight,
                      color: colors.text
                    }}
                    onFocus={(e) => e.target.style.borderColor = colors.primary}
                    onBlur={(e) => e.target.style.borderColor = colors.primary}
                    placeholder="+91 98765 43210"
                    pattern="[0-9\s\-+\(\)]*"
                  />
                </div>
              </div>
            </div>

            {/* Service and Date - Responsive Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-3 sm:gap-4 md:gap-5">
              {/* Service Selection */}
              <div>
                <label 
                  htmlFor="service" 
                  className="block text-xs xs:text-sm sm:text-sm font-bold mb-1 xs:mb-1.5 sm:mb-2"
                  style={{ color: colors.text }}
                >
                  Service *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  disabled={submitting}
                  className="w-full px-2 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3 
                           text-xs xs:text-sm sm:text-base border-2 
                           rounded-lg xs:rounded-xl sm:rounded-xl 
                           focus:outline-none focus:ring-2 transition-all duration-300 
                           disabled:opacity-50 appearance-none"
                  style={{ 
                    borderColor: colors.primaryLight,
                    color: colors.text,
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='${encodeURIComponent(colors.primary)}' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.5rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                    paddingRight: '2.5rem'
                  }}
                  onFocus={(e) => e.target.style.borderColor = colors.primary}
                  onBlur={(e) => e.target.style.borderColor = colors.primary}
                >
                  <option value="">Select service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Date */}
              <div>
                <label 
                  htmlFor="preferredDate" 
                  className="block text-xs xs:text-sm sm:text-sm font-bold mb-1 xs:mb-1.5 sm:mb-2"
                  style={{ color: colors.text }}
                >
                  Date *
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  disabled={submitting}
                  min={today}
                  className="w-full px-2 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3 
                           text-xs xs:text-sm sm:text-base border-2 
                           rounded-lg xs:rounded-xl sm:rounded-xl 
                           focus:outline-none focus:ring-2 transition-all duration-300 
                           disabled:opacity-50"
                  style={{ 
                    borderColor: colors.primaryLight,
                    color: colors.text
                  }}
                  onFocus={(e) => e.target.style.borderColor = colors.primary}
                  onBlur={(e) => e.target.style.borderColor = colors.primary}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label 
                htmlFor="message" 
                className="block text-xs xs:text-sm sm:text-sm font-bold mb-1 xs:mb-1.5 sm:mb-2"
                style={{ color: colors.text }}
              >
                Message (Optional)
              </label>
              <div className="relative">
                <MessageSquare 
                  className="absolute left-2 xs:left-3 sm:left-4 top-2 xs:top-3 sm:top-4 
                            w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" 
                  style={{ color: colors.primary }}
                />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  disabled={submitting}
                  className="w-full pl-8 xs:pl-10 sm:pl-12 pr-2 xs:pr-3 sm:pr-4 
                           py-2 xs:py-2.5 sm:py-3 text-xs xs:text-sm sm:text-base 
                           border-2 rounded-lg xs:rounded-xl sm:rounded-xl 
                           focus:outline-none focus:ring-2 transition-all duration-300 
                           resize-none disabled:opacity-50"
                  style={{ 
                    borderColor: colors.primaryLight,
                    color: colors.text
                  }}
                  onFocus={(e) => e.target.style.borderColor = colors.primary}
                  onBlur={(e) => e.target.style.borderColor = colors.primary}
                  placeholder="Any specific concerns?"
                />
              </div>
            </div>

            {/* Consent */}
            <div className="flex items-start gap-1.5 xs:gap-2 sm:gap-2">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={(e) => setFormData(prev => ({ ...prev, consent: e.target.checked }))}
                required
                disabled={submitting}
                className="mt-0.5 xs:mt-1 sm:mt-1 w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4 sm:h-4"
              />
              <label 
                htmlFor="consent" 
                className="text-xs xs:text-xs sm:text-xs text-gray-600 leading-tight"
              >
                I consent to receive communications from Sculpt regarding my appointment and related services.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting || !formData.consent}
              className="w-full py-2.5 xs:py-3 sm:py-3.5 md:py-4 
                       rounded-lg xs:rounded-xl sm:rounded-xl 
                       font-bold text-white text-xs xs:text-sm sm:text-base md:text-lg 
                       transition-all duration-300 hover:scale-105 hover:shadow-xl 
                       flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 
                       group disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ 
                background: submitting 
                  ? colors.primaryLight 
                  : `linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark})`
              }}
            >
              {submitting ? (
                <>
                  <div className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 
                                border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 
                                  transition-transform group-hover:translate-x-1" />
                  Submit Request
                </>
              )}
            </button>

            {/* Privacy Note */}
            <p className="text-xs xs:text-xs sm:text-xs text-center leading-relaxed" 
               style={{ color: colors.textLight }}>
              Your information is secure and will only be used to contact you regarding your appointment.
            </p>
          </form>
        </div>
      </div>

      {/* Animation Styles */}
<style jsx>{`
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-slideUp {
    animation: slideUp 0.3s ease-out;
  }

  /* Safe area support for mobile devices with notches - FIXED */
        .safe-area-bottom {
          padding-bottom: env("safe-area-inset-bottom", 0px);
        }

        .safe-area-top {
          padding-top: env("safe-area-inset-top", 0px);

  /* Custom scrollbar for the popup */
  .overflow-y-auto {
    scrollbar-width: thin;
scrollbar-color: #f4e8c1 transparent;  }

  .overflow-y-auto::-webkit-scrollbar {
    width: 6px;
  }

  .overflow-y-auto::-webkit-scrollbar-track {
    background: transparent;
  }

  .overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: #f4e8c1;
    border-radius: 20px;
  }

  /* Remove date input spinner */
  input[type="date"]::-webkit-inner-spin-button,
  input[type="date"]::-webkit-calendar-picker-indicator {
    opacity: 0.5;
  }

  /* Better select arrow styling */
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  /* Focus styles for better accessibility */
  *:focus {
outline: 2px solid #bc9c24;
outline-offset: 2px;
  }

  /* Touch-friendly tap targets */
  button, input, select, textarea {
    touch-action: manipulation;
  }

  /* Prevent zoom on iOS when focusing input */
  @media screen and (max-width: 768px) {
    input, select, textarea {
      font-size: 16px !important;
    }
  }
`}</style>
    </>
  );
};

export default ContactFormPopup;