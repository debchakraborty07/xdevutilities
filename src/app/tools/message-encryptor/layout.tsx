// src/app/tools/message-encryptor/layout.tsx

import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function MessageEncryptorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl text-foreground bg-background mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb - SEO এর জন্য ভালো */}
        <nav className="flex items-center gap-2 text-[10px] font-bold text-slate-400 mb-12">
          <Link href="/" className="hover:text-foreground dark:hover:text-slate-100 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/tools" className="hover:text-foreground dark:hover:text-slate-100 transition-colors">Tools</Link>
          <ChevronRight size={12} />
          <span className="text-foreground dark:text-slate-100">Message Encryptor</span>
        </nav>

        {children}
      </div>
    </div>
  );
}