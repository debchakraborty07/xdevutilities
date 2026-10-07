// src/app/tools/price-comparison/components/usage-guide.jsx

import { CheckCircle2, Calculator, TrendingDown, Scale, Percent, LineChart } from "lucide-react";

export default function UsageGuide() {
  return (
    <div className="space-y-16 py-10 border-t border-border/60 text-foreground bg-background">

      {/* AdSense এবং SEO-বান্ধব তথ্যবহুল স্মার্ট শপিং ও ইউনিট কস্ট ক্যালকুলেশন ব্লগ সেকশন */}
      <article className="space-y-8">
        <header className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground dark:text-slate-100 sm:text-4xl">
            Never pay more than the fair price
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Have you ever wondered if the price a shopkeeper is charging for a loose quantity (like 300g or 750ml) is actually correct? When products are sold in non-standard weights, mental math can be tricky. <strong>Xdevutilities</strong> brings transparency to your shopping. Our Smart Fair Price Calculator uses a reference price to determine exactly how much any specific quantity should cost, helping you avoid overpaying and keep your budget in check.
          </p>
        </header>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Percent size={22} className="text-blue-500" /> The Psychology of Fractional Pricing and Retailer Margins
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Supermarkets, street vendors, and local grocers often utilize a pricing psychology called <strong>Fractional Pricing</strong>. By packaging items in odd quantities—such as 375 grams instead of 500 grams, or 930 milliliters instead of a full liter—retailers disrupt consumers&apos; ability to easily perform mental unit-rate division.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            When standard benchmarks are broken down, shoppers frequently fall victim to overcharging because they perceive a lower shelf price to represent high value. For example, a 370g pack at $3.50 seems cheaper than a 500g pack at $4.50, but a quick calculation of the cost per gram reveals that the smaller package actually carries a hefty premium. Our calculator strips away this packaging illusion, isolating the true base-unit cost so you can shop with empirical confidence.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Scale size={22} className="text-emerald-500" /> Master the Art of Unit Pricing: Slash Your Grocery Bills
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Unit cost calculation is the ultimate personal finance hack. According to consumer studies, smart buyers who actively calculate and compare unit pricing save an average of <strong>20% to 25% on monthly household expenses</strong>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background/50">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                Mass Metrics
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Works with solid and loose grocery items. Seamlessly scale reference pricing from 1 kg or 1 lb down to exact gram/ounce portions.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background/50">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                Liquid Metrics
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Perfect for comparing cooking oils, juices, or detergents. Translate reference liters down to milliliter fractions instantly.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background/50">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                Count Metrics
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Compare multi-pack items, eggs, pills, or bulk materials. Find the exact individual rate to see if the pack price is a fair deal.
              </p>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Many manufacturers employ a tactic known as &quot;Shrinkflation,&quot; where they subtly reduce the volume of a product while keeping the shelf price identical. Measuring products with a strict fair price estimation tool allows you to detect these hidden margin inflation events before making a purchasing decision.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <LineChart size={22} className="text-rose-500" /> Mathematical Transparency for Loose Goods
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            When buying loose goods like grains, fresh vegetables, or dry fruits from street markets, vendors often round up decimal totals or calculate unit weights on scales that include tare discrepancies. While a rounding error of a few cents on 100 grams seems trivial, over an entire year of grocery acquisitions, these small overcharging instances accumulate into hundreds of dollars of wasted capital.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Our tool acts as your portable digital balance auditor. By inputting the official market or bulk price alongside the raw weights, you establish a firm mathematical ceiling. This level of mathematical transparency ensures that you only pay the absolute fair, proportional price for every single ounce or gram you consume.
          </p>
        </section>
      </article>

      <div className="border-t border-slate-100 dark:border-slate-800 my-12" />

      {/* ফিচার গ্রিড ও টিপস কার্ড */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-card text-card-foreground p-8 rounded-[2.5rem] border border-border space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 size={20} />
            <h3 className="text-lg font-semibold">Key Benefits</h3>
          </div>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            <li>• Eliminates mental math errors during grocery shopping.</li>
            <li>• Instantly detects if you are being overcharged.</li>
            <li>• Supports Weight (kg/g), Volume (l/ml), and Count (pcs).</li>
            <li>• Works perfectly for both bulk and loose items.</li>
          </ul>
        </div>

        <div className="bg-card text-card-foreground p-8 rounded-[2.5rem] border border-border space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-blue-500">
            <Calculator size={20} />
            <h3 className="text-lg font-semibold">How to use it</h3>
          </div>
          <ol className="space-y-3 text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            <li>1. Enter the <strong>Standard Price</strong> (e.g., price for 1 kg).</li>
            <li>2. Enter the <strong>Actual Quantity</strong> you are buying (e.g., 350 g).</li>
            <li>3. (Optional) Enter the price the shop is asking for.</li>
            <li>4. Review the <strong>Fair Price</strong> and your potential savings.</li>
          </ol>
        </div>
      </div>

      <div className="p-6 bg-blue-500/5 border border-blue-500/10 rounded-[2rem] flex items-start gap-4">
        <TrendingDown className="text-blue-500 shrink-0 mt-1" size={20} />
        <p className="text-xs text-muted-foreground dark:text-slate-400 leading-relaxed font-medium italic">
          <strong>Smart Shopping Tip:</strong> Always use a known standard (like the price of a full packet or the listed market rate) as your reference to get the most accurate result.
        </p>
      </div>
    </div>
  );
}