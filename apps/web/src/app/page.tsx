import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Courses from "@/components/home/Courses";
import Testimonials from "@/components/home/Testimonials";
import Gallery from "@/components/home/Gallery";
import Contact from "@/components/home/Contact";

export const metadata: Metadata = {
  title: "Home",
  description:
    "ANT Developers offers premium training programs in aptitude, technical skills, interview preparation, soft skills, language training, and corporate development.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Courses />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}