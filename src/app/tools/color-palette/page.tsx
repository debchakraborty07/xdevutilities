// src/app/tools/color-palette/page.tsx

"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import RelatedSidebar from "@/components/shared/related-sidebar";
import SaveToolButton from "@/components/shared/save-tool-button";
import ActionZone from "./components/action-zone";
import ResultPreview from "./components/result-preview";
import UsageGuide from "./components/usage-guide";
import FAQSection from "./components/faq-section";

export default function ColorPalettePage() {
  const [image, setImage] = useState<string | null>(null);
  const [colors, setColors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const processExtraction = async () => {
    if (!image) return toast.error("Please upload an image first");
    
    setLoading(true);
    const toastId = toast.loading("Analyzing image colors...");
    
    try {
      const res = await fetch("https://color-palette-api-dxrdhrudba-uc.a.run.app", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: image }),
      });
      
      const data = await res.json();
      
      if (data.success) {
        setColors(data.colors);
        toast.success("Palette extracted!", { id: toastId });
      } else {
        toast.error(data.error || "Analysis failed", { id: toastId });
      }
    } catch (err) {
      toast.error("Could not connect to AI service", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-[1400px] text-foreground bg-background">
      <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-foreground dark:hover:text-slate-100 transition-colors mb-8 text-sm font-medium">
        <ArrowLeft size={16} /> Back to tools
      </Link>
      
      <div className="max-w-2xl mb-12">
        <div className="flex flex-wrap items-center gap-10 mb-4"> 
          <h1 className="text-4xl font-semibold tracking-tight">AI Color Palette Extractor</h1>
          <SaveToolButton toolId="color-palette" />
        </div>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          Upload any image and let our AI extract its professional color essence. Get instant hex codes for your next project.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start">
        <div className="flex-1 w-full min-w-0">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 items-start">
            <ActionZone image={image} setImage={setImage} loading={loading} onProcess={processExtraction} />
            <ResultPreview colors={colors} />
          </section>
          <div className="max-w-4xl space-y-24 border-t border-slate-100 dark:border-slate-800 pt-24">
            <UsageGuide />
            <FAQSection />
          </div>
        </div>
        <aside className="hidden lg:block w-[300px] xl:w-[350px] shrink-0 sticky top-28">
          <RelatedSidebar currentToolId="color-palette" category="image" />
        </aside>
      </div>
    </div>
  );
}