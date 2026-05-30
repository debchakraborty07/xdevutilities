// src/app/tools/passport-photo/components/result-preview.tsx

"use client";
import { Download, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResultPreview({ processed }: { processed: string | null }) {
  return (
    <div className="bg-background text-foreground rounded-[32px] p-10 flex flex-col items-center justify-center relative min-h-[400px]">
      <div className="absolute top-6 left-6 text-[10px] font-semibold text-muted-foreground">
        Preview dashboard
      </div>
      
      {processed ? (
        <div className="space-y-8 text-center animate-in fade-in zoom-in duration-300">
          <img 
            src={processed} 
            className="w-[300px] h-[300px] shadow-2xl border-[12px] border-white rounded-sm mx-auto" 
            alt="processed result" 
          />
          <Button asChild className="w-full h-12 rounded-xl bg-background text-foreground transition-all">
            <a href={processed} download="passport-photo-xdev.jpg">
              <Download className="mr-2" size={18} /> Download high-res jpeg
            </a>
          </Button>
        </div>
      ) : (
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border border-slate-700 rounded-full flex items-center justify-center mx-auto text-slate-700">
            <RefreshCw size={18} />
          </div>
          <p className="text-sm text-muted-foreground font-medium">Awaiting image processing...</p>
        </div>
      )}
    </div>
  );
}