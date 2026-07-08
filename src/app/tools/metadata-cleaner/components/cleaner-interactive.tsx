// src/app/tools/metadata-cleaner/components/cleaner-interactive.tsx

"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ShieldCheck, Download, RefreshCw, FileWarning } from "lucide-react";

export default function CleanerInteractive() {
  const [file, setFile] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [cleanedPdf, setCleanedPdf] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile?.type === "application/pdf") {
      setFileName(selectedFile.name);
      setCleanedPdf(null);
      const reader = new FileReader();
      reader.onloadend = () => setFile(reader.result as string);
      reader.readAsDataURL(selectedFile);
    } else {
      toast.error("Please upload a valid PDF file");
    }
  };

  const processCleaner = async () => {
    if (!file) return;
    setLoading(true);
    const toastId = toast.loading("Stripping metadata...");
    
    try {
      const res = await fetch("https://metadata-cleaner-api-dxrdhrudba-uc.a.run.app", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pdf: file }),
      });
      const data = await res.json();
      if (data.success) {
        setCleanedPdf(data.pdf);
        toast.success("Success! Metadata removed.", { id: toastId });
      } else {
        toast.error("Processing failed", { id: toastId });
      }
    } catch (err) {
      toast.error("Connection error", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 items-start">
      {/* Action Zone */}
      <div className="space-y-6">
         <div className={`aspect-[16/6] border-2 border-dashed rounded-[32px] flex flex-col items-center justify-center p-6 transition-all 
          ${file ? "border-emerald-200 bg-emerald-50/20" : "border-slate-200 dark:border-slate-800 bg-background text-foreground"}
         `}>
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${file ? "bg-emerald-500 text-white" : "bg-background text-foreground"}`}>
              <ShieldCheck size={28} />
            </div>
            <label className="cursor-pointer text-center">
              <span className="text-sm font-semibold text-foreground dark:text-slate-100 block">
                {fileName || "Click to upload PDF"}
              </span>
              <input type="file" className="hidden" onChange={handleUpload} accept=".pdf" />
            </label>
         </div>
         
         <button onClick={processCleaner} disabled={!file || loading} className="w-full h-14 rounded-3xl font-semibold shadow-xl transition-all active:scale-[0.98] disabled:opacity-50">
            {loading ? <RefreshCw className="animate-spin mx-auto" /> : "Remove Metadata Now"}
         </button>
      </div>

      {/* Result Preview */}
      <div className="bg-background text-foreground rounded-[40px] p-10 text-center min-h-[350px] flex flex-col items-center justify-center relative">
          <div className="absolute top-6 left-8  text-[10px] font-semibold text-slate-600">Privacy Status</div>
          {cleanedPdf ? (
            <div className="space-y-6 animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                 <ShieldCheck size={32} />
              </div>
              <h3 className="text-white text-lg font-medium">Anonymization Complete</h3>
              <a href={`data:application/pdf;base64,${cleanedPdf}`} download={`anonymous-${fileName}`} className="inline-flex items-center gap-2 bg-background text-foreground px-10 py-3.5 rounded-2xl font-bold transition-all">
                <Download size={18} /> Download Protected PDF
              </a>
            </div>
          ) : (
            <div className="text-slate-600 flex flex-col items-center gap-3 italic">
               <FileWarning size={32} />
               <p className="text-sm">Awaiting PDF file...</p>
            </div>
          )}
      </div>
    </section>
  );
}