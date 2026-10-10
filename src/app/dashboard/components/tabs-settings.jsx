// src/app/dashboard/components/tabs-settings.jsx

"use client";

import UsernameSettings from "../username-settings";
import DeleteAccountModal from "./delete-account-modal"; // ✅ নতুন মডাল ইমপোর্ট
import { Trash2, ShieldAlert, LifeBuoy } from "lucide-react";
import Link from "next/link";

export default function SettingsTab() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start animate-in fade-in duration-300">

      {/* বাম পাশ: মূল সেটিংস */}
      <div className="lg:col-span-2 space-y-6 w-full">
        <UsernameSettings />

        {/* Security & Cooldown Info Card */}
        <div className="p-6 rounded-3xl bg-card text-card-foreground border border-border shadow-sm flex items-start gap-4">
          <div className="w-10 h-10 bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 rounded-2xl flex items-center justify-center shrink-0">
            <ShieldAlert size={20} />
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-foreground text-sm">Security & Handle Policy</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Changing your username handle is restricted to once every 180 days to prevent identity squatting and preserve your permanent public links.
            </p>
          </div>
        </div>
      </div>

      {/* ডান পাশ: ডেঞ্জার জোন (এখন সম্পূর্ণ কার্যকরী মডাল সহ) */}
      <div className="lg:col-span-1 w-full p-6 sm:p-7 rounded-3xl border border-destructive/20 bg-destructive/5 space-y-6 shadow-sm">
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-destructive text-xs font-bold uppercase tracking-wider">
            <Trash2 size={15} />
            <span>Danger Zone</span>
          </div>
          <h4 className="text-base font-bold text-foreground">Terminate Account</h4>
          <p className="text-xs text-muted-foreground leading-relaxed font-normal">
            Permanently erase your user profile, saved tool bookmarks, and workspace preferences. This action cannot be reversed.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          {/* পাসওয়ার্ড ভেরিফিকেশন ডিলিট মডাল */}
          <DeleteAccountModal />

          <div className="text-center">
            <Link
              href="/legal/contact"
              className="inline-flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              <LifeBuoy size={12} />
              <span>Need help? Contact support</span>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}