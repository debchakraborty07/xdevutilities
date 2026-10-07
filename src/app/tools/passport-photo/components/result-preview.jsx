// src/app/tools/passport-photo/components/result-preview.jsx

"use client";

import { Download, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResultPreview({ processed, loading }) {
  const downloadSrc = processed
    ? (processed.startsWith("data:") ? processed : `data:image/jpeg;base64,${processed}`)
    : "";

  return (
    <div className="bg-card text-card-foreground border border-border rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center relative min-h-[440px] shadow-sm transition-all">
      <div className="absolute top-5 left-6 text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
        Preview Dashboard
      </div>

      {loading ? (
        // ১. লোডিং অবস্থা: কোনো স্পিনার নেই — হুবহু পাসপোর্ট ফ্রেমের মডার্ন Skeleton UI
        <div className="w-full max-w-[280px] space-y-5 text-center animate-in fade-in duration-300 pt-4">
          {/* Photo Frame Skeleton */}
          <div className="w-[240px] h-[280px] mx-auto rounded-2xl bg-muted/70 border border-border/80 animate-pulse flex flex-col items-center justify-center relative overflow-hidden">
            <div className="w-12 h-12 rounded-full bg-muted-foreground/10 mb-2" />
            <div className="w-24 h-2.5 rounded-full bg-muted-foreground/10" />
          </div>

          {/* Button Skeleton */}
          <div className="space-y-2 pt-2">
            <div className="w-full h-11 rounded-xl bg-muted/70 border border-border/60 animate-pulse" />
            <p className="text-[11px] text-muted-foreground font-medium animate-pulse">
              Formatting to official dimensions...
            </p>
          </div>
        </div>

      ) : processed ? (
        // ২. রেজাল্ট অবস্থা: প্রিমিয়াম ও মসৃণ ডাউনলোড বাটন
        <div className="w-full max-w-[280px] space-y-6 text-center animate-in fade-in zoom-in-95 duration-300 pt-4">
          {/* Passport Photo Canvas Frame */}
          <div className="p-2.5 bg-white dark:bg-slate-900 border border-border rounded-2xl shadow-lg inline-block mx-auto">
            <img
              src={downloadSrc}
              className="w-[230px] h-[270px] object-contain rounded-xl mx-auto bg-muted/20"
              alt="Processed passport photo"
            />
          </div>

          {/* Clean, Elegant Download Button */}
          <div className="space-y-2">
            <Button
              asChild
              className="w-full h-11 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-semibold shadow-sm transition-all active:scale-[0.99]"
            >
              <a
                href={downloadSrc}
                download="passport-photo-xdev.jpg"
                className="flex items-center justify-center gap-2 w-full h-full"
              >
                <Download size={16} className="shrink-0" />
                <span>Download Photo (High-Res)</span>
              </a>
            </Button>
            <p className="text-[11px] text-muted-foreground font-medium">
              Ready for official visa & digital ID upload
            </p>
          </div>
        </div>

      ) : (
        // ৩. আইডল অবস্থা: শান্ত মিনিমালিস্টিক স্টেট
        <div className="text-center space-y-3 py-10">
          <div className="w-12 h-12 bg-muted/60 border border-border rounded-2xl flex items-center justify-center mx-auto text-muted-foreground">
            <Camera size={22} className="opacity-70" />
          </div>
          <div className="space-y-1">
            <p className="text-sm text-foreground font-semibold">No photo generated yet</p>
            <p className="text-xs text-muted-foreground max-w-[230px] leading-relaxed mx-auto">
              Upload a clear portrait photo, then click Generate Photo.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}