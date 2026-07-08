// src/app/tools/price-comparison/components/comparison-wrapper.tsx

"use client";

import dynamic from "next/dynamic";

const DynamicActionZone = dynamic(
  () => import("./action-zone"),
  { 
    ssr: false,
    loading: () => <div className="h-[400px] w-full bg-background text-foreground animate-pulse rounded-3xl" />
  }
);

export default function ComparisonWrapper() {
  return <DynamicActionZone />;
}