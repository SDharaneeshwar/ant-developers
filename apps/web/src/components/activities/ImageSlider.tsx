"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import clsx from "clsx";

type Props = {
  folder?: string;
  imageCount?: number;
  title: string;
};

export default function ImageSlider({
  folder = "",
  imageCount = 0,
  title,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = useMemo(() => {
    if (!folder || imageCount <= 0) {
      return [];
    }

    return Array.from(
      { length: imageCount },
      (_, index) => `/activities/${folder}/${index + 1}.jpg`
    );
  }, [folder, imageCount]);

  const safeIndex =
    images.length > 0 ? Math.min(activeIndex, images.length - 1) : 0;

  if (images.length === 0) {
    return (
      <div className="relative flex aspect-[16/10] items-center justify-center rounded-[1.8rem] border border-[#041C32]/10 bg-white/70 shadow-[0_18px_45px_rgba(4,28,50,0.06)] backdrop-blur-xl">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#041C32]/5 text-[#041C32]">
            <ImageIcon className="h-5 w-5" />
          </div>

          <p className="mt-3 text-sm font-semibold text-[#041C32]">
            Images coming soon
          </p>
        </div>
      </div>
    );
  }

  const hasMultipleImages = images.length > 1;
  const currentImage = images[safeIndex];

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative overflow-hidden rounded-[1.8rem] border border-white/30 bg-white/70 p-3 shadow-[0_18px_45px_rgba(4,28,50,0.08)] backdrop-blur-xl">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.45rem] bg-[#041C32]/5">
        <Image
          key={currentImage}
          src={currentImage}
          alt={`${title} ${safeIndex + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#041C32]/20 via-transparent to-transparent" />

        {hasMultipleImages && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-20 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/85 text-[#041C32] shadow-[0_8px_24px_rgba(4,28,50,0.12)] backdrop-blur-xl transition duration-300 hover:scale-105 hover:bg-[#F5EA00]"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-20 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/85 text-[#041C32] shadow-[0_8px_24px_rgba(4,28,50,0.12)] backdrop-blur-xl transition duration-300 hover:scale-105 hover:bg-[#F5EA00]"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}
      </div>

      {hasMultipleImages && (
        <div className="mt-3 flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to image ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={clsx(
                "h-2 rounded-full transition-all duration-300",
                safeIndex === index
                  ? "w-6 bg-[#F5EA00]"
                  : "w-2 bg-[#041C32]/20 hover:bg-[#041C32]/40"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}