// src/app/tools/color-palette/components/color-palette-interactive.jsx

"use client";

import { useState } from "react";
import { toast } from "sonner";
import ActionZone from "./action-zone";
import ResultPreview from "./result-preview";

export default function ColorPaletteInteractive() {
  const [image, setImage] = useState(null);
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(false);

  // ছবি পরিবর্তন বা রিসেট হলে আগের প্যালেটও রিসেট করে দেওয়ার নিরাপদ হ্যান্ডলার
  const handleImageChange = (newImage) => {
    setImage(newImage);
    if (!newImage) {
      setColors([]);
    }
  };

  const processExtraction = async () => {
    if (!image) {
      toast.error("Please upload an image first");
      return;
    }

    // ডাবল ক্লিক বা রিকোয়েস্ট স্প্যামিং প্রতিরোধ
    if (loading) return;

    setLoading(true);
    const toastId = toast.loading("Analyzing image colors...");

    try {
      const res = await fetch("https://color-palette-api-dxrdhrudba-uc.a.run.app", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: image }),
      });

      if (!res.ok) {
        throw new Error(`Server responded with status ${res.status}`);
      }

      const data = await res.json();

      if (data.success && Array.isArray(data.colors)) {
        setColors(data.colors);
        toast.success("Palette extracted successfully!", { id: toastId });
      } else {
        toast.error(data.error || "Failed to analyze image colors", { id: toastId });
      }
    } catch (err) {
      toast.error("Could not connect to analysis service. Please try again.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 items-start">
      <ActionZone
        image={image}
        setImage={handleImageChange}
        loading={loading}
        onProcess={processExtraction}
      />
      <ResultPreview colors={colors} />
    </section>
  );
}