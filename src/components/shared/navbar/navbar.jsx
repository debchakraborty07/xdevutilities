//src/components/shared/navbar/navbar.jsx

"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import Toggle from "./toggle";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";
import { User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LogoutModal from "@/components/shared/logout-modal";

export default function Navbar() {
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
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 dark:border-slate-800 bg-background text-foreground backdrop-blur-xl">
      <nav className="container mx-auto flex h-16 items-center justify-between px-6">

        {/* Left Section */}
        <div className="flex items-center gap-10">
          <Logo />
          <div className="hidden md:flex items-center gap-7">
            <Link href="/tools" className="text-[14px] font-medium text-muted-foreground hover:text-foreground dark:text-slate-400 dark:hover:text-slate-100 transition-colors">
              Tools
            </Link>
            <Link className="text-[14px] font-medium text-muted-foreground hover:text-foreground dark:text-slate-400 dark:hover:text-slate-100 transition-colors" href="/blog">Blog</Link>
            <Link href="/resources/usage-guide" className="text-[14px] font-medium text-muted-foreground hover:text-foreground dark:text-slate-400 dark:hover:text-slate-100 transition-colors">
              Guide
            </Link>

          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 md:gap-3">
          <ModeToggle />

          {loading ? (
            <div className="h-9 w-9 animate-pulse rounded-full bg-background text-foreground" />
          ) : user ? (
            <div className="flex items-center gap-2">
              <div className="hidden md:block">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="h-9 w-9 cursor-pointer border border-slate-200 dark:border-slate-800 hover:ring-4 hover:ring-slate-100 dark:hover:ring-slate-900 transition-all">
                      <AvatarImage src={profile?.photoURL || ""} />
                      <AvatarFallback className="bg-background text-foreground"><User size={18} /></AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 mt-2 rounded-2xl p-2 shadow-xl border-slate-100 dark:border-slate-800">
                    <DropdownMenuLabel className="font-normal px-2 py-1.5">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-bold text-foreground dark:text-white leading-none">@{profile?.username}</p>
                        <p className="text-[11px] text-muted-foreground truncate mt-1">{user.email}</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="my-1 bg-background text-foreground" />
                    <DropdownMenuItem asChild className="rounded-lg cursor-pointer py-2 focus:bg-background text-foreground">
                      <Link href="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>

                    {/* Logout Trigger */}
                    <DropdownMenuItem
                      onClick={() => setShowLogoutModal(true)}
                      className="rounded-lg cursor-pointer py-2 text-rose-500 focus:text-rose-500 focus:bg-rose-950/30"
                    >
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="md:hidden">
                <Avatar className="h-9 w-9 border border-slate-200 dark:border-slate-800">
                  <AvatarImage src={profile?.photoURL || ""} />
                  <AvatarFallback><User size={16} /></AvatarFallback>
                </Avatar>
              </div>
            </div>
          ) : (
            <Button asChild variant="outline" className="hidden sm:flex h-9 rounded-full px-5 text-[13px] font-medium border-slate-200 dark:border-slate-800">
              <Link href="/login">Log in</Link>
            </Button>
          )}

          <Toggle />
        </div>
      </nav>

      {/* Reusable Logout Confirmation Modal */}
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogoutConfirm}
      />
    </header>
  );
}