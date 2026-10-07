//src/components/shared/navbar/logo.jsx

import Link from "next/link";
import { Terminal } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 hover:opacity-90 transition-all active:scale-95 group">
      <div className="bg-background text-foreground p-1.5 rounded-lg shadow-sm group-hover:shadow-blue-500/20 transition-all">
        <Terminal size={18} className="text-black dark:text:white bg-background" />
      </div>
      <span className="text-lg font-semibold tracking-normal flex items-center">
        <span className="text-blue-500 dark:text-blue-400">xdev</span>
        <span className="text-slate-400 dark:text-muted-foreground">utilities</span>
      </span>
    </Link>
  );
}