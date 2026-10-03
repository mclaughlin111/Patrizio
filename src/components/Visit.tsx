import { siteConfig } from "@/lib/site-config";

export default function Visit() {
  return (
    <section
      id="visit"
      aria-labelledby="visit-heading"
      className="border-t border-border-soft py-20 sm:py-28"
    >
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-barber-red">
          Visit
        </p>
        <h2
          id="visit-heading"
          className="mt-4 font-serif text-4xl text-fg sm:text-5xl"
        >
          {siteConfig.address.area}, {siteConfig.address.city}
        </h2>
        <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-mute">
          {siteConfig.about.body}
        </p>

        <div className="mt-14 divide-y divide-border-soft border-y border-border-soft">
          <div className="py-10">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.32em] text-mute">
              Address
            </h3>
            <address className="mt-4 font-serif text-xl not-italic leading-relaxed text-fg">
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.area}, {siteConfig.address.city}{" "}
              {siteConfig.address.postcode}
            </address>
            <a
              href={siteConfig.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center text-xs font-semibold uppercase tracking-[0.2em] text-fg underline decoration-barber-red decoration-1 underline-offset-8 transition-colors hover:text-barber-red"
            >
              Get directions
            </a>
          </div>

          <div className="py-10">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.32em] text-mute">
              Opening times
            </h3>
            <ul className="mx-auto mt-5 max-w-xs space-y-2.5 text-sm text-fg">
              {siteConfig.hours.map((row) => (
                <li key={row.label} className="flex justify-between gap-4">
                  <span className="text-mute">{row.label}</span>
                  <span className={row.closed ? "text-barber-red" : undefined}>
                    {row.hours}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={siteConfig.contact.phoneHref}
              className="mt-6 inline-flex min-h-11 items-center font-serif text-2xl text-fg transition-colors hover:text-barber-red"
            >
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>

          <div className="grid gap-8 py-10 sm:grid-cols-2">
            <div>
              <h3 className="text-[11px] font-medium uppercase tracking-[0.32em] text-mute">
                Travel by train
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">
                {siteConfig.travel.train}
              </p>
            </div>
            <div>
              <h3 className="text-[11px] font-medium uppercase tracking-[0.32em] text-mute">
                Travel by car
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">
                {siteConfig.travel.car}
              </p>
            </div>
          </div>

          <div className="py-10">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.32em] text-mute">
              Meet the Bristol barbers
            </h3>
            <ul className="mt-5 flex justify-center gap-8 sm:gap-12">
              {siteConfig.team.map((member) => (
                <li key={member.name}>
                  <span className="block font-serif text-xl text-fg">
                    {member.name}
                  </span>
                  <span className="mt-1 block text-xs text-mute">
                    {member.role}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-xs leading-relaxed text-mute">
          Local shops in Redland:{" "}
          {siteConfig.localShops.map((shop, i) => (
            <span key={shop.url}>
              {i > 0 && " · "}
              <a
                href={shop.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-fg/30 underline-offset-4 hover:text-fg"
              >
                {shop.name}
              </a>
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
