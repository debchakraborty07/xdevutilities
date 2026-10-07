// src/app/tools/resume-scanner/components/scanner-wrapper.jsx

"use client";

import dynamic from "next/dynamic";

const DynamicScanner = dynamic(
  () => import("./scanner-interactive"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[520px] w-full bg-slate-100 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800 animate-pulse rounded-3xl" />
    )
  }
);

export default function ScannerWrapper() {
  return <DynamicScanner />;
}