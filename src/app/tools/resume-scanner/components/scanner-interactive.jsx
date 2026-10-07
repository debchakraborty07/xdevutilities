// src/app/tools/resume-scanner/components/scanner-interactive.jsx

"use client";

import { useState } from "react";
import { toast } from "sonner";
import ActionZone from "./action-zone";
import ResultDashboard from "./result-dashboard";

export default function ScannerInteractive() {
  const [pdf, setPdf] = useState(null);
  const [pdfName, setPdfName] = useState("");
  const [jd, setJd] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  // ফাইল পরিবর্তন বা রিসেট হলে আগের রিপোর্ট নিরাপদভাবে রিসেট করা
  const handlePdfChange = (newPdf) => {
    setPdf(newPdf);
    if (!newPdf) {
      setResults(null);
    }
  };

  const handleScan = async () => {
    if (!pdf) {
      toast.error("Please upload your resume first");
      return;
    }

    // ডাবল ক্লিক প্রতিরোধ
    if (loading) return;

    setLoading(true);
    const toastId = toast.loading("Analyzing your resume and parsing ATS metrics...");

    try {
      const response = await fetch("https://resume-scanner-api-dxrdhrudba-uc.a.run.app", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resume_pdf: pdf,
          job_description: jd || ""
        }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setResults(data);
        if (!jd) {
          toast.success("Health check complete! Add a Job Description for a Match Score.", { id: toastId });
        } else {
          toast.success("Scan successful! Check your ATS score below.", { id: toastId });
        }
      } else {
        toast.error(data.error || "Resume analysis failed", { id: toastId });
      }
    } catch (err) {
      toast.error("Could not connect to resume analyzer. Please try again.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 items-start">
      <ActionZone
        setPdf={handlePdfChange}
        setPdfName={setPdfName}
        pdfName={pdfName}
        setJd={setJd}
        jd={jd}
        loading={loading}
        onScan={handleScan}
      />
      <ResultDashboard results={results} jdProvided={Boolean(jd)} />
    </section>
  );
}