// src/app/tools/price-comparison/components/comparison-wrapper.jsx

"use client";

import dynamic from "next/dynamic";

const DynamicActionZone = dynamic(
  () => import("./action-zone"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[460px] w-full bg-slate-100 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800 animate-pulse rounded-3xl" />
    )
  }
);

export default function ComparisonWrapper() {
  return <DynamicActionZone />;
}