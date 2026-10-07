// src/context/auth-context.jsx

"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { 
  onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, 
  signOut, updateProfile, sendPasswordResetEmail 
} from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { 
  doc, setDoc, onSnapshot, updateDoc, arrayUnion, arrayRemove, 
  writeBatch, serverTimestamp, getDoc 
} from "firebase/firestore";

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        onSnapshot(doc(db, "users", currentUser.uid), (docSnap) => {
          if (docSnap.exists()) setProfile(docSnap.data());
        });
      } else {
        setProfile(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // ইউজারনেম আপডেট লজিক (১৮০ দিনের Cooldown সহ)
  const updateUsername = async (newUsername) => {
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

  const signup = async (username, email, pass) => {
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
    await updateDoc(userRef, {
      bookmarks: isBookmarked ? arrayRemove(toolId) : arrayUnion(toolId)
    });
  };

  // Forgot Password
  const resetPassword = async (identifier) => {
    let email = identifier;
  
    // যদি ইউজারনেম দিয়ে ট্রাই করে (@ দিয়ে শুরু)
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
      url: window.location.origin + "/login", // পাসওয়ার্ড রিসেট শেষে ইউজারকে যেখানে পাঠাবে
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