// src/app/tools/safe-zone-checker/layout.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Safe Zone Checker | Profile & Banner Preview",
  description: "Ensure your profile and banner images are perfectly framed. Check safe areas for LinkedIn, X (Twitter), YouTube, and Facebook instantly.",
  keywords: ["social media safe zone", "linkedin banner safe area", "twitter header crop checker", "profile picture circular crop"],
  alternates: {
    canonical: 'https://www.xdevutilities.com/tools/safe-zone-checker',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}