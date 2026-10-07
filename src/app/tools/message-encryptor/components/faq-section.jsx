// src/app/tools/message-encryptor/components/faq-section.jsx

import { HelpCircle, ShieldAlert } from "lucide-react";

const faqs = [
  {
    q: "Is it safe to paste confidential credentials here?",
    a: "Yes. Our tool communicates with an isolated, stateless encryption pipeline. Your payload and secret key are processed strictly in temporary volatile memory during execution and are never saved to our database, logged, or shared with third parties."
  },
  {
    q: "What happens if I forget my secret key?",
    a: "Because we prioritize strict zero-retention privacy, we do not store your keys. If you lose the passphrase, there is no backdoor or recovery mechanism to unlock the message. Please share the key with the recipient through a separate, secure channel."
  },
  {
    q: "Can I use the encrypted code on any messaging app?",
    a: "Absolutely. The output is a standard text string. You can copy and paste it into WhatsApp, Messenger, Telegram, or an email. As long as the recipient has the key and access to xdevutilities, they can decrypt it."
  },
  {
    q: "Is AES-256 encryption really uncrackable?",
    a: "AES-256 is the gold standard used by banks and defense organizations. Without the correct key, it would take supercomputers billions of years of brute-force attempts to crack. Your message is shielded by industrial-grade mathematical standards."
  }
];

export default function FAQSection() {
  return (
    <div className="space-y-10 py-10 border-t border-border/60">
      <div className="flex items-center gap-3">
        <HelpCircle className="text-blue-500" size={24} />
        <h2 className="text-2xl font-semibold text-foreground dark:text-slate-100">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq) => (
          <div key={faq.q} className="p-6 bg-card text-card-foreground border border-border rounded-2xl space-y-2 shadow-sm">
            <h3 className="text-sm font-semibold text-foreground dark:text-slate-100">
              {faq.q}
            </h3>
            <p className="text-xs text-muted-foreground dark:text-slate-400 leading-relaxed font-medium">
              {faq.a}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 p-4 bg-orange-500/5 border border-orange-500/10 rounded-2xl">
        <ShieldAlert size={16} className="text-orange-500 shrink-0" />
        <p className="text-[11px] text-orange-600 dark:text-orange-400 font-medium italic">
          Tip: For maximum security, use a passphrase that includes numbers, symbols, and is at least 12 characters long.
        </p>
      </div>

      {/* SEO FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a }
            }))
          })
        }}
      />
    </div>
  );
}