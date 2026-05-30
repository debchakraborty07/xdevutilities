// src/app/tools/metadata-cleaner/layout.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PDF Metadata Cleaner | Protect Your Privacy",
  description: "Remove hidden sensitive information, author names, and software signatures from your PDF files before sharing them online.",
  keywords: ["remove pdf metadata", "clean pdf properties", "pdf privacy tool", "anonymous pdf"],
  alternates: {
    canonical: 'https://www.xdevutilities.com/tools/metadata-cleaner', 
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}