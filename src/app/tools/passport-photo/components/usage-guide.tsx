// src/app/tools/passport-photo/components/usage-guide.tsx

import { Zap, Shield, CheckCircle2, Info, Camera, EyeOff, UserSquare } from "lucide-react";

export default function UsageGuide() {
  return (
    <div className="space-y-20">
      <div className="space-y-6 text-left">
        <h2 className="text-3xl font-bold text-foreground dark:text-slate-100">Standard Passport Photo Requirements</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
          Our Passport Photo Maker is designed to meet international standards for online visa, passport, and ID applications. 
          To ensure your photo is accepted by official authorities, follow these essential guidelines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <GuidelineItem 
          icon={<Camera className="text-blue-500" />} 
          title="Lighting & Background" 
          desc="Use a plain white or off-white background. Ensure even lighting on your face without any harsh shadows or red-eye effects." 
        />
        <GuidelineItem 
          icon={<UserSquare className="text-emerald-500" />} 
          title="Face Position" 
          desc="Look directly at the camera with a neutral expression. Your head should be centered and occupy 70-80% of the photo." 
        />
        <GuidelineItem 
          icon={<EyeOff className="text-rose-500" />} 
          title="Glasses & Headwear" 
          desc="Avoid wearing tinted glasses or large frames. Headwear is only allowed for religious reasons, provided it doesn't obscure the face." 
        />
        <GuidelineItem 
          icon={<Zap className="text-amber-500" />} 
          title="Image Resolution" 
          desc="Our engine automatically optimizes your photo to 300x300 pixels at high DPI, perfect for digital submission portals." 
        />
      </div>

      <div className="bg-background text-foreground p-10 rounded-[3rem] space-y-8">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Info className="text-blue-400" /> Professional Checklist
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex gap-3">
            <CheckCircle2 className="text-emerald-400 shrink-0" size={18} />
            <p className="text-sm text-slate-400">Keep eyes open and clearly visible</p>
          </div>
          <div className="flex gap-3">
            <CheckCircle2 className="text-emerald-400 shrink-0" size={18} />
            <p className="text-sm text-slate-400">No hair covering the forehead or eyebrows</p>
          </div>
          <div className="flex gap-3">
            <CheckCircle2 className="text-emerald-400 shrink-0" size={18} />
            <p className="text-sm text-slate-400">High contrast between face and background</p>
          </div>
          <div className="flex gap-3">
            <CheckCircle2 className="text-emerald-400 shrink-0" size={18} />
            <p className="text-sm text-slate-400">Recent photo (taken within the last 6 months)</p>
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