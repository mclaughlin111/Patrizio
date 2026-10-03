import { siteConfig } from "@/lib/site-config";
import ModelCanvas from "./ModelCanvas";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="relative isolate flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-24 text-center">
      <ModelCanvas className="absolute inset-0 -z-10" />

      <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-mute">
        {hero.label}
      </p>

      <h1 className="mt-7 font-serif text-fg">
        <span className="block text-[clamp(3.75rem,19vw,8rem)] leading-[0.9] tracking-tight">
          {hero.title}
        </span>
        <span className="mt-5 block font-sans text-xs font-medium uppercase tracking-[0.34em] text-fg/80">
          {hero.subtitle}
        </span>
      </h1>

      <span aria-hidden="true" className="mt-9 block h-px w-10 bg-barber-red" />

      <p className="mt-9 max-w-[20rem] text-[15px] leading-relaxed text-mute sm:max-w-md sm:text-base">
        {hero.body}
      </p>

      <div className="mt-10 flex w-full max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
        <a
          href={siteConfig.bookingUrl}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-barber-red px-8 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-barber-red-deep"
        >
          {hero.primaryCta}
        </a>
        <a
          href={siteConfig.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-fg/20 px-8 text-xs font-semibold uppercase tracking-[0.2em] text-fg transition-colors hover:border-fg/50"
        >
          {hero.secondaryCta}
        </a>
      </div>

      <p className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.12em] text-mute">
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-barber-red"
        />
        {hero.walkInNotice}
      </p>
    </section>
  );
}
