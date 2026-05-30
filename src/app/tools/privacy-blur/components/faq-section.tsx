// src/app/tools/privacy-blur/components/faq-section.tsx

export default function FAQSection() {
    const faqs = [
      { q: "Is the blur permanent?", a: "Yes. Once you redact an area and download the image, the underlying data is destroyed and cannot be 'un-blurred' by anyone." },
      { q: "Can I use this on my mobile phone?", a: "Yes! Our canvas is touch-compatible, allowing you to drag and blur using your finger on smartphones and tablets." },
      { q: "Which formats are supported?", a: "We support all common web formats including PNG, JPG, JPEG, and WEBP." },
      { q: "What is the difference between Blur and Blackout?", a: "Blur uses a mathematical pixel-shuffling algorithm (Gaussian) which is great for faces or text. Blackout places a solid black box over the data for 100% unreadable results." },
      { q: "Is there a file size limit?", a: "We recommend files under 10MB to ensure smooth performance, as the processing happens entirely within your device's memory." }
    ];
  
    return (
      <div className="space-y-12 pb-32">
        <h2 className="text-3xl font-bold text-foreground dark:text-slate-100 text-center md:text-left">Privacy Blur FAQ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="py-8 border-b border-slate-100 dark:border-slate-800">
              <h4 className="font-semibold text-foreground dark:text-slate-100 mb-3 flex items-start gap-3">
                <span className="text-indigo-500 font-bold italic">Q.</span> {faq.q}
              </h4>
              <p className="text-sm text-muted-foreground dark:text-slate-400 leading-relaxed pl-7">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
        
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