// src/app/legal/cookies/page.jsx

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Cookie,
  ShieldCheck,
  SlidersHorizontal,
  ExternalLink,
  Laptop,
  CheckCircle2,
  Lock,
} from "lucide-react";

export const metadata = {
  title: "Cookie Policy | Transparency & Storage Standards | xdevutilities",
  description:
    "Learn how xdevutilities uses essential client-side web storage and Google AdSense advertising cookies transparently without ever persisting user document payloads.",
  alternates: {
    canonical: "https://www.xdevutilities.com/legal/cookies",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 max-w-4xl min-h-screen text-foreground bg-background font-sans">

      {/* Back Link */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={14} /> Back to utilities
        </Link>
      </div>

      {/* Header */}
      <header className="space-y-3 mb-12 border-b border-border pb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
          <Cookie size={13} />
          <span>Storage & Consent Transparency</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          Cookie & <span className="text-blue-500">Storage Policy</span>
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground font-medium">
          Last Updated: October 2026 • Policy Version: 2026.2
        </p>
      </header>

      {/* Content Body */}
      <div className="space-y-12 text-[15px] sm:text-[16px] text-muted-foreground leading-relaxed">

        <p className="text-base leading-relaxed">
          At <strong className="text-foreground">xdevutilities</strong>, we believe web tools should operate with extreme privacy and zero hidden surveillance. Because our suite is engineered around a <strong>stateless execution model</strong>, we do not build user behavioral profiles from your uploaded files. However, minimal browser-level storage and third-party advertising cookies are used to keep our platform responsive, preference-aware, and completely free to access.
        </p>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground border-l-4 border-blue-500 pl-4">
            1. What Are Cookies and Client Web Storage?
          </h2>
          <p>
            <strong>Cookies</strong> are small alphanumeric text snippets stored in your browser by websites you visit. They enable platforms to remember session states and facilitate secure advertising interactions.
          </p>
          <p>
            In addition to standard cookies, xdevutilities utilizes <strong>HTML5 Web Storage (localStorage)</strong>. Unlike cookies, information stored in localStorage remains exclusively inside your device&apos;s browser environment and is <em>never</em> automatically transmitted to our servers during HTTP network requests.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground border-l-4 border-blue-500 pl-4">
            2. Categories of Storage We Deploy
          </h2>

          <div className="space-y-4 pt-1 not-prose">
            {/* Category A */}
            <div className="p-6 rounded-3xl bg-card border border-border shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-foreground font-bold text-base">
                <Laptop size={18} className="text-blue-500" />
                <h3>A. Essential Functional Web Storage (Client-Side Only)</h3>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                We store basic interface parameters directly in your browser&apos;s <code>localStorage</code>—primarily your active color scheme toggle (Dark Mode vs. Light Mode) and temporary UI preferences. This ensures your aesthetic preference is instantly applied when navigating between utility pages without annoying screen flickers.
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold pt-1">
                <CheckCircle2 size={13} />
                <span>Zero server transmission • 100% on your machine</span>
              </div>
            </div>

            {/* Category B */}
            <div className="p-6 rounded-3xl bg-card border border-border shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-foreground font-bold text-base">
                <SlidersHorizontal size={18} className="text-amber-500" />
                <h3>B. Advertising Cookies (Google AdSense)</h3>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                To sustain cloud hosting servers, bandwidth, and computational RAM execution without charging subscriptions or paywalls, we partner with <strong>Google AdSense</strong>. Google and its certified advertising technology partners deploy advertising cookies to measure ad performance, prevent repetitive ad impressions, and display relevant sponsorships based on visits to xdevutilities and other websites across the web.
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs text-primary font-semibold pt-1">
                <Lock size={13} />
                <span>Document payloads (PDFs, CVs, photos) are never exposed to ad cookies</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 - Zero File Tracking Guarantee */}
        <section className="p-6 sm:p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/20 space-y-3">
          <div className="flex items-center gap-2 text-foreground font-bold text-lg">
            <ShieldCheck size={20} className="text-emerald-500" />
            <h2>3. Our Zero File Tracking Guarantee</h2>
          </div>
          <p className="text-sm leading-relaxed">
            We explicitly declare that <strong>no user-uploaded documents, resumes, images, or SQL schemas are ever linked to advertising cookies or behavioral profiles</strong>.
          </p>
          <p className="text-sm leading-relaxed">
            When you process assets using our ATS Resume Scanner or PDF Metadata Cleaner, the data executes within stateless volatile RAM buffers and is completely purged upon completion. Ad cookies have zero structural access to the contents of your files.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground border-l-4 border-blue-500 pl-4">
            4. Managing Your Cookie Choices & Opt-Out Controls
          </h2>
          <p>
            You have the right to accept, limit, or refuse cookies. You can exercise your preferences directly through several independent avenues:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose pt-2 text-xs">
            <div className="p-4 rounded-2xl bg-card border border-border space-y-2">
              <strong className="text-foreground text-sm block">Google Ad Settings</strong>
              <p className="text-muted-foreground leading-relaxed">
                Opt out of personalized interest-based ads served by Google across the Internet:
              </p>
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-semibold hover:underline"
              >
                <span>Google Ads Settings</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-card border border-border space-y-2">
              <strong className="text-foreground text-sm block">Industry-Wide Opt-Out</strong>
              <p className="text-muted-foreground leading-relaxed">
                Opt out of multiple third-party advertising networks simultaneously via the DAA:
              </p>
              <a
                href="https://optout.aboutads.info"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-semibold hover:underline"
              >
                <span>Digital Advertising Alliance (DAA)</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          <p className="text-sm pt-2">
            You can also adjust cookie preferences directly inside your web browser settings (Chrome, Safari, Firefox, or Edge). Note that clearing all cookies will reset your light/dark theme preference to default.
          </p>
        </section>

        {/* Section 5 */}
        <section className="p-6 sm:p-8 bg-muted/40 rounded-3xl border border-border space-y-3">
          <h2 className="text-lg font-bold text-foreground">
            5. Legal Governance & Inquiries
          </h2>
          <p className="text-sm leading-relaxed">
            For deeper architectural details regarding our data governance, visit our full{" "}
            <Link href="/legal/privacy" className="text-primary hover:underline font-semibold">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/legal/terms" className="text-primary hover:underline font-semibold">
              Terms of Service
            </Link>.
          </p>
          <p className="text-sm leading-relaxed">
            If you have technical questions regarding our cookie and client storage implementation, connect directly through our{" "}
            <Link href="/legal/contact" className="text-primary hover:underline font-semibold">
              Support Desk
            </Link>.
          </p>
        </section>

      </div>
    </div>
  );
}