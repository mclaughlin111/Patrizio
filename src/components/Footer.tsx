import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-border-soft bg-paper-soft text-center">
      <div className="mx-auto max-w-md px-6 py-16">
        <Image
          src="/assets/logo-transparent.png"
          alt={`${siteConfig.business.name} logo`}
          width={743}
          height={529}
          sizes="96px"
          className="mx-auto h-16 w-auto dark:invert"
        />
        <p className="mt-4 text-[11px] uppercase tracking-[0.32em] text-mute">
          {siteConfig.business.establishedLabel} &middot; Redland, Bristol
        </p>

        <span
          aria-hidden="true"
          className="mx-auto mt-10 block h-px w-10 bg-barber-red"
        />

        <address className="mt-10 text-sm not-italic leading-relaxed text-fg/85">
          {siteConfig.address.full}
        </address>
        <a
          href={siteConfig.contact.phoneHref}
          className="mt-2 inline-flex min-h-11 items-center text-sm text-fg transition-colors hover:text-barber-red"
        >
          {siteConfig.contact.phoneDisplay}
        </a>
      </div>

      <div className="border-t border-border-soft px-6 py-6 text-[11px] text-mute">
        {siteConfig.footer.copyright}
      </div>
    </footer>
  );
}
