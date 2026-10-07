// src/components/shared/footer/footer.jsx

import FooterAbout from "./about";
import FooterFAQ from "./faq";
import FooterTerms from "./terms";
import FooterContact from "./contact";
import MissionSection from "@/components/home/mission-section";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-100 dark:border-slate-800 bg-background text-foreground mt-20">
      <div className="container mx-auto px-6 py-16">
        <MissionSection />
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <FooterAbout />
          <FooterFAQ />
          <FooterTerms />
          <FooterContact />
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-50 dark:border-slate-900 gap-4">
          <p className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} xdevutilities. all rights reserved. <br />
            <span className="mt-2 italic">Build by: Debojyoti  Chakraborty</span>
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <span className="text-[11px] text-slate-400 font-semibold">Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}