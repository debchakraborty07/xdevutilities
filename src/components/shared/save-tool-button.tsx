// src/components/shared/save-tool-button.tsx

"use client";

import { useState } from "react";
import { Bookmark } from "lucide-react";
import { useAuth } from "@/context/auth-context";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import AuthModal from "./auth-modal"; 

export default function SaveToolButton({ toolId }: { toolId: string }) {
  const { user, profile, toggleBookmark } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  
  const isBookmarked = profile?.bookmarks?.includes(toolId);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // লিঙ্ক বা অন্য ইভেন্ট ব্লক করা
    
    if (!user) {
      // লগইন না থাকলে মডাল দেখাবে
      setShowAuthModal(true);
      return;
    }

    // লগইন থাকলে বুকমার্ক টগল হবে
    toggleBookmark(toolId);
    
    if (!isBookmarked) {
      toast.success("Tool saved to your bookmarks", {
        icon: <Bookmark size={14} fill="currentColor" />,
        className: "rounded-2xl"
      });
    }
  };

  return (
    <>
      <Button 
        variant="outline" 
        size="sm" 
        onClick={handleClick}
        className={`rounded-xl gap-2 h-10 px-4 transition-all active:scale-95 border-slate-200 dark:border-slate-800 
          ${isBookmarked ? "bg-indigo-50 border-indigo-200 dark:bg-indigo-900/20 dark:border-indigo-500/30" : "hover:bg-slate-50 dark:hover:bg-slate-900"}
        `}
      >
        <Bookmark 
          size={16} 
          fill={isBookmarked ? "currentColor" : "none"} 
          className={isBookmarked ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-600"} 
        />
        <span className={`text-xs font-semibold ${isBookmarked ? "text-indigo-600" : "text-slate-600 dark:text-slate-400"}`}>
          {isBookmarked ? "Saved" : "Save Tool"}
        </span>
      </Button>

      {/* Auth Modal Trigger */}
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </>
  );
}