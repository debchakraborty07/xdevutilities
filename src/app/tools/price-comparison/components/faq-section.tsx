// src/app/tools/price-comparison/components/faq-section.tsx

/* eslint-disable react/no-unescaped-entities */
import { HelpCircle, ShieldCheck } from "lucide-react";

const faqs = [
  {
    q: "What is a 'Standard Price' in this calculator?",
    a: "The standard price is your reference point. For example, if a 1kg packet of sugar costs 1200, then 1200 is the standard price and 1kg is the standard quantity."
  },
  {
    q: "Does it automatically convert Grams to Kilograms?",
    a: "Yes. Our intelligent unit engine recognizes the relationship between grams and kilograms (or ml and litres), so you can enter 1kg as reference and ask for the price of 250g directly."
  },
  {
    q: "Can I use this for items sold by pieces (pcs)?",
    a: "Absolutely. If a box of 12 pencils costs 120, you can find the fair price for 5 pencils by selecting the 'pcs' unit for both fields."
  },
  {
    q: "Is the calculation accurate for liquid measurements?",
    a: "Yes, the math for liquid volume (litres and millilitres) is handled with high precision, making it ideal for oils, milk, or any liquid commodities."
  }
];

export default function FAQSection() {
  return (
    <div className="space-y-10 py-10 border-t border-border/60">
      <div className="flex items-center gap-3">
        <HelpCircle className="text-blue-500" size={24} />
        <h2 className="text-2xl font-semibold text-foreground dark:text-slate-100">
          Help & Support
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div key={index} className="p-6 bg-background text-foreground border border-border rounded-[2rem] space-y-2 shadow-sm transition-all hover:border-blue-500/20">
            <h3 className="text-sm font-semibold text-foreground dark:text-slate-100">
              {faq.q}
            </h3>
            <p className="text-xs text-muted-foreground dark:text-slate-400 leading-relaxed font-medium">
              {faq.a}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 p-4 bg-green-500/5 border border-green-500/10 rounded-2xl shadow-sm">
        <ShieldCheck size={16} className="text-green-500 shrink-0" />
        <p className="text-[10px] text-green-600 dark:text-green-400 font-medium italic">
          Your data is safe: All price and quantity inputs are processed locally in your browser and are never stored.
        </p>
      </div>
    </div>
  );
}