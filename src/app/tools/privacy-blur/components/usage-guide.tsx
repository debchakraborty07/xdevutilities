// src/app/tools/privacy-blur/components/usage-guide.tsx

import { MousePointer2, ShieldCheck, Eraser, Download } from "lucide-react";

export default function UsageGuide() {
  return (
    <div className="space-y-20">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground dark:text-slate-100">The Fastest Way to Redact Sensitive Data</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
          Whether it is a private email in a screenshot or a face in a public photo, our Privacy Blur tool allows you to mask sensitive information 
          instantly. Built for professionals and privacy-conscious users, it ensures that only what you want to show is shared.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-500">
            <MousePointer2 size={24} />
          </div>
          <h4 className="text-lg font-bold">Intuitive Drawing</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">Simply click and drag your mouse over any area to apply the mask. No complex software required.</p>
        </div>
        <div className="space-y-4">
          <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center text-emerald-500">
            <ShieldCheck size={24} />
          </div>
          <h4 className="text-lg font-bold">100% Client-Side</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">Your photos are processed inside your browser. We never upload your files to our servers, guaranteed.</p>
        </div>
        <div className="space-y-4">
          <div className="w-12 h-12 bg-rose-50 dark:bg-rose-900/30 rounded-2xl flex items-center justify-center text-rose-500">
            <Eraser size={24} />
          </div>
          <h4 className="text-lg font-bold">Dual Masking Modes</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">Choose between a professional 'Gaussian Blur' for aesthetics or a 'Solid Black' mask for total secrecy.</p>
        </div>
        <div className="space-y-4">
          <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center text-amber-500">
            <Download size={24} />
          </div>
          <h4 className="text-lg font-bold">High-Res Export</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">Download your redacted images in high-quality PNG format, ready to be shared on social media or docs.</p>
        </div>
      </div>
    </div>
  );
}