// src/app/tools/page.tsx

import { tools } from "@/lib/tools-data";
import ToolCard from "@/components/home/tool-card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SearchBar from "@/components/home/searchbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Web Utilities ",
  description: "Browse our complete collection of privacy-focused developer tools.",
  alternates: { canonical: 'https://www.xdevutilities.com/tools' },
};


export default function AllToolsPage() {
  // ক্যাটাগরি অনুযায়ী টুলগুলো গ্রুপ করা
  const categories = Array.from(new Set(tools.map((t) => t.category)));

  return (
    <div className="container mx-auto px-6 max-w-[1400px] mt-20 animate-in fade-in duration-700">
      {/* Back Button */}
      <Link 
        href="/" 
        className="flex items-center gap-2 text-slate-400 hover:text-foreground dark:hover:text-slate-100 transition-colors mb-6 text-sm font-medium"
      >
        <ArrowLeft size={16} /> Back to home
      </Link>

      <div className="mb-20">
         <SearchBar /> 
      </div>

      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl mt-10 font-semibold text-foreground dark:text-slate-100 mb-4">
          Browse All Utilities
        </h1>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          Discover our full suite of privacy-first digital tools. Designed for speed, accuracy, and absolute data security.
        </p>
      </div>

      {/* Tools List Grouped by Category */}
      <div className="space-y-20">
        {categories.map((cat) => (
          <section key={cat} className="space-y-8">
            <h2 className="font-bold text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-4">
              {cat} Utilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools
                .filter((t) => t.category === cat)
                .map((tool) => (
                   // এখানে তোমার আগের New badge লজিক চাইলে যোগ করতে পারো
                   <ToolCard isNew={false} key={tool.id} {...tool} />
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}