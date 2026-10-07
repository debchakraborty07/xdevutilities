// src/app/tools/safe-zone-checker/components/action-zone.jsx

"use client";

import { useRef } from "react";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { toast } from "sonner";

export default function ActionZone({ image, setImage }) {
  const fileInputRef = useRef(null);

  const handleUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please upload a valid image file (PNG, JPG, WEBP).");
      e.target.value = "";
      return;
    }

    // 10MB সাইজ গার্ড
    if (file.size > 10 * 1024 * 1024) {
      toast.error("Image file size exceeds 10MB limit. Please upload a smaller image.");
      e.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);

    // ইনপুট ক্যাশ রিসেট
    e.target.value = "";
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-6">
      <div
        onClick={() => !image && fileInputRef.current?.click()}
        className={`aspect-video rounded-[32px] border-2 border-dashed transition-all flex flex-col items-center justify-center p-6 relative group ${image
            ? "border-emerald-500/30 bg-emerald-500/5 text-foreground"
            : "border-border bg-card text-card-foreground hover:border-muted-foreground/40 cursor-pointer shadow-sm"
          }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={handleUpload}
          accept="image/*"
        />

        {image ? (
          <div className="relative w-full h-full flex items-center justify-center">
            <img src={image} className="max-h-full max-w-full rounded-xl shadow-lg object-contain" alt="Uploaded banner preview" />
            <button
              type="button"
              onClick={handleRemove}
              className="absolute top-2 right-2 p-2 bg-background/90 backdrop-blur-md rounded-full shadow-md text-muted-foreground hover:text-destructive hover:scale-105 transition-all border border-border"
              title="Remove image"
              aria-label="Remove image"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <div className="text-center space-y-4 pointer-events-none">
            <div className="w-14 h-14 bg-muted text-muted-foreground border border-border shadow-sm rounded-2xl flex items-center justify-center mx-auto transition-transform group-hover:scale-105">
              <Upload size={24} />
            </div>
            <div>
              <span className="text-base font-semibold text-foreground dark:text-slate-100 block">
                Click to upload banner or thumbnail
              </span>
              <p className="text-xs text-muted-foreground mt-1">Recommended: High resolution PNG, JPG, or WEBP (Max 10MB)</p>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-blue-500/5 border border-blue-500/10 rounded-3xl flex gap-4 items-start">
        <ImageIcon className="text-blue-500 shrink-0 mt-1" size={20} />
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
          <strong>Pro Tip:</strong> Place your most critical brand content (logos, CTAs, and headline text) inside the <b>Green Safe Zone</b> to ensure complete visibility across both mobile feeds and wide desktop monitors.
        </p>
      </div>
    </div>
  );
}