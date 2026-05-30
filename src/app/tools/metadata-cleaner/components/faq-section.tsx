// src/app/tools/metadata-cleaner/components/faq-section.tsx

export default function FAQSection() {
    const faqs = [
      { 
        q: "What kind of hidden information is removed from the PDF?", 
        a: "Our tool strips away all sensitive metadata including the author's name, the software used to create the file (producer/creator), creation and modification timestamps, document subjects, and embedded keywords." 
      },
      { 
        q: "Will removing metadata affect my PDF's text or images?", 
        a: "Not at all. The visible content of your document—text, layout, and images—remains 100% intact. We only target the hidden 'properties' section of the file that contains identity markers." 
      },
      { 
        q: "Is it safe to use this for sensitive legal or financial documents?", 
        a: "Yes. We follow a strict 'Stateless Processing' policy. Your document is processed entirely in our server's temporary RAM and is never saved to a disk. Once the clean file is returned to you, it is instantly purged from our system." 
      },
      { 
        q: "Does the cleaner work on password-protected PDFs?", 
        a: "No. For security and accessibility reasons, you must remove the password protection or encryption from the PDF before our tool can access and strip the internal metadata." 
      },
      { 
        q: "How can I verify that the metadata has been successfully removed?", 
        a: "After downloading the cleaned file, you can right-click it, select 'Properties' (Windows) or 'Get Info' (Mac), and view the 'Details' or 'Content' tab. You will notice that fields like Author, Program, and Dates are now empty." 
      },
      { 
        q: "Does this tool reduce the file size of my PDF?", 
        a: "Yes, in many cases it does. By stripping metadata and using our 'Garbage Collection' logic, we often optimize the internal structure of the PDF, resulting in a slightly smaller, more efficient file." 
      }
    ];
  
    return (
      <div className="space-y-12 pb-32">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-foreground dark:text-slate-100">Common Questions</h2>
          <p className="text-muted-foreground text-sm">Everything you need to know about PDF privacy and metadata removal.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="py-8 border-b border-slate-100 dark:border-slate-800">
              <h4 className="font-semibold text-foreground dark:text-slate-100 mb-3 flex items-start gap-3">
                <span className="text-emerald-500 font-black">Q.</span> {faq.q}
              </h4>
              <p className="text-sm text-muted-foreground dark:text-slate-400 leading-relaxed pl-7">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
  
        {/* Structured Data for SEO - Critical for Metadata Search Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            })
          }}
        />
      </div>
    );
  }