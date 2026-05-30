// src/app/tools/safe-zone-checker/components/action-zone.tsx

"use client";
import { Upload, RefreshCw, Image as ImageIcon } from "lucide-react";

export default function ActionZone({ image, setImage }: any) {
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <div className={`aspect-video rounded-[32px] border-2 border-dashed transition-all flex flex-col items-center justify-center p-6 
        ${image ? "border-emerald-200 bg-emerald-50/10" : "border-slate-200 dark:border-slate-800 text-foreground bg-background"}
      `}>
        {image ? (
          <div className="relative w-full h-full flex items-center justify-center">
             <img src={image} className="max-h-full max-w-full rounded-xl shadow-lg" alt="upload" />
             <button 
              onClick={() => setImage(null)}
              className="absolute top-2 right-2 p-2 text-foreground bg-background rounded-full shadow-md text-rose-500 hover:scale-110 transition-all"
             >
               <RefreshCw size={16} />
             </button>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div className="w-14 h-14 bg-white dark:bg-slate-800 shadow-sm rounded-2xl flex items-center justify-center mx-auto text-slate-400">
              <Upload size={24} />
            </div>
            <label className="cursor-pointer block">
              <span className="text-base font-semibold text-foreground dark:text-slate-100 block">Click to upload image</span>
              <input type="file" className="hidden" onChange={handleUpload} accept="image/*" />
              <p className="text-xs text-muted-foreground mt-2">Recommended: High resolution PNG/JPG</p>
            </label>
          </div>
        )}
      </div>
      
      <div className="p-6 bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-3xl flex gap-4 items-start">
         <ImageIcon className="text-blue-500 shrink-0 mt-1" size={20} />
         <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
           <strong>Pro Tip:</strong> Place your most important content (logos or text) inside the <b>Green Zone</b> to ensure visibility on both mobile and desktop.
         </p>
      </div>
    </div>
  );
}