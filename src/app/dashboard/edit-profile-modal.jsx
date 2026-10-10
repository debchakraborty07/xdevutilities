// src/app/dashboard/edit-profile-modal.jsx

"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Loader2, Edit3 } from "lucide-react";
import { useAuth } from "@/context/auth-context";
import { db } from "@/lib/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "sonner";

export default function EditProfileModal() {
  const { user, profile, setLocalProfileData } = useAuth();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    if (profile) {
      setDisplayName(profile.displayName || "");
      setBio(profile.bio || "");
    }
  }, [profile, open]);

  const handleSave = async (e) => {
    e.preventDefault();
    if (!user?.uid) return;

    setLoading(true);
    try {
      const trimmedName = displayName.trim();
      const trimmedBio = bio.trim();

      // লোকাল স্টেট সাথে সাথে আপডেট (কোনো রি-ফেচ কল ছাড়া)
      if (setLocalProfileData) {
        setLocalProfileData({
          displayName: trimmedName,
          bio: trimmedBio,
        });
      }

      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        displayName: trimmedName,
        bio: trimmedBio,
      });

      toast.success("Profile information updated!");
      setOpen(false);
    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="h-9 px-4 rounded-xl border-border bg-card hover:bg-muted font-semibold text-xs text-foreground shadow-sm transition-all active:scale-95 flex items-center gap-1.5"
        >
          <Edit3 size={13} className="text-muted-foreground" />
          <span>Edit Profile</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="w-[92vw] sm:max-w-[400px] max-h-[90vh] overflow-y-auto rounded-3xl bg-card text-card-foreground border border-border p-6 sm:p-7 shadow-2xl">
        <DialogHeader className="space-y-1">
          <DialogTitle className="text-xl font-bold tracking-tight text-foreground">
            Edit Profile
          </DialogTitle>
          <p className="text-xs text-muted-foreground">
            Update your public display name and bio
          </p>
        </DialogHeader>

        <form onSubmit={handleSave} className="space-y-4 pt-2">

          {/* Avatar Preview Box */}
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-muted/50 border border-border/60">
            <div className="w-14 h-14 min-w-[56px] min-h-[56px] max-w-[56px] max-h-[56px] rounded-2xl bg-card border border-border flex items-center justify-center overflow-hidden shrink-0 shadow-sm relative">
              {profile?.photoURL ? (
                <img
                  src={profile.photoURL}
                  alt="Profile"
                  className="w-full h-full object-cover block"
                />
              ) : (
                <User size={22} className="text-muted-foreground" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-foreground truncate">
                @{profile?.username || "developer"}
              </p>
              <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">
                Change avatar using the camera icon on banner
              </p>
            </div>
          </div>

          {/* Display Name Input */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-muted-foreground ml-1">
              Display Name
            </label>
            <Input
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="e.g. Debojyoti Chakraborty"
              className="h-11 rounded-xl bg-secondary/40 border-border/60 text-foreground px-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          {/* Bio / Role Textarea */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-muted-foreground ml-1">
              Professional Bio
            </label>
            <textarea
              rows={3}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="e.g. Full-stack Developer building high-performance web utilities..."
              className="w-full p-3 rounded-xl bg-secondary/40 border border-border/60 text-foreground text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all resize-none outline-none leading-relaxed placeholder:text-muted-foreground/60"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-2.5 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="flex-1 h-11 rounded-xl border-border bg-card hover:bg-muted font-semibold text-foreground text-sm"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={loading}
              className="flex-[2] h-11 rounded-xl bg-primary text-primary-foreground font-semibold shadow-sm hover:opacity-90 text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.99] disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={16} />
                  <span>Saving...</span>
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>

        </form>
      </DialogContent>
    </Dialog>
  );
}