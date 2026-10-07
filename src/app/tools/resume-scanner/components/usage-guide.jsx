// src/app/tools/resume-scanner/components/usage-guide.jsx

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
            <div className="p-6 rounded-2xl border border-border bg-card text-card-foreground shadow-sm">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                Keyword Extraction
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Matches hard skills like &quot;Python&quot; or &quot;SaaS Sales&quot; exactly as listed in the job requirements to pass automated index filters.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card text-card-foreground shadow-sm">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                Semantic Weight
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Applies neural synonyms mapping. For example, ensuring that &quot;Frontend&quot; maps correctly to terms like &quot;Client-side Development&quot;.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card text-card-foreground shadow-sm">
              <h4 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                Formatting Guard
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Filters out multi-column tables, charts, or heavy vector graphics that render as completely blank nodes during scanning.
              </p>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            However, avoid &quot;keyword stuffing&quot;—the practice of copy-pasting terms in invisible white text or spamming them without context. Modern semantic algorithms instantly flag this behavior as manipulation, which triggers an automated ban. Our scan utility evaluates keyword distribution naturally to keep you in the safe compliance bracket.
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
            For maximum compliance, recruiters universally recommend sticking to standard, machine-readable web fonts (such as Arial, Calibri, or Helvetica) and exporting your file in clean, uncompressed PDF formats. By eliminating graphic boundaries, your credentials remain perfectly readable to both automated bots and human reviewers.
          </p>
        </section>
      </article>

      <div className="border-t border-slate-100 dark:border-slate-800 my-12" />

      {/* মূল ফিচার গ্রিড */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          icon={<Shield className="text-indigo-500" />}
          title="100% Privacy Focused"
          desc="We process your data in temporary memory. Your resume is never stored on our servers or sold to third parties."
        />
        <FeatureItem
          icon={<Zap className="text-amber-500" />}
          title="Real-time Scoring"
          desc="Get an instant hireability score out of 100 based on keyword density and document structure."
        />
      </div>

      {/* প্রো টিপস সেকশন */}
      <div className="bg-card text-card-foreground p-6 sm:p-8 rounded-3xl border border-border space-y-6 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="text-blue-500 shrink-0" size={24} />
          <h3 className="text-xl font-semibold text-foreground">Pro Tips for a High ATS Score</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h4 className="text-sm font-bold flex items-center gap-2 text-foreground">
              <CheckCircle size={14} className="text-emerald-500 shrink-0" /> Use Standard Headings
            </h4>
            <p className="text-xs leading-relaxed text-muted-foreground dark:text-slate-400">
              Stick to simple titles like &quot;Work Experience&quot; or &quot;Education&quot; instead of creative alternatives.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-bold flex items-center gap-2 text-foreground">
              <CheckCircle size={14} className="text-emerald-500 shrink-0" /> Avoid Images & Graphics
            </h4>
            <p className="text-xs leading-relaxed text-muted-foreground dark:text-slate-400">
              ATS bots cannot parse text inside images. Keep your layout text-based and straightforward.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-bold flex items-center gap-2 text-foreground">
              <CheckCircle size={14} className="text-emerald-500 shrink-0" /> Mirror Job Language
            </h4>
            <p className="text-xs leading-relaxed text-muted-foreground dark:text-slate-400">
              If the job post asks for &quot;Project Management&quot;, do not replace it with &quot;Lead Coordinator&quot;.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-bold flex items-center gap-2 text-foreground">
              <CheckCircle size={14} className="text-emerald-500 shrink-0" /> Check Your Contact Info
            </h4>
            <p className="text-xs leading-relaxed text-muted-foreground dark:text-slate-400">
              Ensure your phone and email are plain text, not embedded inside a header/footer vector image.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ icon, title, desc }) {
  return (
    <div className="space-y-3 p-6 sm:p-8 rounded-[2rem] border border-border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
      <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center border border-border shadow-sm">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}