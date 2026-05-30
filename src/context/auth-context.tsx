// src/context/auth-context.tsx

"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { 
  onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, 
  signOut, User, updateProfile, sendPasswordResetEmail 
} from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { 
  doc, setDoc, onSnapshot, updateDoc, arrayUnion, arrayRemove, 
  writeBatch, serverTimestamp, getDoc 
} from "firebase/firestore";

// ১. প্রোফাইল ইন্টারফেস
interface UserProfile {
  username: string;
  email: string;
  photoURL: string;
  bookmarks: string[];
  isVerified: boolean;
  lastUsernameChange: any;
}

// ২. মেইন কন্টেক্সট টাইপ (এখানে updateUsername যোগ করা হয়েছে)
interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  signup: (username: string, email: string, pass: string) => Promise<void>;
  login: (identifier: string, pass: string) => Promise<void>;
  resetPassword: (emailOrUser: string) => Promise<void>;
  toggleBookmark: (toolId: string) => Promise<void>;
  updateUsername: (newUsername: string) => Promise<void>; // এই লাইনটি জরুরি
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        onSnapshot(doc(db, "users", currentUser.uid), (docSnap) => {
          if (docSnap.exists()) setProfile(docSnap.data() as UserProfile);
        });
      } else {
        setProfile(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // ৩. ইউজারনেম আপডেট লজিক (১৮০ দিনের Cooldown সহ)
  const updateUsername = async (newUsername: string) => {
    if (!user || !profile) throw new Error("User not authenticated");

    const cleanNewName = newUsername.replace("@", "").toLowerCase().trim();
    const oldUsername = profile.username;

    // ১৮০ দিনের চেক
    if (profile.lastUsernameChange) {
      const lastChange = profile.lastUsernameChange.toDate();
      const daysDiff = (new Date().getTime() - lastChange.getTime()) / (1000 * 3600 * 24);
      if (daysDiff < 180) {
        throw new Error(`Wait ${Math.ceil(180 - daysDiff)} more days to change username.`);
      }
    }

    const batch = writeBatch(db);
    // পুরাতন ইউজারনেম ডিলিট
    batch.delete(doc(db, "usernames", oldUsername));
    // নতুন ইউজারনেম সেট
    batch.set(doc(db, "usernames", cleanNewName), { email: user.email, uid: user.uid });
    // ইউজার প্রোফাইল আপডেট
    batch.update(doc(db, "users", user.uid), {
      username: cleanNewName,
      lastUsernameChange: serverTimestamp()
    });

    await batch.commit();
    await updateProfile(user, { displayName: `@${cleanNewName}` });
  };

  const signup = async (username: string, email: string, pass: string) => {
    const cleanUsername = username.replace("@", "").toLowerCase();
    const res = await createUserWithEmailAndPassword(auth, email, pass);
    if (res.user) {
      await updateProfile(res.user, { displayName: `@${cleanUsername}` });
      const initialProfile = {
        username: cleanUsername,
        email: email.toLowerCase(),
        photoURL: "",
        bookmarks: [],
        isVerified: false,
        lastUsernameChange: null
      };
      await setDoc(doc(db, "users", res.user.uid), initialProfile);
      await setDoc(doc(db, "usernames", cleanUsername), { email: email.toLowerCase(), uid: res.user.uid });
    }
  };

  const login = async (identifier: string, pass: string) => {
    let email = identifier;
    if (identifier.startsWith("@")) {
      const uName = identifier.replace("@", "").toLowerCase();
      const uRef = await getDoc(doc(db, "usernames", uName));
      if (!uRef.exists()) throw new Error("Username not found.");
      email = uRef.data().email;
    }
    await signInWithEmailAndPassword(auth, email, pass);
  };

  const toggleBookmark = async (toolId: string) => {
    if (!user || !profile) return;
    const userRef = doc(db, "users", user.uid);
    const isBookmarked = profile.bookmarks?.includes(toolId);
    await updateDoc(userRef, {
      bookmarks: isBookmarked ? arrayRemove(toolId) : arrayUnion(toolId)
    });
  };

  // ৩. Forgot Password
  const resetPassword = async (identifier: string) => {
    let email = identifier;
  
    // যদি ইউজারনেম দিয়ে ট্রাই করে (@ দিয়ে শুরু)
    if (identifier.startsWith("@")) {
      const uName = identifier.replace("@", "").toLowerCase();
      const uRef = await getDoc(doc(db, "usernames", uName));
      
      if (!uRef.exists()) {
        throw new Error("This username is not linked to any account.");
      }
      email = uRef.data().email;
    }
  
    // Firebase-কে লিঙ্ক পাঠানোর নির্দেশ
    await sendPasswordResetEmail(auth, email, {
      url: window.location.origin + "/login", // পাসওয়ার্ড রিসেট শেষে ইউজারকে যেখানে পাঠাবে
    });
  };

  const logout = async () => await signOut(auth);

  return (
    <AuthContext.Provider value={{ 
      user, profile, loading, signup, login, logout, resetPassword, toggleBookmark, updateUsername 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth Error");
  return context;
};