export default function Testimonials() {
  const testimonials = [
    {
      name: "Placement Candidate",
      role: "Student",
      quote:
        "The training improved my confidence, communication, and interview preparation in a very practical way.",
    },
    {
      name: "Final Year Learner",
      role: "Job Seeker",
      quote:
        "The aptitude and technical sessions were structured clearly and helped me perform better in placement rounds.",
    },
    {
      name: "Training Coordinator",
      role: "Institution",
      quote:
        "The sessions were professional, engaging, and highly valuable for our students’ career readiness.",
    },
  ];

  return (
    <section id="testimonials" className="py-24">
      <div className="section-shell">
        <div className="text-center">
          <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.18em] text-brand-beige sm:text-sm">
            TESTIMONIALS
          </p>

          <h2 className="mt-6 section-title">What people say about our training</h2>
          <p className="section-copy mx-auto">
            Premium learning experiences built around confidence, clarity, and growth.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="glass-card rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="text-4xl leading-none text-brand-orange">“</div>

              <p className="mt-4 text-base leading-8 text-slate-200">
                {item.quote}
              </p>

              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="text-base font-semibold text-white">{item.name}</div>
                <div className="mt-1 text-sm text-brand-beige">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}