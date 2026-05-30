// src/components/shared/footer/contact.tsx

import { Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function FooterContact() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[11px] font-bold text-foreground dark:text-slate-100">
        Support & Feedback
      </h3>
      <ul className="flex flex-col gap-3">
        <li>
         
          <Link href="/legal/contact" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground dark:hover:text-slate-100 transition-colors group">
            <Mail size={14} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
            <span>Official Support</span>
          </Link>
        </li>
        <li>
          <Link href="/legal/contact" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground dark:hover:text-slate-100 transition-colors group">
            <MessageSquare size={14} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
            <span>Request a Feature</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
