// src/app/dashboard/components/tabs-bookmarks.jsx

"use client";
import Link from "next/link";
import { tools } from "@/lib/tools-data";
import { Bookmark, ExternalLink } from "lucide-react";

export default function BookmarksTab({ profile }) {
  const bookmarkedTools = tools.filter(t => profile?.bookmarks?.includes(t.id));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-3 duration-500">
      {bookmarkedTools.length > 0 ? bookmarkedTools.map(t => (
        <div key={t.id} className="p-5 md:p-6 rounded-[24px] bg-background text-foreground border border-slate-100 dark:border-slate-800 flex justify-between items-center shadow-sm hover:shadow-md transition-all group">
          <div className="space-y-1">
            <h4 className="font-bold text-foreground dark:text-slate-100 text-sm md:text-base group-hover:text-indigo-500 transition-colors">{t.title}</h4>
            <p className="text-[10px] text-slate-400 font-semibold">{t.category}</p>
          </div>
          <Link href={t.href} className="p-3 bg-background text-foreground rounded-xl bg-background text-foreground transition-all">
            <ExternalLink size={18} />
          </Link>
        </div>
      )) : (
        <div className="col-span-full py-20 rounded-[40px] border-2 border-dashed border-slate-100 dark:border-slate-800 text-center space-y-4">
          <div className="w-16 h-16 bg-background text-foreground rounded-full flex items-center justify-center mx-auto text-slate-200">
            <Bookmark size={32} />
          </div>
          <div className="space-y-1">
            <p className="text-base font-bold text-foreground dark:text-slate-100">No bookmarks yet</p>
            <p className="text-sm text-slate-400 max-w-[200px] mx-auto leading-relaxed">Your favorite tools will appear here for quick access.</p>
          </div>
          <Link href="/tools" className="inline-block text-xs font-bold text-indigo-500 hover:underline">Explore all tools</Link>
        </div>
      )}
    </div>
  );
}