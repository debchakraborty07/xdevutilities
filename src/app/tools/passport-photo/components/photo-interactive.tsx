// src/app/tools/passport-photo/components/photo-interactive.tsx

"use client";

import { useState } from "react";
import { toast } from "sonner";
import ActionZone from "./action-zone";
import ResultPreview from "./result-preview";

export default function PhotoInteractive() {
  const [image, setImage] = useState<string | null>(null);
  const [processed, setProcessed] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const processImage = async () => {
    if (!image) return toast.error("Please upload a photo first");
    
    setLoading(true);
    const toastId = toast.loading("Generating your professional passport photo...");

    try {
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
        toast.error(data.error || "Processing failed", { id: toastId });
      }
    } catch (err) {
      toast.error("Network error. Please check your connection.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 items-start">
      <ActionZone 
        image={image} 
        setImage={setImage} 
        loading={loading} 
        onProcess={processImage} 
      />
      <ResultPreview processed={processed} />
    </section>
  );
}