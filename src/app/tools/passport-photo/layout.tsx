// src/app/tools/passport-photo/layout.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "passport photo maker | online utility",
  description: "create professional 300x300 passport size photos with standard borders instantly. secure, private, and high-quality.",
  keywords: ["online passport photo", "300x300 image resizer", "professional photo maker"],
  alternates: {
    canonical: 'https://www.xdevutilities.com/tools/passport-photo',
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}