// src/components/home/tool-section.tsx

"use client";
import { useState } from "react";
import ToolCard from "./tool-card";
import { LayoutGrid, Filter, ChevronRight } from "lucide-react";

export default function ToolSection({ tools }: { tools: any[] }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const categoryCounts = tools.reduce((acc: any, tool) => {
    acc[tool.category] = (acc[tool.category] || 0) + 1;
    return acc;
  }, {});

  const categories = ["all", ...Object.keys(categoryCounts)];

  const filteredTools = activeCategory === "all" 
    ? tools 
    : tools.filter(t => t.category === activeCategory);

  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  return (
    <section className="container mx-auto px-6 max-w-[1400px] mt-20 animate-in fade-in duration-700">
      
      {/* --- Filter Section Header --- */}
      <div className="flex flex-col gap-8 mb-12 border-b border-border/50 pb-8">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-blue-500 mb-1">
            <Filter size={14} strokeWidth={2} />
            <span className="text-[10px] font-semibold opacity-70">Catalog filter</span>
          </div>
          <h2 className="text-3xl font-semibold text-foreground dark:text-slate-100">
            Professional utilities
          </h2>
        </div>

        {/* --- Horizontal Scrollable Category Pills --- */}
        <div className="relative">
          {/* Scroll Area */}
          <div className="flex overflow-x-auto gap-2.5 pb-2 -mx-6 bg-background text-foreground px-6 no-scrollbar flex-nowrap scroll-smooth">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-[1.2rem] text-[13px] font-medium transition-all duration-300 border whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-background text-foreground border-slate-900 shadow-xl shadow-slate-900/10"
                    : "bg-background text-foreground border-border hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700"
                }`}
              >
                <span className="capitalize">{cat}</span>
                <div className={`w-1 h-1 rounded-full ${activeCategory === cat ? 'bg-white/40 dark:bg-slate-900/20' : 'bg-slate-300 dark:bg-slate-700'}`} />
                <span className={`text-[11px] ${activeCategory === cat ? 'opacity-80' : 'opacity-40'}`}>
                  {cat === "all" ? tools.length : categoryCounts[cat]}
                </span>
              </button>
            ))}
          </div>

          {/* Optional: Subtle Gradient Overlay to indicate scroll on mobile */}
          <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-background to-transparent pointer-events-none md:hidden" />
        </div>
      </div>

      {/* টুলস গ্রিড */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 lg:gap-12 transition-all">
        {filteredTools.length > 0 ? (
          filteredTools.map((tool) => {
            const isNew = new Date(tool.launchedAt) > oneMonthAgo && tool.status !== "Coming soon";
            return (
              <div key={tool.id} className="animate-in slide-in-from-bottom-2 duration-500">
                <ToolCard {...tool} isNew={isNew} />
              </div>
            );
          })
        ) : (
          <div className="col-span-full py-20 text-center border border-dashed border-border rounded-[2.5rem] bg-background text-foreground">
            <p className="bg-background text-foreground italic font-medium">No tools found in this category.</p>
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="mt-16 flex items-center justify-center gap-3 text-foreground dark:text-muted-foreground pt-12">
         <LayoutGrid size={14} strokeWidth={1.5} />
         <p className="text-[12px] font-medium opacity-60">
           Found {filteredTools.length} utilities matching your filter
         </p>
      </div>
    </section>
  );
}