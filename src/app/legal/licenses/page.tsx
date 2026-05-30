// src/app/resources/legal/licenses/page.tsx


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Licenses & Attribution ",
  description: "Transparency regarding the open-source technologies, proprietary algorithms, and licenses that power xdevutilities.",
  alternates: { canonical: 'https://www.xdevutilities.com/legal/licenses' },
};

export default function LicensesPage() {
    return (
      <div className="container mx-auto px-6 py-20 max-w-4xl min-h-screen">
        <h1 className="text-4xl font-semibold text-foreground dark:text-slate-100 mb-8">Licenses and Open Source</h1>
        
        <div className="space-y-10 text-[15px] text-muted-foreground dark:text-slate-400 leading-relaxed">
          <p>
            Transparency is a core value here at xdevutilities. This platform is the result of combining high-performance proprietary logic with the power of modern open-source technologies. I believe in giving credit where it&apos;s due and adhering to the highest standards of software licensing.
          </p>
  
          {/* Section 1: Proprietary Assets */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 border-l-4 border-blue-500 pl-4">Proprietary Software & Logic</h2>
            <p>
              The unique &quot;Stateless&quot; processing architecture, custom-built algorithms for the <strong>ATS Resume Scanner</strong>, and the <strong>SQL to Mermaid</strong> parsing engine are the intellectual property of xdevutilities. 
            </p>
            <p>
              While these tools are provided free for personal and professional use, the underlying source code, design patterns, and proprietary processing logic are protected. These may not be cloned, redistributed, or sold without explicit written permission from the platform owner.
            </p>
          </section>
  
          {/* Section 2: Open Source Attribution */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 border-l-4 border-blue-500 pl-4">Open Source Attribution</h2>
            <p>
              xdevutilities stands on the shoulders of giants. I am incredibly grateful to the global developer community for providing the robust libraries that make this platform possible. Below are the primary technologies and their respective licenses:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="p-5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-border">
                <h3 className="font-bold text-foreground dark:text-slate-100 mb-1">Next.js & React</h3>
                <p className="text-xs italic">Licensed under MIT</p>
                <p className="text-[13px] mt-2">The foundation of our high-speed, server-side rendered application.</p>
              </div>
              
              <div className="p-5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-border">
                <h3 className="font-bold text-foreground dark:text-slate-100 mb-1">Tailwind CSS</h3>
                <p className="text-xs italic">Licensed under MIT</p>
                <p className="text-[13px] mt-2">Powers our minimalist and responsive design system.</p>
              </div>

              <div className="p-5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-border">
                <h3 className="font-bold text-foreground dark:text-slate-100 mb-1">Lucide Icons</h3>
                <p className="text-xs italic">Licensed under ISC</p>
                <p className="text-[13px] mt-2">Beautifully crafted icons used throughout the platform navigation.</p>
              </div>

              <div className="p-5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-border">
                <h3 className="font-bold text-foreground dark:text-slate-100 mb-1">Shadcn UI</h3>
                <p className="text-xs italic">Licensed under MIT</p>
                <p className="text-[13px] mt-2">Provides the accessible and aesthetic component architecture.</p>
              </div>
            </div>
          </section>
  
          {/* Section 3: Third Party Services */}
          <section className="space-y-4 pt-6">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 border-l-4 border-blue-500 pl-4">Third-Party Assets</h2>
            <p>
              Our processing engines utilize optimized environments (such as Python-based backends for complex imaging tasks) and secure cloud infrastructure like Firebase for authentication. All such services are used in accordance with their respective terms of service and professional usage tiers.
            </p>
            <p className="text-sm italic">
              *All other trademarks, logos, and brands are the property of their respective owners.
            </p>
          </section>

          {/* Section 4: Contact for licensing */}
          <section className="p-8 bg-blue-50 dark:bg-blue-900/10 rounded-[2.5rem] border border-blue-100 dark:border-blue-900/30 text-center">
            <p className="font-medium text-slate-800 dark:text-slate-200">
              For any questions regarding licensing, attribution, or requests for commercial collaboration, please reach out via our <a href="/legal/contact" className="text-blue-500 font-bold hover:underline">Contact Page</a>.
            </p>
          </section>
        </div>
      </div>
    );
}