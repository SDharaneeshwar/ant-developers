import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CoursesClient from "@/components/courses/CoursesClient";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore aptitude, technical, soft skills, interview prep, language, team building, and corporate training programs from ANT Developers.",
};

export default function CoursesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-hero-glow px-4 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <CoursesClient />
        </div>
      </main>

      <Footer />
    </>
  );
}