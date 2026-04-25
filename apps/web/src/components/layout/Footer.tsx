"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/track";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b1220]/80 backdrop-blur-xl">
      <div className="section-shell py-10">
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* BRAND */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              ANT Developers
            </h3>
            <p className="mt-3 text-sm text-slate-400">
              Premium training academy focused on building real-world skills
              across aptitude, technical, soft skills, and corporate training.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Quick Links
            </h4>

            <div className="mt-4 flex flex-col gap-2 text-sm">
              <Link href="/" className="text-slate-400 hover:text-white">
                Home
              </Link>
              <Link href="/courses" className="text-slate-400 hover:text-white">
                Courses
              </Link>
              <Link href="/gallery" className="text-slate-400 hover:text-white">
                Gallery
              </Link>
              <Link href="/enroll" className="text-slate-400 hover:text-white">
                Enroll
              </Link>
            </div>
          </div>

          {/* CONTACT + CTA */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Contact
            </h4>

            <p className="mt-4 text-sm text-slate-400">
              Chennai, Tamil Nadu
            </p>

            {/* 🔥 WhatsApp CTA with Tracking */}
            <div className="mt-6">
              <a
                href="https://wa.me/919600266639"
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackEvent("whatsapp_click", {
                    location: "footer",
                  })
                }
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} ANT Developers. All rights reserved.
        </div>
      </div>
    </footer>
  );
}