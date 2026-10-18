// src/app/resources/usage-guide/page.jsx

import React from "react";
import Link from "next/link";
import {
  FileText,
  Camera,
  Palette,
  Database,
  ShieldCheck,
  Code2,
  Lock,
  Calculator,
  EyeOff,
  Layout,
  HelpCircle,
  ExternalLink,
  Sparkles,
  ArrowRight
} from "lucide-react";

export const metadata = {
  title: "Mastering xdevutilities: The Complete Technical Usage Guide | xdevutilities",
  description: "A comprehensive 2,100-word operational manual and step-by-step engineering guidelines for mastering all 10 privacy-first utilities on xdevutilities.",
  alternates: {
    canonical: "https://www.xdevutilities.com/resources/usage-guide",
  },
  openGraph: {
    title: "Mastering xdevutilities: The Complete Technical Usage Guide",
    description: "Learn how to optimize workflows using stateless resume scanning, AES-256 message locking, image redaction, and SQL diagram generation.",
    url: "https://www.xdevutilities.com/resources/usage-guide",
    siteName: "xdevutilities",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mastering xdevutilities: The Complete Technical Usage Guide",
    description: "Learn how to optimize workflows using stateless resume scanning, AES-256 message locking, image redaction, and SQL diagram generation.",
  },
};

export default function UsageGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Mastering xdevutilities: The Complete Technical Usage Guide",
    "description": "An exhaustive engineering manual detailing operational workflows, input constraints, and execution mechanics for 10 developer and creative utilities.",
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

        {/* Page Header */}
        <header className="space-y-4 mb-16 border-b border-border pb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            <Sparkles size={13} />
            <span>Platform Documentation & Manual</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-foreground leading-[1.1]">
            Mastering xdevutilities: A Step-by-Step Technical Guide
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed max-w-3xl">
            Welcome to the official technical manual for xdevutilities. This comprehensive documentation outlines optimal input configurations, processing specifications, and architectural safeguards across all ten developer and creative utilities.
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs text-muted-foreground font-medium">
            <span>Author: <strong>Debojyoti Chakraborty</strong></span>
            <span>•</span>
            <span>Updated: October 2026</span>
            <span>•</span>
            <span>Comprehensive Reference (2,100 Words)</span>
          </div>
        </header>

        {/* Content Body */}
        <div className="space-y-16 text-slate-700 dark:text-slate-300 leading-relaxed text-base">

          {/* Section 1: ATS Resume Scanner */}
          <section className="space-y-4 p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-500/10 text-blue-500 rounded-xl border border-blue-500/20">
                <FileText size={20} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                1. Optimizing Career Assets with the <Link href="/tools/resume-scanner" className="text-blue-500 hover:underline">ATS Resume Scanner</Link>
              </h2>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Enterprise recruiting infrastructures utilize Applicant Tracking Systems (ATS) to filter candidate pipelines via Natural Language Processing (NLP) parsing engines. Our tool provides two analytical passes: a standalone document structural health check and a targeted semantic match against specific job descriptions.
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider text-[11px]">Operational Execution Protocol:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li><strong>Vector Text Layer Verification:</strong> Upload strictly text-selectable PDF documents under 5MB. Flattened raster scans (such as camera photos of printed paper or Canva vector graphics without embedded fonts) will return empty extraction buffers.</li>
                <li><strong>Targeted Job Description Injection:</strong> Paste the full, unedited technical requirements section from the target employer. Our parser extracts hard skill tokens, methodologies, and framework requirements.</li>
                <li><strong>Iterative Score Calibration:</strong> The engine generates an ATS Score out of 100. Review the &quot;Targeted Improvements&quot; panel for missing semantic keywords. Integrate these terms naturally into your bullet points alongside quantifiable outcomes and re-scan until reaching a score of 80% or higher.</li>
              </ul>
            </div>
          </section>

          {/* Section 2: Passport Photo Maker */}
          <section className="space-y-4 p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-500/10 text-emerald-500 rounded-xl border border-emerald-500/20">
                <Camera size={20} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                2. Biometric Standardization via <Link href="/tools/passport-photo" className="text-emerald-600 dark:text-emerald-400 hover:underline">Passport Photo Maker</Link>
              </h2>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Government visa applications and biometric border verification portals enforce strict compliance with International Civil Aviation Organization (ICAO Doc 9303) specifications. Our utility standardizes head-to-canvas geometry automatically.
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider text-[11px]">Studio Calibration Standards:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li><strong>Photometric Lighting Setup:</strong> Position yourself directly facing a diffused natural light source (e.g., a large window during daylight). Avoid direct camera flashes or unilateral overhead lamps that cast harsh shadows under the jawline or behind the ears.</li>
                <li><strong>Backdrop Separation:</strong> Stand approximately 1 meter (3 feet) in front of an untextured, matte white or off-white wall to eliminate cast body shadows. Wear dark clothing to establish clean shoulder edge contrast.</li>
                <li><strong>Lens Perspective Correction:</strong> Never capture handheld front-camera selfies at close range, as 24mm smartphone lenses cause barrel distortion that enlarges the nose and recedes the ears. Place your phone at eye level 2 meters away and use 2x zoom.</li>
                <li><strong>Digital Output Specifications:</strong> The tool generates a standard 300x300 pixel digital JPEG crop with centered eye-axis alignment, ready for online government portals.</li>
              </ul>
            </div>
          </section>

          {/* Section 3: AI Color Palette Extractor */}
          <section className="space-y-4 p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-500/10 text-indigo-500 rounded-xl border border-indigo-500/20">
                <Palette size={20} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                3. Harmonic Theme Extraction with <Link href="/tools/color-palette" className="text-indigo-500 hover:underline">AI Color Palette</Link>
              </h2>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Automating color harmony from inspirational photography eliminates subjective guesswork in frontend design systems. Our engine employs Color Quantization clustering to isolate mathematically balanced chromatic profiles.
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider text-[11px]">Workflow & Mathematical Implementation:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li><strong>Asset Input Selection:</strong> Upload high-resolution JPEG, PNG, or WEBP images under 5MB. Cinematic stills, balanced landscapes, and architectural photography yield the most harmonic distributions.</li>
                <li><strong>Clustering Mechanics:</strong> The underlying algorithm models pixel coordinates across three-dimensional Euclidean color space, clustering similar tones and discarding transient noise artifacts to extract five dominant hex codes.</li>
                <li><strong>The 60-30-10 UI Mapping:</strong> Apply extracted codes according to proven architectural rules: allocate 60% of viewport area to your dominant neutral canvas, 30% to structural containers and text, and 10% strictly to primary conversion accents and CTA buttons.</li>
              </ul>
            </div>
          </section>

          {/* Section 4: SQL to Mermaid Diagram */}
          <section className="space-y-4 p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-amber-500/10 text-amber-500 rounded-xl border border-amber-500/20">
                <Database size={20} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                4. Declarative Schema Mapping with <Link href="/tools/sql-mermaid" className="text-amber-600 dark:text-amber-400 hover:underline">SQL to Mermaid</Link>
              </h2>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Manual database diagramming leads to documentation drift as database migrations deploy to production. Our utility parses raw SQL Data Definition Language (DDL) scripts directly into declarative Mermaid.js markdown and scalable SVG vector graphics.
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider text-[11px]">Compilation Guidelines:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li><strong>Supported Syntax Dialects:</strong> Input standard <code>CREATE TABLE</code> statements. The parser supports PostgreSQL, MySQL, SQLite, and Microsoft SQL Server dialect specifications.</li>
                <li><strong>Constraint Structure:</strong> Ensure individual column statements declare explicit primary keys (<code>PRIMARY KEY</code>) and foreign key references (<code>REFERENCES table(id)</code>) to enable automated Crow&apos;s Foot cardinality mapping.</li>
                <li><strong>Documentation Integration:</strong> Export the compiled schema as a lossless SVG vector file for infinite resolution zooming in developer wikis or commit the declarative Mermaid markdown directly into GitHub README documents.</li>
              </ul>
            </div>
          </section>

          {/* Section 5: PDF Metadata Cleaner */}
          <section className="space-y-4 p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-rose-500/10 text-rose-500 rounded-xl border border-rose-500/20">
                <ShieldCheck size={20} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                5. Binary Document Sanitization with <Link href="/tools/metadata-cleaner" className="text-rose-500 hover:underline">Metadata Cleaner</Link>
              </h2>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Exported PDF files carry hidden binary metadata dictionaries detailing operating system usernames, software builds, and chronological editing histories. Our tool performs destructive sterilization without altering visible page layouts.
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider text-[11px]">Sanitization Specifications:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li><strong>Purged Data Vectors:</strong> The engine traverses the PDF binary stream, nullifying the trailer <code>/Info</code> dictionary (Author, Creator, Producer) and decoupling the Adobe Extensible Metadata Platform (XMP) XML data stream.</li>
                <li><strong>Ephemeral Memory Execution:</strong> Files under 15MB are processed statelessly in volatile RAM buffers. No document payload is ever written to disk or recorded in persistent logging infrastructure.</li>
                <li><strong>Post-Sanitization Audit:</strong> Open your sanitized PDF in any web browser and press <code>Ctrl+D</code> (or <code>Cmd+D</code>) to inspect Document Properties. Confirm that author, software generator, and creation timestamps display as completely blank.</li>
              </ul>
            </div>
          </section>

          {/* Section 6: Code to Image Converter */}
          <section className="space-y-4 p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-500/10 text-blue-500 rounded-xl border border-blue-500/20">
                <Code2 size={20} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                6. High-DPI Code Presentation with <Link href="/tools/code-to-image" className="text-blue-500 hover:underline">Code to Image</Link>
              </h2>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Copy-pasting raw text into social media feeds or technical newsletters strips indentation and lexical tokenization. Our renderer converts source code into 3x Retina-ready graphic containers.
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider text-[11px]">Visual Ergonomics Protocol:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li><strong>Compiler Grammar Selection:</strong> Select the matching language (JavaScript, TypeScript, Python, JSX, CSS) to trigger Prism.js lexical tokenization and proper keyword contrast.</li>
                <li><strong>Container Padding & Line Constraint:</strong> Limit snippets to 15–20 lines of core logic. Maintain 24px of internal padding around the macOS terminal window shell to avoid cramped visual density.</li>
                <li><strong>Retina Resolution Supersampling:</strong> The canvas compiler outputs PNGs at triple pixel density (<code>pixelRatio: 3</code>), ensuring text edges and brackets remain razor-sharp when pinch-zoomed on mobile AMOLED screens.</li>
              </ul>
            </div>
          </section>

          {/* Section 7: Private Message Encryptor */}
          <section className="space-y-4 p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-500/10 text-indigo-500 rounded-xl border border-indigo-500/20">
                <Lock size={20} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                7. Symmetric Confidentiality via <Link href="/tools/message-encryptor" className="text-indigo-500 hover:underline">Message Encryptor</Link>
              </h2>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Standard email channels and cloud chat tools retain unencrypted database copies of sensitive text. Our encryptor converts plain text into industrial-grade AES-256 ciphertext prior to network transmission.
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider text-[11px]">Cryptographic Transmission Hygiene:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li><strong>Key Derivation & Entropy:</strong> Enter your secret note and create a high-entropy passphrase (minimum 12–16 characters including symbols). The engine executes symmetric AES-256 bit block encryption with zero server logging.</li>
                <li><strong>Zero-Backdoor Responsibility:</strong> Because no encryption keys or plaintext messages are stored in any database, lost passphrases cannot be recovered by anyone. Store your passphrase securely.</li>
                <li><strong>Out-of-Band (OOB) Sharing:</strong> Transmit the ciphertext via public channels (email, Slack, Discord), but convey the secret passphrase through an independent secondary medium (e.g., an encrypted Signal message or a verbal phone call).</li>
              </ul>
            </div>
          </section>

          {/* Section 8: Smart Fair Price Estimator */}
          <section className="space-y-4 p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-500/10 text-emerald-500 rounded-xl border border-emerald-500/20">
                <Calculator size={20} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                8. Auditing Retail Margins with <Link href="/tools/price-comparison" className="text-emerald-600 dark:text-emerald-400 hover:underline">Fair Price Estimator</Link>
              </h2>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Retailers frequently package items in odd fractional quantities (e.g., 340g or 925ml) to disrupt consumer mental division and mask shrinkflation. Our dimensional calculator computes the exact base-unit market value.
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider text-[11px]">Dimensional Calculation Logic:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li><strong>Reference Baseline Anchor:</strong> Input the standard price and quantity of an established benchmark (e.g., $12.00 for a standard 1kg packet).</li>
                <li><strong>Target Quantity Specification:</strong> Enter the loose or irregular portion you intend to purchase (e.g., 320 grams). The engine applies dimensional unit multipliers to establish the exact proportional fair cost.</li>
                <li><strong>Markup & Shrinkflation Verdict:</strong> Input the vendor&apos;s actual asking price. The tool delivers an instant verdict indicating whether you are saving money or paying an inflated retail markup.</li>
              </ul>
            </div>
          </section>

          {/* Section 9: Privacy Blur Redactor */}
          <section className="space-y-4 p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-rose-500/10 text-rose-500 rounded-xl border border-rose-500/20">
                <EyeOff size={20} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                9. Irreversible Screenshot Sanitization with <Link href="/tools/privacy-blur" className="text-rose-500 hover:underline">Privacy Blur</Link>
              </h2>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Standard mobile pen markups often create semi-transparent alpha overlays that can be reversed by adjusting exposure levels in photo editors. Our utility physically overwrites pixel buffers using client-side HTML5 Canvas manipulation.
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider text-[11px]">Four Professional Redaction Modes:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li><strong>Auto Match (Magic Erase):</strong> Samples perimeter pixels situated 3px outside your selection box and floods the area with the identical background tone, making sensitive text disappear seamlessly into UI containers.</li>
                <li><strong>Discrete Pixelate (Mosaic):</strong> Scales the selection down and redraws it without image smoothing, creating crisp, high-tech mosaic censorship blocks ideal for developer feeds.</li>
                <li><strong>Soft Curved Blur:</strong> Applies an 18px Gaussian blur kernel framed with rounded corners, blending smoothly without harsh rectangular cuts.</li>
                <li><strong>Solid Blackout:</strong> Overwrites bytes with pure <code>#000000</code> black for zero-entropy legal and financial document sanitization.</li>
              </ul>
            </div>
          </section>

          {/* Section 10: Social Media Safe Zone Checker */}
          <section className="space-y-4 p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-500/10 text-blue-500 rounded-xl border border-blue-500/20">
                <Layout size={20} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                10. Responsive Layout Modeling via <Link href="/tools/safe-zone-checker" className="text-blue-500 hover:underline">Safe Zone Checker</Link>
              </h2>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Social networks apply CSS <code>object-fit: cover</code> rules across dynamic breakpoints, shearing up to 35% of banner margins on mobile devices while floating profile avatars obscure the lower quadrants.
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider text-[11px]">Cross-Platform Boundary Rules:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li><strong>LinkedIn Cover Art (1584x396px):</strong> The circular profile bubble obstructs the lower-left area on mobile and desktop. Always anchor essential headlines and logos inside the right 60% of the canvas.</li>
                <li><strong>YouTube Channel Banners (2560x1440px):</strong> While smart TVs render the full 1440px height, mobile and desktop viewports crop to the central 1546x423 pixel safe band. Keep all messaging within this inner rectangle.</li>
                <li><strong>Circular Profile Inscription:</strong> When uploading square 400x400px profile avatars, ensure critical logos fit within the inscribed circle radius (inner 70.7% of the square width) to prevent clipped corners.</li>
              </ul>
            </div>
          </section>

          {/* Platform Architecture & Troubleshooting */}
          <section className="space-y-4 p-6 sm:p-8 rounded-3xl bg-muted/40 border border-border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-primary/10 text-primary rounded-xl border border-primary/20">
                <HelpCircle size={20} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Platform Architecture & Technical Troubleshooting
              </h2>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Every utility on xdevutilities adheres to strict stateless execution standards. If you encounter unexpected browser behavior, verify these common operational parameters:
            </p>

            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li><strong>Local Storage & Memory Allocation:</strong> If high-resolution image rendering or canvas redaction stutters, ensure your browser has hardware acceleration enabled in settings.</li>
              <li><strong>Ad-Blocker & Script Ingestion:</strong> Our tools require zero third-party tracking scripts to function. However, overly aggressive browser extensions that block WebAssembly or HTML5 Canvas can interfere with local operations.</li>
              <li><strong>Direct Technical Support:</strong> If you identify a reproducible bug, dialect parsing limitation, or have a feature request for a new developer utility, contact the maintainer directly at our <Link href="/legal/contact" className="text-blue-500 hover:underline font-semibold">Contact & Support Portal</Link>. Inquiries are typically reviewed within 24–48 hours.</li>
            </ul>
          </section>

        </div>
      </div>
    </>
  );
}