// src/app/tools/passport-photo/components/action-zone.tsx

"use client";
import { Upload, RefreshCw, Camera, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ActionZone({ image, setImage, loading, onProcess }: any) {
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      {/* Photo Upload/Preview Zone */}
      <div className="aspect-square rounded-[32px] border-2 border-dashed border-border flex flex-col items-center justify-center p-4 bg-card text-card-foreground transition-all hover:border-muted-foreground/50 relative overflow-hidden group">
        {image ? (
          <div className="relative w-full h-full">
            <img src={image} className="h-full w-full object-contain rounded-2xl" alt="preview" />
            <button 
              onClick={() => setImage(null)}
              className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-md text-foreground rounded-full shadow-lg hover:bg-destructive hover:text-destructive-foreground transition-all"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <div className="text-center space-y-4 p-8">
            <div className="w-16 h-16 bg-background text-muted-foreground shadow-sm rounded-2xl flex items-center justify-center mx-auto border border-border group-hover:scale-110 transition-transform">
              <Upload size={28} />
            </div>
            <label className="cursor-pointer block">
              <span className="text-base font-bold text-foreground block">Upload Photo</span>
              <input type="file" className="hidden" onChange={handleUpload} accept="image/*" />
              <span className="text-xs text-muted-foreground mt-1 block">to generate passport size</span>
            </label>
            <p className="text-[10px] text-muted-foreground/60  font-bold">JPEG, PNG (Max 5MB)</p>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-3">
        <Button 
          onClick={() => setImage(null)} 
          variant="outline" 
          className="h-14 rounded-2xl border-border hover:bg-secondary text-foreground font-semibold"
        >
          Reset
        </Button>
        <Button 
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