// src/app/resources/legal/privacy/page.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Data Protection & Ethics ",
  description: "Learn how we protect your data at xdevutilities. Our privacy-first policy details our stateless processing and cookie usage for AdSense.",
  alternates: {
    canonical: 'https://www.xdevutilities.com/legal/privacy',
  },
};

export default function PrivacyPage() {
    return (
      <div className="container mx-auto px-6 py-20 max-w-4xl min-h-screen">
        <h1 className="text-4xl font-semibold text-foreground dark:text-slate-100 mb-8">Privacy Policy and Data Ethics</h1>
        
        <div className="space-y-10 text-[15px] text-muted-foreground dark:text-slate-400 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">1. Our Philosophy: Privacy by Default</h2>
            <p>
              At xdevutilities, I believe that your private data is exactly that—private. Unlike many online utilities that harvest user data, our platform is built on a foundation of anonymity. Most of our tools do not require any registration, and we never ask for personal information unless it is absolutely necessary for account-based features.
            </p>
          </section>

          <section className="space-y-3 border-l-2 border-blue-500/20 pl-6">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">2. Stateless Data Processing</h2>
            <p>
              This is the core of our security protocol. When you use tools like the <strong>ATS Resume Scanner</strong>, <strong>PDF Metadata Cleaner</strong>, or <strong>Passport Photo Maker</strong>, your files are processed in real-time within our temporary volatile memory (RAM). 
            </p>
            <p>
              As soon as you download the result or close your browser tab, all traces of your uploaded files are immediately and permanently flushed from our systems. We do not maintain a database of your documents or images.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">3. Cookies and Advertising</h2>
            <p>
              To keep this platform free for everyone, we use <strong>Google AdSense</strong> to serve advertisements. Google, as a third-party vendor, uses cookies to serve ads on our site. Google&apos;s use of advertising cookies enables it and its partners to serve ads to our users based on their visit to xdevutilities and other sites on the Internet.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">4. Google DoubleClick DART Cookie</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Google uses cookies to serve ads on this website as a third-party vendor.</li>
              <li>Google&apos;s use of the DART cookie enables it to serve ads based on the user&apos;s visit to our site and other sites on the web.</li>
              <li>Users may opt out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy at the following URL: <a href="https://www.google.com/settings/ads" target="_blank" className="text-blue-500 hover:underline">https://www.google.com/settings/ads</a></li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">5. External Links</h2>
            <p>
              Our website may contain links to other sites (like documentation or resources). Please be aware that I am not responsible for the content or privacy practices of such other sites. I encourage you to read the privacy statements of any other site that collects personally identifiable information.
            </p>
          </section>

          <section className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-border">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">6. Your Consent</h2>
            <p className="italic">
              By using xdevutilities, you hereby consent to our Privacy Policy and agree to its terms. If I ever make significant changes to how I handle data, I will update this page accordingly to maintain full transparency.
            </p>
          </section>
        </div>
      </div>
    );
}