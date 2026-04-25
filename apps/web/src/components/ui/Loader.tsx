"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [dots, setDots] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400);

    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 400);

    return () => {
      clearTimeout(timer);
      clearInterval(dotInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f172a]"
        >
          <div className="text-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center"
            >
            <Image
                src="/logo.png"
                alt="ANT Developers Logo"
                width={48}
                height={48}
                priority
                className="object-contain"
                />
            </motion.div>

            {/* Title */}
            <h1 className="text-2xl font-semibold text-white">
              ANT Developers
            </h1>

            {/* Loading text */}
            <p className="mt-3 text-sm text-slate-400">
              Loading resources{dots}
            </p>

            {/* ✅ Classic Progress Bar */}
            <div className="mt-6 w-72 sm:w-80">
              <div className="h-5 overflow-hidden rounded-sm border border-white/20 bg-slate-900/60 p-[2px] shadow-inner">
                <motion.div
                  className="h-full bg-brand-orange"
                  initial={{ width: "0%" }}
                  animate={{ width: ["0%", "30%", "55%", "75%", "90%", "100%"] }}
                  transition={{
                    duration: 2.4,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Optional subtle labels */}
              <div className="mt-2 flex justify-between text-xs text-slate-500">
                <span>Loading</span>
                <span>Resources</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}