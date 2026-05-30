// src/app/signup/page.tsx

"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/auth-context";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { getFriendlyErrorMessage } from "@/lib/utils";
import Link from "next/link";
import { Check, X, Loader2, AlertCircle, Circle, Terminal, ShieldCheck, ArrowLeft } from "lucide-react";

export default function SignupPage() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [status, setStatus] = useState({ checking: false, available: null as boolean | null, error: "" });
  const { signup } = useAuth();
  const router = useRouter();

  // ১. ইউজারনেম ইউনিকনেস চেক (আপনার অরিজিনাল লজিক)
  useEffect(() => {
    const checkName = async () => {
      const name = formData.username.trim().toLowerCase();
      if (name.length < 3 || name.includes("@")) {
        setStatus(prev => ({ ...prev, available: null }));
        return;
      }
      setStatus(prev => ({ ...prev, checking: true }));
      try {
        const res = await fetch("https://check-username-api-dxrdhrudba-uc.a.run.app", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: name }),
        });
        const data = await res.json();
        setStatus(prev => ({ ...prev, available: data.available, checking: false }));
      } catch (err) {
        setStatus(prev => ({ ...prev, checking: false }));
      }
    };

    const timer = setTimeout(checkName, 500);
    return () => clearTimeout(timer);
  }, [formData.username]);

  const isPasswordValid = formData.password.length >= 8;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status.available !== true || !isPasswordValid || formData.username.includes("@")) return;
    
    try {
      await signup(formData.username, formData.email, formData.password);
      router.push("/");
    } catch (err: any) {
      const friendlyMsg = getFriendlyErrorMessage(err.code);
      setStatus(prev => ({ ...prev, error: friendlyMsg }));
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-0 sm:p-6 lg:p-10 transition-colors duration-500">
      <div className="flex w-full max-w-6xl overflow-hidden sm:rounded-[3rem] bg-card sm:border sm:border-border sm:shadow-premium min-h-[100vh] sm:min-h-[85vh]">
        
        {/* --- Left Side: Aesthetic Panel (Hidden on Mobile) --- */}
        <div className="hidden lg:flex w-1/2 relative flex-col justify-between p-16 bg-secondary/30 border-r border-border/50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/5 z-0" />
          
          <div className="relative z-10 space-y-12">
            <Link href="/" className="inline-flex items-center gap-2 group transition-transform active:scale-95">
            
              <div className="bg-background text-foreground p-1.5 rounded-lg shadow-sm group-hover:shadow-blue-500/20 transition-all">
                <Terminal size={20} className="bg-background text-foreground" />
              </div>
              
              <span className="text-xl font-semibold text-foreground">
                xdev<span className="text-primary opacity-80">utilities</span>
              </span>
            </Link>

            <div className="space-y-6">
              <h1 className="text-5xl font-semibold leading-[1.1] text-foreground">
                Join the community of <br />
                <span className="text-muted-foreground">efficient creators.</span>
              </h1>
              <p className="text-muted-foreground dark:text-slate-400 text-lg font-medium leading-relaxed max-w-md">
                One professional account to access all your high-performance utility tools.
              </p>
            </div>
          </div>

          <div className="relative z-10 text-[11px] font-medium text-muted-foreground/60">
            © 2026 xdevutilities Infrastructure
          </div>

          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop" 
            alt="aesthetic background" 
            className="absolute inset-0 h-full w-full object-cover opacity-20 dark:opacity-10 mix-blend-luminosity pointer-events-none"
          />
        </div>

        {/* --- Right Side: Form Area --- */}
        <div className="flex-1 flex flex-col justify-center p-8 sm:p-12 lg:p-20 relative overflow-y-auto">
          
          <div className="max-w-sm mx-auto w-full space-y-10 py-8">
            <div className="space-y-3 text-center sm:text-left">
              <h2 className="text-3xl font-semibold text-foreground">Create Account</h2>
              <p className="text-sm text-muted-foreground font-medium">
                Already registered? 
                <Link href="/login" className="text-primary hover:underline underline-offset-4 ml-1.5 transition-colors">
                  Log in to your session
                </Link>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Username Field */}
              <div className="space-y-2">
                <label className="text-[11px] font-semibold text-muted-foreground opacity-60 ml-1">Username</label>
                <div className="relative group">
                  <Input 
                    placeholder="Choose a handle" 
                    className={`h-14 rounded-2xl bg-secondary/40 border-border/50 text-foreground px-5 pr-12 focus:ring-4 transition-all font-medium ${formData.username.includes("@") ? "ring-2 ring-red-500/20 border-red-500/50" : "focus:ring-primary/5 focus:border-primary/40"}`}
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    required
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    {status.checking ? <Loader2 className="animate-spin text-muted-foreground" size={18} /> : 
                     status.available === true ? <Check className="text-emerald-500" size={18} /> : 
                     status.available === false ? <X className="text-red-500" size={18} /> : null}
                  </div>
                </div>
                
                <div className="min-h-[20px] px-1">
                    {formData.username.includes("@") ? (
                      <p className="flex items-center gap-1.5 text-[11px] text-red-500 font-medium italic">
                        <AlertCircle size={12} /> The @ symbol is not required
                      </p>
                    ) : formData.username.length > 0 && status.available === true ? (
                      <p className="text-[11px] text-emerald-600 font-medium italic">
                        Your public link: xdevutilities.com/@{formData.username.toLowerCase().trim()}
                      </p>
                    ) : null}
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-[11px] font-semibold text-muted-foreground opacity-60 ml-1">Verified Email</label>
                <Input 
                  type="email" 
                  placeholder="name@gmail.com" 
                  className="h-14 rounded-2xl bg-secondary/40 border-border/50 text-foreground px-5 focus:ring-4 focus:ring-primary/5 focus:border-primary/40 transition-all font-medium"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              {/* Password Field */}
              <div className="space-y-3">
                <label className="text-[11px] font-semibold text-muted-foreground opacity-60 ml-1">Security Key</label>
                <Input 
                  type="password" 
                  placeholder="Create a strong password" 
                  className="h-14 rounded-2xl bg-secondary/40 border-border/50 text-foreground px-5 focus:ring-4 focus:ring-primary/5 focus:border-primary/40 transition-all font-medium"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                
                <div className="flex items-center gap-2 px-1">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${isPasswordValid ? 'bg-emerald-500 border-emerald-500' : 'border-border'}`}>
                    {isPasswordValid && <Check className="text-white" size={10} />}
                  </div>
                  <span className={`text-[11px] font-medium ${isPasswordValid ? "text-emerald-600" : "text-slate-400"}`}>
                    Minimum 8 characters required
                  </span>
                </div>
              </div>

              {status.error && (
                <div className="flex items-start gap-3 p-4 bg-red-500/5 border border-red-500/20 rounded-2xl animate-in fade-in slide-in-from-top-2 duration-300">
                  <AlertCircle size={18} className="shrink-0 text-red-500 mt-0.5" />
                  <p className="text-[13px] text-red-600 dark:text-red-400 font-medium leading-tight">
                    {status.error}
                  </p>
                </div>
              )}

              <Button 
                type="submit" 
                disabled={status.available !== true || !isPasswordValid || formData.username.includes("@")}
                className="w-full h-14 rounded-2xl bg-primary text-primary-foreground hover:opacity-90 font-semibold transition-all shadow-xl shadow-primary/10 active:scale-[0.98] disabled:opacity-50"
              >
                Establish Account
              </Button>
            </form>

            <div className="flex items-center gap-2 justify-center pt-4 border-t border-border/40">
               <ShieldCheck size={14} className="text-muted-foreground/40" />
               <p className="text-[11px] text-muted-foreground/60 font-medium">
                 Your data is protected by industry-standard encryption.
               </p>
            </div>
            
            <div className="text-center sm:text-left">
              <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft size={14} /> Back to utilities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}