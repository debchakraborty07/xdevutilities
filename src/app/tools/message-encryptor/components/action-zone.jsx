// src/app/tools/message-encryptor/components/action-zone.jsx

"use client";

import React, { useState } from "react";
import { ShieldCheck, Lock, Unlock, Copy, CheckCircle2, RefreshCcw } from "lucide-react";
import { toast } from "sonner";

export default function ActionZone() {
  const [mode, setMode] = useState("encrypt");
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

    if (loading) return;

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

      if (!res.ok) {
        throw new Error(`Server responded with status ${res.status}`);
      }

      const data = await res.json();

      if (data.success) {
        setResult(data.result);
        toast.success(mode === "encrypt" ? "Encrypted Successfully!" : "Decrypted Successfully!", { id: toastId });
      } else {
        toast.error(data.error || "Processing failed", { id: toastId });
      }
    } catch (error) {
      toast.error("Could not complete encryption. Please check inputs and try again.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result);
      setIsCopied(true);
      toast.success("Copied to clipboard");
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy result");
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Mode Switcher */}
      <div className="grid grid-cols-2 p-1.5 bg-muted/60 border border-border rounded-2xl">
        <button
          type="button"
          onClick={() => { setMode("encrypt"); setResult(""); }}
          className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all ${mode === "encrypt"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
            }`}
        >
          <Lock size={16} /> Encrypt
        </button>
        <button
          type="button"
          onClick={() => { setMode("decrypt"); setResult(""); }}
          className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all ${mode === "decrypt"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
            }`}
        >
          <Unlock size={16} /> Decrypt
        </button>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">
            {mode === "encrypt" ? "Secret Message" : "Encrypted Ciphertext"}
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={mode === "encrypt" ? "Type your private note or confidential data here..." : "Paste the encrypted ciphertext here..."}
            className="w-full p-5 bg-card text-card-foreground border border-border rounded-[2rem] outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium leading-relaxed resize-none min-h-[160px] shadow-inner"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">
            Passphrase (Keep this secret)
          </label>
          <div className="relative group">
            <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
            <input
              type="password"
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
              placeholder="Enter your secret key"
              className="w-full pl-11 pr-5 py-4 bg-card text-card-foreground border border-border rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleProcess}
          disabled={!input || !secretKey || loading}
          className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-2xl hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
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
            <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Calculated Result</label>
            <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              Processed
            </span>
          </div>
          <div className="relative group">
            <div className="w-full p-6 bg-muted/40 border border-border rounded-[2rem] text-sm font-mono text-foreground break-all leading-relaxed shadow-sm">
              {result}
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className="absolute top-4 right-4 p-2.5 bg-background text-foreground border border-border rounded-xl shadow-sm transition-all hover:bg-muted active:scale-90"
              aria-label="Copy result"
            >
              {isCopied ? <CheckCircle2 size={18} className="text-emerald-500" /> : <Copy size={18} className="text-muted-foreground" />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}