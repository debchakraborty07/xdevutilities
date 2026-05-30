// src/app/tools/resume-scanner/components/faq-section.tsx

export default function FAQSection() {
  const faqs = [
    { 
      q: "How does the ATS Resume Scanner calculate the score?", 
      a: "Our scanner uses a semantic matching algorithm that compares your resume against the job description. It looks for keyword density, skills alignment, and structural formatting to give you a 'Hireability Score'." 
    },
    { 
      q: "Is my resume stored on your servers?", 
      a: "No. Your privacy is our priority. Your resume is processed in temporary memory (RAM) and is purged immediately after the analysis is complete. We do not store or share your personal career data." 
    },
    { 
      q: "What file formats are supported for scanning?", 
      a: "We recommend uploading text-based PDF files for the most accurate results. Scanned images or flattened PDFs may not be readable by our ATS engine." 
    },
    { 
      q: "Can I scan multiple resumes for the same job?", 
      a: "Absolutely! You can iterate as many times as you want. We suggest updating your resume based on the 'Missing Keywords' and scanning again until you reach a score of 80% or higher." 
    },
    { 
      q: "Why is my score lower than expected?", 
      a: "This usually happens if the job description has very specific requirements that are missing from your CV, or if your resume has complex formatting (like tables or columns) that blocks the scanner." 
    },
    { 
      q: "Is this tool free for commercial use?", 
      a: "Yes. Our Resume Scanner is 100% free with no hidden charges, registration requirements, or limits on the number of scans." 
    }
  ];

  return (
    <div className="space-y-12 pb-32">
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-foreground dark:text-slate-100">Resume Scanner FAQ</h2>
        <p className="text-muted-foreground">Common questions about ATS optimization and our scanning technology.</p>
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

      {/* Structured Data for SEO - Google will show these FAQs in search results */}
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