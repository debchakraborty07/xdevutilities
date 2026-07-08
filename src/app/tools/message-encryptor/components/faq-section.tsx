// src/app/tools/message-encryptor/components/faq-section.tsx

/* eslint-disable react/no-unescaped-entities */
import { HelpCircle, ShieldAlert } from "lucide-react";

const faqs = [
  {
    q: "Is it safe to paste my real passwords here?",
    a: "Yes, completely. All encryption and decryption logic happens right inside your web browser. Your text never leaves your device and never touches our servers. We simply provide the 'engine' to lock the message locally."
  },
  {
    q: "What happens if I forget my secret key?",
    a: "Because we prioritize your privacy, we don't store your keys. If you lose the passphrase, there is no way for us (or anyone else) to unlock the message. Please ensure you share the key with the recipient through a separate secure channel."
  },
  {
    q: "Can I use the encrypted code on any messaging app?",
    a: "Absolutely. The output is a standard text string. You can copy it and paste it into WhatsApp, Messenger, Telegram, or even an Email. As long as the other person has the key and access to xdevutilities, they can read it."
  },
  {
    q: "Is AES-256 encryption really uncrackable?",
    a: "AES-256 is the gold standard used by banks and military organizations. Without the correct key, it would take a supercomputer billions of years to crack. Your secrets are safe with our industrial-grade algorithm."
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
        {faqs.map((faq, index) => (
          /* এখানে টাইপো সংশোধন করে text-foreground border করা হয়েছে */
          <div key={index} className="p-6 bg-background text-foreground border border-border rounded-2xl space-y-2">
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
        <p className="text-[10px] text-orange-600 dark:text-orange-400 font-medium italic">
          Tip: For maximum security, use a passphrase that includes numbers, symbols, and is at least 12 characters long.
        </p>
      </div>

      {/* গুগলের জন্য SEO FAQ Schema */}
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