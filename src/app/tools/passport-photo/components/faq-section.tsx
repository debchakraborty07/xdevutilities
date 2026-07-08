// src/app/tools/passport-photo/components/faq-section.tsx

export default function FAQSection() {
  const faqs = [
    { q: "What is the standard size for digital passport photos?", a: "Most online portals, including many visa and government sites, require a 300x300 pixel square image. Our tool generates exactly this size." },
    { q: "Can I use this for a US or UK Visa?", a: "Yes, this 300x300 output is widely accepted for digital visa applications. However, always check the specific requirements of the embassy." },
    { q: "Will the tool remove my background?", a: "Currently, the tool optimizes lighting and scales your photo. We recommend uploading a photo already taken against a plain white background for the best results." },
    { q: "What file formats are supported?", a: "You can upload JPEG, PNG, or WEBP files. The output will always be a high-quality JPEG to ensure compatibility." },
    { q: "Is it safe to upload my photo here?", a: "Privacy is our priority. Your image is processed in temporary RAM and is never stored, logged, or shared." },
    { q: "How much does it cost?", a: "Our Passport Photo Maker is 100% free with no hidden charges or watermarks." },
    { q: "Can I print this photo?", a: "While optimized for digital use, you can print it. For physical prints, ensure your printer is set to 300 DPI for a 1x1 inch physical result." },
    { q: "Why is my photo failing to process?", a: "Ensure your file is under 5MB and is a valid image format. If the error persists, try refreshing the page." }
  ];

  return (
    <div className="space-y-12 pb-32">
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-foreground dark:text-slate-100">Passport Photo FAQ</h2>
        <p className="text-muted-foreground">Common questions about official photo requirements and our tool.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="py-8 border-b border-slate-100 dark:border-slate-800">
            <h4 className="font-semibold text-foreground dark:text-slate-100 mb-3 flex items-start gap-3">
              <span className="text-blue-500 font-black">Q.</span> {faq.q}
            </h4>
            <p className="text-sm text-muted-foreground dark:text-slate-400 leading-relaxed pl-7">
              {faq.a}
            </p>
          </div>
        ))}
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