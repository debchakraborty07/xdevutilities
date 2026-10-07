// src/app/tools/passport-photo/page.jsx

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import RelatedSidebar from "@/components/shared/related-sidebar";
import SaveToolButton from "@/components/shared/save-tool-button";
import PhotoWrapper from "./components/photo-wrapper";
import UsageGuide from "./components/usage-guide";
import FAQSection from "./components/faq-section";

export default function PassportPhotoPage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-[1400px] text-foreground bg-background">
      <div className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-foreground dark:hover:text-slate-100 transition-colors mb-6 text-sm font-medium"
        >
          <ArrowLeft size={16} /> Back to tools
        </Link>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-4">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground dark:text-slate-100">
            Passport Photo Maker
          </h1>
          <div className="pt-1">
            <SaveToolButton toolId="passport-photo" />
          </div>
        </div>

        <p className="text-muted-foreground max-w-2xl leading-relaxed font-medium">
          Create compliant digital passport photos in seconds. Automatically optimized for online applications and visa portals worldwide.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start">
        <div className="flex-1 w-full min-w-0">

          {/* ক্লায়েন্ট লজিক সমৃদ্ধ ইন্টারঅ্যাক্টিভ ফটো মেকার পার্ট */}
          <PhotoWrapper />

          {/* এই অংশটি সার্ভার থেকে সরাসরি HTML হিসেবে রেন্ডার হয়ে গুগল বটের কাছে যাবে */}
          <div className="max-w-4xl space-y-24 border-t border-slate-100 dark:border-slate-800 pt-24">
            <UsageGuide />
            <FAQSection />
          </div>
        </div>

        <aside className="hidden lg:block w-[300px] xl:w-[350px] shrink-0 sticky top-28">
          <RelatedSidebar currentToolId="passport-photo" category="image" />
        </aside>
      </div>
    </div>
  );
}