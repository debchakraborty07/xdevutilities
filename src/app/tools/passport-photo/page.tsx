// src/app/tools/passport-photo/page.tsx

"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import ActionZone from "./components/action-zone";
import ResultPreview from "./components/result-preview";
import UsageGuide from "./components/usage-guide";
import FAQSection from "./components/faq-section";
import RelatedSidebar from "@/components/shared/related-sidebar";
import SaveToolButton from "@/components/shared/save-tool-button";

export default function PassportPhotoPage() {
  const [image, setImage] = useState<string | null>(null);
  const [processed, setProcessed] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const processImage = async () => {
    if (!image) return toast.error("Please upload a photo first");
    
    setLoading(true);
    const toastId = toast.loading("Generating your professional passport photo...");

    try {
      // এপিআই ইউআরএল-এ স্লাশ (/) নেই তা নিশ্চিত করা হয়েছে
      const response = await fetch("https://passport-photo-api-dxrdhrudba-uc.a.run.app", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setProcessed(data.image);
        toast.success("Photo generated successfully!", { id: toastId });
      } else {
        // এন্টারপ্রাইজ এরর মেসেজ হ্যান্ডলিং
        toast.error(data.error || "Processing failed", { id: toastId });
      }
    } catch (err) {
      toast.error("Network error. Please check your connection.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-[1400px] text-foreground bg-background">
      <div className="mb-12">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-foreground dark:hover:text-slate-100 transition-colors mb-6 text-sm font-medium">
          <ArrowLeft size={16} /> Back to tools
        </Link>

        <div className="flex flex-wrap items-center gap-10 mb-4"> 
          <h1 className="text-4xl font-semibold tracking-tight">Passport Photo Maker</h1>
          <div className="pt-1">
            <SaveToolButton toolId="passport-photo" />
          </div>
        </div>

        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          Create compliant digital passport photos in seconds. Optimized for online applications and visa portals worldwide.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start">
        <div className="flex-1 w-full min-w-0">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 items-start">
            <ActionZone image={image} setImage={setImage} loading={loading} onProcess={processImage} />
            <ResultPreview processed={processed} />
          </section>

          <div className="max-w-4xl space-y-24 border-t border-slate-100 dark:border-slate-800 pt-24">
            <UsageGuide />
            <FAQSection />
          </div>
        </div>

        <aside className="hidden lg:block w-[300px] xl:w-[350px] shrink-0 sticky top-28">
          <RelatedSidebar currentToolId="passport-photo" category="image" />
        </aside>
      </div>
    </div>
  );
}