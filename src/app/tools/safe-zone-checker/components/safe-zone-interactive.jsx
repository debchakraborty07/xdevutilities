// src/app/tools/safe-zone-checker/components/safe-zone-interactive.jsx

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
  const [mode, setMode] = useState("banner");
  const [image, setImage] = useState(null);

  const handlePlatformChange = (slug) => {
    const platform = PLATFORMS.find((p) => p.slug === slug);
    if (platform) setSelectedPlatform(platform);
  };

  return (
    <>
      {/* ১. কন্ট্রোল প্যানেল (Platform & Mode Selector) */}
      <div className="flex flex-wrap gap-4 mb-10 items-center">
        {/* Banner vs Profile Mode Switcher */}
        <div className="flex p-1 rounded-2xl bg-muted/70 border border-border">
          <button
            type="button"
            onClick={() => setMode("banner")}
            className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${mode === "banner"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
              }`}
          >
            <Layout size={14} /> Banner
          </button>
          <button
            type="button"
            onClick={() => setMode("profile")}
            className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${mode === "profile"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
              }`}
          >
            <UserCircle size={14} /> Profile
          </button>
        </div>

        {/* Platform Selector Dropdown */}
        <Select value={selectedPlatform.slug} onValueChange={handlePlatformChange}>
          <SelectTrigger className="w-[180px] h-11 rounded-2xl bg-card text-card-foreground border-border font-medium text-sm focus:ring-2 focus:ring-primary/20 shadow-sm">
            <SelectValue placeholder="Select Platform" />
          </SelectTrigger>
          <SelectContent className="rounded-2xl border-border shadow-xl">
            {PLATFORMS.map((p) => (
              <SelectItem key={p.slug} value={p.slug} className="rounded-lg py-2.5 cursor-pointer">
                {p.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* ২. অ্যাকশন এবং প্রিভিউ জোন */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 items-start">
        <ActionZone image={image} setImage={setImage} />
        <VisualPreview image={image} platform={selectedPlatform} mode={mode} />
      </section>
    </>
  );
}