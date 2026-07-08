// src/app/tools/color-palette/components/result-preview.tsx

"use client";
import { useState } from "react";
import { Copy, Check, RefreshCw, MousePointer2 } from "lucide-react";
import { toast } from "sonner";

export default function ResultPreview({ colors }: { colors: string[] }) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (color: string, index: number) => {
    navigator.clipboard.writeText(color);
    setCopiedIndex(index);
    toast.success(`Hex code ${color.to()} copied!`);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="bg-card text-card-foreground rounded-[32px] p-10 flex flex-col relative min-h-[400px] border border-border shadow-sm">
      <div className="absolute top-6 left-6 text-[10px] font-bold text-muted-foreground  ">
        Extracted Palette
      </div>
      
      {colors && colors.length > 0 ? (
        <div className="mt-8 space-y-3 animate-in fade-in zoom-in duration-500">
          {colors.map((color, index) => (
            <div 
              key={index} 
              onClick={() => copyToClipboard(color, index)}
              className="group flex items-center justify-between p-3 bg-secondary/50 hover:bg-secondary rounded-2xl cursor-pointer transition-all border border-border"
            >
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-xl shadow-md border border-border/50 transition-transform group-hover:scale-105" 
                  style={{ backgroundColor: color }} 
                />
                <span className="font-mono text-foreground font-bold tracking-wider">{color.to()}</span>
              </div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                {copiedIndex === index ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
              </div>
            </div>
          ))}
          <p className="text-[10px] text-muted-foreground text-center mt-6 flex items-center justify-center gap-1 italic">
            <MousePointer2 size={10} /> Click any color to copy hex code
          </p>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-12 h-12 border-2 border-dashed border-muted-foreground/30 rounded-full flex items-center justify-center mx-auto text-muted-foreground/50">
            <RefreshCw size={20} className="animate-spin-slow" />
          </div>
          <div className="space-y-1">
            <p className="text-sm text-foreground font-semibold">Awaiting image analysis</p>
            <p className="text-xs text-muted-foreground">Upload an image to extract its color profile</p>
          </div>
        </div>
      )}
    </div>
  );
}