// src/app/resources/documentation/page.tsx

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Platform Documentation | Behind the Scenes ",
  description: "A deep dive into how xdevutilities works: stateless architecture, tool logic, and our privacy-first processing engine.",
  alternates: {
    canonical: 'https://www.xdevutilities.com/resources/documentation',
  },
};

export default function DocumentationPage() {
    return (
      <div className="container mx-auto px-6 py-20 max-w-4xl min-h-screen">
        <div className="space-y-4 mb-12">
          <Link href="/blog" className="text-sm font-bold text-blue-500 hover:underline">← Back to Blog</Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground dark:text-slate-100 leading-tight">
            Platform <span className="text-blue-500">Documentation</span>
          </h1>
          <p className="text-lg text-muted-foreground dark:text-slate-400 font-medium">
            Understanding the architecture, logic, and security protocols of the xdevutilities ecosystem.
          </p>
        </div>
        
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-12 text-[16px] text-slate-600 dark:text-slate-400 leading-relaxed">
          
          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 border-l-4 border-blue-500 pl-4">Introduction</h2>
            <p>
              xdevutilities was built to provide a clean, high-performance alternative to the cluttered utility sites of the modern web. Every tool here is engineered to perform a specific task with zero tracking and maximum efficiency. 
            </p>
            <p>
              For a step-by-step practical guide on how to use these tools for your specific workflow, please visit our <Link href="/resources/usage-guide" className="text-blue-500 underline font-bold">Usage Guide</Link>.
            </p>
          </section>
  
          {/* Stateless Processing */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 border-l-4 border-blue-500 pl-4">Stateless Architecture</h2>
            <p>
              Our core processing engine follows a <strong>&quot;Stateless&quot;</strong> philosophy. We believe that your sensitive documents and data belong only to you. 
            </p>
            <p>
              Whether you are using our <Link href="/tools/metadata-cleaner" className="text-blue-500 underline">PDF Metadata Cleaner</Link> or the <Link href="/tools/message-encryptor" className="text-blue-500 underline">Message Encryptor</Link>, the data is processed in volatile RAM and is never committed to a persistent database. Once your browser session ends, the memory is purged entirely.
            </p>
          </section>
  
          {/* Tool Breakdown */}
          <section className="space-y-8">
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 border-l-4 border-blue-500 pl-4">Tool Logic & Specifications</h2>
            
            {/* Career & Data */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Career & Professional Growth</h3>
              <p>
                The <Link href="/tools/resume-scanner" className="text-blue-500 underline">ATS Resume Scanner</Link> uses a weighted semantic matching algorithm. It doesn&apos;t just look for words; it analyzes keyword proximity and structural headers to ensure your CV is readable by automated recruitment systems.
              </p>
            </div>

            {/* Imaging & Design */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Visual & Design Utilities</h3>
              <p>
                Our imaging suite includes the <Link href="/tools/passport-photo" className="text-blue-500 underline">Passport Photo Maker</Link> for standardized visa photos, and the <Link href="/tools/color-palette" className="text-blue-500 underline">AI Color Palette Extractor</Link> which uses color quantization logic to find dominant hex codes. 
              </p>
              <p>
                For creators and developers, we provide the <Link href="/tools/code-to-image" className="text-blue-500 underline">Code to Image</Link> generator for aesthetic snippets, the <Link href="/tools/privacy-blur" className="text-blue-500 underline">Privacy Blur</Link> tool for redacting sensitive info, and the <Link href="/tools/safe-zone-checker" className="text-blue-500 underline">Social Media Safe Zone</Link> checker to ensure your banners look perfect on all devices.
              </p>
            </div>

            {/* Developer & Logic */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Developer & Logic Tools</h3>
              <p>
                To speed up documentation, our <Link href="/tools/sql-mermaid" className="text-blue-500 underline">SQL to Mermaid</Link> tool parses SQL schemas into visual ER diagrams. Additionally, our <Link href="/tools/price-comparison" className="text-blue-500 underline">Price Comparison</Link> calculator uses high-precision unit conversion math to help you make smarter purchasing decisions.
              </p>
            </div>
          </section>
  
          {/* Disclaimer */}
          <section className="space-y-4 border-t border-slate-100 dark:border-slate-800 pt-8">
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 border-l-4 border-blue-500 pl-4">Reliability & Ethics</h2>
            <p>
              I personally oversee the logic updates of these tools to stay compliant with changing industry standards (like official visa sizes or ATS updates). However, these utilities are intended to be professional aids. 
            </p>
            <p>
              By using xdevutilities, you acknowledge that final decisions in critical processes (like hiring or government applications) rest with human authorities. For more details on legalities, please review our <Link href="/legal/terms" className="text-blue-500 underline">Terms of Service</Link>.
            </p>
          </section>
        </div>
      </div>
    );
}