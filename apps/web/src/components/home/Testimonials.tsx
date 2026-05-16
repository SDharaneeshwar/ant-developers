import Link from "next/link";
import { testimonials } from "@/lib/testimonials";

const previewTestimonials = testimonials.slice(0, 3);

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-light-section py-24"
    >
      <div className="section-shell">
        {/* HEADER */}
        <div className="text-center">
          <p className="inline-flex rounded-full border border-[#041c32]/10 bg-white/70 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-[#041c32] shadow-sm backdrop-blur-md sm:text-sm">
            TESTIMONIALS
          </p>

          <h2 className="mt-6 section-title text-[#041c32]">
            What people say about our training
          </h2>

          <p className="section-copy mx-auto text-[#475569]">
            Premium learning experiences built around confidence,
            clarity, growth, and real-world impact.
          </p>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {previewTestimonials.map((item, index) => (
            <div
              key={index}
              className="
                light-card light-card-hover
                rounded-3xl
                p-7
                transition-all duration-300
              "
            >
              {/* TOP ACCENT */}
              <div className="mb-5 flex items-center justify-between">
                <div className="h-1.5 w-14 rounded-full bg-[#f5ea00]" />

                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#94a3b8]">
                  Verified Review
                </div>
              </div>

              {/* MESSAGE */}
              <p className="text-[15px] leading-8 text-[#475569]">
                {item.message}
              </p>

              {/* RATING */}
              <div className="mt-5 flex items-center gap-1 text-[18px] text-[#f5ea00]">
                {Array.from({
                  length: Math.floor(item.rating),
                }).map((_, i) => (
                  <span key={i}>★</span>
                ))}

                {item.rating % 1 !== 0 && <span>☆</span>}
              </div>

              {/* USER INFO */}
              <div className="mt-7 border-t border-[#041c32]/10 pt-5">
                <div className="text-lg font-semibold text-[#041c32]">
                  {item.name}
                </div>

                <div className="mt-1 text-sm font-medium text-[#062847]">
                  {item.designation}
                </div>

                <div className="mt-1 text-xs tracking-wide text-[#64748b]">
                  {item.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/testimonials"
            className="
              inline-flex items-center justify-center rounded-full border border-[#F5EA00] bg-[#F5EA00] px-5 py-2.5 text-sm font-extrabold text-[#041C32] shadow-[0_14px_35px_rgba(245,234,0,0.22)] transition duration-300 hover:bg-[#FFD84D] hover:shadow-[0_18px_45px_rgba(245,234,0,0.3)] active:scale-[0.98]
            "
          >
            View More Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
}