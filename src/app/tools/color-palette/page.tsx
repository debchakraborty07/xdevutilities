// src/app/tools/color-palette/page.tsx

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import RelatedSidebar from "@/components/shared/related-sidebar";
import SaveToolButton from "@/components/shared/save-tool-button";
import ColorPaletteWrapper from "./components/color-palette-wrapper";
import UsageGuide from "./components/usage-guide";
import FAQSection from "./components/faq-section";

export default function ColorPalettePage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-[1400px] text-foreground bg-background">
      <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-foreground dark:hover:text-slate-100 transition-colors mb-8 text-sm font-medium">
        <ArrowLeft size={16} /> Back to tools
      </Link>
      
      <div className="max-w-2xl mb-12">
        <div className="flex flex-wrap items-center gap-10 mb-4"> 
          <h1 className="text-4xl font-semibold tracking-tight">AI Color Palette Extractor</h1>
          <SaveToolButton toolId="color-palette" />
        </div>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          Upload any image and let our AI extract its professional color essence. Get instant hex codes for your next project.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start">
        <div className="flex-1 w-full min-w-0">
          
          {/* ক্লায়েন্ট লজিক সমৃদ্ধ ইন্টারঅ্যাক্টিভ পার্ট */}
          <ColorPaletteWrapper />

          {/* এই অংশটি এখন সার্ভার থেকে সরাসরি HTML হিসেবে রেন্ডার হয়ে গুগল বটের কাছে যাবে */}
          <div className="max-w-4xl space-y-24 border-t border-slate-100 dark:border-slate-800 pt-24">
            <UsageGuide />
            <FAQSection />
          </div>
        </div>
        <aside className="hidden lg:block w-[300px] xl:w-[350px] shrink-0 sticky top-28">
          <RelatedSidebar currentToolId="color-palette" category="image" />
        </aside>
      </div>
    </div>
  );
}