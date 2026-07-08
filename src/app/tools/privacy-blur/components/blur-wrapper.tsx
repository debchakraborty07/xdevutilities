// src/app/tools/privacy-blur/components/blur-wrapper.tsx

"use client";

import dynamic from "next/dynamic";

const DynamicBlur = dynamic(
  () => import("./blur-interactive"),
  { 
    ssr: false,
    loading: () => <div className="h-[500px] w-full bg-background text-foreground animate-pulse rounded-[32px]" />
  }
);

export default function BlurWrapper() {
  return <DynamicBlur />;
}