import { siteConfig } from "@/lib/site-config";
import ModelCanvas from "./ModelCanvas";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="relative isolate flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pb-28 pt-24 text-center">
      <ModelCanvas className="absolute inset-0 -z-10" />

      <p className="hero-text text-xs font-semibold uppercase tracking-[0.3em] text-fg/80">
        {hero.label}
      </p>

      <h1 className="hero-text mt-7 font-serif text-fg">
        <span className="block text-[clamp(4.25rem,22vw,9rem)] leading-[0.9] tracking-tight">
          {hero.title}
        </span>
        <span className="mt-5 block font-sans text-[13px] font-semibold uppercase tracking-[0.32em] text-fg">
          {hero.subtitle}
        </span>
      </h1>

      <span aria-hidden="true" className="mt-9 block h-px w-10 bg-barber-red" />

      <p className="hero-text mt-9 max-w-[21rem] text-base font-medium leading-relaxed text-fg/85 sm:max-w-md sm:text-lg">
        {hero.body}
      </p>

      <a
        href={siteConfig.bookingUrl}
        className="mt-10 inline-flex min-h-12 w-full max-w-xs items-center justify-center rounded-full bg-barber-red px-8 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-barber-red-deep"
      >
        {hero.primaryCta}
      </a>

      <p className="hero-text mt-7 inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.1em] text-fg/80">
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-barber-red"
        />
        {hero.walkInNotice}
      </p>

      <a
        href="#visit"
        className="hero-text absolute inset-x-0 bottom-6 mx-auto flex min-h-12 w-fit flex-col items-center justify-center gap-1 px-6 text-xs font-semibold uppercase tracking-[0.24em] text-fg"
      >
        {hero.secondaryCta}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  );
}
