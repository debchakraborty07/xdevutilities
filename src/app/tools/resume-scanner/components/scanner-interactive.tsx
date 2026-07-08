// src/app/tools/resume-scanner/components/scanner-interactive.tsx

"use client";

import { useState } from "react";
import { toast } from "sonner";
import ActionZone from "./action-zone";
import ResultDashboard from "./result-dashboard";

export default function ScannerInteractive() {
  const [pdf, setPdf] = useState<string | null>(null);
  const [pdfName, setPdfName] = useState<string>("");
  const [jd, setJd] = useState("");
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleScan = async () => {
    if (!pdf) {
      toast.error("Please upload your resume first");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Analyzing your resume...");

    try {
      const response = await fetch("https://resume-scanner-api-dxrdhrudba-uc.a.run.app", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          resume_pdf: pdf, 
          job_description: jd || "" 
        }),
      });

      const data = await response.json();

      if (data.success) {
        setResults(data);
        if (!jd) {
          toast.success("Health check complete! Add a Job Description for a Match Score.", { id: toastId });
        } else {
          toast.success("Scan successful! Check your ATS score below.", { id: toastId });
        }
      } else {
        toast.error(data.error || "Analysis failed", { id: toastId });
      }
    } catch (err) {
      toast.error("Connection failed. Please try again.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 items-start">
      <ActionZone 
        setPdf={setPdf} 
        setPdfName={setPdfName} 
        pdfName={pdfName} 
        setJd={setJd} 
        jd={jd} 
        loading={loading} 
        onScan={handleScan} 
      />
      <ResultDashboard results={results} jdProvided={!!jd} />
    </section>
  );
}