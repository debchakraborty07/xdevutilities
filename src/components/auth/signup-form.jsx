// src/components/auth/signup-form.jsx

"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/auth-context";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { getFriendlyErrorMessage } from "@/lib/utils";
import Link from "next/link";
import { Check, X, Loader2, AlertCircle, Terminal, ShieldCheck, ArrowLeft } from "lucide-react";

export default function SignupForm() {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
    const [status, setStatus] = useState({ checking: false, available: null, error: "" });
    const [submitting, setSubmitting] = useState(false);

    const { signup } = useAuth();
    const router = useRouter();

    // Username Uniqueness Check Logic
    useEffect(() => {
        const checkName = async () => {
            const name = formData.username.trim().toLowerCase();
            if (name.length < 3 || name.includes("@")) {
                setStatus(prev => ({ ...prev, available: null, checking: false }));
                return;
            }
            setStatus(prev => ({ ...prev, checking: true, available: null }));
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
    const isFormValid = status.available === true && isPasswordValid && !formData.username.includes("@") && formData.email.trim().length > 0;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isFormValid || submitting) return;

        setSubmitting(true);
        setStatus(prev => ({ ...prev, error: "" }));

        try {
            await signup(formData.username.trim().toLowerCase(), formData.email.trim(), formData.password);
            router.push("/");
        } catch (err) {
            const friendlyMsg = getFriendlyErrorMessage(err.code);
            setStatus(prev => ({ ...prev, error: friendlyMsg }));
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-background p-0 sm:p-6 lg:p-10 transition-colors duration-500">
            <div className="flex w-full max-w-6xl overflow-hidden sm:rounded-[3rem] bg-card sm:border sm:border-border sm:shadow-premium min-h-[100vh] sm:min-h-[80vh]">

                {/* --- Left Side: Aesthetic Panel (Matching Login & Recovery) --- */}
                <div className="hidden lg:flex w-1/2 relative flex-col justify-between p-16 bg-secondary/30 border-r border-border/50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/5 z-0" />

                    <div className="relative z-10 space-y-12">
                        <Link href="/" className="inline-flex items-center gap-2 group transition-transform active:scale-95">
                            <div className="bg-background text-foreground p-1.5 rounded-lg shadow-sm group-hover:shadow-blue-500/20 transition-all">
                                <Terminal size={20} className="text-foreground" />
                            </div>
                            <span className="text-xl font-semibold text-foreground tracking-normal">
                                xdev<span className="text-primary opacity-80">utilities</span>
                            </span>
                        </Link>

                        <div className="space-y-6">
                            <h1 className="text-5xl font-semibold leading-[1.1] text-foreground tracking-normal">
                                Join the workspace for <br />
                                <span className="text-muted-foreground">modern developers.</span>
                            </h1>
                            <p className="text-muted-foreground dark:text-slate-400 text-lg font-medium leading-relaxed max-w-md">
                                Create an account to access privacy-focused developer utilities, state-free converters, and workflows.
                            </p>
                        </div>
                    </div>

                    <div className="relative z-10 flex items-center gap-6">
                        <div className="text-[11px] font-medium text-muted-foreground/60 tracking-normal">
                            © 2026 xdevutilities Infrastructure
                        </div>
                    </div>

                    <img
                        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop"
                        alt="aesthetic background"
                        className="absolute inset-0 h-full w-full object-cover opacity-20 dark:opacity-10 mix-blend-luminosity pointer-events-none"
                    />
                </div>

                {/* --- Right Side: Signup Form --- */}
                <div className="flex-1 flex flex-col justify-center p-8 sm:p-12 lg:p-20 relative">
                    <div className="max-w-sm mx-auto w-full space-y-8">

                        {/* Header */}
                        <div className="space-y-3 text-center sm:text-left">
                            <h2 className="text-3xl font-semibold text-foreground tracking-normal">Create account</h2>
                            <p className="text-sm text-muted-foreground font-medium">
                                Already registered?
                                <Link href="/login" className="text-primary hover:underline underline-offset-4 ml-1.5 transition-colors">
                                    Log in
                                </Link>
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                            <div className="space-y-4">

                                {/* Username Field */}
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center px-1">
                                        <label className="text-[11px] font-semibold text-muted-foreground opacity-60">Username Handle</label>
                                        {status.available === true && !formData.username.includes("@") && (
                                            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold animate-in fade-in">
                                                Available
                                            </span>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <Input
                                            placeholder="Choose your handle (e.g. dev_alex)"
                                            className="h-14 rounded-2xl bg-secondary/40 border-border/50 text-foreground px-5 pr-12 focus:ring-4 focus:ring-primary/5 focus:border-primary/40 transition-all font-medium"
                                            value={formData.username}
                                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                            required
                                        />
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                            {status.checking ? (
                                                <Loader2 className="animate-spin text-muted-foreground" size={18} />
                                            ) : status.available === true ? (
                                                <Check className="text-emerald-500" size={18} />
                                            ) : status.available === false ? (
                                                <X className="text-rose-500" size={18} />
                                            ) : null}
                                        </div>
                                    </div>
                                    {formData.username.includes("@") && (
                                        <p className="text-xs text-rose-500 flex items-center gap-1.5 ml-1">
                                            <AlertCircle size={13} /> The @ symbol is not allowed in username
                                        </p>
                                    )}
                                </div>

                                {/* Email Field */}
                                <div className="space-y-2">
                                    <label className="text-[11px] font-semibold text-muted-foreground opacity-60 ml-1">Email Address</label>
                                    <Input
                                        type="email"
                                        placeholder="name@example.com"
                                        className="h-14 rounded-2xl bg-secondary/40 border-border/50 text-foreground px-5 focus:ring-4 focus:ring-primary/5 focus:border-primary/40 transition-all font-medium"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>

                                {/* Password Field */}
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center px-1">
                                        <label className="text-[11px] font-semibold text-muted-foreground opacity-60">Security Key</label>
                                        <span className={`text-[10px] font-semibold transition-colors ${isPasswordValid ? 'text-emerald-600 dark:text-emerald-400' : 'text-muted-foreground/60'
                                            }`}>
                                            Min. 8 characters
                                        </span>
                                    </div>
                                    <Input
                                        type="password"
                                        placeholder="Create a strong password"
                                        className="h-14 rounded-2xl bg-secondary/40 border-border/50 text-foreground px-5 focus:ring-4 focus:ring-primary/5 focus:border-primary/40 transition-all font-medium"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Error Alert Box */}
                            {status.error && (
                                <div className="flex items-start gap-3 p-4 bg-red-500/5 border border-red-500/20 rounded-2xl animate-in fade-in slide-in-from-top-2 duration-300">
                                    <AlertCircle size={18} className="shrink-0 text-red-500 mt-0.5" />
                                    <p className="text-[13px] text-red-600 dark:text-red-400 font-medium leading-tight">
                                        {status.error}
                                    </p>
                                </div>
                            )}

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                disabled={submitting || !isFormValid}
                                className="w-full h-14 rounded-2xl bg-primary text-primary-foreground hover:opacity-90 font-semibold transition-all shadow-xl shadow-primary/10 active:scale-[0.98] disabled:opacity-50"
                            >
                                {submitting ? (
                                    <div className="flex items-center gap-2">
                                        <Loader2 className="animate-spin" size={18} />
                                        <span>Creating Account...</span>
                                    </div>
                                ) : "Register Account"}
                            </Button>
                        </form>

                        {/* Security Badge */}
                        <div className="flex items-center gap-2 justify-center pt-4 border-t border-border/40">
                            <ShieldCheck size={14} className="text-muted-foreground/40" />
                            <p className="text-[11px] text-muted-foreground/60 font-medium tracking-normal">
                                Secured with industry-standard encryption.
                            </p>
                        </div>

                        {/* Back Link */}
                        <div className="text-center sm:text-left">
                            <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors">
                                <ArrowLeft size={14} /> Return to Utilities
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}