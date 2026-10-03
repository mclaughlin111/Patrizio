"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-border-soft bg-paper/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 sm:px-6">
        <div className="flex items-center">
          <button
            type="button"
            className="-ml-2 inline-flex min-h-11 min-w-11 items-center justify-center text-fg md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 9h16M4 15h16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 md:flex"
          >
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-medium uppercase tracking-[0.2em] text-mute transition-colors hover:text-fg"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <Link
          href="#main"
          className="flex items-center rounded-sm"
          aria-label={`${siteConfig.business.name} — home`}
        >
          <Image
            src="/assets/logo-transparent.png"
            alt={`${siteConfig.business.name} logo`}
            width={743}
            height={529}
            priority
            sizes="72px"
            className="h-12 w-auto dark:invert"
          />
        </Link>

        <div className="flex items-center justify-end">
          <a
            href={siteConfig.bookingUrl}
            className="-mr-2 inline-flex min-h-11 items-center px-2 text-xs font-semibold uppercase tracking-[0.2em] text-fg transition-colors hover:text-barber-red"
          >
            Book
          </a>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-border-soft px-6 pb-8 pt-2 md:hidden"
        >
          <ul className="flex flex-col divide-y divide-border-soft text-center">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center justify-center font-serif text-2xl text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={siteConfig.bookingUrl}
            onClick={() => setOpen(false)}
            className="mt-6 flex min-h-12 items-center justify-center rounded-full bg-barber-red px-5 text-sm font-semibold uppercase tracking-[0.15em] text-white"
          >
            Book an appointment
          </a>
        </nav>
      )}
    </header>
  );
}
