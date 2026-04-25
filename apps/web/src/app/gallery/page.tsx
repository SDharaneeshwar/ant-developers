import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GalleryActions from "@/components/gallery/GalleryActions";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore training highlights, sessions, and gallery previews from ANT Developers programs.",
};

const placeholderImages = Array.from({ length: 60 }, (_, i) => ({
  id: i + 1,
  title: `Gallery Placeholder ${i + 1}`,
}));

export default function GalleryPage() {
  const hasRealImages = false;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-hero-glow px-4 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.18em] text-brand-beige sm:text-sm">
              FULL GALLERY
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Explore Our Gallery
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              A curated collection of training sessions, workshops, and highlights.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GalleryActions variant="header" />
            </div>
          </div>

          {!hasRealImages ? (
            <div className="mt-16">
              <div className="glass-card rounded-3xl p-10 text-center sm:p-12">
                <p className="text-sm uppercase tracking-[0.18em] text-brand-beige">
                  Gallery Preview
                </p>

                <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                  Images will be available soon
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
                  We’re preparing a curated set of 50–75 high-quality training
                  visuals including workshops, corporate sessions, and student
                  interactions.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <GalleryActions variant="empty_state" />
                </div>
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {placeholderImages.slice(0, 8).map((item) => (
                  <div
                    key={item.id}
                    className="glass-card overflow-hidden rounded-3xl p-4 opacity-80"
                  >
                    <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                      <span className="text-sm font-medium tracking-wide text-slate-500">
                        {item.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {placeholderImages.map((item) => (
                <div
                  key={item.id}
                  className="glass-card glass-card-hover overflow-hidden rounded-3xl p-4"
                >
                  <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <span className="text-sm font-medium tracking-wide text-slate-400">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}