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
      className="fixed
left-4
top-24
z-[70]

inline-flex
h-14
w-14
items-center
justify-center

rounded-full
border
border-white/10

bg-[#041C32]/80
backdrop-blur-xl

text-white

shadow-[0_10px_30px_rgba(0,0,0,0.25)]

transition
duration-300

hover:-translate-y-1
hover:scale-105
hover:bg-[#062847]

sm:left-5
sm:top-24

lg:left-5
lg:top-5
"
    >
      <ArrowLeft className="h-6 w-6" />
    </button>
  );
}