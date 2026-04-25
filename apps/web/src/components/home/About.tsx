export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        {/* Row 1 */}
        <div className="grid gap-12 xl:grid-cols-2 xl:items-start">
          {/* Left: Main Content */}
          <div>
            <p className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.18em] text-brand-beige sm:text-sm">
              ABOUT US
            </p>

            <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Premium training designed for real-world growth
            </h2>

            <div className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
              <p>
                ANT Developers helps students, job seekers, institutions, and
                organizations build strong technical, communication, aptitude,
                and workplace-ready skills through structured premium training.
              </p>

              <p>
                Our goal is simple — deliver practical learning experiences that
                improve confidence, performance, and outcomes.
              </p>
            </div>
          </div>

          {/* Right: Why Choose Us Card with Glow */}
          <div className="relative xl:pt-10">
            <div className="pointer-events-none absolute -left-6 top-10 -z-10 h-40 w-40 rounded-full bg-brand-orange/20 blur-3xl" />
            <div className="glass-card rounded-3xl p-8 transition duration-300 hover:-translate-y-1 hover:bg-white/10 sm:p-10">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-brand-beige">
                Why choose us
              </div>

              <h3 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                Practical. Premium. Career-focused.
              </h3>

              <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                Every program is designed to build real confidence and measurable
                improvement through structured learning, hands-on delivery, and
                real-world application.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2: 4 Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <div className="glass-card rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/10">
            <div className="text-2xl font-semibold text-brand-beige">
              Student
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
              Placement-focused learning for interviews, communication, and aptitude.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/10">
            <div className="text-2xl font-semibold text-brand-beige">
              Corporate
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
              Business-ready training programs for team development and productivity.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/10">
            <div className="text-4xl font-semibold text-brand-beige">7+</div>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Training verticals across academics, careers, and corporate learning.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/10">
            <div className="text-4xl font-semibold text-brand-beige">100%</div>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Focus on practical delivery, clarity, and learner confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}