// src/app/tools/sql-mermaid/components/mermaid-interactive.tsx

"use client";

import { useState } from "react";
import { toast } from "sonner";
import ActionZone from "./action-zone";
import ResultPreview from "./result-preview";

export default function MermaidInteractive() {
  const [sql, setSql] = useState("");
  const [mermaidCode, setMermaidCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!sql.trim()) return toast.error("Please enter some SQL code");
    
    setLoading(true);
    try {
      const res = await fetch("https://sql-to-mermaid-api-dxrdhrudba-uc.a.run.app", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sql }),
      });
      const data = await res.json();
      if (data.success) {
        setMermaidCode(data.mermaid);
        toast.success("Diagram generated!");
      } else {
        toast.error("Failed to parse SQL");
      }
    } catch (err) {
      toast.error("Connection error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
      {/* SQL Editor Area */}
      <ActionZone sql={sql} setSql={setSql} onGenerate={handleGenerate} loading={loading} />
      
      {/* Visual Preview Area */}
      <ResultPreview mermaidCode={mermaidCode} />
    </section>
  );
}