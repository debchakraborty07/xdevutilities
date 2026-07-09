// src/app/resources/legal/cookies/page.tsx

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Transparency & Usage | xdevutilities",
  description: "Learn how xdevutilities uses cookies and web storage to improve user experience, manage themes, and serve advertisements safely.",
  alternates: { canonical: 'https://www.xdevutilities.com/legal/cookies' },
};

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-6 py-20 max-w-4xl min-h-screen text-foreground bg-background">
      <h1 className="text-4xl font-semibold text-foreground dark:text-slate-100 mb-4">Cookie Policy</h1>
      <p className="text-sm text-muted-foreground mb-12 italic">Last Updated: July 2026</p>
      
      <div className="space-y-10 text-[15px] text-muted-foreground dark:text-slate-400 leading-relaxed">
        <p>
          We believe in a web space that is fast, secure, and completely transparent. While xdevutilities is fundamentally built on a <strong>stateless architecture</strong> to safeguard your individual privacy, we utilize a minimal amount of browser storage data to ensure the platform renders properly, maintains configurations, and remains completely free for everyone.
        </p>
        
        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 border-l-4 border-blue-500 pl-4">1. What are Cookies and Web Storage?</h2>
          <p>
            Cookies are small text files stored on your machine or mobile device by your web browser. They allow applications to &quot;remember&quot; certain operational parameters during and across web sessions to make your browsing experience smoother.
          </p>
          <p>
            In addition to cookies, we use <strong>HTML5 Local Storage</strong> (Web Storage). Unlike cookies, Web Storage does not transmit data automatically to remote servers, making it a highly secure and private way to save personal settings locally on your client machine.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 border-l-4 border-blue-500 pl-4">2. Types of Storage and Cookies We Use</h2>
          <ul className="space-y-6">
            <li className="p-5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-border">
              <strong className="text-foreground dark:text-slate-100 block mb-1">A. Essential and Preference Web Storage</strong>
              We utilize HTML5 Local Storage strictly to remember your custom aesthetic preferences, such as Dark Mode or Light Mode toggles. This ensures that every time you return to xdevutilities, the interface maps your preferred color values instantly, without requiring repetitive manual setting updates.
            </li>
            
            <li className="p-5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-border">
              <strong className="text-foreground dark:text-slate-100 block mb-1">B. Advertising Cookies (Google AdSense)</strong>
              To keep our high-performance developer utilities completely free without charging subscription fees or requiring paywalls, we partner with <strong>Google AdSense</strong>. Google, operating as a third-party vendor, uses tracking cookies to analyze interests and serve ads to users based on their visits to our domain and other resources across the Internet.
            </li>

            <li className="p-5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-border">
              <strong className="text-foreground dark:text-slate-100 block mb-1">C. Google DoubleClick Cookies</strong>
              Google and its certified partners utilize the DoubleClick cookie on our site to serve personalized, behavior-targeted advertisements. We explicitly declare that <strong>no documents, images, or assets processed in our stateless utilities (such as your resumes, photos, or database tables) are ever shared with or analyzed by these marketing networks</strong>. The cookies only trace general browsing behavior and session paths.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 border-l-4 border-blue-500 pl-4">3. Your Choices and Browser-Specific Controls</h2>
          <p>
            We respect your digital boundaries. You can choose to manage, limit, or completely disable third-party cookies by adjusting your individual browser configuration panels. Please note that blocking all cookies may impact your user session states or prevent certain preference configurations from rendering correctly.
          </p>
          <p>
            To manage cookie behaviors in different web browsers, please consult the official support channels below:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Google Chrome:</strong> <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Manage Cookies and Site Data</a></li>
            <li><strong>Apple Safari:</strong> <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Web Settings & Security</a></li>
            <li><strong>Mozilla Firefox:</strong> <a href="https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Blocking & Tracking Preferences</a></li>
            <li><strong>Microsoft Edge:</strong> <a href="https://support.microsoft.com/microsoft-edge/delete-and-manage-cookies-in-microsoft-edge-168dab11-0753-243d-7c16-ade5947764d5" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Edge Storage Controls</a></li>
          </ul>
          <p className="mt-4">
            If you wish to opt-out of personalized behavioral ads served by Google directly, please visit the 
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold hover:underline ml-1">Google Ads Settings</a> page.
          </p>
        </section>

        {/* Section 4 */}
        <section className="pt-8 border-t border-slate-100 dark:border-slate-800">
          <p className="italic">
            For more details on our zero-footprint data standards and user rights, please review our comprehensive <a href="/legal/privacy" className="text-blue-500 hover:underline">Privacy Policy</a>. If you have any technical questions regarding our cookie utilization, feel free to inquire via our <a href="/legal/contact" className="text-blue-500 hover:underline">Contact Page</a>.
          </p>
        </section>
      </div>
    </div>
  );
}