// src/app/tools/sql-mermaid/page.tsx

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import RelatedSidebar from "@/components/shared/related-sidebar";
import SaveToolButton from "@/components/shared/save-tool-button";
import MermaidWrapper from "./components/mermaid-wrapper";
import UsageGuide from "./components/usage-guide";
import FAQSection from "./components/faq-section";

export const metadata: Metadata = {
  title: "SQL to Mermaid ER Diagram Converter | Database Visualizer",
  description: "Convert raw SQL CREATE TABLE statements into interactive Mermaid Entity-Relationship (ER) diagrams instantly. Fast, secure, and client-side database visualizer.",
  alternates: {
    canonical: "https://www.xdevutilities.com/tools/sql-mermaid",
  },
};

export default function SqlMermaidPage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-[1400px]">
      <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-foreground dark:hover:text-slate-100 transition-colors mb-6 text-sm font-medium">
        <ArrowLeft size={16} /> Back to tools
      </Link>
      
      <div className="max-w-2xl mb-12">
        <div className="flex flex-wrap items-center gap-10 mb-4"> 
          <h1 className="text-4xl font-semibold text-foreground dark:text-slate-100">SQL to Mermaid Diagram</h1>
          <SaveToolButton toolId="sql-mermaid" />
        </div>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          Visualize your database structure instantly. Convert SQL CREATE TABLE statements into professional ER diagrams.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        <div className="flex-1 w-full min-w-0 space-y-24">
          
          {/* dynamic ক্লায়েন্ট লেআউট */}
          <MermaidWrapper />

          {/* এই টেক্সট কনটেন্ট অংশটি এখন সরাসরি সার্ভার থেকে HTML হিসেবে রেন্ডার হয়ে গুগল বটের কাছে যাবে */}
          <div className="max-w-4xl space-y-24 border-t border-slate-100 dark:border-slate-800 pt-24">
            <UsageGuide />
            <FAQSection />
          </div>
        </div>

        <aside className="hidden lg:block w-[300px] shrink-0 sticky top-28">
          <RelatedSidebar currentToolId="sql-mermaid" category="developer" />
        </aside>
      </div>
    </div>
  );
}