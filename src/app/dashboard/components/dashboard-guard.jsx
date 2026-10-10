// src/app/dashboard/components/dashboard-guard.jsx

import Link from "next/link";
import { Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardGuard() {
    return (
        <main className="min-h-[85vh] flex items-center justify-center p-6 bg-background">
            <div className="w-full max-w-md p-8 sm:p-10 text-center space-y-5 bg-card text-card-foreground border border-border rounded-3xl shadow-sm">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto border border-primary/20">
                    <Lock size={26} />
                </div>
                <div className="space-y-1.5">
                    <h1 className="text-2xl font-bold tracking-tight text-foreground">Workspace Protected</h1>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Please authenticate to access your saved tools, workspace metrics, and personal configuration.
                    </p>
                </div>
                <Button asChild className="w-full h-11 rounded-xl bg-primary text-primary-foreground font-semibold shadow-sm">
                    <Link href="/login" className="flex items-center justify-center gap-2">
                        <span>Sign in to Workspace</span>
                        <ArrowRight size={16} />
                    </Link>
                </Button>
            </div>
        </main>
    );
}