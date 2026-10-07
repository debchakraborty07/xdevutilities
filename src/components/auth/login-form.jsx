// src\components\auth\login-form.jsx

"use client";

import { useState } from "react";
import { useAuth } from "@/context/auth-context";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { getFriendlyErrorMessage } from "@/lib/utils";
import Link from "next/link";
import { AlertCircle, Loader2, ArrowLeft, ShieldCheck, Terminal } from "lucide-react";

export default function LoginForm() {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { login } = useAuth();
    const router = useRouter();

    const isFormValid = identifier.trim().length > 0 && password.length > 0;

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!isFormValid) return;

        setLoading(true);
        setError(null);
        try {
            let loginId = identifier.trim().toLowerCase();
            if (!loginId.includes("@") && !loginId.includes(".com")) {
                loginId = "@" + loginId;
            }
            await login(loginId, password);
            router.push("/");
        } catch (err) {
            setError(getFriendlyErrorMessage(err.code));
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-background p-0 sm:p-6 lg:p-10 transition-colors duration-500">
            <div className="flex w-full max-w-6xl overflow-hidden sm:rounded-[3rem] bg-card sm:border sm:border-border sm:shadow-premium min-h-[100vh] sm:min-h-[80vh]">

                {/* --- Left Side: Aesthetic Panel --- */}
                <div className="hidden lg:flex w-1/2 relative flex-col justify-between p-16 bg-secondary/30 border-r border-border/50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/5 z-0" />

                    <div className="relative z-10 space-y-12">
                        <Link href="/" className="inline-flex items-center gap-2 group transition-transform active:scale-95">
                            <div className="bg-background text-foreground p-1.5 rounded-lg shadow-sm group-hover:shadow-blue-500/20 transition-all">
                                <Terminal size={20} className="bg-background text-foreground" />
                            </div>
                            <span className="text-xl font-semibold text-foreground tracking-normal">
                                xdev<span className="text-primary opacity-80">utilities</span>
                            </span>
                        </Link>

                        <div className="space-y-6">
                            <h1 className="text-5xl font-semibold leading-[1.1] text-foreground tracking-normal">
                                Precision tools for the <br />
                                <span className="text-muted-foreground">modern workflow.</span>
                            </h1>
                            <p className="text-muted-foreground dark:text-slate-400 text-lg font-medium leading-relaxed max-w-md">
                                Experience a distraction-free environment for all your technical and creative needs.
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

                {/* --- Right Side: Login Form --- */}
                <div className="flex-1 flex flex-col justify-center p-8 sm:p-12 lg:p-20 relative">

                    <div className="max-w-sm mx-auto w-full space-y-10">
                        <div className="space-y-3 text-center sm:text-left">
                            <h2 className="text-3xl font-semibold text-foreground tracking-normal">Log in</h2>
                            <p className="text-sm text-muted-foreground font-medium">
                                New to the platform?
                                <Link href="/signup" className="text-primary hover:underline underline-offset-4 ml-1.5 transition-colors">
                                    Create an account
                                </Link>
                            </p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6" noValidate>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-[11px] font-semibold text-muted-foreground opacity-60 ml-1">Identity</label>
                                    <Input
                                        placeholder="Username or email"
                                        className="h-14 rounded-2xl bg-secondary/40 border-border/50 text-foreground px-5 focus:ring-4 focus:ring-primary/5 focus:border-primary/40 transition-all font-medium"
                                        value={identifier}
                                        onChange={(e) => setIdentifier(e.target.value)}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center px-1">
                                        <label className="text-[11px] font-semibold text-muted-foreground opacity-60">Security Key</label>
                                        <Link href="/forgot-password" title="reset password" className="text-[11px] text-muted-foreground hover:text-primary transition-colors font-semibold italic">
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <Input
                                        type="password"
                                        placeholder="Enter your password"
                                        className="h-14 rounded-2xl bg-secondary/40 border-border/50 text-foreground px-5 focus:ring-4 focus:ring-primary/5 focus:border-primary/40 transition-all font-medium"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
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
                                disabled={loading || !isFormValid}
                                className="w-full h-14 rounded-2xl bg-primary text-primary-foreground hover:opacity-90 font-semibold transition-all shadow-xl shadow-primary/10 active:scale-[0.98] disabled:opacity-50"
                            >
                                {loading ? (
                                    <div className="flex items-center gap-2">
                                        <Loader2 className="animate-spin" size={18} />
                                        <span>Verifying...</span>
                                    </div>
                                ) : "Access Account"}
                            </Button>
                        </form>

                        <div className="flex items-center gap-2 justify-center pt-4 border-t border-border/40">
                            <ShieldCheck size={14} className="text-muted-foreground/40" />
                            <p className="text-[11px] text-muted-foreground/60 font-medium tracking-normal">
                                Secure end-to-end authentication active.
                            </p>
                        </div>

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