// src/app/tools/color-palette/layout.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Color Palette Extractor | Professional Design Utilities",
  description: "Extract professional color palettes and hex codes from any image instantly using AI. Perfect for designers and developers.",
  keywords: ["color palette extractor", "image to hex", "ai color scheme", "design tool", "tailwind colors"],
  alternates: {
    canonical: 'https://www.xdevutilities.com/tools/color-palette',
  },
 
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}