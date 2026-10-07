// src/app/tools/metadata-cleaner/page.jsx

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import RelatedSidebar from "@/components/shared/related-sidebar";
import UsageGuide from "./components/usage-guide";
import FAQSection from "./components/faq-section";
import SaveToolButton from "@/components/shared/save-tool-button";
import CleanerWrapper from "./components/cleaner-wrapper";

export default function MetadataCleanerPage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-[1400px]">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-foreground dark:hover:text-slate-100 transition-colors mb-6 text-sm font-medium"
      >
        <ArrowLeft size={16} /> Back to tools
      </Link>

      <div className="max-w-2xl mb-12">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-4">
          <h1 className="text-3xl sm:text-4xl font-semibold text-foreground dark:text-slate-100 tracking-tight">
            PDF Metadata Cleaner
          </h1>

          {/* Bookmark Button */}
          <div className="pt-1">
            <SaveToolButton toolId="metadata-cleaner" />
          </div>
        </div>

        <p className="text-muted-foreground max-w-xl leading-relaxed font-medium">
          The ultimate privacy utility for your PDF documents. Strip hidden trackers, author history, and identity markers with zero persistent storage.
        </p>
      </div>

      {/* মেইন লেআউট ফ্লেক্সবক্স */}
      <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start">

        {/* বাম দিকের মেইন এরিয়া */}
        <div className="flex-1 w-full min-w-0">

          {/* ক্লায়েন্ট লজিক সমৃদ্ধ ইন্টারঅ্যাক্টিভ পিডিএফ ক্লিনার পার্ট */}
          <CleanerWrapper />

          {/* এই অংশটি সার্ভার থেকে সরাসরি HTML হিসেবে রেন্ডার হয়ে গুগল বটের কাছে যাবে */}
          <div className="max-w-4xl space-y-24 border-t border-slate-100 dark:border-slate-800 pt-24">
            <UsageGuide />
            <FAQSection />
          </div>
        </div>

        {/* ডান দিকের সাইডবার */}
        <aside className="hidden lg:block w-[300px] xl:w-[350px] shrink-0 sticky top-28">
          <RelatedSidebar currentToolId="metadata-cleaner" category="privacy" />
        </aside>

      </div>
    </div>
  );
}