"use client";

import Loader from "@/components/ui/Loader";

export default function LoaderTestPage() {
  return (
    <div>
      <Loader />

      <div className="flex min-h-screen items-center justify-center bg-[#0f172a] px-4 text-center text-white">
        <div>
          <h1 className="text-3xl font-semibold sm:text-5xl">
            Loader Test Page
          </h1>
          <p className="mt-4 text-slate-300">
            This content will appear after the loader slides up.
          </p>
        </div>
      </div>
    </div>
  );
}