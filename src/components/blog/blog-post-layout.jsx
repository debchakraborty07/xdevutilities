// src/components/blog/blog-post-layout.jsx

import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, Sparkles, ChevronRight, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogPostLayout({
  title,
  description,
  date = "October 2026",
  readTime = "8 min read",
  category = "Career Engineering",
  relatedTool = null,
  nextPost = null,
  children,
}) {
  return (
    <article className="min-h-screen bg-background text-foreground pb-24 font-sans">
      
      {/* ১. টপ ব্রেডক্রাম্ব ও হেডার ব্যানার */}
      <header className="border-b border-border bg-card/40 py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl space-y-6">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-foreground truncate max-w-[200px] sm:max-w-none">{category}</span>
          </nav>

          {/* Article Title */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
              <Sparkles size={13} />
              <span>{category}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-semibold text-foreground dark:text-slate-50 leading-[1.1]">
              {title}
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>

          {/* Author & Publication Metadata (E-E-A-T Goldmine) */}
          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-muted-foreground border-t border-border/60">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
                D
              </div>
              <div>
                <span className="font-bold text-foreground block">Debojyoti Chakraborty</span>
                <span className="text-[11px] text-muted-foreground">Lead Systems Engineer</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="opacity-70" />
              <span>{date}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock size={14} className="opacity-70" />
              <span>{readTime}</span>
            </div>
          </div>

        </div>
      </header>

      {/* ২. মূল আর্টিকেলের বডি */}
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 pt-12">
        <div className="prose prose-slate dark:prose-invert max-w-none text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300 space-y-8">
          
          {children}

          {/* ৩. সংশ্লিষ্ট টুলের ইন্টারঅ্যাক্টিভ CTA কার্ড */}
          {relatedTool && (
            <div className="my-14 p-6 sm:p-8 bg-card text-card-foreground border border-border rounded-3xl shadow-sm not-prose flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5 text-center sm:text-left">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Live Utility Workspace</span>
                <h3 className="text-xl font-bold text-foreground">{relatedTool.name}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
                  {relatedTool.desc}
                </p>
              </div>
              <Button asChild className="h-11 px-6 rounded-xl bg-primary text-primary-foreground font-semibold shrink-0 shadow-sm">
                <Link href={relatedTool.href} className="flex items-center gap-2">
                  <span>Launch Tool</span>
                  <ChevronRight size={16} />
                </Link>
              </Button>
            </div>
          )}

          {/* ৪. ফুটারে অথর বায়ো ও রিড নেক্সট */}
          <footer className="pt-10 border-t border-border space-y-8 not-prose">
            <div className="p-6 rounded-2xl bg-muted/40 border border-border flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground font-extrabold flex items-center justify-center shrink-0 text-xl shadow-sm">
                D
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-foreground">About the Author</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Debojyoti Chakraborty</strong> is a full-stack engineer and creator of xdevutilities. He specializes in distributed architectures, browser canvas mechanics, and privacy-preserving web utilities.
                </p>
              </div>
            </div>

            {nextPost && (
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-5 rounded-2xl border border-border bg-card">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Up Next</span>
                  <h4 className="text-sm font-bold text-foreground mt-0.5">{nextPost.title}</h4>
                </div>
                <Button asChild variant="outline" size="sm" className="rounded-xl border-border shrink-0">
                  <Link href={nextPost.href} className="flex items-center gap-1.5">
                    <span>Read Guide</span>
                    <ArrowLeft size={14} className="rotate-180" />
                  </Link>
                </Button>
              </div>
            )}
          </footer>

        </div>
      </div>

    </article>
  );
}