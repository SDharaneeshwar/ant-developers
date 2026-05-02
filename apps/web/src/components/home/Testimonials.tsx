import Link from "next/link";
import { testimonials } from "@/lib/testimonials";

const previewTestimonials = testimonials.slice(0, 3);

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="section-shell">
        <div className="text-center">
          <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.18em] text-brand-beige sm:text-sm">
            TESTIMONIALS
          </p>

          <h2 className="mt-6 section-title">
            What people say about our training
          </h2>

          <p className="section-copy mx-auto">
            Premium learning experiences built around confidence, clarity, and growth.
          </p>
        </div>

        {/* 🔥 ONLY FIRST 3 */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {previewTestimonials.map((item, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >

              {/* MESSAGE */}
              <p className="mt-4 text-base leading-8 text-slate-200">
                {item.message}
              </p>

              {/* ⭐ DYNAMIC RATING */}
              <div className="mt-4 flex items-center gap-1 text-yellow-400">
                {Array.from({ length: Math.floor(item.rating) }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
                {item.rating % 1 !== 0 && <span>☆</span>}
              </div>

              {/* USER INFO */}
              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="text-base font-semibold text-white">
                  {item.name}
                </div>

                <div className="mt-1 text-sm text-brand-beige">
                  {item.designation}
                </div>

                <div className="text-xs text-slate-400 mt-1">
                  {item.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 VIEW MORE BUTTON */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center justify-center rounded-full border border-brand-orange px-5 py-2.5 text-sm font-semibold text-brand-beige transition duration-300 hover:bg-brand-orange hover:text-white"
          >
            View More Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
}