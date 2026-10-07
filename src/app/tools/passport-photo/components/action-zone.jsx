// src/app/tools/passport-photo/components/action-zone.jsx

"use client";

import { useRef } from "react";
import { Upload, RefreshCw, Camera, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ActionZone({ image, setImage, loading, onProcess }) {
  const fileInputRef = useRef(null);

  const handleUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // ৫MB সাইজ চেক
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Photo size exceeds 5MB. Please upload a smaller image.");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    // ইমেজ ফরম্যাট চেক
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload a valid image file (JPEG, PNG, WEBP).");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);

    // ইনপুট রিসেট
    e.target.value = "";
  };

  const handleReset = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-6">
      {/* Photo Upload/Preview Zone */}
      <div
        onClick={() => !image && fileInputRef.current?.click()}
        className={`aspect-square rounded-[32px] border-2 border-dashed border-border flex flex-col items-center justify-center p-4 bg-card text-card-foreground transition-all relative overflow-hidden group ${!image ? "cursor-pointer hover:border-muted-foreground/50 hover:bg-muted/20" : ""
          }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={handleUpload}
          accept="image/jpeg,image/png,image/webp"
        />

        {image ? (
          <div className="relative w-full h-full">
            <img
              src={image}
              className="h-full w-full object-contain rounded-2xl"
              alt="Uploaded portrait preview"
            />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleReset();
              }}
              className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-md text-foreground rounded-full shadow-lg hover:bg-destructive hover:text-destructive-foreground transition-all"
              aria-label="Remove photo"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <div className="text-center space-y-4 p-8 pointer-events-none">
            <div className="w-16 h-16 bg-background text-muted-foreground shadow-sm rounded-2xl flex items-center justify-center mx-auto border border-border group-hover:scale-110 transition-transform">
              <Upload size={28} />
            </div>
            <div>
              <span className="text-base font-bold text-foreground block">Upload Photo</span>
              <span className="text-xs text-muted-foreground mt-1 block">to generate passport size</span>
            </div>
            <p className="text-[10px] text-muted-foreground/60 font-bold">JPEG, PNG (Max 5MB)</p>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-3">
        <Button
          type="button"
          onClick={handleReset}
          variant="outline"
          className="h-14 rounded-2xl border-border hover:bg-secondary text-foreground font-semibold"
        >
          Reset
        </Button>
        <Button
          type="button"
          onClick={onProcess}
          disabled={!image || loading}
          className="h-14 col-span-2 rounded-2xl bg-primary text-primary-foreground shadow-xl hover:opacity-90 transition-all font-semibold"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <RefreshCw className="animate-spin" size={20} /> Processing...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Camera size={20} /> Generate Photo
            </span>
          )}
        </Button>
      </div>
    </div>
  );
}