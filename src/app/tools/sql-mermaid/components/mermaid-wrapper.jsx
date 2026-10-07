// src/app/tools/sql-mermaid/components/mermaid-wrapper.jsx

"use client";

import dynamic from "next/dynamic";

const DynamicMermaid = dynamic(
  () => import("./mermaid-interactive"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[520px] w-full bg-slate-100 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800 animate-pulse rounded-[32px]" />
    )
  }
);

export default function MermaidWrapper() {
  return <DynamicMermaid />;
}