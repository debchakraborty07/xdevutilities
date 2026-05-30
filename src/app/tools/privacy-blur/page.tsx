// src/app/tools/privacy-blur/page.tsx

"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlurCanvas from "./components/blur-canvas";
import UsageGuide from "./components/usage-guide";
import FAQSection from "./components/faq-section";
import RelatedSidebar from "@/components/shared/related-sidebar";
import SaveToolButton from "@/components/shared/save-tool-button";


export default function PrivacyBlurPage() {
  const [image, setImage] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-6 py-12 max-w-[1400px]">
      <div className="mb-12">
        <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-foreground dark:hover:text-slate-100 transition-colors mb-6 text-sm font-medium">
          <ArrowLeft size={16} /> Back to tools
        </Link>
        <div className="flex flex-wrap items-center gap-10 mb-4"> 
          <h1 className="text-4xl font-semibold text-foreground dark:text-slate-100">
            Privacy Blur Redactor
          </h1>
          
          {/* Bookmark Button */}
          <div className="pt-1">
            <SaveToolButton toolId="privacy-blur" />
          </div>
        </div>

        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          The fastest way to redact sensitive information. Draw over areas to blur or mask them. Your images never leave your browser.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start">
        <div className="flex-1 w-full min-w-0">
          <section className="mb-24">
            {/* মেইন ইন্টারেক্টিভ ক্যানভাস */}
            <BlurCanvas image={image} setImage={setImage} />
          </section>

          <div className="max-w-4xl space-y-24 border-t border-slate-100 dark:border-slate-800 pt-24">
            <UsageGuide />
            <FAQSection />
          </div>
        </div>

        <aside className="hidden lg:block w-[300px] xl:w-[350px] shrink-0 sticky top-28">
          <RelatedSidebar currentToolId="privacy-blur" category="privacy" />
        </aside>
      </div>
    </div>
  );
}