// src/app/tools/sql-mermaid/components/mermaid-interactive.jsx

"use client";

import { useState } from "react";
import { toast } from "sonner";
import ActionZone from "./action-zone";
import ResultPreview from "./result-preview";

export default function MermaidInteractive() {
  const [sql, setSql] = useState("");
  const [mermaidCode, setMermaidCode] = useState("");
  const [loading, setLoading] = useState(false);

  // ইনপুট মুছে দিলে আগের ডায়াগ্রাম ক্লিয়ার করে স্টেট সিঙ্ক রাখা
  const handleSqlChange = (newSql) => {
    setSql(newSql);
    if (!newSql.trim()) {
      setMermaidCode("");
    }
  };

  const handleGenerate = async () => {
    if (!sql.trim()) {
      toast.error("Please enter some SQL DDL code first");
      return;
    }

    if (loading) return;
    
    setLoading(true);
    const toastId = toast.loading("Converting SQL schema to ER diagram...");

    try {
      const res = await fetch("https://sql-to-mermaid-api-dxrdhrudba-uc.a.run.app", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sql }),
      });

      if (!res.ok) {
        throw new Error(`Server responded with status ${res.status}`);
      }

      const data = await res.json();
      if (data.success && data.mermaid) {
        setMermaidCode(data.mermaid);
        toast.success("Entity-Relationship Diagram generated!", { id: toastId });
      } else {
        toast.error(data.error || "Failed to parse SQL. Check syntax.", { id: toastId });
      }
    } catch (err) {
      toast.error("Could not connect to parser. Please check your connection.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start mb-24">
      {/* SQL Editor Area */}
      <ActionZone 
        sql={sql} 
        setSql={handleSqlChange} 
        onGenerate={handleGenerate} 
        loading={loading} 
      />
      
      {/* Visual Preview Area */}
      <ResultPreview mermaidCode={mermaidCode} />
    </section>
  );
}