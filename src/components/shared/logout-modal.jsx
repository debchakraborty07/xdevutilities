// src/components/shared/logout-modal.jsx

"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function LogoutModal({ isOpen, onClose, onConfirm, loading }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] rounded-3xl p-6 sm:p-8 bg-card text-card-foreground border border-border shadow-2xl">
        <div className="flex flex-col items-center text-center">

          {/* Icon Area */}
          <div className="w-13 h-13 bg-rose-500/10 text-rose-500 border border-rose-500/20 rounded-2xl flex items-center justify-center shadow-sm mb-5">
            <LogOut size={26} />
          </div>

          {/* Header Area */}
          <DialogHeader className="space-y-2">
            <DialogTitle className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Sign out of account?
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Are you sure you want to log out? You will need to log back in to access your bookmarked tools and saved preferences.
            </DialogDescription>
          </DialogHeader>

          {/* Action Buttons */}
          <div className="flex flex-col w-full gap-2.5 mt-6">
            <Button
              type="button"
              onClick={onConfirm}
              disabled={loading}
              className="h-11 w-full rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-semibold shadow-sm transition-all active:scale-[0.99] disabled:opacity-50"
            >
              {loading ? "Signing out..." : "Yes, Sign me out"}
            </Button>

            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="h-11 w-full rounded-xl border-border bg-card hover:bg-muted font-semibold text-foreground transition-all"
            >
              No, stay logged in
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}