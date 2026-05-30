// src/app/tools/sql-mermaid/page.tsx

"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Code2, Share2, Download, Play } from "lucide-react";
import { toast } from "sonner";
import RelatedSidebar from "@/components/shared/related-sidebar";
import SaveToolButton from "@/components/shared/save-tool-button";

import ActionZone from "./components/action-zone";
import ResultPreview from "./components/result-preview";
import UsageGuide from "./components/usage-guide";
import FAQSection from "./components/faq-section";

export default function SqlMermaidPage() {
  const [sql, setSql] = useState("");
  const [mermaidCode, setMermaidCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!sql.trim()) return toast.error("Please enter some SQL code");
    
    setLoading(true);
    try {
      const res = await fetch("https://sql-to-mermaid-api-dxrdhrudba-uc.a.run.app", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sql }),
      });
      const data = await res.json();
      if (data.success) {
        setMermaidCode(data.mermaid);
        toast.success("Diagram generated!");
      } else {
        toast.error("Failed to parse SQL");
      }
    } catch (err) {
      toast.error("Connection error");
    } finally {
      setLoading(false);
    }
  };

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
          <section className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
            {/* SQL Editor Area */}
            <ActionZone sql={sql} setSql={setSql} onGenerate={handleGenerate} loading={loading} />
            
            {/* Visual Preview Area */}
            <ResultPreview mermaidCode={mermaidCode} />
          </section>

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