// src/app/tools/price-comparison/components/action-zone.tsx

"use client";

import React, { useState, useMemo } from "react";
import { Calculator, Trash2, Info, ChevronDown, CheckCircle2, IndianRupee, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const unitMultipliers: Record<string, { label: string; value: number }> = {
  g: { label: "gram", value: 1 },
  kg: { label: "kg", value: 1000 },
  ml: { label: "ml", value: 1 },
  l: { label: "litre", value: 1000 },
  pcs: { label: "pcs", value: 1 },
};

export default function ActionZone() {
  // ১. স্ট্যান্ডার্ড প্রাইস (রেফারেন্স)
  const [ref, setRef] = useState({ price: "", weight: "1", unit: "kg" });
  // ২. ইউজার আসলে কতটুকু কিনছে
  const [actual, setActual] = useState({ weight: "", unit: "g", shopPrice: "" });

  const result = useMemo(() => {
    const rP = parseFloat(ref.price);
    const rW = parseFloat(ref.weight);
    const aW = parseFloat(actual.weight);
    const sP = parseFloat(actual.shopPrice);

    if (rP > 0 && rW > 0 && aW > 0) {
      // স্ট্যান্ডার্ড ইউনিট প্রাইস বের করা (প্রতি গ্রাম/এমএল)
      const refTotalBase = rW * unitMultipliers[ref.unit].value;
      const unitPrice = rP / refTotalBase;

      // ইউজারের কেনা মালের সঠিক দাম (Fair Price)
      const actualTotalBase = aW * unitMultipliers[actual.unit].value;
      const fairPrice = unitPrice * actualTotalBase;

      // দোকানদারের দামের সাথে তুলনা (যদি ইউজার ইনপুট দেয়)
      let diff = 0;
      let isOvercharged = false;
      if (sP > 0) {
        diff = sP - fairPrice;
        isOvercharged = sP > fairPrice;
      }

      return { fairPrice, diff, isOvercharged };
    }
    return null;
  }, [ref, actual]);

  const handleClear = () => {
    setRef({ price: "", weight: "1", unit: "kg" });
    setActual({ weight: "", unit: "g", shopPrice: "" });
    toast.info("Calculator reset");
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex justify-between items-center px-1">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calculator size={16} />
          <span className="text-[11px] font-semibold opacity-60">Fair price estimator</span>
        </div>
        <button onClick={handleClear} className="text-[11px] font-semibold text-red-500 hover:underline flex items-center gap-1">
          <Trash2 size={12} /> Clear all
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-foreground bg-background lg:gap-12">
        {/* Section 1: Standard Reference Price */}
        <div className="p-6 sm:p-8 rounded-[2rem] border border-border bg-background text-foreground">
          <h3 className="font-semibold mb-6 flex items-center gap-2 bg-background text-foreground">
             <IndianRupee size={18} className="text-blue-500" /> Standard Price
          </h3>
          <div className="space-y-6 text-foreground bg-background">
            <div className="space-y-2">
              <label className="text-[10px] font-semibold ml-1">Market Price (e.g. 1200)</label>
              <input type="number" value={ref.price} onChange={(e) => setRef({...ref, price: e.target.value})} placeholder="0.00" className="w-full px-5 py-4 bg-background border border-border rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/5 transition-all text-sm font-medium" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-semibold ml-1">For how much quantity?</label>
              <div className="flex gap-2">
                <input type="number" value={ref.weight} onChange={(e) => setRef({...ref, weight: e.target.value})} placeholder="Value" className="flex-1 px-5 py-4 bg-background border border-border rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/5 transition-all text-sm font-medium" />
                <DropdownMenu>
                  <DropdownMenuTrigger className="w-28 px-4 bg-background text-foreground border border-border rounded-2xl text-xs font-semibold flex items-center justify-between outline-none">
                    {unitMultipliers[ref.unit].label} <ChevronDown size={14} className="opacity-50" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="rounded-xl">
                    {Object.keys(unitMultipliers).map((u) => (
                      <DropdownMenuItem key={u} onClick={() => setRef({...ref, unit: u})} className="text-xs font-medium">
                        {unitMultipliers[u].label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Actual Purchase Details */}
        <div className="p-6 sm:p-8 rounded-[2rem] border border-border bg-background text-foreground">
          <h3 className="font-semibold mb-6 flex items-center gap-2 bg-background text-foreground">
             <CheckCircle2 size={18} className="text-green-500" /> Your Purchase
          </h3>
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-semibold text-slate-400  ml-1">Quantity you are buying</label>
              <div className="flex gap-2">
                <input type="number" value={actual.weight} onChange={(e) => setActual({...actual, weight: e.target.value})} placeholder="e.g. 300" className="flex-1 px-5 py-4 bg-background border border-border rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/5 transition-all text-sm font-medium" />
                <DropdownMenu>
                  <DropdownMenuTrigger className="w-28 px-4 bg-background text-foreground border border-border rounded-2xl text-xs font-semibold flex items-center justify-between outline-none">
                    {unitMultipliers[actual.unit].label} <ChevronDown size={14} className="opacity-50" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="rounded-xl">
                    {Object.keys(unitMultipliers).map((u) => (
                      <DropdownMenuItem key={u} onClick={() => setActual({...actual, unit: u})} className="text-xs font-medium">
                        {unitMultipliers[u].label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-semibold text-slate-400  ml-1">What is the shop charging? (Optional)</label>
              <input type="number" value={actual.shopPrice} onChange={(e) => setActual({...actual, shopPrice: e.target.value})} placeholder="0.00" className="w-full px-5 py-4 bg-background border border-border rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/5 transition-all text-sm font-medium" />
            </div>
          </div>
        </div>
      </div>

      {/* Result Card */}
      {result && (
        <div className="pt-8 space-y-6 animate-in zoom-in-95 duration-500">
          <div className="p-8 bg-background text-foreground rounded-[2.5rem] shadow-2xl space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="space-y-2 text-center md:text-left">
                <p className="text-[10px] font-semibold opacity-60">Estimated Fair Price</p>
                <h3 className="text-4xl font-semibold italic">{result.fairPrice.toFixed(2)} /-</h3>
                <p className="text-sm opacity-80 font-medium">
                  This is exactly what you should pay for {actual.weight} {unitMultipliers[actual.unit].label}.
                </p>
              </div>

              {/* Overcharge / Savings Alert */}
              {actual.shopPrice && (
                <div className={`p-6 rounded-[2rem] border min-w-[240px] text-center ${result.isOvercharged ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-green-500/10 border-green-500/20 text-green-400'}`}>
                  <p className="text-[10px] font-semibold  mb-1 opacity-60">Verdict</p>
                  <p className="text-lg font-medium">
                    {result.isOvercharged ? `Overcharged by ${result.diff.toFixed(2)}` : result.diff === 0 ? "Perfect Price" : `Saving ${Math.abs(result.diff).toFixed(2)}`}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-blue-500/5 border border-blue-500/10 rounded-[2rem]">
             <div className="p-2 bg-background rounded-xl border border-border shadow-sm text-blue-500">
                <Info size={18} />
             </div>
             <p className="text-[12px] text-muted-foreground dark:text-slate-400 leading-relaxed font-medium">
               <strong>How we calculated this:</strong> We determined the price per base unit (gram/ml) from your standard reference ({ref.price} for {ref.weight}{ref.unit}) and multiplied it by your actual quantity ({actual.weight}{actual.unit}). This gives you the mathematically correct price you should be paying.
             </p>
          </div>
        </div>
      )}
    </div>
  );
}