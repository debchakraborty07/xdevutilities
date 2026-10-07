// src/app/tools/color-palette/components/color-palette-wrapper.jsx

"use client";

import dynamic from "next/dynamic";

const DynamicColorPalette = dynamic(
  () => import("./color-palette-interactive"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[450px] w-full bg-slate-100 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800 animate-pulse rounded-3xl" />
    )
  }
);

export default function ColorPaletteWrapper() {
  return <DynamicColorPalette />;
}