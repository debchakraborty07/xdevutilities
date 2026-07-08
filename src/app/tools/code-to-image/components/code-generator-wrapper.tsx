// src/app/tools/code-to-image/components/code-generator-wrapper.tsx

"use client";

import dynamic from "next/dynamic";

const DynamicCodeGenerator = dynamic(
  () => import("./code-generator"),
  { 
    ssr: false,
    loading: () => <div className="h-[500px] w-full bg-background text-foreground animate-pulse rounded-3xl" />
  }
);

export default function CodeGeneratorWrapper() {
  return <DynamicCodeGenerator />;
}