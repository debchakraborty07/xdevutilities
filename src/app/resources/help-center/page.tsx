// src/app/resources/help-center/page.tsx

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Help Center | Troubleshooting & User Support ",
  description: "Get technical support and learn how to resolve common issues with browser compatibility, file processing, and tool usage.",
  alternates: {
    canonical: 'https://www.xdevutilities.com/resources/help-center',
  },
};

export default function HelpCenterPage() {
    return (
      <div className="container mx-auto px-6 py-20 max-w-4xl min-h-screen">
        {/* Header Section */}
        <div className="space-y-4 mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground dark:text-slate-100 leading-tight">
            How can we <span className="text-blue-500">help you today?</span>
          </h1>
          <p className="text-lg text-muted-foreground dark:text-slate-400 font-medium">
            Find solutions to common technical issues and learn how to get the most out of our utilities.
          </p>
        </div>
        
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-12 text-[16px] text-slate-600 dark:text-slate-400 leading-relaxed">
          
          {/* Section 1: Quick Fixes */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 border-l-4 border-blue-500 pl-4">Common Troubleshooting</h2>
            <p>
              I try to make every tool on xdevutilities as intuitive as possible, but web browsers can sometimes be unpredictable. If a tool isn&apos;t responding or a button feels &quot;stuck,&quot; 90% of the time it can be fixed with these three steps:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Hard Refresh:</strong> Sometimes your browser holds onto an old version of our scripts. Press <code>Ctrl + F5</code> (Windows) or <code>Cmd + Shift + R</code> (Mac) to force a fresh load.</li>
              <li><strong>Check File Size:</strong> To keep our stateless engine fast, we generally limit uploads (like in the <Link href="/tools/metadata-cleaner" className="text-blue-500 underline">PDF Cleaner</Link> or <Link href="/tools/passport-photo" className="text-blue-500 underline">Passport Photo Maker</Link>) to 5MB.</li>
              <li><strong>Incognito Mode:</strong> Try opening the tool in a Private/Incognito window. If it works there, one of your browser extensions might be interfering with the tool&apos;s logic.</li>
            </ul>
          </section>
  
          {/* Section 2: Browser Compatibility */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 border-l-4 border-blue-500 pl-4">Browser & Device Support</h2>
            <p>
              Our tools leverage modern Web APIs and Canvas technology to process your data locally. For the smoothest experience, I recommend using the latest versions of <strong>Google Chrome, Mozilla Firefox, or Microsoft Edge.</strong>
            </p>
            <p>
              If you are using a mobile device for the <Link href="/tools/privacy-blur" className="text-blue-500 underline">Privacy Blur</Link> or <Link href="/tools/safe-zone-checker" className="text-blue-500 underline">Social Media Safe Zone</Link> tools, ensure your browser has permission to access files if you intend to upload or download results.
            </p>
          </section>
  
          {/* Section 3: Privacy Support */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 border-l-4 border-blue-500 pl-4">Privacy & Data Requests</h2>
            <p>
              A common question we get is: &quot;Can you delete my uploaded file?&quot; 
            </p>
            <p>
              The answer is: <strong>We don&apos;t have to!</strong> Because we use a stateless architecture, your files never touch a hard drive. They live only in your browser&apos;s RAM while the tool is active. The moment you refresh or close the page, that data is gone forever. You can read the full breakdown in our <Link href="/legal/privacy" className="text-blue-500 underline">Privacy Policy</Link>.
            </p>
          </section>
  
          {/* Section 4: Direct Support Link */}
          <section className="space-y-4 border-t border-slate-100 dark:border-slate-800 pt-8">
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 border-l-4 border-blue-500 pl-4">Still having trouble?</h2>
            <p>
              Before reaching out, I highly recommend checking our <Link href="/resources/faq" className="text-blue-500 underline font-bold">Global FAQ</Link> for instant answers to most tool-specific questions.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-[2.5rem] border border-blue-100 dark:border-blue-800 text-center space-y-4">
              <p className="font-medium text-slate-800 dark:text-slate-200">
                If your issue is still unresolved or if you&apos;ve found a bug, please don&apos;t hesitate to contact me.
              </p>
              <Link 
                href="/legal/contact" 
                className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl font-bold transition-all active:scale-95"
              >
                Go to Contact Page
              </Link>
            </div>
          </section>
        </div>
      </div>
    );
}