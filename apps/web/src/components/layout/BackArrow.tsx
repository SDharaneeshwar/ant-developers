"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackArrow() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      aria-label="Go back"
      className="fixed left-5 top-5 z-[70] inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/90 text-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.15)] transition hover:-translate-y-1 hover:bg-white"
    >
      <ArrowLeft className="h-6 w-6" />
    </button>
  );
}