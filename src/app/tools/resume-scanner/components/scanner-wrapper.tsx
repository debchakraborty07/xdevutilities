// src/app/tools/resume-scanner/components/scanner-wrapper.tsx

"use client";

import dynamic from "next/dynamic";

const DynamicScanner = dynamic(
  () => import("./scanner-interactive"),
  { 
    ssr: false,
    loading: () => <div className="h-[500px] w-full bg-background text-foreground animate-pulse rounded-3xl" />
  }
);

export default function ScannerWrapper() {
  return <DynamicScanner />;
}