"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackArrow from "@/components/layout/BackArrow";

import ModuleCTA from "@/components/activities/ModuleCTA";
import ImageSlider from "@/components/activities/ImageSlider";

import type { ActivityModuleType } from "@/lib/activities";

type Props = {
  module: ActivityModuleType;
};

export default function ModulePage({ module }: Props) {
  return (
    <>
      <Navbar />

      <div className="hidden lg:block">
        <BackArrow />
      </div>

      <main className="overflow-hidden">
        <section className="section-transition relative min-h-screen overflow-hidden bg-hero-glow px-4">
           <div className="absolute inset-0 bg-gradient-to-b from-[#041C32]/85 via-[#041C32]/78 to-[#041C32]/88" />

           <div className="absolute left-1/2 top-0 h-[20px] w-[420px] -translate-x-1/2 rounded-full bg-[#F5EA00]/10 blur-[140px]" />

           {/* PREMIUM HERO CONTENT */}
           <div className="section-shell relative z-10 flex min-h-screen items-center justify-center py-24 sm:py-28 lg:py-32">
           <div className="w-full max-w-4xl text-center">
      
           <div className="inline-flex items-center rounded-full border border-[#F5EA00]/20 bg-[#F5EA00]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#F5EA00] backdrop-blur-xl">
             Premium Team Experiences
           </div>

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
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#F5EA00] px-8 py-4 text-sm font-bold text-[#041C32] shadow-[0_14px_35px_rgba(245,234,0,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-[#FFD84D]"
           >
              Enroll Now
         
             <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
           </Link>

           <Link
            href="/gallery"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/15"
            >
              View Gallery
           </Link>
           </div>
           </div>
           </div>
           </section>

        <section className="bg-light-section py-24 sm:py-28">
          <div className="section-shell space-y-14 sm:space-y-16 lg:space-y-20">
            {module.sections.map((section, index) => {
              const reverse = index % 2 !== 0;

              return (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-32"
                >
                  <div className="module-card group relative overflow-hidden rounded-[2.2rem] p-4 sm:p-5 lg:p-6">
                    <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#F5EA00]/10 blur-[90px]" />

                    <div className="relative z-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
                      <div className={reverse ? "relative lg:order-2" : "relative"}>
                        <ImageSlider
                          folder={section.imagesFolder}
                          imageCount={section.imageCount}
                          title={section.title}
                        />
                      </div>

                      <div className={reverse ? "lg:order-1" : ""}>
                        <div className="inline-flex rounded-full border border-[#F5EA00]/20 bg-[#F5EA00]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#041C32]">
                          {module.title}
                        </div>

                        <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#041C32] sm:text-4xl">
                          {section.title}
                        </h2>

                        <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#475569]">
                          {section.description}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                          {section.benefits.map((benefit) => (
                            <div
                              key={benefit}
                              className="rounded-full border border-[#041C32]/10 bg-white/88 px-3.5 py-1.5 text-xs font-semibold text-[#041C32] shadow-[0_6px_18px_rgba(4,28,50,0.05)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-[#F5EA00]/15"
                            >
                              {benefit}
                            </div>
                          ))}
                        </div>

                        <div className="mt-10">
                          <Link
                            href="/enroll"
                            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#F5EA00] px-7 py-3 text-sm font-bold text-[#041C32] shadow-[0_12px_30px_rgba(245,234,0,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#FFD84D]"
                          >
                            Enroll Now
                            <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </section>

        <ModuleCTA />
      </main>

      <Footer />
    </>
  );
}