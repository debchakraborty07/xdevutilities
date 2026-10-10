// src\app\[username]\page.jsx

import { notFound } from "next/navigation";
import Link from "next/link";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { tools } from "@/lib/tools-data";
import { Crown, Mail, Bookmark, ArrowRight, ExternalLink, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

// ডায়নামিক এসইও ও সোশ্যাল প্রিভিউ মেটাডাটা
export async function generateMetadata({ params }) {
    const resolvedParams = await Promise.resolve(params);
    const rawHandle = decodeURIComponent(resolvedParams?.username || "");

    if (!rawHandle.startsWith("@")) return { title: "Profile Not Found" };

    const cleanHandle = rawHandle.replace("@", "").toLowerCase().trim();

    try {
        const uRef = await getDoc(doc(db, "usernames", cleanHandle));
        if (!uRef.exists()) return { title: "Profile Not Found" };

        const uid = uRef.data().uid;
        const userDoc = await getDoc(doc(db, "users", uid));
        if (!userDoc.exists()) return { title: "Profile Not Found" };

        const data = userDoc.data();
        const name = data.displayName || `@${cleanHandle}`;

        return {
            title: `${name} (@${cleanHandle}) | Workspace Profile | xdevutilities`,
            description: data.bio || `Explore ${name}'s developer workspace and curated utilities on xdevutilities.`,
            alternates: {
                canonical: `https://www.xdevutilities.com/@${cleanHandle}`,
            },
            openGraph: {
                title: `${name} (@${cleanHandle}) | xdevutilities`,
                description: data.bio || `Explore curated utilities on xdevutilities.`,
                url: `https://www.xdevutilities.com/@${cleanHandle}`,
                siteName: "xdevutilities",
                type: "profile",
            },
        };
    } catch {
        return { title: "Developer Profile | xdevutilities" };
    }
}

export default async function PublicProfilePage({ params }) {
    const resolvedParams = await Promise.resolve(params);
    const rawHandle = decodeURIComponent(resolvedParams?.username || "");

    // যদি লিংকটি '@' দিয়ে শুরু না হয়, তবে এটি অন্য সাধারণ রুট বা ৪০৪
    if (!rawHandle.startsWith("@")) {
        notFound();
    }

    const cleanHandle = rawHandle.replace("@", "").toLowerCase().trim();

    // Firestore থেকে ইউজারের ডাটা ফেচ করা
    let profile = null;
    try {
        const uRef = await getDoc(doc(db, "usernames", cleanHandle));
        if (!uRef.exists()) {
            notFound();
        }

        const { uid } = uRef.data();
        const userSnap = await getDoc(doc(db, "users", uid));
        if (!userSnap.exists()) {
            notFound();
        }

        profile = userSnap.data();
    } catch (err) {
        console.error("Public profile fetch error:", err);
        notFound();
    }

    // ইউজারের সেভ করা টুলগুলো বের করা
    const savedTools = tools.filter((t) => profile?.bookmarks?.includes(t.id));
    const bannerColor = profile?.bannerColor || "#6366f1";

    return (
        <main className="min-h-screen bg-background text-foreground pb-24 font-sans">
            <div className="container mx-auto px-4 sm:px-6 max-w-5xl pt-4 sm:pt-6">

                {/* ব্যানার */}
                <div
                    className="h-44 sm:h-56 w-full rounded-3xl relative overflow-hidden border border-border shadow-sm transition-all"
                    style={{ backgroundColor: bannerColor }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* প্রোফাইল তথ্য */}
                <div className="-mt-14 sm:-mt-16 px-4 sm:px-6 relative z-10">
                    <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-5 pb-4">

                        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-5 text-center sm:text-left">
                            {/* অবতার */}
                            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-card p-1 shadow-md border-2 border-border ring-4 ring-background overflow-hidden shrink-0">
                                <div className="w-full h-full rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                                    {profile?.photoURL ? (
                                        <img
                                            src={profile.photoURL}
                                            alt={profile?.username || "Developer"}
                                            className="w-full h-full object-cover block"
                                        />
                                    ) : (
                                        <span className="text-3xl font-extrabold text-muted-foreground uppercase">
                                            {profile?.displayName?.charAt(0) || profile?.username?.charAt(0) || "U"}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* নাম, হ্যান্ডেল ও মেটা */}
                            <div className="space-y-1.5 pt-2 sm:pt-4">
                                <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                                    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                                        {profile?.displayName || `@${profile?.username}`}
                                    </h1>

                                    {profile?.isVerified && (
                                        <span title="Verified Developer Workspace">
                                            <Crown size={20} className="text-amber-500 fill-amber-500 shrink-0" />
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-muted-foreground font-medium">
                                    <span className="font-bold text-foreground">
                                        @{profile?.username}
                                    </span>
                                    <span className="opacity-40">•</span>
                                    <span>Public Workspace</span>
                                </div>
                            </div>
                        </div>

                        {/* ব্রাউজার ভিজিটরদের জন্য অ্যাকশন বাটন */}
                        <div className="pt-2 sm:pt-4 shrink-0">
                            <Button asChild variant="outline" className="h-9 px-4 rounded-xl border-border bg-card hover:bg-muted font-semibold text-xs text-foreground shadow-sm">
                                <Link href="/" className="flex items-center gap-1.5">
                                    <Terminal size={14} className="text-primary" />
                                    <span>Explore xdevutilities</span>
                                </Link>
                            </Button>
                        </div>

                    </div>

                    {/* প্রফেশনাল বায়ো */}
                    {profile?.bio && (
                        <div className="mt-4 p-4 rounded-2xl bg-card border border-border shadow-sm max-w-2xl text-left">
                            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                                {profile.bio}
                            </p>
                        </div>
                    )}

                    {/* ইউজারের কিউরেট করা টুলস কালেকশন */}
                    <div className="mt-12 space-y-5">
                        <div className="flex items-center justify-between border-b border-border pb-3">
                            <div className="flex items-center gap-2">
                                <Bookmark size={18} className="text-primary" />
                                <h2 className="text-base sm:text-lg font-bold text-foreground">
                                    Pinned Utilities
                                </h2>
                            </div>
                            <span className="text-xs text-muted-foreground font-semibold">
                                {savedTools.length} {savedTools.length === 1 ? "tool" : "tools"} curated
                            </span>
                        </div>

                        {savedTools.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {savedTools.map((t) => (
                                    <div
                                        key={t.id}
                                        className="p-5 rounded-2xl bg-card text-card-foreground border border-border flex flex-col justify-between shadow-sm hover:border-primary/30 hover:shadow-md transition-all group space-y-4"
                                    >
                                        <div className="space-y-1.5">
                                            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground border border-border/50">
                                                {t.category}
                                            </span>
                                            <h3 className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">
                                                {t.title}
                                            </h3>
                                            <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                                                {t.description}
                                            </p>
                                        </div>

                                        <Button asChild size="sm" variant="outline" className="w-full h-9 rounded-xl border-border bg-card hover:bg-muted text-xs font-semibold justify-between">
                                            <Link href={t.href}>
                                                <span>Launch Utility</span>
                                                <ExternalLink size={12} />
                                            </Link>
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="p-8 rounded-2xl bg-muted/40 border border-border text-center space-y-2">
                                <p className="text-sm font-semibold text-foreground">No pinned utilities yet</p>
                                <p className="text-xs text-muted-foreground">
                                    This user hasn&apos;t pinned any public tools to their workspace.
                                </p>
                            </div>
                        )}
                    </div>

                </div>

            </div>
        </main>
    );
}