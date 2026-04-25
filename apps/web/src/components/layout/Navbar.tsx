"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { trackEvent } from "@/lib/track";

const desktopLinks = [
  { label: "Home", href: "/", type: "route" as const },
  { label: "About", href: "/#about", type: "anchor" as const },
  { label: "Courses", href: "/courses", type: "route" as const },
  { label: "Gallery", href: "/gallery", type: "route" as const },
];

const mobileLinks = [
  { label: "Home", href: "/", type: "route" as const },
  { label: "About", href: "/#about", type: "anchor" as const },
  { label: "Courses", href: "/courses", type: "route" as const },
  { label: "Gallery", href: "/gallery", type: "route" as const },
  { label: "Enroll", href: "/enroll", type: "route" as const },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
  <>
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={clsx(
          "mx-auto max-w-7xl transition-all duration-300",
          isScrolled
            ? "rounded-3xl border border-white/10 bg-[#0f172a]/70 shadow-[0_16px_50px_rgba(15,23,42,0.24)] backdrop-blur-xl"
            : "rounded-3xl border border-transparent bg-transparent"
        )}
      >
        <div className="grid grid-cols-[auto_1fr_auto] items-center px-4 py-3 sm:px-5 lg:px-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition duration-300 hover:bg-white/10 lg:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <span
                className={clsx(
                  "inline-flex transition-transform duration-300",
                  isOpen ? "rotate-90" : "rotate-0"
                )}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </span>
            </button>

            <Link
              href="/"
              prefetch={false}
              className="flex items-center gap-3"
              onClick={() => {
                setIsOpen(false);
                trackEvent("navbar_brand_click", { location: "navbar" });
              }}
            >
              <div className="relative h-12 w-12 overflow-hidden rounded-lg border border-white/10 bg-white/5">
                <Image
                  src="/logo.png"
                  alt="ANT Developers Logo"
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                  priority
                />
              </div>

              <div>
                <div className="text-2xl font-semibold leading-none text-white">
                  ANT Developers
                </div>
                <div className="mt-1 text-sm text-slate-300">
                  Transforming Skills into Success
                </div>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex lg:justify-center">
            <nav className="flex items-center justify-center gap-10 xl:gap-12">
              {[
                { label: "Home", href: "/", type: "route" as const },
                { label: "About", href: "/#about", type: "anchor" as const },
                { label: "Courses", href: "/courses", type: "route" as const },
                {
                  label: "Testimonials",
                  href: "/#testimonials",
                  type: "anchor" as const,
                },
                { label: "Gallery", href: "/gallery", type: "route" as const },
              ].map((link) =>
                link.type === "anchor" ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="relative text-sm font-semibold text-slate-200 transition duration-300 hover:text-brand-orange after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-brand-orange after:transition-all after:duration-300 hover:after:w-full"
                    onClick={() =>
                      trackEvent("navbar_link_click", { label: link.label })
                    }
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    prefetch={false}
                    className="relative text-sm font-semibold text-slate-200 transition duration-300 hover:text-brand-orange after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-brand-orange after:transition-all after:duration-300 hover:after:w-full"
                    onClick={() =>
                      trackEvent("navbar_link_click", { label: link.label })
                    }
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          <div className="flex justify-end">
            <div className="hidden lg:flex">
              <Link
                href="/enroll"
                prefetch={false}
                className="btn-primary"
                onClick={() =>
                  trackEvent("navbar_enroll_click", { location: "navbar" })
                }
              >
                Enroll Now
              </Link>
            </div>

            <div className="lg:hidden">
              <Link
                href="/enroll"
                prefetch={false}
                className="btn-primary"
                onClick={() =>
                  trackEvent("navbar_enroll_click", {
                    location: "navbar_mobile",
                  })
                }
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div
      className={clsx(
        "fixed left-0 top-[92px] z-40 w-full px-4 transition-all duration-300 sm:px-6 lg:hidden",
        isOpen
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-4 opacity-0"
      )}
    >
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-[#0f172a]/90 p-4 shadow-[0_16px_50px_rgba(15,23,42,0.24)] backdrop-blur-xl">
        <nav className="flex flex-col gap-2">
          {mobileLinks.map((link) =>
            link.type === "anchor" ? (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
                onClick={() => {
                  setIsOpen(false);
                  trackEvent("mobile_nav_link_click", { label: link.label });
                }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
                onClick={() => {
                  setIsOpen(false);
                  trackEvent("mobile_nav_link_click", { label: link.label });
                }}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </div>
  </>
);
}