import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ActivityModuleType } from "@/lib/activities";

type ModuleHeroProps = {
  module: ActivityModuleType;
};

export default function ModuleHero({ module }: ModuleHeroProps) {
  return (
    <section className="section-transition relative min-h-screen overflow-hidden bg-hero-glow px-4">
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#F5EA00]/10 blur-[140px]" />

      <div className="absolute left-1/2 top-1/2 z-10 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 px-4 text-center">
        <p className="inline-flex rounded-full border border-[#f5ea00]/20 bg-[#f5ea00]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#f5ea00]">
          Premium Team Experiences
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {module.title}
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
          {module.subtitle}
        </p>

        <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-slate-400 sm:text-base">
          {module.description}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/enroll"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#f5ea00] px-8 py-4 text-sm font-bold text-[#041c32] shadow-[0_12px_30px_rgba(245,234,0,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#ffd84d]"
          >
            Enroll Now
            <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}