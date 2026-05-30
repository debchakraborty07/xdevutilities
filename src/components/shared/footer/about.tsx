// src/components/shared/footer/about.tsx

import Link from "next/link";

export default function FooterAbout() {
  return (
    <div className="flex flex-col gap-4 max-w-[320px]">
      <div className="flex items-center">
      <span className="text-blue-500 dark:text-blue-400">xdev</span>
      <span className="text-slate-400 dark:text-muted-foreground">utilities</span>
      </div>
      <p className="text-xs leading-relaxed text-muted-foreground dark:text-slate-400">
        xdevutilities provides high-performance, private-by-design digital tools. 
        We process your data in temporary memory, ensuring your professional 
        and personal documents remain yours alone. Fast, secure, and bloat-free.
      </p>
    </div>
  );
}