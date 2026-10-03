"use client";

import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

/** Simple, accessible image carousel — one image at a time, prev/next + dots. */
export default function Carousel() {
  const images = siteConfig.galleryImages;
  const [index, setIndex] = useState(0);

  const goTo = (next: number) =>
    setIndex((next + images.length) % images.length);

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto px-0 sm:px-6 md:max-w-4xl">
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.32em] text-barber-red">
          The shop
        </p>
        <h2
          id="gallery-heading"
          className="mt-4 px-6 text-center font-serif text-4xl text-fg sm:px-0 sm:text-5xl"
        >
          Gallery
        </h2>

        <div className="relative mt-12 overflow-hidden bg-paper-soft sm:rounded-sm">
          <div className="relative aspect-[4/5] w-full sm:aspect-[16/9]">
            <Image
              key={images[index].src}
              src={images[index].src}
              alt={images[index].alt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 768px, 100vw"
            />
          </div>

          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 inline-flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper/70 text-fg backdrop-blur-sm transition-colors hover:bg-paper/90"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M15 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 inline-flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper/70 text-fg backdrop-blur-sm transition-colors hover:bg-paper/90"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div
          className="mt-5 flex justify-center gap-1 px-4 sm:px-0"
          role="tablist"
          aria-label="Gallery slides"
        >
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show photo ${i + 1} of ${images.length}`}
              onClick={() => goTo(i)}
              className="group inline-flex h-8 w-8 items-center justify-center"
            >
              <span
                aria-hidden="true"
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === index
                    ? "bg-barber-red"
                    : "bg-fg/25 group-hover:bg-fg/50"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
