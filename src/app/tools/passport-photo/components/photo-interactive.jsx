// src/app/tools/passport-photo/components/photo-interactive.jsx

"use client";

import { useState } from "react";
import { toast } from "sonner";
import ActionZone from "./action-zone";
import ResultPreview from "./result-preview";

export default function PhotoInteractive() {
  const [image, setImage] = useState(null);
  const [processed, setProcessed] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (newImage) => {
    setImage(newImage);
    if (!newImage) {
      setProcessed(null);
    }
  };

  const processImage = async () => {
    if (!image) {
      toast.error("Please upload a photo first");
      return;
    }

    if (loading) return;

    setLoading(true);
    const toastId = toast.loading("Analyzing face and generating passport photo...");

    try {
      const response = await fetch("https://passport-photo-api-dxrdhrudba-uc.a.run.app", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      const data = await response.json();
      console.log("Passport Photo API Output:", data);

      const rawOutput = data.image || data.result || data.photo || data.output || data.processed_image || (typeof data === "string" ? data : null);

      if (rawOutput) {
        const finalImage = rawOutput.startsWith("data:")
          ? rawOutput
          : `data:image/jpeg;base64,${rawOutput}`;

        setProcessed(finalImage);
        toast.success("Passport photo generated successfully!", { id: toastId });
      } else {
        toast.error(data.error || "No face detected. Please upload a clear human portrait photo.", { id: toastId });
      }
    } catch (err) {
      console.error("Processing error:", err);
      toast.error("Failed to process photo. Ensure the image has a visible human face.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 items-start">
      <ActionZone
        image={image}
        setImage={handleImageChange}
        loading={loading}
        onProcess={processImage}
      />
      <ResultPreview processed={processed} loading={loading} />
    </section>
  );
}