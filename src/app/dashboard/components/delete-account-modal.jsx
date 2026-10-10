// src/app/dashboard/components/delete-account-modal.jsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, AlertTriangle, Loader2 } from "lucide-react";
import { useAuth } from "@/context/auth-context";
import { auth, db, storage } from "@/lib/firebase";
import { EmailAuthProvider, reauthenticateWithCredential, deleteUser } from "firebase/auth";
import { doc, deleteDoc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import { toast } from "sonner";

export default function DeleteAccountModal() {
    const { user, profile } = useAuth();
    const [open, setOpen] = useState(false);
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleDeleteAccount = async (e) => {
        e.preventDefault();
        if (!user || !user.email || !password) return;

        setLoading(true);
        setError("");

        try {
            // ১. পাসওয়ার্ড ভেরিফিকেশন
            const credential = EmailAuthProvider.credential(user.email, password);
            await reauthenticateWithCredential(user, credential);

            // ২. Firestore থেকে হ্যান্ডেল রিলিজ করা
            if (profile?.username) {
                try {
                    await deleteDoc(doc(db, "usernames", profile.username));
                } catch (err) {
                    console.warn("Username cleanup warning:", err);
                }
            }

            // ৩. Firestore থেকে ইউজার প্রোফাইল ডিলিট করা
            try {
                await deleteDoc(doc(db, "users", user.uid));
            } catch (err) {
                console.warn("User doc cleanup warning:", err);
            }

            // ৪. Firebase Storage থেকে প্রোফাইল ছবি ডিলিট করা
            if (profile?.photoURL) {
                try {
                    const photoRef = ref(storage, `profiles/${user.uid}`);
                    await deleteObject(photoRef);
                } catch (err) {
                    console.warn("Storage photo cleanup warning:", err);
                }
            }

            // ৫. Firebase Auth থেকে ইউজার পার্মানেন্টলি ডিলিট করা
            await deleteUser(user);

            toast.success("Your account and all associated data have been permanently deleted.");
            setOpen(false);
            router.push("/");
        } catch (err) {
            // console.error সরিয়ে সাধারণ warn করা হলো যাতে লোকালহোস্টে লাল স্ক্রিন না পপআপ করে
            console.warn("Re-auth verification status:", err.code);

            if (err.code === "auth/wrong-password" || err.code === "auth/invalid-credential") {
                setError("Incorrect password. Please verify and try again.");
            } else if (err.code === "auth/too-many-requests") {
                setError("Too many failed attempts. Please wait a few minutes.");
            } else {
                setError("Security verification failed. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={(val) => { setOpen(val); setError(""); setPassword(""); }}>
            <DialogTrigger asChild>
                <Button
                    type="button"
                    variant="destructive"
                    className="w-full h-11 rounded-xl text-xs font-semibold shadow-sm transition-all active:scale-[0.99] whitespace-nowrap"
                >
                    Terminate Account
                </Button>
            </DialogTrigger>

            <DialogContent className="w-[92vw] sm:max-w-[420px] rounded-3xl bg-card text-card-foreground border border-border p-6 sm:p-7 shadow-2xl">
                <DialogHeader className="space-y-3">
                    <div className="w-12 h-12 bg-destructive/10 text-destructive border border-destructive/20 rounded-2xl flex items-center justify-center mx-auto sm:mx-0">
                        <Trash2 size={22} />
                    </div>
                    <div>
                        <DialogTitle className="text-xl font-bold tracking-tight text-foreground">
                            Confirm Account Termination
                        </DialogTitle>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                            This action is permanent. All your saved bookmarks, handle reservations, and preferences will be permanently wiped.
                        </p>
                    </div>
                </DialogHeader>

                <form onSubmit={handleDeleteAccount} className="space-y-4 pt-2">
                    <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-muted-foreground ml-1">
                            Enter Password to Confirm
                        </label>
                        <Input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => { setPassword(e.target.value); setError(""); }}
                            placeholder="Your current password"
                            className="h-11 rounded-xl bg-secondary/40 border-border/60 text-foreground px-4 text-sm font-medium focus:ring-2 focus:ring-destructive/20 focus:border-destructive/40 transition-all"
                        />
                    </div>

                    {error && (
                        <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive text-xs font-medium animate-in fade-in duration-200">
                            <AlertTriangle size={15} className="shrink-0" />
                            <span>{error}</span>
                        </div>
                    )}

                    <div className="flex gap-2.5 pt-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setOpen(false)}
                            className="flex-1 h-11 rounded-xl border-border bg-card hover:bg-muted font-semibold text-foreground text-sm"
                        >
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            disabled={loading || !password}
                            className="flex-[2] h-11 rounded-xl bg-destructive text-destructive-foreground font-semibold shadow-sm hover:opacity-90 text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.99] disabled:opacity-50"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="animate-spin" size={16} />
                                    <span>Verifying & Deleting...</span>
                                </>
                            ) : (
                                "Delete Account"
                            )}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}