// src/app/tools/privacy-blur/components/blur-wrapper.jsx

"use client";

import dynamic from "next/dynamic";

const DynamicBlur = dynamic(
  () => import("./blur-interactive"),
  { 
    ssr: false,
    loading: () => (
      <div className="h-[580px] w-full bg-slate-100 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800 animate-pulse rounded-[32px]" />
    )
  }
);

export default function BlurWrapper() {
  return <DynamicBlur />;
}