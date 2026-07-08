// src/app/tools/safe-zone-checker/components/safe-zone-interactive.tsx

"use client";

import { useState } from "react";
import { Layout, UserCircle } from "lucide-react";
import { PLATFORMS } from "@/lib/safe-zone-config";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

import ActionZone from "./action-zone";
import VisualPreview from "./visual-preview";

export default function SafeZoneInteractive() {
  const [selectedPlatform, setSelectedPlatform] = useState(PLATFORMS[0]);
  const [mode, setMode] = useState<"banner" | "profile">("banner");
  const [image, setImage] = useState<string | null>(null);

  const handlePlatformChange = (slug: string) => {
    const platform = PLATFORMS.find((p) => p.slug === slug);
    if (platform) setSelectedPlatform(platform);
  };

  return (
    <>
      {/* ১. কন্ট্রোল প্যানেল (Platform & Mode Selector) */}
      <div className="flex flex-wrap gap-4 mb-10 items-center">
        <div className="flex text-foreground bg-background p-1 rounded-2xl border border-slate-200/50 dark:border-slate-800">
          <button 
            type="button"
            onClick={() => setMode("banner")}
            className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
              mode === "banner" 
                ? "text-foreground bg-background shadow-sm" 
                : "text-foreground bg-background"
            }`}
          >
            <Layout size={14} /> Banner
          </button>
          <button 
            type="button"
            onClick={() => setMode("profile")}
            className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
              mode === "profile" 
                ? "text-foreground bg-background shadow-sm" 
                : "text-foreground bg-background"
            }`}
          >
            <UserCircle size={14} /> Profile
          </button>
        </div>

        <Select defaultValue={selectedPlatform.slug} onValueChange={handlePlatformChange}>
          <SelectTrigger className="w-[180px] h-11 rounded-2xl text-foreground bg-background border-slate-200 dark:border-slate-800 font-medium text-sm focus:ring-slate-100 dark:focus:ring-slate-800">
            <SelectValue placeholder="Select Platform" />
          </SelectTrigger>
          <SelectContent className="rounded-2xl border-slate-100 dark:border-slate-800 shadow-xl">
            {PLATFORMS.map((p) => (
              <SelectItem key={p.slug} value={p.slug} className="rounded-lg py-2.5 cursor-pointer">
                {p.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* ২. অ্যাকশন এবং প্রিভিউ জোন */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 items-start text-foreground bg-background">
        <ActionZone image={image} setImage={setImage} />
        <VisualPreview image={image} platform={selectedPlatform} mode={mode} />
      </section>
    </>
  );
}