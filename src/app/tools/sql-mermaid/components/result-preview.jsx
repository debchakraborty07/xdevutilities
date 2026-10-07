// src/app/tools/sql-mermaid/components/result-preview.jsx

"use client";

import { useEffect, useState } from "react";
import mermaid from "mermaid";
import { Layout, Download, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Mermaid Initial Configuration
mermaid.initialize({
  startOnLoad: false,
  theme: 'base',
  themeVariables: {
    primaryColor: '#6366f1',
    primaryTextColor: '#fff',
    lineColor: '#64748b',
    fontSize: '14px',
    fontFamily: 'Inter',
  }
});

export default function ResultPreview({ mermaidCode }) {
  const [svg, setSvg] = useState("");

  useEffect(() => {
    // ইনপুট মুছে গেলে আগের SVG ক্লিয়ার করে স্টেট সিঙ্ক রাখা
    if (!mermaidCode) {
      setSvg("");
      return;
    }

    const renderDiagram = async () => {
      try {
        const uniqueId = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
        const { svg: renderedSvg } = await mermaid.render(uniqueId, mermaidCode);
        setSvg(renderedSvg);
      } catch (error) {
        console.error("Mermaid Render Error:", error);
        toast.error("Error rendering diagram. Please check SQL syntax.");
      }
    };

    renderDiagram();
  }, [mermaidCode]);

  const handleDownload = () => {
    if (!svg) return;
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `database-schema-xdev-${Date.now()}.svg`;
    link.click();
    URL.revokeObjectURL(url);
    toast.success("Diagram downloaded as SVG vector file");
  };

  return (
    <div className="bg-card text-card-foreground border border-border rounded-[40px] p-6 sm:p-8 min-h-[500px] flex flex-col relative overflow-hidden shadow-sm">
      <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-2">
        Visual ER Diagram
      </div>

      {svg ? (
        <div className="flex-1 flex flex-col items-center justify-between mt-4 animate-in fade-in zoom-in duration-500 w-full">
          <div
            className="w-full bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl overflow-auto border border-border flex justify-center shadow-lg min-h-[350px]"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
          <div className="w-full mt-6 flex flex-col sm:flex-row gap-4">
            <Button
              type="button"
              onClick={handleDownload}
              className="flex-1 h-12 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 rounded-2xl font-bold shadow-md transition-all active:scale-[0.98]"
            >
              <Download size={18} className="mr-2" /> Download SVG Vector
            </Button>
          </div>
          <p className="text-[11px] text-muted-foreground mt-4 flex items-center gap-1.5 italic">
            <MousePointer2 size={12} /> Pro Tip: High-quality lossless vector output for technical documentation
          </p>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground italic gap-3 py-16">
          <Layout size={48} className="opacity-20" />
          <p className="text-sm font-medium">Enter SQL on the left and click Visualize to generate diagram</p>
        </div>
      )}
    </div>
  );
}