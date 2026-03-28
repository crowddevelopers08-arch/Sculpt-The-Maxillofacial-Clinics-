"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const youtubeVideos = [
  {
    id: "7ug2Ocn4Xco",
    title: "Skin Treatment Short 1",
  },
  {
    id: "QcSUJRyIGy0",
    title: "Skin Treatment Short 2",
  },
  {
    id: "42Ap84DVKe0",
    title: "Skin Treatment Short 3",
  },
];

export default function SkinvideoTestimonials() {
  const railRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const el = railRef.current;
    if (!el) return;

    const card = el.children[0]?.children[index] as HTMLElement | undefined;
    if (!card) return;

    const scrollLeft = card.offsetLeft - (el.clientWidth - card.clientWidth) / 2;
    el.scrollTo({ left: scrollLeft, behavior: "smooth" });
    setCurrentIndex(index);
  };

  const scrollByViewport = (dir: "left" | "right") => {
    const nextIndex = dir === "right" ? currentIndex + 1 : currentIndex - 1;
    scrollToIndex(Math.max(0, Math.min(nextIndex, youtubeVideos.length - 1)));
  };

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;

    const handleScroll = () => {
      const cardWidth = el.children[0]?.children[0]?.clientWidth || 0;
      const gap = 24;
      const newIndex = Math.round(el.scrollLeft / (cardWidth + gap));
      setCurrentIndex(Math.max(0, Math.min(newIndex, youtubeVideos.length - 1)));
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="testimonials"
      className="bg-slate-50 py-12 max-[470px]:py-6"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center max-[470px]:mb-8">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Watch Our YouTube Videos
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">
            Explore quick skin treatment insights and patient-focused video highlights from our YouTube Shorts.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => scrollByViewport("left")}
            aria-label="Previous video"
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 z-10 flex -translate-y-1/2 rounded-full bg-white/90 p-2 text-slate-700 shadow-lg transition-all hover:scale-110 hover:bg-white sm:p-3 ${
              currentIndex === 0 ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>

          <button
            onClick={() => scrollByViewport("right")}
            aria-label="Next video"
            disabled={currentIndex === youtubeVideos.length - 1}
            className={`absolute right-0 top-1/2 z-10 flex -translate-y-1/2 rounded-full bg-white/90 p-2 text-slate-700 shadow-lg transition-all hover:scale-110 hover:bg-white sm:p-3 ${
              currentIndex === youtubeVideos.length - 1 ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>

          <div
            ref={railRef}
            className="no-scrollbar overflow-x-auto scroll-smooth snap-x snap-mandatory"
          >
            <div className="flex gap-6 px-12 sm:px-16">
              {youtubeVideos.map((video) => (
                <div
                  key={video.id}
                  className="mx-auto w-[85vw] max-w-xs flex-shrink-0 snap-center sm:w-[45%] md:w-[30%] md:max-w-md"
                >
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-shadow hover:shadow-xl">
                    <div className="aspect-[9/16] bg-slate-200">
                      <iframe
                        className="h-full w-full"
                        src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                        title={video.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2 md:hidden">
            {youtubeVideos.map((video, idx) => (
              <button
                key={video.id}
                onClick={() => scrollToIndex(idx)}
                className={`h-2 w-2 rounded-full transition-all ${
                  idx === currentIndex ? "scale-125 bg-slate-700" : "bg-slate-300"
                }`}
                aria-label={`Go to video ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
