// src/app/tools/passport-photo/components/photo-wrapper.jsx

"use client";

import dynamic from "next/dynamic";

const DynamicPhotoMaker = dynamic(
  () => import("./photo-interactive"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[500px] w-full bg-slate-100 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800 animate-pulse rounded-3xl" />
    )
  }
);

export default function PhotoWrapper() {
  return <DynamicPhotoMaker />;
}