// src\lib\utils.js

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

/**
 * Firebase Auth Error Code Mapping to Professional Messages
 */
export function getFriendlyErrorMessage(errorCode) {
    const errorMap = {
        // Signup Errors
        "auth/email-already-in-use": "This email is already registered. Please log in instead.",
        "auth/invalid-email": "Please enter a valid email address.",
        "auth/weak-password": "Password is too weak. Use at least 8 characters.",
        "auth/operation-not-allowed": "Signup is currently disabled. Please contact support.",

        // Login Errors
        "auth/user-not-found": "No account found with this email or username.",
        "auth/wrong-password": "Incorrect password. Please check and try again.",
        "auth/invalid-credential": "Invalid login credentials. Please check your username/password.",
        "auth/user-disabled": "This account has been disabled. Contact support for help.",

        // General Errors
        "auth/too-many-requests": "Access temporarily blocked due to multiple failed attempts. Please wait a few minutes.",
        "auth/network-request-failed": "Network error. Please check your internet connection.",
        "auth/popup-closed-by-user": "The login popup was closed before completion.",
    };

    return (errorCode && errorMap[errorCode]) || "An unexpected authentication error occurred. Please try again.";
}