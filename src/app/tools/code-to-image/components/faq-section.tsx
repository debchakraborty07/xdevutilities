// src/app/tools/code-to-image/components/faq-section.tsx

export default function FAQSection() {
    const faqs = [
      { q: "Which programming languages are supported?", a: "We support JavaScript, TypeScript, Python, CSS, and React (JSX) with smart syntax highlighting. More languages are being added regularly." },
      { q: "Is there a limit on the code length?", a: "While there is no hard limit, we recommend keeping snippets under 50 lines to maintain high image quality and readability." },
      { q: "Can I use the generated images in my commercial blog?", a: "Yes! All images generated are yours to use anywhere—blogs, presentations, or social media—without any attribution required." },
      { q: "Why is the exported image 2x larger?", a: "We export at double the pixel density (Retina ready) so that your code remains sharp even when zoomed in on high-resolution screens." },
      { q: "Is my source code private?", a: "Absolutely. The image generation process happens entirely on your local machine using the browser's Canvas API. Your code never touches our servers." }
    ];
  
    return (
      <div className="space-y-12 pb-32">
        <h2 className="text-3xl font-bold text-foreground dark:text-slate-100">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="py-8 border-b border-slate-100 dark:border-slate-800">
              <h4 className="font-semibold text-foreground dark:text-slate-100 mb-3 flex items-start gap-3">
                <span className="text-blue-500 font-bold">Q.</span> {faq.q}
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