// src/app/tools/message-encryptor/components/action-zone.tsx

"use client";

import React, { useState } from "react";
import { ShieldCheck, Lock, Unlock, Copy, CheckCircle2, RefreshCcw } from "lucide-react";
import { toast } from "sonner";

export default function ActionZone() {
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");
  const [input, setInput] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [result, setResult] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleProcess = async () => {
    if (!input || !secretKey) {
      toast.error("Please provide both message and secret key");
      return;
    }

    setLoading(true);
    const toastId = toast.loading(mode === "encrypt" ? "Locking message..." : "Unlocking message...");

    try {
      // ব্যাকএন্ড এপিআই কল
      const res = await fetch("https://encryption-api-dxrdhrudba-uc.a.run.app", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          text: input, 
          key: secretKey, 
          mode: mode 
        }),
      });

      const data = await res.json();

      if (data.success) {
        setResult(data.result);
        toast.success(mode === "encrypt" ? "Encrypted Successfully!" : "Decrypted Successfully!", { id: toastId });
      } else {
        toast.error(data.error || "Processing failed", { id: toastId });
      }
    } catch (error) {
      toast.error("Server connection error", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Mode Switcher */}
      <div className="grid grid-cols-2 p-1 bg-background text-foreground border border-border rounded-2xl">
        <button
          onClick={() => { setMode("encrypt"); setResult(""); setInput(""); }}
          className={`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all ${mode === "encrypt" ? "shadow-sm bg-background text-foreground" : "text-muted-foreground"}`}
        >
          <Lock size={16} /> Encrypt
        </button>
        <button
          onClick={() => { setMode("decrypt"); setResult(""); setInput(""); }}
          className={`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all ${mode === "decrypt" ? "bg-background text-foreground shadow-sm " : "text-muted-foreground"}`}
        >
          <Unlock size={16} /> Decrypt
        </button>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-slate-400 ml-1">
            {mode === "encrypt" ? "Secret Message" : "Encrypted Content"}
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={mode === "encrypt" ? "Type your private note here..." : "Paste the U2FsdGVkX19... code"}
            className="w-full p-5 bg-background text-foreground border border-border rounded-[2rem] outline-none focus:ring-4 focus:ring-blue-500/5 transition-all text-sm font-medium leading-relaxed resize-none min-h-[160px] shadow-inner"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold text-slate-400 ml-1">
            Passphrase (Keep this secret)
          </label>
          <div className="relative group">
            <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
            <input
              type="password"
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
              placeholder="Enter your secret key"
              className="w-full pl-11 pr-5 py-4bg-background text-foreground border border-border rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/5 transition-all text-sm font-medium"
            />
          </div>
        </div>

        <button
          onClick={handleProcess}
          disabled={!input || !secretKey || loading}
          className="w-full py-4 bg-background text-foreground font-semibold rounded-2xl hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-900/10 disabled:opacity-50"
        >
          {loading ? (
            <RefreshCcw size={18} className="animate-spin" />
          ) : mode === "encrypt" ? (
            <Lock size={18} />
          ) : (
            <Unlock size={18} />
          )}
          {loading ? "Processing..." : mode === "encrypt" ? "Lock Message" : "Unlock Message"}
        </button>
      </div>

      {/* Result Area */}
      {result && (
        <div className="pt-6 space-y-3 animate-in zoom-in-95 duration-300">
          <div className="flex items-center justify-between px-1">
             <label className="text-[10px] font-bold text-slate-400">Calculated Result</label>
             <span className="text-[10px] font-medium text-blue-500 bg-blue-500/5 px-2 py-0.5 rounded-full border border-blue-500/10">Security Enabled</span>
          </div>
          <div className="relative group">
            <div className="w-full p-6 bg-blue-500/5 border border-blue-500/10 rounded-[2rem] text-sm font-mono text-slate-700 dark:text-slate-200 break-all leading-relaxed shadow-sm">
              {result}
            </div>
            <button
              onClick={handleCopy}
              className="absolute top-4 right-4 p-2.5 bg-background text-foreground border border-border rounded-xl shadow-sm transition-all active:scale-90"
            >
              {isCopied ? <CheckCircle2 size={18} className="text-green-500" /> : <Copy size={18} className="text-slate-400" />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}