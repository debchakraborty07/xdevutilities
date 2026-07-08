// src/app/tools/resume-scanner/components/usage-guide.tsx

/* eslint-disable react/no-unescaped-entities */
import { Target, Zap, Shield, Search, BookOpen, CheckCircle, Cpu, FileText, Award } from "lucide-react";

export default function UsageGuide() {
  return (
    <div className="space-y-20 py-10 border-t border-border/60 text-foreground bg-background">
      
      {/* AdSense এবং SEO-বান্ধব তথ্যবহুল ক্যারিয়ার ও এআই রেজুমে স্ক্যানিং ব্লগ সেকশন */}
      <article className="space-y-8">
        <header className="space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground dark:text-slate-100 sm:text-4xl">
            How to Beat the Applicant Tracking System (ATS)
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Most modern companies use ATS software to filter out thousands of resumes before a human recruiter even sees them. If your resume lacks the specific keywords found in the job description, it might be rejected automatically. Our tool analyzes your CV against the job requirements to ensure you stand out.
          </p>
        </header>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Cpu size={22} className="text-blue-500" /> Understanding ATS Parsing Logic and Search Algorithms
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Applicant Tracking Systems (ATS) function as centralized database pipelines for talent acquisition. When you submit your resume, the ATS does not simply display your document to recruiters; instead, it runs an optical or textual <strong>Parsing Engine</strong> to strip out styling and organize your data.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            The parsing algorithm uses advanced Natural Language Processing (NLP) models to break your document down into standardized structural blocks: Contact Info, Work History, Education, and Skills. If you use non-standard titles or hide details inside tables, the parser becomes scrambled, resulting in missing information fields in the recruiter&apos;s control panel and causing immediate disqualification.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Award size={22} className="text-emerald-500" /> Semantic Keyword Matching and Matching Metrics
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Once parsed, the ATS compares the semantic weight of your CV against the hiring manager&apos;s specified Job Description. This is where keyword density becomes critical. The system scores resumes based on how frequently and naturally industry-relevant terms appear in your text.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background/50">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                Keyword Extraction
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Matches hard skills like "Python" or "SaaS Sales" exactly as listed in the job requirements to pass automated index filters.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background/50">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                Semantic Weight
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Applies neural synonyms mapping. For example, ensuring that "Frontend" maps correctly to terms like "Client-side Development".
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background/50">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                Formatting Guard
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Filters out multi-column tables, charts, or heavy vector graphics that render as completely blank nodes during scanning.
              </p>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            However, avoid "keyword stuffing"—the practice of copy-pasting terms in invisible white text or spamming them without context. Modern semantic algorithms instantly flag this behavior as manipulation, which triggers an automated ban. Our scan utility evaluates keyword distribution naturally to keep you in the safe compliance bracket.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <FileText size={22} className="text-rose-500" /> Typography Standards for Document Readability
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            File rendering compatibility can make or break your initial portal submission. Many custom fonts or complex layouts appear completely scrambled inside standard Python or corporate database parsers. 
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            For maximum compliance, recruiters universally recommend stick to standard, machine-readable standard web fonts (such as Arial, Calibri, or Helvetica) and exporting your file in clean, uncompressed PDF formats. By eliminating graphic boundaries, your credentials remain perfectly readable to both automated bots and human reviewers.
          </p>
        </section>
      </article>

      <div className="border-t border-slate-100 dark:border-slate-800 my-12" />

      {/* মূল ফিচার গ্রিড (আপনার অরিজিনাল সিএসএস এবং ডিজাইনের হুবহু মেলানো) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-foreground bg-background">
        <FeatureItem 
          icon={<Target className="text-emerald-500" />} 
          title="Keyword Optimization" 
          desc="We extract critical industry terms from the job description and check if they exist in your resume." 
        />
        <FeatureItem 
          icon={<Search className="text-blue-500" />} 
          title="Machine Readability" 
          desc="Our algorithm checks if essential sections like Experience and Skills are detectable by ATS bots." 
        />
        <FeatureItem 
          icon={<Shield className="bg-background text-foreground" />} 
          title="100% Privacy Focused" 
          desc="We process your data in temporary memory. Your resume is never stored on our servers or sold to third parties." 
        />
        <FeatureItem 
          icon={<Zap className="text-amber-500" />} 
          title="Real-time Scoring" 
          desc="Get an instant hireability score out of 100 based on keyword density and document structure." 
        />
      </div>

      {/* প্রো টিপস সেকশন (আপনার অরিজিনাল সিএসএস ও স্ট্রাকচার অনুযায়ী শতভাগ সুরক্ষিত) */}
      <div className="bg-background text-foreground p-8 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-6">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="bg-background text-foreground" size={24} />
          <h3 className="text-xl font-semibold ">Pro Tips for a High ATS Score</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-background text-foreground gap-6">
          <div className="space-y-2">
            <h4 className="text-sm font-bold flex items-center gap-2 bg-background text-foreground">
              <CheckCircle size={14} className="text-emerald-500" /> Use Standard Headings
            </h4>
            <p className="text-xs leading-relaxed text-muted-foreground dark:text-slate-400">Stick to simple titles like &quot;Work Experience&quot; or &quot;Education&quot; instead of creative ones.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-bold flex items-center gap-2 bg-background text-foreground">
              <CheckCircle size={14} className="text-emerald-500" /> Avoid Images/Graphics
            </h4>
            <p className="text-xs leading-relaxed text-muted-foreground dark:text-slate-400">ATS bots cannot read text inside images. Keep your layout clean and text-based.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-bold flex items-center gap-2">
              <CheckCircle size={14} className="text-emerald-500" /> Mirror Job Language
            </h4>
            <p className="text-xs leading-relaxed text-muted-foreground dark:text-slate-400">If the job post asks for &quot;Project Management&quot;, do not just write &quot;Lead Coordinator&quot;.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-bold flex items-center gap-2">
              <CheckCircle size={14} className="text-emerald-500" /> Check Your Contact Info
            </h4>
            <p className="text-xs leading-relaxed text-muted-foreground dark:text-slate-400">Ensure your phone and email are in plain text, not hidden inside a header or footer image.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ icon, title, desc }: any) {
  return (
    <div className="space-y-3 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 bg-background text-foreground transition-all hover:shadow-xl">
      <div className="w-12 h-12 bg-background text-foreground rounded-2xl flex items-center justify-center shadow-inner">{icon}</div>
      <h4 className="text-lg font-semibold bg-background text-foreground">{title}</h4>
      <p className="text-sm bg-background text-foreground leading-relaxed">{desc}</p>
    </div>
  );
}