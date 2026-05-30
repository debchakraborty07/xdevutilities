// src/app/tools/privacy-blur/layout.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Blur Redactor | Redact Sensitive Info from Photos",
  description: "Fast and private browser-based tool to blur or mask sensitive information in images. No data upload, 100% secure.",
  keywords: ["privacy blur", "redact sensitive information", "hide email in screenshot", "online privacy tool"],
  alternates: {
    canonical: 'https://www.xdevutilities.com/tools/privacy-blur', 
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}