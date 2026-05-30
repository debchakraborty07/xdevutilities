// src/app/tools/resume-scanner/components/result-dashboard.tsx

"use client";
import { CheckCircle2, AlertCircle, Info, FileText, Zap } from "lucide-react";

export default function ResultDashboard({ results, jdProvided }: { results: any, jdProvided: boolean }) {
  if (!results) return (
    <div className="h-full min-h-[500px] bg-card text-card-foreground rounded-[40px] border-2 border-dashed border-border flex flex-col items-center justify-center p-10 text-center">
      <div className="w-20 h-20 bg-background text-foreground rounded-[2.5rem] flex items-center justify-center mb-6 shadow-xl dark:shadow-none border border-border">
        <FileText size={32} className="animate-pulse text-muted-foreground" />
      </div>
      <h3 className="text-foreground font-semibold mb-2">Ready for Intelligent Scan</h3>
      <p className="text-xs max-w-[250px] leading-relaxed text-muted-foreground">Upload your CV to see how our AI evaluates your professional profile.</p>
    </div>
  );

  const finalScore = jdProvided ? (results?.match_score || 0) : (results?.health_score || 0);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Score Card */}
      <div className="bg-card text-card-foreground rounded-[40px] p-10 shadow-2xl dark:shadow-none border border-border relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:rotate-12 transition-transform text-foreground">
          <Zap size={120} />
        </div>
        <div className="relative z-10">
          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            {jdProvided ? "ATS Matching Accuracy" : "Resume Strength Score"}
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-foreground">{finalScore}</span>
            <span className="text-2xl text-muted-foreground">/100</span>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm">
            <div className={`h-2.5 w-2.5 rounded-full ${finalScore > 70 ? 'bg-emerald-500' : 'bg-rose-500'}`} />
            <p className="text-muted-foreground font-medium">
              {finalScore > 70 ? "Ready to Apply! Great structure." : "Optimization Recommended."}
            </p>
          </div>
        </div>
      </div>

      {/* Smart Analysis Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-6 rounded-[2.5rem] bg-card text-card-foreground border border-border">
          <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-5">Contact Validation</h4>
          <div className="space-y-4">
            <StatusItem label="Email" found={results?.contact_info?.email_found}/>
            <StatusItem label="Phone" found={results?.contact_info?.phone_found} />
            <StatusItem label="Physical Address" found={results?.contact_info?.address_found} />
            <StatusItem label="Digital Links" found={results?.contact_info?.links_found} />
          </div>
        </div>

        <div className="p-6 rounded-[2.5rem] bg-card text-card-foreground border border-border flex flex-col justify-between">
           <div>
              <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">Content Quality</h4>
              <div className="space-y-3">
                 <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Word Count</span>
                    <span className="text-xs font-bold text-foreground">{results?.word_count || 0}</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Impact Metrics</span>
                    {results?.analysis?.has_metrics ? <CheckCircle2 size={14} className="text-emerald-500" /> : <AlertCircle size={14} className="text-rose-400" />}
                 </div>
              </div>
           </div>
           <div className="mt-4 pt-4 border-t border-border">
              <p className="text-[10px] text-muted-foreground leading-relaxed italic">
                {(results?.analysis?.action_verbs_count || 0) < 3 ? "Tip: Use more power verbs like 'Executed' or 'Optimized'." : "Good use of professional action verbs."}
              </p>
           </div>
        </div>
      </div>

      {/* Industry Suggestion & Keywords */}
      <div className="p-8 rounded-[2.5rem] bg-card text-card-foreground border border-border">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Targeted Improvements</h4>
          <span className="px-3 py-1 bg-secondary text-secondary-foreground text-[9px] font-bold rounded-full">AI INSIGHTS</span>
        </div>
        
        {jdProvided ? (
          <div className="space-y-4">
            <p className="text-xs text-muted-foreground">Add these keywords to increase your match score:</p>
            <div className="flex flex-wrap gap-2">
              {(results?.analysis?.missing_keywords || []).map((k: string) => (
                <span key={k} className="px-3 py-1.5 bg-secondary text-secondary-foreground text-[10px] font-medium rounded-xl border border-border">
                  + {k}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex items-start gap-4">
             <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-500">
                <Info size={20} />
             </div>
             <p className="text-xs text-muted-foreground leading-relaxed">
                We detected a <span className="text-foreground font-bold">{results?.analysis?.industry || "Professional"}</span> focus. Paste a Job Description to see specific missing skills.
             </p>
          </div>
        )}
      </div>
    </div>
  );
}

function StatusItem({ label, found }: any) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[11px] font-medium text-foreground/80">{label}</span>
      {found ? <CheckCircle2 size={16} className="text-emerald-500" /> : <div className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />}
    </div>
  );
}