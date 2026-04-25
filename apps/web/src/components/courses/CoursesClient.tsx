"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { trackEvent } from "@/lib/track";

const courseData = [
  {
    title: "Aptitude Training",
    description:
      "Build speed, accuracy, and confidence for placement tests, competitive exams, and interviews.",
    topics: [
      "Quantitative Aptitude",
      "Logical Reasoning",
      "Verbal Reasoning",
      "Data Interpretation",
      "Shortcuts & Tricks",
      "Mock Tests",
    ],
  },
  {
    title: "Soft Skills",
    description:
      "Develop confidence, communication, and professional etiquette for academic and career success.",
    topics: [
      "Communication Skills",
      "Presentation Skills",
      "Public Speaking",
      "Interpersonal Skills",
      "Professional Etiquette",
      "Confidence Building",
    ],
  },
  {
    title: "Technical Training",
    description:
      "Strengthen technical fundamentals and hands-on problem-solving skills.",
    topics: [
      "Programming Fundamentals",
      "Web Development Basics",
      "Database Concepts",
      "Java / Python Basics",
      "Problem Solving",
      "Mini Projects",
    ],
  },
  {
    title: "Interview Prep",
    description:
      "Prepare for HR rounds, technical interviews, and placement readiness.",
    topics: [
      "HR Interview Training",
      "Technical Q&A",
      "Resume Building",
      "Mock Interviews",
      "Self Introduction",
      "Body Language",
    ],
  },
  {
    title: "Corporate Training",
    description:
      "Customized learning programs for teams, workplace growth, and employee development.",
    topics: [
      "Leadership Development",
      "Team Communication",
      "Business Communication",
      "Productivity Training",
      "Employee Development",
      "Custom Corporate Modules",
    ],
  },
  {
    title: "Language Training",
    description:
      "Improve spoken and written language skills for education and professional growth.",
    topics: [
      "Spoken English",
      "Grammar",
      "Vocabulary Building",
      "Listening Practice",
      "Reading Skills",
      "Writing Skills",
    ],
  },
  {
    title: "Team Building",
    description:
      "Create collaboration, trust, and stronger performance among teams.",
    topics: [
      "Team Collaboration",
      "Trust Building",
      "Conflict Resolution",
      "Group Communication",
      "Leadership Activities",
      "Performance Workshops",
    ],
  },
];

export default function CoursesClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number, title: string, isOpen: boolean) => {
    setOpenIndex(isOpen ? null : index);

    trackEvent(isOpen ? "course_accordion_close" : "course_accordion_open", {
      course: title,
      location: "courses_page",
    });
  };

  return (
    <>
      <div className="text-center">
        <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.18em] text-brand-beige sm:text-sm">
          ALL COURSES
        </p>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Explore Our Training Programs
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
          View every course, its training modules, and the subjects covered in each
          program.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="btn-secondary"
            onClick={() =>
              trackEvent("courses_back_home_click", {
                location: "courses_page",
              })
            }
          >
            Back to Home
          </Link>

          <Link
            href="/enroll"
            className="btn-primary"
            onClick={() =>
              trackEvent("courses_top_enroll_click", {
                location: "courses_page",
              })
            }
          >
            Enroll Now
          </Link>
        </div>
      </div>

      <div className="mt-14 space-y-5">
        {courseData.map((course, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={course.title}
              className="glass-card overflow-hidden rounded-3xl"
            >
              <button
                type="button"
                onClick={() => handleToggle(index, course.title, isOpen)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
              >
                <div>
                  <h2 className="text-xl font-semibold text-white sm:text-2xl">
                    {course.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base">
                    {course.description}
                  </p>
                </div>

                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-brand-beige transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-white/10 px-6 py-5 sm:px-8">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-beige">
                      Subjects & Training Modules
                    </h3>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {course.topics.map((topic) => (
                        <div
                          key={topic}
                          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                        >
                          {topic}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <Link
                        href="/enroll"
                        className="btn-primary"
                        onClick={() =>
                          trackEvent("course_enroll_click", {
                            course: course.title,
                            location: "courses_page",
                          })
                        }
                      >
                        Enroll for {course.title}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}