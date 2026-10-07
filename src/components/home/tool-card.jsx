// src/components/home/tool-card.jsx

"use client";

import Link from "next/link";
import {
  Camera, FileText, ImageIcon, Code,
  EyeOff, Layout, ShieldCheck, ArrowUpRight,
  ShoppingBag, Lock, Sparkles
} from "lucide-react";

// Icon mapping for dynamic icon rendering
const IconMap = {
  camera: Camera,
  "file-text": FileText,
  image: ImageIcon,
  code: Code,
  "eye-off": EyeOff,
  layout: Layout,
  "shield-check": ShieldCheck,
  "shopping-bag": ShoppingBag,
  "lock": Lock,
};

export default function ToolCard({ id, title, description, iconName, href, status, category, isNew }) {
  const isComingSoon = status === "Coming soon" || status === "coming soon";
  const Icon = IconMap[iconName] || Camera;

  return (
    <div className={`group relative block h-full ${isComingSoon ? "cursor-not-allowed" : "cursor-pointer"}`}>
      <Link href={isComingSoon ? "#" : href} className="block h-full">

        {/* --- Animated Border (More Subtle & Professional) --- */}
        <div className="absolute -inset-[1px] rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden -z-10">
          <div className="absolute inset-[-500%] bg-[conic-gradient(from_0deg,#3b82f6,#8b5cf6,#3b82f6)] animate-rotate-gradient" />
        </div>

        {/* --- Card Body --- */}
        <div className="relative h-full p-8 rounded-[2rem] bg-card border border-border/50 group-hover:border-transparent transition-all duration-500 shadow-sm group-hover:shadow-2xl">
          <div className="flex flex-col h-full space-y-6">

            {/* Top Bar: Icon & Badges */}
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-secondary/50 border border-border/40 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-medium bg-secondary text-muted-foreground dark:text-slate-400 border border-border/50">
                  {category}
                </span>
                {isNew && (
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-500/10 text-green-600 rounded-full animate-pulse border border-green-500/10">
                    <div className="w-1 h-1 rounded-full bg-green-600" />
                    <span className="text-[10px] font-semibold tracking-normal">New</span>
                  </div>
                )}
              </div>
            </div>

            {/* Content: Title & Description */}
            <div className="flex-grow space-y-2.5">
              <h3 className="text-xl font-semibold text-foreground dark:text-slate-100 group-hover:text-blue-500 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-[13px] text-muted-foreground dark:text-slate-400 leading-relaxed font-medium line-clamp-3">
                {description}
              </p>
            </div>

            {/* Bottom Bar: Action Indicator */}
            <div className="pt-4 border-t border-border/40 flex justify-between items-center">
              {isComingSoon ? (
                <div className="flex items-center gap-2 text-[10px] font-medium text-slate-400 italic">
                  <Lock size={12} />
                  <span>Arriving soon...</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 text-[11px] font-semibold text-blue-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                  <span>Launch utility</span>
                  <ArrowUpRight size={14} strokeWidth={2} />
                </div>
              )}

              <div className="opacity-10 transition-opacity group-hover:opacity-100">
                <Sparkles size={14} className="text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}