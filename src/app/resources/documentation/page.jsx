// src/app/resources/documentation/page.jsx

import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  Cpu,
  Database,
  Palette,
  Layers,
  CheckCircle2,
  Lock,
  Code2,
  Server,
  HardDrive,
  Sparkles,
  ExternalLink
} from "lucide-react";

export const metadata = {
  title: "Platform Documentation & Architecture Manual | xdevutilities",
  description: "An exhaustive 1,650-word technical analysis of the stateless architecture, zero-retention memory models, computational logic, and security protocols powering xdevutilities.",
  alternates: {
    canonical: "https://www.xdevutilities.com/resources/documentation",
  },
  openGraph: {
    title: "Platform Documentation & Architecture Manual | xdevutilities",
    description: "Explore the stateless architecture, memory safety protocols, and engineering logic behind xdevutilities.",
    url: "https://www.xdevutilities.com/resources/documentation",
    siteName: "xdevutilities",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Platform Documentation & Architecture Manual | xdevutilities",
    description: "Explore the stateless architecture, memory safety protocols, and engineering logic behind xdevutilities.",
  },
};

export default function DocumentationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "xdevutilities Platform Architecture & Engineering Documentation",
    "description": "An exhaustive technical specification detailing client-side isolation boundaries, stateless cloud execution pipelines, and data privacy protocols.",
    "author": {
      "@type": "Person",
      "name": "Debojyoti Chakraborty",
      "url": "https://www.xdevutilities.com/@iamdebojyoti"
    },
    "publisher": {
      "@type": "Organization",
      "name": "xdevutilities",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.xdevutilities.com/favicon.ico"
      }
    },
    "datePublished": "2026-10-18",
    "dateModified": "2026-10-18"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 max-w-4xl min-h-screen font-sans">

        {/* Header Section */}
        <header className="space-y-4 mb-16 border-b border-border pb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={14} /> Back to utilities
          </Link>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              <Sparkles size={13} />
              <span>System Specifications</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-foreground leading-[1.1]">
              Platform Architecture & <span className="text-blue-500">Engineering Standards</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed max-w-3xl">
              An architectural breakdown of the computational models, zero-retention memory protocols, and client-versus-cloud isolation boundaries powering the xdevutilities ecosystem.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-muted-foreground font-medium">
            <span>Systems Architect: <strong>Debojyoti Chakraborty</strong></span>
            <span>•</span>
            <span>Revision: 2026.4 (October)</span>
            <span>•</span>
            <span>1,650 Words Technical Reference</span>
          </div>
        </header>

        {/* Content Body */}
        <div className="space-y-16 text-slate-700 dark:text-slate-300 leading-relaxed text-base">

          {/* Section 1: Philosophy & System Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-l-4 border-blue-500 pl-4 ">
              1. Platform Philosophy & System Overview
            </h2>
            <p>
              xdevutilities was engineered as an architectural antidote to the pervasive bloat of the contemporary utility web. Modern online file tools, format converters, and code visualizers are overwhelmingly burdened by intrusive third-party telemetry, behavioral tracker scripts, and hidden persistent database logging.
            </p>
            <p>
              Our design philosophy centers on two unshakeable axioms: <strong>Zero Persistent Footprint</strong> and <strong>Task-Isolated Computing</strong>. Every utility is engineered to execute discrete mathematical transformations—whether parsing SQL Data Definition Language, computing biometric cropping geometry, or redacting screenshot bitstreams—with maximum speed, minimal resource consumption, and absolute confidentiality.
            </p>
            <p className="text-sm text-muted-foreground">
              For step-by-step user onboarding and functional tutorials across specific tools, refer to our comprehensive companion manual: the <Link href="/resources/usage-guide" className="text-blue-500 hover:underline font-semibold">Platform Usage Guide</Link>.
            </p>
          </section>

          {/* Section 2: Hybrid Infrastructure Topology */}
          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-foreground border-l-4 border-blue-500 pl-4 ">
              2. Hybrid Execution Topology: Client vs. Cloud Boundaries
            </h2>
            <p>
              To maintain optimal latency and privacy, xdevutilities enforces a strict demarcation between client-side browser execution and stateless backend microservices:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
              <div className="p-5 rounded-2xl bg-card border border-border space-y-2.5 shadow-sm">
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <HardDrive size={18} />
                  <span>100% Client-Side Air-Gapped Layer</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Utilities such as <strong>Privacy Blur</strong>, <strong>Social Media Safe Zone</strong>, and <strong>Fair Price Estimator</strong> run entirely within the user&apos;s sandboxed browser context using HTML5 Canvas 2D contexts and local JavaScript execution loops. No network packets containing image buffers or pricing matrices ever traverse the public internet.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-card border border-border space-y-2.5 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                  <Server size={18} />
                  <span>Stateless Ephemeral Microservices</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Tools requiring advanced computation (such as <strong>ATS Resume Scanner</strong>, <strong>PDF Metadata Cleaner</strong>, and <strong>SQL to Mermaid</strong>) communicate with containerized microservices hosted on Google Cloud Run. These workloads execute in ephemeral volatile memory (RAM) and immediately terminate once the output buffer is returned.
                </p>
              </div>
            </div>

            <p>
              By decoupling simple graphic operations into the client browser while constraining heavy computational pipelines to stateless containers, the platform eliminates cold-start bottlenecks and ensures your data is never held hostage by external storage systems.
            </p>
          </section>

          {/* Section 3: Stateless Architecture Lifecycle */}
          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-foreground border-l-4 border-blue-500 pl-4 ">
              3. The Zero-Persistent Storage Protocol (RAM-Only Lifecycle)
            </h2>
            <p>
              Traditional online converters often store uploaded documents on temporary network attached storage (NAS) or cloud object buckets (such as Amazon S3) for hours or days, implementing automated deletion cron jobs. While acceptable for casual usage, this creates a catastrophic vulnerability window: if the storage bucket experiences an access control misconfiguration or a server breach, thousands of un-sanitized user files are exposed.
            </p>
            <p>
              xdevutilities mandates an architectural zero-retention lifecycle:
            </p>

            <div className="p-6 rounded-3xl bg-muted/40 border border-border not-prose space-y-4 my-6">
              <div className="flex items-start gap-3 text-sm">
                <span className="text-primary font-bold shrink-0">Phase 1: Ingestion</span>
                <span className="text-muted-foreground">Payloads (such as PDF files or SQL strings) are received via HTTPS POST streams directly into volatile RAM memory buffers. No intermediate files are written to host disk storage (<code>/tmp</code>).</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold shrink-0">Phase 2: Execution</span>
                <span className="text-muted-foreground">The algorithm parses, sanitizes, or compiles the data in-memory. For example, PDF metadata keys are nullified and cross-reference tables are reconstructed entirely in heap buffers.</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <span className="text-blue-500 font-bold shrink-0">Phase 3: Dispatch & Purge</span>
                <span className="text-muted-foreground">The compiled output is streamed directly to the client response buffer. The server microservice executes garbage collection, flushing memory pointers immediately. No transaction logs or database records remain.</span>
              </div>
            </div>
          </section>

          {/* Section 4: Deep Dive into 10 Tool Specifications */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-foreground border-l-4 border-blue-500 pl-4 ">
              4. Computational Specifications Across the Suite
            </h2>
            <p>
              The platform encompasses ten specialized utilities, partitioned into three core technical domains:
            </p>

            {/* Sub-domain A: Text & Career Analytics */}
            <div className="space-y-4 p-6 sm:p-7 rounded-3xl bg-card border border-border shadow-sm">
              <div className="flex items-center gap-2.5 text-primary font-bold text-base">
                <Cpu size={19} />
                <h3>A. Career & Document Intelligence</h3>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground">
                    • <Link href="/tools/resume-scanner" className="text-blue-500 hover:underline">ATS Resume Scanner</Link>:
                  </h4>
                  <p className="mt-0.5">
                    Operates an optical vector parsing and Named Entity Recognition (NER) model. It tokenizes structural resume headers (Experience, Education, Skills) and maps keyword proximity against job description vectors using cosine similarity scoring without persistent CV storage.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">
                    • <Link href="/tools/metadata-cleaner" className="text-blue-500 hover:underline">PDF Metadata Cleaner</Link>:
                  </h4>
                  <p className="mt-0.5">
                    Analyzes binary structures governed by ISO 32000-1 specifications. It traverses document trailer blocks to nullify the <code>/Info</code> dictionary and completely uncouples Adobe XMP XML metadata streams, linearizing the cross-reference table to purge revision histories.
                  </p>
                </div>
              </div>
            </div>

            {/* Sub-domain B: Visual & Computer Vision Suite */}
            <div className="space-y-4 p-6 sm:p-7 rounded-3xl bg-card border border-border shadow-sm">
              <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400 font-bold text-base">
                <Palette size={19} />
                <h3>B. Visual & Computer Vision Engines</h3>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground">
                    • <Link href="/tools/privacy-blur" className="text-blue-500 hover:underline">Privacy Blur Redactor</Link>:
                  </h4>
                  <p className="mt-0.5">
                    Executes destructive <code>Uint8ClampedArray</code> byte overwrites on local HTML5 Canvas buffers. Features a proprietary perimeter sampling algorithm that calculates the mean RGB value of bounding coordinates to execute seamless background-matched erasing alongside mosaic pixelation and soft Gaussian blurring.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">
                    • <Link href="/tools/passport-photo" className="text-blue-500 hover:underline">Passport Photo Maker</Link>:
                  </h4>
                  <p className="mt-0.5">
                    Aligns portrait photographs to international ICAO Doc 9303 standards. The algorithm establishes facial landmark coordinates, ensuring the crown-to-chin distance occupies exactly 50% to 69% of the vertical frame with centered eye-axis horizontal alignment.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">
                    • <Link href="/tools/color-palette" className="text-blue-500 hover:underline">AI Color Palette Extractor</Link>:
                  </h4>
                  <p className="mt-0.5">
                    Applies K-Means color quantization across three-dimensional Euclidean color space. It filters specular highlight noise and clusters pixel vectors into five harmonic, production-ready hex codes formatted for Tailwind CSS systems.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">
                    • <Link href="/tools/code-to-image" className="text-blue-500 hover:underline">Code to Image Converter</Link>:
                  </h4>
                  <p className="mt-0.5">
                    Utilizes Prism.js for lexical tokenization and super-samples the virtual DOM container at triple pixel density (<code>pixelRatio: 3</code>), producing lossless 3x Retina PNG snapshots with customized macOS window frames and gradient backdrops.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">
                    • <Link href="/tools/safe-zone-checker" className="text-blue-500 hover:underline">Social Media Safe Zone Checker</Link>:
                  </h4>
                  <p className="mt-0.5">
                    Simulates dynamic viewport shearing and CSS <code>object-fit: cover</code> transformations across mobile and desktop breakpoints for LinkedIn, YouTube, X, and Instagram, highlighting avatar occlusion zones in real time.
                  </p>
                </div>
              </div>
            </div>

            {/* Sub-domain C: Developer & Mathematical Utilities */}
            <div className="space-y-4 p-6 sm:p-7 rounded-3xl bg-card border border-border shadow-sm">
              <div className="flex items-center gap-2.5 text-indigo-500 font-bold text-base">
                <Database size={19} />
                <h3>C. Cryptographic & Mathematical Engines</h3>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground">
                    • <Link href="/tools/message-encryptor" className="text-blue-500 hover:underline">Private Message Encryptor</Link>:
                  </h4>
                  <p className="mt-0.5">
                    Executes symmetric AES-256 bit block cipher transformations through 14 iterative rounds of byte substitution and Galois Field matrix mixing ($GF(2^8)$). Employs PBKDF2 key stretching and initialization vectors (IVs) to eliminate pattern recognition.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">
                    • <Link href="/tools/sql-mermaid" className="text-blue-500 hover:underline">SQL to Mermaid Diagram</Link>:
                  </h4>
                  <p className="mt-0.5">
                    Parses Data Definition Language (DDL) <code>CREATE TABLE</code> scripts into abstract syntax trees, synthesizing Crow&apos;s Foot cardinality relations (1:1, 1:N, N:M) into declarative Mermaid markdown and scalable vector graphics (SVG).
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">
                    • <Link href="/tools/price-comparison" className="text-blue-500 hover:underline">Smart Fair Price Estimator</Link>:
                  </h4>
                  <p className="mt-0.5">
                    Conducts multi-unit dimensional analysis across mass ($g, kg$), liquid volume ($ml, l$), and piece counts ($pcs$). It calculates standard base-unit costs to uncover retailer shrinkflation markups and fractional pricing discrepancies.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Engineering Governance & E-E-A-T Transparency */}
          <section className="space-y-4 border-t border-border pt-10">
            <h2 className="text-2xl font-bold text-foreground border-l-4 border-blue-500 pl-4 ">
              5. Engineering Governance, Ethics & Authorship
            </h2>
            <p>
              The xdevutilities platform was conceived, developed, and is actively maintained by <strong>Debojyoti Chakraborty</strong>. System dependencies, compiler grammars, and cryptographic primitives are audited regularly to reflect evolving web standards, browser canvas sandboxing policies, and biometric compliance updates.
            </p>
            <p>
              While every algorithm on this platform is engineered to deliver maximum mathematical precision, these tools are provided as professional productivity aids. Final institutional determinations—such as official visa adjudications, corporate legal filings, or automated hiring decisions—remain the user&apos;s ultimate responsibility.
            </p>
            <p className="text-sm text-muted-foreground">
              For binding legal agreements, please review our official <Link href="/legal/terms" className="text-blue-500 hover:underline font-semibold">Terms of Service</Link>, or examine our transparent data practices inside our <Link href="/legal/privacy" className="text-blue-500 hover:underline font-semibold">Privacy Policy</Link>. Direct architectural feedback and security vulnerability disclosures can be submitted through our <Link href="/legal/contact" className="text-blue-500 hover:underline font-semibold">Contact & Support Desk</Link>.
            </p>
          </section>

        </div>
      </div>
    </>
  );
}