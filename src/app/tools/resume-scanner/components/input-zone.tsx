// src/app/tools/resume-scanner/components/input-zone.tsx

"use client";
import { FileText, Upload, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function InputZone({ setPdf, setJd, jd, loading, onScan }: any) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      const reader = new FileReader();
      reader.onloadend = () => setPdf(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  return (
    <div className="space-y-8">
      {/* PDF Upload */}
      <div className="group relative">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Upload Resume (PDF)</label>
        <div className="aspect-[16/5] rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center p-6 bg-background text-foreground transition-all hover:border-slate-300">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-background text-foreground shadow-sm rounded-xl flex items-center justify-center text-slate-400">
              <FileText size={20} />
            </div>
            <label className="cursor-pointer">
              <span className="text-sm font-medium text-foreground dark:text-slate-100">Click to upload CV</span>
              <input type="file" className="hidden" onChange={handleFileChange} accept=".pdf" />
            </label>
          </div>
        </div>
      </div>

      {/* Job Description */}
      <div className="space-y-3">
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          <Briefcase size={16} /> Job Description
        </label>
        <textarea
          value={jd}
          onChange={(e) => setJd(e.target.value)}
          placeholder="Paste the job requirements here..."
          className="w-full h-48 p-5 rounded-2xl bg-background text-foreground border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-slate-900/5 transition-all text-sm leading-relaxed"
        />
      </div>

      <Button 
        onClick={onScan}
        disabled={loading || !jd}
        className="w-full h-12 rounded-2xl bg-background text-foreground shadow-lg"
      >
        {loading ? "Analyzing Resume..." : "Start Optimization Scan"}
      </Button>
    </div>
  );
}