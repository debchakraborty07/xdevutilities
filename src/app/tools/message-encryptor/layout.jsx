// src/app/tools/message-encryptor/layout.jsx

import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function MessageEncryptorLayout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1400px] text-foreground bg-background mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb - SEO বান্ধব নেভিগেশন */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
          <Link href="/" className="hover:text-foreground dark:hover:text-slate-100 transition-colors">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link href="/" className="hover:text-foreground dark:hover:text-slate-100 transition-colors">
            Tools
          </Link>
          <ChevronRight size={12} />
          <span className="text-foreground dark:text-slate-100 font-bold">
            Message Encryptor
          </span>
        </nav>

        {children}
      </div>
    </div>
  );
}