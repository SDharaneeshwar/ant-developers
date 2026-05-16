"use client";

import Image from "next/image";
import clsx from "clsx";

type ActivitySectionProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  benefits: string[];
  reverse?: boolean;
};

export default function ActivitySection({
  id,
  title,
  description,
  image,
  benefits,
  reverse = false,
}: ActivitySectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-32 py-10 sm:py-14"
    >
      <div
        className={clsx(
          "group relative overflow-hidden rounded-[2.5rem] border border-[#041C32]/10 bg-white/72 shadow-[0_24px_70px_rgba(4,28,50,0.08)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1",
          "grid items-center gap-10 p-6 lg:grid-cols-2 lg:p-10",
          reverse && "lg:grid-flow-col-dense"
        )}
      >
        {/* BACKGROUND GLOW */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F5EA00]/10 blur-3xl" />

        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#041C32]/5 blur-3xl" />

        {/* ================= IMAGE SECTION ================= */}
        <div
          className={clsx(
            "relative z-10",
            reverse ? "lg:col-start-2" : ""
          )}
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/40 shadow-[0_20px_50px_rgba(4,28,50,0.10)]">
            
            {/* OVERLAY */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#041C32]/40 via-transparent to-transparent" />

            <Image
              src={image}
              alt={title}
              width={1200}
              height={900}
              className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[420px]"
            />

            {/* IMAGE BADGE */}
            <div className="absolute bottom-5 left-5 z-20 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-xl">
              Premium Activity
            </div>
          </div>
        </div>

        {/* ================= CONTENT SECTION ================= */}
        <div
          className={clsx(
            "relative z-10 flex flex-col",
            reverse ? "lg:col-start-1" : ""
          )}
        >
          {/* TOP LABEL */}
          <div className="inline-flex w-fit rounded-full border border-[#F5EA00]/20 bg-[#F5EA00]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#041C32]">
            Experiential Learning
          </div>

          {/* TITLE */}
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#041C32] sm:text-4xl">
            {title}
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            {description}
          </p>

          {/* BENEFITS */}
          <div className="mt-8 flex flex-wrap gap-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-full border border-[#041C32]/10 bg-[#edf3f8] px-4 py-2 text-sm font-medium text-[#041C32] transition duration-300 hover:bg-[#F5EA00]/20"
              >
                {benefit}
              </div>
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4">
            
            {/* PRIMARY CTA */}
            <a
              href="/enroll"
              className="inline-flex items-center justify-center rounded-full bg-[#F5EA00] px-7 py-3 text-sm font-bold text-[#041C32] shadow-[0_12px_30px_rgba(245,234,0,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#FFD84D]"
            >
              Enroll Now
            </a>

            {/* SECONDARY CTA */}
            <a
              href="/gallery"
              className="inline-flex items-center justify-center rounded-full border border-[#041C32]/10 bg-white/70 px-7 py-3 text-sm font-semibold text-[#041C32] shadow-[0_10px_25px_rgba(4,28,50,0.06)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-[#041C32] hover:text-white"
            >
              View Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}