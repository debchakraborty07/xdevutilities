// src/app/tools/metadata-cleaner/components/cleaner-wrapper.jsx

"use client";

import dynamic from "next/dynamic";

const DynamicCleaner = dynamic(
  () => import("./cleaner-interactive"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[380px] w-full bg-slate-100 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800 animate-pulse rounded-3xl" />
    )
  }
);

export default function CleanerWrapper() {
  return <DynamicCleaner />;
}