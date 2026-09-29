"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/slat1.png",
    alt: "Aydın Hafriyat şantiye çalışması",
  },
  {
    src: "/images/slat2.jpg",
    alt: "Ekskavatör ve kamyon ile hafriyat",
  },
  {
    src: "/images/slat3.jpg",
    alt: "Hidromek ekskavatör ve damperli kamyon",
  },
];

const INTERVAL_MS = 2500;

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="anasayfa"
      className="grain relative flex min-h-[100svh] items-center overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        {slides.map((slide, index) => {
          const isActive = index === active;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={!isActive}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                className={`object-cover object-center will-change-transform ${
                  isActive ? "animate-hero-zoom" : "scale-100"
                }`}
                sizes="100vw"
              />
            </div>
          );
        })}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-28 pb-16 md:px-8 md:pt-32 md:pb-20">
        <p className="animate-fade-up font-display text-sm tracking-[0.35em] text-safety uppercase">
          Kazı · Dolgu · Taşıma
        </p>

        <h1 className="animate-fade-up delay-1 mt-4 max-w-3xl font-display text-5xl leading-[0.95] font-semibold tracking-wide text-paper uppercase sm:text-6xl md:text-7xl lg:text-8xl">
          Aydın
          <span className="block text-safety">Hafriyat</span>
        </h1>

        <div className="animate-draw-line mt-6 h-px w-24 bg-safety" />

        <p className="animate-fade-up delay-2 mt-6 max-w-lg text-base leading-relaxed text-sand/85 md:text-lg">
          Toprağı doğru hareket ettiriyoruz. Projelerinize güvenilir ekipman ve
          disiplinli saha yönetimiyle güç katıyoruz.
        </p>

        <div className="animate-fade-up delay-3 mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#iletisim"
            className="bg-safety px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-ochre"
          >
            Teklif Al
          </a>
          <a
            href="#hizmetler"
            className="border border-paper/35 px-7 py-3.5 text-sm font-semibold tracking-wide text-paper transition-colors hover:border-safety hover:text-safety"
          >
            Hizmetlerimiz
          </a>
        </div>
      </div>

      <div className="absolute right-5 bottom-8 z-10 flex items-center gap-3 md:right-8 md:bottom-10">
        <div className="hidden font-display text-[11px] tracking-[0.35em] text-sand/40 uppercase sm:block">
          Sahada güç
        </div>
        <div className="flex items-center gap-2" role="tablist" aria-label="Hero görselleri">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Görsel ${index + 1}`}
              onClick={() => setActive(index)}
              className="group relative h-1.5 overflow-hidden rounded-full bg-paper/25 transition-all"
              style={{ width: index === active ? 36 : 12 }}
            >
              {index === active && (
                <span
                  key={`progress-${active}`}
                  className="absolute inset-y-0 left-0 bg-safety"
                  style={{
                    animation: `hero-progress ${INTERVAL_MS}ms linear forwards`,
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
