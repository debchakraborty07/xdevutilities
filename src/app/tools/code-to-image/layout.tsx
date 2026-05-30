// src/app/tools/code-to-image/layout.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code to Image Converter | Create Beautiful Code Snippets",
  description: "Generate stunning snapshots of your code with macOS-style frames and professional syntax highlighting. Perfect for developers.",
  keywords: ["code to image", "carbon clone", "share code snippets", "developer utility", "syntax highlighting image"],
  alternates: {
    canonical: 'https://www.xdevutilities.com/tools/code-to-image' ,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}