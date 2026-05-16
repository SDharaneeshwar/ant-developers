"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import clsx from "clsx";
import { trackEvent } from "@/lib/track";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Gallery", href: "/gallery" },
];

const activityModules = [
  {
    label: "Activities",
    href: "/activities",

    topics: [
      {
        label: "Indoor Activities",
        href: "/activities#indoor-activities",
      },

      {
        label: "Blind Fold",
        href: "/activities#blind-fold",
      },

      {
        label: "Balloon Activities",
        href: "/activities#balloon-activities",
      },

      {
        label: "Hula Hoop Games",
        href: "/activities#hula-hoop-games",
      },

      {
        label: "River Crossing",
        href: "/activities#river-crossing",
      },

      {
        label: "Bridge Building",
        href: "/activities#bridge-building",
      },
    ],
  },

  {
    label: "Team Building",
    href: "/team-building",

    topics: [
      {
        label: "Team Quiz Marathon",
        href: "/team-building#team-quiz-marathon",
      },

      {
        label: "Memory Recalls",
        href: "/team-building#memory-recalls",
      },

      {
        label: "Challenge 100",
        href: "/team-building#challenge-100",
      },

      {
        label: "Tribal Survivor Event",
        href: "/team-building#tribal-survivor-event",
      },

      {
        label: "Scavenger Event",
        href: "/team-building#scavenger-event",
      },
    ],
  },

  {
    label: "Corporate Training",
    href: "/corporate-training",

    topics: [
      {
        label: "Outdoor Management Development",
        href: "/corporate-training#outdoor-management-development",
      },

      {
        label: "Workforce Development",
        href: "/corporate-training#workforce-development",
      },

      {
        label: "Personal Development",
        href: "/corporate-training#personal-development",
      },

      {
        label: "Manager to Leader",
        href: "/corporate-training#manager-to-leader",
      },

      {
        label: "Corporate Summer Camp",
        href: "/corporate-training#corporate-summer-camp",
      },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

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

  const navbarStyle = useMemo(() => {
    const progress = Math.min(scrollY / 520, 1);

    const start = { r: 4, g: 28, b: 50 };
    const end = { r: 234, g: 241, b: 247 };

    const r = Math.round(start.r + (end.r - start.r) * progress);
    const g = Math.round(start.g + (end.g - start.g) * progress);
    const b = Math.round(start.b + (end.b - start.b) * progress);

    const bgAlpha =
      progress < 0.08
        ? 0.1
        : 0.18 + progress * 0.72;

    const borderAlpha =
      progress < 0.08
        ? 0.04
        : 0.08 + progress * 0.08;

    const shadowAlpha =
      progress < 0.08
        ? 0
        : 0.08 + progress * 0.1;

    const blur =
      progress < 0.08
        ? 0
        : 10 + progress * 18;

    return {
      progress,

      background: `rgba(${r}, ${g}, ${b}, ${bgAlpha})`,

      border: `1px solid rgba(${
        progress > 0.55
          ? "4, 28, 50"
          : "255, 255, 255"
      }, ${borderAlpha})`,

      boxShadow: `0 18px 60px rgba(4, 28, 50, ${shadowAlpha})`,

      backdropFilter: `blur(${blur}px)`,

      WebkitBackdropFilter: `blur(${blur}px)`,
    };
  }, [scrollY]);

  const isLightNavbar = navbarStyle.progress > 0.62;

  const navLinkClass = clsx(
    "relative text-sm font-semibold transition duration-300 hover:text-[#f5ea00]",

    "after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[#f5ea00] after:transition-all after:duration-300 hover:after:w-full",

    isLightNavbar
      ? "text-[#041c32]"
      : "text-slate-200"
  );

  const mobileLinkClass = clsx(
    "rounded-2xl px-4 py-3 text-sm font-medium transition duration-300",

    isLightNavbar
      ? "text-[#041c32] hover:bg-[#f5ea00]/20 hover:text-[#041c32]"
      : "text-slate-200 hover:bg-white/10 hover:text-white"
  );

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-8">
        <div
          className="mx-auto max-w-7xl rounded-3xl transition-all duration-500 ease-out"
          style={{
            background: navbarStyle.background,
            border: navbarStyle.border,
            boxShadow: navbarStyle.boxShadow,
            backdropFilter: navbarStyle.backdropFilter,
            WebkitBackdropFilter:
              navbarStyle.WebkitBackdropFilter,
          }}
        >
          <div className="grid grid-cols-[auto_1fr_auto] items-center px-4 py-3 sm:px-5 lg:px-6">

            {/* LEFT */}
            <div className="flex items-center gap-3">

              {/* MOBILE BUTTON */}
              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className={clsx(
                  "inline-flex h-12 w-12 items-center justify-center rounded-full border transition duration-300 lg:hidden",

                  isLightNavbar
                    ? "border-[#041c32]/10 bg-white/70 text-[#041c32] hover:bg-white"
                    : "border-white/10 bg-white/5 text-white hover:bg-white/10"
                )}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>

              {/* LOGO */}
              <Link
                href="/"
                prefetch={false}
                className="flex items-center gap-3"
              >
                <div
                   className={clsx(
                   "relative h-12 w-12 overflow-hidden rounded-[0.4rem] transition duration-300",

                    isLightNavbar
                  ? "bg-[#3E4348]"
                  : "bg-[#3E4348]"
                   )}
                >
                <Image
                    src="/icon.png"
                    alt="ANT Developers Logo"
                    fill
                    sizes="48px"
                    priority
                    className="object-cover scale-[1.10]"
                 />
                </div> 

                <div>
                  <div
                    className={clsx(
                      "text-2xl font-semibold leading-none transition duration-300",

                      isLightNavbar
                        ? "text-[#041c32]"
                        : "text-white"
                    )}
                  >
                    ANT Developers
                  </div>

                  <div
                    className={clsx(
                      "mt-1 text-sm transition duration-300",

                      isLightNavbar
                        ? "text-[#475569]"
                        : "text-slate-300"
                    )}
                  >
                    Transforming Skills into Success
                  </div>
                </div>
              </Link>
            </div>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex lg:justify-center">
              <nav className="flex items-center justify-center gap-10 xl:gap-12">

                {navLinks.slice(0, 2).map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    prefetch={false}
                    className={navLinkClass}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* ACTIVITIES */}
                <div className="group relative">

                  <Link
                    href="/activities"
                    prefetch={false}
                    className={clsx(
                      "relative inline-flex items-center gap-1 text-sm font-semibold transition duration-300 hover:text-[#f5ea00]",

                      "after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[#f5ea00] after:transition-all after:duration-300 hover:after:w-full",

                      isLightNavbar
                        ? "text-[#041c32]"
                        : "text-slate-200"
                    )}
                  >
                    Activities

                    <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                  </Link>

                  {/* DROPDOWN */}
                  <div className="pointer-events-none invisible absolute left-1/2 top-full z-50 mt-0 w-[310px] -translate-x-1/2 translate-y-3 rounded-3xl border border-[#041c32]/10 bg-[#eaf1f7]/95 p-3 opacity-0 shadow-[0_20px_60px_rgba(4,28,50,0.22)] backdrop-blur-xl transition-all duration-300 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

                    {activityModules.map((module) => (
                      <div
                        key={module.label}
                        className="group/module relative"
                      >

                        <Link
                          href={module.href}
                          prefetch={false}
                          className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-[#041c32] transition duration-300 hover:bg-[#f5ea00]/20"
                        >
                          {module.label}

                          <ChevronDown className="h-4 w-4 -rotate-90" />
                        </Link>

                        {/* SECOND DROPDOWN */}
                        <div className="pointer-events-none invisible absolute left-full top-0 ml-1 w-[330px] translate-x-3 rounded-3xl border border-[#041c32]/10 bg-white/95 p-4 opacity-0 shadow-[0_20px_60px_rgba(4,28,50,0.18)] backdrop-blur-xl transition-all duration-300 group-hover/module:pointer-events-auto group-hover/module:visible group-hover/module:translate-x-0 group-hover/module:opacity-100">

                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#041c32]">
                            {module.label}
                          </p>

                          <ul className="space-y-2">

                            {module.topics.map((topic) => (
                              <li key={topic.href}>
                                <Link
                                  href={topic.href}
                                  prefetch={false}
                                  className="block rounded-xl px-3 py-2 text-xs leading-5 text-[#334155] transition duration-300 hover:bg-[#f5ea00]/20 hover:text-[#041c32]"
                                >
                                  {topic.label}
                                </Link>
                              </li>
                            ))}

                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {navLinks.slice(2).map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    prefetch={false}
                    className={navLinkClass}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* CTA */}
            <div className="flex justify-end">
              <Link
                href="/enroll"
                prefetch={false}
                className="btn-primary"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={clsx(
          "fixed left-0 top-[92px] z-40 w-full px-4 transition-all duration-300 sm:px-6 lg:hidden",

          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        )}
      >
        <div
          className={clsx(
            "mx-auto max-w-7xl rounded-3xl border p-4 shadow-[0_16px_50px_rgba(4,28,50,0.2)] backdrop-blur-xl",

            isLightNavbar
              ? "border-[#041c32]/10 bg-[#eaf1f7]/95"
              : "border-white/10 bg-[#041c32]/95"
          )}
        >
          <nav className="flex flex-col gap-2">

            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                prefetch={false}
                className={mobileLinkClass}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* MOBILE MODULES */}
            {activityModules.map((module) => (
              <details
                key={module.label}
                className="group rounded-xl border border-[#041c32]/10 bg-white/60 p-3"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-[#041c32]">

                  {module.label}

                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-open:rotate-180" />
                </summary>

                <div className="mt-3 flex flex-col gap-2">

                  <Link
                    href={module.href}
                    prefetch={false}
                    className="rounded-xl bg-[#041c32] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#0a2f52]"
                    onClick={() => setIsOpen(false)}
                  >
                    View All {module.label}
                  </Link>

                  {module.topics.map((topic) => (
                    <Link
                      key={topic.href}
                      href={topic.href}
                      prefetch={false}
                      className="block rounded-lg px-3 py-2 text-xs leading-5 text-[#334155] transition hover:bg-[#f5ea00]/20 hover:text-[#041c32]"
                      onClick={() => setIsOpen(false)}
                    >
                      {topic.label}
                    </Link>
                  ))}
                </div>
              </details>
            ))}

            <Link
              href="/enroll"
              prefetch={false}
              className="btn-primary mt-2 justify-center"
              onClick={() => setIsOpen(false)}
            >
              Enroll
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}