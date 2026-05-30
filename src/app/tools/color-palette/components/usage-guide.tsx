// src/app/tools/color-palette/components/usage-guide.tsx

import { Zap, Shield, CheckCircle2, Info, Palette, Layout, Sparkles, Wand2 } from "lucide-react";

export default function UsageGuide() {
  return (
    <div className="space-y-20">
      <div className="space-y-6 text-left">
        <h2 className="text-3xl font-bold text-foreground dark:text-slate-100 font-tight">Mastering Color Extraction with AI</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg max-w-3xl">
          Color is the soul of design. Our AI-driven Palette Extractor analyzes the pixel distribution of your images to find 
          perfectly balanced color schemes that you can use for branding, web development, or digital art.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <GuidelineItem 
          icon={<Zap className="text-blue-500" />} 
          title="Instant Extraction" 
          desc="Our advanced algorithm identifies dominant shades in milliseconds, providing you with a ready-to-use professional palette." 
        />
        <GuidelineItem 
          icon={<Sparkles className="text-emerald-500" />} 
          title="Balanced Schemes" 
          desc="We go beyond basic colors, extracting primary and accent tones to ensure your design remains visually harmonious." 
        />
        <GuidelineItem 
          icon={<Layout className="text-rose-500" />} 
          title="Developer Friendly" 
          desc="Get exact Hex codes that can be directly pasted into CSS, Tailwind, or Shadcn UI configurations with a single click." 
        />
        <GuidelineItem 
          icon={<Wand2 className="text-amber-500" />} 
          title="Visual Context" 
          desc="See your colors in high contrast to understand how they will look on both dark and light backgrounds." 
        />
      </div>

      <div className="bg-background text-foreground text-white p-10 rounded-[3rem] space-y-8">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Info className="text-blue-400" /> Best Results Checklist
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex gap-3">
            <CheckCircle2 className="text-emerald-400 shrink-0" size={18} />
            <p className="text-sm text-slate-400">Use high-resolution images for color depth</p>
          </div>
          <div className="flex gap-3">
            <CheckCircle2 className="text-emerald-400 shrink-0" size={18} />
            <p className="text-sm text-slate-400">Works best with natural lighting in photos</p>
          </div>
          <div className="flex gap-3">
            <CheckCircle2 className="text-emerald-400 shrink-0" size={18} />
            <p className="text-sm text-slate-400">Upload multiple versions for various accents</p>
          </div>
          <div className="flex gap-3">
            <CheckCircle2 className="text-emerald-400 shrink-0" size={18} />
            <p className="text-sm text-slate-400">100% Client-side privacy for your assets</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GuidelineItem({ icon, title, desc }: any) {
  return (
    <div className="space-y-3 p-2">
      <div className="w-12 h-12 bg-background text-foreground rounded-2xl flex items-center justify-center shadow-inner">{icon}</div>
      <h4 className="text-lg font-semibold bg-background text-foreground">{title}</h4>
      <p className="text-sm bg-background text-foreground leading-relaxed">{desc}</p>
    </div>
  );
}