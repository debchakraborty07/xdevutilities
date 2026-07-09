// src/app/forgot-password/page.tsx

"use client";

import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth"; // ফায়ারবেসের অফিশিয়াল ফ্রি রিসেট মেথড
import { auth } from "@/lib/firebase"; // আপনার ইনিশিয়েট করা অথ অবজেক্ট
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlertCircle, Loader2, MailCheck, ArrowLeft, Terminal, ShieldCheck } from "lucide-react";

export default function ForgotPasswordPage() {
  const [emailInput, setEmailInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const email = emailInput.trim().toLowerCase();

    // ১. খালি ইনপুট ভ্যালিডেশন
    if (!email) {
      setError("Please enter your registered email address.");
      return;
    }

    // ২. ইমেইল ফরম্যাট ভ্যালিডেশন (Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address (e.g., name@example.com).");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // ফায়ারবেস এপিআই কল (সম্পূর্ণ জিরো-কস্ট মেইলিং সার্ভিস)
      await sendPasswordResetEmail(auth, email);
      setSubmitted(true);
    } catch (err: any) {
      // console.error সরিয়ে সাধারণ warn করা হলো যাতে লোকালহোস্টে লাল ডেভ-স্ক্রিন পপআপ না করে
      console.warn("Reset attempt code status:", err.code);
      
      // ফায়ারবেস স্ট্যান্ডার্ড এরর হ্যান্ডলিং
      if (err.code === "auth/user-not-found") {
        setError("This email address is not registered in our records. Please check and try again.");
      } else if (err.code === "auth/invalid-email") {
        setError("The email address format is invalid.");
      } else if (err.code === "auth/too-many-requests") {
        setError("Too many requests. Please wait a moment and try again.");
      } else {
        setError("Failed to send recovery link. Please verify your connection and try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-0 sm:p-6 lg:p-10 transition-colors duration-500">
      <div className="flex w-full max-w-6xl overflow-hidden sm:rounded-[3rem] bg-card sm:border sm:border-border sm:shadow-premium min-h-[100vh] sm:min-h-[80vh]">
        
        {/* Left Side: Aesthetic Panel */}
        <div className="hidden lg:flex w-1/2 relative flex-col justify-between p-16 bg-secondary/30 border-r border-border/50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/5 z-0" />
          
          <div className="relative z-10 space-y-12">
            <Link href="/" className="inline-flex items-center gap-2 group transition-transform active:scale-95">
               <div className="bg-background text-foreground p-1.5 rounded-lg shadow-sm group-hover:shadow-blue-500/20 transition-all">
                  <Terminal size={20} className="text-white" />
               </div>
              <span className="text-xl font-semibold text-foreground">
                xdev<span className="text-primary opacity-80">utilities</span>
              </span>
            </Link>

            <div className="space-y-6">
              <h1 className="text-5xl font-semibold leading-[1.1] text-foreground">
                Account <br />
                <span className="text-muted-foreground">recovery center.</span>
              </h1>
              <p className="text-muted-foreground dark:text-slate-400 text-lg font-medium leading-relaxed max-w-md">
                We use advanced security protocols to help you regain access to your professional dashboard.
              </p>
            </div>
          </div>

          <div className="relative z-10 text-[11px] font-medium text-muted-foreground/60">
            © 2026 xdevutilities Infrastructure
          </div>

          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop" 
            alt="recovery background" 
            className="absolute inset-0 h-full w-full object-cover opacity-20 dark:opacity-10 mix-blend-luminosity pointer-events-none"
          />
        </div>

        {/* Right Side: Form Area */}
        <div className="flex-1 flex flex-col justify-center p-8 sm:p-12 lg:p-20 relative">
          <div className="max-w-sm mx-auto w-full space-y-10">
            
            {submitted ? (
              <div className="space-y-8 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-600 rounded-[1.5rem] flex items-center justify-center border border-emerald-500/20 shadow-sm">
                  <MailCheck size={32} strokeWidth={1.5} />
                </div>
                <div className="space-y-3">
                  <h2 className="text-3xl font-semibold text-foreground">Verify Mailbox</h2>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                    A secure reset link has been dispatched to the account associated with <span className="text-primary font-semibold italic">{emailInput}</span>.
                  </p>
                  <span className="text-sm font-medium">Check link in spam or junk folder.</span>
                </div>
                <Button asChild className="w-full h-14 rounded-2xl bg-secondary text-foreground hover:bg-border font-semibold transition-all">
                  <Link href="/login">Return to login</Link>
                </Button>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  <Link href="/login" className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors group">
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
                    Back to login session
                  </Link>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-semibold text-foreground">Reset Password</h2>
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                      Confirm your registered email to receive a recovery link.
                    </p>
                  </div>
                </div>

                {/* ফর্ম নো-ভ্যালিডেট করা হয়েছে যাতে কাস্টম এরর মেসেজ নিখুঁত দেখায় */}
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="space-y-2">
                    <label className="text-[11px] font-semibold text-muted-foreground opacity-60 ml-1">Email Address</label>
                    <Input 
                      type="email"
                      placeholder="Enter registered email address" 
                      className={`h-14 rounded-2xl bg-secondary/40 border-border/50 text-foreground px-5 focus:ring-4 transition-all font-medium ${
                        error ? 'ring-2 ring-red-500/20 border-red-500/50' : 'focus:ring-primary/5 focus:border-primary/40'
                      }`}
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                    />
                  </div>

                  {error && (
                    <div className="flex items-start gap-3 p-4 bg-red-500/5 border border-red-500/20 rounded-2xl animate-in fade-in slide-in-from-top-2 duration-300">
                      <AlertCircle size={18} className="shrink-0 text-red-500 mt-0.5" />
                      <p className="text-[13px] text-red-600 dark:text-red-400 font-medium leading-tight">
                        {error}
                      </p>
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full h-14 rounded-2xl bg-primary text-primary-foreground hover:opacity-90 font-semibold transition-all shadow-xl shadow-primary/10 active:scale-[0.98] disabled:opacity-50"
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <Loader2 className="animate-spin" size={18} />
                        <span>Sending Request...</span>
                      </div>
                    ) : "Request Reset Link"}
                  </Button>
                </form>
                
                <div className="flex items-center gap-2 justify-center pt-4 border-t border-border/40">
                   <ShieldCheck size={14} className="text-muted-foreground/40" />
                   <p className="text-[11px] text-muted-foreground/60 font-medium tracking-normal">
                     Secure verification active.
                   </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}