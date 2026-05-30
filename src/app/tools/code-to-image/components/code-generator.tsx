// src/app/tools/code-to-image/components/code-generator.tsx

"use client";
import { useState, useRef, useEffect } from "react";
import { Download, Copy, Monitor, Code2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { toPng } from "html-to-image";
import Prism from "prismjs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Prism Themes & Languages
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-css";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-tomorrow.css";

const GRADIENTS = [
  { name: "Ocean", class: "bg-gradient-to-br from-blue-600 to-cyan-400" },
  { name: "Sunset", class: "bg-gradient-to-br from-orange-500 to-rose-500" },
  { name: "Hyper", class: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" },
  { name: "Minimal", class: "bg-background text-foreground" },
  { name: "Deep", class: "bg-gradient-to-br from-slate-950 to-slate-800" }
];

const LANGUAGES = [
  { label: "JavaScript", value: "javascript" },
  { label: "TypeScript", value: "typescript" },
  { label: "Python", value: "python" },
  { label: "React JSX", value: "jsx" },
  { label: "CSS / Tailwind", value: "css" },
];

export default function CodeGenerator() {
  const [mounted, setMounted] = useState(false);
  const [code, setCode] = useState(`function getStarted() {\n  console.log("Create beautiful code snapshots with xdevutilities");\n}`);
  const [language, setLanguage] = useState("javascript");
  const [bgGradient, setBgGradient] = useState(GRADIENTS[2].class);
  const [copied, setCopied] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, [code, language, mounted]);
  

  const downloadImage = async () => {
    if (!elementRef.current) return;
    const toastId = toast.loading("Processing high-resolution export...");
    try {
      const dataUrl = await toPng(elementRef.current, { 
        cacheBust: true, 
        pixelRatio: 3, 
      });
      const link = document.createElement("a");
      link.download = `xdev-code-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
      toast.success("Image exported successfully", { id: toastId });
    } catch (err) {
      toast.error("Export failed. Please try again.", { id: toastId });
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Code copied");
    setTimeout(() => setCopied(false), 2000);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-wrap items-center justify-between gap-6 p-5 bg-background text-foreground border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm">
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-medium text-slate-400 font-sans">Language</span>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-[140px] h-9 rounded-xl border-slate-200 dark:border-slate-800 bg-transparent text-xs font-semibold">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-slate-100 dark:border-slate-800">
                {LANGUAGES.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value} className="text-xs">
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-3 border-l border-slate-100 dark:border-slate-800 pl-6">
            <span className="text-[13px] font-medium text-slate-400 font-sans">Theme</span>
            <div className="flex items-center gap-2">
              {GRADIENTS.map((g) => (
                <button 
                  key={g.name}
                  onClick={() => setBgGradient(g.class)}
                  className={`w-5 h-5 rounded-full ${g.class} transition-all duration-300 ring-offset-2 dark:ring-offset-slate-900 ${bgGradient === g.class ? "ring-2 ring-blue-500 scale-110" : "hover:scale-105"}`}
                />
              ))}
            </div>
          </div>
        </div>

        <Button 
          onClick={downloadImage} 
          className="rounded-xl bg-background text-foreground h-10 px-6 font-semibold shadow-lg hover:opacity-90 transition-all active:scale-95"
        >
          <Download size={16} className="mr-2" /> Export Image
        </Button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
        <div className="space-y-3">
          <div className="flex items-center gap-2 px-1">
            <Code2 size={14} className="text-slate-400" />
            <span className="text-[12px] font-semibold text-muted-foreground font-sans">Source code</span>
          </div>
          <div className="relative rounded-2xl border border-slate-100 dark:border-slate-800 bg-background text-foreground overflow-hidden focus-within:ring-2 ring-slate-100 dark:ring-slate-800 transition-all">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck={false}
              className="w-full h-[450px] p-6 bg-transparent outline-none text-[13px] font-mono leading-relaxed resize-none custom-scrollbar text-slate-700 dark:text-slate-300"
              placeholder="Paste your source code here..."
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <Monitor size={14} className="text-slate-400" />
              <span className="text-[12px] font-semibold text-muted-foreground font-sans">Instant preview</span>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={copyToClipboard}
              className="h-8 rounded-lg text-slate-400 hover:text-foreground dark:hover:text-slate-100 transition-all"
            >
              {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              <span className="ml-2 text-[11px] font-medium font-sans text-slate-400">Copy raw code</span>
            </Button>
          </div>
          
          <div 
            ref={elementRef}
            className={`w-full h-[450px] p-8 flex items-center justify-center rounded-2xl transition-all duration-700 shadow-inner overflow-hidden ${bgGradient}`}
          >
             <div className="w-full max-h-full flex flex-col bg-[#1e1e1e] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden border border-white/5">
                <div className="flex items-center justify-between px-4 py-3 bg-[#2d2d2d]/40 backdrop-blur-sm shrink-0">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="text-[10px] text-white/20 font-mono italic">{language}</div>
                </div>

                <ScrollArea className="flex-1 w-full overflow-auto">
                  <pre 
                    className={`p-6 m-0 language-${language} whitespace-pre`}
                    suppressHydrationWarning
                  >
                    <code className={`language-${language}`} suppressHydrationWarning>
                      {code}
                    </code>
                  </pre>
                </ScrollArea>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}