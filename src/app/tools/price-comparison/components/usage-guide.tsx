// src/app/tools/price-comparison/components/usage-guide.tsx

/* eslint-disable react/no-unescaped-entities */
import { CheckCircle2, Calculator, TrendingDown } from "lucide-react";

export default function UsageGuide() {
  return (
    <div className="space-y-10 py-10 border-t border-border/60 text-foreground bg-background">
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold">
          Never pay more than the fair price
        </h2>
        <p className="leading-relaxed font-medium">
          Have you ever wondered if the price a shopkeeper is charging for a loose quantity (like 300g or 750ml) is actually correct? When products are sold in non-standard weights, mental math can be tricky. **Xdevutilities** brings transparency to your shopping. Our Smart Fair Price Calculator uses a reference price to determine exactly how much any specific quantity should cost, helping you avoid overpaying and keep your budget in check.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-foreground bg-background">
        <div className="bg-background text-foreground p-8 rounded-[2.5rem] border border-border/50 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
            <CheckCircle2 size={20} />
            <h3 className="text-lg font-semibold">Key Benefits</h3>
          </div>
          <ul className="space-y-3 text-sm text-foreground bg-background font-medium leading-relaxed">
            <li>• Eliminates mental math errors during grocery shopping.</li>
            <li>• Instantly detects if you are being overcharged.</li>
            <li>• Supports Weight (kg/g), Volume (l/ml), and Count (pcs).</li>
            <li>• Works perfectly for both bulk and loose items.</li>
          </ul>
        </div>

        <div className="bg-background text-foreground p-8 rounded-[2.5rem] border border-border/50 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-blue-500">
            <Calculator size={20} />
            <h3 className="text-lg font-semibold">How to use it</h3>
          </div>
          <ol className="space-y-3 text-sm text-foreground bg-background font-medium leading-relaxed">
            <li>1. Enter the <strong>Standard Price</strong> (e.g., price for 1 kg).</li>
            <li>2. Enter the <strong>Actual Quantity</strong> you are buying (e.g., 350 g).</li>
            <li>3. (Optional) Enter the price the shop is asking for.</li>
            <li>4. Review the <strong>Fair Price</strong> and your potential savings.</li>
          </ol>
        </div>
      </div>

      <div className="p-6 bg-background text-foreground border border-blue-500/10 rounded-[2rem] flex items-start gap-4">
        <TrendingDown className="text-blue-600 shrink-0 mt-1" size={20} />
        <p className="text-xs text-foreground bg-background leading-relaxed font-medium italic">
          <strong>Smart Shopping Tip:</strong> Always use a known standard (like the price of a full packet or the listed market rate) as your reference to get the most accurate result.
        </p>
      </div>
    </div>
  );
}