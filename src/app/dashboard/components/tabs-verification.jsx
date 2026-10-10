// src/app/dashboard/components/tabs-verification.jsx

"use client";

import { Crown, Sparkles, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function VerificationTab() {
  const handleApply = () => {
    toast.info("Verification badge applications are currently reviewed in weekly batches.");
  };

  return (
    <div className="p-6 sm:p-10 md:p-12 rounded-3xl bg-card text-card-foreground border border-border shadow-sm relative overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-300">

      {/* সফট ব্যাকগ্রাউন্ড আভা */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-8">

        {/* আইকন ব্যাজ */}
        <div className="w-14 h-14 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center border border-amber-500/20 shadow-sm">
          <Crown size={28} className="fill-amber-500/20" />
        </div>

        {/* টেক্সট হেডার */}
        <div className="space-y-2 max-w-xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
            Verified Developer Workspace
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Elevate your profile with the xdevutilities Verification Crown. Signal authenticity and gain priority access to upcoming beta features.
          </p>
        </div>

        {/* বেনিফিট গ্রিড */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <BenefitItem icon={<ShieldCheck size={18} className="text-emerald-500" />} text="Trust Badge on Profile" />
          <BenefitItem icon={<Zap size={18} className="text-amber-500" />} text="Priority Tool Compute" />
          <BenefitItem icon={<Sparkles size={18} className="text-blue-500" />} text="Early Beta Features" />
        </div>

        {/* সাবমিট বাটন */}
        <div className="pt-2">
          <Button
            type="button"
            onClick={handleApply}
            className="w-full sm:w-auto h-11 px-8 rounded-xl bg-primary text-primary-foreground font-semibold shadow-sm hover:opacity-90 transition-all active:scale-[0.99] text-sm"
          >
            Submit Application
          </Button>
        </div>

      </div>
    </div>
  );
}

function BenefitItem({ icon, text }) {
  return (
    <div className="flex items-center gap-3 bg-muted/50 p-4 rounded-2xl border border-border shadow-sm">
      <div className="shrink-0">{icon}</div>
      <span className="text-xs sm:text-sm font-semibold text-foreground">{text}</span>
    </div>
  );
}