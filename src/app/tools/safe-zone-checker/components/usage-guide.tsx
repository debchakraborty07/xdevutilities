// src/app/tools/safe-zone-checker/components/usage-guide.tsx

import { Smartphone, Monitor, Layout, Target, AlertTriangle } from "lucide-react";

export default function UsageGuide() {
  return (
    <div className="space-y-20">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground dark:text-slate-100">Understanding Social Media Display Rules</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
          Designing a social media banner is tricky. While your desktop monitor shows a wide, cinematic image, a mobile device often crops the sides 
          or covers parts of the image with a profile picture. Our Safe Zone Checker helps you visualize these hidden "Danger Zones" 
          instantly, ensuring your brand message is never lost.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <GuideItem 
          icon={<Smartphone className="text-blue-500" />}
          title="Mobile-First Accuracy"
          desc="We calculate the central 'Safe Area' for platforms like LinkedIn and YouTube, where cropping is most aggressive on smaller screens."
        />
        <GuideItem 
          icon={<Layout className="text-emerald-500" />}
          title="Profile Overlap Alerts"
          desc="Specifically for X (Twitter) and LinkedIn, we highlight the area where your profile picture covers your banner background."
        />
        <GuideItem 
          icon={<Target className="text-amber-500" />}
          title="Circular Crop Visuals"
          desc="Check if your important content fits within the circular frame used by Instagram and Facebook profile pictures."
        />
        <GuideItem 
          icon={<Monitor className="text-indigo-500" />}
          title="Desktop Optimization"
          desc="Ensure your high-resolution banner still looks professional on large displays without losing focal points."
        />
      </div>

      <div className="bg-slate-50 dark:bg-slate-900/50 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 space-y-10">
        <h3 className="text-xl font-bold text-foreground dark:text-slate-100 flex items-center gap-3">
          <AlertTriangle className="text-rose-500" /> Platform-Specific Tips (2026 Update)
        </h3>
        
        <div className="space-y-8">
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">LinkedIn Banner Logic</h4>
            <p className="text-sm text-muted-foreground dark:text-slate-400 leading-relaxed">
              LinkedIn uses a wide 1584x396 pixel format. However, on mobile, the left-hand side is covered by your circular profile photo. 
              Always keep your logo and contact information on the <b>Right Side</b> of the banner for maximum visibility.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">YouTube Banner Complexity</h4>
            <p className="text-sm text-muted-foreground dark:text-slate-400 leading-relaxed">
              YouTube banners are huge (2560x1440), but most devices only show the middle 1546x423 pixels. This is the "Safe Area". 
              Anything outside this box will only be visible on TV screens.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">Instagram Profile Cropping</h4>
            <p className="text-sm text-muted-foreground dark:text-slate-400 leading-relaxed">
              Instagram profile photos are uploaded as squares but displayed as circles. Our tool helps you ensure that your 
              entire face or brand logo fits inside the 160px central radius.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GuideItem({ icon, title, desc }: any) {
  return (
    <div className="space-y-3">
      <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-sm">{icon}</div>
      <h4 className="text-lg font-semibold text-foreground dark:text-slate-100">{title}</h4>
      <p className="text-sm text-muted-foreground dark:text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}