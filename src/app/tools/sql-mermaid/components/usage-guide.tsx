// src/app/tools/sql-mermaid/components/usage-guide.tsx

import { Zap, Shield, Database, Layout, BookOpen, Info, CheckCircle2 } from "lucide-react";

export default function UsageGuide() {
  return (
    <div className="space-y-20">
      <div className="space-y-6 text-left">
        <h2 className="text-3xl font-bold text-foreground dark:text-slate-100">Database Visualization Made Simple</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg max-w-3xl">
          Tired of manual schema mapping? Our SQL to Mermaid generator automates the process of creating Entity Relationship (ER) diagrams, 
          helping developers understand complex database architectures in seconds.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <GuidelineItem 
          icon={<Database className="text-indigo-500" />} 
          title="SQL Script Support" 
          desc="Paste your standard SQL CREATE TABLE statements. We support MySQL, PostgreSQL, SQL Server, and SQLite dialects." 
        />
        <GuidelineItem 
          icon={<Zap className="text-amber-500" />} 
          title="Instant Rendering" 
          desc="Our backend parses the schema and generates a Mermaid.js compatible code, which is rendered visually in real-time." 
        />
        <GuidelineItem 
          icon={<Layout className="text-emerald-500" />} 
          title="Professional Output" 
          desc="Export your diagrams as high-quality SVGs. Perfect for project documentation, README files, or technical presentations." 
        />
        <GuidelineItem 
          icon={<Shield className="text-blue-500" />} 
          title="Zero Storage Policy" 
          desc="Your database schema is never stored. Processing happens in temporary memory and is purged immediately after use." 
        />
      </div>

      <div className="p-10 bg-background text-foreground rounded-[3rem] space-y-8">
        <h3 className="text-xl font-bold flex items-center gap-2 font-mono">
          <Info className="text-blue-400" /> Best Practices for Visualizing
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex gap-3">
            <CheckCircle2 className="text-emerald-400 shrink-0" size={18} />
            <p className="text-sm text-slate-400 font-medium">Focus on core tables to avoid cluttered diagrams</p>
          </div>
          <div className="flex gap-3">
            <CheckCircle2 className="text-emerald-400 shrink-0" size={18} />
            <p className="text-sm text-slate-400 font-medium">Ensure column names are descriptive and alphanumeric</p>
          </div>
          <div className="flex gap-3">
            <CheckCircle2 className="text-emerald-400 shrink-0" size={18} />
            <p className="text-sm text-slate-400 font-medium">Separate multiple CREATE TABLE statements with semicolons</p>
          </div>
          <div className="flex gap-3">
            <CheckCircle2 className="text-emerald-400 shrink-0" size={18} />
            <p className="text-sm text-slate-400 font-medium">Download SVG for infinite zooming in documentation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GuidelineItem({ icon, title, desc }: any) {
  return (
    <div className="space-y-3 p-2">
      <div className="w-12 h-12 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-inner">{icon}</div>
      <h4 className="text-lg font-semibold text-foreground dark:text-slate-100">{title}</h4>
      <p className="text-sm text-muted-foreground dark:text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}