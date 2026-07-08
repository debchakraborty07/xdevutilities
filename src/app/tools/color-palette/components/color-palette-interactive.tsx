// src/app/tools/color-palette/components/color-palette-interactive.tsx

"use client";

import { useState } from "react";
import { toast } from "sonner";
import ActionZone from "./action-zone";
import ResultPreview from "./result-preview";

export default function ColorPaletteInteractive() {
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
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 items-start">
      <ActionZone 
        image={image} 
        setImage={setImage} 
        loading={loading} 
        onProcess={processExtraction} 
      />
      <ResultPreview colors={colors} />
    </section>
  );
}