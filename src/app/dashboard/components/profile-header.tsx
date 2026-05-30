// src/app/dashboard/components/profile-header.tsx

"use client";

import { useState, useCallback } from "react";
import { Camera, Palette, Mail, Crown, Check, X, Loader2 } from "lucide-react";
import EditProfileModal from "../edit-profile-modal";
import { db, storage } from "@/lib/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast } from "sonner";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "@/lib/get-cropped-img";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function ProfileHeader({ user, profile }: any) {
  const [isChangingColor, setIsChangingColor] = useState(false);
  const [customColor, setCustomColor] = useState(profile?.bannerColor || "#6366f1");

  // ১. ফটো ক্রপিং স্টেট
  const [tempImage, setTempImage] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  // কালার লিস্ট (আরো বাড়ানো হলো)
  const bannerColors = [
    "#6366f1", "#0f172a", "#ec4899", "#10b981", "#f59e0b", "#71717a", 
    "#ef4444", "#8b5cf6", "#06b6d4", "#f43f5e", "#14b8a6", "#334155"
  ];

  const updateBannerColor = async (color: string) => {
    try {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, { bannerColor: color });
      toast.success("Banner updated!");
    } catch (e) {
      toast.error("Failed to update banner color");
    }
  };

  // ফটো সিলেক্ট হ্যান্ডলার
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => setTempImage(reader.result as string);
    }
  };

  const onCropComplete = useCallback((_: any, pixels: any) => {
    setCroppedAreaPixels(pixels);
  }, []);

  // ক্রপ করা ফটো সেভ এবং আপলোড লজিক
  const handleSavePhoto = async () => {
    if (!tempImage || !croppedAreaPixels) return;
    setIsUploading(true);
    try {
      const croppedBlob = await getCroppedImg(tempImage, croppedAreaPixels);
      const storageRef = ref(storage, `profiles/${user.uid}`);
      await uploadBytes(storageRef, croppedBlob);
      const downloadURL = await getDownloadURL(storageRef);

      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, { photoURL: downloadURL });
      
      setTempImage(null);
      toast.success("Profile photo updated!");
    } catch (e) {
      toast.error("Upload failed");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      {/* ব্যানার এরিয়া */}
      <div 
        className="h-44 md:h-52 container mx-auto px-4 md:px-6 max-w-5xl rounded-lg transition-all duration-700 relative group"
        style={{ backgroundColor: profile?.bannerColor || "#6366f1" }}
      >
        <div className="absolute top-4 right-4 md:right-10 flex gap-2">
          {/* কালার প্যালেট পপআপ */}
          <button 
            onClick={() => setIsChangingColor(!isChangingColor)}
            className="p-2.5 bg-black/20 backdrop-blur-md rounded-full text-white hover:bg-black/40 transition-all border border-white/10"
          >
            <Palette size={18} />
          </button>
          
          {isChangingColor && (
            <div className="absolute right-0 mt-12 p-4 bg-background text-foreground rounded-[24px] shadow-2xl border border-slate-100 dark:border-slate-800 w-64 z-[100] animate-in fade-in zoom-in duration-200">
              <p className="text-[10px] font-bold text-slate-400 mb-3">Banner Color</p>
              <div className="grid grid-cols-6 gap-2 mb-4">
                {bannerColors.map(color => (
                  <button 
                    key={color} 
                    onClick={() => updateBannerColor(color)}
                    className="w-7 h-7 rounded-full border border-black/5"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
    
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl -mt-12 md:-mt-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-6 mb-10">
          
          {/* প্রোফাইল ফটো সেকশন */}
          <div className="relative">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-background text-foreground p-1 shadow-2xl overflow-hidden ring-4 ring-white dark:ring-slate-900">
              <div className="w-full h-full rounded-full overflow-hidden bg-background text-foreground flex items-center justify-center">
                {profile?.photoURL ? (
                  <img src={profile.photoURL} alt="profile" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-3xl font-semibold text-slate-300">{profile?.username?.charAt(0)}</span>
                )}
              </div>
            </div>
            
            <label className="absolute bottom-1 right-1 md:bottom-2 md:right-2 p-2.5 bg-indigo-600 text-white rounded-full shadow-xl cursor-pointer hover:bg-indigo-700 transition-all active:scale-95 border-2 border-white dark:border-slate-900">
              <Camera size={16} />
              <input type="file" className="hidden" accept="image/*" onChange={onFileChange} />
            </label>
          </div>

          <div className="flex-grow text-center md:text-left pb-2">
            <h1 className="text-2xl md:text-4xl font-bold text-foreground dark:text-white flex items-center justify-center md:justify-start gap-3">
              @{profile?.username} 
              {profile?.isVerified && <Crown className="text-amber-500 fill-amber-500" size={24} />}
            </h1>
            <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground text-sm font-medium">
              <Mail size={14} /> {user.email}
            </div>
          </div>

          <div className="md:pb-4">
             <EditProfileModal />
          </div>
        </div>
      </div>

      {/* ৫. ফটো ক্রপার মডাল */}
      <Dialog open={!!tempImage} onOpenChange={() => setTempImage(null)}>
        <DialogContent className="sm:max-w-[450px] p-0 overflow-hidden rounded-[32px] border-none">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-xl font-bold">Crop Profile Photo</DialogTitle>
          </DialogHeader>
          <div className="relative h-80 w-full mt-4 bg-background text-foreground">
            <Cropper
              image={tempImage!}
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
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-slate-400">ZOOM</span>
              <input
                type="range"
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                className="flex-grow h-1.5 bg-background text-foreground rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setTempImage(null)}
                className="flex-1 h-12 rounded-2xl font-bold bg-background text-foreground"
              >
                Cancel
              </button>
              <button 
                onClick={handleSavePhoto}
                disabled={isUploading}
                className="flex-[2] h-12 rounded-2xl font-bold bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 flex items-center justify-center"
              >
                {isUploading ? <Loader2 className="animate-spin" size={20} /> : "Save & Upload"}
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}