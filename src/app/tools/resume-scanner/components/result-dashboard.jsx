// src/app/tools/resume-scanner/components/result-dashboard.tsx

"use client";

import { CheckCircle2, AlertCircle, Info, FileText, Zap } from "lucide-react";

export default function ResultDashboard({ results, jdProvided }) {
  if (!results) {
    return (
      <div className="h-full min-h-[500px] bg-card text-card-foreground rounded-[40px] border-2 border-dashed border-border flex flex-col items-center justify-center p-10 text-center shadow-sm">
        <div className="w-20 h-20 bg-muted text-muted-foreground rounded-[2.5rem] flex items-center justify-center mb-6 shadow-sm border border-border">
          <FileText size={32} className="animate-pulse text-muted-foreground" />
        </div>
        <h3 className="text-foreground font-semibold text-lg mb-2">Ready for Intelligent Scan</h3>
        <p className="text-xs max-w-[260px] leading-relaxed text-muted-foreground">
          Upload your CV to see how our AI evaluates your professional profile and ATS compliance.
        </p>
      </div>
    );
  }

  const finalScore = jdProvided ? (results?.match_score || 0) : (results?.health_score || 0);
  const missingKeywords = results?.analysis?.missing_keywords || [];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Score Card */}
      <div className="bg-card text-card-foreground rounded-[40px] p-8 sm:p-10 shadow-sm border border-border relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:rotate-12 transition-transform text-foreground pointer-events-none">
          <Zap size={120} />
        </div>
        <div className="relative z-10">
          <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-2">
            {jdProvided ? "ATS Matching Accuracy" : "Resume Strength Score"}
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-foreground ">{finalScore}</span>
            <span className="text-2xl text-muted-foreground font-medium">/100</span>
          </div>
          <div className="mt-6 flex items-center gap-2.5 text-sm">
            <div className={`h-2.5 w-2.5 rounded-full shrink-0 ${finalScore >= 70 ? 'bg-emerald-500' : 'bg-rose-500'}`} />
            <p className="text-muted-foreground font-medium">
              {finalScore >= 70 ? "Ready to Apply! Great structure." : "Optimization Recommended."}
            </p>
          </div>
        </div>
      </div>

      {/* Smart Analysis Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-6 rounded-[2.5rem] bg-card text-card-foreground border border-border shadow-sm">
          <h3 className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-5">
            Contact Validation
          </h3>
          <div className="space-y-4">
            <StatusItem label="Email" found={results?.contact_info?.email_found} />
            <StatusItem label="Phone" found={results?.contact_info?.phone_found} />
            <StatusItem label="Physical Address" found={results?.contact_info?.address_found} />
            <StatusItem label="Digital Links" found={results?.contact_info?.links_found} />
          </div>
        </div>

        <div className="p-6 rounded-[2.5rem] bg-card text-card-foreground border border-border shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-4">
              Content Quality
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Word Count</span>
                <span className="text-xs font-bold text-foreground">{results?.word_count || 0}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Impact Metrics</span>
                {results?.analysis?.has_metrics ? (
                  <CheckCircle2 size={16} className="text-emerald-500" />
                ) : (
                  <AlertCircle size={16} className="text-rose-500" />
                )}
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-[11px] text-muted-foreground leading-relaxed italic">
              {(results?.analysis?.action_verbs_count || 0) < 3
                ? "Tip: Use more power verbs like 'Executed', 'Architected' or 'Optimized'."
                : "Good use of professional action verbs."}
            </p>
          </div>
        </div>
      </div>

      {/* Industry Suggestion & Keywords */}
      <div className="p-6 sm:p-8 rounded-[2.5rem] bg-card text-card-foreground border border-border shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
            Targeted Improvements
          </h3>
          <span className="px-3 py-1 bg-secondary text-secondary-foreground text-[10px] font-bold rounded-full">
            AI INSIGHTS
          </span>
        </div>

        {jdProvided ? (
          <div className="space-y-4">
            {missingKeywords.length > 0 ? (
              <>
                <p className="text-xs text-muted-foreground">Add these relevant keywords to increase your match score:</p>
                <div className="flex flex-wrap gap-2">
                  {missingKeywords.map((k, index) => (
                    <span
                      key={`${k}-${index}`}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-medium rounded-xl border border-border"
                    >
                      + {k}
                    </span>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex items-center gap-3 p-4 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-2xl border border-emerald-500/20">
                <CheckCircle2 size={18} className="shrink-0" />
                <p className="text-xs font-medium">
                  Outstanding! Your resume already incorporates all primary keywords from this job description.
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-500 shrink-0">
              <Info size={20} />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We detected a <span className="text-foreground font-bold">{results?.analysis?.industry || "Professional"}</span> focus. Paste a specific Job Description to see targeted missing skills.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function StatusItem({ label, found }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs font-medium text-foreground/80">{label}</span>
      {found ? (
        <CheckCircle2 size={16} className="text-emerald-500" />
      ) : (
        <AlertCircle size={15} className="text-rose-500/80" />
      )}
    </div>
  );
}