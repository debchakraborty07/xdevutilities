// src/app/resources/legal/terms/page.jsx


/* eslint-disable react/no-unescaped-entities */
import React from "react";

export const metadata = {
  title: "Terms of Service | Legal Agreement & Policies | xdevutilities",
  description: "Read the terms and conditions for using xdevutilities. Learn about our tool usage rules, Firebase user account policies, and service liability limitations.",
  alternates: { canonical: 'https://www.xdevutilities.com/legal/terms' },
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-6 py-20 max-w-4xl min-h-screen text-foreground bg-background">
      <h1 className="text-4xl font-semibold text-foreground dark:text-slate-100 mb-4 font-sans">Terms of Service</h1>
      <p className="text-sm text-muted-foreground mb-12 italic">Last Updated: July 2026</p>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-10 text-[15px] text-muted-foreground dark:text-slate-400 leading-relaxed">
        <p>
          Welcome to xdevutilities. We are dedicated to keeping this platform fast, free, and completely secure for the global developer and creator community. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions. These rules are designed to ensure that our professional tools remain available, accessible, and highly reliable for all users.
        </p>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">1. Acceptance of Terms</h2>
          <p>
            By accessing, browsing, or utilizing the utility tools hosted on xdevutilities, you confirm that you have read, understood, and agreed to be legally bound by this Terms of Service agreement. We reserve the exclusive right to update, modify, or replace these conditions at any time without prior notice. Your continued utilization of our resources after changes are posted constitutes your acceptance of the updated terms.
          </p>
        </section>

        {/* Section 2 - User Registration & Accounts (New Crucial Section) */}
        <section className="space-y-4 border-l-2 border-blue-500/20 pl-6">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">2. User Account Registration & Security</h2>
          <p>
            While many of our services are accessible as a public guest, certain features (such as bookmarks, dashboard tracking, and custom saved preferences) require registering a user account via Google Firebase Authentication. If you create an account, you agree to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide an accurate, active, and verified personal email address.</li>
            <li>Maintain the strict confidentiality of your access credentials and password.</li>
            <li>Take full responsibility for all activities and transactions executed under your registered account.</li>
            <li>Immediately notify our technical support team if you suspect any unauthorized breach of your account profile.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">3. Fair and Responsible Use of Tools</h2>
          <p>
            Every software client on this platform—including our <strong>ATS Resume Scanner</strong>, <strong>PDF Metadata Cleaner</strong>, <strong>Private Message Encryptor</strong>, and <strong>SQL to Mermaid</strong> visualizer—is built to deliver high-performance execution. To prevent degradation of service and maintain standard infrastructure speeds for everyone, you strictly agree not to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Deploy automated scripts, bots, scrapers, or programmatic crawlers to query our backend APIs.</li>
            <li>Attempt to reverse-engineer, decompile, or intercept the processing logic of our cloud architectures.</li>
            <li>Inject, upload, or transmit malicious code, viruses, or corrupt document files through our client upload fields.</li>
            <li>Utilize our utilities for any illegal activities or to violate local and international privacy regulations.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">4. Intellectual Property and Output Ownership</h2>
          <p>
            The proprietary calculations, design system configurations, custom code, graphics, layout vectors, and stateless handling models on this website are the sole intellectual property of xdevutilities.
          </p>
          <p>
            However, we claim <strong>zero ownership over the outputs you generate</strong>. The final cropped images, cleaned PDFs, encrypted cipher text blocks, and Mermaid database diagrams you download are 100% yours to keep, distribute, and commercialize. You are granted a free, non-exclusive license to use our platforms as long as you do not clone or redistribute our underlying codebase or brand styling.
          </p>
        </section>

        {/* Section 5 - Enhanced Disclaimer */}
        <section className="space-y-4 border-l-2 border-red-500/20 pl-6">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">5. Disclaimer of Warranties</h2>
          <p>
            We strive for extreme accuracy and reliability in every visual, cryptographic, or analytical client we deploy. However, xdevutilities provides all tools, blogs, and configurations on an <strong>&quot;as is&quot;</strong> and <strong>&quot;as available&quot;</strong> basis with no warranties of any kind, either express or implied.
          </p>
          <p>
            We do not warrant that our ATS Resume Scanner will guarantee employment, that our Passport Resizer will be accepted by every consulate, or that our privacy redact processes will bypass all future metadata extraction technologies. Compliance and final acceptance depend heavily on third-party human reviewers and external regulatory rules.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">6. Limitation of Liability</h2>
          <p>
            In no event shall xdevutilities, its owner, or its technical maintainers be liable for any direct, indirect, incidental, or consequential damages (including, but not limited to, loss of data, missed recruitment opportunities, document rejection, or service downtime) arising out of the use or inability to use the services on this platform.
          </p>
        </section>

        {/* Section 7 - Governing Law (New Crucial Legal Standard) */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">7. Governing Law and Jurisdiction</h2>
          <p>
            This agreement, its policies, and your use of our digital resources shall be governed by and interpreted in accordance with the laws of India, without regard to its conflict of law principles. Any legal actions or disputes arising under these conditions shall be resolved exclusively within the courts located in Kolkata, India.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">8. Contact & Legal Inquiry</h2>
          <p>
            If you have questions regarding these Terms of Service, wish to report system abuse, or require technical support regarding account management, please reach out to us at <a href="mailto:support@xdevutilities.com" className="text-blue-500 hover:underline">support@xdevutilities.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}