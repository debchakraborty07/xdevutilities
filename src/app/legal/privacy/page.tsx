// src/app/resources/legal/privacy/page.tsx

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Data Protection & Ethics | xdevutilities",
  description: "Learn how we protect your data at xdevutilities. Our privacy-first policy details our secure stateless processing, Firebase data ethics, and Google AdSense cookie usage.",
  alternates: {
    canonical: 'https://www.xdevutilities.com/legal/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-6 py-20 max-w-4xl min-h-screen text-foreground bg-background">
      <h1 className="text-4xl font-semibold text-foreground dark:text-slate-100 mb-4">Privacy Policy & Data Ethics</h1>
      <p className="text-sm text-muted-foreground mb-12 italic">Last Updated: July 2026</p>
      
      <div className="space-y-10 text-[15px] text-muted-foreground dark:text-slate-400 leading-relaxed">
        
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">1. Our Philosophy: Privacy by Default</h2>
          <p>
            At xdevutilities, we believe that your private data is exactly that—private. Unlike many online tools that silently harvest, analyze, and monetize user logs, our platform is engineered from the ground up to respect individual anonymity. We operate on a data-minimization principle: we never request personally identifiable information (PII) unless it is structurally necessary to support account-based services.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3 border-l-2 border-blue-500/20 pl-6">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">2. Stateless Data Processing for Utility Tools</h2>
          <p>
            This stateless protocol is the core security architecture of xdevutilities. When you run highly interactive actions through our processing clients, such as our <strong>ATS Resume Scanner</strong>, <strong>PDF Metadata Cleaner</strong>, or <strong>Passport Photo Maker</strong>, the targeted resource payloads are streamed and parsed dynamically inside temporary volatile execution memory (RAM).
          </p>
          <p>
            As soon as your browser download processes complete or you terminate your active window session, all binary footprints and residual temporary files are immediately and permanently flushed from our networks. We do not maintain historical logs or databases of your uploaded documents, images, or assets.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">3. Information We Collect and Firebase Authentication</h2>
          <p>
            For standard public guests, we collect no identity records. However, for users who choose to register for a professional profile dashboard, we secure and manage specific registration inputs using Google Firebase Authentication infrastructure.
          </p>
          <p>
            The scope of collected profile attributes is strictly limited to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Email Address:</strong> Utilized strictly for profile authentication, dynamic security audits, password resets, and account-related structural alerts.</li>
            <li><strong>Security Credentials:</strong> Passwords are encrypted globally via Google&apos;s secured hashing and salting systems (using Scrypt/Bcrypt methodologies) to render them completely unreadable, even to our server administrators.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">4. Cookies and Google AdSense Disclosure</h2>
          <p>
            To keep xdevutilities 100% free and open to developer communities worldwide, we partner with <strong>Google AdSense</strong> to display non-intrusive advertisements on our domain. Google operates as a third-party vendor and uses analytical cookies to track session interactions and serve relevant ads based on users&apos; visits to this site and other resources across the World Wide Web.
          </p>
          <p>
            Google and its advertising partners utilize unique identifiers like the <strong>DoubleClick DART Cookie</strong> to map user interests. This behavioral profiling allows them to personalize ad placements.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>You can manage or opt-out of personalized interest-based advertising by adjusting your Google Ads preferences here: <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://adssettings.google.com</a></li>
            <li>Alternatively, you can opt-out of third-party cookie usage for personalized advertising globally by visiting the Network Advertising Initiative: <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://optout.networkadvertising.org</a></li>
          </ul>
        </section>

        {/* Section 5 - GDPR Compliance */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">5. GDPR Data Protection Rights (EEA Visitors)</h2>
          <p>
            We are fully committed to ensuring that visitors from the European Economic Area (EEA) understand their data rights under the General Data Protection Regulation (GDPR). Every registered or public guest is entitled to the following liberties:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>The Right to Access:</strong> You have the right to request verified copies of your personal profile information.</li>
            <li><strong>The Right to Rectification:</strong> You can request that we update or correct any account information you believe is inaccurate.</li>
            <li><strong>The Right to Erasure (Right to be Forgotten):</strong> You have the right to request that we delete your registered account profile and erase your email from our system databases permanently.</li>
            <li><strong>The Right to Restrict Processing:</strong> You have the right to request that we temporarily or permanently restrict the processing of your personal information.</li>
          </ul>
        </section>

        {/* Section 6 - CCPA Compliance */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">6. CCPA/CPRA Privacy Rights (California Residents)</h2>
          <p>
            Under the California Consumer Privacy Act (CCPA), California consumers have specific rights regarding their personal data. At xdevutilities, we uphold these rules diligently:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>No Sale of Data:</strong> We explicitly declare that we <strong>do not sell, trade, or monetize your personal information</strong> with any third-party marketing entities, databases, or aggregators.</li>
            <li><strong>Right to Know:</strong> You can request disclosure regarding the specific categories of data we collect and maintain in our secure authentication server.</li>
            <li><strong>Right to Delete:</strong> You can request deletion of all collected email parameters at any time.</li>
          </ul>
        </section>

        {/* Section 7 - COPPA Compliance */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">7. Children&apos;s Information (COPPA Compliance)</h2>
          <p>
            Another pillar of our online data ethics is protecting young children using web channels. We strongly encourage parents and guardians to observe and guide their children&apos;s online actions.
          </p>
          <p>
            Xdevutilities does not knowingly collect any Personally Identifiable Information from children under the age of 13. If you believe your child has registered an email on our site, please contact us immediately, and we will make every effort to delete all traces of such registration databases from our records.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">8. External Content Boundaries</h2>
          <p>
            Our web pages include hyperlinks to external documentation, blogs, or official portals. Please note that xdevutilities has no structural control over the content or privacy policies of third-party domains. We advise our users to carefully read the independent privacy statements of any external domain that collects personal metadata.
          </p>
        </section>

        {/* Section 9 */}
        <section className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-border">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">9. Consent, Integration, & Contacts</h2>
          <p className="italic mb-4 text-sm leading-relaxed">
            By utilizing the utilities on xdevutilities, you hereby acknowledge and consent to our strict Privacy Policy and agree to its regulatory terms.
          </p>
          <p className="text-sm">
            To ask questions, request account removal, or assert your GDPR/CCPA data rights, please contact our support infrastructure directly at <a href="mailto:support@xdevutilities.com" className="text-blue-500 font-semibold hover:underline">support@xdevutilities.com</a> or visit our designated online contact gateway.
          </p>
        </section>
      </div>
    </div>
  );
}