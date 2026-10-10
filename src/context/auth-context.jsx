// src/context/auth-context.jsx

"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import {
  onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword,
  signOut, updateProfile, sendPasswordResetEmail
} from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import {
  doc, setDoc, updateDoc, arrayUnion, arrayRemove,
  writeBatch, serverTimestamp, getDoc
} from "firebase/firestore";

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // ১. ওয়ান-টাইম ফেচ ফাংশন (কোনো ব্যান্ডউইথ লিক নেই)
  const fetchUserProfile = useCallback(async (uid) => {
    try {
      const docSnap = await getDoc(doc(db, "users", uid));
      if (docSnap.exists()) {
        setProfile(docSnap.data());
      }
    } catch (err) {
      console.error("Failed to fetch user profile:", err);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // রিয়েল-টাইম onSnapshot বাদ দিয়ে শুধু ১ বার ফেচ করা হলো
        await fetchUserProfile(currentUser.uid);
      } else {
        setProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [fetchUserProfile]);

  // লোকাল স্টেট সরাসরি আপডেট করার ফাংশন (Firestore রিড খরচ বাঁচাতে)
  const setLocalProfileData = (partialData) => {
    setProfile((prev) => (prev ? { ...prev, ...partialData } : partialData));
  };

  // ইউজারনেম আপডেট লজিক
  const updateUsername = async (newUsername) => {
    if (!user || !profile) throw new Error("User not authenticated");

    const cleanNewName = newUsername.replace("@", "").toLowerCase().trim();
    const oldUsername = profile.username;

    // ১৮০ দিনের চেক
    if (profile.lastUsernameChange) {
      const lastChange = profile.lastUsernameChange.toDate ? profile.lastUsernameChange.toDate() : new Date(profile.lastUsernameChange);
      const daysDiff = (new Date().getTime() - lastChange.getTime()) / (1000 * 3600 * 24);
      if (daysDiff < 180) {
        throw new Error(`Wait ${Math.ceil(180 - daysDiff)} more days to change handle.`);
      }
    }

    const batch = writeBatch(db);
    batch.delete(doc(db, "usernames", oldUsername));
    batch.set(doc(db, "usernames", cleanNewName), { email: user.email, uid: user.uid });
    batch.update(doc(db, "users", user.uid), {
      username: cleanNewName,
      lastUsernameChange: serverTimestamp()
    });

    await batch.commit();
    await updateProfile(user, { displayName: `@${cleanNewName}` });

    // লোকাল স্টেট সাথে সাথে আপডেট
    setLocalProfileData({ username: cleanNewName, lastUsernameChange: new Date() });
  };

  const signup = async (username, email, pass) => {
    const cleanUsername = username.replace("@", "").toLowerCase();
    const res = await createUserWithEmailAndPassword(auth, email, pass);
    if (res.user) {
      await updateProfile(res.user, { displayName: `@${cleanUsername}` });
      const initialProfile = {
        username: cleanUsername,
        displayName: "",
        bio: "",
        email: email.toLowerCase(),
        photoURL: "",
        bannerColor: "#6366f1",
        bookmarks: [],
        isVerified: false,
        lastUsernameChange: null
      };
      await setDoc(doc(db, "users", res.user.uid), initialProfile);
      await setDoc(doc(db, "usernames", cleanUsername), { email: email.toLowerCase(), uid: res.user.uid });
      setProfile(initialProfile);
    }
  };

  const login = async (identifier, pass) => {
    let email = identifier;
    if (identifier.startsWith("@")) {
      const uName = identifier.replace("@", "").toLowerCase();
      const uRef = await getDoc(doc(db, "usernames", uName));
      if (!uRef.exists()) throw new Error("Username not found.");
      email = uRef.data().email;
    }
    await signInWithEmailAndPassword(auth, email, pass);
  };

  const toggleBookmark = async (toolId) => {
    if (!user || !profile) return;
    const userRef = doc(db, "users", user.uid);
    const isBookmarked = profile.bookmarks?.includes(toolId);

    // লোকাল স্টেট তৎক্ষণাৎ আপডেট (জিরো ল্যাগ)
    const updatedBookmarks = isBookmarked
      ? profile.bookmarks.filter(id => id !== toolId)
      : [...(profile.bookmarks || []), toolId];
    setLocalProfileData({ bookmarks: updatedBookmarks });

    await updateDoc(userRef, {
      bookmarks: isBookmarked ? arrayRemove(toolId) : arrayUnion(toolId)
    });
  };

  const resetPassword = async (identifier) => {
    let email = identifier;
    if (identifier.startsWith("@")) {
      const uName = identifier.replace("@", "").toLowerCase();
      const uRef = await getDoc(doc(db, "usernames", uName));
      if (!uRef.exists()) throw new Error("This username is not linked to any account.");
      email = uRef.data().email;
    }
    await sendPasswordResetEmail(auth, email, {
      url: window.location.origin + "/login",
    });
  };

  const logout = async () => {
    await signOut(auth);
    setProfile(null);
  };

  return (
    <AuthContext.Provider value={{
      user, profile, loading, signup, login, logout, resetPassword,
      toggleBookmark, updateUsername, setLocalProfileData, fetchUserProfile
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