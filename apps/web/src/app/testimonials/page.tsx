import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read real testimonials from students, learners, and training participants of ANT Developers.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-hero-glow px-4 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.18em] text-brand-beige sm:text-sm">
              TESTIMONIALS
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              What our learners say
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              Real experiences from students, professionals, and institutions
              who experienced our training programs.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="glass-card glass-card-hover rounded-3xl p-6"
              >
                {/* PROFILE */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-orange/15 text-lg font-semibold text-brand-orange">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-sm text-brand-beige">
                      {item.designation}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      {item.company}
                    </p>
                  </div>
                </div>

                {/* ⭐ RATING */}
                <div className="mt-5 flex items-center gap-1 text-yellow-400">
                  {Array.from({ length: Math.floor(item.rating) }).map(
                    (_, i) => (
                      <span key={i}>★</span>
                    )
                  )}
                  {/* Optional half star */}
                  {item.rating % 1 !== 0 && <span className="opacity-70">★</span>}
                </div>

                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}