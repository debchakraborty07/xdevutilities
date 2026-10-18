// src/app/legal/aboutus/page.jsx

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Cpu,
  Layers,
  HeartHandshake,
  ArrowRight,
  Code2,
  Lock,
} from "lucide-react";

export const metadata = {
  title: "About Us | Engineering Principles & Mission | xdevutilities",
  description:
    "Learn about xdevutilities, founded and maintained by Debojyoti Chakraborty. Discover our stateless security architecture, no-bloat web utilities, and ethical ad-supported model.",
  alternates: {
    canonical: "https://www.xdevutilities.com/legal/aboutus",
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-16 sm:py-24 max-w-4xl min-h-screen text-foreground bg-background font-sans">

      {/* Header / Hero */}
      <header className="space-y-4 mb-14 border-b border-border pb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
          <Code2 size={13} />
          <span>Independent Developer Utility Suite</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          Building tools that respect <br />
          <span className="text-blue-500">your privacy and your time.</span>
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed max-w-3xl">
          xdevutilities is an independent software project founded and maintained by{" "}
          <strong className="text-foreground">Debojyoti Chakraborty</strong>, engineered to deliver fast, focused, and stateless digital utilities without intrusive subscriptions, data logging, or client tracking.
        </p>
      </header>

      {/* Main Content Body */}
      <div className="space-y-12 text-[15px] sm:text-[16px] text-muted-foreground leading-relaxed">

        {/* Section 1: The Problem & Origin */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground border-l-4 border-blue-500 pl-4">
            Why xdevutilities Exists
          </h2>
          <p>
            Every modern digital workflow requires small, repetitive tasks: redacting confidential details on a screenshot, converting SQL schemas into diagrams, stripping tracking metadata from PDFs, or formatting a passport-compliant photo.
          </p>
          <p>
            Unfortunately, the modern web has turned these simple operations into a frustrating ordeal. Most free utility websites enforce mandatory account signups, slow down devices with dozens of background analytics trackers, or worse—silently persist and harvest user files on remote servers to commercialize the metadata.
          </p>
          <p>
            xdevutilities was built to dismantle that compromise. We believe web software should function like native command-line utilities: you give it an input, it processes the task instantly, and it gives you the result without asking for your personal identity or retaining your files.
          </p>
        </section>

        {/* Section 2: Core Engineering Pillars */}
        <section className="space-y-5 p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm not-prose">
          <div className="flex items-center gap-2.5">
            <ShieldCheck size={22} className="text-emerald-500" />
            <h2 className="text-xl font-bold text-foreground">
              Our Core Engineering Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-muted/30 border border-border space-y-2">
              <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                <Lock size={15} className="text-blue-500" /> Zero Persistent Storage
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Files are never written to permanent disk storage or database pools. Processing occurs strictly inside temporary memory buffers and vanishes upon completion.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-muted/30 border border-border space-y-2">
              <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                <Cpu size={15} className="text-indigo-500" /> Client-First Processing
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Whenever technically possible, operations (such as redactions and canvas drawing) run directly inside your browser using HTML5 Canvas standards to avoid network transit.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-muted/30 border border-border space-y-2">
              <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                <Layers size={15} className="text-purple-500" /> Transparent Operations
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Every buffer limit, supported format, and processing constraint is publicly documented in our Help Center and Diagnostic guides.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Technical Architecture & The Stateless Model */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground border-l-4 border-blue-500 pl-4">
            The &quot;Stateless&quot; Processing Architecture
          </h2>
          <p>
            Unlike traditional cloud conversion suites that stage uploaded documents inside cloud storage buckets (like Amazon S3 or Google Cloud Storage) for 24–48 hours, xdevutilities operates an ephemeral execution model:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
            <li>
              <strong>Client-Side Canvas Tools (e.g., Privacy Blur, Social Media Safe Zone):</strong> Image data never leaves your device. Redaction and pixel manipulation happen locally inside your browser via the HTML5 2D Canvas context.
            </li>
            <li>
              <strong>Stateless Backend Services (e.g., PDF Metadata Cleaner, ATS Parser):</strong> Payloads reside in temporary, volatile RAM buffers only during the execution cycle. The moment the HTTP response terminates, garbage collection clears the memory.
            </li>
            <li>
              <strong>Zero Database Backups:</strong> We do not log, catalog, or archive user-submitted files. There is nothing to export, inspect, or delete after your session ends.
            </li>
          </ul>
        </section>

        {/* Section 4: What We Offer (Our Tool Suites) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground border-l-4 border-blue-500 pl-4">
            Current Tool Suites
          </h2>
          <p>
            Every utility on the platform is maintained to meet a strict &quot;No-Bloat&quot; standard—clean interfaces with predictable inputs and outputs:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="p-3.5 rounded-xl border border-border bg-card">
              <strong className="text-foreground block mb-0.5">Developer Utilities</strong>
              <span>Convert raw SQL DDL schemas into structured Mermaid diagrams for clean documentation.</span>
            </div>
            <div className="p-3.5 rounded-xl border border-border bg-card">
              <strong className="text-foreground block mb-0.5">Privacy & Document Sanitization</strong>
              <span>Scrub hidden metadata from PDF documents and redact sensitive UI elements on images locally.</span>
            </div>
            <div className="p-3.5 rounded-xl border border-border bg-card">
              <strong className="text-foreground block mb-0.5">Media & Biometrics</strong>
              <span>Standardize portraits to passport and visa compliance specifications with precise cropping controls.</span>
            </div>
            <div className="p-3.5 rounded-xl border border-border bg-card">
              <strong className="text-foreground block mb-0.5">Career & Analysis</strong>
              <span>Scan resume PDFs against applicant tracking standards with stateless structural parsing.</span>
            </div>
          </div>
        </section>

        {/* Section 5: Sustainability & Monetization (AdSense Compliant) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground border-l-4 border-blue-500 pl-4">
            How xdevutilities Is Sustained
          </h2>
          <p>
            Maintaining high-uptime infrastructure, bandwidth, and fast containerized execution environments requires recurring cloud hosting investments. Rather than locking tools behind monthly recurring subscriptions or selling user data to third parties, xdevutilities is funded through non-intrusive contextual advertising via Google AdSense.
          </p>
          <p>
            We strictly enforce that advertisements must never obstruct essential tool controls, manipulate click behavior, or compromise device performance. This balanced monetization allows independent creators and developers worldwide to access premium utilities completely free of charge.
          </p>
        </section>

        {/* Section 6: Governance, Standards & Contact */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground border-l-4 border-blue-500 pl-4">
            Commitment to Openness & Accountability
          </h2>
          <p>
            As a developer-led initiative, we believe that accountability matters. If you encounter an unexpected parsing bug, want to request support for a specific SQL dialect, or wish to review our legal operational policies, explore our open resources:
          </p>
          <div className="flex flex-wrap gap-3 pt-1 text-sm font-medium">
            <Link href="/resources/help-center" className="text-blue-500 hover:underline">
              Help Center & Diagnostics
            </Link>
            <span className="text-border">•</span>
            <Link href="/legal/privacy" className="text-blue-500 hover:underline">
              Privacy Policy
            </Link>
            <span className="text-border">•</span>
            <Link href="/legal/terms" className="text-blue-500 hover:underline">
              Terms of Service
            </Link>
            <span className="text-border">•</span>
            <Link href="/legal/contact" className="text-blue-500 hover:underline">
              Direct Contact Desk
            </Link>
          </div>
        </section>

        {/* Final Community CTA Box */}
        <section className="p-8 sm:p-10 rounded-3xl bg-muted/40 border border-border text-center space-y-4 not-prose">
          <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary">
            <HeartHandshake size={24} />
          </div>
          <h3 className="text-xl font-bold text-foreground">
            Built for the Community, Refined by Feedback
          </h3>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Have a suggestion for a new utility, spotted a performance bottleneck, or need help troubleshooting an edge case? Inquiries are directly reviewed by the maintainer.
          </p>
          <div className="pt-2">
            <Link
              href="/legal/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-xl text-xs font-semibold shadow-sm hover:opacity-90 transition-all active:scale-[0.98]"
            >
              <span>Get in Touch with Debojyoti</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}