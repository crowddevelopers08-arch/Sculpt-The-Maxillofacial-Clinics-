"use client";

import { useRef, useState } from "react";
import { SurgerySectionEyebrow } from "../surgery-shared";

const TESTIMONIAL_VIDEOS = [
  { id: "7ug2Ocn4Xco", title: "Patient Testimonial 1" },
  { id: "QcSUJRyIGy0", title: "Patient Testimonial 2" },
  { id: "42Ap84DVKe0", title: "Patient Testimonial 3" },
];

export function SurgeryTestimonialsSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  function scrollTo(index: number) {
    const grid = gridRef.current;
    if (!grid) return;
    const width = grid.offsetWidth;
    grid.scrollTo({ left: width * index, behavior: "smooth" });
    setCurrent(index);
  }

  return (
    <section className="section section-surface" id="surgery-testimonials">
      <div className="shell">
        <div className="center-heading reveal">
          <SurgerySectionEyebrow>Patient Stories</SurgerySectionEyebrow>
          <h2>
            Patient <span className="text-gradient italic">Testimonials</span>
          </h2>
          <p className="section-copy centered">
            Hear directly from patients who have experienced life-changing results with Dr. Priyanka Raj.
          </p>
        </div>

        <div className="testimonials-carousel reveal delay-1">
          <div className="testimonials-grid" ref={gridRef}>
            {TESTIMONIAL_VIDEOS.map((video) => (
              <div key={video.id} className="testimonial-video-wrap">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="testimonial-iframe"
                />
              </div>
            ))}
          </div>

          <div className="testimonials-nav">
            <button
              className="testimonials-nav-btn"
              onClick={() => scrollTo(Math.max(0, current - 1))}
              disabled={current === 0}
              aria-label="Previous"
            >
              &#8592;
            </button>
            <button
              className="testimonials-nav-btn"
              onClick={() => scrollTo(Math.min(TESTIMONIAL_VIDEOS.length - 1, current + 1))}
              disabled={current === TESTIMONIAL_VIDEOS.length - 1}
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
