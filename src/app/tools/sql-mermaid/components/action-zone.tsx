// src/app/tools/sql-mermaid/components/action-zone.tsx

"use client";
import { Code2, RefreshCw, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ActionZoneProps {
  sql: string;
  setSql: (val: string) => void;
  loading: boolean;
  onGenerate: () => void;
}

export default function ActionZone({ sql, setSql, loading, onGenerate }: ActionZoneProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-end px-2">
          <label className="text-sm font-semibold text-foreground dark:text-slate-100 flex items-center gap-2">
            <Code2 size={16} className="text-indigo-500" /> Input SQL Script
          </label>
          <span className="text-[10px] text-slate-400 font-medium">Supports CREATE TABLE</span>
        </div>
        
        <div className="relative group">
          <textarea
            value={sql}
            onChange={(e) => setSql(e.target.value)}
            placeholder="CREATE TABLE users (&#10;  id INT PRIMARY KEY,&#10;  name VARCHAR(255),&#10;  email VARCHAR(255)&#10;);"
            className="w-full h-[400px] p-6 rounded-[32px] bg-slate-50 dark:bg-slate-900/50 border-2 border-slate-100 dark:border-slate-800 focus:border-indigo-500/50 focus:ring-0 transition-all font-mono text-sm leading-relaxed resize-none overflow-y-auto outline-none"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <Button 
          onClick={() => setSql("")} 
          variant="outline" 
          className="h-12 flex-1 rounded-2xl border-slate-200 dark:border-slate-800"
        >
          Clear
        </Button>
        <Button 
          onClick={onGenerate} 
          disabled={loading || !sql.trim()}
          className="h-12 flex-[2] rounded-2xl bg-slate-900 text-white dark:bg-slate-50 dark:text-foreground shadow-lg transition-all active:scale-95"
        >
          {loading ? <RefreshCw className="animate-spin mr-2" size={18} /> : <><Play className="mr-2" size={16} fill="currentColor" /> Visualize Schema</>}
        </Button>
      </div>
    </div>
  );
}