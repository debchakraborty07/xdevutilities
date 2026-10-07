// src/app/dashboard/page.jsx

"use client";

import { useAuth } from "@/context/auth-context";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileHeader from "./components/profile-header";
import BookmarksTab from "./components/tabs-bookmarks";
import SettingsTab from "./components/tabs-settings";
import VerificationTab from "./components/tabs-verification";

export default function DashboardPage() {
  const { user, profile, loading } = useAuth();

  if (loading) return <div className="min-h-screen flex items-center justify-center font-medium text-slate-400 animate-pulse">Loading workspace...</div>;
  if (!user) return <div className="min-h-screen flex items-center justify-center italic text-slate-400 font-sans">Please log in to view dashboard</div>;

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 font-sans">
      {/* ১. প্রোফাইল হেডার (ব্যানার + ফটো + ইনফো) */}
      <ProfileHeader user={user} profile={profile} />

      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <Tabs defaultValue="bookmarks" className="w-full">
          <div className="bg-background text-foreground p-1 rounded-2xl inline-flex border border-slate-100 dark:border-slate-800 mb-8 w-full md:w-auto shadow-sm">
            <TabsList className="bg-transparent h-10 p-0 gap-1 w-full md:w-auto">
              <TabsTrigger value="bookmarks" className="flex-1 md:flex-none rounded-xl px-8 text-xs font-bold">Bookmarks</TabsTrigger>
              <TabsTrigger value="settings" className="flex-1 md:flex-none rounded-xl px-8 text-xs font-bold">Settings</TabsTrigger>
              <TabsTrigger value="billing" className="flex-1 md:flex-none rounded-xl px-8 text-xs font-bold">Verification</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="bookmarks"><BookmarksTab profile={profile} /></TabsContent>
          <TabsContent value="settings"><SettingsTab /></TabsContent>
          <TabsContent value="billing"><VerificationTab /></TabsContent>
        </Tabs>
      </div>
    </div>
  );
}