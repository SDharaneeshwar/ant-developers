export default function About() {
  return (
    <section id="about" className="bg-light-section py-24">
      <div className="section-shell">
        {/* Row 1 */}
        <div className="grid gap-12 xl:grid-cols-2 xl:items-start">
          {/* Left: Main Content */}
          <div>
            <p className="inline-flex w-fit rounded-full border border-[#041c32]/10 bg-white/70 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-[#041c32] shadow-sm backdrop-blur-xl sm:text-sm">
              ABOUT US
            </p>

            <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-[#041c32] sm:text-5xl lg:text-6xl">
              Premium training designed for real-world growth
            </h2>

            <div className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-[#475569] sm:text-lg">
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

          {/* Right: Why Choose Us Card */}
          <div className="relative xl:pt-10">
            {/* Glow */}
            <div className="pointer-events-none absolute -left-8 top-8 -z-10 h-44 w-44 rounded-full bg-[#f5ea00]/20 blur-3xl" />

            <div className="light-card light-card-hover rounded-3xl p-8 sm:p-10">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7a8ea5]">
                Why choose us
              </div>

              <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#041c32] sm:text-3xl">
                Practical. Premium. Career-focused.
              </h3>

              <p className="mt-5 text-base leading-8 text-[#475569] sm:text-lg">
                Every program is designed to build real confidence and measurable
                improvement through structured learning, hands-on delivery, and
                real-world application.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2: Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {/* Card 1 */}
          <div className="light-card light-card-hover rounded-3xl p-6">
            <div className="text-2xl font-semibold text-[#041c32]">
              Student
            </div>

            <div className="mt-3 h-1 w-14 rounded-full bg-[#f5ea00]" />

            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base">
              Placement-focused learning for interviews, communication, and aptitude.
            </p>
          </div>

          {/* Card 2 */}
          <div className="light-card light-card-hover rounded-3xl p-6">
            <div className="text-2xl font-semibold text-[#041c32]">
              Corporate
            </div>

            <div className="mt-3 h-1 w-14 rounded-full bg-[#f5ea00]" />

            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base">
              Business-ready training programs for team development and productivity.
            </p>
          </div>

          {/* Card 3 */}
          <div className="light-card light-card-hover rounded-3xl p-6">
            <div className="text-4xl font-semibold text-[#041c32]">
              7+
            </div>

            <div className="mt-3 h-1 w-14 rounded-full bg-[#f5ea00]" />

            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base">
              Training verticals across academics, careers, and corporate learning.
            </p>
          </div>

          {/* Card 4 */}
          <div className="light-card light-card-hover rounded-3xl p-6">
            <div className="text-4xl font-semibold text-[#041c32]">
              100%
            </div>

            <div className="mt-3 h-1 w-14 rounded-full bg-[#f5ea00]" />

            <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base">
              Focus on practical delivery, clarity, and learner confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}