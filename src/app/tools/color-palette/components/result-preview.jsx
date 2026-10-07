// src/app/tools/color-palette/components/result-preview.jsx

"use client";
import { useState } from "react";
import { Copy, Check, RefreshCw, MousePointer2 } from "lucide-react";
import { toast } from "sonner";

export default function ResultPreview({ colors = [] }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = async (color, index) => {
    try {
      await navigator.clipboard.writeText(color);
      setCopiedIndex(index);
      toast.success(`Hex code ${color.toUpperCase()} copied!`);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      toast.error("Failed to copy hex code to clipboard");
    }
  };

  return (
    <div className="bg-card text-card-foreground rounded-[32px] p-6 sm:p-10 flex flex-col relative min-h-[400px] border border-border shadow-sm">
      <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-2">
        Extracted Palette
      </div>

      {colors && colors.length > 0 ? (
        <div className="mt-4 space-y-3 animate-in fade-in zoom-in duration-500">
          {colors.map((color, index) => (
            <div
              key={`${color}-${index}`}
              tabIndex={0}
              role="button"
              aria-label={`Copy color ${color}`}
              onClick={() => copyToClipboard(color, index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  copyToClipboard(color, index);
                }
              }}
              className="group flex items-center justify-between p-3 bg-secondary/50 hover:bg-secondary rounded-2xl cursor-pointer transition-all border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl shadow-md border border-border/50 transition-transform group-hover:scale-105 shrink-0"
                  style={{ backgroundColor: color }}
                />
                <span className="font-mono text-foreground font-bold tracking-wider">
                  {color.toUpperCase()}
                </span>
              </div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors p-1">
                {copiedIndex === index ? (
                  <Check size={18} className="text-emerald-500" />
                ) : (
                  <Copy size={18} />
                )}
              </div>
            </div>
          ))}
          <p className="text-[11px] text-muted-foreground text-center mt-6 flex items-center justify-center gap-1.5 italic">
            <MousePointer2 size={12} /> Click any color to copy hex code
          </p>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 py-12">
          <div className="w-12 h-12 border-2 border-dashed border-muted-foreground/30 rounded-full flex items-center justify-center mx-auto text-muted-foreground/50">
            <RefreshCw size={20} className="animate-spin text-muted-foreground/40" />
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