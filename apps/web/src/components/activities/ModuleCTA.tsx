"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ModuleCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      
      {/* PREMIUM BACKGROUND GLOWS */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-[#F5EA00]/10 blur-3xl" />

        <div className="absolute right-[-10%] bottom-0 h-80 w-80 rounded-full bg-[#0D2B4A]/10 blur-3xl" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#041C32]/5 to-transparent" />
      </div>

      <div className="section-shell relative z-10">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-white/40 bg-white/65 p-10 shadow-[0_30px_80px_rgba(4,28,50,0.10)] backdrop-blur-2xl md:p-16">

          {/* INNER LIGHT EFFECT */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-[#F5EA00]/5 pointer-events-none" />

          {/* TOP BADGE */}
          <div className="relative flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F5EA00]/20 bg-[#F5EA00]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#041C32] shadow-[0_8px_20px_rgba(245,234,0,0.12)] backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5" />

              Premium Team Experiences
            </div>
          </div>

          {/* HEADING */}
          <div className="relative mx-auto mt-8 max-w-4xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-[#041C32] sm:text-5xl lg:text-6xl">
              Ready to Transform Your Team Experience?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              From leadership development and communication enhancement to
              experiential learning and team collaboration, our programs are
              designed to create memorable, engaging, and impactful growth
              experiences.
            </p>
          </div>

          {/* FEATURE TAGS */}
          <div className="relative mt-12 flex flex-wrap items-center justify-center gap-4">
            {[
              "Leadership Development",
              "Team Bonding",
              "Communication Skills",
              "Corporate Engagement",
              "Strategic Thinking",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full border border-[#041C32]/10 bg-white/80 px-5 py-2 text-sm font-medium text-[#041C32] shadow-[0_8px_24px_rgba(4,28,50,0.05)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(4,28,50,0.08)]"
              >
                {item}
              </div>
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div className="relative mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">

            {/* PRIMARY BUTTON */}
            <Link
              href="/enroll"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#F5EA00] px-9 py-4 text-sm font-bold text-[#041C32] shadow-[0_18px_40px_rgba(245,234,0,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#ffe14d]"
            >
              Enroll Now

              <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
            </Link>

            {/* SECONDARY BUTTON */}
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-full border border-[#041C32]/10 bg-white/85 px-9 py-4 text-sm font-semibold text-[#041C32] shadow-[0_12px_30px_rgba(4,28,50,0.05)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-[#041C32] hover:text-white"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}