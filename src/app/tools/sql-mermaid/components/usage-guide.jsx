// src/app/tools/sql-mermaid/components/usage-guide.jsx

import { Zap, Shield, Database, Layout, Info, CheckCircle2, GitBranch, Terminal, Eye } from "lucide-react";

export default function UsageGuide() {
  return (
    <div className="space-y-20 py-10 border-t border-border/60 text-foreground bg-background">

      {/* AdSense এবং SEO-বান্ধব তথ্যবহুল ডাটাবেস আর্কিটেকচার ও কোড-অ্যাজ-ডায়াগ্রাম ব্লগ সেকশন */}
      <article className="space-y-8">
        <header className="space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground dark:text-slate-100 sm:text-4xl">
            Database Visualization Made Simple
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Tired of manual schema mapping? Our SQL to Mermaid generator automates the process of creating Entity Relationship (ER) diagrams, helping developers understand complex database architectures in seconds.
          </p>
        </header>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <GitBranch size={22} className="text-blue-500" /> The Paradigm Shift: Code-as-Diagram in Modern DevOps
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            In legacy development cycles, mapping database schemas required dragging and dropping graphical card shapes inside manual tools like Visio or Draw.io. However, static drawings suffer from a critical flaw: they instantly decay as soon as database migrations are pushed to production. This leads to inaccurate architecture documents.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            The modern software ecosystem solves this through the <strong>Code-as-Diagram</strong> approach. By representing your infrastructure and relationships as raw text and parsing them dynamically, teams keep documentation directly linked to migration scripts. Our translator maps raw SQL statements into clean declarative markdown in real-time, removing the overhead of manual diagram upkeep.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Terminal size={22} className="text-emerald-500" /> Decoding Entity-Relationship (ER) Cardinality & Mapping Rules
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Entity-Relationship Diagrams (ERDs) rely on standardized geometric connectors to define primary keys (PK), foreign keys (FK), and data cardinality. Translating tabular SQL strings into relational connection nodes requires parsing strict relational definitions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="p-6 rounded-2xl border border-border bg-card text-card-foreground shadow-sm">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                One-to-Many (1:N)
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Modeled through standard foreign key relationships where a reference column points to a primary key in a parent entity.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card text-card-foreground shadow-sm">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                Many-to-Many (N:M)
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Parsed by detecting junction tables that house composite keys referencing two separate entity metrics.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card text-card-foreground shadow-sm">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                Data Redaction
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Strips out internal table structures, triggers, and engine specifications to render clean, readable nodes.
              </p>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Our translation logic scans column configurations to isolate constraints such as <code>PRIMARY KEY</code> and <code>FOREIGN KEY REFERENCES</code>. This allows the compiler to draw standard connections (such as Crow's Foot notation links) directly into the vector SVG render pipeline automatically.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Eye size={22} className="text-rose-500" /> Scalable SVG Exports for Engineering Documentation
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Bitmap images (like PNG or JPG) quickly lose readability and become pixelated when scaling up complex, enterprise-level schemas containing dozens of interconnected tables.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            By compiling your schema directly into Scalable Vector Graphics (SVG), we ensure infinitely sharp zooming. SVGs remain fully responsive, allowing developers to embed ER diagrams directly into markdown readmes, confluence architectures, or Git repositories while keeping file payloads lightweight and sharp on high-DPI displays.
          </p>
        </section>
      </article>

      <div className="border-t border-slate-100 dark:border-slate-800 my-12" />

      {/* মূল গাইডলাইন গ্রিড */}
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

      {/* বেস্ট প্র্যাকটিস কার্ড */}
      <div className="p-6 sm:p-10 bg-card text-card-foreground border border-border rounded-2xl sm:rounded-[2.5rem] space-y-8 shadow-sm">
        <h3 className="text-xl font-bold flex items-center gap-2 font-mono text-foreground dark:text-slate-100">
          <Info className="text-blue-500 shrink-0" size={20} /> Best Practices for Visualizing
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex gap-3">
            <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Focus on core tables to avoid cluttered diagrams</p>
          </div>
          <div className="flex gap-3">
            <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Ensure column names are descriptive and alphanumeric</p>
          </div>
          <div className="flex gap-3">
            <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Separate multiple CREATE TABLE statements with semicolons</p>
          </div>
          <div className="flex gap-3">
            <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Download SVG for infinite zooming in documentation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GuidelineItem({ icon, title, desc }) {
  return (
    <div className="space-y-3 p-2">
      <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center border border-border shadow-sm">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}