// src/app/tools/safe-zone-checker/page.tsx

"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Layout, UserCircle } from "lucide-react";
import { PLATFORMS } from "@/lib/safe-zone-config";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

import ActionZone from "./components/action-zone";
import VisualPreview from "./components/visual-preview";
import UsageGuide from "./components/usage-guide";
import FAQSection from "./components/faq-section";
import RelatedSidebar from "@/components/shared/related-sidebar";
import SaveToolButton from "@/components/shared/save-tool-button";

export default function SafeZonePage() {
  const [selectedPlatform, setSelectedPlatform] = useState(PLATFORMS[0]);
  const [mode, setMode] = useState<"banner" | "profile">("banner");
  const [image, setImage] = useState<string | null>(null);

  const handlePlatformChange = (slug: string) => {
    const platform = PLATFORMS.find((p) => p.slug === slug);
    if (platform) setSelectedPlatform(platform);
  };

  return (
    // কন্টেইনার সাইজ বাড়িয়ে 7xl করা হয়েছে যাতে সাইডবার সুন্দরভাবে ধরে
    <div className="container mx-auto px-6 py-12 max-w-[1400px]">
      <div className="mb-12">
        <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-foreground dark:hover:text-slate-100 transition-colors mb-6 text-sm font-medium">
          <ArrowLeft size={16} /> Back to tools
        </Link>

        <div className="flex flex-wrap items-center gap-10 mb-4"> 
          <h1 className="text-4xl font-semibold text-foreground dark:text-slate-100">
            Social Media Safe Zone
          </h1>
          
          {/* Bookmark Button */}
          <div className="pt-1">
            <SaveToolButton toolId="safe-zone-checker" />
          </div>
        </div>

         
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          Verify your images against mobile and desktop safe zones. Avoid getting your important content cropped by UI elements.
        </p>
      </div>

          

      {/* মেইন লেআউট ফ্লেক্সবক্স দিয়ে ভাগ করা হয়েছে */}
      <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start">
        
        {/* বাম দিকের অংশ: মেইন টুল + গাইড + FAQ */}
        <div className="flex-1 w-full lg:max-w-[calc(100%-350px)]">
          
          {/* ১. কন্ট্রোল প্যানেল (Platform & Mode Selector) */}
          <div className="flex flex-wrap gap-4 mb-10 items-center">
            <div className="flex text-foreground bg-background p-1 rounded-2xl border border-slate-200/50 dark:border-slate-800">
              <button 
                onClick={() => setMode("banner")}
                className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${mode === "banner" ? "text-foreground bg-background shadow:sm" : "text-foreground bg-background"}`}
              >
                <Layout size={14} /> Banner
              </button>
              <button 
                onClick={() => setMode("profile")}
                className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${mode === "profile" ? "text-foreground bg-background shadow:sm" : "text-foreground bg-background"}`}
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

          {/* ৩. ইউসেজ গাইড এবং FAQ সেকশন */}
          <div className="max-w-4xl space-y-24 border-t border-slate-100 dark:border-slate-800 pt-24">
            <UsageGuide />
            <FAQSection />
          </div>
        </div>

        {/* ডান দিকের অংশ: রিলেটেড টুলস সাইডবার (Sticky) */}
        <div className="hidden lg:block w-[300px] xl:w-[350px] shrink-0 sticky top-28">
          <RelatedSidebar currentToolId="safe-zone-checker" category="image" />
        </div>

      </div>
    </div>
  );
}