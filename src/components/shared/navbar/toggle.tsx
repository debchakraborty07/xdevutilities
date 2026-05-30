//src/components/shared/navbar/toggle.tsx

"use client";

import { useState } from "react";
import { 
  Menu, LayoutGrid, BookOpen, User, LogOut, 
  ChevronRight, ShieldCheck, Bookmark, Settings 
} from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/context/auth-context";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LogoutModal from "@/components/shared/logout-modal"; // মডাল ইমপোর্ট

export default function Toggle() {
  const { user, profile, logout, loading } = useAuth();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutConfirm = async () => {
    try {
      await logout();
      setShowLogoutModal(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden rounded-full w-9 h-9 border border-slate-200 dark:border-slate-800">
            <Menu size={20} className="text-slate-600 dark:text-slate-400" />
          </Button>
        </SheetTrigger>
        
        <SheetContent side="right" className="w-[310px] border-l border-slate-100 dark:border-slate-800 p-0 flex flex-col bg-white dark:bg-[#020617]">
          
          <SheetHeader className="sr-only"> 
            <SheetTitle>Mobile Navigation Menu</SheetTitle>
          </SheetHeader>

          {/* Profile Section */}
          <div className="p-6 pb-4 bg-background text-foreground ">
            {loading ? (
              <div className="h-16 w-full animate-pulse bg-background text-foreground rounded-2xl" />
            ) : user ? (
              <div className="flex items-center gap-4">
                <Avatar className="h-14 w-14 border-2 border-white dark:border-slate-800 shadow-sm">
                  <AvatarImage src={profile?.photoURL || ""} />
                  <AvatarFallback><User size={24} /></AvatarFallback>
                </Avatar>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-base font-bold text-foreground dark:text-white truncate">@{profile?.username || "user"}</span>
                  <span className="text-xs text-muted-foreground truncate">{user.email}</span>
                </div>
              </div>
            ) : (
              <div className="space-y-3 ">
                <h3 className="text-lg font-bold">Welcome</h3>
                <p className="text-xs leading-relaxed">Sign in to save tools and access personalized features.</p>
                <Button asChild className="w-full rounded-xl h-10 font-bold">
                  <Link href="/login">Sign in</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <div className="flex-grow py-6 px-3 overflow-y-auto space-y-8">
            <div className="space-y-1">
              <h3 className="px-4 text-[10px] font-bold text-slate-400 mb-3">Main Navigation</h3>
              <MobileNavLink href="/tools" icon={<LayoutGrid size={18} />} label="All Utilities" />
              <MobileNavLink href="/resources/usage-guide" icon={<BookOpen size={18} />} label="Usage Guide" />
            </div>

            {user && (
              <div className="space-y-1">
                <h3 className="px-4 text-[10px] font-bold text-slate-400 mb-3">Account Workspace</h3>
                <MobileNavLink href="/dashboard" icon={<Settings size={18} />} label="Dashboard" />
                <MobileNavLink href="/dashboard" icon={<Bookmark size={18} />} label="Saved Tools" />
                
                {/* Logout Trigger for Mobile */}
                <button 
                  onClick={() => setShowLogoutModal(true)}
                  className="w-full flex items-center justify-between p-4 rounded-2xl text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <LogOut size={18} />
                    <span className="text-[14px] font-medium">Log out</span>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Footer Branding */}
          <div className="p-6 border-t border-slate-50 dark:border-slate-900">
             <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-500 mb-1">
               <ShieldCheck size={14} />
               <span className="text-[11px] font-bold">Privacy Guaranteed</span>
             </div>
             <p className="text-[10px] text-slate-400">Processing happens in temporary memory.</p>
          </div>
        </SheetContent>
      </Sheet>

      {/* Logout Modal outside Sheet but inside Component */}
      <LogoutModal 
        isOpen={showLogoutModal} 
        onClose={() => setShowLogoutModal(false)} 
        onConfirm={handleLogoutConfirm} 
      />
    </>
  );
}

function MobileNavLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link 
      href={href}
      className="flex items-center justify-between p-4 rounded-2xl bg-background text-foreground transition-all group"
    >
      <div className="flex items-center gap-3">
        <span className="text-slate-400 group-hover:text-foreground dark:group-hover:text-slate-100 transition-colors">{icon}</span>
        <span className="text-[14px] font-medium group-hover:text-foreground dark:group-hover:text-slate-100 transition-colors">{label}</span>
      </div>
      <ChevronRight size={14} className="text-slate-300 dark:text-slate-700" />
    </Link>
  );
}