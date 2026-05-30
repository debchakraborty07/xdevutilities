// src/app/tools/resume-scanner/components/usage-guide.tsx

import { Target, Zap, Shield, Search, BookOpen, CheckCircle } from "lucide-react";

export default function UsageGuide() {
  return (
    <div className="space-y-20">
      {/* Introduction Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold bg-background text-foreground">
          How to Beat the Applicant Tracking System (ATS)
        </h2>
        <p className="bg-background text-foreground leading-relaxed text-lg">
          Most modern companies use ATS software to filter out thousands of resumes before a human recruiter even sees them. 
          If your resume lacks the specific keywords found in the job description, it might be rejected automatically. 
          Our tool analyzes your CV against the job requirements to ensure you stand out.
        </p>
      </div>

      {/* Feature Grid */}
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

      {/* Pro Tips Section - Increases Content Value for AdSense */}
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
            <p className="text-xs leading-relaxed">Stick to simple titles like "Work Experience" or "Education" instead of creative ones.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-bold flex items-center gap-2 bg-background text-foreground">
              <CheckCircle size={14} className="text-emerald-500" /> Avoid Images/Graphics
            </h4>
            <p className="text-xs leading-relaxed">ATS bots cannot read text inside images. Keep your layout clean and text-based.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-bold flex items-center gap-2">
              <CheckCircle size={14} className="text-emerald-500" /> Mirror Job Language
            </h4>
            <p className="leading-relaxed">If the job post asks for "Project Management", do not just write "Lead Coordinator".</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-bold flex items-center gap-2">
              <CheckCircle size={14} className="text-emerald-500" /> Check Your Contact Info
            </h4>
            <p className="text-xs leading-relaxed">Ensure your phone and email are in plain text, not hidden inside a header or footer image.</p>
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