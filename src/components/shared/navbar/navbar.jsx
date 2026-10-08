// src/components/shared/navbar/navbar.jsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "./logo";
import Toggle from "./toggle";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";
import { User, LogOut, LayoutDashboard } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LogoutModal from "@/components/shared/logout-modal";

export default function Navbar() {
  const { user, profile, logout, loading } = useAuth();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const router = useRouter();

  const handleLogoutConfirm = async () => {
    try {
      await logout();
      setShowLogoutModal(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      <nav className="container mx-auto flex h-16 items-center justify-between px-6 max-w-7xl">

        {/* Left Section */}
        <div className="flex items-center gap-10">
          <Logo />
          <div className="hidden md:flex items-center gap-7">
            <Link
              href="/tools"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Tools
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/resources/usage-guide"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Guide
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <ModeToggle />

          {loading ? (
            <div className="h-9 w-9 animate-pulse rounded-full bg-muted border border-border" />
          ) : user ? (
            <div className="flex items-center gap-2">
              <div className="hidden md:block">
                <DropdownMenu>
                  {/* বাটনের কোনো নেস্টিং নেই, সম্পূর্ণ ক্লিন ট্রিগার */}
                  <DropdownMenuTrigger className="rounded-full outline-none focus:ring-2 focus:ring-primary/20 border-0 bg-transparent p-0 cursor-pointer">
                    <Avatar className="h-9 w-9 border border-border hover:opacity-90 transition-opacity">
                      <AvatarImage src={profile?.photoURL || ""} alt={profile?.username || "User"} />
                      <AvatarFallback className="bg-muted text-muted-foreground">
                        <User size={18} />
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="end"
                    className="w-56 mt-2 rounded-2xl p-2 shadow-xl bg-card text-card-foreground border border-border"
                  >
                    {/* MenuGroupContext ক্র্যাশ রোধে নিরাপদ ডিভ হেডার */}
                    <div className="px-2.5 py-2">
                      <p className="text-sm font-bold text-foreground leading-none">
                        @{profile?.username || "developer"}
                      </p>
                      <p className="text-xs text-muted-foreground truncate mt-1">
                        {user?.email || "Signed in"}
                      </p>
                    </div>

                    <DropdownMenuSeparator className="my-1 bg-border" />

                    {/* Dashboard Action */}
                    <DropdownMenuItem
                      onClick={() => router.push("/dashboard")}
                      className="rounded-xl cursor-pointer py-2.5 px-2.5 text-sm font-medium focus:bg-muted text-foreground flex items-center gap-2"
                    >
                      <LayoutDashboard size={16} className="text-muted-foreground" />
                      <span>Dashboard</span>
                    </DropdownMenuItem>

                    {/* Logout Action */}
                    <DropdownMenuItem
                      onClick={() => setShowLogoutModal(true)}
                      className="rounded-xl cursor-pointer py-2.5 px-2.5 text-sm font-medium text-rose-500 focus:text-rose-600 focus:bg-rose-500/10 flex items-center gap-2"
                    >
                      <LogOut size={16} />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Mobile Avatar Indicator */}
              <div className="md:hidden">
                <Avatar className="h-8 w-8 border border-border">
                  <AvatarImage src={profile?.photoURL || ""} />
                  <AvatarFallback className="bg-muted text-muted-foreground">
                    <User size={15} />
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          ) : (
            <Button
              asChild
              variant="outline"
              className="hidden sm:flex h-9 rounded-full px-5 text-xs font-semibold border-border hover:bg-muted text-foreground"
            >
              <Link href="/login">Log in</Link>
            </Button>
          )}

          <Toggle />
        </div>
      </nav>

      {/* Logout Confirmation Modal */}
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogoutConfirm}
      />
    </header>
  );
}