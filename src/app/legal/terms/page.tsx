// src/app/resources/legal/terms/page.tsx


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service ",
  description: "Read the terms and conditions for using xdevutilities. Learn about our tool usage policies and service agreement.",
  alternates: { canonical: 'https://www.xdevutilities.com/legal/terms' },
};

export default function TermsPage() {
    return (
      <div className="container mx-auto px-6 py-20 max-w-4xl min-h-screen">
        <h1 className="text-4xl font-semibold text-foreground dark:text-slate-100 mb-8 font-sans">Terms of Service</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-10">
          <p className="text-[15px] text-muted-foreground dark:text-slate-400 leading-relaxed">
            Welcome to xdevutilities. I want to keep this platform fast, free, and secure for everyone. By accessing and using this website, you agree to comply with and be bound by the following terms. These rules are here to ensure that our professional tools remain available and reliable for all users.
          </p>
  
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl font-medium text-slate-800 dark:text-slate-200">1. Acceptance of Agreement</h2>
            <p className="text-[15px] text-muted-foreground dark:text-slate-400 leading-relaxed">
              By using our utilities, you confirm that you have read and understood these terms. I reserve the right to update or modify these conditions at any time to reflect changes in technology or industry standards. Your continued use of the platform after any changes constitutes your acceptance of the updated terms.
            </p>
          </section>
  
          {/* Section 2 */}
          <section className="space-y-4 border-l-2 border-blue-500/20 pl-6">
            <h2 className="text-xl font-medium text-slate-800 dark:text-slate-200">2. Responsible Use of Tools</h2>
            <p className="text-[15px] text-muted-foreground dark:text-slate-400 leading-relaxed">
              Every tool on this platform—from the <strong>ATS Resume Scanner</strong> to the <strong>SQL to Mermaid</strong> visualizer—is provided for professional and personal use. To ensure fair performance for all users, I ask that you do not:
            </p>
            <ul className="list-disc pl-5 text-[14px] text-muted-foreground space-y-2">
              <li>Attempt to scrape or reverse-engineer our processing logic.</li>
              <li>Automate requests to our backend engines without permission.</li>
              <li>Use our utilities for any illegal activity or to process malicious files.</li>
            </ul>
          </section>
  
          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl font-medium text-slate-800 dark:text-slate-200">3. Intellectual Property</h2>
            <p className="text-[15px] text-muted-foreground dark:text-slate-400 leading-relaxed">
              The proprietary algorithms, design system, and &quot;Stateless&quot; processing architecture used here are the intellectual property of xdevutilities. While the results you generate (like images, diagrams, or cleaned PDFs) are yours to keep and use, the platform&apos;s code and structure may not be cloned or redistributed.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl font-medium text-slate-800 dark:text-slate-200">4. Limitation of Liability</h2>
            <p className="text-[15px] text-muted-foreground dark:text-slate-400 leading-relaxed">
              I strive for 100% accuracy and reliability in every utility I build. However, xdevutilities provides these tools &quot;as is&quot; and &quot;as available.&quot; I cannot guarantee that a higher ATS score or a perfect passport photo will result in a successful job or visa application, as those decisions depend on third-party human reviewers. 
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl font-medium text-slate-800 dark:text-slate-200">5. Service Availability</h2>
            <p className="text-[15px] text-muted-foreground dark:text-slate-400 leading-relaxed">
              I am committed to maintaining high uptime, but I am not liable for any temporary unavailability due to server maintenance or technical upgrades. If you have questions or encounter any issues, please visit our <a href="/resources/help-center" className="text-blue-500 hover:underline">Help Center</a> or contact support.
            </p>
          </section>
        </div>
      </div>
    );
  }