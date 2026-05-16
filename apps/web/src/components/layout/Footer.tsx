"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/track";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#f5ea00]/10 bg-gradient-to-b from-[#041c32] via-[#062847] to-[#031525] backdrop-blur-xl">
      
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#f5ea00]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#ffd84d]/10 blur-3xl" />
      </div>

      <div className="section-shell relative z-10 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          
          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-[#f5ea00]">
              ANT Developers
            </h3>

            <div className="mt-2 h-[3px] w-16 rounded-full bg-[#f5ea00]" />

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              Premium training academy focused on building real-world skills
              across aptitude, technical, soft skills, team building,
              activities, and corporate development programs.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f5ea00]">
              Quick Links
            </h4>

            <div className="mt-5 flex flex-col gap-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Activities", href: "/#activities" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Gallery", href: "/gallery" },
                { label: "Enroll", href: "/enroll" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group inline-flex items-center gap-2 text-slate-300 transition duration-300 hover:text-[#f5ea00]"
                >
                  <span className="h-[5px] w-[5px] rounded-full bg-[#f5ea00] opacity-0 transition duration-300 group-hover:opacity-100" />

                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT + CTA */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f5ea00]">
              Contact
            </h4>

            <div className="mt-5 space-y-3">
              <p className="text-sm text-slate-300">
                Chennai, Tamil Nadu
              </p>

              <p className="text-sm text-slate-400">
                Professional training & development programs
              </p>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-7">
              <a
                href="https://wa.me/919789682485"
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackEvent("whatsapp_click", {
                    location: "footer",
                  })
                }
                className="inline-flex items-center justify-center rounded-full border border-[#f5ea00]/20 bg-[#f5ea00] px-6 py-3 text-sm font-bold text-[#041c32] shadow-[0_10px_30px_rgba(245,234,0,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#ffd84d]"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-[#f5ea00]">
              ANT Developers
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}