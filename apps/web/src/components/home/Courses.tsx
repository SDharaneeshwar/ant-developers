"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

const activities = [
  {
    title: "Activities",
    description:
      "Fun-filled indoor and outdoor activities designed to build confidence, coordination, and active participation.",
    subjects: [
      "Indoor Activities",
      "Blind Fold",
      "Balloon Activities",
      "Hula Hoop Games",
      "River Crossing",
      "Bridge Building",
    ],
  },
  {
    title: "Team Building",
    description:
      "Engaging team-based challenges that improve communication, leadership, memory, and group problem-solving.",
    subjects: [
      "Team Quiz Marathon",
      "Memory Recalls",
      "Challenge 100",
      "Tribal Survivor Event",
      "Scavenger Event",
    ],
  },
  {
    title: "Corporate Training",
    description:
      "Professional development programs designed to improve workplace skills, leadership, and team performance.",
    subjects: [
      "Outdoor Management Development",
      "Workforce Development",
      "Personal Development",
      "Manager to Leader",
      "Corporate Summer Camp",
    ],
  },
];

export default function Courses() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="activities"
      className="relative overflow-hidden bg-light-section py-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,234,0,0.10),transparent_28%)]" />

      <div className="section-shell relative z-10">
        {/* Heading */}
        <div className="text-center">
          <p className="inline-flex rounded-full border border-[#041c32]/10 bg-white/75 px-5 py-2 text-xs font-bold tracking-[0.20em] text-[#b89b00] shadow-[0_10px_30px_rgba(4,28,50,0.08)] backdrop-blur-xl sm:text-sm">
            ACTIVITIES
          </p>

          <h2 className="section-title mt-6 text-[#041c32]">
            Activity Programs Built for Growth
          </h2>

          <p className="section-copy mx-auto max-w-3xl text-[#475569]">
            Explore immersive activity-based learning modules crafted for
            students, institutions, startups, and corporate teams.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {activities.map((activity, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={activity.title}
                className={clsx(
                  "group relative overflow-hidden rounded-[30px] border p-7 backdrop-blur-xl transition-all duration-500",
                  "border-[#041c32]/10 bg-white/78",
                  "shadow-[0_18px_50px_rgba(4,28,50,0.08)]",
                  "hover:-translate-y-2 hover:bg-white hover:shadow-[0_28px_70px_rgba(4,28,50,0.14)]"
                )}
              >
                {/* Top Glow */}
                <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-[#f5ea00] via-[#ffd84d] to-transparent opacity-80" />

                {/* Title */}
                <h3 className="text-2xl font-bold tracking-tight text-[#041c32]">
                  {activity.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-[15px] leading-7 text-[#475569]">
                  {activity.description}
                </p>

                {/* Button */}
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={clsx(
                    "mt-7 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300",
                    "border border-[#f5ea00]/40",
                    "bg-[#f5ea00]/12 text-[#041c32]",
                    "hover:bg-[#f5ea00] hover:text-[#041c32]"
                  )}
                >
                  {isOpen ? "Hide Topics" : "View Topics"}

                  <ChevronDown
                    className={clsx(
                      "h-4 w-4 transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                {/* Expandable Content */}
                <div
                  className={clsx(
                    "grid transition-all duration-500 ease-out",
                    isOpen
                      ? "mt-6 grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div
                      className={clsx(
                        "rounded-2xl border p-5",
                        "border-[#041c32]/10",
                        "bg-gradient-to-br from-[#ffffff] to-[#eef4f9]",
                        "shadow-[0_10px_30px_rgba(4,28,50,0.06)]"
                      )}
                    >
                      <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-[#b89b00]">
                        Topics Included
                      </p>

                      <ul className="space-y-3">
                        {activity.subjects.map((subject) => (
                          <li
                            key={subject}
                            className="flex items-start gap-3 text-sm leading-6 text-[#334155]"
                          >
                            <span className="mt-[7px] h-2 w-2 rounded-full bg-[#f5ea00]" />

                            <span>{subject}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#f5ea00] to-[#ffd84d] transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}