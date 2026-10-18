// src/app/legal/terms/page.jsx

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  ShieldAlert,
  Scale,
  Sparkles,
  Mail,
  Ban,
} from "lucide-react";

export const metadata = {
  title: "Terms of Service | Legal Agreement & Policies | xdevutilities",
  description:
    "Read the terms and conditions for using xdevutilities. Learn about our stateless tool usage rules, Firebase user account policies, intellectual property rights, and service liability limitations.",
  alternates: {
    canonical: "https://www.xdevutilities.com/legal/terms",
  },
};

export default function TermsPage() {
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
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
          <FileText size={13} />
          <span>User Agreement & Operational Standards</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          Terms of <span className="text-blue-500">Service</span>
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground font-medium">
          Last Updated: October 2026 • Governing Law: Kolkata, India
        </p>
      </header>

      {/* Content Body */}
      <div className="space-y-12 text-[15px] sm:text-[16px] text-muted-foreground leading-relaxed">

        <p className="text-base leading-relaxed">
          Welcome to <strong className="text-foreground">xdevutilities</strong>. We are committed to maintaining a fast, reliable, and completely secure platform for the global developer and creator community. By accessing our web application, you agree to comply with and be bound by the following Terms of Service.
        </p>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground border-l-4 border-blue-500 pl-4">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing, browsing, or executing computational tasks through the utilities on xdevutilities, you confirm that you have read, understood, and agreed to be legally bound by this agreement. If you do not agree with any portion of these terms, you must discontinue using our services immediately. We reserve the right to revise these conditions periodically, and continued usage reflects acceptance of updated standards.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3 p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm">
          <h2 className="text-lg sm:text-xl font-bold text-foreground">
            2. Optional User Accounts & Authentication Security
          </h2>
          <p>
            The majority of our utilities are completely open to public guests without registration. However, specific features (such as saved custom preferences or dashboard workspaces) require authenticated access via Google Firebase Authentication. If you register an account, you agree to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Provide a genuine, verified email address under your direct ownership.</li>
            <li>Maintain absolute confidentiality regarding your access credentials.</li>
            <li>Accept full responsibility for actions initiated under your authenticated profile.</li>
            <li>Notify our support team immediately if you suspect any compromise of your account.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-foreground font-bold text-lg sm:text-xl">
            <Ban size={20} className="text-rose-500" />
            <h2>3. Fair Use, Buffer Limits & Acceptable Conduct</h2>
          </div>
          <p>
            Every software client—including the <strong>ATS Resume Scanner</strong>, <strong>PDF Metadata Cleaner</strong>, <strong>Privacy Blur</strong>, and <strong>SQL to Mermaid Visualizer</strong>—is engineered to process data statelessly. To prevent infrastructure degradation and ensure equal resource distribution for all users, you strictly agree NOT to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Deploy automated headless crawlers, scrapers, or DDoS scripts targeting our stateless microservices.</li>
            <li>Attempt to bypass enforced payload quotas (such as max file buffer limits documented in our Help Center).</li>
            <li>Upload malicious binaries, reverse-engineering exploits, or corrupted files crafted to disrupt memory garbage collection.</li>
            <li>Engage in programmatic or artificial manipulation of advertisements displayed on the platform.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-foreground font-bold text-lg sm:text-xl">
            <Sparkles size={20} className="text-amber-500" />
            <h2>4. Intellectual Property & Complete Output Ownership</h2>
          </div>
          <p>
            The platform source code, custom design systems, branding assets, and specialized stateless parsing configurations are the exclusive intellectual property of xdevutilities and its maintainer.
          </p>
          <div className="p-4 rounded-2xl bg-muted/40 border border-border text-foreground font-medium text-sm">
            <strong>Your Output Belongs Entirely to You:</strong> xdevutilities asserts zero ownership, licensing claims, or copyright over the assets you generate. All sanitized PDFs, cropped passport portraits, redacted screenshots, and compiled Mermaid diagrams belong 100% to you to distribute, publish, or commercialize freely.
          </div>
        </section>

        {/* Section 5 */}
        <section className="space-y-3 p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm">
          <div className="flex items-center gap-2 text-foreground font-bold text-lg sm:text-xl">
            <ShieldAlert size={20} className="text-amber-500" />
            <h2>5. Disclaimer of Warranties (&quot;As-Is&quot; Provision)</h2>
          </div>
          <p className="text-sm">
            xdevutilities and its related tools are provided strictly on an <strong>&quot;as is&quot;</strong> and <strong>&quot;as available&quot;</strong> basis without warranties of any kind, whether express or implied.
          </p>
          <p className="text-sm">
            While we apply rigorous engineering standards, we do not warrant that our ATS scanner guarantees hiring results, that our passport photo generator satisfies every individual consulate&apos;s subjective inspection, or that visual redaction processes cover every conceivable forensic extraction scenario. Users maintain responsibility for verifying outputs prior to official submission.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground border-l-4 border-blue-500 pl-4">
            6. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by applicable law, in no event shall xdevutilities, its maintainer (Debojyoti Chakraborty), or its technical contributors be liable for any indirect, incidental, punitive, or consequential damages (including data interruption, recruitment delays, or hardware stalls) resulting from the use or inability to use our utilities.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-foreground font-bold text-lg sm:text-xl">
            <Scale size={20} className="text-blue-500" />
            <h2>7. Governing Law and Jurisdiction</h2>
          </div>
          <p>
            This agreement and all related platform policies shall be governed by, interpreted, and enforced in accordance with the substantive laws of <strong>India</strong>, without regard to conflict of law principles. Any legal disputes or claims arising out of this agreement shall fall under the exclusive jurisdiction of the competent courts situated in <strong>Kolkata, West Bengal, India</strong>.
          </p>
        </section>

        {/* Section 8 */}
        <section className="p-6 sm:p-8 bg-muted/40 rounded-3xl border border-border space-y-3">
          <div className="flex items-center gap-2 text-foreground font-bold text-lg">
            <Mail size={18} className="text-primary" />
            <h2>8. Contact & Legal Clarifications</h2>
          </div>
          <p className="text-sm leading-relaxed">
            If you have questions regarding these terms, wish to report platform misuse, or require compliance verification, please connect with our support desk:
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
            <Link
              href="/legal/contact"
              className="text-primary hover:underline underline-offset-4"
            >
              Open Support Desk Ticket →
            </Link>
            <a
              href="mailto:iamdebojyoti.1990@gmail.com"
              className="text-primary hover:underline underline-offset-4"
            >
              xdevutilities Support Email
            </a>
            <Link
              href="/legal/privacy"
              className="text-muted-foreground hover:text-foreground"
            >
              Read Privacy Policy
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}