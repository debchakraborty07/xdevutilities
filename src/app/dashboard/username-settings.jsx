// src/app/dashboard/username-settings.jsx

"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, X, Loader2, Copy, Link2, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

export default function UsernameSettings() {
  const { profile, updateUsername } = useAuth();
  const [newName, setNewName] = useState("");
  const [status, setStatus] = useState({ checking: false, available: null, loading: false });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (profile?.username && !newName) {
      setNewName(profile.username);
    }
  }, [profile?.username]);

  useEffect(() => {
    const checkUnique = async () => {
      const cleanName = newName.replace("@", "").toLowerCase().trim();

      if (cleanName.length < 3 || cleanName === profile?.username) {
        setStatus((p) => ({ ...p, available: null, checking: false }));
        return;
      }

      setStatus((p) => ({ ...p, checking: true, available: null }));

      try {
        const res = await fetch("https://check-username-api-dxrdhrudba-uc.a.run.app", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: cleanName }),
        });
        const data = await res.json();
        setStatus((p) => ({ ...p, available: data.available, checking: false }));
      } catch (err) {
        setStatus((p) => ({ ...p, checking: false }));
      }
    };

    const timer = setTimeout(checkUnique, 500);
    return () => clearTimeout(timer);
  }, [newName, profile?.username]);

  const handleUpdate = async () => {
    const cleanName = newName.replace("@", "").toLowerCase().trim();
    if (!cleanName || cleanName === profile?.username) return;

    setStatus((p) => ({ ...p, loading: true }));
    try {
      await updateUsername(cleanName);
      toast.success("Username handle updated successfully!");
      setStatus((p) => ({ ...p, available: null }));
    } catch (err) {
      toast.error(err.message || "Failed to update username");
    } finally {
      setStatus((p) => ({ ...p, loading: false }));
    }
  };

  const handleCopyLink = async () => {
    if (!profile?.username) return;
    const url = `https://www.xdevutilities.com/@${profile.username}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Public profile link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy link");
    }
  };

  const isSameAsCurrent = newName.trim().toLowerCase() === profile?.username?.toLowerCase();
  const currentHandle = profile?.username || "handle";

  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-card text-card-foreground border border-border shadow-sm space-y-6">
      <div>
        <h3 className="text-base font-bold text-foreground">Account Handle</h3>
        <p className="text-xs text-muted-foreground">Manage your unique public workspace identity</p>
      </div>

      {/* ইউজারনেম ইনপুট ও সেভ বাটন */}
      <div className="space-y-2">
        <label className="text-[11px] font-bold text-muted-foreground ml-1">
          Username
        </label>

        <div className="flex flex-col sm:flex-row gap-2.5">
          <div className="relative flex-grow">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold text-sm pointer-events-none">
              @
            </div>

            <Input
              value={newName}
              onChange={(e) => setNewName(e.target.value.replace("@", "").toLowerCase().trim())}
              placeholder="new_handle"
              className="h-11 rounded-xl bg-secondary/40 border-border/60 text-foreground pl-8 pr-10 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all"
            />

            <div className="absolute right-3.5 top-1/2 -translate-y-1/2">
              {status.checking ? (
                <Loader2 className="animate-spin size-4 text-muted-foreground" />
              ) : status.available === true ? (
                <Check className="text-emerald-500 size-4" />
              ) : status.available === false ? (
                <X className="text-rose-500 size-4" />
              ) : null}
            </div>
          </div>

          <Button
            type="button"
            onClick={handleUpdate}
            disabled={status.available !== true || status.loading || isSameAsCurrent}
            className="h-11 px-6 rounded-xl bg-primary text-primary-foreground font-semibold shadow-sm hover:opacity-90 transition-all active:scale-[0.99] text-sm shrink-0 disabled:opacity-50"
          >
            {status.loading ? (
              <span className="flex items-center gap-1.5">
                <Loader2 className="animate-spin size-4" />
                <span>Saving...</span>
              </span>
            ) : (
              "Save Handle"
            )}
          </Button>
        </div>

        <p className="text-[11px] text-muted-foreground italic ml-1">
          You can change your handle once every 180 days.
        </p>
      </div>

      {/* ক্লিকেবল পার্মানেন্ট লিংক কপি বক্স */}
      <div className="pt-2 border-t border-border/60 space-y-2">
        <label className="text-[11px] font-bold text-muted-foreground ml-1">
          Permanent Public Profile Link
        </label>

        <div className="flex items-center justify-between p-3 rounded-2xl bg-secondary/30 border border-border/60 gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <Link2 size={16} className="text-muted-foreground shrink-0" />
            <span className="text-xs sm:text-sm font-mono text-foreground truncate">
              xdevutilities.com/@{currentHandle}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleCopyLink}
              className="h-8 px-3 rounded-xl border-border bg-card hover:bg-muted text-xs font-semibold flex items-center gap-1.5 active:scale-95 transition-all"
            >
              {copied ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </Button>

            <Link
              href={`/@${currentHandle}`}
              target="_blank"
              title="View public profile in new tab"
              className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border border-border"
            >
              <ExternalLink size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}