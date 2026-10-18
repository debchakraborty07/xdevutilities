// src/app/legal/privacy/page.jsx

import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, Cookie, EyeOff, Mail } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Data Protection & Ethics | xdevutilities",
  description:
    "Learn how we protect your data at xdevutilities. Our privacy-first policy details our secure stateless RAM processing, client-side execution, Firebase data ethics, and Google AdSense cookie usage.",
  alternates: {
    canonical: "https://www.xdevutilities.com/legal/privacy",
  },
};

export default function PrivacyPage() {
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
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          <ShieldCheck size={13} />
          <span>Zero-Persistent-Storage Architecture</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-foreground">
          Privacy Policy & <span className="text-blue-500">Data Ethics</span>
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground font-medium">
          Last Updated & Reviewed: October 2026 • Effective Date: Immediate
        </p>
      </header>

      {/* Body Content */}
      <div className="space-y-12 text-[15px] sm:text-[16px] text-muted-foreground leading-relaxed">

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            1. Our Philosophy: Privacy by Default
          </h2>
          <p>
            At xdevutilities, we believe that private data belongs exclusively to the user. Unlike conventional online tool portals that harvest, aggregate, and commercialize user activity logs, our platform is engineered from the ground up to respect individual anonymity.
          </p>
          <p>
            We adhere strictly to the principle of <strong>data minimization</strong>: we never request or store Personally Identifiable Information (PII) unless you explicitly opt into authenticated dashboard features.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3 p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm">
          <div className="flex items-center gap-2.5 text-foreground font-bold text-lg sm:text-xl">
            <Lock size={20} className="text-blue-500" />
            <h2>2. Stateless Data Processing for Utility Tools</h2>
          </div>
          <p>
            Stateless computation is the foundational pillar of xdevutilities. When you run operations across our suite—including the <strong>ATS Resume Scanner</strong>, <strong>PDF Metadata Cleaner</strong>, <strong>Passport Photo Maker</strong>, or <strong>SQL to Mermaid Visualizer</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Temporary Volatile RAM Only:</strong> Server-processed payloads reside strictly in ephemeral volatile memory buffers during execution.
            </li>
            <li>
              <strong>Instant Lifecycle Purge:</strong> As soon as the output is served to your browser or the network request terminates, memory allocations are wiped via garbage collection.
            </li>
            <li>
              <strong>Client-Side Canvas Privacy:</strong> Visual redaction tools (such as Privacy Blur) process image buffers entirely inside your browser&apos;s native HTML5 Canvas context. Your source files never travel over the network.
            </li>
            <li>
              <strong>No Secondary Archival:</strong> We maintain zero database pools, file buckets, or historical logs of your uploaded assets.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">
            3. Information We Collect (Google Firebase Authentication)
          </h2>
          <p>
            Unregistered visitors can freely use our tools without submitting any personal credentials. For developers who optionally choose to create a workspace account, authentication is handled securely via <strong>Google Firebase Authentication</strong>.
          </p>
          <p>The scope of stored profile attributes is limited exclusively to:</p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Email Address:</strong> Used solely for secure authentication tokens, system notifications, and password recovery.
            </li>
            <li>
              <strong>Encrypted Credentials:</strong> Passwords are cryptographically salted and hashed via standard industry algorithms (such as Scrypt/Bcrypt) within Firebase infrastructure. We cannot view or access plaintext passwords.
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3 p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm">
          <div className="flex items-center gap-2.5 text-foreground font-bold text-lg sm:text-xl">
            <Cookie size={20} className="text-amber-500" />
            <h2>4. Cookies & Google AdSense Advertising Disclosures</h2>
          </div>
          <p>
            To keep xdevutilities accessible to developers worldwide without paywalls or subscriptions, we display contextual and interest-based advertisements through <strong>Google AdSense</strong>.
          </p>
          <p>
            Google, as a third-party vendor, uses cookies to serve ads on our site. Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visits to xdevutilities and other websites across the Internet:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Personalized Advertising Opt-Out:</strong> Users may opt out of personalized advertising by visiting Google&apos;s Ads Settings at{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline underline-offset-2 hover:text-blue-600"
              >
                https://adssettings.google.com
              </a>.
            </li>
            <li>
              <strong>Universal Opt-Out:</strong> Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting the Network Advertising Initiative opt-out page at{" "}
              <a
                href="https://optout.networkadvertising.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline underline-offset-2 hover:text-blue-600"
              >
                https://optout.networkadvertising.org
              </a>{" "}
              or{" "}
              <a
                href="https://www.aboutads.info/choices"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline underline-offset-2 hover:text-blue-600"
              >
                https://www.aboutads.info/choices
              </a>.
            </li>
          </ul>
        </section>

        {/* Section 5 - GDPR Compliance */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">
            5. GDPR Data Protection Rights (EEA & UK Visitors)
          </h2>
          <p>
            In compliance with the General Data Protection Regulation (GDPR), European Economic Area and UK visitors are entitled to specific statutory rights:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Right to Access:</strong> You can request verification of whether we hold any personal account records.</li>
            <li><strong>Right to Rectification:</strong> You can request corrections to your registered workspace profile information.</li>
            <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> You can request immediate, atomic deletion of your Firebase account and associated email identifiers via our account dashboard or support desk.</li>
            <li><strong>Right to Data Portability:</strong> You can request an export of your saved account parameters in a structured, machine-readable format.</li>
          </ul>
        </section>

        {/* Section 6 - CCPA Compliance */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">
            6. California Consumer Privacy Act (CCPA / CPRA)
          </h2>
          <p>
            For residents of California, xdevutilities complies with all consumer privacy provisions:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong>No Sale of Data:</strong> We explicitly declare that we <strong>do not sell, monetize, or rent your personal information</strong> to data brokers, advertising aggregators, or marketing firms.</li>
            <li><strong>Non-Discrimination:</strong> Exercising your privacy rights will never result in degraded access, throttled processing speeds, or altered platform features.</li>
          </ul>
        </section>

        {/* Section 7 - COPPA Compliance */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-foreground font-bold text-lg sm:text-xl">
            <EyeOff size={18} className="text-indigo-500" />
            <h2>7. Children&apos;s Privacy (COPPA Compliance)</h2>
          </div>
          <p>
            xdevutilities is designed as a productivity workbench for developers and creators. We do not knowingly collect or solicit any Personally Identifiable Information from children under the age of 13 under the Children&apos;s Online Privacy Protection Act (COPPA). If you believe a minor has registered an email on our site, please notify us immediately for swift record removal.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">
            8. External Links & Third-Party Boundaries
          </h2>
          <p>
            Our guides and technical documentation may contain links to external sites (such as GitHub, technical documentation, or standards bodies). We do not operate or control third-party privacy practices and recommend reading the respective policies of any site you visit.
          </p>
        </section>

        {/* Section 9 - Direct Contact & Verification */}
        <section className="p-6 sm:p-8 bg-muted/40 rounded-3xl border border-border space-y-3">
          <div className="flex items-center gap-2 text-foreground font-bold text-lg">
            <Mail size={18} className="text-primary" />
            <h2>9. Privacy Inquiries & Exercising Rights</h2>
          </div>
          <p className="text-sm leading-relaxed">
            By utilizing xdevutilities, you acknowledge and agree to the data minimization standards outlined in this Privacy Policy.
          </p>
          <p className="text-sm leading-relaxed">
            To assert your GDPR/CCPA rights, request account termination, or ask technical questions regarding our stateless memory execution, reach out to <strong>Debojyoti Chakraborty</strong> via our official channels:
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
              xdevutilities team
            </a>
            <Link
              href="/legal/terms"
              className="text-muted-foreground hover:text-foreground"
            >
              Review Terms of Service
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}