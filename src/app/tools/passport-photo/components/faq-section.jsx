// src/app/tools/passport-photo/components/faq-section.jsx

export default function FAQSection() {
  const faqs = [
    {
      q: "What is the standard size for digital passport photos?",
      a: "Most online portals, including many standard digital verification systems and ID portals, require a 300x300 pixel square image. Our tool generates exactly this dimension."
    },
    {
      q: "Can I use this for a US or UK Visa?",
      a: "This 300x300 output is accepted across many general digital visa portals. However, note that specific portals (such as the US DS-160 which prefers 600x600) have rigid guidelines. Always double-check your embassy's portal requirements before submitting."
    },
    {
      q: "Will the tool remove my background?",
      a: "Currently, the tool crops and optimizes portrait framing and lighting. We recommend uploading a photo taken against a clean, plain white or off-white wall for optimal compliance."
    },
    {
      q: "What file formats are supported?",
      a: "You can upload JPEG, PNG, or WEBP files. The output will always be exported as a high-quality JPEG to ensure maximum compatibility."
    },
    {
      q: "Is it safe to upload my photo here?",
      a: "Privacy is our priority. Your image is processed in temporary volatile RAM and is never stored, logged, or shared with third parties."
    },
    {
      q: "How much does it cost?",
      a: "Our Passport Photo Maker is 100% free with no hidden charges, mandatory account registration, or watermarks."
    },
    {
      q: "Can I print this photo?",
      a: "While optimized primarily for digital uploads, you can print it. For physical prints, ensure your printer is set to 300 DPI for a 1x1 inch physical result."
    },
    {
      q: "Why is my photo failing to process?",
      a: "Ensure your file is under 5MB and is a valid image format with a visible human face. If issues persist, try refreshing the page."
    }
  ];

  return (
    <div className="space-y-12 pb-32">
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-foreground dark:text-slate-100">
          Passport Photo FAQ
        </h2>
        <p className="text-muted-foreground text-sm">
          Common questions about official photo requirements and our tool.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
        {faqs.map((faq) => (
          <div key={faq.q} className="py-8 border-b border-slate-100 dark:border-slate-800">
            <h3 className="font-semibold text-foreground dark:text-slate-100 mb-3 flex items-start gap-3 text-base">
              <span className="text-blue-500 font-black">Q.</span> {faq.q}
            </h3>
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
            "mainEntity": faqs.map((faq) => ({
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