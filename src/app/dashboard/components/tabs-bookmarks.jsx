// src/app/dashboard/components/tabs-bookmarks.jsx

"use client";

import Link from "next/link";
import { tools } from "@/lib/tools-data";
import { Bookmark, ExternalLink, ArrowRight, BookmarkCheck } from "lucide-react";
import { useAuth } from "@/context/auth-context";
import { Button } from "@/components/ui/button";

export default function BookmarksTab({ profile }) {
  const { toggleBookmark } = useAuth();
  const bookmarkedTools = tools.filter((t) => profile?.bookmarks?.includes(t.id));

  return (
    <div className="w-full space-y-6 animate-in fade-in duration-300">

      {/* হেডার */}
      <div className="flex items-center justify-between px-1">
        <div>
          <h3 className="text-lg font-bold text-foreground">Saved Utilities</h3>
          <p className="text-xs text-muted-foreground">Quick access to your most frequently used tools</p>
        </div>
        {bookmarkedTools.length > 0 && (
          <span className="text-xs font-semibold px-3 py-1 bg-muted rounded-full border border-border text-muted-foreground">
            {bookmarkedTools.length} {bookmarkedTools.length === 1 ? "tool" : "tools"} saved
          </span>
        )}
      </div>

      {/* বুকমার্ক গ্রিড (পুরো ফুল-উইডথ জুড়ে ২ কলাম) */}
      {bookmarkedTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {bookmarkedTools.map((t) => (
            <div
              key={t.id}
              className="p-5 sm:p-6 rounded-2xl bg-card text-card-foreground border border-border flex justify-between items-center shadow-sm hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <div className="space-y-1.5 min-w-0 pr-4 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-bold text-foreground text-sm sm:text-base group-hover:text-primary transition-colors">
                    {t.title}
                  </h4>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground border border-border/50">
                    {t.category}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-1 leading-relaxed">
                  {t.description || "Launch utility workspace"}
                </p>
              </div>

              {/* অ্যাকশন বাটনস */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => toggleBookmark(t.id)}
                  title="Remove from bookmarks"
                  aria-label={`Remove ${t.title} from bookmarks`}
                  className="p-2.5 rounded-xl text-primary hover:bg-muted transition-colors border border-transparent hover:border-border"
                >
                  <BookmarkCheck size={18} className="fill-primary/20" />
                </button>

                <Link
                  href={t.href}
                  title={`Open ${t.title}`}
                  className="p-2.5 bg-muted hover:bg-primary hover:text-primary-foreground text-foreground rounded-xl border border-border transition-all active:scale-95"
                >
                  <ExternalLink size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-20 rounded-3xl border-2 border-dashed border-border bg-card/40 text-center space-y-4 p-6 shadow-sm">
          <div className="w-14 h-14 bg-muted border border-border rounded-2xl flex items-center justify-center mx-auto text-muted-foreground">
            <Bookmark size={26} className="opacity-60" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-foreground">No bookmarks saved yet</h4>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">
              Click the bookmark icon on any tool page to pin your favorite utilities here for instant access.
            </p>
          </div>
          <div className="pt-2">
            <Button asChild variant="outline" className="h-10 rounded-xl border-border bg-card hover:bg-muted text-xs font-semibold">
              <Link href="/tools" className="flex items-center gap-2">
                <span>Explore all 10 tools</span>
                <ArrowRight size={14} />
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}