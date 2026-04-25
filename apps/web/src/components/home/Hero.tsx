"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/track";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-hero-glow pt-36 sm:pt-40 lg:pt-44"
    >
      <div className="section-shell flex min-h-screen items-center justify-center py-16 sm:py-20">
        <div className="w-full max-w-5xl text-center">
          <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.18em] text-brand-beige sm:text-sm">
            PREMIUM TRAINING ACADEMY
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
            ANT Developers
          </h1>

          <p className="mt-4 text-lg text-white/80 sm:text-xl lg:text-2xl">
            Transforming Skills into Success
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            High-impact aptitude, technical, soft skills, interview, language, and
            corporate training programs designed for learners, teams, and
            organizations.
          </p>

          {/* 🔥 CTA Buttons with Tracking */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            
            <Link
              href="/enroll"
              className="btn-primary min-w-[170px]"
              onClick={() =>
                trackEvent("hero_enroll_click", {
                  location: "hero",
                  button: "Enroll Now",
                })
              }
            >
              Enroll Now
            </Link>

            <Link
              href="/courses"
              className="btn-secondary min-w-[170px]"
              onClick={() =>
                trackEvent("hero_get_started_click", {
                  location: "hero",
                  button: "Get Started",
                })
              }
            >
              Get Started
            </Link>
          </div>

          {/* 🔥 Stats */}
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="glass-card rounded-3xl p-5 sm:p-6">
              <div className="text-2xl font-semibold text-brand-beige">7+</div>
              <div className="mt-2 text-sm text-slate-300">
                Training Verticals
              </div>
            </div>

            <div className="glass-card rounded-3xl p-5 sm:p-6">
              <div className="text-2xl font-semibold text-brand-beige">
                Premium
              </div>
              <div className="mt-2 text-sm text-slate-300">
                Learning Experience
              </div>
            </div>

            <div className="glass-card rounded-3xl p-5 sm:p-6">
              <div className="text-2xl font-semibold text-brand-beige">
                Fast
              </div>
              <div className="mt-2 text-sm text-slate-300">
                Lead Response
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}