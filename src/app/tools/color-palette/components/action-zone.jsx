// src/app/tools/color-palette/components/action-zone.jsx

"use client";
import { useRef } from "react";
import { Upload, RefreshCw, Palette, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ActionZone({ image, setImage, loading, onProcess }) {
  const fileInputRef = useRef(null);

  const handleUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 5MB Limit Validation (5 * 1024 * 1024 bytes)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size exceeds 5MB. Please upload a smaller image.");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    // Supported formats check
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload a valid image file (PNG, JPG, WEBP).");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);

    // Reset input value so user can upload the same file again if reset
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
      {/* Upload/Preview Zone */}
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
          accept="image/png, image/jpeg, image/webp"
        />

        {image ? (
          <div className="relative w-full h-full">
            <img
              src={image}
              className="h-full w-full object-cover rounded-2xl"
              alt="Uploaded preview"
            />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleReset();
              }}
              className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-md text-foreground rounded-full shadow-lg hover:bg-destructive hover:text-destructive-foreground transition-all"
              aria-label="Remove image"
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
              <span className="text-base font-bold text-foreground block">Upload Image</span>
              <span className="text-xs text-muted-foreground mt-1 block">to extract color palette</span>
            </div>
            <p className="text-[10px] text-muted-foreground/60 font-bold tracking-tighter">
              JPG, PNG or WEBP (Max 5MB)
            </p>
          </div>
        )}
      </div>

      {/* Buttons Section */}
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
          className="h-14 col-span-2 rounded-2xl bg-primary text-primary-foreground shadow-xl hover:opacity-90 transition-all font-bold text-base"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <RefreshCw className="animate-spin" size={20} /> Processing...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Palette size={20} /> Extract Palette
            </span>
          )}
        </Button>
      </div>
    </div>
  );
}