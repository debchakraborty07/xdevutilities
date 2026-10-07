// src/app/tools/safe-zone-checker/page.jsx

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import RelatedSidebar from "@/components/shared/related-sidebar";
import SaveToolButton from "@/components/shared/save-tool-button";
import SafeZoneWrapper from "./components/safe-zone-wrapper";
import UsageGuide from "./components/usage-guide";
import FAQSection from "./components/faq-section";

export const metadata = {
  title: "Social Media Safe Zone Checker | Cover & Banner Guidelines | xdevutilities",
  description: "Test and verify your cover images, YouTube channel art, LinkedIn banners, and Twitter headers against mobile and desktop safe zones instantly.",
  alternates: {
    canonical: "https://www.xdevutilities.com/tools/safe-zone-checker",
  },
  openGraph: {
    title: "Social Media Safe Zone Checker | xdevutilities",
    description: "Verify cover images, YouTube art, and LinkedIn banners against mobile and desktop safe zones.",
    url: "https://www.xdevutilities.com/tools/safe-zone-checker",
    siteName: "xdevutilities",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Safe Zone Checker | xdevutilities",
    description: "Verify cover images, YouTube art, and LinkedIn banners against mobile and desktop safe zones.",
  },
};

export default function SafeZonePage() {
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
          <h1 className="text-3xl sm:text-4xl font-semibold text-foreground dark:text-slate-100 ">
            Social Media Safe Zone
          </h1>

          {/* Bookmark Button */}
          <div className="pt-1">
            <SaveToolButton toolId="safe-zone-checker" />
          </div>
        </div>

        <p className="text-muted-foreground max-w-2xl leading-relaxed font-medium">
          Verify your images against mobile and desktop safe zones. Avoid getting your important brand content cropped by platform UI elements.
        </p>
      </div>

      {/* মেইন লেআউট ফ্লেক্সবক্স */}
      <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start">

        {/* বাম দিকের অংশ: মেইন টুল + গাইড + FAQ */}
        <div className="flex-1 w-full min-w-0">

          {/* dynamic ক্লায়েন্ট লেআউট */}
          <section className="mb-24">
            <SafeZoneWrapper />
          </section>

          {/* ইউসেজ গাইড এবং FAQ সেকশন (সার্ভার সাইড রেন্ডারিং) */}
          <div className="max-w-4xl space-y-24 border-t border-slate-100 dark:border-slate-800 pt-24">
            <UsageGuide />
            <FAQSection />
          </div>
        </div>

        {/* ডান দিকের অংশ: রিলেটেড টুলস সাইডবার (Sticky) */}
        <aside className="hidden lg:block w-[300px] xl:w-[350px] shrink-0 sticky top-28">
          <RelatedSidebar currentToolId="safe-zone-checker" category="image" />
        </aside>

      </div>
    </div>
  );
}