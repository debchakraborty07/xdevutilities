// src/app/tools/sql-mermaid/components/mermaid-wrapper.tsx

"use client";

import dynamic from "next/dynamic";

const DynamicMermaid = dynamic(
  () => import("./mermaid-interactive"),
  { 
    ssr: false,
    loading: () => <div className="h-[400px] w-full bg-background text-foreground animate-pulse rounded-[32px]" />
  }
);

export default function MermaidWrapper() {
  return <DynamicMermaid />;
}