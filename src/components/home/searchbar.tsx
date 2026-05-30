// src/components/home/searchbar.tsx

"use client";

import { useState, useRef, useEffect } from "react";
import { Search, X, Command, ArrowUpRight, MonitorSmartphone, Cpu, Sparkles } from "lucide-react";
import { tools } from "@/lib/tools-data";
import Link from "next/link";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredTools = tools.filter((tool) =>
    tool.title.toLowerCase().includes(query.toLowerCase()) ||
    tool.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape") {
        setQuery("");
        inputRef.current?.blur();
        setIsFocused(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleClear = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  return (
    <div className="relative max-w-2xl mx-auto px-4 sm:px-0">
      
      {/* --- Gradient Glow Outline --- */}
      <div className={`absolute -inset-[1px] rounded-[1.5rem] overflow-hidden -z-10 transition-opacity duration-500 ${isFocused ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#8b5cf6_25%,#6366f1_50%,#8b5cf6_75%,#3b82f6_100%)] animate-rotate-gradient" />
      </div>

      {/* --- Main Search Input Area --- */}
      <div className={`relative flex items-center bg-card rounded-[1.5rem] shadow-sm border transition-all duration-300 ${
        isFocused ? "border-transparent shadow-2xl ring-4 ring-primary/5" : "border-border shadow-sm"
      }`}>
        <div className="pl-5 text-slate-400">
          <Search size={18} strokeWidth={1.5} className={isFocused ? 'text-primary' : ''} />
        </div>

        <input
          ref={inputRef}
          type="text"
          value={query}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for tools (e.g. passport, pdf)..."
          className="w-full h-[56px] sm:h-[64px] pl-4 pr-12 bg-transparent outline-none text-foreground dark:text-slate-100 text-base sm:text-lg placeholder:text-slate-400/60 font-medium"
        />

        <div className="absolute right-4 flex items-center gap-3">
          {query.length > 0 ? (
            <button 
              onClick={handleClear} 
              className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl text-slate-400 hover:text-red-500 transition-all"
            >
              <X size={16} />
            </button>
          ) : (
            <div className="hidden sm:flex items-center gap-1 px-2 py-1 bg-secondary border border-border rounded-lg opacity-40">
              <Command size={10} />
              <span className="text-[10px] font-semibold">K</span>
            </div>
          )}
        </div>
      </div>
      
      {/* --- Floating Results Dropdown --- */}
      {query.length > 0 && isFocused && (
        <div className="absolute top-full left-0 right-0 mt-3 p-2 bg-card border border-border rounded-[2rem] shadow-premium z-[100] animate-in fade-in slide-in-from-top-2 duration-300 mobile-edge">
          <div className="px-5 py-3 text-[10px] font-semibold text-slate-400/60 flex items-center justify-between border-b border-border/40 mb-2">
            <span>Matching Utilities({filteredTools.length})</span>
            <div className="flex items-center gap-1">
               <Sparkles size={10} />
               <span>Search Results</span>
            </div>
          </div>
          
          <div className="max-h-[380px] overflow-y-auto p-1.5 space-y-1 custom-scrollbar">
             {filteredTools.length > 0 ? (
               filteredTools.map((tool) => (
                 <Link 
                   key={tool.id} 
                   href={tool.href}
                   className="flex items-center justify-between gap-4 p-4 hover:bg-secondary/80 rounded-[1.2rem] transition-all group border border-transparent hover:border-border/40"
                 >
                   <div className="flex items-center gap-4 min-w-0">
                     <div className="w-10 h-10 bg-background border border-border rounded-xl flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:border-primary/20 transition-all">
                        <Cpu size={18} strokeWidth={1.5} />
                     </div>
                     <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 overflow-hidden">
                        <span className="text-sm font-semibold text-foreground dark:text-slate-100 truncate group-hover:translate-x-1 transition-transform duration-300">
                            {tool.title}
                        </span>
                        <div className="flex items-center gap-2">
                           <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />
                           <span className="text-[10px] text-slate-400 font-medium lowercase italic">
                              {tool.category}
                           </span>
                        </div>
                      </div>
                   </div>
                   
                   <div className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-300 pr-2">
                      <ArrowUpRight size={18} className="text-primary" strokeWidth={1.5} />
                   </div>
                 </Link>
               ))
             ) : (
               <div className="py-12 text-center flex flex-col items-center gap-3">
                 <div className="p-3 bg-secondary/50 rounded-full">
                    <MonitorSmartphone size={24} className="text-slate-300" />
                 </div>
                 <p className="text-sm text-slate-400 font-medium italic">No matches for &quot;{query}&quot;</p>
                 <button onClick={handleClear} className="text-xs text-primary font-semibold hover:underline">Clear search filters</button>
               </div>
             )}
          </div>
        </div>
      )}
    </div>
  );
}