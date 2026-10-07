// src/app/tools/code-to-image/page.jsx

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import UsageGuide from "./components/usage-guide";
import FAQSection from "./components/faq-section";
import RelatedSidebar from "@/components/shared/related-sidebar";
import SaveToolButton from "@/components/shared/save-tool-button";
import CodeGeneratorWrapper from "./components/code-generator-wrapper";

export default function CodeToImagePage() {
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
          <h1 className="text-3xl sm:text-4xl font-semibold text-foreground dark:text-slate-100">
            Code to Image
          </h1>
          
          {/* Bookmark Button */}
          <div className="pt-1">
            <SaveToolButton toolId="code-to-image" />
          </div>
        </div>

        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          Create aesthetic snapshots of your source code. Choose a language, pick a theme, and export in high resolution.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start">
        <div className="flex-1 w-full min-w-0">
          <section className="mb-24">
            <CodeGeneratorWrapper />
          </section>

          <div className="max-w-4xl space-y-24 border-t border-slate-100 dark:border-slate-800 pt-24">
            <UsageGuide />
            <FAQSection />
          </div>
        </div>

        <aside className="hidden lg:block w-[300px] xl:w-[350px] shrink-0 sticky top-28">
          <RelatedSidebar currentToolId="code-to-image" category="developer" />
        </aside>
      </div>
    </div>
  );
}