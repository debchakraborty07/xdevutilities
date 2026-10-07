// src/app/tools/metadata-cleaner/components/cleaner-interactive.jsx

"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ShieldCheck, Download, RefreshCw, FileWarning, FileText } from "lucide-react";

export default function CleanerInteractive() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [cleanedPdf, setCleanedPdf] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = (e) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    if (selectedFile.type !== "application/pdf") {
      toast.error("Please upload a valid PDF file");
      e.target.value = "";
      return;
    }

    // Cloud Run 32MB পে-লোড লিমিট ও ব্রাউজার মেমোরি সুরক্ষিত রাখতে ১৫MB লিমিট
    if (selectedFile.size > 15 * 1024 * 1024) {
      toast.error("File is too large. Please upload a PDF under 15MB.");
      e.target.value = "";
      return;
    }

    setFileName(selectedFile.name);
    setCleanedPdf(null);

    const reader = new FileReader();
    reader.onloadend = () => {
      setFile(reader.result);
    };
    reader.readAsDataURL(selectedFile);

    // ইনপুট ক্যাশ রিসেট
    e.target.value = "";
  };

  const processCleaner = async () => {
    if (!file) {
      toast.error("Please select a PDF file first");
      return;
    }

    if (loading) return;

    setLoading(true);
    const toastId = toast.loading("Stripping metadata and anonymizing...");

    try {
      const res = await fetch("https://metadata-cleaner-api-dxrdhrudba-uc.a.run.app", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pdf: file }),
      });

      if (!res.ok) {
        throw new Error(`Server responded with status ${res.status}`);
      }

      const data = await res.json();

      if (data.success && data.pdf) {
        setCleanedPdf(data.pdf);
        toast.success("Success! Metadata stripped completely.", { id: toastId });
      } else {
        toast.error(data.error || "Metadata stripping failed", { id: toastId });
      }
    } catch (err) {
      toast.error("Could not process PDF. Please check connection and try again.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  // Base64 URI ফরম্যাট নিরাপত্তা
  const downloadHref = cleanedPdf
    ? (cleanedPdf.startsWith("data:") ? cleanedPdf : `data:application/pdf;base64,${cleanedPdf}`)
    : "";

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 items-start">
      {/* Action Zone */}
      <div className="space-y-6">
        <div className={`aspect-[16/7] border-2 border-dashed rounded-[32px] flex flex-col items-center justify-center p-6 transition-all relative group
          ${file
            ? "border-emerald-500/40 bg-emerald-500/5"
            : "border-border bg-card text-card-foreground hover:border-muted-foreground/40"
          }`}
        >
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-transform group-hover:scale-105 ${file ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20" : "bg-muted text-muted-foreground"
            }`}>
            {file ? <FileText size={26} /> : <ShieldCheck size={28} />}
          </div>

          <label className="cursor-pointer text-center block">
            <span className="text-sm font-semibold text-foreground dark:text-slate-100 block px-4 truncate max-w-[280px]">
              {fileName || "Click to upload PDF"}
            </span>
            <span className="text-xs text-muted-foreground mt-1 block">
              {file ? "Click to choose a different PDF" : "Remove GPS, author & revision history"}
            </span>
            <input type="file" className="hidden" onChange={handleUpload} accept="application/pdf,.pdf" />
          </label>
          <span className="text-[10px] text-muted-foreground/60 font-bold mt-2">Max file size: 15MB</span>
        </div>

        <button
          type="button"
          onClick={processCleaner}
          disabled={!file || loading}
          className="w-full h-14 bg-primary text-primary-foreground rounded-2xl font-semibold shadow-lg hover:opacity-95 transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <RefreshCw className="animate-spin" size={18} />
              <span>Processing PDF...</span>
            </>
          ) : (
            "Remove Metadata Now"
          )}
        </button>
      </div>

      {/* Result Preview */}
      <div className="bg-card text-card-foreground border border-border rounded-[32px] p-8 sm:p-10 text-center min-h-[350px] flex flex-col items-center justify-center relative shadow-sm">
        <div className="absolute top-6 left-8 text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
          Privacy Status
        </div>

        {cleanedPdf ? (
          <div className="space-y-6 animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
              <ShieldCheck size={32} />
            </div>
            <div className="space-y-1">
              <h3 className="text-foreground dark:text-slate-100 text-lg font-bold">
                Anonymization Complete
              </h3>
              <p className="text-xs text-muted-foreground">
                Hidden metadata, author tags, and device signatures have been wiped clean.
              </p>
            </div>
            <a
              href={downloadHref}
              download={`sanitized-${fileName || "document.pdf"}`}
              className="inline-flex items-center gap-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 px-8 py-3.5 rounded-2xl font-bold transition-all shadow-md active:scale-95"
            >
              <Download size={18} /> Download Protected PDF
            </a>
          </div>
        ) : (
          <div className="text-muted-foreground flex flex-col items-center gap-3 py-8 italic">
            <FileWarning size={32} className="text-muted-foreground/40" />
            <p className="text-sm">Awaiting PDF document upload...</p>
          </div>
        )}
      </div>
    </section>
  );
}