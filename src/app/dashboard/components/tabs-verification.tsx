// src/app/dashboard/components/tabs-verification.tsx

"use client";
import { Crown, Sparkles, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VerificationTab() {
  return (
    <div className="p-8 md:p-16 rounded-[48px] bg-background text-foreground dark:bg-indigo-950/30 relative overflow-hidden animate-in fade-in zoom-in duration-500">
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-[120px] -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] -ml-32 -mb-32" />
      
      <div className="relative z-10 space-y-12">
        <div className="w-16 h-16 bg-amber-500/20 text-amber-500 rounded-[24px] flex items-center justify-center border border-amber-500/20 shadow-2xl">
          <Crown size={32} fill="currentColor" className="opacity-80" />
        </div>

        <div className="space-y-4">
          <h3 className="text-3xl md:text-5xl font-bold">Verified Membership</h3>
          <p className="text-slate-400 max-w-lg leading-relaxed text-base md:text-lg">
            Elevate your workspace with the xDev Verification Badge. Gain priority access to advanced AI tools and early releases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BenefitItem icon={<ShieldCheck size={18} />} text="Trust Badge on Profile" />
          <BenefitItem icon={<Zap size={18} />} text="Priority Tool Access" />
          <BenefitItem icon={<Sparkles size={18} />} text="Early Beta Features" />
        </div>

        <Button className="w-full md:w-auto h-16 px-12 bg-white rounded-[20px] font-bold bg-background text-foreground transition-all text-base shadow-xl active:scale-95">
          Submit Application
        </Button>
      </div>
    </div>
  );
}

function BenefitItem({ icon, text }: any) {
  return (
    <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
      <div className="text-amber-500">{icon}</div>
      <span className="text-sm font-semibold">{text}</span>
    </div>
  );
}