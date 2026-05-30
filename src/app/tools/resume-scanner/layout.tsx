// src/app/tools/resume-scanner/layout.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ats Resume Scanner | Improve Your Match Score",
  description: "Scan your resume against job descriptions using our advanced ATS algorithm. Identify missing keywords and optimize your CV for better hireability.",
  alternates: {
    canonical: 'https://www.xdevutilities.com/tools/resume-scanner',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}