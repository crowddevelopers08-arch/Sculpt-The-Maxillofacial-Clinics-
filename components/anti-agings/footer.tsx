"use client"

const treatmentLinks = [
  { label: "Facial Assesment", href: "#treatments" },
  { label: "Personal Consultation", href: "#treatments" },
  { label: "Personal Treatment Plan", href: "#treatments" },
  { label: "Aftercare & Follow-up", href: "#treatments" },
];

const quickLinks = [
  { label: "About Dr. Priyanka Raj", href: "#about-doctor" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Treatments", href: "#treatments" },
  { label: "FAQs", href: "#faqs" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(160deg, var(--aa-heading, #1F1F1F) 0%, #1F1F1F 60%, #111111 100%)",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      {/* Top accent line */}
      <div style={{ height: 3, background: "linear-gradient(90deg, var(--aa-primary, #c99500), var(--aa-accent, #c99500), var(--aa-primary, #c99500))" }} />

      <div className="max-w-6xl mx-auto px-6 pt-14 pb-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <a href="/anti-aging" className="flex items-center gap-2" style={{ textDecoration: "none" }}>
                {/* Logo image */}
                <img
                  src="/logo.png"
                  alt="Logo"
                  style={{
                    width: 180,
                    height: 80,
                    borderRadius: 10,
                    objectFit: "cover",
                    filter: "none",
                  }}
                />
              </a>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--aa-muted, #6b7280)" }}>
              Bangalore's trusted destination for doctor-led anti-aging treatments. Natural-looking results with a safety-first approach.
            </p>
            {/* Social icons */}
            {/* <div className="flex gap-3">
              {[
                { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.975 1.246 2.242 1.308 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.974-2.242 1.246-3.608 1.308-1.265.058-1.645.069-4.849.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.975-1.246-2.242-1.308-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.197.157 3.355.673 1.924 2.104.493 3.535-.023 5.377.072 7.232-.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.853.6 3.697 2.032 5.128 1.431 1.431 3.275 1.947 5.128 2.032C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.853-.085 3.697-.6 5.128-2.032 1.431-1.431 1.947-3.275 2.032-5.128C23.986 15.668 24 15.259 24 12c0-3.259-.014-3.668-.072-4.948-.085-1.853-.6-3.697-2.032-5.128C20.465.673 18.621.157 16.768.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" },
                { label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                { label: "YouTube", path: "M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" },
              ].map(({ label, path }) => (
                <button
                  key={label}
                  aria-label={label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "linear-gradient(90deg, var(--aa-primary, #c99500) 0%, var(--aa-primary-dark, #c99500) 100%)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="var(--aa-muted, #6b7280)" width="15" height="15">
                    <path d={path} />
                  </svg>
                </button>
              ))}
            </div> */}
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: "var(--aa-accent, #c99500)" }}>
              Treatments
            </h4>
            <ul className="flex flex-col gap-3">
              {treatmentLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm flex items-center gap-2 group"
                    style={{ color: "var(--aa-muted, #6b7280)", textDecoration: "none" }}
                  >
                    <span
                      style={{
                        width: 5, height: 5,
                        borderRadius: "50%",
                        background: "var(--aa-primary, #c99500)",
                        flexShrink: 0,
                      }}
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: "var(--aa-accent, #c99500)" }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm flex items-center gap-2"
                    style={{ color: "var(--aa-muted, #6b7280)", textDecoration: "none" }}
                  >
                    <span
                      style={{
                        width: 5, height: 5,
                        borderRadius: "50%",
                        background: "var(--aa-primary, #c99500)",
                        flexShrink: 0,
                      }}
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: "var(--aa-accent, #c99500)" }}>
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                {
                  icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "315, Sapthagiri 60 Feet, Health Layout, Chandrashekhara Layout, Annapurneshwari Nagar, Bengaluru,Karnataka 560091, India",
                },
                {
                  icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                  text: "+91 9606601166",
                },
                {
                  icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                  text: "sculptmaxillo.clinic@gmail.com",
                },
              ].map(({ icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 flex items-center justify-center rounded-lg mt-0.5"
                    style={{
                      width: 32, height: 32,
                      background: "rgba(201,149,0,0.15)",
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" width="15" height="15" stroke="var(--aa-accent, #c99500)" strokeWidth="1.8">
                      <path d={icon} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm leading-relaxed" style={{ color: "var(--aa-muted, #6b7280)" }}>{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            {/* <button
              className="mt-6 w-full py-3 rounded-xl text-sm font-bold"
              style={{
                background: "linear-gradient(90deg, var(--aa-primary, #c99500) 0%, var(--aa-primary-dark, #c99500) 100%)",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.03em",
              }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book Consultation
            </button> */}
          </div>

        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.07)", marginBottom: 24 }} />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-md" style={{ color: "#6b7280" }}>
            © {new Date().getFullYear()} Sculpt The Maxillofacial Clinic. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy"].map((item) => (
              <a
                key={item}
                href="/anti-aging/privacy-policy-aging"
                className="text-md"
                style={{ color: "#6b7280", textDecoration: "none" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}




