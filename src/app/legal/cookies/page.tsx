// src/app/resources/legal/cookies/page.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Transparency & Usage ",
  description: "Learn how xdevutilities uses cookies to improve user experience and serve non-intrusive advertisements.",
  alternates: { canonical: 'https://www.xdevutilities.com/legal/cookies' },
};

export default function CookiePolicyPage() {
    return (
      <div className="container mx-auto px-6 py-20 max-w-4xl min-h-screen">
        <h1 className="text-4xl font-semibold text-foreground dark:text-slate-100 mb-8">Cookie Policy</h1>
        
        <div className="space-y-10 text-[15px] text-muted-foreground dark:text-slate-400 leading-relaxed">
          <p>
            I believe in a web that is fast, secure, and transparent. While xdevutilities is built on a <strong>stateless architecture</strong> to protect your privacy, we use a small amount of data stored in cookies to ensure the platform functions correctly and stays free for everyone.
          </p>
          
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 border-l-4 border-blue-500 pl-4">What are cookies?</h2>
            <p>
              Cookies are small text files stored on your device by your browser. They allow websites to &quot;remember&quot; certain pieces of information to make your browsing experience smoother. At xdevutilities, I use them very selectively.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 border-l-4 border-blue-500 pl-4">Types of Cookies We Use</h2>
            <ul className="space-y-6">
              <li className="p-5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-border">
                <strong className="text-foreground dark:text-slate-100 block mb-1">1. Essential & Functional Cookies</strong>
                I use local storage to remember your aesthetic preferences, such as Dark Mode or Light Mode settings. This ensures that every time you return to the platform, it looks exactly how you want it to, without you having to toggle settings repeatedly.
              </li>
              
              <li className="p-5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-border">
                <strong className="text-foreground dark:text-slate-100 block mb-1">2. Advertising & Analytics (AdSense)</strong>
                To keep our high-performance tools free without charging subscription fees, we partner with <strong>Google AdSense</strong>. Google, as a third-party vendor, uses cookies to serve ads on our site. Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit to xdevutilities and other sites on the Internet.
              </li>

              <li className="p-5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-border">
                <strong className="text-foreground dark:text-slate-100 block mb-1">3. The DoubleClick Cookie</strong>
                Google uses the DoubleClick cookie on our site to serve personalized ads. I want you to know that your personal files processed in our tools (like PDFs or images) are <strong>never</strong> shared with these advertising systems. The cookies only track general browsing behavior.
              </li>
            </ul>
          </section>
  
          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 border-l-4 border-blue-500 pl-4">Your Choices & Control</h2>
            <p>
              I respect your right to privacy. You can choose to disable cookies through your individual browser settings. However, please note that disabling essential cookies might affect how our site displays on your device.
            </p>
            <p>
              If you wish to opt-out of personalized advertising by Google, you can do so by visiting the 
              <a href="https://www.google.com/settings/ads" target="_blank" className="text-blue-500 font-bold hover:underline ml-1">Google Ads Settings</a> page.
            </p>
          </section>

          {/* Section 4 */}
          <section className="pt-8 border-t border-slate-100 dark:border-slate-800">
            <p className="italic">
              For more information on how we handle your data, please review our <a href="/legal/privacy" className="text-blue-500 hover:underline">Privacy Policy</a>. If you have any technical questions about our cookie usage, feel free to reach out via the <a href="/legal/contact" className="text-blue-500 hover:underline">Contact Page</a>.
            </p>
          </section>
        </div>
      </div>
    );
}