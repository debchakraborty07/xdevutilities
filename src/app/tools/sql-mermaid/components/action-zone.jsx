// src/app/tools/sql-mermaid/components/action-zone.jsx

"use client";

import { Code2, RefreshCw, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ActionZone({ sql, setSql, loading, onGenerate }) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-end px-2">
          <label className="text-sm font-semibold text-foreground dark:text-slate-100 flex items-center gap-2">
            <Code2 size={16} className="text-indigo-500" /> Input SQL Script
          </label>
          <span className="text-[11px] text-muted-foreground font-medium">Supports CREATE TABLE</span>
        </div>

        <div className="relative group">
          <textarea
            value={sql}
            onChange={(e) => setSql(e.target.value)}
            placeholder={"CREATE TABLE users (\n  id INT PRIMARY KEY,\n  name VARCHAR(255),\n  email VARCHAR(255)\n);"}
            className="w-full h-[400px] p-6 rounded-[32px] bg-slate-50 dark:bg-slate-900/50 border-2 border-slate-200/80 dark:border-slate-800 focus:border-indigo-500/50 focus:ring-0 transition-all font-mono text-sm leading-relaxed resize-none overflow-y-auto outline-none shadow-inner text-foreground placeholder:text-muted-foreground/60"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <Button
          type="button"
          onClick={() => setSql("")}
          variant="outline"
          disabled={!sql && !loading}
          className="h-12 flex-1 rounded-2xl border-border hover:bg-muted font-semibold"
        >
          Clear
        </Button>
        <Button
          type="button"
          onClick={onGenerate}
          disabled={loading || !sql.trim()}
          className="h-12 flex-[2] rounded-2xl bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 shadow-lg transition-all active:scale-[0.98] font-bold disabled:opacity-50"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <RefreshCw className="animate-spin" size={18} />
              <span>Parsing SQL...</span>
            </span>
          ) : (
            <>
              <Play className="mr-2" size={16} fill="currentColor" /> Visualize Schema
            </>
          )}
        </Button>
      </div>
    </div>
  );
}