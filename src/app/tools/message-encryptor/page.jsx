// src/app/tools/message-encryptor/page.jsx

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import UsageGuide from "./components/usage-guide";
import FAQSection from "./components/faq-section";
import RelatedSidebar from "@/components/shared/related-sidebar";
import SaveToolButton from "@/components/shared/save-tool-button";
import EncryptorWrapper from "./components/encryptor-wrapper";

export const metadata = {
  title: "Private Message Encryptor | AES-256 Secure Notes | xdevutilities",
  description: "Secure your sensitive text and confidential notes with industrial-grade AES-256 encryption. Fast, stateless, and completely private with zero data retention.",
  alternates: {
    canonical: "https://www.xdevutilities.com/tools/message-encryptor",
  },
  openGraph: {
    title: "Private Message Encryptor | xdevutilities",
    description: "Secure confidential text with AES-256 encryption and zero persistent data retention.",
    url: "https://www.xdevutilities.com/tools/message-encryptor",
    siteName: "xdevutilities",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Message Encryptor | xdevutilities",
    description: "Secure confidential text with AES-256 encryption and zero persistent data retention.",
  },
};

export default function MessageEncryptorPage() {
  return (
    <div className="w-full py-6">
      {/* Header Section */}
      <div className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-foreground dark:hover:text-slate-100 transition-colors mb-6 text-sm font-medium"
        >
          <ArrowLeft size={16} /> Back to tools
        </Link>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-4">
          <h1 className="text-3xl sm:text-4xl font-semibold text-foreground dark:text-slate-100 tracking-tight">
            Private Message Encryptor
          </h1>

          <div className="pt-1">
            <SaveToolButton toolId="message-encryptor" />
          </div>
        </div>

        <p className="text-muted-foreground dark:text-slate-400 max-w-2xl leading-relaxed font-medium">
          Secure your sensitive notes and private data using industrial-grade AES-256 encryption. Stateless execution with strict zero data retention.
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start">
        <div className="flex-1 w-full min-w-0">
          <section className="mb-24 bg-card border border-border rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-10 shadow-sm transition-all">
            <EncryptorWrapper />
          </section>

          <div className="max-w-4xl space-y-24 border-t border-slate-100 dark:border-slate-800 pt-24">
            <UsageGuide />
            <FAQSection />
          </div>
        </div>

        <aside className="hidden lg:block w-[300px] xl:w-[350px] shrink-0 sticky top-28">
          <RelatedSidebar currentToolId="message-encryptor" category="Privacy" />
        </aside>
      </div>

      <div className="mt-12 pt-8 border-t border-border/40 text-center">
        <p className="text-[11px] text-slate-400 dark:text-muted-foreground font-medium">
          xdevutilities Security Infrastructure • Data-Zero Protocol
        </p>
      </div>
    </div>
  );
}