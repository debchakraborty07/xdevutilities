// src/app/tools/safe-zone-checker/components/safe-zone-wrapper.tsx

"use client";

import dynamic from "next/dynamic";

const DynamicSafeZone = dynamic(
  () => import("./safe-zone-interactive"),
  { 
    ssr: false,
    loading: () => <div className="h-[400px] w-full bg-background text-foreground animate-pulse rounded-[32px]" />
  }
);

export default function SafeZoneWrapper() {
  return <DynamicSafeZone />;
}