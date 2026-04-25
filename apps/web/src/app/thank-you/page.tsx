import BackArrow from "@/components/layout/BackArrow";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <>
      <BackArrow />

      <main className="min-h-screen bg-hero-glow px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="glass-card rounded-3xl p-10 text-center sm:p-12">
            <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.18em] text-brand-beige sm:text-sm">
              THANK YOU
            </p>

            <h1 className="mt-6 text-3xl font-semibold text-white sm:text-5xl">
              Thank you for reaching us
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              We have received your enquiry. Our team will contact you soon with
              the next steps.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/" className="btn-secondary">
                Back to Home
              </Link>
              <Link href="/courses" className="btn-primary">
                View Courses
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}