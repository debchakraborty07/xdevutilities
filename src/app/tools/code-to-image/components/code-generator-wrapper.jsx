// src/app/tools/code-to-image/components/code-generator-wrapper.jsx

"use client";

import dynamic from "next/dynamic";

const DynamicCodeGenerator = dynamic(
  () => import("./code-generator"),
  { 
    ssr: false,
    loading: () => (
      <div className="h-[580px] w-full bg-slate-100 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800 animate-pulse rounded-3xl" />
    )
  }
);

export default function CodeGeneratorWrapper() {
  return <DynamicCodeGenerator />;
}