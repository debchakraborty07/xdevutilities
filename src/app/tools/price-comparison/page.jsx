// src/app/tools/price-comparison/page.jsx

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ComparisonWrapper from "./components/comparison-wrapper";
import UsageGuide from "./components/usage-guide";
import FAQSection from "./components/faq-section";
import RelatedSidebar from "@/components/shared/related-sidebar";
import SaveToolButton from "@/components/shared/save-tool-button";

export const metadata = {
  title: "Smart Fair Price Calculator | Grocery & Unit Cost | xdevutilities",
  description: "Calculate the exact fair price for any quantity based on a standard reference. Prevent being overcharged at the grocery store with our unit-aware estimation tool.",
  alternates: {
    canonical: "https://www.xdevutilities.com/tools/price-comparison",
  },
  openGraph: {
    title: "Smart Fair Price Calculator | xdevutilities",
    description: "Calculate exact fair prices for loose items and detect overcharging in seconds.",
    url: "https://www.xdevutilities.com/tools/price-comparison",
    siteName: "xdevutilities",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Fair Price Calculator | xdevutilities",
    description: "Calculate exact fair prices for loose items and detect overcharging in seconds.",
  },
};

export default function PriceComparisonPage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-[1400px]">
      {/* Header Section */}
      <div className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-foreground dark:hover:text-slate-100 transition-colors mb-6 text-sm font-medium"
        >
          <ArrowLeft size={16} /> Back to tools
        </Link>
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-4">
          <h1 className="text-3xl sm:text-4xl font-semibold text-foreground dark:text-slate-100 ">
            Fair Price Estimator
          </h1>
          <div className="pt-1">
            <SaveToolButton toolId="price-comparison" />
          </div>
        </div>
        <p className="text-muted-foreground dark:text-slate-400 max-w-2xl leading-relaxed font-medium">
          The ultimate tool for smart shoppers. Determine the mathematically correct price for loose items and detect overcharging in seconds.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start">
        <div className="flex-1 w-full min-w-0">
          <section className="mb-24">
            {/* dynamic ক্লায়েন্ট লেআউট */}
            <ComparisonWrapper />
          </section>

          {/* এই টেক্সট কনটেন্ট অংশটি সরাসরি সার্ভার থেকে HTML হিসেবে গুগল বটের কাছে যাবে */}
          <div className="max-w-4xl space-y-24 border-t border-slate-100 dark:border-slate-800 pt-24">
            <UsageGuide />
            <FAQSection />
          </div>
        </div>

        <aside className="hidden lg:block w-[300px] xl:w-[350px] shrink-0 sticky top-28">
          <RelatedSidebar currentToolId="price-comparison" category="Finance" />
        </aside>
      </div>

      <div className="mt-12 pt-8 border-t border-border/40 text-center">
        <p className="text-[11px] text-slate-400 dark:text-muted-foreground font-medium">
          xdevutilities Smart Commerce Infrastructure
        </p>
      </div>
    </div>
  );
}