// src/app/tools/resume-scanner/components/action-zone.tsx

"use client";
import { FileText, Briefcase, RefreshCw, UploadCloud, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ActionZone({ setPdf, setPdfName, pdfName, setJd, jd, loading, onScan }: any) {
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setPdfName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => setPdf(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const isButtonDisabled = !pdfName || loading;

  return (
    <div className="space-y-8">
      {/* PDF Upload */}
      <div className="space-y-3">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Upload Resume (PDF)</label>
        <div className={`relative aspect-[16/5] rounded-3xl border-2 border-dashed transition-all flex flex-col items-center justify-center p-6 
          ${pdfName ? "border-emerald-200 bg-background text-foreground" : "border-slate-200 dark:border-slate-800 bg-background text-foreground"}
        `}>
          <div className="flex flex-col items-center gap-2">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${pdfName ? "bg-emerald-500 text-white" : "bg-background text-foreground"}`}>
              {pdfName ? <FileText size={24} /> : <UploadCloud size={24} />}
            </div>
            <label className="cursor-pointer text-center">
              <span className="text-sm font-bold text-foreground dark:text-slate-100 block">
                {pdfName ? pdfName : "Select PDF File"}
              </span>
              <input type="file" className="hidden" onChange={handleFileChange} accept=".pdf" />
              <p className="text-[10px] text-slate-400 mt-1">Maximum file size: 5MB</p>
            </label>
          </div>
        </div>
      </div>

      {/* JD Area */}
      <div className="space-y-3">
        <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
          <Briefcase size={16} className="text-slate-400" /> Job Description 
          <span className="text-[10px] font-normal text-slate-400">(Optional for Health Check)</span>
        </label>
        <textarea
          value={jd}
          onChange={(e) => setJd(e.target.value)}
          placeholder="Paste requirements to see your match score. Example: 'Looking for a Frontend Developer with Next.js and Tailwind experience...'"
          className="w-full h-52 p-5 rounded-3xl bg-background text-foreground border border-slate-200 dark:border-slate-800 outline-none text-sm leading-relaxed focus:ring-2 ring-slate-100 dark:ring-slate-800 transition-all resize-none"
        />
        {!jd && pdfName && (
          <div className="flex items-start gap-2 text-[11px] text-amber-600 bg-amber-50/50 dark:bg-amber-900/10 p-3 rounded-2xl border border-amber-100 dark:border-amber-900/30">
            <Info size={14} className="mt-0.5" />
            <span>Pro Tip: Adding a Job Description helps us identify missing keywords in your resume.</span>
          </div>
        )}
      </div>

      <Button 
        onClick={onScan} 
        disabled={isButtonDisabled} 
        className={`w-full h-14 rounded-3xl shadow-xl transition-all active:scale-[0.98]
          ${isButtonDisabled ? "opacity-50" : "bg-background text-foreground"}
        `}
      >
        {loading ? (
          <RefreshCw className="animate-spin mr-2" size={18} />
        ) : (
          jd ? "Calculate Match Score" : "Run Resume Health Check"
        )}
      </Button>
    </div>
  );
}