// src/app/tools/safe-zone-checker/components/faq-section.tsx

export default function FAQSection() {
    const faqs = [
      { 
        q: "What is a Social Media 'Safe Zone'?", 
        a: "A 'Safe Zone' is the area of an image that is guaranteed to be visible across all devices—mobile, tablet, and desktop—without being cropped or hidden by user interface elements like profile pictures." 
      },
      { 
        q: "Why does my LinkedIn banner look different on mobile?", 
        a: "LinkedIn banners are responsive. On mobile, the app pushes your circular profile picture over the left side of the banner, often hiding logos or text placed there. Our tool identifies this exact 'Danger Zone'." 
      },
      { 
        q: "Do I need to download a template?", 
        a: "No. You can simply upload your image here and see the guide in real-time. This saves you from downloading heavy PSD or AI templates for every social platform." 
      },
      { 
        q: "Does the checker store my photos?", 
        a: "Never. All image processing and masking happen locally in your browser. We have a strict zero-data storage policy for all our digital utilities." 
      },
      { 
        q: "What are the latest YouTube banner dimensions for 2026?", 
        a: "The standard remains 2560 x 1440 pixels, with a 'Safe Area' of 1546 x 423 pixels in the center for desktop and mobile visibility." 
      }
    ];
  
    return (
      <div className="space-y-12 pb-32">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-foreground dark:text-slate-100">Social Media Safe Zone FAQ</h2>
          <p className="text-muted-foreground text-sm italic">Expert answers to common image display problems.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="py-8 border-b border-slate-100 dark:border-slate-800">
              <h4 className="font-semibold text-foreground dark:text-slate-100 mb-3 flex items-start gap-3">
                <span className="text-emerald-500 font-bold">Q.</span> {faq.q}
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