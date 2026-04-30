"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

const courses = [
  {
    title: "Interview Prep",
    description:
      "Placement-focused preparation covering aptitude, communication, HR, and technical interview readiness.",
    subjects: [
      "Resume Building",
      "Aptitude Practice",
      "Group Discussion",
      "HR Interview",
      "Technical Interview",
      "Mock Interview",
    ],
  },
  {
    title: "Corporate Training",
    description:
      "Professional training programs for companies, institutions, and teams to improve workplace-ready skills.",
    subjects: [
      "Communication Skills",
      "Leadership Skills",
      "Workplace Etiquette",
      "Team Collaboration",
      "Technical Upskilling",
      "Productivity Training",
    ],
  },
  {
    title: "Team Building",
    description:
      "Activity-based learning programs designed to improve coordination, bonding, and team performance.",
    subjects: [
      "Team Activities",
      "Problem Solving",
      "Communication Games",
      "Leadership Activities",
      "Trust Building",
      "Group Collaboration",
    ],
  },
];

export default function Courses() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="courses" className="py-24">
      <div className="section-shell">
        <div className="text-center">
          <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.18em] text-brand-beige sm:text-sm">
            COURSES
          </p>

          <h2 className="mt-6 section-title">
            Training Programs Built for Growth
          </h2>

          <p className="section-copy mx-auto">
            Choose from our focused training programs designed for students,
            institutions, and professional teams.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {courses.map((course, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={course.title}
                className="glass-card glass-card-hover rounded-3xl p-6"
              >
                <h3 className="text-xl font-semibold text-white">
                  {course.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {course.description}
                </p>

                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-orange px-5 py-2.5 text-sm font-semibold text-brand-beige transition duration-300 hover:bg-brand-orange hover:text-white"
                >
                  View More
                  <ChevronDown
                    className={clsx(
                      "h-4 w-4 transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                <div
                  className={clsx(
                    "grid transition-all duration-300",
                    isOpen
                      ? "mt-5 grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="mb-3 text-sm font-semibold text-brand-beige">
                        Subjects Included
                      </p>

                      <ul className="space-y-2">
                        {course.subjects.map((subject) => (
                          <li
                            key={subject}
                            className="text-sm text-slate-300"
                          >
                            • {subject}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}