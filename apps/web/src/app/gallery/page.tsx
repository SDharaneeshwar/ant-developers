import type { Metadata } from "next";
import Image from "next/image";
import fs from "fs";
import path from "path";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GalleryActions from "@/components/gallery/GalleryActions";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore training highlights, sessions, and gallery previews from ANT Developers programs.",
};

function getGalleryImages() {
  const galleryDir = path.join(process.cwd(), "public", "gallery");

  if (!fs.existsSync(galleryDir)) {
    return [];
  }

  const files = fs
    .readdirSync(galleryDir)
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort((a, b) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    );

  return files.map((file, index) => ({
    id: index + 1,
    src: `/gallery/${file}`,
    title: `Gallery Image ${index + 1}`,
  }));
}

export default function GalleryPage() {
  const galleryImages = getGalleryImages();

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

          {galleryImages.length === 0 ? (
            <div className="glass-card mt-16 rounded-3xl p-10 text-center sm:p-12">
              <p className="text-sm uppercase tracking-[0.18em] text-brand-beige">
                Gallery Preview
              </p>

              <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                Images will be available soon
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
                Training visuals, workshops, corporate sessions, and student
                interactions will appear here.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <GalleryActions variant="empty_state" />
              </div>
            </div>
          ) : (
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {galleryImages.map((item) => (
                <div
                  key={item.id}
                  className="glass-card glass-card-hover overflow-hidden rounded-3xl p-4"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-500 hover:scale-105"
                    />
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