// src/app/tools/safe-zone-checker/components/visual-preview.tsx

"use client";
import { Info, Download, CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export default function VisualPreview({ image, platform, mode }: any) {
  const isProfile = mode === "profile";
  const config = isProfile ? platform.profile : platform.banner;
  const aspectRatio = !isProfile && config.width !== 0 ? config.width / config.height : 1;
  const containerRef = useRef<HTMLDivElement>(null);

  // --- স্মার্ট ডাউনলোড লজিক (Canvas Rendering) ---
  const handleDownload = () => {
    if (!image) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      // ১. ক্যানভাস সাইজ সেট করা (অরিজিনাল প্ল্যাটফর্ম ডাইমেনশন অনুযায়ী)
      canvas.width = config.width;
      canvas.height = config.height;

      if (!ctx) return;

      // ২. মেইন ছবি ড্র করা
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // ৩. গাইড এবং ওভারলে ড্র করা
      if (!isProfile) {
        // ডার্ক মাস্ক (অপশনালি দিতে পারো, আপাতত আমরা শুধু বর্ডার দিচ্ছি)
        ctx.strokeStyle = "#10b981"; // Emerald 500
        ctx.lineWidth = 8;
        
        // সেফ জোন ক্যালকুলেশন
        const sw = platform.banner.safeWidth;
        const sh = platform.banner.safeHeight;
        const sx = (canvas.width - sw) / 2;
        const sy = (canvas.height - sh) / 2;

        ctx.strokeRect(sx, sy, sw, sh);
        ctx.fillStyle = "rgba(16, 185, 129, 0.1)";
        ctx.fillRect(sx, sy, sw, sh);

        // ডেঞ্জার জোন ড্র করা
        platform.banner.mobileDangerZones.forEach((zone: any) => {
          ctx.fillStyle = "rgba(244, 63, 94, 0.5)"; // Rose 500
          const zx = zone.left ? (zone.left / platform.banner.width) * canvas.width : 0;
          const zy = zone.bottom !== undefined ? canvas.height - ((zone.height / platform.banner.height) * canvas.height) : 0;
          const zw = (zone.width / platform.banner.width) * canvas.width;
          const zh = (zone.height / platform.banner.height) * canvas.height;
          ctx.fillRect(zx, zy, zw, zh);
        });
      } else {
        // প্রোফাইল সার্কেল ড্র করা
        ctx.strokeStyle = "#10b981";
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2 - 5, 0, Math.PI * 2);
        ctx.stroke();
      }

      // ৪. ইমেজ ডাউনলোড ট্রিগার
      const link = document.createElement("a");
      link.download = `safe-zone-guide-${platform.slug}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
    img.src = image;
  };

  if (!image) {
    return (
      <div className="h-full min-h-[400px] text-foreground bg-background rounded-[40px] flex items-center justify-center p-12 text-center">
        <div className="space-y-4 text-slate-600">
          <Info size={32} className="mx-auto opacity-20" />
          <p className="text-sm italic">Awaiting image for {platform.name} preview...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="relative bg-slate-100 dark:bg-slate-900 rounded-[40px] p-8 md:p-12 overflow-hidden flex flex-col items-center">
        <div className="w-full flex justify-between items-center mb-8">
           <span className="text-[10px] font-semibold text-slate-400">{platform.name} Preview</span>
           <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
           </div>
        </div>

        {/* প্রিভিউ কন্টেইনার */}
        <div 
          className={`relative shadow-2xl overflow-hidden transition-all duration-500 bg-white
            ${isProfile ? "rounded-full aspect-square w-64 md:w-80" : "w-full rounded-xl"}
          `}
          style={!isProfile ? { aspectRatio: `${aspectRatio}` } : {}}
        >
          <img src={image} className="absolute inset-0 w-full h-full object-cover" alt="preview" />

          {/* সেফ জোন ওভারলে (CSS ভিউ) */}
          {!isProfile ? (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div 
                className="border-2 border-emerald-500 bg-emerald-500/10 shadow-[0_0_0_1000px_rgba(0,0,0,0.6)]"
                style={{ 
                  width: `${(platform.banner.safeWidth / platform.banner.width) * 100}%`,
                  height: `${(platform.banner.safeHeight / platform.banner.height) * 100}%` 
                }}
              >
                 <div className="bg-emerald-500 text-white text-[8px] px-1.5 py-0.5 absolute top-0 left-0 font-semibold">Safe</div>
              </div>
              {platform.banner.mobileDangerZones.map((zone: any, i: number) => (
                <div 
                  key={i}
                  className="absolute bg-rose-500/40 border border-rose-500/60"
                  style={{
                    left: zone.left ? `${(zone.left / platform.banner.width) * 100}%` : 'auto',
                    bottom: zone.bottom !== undefined ? `${(zone.bottom / platform.banner.height) * 100}%` : 'auto',
                    width: `${(zone.width / platform.banner.width) * 100}%`,
                    height: `${(zone.height / platform.banner.height) * 100}%`
                  }}
                />
              ))}
            </div>
          ) : (
             <div className="absolute inset-0 border-4 border-emerald-500/30 rounded-full pointer-events-none shadow-[0_0_0_1000px_rgba(255,255,255,0.8)] dark:shadow-[0_0_0_1000px_rgba(15,23,42,0.8)]" />
          )}
        </div>

        {/* ডাউনলোড বাটন */}
        <Button 
          onClick={handleDownload}
          className="mt-10 bg-white text-foreground hover:bg-slate-50 rounded-2xl h-12 px-8 shadow-xl font-bold transition-all active:scale-95"
        >
          <Download size={18} className="mr-2" /> Click and download
        </Button>
      </div>

      {/* হেল্পার কার্ড */}
      <div className="p-6 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-3xl flex gap-4 items-start">
         <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
         <p className="text-xs text-emerald-800 dark:text-emerald-300 leading-relaxed">
           <strong>How to use:</strong> Download the guide and use it as an overlay in your design tool (Canva/Photoshop) to align your text perfectly.
         </p>
      </div>
    </div>
  );
}