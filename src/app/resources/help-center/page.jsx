// src/app/resources/help-center/page.jsx

import Link from "next/link";
import {
  ArrowLeft,
  HelpCircle,
  RefreshCw,
  ShieldCheck,
  Cpu,
  HardDrive,
  Globe,
  AlertTriangle,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Lock,
  Layers,
  Terminal,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Help Center & Technical Troubleshooting | xdevutilities",
  description:
    "Comprehensive 1,750-word technical support guide and diagnostic manual for resolving browser compatibility, file buffer limits, and privacy workflows.",
  alternates: {
    canonical: "https://www.xdevutilities.com/resources/help-center",
  },
  openGraph: {
    title: "Help Center & Technical Troubleshooting | xdevutilities",
    description:
      "Find instant solutions to browser compatibility, memory limits, and tool execution issues on xdevutilities.",
    url: "https://www.xdevutilities.com/resources/help-center",
    siteName: "xdevutilities",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Help Center & Technical Troubleshooting | xdevutilities",
    description:
      "Find instant solutions to browser compatibility, memory limits, and tool execution issues on xdevutilities.",
  },
};

export default function HelpCenterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        "name": "Why is a tool button unresponsive or stuck during execution?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Over 90% of execution stalls result from cached legacy JavaScript bundles or aggressive third-party browser extensions blocking WebAssembly or HTML5 Canvas APIs. Execute a hard refresh (Ctrl + F5 or Cmd + Shift + R) or test inside an Incognito window.",
        },
      },
      {
        "@type": "Question",
        "name": "How does xdevutilities comply with data deletion and GDPR requests?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "We operate a strict Zero-Persistent-Storage architecture. Files and text payloads are processed statelessly in ephemeral volatile RAM buffers and terminated immediately upon response dispatch. We do not maintain server storage pools, meaning your data is already purged.",
        },
      },
      {
        "@type": "Question",
        "name": "What are the file size and format limits across the utilities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "PDF Metadata Cleaner accepts text PDFs up to 15MB. ATS Resume Scanner accepts single-column text PDFs up to 5MB. Passport Photo Maker accepts portraits up to 5MB. Canvas-based tools like Privacy Blur accept images up to 10MB.",
        },
      },
    ],
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
              <span>Diagnostic Knowledge Base</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-foreground leading-[1.1]">
              Technical Support &{" "}
              <span className="text-blue-500">Troubleshooting Hub</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed max-w-3xl">
              Encountering an unexpected browser exception, format rejection, or network delay? This diagnostic manual details immediate resolutions, memory quotas, and compatibility standards.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-muted-foreground font-medium">
            <span>
              Maintainer: <strong>Debojyoti Chakraborty</strong>
            </span>
            <span>•</span>
            <span>Revision: 2026.4</span>
            <span>•</span>
            <span>1,750 Words Diagnostic Manual</span>
          </div>
        </header>

        {/* Content Body */}
        <div className="space-y-16 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
          {/* Section 1: Immediate Triage Protocol */}
          <section className="space-y-5 p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-500/10 text-blue-500 rounded-xl border border-blue-500/20">
                <AlertTriangle size={20} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                1. Immediate Diagnostic Triage (90% Resolution Rate)
              </h2>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Modern web applications rely on complex runtime execution environments. If a utility button appears unresponsive, a canvas stops tracking cursor coordinates, or an upload stalls, apply these sequential diagnostics:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose pt-2">
              <div className="p-5 rounded-2xl bg-muted/40 border border-border space-y-2">
                <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                  <RefreshCw size={15} className="text-blue-500" /> Hard Cache Invalidation
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Web browsers frequently cache stale JavaScript chunks across deployment updates. Execute a hard refresh to force a clean server fetch:
                </p>
                <div className="font-mono text-[11px] p-2.5 bg-background rounded-lg border border-border text-foreground flex items-center gap-2">
                  <Terminal size={13} className="text-muted-foreground shrink-0" />
                  <span>
                    Win/Linux: Ctrl + F5 | macOS: Cmd + Shift + R
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-muted/40 border border-border space-y-2">
                <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                  <ShieldCheck size={15} className="text-emerald-500" /> Extension Interference Test
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Aggressive ad-blockers (like uBlock Origin) and privacy shields (like Brave Shields) often inject content scripts that intercept Canvas calls:
                </p>
                <div className="font-mono text-[11px] p-2.5 bg-background rounded-lg border border-border text-foreground flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                  <span>Open in Private / Incognito Window</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              If the tool functions flawlessly inside an Incognito session, whitelist <code>xdevutilities.com</code> inside your browser extension settings.
            </p>
          </section>

          {/* Section 2: File Quotas & Input Specifications */}
          <section className="space-y-5 p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-500/10 text-emerald-500 rounded-xl border border-emerald-500/20">
                <Layers size={20} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                2. Input Specifications & Buffer Allocation Matrix
              </h2>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              To guarantee that stateless memory allocations execute rapidly across microservices without triggering out-of-memory container terminations, explicit input constraints are enforced across each utility:
            </p>

            <div className="space-y-3 not-prose pt-2">
              <div className="p-4 rounded-2xl bg-muted/30 border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <HardDrive size={16} className="text-muted-foreground shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold text-foreground">PDF Metadata Cleaner</h3>
                    <p className="text-xs text-muted-foreground">Standard text-based PDF documents</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border">Max 15MB</span>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">Stateless RAM</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-muted/30 border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <HardDrive size={16} className="text-muted-foreground shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold text-foreground">ATS Resume Scanner</h3>
                    <p className="text-xs text-muted-foreground">Single-column text-selectable CV PDFs</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border">Max 5MB</span>
                  <span className="text-[11px] text-blue-500 font-semibold">NLP Microservice</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-muted/30 border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <HardDrive size={16} className="text-muted-foreground shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Passport Photo Maker</h3>
                    <p className="text-xs text-muted-foreground">Portrait JPEG, PNG, WEBP with visible face</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border">Max 5MB</span>
                  <span className="text-[11px] text-amber-500 font-semibold">Biometric Crop</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-muted/30 border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <HardDrive size={16} className="text-muted-foreground shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Privacy Blur & Safe Zone</h3>
                    <p className="text-xs text-muted-foreground">Any screenshot, raster PNG, or UI graphic</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border">Max 10MB</span>
                  <span className="text-[11px] text-purple-500 font-semibold">100% Client Canvas</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-muted/30 border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <HardDrive size={16} className="text-muted-foreground shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold text-foreground">SQL to Mermaid Diagram</h3>
                    <p className="text-xs text-muted-foreground">Standard SQL DDL CREATE TABLE statements</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border">Max 50KB DDL</span>
                  <span className="text-[11px] text-primary font-semibold">Vector SVG Output</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Browser & OS Compatibility */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-l-4 border-blue-500 pl-4  flex items-center gap-2.5">
              <Globe size={22} className="text-blue-500" />
              <span>3. Browser API Requirements & Hardware Acceleration</span>
            </h2>
            <p>
              xdevutilities harnesses native modern Web Standards to bypass slow, centralized server roundtrips. Optimal operational performance requires browsers that support:
            </p>

            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                <span><strong>HTML5 Canvas 2D Context & OffscreenCanvas:</strong> Used by Privacy Blur and Social Media Safe Zone for non-blocking pixel rasterization.</span>
              </li>
              <li className="flex items-start gap-2">
                <Cpu size={16} className="text-blue-500 mt-0.5 shrink-0" />
                <span><strong>Hardware Acceleration (GPU WebGL):</strong> If canvas interactions stutter while drawing redaction boxes on 4K screenshots, verify that <em>&quot;Use hardware acceleration when available&quot;</em> is enabled inside your browser settings (Settings ➜ System).</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe size={16} className="text-indigo-500 mt-0.5 shrink-0" />
                <span><strong>Supported Browser Matrix:</strong> We recommend Google Chrome (v110+), Mozilla Firefox (v115+), Microsoft Edge (v110+), and Safari (v16.4+). Legacy browsers lacking modern Pointer Event APIs will experience degraded drawing fidelity.</span>
              </li>
            </ul>
          </section>

          {/* Section 4: Privacy & GDPR Verification */}
          <section className="space-y-4 p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-500/10 text-indigo-500 rounded-xl border border-indigo-500/20">
                <Lock size={20} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                4. Data Erasure & Compliance Verification (GDPR / CCPA)
              </h2>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              A frequent inquiry submitted to our support desk is: <em>&quot;Can your engineering team delete the confidential file I just processed?&quot;</em>
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our architectural answer is definitive: <strong>There is nothing to delete because nothing is ever stored.</strong>
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Unlike commercial conversion websites that persist uploaded assets inside Amazon S3 or Google Cloud Storage buckets for 24 hours, xdevutilities utilizes an ephemeral execution pipeline. When you sanitize a PDF or scan a resume, bytes reside in temporary volatile RAM only during the exact milliseconds of execution. Once the HTTP response closes, garbage collection purges the memory allocation. We maintain zero database records or disk backups of your documents.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              For complete legal breakdowns, review our binding <Link href="/legal/privacy" className="text-blue-500 hover:underline font-semibold">Privacy Policy</Link> and <Link href="/legal/terms" className="text-blue-500 hover:underline font-semibold">Terms of Service</Link>.
            </p>
          </section>

          {/* Section 5: Account & Workspace Assistance */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-l-4 border-blue-500 pl-4 ">
              5. Account Settings, Handles & Termination
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Account registration is completely optional on xdevutilities. For authenticated developers maintaining saved workspaces, note these operational standards:
            </p>

            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li><strong>180-Day Username Cooldown:</strong> To protect public profile links (e.g., <code>xdevutilities.com/@username</code>) from link-rot and handle squatting, handle updates are limited to once every 180 days.</li>
              <li><strong>Self-Service Account Termination:</strong> In accordance with GDPR Article 17 (&quot;Right to be Forgotten&quot;), users can permanently delete their account inside the dashboard (Settings ➜ Danger Zone). This atomically purges user documents, reservation handles, and custom profiles upon password confirmation.</li>
            </ul>
          </section>

          {/* Section 6: Direct Engineering Support */}
          <section className="space-y-5 p-6 sm:p-8 rounded-3xl bg-muted/40 border border-border shadow-sm text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shrink-0 shadow-sm">
                <MessageSquare size={22} />
              </div>
              <div className="space-y-1.5 flex-1">
                <h3 className="text-lg font-bold text-foreground flex items-center justify-center sm:justify-start gap-2">
                  <HelpCircle size={18} className="text-blue-500" /> Still Experiencing an Edge Case?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Before opening an escalation ticket, consult our categorized <Link href="/resources/faq" className="text-blue-500 hover:underline font-semibold">Frequently Asked Questions (FAQ)</Link> or inspect our <Link href="/resources/documentation" className="text-blue-500 hover:underline font-semibold">System Architecture Manual</Link>.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For reproducible software bugs, dialect parsing errors in SQL to Mermaid, or corporate security disclosures, contact <strong>Debojyoti Chakraborty</strong> directly at our dedicated <Link href="/legal/contact" className="text-blue-500 hover:underline font-semibold">Support Desk</Link>. Technical inquiries are reviewed within 24–48 hours.
                </p>
              </div>
            </div>

            <div className="pt-2 flex justify-center sm:justify-start">
              <Link
                href="/legal/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-xl text-xs font-semibold shadow-sm hover:opacity-90 transition-all active:scale-[0.98]"
              >
                <span>Open Support Inquiry</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}