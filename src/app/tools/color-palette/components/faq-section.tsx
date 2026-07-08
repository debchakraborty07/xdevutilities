// src/app/tools/color-palette/components/faq-section.tsx

export default function FAQSection() {
  const faqs = [
    { 
      q: "How does the AI extract colors from my image?", 
      // eslint-disable-next-line react/no-unescaped-entities
      a: "Our tool uses a mathematical approach called Color Quantization. It analyzes every single pixel and groups similar tones together to identify the most significant shades that define the image's overall visual mood." 
    },
    { 
      q: "Can I use these colors for professional branding?", 
      a: "Absolutely! The hex codes generated are industry-standard. You can directly use them in Figma, Adobe Creative Cloud, or your brand's style guide to ensure visual consistency." 
    },
    { 
      q: "Is my privacy protected when I upload photos?", 
      // eslint-disable-next-line react/no-unescaped-entities
      a: "Privacy is a core pillar of xDev Utilities. Your images are processed entirely in temporary RAM and are never saved to our servers, logged, or shared with any third party." 
    },
    { 
      q: "Which image formats work best for color extraction?", 
      a: "Standard formats like JPEG, PNG, and WEBP work perfectly. For best results, use high-resolution photos with natural lighting to capture the most accurate color depth." 
    },
    { 
      q: "Are there any watermarks on the results?", 
      a: "No. All our design utilities, including the Color Palette Extractor, are 100% free to use with no hidden charges, registration requirements, or watermarks." 
    }
  ];

  return (
    <div className="space-y-12 pb-32">
      <h2 className="text-3xl font-bold text-foreground dark:text-slate-100">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="py-8 border-b border-slate-100 dark:border-slate-800">
            <h4 className="font-semibold text-foreground dark:text-slate-100 mb-3 flex items-start gap-3">
              <span className="text-indigo-500 font-bold">Q.</span> {faq.q}
            </h4>
            <p className="text-sm text-muted-foreground dark:text-slate-400 leading-relaxed pl-7">
              {faq.a}
            </p>
          </div>
        ))}
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