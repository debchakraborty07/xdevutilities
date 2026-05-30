// src/components/home/hero.tsx

import SearchBar from "./searchbar";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-100/50 dark:from-slate-900/20 via-transparent to-transparent" />

      <div className="container mx-auto max-w-4xl text-center space-y-10">
        <h1 className="text-5xl md:text-7xl font-semibold text-foreground dark:text-slate-50 leading-[1.1]">
          Free Tools
          <span className="pl-4 text-slate-400">in One Place</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
          High-performance, privacy-focused utilities for your daily digital tasks. Fast, free, and secure.
        </p>
        
        {/* আলাদা করা সার্চবার কম্পোনেন্ট */}
        <SearchBar />
      </div>
    </section>
  );
}