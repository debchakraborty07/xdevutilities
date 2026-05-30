// src/app/tools/metadata-cleaner/components/usage-guide.tsx

import { ShieldAlert, Fingerprint, Lock, EyeOff, CheckCircle2, Monitor, FileSearch, Info } from "lucide-react";

export default function UsageGuide() {
  return (
    <div className="space-y-20">
      {/* Introduction */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground dark:text-slate-100">Why PDF Metadata Matters</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
          Every PDF contains hidden data called metadata. This can leak your name, location, and the software you use. 
          Our tool ensures your digital footprint is erased before you share sensitive documents.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <GuideItem 
          icon={<Fingerprint className="text-rose-500" />}
          title="Identity Protection"
          desc="Strips away your computer's username and the original author's real name."
        />
        <GuideItem 
          icon={<ShieldAlert className="text-amber-500" />}
          title="Tech Signature Removal"
          desc="Removes info about the software and version used to create the document."
        />
        <GuideItem 
          icon={<Lock className="text-emerald-500" />}
          title="Safe Distribution"
          desc="Ensures only the visible content is shared, making it safe for public or professional use."
        />
        <GuideItem 
          icon={<EyeOff className="text-blue-500" />}
          title="Total Anonymity"
          desc="Clears creation dates, modification history, and document subjects instantly."
        />
      </div>

      {/* Important Note: System vs Internal Metadata ( addressing the confusion ) */}
      <div className="bg-background text-foreground border border-slate-100 dark:border-slate-800 p-8 md:p-12 rounded-[3rem] space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="bg-background text-foreground p-4 rounded-3xl shadow-sm shrink-0">
            <Monitor className="text-blue-500" size={32} />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground dark:text-slate-100">Understanding System vs. Internal Metadata</h3>
            <p className="text-sm text-muted-foreground dark:text-slate-400 leading-relaxed">
              When you check file properties on Windows, you might still see tags like <span className="font-semibold">"Owner"</span> or <span className="font-semibold">"Computer"</span>. 
              It is important to understand that these are <span className="text-foreground dark:text-slate-100 font-medium underline decoration-blue-500/30">System Attributes</span> assigned by your own PC the moment you download the file. They are local to your hard drive and are not part of the file itself.
            </p>
            <p className="text-sm text-muted-foreground dark:text-slate-400 leading-relaxed">
              Our tool strips the <span className="text-foreground dark:text-slate-100 font-medium underline decoration-emerald-500/30">Internal Metadata</span> (Author, Software, Original Creation Date) embedded <span className="italic">inside</span> the PDF&apos;s code. This is the hidden data that travels with the file when you email it. To verify the cleaning, open the PDF in a browser and check <strong>Document Properties (Ctrl+D)</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Checklist */}
      <div className="bg-background text-foreground p-10 rounded-[3rem] space-y-8">
        <div className="flex items-center gap-3">
          <FileSearch className="text-blue-400" size={24} />
          <h3 className="text-xl font-semibold">Verification Checklist</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CheckItem text="Right-click properties only show local OS info" />
          <CheckItem text="Internal 'Author' field is confirmed blank" />
          <CheckItem text="'Producer' and 'Creator' tags are removed" />
          <CheckItem text="Original timestamps are purged from file code" />
        </div>
      </div>
    </div>
  );
}

function GuideItem({ icon, title, desc }: any) {
  return (
    <div className="space-y-3">
      <div className="w-12 h-12 bg-background text-foreground rounded-2xl flex items-center justify-center shadow-inner">{icon}</div>
      <h4 className="text-lg font-semibold bg-background text-foreground">{title}</h4>
      <p className="text-sm bg-background text-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex gap-3 items-center">
      <CheckCircle2 className="text-emerald-400 shrink-0" size={18} />
      <p className="text-sm text-slate-400">{text}</p>
    </div>
  );
}