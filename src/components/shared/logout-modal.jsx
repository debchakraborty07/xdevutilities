// src\components\shared\logout-modal.jsx

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
      <DialogContent className="sm:max-w-[400px] rounded-[32px] p-8 border-none shadow-2xl">
        <div className="flex flex-col items-center text-center">
          {/* Icon Area */}
          <div className="w-16 h-16 bg-rose-50 dark:bg-rose-900/20 text-rose-500 rounded-2xl flex items-center justify-center shadow-inner mb-6">
            <LogOut size={32} />
          </div>

          {/* Header Area */}
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-2xl font-bold text-foreground dark:text-slate-100">
              Wait! Logging out?
            </DialogTitle>
            <DialogDescription className="text-muted-foreground dark:text-slate-400 leading-relaxed text-sm">
              Are you sure you want to sign out? You&apos;ll need to log in again to access your bookmarked tools and saved history.
            </DialogDescription>
          </DialogHeader>

          {/* Action Buttons */}
          <div className="flex flex-col w-full gap-3 mt-8">
            <Button
              onClick={onConfirm}
              disabled={loading}
              className="h-12 w-full rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-semibold shadow-lg transition-all active:scale-[0.98]"
            >
              {loading ? "Signing out..." : "Yes, Sign me out"}
            </Button>

            <Button
              onClick={onClose}
              variant="outline"
              className="h-12 w-full rounded-2xl border-slate-200 dark:border-slate-800 font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              No, stay logged in
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}