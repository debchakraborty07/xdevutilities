// src/components/shared/auth-modal.jsx

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

export default function AuthModal({
  isOpen,
  onClose,
  title = "Save your favorite tools",
  description = "Join xdevutilities to bookmark your most-used tools and access your saved preferences across any device."
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] rounded-3xl p-6 sm:p-8 bg-card text-card-foreground border border-border shadow-2xl">
        <DialogHeader className="flex flex-col items-center text-center space-y-3 pt-2">

          {/* Refined Minimalist Icon Badge */}
          <div className="w-13 h-13 bg-primary/10 text-primary border border-primary/20 rounded-2xl flex items-center justify-center shadow-sm mb-1">
            <Bookmark size={24} className="fill-primary/20" />
          </div>

          <DialogTitle className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            {title}
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal max-w-[300px]">
            {description}
          </DialogDescription>
        </DialogHeader>

        {/* Clean, Symmetrical Actions */}
        <div className="flex flex-col gap-2.5 mt-5">
          <Button
            asChild
            className="w-full h-11 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-semibold shadow-sm transition-all active:scale-[0.99]"
          >
            <Link href="/login" onClick={onClose} className="flex items-center justify-center gap-2 w-full h-full">
              <LogIn size={16} />
              <span>Sign in to your account</span>
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-full h-11 rounded-xl border-border bg-card hover:bg-muted text-sm font-semibold transition-all active:scale-[0.99]"
          >
            <Link href="/signup" onClick={onClose} className="flex items-center justify-center gap-2 w-full h-full text-foreground">
              <UserPlus size={16} />
              <span>Create a free account</span>
            </Link>
          </Button>

          <button
            type="button"
            onClick={onClose}
            className="text-xs text-muted-foreground hover:text-foreground mt-2 transition-colors font-medium py-1"
          >
            Maybe later
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}