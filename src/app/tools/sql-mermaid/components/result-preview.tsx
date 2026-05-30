// src/app/tools/sql-mermaid/components/result-preview.tsx

"use client";
import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { Layout, Download, MousePointer2, RefreshCw } from "lucide-react";
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

export default function ResultPreview({ mermaidCode }: { mermaidCode: string }) {
  const [svg, setSvg] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mermaidCode) {
      const renderDiagram = async () => {
        try {
          const { svg } = await mermaid.render(`mermaid-${Math.random().toString(36).substr(2, 9)}`, mermaidCode);
          setSvg(svg);
        } catch (error) {
          console.error("Mermaid Render Error:", error);
          toast.error("Error rendering diagram. Please check SQL syntax.");
        }
      };
      renderDiagram();
    }
  }, [mermaidCode]);

  const handleDownload = () => {
    if (!svg) return;
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'database-schema-xdev.svg';
    link.click();
    URL.revokeObjectURL(url);
    toast.success("Diagram downloaded as SVG");
  };

  return (
    <div className="text-foreground bg-background rounded-[40px] p-8 min-h-[500px] flex flex-col relative overflow-hidden">
      <div className="absolute top-6 left-8 text-[10px] font-semibold text-muted-foreground">Visual ER Diagram</div>
      
      {svg ? (
        <div className="flex-1 flex flex-col text-foreground bg-background  items-center justify-between mt-8 animate-in fade-in zoom-in duration-500">
          <div 
            className="w-full bg-white dark:bg-slate-900 p-8 rounded-3xl overflow-auto border border-white/5 flex justify-center shadow-2xl"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
          <div className="w-full mt-6 flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={handleDownload}
              className="flex-1 h-12 bg-white/10 hover:bg-white/20 text-white rounded-2xl border border-white/10"
            >
              <Download size={18} className="mr-2" /> Download SVG
            </Button>
          </div>
          <p className="text-[10px] text-slate-600 mt-4 flex items-center gap-1 italic">
            <MousePointer2 size={10} /> Pro Tip: High-quality vector output for your docs
          </p>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-foreground bg-background italic gap-3">
           <Layout size={48} className="opacity-10" />
           <p className="text-sm">Enter SQL on the left to generate diagram</p>
        </div>
      )}
    </div>
  );
}