// src/app/tools/safe-zone-checker/components/visual-preview.jsx

"use client";

import { Info, Download, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VisualPreview({ image, platform, mode }) {
  const isProfile = mode === "profile";
  const config = isProfile ? platform?.profile : platform?.banner;
  const aspectRatio = !isProfile && config?.width ? config.width / config.height : 1;

  // --- স্মার্ট ডাউনলোড লজিক (Canvas Rendering) ---
  const handleDownload = () => {
    if (!image || !config) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      // ১. ক্যানভাস সাইজ সেট করা
      canvas.width = config.width || 1200;
      canvas.height = config.height || 630;

      if (!ctx) return;

      // ২. মেইন ছবি ড্র করা
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // ৩. গাইড এবং ওভারলে ড্র করা
      if (!isProfile && platform?.banner) {
        ctx.strokeStyle = "#10b981"; // Emerald 500
        ctx.lineWidth = 8;

        // সেফ জোন ক্যালকুলেশন
        const sw = platform.banner.safeWidth || canvas.width;
        const sh = platform.banner.safeHeight || canvas.height;
        const sx = (canvas.width - sw) / 2;
        const sy = (canvas.height - sh) / 2;

        ctx.strokeRect(sx, sy, sw, sh);
        ctx.fillStyle = "rgba(16, 185, 129, 0.1)";
        ctx.fillRect(sx, sy, sw, sh);

        // ডেঞ্জার জোন ড্র করা (Safe array check)
        const dangerZones = platform.banner.mobileDangerZones || [];
        dangerZones.forEach((zone) => {
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
      link.download = `safe-zone-guide-${platform?.slug || "social"}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
    img.src = image;
  };

  if (!image) {
    return (
      <div className="h-full min-h-[400px] border-2 border-dashed border-border bg-card text-card-foreground rounded-[40px] flex items-center justify-center p-12 text-center shadow-sm">
        <div className="space-y-4 text-muted-foreground">
          <Info size={32} className="mx-auto opacity-40" />
          <p className="text-sm italic font-medium">
            Awaiting image for {platform?.name || "Platform"} preview...
          </p>
        </div>
      </div>
    );
  }

  const dangerZones = platform?.banner?.mobileDangerZones || [];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="relative bg-card text-card-foreground border border-border rounded-[40px] p-6 sm:p-10 md:p-12 overflow-hidden flex flex-col items-center shadow-sm">
        <div className="w-full flex justify-between items-center mb-8">
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
            {platform?.name} Preview
          </span>
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
          </div>
        </div>

        {/* প্রিভিউ কন্টেইনার */}
        <div
          className={`relative shadow-2xl overflow-hidden transition-all duration-500 bg-background ${isProfile ? "rounded-full aspect-square w-64 md:w-80" : "w-full rounded-2xl"
            }`}
          style={!isProfile ? { aspectRatio: `${aspectRatio}` } : {}}
        >
          <img src={image} className="absolute inset-0 w-full h-full object-cover" alt="Uploaded overlay preview" />

          {/* সেফ জোন ওভারলে (CSS ভিউ) */}
          {!isProfile && platform?.banner ? (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="border-2 border-emerald-500 bg-emerald-500/10 shadow-[0_0_0_1000px_rgba(0,0,0,0.6)]"
                style={{
                  width: `${(platform.banner.safeWidth / platform.banner.width) * 100}%`,
                  height: `${(platform.banner.safeHeight / platform.banner.height) * 100}%`
                }}
              >
                <div className="bg-emerald-500 text-white text-[9px] px-2 py-0.5 absolute top-0 left-0 font-bold uppercase tracking-wider rounded-br">
                  Safe Zone
                </div>
              </div>
              {dangerZones.map((zone, i) => (
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
            <div className="absolute inset-0 border-4 border-emerald-500/40 rounded-full pointer-events-none shadow-[0_0_0_1000px_rgba(0,0,0,0.6)]" />
          )}
        </div>

        {/* ডাউনলোড বাটন (লাইট ও ডার্ক উভয় মোডে দৃশ্যমান) */}
        <Button
          type="button"
          onClick={handleDownload}
          className="mt-10 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 rounded-2xl h-12 px-8 shadow-xl font-bold transition-all active:scale-95"
        >
          <Download size={18} className="mr-2" /> Download Overlay Guide
        </Button>
      </div>

      {/* হেল্পার কার্ড */}
      <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl flex gap-4 items-start shadow-sm">
        <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
        <p className="text-xs text-emerald-800 dark:text-emerald-300 leading-relaxed font-medium">
          <strong>How to use:</strong> Download the guide and use it as an overlay in your design tool (Canva/Photoshop) to align your logo and headline text perfectly within cross-platform safe zones.
        </p>
      </div>
    </div>
  );
}