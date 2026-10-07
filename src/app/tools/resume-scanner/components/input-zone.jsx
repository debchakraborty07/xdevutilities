// src/app/tools/resume-scanner/components/input-zone.jsx

"use client";

import { useRef } from "react";
import { FileText, Upload, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function InputZone({ setPdf, setJd, jd, loading, onScan }) {
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
      toast.error("File size exceeds 5MB limit. Please upload a smaller PDF.");
      e.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPdf(reader.result);
    };
    reader.readAsDataURL(file);

    // ইনপুট ক্যাশ রিসেট
    e.target.value = "";
  };

  return (
    <div className="space-y-8">
      {/* PDF Upload */}
      <div className="group relative">
        <label className="block text-sm font-medium text-foreground dark:text-slate-300 mb-3">
          Upload Resume (PDF)
        </label>
        <div
          onClick={() => fileInputRef.current?.click()}
          className="aspect-[16/5] rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center p-6 bg-card text-card-foreground transition-all hover:border-muted-foreground/40 cursor-pointer shadow-sm"
        >
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept="application/pdf,.pdf"
          />
          <div className="flex items-center gap-4 pointer-events-none">
            <div className="w-10 h-10 bg-muted text-muted-foreground shadow-sm rounded-xl flex items-center justify-center border border-border">
              <FileText size={20} />
            </div>
            <div>
              <span className="text-sm font-medium text-foreground dark:text-slate-100 block">
                Click to upload CV
              </span>
              <span className="text-[11px] text-muted-foreground block">
                Maximum file size: 5MB
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Job Description */}
      <div className="space-y-3">
        <label className="flex items-center gap-2 text-sm font-medium text-foreground dark:text-slate-300">
          <Briefcase size={16} className="text-muted-foreground" /> Job Description
        </label>
        <textarea
          value={jd}
          onChange={(e) => setJd(e.target.value)}
          placeholder="Paste the job requirements here to calculate keyword relevance..."
          className="w-full h-48 p-5 rounded-2xl bg-card text-card-foreground border border-border outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm leading-relaxed resize-none shadow-sm placeholder:text-muted-foreground/60"
        />
      </div>

      <Button
        type="button"
        onClick={onScan}
        disabled={loading}
        className="w-full h-12 rounded-2xl bg-primary text-primary-foreground font-semibold shadow-lg hover:opacity-95 transition-all disabled:opacity-50"
      >
        {loading ? "Analyzing Resume..." : "Start Optimization Scan"}
      </Button>
    </div>
  );
}