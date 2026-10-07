// src/app/dashboard/edit-profile-modal.jsx

"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Camera, User } from "lucide-react";
import { useAuth } from "@/context/auth-context";

export default function EditProfileModal() {
  const { profile } = useAuth();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-xl border-slate-200 dark:border-slate-800 font-bold text-xs">
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-[32px] border-none bg-background text-foreground p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Edit Profile</DialogTitle>
        </DialogHeader>
        <div className="py-6 space-y-6">
          <div className="flex flex-col items-center gap-4">
            <div className="w-24 h-24 rounded-[32px] bg-background text-foreground flex items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-700 relative overflow-hidden group">
              {profile?.photoURL ? <img src={profile.photoURL} alt="p" className="w-full h-full object-cover" /> : <User size={32} className="bg-background text-foreground" />}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <Camera className="bg-background text-foreground" size={20} />
              </div>
            </div>
            <p className="text-[10px] bg-background text-foreground font-bold text-center">Change profile picture</p>
          </div>

          {/* প্রোফাইল আপডেট বাটন */}
          <Button className="w-full h-12 rounded-xl bg-background text-foreground font-bold">
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}