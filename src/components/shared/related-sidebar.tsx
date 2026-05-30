// src/components/shared/related-sidebar.tsx

import Link from "next/link";
import { tools } from "@/lib/tools-data";
import { LayoutGrid, ChevronRight, Zap, ArrowUpRight } from "lucide-react";

interface RelatedSidebarProps {
  currentToolId: string;
  category: string;
}

export default function RelatedSidebar({ currentToolId, category }: RelatedSidebarProps) {
  // ১. লজিক: একই ক্যাটেগরির টুল আগে আসবে, এরপর বাকিগুলো
  const sameCategoryTools = tools.filter(t => t.category === category && t.id !== currentToolId);
  const otherTools = tools.filter(t => t.category !== category && t.id !== currentToolId);
  
  const finalRelated = [...sameCategoryTools, ...otherTools].slice(0, 6);

  if (finalRelated.length === 0) return null;

  return (
    <aside className="hidden lg:block w-full sticky top-28 h-fit animate-in fade-in duration-700">
      <div className="bg-card border border-border/60 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500">
        
        {/* Header Section */}
        <div className="p-6 border-b border-border/50 bg-secondary/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-background rounded-xl border border-border/60 text-primary/60">
              <LayoutGrid size={16} strokeWidth={1.5} />
            </div>
            <h3 className="text-sm font-semibold text-foreground dark:text-slate-100 tracking-normal">
              Related utilities
            </h3>
          </div>
          <Zap size={14} className="text-blue-500/40" />
        </div>

        {/* List of Utilities */}
        <div className="p-3 space-y-1.5">
          {finalRelated.map((tool) => (
            <Link 
              href={tool.href} 
              key={tool.id} 
              className="group flex items-center justify-between p-4 rounded-2xl hover:bg-secondary/80 transition-all duration-300 border border-transparent hover:border-border/40"
            >
              <div className="flex flex-col gap-1 min-w-0 pr-2">
                <h4 className="text-[13px] font-semibold text-slate-700 dark:text-slate-300 group-hover:text-blue-500 transition-colors truncate">
                  {tool.title}
                </h4>
                <p className="text-[10px] text-slate-400 font-medium line-clamp-1 italic opacity-70">
                  {tool.description}
                </p>
              </div>
              
              {/* Subtle Indicator */}
              <div className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0">
                <ArrowUpRight size={14} className="text-blue-500" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <Link 
          href="/tools" 
          className="block p-4 bg-secondary/10 border-t border-border/40 text-center text-[11px] font-semibold text-slate-400 hover:text-primary transition-colors duration-300"
        >
          Explore all
        </Link>
      </div>

      {/* Subtle Bottom Glow Effect */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full h-20 bg-blue-500/5 blur-[60px] -z-10 pointer-events-none" />
    </aside>
  );
}