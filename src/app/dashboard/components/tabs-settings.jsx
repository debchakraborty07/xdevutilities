// src/app/dashboard/components/tabs-settings.jsx

"use client";
import UsernameSettings from "../username-settings";
import { Trash2, ShieldAlert } from "lucide-react";
import { toast } from "sonner";

export default function SettingsTab() {
  const handleDeleteAccount = () => {
    // এখানে ভবিষ্যতে আপনি কনফার্মেশন মডাল বা ডিলিট লজিক যোগ করবেন
    toast.error("Account deletion is restricted for security. Please contact support.");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-3 duration-500">
      <div className="md:col-span-2 space-y-8">
        <UsernameSettings />

        {/* Security Info Card */}
        <div className="p-6 rounded-[32px] bg-background text-foreground border border-slate-100 dark:border-slate-800 flex items-start gap-4">
          <div className="w-10 h-10 bg-background text-foreground rounded-xl flex items-center justify-center shadow-sm text-amber-500 shrink-0">
            <ShieldAlert size={20} />
          </div>
          <div>
            <h4 className="font-bold text-foreground dark:text-slate-100 text-sm">Security Tip</h4>
            <p className="text-xs text-muted-foreground leading-relaxed mt-1">Changing your username is allowed once every 180 days. Choose wisely as it also updates your public profile link.</p>
          </div>
        </div>
      </div>

      <div className="p-8 rounded-[40px] border border-rose-100 dark:border-rose-900/20 bg-rose-50/20 dark:bg-rose-900/5 space-y-6 h-fit">
        <div className="space-y-2">
          <h4 className="text-rose-500 font-bold flex items-center gap-2 text-xs">
            <Trash2 size={16} /> Danger zone
          </h4>
          <p className="text-[13px] font-bold text-foreground dark:text-slate-100">Delete Account</p>
          <p className="text-xs text-muted-foreground leading-relaxed">Once deleted, your bookmarks and profile data cannot be recovered. Please proceed with caution.</p>
        </div>
        <button
          onClick={handleDeleteAccount}
          className="w-full py-4 bg-rose-500 text-white rounded-2xl text-xs font-bold hover:bg-rose-600 transition-all shadow-lg shadow-rose-500/20 active:scale-95"
        >
          Terminate Account
        </button>
      </div>
    </div>
  );
}