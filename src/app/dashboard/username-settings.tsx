// src/app/dashboard/username-settings.tsx

"use client";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, X, Loader2, AlertCircle } from "lucide-react";

export default function UsernameSettings() {
  const { profile, updateUsername } = useAuth();
  const [newName, setNewName] = useState("");
  const [status, setStatus] = useState({ checking: false, available: null as boolean | null, loading: false });

  useEffect(() => {
    const checkUnique = async () => {
      const name = newName.replace("@", "").toLowerCase().trim();
      if (name.length < 3 || name === profile?.username) {
        setStatus(p => ({ ...p, available: null }));
        return;
      }
      setStatus(p => ({ ...p, checking: true }));
      const res = await fetch("https://check-username-api-dxrdhrudba-uc.a.run.app", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: name }),
      });
      const data = await res.json();
      setStatus(p => ({ ...p, available: data.available, checking: false }));
    };
    const timer = setTimeout(checkUnique, 500);
    return () => clearTimeout(timer);
  }, [newName, profile?.username]);

  const handleUpdate = async () => {
    setStatus(p => ({ ...p, loading: true }));
    try {
      await updateUsername(newName);
      alert("Username updated successfully!");
    } catch (err: any) {
      alert(err.message);
    } finally {
      setStatus(p => ({ ...p, loading: false }));
    }
  };

  return (
    <div className="p-6 md:p-8 rounded-[32px] bg-background text-foreground border border-slate-100 dark:border-slate-800 shadow-sm">
      <h3 className="text-lg font-bold mb-6 text-center md:text-left">Account Settings</h3>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-[11px] font-bold text-slate-400">Username</label>
          <div className="flex gap-3">
            <div className="relative flex-grow">
              <Input 
                value={newName || `@${profile?.username || ""}`}
                onChange={(e) => setNewName(e.target.value.toLowerCase())}
                className="h-12 rounded-xl bg-background text-foreground border-none px-4 text-sm font-medium"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                {status.checking ? <Loader2 className="animate-spin size-4 text-slate-400" /> : 
                 status.available === true ? <Check className="text-emerald-500 size-4" /> : 
                 status.available === false ? <X className="text-rose-500 size-4" /> : null}
              </div>
            </div>
            <Button 
              onClick={handleUpdate} 
              disabled={status.available !== true || status.loading}
              className="h-12 px-6 rounded-xl bg-background text-foreground font-bold"
            >
              {status.loading ? "Updating..." : "Change"}
            </Button>
          </div>
          <p className="text-[10px] text-slate-400 italic">You can change username once every 180 days</p>
        </div>
      </div>
    </div>
  );
}