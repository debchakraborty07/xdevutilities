// src/app/tools/resume-scanner/page.tsx

"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import ActionZone from "./components/action-zone";
import ResultDashboard from "./components/result-dashboard";
import UsageGuide from "./components/usage-guide";
import FAQSection from "./components/faq-section";
import RelatedSidebar from "@/components/shared/related-sidebar";
import SaveToolButton from "@/components/shared/save-tool-button";

export default function ResumeScannerPage() {
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
    <div className="container mx-auto px-6 py-12 max-w-[1400px]"> 
      <div className="mb-12">
        <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-foreground dark:hover:text-slate-100 transition-colors mb-6 text-sm font-medium">
          <ArrowLeft size={16} /> Back to tools
        </Link>

        <div className="flex flex-wrap items-center gap-10 mb-4"> 
          <h1 className="text-4xl font-semibold text-foreground dark:text-slate-100">
            ATS Resume Scanner
          </h1>
          
          {/* Bookmark Button */}
          <div className="pt-1">
            <SaveToolButton toolId="resume-scanner" />
          </div>
        </div>

        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          Optimize your resume for applicant tracking systems. Identify missing keywords and improve your hireability score.
        </p>
      </div>

      

      {/* মেইন লেআউট: ২ কলাম গ্রিড */}
      <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start text-foreground bg-background">
        
        {/* বাম দিকের কন্টেন্ট এরিয়া */}
        <div className="flex-1 w-full min-w-0">
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

          <div className="max-w-4xl space-y-24 border-t border-slate-100 dark:border-slate-800 pt-24">
            <UsageGuide />
            <FAQSection />
          </div>
        </div>

        {/* ডান দিকের সাইডবার */}
        <div className="hidden lg:block w-[300px] xl:w-[350px] shrink-0 sticky top-28">
          <RelatedSidebar currentToolId="resume-scanner" category="career" />
        </div>

      </div>
    </div>
  );
}