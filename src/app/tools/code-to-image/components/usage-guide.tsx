// src/app/tools/code-to-image/components/usage-guide.tsx

import { Zap, Share2, Sparkles, ShieldCheck } from "lucide-react";

export default function UsageGuide() {
  return (
    <div className="space-y-20">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground dark:text-slate-100">Level Up Your Code Sharing</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
          Sharing screenshots of code shouldn&apos;t look messy. Our Code to Image generator helps you create professional, 
          aesthetic snapshots of your snippets, making them perfect for technical blogs, Twitter (X), and LinkedIn.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <GuideItem 
          icon={<Zap className="text-amber-500" />}
          title="Instant High-Res Export"
          desc="Export your snippets in 2x resolution to ensure crystal clear text on Retina displays and social feeds."
        />
        <GuideItem 
          icon={<Sparkles className="text-blue-500" />}
          title="Custom Themes"
          desc="Choose from professional gradients and macOS-style window frames to give your code a premium feel."
        />
        <GuideItem 
          icon={<Share2 className="text-emerald-500" />}
          title="Social Ready"
          desc="Optimized aspect ratios that fit perfectly into LinkedIn posts and Twitter threads without awkward cropping."
        />
        <GuideItem 
          icon={<ShieldCheck className="text-indigo-500" />}
          title="Secure by Design"
          desc="Your source code stays in your browser. We never upload or save your snippets on our server."
        />
      </div>

      <div className="bg-background text-foreground p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 space-y-6">
        <h3 className="text-xl font-bold bg-background text-foreground">Best Practices for Beautiful Snippets</h3>
        <ul className="space-y-4 text-sm bg-background text-foreground">
          <li className="flex gap-3">
             <span className="text-blue-500 font-bold">01.</span> Keep snippets short (under 20 lines) for better readability on mobile devices.
          </li>
          <li className="flex gap-3">
             <span className="text-blue-500 font-bold">02.</span> Use comments to explain complex logic within the image itself.
          </li>
          <li className="flex gap-3">
             <span className="text-blue-500 font-bold">03.</span> Match the background gradient to your personal brand or project theme.
          </li>
        </ul>
      </div>
    </div>
  );
}

function GuideItem({ icon, title, desc }: any) {
  return (
    <div className="space-y-3">
      <div className="w-12 h-12 bg-background text-foreground rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-800">{icon}</div>
      <h4 className="text-lg font-bold bg-background text-foreground">{title}</h4>
      <p className="text-sm bg-background text-foreground leading-relaxed">{desc}</p>
    </div>
  );
}