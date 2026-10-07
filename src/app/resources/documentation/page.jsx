// src/app/resources/documentation/page.jsx

import Link from "next/link";
import { ArrowLeft, ShieldCheck, Cpu, Database, Palette, Layers, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Platform Documentation & Architecture | xdevutilities",
  description: "A deep dive into how xdevutilities works: stateless architecture, zero persistent storage, tool logic, and privacy-first engineering.",
  alternates: {
    canonical: "https://www.xdevutilities.com/resources/documentation",
  },
  openGraph: {
    title: "Platform Documentation & Architecture | xdevutilities",
    description: "Explore the stateless architecture, security protocols, and engineering logic behind xdevutilities.",
    url: "https://www.xdevutilities.com/resources/documentation",
    siteName: "xdevutilities",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Platform Documentation & Architecture | xdevutilities",
    description: "Explore the stateless architecture, security protocols, and engineering logic behind xdevutilities.",
  },
};

export default function DocumentationPage() {
  return (
    <div className="container mx-auto px-6 py-16 sm:py-24 max-w-4xl min-h-screen">

      {/* Header Section */}
      <div className="space-y-4 mb-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={14} /> Back to utilities
        </Link>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
          Platform <span className="text-blue-500">Documentation</span>
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed">
          Understanding the stateless architecture, computational logic, and zero-retention security protocols of the xdevutilities ecosystem.
        </p>
      </div>

      <div className="space-y-16 text-slate-600 dark:text-slate-400 leading-relaxed font-normal">

        {/* 1. Introduction */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground border-l-4 border-blue-500 pl-4">
            System Overview
          </h2>
          <p>
            xdevutilities was engineered to provide a clean, distraction-free, and high-performance alternative to the ad-cluttered utility websites of the modern internet. Every tool on this platform is purpose-built to execute focused computing tasks with maximum mathematical precision and zero user tracking.
          </p>
          <p>
            For a step-by-step practical walk-through on how to integrate these tools into your daily workflow, please consult our dedicated <Link href="/resources/usage-guide" className="text-blue-500 hover:underline font-semibold">Usage Guide</Link>.
          </p>
        </section>

        {/* 2. Stateless Architecture */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground border-l-4 border-blue-500 pl-4">
            Stateless Architecture & Data Privacy
          </h2>
          <p>
            Our core processing pipelines adhere strictly to a <strong>&quot;Stateless Execution&quot;</strong> philosophy. We firmly believe that your private credentials, personal documents, and source code belong exclusively to you.
          </p>
          <p>
            Whether you are utilizing our <Link href="/tools/metadata-cleaner" className="text-blue-500 hover:underline font-medium">PDF Metadata Cleaner</Link> or the <Link href="/tools/message-encryptor" className="text-blue-500 hover:underline font-medium">Message Encryptor</Link>, payloads are processed strictly in volatile transient memory (RAM) and are never committed to a persistent database or external logging service. Once the execution completes, the memory allocation is purged immediately.
          </p>
        </section>

        {/* 3. Tool Breakdown */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground border-l-4 border-blue-500 pl-4">
            Tool Logic & Specifications
          </h2>

          {/* Career & Data */}
          <div className="space-y-3 p-6 rounded-2xl bg-card border border-border shadow-sm">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Cpu size={18} className="text-blue-500" /> Career & Text Analytics
            </h3>
            <p className="text-sm">
              The <Link href="/tools/resume-scanner" className="text-blue-500 hover:underline font-medium">ATS Resume Scanner</Link> uses a semantic parsing algorithm that models keyword density, structural headers, and job-description relevance to ensure your CV satisfies modern Applicant Tracking Systems.
            </p>
          </div>

          {/* Imaging & Design */}
          <div className="space-y-3 p-6 rounded-2xl bg-card border border-border shadow-sm">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Palette size={18} className="text-emerald-500" /> Visual & Design Utilities
            </h3>
            <p className="text-sm">
              Our imaging suite features the <Link href="/tools/passport-photo" className="text-blue-500 hover:underline font-medium">Passport Photo Maker</Link> for standardized digital ID cropping, and the <Link href="/tools/color-palette" className="text-blue-500 hover:underline font-medium">AI Color Palette Extractor</Link> which executes color quantization algorithms to isolate balanced harmonic hex codes.
            </p>
            <p className="text-sm">
              For developers and digital creators, we offer the <Link href="/tools/code-to-image" className="text-blue-500 hover:underline font-medium">Code to Image</Link> generator for aesthetic code screenshots, the <Link href="/tools/privacy-blur" className="text-blue-500 hover:underline font-medium">Privacy Blur</Link> tool with HTML5 Canvas auto-background healing, and the <Link href="/tools/safe-zone-checker" className="text-blue-500 hover:underline font-medium">Social Media Safe Zone</Link> checker to prevent UI overlap on responsive feeds.
            </p>
          </div>

          {/* Developer & Logic */}
          <div className="space-y-3 p-6 rounded-2xl bg-card border border-border shadow-sm">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Database size={18} className="text-indigo-500" /> Developer & Logic Engines
            </h3>
            <p className="text-sm">
              To expedite documentation, the <Link href="/tools/sql-mermaid" className="text-blue-500 hover:underline font-medium">SQL to Mermaid</Link> compiler converts standard SQL DDL statements into declarative Mermaid ER diagrams and lossless SVG vectors. Additionally, our <Link href="/tools/price-comparison" className="text-blue-500 hover:underline font-medium">Price Comparison</Link> calculator performs multi-unit dimensional analysis (weight, volume, count) to reveal fractional pricing discrepancies.
            </p>
          </div>
        </section>

        {/* 4. Ethics & Transparency (AdSense E-E-A-T Goldmine) */}
        <section className="space-y-4 border-t border-border pt-10">
          <h2 className="text-2xl font-bold text-foreground border-l-4 border-blue-500 pl-4">
            Reliability & Engineering Ethics
          </h2>
          <p>
            This platform is maintained and actively supervised by <strong>Debojyoti Chakraborty</strong>. Each tool engine is updated periodically to stay in compliance with evolving industry benchmarks, browser canvas specifications, and security practices.
          </p>
          <p>
            Please note that these utilities are provided as professional productivity aids. Final verification for critical institutional submissions (such as government visa portals or employment hiring decisions) remains the user&apos;s responsibility. For comprehensive terms, please review our <Link href="/terms" className="text-blue-500 hover:underline font-semibold">Terms of Service</Link> and <Link href="/privacy-policy" className="text-blue-500 hover:underline font-semibold">Privacy Policy</Link>.
          </p>
        </section>

      </div>
    </div>
  );
}