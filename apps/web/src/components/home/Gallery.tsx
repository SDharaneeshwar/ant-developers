"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";
import { X } from "lucide-react";

type GalleryItem = {
  id: number;
  image: string;
};

const galleryItems: GalleryItem[] = Array.from({ length: 14 }, (_, i) => ({
  id: i + 1,
  image: `/gallery/image${i + 1}.png`,
}));

export default function Gallery() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const rows = useMemo(() => {
    const rowCount = 3;
    const perRow = Math.ceil(galleryItems.length / rowCount);

    return Array.from({ length: rowCount }, (_, i) =>
      galleryItems.slice(i * perRow, (i + 1) * perRow)
    );
  }, []);

  const activeItem = galleryItems.find((item) => item.id === activeId) ?? null;

  return (
    <section id="gallery" className="py-24" ref={ref}>
      <div className="section-shell">
        <div className="text-center">
          <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.18em] text-brand-beige sm:text-sm">
            GALLERY
          </p>

          <h2 className="mt-6 section-title">A living stream of our learning moments</h2>
          <p className="section-copy mx-auto">
            Workshops, training sessions, team learning, and practical development experiences.
          </p>
        </div>

        <div className="mt-12 space-y-6 overflow-hidden">
          {rows.map((row, index) => (
            <GalleryRow
              key={index}
              items={row}
              reverse={index % 2 === 1}
              inView={inView}
              prefersReducedMotion={Boolean(prefersReducedMotion)}
              hoveredId={hoveredId}
              hoveredRow={hoveredId ? Math.floor((hoveredId - 1) / 5) : null}
              rowIndex={index}
              onHover={setHoveredId}
              onOpen={setActiveId}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center rounded-full border border-brand-orange px-5 py-2.5 text-sm font-semibold text-brand-beige transition duration-300 hover:bg-brand-orange hover:text-white"
          >
            View More
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveId(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveId(null)}
                className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 text-white transition hover:bg-white/10"
                aria-label="Close image preview"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={activeItem.image}
                  alt="Gallery preview"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1200px"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function GalleryRow({
  items,
  reverse,
  inView,
  prefersReducedMotion,
  hoveredId,
  hoveredRow,
  rowIndex,
  onHover,
  onOpen,
}: {
  items: GalleryItem[];
  reverse: boolean;
  inView: boolean;
  prefersReducedMotion: boolean;
  hoveredId: number | null;
  hoveredRow: number | null;
  rowIndex: number;
  onHover: (id: number | null) => void;
  onOpen: (id: number) => void;
}) {
  const duplicated = [...items, ...items];
  const isThisRowHovered = hoveredRow === rowIndex;
  const shouldPause = !inView || prefersReducedMotion || isThisRowHovered;

  return (
    <div className="group relative overflow-hidden">
      <motion.div
        className="flex w-max gap-6"
        animate={
          shouldPause
            ? {
                x: reverse ? ["-50%"] : ["0%"],
              }
            : {
                x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
              }
        }
        transition={{
          duration: 30,
          ease: "linear",
          repeat: shouldPause ? 0 : Infinity,
        }}
        drag="x"
        dragConstraints={{ left: -300, right: 300 }}
        dragElastic={0.08}
        whileTap={{ cursor: "grabbing" }}
        style={{ cursor: "grab" }}
      >
        {duplicated.map((item, idx) => {
          const isHovered = hoveredId === item.id;
          const someHovered = hoveredId !== null;

          return (
            <motion.button
              key={`${item.id}-${idx}`}
              type="button"
              onMouseEnter={() => onHover(item.id)}
              onMouseLeave={() => onHover(null)}
              onFocus={() => onHover(item.id)}
              onBlur={() => onHover(null)}
              onClick={() => onOpen(item.id)}
              className="group relative block w-[280px] shrink-0 overflow-hidden rounded-[28px] border border-white/10 bg-white/5 text-left shadow-[0_10px_30px_rgba(15,23,42,0.18)] backdrop-blur-xl sm:w-[340px] lg:w-[380px]"
              animate={{
                y: prefersReducedMotion ? 0 : [0, -5, 0],
                scale: isHovered ? 1.08 : someHovered ? 0.96 : 1,
                opacity: someHovered && !isHovered ? 0.58 : 1,
              }}
              transition={{
                y: {
                  duration: 4.5 + (idx % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                scale: { duration: 0.28, ease: "easeOut" },
                opacity: { duration: 0.28, ease: "easeOut" },
              }}
              style={{
                zIndex: isHovered ? 10 : 1,
              }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt="Gallery image"
                  fill
                  className="object-cover transition duration-500"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 380px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              </div>
            </motion.button>
          );
        })}
      </motion.div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0f172a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0f172a] to-transparent" />
    </div>
  );
}