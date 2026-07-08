// src/app/tools/metadata-cleaner/components/cleaner-wrapper.tsx

"use client";

import dynamic from "next/dynamic";

const DynamicCleaner = dynamic(
  () => import("./cleaner-interactive"),
  { 
    ssr: false,
    loading: () => <div className="h-[350px] w-full bg-background text-foreground animate-pulse rounded-3xl" />
  }
);

export default function CleanerWrapper() {
  return <DynamicCleaner />;
}