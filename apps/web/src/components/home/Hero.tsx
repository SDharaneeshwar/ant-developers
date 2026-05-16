"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/track";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-hero-glow section-transition pt-24 sm:pt-28 lg:pt-32"
    >
      {/* 🔥 Extra Glow Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#F5EA00]/10 blur-3xl" />

        <div className="absolute bottom-[-140px] right-[-100px] h-[320px] w-[320px] rounded-full bg-[#AAC2D1]/20 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]" />
      </div>

      <div className="section-shell relative z-10 flex min-h-screen items-center justify-center py-16 sm:py-20">
        <div className="w-full max-w-5xl text-center">
          
          {/* 🔥 Badge */}
          <p className="mb-5 inline-flex rounded-full border border-[#F5EA00]/20 bg-white/5 px-5 py-2 text-xs font-semibold tracking-[0.22em] text-[#F5EA00] backdrop-blur-xl sm:text-sm">
            PREMIUM TRAINING ACADEMY
          </p>

          {/* 🔥 Main Heading */}
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
            ANT{" "}
            <span className="text-[#F5EA00] drop-shadow-[0_0_18px_rgba(245,234,0,0.18)]">
              Developers
            </span>
          </h1>

          {/* 🔥 Subtitle */}
          <p className="mt-5 text-lg font-medium text-[#D7E2EE] sm:text-xl lg:text-2xl">
            Transforming Skills into Success
          </p>

          {/* 🔥 Description */}
          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-[#C7D2E0] sm:text-lg sm:leading-8">
            High-impact aptitude, technical, soft skills, interview,
            language, and corporate training programs designed for
            learners, teams, and organizations.
          </p>

          {/* 🔥 CTA Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/enroll"
              className="btn-primary min-w-[180px] shadow-[0_10px_30px_rgba(245,234,0,0.22)]"
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
              href="/#activities"
              className="btn-secondary min-w-[180px] border border-white/10 bg-white/5 backdrop-blur-xl"
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

          {/* 🔥 Stats Section */}
          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            
            <div className="glass-card glass-card-hover rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-2xl">
              <div className="text-3xl font-bold text-[#F5EA00]">
                7+
              </div>

              <div className="mt-3 text-sm font-medium tracking-wide text-[#D7E2EE]">
                Training Verticals
              </div>
            </div>

            <div className="glass-card glass-card-hover rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-2xl">
              <div className="text-3xl font-bold text-[#F5EA00]">
                Premium
              </div>

              <div className="mt-3 text-sm font-medium tracking-wide text-[#D7E2EE]">
                Learning Experience
              </div>
            </div>

            <div className="glass-card glass-card-hover rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-2xl">
              <div className="text-3xl font-bold text-[#F5EA00]">
                Fast
              </div>

              <div className="mt-3 text-sm font-medium tracking-wide text-[#D7E2EE]">
                Lead Response
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}