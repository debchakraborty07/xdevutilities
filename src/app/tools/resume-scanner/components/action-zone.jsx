// src/app/tools/resume-scanner/components/action-zone.jsx

"use client";

import { useRef } from "react";
import { FileText, Briefcase, RefreshCw, UploadCloud, Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ActionZone({ setPdf, setPdfName, pdfName, setJd, jd, loading, onScan }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      toast.error("Please upload a valid PDF document");
      e.target.value = "";
      return;
    }

    // ৫MB সাইজ ভ্যালিডেশন
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Resume file size exceeds 5MB. Please upload a smaller PDF.");
      e.target.value = "";
      return;
    }

    setPdfName(file.name);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPdf(reader.result);
    };
    reader.readAsDataURL(file);

    // ইনপুট ক্যাশ রিসেট
    e.target.value = "";
  };

  const handleClearFile = (e) => {
    e.stopPropagation();
    setPdf(null);
    setPdfName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const isButtonDisabled = !pdfName || loading;

  return (
    <div className="space-y-8">
      {/* PDF Upload */}
      <div className="space-y-3">
        <label className="text-sm font-semibold text-foreground dark:text-slate-300">
          Upload Resume (PDF)
        </label>
        <div
          onClick={() => !pdfName && fileInputRef.current?.click()}
          className={`relative aspect-[16/6] rounded-3xl border-2 border-dashed transition-all flex flex-col items-center justify-center p-6 ${pdfName
              ? "border-emerald-500/40 bg-emerald-500/5 text-foreground"
              : "border-border bg-card text-card-foreground hover:border-muted-foreground/40 cursor-pointer"
            }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept="application/pdf,.pdf"
          />

          {pdfName && (
            <button
              type="button"
              onClick={handleClearFile}
              className="absolute top-4 right-4 p-2 bg-background/80 hover:bg-destructive hover:text-destructive-foreground rounded-full shadow-md transition-all text-muted-foreground"
              title="Remove file"
              aria-label="Remove resume"
            >
              <X size={16} />
            </button>
          )}

          <div className="flex flex-col items-center gap-2 text-center pointer-events-none">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm transition-transform ${pdfName ? "bg-emerald-500 text-white" : "bg-muted text-muted-foreground"
              }`}>
              {pdfName ? <FileText size={24} /> : <UploadCloud size={24} />}
            </div>
            <div>
              <span className="text-sm font-bold text-foreground dark:text-slate-100 block px-4 truncate max-w-[280px]">
                {pdfName ? pdfName : "Select PDF File"}
              </span>
              <p className="text-[11px] text-muted-foreground mt-1">
                {pdfName ? "Click cross to remove and choose another" : "Maximum file size: 5MB"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* JD Area */}
      <div className="space-y-3">
        <label className="flex items-center gap-2 text-sm font-semibold text-foreground dark:text-slate-300">
          <Briefcase size={16} className="text-muted-foreground" /> Job Description
          <span className="text-xs font-normal text-muted-foreground">(Optional for Health Check)</span>
        </label>
        <textarea
          value={jd}
          onChange={(e) => setJd(e.target.value)}
          placeholder="Paste requirements to see your match score. Example: 'Looking for a Frontend Developer with Next.js and Tailwind experience...'"
          className="w-full h-48 p-5 rounded-3xl bg-card text-card-foreground border border-border outline-none text-sm leading-relaxed focus:ring-2 focus:ring-primary/20 transition-all resize-none shadow-sm placeholder:text-muted-foreground/60"
        />
        {!jd && pdfName && (
          <div className="flex items-start gap-2 text-xs text-amber-700 dark:text-amber-400 bg-amber-500/10 p-3.5 rounded-2xl border border-amber-500/20">
            <Info size={16} className="mt-0.5 shrink-0" />
            <span>Pro Tip: Adding a Job Description helps identify missing technical keywords and ATS relevance.</span>
          </div>
        )}
      </div>

      <Button
        type="button"
        onClick={onScan}
        disabled={isButtonDisabled}
        className="w-full h-14 rounded-3xl bg-primary text-primary-foreground font-semibold shadow-lg hover:opacity-95 transition-all active:scale-[0.98] disabled:opacity-50"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <RefreshCw className="animate-spin" size={18} />
            <span>Analyzing Resume...</span>
          </span>
        ) : (
          jd ? "Calculate Match Score" : "Run Resume Health Check"
        )}
      </Button>
    </div>
  );
}