// src/app/tools/passport-photo/components/photo-wrapper.tsx

"use client";

import dynamic from "next/dynamic";

const DynamicPhotoMaker = dynamic(
  () => import("./photo-interactive"),
  { 
    ssr: false,
    loading: () => <div className="h-[400px] w-full bg-background text-foreground animate-pulse rounded-3xl" />
  }
);

export default function PhotoWrapper() {
  return <DynamicPhotoMaker />;
}