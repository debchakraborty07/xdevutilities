// src/app/tools/color-palette/components/color-palette-wrapper.tsx

"use client";

import dynamic from "next/dynamic";

const DynamicColorPalette = dynamic(
  () => import("./color-palette-interactive"),
  { 
    ssr: false,
    loading: () => <div className="h-[400px] w-full bg-background text-foreground animate-pulse rounded-3xl" />
  }
);

export default function ColorPaletteWrapper() {
  return <DynamicColorPalette />;
}