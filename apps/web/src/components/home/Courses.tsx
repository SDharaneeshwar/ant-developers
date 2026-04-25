import Link from "next/link";

const courses = [
  "Aptitude Training",
  "Soft Skills",
  "Technical Training",
  "Interview Prep",
  "Corporate Training",
  "Language Training",
  "Team Building",
];

export default function Courses() {
  return (
    <section id="courses" className="py-24">
      <div className="section-shell">
        <h2 className="section-title">Courses & Programs</h2>
        <p className="section-copy">
          Structured programs for students, job seekers, institutions, and companies.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <div key={course} className="glass-card rounded-3xl p-6">
              <h3 className="text-xl font-semibold text-white">{course}</h3>
              <p className="mt-3 text-slate-300">
                Outcome-focused training designed with premium delivery standards.
              </p>

              <Link
                href="/courses"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-brand-orange px-5 py-2.5 text-sm font-semibold text-brand-beige transition duration-300 hover:bg-brand-orange hover:text-white"
              >
                View More
              </Link>
            </div>
          ))}

          <div className="glass-card rounded-3xl p-6">
            <h3 className="text-xl font-semibold text-white">More Learning Paths</h3>
            <p className="mt-3 text-slate-300">
              Explore all available training tracks, subjects, and specialized modules.
            </p>

            <Link
              href="/courses"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-brand-orange px-5 py-2.5 text-sm font-semibold text-brand-beige transition duration-300 hover:bg-brand-orange hover:text-white"
            >
              See More Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}