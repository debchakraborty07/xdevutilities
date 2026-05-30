// src/components/shared/auth-modal.tsx

"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Bookmark, LogIn, UserPlus } from "lucide-react";
import Link from "next/link";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

export default function AuthModal({ 
  isOpen, 
  onClose, 
  title = "Save your favorite tools", 
  description = "Join xDev Utilities to keep track of your most-used tools and access them from any device." 
}: AuthModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[420px] rounded-[32px] p-8">
        <DialogHeader className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 rounded-2xl flex items-center justify-center shadow-inner">
            <Bookmark size={32} fill="currentColor" className="opacity-80" />
          </div>
          <DialogTitle className="text-2xl font-bold text-foreground dark:text-slate-100">
            {title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground dark:text-slate-400 leading-relaxed">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-3 mt-6">
          <Button asChild className="h-12 rounded-2xl bg-background text-foreground font-semibold shadow-lg">
            <Link href="/login" className="flex items-center gap-2">
              <LogIn size={18} /> Sign in to your account
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-12 rounded-2xl border-slate-200 dark:border-slate-800 font-semibold">
            <Link href="/signup" className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <UserPlus size={18} /> Create a new account
            </Link>
          </Button>
          <button 
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-slate-600 mt-2 transition-colors font-medium"
          >
            Maybe later
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}