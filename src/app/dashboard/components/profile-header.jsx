// src/app/dashboard/components/profile-header.jsx

"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { Camera, Palette, Mail, Crown, Loader2, Sparkles } from "lucide-react";
import EditProfileModal from "../edit-profile-modal";
import { db, storage } from "@/lib/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast } from "sonner";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "@/lib/get-cropped-img";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";

const BANNER_COLORS = [
  "#6366f1", "#0f172a", "#ec4899", "#10b981", "#f59e0b", "#71717a",
  "#ef4444", "#8b5cf6", "#06b6d4", "#f43f5e", "#14b8a6", "#334155"
];

export default function ProfileHeader({ user, profile }) {
  const { setLocalProfileData } = useAuth();
  const [isChangingColor, setIsChangingColor] = useState(false);
  const colorPickerRef = useRef(null);

  // ফটো ক্রপিং স্টেট
  const [tempImage, setTempImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (colorPickerRef.current && !colorPickerRef.current.contains(e.target)) {
        setIsChangingColor(false);
      }
    };
    if (isChangingColor) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isChangingColor]);

  const updateBannerColor = async (color) => {
    if (!user?.uid) return;
    try {
      // লোকাল স্টেট তৎক্ষণাৎ আপডেট
      setLocalProfileData({ bannerColor: color });
      setIsChangingColor(false);

      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, { bannerColor: color });
      toast.success("Banner updated!");
    } catch (e) {
      toast.error("Failed to update banner color");
    }
  };

  const onFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image file");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Profile image must be under 5MB");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => setTempImage(reader.result);
    e.target.value = "";
  };

  const onCropComplete = useCallback((_, pixels) => {
    setCroppedAreaPixels(pixels);
  }, []);

  const handleSavePhoto = async () => {
    if (!tempImage || !croppedAreaPixels || !user?.uid) return;
    setIsUploading(true);
    try {
      const croppedBlob = await getCroppedImg(tempImage, croppedAreaPixels);
      const storageRef = ref(storage, `profiles/${user.uid}`);
      await uploadBytes(storageRef, croppedBlob);
      const downloadURL = await getDownloadURL(storageRef);

      // লোকাল স্টেট তৎক্ষণাৎ আপডেট
      setLocalProfileData({ photoURL: downloadURL });

      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, { photoURL: downloadURL });

      setTempImage(null);
      toast.success("Profile photo updated!");
    } catch (e) {
      toast.error("Failed to upload profile photo");
    } finally {
      setIsUploading(false);
    }
  };

  const activeColor = profile?.bannerColor || "#6366f1";

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl pt-4 sm:pt-6">

        {/* ব্যানার এরিয়া */}
        <div
          className="h-44 sm:h-52 w-full rounded-3xl transition-all duration-500 relative group overflow-hidden border border-border shadow-sm"
          style={{ backgroundColor: activeColor }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

          {/* কালার চেঞ্জার কন্ট্রোল */}
          <div ref={colorPickerRef} className="absolute top-4 right-4 z-20">
            <button
              type="button"
              onClick={() => setIsChangingColor(!isChangingColor)}
              className="p-2.5 bg-background/80 hover:bg-background backdrop-blur-md rounded-2xl text-foreground shadow-sm transition-all border border-border active:scale-95 flex items-center gap-1.5 text-xs font-semibold"
              title="Customize banner color"
            >
              <Palette size={16} />
              <span className="hidden sm:inline">Theme</span>
            </button>

            {isChangingColor && (
              <div className="absolute right-0 mt-2 p-4 bg-card text-card-foreground rounded-2xl shadow-xl border border-border w-64 z-50 animate-in fade-in zoom-in-95 duration-150">
                <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-3">
                  Select Banner Accent
                </p>
                <div className="grid grid-cols-6 gap-2">
                  {BANNER_COLORS.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => updateBannerColor(color)}
                      className={`w-7 h-7 rounded-xl transition-transform hover:scale-110 relative ${activeColor === color ? "ring-2 ring-primary ring-offset-2 ring-offset-card scale-105" : ""
                        }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* প্রোফাইল বার: অবতার + অ্যাকশন বাটন */}
        <div className="px-4 sm:px-6 relative">

          {/* অবতার এবং এডিট প্রোফাইল বাটন সারি */}
          <div className="flex items-end justify-between -mt-14 sm:-mt-16 mb-4">
            {/* অবতার */}
            <div className="relative group shrink-0">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-card p-1 shadow-md border-2 border-border ring-4 ring-background overflow-hidden">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                  {profile?.photoURL ? (
                    <img src={profile.photoURL} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-3xl font-extrabold text-muted-foreground uppercase">
                      {profile?.displayName?.charAt(0) || profile?.username?.charAt(0) || user?.email?.charAt(0) || "U"}
                    </span>
                  )}
                </div>
              </div>

              <label className="absolute bottom-1 right-1 p-2 bg-primary text-primary-foreground rounded-xl shadow-md cursor-pointer hover:opacity-90 transition-all active:scale-95 border-2 border-background">
                <Camera size={15} />
                <input type="file" className="hidden" accept="image/png,image/jpeg,image/webp" onChange={onFileChange} />
              </label>
            </div>

            {/* এডিট প্রোফাইল বাটন (ব্যানারের একদম নিচে ডানে পরিষ্কারভাবে থাকবে) */}
            <div className="pt-2">
              <EditProfileModal />
            </div>
          </div>

          {/* টেক্সট ইনফো সেকশন: কোনো কাটাকাটি ছাড়া সম্পূর্ণ সাদা/ডার্ক ব্যাকগ্রাউন্ডের ওপর ক্রিস্প লেখা */}
          <div className="space-y-2 pt-1 pb-4">

            {/* ডিসপ্লে নেম ও ভেরিফিকেশন ক্রাউন */}
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                {profile?.displayName || profile?.username || "Developer"}
              </h1>

              {profile?.isVerified && (
                <span title="Verified Developer Workspace">
                  <Crown size={20} className="text-amber-500 fill-amber-500 shrink-0" />
                </span>
              )}
            </div>

            {/* ইউজারনেম হ্যান্ডেল ও ইমেইল (একদম পরিষ্কার ও স্পষ্ট) */}
            <div className="flex items-center gap-3 flex-wrap text-sm text-muted-foreground font-medium">
              <span className="font-bold text-foreground">
                @{profile?.username || "handle"}
              </span>

              <span className="opacity-40">•</span>

              <div className="flex items-center gap-1.5">
                <Mail size={14} className="shrink-0 text-muted-foreground" />
                <span>{user?.email}</span>
              </div>
            </div>

            {/* প্রফেশনাল বায়ো */}
            {profile?.bio && (
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed pt-1.5 font-normal">
                {profile.bio}
              </p>
            )}

          </div>

        </div>

      </div>

      {/* ফটো ক্রপার মডাল */}
      <Dialog open={Boolean(tempImage)} onOpenChange={() => setTempImage(null)}>
        <DialogContent className="sm:max-w-[440px] p-0 overflow-hidden rounded-3xl bg-card text-card-foreground border border-border shadow-2xl">
          <DialogHeader className="p-6 pb-2">
            <DialogTitle className="text-lg font-bold">Crop Profile Picture</DialogTitle>
          </DialogHeader>

          <div className="relative h-72 w-full bg-black/90">
            <Cropper
              image={tempImage}
              crop={crop}
              zoom={zoom}
              aspect={1}
              cropShape="round"
              showGrid={false}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>

          <div className="p-6 space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Zoom</span>
              <input
                type="range"
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                className="flex-grow h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div className="flex gap-2.5">
              <Button
                type="button"
                variant="outline"
                onClick={() => setTempImage(null)}
                className="flex-1 h-11 rounded-xl border-border bg-card hover:bg-muted font-semibold text-foreground text-sm"
              >
                Cancel
              </Button>
              <Button
                type="button"
                onClick={handleSavePhoto}
                disabled={isUploading}
                className="flex-[2] h-11 rounded-xl bg-primary text-primary-foreground font-semibold shadow-sm hover:opacity-90 text-sm flex items-center justify-center gap-2"
              >
                {isUploading ? (
                  <>
                    <Loader2 className="animate-spin" size={16} />
                    <span>Uploading...</span>
                  </>
                ) : (
                  "Save & Apply"
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}