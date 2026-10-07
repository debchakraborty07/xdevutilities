// src/components/shared/footer/footer.jsx

import FooterAbout from "./about";
import FooterFAQ from "./faq";
import FooterTerms from "./terms";
import FooterContact from "./contact";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card/40 text-card-foreground mt-20">
      <div className="container mx-auto px-6 py-16 max-w-7xl">

        {/* Main Navigation & Legal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-16">
          <FooterAbout />
          <FooterFAQ />
          <FooterTerms />
          <FooterContact />
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border/60">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} xdevutilities. All rights reserved. <br className="sm:hidden" />
            <span className="italic mt-1 inline-block sm:inline sm:ml-1">Built with precision.</span>
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse" />
              <span className="text-xs text-muted-foreground font-semibold">Systems Operational</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}