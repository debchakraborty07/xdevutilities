// src/app/tools/safe-zone-checker/components/safe-zone-wrapper.jsx

"use client";

import dynamic from "next/dynamic";

const DynamicSafeZone = dynamic(
  () => import("./safe-zone-interactive"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[500px] w-full bg-slate-100 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800 animate-pulse rounded-[32px]" />
    )
  }
);

export default function SafeZoneWrapper() {
  return <DynamicSafeZone />;
}