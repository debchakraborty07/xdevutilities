// src/app/tools/resume-scanner/page.jsx

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import RelatedSidebar from "@/components/shared/related-sidebar";
import SaveToolButton from "@/components/shared/save-tool-button";
import ScannerWrapper from "./components/scanner-wrapper";
import UsageGuide from "./components/usage-guide";
import FAQSection from "./components/faq-section";

export const metadata = {
  title: "AI ATS Resume Scanner | Optimize Resume Match Score | xdevutilities",
  description: "Scan your resume against any job description with our AI ATS tool. Discover missing keywords, optimize formatting, and improve your hiring score instantly.",
  alternates: {
    canonical: "https://www.xdevutilities.com/tools/resume-scanner",
  },
  openGraph: {
    title: "AI ATS Resume Scanner | xdevutilities",
    description: "Scan your resume against any job description. Discover missing keywords and optimize ATS compliance.",
    url: "https://www.xdevutilities.com/tools/resume-scanner",
    siteName: "xdevutilities",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI ATS Resume Scanner | xdevutilities",
    description: "Scan your resume against any job description. Discover missing keywords and optimize ATS compliance.",
  },
};

export default function ResumeScannerPage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-[1400px]">
      <div className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-foreground dark:hover:text-slate-100 transition-colors mb-6 text-sm font-medium"
        >
          <ArrowLeft size={16} /> Back to tools
        </Link>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-4">
          <h1 className="text-3xl sm:text-4xl font-semibold text-foreground dark:text-slate-100 tracking-tight">
            ATS Resume Scanner
          </h1>

          {/* Bookmark Button */}
          <div className="pt-1">
            <SaveToolButton toolId="resume-scanner" />
          </div>
        </div>

        <p className="text-muted-foreground max-w-2xl leading-relaxed font-medium">
          Optimize your resume for applicant tracking systems. Identify missing keywords and improve your hireability score in seconds.
        </p>
      </div>

      {/* মেইন লেআউট: ২ কলাম গ্রিড */}
      <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start">

        {/* বাম দিকের কন্টেন্ট এরিয়া */}
        <div className="flex-1 w-full min-w-0">
          <section className="mb-24">
            {/* dynamic ক্লায়েন্ট লেআউট */}
            <ScannerWrapper />
          </section>

          {/* এই অংশটি সরাসরি সার্ভার থেকে HTML হিসেবে রেন্ডার হয়ে গুগল বটের কাছে যাবে */}
          <div className="max-w-4xl space-y-24 border-t border-slate-100 dark:border-slate-800 pt-24">
            <UsageGuide />
            <FAQSection />
          </div>
        </div>

        {/* ডান দিকের সাইডবার */}
        <aside className="hidden lg:block w-[300px] xl:w-[350px] shrink-0 sticky top-28">
          <RelatedSidebar currentToolId="resume-scanner" category="career" />
        </aside>

      </div>
    </div>
  );
}