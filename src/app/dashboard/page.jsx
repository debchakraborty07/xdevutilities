// src/app/dashboard/page.jsx

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bookmark, Settings, ShieldCheck } from "lucide-react";

import DashboardSkeleton from "./components/dashboard-skeleton";
import DashboardGuard from "./components/dashboard-guard";
import ProfileHeader from "./components/profile-header";
import BookmarksTab from "./components/tabs-bookmarks";
import SettingsTab from "./components/tabs-settings";
import VerificationTab from "./components/tabs-verification";

export default function DashboardPage() {
  const { user, profile, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) return <DashboardSkeleton />;
  if (!user) return <DashboardGuard />;

  return (
    <div className="min-h-screen bg-background text-foreground pb-24 font-sans">
      {/* ১. প্রোফাইল হেডার */}
      <ProfileHeader user={user} profile={profile} />

      {/* ২. মূল ট্যাব কন্টেইনার (flex-col যুক্ত করে ওপর-নিচ লেআউট নিশ্চিত করা হলো) */}
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl mt-6 sm:mt-8">
        <Tabs defaultValue="bookmarks" className="w-full flex flex-col space-y-8">

          {/* ওপরে ফুল-উইডথ ট্যাব বার */}
          <div className="w-full flex items-center justify-between flex-wrap gap-4 border-b border-border pb-4">
            <div className="bg-muted/70 p-1.5 rounded-2xl border border-border inline-flex w-full sm:w-auto shadow-sm">
              <TabsList className="bg-transparent h-9 p-0 gap-1 w-full sm:w-auto">
                <TabsTrigger
                  value="bookmarks"
                  className="flex-1 sm:flex-none rounded-xl px-6 py-2 text-xs font-semibold data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Bookmark size={14} />
                  <span>Bookmarks</span>
                </TabsTrigger>

                <TabsTrigger
                  value="settings"
                  className="flex-1 sm:flex-none rounded-xl px-6 py-2 text-xs font-semibold data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Settings size={14} />
                  <span>Settings</span>
                </TabsTrigger>

                <TabsTrigger
                  value="verification"
                  className="flex-1 sm:flex-none rounded-xl px-6 py-2 text-xs font-semibold data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <ShieldCheck size={14} />
                  <span>Verification</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Workspace Sync Active</span>
            </div>
          </div>

          {/* নিচে ১০০% ফুল-উইডথ জুড়ে কনটেন্ট বসবে */}
          <TabsContent value="bookmarks" className="w-full mt-0 outline-none">
            <BookmarksTab profile={profile} />
          </TabsContent>

          <TabsContent value="settings" className="w-full mt-0 outline-none">
            <SettingsTab />
          </TabsContent>

          <TabsContent value="verification" className="w-full mt-0 outline-none">
            <VerificationTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}