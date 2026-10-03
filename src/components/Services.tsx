import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

const icons: Record<string, string> = {
  Haircuts: "/assets/services/haircut.png",
  "Beard grooming": "/assets/services/beard_grooming.png",
  "Beard shaping": "/assets/services/shaping.png",
};

const eyebrow = "text-[11px] font-medium uppercase tracking-[0.32em] text-mute";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-t border-border-soft py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-barber-red">
          Services
        </p>
        <h2
          id="services-heading"
          className="mt-4 font-serif text-4xl text-fg sm:text-5xl"
        >
          Classic barbering
        </h2>
        <p className="mx-auto mt-6 max-w-xs text-[15px] leading-relaxed text-mute sm:max-w-md">
          A small, focused offer — done properly rather than done fast.
        </p>

        <ul className="mt-14 grid gap-14 sm:grid-cols-3 sm:gap-10">
          {siteConfig.services.map((service) => (
            <li key={service.name}>
              <Image
                src={icons[service.name]}
                alt=""
                width={96}
                height={96}
                aria-hidden="true"
                className="mx-auto h-24 w-24 rounded-full object-contain opacity-80 mix-blend-multiply dark:mix-blend-screen dark:invert"
              />
              <h3 className="mt-5 font-serif text-2xl text-fg">
                {service.name}
              </h3>
              <p className="mx-auto mt-3 max-w-[16rem] text-sm leading-relaxed text-mute">
                {service.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-20 max-w-sm">
          <h3 className={eyebrow}>Price list</h3>
          <ul className="mt-5 divide-y divide-border-soft border-y border-border-soft text-sm">
            {siteConfig.priceList.map((item) => (
              <li
                key={item.name}
                className="flex justify-between gap-4 py-3.5 text-left"
              >
                <span className="text-fg">{item.name}</span>
                <span className="text-right text-mute">{item.price}</span>
              </li>
            ))}
          </ul>
          <a
            href={siteConfig.bookingUrl}
            className="mt-10 inline-flex min-h-12 w-full max-w-xs items-center justify-center rounded-full bg-barber-red px-8 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-barber-red-deep"
          >
            {siteConfig.hero.primaryCta}
          </a>
        </div>

        <div className="mt-20 grid gap-12 sm:grid-cols-2">
          {siteConfig.productGroups.map((group) => (
            <div key={group.title}>
              <h3 className={eyebrow}>{group.title}</h3>
              <ul className="mt-5 space-y-2 text-sm text-fg/85">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-14 border-t border-border-soft pt-20 sm:grid-cols-2 sm:gap-10">
          {siteConfig.testimonials.map((testimonial) => (
            <figure key={testimonial.quote}>
              <span
                aria-hidden="true"
                className="block font-serif text-4xl leading-none text-barber-red"
              >
                &ldquo;
              </span>
              <blockquote className="mx-auto mt-2 max-w-sm font-serif text-lg italic leading-relaxed text-fg">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-5 text-[11px] uppercase tracking-[0.28em] text-mute">
                {testimonial.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
